---
keywords: Experience Platform;home;popular topics;query service;Query service;sample queries;sample query;adobe target;
solution: Experience Platform
title: Sample queries
topic: queries
description: Data from Adobe Target is transformed into Experience Event XDM schema and ingested into Experience Platform as datasets for you. This document contains sample queries for using Query Service with your Adobe Target datasets.
---

# Sample queries for Adobe Target data

Data from Adobe Target is transformed into Experience Event XDM schema and ingested into Adobe Experience Platform as datasets for you. There are many use cases for Adobe Experience Platform Query Service with this data, and the following sample queries should work with your Adobe Target datasets.

In Experience Platform, the friendly name for the dataset is "Adobe Target Experience Events". The name that you should use within a Query Service query is `adobe_target_experience_events`.

## High-level partial XDM field mapping

The following table shows what Target 

The use of `[ ]` denotes an array 

| Name | XDM Field | Notes |
| ---- | --------- | ----- |
| mboxName | `_experience.target.mboxname` | |
| Activity ID | `_experience.target.activities.activityID` | |
| Experience ID | `_experience.target.activities[].activityEvents[]._experience.target.activity.activityevent.context.experienceID` | |
| Segment ID | `_experience.target.activities[].activityEvents[].segmentEvents[].segmentID._id` | |
| Event Scope | `_experience.target.activities[].activityEvents[].eventScope` | Tracks new Visitor and Visit|
| Step ID | `_experience.target.activities[].activityEvents[]._experience.target.activity.activityevent.context.stepID` | Custom step ID for Campaign |
| Price Total | `commerce.order.priceTotal` | |


## Sample queries

The following queries show examples of commonly used queries with Adobe Target.

In the following examples, you will need to edit the SQL to fill in the expected parameters for your queries based on the dataset, variables, or timeframe you are interested in evaluating. Provide parameters wherever you see `{ }` in the SQL.

### Hourly activity counts for a given day

```sql
SELECT
  Hour,
  ActivityID,
  COUNT(ActivityID) AS Instances
FROM
(
  SELECT
    date_format(from_utc_timestamp(timestamp, 'America/New_York'), 'yyyy-MM-dd HH') AS Hour,
    EXPLODE(_experience.target.activities.activityID) AS ActivityID
  FROM adobe_target_experience_events
  WHERE TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}') AND 
    _experience.target.activities IS NOT NULL
)
GROUP BY Hour, ActivityID
ORDER BY Hour DESC, Instances DESC
LIMIT 24
```

### Hourly details for a specific activity for a given day

```sql
SELECT
  date_format(from_utc_timestamp(timestamp, 'America/New_York'), 'yyyy-MM-dd HH') AS Hour,
  _experience.target.activities.activityID AS ActivityID,
  COUNT(ActivityID) AS Instances
FROM adobe_target_experience_events
WHERE
  array_contains( _experience.target.activities.activityID, {Activity ID} ) AND 
    TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}') AND 
  _experience.target.activities IS NOT NULL
GROUP BY Hour, ActivityID
ORDER BY Hour DESC
LIMIT 24
```

### Experience IDs for a specific activity for a given day

```sql
SELECT
  Day,
  Activities.activityID,
  ExperienceID,
  COUNT(ExperienceID) AS Instances
FROM
(
  SELECT
    Day,
    Activities,
    EXPLODE(Activities.activityEvents._experience.target.activity.activityevent.context.experienceID) AS ExperienceID
  FROM
  (
    SELECT
      date_format(from_utc_timestamp(timestamp, 'America/New_York'), 'yyyy-MM-dd') AS Day,
      EXPLODE(_experience.target.activities) AS Activities
    FROM adobe_target_experience_events
    WHERE 
      TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}') AND 
      _experience.target.activities IS NOT NULL
  )
  WHERE Activities.activityID = {activity_id}
)
GROUP BY Day, Activities.activityID, ExperienceID
ORDER BY Day DESC, Instances DESC
LIMIT 20
```

### Return a list of Event Scopes (visitor, visit, impression) by instances per Activity ID for a given day

```sql
SELECT
  Day,
  Activities.activityID,
  EventScope,
  COUNT(EventScope) AS Instances
FROM
(
  SELECT
    Day,
    Activities,
    EXPLODE(Activities.activityEvents.eventScope) AS EventScope
  FROM
  (
    SELECT
      date_format(from_utc_timestamp(timestamp, 'America/New_York'), 'yyyy-MM-dd') AS Day,
      EXPLODE(_experience.target.activities) AS Activities
    FROM adobe_target_experience_events
    WHERE 
      TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}') AND 
      _experience.target.activities IS NOT NULL
  )
)
GROUP BY Day, Activities.activityID, EventScope
ORDER BY Day DESC, Instances DESC
LIMIT 30
```

### Return count of visitors, visits, impressions per activity for a given day

```sql
SELECT
  Hour,
  Activities.activityid,
  SUM(CASE WHEN array_contains( Activities.activityEvents.eventScope, 'visitor' ) THEN 1 END) as Visitors,
  SUM(CASE WHEN array_contains( Activities.activityEvents.eventScope, 'visit' ) THEN 1 END) as Visits,
  SUM(CASE WHEN array_contains( Activities.activityEvents.eventScope, 'impression' ) THEN 1 END) as Impressions
FROM
(
  SELECT
    date_format(from_utc_timestamp(timestamp, 'America/New_York'), 'yyyy-MM-dd HH') AS Hour,
    EXPLODE(_experience.target.activities) AS Activities
  FROM adobe_target_experience_events
  WHERE
    TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}') AND 
    _experience.target.activities IS NOT NULL
)
GROUP BY Hour, Activities.activityid
ORDER BY Hour DESC, Visitors DESC
LIMIT 30
```

### Return visitors, visits, impressions for Experience ID, Segment ID, and EventScope for a given day

```sql
SELECT
  Day,
  Activities.activityID,
  ExperienceID,
  SegmentID._id,
  SUM(CASE WHEN ActivityEvent.eventScope = 'visitor' THEN 1 END) as Visitors,
  SUM(CASE WHEN ActivityEvent.eventScope = 'visit' THEN 1 END) as Visits,
  SUM(CASE WHEN ActivityEvent.eventScope = 'impression' THEN 1 END) as Impressions
FROM
(
  SELECT
    Day,
    Activities,
    ActivityEvent,
    ActivityEvent._experience.target.activity.activityevent.context.experienceID AS ExperienceID,
    EXPLODE(ActivityEvent.segmentEvents.segmentID) AS SegmentID
  FROM
  (
    SELECT
      Day,
      Activities,
      EXPLODE(Activities.activityEvents) AS ActivityEvent
    FROM
    (
      SELECT
        date_format(from_utc_timestamp(timestamp, 'America/New_York'), 'yyyy-MM-dd') AS Day,
        EXPLODE(_experience.target.activities) AS Activities
      FROM adobe_target_experience_events
      WHERE 
        TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}') AND 
        _experience.target.activities IS NOT NULL
      LIMIT 1000000
    )
    LIMIT 1000000
  )
  LIMIT 1000000
)
GROUP BY Day, Activities.activityID, ExperienceID, SegmentID._id
ORDER BY Day DESC, Activities.activityID, ExperienceID ASC, SegmentID._id ASC, Visitors DESC
LIMIT 20
```

### Return mbox names and count of records for a given day

```sql
SELECT
  _experience.target.mboxname,
  COUNT(timestamp) AS records
FROM
  adobe_target_experience_events
WHERE
  TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}')
  GROUP BY _experience.target.mboxname ORDER BY records DESC
LIMIT 100
```
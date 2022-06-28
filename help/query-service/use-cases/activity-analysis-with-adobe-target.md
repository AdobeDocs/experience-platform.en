---
title: Activity Analysis With Adobe Target
description: This document explains how to use Query Service to create actionable insights from datasets created with your Adobe Target data.
exl-id: a5181ee2-1e1c-405d-8dfe-5a32c28ac9f1
---
# Activity analysis with Adobe Target

Adobe Experience Platform allows you to ingest data from Adobe Target using Experience Data Model (XDM) fields to create datasets for use with Query Service. As Adobe Target is designed to customize content and personalize user experiences, queries run on these datasets allow for highly personalized and focussed insights by analyzing user activity through SQL.

This document provides a variety of sample SQL queries that demonstrate common use cases based on the customers' behaviors and characteristics.

## Getting started

For each of the following use cases, a parameterized SQL query example is provided as a template for you to customize. Provide parameters wherever you see `{ }` in the SQL examples that you are interested in evaluating.

## High-level partial XDM field mapping

The following table lists common Target fields and the corresponding XDM fields they map to.

>[!NOTE]
>
>The use of `[ ]` within the XDM field denotes an array.

| Target field name | XDM field name | Notes |
|---|---|---|
| `mboxName`  | `_experience.target.mboxname` | N/A |
| Activity ID  | `_experience.target.activities.activityID` | N/A |
| Experience ID | `_experience.target.activities[].activityEvents[]._experience.target.activity.activityevent.context.experienceID` | N/A  |
| Segment ID | `_experience.target.activities[].activityEvents[].segmentEvents[].segmentID._id` | N/A  |
| Event Scope | `_experience.target.activities[].activityEvents[].eventScope` | This field tracks new visitors and visits. |
| Step ID | `_experience.target.activities[].activityEvents[]._experience.target.activity.activityevent.context.stepID` | This field is a custom step ID for Adobe Campaign. |
| Price Total | commerce.order.priceTotal | N/A |

>[!IMPORTANT]
>
>The name of a dataset automatically created using Target data is “Adobe Target Experience Events”. When using this dataset with queries, use the name `adobe_target_experience_events`.

## Objectives 

By analyzing user activities, you can personalize content for a specific audience and test different versions of the content for an individual entity. Furthermore, by analyzing a specific activity over a given time period or for individual users, the performance of each individual activity can be more clearly understood. The results of this combined analysis can be utilized to understand the performance of each individual activity.

The following personalization use cases are created using Adobe Target data and focus on user activities to create valuable insights into customers’ behavior over business applications.

This guide illustrates the following key concepts through the use case examples:

* To understand the performance of an activity ID for a given day, such as count, details, and associated experience IDs.
* To determine the visitor and event scope for an activity.
* To gather count of visitors, visits and impression information for Experience ID, Segment ID and Activity ID.

### Generate hourly activity count for a given day

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

### Generate hourly details for a specific particular

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

### Determine the list of experience IDs for a specific activity for a given day

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

### Determine the count of visitors, visits, and impressions per activity for a given day

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

### Determine visitors, visits, and impressions for Experience ID, Segment ID and EventScope for a given day

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

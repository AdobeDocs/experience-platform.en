---
title: Troubleshooting Guide For Identity Graph Linking Rules
description: Learn how to troubleshoot common issues in identity graph linking rules
badge: Beta
---
# Troubleshooting guide for identity graph linking rules

As you test and validate identity graph linking rules, you may tun into some issues related to data ingestion and graph behavior. Read this document to learn how to troubleshoot some common issues that you might encounter when working with identity graph linking rules.

## Data ingestion flow overview {#data-ingestion-flow-overview}

The following diagram is a simplified representation of how data flows into Adobe Experience Platform and Applications. Use this diagram as reference to help you get a better understanding of the contents of this page.

It is important to note the following factors:

* For streaming data, all three stores (Real-Time Customer Profile, Identity Service, and data lake) will start processing the data when the data is sent. However, the latency to complete the processing of the data is dependant on the service. Usually, data lake will take a longer time to process, compared to Profile and Identity.
  * If the data does not appear when running a query against a dataset even after a couple of hours, then it is likely that the data did not get ingested into Experience Platform.
* For batch data, all data will flow into data lake first, then the data will be propagated to Profile and Identity if the dataset is enabled for Profile and Identity.

## Data ingestion issues {#data-ingestion-issues}

>[!NOTE]
>
>In this section, the assumption is that data is successfully ingested into data lake and that there are no syntax or other errors that would reject the data from being ingested into Experience Platform in the first place.

### My identities are not getting ingested into Identity Service{#my-identities-are-not-getting-ingested-into-identity-service}

There are various reasons for why this could happen, including, but not limited to the following:

* [The dataset is not enabled for Profile](../../catalog/datasets/enable-for-profile.md).
* The record is skipped because there is only one identity in the event.
* [A validation failure occurred in Identity Service](../guardrails.md#identity-value-validation).
  * For example, an ECID could have exceeded the maximum length of 38 characters.
* By default, [AAIDs are blocked from ingestion](../guardrails.md#identity-namespace-ingestion).
* The identity is removed because of [system guardrails](../guardrails.md#understanding-the-deletion-logic-when-an-identity-graph-at-capacity-is-updated).

Within the context of identity graph linking rules, a record may be rejected from Identity Service because the incoming event has two or more identities with the same unique namespace but different identity value, usually due to implementation errors.

Consider the following event with two assumptions:

* The field name CRMID is marked as an identity with the namespace CRMID.
* The namespace CRMID is defined as a unique namespace.

The following event will return an error message indicating that ingestion has failed because the ingestion of this erroneous event would have resulted in graph collapse. In the following event, two entities (Alice and Bob) are both associated with the same namespace (CRMID).

```json
{ 
  "_id": "random_string", 
  "eventType": "web browsing event", 
  "identityMap": { 
    "ECID": [ 
      { 
        "id": "11111111111111111111111111111111111111", 
        "primary": false 
      } 
    ], 
    "CRMID": [ 
      { 
        "id": "Alice", 
        "primary": true 
      } 
    ] 
  }, 
  "CRMID": "Bob", 
  "timestamp": "2024-08-17T15:22:51+00:00", 
  "web": { 
    "webPageDetails": { 
      "URL": "https://www.adobe.com/acrobat.html", 
      "name": "Adobe Acrobat" 
    } 
  } 
} 
```

**Troubleshooting steps**

To resolve this error, you must first collect the following information:

* The identity value (`identity_value`)you expected to be ingested in the identity graph.
* The dataset (`dataset_name`) in which the event was sent in.

Next, use Adobe Experience Platform Query Service and run the following query:

>[!TIP]
>
>Replace `dataset_name` and `identity_value` with the information that you collected.

```sql
  SELECT key, col.id as identityValue, timestamp, _id, identityMap, * 
  FROM (SELECT key, explode(value), * 
  FROM (SELECT explode(identityMap), * 
  FROM dataset_name)) WHERE col.id = 'identity_value' 
```

After running your query, find the event record that you expected to generate a graph, and then validate that the identity values are different in the same row. View the following image for an example:

![]

>[!NOTE]
>
>If the two identities are exactly the same, and if the event is ingested via streaming, then both Identity and Profile will deduplicate the identity.

### My experience event fragments are not getting ingested into Profile {#my-experience-event-fragments-are-not-getting-ingested-into-profile}

There are various reasons that contribute as to why your experience fragments are not getting ingested into Profile, including but not limited to:

* [The dataset is not enabled for Profile](../../catalog/datasets/enable-for-profile.md).
* [A validation failure may have occurred on Profile](../../xdm/classes/experienceevent.md).
  * For example, an experience event must contain both an `_id` and a `timestamp`.
  * Additionally, the `_id` must be unique for each event (record).

In the context of namespace priority, Profile will reject any event that contains two or more identities with the highest namespace priority. For example, if GAID is not marked as a unique namespace and two identities each with a GAID namespace and different identity values came in, then Profile will not store any of the events.

**Troubleshooting steps**

To resolve this error, read the troubleshooting steps outlined in the guide above on [troubleshooting errors regarding data not being ingested to Identity Service](#my-identities-are-not-getting-ingested-into-identity-service).

### My experience event fragments are ingested, but have the "wrong" primary identity in Profile

It is important to understand how namespace priority functions to determine how event fragments determine its primary identity.

* Once you have configured and saved your [identity settings](./identity-settings-ui.md) for a given sandbox, Profile will then use [namespace priority](namespace-priority.md#real-time-customer-profile-primary-identity-determination-for-experience-events) to determine the primary identity. In the case of identityMap, Profile will then no longer use the `primary=true` flag.
* It is important to note that while Profile will no longer refer to this flag, other services on Experience Platform may continue to use the `primary=true` flag.

In order for [authenticated user events](configuration.md#ingest-your-data) to be tied to the person namespace, all authenticated events must contain the person namespace (CRMID). This means that even after a user logs in, the person namespace must still be present on every authenticated event.

You may continue to see `primary=true` 'events' flag when looking up a profile in profile viewer. However, this is ignored and will not be used by Profile.

AAIDs are blocked by default. Therefore, if you are using the [Adobe Analytics source connector](../../sources/tutorials/ui/create/adobe-applications/analytics.md), you must ensure that the ECID is prioritized higher than the ECID so that the unauthenticated events will have a primary identity of ECID.

**Troubleshooting steps**

* To validated that authenticated events contain both the person and cookie namespace, read the troubleshooting steps outlined in the guide above on [troubleshooting errors regarding data not being ingested to Identity Service](#my-identities-are-not-getting-ingested-into-identity-service).
* To validate that authenticated events have the primary identity of the person namespace (e.g. CRMID), search the person namespace on profile viewer using no-stitch merge policy (this is the merge policy that does not use private graph). This search will only return events associated to the person namespace. 

## Graph behavior related issues {#graph-behavior-related-issues}

This section outlines common issues you may encounter regarding how the identity graph behaves.

### The identity is getting linked to the 'wrong' person

The identity optimization algorithm will honour [the most recently established links and remove the oldest links](./identity-optimization-algorithm.md#identity-optimization-algorithm-details). Therefore, it is possible that once this feature is enabled, ECIDs could be reassigned (re-linked) from one person to another. To understand the history of how an identity gets linked over time, follow the steps below:

**Troubleshooting steps**

>[!NOTE]
>
>The following steps will retrieve information under the following assumptions:
>
>* A single dataset is in use (this will not query multiple datasets).
>
>*The data is not deleted from data lake due to dataset TTL, privacy delete, delete record, etc.

First, you must collect the following information:

* The identity symbol (namespaceCode) of the cookie namespace (e.g. ECID) and the person namespace (e.g. CRMID) that were sent.
  * For Web SDK implementations, these are usually the namespaces included in the identityMap.
  * For Analytics source connector implementations, these are the cookie identifier included in the identityMap. The person identifier is an eVar field marked as an identity.
* The dataset in which the event was sent in (dataset_name).
* The identity value of the cookie namespace to look up (identity_value).

If you do not know the identity value of your cookie identifier and you would like to search for a cookie ID that would have been linked to multiple person identifiers, then you must run the following query. This query assumes ECID as the cookie namespace and CRMID as the person namespace.

>[!BEGINTABS]

>[!TAB Web SDK implementation]

```sql
  SELECT identityMap['ECID'][0]['id'], count(distinct identityMap['CRMID'][0]['id']) as crmidCount FROM dataset_name GROUP BY identityMap['ECID'][0]['id'] ORDER BY crmidCount desc 
```

>[!TAB Analytics source connector implementation]

```sql
  SELECT identityMap['ECID'][0]['id'], count(distinct personID) as crmidCount FROM dataset_name group by identityMap['ECID'][0]['id'] ORDER BY crmidCount desc 
```

**Note:** personID refers to the path of the descriptor. You can find this information under schemas.
 
>[!ENDTABS]

Next, examine the association of the cookie namespace in order of timestamp by running the following query:

```sql
  SELECT identityMap['CRMID'][0]['id'] as personEntity, * 
  FROM dataset_name 
  WHERE identitymap['ECID'][0].id ='identity_value' 
  ORDER BY timestamp desc 
```

### The identity optimization algorithm is not 'working' as expected

**Troubleshooting steps**

Refer to the documentation on [identity optimization algorithm](./identity-optimization-algorithm.md), as well as the types of graph structures that are support.

  * Read the [graph configuration guide](./example-configurations.md) for examples of supported graph structures.
  * You can also read the [implementation guide](./configuration.md#appendix) for examples of unsupported graph structures. There are two scenarios that could happen:
    * No single namespace across all your profiles.
    * A ["dangling ID"](./configuration.md#dangling-loginid-scenario) scenario occurs. In this scenario, Identity Service is unable to determine if the dangling ID is associated to any of the person entities in the graphs.

You can also use the [graph simulation tool in the UI](./graph-simulation.md) to simulate events and configure your own unique namespace and namespace priority settings. Doing so can help give you a baseline understanding of how the identity optimization algorithm should behave. 

If your simulation results match your graph behavior expectations, then you can check and see if your [identity settings](./identity-settings-ui.md) matches the settings that you have configured in your simulation.

### I still see collapsed graphs in my sandbox even after configuring identity settings

Identity graphs will adhere to your configured unique namespace and namespace priority _after_ the settings have been configured. Any "collapsed" graphs _before_ enabling the feature will not be subject to the settings you save.

**Troubleshooting steps**


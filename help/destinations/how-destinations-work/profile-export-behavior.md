---
title: Profile export behavior
description: Learn how profile export behavior varies between the different integration patters supported in Experience Platform destinations.
---
# Profile export behavior for different destination types

There are several destination types in Experience Platform, as shown in the diagram below. These destinations have slightly different export patterns with regards to what triggers a destination export and what is included in an export, as described in the sections further below.

>[!IMPORTANT]
>
>This documentation page only describes the profile export behavior for the connections highlighted at the bottom of the diagram.

![Types of destinations diagram](/help/destinations/assets/how-destinations-work/types-of-destinations-v4.png)

## Microbatching and aggregation policy

Before diving into specific information per destination type, it is important to understand the concepts of microbatching and aggregation policy for streaming destinations.

Experience Platform destinations export data to API-based integrations as HTTPS calls. Once the destinations service is notified by other upstream services that profiles have been updated as a result of batch ingestion, batch segmentation, streaming segmentation or identity graph changes, data is exported and sent to streaming destinations.

The process by which profiles are aggregated into HTTPS messages before being dispatched to destination API endpoints is called *microbatching*. 

Take the [Facebook destination](/help/destinations/catalog/social/facebook.md) as an example - data is sent in an aggregated fashion, where the destinations service takes all the incoming data from the profile service upstream and aggregates it by one of the following, before dispatching it to Facebook: 

* Number of records (maximum of 10.000) or
* Time window interval (30 minutes) 
  
Whichever of the thresholds above is first met triggers an export to Facebook. So, in the Facebook Custom Audiences dashboard, you might see audiences coming in from Experience Platform in 10.000 record increments. You might be seeing 10.000 records every 10-15 minutes because the data gets processed and aggregated faster than the 30 minutes export interval, and gets sent faster, so about every 10-15 minutes until all records have been processed. If there are insufficient records to make up a 10.000 batch, then the current number of records will be sent as is when the time window threshold is met, so you might see smaller batches sent to Facebook as well.

As another example, consider the [HTTP API destination](/help/destinations/catalog/streaming/http-destination.md), which has a best effort aggregation policy, with `maxUsersPerRequest: 10`. This means that a maximum of ten profiles will be aggregated before an HTTP call is fired to this destination, but Experience Platform tries to dispatch profiles to the destination as soon as the destinations service receives updated re-evaluation information from an upstream service. 

The aggregation policy is configurable, and destination developers can decide how to configure the aggregation policy to best meet the rate limitations of the API endpoints downstream. Read more about [aggregation policy](/help/destinations/destination-sdk/destination-configuration.md#aggregation) in the Destination SDK documentation. 

## Streaming profile export (enterprise) destinations {#streaming-profile-destinations}

>[!IMPORTANT]
>
> Enterprise destinations are available only to [Adobe Real-Time Customer Data Platform Ultimate](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform.html) customers.

The [enterprise destinations](/help/destinations/destination-types.md#streaming-profile-export) in Experience Platform are Amazon Kinesis, Azure Event Hubs, and HTTP API.

Experience Platform optimizes the profile export behavior to your enterprise destination, to only export data to your API endpoint when relevant updates to a profile have occurred following segment qualification or other significant events. Profiles are exported to your destination in the following situations:

* The profile update was determined by a change in segment membership for at least one of the segments mapped to the destination. For example, the profile has qualified for one of the segments mapped to the destination or has exited one of the segments mapped to the destination.
* The profile update was determined by a change in the [identity map](/help/xdm/field-groups/profile/identitymap.md). For example, a profile who had already qualified for one of the segments mapped to the destination has been added a new identity in the identity map attribute.
* The profile update was determined by a change in attributes for at least one of the attributes mapped to the destination. For example, one of the attributes mapped to the destination in the mapping step is added to a profile.

In all the cases described above, only the profiles where relevant updates have occurred are exported to your destination. For example, if a segment mapped to the destination flow has a hundred members, and five new profiles qualify for the segment, the export to your destination is incremental and only includes the five new profiles.

Note that the all the mapped attributes are exported for a profile, no matter where the changes lie. So, in the example above all the mapped attributes for those five new profiles will be exported even if the attributes themselves haven't changed.

### What determines a data export and what is included in the export

Regarding the data that is exported for a given profile, it is important to understand the two different concepts of *what determines a data export to your enterprise destination* and *which data is included in the export*.

|What determines a destination export | What is included in the destination export |
|---------|----------|
|<ul><li>Mapped attributes and segments serve as the cue for a destination export. This means that if any mapped segments change states (from null to realized or from realized/existing to exiting) or any mapped attributes are updated, a destination export would be kicked off.</li><li>Since identities cannot currently be mapped to enterprise destinations, changes in any identity on a given profile also determine destination exports.</li><li>A change for an attribute is defined as any update on the attribute, whether or not it is the same value. This means that an overwrite on an attribute is considered a change even if the value itself has not changed.</li></ul> | <ul><li>All segments (with the latest membership status), no matter if they are mapped in the dataflow or not, are included in the `segmentMembership` object.</li><li>All identities in the `identityMap` object are included as well (Experience Platform currently does not support identity mapping in the enterprise destination).</li><li>Only the mapped attributes are included in the destination export.</li></ul> |

{style="table-layout:fixed"}

For example, consider this dataflow to an HTTP destination where three segments are selected in the dataflow, and four attributes are mapped to the destination.  

![enterprise destination dataflow](/help/destinations/assets/catalog/http/profile-export-example-dataflow.png)

A profile export to the destination can be determined by a profile qualifying for or exiting one of the *three mapped segments*. However, in the data export, in the `segmentMembership` object (see [Exported Data](#exported-data) section below), other unmapped segments might appear, if that particular profile is a member of them. If a profile qualifies for the Customer with DeLorean Cars segment but is also a member of the Watched "Back to the Future" movie and Science fiction fans segments, then these other two segments will also be present in the `segmentMembership` object of the data export, even though these are not mapped in the dataflow.

From a profile attributes point of view, any changes to the four attributes mapped above will determine a destination export and any of the four mapped attributes present on the profile will be present in the data export.

## Streaming API-based destinations {streaming-api-based-destinations}

The profile export behavior for streaming destinations such as Facebook, Trade Desk, and other API-based integrations is identical to the above.

Destination examples: advertising, social, etc.

Experience Platform optimizes the profile export behavior to your streaming destination, to only export data to streaming API-based destinations when relevant updates to a profile have occurred following segment qualification or other significant events. Profiles are exported to your destination in the following situations:

* The profile update was determined by a change in segment membership for at least one of the segments mapped to the destination. For example, the profile has qualified for one of the segments mapped to the destination or has exited one of the segments mapped to the destination.
* The profile update was determined by a change in the [identity map](/help/xdm/field-groups/profile/identitymap.md) for an identity namespace that is marked for export for this destination instance. For example, a profile who had already qualified for one of the segments mapped to the destination has been added a new identity in the identity map attribute.
* The profile update was determined by a change in attributes for at least one of the attributes mapped to the destination. For example, one of the attributes mapped to the destination in the mapping step is added to a profile.

In all the cases described above, only the profiles where relevant updates have occurred are exported to your destination. For example, if a segment mapped to the destination flow has a hundred members, and five new profiles qualify for the segment, the export to your destination is incremental and only includes the five new profiles.

Note that the all the mapped attributes are exported for a profile, no matter where the changes lie. So, in the example above all the mapped attributes for those five new profiles will be exported even if the attributes themselves haven't changed.

### What determines a data export and what is included in the export

Regarding the data that is exported for a given profile, it is important to understand the two different concepts of what determines a data export to your streaming API destination and which data is included in the export.

|What determines a destination export | What is included in the destination export |
|---------|----------|
|<ul><li>Mapped attributes and segments serve as the cue for a destination export. This means that if any mapped segments change states (from null to realized or from realized/existing to exiting) or any mapped attributes are updated, a destination export would be kicked off.</li><li>A change in the identity map is defined as an identity that is added / removed for the [identity graph](/help/identity-service/ui/identity-graph-viewer.md) of the profile, for identity namespaces that are mapped for export.</li><li>A change for an attribute is defined as any update on the attribute, for attributes that are mapped to the destination.</li></ul> | <ul><li>The segments that are mapped to the destination and have changed will be included in the `segmentMembership` object. In some scenarios they might be exported using multiple calls. Also, in some scenarios, some segments that have not changed might be included in the call as well. In any case, only mapped segments will be exported.</li><li>All identities from the namespaces that are mapped to the destination in the `identityMap` object are included as well .</li><li>Only the mapped attributes are included in the destination export.</li></ul> |

{style="table-layout:fixed"}

A profile export to the destination can be determined by a profile qualifying for or exiting one of the three mapped segments. If a profile qualified for Customer with DeLorean Cars segment, this will trigger an export. The other segments ("City - Dallas" and "Basic Site Active") might be exported as well in case the profile has that segment present with one of the possible statuses (realized, existing, exited). Unmapped segments (like Science fiction fans) will not be exported

From a profile attributes point of view, any changes to the four attributes mapped above will determine a destination export and any of the four mapped attributes present on the profile will be present in the data export.

## Batch (file-based destinations)

Add information about how data is exported to batch destinations:

Describe technical workings behind full exports
Describe technical workings behind incremental exports
How are these two different? different pipelines? 


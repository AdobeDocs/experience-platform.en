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

Before diving into specific information per destination type, it is important to understand the concepts of microbatching and aggregation policy for *streaming destinations*.

Experience Platform destinations export data to API-based integrations as HTTPS calls. Once the destinations service is notified by other upstream services that profiles have been updated as a result of batch ingestion, batch segmentation, streaming segmentation or identity graph changes, data is exported and sent to streaming destinations.

The process by which profiles are aggregated into HTTPS messages before being dispatched to destination API endpoints is called *microbatching*. 

Take the [Facebook destination](/help/destinations/catalog/social/facebook.md) with a *[configurable aggregation](/help/destinations/destination-sdk/destination-configuration.md#configurable-aggregation)* policy as an example - data is sent in an aggregated fashion, where the destinations service takes all the incoming data from the profile service upstream and aggregates it by one of the following, before dispatching it to Facebook: 

* Number of records (maximum of 10.000) or
* Time window interval (30 minutes) 
  
Whichever of the thresholds above is first met triggers an export to Facebook. So, in the [!DNL Facebook Custom Audiences] dashboard, you might see audiences coming in from Experience Platform in 10.000 record increments. You might be seeing 10.000 records every 10-15 minutes because the data gets processed and aggregated faster than the 30 minutes export interval, and gets sent faster, so about every 10-15 minutes until all records have been processed. If there are insufficient records to make up a 10.000 batch, then the current number of records will be sent as is when the time window threshold is met, so you might see smaller batches sent to Facebook as well.

As another example, consider the [HTTP API destination](/help/destinations/catalog/streaming/http-destination.md), which has a *[best effort aggregation](/help/destinations/destination-sdk/destination-configuration.md#best-effort-aggregation)* policy, with `maxUsersPerRequest: 10`. This means that a maximum of ten profiles will be aggregated before an HTTP call is fired to this destination, but Experience Platform tries to dispatch profiles to the destination as soon as the destinations service receives updated re-evaluation information from an upstream service. 

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

>[!BEGINSHADEBOX]

For example, consider this dataflow to an HTTP destination where three segments are selected in the dataflow, and four attributes are mapped to the destination.  

![enterprise destination dataflow](/help/destinations/assets/catalog/http/profile-export-example-dataflow.png)

A profile export to the destination can be determined by a profile qualifying for or exiting one of the *three mapped segments*. However, in the data export, in the `segmentMembership` object (see [Exported Data](#exported-data) section below), other unmapped segments might appear, if that particular profile is a member of them. If a profile qualifies for the **Customer with DeLorean Cars** segment but is also a member of the **Watched "Back to the Future" movie** and **Science fiction fans** segments, then these other two segments will also be present in the `segmentMembership` object of the data export, even though these are not mapped in the dataflow.

From a profile attributes point of view, any changes to the four attributes mapped above will determine a destination export and any of the four mapped attributes present on the profile will be present in the data export.

>[!ENDSHADEBOX]

## Streaming API-based destinations {#streaming-api-based-destinations}

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

>[!BEGINSHADEBOX]

For example, consider this dataflow to a streaming destination where three segments are selected in the dataflow.

![streaming destination dataflow](/help/destinations/assets/how-destinations-work/streaming-destination-example-dataflow.png)

A profile export to the destination can be determined by a profile qualifying for or exiting one of the three mapped segments. If a profile qualified for the **Customer with DeLorean Cars** segment, this will trigger an export. The other segments (**City - Dallas** and **Basic Site Active**) might be exported as well in case the profile has that segment present with one of the possible statuses (`realized`, `existing`, `exited`). Unmapped segments (like **Science fiction fans**) will not be exported.

From a profile attributes point of view, any changes to the three attributes mapped above will determine a destination export.

>[!BEGINSHADEBOX]

## Batch (file-based) destinations {#file-based-destinations}

When exporting profiles to [file-based destinations](/help/destinations/destination-types.md#file-based) in Experience Platform, there are three types of schedules (listed below) and two file export options (full or incremental files) that you can use. All these settings are set on a segment level, even when multiple segments are mapped to a single destination dataflow.

* Scheduled exports: Configure a destination, add one or more segments, select if you want to export full or incremental files and select a set time each day or several times per day when files should be exported. For example, a 5 PM export time means that whichever profiles are qualified for the segment will be exported at 5PM. 
* After segment evaluation: The export is triggered immediately after the daily segment evaluation job runs. This means that the exported profile numbers in the file are as close as possible to the latest evaluated population of the segment.
* On demand exports ([export file now](/help/destinations/ui/export-file-now.md)): Based on the latest segment evaluation job, a full file is exported one-time on top of regularly scheduled exports.

In any of the export situations above, the exported files include the profiles that qualified for the export, alongside the columns you selected as XDM attributes for export.

>[!TIP]
>
>When a streaming segment is mapped to a batch destination, there is a higher likelihood that the number of profiles in the exported file is closer to the number of users in the segment. This is because there is a higher chance that the latest segment evaluation has run closer to the export time.

Not all updates on a profile qualify a profile to be included in incremental file exports. For example, if an attribute was added to or removed from a profile, that does not include the profile in the export. Only profiles for which the `segmentMembership` attribute has changed will be included in exported files. In other words, only if the profile becomes part of the segment or is removed from the segment is it included in incremental file exports.

Similarly, if a new identity (new email address, phone number, ECID, and so on) is added to a profile in the [identity graph](/help/identity-service/ui/identity-graph-viewer.md), that does not represent a reason to include the profile in a new incremental file export. 

If a new segment is added to a destination mapping, that does not affect qualifications and exports for another segment. Export schedules are configured individually per segment and files are exported separately for every segment, even if the segments have been added to the same destination dataflow.

>[!BEGINSHADEBOX]

For example, in the export setting illustrated below, where a segment is exporting incremental file updates, note the following circumstances where a profile is included in an incremental file export or not: 

![Export setting with several selected attributes.](/help/destinations/assets/how-destinations-work/export-selection-batch-destination.png)

* A profile is included in an incremental file export when is qualifies or disqualifies for the segment.
* A profile is *not* included in an incremental file export when a new phone number is added to the identity graph.
* A profile is *not* included in an incremental file export when the value of any of the mapped XDM fields like `xdm: loyalty.points`, `xdm: loyalty.tier`, `xdm: personalEmail.address` is updated on a profile.

>[!ENDSHADEBOX]

### What determines a data export and what is included in the export

Based on the information in the section above, the profile export behavior to file-based destinations can be summarized as described below:

**Full file exports**

The full population of the segment is exported every day.

|What determines a destination export | What is included in the exported file |
|---------|----------|
|<ul><li>The export schedule set in the UI or API determines and user action (selecting [Export file now](/help/destinations/ui/export-file-now.md) in the UI or using the [ad-hoc activation API](/help/destinations/api/ad-hoc-activation-api.md)) determine the start of a destination export.</li><li>Any changes in segment membership of a profile, whether it qualifies or disqualifies from the segment, qualify a profile to be included in incremental exports.</li></ul> | In full file exports, the entire profile population of a segment, based on the latest segment evaluation, is included with each file export. The latest values for each XDM attribute selected for export are also included as columns in each file. |

{style="table-layout:fixed"}

**Incremental file exports**

In the first file export after setting up the activation workflow, the entire population of the segment is exported. In subsequent exports, only the modified profiles are exported. 

|What determines a destination export | What is included in the exported file |
|---------|----------|
|<ul><li>The export schedule set in the UI or API determines the start of a destination export.</li><li>Any changes in segment membership of a profile, whether it qualifies or disqualifies from the segment, qualify a profile to be included in incremental exports. Changes in attributes or in identity maps for a profile *do not* qualify a profile to be included in incremental exports.</li></ul> | The profiles for which the segment membership has changed, along with the latest information for each XDM attribute selected for export. |

{style="table-layout:fixed"}

>[!TIP]
>
>As a reminder, changes in attribute values or in identity maps for a profile do not qualify a profile to be included in an incremental file export.
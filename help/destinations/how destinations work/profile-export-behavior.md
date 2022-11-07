---
title: Profile export behavior
description: Learn how profile export behavior varies between the different integration patters supported in Experience Platform destinations.
---
# Profile export behavior for different destination types

There are several destination types in Experience Platform, with different export patterns, as shown in the diagram below: 

![Types of destinations diagram](/help/destinations/assets/how-destinations-work/types-of-destinations.png)

You can find detailed information about profile export behavior per destination type in the sections below:

## Streaming profile export (enterprise) destinations {#streaming-profile-destinations}

Experience Platform optimizes the profile export behavior to your enterprise destination, to only export data to your API endpoint when relevant updates to a profile have occurred following segment qualification or other significant events. Profiles are exported to your destination in the following situations:

* The profile update was determined by a change in segment membership for at least one of the segments mapped to the destination. For example, the profile has qualified for one of the segments mapped to the destination or has exited one of the segments mapped to the destination.
* The profile update was determined by a change in the [identity map](/help/xdm/field-groups/profile/identitymap.md). For example, a profile who had already qualified for one of the segments mapped to the destination has been added a new identity in the identity map attribute.
* The profile update was determined by a change in attributes for at least one of the attributes mapped to the destination. For example, one of the attributes mapped to the destination in the mapping step is added to a profile.

In all the cases described above, only the profiles where relevant updates have occurred are exported to your destination. For example, if a segment mapped to the destination flow has a hundred members, and five new profiles qualify for the segment, the export to your destination is incremental and only includes the five new profiles.

Note that the all the mapped attributes are exported for a profile, no matter where the changes lie. So, in the example above all the mapped attributes for those five new profiles will be exported even if the attributes themselves haven't changed.

### What determines a data export and what is included in the export {#what-determines-export-what-is-included}

Regarding the data that is exported for a given profile, it is important to understand the two different concepts of *what determines a data export to your enterprise destination* and *which data is included in the export*.

|What determines a destination export | What is included in the destination export |
|---------|----------|
|<ul><li>Mapped attributes and segments serve as the cue for a destination export. This means that if any mapped segments change states (from null to realized or from realized/existing to exiting) or any mapped attributes are updated, a destination export would be kicked off.</li><li>Since identities cannot currently be mapped to enterprise destinations, changes in any identity on a given profile also determine destination exports.</li><li>A change for an attribute is defined as any update on the attribute, whether or not it is the same value. This means that an overwrite on an attribute is considered a change even if the value itself has not changed.</li></ul> | <ul><li>All segments (with the latest membership status), no matter if they are mapped in the dataflow or not, are included in the `segmentMembership` object.</li><li>All identities in the `identityMap` object are included as well (Experience Platform currently does not support identity mapping in the enterprise destination).</li><li>Only the mapped attributes are included in the destination export.</li></ul> |

{style="table-layout:fixed"}

For example, consider this dataflow to an HTTP destination where three segments are selected in the dataflow, and four attributes are mapped to the destination.  

![enterprise destination dataflow](/help/destinations/assets/catalog/http/profile-export-example-dataflow.png)

A profile export to the destination can be determined by a profile qualifying for or exiting one of the *three mapped segments*. However, in the data export, in the `segmentMembership` object (see [Exported Data](#exported-data) section below), other unmapped segments might appear, if that particular profile is a member of them. If a profile qualifies for the Customer with DeLorean Cars segment but is also a member of the Watched "Back to the Future" movie and Science fiction fans segments, then these other two segments will also be present in the `segmentMembership` object of the data export, even though these are not mapped in the dataflow.

From a profile attributes point of view, any changes to the four attributes mapped above will determine a destination export and any of the four mapped attributes present on the profile will be present in the data export.

## Streaming segment export destinations {#streaming-profile-destinations}

Destination examples: advertising, social, etc.
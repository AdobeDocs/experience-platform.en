---
title: MediaAnalytics Interaction Details Schema Field Group
description: Learn about the MediaAnalytics Interaction Details schema field group.
exl-id: 1096d28a-5796-49cc-bd45-b3f5188f699e
---
# [!UICONTROL MediaAnalytics Interaction Details] schema field group

[!UICONTROL MediaAnalytics Interaction Details] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md). Use this field group to capture enriched data fields that comprehensively monitor and analyze interactions with media content across various platforms or channels.

![A schema diagram of the [!UICONTROL MediaAnalytics Interaction Details] schema field group.](../../images/field-groups/mediaanalytics-interaction.png)

| Display name    | Property | Data type | Description |
|---| --- | --- | --- |
| [!UICONTROL Media Collection Details]  | `mediaCollection` | [[!UICONTROL Media details information]](../../data-types/media-details-information.md) | Attributes related to a collection of media items.  |
| [!UICONTROL Media Reporting Details]  | `mediaReporting` | [[!UICONTROL Media details information]](../../data-types/media-details-information.md) | Reporting details and metrics associated with the media content. |
| [!UICONTROL List Of Media Collection Downloaded Content Events]  |  `mediaDownloadedEvents` | [!UICONTROL Array] of [[!UICONTROL mediaEvent]](../../data-types/media-event-information.md) | Events that track the downloading of content within the media collection. |

{style="table-layout:auto"}

For more details on the field group, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-media-analytics.schema.json)

---
title: MediaAnalytics Interaction Details Schema Field Group
description: Learn about the MediaAnalytics Interaction Details schema field group.
---
# [!UICONTROL MediaAnalytics Interaction Details] schema field group

[!UICONTROL MediaAnalytics Interaction Details] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md). Use this field group to capture enriched data fields that comprehensively monitor and analyze interactions with media content across various platforms or channels.

![A schema diagram of the [!UICONTROL MediaAnalytics Interaction Details] schema field group.](../../images/field-groups/mediaanalytics-interaction.png)

| Display name    | Property | Data type | Description |
|---| --- | --- | --- |
| [!UICONTROL Media Collection Details]  | `mediaCollection` | [[!UICONTROL Media Collection details information]](../../data-types/media-collection-details-information.md) | Attributes related to a collection of media items.  |
| [!UICONTROL Media Reporting Details]  | `mediaReporting` | [[!UICONTROL Media Reporting details information]](../../data-types/media-reporting-details-information.md) | Reporting details and metrics associated with the media content. |
| [!UICONTROL List Of Media Collection Downloaded Content Events]  |  `mediaDownloadedEvents` | [!UICONTROL Array] of [[!UICONTROL mediaEvent]](../../data-types/media-event-information.md) | Events that track the downloading of content within the media collection. |

{style="table-layout:auto"}

>[!TIP]
>
>You can hide certain fields that are not used by the Media Edge API. Hiding these fields makes the schema easier to read and understand, but it is not required. These fields refer only to those in the [!UICONTROL MediaAnalytics Interaction Details] fieldgroup. To improve readability in the Platform UI, follow the instructions in the [Media Analytics documentation on how to hide unused fields](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/edge-recommended/media-edge-sdk/implementation-edge.html#set-up-the-schema-in-adobe-experience-platform).

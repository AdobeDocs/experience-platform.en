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
| [!UICONTROL Media Collection Details]  | `mediaCollection` | [[!UICONTROL Media Collection details]](../../data-types/media-collection-details.md) | Attributes related to a collection of media items. Use the Media Collection fields to capture data and send it onto other Adobe services for further processing.  |
| [!UICONTROL Media Reporting Details]  | `mediaReporting` | [[!UICONTROL Media Reporting details]](../../data-types/media-reporting-details.md) | Reporting details and metrics associated with the media content. * Media Reporting fields are used by Adobe services to analyze the Media Collection fields sent by users. This data, alongside other specific user metrics, are computed and reported upon. |
| [!UICONTROL List Of Media Collection Downloaded Content Events]  |  `mediaDownloadedEvents` | [!UICONTROL Array] of [[!UICONTROL mediaEvent]](../../data-types/media-event-information.md) | Events that track the downloading of content within the media collection. |

{style="table-layout:auto"}

>[!TIP]
>
>You can hide fields that are not used by the Media Edge API. Hiding these fields makes the schema easier to read and understand, but it is not required. These fields refer only to those in the [!UICONTROL MediaAnalytics Interaction Details] fieldgroup. To improve readability in the Platform UI, follow the instructions in the [Media Analytics documentation on how to hide unused fields](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/edge-recommended/media-edge-sdk/implementation-edge.html#set-up-the-schema-in-adobe-experience-platform).

<!-- 
>[!NOTE]
>
>Schemas contain fields that are not used in every context or situation. They provide a potential blueprint to map an object. Schemas displayed for the Media Edge API Collection or Reporting data types only portray the relevant fields. You can manually select and deselect the fields that you want to use if you intend to use a schema for the Media Edge API interaction. You can find instructions on [hiding unnecessary fields](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/edge-recommended/media-edge-sdk/implementation-edge.html#set-up-the-schema-in-adobe-experience-platform) in the guide to install Media Analytics with Experience Platform Edge.
 -->

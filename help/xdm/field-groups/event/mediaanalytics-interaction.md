---
title: MediaAnalytics Interaction Details Schema Field Group
description: This document provides an overview of the MediaAnalytics Interaction Details schema field group.
---
# [!UICONTROL MediaAnalytics Interaction Details] schema field group

[!UICONTROL MediaAnalytics Interaction Details] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md). The field group provides an enriched set of data fields to comprehensively monitor and analyze interactions with media content across various platforms or channels.

![A schema diagram of the [!UICONTROL MediaAnalytics Interaction Details] schema field group.](../../images/field-groups/mediaanalytics-interaction.png)

<!-- Update the links to the mediaDetails datatype documentation once it exists. -->

| Property | Data type | Description |
| --- | --- | --- |
| `mediaCollection` | [[!UICONTROL mediaDetails]](https://ns.adobe.com/xdm/datatypes/mediaDetails) | Attributes related to a collection of media items.  |
|  `mediaDownloadedEvents` | An [!UICONTROL Array] of [[!UICONTROL mediaEvent]](https://ns.adobe.com/xdm/datatypes/mediaEvent) | Events that track the downloading of content within the media collection. |
| `mediaReporting` | [[!UICONTROL mediaDetails]](https://ns.adobe.com/xdm/datatypes/mediaDetails) | Reporting details and metrics associated with the media content. |

{style="table-layout:auto"}

For more details on the field group, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-media-analytics.schema.json)

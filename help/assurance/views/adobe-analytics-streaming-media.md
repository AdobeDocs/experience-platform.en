---
title: Adobe Analytics for Streaming Media View in Assurance
description: This guide explains how to use Adobe Analytics for Streaming Media with Adobe Experience Platform Assurance.
exl-id: 9a9c2c64-e9ed-4d58-b936-d802f1c3b7d3
---
# Adobe Analytics for Streaming Media view in Assurance

With the integration between Adobe Analytics for Streaming Media and Adobe Experience Platform Assurance, you can now validate the Media Analytics implementation in your mobile app. Media Analytics views display what is tracked in the media session, such as:

- Session start event that contains all content core, standard metadata, and custom metadata properties, as well as session end and session complete events.
- Ad Break Start and Ad Start events with all ad properties attached, as well as Skip and Complete events for both.
- Chapter Start with all properties attached, as well as Chapter Skip and Chapter Complete events.
- All playback change events (play, pause, buffer, errors, bitrate change).
- All player state change tracking events (start, end).

Once data is processed in Analytics, post-processed status and data, such as media time spent and total pause duration, are also available in the event detail view.

## Getting started

Before continuing, please ensure you have the following services:

- The [Adobe Experience Platform Data Collection UI](https://experience.adobe.com/#/data-collection/)
- [Adobe Experience Platform Assurance](https://experience.adobe.com/assurance)

To learn how to install Assurance in your application, please read the [implementing Assurance guide](../tutorials/implement-assurance.md).

## Use Assurance with Adobe Analytics for Streaming Media

After you have connected and set up your app for Adobe Analytics, you are ready to configure it for Streaming Media Analytics. At the bottom of the left panel, select **[!UICONTROL Configure]** to add the Media Analytics Events view and **Save** it.

![Configure](./images/adobe-analytics-streaming-media/configure.png)

Once added, select the **[!UICONTROL Media Analytics Events]** view in the **[!UICONTROL Adobe Analytics]** section to validate your session tracking.

![Select](./images/adobe-analytics-streaming-media/select.png)

In the **[!UICONTROL Media Analytics Events]** view, you may search and filter by Session ID (VSID) to view a specific media session. To view additional event details, select a specific event.

![Media Events](./images/adobe-analytics-streaming-media/media-events.png)

For a more succinct view of API calls, you may also hide the playhead update events by selecting the **[!UICONTROL Hide Playhead Update events]** filter.

![Hide Playhead](./images/adobe-analytics-streaming-media/hide-playhead.png)

>[!INFO]
>
>Viewing post-processed media analytics data requires the use of SDK versions: Android Media 2.1.2 and iOS AEPMedia 3.0.1 (or above)

To view post-processed data, find the session start event and validate in the status column that the session was completed. If completed, click on the event to view a media session summary in the event detail view. For further details, scroll down to find the post-processed details.

![Post-Processed View](./images/adobe-analytics-streaming-media/post-processed-view.png)

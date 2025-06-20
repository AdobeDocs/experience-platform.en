---
title: Send media event
description: Send media data to the Adobe Experience Platform Edge Network.
---
# Send media event

The **[!UICONTROL Send media event]** action sends media event to a datastream, which can then be used by apps and services like Adobe Experience Platform or Adobe Analytics. This action is useful when you track streaming media content on your property.

![Experience Platform UI image showing the send media event screen.](../assets/send-media-event.png)

This action always requires a **[!UICONTROL Player ID]**, which is the Content Player Name.

The **[!UICONTROL Send media event]** action type supports the following properties:

* **[!UICONTROL Instance]**: The Web SDK instance that is being used.
* **[!UICONTROL Media Event Type]**: The type of the media event being tracked.
* **[!UICONTROL Player ID]**: The media session unique identifier.
* **[!UICONTROL Playhead]**: The current position of the media playback, in seconds.
* **[!UICONTROL Media session details]**: When sending a media start event, the required media session details should be specified.
* **[!UICONTROL Chapter details]**: In this section you can specify the chapter details when sending a chapter start media event.
* **[!UICONTROL Advertising details]**: When sending an `AdBreakStart` event, you must specify the required advertising details.
* **[!UICONTROL Advertising pod details]**: Details about the advertising pod when sending an `AdStart` event.
* **[!UICONTROL Error details]**: Details about the playback error that is being tracked.
* **[!UICONTROL State Update Details]**: The player state that is being updated.
* **[!UICONTROL Custom Metadata]**: The custom metadata about the media event that is being tracked.
* **[!UICONTROL Quality of Experience]**: The media quality of experience data that is being tracked.
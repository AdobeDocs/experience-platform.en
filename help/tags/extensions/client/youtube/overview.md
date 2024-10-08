---
title: YouTube Video Tracking Extension Overview
description: Learn about the YouTube Video Tracking tag extension in Adobe Experience Platform.
exl-id: 703f7b04-f72f-415f-80d6-45583fa661bc
---
# YouTube Video Tracking extension overview

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../term-updates.md) for a consolidated reference of the terminology changes.

**Prerequisites**

Each tag property in Adobe Experience Platform requires that the following extensions are installed and configured from the Extensions screen:

* Adobe Analytics
* Experience Cloud Visitor ID Service
* Core extension

Use the ["Embed a player using an \<iframe\> tag"](https://developers.google.com/youtube/player_parameters#Manual_IFrame_Embeds) code snippet from the Google developer docs in the HTML of each Web page where a video player is to render.

This extension, version 2.0.1, supports embedding one or more YouTube videos on a single Web page by inserting an `id` attribute with a unique value in the iframe script tag, and appending `enablejsapi=1` and `rel=0` to the end of the `src` attribute value, if not already included. For example:

`<iframe id="player1" width="560" height="315" src="https://www.youtube.com/embed/xpatB77BzYE?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

This extension is also designed to dynamically check for a unique ID attribute value, like `player1`, regardless of whether the `enablejsapi` and `rel` query string parameters exist and if their expected values are correct. As a result, the YouTube script tag can be added to a Web page with or without the `id` attribute and whether the `enablejsapi` and `rel` query string parameters are included or not.

>[!NOTE]
>
>On pages with more than one video, each video uses the same configuration set in the tag rule executing on that page. For example, if you create a rule with an event that triggers on video 50% complete, each video on the page triggers the rule at the 50% cue point.

The Extension relies on the following logic to rewrite the iFrames:

```javascript
document.onreadystatechange = function () {
 if (document.readyState === 'complete') {
```

Therefore, there is a slight flicker after the page loads. This behavior is expected.

## Data elements

There are six data elements available within the extension, none of which require configuration.

* **Playhead Position:** Records the place, in seconds, of the playhead position on the video timeline, when it is called upon within a tag rule.
* **Video ID:** Specifies the YouTube ID associated with the video.
* **Video Name:** Specifies the descriptive, or friendly name of the video.
* **Video URL:** Returns the YouTube.com URL for the currently loaded/playing video.
* **Video Duration:** Records the total duration, in seconds, of the video content.
* **Extension Version:** This data element records the YouTube Tracking Extension version, like "Video Tracking_YouTube_2.0.0," for example.

## Events

There are eight events available within the extension, only Custom Cue Point Tracking requires configuration.

* **Video Ready:** Triggers when the video is cued, and ready to play.
* **Video Start:** Triggers when the video is first started, and when `player.getCurrentTime() === 0`
* **Video Replay:** Triggers when the video is cued, and replayed after the initial start. This trigger will fire on every replay.
* **Video Pause:** Triggers when the video is paused.
* **Video Resume:** Triggers when the video is resumed, and when `player.getCurrentTime() !== 0`
* **Custom Cue Tracking:** Triggers when the video reaches the specified video threshold percentage. For example, if a video is 60 seconds and the specified cue point is 50%, the event will trigger when the playhead position equals 30 seconds. Cue point tracking applies to both initial play and replay. Note that if the user seeks across a cue point, the event will not fire. Cue point events only fire when the playhead crosses the calculated cue point location on the timeline, and the video player is playing.
* **Video Buffer:** Triggers when the player downloads a certain amount of data before it begins playing the video.
* **Video Ended:** Triggers when a video fully completes.

## Usage

One tag rule can be set for every video event (the seven events listed above). Create a specific tag rule for each event you want to track. If you do not want to track an event, simply omit to create a rule for it.

Rules have three actions:

* **Set variables:** Set the Adobe Analytics variables (map to all or some included data elements).
* **Send beacon:** Send the Adobe Analytics beacon as a custom link tracking call, and provide a "Link Name" value.
* **Clear variables:** Clear the Adobe Analytics variables.

## Example tag rule for "Video Start"

The following video extension objects are to be included.

* **Events**: "Video Start" (This event causes the rule to fire when the visitor starts playing a YouTube video.)

* **Condition**: None

* **Actions**: Use the **Analytics extension** to "Set Variables" action, to map:

    * The event for Video Start,
    * A prop/eVar for the Video Duration data element
    * A prop/eVar for the Video ID data element
    * A prop/eVar for the Video Name data element
    * A prop/eVar for the Video URL data element

  Then, include the "Send Beacon" action (`s.tl`) with link name "video start," followed by a "Clear Variables" action.

>[!TIP]
> 
>For implementations where multiple eVars or props for each video element can't be used, data element values can be concatenated within Platform, parsed into classification reports using the Classification Rule Builder tool, as explained in [https://experienceleague.adobe.com/docs/analytics/components/classifications/classifications-rulebuilder/classification-rule-builder.html](https://experienceleague.adobe.com/docs/analytics/components/classifications/classifications-rulebuilder/classification-rule-builder.html), and then applied as a segment in Analysis Workspace.

To concatenate video information values, create a new data element called "Video Meta Data," and program it to pull in all the video data elements (listed above) and assemble them together. For example:

```javascript
var r = [];

r.push('YouTube'); //Player Name
r.push(_satellite.getVar('Video ID'));
r.push(_satellite.getVar('Video Name'));
r.push(_satellite.getVar('Video Duration'));
r.push(_satellite.getVar('Extension Version'));

return r.join('|');
```

For more information on how to create and leverage data elements effectively within Platform, read the [data elements](../../../ui/managing-resources/data-elements.md) documentation.

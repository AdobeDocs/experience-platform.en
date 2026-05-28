---
title: YouTube Video Tracking Extension Overview
description: Learn about the YouTube Video Tracking tag extension in Adobe Experience Platform.
exl-id: 703f7b04-f72f-415f-80d6-45583fa661bc
TQID: https://experienceleague.adobe.com/HbmbcElcFvRdvNAgLZaEavbH2Z6b5dlaAoxNmCf9oys
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: b069d60e-95f3-44d6-95a8-ddc862a4bc38
    internal-label: Reports
  - id: c153fd90-23e1-4614-81d3-3cc7571227f7
    internal-label: Analysis Workspace
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: e9dbdbc5-3e52-40f0-a7bc-e18542967b7a
    internal-label: Implementations
  - id: fd307ce7-56f5-4ee3-af68-a7833ff6e85e
    internal-label: API
subfeature_v2:
  - id: b0a1f9d5-5795-42a3-a6d0-bd0e2748fd06
    internal-label: Components
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: df312454-73c4-43f6-a90e-18f5043f074c
    internal-label: Tags
  - id: e7d92df1-c5ba-4e93-85df-f83171b889be
    internal-label: Variables
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# YouTube Video Tracking extension overview

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
>For implementations where multiple eVars or props for each video element can't be used, data element values can be concatenated within Experience Platform, parsed into classification reports using the Classification Rule Builder tool, as explained in [https://experienceleague.adobe.com/docs/analytics/components/classifications/classifications-rulebuilder/classification-rule-builder.html](https://experienceleague.adobe.com/docs/analytics/components/classifications/classifications-rulebuilder/classification-rule-builder.html), and then applied as a segment in Analysis Workspace.

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

For more information on how to create and leverage data elements effectively within Experience Platform, read the [data elements](../../../ui/managing-resources/data-elements.md) documentation.

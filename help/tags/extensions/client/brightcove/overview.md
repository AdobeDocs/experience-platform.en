---
title: BrightCove Video Tracking Extension Overview
description: Learn about the BrightCove Video Tracking tag extension in Adobe Experience Platform.
exl-id: d27eff21-2abf-4495-8382-08cab32742e0
---
# BrightCove Video Tracking extension overview

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../term-updates.md) for a consolidated reference of the terminology changes.

## Pre-Requisites

Each tag property in Adobe Experience Platform needs the following extensions installed and configured in the Extension screen:

* Adobe Analytics
* Experience Cloud Visitor ID Service
* Core extensions installed

Use the "In-Page embed code (Advanced)" code snippet in the HTML of each Web page where a video player is to render. The "In-Page Embed code (Advanced)" HTML snippet can be found in the [Brightcove documentation](https://studio.support.brightcove.com/publish/choosing-correct-embed-code.html#inpage). The following link provides more information on [how to generate embedded code for both preview and published video players](https://studio.support.brightcove.com/players/generating-player-embed-code.html).

This extension version 1.1.0 supports embedding multiple BrightCove videos on a single Web page. If there are multiple `id` properties within the advanced embed tags, ensure that they each have unique values. For example, `player1`, `player2`, and so on.

>[!NOTE]
>
>On pages with multiple videos, each video uses the same configuration set in the tag rule executing on that page. For example, if you create a rule with an event that triggers on a video that is 50% complete, each video on the page triggers the rule at the 50% cue point.

If the webpage that uses this extension interacting with the video before the relevant script has completely loaded, there are two actions you can take to remedy the issue. Firstly the tag library can be loaded synchronously, and secondly, place the `<script type="text/javascript">\_satellite.pageBottom();\</script\>` element before the video embed on the page.

See the [BrightCove API documentation](https://docs.brightcove.com/brightcove-player/1.x/Player.html#vjsplayer) for more information on the components methods and events used in this extension. 

## Data elements

There are seven data elements available within the extension, none of which require configuration.

* **Playhead Position:** When this data element is called upon within a tag rule, it records in seconds, the place of the playhead position on the video timeline.
* **Video Account ID:** This data element records the ID of the Brightcove account that published the video.
* **Video Duration:** This data element records the total duration, in seconds, of the video content. Additionally, a Calculated Metric can be created within Analytics to convert the number in seconds, to minutes or hours.
* **Video Ad Support:** This data element specifies whether ads are supported within the video or not.
* **Video ID:** This data element specifies the BrightCove ID associated with the video.
* **Video Name:** This data element specifies the descriptive, or friendly name of the video.
* **Video Tags:** This data element specifies the particular scripts associated with the video.

## Events

There are seven events available within the extension, only Custom Cue Point Tracking requires configuration.

* **Custom Cue Point Tracking:** This event triggers when the video reaches the specified video threshold percentage. For example, if a video is 60 seconds long and the specified cue point is 50%, the event triggers at the 30-second mark.

>[!NOTE]
>
>Please note that this event triggers every time this cue point is reached. For example, if the user reaches the 50% mark, seeks the video before the 50% mark then reaches the 50% mark again, the trigger will fire again.

* **Video Completed:** This event triggers when a video fully completes.
* **Video Loaded Metadata:** This event is fired when the player has received initial duration and dimension information.
* **Video Pause:** This event triggers when the video is paused.
* **Video Resume:** This event triggers when the video content is resumed after a pause event.
* **Video Screen Change:** The event triggers when the video switches in or out of full-screen mode.
* **Video Start:** This event triggers when video content starts for the first time.

## Usage

One tag rule can be set for every video event (the seven events listed above). Create a specific tag rule for each event you want to track. If you do not want to track an event, simply omit to create a rule for it.

The rules have three actions:

1. Set the Adobe Analytics variables. (Create data elements for all or some of the data elements listed above.)
1. Send the Adobe Analytics beacon.
1. Clear the Adobe Analytics variables.

## Example tag rule for "Video Start"

The following video extension objects are to be included:

* **Events**

  1. "Video Start": This event causes the rule to fire when the visitor starts playing a BrightCove video.

* **Condition** 

  1. None

* **Actions**

  1. In an Analytics "Set Variables" action, set:

      * The event for **Video Start** (example: event17)
      * A prop/eVar for the **Video Name** data element (example: eVar10)
      * A prop/eVar for the **Video Duration** data element (example: eVar11)
      * A prop/eVar for for the **Current Video Place** data element (example: eVar12)

  1. The Analytics "Send Beacon" action (`s.tl`)
  1. The Analytics "Clear Variables" action

>[!TIP]
>
>For those who might not want to provision multiple eVars or props for each video element, data element values are concatenated as an alternative method. Next they are parsed into classification reports using the Classification Rule Builder Tool. See the [Classification Rule Builder Tool](https://experienceleague.adobe.com/docs/analytics/components/classifications/classifications-rulebuilder/classification-rule-builder.html) documentation for more information. Finally, they are applied as a segment in Analysis Workspace.
>
>To do this, create a new data element called something like "Video MetaData" and program it to pull in all the video data elements (listed above) and concatenate them together.

```javascript
var r = [];

r.push( \_satellite.getVar( &#39;Video ID&#39; ) );

r.push( \_satellite.getVar( &#39;Video Name&#39; ) );

r.push( \_satellite.getVar( &#39;Video Duraction&#39; ) );


return r.join(&#39;|&#39;);
```

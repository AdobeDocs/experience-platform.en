## Configure media collection settings {#media-collection}

The media collection feature helps you collect data related to media sessions on your website. 

The collected data can include information about media playbacks, pauses, completions, and other related events. Once collected, you can send this data to Adobe Experience Platform and/or Adobe Analytics, to generate reports. This feature provides a comprehensive solution for tracking and understanding media consumption behavior on your website.

![Image showing the media collection settings of the Web SDK tag extension in the Tags UI](assets/media-collection.png)


* **[!UICONTROL Channel]**: The name of the channel where media collection occurs. Example: `Video channel`.
* **[!UICONTROL Player Name]**: The name of the media player.
* **[!UICONTROL Application Version]**: The version of the media player application.
* **[!UICONTROL Main ping interval]**: Frequency of pings for main content, in seconds. The default value is `10`. Values can range from `10` to `50` seconds.  If no value is specified, the default value is used when using [automatically-tracked sessions](../../../../web-sdk/commands/createmediasession.md#automatic).
* **[!UICONTROL Ad ping interval]**: Frequency of pings for ad content, in seconds. The default value is `10`. Values can range from `1` to `10` seconds. If no value is specified, the default value is used when using [automatically-tracked sessions](../../../../web-sdk/commands/createmediasession.md#automatic)

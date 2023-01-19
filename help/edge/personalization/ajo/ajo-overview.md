---
title: Using Adobe Journey Optimizer with the Platform Web SDK
description: Learn how to render personalized content with the Experience Platform Web SDK using Adobe Journey Optimizer
keywords: ajo;ajo web;adobe journey optimizer;renderDecisions;surfaces;decisions;propositions;scope;schema
exl-id: e608952c-9598-11ed-b382-d72064651cac

---
# Using [!DNL Adobe Journey Optimizer] with the [!DNL Platform Web SDK]

[!DNL Adobe Experience Platform] [!DNL Web SDK] can deliver and render personalized experiences managed in [!DNL Adobe Journey Optimizer] to the web channel. You can use a WYSIWYG editor, [!DNL Adobe Journey Optimizer] [Web Campaign UI](https://experienceleague.adobe.com/docs/journey-optimizer/using/web/create-web.html) to create, activate, and deliver your [!DNL AJO Web] campaigns and personalization experiences.

>[!IMPORTANT]
>
>Follow the [Adobe Journey Optimizer Web Channel documentation](https://experienceleague.adobe.com/docs/journey-optimizer/using/web/get-started-web.html) for information on getting started with [!DNL AJO Web] experience authoring and reporting. 

## Enabling [!DNL Adobe Journey Optimizer]

To start using [!DNL Adobe Journey Optimizer]:

1. Follow the **[prerequisite steps](https://experienceleague.adobe.com/docs/journey-optimizer/using/web/create-web.html#prerequesites)** from the [!DNL Adobe Journey Optimizer] [Web Experiences Guide](https://experienceleague.adobe.com/docs/journey-optimizer/using/web/create-web.html), specifically:
   * Setup **[!DNL Adobe Experience Cloud Visual Editing Helper]**
   * Enable **[!DNL Adobe Journey Optimizer]** in your [datastream](../../datastreams/overview.md)
   * Enable **[!UICONTROL Active-On-Edge Merge Policy]** option

2. Add the `renderDecisions` option to your events. Set `renderDecisions` to `true` for automatic rendering of delivered AJO content propositions on your web page surfaces

```javascript
  alloy("sendEvent", {
    ...,
    "renderDecisions": true
  })
```

3. Optionally, specify additional surfaces in your events.  
By default, the Platform Web SDK will automatically generate the web surface for the current web page and include it in the request to Experience Platform Edge.  
If required, additional surfaces can be included in the request by specifying these in the `personalization.surfaces` option of the `sendEvent` command, or in the corresponding **[!UICONTROL Surfaces]** [[!UICONTROL Send event] action](../../extension/action-types.md#send-event) configuration of the Web SDK Extension

```javascript
  alloy("sendEvent", {
    ...
    "personalization": {
      "surfaces": [ "web://my.site.com/about.html", "web://my.site.com/contact.html" ]
    }
  })
```

![extension-add-surface](./assets/extension-add-surface.png)

Event surfaces are included in the `query.personalization.surfaces` request field:

```json
{
   "events": [
      {
         "query": {
            "personalization": {
               "schemas": [
                  ...
               ],
               "decisionScopes": [
                  "__view__"
               ],
               "surfaces": [
                  "web://ajostage.weebly.com/"
               ]
            }
         },
         ...
      }
   ]
}
```

4. As is the case for other personalization features, a **[prehiding snippet](../manage-flicker.md)** can be added in order to hide only certain portions of the page while fetching experiences.

## Creating Adobe Journey Optimizer Web experiences

Follow the **[web campaign authoring](https://experienceleague.adobe.com/docs/journey-optimizer/using/web/create-web.html#create-web-campaign)** instructions from the [!DNL Adobe Journey Optimizer] [Web Experiences Guide](https://experienceleague.adobe.com/docs/journey-optimizer/using/web/create-web.html) in order to create [!DNL AJO Web] campaigns and experiences.

## Rendering personalized content

See [Rendering personalization content](../rendering-personalization-content.md) for more information.  

AJO propositions for web surfaces are processed in a similar manner to `__view__` decision scope propositions, i.e. when `renderDecisions` option is set to `true` in the `sendEvent` command these will be automatically rendered by the Web SDK.

Sample AJO content proposition:

```json
{
    "scope": "web://ajostage.weebly.com/",
    "scopeDetails": {
        "correlationID": "ccfaf19c-6360-4aea-b464-0cf924db5da7",
        "characteristics": {
            "eventToken": "eyJtZXNzYWdlRXhlY3V0aW9uIjp7Im1lc3NhZ2VFeGVjdXRpb25JRCI6ImEzNDYxYTMzLTc5MjktNGQyNS1hNmMxLTVkYzM2YWY1NzRmMyIsIm1lc3NhZ2VJRCI6ImNjZmFmMTljLTYzNjAtNGFlYS1iNDY0LTBjZjkyNGRiNWRhNyIsIm1lc3NhZ2VUeXBlIjoibWFya2V0aW5nIiwiY2FtcGFpZ25JRCI6IjEzN2JmMzllLWM1ODgtNGI1My1iODQxLTJiMWZiZDYxM2JkYiIsImNhbXBhaWduVmVyc2lvbklEIjoiMTA1NzY1MmEtZWYwNS00YjE3LWExMmUtY2FlOTQyOTFhMWFjIiwiY2FtcGFpZ25BY3Rpb25JRCI6ImViNTlmODQ4LTk5ZDYtNGE1OC05YmU4LTk4MjIxODU0NmYzNiIsIm1lc3NhZ2VQdWJsaWNhdGlvbklEIjoiYzg2NzFjZmItNDdjYS00YTVjLTg4Y2YtNzYwZDFlZjU1MzQyIn0sIm1lc3NhZ2VQcm9maWxlIjp7ImNoYW5uZWwiOnsiX2lkIjoiaHR0cHM6Ly9ucy5hZG9iZS5jb20veGRtL2NoYW5uZWxzL3dlYiIsIl90eXBlIjoiaHR0cHM6Ly9ucy5hZG9iZS5jb20veGRtL2NoYW5uZWwtdHlwZXMvd2ViIn0sIm1lc3NhZ2VQcm9maWxlSUQiOiI2YTViY2I3ZC02MmYxLTQ5NDItODRkMC02MzE5ZjM5Zjk1ZGUifX0="
        },
        "decisionProvider": "AJO",
        "activity": {
            "id": "137bf39e-c588-4b53-b841-2b1fbd613bdb#eb59f848-99d6-4a58-9be8-982218546f36"
        }
    },
    "id": "002321c0-dff5-4153-b171-a9dfb70b9750",
    "items": [
        {
            "schema": "https://ns.adobe.com/personalization/dom-action",
            "data": {
                "uiData": {
                    "tagType": "Text",
                    "actionType": "changed"
                },
                "content": "Welcome AJO!",
                "prehidingSelector": "#wsite-content > DIV:nth-of-type(2) > DIV:nth-of-type(1) > DIV:nth-of-type(1) > DIV:nth-of-type(1) > DIV:nth-of-type(1) > DIV:nth-of-type(3) > FONT:nth-of-type(1) > SPAN:nth-of-type(1)",
                "type": "setHtml",
                "selector": "#wsite-content > DIV.wsite-section-wrap:eq(1) > DIV.wsite-section:eq(0) > DIV.wsite-section-content:eq(0) > DIV.container:eq(0) > DIV.wsite-section-elements:eq(0) > DIV.paragraph:eq(0) > FONT:nth-of-type(1) > SPAN:nth-of-type(1)"
            },
            "id": "0a522f66-9e6a-4ded-b1d0-e9167f103290"
        },
        {
            "schema": "https://ns.adobe.com/personalization/dom-action",
            "data": {
                "uiData": {
                    "tagType": "Text",
                    "actionType": "changed"
                },
                "content": {
                    "font-weight": "bold"
                },
                "prehidingSelector": "#wsite-content > DIV:nth-of-type(2) > DIV:nth-of-type(1) > DIV:nth-of-type(1) > DIV:nth-of-type(1) > DIV:nth-of-type(1) > DIV:nth-of-type(3) > FONT:nth-of-type(1) > SPAN:nth-of-type(1)",
                "type": "setStyle",
                "selector": "#wsite-content > DIV.wsite-section-wrap:eq(1) > DIV.wsite-section:eq(0) > DIV.wsite-section-content:eq(0) > DIV.container:eq(0) > DIV.wsite-section-elements:eq(0) > DIV.paragraph:eq(0) > FONT:nth-of-type(1) > SPAN:nth-of-type(1)"
            },
            "id": "66216ca5-5d0f-4239-a8c8-6bc4a5a7cbdb"
        }
    ]
}

```

## Debugging

Use [[!DNL Platform Web SDK] debugging](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/debugging.html).  
[!DNL Adobe Journey Optimizer] debug traces are available when troubleshooting using [[!DNL Adobe Experience Platform Assurance]](https://developer.adobe.com/client-sdks/documentation/platform-assurance/) - check for events with `AJO:` prefix

![assurance-ajo-trace](./assets/assurance-ajo-trace.png)

## Terminology

__Surface:__ A web surface is a web property identified by a URL where the [!DNL Adobe Journey Optimizer] experience content will be delivered  

__Propositions:__ In [!DNL Adobe Journey Optimizer], propositions correlate to the experience selected from a [!DNL Journey Optimizer Campaign]

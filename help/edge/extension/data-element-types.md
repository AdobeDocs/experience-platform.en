---
title: Data Element Types in the Adobe Experience Platform Web SDK Extension
description: Learn about the different data element types provided by the Adobe Experience Platform Web SDK extension in Adobe Experience Platform Launch.
exl-id: 3c2c257f-1fbc-4722-8040-61ad19aa533f
---
# Data element types

After you set your [action types](action-types.md) in the [Adobe Experience Platform Web SDK extension](web-sdk-extension.md) for [Adobe Experience Platform Launch](https://experienceleague.adobe.com/docs/launch.html), configure your data element types.

This page describes the available data element types.

## Event Merge ID

This data element provides an event merge ID when used. No configuration is needed for this data element. The data element that is provided stays the same until the visitor leaves the page or until the "Reset Event Merge ID" action type is used.

## Identity Map

The identity map data element allows you to create identities from other data elements or other values that you specify. All identities that you create must be tied back to a corresponding namespace. This data element provides a dropdown that shows all the default namespaces, and any that you have created.   

![](./assets/identity-map-data-element.png)

## XDM Object {#xdm-object}

Use XDM format to send any data to the Adobe Experience Platform Web SDK. Formatting your data is easier with the XDM object data element. When you first open this data element, select the correct Adobe Experience Platform sandbox and schema. After you have selected your schema, you see the structure of your schema, which you can easily fill out.

![](./assets/XDM-object.png)

Notice that when you open certain fields of your schema, such as `web.webPageDetails.URL`, that some items are automatically collected. Even though several items are automatically collected, you can overwrite any, if needed. All the values can be filled in manually or using other data elements. 

>[!NOTE]
>
>Only fill in the pieces of information you are interested in collecting. Anything that is not filled in is omitted when the data is sent to the solutions.

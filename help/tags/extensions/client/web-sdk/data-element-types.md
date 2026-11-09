---
title: Data element types in the Adobe Experience Platform Web SDK Extension
description: Learn about the different data element types provided by the Adobe Experience Platform Web SDK tag extension.
exl-id: 3c2c257f-1fbc-4722-8040-61ad19aa533f
TQID: 'https://experienceleague.adobe.com/F-1A-l6ypALptCKCtZiYp1yPwgQxUPUusGPxhsebVgM'
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: a50ad69b-1331-40e9-b634-531a085a6a54
    internal-label: Identities
  - id: de9975b2-c43a-4287-9698-4f4cad92b83f
    internal-label: Schemas
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data collection tags data elements
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b23e006f-0a29-4f1d-8fd0-77aa56f3d12b
    internal-label: Data modeling
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Data element types

After you set your [action types](actions/actions-overview.md) in the tag extension, you must configure your data element types. This page describes the available data element types.

## Identity map {#identity-map}

An identity map allows you to establish identities for the visitor of your web page. An identity map consists of namespaces, like `CRMID`, `Phone` or `Email`, with each namespace containing one or more identifiers. For example, if the individual on your website has provided two phone numbers, your phone namespace should contain two identifiers.

In the [!UICONTROL Identity map] data element, you will provide the following pieces of information for each identifier:

* **[!UICONTROL ID]**: The value identifying the visitor. For example, if the identifier belongs to the _phone_ namespace, the [!UICONTROL ID] could be _555-555-5555_. This value typically is derived from a JavaScript variable or some other piece of data on your page, so it's best to create a data element that references the page data, then reference the data element in the [!UICONTROL ID] field within the [!UICONTROL Identity map] data element. If, when running on your page, the ID value is anything but a populated string, the identifier will be automatically removed from the identity map.
* **[!UICONTROL Authenticated state]**: A selection indicating whether the visitor is authenticated.
* **[!UICONTROL Primary]**: A selection indicating whether the identifier should be used as the primary identifier for the individual. If no identifier is marked as primary, the ECID will be used as the primary identifier.

![UI image showing the Edit Data Element screen.](assets/identity-map-data-element.png)

>[!TIP]
>
>Adobe recommends sending identities which represent a person, such as `Luma CRM Id` as the primary identity.
>
>If the identity map contains the person identifier (e.g. `Luma CRM Id`), then the person identifier will become the primary identifier. Otherwise, `ECID` becomes the primary identity.

You should not provide an [!DNL ECID] when building an identity map. When using the SDK, an [!DNL ECID] is automatically generated on the server and included in the identity map.

The identity map data element is often used with the [[!UICONTROL Variable]](#variable) data element and the [[!UICONTROL Set consent]](actions/set-consent.md) action.

Read more about the [Adobe Experience Platform Identity Service](/help/identity-service/home.md).

## XDM object {#xdm-object}

Formatting your data to XDM is easier with the XDM object data element. When you first open this data element, select the correct Adobe Experience Platform sandbox and schema. After you have selected your schema, you see the structure of your schema, which you can easily fill out.

![UI image showing the XDM object structure.](assets/XDM-object.png)

Notice that when you open certain fields of your schema, such as `web.webPageDetails.URL`, some items are automatically collected. Even though several items are automatically collected, you can overwrite any, if needed. All the values can be filled in manually or using other data elements.

>[!NOTE]
>
>Only fill in the pieces of information you are interested in collecting. Anything that is not filled in is omitted when the data is sent to the solutions.

## Variable {#variable}

You can create payload objects using the **[!UICONTROL Variable]** data element. Both [!UICONTROL XDM] and [!UICONTROL Data] objects are supported.

* When you select [!UICONTROL XDM], select the desired [!UICONTROL Sandbox] and [!UICONTROL Schema].
* When you select [!UICONTROL Data], select the desired solutions. Available solutions include [!UICONTROL Adobe Analytics] and [!UICONTROL Adobe Target].

![Image of Tags UI showing the data element options.](assets/variable-data-element.png)

After you create this data element, you can use the [Update variable](actions/update-variable.md) action to modify it. When ready, you can include this data element in the [Send event](actions/send-event.md) action to send data to a datastream.

## Media: Quality of Experience {#quality-experience}

A **[!UICONTROL Quality of Experience]** data element is helpful when sending streaming media events to Adobe Experience Platform. You can add this element when creating a media session and the following media events will contain updated Quality of Experience data.

![UI image showing the Create Quality of Experience Data Element screen.](assets/qoe-data-element.png)

## Next steps {#next-steps}

Learn about specific use cases such as [accessing the ECID](accessing-the-ecid.md).

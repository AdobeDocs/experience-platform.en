---
title: onBeforeLinkClickSend
description: Callback that runs just before link tracking data is sent.
exl-id: 8c73cb25-2648-4cf7-b160-3d06aecde9b4
TQID: https://experienceleague.adobe.com/YwogdzhVCX18A0mzpd1WfsIqyC6zGsUDTEH9O70-FXM
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# `onBeforeLinkClickSend`

>[!IMPORTANT]
>
>This callback is deprecated. Use [`clickCollection.filterClickDetails`](clickcollection.md) instead.

The `onBeforeLinkClickSend` callback allows you to register a JavaScript function that can alter link tracking data you send just before that data is sent to Adobe. It allows you to manipulate the `xdm` or `data` object, including the ability to add, edit, or remove elements. You can also conditionally cancel the sending of data altogether, such as with detected client-side bot traffic.

This callback only runs if [`clickCollectionEnabled`](clickcollectionenabled.md) is enabled and `filterClickDetails` does not contain a registered function.

If [`onBeforeEventSend`](onbeforeeventsend.md) and `onBeforeLinkClickSend` both contain registered functions, `onBeforeLinkClickSend` is executed first.

>[!WARNING]
>
>This callback allows the use of custom code. If any code that you include in the callback throws an uncaught exception, processing for the event halts. Data is not sent to Adobe.

## `onBeforeLinkClickSend` and `filterClickDetails`

The [`clickCollection.filterClickDetails`](clickcollection.md) callback is designed to replace `onBeforeLinkClickSend`. Adobe strongly advises against assigning callback functions to both simultaneously. If you assign a callback function to both `filterClickDetails` and `onBeforeLinkClickSend`, the library uses the following logic:

* Only `filterClickDetails` executes; `onBeforeLinkClickSend` does not.
* Event grouping `clickCollection.eventGroupingEnabled` does not work.

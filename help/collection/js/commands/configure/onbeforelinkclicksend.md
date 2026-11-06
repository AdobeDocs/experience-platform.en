---
title: onBeforeLinkClickSend (Web SDK)
description: Callback that runs just before link tracking data is sent.
exl-id: 8c73cb25-2648-4cf7-b160-3d06aecde9b4
TQID: 'https://experienceleague.adobe.com/YwogdzhVCX18A0mzpd1WfsIqyC6zGsUDTEH9O70-FXM'
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: c4147b6e-073b-4d3c-9ab1-d60f2f4434ef
    internal-label: Behavioral data
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `onBeforeLinkClickSend` (Web SDK)

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

---
title: orgId (Web SDK)
description: The orgId property is a string that tells Adobe which organization that data is sent to.
exl-id: 0e04e85a-800c-4927-a165-80a5a578f4c2
TQID: 'https://experienceleague.adobe.com/7KRreqDcqK-Jpj2MB3AMUXkkvpcqD40pID3tyjEif4A'
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `orgId` (Web SDK)

>[!BEGINSHADEBOX]

*This page describes `orgId` in the Web SDK `configure` command. For the Server SDK, see [`orgId`](/help/collection/server-js/methods/configure/orgid.md).*

>[!ENDSHADEBOX]

The `orgId` property is a string that tells Adobe which organization that data is sent to. **This property is required for all data sent using the Web SDK.**

To locate your `orgID`:

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Anywhere within the Adobe CX Enterprise, press **`[Ctrl]`** + **`[I]`**. A [!UICONTROL User Data Debugger] window opens.
1. Click **[!UICONTROL Copy]** ![Copy](../../assets/copy.png) next to the [!UICONTROL Current Org ID], or click the **[!UICONTROL Assigned Orgs]** tab to see other org IDs that you can access.
1. When you're finished locating the desired information, click **[!UICONTROL Close]**.

Org IDs are always 24-character alpha-numeric strings, and always end in `@AdobeOrg`.

Set the `orgId` string when running the `configure` command. If you omit this property when configuring the Web SDK, the Web SDK throws a console error and data is not sent to Adobe.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
});
```

## Set the Org ID using the Web SDK tag extension

This setting can be configured in the Web SDK tag extension using [SDK instance configuration settings](/help/tags/extensions/client/web-sdk/configure/general.md). The field is automatically populated based on the organization that the tag property was created under.

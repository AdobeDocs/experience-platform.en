---
title: orgId
description: The orgId property is a string that tells Adobe which organization that data is sent to.
exl-id: 0e04e85a-800c-4927-a165-80a5a578f4c2
---
# `orgId`

The `orgId` property is a string that tells Adobe which organization that data is sent to. **This property is required for all data sent using the Web SDK.**

To locate your `orgID`:

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Anywhere within the Adobe Experience Cloud, press **`[Ctrl]`** + **`[I]`**. A [!UICONTROL User Data Debugger] window opens.
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

---
title: orgId (Server SDK)
description: Identify the Adobe organization that the Server SDK sends data to.
badge: Alpha
feature_v2:
  - id: b7798bb6-f089-4907-8492-05fc80e10632
    internal-label: Server API
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
# `orgId` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes `orgId` in the Server SDK `configure` method. For the Web SDK, see [`orgId`](/help/collection/js/commands/configure/orgid.md).*

>[!ENDSHADEBOX]

The `orgId` property is a string that tells Adobe which organization the data belongs to. **This property is required.**

To locate your organization ID:

1. Log in to [Adobe CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Anywhere within Adobe CX Enterprise, press **`[Ctrl]`** + **`[I]`** (Windows) or **`[Cmd]`** + **`[I]`** (macOS). A **[!UICONTROL User Data Debugger]** window opens.
1. Copy the **[!UICONTROL Current Org ID]**, or select the **[!UICONTROL Assigned Orgs]** tab to see other organizations that you can access.

Organization IDs are 24-character alphanumeric strings that end in `@AdobeOrg`.

The SDK uses `orgId` in the following ways:

* It sends `orgId` in the `x-gw-ims-org-id` header of authenticated requests. Use the same organization that owns your [`edgeCredentials`](edgecredentials.md) credential.
* It includes `orgId` in the names of the identity and consent cookies, such as `kndctr_ADB3LETTERSANDNUMBERS_AdobeOrg_identity`. These are the same cookie names that the Web SDK uses for the same organization.

## Code example

Set the `orgId` string property when you call `configure`. If you omit it, `configure` rejects with an error.

```js
await alloy.configure({
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeCredentials: {
    clientId: process.env.ADOBE_CLIENT_ID,
    clientSecret: process.env.ADOBE_CLIENT_SECRET,
    scopes: process.env.ADOBE_SCOPES.split(",")
  }
});
```

---
title: idMigrationEnabled
description: Allows the Web SDK to read AMCV cookies.
exl-id: 33b9d645-0fbe-4fe4-8847-e6f9e78557b6
---
# `idMigrationEnabled`

The `idMigrationEnabled` property allows the Web SDK to read AMCV cookies set by previous Adobe Experience Cloud implementations. If your organization upgrades your implementation to the Web SDK, this setting allows a smoother transition to the current Adobe Experience Cloud ID service. This setting is valuable so that you don't see a sharp increase in unique visitors when upgrading to the Web SDK.

If your organization runs a fresh Web SDK implementation, enabling this setting has no impact on data collection or visitor identification. There are no downsides to leaving it enabled for all implementations.

## Supported migration scenarios

ID migration supports the following transition patterns:

* **Some pages still use Visitor API while other pages use Web SDK**: The SDK reads existing AMCV cookies and writes a new cookie with the existing ECID. It also writes AMCV cookies so that pages still using Visitor API continue to recognize the same visitor.
* **Web SDK and Visitor API are both present on the same page**: If the AMCV cookie is not set, the SDK looks for Visitor API on the page and uses it to get the ECID.
* **The site has moved fully to Web SDK**: You can leave migration enabled for a period of time so existing AMCV-based visitors retain continuity while their cookies are transitioned.

## Audience Manager trait updates

When XDM-formatted data is sent into Audience Manager during migration, that data must be converted into signals. Your traits must be updated to reflect the new keys provided by XDM. This process is made easier by using the [BAAAM tool](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/bulk-management-tools/bulk-management-intro.html#getting-started-with-bulk-management).

Set the `idMigrationEnabled` boolean when running the `configure` command. If you omit this property when configuring the Web SDK, it defaults to `true`. Set this property if you want to disable the ability to read AMCV cookies set by the Visitor API. Most organizations do not need to set this property.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  idMigrationEnabled: false
});
```

## Enable Visitor ID migration using the Web SDK tag extension

These settings can be configured in the Web SDK tag extension using [Identity configuration settings](/help/tags/extensions/client/web-sdk/configure/identity.md).

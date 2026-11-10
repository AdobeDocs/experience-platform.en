---
title: Identity configuration settings
description: Define how the tag extension identifies visitors.
exl-id: 12e707f4-c37b-4c02-bfec-5ef7b98c2d3b
TQID: 'https://experienceleague.adobe.com/sCxtj-jtkPjm8vFKwbjyP-bl2nFPLNCFTdTp7E3XtqU'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: e1971122-7081-4556-9222-8a31bd71800c
    internal-label: Experience Cloud Services
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: a50ad69b-1331-40e9-b634-531a085a6a54
    internal-label: Identities
  - id: 6f307efa-2798-5b6d-8079-f765b66875c1
    internal-label: Cookies
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
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
# Identity configuration settings {#identity}

>[!CONTEXTUALHELP]
>id="platform_tags_websdk_identity"
>title="Identity"
>abstract="Define how the tag extension identifies visitors."

This configuration section allows you to define the behavior of the Web SDK when it comes to handling user identification.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the **[!UICONTROL Identity]** section.

![Image showing the identity settings of the Web SDK tag extension in the Tags UI](../assets/web-sdk-ext-identity.png)

The following options are available:

## [!UICONTROL Migrate ECID from VisitorAPI]

A checkbox that allows the Web SDK to read the `AMCV` and `s_ecid` cookies and set the `AMCV` cookie used by the Visitor ID Service. This feature is important when migrating from libraries that use `VisitorAPI.js` to the Web SDK, as some pages might still be using `VisitorAPI.js`. This option allows the SDK to continue to use the same ECID so that users are not identified as two separate users. The JavaScript library equivalent to this checkbox is [`idMigrationEnabled`](/help/collection/js/commands/configure/idmigrationenabled.md).

## [!UICONTROL Use third-party cookies]

When this option is enabled, the Web SDK attempts to store a user identifier in a third-party cookie. If successful, the user is identified as a single user as they navigate across multiple domains, rather than being identified as a separate user on each domain. If this option is enabled, the SDK might still be unable to store the user identifier in a third-party cookie if the browser does not support third-party cookies or has been configured by the user to not allow third-party cookies. In this case, the SDK only stores the identifier in the first-party domain. The JavaScript library equivalent to this checkbox is [`thirdPartyCookiesEnabled`](/help/collection/js/commands/configure/thirdpartycookiesenabled.md).

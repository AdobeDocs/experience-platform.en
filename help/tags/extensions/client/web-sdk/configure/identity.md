---
title: Identity configuration settings
description: Define how the tag extension identifies visitors.
exl-id: 12e707f4-c37b-4c02-bfec-5ef7b98c2d3b
TQID: https://experienceleague.adobe.com/sCxtj-jtkPjm8vFKwbjyP-bl2nFPLNCFTdTp7E3XtqU
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
---
# Identity configuration settings {#identity}

>[!CONTEXTUALHELP]
>id="platform_tags_websdk_identity"
>title="Identity"
>abstract="Define how the tag extension identifies visitors."

This configuration section allows you to define the behavior of the Web SDK when it comes to handling user identification.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the **[!UICONTROL Identity]** section.

![Image showing the identity settings of the Web SDK tag extension in the Tags UI](../assets/web-sdk-ext-identity.png)

The following options are available:

## [!UICONTROL Migrate ECID from VisitorAPI]

A checkbox that allows the Web SDK to read the `AMCV` and `s_ecid` cookies and set the `AMCV` cookie used by `Visitor.js`. This feature is important when migrating from libraries that use `VisitorAPI.js` to the Web SDK, as some pages might still be using `Visitor.js`. This option allows the SDK to continue to use the same ECID so that users are not identified as two separate users. The JavaScript library equivalent to this checkbox is [`idMigrationEnabled`](/help/collection/js/commands/configure/idmigrationenabled.md).

## [!UICONTROL Use third-party cookies]

When this option is enabled, the Web SDK attempts to store a user identifier in a third-party cookie. If successful, the user is identified as a single user as they navigate across multiple domains, rather than being identified as a separate user on each domain. If this option is enabled, the SDK might still be unable to store the user identifier in a third-party cookie if the browser does not support third-party cookies or has been configured by the user to not allow third-party cookies. In this case, the SDK only stores the identifier in the first-party domain. The JavaScript library equivalent to this checkbox is [`thirdPartyCookiesEnabled`](/help/collection/js/commands/configure/thirdpartycookiesenabled.md).

---
title: Redirect with identity
description: Allows sharing a visitor identifier across your organization's domains.
exl-id: 81ef1361-20eb-48d7-83c4-e77f459eeade
TQID: https://experienceleague.adobe.com/A2xsYOGctKKKfr91oLiHlN5Rbp9YhZu-s6UQfjCOWO8
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: ee602049-8a18-43df-9299-a689a025a371
    internal-label: Use cases
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
---
# Redirect with identity

The **[!UICONTROL Redirect with identity]** action type allows you to share a visitor identifier from the current page to another domain that your organization owns. It is designed to be used with a click event and a value comparison condition. It is functionally similar to the [`appendIdentityToUrl`](/help/collection/js/commands/appendidentitytourl.md) command in the JavaScript library.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, then set the [!UICONTROL Action type] to **[!UICONTROL Redirect with identity]**.

## Use cases

* **Identify an individual across domains**: If a visitor clicks from one domain to another owned by your organization, you can use this action so that they are still considered the same individual. This identification method is especially useful if you have reports that combine data from multiple domains, preventing visitor inflation.
* **Identify an individual from a mobile app to a web app**: If a visitor is inside your mobile app and they click a link to your web app, you can use this action so the Web SDK acknowledges that it is the same individual. This workflow allows a consistent experience for reporting and personalization.

## Available fields

* **[!UICONTROL Instance]**: The SDK instance that the action applies to. This drop-down menu is disabled if your implementation uses a single SDK instance.
* **[!UICONTROL Datastream configuration overrides]**: This command supports datastream configuration overrides, giving you control over which apps and services receive this data. When you set a datastream configuration override in both an individual command and within the tag extension configuration settings, the individual command takes precedence. See [Datastream configuration overrides](../configure/configuration-overrides.md) for more information.

## Example rule

This command is typically used with a specific rule that listens for clicks and checks desired domains.

+++Rule event criteria

Triggers when an anchor tag with an `href` property is clicked.

* **[!UICONTROL Extension]**: Core
* **[!UICONTROL Event type]**: Click
* **[!UICONTROL When the user clicks on]**: Specific elements
* **[!UICONTROL Elements matching the CSS selector]**: `a[href]`

![Rule event](../assets/id-sharing-event-configuration.png)

+++

+++Rule condition

Triggers only on desired domains.

* **[!UICONTROL Logic type]**: Regular
* **[!UICONTROL Extension]**: Core
* **[!UICONTROL Condition Type]**: Value Comparison
* **[!UICONTROL Left Operand]**: `%this.hostname%`
* **[!UICONTROL Operator]**: Matches Regex
* **[!UICONTROL Right Operand]**: A regular expression that matches the desired domains. For example, `adobe.com$|behance.com$`

![Rule condition](../assets/id-sharing-condition-configuration.png)

+++

+++Rule action

Append the identity to the URL.

* **[!UICONTROL Extension]**: Adobe Experience Platform Web SDK
* **[!UICONTROL Action Type]**: Redirect with identity

![Rule action](../assets/id-sharing-action-configuration.png)

+++

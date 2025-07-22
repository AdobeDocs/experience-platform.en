---
title: Set consent
description: Sets the desired consent for the visitor.
---
# Set consent

The **[!UICONTROL Set consent]** command determines if the tag extension should send data (opt in), discard data (opt out), or use [Default consent](../configure/consent.md) (consent unknown). When a user allows or denies consent on your site, you can use this action to sync their preferences with the tag extension. The JavaScript library equivalent of this action is the [`setConsent`](/help/collection/js/commands/setconsent.md) command.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, then set the [!UICONTROL Action type] to **[!UICONTROL Set consent]**.

The tag extension supports the following standards:

* **[Adobe standard](/help/landing/governance-privacy-security/consent/adobe/overview.md)**: Both 1.0 and 2.0 standards are supported.
* **[IAB Transparency & Consent Framework](/help/landing/governance-privacy-security/consent/iab/overview.md)**: If you use this standard, the visitor's Real-Time Customer Profile is updated with the consent information if your implementation is correctly configured:
  1. The XDM individual profile schema contains the [IAB TCF 2.0 Consent field group](/help/xdm/field-groups/profile/iab.md).
  1. The Experience Event schema contains the [IAB TCF 2.0 Consent field group](/help/xdm/field-groups/event/iab.md).

Adobe recommends that you store any consent dialog preferences separately, such as in a data element. The tag extension does not offer a way to retrieve consent. To make sure that the user preferences stay in sync with the tag extension, you can this action on every page load.

## Available fields

This action type supports the following configuration options:

* **[!UICONTROL Instance]**: The SDK instance that the action applies to. This drop-down menu is disabled if your implementation uses a single SDK instance.
* **[!UICONTROL Identity map]**: A data element that controls how an ECID is generated and which IDs consent information is tied to.
* **[!UICONTROL Consent information]**: Determines if you want to fill out a form, or provide a data element containing consent information.
* **[!UICONTROL Standard]**: The consent standard that you want to use. Available options include '[!UICONTROL Adobe]' and '[!UICONTROL IAB TCF]'.
* **[!UICONTROL Version]**: The version of the consent standard that you want to use.
* **[!UICONTROL Datastream configuration overrides]**: This command supports datastream configuration overrides, giving you control over which apps and services receive this data. When you set a datastream configuration override in both an individual command and within the tag extension configuration settings, the individual command takes precedence. See [Datastream configuration overrides](../configure/configuration-overrides.md) for more information.

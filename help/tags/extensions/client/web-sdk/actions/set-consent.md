---
title: Set consent
description: Sets the desired consent for the visitor.
exl-id: d279045a-7ed7-41f9-af2f-2e737794730e
TQID: https://experienceleague.adobe.com/x8pOoHhzr4-dDDe6xnJGeEh4PHQo5Ipkx19yuPTjyLY
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
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data elements
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Set consent

The **[!UICONTROL Set consent]** action determines if the tag extension should send data (opt in), discard data (opt out), or use [default consent](../configure/consent.md) (consent unknown). When a user allows or denies consent on your site, you can use this action to sync their preferences with the tag extension. The JavaScript library equivalent of this action is the [`setConsent`](/help/collection/js/commands/setconsent.md) command.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
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

## Creating a rule that updates consent information

An ideal time to use this action is when a customer's consent preferences have changed. You can create a tag rule to listen for this change.

1. Within a tag property, navigate to **[!UICONTROL Rules]** and select **[!UICONTROL Add rule]**.
1. Give the rule a desired name, then select the '`+`' icon next to **[!UICONTROL Events]**.
1. Set the following properties on the left:
   * **[!UICONTROL Extension]**: [!UICONTROL Core]
   * **[!UICONTROL EVent type]**: [!UICONTROL Custom code]
1. Open the editor on the right and use the following code as a template:

  ```javascript
  // Wait for window.__tcfapi to be defined, then trigger when the customer has completed their consent and preferences.
  function addEventListener() {
    if (window.__tcfapi) {
      window.__tcfapi("addEventListener", 2, function (tcData, success) {
        if (success && tcData.eventStatus === "useractioncomplete") {
          // save the tcData.tcString in a data element
          _satellite.setVar("IAB TCF Consent String", tcData.tcString);
          _satellite.setVar("IAB TCF Consent GDPR", tcData.gdprApplies);
          trigger();
        }
      });
    } else {
      // window.__tcfapi wasn't defined. Check again in 100 milliseconds
      setTimeout(addEventListener, 100);
    }
  }
  addEventListener();
  ```

1. Select **[!UICONTROL Keep changes]**.

The above custom code block does two things:

* Triggers the rule when the consent preferences have changed.
* Sets two data elements: **IAB TCF Consent String** and **IAB TCF Consent GDPR**.

These data elements are useful when setting the '[!UICONTROL Set Consent]' action:

1. Select the '`+`' icon next to **[!UICONTROL Actions]**.
1. Set the following properties on the left:
   * **[!UICONTROL Extension]**: [!UICONTROL Adobe Experience Platform Web SDK]
   * **[!UICONTROL Action type]**: [!UICONTROL Set consent]
1. Set the following properties on the right:
   * **[!UICONTROL Standard]**: [!UICONTROL IAB TCF]
   * **[!UICONTROL Version]**: [!UICONTROL 2.0]
   * **[!UICONTROL Value]**: `%IAB TCF Consent String%`
   * **[!UICONTROL Does GDPR apply to this consent value]**: [!UICONTROL Provide a data element], with the value `%IAB TCF Consent GDPR%`

![IAB Set Consent Action](../assets/iab-action.png)

>[!NOTE]
>
>You cannot choose these data elements using the data element selector because they were created through custom code. You must type in the data element name with the percent signs.

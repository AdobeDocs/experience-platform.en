---
title: Consent configuration settings
description: Configure default consent and privacy settings for the tag extension.
exl-id: 93913a8b-0351-409d-b26a-8dc2ac0296c5
TQID: https://experienceleague.adobe.com/gm1sMHM7OVMTHr4dpM2CSBwZWY-26gUPylEfj25MDgI
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
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
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
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Consent configuration settings {#consent}

>[!CONTEXTUALHELP]
>id="platform_tags_websdk_consent"
>title="Consent"
>abstract="Selects the default level of consent that is assumed if no other explicit consent preference is provided."

The **[!UICONTROL Consent]** section allows you to select the default level of consent that is assumed if no other explicit consent preference is provided. Default consent level is not saved to user profiles.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the **[!UICONTROL Consent]** section.

![Image showing the privacy settings of the Web SDK tag extension in the Tags UI](../assets/web-sdk-ext-privacy.png)

This section contains a single set of radio buttons which determines the default consent level:

* **[!UICONTROL In]**: Collect events that occur before the user provides consent preferences.
* **[!UICONTROL Out]**: Drop events that occur before the user provides consent preferences.
* **[!UICONTROL Pending]**: Queue events that occur before the user provides consent preferences. When consent is granted, queued events are sent to Adobe. When consent is denied, queued events are discarded.
* **[!UICONTROL Provide a data element]**: Select a data element that determines one of the above configuration settings. Valid values include the strings `"in"`, `"out"`, or `"pending"`.

If your organization requires explicit user consent to collect data, Adobe recommends setting default consent to either **[!UICONTROL Out]** or **[!UICONTROL Pending]**.

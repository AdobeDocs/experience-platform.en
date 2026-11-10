---
title: Consent configuration settings
description: Configure default consent and privacy settings for the tag extension.
exl-id: 93913a8b-0351-409d-b26a-8dc2ac0296c5
TQID: 'https://experienceleague.adobe.com/gm1sMHM7OVMTHr4dpM2CSBwZWY-26gUPylEfj25MDgI'
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Consent configuration settings {#consent}

>[!CONTEXTUALHELP]
>id="platform_tags_websdk_consent"
>title="Consent"
>abstract="Selects the default level of consent that is assumed if no other explicit consent preference is provided."

The **[!UICONTROL Consent]** section allows you to select the default level of consent that is assumed if no other explicit consent preference is provided. Default consent level is not saved to user profiles.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
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

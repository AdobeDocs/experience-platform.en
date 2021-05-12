---
title: Accessing the ECID 
seo-title: Adobe Experience Platform Web SDK Extension Leveraging ECID in Adobe Experience Platform Launch
description: Adobe Experience Platform Web SDK Extension Leveraging ECID in Adobe Experience Platform Launch
seo-description: Adobe Experience Platform Web SDK Extension Leveraging ECID in Adobe Experience Platform Launch
---

# Accessing the ECID

The [!DNL Experience Cloud Identity (ECID)] is a persistent identifier for a visitor to your website. In certain circumstances, you might prefer to access the ECID (to send it to a third-party, for example).

To access the ECID within Adobe Experience Platform Launch, Adobe recommends the following:

1. Ensure your property is configured with [rule component sequencing](https://experienceleague.adobe.com/docs/launch/using/ui/rules.html?lang=en#rule-component-sequencing) enabled. 
1. Create a new rule.
1. Add a [!UICONTROL Library Loaded] event to the rule.
1. Add a [!UICONTROL Custom Condition] action to the rule with the following code (assuming the name you've configured for the SDK instance is `alloy`):

  ``` javascript
    return alloy("getIdentity")
      .then(function(result) {
        _satellite.setVar("ECID", result.identity.ECID);
      });
  ```

1. Save the rule.

You should then be able to access the ECID in subsequent rules using `%ECID%` or `_satellite.getVar("ECID")` like you would any other data element. 

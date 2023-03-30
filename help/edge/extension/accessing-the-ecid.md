---
title: Accessing the ECID
description: Adobe Experience Platform Web SDK Extension Leveraging ECID in tags
exl-id: 8e63a873-d7b5-4c6c-b14d-3c3fbc82b62f
---
# Accessing the ECID

The [!DNL Experience Cloud Identity (ECID)] is a persistent identifier for a visitor to your website. In certain circumstances, you might prefer to access the ECID (to send it to a third party, for example).

To access the ECID within tags, Adobe recommends the following:

1. Ensure your property is configured with [rule component sequencing](../../tags/ui/managing-resources/rules.md#sequencing) enabled.
1. Create a new rule.
1. Add a [!UICONTROL Library Loaded] event to the rule.
1. Add a [!UICONTROL Custom Condition] action to the rule with the following code (assuming the name you've configured for the SDK instance is `alloy`):

   ```javascript
    return alloy("getIdentity")
      .then(function(result) {
        _satellite.setVar("ECID", result.identity.ECID);
      });
   ```

1. Save the rule.

You should then be able to access the ECID in subsequent rules using `%ECID%` or `_satellite.getVar("ECID")` like you would any other data element.

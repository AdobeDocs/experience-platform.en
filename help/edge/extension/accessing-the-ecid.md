---
title: Accessing the ECID
description: Learn how to access the Experience Cloud ID (ECID) in Adobe Experience Platform tags
exl-id: 8e63a873-d7b5-4c6c-b14d-3c3fbc82b62f
---

# Accessing the ECID

The [!DNL Experience Cloud ID (ECID)] is a persistent Experience CLoud identifier which can help you identify visitors to your website. In certain circumstances, such as sending the identifier to a third-party platform, you might need access to the [!DNL ECID].

To access the [!DNL ECID] within tags, follow the steps below:

1. Ensure your property is configured with [rule component sequencing](../../tags/ui/managing-resources/rules.md#sequencing) enabled.
2. Create a new rule.
3. Add a [!UICONTROL Library Loaded] event to the rule.
4. Add a [!UICONTROL Custom Condition] action to the rule, with the following code (assuming the name you've configured for the SDK instance is `alloy`):

    ```javascript
    return alloy("getIdentity")
        .then(function(result) {
            _satellite.setVar("ECID", result.identity.ECID);
        });
    ```

5. Save the rule.

You should now be able to access the [!DNL ECID] in subsequent rules, using `%ECID%` or `_satellite.getVar("ECID")`, similar to how you access any other data element.

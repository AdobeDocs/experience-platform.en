---
title: Accessing the ECID
description: Adobe Experience Platform Web SDK Extension Leveraging ECID in tags
exl-id: 8e63a873-d7b5-4c6c-b14d-3c3fbc82b62f
---
# Accessing the ECID

The [!DNL Experience Cloud Identity (ECID)] is a persistent identifier for a visitor to your website. In certain circumstances, you might prefer to access the ECID (to send it to a third party, for example). Another use case is setting the ECID in a custom XDM field, in addition to having it in the Identity Map.

To access the ECID, Adobe recommends the following:


## Data prep (Preferred method)

If you are looking to set the ECID in a custom XDM field, in addition to having it in the Identity Map, this method is for you.

You can access the ECID in [Data Prep](../datastreams/data-prep.md) by setting the `source` to the following path:

```javascript
xdm.identityMap.ECID[0].id
```

Set the target to an XDM path where the field is of type string.



## Tags

If you need to access the ECID on the client side, use this method.

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

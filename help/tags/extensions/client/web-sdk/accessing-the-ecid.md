---
title: Accessing the ECID
description: Learn how to access the Experience Cloud ID from Data Prep or Tags
exl-id: 8e63a873-d7b5-4c6c-b14d-3c3fbc82b62f
TQID: https://experienceleague.adobe.com/4k6I22EfvjFzCd1ypMIgDYibE7lMxf7P-XJZ-kFKnCc
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: aff8c1fa-1be7-48bd-92b8-4b12a668ca13
    internal-label: Data prep
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
---
# Accessing the ECID

The [!DNL Experience Cloud Identity (ECID)] is a persistent identifier assigned to a user when they visit your website. In certain circumstances, you might prefer to access the [!DNL ECID] (to send it to a third party, for example). Another use case is setting the [!DNL ECID] in a custom XDM field, in addition to having it in the identity map.

You can access the ECID either via [Data Prep for Data Collection](/help/datastreams/data-prep.md) (recommended) or via tags.

## Accessing the ECID via Data Prep (preferred method) {#accessing-ecid-data-prep}

This method uses [Data Prep for Data Collection](/help/datastreams/data-prep.md) to configure a custom mapping for the `ECID`.

See the [Data Prep for Data Collection](/help/datastreams/data-prep.md) documentation to learn how to use this feature.

If you are looking to set the ECID in a custom XDM field, in addition to having it in the identity map, you can do this by setting the `source` to the following path:

```js
xdm.identityMap.ECID[0].id
```

Then, set the target to an XDM path where the field is of type `string`.

![](./assets/access-ecid-data-prep.png)

## Tags

If you need to access the [!DNL ECID] on the client side, use the tags approach as described below.

1. Ensure your property is configured with [rule component sequencing](/help/tags/ui/managing-resources/rules.md#sequencing) enabled. 
1. Create a new rule. This rule should be used exclusively for capturing the [!DNL ECID] without any other important actions.
1. Add a [!UICONTROL Library Loaded] event to the rule.
1. Add a [!UICONTROL Custom Code] action to the rule with the following code (assuming the name you've configured for the SDK instance is `alloy` and there isn't already a data element of the same name):

   ```js
    return alloy("getIdentity")
      .then(function(result) {
        _satellite.setVar("ECID", result.identity.ECID);
      });
   ```

1. Save the rule.

You should then be able to access the [!DNL ECID] in subsequent rules using `%ECID%` or `_satellite.getVar("ECID")`, like you would access any other data element.

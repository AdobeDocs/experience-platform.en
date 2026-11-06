---
title: Accessing the ECID
description: Learn how to access the Experience Cloud ID from Data Prep or Tags
exl-id: 8e63a873-d7b5-4c6c-b14d-3c3fbc82b62f
TQID: 'https://experienceleague.adobe.com/4k6I22EfvjFzCd1ypMIgDYibE7lMxf7P-XJZ-kFKnCc'
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: a50ad69b-1331-40e9-b634-531a085a6a54
    internal-label: Identities
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
  - id: aff8c1fa-1be7-48bd-92b8-4b12a668ca13
    internal-label: Datastreams data prep
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
autotag-review: '2026-11-05T22:08:57.077Z'
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

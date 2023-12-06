---
title: edgeConfigOverrides
description: Override configuration settings for a single sendEvent command
---
# `edgeConfigOverrides`

*This page outlines the object to override configuration settings for a single `sendEvent` command. If you want to override configuration settings for every command on a page, see [`edgeConfigOverrides`](../configure/edgeconfigoverrides.md) within the `configure` command.*

The `edgeConfigOverrides` object allows you to override configuration settings for the current `sendEvent` command. This override is useful when you have different websites or subdomains for different countries, or if you have multiple Experience Platform sandboxes to store data specific to different business units.

>[!IMPORTANT]
>
>You must first configure override settings within the datastream before using product-specific overrides. See [Datastream overrides](/help/datastreams/overrides.md) for more information.

If you set overrides both in the `configure` command and in the `sendEvent` command, the overrides in the `sendEvent` command take priority.

## Properties within this object

The following properties are available within this object:

* **Datastream override**: Send this call to a different datastream. If you set this value, other overrides that require datastream configuration must be configured in the datastream set here.
* **Third-party ID sync container**: The ID for the destination third-party ID sync container in Adobe Audience Manager. You must first configure a third-party ID container override in the datastream's settings before using this field.
* **Target property token**: The token for the destination property in Adobe Target. You must first configure a Target property token override in the datastream's settings before using this field.
* **Report suites**: The report suite IDs to override in Adobe Analytics. You must first configure report suite overrides in the datastream's settings before using this field.

## Edge configuration overrides using the Web SDK tag extension

Set each desired field within the actions of a tag rule.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the [!UICONTROL Action Type] to **[!UICONTROL Send event]**.
1. Scroll down to the section labled **[!UICONTROL Datastream configuration overrides]**.
1. Set each field in this section to the desired override value.
1. Click **[!UICONTROL Keep Changes]**, then run your publishing workflow.

Separate fields are provided for [!UICONTROL Development], [!UICONTROL Staging], and [!UICONTROL Production] environments. Make sure that you fill in each desired field for each environment.

## Edge configuration overrides using the Web SDK JavaScript library

Set the `edgeConfigOverrides` object when running the `sendEvent` command. Set each desired property within this object.

* **`datastreamId`**: The datastream override ID.
* **`com_adobe_analytics.reportSuites[]`**: An array of strings that determines which report suites that you want to send Analytics data to.
* **`com_adobe_identity.idSyncContainerId`**: The third-party ID sync container that you want to use in Audience Manager.
* **`com_adobe_target.propertyToken`**: The token for the Target destination property.

```js
alloy("sendEvent", {
  edgeConfigOverrides: {
    datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93"
    com_adobe_analytics: {
      reportSuites: [
        "examplersid",
        "examplersid2",
        "examplersid3"
        ]
    },
    com_adobe_identity: {
      idSyncContainerId: "1234567"
    },
    com_adobe_target: {
      propertyToken: "63a46bbc-26cb-7cc3-def0-9ae1b51b6c62"
    }
  }
});
```

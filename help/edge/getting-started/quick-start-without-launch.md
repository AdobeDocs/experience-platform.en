---
title: Quick start using plain javascript
seo-title: Adobe Experience Platform Web SDK quick start 
description: Quick start guide for using the Experience Platform Web SDK to collect data
seo-description: Quick start guide for using the Experience Platform Web SDK  to collect data
keywords: 1st-party domain;CNAME;schema;create schema;configuration id;configuration tool;data element;create data element;XDM Object;sendEvent;send Event;install sdk;install web sdk;configure;configure web sdk;
---

# Adobe Experience Platform Web SDK JavaScript quick start guide

This guide leads you through the different ways to set up the Adobe Experience Platform Web SDK. To use this feature, you need to be on the allowlist. If you would like to get on the waiting list, please reach out to your Certified software manager (CSM).

- Have a [1st-party domain (CNAME)](https://docs.adobe.com/content/help/en/core-services/interface/ec-cookies/cookies-first-party.html) enabled. If you already have a CNAME for Analytics, you should use that one. Testing in development works without a CNAME but you need one before you go to production.
- Be entitled to Adobe Experience Platform.  If you have not purchased Platform, Adobe will provision you with Experience Platform Data Services Foundation for use in a limited fashion with the SDK at no extra charge.
- Be using the latest version of the Visitor ID service.

## Prepare a Schema

The [!DNL Experience Platform Edge Network] takes data as XDM. XDM is a data format that lets you define schemas. The schema defines how the [!DNL Edge Network] expects the data to be formatted. To send data, you need to define your schema.

- [Create a schema](../../xdm/tutorials/create-schema-ui.md)
- Add the Adobe Experience Platform [!DNL Web SDK] mixin to the schema you created

The following video is intended to support you in creating a schema, dataset, and streaming source connector for your [!DNL Web SDK] data.

>[!VIDEO](https://video.tv.adobe.com/v/35395?quality=12&learn=on)

## Create a configuration ID

You can create a configuration ID using the [edge configuration tool](../fundamentals/edge-configuration.md) in Adobe Launch, even if you are not using the tag management features. This allows you to enable the [!DNL Edge Network] to send data to the various solutions. Details for how to find each option are found in the [Edge Configuration Tool](../fundamentals/edge-configuration.md) Page.

>[!NOTE]
>
>Your organization must be on the allow list for the feature. Please contact your CSM to get put on the allow list.

## Install the SDK

To install the SDK, copy and paste the following "base code" as high as possible in the `<head>` tag of your HTML:

```markup
<script>
  !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
  (window,["alloy"]);
</script>
<script src="https://cdn1.adoberesources.net/alloy/2.1.0/alloy.min.js" async></script>
```

For more details on different options to do this, see [Installing the SDK](../fundamentals/installing-the-sdk.md).

## Configure the SDK

Next, provide your configuration to the SDK. This is done using the `configure` command. This should be the first command called on each page.

```javascript
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93:dev",
  "orgId":"ADB3LETTERSANDNUMBERS@AdobeOrg"
});
```

Here, you provide the configuration ID you created above as well as your organization ID. These are the only two required fields. However, there are many other [configuration options](../fundamentals/configuring-the-sdk.md).

## Send an event

After you have called the configure command, you are free to start tracking events.

```javascript
alloy("sendEvent", {});
```

Usually, you send events with some data. You can send XDM data like this. The data you send must be in the schema you created in XDM. 

```javascript
alloy("sendEvent", {
  "xdm": {
    "web":{
      "webPageDetails":{
        "name":"Home Page"
      }
    }
  }
});
```

For more details on how to track events, see [Tracking Events](../fundamentals/tracking-events.md).

## Next Steps

After you have data flowing, you can do the following:

- [Build out your schema](https://docs.adobe.com/content/help/en/experience-platform/xdm/schema/composition.html)
- [Learn about debugging](../fundamentals/debugging.md)
- Learn how to [personalize the experience](../fundamentals/rendering-personalization-content.md)
- Learn about how to send data to multiple solutions
  - [Adobe Analytics](../solution-specific/analytics/analytics-overview.md)
  - [Adobe Audience Manager](../solution-specific/audience-manager/audience-manager-overview.md)
  - [Adobe Target](../solution-specific/target/target-overview.md)

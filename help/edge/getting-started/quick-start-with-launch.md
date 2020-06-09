---
title: Quick start with Launch
seo-title: Adobe Experience Platform Web SDK quick start with Launch
description: Quick start guide for using the Experience Platform Web SDK extension to collect data
seo-description: Quick start guide for using the Experience Platform Web SDK extension to collect data
---

# Welcome

This guide will take you through the different how to setup the Adobe Experience Platform Web SDK in Launch. To be able to use this feature you need to have permissions and be on the allow list. If you would like to get on the waiting list please reach out to you CSM.

- Have a [1st-party domain (CNAME)](https://docs.adobe.com/content/help/en/core-services/interface/ec-cookies/cookies-first-party.html) enabled. If you already have a CNAME for Analytics, you should use that one. Testing in development will work without a CNAME but you will need one before you go to production
- Be entitled to Adobe Experience Platform Data Platform. If you have not purchased Platform we will provision you with Experience Platform Data Services Foundation for use in a limited fashion with the SDK at no extra charge.
- Be using the latest version of the Visitor ID service

## Create an configuration ID

You can create a configuration ID using the [edge configuration tool](../fundamentals/edge-configuration.md) in launch. This will allow you to enable the Edge Network to send data to the various solutions. Details for how to find each option are found in the [Edge Configuration Tool](../fundamentals/edge-configuration.md) Page.

>[!NOTE]
>
>Your organization must be on the allow list for the feature. Please contact your CSM to get put on the allow list.

## Prepare a Schema

The Experience Platform Edge Network takes data as XDM. XDM is a data format that lets you define schemas. The schema defines how the Edge Network expects the data to be formatted. To send data you will need to define your schema. 

- [Create a schema](../../xdm/tutorials/create-schema-ui.md)
- Add the Adobe Experience Platform Web SDK mixin to the schema you created

## Install the SDK in Launch

Log in to Launch and install the `AEP Web SDK` extension. As part of installing the SDK, you will be prompted to configure the extension. Enter the Config ID you requested above. The extension automatically fills in your Organization ID.

For more details on different configuration options, see [Configuring the SDK](../fundamentals/configuring-the-sdk.md).

## Create a Data Element Base on Your Schema

In launch create a Data Element that references the schema by changing the extension to AEP Web SDK and setting the type to XDM Object. This will load up your schema and allow you to map data elements into different parts of the schema.

![Date Element In Launch](../../assets/edge_data_element.png)

## Send an event

After the extension is installed, start sending events by adding a "sendEvent" action from the AEP Web SDK extension to a rule. Be sure to add the data element you just created to the event as the XDM data. We recommend that you send at least one event every time a page is loaded.

For more details on how to track events, see [Tracking Events](../fundamentals/tracking-events.md).

## Next Steps

Once you have data flowing you can do the following. 

- [Build out your schema](https://docs.adobe.com/content/help/en/experience-platform/xdm/schema/composition.html)
- [Learn about debugging](../fundamentals/debugging.md)
- Learn how to [personalize the experience](../fundamentals/rendering-personalization-content.md)
- Learn about how to send data to multiple solutions
  - [Adobe Analytics](../solution-specific/analytics/analytics-overview.md)
  - [Adobe Audience Manager](../solution-specific/audience-manager/audience-manager-overview.md)
  - [Adobe Target](../solution-specific/target/target-overview.md)

---
title: Configure the Adobe Experience Platform Web SDK Extension
description: How to configure the Adobe Experience Platform Web SDK tag extension in the UI.
exl-id: 96d32db8-0c9a-49f0-91f3-0244522d66df
---

# Configure the Adobe Experience Platform Web SDK tag extension

The Adobe Experience Platform Web SDK tag extension sends data to Adobe Experience Cloud from web properties through the Adobe Experience Platform Edge Network. The extension allows you to stream data into Platform, synchronize identities, process customer consent signals, and automatically collect context data.

This document covers how to configure the extension in the UI.

## Getting started

If the Platform Web SDK extension has already been installed for a property, open the property in the UI and select the **[!UICONTROL Extensions]** tab. Under the Platform Web SDK, select **[!UICONTROL Configure]**.

![](assets/configure.png)

If you have not installed the extension yet, select the **[!UICONTROL Catalog]** tab. From the list of available extensions, find the Platform Web SDK extension and select **[!UICONTROL Install]**.

![](assets/install.png)

In both cases, you arrive at the configuration page for the Platform Web SDK. The sections below explain the extension's configuration options.

![](assets/config-screen.png)

## General configuration options

The configuration options at the top of the page tell Adobe Experience Platform where to route the data and what configurations to use on the server.

### [!UICONTROL Name]

The Adobe Experience Platform Web SDK extension supports multiple instances on the page. The name is used to send data to multiple organizations with a tag configuration.

The extension's name defaults to "[!DNL alloy]". However, you can change the instance name to any valid JavaScript object name.

### **[!UICONTROL IMS Organization ID]**

The [!UICONTROL IMS Organization ID] is the organization that you would like the data sent to at Adobe. Most of the time, use the default value that is autopopulated. When you have multiple instances on the page, populate this field with the value of the second organization you want to send data to.

### **[!UICONTROL Edge Domain]**

The [!UICONTROL Edge Domain] is the domain that the Adobe Experience Platform extension sends and receives data from. Adobe recommends using a 1st-party domain (CNAME) for this extension. The default 3rd-party domain works for development environments but is not suitable for production environments. Instructions on how to set up a first-party CNAME are listed [here](https://experienceleague.adobe.com/docs/core-services/interface/ec-cookies/cookies-first-party.html).

## [!UICONTROL Datastreams]

When a request is sent to the Adobe Experience Platform Edge Network, a datastream ID is used to reference the server-side configuration. You can update the configuration without having to make code changes on your website.

See the guide on [datastreams](../datastreams/overview.md) for more information.


## [!UICONTROL Privacy]

![](assets/privacy.png)

The [!UICONTROL Privacy] section allows you to configure how the SDK handles user consent signals from your website. Specifically, it allows you to select the default level of consent that is assumed of a user if no other explicit consent preference has been provided. The default consent level is not saved to the user's profile. The following table breaks down what each option entails:

| [!UICONTROL Default Consent Level] | Description |
| --- | --- |
| [!UICONTROL In] | Collect events that occur before the user provides consent preferences. |
| [!UICONTROL Out] | Discard events that occur before the user provides consent preferences. |
| [!UICONTROL Pending] | Queue events that occur before the user provides consent preferences. When consent preferences are provided, the events will be collected or discarded depending on the provided preferences. |
| [!UICONTROL Provided by data element] | The default consent level is determined by a separate data element that you define. When using this option, you must specify the data element using the provided dropdown menu. |

Use Out or Pending if you require explicit user consent for your business operations.

## [!UICONTROL Identity]

![](assets/identity.png)

### [!UICONTROL Migrate ECID from VisitorAPI]

This option is enabled by default. When this feature is enabled, the SDK can read the AMCV and s_ecid cookies and set the AMCV cookie used by Visitor.js. This feature is important when migrating to Adobe Experience Platform Web SDK as some pages might still be using Visitor.js. It allows the SDK to continue to use the same ECID so that users are not identified as two separate users.

### [!UICONTROL Use third-party cookies]

This option enables the SDK to attempt to store a user identifier in a third-party cookie. If successful, the user is identified as a single user as they navigate across multiple domains, rather than being identified as a separate user on each domain. If this option is enabled, the SDK might still be unable to store the user identifier in a third-party cookie if the browser does not support third-party cookies or has been configured by the user to not allow third-party cookies. In this case, the SDK only stores the identifier in the first-party domain.

## [!UICONTROL Personalization]

![](assets/personalization.png)

If you would like to hide certain parts if your site while personalized content is loaded, you can specify the elements to hide in the prehiding style editor. You can then copy the default prehiding snippet provided to you and paste it inside the `<head>`element of your HTML site. 

## [!UICONTROL Data Collection]

![](assets/data-collection.png)

### [!UICONTROL Callback function]

The callback function provided in the extension is also called the [`onBeforeEventSend` function](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/configuring-the-sdk.html?lang=en) in the library. This function allows you to modify events globally before they're sent to Adobe Edge Network. More detailed information on how to use this function can be found [here](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/tracking-events.html?lang=en#modifying-events-globally). 

### [!UICONTROL Click data collection]

The SDK can automatically collect link click information for you. By default, this feature is enabled but can be disabled using this option. Links are also labeled as download links if they contain one of the download expressions listed in the [!UICONTROL Download Link Qualifier] textbox. Adobe provides you with some default download link qualifiers, but these can be edited at any time.

### [!UICONTROL Automatically collected context data]

By default, the SDK collects certain context data regarding device, web, environment, and place context. If you would like to see a list of the information Adobe collects, you can find it [here](https://experienceleague.adobe.com/docs/experience-platform/edge/data-collection/automatic-information.html?lang=en). If you don't want this data collected or you only want certain categories of data collected, you can change these options.  

## [!UICONTROL Datastream Configuration Overrides]

Datastream overrides allow you to define additional configurations for your datastreams, which get passed to the Edge Network via the Web SDK.

This helps you trigger different datastream behaviors than the default ones, without creating a new datastream or modifying your existing settings.

Datastream configuration override is a two step process:

1. First, you must define your datastream configuration overrides in the [datastream configuration page](../../../../edge/datastreams/configure.md).
2. Then, you must send the overrides to the Edge Network either via a Web SDK command, or by using the Web SDK tag extension.

See the datastream [configuration overrides documentation](../../../../edge/datastreams/overrides.md) for detailed instructions on how to override datastream configurations.

As an alternative to passing the overrides through a Web SDK command, you can configure the overrides in the tag extension screen shown below.

![Image showing the datastream configuration overrides in the Web SDK tag extension page.](assets/datastream-overrides.png)

## [!UICONTROL Advanced Settings]

![](assets/advanced-settings.png)

### [!UICONTROL Edge base path]

Use this field if you need to change the base path that is used to interact with Adobe Edge Network. This shouldn't require updating, but in the case that you participate on a beta or alpha, Adobe might ask you to change this field.

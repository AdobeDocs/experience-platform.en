---
title: Configure the Web SDK tag Extension
description: Learn how to configure the Experience Platform Web SDK tag extension in the Tags UI.
exl-id: 22425daa-10bd-4f06-92de-dff9f48ef16e
---
# Configure the Web SDK tag extension

The [!DNL Web SDK] tag extension sends data to Adobe Experience Cloud from web properties through the Experience Platform Edge Network.

The extension allows you to stream data into Platform, synchronize identities, process customer consent signals, and automatically collect context data.

This document explains how to configure the tag extension in the Tags UI.

## Install the Web SDK tag extension {#install}

The Web SDK tag extension needs a property to be installed on. If you have not done so already, see the documentation on [creating a tag property](https://experienceleague.adobe.com/docs/platform-learn/implement-in-websites/configure-tags/create-a-property.html).

After you have created a property, open the property and select the **[!UICONTROL Extensions]** tab on the left side bar.

Select the **[!UICONTROL Catalog]** tab. From the list of available extensions, find the [!DNL Web SDK] extension and select **[!UICONTROL Install]**.

![Image showing the Tags UI with the Web SDK extension selected](assets/web-sdk-install.png)

After selecting **[!UICONTROL Install]**, you must configure the Web SDK tag extension and save the configuration.

>[!NOTE]
>
>The tag extension only gets installed after saving the configuration. See the next sections to learn how to configure the tag extension.

## Create a custom Web SDK build {#custom-build}

The Web SDK library includes multiple modules for various features like personalization, identity, link tracking, and more. Depending on your use cases, you might only need specific features instead of the entire library. Creating a custom Web SDK build allows you to select only the modules you need, reducing the library size and improving performance.

When you create a custom Web SDK build, the build is used by all of your Web SDK instances.

>[!IMPORTANT]
>
>Disabling Web SDK components can break your existing implementation. Each time you disable a component, make sure to test your implementation thoroughly to make sure that all functionalities that you need are working as expected.
>When you disable a component, you can no longer edit the settings of that component.

To create a custom Web SDK build by using the Web SDK tag extension, follow the steps below.

1. In the tag extension configuration page, expand the **[!UICONTROL Custom build components]** section.
1. Enable or disable the components, based on your needs. You can select from the following components:
    * **[!UICONTROL Activity collector]**: This component enables automatic link collection and activity map tracking.
    * **[!UICONTROL Audiences]**: This components enables Audience Manager integration, including URL and cookie-based destinations, and ID syncs.
    * **[!UICONTROL Consent]**: This component enables consent integrations. Disabling this component disables the following elements:
      * [Set consent](action-types.md#set-consent) action type
    * **[!UICONTROL Context]**: This component enables automatic collection of context data.
    * **[!UICONTROL Event merge]**: _Deprecated_. Disabling this component disables the following elements:
      * [Event merge ID](action-types.md#data) data element
      * **[!UICONTROL Reset event merge ID]** action type
    * **[!UICONTROL Media analytics bridge]**: This component enables Edge Network Streaming Media using the media analytics interface. Disabling this component disables the following elements:
      * [Get Media Analytics Tracker](action-types.md#get-media-analytics-tracker) action type
    * **[!UICONTROL Personalization]**: This component enables the Adobe Target and Adobe Journey Optimizer integrations. Disabling this component disables the following elements:
      * [Apply propositions action](action-types.md) type
    * **[!UICONTROL Rules engine]**: This component enables the Adobe Journey Optimizer on-device decisioning. Disabling this component disables the following elements:
      * [Evaluate rulesets](action-types.md#evaluate-rulesets) action type
      * [Subscribe ruleset items](event-types.md#subscribe-ruleset-items) event type
    * **[!UICONTROL Streaming media]**: This component enables Edge Network Streaming Media. Disabling this component disables the following elements:
      * [Send media event](action-types.md#send-media-event) action type

## Configure instance settings {#general}

The configuration options at the top of the page tell Adobe Experience Platform where to route the data and what configurations to use on the server.

![Image showing the general settings of the Web SDK tag extension in the Tags UI](assets/web-sdk-ext-general.png)

* **[!UICONTROL Name]**: The Adobe Experience Platform Web SDK extension supports multiple instances on the page. The name is used to send data to multiple organizations with a tag configuration. The instance name defaults to `alloy`. However, you can change the instance name to any valid JavaScript object name.
* **[!UICONTROL IMS organization ID]**: The ID of the organization that you would like the data sent to at Adobe. Most of the time, use the default value that is autopopulated. When you have multiple instances on the page, populate this field with the value of the second organization you want to send data to.
* **[!UICONTROL Edge domain]**: The domain that the extension sends and receives data from. Adobe recommends using a 1st-party domain (CNAME) for this extension. The default 3rd-party domain works for development environments but is not suitable for production environments. Instructions on how to set up a first-party CNAME are listed [here](https://experienceleague.adobe.com/docs/core-services/interface/ec-cookies/cookies-first-party.html).

## Configure datastream settings {#datastreams}

This section allows you to select the datastreams that should be used for each of the three available environments (production, staging, and development).

When a request is sent to the Edge Network, a datastream ID is used to reference the server-side configuration. You can update the configuration without having to make code changes on your website.

See the guide on [datastreams](../../../../datastreams/overview.md) to learn how to configure a datastream.

You can either choose a datastream from the available drop-down menus, or select **[!UICONTROL Enter values]** and enter a custom datastream ID for each environment.

![Image showing the datastream settings of the Web SDK tag extension in the Tags UI](assets/web-sdk-ext-datastreams.png)

## Configure privacy settings {#privacy}

This section allows you to configure how Web SDK handles user consent signals from your website. Specifically, it allows you to select the default level of consent that is assumed of a user if no other explicit consent preference has been provided.

The default consent level is not saved to the user profile.

![Image showing the privacy settings of the Web SDK tag extension in the Tags UI](assets/web-sdk-ext-privacy.png)

| [!UICONTROL Default consent level] | Description |
| --- | --- |
| [!UICONTROL In] | Collect events that occur before the user provides consent preferences. |
| [!UICONTROL Out] | Discard events that occur before the user provides consent preferences. |
| [!UICONTROL Pending] | Queue events that occur before the user provides consent preferences. When consent preferences are provided, the events will be collected or discarded depending on the provided preferences. |
| [!UICONTROL Provided by data element] | The default consent level is determined by a separate data element that you define. When using this option, you must specify the data element using the provided dropdown menu. |

>[!TIP]
>
>Use **[!UICONTROL Out]** or **[!UICONTROL Pending]** if you require explicit user consent for your business operations.

## Configure identity settings {#identity}

This section allows you to define the behavior of the Web SDK when it comes to handling user identification.

![Image showing the identity settings of the Web SDK tag extension in the Tags UI](assets/web-sdk-ext-identity.png)

* **[!UICONTROL Migrate ECID from VisitorAPI]**: This option is enabled by default. When this feature is enabled, the SDK can read the `AMCV` and `s_ecid` cookies and set the `AMCV` cookie used by [!DNL Visitor.js]. This feature is important when migrating to Web SDK, as some pages might still be using [!DNL Visitor.js]. This option allows the SDK to continue to use the same [!DNL ECID] so that users are not identified as two separate users.
* **[!UICONTROL Use third-party cookies]**: When this option is enabled, Web SDK attempts to store a user identifier in a third-party cookie. If successful, the user is identified as a single user as they navigate across multiple domains, rather than being identified as a separate user on each domain. If this option is enabled, the SDK might still be unable to store the user identifier in a third-party cookie if the browser does not support third-party cookies or has been configured by the user to not allow third-party cookies. In this case, the SDK only stores the identifier in the first-party domain.

    >[!IMPORTANT]
    >>Third-party cookies are not compatible with the [first-party device ID](../../../../web-sdk/identity/first-party-device-ids.md) functionality in Web SDK.
    >You can either use first-party device IDs, or you can use third-party cookies, but you cannot use both features simultaneously.

## Configure personalization settings {#personalization}

This section allows you to configure how you want to hide certain parts of a page while personalized content is loaded. This ensures that your visitors only see the personalized page.

![Image showing the personalization settings of the Web SDK tag extension in the Tags UI](assets/web-sdk-ext-personalization.png)

* **[!UICONTROL Migrate Target from at.js to the Web SDK]**: Use this option to enable [!DNL Web SDK] to read and write the legacy `mbox` and `mboxEdgeCluster` cookies that are used by at.js `1.x` or `2.x` libraries. This helps you keep the visitor profile while moving from a page that uses the Web SDK to a page that uses at.js `1.x` or `2.x` libraries and vice-versa.

### Prehiding style {#prehiding-style}

The prehiding style editor allows you to define custom CSS rules to hide specific sections of a page. When the page is loaded, Web SDK uses this style to hide the sections which need to be personalized, retrieves the personalization, then un-hides the personalized page sections. This way, your visitors see the already personalized pages, without seeing the personalization retrieval process.
 
### Prehiding snippet {#prehiding-snippet}

The prehiding snippet is useful when the Web SDK library is loaded asynchronously. In this situation, to avoid flickering, we recommend hiding the content before the Web SDK library is loaded.

To use the prehiding snippet, copy and paste it inside the `<head>` element of your page.

>[!IMPORTANT]
>
>When using the prehiding snippet, Adobe recommends to use the same [!DNL CSS] rule as the one used by the [prehiding style](#prehiding-style).

## Configure data collection settings {#data-collection}

Manage data collection configuration settings. Similar settings in the JavaScript library are available using the [`configure`](/help/web-sdk/commands/configure/overview.md) command.

![Image showing the data collection settings of the Web SDK tag extension in the Tags UI.](assets/web-sdk-ext-collection.png)

* **[!UICONTROL On before event send callback]**: A callback function to evaluate and modify the payload sent to Adobe. Use the `content` variable within the callback function to modify the payload. This callback is the tag equivalent to [`onBeforeEventSend`](/help/web-sdk/commands/configure/onbeforeeventsend.md) in the JavaScript library.
* **[!UICONTROL Collect internal link clicks]**: A checkbox that enables the collection of link tracking data internal to your site or property. When you enable this checkbox, event grouping options appear:
  * **[!UICONTROL No event grouping]**: Link tracking data is sent to Adobe in separate events. Link clicks sent in separate events can increase the contractual usage of data sent to Adobe Experience Platform.
  * **[!UICONTROL Event grouping using session storage]**: Store link tracking data in session storage until the next page event. On the following page, the stored link tracking data and page view data is sent to Adobe at the same time. Adobe recommends enabling this setting when tracking internal links.
  * **[!UICONTROL Event grouping using local object]**: Store link tracking data in a local object until the next page event. If a visitor navigates to a new page, link tracking data is lost. This setting is most beneficial in context of single-page applications.
* **[!UICONTROL Collect external link clicks]**: A checkbox that enables the collection of external links.
* **[!UICONTROL Collect download link clicks]**: A checkbox that enables the collection of download links.
* **[!UICONTROL Download link qualifier]**: A regular expression that qualifies a link URL as a download link.
* **[!UICONTROL Filter click properties]**: A callback function to evaluate and modify click-related properties before collection. This function runs before the [!UICONTROL On before event send callback].
* **Context settings**: Automatically collect visitor information, which populates specific XDM fields for you. You can choose **[!UICONTROL All default context information]** or **[!UICONTROL Specific context information]**. It is the tag equivalent to [`context`](/help/web-sdk/commands/configure/context.md) in the JavaScript library.
  * **[!UICONTROL Web]**: Collects information about the current page.
  * **[!UICONTROL Device]**: Collects information about the user's device. 
  * **[!UICONTROL Environment]**: Collects information about the user's browser.
  * **[!UICONTROL Place context]**: Collects information about the user's location.
  * **[!UICONTROL High entropy user-agent hints]**: Collects more detailed information about the user's device.

>[!TIP]
>
>The **[!UICONTROL On before link click send]** field is a deprecated callback that is only visible for properties that already have it configured. It is the tag equivalent to [`onBeforeLinkClickSend`](/help/web-sdk/commands/configure/onbeforelinkclicksend.md) in the JavaScript library. Use the **[!UICONTROL Filter click properties]** callback to filter or adjust click data, or use the **[!UICONTROL On before event send callback]** to filter or adjust the overall payload sent to Adobe. If both the **[!UICONTROL Filter click properties]** callback and the **[!UICONTROL On before link click send]** callback are set, only the **[!UICONTROL Filter click properties]** callback runs.

## Configure media collection settings {#media-collection}

The media collection feature helps you collect data related to media sessions on your website. 

The collected data can include information about media playbacks, pauses, completions, and other related events. Once collected, you can send this data to Adobe Experience Platform and/or Adobe Analytics, to generate reports. This feature provides a comprehensive solution for tracking and understanding media consumption behavior on your website.

![Image showing the media collection settings of the Web SDK tag extension in the Tags UI](assets/media-collection.png)


* **[!UICONTROL Channel]**: The name of the channel where media collection occurs. Example: `Video channel`.
* **[!UICONTROL Player Name]**: The name of the media player.
* **[!UICONTROL Application Version]**: The version of the media player application.
* **[!UICONTROL Main ping interval]**: Frequency of pings for main content, in seconds. The default value is `10`. Values can range from `10` to `50` seconds.  If no value is specified, the default value is used when using [automatically-tracked sessions](../../../../web-sdk/commands/createmediasession.md#automatic).
* **[!UICONTROL Ad ping interval]**: Frequency of pings for ad content, in seconds. The default value is `10`. Values can range from `1` to `10` seconds. If no value is specified, the default value is used when using [automatically-tracked sessions](../../../../web-sdk/commands/createmediasession.md#automatic)

## Configure datastream overrides {#datastream-overrides}

Datastream overrides allow you to define additional configurations for your datastreams, which get passed to the Edge Network via the Web SDK.

This helps you trigger different datastream behaviors than the default ones, without creating a new datastream or modifying your existing settings.

Datastream configuration override is a two step process:

1. First, you must define your datastream configuration overrides in the [datastream configuration page](/help/datastreams/configure.md).
2. Then, you must send the overrides to the Edge Network either via a Web SDK command, or by using the Web SDK tag extension.

See the datastream [configuration overrides documentation](/help/datastreams/overrides.md) for detailed instructions on how to override datastream configurations.

As an alternative to passing the overrides through a Web SDK command, you can configure the overrides in the tag extension screen shown below.

>[!IMPORTANT]
>
> Datastream overrides must be configured on a per-environment basis. The development, staging, and production environments all have separate overrides. You can copy the settings between them using the dedicated options shown in the screen below.

![Image showing the datastream configuration overrides using the Web SDK tag extension page.](assets/datastream-overrides.png)

By default, the datastream configuration override is disabled. The **[!UICONTROL Match datastream configuration]** option is selected by default.

![Web SDK tag extension user interface showing the datastream configuration overrides default setting.](assets/datastream-override-default.png)

To enable datastream overrides in the tag extension, select **[!UICONTROL Enabled]** from the drop down menu.

![Web SDK tag extension user interface showing the datastream configuration overrides Enabled setting.](assets/datastream-override-enabled.png)

After you enable the datastream configuration overrides, you can configure the overrides for each service described below.

The datastream override settings below will override any server-side datastream configurations and rules for the selected environment.

### Adobe Analytics {#analytics}

Use the settings in this section to override data routing to the Adobe Analytics service.

![Web SDK tag extension UI image showing the Adobe Analytics datastream override settings.](assets/datastream-override-analytics.png)

* **[!UICONTROL Enabled]** / **[!UICONTROL Disabled]**: Use this drop-down menu to enable or disable data routing to the Adobe Analytics service.
* **[!UICONTROL Report suites]**: The IDs for the destination report suites in Adobe Analytics. The value must be a preconfigured override report suite (or a comma-separated list of report suites) from your datastream configuration. This setting overrides the primary report suites.
* **[!UICONTROL Add Report Suite]**: Select this option to add additional report suites.

### Adobe Audience Manager {#audience-manager}

Use the settings in this section to override data routing to the Adobe Audience Manager service.

![Web SDK tag extension UI image showing the Adobe Audience Manager datastream override settings.](assets/datastream-override-audience-manager.png)

* **[!UICONTROL Enabled]** / **[!UICONTROL Disabled]**: Use this drop-down menu to enable or disable data routing to the Adobe Audience Manager service.
* **[!UICONTROL Third-party ID sync container]**: The ID for the destination third-party ID sync container in Audience Manager. The value must be a preconfigured secondary container from your datastream configuration and overrides the primary container.

### Adobe Experience Platform {#experience-platform}

Use the settings in this section to override data routing to the Adobe Experience Platform service.

![Web SDK tag extension UI image showing the Adobe Experience Platform datastream override settings.](assets/datastream-override-experience-platform.png)

* **[!UICONTROL Enabled]** / **[!UICONTROL Disabled]**: Use this drop-down menu to enable or disable data routing to the Adobe Experience Platform service.
* **[!UICONTROL Event dataset]**: The ID for the destination event dataset in the Adobe Experience Platform. The value must be a preconfigured secondary dataset from your datastream configuration.
* **[!UICONTROL Offer Decisioning]**: Use this drop-down menu to enable or disable data routing to the [!DNL Offer Decisioning] service.
* **[!UICONTROL Edge Segmentation]**: Use this drop-down menu to enable or disable data routing to the [!DNL Edge Segmentation] service.
* **[!UICONTROL Personalization Destinations]**: Use this drop-down menu to enable or disable data routing to personalization destinations.
* **[!UICONTROL Adobe Journey Optimizer]**: Use this drop-down menu to enable or disable data routing to the [!DNL Adobe Journey Optimizer] service.

### Adobe Server-Side Event Forwarding {#ssf}

Use the settings in this section to override data routing to the Adobe Server-Side Event Forwarding service.

![Web SDK tag extension UI image showing the Adobe Server-Side Event Forwarding datastream override settings.](assets/datastream-override-ssf.png)

* **[!UICONTROL Enabled]** / **[!UICONTROL Disabled]**: Use this drop-down menu to enable or disable data routing to the Adobe Server-Side Event Forwarding service.

### Adobe Target {#target}

Use the settings in this section to override data routing to the Adobe Target service.

![Web SDK tag extension UI image showing the Adobe Target datastream override settings.](assets/datastream-override-target.png)

* **[!UICONTROL Enabled]** / **[!UICONTROL Disabled]**: Use this drop-down menu to enable or disable data routing to the Adobe Target service.

## Configure advanced settings

Use the **[!UICONTROL Edge base path]** field if you need to change the base path that is used to interact with the Edge Network. This shouldn't require updating, but in the case that you participate on a beta or alpha, Adobe might ask you to change this field.

![Image showing the advanced settings using the Web SDK tag extension page.](assets/advanced-settings.png)

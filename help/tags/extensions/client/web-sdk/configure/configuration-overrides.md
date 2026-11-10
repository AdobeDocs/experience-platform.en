---
title: Datastream configuration override settings
description: Modify configuration settings when certain conditions are met.
exl-id: 68227148-3d74-4807-836c-14acd8a9c1dc
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
  - id: 1a2b3c4d-0019-4019-8019-000000000019
    internal-label: Datastreams services
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
# Datastream configuration override settings {#config-overrides}

>[!CONTEXTUALHELP]
>id="platform_tags_websdk_overrides"
>title="Datastream configuration overrides"
>abstract="Conditionally trigger different datastream behaviors without requiring a separate datastream. Setting any client-side datastream configuration overrides for an environment in this section overrides any server-side dynamic datastream configuration and rules for that environment."

Datastream overrides allow you to define additional configurations for your datastreams, which get passed to the Edge Network via the Web SDK. This feature helps you conditionally trigger different datastream behaviors without creating a new datastream or modifying your existing settings.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the **[!UICONTROL Datastream configuration overrides]** section.

Datastream configuration override is a two step process:

1. First, you must define your datastream configuration override when [configuring a datastream](/help/datastreams/configure.md) in the Datastreams UI. See [Datastream configuration overrides](/help/datastreams/overrides.md) in the datastreams documentation for instructions on how to configure overrides.
1. After you have configured the datastream override in the datastreams UI, you can configure the tag extension.

Datastream overrides must be configured on a per-environment basis. The development, staging, and production environments all have separate overrides. You can copy the override settings between any desired environment:

![Image showing the datastream configuration overrides using the Web SDK tag extension page.](../assets/datastream-overrides.png)

By default, datastream configuration overrides are disabled. The **[!UICONTROL Match datastream configuration]** option is selected by default.

![Web SDK tag extension user interface showing the datastream configuration overrides default setting.](../assets/datastream-override-default.png)

To enable datastream overrides in the tag extension, select **[!UICONTROL Enabled]** from the drop down menu.

![Web SDK tag extension user interface showing the datastream configuration overrides Enabled setting.](../assets/datastream-override-enabled.png)

After you enable the datastream configuration overrides, you can configure the overrides for each service described below. These datastream override settings override any server-side datastream configurations and rules for the selected environment.

## Datastream {#datastream}

When you configure overrides in the [[!UICONTROL Send event]](../actions/send-event.md), [[!UICONTROL Send media event]](../actions/send-media-event.md), [[!UICONTROL Set consent]](../actions/set-consent.md), or [[!UICONTROL Redirect with identity]](../actions/redirect-with-identity.md) actions, a **[!UICONTROL Datastream]** field appears above the service overrides. Use this field to send the action's data to a different datastream than the one configured for the environment. This field is not available in the extension configuration.

The **[!UICONTROL Datastream]** field works the same way as the fields in the [[!UICONTROL Datastreams]](datastreams.md) section. You can choose a datastream from any sandbox that you have access to, filter the list by datastream name or ID, enter a datastream ID, or select a data element. The field description shows the datastream currently configured for the environment.

## Adobe Analytics

Override data routing to the Adobe Analytics service.

![Web SDK tag extension UI image showing the Adobe Analytics datastream override settings.](../assets/datastream-override-analytics.png)

* **[!UICONTROL Enabled]** / **[!UICONTROL Disabled]**: Enable or disable data routing to Adobe Analytics.
* **[!UICONTROL Report suites]**: The IDs for the destination report suites in Adobe Analytics. The value must be a preconfigured override report suite (or a comma-separated list of report suites) from your datastream configuration. This setting overrides the primary report suites.
* **[!UICONTROL Add Report Suite]**: Select this option to add additional report suites.

## Adobe Audience Manager

Override data routing to Adobe Audience Manager.

![Web SDK tag extension UI image showing the Adobe Audience Manager datastream override settings.](../assets/datastream-override-audience-manager.png)

* **[!UICONTROL Enabled]** / **[!UICONTROL Disabled]**: Enable or disable data routing to Adobe Audience Manager.
* **[!UICONTROL Third-party ID sync container]**: The ID for the destination third-party ID sync container in Audience Manager. The value must be a preconfigured secondary container from your datastream configuration and overrides the primary container.

## Adobe Experience Platform

Override data routing to Adobe Experience Platform.

![Web SDK tag extension UI image showing the Adobe Experience Platform datastream override settings.](../assets/datastream-override-experience-platform.png)

* **[!UICONTROL Enabled]** / **[!UICONTROL Disabled]**: Enable or disable data routing to Adobe Experience Platform.
* **[!UICONTROL Event dataset]**: The ID for the destination event dataset in the Adobe Experience Platform. The value must be a preconfigured secondary dataset from your datastream configuration.
* **[!UICONTROL Offer Decisioning]**: Enable or disable data routing to the [!DNL Offer Decisioning] service.
* **[!UICONTROL Edge Segmentation]**: Enable or disable data routing to the [!DNL Edge Segmentation] service.
* **[!UICONTROL Personalization Destinations]**: Enable or disable data routing to personalization destinations.
* **[!UICONTROL Adobe Journey Optimizer]**: Enable or disable data routing to [!DNL Adobe Journey Optimizer].

## Adobe Server-Side Event Forwarding

Override data routing to the Adobe Server-Side Event Forwarding service.

![Web SDK tag extension UI image showing the Adobe Server-Side Event Forwarding datastream override settings.](../assets/datastream-override-ssf.png)

* **[!UICONTROL Enabled]** / **[!UICONTROL Disabled]**: Enable or disable data routing to the Adobe Server-Side Event Forwarding service.

## Adobe Target {#target}

Override data routing to Adobe Target.

![Web SDK tag extension UI image showing the Adobe Target datastream override settings.](../assets/datastream-override-target.png)

* **[!UICONTROL Enabled]** / **[!UICONTROL Disabled]**: Enable or disable data routing to Adobe Target.

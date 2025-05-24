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
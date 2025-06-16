## Send event {#send-event}

Sends an event to Experience Platform so that Experience Platform can collect the data you send and act on that information. Any data that you want to send can be sent in the **[!UICONTROL XDM Data]** field. Use a [!DNL JSON] object that conforms to the structure of your [!DNL XDM] schema. This object can either be created on your page or through a **[!UICONTROL Custom Code]** **[!UICONTROL Data Element]**.

The **[!UICONTROL Send Event]** action type supports the fields and settings described below. These fields are all optional.

### Instance settings {#instance}

Use the **[!UICONTROL Instance]** selector to choose your Web SDK instance that you want to configure. If you have only one instance, it is preselected.

![Experience Platform Tags UI image showing the instance settings for the Send Event action type.](assets/instance-settings.png)

* **[!UICONTROL Instance]**: Select the Web SDK instance that you want to configure. If you only have one instance, it will be preselected.
* **[!UICONTROL Use guided events]**: Enable this option to automatically fill in or hide certain fields to enable a particular use case. Enabling this option triggers the display of the following settings.
    * **[!UICONTROL Request personalization]**: This event is intended to be called at the top of page. When selected, this event sets the following fields:
        * **[!UICONTROL Type]**: **[!UICONTROL Decisioning Proposition Fetch]**
        * **[!UICONTROL Automatically send a display event]**: **[!UICONTROL false]**
        * To automatically render personalization in this case, enable the **[!UICONTROL Render visual personalization decisions]** option.
    * **[!UICONTROL Collect analytics]**: This event is intended to be called at the bottom of the page. When selected, this event sets the following fields:
        * **[!UICONTROL Include rendered propositions]**: **[!UICONTROL true]**
        * The **[!UICONTROL Personalization]** settings are hidden

    >[!NOTE]
    >
    >The guided events are related to [top and bottom of page events](../../../../web-sdk/use-cases/top-bottom-page-events.md).
    

### Data {#data}

![Experience Platform Tags UI image showing the Data element settings for the Send Event action type.](assets/data.png)

* **[!UICONTROL Type]**: This field allows you specify an event type that will be recorded in your XDM schema. See [`type`](/help/web-sdk/commands/sendevent/type.md) in the `sendEvent` command for more information.
* **[!UICONTROL XDM]**:
* **[!UICONTROL Data]**: Use this field to send data that does not match an XDM schema. This field is useful if you are trying to update an Adobe Target profile or send Target Recommendations attributes. See [`data`](/help/web-sdk/commands/sendevent/data.md) in the `sendEvent` command for more information.
* **[!UICONTROL Include rendered propositions]**: Enable this option to include all the propositions that have been rendered, but a display event has not been sent. Use this in tandem with **[!UICONTROL Automatically send a display event]** disabled. This setting updates the `_experience.decisioning` XDM field with information about the rendered propositions.
* **[!UICONTROL Document will unload]**: Enable this option to make sure that the events reach the server even if the user navigates away from the page. This allows events to reach the server, but responses are ignored.
* **[!UICONTROL Merge ID]**: **This field is deprecated**. This will populate the `eventMergeId` XDM field.

### Personalization {#personalization}

![Experience Platform Tags UI image showing the Personalization settings for the Send Event action type.](assets/personalization-settings.png)

* **[!UICONTROL Scopes]**: Select the scopes (Adobe Target [!DNL mboxes]) you would like to explicitly request from personalization. You can enter the scopes manually, or by providing a data element.
* **[!UICONTROL Surfaces]**: Set the web surfaces that are available on the page for personalization. See the [Adobe Journey Optimizer documentation](https://experienceleague.adobe.com/docs/journey-optimizer/using/web/create-web.html) for more details.
* **Render visual personalization decisions:** If you want to render personalized content on your page, check the **[!UICONTROL Render visual personalization decisions]** checkbox. You can also specify decision scopes and/or surfaces if necessary. See the [personalization documentation](/help/web-sdk/personalization/rendering-personalization-content.md#automatically-rendering-content) for more information on rendering personalized content.
* **[!UICONTROL Request default personalization]**: Use this section to control whether the page-wide scope (global mbox) and default surface (web surface based on current URL) is requested. By default, this is requested automatically during the first `sendEvent` call of the page load. You can choose from the following options:
    * **[!UICONTROL Automatic]**: This is the default behavior. Only request default personalization when it has not yet been requested. This corresponds to `requestDefaultPersonalization` not set in the Web SDK command.
    * **[!UICONTROL Enabled]**: Explicitly request the page scope and default surface. This updates the SPA view cache. This corresponds to `requestDefaultPersonalization` set to `true`.
    * **[!UICONTROL Disabled]**: Explicitly suppress the request for the page scope and default surface. This corresponds to `requestDefaultPersonalization` set to `false`.
* **[!UICONTROL Decision context]**: This is a key-value map that is used when evaluating Adobe Journey Optimizer rulesets for on-device decisioning. You can provide the decision context manually or through a data element.

### Datastream configuration overrides {#datastream-overrides}

Datastream overrides allow you to define additional configurations for your datastreams, which get passed to the Edge Network via the Web SDK.

This helps you trigger different datastream behaviors than the default ones, without creating a new datastream or modifying your existing settings. See the documentation on [configuring datastream overrides](web-sdk-extension-configuration.md#datastream-overrides) for more details.
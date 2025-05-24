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
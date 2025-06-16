## Apply response {#apply-response}

Use the **[!UICONTROL Apply response]** action type when you want to perform various actions based on a response from the Edge Network. This action type is typically used in hybrid deployments where the server makes an initial call to the Edge Network, then this action type takes the response from that call and initializes the Web SDK in the browser.

Using this action type may reduce client load times for hybrid personalization use cases.

![Image of the Experience Platform user interface showing the Apply response action type.](assets/apply-response.png)

This action type supports the following configuration options:

* **[!UICONTROL Instance]**: Select the Web SDK instance that you are using.
* **[!UICONTROL Response headers]**: Select the data element which returns an object containing the header keys and values returned from the Edge Network server call.
* **[!UICONTROL Response body]**: Select the data element which returns the object containing the JSON payload provided by the Edge Network response.
* **[!UICONTROL Render visual personalization decisions]**: Enable this option to automatically render the personalization content provided by the Edge Network and pre-hide the content to prevent flicker.
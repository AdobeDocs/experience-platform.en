## Configure instance settings {#general}

The configuration options at the top of the page tell Adobe Experience Platform where to route the data and what configurations to use on the server.

![Image showing the general settings of the Web SDK tag extension in the Tags UI](assets/web-sdk-ext-general.png)

* **[!UICONTROL Name]**: The Adobe Experience Platform Web SDK extension supports multiple instances on the page. The name is used to send data to multiple organizations with a tag configuration. The instance name defaults to `alloy`. However, you can change the instance name to any valid JavaScript object name.
* **[!UICONTROL IMS organization ID]**: The ID of the organization that you would like the data sent to at Adobe. Most of the time, use the default value that is autopopulated. When you have multiple instances on the page, populate this field with the value of the second organization you want to send data to.
* **[!UICONTROL Edge domain]**: The domain that the extension sends and receives data from. Adobe recommends using a 1st-party domain (CNAME) for this extension. The default 3rd-party domain works for development environments but is not suitable for production environments. Instructions on how to set up a first-party CNAME are listed [here](https://experienceleague.adobe.com/docs/core-services/interface/ec-cookies/cookies-first-party.html).
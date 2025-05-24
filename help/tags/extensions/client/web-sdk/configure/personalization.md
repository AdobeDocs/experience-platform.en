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
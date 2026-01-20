---
title: Views in Web Extensions
description: Learn how to define views for library modules in your Adobe Experience Platform web extensions.
exl-id: 4471df3e-75e2-4257-84c0-dd7b708be417
---
# Views in web extensions

Each event, condition, action, or data element type may provide a view allowing a user to supply settings. The extension may also have a top-level [extension configuration view](../configuration.md) which allows users to supply global settings for the entire extension. The process of building a view is identical across all types of views.

## Including a document type

Be sure to include a `doctype` tag in your HTML file. Typically this means beginning your HTML file with the following:

```xml
<!DOCTYPE html>
```

## Including the tags iframe script

Include the tags iframe script within your view's HTML:

```html
<script src="https://assets.adobedtm.com/activation/reactor/extensionbridge/extensionbridge.min.js"></script>
```

This script provides a communication API to allow your view to communicate with the tags application.

## Registering with the extension bridge communication API

After the iframe script is loaded, you will need to provide some methods to tags which it will use for communication. Call `window.extensionBridge.register` and pass it an object as follows:

```js
window.extensionBridge.register({
  init: function(info) {
    // Populate view with info.settings which will exist if the user is editing something
    // that was previously saved.
    if (info.settings) {
      document.getElementById('name').value = info.settings.name;
    }
  },
  validate: function() {
    // Return whether the view is valid.
    return document.getElementById('name').value.length > 0;
  },
  getSettings: function() {
    // Return user-provided settings.
    return {
      name: document.getElementById('name').value
    };
  }
});
```

The content of each of the methods will need to be modified to accommodate your particular view requirements.

### [!DNL init]

The `init` method will be called by tags as soon as the view has been loaded into the iframe. It will be passed a single argument (`info`) which must be an object containing the following properties:

| Property            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `settings`          | An object containing settings that were previously saved from this view. If `settings` is `null`, it indicates that the user is creating the initial settings rather than loading a saved version. If `settings` is an object, you should use it to populate your view since the user is choosing to edit the previously persisted settings.                                                                                                                     |
| `extensionSettings` | Settings saved from the extension configuration view. This can be useful to access extension settings in views that are not the extension configuration view. If the current view is the extension configuration view, use `settings`.                                                                                                                                                                                                                           |
| `propertySettings`  | An object containing settings for the property. See the [turbine object guide](../turbine.md#property-settings) for details on what is contained in this object.                                                                                                                                                                                                                                                                                                 |
| `tokens`            | An object containing API tokens. For accessing Adobe APIs from inside the view you will need to usually use an IMS token under `tokens.imsAccess`. This token will be made available only for extensions developed by Adobe. If you are an Adobe employee representing an extension authored by Adobe, please [email the data collection engineering team](mailto:reactor@adobe.com) and provide the name of the extension so we can add it to the allowed list. |
| `company`           | An object containing the `orgId` (your 24-character Adobe Experience Cloud ID), `id` (Your company's unique identifier within the Reactor API), and `tenantId` (the unique identifier for an organization within Adobe's Identity Management System).                                                                                                                                                                                                            |
| `schema`            | An object in [JSON Schema](https://json-schema.org/) format. This object will come from the [extension manifest](../manifest.md) and may be helpful in validating your form.                                                                                                                                                                                                                                                                                     |
| `apiEndpoints`      | An object containing `reactor` which contains a reference to the web address of the Reactor API.                                                                                                                                                                                                                                                                                                                                                                 |
| `userConsentPermissions`      | An Object containing consent flags from Adobe's [Product Usage Data](https://experienceleague.adobe.com/en/docs/core-services/interface/features/account-preferences#product-usage-data). Use the stored in `globalDataCollectionAndUsage` flag to understand if your extension is allowed to collect *any* customer data.                                                                                                                                       |
| `preferredLanguages`      | An array of language strings.                                                                                                                                                                                                                                                                                                                                                                                                                                    |

Your view should use this information to render and manage its form. It is likely you will only need to deal with `info.settings`, but the other information is provided in case it is necessary.

>[!IMPORTANT]
>
>To keep your extension GDPR compliant, ensure that you use the `userConsentPermissions.globalDataCollectionAndUsage` flag to determine if your extension is allowed to collect data about the user.

### [!DNL validate]

The `validate` method will be called after the user hits the "Save" button. It should return one of the following:

* A boolean indicating whether the user's input is valid.
* A promise to later be resolved with a boolean indicating whether the user's input is valid.

It's up to you as the extension developer to determine what constitutes valid input since your library module will be acting upon that input.

If the user's input is invalid, please show some indication of this within your view so users will know what needs to be corrected.

### [!DNL getSettings]

The `getSettings` method will be called after the user hits the "Save" button and the view has been validated. The function should return one of the following:

* An object containing settings based on user input.
* A promise to later be resolved with an object containing settings based on user input.

This settings object will later be emitted in the tag runtime library. The content of this object is under your discretion. The object must be serializable and deserializable to and from JSON. Values such as functions or [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) instances don't meet these criteria and are therefore not allowed.

## Leveraging shared views

The `window.extensionBridge` object has several methods that allow you to take advantage of existing views available through tags so you don't have to reproduce them within your view. The available methods are as follows:

### [!DNL openCodeEditor]

```js
window.extensionBridge.openCodeEditor().then(function(code) { 
  console.log(code);
});
```

Calling this method will show a modal allowing a user to edit a snippet of code. When the user has finished editing the code, the promise will be resolved with the updated code. If the user closes the code editor without electing to save changes, the promise will never be resolved. The `options` object should be structured as follows:

| Property | Description |
| --- | --- |
| `code` | Code that should be shown in the editor. This is typically provided when the user is editing existing code. If this is not provided, the code editor will be empty when opened. |
| `language` | The language of the code that will be edited. Valid options are `javascript`, `html`, `css`, `json`, and `plaintext`. If this is not provided, `javascript` will be assumed. |

### [!DNL openRegexTester]

```js
window.extensionBridge.openRegexTester().then(function(pattern) { 
  console.log(pattern);
});
```

Calling this method will show a modal allowing a user to test and modify a regular expression pattern. When the user has finished editing the regular expression, the promise will be resolved with the updated regular expression pattern. If the user closes the regex tester without electing to save changes, the promise will never be resolved. The `options` object should contain the following properties:

| Property | Description |
| --- | --- |
| `pattern` | The regular expression pattern that should be used as the initial value of the pattern field inside the tester. This is typically provided when the user is editing an existing regular expression. If this is not provided, the pattern field will initially be empty. |
| `flags` | The regular expression flags that should be used by the tester. As an example, `gi` would indicate the global match flag and the ignore case flag. These flags are not modifiable by the user within the tester, but are used to demonstrate the specific flags the extension will use when executing the regular expression. If this is not provided, no flags will be used within the tester. See [MDN's RegExp documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) for more information about regular expression flags.<br><br>A common scenario is an extension that allows users to toggle case sensitivity for a regular expression. In order to support this, the extension would typically provide a checkbox within its extension view that, when checked, enables case-insensitivity (represented by the `i` flag). The settings object saved by the view would need to represent whether the checkbox was checked so that the library module executing the regular expression can know whether to use the `i` flag. Also, when the extension view wishes to open the regular expression tester, it would need to pass the `i` flag if the case-insensitivity checkbox is checked. This allows the user to properly test the regular expression with case-insensitivity enabled. |

### [!DNL openDataElementSelector] {#open-data-element}

```js
window.extensionBridge.openDataElementSelector().then(function(dataElement) { 
  console.log(dataElement);
});
```

Calling this method will show a modal allowing a user to select a data element. When the user has finished selecting a data element, the promise will be resolved with the name of the selected data element (by default the name will be wrapped in percent signs). If the user closes the element selector without electing to save changes, the promise will never be resolved. 

The `options` object should contain a single boolean property, `tokenize`. This property indicates whether the name of the selected data element should be wrapped in percent signs before resolving the promise. See the section on [supporting data elements](#supporting-data-elements) for why this is useful. This option defaults to `true`.

## Supporting data elements {#supporting-data-elements}

Your views probably have form fields where users would like to leverage data elements. For example, if your view has a text field where the user should enter a product name, it may not make sense for the user to type a hard-coded value into the field. Instead, they may want the value of the field to be dynamic (determined at runtime) and can accomplish this by using a data element.

As an example, assume we are building an extension that sends a beacon to track a conversion. Let's also assume that one of the pieces of data our beacon sends is a product name. Our extension view that allows the user to configure the beacon would likely have a text field for the product name. It typically wouldn't make much sense for the Experience Platform user to type in a static product name like "Calzone Oven XL" because the product name is likely dependent upon the page from which the beacon will be sent. This is a great case for a data element.

If a user wanted to use the data element named `productname` for the product name value, they may type the name of the data element with percent signs on both sides (`%productname%`). We refer to the percentage-sign-wrapped data element name as a "data element token". Experience Platform users are often familiar with this construct. Your extension, in turn, would save the data element token inside the `settings` object it exports. Your settings object may then look like this:

```js
{
  productName: '%productname%'
}
```

At runtime, before passing the settings object to your library module, the settings object is scanned and any data element tokens replaced with with their respective values. If at runtime, the value of the `productname` data element was `Ceiling Medallion Pro 2000`, the settings object that would be passed into your library module would be as follows:

```js
{
  productName: 'Ceiling Medallion Pro 2000'
}
```

To indicate where it may be helpful for users to use data elements and to make it easy for users to enter a data element, we highly recommend adding an icon button next to such fields as shown here:

![data element field](../images/data-element-field.png)

>[!NOTE]
>
>To download the appropriate icon, navigate to the [icons page on Adobe Spectrum](https://spectrum.adobe.com/page/icons/) and search for "[!DNL Data]".

When the button next to the text field is selected by a user, call `window.extensionBridge.openDataElementSelector` as [outlined above](#open-data-element). This will display a list of the user's data elements that the user can choose from rather than forcing them to remember the name and type percent signs. Once the user has selected a data element, you will receive the name of the selected data element wrapped in percent signs (unless you've set the `tokenize` option to `false`). We encourage you to then populate the text field with the result.

### Replacing data element tokens

As described previously, if a persisted settings object consisted of the following:

```js
{
  productName: '%productname%'
}
```

And, at runtime, the value of the `productname` data element were `Ceiling Medallion Pro 2000`, then the settings object that is passed into your library module would be as follows:

```js
{
  productName: 'Ceiling Medallion Pro 2000'
}
```

Whenever a value inside a settings object is encountered that consists of a percent sign, then a string, then a percent sign, _and nothing more_, it is replaced by the data element value _without changing the data element value's type_.

For example, if the value of `productname` at runtime were instead the number `538` (not a string), the settings object passed to your library module would be as follows:

```js
{
  productName: 538
}
```

Notice that the resulting `538` is a number here and not a string. Similarly, if the data element value at runtime were a function (a rare but possible use case), the resulting settings object would be as follows:

```js
{
  productName: function() { … }
}
```

On the other hand, let's assume the persisted settings object were as follows:

```js
{
  productName: '%productname% - %modelnumber%'
}
```

In this case, because the value of `productName` is more than a single data element token, the result will always be a string. Each data element token will be replaced by its respective value after being cast to a string. If at runtime, the value of `productname` were `Ceiling Medallion Pro` (a string) and `modelnumber` were `2000` (a number), the resulting settings object passed into your library module would be:

```js
{
  productName: 'Ceiling Medallion Pro - 2000'
}
```

## Avoid navigation

Communication between the extension view and the containing Data Collection user interface is contingent upon no navigation occurring within the extension view. As such, please avoid adding anything to your extension view that would allow the user to navigate away from the extension view's HTML page. For example, if you provide a link within your extension view, ensure it opens a new browser window (typically by adding `target="_blank"` to the anchor tag). If you choose to use a `form` element inside your extension view, ensure that the form is never submitted. Submitting the form can accidentally occur if you have a `button` element within the form and fail to add `type="button"` to it. Submitting a form within your extension view would cause the HTML document to refresh, resulting in a broken user experience.

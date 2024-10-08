---
title: Data Elements
description: Data elements are the building blocks for your data dictionary (or data map). Use data elements to collect, organize, and deliver data across marketing and ad technology.
exl-id: 1e7b03cc-5a54-403d-bf8d-dbc206cfeb2d
---
# Data elements

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

Data elements are the building blocks for your data dictionary (or data map). Use data elements to collect, organize, and deliver data across marketing and ad technology.

A single data element is a variable whose value can be mapped to query strings, URLs, cookie values, JavaScript variables, and so on. You can reference this value by its variable name throughout Adobe Experience Platform. This collection of data elements becomes the dictionary of defined data that you can use to build your rules (events, conditions, and actions). This data dictionary is shared across tags for use with any extension you've added to your property.

>[!IMPORTANT]
>
>Changes do not take effect until they are [published](../publishing/overview.md).

Use data elements as widely as possible throughout rule creation to consolidate the definition of dynamic data and to improve the efficiency of your tagging process. You define data rules once and then use them in multiple places.

The concept of reusable data elements is very powerful and you should use them as best practice.

For example, if there is a particular way that you reference page names or product IDs or grab information from query string parameters from an affiliate marketing link or from [!DNL AdWords], and so forth, you can create a data dictionary (data elements) by getting information from its source and then using this data in various tag rules.

Using page name as an example, suppose you use a particular page-name schema by referencing a data layer, `document.title` element, or a title tag within the website. Tags in Adobe Experience Platform allow you to create a data element as a single point of reference for that particular point of data. You can then use this data element in any rule that needs to reference the page name. If for some reason in the future you decide to change the way you reference page name (for example, you have been referencing `document.title` but you now want to reference a particular data layer), you don't need to edit many different rules to change that reference. You simply change the reference once in the data element and all rules that reference that data element automatically update.

>[!NOTE]
>
>If a data element is not referenced in a rule, it is not loaded on any page unless specifically called in custom script

Data elements are populated with data when they are used in rules or when manually called in a script. At a high level, you:

1. [Create a data element](#create-a-data-element), if you haven't done so already.
1. Use the data element in a [rule](./rules.md) or a custom script.

## Data element usage

### In rules

You can use data elements in the rule editing interface by using the search box to find the name of your data element.

### In custom script

You can use data elements in custom scripts by using the `_satellite` object syntax:

`_satellite.getVar('data element name');`

## Create a data element {#create-a-data-element}

Data elements are the building blocks for rules. Data elements let you create a data dictionary (or data map) of commonly used items on a page, regardless of where they originate (query strings, URLs, or cookie values) for any object that is contained on your site.

1. From a Property page, open the [!UICONTROL Data Elements] tab, then select **[!UICONTROL Create New Data Element]**.
1. Name the data element.
1. Select an extension and type.

   The available data element types are determined by the extension. For information about the types available with the Core tag extension, refer to [Types of data elements](data-elements.md#types-of-data-elements).

1. Provide any requested information about the chosen type in the fields provided.
1. (Optional) Enter a default value.

   If you do not select this option, there is no default value.  Most users leave this in its default state.  Different systems deal with an empty variable differently.  Some people choose to enter something like "none" or "n/a" so they can create consistency in reporting when the data element does not return a value.

1. Select whether to force a lowercase value and whether to remove line breaks and spaces.
1. Select a duration.

   The available choices are:

   * None
     * The value is not stored.
   * Page view
     * The value is held in a JavaScript variable until the page is refreshed or a new page is loaded.
     * Can be created and set in scripts using `_satellite` object syntax:

       `_satellite.setVar('data_element_name')`
   * Session
     * Values persist in the browser's session storage until the browser tab is closed.
     * Available throughout the site visit.
   * Visitor
     * The value is stored indefinitely in the browser's local storage.

1. Select **[!UICONTROL Save]**.

When creating or editing elements, you can save and build to your [active library](../publishing/libraries.md#active-library). This immediately saves your change to your library and executes a build. The status of the build is displayed. You can also create a new library from the [!UICONTROL Active Library] dropdown.

## Types of data elements {#types-of-data-elements}

>[!NOTE]
>
>Data element types are determined by the extension. There is no limit to the types that can be created.

The following sections describe the types of data elements available in the **Core extension**. Other extensions use other types of data elements.

### Cookie

Any available domain cookie can be referenced in the cookie name field.

#### Example:

`cookieName`

### Custom code

Custom JavaScript can be entered into the UI by selecting  [!UICONTROL Open Editor] and inserting code into the editor window.

A return statement is necessary in the editor window in order to indicate what value should be set as the data element value. If a return statement is not included, the data element resolves to `undefined`.  This triggers the fallback to look for a stored value, and then a default value if no stored value is present.

**Example:**

```text
var pageType = $('div.page-wrapper').attr('class').split('')[1];
if (window.location.pathname == '/') {
  return 'homepage';
} else {
  return pageType;
}
```

Custom code can accept the `event` object from the calling rule as an argument. This allows the code to read value there.

**Example:**

```text
// `event` is the default object provided by the rule
var eventType = event.$type;
return eventType; // if this data element is called from a "DOM Ready" event, then `core.dom-ready` is returned
```

You can then use this in custom scripts by using the `_satellite` object syntax:

```javascript
// event refers to the calling rule's event
var rule = _satellite.getVar('return event rule', event);
```

When using percent (`%`) syntax, you only need to specify the data element name. You don't need to specify `event`.

```text
%data element name%
```

### DOM attribute

Any element value can be retrieved, such as a div or H1 tag.

#### Example:

CSS Selector Chain:

`id#dc logo img`

Get the value of:

`src`

### JavaScript variable

Any available JavaScript object or variable can be referenced using the path field.

If you want to collect JavaScript variables or object properties in your markup and use them with any of your extensions or rules, data elements can be used to capture these values. This way, you can refer to the data element throughout your rules, and if the source of the data ever changes, you only need to change your reference to the source (the data element) in one place.

For example, let's say your markup contains a JavaScript variable called `Page_Name`, like this:

```markup
<script>
  //data layer
  var Page_Name = "Homepage"
</script>
```

You must provide the path to that variable when you create the data element.

If you use a data collector object as part of your data layer, simply use dot notation in the path to reference the object and property you want to capture into the data element, like `_myData.pageName`, or `digitalData.pageName`, etc.

#### Example:

`window.document.title`

### Local storage

Provide the name of your local storage item in the [!UICONTROL Local Storage Item Name] field.

Local storage gives browsers a way to store information from page to page ([https://www.w3schools.com/html/html5\_webstorage.asp](https://www.w3schools.com/html/html5_webstorage.asp)). Local storage works a lot like cookies but is much larger and more flexible.

Use the provided field to specify the value you created for a local storage item, such as `lastProductViewed.`

### Page info

Use these data points to capture page info for use in your rule logic or to send information to [!DNL Analytics] or external tracking systems.

You can select one of the following page attributes to use in your data element:

* URL
* Hostname
* Pathname
* Protocol
* Referrer
* Title

### Query string parameter

Specify a single URL parameter in the [!UICONTROL URL Parameter] field.

Only the name section is necessary and any special designators like "?" or "=" should be omitted

#### Example:

`contentType`

### Random number

Use this data element to generate a random number. It's often used for sampling data or creating IDs, such as a Hit ID. The random number can also be used to obfuscate or salt sensitive data. Some examples might include:

* Generate a Hit ID
* Concatenate the number to a user token or timestamp to ensure uniqueness
* Perform a one-way hash on PII data
* Randomly decide when to show a survey request on the site

Specify the minimum and maximum values for your random number.

**Defaults:**

Minimum: 0

Maximum: 1000000000

### Session storage

Provide the name of your session storage item in the [!UICONTROL Session Storage Item Name] field.

Session storage is similar to local storage, except the data is discarded after the session ends, whereas local storage or a cookie might retain the data.

### Visitor behavior

Similar to Page Info, this data element uses common behavior types to enrich logic within rules or other Platform solutions.

Select one of the following visitor behavior attributes:

* Landing page
* Traffic source
* Minutes on site
* Session count
* Session page view count
* Lifetime page view count
* Is new visitor

Some common use cases include:

* Show a survey after a visitor has been on the site for five minutes
* If this is the landing page for the visit, populate an [!DNL Analytics] metric
* Show a new offer to the visitor after X number of Session Counts
* Display a newsletter sign up if this is a first-time visitor

## Built-in data elements

You must create additional custom data elements if you previously used any of the following data elements:

* URI
* Protocol
* Hostname

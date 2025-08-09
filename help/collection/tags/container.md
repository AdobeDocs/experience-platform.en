---
title: _container
description: See the entire tag container in a single object.
---
# `_container`

The `_satellite._container` object contains the full configuration and runtime context of the tag property loaded on the page. All information, such as rules, data elements, extensions, and environments are available within this object. Its primary use is to assist with debugging your implementation so that you can see exactly what logic is exposed or published.

>[!IMPORTANT]
>
>This object is for debugging purposes only. Do not tie production logic to this object, reference this object in your implementation, or edit values within this object. The availability of properties or names within this object can be changed by Adobe at any time.

```js
_satellite._container
```

The following objects are available for reference:

```json
{
  "buildInfo": {
    "minified": true,
    "buildDate": "YYYY-06-13T01:22:12Z"
  },
  "company": {
    "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
    "dynamicCdnEnabled": true,
    "cdnAllowList": [ "assets.adobedtm.com" ]
  },
  "dataElements": { ... },
  "environment": {
    "id": "EN6b2...d6ff2",
    "stage": "production"
  },
  "extensions": {
    "adobe-alloy": { ... },
    "core": { ... },
    "common-web-sdk-plugins": { ... }
  },
  "property": {
    "name": "Example tag property",
    "settings": {
      "domains": [ "example.com" ],
      "undefinedVarsReturnEmpty": false,
      "ruleComponentSequencingEnabled": true
    },
    "id": "PR845...6cf92"
  },
  "rules": [ { ... } ]
}
```

## `_container.buildInfo`

The `buildInfo` object contains a copy of [`_satellite.buildInfo`](buildinfo.md).

## `_container.company`

The `company` object contains a copy of [`_satellite.company`](company.md).

## `_container.dataElements`

The `dataElements` object provides a reference of all data elements within your tag property. Each data element contains the following:

* **`dataElements.modulePath`**: The path of the JavaScript file that determines the logic of that data element type.
* **`dataElements.settings`**: The settings of the data element. Properties within this object depend on the data element type.

## `_container.environment`

The `environment` object contains a copy of [`_satellite.environment`](environment.md).

## `_container.extensions`

The `extensions` object lists all extensions published to the tag property. Each extension includes the following properties:

* **`extensions.displayName`**: The friendly name of the extension.
* **`extensions.hostedLibFilesUrl`**: The location on the CDN where the extension resides.
* **`extensions.modules`**: The JavaScript logic for all events, actions, conditions, and data elements that the extension uses.

## `_container.property`

The `property` object provides information around the tag property itself.

* **`property.id`**: The unique identifier for the tag property.
* **`property.name`**: The friendly name for the tag property.
* **`property.settings.domains[]`**: An array of strings that represent the configured domains for the property, as set when [configuring a tag property](/help/tags/ui/administration/companies-and-properties.md).
* **`property.settings.ruleComponentSequencingEnabled`**: A boolean that determines if the checkbox **[!UICONTROL Run rule components in sequence]** is enabled when configuring the tag property.
* **`property.settings.undefinedVarsReturnEmpty`**: A boolean that determines if the checkbox **[!UICONTROL Return an empty string for undefined data elements]** is enabled when configuring the tag property.

## `_container.rules[]`

The `rules[]` object array provides a reference of all rules within your tag property. Each rule contains the following:

* **`rules[].id`**: The unique identifier for the rule.
* **`rules[].name`**: The friendly name of the rule.
* **`rules[].events[]`**: An array of events that you have configured to trigger the rule.
* **`rules[].conditions[]`**: An array of conditions that you have configured to trigger the rule.
* **`rules[].actions[]`**: An array of actions that you have configured to execute when the rule is triggered.

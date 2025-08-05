---
title: _container
description: See the entire tag container in a single object.
---
# `_container`

The `_container` object contains the full configuration and runtime context of the tag property loaded on the page. All information, such as rules, data elements, extensions, and environments are available within this object. Its primary use is to assist with debugging your implementation so that you can see exactly what logic is exposed or published.

>[!IMPORTANT]
>
>This object is for debugging purposes only. Do not tie production logic to this object, reference this object in your implementation, or edit values within this object. The availability of properties or names within this object can be changed by Adobe at any time.

```js
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

The following objects are available for reference:

## `_container.buildInfo`

The `buildInfo` object contains information around the build itself. This object is most useful when debugging frequent builds to ensure that you're using the latest version.

* **`buildInfo.minified`**: A boolean that indicates if the library is minified. Production builds are typically minified (`true`), while development and staging builds are typically not (`false`).
* **`buildInfo.buildDate`**: The date and time that your JavaScript file was built and published.
* **`buildInfo.turbineBuildDate`**: The date and time of the build used to publish your JavaScript file.
* **`buildInfo.turbineVersion`**: The version of the tool used to build and publish your JavaScript file.

## `_container.company`

The `company` object displays information around the IMS organization that owns the tag property.

* **`company.orgId`**: A string that represents the IMS org ID of the tag property.
* **`company.dynamicCdnEnabled`**: A boolean that determines if your tag property uses Adobe's dynamic CDN switching feature. If set to `true`, it auto-switches the CDN that a visitor requests your tag from based on their location.
* **`company.cdnAllowList`**: An array of strings that represent permitted CDN's to load your tag property from.

## `_container.dataElements`

The `dataElements` object provides a reference of all data elements within your tag property. Each data element contains the following:

* **`dataElements.modulePath`**: The JavaScript file that determines the logic of the data element type.
* **`dataElements.settings`**: The settings of the data element. Properties within this object depend on the data element type.

## `_container.environment`

The `environment` object states which build environment that the tag property currently is using.

* **`environment.id`**: The unique identifier for the environment. You can use this ID when making API calls against this tag property. You can also locate the environment ID by selecting the **[!UICONTROL Install]** icon under [[!UICONTROL Environments]](/help/tags/ui/publishing/environments.md) in the tags UI.
* **`environment.stage`**: The environment type. Valid values include `development`, `staging`, and `production`.

## `_container.extensions`

The `extensions` object lists all extensions published to the tag property. Each extension includes the following properties:

* **`extensions.displayName`**: The friendly name of the extension.
* **`extensions.hostedLibFilesUrl`**: The location on the CDN where the extension resides.
* **`extensions.modules`**: The JavaScript logic for all events, actions, conditions, and data elements that the extension uses.

## `_container.property`

The `property` object provides information around the tag property itself.

* **`property.id`**: The unique identifier for the tag property.
* **`property.name`**: The friendly name for the tag property.
* **`property.settings.domains`**: An array of strings that represent the configured domains for the property, as set when [configuring a tag property](/help/tags/ui/administration/companies-and-properties.md).
* **`property.settings.ruleComponentSequencingEnabled`**: A boolean that determines if the checkbox **[!UICONTROL Run rule components in sequence]** is enabled when configuring the tag property.
* **`property.settings.undefinedVarsReturnEmpty`**: A boolean that determines if the checkbox **[!UICONTROL Return an empty string for undefined data elements]** is enabled when configuring the tag property.

## `_container.rules`

The `rules` object array provides a reference of all rules within your tag property. Each rule contains the following:

* **`id`**: The unique identifier for the rule.
* **`name`**: The friendly name of the rule.
* **`events`**: An array of events that you have configured to trigger the rule.
* **`conditions`**: An array of conditions that you have configured to trigger the rule.
* **`actions`**: An array of actions that you have configured to execute when the rule is triggered.

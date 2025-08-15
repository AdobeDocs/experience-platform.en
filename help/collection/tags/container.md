---
title: _container
description: See the entire tag container in a single object.
---
# `_container`

The `_satellite._container` object contains the full configuration and runtime context of the tag property loaded on the page. All information, such as rules, data elements, extensions, and environments are available within this object. Its primary use is to assist with debugging your implementation so that you can see exactly what logic is exposed or published.

```ts
readonly _satellite._container: {
  buildInfo: BuildInfo;
  company: Company;
  dataElements: { [name: string]: DataElement };
  environment: Environment;
  extensions: { [name: string]: Extension };
  property: Property;
  rules: Rule[];
}
```

>[!IMPORTANT]
>
>This object is for debugging purposes only. Do not tie production logic to this object, reference this object in your implementation, or edit values within this object. The availability of properties or names within this object can be changed by Adobe at any time.

## Available fields

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

## `buildInfo`

The `_satellite._container.buildInfo` object contains a copy of [`_satellite.buildInfo`](buildinfo.md).

```ts
readonly _satellite._container.buildInfo: {
  minified: boolean;
  buildDate: string;
  turbineBuildDate: string;
  turbineVersion: string;
}
```

## `company`

The `_satellite._container.company` object contains a copy of [`_satellite.company`](company.md).

```ts
readonly _satellite._container.company: {
  orgId: string;
  dynamicCdnEnabled: boolean;
  cdnAllowList: string[];
}
```

## `dataElements`

The `_satellite._container.dataElements` object provides a reference of all data elements within your tag property.

```ts
readonly _satellite._container.dataElements: {
  [name: string]: {
    modulePath: string;
    settings: Settings; // Varies by data element type
  }
}
```

Each data element includes the following properties:

| Name | Type | Description |
|---|---|---|
| **`modulePath`** | `string` | The path of the JavaScript file that determines the logic of that data element type. |
| **`settings`** | `Settings` | The settings of the data element. Properties within this object depend on the data element type. |

## `environment`

The `_satellite._container.environment` object contains a copy of [`_satellite.environment`](environment.md).

```ts
readonly _satellite._container.environment: {
  id: string;
  stage: string;
}
```

## `extensions`

The `_satellite._container.extensions` object lists all extensions published to the tag property.

```ts
readonly _satellite._container.extensions: {
  [name: string]: {
    displayName: string;
    hostedLibFilesUrl: string;
    modules: Modules; // Extension-specific module definitions
  }
}
```

Each extension includes the following properties:

| Name | Type | Description |
|---|---|---|
| **`displayName`** | `string` | The friendly name of the extension. |
| **`hostedLibFilesUrl`** | `string` | The location on the CDN where the extension resides. |
| **`modules`** | `Modules` | The JavaScript logic for all events, actions, conditions, and data elements that the extension uses. The contents of this object is different for each extension. |

## `property`

The `_satellite._container.property` object provides information about the tag property itself.

```ts
readonly _satellite._container.property: {
  id: string;
  name: string;
  settings: {
    domains: string[];
    ruleComponentSequencingEnabled: boolean;
    undefinedVarsReturnEmpty: boolean;
  };
}
```

| Name | Type | Description |
|---|---|---|
| **`id`** | `string` | The unique identifier for the tag property. |
| **`name`** | `string` | The friendly name for the tag property. |
| **`settings`** | `PropertySettings` | Settings for this property. See the below table. |

| Setting name | Type | Description |
|---|---|---|
| **`domains`** | `string[]` | The configured domains for the property, as set when [configuring a tag property](/help/tags/ui/administration/companies-and-properties.md). |
| **`ruleComponentSequencingEnabled`** | `boolean` | Determines if the checkbox **[!UICONTROL Run rule components in sequence]** is enabled when configuring the tag property. |
| **`undefinedVarsReturnEmpty`** | `boolean` | Determines if the checkbox **[!UICONTROL Return an empty string for undefined data elements]** is enabled when configuring the tag property. |

## `_container.rules`

The `rules` object array provides a reference of all rules within your tag property.

```ts
readonly _satellite._container.rules: {
  id: string;
  name: string;
  events: Event[]; // Rule-specific events
  conditions: Condition[]; // Rule-specific conditions
  actions: Action[]; // Rule-specific actions
}[]
```

Each rule contains the following fields:

| Name | Type | Description |
|---|---|---|
| **`id`** | `string` | The unique identifier for the rule. |
| **`name`** | `string` | The friendly name of the rule. |
| **`events`** | `Event[]` | An array of events that you have configured to trigger the rule. |
| **`conditions`** | `Condition[]` | An array of conditions that you have configured to trigger the rule. |
| **`actions`** | `Action[]` | An array of actions that you have configured to execute when the rule is triggered. |

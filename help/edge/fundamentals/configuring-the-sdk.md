---
title: Configure the Adobe Experience Platform Web SDK
description: Learn how to configure the Adobe Experience Platform Web SDK.
seo-description: Learn how to configure the Experience Platform Web SDK
keywords: configure;configuration;SDK;edge;Web SDK;configure;edgeConfigId;context;web;device;environment;placeContext;debugEnabled;edgeDomain;orgId;clickCollectionEnabled;onBeforeEventSend;defaultConsent;web sdk settings;prehidingStyle;opacity;cookieDestinationsEnabled;urlDestinationsEnabled;idMigrationEnabled;thirdPartyCookiesEnabled;
exl-id: d1e95afc-0b8a-49c0-a20e-e2ab3d657e45
---
# Configure the Platform Web SDK

Configuration for the SDK is done with the `configure` command.

>[!IMPORTANT]
>
>`configure` is *always* the first command called.

```javascript
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId":"ADB3LETTERSANDNUMBERS@AdobeOrg"
});
```

There are many options that can be set during configuration. All options can be found below, grouped by category.

## General options

### `edgeConfigId`

>[!NOTE]
>
>**Edge Configurations have been rebranded to Datastreams. A datastream ID is the same as a configuration ID.** 

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| String   | Yes          | None              |

{style="table-layout:auto"}

Your assigned configuration ID, which links the SDK to the appropriate accounts and configuration. When configuring multiple instances within a single page, you must configure a different `edgeConfigId` for each instance.

### `context` {#context}

| **Type**         | **Required** | **Default Value**                                  |
| ---------------- | ------------ | -------------------------------------------------- |
| Array of Strings | No           | `["web", "device", "environment", "placeContext", "highEntropyUserAgentHints"]` |

{style="table-layout:auto"}

Indicates which context categories to collect automatically as described in [Automatic Information](../data-collection/automatic-information.md). If this configuration is not specified, all categories are used by default.

>[!IMPORTANT]
>
>All context properties, with the exception of `highEntropyUserAgentHints`, are enabled by default. If you specified context properties manually in your Web SDK configuration, you must enable all context properties to continue collecting the needed information.

To enable [high entropy client hints](user-agent-client-hints.md#enabling-high-entropy-client-hints) on your Web SDK deployment, you must include the additional `highEntropyUserAgentHints` context option, alongside your existing configuration.

For example, to retrieve high entropy client hints from web properties, your configuration would look like this:

`context: ["highEntropyUserAgentHints", "web"]`


### `debugEnabled`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Boolean  | No           | `false`           |

{style="table-layout:auto"}

Indicates whether debugging is enabled. Setting this config to `true` enables the following features:

| **Feature**            | **Function** |
| ---------------------- | ------------------ |
| Console logging        | Enables debugging messages to be displayed in the browser's JavaScript console  |

{style="table-layout:auto"}

### `edgeDomain` {#edge-domain}

Populate this field with your first-party domain. For more details, please see the [documentation](https://experienceleague.adobe.com/docs/core-services/interface/ec-cookies/cookies-first-party.html).  

The domain is similar to `data.{customerdomain.com}` for a website at www.{customerdomain.com}.

### `edgeBasePath` {#edge-base-path}

Path after the edgeDomain used to communicate and interact with Adobe services.  Often this would only change when not using the default production environment.

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| String   | No           | ee                |

{style="table-layout:auto"}

### `orgId`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| String   | Yes          | None              |

{style="table-layout:auto"}

Your assigned [!DNL Experience Cloud] organization ID. When configuring multiple instances within a page, you must configure a different `orgId` for each instance.

## Data collection

### `clickCollectionEnabled` {#clickCollectionEnabled}

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Boolean  | No           | `true`            |

{style="table-layout:auto"}

Indicates whether data associated with link clicks are automatically collected. See [Automatic Link Tracking](../data-collection/track-links.md#automaticLinkTracking) for more information. Links are also labeled as download links if they include a download attribute or if the link ends with a file extension. Download link qualifiers can be configured with a regular expression. The default value is `"\\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$"`

### `onBeforeEventSend`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Function | No           | () => undefined   |

{style="table-layout:auto"}

Configure a callback that is called for every event just before it is sent. An object with the field `xdm` is sent in to the callback. To change what is sent, modify the `xdm` object. Inside the callback, the `xdm` object already has the data passed in the event command, and the automatically collected information. For more information on the timing of this callback and an example, see [Modifying Events Globally](tracking-events.md#modifying-events-globally).

### `onBeforeLinkClickSend`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Function | No           | () => undefined   |

{style="table-layout:auto"}

Configure a callback that is called for every link click tracking event just before it is sent. An object with the field `xdm`, `clickedElement` and `data` are sent in to the callback.
When filtering the link tracking by using the DOM elements structure `clickElement` can be used. `clickedElement` is the DOM element node that was clicked and has encapsulated the parents nodes tree.
To change what is sent, modify the `xdm` and/or `data` object. Inside the callback, the `xdm` object already has the data passed in the event command, and the automatically collected information.

* If the callback throws an exception, processing for the event discontinues and the event is not sent.

* If the callback returns the boolean value of `false`, event processing discontinues, without an error, and the event is not sent. This mechanism allows for certain events to be filtered out by examining the event data and returning `false` if the event should not be sent.

* Any return value other than the boolean `false` will allow the event to process and send after the callback.

## Privacy options

### `defaultConsent` {#default-consent}

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Object   | No           | `"in"`|

{style="table-layout:auto"}

Sets the user's default consent. Use this setting when there is no consent preference already saved for the user. The other valid values are `"pending"` and `"out"`. This default value is not persisted to the user's profile. The user's profile is updated only when `setConsent` is called.
* `"in"`: When this setting is set or no value is provided, work proceeds without user consent preferences.
* `"pending"`: When this setting is set, work is queued until the user provides consent preferences.
* `"out"`: When this setting is set, work is discarded until the user provides consent preferences.
After the user's preferences have been provided, work either proceeds or is aborted based on the user's preferences. See [Supporting Consent](../consent/supporting-consent.md) for more information.

## Personalization options {#personalization}

### `prehidingStyle` {#prehidingStyle}

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| String   | No           | None              |

{style="table-layout:auto"}

Used to create a CSS style definition that hides content areas of your web page while personalized content is loaded from the server. If this option is not provided, the SDK does not attempt to hide any content areas while personalized content is loaded, potentially resulting in "flicker".

For example, if an element on your web page has an ID of `container`, whose default content you want to hide while personalized content is loaded from the server, use the following prehiding style:

```javascript
  prehidingStyle: "#container { opacity: 0 !important }"
```

### `targetMigrationEnabled` {#targetMigrationEnabled}

This option should be used when migrating individual pages from [!DNL at.js] to Web SDK.

Use this option to enable the Web SDK to read and write the legacy `mbox` and `mboxEdgeCluster` cookies that are used by [!DNL at.js]. This helps you keep the visitor profile while moving from a page that uses the Web SDK to a page that uses the [!DNL at.js] library and vice versa.

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Boolean   | No           | `false`              |

## Audiences options

### `cookieDestinationsEnabled`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Boolean  | No           | `true`            |

{style="table-layout:auto"}

Enables [!DNL Audience Manager] cookie destinations, which allows the setting of cookies based on segment qualification.

### `urlDestinationsEnabled`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Boolean  | No           | `true`            |

{style="table-layout:auto"}

Enables [!DNL Audience Manager] URL destinations, which allows the firing of URLs based on segment qualification.

## Identity options

### `idMigrationEnabled` {#id-migration-enabled}

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Boolean  | No           | `true`              |

{style="table-layout:auto"}

If true, the SDK reads and sets old AMCV cookies. This option helps with transitioning to using Adobe Experience Platform Web SDK while some parts of the site might still use Visitor.js.

If Visitor API is defined on the page, the SDK queries Visitor API for the ECID. This option enables you to dual-tag pages with the Adobe Experience Platform Web SDK and still have the same ECID.

### `thirdPartyCookiesEnabled`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Boolean  | No           | `true`              |

{style="table-layout:auto"}

Enables the setting of Adobe third-party cookies. The SDK can persist the visitor ID in a third-party context to enable the same visitor ID to be used across sites. Use this option if you have multiple sites or you want to share data with partners; however, sometimes this option is not desired for privacy reasons.

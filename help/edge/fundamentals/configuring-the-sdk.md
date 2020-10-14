---
title: Configuring the SDK
seo-title: Configuring the Adobe Experience Platform Web SDK
description: Learn how to configure the Experience Platform Web SDK
seo-description: Learn how to configure the Experience Platform Web SDK
keywords: configuring;configuration;SDK;edge;Web SDK;configure;edgeConfigId;context;web;device;environment;placeContext;debugEnabled;edgeDomain;orgId;clickCollectionEnabled;onBeforeEventSend;defaultConsent;web sdk settings;prehidingStyle;opacity;cookieDestinationsEnabled;urlDestinationsEnabled;idMigrationEnabled;thirdPartyCookiesEnabled;

---

# Configuring the SDK

Configuration for the SDK is done with the `configure` command.

>[!IMPORTANT]
>
>`configure` should *always* be the first command called.

```javascript
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId":"ADB3LETTERSANDNUMBERS@AdobeOrg"
});
```

There are many options that can be set during configuration. All options can be found below, grouped by category.

## General options

### `edgeConfigId`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| String   | Yes          | none              |

Your assigned configuration ID, which links the SDK to the appropriate accounts and configuration.  When configuring multiple instances within a single page, you must configure a different `edgeConfigId` for each instance.

### `context`

| **Type**         | **Required** | **Default Value**                                  |
| ---------------- | ------------ | -------------------------------------------------- |
| Array of Strings | No           | `["web", "device", "environment", "placeContext"]` |

Indicates which context categories to collect automatically as described in [Automatic Information](../reference/automatic-information.md).  If this configuration is not specified, all of the categories are used by default.

### `debugEnabled`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Boolean  | No           | `false`           |

Indicates whether debugging should be enabled. Setting this config to `true` enables the following features:

| **Feature**            | **Function** |
| ---------------------- | ------------------ |
| Synchronous validation | Validates the data being collected against the schema and returns an error in the response under the following label: `collect:error OR success` |
| Console logging        | Enables debugging messages to be displayed in the browser's JavaScript console  |

### `edgeDomain`

| **Type** | **Required** | **Default Value**  |
| -------- | ------------ | ------------------ |
| String   | No           | `beta.adobedc.net` |

The domain used to interact with Adobe services. This is only used if you have a first party domain (CNAME) that proxies requests to the Adobe edge infrastructure.

### `orgId`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| String   | Yes          | none              |

Your assigned [!DNL Experience Cloud] organization ID.  When configuring multiple instances within a page, you must configure a different `orgId` for each instance.

## Data collection

### `clickCollectionEnabled` {#clickCollectionEnabled}

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Boolean  | No           | `true`            |

Indicates whether data associated with link clicks should be automatically collected. For clicks that qualify as link clicks, the following [Web Interaction](https://github.com/adobe/xdm/blob/master/docs/reference/context/webinteraction.schema.md) data is collected:

| **Property** |    **Description**                  |
| ------------ | ----------------------------------- |
| Link Name    | Name determined by the link context |
| Link URL     | Normalized URL                      |
| Link Type    | Set to download, exit, or other     |

### `onBeforeEventSend`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Function | No           | () => undefined   |

Set this to configure a callback that is called for every event just before it is sent.  An object with the field `xdm` is sent in to the callback.  Modify the `xdm` object to change what is sent.  Inside the callback, the `xdm` object will already have the data passed in the event command, and the automatically collected information.  For more information on the timing of this callback and an example, see [Modifying Events Globally](tracking-events.md#modifying-events-globally).

## Privacy options

### `defaultConsent` {#default-consent}

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Object   | No           | `"in"`|

Sets the user's default consent. This is used when there is no consent preference already saved for the user. The other valid value is `"pending"`. When this is set, work will be queued until the user provides consent preferences. After the user's preferences have been provided, work either proceeds or is aborted based on the user's preferences. See [Supporting Consent](supporting-consent.md) for more information.

## Personalization options

### `prehidingStyle`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| String   | No           | none              |

Used to create a CSS style definition that hides content areas of your web page while personalized content is loaded from the server. If this option is not provided, the SDK does not attempt to hide any content areas while personalized content is loaded, potentially resulting in "flicker".

For example, if you had an element on your web page with an ID of `container` whose default content you would like to hide while personalized content is being loaded from the server, an example of a prehiding style would be as follows:

```javascript
  prehidingStyle: "#container { opacity: 0 !important }"
```

## Audiences options

### `cookieDestinationsEnabled`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Boolean  | No           | `true`            |

Enables [!DNL Audience Manager] [!UICONTROL cookie destinations], which allows the setting of cookies based on segment qualification.

### `urlDestinationsEnabled`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Boolean  | No           | `true`            |

Enables [!DNL Audience Manager] [!UICONTROL URL destinations], which allows the firing of URLs based on segment qualification.

## Identity options

### `idMigrationEnabled`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Boolean  | No           | true              |

If true, the SDK will read and set old AMCV cookies. This helps with transitioning to using the AEP Web SDK while some parts of the site may still be using Visitor.js. Additionally, if Visitor API is defined on the page, the SDK will query Visitor API for the ECID. This enables you to dual tag pages with the AEP Web SDK and still have the same ECID.

### `thirdPartyCookiesEnabled`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Boolean  | No           | true              |

Enables the setting of Adobe third-party cookies. The SDK has the ability to persist the visitor ID in a third-party context to enable the same visitor ID to be used across sites. This is useful if you have multiple sites or you want to share data with partners; however, sometimes this is not desired for privacy reasons.

---
title: Retrieving Experience Cloud ID
seo-title: Adobe Experience Platform Web SDK Retrieving Experience Cloud ID
description: Learn how to get Adobe Experience Cloud Id.
seo-description: Learn how to get Adobe Experience Cloud Id.
keywords: Identity;First Party Identity;Identity Service;3rd Party Identity;ID Migration;Visitor ID;third party identity;thirdPartyCookiesEnabled;idMigrationEnabled;getIdentity;Syncing Identities;syncIdentity;sendEvent;identityMap;primary;ecid;Identity Namespace;namespace id;authenticationState;hashEnabled;
---

# Identity - Retrieving the Experience Cloud ID

The Adobe Experience Platform [!DNL Web SDK] leverages the [Adobe Identity Service](../../identity-service/ecid.md). This ensures that each device has a unique identifier that is persisted on the device so activity between pages can be tied together.

## First Party Identity

The [!DNL Identity Service] stores the identity in a cookie in a first party domain. The [!DNL Identity Service] attempts to set the cookie using an HTTP header on the domain. If that fails, the [!DNL Identity Service] will fall back to setting cookies via Javascript. Adobe recommends that you set up a CNAME to ensure that your cookies will not be capped by client side ITP restrictions.

## 3rd Party Identity

The [!DNL Identity Service] has the ability to sync an ID with a 3rd party domain (demdex.net) to enable tracking across sites. When this is enabled the first request for a visitor (e.g. someone without an ECID) will be made to demdex.net. This will only be done on browsers that allow it (e.g. Chrome) and is controlled by the `thirdPartyCookiesEnabled` parameter in the configuration. If you would like to disable this feature all together, set `thirdPartyCookiesEnabled` to false.

## ID Migration

When migrating from using Visitor API, you can also migrate existing AMCV cookies. To enable ECID migration, set the `idMigrationEnabled` parameter in the configuration. The id migration is setup to enable some use cases:

* When some pages of a domain are using Visitor API and other pages are using this SDK. To support this case, the SDK reads existing AMCV cookies and writes a new cookie with the existing ECID. Additionally, the SDK writes AMCV cookies so that if the ECID is obtained first on a page instrumented with the AEP Web SDK, subsequent pages that are instrumented with Visitor API have the same ECID.
* When the AEP Web SDK is set up on a page that also has Visitor API. To support this case, if the AMCV cookie is not set, the SDK looks for the Visitor API on the page and calls it to get the ECID.
* When the entire site is using the AEP Web SDK and does not have Visitor API, it is useful to migrate the ECIDs so that the return visitor information is retained. After the SDK is deployed with `idMigrationEnabled` for a period of time so that most of the visitor cookies are migrated, the setting can be turned off.

## Retrieving the Visitor ID

If you want to use this unique ID, use the `getIdentity` command. `getIdentity` returns the existing ECID for the current visitor. For first-time visitors who don't have an ECID yet, this command generates a new ECID.

>[!NOTE]
>
>This method is typically used with custom solutions that require reading the [!DNL Experience Cloud] ID. It is not used by a standard implementation.

```javascript
alloy("getIdentity")
  .then(function(result.identity.ECID) {
    // This function will get called with Adobe Experience Cloud Id when the command promise is resolved
  })
  .catch(function(error) {
    // The command failed.
    // "error" will be an error object with additional information
  })
```

## Syncing Identities

>[!NOTE]
>
>The `syncIdentity` method has been removed in version 2.1.0, in addition to the hashing feature. If you are using version 2.1.0+ and would like to sync identities, you can send them directly in the `xdm` option of the `sendEvent` command, under the `identityMap` field.

Additionally, the [!DNL Identity Service] allows you to sync your own identifiers with the ECID using the `syncIdentity` command.

>[!NOTE]
>
>It is highly recommended to pass all available identities on every `sendEvent` command. This unlocks a range of use cases, including personalization. Now that you can pass those identities in the `sendEvent` command, they can be placed directly in your DataLayer.

Syncing identities allows you to identify a device/user using multiple identities, set their authentication state and decide which identifier is considered the primary one. If no identifier has been set as `primary`, the primary defaults to be the `ECID`.

```javascript
alloy("sendEvent", {
  xdm: {
    "identityMap": {
      "ID_NAMESPACE": [ // Notice how each namespace can contain multiple identifiers.
        {
          "id": "1234",
          "authenticatedState": "ambiguous",
          "primary": true
        }
      ]
    }
  }
})
```


### Syncing Identities Options

#### Identity Namespace Symbol

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| String   | Yes          | none              |

The key for the object is the [Identity Namespace](../../identity-service/namespaces.md) Symbol. You can find this listed in the Adobe Experience Platform user interface under "[!UICONTROL Identities]".

#### `id`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| String   | Yes          | none              |

This is the ID that you want to sync for the given namespace.

#### `authenticationState`

| **Type** | **Required** | **Default Value** | **Possible Values** |
| -------- | ------------ | ----------------- | ------------------------------------ |
| String   | Yes          | ambiguous         | ambiguous, authenticated & loggedOut |

The authentication state of the ID.

#### `primary`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Boolean  | optional     | false             |

Determines whether this identity should be used as a primary fragment in the unified profile. By default, the ECID is set as the primary identifier for the user.

#### `hashEnabled`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Boolean  | optional     | false             |

If enabled, it will hash the identity using SHA256 hashing.

---
title: Retrieving Experience Cloud ID
seo-title: Adobe Experience Platform Web SDK Retrieving Experience Cloud ID
description: Learn how to get Adobe Experience Cloud Id.
seo-description: Learn how to get Adobe Experience Cloud Id.
---

# (Beta) Retrieving Experience Cloud ID

>[!IMPORTANT]
>
>Adobe Experience Platform Web SDK is currently in beta and is not available to all users. The documentation and the functionality are subject to change.

The Adobe Experience Platform Web SDK leverages the [Adobe Identity Service](../../identity-service/ecid.md). This ensures that each device has a unique identifier that is persisted on the device so activity between pages can be tied together.

## First Party Identity

The ID service stores the identity in a cookie in a first party domain. The ID services attempts to set the cookie using an HTTP header on the domain if that fails the ID service will fall back to setting cookies via Javascript. Adobe recommends that you setup a CNAME to ensure that your cookies will not be capped by client side ITP restrictions.

## 3rd Party Identity

The ID services has the ability to sync an ID with a 3rd party domain (demdex.net) to enable tracking across site. When this is enabled the first request for a visitor (e.g. someone without an ECID) will be made to demdex.net. This will only be done on browsers that allow it (e.g. Chrome) and is controlled by the `thirdPartyCookiesEnabled` parameter in the configuration. If you would like to disable this feature all together set `thirdPartyCookiesEnabled` to false.

## Retrieving the Visitor ID

If you want to use this unique ID, use the `getIdentity` command. `getIdentity` returns the existing ECID for the current visitor. For first-time visitors who don't have an ECID yet, this command generates a new ECID.

>[!NOTE]
>
>This method is typically used with custom solutions that require reading the Experience Cloud ID. It is not used by a standard implementation.

```javascript
alloy("getIdentity")
  .then(function(results.identity.ECID) {
    // This function will get called with Adobe Experience Cloud Id when the command promise is resolved
  })
  .catch(function(error) {
    // The command failed.
    // "error" will be an error object with additional information
  })
```

## Syncing Identities

Additionally the Identity Service allows you to sync your own identifiers with the ECID using the `syncIdentity` command.

```javascript

alloy("syncIdentity",{
    identity:{
      "AppNexus":{
        "id":"123456,
        "authenticationState":"ambiguous",
        "primary":false,
        "hashEnabled": true,
      }
    }
})

```

### Syncing Identities Options

#### Identity Namespace Symbol

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| String   | Yes          | none              |

The key for the object is the [Identity Namespace](../../identity-service/namespaces.md) Symbol. You can find this listed in the Adobe Experience Platform UI under Identities.

#### `id`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| String   | Yes          | none              |

This is the ID that you want to sync for the given namespace.

#### `primary`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Boolean  | optional     | false             |

Should this identity be used as a primary fragment in the unified profile. By default the ECID is set as the primary identifier for the user.

#### `hashEnabled`

| **Type** | **Required** | **Default Value** |
| -------- | ------------ | ----------------- |
| Boolean  | optional     | false             |

If enabled it will hash the identity using SHA256 hashing.
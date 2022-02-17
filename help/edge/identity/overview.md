---
title: Identity Data in the Platform Web SDK
description: Learn how to retrieve and manage Adobe Experience Cloud IDs (ECIDs) using the Adobe Experience Platform Web SDK.
keywords: Identity;First Party Identity;Identity Service;3rd Party Identity;ID Migration;Visitor ID;third party identity;thirdPartyCookiesEnabled;idMigrationEnabled;getIdentity;Syncing Identities;syncIdentity;sendEvent;identityMap;primary;ecid;Identity Namespace;namespace id;authenticationState;hashEnabled;
exl-id: 03060cdb-becc-430a-b527-60c055c2a906
---
# Identity data in the Platform Web SDK

The Adobe Experience Platform Web SDK leverages [Adobe Experience Cloud Identity Service](../../identity-service/ecid.md). This ensures that each device has a unique identifier that is persisted on the device so activity between pages can be tied together.

## Retrieving the ECID and region for the current user

To retrieve the unique ECID for the current visitor, use the `getIdentity` command. For first-time visitors who don't have an ECID yet, this command generates a new ECID. `getIdentity` also returns the region ID for the visitor.

>[!NOTE]
>
>This method is typically used with custom solutions that require reading the [!DNL Experience Cloud] ID or need a location hint for Adobe Audience Manager. It is not used by a standard implementation.

```javascript
alloy("getIdentity")
  .then(function(result) {
    // The command succeeded.
    console.log("ECID:", result.identity.ECID);
    console.log("RegionId:", result.edge.regionId);
  })
  .catch(function(error) {
    // The command failed.
    // "error" will be an error object with additional information.
  });
```

## Tracking ECIDs using the SDK

There are several methods for tracking ECIDs between website visits:

1. A third-party cookie that connects directly to the Adobe Experience Platform Edge Network.
2. A first-party cookie from your own domain that connects to the Edge Network through a CNAME.
3. First-party device IDs that are maintained by your organization.

Each of the options listed above have crucial advantages and drawbacks to consider when it comes to browser restrictions on the use of cookies for tracking. For more information, see the document on [tracking ECIDs in the Web SDK](./tracking.md).

## Using `identityMap`

Using an XDM [`identityMap` field](../../xdm/schema/composition.md#identityMap), you can identify a device/user using multiple identities, set their authentication state, and decide which identifier is considered the primary one. If no identifier has been set as `primary`, the primary defaults to be the `ECID`.

`identityMap` fields are updated using the `sentEvent` command.

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
});
```

Each property within `identityMap` represents identities belonging to a particular [identity namespace](../../identity-service/namespaces.md). The property name should be the identity namespace symbol, which you can find listed in the Adobe Experience Platform user interface under "[!UICONTROL Identities]". The property value should be an array of identities pertaining to that identity namespace.

Each identity object in the identities array contains the following properties:

| Property | Data type | Description |
| --- | --- | --- |
| `id` | String | **(Required)** The ID that you want to set for the given namespace. |
| `authenticationState` | String | **(Required)** The authentication state of the ID. Possible values are `ambiguous`, `authenticated`, and `loggedOut`. |
| `primary` | Boolean | Determines whether this identity should be used as a primary fragment in the profile. By default, the ECID is set as the primary identifier for the user. If omitted, this value defaults to `false`. |

## Migrating from Visitor API to ECID

When migrating from using Visitor API, you can also migrate existing AMCV cookies. To enable ECID migration, set the `idMigrationEnabled` parameter in the configuration. ID migration enables the following use cases:

* When some pages of a domain are using Visitor API and other pages are using this SDK. To support this case, the SDK reads existing AMCV cookies and writes a new cookie with the existing ECID. Additionally, the SDK writes AMCV cookies so that if the ECID is obtained first on a page instrumented with the SDK, subsequent pages that are instrumented with Visitor API have the same ECID.
* When Adobe Experience Platform Web SDK is set up on a page that also has Visitor API. To support this case, if the AMCV cookie is not set, the SDK looks for Visitor API on the page and calls it to get the ECID.
* When the entire site is using Adobe Experience Platform Web SDK and does not have Visitor API, it is useful to migrate the ECIDs so that the return visitor information is retained. After the SDK is deployed with `idMigrationEnabled` for a period of time so that most of the visitor cookies are migrated, the setting can be turned off.

### Updating traits for migration

When XDM formatted data is sent into Audience Manager this data will need to be converted into signals when migrating. Your traits will need to be updated to reflect the new keys that XDM provides. This process is made easier by using the [BAAAM tool](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/bulk-management-tools/bulk-management-intro.html#getting-started-with-bulk-management) that Audience Manager has created.

## Use in event forwarding

If you currently have [event forwarding](../../tags/ui/event-forwarding/overview.md) enabled and are using `appmeasurement.js` and `visitor.js`, you can keep the event-forwarding feature enabled and this won't cause any issues. On the back end, Adobe fetches any AAM segments and adds them to the call to Analytics. If the call to Analytics contains those segments, Analytics won’t call Audience Manager to forward any data, so there isn't any double data collection. There is also no need for Location Hint when using the Web SDK because the same segmentation endpoints are called in the backend.

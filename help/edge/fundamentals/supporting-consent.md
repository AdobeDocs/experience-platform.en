---
title: Supporting consent
seo-title: Supporting Adobe Experience Platform Web SDK consent preference
description: Learn how to support consent preferences with Experience Platform Web SDK
seo-description: Learn how to support consent preferences with Experience Platform Web SDK
keywords: consent;defaultConsent;default consent;setConsent;Profile Privacy Mixin;Experience Event Privacy Mixin;Privacy Mixin;
---

# Supporting Consent

To respect your user's privacy, you might want to ask for the user's consent before allowing the SDK to use user-specific data for certain purposes. Currently, the SDK only allows users to opt in or out of all purposes, but in the future Adobe hopes to provide more granular control over specific purposes.

If the user opts in to all purposes, the SDK is allowed to perform the following tasks:

* Send data to and from Adobe's servers.
* Read and write cookies or web storage items (except for persisting the user's opt-in preferences).

If the user opts out of all purposes, the SDK does not perform any of these tasks.

## Configuring Consent

By default the user is opted in to all purposes. To prevent the SDK from performing the above tasks until the user opts in, pass `"defaultConsent": { "general": "pending" }` during SDK configuration as follows:

```javascript
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "imsOrgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "defaultConsent": { "general": "pending" }
});
```

When the default consent for the general purpose is set to pending, attempting to execute any commands that depend on user opt-in preferences (for example, the `event` command) results in the command being queued within the SDK. These commands are not processed until you have communicated the user's opt-in preferences to the SDK.

At this point, you might prefer to ask the user to opt in somewhere within your user interface. After the user's preferences have been collected, communicate these preferences to the SDK.

## Communicating consent preferences via the Adobe Standard

If the user opts in, execute the `setConsent` command with the `general` option set to `in` as follows:

```javascript
alloy("setConsent", {
    consent: [{
      standard: "Adobe",
      version: "1.0",
      value: {
        general: "in"
      }
    }]
});
```

Because the user has now opted in, the SDK executes all previously queued commands. Future commands that depend on the user opting in will _not_ be queued and instead be promptly executed.

If the user chooses to opt out, execute the `setConsent` command with the `general` option set to `out` as follows:

```javascript
alloy("setConsent", {
    consent: [{
      standard: "Adobe",
      version: "1.0",
      value: {
        general: "out"
      }
    }]
});
```

>[!NOTE]
>
>After a user has opted out, the SDK will not allow you to set the users consent to `in`.

Because the user chose to opt out, promises that were returned from previously queued commands are rejected. Future commands that depend on the user opting in will return promises that are similarly rejected. For more information on handling or suppressing errors, please refer to [Executing Commands](executing-commands.md).

>[!NOTE]
>
>Currently, the SDK supports only the `general` purpose. Although we plan to build out a more robust set of purposes or categories that will correspond to the different Adobe capabilities and product offerings, the current implementation is an all or nothing approach to opt-in.  This only applies to the Adobe Experience Platform [!DNL Web SDK] and NOT other Adobe JavaScript libraries.

## Communicating consent preferences via the IAB TCF Standard

The SDK supports recording a user's consent preferences provided through the Interactive Advertising Bureau Europe (IAB) Transparency and Consent Framework (TCF) standard. The consent string can be set through the same setConsent command as above like this:

```javascript
alloy("setConsent", {
    consent: [{
      standard: "IAB TCF",
      version: "2.0",
      value: "CO1Z4yuO1Z4yuAcABBENArCsAP_AAH_AACiQGCNX_T5eb2vj-3Zdt_tkaYwf55y3o-wzhhaIse8NwIeH7BoGP2MwvBX4JiQCGBAkkiKBAQdtHGhcCQABgIhRiTKMYk2MjzNKJLJAilsbe0NYCD9mnsHT3ZCY70--u__7P3fAwQgkwVLwCRIWwgJJs0ohTABCOICpBwCUEIQEClhoACAnYFAR6gAAAIDAACAAAAEEEBAIABAAAkIgAAAEBAKACIBAACAEaAhAARIEAsAJEgCAAVA0JACKIIQBCDgwCjlACAoAAAAA.YAAAAAAAAAAA",
      gdprApplies: true
    }]
});
```

When the consent is set in this way, the Unified Profile is updated with the consent information. For this to work, the profile XDM schema needs to contain the [Profile Privacy Mixin](https://github.com/adobe/xdm/blob/master/docs/reference/context/profile-privacy.schema.md). When sending events, the IAB consent information needs to be added manually to the event xdm object. The SDK does not automatically include the consent information in the events. To send the consent information in events, the [Experience Event Privacy Mixin](https://github.com/adobe/xdm/blob/master/docs/reference/context/experienceevent-privacy.schema.md) needs to be added to the experience event schema.

## Sending both standards in one request

The SDK also supports sending more than one consent object in a request.

```javascript
alloy("setConsent", {
    consent: [{
      standard: "Adobe",
      version: "1.0",
      value: {
        general: "in"
      }
    },{
      standard: "IAB TCF",
      version: "2.0",
      value: "CO1Z4yuO1Z4yuAcABBENArCsAP_AAH_AACiQGCNX_T5eb2vj-3Zdt_tkaYwf55y3o-wzhhaIse8NwIeH7BoGP2MwvBX4JiQCGBAkkiKBAQdtHGhcCQABgIhRiTKMYk2MjzNKJLJAilsbe0NYCD9mnsHT3ZCY70--u__7P3fAwQgkwVLwCRIWwgJJs0ohTABCOICpBwCUEIQEClhoACAnYFAR6gAAAIDAACAAAAEEEBAIABAAAkIgAAAEBAKACIBAACAEaAhAARIEAsAJEgCAAVA0JACKIIQBCDgwCjlACAoAAAAA.YAAAAAAAAAAA",
      gdprApplies: true
    }]
});
```

## Persistence of Consent Preferences

After you have communicated user preferences to the SDK using the `setConsent` command, the SDK persists the user's preferences to a cookie. The next time the user loads your website in the browser, the SDK will retrieve and use these persisted preferences to determine whether or not events can be sent to Adobe. There is no need to execute the `setConsent` command again, except to communicate a change in the user's preferences, which you may do at any time.

## Sync'ing Identities while Setting the Consent

When the default consent is pending, the "setConsent" may be the first request that goes out and establishes identity. Because of this, it may be important to sync identities on the first request. The identity map can be added to "setConsent" command just like on the "sendEvent" command. See [Retrieving Experience Cloud ID](./identity.md)


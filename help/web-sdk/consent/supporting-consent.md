---
title: Supporting Customer Consent Preferences Using the Adobe Experience Platform Web SDK
description: Learn how to support consent preferences with the Adobe Experience Platform Web SDK.
keywords: consent;defaultConsent;default consent;setConsent;Profile Privacy field group;Experience Event Privacy field group;Privacy field group;
exl-id: 647e4a84-4a66-45d6-8b05-d78786bca63a
---
# Supporting customer consent preferences

To respect your user's privacy, you might want to ask for the user's consent before allowing the SDK to use user-specific data for certain purposes. Currently, the SDK only allows users to opt in or out of all purposes, but in the future Adobe hopes to provide more granular control over specific purposes.

If the user opts in to all purposes, the SDK is allowed to perform the following tasks:

* Send data to and from Adobe's servers.
* Read and write cookies or web storage items.

If the user opts out of all purposes, the SDK does not perform any of these tasks.

## Configuring consent

By default the user is opted in to all purposes. To prevent the SDK from performing the above tasks until the user opts in, pass `"defaultConsent": "pending"` during SDK configuration as follows:

```javascript
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "imsOrgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "defaultConsent": "pending"
});
```

When the default consent for the general purpose is set to pending, attempting to execute any commands that depend on user opt-in preferences (for example, the `sendEvent` command) results in the command being queued within the SDK. These commands are not processed until you have communicated the user's opt-in preferences to the SDK.

>[!NOTE]
>
>Commands are only queued in memory. They are not saved across page loads.

If you do not want to collect events that occurred before the user's opt-in preferences are set, you can pass `"defaultConsent": "out"` during SDK configuration. Attempting to execute any commands that depend on user opt-in preferences will have no effect until you have communicated the user's opt-in preferences to the SDK.

>[!NOTE]
>
>Currently, the SDK supports only a single all or nothing purpose. Although we plan to build out a more robust set of purposes or categories that will correspond to the different Adobe capabilities and product offerings, the current implementation is an all or nothing approach to opt-in.  This only applies to Adobe Experience Platform [!DNL Web SDK] and NOT other Adobe JavaScript libraries.

At this point, you might prefer to ask the user to opt in somewhere within your user interface. After the user's preferences have been collected, communicate these preferences to the SDK.

## Communicating consent preferences via the Adobe Experience Platform standard

The SDK supports versions 1.0 and 2.0 of the Adobe Experience Platform consent standard. Currently, the 1.0 and 2.0 standards only support automatic enforcement of an all or nothing consent preference. The 1.0 standard is being phased out in favor of the 2.0 standard. The 2.0 standard allows you to add additional consent preferences that can be used to manually enforce consent preference.

### Using the Adobe standard version 2.0

If you are using Adobe Experience Platform, you will need include a privacy schema field group to your profile schema. See [Governance, privacy, and security in Adobe Experience Platform](../../landing/governance-privacy-security/overview.md) for more information on the Adobe standard version 2.0. You can add data inside the value object below corresponding to the schema of the `consents` field of the [!UICONTROL Consents and Preferences] profile field group.

If the user opts in, execute the `setConsent` command with the collect preference set to `y` as follows:

```javascript
alloy("setConsent", {
    consent: [{
      standard: "Adobe",
      version: "2.0",
      value: {
        collect: {
          val: "y"
        },
        metadata: {
          time: "2021-03-17T15:48:42-07:00"
        }
      }
    }]
});
```

The time field should specify when the user last updated their consent preferences. If the user chooses to opt out, execute the `setConsent` command with the collect preference set to `n` as follows:

```javascript
alloy("setConsent", {
    consent: [{
      standard: "Adobe",
      version: "2.0",
      value: {
        collect: {
          val: "n"
        },
        metadata: {
          time: "2021-03-17T15:51:30-07:00"
        }
      }
    }]
});
```

### Using the Adobe standard version 1.0

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

## Communicating consent preferences via the IAB TCF standard

The SDK supports recording a user's consent preferences provided through the Interactive Advertising Bureau Europe (IAB) Transparency and Consent Framework (TCF) standard. The consent string can be set through the same `setConsent` command as above like this:

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

When the consent is set in this way, Real-Time Customer Profile is updated with the consent information. For this to work, the profile XDM schema needs to contain the [Profile Privacy schema field group](https://github.com/adobe/xdm/blob/master/docs/reference/mixins/profile/profile-privacy.schema.md). When sending events, the IAB consent information needs to be added manually to the event XDM object. The SDK does not automatically include the consent information in the events. To send the consent information in events, the [Experience Event Privacy field group](https://github.com/adobe/xdm/blob/master/docs/reference/mixins/experience-event/experienceevent-privacy.schema.md) needs to be added to the Experience Event schema.

## Sending multiple standards in one request

The SDK also supports sending more than one consent object in a request.

```javascript
alloy("setConsent", {
    consent: [{
      standard: "Adobe",
      version: "2.0",
      value: {
        collect: {
          val: "y"
        },
        metadata: {
          time: "2021-03-17T15:48:42-07:00"
        }
      }
    },{
      standard: "IAB TCF",
      version: "2.0",
      value: "CO1Z4yuO1Z4yuAcABBENArCsAP_AAH_AACiQGCNX_T5eb2vj-3Zdt_tkaYwf55y3o-wzhhaIse8NwIeH7BoGP2MwvBX4JiQCGBAkkiKBAQdtHGhcCQABgIhRiTKMYk2MjzNKJLJAilsbe0NYCD9mnsHT3ZCY70--u__7P3fAwQgkwVLwCRIWwgJJs0ohTABCOICpBwCUEIQEClhoACAnYFAR6gAAAIDAACAAAAEEEBAIABAAAkIgAAAEBAKACIBAACAEaAhAARIEAsAJEgCAAVA0JACKIIQBCDgwCjlACAoAAAAA.YAAAAAAAAAAA",
      gdprApplies: true
    }]
});
```

## Persistence of consent preferences

After you have communicated user preferences to the SDK using the `setConsent` command, the SDK persists the user's preferences to a cookie. The next time the user loads your website in the browser, the SDK will retrieve and use these persisted preferences to determine whether or not events can be sent to Adobe.

You will need to store the user preferences independently to be able to show the consent dialog with the current preferences. There is no way to retrieve the user preferences from the SDK. To make sure that the user preferences stay in sync with the SDK, you can call the `setConsent` command on every page load. The SDK will only make a server call if the preferences have changed.

## Syncing identities while setting consent

When the default consent is pending or out, the `setConsent` may be the first request that goes out and establishes identity. Because of this, it may be important to sync identities on the first request. The identity map can be added to `setConsent` command just like on the `sendEvent` command. See [Retrieving Experience Cloud ID](../identity/overview.md)

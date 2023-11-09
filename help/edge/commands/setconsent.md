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

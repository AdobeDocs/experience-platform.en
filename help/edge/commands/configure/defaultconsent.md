### `defaultConsent` {#default-consent}

| Type | Required | Default Value |
| -------- | ------------ | ----------------- |
| Object   | No           | `"in"`|

{style="table-layout:auto"}

Sets the user's default consent. Use this setting when there is no consent preference already saved for the user. The other valid values are `"pending"` and `"out"`. This default value is not persisted to the user's profile. The user's profile is updated only when `setConsent` is called.
* `"in"`: When this setting is set or no value is provided, work proceeds without user consent preferences.
* `"pending"`: When this setting is set, work is queued until the user provides consent preferences.
* `"out"`: When this setting is set, work is discarded until the user provides consent preferences.
After the user's preferences have been provided, work either proceeds or is aborted based on the user's preferences. See [Supporting Consent](../consent/supporting-consent.md) for more information.

---

### Default consent

Default consent is used when there is no consent preference already saved for a customer. This means the default consent options can control the behavior of Adobe Experience Platform Web SDK and change based on a customer's region.

For example, if you have a customer that is not within the jurisdiction of General Data Protection Regulation (GDPR), the default consent could be set to `in`, but inside the jurisdiction of GDPR, the default consent could be set to `pending`. Your Consent Management Platform (CMP) might detect the customer's region and provide the flag `gdprApplies` to IAB TCF 2.0. This flag can be used to set the default consent.

For more information on default consent, refer to the [default consent section](../../fundamentals/configuring-the-sdk.md#default-consent) in the SDK configuration documentation.

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
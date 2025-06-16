## Set consent {#set-consent}

After you have received consent from your user, this consent must be communicated to the Adobe Experience Platform Web SDK by using the "Set Consent" action type. Currently, two types of standards are supported: "Adobe" and "IAB TCF." See [Supporting Customer Consent Preferences](../../../../web-sdk/commands/setconsent.md). When using Adobe version 2.0, only a data element value is supported. You will need to create a data element that resolves to the consent object.

In this action, you are also provided with an optional field to include an Identity Map so that identities can be synced once consent is received. Syncing is useful when the consent is configured as "Pending" or "Out" because the consent call is likely the first call to fire.
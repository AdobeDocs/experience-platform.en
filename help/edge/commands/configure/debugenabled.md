### `debugEnabled`

| Type | Required | Default Value |
| -------- | ------------ | ----------------- |
| Boolean  | No           | `false`           |

{style="table-layout:auto"}

Indicates whether debugging is enabled. Setting this config to `true` enables the following features:

| **Feature**            | **Function** |
| ---------------------- | ------------------ |
| Console logging        | Enables debugging messages to be displayed in the browser's JavaScript console  |

{style="table-layout:auto"}

## Toggling debugging with the Configure command

When configuring the SDK using the `configure` command, enable debugging by setting the `debugEnabled` option to `true`.

```javascript
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId":"ADB3LETTERSANDNUMBERS@AdobeOrg",
  "debugEnabled": true
});
```

>[!TIP]
>
>This enables debugging for all users of the webpage rather than only your personal browser.
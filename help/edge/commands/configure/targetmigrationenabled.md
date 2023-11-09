### `targetMigrationEnabled` {#targetMigrationEnabled}

This option should be used when migrating individual pages from [!DNL at.js] to Web SDK.

Use this option to enable the Web SDK to read and write the legacy `mbox` and `mboxEdgeCluster` cookies that are used by [!DNL at.js]. This helps you keep the visitor profile while moving from a page that uses the Web SDK to a page that uses the [!DNL at.js] library and vice versa.

| Type | Required | Default Value |
| -------- | ------------ | ----------------- |
| Boolean   | No           | `false`              |
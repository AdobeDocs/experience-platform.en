### `idMigrationEnabled` {#id-migration-enabled}

| Type | Required | Default Value |
| -------- | ------------ | ----------------- |
| Boolean  | No           | `true`              |

{style="table-layout:auto"}

If true, the SDK reads and sets old AMCV cookies. This option helps with transitioning to using Adobe Experience Platform Web SDK while some parts of the site might still use Visitor.js.

If Visitor API is defined on the page, the SDK queries Visitor API for the ECID. This option enables you to dual-tag pages with the Adobe Experience Platform Web SDK and still have the same ECID.
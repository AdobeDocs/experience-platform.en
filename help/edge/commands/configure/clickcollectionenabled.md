### `clickCollectionEnabled` {#clickCollectionEnabled}

| Type | Required | Default Value |
| -------- | ------------ | ----------------- |
| Boolean  | No           | `true`            |

{style="table-layout:auto"}

Indicates whether data associated with link clicks are automatically collected. See [Automatic Link Tracking](../data-collection/track-links.md#automaticLinkTracking) for more information. Links are also labeled as download links if they include a download attribute or if the link ends with a file extension. Download link qualifiers can be configured with a regular expression. The default value is `"\\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$"`
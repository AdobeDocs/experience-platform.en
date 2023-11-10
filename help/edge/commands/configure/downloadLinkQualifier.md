
Links are labeled as a download link if the anchor tag includes a download attribute or if the link ends with a popular file extension. The download link qualifier can be [configured](../fundamentals/configuring-the-sdk.md) with a regular expression:

```javascript
downloadLinkQualifier: "\\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$"
```

Indicates whether data associated with link clicks are automatically collected. See [Automatic Link Tracking](../data-collection/track-links.md#automaticLinkTracking) for more information. Links are also labeled as download links if they include a download attribute or if the link ends with a file extension. Download link qualifiers can be configured with a regular expression. The default value is `"\\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$"`
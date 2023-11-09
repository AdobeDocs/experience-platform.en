### Overriding the dataset ID

>[!IMPORTANT]
>
>The `datasetId` option supported by the `sendEvent` command was deprecated. To override a dataset ID, use [configuration overrides](../../datastreams/overrides.md) instead.

In some use cases, you might want to send an event to a dataset other than the one configured in the Configuration UI. For that you need to set the `datasetId` option on the `sendEvent` command:



```javascript
var myXDMData = { ... };

alloy("sendEvent", {
  "xdm": myXDMData,
  "type": "commerce.checkout",
  "datasetId": "YOUR_DATASET_ID"
});
```
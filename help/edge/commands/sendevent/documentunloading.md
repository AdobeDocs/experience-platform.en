## Using the sendBeacon API

It can be tricky to send event data just before the web page user has navigated away. If the request takes too long, the browser might cancel the request. Some browsers have implemented a web standard API called `sendBeacon` to allow data to be more easily collected during this time. When using `sendBeacon`, the browser makes the web request in the global browsing context. This means the browser makes the beacon request in the background and does not hold up the page navigation. To tell Adobe Experience Platform [!DNL Web SDK] to use `sendBeacon`, add the option `"documentUnloading": true` to the event command.  Here is an example:


```javascript
alloy("sendEvent", {
  "documentUnloading": true,
  "xdm": {
    "commerce": {
      "order": {
        "purchaseID": "a8g784hjq1mnp3",
        "purchaseOrderNumber": "VAU3123",
        "currencyCode": "USD",
        "priceTotal": 999.98
      }
    }
  }
});
```

Browsers have imposed limits to the amount of data that can be sent with `sendBeacon` at one time. In many browsers, the limit is 64K. If the browser rejects the event because the payload is too large, Adobe Experience Platform [!DNL Web SDK] falls back to using its normal transport method (for example, fetch).
---
title: Merging event data
seo-title: Merging Adobe Experience Platform Web SDK event data
description: Learn how to merge Experience Platform Web SDK event data
seo-description: Learn how to merge Experience Platform Web SDK event data
keywords: merge;event data;eventMergeId;createEventMergeId;sendEvent;mergeId;merge id;eventMergeIdPromise; Merge Id Promise;
---

# Merging event data

>[!IMPORTANT]
>
>This feature is still in development. Not all solutions will be able to merge event data as described on this page. 

Sometimes, not all data is available when an event occurs. You might want to capture the data you do have so it isn't lost if, for example, the user closes the browser. On the other hand, you might also include any data that will become available later.

In such cases, you can merge data with prior events by passing `mergeId` as an option to `event` commands as follows:

```javascript
alloy("sendEvent", {
  "xdm": {
    "commerce": {
      "order": {
        "purchaseID": "a8g784hjq1mnp3",
        "purchaseOrderNumber": "VAU3123",
        "currencyCode": "USD",
        "priceTotal": 999.98
      }
    }
  },
  "mergeId": "ABC123"
});

// Time passes and more data becomes available

alloy("sendEvent", {
  "xdm": {
    "commerce": {
      "order": {
        "payments": [
          {
            "transactionID": "TR426941",
            "paymentAmount": 999.98,
            "paymentType": "credit_card",
            "currencyCode": "USD"
          }
        ]
      }
    }
  },
  "mergeId": "ABC123"
});
```

By passing the same value for the `mergeId` option to both event commands in this example, the data in the second event command is augmented to data previously sent on the first event command. A record for each event command is created in the [!DNL Experience Data Platform], but during reporting the records are joined together using the event merge ID and appear as a single event.

If you are sending data about a particular event to third-party providers, you can include the same event merge ID with that data as well. Later, if you choose to import the third-party data into Adobe Experience Platform, the event merge ID will be used to merge together all data that was collected as a result of the discrete event that occurred on your webpage.

## Generating an event merge ID

The event merge ID can be any string you choose, but remember that all events sent using the same ID are reported as a single event, so be careful to enforce uniqueness when events should not be merged. If you would like the SDK to generate a unique event merge ID on your behalf (following the widely-adopted [UUID v4 specification](https://www.ietf.org/rfc/rfc4122.txt)), you can use the `createEventMergeId` command to do so.

As with all commands, a promise is returned because you might execute the command before the SDK has finished loading. The promise will be resolved with a unique event merge ID as soon as possible. You can wait for the promise to be resolved before sending data to the server as follows:

```javascript
var eventMergeIdPromise = alloy("createEventMergeId");

eventMergeIdPromise.then(function(results) {
  alloy("sendEvent", {
    "xdm": {
      "commerce": {
        "order": {
          "purchaseID": "a8g784hjq1mnp3",
          "purchaseOrderNumber": "VAU3123",
          "currencyCode": "USD",
          "priceTotal": 999.98
        }
      }
    },
    "mergeId": results.eventMergeId
  });
});

// Time passes and more data becomes available

eventMergeIdPromise.then(function(results) {
  alloy("sendEvent", {
    "xdm": {
      "commerce": {
        "order": {
          "payments": [
            {
              "transactionID": "TR426941",
              "paymentAmount": 999.98,
              "paymentType": "credit_card",
              "currencyCode": "USD"
            }
          ]
        }
      }
    },
    "mergeId": results.eventMergeId
  });
});
```

Follow this same pattern if you would like access to the event merge ID for other reasons (for example, to send it to a third-party provider):

```javascript
var eventMergeIdPromise = alloy("createEventMergeId");

eventMergeIdPromise.then(function(results) {
  // send event merge ID to a third-party provider
  console.log(results.eventMergeId);
});
```

## Note on XDM format

Inside the event command, the event merge ID is added to the `xdm` payload in the correct location on your behalf.  If desired, the event merge ID can be sent as part of the `xdm` option instead, like this:

```javascript
alloy("sendEvent", {
  "xdm": {
    "commerce": {
      "order": {
        "purchaseID": "a8g784hjq1mnp3",
        "purchaseOrderNumber": "VAU3123",
        "currencyCode": "USD",
        "priceTotal": 999.98
      }
    },
    "eventMergeId": "ABC123"
  }
});
```

When adding the event merge ID to the `xdm` object directly, notice the name `eventMergeID` is used instead of `mergeId`.

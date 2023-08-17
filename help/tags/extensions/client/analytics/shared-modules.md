---
title: Shared modules for the Adobe Analytics extension
description: Learn about the shared library modules provided by the Adobe Analytics tag extension in Adobe Experience Platform.
exl-id: f1d7cb2b-0058-46f9-983c-079079e06057
---
# Shared modules for the Adobe Analytics extension

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../term-updates.md) for a consolidated reference of the terminology changes.

The [Adobe Analytics extension](./overview.md) provides two different [shared modules](../../../extension-dev/web/shared.md) that you can integrate into your experience application. These modules are covered in the sections below.

## [!DNL get-tracker]

Before Adobe Analytics sends any beacons, it must initialize the tracker object. The initialization process begins by loading [AppMeasurement](https://experienceleague.adobe.com/docs/analytics/implementation/js/overview.html), followed by creating a tracker object.

You can access the tracker object after it has been fully initialized by using the `get-tracker` shared module as follows:

```js
var getTracker = turbine.getSharedModule('adobe-analytics', 'get-tracker');

getTracker().then(function(tracker) {
  // Use tracker in some way
});
```

### Verifying that Adobe Analytics has been installed

It's possible that Adobe Analytics has not been installed or included in the same tag library as your extension. Because of this, it's highly recommended that you check for this case in your code and handle it appropriately. The following JavaScript is an example of how you might implement this:

```js
var getTracker = turbine.getSharedModule('adobe-analytics', 'get-tracker');

if (getTracker) {
  getTracker().then(function(tracker) {
    // Use tracker in some way
  });
} else {
  turbine.logger.error("The Adobe Analytics extension is required for Extension XYZ to function properly.");
}
```

If `getTracker` is `undefined`, the Adobe Analytics extension does not exist in the tag library. You can customize the logged message to accurately reflect what functionality may be lost if Adobe Analytics is not installed.


## [!DNL augment-tracker]

After the tracker object is initialized, the next step in the process is augmentation. This step allows your extension to augment the tracker with anything necessary before any variables have been applied from the Adobe Analytics extension configuration or before any beacons have been sent.

In addition, your extension has the opportunity to pause the tracker initialization process while your extension performs any asynchronous task of its own, such as fetching data or JavaScript from a server.

You can implement the `augment-tracker` module like so:

```js
var augmentTracker = turbine.getSharedModule('adobe-analytics', 'augment-tracker');

augmentTracker(function(tracker) {
  // Augment tracker in some way
});
```

The function passed into `augmentTracker()` will be called as soon as the augmentation phase of the tracker initialization process is reached.

If your extension needs to complete an asynchronous task before augmenting the tracker, you may return a promise from your function as follows:

```js
var Promise = require('@adobe/reactor-promise');
var augmentTracker = turbine.getSharedModule('adobe-analytics', 'augment-tracker');

augmentTracker(function(tracker) {
  return new Promise(function(resolve) {
    // Augment the tracker object, then call resolve()
  });
});
```

By returning a promise, your extension is signaling to Adobe Analytics that it should pause the tracker initialization process until the promise is resolved.

>[!WARNING]
>
>Please be prudent when pausing the tracker initialization process, as it can delay beacons from being sent and therefore result in uncollected data (for example, if the user navigates away from the page before the beacon gets sent).

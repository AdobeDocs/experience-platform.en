---
title: Event Types for Web Extensions
description: Learn how to define an event-type library module for a web extension in Adobe Experience Platform.
exl-id: dbdd1c88-5c54-46be-9824-2f15cce3d160
---
# Event types for web extensions

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

In a tag rule, an event is an activity that must occur in order for a rule to fire. As an example, a web extension could provide a "gesture" event type that watches for a certain mouse or touch gesture to occur. Once the gesture occurs, the event logic would fire the rule.

An event type library module is designed to detect when an activity happens and then call a function to fire an associated rule. The event being detected is customizable. For example, could detect when a user makes a certain gesture, scrolls rapidly, or interacts with something.

This document covers how to define event types for a web extension in Adobe Experience Platform.

>[!NOTE]
>
>This document assumes you are familiar with library modules and how they are integrated in web extensions. See the overview on [library module formatting](./format.md) for an introduction to their implementation before returning to this guide.

Event types are defined by extensions and typically consist of the following:

1. A [view](./views.md) shown within the Experience Platform UI and Data Collection UI that allows users to modify settings for the event.
2. A library module emitted within the tag runtime library to interpret the settings and watch for a certain activity to occur.

`module.exports` accept both the `settings` and `trigger` parameters. This enables customization of the event-type.

```js
module.exports = function(settings, trigger) { … };
```

| Parameter | Description |
| --- | --- |
`settings` | An object containing any settings the user configured in the event type's view. You have ultimate control over what goes into this object. |
| `trigger` | A function that the module should call whenever the rule should be fired. There is a one-to-one relationship amongst a `settings` object, a `trigger` function, and a rule. This means that the trigger function you received for one rule cannot be used to fire a different rule. |

>[!NOTE]
>
>The exported function will be called once for each rule that has been configured to use your event type.

Using the activity of five seconds passing as an example, after five seconds passes, the activity has taken place and the rule will fire. The module will look similar to this example.

```js
module.exports = function(settings, trigger) {
  setTimeout(trigger, 5000);
};
```

If you want to make the duration configurable by the Adobe Experience Platform user, then the option to input and save a duration to the settings object is required. The object might look something like this:

```js
{
  "duration": 25000
}
```

In order to operate on the user-defined duration, the module would need to be updated to include this.

```js
module.exports = function(settings, trigger) {
  setTimeout(trigger, settings.duration);
};
```

## Pass contextual event data

When a rule is triggered, it is often useful to provide additional detail about the event that occurred. Users creating rules can find this information useful to achieve a certain behavior. For example, if a marketer wants to create a rule where an analytics beacon is sent each time the user swipes the screen. The extension would have to provide a `swipe` event type so that the marketer could use this event type to trigger the appropriate rule. Assuming the marketer would like to include the angle at which the swipe occurred on the beacon, this would be difficult to do without providing additional information. To provide additional information about the event that occurred, pass an object when calling the `trigger` function. For example:

```js
trigger({
  swipeAngle: 90 // the value would be the detected angle
});
```

The marketer could then use this value on an analytics beacon by specifying the value `%event.swipeAngle%` in a text field. They could also access `event.swipeAngle` from within other contexts as well (like a custom code action). It is possible to include other types of optional event information that may be useful to a marketer in the same fashion.

### [!DNL nativeEvent]

If your event type is based on a native event (for example, if your extension provided a `click` event type), it is recommended to set the `nativeEvent` property as follows.

```js
trigger({
  nativeEvent: nativeEvent // the value would be the underlying native event
});
```

This can be useful for marketers trying to access any information from the native event, like cursor coordinates.

### [!DNL element]

If there is a strong relationship between an element and the event that occurred, it is recommended to set the `element` property to the element's DOM node. For example, if your extension is providing a `click` event type and you allow marketers to configure it so the rule would fire only if an element with the ID of `herobanner` is selected. In this case, if the user selects the hero banner, it is recommended to call `trigger` and set `element` to the hero banner's DOM node.

```js
trigger({
  element: element // the value would be the DOM node
});
```

## Respecting rule order

Tags give users the ability to order rules. For example, a user might create two rules which both use the orientation-change event type and to customize the order in which the rules fire. Assuming that the Adobe Experience Platform user specifies an order value of `2` for the orientation change event in Rule A and an order value of `1` for the orientation change event in Rule B. This indicates that when the orientation changes on a mobile device, Rule B should fire before Rule A (rules with lower-order values fire first).

As mentioned previously, the exported function in our event module will be called once for each rule that has been configured to use our event type. Each time the exported function is called, it is passed a unique `trigger` function that is tied to a specific rule. In the scenario just described, our exported function will be called once with a `trigger` function tied to Rule B and then again with a `trigger` function tied to Rule A. Rule B comes first because the user has given it a lower-order value than Rule A. When our library module detects an orientation change, it is important that we call the `trigger` functions in the same order they were provided to the library module.

In the example code below, notice that when an orientation change is detected, trigger functions are called in the same order they were provided to our exported function:

```js
var triggers = [];

window.addEventListener('orientationchange', function() {
  triggers.forEach(function(trigger) {
    trigger();
  });
});

module.exports = function(settings, trigger) {
  triggers.push(trigger);
};
```

This ensures that the user-specified order is maintained.

An improper implementation would be one which calls the trigger functions in a different order:

```js
var triggers = [];

window.addEventListener('orientationchange', function() {
  for (var i = triggers.length - 1; i >= 0; i--) {
    triggers[i]();
  }
});

module.exports = function(settings, trigger) {
  triggers.push(trigger);
};
```

Natural programming practices typically maintain proper order, but it is important to be aware of the implications and develop accordingly.

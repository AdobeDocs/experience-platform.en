### `monitor`

**Code**

```javascript
_satellite._monitors
```

**Example**

>[!IMPORTANT]
>
>This function should not be accessed from the production code. It is intended only for debugging purposes and will change over time as needed.

**Sample**

On your web page running a tag library, add a snippet of code to your HTML. Typically, the code is inserted into the `<head>` element before the `<script>` element that loads the tag library. This allows the monitor to catch the earliest system events that occur in the tag library. For example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <script>
    window._satellite = window._satellite || {};
    window._satellite._monitors = window._satellite._monitors || [];
    window._satellite._monitors.push({
      ruleTriggered: function (event) {
        console.log(
          'rule triggered',
          event.rule
        );
      },
      ruleCompleted: function (event) {
        console.log(
          'rule completed',
          event.rule
        );
      },
      ruleConditionFailed: function (event) {
        console.log(
          'rule condition failed',
          event.rule,
          event.condition
        );
      }
    });
  </script>
  <script src="//assets.adobedtm.com/launch-EN5bfa516febde4b22b3e7c6f96f6b439f.min.js"
          async></script>
</head>
<body>
  <h1>Click me!</h1>
</body>
</html>
```

In the first script element, because the tag library has not been loaded yet, the initial `_satellite` object is created and an array on `_satellite._monitors` is initialized. The script then adds a monitor object to that array. The monitor object can specify the following methods which will later be called by the tag library:

### `ruleTriggered`

This function is called after an event triggers a rule but before the rule's conditions and actions have been processed. The event object passed to `ruleTriggered` contains information about the rule that was triggered.

### `ruleCompleted`

This function is called after a rule has been fully processed. In other words, the event has occurred, all conditions have passed, and all actions have been executed. The event object passed to `ruleCompleted` contains information about the rule that was completed.

### `ruleConditionFailed`

This function is called after a rule has been triggered and one of its conditions has failed. The event object passed to `ruleConditionFailed` contains information about the rule that was triggered and the condition that failed.

If `ruleTriggered` is called, either `ruleCompleted` or `ruleConditionFailed` will be called shortly thereafter.

>[!NOTE]
>
>A monitor doesn't have to specify all three methods (`ruleTriggered`, `ruleCompleted`, and `ruleConditionFailed`). Tags in Adobe Experience Platform work with whatever supported methods have been provided by the monitor.

### Testing the Monitor

The example above specifies all three methods in the monitor. When they're called, the monitor logs out relevant information. To test this, set up two rules in the tag library:

1. A rule that has a click event and a browser condition that passes only if the browser is [!DNL Chrome].
1. A rule that has a click event and a browser condition that passes only if the browser is [!DNL Firefox].

If you open the page in [!DNL Chrome], open the browser console, and select the page, the following appears in the console:

![](../../images/debug.png)

Additional hooks or additional information might be added to these handlers as needed.
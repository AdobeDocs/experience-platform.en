## `getVar`

**Code**

```javascript
_satellite.getVar(name: string) => *
```

**Example**

```javascript
var product = _satellite.getVar('product');
```

In the example provided, if a data element exists with a matching name, the data element's value will be returned. If no matching data element exists, it will then check to see if a custom variable with a matching name has previously been set using `_satellite.setVar()`. If a matching custom variable is found, its value will be returned.

>[!NOTE]
>
>You can use percent (`%`) syntax to reference variables for many form fields in your tag implementation, reducing the need to call `_satellite.getVar()`. For example, using `%product%` will access the value of the product data element or custom variable.

When an event triggers a rule, you can pass the rule's corresponding `event` object into `_satellite.getVar()` like so:

```javascript
// event refers to the calling rule's event
var rule = _satellite.getVar('return event rule', event);
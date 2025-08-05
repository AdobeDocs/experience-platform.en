
## `setVar`

>[!NOTE]
>
>The `setVar` code is entirely separate from a data element specified in Tags.

**Code**

```javascript
_satellite.setVar(name: string, value: *)
```

**Example**

```javascript
_satellite.setVar('product', 'Circuit Pro');
```

`setVar()` sets a custom variable with a given name and value. The value of the variable can later be accessed using `_satellite.getVar()`.

You may optionally set multiple variables at once by passing an object where the keys are variable names and the values are the respective variable values.

```javascript
_satellite.setVar({ 'product': 'Circuit Pro', 'category': 'hobby' });
```
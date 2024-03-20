---
title: Core Event Forwarding Extension Overview
description: Learn about the Core event forwarding extension in Adobe Experience Platform.
feature: Event Forwarding
exl-id: b5ee4ccf-6fa5-4472-be04-782930f07e20
---
# Core event forwarding extension overview

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../term-updates.md) for a consolidated reference of the terminology changes.

The Core event-forwarding extension provides the default events, conditions, and data types for event forwarding in Adobe Experience Platform.

Use this reference for information about the options available when using this extension to build a rule.

## Core extension condition types

This section describes the condition types available in the Core extension.  These condition types can be used with either the regular or exception logic type.

### Custom Code

Specify any custom code that must exist as a condition of the event. Use the built-in code editor to enter the custom code. Event forwarding in Adobe Experience Platform supports ES13.  

1. Select **[!UICONTROL Open Editor]**.
1. Type the custom code.
1. Select **[!UICONTROL Save]**.

To access the value of a data element in custom code, use the `getDataElementValue` method. For example, to retrieve the value of a data element named `productName`, write the following: 

```javascript
getDataElementValue('productName') 
```

#### ruleStash object

In your custom code, you might also use the `ruleStash` object.

```javascript
utils.logger.log(context.arc.ruleStash);
```

`ruleStash` is an object that collects every result from action modules.

Each extension has its own namespace. For example, if your extension has the name `send-beacon`, all results from the `send-beacon` actions are stored on the `ruleStash['send-beacon']` namespace.

```javascript
utils.logger.log(context.arc.ruleStash['adobe-cloud-connector']);
```

The namespace is unique for each extension and has the value `undefined` at the beginning.

The namespace will be overridden with the returned result from each action. There is no namespace magic happening. For example, if you have a `transform` extension containing two actions: `generate-fullname` and `generate-fulladdress`, then add the two actions to a rule.

If the result of the `generate-fullname` action is `Firstname Lastname`, then the rule stash appears as follows after the action is completed:

```js
{
  transform: 'Firstname Lastname`
}
```

If the result of the `generate-address` action is `3900 Adobe Way`, then the rule stash appears as follows after the action is completed:

```js
{
  transform: '3900 Adobe Way`
}
```

Notice that `Firstname Lastname` no longer exists within the rule stash. This is because the `generate-address` action overrode it with the address.

If you want to store the results from both actions inside the `transform` namespace in the `ruleStash`, you can write your action module similar to the following example:

```javascript
module.exports = (context) => {
  let transformRuleStash = context.arc.ruleStash.transform;
  if (!transformRuleStash) {
    transformRuleStash = {};
  }
  transformRuleStash.fullName = 'Firstname Lastname';
  return transformRuleStash;
}
```

The first time this action is executed, the `ruleStash` is `undefined` and it is initialized with an empty object. The next time the action is executed, `ruleStash` is returned by the action when it was previously called. Using an object as `ruleStash` allows you to add new data without losing data previously set by other actions from the extension.

You need to be careful to always return the full extension rule stash in this case. If you were to return only a value (for example, 5), then the rule stash would look like:

```js
{
  transform: 5
}
```

### Value Comparison {#value-comparison}

Compares two values to determine whether this condition returns true.

If you have a rule with multiple conditions, it is possible that this condition will return true, but the rule will still not fire because the other conditions evaluate as false or one of the exceptions evaluates as true.

1. Provide a value.
1. Select the operator. Refer to the list of  value comparison operators, below, for more details.
1. Provide another value for the comparison.

The following value comparison operators are available:

**Equal:** The condition returns true if the two values are equal using a non-strict comparison (in JavaScript, the == operator). The values may be of any type. When typing a word like _true_, _false_, _null_, or _undefined_ into a value field, the word is compared as a string and is not be converted to its JavaScript equivalent.

**Does Not Equal:** The condition returns true if the two values are not equalusing a non-strict comparison (in JavaScript, the != operator). The values may be of any type. When typing a word like _true_, _false_, _null_, or _undefined_ into a value field, the word is compared as a string and is not be converted to its JavaScript equivalent.

**Contains:** The condition returns true if the first value contains the second value. Numbers are converted to strings. Any value other than a number or string results in the condition returning false.

**Does Not Contain:** The condition returns true if the first value does not contain the second value. Numbers are converted to strings. Any value other than a number or string will result in the condition returning true.

**Starts With:** The condition returns true if the first value starts with the second value. Numbers are converted to strings. Any value other than a number or string results in the condition returning false.

**Does Not Start With:** The condition returns true if the first value does not start with the second value. Numbers are converted to strings. Any value other than a number or string results in the condition returning true.

**Ends With:** The condition returns true if the first value ends with the second value. Numbers are converted to strings. Any value other than a number or string results in the condition returning false.

**Does Not End With:** The condition returns true if the first value does not end with the second value. Numbers are converted to strings. Any value other than a number or string results in the condition returning true.

**Matches Regex:** The condition returns true if the first value matches the regular expression. Numbers are converted to strings. Any value other than a number or string results in the condition returning false.

**Does Not Match Regex:** The condition returns true if the first value does not match the regular expression. Numbers are converted to strings. Any value other than a number or string results in the condition returning true.

**Is Less Than:** The condition returns true if the first value is less than the second value. Strings representing numbers are converted to numbers. Any value other than a number or a convertible string result in the condition returning false.

**Is Less Than Or Equal To:** The condition returns true if the first value is less than or equal to the second value. Strings representing numbers are converted to numbers. Any value other than a number or a convertible string result in the condition returning false.

**Is Greater Than:** The condition returns true if the first value is greater than the second value. Strings representing numbers are converted to numbers. Any value other than a number or a convertible string result in the condition returning false.

**Is Greater Than Or Equal To:** The condition returns true if the first value is greater than or equal to the second value. Strings representing numbers are converted to numbers. Any value other than a number or a convertible string result in the condition returning false.

**Is True:** The condition returns true if the value is a boolean with the value of true. The value you provide is not converted to a boolean if it is any other type. Any value other than a boolean with the value of true results in the condition returning false.

**Is Truthy:** The condition returns true if the value is true after being converted to a boolean. See [MDN’s Truthy documentation](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) for examples of truthy values.

**Is False:** The condition returns true if the value is a boolean with the value of false. The value you provide is not converted to a boolean if it is any other type. Any value other than a boolean with the value of false results in the condition returning false.

**Is Falsy:** The condition returns true if the value is false after being converted to a boolean. See [MDN’s Falsy documentation](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) for examples of falsy values.



## Core extension action types

This section describes the action types available in the Core extension.    

### Custom Code

Provide the code that runs after the event is triggered and conditions are evaluated. Event forwarding in Adobe Experience Platform supports ES13.

1. Name the action code.
1. Select **[!UICONTROL Open Editor]**.
1. Edit the code, then select **[!UICONTROL Save]**.

To access the value of a data element in custom code, use the `getDataElementValue` method. For example, to retrieve the value of a data element named `productName`, write the following: 

```javascript
getDataElementValue('productName') 
```

Event forwarding actions execute sequentially. It is also possible for custom code in one action to return a value that can be used in a subsequent action. The value returned can come from code within that action, or from the response body of a call made to an external source. To reference data from a previously executed action within a single rule where the Core extension is used, create a data element of type `Path` and use the following path to reference the value of a variable called `productCategory` defined in custom code within the Core extension: 

```javascript
arc.ruleStash.[Extension-Name].[key-as-defined-by-action] 

arc.ruleStash.core.productCategory  
```

## Core extension data element types

Data element types are determined by the extension. There is no limit to the types that can be created.

The following sections describe the types of data elements available in the Core extension. Other extensions use other types of data elements.

### Custom code

Custom JavaScript can be entered into the UI by selecting  **[!UICONTROL Open Editor]** and inserting code into the editor window.

A return statement is necessary in the editor window to indicate what value should be used as the data element value. If a return statement is not included or the value `null` or `undefined` is returned, the data element’s default value reflects `null` or `undefined`.  

To access the value of a data element in custom code, use the `getDataElementValue` method. For example, to retrieve the value of a data element named `productName`, write the following: 

```javascript
getDataElementValue('productName') 
```

**Example:**

```javascript
return getDataElementValue('section').concat(getDataElementValue('pName')); 
```

#### Path

A path to a key-value pair on an event sent to Adobe Experience Platform Edge Network can be referenced using the Path data element type. 

To reference the entire object of an event, enter `arc` as the path. The acronym `arc` stands for Adobe Resource Context and is the top-level path for an event sent to Adobe Experience Platform Edge Network.  

For example, given the `interact` call from the client to Edge Network has the following request as seen from the browser console: 

```javascript
"events": [ 
        { 
             "xdm": { 
                    "page": { 
                            "btnHover": false, 
                            "pageName": "We Travel Home Page", 
                            "siteSection": "Landing Page" 
                     }] 
```

To enter a path that references `pageName`, enter the following in the path field: 

```javascript
arc.event.xdm.page.pageName 
```

>[!NOTE]
>
>The `interact` call from the client has `events`, but for event forwarding you need `event`. This is because event forwarding inspects each event individually, and not as a batch of multiple events as shown on the client.

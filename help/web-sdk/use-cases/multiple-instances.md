---
title: Use multiple Web SDK instances
description: Learn how to interact with multiple Experience Platform Web SDK properties.
keywords: multiple properties;configure;sendEvent;edgeConfigId;orgId;
exl-id: e07afb0d-3490-414f-bc9c-f71bc04fe664
---
# Use multiple Web SDK instances

There are certain cases where you might want to interact with two different properties on the same page. These cases include:

* Companies that have been acquired and are working on integrating their websites together
* Data-sharing relationships between multiple companies
* Customers who are testing new Adobe Solutions and don't want to disrupt their existing implementation

The SDK allows you to create a separate instance for each property by adding another name to the array in the base code. The following example provides two names, `titanium` and `copper`.

```html
<script>
  !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
  (window,["titanium", "copper"]);
</script>
<script src="alloy.js" async></script>
```

As a result, the script creates two instances of the SDK. The global function for interacting with the first instance is named `titanium` and the global function for interacting with the second instance is named `copper`.

By creating two separate instances, each can be configured for a different property. Any communication or data persistence that occurs due to interacting with `titanium` is kept isolated from `copper`.

Following the above example, you can execute commands using each instance:

```javascript
titanium("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg"
});

titanium("sendEvent", {
  "data": {
    "key": "value"
  }
});

copper("configure", {
  "edgeConfigId": "f46e981f-fd03-4bdd-a9d9-73ce4447f870",
  "orgId": "ADB3NUMBERSANDLETTERS2@AdobeOrg"
});

copper("sendEvent", {
  "data": {
    "key": "value"
  }
});
```

Be sure to execute the `configure` command for each instance before executing other commands on the same instance.

>[!IMPORTANT]
>
>To avoid conflicts with cookies, each Web SDK instance must have its own unique `edgeConfigId` and its own unique `orgId`.

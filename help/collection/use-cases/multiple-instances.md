---
title: Use multiple Web SDK instances
description: Learn how to interact with multiple Experience Platform Web SDK properties.
keywords: multiple properties
exl-id: e07afb0d-3490-414f-bc9c-f71bc04fe664
---
# Use multiple Web SDK instances

There are certain cases where you might want to interact with two different properties on the same page. Possible scenarios include:

* Companies that have been acquired and are working on integrating their websites together
* Data-sharing relationships between multiple companies
* Customers who are testing new Adobe solutions and don't want to disrupt their existing implementation

The SDK allows you to create a separate instance for each property by adding another name to the array in the [base code](../js/install/base-code.md). The following example provides two names, `titanium` and `copper`.

```html
<!-- Base code -->
<script>
  !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n.setTimeout(function(){n[o].q.push([i,l,u])})})},n[o].q=[])})}
  (window,["titanium", "copper"]);
</script>

<!-- Load the Web SDK (JavaScript library loader or Tags embed code) -->
<!-- <script src=".../alloy.min.js" async></script> -->
<!-- <script src=".../launch-<ENV>.min.js" async></script> -->
```

As a result, the script creates two global functions (`titanium` and `copper` in the above example) that become two SDK instances when the library initializes. Each instance maintains its own configuration and state; any command that uses `titanium` is kept isolated from `copper`.

>[!TIP]
>
>If using the base code with tags, make sure that all instance names that you set match all [SDK instance names](/help/tags/extensions/client/web-sdk/configure/general.md) when configuring the tag extension.

Following the naming pattern example of `titanium` and `copper` as Web SDK instances, you can independently execute commands:

```javascript
titanium("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg"
});

titanium("sendEvent", {
  data: {
    key: "value"
  }
});

copper("configure", {
  datastreamId: "f46e981f-fd03-4bdd-a9d9-73ce4447f870",
  orgId: "ADB3NUMBERSANDLETTERS2@AdobeOrg"
});

copper("sendEvent", {
  data: {
    key: "value"
  }
});
```

Be sure to execute the [`configure`](../js/commands/configure/overview.md) command for each instance before executing other commands on the same instance.

>[!IMPORTANT]
>
>To avoid conflicts with cookies, each Web SDK instance must have its own unique `datastreamId` and its own unique `orgId`.

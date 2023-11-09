---
title: Interact with Multiple Properties in the Adobe Experience Platform Web SDK
description: Learn how to interact with multiple Experience Platform Web SDK properties.
keywords: multiple properties;configure;sendEvent;edgeConfigId;orgId;
exl-id: e07afb0d-3490-414f-bc9c-f71bc04fe664
---
# Interact with multiple properties

There are certain cases where you might want to interact with two different properties on the same page. These cases include:

* Companies that have been acquired and are working on integrating their websites together
* Data-sharing relationships between multiple companies
* Customers who are testing new Adobe Solutions and don't want to disrupt their existing implementation

The SDK allows you to create a separate instance for each property by adding another name to the array in the base code. The following example provides two names, `mycustomname1` and `mycustomname2`.

```markup
<script>
  !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
  (window,["mycustomname1", "mycustomname2"]);
</script>
<script src="alloy.js" async></script>
```

As a result, the script creates two instances of the SDK. The global function for interacting with the first instance is named `mycustomname1` and the global function for interacting with the second instance is named `mycustomname2`.

By creating two separate instances, each can be configured for a different property. Any communication or data persistence that occurs due to interacting with `mycustomname1` is kept isolated from `mycustomname2`.

Following the above example, you can execute commands using each of the instances, as follows:

```javascript
mycustomname1("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg"
});

mycustomname1("sendEvent", {
  "data": {
    "key": "value"
  }
});

mycustomname2("configure", {
  "edgeConfigId": "f46e981f-fd03-4bdd-a9d9-73ce4447f870",
  "orgId": "ADB3NUMBERSANDLETTERS2@AdobeOrg"
});

mycustomname2("sendEvent", {
  "data": {
    "key": "value"
  }
});
```

Be sure to execute the `configure` command for each instance before executing other commands on the same instance.

## Limitations

To avoid conflicts with cookies, only one instance of Adobe Experience Platform [!DNL Web SDK] within a page can have a particular `edgeConfigId`. Similarly, only one instance of Adobe Experience Platform [!DNL Web SDK] can have a particular `orgId`.


The "base code" creates a global function named `alloy`. Use this function to interact with the SDK. If you would like to name the global function something else, change the `alloy` name as follows:

```markup
<script>
  !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
  (window,["mycustomname"]);
</script>
<script src="https://cdn1.adoberesources.net/alloy/2.14.0/alloy.min.js" async></script>
```

In this example, the global function is renamed `mycustomname`, instead of `alloy`.
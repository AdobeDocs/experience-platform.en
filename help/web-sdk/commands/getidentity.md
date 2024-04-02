---
title: getIdentity
description: Obtain a visitor's identity without sending event data.
exl-id: 28b99f62-14c4-4e52-a5c7-9f6fe9852a87
---
# `getIdentity`

The `getIdentity` command allows you to obtain a visitor ID without sending event data. When you run the `sendEvent` command, the Web SDK automatically obtains the visitor's identity if one is not already present.

If you require separate calls to generate a visitor ID and send data, you can use this command.

## Get identity using the Web SDK tag extension

The Web SDK tag extension does not offer this command through the tag extension UI. Use the custom code editor using JavaScript library syntax.

## Get identity using the Web SDK JavaScript library

Run the `getIdentity` command when calling your configured instance of the Web SDK. The following options are available when configuring this command:

* **`namespaces`**: An array of namespaces. The default value is `["ECID"]`. Valid values include `["ECID"]`, `null`, or `undefined`.
* **`edgeConfigOverrides`**: An [datastream configuration override object](datastream-overrides.md).

```js
alloy("getIdentity",{
  "namespaces": ["ECID"]
});
```

## Response object

If you decide to [handle responses](command-responses.md) with this command, the following properties are available in the response object:

* **`identity.ECID`**: A string containing the visitor's ECID.
* **`edge.regionID`**: An integer that represents the Edge Network region that the browser hit when acquiring an identity. It is the same as the legacy Audience Manager location hint.

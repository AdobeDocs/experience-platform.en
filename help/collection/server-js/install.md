---
title: Install the Server SDK
description: Install the Server SDK from npm and create an instance in your server application.
badge: Alpha
---
# Install the Server SDK

The Server SDK is available as the [`@adobe/alloy-node`](https://www.npmjs.com/package/@adobe/alloy-node) package on npm. Install it in your server project with npm, or with the package manager that your runtime uses:

```bash
npm install @adobe/alloy-node
```

The package is published as ECMAScript modules and runs in any server-side JavaScript runtime that meets the [requirements](overview.md#requirements). Load it with `import`:

```js
import { createInstance } from "@adobe/alloy-node";
```

>[!NOTE]
>
>The examples in this guide use Node.js. If you use a different runtime, replace Node.js-specific code, such as `process.env` and the `node:http` module, with your runtime's equivalents. See [Runtime support](overview.md#runtime-support).

## Create an instance {#create-instance}

The `createInstance` function returns an instance of the SDK that includes every available optional component (Consent and Personalization). Most implementations use this function.

```js
import { createInstance } from "@adobe/alloy-node";

const alloy = createInstance({ name: "alloy" });
```

The `createInstance` function accepts an optional object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| `name` | String | The prefix that the SDK adds to its log messages, such as `[alloy]`. Defaults to `"alloy"`. Set a different name if you run more than one instance in the same process and want to tell their logs apart. |
| `monitors` | Array | An array of monitoring hook objects. Each object can contain functions, such as `onInstanceCreated`, `onInstanceConfigured`, and `onBeforeCommand`, that the SDK calls as it runs. These hooks work the same way as [Web SDK monitoring hooks](/help/collection/js/monitoring-hooks.md). |
| `platformServices` | Object | Replaces one or more of the built-in services that the SDK uses for networking, storage, and cookies. Most implementations don't need this property. See [Platform services](concepts/platform-services.md). |

The returned instance exposes [methods](methods/overview.md), such as `configure`, `forRequest`, and `sendEvent`. Unlike the Web SDK, you call methods directly on the instance, for example `alloy.sendEvent({ ... })`, instead of passing the command name as a string.

## Create a custom instance {#custom-instance}

If you don't need every optional component, use `createCustomInstance` and pass only the components that you want. The `components` export contains each optional component:

| Component | Adds |
| --- | --- |
| `components.consent` | The [`setConsent`](methods/setconsent.md) method and the [`defaultConsent`](methods/configure/defaultconsent.md) configuration option. |
| `components.personalization` | The ability to request personalization with the [`personalization`](methods/sendevent/personalization.md) option of `sendEvent`. |

```js
import { createCustomInstance, components } from "@adobe/alloy-node";

// Includes consent, but not personalization
const alloy = createCustomInstance({
  components: [components.consent]
});
```

The Context, data collection, identity, and library information components are always included. When you leave out an optional component:

* Methods that the component provides still exist on the instance, but they reject when called. For example, `setConsent` rejects with an error whose message includes `The setConsent command does not exist`.
* Configuration options that the component provides are rejected by `configure`. For example, `defaultConsent` causes `configure` to reject with an `Unknown field` error.
* Options that the component reads in other methods are ignored. For example, `sendEvent` doesn't request personalization even if you set the `personalization` option.

`createCustomInstance` accepts the same `name`, `monitors`, and `platformServices` properties as `createInstance`.

## Send a test event {#test-event}

After you set up [authentication](authentication.md), you can confirm that your installation works by configuring the instance and sending one event. Store your credentials in environment variables instead of in source code.

```js
import { createInstance } from "@adobe/alloy-node";

const alloy = createInstance();

await alloy.configure({
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeCredentials: {
    clientId: process.env.ADOBE_CLIENT_ID,
    clientSecret: process.env.ADOBE_CLIENT_SECRET,
    scopes: process.env.ADOBE_SCOPES.split(",")
  }
});

const result = await alloy.sendEvent({
  xdm: {
    eventType: "web.webpagedetails.pageViews",
    identityMap: {
      Email: [{ id: "test-visitor@example.com", primary: true }]
    }
  }
});

console.log("Event sent", result);
```

If the event succeeds, the promise resolves. If it fails, the promise rejects with an error that describes the problem, such as invalid credentials or a missing primary identity. Set [`debugEnabled`](methods/configure/debugenabled.md) to `true` to log each step to the console.

>[!IMPORTANT]
>
>This test sends the event from the top-level instance, which keeps a single identity for the life of the process. In your application, call methods on a [`forRequest`](methods/forrequest.md) handle for each visitor's request instead. See [Instances and requests](concepts/instances-and-requests.md).

## Next steps {#next-steps}

* [Set up authentication](authentication.md)
* [Learn how instances and requests work](concepts/instances-and-requests.md)
* [Configure the SDK](methods/configure/overview.md)

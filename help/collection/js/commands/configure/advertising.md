---
title: advertising (Web SDK)
description: Configure Adobe Advertising settings in the Web SDK, including turning Advertising on or off at runtime.
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# `advertising` (Web SDK) {#advertising}

The `advertising` object configures the Web SDK integration with Adobe Advertising. Web SDK uses these settings to measure click-through and view-through conversions and to add advertising IDs to events.

* **Click-through conversions**: No configuration is required. When a visitor arrives on a page with an `s_kwcid` or `ef_id` query string parameter, Web SDK records a click-through conversion.
* **View-through conversions**: Requires at least one enabled advertiser in `advertiserSettings`. Web SDK collects the available advertising IDs and sends view-through conversions for those advertisers.

Web SDK does not process advertising conversions or set advertising cookies until the visitor gives consent. The Advertising component is included in the standard Web SDK library. If you [create a custom build](../../install/create-custom-build.md), include the Advertising component.

## Properties {#properties}

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| **`enabled`** | Boolean | `true` | Turns Adobe Advertising on or off at runtime. See [Turn off Advertising at runtime](#enabled). Available in Web SDK version 2.37.0 or later. |
| **`dspEnabled`** | Boolean | `false` | Set to `true` if you use Adobe Advertising Demand-side Platform (DSP). When `true`, view-through conversions include ID5 and RampID universal IDs if you set `id5PartnerId` or `rampIdJSPath`. |
| **`advertiserSettings`** | Array of objects | | The advertisers to measure view-through conversions for. Each object contains an `advertiserId` string and an `enabled` boolean, and both are required. Web SDK uses only advertisers with `enabled` set to `true`. |
| **`id5PartnerId`** | String | | Your organization's ID5 partner ID. This setting allows Web SDK to collect ID5 universal IDs. |
| **`rampIdJSPath`** | String | | The path to your organization's [!DNL LiveRamp RampID] JavaScript code (`ats.js`). This setting allows Web SDK to collect [!DNL RampID] universal IDs. |

## Example {#example}

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  advertising: {
    dspEnabled: true,
    advertiserSettings: [
      { advertiserId: "12345", enabled: true },
      { advertiserId: "67890", enabled: false }
    ],
    id5PartnerId: "1234",
    rampIdJSPath: "https://example.com/ats.js"
  }
});
```

## Turn off Advertising at runtime {#enabled}

Set `advertising.enabled` to `false` to turn off Adobe Advertising without removing the Advertising component from your library. When `enabled` is `false`, Web SDK:

* Sends no click-through or view-through conversions.
* Adds no advertising IDs to events, even when a `sendEvent` command sets [`handleAdvertisingData`](#handle-advertising-data).
* Loads no advertising scripts or iframes.
* Does not read or write advertising cookies. Existing advertising cookies are left unchanged.

Web SDK ignores the other properties in the `advertising` object while `enabled` is `false`.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  advertising: {
    enabled: false
  }
});
```

The `enabled` property accepts only boolean values. Other values, such as the strings `"true"` or `"false"`, cause the `configure` command to fail.

Use this property when you want to turn off Advertising without rebuilding your library, or to turn it on or off conditionally, such as for specific pages. To remove the Advertising code from your library entirely, exclude the Advertising component from a [custom build](../../install/create-custom-build.md) instead.

## Add advertising IDs to events {#handle-advertising-data}

By default, Web SDK does not add advertising IDs to events that you send using [`sendEvent`](../sendevent/overview.md). To add them, set `advertising.handleAdvertisingData` in the `sendEvent` command to one of the following values:

* **`"disabled"`**: The default value. Web SDK does not add advertising IDs to the event.
* **`"auto"`**: Web SDK adds advertising IDs that it has already collected, such as IDs from earlier conversions.
* **`"wait"`**: Web SDK also tries to collect advertising IDs that are not yet available, and waits briefly for them before sending the event.

```js
alloy("sendEvent", {
  xdm: {
    eventType: "web.webpagedetails.pageViews"
  },
  advertising: {
    handleAdvertisingData: "auto"
  }
});
```

Web SDK adds advertising IDs to an event only when the visitor has given consent, at least one advertiser is enabled in `advertiserSettings`, and the page URL does not contain click-through parameters.

## Configure Advertising using the Web SDK tag extension {#tag-extension}

These settings can be configured in the Web SDK tag extension using [Adobe Advertising settings](/help/tags/extensions/client/web-sdk/configure/advertising.md).

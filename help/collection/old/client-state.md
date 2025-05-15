---
title: Client state management
description: Learn how the Adobe Experience Platform Edge Network manages client state
seo-description: Learn how the Adobe Experience Platform Edge Network  manages client state
keywords: client;state;management;edge;network;gateway;api
exl-id: 798ecc52-1af1-4480-a2a3-3198a83538f8
---
# Client state management

The Edge Network itself is stateless (it does not maintain its own session). However, there are certain use-cases which require client-side state persistency, such as:

* Consistent device identification (see [visitor identification](visitor-identification.md))
* Collect and enforce user consent
* Keeping personalization session ID

The Edge Network uses a state management protocol, delegating the storage aspect to its client/SDK, and includes state entries in its responses. For browsers, the entries are stored as cookies.

The client responsibility is to store and include them in all subsequent requests. The client must also take care of proper expiration for entries, as instructed by the gateway. When the entries were stored as cookies, the browser does all this work automatically.

Although the state entries always have a plain `String` value (visible to the caller/SDK), you should not consume or tamper with the values in any way. The value structure/format or even the name itself might change at any point, which could lead to unexpected behavior for clients that use the state internally. The state is intended to always be consumed by the gateway itself or other edge services.

## Persisting client state as metadata

The state returned by the [!DNL Edge Network] in the response body is a `Handle` object with the type `state:store`.

```json
{
   "requestId":"421036b3-a7ff-480b-a9ab-30adba6eb4f0",
   "handle":[
      {
         "payload":[
            {
               "key":"kndctr_53A16ACB5CC1D3760A495C99_AdobeOrg_consent_check",
               "value":"1",
               "maxAge":7200,
               "attrs":{
                  "SameSite":"None"
               }
            },
            {
               "key":"kndctr_53A16ACB5CC1D3760A495C99_AdobeOrg_identity",
               "value":"CiY1NDc1ODIxNzIzODk5MDY5MzQzMTIzNjQ1NTczNzExNjE4OTA1MFINCLGOvszNLhABGAEgBKABsY6-zM0uqAGHz-z2y82cul3wAbGOvszNLg==",
               "maxAge":34128000,
               "attrs":{
                  "SameSite":"None"
               }
            },
            {
               "key":"kndctr_53A16ACB5CC1D3760A495C99_AdobeOrg_consent",
               "value":"general=in",
               "maxAge":15552000,
               "attrs":{
                  "SameSite":"None"
               }
            }
         ],
         "type":"state:store"
      }
   ]
}
```

| Attribute | Type | Description |
| --- | --- | --- |
| `key` | String | **Required**. The entry name. |
| `value` | String | *Optional*. The entry value. |
| `maxAge` | Integer | *Optional* The time (in seconds) until the entry expires. When missing, entries should be stored only for the current session. |
| `attrs` | `Map<String, String>` | *Optional*. An optional list of entry attributes. For all secure connections with a secure referer HTTP header, the `SameSite` attribute is set to `None`. |


To support multi-tagging (i.e. multiple SDK instances in the same property, which potentially reference different organizations), all state entries are automatically prefixed with `kndctr_` and the URL-safe organization ID.

When the client SDK receives a `state:store` handle in the response, it must do the following:

* Store entries client-side, respecting the expiration time supplied by the gateway.
* Load them from the client store and include all un-expired entries in the subsequent requests.

Here's an example of a request which passes in the client-side stored state:

```json
{
   "meta":{
      "state":{
         "entries":[
            {
               "key":"kndctr_53A16ACB5CC1D3760A495C99_AdobeOrg_consent_check",
               "value":"1"
            },
            {
               "key":"kndctr_53A16ACB5CC1D3760A495C99_AdobeOrg_personalization_sessionId",
               "value":"0a88f43e-044b-41a6-a4f3-6c2848bbc672"
            }
         ]
      }
   }
}
```

## Persisting client state in browser cookies

When working with browser clients, the Edge Network can automatically persist the entries as browser cookies. This allows transparent state storage support, since browsers respect the state management protocol by default.

Almost all entries are materialized as first party cookies when enabled and supported (see the note below), but the gateway could also store some third party cookies when the third party `adobedc.demdex.net` domain is used.

Since entries are always bound to a specific scope (device/application) by their definition, only the subset that is compatible with the current request context will be written by the Edge Network. Unwritten entries are
returned within a `state:store` handle.

As a general rule, application scoped entries are always written as first party cookies, while device scoped entries are written as third-party cookies. The decision is completely transparent to the caller, the gateway decides which entries can be written, depending on the call context.

The caller must explicitly enable support for storing client state as cookies, via the `meta.state.cookiesEnabled` flag:

```json
{
   "meta":{
      "state":{
         "cookiesEnabled":true,
         "domain":"foo.com"
      }
   }
}
```

| Attribute | Type | Description |
| --- | --- | --- |
| `cookiesEnabled` | Boolean | When set, enables support for cookies. Default value is `false`. |
| `domain`  | String | Required when `cookiesEnabled: true`. The top-level domain on which the cookies should be written. The Edge Network will use this value to decide if state can be persisted as cookies. |

Even if cookies support is enabled via the `cookiesEnabled` flag, the Adobe Experience Platform Edge Network will only write the state entries if the request top-level domain matches the `domain` specified by the caller. When there's a mismatch, entries are returned in a `state:store` handle.

The first-party cookies cannot be written (even if support is enabled) in the following cases:

* The request is coming on the third-party `adobedc.demdex.net` domain.
* The request is coming on a first-party `CNAME` domain, different from the one specified by the caller in `meta.state.domain`.

## Cookie security

All cookies have the [Secure flag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies) enabled whenever possible.

All secure cookies have the [SameSite attribute](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) set to `None`, meaning that cookies are sent in all contexts, both 1st party and cross-origin.

* For the first-party cookies (`kndcrt_*`), the `Secure` flag is only set when the request context is secure (HTTPS) and when referrer ([Referer HTTP Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)) is also HTTPS. If the referrer is not secure (HTTP), the `Secure` flag is omitted to permit the Web SDK to read them. A secure cookie cannot be read from an unsecure context.
* For the third-party cookie (demdex), the `Secure` flag is always set, since all requests are HTTPS, so the request context is secure, and this cookie is never read from JavaScript.

The `Secure` flag is not present in the [metadata representation of cookies](#state-as-metadata). Only the `SameSite` attribute is included. In this case, it is the client's responsibility to correctly set the `Secure` flag whenever the `SameSite` attribute is present. Cookies with `SameSite=None` must also specify the `Secure` attribute, since they require a secure context (HTTPS).

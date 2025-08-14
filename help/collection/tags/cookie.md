---
title: cookie
description: Manually write, edit, or delete cookies for the tag property.
---
# `cookie`

The `_satellite.cookie` object contains methods that allow you to write, edit, or delete cookies that your tag rules can reference. It is a partial copy of [`js-cookie`](https://github.com/js-cookie/js-cookie), containing many core features of that library.

## `cookie.set()`

The `set()` method writes a cookie that your tag property can reference.

```ts
_satellite.cookie.set(name: string, value: string, attributes?: {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
}): string
```

The following method parameters are available:

| Name | Type | Required | Description |
|---|---|---|---|
| **`name`** | `string` | Yes | The name of the cookie. |
| **`value`** | `string` | Yes | The value of the cookie |
| **`attributes`** | `object` | No | Additional attributes that you want the cookie to have. |

The `attributes` object supports the following properties:

| Attribute name | Type | Required | Default | Description |
|---|---|---|---|---|
| **`expires`** | `number` or [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | No | Cookie expires at end of browser session | The number of days that you want the cookie to expire. |
| **`path`** | `string` | No | Cookie visible site-wide | Where on your domain that the cookie is visible. |
| **`domain`** | `string` | No | Cookie visible to domain it was created under | A valid domain (with or without a subdomain) where the cookie is visible. If a domain is included without a subdomain, the cookie is visible to all subdomains under that domain. |
| **`secure`** | `boolean`| No | No attribute set | Determines if the cookie requires a secure protocol (`https://`). If omitted, there is no secure protocol requirement. |
| **`sameSite`** | `'Strict' \| 'Lax' \| 'None'` | No | No attribute set | Lets you set a cookie's [`sameSite`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) attribute. If you set `sameSite` to `None`, you must also set `secure` to `true`. |

```js
// Sets a cookie valid across the entire site, expires on session close
_satellite.cookie.set('simple_session_cookie', 'value');

// Sets a cookie that expires 7 days from now, valid across the entire site
_satellite.cookie.set('seven_day_cookie', 'value', { expires: 7 });

// Sets a cookie that expires 14 days from now, valid only on the current page
_satellite.cookie.set('page_specific_cookie', 'value', { expires: 14, path: '/' });

// Cross-site compatible cookie (requires HTTPS)
_satellite.cookie.set('cross_site_cookie', 'value', { secure: true, sameSite: 'None' });
```

Invoking this method writes the desired cookie and returns the serialized cookie string that was written. This string is primarily used for debugging or logging purposes.

```text
'written_cookie=value; path=/'
```

>[!TIP]
>
>Previous versions of the tag object used `_satellite.setCookie()`. The `setCookie()` method is deprecated in favor of `_satellite.cookie.set()`.

## `cookie.get()`

The `get()` method returns a cookie value.

```ts
_satellite.cookie.get(name: string): string | undefined;
```

| Name | Type | Required | Description |
|---|---|---|---|
| **`name`** | `string` | Yes | The cookie name that you want to retrieve the value from (case-sensitive). |

If the cookie name exists, returns the cookie value. If the cookie name does not exist, returns `undefined`.

>[!TIP]
>
>Previous versions of the tag object used `_satellite.getCookie()`. The `getCookie()` method is deprecated in favor of `_satellite.cookie.get()`.

## `cookie.remove()`

The `remove()` method deletes a cookie that you have set.

```ts
_satellite.cookie.remove(name: string, attributes?: {
  path?: string;
  domain?: string;
}): void
```

| Name | Type | Required | Description |
|---|---|---|---|
| **`name`** | `string` | Yes | The cookie name that you want to remove. |
| **`attributes`** | `object` | No | The attributes associated with the cookie that you want to remove. If you set a cookie using the `path` or `domain` attributes, include those same attributes when removing the cookie. Failure to include these attributes does not remove the cookie. |

```js
// Creates a session cookie
_satellite.cookie.set('session_cookie', 'Cookie value');

// Removes the above cookie
_satellite.cookie.remove('session_cookie');

// Creates a cookie that is only visible on the current page
_satellite.cookie.set('page_specific_cookie', 'value', { path: '/' });

// This remove method does nothing because it does not match the path and domain attributes of the cookie set
_satellite.cookie.remove('page_specific_cookie');

// This remove method works correctly for the page-specific cookie
_satellite.cookie.remove('page_specific_cookie', { path: '/' });
```

>[!TIP]
>
>Previous versions of the tag object used `_satellite.removeCookie()`. The `removeCookie()` method is deprecated in favor of `_satellite.cookie.remove()`.

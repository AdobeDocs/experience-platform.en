---
title: cookie
description: Manually write, edit, or delete cookies for the tag property.
---
# `cookie`

The `_satellite.cookie` object contains methods that allow you to write, edit, or delete cookies that your tag rules can reference. It is a partial copy of [`js-cookie`](https://github.com/js-cookie/js-cookie), containing many core features of that library.

## `cookie.set()`

The `set()` method writes a cookie that your tag property can reference.

```js
// Sets a cookie valid across the entire site, expires on session close
_satellite.cookie.set('Simple session cookie', 'Cookie value');

// Sets a cookie that expires 7 days from now, valid across the entire site
_satellite.cookie.set('Seven-day cookie', 'Cookie value', { expires: 7 });

// Sets a cookie that expires 14 days from now, valid only on the current page
_satellite.cookie.set('Page-specific cookie', 'Cookie value', { expires: 14, path: '' });

// Sets a secure cookie with sameSite set to 'strict'
_satellite.cookie.set('Secure cookie', 'Cookie value', { secure: true, sameSite: 'strict' });
```

The following method parameters are available:

* **`name`**: The name of the cookie.
* **`value`**: The value of the cookie.
* **`attributes`**: Additional attributes that you want the cookie to have. Valid attributes include:
  * `expires`: The number of days that you want the cookie to expire. A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object is also allowed. If this attribute is omitted, the cookie expires at the end of a browser session.
  * `path`: A string that indicates where the cookie is visible. If omitted, the cookie is visible site-wide.
  * `domain`: A string that indicates a valid domain (or subdomain) where the cookie is visible. If a domain is included without a subdomain, the cookie is visible to all subdomains under that domain. If omitted, the cookie is visible to the domain where the cookie was created.
  * `secure`: A boolean that determines if the cookie requires a secure protocol (`https://). If omitted, there is no secure protocol requirement.
  * `sameSite`: A string that lets you set a cookie's [`sameSite`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) attribute. Valid values include `strict`, `lax`, and `none`. If omitted, the attribute is not set.

>[!TIP]
>
>Previous versions of the tag object used `_satellite.setCookie()`. The `setCookie()` method is deprecated in favor of `_satellite.cookie.set()`.

## `cookie.get()`

The `get()` method returns a cookie value. The only parameter is a string containing the cookie name that you want to retrieve the value from. Cookie names are case-sensitive. Retrieving a value from a cookie that does not exist returns the value `undefined`.

```js
_satellite.cookie.get('Example cookie');
```

>[!TIP]
>
>Previous versions of the tag object used `_satellite.getCookie()`. The `getCookie()` method is deprecated in favor of `_satellite.cookie.get()`.

## `cookie.remove()`

The `remove()` method deletes a cookie that you have set.

>[!IMPORTANT]
>
>If you set a cookie using attributes, make sure that you include those same attributes when removing a cookie.

```js
// Creates a session cookie
_satellite.cookie.set('Session cookie', 'Cookie value');

// Removes the above cookie
_satellite.cookie.remove('Session cookie');

// Creates a cookie that is only visible on the current page
_satellite.cookie.set('Page-specific cookie', 'Cookie value', { path: '' });

// This remove method does nothing because it does not match the attributes of the cookie set
_satellite.cookie.remove('Page-specific cookie');

// This remove method works correctly for the page-specific cookie
_satellite.cookie.remove('Page-specific cookie', { path: '' });
```

Available fields include:

* **`name`**: The name of the cookie you want to remove.
* **`attributes`**: The attributes matching the cookie that you want to remove. See [`cookie.set()`](#cookieset) above.

>[!TIP]
>
>Previous versions of the tag object used `_satellite.removeCookie()`. The `removeCookie()` method is deprecated in favor of `_satellite.cookie.remove()`.

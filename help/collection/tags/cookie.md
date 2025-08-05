## `cookie` {#cookie}

`_satellite.cookie` contains functions for reading and writing cookies. It is an exposed copy of the third-party library js-cookie. For details on more advanced usage of this library, please review the [js-cookie documentation](https://www.npmjs.com/package/js-cookie#basic-usage).

### Set a cookie {#cookie-set}

To set a cookie, use `_satellite.cookie.set()`.

**Code**

```javascript
_satellite.cookie.set(name: string, value: string[, attributes: Object])
```

>[!NOTE]
>
>In the old [`setCookie`](#setCookie) method of setting cookies, the third (optional) argument to this function call was an integer that indicated the cookie's expiration time in days. In this new method, an "attributes" object is accepted as a third argument instead. In order to set an expiration for a cookie using the new method, you must provide an `expires` property in the attributes object and set it to the desired value. This is demonstrated in the example below.

**Example**

The following function call writes a cookie that expires in one week.

```javascript
_satellite.cookie.set('product', 'Circuit Pro', { expires: 7 });
```

### Retrieve a cookie {#cookie-get}

To retrieve a cookie, use `_satellite.cookie.get()`.

**Code**

```javascript
_satellite.cookie.get(name: string) => string
```

**Example**

The following function call reads a previously set cookie.

```javascript
var product = _satellite.cookie.get('product');
```

### Remove a cookie {#cookie-remove}

To remove a cookie, use `_satellite.cookie.remove()`.

**Code**

```javascript
_satellite.cookie.remove(name: string)
```

**Example**

The following function call removes a previously set cookie.

```javascript
_satellite.cookie.remove('product');
```

## `setCookie` {#setCookie}

>[!IMPORTANT]
>
>This method has been deprecated. Please use [`_satellite.cookie.set()`](#cookie-set) instead.

**Code**

```javascript
_satellite.setCookie(name: string, value: string, days: number)
```

**Example**

```javascript
_satellite.setCookie('product', 'Circuit Pro', 3);
```

This sets a cookie in the user's browser. The cookie will persist for the number of days specified.

## `readCookie`

>[!IMPORTANT]
>
>This method has been deprecated. Please use [`_satellite.cookie.get()`](#cookie-get) instead.

**Code**

```javascript
_satellite.readCookie(name: string) => string
```

**Example**

```javascript
var product = _satellite.readCookie('product');
```

This reads a cookie from the user's browser.

## `removeCookie`

>[!NOTE]
>
>This method has been deprecated. Please use [`_satellite.cookie.remove()`](#cookie-remove) instead.

**Code**

```javascript
_satellite.removeCookie(name: string)
```

**Example**

```javascript
_satellite.removeCookie('product');
```

This removes a cookie from the user's browser.
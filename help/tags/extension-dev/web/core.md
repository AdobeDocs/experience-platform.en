---
title: Core Library Modules for Web Extensions
description: Learn about the core library modules you can use within your web extensions.
exl-id: 7fb63208-aed0-4add-b6da-8e4aea063d0a
---
# Core library modules for web extensions

This document provides a list of core library modules that you may use within your web extensions. You may access these modules using `require('@adobe/{MODULE}')`, where `{MODULE}` is the name of the core module want to use.

## [!DNL reactor-object-assign]

`reactor-object-assign` mimics the native [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) method by copying properties from source objects to a target object.

```javascript
var objectAssign = require('@adobe/reactor-object-assign');
var all = objectAssign({ a: 'a' }, { b: 'b' });
```

## [!DNL reactor-cookie]

The `reactor-cookie` object is a utility for reading and writing cookies. See the [js-cookie npm package](https://www.npmjs.com/package/js-cookie) for more information.

```javascript
var cookie = require('@adobe/reactor-cookie');
cookie.set('foo', 'bar');
console.log(cookie.get('foo'));
cookie.remove('foo');
```

### [!DNL reactor-document]

`reactor-document` represents the [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object. This can be beneficial when testing the module by allowing tests to inject a mock `document` object using utilities like [`inject-loader`](https://www.npmjs.com/package/inject-loader).

```javascript
var document = require('@adobe/reactor-document');
console.log(document.location);
```

### [!DNL reactor-query-string]

`reactor-query-string` is a utility for parsing and serializing [query strings](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search).

```javascript
var queryString = require('@adobe/reactor-query-string');
var parsed = queryString.parse(location.search);
console.log(parsed.campaign);
var obj = {
  campaign: 'Campaign A'
};
var stringified = queryString.stringify(obj);
```

The utility has the following methods:

* `queryString.parse({STRING})`: Parses a query string into an object. Leading `?`, `#`, and `&` characters on the query string are ignored.
* `queryString.stringify({OBJECT})`: Stringifies an object into a query string.

### [!DNL reactor-load-script]

`reactor-load-script` is a function that loads a script when given a URL. A script tag will be created and placed within the `head` node of the document. A [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) will be returned which you may use to determine when loading of the script succeeds or fails.

```javascript
var loadScript = require('@adobe/reactor-load-script');
var url = 'http://code.jquery.com/jquery-3.1.1.js';
loadScript(url).then(function() {
  // Do something ...
})
```

### [!DNL reactor-promise]

`reactor-promise` is a constructor that mimics the [Promise API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) native in ECMAScript 6. If the native Promise API is available, it will be returned instead.

```javascript
var Promise = require('@adobe/reactor-promise');
new Promise(function(resolve) {
  resolve();
}, function(err) {
  console.error(err);
});
```

### [!DNL reactor-window]

`reactor-window` represents the [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object. This can be beneficial when testing the module by allowing tests to inject a mock `Window` object using utilities like [`inject-loader`](https://www.npmjs.com/package/inject-loader).

```javascript
var window = require('@adobe/reactor-window');
console.log(window.document);
```

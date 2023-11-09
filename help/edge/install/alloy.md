## Option 2: Installing the prebuilt standalone version

The prebuilt version is available on a CDN. You can reference the library on the CDN directly on your page, or download and host it on your own infrastructure. It is available in minified and unminified formats. The unminified version is helpful for debugging purposes.

URL structure: https://cdn1.adoberesources.net/alloy/[VERSION]/alloy.min.js OR alloy.js for the non-minified version.

For example:


* Minified: [https://cdn1.adoberesources.net/alloy/2.14.0/alloy.min.js](https://cdn1.adoberesources.net/alloy/2.14.0/alloy.min.js)
* Un-minified: [https://cdn1.adoberesources.net/alloy/2.14.0/alloy.js](https://cdn1.adoberesources.net/alloy/2.14.0/alloy.js)


### Adding the code {#adding-the-code}

The prebuilt standalone version requires a "base code" added directly to the page. Copy and paste the following "base code" as high as possible in the `<head>` tag of your HTML:

```markup
<script>
  !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
  (window,["alloy"]);
</script>
<script src="https://cdn1.adoberesources.net/alloy/2.14.0/alloy.min.js" async></script>
```


>[!IMPORTANT]
>
>To avoid potential problems, use a name containing at least one character that is not a digit and that doesn't conflict with the name of a property already found on `window`.

This base code, in addition to creating a global function, also loads additional code contained within an external file \(`alloy.js`\) hosted on a server. By default, this code is loaded asynchronously to allow your webpage to be as performant as possible. This is the recommended implementation.

### Loading the JavaScript file synchronously {#loading-javascript-synchronously}

As explained in the section [Adding the code](#adding-the-code), the base code you have copied and pasted into your website's HTML loads an external file. The external file contains the core functionality of the SDK. Any command you attempt to execute while this file loads is queued and then processed after the file is loaded. Loading the file asynchronously is the most performant method of installation.

Under certain circumstances, however, you might want to load the file synchronously \(more details about these circumstances will be documented later\). Doing so blocks the rest of the HTML document from being parsed and rendered by the browser until the external file has been loaded and executed. This additional delay before displaying primary content to users is typically discouraged, but can make sense depending on the circumstances.

To load the file synchronously instead of asynchronously, remove the `async` attribute from the second `script` tag as shown below:

```markup
<script>
  !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
  (window,["alloy"]);
</script>
<script src="https://cdn1.adoberesources.net/alloy/2.14.0/alloy.min.js"></script>
```
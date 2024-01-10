---
title: Manage Flicker for Personalized Experiences Using the Adobe Experience Platform Web SDK
description: Learn how to use the Adobe Experience Platform Web SDK to manage flicker on user experiences.
keywords: target;flicker;prehidingStyle;asynchronously;asynchronous;
exl-id: f4b59109-df7c-471b-9bd6-7082e00c293b
---
# Manage flicker

When trying to render personalization content, the SDK has to ensure there is no flicker. Flicker, also called FOOC (Flash of Original Content), is when an original content is briefly displayed before the alternative appears during testing/personalization. The SDK tries to apply CSS styles to elements of the page to ensure those elements are hidden until the personalization content is rendered successfully.

How you manage flicker depends on if you deploy the Web SDK synchronously or asynchronously. Check the `<head>` tag where you deploy `alloy.js` or the tag loader. The presence of the `async` attribute in the `<script>` tag determines if the Web SDK loads asynchronously.

```html
<!-- This tag loads synchronously -->
<script src="https://assets.adobedtm.com/[...]/launch-example.min.js"></script>

<!-- This tag loads asynchronously -->
<script src="https://assets.adobedtm.com/[...]/launch-example.min.js" async></script>

<!-- This library loads synchronously -->
<script src="https://cdn1.adoberesources.net/alloy/2.14.0/alloy.min.js"></script>

<!-- This library loads asynchronously -->
<script src="https://cdn1.adoberesources.net/alloy/2.14.0/alloy.min.js" async></script>
```

## Manage flicker for synchronous deployments

Synchronous flicker management is split into three phases:

1. Prehiding
1. Preprocessing
1. Rendering

During the **prehiding phase**, the SDK uses the [`prehidingStyle`](../commands/configure/prehidingstyle.md) configuration property to create an HTML style tag and append it to the DOM to make sure that the desired sections of the page are hidden. If you are unsure which portions of the page will be personalized, it is recommended to set `prehidingStyle` to `body { opacity: 0 !important }`. This ensures that the whole page is hidden. This, however has the downside of leading to worse page rendering performance reported by tools like Lighthouse, Web Page Tests, etc. To have the best page rendering performance, it is recommended to set `prehidingStyle` to a list of container elements that contain the portions of the page that will be personalized.

Assuming you have an HTML page like the one below and you know that only `bar` and `bazz` container elements will be ever personalized:

```html
<html>
  <head>
  </head>
  <body>
    <div id="foo">
      Foo foo foo
    </div>

    <div id="bar">
      Bar bar bar
    </div>

    <div id="bazz">
      Bazz bazz bazz
    </div>
  </body>
</html>
```

Then the `prehidingStyle` should be set to something like `#bar, #bazz { opacity: 0 !important }`.

Once the SDK has received personalized content from the server, the **preprocessing phase** starts. During this phase, the response is preprocessed, making sure that elements that have to contain personalized content are hidden. After these elements are hidden, the HTML style tag that has been created based on the `prehidingStyle` configuration option is removed and the HTML body or the hidden container elements are shown.

After all the personalization content has been rendered successfully, or if there was any error, the **rendering phase** starts. All previously hidden elements are shown to make sure that there are no hidden elements on the page that were hidden by the SDK.

## Manage flicker for asynchronous deployments

The recommendation is to always load the SDK asynchronously to get the best page rendering performance. However, this has some implications for the rendering of personalized content. When the SDK is loaded asynchronously, it is required to use the prehiding snippet. The prehiding snippet must be added before the SDK in the HTML page. Here is an example snippet that hides the entire body:

```html
<script>
  !function(e,a,n,t){
    if (a) return;
    var i=e.head;if(i){
    var o=e.createElement("style");
    o.id="alloy-prehiding",o.innerText=n,i.appendChild(o),
    setTimeout(function(){o.parentNode&&o.parentNode.removeChild(o)},t)}}
    (document, document.location.href.indexOf("adobe_authoring_enabled") !== -1, "body { opacity: 0 !important }", 3000);
</script>
```

To make sure that the HTML body or the container elements are not hidden for an extended period of time, the prehiding snippet uses a timer that by default removes the snippet after `3000` milliseconds. The `3000` milliseconds is the maximum wait time. If the response from the server has been received and processed sooner, then the prehiding HTML style tag is removed as soon as possible.

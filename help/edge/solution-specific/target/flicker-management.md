---
title: Managing Flicker for Personalized Experiences
seo-title: Adobe Experience Platform Web SDK managing flicker
description: Learn how to manage flicker on user experiences
seo-description: Learn how to manage flicker with the Experience Platform Web SDK properties
keywords: target;flicker;prehidingStyle;asynchronously;asynchronous;
---

# Managing flicker

When trying to render personalization content, the SDK has to ensure there is no flicker. Flicker, also called FOOC (Flash of Original Content), is when an original content is briefly displayed before the alternative appears during testing/personalization. The SDK tries to apply CSS styles to elements of the page to ensure those elements are hidden until the personalization content is rendered successfully.

The flicker management functionality has a few phases:

1. Prehiding
1. Preprocessing
1. Rendering

## Prehiding

During the prehiding phase, the SDK uses the `prehidingStyle` configuration option to create an HTML style tag and append it to the DOM to make sure that big portions of the page are hidden. If you are unsure which portions of the page will be personalized, it is recommended to set `prehidingStyle` to `body { opacity: 0 !important }`. This ensures that the whole page is hidden. This, however has the downside of leading to worse page rendering performance reported by tools like Lighthouse, Web Page Tests, etc. To have the best page rendering performance, it is recommended to set `prehidingStyle` to a list of container elements that contain the portions of the page that will be personalized.

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

## Preprocessing

The preprocessing phase kicks in once the SDK has received the personalized content from the server. During this phase, the response is preprocessed, making sure that elements that have to contain personalized content are hidden. After these elements are hidden, the HTML style tag that has been created based on the `prehidingStyle` configuration option is removed and the HTML body or the hidden container elements are shown.

## Rendering

After all the personalization content has been rendered successfully, or if there was any error, all previously hidden elements are shown to make sure that there are no hidden elements on the page that were hidden by the SDK.

## Managing flicker when SDK is loaded asynchronously

The recommendation is to always load the SDK asynchronously to get the best page rendering performance. However, this has some implications for the rendering of personalized content. When the SDK is loaded asynchronously, it is required to use the prehiding snippet. The prehiding snippet must be added before the SDK in the HTML page. Here is an example snippet that hides the entire body:

```html
<script>
  !function(e,a,n,t){
    if (a) return;
    var i=e.head;if(i){
    var o=e.createElement("style");
    o.id="alloy-prehiding",o.innerText=n,i.appendChild(o),
    setTimeout(function(){o.parentNode&&o.parentNode.removeChild(o)},t)}}
    (document, document.location.href.indexOf("mboxEdit") !== -1, "body { opacity: 0 !important }", 3000);
</script>
```

To make sure that the HTML body or the container elements are not hidden for an extended period of time, the prehiding snippet uses a timer that by default removes the snippet after `3000` milliseconds. The `3000` milliseconds is the maximum wait time. If the response from the server has been received and processed sooner, then the prehiding HTML style tag is removed as soon as possible.

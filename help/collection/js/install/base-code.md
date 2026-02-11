---
title: Base code
description: Queue commands (bootstrap) while the data collection library loads asynchronously.
---
# Base code

The base code enables bootstrapping by queuing commands while the Adobe Experience Platform Web SDK loads asynchronously. After the base code runs, you can immediately call any command like [`configure`](../commands/configure/overview.md) or [`sendEvent`](../commands/sendevent/overview.md) without worrying about race conditions or the timing of the library when it is finished loading. When the Web SDK finishes loading, queued commands execute in a first-in, first-out order (the same order that they were queued).

Commands return Promises, even when queued. If a command is queued, the Promise resolves or rejects after the command runs when the Web SDK finishes loading. If the Web SDK never finishes loading (for example, the library fails to load), queued Promises remain pending.

## Add the base code

Place the base code as high as possible in the `<head>` tag, before any scripts that might call the Web SDK.

```html
<script>
  !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n.setTimeout(function(){n[o].q.push([i,l,u])})})},n[o].q=[])})}
  (window,["alloy"]);
</script>
```

After adding the base code, load the Web SDK using your chosen method ([JavaScript library loader](library.md) or [Tags embed code](/help/tags/extensions/client/web-sdk/getting-started.md)). For tag-based implementations, the base code is supported in the Web SDK tag extension 2.34.0 and later.

This base code is **not** required in the following scenarios:

* If you load the JavaScript library synchronously. Synchronous loading blocks parsing while the library is fetched and executed.
* If using the tag extension, all calls to the Web SDK are made within tag rules or actions. You only need to include the base code if your implementation references the Web SDK outside of your tags library. Most tag implementations typically do not call the Web SDK outside of the tags library, so most tag implementations do not require the base code.

## Examples

See the comments within this code example to understand the timing of how commands are queued and resolved. This example applies to both the JavaScript library and tag extension:

```html
<head>
  <script>
    // Calls made before the base code runs are not captured (alloy is not yet defined).
    // Always make sure that the base code runs before any attempt to call commands.
    // alloy("getLibraryInfo").then(console.log).catch(console.error);
  </script>

  <!-- Base code -->
  <script>
    !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
    []).push(o),n[o]=function(){var u=arguments;return new Promise(
    function(i,l){n.setTimeout(function(){n[o].q.push([i,l,u])})})},n[o].q=[])})}
    (window,["alloy"]);
  </script>

  <!-- Queued command -->
  <script>
    alloy("getLibraryInfo").then(result => {
      console.log("Queued call resolved:", result);
    }).catch(console.error);
  </script>

  <!-- Load the Web SDK using the JavaScript loader -->
  <script src="https://cdn1.adoberesources.net/alloy/<VERSION>/alloy.min.js" async></script>
  <!-- or the tag extension -->
  <!-- <script src=".../launch-<ENV>.min.js" async></script> -->

  <!-- Another call (queued if the library is still loading; immediate if it is ready) -->
  <script>
    alloy("getLibraryInfo").then(result => {
      console.log("Immediate call resolved:", result);
    }).catch(console.error);
  </script>
</head>
```

## Rename SDK instance

You can rename the global function that you call by modifying the last line of the base code. Change:

```js
(window,["alloy"]);
```

To:

```js
(window,["ingot"]);
```

This change allows you to call commands using `ingot` instead of `alloy`:

```js
ingot("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg"
});
```

## Multiple SDK instances

You can optionally use the base code to configure more than one SDK instance on a page. See [Use multiple Web SDK instances](../../use-cases/multiple-instances.md) for more information.

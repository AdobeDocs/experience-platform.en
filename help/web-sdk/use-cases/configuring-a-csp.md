---
title: Configuring a CSP
seo-title: Configuring a CSP for Adobe Experience Platform Web SDK
description: Learn how to configure a CSP for the Experience Platform Web SDK
seo-description: Learn how to configure a CSP for the Experience Platform Web SDK
keywords: configuring;configuration;SDK;edge;Web SDK;configure;context;web;device;environment;web sdk settings;content security policy;
exl-id: 661d0001-9e10-479e-84c1-80e58f0e9c0b
---
# Configuring a CSP

A [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) (CSP) is used to restrict the resources a browser is allowed to use. The CSP can also limit the functionality of script and style resources. Adobe Experience Platform Web SDK does not require a CSP, but adding one can reduce the attack surface to prevent against malicious attacks.

The CSP needs to reflect how [!DNL Platform Web SDK] is deployed and configured. The following CSP shows what changes may be necessary for the SDK to function properly. Additional CSP settings will likely be required, depending on your specific environment.

## Content security policy example

The following examples show how to configure a CSP.

### Allow access to the edge domain

```
default-src 'self';
connect-src 'self' EDGE-DOMAIN
```

In the above example, `EDGE-DOMAIN` should be replaced with the first-party domain. The first-party domain is configured for the [edgeDomain](../commands/configure/edgedomain.md) setting. If no first-party domain has been configured, `EDGE-DOMAIN` should be replaced with `*.adobedc.net`. If visitor migration is turned on using [idMigrationEnabled](../commands/configure/idmigrationenabled.md), the `connect-src` directive also needs to include `*.demdex.net`.

### Use NONCE to allow inline script and style elements

[!DNL Platform Web SDK] can modify page content and must be approved to create inline script and style tags. To accomplish this, Adobe recommends using a nonce for the [default-src](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src) CSP directive. A nonce is a server-generated cryptographically strong random token that is generated once per each unique page view.

```
default-src 'nonce-SERVER-GENERATED-NONCE'
```

In addition the CSP nonce needs to be added as an attribute to the [!DNL Platform Web SDK] [base code](../install/library.md) script tag. [!DNL Platform Web SDK] will then use that nonce when adding inline script or style tags to the page:

```
<script nonce="SERVER-GENERATED-NONCE">
  !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
  (window,["alloy"]);
</script>
```

If a nonce is not used, the other option is to add `unsafe-inline` to the `script-src` and `style-src` CSP directives:

```
script-src 'unsafe-inline'
style-src 'unsafe-inline'
```

>[!NOTE]
>
>Adobe does **not** recommend specifying `unsafe-inline` because it allows for any script to run on the page, which limits the benefits of the CSP.

## Configure a CSP for In-App Messaging {#in-app-messaging}

When you configure [Web In-App Messaging](../personalization/web-in-app-messaging.md), you must inclde the following directive in your CSP:

```
default-src  blob:;
```
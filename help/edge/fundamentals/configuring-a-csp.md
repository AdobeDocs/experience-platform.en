---
title: Configuring a CSP
seo-title: Configuring a CSP for Adobe Experience Platform Web SDK
description: Learn how to configure a CSP for the Experience Platform Web SDK
seo-description: Learn how to configure a CSP for the Experience Platform Web SDK
keywords: configuring;configuration;SDK;edge;Web SDK;configure;context;web;device;environment;web sdk settings;content security policy;

---

# Configuring a CSP

A [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) (CSP) is used to restrict the resources a browser is allowed to use. The CSP can also limit the functionality of script and style resources. The Adobe Experience Platform Web SDK does not require a CSP, but adding one can reduce the attack surface to prevent against malicious attacks.

The CSP needs to reflect how the [!DNL Platform Web SDK] is deployed and configured. The following CSP shows what is needed to include for the SDK. Additional CSP settings will likely be required, depending on your specific environment.

## Content Security Policy Example

The following examples show how to configure a CSP.

### EDGE-DOMAIN

```
default-src 'self';
connect-src 'self' EDGE-DOMAIN
```

`EDGE-DOMAIN` is the first-party domain configured with the `edgeDomain` setting, or `*.adobedc.net` if `edgeDomain` has not been specified. If visitor migration is turned on using `idMigrationEnabled`, the `connect-src` directive also needs to include `*.demdex.net`.

In addition, the [!DNL Platform Web SDK] must be approved to create inline script and style tags. To accomplish this, Adobe recommends using a nonce for the [default-src](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src) CSP directive. A nonce is a server-generated cryptographically strong random token that is generated once per each unique page view.

### SERVER-GENERATED-NONCE

```
default-src 'nonce-SERVER-GENERATED-NONCE'
```

The CSP nonce needs to be added as an attribute in the [!DNL Platform Web SDK] script tag. The [!DNL Platform Web SDK] uses that nonce when adding additional inline script or style tags to the page:

```
<script nonce="SERVER-GENERATED-NONCE" src="https://cdn1.adoberesources.net/alloy/2.3.0/alloy.min.js" async></script>
```

If a nonce is not used, the other option is to add `unsafe-inline` to the `script-src` and `style-src` CSP directives:

```
script-src 'unsafe-inline'
style-src 'unsafe-inline'
```

>[!NOTE]
>
>Adobe does **not** recommend specifying `unsafe-inline` because it allows for any script running on the page to inject other scripts, which limits the benefits of the CSP.

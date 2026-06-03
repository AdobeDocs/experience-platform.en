---
title: Content Security Policy (CSP) Support
description: Learn how to deal with Content Security Policy (CSP) restrictions when integrating your website with tags in Adobe Experience Platform.
exl-id: 9232961e-bc15-47e1-aa6d-3eb9b865ac23
TQID: https://experienceleague.adobe.com/pIeubuRMJoFa7XJkDscjwflNsOjXc9JjCjlehnmXYtc
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: d556b755-390a-43f0-be32-a08cf6236126
    internal-label: Configuration
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Content Security Policy (CSP) support

A Content Security Policy (CSP) is a security feature that helps prevent cross-site scripting attacks (XSS). This happens when the browser is tricked into running malicious content that appears to come from a trusted source but is really coming from somewhere else. CSPs allow the browser (on behalf of the user) to verify that the script is actually coming from a trusted source.

CSPs are implemented by adding a `Content-Security-Policy` HTTP header to your server responses, or by adding a configured `<meta>` element in the `<head>` section of your HTML files.

>[!NOTE]
>
> For more detailed information on CSP, refer to the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

Tags in Adobe Experience Platform are a tag management system that is designed to dynamically load scripts on your website. A default CSP blocks these dynamically loaded scripts due to potential security problems. This document provides guidance on how to configure your CSP to allow dynamically loaded scripts from tags.

If you want tags to work with your CSP, there are two main challenges to overcome:

* **The source for your tag library must be trusted.** If this condition is not met, the tag library and other required JavaScript files are blocked by the browser and won't load on the page.
* **Inline scripts must be allowed.** If this condition is not met, Custom Code rule actions are blocked on the page and won't execute properly.

Increased security requires an increased amount of work on behalf of the content creator. If you want to use tags and have a CSP in place, you have to address both of these issues without incorrectly marking other scripts as safe. The rest of this document provides guidance on how to achieve this.

## Add tags as a trusted source

When using a CSP, you must include any trusted domains within the value of the `Content-Security-Policy` header. The value you must provide for tags will vary depending on the type of hosting you are using.

### Self-hosting

If you are [self-hosting](../publishing/hosts/self-hosting-libraries.md) your library, then the source for your build is probably your own domain. You can specify that the host domain is a safe source by using the following configuration:

**HTTP header**

```http
Content-Security-Policy: script-src 'self'
```

**HTML `<meta>` tag**

```html
<meta http-equiv="Content-Security-Policy" content="script-src 'self'">
```

### Adobe-managed hosting

If you are using an [Adobe-managed host](../publishing/hosts/managed-by-adobe-host.md), then your build is maintained on `assets.adobedtm.com`. You should specify `self` as a safe domain so you don't break any scripts that you are already loading, but you also need `assets.adobedtm.com` to be listed as safe or your tag library won't load on the page. In this case, you should use the following configuration:

**HTTP header**

```http
Content-Security-Policy: script-src 'self' assets.adobedtm.com
```

**HTML `<meta>` tag**


There is a very important prerequisite: You must load the tag library [asynchronously](./asynchronous-deployment.md). This does not work with a synchronous load of the tag library (which results in console errors and rules not executing properly).

```html
<meta http-equiv="Content-Security-Policy" content="script-src 'self' assets.adobedtm.com">
```

You should specify `self` as a safe domain so that any scripts that you are already loading continue to work, but you also need `assets.adobedtm.com` to be listed as safe or your library build won't load on the page.

## Inline scripts

CSP disallows inline scripts by default, and therefore must be manually configured to allow them. You have two options to allow inline scripts:

* [Allow by nonce](#nonce) (good security)
* [Allow all inline scripts](#unsafe-inline) (least secure)

>[!NOTE]
>
>The CSP specification has details for a third option using hashes, but this approach is not feasible to use with tag-management systems like tags. For more information on the limitations of using hashes with tags in Experience Platform, see the [Subresource Integrity (SRI) guide](./sri.md).

### Allow by nonce {#nonce}

This method involves generating a cryptographic nonce and adding it to your CSP and every inline script on your site. When the browser receives an instruction to load an inline script with a nonce on it, the browser compares the nonce value to what is contained within the CSP header. If it matches, the script is loaded. This nonce should be changed with each new page load.

>[!IMPORTANT]
>
>In order to use this method, you must load the build asynchronously. This does not work when loading the build synchronously, which results in console errors and rules not executing properly. See the guide on [asynchronous deployment](./asynchronous-deployment.md) for more information.

The examples below show how you can add your nonce to the CSP configuration for an Adobe-managed host. If you are using self-hosting, you can exclude `assets.adobedtm.com`.

**HTTP header**

```http
Content-Security-Policy: script-src 'self' assets.adobedtm.com 'nonce-2726c7f26c'
```

**HTML `<meta>` tag**

```html
<meta http-equiv="Content-Security-Policy" content="script-src 'self' assets.adobedtm.com 'nonce-2726c7f26c'">
```

Once you configure your header or HTML tag, must then tell the tag where to find the nonce when loading an inline script. For a tag to use the nonce when loading the script, you must:

1. Create a data element that references where the nonce is located within your data layer.
1. Configure the Core Extension and specify which data element you used.
1. Publish your data element and Core Extension changes.

>[!NOTE]
>
>The above process only handles loading your custom code, not what that custom code does. If an inline script contains custom code that is not compliant with your CSP, the CSP takes precedence. For example, if you use custom code to load an inline script by appending it to the DOM, the tag cannot add the nonce correctly, so that particular custom code action will not work as expected.

### Allow all inline scripts {#unsafe-inline}

If using nonces does not work for you, you can configure your CSP to allow all inline scripts. This is the least secure option, but is also easier to implement and maintain.

The examples below show how can allow all inline scripts in the CSP header.

#### Self-hosting

Use the following configurations if you are using self-hosting:

**HTTP header**

```http
Content-Security-Policy: script-src 'self' 'unsafe-inline'
```

**HTML `<meta>` tag**

```html
<meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline'">
```

#### Adobe-managed hosting

Use the following configurations if you are using Adobe-managed hosting:

**HTTP header**

```http
Content-Security-Policy: script-src 'self' assets.adobedtm.com 'unsafe-inline'
```

**HTML `<meta>` tag**

```html
<meta http-equiv="Content-Security-Policy" content="script-src 'self' assets.adobedtm.com 'unsafe-inline'">
```

## Next steps

By reading this document, you should now understand how to configure your CSP header to accept the tag library file and inline scripts.

As an additional security measure, you may also opt to use Subresource Integrity (SRI) to validate fetched library builds. However, this feature has some major limitations when used with tag-management systems like tags. See the guide on [SRI compatibility in Experience Platform](./sri.md) for more information.

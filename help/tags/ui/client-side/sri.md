---
title: Subresource Integrity (SRI) Support
description: Learn how subresource integrity (SRI) is supported in Adobe Experience Platform.
exl-id: bd8bc3f7-9a85-44e2-ae07-f0664179b51c
---
# Subresource integrity (SRI) support

This document covers how subresource integrity (SRI) is supported in Adobe Experience Platform.

Modern websites are built by referencing images, content, and scripts from various locations around the web. SRI allows a browser to verify that the contents of a requested file have not been unexpectedly modified.

While their use cases compliment each other, SRI is different from a Content Security Policy (CSP), which ensures that only files from trusted sources are allowed on your website. SRI goes one step further by ensuring that the content of these files match your expectations.

>[!NOTE]
>
>For more detailed information about SRI, refer to the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity).

The SRI validation process can be summarized as follows:

1. You generate a cryptographic hash of the asset that you want to validate.
1. On your website, the hash is placed in the `integrity` attribute of the HTML element that loads the file.
1. When the browser sees the `integrity` attribute, the browser requests the resource and independently generates its own version of the cryptographic hash.
1. The browser compares the `integrity` hash with the one it generated. If they match, the asset is allowed. If they do not match, the asset is blocked.

## Limitations in tag management systems

As a tag-management system (TMS), tags in Adobe Experience Platform provide a compiled JavaScript library build that you load onto your pages with a single `<script>` element (embed code). The dynamic functionality afforded by the TMS is accomplished by swapping out the contents of that script dynamically without requiring you to change anything else.

When the script contents change, however, so does the cryptographic hash of those contents. Therefore, the only way to make SRI work with a TMS is to update your embed code at the same time that you publish a new build. For many, this defeats the primary purpose of using a TMS in the first place.

The next best security option for tags is to implement a Content Security Policy. For more information, see the guide on [CSPs and tags](./content-security-policy.md).

## Integrating SRI into build deployment

If you still wish to use SRI for your library builds, you must use self-hosting. If you are using Adobe-managed hosting, there is no way to use SRI without having some amount of time where the new build contents do not match the `integrity` attribute of the embed code.

Automating the process of updating your embed code will vary in complexity depending on the structure of your site, but the general steps can be summarized as follows:

1. Retrieve the production library build, either through SFTP delivery or downloading the archive from the user interface.
1. Generate the cryptographic hash of the main build.
1. Ensure that the embed code's `integrity` attribute is updated to the new hash, and that the referenced build is updated as part of the same deployment.

>[!IMPORTANT]
>
>This approach only covers the main build. It does not include any of the smaller files that may exist.

## Next steps

This document covered the limitations of using SRI with tags, and the steps required to integrate it into your library build deployments despite those limitations. If you have not already, it is strongly recommended that you read the guide on [CSPs and tags](./content-security-policy.md) for an alternative security option.

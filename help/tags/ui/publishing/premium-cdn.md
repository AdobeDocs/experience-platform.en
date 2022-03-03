---
title: Premium CDN support for tags
description: Learn about the premium CDN feature for tags and how it can be used to deliver your content in multiple geographic regions.
---
# Premium CDN support for tags (Beta)

>[!IMPORTANT]
>
>The premium CDN feature for tags is currently in beta and your organization may not have access to it yet. This documentation is subject to change.

When you install a [tag library](./libraries.md) on your website, the assets for that library are delivered from an Adobe-managed host at runtime (`https://assets.adobedtm.com`). However, depending on the geographic regions your website operates under, you may be subject to legal regulations that restrict the top-level domains (TLDs) that content can be delivered from. 

To account for this, tags in Adobe Experience Platform provide a premium content delivery network (CDN) feature, which allows you deliver content to multiple regions through different TLDs.

Premium CDN support is a paid feature, and must be purchased by your organization in order to enable and use it. This guide covers how to configure and use this feature in the Data Collection UI after it has been purchased.

## Enable premium CDN for a company

Premium CDN is enabled at the company level, meaning that you must have company edit permissions to enable the feature.

In the Data Collection UI, navigate to **[!UICONTROL Tags]** > **[!UICONTROL Companies]**. From here, select the company that you want to enable the feature for, then select **[!UICONTROL Configure]** .

![Select a company to configure](../../images/ui/publishing/premium-cdn/configure-property.png)

In the configuration dialog that appears, select the option for **[!UICONTROL Premium CDN Enabled]** before selecting **[!UICONTROL Save]** to confirm your changes.

![Enable the premium CDN option](../../images/ui/publishing/premium-cdn/enable-premium-cdn.png)

## Rebuild and install tag libraries with updated embed codes

Once you have enabled the premium CDN feature for the company, you must rebuild any libraries that you intend to publish in order to update their behavior accordingly.

After rebuilding your libraries, the final step is to update the environment embed codes on the webpage. When the premium CDN feature is enabled, the install instructions for your tag environments update to include an embed code for each region. The screenshot below shows an embed code for the China region, which uses `.cn` as its TLD.

![Embed code for the China region](../../images/ui/publishing/premium-cdn/embed-codes.png)

>[!NOTE]
>
>Since [archived environments](./environments.md#archive) only use relative URLs for their asset paths, their install instructions are not affected by the premium CDN feature being enabled.

Choose the appropriate embed code for the webpage, and paste it within the `<head>` tag of your document. For more information using embed codes to install tag libraries, please refer to the [environments UI guide](./environments.md#installation).

## Next steps

This guide covered how to enable and install the premium CDN feature for your tags implementation. For more information on installing and testing tag libraries on your web and mobile properties, refer to the [publishing overview](./overview.md).

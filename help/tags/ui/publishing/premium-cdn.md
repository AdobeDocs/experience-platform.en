---
title: Experience Platform Tags (China)
description: Learn about the Experience Platform Tags (China) feature for tags and how it can be used to deliver your content in multiple geographic regions.
exl-id: 33e36d3b-9e21-44a8-8498-32a5fc20b46b
TQID: https://experienceleague.adobe.com/KFSFevurJ-HKiG9RKdoNEJX0WUtIkwBOnhSwawbO-jY
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: b64298cc-90cc-46b7-8917-ee391f1c7516
    internal-label: Data collection UI
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: e2b4267c-3fe4-4c51-b9f5-7aefcfa5996c
    internal-label: Hosts
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Experience Platform Tags (China)

When you use an [Adobe-managed host](./hosts/managed-by-adobe-host.md) to deliver your Adobe Experience Platform tags assets on your website, these assets are distributed amongst various content delivery networks (CDNs) around the world to deliver the quickest download speed. However, there are certain regions that require all website assets to be replicated and hosted on a server within that region.

To account for this, tags in Experience Platform provides an Experience Platform Tags (China) feature which allows you to deliver content to these special regions.

Experience Platform Tags (China) support is a paid feature, and must be purchased by your organization in order to enable and use it. This guide covers how to configure and use this feature in the Experience Platform UI or Data Collection UI after it has been purchased.

## Enable Experience Platform Tags (China) for your organization

Experience Platform Tags (China) is enabled at the company level. Once your organization has purchased the Experience Platform Tags (China) feature, an Adobe administrator will enable the feature in the UI for your company.

## Rebuild and install tag libraries with updated embed codes

Once Experience Platform Tags (China) is enabled, it does not mean that your tag assets are immediately replicated and ready to use within the new regions. It only means that you can now choose when to opt in to this functionality.

>[!IMPORTANT]
>
>Libraries built before enabling tags in China will continue to operate as-is exactly as they do today. This also applies to libraries not managed by Adobe, since [archived environments](./environments.md#archive) only use relative URLs for their asset paths. Please note that after you have enabled Experience Platform Tags (China), any library you build that is not managed by Adobe will behave as if the tags in China feature is not enabled.

Once you have enabled tags in China and rebuilt any libraries that you wish to use from the new hosting regions, you can retrieve the new hosting region embed codes to add to your websites. 

>[!NOTE]
>
>The library embed code that is listed under the [!UICONTROL Standard] hosting region will continue to work as-is, as well as any Page Top or Page Bottom embed codes already on your websites.

Visit the **[!UICONTROL Environments]** page  or view the environment install instructions from the library edit screen to find the new embed codes. Each new supported hosting region appears after the [!UICONTROL Standard] hosting region (used for areas in the world that are supported without Experience Platform Tags (China)). The screenshot below shows an embed code for the China region, which uses `.cn` as its top-level domain (TLD).

![Embed code for the China region](../../images/ui/publishing/premium-cdn/embed-codes.png)

Choose the appropriate embed code for the webpage, and paste it within the `<head>` tag of your document. For more information using embed codes to install tag libraries, please refer to the [environments UI guide](./environments.md#installation).

## Next steps

This guide covered how to enable and install the Experience Platform Tags (China) feature for your tags implementation. For more information on installing and testing tag libraries on your web and mobile properties, refer to the [publishing overview](./overview.md).

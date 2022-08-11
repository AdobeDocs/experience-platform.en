---
title: Authoring best practices
description: Learn which rules and tips you should follow when authoring your destination documentation page, to ensure that it meets the Adobe Experience Platform documentation quality standards.
exl-id: b12059f1-6635-41cd-acc5-6ff471111164
---
# Authoring best practices

## Overview {#overview}

This page describes rules that you should follow when [authoring your destination documentation](./documentation-instructions.md) page, to ensure that it meets the Adobe Experience Platform documentation quality standards.

## General guidance {#general-guidance}

* When filling in the [template](./self-service-template.md) for your destination documentation, refer to the Adobe contributor guide for information about [linking](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/linking.html?lang=en), [tables](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/markdown.html?lang=en#tables), the [supported markdown syntax](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/markdown.html?lang=en), [writing guidance](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/general-writing-guidance.html?lang=en), and more.
* Do not include observations and estimations in the product documentation.
* In Experience Platform documentation, Adobe writers use **bold formatting** to refer to user interface controls, like this:
  * Go to **[!UICONTROL Connections]** > **[!UICONTROL Destinations]**, and select the **[!UICONTROL Catalog]** tab. View an example of how user interface controls are documented in a [destinations tutorial](https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/activate/activate-batch-profile-destinations.html?lang=en#select-destination).

## Writing style

>[!IMPORTANT]
>
>Read [Writing guidance for Adobe Documentation](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/general-writing-guidance.html?lang=en) before you start authoring the destination documentation page.

* Keep your sentences short and get to the point fast. If your sentence is over 20 words long or uses multiple commas, consider breaking it up into separate sentences. Sentences over 20 words in length can be especially challenging for readers.
* Don't be excessively polite. Avoid using "please" or "kindly do ..." in technical documentation.

## Linking {#linking}

Follow the provided documentation template and don't edit the existing links in the template. When including new links, read [using links in documentation](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/linking.html?lang=en) in the contributor guide.

## Branding guidelines {#branding}

* AEP is not an approved public-facing term. Please use Adobe Experience Platform on first use, then Experience Platform, then Platform.
  * **Don't use**: Before you can export data from AEP to YourDestination, make sure you read and complete these prerequisites. 
  * **Use**: Before you can export data from Adobe Experience Platform to YourDestination, make sure you read and complete these prerequisites.

## Images and screenshots {#images-and-screenshots}

* For information on [how to link to images](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/markdown.html?lang=en#images), refer to the contributor guide.
* When using screenshots, please ensure that your screenshot captures the entire Platform UI screen.
* When marking up images to highlight a certain control or label on the page, try to follow the markup style used by the Experience Platform documentation team. Notice how Profile-based is highlighted in [this screenshot](/help/destinations/catalog/cloud-storage/amazon-s3.md#export-type-frequency).
* Please use `png` format images.
* Please don’t use numbered screenshots as filenames. Image filenames should be descriptive.
  * **Don't use**: `1.png`, `2.png`, `3.png`
  * **Use**: `yourdestination-authentication-details.png`, `yourdestination-destination-details.png`
* Please use alt text for any images that you add to the documentation and use proper grammar in the alt text.
  * **Don't use**: Destination connection details
  * **Use**: Image of the Platform UI, showing destination connection details filled in.

## Process {#process}

* The [documentation template](./self-service-template.md) is updated infrequently, based on partner feedback. Before you begin authoring documentation for your destination, make sure that you have downloaded the [latest version of the template](/help/destinations/destination-sdk/docs-framework/assets/yourdestination-template.zip).
* Author the documentation and create the documentation pull request (PR) from a branch in your fork *other than the main branch*. Refer to the submit destination for review section when authoring in the [GitHub interface](./use-github-interface-to-create-documentation.md#submit-review) or in [your local environment](./work-in-local-environment.md#submit-review).

---
title: Authoring best practices
description: Learn which rules and tips you should follow when authoring your destination documentation page, to ensure that it meets the Adobe Experience Platform documentation quality standards.
---
# Authoring best practices

## Overview {#overview}

This page describes rules that you should follow when [authoring your destination documentation](./documentation-instructions.md) page, to ensure that it meets the Adobe Experience Platform documentation quality standards.

## General guidance {#general-guidance}

* When filling in the [template](./self-service-template.md) for your destination documentation, refer to the Adobe contributor guide for information about [linking](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/linking.html?lang=en), [tables](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/markdown.html?lang=en#tables), the [supported markdown syntax](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/markdown.html?lang=en), [writing guidance](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/general-writing-guidance.html?lang=en), and more.
* Do not include observations and estimations in the product documentation.
* In Experience Platform documentation, Adobe writers use **bold formatting** to refer to user interface controls, like this:
  * Go to **[!UICONTROL Connections]** > **[!UICONTROL Destinations]**, and select the **[!UICONTROL Catalog]** tab. View an example of how user interface controls are documented in a [destinations tutorial](/https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/activate/activate-batch-profile-destinations.html?lang=en#select-destination).

## Linking {#linking}

Please follow the provided documentation template and don't edit the existing links in the template. When including new links, read [using links in documentation](/https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/linking.html?lang=en) in the contributor guide.

## Branding guidelines {#branding}

* AEP is not an approved public-facing term. Please use Adobe Experience Platform on first use, then Experience Platform, then Platform.
  * **Don't use**: Before you can export data from AEP to YourDestination, make sure you read and complete these prerequisites. 
  * **Use**: Before you can export data from Adobe Experience Platform to YourDestination, make sure you read and complete these prerequisites.

## Images and screenshots {#images-and-screenshots}

* For information on [how to link to images](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/markdown.html?lang=en#images), refer to the contributor guide.
* When using screenshots, please ensure that your screenshot captures the entire Platform UI screen.
* Please use `png` format images.
* Please don’t use numbered screenshots as filenames. Image filenames should be descriptive.
  * **Don't use**: `1.png`, `2.png`, `3.png`
  * **Use**: `yourdestiation-authentication-details.png`, `yourdestination-destination-details.png`
* Please use alt-text for any images you add to the documentation and use proper grammar in the alt-text.
  * **Don't use**: Destination connection details
  * **Use**: Image of the Platform UI, showing destination connection details filled in.

## Process {#process}

* The [documentation template](./self-service-template.md) is updated infrequently, based on partner feedback. Before you begin authoring documentation for your destination, make sure that you have downloaded the [latest version of the template](/help/destinations/destination-sdk/docs-framework/assets/yourdestination-template.zip).
* Author the documentation and create the documentation pull request (PR) from a branch in your fork *other than the main branch*. Refer to the submit destination for review section when authoring in the [GitHub interface](./use-github-interface-to-create-documentation.md#submit-review) or in [your local environment](./work-in-local-environment.md#submit-review).
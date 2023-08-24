---
title: Document your destination in Adobe Experience Platform
description: Step-by-step instructions for you to create a documentation page for your destination in Adobe Experience Platform
exl-id: 6cc9c758-44bb-463b-941a-06b1a22ee8f3
---
# Document your destination in Adobe Experience Platform

>[!IMPORTANT]
>
>The process documented here is only required for partners submitting productized (public) destinations. If you are creating a private destination for your own use, you do not need to create and publish documentation for your destination.

## Overview {#overview}

Welcome to Adobe Experience Platform, great to have you here!
Documenting your destination is the final step before it can be set live in Adobe Experience Platform.

This documentation section includes:

* Step-by step instructions for you to create a documentation page for your new destination;
* A template for you to fill out for your destination;
* [General instructions on using Markdown](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/markdown.html?lang=en);
* [Specific instructions for the Adobe Markdown flavor](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/markdown.html?lang=en#custom-markdown-extensions) (the Adobe Markdown flavor is very similar to regular Markdown).
* A [best practices page](./authoring-best-practices.md) to help you author a documentation page for your destination page, which meets the Experience Platform documentation quality standards.

## Prerequisites {#prerequisites}

To create documentation for your destination according to the instructions in this article, the following items are necessary:

* **A GitHub account**. Sign up for [GitHub](https://github.com/) if you don't have an account yet.
* **GitHub Desktop**. If you select to [create the documentation in your local environment](./work-in-local-environment.md), you must use [GitHub Desktop](https://desktop.github.com/).
* Your integration with Adobe must be in a testing phase with your destination deployed in a staging environment in Adobe Experience Platform.

## High-level instructions to create documentation for your destination in Adobe Experience Platform {#high-level-instructions}

At a high level, to create documentation for your destination, you need to [create a fork](https://experienceleague.adobe.com/docs/contributor/contributor-guide/setup/local-repo.html?lang=en#fork-the-repository) of the Adobe Experience Platform documentation repository and edit the [provided documentation template](./self-service-template.md) in a new branch. Use the Adobe-provided template to create a new destination page. Open a pull request (PR) when you are ready. Instructions to do this are further below, in [Steps to create your new destination page](./documentation-instructions.md#steps-to-create-docs-page).

<!--

* In the table of contents (TOC.md) `/help/rtcdp/TOC.md`, add a link to your new destination page. Place it within the category where your destination resides in the Adobe Experience Platform user interface (for example: mobile, social, advertising). 
* In the overview page for the respective category, add a link to your new destination page. For example, for cloud storage destinations, you would add a link to [this page](https://docs.adobe.com/content/help/en/experience-platform/rtcdp/destinations/destinations-cat/cloud-storage/cloud-storage-destinations.html). 

-->

## Documentation template {#documentation-template}

To assist you in creating your documentation page, Adobe has prefilled a [documentation template](./self-service-template.md) for you. Further below, you can find instructions how to edit the template and open a pull request. The Adobe documentation team will review and publish the documentation for your new destination.

[Download the template here](../assets/docs-framework/yourdestination-template.zip) and unzip the file to extract the `yourdestination.md` file.

Instructions on using the template to create your documentation page are further below.

## Steps to create your new destination page {#steps-to-create-docs-page}

You can use the GitHub web interface or your local environment to create documentation for your new destination in Adobe Experience Platform. Find instructions for both options in the links below:

* [Use the GitHub web interface to create a destination documentation page](./use-github-interface-to-create-documentation.md)
* [Use a text editor in your local environment to create a destination documentation page](./work-in-local-environment.md)

## Best practices {#best-practices}

Review the [authoring best practices](/help/destinations/destination-sdk/docs-framework/authoring-best-practices.md) before and while you create the destination documentation page. Make sure to also read the [writing guidance for Adobe Documentation](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/general-writing-guidance.html?lang=en) for some more writing tips that the Adobe documentation team uses when authoring documentation.
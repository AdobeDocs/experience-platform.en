---
description: Release Notes for the Adobe Experience Platform Destination SDK
title: Release Notes
---
# Release Notes

>[!IMPORTANT]
>
>* This feature is in limited beta and is only available to select [Adobe Exchange](https://partners.adobe.com/exchangeprogram/creativecloud.html) members. If you are interested in using Destination SDK, please contact Adobe Exchange. 
>* The documentation and the functionality are subject to change.

## July release {#july}

With Adobe Experience Platform Destination SDK still a beta release, we have made some updates to the functionality, as described below:

| Feature | Description |
| ------- | ----------- |
| Developer tools | Use the Destination SDK developer tools to author and test a message transformation template and to test your destination. <br> **Use case description**: <ul><li>[Create and test a message transformation template](./create-template.md)</li><li>[Test your destination configuration](./test-destination.md)</li></ul> **API reference documentation**: <ul><li>[Get sample template API reference](./sample-template-api.md)</li><li>[Render template API reference](./render-template-api.md)</li><li>[Destination testing API reference](./destination-testing-api.md)</li><li>[Sample profile generation API reference](./sample-profile-generation-api.md)</li></ul> |
| Audience metadata updates | We simplified the audience metadata templates, configurable through the `platform.adobe.io/data/core/activation/authoring/audience-templates` endpoint. <br> We removed the `audience` and `credential` objects to simplify the generic template. For more information, read the documentation on [audience metadata management](./audience-metadata-management.md). |

{style="table-layout:auto"}

## Beta release {#beta}

**Release date**: May 27, 2021

**Notes**

Adobe Experience Platform Destination SDK is now a beta release. New and updated functionality is described below:

| Feature | Description |
| ------- | ----------- |
| Adobe I/O integration | The Destination SDK API endpoints are now available for partners. To make API calls to configure and manage your destination, you must first obtain authentication credentials for Adobe I/O and get allowlisted. For more information, read the documentation on [getting started with Destination SDK](./getting-started.md). |
| Audience metadata support | Use audience metadata templates to programmatically create, update, or delete audiences in your destination. Adobe provides an extensible audience metadata template, which you can configure based on the specifications of your marketing API. For more information, read the documentation on [audience metadata management](./audience-metadata-management.md). |
| OAuth 2 support | Destination SDK now supports additional OAuth 2 authentication patterns, which you can use to configure OAuth 2 authentication for your destination. For more information about the supported OAuth 2 authentication patterns, read the documentation on [OAuth 2 authentication](./oauth2-authentication.md). |

{style="table-layout:auto"}


## Alpha release {#alpha}

**Release date**: November 18, 2020

**Notes**

* The alpha release is the initial version of Adobe Experience Platform Destination SDK. Contact [Adobe Exchange](https://partners.adobe.com/exchangeprogram/creativecloud.html) if you are interested in using Destination SDK.
* In the alpha release, the API endpoints are not publicly accessible. To build and maintain an integration with Experience Platform and receive profile attribute and audience data from Adobe, fill out the required [configuration templates](./configuration-options.md) and send them to Adobe. Read [How to use the Destination SDK to configure your destination](./configure-destination-instructions.md) for more information and contact [Adobe Exchange](https://partners.adobe.com/exchangeprogram/creativecloud.html).

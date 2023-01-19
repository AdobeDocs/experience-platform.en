---
keywords: Experience Platform;home;popular topics;sandbox developer guide
solution: Experience Platform
title: Sandbox API Guide
description: Sandboxes in Adobe Experience Platform provide isolated development environments that allow you to test features, run experiments, and make custom configurations without impacting your production environment.
exl-id: c77e96dc-d138-4126-bbb0-b67beb0a02d6
---
# [!DNL Sandbox] API guide

The [!DNL Sandbox] API provides several endpoints that allow you to programmatically manage all sandboxes available to you within your IMS organization. These endpoints are outlined below. Please visit the individual endpoint guides for details and refer to the [getting started guide](./getting-started.md) for important information on required headers, reading sample API calls, and more.

To see all available endpoints and CRUD operations, visit the [[!DNL Sandbox] API reference](https://www.adobe.io/experience-platform-apis/references/sandbox).

## Available sandboxes

The available sandboxes endpoint allows you to view a list of all available sandboxes available for the current user, including information on each sandbox's name, title, state, type, and region. The available sandboxes endpoint in the [!DNL Sandbox] API can be accessed by all users, including those without Sandbox Administration access permissions. See the [available sandboxes endpoint guide](./available.md) to learn how to view available sandboxes in the API.

## Sandbox management

A sandbox is a virtual partition within a single instance of Adobe Experience Platform, which allows for seamless integration with the development process of your digital experience applications. You can create, view, edit, reset, and delete production and development sandboxes using the `/sandboxes` endpoint. To learn how to use this endpoint, see the [sandboxes endpoint guide](./sandboxes.md).

## Sandbox types

Currently, the supported sandbox types on Experience Platform are production and development sandboxes. A default Platform license grants you a total of five sandboxes, which you can classify as production or development. You can license additional packs of 10 sandboxes up to a maximum of 75 sandboxes in total. See the [sandbox types endpoint guide](./types.md) to learn how to view supported sandbox types for your organization in the API.

## Next steps

To begin making calls using the [!DNL Sandbox] API, read the [getting started guide](./getting-started.md) then select one of the endpoint guides to learn how to use specific endpoints.

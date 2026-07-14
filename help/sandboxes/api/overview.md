---
keywords: Experience Platform;home;popular topics;sandbox developer guide
solution: Experience Platform
title: Sandbox API Guide
description: Sandboxes in Adobe Experience Platform provide isolated development environments that allow you to test features, run experiments, and make custom configurations without impacting your production environment.
role: Developer
exl-id: c77e96dc-d138-4126-bbb0-b67beb0a02d6
TQID: https://experienceleague.adobe.com/hYkGh77BuGUV8IvcSj1xTTgbTcR5nkxaTqyMo301AVc
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: adf04a6a-050f-44bc-a52c-db79ccb22ebf
    internal-label: Administration
subfeature_v2:
  - id: a9eb38d5-9d89-492f-af4e-b968a07f2d91
    internal-label: Permissions
  - id: d21bd11d-08df-4cd6-ad8f-cb59a09de5c0
    internal-label: Sandboxes
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
---
# [!DNL Sandbox] API guide

The [!DNL Sandbox] API provides several endpoints that allow you to programmatically manage all sandboxes available to you within your organization. These endpoints are outlined below. Please visit the individual endpoint guides for details and refer to the [getting started guide](./getting-started.md) for important information on required headers, reading sample API calls, and more.

To see all available endpoints and CRUD operations, visit the [[!DNL Sandbox] API reference](https://www.adobe.io/experience-platform-apis/references/sandbox).

## Available sandboxes

The available sandboxes endpoint allows you to view a list of all available sandboxes available for the current user, including information on each sandbox's name, title, state, type, and region. The available sandboxes endpoint in the [!DNL Sandbox] API can be accessed by all users, including those without Sandbox Administration access permissions. See the [available sandboxes endpoint guide](./available.md) to learn how to view available sandboxes in the API.

## Sandbox management

A sandbox is a virtual partition within a single instance of Adobe Experience Platform, which allows for seamless integration with the development process of your digital experience applications. You can create, view, edit, reset, and delete production and development sandboxes using the `/sandboxes` endpoint. To learn how to use this endpoint, see the [sandboxes endpoint guide](./sandboxes.md).

## Sandbox types

Currently, the supported sandbox types on Experience Platform are production and development sandboxes. A default Experience Platform license grants you a total of five sandboxes, which you can classify as production or development. You can license additional packs of 10 sandboxes up to a maximum of 75 sandboxes in total. See the [sandbox types endpoint guide](./types.md) to learn how to view supported sandbox types for your organization in the API.

## Next steps

To begin making calls using the [!DNL Sandbox] API, read the [getting started guide](./getting-started.md) then select one of the endpoint guides to learn how to use specific endpoints.

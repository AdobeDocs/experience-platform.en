---
keywords: Experience Platform;home;popular topics;sandbox;Sandbox;testing;Testing
solution: Experience Platform
title: Sandboxes Overview
description: Sandboxes are virtual partitions within a single instance of Experience Platform, which allow for seamless integration with the development process of your digital experience applications.
exl-id: b760a979-8134-4a44-8433-ec6fb49bc508
---
# Sandboxes overview

Adobe Experience Platform is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater for the development, testing, and deployment of these applications while ensuring operational compliance.

In order to address this need, Experience Platform provides sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

This document provides a high-level overview of sandboxes in Experience Platform.

## Understanding sandboxes

Sandboxes are virtual partitions within a single instance of Experience Platform, which allow for seamless integration with the development process of your digital experience applications. All content and actions taken within a sandbox are confined to only that sandbox and do not affect any other sandboxes. There are two kinds of sandboxes supported on Experience Platform:

* **Production sandbox**: A production sandbox is meant to be used with profiles in your production environment. Platform allows you to create multiple production sandboxes in order to provide the right functionality for data while still maintaining operational isolation. This feature allows you to dedicate specific production sandboxes to distinct lines of business, brands, projects, or regions. Production sandboxes support a volume of production profiles up to your licensed [!DNL Profile] commitment (measured cumulatively across all of your authorized production sandboxes). You are entitled to use licensed average profile per authorized [!DNL Profile] (measured cumulatively across all of your authorized production sandboxes).
* **Development sandbox**: A development sandbox is a sandbox that can be used exclusively for development and testing with non-production profiles. Development sandboxes support a volume of non-production profiles up to 10% of your licensed [!DNL Profile] commitment (measured cumulatively across all of your authorized development sandboxes). You are entitled to up to:
  * An average non-production profile richness of 75 kilobytes per authorized non-production Profile (measured cumulatively across all of your authorized development sandboxes);
  * One batch segmentation job per day, per development sandbox;
  * An average of 120 [!DNL Profile] API calls, per [!DNL Profile], per year (measured cumulatively across all of your authorized development sandboxes.

An Experience Platform instance supports multiple production and development sandboxes, with each sandbox maintaining its own independent library of Platform resources (including schemas, datasets, profiles, and so on). In addition, both production and development sandboxes have a reset feature that removes all customer-created resources from the sandbox. Development sandboxes cannot be converted to production sandboxes.

A default Experience Platform license grants you a total of five sandboxes, which you can classify as production or development. You can license additional packs of 10 sandboxes up to a maximum of 75 sandboxes in total. These additional sandboxes can be used to create both production and development sandboxes. Please contact your organization administrator or your Adobe sales representative for more details.

Finally, the default production sandbox is the first production sandbox that is created when an organization is first created. The default production sandbox allows you to ingest or consume data from Platform, as well as accept requests that do not include values for a sandbox name or a sandbox ID.

>[!NOTE]
>
>When a sandbox is first created, it does not contain any data. Since each sandbox maintains its own isolated data store, they must also ingest their data independently.

In summary, sandboxes provide the following benefits:

* **Application lifecycle management**: Create separate virtual environments to develop and evolve digital experience applications.
* **Project and brand management**: Allow multiple projects to run in parallel within the same organization, while providing isolation and access control. Future releases will provide support for deploying in multiple regions.
* **Flexible development ecosystem**: Provide sandboxes in a seamless, scalable, and cost-effective way for exploration, enablement, and demonstration purposes.

## Access control for sandboxes

By default, all users for an organization have access to a production sandbox. Access to non-production sandboxes must be granted by a system administrator, product administrator, or product profile administrator through the [Adobe Admin Console](https://adminconsole.adobe.com).

In order to view, create, update, or delete non-production sandboxes, users must also be granted Sandbox Administration permissions.

For more information on managing roles and permissions for sandboxes, see the [access control overview](../access-control/home.md).

## Sandboxes in the Experience Platform UI

In the [Experience Platform user interface](https://platform.adobe.com), users can switch between the sandboxes they have access to by using the **sandbox switcher** control on the top-left of the screen.  Users with Sandbox Administration privileges also have access to the **[!UICONTROL Sandboxes]** tab in the left-navigation, where they can view and manage sandboxes for their organization. For more information on how to work with sandboxes in the UI, see the [sandbox user guide](ui/overview.md).

## Sandboxes in Experience Platform APIs

When making calls to Experience Platform APIs, a sandbox name must be supplied under the header `x-sandbox-name`. For example, when making a call to the [[!DNL Catalog Service API]](https://www.adobe.io/experience-platform-apis/references/catalog/) to view all datasets within the Production sandbox, the sandbox's name ("prod") is provided as a header in the API request:

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/catalog/dataSets \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: prod'
```

If `x-sandbox-name` is not included in an API call, the system will use a default sandbox instead. However, the best practice is to always include this header in all API calls, even when using the default sandbox. For this reason, the API documentation for Experience Platform treats `x-sandbox-name` as a required header.

### Sandbox API

The Sandbox API allows you to manage sandboxes by using RESTful API operations. See the [sandbox developer guide](api/overview.md) for detailed information on how to use the API, including properly formatted requests and example responses.

## Next steps

By reading this document, you have been introduced to the essential concepts about sandboxes in Experience Platform. For detailed steps on how to manage sandboxes, see the [user guide](ui/overview.md) for the UI or the [developer guide](./api/getting-started.md) for the API.

While sandboxes serve as a valuable tool for isolating Platform environments for your development team, you can also manage more granular access control by using the Adobe Admin Console. See the [access control overview](../access-control/home.md) for more information.

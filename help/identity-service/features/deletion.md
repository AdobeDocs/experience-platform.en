---
title: Deletions in Identity Service
description: This document provides an overview of the various mechanisms that you can use to delete your identity data in Experience Platform, and to provide clarity on how identity graphs may be impacted.
exl-id: 0619d845-71c1-4699-82aa-c6436815d5b3
---
# Deletions in Identity Service

Adobe Experience Platform Identity Service generates identity graphs by deterministically linking identities across devices and systems for an individual person. Identity graph linkages are established when two or more marked identities are received within the same row of data.

Identity graphs are leveraged by Real-Time Customer Profile to create a comprehensive and singular view of your customer attributes and behaviors, enabling you to deliver impactful, personal digital experiences in real-time, to people, and not devices.

This document provides an overview of the various mechanisms that you can use to delete your identity data in Experience Platform, and to provide clarity on how identity graphs may be impacted.

## Getting started

The document below references the following features of Experience Platform:

* [Identity Service](../home.md): Gain a better view of individual customers and their behavior by bridging identities across devices and systems.
  * [Identity Graph](./identity-graph-viewer.md): An identity graph is a map of relationships between different identities for a particular customer, providing you with a visual representation of how your customer interacts with your brand across different channels.
  * [Identity namespaces](./namespaces.md): Identity namespaces are a component of Identity Service that serve as indicators of the context to which an identity relates. For example, they distinguish a value of "name<span>@email.com" as an email address or "443522" as a numeric CRM ID.
* [Catalog Service](../../catalog/home.md): Explore the data lineage, metadata, file descriptions, directories, and datasets within the data lake.
* [Data hygiene](../../hygiene/home.md): Manage your stored consumer data by scheduling automated dataset expirations or or deleting individual records from one dataset or all datasets.
* [Adobe Experience Platform Privacy Service](../../privacy-service/home.md): Manage customer requests for accessing, opting out of sale, or deleting their personal data across Adobe Experience Cloud applications.
* [Real-Time Customer Profile](../../profile/home.md): Provides a unified, customer profile in real-time based on aggregated data from multiple sources.

## Single identity deletions

Single identity deletion requests allow you to delete an identity within a graph, resulting in the removal of links tied to a single user identity associated to an identity namespace. You can use mechanisms provided by [Privacy Service](../../privacy-service/home.md) for use cases such as customer requests for data deletion and compliance to privacy regulations like the General Data Protection Regulation (GDPR).

The sections below outline the mechanisms you can use for single identity deletion requests in Experience Platform.

### Single identity deletion in Privacy Service 

Privacy Service processes customer requests to access, opt out of sale, or delete their personal data as delineated by privacy regulations such as the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA). With Privacy Service, you can submit job requests using the API or the UI. When Experience Platform receives a delete request from Privacy Service, Platform sends confirmation to Privacy Service that the request has been received and affected data has been marked for deletion. The deletion of the individual identity is based on provided namespace and/or ID value. Furthermore, the deletion takes place for all sandboxes associated with a given organization. For more information, read the guide on [privacy request processing in Identity Service](../privacy.md).

The table below provides a breakdown of single identity deletion in Privacy Service :

| Single identity deletion | Privacy Service |
| --- | --- |
| Accepted use cases | Data privacy requests (GDPR, CCPA) only. |
| Estimated latency | Days to weeks |
| Services impacted | Single identity deletion in Privacy Service allows you to select whether data will be deleted from Identity Service, Real-Time Customer Profile, or data lake. |
| Deletion patterns | Delete an identity from Identity Service. |

{style="table-layout:auto"}

## Dataset deletion

The following sections outline the mechanisms that can be used to delete datasets and associated identity linkages in Experience Platform.

### Dataset deletion in Catalog Service

You can use the Catalog Service to submit requests for dataset deletion. For more information on how to delete datasets with Catalog Service, read the guide on [deleting objects using the Catalog Service API](../../catalog/api/delete-object.md). Alternatively, you can use Platform UI to submit requests for dataset deletion. For more information, read the [datasets user guide](../../catalog/datasets/user-guide.md#delete-a-dataset).

### Dataset expirations in Data hygiene

The [[!UICONTROL Data Hygiene] workspace](../../hygiene/ui/overview.md) in the Adobe Experience Platform UI allows you to schedule expirations for datasets. When a dataset reaches its expiration date, the data lake, Identity Service, and Real-Time Customer Profile begin separate processes to remove the dataset's contents from their respective services. For more information, read the guide on [managing dataset expirations using the [!UICONTROL Data Hygiene] workspace](../../hygiene/ui/dataset-expiration.md).

The table below provides a breakdown of differences between dataset deletion in Catalog Service and Data hygiene:

| Dataset deletion | Catalog Service | Data hygiene |
| --- | --- | --- |
| Accepted use cases |  Delete full datasets and their associated identity information in Platform. | Management of data stored in Experience Platform. | 
| Estimated latency | Days | Days |
| Services impacted | Dataset deletion through Catalog Service deletes data from Identity Service, Real-Time Customer Profile, and data lake. | Dataset deletion through Data hygiene deletes data from Identity Service, Real-Time Customer Profile, and data lake. |
| Deletion pattern | Delete linked identities from Identity Service established by a particular dataset. | Delete linked identities from Identity Service established by a particular dataset, based on expiration schedule. |

{style="table-layout:auto"}

## Different states of identity graphs after deletion

All identity graph deletions result in the removal of linkages between two or more identities, as specified by the deletion request. For dataset deletion requests, all identity linkages established by the specified dataset are removed and may or may not remove identities from graphs. For single identity deletion requests identity linkages are removed for the specified identity, and consequently the identity value itself is removed from all identity graphs. Identities without a single linkage to another identity are not stored in Identity Service.

Below is an outline of the potential impacts that deletions may have on the state of identity graphs. 

| Identity graph state | Description |
| --- | --- |
| Partial update | A partial update of a graph happens when at least two identities remain linked within a graph after a deletion request is successfully processed. After deletion, the remaining identity links may remain connected to each other, or they can be split into two or more separate graphs depending on the identities that were deleted. |
| Full removal | A graph must have at least two linked identities in order to exist. Therefore, if a deletion request results in the removal of all existing links within a graph, then the graph will be completely removed. |
| No change | A graph will not be impacted if a particular deletion request contains an identity or dataset that isn't associated with any member of the graph. Additionally, a graph does not get updated even if the deletion request does remove a link between a dataset or an identity-dataset combination, given that the link was established by another link that was not deleted. This means that if a link exists in two different datasets, the graph will not be updated because only one of the datasets is removed. |

{style="table-layout:auto"}

## Next steps

This document covered the various mechanisms that you can use to delete identities and datasets on Experience Platform. This document also outlined how identity and dataset deletions can impact identity graphs. For more information on Identity Service, read the [Identity Service overview](../home.md).

<!--

You can use [Data hygiene](../hygiene/home.md) for data cleansing, removing anonymous data, or data minimization for the data that you have collected.

### Single identity deletion in the [!UICONTROL Data Hygiene] workspace

The [[!UICONTROL Data Hygiene] workspace](../hygiene/ui/overview.md) in the Platform UI allows you to delete consumer records that are participating in Identity Service and Real-Time Customer Profile. For a comprehensive guide on using the [!UICONTROL Data Hygiene] workspace, see the tutorial on [deleting consumer records](../hygiene/ui/record-delete.md).

The table below provides a breakdown of differences between single identity deletion in Privacy Service and Data hygiene:

| Single identity deletion | Privacy Service | Data hygiene |
| --- | --- | --- |
| Accepted use cases | Data privacy requests (GDPR, CCPA) only. | Management of data stored in Experience Platform. |
| Estimated latency | Days to weeks | Days |
| Services impacted | Single identity deletion in Privacy Service allows you to select whether data will be deleted from Identity Service, Real-Time Customer Profile, or data lake. | Single identity deletion in Data hygiene deletes the selected data across Identity Service, Real-Time Customer Profile, and data lake. |
| Deletion patterns | Delete an identity from Identity Service. | Delete an identity from Identity Service. |

-->

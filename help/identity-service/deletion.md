---
keywords: Experience Platform;identity;identity service;
title: Deletions in Identity Service
description: There are many reasons why you may want to remove identities or their explicit links in Experience Platform. This document provides an overview of the various mechanisms available to you to leverage your management of your identity graph data.
---
# Deletions in Identity Service

Adobe Experience Platform Identity Service provides you with a comprehensive view of your customers and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time. 

Through identity graphs, Identity Service is able to visualize how different identities are linked together to create a comprehensive view of a customer. When two or more identities are received within a row of data, Identity Service stores information on the links established between the two identities.

There are many reasons why you may want to remove identities or their explicit links in Experience Platform. This document provides an overview of the various mechanisms available to you to leverage your management of your identity graph data.

## Getting started

The document below references the following features of Experience Platform:

* [Identity Service](home.md): Gain a better view of individual customers and their behavior by bridging identities across devices and systems.
  * [Identity Graph](./ui/identity-graph-viewer.md): An identity graph is a map of relationships between different identities for a particular customer, providing you with a visual representation of how your customer interacts with your brand across different channels.
* [Catalog Service](../catalog/home.md): Explore the data lineage, metadata, file descriptions, directories, and datasets within the data lake.
* [Data Hygiene](../hygiene/home.md): Manage your stored consumer data by scheduling automated dataset expirations or deleting individual consumer data from your records.
* [Privacy Service](../privacy-service/home.md): Manages customer requests for accessing, opting out of sale, or deleting their personal data across Adobe Experience Cloud applications.

## Single identity deletions

Single identity deletion requests allow you to delete some or all information for an identity value tied to an identity namespace. You can submit requests for single identity deletion through [Privacy Service](../privacy-service/home.md) or [Data Hygiene](../hygiene/home.md).

### Single identity deletion in Privacy Service 

Privacy Service processes customer requests to access, opt out of sale, or delete their personal data as delineated by privacy regulations such as the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA). With Privacy Service, you can submit job requests using the API or the UI. When Experience Platform receives a delete request from Privacy Service, Platform sends confirmation to Privacy Service that the request has been received and affected data has been marked for deletion. The deletion of the individual identity is based on provided namespace and/or ID value. Furthermore, the deletion takes place for all sandboxes associated with a given organization. For more information, read the guide on [privacy request processing in Identity Service](privacy.md).

| Deletion in Privacy Service | Description |
| --- | --- |
| Path | Privacy Service |
| Accepted use cases | Data privacy requests (GDPR, CCPA) only |
| Estimated latency | Days to weeks |
| Services impacted | Identity Service, Real-time Customer Profile, data lake |
| Deletion patterns | Delete identity and all linkages completely from Identity Service | 

{style="table-layout:auto"}

### Single identity deletion in the Data Hygiene workspace

The [Data Hygiene workspace](../hygiene/ui/overview.md) in the Platform UI allows you to delete consumer records that are participating in Identity Service and Real-time Customer Profile. For a comprehensive guide on using the Data Hygiene workspace, see the tutorial on [deleting consumer records](../hygiene/ui/delete-consumer.md).

| Deletion in Data Hygiene | Description |
| --- | --- |
| Path | Data Hygiene |
| Accepted use cases | Management of data stored in Experience Platform |
| Estimated latency | Days |
| Services impacted | Identity Service, Real-time Customer Profile, data lake |
| Deletion patterns | Delete an identity and all of its corresponding links completely from Identity Service, across all datasets or for a single dataset | 

{style="table-layout:auto"}

## Dataset deletion

The following outlines mechanisms you can use to delete datasets in Experience Platform.

### Dataset deletion in Catalog Service

You can use the Catalog Service to submit requests for dataset deletion. For more information on how to delete datasets with Catalog Service, read the guide on [deleting objects using the Catalog Service API](../catalog/api/delete-object.md). Alternatively, you can use Platform UI to submit requests for dataset deletion. For more information, read the [datasets user guide](../catalog/datasets/user-guide.md#delete-a-dataset).

| Deletion in Catalog Service | Description |
| --- | --- |
| Path | Catalog Service API or Datasets UI |
| Accepted use cases | Delete full datasets and their associated identity information in Platform |
| Estimated latency | Days |
| Services impacted | Identity Service, Real-time Customer Profile, data lake |
| Deletion pattern | Delete linked identities from Identity Service established by a particular dataset |

{style="table-layout:auto"}

### Dataset expirations in Data Hygiene

The [[!UICONTROL Data Hygiene] workspace](../hygiene/ui/overview.md) in the Adobe Experience Platform UI allows you to schedule expirations for datasets. When a dataset reaches its expiration date, the data lake, Identity Service, and Real-time Customer Profile begin separate processes to remove the dataset's contents from their respective services. For more information, read the guide on [managing dataset expirations using the Data Hygiene workspace](../hygiene/ui/dataset-expiration.md).

| Deletion in Data Hygiene | Description |
| --- | --- |
| Path | Data Hygiene | 
| Accepted use cases | Management of data stored in Experience Platform | 
| Estimated latency | Days |
| Services impacted | Identity Service, Real-time Customer Profile, data lake |
| Deletion pattern | Delete linked identities from Identity Service established by a particular dataset, based on expiration schedule |

{style="table-layout:auto"}

## Identity graph changes

All dataset deletion mechanisms involve the deletion of linkages between multiple identities. An identity must have at least one valid link with another identity, and when this does not exist, the identity is removed from the identity graph.

Below is an outline of the potential impacts that deletions may have on identity graphs. 

| Identity graph behavior | Description |
| --- | --- |
| Partial update | A partial update of a graph happens when at least two identities remain linked within a graph after a a deletion request is successfully processed. After deletion, the remaining identity links may remain connected to each other, or they can be split into two or more separate graphs depending on the identities that were deleted. |
| Full removal | A graph must have at least two linked identities in order to exist. Therefore, if a deletion request results in the removal of all existing links within a graph, then the graph will be completely removed. |
| No change | A graph does not get updated if a deletion request does not involve an identity or a dataset. Additionally, a graph does not get updated even if the deletion request does remove a link between a dataset or an identity-dataset combination, given that the link was established by another link that was not deleted. This means that if a link exists in two different datasets, the graph will not be updated because only one of the datasets is removed. |

{style="table-layout:auto"}

## Next steps

This document covered the various mechanisms that you can use to delete identities and datasets on Experience Platform. This document also outlined how identity and dataset deletions can impact identity graphs. For more information on Identity Service, read the [Identity Service overview](home.md).
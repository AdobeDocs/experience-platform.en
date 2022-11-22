---
keywords: Experience Platform;identity;identity service;
title: Deletions in Identity Service
description: 
---
# Deletions in Identity Service

Adobe Experience Platform Identity Service provides you with a comprehensive view of your customers and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

An identity graph is a map of relationships between different identities for a particular customer, providing you with a visual representation of how your customer interacts with your brand across different channels. All customer identity graphs are collectively managed and updated by Adobe Experience Platform Identity Service in near real-time, in response to customer activity.

The identity graph viewer in the Platform user interface allows you to visualize and better understand what customer identities are stitched together, and in what ways. The viewer allows you to drag and interact with different parts of the graph, allowing you to examine complex identity relationships, debug more efficiently, and benefit from increased transparency with how information is being utilized.

There are many reasons when you may want to remove identities or their explicit linkages across Platform and Identity Service. Below are the various mechanisms available for you to leverage to manage your identity graph data.

## Getting started

The document below references the following features of Experience Platform:

* [Identity Service](home.md)
  * [Identity Graph](./ui/identity-graph-viewer.md)
* [Catalog Service](../catalog/home.md)
* [Data Hygiene](../hygiene/home.md)
* [Privacy Service](../privacy-service/home.md)

## Single identity deletions

Single identity deletion requests allow you to delete some or all information for an identity value tied to an identity namespace. You can submit requests for single identity deletion through the [Privacy Service](../privacy-service/home.md) and/or [Data Hygiene](../hygiene/home.md).

### Single identity deletion in Privacy Service 

Privacy Service processes customer requests to access, opt out of sale, or delete their personal data as delineated by privacy regulations such as the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA). With Privacy Service, you can submit job requests using the API or the UI. When Experience Platform receives a delete request from Privacy Service, Platform sends confirmation to Privacy Service that the request has been received and affected data has been marked for deletion. The deletion of the individual identity is based on provided namespace and/or ID value. Furthermore, the deletion takes place for all sandboxes associated with a given organization. For more information, read the guide on [privacy request processing in Identity Service](privacy.md).

| Title | Description |
| --- | --- |
| Path | Privacy Service |
| Accepted use cases | Data privacy requests (GDPR, CCPA) only |
| Estimated latency | Days to weeks |
| Services impacted |
| Deletion patterns | Delete identity and all linkages completely from Identity Service | 

### Single identity deletion in the Data Hygiene workspace

The [Data Hygiene workspace](../hygiene/ui/overview.md) in the Platform UI allows you to delete consumer records that are participating in Identity Service and Real-time Customer Profile. For a comprehensive guide on using the Data Hygiene workspace, see the tutorial on [deleting consumer records](../hygiene/ui/delete-consumer.md).

| Title | Description |
| --- | --- |
| Path | Data Hygiene |
| Accepted use cases | To manage the hygiene of data stored in Experience Platform |
| Estimated latency | Days|
| Services impacted | Identity Service, Real-time Customer Profile, data lake |
| Deletion patterns | Delete an identity and all of its corresponding links completely from Identity Service, across all datasets or for a single dataset | 

## Dataset deletions 

Dataset deletion for Identity Service can be executed by making delete requests to the Catalog Service. Dataset deletion can also be done through dataset expirations in Data Hygiene.

## Identity graph changes

All dataset deletion mechanisms involve the deletion of linkages between multiple identities. An identity must have at least one valid link with another identity, and when this does not exist, the identity is removed from the identity graph.

Below is an outline of the potential impacts that deletions may have on identity graphs. 

### No change in graphs

* Identity Graphs composition will not be impacted by a deletion action when the identity graph linkages do not contain an identity and/or dataset in the request. 
* Identity Graph composition will not be impacted if a deletion does remove a linkage for a dataset or identity+dataset combination, but the linkage was also established by another linkage that was not deleted. (ie - Linkage A-B was established by datasets 1 and 2)

### Full removal of graph

If all linkages for an identity graph were removed due to either a dataset or single-identity deletion, then the graph itself will no longer persist n Identity Service. 

### Partial update of graph

* If one or more linkages are removed from a graph, but there is at least one linkage still existing, then the leftover linkages will continue to persist.
* After a deletion, leftover linkages may persist in a still connected state, or split into two or more separated graphs if the deleted linkage was the connecting link between other linkages. 
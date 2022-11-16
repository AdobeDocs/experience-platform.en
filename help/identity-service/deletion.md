---
keywords: Experience Platform;identity;identity service;
title: Deletions in Identity Service
description: 
---
# Deletions in Identity Service

INTRODUCTION

There are many reasons when you may want to remove identities or their explicit linkages across Platform and Identity Service. Below are the various mechanisms available for you to leverage to manage your identity graph data.

## Single identity deletions

Single identity deletion requests allow you to delete some or all information for an identity value tied to an identity namespace. Single identity deletions can be executed through Privacy Service and Data Hygiene.

## Dataset deletions 

Dataset deletion for Identity Service can be executed by making delete requests to the Catalog Service, either API or UI. Dataset deletion can also be done through dataset expirations in Data Hygiene.

## Identity graph changes

All dataset deletion mechanisms simply work by deleting linkages across multiple identities. When an identity no longer has at least one valid linkage with another identity, then the identity itself will no longer exist in Identity Service Identity Graphs. Below is an outline of the potential impacts deletions may have on identity graphs. 

### No change in graphs

* Identity Graphs composition will not be impacted by a deletion action when the identity graph linkages do not contain an identity and/or dataset in the request. 
* Identity Graph composition will not be impacted if a deletion does remove a linkage for a dataset or identity+dataset combination, but the linkage was also established by another linkage that was not deleted. (ie - Linkage A-B was established by datasets 1 and 2)

### Full removal of graph

If all linkages for an identity graph were removed due to either a dataset or single-identity deletion, then the graph itself will no longer persist n Identity Service. 

### Partial update of graph

* If one or more linkages are removed from a graph, but there is at least one linkage still existing, then the leftover linkages will continue to persist.
* After a deletion, leftover linkages may persist in a still connected state, or split into two or more separated graphs if the deleted linkage was the connecting link between other linkages. 
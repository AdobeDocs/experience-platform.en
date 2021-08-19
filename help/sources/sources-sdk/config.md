---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
solution: Experience Platform
title: Configuration options in Sources SDK
topic-legacy: overview
description:
---
# Configuration options in Sources SDK

>[!IMPORTANT]
>
>Sources SDK is in beta. The feature and documentation are subject to change.

This document provides an overview of the configurations you need to prepare in order to use Sources SDK.

## ConnectionSpecs

Connection specifications return a source's connector properties, including authentication specifications related to creating the base and source connections. Connection specifications are tenant and IMS Organization agnostic.

## SourceSpecs

Source specifications contain information specific to a source, including attributes pertaining to a source's category, beta status, and catalog icon. Source specifications also contain information regarding parameters for the URL, content, header, and schedule, among others.

| Source specifications | Description | Example |
| --- | --- | --- |
| `sourceSpec` |
| `sourceSpec.attributes` |
| `sourceSpec.attributes.uiAttributes` |
| `sourceSpec.attributes.uiAttributes.documentationLink` |
| `sourceSpec.attributes.uiAttributes.isBeta` |
| `sourceSpec.attributes.uiAttributes.category` |
| `sourceSpec.attributes.uiAttributes.icon` |
| `sourceSpec.attributes.uiAttributes.label` |
| `sourceSpec.attributes.uiAttributes.description` |
| `sourceSpec.attributes.urlParams.hostName` |
| `sourceSpec.attributes.urlParams.path` |
| `sourceSpec.attributes.urlParams.method` |
| `sourceSpec.attributes.contentPath` |
| `sourceSpec.attributes.queryParams` |
| `sourceSpec.attributes.headerParams` |
| `sourceSpec.attributes.bodyParams` |
| `sourceSpec.attributes.paginationParams` |
| `sourceSpec.attributes.paginationParams` == `offsetType` |
| `sourceSpec.attributes.scheduleParams.scheduleStartParamName` |
| `sourceSpec.attributes.scheduleParams.scheduleEndParamName` |
| `sourceSpec.attributes.scheduleParams.scheduleStartParamFormat` |
| `sourceSpec.attributes.scheduleParams.scheduleEndParamFormat` |
| `sourceSpec.spec` |


## AuthSpecs

Authentication specifications define how Platform users can connect to your source.

### AuthSpecs for OAuth 2.0

Authentication specifications for OAuth 2.0 define how Platform users can connect to your source using OAuth 2.0

## ExploreSpecs

| Explore specifications | Description | Example |
| --- | --- | --- |
| `exploreSpec` |
| `exploreSpec.name` |
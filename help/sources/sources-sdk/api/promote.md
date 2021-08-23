---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
solution: Experience Platform
title: Promote Your Source
topic-legacy: developer guide
description:
---
# Promote your source

>[!IMPORTANT]
>
>Sources SDK is in beta. The feature and documentation are subject to change.

## Getting started

Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Promote your source using the [!DNL Authoring Service] API

The [!DNL Authoring Service API]...

To promote your source either globally or to specified IMS Organizations, make a POST request to the [!DNL Authoring Service] API, while providing your fully authored connection spec and the sandboxes you want to provision for your new source.

**API format**

```http
POST /authoring-service/connectionSpecs?action=publish
```

**Request**

**Response**

A successful response returns the GitHub URL of the pull request containing your new source.

```json
{
    "description": "Spec Registered: https://github.com/sources/github-actions/pull/14"
}
```
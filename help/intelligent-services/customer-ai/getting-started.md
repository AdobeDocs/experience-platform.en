---
keywords: Experience Platform;getting started;customer ai;popular topics
solution: Experience Platform
title: Getting started in Customer AI
topic: Getting started
---

# Getting started in Customer AI

The guides for Customer AI require a working understanding of the various Platform services involved in using Customer AI. Before you start, please review the following documents:

- [Real-time Customer Profile overview](../../rtcdp/overview.md)
- [Segmentation Service overview](../../segmentation/home.md)
- [Segment Builder user guide](../../segmentation/tutorials/create-a-segment.md)

## Downloading Customer AI scores

Downloading Customer AI scores is done through a combination of API calls. In order to make calls to Platform APIs, you must first complete the [authentication tutorial](../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

> **Note:** For more information on sandboxes in Platform, see the [sandbox overview documentation](../../sandboxes/home.md). 

### Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md) in the Experience Platform troubleshooting guide.

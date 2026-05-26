---
title: Privacy Service API Guide
description: Learn how to use the Privacy Service API to programmatically manage privacy jobs for supported Adobe Experience Cloud applications.
role: Developer
exl-id: 665466ac-2447-4a9d-a8cf-62092c09e431
TQID: https://experienceleague.adobe.com/R3W8RDh35UrxTL-ZQAHrRC6nr1Ix3snMEBD8v87nUY8
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# [!DNL Privacy Service] API guide

The Privacy Service API provides several endpoints that allow you to programmatically manage privacy jobs for your organization. These endpoints are outlined below. Please visit the individual endpoint guides for details and refer to the [getting started guide](./getting-started.md) for important information on required headers, reading sample API calls, and more.

>[!NOTE]
>
>This guide covers how to use the [!DNL Privacy Service] API. For details on how to use the UI, see the [Privacy Service UI overview](../ui/overview.md).

To view all available endpoints and CRUD operations, visit the [Privacy Service API reference](https://www.adobe.io/experience-platform-apis/references/privacy-service/).

## Privacy jobs

When Privacy Service receives a request to access or delete the personal data of a subject, the system creates privacy jobs to fulfill that request. Each privacy job contains identity information related to the data subject, metadata about the Adobe Experience Cloud product that the job applies to, and the job's processing status. 

The `/jobs` endpoint allows you to create and retrieve privacy jobs for your organization. To learn how to use this endpoint, see the [privacy jobs endpoint guide](./privacy-jobs.md).

## Consent

Certain regulations require explicit customer consent before their personal data can be collected. The `/consent` endpoint allows you to process customer consent requests and integrate them into your privacy workflow. See the [consent endpoint guide](./consent.md) to learn more.

## Next steps

To begin making calls using the Privacy Service API, read the [getting started guide](./getting-started.md) then select one of the endpoint guides to learn how to use specific endpoints.

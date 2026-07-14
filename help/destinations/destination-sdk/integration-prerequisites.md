---
description: To use Destination SDK, a partner company must meet the prerequisites listed in this document.
title: Integration prerequisites
exl-id: 031af9f1-ce18-4056-bd53-199ce8b56be5
TQID: https://experienceleague.adobe.com/N4-F6aO64EDtasmxMYrRF2bCUW-en2G9S2llv0T1soI
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
subfeature_v2:
  - id: d3f95e25-a50e-4fd0-bc23-9a22409a183b
    internal-label: Profile enrichment
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
    internal-label: Data management
---
# Integration prerequisites

To use Destination SDK, make sure that you meet the technical and partnership prerequisites listed in the sections below.

## Technical / API prerequisites for streaming destinations {#streaming-prerequisites}

1. You have a REST API endpoint for [!DNL Adobe Experience Platform] to deliver the following types of data to:
   * Audience membership information;
   * Profile identity information;
   * (Optional) Additional attributes for profile enrichment.
2. Your REST API endpoint supports basic, bearer token, or the OAuth 2.0 authentication protocols.
3. (Optional) You have an audience create/update/delete API or API endpoint for programmatic metadata management.

## Technical prerequisites for batch destinations {#batch-prerequisites}

1. You have a destination location hosted on [!DNL Amazon S3], [!DNL Azure Blob], [!DNL Azure Data Lake Storage], [!DNL SFTP], [!DNL Google Cloud], or a private [!DNL Data Landing Zone], where you can receive files exported out of Experience Platform.
2. Your destination platform can ingest files in the format configured via the [file formatting options](functionality/destination-server/file-formatting.md) in Destination SDK for batch destinations.
3. (Optional) You have an audience create/retrieve/update/delete ([!DNL CRUD]) API or API endpoint for programmatic metadata management.

## Partnership prerequisites {#partnership-prerequisites}

If you are an Independent Software Vendor (ISV) or System Integrator (SI) looking to use Destination SDK, read the partnership requirements for ISVs and SIs in the [getting access section](overview.md#get-access).

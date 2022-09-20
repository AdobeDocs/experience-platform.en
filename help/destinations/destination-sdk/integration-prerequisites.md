---
description: To use Destination SDK, a partner company must meet the prerequisites listed in this document.
title: Integration prerequisites
exl-id: 031af9f1-ce18-4056-bd53-199ce8b56be5
---
# Integration prerequisites

To use Destination SDK, make sure that you meet the technical and partnership prerequisites listed in the sections below.

## Technical / API prerequisites for streaming destinations {#streaming-prerequisites}

1. You have a REST API endpoint for Adobe Experience Platform to deliver the following types of data to:
   * Segment membership information;
   * Profile identity information;
   * (Optional) Additional attributes for profile enrichment.
2. Your REST API endpoint supports API token bearer authentication or the OAuth 2.0 authentication protocol.
3. (Optional) You have a segment create/update/delete API or API endpoint for programmatic metadata management.

## Technical prerequisites for batch destinations {#batch-prerequisites}

1. You have a destination location hosted on Amazon S3, Azure Blob, Azure Data Lake Storage, SFTP, Google Cloud, or a private Data Landing Zone, where you can receive files exported out of Experience Platform.
2. Your destination platform can ingest files in the format configured via the [file formatting options](/help/destinations/destination-sdk/server-and-file-configuration.md#file-configuration) in Destination SDK for batch destinations.
3. (Optional) You have a segment create/update/delete API or API endpoint for programmatic metadata management.

## Partnership prerequisites {#partnership-prerequisites}

If you are an Independent Software Vendor (ISV) or System Integrator (SI) looking to use Destination SDK, read the partnership requirements for ISVs and SIs in the [getting access section](./overview.md#get-access).

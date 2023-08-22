---
title: Adobe Experience Platform Release Notes
description: The August 2023 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: August 23, 2023**

Updates to existing features in Adobe Experience Platform:

- [Data Prep](#data-prep)
- [Identity Service](#identity-service)
- [Sources](#sources)

## Data Prep {#data-prep}

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**New or updated features**

| Feature | Description |
| --- | --- |
| Support for filtering secondary identities | You can now use Data Prep to filter out identities coming from Adobe Analytics, such as `AAID` and `AACUSTOMID`. If filtered out, these identities do not get ingested into Real-Time Customer Profile. Unfiltered data will continue to be ingested into the data lake. |

{style="table-layout:auto"}

For more information on Data Prep, please read the [Data Prep overview](../../data-prep/home.md).

## Identity Service {#identity-service}

Adobe Experience Platform Identity Service provides you with a comprehensive view of your customers and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

**Update features**

| Feature | Description |
| --- | --- |
| Changes to identity graph limits | By the end of September, the identity graph will change to 50 identities per graph, and the latest identity will be ingested. As a consequence, the oldest identity will be deleted based on ingestion timestamp and identity type, with cookie identity types being deleted first. Today, identity graphs have a limit of 150 identities per graph, and once this limit is reached, graphs are no longer updated. Please contact your account representative to request a change in identity type if your production sandbox contains: <ul><li>a custom namespace where the person identifiers (such as CRM IDs) are configured as cookie/device identity type.</li><li>a custom namespace contains cookie/device identifiers configured as cross-device identity type.</li></ul> Adobe engineering will manually process these requests. For more information, read the [guardrails for Identity Service data](../../identity-service/guardrails.md). |

To learn more about Identity Service, read the [Identity Service overview](../../identity-service/home.md)

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated features**

| Feature | Description |
| --- | --- |
| General availability of Chatlio |
| General availability of Pendo |
| General availability of SugarCRM |
| Support for on-demand ingestion for sources dataflows in the UI |

{style="table-layout:auto"}

For more information on sources, please read the [sources overview](../../sources/home.md).

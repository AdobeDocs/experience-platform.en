---
title: Republish a Library
description: Learn how to republish a previous tag library in Adobe Experience Platform.
exl-id: 026b01f2-a93d-4e8a-9ed2-47c4f011e70f
TQID: https://experienceleague.adobe.com/miETaukdGyFEffLA8a1eMhuF64A6RWQShlcTv8TFEZM
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Republish a library

The five most recent libraries that have been published to your production environment on a Web property are available for later retrieval. This feature is helpful when you find a bug in your production library and need to rollback to a known good state immediately.

The retrieval process depends on your environment settings at the time the library was originally published. This is important because retrieving an archived library does not change anything on your live site, while retrieving a regular library would.

The following options are available:

* **Host: Managed by Adobe, Archive: Off:** If you are using the Managed by Adobe host and you are not archiving your library, you can republish these older libraries.

* **Host: Managed by Adobe, Archive: On:** If you are using the Managed by Adobe host and you are archiving your library, then you can download these older libraries.

* **Host: SFTP, Archive: On or Off:** If you are using the SFTP host, it is assumed that you have your own archival strategies in place and no retrieval options are available.

Retrieval options for mobile properties are not yet available.

## Republishing

Each tag environment provides a link to a library file. Any library that you build in that environment can be referenced with that link.

When you build to a development or staging environment, the old build is cleaned up and the new build is deployed. For your production environment, this link is updated to point to the latest build, but the five most recent builds are kept around before they are cleaned up.

These five most recent builds in your production environment are the ones that are available for retrieval.

When you republish an older library, Experience Platform updates the environment link to point to one of these older builds that hasn't been cleaned up yet.  Experience Platform also issues a purge request to the CDN edge nodes cache to indicate that the library has been updated and a fresh copy should be retrieved from the origin.

This means that when you republish an older library:

* No changes are made to any of the resources (or historical revisions) in your tag property

* The way that development and staging environments calculate what is upstream does not change

Consider the scenario when you roll back because of a problem with a specific rule. The rule revision that is now in production might, for example, be three revisions old.  When you view that rule in the UI to fix it, it still reflects the latest changes saved rather than what is currently in production.

For this reason, Experience Platform notifies you that a property is in a republished state as a reminder that what you're seeing in the Data Collection user interface is a little farther removed from Production than usual. This notification is dismissible and appears once per browser session the first time you view the property.

### How to Republish an older library

![Republish a library](images/retrieve_republish.png)

From the Publishing screen:

1. Find the library in the Published column that you'd like to republish.
1. Select the ellipsis (`...`) in the upper-right corner of the Library card.
1. Select **[!UICONTROL Republish]**.

## Download

Downloading an Archived library is more straightforward. You aren't directly referencing these .zip files anywhere, so you can simply download the older library to your computer and run your usual process.

### How to Download an older library

![Download a library](images/retrieve_download.png)

From the Publishing screen:

1. Find the library in the Published column that you'd like to download.
1. Select the ellipsis (`...`) in the upper-right corner of the Library card.
1. Select **[!UICONTROL Download]**.

---
title: Adobe Experience Platform Release Notes January 2020
description: The January 2020 release notes for Adobe Experience Platform.
doc-type: release notes
last-update: January 15, 2020
author: crhoades, ens28527
exl-id: e488a50c-2a87-4649-b3a4-f9d45cb12fcb
---
# Adobe Experience Platform release notes 

**Release date: January 15, 2020**

Updates to existing features in Adobe Experience Platform:

* [[!DNL Experience Data Model (XDM) System]](#xdm)
* [[!DNL Privacy Service]](#privacy)
* [[!DNL Sources]](#sources)
* [[!DNL Destinations]](#destinations)

## [!DNL Experience Data Model] (XDM) System {#xdm}

Standardization and interoperability are key concepts behind [!DNL Experience Platform]. [!DNL Experience Data Model] (XDM), driven by Adobe, is an effort to standardize customer experience data and define schemas for customer experience management.

XDM is a publicly documented specification designed to improve the power of digital experiences. It provides common structures and definitions for any application to communicate with services on Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation delivering insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New features**

|Feature | Description|
|--- | ---|
|Field-type restrictions for fields of equal hierarchy | After an XDM field has been defined as as a certain type, any other fields of the same name and hierarchy must use the same field type, regardless of the classes or schema field groups they are used in. For example, if a field group for the XDM [!DNL Profile] class contains a `profile.age` field of type "integer", a similar field group for XDM [!DNL ExperienceEvent] cannot have a `profile.age` field of type "string". In order to utilize a different field type, the field must be of a different hierarchy than the previously defined field (for example, `profile.person.age`). This feature is meant to prevent conflicts when schemas are brought together in a union. While the constraint does not retroactively affect existing schemas, it is strongly recommended that you review your schemas for field-type conflicts and edit them as necessary.|
|Case-sensitive field validation | Custom fields on the same level must have different names, regardless of capitalization. For example, if you add ad a custom field named "Email", you cannot add another custom field at the same level named "email".|

**Known issues**

* None

To learn more about working with XDM using the [!DNL Schema Registry] API and [!DNL Schema Editor] user interface, please read the [XDM System documentation](../../xdm/home.md).

## [!DNL Privacy Service] {#privacy}

New legal and organizational regulations are giving users the right to access or delete their personal data from your data stores upon request. Adobe Experience Platform [!DNL Privacy Service] provides a RESTful API and user interface to help you manage these data requests from your customers. With [!DNL Privacy Service], you can submit requests to access and delete private or personal customer data from Adobe Experience Cloud applications, facilitating automated compliance with legal and organizational privacy regulations.

**New features**

|Feature | Description|
|--- | ---|
|[!DNL Privacy Service] rebranding | The formerly named "GDPR Service" has been rebranded to [!DNL Privacy Service] as the service has grown to support other regulations in addition to GDPR.|
|New API endpoints | Base path for the [!DNL Privacy Service] API has been updated from `/data/privacy/gdpr` to `/data/core/privacy/jobs`.|
|New required `regulation` property | When creating new jobs in the [!DNL Privacy Service] API, a `regulation` property must be supplied in the request payload to indicate which regulation to track the job under. Accepted values are `gdpr` and `ccpa`.|
|Support for [!DNL Adobe Primetime Authentication] | [!DNL Privacy Service] now accepts access/delete requests from Adobe [!DNL Primetime Authentication], using `primetimeAuthentication` as its product value.|
|Privacy Service UI enhancements | Separate job tracking pages for GDPR and CCPA regulations. New **Regulation Type **dropdown to switch between tracking data for GDPR and CCPA.|

**Known issues**

* None

For more information about [!DNL Privacy Service], please start by reading the [Privacy Service overview](../../privacy-service/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

[!DNL Experience Platform] provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New features**

|Feature | Description|
|--- | ---|
|Support for customer attribute data | UI and API support for creating streaming connectors to ingest customer attribute data.|
|Additional file format support for cloud storages | File ingestion from cloud storages now supports XDM-compliant Parquet and JSON file formats.|
|Support for access control permissions | The access control framework in Adobe Experience Platform provides the permissions needed to grant access to sources in data ingestion. Depending on their permission level, a user can view sources, manage sources, or be denied access altogether.|

**Access control permissions**

|Category | Permission | Description|
|--- | --- | ---|
|Data Ingestion | Manage Sources | Access to read, create, edit, and disable sources.|
|Data Ingestion | View Sources | Read-only access to available sources in the **[!UICONTROL Catalog]** tab and authenticated sources in the **[!UICONTROL Browse]** tab.|

**Known issues**

* None

For more information about sources, see the [sources overview](../../sources/home.md)

## Destinations {#destinations}

In [Real-Time CDP](../../rtcdp/overview.md), destinations are pre-built integrations with destination platforms that activate data to those partners in a seamless way.

**New features**

|Feature | Description|
|--- | ---|
|Support for access control permissions | The Destinations functionality in Real-Time CDP works with Adobe Experience Platform access control permissions. Depending on your user's permission level, you can view, manage, and activate destinations.|

**Access control permissions**

|Category | Permission | Description|
|--- | --- | ---|
|Destinations | Manage Destinations | Access to read, create, edit, and disable destinations.|
|Destinations | View Destinations | Read-only access to available destinations in the **[!UICONTROL Catalog]** tab and authenticated destinations in the **Browse** tab.|
|Destinations | Activate Destinations | Ability to activate data to destinations. This permission requires either "Manage Destinations" or "View Destinations" to be added to the product profile.|

**Known issues**

* None

See the [Destinations overview](../../destinations/home.md) for more information.

---

title: Adobe Experience Platform Release Notes
description: Experience Platform release notes December 11, 2019
doc-type: release notes
last-update: December 12, 2019
author: ens71067

---

# Adobe Experience Platform release notes 

## Release date: December 11, 2019

## Segmentation Service

Adobe Experience Platform Segmentation Service provides a user interface and RESTful API that allows you to build segments and generate audiences from your Real-time Customer Profile data. These segments are centrally configured and maintained on Platform, making them readily accessible by any Adobe application.

Segmentation Service defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

### New features

|Feature | Description|
|--- | ---|
|Merged Audiences tab in Segment Builder | The _Segments_ and _Audiences_ tabs in the Segment Builder have been combined into a single _Audiences_ tab. This tab allows you to browse and search for existing audiences, which you can then drag and drop into the rule builder canvas to create a new segment definition. Referencing an audience can add one of the following sets of rule logic to the new segment definition: Audience membership as a rule, The full set of rule logic that defined the referenced audience.|
|New location for the merge policy selector | The location of the merge policy selector in the Segment Builder has been changed. To select a merge policy for a segment definition, click the gear icon on the _Fields_ tab, then use the _Merge Policy_ dropdown menu to select the merge policy that you wish to use.|

### Known issues

* None

For more information, please see the [Segmentation Service overview](../../segmentation/home.md).

## Decisioning Service

Adobe Experience Platform Decisioning Service provides the ability to programmatically and intelligently select the "Next Best Experience" from a set of available options for a given individual, deliver them to any channel or application, and perform reporting and analysis.

### New features

| Feature    | Description  |
| -----------| ---------- |
| Ranking functions | Order of offers for profiles are now derived through a ranking function, rather than a fixed set of offers across all profiles. |

### Known issues

* None.

See the [Decisioning Service overview](../../decisioning-service/home.md) for a full introduction to the service.

## Sources

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe Solutions, cloud-based storage, third party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to you authenticate to your storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

### New features

| Feature    | Description  |
| ---------- | ------------ |
| Streaming connection | Streaming ingestion enables you to send data from client- and server-side devices to Experience Platform in real-time. Release includes a new streaming connection user interface. |
| Connector support for Google Cloud Store | Support for collecting data from Google Cloud Store. |

### Known issues

* None.

For more information about sources, see the [sources overview](../../sources/home.md).

## Experience Data Model (XDM) System

Standardization and interoperability are key concepts behind Experience Platform. Experience Data Model (XDM), driven by Adobe, is an effort to standardize customer experience data and define schemas for customer experience management.

XDM is a publicly documented specification designed to improve the power of digital experiences. It provides common structures and definitions for any application to communicate with services on Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation delivering insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

### New features

|Feature | Description|
|--- | ---|
|Improved schema validation| New checks to ensure that references resolve into additional fields as expected. Added additional checks to fields defined as an array of objects to make sure the objects are fully defined. Improved error messages to help identify and fix problems.|

### Bug fixes

* Maintenance and improvements related to access control and sandboxes.
* Support for `eTag` for the `/descriptors` endpoint in the Schema Registry API.

### Known issues

* None

To learn more about working with XDM using the Schema Registry API and Schema Editor user interface, please read the [XDM System documentation](../../xdm/home.md).
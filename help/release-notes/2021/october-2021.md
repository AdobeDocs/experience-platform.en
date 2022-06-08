---
title: Adobe Experience Platform Release Notes October 2021
description: The October 2021 release notes for Adobe Experience Platform.
exl-id: 8f8bcb24-6478-4281-9362-9559158384af
---
# Adobe Experience Platform release notes 

**Release date: October 27, 2021**

## Updates to Experience Platform

Updates to Experience Platform.

### User interface {#ui}

The user interface has been updated with the following changes:

| Feature | Description |
| --- | --- |
| Dark theme | Use the Dark theme switch to toggle between light and dark themes in the Platform interface. The switch is located in the user profile below user name and email. |
| Toggle left navigation | Use the improved navigation toggle at the top of the application header to show or hide the menu displaying your Experience Platform capabilities. The system remembers your last selection and shows you only the capabilities you have access to. |
| Access visibility | The left navigation bar shows only the features that you are able to access. In previous versions of Adobe Experience Platform, unavailable items were visible, even if you were not able to access them. |

See the [Platform UI Guide](../../landing/ui-guide.md) to learn more.

## Updates to existing features

Updates to existing features in Adobe Experience Platform:

- [[!DNL Data Prep]](#data-prep)
- [Sources](#sources)

### [!DNL Data Prep] {#data-prep}

[!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**Updated features**

| Feature | Description |
| --- | --- |
| `contains_key` function | The `contains_key` function has been introduced, which lets you check if the object exists within the source. This function replaces the `is_set` function, which is now deprecated. |
| Error messages | Error messages returned by the `/mappingSets/preview` endpoint in the Data Prep API are now consistent with the error messages that are generated during runtime. |

See the [[!DNL Data Prep] overview](../../data-prep/home.md) to learn more about this service.

### Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

| Feature | Description |
| --- | --- |
| [!DNL Amazon S3] source enhancements | You can now use the `s3SessionToken` parameter to connect your [!DNL Amazon S3] account to Platform using temporary security credentials. This token allows you to provide short-term, temporary access to your [!DNL Amazon S3] resources to users in untrusted environments. See the [[!DNL Amazon S3] documentation](../../sources/connectors/cloud-storage/s3.md#prerequisites) for more information. |
| [!DNL Generic REST API] (Beta) | You can now create a [!DNL Generic REST API] source connection using the [[!DNL Flow Service] API](../../sources/tutorials/api/create/protocols/generic-rest.md) to bring data from a generic REST application to Platform. See the [[!DNL Generic REST API] overview](../../sources/connectors/protocols/generic-rest.md) for more information. |
| [!DNL Zoho CRM] (Beta) | You can now create a [!DNL Zoho CRM] source connection using the [[!DNL Flow Service] API](../../sources/tutorials/api/create/crm/zoho.md) or the [user interface](../../sources/tutorials/ui/create/crm/zoho.md) to bring data from your [!DNL Zoho CRM] account to Platform. See the [[!DNL Zoho CRM] overview](../../sources/connectors/crm/zoho.md) for more information. |

To learn more about sources, see the [sources overview](../../sources/home.md).

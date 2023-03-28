---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Privacy Service Release Notes
description: The latest release notes for Adobe Experience Platform Privacy Service.
exl-id: 66ee38f1-f0d5-44ff-823d-d1b8a9765c6d
---
# [!DNL Privacy Service] release notes

This document contains information about new features for Adobe Experience Platform [!DNL Privacy Service], as well as enhancements and significant bug fixes.

>[!NOTE]
>
>The latest release notes for other [!DNL Experience Platform] services can be found [here](../release-notes/latest/latest.md).

## September 9, 2020

### New features

| Feature | Description |
| --- | --- |
| Support for LGPD (Brazil) | Privacy jobs can now be created under Brazil's [!DNL Lei Geral de Proteção de Dados] (LGPD) regulation. These jobs are tracked under the regulation code `lgpd_bra`. |

## April 8, 2020

### New features

| Feature | Description |
| --- | --- |
| PDPA support | [!DNL Privacy] requests can now be created and tracked under the Personal Data Protection Act (PDPA) in Thailand. When making privacy requests in the API, the `regulation` array accepts the value "pdpa_tha". |
| Namespace types in the UI | You can now specify different namespace types in the Request Builder in the [!DNL Privacy Service] UI. See the [user guide](ui/user-guide.md) for more information. |
| Old endpoint deprecation | The old API endpoint (`data/privacy/gdpr`) has been deprecated. |

## January 14, 2020

### New features

| Feature | Description |
| --- | --- |
| [!DNL Privacy Service] rebranding | The formerly named "GDPR Service" has been rebranded to [!DNL Privacy Service] as the service has grown to support other regulations in addition to GDPR. |
| New API endpoints | Base path for the [!DNL Privacy Service] API has been updated from `/data/privacy/gdpr` to `/data/core/privacy/jobs` |
| New required `regulation` property | When creating new jobs in the [!DNL Privacy Service] API, a `regulation` property must be supplied in the request payload to indicate which regulation to track the job under. Accepted values are `gdpr` and `ccpa`. See the document on [privacy jobs](api/privacy-jobs.md) in the [!DNL Privacy Service] API guide for more information. |
| Support for Adobe Primetime Authentication | [!DNL Privacy Service] now accepts access/delete requests from Adobe Primetime Authentication, using `primetimeAuthentication` as its product value. See the [Primetime Authentication documentation](https://tve.helpdocsonline.com/how-to-make-a-privacy-request) for more information. |

### Enhancements

* [!DNL Privacy Service] UI enhancements:
    * Separate job tracking pages for GDPR and CCPA regulations.
    * New *Regulation Type* dropdown to switch between tracking data for GDPR and CCPA.

## July 25, 2019

### New features

| Feature | Description |
| --- | --- |
| Request Metrics Dashboard | The new metrics dashboard in the [!DNL Privacy Service] UI provides visibility into submitted, errored, and completed GDPR requests.  |
| Request Builder | To service organizations with both technical and non-technical users submitting GDPR requests, a "Create Request" functionality has been added to the UI. The JSON file submission capability is still available in the [!DNL Privacy Service] UI for those organizations who prefer to continue using it. |
| GDPR Job Event Notifications | Event notifications about GDPR job statuses are a critical element to many workflows. While notifications were previously served using individual email notices, GDPR event notifications are messages that leverage Adobe I/O events, which are sent to a configured webhook facilitating job request automation. [!DNL Privacy Service] UI users can subscribe to Adobe I/O GDPR events to receive updates when a product or the GDPR job has been completed. |

## April 18, 2019

### Enhancements

* Default range for the status table in the [!DNL Privacy Service] UI modified to a 7-day span.
* Better internal exception handling.
* Improved performance by introducing caching for common internal calls with low data change rates.

### Bug fixes

* Added missing logging information for filtered queries for the `GET /` endpoint in the [!DNL Privacy Service] API.

## April 11, 2019

### Enhancements

* Updated UI to support new functionality for beta customers
* New metrics API to support UI 2.0 features in beta

## April 9, 2019

### Enhancements

* Updated all lookup (GET) API calls to default to a 30-day lookback range
* Restricted API usage to have a maximum lookback range of 45 days

## February 14, 2019

### Enhancements

* Enforce the `include` field in every POST submission.
* Enforce the `include` field when uploading JSON.

### Bug fixes

* Fixed an issue where customers could not load the [!DNL Privacy Service] UI.

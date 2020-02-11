---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Privacy Service FAQ
topic: troubleshooting
---

# Privacy Service FAQ

This document provides answers to frequently asked questions about Adobe Experience Platform Privacy Service.

Privacy Service provides a RESTful API and user interface to help companies manage customer data privacy requests. With Privacy Service, you can submit requests to access and delete private or personal customer data, facilitating automated compliance with organizational and legal privacy regulations.

## Can I use Privacy Service to clean up data that was accidentally sent to Platform?

Adobe does not support using Privacy Service for clearing out data that was accidentally submitted to a product. Privacy Service is designed to assist you in meeting your obligations for data subject (or consumer) access or delete requests. These requests are time-sensitive and are completed related to applicable privacy law. Submission of requests which are not data-subject/consumer access or delete requests impacts all Privacy Service customers and the ability for Privacy Service to support the appropriate legal timelines.

Please contact your account manager (CDM) to coordinate and provide a level of effort to remove any PII or data issues.

## How do I get information about the status of my privacy request or job?

You can retrieve details about a particular job by using the Privacy Service API or user interface.

### Using the API

To retrieve the status of a particular job using the Privacy Service API, make a request to the root (`GET /`) endpoint, using the job's ID in the request path. For more details, see the section on [checking the status of a job](api/privacy-jobs.md#check-the-status-of-a-job) in the Privacy Service developer guide.

### Using the UI

All active job requests are listed in the **Job Requests** widget on the Privacy Service UI dashboard. The status for each job request is displayed under the **Status** column. For more information on viewing job requests in the UI, please see the [Privacy Service user guide](ui/user-guide.md).

## How do I download the results of my completed privacy jobs?

The Privacy Service API and user interface both provide methods for downloading the results of completed jobs in ZIP format.

### Using the API

Make a request to the root (`GET /`) endpoint in the Privacy Service API, using the ID of the job whose results you want to download in the request path. If the job's status is complete, the API will include a `downloadURL` attribute in the response body. This attribute contains a URL that you can paste into the address bar of your browser to download the ZIP file.

For more details, see the section on [looking up a job by its ID](api/privacy-jobs.md#check-the-status-of-a-job) in the Privacy Service developer guide.

### Using the UI

On the Privacy Service UI dashboard, find the job you want to download from the **Job Requests** widget. Click the ID of the job to open the _Job Details_ page. From here, click **Download** in the top-right corner to download the ZIP file. See the [Privacy Service user guide](ui/user-guide.md) for more detailed steps.
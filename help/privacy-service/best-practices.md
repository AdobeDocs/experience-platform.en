---
title: Best practices for Privacy Service
description: Learn how to reduce the processing time and the costs incurred to your organization when completing privacy requests by following these optimal use guidelines.
---
# Best practices for Privacy Service

Use Privacy Service to automate compliance with data privacy regulations when customers wish to access or delete their personal data from your data stores. To address these evolving business needs, Privacy Service offers a RESTful API and UI to submit access and deletion requests for customer data across Adobe Experience Cloud applications.

This guide outlines the best practices to efficiently process privacy requests and optimize completion response times when managing customer data requests.

## Getting started {#getting-started}

This guide requires a working understanding of [Privacy Service](./home.md) and how it allows you to manage access and delete requests from your data subjects (customers) across Adobe Experience Cloud applications. 

Before continuing with this optimization guide, you are recommended to have read the guide on [creating a privacy job request in the UI](./ui/user-guide.md#create-a-new-privacy-job-request) or [the API guide](./api/overview.md) to perform these operations programmatically.

## Prerequisites {#prerequisites}

Access to Adobe Experience Platform Privacy Service is controlled through granular role-based permissions in Adobe Admin Console. You need the relevant permissions in a product profile to use specific features in the Privacy Service UI and API. See the guide on how to [manage permissions for Privacy Service](https://experienceleague.adobe.com/docs/experience-platform/privacy/permissions.html) for more information. Contact your system administrator if you require additional permissions.

## Privacy job creation guidelines {#creation-guidelines}

To streamline your request processing and improve response times, consider the following guidelines when creating privacy jobs. This applies to both the API and UI methods.

1. **Maximize data subjects per request:** Include as many data subjects as possible, up to 1000, per request.
2. **Group IDs for efficiency:** Group multiple IDs for a single data subject (up to nine) in each request. The **IDs can come from different Adobe services in the same request**.
3. **Combine access and delete jobs:** Include both "access" and "delete" job types in a single request if required by the data subject.
4. **Include only necessary products:** Only include products that are required or licensed. Additional products can elongate processing time and increase costs.

## Monitor privacy jobs status {#monitor-status}

To effectively monitor privacy jobs and check their status, Privacy Service provides three methods. The available methods are listed below in order of monitoring efficiency and productivity. Each method includes best practice guidelines to improve your experience. They are then followed by an ideal scenario example that combines all the approaches.

### Receive real-time notifications {#real-time-notifications}

**I/O Events** offer near real-time status monitoring through status events. This is the most efficient method as it avoids the need to implement polling mechanisms and incur additional API traffic. 

**Recommendations:**

- **Webhook setup:** Set up webhooks to receive PUSH notifications when status changes occur for submitted jobs. This aids in real-time monitoring.
- **Notifications:** Use notifications at both the job and product level to help monitor the progress of requests.

See the [subscribe to Privacy Service events documentation](./privacy-events.md) for instructions on setting up an event registration for Privacy Service notifications, and how to interpret notification payloads.

### Retrieve all jobs based on filters {#retrieve-filtered-responses-for-all-jobs}

To retrieve all your privacy job data based on any specified filters, **perform a GET request to the `/jobs` endpoint**. This API call is useful to provide a high-level view of the current job status for large sets of job IDs with only a single request. It does lack detailed product responses but they can be found using the [`/jobs/{jobID}` endpoint](#retrieve-detailed-responses-for-specific-jobs).

A GET request to the `/jobs` endpoint is best used to gather or compare the status data of a large set of job IDs. It is **not** meant for regular polling type activities.

**Recommendations:**

- **Query parameters:** Use specific filters to narrow your results, for example: data ranges, regulation types, and status (processing, complete, and so on).

You can view a list of all the current privacy jobs in your organization through the Privacy Service UI. See the [managing privacy jobs in the UI documentation](https://experienceleague.adobe.com/docs/experience-platform/privacy/ui/user-guide.html#job-requests) for information on how to filter the job request list. Alternatively, see the documentation on the [use of the /job endpoint in the Privacy Service API](./api/privacy-jobs.md).

The Privacy Service API documentation contains details on [the available query parameter filters](https://developer.adobe.com/experience-platform-apis/references/privacy-service/#tag/Privacy-jobs/operation/listPrivacyJobs).

### Retrieve detailed responses for a single job {#retrieve-detailed-responses-for-specific-jobs}

To retrieve detailed responses for a single job, **perform a GET request to the /jobs/{jobID} endpoint**. This method is intended for deeper information gathering, like product-specific responses and success messages. A call to this endpoint is the best way to see which products have responded and which are still pending, although it is **not** meant for regular polling activity.

See the `/jobs/{JOB_ID}` endpoint documentation for details on [how to check the status of a specific job](./api/privacy-jobs.md#check-status).

### Ideal scenario example {#ideal-scenario} 

Use a webhook so that the system can automatically update records and provide reporting or alerts when groups of the IDs from a request are complete. If jobs are still outstanding, the system retrieves these job statuses with a GET request to the Privacy Service API `/jobs` endpoint and provides a high-level update of the list. 

If a particular job is still pending, or has returned an error, you can retrieve the detailed response with a GET request to the `/job/{jobId}` endpoint.

>[!NOTE]
>
>Customer data is retained in the system for 30 days. You cannot query customer data that is older than 30 days.

## Access request data {#access-request-data}

When data-subject information is requested, each service returns data in a format that is consistent with the way they store and use that data. Once all services have completed the request, a .ZIP archive file URL is provided in the job details to allow for this data to be downloaded. See the troubleshooting guide for information on [how to download privacy job results](https://experienceleague.adobe.com/docs/experience-platform/privacy/troubleshooting-guide.html?lang=en#how-do-i-download-the-results-of-my-completed-privacy-jobs%3F). 

The following are key items of note relating to the management of the data archive:

- All archive files are deleted from Experience Platform servers after 30 days.
- The structure of the archive file includes folders for each product included in the request and the data files contained therein. Archive files or folders may be empty if no data was found for the specified ID
- The data for previously created jobs is only accessible for 30 days after the completion date. After that time the data is removed from the system, and a new request must be made.

**Recommendations:**

- **Protect Data Archives:** Both the URL and .ZIP file should be protected as they may contain PII for the data subject.

<!-- Q/ Regarding how users may get dropped from the gateway if a call last longer than 60 seconds. Is there any way for users to mitigate this? Please can you expand on this so i can include it in the troubleshooting guide. Also - is that for any PS API call?  -->

## Technical considerations

There are certain technical considerations to be aware of when completing Privacy Service requests:

- **Data Retention Period:** The data for previously created jobs is only accessible for 30 days after the completion date.
- **Gateway timeout:** Be mindful that your request may be dropped from the gateway if it exceeds 60 seconds.
- **Error Handling:** Review error messages thoroughly and resubmit requests where appropriate. Privacy Service does not automatically reprocess jobs following an error.

<!-- Please can you provide details on the 429 error so that the info can be included in the troubleshooting guide? 
- **Understanding 429 Errors:** Familiarize yourself with 429 error messages and their resolution to mitigate issues. -->

## Next steps

By reading this document, you now have the necessary knowledge and practices for efficient and effective use of the Privacy Service. Next, see the [troubleshooting guide](./troubleshooting-guide.md) for answers to frequently asked questions about Privacy Service, and information on commonly encountered errors in the API.

---
title: Privacy Service Error Codes in Adobe Experience Platform
description: Understand Privacy Service error codes so you can diagnose failures, handle job outcomes programmatically, and determine next steps when submitting or monitoring privacy jobs.
keywords: privacy service, error codes, privacy jobs, api errors
solution: Experience Platform
---
# Privacy Service error codes {#privacy-service-error-codes}

Use this reference to identify Privacy Service job outcomes, diagnose failures, and determine appropriate next steps when submitting or monitoring privacy jobs in **Adobe Experience Platform**. To learn how to create, submit, and monitor privacy jobs, see the [privacy jobs endpoint guide](./privacy-jobs.md) or the [Privacy Service UI user guide](../ui/user-guide.md).

Privacy Service error codes are a stable public contract. Each error code uniquely identifies a failure or completion state that you can rely on for programmatic handling and operational workflows.

The following guarantees apply when building automation or monitoring workflows:

* Error codes are stable once published.
* Error messages may change to improve clarity, but the code value does not.
* New error codes may be added over time; existing codes are not repurposed.

Use error codes, not message text, to implement automation or decision logic. For guidance on efficiently processing privacy jobs, monitoring job status, and handling errors without relying on polling or message strings, see [Privacy Service best practices](../best-practices.md).

## Error response format {#error-response-format}

Privacy Service returns error information in job and request responses. The response includes a numeric error code and a human-readable message in the response payload.

The error code conveys the authoritative outcome. The message provides additional context for troubleshooting.

This document describes the meaning and intent of each error code. For field-level response schemas and request details, see the [Privacy Service API documentation](https://developer.adobe.com/experience-platform-apis/references/privacy-service/).

## Error domains {#error-domains}

Error codes are grouped by functional domain to help you diagnose issues more quickly.

The domains used in this document include:

* **Request validation**: The request is malformed or contains invalid values. See the [privacy jobs endpoint guide](./privacy-jobs.md) for request structure and validation requirements.
* **Authorization and provisioning**: Your organization or user lacks the required access. See [manage permissions](../permissions.md) to review role-based permission requirements.
* **Identity and applicability**: Identifiers or namespaces are not applicable to the request. See [identity data for privacy requests](../identity-data.md) for supported identity types and namespace requirements.
* **Rate limiting**: Submission volume exceeds platform limits. When this error occurs, reduce the submission rate and try again.
* **Data access and processing**: The system cannot access or process the requested data. See the [troubleshooting guide](../troubleshooting-guide.md) for common causes and remediation steps.
* **Encryption and key management**: Required encryption keys are unavailable. See [Customer Managed Keys](../../landing/governance-privacy-security/customer-managed-keys/overview.md) for key access, configuration, and recovery guidance.
* **Job execution state**: The job completed fully, partially, or with failures. See the [privacy jobs endpoint guide](./privacy-jobs.md#status-categories) for descriptions of job status categories and their meanings.

>[!NOTE]
>
>Domain assignments reflect the intent of the error code, not internal service boundaries.

## Error code reference {#error-code-reference}

The following table lists all public Privacy Service error codes.

| Error code | HTTP status | Title                         | Description                                                                                                                                                                | 
| ---------- | ----------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| 1000-400   | 400         | Formatting error              | One or more data values for the specified application have formatting issues. Check the job details for additional information.                                            | 
| 1001-400   | 400         | Not authorized                | Your organization is not provisioned. Contact your administrator for additional information.                                                                               | 
| 1010-400   | 400         | Missing permissions           | You do not have the required permissions to perform this action. Contact your administrator to request access.                                                             | 
| 1020-400   | 400         | Upload and archive failure    | A problem occurred while uploading and archiving access data. Upload the access data and try again.                                                                        | 
| 1021-400   | 400         | Job failure                   | One or more privacy jobs created from the request failed. Review the details of the failed jobs for additional information.                                                | 
| 1022-400   | 400         | Data access failure           | A problem occurred while accessing the specified data. Review the job details for additional information.                                                                  | 
| 1023-400   | 400         | Data access failure           | A problem occurred while accessing or locating the specified dataset IDs. Verify that the provided IDs are valid, then try again.                                          |
| 1024-400   | 400         | Unexpected error              | An unexpected error occurred. Review the job details for additional information.                                                                                           | 
| 1030-400   | 400         | Document rate limit exceeded  | The workload exceeded the document rate limit. Reduce your submission rate, then try again.                                                                                | 
| 1040-400   | 400         | Key encryption access failure | The data could not be processed because the datastore is encrypted and key access was revoked. Contact your key vault administrator to restore access to the customer key. |
| 6000-200   | 200         | Success                       | The job completed successfully. Review the job details to confirm processed records and outcomes.                                                                          | 
| 6051-200   | 200         | Not provisioned               | Your organization is not provisioned for the requested application. The request is not applicable.                                                                         | 
| 6052-200   | 200         | User IDs not found            | Some user IDs were not found, and unknown user IDs are not applicable for this product. Ensure that the user IDs are valid, then try again.                                | 
| 6053-200   | 200         | Invalid namespace             | The provided identity namespace is not valid for this application. Use a namespace recognized by the system.                                                               | 
| 6054-200   | 200         | Partially completed           | The job completed for applicable data, but some data was not applicable to the request. Review the job details for additional information.                                 |

{style="table-layout:auto"}

---
title: Privacy Service error codes in Adobe Experience Platform
description: Reference guide to Privacy Service error codes in Adobe Experience Platform, including HTTP status meanings, error titles, and descriptions to help diagnose and resolve privacy job issues.
---
# Privacy Service error codes {#privacy-service-error-codes}

This document defines the public error codes returned by the Privacy Service in **[!DNL Adobe Experience Platform]**. Use this reference to understand error responses, identify the cause of a failure, and determine next steps when submitting or monitoring privacy jobs.

The scope of this document is limited to **error code contracts**. It does not describe internal processing logic or implementation details.


## Overview {#overview}

Privacy Service error codes are a **stable public contract**. Each error code uniquely identifies a failure or completion state that you can rely on for programmatic handling and operational workflows.

The following guarantees apply:

* Error codes are stable once published.
* Error messages may change to improve clarity, but the code value does not.
* New error codes may be added over time; existing codes are not repurposed.

Use error codes, not message text, to implement automation or decision logic.


## Error response format {#error-response-format}

Privacy Service returns error information as part of job and request responses. Error metadata includes a numeric error code and a human-readable message.

The error code conveys the authoritative outcome. The message provides additional context for troubleshooting.

This document describes the **meaning and intent** of each error code. For field-level response schemas, see the Privacy Service API documentation.


## Error domains {#error-domains}

Error codes are grouped by functional domain to support faster diagnosis and ownership alignment.

The domains used in this document include:

* **Request validation** — The request is malformed or contains invalid values.
* **Authorization and provisioning** — Your organization or user lacks required access.
* **Identity and applicability** — Identifiers or namespaces are not applicable to the request.
* **Rate limiting** — Submission volume exceeds platform limits.
* **Data access and processing** — The system cannot access or process requested data.
* **Encryption and key management** — Required encryption keys are unavailable.
* **Job execution state** — The job completed fully, partially, or with failures.

Domain assignments reflect the intent of the error code, not internal service boundaries.


## Error code reference {#error-code-reference}

The following table lists all public Privacy Service error codes.
Only **deterministic information** from the source YAML is populated.
Fields that require SME validation are intentionally left blank.

| Error code | HTTP status | Title                         | Description | Probable cause | Resolution | Retry behavior |
| ---------- | ----------- | ----------------------------- | -----------------------------------------------------------| -------------- | ---------- | -------------- |
| 1000-400   | 400         | Formatting error              | One or more data values for the specified application have formatting issues. Check the job details for additional information.                                            | —              | —          | —              |
| 1001-400   | 400         | Not authorized                | Your organization is not provisioned. Contact your administrator for additional information.                                                                               | —              | —          | —              |
| 1010-400   | 400         | Missing permissions           | You do not have the required permissions to perform this action. Contact your administrator to request access.                                                             | —              | —          | —              |
| 1020-400   | 400         | Upload and archive failure    | A problem occurred while uploading and archiving access data. Upload the access data and try again.                                                                        | —              | —          | —              |
| 1021-400   | 400         | Job failure                   | One or more privacy jobs created from the request failed. Review the details of the failed jobs for additional information.                                                | —              | —          | —              |
| 1022-400   | 400         | Data access failure           | A problem occurred while accessing the specified data. Review the job details for additional information.                                                                  | —              | —          | —              |
| 1023-400   | 400         | Data access failure           | A problem occurred while accessing or locating the specified dataset IDs. Verify that the provided IDs are valid, then try again.                                          | —              | —          | —              |
| 1024-400   | 400         | Unexpected error              | An unexpected error occurred. Review the job details for additional information.                                                                                           | —              | —          | —              |
| 1030-400   | 400         | Document rate limit exceeded  | The workload exceeded the document rate limit. Reduce your submission rate, then try again.                                                                                | —              | —          | —              |
| 1040-400   | 400         | Key encryption access failure | The data could not be processed because the datastore is encrypted and key access was revoked. Contact your key vault administrator to restore access to the customer key. | —              | —          | —              |
| 6000-200   | 200         | Success                       | The job completed successfully. Review the job details for additional information.                                                                                         | —              | —          | —              |
| 6051-200   | 200         | Not provisioned               | Your organization is not provisioned for the requested application. The request is not applicable.                                                                         | —              | —          | —              |
| 6052-200   | 200         | User IDs not found            | Some user IDs were not found, and unknown user IDs are not applicable for this product. Ensure that the user IDs are valid, then try again.                                | —              | —          | —              |
| 6053-200   | 200         | Invalid namespace             | The provided identity namespace is not valid for this application. Use a namespace recognized by the system.                                                               | —              | —          | —              |
| 6054-200   | 200         | Partially completed           | The job completed for applicable data, but some data was not applicable to the request. Review the job details for additional information.                                 | —              | —          | —              |


## Next steps {#next-steps}

* Validate **probable causes**, **resolutions**, and **retry behavior** with Privacy Service SMEs.
* Confirm domain assignments for each error code.
* Link this reference from the Privacy Service API documentation once finalized.


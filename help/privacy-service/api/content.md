---
title: Dataset Expiration API Endpoint
description: The /jobs .
role: Developer
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
---
# 

To retrieve information about a specific job, make a GET request to the /jobs endpoint and include the job's `jobId` in the path.

**Response**

```json
{
    "jobId":"dbe3a6a6-f8e6-11ee-a365-8d1d6df81cc5",
    "requestId":"17129380910360540RX-753",
    "userKey":"1234",
    "action":"access",
    "status":"processing",
    "submittedBy":"tboyer@adobe.com",
    "createdDate":"04/12/2024 04:08 PM GMT",
    "lastModifiedDate":"04/12/2024 04:08 PM GMT",
    "userIds":[{"namespace":"ECID",
    "value":"1234",
    "type":"standard",
    "namespaceId":4,
    "isDeletedClientSide":false}],
    "productResponses":[{
        "product":"Identity",
        "retryCount":0,
        "processedDate":"04/12/2024 04:08 PM GMT",
        "productStatusResponse":{"status":"submitted"
        }}],
    "downloadUrl":"https://platform-stage.adobe.io/data/core/privacy/jobs/dbe3a6a6-f8e6-11ee-a365-8d1d6df81cc5/content",
    "regulation":"gdpr"
}
```

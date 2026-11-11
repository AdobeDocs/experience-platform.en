---
keywords: Experience Platform;home;popular topics;date range
title: Standard alert rules
description: This document covers the predefined alert rules provided by Experience Platform.
feature: Alerts
exl-id: b4af1c15-b1bc-4e4b-a447-09cc17a63988
TQID: 'https://experienceleague.adobe.com/R0DgxagdfYwL4-qOxLp-IzuLi0smrnQwaZzTw1snmIg'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a7150a74-b8a9-4042-b066-147c5f0ca505
    internal-label: Alerts
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Standard alert rules

Adobe Experience Platform provides predefined alert rules that you can enable for your organization. This document describes the Adobe-provided alert rules available in Experience Platform. For general information about alerts, see the [alerts overview](./overview.md).

When you [view alert rules](./ui.md) in Experience Platform, you subscribe to each rule individually. When you subscribe through [I/O Events notifications](./subscribe.md), Experience Platform groups alert rules into subscription packages. The tables below list each alert rule and its corresponding I/O Events subscription package.

## Audit {#audit}

The following alert rules apply to [Audit events](../../landing/governance-privacy-security/audit-logs/overview.md).

>[!BEGINTABS]

>[!TAB Audience audit event info]

+++Audience create

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Audit event info | Audience create | This alert triggers when an audience is created. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “e2edate20240906124815test5”,
   “payload”: {
      “assetType”: “Audience”,
      “assetId”: “66d0befc2ab9f1fdefdd3398”,
      “assetName”: “acme”,
      “timestamp”: “1725652096559”,
      “action”: “Create”,
      “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
      “sandboxName”: “prod”,
      “requestId”: “requestId-e2edate20240906124815test5”
   },
   “header”: {
      “_adobeio”: {
         “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
         “providerMetadata”: “aep_observability_catalog_events”,
         “eventCode”: “audit_events_info”
      }
   },
   “alertName”: “Audit event info”
}
```

+++

+++Audience delete

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Audit event info | Audience delete | This alert triggers when an audience is deleted. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “e2edate20240906124815test5”,
   “payload”: {
      “assetType”: “Audience”,
      “assetId”: “66d0befc2ab9f1fdefdd3398”,
      “assetName”: “acme”,
      “timestamp”: “1725652096559”,
      “action”: “Delete”,
      “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
      “sandboxName”: “prod”,
      “requestId”: “requestId-e2edate20240906124815test5”
   },
   “header”: {
      “_adobeio”: {
         “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
         “providerMetadata”: “aep_observability_catalog_events”,
         “eventCode”: “audit_events_info”
      }
   },
   “alertName”: “Audit event info”
}
```

+++

+++Audience update

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Audit event info | Audience update | This alert triggers when an audience is updated. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “e2edate20240906124815test5”,
   “payload”: {
      “assetType”: “Audience”,
      “assetId”: “66d0befc2ab9f1fdefdd3398”,
      “assetName”: “acme”,
      “timestamp”: “1725652096559”,
      “action”: “Update”,
      “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
      “sandboxName”: “prod”,
      “requestId”: “requestId-e2edate20240906124815test5”
   },
   “header”: {
      “_adobeio”: {
         “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
         “providerMetadata”: “aep_observability_catalog_events”,
         “eventCode”: “audit_events_info”
      }
   },
   “alertName”: “Audit event info”
}
```

+++

>[!TAB Dataset audit event info]

+++Dataset create

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Audit event info | Dataset create | This alert triggers when a dataset is created. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “e2edate20240906124815test5”,
   “payload”: {
      “assetType”: “Dataset”,
      “assetId”: “66d0befc2ab9f1fdefdd3398”,
      “assetName”: “acme”,
      “timestamp”: “1725652096559”,
      “action”: “Create”,
      “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
      “sandboxName”: “prod”,
      “requestId”: “requestId-e2edate20240906124815test5”
   },
   “header”: {
      “_adobeio”: {
         “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
         “providerMetadata”: “aep_observability_catalog_events”,
         “eventCode”: “audit_events_info”
      }
   },
   “alertName”: “Audit event info”
}
```

+++

+++Dataset delete

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Audit event info | Dataset delete | This alert triggers when a dataset is deleted. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “e2edate20240906124815test5”,
   “payload”: {
      “assetType”: “Dataset”,
      “assetId”: “66d0befc2ab9f1fdefdd3398”,
      “assetName”: “acme”,
      “timestamp”: “1725652096559”,
      “action”: “Delete”,
      “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
      “sandboxName”: “prod”,
      “requestId”: “requestId-e2edate20240906124815test5”
   },
   “header”: {
      “_adobeio”: {
         “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
         “providerMetadata”: “aep_observability_catalog_events”,
         “eventCode”: “audit_events_info”
      }
   },
   “alertName”: “Audit event info”
}
```

+++

+++Dataset update

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Audit event info | Dataset update | This alert triggers when a dataset is updated. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “e2edate20240906124815test5”,
   “payload”: {
      “assetType”: “Dataset”,
      “assetId”: “66d0befc2ab9f1fdefdd3398”,
      “assetName”: “acme”,
      “timestamp”: “1725652096559”,
      “action”: “Update”,
      “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
      “sandboxName”: “prod”,
      “requestId”: “requestId-e2edate20240906124815test5”
   },
   “header”: {
      “_adobeio”: {
         “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
         “providerMetadata”: “aep_observability_catalog_events”,
         “eventCode”: “audit_events_info”
      }
   },
   “alertName”: “Audit event info”
}
```

+++

>[!TAB Schema audit event info]

+++Schema create

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Audit event info | Schema create | This alert triggers when a schema is created. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “e2edate20240906124815test5”,
   “payload”: {
      “assetType”: “Schema”,
      “assetId”: “66d0befc2ab9f1fdefdd3398”,
      “assetName”: “acme”,
      “timestamp”: “1725652096559”,
      “action”: “Create”,
      “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
      “sandboxName”: “prod”,
      “requestId”: “requestId-e2edate20240906124815test5”
   },
   “header”: {
      “_adobeio”: {
         “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
         “providerMetadata”: “aep_observability_catalog_events”,
         “eventCode”: “audit_events_info”
      }
   },
   “alertName”: “Audit event info”
}
```

+++

+++Schema delete

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Audit event info | Schema delete | This alert triggers when a schema is deleted. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “e2edate20240906124815test5”,
   “payload”: {
      “assetType”: “Schema”,
      “assetId”: “66d0befc2ab9f1fdefdd3398”,
      “assetName”: “acme”,
      “timestamp”: “1725652096559”,
      “action”: “Delete”,
      “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
      “sandboxName”: “prod”,
      “requestId”: “requestId-e2edate20240906124815test5”
   },
   “header”: {
      “_adobeio”: {
         “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
         “providerMetadata”: “aep_observability_catalog_events”,
         “eventCode”: “audit_events_info”
      }
   },
   “alertName”: “Audit event info”
}
```

+++

+++Schema update

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Audit event info | Schema update | This alert triggers when a schema is updated. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “e2edate20240906124815test5”,
   “payload”: {
      “assetType”: “Schema”,
      “assetId”: “66d0befc2ab9f1fdefdd3398”,
      “assetName”: “acme”,
      “timestamp”: “1725652096559”,
      “action”: “Update”,
      “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
      “sandboxName”: “prod”,
      “requestId”: “requestId-e2edate20240906124815test5”
   },
   “header”: {
      “_adobeio”: {
         “imsOrgId”: “4E5F3EB95C746F890A49400A@AdobeOrg”,
         “providerMetadata”: “aep_observability_catalog_events”,
         “eventCode”: “audit_events_info”
      }
   },
   “alertName”: “Audit event info”
}
```

+++

>[!ENDTABS]

## Capacity {#capacity}

The following alert rules apply to [capacity management](../../landing/license-usage-and-guardrails/capacity.md).

>[!BEGINTABS]

>[!TAB Streaming throughput capacity alerts]

+++Streaming throughput capacity breached

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| streaming_throughput_capacity_breached | Streaming throughput capacity breached | This alert triggers when streaming throughput exceeds the allocated capacity. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “status”: “FIRING”,
   “name”: “streaming_throughput_capacity_breached”,
   “message”: “Triggered: The rate of incoming events has reached 115% of the streaming throughput capacity in the last 2 minutes for sandbox ‘prod’”,
   “createdAt”: “2025-08-09T06:12:29.628Z”,
   “severity”: “high”,
   “imsOrgId”: “060E44945B3445240A494023@AdobeOrg”,
   “sandboxName”: “prod”,
   “sandboxId”: “d0d98060-d0f9-11e9-b164-ed6a398c8b35”,
   “value”: “115”,
   “url”: “https://experience-stage.adobe.com/#/@060E44945B3445240A494023@AdobeOrg/sname:prod/platform/license-usage/capacity”,
   “alertName”: “Streaming Throughput Capacity Breached”}
```

+++

+++Streaming throughput at 80% capacity

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| streaming_throughput_capacity_approaching_80 | Streaming throughput at 80% capacity | The streaming throughput has reached 80% of allocated capacity. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “status”: “FIRING”,
   “name”: “streaming_throughput_capacity_approaching_80”,
   “message”: “Triggered: The rate of incoming events has reached 80% of the streaming throughput capacity 85% in the last 2 minutes for sandbox ‘prod’”,
   “createdAt”: “2025-08-09T05:31:29.628Z”,
   “severity”: “medium”,
   “imsOrgId”: “060E44945B3445240A494023@AdobeOrg”,
   “sandboxName”: “prod”,
   “sandboxId”: “d0d98060-d0f9-11e9-b164-ed6a398c8b35”,
   “value”: “85”,
   “url”: “https://experience-stage.adobe.com/#/@060E44945B3445240A494023@AdobeOrg/sname:prod/platform/license-usage/capacity”,
   “alertName”: “Streaming Throughput At 80% Capacity”}
```

+++

+++Streaming throughput at 90% capacity

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| streaming_throughput_capacity_approaching_90 | Streaming throughput at 90% capacity | The streaming throughput has reached 90% of allocated capacity. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “status”: “FIRING”,
   “name”: “streaming_throughput_capacity_approaching_90”,
   “message”: “Triggered : The rate of incoming events has reached 90% of the streaming throughput capacity 98% in the last 2 minutes for sandbox ‘prod’”,
   “createdAt”: “2025-08-09T05:52:29.628Z”,
   “severity”: “medium”,
   “imsOrgId”: “060E44945B3445240A494023@AdobeOrg”,
   “sandboxName”: “prod”,
   “sandboxId”: “d0d98060-d0f9-11e9-b164-ed6a398c8b35”,
   “value”: “98”,
   “url”: “https://experience-stage.adobe.com/#/@060E44945B3445240A494023@AdobeOrg/sname:prod/platform/license-usage/capacity”,
   “alertName”: “Streaming Throughput At 90% Capacity”}
```

+++

+++Streaming throughput set to zero

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| streaming_throughput_capacity_zero | Streaming throughput set to zero | The streaming throughput capacity is set to zero, but a rate of incoming events was detected. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “status”: “FIRING”,
   “name”: “streaming_throughput_capacity_zero”,
   “message”: “Triggered: The streaming throughput capacity is set to zero, but a rate of incoming events was detected. Please review the configured capacity.”,
   “createdAt”: “2025-08-09T05:52:29.628Z”,
   “severity”: “high”,
   “imsOrgId”: “060E44945B3445240A494023@AdobeOrg”,
   “sandboxName”: “prod”,
   “sandboxId”: “d0d98060-d0f9-11e9-b164-ed6a398c8b35”,
   “value”: “0”,
   “url”: “https://experience-stage.adobe.com/#/@060E44945B3445240A494023@AdobeOrg/sname:prod/platform/license-usage/capacity”,
   “alertName”: “Streaming Throughput Set to Zero”,
   “header”: {
      “_adobeio”: {
         “imsOrgId”: “060E44945B3445240A494023@AdobeOrg”,
         “providerMetadata”: “${provider_metadata_id}”,
         “eventCode”: “streaming_throughput_capacity_zero”
      }
   }
}
```

+++

>[!ENDTABS]

## Destinations {#destinations}

The following alert rules apply to [Destinations](../../destinations/home.md).

>[!BEGINTABS]

>[!TAB Flow run alerts]

+++Destination Flow Run Start

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Destination Flow Run Start | Destination Flow Run Start | This alert triggers when a destination flow run starts activating an audience. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “4950662c-aa5f-42ec-9258-d2782b02326e”,
   “createdAt”: 1694471779205,
   “updatedAt”: 1694471779205,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “AepActivationService”,
   “updatedClient”: “AepActivationService”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “acme sandbox”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “segment:615545c0-8902-4f28-b4c2-4d89bd788b93”,
   “etag”: "“2100c958-0000-0a00-0000-64ff96630000"”,
   “metrics”: {
      “statusSummary”: {
         “status”: “inProgress”
      }
   },
   “activities”: [],
   “flowName”: “consent-e2e-azure-blob-destination”,
   “alertName”: “Destination Flow Run Start”
}
```

+++

+++Destination Flow Run Success

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Destination Flow Run Success | Destination Flow Run Success | This alert triggers when an audience is successfully activated to a destination. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “980c20c2-5eb3-4ecd-859b-20205f62bc60”,
   “createdAt”: 1694472975816,
   “updatedAt”: 1694473015605,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “AepActivationService”,
   “updatedClient”: “acme_client”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “acme sandbox”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “a412d8709fc3ea6f8b965756bf55fe30”,
   “etag”: "“2100086b-0000-0a00-0000-64ff9b370000"”,
   “metrics”: {
      “durationSummary”: {
         “startedAtUTC”: 1694472998780,
         “completedAtUTC”: 1694473011909
      },
      “sizeSummary”: {
         “inputBytes”: 666,
         “outputBytes”: 666
      },
      “recordSummary”: {
         “inputRecordCount”: 8,
         “createdRecordCount”: 8,
         “outputRecordCount”: 8,
         “skippedRecordCount”: 0,
         “sourceSummaries”: [{
            “id”: “4a378505-7aa5-4da1-821c-87a1fb6e79f1”,
            “inputRecordCount”: 8,
            “skippedRecordCount”: 0,
            “entitySummaries”: [{
               “id”: “segment:6eb2a673-faff-400f-9463-df8a90c28666”,
               “inputRecordCount”: 8,
               “skippedRecordCount”: 0
            }]
         }],
         “targetSummaries”: [{
            “id”: “e0b9f225-65cd-4db7-ae4f-cdc152c35eea”,
            “createdRecordCount”: 8,
            “outputRecordCount”: 8,
            “entitySummaries”: [{
               “id”: “segment:6eb2a673-faff-400f-9463-df8a90c28666”,
               “createdRecordCount”: 8,
               “outputRecordCount”: 8
            }]
         }]
      },
      “fileSummary”: {
         “inputFileCount”: 1,
         “outputFileCount”: 1
      },
      “statusSummary”: {
         “status”: “success”
      }
   },
   “activities”: [{
      “id”: “c4f238e3-7334-4933-8b56-64d7ea43ea54”,
      “name”: “Activation Batch XdmProcessor Activity”,
      “updatedAtUTC”: 0,
      “durationSummary”: {
         “startedAtUTC”: 1694472998780,
         “completedAtUTC”: 1694472998843
      },
      “latencySummary”: {},
      “sizeSummary”: {
         “inputBytes”: 666,
         “outputBytes”: 666
      },
      “recordSummary”: {
         “inputRecordCount”: 8,
         “createdRecordCount”: 8,
         “outputRecordCount”: 8,
         “skippedRecordCount”: 0
      },
      “fileSummary”: {
         “inputFileCount”: 1,
         “outputFileCount”: 1
      },
      “statusSummary”: {
         “status”: “success”,
         “extensions”: {
            “incremental.endCheckpoint”: “”,
            “full.incremental.batchId”: “”,
            “incremental.datasetId”: “”,
            “incremental.startCheckpoint”: “”,
            “full.snapshot.batchId”: “”,
            “full.incremental.datasetId”: “”,
            “full.snapshot.datasetId”: “”
         }
      }
   }, {
      “id”: “51d82b36-6b8f-11eb-9439-0242ac130002”,
      “name”: “Activation Batch Publisher Activity”,
      “updatedAtUTC”: 0,
      “durationSummary”: {
         “startedAtUTC”: 1694473006829,
         “completedAtUTC”: 1694473011909
      },
      “latencySummary”: {},
      “sizeSummary”: {
         “outputBytes”: 666
      },
      “recordSummary”: {
         “inputRecordCount”: 8,
         “createdRecordCount”: 8,
         “outputRecordCount”: 8,
         “skippedRecordCount”: 0
      },
      “fileSummary”: {
         “outputFileCount”: 1
      },
      “statusSummary”: {
         “status”: “success”,
         “extensions”: {}
      }
   }],
   “flowName”: “consent-e2e-azure-blob-destination”,
   “alertName”: “Destination Flow Run Success”
}
```

+++

+++Destination Flow Run Delay

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Destination Flow Run Delay | Destination Flow Run Delay | This alert triggers when a destination flow run takes longer than 300 minutes to activate an audience.<br><br>**NOTE:** Alert evaluation stops after 10 hours, even if the issue persists. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “47e555d4-bd39-4880-a555-d4bd39688079”,
   “status”: “FIRING”,
   “name”: “destinations_flow_run_delay”,
   “message”: “Triggered: Destination Flow Run Delay ACCV8_Close_Loop_High_Churn has been processing for more than 300 minutes. The current value is 301 minutes.”,
   “createdAt”: “2023-09-12T18:41:54.661Z”,
   “severity”: “high”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “sandboxName”: “tmo-prod”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “value”: “301”,
   “url”: “https://experience.adobe.com/#/@1358406C534BC94D0A490D4D@AdobeOrg/sname:tmo-prod/platform/monitoring/dashboard?pageType=destination&flowId=dbc5c132-bc2a-4625-85c1-32bc2a262558&runId=3a4c7446-db90-4dc2-ba74-29bc76a11c84&us_redirect=true”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “flowRunId”: “3a4c7446-db90-4dc2-ba74-29bc76a11c84”,
   “alertName”: “Destination Flow Run Delay”
}
```

+++

+++Destination Flow Run Failure

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Destination Flow Run Failure | Destination Flow Run Failure | This alert triggers when an error occurs while activating an audience to a destination. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “3408c0ed-15f4-47d4-bf10-d81b78e964f1”,
   “createdAt”: 1694473456702,
   “updatedAt”: 1694473477107,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “aep_activation_batch”,
   “updatedClient”: “acme_client”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “dev”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “fa4a13d08f04b07e0bc826035886e137”,
   “etag”: "“2e00cc31-0000-0d00-0000-64ff9d050000"”,
   “metrics”: {
      “durationSummary”: {
         “startedAtUTC”: 1694473459275,
         “completedAtUTC”: 1694473459282
      },
      “recordSummary”: {
         “sourceSummaries”: [{
            “id”: “4b9cf91a-5b57-4178-948a-a0286fcb84b3”,
            “inputRecordCount”: 0,
            “skippedRecordCount”: 0,
            “entitySummaries”: [{
               “id”: “dataset:5e55b556c2ae4418a8446037”,
               “inputRecordCount”: 0,
               “skippedRecordCount”: 0
            }]
         }],
         “failedInfo”: [{
            “code”: “ACTBTC-1105-400”,
            “message”: “A Platform-internal error has occurred. The dataset cannot be retrieved for the data export with the parameters flowId=dbc5c132-bc2a-4625-85c1-32bc2a262558 datasetId=5e55b556c2ae4418a8446037. The incremental dataset with ID 5e55b556c2ae4418a8446037 was not found. Please verify that the dataset exists and contact customer support if the problem persists.”
         }]
      },
      “statusSummary”: {
         “status”: “failed”,
         “errors”: [{
            “code”: “ACTBTC-1105-400”,
            “message”: “A Platform-internal error has occurred. The dataset cannot be retrieved for the data export with the parameters flowId=dbc5c132-bc2a-4625-85c1-32bc2a262558 datasetId=5e55b556c2ae4418a8446037. The incremental dataset with ID 5e55b556c2ae4418a8446037 was not found. Please verify that the dataset exists and contact customer support if the problem persists.”
         }],
         “activityRefs”: [“c4f238e3-7334-4933-8b56-64d7ea43ea54”]
      }
   },
   “activities”: [{
      “id”: “c4f238e3-7334-4933-8b56-64d7ea43ea54”,
      “name”: “Activation Batch XdmProcessor Activity”,
      “updatedAtUTC”: 0,
      “durationSummary”: {
         “startedAtUTC”: 1694473459275,
         “completedAtUTC”: 1694473459282
      },
      “latencySummary”: {},
      “sizeSummary”: {},
      “recordSummary”: {
         “failedInfo”: [{
            “code”: “ACTBTC-1105-400”,
            “message”: “A Platform-internal error has occurred. The dataset cannot be retrieved for the data export with the parameters flowId=dbc5c132-bc2a-4625-85c1-32bc2a262558 datasetId=5e55b556c2ae4418a8446037. The incremental dataset with ID 5e55b556c2ae4418a8446037 was not found. Please verify that the dataset exists and contact customer support if the problem persists.”
         }]
      },
      “fileSummary”: {},
      “statusSummary”: {
         “status”: “failed”,
         “errors”: [{
            “code”: “ACTBTC-1105-400”,
            “message”: “A Platform-internal error has occurred. The dataset cannot be retrieved for the data export with the parameters flowId=dbc5c132-bc2a-4625-85c1-32bc2a262558 datasetId=5e55b556c2ae4418a8446037. The incremental dataset with ID 5e55b556c2ae4418a8446037 was not found. Please verify that the dataset exists and contact customer support if the problem persists.”
         }],
         “extensions”: {}
      }
   }],
   “flowName”: “AEP to ACM DEV Dataset”,
   “alertName”: “Destination Flow Run Failure”
}
```

+++

+++Streaming destination completed

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Destination flow run info | Streaming destination completed | This alert triggers when data has completed processing from a streaming destination dataflow run. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “dc9b6e4d-d920-46a0-a5bc-c00755a9asd727asd59”,
   “createdAt”: 1698104702720,
   “updatedAt”: 1698236253545,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “acme_foundation_connectors”,
   “updatedClient”: “acme_foundation_connectors”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “prod”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “1698102000000-1698105600000”,
   “etag”: "“c3004478-0000-0200-0000-6539075d0000"”,
   “metrics”: {
      “durationSummary”: {
         “startedAtUTC”: 1698102000000,
         “completedAtUTC”: 1698236208000
      },
      “sizeSummary”: {
         “outputBytes”: 0,
         “failedBytes”: 0
      },
      “recordSummary”: {
         “inputRecordCount”: 3,
         “createdRecordCount”: 0,
         “outputRecordCount”: 0,
         “skippedRecordCount”: 0,
         “failedRecordCount”: 3,
         “failedInfo”: [
               {
               “code”: “ACTSVC-9001-500”,
               “message”: “An internal processing error was reported. There is either a metadata misconfiguration or a data processing error in the system. Try again later and contact your system administrator if the problem persists.”,
               “count”: 3,
               “type”: “Error”
            }
         ]
      },
      “statusSummary”: {
         “status”: “failed”,
         “activityRefs”: [
            “076085f8-255a-11ee-be56-0242ac120002”
         ]
      }
   },
   “flowName”: “Test FB Consent”,
   “flowType”: “streaming”,
   “message”: “Test FB Consent run which started at 2023-10-23 23:45:02 completed.”,
   “url”: “https://experience-stage.adobe.com/@4E5F3EB95C746F890A49400A@AdobeOrg/sname:prod/platform/monitoring/dashboard?pageType=destination&flowId=c505ab27-4007-4646-937b-22722a650753&runId=dc9b6e4d-d920-46a0-a5bc-c00755a9asd727asd59&us_redirect=true”,
   “alertName”: “Destination flow run info”
}
```

+++

>[!TAB Threshold alerts]

+++Skippage rate exceeds threshold

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Destination skippage rate exceeds threshold | Skippage rate exceeds threshold | This alert triggers when the ratio of skipped IDs to total IDs exceeds a threshold. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “01d0e66d-0591-40a9-90e6-6d059110a9af”,
   “status”: “FIRING”,
   “name”: “activation_skipped_rate_exceeded”,
   “message”: “Triggered: Activation Skipped Rate Exceeded is above 1%. The current value is 3%.”,
   “createdAt”: “2023-09-12T16:10:38.867Z”,
   “severity”: “high”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “sandboxName”: “prod”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “value”: “3”,
   “url”: “https://experience.adobe.com/#/@A565899B544AA2E80A4C98BC@AdobeOrg/sname:prod/platform/monitoring/dashboard?pageType=destination&flowId=dbc5c132-bc2a-4625-85c1-32bc2a262558&us_redirect=true”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “alertName”: “Activation Skipped Rate Exceeded”
}
```

+++

+++Activation failure rate exceeds threshold

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Activation failure rate exceeds threshold | Activation failure rate exceeds threshold | This alert triggers when the failed record count during data activation exceeds the allowed threshold. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “status”: “firing”,
   “labels”: {
      “acp_sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
      “acp_sandboxName”: “acme”,
      “alertname”: “activation_failed_rate_exceeded”,
      “app_name”: “acp-customer-alerts”,
      “enm_cluster”: “acmeprodaus5”,
      “enm_env”: “prod”,
      “enm_region”: “aus5”,
      “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
      “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
      “prometheus”: “ethosCluster-ns-team-experience-platform–customer-alert-routing-s-1ab1111”
   },
   “annotations”: {
      “currentValue”: “9”,
      “custom”: “false”,
      “description”: “Activation Failed Rate Exceeded is above 1%. The current value is $currentValue%.”,
      “severity”: “high”,
      “title”: “Activation Failed Rate Exceeded”
   },
   “startsAt”: “2025-10-11T14:23:18.392Z”,
   “endsAt”: “0001-01-01T00:00:00Z”,
   “alertName”: “Activation failure rate exceeds threshold”
}
```

+++

>[!ENDTABS]

## Identity {#identity}

The following alert rules apply to [Identity Service](../../identity-service/home.md).

>[!BEGINTABS]

>[!TAB Flow run alerts]

+++Identity Service Flow Run Start

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Identity Service Flow Run Start | Identity Service Flow Run Start | This alert triggers when an Identity Service flow run starts processing data. Ingested data is being loaded from the Data Lake into Identity Service. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “3c41c35b-d11e-40f1-9566-a5e762c28b59”,
   “createdAt”: 1693592240366,
   “updatedAt”: 1693592240366,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “acme_client”,
   “updatedClient”: “acme_client”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “prod”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “64f22aaf0b0eba2866deff2a”,
   “etag”: "“1a0059ab-0000-0a00-0000-64f22ab00000"”,
   “metrics”: {
      “statusSummary”: {
         “status”: “inProgress”
      }
   },
   “activities”: [],
   “flowName”: “Datalake to Identity Service Flow”,
   “alertName”: “Identity Service Flow Run Start”
}
```

+++

+++Identity Service Flow Run Success

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Identity Service Flow Run Success | Identity Service Flow Run Success | This alert triggers when data is successfully loaded from the Data Lake into Identity Service. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “1a1dd6ad-a033-4e1f-a5be-1fa2c2698ca4”,
   “createdAt”: 1694466196663,
   “updatedAt”: 1694467528023,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “acme_client”,
   “updatedClient”: “acme_client”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “prod”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “64ff8094a3c348289dc9a7a9”,
   “etag”: “110013a7-0000-1b00-0000-64ff85c80000",
   “predecessors”: [{
      “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
      “flowRunId”: “e2af312c-6465-47d1-92bc-e21f26c4a8df”,
      “flowSpec”: {
         “id”: “9753525b-82c7-4dce-8a9b-5ccfce2b9876”,
         “version”: “1.0”
      }
   }],
   “metrics”: {
      “durationSummary”: {
         “startedAtUTC”: 1694466196065,
         “completedAtUTC”: 1694467520000
      },
      “recordSummary”: {
         “inputRecordCount”: 1,
         “createdRecordCount”: 0,
         “updatedRecordCount”: 1,
         “outputRecordCount”: 0,
         “skippedRecordCount”: 0,
         “failedRecordCount”: 0,
         “deletedRecordCount”: 0,
         “targetSummaries”: [{
            “id”: “4c4810e6-a595-4667-852a-bf75e1b02e8a”,
            “createdRecordCount”: 0,
            “outputRecordCount”: 0,
            “updatedRecordCount”: 1,
            “deletedRecordCount”: 0
         }, {
            “id”: “4d5afd86-cb3a-459d-9c0b-81a0599d5a7d”,
            “createdRecordCount”: 0,
            “outputRecordCount”: 0,
            “updatedRecordCount”: 0
         }]
      },
      “statusSummary”: {
         “status”: “success”
      }
   },
   “activities”: [{
      “id”: “46382888-2f46-11eb-adc1-0242ac120002”,
      “name”: “Identity Service Batch Activity”,
      “updatedAtUTC”: 0,
      “durationSummary”: {
         “startedAtUTC”: 1694466196065,
         “completedAtUTC”: 1694467520000
      },
      “latencySummary”: {},
      “sizeSummary”: {},
      “recordSummary”: {
         “inputRecordCount”: 1,
         “createdRecordCount”: 0,
         “updatedRecordCount”: 1,
         “outputRecordCount”: 0,
         “skippedRecordCount”: 0,
         “failedRecordCount”: 0,
         “deletedRecordCount”: 0
      },
      “fileSummary”: {},
      “statusSummary”: {
         “status”: “success”,
         “extensions”: {}
      }
   }],
   “flowName”: “Datalake to Identity Service Flow”,
   “alertName”: “Identity Service Flow Run Success”
}
```

+++

>[!TAB Ingestion alerts]

+++Identity Service Flow Run Delay

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Identity Ingestion Delays, Failures and Errors | Identity Service Flow Run Delay | This alert triggers when an Identity Service flow run takes longer than 150 minutes to process.<br><br>**NOTE:** Alert evaluation stops after 10 hours, even if the issue persists. |

{style="table-layout:auto"}

**Schema payload**

```
{
  “id”: “cf60faf1-eae7-4d79-a0fa-f1eae72d7974”,
  “status”: “INACTIVE”,
  “name”: “identity_service_batch_flow_run_delay”,
  “message”: “Resolved : Identity Service Flow Run Delay Datalake_to_Identity Service_Flow has been processing for more than 150 minutes. The current value is 514 minutes.”,
  “createdAt”: “2023-09-01T17:21:08.867Z”,
  “resolvedAt”: “2023-09-01T18:48:08.867Z”,
  “severity”: “high”,
  “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
  “sandboxName”: “telmore-prod”,
  “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
  “value”: “514”,
  “url”: “https://experience.adobe.com/#/@0BD6E1CE5440F9CA0A4C98A5@AdobeOrg/sname:telmore-prod/platform/monitoring/dashboard?pageType=identity&flowId=dbc5c132-bc2a-4625-85c1-32bc2a262558&runId=389e37c6-e225-4a20-8049-674d201c28b9&us_redirect=true”,
  “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
  “flowRunId”: “389e37c6-e225-4a20-8049-674d201c28b9”,
  “alertName”: “Identity Service Flow Run Delay”
}
```

+++

+++Identity Service Flow Run Failure

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Identity Ingestion Delays, Failures and Errors | Identity Service Flow Run Failure | This alert triggers when an error occurs while ingesting data into Identity Service. |

{style="table-layout:auto"}

+++

>[!ENDTABS]

## Journey Optimizer {#journey-optimizer}

For information about alert rules available in Adobe Journey Optimizer, including journey execution, message delivery, campaign, and channel-specific alerts, see the [Adobe Journey Optimizer available alerts documentation](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/monitor/alerts#available-alerts).


## Profile {#profile}

The following alert rules apply to [Real-Time Customer Profile](../../profile/home.md).

>[!BEGINTABS]

>[!TAB Flow run alerts]

+++Profile Flow Run Start

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Profile Flow Run Start | Profile Flow Run Start | This alert triggers when a Profile flow run starts processing data. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “a2f085ec-61f9-4f2e-8814-60a8f64332bb”,
   “createdAt”: 1693950380140,
   “updatedAt”: 1693950380140,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “acme_client”,
   “updatedClient”: “acme_client”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “acme sandbox”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “64f7a1ab344c1728672d58a1”,
   “etag”: "“000045a2-0000-0a00-0000-64f7a1ac0000"”,
   “metrics”: {
      “statusSummary”: {
         “status”: “inProgress”
      }
   },
   “activities”: [],
   “flowName”: “Datalake to Profile Flow”,
   “alertName”: “Profile Flow Run Start”
}
```

+++

+++Profile Flow Run Success

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Profile Flow Run Success | Profile Flow Run Success | This alert triggers when data is successfully loaded into Profile from the Data Lake. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “8336a037-1d7c-42c9-959d-5efc892a3c6d”,
   “createdAt”: 1693949680760,
   “updatedAt”: 1693951257493,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “acme_client”,
   “updatedClient”: “acme_client”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “prod”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “64f79ef0badb1428d3508035”,
   “etag”: "“bc00da87-0000-0200-0000-64f7a5190000"”,
   “predecessors”: [{
      “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
      “flowRunId”: “94b2828e-17b6-416b-a645-0025c08d45c5”,
      “flowSpec”: {
         “id”: “9753525b-82c7-4dce-8a9b-5ccfce2b9876”,
         “version”: “1.0”
      }
   }],
   “metrics”: {
      “durationSummary”: {
         “startedAtUTC”: 1693949680540,
         “completedAtUTC”: 1693951233209
      },
      “recordSummary”: {
         “inputRecordCount”: 130,
         “createdRecordCount”: 130,
         “updatedRecordCount”: 0,
         “outputRecordCount”: 130
      },
      “statusSummary”: {
         “status”: “success”
      }
   },
   “activities”: [{
      “id”: “08e3217c-2f46-11eb-adc1-0242ac120002”,
      “name”: “Profile Batch Activity”,
      “updatedAtUTC”: 0,
      “durationSummary”: {
         “startedAtUTC”: 1693949680540,
         “completedAtUTC”: 1693951233209
      },
      “latencySummary”: {},
      “sizeSummary”: {},
      “recordSummary”: {
         “inputRecordCount”: 130,
         “createdRecordCount”: 130,
         “updatedRecordCount”: 0,
         “outputRecordCount”: 130
      },
      “fileSummary”: {},
      “statusSummary”: {
         “status”: “success”,
         “extensions”: {}
      }
   }],
   “flowName”: “Datalake to Profile Flow”,
   “alertName”: “Profile Flow Run Success”
}
```

+++

+++Profile Flow Run Delay

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Profile Flow Run Delay | Profile Flow Run Delay | This alert triggers when loading data from the Data Lake into Profile takes longer than 150 minutes to process.<br><br>**NOTE:** Alert evaluation stops after 10 hours, even if the issue persists. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “00cf4244-bef0-4e36-8f42-44bef02e3659”,
   “status”: “FIRING”,
   “name”: “profile_batch_flow_run_delay”,
   “message”: “Triggered: Profile Flow Run Delay Datalake_to_Profile_Flow has been processing for more than 150 minutes. The current value is 152 minutes.”,
   “createdAt”: “2023-09-05T23:59:38.867Z”,
   “severity”: “high”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “sandboxName”: “acme sandbox”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “value”: “152”,
   “url”: “https://experience.adobe.com/#/@02251C795D6036FF0A495EF7@AdobeOrg/sname:acme sandbox/platform/monitoring/dashboard?pageType=profile&flowId=dbc5c132-bc2a-4625-85c1-32bc2a262558&runId=ed32fbbe-a73c-4a0b-8685-01369c8dedf5&us_redirect=true”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “flowRunId”: “ed32fbbe-a73c-4a0b-8685-01369c8dedf5”,
   “alertName”: “Profile Flow Run Delay”
}
```

+++

+++Profile Flow Run Failure

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Profile Flow Run Failure | Profile Flow Run Failure | This alert triggers when an error occurs while ingesting data into Profile. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “36a796e5-4e8e-4354-a356-0e43d1e7b2e9”,
   “createdAt”: 1694521355684,
   “updatedAt”: 1694529448617,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “acme_client”,
   “updatedClient”: “acme_client”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “prod”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “6500580b971bf828d4f8d078”,
   “etag”: "“01001034-0000-0d00-0000-650077a80000"”,
   “predecessors”: [{
      “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
      “flowRunId”: “93c6e812-434d-4f62-97c8-b45a77fe1f02”,
      “flowSpec”: {
         “id”: “9753525b-82c7-4dce-8a9b-5ccfce2b9876”,
         “version”: “1.0”
      }
   }],
   “metrics”: {
      “durationSummary”: {
         “startedAtUTC”: 1694521355504,
         “completedAtUTC”: 1694529442409
      },
      “statusSummary”: {
         “status”: “failed”,
         “errors”: [{
            “code”: “UPINGT-007002-500”,
            “message”: “There was an error, the profile batch ingest job failed. Please contact Profile support.”
         }],
         “activityRefs”: [“08e3217c-2f46-11eb-adc1-0242ac120002”]
      }
   },
   “activities”: [{
      “id”: “08e3217c-2f46-11eb-adc1-0242ac120002”,
      “name”: “Profile Batch Activity”,
      “updatedAtUTC”: 0,
      “durationSummary”: {
         “startedAtUTC”: 1694521355504,
         “completedAtUTC”: 1694529442409
      },
      “latencySummary”: {},
      “sizeSummary”: {},
      “recordSummary”: {},
      “fileSummary”: {},
      “statusSummary”: {
         “status”: “failed”,
         “errors”: [{
            “code”: “UPINGT-007002-500”,
            “message”: “There was an error, the profile batch ingest job failed. Please contact Profile support.”
         }],
         “extensions”: {
            “errors”: [{
               “code”: “UPINGT-007012-400”,
               “message”: “Invalid ECID”
            }]
         }
      }
   }],
   “flowName”: “Datalake to Profile Flow”,
   “alertName”: “Profile Flow Run Failure”
}
```

+++

>[!TAB Streaming ingestion alerts]

+++Profile Streaming Ingestion Failure Rate Exceeded 

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Profile Streaming Ingestion Failure Rate Exceeded | Profile Streaming Ingestion Failure Rate Exceeded | This alert triggers when the Profile streaming ingestion failure rate exceeds the default or custom threshold. |

{style="table-layout:auto"}

**Schema payload**

```
{
      “status”: “FIRING”,
      “name”: “profile_streaming_ingestion_failure_rate_exceeded”,
      “message”: “Triggered: Profile streaming ingestion failure rate for Test Preset AK form data ingestion flow exceeded for more than [5 mins]. Current failure rate is 26%.”,
      “createdAt”: “2025-09-12T17:31:29.628Z”,
      “severity”: “high”,
      “imsOrgId”: “745F37C35E4B776E0A49421B@AdobeOrg”,
      “sandboxName”: “prod”,
      “sandboxId”: “068abf40-575e-11ea-8512-9b1bfdb82603”,
      “value”: “26”,
      “url”: “https://experience.adobe.com/#/@745F37C35E4B776E0A49421B@AdobeOrg/sname:prod/platform/monitoring/v2/streaming?flowId=239514d9-de25-43d7-a18e-f41b860a1af2&pageType=streaming_profiles&psiDatasetId=685ab360fb1abe2b263df38f”,
      “flowId”: “239514d9-de25-43d7-a18e-f41b860a1af2”,
      “datasetId”: “685ab360fb1abe2b263df38f”,
      “alertName”: “Profile Streaming Ingestion Failure Rate Exceeded”
}
```

+++

+++Profile Streaming Ingestion Skip Rate Exceeded 

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Profile Streaming Ingestion Skip Rate Exceeded | Profile Streaming Ingestion Skip Rate Exceeded | This alert triggers when the Profile streaming ingestion skip rate exceeds the default or custom threshold. |

{style="table-layout:auto"}

**Schema payload**

```
{
      “status”: “FIRING”,
      “name”: “profile_streaming_ingestion_skipped_rate_exceeded”,
      “message”: “Triggered: Profile streaming skipped rate for Test Preset AK form data ingestion flow exceeded for more than [5 mins]. Current skipped rate is 27%.”,
      “createdAt”: “2025-09-12T17:31:29.628Z”,
      “severity”: “high”,
      “imsOrgId”: “745F37C35E4B776E0A49421B@AdobeOrg”,
      “sandboxName”: “prod”,
      “sandboxId”: “068abf40-575e-11ea-8512-9b1bfdb82603”,
      “value”: “27”,
      ““url”: “https://experience.adobe.com/#/@745F37C35E4B776E0A49421B@AdobeOrg/sname:prod/platform/monitoring/v2/streaming?flowId=239514d9-de25-43d7-a18e-f41b860a1af2&pageType=streaming_profiles&psiDatasetId=685ab360fb1abe2b263df38f”,
      “flowId”: “239514d9-de25-43d7-a18e-f41b860a1af2”,
      “datasetId”: “685ab360fb1abe2b263df38f”,
      “alertName”: “Profile Streaming Ingestion Skip Rate Exceeded”
}
```

+++

>[!ENDTABS]

## Query Service {#query-services}

The following alert rules apply to [Query Service](../../query-service/home.md).

>[!BEGINTABS]

>[!TAB Scheduled query alerts]

+++Query Service scheduled query start

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Query Service scheduled query start | Query Service scheduled query start | This alert triggers when a scheduled query starts running. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “2c487318-fe6b-4560-8a42-a34fb79dfa34”,
   “createdAt”: 1694526487061,
   “updatedAt”: 1694526487061,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “acp_foundation_queryService”,
   “updatedClient”: “acp_foundation_queryService”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “prod”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “8b6734e7-51e8-4385-ba95-cc4b2c00ed21”,
   “etag”: "“c8007242-0000-0200-0000-65006c170000"”,
   “metrics”: {
      “statusSummary”: {
         “status”: “inProgress”
      }
   },
   “activities”: [],
   “flowName”: “GG_Price_Drop___v3Pi7Y0cXlIb”,
   “alertName”: “Query Service scheduled query start”
}
```

+++

+++Query Service scheduled query success

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Query Service scheduled query success | Query Service scheduled query success | This alert triggers when a scheduled query job completes successfully. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “df37b14a-3548-4074-8594-c27db3bea482”,
   “createdAt”: 1694526412235,
   “updatedAt”: 1694526775732,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “acp_foundation_queryService”,
   “updatedClient”: “acme_client”,
   “sandboxId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “sandboxName”: “prod”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “d0ca84f8-caec-4a86-a7f9-52de5476c541”,
   “providerRefId”: “913d3a31-581a-4c1a-8c1c-ff87595ebefa”,
   “etag”: "“c8008567-0000-0200-0000-65006d370000"”,
   “metrics”: {
      “durationSummary”: {
         “startedAtUTC”: 1694526412265,
         “completedAtUTC”: 1694526743223
      },
      “sizeSummary”: {
         “outputBytes”: 6054425
      },
      “recordSummary”: {
         “inputRecordCount”: 45563,
         “createdRecordCount”: 45563,
         “outputRecordCount”: 45563,
         “failedRecordCount”: 0
      },
      “fileSummary”: {
         “outputFileCount”: 12,
         “manifest”: {
            “fileInfo”: [{
               “path”: “https://platform.adobe.io/data/foundation/export/batches/01HA4TA7H10XR7GSY7Q5ZFKXT5/meta?path=input_files”
            }]
         },
         “activityRefs”: [“37b34f84-1ada-11eb-adc1-0242ac120002”]
      },
      “statusSummary”: {
         “status”: “success”
      }
   },
   “activities”: [{
      “id”: “8816f6a2-2533-4dff-9026-c23a27b38691”,
      “name”: “Query Activity”,
      “contextId”: “913d3a31-581a-4c1a-8c1c-ff87595ebefa”,
      “updatedAtUTC”: 0,
      “durationSummary”: {
         “startedAtUTC”: 1694526412265,
         “completedAtUTC”: 1694526732395
      },
      “latencySummary”: {},
      “sizeSummary”: {},
      “recordSummary”: {
         “inputRecordCount”: 45563
      },
      “fileSummary”: {},
      “statusSummary”: {
         “status”: “success”,
         “extensions”: {
            “scheduleRunId”: “c2NoZWR1bGVkX18yMDIzLTA5LTExVDEzOjM1OjAwKzAwOjAw”,
            “jobRunId”: “8b61c0d9-92ca-4346-a478-0f02b78ce18e”,
            “queryId”: “913d3a31-581a-4c1a-8c1c-ff87595ebefa”
         }
      }
   }, {
      “id”: “37b34f84-1ada-11eb-adc1-0242ac120002”,
      “name”: “Promotion Activity”,
      “contextId”: “913d3a31-581a-4c1a-8c1c-ff87595ebefa”,
      “updatedAtUTC”: 0,
      “durationSummary”: {
         “startedAtUTC”: 1694526414513,
         “completedAtUTC”: 1694526743223
      },
      “latencySummary”: {},
      “sizeSummary”: {
         “inputBytes”: 4323887,
         “outputBytes”: 6054425
      },
      “recordSummary”: {
         “inputRecordCount”: 45563,
         “createdRecordCount”: 45563,
         “outputRecordCount”: 45563,
         “failedRecordCount”: 0
      },
      “fileSummary”: {
         “inputFileCount”: 16,
         “outputFileCount”: 12,
         “extensions”: {
            “manifest”: {
               “fileInfo”: “https://platform.adobe.io/data/foundation/export/batches/01HA4TA7H10XR7GSY7Q5ZFKXT5/meta?path=input_files”
            }
         }
      },
      “statusSummary”: {
         “status”: “success”,
         “extensions”: {}
      }
   }],
   “flowName”: “DSG_Price_Drop___v3PDXMOXJlFC”,
   “alertName”: “Query Service scheduled query Success”
}
```

+++

+++Query service scheduled query failure

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Query Run Failure | Query service scheduled query failure | This alert triggers when a scheduled query job fails. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “d0b98201-0abd-44ec-9890-41700a5a4b05”,
   “createdAt”: 1694423273648,
   “updatedAt”: 1694423282108,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “acp_foundation_queryService”,
   “updatedClient”: “acme_client”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “prod”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “de64c288-cc61-4ff8-8efe-af09f4294629”,
   “etag”: "“9900a795-0000-0200-0000-64fed8f20000"”,
   “metrics”: {
      “durationSummary”: {
         “startedAtUTC”: 1694423273685,
         “completedAtUTC”: 1694423274439
      },
      “statusSummary”: {
         “status”: “failed”,
         “errors”: [{
            “code”: “42602”,
            “message”: “Analysis error encountered. Reason: [{sessionId: ca06fd1a-5dfc-4ac3-a592-da801b6a2a72 queryId: de64c288-cc61-4ff8-8efe-af09f4294629 Unknown error encountered. Reason: [Reference ‘_trowepriceassociatesinc.pidetails.trpaudittraildates.trploaddate’ is ambiguous, could be: global_prod_midvalues._trowepriceassociatesinc, trp_pi_recipient._trowepriceassociatesinc.; line 25 pos 14]}]”
         }],
         “activityRefs”: [“8816f6a2-2533-4dff-9026-c23a27b38691”]
      }
   },
   “activities”: [{
      “id”: “8816f6a2-2533-4dff-9026-c23a27b38691”,
      “name”: “Query Activity”,
      “contextId”: “de64c288-cc61-4ff8-8efe-af09f4294629”,
      “updatedAtUTC”: 0,
      “durationSummary”: {
         “startedAtUTC”: 1694423273685,
         “completedAtUTC”: 1694423274439
      },
      “latencySummary”: {},
      “sizeSummary”: {},
      “recordSummary”: {},
      “fileSummary”: {},
      “statusSummary”: {
         “status”: “failed”,
         “errors”: [{
            “code”: “42602”,
            “message”: “Analysis error encountered. Reason: [{sessionId: ca06fd1a-5dfc-4ac3-a592-da801b6a2a72 queryId: de64c288-cc61-4ff8-8efe-af09f4294629 Unknown error encountered. Reason: [Reference ‘_trowepriceassociatesinc.pidetails.trpaudittraildates.trploaddate’ is ambiguous, could be: global_prod_midvalues._trowepriceassociatesinc, trp_pi_recipient._trowepriceassociatesinc.; line 25 pos 14]}]”
         }],
         “extensions”: {
            “scheduleRunId”: “c2NoZWR1bGVkX18yMDIzLTA5LTEwVDA4OjMwOjAwKzAwOjAw”,
            “jobRunId”: “5faed6b2-9fce-4787-9dff-a809439a8b3a”,
            “queryId”: “de64c288-cc61-4ff8-8efe-af09f4294629”
         }
      }
   }],
   “flowName”: "SELECT \nSTRUCT\n(\nSTRUCT (uberId AS uberId) AS identities,\n ",
   “alertName”: “Query Run Failure”
}
```

+++

>[!ENDTABS]

## Segmentation {#segmentation}

The following alert rules apply to [Segmentation Service](../../segmentation/home.md).

>[!BEGINTABS]

>[!TAB Job alerts]

+++Segment Job Start

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Segment Job Start | Segment Job Start | This alert triggers when an audience evaluation job starts processing data. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “c29a3ef9-88fb-4b4d-aac4-70a9cc145daa”,
   “createdAt”: 1693961877584,
   “updatedAt”: 1693961877584,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “acme-adapter”,
   “updatedClient”: “acme-adapter”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “prod”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “bf65315e-01e9-47c0-822e-06ad1acebf66”,
   “etag”: "“90016d41-0000-0200-0000-64f7ce950000"”,
   “metrics”: {
      “statusSummary”: {
         “status”: “inProgress”
      }
   },
   “activities”: [],
   “flowName”: “Profile Segmentation flow”,
   “alertName”: “Segment Job Start”
}
```

+++

+++Segment Job Success

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Segment Job Success | Segment Job Success | This alert triggers when an audience evaluation job completes successfully. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “62180eb7-11ce-4b47-81d8-47db31e362c2”,
   “createdAt”: 1694470184129,
   “updatedAt”: 1694470545011,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “acme-adapter”,
   “updatedClient”: “acme_client”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “prod”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “636fbb89-4b51-463c-a6e0-5e9fd6c52acd”,
   “etag”: "“36008246-0000-0200-0000-64ff91910000"”,
   “metrics”: {
      “durationSummary”: {
         “startedAtUTC”: 1694470145137,
         “completedAtUTC”: 1694470524000
      },
      “recordSummary”: {
         “inputRecordCount”: 22828,
         “createdRecordCount”: 2,
         “outputRecordCount”: 2,
         “targetSummaries”: [{
            “id”: “9d3e1be0-fb83-4b6b-ad90-545b2b5768df”,
            “createdRecordCount”: 2,
            “outputRecordCount”: 2,
            “entitySummaries”: [{
               “id”: “segment:89d301a8-bba4-44b5-beda-747cea891160”,
               “createdRecordCount”: 2,
               “outputRecordCount”: 2
            }]
         }]
      },
      “statusSummary”: {
         “status”: “success”
      }
   },
   “activities”: [{
      “id”: “3c8e49bc-27a6-11ec-9621-0242ac130002”,
      “name”: “Profile Batch Segmentation Activity”,
      “updatedAtUTC”: 0,
      “durationSummary”: {
         “startedAtUTC”: 1694470145137,
         “completedAtUTC”: 1694470524000
      },
      “latencySummary”: {},
      “sizeSummary”: {},
      “recordSummary”: {
         “inputRecordCount”: 22828,
         “createdRecordCount”: 2,
         “outputRecordCount”: 2
      },
      “fileSummary”: {},
      “statusSummary”: {
         “status”: “success”,
         “extensions”: {}
      }
   }],
   “flowName”: “Profile Segmentation flow”,
   “alertName”: “Segment Job Success”
}
```

+++

+++Segment Job Delay

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Segment Job Delay | Segment Job Delay | This alert triggers when an audience evaluation job takes longer than 150 minutes to complete. <br> One of the following statuses will appear: <br>- FIRING - The condition for failure or delay has been met (consider it in an `ACTIVE` state). <br>- INACTIVE - The condition is no longer met or has been resolved (consider it in a `RESOLVED` state).<br><br>**NOTE:** Alert evaluation stops after 10 hours, even if the issue persists. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “3b71eea7-75cb-4b33-b1ee-a775cb4b33d6”,
   “status”: “FIRING”,
   “name”: “profile_export_flow_run_delay”,
   “message”: “Triggered: Segment Export Delay Profile_Export_flow has been processing for more than 150 minutes. The current value is 152 minutes.”,
   “createdAt”: “2023-09-11T21:57:24.661Z”,
   “severity”: “high”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “sandboxName”: “prod”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “value”: “152”,
   “url”: “https://experience.adobe.com/#/@F6421253512D2C100A490D45@AdobeOrg/sname:prod/platform/segment/overview”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “flowRunId”: “1d69e4ba-3940-44b8-b72b-9a85448a0086”,
   “alertName”: “Segment Job Delay”
}
```

+++

+++Segment Job Failure

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Segment Job Failure | Segment Job Failure | This alert triggers when an audience evaluation job results in an error. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “9236cc45-5bcc-4f5b-99d7-455bdaaf27b3”,
   “createdAt”: 1694524506427,
   “updatedAt”: 1694525578672,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “acme-adapter”,
   “updatedClient”: “acme_client”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “prod”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “3baac7f5-5adb-491c-8320-84dd00c0963f”,
   “etag”: "“82008a80-0000-0200-0000-6500688a0000"”,
   “metrics”: {
      “durationSummary”: {
         “startedAtUTC”: 1694524502044,
         “completedAtUTC”: 1694525571000
      },
      “statusSummary”: {
         “status”: “failed”,
         “errors”: [{
            “code”: “Unknown error code”,
            “message”: “Error while performing segment evaluation”
         }],
         “activityRefs”: [“3c8e49bc-27a6-11ec-9621-0242ac130002”]
      }
   },
   “activities”: [{
      “id”: “3c8e49bc-27a6-11ec-9621-0242ac130002”,
      “name”: “Profile Batch Segmentation Activity”,
      “updatedAtUTC”: 0,
      “durationSummary”: {
         “startedAtUTC”: 1694524502044,
         “completedAtUTC”: 1694525571000
      },
      “latencySummary”: {},
      “sizeSummary”: {},
      “recordSummary”: {},
      “fileSummary”: {},
      “statusSummary”: {
         “status”: “failed”,
         “errors”: [{
            “code”: “Unknown error code”,
            “message”: “Error while performing segment evaluation”
         }],
         “extensions”: {}
      }
   }],
   “flowName”: “Profile Segmentation flow”,
   “alertName”: “Segment Job Failure”
}
```

+++

>[!TAB Definition alerts]

+++Segment Definition Disabled

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Segment Definition Disabled | Segment Definition Disabled | This alert triggers when a segment definition is disabled due to an internal error. This automatically triggers a war room for an Adobe engineering team to investigate the issue. This alert is only intended to be informative and does not require any action from you. |

{style="table-layout:auto"}

+++

>[!ENDTABS]


## Sources {#sources}

The following alert rules apply to [Data Ingestion](../../ingestion/home.md) and [Sources](../../sources/home.md).

>[!BEGINTABS]

>[!TAB Flow run alerts]

+++Sources Flow Run Start

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Sources Flow Run Start | Sources Flow Run Start | This alert triggers when a source connection starts processing data. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “66643b20-dc76-4b04-bacf-93bee162683c”,
   “createdAt”: 1693339079768,
   “updatedAt”: 1693339079768,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “acme_client”,
   “updatedClient”: “acme_client”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “dev”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “M-05222685-e2b7-4367-a5a2-db4d7acda43d-incremental-0:2d304546-3817-42a6-b836-1a85fee51987”,
   “etag”: "“0e0158eb-0000-0d00-0000-64ee4dc70000"”,
   “metrics”: {
      “statusSummary”: {
         “status”: “inProgress”
      }
   },
   “activities”: [],
   “flowName”: “Sales plan- weekly_plan.csv”
   “alertName”: “Sources Flow Run Start”
}
```

+++

+++Sources Flow Run Success

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Sources Flow Run Success | Sources Flow Run Success | This alert triggers when data is successfully ingested from a source connection. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “e3b63e78-b9fb-4e58-bac6-b7497e7bde04”,
   “createdAt”: 1694474662038,
   “updatedAt”: 1694474985756,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “acme_client”,
   “updatedClient”: “acme_client”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “mlb-enablement”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “M-cd9b4bbc-c1c6-4630-859e-49776afb483b-incremental-0:10f1f4bb-47cd-4093-a9af-95920cc11264”,
   “etag”: "“760000d9-0000-0200-0000-64ffa2e90000"”,
   “metrics”: {
      “durationSummary”: {
         “startedAtUTC”: 1694474649498,
         “completedAtUTC”: 1694474676869
      },
      “sizeSummary”: {
         “inputBytes”: 0
      },
      “recordSummary”: {
         “inputRecordCount”: 0
      },
      “statusSummary”: {
         “status”: “success”
      }
   },
   “activities”: [{
      “id”: “4f008a00-3a04-11eb-adc1-0242ac120002”,
      “name”: “Maria DB Copy Activity”,
      “updatedAtUTC”: 0,
      “durationSummary”: {
         “startedAtUTC”: 1694474649498,
         “completedAtUTC”: 1694474676869
      },
      “latencySummary”: {},
      “sizeSummary”: {
         “inputBytes”: 0
      },
      “recordSummary”: {
         “inputRecordCount”: 0
      },
      “fileSummary”: {},
      “statusSummary”: {
         “status”: “success”,
         “extensions”: {}
      }
   }],
   “flowName”: “Employee - Stolz Maria DB”
   “alertName”: “Sources Flow Run Success”
}
```

+++

+++Sources Flow Run Failure

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Sources Flow Run Failure | Sources Flow Run Failure | This alert triggers when an error occurs while ingesting data from a source connection. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “f0b809c5-603d-4d6e-9600-977cb2e277b4”,
   “createdAt”: 1693538438769,
   “updatedAt”: 1693539887893,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “acme_client”,
   “updatedClient”: “acme_client”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “dev”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “M-c0cb4b5b-367f-4946-a6cc-f7ccfe005b89-incremental-0:911c77de-7d0c-4d10-a3cb-26020efd1171”,
   “etag”: "“56010101-0000-1b00-0000-64f15e2f0000"”,
   “metrics”: {
      “durationSummary”: {
         “startedAtUTC”: 1693538422921,
         “completedAtUTC”: 1693539869854
      },
      “recordSummary”: {
         “failedInfo”: [{
            “code”: “2200”,
            “message”: “A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond”
            }]
      },
      “statusSummary”: {
         “status”: “failed”,
         “errors”: [{
            “code”: “CONNECTOR-1001-500”,
            “message”: “Error in copying the data from Source.”
         }],
         “activityRefs”: [“4f008a00-3a04-11eb-adc1-0242ac120002”]
      }
   },
   “activities”: [{
      “id”: “4f008a00-3a04-11eb-adc1-0242ac120002”,
      “name”: “SFTP Copy Activity”,
      “updatedAtUTC”: 0,
      “durationSummary”: {
         “startedAtUTC”: 1693538422921,
         “completedAtUTC”: 1693539869854
      },
      “latencySummary”: {},
      “sizeSummary”: {},
      “recordSummary”: {
         “failedInfo”: [{
            “code”: “2200”,
            “message”: “A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond”
         }]
      },
      “fileSummary”: {},
      “statusSummary”: {
         “status”: “failed”,
         “errors”: [{
            “code”: “CONNECTOR-1001-500”,
            “message”: “Error in copying the data from Source”
         }],
         “extensions”: {
            “errorDetail”: “ErrorCode=SftpNetworkIssue,‘Type=Microsoft.DataTransfer.Common.Shared.HybridDeliveryException,Message=Meet network issue when connect to Sftp server ‘13.55.109.14’, SocketErrorCode: ‘TimedOut’.,Source=Microsoft.DataTransfer.ClientLibrary.SftpConnector,’‘Type=System.Net.Sockets.SocketException,Message=A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond,Source=Renci.SshNet,’”,
            “errors”: [{
               “code”: “2200”,
               “message”: “A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond”
            }]
         }
      }
   }],
   “flowName”: “Dataflow - wx_medallia_export_combined.csv”
   “alertName”: “Sources Flow Run Failure”
}
```

+++

+++Sources Flow Run Delay

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Sources Flow Run Delay | Ingestion Delay | This alert triggers when a batch ingestion flow run takes longer than 150 minutes to process.<br><br>**NOTE:** Alert evaluation stops after 10 hours, even if the issue persists. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “c21ddbcc-cec2-4a63-9ddb-cccec2fa6360”,
   “status”: “FIRING”,
   “name”: “sources_flow_run_delay_e2e_va7_prod”,
   “message”: “Triggered : from imsOrg - Sources Flow Run Delay2 observability_e2e_test above 150 minutes. The current value is 1 minutes.”,
   “createdAt”: “2023-09-01T04:27:44.922Z”,
   “severity”: “high”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “sandboxName”: “observability-01”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “value”: “1”,
   “url”: “https://experience.adobe.com/#/@9C991D2E622D76190A495E39@AdobeOrg/sname:observability-01/platform/source/dataflows/de887077-5cf6-425f-9472-257168ad3c97/activity/test-f9d2a873-28c7-402d-891a-3f19dd6b4ad7”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “flowRunId”: “test-f9d2a873-28c7-402d-891a-3f19dd6b4ad7”,
   “alertName”: “Sources Flow Run Delay”
}
```

+++

+++Sources Flow Run Info

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Sources Flow Run Info | Streaming Sources Completed | This alert triggers when data has completed processing from a streaming source dataflow run. |

{style="table-layout:auto"}

**Schema payload**

```
{
   “id”: “befcac5b-51c8-4bce-92ae-d7b92fddad21”,
   “createdAt”: 1697579102733,
   “updatedAt”: 1697582278978,
   “createdBy”: “acme@AdobeID”,
   “updatedBy”: “acme@AdobeID”,
   “createdClient”: “acme_foundation_connectors”,
   “updatedClient”: “acme_foundation_connectors”,
   “sandboxId”: “1bd86660-c5da-11e9-93d4-6d5fc3a66a8e”,
   “sandboxName”: “prod”,
   “imsOrgId”: “5C1328435BF324E90A49402A@AdobeOrg”,
   “flowId”: “dbc5c132-bc2a-4625-85c1-32bc2a262558”,
   “providerRefId”: “1697576400000-1697580000000”,
   “etag”: "“0e0158eb-0000-0d00-0000-64ee4dc70000"”,
   “metrics”: {
      “durationSummary”: {
         “startedAtUTC”: 1697576400000,
         “completedAtUTC”: 1697582277000
      },
      “latencySummary”: {
         “minMs”: 1417,
         “maxMs”: 591304
      },
      “recordSummary”: {
         “inputRecordCount”: 10,
         “createdRecordCount”: 5,
         “failedRecordCount”: 0,
         “warningRecordCount”: 0,
         “ingestedRecordPercentage”: 50
      },
      “statusSummary”: {
         “status”: “partialSuccess”
      }
   },
   “flowName”: “Streaming Connection for dataset Id 5dcb24b84d955318add54eb1”,
   “flowType”: “streaming”,
   “message”: “Streaming Sources flow run Streaming Connection for dataset Id 5dcb24b84d955318add54eb1 which started at 2023-10-17 21:45:02 completed, with 5 Records ingested and Ingestion rate is 50.”,
   “url”: “https://experience.adobe.com/@4E5F3EB95C746F890A49400A@AdobeOrg/sname:prod/platform/source/dataflows/10bebc5d-66c4-4382-bebc-5d66c4d38295/activity/befcac5b-51c8-4bce-92ae-d7b92fddad21”
   “alertName”: “Sources Flow Run Info”
}
```

+++

>[!TAB Ingestion alerts]

+++Sources Ingestion Error Rate Exceeded

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Sources Ingestion Error Rate Exceeded | Ingestion Failure | This alert triggers when the ratio of failed records to all records exceeds a threshold of 0.5%.<br><br>**NOTE:** This alert supports both batch and streaming source ingestion. |

{style="table-layout:auto"}

**Schema payload**

```
{
   "id": "b391018e-eccc-4906-9101-8eecccb906a9",
   "status": "INACTIVE",
   "name": "sources_ingestion_error_rate_exceeded",
   "message": "Resolved: Sources Ingestion Error Rate Exceeded is above 1%. The current value is 2%.",
   "createdAt": "2023-09-01T00:46:54.661Z",
   "resolvedAt": "2023-09-01T04:31:54.661Z",
   "severity": "high",
   "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg",
   "sandboxName": "prod",
   "sandboxId": "1bd86660-c5da-11e9-93d4-6d5fc3a66a8e",
   "value": "2",
   "url": "https://experience.adobe.com/#/@777B575E55828EBB7F000101@AdobeOrg/sname:prod/platform/source/dataflows/4045eb32-95e2-4c54-a6b2-07209c43fff7/activity",
   "flowId": "dbc5c132-bc2a-4625-85c1-32bc2a262558",
   "alertName": "Sources Ingestion Error Rate Exceeded"
}
```

+++

>[!TAB Deprecated alerts]

If you have previously subscribed to the following alert types, you will no longer receive alerts as these alerts have been deprecated:

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Source Flow Run Delays, Failures and Errors | Lack of Ingestion | This alert sends a notification when ingestion is delayed by more than seven hours and no data is ingested into Experience Platform. |

{style="table-layout:auto"}

>[!ENDTABS]

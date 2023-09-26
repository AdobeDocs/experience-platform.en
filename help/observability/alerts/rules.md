---
keywords: Experience Platform;home;popular topics;date range
title: Standard alert rules
description: This document covers the predefined alert rules provided by Experience Platform.
feature: Alerts
exl-id: b4af1c15-b1bc-4e4b-a447-09cc17a63988
---
# Standard alert rules

Adobe Experience Platform provides several predefined alert rules that you can enable for your organization. This document covers the details of these Adobe-provided alert rules. For more general information on alerts in Experience Platform, see the [alerts overview](./overview.md).

When [viewing alert rules in the Platform UI](./ui.md), you can subscribe to each rule individually. When subscribing to alerts through [I/O Event notifications](./subscribe.md), however, alert rules are organized into different subscription packages. In the tables below, each rule is shown with its corresponding I/O Event subscription name.

## Sources

The following alert rules are specific to [Data Ingestion](../../ingestion/home.md) and  [sources](../../sources/home.md):

>[!NOTE]
>
>Streaming sources are currently not supported by alerts. You can only subscribe to alert notifications for batch sources.

| I/O Event subscription | Alert rule | Description | Schema payload |
| --- | --- | --- | --- |
| Sources Flow Run Start | Sources Flow Run Start | This alert triggers when a source connection starts processing data. | <pre>{<br>   "id": "66643b20-dc76-4b04-bacf-93bee162683c",<br>   "createdAt": 1693339079768,<br>   "updatedAt": 1693339079768,<br>   "createdBy": "acp_foundation_connectors@AdobeID",<br>   "updatedBy": "acp_foundation_connectors@AdobeID",<br>   "createdClient": "acp_foundation_connectors",<br>   "updatedClient": "acp_foundation_connectors",<br>   "sandboxId": "e2c261a4-ae36-430c-8261-a4ae36130c21",<br>   "sandboxName": "dev",<br>   "imsOrgId": "A565899B544AA2E80A4C98BC@AdobeOrg",<br>   "flowId": "05222685-e2b7-4367-a5a2-db4d7acda43d",<br>   "providerRefId": "M-05222685-e2b7-4367-a5a2-db4d7acda43d-incremental-0:2d304546-3817-42a6-b836-1a85fee51987",<br>   "etag": "\"0e0158eb-0000-0d00-0000-64ee4dc70000\"",<br>   "metrics": {<br>      "statusSummary": {<br>         "status": "inProgress"<br>      }<br>   },<br>   "activities": [],<br>   "flowName": "Sales plan- weekly_plan.csv",<br>   "header": {<br>      "_adobeio": {<br>         "imsOrgId": "A565899B544AA2E80A4C98BC@AdobeOrg",<br>         "providerMetadata": "aep_observability_catalog_events",<br>         "eventCode": "source_flow_run_info"<br>      }<br>   }<br>}</pre> |
| Sources Flow Run Success | Sources Flow Run Success | This alert triggers when data is successfully ingested from a source connection. | <pre>{<br>   "id": "e3b63e78-b9fb-4e58-bac6-b7497e7bde04",<br>   "createdAt": 1694474662038,<br>   "updatedAt": 1694474985756,<br>   "createdBy": "acp_foundation_connectors@AdobeID",<br>   "updatedBy": "acp_foundation_connectors@AdobeID",<br>   "createdClient": "acp_foundation_connectors",<br>   "updatedClient": "acp_foundation_connectors",<br>   "sandboxId": "efc198a4-af2e-4f5b-8198-a4af2e4f5b3a",<br>   "sandboxName": "mlb-enablement",<br>   "imsOrgId": "A65F776A5245B01B0A490D44@AdobeOrg",<br>   "flowId": "cd9b4bbc-c1c6-4630-859e-49776afb483b",<br>   "providerRefId": "M-cd9b4bbc-c1c6-4630-859e-49776afb483b-incremental-0:10f1f4bb-47cd-4093-a9af-95920cc11264",<br>   "etag": "\"760000d9-0000-0200-0000-64ffa2e90000\"",<br>   "metrics": {<br>      "durationSummary": {<br>         "startedAtUTC": 1694474649498,<br>         "completedAtUTC": 1694474676869<br>      },<br>      "sizeSummary": {<br>         "inputBytes": 0<br>      },<br>      "recordSummary": {<br>         "inputRecordCount": 0<br>      },<br>      "statusSummary": {<br>         "status": "success"<br>      }<br>   },<br>   "activities": [{<br>      "id": "4f008a00-3a04-11eb-adc1-0242ac120002",<br>      "name": "Maria DB Copy Activity",<br>      "updatedAtUTC": 0,<br>      "durationSummary": {<br>         "startedAtUTC": 1694474649498,<br>         "completedAtUTC": 1694474676869<br>      },<br>      "latencySummary": {},<br>      "sizeSummary": {<br>         "inputBytes": 0<br>      },<br>      "recordSummary": {<br>         "inputRecordCount": 0<br>      },<br>      "fileSummary": {},<br>      "statusSummary": {<br>         "status": "success",<br>         "extensions": {}<br>      }<br>   }],<br>   "flowName": "Employee - Stolz Maria DB",<br>   "header": {<br>      "_adobeio": {<br>         "imsOrgId": "A65F776A5245B01B0A490D44@AdobeOrg",<br>         "providerMetadata": "aep_observability_catalog_events",<br>         "eventCode": "source_flow_run_info"<br>      }<br>   }<br>}</pre> |
| Sources Flow Run Failure | Sources Flow Run Failure | This alert triggers when an error occurs while ingesting data from a source connection. | <pre>{<br>   "id": "f0b809c5-603d-4d6e-9600-977cb2e277b4",<br>   "createdAt": 1693538438769,<br>   "updatedAt": 1693539887893,<br>   "createdBy": "acp_foundation_connectors@AdobeID",<br>   "updatedBy": "acp_foundation_connectors@AdobeID",<br>   "createdClient": "acp_foundation_connectors",<br>   "updatedClient": "acp_foundation_connectors",<br>   "sandboxId": "9a194f08-11dc-4285-994f-0811dce28591",<br>   "sandboxName": "dev",<br>   "imsOrgId": "4353388057AC8D357F000101@AdobeOrg",<br>   "flowId": "c0cb4b5b-367f-4946-a6cc-f7ccfe005b89",<br>   "providerRefId": "M-c0cb4b5b-367f-4946-a6cc-f7ccfe005b89-incremental-0:911c77de-7d0c-4d10-a3cb-26020efd1171",<br>   "etag": "\"56010101-0000-1b00-0000-64f15e2f0000\"",<br>   "metrics": {<br>      "durationSummary": {<br>         "startedAtUTC": 1693538422921,<br>         "completedAtUTC": 1693539869854<br>      },<br>      "recordSummary": {<br>         "failedInfo": [{<br>            "code": "2200",<br>            "message": "A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond"<br>            }]<br>      },<br>      "statusSummary": {<br>         "status": "failed",<br>         "errors": [{<br>            "code": "CONNECTOR-1001-500",<br>            "message": "Error in copying the data from Source."<br>         }],<br>         "activityRefs": ["4f008a00-3a04-11eb-adc1-0242ac120002"]<br>      }<br>   },<br>   "activities": [{<br>      "id": "4f008a00-3a04-11eb-adc1-0242ac120002",<br>      "name": "SFTP Copy Activity",<br>      "updatedAtUTC": 0,<br>      "durationSummary": {<br>         "startedAtUTC": 1693538422921,<br>         "completedAtUTC": 1693539869854<br>      },<br>      "latencySummary": {},<br>      "sizeSummary": {},<br>      "recordSummary": {<br>         "failedInfo": [{<br>            "code": "2200",<br>            "message": "A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond"<br>         }]<br>      },<br>      "fileSummary": {},<br>      "statusSummary": {<br>         "status": "failed",<br>         "errors": [{<br>            "code": "CONNECTOR-1001-500",<br>            "message": "Error in copying the data from Source"<br>         }],<br>         "extensions": {<br>            "errorDetail": "ErrorCode=SftpNetworkIssue,'Type=Microsoft.DataTransfer.Common.Shared.HybridDeliveryException,Message=Meet network issue when connect to Sftp server '13.55.109.14', SocketErrorCode: 'TimedOut'.,Source=Microsoft.DataTransfer.ClientLibrary.SftpConnector,''Type=System.Net.Sockets.SocketException,Message=A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond,Source=Renci.SshNet,'",<br>            "errors": [{<br>               "code": "2200",<br>               "message": "A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond"<br>            }]<br>         }<br>      }<br>   }],<br>   "flowName": "Dataflow - wx_medallia_export_combined.csv",<br>   "header": {<br>      "_adobeio": {<br>         "imsOrgId": "4353388057AC8D357F000101@AdobeOrg",<br>         "providerMetadata": "aep_observability_catalog_events",<br>         "eventCode": "source_flow_run_error"<br>      }<br>   }<br>}</pre> |
| Sources Flow Run Delay | Ingestion Delay | This alert triggers when a batch ingestion flow run takes longer than 150 minutes to process. | <pre>{<br>   "id": "c21ddbcc-cec2-4a63-9ddb-cccec2fa6360",<br>   "status": "FIRING",<br>   "name": "sources_flow_run_delay_e2e_va7_prod",<br>   "message": "Triggered : from imsOrg - Sources Flow Run Delay2 observability_e2e_test above 150 minutes. The current value is 1 minutes.",<br>   "createdAt": "2023-09-01T04:27:44.922Z",<br>   "severity": "high",<br>   "imsOrgId": "9C991D2E622D76190A495E39@AdobeOrg",<br>   "sandboxName": "observability-01",<br>   "sandboxId": "c37274aa-4202-41d3-b274-aa420201d363",<br>   "value": "1",<br>   "url": "https://experience.adobe.com/#/@9C991D2E622D76190A495E39@AdobeOrg/sname:observability-01/platform/source/dataflows/de887077-5cf6-425f-9472-257168ad3c97/activity/test-f9d2a873-28c7-402d-891a-3f19dd6b4ad7",<br>   "flowId": "de887077-5cf6-425f-9472-257168ad3c97",<br>   "flowRunId": "test-f9d2a873-28c7-402d-891a-3f19dd6b4ad7",<br>   header": {<br>      "_adobeio": {<br>         "imsOrgId": "9C991D2E622D76190A495E39@AdobeOrg",<br>         "providerMetadata": "aep_observability_catalog_events",<br>         "eventCode": "source_flow_run_error"<br>      }<br>   }<br>}</pre> |
| Sources Ingestion Error Rate Exceeded | Ingestion Failure | This alert triggers when the ratio of failed records to all records exceed a threshold of 0.5%. | <pre>{<br>   "id": "b391018e-eccc-4906-9101-8eecccb906a9",<br>   "status": "INACTIVE",<br>   "name": "sources_ingestion_error_rate_exceeded",<br>   "message": "Resolved : Sources Ingestion Error Rate Exceeded is above 1%. The current value is 2%.",<br>   "createdAt": "2023-09-01T00:46:54.661Z",<br>   "resolvedAt": "2023-09-01T04:31:54.661Z",<br>   "severity": "high",<br>   "imsOrgId": "777B575E55828EBB7F000101@AdobeOrg",<br>   "sandboxName": "prod",<br>   "sandboxId": "ef2d7ff0-e3d0-11e9-a3bb-d7c554480df4",<br>   "value": "2",<br>   "url": "https://experience.adobe.com/#/@777B575E55828EBB7F000101@AdobeOrg/sname:prod/platform/source/dataflows/4045eb32-95e2-4c54-a6b2-07209c43fff7/activity",<br>   "flowId": "4045eb32-95e2-4c54-a6b2-07209c43fff7",<br>   "header": {<br>      "_adobeio": {<br>         "imsOrgId": "777B575E55828EBB7F000101@AdobeOrg",<br>         "providerMetadata": "aep_observability_catalog_events",<br>         "eventCode": "source_flow_run_error"<br>      }<br>   }<br>}</pre> |

{style="table-layout:auto"}

If you have previously subscribed to the following alert type, you will no longer receive alerts as this alert has been deprecated:

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Source Flow Run Delays, Failures and Errors | Lack of Ingestion | This alert sends you a message if ingestion is delayed by more than seven hours and no data gets ingested to Platform. |

{style="table-layout:auto"}

## Identity

The following alert rules are specific to [Identity Service](../../identity-service/home.md):

| I/O Event subscription | Alert rule | Description | Schema Payload |
| --- | --- | --- | --- |
| Identity Service Flow Run Start | Identity Service Flow Run Start | This alert triggers when an Identity Service flow run starts processing data. In other words, ingested data is being loaded from the Data Lake into Identity Service. | <pre>{<br>   "id": "3c41c35b-d11e-40f1-9566-a5e762c28b59",<br>   "createdAt": 1693592240366,<br>   "updatedAt": 1693592240366,<br>   "createdBy": "acp_foundation_connectors@AdobeID",<br>   "updatedBy": "acp_foundation_connectors@AdobeID",<br>   "createdClient": "acp_foundation_connectors",<br>   "updatedClient": "acp_foundation_connectors",<br>   "sandboxId": "e6d6c73c-b70f-4fd1-96c7-3cb70f7fd11d",<br>   "sandboxName": "prod",<br>   "imsOrgId": "91A31FD26373ECA90A495C89@AdobeOrg",<br>   "flowId": "ab14a8fe-52f9-4ef9-91fc-fd8f4d7087bc",<br>   "providerRefId": "64f22aaf0b0eba2866deff2a",<br>   "etag": "\"1a0059ab-0000-0a00-0000-64f22ab00000\"",<br>   "metrics": {<br>      "statusSummary": {<br>         "status": "inProgress"<br>      }<br>   },<br>   "activities": [],<br>   "flowName": "Datalake to UIS Flow",<br>   "header": {<br>      "_adobeio": {<br>         "imsOrgId": "91A31FD26373ECA90A495C89@AdobeOrg",<br>         "providerMetadata": "aep_observability_catalog_events",<br>         "eventCode": "identity_ingestion_info"<br>      }<br>   }<br>}</pre> |
| Identity Service Flow Run Success | Identity Service Flow Run Success | This alert triggers when data is successfully loaded from the Data Lake into Identity Service. | <pre>{<br>   "id": "1a1dd6ad-a033-4e1f-a5be-1fa2c2698ca4",<br>   "createdAt": 1694466196663,<br>   "updatedAt": 1694467528023,<br>   "createdBy": "acp_foundation_connectors@AdobeID",<br>   "updatedBy": "acp_foundation_connectors@AdobeID",<br>   "createdClient": "acp_foundation_connectors",<br>   "updatedClient": "acp_foundation_connectors",<br>   "sandboxId": "696c8abe-1380-4cab-ac8a-be1380acabb4",<br>   "sandboxName": "prod",<br>   "imsOrgId": "5BD3248D541C319B0A4C98C6@AdobeOrg",<br>   "flowId": "4306c3e6-2f53-46d5-9c65-dfc53259e15a",<br>   "providerRefId": "64ff8094a3c348289dc9a7a9",<br>   "etag": "\"110013a7-0000-1b00-0000-64ff85c80000\"",<br>   "predecessors": [{<br>      "flowId": "b167066f-eeb4-49f7-b88d-06c1751102bc",<br>      "flowRunId": "e2af312c-6465-47d1-92bc-e21f26c4a8df",<br>      "flowSpec": {<br>         "id": "9753525b-82c7-4dce-8a9b-5ccfce2b9876",<br>         "version": "1.0"<br>      }<br>   }],<br>   "metrics": {<br>      "durationSummary": {<br>         "startedAtUTC": 1694466196065,<br>         "completedAtUTC": 1694467520000<br>      },<br>      "recordSummary": {<br>         "inputRecordCount": 1,<br>         "createdRecordCount": 0,<br>         "updatedRecordCount": 1,<br>         "outputRecordCount": 0,<br>         "skippedRecordCount": 0,<br>         "failedRecordCount": 0,<br>         "deletedRecordCount": 0,<br>         "targetSummaries": [{<br>            "id": "4c4810e6-a595-4667-852a-bf75e1b02e8a",<br>            "createdRecordCount": 0,<br>            "outputRecordCount": 0,<br>            "updatedRecordCount": 1,<br>            "deletedRecordCount": 0<br>         }, {<br>            "id": "4d5afd86-cb3a-459d-9c0b-81a0599d5a7d",<br>            "createdRecordCount": 0,<br>            "outputRecordCount": 0,<br>            "updatedRecordCount": 0<br>         }]<br>      },<br>      "statusSummary": {<br>         "status": "success"<br>      }<br>   },<br>   "activities": [{<br>      "id": "46382888-2f46-11eb-adc1-0242ac120002",<br>      "name": "UIS Batch Activity",<br>      "updatedAtUTC": 0,<br>      "durationSummary": {<br>         "startedAtUTC": 1694466196065,<br>         "completedAtUTC": 1694467520000<br>      },<br>      "latencySummary": {},<br>      "sizeSummary": {},<br>      "recordSummary": {<br>         "inputRecordCount": 1,<br>         "createdRecordCount": 0,<br>         "updatedRecordCount": 1,<br>         "outputRecordCount": 0,<br>         "skippedRecordCount": 0,<br>         "failedRecordCount": 0,<br>         "deletedRecordCount": 0<br>      },<br>      "fileSummary": {},<br>      "statusSummary": {<br>         "status": "success",<br>         "extensions": {}<br>      }<br>   }],<br>   "flowName": "Datalake to UIS Flow",<br>   "header": {<br>      "_adobeio": {<br>         "imsOrgId": "5BD3248D541C319B0A4C98C6@AdobeOrg",<br>         "providerMetadata": "aep_observability_catalog_events",<br>         "eventCode": "identity_ingestion_info"<br>      }<br>   }<br>}</pre> |
| Identity Ingestion Delays, Failures and Errors | Identity Service Flow Run Delay | This alert triggers when an Identity Service flow run takes longer than 150 minutes to process. |  |
| Identity Ingestion Delays, Failures and Errors | Identity Service Flow Run Failure | This alert triggers when an error occurs while ingesting data into Identity Service. |  |

{style="table-layout:auto"}

## Real-Time Customer Profile

The following alert rules are specific to [Real-Time Customer Profile](../../profile/home.md):

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Profile Ingestion Info | Profile Flow Run Start | This alert triggers when a Profile flow run starts processing data. |
| Profile Ingestion Info | Profile Flow Run Success | This alert triggers when data is successfully loaded into Profile from the Data Lake. |
| Profile Ingestion Delays, Failures and Errors | Profile Flow Run Delay | This alert triggers when loading data from the Data Lake into Profile takes longer than 150 minutes to process. |
| Profile Ingestion Delays, Failures and Errors | Profile Flow Run Failure | This alert triggers when an error occurs while ingesting data into Profile. |

{style="table-layout:auto"}

## Segmentation

The following alert rules are specific to [Segmentation Service](../../segmentation/home.md):

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Segment Evaluation Job Info | Segment Job Start | This alert triggers when a segment evaluation job starts processing data. |
| Segment Evaluation Job Info | Segment Job Success | This alert triggers when a segment evaluation job completes successfully. |
| Segment Evaluation Job Delays, Failures and Errors | Segment Job Delay | This alert triggers when a segment evaluation jobs takes longer than 150 minutes to complete. <br> One of the following statuses will appear: <br>- FIRING - The condition for failure or delay has been met (Consider it in an ACTIVE state). <br>- INACTIVE - The condition has not been met or not resolved (Consider it in a RESOLVED state).|
| Segment Evaluation Job Delays, Failures and Errors | Segment Job Failure | This alert triggers when a segment evaluation job results in an error. |
| Segment Evaluation Job Delays, Failures and Errors | Segment Definition Disabled | This alert triggers when a segment definition is disabled due to internal error. This automatically triggers a war room for an Adobe engineering team to investigate the issue. This alert is only intended to be informative and does not require any action from you. |

{style="table-layout:auto"}

## Destinations

The following alert rules are specific to [destinations](../../destinations/home.md):

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Destination Flow Run Info | Destination Flow Run Start | This alert triggers when a destination flow run starts activating a segment. |
| Destination Flow Run Info | Destination Flow Run Success | This alert triggers when a segment is successfully activated to a destination. |
| Destination Flow Run Delays, Failures and Errors | Destination Flow Run Delay | This alert triggers when a destination flow run takes longer than 150 minutes to activate a segment. |
| Destination Flow Run Delays, Failures and Errors | Destination Flow Run Failure | This alert triggers when an error occurs while activating a segment to a destination. |
| Destination Flow Run Delays, Failures and Errors | Skippage rate exceeds threshold | This alert triggers when the ratio of skipped IDs to total IDs exceeds a threshold. |

{style="table-layout:auto"}

## Query Service

The following alert rules are specific to [Query Service](../../query-service/home.md):

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Query Service scheduled query info | Query Service scheduled query start | This alert triggers when a scheduled query starts running. |
| Query Service scheduled query info | Query Service scheduled query success | This alert triggers when a scheduled query job completes successfully. |
| Query Service scheduled query delays, failures and errors | query service scheduled query failure | This alert triggers when a scheduled query job fails. |

<!-- (Definitions to be added once available)
| Segment Job Delay | This alert triggers when a segment job takes longer than 150 minutes to complete. | N/A | 30 seconds | 3 hours |
| No Ingestion Activity in Past 24 Hours | This alert triggers when no new data has been ingested in the last 24-hour period. | N/A | 1 day | 1 day |
| Ingestion Error Rate Exceeded | This alert triggers when the error rate for data ingestion exceeds the allotted threshold. | 20% | 30 seconds | 30 seconds |
| Entitlement Threshold Exceeded | This alert triggers when the number of created profiles exceeds 80% of your organization's entitlement. | 30 seconds | N/A |
| SFTP source has not ingested data | This alert triggers when an [SFTP source](../../sources/connectors/cloud-storage/sftp.md) has not ingested any data within a certain time period. | 1 day | 1 day |
| Feed Message | This alert when an identity sharing feed message has been sent to a user using [Segment Match](../../segmentation/ui/segment-match.md). | N/A | N/A |
| Feed Access Revoked | This alert triggers when another Platform user revokes access to an identity sharing feed using [Segment Match](../../segmentation/ui/segment-match.md). | N/A | N/A |
| Feed Modified | This alert triggers when an identity sharing feed is modified by a user using [Segment Match](../../segmentation/ui/segment-match.md). | N/A | N/A |
| Feed Shared | This alert triggers when a user shares a new feed in [Segment Match](../../segmentation/ui/segment-match.md). | N/A | N/A |
| Link Request | This alert triggers when a user requests to connect for partner sharing. | N/A | N/A |
| Link Action | This alert triggers when a user accepts a request to connect for partner sharing. | N/A | N/A |
-->

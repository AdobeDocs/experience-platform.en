---
keywords: Experience Platform;activation;troubleshooting;guardrails;guidelines;limit
title: Default guardrails for activation data
solution: Experience Platform
product: experience platform
type: Documentation
description: 
---
# Guardrails for activation data

This page provides default use and rate limits with regard to activation behavior. When reviewing the following guardrails, it is assumed that you have correctly connected to destinations.

>[!NOTE]
>
>Most customers do not exceed these default limits. If you would like to learn about custom limits, please contact your customer care representative.

## Limit types {#limit-types}

There are two types of default limits within this document:

* **Soft limit:** It is possible to go beyond a soft limit, however soft limits provide a recommended guideline for system performance.

* **Hard limit:** A hard limit provides an absolute maximum.

>[!NOTE]
>
>The limits outlined in this document are constantly being improved. Please check back regularly for updates. If you are interested in learning about custom limits, please contact your customer care representative.

## Activation limits {#activation-limits}

The following guardrails provide recommended limits when activating Real-time Customer Profile data to destinations.

### General activation guardrails {#general-activation-guardrails}

The guardrails below generally apply to activation through all destination types.

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
|Maximum number of segments to a single destination | N/A | - | There is currently no limit to how many segments you can activate in an activation flow to a single destination platform.|
|Maximum number of destinations | N/A | - | There is currently no limit to how many destinations per organization ID or per sandbox you can connect and activate data to.|
|Type of data activated to destinations | Profile data | Hard| Currently, it is only possible to export *profile record attributes* to destinations. XDM attributes that describe event data are not supported for export at this time.|
|Insert other guardrails | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|

{style="table-layout:auto"}

### Streaming activation {#streaming-activation}

The guardrails below apply to activation through streaming destinations.

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
|Number of activations per second | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|
|Max size per record to activate | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|
|Insert other guardrails | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|

{style="table-layout:auto"}

### Batch (file-based) activation {#batch-file-based-activation}

The guardrails below apply to activation through batch file-based destinations.

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
|Activation frequency | One daily full export or more frequent incremental exports every 3, 6, 8, 12 hour increments | Hard| Read the [export full files](/help/destinations/ui/activate-batch-profile-destinations.md#export-full-files) and [export incremental files](/help/destinations/ui/activate-batch-profile-destinations.md#export-incremental-files) documentation sections for more information about the frequency increments for batch exports.|
|Maximum size per file to activate | 5GB | Hard | The maximum size of exported files is 5 GB. |
|Maximum number of rows (records) per file to activate | 5 million | Hard| Adobe Experience Platform automatically splits the export files at 5 million records (rows) per file. Each row represents one profile. Split file names are appended with a number that indicates the file is part of a larger export, as such: `filename.csv`, `filename_2.csv`, `filename_3.csv`.|

{style="table-layout:auto"}

### Ad-hoc activation {#ad-hoc-activation}

The guardrails below apply to the [ad-hoc activation](/help/destinations/api/ad-hoc-activation-api.md) method.

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
| Segments activated per ad-hoc activation job | 80 | Hard| Currently, each ad-hoc activation job can activate up to 80 segments. Attempting to activate more than 80 segments per job will cause the job to fail. This behavior is subject to change in future releases.|
| Concurrent ad-hoc activation jobs | 1 | Hard| Do not run more than one concurrent ad-hoc activation job per segment.|

{style="table-layout:auto"}

### Edge personalization destinations activation {#edge-destinations-activation}

The guardrails below apply to activation through edge personalization destinations.

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
|Max # of records activated per minute | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|
|Max size per file to activate | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|
|Max size per record to activate | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|

{style="table-layout:auto"}

### Destination SDK guardrails {#destination-sdk-guardrails}

[Destination SDK](/help/destinations/destination-sdk/overview.md) is a suite of configuration APIs that allow you to configure destination integration patterns for Experience Platform to deliver audience and profile data to your endpoint, based on data and authentication formats of your choice. The guardrails below apply to the destinations you configure using Destination SDK.

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
| maxNumEventsInBatch | Minimum x and maximum y | Hard| Description of this limit.|

### Destination throttling and retry policy {#destination-throttling-and-retry-policy}

Details on throttling thresholds or limitations for given destinations. This section also provides information regarding the retry policy for destinations.

| Type of destination | Description |
| --- | --- |
| Enterprise destinations (HTTP API, Amazon Kinesis, Azure EventHubs)| In 95 percent of the time, Experience Platform attempts to offer a throughput latency of less than 10 minutes for successfully sent messages with a rate of less than 10.000 requests per second for each dataflow to an enterprise destination. <br> In case of failed requests to your enterprise destination, Experience Platform stores the failed requests and retries twice to send the requests to your endpoint.|

## Guardrails for other Experience Platform services {#guardrails-other-services}

View guardrails information for other Experience Platform services:

* Guardrails for [[!DNL Identity Service] data](/help/identity-service/guardrails.md)
* Guardrails for [[!DNL Real-time Customer Profile] data](/help/profile/guardrails.md)
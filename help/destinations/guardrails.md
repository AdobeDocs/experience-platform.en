---
keywords: Experience Platform;activation;troubleshooting;guardrails;guidelines;limit
title: Default guardrails for activation data
solution: Experience Platform
product: experience platform
type: Documentation
description: Learn more about the data activation default usage and rate limits.
exl-id: a755f224-3329-42d6-b8a9-fadcf2b3ca7b
---
# Guardrails for activation data

This page provides default usage and rate limits with regard to activation behavior. When reviewing the following guardrails, it is assumed that you have correctly [connected to destinations](/help/destinations/ui/connect-destination.md).

>[!NOTE]
>
>* Most customers do not exceed these default limits. If you would like to learn about custom limits, please contact your customer care representative.
>* The limits outlined in this document are constantly being improved. Please check back regularly for updates.
>* Depending on individual downstream limitations, some destinations might have tighter guardrails than the ones documented on this page. Make sure to also check the [catalog](/help/destinations/catalog/overview.md) page of the destination you are connecting and activating data to. 

## Limit types {#limit-types}

There are two types of default limits within this document:

* **Soft limit:** It is possible to go beyond a soft limit, however soft limits provide a recommended guideline for system performance.
* **Hard limit:** A hard limit provides an absolute maximum. The Experience Platform UI or API does not allow you to go beyond this limit, or an error is returned if you go beyond this limit.


## Activation limits {#activation-limits}

The following guardrails provide recommended limits when activating Real-Time Customer Profile data to destinations.

### General activation guardrails {#general-activation-guardrails}

The guardrails below generally apply to activation through [all destination types](/help/destinations/destination-types.md#destination-types).

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
|Maximum number of audiences to a single destination | 250 | Soft | The recommendation is to map a maximum of 250 audiences to a single destination in a dataflow. <br><br> If you need to activate more than 250 audiences to a destination, you can either: <ul><li> Unmap audiences that you don't want to activate anymore, or</li><li>Create a new dataflow to the desired destination and map audiences to this new dataflow.</li></ul> <br> Note that in the case of some destinations, you may be limited to fewer than 250 audiences mapped to the destination. Those destinations are called out further below on the page, in their respective sections. |
|Maximum number of attributes mapped to a destination | 50 | Soft | In the case of several destinations and destination types, you can select profile attributes and identities to map for export. For optimal performance, a maximum of 50 attributes should be mapped in a dataflow to a destination.|
|Maximum number of destinations | 100 | Hard | You can create a maximum of 100 destinations that you can connect and activate data to, *per sandbox*. [Edge personalization destinations (Custom personalization)](#edge-destinations-activation) can make up a maximum of 10 of the 100 recommended destinations.|
|Type of data activated to destinations | Profile data, including identities and identity map | Hard| Currently, it is only possible to export *profile record attributes* to destinations. XDM attributes that describe event data are not supported for export at this time.|
|Type of data activated to destinations - array and map attributes support | Not available | Hard| At this time, it is **not** possible to export *array or map attributes* to destinations. The exception to this rule is the [identity map](/help/xdm/field-groups/profile/identitymap.md), which gets exported in both streaming and file-based activations.|

{style="table-layout:auto"}

### Streaming activation {#streaming-activation}

The guardrails below apply to activation through [streaming destinations](/help/destinations/ui/activate-segment-streaming-destinations.md).

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
|Number of activations (HTTP messages with profile exports) per second | N/A | - | There is currently no limit to the number of messages per second sent from Experience Platform to partner destinations' API endpoints. <br> Any limits or latencies are dictated by the endpoint where Experience Platform is sending data. Make sure to also check the [catalog](/help/destinations/catalog/overview.md) page of the destination you are connecting and activating data to. |

{style="table-layout:auto"}

### Batch (file-based) activation {#batch-file-based-activation}

The guardrails below apply to activation through [batch (file-based) destinations](/help/destinations/ui/activate-batch-profile-destinations.md).

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
|Activation frequency | One daily full export or more frequent incremental exports every 3, 6, 8, or 12 hours. | Hard| Read the [export full files](/help/destinations/ui/activate-batch-profile-destinations.md#export-full-files) and [export incremental files](/help/destinations/ui/activate-batch-profile-destinations.md#export-incremental-files) documentation sections for more information about the frequency increments for batch exports.|
|Maximum number of audiences that can pe exported at a given hour | 100 | Soft | The recommendation is to add a maximum of 100 audiences to batch destination dataflows. |
|Maximum number of rows (records) per file to activate | 5 million | Hard| Adobe Experience Platform automatically splits the exported files at 5 million records (rows) per file. Each row represents one profile. Split file names are appended with a number that indicates the file is part of a larger export, as such: `filename.csv`, `filename_2.csv`, `filename_3.csv`. For more information, read the [scheduling section](/help/destinations/ui/activate-batch-profile-destinations.md#scheduling) of the activate batch destinations tutorial.|

{style="table-layout:auto"}

### Ad-hoc activation {#ad-hoc-activation}

The guardrails below apply to the [ad-hoc activation](/help/destinations/api/ad-hoc-activation-api.md) method.

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
| Audiences activated per ad-hoc activation job | 80 | Hard| Currently, each ad-hoc activation job can activate up to 80 audiences. Attempting to activate more than 80 audiences per job will cause the job to fail. This behavior is subject to change in future releases.|
| Concurrent ad-hoc activation jobs per audience | 1 | Hard| Do not run more than one concurrent ad-hoc activation job per audience.|

{style="table-layout:auto"}

### Edge personalization destinations activation {#edge-destinations-activation}

The guardrails below apply to activation through [edge personalization destinations](/help/destinations/destination-types.md#streaming-profile-export).

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
|Maximum number of [Custom personalization](/help/destinations/catalog/personalization/custom-personalization.md) destinations | 10 | Soft | You can set up dataflows to 10 Custom personalization destinations per sandbox.|
|Maximum number of attributes mapped to a personalization destination per sandbox | 30 | Hard | A maximum of 30 attributes can be mapped in a dataflow to a personalization destination, per sandbox.|
|Maximum number of audiences mapped to a single [Adobe Target](/help/destinations/catalog/personalization/adobe-target-connection.md) destination | 50 | Soft | You can activate a maximum of 50 audiences in an activation flow to a single Adobe Target destination.|

{style="table-layout:auto"}

### [!BADGE Beta]{type=Informative} Dataset exports {#dataset-exports}

Dataset exports are currently supported in a **[!UICONTROL First Full and then Incremental]** [pattern](/help/destinations/ui/export-datasets.md#scheduling). The guardrails described in this section apply to the first full export that occurs after a dataset export workflow is set up.

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
| Size of exported datasets | 5 billion records | Soft | The limit described here for dataset exports is a *soft guardrail*. For example, while the user interface will not block you from exporting datasets larger than 5 billion records, the behavior is unpredictable and exports might either fail or have very long export latency. |

{style="table-layout:auto"}

<!--

### Dataset Types {#dataset-types}

Datasets exported from Experience Platform can be of two types, as described below:

**Timeseries**
Timeseries datasets are also known as *XDM Experience Events* datasets in Experience Platform terminology.
The dataset schema includes a top level *timestamp* column. Data is ingested in an append-only fashion.

**Record** 
Record datasets are also known as *XDM Individual Profile* datasets in Experience Platform terminology.
The dataset schema does not include a top level *timestamp* column. Data is ingested in upsert fashion.

The guardrails below are grouped by the format of the exported file, and then further by dataset type.

**Parquet output**

|Dataset type | Compression | Guardrail | Description |
|---------|----------|---------|-----------|
| Timeseries | N/A | Last seven days per file | The data from the last seven days only is exported. |
| Record | N/A | Five billion records per file | Only the data from the last seven days is exported. |

{style="table-layout:auto"}

**JSON output**

|Dataset type | Compression | Guardrail | Description |
|---------|----------|---------|-----------|
| Timeseries | N/A | Last seven days per file | The data from the last seven days only is exported. |
| <p>Record</p> | <p><ul><li>Yes</li><li>No</li></ul></p> | <p><ul><li>Five billion records per compressed file</li><li>One million records per uncompressed file</li></ul></p> | <p>The record count of the dataset must be less than five billion for compressed files and one million for uncompressed files, otherwise the export fails. Reduce the size of the dataset that you are trying to export if it is larger than the allowed threshold.</p> |

{style="table-layout:auto"}

-->

<!--

<table>
<thead>
  <tr>
    <th>Output format</th>
    <th>Dataset type</th>
    <th>Compression</th>
    <th>Guardrail</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2">Parquet</td>
    <td>Timeseries</td>
    <td>-</td>
    <td>Last seven days per file</td>
    <td>Only the data from the last seven days is exported.</td>
  </tr>
  <tr>
    <td>Record</td>
    <td>-</td>
    <td>Five billion records per file</td>
    <td>The record count of the dataset must be less than five billion, otherwise the export fails. Reduce the size of the dataset that you are trying to export if it is larger than the allowed threshold.</td>
  </tr>
  <tr>
    <td rowspan="3">JSON</td>
    <td>Timeseries</td>
    <td>-</td>
    <td>Last seven days per file</td>
    <td>Only the data from the last seven days is exported.</td>
  </tr>
  <tr>
    <td rowspan="2">Record</td>
    <td>Yes</td>
    <td>Five billion records per file</td>
    <td>The record count of the dataset must be less than five billion, otherwise the export fails. Reduce the size of the dataset that you are trying to export if it is larger than the allowed threshold.</td>
  </tr>
  <tr>
    <td>No</td>
    <td>One million records per file</td>
    <td>The record count of the dataset must be less than one million, otherwise the export fails. Reduce the size of the dataset that you are trying to export if it is larger than the allowed threshold.</td>
  </tr>
</tbody>
</table>

-->

### Destination SDK guardrails {#destination-sdk-guardrails}

[Destination SDK](/help/destinations/destination-sdk/overview.md) is a suite of configuration APIs that allow you to configure destination integration patterns for Experience Platform to deliver audience and profile data to your endpoint, based on data and authentication formats of your choice. The guardrails below apply to the destinations you configure using Destination SDK.

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
| Maximum number of [private custom destinations](/help/destinations/destination-sdk/overview.md#productized-custom-integrations) | 5  | Soft| You can create a maximum of 5 private custom streaming or batch destinations using Destination SDK. Reach out to a custom care representative if you need to create more than 5 such destinations. |
| Profile export policy for Destination SDK | <ul><li>`maxBatchAgeInSecs` (minimum 1.800 and maximum 3.600)</li><li>`maxNumEventsInBatch` (minimum 1.000, maximum 10.000)</li></ul> | Hard| When using the [configurable aggregation](destination-sdk/functionality/destination-configuration/aggregation-policy.md#configurable-aggregation) option for your destination, be mindful of the minimum and maximum values that determine how often HTTP messages are sent to your API-based destination and how many profiles the messages should include.|

{style="table-layout:auto"}

### Destination throttling and retry policy {#destination-throttling-and-retry-policy}

Details on throttling thresholds or limitations for given destinations. This section also provides information regarding the retry policy for destinations.

| Type of destination | Description |
| --- | --- |
| Enterprise destinations (HTTP API, Amazon Kinesis, Azure EventHubs)| In 95 percent of the time, Experience Platform attempts to offer a throughput latency of less than 10 minutes for successfully sent messages with a rate of less than 10 thousand requests per second for each dataflow to an enterprise destination. <br> In case of failed requests to your enterprise destination, Experience Platform stores the failed requests and retries twice to send the requests to your endpoint.|

{style="table-layout:auto"}

## Guardrails for other Experience Platform services {#guardrails-other-services}

View guardrails information for other Experience Platform services:

* Guardrails for [data ingestion](/help/ingestion/guardrails.md)
* Guardrails for [[!DNL Identity Service] data](/help/identity-service/guardrails.md)
* Guardrails for [[!DNL Real-Time Customer Profile] data](/help/profile/guardrails.md)
* Guardrails for [[!DNL Query Service] data](/help/query-service/guardrails.md)

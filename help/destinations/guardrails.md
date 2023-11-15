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

## Guardrail types {#limit-types}

There are two types of default limits within this document:

| Guardrail type | Description|
|----------|---------|
| **Performance guardrail (Soft limit)** | Performance guardrails are usage limits that relate to the scoping of your use cases. When exceeding performance guardrails, you may experience performance degradation and latency. Adobe is not responsible for such performance degradation. Customers who consistently exceed a performance guardrail may elect to license additional capacity to avoid performance degradation.|
| **System-enforced guardrails (Hard limit)** | System-enforced guardrails are enforced by the Real-Time CDP UI or API. These are limits that you cannot exceed as the UI and API will block you from doing so or will return an error.|

{style="table-layout:auto"}


## Activation limits {#activation-limits}

The following guardrails provide recommended limits when activating Real-Time Customer Profile data to destinations.

### General activation guardrails {#general-activation-guardrails}

The guardrails below generally apply to activation through [all destination types](/help/destinations/destination-types.md#destination-types).

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
|Maximum number of audiences to a single destination | 250 | Performance guardrail | The recommendation is to map a maximum of 250 audiences to a single destination in a dataflow. <br><br> If you need to activate more than 250 audiences to a destination, you can either: <ul><li> Unmap audiences that you don't want to activate anymore, or</li><li>Create a new dataflow to the desired destination and map audiences to this new dataflow.</li></ul> <br> Note that in the case of some destinations, you may be limited to fewer than 250 audiences mapped to the destination. Those destinations are called out further below on the page, in their respective sections. |
|Maximum number of attributes mapped to a destination | 50 | Performance guardrail | In the case of several destinations and destination types, you can select profile attributes and identities to map for export. For optimal performance, a maximum of 50 attributes should be mapped in a dataflow to a destination.|
|Maximum number of destinations | 100 | System-enforced guardrail | You can create a maximum of 100 destinations that you can connect and activate data to, *per sandbox*. [Edge personalization destinations (Custom personalization)](#edge-destinations-activation) can make up a maximum of 10 of the 100 recommended destinations.|
|Type of data activated to destinations | Profile data, including identities and identity map | System-enforced guardrail| Currently, it is only possible to export *profile record attributes* to destinations. XDM attributes that describe event data are not supported for export at this time.|
|Type of data activated to destinations - array and map attributes support | Not available | System-enforced guardrail| At this time, it is **not** possible to export *array or map attributes* to destinations. The exception to this rule is the [identity map](/help/xdm/field-groups/profile/identitymap.md), which gets exported in both streaming and file-based activations.|

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
|Activation frequency | One daily full export or more frequent incremental exports every 3, 6, 8, or 12 hours. | System-enforced guardrail| Read the [export full files](/help/destinations/ui/activate-batch-profile-destinations.md#export-full-files) and [export incremental files](/help/destinations/ui/activate-batch-profile-destinations.md#export-incremental-files) documentation sections for more information about the frequency increments for batch exports.|
|Maximum number of audiences that can pe exported at a given hour | 100 | Performance guardrail | The recommendation is to add a maximum of 100 audiences to batch destination dataflows. |
|Maximum number of rows (records) per file to activate | 5 million | System-enforced guardrail| Adobe Experience Platform automatically splits the exported files at 5 million records (rows) per file. Each row represents one profile. Split file names are appended with a number that indicates the file is part of a larger export, as such: `filename.csv`, `filename_2.csv`, `filename_3.csv`. For more information, read the [scheduling section](/help/destinations/ui/activate-batch-profile-destinations.md#scheduling) of the activate batch destinations tutorial.|

{style="table-layout:auto"}

### Ad-hoc activation {#ad-hoc-activation}

The guardrails below apply to the [ad-hoc activation](/help/destinations/api/ad-hoc-activation-api.md) method.

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
| Audiences activated per ad-hoc activation job | 80 | System-enforced guardrail | Currently, each ad-hoc activation job can activate up to 80 audiences. Attempting to activate more than 80 audiences per job will cause the job to fail. This behavior is subject to change in future releases.|
| Concurrent ad-hoc activation jobs per audience | 1 | System-enforced guardrail | Do not run more than one concurrent ad-hoc activation job per audience.|

{style="table-layout:auto"}

### Edge personalization destinations activation {#edge-destinations-activation}

The guardrails below apply to activation through [edge personalization destinations](/help/destinations/destination-types.md#streaming-profile-export).

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
|Maximum number of [Custom personalization](/help/destinations/catalog/personalization/custom-personalization.md) destinations | 10 | Performance guardrail | You can set up dataflows to 10 Custom personalization destinations per sandbox.|
|Maximum number of attributes mapped to a personalization destination per sandbox | 30 | System-enforced guardrail | A maximum of 30 attributes can be mapped in a dataflow to a personalization destination, per sandbox.|
|Maximum number of audiences mapped to a single [Adobe Target](/help/destinations/catalog/personalization/adobe-target-connection.md) destination | 50 | Performance guardrail | You can activate a maximum of 50 audiences in an activation flow to a single Adobe Target destination.|

{style="table-layout:auto"}

### Dataset exports {#dataset-exports}

Dataset exports are currently supported in a **[!UICONTROL First Full and then Incremental]** [pattern](/help/destinations/ui/export-datasets.md#scheduling). The guardrails described in this section *apply to the first full export* that occurs after a dataset export workflow is set up.

<!--

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
| Size of exported datasets | 5 billion records | Soft | The limit described here for dataset exports is a *soft guardrail*. For example, while the user interface will not block you from exporting datasets larger than 5 billion records, the behavior is unpredictable and exports might either fail or have very long export latency. |

{style="table-layout:auto"}

-->

#### Dataset Types {#dataset-types}

The dataset export guardrails apply to two types of datasets exported from Experience Platform, as described below:

**Datasets based on the XDM Experience Events schema**
In the case of datasets based on the XDM Experience Events schema, the dataset schema includes a top level *timestamp* column. Data is ingested in an append-only fashion.

**Datasets based on the XDM Individual Profile schema**
In the case of datasets based on the XDM Individual Profile schema, the dataset schema does not include a top level *timestamp* column. Data is ingested in an upsert fashion.

The soft guardrail below applies to all datasets exported out of Experience Platform. Review also the hard guardrails further below, specific to different dataset and compression types.

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
| Size of exported datasets | 5 billion records | Performance guardrail | The limit described here for dataset exports is a *soft guardrail*. For example, while the user interface will not block you from exporting datasets larger than 5 billion records, the behavior is unpredictable and exports might either fail or have very long export latency. |

{style="table-layout:auto"}

#### Guardrails for scheduled dataset exports

For scheduled, or recurring dataset exports, the guardrails below are identical for the two formats of the exported file (JSON or parquet), and are grouped by dataset type.

>[!WARNING]
>
>Exports to JSON files are supported in a compressed mode only.

|Dataset type | Guardrail | Guardrail type | Description |
---------|----------|---------|-------|
| Datasets based on the **XDM Experience Events schema** | Last 365 days of data | System-enforced guardrail | The data from the last calendar year is exported. |
| Datasets based on the **XDM Individual Profile schema** | Ten billion records across all exported files in a dataflow | System-enforced guardrail | The record count of the dataset must be less than ten billion for compressed JSON or parquet files and one million for uncompressed parquet files, otherwise the export fails. Reduce the size of the dataset that you are trying to export if it is larger than the allowed threshold. |

{style="table-layout:auto"}

<!--

#### Ad-hoc dataset exports

Exporting datasets in an-hoc manner is currently supported via API only. For ad-hoc dataset exports, you must use the backfill parameter in the API to limit the timeframe of exported data. 

The guardrails below are the same whether you are exporting parquet of JSON files ad-hoc. 

**Parquet and JSON output**

|Dataset type | Backfill parameter provided | Guardrail | Guardrail type | Description |
|---------|---------|-----------|-----------|------------|
| Datasets based on the **XDM Experience Events schema** |  <p><ul><li>Both start and end date provided in `backfill` parameter in API call</li><li>Incomplete `backfill` parameter provided in API call</li></ul></p> | <p><ul><li>Last 30 days</li><li>Last 365 days</li></ul></p> | Hard | <p><ul><li>The export fails if the `startDate - endDate` interval is over 30 days</li><li>Either the `startDate` or `endDate` are missing or  incorrectly formatted in the API call. Expected format: `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`</li></ul></p> |
| Datasets based on the **XDM Individual Profile schema** |  - | Ten billion records across all files exported in a dataflow | Hard | The record count of the dataset must be less than ten billion for compressed JSON or parquet files and one million for uncompressed parquet files, otherwise the export fails. Reduce the size of the dataset that you are trying to export if it is larger than the allowed threshold. |

{style="table-layout:auto"}

-->

Read more about [exporting datasets](/help/destinations/ui/export-datasets.md).


### Destination SDK guardrails {#destination-sdk-guardrails}

[Destination SDK](/help/destinations/destination-sdk/overview.md) is a suite of configuration APIs that allow you to configure destination integration patterns for Experience Platform to deliver audience and profile data to your endpoint, based on data and authentication formats of your choice. The guardrails below apply to the destinations you configure using Destination SDK.

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
| Maximum number of [private custom destinations](/help/destinations/destination-sdk/overview.md#productized-custom-integrations) | 5  | Performance guardrail| You can create a maximum of 5 private custom streaming or batch destinations using Destination SDK. Reach out to a custom care representative if you need to create more than 5 such destinations. |
| Profile export policy for Destination SDK | <ul><li>`maxBatchAgeInSecs` (minimum 1.800 and maximum 3.600)</li><li>`maxNumEventsInBatch` (minimum 1.000, maximum 10.000)</li></ul> | System-enforced guardrail | When using the [configurable aggregation](destination-sdk/functionality/destination-configuration/aggregation-policy.md#configurable-aggregation) option for your destination, be mindful of the minimum and maximum values that determine how often HTTP messages are sent to your API-based destination and how many profiles the messages should include.|

{style="table-layout:auto"}

### Destination throttling and retry policy {#destination-throttling-and-retry-policy}

Details on throttling thresholds or limitations for given destinations. This section also provides information regarding the retry policy for destinations.

| Type of destination | Description |
| --- | --- |
| Enterprise destinations (HTTP API, Amazon Kinesis, Azure EventHubs)| In 95 percent of the time, Experience Platform attempts to offer a throughput latency of less than 10 minutes for successfully sent messages with a rate of less than 10 thousand requests per second for each dataflow to an enterprise destination. <br> In case of failed requests to your enterprise destination, Experience Platform stores the failed requests and retries twice to send the requests to your endpoint.|

{style="table-layout:auto"}

## Next steps

See the following documentation for more information on other Experience Platform services guardrails, on end-to-end latency information, and licensing information from Real-Time CDP Product Description documents:

* [Real-Time CDP guardrails](/help/rtcdp/guardrails/overview.md)
* [End-to-end latency diagrams](https://experienceleague.adobe.com/docs/blueprints-learn/architecture/architecture-overview/deployment/guardrails.html?lang=en#end-to-end-latency-diagrams) for various Experience Platform services.
* [Real-Time Customer Data Platform (B2C Edition - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2c-edition-prime-and-ultimate-packages.html)
* [Real-Time Customer Data Platform (B2P - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2p-edition-prime-and-ultimate-packages.html)
* [Real-Time Customer Data Platform (B2B - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2b-edition-prime-and-ultimate-packages.html)

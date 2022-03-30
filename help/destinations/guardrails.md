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

## Limit types

There are two types of default limits within this document:

* **Soft limit:** It is possible to go beyond a soft limit, however soft limits provide a recommended guideline for system performance.

* **Hard limit:** A hard limit provides an absolute maximum.

>[!NOTE]
>
>The limits outlined in this document are constantly being improved. Please check back regularly for updates. If you are interested in learning about custom limits, please contact your customer care representative.

## Activation limits

The following guardrails provide recommended limits when activating Real-time Customer Profile data. To learn more about ....., see the section on ... in the Appendix.

### General activation guardrails

The guardrails below generally apply to activation through all destination types.

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
|Max # of audiences to a single destination | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|
|Max # of destinations | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|
|Type of data activated to destinations | Profile data | Hard| Currently, it is only possible to export *profile data* to destinations. Exporting event data is not supported at this time.|
|Max # of destinations | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|
|Insert other guardrails | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|

{style="table-layout:auto"}

### Streaming activation

The guardrails below apply to activation through streaming destinations.

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
|Number of activations per second | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|
|Max size per record to activate | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|
|Insert other guardrails | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|

{style="table-layout:auto"}

### Batch (file-based) activation

The guardrails below apply to activation through batch file-based destinations.

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
|Max # of records activated per minute | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|
|Max size per file to activate | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|
|Max size per record to activate | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|

{style="table-layout:auto"}

### Ad-hoc activation

The guardrails below apply to the ad-hoc activation method.

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
| Segments activated per ad-hoc activation job | 20 | Hard| Currently, each ad-hoc activation job can activate up to 20 segments. Attempting to activate more than 20 segments per job will cause the job to fail. This behavior is subject to change in future releases.|
| Concurrent ad-hoc activation jobs | 1 | Hard| Do not run more than one concurrent ad-hoc activation job per segment.|

{style="table-layout:auto"}

### Edge destinations activation

The guardrails below apply to activation through edge destinations.

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
|Max # of records activated per minute | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|
|Max size per file to activate | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|
|Max size per record to activate | insert number (e.g. 20) | Soft or Hard| Description of the guardrail|

{style="table-layout:auto"}

### Destination Throttling

Details on throttling thresholds or limitations for given destinations.

## Appendix

This section provides additional details for the limits in this document.

### Retry policy

Add information regarding the retry policy for destinations.

## Guardrails for other Experience Platform services

View guardrails information for other Experience Platform services

* Guardrails for [[!DNL Identity Service] data](/help/identity-service/guardrails.md)
* Guardrails for [[!DNL Real-time Customer Profile] data](/help/profile/guardrails.md)


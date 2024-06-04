---
title: Migrate ECID Mapping From Person to Activity Using The Marketo Engage source
description: Learn how to migrate your ECID mapping from the person dataset to the activity dataset using the Marketo Engage source.
exl-id: bcc91c53-aeca-4d7c-89b5-cf025d0357a0
---
# Migrate ECID mapping from [!DNL Person] dataset to [!DNL Activity] dataset

You can migrate your ECID mapping from your [!DNL Marketo Engage Person] dataset to your [!DNL Activity] dataset to provide a more stable behavior of data ingestion and identity management. Additionally, this migration addresses the following:

| Problem | Solution |
| --- | --- |
| When your [!DNL Marketo Person] dataset has links to multiple ECIDs, data ingestion fails when the [total number of identities in an Experience Data Model (XDM) record exceeds 20](../../../../identity-service/guardrails.md). | By migrating the ECID field mapping to [!DNL Activity], you can ensure that the number of identities from the [!DNL Marketo Person] dataflow stays within the limit and thus allow for data ingestion to succeed. |
| Every time the [!DNL Marketo Person] dataset is ingested with ECIDs, the timestamp on all of the ECIDs from the [!DNL Marketo Person] dataset are updated with the last updated timestamp of the Person record. This could result in the [incorrect deletion of more recent identities from the identity graph](../../../../identity-service/guardrails.md#understanding-the-deletion-logic-when-an-identity-graph-at-capacity-is-updated). | By migrating the ECID field mappings to [!DNL Activity], Identity Service can correctly reflect the timestamp of ECID's and the "first-in, first-out" mechanism of Identity Service will provide a more stable behavior. |
| When ECIDs are ingested through [!DNL Marketo Person] dataflow, newly added ECIDs do not get ingested into Experience Platform unless there are updates to the [!DNL Person] record in [!DNL Marketo]. | When a new ECID is linked to the [!DNL Person] record in [!DNL Marketo], you can ingest that ECID data through a [!DNL Marketo Activity] dataflow and immediately prompt an identity graph update on Experience Platform. |

Essentially, you must:

* Update your [!DNL Marketo Activity] dataflow.
* Update your [!DNL Marketo Person] dataflow.

## Update [!DNL Marketo Activity] dataflow {#update-activity-dataflow}

Follow the steps below to update your [!DNL Marketo Activity] dataflow:

* In the Experience Platform UI, navigate to the *Sources* workspace and find your existing dataflow for [!DNL Marketo Activity] data.
* Given that the dataflow is enabled, select the ellipses (`...`) beside the dataflow name and then select **[!UICONTROL Update dataflow]**.
* Then, select **[!UICONTROL Next]** until you reach the *Mapping* interface.
* In the *Mapping* interface, select **[!UICONTROL New field]** and then select **[!UICONTROL Add calculated field]**. From here, you must add the following:

| Source dataset | XDM target field |
| --- | --- |
| `iif(${web\.ecid} != null, to_object('ECID', arrays_to_objects('id', explode(last(split(${web\.ecid}, ":")), " "))), null)` | `identityMap` |

>[!NOTE]
>
>If your update to an existing [!DNL Marketo] dataflow consists of only adding or removing the ECID mapping field, then the dataflow automatically skips the historical backfill job. New data ingestion will only occur when activity types such as "visit webpage" and "click webpage" happens.

## Update [!DNL Marketo Person] dataflow {#update-person-dataflow}

Follow the steps below to update your [!DNL Marketo Person] dataflow:

* In the Experience Platform UI, navigate to the *Sources* workspace and find your existing dataflow for [!DNL Marketo Person] data.
* Given that the dataflow is enabled, select the ellipses (`...`) beside the dataflow name and then select **[!UICONTROL Update dataflow]**.
* Then, select **[!UICONTROL Next]** until you reach the *Mapping* interface.
* In the *Mapping* interface, remove the calculated field that maps to `identityMap` and then select **[!UICONTROL Next]** and **[!UICONTROL Save & Ingest]**.

>[!NOTE]
>
>If your update to an existing [!DNL Marketo] dataflow consists of only adding or removing the ECID mapping field, then the dataflow automatically skips the historical backfill job. The timestamp of ECIDs that have been previously ingested will remain the same. They will only be updated when new data that corresponds to the existing ECIDs are ingested.

## Next steps

By reading this document, you now know how to migrate your ECID mapping from your [!DNL Marketo Person] dataset to [!DNL Marketo Activity] dataset. For more information, read the following [!DNL Marketo] documents:

* [Create a dataflow to ingest [!DNL Marketo] data to Experience Platform](../../../tutorials/ui/create/adobe-applications/marketo.md).
* [Field mapping guide](../mapping/marketo.md).

---
title: Marketo Measure Ultimate Destination
description: Learn how to connect to the Adobe Marketo Measure Ultimate destination and export B2B datasets from Experience Platform for marketing attribution reporting.
last-substantial-update: 2026-10-15T00:00:00.000Z
exl-id: b4220841-8908-41ff-b977-dbeebfa787c8
TQID: 'https://experienceleague.adobe.com/OtNVIlcZPsIlGkRY07s0pc0hqT6GzIN1lwpTKj-Z9-A'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: ''
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: b5520579-b31f-4df7-9281-f0d9f91e2edc
    internal-label: Customer engagement
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
---
# [!DNL Marketo Measure] Ultimate destination {#mmu-destination}

Use [!DNL Adobe Marketo Measure] (formerly [!DNL Bizible]) to learn which marketing efforts drive the most revenue and return on investment. [!DNL Marketo Measure] is a marketing attribution solution that tracks and reports on channel performance automatically. Use its reports to see which channels drive the most customer engagement and to optimize your marketing spend.

Use the [!DNL Marketo Measure] destination to export business-to-business (B2B) data from [!DNL Adobe Experience Platform] to [!DNL Marketo Measure]. The destination card is only available to [!DNL Marketo Measure Ultimate] customers.

## Use cases {#use-cases}

Use the [!DNL Marketo Measure] destination to:

* Meet the complex data and performance reporting requirements of large enterprises.
* Run B2B attribution reporting across multiple CRM and marketing automation systems.
* Bring in offline touchpoint data from third parties.

## Prerequisites {#prerequisites}

Before you connect to the [!DNL Marketo Measure] destination, make sure that you meet the following prerequisites:

* An admin must complete the Experience Platform sandbox mapping in the [!DNL Marketo Measure] settings. Without the sandbox mapping, you cannot connect to the destination or activate data.
* You can only export datasets that are based on B2B XDM classes, such as the [XDM Business Account](/help/xdm/classes/b2b/business-account.md) and [XDM Business Opportunity](/help/xdm/classes/b2b/business-opportunity.md) classes.
* For each data source, you can export only one dataset per B2B XDM class.
* You can include each dataset in only one dataflow to the [!DNL Marketo Measure] destination.
* The key fields in your datasets must use the format that [!DNL Marketo Measure] requires. Read the [account key format requirements](#account-key-format) for details.

## Account key format requirements {#account-key-format}

[!DNL Marketo Measure] validates the key fields of every record that it receives from Experience Platform. Each `sourceKey` value must use the format `sourceID@sourceInstanceID.sourceType`, for example `123@999-abc-888.Marketo`. [!DNL Marketo Measure] uses the `@` and `.` characters as separators. As a result, the `sourceID`, `sourceInstanceID`, and `sourceType` parts cannot contain either character.

[!DNL Marketo Measure] rejects records that do not follow this format. The rejection happens in [!DNL Marketo Measure] after the export, so your dataflow runs in Experience Platform can still complete successfully. In [!DNL Marketo Measure], the import job errors on the **[!UICONTROL Status]** page show a message such as the following:

`accountKey.sourceKey: A field is not in the correct format (SourceId@SourceInstanceId.SourceType).`

For the full list of required fields and formats, read the [Marketo Measure Ultimate data integrity requirements](https://experienceleague.adobe.com/en/docs/marketo-measure/using/marketo-measure-ultimate/data-integrity-requirement).

>[!IMPORTANT]
>
>If you use the [!DNL Adobe Marketo Engage] source to ingest data into Experience Platform, the default mapping for `accountKey.sourceKey` is not compatible with the [!DNL Marketo Measure] destination. The default mapping appends a `.mkto_org` suffix to each account ID, for example `123.mkto_org@999-abc-888.Marketo`. [!DNL Marketo Measure] does not support the `.mkto_org` suffix and rejects these records. For the same reason, [!DNL Marketo Measure] also rejects the `.mkto_acct` suffix that the named accounts mapping uses.

Before you export [!DNL Marketo Engage] data to [!DNL Marketo Measure], update your [Marketo Engage source mapping](/help/sources/connectors/adobe-applications/mapping/marketo.md#companies) to remove the `.mkto_org` suffix. Update every field that contains an account key so that the account references in each dataset match the account records.

| Dataset | XDM target field |
|---------|------------------|
| Companies | `accountKey.sourceID` |
| Companies | `accountKey.sourceKey` |
| Companies | `accountParentKey` |
| Opportunities | `accountKey` |
| Persons | `b2b.accountKey` |
| Persons | `personComponents.sourceAccountKey` |

{style="table-layout:auto"}

For example, in the Companies dataset, change the source field for `accountKey.sourceKey` from `concat(id, ".mkto_org@${MUNCHKIN_ID}.Marketo")` to `concat(id, "@${MUNCHKIN_ID}.Marketo")`. Change the source field for `accountKey.sourceID` from `concat(id, ".mkto_org")` to `id`.

Keep the following points in mind when you update the mapping:

* Mapping updates apply only to data that you ingest after the change. To apply the updated mapping to historical data, stop your existing dataflows and create new dataflows with the updated mapping.
* The `accountKey.sourceKey` field is the primary identity of the Companies dataset. Changing its mapping also changes the account IDs that you use to look up these accounts in Experience Platform.

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

| Audience origin | Supported | Description |
|---------|----------|----------|
| [!DNL Segmentation Service] | Yes | Audiences generated through the Experience Platform [Segmentation Service](/help/segmentation/home.md).|
| All other audience origins | No | This category includes all audience origins outside of audiences generated through the [!DNL Segmentation Service]. Read about the [various audience origins](/help/segmentation/ui/audience-portal.md#customize). Some examples include: <ul><li>Custom upload audiences [imported](/help/segmentation/ui/audience-portal.md#import-audience) into Experience Platform from CSV files</li><li>Look-alike audiences</li><li>Federated audiences</li><li>Audiences generated in other Experience Platform apps such as [!DNL Adobe Journey Optimizer]</li></ul> |

{style="table-layout:auto"}

Supported audiences by audience data type:

| Audience data type | Supported | Description | Use cases |
|--------------------|-----------|-------------|-----------|
| [People audiences](/help/segmentation/types/people-audiences.md) | No | Based on customer profiles, so you can target specific groups of people for marketing campaigns. | Frequent buyers, cart abandoners |
| [Account audiences](/help/segmentation/types/account-audiences.md) | No | Target individuals within specific organizations for account-based marketing strategies. | B2B marketing |
| [Prospect audiences](/help/segmentation/types/prospect-audiences.md) | No | Target individuals who are not yet customers but share characteristics with your target audience. | Prospecting with third-party data |
| [Dataset exports](/help/catalog/datasets/overview.md) | Yes | Collections of structured data stored in the [!DNL Adobe Experience Platform] data lake. | Reporting, data science workflows |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

The following table describes the destination export type and frequency.

| Item | Type | Notes |
|---------|----------|---------|
| Export type | **[!UICONTROL Dataset export]** | You export raw datasets, which are not grouped or structured by audience interests or qualifications. Read more about [dataset exports](/help/destinations/destination-types.md#dataset-export-destinations).|
| Export frequency | **[!UICONTROL Batch]** | This batch destination exports files to [!DNL Marketo Measure] every two hours. Read more about [scheduling dataset exports](/help/destinations/ui/export-datasets.md#scheduling).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
>
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage and Activate Dataset Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps in the [destination configuration tutorial](/help/destinations/ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the next section.

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the following required and optional fields. An asterisk next to a field in the UI indicates that the field is required.

* **[!UICONTROL Name]**: A name to identify this destination later.
* **[!UICONTROL Description]**: A description to help you identify this destination later.

![The Configure new destination screen for Marketo Measure, showing a connected Marketo Measure account, the Name and Description fields, and the alert options.](/help/destinations/assets/catalog/adobe/marketo-measure-ultimate/marketo-measure-connect-to-destination.png)

### Enable alerts {#enable-alerts}

Enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to notifications on the status of your dataflow. For more information on alerts, read the guide on [subscribing to destinations alerts using the UI](/help/destinations/ui/alerts.md).

When you finish providing details for your destination connection, select **[!UICONTROL Next]**.

## Export datasets to this destination {#export-datasets}

>[!IMPORTANT]
>
>To activate data, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage and Activate Dataset Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read the [export datasets](/help/destinations/ui/export-datasets.md) tutorial for detailed instructions on exporting datasets to this destination.

## Validate data export {#exported-data}

To validate a dataset export, check that your dataset appears in your [Marketo Measure Snowflake data warehouse](https://experienceleague.adobe.com/en/docs/marketo-measure/using/marketo-measure-data-warehouse/data-warehouse-access-reader-account). If records are missing, check the import job errors on the **[!UICONTROL Status]** page in [!DNL Marketo Measure]. Then, make sure that the key fields in your dataset meet the [account key format requirements](#account-key-format).

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

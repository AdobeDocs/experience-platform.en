---
title: Record Delete Requests (UI Workflow)
description: Learn how to delete records in the Adobe Experience Platform UI.
exl-id: 5303905a-9005-483e-9980-f23b3b11b1d9
---
# Record delete requests (UI Workflow) {#record-delete}
 
Use the [[!UICONTROL Data Lifecycle] workspace](./overview.md) to delete records in Adobe Experience Platform based on their primary identities. These records can be tied to individual consumers or any other entity that is included in the identity graph.
 
>[!IMPORTANT]
>
>Record deletions are meant to be used for data cleansing, removing anonymous data, or data minimization. They are **not** to be used for data subject rights requests (compliance) as pertaining to privacy regulations like the General Data Protection Regulation (GDPR). For all compliance use cases, use [Adobe Experience Platform Privacy Service](../../privacy-service/home.md) instead.

## Prerequisites {#prerequisites}

Deleting records requires a working understanding of how identity fields function in Experience Platform. Specifically, you must know the primary identity namespace and values for the entities whose records you want to delete, depending on the dataset (or datasets) you are deleting them from.

Refer to the following documentation for more information on identities in Experience Platform:

* [Adobe Experience Platform Identity Service](../../identity-service/home.md): Bridges identities across devices and systems, linking datasets together based on the identity fields defined by the XDM schemas they conform to.
* [Identity namespaces](../../identity-service/features/namespaces.md): Identity namespaces define the different types of identity information that can relate to a single person, and are a required component for each identity field.
* [Real-Time Customer Profile](../../profile/home.md): Uses identity graphs to provide unified consumer profiles based on aggregated data from multiple sources, updated in near-real-time.
* [Experience Data Model (XDM)](../../xdm/home.md): Provides standard definitions and structures for Experience Platform data through the use of schemas. All Experience Platform datasets conform to a specific XDM schema, and the schema defines which fields are identities.
* [Identity fields](../../xdm/ui/fields/identity.md): Learn how an identity field is defined in an XDM schema.

>[!IMPORTANT]
>
>Record deletions act exclusively on the **primary identity** field defined in the dataset's schema. The following limitations apply:
>
>* **Secondary identities are not scanned.** If a dataset contains multiple identity fields, only the primary identity is used for matching. Records cannot be targeted or deleted based on non-primary identities.
>* **Records without a populated primary identity are skipped.** If a record does not have primary identity metadata populated, it is not eligible for deletion.
>* **Data ingested before identity configuration is not eligible.** If the primary identity field was added to a schema after data ingestion, previously ingested records cannot be deleted through this workflow.

## Create a request {#create-request}

To start the process, select **[!UICONTROL Data Lifecycle]** in the left navigation of the Experience Platform UI. The [!UICONTROL Data lifecycle requests] workspace appears. Next, select **[!UICONTROL Create request]** from the main page in the workspace.

![The [!UICONTROL Data lifecycle requests] workspace with [!UICONTROL Create request] selected.](../images/ui/record-delete/create-request-button.png)

The request creation workflow appears. By default, the **[!UICONTROL Delete record]** option is selected under the **[!UICONTROL Requested Action]** section. Leave this option selected.

>[!IMPORTANT] 
> 
>To improve efficiency and make dataset operations less expensive, organizations who have been moved to the Delta format can delete data from the Identity Service, Real-Time Customer Profile, and the data lake. This type of user is referred to as delta-migrated. Users from organizations who have been delta-migrated can choose to delete records from either a single or all datasets. Users from organizations that have not undergone delta migration are unable to selectively delete records from either a single dataset or all datasets, as shown in the image below. In this case, continue to the [Provide identities](#provide-identities) section of the guide.

![The request creation workflow with the [!UICONTROL Delete record] option selected and highlighted.](../images/ui/record-delete/delete-record.png)

## Select datasets {#select-dataset}

The next step is to determine whether you want to delete records from a single dataset or all datasets. Depending on your organization's configuration, the dataset selection option may not be available. If you do not see this option, continue to the [Provide identities](#provide-identities) section of the guide.

In the **[!UICONTROL Record Details]** section, select a radio button to choose either a specific dataset or all datasets.

To delete from a specific dataset, select **[!UICONTROL Select dataset]**, then select the database icon (![The database icon](/help/images/icons/database.png)). In the dialog that appears, choose a dataset and select **[!UICONTROL Done]** to confirm.

![The [!UICONTROL Select dataset] dialog with a dataset selected and [!UICONTROL Done] highlighted.](../images/ui/record-delete/select-dataset.png)

To delete from all datasets, select **[!UICONTROL All datasets]**. This option increases the scope of the operation and requires you to provide the primary identity type for each dataset you want to target.

![The [!UICONTROL Select dataset] dialog with the [!UICONTROL All datasets] option selected.](../images/ui/record-delete/all-datasets.png)

>[!WARNING]
>
>Selecting **[!UICONTROL All datasets]** expands the operation to all datasets in your organization. Each dataset may use a different primary identity type. You must provide **the primary identity type for each dataset** to ensure accurate matching.
>
>If any identity type is missing, some records may be skipped during deletion. This can slow processing and lead to **partial results**.

Each dataset in Experience Platform supports only one primary identity type.

* When deleting from a **single dataset**, all identities in your request must use the **same type**.
* When deleting from **all datasets**, you can include **multiple identity types**, since different datasets may rely on different primary identities."

## Provide identities {#provide-identities}

>[!CONTEXTUALHELP]
>id="platform_hygiene_primaryidentity"
>title="Primary identity namespace"
>abstract="The primary identity namespace is the attribute that uniquely ties a record to a consumer's profile in Experience Platform. The primary identity field for a dataset is defined by the schema that the dataset is based on. In this column, you must provide the primary identity namespace (such as `email` for email addresses or `ecid` for Experience Cloud IDs) that matches the dataset's schema. To learn more, see the Data lifecycle UI guide."

>[!CONTEXTUALHELP]
>id="platform_hygiene_identityvalue"
>title="Primary identity value"
>abstract="In this column, you must provide the value for the record's identity namespace, which must correspond with the identity type provided in the left column. If the identity namespace type is `email`, the value should be the record's email address. To learn more, see the data lifecycle UI guide."

When deleting records, you must provide identity information so the system can determine which records are to be deleted. For any dataset in Experience Platform, records are deleted based on the **primary identity** field that is defined by the dataset's schema.

>[!NOTE]
>
>Although the UI allows you to select an identity namespace, only the **primary identity** configured in the dataset's schema is used at execution time. Ensure the identity values you provide correspond to the dataset's primary identity field.

Like all identity fields in Experience Platform, a primary identity is composed of two things: a **type** (the identity namespace) and a **value**. The identity type provides context as to how the field identifies a record (such as an email address). The value represents a record's specific identity for that type (for example, `jdoe@example.com` for the `email` identity type). Common fields used as primary identities include account information, device IDs, and cookie IDs.

>[!TIP]
>
>If you don't know the identity namespace for a particular dataset, you can find it in the Experience Platform UI. In the **[!UICONTROL Datasets]** workspace, select the dataset in question from the list. On the details page for the dataset, hover over the name of the dataset's schema in the right rail. The identity namespace is displayed along with the schema name and description.
>
>![The Datasets dashboard with a dataset selected, and a schema dialog opened from the dataset details panel. The primary ID of the dataset is highlighted.](../images/ui/record-delete/dataset-primary-identity.png)

There are two options to provide identities when deleting records:

* [Upload a JSON file](#upload-json)
* [Enter primary identity values manually](#manual-identity)

### Upload a JSON file {#upload-json}

To upload a JSON file, you can drag and drop the file into the provided area, or select **[!UICONTROL Choose files]** to browse and select from your local directory.

![The request creation workflow with the choose files and drag and drop interface for uploading JSON files highlighted.](../images/ui/record-delete/upload-json.png)

The JSON file must be formatted as an array of objects, each object representing a primary identity value for the target dataset.

```json
[
  {
    "namespaceCode": "email",
    "value": "jdoe@example.com"
  },
  {
    "namespaceCode": "email",
    "value": "san.gray@example.com"
  }
]
```

| Property | Description |
| --- | --- |
| `namespaceCode` | The primary identity namespace for the target dataset. |
| `value` | The primary identity value as denoted by the type. |

Once the file is uploaded, you can continue to [submit the request](#submit).

### Manually enter identities {#manual-identity}

To enter identities manually, select **[!UICONTROL Add identity]**.

![The request creation workflow with the [!UICONTROL Add identity] option highlighted.](../images/ui/record-delete/add-identity.png)

Controls appear that allow you to enter identities one at a time. Under **[!UICONTROL identity namespace]**, use the dropdown menu to select the identity type. Under **[!UICONTROL Primary Identity Value]**, provide the identity namespace value for the record.

![The request creation workflow with an identity field manually added.](../images/ui/record-delete/identity-added.png)

To add more identities, select the plus icon (![A plus icon.](/help/images/icons/tree-expand-all.png)) next to one of the rows, or select **[!UICONTROL Add identity]**.

![The request creation workflow with the plus icon and the add identity icon highlighted.](../images/ui/record-delete/more-identities.png)

## Quotas and processing timelines {#quotas}

Record Delete requests are subject to daily and monthly identifier submission limits, determined by your organization's license entitlement. These limits apply to both UI- and API-based delete requests.

>[!NOTE]
>
>You can submit up to **1,000,000 identifiers per day**, but only if your remaining monthly quota allows it. If your monthly cap is less than 1 million, your daily submissions cannot exceed that cap.

### Monthly submission entitlement by product {#quota-limits}

The table below outlines identifier submission limits by product and entitlement level. For each product, the monthly cap is the lesser of two values: a fixed identifier ceiling or a percentage-based threshold tied to your licensed data volume.

| Product  | Entitlement Description | Monthly Cap (Whichever is Less) |
|----------|-------------------------|---------------------------------|
| Real-Time CDP or Adobe Journey Optimizer | Without Privacy and Security Shield or Healthcare Shield add-on          | 2,000,000 identifiers or 5% of addressable audience                    |
| Real-Time CDP or Adobe Journey Optimizer | With Privacy and Security Shield or Healthcare Shield add-on             | 15,000,000 identifiers or 10% of addressable audience                  |
| Customer Journey Analytics               | Without Privacy and Security Shield or Healthcare Shield add-on          | 2,000,000 identifiers or 100 identifiers per million CJA rows of entitlement |
| Customer Journey Analytics               | With Privacy and Security Shield or Healthcare Shield add-on             | 15,000,000 identifiers or 200 identifiers per million CJA rows of entitlement |

>[!NOTE]
>
> Most organizations will have lower monthly limits based on their actual addressable audience or CJA row entitlements.

Quotas reset on the first day of each calendar month. Unused quota does **not** carry over.

>[!NOTE]
>
>Quotas are based on your organization's licensed monthly entitlement for **submitted identifiers**. These are not enforced by system guardrails but may be monitored and reviewed.  
>
>Record Delete is a **shared service**. Your monthly cap reflects the highest entitlement across Real-Time CDP, Adobe Journey Optimizer, Customer Journey Analytics, and any applicable Shield add-ons.

### Processing timelines for identifier submissions {#sla-processing-timelines}

After submission, record delete requests are queued and processed based on your entitlement level.

| Product & Entitlement Description                                                  | Queue Duration      | Maximum Processing Time (SLA) |
|------------------------------------------------------------------------------------|---------------------|-------------------------------|
| Without Privacy and Security Shield or Healthcare Shield add-on                   | Up to 15 days       | 30 days                       |
| With Privacy and Security Shield or Healthcare Shield add-on                      | Typically 24 hours  | 15 days                       |

If your organization requires higher limits, contact your Adobe representative for an entitlement review.

>[!TIP]
>
>To check your current quota usage or entitlement tier, see the [Quota reference guide](../api/quota.md).

## Submit the request {#submit}

Once you have finished adding identities to the request, under **[!UICONTROL Request settings]**, provide a name and optional description for the request before selecting **[!UICONTROL Submit]**.

>[!TIP]
>
>You can submit up to 10,000 identities per request through the UI. To submit larger volumes (up to 100,000 IDs per request), use the [API method](../api/workorder.md#create).

![The request setting's [!UICONTROL Name] and [!UICONTROL Description] fields with [!UICONTROL Submit] highlighted.](../images/ui/record-delete/submit.png)

A [!UICONTROL Confirm request] dialog appears to indicate that the identities cannot be recovered once deleted. Select **[!UICONTROL Submit]** to confirm the list of identities whose data you want to delete.

![The [!UICONTROL Confirm request] dialog.](../images/ui/record-delete/confirm-request.png)

After the request is submitted, a work order is created and appears on the [!UICONTROL Record] tab of the [!UICONTROL Data Lifecycle] workspace. From here, you can monitor the work order's status as it processes the request.

>[!NOTE]
>
>Refer to the overview section on [timelines and transparency](../home.md#record-delete-transparency) for details on how record deletes are processed once they are executed.

![The [!UICONTROL Record] tab of the [!UICONTROL Data Lifecycle] workspace with the new request highlighted.](../images/ui/record-delete/request-log.png)

## Deleting records from datasets based on relational schemas {#relational-record-delete}

If the dataset you are deleting from is based on a relational schema, review the following considerations to ensure records are removed correctly and not re-ingested due to mismatches between Experience Platform and your source system.

### Record deletion behavior

The following table outlines how record deletions behave across Experience Platform and source systems, depending on the ingestion method and change data capture configuration.

| Aspect              | Behavior                                                                 |
|---------------------|--------------------------------------------------------------------------|
| Platform deletion   | Records are removed from the Experience Platform dataset and data lake. |
| Source retention    | Records remain in the source system unless explicitly deleted there.     |
| Full refresh impact | If using full refresh, deleted records may be re-ingested unless removed or excluded from the source. |
| Change data capture behavior | Records flagged with `_change_request_type = 'd'` are deleted during ingestion. Unflagged records may be re-ingested. |

To prevent re-ingestion, apply the same deletion approach in both your source system and Experience Platform, either by removing records from both systems or including `_change_request_type = 'd'` for records you intend to delete.

### Change data capture and control columns

Relational schemas that use Sources with change data capture can use the `_change_request_type` control column when distinguishing deletes from upserts. During ingestion, records flagged with `d` are deleted from the dataset, while those flagged with `u` or without the column are treated as upserts. The `_change_request_type` column is read at ingestion time only and is not stored in the target schema or mapped to XDM fields.

>[!NOTE]
>
>Deleting records through the Data Lifecycle UI does not affect the source system. To remove data from both locations, delete it in both Experience Platform and the source.

### Additional deletion methods for relational schemas

Beyond the standard record deletion workflow, relational schemas support additional methods for specific use cases:

* **Safe-copy dataset approach**: Duplicate the production dataset and apply deletes to the copy for controlled testing or reconciliation before applying changes to production data.
* **Deletes-only batch upload**: Upload a file containing only delete operations for targeted hygiene when you need to remove specific records without affecting other data.

### Descriptor support for hygiene operations {#descriptor-support}

Relational schema descriptors provide essential metadata for precise hygiene operations:

* **Primary key descriptor**: Identifies records uniquely for targeted updates or deletes, ensuring the correct records are affected.
* **Version descriptor**: Ensures deletes and updates apply in the correct chronological order, preventing out-of-sequence operations.
* **Timestamp descriptor (time-series schemas)**: Aligns delete operations with event occurrence times rather than ingestion times.

>[!NOTE]
>
>Hygiene processes operate at the dataset level. For profile-enabled datasets, additional profile workflows may be required to maintain consistency across Real-Time Customer Profile.

### Scheduled retention for relational schemas

For automated hygiene based on data age rather than specific identities, see [Manage Experience Event dataset retention (TTL)](../../catalog/datasets/experience-event-dataset-retention-ttl-guide.md) for scheduled row-level retention in the data lake. 

>[!NOTE]
>
>Row-level expiration is only supported for datasets that use time-series behavior.

### Best practices for relational record deletion

To avoid unintentional re-ingestion and maintain data consistency across systems, follow these best practices:

* **Coordinate deletions**: Align record deletions with your change data capture configuration and source data management strategy.
* **Monitor change data capture flows**: After deleting records in Platform, monitor dataflows and confirm that the source system either removes the same records or includes them with `_change_request_type = 'd'`.
* **Clean up the source**: For sources using full refresh ingestion or those that do not support deletes through change data capture, delete records directly from the source system to avoid re-ingestion.

For more details on schema requirements, see [relational schema descriptor requirements](../../xdm/schema/relational.md#relational-schemas).  

To learn how change data capture works with sources, see [Enable change data capture in sources](../../sources/tutorials/api/change-data-capture.md#using-change-data-capture-with-relational-schemas).

## Next steps

This document covered how to delete records in the Experience Platform UI. For information on how to perform other data lifecycle management tasks in the UI, refer to the [Data Lifecycle UI overview](./overview.md).

To learn how to delete records using the Data Hygiene API, refer to the [work order endpoint guide](../api/workorder.md).

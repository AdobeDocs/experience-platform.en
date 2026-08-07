---
title: Batch Destinations Mapping Reference
description: Learn about mandatory attributes, deduplication keys, calculated fields, and known limitations of the batch destinations Mapping step.
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
---

# Batch destinations mapping reference

This article describes mandatory attributes, deduplication keys, calculated fields, and known limitations of the **[!UICONTROL Mapping]** step when you [activate audiences to batch profile export destinations](/help/destinations/ui/activate-batch-profile-destinations.md#mapping).

## Mandatory attributes {#mandatory-attributes}

>[!CONTEXTUALHELP]
>id="platform_destinations_activate_mandatorykey"
>title="About mandatory attributes"
>abstract="Select the XDM schema attributes that all exported profiles should include. Profiles without the mandatory key are not exported to the destination. Not selecting a mandatory key export all qualified profiles regardless of their attributes."

A mandatory attribute is a user-enabled checkbox which ensures all profile records contain the selected attribute. For example: all exported profiles contain an email address.

You can mark attributes as mandatory to ensure that [!DNL Experience Platform] exports only the profiles that include the specific attribute. As a result, it can be used as an additional form of filtering. Marking an attribute as mandatory is **not** required.

Not selecting a mandatory attribute exports all qualified profiles regardless of their attributes.

It is recommended that one of the attributes is a [unique identifier](../../destinations/catalog/email-marketing/overview.md#identity) from your schema. For more information about mandatory attributes, see the identity section in the [Email marketing destinations](../../destinations/catalog/email-marketing/overview.md#identity) documentation. 

## Deduplication keys {#deduplication-keys}

>[!CONTEXTUALHELP]
>id="platform_destinations_activate_deduplicationkey"
>title="About deduplication keys"
>abstract="Eliminate multiple records of the same profile in the export files by selecting a deduplication key. Select a single namespace or up to two XDM schema attributes as a deduplication key. Not selecting a deduplication key may lead to duplicate profile entries in the export files."

>[!IMPORTANT]
>
>Always configure a deduplication key for scheduled exports. Without deduplication, you may see duplicate rows or conflicting segment membership for the same profile, because scheduled exports process both snapshot and incremental data.

A deduplication key is a user-defined primary key that determines how profiles are deduplicated. When multiple records exist for the same individual, deduplication ensures only the latest record is exported.

Deduplication keys eliminate the possibility of having multiple records of the same profile in one export file.

There are three ways you can use deduplication keys in [!DNL Experience Platform]:

* Using a single identity namespace as a [!UICONTROL deduplication key]
* Using a single profile attribute from an [!DNL XDM] profile as a [!UICONTROL deduplication key]
* Using a combination of two profile attributes from an [!DNL XDM] profile as a composite key

>[!IMPORTANT]
>
> You can export a single identity namespace to a destination, and the namespace is automatically set as deduplication key. Sending multiple namespaces to a destination is not supported.
> 
> You cannot use a combination of identity namespaces and profile attributes as deduplication keys.

## Deduplication example {#deduplication-example}

This example illustrates how deduplication works, depending on the selected deduplication keys.

Let's consider the following two profiles.

**Profile A**

```json
{
  "identityMap": {
    "Email": [
      {
        "id": "johndoe@example.com"
      },
      {
        "id": "doejohn_1@example.com"
      }
    ]
  },
  "segmentMembership": {
    "ups": {
      "fa5c4622-6847-4199-8dd4-8b7c7c7ed1d6": {
        "status": "realized",
        "lastQualificationTime": "2021-03-10 10:03:08"
      }
    }
  },
  "person": {
    "name": {
      "lastName": "Doe",
      "firstName": "John"
    }
  },
  "personalEmail": {
    "address": "johndoe@example.com"
  }
}
```

**Profile B**

```json
{
  "identityMap": {
    "Email": [
      {
        "id": "johndoe@example.com"
      },
      {
        "id": "doejohn_2@example.com"
      }
    ]
  },
  "segmentMembership": {
    "ups": {
      "fa5c4622-6847-4199-8dd4-8b7c7c7ed1d6": {
        "status": "realized",
        "lastQualificationTime": "2021-04-10 11:33:28"
      }
    }
  },
  "person": {
    "name": {
      "lastName": "D",
      "firstName": "John"
    }
  },
  "personalEmail": {
    "address": "johndoe@example.com"
  }
}
```

## Deduplication use case 1: no deduplication {#deduplication-use-case-1}

Using no deduplication, the export file would contain the following entries.

|personalEmail|firstName|lastName|
|---|---|---|
|johndoe@example.com|John|Doe|
|johndoe@example.com|John|D|


## Deduplication use case 2: deduplication based on identity namespace {#deduplication-use-case-2}

Assuming deduplication by the [!DNL Email] namespace, the export file would contain the following entries. Profile B is the latest one that qualified for the audience, so it is the only one getting exported.

|Email*|personalEmail|firstName|lastName|
|---|---|---|---|
|johndoe@example.com|johndoe@example.com|John|D|
|doejohn_2@example.com|johndoe@example.com|John|D|

## Deduplication use case 3: deduplication based on a single profile attribute {#deduplication-use-case-3}

Assuming deduplication by the `personal Email` attribute, the export file would contain the following entry. Profile B is the latest one that qualified for the audience, so it is the only one getting exported.

|personalEmail*|firstName|lastName|
|---|---|---|
|johndoe@example.com|John|D|


## Deduplication use case 4: deduplication based on two profile attributes {#deduplication-use-case-4}

Assuming deduplication by the composite key `personalEmail + lastName`, the export file would contain the following entries.

|personalEmail*|lastName*|firstName|
|---|---|---|
|johndoe@example.com|D|John|
|johndoe@example.com|Doe|John|

Adobe recommends selecting an identity namespace such as a [!DNL CRM ID] or email address as a deduplication key, to ensure all profile records are uniquely identified.

## Deduplication behavior for profiles with the same timestamp {#deduplication-same-timestamp}

When exporting profiles to file-based destinations, deduplication ensures that only one profile is exported when multiple profiles share the same deduplication key and the same reference timestamp. This timestamp represents the moment a profile's audience membership or identity graph was last updated. For more information on how profiles are updated and exported, see the [profile export behavior](https://experienceleague.adobe.com/en/docs/experience-platform/destinations/how-destinations-work/profile-export-behavior#what-determines-a-data-export-and-what-is-included-in-the-export-2) document.

### Key considerations {#key-considerations}

* **Deterministic selection**: When multiple profiles have identical deduplication keys and the same reference timestamp, the deduplication logic determines which profile to export by sorting the values of other selected columns (excluding complex types such as arrays, maps, or objects). The sorted values are evaluated in lexicographical order, and the first profile is selected.

* **Example scenario**

Consider the following data, where the deduplication key is the `Email` column:

|Email*|first_name|last_name|timestamp|
|---|---|---|---|
|`test1@test.com`|John|Morris|2024-10-12T09:50|
|`test1@test.com`|John|Doe|2024-10-12T09:50|
|`test2@test.com`|Frank|Smith|2024-10-12T09:50|

{style="table-layout:auto"}

After deduplication, the export file will contain:

|Email*|first_name|last_name|timestamp|
|---|---|---|---|
|`test1@test.com`|John|Doe|2024-10-12T09:50|
|`test2@test.com`|Frank|Smith|2024-10-12T09:50|

{style="table-layout:auto"}

**Explanation**: For `test1@test.com`, both profiles share the same deduplication key and timestamp. The algorithm sorts the `first_name` and `last_name` column values lexicographically. Since the first names are identical, the tie is resolved using the `last_name` column, where "Doe" comes before "Morris."

**Improved reliability**: This updated deduplication process ensures that successive runs with the same coordinates will always produce the same results, improving consistency.

## Perform data transformations through calculated fields {#calculated-fields}

You can use the [Calculated fields](/help/destinations/ui/data-transformations-calculated-fields.md) control to perform various data transformations on the data exported to file-based destinations. 

## Known limitations {#known-limitations}

The new **[!UICONTROL Mapping]** page has the following known limitations:

### Audience membership attribute cannot be selected through the mapping workflow {#audience-membership-attribute-mapping}

Due to a known limitation, you cannot currently use the **[!UICONTROL Select field]** window to add `segmentMembership.seg_namespace.seg_id.status` to your file exports. Instead, you need to manually paste the value `xdm: segmentMembership.seg_namespace.seg_id.status` into the schema field, as shown below.

![Screen recording showing the audience membership workaround in the mapping step of the activation workflow.](../assets/ui/activate-batch-profile-destinations/segment-membership-mapping-step.gif){zoomable="yes"}

>[!NOTE]
>
>For cloud storage destinations, the following attributes are added to the mapping by default:
>
>* `segmentMembership.seg_namespace.seg_id.status`
>* `segmentMembership.seg_namespace.seg_id.lastQualificationTime`

File exports will vary in the following ways, depending on whether `segmentMembership.seg_namespace.seg_id.status` is selected:

* If the `segmentMembership.seg_namespace.seg_id.status` field is selected, exported files include **[!UICONTROL Active]** members in the initial full snapshot and newly **[!UICONTROL Active]** and **[!UICONTROL Expired]** members in subsequent incremental exports.
* If the `segmentMembership.seg_namespace.seg_id.status` field is not selected, exported files include only **[!UICONTROL Active]** members in the initial full snapshot and in subsequent incremental exports.

Read more about [profile export behavior for file-based destinations](/help/destinations/how-destinations-work/profile-export-behavior.md#file-based-destinations).

### Identity namespaces cannot currently be selected for exports {#identity-namespaces-export-limitation}

Selecting identity namespaces for export, as shown in the image below, is currently not supported. Selecting any identity namespaces for export will result in an error in the **[!UICONTROL Review]** step.

![Unsupported mapping showing identity exports.](../assets/ui/activate-batch-profile-destinations/unsupported-identity-mapping.png){zoomable="yes"}

As a temporary workaround if you need to add identity namespaces to your exported files during the beta, you can either:

* Use the legacy cloud storage destinations for the dataflows where you want to include identity namespaces in the exports
* Upload identities as attributes into Experience Platform, to then export them to your cloud storage destinations.

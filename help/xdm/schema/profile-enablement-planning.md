---
keywords: Experience Platform;profile;real-time customer profile;schema;dataset;planning;enablement
solution: Experience Platform
title: Planning for Real-Time Customer Profile enablement
description: Review the key considerations you must evaluate before enabling schemas and datasets for Real-Time Customer Profile.
---
# Planning for Real-Time Customer Profile enablement

Use this page to confirm that your schema and dataset are ready before you enable them for Real-Time Customer Profile. Complete this planning review after you design your schema fields but before you enable the schema for Profile. Profile enablement applies permanent behavioral changes to your data model. You cannot reverse schema enablement, and enabling a dataset affects how its records are processed within Real-Time Customer Profile. Review this guidance to avoid unintended enablement, data quality issues, or long-term constraints in your schema design.

Enabling Profile determines how your data is stitched, merged, and activated across Experience Platform. Planning ensures that your schema structure, identity configuration, and dataset purpose are correct before you make the change. After you complete this planning review, you can proceed to enable data for Profile in the **[!UICONTROL Schema Editor]** or **[!UICONTROL Dataset]** UI.

## Prerequisites

Before using this planning guide, ensure you have:

* Designed a schema using the **[!UICONTROL Schema Editor]** or Schema Registry API. See the [schema creation tutorial](../tutorials/create-schema-ui.md) to get started.
* Configured at least one identity field in your schema. Review the [identity field configuration guide](../ui/fields/identity.md) for instructions.
* Basic understanding of [Real-Time Customer Profile](../../profile/home.md) and how it uses schemas to build unified customer views.
* Appropriate permissions to enable schemas and datasets for Profile. Contact your system administrator if you do not have access to Profile enablement options.

If you have not completed these prerequisites, start with the [schema creation tutorial](../tutorials/create-schema-ui.md) before proceeding with this planning guide.

## Why planning matters {#why-planning-matters}

Profile enablement permanently changes how Experience Platform treats your data. The following permanent changes apply to schemas and datasets.

**Schemas**: When you enable a schema for Profile, you cannot disable or delete it. You also cannot remove fields from the schema after data is ingested. This permanence means your schema design must be complete and stable before you enable Profile, as you cannot reverse the decision or simplify the structure later.

**Datasets**: When you enable a dataset for Profile, Profile Service uses its records to build and update profiles. Review the dataset enablement behavior in the [dataset user guide](../../catalog/datasets/enable-for-profile.md). Unlike schemas, you can disable or delete the dataset later, but doing so removes associated profile records and may affect segmentation or activation workflows. Consider the downstream impact before you make changes to an enabled dataset.

Because these changes affect downstream processes, verify that a schema and its datasets are appropriate for Profile before you enable them.

### Understanding the enablement workflow

You must enable both the schema AND the datasets that use that schema for Profile. Enable resources in the following order:

1. **Enable the schema for Profile**: First, enable Profile on the schema in the **[!UICONTROL Schema Editor]**. This allows any dataset using this schema to be enabled for Profile.
2. **Enable individual datasets for Profile**: After the schema is enabled, enable Profile on each dataset that should contribute to unified customer profiles.

You cannot enable a dataset for Profile if its schema is not already enabled. The schema acts as a prerequisite for dataset enablement. This two-step process ensures that your data model is validated before Profile Service begins processing records.

## When to enable a schema or dataset for Profile {#when-to-enable}

Review the criteria below to confirm Profile enablement is appropriate for your data.

Enable Profile in the following situations:

* The data contributes to a unified customer profile.  
* The data is required for segmentation or activation workflows.  
* The schema includes identity fields that represent a person or customer-level key.  
* The dataset contains Experience Events or profile attributes that must be stitched across channels. Review the [XDM ExperienceEvent class](../classes/experienceevent.md) to confirm event requirements.

## When not to enable a schema or dataset for Profile {#when-not-to-enable}

Avoid enabling Profile in the following cases:

* The schema represents lookup or reference-only data.  
* The dataset contains test, temporary, or non-production data.  
* The data does not identify a person or is used only for reporting.  
* The schema is experimental or structurally incomplete.

Enabling Profile in these scenarios may create unnecessary profiles, increase license usage, or introduce long-term schema constraints.

## Key considerations before enabling Profile {#key-considerations}

Review the considerations in this section to ensure that your schema and dataset support Profile use cases and long-term data governance. Before enabling Profile, verify your schema structure, identity configuration, and dataset purpose.

### Schema readiness

Review the schema structure to confirm that it supports Profile requirements. The schema must contain the fields required for segmentation and activation, while excluding fields that are experimental or not needed long-term. Remember that any additional fields you add after enablement must be additive, as you cannot remove fields after data is ingested. This restriction means you should validate your field selection carefully before you enable Profile. For details on allowable updates, see the [schema evolution rules](./composition.md#evolution).

### Identity configuration

Identity configuration determines how Profile stitches records across datasets. Review the identity field requirements in the [identity configuration documentation](../ui/fields/identity.md) before enabling Profile. Start by confirming that a valid primary identity is selected—this field must be stable, unique, and consistently populated across all records. Verify that identity namespaces are assigned correctly to prevent stitching errors. If you use secondary identities, confirm that they support your use cases without causing profile collisions, which can occur when different individuals share the same identity value.

### Dataset purpose

Enable a dataset for Profile only when it contributes directly to profile attributes or Experience Events used in downstream workflows. Avoid enabling datasets that contain lookup or reference data not used in segmentation, test or sample data, or operational system-generated records not intended for activation. These data types do not contribute to unified customer profiles and create unnecessary storage overhead. If a dataset does not contain identity fields or customer behavior data that supports segmentation and activation, do not enable it for Profile.

**Example**: 

Enable a "Customer Purchase Events" dataset that contains transaction data with customer IDs. Profile Service uses these events to build customer timelines and enable segmentation based on purchase behavior. 

Do NOT enable a "Product Catalog" dataset that only contains SKU reference data without customer identifiers. Enabling this type of dataset creates unnecessary storage overhead without contributing to unified customer profiles.

## Pre-enablement checklist {#pre-enablement-checklist}

Use this checklist to confirm readiness before enabling a schema or dataset for Profile. Complete each item before you enable Profile.

### Schema-level checks

Begin by validating that your schema design is complete and stable. Review your schema to confirm that all required fields for your use case are present and that no experimental or temporary fields are included. Consult the [schema design best practices](./best-practices.md) to ensure your schema follows recommended patterns. Obtain approval from your team on the final field list, as you cannot remove fields once data is ingested.

Next, verify that your primary identity configuration is correct. Open your schema in the **[!UICONTROL Schema Editor]** and locate the field marked with the identity icon. Confirm that this field is consistently populated in your source data and that the identity namespace is appropriate for your use case. The primary identity must be stable, unique, and reliably present across all records to ensure proper profile stitching.

Finally, confirm that you do not need to rename or reorganize the schema structure. Remember that you cannot rename fields after data is ingested, and schema structure changes are limited to additive updates only. Any long-term ambiguity in naming or organization cannot be corrected later, so resolve these issues before enablement.

### Dataset-level checks

For each dataset you plan to enable, start by confirming that it contains profile-relevant data. Review sample records to verify they contain customer or event data rather than purely operational or reference information. Ensure that records include identity values that link to customer profiles. Datasets without identity fields or customer behavior data should not be enabled for Profile.

Determine whether the dataset should contribute to identity stitching or segmentation by understanding how its identity values relate to other datasets in your Profile-enabled environment. Consider whether records in this dataset should merge with existing profiles or create new profile fragments. Review the [merge policy documentation](../../profile/merge-policies/overview.md) to understand how Profile Service stitches records across datasets and how this dataset fits into your overall identity strategy.

Before enabling the dataset, estimate the number of unique identity values it contains and verify that these identity values represent actual customers rather than test accounts or system identifiers. Confirm that enabling this dataset aligns with your license entitlements, as each unique identity contributes to your addressable audience count. Profile enablement increases storage and processing costs, so ensure the dataset provides value that justifies this investment.

Completing this checklist helps prevent issues that cannot be reversed after enablement.

## Enabling Profile for your schema and dataset {#enable-profile}

After completing the pre-enablement checklist, follow these steps to enable Profile. You must enable the schema before you enable any datasets that use that schema.

### Enable your schema for Profile

Enable Profile on your schema first:

1. Navigate to **[!UICONTROL Schemas]** in the Experience Platform UI.
2. Select your schema from the list to open it in the **[!UICONTROL Schema Editor]**.
3. Select the **[!UICONTROL Profile]** toggle in the right rail. The schema properties panel displays a confirmation dialog.
4. Select **[!UICONTROL Enable]** to confirm. The schema is now enabled for Profile.

For detailed instructions, see the [schema enablement guide](../ui/resources/schemas.md#profile) in the Schema Editor documentation.

### Enable your datasets for Profile

After your schema is enabled for Profile, enable each dataset that should contribute to unified profiles:

1. Navigate to **[!UICONTROL Datasets]** in the Experience Platform UI.
2. Select a dataset from the list to open the dataset details page.
3. Select the **[!UICONTROL Profile]** toggle in the right rail. The dataset properties panel updates to show Profile is enabled.

Repeat this process for each dataset that should contribute to Real-Time Customer Profile. For detailed instructions and API enablement options, see the [dataset enablement guide](../../catalog/datasets/enable-for-profile.md).

### Why order matters

You must enable the schema before enabling datasets because:

* Profile Service validates that the schema structure supports profile operations before allowing dataset enablement.
* The schema defines which fields are available for segmentation and identity stitching across all datasets that use it.
* Once the schema is enabled, all future datasets created from that schema can be enabled for Profile immediately.

After you enable both the schema and datasets, Profile Service begins processing records and building unified customer profiles. Records ingested before enablement are not included in profiles unless you reingest the data.

## Next steps {#next-steps}

You have reviewed the permanent effects of Profile enablement, confirmed that your schema and datasets are ready, and validated that your identity configuration supports your use cases. To deepen your understanding of schema structure and field relationships, review the [Basics of schema composition](../schema/composition.md), which explains schema evolution rules and how fields interact within the data model. If you encounter issues during or after enablement, consult the [XDM troubleshooting guide](../troubleshooting-guide.md) for common problems and solutions. For alternative enablement methods and detailed UI instructions, see [Enable a dataset for Profile](../../catalog/datasets/user-guide.md#enable-profile) in the dataset user guide. To learn more about how identity namespaces affect profile stitching and resolution, review the [Identity namespaces overview](../../identity-service/features/namespaces.md).

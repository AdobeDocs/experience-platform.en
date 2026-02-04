---
keywords: Experience Platform;profile;real-time customer profile;schema;dataset;planning;enablement
solution: Experience Platform
title: Planning for Real-Time Customer Profile enablement
description: Review the key considerations you must evaluate before enabling schemas and datasets for Real-Time Customer Profile.
---
# Planning for Real-Time Customer Profile enablement

Use this page to confirm that your schema and dataset are ready before you enable them for Real-Time Customer Profile. Complete this planning review after you design your schema and before you enable Profile in the Schema Editor or Dataset interface. Profile enablement applies permanent behavioral changes to your data model. You cannot reverse schema enablement, and enabling a dataset affects how its records are processed within Real-Time Customer Profile. Review this guidance to avoid unintended enablement, data quality issues, or long-term constraints in your schema design.

Enabling Profile determines how your data is stitched, merged, and activated across Experience Platform. Planning ensures that your schema structure, identity configuration, and dataset purpose are correct before you make the change. After you complete this planning review, you can proceed to enable data for Profile in the **[!UICONTROL Schema Editor]** or **[!UICONTROL Dataset]** UI.

## Why planning matters {#why-planning-matters}

Profile enablement permanently changes how Experience Platform treats your data. The following permanent changes apply to schemas and datasets.

**Schemas**: When you enable a schema for Profile, you cannot disable or delete it. You also cannot remove fields from the schema after data is ingested. This permanence means your schema design must be complete and stable before you enable Profile, as you cannot reverse the decision or simplify the structure later.

**Datasets**: When you enable a dataset for Profile, Profile Service uses its records to build and update profiles. Review the dataset enablement behavior in the [dataset user guide](../../catalog/datasets/enable-for-profile.md). Unlike schemas, you can disable or delete the dataset later, but doing so removes associated profile records and may affect segmentation or activation workflows. Consider the downstream impact before you make changes to an enabled dataset.

Because these changes affect downstream processes, verify that a schema and its datasets are appropriate for Profile before you enable them.

## Key considerations before enabling Profile {#key-considerations}

Review the considerations in this section to ensure that your schema and dataset support Profile use cases and long-term data governance. Before enabling Profile, verify your schema structure, identity configuration, and dataset purpose.

### Schema readiness

Review the schema structure to confirm that it supports Profile requirements. The schema must contain the fields required for segmentation and activation, while excluding fields that are experimental or not needed long-term. Remember that any additional fields you add after enablement must be additive, as you cannot remove fields after data is ingested. This restriction means you should validate your field selection carefully before you enable Profile. For details on allowable updates, see the [schema evolution rules](./composition.md#evolution).

### Identity configuration

Identity configuration determines how Profile stitches records across datasets. Review the identity field requirements in the [identity configuration documentation](../ui/fields/identity.md) before enabling Profile. Start by confirming that a valid primary identity is selected—this field must be stable, unique, and consistently populated across all records. Verify that identity namespaces are assigned correctly to prevent stitching errors. If you use secondary identities, confirm that they support your use cases without causing profile collisions, which can occur when different individuals share the same identity value.

### Dataset purpose

Enable a dataset for Profile only when it contributes directly to profile attributes or Experience Events used in downstream workflows. Avoid enabling datasets that contain:

* Lookup or reference data not used in segmentation  
* Test or sample data  
* Operational or system-generated records not intended for activation  

If a dataset does not contribute to the unified profile, do not enable it for Profile.

## Pre-enablement checklist {#pre-enablement-checklist}

Use this checklist to confirm readiness before enabling a schema or dataset for Profile. Complete each item before you enable Profile:

* Confirm that the schema design is complete and stable. For guidance, see the [schema design best practices](./best-practices.md).  
* Confirm that the primary identity is correct and unique.  
* Confirm that the dataset contains profile-relevant data.  
* Confirm whether the dataset should contribute to identity stitching or segmentation. To understand stitching rules, see the [merge policy documentation](../../profile/merge-policies/overview.md).  
* Confirm that enabling Profile does not introduce unwanted profiles or inflate audience counts.  
* Confirm that you do not need to rename or reorganize the schema to avoid long-term ambiguity.

Completing this checklist helps prevent issues that cannot be reversed after enablement.

## When to enable a schema or dataset for Profile {#when-to-enable}

Enable Profile in the following situations.

* The data contributes to a unified customer profile.  
* The data is required for segmentation or activation workflows.  
* The schema includes identity fields that represent a person or customer-level key.  
* The dataset contains Experience Events or profile attributes that must be stitched across channels. Review the [XDM ExperienceEvent class](../classes/experienceevent.md) to confirm event requirements.

## When not to enable a schema or dataset for Profile {#when-not-to-enable}

Avoid enabling Profile in the following cases.

* The schema represents lookup or reference-only data.  
* The dataset contains test, temporary, or non-production data.  
* The data does not identify a person or is used only for reporting.  
* The schema is experimental or structurally incomplete.

Enabling Profile in these scenarios may create unnecessary profiles, increase license usage, or introduce long-term schema constraints.

## Next steps {#next-steps}

By now, you have reviewed the permanent effects of Profile enablement, confirmed that your schema and datasets are ready, and validated that your identity configuration supports your use cases. Next, use the following resources to explore schema structure, check identity configuration, and understand Profile behavior.

* [Basics of schema composition](../schema/composition.md)  
* [XDM troubleshooting guide](../troubleshooting-guide.md)  
* [Enable a dataset for Profile](../../catalog/datasets/user-guide.md#enable-profile)  
* [Identity namespaces overview](../../identity-service/features/namespaces.md)  

These pages provide additional detail about schema evolution rules, identity fields, and Profile enablement logic.

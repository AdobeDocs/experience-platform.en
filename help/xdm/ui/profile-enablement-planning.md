---
title: Planning for Real-Time Customer Profile enablement
description: Review the key considerations you must evaluate before enabling schemas and datasets for Real-Time Customer Profile.
---
# Planning for Real-Time Customer Profile enablement

Use this page to confirm that your schema and dataset are ready before you enable them for Real-Time Customer Profile. Profile enablement applies permanent behavioral changes to your data model. You cannot reverse schema enablement, and enabling a dataset affects how its records are processed within Real-Time Customer Profile. Review this guidance to avoid unintended enablement, data quality issues, or long-term constraints in your schema design.

Enabling Profile determines how your data is stitched, merged, and activated across Experience Platform. Planning ensures that your schema structure, identity configuration, and dataset purpose are correct before you make the change.

## Why planning matters {#why-planning-matters}

Profile enablement permanently changes how Experience Platform treats your data:

* **Schemas**: When you enable a schema for Profile, you cannot disable or delete it. You also cannot remove fields from the schema after data is ingested.  
* **Datasets**: When you enable a dataset for Profile, Profile Service uses its records to build and update profiles. You can disable or delete the dataset later, but doing so removes associated profile records and may affect segmentation or activation workflows.

Because these changes affect downstream processes, verify that a schema and its datasets are appropriate for Profile before you enable them.

## Key considerations before enabling Profile {#key-considerations}

Review the considerations in this section to ensure that your schema and dataset support Profile use cases and long-term data governance.

### Schema readiness

Review the schema structure to confirm that it supports Profile requirements:

* The schema contains the fields required for segmentation and activation.
* The schema excludes fields that are experimental or not needed long-term.
* Any additional fields you add must be additive; you cannot remove fields after ingestion.

### Identity configuration

Identity configuration determines how Profile stitches records across datasets. Before enabling Profile, confirm the following:

* A valid primary identity is selected.
* The identity field is stable, unique, and consistently populated.
* Identity namespaces are assigned correctly.
* Any secondary identities support your use cases without causing profile collisions.

### Dataset purpose

Enable a dataset for Profile only when it contributes directly to profile attributes or Experience Events used in downstream workflows. Avoid enabling datasets that contain:

* Lookup or reference data not used in segmentation  
* Test or sample data  
* Operational or system-generated records not intended for activation  

If a dataset does not contribute to the unified profile, do not enable it for Profile.

## Pre-enablement checklist {#pre-enablement-checklist}

Use this checklist to confirm readiness before enabling a schema or dataset for Profile:

* Confirm that the schema design is complete and stable.  
* Confirm that the primary identity is correct and unique.  
* Verify that the dataset contains profile-relevant data.  
* Review whether the dataset should contribute to identity stitching or segmentation.  
* Ensure that enabling Profile does not introduce unwanted profiles or inflate audience counts.  
* Validate that you do not need to rename or reorganize the schema to avoid long-term ambiguity.

Completing this checklist helps prevent issues that cannot be reversed after enablement.

## When to enable a schema or dataset for Profile {#when-to-enable}

Enable Profile in the following situations:

* The data contributes to a unified customer profile.  
* The data is required for segmentation or activation workflows.  
* The schema includes identity fields that represent a person or customer-level key.  
* The dataset contains Experience Events or profile attributes that must be stitched across channels.

## When not to enable a schema or dataset for Profile {#when-not-to-enable}

Avoid enabling Profile in the following cases:

* The schema represents lookup or reference-only data.  
* The dataset contains test, temporary, or non-production data.  
* The data does not identify a person or is used only for reporting.  
* The schema is experimental or structurally incomplete.  

Enabling Profile in these scenarios may create unnecessary profiles, increase license usage, or introduce long-term schema constraints.

## Next steps {#next-steps}

Use the following resources to review schema structure, identity configuration, and Profile behavior:

* [Basics of schema composition](../schema/composition.md)  
* [XDM troubleshooting guide](../troubleshooting-guide.md)  
* [Enable a dataset for Profile](../../catalog/datasets/user-guide.md#enable-profile)  

These pages provide additional detail about schema evolution rules, identity fields, and Profile enablement logic.

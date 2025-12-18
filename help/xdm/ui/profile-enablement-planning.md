---
title: Planning for Real-Time Customer Profile enablement
description: Learn the key considerations you must review before enabling schemas and datasets for Real-Time Customer Profile.
---
# Planning for Real-Time Customer Profile enablement

This page helps you plan before you enable a schema or dataset for use in Real-Time Customer Profile. You cannot reverse schema enablement, and dataset behavior changes after enablement. Review the guidance on this page to avoid accidental enablement, data quality issues, or long-term constraints in your data model.

Enabling Profile determines how your data is stitched, merged, and activated across Experience Platform. Planning ensures that your schema structure, identity configuration, and dataset purpose are correct before you make the change.

## Why planning matters {#why-planning-matters}

Profile enablement permanently changes how Experience Platform treats your data:

* **Schemas**: When a schema is enabled for Profile, you cannot disable it or delete it. You also cannot remove fields from the schema after data is ingested.  
* **Datasets**: When a dataset is enabled for Profile, Profile Service uses that dataset to build and update profiles. Datasets can be disabled or deleted later, but doing so removes the associated profile records and may impact segmentation or activation workflows.

Because these changes affect downstream behavior, verify that a schema and its datasets are appropriate for Profile before you enable them.

## Key considerations before enabling Profile {#key-considerations}

Review the following considerations before you enable a schema or dataset for Profile. These points help ensure schema quality, identity integrity, and correct usage across Experience Platform.

### Schema readiness

Ensure that the schema reflects the correct structure for your data model:

* The schema contains the fields required for segmentation and activation.
* The schema excludes fields that are experimental or not needed long-term.
* Any field you add later must be additive; you cannot remove fields after ingestion.

### Identity configuration

Identity configuration determines how Profile stitches data across datasets. Before enabling Profile, confirm that:

* A valid primary identity is selected.
* The identity field is stable, unique, and consistently populated.
* Identity namespaces are correctly assigned.
* Any secondary identities support your use cases without causing profile collisions.

### Dataset purpose

Enable a dataset for Profile only when the dataset contributes directly to profile attributes or Experience Events used in downstream workflows. Avoid enabling datasets that contain:

* Lookup or reference data not used in segmentation  
* Test or sample records  
* Operational or system-generated data not intended for activation

If a dataset does not contribute to the unified profile, do not enable it for Profile.

## Pre-enablement checklist {#pre-enablement-checklist}

Use this checklist to verify readiness before you enable a schema or dataset:

* Confirm that the schema design is complete and stable.  
* Confirm that the primary identity is correct and unique.  
* Verify that the dataset contains profile-relevant data.  
* Review whether the dataset should contribute to identity stitching or segmentation.  
* Ensure that enabling Profile will not introduce unwanted profiles or inflate audience counts.  
* Validate that you do not need to rename or reorganize the schema to avoid long-term ambiguity.

Completing this checklist helps prevent issues that cannot be reversed after enablement.

## When to enable a schema or dataset for Profile {#when-to-enable}

Enable Profile when:

* The data contributes to a unified customer profile.  
* The data is required for segmentation or activation workflows.  
* The schema includes identity fields that represent a person or customer-level key.  
* The dataset contains Experience Events or profile attributes that must be stitched across channels.

## When not to enable a schema or dataset for Profile {#when-not-to-enable}

Do not enable Profile when:

* The schema represents lookup or reference-only data.  
* The dataset contains test, temporary, or non-production data.  
* The data does not identify a person or is only used for reporting.  
* The schema is still experimental or structurally incomplete.  

If you enable Profile in these cases, you may create unnecessary profiles, inflate license usage, or introduce long-term constraints that require schema replacement.

## Next Steps

After reading this document you now understand the key considerations to review before enabling schemas and datasets for Real-Time Customer Profile. For help understanding schema structure and identity setup, see:

* [Basics of schema composition](../schema/composition.md)  
* [XDM troubleshooting guide](../troubleshooting-guide.md)  
* [Enable a dataset for Profile](../../catalog/datasets/user-guide.md#enable-profile)  

These pages provide deeper detail about schema evolution rules, field-level restrictions, and Profile behavior.

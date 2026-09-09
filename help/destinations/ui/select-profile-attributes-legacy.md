---
title: Select Profile Attributes (Legacy)
description: Learn how to use the legacy Select attributes step for Adobe Campaign, Oracle Responsys, Oracle Eloqua, and Salesforce Marketing Cloud.
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

# Select profile attributes (legacy)

>[!IMPORTANT]
>
>All cloud storage destinations in the catalog can view an improved [[!UICONTROL Mapping] step](/help/destinations/ui/activate-batch-profile-destinations.md#mapping) which replaces the **[!UICONTROL Select attributes]** step described in this article.
>
>This **[!UICONTROL Select attributes]** step is still displayed for the [!DNL Adobe Campaign], Oracle Responsys, Oracle Eloqua, and Salesforce Marketing Cloud email marketing destinations.

For profile-based destinations, you must select the profile attributes that you want to send to the target destination.

1. In the **[!UICONTROL Select attributes]** page, select **[!UICONTROL Add new field]**.
    
    ![Image highlighting the Add new field button.](../assets/ui/activate-batch-profile-destinations/add-new-field.png){zoomable="yes"}

2. Select the arrow to the right of the **[!UICONTROL Schema field]** entry.

    ![Image highlighting how to select a source field.](../assets/ui/activate-batch-profile-destinations/select-source-field.png){zoomable="yes"}

3. In the **[!UICONTROL Select field]** page, select the XDM attributes or identity namespaces that you want to send to the destination, then choose **[!UICONTROL Select]**.

    ![Image showing the various fields available as source fields.](../assets/ui/activate-batch-profile-destinations/target-field-page.png){zoomable="yes"}

4. To add more mappings, repeat steps one to three.

>[!NOTE]
>
> [!DNL Adobe Experience Platform] prefills your selection with four recommended, commonly used attributes from your schema: `person.name.firstName`, `person.name.lastName`, `personalEmail.address`, `segmentMembership.seg_namespace.seg_id.status`.

![Image showing prefilled recommended attributes in the mapping step of the audience activation workflow.](../assets/ui/activate-batch-profile-destinations/prefilled-fields.png){zoomable="yes"} 

>[!IMPORTANT]
>
>Due to a known limitation, you cannot currently use the **[!UICONTROL Select field]** window to add `segmentMembership.seg_namespace.seg_id.status` to your file exports. Instead, you must manually paste the value `xdm: segmentMembership.seg_namespace.seg_id.status` into the schema field, as shown below.
>
>![Screen recording showing the audience membership workaround in the mapping step of the activation workflow.](../assets/ui/activate-batch-profile-destinations/segment-membership.gif){zoomable="yes"}

File exports vary in the following ways, depending on whether `segmentMembership.seg_namespace.seg_id.status` is selected:

* If the `segmentMembership.seg_namespace.seg_id.status` field is selected, exported files include **[!UICONTROL Active]** members in the initial full snapshot and **[!UICONTROL Active]** and **[!UICONTROL Expired]** members in subsequent incremental exports.
* If the `segmentMembership.seg_namespace.seg_id.status` field is not selected, exported files include only **[!UICONTROL Active]** members in the initial full snapshot and in subsequent incremental exports.

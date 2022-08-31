---
keywords: Experience Platform;home;popular topics;access control;attribute-based access control;
title: Attribute-Based Access Control End-to-End Guide
description: This document provides an end-to-end guide on attribute-based access control in Adobe Experience Platform
---
# Attribute-based access control end-to-end guide

Attribute-based access control is an Adobe Experience Platform feature that allows privacy conscious brands greater flexibility to manage user access. Individual objects such as schema fields and segments can be assigned to user roles.

This functionality allows you to label Experience Data Model (XDM) schema fields with labels that define organizational or data usage scopes. In parallel, administrators can use the user and role administration interface to define access policies surrounding XDM schema fields and better manage the access given to users or groups of users (internal, external, or third-party users).

## Getting started

This tutorial requires a working understanding of the following Platform components:

* [[!DNL Experience Data Model (XDM)] System](../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
  * [Basics of schema composition](../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [Adobe Experience Platform Segmentation Service](../../segmentation/home.md): The segmentation engine within [!DNL Platform] used to create audience segments from your customer profiles based on customer behaviors and attributes.

### Use case: restrict access to sensitive data

In this guide we will:

* Use the example of a healthcare provider (ACME Business Group) who's marketing group works with external agencies. 
* Assign the Protected Health Information (PHI) label to our ACME Business Group role and to the schema resources and segments. 
* Create a policy to link the labels in our attribute to the labels in our role denying access to schema fields and segments. This will deny access to the schema field and segment in all sandboxes for users who do not have matching labels.

The basic requirements required are as follows:

* The internal marketing team can see or use PHI or Regulated Health Data (RHD) in their marketing campaigns.
* The external agency should not be able to see or use this type of data.
* The three components that must be configured for attribute-based access are:
  * Label roles.
  * Label resources - schema fields and segments.
  * Create a policy which links the labels together.

## Permissions

In order to access attribute-based access control permissions for [!DNL Experience Cloud], you must be an administrator for your organization.

If you do not have admin privileges, contact your system administrator to gain access.

Once you have admin privileges, go to [Adobe Experience Cloud](https://experience.adobe.com/) and sign in using your Adobe credentials. Once logged in, the **[!UICONTROL Overview]** page appears for your organization you have admin privileges for. This page shows the products that your organization is subscribed to, along with other controls to add users and admins to the organization as a whole. Select **[!UICONTROL Permissions]** to open the attribute-based access control workspace for your Platform integration.

![abac-select-product](../images/flac-ui/flac-select-product.png)

The attribute-based access control workspace for Adobe Experience Cloud appears, opening on the **[!UICONTROL Roles]** page.

## Label Roles

Roles define the access that an administrator, a specialist, or an end-user has to resources in your organization. In a role-based access control environment, user access provisioning is group through common responsibilities and needs. A role has a given set of permissions and members of your organization can be assigned to one or more roles, depending on the scope of view or write access they need.

>[!NOTE]
>
>The workflow will be using the ACME Business Group role.

To get started, select [!UICONTROL ACME Business Group] from the from the **[!UICONTROL Roles]** page.

![abac-select-role](../images/abac-end-to-end-user-guide/abac-select-role.png)

Next, select **[!UICONTROL Labels]** and then select **[!UICONTROL Add Labels]**.

![abac-select-add-labels](../images/abac-end-to-end-user-guide/abac-select-add-labels.png)

A list of all labels in your organization appears. Select [!UICONTROL RHD] to add the label for [!UICONTROL PHI/Regulated Health Data]. Allow for a few moments for a blue check mark to appear beside the label, and then select **[!UICONTROL Save]**.

![abac-select-role-label](../images/abac-end-to-end-user-guide/abac-select-role-label.png)

## Schema labels

Next, add the RHD label to the resources that you would like to restrict access from. Select **[!UICONTROL Schemas]** from the left navigation and then select [!UICONTROL ACME Healthcare] from the list of schemas that appear.

![abac-select-schema](../images/abac-end-to-end-user-guide/abac-select-schema.png)

Next, select **[!UICONTROL Labels]** to see an interactive schema tree that displays the fields associated with your schema. From here, you can assign labels to one or multiple fields at once. Select the [!UICONTROL BloodGlucose] and [!UICONTROL InsulinLevel] fields, and then select **[!UICONTROL Edit governance labels]**.

![abac-select-schema-labels](../images/abac-end-to-end-user-guide/abac-select-schema-labels-tab.png)

The **[!UICONTROL Edit labels]** dialog appears, allowing you to select the label you previously added to your role. Select the [!UICONTROL PHI/ Regulated Health Data] label, then select **[!UICONTROL Save]**.

>[!NOTE] 
>
>The label gets added at the field group level and will impact all other schemas using this field.

![abac-select-schema-labels](../images/abac-end-to-end-user-guide/abac-select-schema-labels.png)

## Segment labels

Once you have completed labeling your schema fields, you can now begin labeling your segments.

Select **[!UICONTROL Segments]** from the left navigation. A list of segments available in your organization is displayed. The example below displays two segments, based on the fields that you added to your label:

* Blood Glucose >100
* Insulin <50

Select [!UICONTROL Blood Glucose>100] to start labeling the segment.

![abac-select-segment](../images/abac-end-to-end-user-guide/abac-select-segment.png)

The segment **[!UICONTROL Details]** screen appears. Select **[!UICONTROL Manage Access]**.

![Abac-segment-fields-manage-access](../images/abac-end-to-end-user-guide/abac-segment-fields-manage-access.png)

The **[!UICONTROL Edit labels]** dialog appears, allowing you to select the label you previously added to our role. Select the PHI/ Regulated Health Data label, then select **[!UICONTROL Save]**.

![abac-select-segment-labels](../images/abac-end-to-end-user-guide/abac-select-segment-labels.png)

## Create a policy

Policies are statements that bring attributes together to establish permissible and impermissible actions. Policies can either be local or global, and can override other policies. In this example, access to schema fields and segments will be denied in all sandboxes, for users who don't have the corresponding labels in the schema field.

To create a policy, select **[!UICONTROL Permissions]** from the left navigation and then select **[!UICONTROL Policies]**. Next, select **[!UICONTROL Create policy]**.

![abac-create-policy](../images/abac-end-to-end-user-guide/abac-create-policy.png)

The **[!UICONTROL Create new policy]** dialog appears, prompting you to enter a name and an optional description. Once you enter your policy name and description, select **[!UICONTROL Confirm]**.

![abac-create-policy-details](../images/abac-end-to-end-user-guide/abac-create-policy-details.png)

>[!TIP]
>
>A resource is the asset or object that a subject can or cannot access. Resources can be files, applications, servers, or even APIs.

To deny access to all schema fields, use the dropdown arrow and select [!UICONTROL Deny access to] and then select [!UICONTROL No resource selected]. Using the dropdown select [!UICONTROL Schema Field]. A permissions box appears, using the dropdown select [!UICONTROL All].

![abac-create-policy-deny-access-schema](../images/abac-end-to-end-user-guide/abac-create-policy-deny-access-schema.png)

The table below shows the resource configurations available when creating a policy:

| Resource Configuration | Description |
| --- | --- |
|The following being false| Access will be restricted if the criteria selected is false. |
|The following being true| Access will be restricted if the criteria selected is true.|
|Matches any| The user matches any resource.|
|Matches all| The user matches all resources.|
|Core label| A core label is an out-of-the-box label that was provided by Adobe.|
|Custom label| A custom label is a label that has been created by the organization.|

Select [!UICONTROL The following being false] and then select [!UICONTROL No attribute selected]. Select the user [!UICONTROL Core label] using the drop down, then using the drop down select [!UICONTROL Matches all], and then select the resource [!UICONTROL Core label] using the drop down. Next, select **[!UICONTROL Add resource]**.

![abac-create-policy-deny-access-schema-expression](../images/abac-end-to-end-user-guide/abac-create-policy-deny-access-schema-expression.png)

To deny access to all segments, select [!UICONTROL Deny access to] a resource and then select [!UICONTROL No resource selected]. Using the dropdown select [!UICONTROL Segment]. A permissions box appears, using the dropdown select [!UICONTROL All].

Using the dropdown arrow select [!UICONTROL The following being false], then select [!UICONTROL No attribute selected]. 

Select the user as [!UICONTROL Core label] using the drop down, then using the drop down select [!UICONTROL Matches all], and then select the resource [!UICONTROL Core label] using the drop down. 

Select **[!UICONTROL Save]**.

![abac-create-policy-deny-access-segment](../images/abac-end-to-end-user-guide/abac-create-policy-deny-access-segment.png)

Select **[!UICONTROL Activate]** to activate the policy. An **[!UICONTROL Activate]** dialog appears, prompting you to confirm activation. Select **[!UICONTROL Confirm]** and then select **[!UICONTROL Close]**.

![abac-create-policy-activation](../images/abac-end-to-end-user-guide/abac-create-policy-activation.png)

## Next steps

You have completed the label creation which restricts users assigned to the agency role from viewing these labels and their values in the schema, dataset, and the profile view. These fields are also restricted from being used in the segment definition when building a new segment.

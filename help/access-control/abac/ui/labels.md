---
keywords: Experience Platform;home;popular topics;access control;attribute-based access control;ABAC
title: Attribute-based Access Control Manage Labels
description: This document provides information on managing labels through the Permissions interface in Adobe Experience Cloud
exl-id: c790f09c-fda6-48bf-95db-3f5053cd882e
---
# Manage labels

>[!NOTE]
>
>To create or view computed attributes with fields containing a given label, you must have access to that label.

Labels allow you to categorize datasets and fields according to usage and access policies that apply to that data. Labels can be applied at any time, providing flexibility in how you choose to govern data. Best practices encourage labeling data as soon as it is ingested into Platform, or as soon as data becomes available for use in Platform.

## Create a new label {#create-new-label}

>[!CONTEXTUALHELP]
>id="platform_abac_labelusage"
>title="Label usage"
>abstract="You can use custom labels to apply data governance and access control configurations to your data."

>[!NOTE]
>
>There is one single list of labels for a whole organization. To create a custom label, you will need **[!UICONTROL Manage Usage Labels]** permissions on the production sandbox. Label deletion is currently not supported.

To create a new label, select the **[!UICONTROL Labels]** tab in the sidebar and select **[!UICONTROL Create Label]**.

![flac-new-label](../../images/flac-ui/create-label.png)

The **[!UICONTROL Create a new label]** dialog appears, prompting you to enter a name, an optional friendly name and an optional description.

![new-label-info](../../images/flac-ui/new-label-info.png)

When finished, select **[!UICONTROL Confirm]**.

---
title: Draft dataflows in the UI
description: Learn how to save your dataflows as a draft and publish them at a later time, when using the sources workspace.
exl-id: ee00798e-152a-4618-acb3-db40f2f55fae
---
# Draft dataflows in the UI

Save your unfinished data ingestion workflow progress by setting your dataflow to a draft status. You can resume and complete your drafted dataflows at a later time.

This document provides steps on how to save your dataflows when using the sources workspace in the Adobe Experience Platform UI.

## Getting started

This document requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.

## Save a dataflow as a draft

You can pause your dataflow creation progress at any time after you select the data that you'll be bringing into Platform.

For example, if you want to save your progress during the dataflow detail step, select **[!UICONTROL Save as draft]**.

![The dataflow detail step of the sources workflow with save as draft selected.](../../images/tutorials/draft/save-as-draft.png)

Once you save your draft, you will be taken to your account's page, where you can see a list of your existing dataflows, including your drafts.

![A list of dataflows for a given account.](../../images/tutorials/draft/draft-dataflow.png)

>[!TIP]
>
>Drafted dataflows will not be enabled and will have their status set to `draft`.

To continue on your draft, select the ellipses (`...`) beside your dataflow's name and then select **[!UICONTROL Update dataflow]**.

>[!NOTE]
>
>If your draft includes scheduling information, then the dropdown window will also give you the option to **[!UICONTROL Edit schedule]**.

![A dropdown window with update dataflow selected.](../../images/tutorials/draft/update-dataflow.png)

### Access your drafts from the source catalog

You can also access your draft dataflows through the dataflows catalog. Select **[!UICONTROL Dataflows]** from the top header to access the dataflows catalog. From here, find your draft from the list of existing dataflows in your organization, select the ellipses (`...`) beside its name, and then select **[!UICONTROL Update dataflow]**.

![A list of dataflows for a given organization.](../../images/tutorials/draft/catalog-access.png)

## Publish your draft dataflow

You are returned to the [!UICONTROL Add data] step of the sources workflow, where you can re-confirm the format of your data and continue progressing on your dataflow.

Once you confirm the formatting, delimiter, and compression type of your data, select **[!UICONTROL Next]** to proceed.

![The add data step of sources workflow.](../../images/tutorials/draft/select-data.png)

Next, confirm your dataflow details. Use the dataflow details interface to update configurations surrounding your dataflow's name, description, partial ingestion, error diagnostic settings, and alert preferences.

Once you have finished your configurations, select **[!UICONTROL Next]** to proceed.

![The dataflow detail step of the sources workflow.](../../images/tutorials/draft/dataflow-detail.png)

The [!UICONTROL Mapping] step appears. During this step, you can reconfigure the mapping configurations of your dataflow. For a comprehensive guide on the data prep functions used for mapping, visit the [data prep UI guide](../../../data-prep/ui/mapping.md).

Once you have completed mapping reconfiguration, select **[!UICONTROL Next]** to proceed.

![The mapping step of the sources workflow.](../../images/tutorials/draft/mapping.png)

Use the [!UICONTROL Scheduling] step to establish an ingestion schedule for your dataflow. You can set your ingestion frequency to `once`, `minute`, `hour`, `day`, or `week`. When finished, select **[!UICONTROL Next]** to proceed.

![The scheduling step of the sources workflow.](../../images/tutorials/draft/scheduling.png)

Finally, review the details of your dataflow and then select **[!UICONTROL Finish]** to publish your draft.

![The review step of the sources workflow.](../../images/tutorials/draft/review.png)

After you save and publish a draft, the dataflow will be enabled, and you will no longer be able to reset it as a draft.

## Next steps

By following this tutorial, you have learned how to save your progress and set a dataflow as a draft. For more information on sources, visit the [sources overview](../../home.md).

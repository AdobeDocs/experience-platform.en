---
description: Learn how to update an existing sources dataflow in the Experience Platform UI.
title: Update a Source Connection Dataflow in the UI
exl-id: 0499a2a3-5a22-47b1-ac0e-76a432bd26c0
---
# Update dataflows in the UI

Read this tutorial for steps now to update an existing dataflow, including its schedule and mapping configurations, using the sources workspace in the Adobe Experience Platform user interface.

## Geing started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

## Update dataflows {#update-dataflows}

>[!CONTEXTUALHELP]
>id="platform_sources_dataflows_daysRemaining"
>title="Dataset expiration"
>abstract="This column indicates the number of days that the target dataset has left before it automatically expires.<br>A dataflow will fail if the target dataset is expired. To prevent a dataflow from failing, ensure that a target dataset is set to expire on the correct date. See the documentation to learn how to update expiration dates."

In the Experience Platform UI, select **[!UICONTROL Sources]** from the left navigation and then select **[!UICONTROL Dataflows]** from the top header.

![The sources catalog with the dataflows header tab selected.](../../images/tutorials/update-dataflows/catalog.png)

>[!TIP]
>
>You can sort and filter through your dataflows using filtering capabilities. Read the guide on [filtering sources objects in the UI](./filter.md) for more information.

The [!UICONTROL Dataflows] page displays a list of all existing dataflows in your organization. Locate the dataflow that you want to update and then select the ellipses (`...`) beside it. A dropdown menu appears, displaying a list of options that you can choose from, to make additional configurations to your existing dataflow.

To update your dataflow, select **[!UICONTROL Update dataflow]**.

### Update mapping

>[!NOTE]
>
>The edit mapping feature is currently not supported for the following sources: Adobe Analytics, Adobe Audience Manager, HTTP API, and [!DNL Marketo Engage].

The [!UICONTROL Mapping] page provides you with an interface where you can add and remove mapping sets associated with your dataflow.

The mapping interface displays your dataflow's existing mapping set and not a new recommended mapping set. Mapping updates are only applied to dataflow runs scheduled in the future. A dataflow that was scheduled for one-time ingestion cannot have its mapping sets updated.

From here, you can use the mapping interface to modify the mapping sets applied to your dataflow. For comprehensive steps on how to use the mapping interface, see the [data prep UI guide](../../../data-prep/ui/mapping.md) for more information.

![mapping](../../images/tutorials/update-dataflows/mapping.png)

### Update schedule

The [!UICONTROL Scheduling] step appears, allowing you to update your dataflow's ingestion schedule and automatically ingest the selected source data with the updated mappings.

>[!NOTE]
>
>You cannot reschedule a dataflow that was scheduled for one-time ingestion.

![new-schedule](../../images/tutorials/update-dataflows/new-schedule.png)

You can also update the ingestion schedule of your dataflow using the in-line update option provided in the dataflows page.

From the dataflows page, select the ellipses (`...`) beside the dataflow name and then select **[!UICONTROL Edit schedule]** from the dropdown menu that appears.

![edit-schedule](../../images/tutorials/update-dataflows/edit-schedule.png)

The **[!UICONTROL Edit schedule]** dialog box provides you with options to update your dataflow's ingestion frequency and interval rate. Once you set your updated frequency and interval values, select **[!UICONTROL Save]**.

![schedule-pop-up](../../images/tutorials/update-dataflows/schedule-pop-up.png)

### Disable dataflow


## Next steps

By following this tutorial, you have successfully used the [!UICONTROL Sources] workspace to update the ingestion schedule and mapping sets of your dataflow.

For steps on how to perform these operations programmatically using the [!DNL Flow Service] API, please refer to the tutorial on [updating dataflows using the Flow Service API](../../tutorials/api/update-dataflows.md).

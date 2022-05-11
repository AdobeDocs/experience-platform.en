---
title: Browse Data Hygiene Work Orders
description: Learn how to view and manage existing data hygiene work orders in the Adobe Experience Platform user interface.
---
# Browse data hygiene work orders

>[!CONTEXTUALHELP]
>id="platform_hygiene_workorders"
>title="Work order IDs"
>abstract="When a data hygiene request is sent to the system, a work order is created to execute the requested task. In other words, a work order represents a specific data hygiene process, which includes its current status and other related details. Each work order is automatically assigned its own unique ID upon creation. To learn more, see the data hygiene UI guide."

When a data hygiene request is sent to the system, a work order is created to execute the requested task. A work order represents a specific data hygiene process (such as deleting customer data), which includes its current status and other related details.

This guide covers how to view and manage existing work orders in the Adobe Experience Platform UI.

## List and filter existing work orders

When you first access the **[!UICONTROL Data Cleansing]** workspace in the UI, a list of existing work orders is shown along with their basic details.

The list only shows work orders for one category at a time Select **[!UICONTROL Consumer]** to view a list of customer deletion tasks, and **[!UICONTROL Dataset]** to view a list of time-to-live (TTL) schedules for datasets.

Select the funnel icon to view a list of filters for the displayed work orders. Depending on the tab you are viewing, different filters are available.

| Filter | Category | Description |
| --- | --- | --- |
| [!UICONTROL Status] | [!UICONTROL Consumer] & [!UICONTROL Dataset] | Filter based on the current status of the work order. |
| [!UICONTROL Date created] | [!UICONTROL Consumer] | Filter based on the when the customer delete request was made. |
| [!UICONTROL Date created] | [!UICONTROL Dataset] | Filter based on the when the customer delete request was made. |
| [!UICONTROL Deletion date] | [!UICONTROL Dataset] | Filter based on the deletion date that the TTL has scheduled. |
| [!UICONTROL Date updated] | [!UICONTROL Dataset] | Filter based on the when the dataset TTL was last updated. TTL creations and expiries are counted as updates. |

{style="table-layout:auto"}

## View the details of a work order

Select the ID of a listed work order to view its details.

Depending on the type of work order selected, different information and controls are provided. These are covered in the sections below.

### Customer delete details

>[!CONTEXTUALHELP]
>id="platform_hygiene_responsemessages"
>title="Customer delete response"
>abstract="When a customer deletion process receives a response from the system, these messages are displayed under the **[!UICONTROL Result]** section. If a problem occurs while a work order is processing, any relevant error messages will appear in this section to help you troubleshoot the issue. To learn more, see the data hygiene UI guide."

The details of a customer delete request are read-only, displaying its basic attributes such as its current status and the time elapsed since the request was made.

If the deletion process has received a response from the system, these messages are displayed under a **[!UICONTROL Result]** section. If a problem occurs while a work order is processing, any relevant error messages will appear in this section to help you troubleshoot the issue.

### Dataset TTL details

The details page for a dataset TTL provides information on its basic attributes, including the scheduled expiration date on the days remaining before the deletion occurs. In the right rail, you can use controls to edit or cancel the TTL.

## Next steps

This guide covered how to view and manage existing data hygiene work orders in the Platform UI. For information on creating your own work orders, refer to the following documentation:

* [Delete a customer](./delete-customer.md)
* [Schedule a dataset TTL](./dataset-ttl.md)

---
title: Data Hygiene Ui Guide
description: Learn how to manage data hygiene tasks in the Adobe Experience Platform user interface.
---
# Data hygiene UI guide

The **[!UICONTROL Data cleansing]** workspace in the Adobe Experience Platform UI allows you to create and monitor various data hygiene tasks, including deleting customer identities and scheduling time-to-live (TTL) protocols for datasets.

This guide covers how to manage data hygiene tasks in the Platform UI. For information on how to perform these tasks using API calls, see the [Data Hygiene API guide](./api/overview.md).

## Browse existing work orders

>[!CONTEXTUALHELP]
>id="platform_hygiene_workorders"
>title="Work order IDs"
>abstract="When a data hygiene request is sent to the system, a work order is created to execute the requested task. In other words, a work order represents a specific data hygiene process, which includes its current status and other related details. Each work order is automatically assigned its own unique ID upon creation. To learn more, see the data hygiene UI guide."

Select **[!UICONTROL Data cleansing]** in the left navigation to access the workspace, showing a list of previously created work orders and their details.

When a data hygiene request is sent to the system, a work order is created to execute the requested task. In other words, a work order represents a specific data hygiene process, which includes its current status and other related details.

Select **[!UICONTROL Consumer]** to view a list of customer deletion tasks, and **[!UICONTROL Dataset]** to view a list of time-to-live (TTL) schedules for datasets.

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

## Create a data hygiene request

To create a new request, select **[!UICONTROL Create request]** from the main page in the workspace.

From here, follow the steps in the subsections below depending on the type of request you want to make:

* [Delete a customer](#delete-customer)
* [Schedule a dataset TTL](#dataset-ttl)

### Delete a customer {#delete-customer}

On the creation dialog for a data hygiene request, select **[!UICONTROL Consumer]** under the **[!UICONTROL Action]** section. A **[!UICONTROL Consumer Details]** section appears below.

The first step is to determine whether you want to delete customer data from a single dataset or all datasets. If you choose **[!UICONTROL Select dataset]**, an additional control appears that allows you to select the desired dataset from the list.

If you want to delete customer data from all datasets, select **[!UICONTROL All datasets]**.

>[!NOTE]
>
>Selecting the **[!UICONTROL All datasets]** option can cause the delete operation to take longer and may not result in accurate record deletion.

#### Provide customer identities {#identities}

>[!CONTEXTUALHELP]
>id="platform_hygiene_primaryidentity"
>title="Primary identity"
>abstract="A primary identity is an attribute that ties a record to a customer's profile in Experience Platform. The primary identity field for a dataset is defined by the schema that the dataset is based on. In this column, you must provide the type (or namespace) for the customer's primary identity, such as "email" for email addresses and "ecid" for Experience Cloud IDs. To learn more, see the data hygiene UI guide."

>[!CONTEXTUALHELP]
>id="platform_hygiene_identityvalue"
>title="Customer delete response"
>abstract="In this column, you must provide the value for the customer's primary identity, which must correspond with the identity type provided in the left column. If the primary identity type is "email", the value should be the customer's email address. To learn more, see the data hygiene UI guide."

When deleting customer data, you must provide identity information for those customers so the system can determine which records must be deleted. For any dataset in Platform, records are deleted based on the **primary identity** field that is defined by the dataset's schema.

>[!NOTE]
>
>

```json
[
  {
    "namespaceCode": "email",
    "value": "jdoe@example.com"
  },
  {
    "namespaceCode": "email",
    "value": "<string>"
  }
]
```

### Schedule a dataset TTL {#dataset-ttl}

## Next steps

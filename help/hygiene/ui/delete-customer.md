---
title: Delete Customer Records
description: Learn how to delete customer records in the Adobe Experience Platform UI.
---
# Delete customer records

The **[!UICONTROL Data cleansing]** workspace in the Adobe Experience Platform UI allows you to delete customer records that are participating in [Identity Service](../../identity-service/home.md) and Real-time Customer Profile

## Prerequisites

Deleting customer records requires a working understanding of how identity fields function in Experience Platform. Specifically, you must know the primary identity values of the customers whose records you want to delete, depending on the dataset (or datasets) you are deleting them from.

Refer to the following documentation for more information on identities in Platform:

* [Adobe Experience Platform Identity Service](../../../identity-service/home.md): Bridges identities across devices and systems, linking datasets together based on the identity fields defined by the XDM schemas they conform to.
  * [Identity namespaces](../../../identity-service/namespaces.md): Identity namespaces define the different types of identity information that can relate to a single person, and are a required component for each identity field.
* [Real-time Customer Profile](../../../profile/home.md): Leverages customer identity graphs to provide unified consumer profiles based on aggregated data from multiple sources, updated in near-real-time.
* [XDM System](../../xdm/home.md): Provides standard definitions and structures for Platform data through the use of schemas. All Platform datasets conform to a specific XDM schema, and the schema defines which fields are identities.
  * [Identity fields](../../xdm/ui/fields/identity.md): Learn how an identity field is defined in an XDM schema.

## Create a new request

To create a new request, select **[!UICONTROL Create request]** from the main page in the workspace.

## Select datasets

On the creation dialog for a data hygiene request, select **[!UICONTROL Consumer]** under the **[!UICONTROL Action]** section. A **[!UICONTROL Consumer Details]** section appears below.

The first step is to determine whether you want to delete customer data from a single dataset or all datasets. If you choose **[!UICONTROL Select dataset]**, an additional control appears that allows you to select the desired dataset from the list.

If you want to delete customer data from all datasets, select **[!UICONTROL All datasets]**.

>[!NOTE]
>
>Selecting the **[!UICONTROL All datasets]** option can cause the delete operation to take longer and may not result in accurate record deletion.

## Provide customer identities {#identities}

>[!CONTEXTUALHELP]
>id="platform_hygiene_primaryidentity"
>title="Primary identity"
>abstract="A primary identity is an attribute that ties a record to a customer's profile in Experience Platform. The primary identity field for a dataset is defined by the schema that the dataset is based on. In this column, you must provide the type (or namespace) for the customer's primary identity, such as "email" for email addresses and "ecid" for Experience Cloud IDs. To learn more, see the data hygiene UI guide."

>[!CONTEXTUALHELP]
>id="platform_hygiene_identityvalue"
>title="Customer delete response"
>abstract="In this column, you must provide the value for the customer's primary identity, which must correspond with the identity type provided in the left column. If the primary identity type is "email", the value should be the customer's email address. To learn more, see the data hygiene UI guide."

When deleting customer data, you must provide identity information for those customers so the system can determine which records must be deleted. For any dataset in Platform, records are deleted based on the **primary identity** field that is defined by the dataset's schema.

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

---
title: Create a SAP Hybris source connection in the UI
description: Learn how to create a SAP Hybris source connection using the Adobe Experience Platform UI.
exl-id: 45840d7e-4c19-4720-8629-be446347862d
---
# (Beta) Create a [!DNL SAP Hybris] source connection in the UI

>[!NOTE]
>
>The [!DNL SAP Hybris] source is in beta. See the [sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

The following tutorial walks you through the steps to create a [!DNL SAP Hybris] source connection to bring [[!DNL SAP] Subscription Billing](https://www.sap.com/products/financial-management/subscription-billing.html) contacts and customer data using the Adobe Experience Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL SAP Hybris] account, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/crm.md).

### Gather required credentials

In order to connect [!DNL SAP Hybris] to Platform, you must provide values for the following connection properties:

| Credential | Description |
| --- | --- | --- |
| `Client Id` | The value of `clientid` from the service key. |
| `Client Secret` | The value of `clientsecret` from the service key. |
| `tokenEndpoint` | The value of `url` from the service key, it will be similar to `https://subscriptionbilling.authentication.eu10.hana.ondemand.com`. |
| `region` | Your data center location. The region is present in the `url` and has a value similar to `eu10` or `us10`. For example if the `url` is `https://eu10.revenue.cloud.sap/api` you will need `eu10`. |
	
Refer to the [!DNL SAP Hybris] [documentation](https://help.sap.com/docs/CLOUD_TO_CASH_OD/987aec876092428f88162e438acf80d6/c5fcaf96daff4c7a8520188e4d8a1843.html) if you need any guidance.

### Create a Platform schema

Before creating a [!DNL SAP Hybris] source connection, you must also ensure that you first create a Platform schema to use for your source. See the tutorial on [creating a Platform schema](../../../../../xdm/schema/composition.md) for comprehensive steps on how to create a schema.

Expand the following section to view an example schema.

+++ View Service Key

```
{
  "_extconndev": {
    "addresses": [
      {
        "addressUUID": "Sample value",
        "city": "Sample value",
        "country": "Sample value",
        "email": "Sample value",
        "houseNumber": "Sample value",
        "isDefault": false,
        "phone": "Sample value",
        "postalCode": "Sample value",
        "state": "Sample value",
        "street": "Sample value"
      }
    ],
    "changedAt": "Sample value",
    "changedBy": "Sample value",
    "contactNumber": "Sample value",
    "corporateInfo": {
      "company": "Sample value"
    },
    "createAt": "Sample value",
    "createdBy": "Sample value",
    "customReferences": [
      {
        "id": "Sample value",
        "typeCode": "Sample value"
      }
    ],
    "customerNumber": "Sample value",
    "customerType": "Sample value",
    "defaultAddress": {
      "addressUUID": "Sample value",
      "city": "Sample value",
      "country": "Sample value",
      "email": "Sample value",
      "houseNumber": "Sample value",
      "isDefault": false,
      "phone": "Sample value",
      "postalCode": "Sample value",
      "state": "Sample value",
      "street": "Sample value"
    },
    "externalObjectReferences": [
      {
        "externalId": "Sample value",
        "externalIdTypeCode": "Sample value",
        "externalSystemId": "Sample value"
      }
    ],
    "markets": [
      {
        "active": false,
        "country": "Sample value",
        "currency": "Sample value",
        "marketId": "Sample value",
        "priceinfo": {
          "incoterms": "Sample value",
          "incotermsLocation": "Sample value",
          "priceGroup": "Sample value",
          "priceListType": "Sample value"
        },
        "salesArea": {
          "distributionChannel": "Sample value",
          "division": "Sample value",
          "salesOrganization": "Sample value"
        }
      }
    ],
    "personalInfo": {
      "firstName": "Sample value",
      "lastName": "Sample value"
    }
  },
  "_id": "/uri-reference",
  "_repo": {
    "createDate": "2004-10-23T12:00:00-06:00",
    "modifyDate": "2004-10-23T12:00:00-06:00"
  },
  "createdByBatchID": "/uri-reference",
  "modifiedByBatchID": "/uri-reference",
  "personID": "Sample value",
  "repositoryCreatedBy": "Sample value",
  "repositoryLastModifiedBy": "Sample value"
}
```

+++

## Connect your [!DNL SAP Hybris] account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *CRM* category, select **[!UICONTROL SAP Hybris]**, and then select **[!UICONTROL Add data]**.

![Platform UI screenshot for catalog with SAP Hybris card](../../../../images/tutorials/create/crm/sap-hybris-subscription-billing-customers-and-contacts/catalog-card.png)

The **[!UICONTROL Connect SAP Hybris account]** page appears. On this page, you can either use new credentials or existing credentials.

### Existing account

To use an existing account, select the [!DNL SAP Hybris] account you want to create a new dataflow with, then select **[!UICONTROL Next]** to proceed.

![Platform UI screenshot to connect SAP Hybris account with an existing account](../../../../images/tutorials/create/crm/sap-hybris-subscription-billing-customers-and-contacts/existing.png)

### New account

If you are creating a new account, select **[!UICONTROL New account]**, and then provide a name, an optional description, and your credentials. When finished, select **[!UICONTROL Connect to source]** and then allow some time for the new connection to establish.

![Platform UI screenshot to connect SAP Hybris account with a new account](../../../../images/tutorials/create/crm/sap-hybris-subscription-billing-customers-and-contacts/new.png)

### Select data

Finally, you must select the object type that you want to ingest to Platform.

| Object type | Description |
| --- | --- |
| `Customers` | The entities who have subscriptions. |
| `Contacts` | The contact details for customers. |

>[!BEGINTABS]

>[!TAB Customers]

![Platform UI screenshot for SAP Hybris showing configuration with Customers option selected](../../../../images/tutorials/create/crm/sap-hybris-subscription-billing-customers-and-contacts/configuration-customers.png)

>[!TAB Contacts]

![Platform UI screenshot for SAP Hybris showing configuration with Contacts option selected](../../../../images/tutorials/create/crm/sap-hybris-subscription-billing-customers-and-contacts/configuration-contacts.png)

>[!ENDTABS]

## Next steps

By following this tutorial, you have established a connection to your [!DNL SAP Hybris] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](../../dataflow/crm.md).

## Additional resources

The sections below provide additional resources that you can refer to when using the [!DNL SAP Hybris] source.

### Mapping {#mapping}

The [!UICONTROL Mapping] step appears, providing you with an interface to map the source fields from your source schema to their appropriate target XDM fields in the target schema.

Platform provides intelligent recommendations for auto-mapped fields based on the target schema or dataset that you selected. You can manually adjust mapping rules to suit your use cases. Based on your needs, you can choose to map fields directly, or use data prep functions to transform source data to derive computed or calculated values. For comprehensive steps on using the mapper interface and calculated fields, see the [Data Prep UI guide](../../../../../data-prep/ui/mapping.md).

Based on the `object_type` selection *(either `customers` or `contacts`)* and your schema the mappings would be as below. Setup the desired mappings before proceeding to the next stage.

>[!NOTE]
>
>The [!DNL SAP Hybris] source supports [[!DNL Iterative array operation]](../../../../../mapping-set.md?lang=en#iterative-array-operation), map the array elements accordingly.

>[!BEGINTABS]

>[!TAB Customers]

[!DNL SAP Hybris] invokes the [Customers](https://api.sap.com/api/BusinessPartner_APIs/path/GET_customers) *(refer to this page for the comprehensive list of attributes)* and [Customer-Contact Relationships](https://api.sap.com/api/BusinessPartner_APIs/path/GET_relationships-customer-contacts) APIs to retrieve the data.

After you select the `object_type` as `customers` in [!DNL SAP Hybris] the mappings would be as below:

| Target Field | Description |
| --- | --- |
| `customerNumber` | The customer's number. |
| `corporateInfo` | The customer's number. |
| `customerType` | The customer type. |
| `createdAt` | A timestamp indicating when the customer was created. |
| `changedAt` | A timestamp indicating when the customer was last updated. |
| `markets[*].country` | The customers markets, retrieved as an array object. |
| `addresses[*].email` | Emails associated with the customer's multiple addresses, retrieved as an array object. |
| `addresses[*].city` | Cities associated with the customer's multiple addresses, retrieved as an array object. |
| `addresses[*].addressUUID` | ID's associated with the customer's multiple addresses, retrieved as an array object. |
| `externalObjectReferences[*].externalSystemId` | Additional data, retrieved as an array object. |
| `externalObjectReferences[*].externalId` | Additional data, retrieved as an array object. |
| `customReferences[*].id` | Additional data, retrieved as an array object. |
| `customReferences[*].typeCode` | Additional data, retrieved as an array object. |

![The mapping step of the sources workflow.](../../../../images/tutorials/create/crm/sap-hybris-subscription-billing-customers-and-contacts//mapping-customers.png)

>[!TAB Contacts]

[!DNL SAP Hybris] invokes the [Contacts](https://api.sap.com/api/BusinessPartner_APIs/path/GET_contacts) API *(refer to this page for the comprehensive list of attributes)* to retrieve the data.

After you select the `object_type` as `contacts` in [!DNL SAP Hybris] the mappings would be as below:

| Target Field | Description |
| --- | --- |
| `contactNumber` | The contact's number. |
| `createdAt` | A timestamp indicating when the contact was created. |
| `changedAt` | A timestamp indicating when the contact was last updated. |
| `personalInfo.lastName` | The contact's Last Name. |
| `personalInfo.firstName` | The contact's First Name. |
| `externalObjectReferences[*].externalSystemId` | Additional data, retrieved as an array object. |
| `externalObjectReferences[*].externalId` | Additional data, retrieved as an array object. |
| `externalObjectReferences[*].externalIdTypeCode` | Additional data, retrieved as an array object. |

![The mapping step of the sources workflow.](../../../../images/tutorials/create/crm/sap-hybris-subscription-billing-customers-and-contacts/mapping-contacts.png)

>[!ENDTABS]

Once your source data is successfully mapped, select **[!UICONTROL Next]**.

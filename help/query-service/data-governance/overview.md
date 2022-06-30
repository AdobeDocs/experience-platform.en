---
title: Data Governance in Query Service
description: This overview covers the major elements of data governance in Experience Platform Query Service.
---
# Data governance in Query Service

Adobe Experience Platform brings data from multiple enterprise systems together and allows you to clean, shape, manipulate and enrich the data through Query Service according to your needs. This allows marketers to identify, understand, and engage customers in a better way. Ensuring adequate data governance is a critical aspect of handling personal information as certain data may be subject to usage restrictions based on organizational policies and legal regulations. It is critical to ensure that your ingested data and its related operations are compliant with the defined data usage policies.

Data governance within Query Service allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data usage. This plays a key role when ensuring the usage policies have been applied as per the business-defined regulations

Organizations that routinely conduct data processing are recommended to outline, practice, and enforce these guidelines to create a privacy-conscious environment for all users.  

The following five categories are instrumental in adhering to data compliance regulations when using Query Service:

1. Security
1. Audits
1. Data usage
1. [!DNL Privacy Service]
1. Data hygiene

This document examines each of the different areas of governance and demonstrates how to facilitate data compliance when using Query Service. See the [governance, privacy, and security overview](../../landing/governance-privacy-security/overview.md) for broader information on how Adobe Experience Platform Data Governance allows you to manage customer data and ensure compliance.

## Security

Data security is the process of protecting data from unauthorized access and ensuring secure access throughout its lifecycle. Secure access is maintained in Experience Platform through the application of roles and permissions by capabilities such as role-based access control and attribute-based access control. Credentials, SSL, data encryption, and key management are also used to ensure data protection across Platform. 

Security in regards to Query Service is divided into the following categories:

* [Access control](#access-control): Access is controlled through roles and permissions including dataset and column-level permissions.
* Securing data through [connectivity](#connectivity): Access is controlled through Platform and external clients by achieving a limited connection with expiring credentials, or non-expiring credentials.
* Securing data through [encryption and system-level keys](#encryption-and-customer-managed-keys): Access is controlled through encryption when the data is at rest.
<!-- * Securing data through [encryption and customer-managed keys (CMK)](#encryption-and-customer-managed-keys): Access controlled through encryption when data is at rest. -->

### Access control {#access-control}

Access control in Adobe Experience Platform lets you manage access to Query Service through roles and permissions by using [Adobe Admin Console](https://adminconsole.adobe.com/). Similarly, attribute-based access control is managed through label management on schemas and data fields.

This section outlines the required access control permissions that a user must have in order to fully utilize Query Service features. See the [Manage permissions for a product profile](../../access-control/ui/permissions.md) and [Manage users for a product profile](../../access-control/ui/users.md) documents for detailed instructions on assigning access to a product profile.

#### Relevant permissions

The relevant access control permissions are defined in the tables below according to their level of scope.

**Query execution permissions**

To run queries within Query Service, a user must be assigned a role with the following permission. 

| Permission | Description |
|---|---|
| [!UICONTROL `Manage Queries`] | This permission allows users to execute data exploration and batch queries, which can either read an existing dataset or write data on datasets. This includes both `INSERT INTO AS SELECT` (`CTAS`) and `INSERT INTO AS SELECT` (`ITAS`) queries. |

**Dataset level access control**

You can define access control for datasets and schemas with the following permissions.

| Permission | Description |
|---|---|
| [!UICONTROL `Manage Datasets`] | This permission provides read-only access for schemas and allows access to read, create, edit, and delete datasets for use with Query Service.  |
| [!UICONTROL `View Datasets`] | This permission allows read-only access for datasets and schemas for use with Query Service. | 

#### Column/field level access control

The attribute-based access control feature enables Query Service users to restrict access to critical user data. Access can be granted or restricted based on the permissions assigned to a role. User access to individual columns is controlled by the relevant data usage labels and the permission sets applied to the roles assigned to users. 

Tagging schema field groups and classes with data usage labels impacts all the schemas with the same field groups and classes by applying the same data usage restrictions. 

See the [attribute-based access control overview](../../access-control/abac/overview.md) for comprehensive information on this feature.
 
This feature enables you to grant access rights on confidential columns to the user groups of your choice. Access control on a column can restrict both the read and write capabilities for a particular type of user.
Column-level control can be applied at the schema level for both standard and ad hoc schemas. Apply permission-based labels to XDM schemas to restrict access to one or more columns. Permission labeling is consistently applied even for datasets created via Query Service using either a predefined schema or an ad hoc schema generated as part of CTAS operation

Once the appropriate level of access has been applied using labels and roles, the following system behavior occurs when a user tries to access the non-accessible data: 

1. If a user has been denied access to one of the columns within a schema, the user is also denied permission to read or write on the restricted column. This applies to the following common scenarios:
  
    * **Case 1**: When a user tries to execute a query affecting only a restricted column, the system throws an error that the column doesn't exist.
    * **Case 2**: When a user tries to execute a query with multiple columns including a restricted column, the system returns output for all non-restricted columns only.

1. If a user tries to access a calculated field, the user is required to have access to all the fields used in the composition or the system denies access to the calculated field as well. 

#### Working with views

Adobe Experience Platform Query Service provides the ability to use standard ANSI SQL for [`CREATE VIEW`](../sql/syntax.md#create-view) statements. For highly sensitive data workflows, you must enforce appropriate controls when creating views.

The `CREATE VIEW` keyword defines a view of a query but the view is not physically materialized. Instead, the query is run every time the view is referenced in a query. When a user creates a view from a dataset, the role- and attribute-based access control rules for the parent dataset are **not** hierarchically applied. As a result, you must explicitly set permissions on each of the columns when a view is created.

### Connectivity {#connectivity}

Adobe Experience Platform Query Service is accessible through the Platform UI or by forming a connection with external compatible clients. Access to all the available fronts is controlled by the set of credentials.

#### Connectivity through external clients

Access to Query Service using a third-party client requires credentials for authorization. These credentials are mandatory to access Query Service with any of the compatible external clients.

Access to Query Service is achieved by building a connection with external clients through a set of credentials. These credentials are mandatory to access Query Service with any of the compatible external clients.

Users can connect to these external clients by using either [expiring credentials](#expiring-credentials) or [non-expiring credentials](#non-expiring-credentials).

#### Limited connection time via expiring credentials [#expiring-credentials]

[Expiring credentials](../ui/credentials.md) allow users to form a temporary connection with an external client. This set of credentials is only valid for 24 hours. The expiry of these types of credentials can be seen along with the credential tab in the Query Service dashboard.

![The credentials tab in Query Service workspace with expiring credentials highlighted.](../images/data-governance/overview/expiring-credentials.png)

#### Non-expiring credentials {#non-expiring-credentials}

[Non-expiring credentials](../ui/credentials.md#non-expiring-credentials) allow you to form a permanent connection with an external client and makes it easier to connect to Query Service without the need for a manual password. 

To enable the option of generating non-expiring credentials, you must follow the outlined [pre-requisite workflow](../ui/credentials.md#prerequisites). As part of this process, your organization administrator is required to configure permissions for the product profile, giving the administrator control over which accounts have access to use non-expiring credentials.

Technical user accounts permitted with non-expiring credentials can be assigned roles to ensure appropriate data governance by defining the scope of their read and write access based on their responsibilities and needs. See the documentation for more information on [managing roles in a role-based access control environment](../../access-control/abac/ui/permissions.md).

Once the pre-requisite workflow has been completed, authorized users can now [generate the required connection credentials](../ui/credentials.md#generate-credentials).

#### SSL data encryption

For increased security, Adobe Experience Platform Query Service provides native support for SSL connections to encrypt client/server communications. Platform supports various SSL options to suit your data security needs and balance the processing overhead of encryption and key exchange.

See the guide on available [SSL options for third-party client connections to Query Service](../clients/ssl-modes.md) and how to connect using the `verify-full` SSL parameter value.

### Encryption {#encryption-and-customer-managed-keys}

<!-- Commented out lines to be included when customer-managed keys is released. Link out to the new document. -->

<!-- ### Encryption and customer-managed keys (CMK) {#encryption-and-customer-managed-keys} -->

Encryption is the use of an algorithmic process to transform data into encoded and unreadable text to ensure the information is protected and inaccessible without a decryption key. 

Query Service data compliance ensures that data is always encrypted. Data-in-transit is always HTTPS compliant and data-at-rest in the data lake is encrypted with system-level keys. See the documentation on [how data is encrypted in Adobe Experience Platform](https://experienceleague.adobe.com/docs/experience-platform/landing/governance-privacy-security/encryption.html) for more information. For details on how data at rest is encrypted in Azure Data Lake Storage, see the [official Azure documentation](https://docs.microsoft.com/en-us/azure/data-lake-store/data-lake-store-encryption).

<!-- Data-in-transit is always HTTPS compliant and similarly when the data is at rest in the data lake, the encryption is done with Customer Management Key (CMK), which is already supported by Data Lake Management. The currently supported version is TLS1.2. -->

## Logs {#logs}

Adobe Experience Platform Query Service records user activity and categorizes that activity in different log types. Logs provide information on **who** performed **what** action, and **when**. Each action recorded in a log contains metadata that indicates the action type, date and time, the email ID of the user who performed the action, and additional attributes relevant to the action type.

Any of the log categories can be requested as desired by a Platform user. This section provides details on the type of information captured and where this information can be accessed.

### Query logs {#query-logs}

Query logs allow you to monitor and review the status of all queries that have been executed through Query Service. This brings transparency to Query Service activities, allowing you to monitor the metadata for **all** the queries that have been executed across Query Service. It includes **all** types of queries whether is an exploratory, batch, or scheduled query. 

Query logs can be accessed either through the Platform UI or API. Query logs are located in the [!UICONTROL Logs] tab of the [!UICONTROL Queries] workspace.

![The Queries log tab with the details panel highlighted.](../images/data-governance/overview/queries-log.png)

### Audit logs {#audit-logs}

By providing an accurate record of user actions, an audit trail can help with troubleshooting issues and help your business effectively comply with corporate data stewardship policies and regulatory requirements. Audit logs provide a record of all Platform activities. To increase the transparency and visibility of actions performed in Query Service by users, you can audit user actions relating to query execution, templates, and scheduled queries. 

The following table indicates the query categories captured by audit logs and the action types they record: 

|  Category |  Action Type |
|---|---|
|  Query |  Execute |
| Query Template | Create, Delete, Update  |
| Scheduled Query | Create, Delete, Update |

The [!UICONTROL Audits] workspace contains **extended server logs**. These provide more details than those held within the query logs. Below is a list of three extended logs that are only found within the query categories for audit logs:

1. **Meta query logs**: When a query is executed, various associated backend sub-queries (such as parsing) are executed. These types of queries are known as "Metadata" queries. Their relevant details can be found in audit logs.
1. **Session logs**: The system creates a session entry log for a user when they log into Query Service regardless of whether they execute a query.
1. **Third-part client connection logs**: A connectivity audit log is generated when a user successfully connects Query Service to a third-party client.

See the [Audit logs overview](../../landing/governance-privacy-security/audit-logs/overview.md) for more information on how audit logs can help your organization approach data compliance. 

## Data usage {#data-usage}

The Data Governance framework in Platform provides a uniform way to responsibly use data across all Adobe solutions, services, and platforms. It coordinates the systemic approach to capture, communicate, and use metadata across the entire Adobe Experience Cloud. This in turn, helps data controllers label data according to the marketing actions needed, and the restrictions placed on that data from these intended marketing actions. See the [data usage labels overview](../../data-governance/labels/overview.md) for more information on how Adobe Experience Platform Data Governance allows you to apply data usage labels to datasets and fields.

There are two types of derived datasets formed by Query Service, 
<!-- they are tied to shcemas and can be labelled. intorduce the two types.  -->
<!-- Point out there is NO differnce in labelling but BOTH standard and Ad hoc schemas need to be labelled and CAN be labelled. Ad hoc need to be made visable before labelling in the UI
Q) Can the API label ad hc schemas?  CLARIFIED = through the UI NOT through the API -->

The following techniques enforce labeling on datasets created by Query Service for the purpose of data compliance:

>[!NOTE]
>
>Datasets that are created or appended to using Query Service are referred to as "derived datasets".

1. **Derived datasets with standard schemas**: When a query results in a derived dataset that uses a standard schema, data labeling is conducted at the schema level and applies to all datasets that conform to that schema.
1. **Derived datasets using an ad hoc schema**: Ad hoc schemas are created by an individual user for a specific purpose. The XDM schema fields are namespaced for that particular dataset and not intended for use across different datasets. As a result, ad hoc schemas are available through the Experience Platform UI but in a read-only mode and are not visible by default. They must be enabled for viewing using the filter function in the schema workspace. Ad hoc schemas in the Platform UI can only be labeled at the schema level, this impacts all child datasets. (if this data is activated) Downstream this data will only be activated in destinations where it has appropriate labels.



<!-- This can be linked to the guide in https://experienceleague.adobe.com/docs/experience-platform/query/data-governance/ad-hoc-schema-labels.html#discover-ad-hoc-schemas-in-the-schema-inventory-of-the-platform-ui after it is made public. -->

See the guide on [adding data labels to XDM schemas](https://experienceleague.adobe.com/docs/experience-platform/xdm/tutorials/labels.html?lang=en) for more information.

## [!DNL Privacy Service] {#privacy-service}

[!DNL Privacy Service] helps you manage customer requests to access and delete their data in accordance with legal privacy regulations. It does this by searching the data for pre-existing identifiers, and either accesses or deletes that data depending on the privacy job requested. Data must be properly labeled in order for the service to determine which fields to access or delete during privacy jobs. Query Service can enrich the data it uses with a unique identifier for the purpose of satisfying privacy jobs. 

<!-- Data that is subject to privacy requests must have customer identity information in order to tie the disparate pieces of data with the individual person to whom the privacy request applies to. -->

<!-- link ot privacy request requirements for primary identities
https://experienceleague.adobe.com/docs/experience-platform/privacy/identity-data.html
 -->

See the [[!DNL Privacy Service] overview](../../privacy-service/home.md) for more information on this service.

Query Service features for data governance simplify and streamline the process of data categorization and adherence to data usage regulations. Once the data has been identified, Query Service enables you to allocate the primary identity on all output datasets.  

<!-- 
Then sepearte into 
Q) why are these two key categorizations necessary?

There are two key categorizations to facilitate privacy jobs when using Query Service: 

there are two places where privacy requests can be sent: the data lake of the profile store. If records are delted from the data lake they are deleted form the Profile store. CHECK/CONFIRM

Seperate these into :
One MUST add identities. putting identities into the dataset
how they are handled 

1. **Derived Datasets with Standard Schema**: When a query results in a derived dataset that uses a standard schema, privacy measures are handled at the data lake management level. (this describes WHAT happens) https://experienceleague.adobe.com/docs/experience-platform/xdm/ui/fields/identity.html#define-an-identity-field
1. **Derived Datasets by using Ad-hoc Schema**: When a query creates an ad hoc schema, you can mark the primary identities by using the SQL command ‘ALTER TABLE’.  Instructions on how to use the command to [mark the desired dataset column as a primary identity](../sql/syntax.md#alter-table) can be found in the SQL syntax guide. (describes what you need to DO for the privacy request)-->
 
<!-- COMMENTING OUT DATA HYGEINE SECTION TEMPORARILY UNTIL IT IS GA. ity is currently in Beta only

## Data hygiene 

"Data hygiene" refers to the process of repairing or removing data that may be outdated, inaccurate, incorrectly formatted, duplicated, or incomplete. It is important to ensure adequate data hygiene along every step of the data's journey and even from the initial data storage location. In Adobe Experience Platform Query Service, this is either the data lake or the data warehouse.

It is necessary to assign an identity to a derived dataset to allow their management by the [!DNL Data Hygiene] service. Conversely, when you create aggregated data on an accelerated data store, the aggregated data cannot be used to derive the original data. As a result of this data aggregation, the need to raise data hygiene requests is eliminated. == THIS APPEARS TO BE A PRIVCY USE CASE NAD NOT DATA HYGEINE ++  this si confusing.

An exception to this scenario is the case of deletion. If a data hygiene deletion is requested on a dataset and before the deletion is completed, another derived dataset query is executed, then the derived dataset will capture information from the original dataset. In this case, you must be mindful that if a request to delete a dataset has been sent, you must not execute any new derived dataset queries using the same dataset source. 

See the [data hygiene overview](../../hygiene/home.md) for more information on data hygiene in Adobe Experience Platform. -->

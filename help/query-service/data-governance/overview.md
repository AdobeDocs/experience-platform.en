---
title: Data Governance in Query Service Overview
description: This overview covers the major elements of data governance in Experience Platform Query Service.
---
# Data governance in Query Service overview

Adobe Experience Platform brings data from multiple enterprise systems together and allows you to clean, shape, manipulate and enrich the data through Query Service according to your needs. This allows marketers to identify, understand, and engage customers in a better way. Ensuring adequate data governance is a critical aspect of handling personal information as certain data may be subject to usage restrictions based on organizational policies and legal regulations. It is critical to ensure that your ingested data and its related operations are compliant with the defined data usage policies.

Data Governance within Query Service allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data usage. This plays a key role when ensuring the usage policies have been applied as per the business-defined regulations

Organizations that routinely conduct data processing are recommended to outline, practice, and enforce these guidelines to create a privacy-conscious environment for all users.  

The following five categories are instrumental in adhering to data compliance regulations when using Query Service:

1. Security
1. Audits
1. Data Usage
1. Privacy Service
1. Data Hygiene

This document examines each of the different areas of governance and demonstrates how to facilitate data compliance when using Query Service. See the [Data Governance overview](../../data-governance/home.md) for broader information on how Adobe Experience Platform Data Governance allows you to manage customer data and ensure compliance.

>[!NOTE]
>
>Datasets that are created or appended to using Query Service are referred to as "derived datasets".

## Security

Data security is the process of protecting data from unauthorized access and ensuring secure access throughout its lifecycle. Secure access is maintained in Experience Platform through the application of roles and permissions by capabilities such as role-based access control and attribute-based access control. Credentials, SSL, data encryption, and key management are used to ensure data protection across the platform. 

Security in regards to data governance is divided into the following categories:

* [Access controls enforcement by Query Service](#access-control-enforcement): Access is controlled through roles and permissions including dataset and column-level permissions.
* Securing data through [connectivity](#connectivity): Access controlled through the platform, external clients, limited connection with expiring credentials, and non-expiring credentials.
* Securing data through [encryption and customer-managed keys (CMK)](#encryption-and-customer-managed-keys): Access controlled through encryption when data is at rest.

### Access control enforcement by Query Service {#access-control-enforcement}

Access control in Adobe Experience Platform allows you to manage access to Query Service through roles and permissions. Similarly, the attribute-based access control is managed through label management on schemas and data fields.

This section serves as a guide for the required access to fully utilize the Query Service features.

#### Query execution controls

To run queries within Query Service, a user must be assigned a role with the "Manage Queries" permission. This permission allows users to execute data exploration and batch queries, which can either read an existing dataset or write data on datasets. This relates to `INSERT INTO AS SELECT` (`CTAS`) and `INSERT INTO AS SELECT` (`ITAS`) queries.

See the [Manage permissions for a product profile](../../access-control/ui/permissions.md) and [Manage users for a product profile](../../access-control/ui/users.md) documents for detailed instructions on requesting access to the product profile "[!UICONTROL Query Manage]" permission.

#### Dataset level access control

Access control in Adobe Experience Platform allows you to manage roles and permissions for various Platform capabilities by using [Adobe Admin Console](https://adminconsole.adobe.com/). 

This section serves as a guide for the required resource-based access in order to access datasets while querying data through Query Service.

Through the permission interface, you can define resource-based access control on datasets and schemas. The available permissions are as follows:

* **[!UICONTROL Manage Datasets]** permission provides read-only access for schemas and allows access to read, create, edit, and delete datasets for use with Query Service.
* **[!UICONTROL View Datasets]** permission allows read-only access for datasets and schemas for use with Query Service.

#### Column Level Access Control

The attribute-based access control feature enables Query Service users to restrict access to the user-critical data. Access is granted based on the role or level of access assigned to each Platform user, or based on the field-level label applied to each individual column.

This feature enables you to allow access to a set of users to whom you would like to grant access rights on confidential columns. The access control on any column will restrict both the read and writing capabilities of a user on that restricted column.  

Column-level control can be applied at the schema level based on the type of schemas:

1. **Standard schemas**: To restrict access to one or more columns use the permission-based labels and apply them to the XDM schema (including ad hoc XDM schema) representing datasets.
1. **Ad hoc schemas**: Permission labeling is consistently applied even for datasets created via Query Service either using a predefined schema or schema generated as part of CTAS operation (ad hoc schema).

Once the appropriate level of access has been applied using labels, the following **system behavior** occurs when a user tries to access the non-accessible data: 

1. When a user has been declined access to one of the columns within a schema, the user will not be able to read or write on the restricted column.
  
* **Case 1**: When a user tries to execute a query affecting only a restricted column, the system will throw an error that the column doesn't exist.
  
* **Case 2**: When a user tries to execute a query with multiple columns including a restricted column, the system will return output for all non-restricted columns only.

1. When a user tries to access a calculated field, the user is required to have access to all the fields used in the composition or the system will deny access to the calculated field as well. 

#### Working with views

Adobe Experience Platform Query Service provides the ability to use standard ANSI SQL for [`CREATE VIEW`](../sql/syntax.md#create-view) statements.

The `CREATE VIEW` keyword defines a view of a query but the view is not physically materialized. Instead, the query is run every time the view is referenced in a query. When a user creates a view from a dataset, the data protection rules of role-based access control and/or attribute-based access control of the parent dataset are **not** hierarchically applied. As a result, you are required to explicitly set permissions on each of the columns when a view is created. This process is similar to the treatment of ad hoc schemas for data governance.

For highly sensitive data workflows, you must enforce appropriate controls when creating views.

### Connectivity {#connectivity}

Adobe Experience Platform Query Service is accessible through the Platform UI or by forming a connection with external compatible clients. The accessibility to all the available fronts is controlled by the set of credentials.

#### Connectivity through Platform

This is controlled by the user-specific credentials for the Adobe Experience Platform.

#### Connectivity through external clients

Access to Query Service is achieved by building a connection with external clients through a set of credentials. These credentials are mandatory to access Query Service with any of the compatible external clients.

Users can connect to these external clients by using either [expiring credentials](../ui/credentials.md) or [non-expiring credentials](../ui/credentials.md#non-expiring-credentials).

#### Limited connection time via expiring credentials

[Expiring credentials](../ui/credentials.md) allow users to form a temporary connection with an external client. This set of credentials is only valid for 24 hours. The expiry of these types of credentials can be seen along with the credential tab in Query Service.

![The credentials tab in Query Service workspace with expiring credentials highlighted.](../images/data-governance/overview/expiring-credentials.png)

#### Non-Expiring Credentials {#non-expiring-credentials}

[Non-expiring credentials](../ui/credentials.md#non-expiring-credentials) allow you to form a permanent connection with an external client and makes it easier to connect to Query Service without the need for a manual password. 

To enable the option of generating non-expiring credentials, you must follow the outlined [pre-requisite workflow](../ui/credentials.md#prerequisites). As part of this process, your organization administrator is required to configure permissions for the product profile and as a result, the administrator has control to restrict the access of accounts to use non-expiring credentials.

Technical user accounts permitted with non-expiring credentials can be assigned roles that ensure appropriate data governance by following the user-level access control processes.

Once the pre-requisite workflow has been completed, authorized users can now [generate the required connection credentials](../ui/credentials.md#generate-credentials).

#### SSL Data Encryption

For increased security, Adobe Experience Platform Query Service provides native support for SSL connections to encrypt client/server communications. Platform supports various SSL options to suit your data security needs and balance the processing overhead of encryption and key exchange.

See the guide on available [SSL options for third-party client connections to Query Service](../clients/ssl-modes.md) and how to connect using the `verify-full` SSL parameter value.

### Encryption {#encryption-and-customer-managed-keys}

<!-- Commented out lines to be included when customer-managed keys is released. Link out to the new document. -->

<!-- ### Encryption and customer-managed keys (CMK) {#encryption-and-customer-managed-keys} -->

Encryption is the use of an algorithmic process to transform data into encoded and unreadable text to ensure the information is protected and inaccessible without a decryption key. 

Query Service data compliance ensures that data is always encrypted. Data-in-transit is always HTTPS compliant and similarly, the data-at-rest in the data lake is encrypted with system-level keys.

<!-- Data-in-transit is always HTTPS compliant and similarly when the data is at rest in the data lake, the encryption is done with Customer Management Key (CMK), which is already supported by Data Lake Management. The currently supported version is TLS1.2. -->

## Logs {#logs}

Adobe Experience Platform Query Service records user activity and categorizes that activity in different log types. Logs provide information on **who** performed **what** action, and **when**. Each action recorded in a log contains metadata that indicates the action type, date and time, the email ID of the user who performed the action, and additional attributes relevant to the action type.

Each log category reflects a different aspect of information collected and can be requested as desired by a Platform user. This section provides details on the type of information captured and where this information can be accessed.

### Query Logs {#query-logs}

Query logs allow you to monitor and review the status of all queries that have been executed through Query Service. This brings transparency to the user experience by allowing users to monitor the metadata for ALL the queries that have been executed across Query Service. It includes ALL types of queries whether is an exploratory, batch, or scheduled query. 

Query logs can be accessed either through the Platform UI or API. To access query logs in Platform UI you must have an Adobe ID and access to the Adobe Experience Platform. Query Logs are located in the [!UICONTROL Logs] tab of the Query Service workspace.

![The Queries log tab with the details panel highlighted.](../images/data-governance/overview/queries-log.png)

### Audit Logs {#audit-logs}

By providing an accurate record of user actions, an audit trail can help with troubleshooting issues and help your business effectively comply with corporate data stewardship policies and regulatory requirements. Audit logs provide a record of all Platform activities. To increase the transparency and visibility of actions performed in Query Service by users, you can audit user actions relating to query execution, templates, and scheduled queries. 

The following query categories are captured by audit logs: 

|  Category |  Action Type |
|---|---|
|  Query |  Execute |
| Query Template | Create, Delete, Update  |
| Scheduled Query | Create, Delete, Update |

The audit logs workspace contains **extended server logs**. These provide more details than those held within the query logs.

Below is a list of three extended logs that are only found within the query categories for audit logs:-

1. **Meta query logs**: When a query is executed, various associated backend sub-queries (such as parsing) are executed. These types of queries are known as "Metadata" queries. Their relevant details can be found in audit logs.
1. **Session logs**: The system creates a session entry log for a user when they log into Query Service and do not execute a query.
1. **Third-part client connection logs**: A connectivity audit log is generated when a user successfully connects Query Service to a third-party client.

See the [Audit logs overview](../../landing/governance-privacy-security/audit-logs/overview.md) for more information on how audit logs can help your organization achieve data compliance. 
<!-- Q) Does the system create a session log when a query is executed as well? -->

## Data usage {#data-usage}

The data usage labeling & enforcement framework provides a uniform way across all Adobe solutions, services, and platforms to capture, communicate, and use metadata across the Adobe Experience Cloud. Metadata helps data controllers label data accurately and appropriately. See the [data usage labels overview](../../data-governance/labels/overview.md) for more information on how Adobe Experience Platform Data Governance allows you to apply data usage labels to datasets and fields

Query Service is not directly responsible for enforcing this framework as it does not modify marketing or analytical data nor is it an activation product.

<!-- Q) Surely every service is responsible for enforcing the framework? - Why provide details on data labeling. -->

<!-- Q) What is an activation product? -->

<!-- For example. if an attribute "name" of a specific type, then restricting the execution of aggregation query has not been enforced within the query service. Generally, the aggregation within queries is either for sum, count, etc. -->

There are two types of derived datasets formed by Query Service, and each has a particular method of labeling data. The following techniques enforce labeling on datasets created by Query Service for the purpose of data compliance:

1. **Derived datasets with standard schemas**: When a query results in a derived dataset that uses a standard schema, data labeling is conducted at the schema level and applies to all datasets that conform to that schema.
1. **Derived datasets using an ad hoc schema**: Ad hoc schemas are created by an individual user for a specific purpose. The XDM schema fields are namespaced for that particular dataset and not intended for use across different datasets. As a result, ad hoc schemas are available through the Experience Platform UI but in a read-only mode and are not visible by default. They must be enabled for viewing using the filter function in the schema workspace. Ad hoc schemas in the Platform UI can only be labeled at the schema level. 

<!-- Q) what does that last sentence mean? -->

<!-- This can be linked to the guide in https://experienceleague.adobe.com/docs/experience-platform/query/data-governance/ad-hoc-schema-labels.html#discover-ad-hoc-schemas-in-the-schema-inventory-of-the-platform-ui after it is made public. -->

See the guide on [adding data labels to XDM schemas](https://experienceleague.adobe.com/docs/experience-platform/xdm/tutorials/labels.html?lang=en) for more information.

## Privacy Service {#privacy-service}

Privacy Service helps you manage customer requests to access and delete their data in accordance with legal privacy regulations. It does this by providing the capability to mark data that has been enriched through Query Service with a unique identifier.  

Data must be properly labeled in order for the service to determine which fields to access or delete during privacy jobs. See the [Privacy Service overview](../../privacy-service/home.md) for more information on this service.

Query Service features for data governance simplify and streamline the process of data categorization and adherence to data usage regulations. Once the data has been identified, Query Service enables you to allocate the primary identity on all output datasets.  

There are two key categorizations to facilitate privacy jobs when using Query Service: 

1. **Derived Datasets with Standard Schema**: When a query results in a derived dataset that uses a standard schema, privacy measures are handled at the data lake management level.
1. **Derived Datasets by using Ad-hoc Schema**: When a query creates an ad-hoc schema, you can mark the primary identities by using the SQL command ‘ALTER TABLE’.  Instructions on how to use the command to [mark the desired dataset column as a primary identity](../sql/syntax.md#alter-table) can be found in the SQL syntax guide.
 
## Data Hygiene 

"Data Hygiene" refers to the process of repairing or removing data that may be outdated, inaccurate, incorrectly formatted, duplicated, or incomplete. It is important to ensure adequate data hygiene along every step of the data's journey and even from the initial data storage location. In Adobe Experience Platform Query Service, this is either the data lake or the data warehouse.

It is necessary to assign an identity to a derived dataset to allow their management by the [!DNL Data Hygiene] service. Conversely, when you create aggregated data on an accelerated data store, the aggregated data cannot be used to derive the original data. As a result of this data aggregation, the need to raise data hygiene requests is eliminated. 

An exception to this scenario is the case of deletion. If a data hygiene deletion is requested on a dataset and before the deletion is completed, another derived dataset query is executed, then the derived dataset will capture information from the original dataset. In this case, you must be mindful that if a request to delete a dataset has been sent, you must not execute any new derived dataset queries using the same dataset source. 

See the [data hygiene overview](../../hygiene/home.md) for more information on data hygiene in Adobe Experience Platform.

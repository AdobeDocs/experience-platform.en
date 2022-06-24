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

This document examines each of the different areas of governance to demonstrate how to be data compliant when using Query Service. 

>[!NOTE]
>
>Datasets that are created, or appended to using Query Service are referred to as "derived datasets".

## Security

Data security is defined as a process of protecting data from unauthorized access and ensuring secure access throughout its lifecycle. Data security includes ensuring access control through roles and permissions (RBAC and FLAC) and securing data through the power of credentials, SSL, data encryption, and key management to ensure data protection across the platform. 

This section further has 4 categories - we will be going deeper into each of these categories as explained below:

* Access Controls Enforcement by Query Service - through roles and permissions including dataset and column-level permissions
* Securing Data: Connectivity - through the platform, external clients, limited connection with expiring credentials and non-expiring credentials
* Securing Data: Encryption and Customer Management Key(CMK) - through encryption at rest

### Access Controls Enforcement by Query Service

Access control in Adobe Experience Platform allows you to manage access to Query Service through roles and permissions. Similarly, the field-level access control is managed through label flow on the schema.

This section serves as a guide for the required access to fully utilize the Query Service features.

#### Query Execution Controls

In order to be able to run queries within Query Service, a user needs to be assigned to a role with "Manage Queries" permission.

This permission allows users to execute data exploration and batch queries, which can either read an existing dataset or write data on datasets (CTAS and ITAS (INSERT INTO AS SELECT) queries).

The detailed instructions for requesting access to the product profile "Query Manage" has been outlined in [Manage Permission for a Product Profile](https://experienceleague.adobe.com/docs/experience-platform/access-control/ui/permissions.html) and [Manage Users for a Product Profile](https://experienceleague.adobe.com/docs/experience-platform/access-control/ui/users.html).

#### Dataset level access control

Access control in Adobe Experience Platform allows you to manage roles and permissions for various Platform capabilities by using the Adobe Admin Console. 

This section serves as a guide for the required resource-based access in order to access datasets while querying data through Query Service.

By the use of the permission interface the user can define resource-based access control (RBAC) on dataset and schema. Following are the available permissions:

* Dataset manage permission will allow for creating and viewing datasets using query service.
* Dataset view permission will allow for views datasets using query service 

#### Column Level Access Control

The Data Governance in Query Service enables the feature to restrict access to the user-critical data based on the role/access assigned to each platform user or based on the field-level label applied to each individual column.

This enables you to allow access to a set of users to whom you would like to grant access rights on confidential columns. The access control on any column will restrict both the read and writing capabilities of a user on that restricted column.  

Column-level control can be applied at the schema level based on the type of schemas:

1. Standard schemas: To restrict access to one or more columns use the permission-based labels and apply them to the XDM schema (including Adhoc XDM schema)  representing datasets.
1. Ad hoc schemas: The permission labelling is consistently applied even for datasets created via query service either using a predefined schema or schema generated (Adhoc schema) as part of CTAS operation.

Once the appropriate level of labels has been applied, the following is the **system behaviour** when a user tries to access the non-accessible data: 

1. When a user has been declined access to one of the columns within a schema, the  user will not be able to read or write on the restricted column.
  
* **Case 1**: When a user tries to execute a query with only a restricted column, the system will throw an error that the column doesn't exist.
  
* **Case 2**: When a user tries to execute a query with multiple columns including a restricted column, the system will simply return output for all non-restricted columns only.

1. When a user tries to access a calculated field, the user is required to have access to all the fields used in the composition else the system will not allow access to the calculated field as well. 

#### Working with views

Adobe Experience Platform Query Service provides the ability to use standard ANSI SQL for [`CREATE VIEW`](https://experienceleague.adobe.com/docs/experience-platform/query/sql/syntax.html?lang=en#create-view) statements.

`CREATE VIEW` defines a view of a query. The view is not physically materialized. Instead, the query is run every time the view is referenced in a query. When a user creates a view from a dataset, the data protection rules of RBAC and/or FLAC of the parent dataset are **not** hierarchically applied. Therefore, when a view is created it needs to be treated similarly to the ad-hoc schemas. This means a user is required to explicitly set permissions on each of the columns.

For highly sensitive data workflows, a user needs to take extra discreet when creating views. 

### Connectivity

Adobe Experience Platform Query Service is accessible through the platform UI or by forming a connection with external compatible clients. The accessibility to all the available fronts is controlled by the set of credentials.

#### Connectivity through Platform

This is controlled by the user-specific credentials for the Adobe Experience Platform.

#### Connectivity through External Clients

The accessibility can be formed by building a connection with the external clients through a set of credentials. These credentials are mandatory to access the Query Service with any of the compatible external clients.

Users can connect to these external clients by using either [expiring credentials](https://experienceleague.adobe.com/docs/experience-platform/query/ui/credentials.html?lang=en) or [non-expiring credentials](https://experienceleague.adobe.com/docs/experience-platform/query/ui/credentials.html?lang=en#non-expiring-credentials).

#### Limited Connection Time via Expiring Credentials

The [expiring credentials](https://experienceleague.adobe.com/docs/experience-platform/query/ui/credentials.html?lang=en) allow users to form a temporary connection with an external client. This set of credentials is only valid for 24 hours. The expiry of these types of credentials can be seen along with the credential tab in Query Service.

![The credentials tab in Query Service workspace with expiring credentials highlighted.]()

<!-- Check from her upwards in case of recent changes -->

#### Non-Expiring Credentials

The [non-expiring credentials](https://experienceleague.adobe.com/docs/experience-platform/query/ui/credentials.html?lang=en#non-expiring-credentials) allow the users to form a permanent connection with an external client making it easier to connect without requiring the need for a manual password. To enable this kind of credentials for a user, a set of [pre-requisite workflow](https://experienceleague.adobe.com/docs/experience-platform/query/ui/credentials.html?lang=en#prerequisites) is required to be followed and inaccessible to all Query Service users. In the absence of completion of the pre-requisite workflow, the user will not be able to generate the non-expiring credentials. Thus, by restricting the creation of technical accounts, the AEP admin can restrict the use of such accounts. 

Technical users created with non-expiring credential can be assigned to roles and once assigned follow the same user-level access control

Once the pre-requisite workflow has been successfully processed, the user can now [generate the required connection credentials](https://experienceleague.adobe.com/docs/experience-platform/query/ui/credentials.html?lang=en#generate-credentials).

The end-to-end guide for operationalizing the non-expiring credentials is available [here](https://experienceleague.adobe.com/docs/experience-platform/query/ui/credentials.html?lang=en#non-expiring-credentials). 

#### SSL Data Encryption

For increased security, Adobe Experience Platform Query Service provides native support for SSL connections to encrypt client/server communications. The platform supports various SSL options to suit your data security needs and balance the processing overhead of encryption and key exchange.

The detailed information on available SSL options for third-party client connections to Query Service and how to connect using the verify-full SSL parameter value is available at ["Query Service SSL options"](https://experienceleague.adobe.com/docs/experience-platform/query/clients/ssl-modes.html?lang=en).

### Encryption and Customer Management Key(CMK)

Encryption is defined as the use of an algorithmic process to transform data into an encoded and unreadable text to ensure the information is protected and inaccessible without a decryption key.  

The data governance enforced in Query Service ensured that data is always encrypted. When the data is in transit, it is always ensured to be HTTPS compliant. Similarly, when the data is in siphon or data lake the encryption is done at rest with Customer Management Key (CMK), which is already supported by Data Lake Management. The currently supported version is TLS1.2. 

## Audit

Adobe Experience Platform Query Service logs user activity in the form of different types of logs. Each category of logs reflects a different level of information as desired by the platform user.

This section covers details of what we capture and where we capture these distinct user activities.

### Query Logs

The Query Logs or the "Logs" tab within Queries is a holistic view of all the queries that have been executed through the power of Query Service.

This section guides on how to monitor the queries executed through the Query Service.

<!-- This document does not exist yet therefore cant link to it.  -->

The platform allows you to monitor and review the status of all queries that have been executed through the Platform's Query Service. This brings transparency to the user experience by allowing to monitor the metadata for ALL the queries that have been executed across Query Service. It includes ALL types of queries whether is an exploratory query, batch query or scheduled query. 

The query logs can be accessed either through the Platform UI or API. To access the "logs" in Platform UI requires you to have an Adobe ID and access to the Adobe Experience Platform.

![The Queries log tab with the details panel highlighted.]()

### Audit Service Logs

To increase the transparency and visibility of actions performed in the Query Service by users. The Adobe Experience Platform allows you to audit the user actions for the Query Execution, Template, and Scheduled Query. These audit logs form a tail within the platform that will further allow customers to trace back actions or troubleshoot issues. Additionally, by monitoring user actions, one can ensure that data usage regulations and policies have been followed. 

In general, the following are the Query categories captured by audit logs: 

|  Category |  Action Type |
|---|---|
|  Query |  Execute |
| Query Template | Create, Delete, Update  |
| Scheduled Query | Create, Delete, Update |

There are a few **extended server logs** that can be found within audit logs that are not available in query logs. Below is the list of such extended logs:-

1. **Meta query logs**: When a user executes a query, there are various backend processing sub-queries(such as parsing) which are executed. These are called "Metadata" queries. These types of queries or their relevant details can be found in audit logs.
1. **Session logs**: When a user logs into the query service and does not execute any query, the system will create a session entry log for the user. This can also be found in the audit logs.
1. **Third-part client connection logs**: Similar to the session logs - when a user connects the query service to a third-party client, there is a connectivity audit log that gets generated on forming the connection. These can be easily located within the audit logs.

## Data usage

The Data Usage Labeling & Enforcement (DULE) Framework is designed to provide a uniform way across all Adobe Solutions/Services/Platforms to capture, communicate, and use metadata about data across the Adobe Experience Cloud. The metadata helps data controllers label data. These are not enforced by the Query Service as we neither modify marketing/analytical data nor query service is an activation product.

For example. if an attribute "name" of a specific type, then restricting the execution of aggregation query has not been enforced within the query service. Generally, the aggregation within queries is either for sum, count, etc.

In this section, we will detail the available techniques to enforce labeling on the datasets created by the query service. 

There are two types of derived datasets formed from Query Service, and each has its way of taking care of labeling: 

1. **Derived datasets with standard schemas**: When a query results in a derived dataset, the labeling needs will be taken care of at the schema level. Therefore, labeling at the schema level should be taken care of.
1. **Derived datasets using an ad hoc schema**: Ad hoc schemas are a special type of schemas and each of these schemas is created by an individual user for its pre-defined purpose. Hence, the ad hoc schemas are made visible on the AEP UI but in a restricted read-only mode. These schemas are not visible by default and are hidden behind a toggle button, therefore, enable the toggle to view the list of ad hoc schemas available in the system. The ad-hoc schemas in AEP UI can be labeled at the schema level only. 

## Privacy Service 

Privacy Service refers to the capability of the system to mark the unique identifier within the data that has been enriched through Query Service.  

The Data Governance in Query Service simplifies and streamlines the process of data categorization and data usage regulations. Once the data has been identified, the query service enables you to identify the primary identity on all output datasets.  

There are two key categorizations of ensuring Privacy Service: 

1. **Derived Datasets with Standard Schema**: When a query results in a derived dataset, the privacy measures are being taken care of at the data lake management level. 
1. **Derived Datasets by using Ad-hoc Schema**: When a query creates an ad-hoc schema, you can mark the primary identities by using the SQL command ‘ALTER TABLE’. The command enables you to mark the desired column as a Primary identity in a dataset. 
 
## Data Hygiene 

"Data Hygiene" refers to the process of repairing or removing data that may be outdated, inaccurate, incorrectly formatted, duplicated or incomplete. It is important to ensure adequate data hygiene along every step of the data's journey and even from the initial data storage location. In Adobe Experience Platform Query Service, this is either the data lake or the data warehouse.

Derived datasets are generally key on an identity that could be marked for Identity and hence managed by the centralized data hygiene service. 

Conversely, when you create aggregated data on an accelerated data store, the aggregated data cannot be used to derive the original data. As a result of this data aggregation, the need to raise data hygiene requests is eliminated. 

Exception Scenario in case of deletion - if a Data Hygiene deletion is requested on a dataset and before the completion of the deletion, another derived dataset query has been executed. In this case, the derived dataset will capture the information from the original dataset. Therefore, you need to be mindful that if a dataset has been requested to be deleted then do not execute any new derived dataset queries on the same. 


 

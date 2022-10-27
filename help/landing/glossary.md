---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Adobe Experience Platform Glossary
topic-legacy: getting started
description: A glossary of important terminology in Experience Platform.
exl-id: 00eae5f5-7dfa-45ac-aff9-9e1769a3a53a
---
# Adobe Experience Platform glossary {#adobe-experience-platform-glossary}

## A

**Access control**: Role-based access control enables admins to assign access and permissions to users of Experience Platform. Permissions include the ability to view and/or use Experience Platform features, such as creating sandboxes, defining schemas, and managing datasets.

**Access key ID**: An access key ID is a unique identifier that's associated with an [!DNL Amazon] S3 secret access key. The access key ID and secret access key are used together to sign [!DNL Amazon Web Services] (AWS) requests.

**Action**: In the context of tags, an action is a specific type of rule component that defines what should happen after an event occurs and conditions are evaluated and passed.

**Activate**: Activate is the action taken by a user to map a segment or profiles to a destination such as [!DNL Oracle Eloqua], [!DNL Google], or [!DNL Salesforce Marketing Cloud].

**Activity**: In [!DNL Offer Decisioning], an activity contains the logic that informs the selection of an offer.

**Administrator**: One or more individuals in your organization who can configure and customize permissions for Experience Platform in Adobe Admin Console. 

**Adobe Admin Console**: Adobe Admin Console provides a central location for managing Adobe product entitlements and access for your organization. Through the console, administrators can grant groups of users access permissions for various Platform capabilities, such as "Manage Datasets", "View Datasets", or "Manage Profiles".

**Adobe Experience Platform**: Adobe Experience Platform standardizes data and content across the enterprise, powering real-time consumer profiles, enabling data science, and accelerating content velocity to drive experience personalization across the customer journey.

**Adobe Experience Platform Query Service**: Enables data analysts to query events and profiles for use in analytics and machine learning. With Query Service, data scientists and analysts can pull all of their datasets stored in Experience Platform (including behavioral data as well as point-of-sale (POS), customer relationship management (CRM), and more) and query those datasets to answer specific questions about the data.

**Adobe Experience Platform Segmentation Service**: Enables building segments and generating audiences from your Real-time Customer Profile data. These audiences can then be exported to their own datasets within the Data Lake.

**Adobe Intelligent Services**: Intelligent Services such as Attribution AI and Customer AI are machine-learning, artificial-intelligence-based models that are purpose-built and require Experience Platform to run and operate.

**Adobe I/O**: Adobe I/O is part of Experience Platform and provides access to everything developers need to integrate, extend, and customize Platform including APIs, events, developer console, and helpful tooling.

**Adobe Sensei**: Adobe Sensei is the intelligence framework that powers Experience Platform. It also provides a set of AI services that empowers brands to enhance their ability to deliver real-time, personalized customer experiences.

**Amazon S3 bucket**: [!DNL Amazon S3] buckets are the foundational containers for data stored in the [!DNL Amazon] ecosystem. Buckets contain objects, each object is stored and retrieved using a unique developer-assigned key.

**Amazon S3 connector**: The [!DNL Amazon] S3 connector allows customers of Experience Platform to securely connect and access their [!DNL Amazon] S3 data.

**Append save strategy**: The "append" save strategy is an option used when specifying third-party data to ingest via a connection and appending any new data or rows at the end of the dataset. The previously ingested rows remain untouched and only rows created since the last scheduled run are ingested to Experience Platform. Any rows that were changed in the source system remain unchanged on Experience Platform.

**Array**: Arrays are used for ordered elements with the same data type.

**Artificial intelligence**: Artificial intelligence is a theory and development of computer systems that are able to perform tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages.

**Attributes**: Attributes are specified characteristics that represent a profile.

**Attribute merge**: When defining a merge policy using the Real-time Customer Profile API, the `attributeMerge` object indicates the manner by which the merge policy will prioritize profile attributes in the case of data conflicts. It is equivalent to selecting a [!UICONTROL Merge method] when defining a merge policy in the Platform UI.

**Attribution AI**: [!DNL Attribution AI] is an Intelligent Service powered by Adobe Sensei that delivers algorithmic multi-channel attribution capabilities across the entire customer lifecycle.

**Audience**: An audience is the resulting set of profiles that meet the criteria of a segment definition.

**Audience size**: An audience size is the total number of profiles that meet the criteria of a segment definition and qualify for audience membership.

**Audience snapshot**: An audience snapshot captures all profiles who qualify for the segment criteria at the time of segmentation.

## B

**Backfill**: For scheduled sources, the backfill option enables ingestion of historical data.

**Backfill period**: The backfill period is an option to set the length of time for ingesting third-party historical data via a source connection. Selecting a backfill period of "forever" will ingest the entire history of the source data to Experience Platform.

**Batch**: A batch is a set of data collected over a period of time and processed together as a single unit. Datasets are composed of multiple batches.

**Batch ID**: A batch ID is an Adobe-generated identifier for a batch of data.

**Batch ingestion**: Batch ingestion allows you to ingest data into Experience Platform as batch files. Batches are units of data that consist of one or more files to be ingested as a single unit.

**Batch segmentation**: Batch segmentation is an alternative to an ongoing data selection process and moves all profile data at once through segment definitions to produce corresponding audiences. Once created, this segment is saved and stored so it can be exported for use.

**Build**: In the context of tags, a build is a file or set of files that contain all the configurations and code needed to execute the business logic contained inside of a library, allowing you to deploy that library on your website or mobile app.

**Business intelligence tools**: Business intelligence (BI) tools are primarily integrated with [!DNL Experience Platform Query Service]. BI tools are types of application software that collect and process large amounts of unstructured data from internal and external systems.

## C

**Capping**: In [!DNL Offer Decisioning], capping (also known as frequency capping) is used in decisioning rules to define how many times an offer is presented. There are two types of caps: how many times an offer can be proposed across the combined target audience (called a "Global Cap"), and how many times an offer can be proposed to the same end user (called a "Profile Cap").

**Catalog**: In the context of sources and destinations, a catalog is a gallery with available connections to Adobe applications and third-party technologies. Not to be confused with [!DNL Catalog Service].

**[!DNL Catalog Service]**: [!DNL Catalog Service] (sometimes called [!DNL Catalog]) is the system of record for data location and lineage within Adobe Experience Platform. While all data that is ingested into Experience Platform is stored in the data lake as files and directories, [!DNL Catalog] holds the metadata and description of those files and directories for lookup, monitoring, and data-governance purposes.

**Class**: In Experience Data Model (XDM), a class defines the smallest set of fields used to build a schema and defines the base behavior of the business object that the schema represents.

**Client**: A client is an external tool or application which connects to [!DNL Query Service] via [!DNL PostgreSQL] protocol or HTTP API.

**Collection**: In [!DNL Offer Decisioning], collections are subsets of offers based on pre-defined conditions defined by a marketer, such as category of the offer.

**Combine with PII marketing action**: A marketing action that combines any personally identifiable information (PII) with anonymous data. Contracts for data sourced from ad networks, ad servers, and third-party data providers often include specific contractual prohibitions on the use of such data with directly identifiable data.

**Command-line interface**: A command-line interface is a text-based tool that can be used to connect to [!DNL Query Service] for raw query execution.

**Composition**: A composition is a grouping of components that form together to make up the schema.

**Condition**: In the context of tags, a condition is a rule component that evaluates a logical statement that must return `true` or `false`. All conditions must evaluate to `true` and all exception conditions must evaluate to `false` before any actions on the rule are executed.

**Console**: In [!DNL Query Service], the console provides information on the status and operation of a query. The console displays the connection status to [!DNL Query Service], query operations being executed, and any error messages that result from those queries.

**Contract ("C") labels**: Contract ("C") data usage labels are used to categorize data that has contractual obligations or is related to a customer's data governance policies.

**C1 contract label**: A `C1` contract data usage label specifies data can only be exported from Adobe Experience Cloud in an aggregated form without including individual or device identifiers. For example, data that originated from social networks.

**C2 contract label**: A `C2` contract data usage label specifies data that cannot be exported to a third-party. Some data providers have terms in their contracts that prohibit the export of data from where it was originally collected. For example, social networks contracts often restrict the transfer of data you receive from them. C2 is more restrictive than C1, which only requires aggregation and anonymous data.

**C3 contract label**: A `C3` contract data usage label specifies data that cannot be combined or otherwise used with directly identifiable information. Some data providers have terms in their contracts that prohibit the combination or use of that data with directly identifiable information. For example, contracts for data sourced from ad networks, ad servers, and third-party data providers often include specific contractual prohibitions on the use of directly identifiable data.

**C4 contract label**: A `C4` contract data usage label specifies that data cannot be used for targeting any ads or content, either on-site or cross-site. C4 is the most restrictive label as it encompasses C5, C6, and C7 labels.

**C5 contract label**: A `C5` contract data usage label specifies that data cannot be used for cross-site targeting of interest-based content or ads. Interest-based targeting, or personalization, occurs if the following three conditions are met: The data collected on-site is used to make inferences about a user's interest; is used in another context such as on another site or app; and is used to select which content or ads are served based on those inferences.

**C6 contract label**: A `C6` contract data usage label specifies that data cannot be used for on-site ad targeting. On-site ad targeting includes the selection and delivery of advertisements on your organization's websites, or apps or to measure the delivery and effectiveness of such advertisements. This includes using previously collected on-site data about the users' interest to select ads, process data about what advertisements were shown, when and where they were shown, and whether the users took any action related to the advertisement, such as selecting an ad or making a purchase.

**C7 contract label**: A `C7` contract data usage label specifies that data cannot be used for on-site targeting of content. On-site content targeting includes the selection and delivery of content on your organization's websites, or apps or to measure the delivery and effectiveness of such content. This includes previously collected information about users' interest to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the uses took any actions related to the content, including for example selecting content.

**C8 contract label**: A `C8` contract data usage label specifies that data cannot be used for measurement of your organization's websites or apps. This does not include interest-based targeting, which is the collection of information about your use of this service to subsequently personalize content and/or advertising in other contexts.

**C9 contract label**: A `C9` contract data usage label specifies that data cannot be used in data-science workflows. Some contracts include explicit prohibitions on data used for data science. Sometimes these are phrased in terms that prohibit the use of data for artificial intelligence (AI), machine-learning (ML), or modeling.

**C10 contract label**: A `C10` contract data usage label specifies that data cannot be used for stitched identity activation. Some data usage policies restrict the use of stitched identity data for personalization. The `C10` label is automatically applied to segments if their merge policies use the "private graph" option.

**Created Date column**: Selecting a Created Date column is an option when specifying third-party data via a source connection. When the append save strategy is selected and the dataset schema contains a multiple date fields, you must choose from the available schema to specify a Created Date key column. The Created Date option is not available when the overwrite save strategy is selected.

**Create Table as Select**: Create Table as Select (CTAS) is a SQL command which, when executed as a part of a complete and valid SQL query, will instruct [!DNL Query Service] to persist the results of the query in a dataset. You can create a new result set, overwrite previous results, or append to previous results.

**Cross-site data**: Cross-site data is the combination of data from several sites, including a combination of on-site data and off-site data or a combination of data from several off-site sources.

**Cross-site targeting marketing action**: A marketing action that uses data for cross-site ad targeting. The combination of data from several sites, including a combination of on-site data and off-site data or a combination of data from several off-site sources, is referred to as cross-site data. Cross-site data is typically collected and processed to make inferences about customers' interests.

**Custom identity namespace**: Custom identity namespaces can be created by your organization to represent identities for a specific organization or business case.

**Custom labels**: Custom data usage labels allow you to create and apply specific labels to data fields that meet specific business needs.

**Customer AI**: Customer AI is an Intelligent Service powered by Adobe Sensei that enriches customer profiles with AI-based propensities and empowers customer segmentation and targeting efforts.

## D

**Daily**: In the context of scheduled file exports, schedules full or incremental file exports once a day, every day, from the start date to the end date at the time specified by the user.

**Data dictionary**: In the context of tags, a data dictionary (also known as a data map) is a set of data elements defined within a property.

**Data element**: In the context of tags, a data element is a pointer used within rules and extensions to point to a specific piece of data that exists on the client device.

**Data ingestion**: Data ingestion is the process of adding data from a source to Experience Platform. Data can be ingested into Platform in a number of ways including streaming, batches, or added via source connectors.

**Data layer**: In the context of tags, a data layer is a data structure that exists on the client device that contains metadata about the context in which a page or screen is viewed.

**Data governance**: Data governance encompasses the strategies and technologies used to ensure data is in compliance with regulations and organizational policies with respect to data usage.

**Data integration partners**: Data integration partners simplify and automate the loading and transformation of massive volumes of data from over 200 sources to Experience Platform without writing code.

**Dataset labels**: Data usage labels can be added to datasets. All fields within that dataset will inherit the dataset's labels.

**Data Science Workspace**: [!DNL Data Science Workspace] within Experience Platform enables customers to create machine-learning models utilizing data across Platform and Adobe applications to create intelligent segments, generate insights, and provide predictions, allowing you to greatly enhance end-user digital experiences.

**Data source**: A data source is a user designated origin of data. Examples of a data source are a mobile app, profile and/or experience events, website profile events, or a CRM.

**Data steward**: A data steward is the person responsible for the management, oversight, and enforcement of an organization's data assets. A data steward also ensures data governance policies are safeguarded and maintained to be compliant with government regulations and organizational policies.

**Data stream**: A data stream is a set or collection of messages which share the same schema and are sent by the same source.

**Data type**: A data type is a reusable XDM resource that defines an object-type field containing multiple properties in a hierarchical representation.

**Data usage labels**: Data usage labels allow you to categorize data that reflects privacy-related considerations and contractual conditions to be compliant with regulations and corporate policies. Data usage labels added to a dataset are inherited down or applied to all fields within that dataset. Data usage labels can also be applied directly to fields.

**Dataflow**: A dataflow is a virtual pipeline of data that flows into Platform from a source and out to destinations. 

**Dataflow run**: A dataflow run is a dataflow that lands in Experience Platform based on a user specified schedule.

**Dataset**: A dataset is a storage and management construct for a collection of data, typically a table, that contains a schema (columns) and fields (rows).

**Dataset ID**: An Adobe-generated identifier for an ingested dataset.

**Dataset output**: Dataset output provides a mechanism for determining what the "Create Table as Select" option will be used for a particular [!DNL Query Service] run.

**Deduplication key**: A user defined primary key that determines the identity by which users want their profiles to be deduplicated.​

**Delta column**: A delta column allows you to select a source data field to represent a timestamp for incremental ingestion.

**Delta save strategy**: The delta save strategy is an option for ingesting third-party data via a source connection. The option allows the user to specify that new or changed rows of source data are ingested to Experience Platform. New rows are added to the end of the dataset and changed rows are updated in the dataset on Experience Platform.

**Descriptor**: In Experience Data Model (XDM), a descriptor is an additional set of schema-related metadata that describes a specific behavior for a field. Descriptors can be used by Experience Platform to understand intended schema behavior such as the relationship between two schemas.

**Destination**: A destination is a general term for any endpoint, such as an Adobe application, advertising platform, cloud storage service, or marketing service, where an audience is activated and delivered.

**Destination category**: A destination category is a grouping of destinations that have similar characteristics.

**Destination catalog**: A destination catalog is a list of available destinations in Experience Platform.

**Direct call rules**: In the context of tags, a direct-call rule is a rule that executes when it is called directly from the page, bypassing event-detection and lookup systems.

**Display name**: In Experience Data Model (XDM), a display name is a user-friendly name for a field that is shown in the UI.

## E

**Eligible offer**: An eligible offer can be consistently offered to a profile, as it meets the constraints defined upstream.

**Eligibility rules**: In [!DNL Offer Decisioning], eligibility rules are applied to a profile related to calendar, schedule, and capping constraints.

**Email targeting marketing action**: A marketing action that uses data in email targeting campaigns.

**Embed code**: In the context of tags, the embed code is a script tag placed within the HTML on a site or environment. The embed code instructs the browser where to retrieve the build.

**Enumeration**: An enumeration (enum) is an XDM field that is constrained to a set of pre-defined values.

**Environment**: In the context of tags, an environment is a set of deployment instructions that specifies the host delivery and file format of a build. A library must be paired with an environment before it can be built.

**Error diagnostics**: Error diagnostics enable the generation of detailed error messages for ingested batches. The error threshold allows you to configure the percentage of acceptable errors before a batch fails.

**Event**: In the context of tags, an event is a specific type of rule component, which is a trigger that occurs on a client device to begin the execution of a rule.

**Event entities**: In the context of data modeling, event entities represent concepts related to actions a customer can take, system events, or any other concept where you may want to track changes over time. Entities that fall under this category should be represented by schemas based on the [!DNL XDM ExperienceEvent] class.

**Events**: Events are the behavior data associated with a profile.

**Experience Data Model (XDM)** [!DNL Experience Data Model] (XDM) is an open-source framework that uses standard schemas to unify data for use with Experience Platform and Adobe Experience Cloud applications. XDM standardizes how data is structured and speeds up and simplifies the process of gaining insights from massive amounts of data.

**Experiment**: An experiment is the process of creating a trained model by training the instance with a sample portion of live production data. This is different from a trained model that is tested against a holdout test dataset. This is also different from the concept of an experiment in some machine-learning frameworks where it actually means a sample modeling project.

**Experience Event**: An Experience Event represents a snapshot of the system when an interaction or event related to a customer experience takes place. Experience Events are immutable fact records of what occurred and represent what happened without aggregation or interpretation. In Experience Data Model (XDM), this concept is captured by the [!DNL XDM ExperienceEvent] class.

**Export full file**: An export file containing a full snapshot of all profile qualifications for the selected segment.

**Export incremental files**: A series of exported files where the first file is a full snapshot of all profile qualifications for the selected segment, and subsequent files are incremental profile qualifications since the previous export.

**Extension**: In the context of tags, an extension is a package of functionality added to a tag property. An extension is usually focused around a particular marketing or analytics solution and provides the tools needed to deploy that technology into a client environment.

**Extension package**: In the context of tags, an extension package is a ZIP file created and uploaded by an extension developer that provides everything necessary for tags users to install the extension inside their property. An extension package contains a manifest specifying information about the extension, the HTML/JavaScript needed for end-users to configure the behavior of the tag extension, and the executable JavaScript delivered to the client environment (if required).

## F

**Fallback offers**: A fallback offer is the default offer displayed when an end-user is not eligible for any of the offers in the collection used.

**Feature mapping**: Feature mapping refers to the process of mapping features from data into input and target features that are required by a machine-learning model.

**Field**: A field is the lowest level element of a dataset, as defined by the dataset's XDM schema. Each field has a name for referencing purposes and a type to indicate the type of data that it contains. Field types can include (but are not limited to) integer, number, string, boolean, and object.

**Field group**: See "Schema field group".

**Field labels**: Field labels are data governance labels that are either inherited from a dataset or applied directly to a field.

**Field name**: A field name is used to reference the value of a field in queries and downstream services.

**Frequency**: In [!DNL Query Service], frequency determines how often a recurring scheduled query will run.

## G

**Geofence**: A geofence is a virtual geographic boundary, defined by GPS or RFID technology, that enables software to trigger a response when a mobile device enters or leaves a particular area.

**GDPR (General Data Protection Regulation)**: The General Data Protection Regulation (GDPR) is a legal framework that sets guidelines for the collection and processing of personal information of individuals within the European Union (EU). The GDPR sets out the principles for data management and the rights of the individual and covers all companies that deal with the data of EU citizens.

**Guardrails**: Guardrails are thresholds that provide guidance for data and system usage, performance optimization, and avoidance of errors or unexpected results in Adobe Experience Platform. Guardrails can refer to your usage or consumption of data and processing in relation to your licensing entitlements.

## H

**Host**: In the context of tags, a host specifies the location, domain, and user credentials necessary for the system to deliver a build.

**Hourly**: In the context of scheduled file exports, schedules incremental file exports every 3, 6, 8, or 12 hours.

## I

**Identity**: An identity is an identifier that uniquely represents an individual customer, such as a cookie ID, device ID, or email ID.

**Identity fields**: Identity fields are XDM fields that are used to stitch together information about individual customers coming from multiple data sources. A single primary identity must be defined in order for the schema to be enabled for use in Real-time Customer Profile.

**Identity ("I") labels**: Identity ("I") data usage labels are used to categorize data that can identify or contact a specific person.

**Identity graph**: An identity graph is a map of relationships between stitched and linked identities that exist for an individual customer. Each identity graph updates in near-real-time with customer activity. The common structure of identity relationships in your data is represented by the [!UICONTROL Private Graph], which serves as the structural blueprint for each individual identity graph.

**Identity namespace**: An identity namespace defines the context of an identifier such as an email address or CRM ID.

**Identity Service**: [!DNL Experience Platform Identity Service] enables the creation and management of identity types, allowing you to link of customer identities across devices and channels. The service's ability to link identities together allows Real-time Customer Profile to provide a complete representation of each individual customer.

**Identity stitching**: Identity stitching is the process of identifying data fragments and stitching them together to form a complete profile record.

**Identity symbol**: An identity symbol is an abbreviation of an identity namespace that can be used as a reference in APIs.

**Identity value**: An identity value, combined with an identity namespace, is an identifier that represents a unique individual, organization, or asset. When matching record data across profile fragments, the namespace and identity value must match.

**I1 data usage label**: The `I1` data usage label is used to classify data that can directly identify or contact a specific person rather than a device.

**I2 data usage label**: The `I2` data usage label is used to classify data that can be used in combination with any other data to indirectly identify or contact a specific person.

**IMS Organization**: An IMS Organization (sometimes referred to as an IMS Org) is the name used to identify a company or a specific group within a company across Adobe products. Administrators can configure and manage access and permissions of features to users of an Organization. 

**Ingestion**: See data ingestion.

**Ingestion schedule**: An ingestion schedule provides time-based options when ingesting from a source to Experience Platform.

**Input feature**: An input feature is specified in feature mapping and is used by a machine-learning model to make predictions.

**[!DNL Intelligent Services]**: [!DNL Intelligent Services] such as [!DNL Attribution AI] and [!DNL Customer AI] are machine-learning, artificial-intelligence-based models that require Experience Platform (or applications built on top of Platform such as Real-time Customer Data Platform) to run and operate.

**Interest-based targeting or personalization**: Interest-based targeting, also known as personalization, occurs if the following three conditions are met: 

1. Data collected on-site is used to make inferences about a user's interest.
1. Data is used in another context such as on another site or app (off-site).
1. Data is used to select which content or ads are served based on those inferences.

## J

**[!DNL JupyterLab]**: An open-source, web-based interface for Project [!DNL Jupyter] that is integrated into the Platform UI.

**[!DNL Jupyter Notebook]**: Integrated with JupyterLab, Jupyter Notebooks enable you to perform data cleaning and transformation, numerical simulation, statistical modeling, data visualization, machine learning, and more on your Experience Platform data in a variety of languages such as Python, Scala, and PySpark.

## K

## L

**Library**: In the context of tags, a library is a set of business logic that contains instructions for how the tag library should behave on the client device.

**Lookup entities**: In the context of data modeling, lookup entities represent concepts that can relate to an individual person, but cannot be directly used to identify the individual. Entities that fall under this category should be represented by schemas based on custom Experience Data Model (XDM) classes.

## M

**Machine learning (ML)**: Machine learning is the field of study that enables computers to learn without being explicitly programmed.

**Machine-learning model**: A machine-learning model is an instance of a machine-learning recipe that is trained using historical data and configurations to solve for a business use case. In Adobe Experience Platform Data Science Workspace, machine-learning models are called recipes.

**Mandatory attribute**: A user-enabled checkbox that ensures all profile records contain the selected attribute. For example: all exported profiles contain an email address.

**Mapping**: Data mapping is the process of mapping source data fields to related target fields in a destination. 

**Marketing action**: In the data governance framework, a marketing action (also known as a marketing use case) is an action that an Experience Platform data consumer takes, for which there is a need to check for violations of data usage policies.

**Merge method**: When defining a merge policy using the Platform UI, the merge method specifies how data fragments should be prioritized when a conflict occurs. When using the Real-time Customer Profile API to define a merge policy, the merge method is determined using the `attributeMerge` object.

**Merge policy**: Merge policies are rules that Experience Platform uses to determine how customer data fragments from multiple sources will be combined to create an individual profile. When a data conflict occurs, the merge policy determines which data should be prioritized for inclusion in the profile.

**Mixin**: See "Schema field group".

**Module**: In the context of tags, a module is a snippet of executable JavaScript provided by an extension, which performs actions in a client environment without needing to create a rule.

## N

**Non-production sandbox**: Non-production sandboxes are sandboxes that are typically used for development experiments, testing, or trials. Unlike production sandboxes, non-production sandboxes can be reset and deleted.

**[!DNL Notebooks]**: [!DNL Notebooks] are authored using [!DNL Jupyter Notebook] and can be run to perform data analysis.

## O

**Offer**: An offer is a marketing message containing a business or sales proposition to a (potential) customer. Offers often have specific rules that determine who is eligible to see or receive them.

**[!DNL Offer Decisioning]**: [!DNL Offer Decisioning] enables marketers to manage rules and trained models of offer propositions when engaging with end-users based on data collected across channels and applications.

**Offer library**: The offer library is a central library used to manage personalized and fallback offers, decision rules, and activities.

**On-site personalization marketing action**: A marketing action that uses data for on-site content personalization. On-site personalization is any data that is used to make inferences about users' interests, and is used to select which content or ads are served based on those inferences.

**On-site targeting marketing action**: A marketing action that uses data for on-site ads, including the selection and delivery of advertisements on your organization's websites or apps, or to measure the delivery and effectiveness of such advertisements.

**Once**: In the context of scheduled file exports, schedules a one-time, on-demand, full file export.

**Overwrite save strategy**: The "Overwrite" save strategy is an option for ingesting third-party data via a connection, where you can specify if ingested data will be overwritten on a specified schedule.

## P

**Partial ingestion**: Partial ingestion enables ingestion of valid records of batch data within a specified error threshold. Error diagnostics for failed records can be downloaded or accessed in [!UICONTROL Monitoring] or [!UICONTROL Sources] dataflow run overview.

**Parquet files**: A Parquet file is a columnar storage file format with complex nested data structures. Parquet files are required for adding data to populate a schema dataset.

**Personalized offers**: A personalized offer is a customizable marketing message based on eligibility rules and constraints.

**Placements**: A placement is the location and or context in which an offer appears for an end-user.

**Policies workspace**: A workspace in the Platform UI that enables data stewards to view and manage data usage labels and policies for your organization. 

**Policy**: A data usage policy is a rule that specifies marketing actions that are restricted based on the application of usage labels applied to Platform data.

**Policy enforcement**: Allows you to enforce data usage policies with applied marketing actions to prevent data operations that constitute policy violations within an organization.

**Primary key**: A primary key is a designation in a schema to uniquely identify all records.

**Priority**: In [!DNL Offer Decisioning], priority is used to rank offers that meet all constraints, such as eligibility, calendar, and capping.

**Private identity graph**: The private identity graph (sometimes referred to as a private graph) is a private map of relationships between stitched and linked identities that is built based on your first-party data and is visible by only your organization. Only one private graph exists for each organization, and serves as the structural blueprint for the individual identity graphs generated for each customer that interacts with your brand.

**Product profile**: Product profiles enable administrators to grant user access to all or a subset of services associated with Experience Platform.

**Production sandbox**: A production sandbox is a sandbox intended for use in your production environment. Unlike non-production sandboxes, production sandboxes cannot be reset or deleted.

**Profile**: Not to be confused with Real-time Customer Profile as a service, a profile is a complete representation of an individual customer, constructed from merged record and time-series data from multiple sources.

**Profile access**: The `/entities` endpoint in the Real-time Customer Profile API allows you to access record data and time-series events in the Profile data store. See also: Profile entities

**Profile data**: Profile data refers to any data that is located within the Profile data store.

**Profile data store**: The Profile data store (sometimes called the Profile store) is a data storage system separate from the data lake, used by Real-time Customer Profile to create and store profiles. 

**Profile entities**: Profile entities represent attributes relating to an individual person, typically a customer. Entities that fall under this category should be represented by schemas based on the [!DNL XDM Individual Profile] class. See also: Profile access

**Profile export**: [!DNL Profile] export is one of the two types of destinations in Experience Platform. [!DNL Profile] export generates a file containing profiles and attributes, and uses raw PII data with email in order to integrate with marketing and email-automation platforms.

**Profile fragment**: A profile fragment is the profile information for just one identity out of the list of identities that exist for a particular customer. 

**Profile ID**: A profile ID is an auto-generated identifier associated with an identity type and represents a profile.

**Property**: In the context of tags, a property is a container for everything needed to deploy a set of tags.

## Q

**Query**: Queries are requests for data from database tables.

**Query Editor**: Query Editor is a tool for writing, validating, and submitting SQL statements in [!DNL Query Service].

## R

**Real-time Customer Data Platform**: [!DNL Real-time Customer Data Platform] brings together known and unknown customer data to create trusted customer profiles with simplified integration, intelligent segmentation, and real-time activation across the digital customer journey.

**Real-time Customer Profile**: Real-time Customer Profile (sometimes called Profile) provides a holistic view of each individual customer by combining data from multiple channels, including online, offline, CRM, and third party. Profile allows you to consolidate your customer data into individual profiles offering actionable, timestamped accounts of every customer interaction.

**Recipe**: A recipe is Adobe's term for a model specification and is a top-level container representing specific machine-learning processes, AI algorithms, processing logic, and configuration parameters required to build and execute a trained model and hence help solve specific business problems.

**Record**: A record is data that persists as rows in a dataset.

**Record data**: Provides information about the attributes of a subject. A subject could be an organization or an individual.

**Recurrence**: In [!DNL Query Service], a recurrence defines whether a query is scheduled to run only once or on a recurring basis.

**Representation**: In [!DNL Offer Decisioning], a representation is information used by a channel to display an offer, such as location or language.

**Resource**: In the context of tags, a resource is a generic term that refers to options the tagsa user can configure inside the client environment, including extensions, data elements, and rules.

**Role-based access control**: Role-based access control enables admins to assign access and permissions to users of Experience Platform. Permissions include the ability to view and/or use Experience Platform features, such as creating sandboxes, defining schemas, and managing datasets.

**Rule**: In the context of tags, a rule is a collection of components defining a specific set of events, conditions, and actions that should be grouped logically.

**Rule component**: In the context of tags, rule components are the events, conditions, and actions that make up a rule.

**Runtime**: Runtime specifies a runtime environment for a machine-learning recipe. [!DNL Python], R, [!DNL Spark], PySpark, and Tensorflow runtimes allow you to input a URL to a Docker image for a recipe source.

## S

**Sample data**: Sample data is a preview of a data file, typically the first 100 rows, which provides a data scientist or engineer an idea of what schema or data is in the data file.

**Sandbox**: A sandbox is a virtual construct that partitions a single Platform instance into a separate virtual environment, in order to help develop and evolve digital experience applications.

**Sandbox reset**: A sandbox reset deletes all data including data, profiles, and segments within a sandbox. Sandbox resets can affect data that is connected to internal or external destinations.

**Sandbox switcher**: The sandbox switcher control in Experience Platform allows users to navigate between sandboxes they have access to. Switching a sandbox will change all content and may alter feature access based on permissions.

**Schedule**: A schedule is a user-defined specification on frequency or cadence of data ingestion from a third-party data source to Adobe Experience Platform.

**Scoring**: Scoring is the process of generating insights from data using a trained model.

**Schema**: A schema is a set of rules that represent and validate the structure and format of data. A schema is comprised of a class and optional field group(s) and is used to create datasets and datastreams. A schema may include behavioral attributes, timestamps, identities, attribute definitions, relationships, and more.

**Schema field group**: In Experience Data Model (XDM), a schema field group allows users to extend reusable fields to define one or more attributes intended to be included in a schema.

**Schema Library**: The Schema Library contains industry-standard XDM resources made available by Adobe, as well as custom resources defined by your organization.

**Schema Registry**: The Schema Registry provides a user interface and RESTful API used to view and manage all schema-related resources in the Schema Library. 

**Secret access key**: A secret access key is an [!DNL Amazon] S3 key that is used in conjunction with the access key ID to sign AWS requests.

**Segment**: A segment is a set of rules that include attributes and event data that qualify a number of profiles to become an audience.

**Segment Builder**: The [!DNL Segment Builder] is a visual development environment used to build segment definitions. It serves as a common component of all applications using Experience Platform Segmentation Service.

**Segment definition**: A segment definition is the rule set used to describe the key characteristics or behavior of a target audience. Once conceptualized, the rules outlined in a segment definition are used to determine qualifying audience members for a segment.

**Segment evaluation method**: There are two segment evaluation methods: scheduled and on-demand. Scheduled evaluation enables a recurring schedule for running an export job at a specific time, whereas on-demand evaluation involves creating a segment job to build the audience immediately. 

**Segment export**: Segment export is one of the two types of destinations in Experience Platform. With segment export, you can send the profiles that qualify and have been mapped to the destination. Uses segment and user IDs and pseudonymous data and typically integrates with social networks and other digital media target platforms.

**Segment ID**: A segment ID is an auto-generated identifier associated with a segment.

**Segment membership**: Segment membership displays which segment(s) a profile is currently part of.

**Segment rules**: Segment rules define the conditions that determine whether a profile qualifies for a segment.

**Segmentation**: Segmentation is the process of dividing a large group of customers, prospects, or consumers into smaller groups that share similar attributes and will respond similarly to specific marketing strategies.

**Sensei ML Framework**: Sensei ML Framework is a unified machine-learning (ML) framework that leverages Experience Platform data to empower data scientists to development of ML-driven intelligence services in a faster, scalable, and reusable manner.

**Sensitive ("S") labels**: Sensitive ("S") labels are used to categorize data deemed sensitive, such as different types of behavioral or geographic data that you want marked as sensitive.

**Services**: A powerful framework to operationalize AI and ML services by leveraging Adobe Intelligent Services. Services deliver real-time, personalized customer experiences or operationalize custom intelligent services.

**Single identity personalization marketing action**: A marketing action that uses data for onsite content personalization. Onsite personalization is any data that is used to make inferences about users' interests, and is used to select which content or ads are served based on those inferences.

**S1 data usage label**: An `S1` data usage label is used to classify data specifying latitude and longitude that can be used to determine the precise location of a device.

**S2 data usage label**: An `S2` data usage label is used to classify data that can be used to determine a broadly defined geofence area.

**Source**: A source is a general term for any input connector in Platform. See also: Source connector

**Source attribute**: A source attribute is a field in source dataset. Source attributes are mapped to target schema fields.

**Source catalog**: The source catalog is the list of available source connectors in Experience Platform.

**Source category**: A source category is a grouping of sources that have similar characteristics.

**Source connector**: Source connectors (also known as sources) help users easily ingest data from multiple sources, allowing the structuring, labeling and enhancement of data using Experience Platform services. Data can be ingested from a variety of sources such as cloud-based storage, third party software, and CRM systems.

**Streaming connection**: A streaming connection is a unique endpoint provided by Adobe and tied to a customer's IMS Organization to stream data into Experience Platform.

**Standard identity namespace**: Standard identity namespaces are pre-defined identity namespaces provided by Adobe, which represent industry-standard solutions that are commonly employed to identify customers.

**Streaming ingestion**: Streaming ingestion allows you to send data from client- and server-side devices to Experience Platform in real time.

**Streaming segmentation**: Streaming segmentation is an ongoing data selection process that updates segments in response to user activity. Once a segment has been built and saved, the segment definition is applied against incoming data to [!DNL Real-time Customer Profile]. Segment additions and removals are processed regularly, ensuring your target audience remains relevant.

**System View**: System View is a visual representation of source datasets that flow through [!DNL Real-time Customer Profile] to destinations. 

## T

**Tags**: In Adobe Experience Platform, tags provide tools to deploy, unify, and manage analytics, marketing, and advertising integrations that are necessary to power relevant customer experiences on all client devices.

**Target features**: In feature mapping, a target feature is the feature that is predicted by a model.

**Time-series data**: Time-series data provides a snapshot of the system at the time an action was taken either directly or indirectly by a record subject.

**Trained model**: A trained model represents the executable output of a model-training process, in which a set of training data was applied to the model instance. A trained model will maintain a reference to any Intelligent Web Service that is created from it. A trained model is suitable for scoring and creating an intelligent web service.

**Token**: A token is a type of two-factor authentication security that can be used to authorize the use of computer services with [!DNL Query Service].

## U

**Union schema**: A union schema is a consolidation of schemas that share the same class and have been enabled for [!DNL Real-time Customer Profile]. Multiple union schemas can exist for an organization, but there can only be one union schema per class.

## V

## W

## X

**XDM**: See Experience Data Model (XDM).

**XDM Decision Event**: XDM Decision Event is a time-series-based class used to capture observations about the outcome and context of a decision activity. This includes information about how the decision was made, when it occurred, what options were proposed (and chosen), and what contextual state existed that either influenced the decision or could be observed during the decision process.

**XDM ExperienceEvent**: XDM ExperienceEvent is a time-series-based class used to capture the state of the system when an event (or set of events) occurred, including the point in time and identity of the subject involved. See also: Experience Event

**XDM Individual Profile**: XDM [!DNL Individual Profile] is a record-based class that forms a singular representation of the attributes of both identified and partially-identified subjects. Profiles that are highly identified may be used for personal communications or targeted engagements, and can contain detailed personal information such as name, gender, date of birth, location, and contact information including phone numbers and email addresses.

**XDM System**: XDM System represents the framework that operationalizes XDM schemas for use in downstream Experience Platform services.

## Y

## Z

---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Adobe Experience Platform glossary
topic: getting started
description: A glossary of important terminology in Experience Platform.
---

# Adobe Experience Platform glossary {#adobe-experience-platform-glossary}

## A

**Access control**: Role-based access control enables admins to assign access and permissions to users of Experience Platform. Permissions include the ability to view and/or use Experience Platform features, such as creating sandboxes, defining schemas, and managing datasets.

**Access key ID**: An access key ID is a unique identifier that's associated with an [!DNL Amazon] S3 secret access key. The access key ID and secret access key are used together to sign [!DNL Amazon Web Services] (AWS) requests.

**Action**: In [!DNL Adobe Experience Platform Launch], an action is a specific type of rule component that defines what should happen after an event occurs and conditions are evaluated and passed.

**Activate**: In [!DNL Real-time Customer Data Platform], activate is the action taken by a user to map a segment or profiles to a destination such as [!DNL Oracle Eloqua], [!DNL Google], or [!DNL Salesforce Marketing Cloud].

**Activity**: In [!DNL Offer Decisioning], an activity is a set of offers the marketer wants the decision engine to select the best offer from.

**Administrator**: One or more individuals in your organization who can configure and customize permissions for Experience Platform in Adobe Admin Console. 

**Adobe Admin Console**: Adobe Admin Console provides a central location for managing Adobe product entitlements and access for your organization. Through the console, administrators can grant groups of users access permissions for various Platform capabilities, such as "Manage Datasets", "View Datasets", or "Manage Profiles".

**Adobe Experience Platform**: Adobe Experience Platform standardizes data and content across the enterprise, powering real-time consumer profiles, enabling data science, and accelerating content velocity to drive experience personalization across the customer journey.

**Adobe Experience Platform Launch**: [!DNL Platform Launch] is a tag and SDK management ecosystem, integrated with [!DNL Experience Platform] and [!DNL Experience Cloud] applications. [!DNL Platform Launch] provides tools to deploy, unify, and manage analytics, marketing, and advertising integrations that are necessary to power relevant customer experiences on all client devices.

**Adobe Experience Platform Query Service**: Enables data analysts to query events and profiles for use in analytics and machine learning. With Query Service, data scientists and analysts can pull all of their datasets stored in Experience Platform (including behavioral data as well as point-of-sale (POS), customer relationship management (CRM), and more) and query those datasets to answer specific questions about the data.

**Adobe Experience Platform Segmentation Service**: Enables building segments and generate audiences from your Real-time Customer Profile data. These audiences can then be exported to their own datasets within the Data Lake.

**Adobe Intelligent Services**: Intelligent Services such as Attribution AI and Customer AI are machine-learning, artificial-intelligence-based models that are purpose-built and require Experience Platform to run and operate.

**Adobe I/O**: Adobe I/O is part of [!DNL Experience Platform] and provides access to everything developers need to integrate, extend, and customize Platform including APIs, events, developer console, and helpful tooling.

**Adobe Sensei**: Adobe Sensei is the intelligence framework that powers [!DNL Experience Platform]. It also provides a set of AI services that empowers brands to enhance their ability to deliver real-time, personalized customer experiences.

**Amazon S3 bucket**: [!DNL Amazon S3] buckets are the foundational containers for data stored in the [!DNL Amazon] ecosystem. Buckets contain objects, each object is stored and retrieved using a unique developer-assigned key.

**Amazon S3 connector**: The [!DNL Amazon] S3 connector allows customers of [!DNL Experience Platform] to securely connect and access their [!DNL Amazon] S3 data.

**Append save strategy**: The Append save strategy is an option used when specifying third-party data to ingest via a connection and appending any new data or rows at the end of the dataset. The previously ingested rows remain untouched and only rows created since the last scheduled run are ingested to [!DNL Experience Platform]. Any rows that were changed in the source system remain unchanged on [!DNL Experience Platform].

**Array**: Arrays are used for ordered elements with the same data type.

**Artificial intelligence**: Artificial intelligence is a theory and development of computer systems that are able to perform tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages.

**Attributes**: Attributes are specified characteristics that represent a profile.

**Attribute merge**: Attribute merge defines how a merge policy prioritizes profile attribute value in the case of data conflicts. 

**Attribution AI**: [!DNL Attribution AI] is an Adobe Sensei Service that delivers algorithmic multi-channel attribution capabilities across the entire customer lifecycle.

**Audience**: An audience or audience size is the resulting set of profiles that meet the criteria of a segment definition.

**Audience snapshot**: An audience snapshot captures all profiles who qualify for the segment criteria at the time of segmentation.

[Back to top](#adobe-experience-platform-glossary)

## B

**Backfill**: In [!DNL Real-time Customer Data Platform], in scheduled source connections, backfill enables ingestion of historical data.

**Backfill period**: The `Backfill period` is an option to set the length of time for ingesting third-party historical data via a connection. Selecting a backfill period of forever will ingest the entire history of the source data to [!DNL Experience Platform].

**Batch**: A batch is a set of data collected over a period of time and processed together as a single unit.

**Batch ID**: A batch ID is an Adobe-generated identifier for a batch of data.

**Batch ingestion**: Batch ingestion allows users to ingest petabytes of data and make it available within enterprise systems. With the latest technologies, users can now ingest any schema XDM and non-XDM into [!DNL Experience Platform].

**Batch segmentation**: Batch segmentation is an alternative to an ongoing data selection process and moves all profile data at once through segment definitions to produce corresponding audiences. Once created, this segment is saved and stored so it can be exported for use.

**Build**: In [!DNL Adobe Experience Platform Launch], a build is a deployed library. The build is a file or set of files that contain all the configurations and code needed to execute the business logic contained inside of that library.

**Business intelligence tools**: Business intelligence, also known as "BI" tools are primarily integrated with the [!DNL Experience Platform Query Service]. BI tools are types of application software that collect and process large amounts of unstructured data from internal and external systems.

[Back to top](#adobe-experience-platform-glossary)

## C

**Capping**: In [!DNL Offer Decisioning], capping is used in decisioning rules to define how many times an offer is presented. There are two types of caps: how many times an offer can be proposed across the combined target audience, also known as "Global Cap," and how many times an offer can be proposed to the same end user, also known as "Profile Cap".

**Catalog**: In [!DNL Real-time Customer Data Platform], in sources and destinations, a catalog is a gallery with available connections to Adobe applications and 3rd Party technologies.

**Class**: A class defines the smallest set of fields used to build a schema and is the base behavior that describes the business object.

**Client**: A client is an external tool or application which connects to [!DNL Query Service] via Postgres protocol or HTTP API.

**Collection**: In [!DNL Offer Decisioning], collections are subsets of offers based on predefined conditions defined by a marketer, such as category of the offer.

**Combine with PII marketing action**: A marketing action that combines any personally identifiable information (PII) with anonymous data. Contracts for data sourced from ad networks, ad servers, and third-party data providers often include specific contractual prohibitions on the use of such data with directly identifiable data.

**Command-line interface**: A command-line interface is a command line tool used to connect to [!DNL Query Service] for raw query execution.

**Composition**: A composition is a grouping of components that form together to make up the schema.

**Connection**: A connection is a virtual pipeline that enables data to flow in and out of [!DNL Experience Platform]. Connections are now replaced by Sources.

**Connector**: Adobe Experience Platform Source connectors help users easily ingest data from multiple sources, allowing the structuring, labeling and enhancement of data using [!DNL Experience Platform Services]. Data can be ingested from a variety of sources such as cloud-based storage, third party software, and CRM systems.

**Condition**: In [!DNL Adobe Experience Platform Launch], a condition is a rule component that evaluates a logical statement that must return `true` or `false`. All conditions must evaluate to `true` and all exception conditions must evaluate to `false` before any actions on the rule are executed.

**Console**: In [!DNL Query Service], the console provides information on the status and operation of a Query. The console displays the connection status to [!DNL Query Service], query operations being executed, and any error messages that result from those queries.

**Contract data "C" labels**: Contract `C` labels are used to categorize data that has contractual obligations or is related to a customer's data governance policies.

**C1 contract label**: A `C1` contract data usage label specifies data can only be exported from Adobe Experience Cloud in an aggregated form without including individual or device identifiers. For example, data that originated from social networks.

**C2 contract label**: A `C2` contract data usage label specifies data that cannot be exported to a third-party. Some data providers have terms in their contracts that prohibit the export of data from where it was originally collected.  For example, social networks contracts often restrict the transfer of data you receive from them. C2 is more restrictive than C1, which only requires aggregation and anonymous data.

**C3 contract label**: A `C3` contract data usage label specifies data that cannot be combined or otherwise used with directly identifiable information. Some data providers have terms in their contracts that prohibit the combination or use of that data with directly identifiable information.  For example, contracts for data sourced from ad networks, ad servers, and third-party data providers often include specific contractual prohibitions on the use of directly identifiable data.

**C4 contract label**: A `C4` contract data usage label specifies data cannot be used for targeting any ads or content, either on-site or cross-site. C4 is the most restrictive label as it encompasses C5, C6, and C7 labels.

**C5 contract label**: A `C5` contract data usage label specifies data cannot be used for interest-based, cross-site targeting of content or ads. Interest-based targeting, or personalization, occurs if the following three conditions are met:  The data collected on-site is used to make inferences about a user's interest, is used in another context, such as on another site or app and is used to select which content or ads are served based on those inferences.

**C6 contract label**: A `C6` contract data usage label specifies data cannot be used for on-site ad targeting. Data cannot be used for on-site ad targeting, including the selection and delivery of advertisements on your organization’s websites or apps or to measure the delivery and effectiveness of such advertisements.  This includes using previously collected on-site data about the users’ interest to select ads, process data about what advertisements were shown, when and where they were shown, and whether the users took any action related to the advertisement, such as selecting an ad or making a purchase.

**C7 contract label**: A `C7` contract data usage label specifies data cannot be used for on-site targeting of content.  Data cannot be used for on-site content targeting, including the selection and delivery of content on your organization’s websites or apps or to measure the delivery and effectiveness of such content.  This includes previously collected information about users’ interest to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the uses took any actions related to the content, including for example selecting content.

**C8 contract label**: A `C8` contract data usage label specifies data cannot be used for measurement of your organization’s websites or apps. Data cannot be used to measure, understand, and report on users’ usage of your organization’s sites or apps. This does not include interest-based targeting, which is the collection of information about your use of this service to subsequently personalize content and/or advertising in other contexts.

**C9 contract label**: A `C9` contract data usage label specifies data cannot be used in Data Science workflows. Some contracts include explicit prohibitions on data used for data science.  Sometimes these are phrased in terms that prohibit the use of data for artificial intelligence (AI), machine-learning (ML), or modeling.

**C10 contract label**: A `C10` contract data usage label specifies data data cannot be used for stitched identity activation. Some data usage policies restrict the use of stitched identity data for personalization. The C10 label is automatically applied to segments if their merge policies use the "private graph" option.

**Created Date column**: Selecting a `Created Date` column is an option when specifying third-party data via a connection. When the append save strategy is selected and the dataset contains a multiple dates related schema, the user must choose from the available date/time schema to specify a `Created Date` key column. `Created Date` option is not available when the overwrite save strategy is selected.

**Create Table as Select**: Create Table as Select is a SQL command which, when executed as a part of a complete and valid SQL query, will instruct the [!DNL Query Service] to persist the results of the query in a dataset on the Data Lake. Options include: Create New, Overwrite all Previous, and Append to Previous.

**Cross-site data**: Cross-site data is the combination of data from several sites, including a combination of on-site data and off-site data or a combination of data from several off-site sources.

**Cross-site targeting marketing action**: Uses data for cross-site ad targeting. The combination of data from several sites, including a combination of on-site data and off-site data or a combination of data from several off-site sources, is referred to as cross-site data. Cross-site data is typically collected and processed to make inferences about users' interests.

**Custom identity namespace**: Custom identity namespaces are customer created identifiers used to represent identities for a specific organization or business case.

**Custom labels**: Custom data governance labels enable users to create and apply specific labels to data fields that meet specific business needs.

**Customer AI**: Customer AI is an Adobe Sensei Service that enriches customer profiles with AI-based propensities and empowers customer segmentation and targeting efforts.

[Back to top](#adobe-experience-platform-glossary)

## D

**Data dictionary**: In [!DNL Adobe Experience Platform Launch], a data dictionary is a set of data elements defined within a property.

**Data element**: In [!DNL Adobe Experience Platform Launch], a data element is a pointer used within rules and extensions to point to a specific piece of data that exists on the client device.

**Data layer**: In [!DNL Adobe Experience Platform Launch], a data layer is a data structure that exists on the client device that contains metadata about the context in which a page or screen is viewed.

**Data mapping**: Data mapping is the process of mapping source data fields to destination related target fields.

**Data governance**: Data governance encompasses the strategies and technologies used to ensure data is in compliance with regulations and organization policies with respect to data usage.

**Data integration partners**: Data integration partners simplify and automate the loading and transformation of massive volumes of data from over 200 sources to [!DNL Experience Platform] without writing code.

**Dataset labels**: Data usage labels can be added to datasets. All fields within that dataset will inherit the dataset's labels.

**Data Science Workspace**: [!DNL Data Science Workspace] within [!DNL Experience Platform] enables customers to create machine learning models utilizing data across [!DNL Experience Platform] and Adobe applications to generate intelligent insights and predictions to weave delightful end-user digital experiences.

**Data source**: A data source is a user designated origin of data. Examples of a data source are a mobile app, profile and/or experience events, website profile events or a CRM.

**Data steward**: A data steward is the person responsible for the management, oversight, and enforcement of an organization's data assets. A data steward also ensures data governance policies are safeguarded and maintained to be compliant with government regulations and organization policies.

**Data stream**: A data stream is a set or collection of messages which share the same schema and are sent by the same source.

**Data type**: Data type is a reusable object with properties in a hierarchical representation.

**Data usage labels**: Data usage labels provide users the ability to categorize data that reflects privacy-related considerations and contractual conditions to be compliant with regulations and corporate policies. Data usage labels added to a dataset are inherited down or applied to all fields within that dataset. Data usage labels can also be applied directly to fields.

**Dataflow**: In [!DNL Real-time Customer Data Platform], a dataflow is a virtual pipeline of data that flows into [!DNL Platform] from a source and out to destinations. 

**Dataflow run**: A dataflow run is a dataflow that lands in Experience Platform based on a user specified schedule.

**Dataset**: A dataset is a storage and management construct for a collection of data, typically a table, that contains schema (columns) and fields (rows).

**Dataset ID**: An Adobe-generated identifier for an ingested dataset.

**Dataset output**: Dataset output provides a mechanism for determining what the Create Table as Select option will be used for a particular [!DNL Query Service] run.

**Delta column**: In [!DNL Real-time Customer Data Platform], delta column enables source data field selection for a timestamp for incremental ingestion

**Delta save strategy**: The `Delta save strategy` is an option for ingesting third-party data via a connection. The option allows the user to specify that new or changed rows of source data are ingested to [!DNL Experience Platform]. New rows are added to the end of the dataset and changed rows are updated in the dataset on [!DNL Experience Platform].

**Destination**: In [!DNL Real-time Customer Data Platform] a destination is a general term for any endpoint, such as an Adobe application, advertising platform, cloud storage service, or marketing service, where an audience is activated and delivered.

**Destination category**: A destination category is a grouping of [!DNL Real-time Customer Data Platform] destinations that have similar characteristics.

**Destination catalog**: A destination catalog is a list of available destinations in the [!DNL Real-time Customer Data Platform].

**Direct call rules**: In [!DNL Adobe Experience Platform Launch], you can set up a direct call rule that executes when it is called directly from the page. If your page load or your action on your site is very simple, or if it is unique and can execute a specific set of instructions every time (set [!DNL eVar4] to X and trigger [!DNL event2] every time), then you can use a direct call rule. See [!DNL Launch] documentation regarding creating direct call rules.

**Display name**: The display name is a user-friendly name of a field that is shown in the UI.

[Back to top](#adobe-experience-platform-glossary)

## E

**Eligible offer**: An eligible offer meets the constraints defined upstream that can be consistently offered to a profile.

**Eligible rules**: In [!DNL Offer Decisioning], eligibility rules are applied to a profile related to calendar, schedule, and capping constraints.

**Email targeting marketing action**: A marketing action that uses data in email targeting campaigns.

**Embed code**: In [!DNL Adobe Experience Platform Launch], the embed code is a script tag placed within the HTML on a site or environment. The embed code instructs the browser where to retrieve the build.

**Enumeration**: An enumeration (enum) is a list of values that represent the valid data for a field.

**Environment**: In [!DNL Adobe Experience Platform Launch], an environment is a set of deployment instructions that specifies the host delivery and file format of a build. A library must be paired with an environment before it can be built.

**Error diagnostics**: Error diagnostics enables the generation of detailed error messages for ingested batches. The Error threshold enables the configuration of the percentage of acceptable errors before the entire batch will fail.

**Event**: In [!DNL Adobe Experience Platform Launch], an event is a specific type of rule component, a trigger that occurs on a client device to begin the execution of a rule.

**Event entities**: Event entities represent concepts related to actions a customer can take, system events, or any other concept where you may want to track changes over time. Entities that fall under this category should be represented by schemas based on the XDM ExperienceEvent class.

**Events**: Events are the behavior data associated with a profile.

**Experience Data Model (XDM)**: [!DNL Experience Data Model] (XDM) is the concept of using standard schemas to unify data for use with [!DNL Experience Platform] and Adobe Experience Cloud applications. XDM standardizes how data is structured and speeds up and simplifies the process of gaining insights from massive amounts of data.

**Experiment**: An experiment is a process of creating a trained model by training the instance with a sample portion of the live production data.

**Experiments**: Experiments is the process of applying a trained model to a small portion of the live production data to validate its performance. This is different from a trained model that is tested against a holdout test dataset. This is also different from the concept of an Experiment in some ML frameworks where it actually means a sample modeling project.

**ExperienceEvent**: An ExperienceEvent is an [!DNL Experience Platform] standard schema that captures observations, including the point in time and identity of the subject involved. Experience Events are fact records of what occurred, representing what happened without aggregation or interpretation.

**Extension**: In [!DNL Adobe Experience Platform Launch], an extension is a package of functionality added to a [!DNL Platform Launch] property.  An extension is usually focused around a particular marketing or analytics solution and provides the tools needed to deploy that technology into a client environment.

**Extension package**: In [!DNL Adobe Experience Platform Launch], an extension package is a .zip file created and uploaded by an extension developer that provides everything necessary for [!DNL Platform Launch] users to install the extension inside their property.  An extension package contains a manifest specifying information about the extension, HTML, and JavaScript needed for end-users to configure the behavior of the [!DNL Platform Launch] extension and the executable JavaScript delivered to the client environment, if required.

[Back to top](#adobe-experience-platform-glossary)

## F

**Fallback offers**: A fallback offer is the default offer displayed when an end-user is not eligible for any of the offers in the collection used.

**Feature mapping**: Feature mapping refers to the process of mapping features from data into input and target features that are required by a machine learning model.

**Field**: A field is the lowest level element of a dataset. Each field has a name for referencing and a type to identify the type of data that it contains. Field types can include, integer, number, string, boolean, and schema.

**Field labels**: Field labels are data governance labels that are either inherited from a dataset or applied directly to a field.

**Field name**: Field is a name used to reference the field in queries and services.

**Frequency**: Frequency determines how often a recurring scheduled [!DNL Query Service] query will run.

[Back to top](#adobe-experience-platform-glossary)

## G

**Geofence**: A geofence is a virtual geographic boundary, defined by GPS or RFID technology, that enables software to trigger a response when a mobile device enters or leaves a particular area.

**GDPR (General Data Protection Regulation)**: The General Data Protection Regulation (GDPR) is a legal framework that sets guidelines for the collection and processing of personal information of individuals within the European Union (EU). The GDPR sets out the principles for data management and the rights of the individual and covers all companies that deal with the data of EU citizens.

**GDPR data usage label**: GDPR data usage label is used to define the fields that may contain personal identifiers for use in GDPR access and/or delete requests.

[Back to top](#adobe-experience-platform-glossary)

## H

**Host**: In [!DNL Adobe Experience Platform Launch], a host specifies the location, domain, and user credentials necessary for [!DNL Platform Launch] to deliver a build.

[Back to top](#adobe-experience-platform-glossary)

## I

**Identity**: Identity is an identifier such as a cookie ID, device ID, or email ID that uniquely represents an end customer.

**Identity fields**: Identity fields are XDM fields marked as identities and are used to stitch together information about individual customers coming from multiple data sources. A single primary identity must be defined in order for the schema to be enabled for use in Real-time Customer Profile.

**Identity "I" labels**: `Identity I` data usage labels are used to categorize data that can identify or contact a specific person.

**Identity graph**: Identity graph is a map of relationships between stitched and linked identities, that updates near real-time with customer activity.

**Identity namespace**: An identity namespace defines the context of an identifier such as an email address or CRM ID.

**Identity Service**: [!DNL Experience Platform Identity Service] UI enables the creation and management of identity types to enable linking of identities across devices and channels for a complete user-view from [!DNL Real-time Customer Profile].

**Identity stitching**: Identity stitching is the process of identifying data fragments and stitching them together to form a complete record of a profile.

**Identity symbol**: An identity symbol is an abbreviation of an identity namespace that can be used as a reference in APIs.

**Identity value**: An identity value is an identifier that represents a unique individual, organization, or asset. When matching record data across profile fragments the namespace and identity value must match.

**I1 data usage label**: The `I1` data usage label is used to classify directly identifiable data that can identify or contact a specific person rather than a device.

**I2 data usage label**: The `I2` data usage label is used to classify indirectly identifiable data that can be used in combination with any other data to identify or contact a specific person.

**Ingestion**: Ingestion is the process of adding data from a source to [!DNL Experience Platform]. Data can be ingested to [!DNL Experience Platform] in a number of ways including streamed, batched, or added via connector.

**Ingestion schedule**: An ingestion schedule provides time-based options when ingesting from a source to [!DNL Experience Platform].

**Input feature**: Input feature is specified in feature mapping and is used by a machine learning model to make predictions.

**[!DNL Intelligent Services]**: [!DNL Intelligent Services] such as [!DNL Attribution AI] and [!DNL Customer AI] are machine learning, artificial intelligence based purpose-built models that require the [!DNL Experience Platform] to run and operate.

**Interest-based targeting or personalization**: Interest-based targeting, also known as personalization, occurs if the following three conditions are met: data collected on-site is used to make inferences about a user's interest, data is used in another context such as on another site or app (off-site), and if data is used to select which content or ads are served based on those inferences.

[Back to top](#adobe-experience-platform-glossary)

## J

**[!DNL JupyterLab]**: An open-source web-based interface for Project [!DNL Jupyter] and is tightly integrated into [!DNL Experience Platform].

**[!DNL Jupyter Notebook]**: An open-source web application that enables users to create and share documents that contain live code, equations, visualizations, and narrative text.

## K

[Back to top](#adobe-experience-platform-glossary)

## L

**Library**: In [!DNL Adobe Experience Platform Launch], a library is a set of business logic that contains instructions for how the [!DNL Platform Launch] library should behave on the client device.

**Lookup entities** Lookup entities represent concepts that can relate to an individual person, but cannot be directly used to identify the individual. Entities that fall under this category should be represented by schemas based on custom classes.

[Back to top](#adobe-experience-platform-glossary)

## M

**Machine learning (ML)**: Machine learning is the field of study that enables computers the ability to learn without being explicitly programmed.

**Machine learning model**: A machine learning model is an instance of a machine learning recipe that is trained using historical data and configurations to solve for a business use case. In Adobe [!DNL Data Science Workspace], machine learning models are called recipes.

**Mapping**: In [!DNL Real-time Customer Data Platform], data mapping is the process of mapping source data fields to destination related target fields. 

**Marketing action**: A marketing action, also known as marketing use cases, in the context of the data governance framework, is an action that an [!DNL Experience Platform] data consumer takes, for which there is a need to check for violations of data usage policies.

**Merge method**: A `merge method` is a merge policy option that enables prioritization of merging of data fragments. The merge method options are merge by dataset precedence or by dataset timestamp.

**Merge policy**: A merge policy is a set are rules used by [!DNL Profile] to determine how data will be prioritized and combined into a unified view under certain conditions.

**Mixin**: A mixin allows users to extend reusable fields that contain variables defining one or more attribute intended to be included in a schema or added to a class.

**Modified Date column**: Selecting a `Modified Date` column is an option when specifying third-party data via a connection. When the `Delta` save strategy is selected and the dataset contains multiple date related schema, the user must choose from the available date/time type schema to specify modified date key column. `Modified Date` option is not available when the `Overwrite` save strategy is selected.

**Module**: In [!DNL Adobe Experience Platform Launch], a module is a snippet of executable JavaScript provided by an extension, which performs actions in a client environment without the need for the [!DNL Platform Launch] user to create a rule.

[Back to top](#adobe-experience-platform-glossary)

## N

**Non-production sandbox**: Non-production sandboxes are a form of data virtualization that allow you to isolate data from other sandboxes and are typically used for development experiments, testing, or trials. Non-production sandboxes can be reset and deleted.

**[!DNL Notebooks]**: [!DNL Notebooks] are authored using [!DNL Jupyter Notebook] and contain analysis description, results, and can be run to perform data analysis.

[Back to top](#adobe-experience-platform-glossary)

## O

**Offer**: An offer is a marketing message that may have rules associated with it, specifying who is eligible to see the offer.

**[!DNL Offer Decisioning]**: [!DNL Offer Decisioning] enables a marketer to manage rules and trained models of offer propositions when engaging with an end-user based on data collected across channels and applications.

**Offer library**: The offer library is a central library used to manage personalized and fallback offers, decision rules, and activities.

**On-site personalization marketing action**: A marketing action that uses data for on-site content personalization. On-site personalization is any data that is used to make inferences about users' interests, and is used to select which content or ads are served based on those inferences.

**On-site targeting marketing action**: A marketing action that uses data for on-site ads, including the selection and delivery of advertisements on your organization's websites or apps, or to measure the delivery and effectiveness of such advertisements.

**Organization**: An Organization is the name used to identify a company or a specific group within a company across Adobe products. Administrators can configure and manage access and permissions of features to users of an Organization. 

**Overwrite save strategy**: The `Overwrite` save strategy is an option for ingesting third-party data via a connection, where the user specifies if ingested data will be overwritten on a specified schedule. [!DNL Experience Platform] will ingest the specified dataset from the 3rd party source and overwrite the dataset on [!DNL Experience Platform].

[Back to top](#adobe-experience-platform-glossary)

## P

**Partial batch ingestion**: Partial batch ingestion is the ability to ingest data containing errors, up to a certain threshold. 

**Partial ingestion**: Partial ingestion enables ingestion of valid records of batch data within a specified error threshold. Error diagnostics for failed records can be downloaded or access in Monitoring or Sources dataflow run overview.

**Parquet files**: A Parquet file is a columnar storage file format with complex nested data structures. Parquet files are required for adding data to populate a schema dataset.

**Personalized offers**: A personalized offer is a customizable marketing message based on eligibility rules and constraints.

**Placements**: A placement is the location and or context in which an offer appears for an end-user.

**Policies workspace**: Enables data stewards to view and manage core and custom labels for your organization. 

**Policy**: A data usage policy is a rule that specifies marketing actions that are restricted based on the application of data usage labels on data in [!DNL Experience Platform].

**Policy enforcement**: Enables enforcement of data usage policies with applied marketing actions to prevent data operations that constitute policy violations within an organization.

**Primary key**: A primary key is a designation in a schema to uniquely identify all records.

**Priority**: In [!DNL Offer Decisioning], priority is used to rank offers that meet all constraints, such as eligibility, calendar, and capping.

**Private Identity Graph**: Private Identity Graph is a private map of relationships between stitched and linked identities that visible by only your organization and built based on your first-party data.

**Product profile**: Product profiles enable administrators to grant user access to all or a subset of services associated with [!DNL Experience Platform].

**Production sandbox**: A production sandbox of isolating virtual data on Platform that can't be reset or deleted.

**Profile**: {#profile} Not to be confused with [Real-time Customer Profile](#rtcp), a profile is the output of [!DNL Identity Service] and [!DNL Real-time Customer Profile] data, taking ingested profile data with identity fields and constructing a representation of a person.

**Profile data**: Profile data is data ingested under the XDM Individual Profile class. This data typically describes customer attributes, as opposed to event data.

**Profile entities**: Profile entities represent attributes relating to an individual person, typically a customer. Entities that fall under this category should be represented by schemas based on the XDM Individual Profile class.

**Profile export**: [!DNL Profile] export is one of the two types of destinations in [!DNL Real-time Customer Data Platform]. [!DNL Profile] export generates a file containing profiles and attributes, and uses raw PII data with email and is used to integrate with marketing and email automation platforms.

**Profile fragment**: A profile fragment is the profile information for just one identity out of the list of identities that exist for a particular user. 

**Profile ID**: A profile ID is an auto-generated identifier associated with an identity type and represents a profile.

**Property**: In [!DNL Adobe Experience Platform Launch], a property is a container for everything needed to deploy a set of tags.

[Back to top](#adobe-experience-platform-glossary)

## Q

**Queries**: A query is a request for data from database tables.

**Query Editor**: Query Editor is a tool for writing, validating, and submitting SQL statements in [!DNL Query Service].

**Query Service for Adobe Experience Platform**: [!DNL Experience Platform Query Service] enables data analysts to query [!DNL ExperienceEvents] and XDMs for use in analytics and machine learning. With [!DNL Query Service], data scientists and analysts will be able to pull all of their datasets stored in [!DNL Experience Platform] – including behavioral data as well as point-of-sale (POS), customer relationship management (CRM), and more – and query those datasets to answer specific questions about the data.

[Back to top](#adobe-experience-platform-glossary)

## R

**Real-time Customer Data Platform**: Adobe's [!DNL Real-time Customer Data Platform] brings together known and unknown customer data to create trusted customer profiles with simplified integration, intelligent segmentation, and real-time activation across the digital customer journey.

**Real-time Customer Profile**:{#rtcp} Not to be confused with a generic [profile](#profile), [!DNL Real-time Customer Profile], often referred to as "Profile", is a generic lookup entity store that merges data from various enterprise data assets, and then provides access to that data in the form of individual customer profiles and related time series events. This feature enables marketers to drive coordinated, consistent and relevant experiences with their audiences across multiple channels.

**Recipe**: A recipe is Adobe's term for a model specification and is a top-level container representing a specific machine learning, AI algorithm or ensemble of algorithms, processing logic, and configuration required to build and execute a trained model and hence help solve specific business problems.

**Record**: A record is data that persists as rows in a dataset.

**Record data**: Provides information about the attributes of a subject. A subject could be an organization or an individual.

**Recurrence**: A recurrence defines whether a [!DNL Query Service] query is scheduled to run only once or on a recurring basis.

**Representation**: In [!DNL Offer Decisioning], a representation is information used by a channel, such as location or language to display an offer.

**Resource**: In [!DNL Adobe Experience Platform Launch], a resource is a generic term that refers to options the [!DNL Platform Launch] user can configure inside the client environment, including extensions, data elements, and rules.

**Role-based access control**: Role-based access control enables admins to assign access and permissions to users of [!DNL Experience Platform]. Permissions include the ability to view and/or use [!DNL Experience Platform] features, such as creating sandboxes, defining schemas, and managing datasets.

**Rule**: In [!DNL Adobe Experience Platform Launch], a rule is a collection of rule components defining a specific set of events, conditions, and actions that should be grouped logically.

**Rule component**: In [!DNL Adobe Experience Platform Launch], rule components are the events, conditions, and actions that make up a rule.

**Runtime**: Runtime specifies a runtime environment for a machine learning recipe. [!DNL Python], R, [!DNL Spark], PySpark, and Tensorflow runtimes enable input of a URL to a docker image for a recipe source.

[Back to top](#adobe-experience-platform-glossary)

## S

**Sample data**: Sample data is a preview of a data file, typically the first 100 rows, to provide a data scientist or engineer an idea of what schema or data is in the data file.

**Sandbox**: A sandbox is a form of isolating virtual data within a users org on [!DNL Experience Platform].

**Sandbox reset**: A sandbox reset deletes all data including data, profiles, and segments within a sandbox. Sandbox resets can affect data that is connected to internal or external destinations.

**Sandbox switcher**: The sandbox switcher control in [!DNL Experience Platform] allows users to navigate between sandboxes they have access to. Switching a sandbox will change all content and may alter feature access based on permissions.

**Schedule**: A schedule is a user-defined specification on frequency or cadence of data ingestion from a third-party data source to Adobe [!DNL Experience Platform].

**Scoring**: Scoring is the process of generating insights from data using a trained model.

**Schema**: A schema is a set of rules that represent and validate the structure and format of data. A schema is comprised of a class and optional mixin(s) and is used to create datasets and datastreams. A schema includes behavioral attributes, timestamp, identity, attribute definitions, and relationships.

**Schema descriptor**: A schema descriptor is an additional schema related metadata that describes behavior that can be used by [!DNL Experience Platform] to understand intended schema behavior such as the relationship between two schemas.

**Schema Library**: The Schema Library contains industry-standard resources made available by Adobe, Experience Platform partners, and vendors.

**Schema Registry**: The Schema Registry provides a user interface and RESTful API used to view and manage all schema-related resources in the [!DNL Experience Platform Schema Library]. 

**Secret access key**: A secret access key is an [!DNL Amazon] S3 key that is used in conjunction with the access key ID to sign AWS requests.

**Segment**: A segment is a set of rules that include attributes and event data that qualify a number of profiles to become an audience.

**Segment Builder**: [!DNL Segment Builder] is the visual development environment used to build segment definitions and serves as a common component of all applications using [!DNL Segmentation Service] on [!DNL Experience Platform].

**Segment definition**: A segment definition is the rule set used to describe key characteristics or behavior of a target audience. Once conceptualized, the rules outlined in a segment definition are used to determine qualifying audience members for a segment.

**Segment evaluation method**: A segment scheduled evaluation enables a recurring schedule for running an export job at a specific time, whereas on-demand evaluation involves creating a segment job to build the audience immediately. 

**Segment export**: Segment export is one of the two types of destinations in [!DNL Real-time Customer Data Platform]. With segment export, you can send the profiles that qualify and have been mapped to the destination. Uses segment and user IDs and pseudonymous data and typically integrates with social networks and other digital media target platforms.

**Segment ID**: A segment ID is an auto-generated identifier associated with a segment.

**Segment membership**: Segment membership displays which segment a profile is currently part of.

**Segment rules**: Segment rules are where and how the user defines what the profiles qualify for the segment.

**Segment type**: There are two types of segments: One is a segment that updates dynamically with [!DNL Experience Platform] data changes, and the other is an audience snapshot that captures all profiles meeting segment rules, and these don't change.

**Segmentation**: Segmentation is the process of dividing a large group of customers, prospects, or consumers into smaller groups that share similar attributes and will respond similarly to marketing strategies.

**Sensei ML Framework**: Sensei ML Framework is a unified machine learning framework across Adobe that leverages data on [!DNL Experience Platform] to empower data scientists in the development of machine learning driven intelligence services in a faster, scalable, and reusable manner.

**Sensitive labels**: Sensitive “S” labels are used to categorize data deemed sensitive, such as different types of behavioral or geographic data that you want marked as sensitive.

**Services**: A powerful framework to operationalize AI and ML services by leveraging Adobe Intelligent Services. Services deliver real-time, personalized customer experiences or operationalize custom intelligent services.

**Single identity personalization marketing action**: A marketing action that uses data for onsite content personalization. Onsite personalization is any data that is used to make inferences about users' interests, and is used to select which content or ads are served based on those inferences.

**S1 data usage label**: An `S1` data usage label is used to classify data specifying latitude and longitude that can be used to determine the precise location of a device.

**S2 data usage label**: An `S2` data usage label is used to classify data that can be used to determine a broadly defined geo-fence area.

**Source**: Source is a general term for any input connector in the [!DNL Real-time Customer Data Platform].

**Source attribute**: A source attribute is a field in source dataset.  Source attributes are mapped to target schema fields.

**Source catalog**: A source catalog is a list of available sources in the [!DNL Real-time Customer Data Platform].

**Source category**: A source category is a grouping of [!DNL Real-time Customer Data Platform] sources that have similar characteristics.

**Source connector**: Adobe Experience Platform Source connectors help users easily ingest data from multiple sources, allowing the structuring, labeling and enhancement of data using [!DNL Experience Platform Services]. Data can be ingested from a variety of sources such as cloud-based storage, third party software, and CRM systems.

**Streaming connection**: A streaming connection is a unique endpoint provided by Adobe and tied to a customer's IMS Organization to stream data into [!DNL Experience Platform].

**Standard identity namespace**: Standard identity namespaces are Adobe pre-defined identifiers, including Adobe and industry standard solutions employed to identify users.

**Standard schema**: Standard schemas consist of classes and mixins and are intended for reuse.

**Streaming ingestion**: Streaming ingestion provides users a method to send data from client and server-side devices to [!DNL Experience Platform] in real-time.

**Streaming segmentation**: Streaming segmentation is an ongoing data selection process that updates segments in response to user activity. Once a segment has been built and saved, the segment definition is applied against incoming data to [!DNL Real-time Customer Profile]. Segment additions and removals are processed regularly, ensuring your target audience remains relevant.

**Symbol**: A symbol is an abbreviation of an identity namespace that can be used as a reference in APIs.

**System View**: System View is a visual representation of source datasets that flow through [!DNL Real-time Customer Profile] to destinations. 

[Back to top](#adobe-experience-platform-glossary)

## T

**Target features**: Target feature is specified in feature mapping is the feature that is predicted by a model.

**Time series data**: Time series data provides a snapshot of the system at the time an action was taken either directly or indirectly by a record subject.

**Trained model**: A trained model represents the executable output of a model training process, in which a set of training data was applied to the model instance. A trained model will maintain a reference to any Intelligent Web Service that is created from it. The trained model is suitable for scoring and creating an intelligent web service. Modifications to a trained model can be tracked as a new version.

**Token**: A token is a type of two-factor authentication security that can be used to authorize the use of computer services with [!DNL Query Service].

**Type**: Type is the class of machine learning problem a recipe is designed for and is used after training to help tailor evaluating the training run.

[Back to top](#adobe-experience-platform-glossary)

## U

**Union schema**: A union schema is a consolidation of schemas that have been enabled for [!DNL Real-time Customer Profile].

[Back to top](#adobe-experience-platform-glossary)

## V

[Back to top](#adobe-experience-platform-glossary)

## W

[Back to top](#adobe-experience-platform-glossary)

## X

**XDM (Experience Data Model)**: XDM (Experience Data Model) is the concept of using standard schemas to unify data for use with [!DNL Experience Platform] and Adobe Experience Cloud applications. XDM is a formal specification used to represent all customer experience data in a single language or standard data model and standardizes how data is structured and speeds up and simplifies the process of gaining insights from massive amounts of data.

**XDM DecisionEvent**: A DecisionEvent is used to capture observations about the outcome and context of a decision activity, including information about how the decision was made, when it occurred, what options were proposed (and chosen) and what contextual state existed that either influenced the decision or could be observed during the decision process. DecisionEvents also capture the proposition ID, a globally unique identifier that can be used to correlate the decision to other events. DecisionEvents are not only relatable to Experience Events that impacted a decision but also to ExperienceEvents that are a direct response to a proposition. It is the expectation that applications reference the proposition ID in every ExperienceEvent that was influenced by the propositions. The proposition-response history in an individual profile is maintained using proposition IDs.

**XDM ExperienceEvent**: XDM ExperienceEvent is a time-series-based class used to capture the state of the system when an event (or set of events) occurred, including the point in time and identity of the subject involved. Experience Events are fact records of what occurred and are immutable and represent what happened without aggregation or interpretation. 

**XDM Individual Profile**: XDM [!DNL Individual Profile] is a record-based class that forms a singular representation of the attributes of both identified and partially-identified subjects. Profiles that are highly identified may be used for personal communications or targeted engagements, and can contain detailed personal information such as name, gender, date of birth, location, and contact information including phone numbers and email addresses.

**XDM System**: XDM is a publicly documented specification designed to improve the power of digital experiences. It provides common structures and definitions for any application to use to communicate with [!DNL Experience Platform] services. 

[Back to top](#adobe-experience-platform-glossary)

## Y

[Back to top](#adobe-experience-platform-glossary)

## Z

[Back to top](#adobe-experience-platform-glossary)

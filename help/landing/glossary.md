---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Adobe Experience Platform product documentation
topic: getting started
---

# Adobe Experience Platform Glossary {#adobe-experience-platform-glossary}

## A

**Access Control:** {#access-control} Access control for [!DNL Experience Platform] links users with access permissions and sandbox environments through product profiles in Adobe Admin Console.

**Access key ID:** Access key ID is a unique identifier that's associated with an [!DNL Amazon] S3 secret access key. The access key ID and secret access key are used together to sign AWS requests.

**Action:** In [!DNL Experience Platform Launch], an action is a specific type of rule component that defines what should happen after an event occurs and conditions are evaluated and passed.

**Activate:** In [!DNL Real-time Customer Data Platform], activate is the action taken by a user to map a segment or profiles to a destination such as [!DNL Oracle Eloqua], [!DNL Google], or [!DNL Salesforce Marketing Cloud].

**Activity:** In the [!DNL Decisioning Service], an activity is a set of offers the marketer wants the decision engine to select the best offer from.

**Administrator:** One or more individuals in your organization who can configure and customize the permissions for Experience Platform. 

**Adobe Admin Console:** Adobe Admin Console provides a central location for managing Adobe product entitlements and access for your organization. Through the console, administrators can grant groups of users access permissions for various Platform capabilities, such as "Manage Datasets", "View Datasets", or "Manage Profiles".

**Adobe Connectors:** Adobe Connectors are pre-configured connections created by Adobe to enable data to flow in and out of [!DNL Experience Platform]. Connectors include [!DNL Microsoft Dynamics], [!DNL Salesforce], [!DNL Amazon S3], and [!DNL Azure Blob].

**Adobe Experience Platform:** Adobe Experience Platform standardizes data and content across the enterprise, powering real-time consumer profiles, enabling data science, and accelerating content velocity to drive experience personalization across the customer journey.

**Adobe Experience Platform Decisioning Service** Leverages Real-time Customer Profile to determine the most likely choice a customer will make from a set of options, based on the behavioral data that Profile pulls from enabled datasets.

**Adobe Experience Platform Launch:** [!DNL Launch] is a tag and SDK management ecosystem, integrated with [!DNL Experience Platform] and [!DNL Experience Cloud] applications. [!DNL Launch] provides tools to deploy, unify, and manage analytics, marketing, and advertising integrations that are necessary to power relevant customer experiences on all client devices.

**Adobe Experience Platform Launch Extensions:** [!DNL Experience Platform Launch] extensions enable delivery of raw event data directly to [!DNL Real-time Customer Data Platform] destinations. Installing [!DNL Launch] extensions requires access to [!DNL Launch] properties.

**Adobe Experience Platform Query Service** Enables the use of standard SQL to query data in Experience Platform, joining any datasets within the Data Lake and capturing query results as a new dataset for use in reporting, Data Science Workspace, or Real-time Customer Profile.

**Adobe Experience Platform Segmentation Service** Enables building segments and generate audiences from your Real-time Customer Profile data. These audiences can then be exported to their own datasets within the Data Lake.

**Adobe Intelligent Services:** Adobe Sensei is the intelligence framework that powers [!DNL Experience Platform]. It also provides a set of AI services that empowers brands to enhance their ability to deliver real-time, personalized customer experiences.

**Adobe I/O:** Adobe I/O is part of [!DNL Experience Platform] and provides access to everything developers need to integrate, extend, and customize Adobe Experience Platform including APIs, events, developer console, and helpful tooling.

**Adobe Sensei:** Adobe Sensei is the intelligence framework that powers [!DNL Experience Platform]. It also provides a set of AI services that empowers brands to enhance their ability to deliver real-time, personalized customer experiences.

**Amazon S3 bucket:** [!DNL Amazon S3] buckets are the foundational containers for data stored in the [!DNL Amazon] ecosystem. Buckets contain objects, each object is stored and retrieved using a unique developer-assigned key.

**Amazon S3 connector:** [!DNL Amazon] S3 connector allows customers of [!DNL Experience Platform] to securely connect and access their [!DNL Amazon] S3 data.

**Analytics Marketing Action:** A marketing action that uses data for analytics purposes, such as measuring, analyzing, and reporting on customers' usage of your organization's sites or apps.

**Append Save Strategy:** The `Append` save strategy is an option used when specifying third-party data to ingest via a connection and appending any new data or rows at the end of the dataset. The previously ingested rows remain untouched and only rows created since the last scheduled run are ingested to [!DNL Experience Platform]. Any rows that were changed in the source system remain unchanged on [!DNL Experience Platform].

**Application Lifecycle Management:** Application lifecycle management enables the ability to create separate virtual environments to develop and evolve digital experience applications.

**Array:** Arrays are used for ordered elements with the same data type.

**Artificial Intelligence:** Artificial intelligence is a theory and development of computer systems that are able to perform tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages.

**Attributes:** Attributes are specified characteristics that represent a profile.

**Attribute Merge:** Attribute merge defines how a merge policy prioritizes profile attribute value in the case of data conflicts. 

**Attribution AI:** [!DNL Attribution AI] is an Adobe Sensei Service that delivers algorithmic multi-channel attribution capabilities across the entire customer lifecycle.

**Audience**: An audience or audience size is the resulting set of profiles that meet the criteria of a segment definition.

**Audience Snapshot**: An audience snapshot captures all profiles who qualify for the segment criteria at the time of segmentation.

[Back to top](#adobe-experience-platform-glossary)

## B

**Backfill:** In [!DNL Real-time Customer Data Platform], in scheduled source connections, backfill enables ingestion of historical data.

**Backfill Period:** `Backfill period` is an option to set the length of time for ingesting third-party historical data via a connection. Selecting a backfill period of forever will ingest the entire history of the source data to [!DNL Experience Platform].

**Batch:** Batch is a set of data collected over a period of time and processed together as a single unit.

**Batch ID:** Batch ID is an Adobe-generated identifier for a batch of data.

**Batch Ingestion:** Batch ingestion allows users to ingest petabytes of data and make it available within enterprise systems. With the latest technologies, users can now ingest any schema XDM and non-XDM into [!DNL Experience Platform].

**Batch Segmentation:** Batch segmentation is an alternative to an ongoing data selection process and moves all profile data at once through segment definitions to produce corresponding audiences. Once created, this segment is saved and stored so it can be exported for use.

**Build:** In [!DNL Experience Platform Launch], a build is a deployed library. The build is a file or set of files that contain all the configurations and code needed to execute the business logic contained inside of that library.

**Business Intelligence Tools:** Business intelligence, also known as "BI" tools are primarily integrated with the [!DNL Experience Platform Query Service]. BI tools are types of application software that collect and process large amounts of unstructured data from internal and external systems.

[Back to top](#adobe-experience-platform-glossary)

## C

**Capping:** In the [!DNL Decisioning Service], capping is used in decisioning rules to define how many times an offer is presented. There are two types of caps, how many times an offer can be proposed across the combined target audience, also known as "Global Cap" and how many times an offer can be proposed to the same end user, also known as "Profile Cap".

**Catalog:** In [!DNL Real-time Customer Data Platform], in sources and destinations, a catalog is a gallery with available connections to Adobe applications and 3rd Party technologies.

**Class:** A class defines the smallest set of fields used to build a schema and is the base behavior that describes the business object.

**Client:** A client is an external tool or application which connects to [!DNL Query Service] via postgres protocol or HTTP API.

**Collection:** In the [!DNL Decisioning Service], collections are subsets of offers based on predefined conditions defined by a marketer, such as category of the offer.

**Combine with PII Marketing Action** A marketing action that combines any personally identifiable information (PII) with anonymous data. Contracts for data sourced from ad networks, ad servers, and third-party data providers often include specific contractual prohibitions on the use of such data with directly identifiable data.

**Command Line Interface:** Command Line Interface is a command line tool used to connect to [!DNL Query Service] for raw query execution.

**Composition**: A composition is a grouping of components that form together to make up the schema.

**Connection:** A connection is a virtual pipeline that enables data to flow in and out of [!DNL Experience Platform]. Connections are now replaced by Sources.

**Connector:** Adobe Experience Platform Source connectors help users easily ingest data from multiple sources, allowing the structuring, labeling and enhancement of data using [!DNL Experience Platform Services]. Data can be ingested from a variety of sources such as cloud-based storage, third party software, and CRM systems.

**Condition:** In Experience Platform Launch, a condition is a rule component that evaluates a logical statement that must return `true` or `false`. All conditions must evaluate to `true` and all exception conditions must evaluate to `false` before any actions on the rule are executed.

**Console:** In [!DNL Query Service], the console provides information on the status and operation of a Query. The console displays the connection status to [!DNL Query Service], query operations being executed, and any error messages that result from those queries.

**Contract Data "C" Labels:** Contract `C` labels are used to categorize data that has contractual obligations or is related to a customer's data governance policies.

**C1 Contract Label:** `C1` contract data governance label specifies data can only be exported from Adobe Experience Cloud in an aggregated form without including individual or device identifiers. For example, data that originated from social networks.

**C2 Contract Label:** `C2` contract data governance label specifies data that cannot be exported to a third-party. Some data providers have terms in their contracts that prohibit the export of data from where it was originally collected.  For example, social networks contracts often restrict the transfer of data you receive from them. C2 is more restrictive than C1, which only requires aggregation and anonymous data.

**C3 Contract Label:** `C3` contract data governance label specifies data that cannot be combined or otherwise used with directly identifiable information. Some data providers have terms in their contracts that prohibit the combination or use of that data with directly identifiable information.  For example, contracts for data sourced from ad networks, ad servers, and third-party data providers often include specific contractual prohibitions on the use of directly identifiable data.

**C4 Contract Label:** `C4` contract data governance label specifies data cannot be used for targeting any ads or content, either on-site or cross-site. C4 is the most restrictive label as it encompasses C5, C6, and C7 labels.

**C5 Contract Label:** `C5` contract data governance label specifies data cannot be used for interest-based, cross-site targeting of content or ads. Interest-based targeting, or personalization, occurs if the following three conditions are met:  The data collected on-site is used to make inferences about a user's interest, is used in another context, such as on another site or app and is used to select which content or ads are served based on those inferences.

**C6 Contract Label:** `C6` contract data governance label specifies data cannot be used for on-site ad targeting. Data cannot be used for on-site ad targeting, including the selection and delivery of advertisements on your organization’s websites or apps or to measure the delivery and effectiveness of such advertisements.  This includes using previously collected on-site data about the users’ interest to select ads, process data about what advertisements were shown, when and where they were shown, and whether the users took any action related to the advertisement, such as clicking an ad or making a purchase.

**C7 Contract Label:** `C7` contract data governance label specifies data cannot be used for on-site targeting of content.  Data cannot be used for on-site content targeting, including the selection and delivery of content on your organization’s websites or apps or to measure the delivery and effectiveness of such content.  This includes previously collected information about users’ interest to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the uses took any actions related to the content, including for example clicking on content.

**C8 Contract Label:** `C8` contract data governance label specifies data cannot be used for measurement of your organization’s websites or apps. Data cannot be used to measure, understand, and report on users’ usage of your organization’s sites or apps. This does not include interest-based targeting, which is the collection of information about your use of this service to subsequently personalize content and/or advertising in other contexts.

**C9 Contract Label:** `C9` contract data governance label specifies data cannot be used in Data Science workflows. Some contracts include explicit prohibitions on data used for data science.  Sometimes these are phrased in terms that prohibit the use of data for artificial intelligence (AI), machine-learning (ML), or modeling.

**C10 Contract Label:** `C10` contract data governance label specifies data data cannot be used for stitched identity activation. Some data usage policies restrict the use of stitched identity data for personalization. The C10 label is automatically applied to segments if their merge policies use the "private graph" option.

**Created Date Column:** Selecting a `Created Date` column is an option when specifying third-party data via a connection. When the append save strategy is selected and the dataset contains a multiple dates related schema, the user must choose from the available date/time schema to specify a `Created Date` key column. `Created Date` option is not available when the overwrite save strategy is selected.

**Create Table as Select:** Create Table as Select is a SQL command which, when executed as a part of a complete and valid SQL query, will instruct the [!DNL Query Service] to persist the results of the query in a dataset on the Data Lake. Options include: Create New, Overwrite all Previous, and Append to Previous.

**Cross-site Data:** Cross-site data is the combination of data from several sites, including a combination of on-site data and off-site data or a combination of data from several off-site sources.

**Cross-site Targeting Marketing Action** Uses data for cross-site ad targeting. The combination of data from several sites, including a combination of on-site data and off-site data or a combination of data from several off-site sources, is referred to as cross-site data. Cross-site data is typically collected and processed to make inferences about users' interests.

**Custom Identity Namespace:** Custom identity namespaces are customer created identifiers used to represent identities for a specific organization or business case.

**Custom Labels:** Custom data governance labels enable users to create and apply specific labels to data fields that meet specific business needs.

**Customer AI:** Customer AI is an Adobe Sensei Service that enriches customer profiles with AI-based propensities and empowers customer segmentation and targeting efforts.

[Back to top](#adobe-experience-platform-glossary)

## D

**Data Dictionary:** In [!DNL Experience Platform Launch], a data dictionary is a set of data elements defined within a property.

**Data Element:** In [!DNL Experience Platform Launch], a data element is a pointer used within rules and extensions to point to a specific piece of data that exists on the client device.

**Data Layer:** In [!DNL Experience Platform Launch], a data layer is a data structure that exists on the client device that contains metadata about the context in which a page or screen is viewed.

**Data Mapping:** Data mapping is the process of mapping source data fields to destination related target fields.

**Data Governance:** [!DNL Data governance] encompasses the strategies and technologies used to ensure data is in compliance with regulations and organization policies with respect to data usage.

**Data Governance Labels:** [!DNL Data governance] labels provide users the ability to classify data that reflects privacy-related considerations and contractual conditions to be compliant with regulations and corporate policies. [!DNL Data governance] labels added to a dataset are inherited down or applied to all fields within that dataset. [!DNL Data governance] labels can also be applied directly to fields.

**Data Integration Partners:** Data integration partners simplify and automate the loading and transformation of massive volumes of data from over 200 sources to [!DNL Experience Platform] without writing code.

**Dataset Labels:** Data usage labels can be added to datasets. All fields within that dataset will inherit the dataset's labels.

**Data Science Workspace:** [!DNL Data Science Workspace] within [!DNL Experience Platform] enables customers to create machine learning models utilizing data across [!DNL Experience Platform] and Adobe applications to generate intelligent insights and predictions to weave delightful end-user digital experiences.

**Data Source:** A data source is a user designated origin of data. Examples of a data source are a mobile app, profile and/or experience events, website profile events or a CRM.

**Data Steward:** A data steward is the person responsible for the management, oversight, and enforcement of an organization's data assets. A data steward also ensures data governance policies are safeguarded and maintained to be compliant with government regulations and organization policies.

**Data Stream:** A data stream is a set or collection of messages which share the same schema and are sent by the same source.

**Data Type:** Data type is a reusable object with properties in a hierarchical representation.

**Data Usage Labels:** Data usage labels provide users the ability to categorize data that reflects privacy-related considerations and contractual conditions to be compliant with regulations and corporate policies.

**Dataflow:** In [!DNL Real-time Customer Data Platform], a dataflow is a virtual pipeline of data that flows into [!DNL Platform] from a source and out to destinations. 

**Dataflow run:** Dataflow run is a dataflow that lands in Experience Platform based on a user specified schedule.

**Dataset:** A dataset is a storage and management construct for a collection of data, typically a table, that contains schema (columns) and fields (rows).

**Dataset ID:** An Adobe-generated identifier for an ingested dataset.

**Dataset Output:** Dataset output provides a mechanism for determining what the *Create Table as Select* option will be used for a particular [!DNL Query Service] run.

**Decision Event:** A decision event is used to capture observations about the outcome and context of a decision activity. The decision event captures information about how the decision made, when it was occurring, what options were proposed (chosen) and what contextual state existed that either influenced the decision or could be observed during the decision process. The decision event also captures the proposition ID, a globally unique identifier that can be used to correlate the decision to other events.

**Decision Rule:** In the [!DNL Decisioning Service], a decision rule is the logic that defines and controls the what, when, where, and how an offer is presented to end-users.

**Decisioning Service:** The [!DNL Decisioning Service] is collection of services and UI that enables marketers to create and deliver end-user personalized offer experiences across channels and applications using business logic and decision rules.

**Delta Column:** In [!DNL Real-time Customer Data Platform], delta column enables source data field selection for a timestamp for incremental ingestion

**Delta Save Strategy:** `Delta save strategy` is an option for ingesting third-party data via a connection. The option allows the user to specify that new or changed rows of source data are ingested to [!DNL Experience Platform]. New rows are added to the end of the dataset and changed rows are updated in the dataset on [!DNL Experience Platform].

**Destination:** In [!DNL Real-time Customer Data Platform] a destination is a general term for any endpoint, such as an Adobe application, advertising platform, cloud storage service, or marketing service, where an audience is activated and delivered.

**Destination Category:** A destination category is a grouping of [!DNL Real-time Customer Data Platform] destinations that have similar characteristics.

**Destination Catalog:** A destination catalog is a list of available destinations in the [!DNL Real-time Customer Data Platform].

**Direct Call Rules:** in [!DNL Experience Platform Launch], you can set up a [!UICONTROL direct call] [!UICONTROL rule] that executes when it is called directly from the page. If your page load or your action on your site is very simple, or if it is unique and can execute a specific set of instructions every time (set [!DNL eVar4] to X and trigger [!DNL event2] every time), then you can use a [!UICONTROL direct call] [!UICONTROL rule]. See [!DNL Launch] documentation regarding creating [!UICONTROL direct call] [!UICONTROL rules].

**Display Name:** Display name is a user-friendly name of a field that is shown in the UI.

**DULE:** DULE is an acronym for *Data Usage Labeling and Enforcement*. DULE is a key part of data governance and a collection of key features that allows for data usage labeling and applying data access policies for governance needs within an organization.

[Back to top](#adobe-experience-platform-glossary)

## E

**Eligible Offer:** In the [!DNL Decisioning Service], an eligible offer meets the constraints defined upstream that can be consistently offered to a profile.

**Eligible Rules:** In the [!DNL Decisioning Service], eligibility rules are applied to a profile related to calendar, schedule, and capping constraints.

**Email Targeting Marketing Action** A marketing action that uses data in email targeting campaigns.

**Embed Code:** In [!DNL Experience Platform Launch], the embed code is a script tag placed within the HTML on a site or environment. The embed code instructs the browser where to retrieve the build.

**Enumeration:** An enum is a list of values that represent the valid data for a field.

**Environment:** In [!DNL Experience Platform Launch], an environment is a set of deployment instructions that specifies the host delivery and file format of a build. A library must be paired with an environment before it can be built.

**Error Diagnostics:** Error diagnostics enables the generation of detailed error messages for ingested batches. The Error threshold enables the configuration of the percentage of acceptable errors before the entire batch will fail.

**Event** In [!DNL Experience Platform Launch], an event is a specific type of rule component, a trigger that occurs on a client device to begin the execution of a rule.

**Events:** Events are the behavior data associated with a profile.

**Experience Data Model (XDM):** [!DNL Experience Data Model] (XDM) is the concept of using standard schemas to unify data for use with [!DNL Experience Platform] and Adobe Experience Cloud applications. XDM standardizes how data is structured and speeds up and simplifies the process of gaining insights from massive amounts of data.

**Experiment:** An experiment is a process of creating a trained model by training the instance with a sample portion of the live production data.

**Experiments:** Experiments is the process of applying a trained model to a small portion of the live production data to validate its performance. This is different from a trained model that is tested against a holdout test dataset. This is also different from the concept of an Experiment in some ML frameworks where it actually means a sample modeling project.

**ExperienceEvent:** ExperienceEvent is an [!DNL Experience Platform] standard schema that captures observations, including the point in time and identity of the subject involved. Experience Events are fact records of what occurred, representing what happened without aggregation or interpretation.

**Extension:** In [!DNL Experience Platform Launch], an extension is a package of functionality added to a [!DNL Launch] property.  An extension is usually focused around a particular marketing or analytics solution and provides the tools needed to deploy that technology into a client environment.

**Extension Package:** In [!DNL Experience Platform Launch], an extension package is a .zip file created and uploaded by an extension developer that provides everything necessary for [!DNL Launch] users to install the extension inside their property.  An extension package contains a manifest specifying information about the extension, HTML, and JavaScript needed for end-users to configure the behavior of the [!DNL Launch] extension and the executable JavaScript delivered to the client environment, if required.

[Back to top](#adobe-experience-platform-glossary)

## F

**Fallback Offers:** In the [!DNL Decisioning Service], A fallback offer is the default offer displayed when an end-user is not eligible for any of the offers in the collection used.

**Feature Mapping:** Feature Mapping refers to the process of mapping features from data into input and target features that are required by a machine learning model.

**Field:** A field is the lowest level element of a dataset. Each field has a name for referencing and a type to identify the type of data that it contains. Field types can include, integer, number, string, Boolean and schema.

**Field Labels:** Field labels are data governance labels that are either inherited from a dataset or applied directly to a field.

**Field Name:** Field is a name used to reference the field in queries and services.

**Frequency:** Frequency determines how often a recurring scheduled [!DNL Query Service] query will run.

[Back to top](#adobe-experience-platform-glossary)

## G

**Geofence:** A geofence is a virtual geographic boundary, defined by GPS or RFID technology, that enables software to trigger a response when a mobile device enters or leaves a particular area.

**GDPR:** The General Data Protection Regulation (GDPR) is a legal framework that sets guidelines for the collection and processing of personal information of individuals within the European Union (EU). The GDPR sets out the principles for data management and the rights of the individual and covers all companies that deal with the data of EU citizens.

**GDPR Data Label:** GDPR governance label is used to define the fields that may contain personal identifiers for use in GDPR access and/or delete requests.

[Back to top](#adobe-experience-platform-glossary)

## H

**Host:** In [!DNL Experience Platform Launch], a host specifies the location, domain, and user credentials necessary for [!DNL Launch] to deliver a build.

[Back to top](#adobe-experience-platform-glossary)

## I

**Identity:** Identity is an identifier such as a cookie ID, device ID, or email ID that uniquely represents an end customer.

**Identity "I" Data Labels:** `Identity I` labels are used to categorize data that can identify or contact a specific person.

**Identity Graph:** Identity graph is a map of relationships between stitched and linked identities, that updates near real-time with customer activity.

**Identity Namespace:** An identity namespace is an identifier such as cookie ID, device ID, or email ID to indicate the context from which data originates and is used to recognize and link identities across [!DNL Experience Cloud].

**Identity Service:** [!DNL Experience Platform Identity Service] UI enables the creation and management of identity types to enable linking of identities across devices and channels for a complete user-view from [!DNL Real-time Customer Profile].

**Identity Stitching:** Identity stitching is the process of identifying data fragments and stitching them together to form a complete record of a profile.

**Identity Symbol:** Identity symbol is an abbreviation of an identity namespace that can be used as a reference in APIs.

**Identity Value:** Identity value is data associated with an assigned identity in the schema. When matching record data across profile fragments both the identity value and the namespace must match. 

**I1 Data Label:** The `I1` data label is used to classify directly identifiable data that can identify or contact a specific person rather than a device.

**I2 Data Label:** The `I2` data label is used to classify indirectly identifiable data that can be used in combination with any other data to identify or contact a specific person.

**Ingest:** Ingestion is the process of adding data from a source to [!DNL Experience Platform]. Data can be ingested to [!DNL Experience Platform] in a number of ways including streamed, batched, or added via connector.

**Ingestion Schedule:** Ingestion schedule provides time-based options when ingesting from a source to [!DNL Experience Platform].

**Input Feature:** Input feature is specified in feature mapping and is used by a machine learning model to make predictions.

**Intelligent Services:** [!DNL Intelligent Services] such as [!DNL Attribution AI] and [!DNL Customer AI] are machine learning, artificial intelligence based purpose-built models that require the [!DNL Experience Platform] to run and operate.

**Interest-Based Targeting or Personalization:** Interest-based targeting, also known as personalization, occurs if the following three conditions are met: data collected on-site is used to make inferences about a user's interest, data is used in another context such as on another site or app (off-site), and if data is used to select which content or ads are served based on those inferences.

[Back to top](#adobe-experience-platform-glossary)

## J

**[!DNL JupyterLab]:** An open-source web-based interface for Project [!DNL Jupyter] and is tightly integrated into [!DNL Experience Platform].

**[!DNL Jupyter Notebook]:** An open-source web application that enables users to create and share documents that contain live code, equations, visualizations, and narrative text.

## K

[Back to top](#adobe-experience-platform-glossary)

## L

**Library:** In [!DNL Experience Platform Launch], a library is a set of business logic that contains instructions for how the [!DNL Launch] library should behave on the client device.

[Back to top](#adobe-experience-platform-glossary)

## M

**Machine Learning (ML):** Machine learning is the field of study that enables computers the ability to learn without being explicitly programmed.

**Machine Learning Model:** A machine learning model is an instance of a machine learning recipe that is trained using historical data and configurations to solve for a business use case. In Adobe [!DNL Data Science Workspace], machine learning models are called recipes.

**Mapping:** In [!DNL Real-time Customer Data Platform], data mapping is the process of mapping source data fields to destination related target fields. 

**Marketing Action:** A marketing action, also known as marketing use cases, in the context of the data governance framework, is an action that an [!DNL Experience Platform] data consumer takes, for which there is a need to check for violations of data usage policies.

**Merge Method:** A `merge method` is a merge policy option that enables prioritization of merging of data fragments. The merge method options are merge by dataset precedence or by dataset timestamp.

**Merge Policy:** A merge policy is a set are rules used by [!DNL Profile] to determine how data will be prioritized and combined into a unified view under certain conditions.

**Mixin:** A mixin allows users to extend reusable fields that contain variables defining one or more attribute intended to be included in a schema or added to a class.

**Modified Date Column:** Selecting a `Modified Date` column is an option when specifying third-party data via a connection. When the `Delta` save strategy is selected and the dataset contains multiple date related schema, the user must choose from the available date/time type schema to specify modified date key column. `Modified Date` option is not available when the `Overwrite` save strategy is selected.

**Module:** In [!DNL Experience Platform Launch], a module is a snippet of executable JavaScript provided by an extension, which performs actions in a client environment without the need for the [!DNL Launch] user to create a rule.

[Back to top](#adobe-experience-platform-glossary)

## N

**Non-production Sandbox:** Non-production sandboxes are a form of data virtualization that allow you to isolate data from other sandboxes and are typically used for development experiments, testing, or trials. Non-production sandboxes can be reset and deleted.

**[!DNL Notebooks]:** [!DNL Notebooks] are authored using *[!DNL Jupyter Notebook]* and contain analysis description, results, and can be run to perform data analysis.

[Back to top](#adobe-experience-platform-glossary)

## O

**Offer:** In the [!DNL Decisioning Service], an offer is a marketing message that may have rules associated with it that specify who is eligible to see the offer.

**Offer Decisioning:** In the [!DNL Decisioning Service], offer decisioning enables a marketer manage the rules and trained models of offer propositions when engaging with an end-user based on data collected across channels and applications.

**Offer Library:** In the [!DNL Decisioning Service], the offer library is a central library used to manage personalized and fallback offers, decision rules and activities.

**On-site Personalization Marketing Action** A marketing action that uses data for onsite content personalization. Onsite personalization is any data that is used to make inferences about users' interests, and is used to select which content or ads are served based on those inferences.

**On-site Targeting Marketing Action** A marketing action that uses data for onsite ads, including the selection and delivery of advertisements on your organization's websites or apps, or to measure the delivery and effectiveness of such advertisements.

**Organization:** An Organization is the name used to identify a company or a specific group within a company across Adobe products. Administrator can configure and manage access and permissions of features to users of an Organization. 

**Overwrite Save Strategy:** `Overwrite` save strategy is an option for ingesting third-party data via a connection, where the user specifies if ingested data will be overwritten on a specified schedule. [!DNL Experience Platform] will ingest the specified dataset from the 3rd party source and overwrite the dataset on [!DNL Experience Platform].

[Back to top](#adobe-experience-platform-glossary)

## P

**Partial ingestion:** Partial ingestion enables ingestion of valid records of batch data within a specified error threshold. Error diagnostics for failed records can be downloaded or access in Monitoring or Sources dataflow run overview.

**Parquet Files:** A parquet file is a columnar storage file format with complex nested data structures. Parquet files are required for adding data to populate a schema dataset.

**Personalized Offers:** In the [!DNL Decisioning Service], a personalized offer is a customizable marketing message based on eligibility rules and constraints.

**Placements:** In the [!DNL Decisioning Service], a placement is the location and or context in which an offer appears for an end-user.

**Policies Workspace** Enables data stewards to view and manage core and custom labels for your organization. 

**Policy:** A data usage policy is a rule that specifies marketing actions that are restricted based on the application of data usage labels on data in [!DNL Experience Platform].

**Policy Enforcement** Enables enforcement of data usage policies with applied marketing actions to prevent data operations that constitute policy violations within an organization.

**Primary Key:** Primary key is a designation in a schema to uniquely identify all records.

**Priority:** In the [!DNL Decisioning Service], priority is used to rank offers that meet all constraints, such as eligibility, calendar, and capping.

**Private Identity Graph:** Private Identity Graph is a private map of relationships between stitched and linked identities that visible by only your organization and built based on your first-party data.

**Product Profile:** Product profiles enable administrators to grant user access to all or a subset of services associated with [!DNL Experience Platform].

**Production Sandbox:** A production sandbox of isolating virtual data on Platform that can't be reset or deleted.

**Profile:** [!DNL Profile] is an [!DNL Experience Platform] standard data model used to define attributes of consumers. A profile can also be an aggregate of event data and attributes related to a person and or device.

**Profile Export:** [!DNL Profile] export is one of the two types of destinations in [!DNL Real-time Customer Data Platform]. [!DNL Profile] export generates a file containing profiles and attributes, and uses raw PII data with email and is used to integrate with marketing and email automation platforms.

**Profile Fragment:** A profile fragment is the profile information for just one identity out of the list of identities that exist for a particular user. 

**Profile ID:** A profile ID is an auto-generated identifier associated with an identity type and represents a profile.

**Property:** In [!DNL Experience Platform Launch], a property is a container for everything needed to deploy a set of tags.

[Back to top](#adobe-experience-platform-glossary)

## Q

**Queries:** A query is a request for data from database tables.

**Query Editor:** Query Editor is a tool for writing, validating, and submitting SQL statements in [!DNL Query Service].

**Query Service for Adobe Experience Platform:** *[!DNL Experience Platform Query Service]* enables data analysts to query [!DNL ExperienceEvents] and XDMs for use in analytics and machine learning. With [!DNL Query Service], data scientists and analysts will be able to pull all of their datasets stored in [!DNL Experience Platform] – including behavioral data as well as point-of-sale (POS), customer relationship management (CRM), and more – and query those datasets to answer specific questions about the data.

[Back to top](#adobe-experience-platform-glossary)

## R

**Real-time Customer Data Platform:** Adobe's [!DNL Real-time Customer Data Platform] brings together known and unknown customer data to create trusted customer profiles with simplified integration, intelligent segmentation, and real-time activation across the digital customer journey.

**Real-time Customer Profile:** [!DNL Real-time Customer Profile] is a centralized profile for targeted and personalized experience management and provides a unified, real-time consumer profile based on aggregated data from multiple sources.

**Recipe:** A recipe is Adobe's term for a model specification and is a top-level container representing a specific machine learning, AI algorithm or ensemble of algorithms, processing logic, and configuration required to build and execute a trained model and hence help solve specific business problems.

**Record:** A record is data that persists as rows in a dataset.

**Recurrence:** A recurrence defines whether a [!DNL Query Service] query is scheduled to run only once or on a recurring basis.

**Representation:** In the [!DNL Decisioning Service], a representation is information used by a channel, such as location or language to display an offer.

**Resource:** In [!DNL Experience Platform Launch], resource is a generic term that refers to options the [!DNL Launch] user can configure inside the client environment, including extensions, data elements, and rules.

**Role-based Access Control:** Role-based access control enables admins to assign access and permissions to users of [!DNL Experience Platform]. Permissions include the ability to view and/or use [!DNL Experience Platform] features, such as creating sandboxes, defining schemas, and managing datasets.

**Rule:** In [!DNL Experience Platform Launch], a rule is a collection of rule components defining a specific set of events, conditions, and actions that should be grouped logically.

**Rule Component:** In [!DNL Experience Platform Launch], rule components are the events, conditions, and actions that make up a rule.

**Runtime:** Runtime specifies a runtime environment for a machine learning recipe. [!DNL Python], R, [!DNL Spark], PySpark, and Tensorflow runtimes enable input of a URL to a docker image for a recipe source.

[Back to top](#adobe-experience-platform-glossary)

## S

**Sample Data:** Sample data is a preview of a data file, typically the first 100 rows, to provide a data scientist or engineer an idea of what schema or data is in the data file.

**Sandbox:** A sandbox is a form of isolating virtual data within a users org on [!DNL Experience Platform].

**Sandbox Reset:** Sandbox reset, deletes all data including data, profiles, and segments within a sandbox. Sandbox reset could affect data that is connected to internal or external destinations.

**Sandbox Switcher:** The sandbox switcher control in [!DNL Experience Platform] allows users to navigate between sandboxes they have access to. Switching a sandbox will change all content and may alter feature access based on permissions.

**Schedule:** Schedule is a user-defined specification on frequency or cadence of data ingestion from a third-party data source to Adobe [!DNL Experience Platform].

**Scoring:** Scoring is the process of generating insights from data using a trained model.

**Schema:** Schema is comprised of a class and optional mixin and is used to create datasets and data streams. A schema includes behavioral attributes, timestamp, identity, attribute definitions, and relationships.

**Schema Descriptor:** Schema descriptor is an additional schema related metadata that describes behavior that can be used by [!DNL Experience Platform] to understand intended schema behavior such as the relationship between two schemas.

**Secret Access Key:** A secret access key is an [!DNL Amazon] S3 key that is used in conjunction with the access key ID to sign AWS requests.

**Segment:** A segment is a set of rules that include attributes and event data that qualify a number of profiles to become an audience.

**Segment Builder:** [!DNL Segment Builder] is the visual development environment used to build segment definitions and serves as a common component of all applications using [!DNL Real-time Customer Profile] Segmentation on [!DNL Experience Platform].

**Segment Definition:** Segment definition is the rule set used to describe key characteristics or behavior of a target audience. Once conceptualized, the rules outlined in a segment definition are used to determine qualifying audience members for a segment.

**Segment Evaluation Method:** Segment scheduled evaluation enables a recurring schedule for running an export job at a specific time, whereas on-demand evaluation involves creating a segment job to build the audience immediately. 

**Segment Export:** Segment export is one of the two types of destinations in [!DNL Real-time Customer Data Platform]. With segment export, you can send the profiles that qualify and have been mapped to the destination. Uses segment and user IDs and pseudonymous data and typically integrates with social networks and other digital media target platforms.

**Segment ID:** Segment ID is an auto-generated identifier associated with a segment.

**Segment Membership:** Segment membership displays which segment a profile is currently part of.

**Segment Rules:** Segment rules are where and how the user defines what the profiles qualify for the segment.

**Segment Type:** There are two types of segments: One is a segment that updates dynamically with [!DNL Experience Platform] data changes, and the other is an audience snapshot that captures all profiles meeting segment rules, and these don't change.

**Segmentation:** Segmentation is the process of dividing a large group of customers, prospects, or consumers into smaller groups that share similar attributes and will respond similarly to marketing strategies.

**Sensei ML Framework:** Sensei ML Framework is a unified machine learning framework across Adobe that leverages data on [!DNL Experience Platform] to empower data scientists in the development of machine learning driven intelligence services in a faster, scalable, and reusable manner.

**Sensitive Data Labels:** Sensitive “S” labels are used to categorize data deemed sensitive, such as different types of behavioral or geographic data that you want marked as sensitive.

**Services:** A powerful framework to operationalize AI and ML services by leveraging Adobe Intelligent Services. Services deliver real-time, personalized customer experiences or operationalize custom intelligent services.

**Single Identity Personalization Marketing Action** A marketing action that uses data for onsite content personalization. Onsite personalization is any data that is used to make inferences about users' interests, and is used to select which content or ads are served based on those inferences.

**S1 Data Label:** `S1` data label is used to classify data specifying latitude and longitude that can be used to determine the precise location of a device.

**S2 Data Label:** `S2` data label is used to classify data that can be used to determine a broadly defined geo-fence area.

**Source:** Source is a general term for any input connector in the [!DNL Real-time Customer Data Platform].

**Source Attribute:** A source attribute is a field in source dataset.  Source attributes are mapped to target schema fields.

**Source Catalog:** A source catalog is a list of available sources in the [!DNL Real-time Customer Data Platform].

**Source Category:** A source category is a grouping of [!DNL Real-time Customer Data Platform] sources that have similar characteristics.

**Source Connector:** Adobe Experience Platform Source connectors help users easily ingest data from multiple sources, allowing the structuring, labeling and enhancement of data using [!DNL Experience Platform Services]. Data can be ingested from a variety of sources such as cloud-based storage, third party software, and CRM systems.

**Standard Identity Namespace:** Standard identity namespaces are Adobe pre-defined identifiers, including Adobe and industry standard solutions employed to identify users.

**Standard Schema:** Standard schemas consist of classes and mixins and are intended for reuse.

**Streaming Endpoint URL:** A streaming endpoint URL is a unique endpoint provided by Adobe and tied to a customer's IMS org to stream data into [!DNL Experience Platform].

**Streaming Ingestion:** Streaming ingestion provides users a method to send data from client and server-side devices to [!DNL Experience Platform] in real-time.

**Streaming Segmentation:** Streaming segmentation is an ongoing data selection process that updates segments in response to user activity. Once a segment has been built and saved, the segment definition is applied against incoming data to [!DNL Real-time Customer Profile]. Segment additions and removals are processed regularly, ensuring your target audience remains relevant.

**Symbol:** Symbol is an abbreviation of an identity namespace that can be used as a reference in APIs.

**System View:** System View is a visual representation of source datasets that flow through [!DNL Real-time Customer Profile] to destinations. 

[Back to top](#adobe-experience-platform-glossary)

## T

**Target Features:** Target feature is specified in feature mapping is the feature that is predicted by a model.

**Trained Model:** A trained model represents the executable output of a model training process, in which a set of training data was applied to the model instance. A trained model will maintain a reference to any Intelligent Web Service that is created from it. The trained model is suitable for scoring and creating an intelligent web service. Modifications to a trained model can be tracked as a new version.

**Token:** A token is a type of two-factor authentication security that can be used to authorize the use of computer services with [!DNL Query Service].

**Type:** Type is the class of machine learning problem a recipe is designed for and is used after training to help tailor evaluating the training run.

[Back to top](#adobe-experience-platform-glossary)

## U

**Union Schema:** Union schema is a consolidation of schemas that have been enabled for [!DNL Real-time Customer Profile].

[Back to top](#adobe-experience-platform-glossary)

## V

[Back to top](#adobe-experience-platform-glossary)

## W

[Back to top](#adobe-experience-platform-glossary)

## X

**XDM (Experience Data Model):** XDM (Experience Data Model) is the concept of using standard schemas to unify data for use with [!DNL Experience Platform] and Adobe Experience Cloud applications. XDM is a formal specification used to represent all customer experience data in a single language or standard data model and standardizes how data is structured and speeds up and simplifies the process of gaining insights from massive amounts of data.

**XDM DecisionEvent:** A DecisionEvent is used to capture observations about the outcome and context of a decision activity, including information about how the decision was made, when it occurred, what options were proposed (and chosen) and what contextual state existed that either influenced the decision or could be observed during the decision process. DecisionEvents also capture the proposition ID, a globally unique identifier that can be used to correlate the decision to other events. DecisionEvents are not only relatable to Experience Events that impacted a decision but also to ExperienceEvents that are a direct response to a proposition. It is the expectation that applications reference the proposition ID in every ExperienceEvent that was influenced by the propositions. The proposition-response history in an individual profile is maintained using proposition IDs.

**XDM ExperienceEvent:** An ExperienceEvent is a fact record of what occurred, including the point in time and identity of the individual involved. ExperienceEvents can be either explicit (directly observable human actions) or implicit (raised without a direct human action) and are recorded without aggregation or interpretation. They are critical for time-domain analytics as they allow for observation and analysis of changes that occur in a given window of time and the comparison between multiple windows of time to track trends.

**XDM Individual Profile:** An XDM [!DNL Individual Profile] forms a singular representation of the attributes and interests of both identified and partially-identified individuals. Less-identified profiles may contain only anonymous behavioral signals, such as browser cookies, while highly-identified profiles may contain detailed personal information such as name, date of birth, location, and email address. As a profile grows, it becomes a robust repository of personal information, identification information, contact details, and communication preferences for an individual.

**XDM System:** XDM System is the infrastructure, data semantics, and workflow in [!DNL Experience Platform] that is powered by standard schemas.

[Back to top](#adobe-experience-platform-glossary)

## Y

[Back to top](#adobe-experience-platform-glossary)

## Z

[Back to top](#adobe-experience-platform-glossary)

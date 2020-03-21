---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Adobe Experience Platform product documentation
topic: getting started
---

# Adobe Experience Platform Glossary {#adobe-experience-platform-glossary}

## A

<a name="Access Control"></a>
__Access Control:__ {#access-control} Access control for Experience Platform links users with access permissions and sandbox environments through product profiles in Adobe Admin Console.

<a name="Access key ID"></a>
__Access key ID:__ Access key ID is a unique identifier that's associated with an Amazon S3 secret access key. The access key ID and secret access key are used together to sign AWS requests.

<a name="Action"></a>
__Action:__ In Experience Platform Launch, an action is a specific type of rule component that defines what should happen after an event occurs and conditions are evaluated and passed.

<a name="Activate"></a>
__Activate:__ In Real-time Customer Data Platform, activate is the action taken by a user to map a segment or profiles to a destination such as Oracle Eloqua, Google, or Salesforce Marketing Cloud.

<a name="Activity"></a>
__Activity:__ In the Decisioning Service, an activity is a set of offers the marketer wants the decision engine to select the best offer from.

<a name="Adobe Admin Console"></a>
__Adobe Admin Console:__ Adobe Admin Console provides a central location for managing access and feature permissioning for your organization.

<a name="Adobe Experience Platform"></a>
__Adobe Experience Platform:__ Adobe Experience Platform standardizes data and content across the enterprise, powering real-time consumer profiles, enabling data science, and accelerating content velocity to drive experience personalization across the customer journey.

<a name="Adobe Connectors"></a>
__Adobe Connectors:__ Adobe Connectors are pre-configured connections created by Adobe to enable data to flow in and out of Experience Platform. Connectors include Microsoft Dynamics, Salesforce, Amazon S3, and Azure Blob.

<a name="Adobe Intelligent Services"></a>
__Adobe Intelligent Services:__ Adobe Sensei is the intelligence framework that powers Experience Platform. It also provides a set of AI services that empowers brands to enhance their ability to deliver real-time, personalized customer experiences.

<a name="Adobe I/O"></a>
__Adobe I/O:__ Adobe I/O is part of Experience Platform and provides access to everything developers need to integrate, extend, and customize Adobe Experience Platform including APIs, events, developer console, and helpful tooling.

<a name="Adobe Sensei"></a>
__Adobe Sensei:__ Adobe Sensei is the intelligence framework that powers Experience Platform. It also provides a set of AI services that empowers brands to enhance their ability to deliver real-time, personalized customer experiences.

<a name="Amazon S3 bucket"></a>
__Amazon S3 bucket:__ Amazon S3 buckets are the foundational containers for data stored in the Amazon ecosystem. Buckets contain objects, each object is stored and retrieved using a unique developer-assigned key.

<a name="Amazon S3 connector"></a>
__Amazon S3 connector:__ Amazon S3 connector allows customers of Experience Platform to securely connect and access their Amazon S3 data.

<a name="Append Save Strategy"></a>
__Append Save Strategy:__ `Append` save strategy is an option used when specifying third-party data to ingest via a connection and appending any new data or rows at the end of the dataset. The previously ingested rows remain untouched and only rows created since the last scheduled run are ingested to Experience Platform. Any rows that were changed in the source system remain unchanged on Experience Platform.

<a name="Application lifecycle management"></a>
__Application Lifecycle Management:__ Application lifecycle management enables the ability to create separate virtual environments to develop and evolve digital experience applications.

<a name="Array"></a>
__Array:__ Arrays are used for ordered elements with the same data type.

<a name="Artificial Intelligence"></a>
__Artificial Intelligence:__ Artificial intelligence is a theory and development of computer systems that are able to perform tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages.

<a name="Attributes"></a>
__Attributes:__ Attributes are specified characteristics that represent a profile.

<a name="Attribution AI"></a>
__Attribution AI:__ Attribution AI is an Adobe Sensei Service that delivers algorithmic multi-channel attribution capabilities across the entire customer lifecycle.

<a name="Audience"></a>
__Audience__: An audience is the resulting set of profiles that meet the criteria of a segment definition.

<a name="Audience Snapshot"></a>
__Audience Snapshot__: An audience snapshot captures all profiles who qualify for the segment criteria at the time of segmentation.

[Back to top](#adobe-experience-platform-glossary)

## B

<a name="Backfill"></a>
__Backfill:__ In Real-time Customer Data Platform, in scheduled source connections, backfill enables ingestion of historical data.

<a name="Backfill Period"></a>
__Backfill Period:__ `Backfill period` is an option to set the length of time for ingesting third-party historical data via a connection. Selecting a backfill period of forever will ingest the entire history of the source data to Experience Platform.

<a name="Batch"></a>
__Batch:__ Batch is a set of data collected over a period of time and processed together as a single unit.

<a name="Batch ID"></a>
__Batch ID:__ Batch ID is an Adobe-generated identifier for a batch of data.

<a name="Batch Ingestion"></a>
__Batch Ingestion:__ Batch ingestion allows users to ingest petabytes of data and make it available within enterprise systems. With the latest technologies, users can now ingest any schema XDM and non-XDM into Experience Platform.

<a name="Batch Segmentation"></a>
__Batch Segmentation:__ Batch segmentation is an alternative to an ongoing data selection process and moves all profile data at once through segment definitions to produce corresponding audiences. Once created, this segment is saved and stored so it can be exported for use.

<a name="Build"></a>
__Build:__ In Experience Platform Launch, a build is a deployed library. The build is a file or set of files that contain all the configurations and code needed to execute the business logic contained inside of that library.

<a name="Business Intelligence Tools"></a>
__Business Intelligence Tools:__ Business intelligence, also known as "BI" tools are primarily integrated with the Experience Platform Query Service. BI tools are types of application software that collect and process large amounts of unstructured data from internal and external systems.

[Back to top](#adobe-experience-platform-glossary)

## C

<a name="Capping"></a>
__Capping:__ In the Decisioning Service, capping is used in decisioning rules to define how many times an offer is presented. There are two types of caps, how many times an offer can be proposed across the combined target audience, also known as "Global Cap" and how many times an offer can be proposed to the same end user, also known as "Profile Cap".

<a name="Catalog"></a>
__Catalog:__ In Real-time Customer Data Platform, in sources and destinations, a catalog is gallery with available connections to Adobe applications and 3rd Party technologies.

<a name="Class"></a>
__Class:__ A class defines the smallest set of fields used to build a schema and is the base behavior that describes the business object.

<a name="Client"></a>
__Client:__ A client is an external tool or application which connects to Query Service via postgres protocol or HTTP API.

<a name="Collection"></a>
__Collection:__ In the Decisioning Service, collections are subsets of offers based on predefined conditions defined by a marketer, such as category of the offer.

<a name="Command Line Interface"></a>
__Command Line Interface:__ Command Line Interface is a command line tool used to connect to Query Service for raw query execution.

<a name="Composition"></a>
__Composition__: A composition is a grouping of components that form together to make up the schema.

<a name="Connection"></a>
__Connection:__ A connection is a virtual pipeline that enables data to flow in and out of Experience Platform. Connections are now replaced by Sources.

<a name="Connector"></a>
__Connector:__ Adobe Experience Platform Source connectors help users easily ingest data from multiple sources, allowing the structuring, labeling and enhancement of data using Experience Platform Services. Data can be ingested from a variety of sources such as cloud-based storage, third party software, and CRM systems.

<a name="Condition"></a>
__Condition:__ In Experience Platform Launch, a condition is a rule component that evaluates a logical statement that must return `true` or `false`. All conditions must evaluate to `true` and all exception conditions must evaluate to `false` before any actions on the rule are executed.

<a name="Console"></a>
__Console:__ In Query Service, the console provides information on the status and operation of a Query. The console displays the connection status to Query Service, query operations being executed, and any error messages that result from those queries.

<a name="Contract Data C Labels"></a>
__Contract Data "C" Labels:__ Contract `C` labels are used to categorize data that has contractual obligations or is related to a customer's data governance policies.

<a name="C1 Contract Label"></a>
__C1 Contract Label:__ `C1` contract data governance label specifies data can only be exported from Adobe Experience Cloud in an aggregated form without including individual or device identifiers. For example, data that originated from social networks.

<a name="C2 Contract Label"></a>
__C2 Contract Label:__ `C2` contract data governance label specifies data that cannot be exported to a third-party. Some data providers have terms in their contracts that prohibit the export of data from where it was originally collected.  For example, social networks contracts often restrict the transfer of data you receive from them. C2 is more restrictive than C1, which only requires aggregation and anonymous data.

<a name="C3 Contract Label"></a>
__C3 Contract Label:__ `C3` contract data governance label specifies data that cannot be combined or otherwise used with directly identifiable information. Some data providers have terms in their contracts that prohibit the combination or use of that data with directly identifiable information.  For example, contracts for data sourced from ad networks, ad servers, and third-party data providers often include specific contractual prohibitions on the use of directly identifiable data.

<a name="C4 Contract Label"></a>
__C4 Contract Label:__ `C4` contract data governance label specifies data cannot be used for targeting any ads or content, either on-site or cross-site. C4 is the most restrictive label as it encompasses C5, C6, and C7 labels.

<a name="C5 Contract Label"></a>
__C5 Contract Label:__ `C5` contract data governance label specifies data cannot be used for interest-based, cross-site targeting of content or ads. Interest-based targeting, or personalization, occurs if the following three conditions are met:  The data collected on-site is used to make inferences about a user's interest, is used in another context, such as on another site or app and is used to select which content or ads are served based on those inferences.

<a name="C6 Contract Label"></a>
__C6 Contract Label:__ `C6` contract data governance label specifies data cannot be used for on-site ad targeting. Data cannot be used for on-site ad targeting, including the selection and delivery of advertisements on your organization’s websites or apps or to measure the delivery and effectiveness of such advertisements.  This includes using previously collected on-site data about the users’ interest to select ads, process data about what advertisements were shown, when and where they were shown, and whether the users took any action related to the advertisement, such as clicking an ad or making a purchase.

<a name="C7 Contract Label"></a>
__C7 Contract Label:__ `C7` contract data governance label specifies data cannot be used for on-site targeting of content.  Data cannot be used for on-site content targeting, including the selection and delivery of content on your organization’s websites or apps or to measure the delivery and effectiveness of such content.  This includes previously collected information about users’ interest to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the uses took any actions related to the content, including for example clicking on content.

<a name="C8 Contract Label"></a>
__C8 Contract Label:__ `C8` contract data governance label specifies data cannot be used for measurement of your organization’s websites or apps. Data cannot be used to measure, understand, and report on users’ usage of your organization’s sites or apps. This does not include interest-based targeting, which is the collection of information about your use of this service to subsequently personalize content and/or advertising in other contexts.

<a name="C9 Contract Label"></a>
__C9 Contract Label:__ `C9` contract data governance label specifies data cannot be used in Data Science workflows. Some contracts include explicit prohibitions on data used for data science.  Sometimes these are phrased in terms that prohibit the use of data for artificial intelligence (AI), machine-learning (ML), or modeling.

<a name="Created Date Column"></a>
__Created Date Column:__ Selecting a `Created Date` column is an option when specifying third-party data via a connection. When the append save strategy is selected and the dataset contains a multiple dates related schema, the user must choose from the available date/time schema to specify a `Created Date` key column. `Created Date` option is not available when the overwrite save strategy is selected.

<a name="Create Table as Select"></a>
__Create Table as Select:__ Create Table as Select is a SQL command which, when executed as a part of a complete and valid SQL query, will instruct the Query Service to persist the results of the query in a dataset on the Data Lake. Options include: Create New, Overwrite all Previous, and Append to Previous.

<a name="Cross-site Data"></a>
__Cross-site Data:__ Cross-site data is the combination of data from several sites, including a combination of on-site data and off-site data or a combination of data from several off-site sources.

<a name="Custom Identity Namespace"></a>
__Custom Identity Namespace:__ Custom identity namespaces are customer created identifiers used to represent identities for a specific organization or business case.

<a name="Customer AI"></a>
__Customer AI:__ Customer AI is an Adobe Sensei Service that enriches customer profiles with AI-based propensities and empowers customer segmentation and targeting efforts.

[Back to top](#adobe-experience-platform-glossary)

## D

<a name="Data Dictionary"></a>
__Data Dictionary:__ In Experience Platform Launch, a data dictionary is a set of data elements defined within a property.

<a name="Data Element"></a>
__Data Element:__ In Experience Platform Launch, a data element is a pointer used within rules and extensions to point to a specific piece of data that exists on the client device.

<a name="Data Layer"></a>
__Data Layer:__ In Experience Platform Launch, a data layer is a data structure that exists on the client device that contains metadata about the context in which a page or screen is viewed.

<a name="Data Mapping"></a>
__Data Mapping:__ Data mapping is the process of mapping source data fields to destination related target fields.

<a name="Data Stream"></a>
__Data Stream:__ A data stream is a set or collection of messages which share the same schema and are sent by the same source.

<a name="Dataset"></a>
__Dataset:__ A dataset is a storage and management construct for a collection of data, typically a table, that contains schema (columns) and fields (rows).

<a name="Data Flow"></a>
__Dataset Flow:__ In Real-time Customer Data Platform, a dataset flow is a visual representation of source datasets that flow through Real-time Customer Profile to destinations. 

<a name="Dataset ID"></a>
__Dataset ID:__ An Adobe-generated identifier for an ingested dataset.

<a name="Dataset Output"></a>
__Dataset Output:__ Dataset output provides a mechanism for determining what the *Create Table as Select* option will be used for a particular Query Service run.

<a name="Data Governance"></a>
__Data Governance:__ Data governance encompasses the strategies and technologies used to ensure data is in compliance with regulations and organization policies with respect to data usage.

<a name="Data Governance Labels"></a>
__Data Governance Labels:__ Data governance labels provide users the ability to classify data that reflects privacy-related considerations and contractual conditions to be compliant with regulations and corporate policies. Data governance labels added to a dataset are inherited down or applied to all fields within that dataset.  Data governance labels can also be applied directly to fields.

<a name="Data Integration Partners"></a>
__Data Integration Partners:__ Data integration partners simplify and automate the loading and transformation of massive volumes of data from over 200 sources to Experience Platform without writing code.

<a name="Dataset Labels"></a>
__Dataset Labels:__ Data usage labels can be added to datasets. All fields within that dataset will inherit the dataset's labels.

<a name="Data Science Workspace"></a>
__Data Science Workspace:__ Data Science Workspace within Experience Platform enables customers to create machine learning models utilizing data across Experience Platform and Adobe applications to generate intelligent insights and predictions to weave delightful end-user digital experiences.

<a name="Data Source"></a>
__Data Source:__ A data source is a user designated origin of data. Examples of a data source are a mobile app, profile and/or experience events, website profile events or a CRM.

<a name="Data Steward"></a>
__Data Steward:__ A data steward is the person responsible for the management, oversight, and enforcement of an organization's data assets. A data steward also ensures data governance policies are safeguarded and maintained to be compliant with government regulations and organization policies.

<a name="Data Type"></a>
__Data Type:__ Data type is a reusable object with properties in a hierarchical representation.

<a name="Data Usage Labels"></a>
__Data Usage Labels:__ Data usage labels provide users the ability to categorize data that reflects privacy-related considerations and contractual conditions to be compliant with regulations and corporate policies.

<a name="Decision Event"></a>
__Decision Event:__ A decision event is used to capture observations about the outcome and context of a decision activity. The decision event captures information about how the decision made, when it was occurring, what options were proposed (chosen) and what contextual state existed that either influenced the decision or could be observed during the decision process. The decision event also captures the proposition ID, a globally unique identifier that can be used to correlate the decision to other events.

<a name="Decision Rule"></a>
__Decision Rule:__ In the Decisioning Service, a decision rule is the logic that defines and controls the what, when, where, and how an offer is presented to end-users.

<a name="Decisioning Service"></a>
__Decisioning Service:__ The Decisioning Service is collection of services and UI that enables marketers to create and deliver end-user personalized offer experiences across channels and applications using business logic and decision rules.

<a name="Delta Column"></a>
__Delta Column:__ In Real-time Customer Data Platform, delta column enables source data field selection for a timestamp for incremental ingestion

<a name="Delta Save Strategy"></a>
__Delta Save Strategy:__ `Delta save strategy` is an option for ingesting third-party data via a connection. The option allows the user to specify that new or changed rows of source data are ingested to Experience Platform. New rows are added to the end of the dataset and changed rows are updated in the dataset on Experience Platform.

<a name="Destination"></a>
__Destination:__ In Real-time Customer Data Platform a destination is a general term for any system, such as an Adobe application, ad server, or ad network where an audience is activated and delivered.

<a name="Destination Category"></a>
__Destination Category:__ A destination category is a grouping of Real-time Customer Data Platform destinations that have similar characteristics.

<a name="Destination Catalog"></a>
__Destination Catalog:__ A destination catalog is a list of available destinations in the Real-time Customer Data Platform.

<a name="Display Name"></a>
__Display Name:__ Display name is a user-friendly name of a field that is shown in the UI.

<a name="DULE"></a>
__DULE:__ DULE is an acronym for *Data Usage Labeling and Enforcement*. DULE is a key part of data governance and a collection of key features that allows for data usage labeling and applying data access policies for governance needs within an organization.

[Back to top](#adobe-experience-platform-glossary)

## E

<a name="Error Diagnostics"></a>
__Error Diagnostics:__ Error diagnostics enables the generation of detailed error messages for ingested batches. The Error threshold enables the configuration of the percentage of acceptable errors before the entire batch will fail.

<a name="Eligible Offer"></a>
__Eligible Offer:__ In the Decisioning Service, an eligible offer meets the constraints defined upstream that can be consistently offered to a profile.

<a name="Eligible Rules"></a>
__Eligible Rules:__ In the Decisioning Service, eligibility rules are applied to a profile related to calendar, schedule, and capping constraints.

<a name="Embed Code"></a>
__Embed Code:__ In Experience Platform Launch, the embed code is a script tag placed within the HTML on a site or environment. The embed code instructs the browser where to retrieve the build.

<a name="Enumeration"></a>
__Enumeration:__ An enum is a list of values that represent the valid data for a field.

<a name="Environment"></a>
__Environment:__ In Experience Platform Launch, an environment is a set of deployment instructions that specifies the host delivery and file format of a build. A library must be paired with an environment before it can be built.

<a name="Event"></a>
__Event__ In Experience Platform Launch, an event is a specific type of rule component, a trigger that occurs on a client device to begin the execution of a rule.

<a name="Events"></a>
__Events:__ Events are the behavior data associated with a profile.

<a name="Experience Data Model"></a>
__Experience Data Model (XDM):__ Experience Data Model (XDM) is the concept of using standard schemas to unify data for use with Experience Platform and Adobe Experience Cloud applications. XDM standardizes how data is structured and speeds up and simplifies the process of gaining insights from massive amounts of data.

<a name="Experience Platform Launch"></a>
__Experience Platform Launch:__ Launch is a tag and SDK management ecosystem, integrated with Experience Platform and Experience Cloud applications. Launch provides tools to deploy, unify, and manage analytics, marketing, and advertising integrations that are necessary to power relevant customer experiences on all client devices.

<a name="Experiment"></a>
__Experiment:__ An experiment is a process of creating a trained model by training the instance with a sample portion of the live production data.

<a name="Experiments"></a>
__Experiments:__ Experiments is the process of applying a trained model to a small portion of the live production data to validate its performance. This is different from a trained model that is tested against a holdout test dataset. This is also different from the concept of an Experiment in some ML frameworks where it actually means a sample modeling project.

<a name="ExperienceEvent"></a>
__ExperienceEvent:__ ExperienceEvent is an Experience Platform standard schema that captures observations, including the point in time and identity of the subject involved. Experience Events are fact records of what occurred, representing what happened without aggregation or interpretation.

<a name="Extension"></a>
__Extension:__ In Experience Platform Launch, an extension is a package of functionality added to a Launch property.  An extension is usually focused around a particular marketing or analytics solution and provides the tools needed to deploy that technology into a client environment.

<a name="Extension Package"></a>
__Extension Package:__ In Experience Platform Launch, an extension package is a .zip file created and uploaded by an extension developer that provides everything necessary for Launch users to install the extension inside their property.  An extension package contains a manifest specifying information about the extension, HTML, and JavaScript needed for end-users to configure the behavior of the Launch extension and the executable JavaScript delivered to the client environment, if required.

[Back to top](#adobe-experience-platform-glossary)

## F

<a name="Fallback Offers"></a>
__Fallback Offers:__ In the Decisioning Service, A fallback offer is the default offer displayed when an end-user is not eligible for any of the offers in the collection used.

<a name="Feature Mapping"></a>
__Feature Mapping:__ Feature Mapping refers to the process of mapping features from data into input and target features that are required by a machine learning model.

<a name="Field"></a>
__Field:__ A field is the lowest level element of a dataset. Each field has a name for referencing and a type to identify the type of data that it contains. Field types can include, integer, number, string, Boolean and schema.

<a name="Field Labels"></a>
__Field Labels:__ Field labels are data governance labels that are either inherited from a dataset or applied directly to a field.

<a name="Field Name"></a>
__Field Name:__ Field is a name used to reference the field in queries and services.

<a name="Frequency"></a>
__Frequency:__ Frequency determines how often a recurring scheduled Query Service query will run.

[Back to top](#adobe-experience-platform-glossary)

## G

<a name="Geofence"></a>
__Geofence:__ A geofence is a virtual geographic boundary, defined by GPS or RFID technology, that enables software to trigger a response when a mobile device enters or leaves a particular area.

<a name="GDPR"></a>
__GDPR:__ The General Data Protection Regulation (GDPR) is a legal framework that sets guidelines for the collection and processing of personal information of individuals within the European Union (EU). The GDPR sets out the principles for data management and the rights of the individual and covers all companies that deal with the data of EU citizens.

<a name="GDPR Data Label"></a>
__GDPR Data Label:__ GDPR governance label is used to define the fields that may contain personal identifiers for use in GDPR access and/or delete requests.

[Back to top](#adobe-experience-platform-glossary)

## H

<a name="Host"></a>
__Host:__ In Experience Platform Launch, a host specifies the location, domain, and user credentials necessary for Launch to deliver a build.

[Back to top](#adobe-experience-platform-glossary)

## I

<a name="Identity"></a>
__Identity:__ Identity is an identifier such as a cookie ID, device ID, or email ID that uniquely represents an end customer.

<a name="Identity I Data Labels"></a>
__Identity "I" Data Labels:__ `Identity I` labels are used to categorize data that can identify or contact a specific person.

<a name="Identity Graph"></a>
__Identity Graph:__ Identity graph is a map of relationships between stitched and linked identities, that updates near real-time with customer activity.

<a name="Identity Namespace"></a>
__Identity Namespace:__ An identity namespace is an identifier such as cookie ID, device ID, or email ID to indicate the context from which data originates and is used to recognize and link identities across Experience Cloud.

<a name="Identity Service"></a>
__Identity Service:__ Experience Platform Identity Service UI enables the creation and management of identity types to enable linking of identities across devices and channels for a complete user-view from Real-time Customer Profile.

<a name="Identity Stitching"></a>
__Identity Stitching:__ Identity stitching is the process of identifying data fragments and stitching them together to form a complete record of a profile.

<a name="Identity Symbol"></a>
__Identity Symbol:__ Identity symbol is an abbreviation of an identity namespace that can be used as a reference in APIs.

<a name="I1 Data Label"></a>
__I1 Data Label:__ The `I1` data label is used to classify directly identifiable data that can identify or contact a specific person rather than a device.

<a name="I2 Data Label"></a>
__I2 Data Label:__ The `I2` data label is used to classify indirectly identifiable data that can be used in combination with any other data to identify or contact a specific person.

<a name="Ingest"></a>
__Ingest:__ Ingestion is the process of adding data from a source to Experience Platform. Data can be ingested to Experience Platform in a number of ways including streamed, batched, or added via connector.

<a name="Ingestion Schedule"></a>
__Ingestion Schedule:__ Ingestion schedule provides time-based options when ingesting from a source to Experience Platform.

<a name="Input Feature"></a>
__Input Feature:__ Input feature is specified in feature mapping and is used by a machine learning model to make predictions.

<a name="Intelligent Services"></a>
__Intelligent Services:__ Intelligent Services such as Attribution.ai and Customer.ai are machine learning, artificial intelligence based purpose-built models that require the Experience Platform to run and operate.

<a name="Interest-Based Targeting or Personalization"></a>
__Interest-Based Targeting or Personalization:__ Interest-based targeting, also known as personalization, occurs if the following three conditions are met: data collected on-site is used to make inferences about a user's interest, data is used in another context such as on another site or app (off-site), and if data is used to select which content or ads are served based on those inferences.

[Back to top](#adobe-experience-platform-glossary)

## J

<a name="JupyterLab"></a>
__JupyterLab:__ *JupyterLab* is an open-source web-based interface for Project Jupyter and is tightly integrated into Experience Platform.

<a name="Jupyter Notebook"></a>
__Jupyter Notebook:__ *Jupyter Notebook* is an open-source web application that enables users to create and share documents that contain live code, equations, visualizations, and narrative text.

[Back to top](#adobe-experience-platform-glossary)

## K

[Back to top](#adobe-experience-platform-glossary)

## L

<a name="Library"></a>
__Library:__ In Experience Platform Launch, a library is a set of business logic that contains instructions for how the Launch library should behave on the client device.

[Back to top](#adobe-experience-platform-glossary)

## M

<a name="Machine Learning (ML)"></a>
__Machine Learning (ML):__ Machine learning is the field of study that enables computers the ability to learn without being explicitly programmed.

<a name="Machine Learning Model"></a>
__Machine Learning Model:__ A machine learning model is an instance of a machine learning recipe that is trained using historical data and configurations to solve for a business use case. In Adobe Data Science Workspace, machine learning models are called recipes.

<a name="Mapping"></a>
__Mapping:__ In Real-time Customer Data Platform, data mapping is the process of mapping source data fields to destination related target fields. 

<a name="Marketing Action"></a>
__Marketing Action:__ A marketing action, in the context of the data governance framework, is an action that an Experience Platform data consumer takes, for which there is a need to check for violations of data usage policies.

<a name="Merge Method"></a>
__Merge Method:__ A `merge method` is a merge policy option that enables prioritization of merging of data fragments. The merge method options are merge by dataset precedence or by dataset timestamp.

<a name="Merge Policy"></a>
__Merge Policy:__ A merge policy is a set are rules used by Profile to determine how data will be prioritized and combined into a unified view under certain conditions.

<a name="Mixin"></a>
__Mixin:__ A mixin allows users to extend reusable fields that contain variables defining one or more attribute intended to be included in a schema or added to a class.

<a name="Modified Data Column"></a>
__Modified Date Column:__ Selecting a `Modified Date` column is an option when specifying third-party data via a connection. When the `Delta` save strategy is selected and the dataset contains multiple date related schema, the user must choose from the available date/time type schema to specify modified date key column. `Modified Date` option is not available when the `Overwrite` save strategy is selected.

<a name="Module"></a>
__Module:__ In Experience Platform Launch, a module is a snippet of executable JavaScript provided by an extension, which performs actions in a client environment without the need for the Launch user to create a rule.

[Back to top](#adobe-experience-platform-glossary)

## N

<a name="Non-production Sandbox"></a>
__Non-production Sandbox:__ Non-production sandboxes are a form of data virtualization that allow you to isolate data from other sandboxes and are typically used for development experiments, testing, or trials. Non-production sandboxes can be reset and deleted.

<a name="Notebooks"></a>
__Notebooks:__ Notebooks are authored using *Jupyter Notebook* and contain analysis description, results, and can be run to perform data analysis.

[Back to top](#adobe-experience-platform-glossary)

## O

<a name="Offer"></a>
__Offer:__ In the Decisioning Service, an offer is a marketing message that may have rules associated with it that specify who is eligible to see the offer.

<a name="Offer Decisioning"></a>
__Offer Decisioning:__ In the Decisioning Service, offer decisioning enables a marketer manage the rules and trained models of offer propositions when engaging with an end-user based on data collected across channels and applications.

<a name="Offer Library"></a>
__Offer Library:__ In the Decisioning Service, the offer library is a central library used to manage personalized and fallback offers, decision rules and activities.

<a name="Organization"></a>
__Organization:__ An Organization is the name used to identify a company or a specific group within a company across Adobe products. Administrator can configure and manage access and permissions of features to users of an Organization. 

<a name="Overwrite Save Strategy"></a>
__Overwrite Save Strategy:__ `Overwrite` save strategy is an option for ingesting third-party data via a connection, where the user specifies if ingested data will be overwritten on a specified schedule. Experience Platform will ingest the specified dataset from the 3rd party source and overwrite the dataset on Experience Platform.

[Back to top](#adobe-experience-platform-glossary)

## P

<a name="Partial Ingestion"></a>
__Partial ingestion:__ Partial ingestion enables ingestion of valid records of batch data within a specified error threshold. Error diagnostics for failed records can be downloaded or access in Monitoring.

<a name="Parquet Files"></a>
__Parquet Files:__ A parquet file is a columnar storage file format with complex nested data structures. Parquet files are required for adding data to populate a schema dataset.

<a name="Personalized Offers"></a>
__Personalized Offers:__ In the Decisioning Service, a personalized offer is a customizable marketing message based on eligibility rules and constraints.

<a name="Placements"></a>
__Placements:__ In the Decisioning Service, a placement is the location and or context in which an offer appears for an end-user.

<a name="Policy"></a>
__Policy:__ A data usage policy is a rule that specifies marketing actions that are restricted based on the application of data usage labels on data in Experience Platform.

<a name="Primary key"></a>
__Primary Key:__ Primary key is a designation in a schema to uniquely identify all records.

<a name="Priority"></a>
__Priority:__ In the Decisioning Service, priority is used to rank offers that meet all constraints, such as eligibility, calendar, and capping.

<a name="Private Identity Graph"></a>
__Private Identity Graph:__ Private Identity Graph is a private map of relationships between stitched and linked identities that visible by only your organization and built based on your first-party data.

<a name="Product Profile"></a>
__Product Profile:__ Product profiles enable administrators to grant user access to all or a subset of services associated with Experience Platform.

<a name="Production Sandbox"></a>
__Production Sandbox:__ A production sandbox of isolating virtual data on Platform that can't be reset or deleted.

<a name="Profile"></a>
__Profile:__ Profile is an Experience Platform standard data model used to define attributes of consumers. A profile can also be an aggregate of event data and attributes related to a person and or device.

<a name="Profile Export"></a>
__Profile Export:__ Profile export is one of the two types of destinations in Real-time Customer Data Platform. Profile export generates a file containing profiles and attributes, and uses raw PII data with email and is used to integrate with marketing and email automation platforms.

<a name="Profile ID"></a>
__Profile ID:__ A profile ID is an auto-generated identifier associated with an identity type and represents a profile.

<a name="Property"></a>
__Property:__ In Experience Platform Launch, a property is a container for everything needed to deploy a set of tags.

[Back to top](#adobe-experience-platform-glossary)

## Q

<a name="Queries"></a>
__Queries:__ A query is a request for data from database tables.

<a name="Query Editor"></a>
__Query Editor:__ Query Editor is a tool for writing, validating, and submitting SQL statements in Query Service.

<a name="Query Service"></a>
__Query Service for Adobe Experience Platform:__ *Experience Platform Query Service* enables data analysts to query ExperienceEvents and XDMs for use in analytics and machine learning. With Query Service, data scientists and analysts will be able to pull all of their datasets stored in Experience Platform – including behavioral data as well as point-of-sale (POS), customer relationship management (CRM), and more – and query those datasets to answer specific questions about the data.

[Back to top](#adobe-experience-platform-glossary)

## R

<a name="Real-time Customer Data Platform"></a>
__Real-time Customer Data Platform:__ Adobe's Real-time Customer Data Platform brings together known and unknown customer data to create trusted customer profiles with simplified integration, intelligent segmentation, and real-time activation across the digital customer journey.

<a name="Real-time Customer Profile"></a>
__Real-time Customer Profile:__ Real-time Customer Profile is a centralized profile for targeted and personalized experience management.

<a name="Recipe"></a>
__Recipe:__ A recipe is Adobe's term for a model specification and is a top-level container representing a specific machine learning, AI algorithm or ensemble of algorithms, processing logic, and configuration required to build and execute a trained model and hence help solve specific business problems.

<a name="Record"></a>
__Record:__ A record is data that persists as rows in a dataset.

<a name="Recurrence"></a>
__Recurrence:__ A recurrence defines whether a Query Service query is scheduled to run only once or on a recurring basis.

<a name="Representation"></a>
__Representation:__ In the Decisioning Service, a representation is information used by a channel, such as location or language to display an offer.

<a name="Resource"></a>
__Resource:__ In Experience Platform Launch, resource is a generic term that refers to options the Launch user can configure inside the client environment, including extensions, data elements, and rules.

<a name="Role-based Access Control"></a>
__Role-based Access Control:__ Role-based access control enables admins to assign access and permissions to users of Experience Platform. Permissions include the ability to view and/or use Experience Platform features, such as creating sandboxes, defining schemas, and managing datasets.

<a name="Rule"></a>
__Rule:__ In Experience Platform Launch, a rule is a collection of rule components defining a specific set of events, conditions, and actions that should be grouped logically.

<a name="Rule Component"></a>
__Rule Component:__ In Experience Platform Launch, rule components are the events, conditions, and actions that make up a rule.

<a name="Runtime"></a>
__Runtime:__ Runtime specifies a runtime environment for a machine learning recipe. Spark and PySpark runtimes allow direct upload of a binary recipe source (.jar) file. Python, R, and Tensorflow runtimes enable input of a URL to a docker image for a recipe source.

[Back to top](#adobe-experience-platform-glossary)

## S

<a name="Sample Data"></a>
__Sample Data:__ Sample data is a preview of a data file, typically the first 100 rows, to provide a data scientist or engineer an idea of what schema or data is in the data file.

<a name="Sandbox"></a>
__Sandbox:__ A sandbox is a form of isolating virtual data within a users org on Experience Platform.

<a name="Sandbox Reset"></a>
__Sandbox Reset:__ Sandbox reset, deletes all data including data, profiles, and segments within a sandbox. Sandbox reset could affect data that is connected to internal or external destinations.

<a name="Sandbox Switcher"></a>
__Sandbox Switcher:__ The sandbox switcher control in Experience Platform allows users to navigate between sandboxes they have access to. Switching a sandbox will change all content and may alter feature access based on permissions.

<a name="Schedule"></a>
__Schedule:__ Schedule is a user-defined specification on frequency or cadence of data ingestion from a third-party data source to Adobe Experience Platform.

<a name="Scoring"></a>
__Scoring:__ Scoring is the process of generating insights from data using a trained model.

<a name="Schema"></a>
__Schema:__ Schema is comprised of a class and optional mixin and is used to create datasets and data streams. A schema includes behavioral attributes, timestamp, identity, attribute definitions, and relationships.

<a name="Schema Descriptor"></a>
__Schema Descriptor:__ Schema descriptor is an additional schema related metadata that describes behavior that can be used by Experience Platform to understand intended schema behavior such as the relationship between two schemas.

<a name="Secret Access Key"></a>
__Secret Access Key:__ A secret access key is an Amazon S3 key that is used in conjunction with the access key ID to sign AWS requests.

<a name="Segment"></a>
__Segment:__ A segment is a set of rules that include attributes and event data that qualify a number of profiles to become an audience.

<a name="Segment Builder"></a>
__Segment Builder:__ Segment Builder is the visual development environment used to build segment definitions and serves as a common component of all applications using Real-time Customer Profile Segmentation on Experience Platform.

<a name="Segment Definition"></a>
__Segment Definition:__ Segment definition is the rule set used to describe key characteristics or behavior of a target audience. Once conceptualized, the rules outlined in a segment definition are used to determine qualifying audience members for a segment.

<a name="Segment Evaluation Method"></a>
__Segment Evaluation Method:__ Segment scheduled evaluation enables a recurring schedule for running an export job at a specific time, whereas on-demand evaluation involves creating a segment job to build the audience immediately. 

<a name="Segment Export"></a>
__Segment Export:__ Segment export is one of the two types of destinations and send the profiles that qualify and have been mapped to the destination. Uses segment and user IDs and pseudonymous data and typically integrates with social networks and other digital media target platforms.

<a name="Segment ID"></a>
__Segment ID:__ Segment ID is an auto-generated identifier associated with a segment.

<a name="Segment Membership"></a>
__Segment Membership:__ Segment membership displays which segment a profile is currently part of.

<a name="Segment Rules"></a>
__Segment Rules:__ Segment rules are where and how the user defines what the profiles qualify for the segment.

<a name="Segment Type"></a>
__Segment Type:__ There are two types of segments: One is a segment that updates dynamically with Experience Platform data changes, and the other is an audience snapshot that captures all profiles meeting segment rules, and these don't change.

<a name="Segmentation"></a>
__Segmentation:__ Segmentation is the process of dividing a large group of customers, prospects, or consumers into smaller groups that share similar attributes and will respond similarly to marketing strategies.

<a name="Sensei ML Framework"></a>
__Sensei ML Framework:__ Sensei ML Framework is a unified machine learning framework across Adobe that leverages data on Experience Platform to empower data scientists in the development of machine learning driven intelligence services in a faster, scalable, and reusable manner.

<a name="Sensitive Data Labels"></a>
__Sensitive Data Labels:__ Sensitive “S” labels are used to categorize data deemed sensitive, such as different types of behavioral or geographic data that you want marked as sensitive.

<a name="Services"></a>
__Services:__ A powerful framework to operationalize AI and ML services by leveraging Adobe Intelligent Services. Services deliver real-time, personalized customer experiences or operationalize custom intelligent services.

<a name="S1 Data Label"></a>
__S1 Data Label:__ `S1` data label is used to classify data specifying latitude and longitude that can be used to determine the precise location of a device.

<a name="S2 Data Label"></a>
__S2 Data Label:__ `S2` data label is used to classify data that can be used to determine a broadly defined geo-fence area.

<a name="Source"></a>
__Source:__ Source is a general term for any input connector in the Real-time Customer Data Platform.

<a name="Source Attribute"></a>
__Source Attribute:__ A source attribute is a field in source dataset.  Source attributes are mapped to target schema fields.

<a name="Source Connector"></a>
__Source Connector:__ Adobe Experience Platform Source connectors help users easily ingest data from multiple sources, allowing the structuring, labeling and enhancement of data using Experience Platform Services. Data can be ingested from a variety of sources such as cloud-based storage, third party software, and CRM systems.

<a name="Source Category"></a>
__Source Category:__ A source category is a grouping of Real-time Customer Data Platform sources that have similar characteristics.

<a name="Source Catalog"></a>
__Source Catalog:__ A source catalog is a list of available sources in the Real-time Customer Data Platform.

<a name="Standard Identity Namespace"></a>
__Standard Identity Namespace:__ Standard identity namespaces are Adobe pre-defined identifiers, including Adobe and industry standard solutions employed to identify users.

<a name="Standard Schema"></a>
__Standard Schema:__ Standard schemas consist of classes and mixins and are intended for reuse.

<a name="Streaming Ingestion"></a>
__Streaming Ingestion:__ Streaming ingestion provides users a method to send data from client and server-side devices to Experience Platform in real-time.

<a name="Streaming Endpoint URL"></a>
__Streaming Endpoint URL:__ A streaming endpoint URL is a unique endpoint provided by Adobe and tied to a customer's IMS org to stream data into Experience Platform.

<a name="Streaming Segmentation"></a>
__Streaming Segmentation:__ Streaming segmentation is an ongoing data selection process that updates segments in response to user activity. Once a segment has been built and saved, the segment definition is applied against incoming data to Real-time Customer Profile. Segment additions and removals are processed regularly, ensuring your target audience remains relevant.

<a name="Symbol"></a>
__Symbol:__ Symbol is an abbreviation of an identity namespace that can be used as a reference in APIs.

<a name="System View"></a>
__System View:__ System View is a visual representation of source datasets that flow through Real-time Customer Profile to destinations. 

[Back to top](#adobe-experience-platform-glossary)

## T

<a name="Target Features"></a>
__Target Features:__ Target feature is specified in feature mapping is the feature that is predicted by a model.

<a name="Trained Model"></a>
__Trained Model:__ A trained model represents the executable output of a model training process, in which a set of training data was applied to the model instance. A trained model will maintain a reference to any Intelligent Web Service that is created from it. The trained model is suitable for scoring and creating an intelligent web service. Modifications to a trained model can be tracked as a new version.

<a name="Token"></a>
__Token:__ A token is a type of two-factor authentication security that can be used to authorize the use of computer services with Query Service.

<a name="Type"></a>
__Type:__ Type is the class of machine learning problem a recipe is designed for and is used after training to help tailor evaluating the training run.

[Back to top](#adobe-experience-platform-glossary)

## U

<a name="Union Schema"></a>
__Union Schema:__ Union schema is a consolidation of schemas that have been enabled for Real-time Customer Profile.

[Back to top](#adobe-experience-platform-glossary)

## V

[Back to top](#adobe-experience-platform-glossary)

## W

[Back to top](#adobe-experience-platform-glossary)

## X

<a name="XDM"></a>
 __XDM (Experience Data Model):__ XDM (Experience Data Model) is the concept of using standard schemas to unify data for use with Experience Platform and Adobe Experience Cloud applications. XDM is a formal specification used to represent all customer experience data in a single language or standard data model and standardizes how data is structured and speeds up and simplifies the process of gaining insights from massive amounts of data.

 <a name="XDM DecisionEvent"></a>
 __XDM DecisionEvent:__ A DecisionEvent is used to capture observations about the outcome and context of a decision activity, including information about how the decision was made, when it occurred, what options were proposed (and chosen) and what contextual state existed that either influenced the decision or could be observed during the decision process. DecisionEvents also capture the proposition ID, a globally unique identifier that can be used to correlate the decision to other events. DecisionEvents are not only relatable to Experience Events that impacted a decision but also to ExperienceEvents that are a direct response to a proposition. It is the expectation that applications reference the proposition ID in every ExperienceEvent that was influenced by the propositions. The proposition-response history in an individual profile is maintained using proposition IDs.

<a name="XDM ExperienceEvent"></a>
__XDM ExperienceEvent:__ An ExperienceEvent is a fact record of what occurred, including the point in time and identity of the individual involved. ExperienceEvents can be either explicit (directly observable human actions) or implicit (raised without a direct human action) and are recorded without aggregation or interpretation. They are critical for time-domain analytics as they allow for observation and analysis of changes that occur in a given window of time and the comparison between multiple windows of time to track trends.

<a name="XDM Individual Profile"></a>
__XDM Individual Profile:__ An XDM Individual Profile forms a singular representation of the attributes and interests of both identified and partially-identified individuals. Less-identified profiles may contain only anonymous behavioral signals, such as browser cookies, while highly-identified profiles may contain detailed personal information such as name, date of birth, location, and email address. As a profile grows, it becomes a robust repository of personal information, identification information, contact details, and communication preferences for an individual.

<a name="XDM System"></a>
__XDM System:__ XDM System is the infrastructure, data semantics, and workflow in Experience Platform that is powered by standard schemas.

[Back to top](#adobe-experience-platform-glossary)

## Y

[Back to top](#adobe-experience-platform-glossary)

## Z

[Back to top](#adobe-experience-platform-glossary)
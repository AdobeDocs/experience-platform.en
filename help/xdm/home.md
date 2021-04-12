---
keywords: Experience Platform;home;popular topics;XDM;XDM system;XDM individual profile;XDM ExperienceEvent;XDM Experience Event;experienceEvent;experience event;Field groups;field groups;field group;Field group;Experience event;XDM Experience Event;XDM ExperienceEvent;experienceEvent;experienceevent;XDM Experienceevenet;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema registry;Schema Registry;schema library;Schema Library;schema;record data;time series;time-series
solution: Experience Platform
title: XDM System Overview
topic: overview
description: Standardization and interoperability are key concepts behind Adobe Experience Platform. Experience Data Model (XDM), driven by Adobe, is an effort to standardize customer experience data and define schemas for customer experience management.
exl-id: 294d5f02-850f-47ea-9333-8b94a0bb291e
---
# XDM System overview

Standardization and interoperability are key concepts behind Adobe Experience Platform. [!DNL Experience Data Model] (XDM), driven by Adobe, is an effort to standardize customer experience data and define schemas for customer experience management. 

XDM is a publicly documented specification designed to improve the power of digital experiences. It provides common structures and definitions for any application to use to communicate with [!DNL Platform] services. By adhering to XDM standards, all customer experience data can be incorporated into a common representation that can deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and express customer attributes for personalization purposes.

XDM is the foundational framework that allows Adobe Experience Cloud, powered by [!DNL Experience Platform], to deliver the right message to the right person, on the right channel, at exactly the right moment. The methodology on which [!DNL Experience Platform] is built, XDM System, operationalizes [!DNL Experience Data Model] schemas for use by [!DNL Platform] services.

This document provides an overview of the role of XDM System within [!DNL Experience Platform].

## XDM schemas

[!DNL Experience Platform] uses schemas to describe the structure of data in a consistent and reusable way. By defining data consistently across systems, it becomes easier to retain meaning and therefore gain value from data.

Before data can be ingested into [!DNL Platform], a schema must be composed to describe the data's structure and provide constraints to the type of data that can be contained within each field. Schemas consist of a base class and zero or more schema field groups.

For more information on the schema composition model, including design principles and best practices, see the [basics of schema composition](schema/composition.md).

### [!DNL Schema Registry] and [!DNL Schema Library]

The **[!DNL Schema Registry]** provides a user interface and RESTful API from which you can view and manage all schema-related resources in the Adobe Experience Platform **[!DNL Schema Library]**. The [!DNL Schema Library] contains industry-standard resources made available to you by Adobe, as well as resources from [!DNL Experience Platform] partners and vendors whose applications you use. The Schema Registry UI and API can also be used to create and manage new schemas and resources that are unique to your organization.

For a comprehensive guide to the major operations available in the [!DNL Schema Registry], see the [Schema Registry developer guide](api/getting-started.md).

## Data behaviors in XDM System {#data-behaviors}

Data intended for use in [!DNL Experience Platform] is grouped into two behavior types:

* **Record data**: Provides information about the attributes of a subject. A subject could be an organization or an individual.
* **Time series data**: Provides a snapshot of the system at the time an action was taken either directly or indirectly by a record subject.

All XDM schemas describe data that can be categorized as record or time series. The data behavior of a schema is defined by the schema's class, which is assigned to a schema when it is first created. XDM classes describe the smallest number of properties a schema must contain in order to represent a particular data behavior.

Although you are able to define your own classes within the [!DNL Schema Registry], it is recommended that you use the preferred classes **[!DNL XDM Individual Profile]** and **[!DNL XDM ExperienceEvent]** for record and time-series data, respectively. These classes are outlined in more detail below.

### [!DNL XDM Individual Profile] {#xdm-individual-profile}

[!DNL XDM Individual Profile] is a record-based class that forms a singular representation of the attributes of both identified and partially-identified subjects. Profiles that are highly identified may be used for personal communications or targeted engagements, and can contain detailed personal information such as name, gender, date of birth, location, and contact information including phone numbers and email addresses. 

Less-identified profiles may consist only of anonymous behavioral signals like browser cookies. In this case, the sparse profile data is used to build an information base into which the interests and preferences of the anonymous profile are collated and stored. These identifiers may become more detailed over time as the subject signs up for notifications, subscriptions, purchases, and so on. This increase in profile attributes may eventually result in an identified subject and allow for a higher degree of targeted engagement. 

As a consumer profile continues to grow, it becomes a robust repository of an individual's personal information, identification information, contact details, and communication preferences.

### [!DNL XDM ExperienceEvent] {#xdm-experience-event}

XDM ExperienceEvent is a time-series-based class used to capture the state of the system when an event (or set of events) occurred, including the point in time and identity of the subject involved. Experience Events are fact records of what occurred, thus they are immutable and represent what happened without aggregation or interpretation. They are critical for time-domain analytics as they can be used to analyze changes that occur in a given window of time, and to compare between multiple windows of time to track trends.

Experience Events can be either explicit or implicit. Explicit events are directly observable human actions taking place during a point in a journey. Implicit events are events that are raised without a direct human action, but still relate to an individual. Examples of implicit events can include the scheduled sending of email newsletters or battery voltage reaching a certain threshold.

While not all events are easily categorized across all data sources, it is extremely valuable to harmonize similar events into similar types where possible for processing. 

![ExperienceEvent Customer Journey](images/overview/experience-event-journey.png)

## XDM schemas and [!DNL Experience Platform] services

[!DNL Experience Platform] is schema-agnostic, meaning that any schema that conforms to the XDM standard is available for use by [!DNL Platform] services. The ways in which different [!DNL Platform] services use schemas are outlined in more detail below.

### [!DNL Catalog Service], [!DNL Data Ingestion] & [!DNL Data Lake]

[!DNL Catalog Service] is the system of record for [!DNL Experience Platform] assets and their related schemas. [!DNL Catalog] is not the actual files or directories containing data, but rather it holds the metadata and descriptions of those files and directories.

[!DNL Catalog] data is stored in the [!DNL Data Lake], a highly granular data store containing all data managed by [!DNL Platform], regardless of origin or file format. 

To begin ingesting data into [!DNL Experience Platform], a dataset is created using [!DNL Catalog Service]. The dataset references an XDM schema describing the structure of the data to be ingested. If a dataset is created without a schema, [!DNL Experience Platform] will derive an "observed schema" by inspecting the type and content of ingested data fields. Datasets are then tracked in [!DNL Catalog] and stored in the [!DNL Data Lake] alongside the schemas and observed schemas on which they are based. 

For more information on [!DNL Catalog], see the [Catalog Service overview](../catalog/home.md). For more information on Adobe Experience Platform Data Ingestion, see the [Data Ingestion overview](../ingestion/home.md).

### [!DNL Query Service]

Adobe Experience Platform [!DNL Query Service] allows you to use standard SQL to query [!DNL Experience Platform] data to support many different use cases. 

After a schema has been composed and a dataset has been created which references that schema, data is then ingested and stored in the [!DNL Data Lake]. Using [!DNL Query Service], you can join any datasets in the [!DNL Data Lake] and capture the query results as a new dataset for use in reporting, machine learning, or for ingestion into [!DNL Real-time Customer Profile]. 

To learn more about [!DNL Query Service], please see the [Query Service introduction](../query-service/home.md).

### [!DNL Real-time Customer Profile]

Real-time Customer Profile provides a centralized consumer profile for targeted and personalized experience management. Each profile contains data that is aggregated across all systems, as well as actionable timestamped accounts of events involving the individual that have taken place in any of the systems you use with [!DNL Experience Platform].

[!DNL Real-time Customer Profile] consumes schema-formatted data based on the [!DNL XDM Individual Profile] or [!DNL XDM ExperienceEvent] classes, and responds to queries based on that data. [!DNL Profile] does not support the use of schemas based on other classes.

[!DNL Profile] maintains an instance of each customer profile, merging data together to form a "single source of truth" for the individual. This unified data is represented using what is known as a "union view". A union view aggregates the fields of all schemas that implement the same class into a single schema.  When composing a schema using the UI or API, you can enable the schema for use with [!DNL Real-time Customer Profile] and tag it for inclusion in the union view. The tagged schema will then participate in the schema definition being fed to [!DNL Profile].

As [!DNL XDM Individual Profile] and [!DNL XDM ExperienceEvent] data is ingested and managed by [!DNL Catalog], it triggers [!DNL Real-time Customer Profile] to begin ingesting data that has been enabled for its use. The more interactions and details that are ingested, the more robust individual profiles become.

[!DNL XDM Individual Profile] data helps inform and empower actions across any channel or Adobe solution integration, and when paired with a rich history of behavioral and interaction data, this data is used to power machine learning. The [!DNL Real-time Customer Profile] API can also be used to enrich the functionality of third-party solutions, CRMs, and proprietary solutions.

See the [Real-time Customer Profile overview](../profile/home.md) for more information.

### [!DNL Data Science Workspace]

Adobe Experience Platform [!DNL Data Science Workspace] uses machine learning and artificial intelligence to gain insights from data stored within [!DNL Experience Platform]. [!DNL Data Science Workspace] allows data scientists to build recipes based on XDM Individual [!DNL Profile] and [!DNL XDM ExperienceEvent] data about customers and their activities, facilitating predictions such as buying propensity and recommended offers that the individual is likely to appreciate and use.

With [!DNL Data Science Workspace], data scientists can easily create intelligent services APIs powered by machine learning. These services work with other Adobe solutions, including Adobe Target and Adobe Analytics Cloud, to help you automate personalized, targeted digital experiences.

For more information on using [!DNL Experience Platform] data to power insights, see the [Data Science Workspace overview](../data-science-workspace/home.md).

## Next steps and additional resources

Now that you better understand the role of schemas throughout [!DNL Experience Platform], you are ready to start composing your own. To continue supplementing your learning, start by reading the suggested documentation and watch the video below.

To learn design principles and best practices for composing schemas to be used with [!DNL Experience Platform], begin by reading the [basics of schema composition](schema/composition.md). For step-by-step instructions on how to create a schema, see the tutorials on creating a schema [using the API](tutorials/create-schema-api.md) or [using the user interface](tutorials/create-schema-ui.md).

To reinforce your understanding of [!DNL XDM System] in [!DNL Experience Platform], watch the following video:

>[!VIDEO](https://video.tv.adobe.com/v/27105?quality=12&learn=on)

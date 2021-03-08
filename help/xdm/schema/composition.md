---
keywords: Experience Platform;home;popular topics;schema;Schema;enum;mixin;Mixin;Mixins;mixins;data type;data types;Data types;Data type;primary identity;primary idenity;XDM individual profile;XDM fields;enum datatype;Experience event;XDM Experience Event;XDM ExperienceEvent;experienceEvent;experienceevent;XDM Experienceevenet;schema design;class;Class;classes;Classes;datatype;Datatype;data type;Data type;schemas;Schemas;identityMap;identity map;Identity map;Schema design;map;Map;union schema;union
solution: Experience Platform
tiTle: Basics of Schema Composition
topic: overview
description: This document provides an introduction to Experience Data Model (XDM) schemas and the building blocks, principles, and best practices for composing schemas to be used in Adobe Experience Platform.
---

# Basics of schema composition

This document provides an introduction to [!DNL Experience Data Model] (XDM) schemas and the building blocks, principles, and best practices for composing schemas to be used in Adobe Experience Platform. For general information on XDM and how it is used within [!DNL Platform], see the [XDM System overview](../home.md).

## Understanding schemas

A schema is a set of rules that represent and validate the structure and format of data. At a high level, schemas provide an abstract definition of a real-world object (such as a person) and outline what data should be included in each instance of that object (such as first name, last name, birthday, and so on).

In addition to describing the structure of data, schemas apply constraints and expectations to data so it can be validated as it moves between systems. These standard definitions allow data to be interpreted consistently, regardless of origin, and remove the need for translation across applications.

[!DNL Experience Platform] maintains this semantic normalization through the use of schemas. Schemas are the standard way of describing data in [!DNL Experience Platform], allowing all data that conforms to schemas to be reusable without conflicts across an organization and even to be sharable between multiple organizations.

### Relational tables versus embedded objects

When working with relational databases, best practices involve normalizing data, or taking an entity and dividing it into discrete pieces that are then displayed across multiple tables. In order to read the data as a whole or update the entity, read and write operations must be made across many individual tables using JOIN.

Through the use of embedded objects, XDM schemas can directly represent complex data and store it in self-contained documents with a hierarchical structure. One of the main benefits to this structure is that it allows you to query the data without having to reconstruct the entity by expensive joins to multiple denormalized tables. There are no hard restrictions to how many levels your schema hierarchy can be.

### Schemas and big data

Modern digital systems generate vast amounts of behavioral signals (transaction data, web logs, internet of things, display, and so on). This big data offers extraordinary opportunities to optimize experiences, but is challenging to use due to the scale and variety of the data. In order to gain value from the data, its structure, format, and definitions must be standardized so that it can be processed consistently and efficiently.

Schemas solve this problem by allowing data to be integrated from multiple sources, standardized through common structures and definitions, and shared across solutions. This allows subsequent processes and services to answer any type of question being asked of the data, moving away from the traditional approach to data modeling where all of the questions that will be asked of the data are known in advance and the data is modeled to conform to those expectations.

### Schema-based workflows in [!DNL Experience Platform]

Standardization is a key concept behind [!DNL Experience Platform]. XDM, driven by Adobe, is an effort to standardize customer experience data and define standard schemas for customer experience management. 

The infrastructure on which [!DNL Experience Platform] is built, known as [!DNL XDM System], facilitates schema-based workflows and includes the [!DNL Schema Registry], [!DNL Schema Editor], schema metadata, and service consumption patterns. See the [XDM System overview](../home.md) for more information.

There are several key benefits to building and utilizing schemas in [!DNL Experience Platform]. First, schemas allows for better data governance and data minimization, which is especially important with privacy regulations. Second, building schemas with Adobe's standard components allows for out-of-the-box insights and use of AI/ML services with minimal customizations. Last, schemas provide infrastructure for data sharing insights and efficient orchestration.

## Planning your schema

The first step in building a schema is to determine the concept, or real-world object, that you are trying to capture within the schema. Once you identify the concept you are trying to describe, you can begin planning your schema by thinking about things like the type of data, potential identity fields, and how the schema may evolve in the future.

### Data behaviors in [!DNL Experience Platform]

Data intended for use in [!DNL Experience Platform] is grouped into two behavior types:

* **Record data**: Provides information about the attributes of a subject. A subject could be an organization or an individual.
* **Time series data**: Provides a snapshot of the system at the time an action was taken either directly or indirectly by a record subject.

All XDM schemas describe data that can be categorized as record or time series. The data behavior of a schema is defined by the schema's class, which is assigned to a schema when it is first created. XDM classes are described in further detail later in this document.

Both record and time series schemas contain a map of identities (`xdm:identityMap`). This field contains the identity representation of a subject, drawn from fields marked as "Identity" as described in the next section.

### [!UICONTROL Identity] {#identity}

Schemas are used for ingesting data into [!DNL Experience Platform]. This data can be used across multiple services to create a single, unified view of an individual entity. Therefore, it is important when thinking about schemas to think about customer identities and which fields can be used to identify a subject regardless of where the data may be coming from. 

To help with this process, key fields within your schemas can be marked as identities. Upon data ingestion, the data in those fields is inserted into the "[!UICONTROL Identity Graph]" for that individual. The graph data can then be accessed by [[!DNL Real-time Customer Profile]](../../profile/home.md) and other [!DNL Experience Platform] services to provide a stitched-together view of each individual customer.

Fields that are commonly marked as "[!UICONTROL Identity]" include: email address, phone number, [[!DNL Experience Cloud ID (ECID)]](https://experienceleague.adobe.com/docs/id-service/using/home.html), CRM ID, or other unique ID fields. You should also consider any unique identifiers specific to your organization, as they may be good "[!UICONTROL Identity]" fields as well.

It is important to think about customer identities during the schema planning phase in order to help ensure data is being brought together to build the most robust profile possible. See the overview on [Adobe Experience Platform Identity Service](../../identity-service/home.md) to learn more about how identity information can help you deliver digital experiences to your customers.

#### xdm:identityMap {#identityMap}

`xdm:identityMap` is a map-type field that describes the various identity values for an individual, along with their associated namespaces. This field can be used to provide identity information for your schemas, instead of defining identity values within the structure of the schema itself.

An example of a simple identity map would look like the following:

```json
"identityMap": {
  "email": [
    {
      "id": "jsmith@example.com",
      "primary": false
    }
  ],
  "ECID": [
    {
      "id": "87098882279810196101440938110216748923",
      "primary": false
    },
    {
      "id": "55019962992006103186215643814973128178",
      "primary": false
    }
  ],
  "loyaltyId": [
    {
      "id": "2e33192000007456-0365c00000000000",
      "primary": true
    }
  ]
}
```

As the example above shows, each key in the `identityMap` object represents an identity namespace. The value for each key is an array of objects, representing the identity values (`id`) for the respective namespace. Refer to the [!DNL Identity Service] documentation for a [list of standard identity namespaces](../../identity-service/troubleshooting-guide.md#standard-namespaces) recognized by Adobe applications. 

>[!NOTE]
>
>A boolean value for whether or not the value is a primary identity (`primary`) can also be provided for each identity value. Primary identities only need to be set for schemas intended to be used in [!DNL Real-time Customer Profile]. See the section on [union schemas](#union) for more information.

### Schema evolution principles {#evolution}

As the nature of digital experiences continues to evolve, so must the schemas used to represent them. A well-designed schema is therefore able to adapt and evolve as needed, without causing destructive changes to previous versions of the schema.

Since maintaining backwards compatibility is crucial for schema evolution, [!DNL Experience Platform] enforces a purely additive versioning principle to ensure that any revisions to the schema only result in non-destructive updates and changes. In other words, **breaking changes are not supported.**

|Supported changes | Breaking changes (Not supported)|
|------------------------------------|---------------------------------|
|<ul><li>Adding new fields to an existing schema</li><li>Making a mandatory field optional</li></ul>|<ul><li>Removing previously defined fields</li><li>Introducing new mandatory fields</li><li>Renaming or redefining existing fields</li><li>Removing or restricting previously supported field values</li><li>Moving attributes to a different location in the tree</li></ul>|

>[!NOTE]
>
>If a schema has not yet been used to ingest data into [!DNL Experience Platform], you may introduce a breaking change to that schema. However, once the schema has been used in [!DNL Platform], it must adhere to the additive versioning policy.

### Schemas and data ingestion

In order to ingest data into [!DNL Experience Platform], a dataset must first be created. Datasets are the building blocks for data transformation and tracking for [[!DNL Catalog Service]](../../catalog/home.md), and generally represent tables or files that contain ingested data. All datasets are based on existing XDM schemas, which provide constraints for what the ingested data should contain and how it should be structured. See the overview on [Adobe Experience Platform Data Ingestion](../../ingestion/home.md) for more information.

## Building blocks of a schema

[!DNL Experience Platform] uses a composition approach in which standard building blocks are combined to create schemas. This approach promotes the reusability of existing components and drives standardization across the industry to support vendor schemas and components in [!DNL Platform].

Schemas are composed using the following formula:

**Class + Mixin&ast; = XDM Schema**

&ast;A schema is composed of a class and zero or more field groups. This means that you could compose a dataset schema without using field groups at all.

### Class {#class}

Composing a schema begins by assigning a class. Classes define the behavioral aspects of the data the schema will contain (record or time-series). In addition to this, classes describe the smallest number of common properties that all schemas based on that class would need to include and provide a way for multiple compatible datasets to be merged. 

A schema's class determines which field groups will be eligible for use in that schema. This is discussed in more detail in the [next section](#mixin). 

Adobe provides two standard ("core") XDM classes: [!DNL XDM Individual Profile] and [!DNL XDM ExperienceEvent]. In addition these core classes, you can also create your own custom classes to describe more specific use cases for your organization. Custom classes are defined by an organization when there are no Adobe-defined core classes available to describe a unique use case.

### Mixin {#mixin}

A field group is a reusable component that defines one or more fields that implement certain functions such as personal details, hotel preferences, or address. Mixins are intended to be included as part of a schema that implements a compatible class. 

Mixins define which class(es) they are compatible with based on the behavior of the data they represent (record or time series). This means that not all field groups are available for use with all classes.

[!DNL Experience Platform] includes many standard Adobe field groups while also allowing vendors to define field groups for their users, and individual users to define field groups for their own specific concepts.

For example, to capture details such as "[!UICONTROL First Name]" and "[!UICONTROL Home Address]" for your "[!UICONTROL Loyalty Members]" schema, you would be able to use standard field groups that define those common concepts. However, concepts that are specific to less-common use cases (such as "[!UICONTROL Loyalty Program Level]") often do not have a pre-defined field group. In this case, you must define your own field group to capture this information.

Remember that schemas are composed of "zero or more" field groups, so this means that you could compose a valid schema without using any field groups at all.

For a list of all current standard field groups, refer to the [official XDM repository](https://github.com/adobe/xdm/tree/master/components/mixins).

### Data type {#data-type}

Data types are used as reference field types in classes or schemas in the same way as basic literal fields. The key difference is that data types can define multiple sub-fields. Similar to a field group, a data type allows for the consistent use of a multi-field structure, but has more flexibility than a field group because a data type can be included anywhere in a schema by adding it as the "data type" of a field. 

>[!NOTE]
>
>See the [appendix](#mixins-v-datatypes) for more information on the differences between field groups and data types, and the pros and cons of using one over the other for similar use cases.

[!DNL Experience Platform] provides a number of common data types as part of the [!DNL Schema Registry] to support the use of standard patterns for describing common data structures. This is explained in more detail in the [!DNL Schema Registry] tutorials, where it will become more clear as you walk through the steps to define data types.

### Field

A field is the most basic building block of a schema. Fields provide constraints regarding the type of data they can contain by defining a specific data type. These basic data types define a single field, whereas the [data types](#data-type) previously mentioned allow you to define multiple sub-fields and re-use the same multi-field structure throughout various schemas. So, in addition to defining a field's "data type" as one of the data types defined in the registry, [!DNL Experience Platform] supports basic scalar types such as:

* String
* Integer
* Double
* Boolean
* Array
* Object

>[!TIP]
>
>See the [appendix](#objects-v-freeform) for information on the pros and cons of using free-form fields over object-type fields.

The valid ranges of these scalar types can be further constrained to certain patterns, formats, minimums/maximums, or pre-defined values. Using these constraints, a wide range of more specific field types can be represented, including:

* Enum
* Long
* Short
* Byte
* Date
* Date-time
* Map

>[!NOTE]
>
>The "map" field type allows for key-value pair data, including multiple values for a single key. Maps can only be defined at the system level, meaning you may encounter a map in an industry or vendor-defined schema, but it is not available for use in fields you define. The [Schema Registry API developer guide](../api/getting-started.md) contains more information on defining field types.

Some data operations used by downstream services and applications enforce constraints on specific field types. Affected services include, but are not limited to:

* [[!DNL Real-time Customer Profile]](../../profile/home.md)
* [[!DNL Identity Service]](../../identity-service/home.md)
* [[!DNL Segmentation]](../../segmentation/home.md)
* [[!DNL Query Service]](../../query-service/home.md)
* [[!DNL Data Science Workspace]](../../data-science-workspace/home.md)

Before creating a schema for use in downstream services, please review the appropriate documentation for those services in order to better understand the field requirements and constraints for the data operations the schema is intended for.

### XDM fields

In addition to basic fields and the ability to define your own data types, XDM provides a standard set of fields and data types that are implicitly understood by [!DNL Experience Platform] services and provide greater consistency when used across [!DNL Platform] components.

These fields, such as "First Name" and "Email Address" contain added connotations beyond basic scalar field types, telling [!DNL Platform] that any fields sharing the same XDM data type will behave in the same way. This behavior can be trusted to be consistent regardless of where the data is coming from, or in which [!DNL Platform] service the data is being used.

See the [XDM field dictionary](field-dictionary.md) for a complete list of available XDM fields. It is recommended to use XDM fields and data types wherever possible to support consistency and standardization across [!DNL Experience Platform].

## Composition example

Schemas represent the format and structure of data that will be ingested into [!DNL Platform], and are built using a composition model. As previously mentioned, these schemas are composed of a class and zero or more field groups that are compatible with that class.

For example, a schema describing purchases made at a retail store might be called "[!UICONTROL Store Transactions]". The schema implements the [!DNL XDM ExperienceEvent] class combined with the standard [!UICONTROL Commerce] field group and a user-defined [!UICONTROL Product Info] field group. 

Another schema which tracks website traffic might be called "[!UICONTROL Web Visits]". It also implements the [!DNL XDM ExperienceEvent] class, but this time combines the standard [!UICONTROL Web] field group.

The diagram below shows these schemas and the fields contributed by each field group. It also contains two schemas based on the [!DNL XDM Individual Profile] class, including the "[!UICONTROL Loyalty Members]" schema mentioned previously in this guide.

![](../images/schema-composition/composition.png)

### Union {#union}

While [!DNL Experience Platform] allows you to compose schemas for particular use cases, it also allows you to see a "union" of schemas for a specific class type. The previous diagram shows two schemas based on the XDM ExperienceEvent class and two schemas based on [!DNL XDM Individual Profile] class. The union, shown below, aggregates the fields of all schemas that share the same class ([!DNL XDM ExperienceEvent] and [!DNL XDM Individual Profile], respectively). 

![](../images/schema-composition/union.png)

By enabling a schema for use with [!DNL Real-time Customer Profile], it will be included in the union for that class type. [!DNL Profile] delivers robust, centralized profiles of customer attributes as well as a timestamped account of every event that customer has had across any system integrated with [!DNL Platform]. [!DNL Profile] uses the union view to represent this data and provide a holistic view of each individual customer.

For more information on working with [!DNL Profile], see the [Real-time Customer Profile overview](../../profile/home.md).

## Mapping datafiles to XDM schemas

All datafiles that are ingested into [!DNL Experience Platform] must conform to the structure of an XDM schema. For more information on how to format datafiles to comply with XDM hierarchies (including sample files), see the document on [sample ETL transformations](../../etl/transformations.md). For general information about ingesting datafiles into [!DNL Experience Platform], see the [batch ingestion overview](../../ingestion/batch-ingestion/overview.md).

## Next steps

Now that you understand the basics of schema composition, you are ready to begin exploring and building schemas using the [!DNL Schema Registry].

To review the structure of the two core XDM classes and their commonly used compatible field groups, see the following reference documentation:

* [[!DNL XDM Individual Profile]](../classes/individual-profile.md)
* [[!DNL XDM ExperienceEvent]](../classes/experienceevent.md)

The [!DNL Schema Registry] is used to access the [!DNL Schema Library] within Adobe Experience Platform, and provides a user interface and RESTful API from which all available library resources are accessible. The [!DNL Schema Library] contains Industry resources defined by Adobe, Vendor resources defined by [!DNL Experience Platform] partners, and classes, field groups, data types, and schemas that have been composed by members of your organization.

To begin composing schema using the UI, follow along with the [Schema Editor tutorial](../tutorials/create-schema-ui.md) to build the "Loyalty Members" schema mentioned throughout this document.

To begin using the [!DNL Schema Registry] API, start by reading the [Schema Registry API developer guide](../api/getting-started.md). After reading the developer guide, follow the steps outlined in the tutorial on [creating a schema using the Schema Registry API](../tutorials/create-schema-api.md).

## Appendix

The following section contains additional information regarding the principles of schema composition.

### Objects versus free-form fields {#objects-v-freeform}

There are some key factors to consider when choosing objects over free-form fields when designing your schemas:

| Objects | Free-form fields |
| --- | --- |
| Increases nesting | Less or no nesting |
| Creates logical field groupings | Fields are placed in ad-hoc locations |

#### Objects

The pros and cons of using objects over free-form fields are listed below.

**Pros**:

* Objects are best used when you want to create a logical grouping of certain fields.
* Objects organize the schema in a more structured manner.
* Objects indirectly help in creating a good menu structure in the Segment Builder UI. The grouped fields within the schema are directly reflected in the folder structure provided in the Segment Builder UI.

**Cons**:

* Fields become more nested.
* When using [Adobe Experience Platform Query Service](../../query-service/home.md), longer reference strings must be provided to query fields that are nested in objects.

#### Free-form fields

The pros and cons of using free-form fields over objects are listed below.

**Pros**:

* Free-form fields are created directly under the root object of the schema (`_tenantId`), increasing visibility.
* Reference strings for free-form fields tend to be shorter when using Query Service.

**Cons**:

* The location of free-form fields within the schema is ad-hoc, meaning they appear in alphabetical order within the Schema Editor. This can make schemas less structured, and similar free-form fields can end up being far separated depending on their names.
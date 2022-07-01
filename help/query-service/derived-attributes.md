---
title: Derived Attributes
description: Derived attributes provide a convenient means to generate attributes of your choice that can be refreshed at any regular cadence and optionally published into your Real-time Customer Profile data. This document provides an overview of how to use Query Service to create derived attributes for use with your Profile data.
hide: true
hidefromtoc: true
exl-id: 5d52b268-e2a3-411c-8242-3aa32e759937
---
# Derived attributes

The AEP Query Services derived attributes feature provides a convenient means to generate attributes of your choice. These attributes can be refreshed at any regular cadence and optionally published into your Real-time Customer Profile data. Derived attributes address the need to build complex attributes such as decile, percentile, and quartile over simpler ones such as max, count, and mean. These attributes can be calculated specifically for an individual user or for a business identity. This enables you to derive attributes that can be directly accredited as an identifier such as zip code, province, state, or gender, and also derive attributes that are indirectly associated with that user or business profile.

Derived attributes are needed for a variety of use cases during analysis on the data lake, but can also be marked for profile and used to create relevant audiences when analyzing profile data. Some potential use cases for this feature might include:

* Identifying the lowest 10% of subscribers based on viewership by channel. This would allow marketers to target a particular audience and sell a new subscriber package.
* Identifying an audience who are in the top 10% of flyers based on their total miles traveled and have "Flyer" status. This audience could be used to selectively target the sale of a new credit card offer.
* Determine the churn rate based on subscription.
* Identifying the top 1% of household income in a province or state and providing a measure of the number of individuals moving out of that collective group over the last "n" months.

## Getting started

This overview requires a working understanding of [Platform API calls](../landing/api-guide.md) and the following components of Adobe Experience Platform:

* [Real-time Customer Profile overview](../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [Basics of schema composition](../xdm/schema/composition.md): An introduction to Experience Data Model (XDM) schemas and the building blocks, principles, and best practices for composing schemas.
* [How to enable a schema for Real-time Customer Profile](../profile/tutorials/add-profile-data.md): This tutorial outlines the steps necessary to add data to Real-time Customer Profile.

## Build complex derived attributes using Query Service

To create a ranking based on one or more metrics (such as revenue or viewership duration etc) on a particular dimension (category), the example given builds derived attributes for ranking using deciles.

### Deciles {#deciles}

A decile is a method of splitting up a set of ranked data into 10 equal parts. When the data is divided into deciles, a decile rank is assigned to each row in the data set. This allows the data to be sorted into descending or ascending order. 

A decile rank arranges the data in order from lowest to highest and is done on a scale of 1 to 10 where each successive number corresponds to an increase of 10 percentage points.

Decile buckets represent the number of ranked groups and are used to assign a ranking to a dimension (category) in the dataset. The bucket can be a number or an expression that evaluates to a positive integer value for each partition. The buckets must not have a null value.

Quartiles are used to divide the distribution by four and percentiles by 100.

### Build decile-based derived attributes 

To define the ranking of deciles based on a particular dimension (category) and a corresponding metric (revenue, points, viewership duration, etc), a schema must be designed to allow for decile bucketing.

This guide uses an airline loyalty dataset to demonstrate how to use Query Service to build deciles based on the miles flown in the last 1, 3, or 6 months.

## Use Query Service to create deciles

Query Service provides an ideal way to create a dataset that contains categorical deciles. This can then also be used in conjunction with Segmentation Service to create audiences based on attribute ranking. The concepts displayed in the following examples can be applied to create other decile bucket datasets, as long as a category (dimension) is defined and a metric is available. The examples are based on data for an airline loyalty scheme. The airline loyalty data utilizes the Experience Events class where each event is a record of a business transaction for mileage, either credited or debited, and the membership loyalty status of either "Flyer", "Frequent", "Silver", or "Gold". The primary identity field is `membershipNumber`.

### Sample Datasets

The initial airline loyalty dataset for this example is "Airline Loyalty Data", and has the following schema and primary identity as `_profilefoundationreportingstg.membershipNumber`.

![A diagram of the Airline Loyalty Data schema.](./images/derived-attributes/airline-loyalty-data.png)

**Sample data**

| `_profilefoundationreportingstg.membershipNumber` | `_profilefoundationreportingstg.emailAddress.address` | `_profilefoundationreportingstg.transactionDate` | `_profilefoundationreportingstg.transactionType` | `_profilefoundationreportingstg.transactionDetails` | `_profilefoundationreportingstg.mileage` | `_profilefoundationreportingstg.loyaltyStatus` |
|---|---|---|---|---|---|---|
| C435678623 | sfeldmark1vr@studiopress.com| 2022-01-01 | STATUS_MILES | New member | 5000 | FLYER |
| B789279247 | pgalton32n@barnesandnoble.com | 2022-02-01 | AWARD_MILES | JFK-FRA | 7500 | SILVER |
| B789279247 | pgalton32n@barnesandnoble.com | 2022-02-01 | STATUS_MILES | JFK-FRA | 7500 | SILVER |
| B789279247 | pgalton32n@barnesandnoble.com | 2022-02-10 | AWARD_MILES | FRA-JFK  | 5000 |SILVER |
| A123487284 | rritson1zn@sciencedaily.com | 2022-01-07 | STATUS_MILES | New credit card | 10000 | FLYER |

{style="table-layout:auto"} 

## Generate Decile Datasets

In the airline loyalty data seen above, the `_profilefoundationreportingstg.mileage` value contains the number of miles flown by a member every time they fly. This data is used to create deciles for the number of miles flown over lifetime look-backs and the 1 month, 3 months, 6 months, 9 months, and 12 months periods. For this purpose, a dataset is created that contains deciles in a map data type for each loop-back period and an appropriate decile in a loop-back period assigned to each `membershipNumber`.

Next, the XDM schema must be enabled for Real-time Customer Profile to ensure that the dataset is associated with a user profile as an attribute.

### Enable the schema for Real-time Customer Profile

Data being ingested into Experience Platform for use by Real-time Customer Profile must conform to an Experience Data Model (XDM) schema that is enabled for Profile. In order for a schema to be enabled for Profile, it must implement either the XDM Individual Profile or XDM ExperienceEvent class.

You can [enable a schema for use in Real-time Customer Profile using the Schema Registry API](../xdm/tutorials/create-schema-api.md) or the [Schema Editor user interface](../xdm/tutorials/create-schema-ui.md).  Detailed instructions on how to enable a schema for Profile are available in their respective documentation.

### Create a data type {#create-data-type}

Data types are used as reference-type fields in classes or schema field groups and allow for the consistent use of a multi-field structure that can be included anywhere in the schema. Creation of the data type is a one-time step per sandbox, as it can be reused for all decile-related field groups.

See the documentation for instructions on how to [define a custom data type](../xdm/api/data-types.md) using the [Schema Registry API](https://www.adobe.io/experience-platform-apis/references/schema-registry/).

### Create the decile field group {#create-field-group}

The creation of the field group is a one-time step per sandbox. It can also be reused for all decile-related schemas.

See the documentation for instructions on how to [create filed groups through the UI](../xdm/ui/resources/field-groups.md#create).

### Create an identity namespace and mark it as the primary identifier {#identity-namespace}

Identity namespaces are a component of [Identity Service](../identity-service/home.md) that serve as indicators of the context to which an identity relates. A fully qualified identity includes an ID value and a namespace. When matching and merging record data across profile fragments, both the identity value and the namespace must match.

Custom namespaces can be created using the [Identity Service API](../identity-service/api/create-custom-namespace.md) or through the UI. See the [manage custom namespaces documentation](../identity-service/namespaces.md#manage-namespaces) for guidance on how to do this through the UI.

The primary identity descriptor can either be assigned to a field in the Schemas UI or can be created using the Schema Registry API. See the documentation for instructions on how to [define an identity field in the Adobe Experience Platform UI](../xdm/ui/fields/identity.md#define-an-identity-field), or through the [Schema Registry API](../xdm/api/descriptors.md#create).

Query Service also allows you to set an identity or a primary identity for ad hoc schema dataset fields directly through SQL. See the documentation on [setting a secondary identity and primary identity in ad hoc schema identities](./data-governance/ad-hoc-schema-identities.md) for more information.

Using the key points outlined above, create an "Airline Loyalty Decile Schema" to create a decile dataset using Query Service.

![A diagram of the "Airline Loyalty Decile Schema".](./images/derived-attributes/airline-loyalty-decile-schema.png)

### Create a query for calculating deciles over a loop-back period {#create-a-query}

The following example demonstrates the SQL query for calculating a decile over a loop-back period.

A template can be made either using the Query Editor in the UI, or through the [Query Service API](./api/query-templates.md#create-a-query-template). 

```sql
CREATE TABLE AS airline_loyality_decile 
{  WITH summed_miles_1 AS (
        SELECT _profilefoundationreportingstg.membershipNumber AS membershipNumber,
            _profilefoundationreportingstg.loyaltyStatus AS loyaltyStatus,
            SUM(_profilefoundationreportingstg.mileage) AS totalMiles
        FROM airline_loyalty_data
        WHERE _profilefoundationreportingstg.transactionDate < (MAKE_DATE(YEAR(CURRENT_DATE), MONTH(CURRENT_DATE), 1) - MAKE_YM_INTERVAL(0, 0))
    GROUP BY 1,2
    ),
    summed_miles_3 AS (
        SELECT _profilefoundationreportingstg.membershipNumber AS membershipNumber,
            _profilefoundationreportingstg.loyaltyStatus AS loyaltyStatus,
            SUM(_profilefoundationreportingstg.mileage) AS totalMiles
        FROM airline_loyalty_data
        WHERE _profilefoundationreportingstg.transactionDate < (MAKE_DATE(YEAR(CURRENT_DATE), MONTH(CURRENT_DATE), 1) - MAKE_YM_INTERVAL(0, 1))
    GROUP BY 1,2
    ),
    summed_miles_6 AS (
        SELECT _profilefoundationreportingstg.membershipNumber AS membershipNumber,
            _profilefoundationreportingstg.loyaltyStatus AS loyaltyStatus,
            SUM(_profilefoundationreportingstg.mileage) AS totalMiles
        FROM airline_loyalty_data
        WHERE _profilefoundationreportingstg.transactionDate < (MAKE_DATE(YEAR(CURRENT_DATE), MONTH(CURRENT_DATE), 1) - MAKE_YM_INTERVAL(0, 4))
    GROUP BY 1,2
    ),
    rankings_1 AS (
        SELECT membershipNumber,
            loyaltyStatus,
            totalMiles,
            NTILE(10) OVER (PARTITION BY loyaltyStatus ORDER BY totalMiles DESC) AS decileBucket
        FROM summed_miles_1
    ),
    rankings_3 AS (
        SELECT membershipNumber,
            loyaltyStatus,
            totalMiles,
            NTILE(10) OVER (PARTITION BY loyaltyStatus ORDER BY totalMiles DESC) AS decileBucket
        FROM summed_miles_3
    ),
    rankings_6 AS (
        SELECT membershipNumber,
            loyaltyStatus,
            totalMiles,
            NTILE(10) OVER (PARTITION BY loyaltyStatus ORDER BY totalMiles DESC) AS decileBucket
        FROM summed_miles_6
    ),
    map_1 AS (
        SELECT membershipNumber,
            MAP_FROM_ARRAYS(COLLECT_LIST(loyaltyStatus), COLLECT_LIST(decileBucket)) AS decileMonth1
        FROM rankings_1
        GROUP BY membershipNumber
    ),
    map_3 AS (
        SELECT membershipNumber,
            MAP_FROM_ARRAYS(COLLECT_LIST(loyaltyStatus), COLLECT_LIST(decileBucket)) AS decileMonth3
        FROM rankings_3
        GROUP BY membershipNumber
    ),
    map_6 AS (
        SELECT membershipNumber,
            MAP_FROM_ARRAYS(COLLECT_LIST(loyaltyStatus), COLLECT_LIST(decileBucket)) AS decileMonth6
        FROM rankings_6
        GROUP BY membershipNumber
    ),
    all_memberships AS (
        SELECT DISTINCT _profilefoundationreportingstg.membershipNumber AS membershipNumber FROM airline_loyalty_data
    )
    SELECT STRUCT(
            all_memberships.membershipNumber AS membershipNumber,
            STRUCT(
                    map_1.decileMonth1 AS decileMonth1,
                    map_3.decileMonth3 AS decileMonth3,
                    map_6.decileMonth6 AS decileMonth6
            ) AS decilesMileage
        ) AS _profilefoundationreportingstg
    FROM all_memberships
        LEFT JOIN map_1 ON  (all_memberships.membershipNumber = map_1.membershipNumber)
        LEFT JOIN map_3 ON  (all_memberships.membershipNumber = map_3.membershipNumber)
        LEFT JOIN map_6 ON  (all_memberships.membershipNumber = map_6.membershipNumber)
    }
```

### Query review

Sections of the example query are examined in greater detail below.

#### Look-back periods

The decile data type contains a bucket for 1, 3, 6, 9, 12, and lifetime look-backs. The query uses the look-back periods of 1, 3, and 6 months, so each section will contain some "repeated" queries in order to create temporary tables for each look-back period.

>[!NOTE]
>
>If the source data does not have a column that can be used to determine a look-back period, then all decile class rankings will be performed under `decileMonthAll`.

#### Aggregation

Use common table expressions (CTE) to aggregate the mileage together before creating decile buckets. This provides the total miles for a specific look-back period. CTEs exist temporarily and are only usable within the scope of the larger query.

```sql
summed_miles_1 AS (
    SELECT _profilefoundationreportingstg.membershipNumber AS membershipNumber,
           _profilefoundationreportingstg.loyaltyStatus AS loyaltyStatus,
           SUM(_profilefoundationreportingstg.mileage) AS totalMiles
    FROM airline_loyalty_data
    WHERE _profilefoundationreportingstg.transactionDate < (MAKE_DATE(YEAR(CURRENT_DATE), MONTH(CURRENT_DATE), 1) - MAKE_YM_INTERVAL(0, 0))
    GROUP BY 1,2
)
```

The block is repeated twice in the template (`summed_miles_3` and `summed_miles_6`) with a change in the date calculation in order to generate the data for the other look-back periods.

It is important to note the identity, dimension, and metric columns for the query (`membershipNumber`, `loyaltyStatus` and `totalMiles` respectively).

#### Ranking

Deciles allow you to perform categorical bucketing. To create the ranking number, the `NTILE` function is used with a parameter of `10` within a WINDOW grouped by the `loyaltyStatus` field. This results in a ranking from 1 to 10. Set the `ORDER BY` clause of the `WINDOW` to `DESC` to ensure that a ranking value of `1` is given to the **greatest** metric within the dimension.

```sql
rankings_1 AS (
    SELECT membershipNumber,
           loyaltyStatus,
           totalMiles,
           NTILE(10) OVER (PARTITION BY loyaltyStatus ORDER BY totalMiles DESC) AS decileBucket
    FROM summed_miles_1
)
```

#### Map aggregation

With multiple look-back periods, you need to create the decile bucket maps in advance using the `MAP_FROM_ARRAYS` and `COLLECT_LIST` functions. In the example snippet, `MAP_FROM_ARRAYS` creates a map with a pair of keys (`loyaltyStatus`) and values (`decileBucket`) arrays. `COLLECT_LIST` returns an array with all values in the specified column.

```sql
map_1 AS (
    SELECT membershipNumber,
           MAP_FROM_ARRAYS(COLLECT_LIST(loyaltyStatus), COLLECT_LIST(decileBucket)) AS decileMonth1
    FROM rankings_1
    GROUP BY membershipNumber
)
```

>[!NOTE]
>
>Map aggregation is not needed if decile ranking is only required for a lifetime period.

#### Unique identities

The list of unique identities (`membershipNumber`) is required to create a unique list of all of the memberships.

```sql
all_memberships AS (
    SELECT DISTINCT _profilefoundationreportingstg.membershipNumber AS membershipNumber FROM airline_loyalty_data
)
```

>[!NOTE]
>
>If decile ranking is only required for a lifetime period, this step can be omitted and aggregation by `membershipNumber` can be done in the final step.

#### Stitch together all temporary data

The final step is to stitch together all of the temporary data into a form that is identical to the structure of the deciles in the field group.

```sql
SELECT STRUCT(
           all_memberships.membershipNumber AS membershipNumber,
           STRUCT(
                map_1.decileMonth1 AS decileMonth1,
                map_3.decileMonth3 AS decileMonth3,
                map_6.decileMonth6 AS decileMonth6
           ) AS decilesMileage
       ) AS _profilefoundationreportingstg
FROM all_memberships
    LEFT JOIN map_1 ON  (all_memberships.membershipNumber = map_1.membershipNumber)
    LEFT JOIN map_3 ON  (all_memberships.membershipNumber = map_3.membershipNumber)
    LEFT JOIN map_6 ON  (all_memberships.membershipNumber = map_6.membershipNumber)
```

If only lifetime data is available, your query would appear as follows:

```sql
SELECT STRUCT(
           rankings.membershipNumber AS membershipNumber,
           STRUCT(
                MAP_FROM_ARRAYS(COLLECT_LIST(loyaltyStatus), COLLECT_LIST(decileBucket)) AS decileMonthAll
           ) AS decilesMileage
       ) AS _profilefoundationreportingstg
FROM rankings
GROUP BY rankings.membershipNumber
```

### Run the query template

Run the query to populate the decile dataset. If the query is to be scheduled then the query must be updated to use the create and insert pattern that references the `table_exists` command. More information on how to use the `table_exists`command can be found in the [SQL syntax guide](./sql/syntax.md#table-exists). 

A correlation between the ranking number and the percentile is guaranteed in the query results because of the use of deciles. Each rank equates to 10%, so identifying an audience based on the top 30% only needs to target ranks 1, 2, and 3.

## Next steps

The example provided above highlights steps to make decile attributes available in Real-time Customer Profile. This allows for Segmentation Service, either via a user interface or RESTful API, to be able to generate audiences based on these decile buckets. See the [Segmentation Service overview](../segmentation/home.md) for information on how to create, evaluate, and access segments.

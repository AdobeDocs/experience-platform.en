---
title: Query Accelerated Store Reporting Insights
description: Learn how to build a reporting insights data model through Query Service for use with Accelerated Store data and user-defined dashboards.
---
# Query accelerated store reporting insights 

The query accelerated store allows you to reduce the time and processing power required to gain critical insights from your data. Typically, data is processed at a regular intervals (for example, on an hourly or daily basis) where aggregate views are created and reported upon. The analysis of these reports generated from an aggregated data derives insights intended to improve business performance. The query accelerated store enables optimized data processing as only the required query data is retrieved.

The query accelerated store also allows you to build on existing Real-time Customer Data Platform data models to engage with or embed your reporting insights into a reporting/visualization framework. Real-time CDP offers Profiles, Segments, and Destinations pre-configured insight dashboards.  This document guides you through the process of creating your reporting insights data model for use with the Adobe stateless API and demonstrates how to extend Real-time CDP data models . 

## Prerequisites

This tutorial uses user-defined dashboards to visualize data from your custom data model within the Platform UI. Please see the [user-defined dashboards documentation](../../dashboards/user-defined-dashboards.md) to learn more about this feature.

## Getting started

The Data Distiller SKU is required to build a custom data model for your reporting insights and to extend the Real-time CDP data models that hold enriched Platform data. Please see the [packaging](../packages.md) and guardrails documentation for information concerning [licensing](../data-distiller/licence-usage.md) and [limits of the Data Distiller SKU](../guardrails.md#query-accelerated-store). If you do not have the Data Distiller SKU please contact your Adobe customer service representative for more information.

## Build a reporting insights data model

This tutorial uses an example of building an audience insight data model. If you use one or more advertiser platforms to reach your audience, you can use the Platform API to get an approximate match count of your audience.

<!-- Q) Which Platform API? -->

<!-- Q) Why do users have a data model fro the start? -->

At the outset, you have an initial data model from your sources (potentially from your advertiser platform API). Create a reporting insights model as described in the image below where one dataset gets the upper and lower bounds of audience match.

<!-- Q) One {WHAT?} will get the upper and lower bounds of audience match? Dataset? -->

<!-- Q) Why "Create a reporting insights model as described in the image below."? -->

![An entity relational diagram (ERD) of the audience insight user model.](../images/query-accelerated-store/audience-insight-user-model.png)

In this example, the `externalaudiencereach` table/dataset is based on an ID and tracks the lower and upper bounds for match count. The `externalaudiencemapping` dimension table/dataset maps the external ID to a destination and segment on Platform. The one or more identities in one or more segments make up the destination. These are then used to target the audience using one or more advertiser platforms. 

<!-- MY NOTE:  Reporting is the process of organizing data into summaries. Insights is the result of exploring data and reports in order to extract meaningful information to improve business performance.  -->

## Create a model for reporting insights with Data Distiller

Next, use the SQL command `ACCOUNT=acp_query_batch and TYPE=QSACCEL` to create a reporting insight model. Then use Query Service to create an `AudienceInsight.AudienceModel` schema for the `audienceinsight` database.

>[!NOTE]
>
>The Data Distiller SKU is required for the `ACCOUNT=acp_query_batch` command. Without it a regular data model is created on the data lake.

```sql
CREATE database audienceinsight WITH (TYPE=QSACCEL, ACCOUNT=acp_query_batch);
 
CREATE schema audienceinsight.audiencemodel;
```

## Create tables, relationships, and populate data

The following SQL example demonstrates how to create tables and establish relationships between them.

```sql
CREATE TABLE IF NOT exists audienceinsight.audiencemodel.externalaudiencereach
WITH ( DISTRIBUTION = REPLICATE ) AS
  SELECT cast(null as int) approximate_count_upper_bound,
         cast(null as string) deliverystatusdescription,
         cast(null as timestamp)  timeupdated ,
         cast(null as int) operationstatuscode ,
         cast(null as string) operationstatusdescription,
         cast(null as int) approximate_count_lower_bound,
         cast(null as timestamp)timecreated ,
         cast(null as timestamp)timecontentupdated ,
         cast(null as int) deliverystatuscode ,
         cast(null as int)  ext_custom_audience_id
   WHERE false;
 
 
CREATE TABLE IF NOT exists audienceinsight.audiencemodel.externalaudiencemapping
WITH ( DISTRIBUTION = REPLICATE ) AS
SELECT cast(null as int) segment_id,
       cast(null as int) destination_id,
       cast(null as int) ext_custom_audience_id
 WHERE false;
 
ALTER TABLE externalaudiencereach ADD  CONSTRAINT FOREIGN KEY (ext_custom_audience_id) REFERENCES externalaudiencemapping (ext_custom_audience_id) NOT enforced;
```

The relationship between the fact and dimension tables is been formed on successful completion of both `ALTER TABLE` commands.

Next, use the `SHOW datagroups;` command to return a list of dataset(s) on the accelerated store from the  `audienceinsight.audiencemodel`. Your tabulated results should be similar to the example provided below.

>[!IMPORTANT]
>
>Items must be on the accelerated store to be shared with other models in the accelerated store. Only data in the accelerated store is accessible from the Query Service stateless API `POST /data/foundation/query/accelerated-queries`

<!-- https://platform-int.adobe.io/data/foundation/query -->

```console
    Database     |    Schema     | GroupType |      ChildType       |        ChildName        | PhysicalParent |               ChildId               
-----------------+---------------+-----------+----------------------+-------------------------+----------------+--------------------------------------
 audienceinsight | audiencemodel | QSACCEL   | Data Warehouse Table | externalaudiencemapping | true           | 9155d3b4-889d-41da-9014-5b174f6fa572
 audienceinsight | audiencemodel | QSACCEL   | Data Warehouse Table | externalaudiencereach   | true           | 1b941a6d-6214-4810-815c-81c497a0b636
```

## Query the reporting insight data model

Use Query Service to query the `audiencemodel.externalaudiencereach` reporting insight data model. An example query can be seen below.

```sql
SELECT a.ext_custom_audience_id,
       a.approximate_count_upper_bound
FROM   audiencemodel.externalaudiencereach AS a
       LEFT OUTER JOIN audiencemodel.externalaudiencemapping AS b
                    ON ( ( a.ext_custom_audience_id ) =
                         ( b.ext_custom_audience_id ) )
GROUP  BY a.ext_custom_audience_id,
          a.approximate_count_upper_bound
LIMIT  5000 ;
```

The tabulated results include a count and an ID.

```console
ext_custom_audience_id | approximate_count_upper_bound
------------------------+-------------------------------
 23850912218170554      |                          1000
 23850808585120554      |                       1012000
 23850808585220554      |                        100000
 23850814978560554      |                          1000
 23850808585180554      |                        421000
 23850814978510554      |                       3001000
 23850814978530554      |                        300000
 23850912218160554      |                        105000
 23850808584990554      |                          1000
 23850809520110554      |                          1000
(10 rows)
```

## Extend your data model with the Real-time CDP insights data model

You can extend your audience model with additional details to give a richer dimension table. For example, you can map the segment name and destination name to the external audience identifier. To do this, use Query Service to create or refresh a new dataset and add it to the audience model that combines segments and destinations with external identity. The diagram below illustrates the concept of this data model extension.

![An ERD diagram linking the CDP insight data model and the Query accelerated store model.](../images/query-accelerated-store/updatingAudienceInsightUserModel.png)

<!-- In case we want to extend the audience model with some additional details like mapping the segment name and destination name to the external audience identifier. Using query service to create/refresh a new dataset/table and add it to the audience model that combines segments and destinations with external identity to give a richer dimension table.  -->

## Use CDP dimension tables to extend your reporting insights model

Use Query Service to add key descriptive attributes from the enriched CDP dimension datasets to the `audienceinsight` data model and establish a relationship between your fact table and new dimension table. The SQL below demonstrates how to integrate existing dimension tables to your reporting insights data model.

```sql
CREATE TABLE audienceinsight.audiencemodel.external_seg_dest_map AS
  SELECT ext_custom_audience_id,
         destination_name,
         segment_name,
         destination_status,
         a.destination_id,
         a.segment_id
  FROM   externalaudiencemapping AS a
         LEFT OUTER JOIN adwh_dim_segments AS b
                      ON ( ( a.segment_id ) = ( b.segment_id ) )
         LEFT OUTER JOIN adwh_dim_destination AS c
                      ON ( ( a.destination_id ) = ( c.destination_id ) );
 
ALTER TABLE externalaudiencereach  ADD  CONSTRAINT FOREIGN KEY (ext_custom_audience_id) REFERENCES external_seg_dest_map (ext_custom_audience_id) NOT enforced;
```

Use the `SHOW datagroups;` command to confirm the creation of the additional `external_seg_dest_map` dimension table.

```console
    Database     |     Schema     | GroupType |      ChildType       |                ChildName  | PhysicalParent |               ChildId               
-----------------+----------------+-----------+----------------------+----------------------------------------------------+----------------+--------------------------------------
 audienceinsight | audiencemodel | QSACCEL   | Data Warehouse Table | external_seg_dest_map      | true           | 4b4b86b7-2db7-48ee-a67e-4b28cb900810
 audienceinsight | audiencemodel | QSACCEL   | Data Warehouse Table | externalaudiencemapping    | true           | b0302c05-28c3-488b-a048-1c635d88dca9
 audienceinsight | audiencemodel | QSACCEL   | Data Warehouse Table | externalaudiencereach      | true           | 4485c610-7424-4ed6-8317-eed0991b9727
```

## Run queries on your extended accelerated store reporting insights data model

Now that the CDP insight data models have been joined to your `audienceinsight` data model, it is ready to be queried.

```sql
SELECT a.ext_custom_audience_id,
       b.destination_name,
       b.segment_name,
       b.destination_status,
       b.destination_id,
       b.segment_id
FROM   audiencemodel.externalaudiencereach1 AS a
       LEFT OUTER JOIN audiencemodel.external_seg_dest_map AS b
                    ON ( ( a.ext_custom_audience_id ) = (
                         b.ext_custom_audience_id ) )
LIMIT  25; 
```

The query returns the following data:

```console
ext_custom_audience_id | destination_name |       segment_name        | destination_status | destination_id | segment_id 
------------------------+------------------+---------------------------+--------------------+----------------+-------------
 23850808595110554      | FCA_Test2        | United States             | enabled            |     -605911558 | -1357046572
 23850799115800554      | FCA_Test2        | Born in 1980s             | enabled            |     -605911558 | -1224554872
 23850799115790554      | FCA_Test2        | Born in 1970s             | enabled            |     -605911558 |  1899603869
 23850798177620554      | FCA_Test1        | Billionaires              | enabled            |      321720439 |  1401872665
 23850814978560554      | FCA_Test3        | Canada - Saskatchewan     | enabled            |     1182494936 | -1917996562
 23850808585180554      | FCA_Test3        | United States             | enabled            |     1182494936 | -1357046572
 23850814978530554      | FCA_Test3        | Canada - British Columbia | enabled            |     1182494936 |  -652840507
 23850808585120554      | FCA_Test3        | Canada - Quebec           | enabled            |     1182494936 |  -519557860
 23850809520110554      | FCA_Test3        | Born in 1960s             | enabled            |     1182494936 |   237824266
 23850808585220554      | FCA_Test3        | Western Canada            | enabled            |     1182494936 |  1075937528
 23850808584990554      | FCA_Test3        | Canada - Ontario          | enabled            |     1182494936 |  1593438041
 23850814978510554      | FCA_Test3        | Canada - Alberta          | enabled            |     1182494936 |  1862946783
 23850912218170554      | FCA_Test4        | Canada - Alberta          | enabled            |     1549248886 |  1862946783
 23850912218160554      | FCA_Test4        | Born in 1970s             | enabled            |     1549248886 |  1899603869
 ```

## Visualize your data with user-defined dashboards

Now that you have created your custom data model you are ready to visualize your data with user-defined dashboards. Your custom data model can be found from the list of available data models in the user-defined dashboard workspace. See the [user-defined dashboard guide](../dashboards/user-defined-dashboards.md) for guidance on how to utilize your custom data model.

The image below provides an example of the possible custom visualisations using your reporting insights data model.

![A unique widget created from the new reporting insights data model.](../images/query-accelerated-store/user-defined-dashboard-widget.png)

---
title: CDP Insights Data Model
description: Learn how to use SQl queries from CDP Insights Data Models to customize your own CDP reports for your marketing and KPI use cases.
---
# (Beta) CDP Insights Data Model

>[!IMPORTANT]
>
>The CDP Insights Data Models feature is in beta. Its features and documentation are subject to change.

The CDP Insights Data Model feature exposes the data models and SQL that powers the insights for various profile, destination and segmentation widgets. You can customize these SQl query templates to create bespoke CDP reports for your marketing and KPI use cases. These insights can then be used as custom widgets for your used defined dashboards.

## Prerequisites

This guide requires a working understanding of [the user-defined dashboards feature](./user-defined-dashboards.md). Please read the documentation before continuing with this guide.

## CDP insights reports

CDP reporting provides insights into your profile data and its relationship with segments and destinations.

Various star schema models were developed to answer a variety of common marketing use cases. The schema diagrams below display the common sources used to build the schemas and the relationship between the profile and segment schemas.

![A diagram of the relationship between profile attribute export, segment membership and segment definition schemas.]()

The table below provides information on the the metadata required from the profile attribute export dataset to build the default data model.

| Column  | Type  | Description  |
|---|---|---|
| ` identitymap    `  |  An array of `string` and `identitymap_v_e[]` values. |   |
| `segmentmembership` | An array of `string` and `identitymap_v_v[]` values. |   |
| `mergepolicy` | Integer  |   |
| `destination_id` | Integer |   |

## CDP Insights Data Models and use cases

Each data model can have several use cases. The data used for CDP reporting is accurate for a chosen merge policy and from the most recent daily snapshot.

### Profile model {#profile-model}

The profile model is comprised of three datasets: `adwh_dim_date`, `adwh_fact_profile`, `adwh_dim_merge_policies`. The image below contains the relevant data fields in each.

![An ERD of the profile model.](./images/cdp-insights/profile-model.png)

#### The profile count use case

<!-- Description of business value for xxx. [Link to widget documentation]().  -->

The SQl that generates the [!UICONTROL Profile count] widget.

+++SQL query

```sql
SELECT adwh_dim_merge_policies.merge_policy_name,
  sum(adwh_fact_profile.count_of_profiles) CNT
FROM qsaccel.profile_agg.adwh_fact_profile
LEFT OUTER JOIN qsaccel.profile_agg.adwh_dim_merge_policies ON adwh_dim_merge_policies.merge_policy_id=adwh_fact_profile.merge_policy_id
WHERE adwh_fact_profile.date_key='${lastProcessDate}'
AND adwh_fact_profile.merge_policy_id=${mergePolicyId}
GROUP BY adwh_dim_merge_policies.merge_policy_name;
```

+++

#### The Single identity profiles use case

<!-- Description of business value for xxx. [Link to widget documentation](). -->

The SQl that generates the [!UICONTROL Single identity profiles] widget.

+++SQL query

```sql
SELECT adwh_dim_merge_policies.merge_policy_name,
  sum(adwh_fact_profile.count_of_Single_Identity_profiles) CNT
FROM QSAccel.profile_agg.adwh_fact_profile
LEFT OUTER JOIN QSAccel.profile_agg.adwh_dim_merge_policies ON
adwh_dim_merge_policies.merge_policy_id=adwh_fact_profile.merge_policy_id
WHERE adwh_fact_profile.date_key='${lastProcessDate}'
  AND adwh_fact_profile.merge_policy_id =${mergePolicyId}
GROUP BY adwh_dim_merge_policies.merge_policy_name;
```

+++

### Namespace model {#namespace-model}

The namespace model is comprised of the following datasets: `adwh_fact_profile_by_namespace`, `adwh_dim_date`, `adwh_dim_namespaces`, `adwh_dim_merge_policies`. The image below contains the relevant data fields in each.

![An ERD of the namespace model.](./images/cdp-insights/namespace-model.png)

#### Profiles by identity use case

Description of business value for xxx. [Link to the Profiles by identity widget documentation]().

The SQl that generates the [!UICONTROL Profiles by identity] widget.

+++SQL query

```sql
SELECT adwh_dim_namespaces.namespace_description,
      sum(adwh_fact_profile_by_namespace.count_of_profiles) count_of_profiles
  FROM qsaccel.profile_agg.adwh_fact_profile_by_namespace
  JOIN qsaccel.profile_agg.adwh_dim_namespaces ON
  adwh_fact_profile_by_namespace.namespace_id = adwh_dim_namespaces.namespace_id
  AND adwh_fact_profile_by_namespace.merge_policy_id = adwh_dim_namespaces.merge_policy_id
  WHERE adwh_fact_profile_by_namespace.merge_policy_id =${mergePolicyId}
   AND adwh_fact_profile_by_namespace.date_key = '${lastProcessDate}'
  GROUP BY adwh_fact_profile_by_namespace.date_key,
          adwh_fact_profile_by_namespace.merge_policy_id,
          adwh_dim_namespaces.namespace_description
  ORDER BY count_of_profiles DESC
  LIMIT 5;
```

+++

#### Single identity profiles by identity use case

Description of business value for xxx. [Link to the Single identity profiles by identity widget documentation]().

The SQl that generates the [!UICONTROL Single identity profiles by identity] widget.

+++SQL query

```sql

```

+++

<!--### Segment model {#segment-model}
The segment model is comprised of the following datasets: ``, ``, ``. The image below contains the relevant data fields in each.

![An ERD of the segment model.](./images/cdp-insights/segment.png)
-->

#### Audience size use case

Description of business value for xxx. [Link to the Audience size widget documentation]().

The SQl that generates the [!UICONTROL Audience size] widget.

+++SQL query

```sql

```

+++

#### Audience size change trend use case

Description of business value for xxx. [Link to the Audience size change trend widget documentation]().

The SQl that generates the [!UICONTROL Audience size change trend] widget.

+++SQL query

```sql

```

+++

<!-- ### Namespace-segment model 
The namespace-segment model is comprised of the following datasets: ``, ``, ``. The image below contains the relevant data fields in each.

![An ERD of the segment model.](./images/cdp-insights/namespace-segment.png)
-->

#### Profiles by identity for a segment use case

Description of business value for xxx. [Link to the Profiles by identity widget documentation]().

The SQl that generates the [!UICONTROL Profiles by identity] widget.

+++SQL query

```sql

```

+++

<!-- ### Overlap Namespace model 

The overlap namespace model is comprised of the following datasets: ``, ``, ``. The image below contains the relevant data fields in each.

![An ERD of the segment model.](./images/cdp-insights/overlap-namespace.png)
-->

#### Identity overlap (profiles) use case

Description of business value for xxx. [Link to the Profiles dashboard, Identity overlap widget documentation]().

The SQl that generates the [!UICONTROL Identity overlap] widget.

+++SQL query

```sql

```

+++

<!-- ### Overlap Namespace by segment model 

The overlap namespace by segment model is comprised of the following datasets: ``, ``, ``. The image below contains the relevant data fields in each.

![An ERD of the segment model.](./images/cdp-insights/overlap-namespace-by-segment.png)
-->

#### Identity overlap (segments) use case

Description of business value for xxx. [Link to the Profiles dashboard, Identity overlap widget documentation]().

The SQl that generates the [!UICONTROL Identity overlap] widget.

+++SQL query

```sql

```

+++

<!-- ### Segment model {#segment-model} 

The segment model is comprised of the following datasets: ``, ``, ``. The image below contains the relevant data fields in each.

![An ERD of the segment model.](./images/cdp-insights/segment.png)
-->

#### Most used destinations use case

Description of business value for xxx. [Link to the Most used destinations widget documentation]().

The SQl that generates the [!UICONTROL Most used destinations] widget.

+++SQL query

```sql

```

+++

#### Recently activated segments use case

Description of business value for xxx. [Link to the Recently activated segments widget documentation]().

The SQl that generates the [!UICONTROL Recently activated segments] widget.

+++SQL query

```sql

```

+++

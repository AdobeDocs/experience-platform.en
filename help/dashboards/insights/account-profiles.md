---
title: Account Profile Insights
description: Discover the SQL that powers your Account Profile insights and use these queries to generate custom insights that further explore your customers and their consumer experiences.
---
# Account Profile insights

Account profiles are used to consolidate account information from various sources, including multiple marketing channels and organizational systems. This unified view enables a comprehensive understanding of customer accounts, enhancing B2B marketing campaigns. The insights derived from the analysis of your data model make your Adobe Real-time Customer Data Platform B2B data more accessible, understandable, and impactful for decision-making.

With access to the SQL that powers your insights, you can better understand your B2B data and generate your own highly customized reusable insights to further explore your customer account information. Transform your raw data into new actionable insights by using the existing Real-Time CDP data model SQL as inspiration to create queries for your unique business needs. 

<!-- Add link to new generate insights with SQL workflow doc after April release.-->

The following insights are all available for you to use as part of the [Account Profiles dashboard](../guides/account-profiles.md) or a [custom dashboard](../user-defined-dashboards.md). See the [customization overview](../customize/overview.md) for instructions on how to customize your dashboard or [create and edit new widgets](../customize/custom-widgets.md) in the widget library and [user-defined dashboard](../user-defined-dashboards.md#create-widget).

## Account profiles added {#account-profiles-added}

Questions answered by this insight:

- How many account profiles have been added over a given period?

+++Select to reveal the SQL that generates this insight

```sql
WITH accounts_by_mm_dd AS
(
          SELECT    d.date_key,
                    COALESCE(Sum(a.counts), 0) AS account_counts
          FROM      adwh_b2b_date d
          LEFT JOIN adwh_fact_account a
          ON        d.date_key = a.accounts_created_date
          WHERE     d.date_key BETWEEN Upper(COALESCE('$START_DATE', '')) AND       Upper(COALESCE('$END_DATE', ''))
          GROUP BY  d.date_key)
SELECT   date_key,
         account_counts
FROM     accounts_by_mm_dd
ORDER BY date_key limit 5000;
```

+++

## Accounts by industry {#accounts-by-industry}

Questions answered by this insight:

- What are the top five industries that the account profiles belong to?

+++Select to reveal the SQL that generates this insight

```sql
WITH rankedindustries AS
(
           SELECT     i.industry,
                      Sum(f.counts)                                   AS total_accounts,
                      Row_number() OVER (ORDER BY Sum(f.counts) DESC) AS industry_rank
           FROM       adwh_fact_account f
           INNER JOIN adwh_dim_industry i
           ON         f.industry_id = i.industry_id
           WHERE      f.accounts_created_date BETWEEN Upper(COALESCE('$START_DATE', '')) AND        Upper(COALESCE('$END_DATE', ''))
           GROUP BY   i.industry )
SELECT
         CASE
                  WHEN industry_rank <= 5 THEN industry
                  ELSE 'Others'
         END                 AS industry_group,
         Sum(total_accounts) AS total_accounts
FROM     rankedindustries
GROUP BY
         CASE
                  WHEN industry_rank <= 5 THEN industry
                  ELSE 'Others'
         END
ORDER BY total_accounts DESC limit 5000;
```

+++

## Accounts by type {#accounts-by-type}

Questions answered by this insight:

- What is the count of accounts by their type?

+++Select to reveal the SQL that generates this insight

```sql
SELECT t.account_type,
       Sum(f.counts) AS account_count
FROM   adwh_fact_account f
       JOIN adwh_dim_account_type t
         ON f.account_type_id = t.account_type_id
WHERE  accounts_created_date BETWEEN Upper(Coalesce('$START_DATE', '')) AND
                                     Upper(
                                     Coalesce('$END_DATE', ''))
GROUP  BY t.account_type
LIMIT  5000; 
```

+++

## Opportunities added {#opportunities-added}

Questions answered by this insight:

- How many opportunities have been added over a given period?

+++Select to reveal the SQL that generates this insight

```sql
SELECT d.date_key,
       Coalesce(Sum(o.counts), 0) AS opportunity_counts
FROM   adwh_b2b_date d
       LEFT JOIN adwh_fact_opportunity o
              ON d.date_key = o.opportunities_created_date
WHERE  d.date_key BETWEEN Upper(Coalesce('$START_DATE', '')) AND
                          Upper(Coalesce('$END_DATE', ''))
GROUP  BY d.date_key
ORDER  BY d.date_key
LIMIT  5000; 
```

+++

## Opportunities by person role {#opportunities-by-person-role}

Questions answered by this insight:

- What is the relative size and count of the various roles in an opportunity?

+++Select to reveal the SQL that generates this insight

```sql
SELECT p.person_role,
       Sum(f.counts) AS opportunity_counts
FROM   adwh_fact_opportunity_person f
       JOIN adwh_dim_person_role p
         ON f.person_role_id = p.person_role_id
WHERE  f.opportunity_person_created_date BETWEEN
       Upper(Coalesce('$START_DATE', '')) AND Upper(Coalesce('$END_DATE', ''))
GROUP  BY p.person_role
LIMIT  5000; 
```

+++

## Opportunities by revenue {#opportunities-by-revenue}

Questions answered by this insight:

- What are the top 20 opportunities ranked by their revenue (in USD)?

+++Select to reveal the SQL that generates this insight

```sql
WITH ranked_opportunities AS
(
           SELECT     n.opportunity_name,
                      a.expected_revenue,
                      t.source_type,
                      Row_number() OVER (ORDER BY a.expected_revenue DESC) AS rank
           FROM       adwh_opportunity_amount a
           INNER JOIN adwh_dim_opportunity_name n
           ON         a.name_id = n.name_id
           INNER JOIN adwh_dim_opportunity_source_type t
           ON         n.source_type_id = t.source_type_id
           WHERE      a.opportunity_created_date BETWEEN Upper(COALESCE('$START_DATE', '')) AND        Upper(COALESCE('$END_DATE', ''))
           AND        a.isclosed='false' )
SELECT
         CASE
                  WHEN rank <= 20 THEN opportunity_name
                  ELSE 'Others'
         END                   AS opportunity_name,
         Sum(expected_revenue) AS total_expected_revenue
FROM     ranked_opportunities
GROUP BY
         CASE
                  WHEN rank <= 20 THEN opportunity_name
                  ELSE 'Others'
         END,
         source_type
ORDER BY total_expected_revenue DESC limit 5000;
```

+++

## Opportunities by status & stage {#opportunities-by-status-and-stage}

Questions answered by this insight:

- What open opportunities are there and at which stage of the sales or marketing funnel are they?
- What closed opportunities are there and at which stage of the sales or marketing funnel are they?

+++Select to reveal the SQL that generates this insight

```sql
WITH opportunities_by_isclosed AS
(
         SELECT   f.isclosed,
                  Sum(f.counts)             AS opportunity_counts,
                  COALESCE(s.stage, 'null') AS stage
         FROM     adwh_fact_opportunity f
         JOIN     adwh_dim_opportunity_stage s
         ON       f.stage_id = s.stage_id
         WHERE    opportunities_created_date BETWEEN Upper(COALESCE('$START_DATE', '')) AND      Upper(COALESCE('$END_DATE', ''))
         GROUP BY f.isclosed,
                  s.stage)
SELECT
       CASE
              WHEN isclosed='true' THEN 'Closed'
              ELSE 'Open'
       END AS opportunity_closed,
       stage,
       opportunity_counts
FROM   opportunities_by_isclosed limit 5000;
```

+++

## Opportunities won {#opportunities-won}

Questions answered by this insight:

- What is the count of opportunities that have been successfully closed or finalized?

+++Select to reveal the SQL that generates this insight

```sql
WITH opportunities_by_iswon AS
(
         SELECT   iswon,
                  Sum(counts) AS opportunity_counts
         FROM     adwh_fact_opportunity
         WHERE    opportunities_created_date BETWEEN Upper(COALESCE('$START_DATE', '')) AND      Upper(COALESCE('$END_DATE', ''))
         GROUP BY iswon)
SELECT
       CASE
              WHEN iswon ='true' THEN 'True'
              ELSE 'False'
       END AS opportunity_won,
       opportunity_counts
FROM   opportunities_by_iswon limit 5000;
```

+++

## Opportunities won (line graph) {#opportunities-won-line-graph}

<!-- Q) Can we change this name? -->

Questions answered by this insight:

- How many opportunities have been successfully closed or finalized (won) over a given period?

+++Select to reveal the SQL that generates this insight

```sql
WITH opportunities_won_counts AS
(
         SELECT   opportunities_created_date,
                  Sum(counts) AS opportunities_counts
         FROM     adwh_fact_opportunity
         WHERE    iswon='true'
         AND      opportunities_created_date BETWEEN Upper(COALESCE('$START_DATE', '')) AND      Upper(COALESCE('$END_DATE', ''))
         GROUP BY opportunities_created_date)
SELECT    d.date_key,
          COALESCE(o.opportunities_counts, 0) AS opportunity_won_counts
FROM      adwh_b2b_date d
LEFT JOIN opportunities_won_counts o
ON        d.date_key = o.opportunities_created_date
WHERE     d.date_key BETWEEN Upper(COALESCE('$START_DATE', '')) AND       Upper(COALESCE('$END_DATE', ''))
ORDER BY  d.date_key limit 5000;
```

+++

## Next steps

By reading this document, you now understand the SQL that generates account profile dashboard insights and what common questions this analysis solves. You can now edit and iterate on the SQL to generate your own insights.

<!-- Add link above Learn how to [generate insights with SQL](). after April release -->

You can also read and understand the SQL that generates insights for the [Profiles](./profiles.md), [Audiences](./audiences.md), and [Destinations](./destinations.md) dashboards.

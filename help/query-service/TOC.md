---
audience: user
user-guide-title: Adobe Experience Platform Query Service Help
breadcrumb-title: Query Service Guide
user-guide-description: Use standard SQL to query data within the data lake in Experience Platform.
feature: Queries
---

# Adobe Experience Platform Query Service {#query}

- [Query Service overview](home.md)
- [Query Service packaging](packages.md)
- [Query Service guardrails](guardrails.md)
- Get started {#get-started}
  - [Prerequisites](get-started/prerequisites.md)
- Data Distiller {#data-distiller}
  - [Licence usage](data-distiller/licence-usage.md)
  - Query accelerated store{#data-distiller/query-accelerated-store}
    - [Reporting insights data model](data-distiller/query-accelerated-store/reporting-insights-data-model.md)
  - Derived attributes {#data-distiller/derived-attributes}
    - [Overview](data-distiller/derived-attributes/overview.md)
    - [Deciles use case](data-distiller/derived-attributes/deciles-use-case.md)
- Use cases {#use-cases}
  - [Abandoned browse](use-cases/abandoned-browse.md)
  - [Activity Analysis With Adobe Target](use-cases/activity-analysis-with-adobe-target.md)
  - [Attribution analysis](use-cases/attribution-analysis.md)
  - [Bot filtering](use-cases/bot-filtering.md)
  - [Web and mobile analytics insights](use-cases/analytics-insights.md)
  - [Propensity score](use-cases/propensity-score.md)
- Connect clients to Query Service {#clients}
  - [Client connections overview](clients/overview.md)
  - [SSL modes](./clients/ssl-modes.md)
  - [Aqua Data Studio](clients/aqua-data-studio.md)
  - [DbVisualizer](./clients/dbvisulaizer.md)
  - [Jupyter Notebook](clients//jupyter-notebook.md)
  - [Looker](clients/looker.md)
  - [Postico](clients/postico.md)
  - [Power BI](clients/power-bi.md)
  - [PSQL](clients/psql.md)
  - [RStudio](clients/rstudio.md)
  - [Tableau](clients/tableau.md)
- Query Service UI {#ui}
  - [UI overview](ui/overview.md)
  - [Query Editor user guide](ui/user-guide.md)
  - [Query templates](ui/query-templates.md)
  - [Using Query Service credentials](ui/credentials.md)
  - [Generating datasets from query results](ui/create-datasets.md)
- Query Service API endpoints {#api}
  - [Getting started](api/getting-started.md)
  - [Queries](api/queries.md)
  - [Connection parameters](api/connection-parameters.md)
  - [Scheduled queries](api/scheduled-queries.md)
  - [Runs for scheduled queries](api/runs-scheduled-queries.md)
  - [Query templates](api/query-templates.md)
  - [Accelerated queries](api/accelerated-queries.md)
  - [Alert subscriptions](api/alert-subscriptions.md)
- [Monitor queries](monitor-queries.md)
- Data Governance {#data-governance}
  - [Overview](data-governance/overview.md)
  - [Audit log guide](data-governance/audit-log-guide.md)
  - [Identities in ad hoc schema datasets](data-governance/ad-hoc-schema-identities.md)
  - [Attribute-based access control support for ad hoc schemas](./data-governance/ad-hoc-schema-labels.md)
- Guidance on feature usage {#best-practices}
  - [General guidance for query execution](best-practices/writing-queries.md)
  - [Guidance for data asset organization](./best-practices/organize-data-assets.md)
  - [Working with nested data structures](best-practices/nested-data-structures.md)
  - [Flatten nested data structures](best-practices/flatten-nested-data.md)
  - [Anonymous block](best-practices/anonymous-block.md)
  - [Incremental loading](best-practices/incremental-load.md)
  - [Data deduplication](best-practices/deduplication.md)
- Sample Queries {#sample-queries}
  - [Sample Experience Event queries](sample-queries/experience-event.md)
  - [Sample Adobe Analytics queries](sample-queries/adobe-analytics.md)
- SQL reference {#sql}
  - [SQL overview](sql/overview.md)
  - [SQL syntax](sql/syntax.md)
  - [Adobe-defined functions](sql/adobe-defined-functions.md)
  - [Spark SQL functions](sql/spark-sql-functions.md)
  - [Metadata commands](sql/metadata.md)
  - [Prepared statements](sql/prepared-statements.md)
  - [Dataset samples](sql/dataset-samples.md)
- [FAQs](troubleshooting-guide.md)
- [API reference](https://www.adobe.io/experience-platform-apis/references/query-service/)
- [Platform release notes](https://www.adobe.com/go/platform-release-notes-en)
<!-- - [Overview](data-distiller/overview.md) new stub doc to be created -->
<!-- - [Accelerated Queries](data-distiller/query-accelerated-store/accelerated-queries.md) new stub doc to be created-->
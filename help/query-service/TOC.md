---
audience: user
user-guide-title: Adobe Experience Platform Query Service Help
breadcrumb-title: Query Service Guide
user-guide-description: Use standard SQL to query data in Platform Data Lake.
feature: Queries
---

# Adobe Experience Platform Query Service {#query}

- [Query Service overview](home.md)
- [Guardrails for Query Service](guardrails.md)
- Data Distiller {#data-distiller}
  - [Query Service packaging](data-distiller/packages.md)
- Get started {#get-started}
  - [Prerequisites](get-started/prerequisites.md)
- Use cases {#use-cases}
  - [Abandoned browse](use-cases/abandoned-browse.md)
  - [Activity Analysis With Adobe Target](use-cases/activity-analysis-with-adobe-target.md)
  - [Attribution analysis](use-cases/attribution-analysis.md)
  - [Bot filtering](use-cases/bot-filtering.md)
  - [Web and mobile analytics insights](use-cases/analytics-insights.md)
- Query Service API {#api}
  - [Getting started](api/getting-started.md)
  - [Queries](api/queries.md)
  - [Connection parameters](api/connection-parameters.md)
  - [Scheduled queries](api/scheduled-queries.md)
  - [Runs for scheduled queries](api/runs-scheduled-queries.md)
  - [Query templates](api/query-templates.md)
- Query Service UI {#ui}
  - [UI overview](ui/overview.md)
  - [Query Editor user guide](ui/user-guide.md)
  - [Query templates](ui/query-templates.md)
  - [Using Query Service credentials](ui/credentials.md)
  - [Generating datasets from query results](ui/create-datasets.md)
- Best practices {#best-practices}
  - [General guidance for query execution](best-practices/writing-queries.md)
  - [Guidance for data asset organization](./best-practices/organize-data-assets.md)
  - [Working with nested data structures](best-practices/nested-data-structures.md)
  - [Flatten nested data structures](best-practices/flatten-nested-data.md)
  - [Anonymous block](best-practices/anonymous-block.md)
  - [Incremental loading](best-practices/incremental-load.md)
  - [Data deduplication](best-practices/deduplication.md)
- Derived attributes {#derived-attributes}
  - [Overview](derived-attributes/overview.md)
  - [Deciles use case](derived-attributes/deciles-use-case.md)
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
- Connect clients to Query Service {#clients}
  - [Client connections overview](clients/overview.md)
  - [SSL modes](./clients/ssl-modes.md)
  - [Aqua Data Studio](clients/aqua-data-studio.md)
  - [Db Visualizer](./clients/dbvisulaizer.md)
  - [Looker](clients/looker.md)
  - [Postico](clients/postico.md)
  - [Power BI](clients/power-bi.md)
  - [PSQL](clients/psql.md)
  - [RStudio](clients/rstudio.md)
  - [Tableau](clients/tableau.md)
- Data Governance {#data-governance}
  - [Overview](data-governance/overview.md)
  - [Audit log guide](data-governance/audit-log-guide.md)
  - [Identities in ad hoc schema datasets](data-governance/ad-hoc-schema-identities.md)
  - [Attribute-based access control support for ad hoc schemas](./data-governance/ad-hoc-schema-labels.md)
- [Troubleshooting guide](troubleshooting-guide.md)
- [API reference](https://www.adobe.io/experience-platform-apis/references/query-service/)
- [Platform release notes](https://www.adobe.com/go/platform-release-notes-en)
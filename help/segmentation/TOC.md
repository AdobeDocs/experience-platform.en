---
audience: user
user-guide-title: Adobe Experience Platform Segmentation Service
breadcrumb-title: Segmentation Service Guide
user-guide-description: Build audiences from your Real-Time Customer Profile data using Adobe Experience Platform generated segment definitions or external sources.
feature: Segments
role: User
autotag-review: '2026-11-05T18:52:01.491Z'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: b1c2d3e4-1001-4001-9001-100000000001
    internal-label: Customer audiences
subfeature_v2:
  - id: f0c9f224-75f2-4864-8de6-859ae7856690
    internal-label: Segment match
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
topic_v2:
  - id: ff2b9b37-92e0-45fc-b853-379d44c08c89
    internal-label: Audience segmentation
---

# Adobe Experience Platform Segmentation Service {#segmentation}

- [Segmentation Service overview](home.md)
- [Segmentation data types](data-types.md)
- [Segmentation guardrails](https://experienceleague.adobe.com/docs/experience-platform/profile/guardrails.html#segmentation-guardrails)
- [Audience validation](./validation.md)
- Segmentation API {#api}
    - [Overview](api/overview.md)
    - [Getting started](api/getting-started.md)
    - {hide-from-toc} [Create audience metadata](api/create-audience.md)
    - [Audiences](api/audiences.md)
    - [Export jobs](api/export-jobs.md)
    - [External audiences](api/external-audiences.md)
    - [Previews and estimates](api/previews-and-estimates.md)
    - [Schedules](api/schedules.md)
    - [Segment definitions](api/segment-definitions.md)
    - [Segment jobs](api/segment-jobs.md)
    - [Segment search](api/segment-search.md)
- Segmentation UI {#ui}
    - [Overview](ui/overview.md)
    - [Audience dashboard](ui/audience-dashboard.md)
    - [Audience Portal](ui/audience-portal.md)
    - [Audience Composition](ui/audience-composition.md)
    - {hide-from-toc} [Deduplicate operator](ui/deduplicate.md)
    - {hide-from-toc} [Payload Rank and Payload Exclude operators](ui/payload-rank-exclude.md)
    - {hide-from-toc} [Audience Composition enhancements](ui/composition-enhancements.md)
    - [Audience Builder](ui/audience-builder.md)
    - [Segment Builder](ui/segment-builder.md)
    - [Audience Builder (B2B Edition)](https://experienceleague.adobe.com/en/docs/experience-platform/rtcdp/segmentation/audience-builder)
    - [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/home)
    - {hide-from-toc} [Ignore year time constraint update](ui/ignore-year.md)
    - {hide-from-toc} [Time constraints refactoring](ui/segment-refactoring.md)
    - Segment Match {#segment-match}
      - [Segment Match overview](ui/segment-match/overview.md) 
      - [Troubleshooting](ui/segment-match/troubleshooting.md)
- Segmentation methods {#methods}
  - [Overview](methods/overview.md)
  - [Batch segmentation](methods/batch-segmentation.md)
  - [Streaming segmentation](methods/streaming-segmentation.md)
  - [Edge segmentation](methods/edge-segmentation.md)
  - [Flexible Batch Schedules](methods/flexible-batch-schedules.md)
  - [Flexible audience evaluation](methods/flexible-audience-evaluation.md)
  - [On-demand evaluation](methods/on-demand-evaluation.md)
- Audience types {#types}
  - [Overview](types/overview.md)
  - [People audiences](types/people-audiences.md)
  - [Prospect audiences](types/prospect-audiences.md)
  - [Account audiences](types/account-audiences.md)
  - [Look-alike audiences](types/lookalike-audiences.md)
- Tutorials {#tutorials}
  - [Create a segment definition](tutorials/create-a-segment.md)
  - [Create a segment definition (Video)](video/create-segment.md)
  - [Create a dynamic segment definition (Video)](video/create-a-dynamic-segment.md)
  - [Create a multi-entity segment definition (video)](video/create-multi-entity-segments.md)
  - [Multi-entity segmentation](tutorials/multi-entity-segmentation.md)
  - [Honoring consent](tutorials/consents.md)
  - [Evaluate a segment definition](tutorials/evaluate-a-segment.md)
  - [Creating an external audience](tutorials/create-external-audience.md)
  - [Create a dataset to export data](tutorials/create-dataset-export-segment.md)
  - [Enforce data usage compliance for audiences](tutorials/governance.md)
- Profile Query Language {#pql}
  - [Overview](pql/overview.md)
  - [Boolean functions](pql/boolean-functions.md)
  - [Comparison functions](pql/comparison-functions.md)
  - [Array, list, and set functions](pql/array-functions.md)
  - [Map functions](pql/map-functions.md)
  - [String functions](pql/string-functions.md)
  - [Object functions](pql/object-functions.md)
  - [Arithmetic functions](pql/arithmetic-functions.md)
  - [Aggregation functions](pql/aggregation-functions.md)
  - [Date and time functions](pql/datetime-functions.md)
  - [Filter functions](pql/filter-functions.md)
  - [Logical quantifiers](pql/logical-quantifiers.md)
  - [Miscellaneous functions](pql/misc-functions.md)
- {hide-from-toc} [Eligibility criteria update](./eligibility-criteria-update.md)
- [Frequently asked questions](./faq.md)
- [API reference](https://developer.adobe.com/experience-platform-apis/references/segmentation)
- [Platform release notes](https://experienceleague.adobe.com/en/docs/experience-platform/release-notes/latest)
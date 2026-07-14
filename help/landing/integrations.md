---
title: "[!DNL Adobe Experience Platform] Integrations"
description: Learn how [!DNL Adobe Analytics], [!DNL Adobe Target], and other products connect to [!DNL Experience Platform] as sources or destinations to extend your customer experience stack.
solution: Experience Platform
feature: Getting Started
topic: Overview
role: User, Developer, Leader
---

# [!DNL Adobe Experience Platform] integrations

If your team uses [!DNL Adobe Experience Platform] together with other Adobe solutions, you need a simple picture of what connects where, without drowning in product names. This page gives you that picture: how data comes into [!DNL Experience Platform], how audiences and attributes go out to tools like [!DNL Adobe Target], and where to read the detailed setup guides.

Start with [How Adobe Experience Platform and applications work together](apps-overview.md) if you want the full story on [!DNL Experience Platform]-first apps ([!DNL Real-Time CDP], [!DNL Adobe Journey Optimizer], [!DNL Customer Journey Analytics], [!DNL Adobe Marketing Campaign Analytics] (formerly [!DNL Adobe Mix Modeler])). This companion page focuses on other products in the Adobe stack that tie into [!DNL Experience Platform].

## What this page covers {#what-this-page-covers}

Use this list as a map. You can jump to any section from the headings below.

- **Two mental models:** [!DNL Experience Platform]-first apps versus products that integrate with [!DNL Experience Platform] (sources, destinations, shared [!DNL Adobe CX Enterprise] shell).
- **Four integration patterns:** Ingestion, activation, shared services, and [!DNL Data Collection] (collection is part of [!DNL Experience Platform], not a separate side product).
- **Adobe apps as sources:** [!DNL Analytics], [!DNL Audience Manager], [!DNL Campaign], [!DNL Marketo], and others that bring data into [!DNL Experience Platform].
- **[!DNL Adobe Target]:** How you use [!DNL Experience Platform] audiences and attributes in personalization and tests.
- **Real-world scenarios:** Short [!DNL Analytics]-as-source and [!DNL Target]-as-destination examples.
- **Other destinations:** Where to browse connectors beyond [!DNL Target].
- **Three checks before you scale:** Identity, governance, system of record.

>[!NOTE]
>
>This is an overview, not a setup tutorial. Your license, region, and product edition control what you can turn on. For step-by-step connector configuration, limits, and UI paths, follow the linked [!DNL Experience Platform] Sources and Destinations guides and each product's own help.

## Who this is for {#who-should-read}

| If you are… | You'll get… |
| --- | --- |
| Architect or engineer | A single mental model for pipelines: what lands in [!DNL Experience Platform], what leaves [!DNL Experience Platform], and what sits in the shared Adobe shell. |
| Marketing ops or CX lead | Clarity on which Adobe tools feed [!DNL Experience Platform] versus receive audiences and attributes, including [!DNL Adobe Target] for onsite and in-app experiences. |
| Analyst or data practitioner | Context for how historic analytics or campaign data fits next to unified Profile data, and why definitions still need to match. |

## [!DNL Experience Platform]-first apps versus integrations {#built-on-vs-connects}

Here's the distinction that reduces confusion:

- **Built on [!DNL Experience Platform]:** Products like [!DNL Real-Time CDP] and [!DNL Journey Optimizer] run their core workflows on the same profiles, audiences, and governance you configure in [!DNL Experience Platform]. See [Purpose of each application]apps-overview.md#applications-at-a-glance).
- **Integrates with [!DNL Experience Platform]:** Another Adobe product sends data to [!DNL Experience Platform] (sources), receives audiences or attributes from [!DNL Experience Platform] (destinations), or shows up together with [!DNL Experience Platform] inside [!DNL Adobe CX Enterprise] (shared navigation, [!DNL Audience Library], and similar services). For context, see [Adobe CX Enterprise](apps-overview.md#cx-enterprise).

Most real-world teams use both. You unify customer data on [!DNL Experience Platform], and you still plug in analytics history, media tools, or personalization products where your roadmap says they belong.

## Integration patterns (quick reference) {#integration-types}

| Pattern | In plain terms | Start here |
| --- | --- | --- |
| Sources | You bring data into [!DNL Experience Platform] datasets (often toward [!DNL Real-Time Customer Profile]). | [Sources overview](../sources/home.md) |
| Destinations | You send audiences, attributes, or exports out to channels, ads, personalization, storage, or partners. | [Destinations overview](../destinations/home.md) |
| Shared [!DNL CX Enterprise] services | You move between Adobe apps with one shell that includes navigation and shared services like [!DNL Audience Library] or [!DNL Customer Attributes], not a separate data pipe by itself. | [Adobe CX Enterprise](apps-overview.md#cx-enterprise) |
| [!DNL Data Collection] | You collect behavior from sites and apps ([!DNL Tags], [!DNL Web SDK], [!DNL Mobile SDK], datastreams) into [!DNL Experience Platform] and [!DNL Edge Network]. This is part of [!DNL Experience Platform], not an optional bolt-on other cloud. | [Data Collection overview](../collection/home.md) |

## [!DNL Data Collection]: part of your [!DNL Experience Platform] foundation {#data-collection}

Use [!DNL Adobe Experience Platform Data Collection] ([!DNL Tags], [!DNL Experience Platform Web SDK], [!DNL Experience Platform Mobile SDK], and [datastreams](../datastreams/overview.md)) to implement collection into [!DNL Experience Platform] and the [!DNL Edge Network]. Think of it as infrastructure that sits with ingestion and [!DNL Identity Service], not alongside unrelated marketing clouds.

If you're already rolling out [!DNL Web SDK] or [!DNL Mobile SDK] for [!DNL Real-Time CDP], [!DNL Journey Optimizer], or [!DNL Customer Journey Analytics], you're using this same layer described under [Experience Platform services at a glance](apps-overview.md#core-platform-services).

## Bringing Adobe application data into [!DNL Experience Platform] (sources) {#adobe-sources}

You might already have rich data in other Adobe products. [!DNL Experience Platform] can ingest from several of them so that history and specialized fields sit next to your unified model, always with schemas, mapping, and governance applied.

Examples called out in [!DNL Experience Platform] documentation include:

- [!DNL Adobe Analytics] (report suite data and classifications)
- [!DNL Adobe Audience Manager]
- [!DNL Adobe Campaign Managed Cloud Services]
- [!DNL Marketo Engage]

Your next step: Open the [Sources overview](../sources/home.md), then use the Adobe applications category in the catalog to find the connector you need.

## [!DNL Adobe Target] {#adobe-target}

[!DNL Adobe Target] is where many teams run personalization and experimentation across websites, mobile apps, and similar touchpoints. It isn't listed among the four [!DNL Experience Platform]-first apps in the [companion overview](apps-overview.md#applications-at-a-glance). Instead, [!DNL Target] usually acts on what you've already decided in [!DNL Experience Platform] (who qualifies for what, which attributes matter).

How this typically works for you:

1. **Activate from [!DNL Experience Platform]:** You share audiences built from [!DNL Real-Time Customer Profile] (and your segmentation workflows) into [!DNL Target] using the [Adobe Target connection](../destinations/catalog/personalization/adobe-target-connection.md) in the destinations catalog. Where the product supports it, you also send profile attributes for personalization, not just list membership.
2. **Match implementation to your stack:** What you can do depends on how [!DNL Target] is deployed: [!DNL Experience Platform Web SDK] with [datastreams](../datastreams/overview.md), or other paths described in the destination guide. Some scenarios use [edge segmentation](../segmentation/home.md#edge) and [edge personalization](../destinations/ui/activate-edge-personalization-destinations.md). Batch and streaming audiences behave differently depending on setup. The destination documentation spells out the matrix.

Where to read next: Start with [Adobe Target connection](../destinations/catalog/personalization/adobe-target-connection.md) (use cases, sandboxes, workspaces, mapping). For [!DNL Edge Network] and collection context, see [Data Collection overview](../collection/home.md).

## Real-world scenarios {#real-world-scenarios}

These stories are simplified for illustration. Your sources, identity setup, and licenses will differ. Use them as conversation starters with your implementation team, not as deploy scripts.

### Retail brand: [!DNL Adobe Analytics] history joins unified profiles {#scenario-analytics}

A retailer already relies on [!DNL Adobe Analytics] for digital behavior and campaign attribution. They turn on the [Adobe Analytics source connector](../sources/connectors/adobe-applications/analytics.md) so report-suite data lands in [!DNL Experience Platform] datasets with agreed field mappings. Identity rules tie [!DNL Analytics] identifiers to namespaced IDs used elsewhere (for example CRM or loyalty systems where policy allows). Once that data sits alongside newer web and app events collected through [!DNL Data Collection], marketers build audiences in [!DNL Real-Time CDP] from a fuller picture, not only "who clicked yesterday" in isolation, but who they are across channels. Those audiences can be activated to email, paid media, or [!DNL Adobe Journey Optimizer] journeys using the same governance labels the team set on [!DNL Experience Platform].

Takeaway: [!DNL Analytics] becomes part of the unified customer record on [!DNL Experience Platform] instead of a separate silo, as long as identity and definitions stay aligned.

### Same retailer: audiences power personalization in [!DNL Adobe Target] {#scenario-target}

The personalization team wants the homepage hero and product grids to reflect loyalty tier and recent high-intent browsing, not a one-size-fits-all site. Audiences built on [!DNL Experience Platform] (for example members who browsed running gear but did not purchase in seven days) are activated to [!DNL Adobe Target] through the [Adobe Target connection](../destinations/catalog/personalization/adobe-target-connection.md). [!DNL Target] activities and experiences read those audiences so visitors see tailored offers or layouts in tests the team runs there. Depending on implementation, profile attributes may also flow for richer personalization. Edge-oriented setups may use [!DNL Web SDK] and datastreams as described in that destination guide.

Takeaway: [!DNL Experience Platform] decides who qualifies. [!DNL Adobe Target] decides how to present the experience to those visitors within your tests and activities.

## Other Adobe and partner destinations {#adobe-destinations}

Beyond [!DNL Target], you can activate to many other Adobe and non-Adobe endpoints (email, ads, storage, and more) depending on entitlement.

Browse everything in the [destinations catalog](../destinations/catalog/overview.md). Always confirm your contract and regional availability for a given connector before you design around it.

For [!DNL Real-Time CDP B2B Edition], [!DNL Journey Orchestration], [!DNL Real-Time CDP Collaboration], and other applications on [!DNL Experience Platform] that are not the four in the main companion table, see [Other applications and editions on Experience Platform](apps-overview.md#other-applications-and-editions).

## Three checks before you scale {#checkpoints}

When you wire [!DNL Experience Platform] to other Adobe products, teams hit fewer surprises if you agree upfront on:

- **Identity:** Are namespaces and IDs aligned so Profile, destinations, and reporting all refer to the same person or account where policy allows? If not, audiences and dashboards won't match, and your customers get inconsistent experiences.
- **Governance:** Labels and consent on [!DNL Experience Platform] follow your audiences into activation. Downstream tools need to honor those choices, not bypass them.
- **System of record:** Is [!DNL Experience Platform] the source of truth for a given attribute for this journey, or does another system still own it? Ambiguity here causes conflicting messages and reporting.

## Additional resources {#additional-resources}

- [How Adobe Experience Platform and applications work together](apps-overview.md): [!DNL Experience Platform]-first apps and how they share data.
- [Adobe Experience Platform overview](https://experienceleague.adobe.com/en/docs/experience-platform/landing/home): Main help entry points.
- [Digital experience blueprints](https://experienceleague.adobe.com/en/docs/blueprints-learn/architecture/overview/experience-cloud): Reference architectures across Adobe solutions.
- [Adobe Experience Platform and applications (architecture diagrams)](https://experienceleague.adobe.com/en/docs/blueprints-learn/architecture/architecture-overview/platform-applications): Visual stack diagrams.

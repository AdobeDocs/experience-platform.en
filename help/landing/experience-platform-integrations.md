---
title: Adobe Experience Platform integrations
description: How your Adobe CX Enterprise products connect to Experience Platform—sources, destinations, shared services, Adobe Target, and where to go next—in plain language.
solution: Experience Platform
feature: Getting Started
topic: Overview
keywords: Experience Platform, integrations, Adobe CX Enterprise, Adobe Analytics, Adobe Target, Data Collection, sources, destinations, Adobe Journey Orchestration, Real-Time CDP Collaboration
role: Architect, Developer, Data Architect, Data Engineer, Business Practitioner
---

# Adobe Experience Platform integrations

If your team uses Adobe Experience Platform together with other Adobe solutions, you need a simple picture of what connects where, without drowning in product names. This page gives you that picture: how data comes into Experience Platform, how audiences and attributes go out to tools like Adobe Target, and where to read the detailed setup guides.

Start with [How Adobe Experience Platform and applications work together](experience-platform-apps-overview.md) if you want the full story on Experience Platform-first apps (Real-Time CDP, Adobe Journey Optimizer, Customer Journey Analytics, Adobe Marketing Campaign Analytics (formerly Adobe Mix Modeler)). This companion page focuses on other products in the Adobe stack that tie into Experience Platform.

## What this page covers {#what-this-page-covers}

Use this list as a map. You can jump to any section from the headings below.

- **Two mental models:** Experience Platform-first apps versus products that integrate with Experience Platform (sources, destinations, shared Adobe CX Enterprise shell).
- **Four integration patterns:** Ingestion, activation, shared services, and Data Collection (collection is part of Experience Platform, not a separate "side product").
- **Adobe apps as sources:** Analytics, Audience Manager, Campaign, Marketo—examples of bringing data into Experience Platform.
- **Adobe Target:** How you use Experience Platform segments and attributes in personalization and tests.
- **Real-world scenarios:** Short Analytics-as-source and Target-as-destination examples.
- **Other destinations:** Where to browse connectors beyond Target.
- **Three checks before you scale:** Identity, governance, system of record.

>[!NOTE]
>
>This is an overview, not a setup tutorial. Your license, region, and product edition control what you can turn on. For step-by-step connector configuration, limits, and UI paths, follow the linked Experience Platform Sources and Destinations guides and each product's own help.

## Who this is for {#who-should-read}

| If you are… | You'll get… |
| --- | --- |
| Architect or engineer | A single mental model for pipelines: what lands in Experience Platform, what leaves Experience Platform, and what sits in the shared Adobe shell. |
| Marketing ops or CX lead | Clarity on which Adobe tools feed Experience Platform versus receive audiences and attributes, including Adobe Target for onsite and in-app experiences. |
| Analyst or data practitioner | Context for how historic analytics or campaign data fits next to unified Profile data, and why definitions still need to match. |

## Experience Platform-first apps versus integrations {#built-on-vs-connects}

Here's the distinction that reduces confusion:

- **Built on Experience Platform:** Products like Real-Time CDP and Journey Optimizer run their core workflows on the same profiles, segments, and governance you configure in Experience Platform. See [Purpose of each application](experience-platform-apps-overview.md#applications-at-a-glance).
- **Integrates with Experience Platform:** Another Adobe product sends data to Experience Platform (sources), receives audiences or attributes from Experience Platform (destinations), or shows up together with Experience Platform inside Adobe CX Enterprise (shared navigation, Audience Library, and similar—see [Adobe CX Enterprise](experience-platform-apps-overview.md#cx-enterprise)).

Most real-world teams use both. You unify customer data on Experience Platform, and you still plug in analytics history, media tools, or personalization products where your roadmap says they belong.

## Integration patterns (quick reference) {#integration-types}

| Pattern | In plain terms | Start here |
| --- | --- | --- |
| Sources | You bring data into Experience Platform datasets (often toward Real-Time Customer Profile). | [Sources overview](../sources/home.md) |
| Destinations | You send audiences, attributes, or exports out to channels, ads, personalization, storage, or partners. | [Destinations overview](../destinations/home.md) |
| Shared CX Enterprise services | You move between Adobe apps with one shell—navigation, shared services like Audience Library or Customer Attributes, not a separate data pipe by itself. | [Adobe CX Enterprise](experience-platform-apps-overview.md#cx-enterprise) |
| Data Collection | You collect behavior from sites and apps (Tags, Web SDK, Mobile SDK, datastreams) into Experience Platform and Edge. This is part of Experience Platform, not an optional bolt-on other cloud. | [Data Collection overview](../collection/home.md) |

## Data Collection: part of your Experience Platform foundation {#data-collection}

Use Adobe Experience Platform Data Collection—Tags, Experience Platform Web SDK, Experience Platform Mobile SDK, and [datastreams](../datastreams/overview.md)—to implement collection into Experience Platform and the Edge Network. Think of it as infrastructure that sits with ingestion and Identity Service, not alongside unrelated marketing clouds.

If you're already rolling out Web SDK or Mobile SDK for Real-Time CDP, Journey Optimizer, or Customer Journey Analytics, you're using this same layer described under [Experience Platform services at a glance](experience-platform-apps-overview.md#core-platform-services).

## Bringing Adobe application data into Experience Platform (sources) {#adobe-sources}

You might already have rich data in other Adobe products. Experience Platform can ingest from several of them so that history and specialized fields sit next to your unified model, always with schemas, mapping, and governance applied.

Examples called out in Experience Platform documentation include:

- Adobe Analytics (report suite data and classifications)
- Adobe Audience Manager
- Adobe Campaign Managed Cloud Services
- Marketo Engage

Your next step: Open the [Sources overview](../sources/home.md), then use the Adobe applications category in the catalog to find the connector you need.

## Adobe Target {#adobe-target}

Adobe Target is where many teams run personalization and experimentation—websites, mobile apps, and similar touchpoints. It isn't listed among the four Experience Platform-first apps in the [companion overview](experience-platform-apps-overview.md#applications-at-a-glance). Instead, Target usually acts on what you've already decided in Experience Platform (who qualifies for what, which attributes matter).

How this typically works for you:

1. **Activate from Experience Platform:** You share segments built from Real-Time Customer Profile (and your segmentation workflows) into Target using the [Adobe Target connection](../destinations/catalog/personalization/adobe-target-connection.md) in the destinations catalog. Where the product supports it, you also send profile attributes for personalization, not just list membership.
2. **Match implementation to your stack:** What you can do depends on how Target is deployed: Experience Platform Web SDK with [datastreams](../datastreams/overview.md), or other paths described in the destination guide. Some scenarios use [edge segmentation](../segmentation/home.md#edge) and [edge personalization](../destinations/ui/activate-edge-personalization-destinations.md). Batch and streaming audiences behave differently depending on setup. The destination documentation spells out the matrix.

Where to read next: Start with [Adobe Target connection](../destinations/catalog/personalization/adobe-target-connection.md) (use cases, sandboxes, workspaces, mapping). For Edge and collection context, see [Data Collection overview](../collection/home.md).

## Real-world scenarios {#real-world-scenarios}

These stories are simplified for illustration. Your sources, identity setup, and licenses will differ. Use them as conversation starters with your implementation team, not as deploy scripts.

### Retail brand: Adobe Analytics history joins unified profiles {#scenario-analytics}

A retailer already relies on Adobe Analytics for digital behavior and campaign attribution. They turn on the [Adobe Analytics source connector](../sources/connectors/adobe-applications/analytics.md) so report-suite data lands in Experience Platform datasets with agreed field mappings. Identity rules tie Analytics identifiers to namespaced IDs used elsewhere (for example CRM or loyalty systems where policy allows). Once that data sits alongside newer web and app events collected through Data Collection, marketers build audiences in Real-Time CDP from a fuller picture, not only "who clicked yesterday" in isolation, but who they are across channels. Those audiences can be activated to email, paid media, or Adobe Journey Optimizer journeys using the same governance labels the team set on Experience Platform.

Takeaway: Analytics becomes part of the unified customer record on Experience Platform instead of a separate silo, as long as identity and definitions stay aligned.

### Same retailer: audiences power personalization in Adobe Target {#scenario-target}

The personalization team wants the homepage hero and product grids to reflect loyalty tier and recent high-intent browsing, not a one-size-fits-all site. Segments built on Experience Platform (for example members who browsed running gear but did not purchase in seven days) are activated to Adobe Target through the [Adobe Target connection](../destinations/catalog/personalization/adobe-target-connection.md). Target activities and experiences read those audiences so visitors see tailored offers or layouts in tests the team runs there. Depending on implementation, profile attributes may also flow for richer personalization. Edge-oriented setups may use Web SDK and datastreams as described in that destination guide.

Takeaway: Experience Platform decides who qualifies. Adobe Target decides how to present the experience to those visitors within your tests and activities.

## Other Adobe and partner destinations {#adobe-destinations}

Beyond Target, you can activate to many other Adobe and non-Adobe endpoints—email, ads, storage, and more—depending on entitlement.

Browse everything in the [destinations catalog](../destinations/catalog/overview.md). Always confirm your contract and regional availability for a given connector before you design around it.

For Real-Time CDP B2B Edition, Journey Orchestration, Real-Time CDP Collaboration, and other applications on Experience Platform that are not the four in the main companion table, see [Other applications and editions on Experience Platform](experience-platform-apps-overview.md#other-applications-and-editions).

## Three checks before you scale {#checkpoints}

When you wire Experience Platform to other Adobe products, teams hit fewer surprises if you agree upfront on:

- **Identity:** Are namespaces and IDs aligned so Profile, destinations, and reporting all refer to the same person or account where policy allows? If not, segments and dashboards won't match, and your customers get inconsistent experiences.
- **Governance:** Labels and consent on Experience Platform follow your segments into activation. Downstream tools need to honor those choices, not bypass them.
- **System of record:** Is Experience Platform the source of truth for a given attribute for this journey, or does another system still own it? Ambiguity here causes conflicting messages and reporting.

## Additional resources {#additional-resources}

- [How Adobe Experience Platform and applications work together](experience-platform-apps-overview.md) — Experience Platform-first apps and how they share data.
- [Adobe Experience Platform overview](https://experienceleague.adobe.com/en/docs/experience-platform/landing/home) — Main help entry points.
- [Digital experience blueprints](https://experienceleague.adobe.com/en/docs/blueprints-learn/architecture/overview/experience-cloud) — Reference architectures across Adobe solutions.
- [Adobe Experience Platform and applications (architecture diagrams)](https://experienceleague.adobe.com/en/docs/blueprints-learn/architecture/architecture-overview/platform-applications) — Visual stack diagrams.

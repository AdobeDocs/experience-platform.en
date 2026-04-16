---
title: How Adobe Experience Platform and applications work together
description: Adobe Experience Platform and each application works alone, and they work together to support your customer goals. 
solution: Experience Platform
feature: Getting Started
topic: Overview
role: Architect, Developer, Data Architect, Data Engineer, Business Practitioner
exl-id: c4f8e2a1-6b3d-4f92-9c7e-1a2b3c4d5e6f
---

# How Adobe Experience Platform and applications work together

This topic explains three ideas.

1. What [!DNL Adobe Experience Platform] does by itself.
2. What each application does by itself.
3. How the platform and applications work together so your organization can meet its goals and serve your customers well.

Share this topic with marketers, product owners, and people who build or run the solution. After you read it, use step-by-step guides in [!DNL Experience League] when you need product tasks or technical details.

>[!NOTE]
>
>This topic is an overview. For how-to steps, user interface actions, and API details, see the links in [Additional resources](#additional-resources).

## What the applications are, and the main purpose of each {#applications-at-a-glance}

In this documentation, an application is a licensed Adobe product that runs on [!DNL Adobe Experience Platform]. Applications use the same customer profile, data structure, identity links, and data rules as the platform. Each application adds its own screens and workflows for a type of work (for example sending audiences to channels, running journeys, or reporting results).

The table below lists each application. It gives a short description and main purpose. It does not list every product edition. What you can buy depends on your license.

| Application | What it is | Main purpose |
|---------------|------------|----------------|
| [[!DNL Real-Time Customer Data Platform (Real-Time CDP)]](https://experienceleague.adobe.com/en/docs/experience-platform/rtcdp/home) | Application for customer data and audiences | Bring your own customer data together. Build audiences that update often. Send audiences and attributes to ads, email, mobile apps, and other tools. Data rules are applied. The same product family supports consumer businesses, business customers, and mixed models. See product help for editions. |
| [[!DNL Adobe Journey Optimizer]](https://experienceleague.adobe.com/en/docs/journey-optimizer) | Application for journeys and messages | Plan and run personalized journeys (for example welcome paths, retention, or follow-up after service). Send messages across channels using live events and profile data. |
| [[!DNL Customer Journey Analytics]](https://experienceleague.adobe.com/en/docs/customer-journey-analytics) | Application for analysis across channels | Measure and study how customers move through journeys and how marketing performs. Uses data that is prepared in [!DNL Adobe Experience Platform]. |
| [[!DNL Adobe Mix Modeler]](https://experienceleague.adobe.com/en/docs/mix-modeler) | Application for marketing measurement and planning | Bring measurement together (including marketing mix modeling). Plan spending scenarios for marketing. Uses data connected through [!DNL Adobe Experience Platform] so teams can see what drives results and plan budgets. |

>[!NOTE]
>
>Other Adobe Experience Cloud products can connect to [!DNL Adobe Experience Platform]. This topic focuses on applications that use the platform as their main source of customer data. Product names, editions, and what is sold can differ by license and country or region.

## What you will understand after reading {#learning-outcomes}

After you read this topic, you should be able to do the following.

1. Describe the platform by itself — Explain what [!DNL Adobe Experience Platform] does as the shared base for data and data rules. You can explain this without naming a specific application.
2. Describe each main application by itself — Say what business goal each application supports and what type of work it is for.
3. Describe how platform and applications fit together — Explain how customer profiles, identities, data shapes (schemas), and data rules move from the platform into applications. Explain why teams do not need to build separate, conflicting data pipelines for each tool.
4. Connect a goal to the right part of the solution — For a sample goal (for example "run onboarding across email and mobile"), name which parts of the platform and which applications usually support that goal.

In this topic, "your goals" means what your organization wants (for example growth, efficiency, or customer trust). "Your customers" means people who interact with your brand. The platform and applications exist to help your teams serve those customers.

## Who should read this topic {#who-should-read}

| Your role | How this topic helps |
|-----------|------------------------|
| Business and marketing leaders | Connect customer and brand goals to platform features and applications. Use the same words as your technical teams. |
| People in marketing operations, analytics, or customer experience | See where data comes together, where choices are made, and which application fits which step. |
| Architects, engineers, and developers | Use the same simple model and terms as the rest of [!DNL Experience League] when you design or build. |

## How [!DNL Adobe Experience Platform] works on its own {#platform-alone}

[!DNL Adobe Experience Platform] is the base layer for customer experience data. It is not a single marketing screen. It is built on services that run in the background. Before you open an application, the platform can do the following.

| What the platform does | Why this helps you |
|--------------------------|---------------------|
| Brings in data from websites, apps, and business systems (in files or as a live stream) | You are not stuck with one channel or one database. You can build a fuller view over time. |
| Structures data with schemas based on the Experience Data Model (XDM) so events and fields share one meaning | Teams that analyze data, send audiences, and check compliance all use the same definitions. That reduces mistakes and repeat work. |
| Links identities so that, within your rules, the same person or account can be recognized across devices and systems | Teams can work from one view of the customer where policy allows. |
| Keeps [!DNL Real-Time Customer Profile] up to date as the live view for decisions and sending data out | Choices can use current data, not only an old file from yesterday. |
| Builds audiences (segmentation) from profile data, behavior, and consent | You define who is included in one place. Other steps reuse that logic. |
| Sends data out to destinations (exports and connected systems) and applies data rules through labels, policies, and [!DNL Privacy Service] | Teams can move faster while still following consent and law. |

In short, the platform unites customer data, applies rules, and prepares data for use. It does not replace the full screens that applications provide for journey design, media workflows, or cross-channel reports. Applications provide those experiences.

### Platform services at a glance {#core-platform-services}

| Area | What it does on the base layer |
|------|--------------------------------|
| Data collection ([!DNL Tags], [!DNL Experience Platform Web SDK], [!DNL Experience Platform Mobile SDK], datastreams) | Collect data from digital experiences in a standard way. |
| Sources and bringing data in | Connect data from company systems and cloud sources to the platform. |
| XDM and schemas | Set the structure and meaning of experience data. |
| [!DNL Identity Service] | Connect identifiers into one view within policy. |
| [!DNL Real-Time Customer Profile] | Hold the live profile used for decisions and sending data out. |
| Segmentation | Define audiences from profile data and events. |
| Destinations | Send audiences and attributes to other systems that run marketing or service. |
| Data governance, [!DNL Privacy Service], consent | Control how data may be used. |
| [!DNL Data Science Workspace] | Build, train, and run machine learning models on platform data. This is a platform feature, not an application. |
| [!DNL Query Service] | Run SQL on Experience Platform data for analysis and reporting. This is a platform service, not an application. |

These areas support a simple flow: collect → unite → decide → activate → measure. Data rules apply at each step.

## How applications work on their own {#applications-alone}

A short list of each application and its main purpose is in [What the applications are, and the main purpose of each](#applications-at-a-glance). The table below adds detail. It shows what each application does on its own and what goal it supports.

Applications are user experiences and workflows on the platform. Each one helps your teams do a main type of work. All of them draw from the same profile and data rules. Teams do not need to copy the full data stack for each tool.

| Application | What it does on its own (main job) | What goal it helps you reach |
|-------------|-------------------------------------|------------------------------|
| [[!DNL Real-Time Customer Data Platform (Real-Time CDP)]](https://experienceleague.adobe.com/en/docs/experience-platform/rtcdp/home) | Manage audiences and activation: build segments, update membership often, send audiences and attributes to destinations. Supports consumer, business, and mixed use cases depending on your license. | Reach the right people and exclude the wrong ones across paid, owned, and partner channels using your own unified customer data. |
| [[!DNL Adobe Journey Optimizer]](https://experienceleague.adobe.com/en/docs/journey-optimizer) | Design journeys and send messages: react to events, branch paths, and send across channels from one journey workspace. | Run personalized sequences (for example onboarding, retention, or service follow-up) that respond to what the customer just did. |
| [[!DNL Customer Journey Analytics]](https://experienceleague.adobe.com/en/docs/customer-journey-analytics) | Report and analyze journeys and campaign results using one data foundation. | See what happened and why across channels so you can improve spend and experience. |
| [[!DNL Adobe Mix Modeler]](https://experienceleague.adobe.com/en/docs/mix-modeler) | Combine platform-connected data with models to measure channels and run planning scenarios. | Plan and adjust marketing spend with a steady view of how channels and other factors affect results. |

In short, applications are how teams do their daily work (activation, journeys, analysis, marketing measurement). The platform is what holds the customer data and rules that all of those teams trust. The platform also offers querying and advanced modeling through the services above.

>[!IMPORTANT]
>
>Which applications you can use depends on your Adobe license. Features, limits, and availability can change. Check your contract and the latest [!DNL Experience League] documentation.

## How the platform and applications work together {#platform-and-apps-together}

When we say platform and applications work together, we mean three things.

1. One customer profile, many products — [!DNL Real-Time Customer Profile], [!DNL Identity Service], and data rules are shared. [!DNL Real-Time CDP], [!DNL Adobe Journey Optimizer], [!DNL Customer Journey Analytics], and [!DNL Adobe Mix Modeler] read from that same base (and related data). You do not maintain one customer list for analytics and a different list for marketing unless your process requires it.
2. One meaning for what happened — Data is shaped with XDM schemas. The same event can feed reporting, journeys, and audience rules. Teams spend less time arguing about definitions.
3. One place for data rules — Labels and policies apply to the data that applications use. Data rules are not only added later inside each tool.


### End-to-end flows (how work runs across platform and apps) {#end-to-end-flows}

| Stage | What the platform does | What applications usually add |
|-------|----------------------------|-------------------------------------|
| Know | Bring data in, structure it, link identity, update Profile | Applications read Profile and events. They do not replace the step of bringing data in. |
| Decide | Build segments and check who qualifies using united data | [!DNL Real-Time CDP] for building audiences. [!DNL Adobe Journey Optimizer] for journey paths and the next best action in context. |
| Activate | Destinations and controlled export of audiences and attributes | [!DNL Real-Time CDP] supports many activation patterns. Journeys send messages through the channels you set up. |
| Measure | Events and identities that follow one model in the data layer | [!DNL Customer Journey Analytics] for journey and campaign reporting. [!DNL Adobe Mix Modeler] for unified marketing measurement and planning that uses platform-connected data. |

## Example: One workflow that uses the platform and all four applications {#example-full-stack-workflow}

The story below is one common pattern. Your teams might change the order or skip a step. The goal is to show how [!DNL Adobe Experience Platform] and [!DNL Real-Time CDP], [!DNL Adobe Journey Optimizer], [!DNL Customer Journey Analytics], and [!DNL Adobe Mix Modeler] can all appear in the same program.

### The scenario {#example-scenario}

A retail brand runs a seasonal acquisition and onboarding program. Leadership wants to plan spend, reach new buyers with paid media, welcome new customers with messages, and report on results. The brand uses unified customer data on [!DNL Adobe Experience Platform].

### What happens in the workflow {#example-steps}

1. [!DNL Adobe Experience Platform] (the platform)  
   Teams bring in web and app events, orders, consent, and cost or performance data from ads where available. Data uses shared XDM schemas. [!DNL Identity Service] links known customers. [!DNL Real-Time Customer Profile] updates as people shop and sign up. Data rules and consent are stored on the platform.  
   *Without this step, the applications below have nothing reliable to read.*

2. [!DNL Adobe Mix Modeler]  
   Marketing and finance review how channels contribute to sales and how to split budget across media for the season. They use models and planning views that draw on harmonized marketing and outcome data connected to the platform.  
   *This step answers "how should we invest" at a planning level. It does not send email or build day-to-day audiences by itself.*

3. [!DNL Real-Time CDP]  
   Acquisition teams build audiences (for example likely buyers or people who left items in a cart). They activate those audiences to advertising and other destinations. They may also build suppression audiences so current customers are not targeted as prospects.  
   *This step answers "who should we reach or exclude in paid and owned channels."*

4. [!DNL Adobe Journey Optimizer]  
   Lifecycle teams run a welcome journey after a purchase or signup. The journey listens for profile or event conditions, branches (for example first purchase vs repeat), and sends email or mobile messages.  
   *This step answers "what message or path does this person get next."*

5. [!DNL Customer Journey Analytics]  
   Analytics teams build reports and dashboards on the full path from ad touch to purchase and onboarding. They measure funnels, channels, and segments using the same event and profile-backed definitions the business uses elsewhere.  
   *This step answers "what happened in the journey and which parts worked."*

Teams often run steps 2 through 5 in parallel across a quarter. Mix Modeler updates may happen on a slower cycle than live audiences or journeys. That is normal.

### How the applications work together {#example-together}

- One profile and one event model. The same person and the same events flow from the platform into [!DNL Real-Time CDP], [!DNL Adobe Journey Optimizer], and [!DNL Customer Journey Analytics]. Mix Modeler uses connected and harmonized data from the platform. It may use summaries (for example weekly spend) as well as event-level data, depending on setup.  
- Different jobs, same truth. [!DNL Real-Time CDP] pushes who to reach. [!DNL Adobe Journey Optimizer] runs what happens next after an action. [!DNL Customer Journey Analytics] shows what occurred across steps. [!DNL Adobe Mix Modeler] supports why to shift budget at a higher level.  
- Data rules travel with the data. Labels and consent on the platform affect which profiles can be used in segments, journeys, and reporting.

### Configuration cautions {#example-gotchas}

>[!IMPORTANT]
>
>These issues cause confusion in real projects. Treat them as checkpoints for your architects and admins.

| Area | What to watch |
|------|----------------|
| Identity | If web, app, and CRM send different identifiers or namespace settings, the profile can split one person into two. Segments, journeys, and reports will not match. Align identity rules and primary IDs before you scale activation. |
| Consent and data rules | If datasets used in [!DNL Real-Time CDP] or [!DNL Adobe Journey Optimizer] are not labeled or consented correctly, you can activate or message people you should not. Review labels, policies, and consent fields on the same datasets you use for audiences and journeys. |
| [!DNL Real-Time CDP] and [!DNL Adobe Journey Optimizer] at the same time | The same person can be in an activated audience and in a journey. You can double-message or conflict with offers if you do not use suppression lists, journey entry filters, or clear rules for who enters a journey. Coordinate teams and test in a sandbox first. |
| [!DNL Customer Journey Analytics] definitions | Reports use [!UICONTROL Data views] and metric rules. If those definitions do not match the events or attributes your marketers use in [!DNL Real-Time CDP] or [!DNL Adobe Journey Optimizer], dashboards will disagree with campaign reports. Align dimension and metric definitions with stakeholders. |
| [!DNL Adobe Mix Modeler] timing and data shape | Mix modeling often uses harmonized or rolled-up inputs and scheduled refreshes. Do not expect the same real-time answer as [!DNL Real-Time Customer Profile]. Spend and outcome data must be mapped and cleaned in harmonization. Bad mappings skew channel credit and budget advice. |
| Mix Modeler compared to Journey Analytics | Mix Modeler focuses on channel-level contribution and planning. [!DNL Customer Journey Analytics] focuses on journey paths and segments. They answer related but different questions. Do not force one KPI to match the other without a documented bridge. |
| Sandboxes | Configuration in a sandbox does not automatically move to production. Plan a promotion process for schemas, segments, journeys, and connections. |
| Time zones | Journeys, reporting windows, and ad platforms may use different time zones. Misaligned windows cause "wrong" counts and broken journey entry. |

### Guardrails and limitations {#example-guardrails}

Adobe publishes guardrails for [!DNL Adobe Experience Platform] and for each application. Guardrails describe limits, expected performance, and safe ranges for configuration. They help you avoid errors, slowdowns, or unstable behavior. Guardrails are not service level agreements (SLAs). They do not guarantee speed or uptime in a legal sense.

Your contract, product description, and sales order may set contractual limits or entitlements. Those rules can differ from general documentation. When in doubt, use your agreement and Adobe account team together with [!DNL Experience League].

| Topic | What to plan for |
|-------|------------------|
| Soft limits and hard limits | Some limits are guidance. If you go far past them, performance may drop or latency may grow. Other limits are fixed by the system or by your contract. You cannot exceed them without a change to your setup or purchase. |
| Where limits apply | Many limits apply at the organization level, not per sandbox. Sandbox environments often have smaller caps than production. Test results in a sandbox may not show full-scale performance. |
| Ingestion and Profile | High event volume, identity volume, or profile counts affect cost, speed, and stability. Follow guardrails for data ingestion and Profile when you design pipelines. Very large audiences or very frequent updates can stress activation paths. |
| Segmentation and activation | [!DNL Real-Time CDP] has guardrails for segments, activation, and destinations. Partner destinations also have their own caps, file sizes, or required fields. A segment that works in the UI can still fail or truncate at a destination if you ignore both sides. |
| [!DNL Adobe Journey Optimizer] | Journeys, channels, and message rates have product limits. Complex journeys or high volume need review against [!DNL Adobe Journey Optimizer] guardrails so messages stay reliable. |
| [!DNL Customer Journey Analytics] | Reporting has limits on connections, [!UICONTROL Data views], rows, and cardinality. Heavy dimensions or very large event volumes need design review so reports stay usable. |
| [!DNL Adobe Mix Modeler] | Modeling and planning depend on enough history and clean harmonized data. There are product limits on datasets, models, and refresh behavior. Thin or noisy data produces weak or unstable models. |
| APIs and automation | Programmatic calls use rate limits and quotas. Batch jobs that ignore those limits can fail or throttle. |
| Regions and availability | Some features, destinations, or applications are not available in every region. Confirm region for data residency and product availability before you design the full workflow. |

>[!NOTE]
>
>Numeric limits and default values change over time. Do not copy limits from this overview into a design document. Use the current guardrails pages in [!DNL Experience League], your license usage views where your organization has them, and your contract.

### Where to read more {#where-to-read-guardrails}

* [Experience Platform and application guardrails](https://experienceleague.adobe.com/en/docs/blueprints-learn/architecture/architecture-diagrams/architecture-overview/guardrails) — Overview of how guardrails work across the platform and applications.  
* [Guardrails for data ingestion](https://experienceleague.adobe.com/en/docs/experience-platform/ingestion/guardrails) — Ingestion throughput and related limits.  
* [Real-Time CDP guardrails](https://experienceleague.adobe.com/en/docs/experience-platform/rtcdp/guardrails/overview) — Segments, activation, and Real-Time CDP usage.  
* [License usage](https://experienceleague.adobe.com/en/docs/experience-platform/landing/license-usage-and-guardrails/data-management-best-practices) — Data management and license usage practices on Experience Platform (where applicable to your org).

If your workflow leans heavily on [!DNL Customer Journey Analytics], [!DNL Adobe Journey Optimizer], [!DNL Adobe Mix Modeler], or [!DNL Query Service], read the guardrails topics for those products in their product help as well.

## Map your goals to the platform and to applications {#goals-map}

Use this table to see what you want, what the platform provides, and which applications help.

| Your goal | What to use from the platform | What to use from applications |
|-----------|-------------------------------------|--------------------------------------|
| See one person or account across channels | [!DNL Identity Service], [!DNL Real-Time Customer Profile], XDM | All listed applications benefit. [!DNL Real-Time CDP] and [!DNL Adobe Journey Optimizer] use Profile for sending audiences and journeys. |
| Run campaigns and lists with up-to-date membership | Profile, segmentation, destinations, data rules | [!DNL Real-Time CDP] for how audiences are sent. Destinations carry policy context. |
| Run multi-step experiences that react to behavior | Profile, live events, data rules | [!DNL Adobe Journey Optimizer] for journey logic and messages. |
| Report on journeys and channels with matching numbers | Shared XDM events and identities | [!DNL Customer Journey Analytics] for analysis on the same data. |
| See how channels contribute and plan marketing budgets | United datasets, data rules, data ready for models | [!DNL Adobe Mix Modeler] for mix modeling and spend planning. |
| Keep marketing and service aligned on customer facts | Profile, data rules, optional connections to other systems | How you connect other systems can vary. The platform stays the base for customer data. |

## Roles and handoffs {#roles-and-handoffs}

| Stage | Who is often involved | What they mainly use |
|-------|------------------------|----------------------|
| Define meaning and rules for data | Data governance, legal, marketing leadership | Schemas, labels, policies on the platform |
| Set up collection and data pipelines | Data engineers, marketing technology | [!DNL Tags], SDKs, sources, data prep on the platform |
| Build audiences and journeys | Marketing, CRM, journey teams | Applications ([!DNL Real-Time CDP], [!DNL Adobe Journey Optimizer]) on top of the same Profile |
| Activate and run day to day | Marketing operations, media, lifecycle teams | Destinations, journey reporting, alerts |
| Audit and improve | Analytics, compliance, operations | Audit logs, monitoring, dashboards |

## Terminology {#terminology}

* [!DNL Adobe Experience Platform] — Shared services and features: bringing data in, data modeling, [!DNL Identity Service], [!DNL Real-Time Customer Profile], segmentation, destinations, data governance, privacy, and features such as [!DNL Data Science Workspace] and [!DNL Query Service].
* Applications — Licensed products on the platform (for example [!DNL Real-Time CDP], [!DNL Adobe Journey Optimizer], [!DNL Customer Journey Analytics], [!DNL Adobe Mix Modeler]) that package workflows for specific jobs. They are not the same as platform services such as [!DNL Query Service] and [!DNL Data Science Workspace].

This matches the way the [Experience Platform documentation overview](https://experienceleague.adobe.com/en/docs/experience-platform/landing/documentation/overview) groups content.

## Additional resources {#additional-resources}

* [Adobe Experience Platform overview](https://experienceleague.adobe.com/en/docs/experience-platform/landing/home) — Main entry points for help.
* [Experience Platform documentation overview](https://experienceleague.adobe.com/en/docs/experience-platform/landing/documentation/overview) — How help topics are organized.
* [Digital experience blueprints](https://experienceleague.adobe.com/en/docs/blueprints-learn/architecture/overview/experience-cloud) — Example designs by use case and industry.

For hands-on learning, see tutorials and courses in [!DNL Experience League] on [!DNL Experience Platform Web SDK], XDM and schemas, identity, segmentation, and destinations.

>[!NOTE]
>
>When you add this topic to an Adobe documentation repository, check `exl-id`, `feature`, and `topic` against your repo rules. Replace the placeholder `exl-id` in the YAML header if your workflow assigns a new id.

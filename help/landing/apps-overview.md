---
title: How [!DNL Adobe Experience Platform] and Applications Work Together
description: Learn about [!DNL Adobe Experience Platform] and its applications, how each one works, what goals they support, and how they share data, profiles, and governance.
solution: Experience Platform
feature: Getting Started
topic: Overview
role: User, Developer, Leader
---

# How [!DNL Adobe Experience Platform] and applications work together

[!DNL Adobe Experience Platform] is the shared data and decisioning foundation that powers [!DNL Real-Time CDP], [!DNL Adobe Journey Optimizer], [!DNL Customer Journey Analytics], and [!DNL Adobe Marketing Campaign Analytics] (formerly known as [!DNL Adobe Mix Modeler]). When these applications share one profile, one set of data rules, and one event model, your teams stop rebuilding the same data pipelines and start reaching customers faster, with governance built in. This page explains how each part fits together.

>[!NOTE]
>
>This topic is an overview. For how-to steps, user interface actions, and API details, see [Additional resources](#additional-resources).

## Who should read this topic {#who-should-read}

Use this table to see whether this topic matches your role.

| Your role | Primary questions | How this topic helps |
| --- | --- | --- |
| Business and marketing leaders | What value do I get from [!DNL Experience Platform] and applications together? | Connect customer and brand goals to [!DNL Experience Platform] features and applications. Use the same words as your technical teams. |
| People in marketing operations, analytics, or customer experience | How do you run campaigns and journeys, and how does data line up? | See where data comes together, where choices are made, and which application fits which step. |
| Architects, engineers, and developers | How do I make the applications work reliably at scale? | Use the same simple model and terms as the rest of [!DNL Experience League] when you design or build. |
| Analysts and data practitioners | How do you answer questions and find opportunities to activate? | See how analysis on [!DNL Experience Platform] data connects to audiences and journeys. |

Share this topic with marketers, product owners, and people who build or run the solution. After you read it, use step-by-step guides in [!DNL Experience League] for product tasks or technical details.

>[!IMPORTANT]
>
>The applications you can use depend on your Adobe license. Check your contract and the latest Experience League product documentation.

## What you will understand after reading {#learning-outcomes}

After you read this topic, you should be able to do the following.

1. Describe [!DNL Adobe Experience Platform]: Explain what [!DNL Experience Platform] does as the shared base for data and data rules. You can explain this without naming a specific application.
2. Describe each main application: Explain which business goal each application supports and what type of work it is for.
3. Describe how [!DNL Experience Platform] and applications fit together: Explain how customer profiles, identities, data shapes (schemas), and data rules move from [!DNL Experience Platform] into applications. Explain why teams do not need to build separate, conflicting data pipelines for each tool.
4. Connect a goal to the right part of the solution: For a sample goal (for example "run onboarding across email and mobile"), name which parts of [!DNL Experience Platform] and which applications usually support that goal.

In this topic, "your goals" means what your organization wants (for example growth, efficiency, or customer trust). "Your customers" means people who interact with your brand. [!DNL Experience Platform] and applications exist to help your teams serve those customers.

## [!DNL Adobe CX Enterprise] {#cx-enterprise}

[!DNL Adobe CX Enterprise] is the unified interface and shared services layer for Adobe's customer experience portfolio. It is the top-level entry point for the customer experience stack: from [!DNL Adobe CX Enterprise], open [!DNL Adobe Experience Platform] and [!DNL Experience Platform] applications (such as [!DNL Real-Time CDP], [!DNL Journey Optimizer], and [!DNL Customer Journey Analytics]) with:

- A shared header and navigation
- An application selector to move between products
- Central services such as [!DNL Audience Library], [!DNL Customer Attributes], shared assets, triggers, and Marketplace

Below [!DNL CX Enterprise] sits [!DNL Adobe Experience Platform] as the data and decisioning foundation (schemas, identity, [!DNL Real-Time Customer Profile], segmentation, governance, data lake, [!DNL Edge], and related services). Licensed applications such as [!DNL Real-Time CDP], [!DNL Journey Optimizer], [!DNL Customer Journey Analytics], and [!DNL Adobe Marketing Campaign Analytics] build on that foundation. The sections that follow zoom in on the foundation and each application.

## What are [!DNL Adobe Experience Platform] and its applications? {#platform}

[!DNL Adobe Experience Platform] is the real-time data and decisioning base for experience applications such as [!DNL Real-Time CDP], [!DNL Adobe Journey Optimizer], [!DNL Customer Journey Analytics], and [!DNL Adobe Marketing Campaign Analytics]. Those applications are built on [!DNL Experience Platform] and share the same services for data, identity, profiles, audiences, and governance so your teams can move from insight to activation in one connected system instead of stitching separate tools together. Use [!DNL Experience Platform] to standardize and unify data once, then use applications to analyze, orchestrate, and activate experiences across channels at scale.

In typical workflows, teams access [!DNL Experience Platform] and these applications through [Adobe CX Enterprise](#cx-enterprise), described above.

## Where to start with the full stack {#where-to-start}

Use the following as a high-level order for using the full stack. Your organization can adapt the phases to your workflows.

| Phase | What to do |
| --- | --- |
| Establish the foundation on Experience Platform | Define priority use cases and sources. Design XDM schemas, identity rules, sandboxes, and basic governance and consent. |
| Stand up Real-Time CDP | Configure audiences that match your use cases. Connect destinations for the channels that matter first. |
| Add Adobe Journey Optimizer journeys | Start with one or two high-impact journeys. Use Real-Time CDP segments and Experience Platform events as triggers and conditions. |
| Add Customer Journey Analytics for closed-loop learning | Connect Experience Platform datasets. Use journey visualizations to find opportunities, then publish audiences back to Experience Platform for Real-Time CDP and Adobe Journey Optimizer. |
| Iterate and scale | Expand journeys, channels, segments, and modeled scores as your program matures. |

## How Experience Platform features, services, and applications differ {#feature-service-application}

[!DNL Adobe Experience Platform] includes features and services. It also supports licensed applications that package workflows for specific jobs.

| Term | What it means in this documentation | Common examples |
| --- | --- | --- |
| Platform feature | A capability available in [!DNL Experience Platform] that teams use directly for a purpose (often analysis, testing, or control). It is not a separate licensed application. | Sandboxes and data governance and privacy capabilities |
| Platform service | A background service that provides shared behavior that multiple products rely on through [!DNL Experience Platform]. Services are foundational and are not marketed as standalone day-to-day applications. | [!DNL Identity Service], [!DNL Real-Time Customer Profile], [!DNL Query Service], segmentation, destinations, data ingestion |
| Platform application | A licensed product built on [!DNL Adobe Experience Platform] that adds its own user experience, workflows, and product-specific capabilities on top of the shared foundation. | [!DNL Real-Time CDP], [!DNL Adobe Journey Optimizer], [!DNL Customer Journey Analytics], [!DNL Adobe Marketing Campaign Analytics] |

## Purpose of each application {#applications-at-a-glance}

In this documentation, an application is a licensed Adobe product that runs on [!DNL Adobe Experience Platform]. Applications use the same customer profile, data structure, identity links, and data rules as [!DNL Experience Platform]. Each application adds its own screens and workflows for a type of work (for example sending audiences to channels, running journeys, or reporting results).

The table below lists each application. It gives a short description and main purpose. It does not list every application edition. What you can access depends on your license.

| Application | What it is | Main purpose |
| --- | --- | --- |
| [Real-Time Customer Data Platform (Real-Time CDP)](https://experienceleague.adobe.com/en/docs/experience-platform/rtcdp/home) | Application for customer data and audiences | Bring your own customer data together. Build audiences that update often. Send audiences and attributes to ads, email, mobile apps, and other tools. Data rules are applied. The same product family supports consumer businesses, business customers, and mixed models. See application help for available editions. |
| [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer) | Application for journeys and messages | Plan and run personalized journeys (for example welcome paths, retention, or follow-up after service). Send messages across channels using live events and profile data. |
| [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/customer-journey-analytics) | Application for analysis across channels | Measure and analyze how customers move through journeys across multiple channels (including web, mobile, call center, and point-of-sale systems), and how marketing performs. Uses data that is prepared in [!DNL Adobe Experience Platform]. |
| [Adobe Marketing Campaign Analytics (formerly known as Adobe Mix Modeler)](https://experienceleague.adobe.com/en/docs/mix-modeler) | Application for marketing measurement and planning | Bring measurement together (including marketing mix modeling). Plan spending scenarios for marketing. Uses data connected through [!DNL Adobe Experience Platform] so teams can see what drives results and plan budgets. |

## Other applications and editions on [!DNL Experience Platform] {#other-applications-and-editions}

The table above describes four applications that work together in many implementations of [!DNL Experience Platform]. Your organization may also use related licensed offerings that sit on the same foundation (schemas, [!DNL Identity Service], [!DNL Real-Time Customer Profile], segmentation, and governance). The table below lists examples. It does not replace product-specific documentation. What you can access depends on your license, region, and Adobe portfolio.

| Topic | Role |
| --- | --- |
| [Real-Time CDP B2B Edition](../rtcdp/b2b-overview.md) | Account and lead-focused activation on the same [!DNL Experience Platform] foundation as solutions oriented to consumers or mixed B2B and B2C models. |
| [Journey Orchestration](https://experienceleague.adobe.com/en/docs/journeys/using/journey-orchestration-home) | Orchestration built on [!DNL Experience Platform]. Confirm with your Adobe team which journey product your organization purchased and implements. |
| [Real-Time CDP Collaboration](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/home) | Partner collaboration use cases (for example overlapping audiences with publishers or partners) in the [!DNL Real-Time CDP] family. Audiences may surface in [!DNL Audience Portal] alongside audiences from [!DNL Experience Platform]. |

>[!NOTE]
>
>Other Adobe CX Enterprise products can connect to Adobe Experience Platform without being listed here or above. For a high-level map of common integration patterns (sources and destinations—for example Adobe Analytics as a source or Adobe Target as a destination), see [Adobe Experience Platform integrations](integrations.md). 

Product names, editions, and what is sold can differ by license and country or region.

## Map your goals to [!DNL Experience Platform] and to applications {#goals-map}

Use this table to see what you want, what [!DNL Experience Platform] provides, and which applications help.

| Your goal | What to use from [!DNL Experience Platform] | What to use from applications |
| --- | --- | --- |
| See one person or account across channels | [!DNL Identity Service], [!DNL Real-Time Customer Profile], XDM | All listed applications benefit. [!DNL Real-Time CDP] and [!DNL Adobe Journey Optimizer] use Profile for sending audiences and journeys. |
| Run campaigns and lists with up-to-date membership | Profile, segmentation, destinations, data rules | [!DNL Real-Time CDP] for how audiences are sent. Destinations carry policy context. |
| Run multi-step experiences that react to behavior | Profile, live events, data rules | [!DNL Adobe Journey Optimizer] for journey logic and messages. |
| Report on journeys and channels with matching numbers | Shared XDM events and identities | [!DNL Customer Journey Analytics] for analysis on the same data. |
| Turn analysis into audiences for activation | Audiences published from [!DNL Customer Journey Analytics] to [!DNL Adobe Experience Platform] | [!DNL Real-Time CDP] and [!DNL Adobe Journey Optimizer] use those audiences from [!DNL Experience Platform]. |
| See how channels contribute and plan marketing budgets | Unified datasets, data rules, data ready for models | [!DNL Adobe Marketing Campaign Analytics] for mix modeling and spend planning. |
| Keep marketing and service aligned on customer facts | Profile, data rules, optional connections to other systems | How you connect other systems can vary. [!DNL Experience Platform] stays the base for customer data. |

## How [!DNL Adobe Experience Platform] provides value {#platform-alone}

The subsections that follow show how the platform foundation turns into value for your teams.

- The same data and rules
- Faster paths to audiences, analysis, and activations
- Governed use across tools

[!DNL Adobe Experience Platform] is the base layer for customer experience data. It is not a single marketing screen. It is built on services that run in the background. You set up data, identity, and rules once. Licensed applications reuse that foundation, which speeds time to audiences, analysis, and activations that teams can run with confidence.

Before you open an application, [!DNL Experience Platform] can do the following.

| What [!DNL Experience Platform] does | Why this helps you |
| --- | --- |
| Brings in data from websites, apps, or your own business systems, via streaming APIs or batch exports | You are not stuck with one channel or one database. You can build a fuller view over time. |
| Structures data with schemas based on the [!DNL Experience Data Model] (XDM) so events and fields share one meaning | Shared definitions across analyst, marketing, and compliance teams reduce mistakes and duplicate work. |
| Links identities so that, within your rules, the same person or account can be recognized across devices and systems | Teams can work from one view of the customer where policy allows. |
| Keeps [!DNL Real-Time Customer Profile] up to date as the live view for decisions and exporting data | Decisions and activations always use fresh data. |
| Builds audiences (segmentation) from profile data, behavior, and consent | You define who is included in one place. Other steps reuse that logic. |
| Sends data out to destinations (exports and connected systems) and applies data rules through labels, policies, and [!DNL Privacy Service] | Governance rules apply automatically at activation, so teams do not need a separate compliance review before each data export. |

In short, [!DNL Experience Platform] unites customer data, applies rules, and prepares data for use, so the value of that work shows up in applications (audiences, journeys, analytics) instead of remaining trapped in one-off data projects. It does not replace the full screens that applications provide for journey design, media workflows, or cross-channel reports. Applications provide those experiences.

### [!DNL Experience Platform] services at a glance {#core-platform-services}

This table lists core services and summarizes what each one does.

| Area | Role on [!DNL Experience Platform] |
| --- | --- |
| Data collection ([!DNL Tags], [!DNL Experience Platform Web SDK], [!DNL Experience Platform Mobile SDK], datastreams) | Collect data from digital experiences in a standard way. |
| Sources and bringing data in | Connect data from company systems and cloud sources to [!DNL Experience Platform]. |
| XDM and schemas | Set the structure and meaning of experience data. |
| [!DNL Identity Service] | Connect identifiers into one view within policy. |
| [!DNL Real-Time Customer Profile] | Hold the live profile used for decisions and sending data out. |
| Segmentation | Define audiences from profile data and events. |
| Destinations | Send audiences and attributes to other systems that run marketing or service. |
| Data governance, [!DNL Privacy Service], consent | Control how data may be used. |
| Sandboxes | Create isolated environments to develop and test schemas, data flows, identity rules, and segmentation before you promote work to production. |
| [!DNL Query Service] | Run SQL on [!DNL Experience Platform] data for analysis and reporting. |

These areas support an end-to-end pattern:

1. Collect data from channels and systems.
2. Bring events and attributes together under shared schemas and identities.
3. Apply governance, consent, and segmentation to qualify the right people and actions.
4. Activate audiences and attributes to your selected destinations.
5. Measure results, statistics, and performance.

That flow is how raw data on [!DNL Experience Platform] becomes customer insight and activations you can use in your applications, with one governed stack instead of a separate data path for every channel or team. Data rules apply at each step.

>[!NOTE]
>
>When you configure schemas, identities, governance, and data ingestion on [!DNL Experience Platform], that work is available to applications that your license includes. You do not repeat the same foundation setup inside each application, so teams reach productive use in those applications sooner and with fewer mismatched definitions.

## How the applications provide value {#applications-alone}

The table below adds detail. It shows what each application does and what goal it supports.

- Each application is a full workflow for a type of work (for example activation, journeys, cross-channel analysis, or marketing measurement) on the same [!DNL Real-Time Customer Profile] and data rules on [!DNL Experience Platform].
- Applications are the user experiences and screens on that foundation. Each one helps your teams do a main type of work. All of them draw from the same profile and data rules, so you do not copy the full data stack for each product.

| Application | What it does (main job) | What goal it helps you reach |
| --- | --- | --- |
| [Real-Time Customer Data Platform (Real-Time CDP)](https://experienceleague.adobe.com/en/docs/experience-platform/rtcdp/home) | Manage audiences and activation: build audiences, update membership often, send audiences and attributes to destinations. Supports consumer, business, and mixed use cases depending on your license. | Reach the right people and exclude the wrong ones across paid, owned, and partner channels using your own unified customer data. |
| [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer) | Design journeys and send messages: react to events, branch paths, and send across channels from one journey workspace. | Run personalized sequences (for example onboarding, retention, or service follow-up) that respond to what the customer just did. |
| [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/customer-journey-analytics) | Report and analyze journeys and campaign results using one data foundation. | See what happened and why across channels so you can improve spend and experience. |
| [Adobe Marketing Campaign Analytics](https://experienceleague.adobe.com/en/docs/mix-modeler) | Combine data connected to [!DNL Experience Platform] with models to measure channels and run planning scenarios. | Plan and adjust marketing spend with a steady view of how channels and other factors affect results. |

### When to use each application {#when-to-use-each-app}

Use the following table to find the right application for your primary business goal.

| Application | Use it when your primary goal is to |
| --- | --- |
| [Real-Time CDP](https://experienceleague.adobe.com/en/docs/experience-platform/rtcdp/home) | Define audiences once from unified data and activate them consistently across channels and tools (including destinations outside Adobe). |
| [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer) | Listen to behavior and orchestrate the next message or experience across channels in near real time (event-driven and scheduled journeys). |
| [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/customer-journey-analytics) | Understand end-to-end journeys, find friction, and discover audiences or opportunities to act on in [!DNL Real-Time CDP] and [!DNL Adobe Journey Optimizer]. |
| [Adobe Marketing Campaign Analytics](https://experienceleague.adobe.com/en/docs/mix-modeler) | Measure how channels contribute to outcomes and plan or adjust marketing spend using models that use data connected to [!DNL Experience Platform]. |

### [!DNL AI Assistant] and agents in key applications {#app-ai}

Agentic AI and [!DNL AI Assistant] are available in [!DNL Adobe CX Enterprise] when you work in supported applications, within each product's roles and permissions. Capabilities and agent names can change. Always check current product documentation for your organization.

| Application | How AI can help (examples) |
| --- | --- |
| [!DNL Real-Time CDP] | [!DNL AI Assistant] and agents (for example [!DNL Audience Agent]) can help you create and refine audiences using natural language. Audiences are still stored and activated in [!DNL Real-Time CDP] according to governance and entitlements. |
| [!DNL Adobe Journey Optimizer] | [!DNL AI Assistant] and agents can assist with journey design and optimization while using the same [!DNL Experience Platform] profiles and audiences. |
| [!DNL Customer Journey Analytics] | [!DNL AI Assistant] and agents can help you explore and summarize journey data and surface audiences that you can publish to [!DNL Experience Platform] for activation in [!DNL Real-Time CDP] and [!DNL Journey Optimizer]. |

In short, applications are how teams do their daily work (activation, journeys, analysis, marketing measurement). [!DNL Experience Platform] is what holds the customer data and rules that all of those teams trust. [!DNL Experience Platform] also offers SQL querying and other capabilities through the features and services above.

## How Experience Platform and applications work together {#platform-and-apps-together}

[!DNL Experience Platform] and applications are built to be used as one system.

- A shared data, identity, and decisioning base
- Applications for activation, orchestration, analysis, and measurement
- For most work, a common entry and shared services in [!DNL Adobe CX Enterprise]

The subsections below show that system from a few views so you can match the stack to your role. The first view is a high-level stack table covering [!DNL Experience Platform], applications, and the [!DNL CX Enterprise] experience layer, followed by a stage view of how work runs end to end.

### [!DNL Experience Platform] stack inside [!DNL Adobe CX Enterprise] {#cx-enterprise-stack}

The table below shows the high-level architecture. [!DNL Adobe CX Enterprise] is the experience, shared-services, and AI entry layer. [!DNL Experience Platform] is the foundation. Applications run on [!DNL Experience Platform].

| Layer | What it includes | Role |
| --- | --- | --- |
| [!DNL CX Enterprise] experience layer | [!DNL Adobe CX Enterprise]: unified UI, shared navigation, application selector, shared services (for example [!DNL Audience Library], [!DNL Customer Attributes], shared assets, triggers, Marketplace), [!DNL AI Assistant] and in-product agents | How to access [!DNL Experience Platform] and applications with a consistent experience, shared services, and agentic AI (within product permissions). |
| Applications (built on [!DNL Adobe Experience Platform]) | [!DNL Real-Time CDP], [!DNL Adobe Journey Optimizer], [!DNL Customer Journey Analytics], [!DNL Adobe Marketing Campaign Analytics], and other [!DNL Experience Platform] applications | Audiences and activation, journey orchestration and cross-channel messaging, omnichannel analytics and insights, and measurement and planning, all using the same profiles, audiences, and governance from the foundation. |
| [!DNL Adobe Experience Platform] foundation | XDM schemas, [!DNL Identity Service], [!DNL Real-Time Customer Profile], segmentation, governance, [!DNL Privacy Service], data lake, [!DNL Query Service], [!DNL Edge] | Data, identity, decisioning, and compliance base shared by every application. |

[!DNL Experience Platform] and applications working together means three things.

1. One customer profile, many products: [!DNL Real-Time Customer Profile], [!DNL Identity Service], and data rules are shared. [!DNL Real-Time CDP], [!DNL Adobe Journey Optimizer], [!DNL Customer Journey Analytics], and [!DNL Adobe Marketing Campaign Analytics] read from that same base (and related data). You do not maintain one customer list for analytics and a different list for marketing unless your process requires it.
2. One set of event and field definitions, many use cases: Data is shaped with XDM schemas. The same event can feed reporting, journeys, and audience rules. Teams spend less time arguing about definitions.
3. One place for data rules: You apply labels and policies to the data in [!DNL Experience Platform], and applications use that governed data. You do not have to define compliance again inside each product, separate from the data the product reads from the platform.

The [End-to-end flows](#end-to-end-flows) table below maps everyday work to the same stack using Know, Decide, Activate, and Measure stages. For diagram-based views of layers and connections, see [Adobe Experience Platform and applications (architecture diagrams)](https://experienceleague.adobe.com/en/docs/blueprints-learn/architecture/architecture-overview/platform-applications) in the architecture blueprints collection.

### End-to-end flows (how work runs across [!DNL Experience Platform] and apps) {#end-to-end-flows}

This table maps the Know, Decide, Activate, and Measure stages to your platform work and describes what applications usually add.

| Stage | What [!DNL Experience Platform] does | What applications usually add |
| --- | --- | --- |
| Know | Bring data in, structure it, link identity, update Profile | Applications read Profile and events. They do not replace the step of bringing data in. |
| Decide | Build audiences and check who qualifies using united data | [!DNL Real-Time CDP] for building audiences. [!DNL Adobe Journey Optimizer] for journey paths and the next best action in context. |
| Activate | Destinations and controlled export of audiences and attributes | [!DNL Real-Time CDP] supports many activation patterns. Journeys send messages through the channels you set up. |
| Measure | Events and identities that follow one model in the data layer | [!DNL Customer Journey Analytics] for journey and campaign reporting. Audiences you define in [!DNL Customer Journey Analytics] can be published to [!DNL Adobe Experience Platform] for activation in [!DNL Real-Time CDP] and [!DNL Adobe Journey Optimizer]. [!DNL Adobe Marketing Campaign Analytics] for unified marketing measurement and planning that uses data connected to [!DNL Experience Platform]. |

## Example: Full-stack workflow across all four applications {#example-full-stack-workflow}

The scenario below shows one common pattern. Your teams might change the order or skip a step. The goal is to show how [!DNL Adobe Experience Platform] and [!DNL Real-Time CDP], [!DNL Adobe Journey Optimizer], [!DNL Customer Journey Analytics], and [!DNL Adobe Marketing Campaign Analytics] can all appear in the same workflow.

### The scenario {#example-scenario}

A retail brand runs a seasonal acquisition and onboarding program. Leadership wants to plan spend, reach new buyers with paid media, welcome new customers with messages, and report on results. The brand uses unified customer data on [!DNL Adobe Experience Platform].

### What happens in the workflow {#example-steps}

The steps below summarize a typical workflow. The order is illustrative. Teams often overlap or reorder work.

1. [!DNL Adobe Experience Platform]: Ingest, identity, and profile to provide the data foundation the other steps rely on.
2. [!DNL Adobe Marketing Campaign Analytics]: Plan spend and channel mix for the program using connected marketing and outcome data.
3. [!DNL Real-Time CDP]: Build and activate audiences, and use suppression lists where needed.
4. [!DNL Adobe Journey Optimizer]: Run welcome and lifecycle journeys and messages.
5. [!DNL Customer Journey Analytics]: Measure paths from touch to purchase and show how programs perform.

#### [!DNL Adobe Experience Platform]

Teams bring in web and app events, orders, consent, and cost or performance data from ads where available. Data uses shared XDM schemas. Identity Service links known customers. Real-Time Customer Profile updates as people shop and sign up. Data rules and consent are stored on Experience Platform.

*Without this step, the applications below have nothing reliable to read.*

#### [!DNL Adobe Marketing Campaign Analytics] (formerly known as [!DNL Adobe Mix Modeler])

Marketing and finance review how channels contribute to sales and how to split budget across media for the season. They use models and planning views that draw on harmonized marketing and outcome data connected to Experience Platform.

*This step answers "how should we invest" at a planning level. It is not the step for email or for day-to-day audience builds.*

#### [!DNL Real-Time CDP]

Acquisition teams build audiences (for example likely buyers or people who left items in a cart). They activate those audiences to advertising and other destinations. They may also build suppression audiences so current customers are not targeted as prospects.

*This step answers "who should we reach or exclude in paid and owned channels."*

#### [!DNL Adobe Journey Optimizer]

Lifecycle teams run a welcome journey after a purchase or signup. The journey listens for profile or event conditions, branches (for example first purchase vs repeat), and sends email or mobile messages.

*This step answers "what message or path does this person get next."*

#### [!DNL Customer Journey Analytics]

Analytics teams build reports and dashboards on the full path from ad touch to purchase and onboarding. They measure funnels, channels, and segments using the same event and profile-backed definitions the business uses elsewhere.

*This step answers "what happened in the journey and which parts worked."*

Teams often run the applications in parallel across a quarter. [!DNL Marketing Campaign Analytics] updates may happen on a slower cycle than live audiences or journeys. That is normal.

### How the applications work together {#example-together}

The following list shows how the applications work with each other to provide a complete solution.

- One profile and one event model. The same person and the same events flow from Experience Platform into Real-Time CDP, Adobe Journey Optimizer, and Customer Journey Analytics. Marketing Campaign Analytics uses connected and harmonized data from Experience Platform. It may use summaries (for example, weekly spend) as well as event-level data, depending on setup.  
- Different jobs, same truth. Real-Time CDP determines who to reach. Adobe Journey Optimizer runs what happens next after an action. Customer Journey Analytics shows what occurred across steps. Adobe Marketing Campaign Analytics helps teams see when and how to shift budget at a higher level.  
- Data rules travel with the data. Labels and consent on Experience Platform affect which profiles can be used in segments, journeys, and reporting.



## Example: Cart abandonment workflow {#example-cart-abandonment}

The table below shows a second common pattern. It highlights insight to audience to orchestration on the same profile and events. It does not include [!DNL Adobe Marketing Campaign Analytics]. Your steps and order can differ.

| Step | What happens |
| --- | --- |
| Collect and unify ([!DNL Adobe Experience Platform]) | Web and app events are collected with the [!DNL Experience Platform Web SDK] or [!DNL Experience Platform Mobile SDK]. Orders or point-of-sale data can come in by batch. [!DNL Identity Service] links identifiers into [!DNL Real-Time Customer Profile]. |
| Understand behavior ([!DNL Customer Journey Analytics]) | Analysts see where shoppers drop off and define a group (for example high-value customers who added to cart but did not purchase within 24 hours) using data views and reporting. |
| Create an audience ([!DNL Customer Journey Analytics] to [!DNL Experience Platform] to [!DNL Real-Time CDP]) | Analysts save that group as an audience published to [!DNL Adobe Experience Platform]. [!DNL Real-Time CDP] exposes it as an audience for activation and for journeys. |
| Orchestrate recovery ([!DNL Adobe Journey Optimizer]) | A journey uses audience qualification or events as a trigger (for example entry into the cart-abandoner audience). Messages can branch across email, web or in-app, SMS, or push depending on your setup. |
| Activate elsewhere ([!DNL Real-Time CDP]) | The same audience can go to destinations (for example ads) for remarketing or suppression so you do not message people who already converted. |
| Measure and refine ([!DNL Customer Journey Analytics]) | Teams measure lift and refine the audience, journey logic, and channel mix. |

## Configuration cautions {#configuration-cautions}

The following table lists common problem areas and what to verify.

>[!IMPORTANT]
>
>These issues cause confusion in real projects. Treat them as checkpoints for your architects and admins.

| Area | What to watch |
| --- | --- |
| Identity | If web, app, and CRM send different identifiers or namespace settings, the profile can split one person into two. Audiences, journeys, and reports will not match. Align identity rules and primary IDs before you scale activation. |
| Consent and data rules | If datasets used in [!DNL Real-Time CDP] or [!DNL Adobe Journey Optimizer] are not labeled or consented correctly, you can activate or message people you should not. Review labels, policies, and consent fields on the same datasets you use for audiences and journeys. |
| [!DNL Real-Time CDP] and [!DNL Adobe Journey Optimizer] at the same time | The same person can be in an activated audience and in a journey. You can double-message or conflict with offers if you do not use suppression lists, journey entry filters, or clear rules for who enters a journey. Coordinate teams and test in a sandbox first. |
| [!DNL Customer Journey Analytics] definitions | Reports use data views and metric rules. If those definitions do not match the events or attributes your marketers use in [!DNL Real-Time CDP] or [!DNL Adobe Journey Optimizer], dashboards will disagree with campaign reports. Align dimension and metric definitions with stakeholders. |
| [!DNL Adobe Marketing Campaign Analytics] timing and data shape | Mix modeling often uses harmonized or rolled-up inputs and scheduled refreshes. Do not expect the same real-time answer as [!DNL Real-Time Customer Profile]. Spend and outcome data must be mapped and cleaned in harmonization. Bad mappings skew channel credit and budget advice. |
| [!DNL Marketing Campaign Analytics] compared to [!DNL Customer Journey Analytics] | [!DNL Marketing Campaign Analytics] focuses on channel-level contribution and planning. [!DNL Customer Journey Analytics] focuses on journey paths and audiences. They answer related but different questions. Do not force one KPI to match the other without a documented bridge. |
| Sandboxes | Configuration in a sandbox does not automatically move to production. Plan a promotion process for schemas, audiences, journeys, and connections. |
| Time zones | Journeys, reporting windows, and ad platforms might use different time zones. Misaligned windows cause "wrong" counts and broken journey entry. |

## Guardrails and limitations {#guardrails-and-limitations}

Adobe publishes guardrails for [!DNL Adobe Experience Platform] and for each application. Guardrails describe limits, expected performance, and safe ranges for configuration. They help you avoid errors, slowdowns, or unstable behavior. Guardrails are not service level agreements (SLAs). They do not guarantee speed or uptime in a legal sense.

Your contract, product description, and sales order might set contractual limits or entitlements. Those rules can differ from general documentation. When in doubt, refer to your agreement and Adobe account team, together with [!DNL Experience League].

| Topic | What to plan for |
| --- | --- |
| Soft limits and hard limits | Some limits are guidance. If you go far past them, performance might drop or latency might grow. Other limits are fixed by the system or by your contract. You cannot exceed them without a change to your setup or purchase. |
| Where limits apply | Many limits apply at the organization level, not per sandbox. Sandbox environments often have smaller caps than production. Test results in a sandbox might not show full-scale performance. |
| Ingestion and Profile | High event volume, identity volume, or profile counts affect cost, speed, and stability. Follow guardrails for data ingestion and Profile when you design pipelines. Very large audiences or very frequent updates can stress activation paths. |
| Segmentation and activation | [!DNL Real-Time CDP] has guardrails for audiences, activation, and destinations. Partner destinations also have their own caps, file sizes, or required fields. An audience that works in the UI can still fail or truncate at a destination if you ignore both sides. |
| [!DNL Adobe Journey Optimizer] | Journeys, channels, and message rates have product limits. Complex journeys or high volume need review against [!DNL Adobe Journey Optimizer] guardrails so messages stay reliable. |
| [!DNL Customer Journey Analytics] | Reporting has limits on connections, data views, rows, and cardinality. Heavy dimensions or very large event volumes need design review so reports stay usable. |
| [!DNL Adobe Marketing Campaign Analytics] | Modeling and planning depend on enough history and clean harmonized data. There are product limits on datasets, models, and refresh behavior. Thin or noisy data produces weak or unstable models. |
| APIs and automation | Programmatic calls use rate limits and quotas. Batch jobs that ignore those limits can fail or throttle. |
| Regions and availability | Some features, destinations, or applications are not available in every region. Confirm region for data residency and product availability before you design the full workflow. |

>[!NOTE]
>
>Numeric limits and default values change over time. Use the current guardrails pages in [!DNL Experience League], your license usage views where your organization has them, and your contract.

## Where to read more {#where-to-read-more}

Use the following help topics to go beyond this overview.

- [Experience Platform and application guardrails](https://experienceleague.adobe.com/en/docs/blueprints-learn/architecture/architecture-diagrams/architecture-overview/guardrails): Overview of how guardrails work across [!DNL Experience Platform] and applications.
- [Guardrails for data ingestion](https://experienceleague.adobe.com/en/docs/experience-platform/ingestion/guardrails): Ingestion throughput and related limits.
- [Real-Time CDP guardrails](https://experienceleague.adobe.com/en/docs/experience-platform/rtcdp/guardrails/overview): Audiences, activation, and [!DNL Real-Time CDP] usage.
- [License usage](https://experienceleague.adobe.com/en/docs/experience-platform/landing/license-usage-and-guardrails/data-management-best-practices): Data management and license usage practices on [!DNL Experience Platform] (where applicable to your org).

If your workflow leans heavily on [!DNL Customer Journey Analytics], [!DNL Adobe Journey Optimizer], [!DNL Adobe Marketing Campaign Analytics], or [!DNL Query Service], read the guardrails topics for those products in their product help as well.

## Roles and handoffs {#roles-and-handoffs}

This table summarizes which roles are often involved at each stage and which parts of the stack they use.

| Stage | Who is often involved | What they mainly use |
| --- | --- | --- |
| Define meaning and rules for data | Data governance, legal, marketing leadership | Schemas, labels, policies on [!DNL Experience Platform] |
| Set up collection and data pipelines | Data engineers, marketing technology | [!DNL Tags], SDKs, sources, data prep on [!DNL Experience Platform] |
| Build audiences and journeys | Marketing, CRM, journey teams | Applications ([!DNL Real-Time CDP], [!DNL Adobe Journey Optimizer]) on top of the same Profile |
| Activate and run day to day | Marketing operations, media, lifecycle teams | Destinations, journey reporting, alerts |
| Audit and improve | Analytics, compliance, operations | Audit logs, monitoring, dashboards |

## Terminology {#terminology}

This topic uses the following terms in specific ways.

- [!DNL Adobe Experience Platform]: Shared services and features: bringing data in, data modeling, [!DNL Identity Service], [!DNL Real-Time Customer Profile], segmentation, destinations, data governance, privacy, services such as [!DNL Query Service], and features such as sandboxes. For how those terms differ, see [How Experience Platform features, services, and applications differ](#feature-service-application).
- [!DNL Adobe CX Enterprise]: The unified interface and shared services layer through which you typically access [!DNL Experience Platform] and [!DNL Experience Platform] applications. See [[!DNL Adobe CX Enterprise]](#cx-enterprise).
- Applications: Licensed products on [!DNL Experience Platform] (for example [!DNL Real-Time CDP], [!DNL Adobe Journey Optimizer], [!DNL Customer Journey Analytics], [!DNL Adobe Marketing Campaign Analytics]) that package workflows for specific jobs. They are not the same as [!DNL Experience Platform] services such as [!DNL Query Service] and [!DNL Identity Service]. Related editions and applications appear in [Other applications and editions on Experience Platform](#other-applications-and-editions).
- [!DNL Adobe Marketing Campaign Analytics] (formerly known as [!DNL Adobe Mix Modeler]): Licensed application for marketing measurement and planning (including marketing mix modeling). [!DNL Experience League] product help may still use the former product name and mix-modeler paths while documentation is updated after the product rename.

This matches the way the [Experience Platform documentation overview](https://experienceleague.adobe.com/en/docs/experience-platform/landing/documentation/overview) groups content.

## Additional resources {#additional-resources}

The following help topics and collections expand on the concepts in this page.

- [Adobe Experience Platform integrations](integrations.md): How other [!DNL Adobe CX Enterprise] products connect to [!DNL Experience Platform] (sources and destinations).
- [Adobe Experience Platform overview](https://experienceleague.adobe.com/en/docs/experience-platform/landing/home): Main entry points for help.
- [Experience Platform documentation overview](https://experienceleague.adobe.com/en/docs/experience-platform/landing/documentation/overview): How help topics are organized.
- [Adobe Experience Platform and applications (architecture diagrams)](https://experienceleague.adobe.com/en/docs/blueprints-learn/architecture/architecture-overview/platform-applications): How [!DNL Experience Platform] and applications fit together at a high level.
- [Digital experience blueprints](https://experienceleague.adobe.com/en/docs/blueprints-learn/architecture/overview/experience-cloud): Example designs by use case and industry.

For hands-on learning, see tutorials and courses in [!DNL Experience League] on [!DNL Experience Platform Web SDK], XDM and schemas, identity, segmentation, and destinations.

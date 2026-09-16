---
title: Tags Troubleshooting Guide
description: Get answers to frequently asked questions about tags in Adobe Experience Platform.
exl-id: c06b8e25-4d79-4a11-94da-94ac096b5e33
TQID: https://experienceleague.adobe.com/5PhBDR6zjR3mT3YLb1XNueEXReEzrpJHCnsCJV-Ehx8
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: f7bdf6be-dd3b-4d2d-ac52-0e62ed0d3102
    internal-label: Admin Console
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: e9dbdbc5-3e52-40f0-a7bc-e18542967b7a
    internal-label: Implementations
  - id: eb9732ab-8232-4b21-bc4c-89de86dbe4d7
    internal-label: Integrations
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
  - id: fc7979f3-56c3-43ca-9784-f1ea3dc69c4b
    internal-label: Integrations
  - id: fd307ce7-56f5-4ee3-af68-a7833ff6e85e
    internal-label: API
subfeature_v2:
  - id: b572b7ff-a413-4173-b2b4-d7d3874f1b9b
    internal-label: Best practices
  - id: c3d7a45c-ad17-435d-8b71-882abbe8f27e
    internal-label: Troubleshooting
  - id: c77ba355-6681-41fe-b719-563d3f507fdb
    internal-label: Mobile SDK
  - id: c8add8f2-4250-4fd9-9cde-9707036c567d
    internal-label: Methods
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: df312454-73c4-43f6-a90e-18f5043f074c
    internal-label: Tags
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data elements
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Tags troubleshooting guide

This document provides answers to frequently asked questions about tags in Adobe Experience Platform.

## What are tags?

Tags are the next generation of tag-management capabilities provided by Adobe, built into Adobe Experience Platform. Tags enable clients to:

- Deploy client-side web products using integrations called *extensions*
- Dynamically deliver configuration to update client implementations in native mobile applications
- Consistently capture, define, manage, and share data between marketing and advertising products from other vendors and from Adobe

Tags are an advanced code and configuration delivery system that evaluates conditions and executes actions to efficiently and effectively deploy client-side libraries and products. They also provides a highly scalable approach to managing and building integrations and has a robust set of APIs for programmatic interaction.

## How much do tags cost?

There is no additional charge for tags. They are available for any [!DNL Adobe Experience Cloud] customer.

## I heard there are plug-ins now. What's that about?

Tags are built into the Adobe Experience Platform and are fully extensible. Customers, Adobe Partners, agencies, and marketing or advertising technology vendors can build a tag extension that adds new functionality or modifies existing functionality. The system allows partners and clients to build, manage, and update their own integrations. This is just one way Adobe is opening up the Adobe Experience Platform so customers and partners can build products and businesses on it. This helps everyone connect Adobe technology to the marketing and advertising technologies from other vendors with greater ease.

## Will all third-party extensions be available right away?

Extensions are already available for Adobe solutions and a large and growing number of independent analytics, marketing, advertising, and consent vendors and technologies. We continue to work with our partners to expand the ecosystem. Because extensions can be built, managed, and updated by the technology owners, customers don't have to wait for Adobe engineering to build them.

## When can clients or partners build extensions?

Tags have opened its virtually self-service portal, which extension developers can use to build their own integrations with the Adobe Cloud Platform.

We have many customers who also choose to build their own private extensions for use only within their own companies using the same extension development methods.

To develop an extension, check out the [Extension Development Overview](./extension-dev/overview.md) page.

## Do tags meet my company's security standards?

Tags are SOC-2 and Gramm-Leach-Bliley Act ready. Tags also offer the capability of being self-hosted. JavaScript libraries and mobile configurations can be served from your own servers or the CDN of your choice. For I.T. and security teams, this gives you the ability to run automated testing, to check the files into your own version control system, and to fully comply with any internal production migration processes, security-related or otherwise.

## When can I move to tags?

Now is the best time to move over to tags. The migration process makes it easy to copy your DTM properties into tags. We recommend extensive testing, but we've automated as much as we can (no on-page embed code changes, and automated migration of rules and data elements).

## Do tags support single-page apps and my favorite framework?

Yes. Tags have the capabilities to give users and extension developers flexibility in collecting, managing, and distributing data within single-page application experiences or Ajax-heavy pages or sites. This applies regardless of your development framework preferences, whether that's Angular, React.js, Ember, Meteor, etc.

## Do tags support dynamic data layers?

Yes. Tags include an extension that specializes in listening for changes in dynamic data layers.

## Which event types do tags support?

Event types are available through extensions. The amount of event types supported varies by extension. For example, the YouTube extension includes four video event types: play, pause, end, and time played. Through extensions, tags can support any other browser event types or synthetic event types, such as specific visitor activity sequences.

## Will tags speed up (or slow down) my website?

Tags are designed to deliver and run marketing and advertising technologies on your website as efficiently as possible using today's best practices. When used properly, tags have been proven to improve the performance of websites over alternative methods that provide similar functionality.

## Which browsers do tags support?

See the supported browsers [here](./extension-dev/browsers.md).

Most Adobe clients leverage more modern web platform features in current browsers to create better user experiences, including single-page applications and interactive Ajax-heavy websites and pages. As most clients move to more modern approaches with their sites, they demand a solution like tags that enables those approaches.

## Do tags work on native mobile apps?

Yes! Tags now support mobile properties and configuration for the new Adobe Experience Platform [Mobile SDKs](https://sdkdocs.com) to implement data collection and delivery in a native mobile app environment. Please visit [documentation](https://sdkdocs.com) to learn more.

## Why is the UI saying there was an error loading my account?

If you receive a message saying that there was an error loading your account, it means that your account does not belong to any product profiles for tags. See the guide on [managing permissions](../collection/permissions.md) to learn how to configure a product profile in Adobe Admin Console to grant access to Data Collection features in the UI.

## Why can't I add any properties in the UI?

If you cannot create any new properties when logged in to the UI, it means that your account does not belong to a product profile that has the Manage Properties right.

See the guide on [managing permissions](../collection/permissions.md) to learn how to configure a product profile in Adobe Admin Console to grant the Manage Properties right. For more information on the different rights for tags, see the overview on [user permissions for tags](./ui/administration/user-permissions.md).

## What if I have other questions?

If you have other questions, you can ask on the [Adobe Experience Platform Data Collection community page](https://adobe.com/go/launchme) on Experience League, or join the [community Slack workspace](https://docs.google.com/forms/d/e/1FAIpQLScq1m63YkDrRpvPLhzUqtfoleWiDDTTXZsSivIXRfFdlSMzpQ/viewform) for developers & technical implementation topics.

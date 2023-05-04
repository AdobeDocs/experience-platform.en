---
title: Tags Troubleshooting Guide
description: Get answers to frequently asked questions about tags in Adobe Experience Platform.
exl-id: c06b8e25-4d79-4a11-94da-94ac096b5e33
---
# Tags troubleshooting guide

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](./term-updates.md) for a consolidated reference of the terminology changes.

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

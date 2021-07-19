---
title: Release Notes
description: The latest release notes for tags in Adobe Experience Platform.
---
# Release notes

>[!NOTE]
>
>Adobe Experience Platform Launch is being rebranded as a suite of data collection technologies in Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../term-updates.md) for a consolidated reference of the terminology changes.

## May 17, 2021

**Better handling of unsaved changes** - It used to be that whenever you navigated away from a settings view (extensions, data elements, and rule components), you'd get a prompt on whether you wanted to discard your changes. But the logic for determining that wasn't great, so most of the time you got prompted to save changes even though there weren't any.  That's been fixed.  From now on, you should only see that prompt when you have actually made changes.

## May 10th, 2021

**Simplified Publishing** - Building to the staging environment is no longer required.  If you have the appropriate rights, you can skip the Submitted state entirely and publish directly from Development as long as you’ve had a successful build and there are no other libraries upstream.

## April 22nd, 2021

**Data Collection in Adobe Experience Platform** - Sending data to Adobe is not just about deploying tags to your site or configuration to your app.  Usage of the Experience Platform SDKs and the Edge Network require access to other Platform capabilities.  This used to require logging into a few different tools, but now they are together in one place.

Data Collection in Platform consists of six capabilities, and your newly streamlined navigation will only contain the items that your company and user account have access to.  Some of the capability names have also been updated to match Experience Platform's naming patterns.

* Client (formerly accessed as Client Side)
* Datastreams (formerly accessed as Edge Configurations)
* Server (formerly accessed as Server Side)
* App Configurations
* Schemas
* Identities

Look forward to more updates as Experience Platform and Data Collection continue to evolve.

## February 18th, 2021

* Updated the Data Collection UI to react-spectrum v3
* Updated extension cards to the latest Spectrum patterns
* Increased the size of name fields throughout the app

## January 13th, 2021

**General Availability: Event Forwarding** Send event-level data to the Adobe Experience Platform Edge Network then use event forwarding to transform, enrich, and send that data to a non-Adobe endpoint using Adobe's servers, not the client, with low latency.

See the [event forwarding overview](../ui/event-forwarding/overview.md) and [getting started guide](../ui/event-forwarding/getting-started.md) for more information.

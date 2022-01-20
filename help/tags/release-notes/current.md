---
title: Release Notes
description: The latest release notes for tags in Adobe Experience Platform.
exl-id: 2ebeaa1e-64b8-48fd-b4e8-419663271a87
---
# Release notes

>[!NOTE]
>
>Adobe Experience Platform Launch is being rebranded as a suite of data collection technologies in Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../term-updates.md) for a consolidated reference of the terminology changes.

## November 15, 2021

**Accept ES6 code in Tags** – Extensions and custom code containing ES6 code can now be used in Tags. In the extension catalog you will see an ES6+ label inside the card of each extension that contains ES6 code. IE10 and IE11 do not support ES6 code. Before using ES6 code in your Tags libraries, do your due dilligence.

**Using Terser as JavaScript compressor** – Uglifier was replaced with Terser. Starting from this release, all Tags libraries are minified by Terser.

## October 21, 2021

**Send data to authenticated endpoints in event forwarding** – Using secrets, you can send data to endpoints that require the following authentication protocols:

* **[!UICONTROL Token]**: A single string of characters representing an authentication token value.
* **[!UICONTROL Simple HTTP]**: Contains two string attributes for a username and password.
* **[!UICONTROL OAuth2]**: Contains several attributes to support the [OAuth2](https://datatracker.ietf.org/doc/html/rfc6749) spec.

For more information, see the guides on [managing secrets in the Data Collection UI](../ui/event-forwarding/secrets.md) or [managing secrets in the Reactor API](../api/guides/secrets.md).

## July 19, 2021

**Adjustments to "Manage Properties" right** - The Manage Properties right encountered an issue where a user had the permission to create a new property but could not see it after it was created (as outlined in the community thread [here](https://experienceleaguecommunities.adobe.com/t5/adobe-experience-platform-launch/technical-advisory-adjustments-to-the-manage-properties/ba-p/399176)). A fix is now live with permissions being enforced as described in the article.

>[!NOTE]
>
>If you assign the new "Edit Property" right to a user group, the UI will not update to enable the fields in the property configuration screen. A fix for this issue will be implemented in an upcoming release.

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

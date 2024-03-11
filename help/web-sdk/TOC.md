---
solution: Data Collection
audience: user
user-guide-title: Adobe Experience Platform Web SDK Help
breadcrumb-title: Web SDK Guide
user-guide-description: Interact with Experience Cloud services through the Edge network.
feature: Web SDK
role: Developer
---

# Adobe Experience Platform Web SDK {#web-sdk}

* [Web SDK overview](home.md)
* [Release notes](release-notes.md)
* Web SDK installation {#install}
  * [Overview](install/overview.md)
  * [Install the Web SDK using the tag extension](install/extension.md)
  * [Install the Web SDK using the JavaScript library](install/library.md)
  * [Install the Web SDK using the NPM package](install/npm.md)
* Commands {#commands}
  * configure {#configure}
    * [Overview](commands/configure/overview.md)
    * [clickCollectionEnabled](commands/configure/clickcollectionenabled.md)
    * [context](commands/configure/context.md)
    * [debugEnabled](commands/configure/debugenabled.md)
    * [defaultConsent](commands/configure/defaultconsent.md)
    * [downloadLinkQualifier](commands/configure/downloadlinkqualifier.md)
    * [edgeBasePath](commands/configure/edgebasepath.md)
    * [edgeConfigId](commands/configure/edgeconfigid.md)
    * [edgeDomain](commands/configure/edgedomain.md)
    * [idMigrationEnabled](commands/configure/idmigrationenabled.md)
    * [onBeforeEventSend](commands/configure/onbeforeeventsend.md)
    * [onBeforeLinkClickSend](commands/configure/onbeforelinkclicksend.md)
    * [orgId](commands/configure/orgid.md)
    * [prehidingStyle](commands/configure/prehidingstyle.md)
    * [targetMigrationEnabled](commands/configure/targetmigrationenabled.md)
    * [thirdPartyCookiesEnabled](commands/configure/thirdpartycookiesenabled.md)
  * sendEvent {#sendevent}
    * [Overview](commands/sendevent/overview.md)
    * [data](commands/sendevent/data.md)
    * [documentUnloading](commands/sendevent/documentunloading.md)
    * [personalization](commands/sendevent/personalization.md)
    * [renderDecisions](commands/sendevent/renderdecisions.md)
    * [type](commands/sendevent/type.md)
    * [xdm](commands/sendevent/xdm.md)
  * [appendIdentityToUrl](commands/appendidentitytourl.md)
  * [applyPropositions](commands/applypropositions.md)
  * [applyResponse](commands/applyresponse.md)
  * [getIdentity](commands/getidentity.md)
  * [getLibraryInfo](commands/getlibraryinfo.md)
  * [setConsent](commands/setconsent.md)
  * [setDebug](commands/setdebug.md)
  * [Configre datastream overrides](commands/datastream-overrides.md)
  * [Command responses](commands/command-responses.md)

* Identity {#identity}
  * [Overview](identity/overview.md)
  * [First-party device IDs](identity/first-party-device-ids.md)
  * [Mobile-to-web and cross-domain ID sharing](identity/id-sharing.md)

* Personalization {#personalization}
  * [Manage display events](personalization/display-events.md)
  * [Render personalized content](personalization/rendering-personalization-content.md)
  * [Personalization via hybrid implementation](personalization/hybrid-personalization.md)
  * [Manage flicker](personalization/manage-flicker.md)
  * Adobe Target {#adobe-target}
    * [Overview](personalization/adobe-target/target-overview.md)
    * [Single-page application implementation](personalization/adobe-target/spa-implementation.md)
    * [Accessing response tokens](personalization/adobe-target/accessing-response-tokens.md)
    * [Using mbox 3rd party ID](personalization/adobe-target/using-mbox-3rdpartyid.md)
    * [Comparing the at.js library to the Web SDK](personalization/adobe-target/web-sdk-atjs-comparison.md)
    * Analytics for Target (A4T) logging {#a4t}
      * [Overview](personalization/adobe-target/analytics-logging/overview.md)
      * [Client-side logging](personalization/adobe-target/analytics-logging/client-side.md)
      * [Server-side logging](personalization/adobe-target/analytics-logging/server-side.md)
  * Offer Decisioning {#offer-decisioning}
    * [Overview](personalization/offer-decisioning/offer-decisioning-overview.md)
  * Adobe Journey Optimizer {#ajo}
    * [Overview](personalization/ajo/overview.md)
    * [Single-page application implementation](personalization/ajo/web-spa-implementation.md)
    * [Configure Web In-app Messaging support in Web SDK](personalization/web-in-app-messaging.md)

* Consent {#consent}
  * [Supporting consent](consent/supporting-consent.md)
  * IAB Transparency and Consent Framework 2.0 {#iab-tcf}
    * [Overview](consent/iab-tcf/overview.md)
    * [Integrate with tags](consent/iab-tcf/with-tags.md)
    * [Integrate without tags](consent/iab-tcf/without-tags.md)

* Use cases {#use-cases}
  * [Overview](use-cases/overview.md)
  * [Send data to Adobe Analytics using the Web SDK](use-cases/adobe-analytics.md)
  * [User agent client hints](use-cases/client-hints.md)
  * [Collect commerce data](use-cases/collect-commerce-data.md)
  * [Configuring a CSP](use-cases/configuring-a-csp.md)
  * [Debugging methods](use-cases/debugging.md)
  * [Use multiple Web SDK instances](use-cases/multiple-instances.md)
  * [Configure top and bottom page events](use-cases/top-bottom-page-events.md)

* [Frequently Asked Questions](faq.md)
* [Resources](resources.md)

---
audience: user
solution: Data Collection
user-guide-title: Data Collection
breadcrumb-title: Data Collection
user-guide-description: Learn how to send data to Adobe Experience Platform.
feature: Data Collection
role: Developer
---

# Data collection {#collection}

+ [Overview](home.md)
+ [Permissions](permissions.md)
+ BrightScript {#brightscript}
  + [BrightScript overview](brightscript/brs-overview.md)
+ JavaScript {#js}
  + [Web SDK JavaScript overview](js/js-overview.md)
  + [Release notes](js/release-notes.md)
  + Installation {#install}
    + [Install overview](js/install/overview.md)
    + [Library](js/install/library.md)
    + [NPM](js/install/npm.md)
    + [Custom build](js/install/create-custom-build.md)
  + Commands {#commands}
    + [appendIdentityToUrl](js/commands/appendidentitytourl.md)
    + [applyPropositions](js/commands/applypropositions.md)
    + [applyResponse](js/commands/applyresponse.md)
    + configure {#configure}
      + [Overview](js/commands/configure/overview.md)
      + [autoCollectPropositionInteractions](js/commands/configure/autocollectpropositioninteractions.md)
      + [clickCollection](js/commands/configure/clickcollection.md)
      + [clickCollectionEnabled](js/commands/configure/clickcollectionenabled.md)
      + [context](js/commands/configure/context.md)
      + [datastreamId](js/commands/configure/datastreamid.md)
      + [debugEnabled](js/commands/configure/debugenabled.md)
      + [defaultConsent](js/commands/configure/defaultconsent.md)
      + [downloadLinkQualifier](js/commands/configure/downloadlinkqualifier.md)
      + [edgeBasePath](js/commands/configure/edgebasepath.md)
      + [edgeConfigOverrides](js/commands/configure/edgeconfigoverrides.md)
      + [edgeDomain](js/commands/configure/edgedomain.md)
      + [idMigrationEnabled](js/commands/configure/idmigrationenabled.md)
      + [onBeforeEventSend](js/commands/configure/onbeforeeventsend.md)
      + [onBeforeLinkClickSend](js/commands/configure/onbeforelinkclicksend.md)
      + [orgId](js/commands/configure/orgid.md)
      + [prehidingStyle](js/commands/configure/prehidingstyle.md)
      + [pushNotifications](js/commands/configure/pushnotifications.md)
      + [streamingMedia](js/commands/configure/streamingmedia.md)
      + [targetMigrationEnabled](js/commands/configure/targetmigrationenabled.md)
      + [thirdPartyCookiesEnabled](js/commands/configure/thirdpartycookiesenabled.md)
    + [createMediaSession](js/commands/createmediasession.md)
    + [getIdentity](js/commands/getidentity.md)
    + [getLibraryInfo](js/commands/getlibraryinfo.md)
    + [getMediaAnalyticsTracker](js/commands/getmediaanalyticstracker.md)
    + sendEvent {#sendevent}
      + [Overview](js/commands/sendevent/overview.md)
      + [data](js/commands/sendevent/data.md)
      + [documentUnloading](js/commands/sendevent/documentunloading.md)
      + [edgeConfigOverrides](js/commands/sendevent/edgeconfigoverrides.md)
      + [eventType](js/commands/sendevent/eventtype.md)
      + [personalization](js/commands/sendevent/personalization.md)
      + [renderDecisions](js/commands/sendevent/renderdecisions.md)
      + [xdm](js/commands/sendevent/xdm.md)
    + [sendMediaEvent](js/commands/sendmediaevent.md)
    + [sendPushSubscription](js/commands/sendpushsubscription.md)
    + [setConsent](js/commands/setconsent.md)
    + [setDebug](js/commands/setdebug.md)
    + [subscribeRulesetItems](js/commands/subscriberulesetitems.md)
    + [Command responses](js/commands/command-responses.md)
  + [Monitoring hooks](js/monitoring-hooks.md)
  + [FAQ](js/faq.md)
+ Tags client-side JavaScript {#tags}
  + [Overview](tags/overview.md)
  + [buildInfo](tags/buildinfo.md)
  + [company](tags/company.md)
  + [_container](tags/container.md)
  + [cookie](tags/cookie.md)
  + [environment](tags/environment.md)
  + [getVar](tags/getvar.md)
  + [getVisitorId](tags/getvisitorid.md)
  + [logger](tags/logger.md)
  + [_monitors](tags/monitors.md)
  + [setDebug](tags/setdebug.md)
  + [setVar](tags/setvar.md)
  + [track](tags/track.md)
+ Use cases {#use-cases}
  + [Overview](use-cases/overview.md)
  + [Client hints](use-cases/client-hints.md)
  + [Client state](use-cases/client-state.md)
  + [Collect commerce data](use-cases/collect-commerce-data.md)
  + [Configure a CSP](use-cases/configuring-a-csp.md)
  + [Debugging](use-cases/debugging.md)
  + [Event deduplication](use-cases/event-duplication.md)
  + Identity {#identity}
    + [Overview](use-cases/identity/id-overview.md)
    + [First-party device IDs](use-cases/identity/first-party-device-ids.md)
    + [ID sharing](use-cases/identity/id-sharing.md)
  + [Multiple SDK instances](use-cases/multiple-instances.md)
  + Personalization {#personalization}
    + [Overview](use-cases/personalization/pers-overview.md)
    + [Display events](use-cases/personalization/display-events.md)
    + [Manage flicker](use-cases/personalization/manage-flicker.md)
    + [Rendering personalized content](use-cases/personalization/rendering-personalization-content.md)
    + [Top and bottom page events](use-cases/personalization/top-bottom-page-events.md)

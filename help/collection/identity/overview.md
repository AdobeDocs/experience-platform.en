---
title: Identity in Data Collection
description: Learn how Data Collection uses ECIDs, CORE IDs, first-party persistence, and identityMap across web implementations.
exl-id: 03060cdb-becc-430a-b527-60c055c2a906
---
# Identity in Data Collection

Adobe Data Collection uses identity signals to recognize returning visitors and carry context across experiences. For web implementations, the Experience Cloud ID (ECID) is the primary device identifier used by the Web SDK and the Web SDK tag extension.

This page covers the cross-cutting identity concepts that apply across the identity docs in this section and helps you choose the right identity pattern for your implementation.

## Choose the identity path that matches your goal {#choose-your-path}

* **Preserve identity on your own domains**: Use [first-party device IDs](./first-party-device-ids.md) when browser restrictions are shortening cookie life and you need stronger continuity for analytics and personalization on sites you control.
* **Pass identity from a mobile app to mobile web or a WebView**: Use [mobile-to-web identity sharing](./mobile-to-web.md) when the visitor starts in your app and continues in mobile web content.
* **Keep identity continuous across domains that you own**: Use [cross-domain sharing](./cross-domain-sharing.md) when visitors move between your organization's web properties and you want consistent reporting and personalization.
* **Keep first-party persistence while supporting third-party activation in supported browsers**: Use [unified identity support (Beta)](./unified-identity-support.md) when you need both owned-property durability and supported third-party activation flows.
* **Migrate from an older identity approach**: Start with [`idMigrationEnabled`](/help/collection/js/commands/configure/idmigrationenabled.md) if you are upgrading from Visitor API or reconciling older identity behavior.

## ECID as the primary identifier

For web data collection, the Edge Network generates and maintains an ECID for the visitor. That ECID is the primary device identifier used across Adobe Experience Cloud applications.

Depending on your setup, the ECID can be:

* generated automatically by the Edge Network
* persisted through first-party data collection on your domain
* seeded from a first-party device ID (FPID)
* linked to third-party identity infrastructure when supported conditions exist

## CORE ID and third-party identity {#core-id-and-third-party-identity}

When third-party cookies are enabled and available, the identity flow can also involve a demdex-based CORE ID. The CORE ID is different from the ECID, but it participates in third-party identity workflows and can be requested through [`getIdentity`](/help/collection/js/commands/getidentity.md).

If you need a technical overview of how first-party and third-party identity contexts work together, see [Unified identity support in Data Collection (Beta)](./unified-identity-support.md).

## First-party and third-party data collection {#first-party-and-third-party-data-collection}

How you collect data affects identity behavior.

**First-party data collection**

First-party data collection uses a domain that your organization controls. This generally provides stronger cookie persistence on owned properties and is the foundation for first-party durability strategies such as [first-party device IDs](./first-party-device-ids.md).

**Third-party data collection**

Third-party data collection depends on browser support for third-party cookies. When available, it can support third-party identity and activation workflows. When blocked, identity falls back to first-party behavior on the owned domain.

The choice between first-party and third-party behavior directly affects visitor continuity, reporting, and personalization.

## Use `identityMap` to send additional identities {#identitymap}

The Web SDK can send additional identities in the XDM `identityMap`. This lets you include person-level or business identifiers alongside the ECID.

Each identity entry can include:

| Property | Description |
| --- | --- |
| `id` | The identifier value for the namespace. |
| `authenticatedState` | The authentication state of the identifier. |
| `primary` | Whether that identifier should be treated as primary. |

If you do not mark another identity as primary, the ECID remains the default primary identity. When possible, Adobe recommends using a person-level namespace as the primary identity.

For schema-level details, see [identityMap in XDM schema composition](/help/xdm/schema/composition.md#identityMap). For tag-based configuration details, see [Data element types](/help/tags/extensions/client/web-sdk/data-element-types.md#identity-map).

## Related tasks

* Retrieve the current visitor identity through [`getIdentity`](/help/collection/js/commands/getidentity.md)
* Access the ECID through [Data Prep for Data Collection](/help/datastreams/data-prep.md) or [tags](/help/tags/extensions/client/web-sdk/accessing-the-ecid.md)
* Migrate existing AMCV cookies with [`idMigrationEnabled`](/help/collection/js/commands/configure/idmigrationenabled.md)
* Configure [first-party device IDs](./first-party-device-ids.md)
* Configure [unified identity support (Beta)](./unified-identity-support.md)
* Share identity [across domains](./cross-domain-sharing.md) or [from mobile apps to web](./mobile-to-web.md)

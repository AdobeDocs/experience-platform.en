---
title: Identity handling in the destinations activation workflow
description: Learn how identity export is handled in the activation workflow, depending on destination type
---
# Identity handling in the destinations activation workflow

This page describes the particularities of how identities are exported to different destination types.

Each destination is different, so there isn't a one-size-fits-all setup across all destinations. However there are a few patterns that guide all the destination setup and the identity requirements:

## File-based destinations

File-based destinations (S3, SFTP, most email marketing destinations such as Adobe Campaign, Eloqua, SFMC): Identity setup in most of these destinations is open as long as a primary key is specified. Note that only a single identity can be selected in an export. When you select an identity for export, it is automatically selected as a mandatory attribute and deduplication key.

As a workaround, you can add more identities to the export, if these are set as attributes. See below an example for email address.

## API-based streaming destinations

* API-based "streaming" destinations built with Destination SDK (FB, Google Customer Match, Pinterest, Braze, etc): Only support specific IDs (see the "supported identities" section in docs). However customers have flexibility to use data from either private graphs or from attributes (with the caveats on arrays in attributes mentioned above).

## Enterprise destinations

* Advanced enterprise destinations (Kinesis, Event Hub, HTTP API): Do not require specific IDs, as these are designed for enterprise integration use cases.

## Personalization destinations

* Personalization "Edge lookup" destinations (Target, Custom Personalization): Do not require identity selection as the integration is a lookup - the client (Target, Web SDK, etc) takes what it needs.

Advertising destinations relying on third-party cookie integrations

* (Wildcard) advertising destinations relying on 3rd-party cookies (Google DV360, Bing, TTD): Do not require customers to select IDs, as AEP will automatically look up the match table constructed by the ECID service. Note: Most of these are supported in AAM. Only a few are listed in AEP. Currently there's no plan to support more.

![Table with all supported identities](/help/destinations/assets/how-destinations-work/identities-table.png)
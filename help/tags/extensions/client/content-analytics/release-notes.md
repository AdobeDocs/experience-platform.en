---
title: Release Notes for the Adobe Content Analytics Extension
description: The latest release notes for the Content Analytics tag extension in Adobe Experience Platform.
exl-id: 37b34915-655b-40de-b17b-43028c579e37
TQID: https://experienceleague.adobe.com/9zJHsVFEb-RMqCQ6GmR6LH-bzIfkir-M1i5dOwaF6do
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: c2be0313-b3ae-45e0-b454-d20bf54b23f2
    internal-label: Measurement
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Adobe Content Analytics extension release notes

The following is a list of release notes for the Content Analytics tag extension.

| Version | Date | Fixes |
|---|---|---|
| 1.0.53 | 13 May 2026 | <ul><li>Calculates the asset sizes in a request payload and dynamically sends the maximum amount of assets possible, to reduce the overall number of requests being sent and to avoid any "413 Content Too Large" errors.</li><li>Tracks assets where CSS loads images in the background of an element in the DOM, and properly accounts for CSS background images with empty src attributes.</li><li>Added a hard-coded `permanentlyBlockedURLs` array containing `maps.googleapis.com` and `mapsresources-pa.googleapis.com`. These URLs are always blocked and this is a default setting in the Content Analytics library.</li><li>Added `idSource` and `channel` fields to XDM data collection request.</li></ul> |
| 1.0.51 | 13 March 2026 | <ul><li>Fixed a minor bug that could cause `experienceIDs` to become cached when navigating between pages.</li><li>Fixed an issue with experience querystring parameters capture. Query parameters function as follows:<ul><li>Query parameters field is empty: no querystring parameters are captured in the experience ID.</li><li>Query parameters are explicitly defined (for example, one, two, three): only those querystring parameters and values are captured in the experience ID.</li><li>Query parameter is set to a wildcard (`.*`): the entire document.location.search string is included in the URL.</li></ul></li></ul> |
| 1.0.49 | 12 September 2025 | <ul><li>Fixed a minor bug that would cause the Tags Extension UI to not load at all if the user did not have datastream permissions. The UI will now display a permission warning in the **[!UICONTROL Choose from list]** datastream option and still allow the user to manually enter values.</li><li>Updated a path issue for l10n.</li><li>Fixed an issue where some images that were child elements of non-image parents were not correctly capturing asset clicks for those child image elements.</li><li>If a user has the WebSDK configured in tags with a different instance name than `alloy`, the Content Analytics library will detect the first instance of the WebSDK library and use that to send Content Analytics events.</li></ul> |
| 1.0.48 | 25 August 2025 | <ul><li>Adds support for tracking assets within a document's shadow-root DOM elements.</li></ul> |
| 1.0.47 | 23 Jul 2025 | <ul><li>Fixed a bug that occurred when experiences were not enabled, causing the regular expression check for experiences to fail. This issue prevented Content Analytics data from being collected.</li><li>Resolved an issue with the default language setting that was preventing the Tags UI from displaying for some users who did not have their primary default language set in Experience Cloud.</li></ul> |
| 1.0.46 | 18 Jun 2025 | <ul><li>Added a toast notification when attempting to save the extension configuration, if a production datastream is not present.</li><li>Temporarily fixed the visibility issue of the Content Analytics payload by placing the stringified payload contents in the console instead.</li><li>Added localization support to the Extension UI.</li><li>Partially fixed a CSS issue that caused extra padding around the Extension UI content.</li></ul> |
| 1.0.45 | 14 Apr 2025 | <ul><li>Addressed several bugs in the configuration settings related to holding Content Analytics events while waiting for page view events. Content Analytics will now, by default, wait to fire events until the FIRST page view event occurs.</li></ul> |
| 1.0.44 | 31 Mar 2025 | <ul><li>First iteration of the AppMeasurement integration.</li><li>This version does not yet support filtering specific requests (e.g., page views), but this functionality may be added in a future update. It currently uses the first AppMeasurement instance found on the page.</li></ul> |
| 1.0.43 | 10 Mar 2025 | <ul><li>Initial extension release.</li></ul> |

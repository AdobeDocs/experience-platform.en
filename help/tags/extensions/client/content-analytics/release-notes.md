---
title: Release Notes for the Adobe Content Analytics Extension
description: The latest release notes for the Content Analytics tag extension in Adobe Experience Platform.
exl-id: 37b34915-655b-40de-b17b-43028c579e37
---
# Adobe Content Analytics extension release notes

The following is a list of release notes for the Content Analytics tag extension.

| Version | Date | Fixes |
|---|---|---|
| 1.0.47 | 23 Jul 2025 | <ul><li>Fixed a bug that occurred when experiences were not enabled, causing the regular expression check for experiences to fail. This issue prevented Content Analytics data from being collected.</li><li>Resolved an issue with the default language setting that was preventing the Tags UI from displaying for some users who did not have their primary default language set in Experience Cloud.</li></ul> |
| 1.0.46 | 18 Jun 2025 | <ul><li>Adds a toast notification when attempting to save the extension configuration, if a production datastream is not present.</li><li>Temporarily fixed the visibility issue of the Content Analytics payload by placing the stringified payload contents in the console instead.</li><li>Adds localization support to the Extension UI.</li><li>Partially fixed a CSS issue that caused extra padding around the Extension UI content.</li></ul> |
| 1.0.45 | 14 Apr 2025 | <ul><li>Addressed several bugs in the configuration settings related to holding Content Analytics events while waiting for page view events. Content Analytics will now, by default, wait to fire events until the FIRST page view event occurs.</li></ul> |
| 1.0.44 | 31 Mar 2025 | <ul><li>First iteration of the AppMeasurement integration.</li><li>This version does not yet support filtering specific requests (e.g., page views), but this functionality may be added in a future update.
It currently uses the first AppMeasurement instance found on the page.</li></ul> |
| 1.0.43 | 10 Mar 2025 | <ul><li>Initial extension release.</li></ul> |

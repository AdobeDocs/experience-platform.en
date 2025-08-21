---
title: Release Notes for the Adobe Content Analytics Extension
description: The latest release notes for the Content Analytics tag extension in Adobe Experience Platform.
exl-id: 37b34915-655b-40de-b17b-43028c579e37
---
# Adobe Content Analytics extension release notes

The following is a list of release notes for the Content Analytics tag extension.

| Version | Date | Fixes |
|---|---|---|
| 1.0.47 | 23 Jul 2025 | <ul><li>Fixes the bug a customer was encountering when experiences were not enabled and the regular expression check for experiences was failing. This causes Content Analytics data to not be collected.</li><li>Fixes the default language bug that was preventing the Tags UI from being displayed for some users if they did not have their primary default language set in the Experience cloud.</li></ul> |
| 1.0.46 | 18 Jun 2025 | <ul><li>Adds a toast notification if a production datastream is not present when attempting to save the extension configuration.</li><li>Temporarily fixes the Content Analytics payload being visible, but placing the stringified Content Analytics payload contents in the console.</li><li>Adds localization to the Extension UI.</li><li>Partially fixes a CSS issue with extra padding around the Extension UI content.</li></ul> |
| 1.0.45 | 14 Apr 2025 | <ul><li>Addresses a few bugs in the configuration settings for when holding Content Analytics events when waiting for page view events. Now Content Analytics will wait by default to fire events until the FIRST page view event happens.</li></ul> |
| 1.0.44 | 31 Mar 2025 | <ul><li>First iteration of the AppMeasurement integration.</li><li>This version does not support filtering on specific requests (for example, page views) but might be added at a later date.  This also uses the first AppMeasurement instance found on the page.</li></ul> |
| 1.0.43 | 10 Mar 2025 | <ul><li>Initial extension release.</li></ul> |

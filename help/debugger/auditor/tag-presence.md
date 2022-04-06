---
title: Tag Presence Test Reference
description: Learn how the auditor feature tests for tag presence in Adobe Experience Platform Debugger.
exl-id: 8f01f89e-2a3b-41bc-b971-f3c60d0ae3fa
---
# Tag presence test reference

This reference provides more information about how the auditor feature in Adobe Experience Platform Debugger tests for tag presence.

>[!NOTE]
>
>For more information on auditor tests in Platform Debugger, see the [auditor feature overview](./overview.md).

Tag presence tests evaluate whether certain tags exists on the page, and whether they are in the right place in your page code.

| Test | Weight | Criteria | Recommendation |
| --- | --- | --- | --- |
| Advertising Cloud - Code presence  | 5 | The Advertising Cloud tag is not available in the DOM. | Implement the Advertising Cloud tag using the [Advertising Cloud tag extension](https://experienceleague.adobe.com/docs/experience-platform/destinations/catalog/advertising/adobe-advertising-cloud.html). |
| Advertising Cloud - Segment Pixel Implemented  | 5 | Upgrade your Advertising Cloud segment pixels to the new Advertising Cloud image-only tags. Using the deprecated AMO segment tags can result in data loss. | Implement the Advertising Cloud segment pixel using the [Advertising Cloud tag extension](https://experienceleague.adobe.com/docs/experience-platform/destinations/catalog/advertising/adobe-advertising-cloud.html). |
| Analytics - Loaded in DOM  | 5 | The Adobe Analytics tag was not detected. | Install the latest version of Analytics. <br><br>[Additional information](https://experienceleague.adobe.com/docs/analytics/implementation/home.html) |
| Launch - Library loaded  | 5 | A `global _satellite` object was not found in the DOM, meaning that the tag library is either not installed or failing to execute. | Verify that the tag library is implemented on the page and is not blocked by subsequent script activities. |
| Launch - Not have multiple embed scripts | 5 | Production sites should only load one embed code per page. | Verify that only the production library is loading on the page. |
| Launch - `pageBottom` callback exists in `<body>` | 5 | The required `_satellite.pageBottom()` callback was not found within the `<body>` of the page. This test fails if the `pageBottom` call isn't found at all on the page, or if it is in the `<head>` tag (or some other unexpected location). It will only pass if `pageBottom` is found somewhere within the `<body>` tag. | Add the inline script immediately prior to the closing `</body>` tag to ensure proper tags functionality.<br><br>[Additional information](https://experienceleague.adobe.com/docs/experience-platform/tags/client-side/asynchronous-deployment.html) |
| Launch - `pageBottom` callback should not exist when asynchronously deployed | 5 | The `_satellite.pageBottom()` callback was found on the page, which should not be the case when tags are asynchronously deployed. | Remove the `_satellite.pageBottom()` script to enable proper tags functionality. <br><br>[Additional information](https://experienceleague.adobe.com/docs/experience-platform/tags/client-side/asynchronous-deployment.html) |
| Experience Cloud ID Service - Code presence | 5 | The Experience Cloud ID Service code was not found. Using Experience Cloud IDs (ECIDs) is highly recommended to ensure you get the most value out of your Experience Cloud solutions and is critical to ID management across Experience Cloud solutions. | Install the most recent version of ECID.<br><br>[Additional information](https://experienceleague.adobe.com/docs/id-service/using/intro/overview.html) |
| Experience Cloud ID Service - Cookie presence | 5 | The `AMCV_` cookie was not found. You must instantiate a visitor object from the `VisitorAPI.js` code. | If this is a tags implementation, verify that the AdobeOrg ID is properly entered into the ECID tool. <br><br>[Additional information](https://experienceleague.adobe.com/docs/id-service/using/intro/cookies.html) |
| Experience Cloud ID Service - MID value present | 5 | The MID value was not found in the `AMCV_` cookie. | Test again to check for any ECID API latency. If the condition persists, contact Adobe Customer Care. <br><br>[Additional information](https://experienceleague.adobe.com/docs/id-service/using/intro/cookies.html)|
| Target - Code Presence | 5 | Adobe Target should be defined in the DOM. | Install the most recent version of Target (at.js). <br><br>[Additional information](https://experienceleague.adobe.com/docs/target/using/implement-target/implementing-target.html) |
| Target - Library loaded in `<head>` | 4 | The Target library should be loaded in the `<head>` tag. | Check to be sure that the Target library is loaded in the `<head>` tag. <br><br>[Additional information](https://experienceleague.adobe.com/docs/target/using/implement-target/implementing-target.html) |

{style="table-layout:auto"}

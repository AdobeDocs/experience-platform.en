---
title: Configuration Test Reference
description: Learn how the auditor feature tests for configurations in Adobe Experience Platform Debugger.
exl-id: 92b07224-57f1-4891-9923-aa079945e6bc
---
# Configuration test reference

This reference provides more information about how the auditor feature in Adobe Experience Platform Debugger runs configuration tests.

>[!NOTE]
>
>For more information on auditor tests in Platform Debugger, see the [auditor feature overview](./overview.md).

Configuration tests scan for specific settings, values, or potential conflicts in your implementation. Platform Auditor evaluates the tags against other rules and recommended best practices.

| Test | Weight |  Criteria | Recommendation |
| --- | --- | --- | --- |
| Advertising Cloud - Conversion names use only alpha-numeric characters | 3 | The `ev_conversion_property_name` parameter should only contain numeric and decimal values EXCEPT for the `ev_transid` parameter, which can contain text or numeric values. Look for `everesttech.net` pixels that contain a URL parameter starting with  `ev_`. | Make sure your transaction property parameters only contain numeric and decimal values.<br><br>Warning: Any other value types might cause data loss. |
| Advertising Cloud - Conversion names use URL-safe characters | 3 | Conversion property names should not contain an ampersand or question mark. | Make sure transaction property parameters do not contain a non-encoded ampersand or question mark. These break the URL format.<br><br>Warning: Property parameters that contain a non-encoded ampersand or question mark, (for example:  `ev_formComplete?=1` or  `ev_formComplete&Submit=1`), might result in data loss. |
| Advertising Cloud - Transaction ID Implemented Correctly | 1 | The property name  `ev_transid=` should not be empty. | The property name  `ev_transid=` should not be left without a value. If this is left without a value, there could be transaction data loss. Assign a value to `ev_transid=` or remove the parameter from the pixel. |
| Analytics - Instantiated in DOM | 5 | The Adobe Analytics code is either not installed or failing to execute. Returns 0 when no Analytics code is found on the web page. | Verify that the Analytics tag is implemented on the page and is not blocked by subsequent script activities.<br><br>[Additional information](https://experienceleague.adobe.com/docs/analytics/implementation/home.html) |
| Analytics - Instantiated once | 5 | The Adobe Analytics code was detected more than once on the page. . Returns 0 when no A-nalytics code is found on the web page. | Make sure there is only one Analytics tag on the page.<br><br>[Additional information](https://experienceleague.adobe.com/docs/analytics/implementation/home.html) |
| Analytics - Latest version | 3 | Your pages are not running the latest version of the Analytics code library. Code libraries that power Experience Cloud technologies are constantly being updated and tweaked in order to take advantage of performance improvements and provide the latest features. Returns 0 when no Analytics code is found on the web page. | Install the latest version of the Analytics library.<br><br>[Additional information](https://experienceleague.adobe.com/docs/analytics/implementation/appmeasurement-updates.html) |
| Launch - Third-party tags load asynchronously after DOM ready | 3 | To strike a balance between a good user experience and collecting accurate data, third-party tags should be triggered at DOM ready. This will ensure that those tracking scripts execute while not impacting site functionality. | Resolve this issue by adjusting all rules that execute third-party pixels to fire at DOM Ready.<br><br>[Additional information](../../tags/ui/managing-resources/rules.md) |
| Experience Cloud ID Service - Latest Version | 2 | Your pages are not running the latest version of the Visitor ID Service code library,  visitorAPI.js. Code libraries that power Experience Cloud technologies are constantly being updated and tweaked in order to take advantage of performance improvements and provide the latest features. | Install the latest version of the Visitor ID service library.<br><br>[Additional information](https://experienceleague.adobe.com/docs/id-service/using/id-service-api/library.html) |
| Launch - Latest Version | 2 | These pages are not running the latest version of the tags code library (Turbine). Code libraries that power Experience Cloud technologies are constantly being updated and tweaked in order to take advantage of performance improvements and provide the latest features. | Rebuild and publish the tag library.<br><br>[Additional information](../../tags/quick-start/quick-start.md) |
| Target - Latest version | 2 | Your pages are not running the latest version of the Target code library. Code libraries that power Experience Cloud technologies are constantly being updated and tweaked in order to take advantage of performance improvements and provide the latest features. | Install the latest version of the Target library.<br><br>[Additional information](https://developer.adobe.com/target/implement/client-side/) |
| Target - mboxDefault precedes mboxCreate  | 5 | The proper use of  mboxCreate looks similar to this:<br><br> `<div class="mboxDefault"><!-Customer content--></div><script>mboxCreate('myMboxName')</script>` | Be sure to include a  `<div class="mboxDefault"></div>` tag before invoking  mboxCreate(). at.js will not add one for you.<br><br>[Additional information](https://developer.adobe.com/target/implement/client-side/)|
| Target - Valid DOCTYPE | 5 | An invalid DOCTYPE was detected. No mboxes will be fired in this scenario.  For at.js, the DOCTYPE must be in Standards mode or Target will not work. | Update the DOCTYPE on the page.<br><br>[Additional information](https://developer.adobe.com/target/implement/client-side/atjs/target-atjs-faq/) |

{style="table-layout:auto"}

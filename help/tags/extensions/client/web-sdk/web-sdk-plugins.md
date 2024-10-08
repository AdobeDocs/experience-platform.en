---
title: Common Web SDK Plugins Extension Overview
description: Learn about the Common Web SDK Plugins tag extension in Adobe Experience Platform.
exl-id: 6052603b-1537-4dc7-9278-969d892ca15b
---
# Common Web SDK Plugins extension overview

>[!IMPORTANT]
>
>The extension is intended to be used with the Adobe Experience Platform Web SDK extension. To see information on the version intended to be used with AppMeasurement, refer to the overview on the [Common Analytics Plugins extension](../plugins/overview.md).

This document covers how to configure the Web SDK Plugins tag extension and use it to augment the [Adobe Experience Platform Web SDK extension](../web-sdk/overview.md).

## Configure the Common Web SDK Plugins extension

This section provides a reference for the options available when configuring the Web SDK Plugins extension..

>[!IMPORTANT]
>
>The Common Web SDK Plugins extension is intended to augment the Adobe Experience Platform Web SDK extension, however, you do not need to have it installed for the extension to work as expected.

## Adding plugins to the Adobe Experience Platform Web SDK extension

No configuration is necessary to initialize or add a plugin to your library outside of using the following native data elements that are provided by the Common Web SDK Plugins extension:

* [`getAndPersistValue`](#getAndPersistValue)
* [`getGeoCoordinates`](#getGeoCoordinates)
* [`getNewRepeat`](#getNewRepeat)
* [`getPagename`](#getPagename)
* [`getPreviousValue`](#getPreviousValue)
* [`getQueryParam`](#getQueryParam)
* [`getTimeParting`](#getTimeParting)
* [`getTimeSinceLastVisit`](#getTimeSInceLastVisit)
* [`getValOnce`](#getValOnce)
* [`getVisitDuration`](#getVisitDuration)
* [`getVisitNum`](#getVisitNum)
* [`pFo`](#pFo)

[//]: # (- [ ] Add links to plugin pages within the data elements below)

### `getAndPersistValue`

>[!IMPORTANT]
>
>This data element both sets cookies and allows for storing user-generated values in cookies. Please refer to the plug-in specific documentation for more information.

Allows you to set up and configure the [`getAndPersistValue` Analytics plug-in](https://experienceleague.adobe.com/docs/analytics/implementation/vars/plugins/getandpersistvalue.html). The `getAndPersistValue` data element stores a value in a cookie that can be retrieved later during a visit.

The `getAndPersistValue` data element provides the following arguments:

* `vtp` (required): The value to persist from page to page
* `cn` (optional): The name of the cookie to store the value. If this argument is not set, The cookie is named `"s_gapv"`
* `ex` (optional): The number of days before the cookie expires. If this argument is `0` or is not set, the cookie expires at the end of the visit (30 minutes of inactivity).

If the variable in the `vtp` argument is set, then the data element sets the cookie then returns the cookie value. If the variable in the `vtp` argument is not set, then the data element only returns the cookie value.

### `getGeoCoordinates`

>[!IMPORTANT]
>
>This plug-in requires location access on the client but will not throw an exception if it doesn't get it.

Allows you to set up and configure the [`getGeoCoordinates` Analytics plug-in](https://experienceleague.adobe.com/docs/analytics/implementation/vars/plugins/getgeocoordinates.html). The `getGeoCoordinates` data element captures the latitude and longitude of visitors' devices.

The `getGeoCoordinates` data element does not use any arguments. It returns one of the following values:

* `"geo coordinates not available"`: For devices that do not have geo-location data available at the time that the plug-in runs. This value is common on the first hit of the visit, especially when visitors first need to provide consent on tracking their location.
* `"error retrieving geo coordinates"`: When the plug-in encounters any errors when attempting to retrieve the device's location
* `"latitude=[LATITUDE] | longtitude=[LONGITUDE]"`: Where [LATITUDE]/[LONGITUDE] are the latitude and longitude, respectively

### `getNewRepeat`

>[!IMPORTANT]
>
>This data element sets cookies. Please refer to the plug-in specific documentation for more information.

Allows you to set up and configure the [`getNewRepeat` Analytics plug-in](https://experienceleague.adobe.com/docs/analytics/implementation/vars/plugins/getnewrepeat.html). The `getNewRepeat` data element determines whether a visitor to the site is a new visitor or a repeat visitor within a desired number of days.

The `getNewRepeat` data element uses the following arguments:

* `d` (integer, optional): The minimum number of days required between visits that resets visitors back to `"New"`. If this argument is not set, it defaults to 30 days.

This data element returns the value of `"New"` if the cookie set by the data element doesn't exist or has expired. It returns the value of `"Repeat"` if the cookie set by the data element exists and the amount of time since the current hit and the time set in the cookie is greater than 30 minutes. This method returns the same value for an entire visit.

### `getPageName`

Allows you to set up and configure the [`getPageName` Analytics plug-in](https://experienceleague.adobe.com/docs/analytics/implementation/vars/plugins/getpagename.html). The `getPageName` data element creates an easy to read, friendly formatted version of the current URL.

The `getPageName` data element uses the following arguments:

* `si` (optional, string): An ID inserted into the beginning of the string representing the ID of the site. This value can either be a numeric ID or a friendly name. When not set, it defaults to the current domain.
* `qv` (optional, string): A comma-delimited list of query string parameters that, if found in the URL, are added to the string
* `hv` (optional, string): A comma-delimited list of parameters found in the URL hash that, if found in the URL, are added to the string
* `de` (optional, string): The delimiter to split up individual parts of the string. Defaults to a pipe (`|`).

The data element returns a string containing a friendly-formatted version of the URL. This string is typically assigned to the `pageName` variable, but can be used in other variables as well.

### `getPreviousValue`

>[!IMPORTANT]
>
>This data element both sets cookies and allows for storing user-generated values in cookies. Please refer to the plug-in specific documentation for more information.

Allows you to set up and configure the [`getPreviousValue` Analytics plug-in](https://experienceleague.adobe.com/docs/analytics/implementation/vars/plugins/getpreviousvalue.html). The `getPreviousValue` data element sets a variable to a value set on a previous hit.

The `getPreviousValue` data element uses the following arguments:

* `v` (string, required): The variable that has the value that you want to pass over to the next image request. A common variable used is `s.pageName` to retrieve the previous page value.
* `c` (string, optional): The name of the cookie that stores the value.  If this argument is not set, it defaults to `"s_gpv"`.

When you call this data element, it returns the string value contained in the cookie. The plug-in then resets the cookie expiration, and assigns it the variable value from the `v` argument. The cookie expires after 30 minutes of inactivity.

### `getQueryParam`

Allows you to set up and configure the [`getQueryParam` Analytics plug-in](https://experienceleague.adobe.com/docs/analytics/implementation/vars/plugins/getqueryparam.html). The `getQueryParam` data element extracts the value of any query string parameter contained in a URL. It is useful for extracting campaign codes, both internal and external, from landing page URLs. It is also valuable when extracting search terms or other query string parameters. This data element provides robust features in parsing complex URLs, including hashes and URLs containing multiple query string parameters.

The `getQueryParam` data element uses the following arguments:

* `qsp` (required): A comma delimited list of query string parameters to look for within the URL. It is not case-sensitive.
* `de` (optional): The delimiter to use if multiple query string parameters match. Defaults to an empty string.
* `url` (optional): A custom URL, string, or variable to extract the query string parameter values from. Defaults to `window.location`.

Calling this data element returns a value depending on the above arguments and the URL:

* If a matching query string parameter is not found, the method returns an empty string.
* If a matching query string parameter is found, the method returns the query string parameter value.
* If a matching query string parameter is found but the value is empty, the method returns `true`.
* If multiple matching query string parameters are found, the method returns a string with each parameter value delimited by the string in the `de` argument.

### `getTimeParting`

Allows you to set up and configure the [`getTimeParting` Analytics plug-in](https://experienceleague.adobe.com/docs/analytics/implementation/vars/plugins/gettimeparting.html). The `getTimeParting` data element captures the details of the time when any measurable activity takes place on your site. This data element is valuable when you want to breakdown metrics by any repeatable division of time over a given date range. For example, you can compare conversion rates between two different days of the week, such as all Sundays vs. all Thursdays. You can also compare periods of the day, such as all mornings vs. all evenings.

The `getTimeParting` data element uses the following argument:

`t` (Optional but recommended, string): The name of the time zone to convert the visitor's local time to.  Defaults to UTC/GMT time. Refer to the [List of TZ database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) on Wikipedia for a complete list of valid values.

Common valid values include:

* `"America/New_York"` for Eastern Time
* `"America/Chicago"` for Central Time
* `"America/Denver"` for Mountain Time
* `"America/Los_Angeles"` for Pacific Time

Calling this data element returns a string that contains the following delimited by a pipe (`|`):

* The current year
* The current month
* The day of the month
* The day of the week
* The current time (AM/PM)

### `getTimeSinceLastVisit`

>[!IMPORTANT]
>
>This data element sets cookies. Please refer to the plug-in specific documentation for more information.

Allows you to set up and configure the [`getTimeSinceLastVisit` Analytics plug-in](https://experienceleague.adobe.com/docs/analytics/implementation/vars/plugins/gettimesincelastvisit.html). The `getTimeSinceLastVisit` data element tracks how long a visitor has taken to return to your site after their last visit.

The `getTimeSinceLastVisit` data element does not use any arguments. It returns the amount of time elapsed since the visitor last came to the site, bucketed in the following format:

* Time between 30 minutes and an hour since the last visit is set to the nearest half-minute benchmark. For example, `"30.5 minutes"`, `"53 minutes"`
* Time between an hour and a day is rounded to the nearest quarter-hour benchmark. For example, `"2.25 hours"`, `"7.5 hours"`
* Time greater than a day is rounded to the nearest day benchmark. For example, `"1 day"`, `"3 days"`, `"9 days"`, `"372 days"`
* If a visitor has not visited before or the time elapsed is greater than two years, the value is set to `"New Visitor"`.

### `getValOnce`

>[!IMPORTANT]
>
>This data element both sets cookies and allows for storing user-generated values in cookies. Please refer to the plug-in specific documentation for more information.

Allows you to set up and configure the [`getValOnce` Analytics plug-in](https://experienceleague.adobe.com/docs/analytics/implementation/vars/plugins/getvalonce.html). The `getValOnce` data element prevents a variable from being set equal to the same value more than once.

The `getValOnce` data element uses the following arguments:

* `vtc` (required, string): The variable to check and see if it was just previously set to an identical value
* `cn` (optional, string): The name of the cookie that holds the value to check. Defaults to `"s_gvo"`
* `et` (optional, integer): The expiration of the cookie in days (or minutes, depending on the `ep` argument). Defaults to `0`, which expires at the end of the browser session
* `ep` (optional, string): Only set this argument if the `et` argument is also set. Set this argument to `"m"` if you want the `et` argument to expire in minutes instead of days. Defaults to `"d"`, which sets the `et` argument in days.

If the `vtc` argument and cookie value match, this method returns an empty string. If the `vtc` argument and cookie value do not match, the method returns the `vtc` argument as a string.

### `getVisitDuration`

>[!IMPORTANT]
>
>This data element sets cookies. Please refer to the plug-in specific documentation for more information.

Allows you to set up and configure the [`getVisitDuration` Analytics plug-in](https://experienceleague.adobe.com/docs/analytics/implementation/vars/plugins/getvisitduration.html). The `getVisitDuration` data element tracks the amount of time in minutes that the visitor has been on the site up to that point.

The `getVisitDuration` data element does not use any arguments. It returns one of the following values:

* `"first hit of visit"`
* `"less than a minute"`
* `"1 minute"`
* `"[x] minutes"` (where `[x]` is the number of minutes passed since the visitor landed on the site)

### `getVisitNum`

>[!IMPORTANT]
>
>This data element sets cookies. Please refer to the plug-in specific documentation for more information.

Allows you to set up and configure the [`getVisitNum` Analytics plug-in](https://experienceleague.adobe.com/docs/analytics/implementation/vars/plugins/getvisitnum.html). The `getVisitNum` data element returns the visit number for all visitors that come to the site within the desired number of days.

The `getVisitNum` data element uses the following arguments:

* `rp` (optional, integer OR string): The number of days before the visit number counter resets.  Defaults to `365` when not set.
  * When this argument is `"w"`, the counter resets at the end of the week (this Saturday at 11:59 PM)
  * When this argument is `"m"`, the counter resets at the end of the month (the last day of this month)
  * When this argument is `"y"`, the counter resets at the end of the year (December 31st)
* `erp` (optional, boolean): When the `rp` argument is a number, this argument determines if the visit number expiration should be extended. If set to `true`, subsequent hits to your site resets the visit number counter. If set to `false`, subsequent hits to your site do not extend when the visit number counter resets. Defaults to `true`. This argument is not valid when the `rp` argument is a string.

The visit number increment whenever the visitor returns to your site after 30 minutes of inactivity. Calling this method returns an integer that represents the visitor's current visit number.

### `p_fo` (Page First Only)

Allows you to set up and configure the [`p_fo` Analytics plug-in](https://experienceleague.adobe.com/docs/analytics/implementation/vars/plugins/p-fo.html). The `p_fo` data element is a utility that checks for the existence of a specific JavaScript object. If the object doesn't exist, then the plug-in creates the object and returns `true`. If the JavaScript object already exists on the page, then it returns `false`. This data element is useful to run code exactly once on a page.

The `p_fo` data element uses the following arguments:

* `on` (required, string): The name of the JavaScript object that the data element creates if the object doesn't yet exist on the page.

If the object doesn't yet exist, this method returns `true` and creates the object. If the object already exists, this method returns `false`.

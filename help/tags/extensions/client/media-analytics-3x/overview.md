---
title: Adobe Media Analytics (3.x SDK) for Audio and Video Extension Overview
description: Learn about the Adobe Media Analytics (3.x SDK) for Audio and Video tag extension in Adobe Experience Platform.
exl-id: 7289d57d-7e7f-4832-9469-3b5a62183a32
TQID: https://experienceleague.adobe.com/SIfGqM-kdtMyQyfkorCmUzmkaGVSDxZPR9ePnv5IRYI
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
  - id: fd307ce7-56f5-4ee3-af68-a7833ff6e85e
    internal-label: API
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Adobe Media Analytics (3.x SDK) for Audio and Video extension overview

Use this documentation for information on installing, configuring, and implementing the Adobe Media Analytics (3.x SDK) for Audio and Video extension (Media Analytics extension). Included are the options available when using this extension to build a rule, along with examples and links to samples.

The Media Analytics (MA) extension adds the core JavaScript Media SDK (Media 3.x SDK). This extension provides the functionality for adding the `Media` tracker instance to a tags-enabled site or project. The MA extension requires two additional extensions:

* [Analytics Extension](../analytics/overview.md)
* [Experience Cloud ID Extension](../id-service/overview.md)

>[!IMPORTANT]
>
>This extension deploys with Media 3.x SDK, which is not backward compatible with Media 2.x SDK. Since 2.x has been deprecated, please update to 3.x.

After you have included all three of the extensions mentioned above in your tags-enabled project, you can proceed in one of two ways:

* Use `Media` APIs from your web app
* Include, or build, a player-specific extension that maps specific media player events to the APIs on the `Media` tracker instance. This instance is exposed through the MA extension.

## Install and configure the MA extension

* **Install:** To install the MA extension, open your extension property, select **[!UICONTROL Extensions > Catalog]**, hover over the **[!UICONTROL Adobe Media Analytics (3.x SDK) for Audio and Video]** extension, and select **[!UICONTROL Install]**.

* **Configure:** To configure the MA extension, open the [!UICONTROL Extensions] tab, hover over the extension, and then select **[!UICONTROL Configure]**:

![MA Extension Configuration](../../../images/ext-ma-config.png)

### Configuration options:

| Option | Description |
| :--- | :--- |
| Collection API Server | Defines the Media Collection API Server (Contact your Adobe representative to get this server) |
| Application Version | The version of the media player app/SDK |
| Player Name | Name of the media player in use (e.g., "AVPlayer", "HTML5 Player", "My Custom VideoPlayer") |
| Channel | Channel name property |
| Debug Logging | Enable or Disable logging |
| Enable SSL | Enable or Disable sending pings over HTTPS |
| Export APIs to Window Object | Enable or Disable exporting Media Analytics APIs to global scope |
| Variable Name | A variable you use to export Media Analytics APIs under the `window` object |

**Reminder:** The MA extension requires the [Analytics](../analytics/overview.md) and [Experience Cloud ID](../id-service/overview.md) extensions. You must also add these extensions to your extension property and configure them.

## Using the MA extension

### Using from a webpage/JS-app

The MA extension exports the Media APIs in the global window object by enabling the "Export APIs to Window Object" setting in the [!UICONTROL Configuration] page. It exports the APIs under the configured variable name. For example, if the variable name is configured to be `ADB`, then Media APIs can be accessed by `window.ADB.Media`.

>[!IMPORTANT]
>
>The MA extension exports the APIs only when `window["CONFIGURED_VARIABLE_NAME"]` is undefined and does not override existing variables.

1. **Media APIs:**&nbsp;`window["CONFIGURED_VARIABLE_NAME"].Media`

    This exposes all the APIs and constants from Media SDK: [https://adobe-marketing-cloud.github.io/media-sdks/reference/javascript_3x/APIReference.html](https://adobe-marketing-cloud.github.io/media-sdks/reference/javascript_3x/APIReference.html)
    
1. **Create Media Tracker Instance:**&nbsp;`window["CONFIGURED_VARIABLE_NAME"].Media.getInstance`

    **Return Value:** A `Media` tracker instance for tracking a media session.

    ```javascript
    var Media = window["CONFIGURED_VARIABLE_NAME"].Media;

    var tracker = Media.getInstance();
    ```

1. Using the Media tracker instance, follow the [JS API documentation](https://adobe-marketing-cloud.github.io/media-sdks/reference/javascript_3x/index.html) to implement media tracking.

You can obtain the sample player here: [MA Sample Player](https://github.com/Adobe-Marketing-Cloud/media-sdks/tree/master/samples/launch/js/3.x). The sample player acts as a reference to showcase how to use the MA extension to support Media Analytics directly from a webapp.


### Using from other extensions

The MA extension exposes `media` as a shared module to other extensions. (For additional information on Shared Modules, see [Shared Modules documentation](../../../extension-dev/web/shared.md).)

>[!IMPORTANT]
>
>Shared Modules can only be accessed from other extensions. That is, a webpage/JavaScript app cannot access the shared modules, or use `turbine` (see code sample below) outside of an extension.

1. **Media APIs:**&nbsp;`media` Shared Module

    This exposes all the APIs and constants from Media SDK: [https://adobe-marketing-cloud.github.io/media-sdks/reference/javascript_3x/APIReference.html](https://adobe-marketing-cloud.github.io/media-sdks/reference/javascript_3x/APIReference.html)

1. Create the Media tracker instance as follows:

    **Return Value:** A `Media` tracker instance for tracking a media session.

    ```javascript
    var Media =
      turbine.getSharedModule('adobe-media-analytics', 'media');

    var tracker = Media.getInstance();
    ```

1. Using the Media tracker instance, follow the [JS API documentation](https://adobe-marketing-cloud.github.io/media-sdks/reference/javascript_3x/index.html) to implement media tracking.

>[!NOTE]
>
>**Testing:** For this release, to test your extension you must upload it to [Experience Platform](../../../extension-dev/submit/upload-and-test.md), where you have access to all dependent extensions.

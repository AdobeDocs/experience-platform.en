---
keywords: Experience Platform;home;popular topics;target mapping;Target mapping
solution: Experience Platform
title: Mapping Adobe Target Event Data to XDM
description: Learn how to map Adobe Target event fields to an Experience Data Model (XDM) schema for use in Adobe Experience Platform.
exl-id: dab08ab6-6c1c-460a-bb52-8dcdb5709a34
---
# Target mapping field mappings

Adobe Experience Platform allows you to ingest Adobe Target data through the Target source connector. When using the connector, all data from Target fields must be mapped to the [Experience Data Model (XDM)](../../../../xdm/home.md) fields associated with the XDM ExperienceEvent class.

The following table outlines the fields of an Experience Event schema (*XDM ExperienceEvent field*) and the corresponding Target fields they should be mapped to (*Target Request field*). Additional notes for some mappings are also provided.

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| XDM ExperienceEvent field | Target Request field | Notes |
| ------------------------- | -------------------- | ----- |
| **`id`** | A unique request identifier |
| **`dataSource`** | | Configured to "1" for all clients. |
| `dataSource._id` | A system-generated value that cannot be passed in with the request. | The unique ID of this data source. This would be provided by the individual or system that created the data source. |
| `dataSource.code` | A system-generated value that cannot be passed in with the request. | A shortcut to the full @id. At least one of the code or @id can be used. Sometimes, this code is referred to as the data source integration code. |
| `dataSource.tags` | A system-generated value that cannot be passed in with the request. | Tags are used to indicate how the aliases represented by a given data source should be interpreted by applications using those aliases.<br><br>Examples:<br><ul><li>`isAVID`: Data sources representing Analytics visitor IDs.</li><li>`isCRSKey`: Data sources representing aliases that should be used as keys in CRS.</li></ul>Tags are set when the data source is created but they are also included in pipeline messages when referencing a given data source. |
| **`timestamp`** | Event timestamp |
| **`channel`** | `context.channel` | Only works with view delivery. Options are "web" and "mobile", with "web" being the default. |
| **`endUserIds`** |
| `endUserIds.experience.tntId` | `tntId/mboxPC` |
| `endUserIds.experience.mcId` | `marketingCloudVisitorId` | The Experience Cloud ID (ECID) is also known as MCID and continues to be used in namespaces. |
| **`environment`** |
| `environment.browserDetails.userAgent` | `mboxRequest.userAgent` |
| `environment.browserDetails.viewPortHeight` | `mboxRequest.browserHeight` |
| `environment.browserDetails.viewPortWidth` | `mboxRequest.browserWidth` |
| `environment.operatingSystem` | `deviceAtlas.osName` |
| `environment.operatingSystemVersion` | `deviceAtlas.osVersion` |
| `environment.viewportHeight` | `mboxRequest.screenHeight` |
| `environment.viewportWidth` | `mboxRequest.screenWidth` |
| `environment.colorDepth` | `mboxRequest.colorDepth` |
| `environment.carrier` | Mobile carrier name resolved based on the request's IP address. |
| `environment.ipV4` | `mboxRequest.ipAddress` (if in V4 format) |
| `environment.ipV6` | `mboxRequest.ipAddress` (if in V6 format) |
| **`experience`** |
| `experience.target.clientCode` | `mboxRequest.client` |
| `experience.target.mboxName` | `mboxRequest.mboxName` |
| `experience.target.mboxVersion` | `mboxRequest.mboxVersion` |
| `experience.target.sessionId` | `mboxRequest.sessionId` |
| `experience.target.environmentID` | Target's internal mapping for customer-defined environments (such as dev, qa, or prod). |
| `experience.target.supplementalDataID` | Identifier used to stitch Target events with Analytics events |
| `experience.target.pageDetails.pageId` | `mboxRequest.pageId` |
| `experience.target.pageDetails.pageScore` | `mboxRequest.mboxPageValue` |
| `experience.target.activities` | List (array) of activities the visitor has qualified for |
| `experience.target.activities[i].activityID` | The ID of any given activity the visitor qualified for |
| `experience.target.activities[i].version` | The version of any given activity the visitor qualified for |
| `experience.target.activities[i].activityEvents` | Includes the details of activity events the user has hit with this event. |
| **`device`** |
| `device.typeIDService` | `XDMDevice.Device.TypeIDService.typeIDService_deviceatlas` |
| `device.type` | One of the following properties of `deviceAtlas` (or NULL): <ul><li>`type_mobile`</li><li>`type_tablet`</li><li>`type_desktop`</li><li>`type_ereader`</li><li>`type_television`</li><li>`type_settop`</li><li>`type_mediaplayer`</li></ul> |
| `device.typeID` | (empty string) |
| `device.manufacturer` | `deviceAtlas.manufacturer` |
| `device.model` | `deviceAtlas.model` |
| `device.modelNumber` | (empty string) |
| `device.screenHeight` | `deviceAtlas.displayHeight` |
| `device.screenWidth` | `deviceAtlas.displayWidth` |
| `device.colorDepth` | `deviceAtlas.displayColorDepth` |
| **`placeContext`** |
| `placeContext.geo.id` | Random UUID (mandatory) |
| `placeContext.geo.city` | City name resolved based on the request's IP address. |
| `placeContext.geo.countryCode` | Country code resolved based on the request's IP address. |
| `placeContext.geo.dmaId` | Designated Market Area code resolved based on the request's IP address. |
| `placeContext.geo.postalCode` | Postal code resolved based on the request's IP address. |
| `placeContext.geo.stateProvince` | State or province resolved based on the request's IP address. |
| `placeContext.localTime` | `mboxRequest.offsetTime` + `mboxRequest.currentServerTime` |
| **`commerce`** | | Set only if order details are present in the request. |
| `commerce.order.priceTotal` | `mboxRequest.orderTotal` |
| `commerce.order.purchaseOrderNumber` | `mboxRequest.orderId` |
| `commerce.order.purchaseID` | `mboxRequest.orderId` |
| **`web`** |
| `web.withWebPageDetails.url` | `mboxURL.context.address.url` |
| `web.webReferrer.url` | `mboxReferrer.context.address.url` |
| **`identityMap`** |
| `identityMap.TNTID` | `tntId.mboxPC` |
| `identityMap.ECID` | `marketingCloudVisitorId` |

{style="table-layout:auto"}

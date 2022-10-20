---
keywords: Experience Platform;home;popular topics;
title: Create an Adobe Workfront source connection in the UI
description: 
---
# Create an Adobe Workfront source connection in the UI

This tutorial provides steps for creating an Adobe Workfront source connection in the UI to bring Adobe Workfront data into Adobe Experience Platform.

## Getting started

>[!IMPORTANT]
>
>You must be configured as an administrator in the Adobe Admin Console to access the Workfront source.

This tutorial requires a working understanding of the following components of Experience Platform:

* [Experience Data Model (XDM) System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
* [Real-time Customer Profile](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

## Create a Workfront source connection in the UI

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources that you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. You can also use the search bar to narrow down the displayed sources.

Under the **[!UICONTROL Adobe applications]** category, select **[!UICONTROL Adobe Workfront]** and then select **[!UICONTROL Add data]**.

![The sources catalog with the Adobe Workfront source highlighted.]

## Select data

## Provide dataflow details

## Review

## Appendix

### Workfront Change Event Schema

Workfront data in Platform is represented as time-series record data, where each row in the data has a timestamp displaying when the event occurred and the attributes that are related to that event.

During setup, a schema named Workfront Change Events from Flow is created. 

| Schema field | Description |
| --- | --- |
| `timestamp` |
| `_workfront.objectType` |
| `_workfront.objectID` |
| `_workfront.created` |
| `_workfront.deleted` |
| `_worfkront.updated` |
| `_workfront.completed` |
| `_workfront.parentObjectType` |
| `_workfront.parentID` |
| `_workfront.customData` |
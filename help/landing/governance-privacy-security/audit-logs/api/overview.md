---
title: Audit Query API Guide
description: Audit Query is a RESTful API that allows developers to see who did what actions in Adobe Experience Platform.
exl-id: 9ed291c6-ff8b-4d9b-9fed-d1e3fa8f92fb
---
# [!DNL Audit Query] API guide

The [!DNL Audit Query] API provides endpoints that allows you to programmatically retrieve and monitor event data for various Adobe Experience Platform features. The endpoints are outlined below. Please visit the [getting started guide](./getting-started.md) for important information on required headers, reading sample API calls, and more.

To view all available endpoints and CRUD operations, visit the [[!DNL Audit Query] API swagger](https://www.adobe.io/experience-platform-apis/references/audit-query/).

## Events

Audit events provide insights on user actions in Platform, including the action type, date and time, the email ID of the user who performed the action, and additional attributes relevant to the action type for various features in Adobe Experience Platform. To learn how to retrieve metrics using the API, see the [events endpoint guide](./events.md).

## Export

Audit export allows you to retrieve events data by specifying the events you wish to retrieve in the payload. To learn how to retrieve metrics using the API, see the [export endpoint guide](./export.md).

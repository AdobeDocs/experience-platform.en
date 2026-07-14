---
title: Audit Query API Guide
description: Audit Query is a RESTful API that allows developers to see who did what actions in Adobe Experience Platform.
role: Developer
feature: Audits, API
exl-id: 9ed291c6-ff8b-4d9b-9fed-d1e3fa8f92fb
TQID: https://experienceleague.adobe.com/vLh0ElepKDmpAAhvlc3e5XvBSgvjqfkdGqI3ELKgZkg
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# [!DNL Audit Query] API guide

The [!DNL Audit Query] API provides endpoints that allows you to programmatically retrieve and monitor event data for various Adobe Experience Platform features. The endpoints are outlined below. Please visit the [getting started guide](./getting-started.md) for important information on required headers, reading sample API calls, and more.

To view all available endpoints and CRUD operations, visit the [[!DNL Audit Query] API swagger](https://www.adobe.io/experience-platform-apis/references/audit-query/).

## Events

Audit events provide insights on user actions in Experience Platform, including the action type, date and time, the email ID of the user who performed the action, and additional attributes relevant to the action type for various features in Adobe Experience Platform. To learn how to retrieve metrics using the API, see the [events endpoint guide](./events.md).

## Export

Audit export allows you to retrieve events data by specifying the events you wish to retrieve in the payload. To learn how to retrieve metrics using the API, see the [export endpoint guide](./export.md).

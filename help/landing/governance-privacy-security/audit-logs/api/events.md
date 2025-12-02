---
title: Audit events API Endpoint
description: Learn how to retrieve audit events in Experience Platform using the Audit Query API.
role: Developer
feature: Audits, API
exl-id: c365b6d8-0432-41a5-9a07-44a995f69b7d
---
# Audit events endpoint

Audit logs are used to provide details of user activity for various services and capabilities. Each action recorded in a log contains metadata that indicates the action type, date and time, the email ID of the user who performed the action, and additional attributes relevant to the action type. The `/audit/events` endpoint in the [!DNL Audit Query] API allows you to programmatically retrieve event data for your organization's activity in [!DNL Experience Platform].

## Getting started

The API endpoint used in this guide is part of the [[!DNL Audit Query] API](https://developer.adobe.com/experience-platform-apis/references/audit-query/). Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any [!DNL Experience Platform] API.

## List audit events

You can retrieve events data by making a GET request to the `/audit/events` endpoint, specifying the events you wish to retrieve in the payload.

**API format**

```http
GET /audit/events
```

The [!DNL Audit Query] API supports the use of query parameters to page and filter results when listing events.

| Parameter | Description |
| --- | --- |
| `limit` | The maximum number of records to be returned in the response. The default `limit` is 50. |
| `start` | A pointer to the first item for the returned search results. To access the next page of results, this parameter should increment by the same amount indicated by limit. Example: To access the next page of results for a request with limit=50, use the parameter start=50, then start=100 for the page after that, and so on. |
| `queryId` | When making a query to the /audit/events endpoint, the response includes a queryId string property. To make the same query in a separate call, you can include the Id value as a single query parameter instead of manually configuring the search parameters again. |

**Request**

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/audit/events?limit=10
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'x-request-id: {TRACING_ID}' \
```

**Response**

A successful response returns the resulting datapoints for the metrics and filters specified in the request.

```json
{
  "_embedded": {
    "events": [
      {
        "id": "6ecc125d-da03-4882-a944-88c707ddc3f7",
        "requestId": "5YGdpTX5PvRrdqCfrCT8p8lWphZPzxl8",
        "permissionResource": "Dataset",
        "permissionType": "WRITE",
        "assetType": "Dataset",
        "action": "Create",
        "status": "Allow",
        "failureCode": "",
        "timestamp": "2025-06-24T16:50:28.318+0000",
        "version": "1.0",
        "imsOrgId": "{ORGANIZATION_ID}",
        "region": "VA7",
        "authId": "e6b46821-e2b4-4729-952f-2e4afd713b31",
        "assetId": "685ad754fb1abe2b263df4b3",
        "assetName": "my-dataset",
        "sandboxName": "prod",
        "sandboxId": "{SANDBOX_ID}",
        "userEmail": "{USER_EMAIL}",
        "userIpAddresses": [
          "130.*.*.*",
          "10.*.*.*"
        ],
        "enhancedEvents": [
          {
            "id": "0ee91e42-ac46-4f35-a01a-f74a1569c404",
            "requestId": "5YGdpTX5PvRrdqCfrCT8p8lWphZPzxl8",
            "permissionResource": "Dataset",
            "permissionType": "Write",
            "assetType": "Dataset",
            "action": "Create",
            "status": "Success",
            "failureCode": "",
            "timestamp": "2025-06-24T16:50:28.883+0000",
            "assetId": "685ad754fb1abe2b263df4b3",
            "assetName": "my-dataset"
          }
        ]
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://platform.adobe.io/data/foundation/audit/events?property=user%253D%253Ddraghici%2540adobe.com"
    },
    "page": {
      "href": "https://platform.adobe.io/data/foundation/audit/events?queryId=b3JkZXJCeVJ1bGVzPSZwcm9wZXJ0eT11c2VyPT1kcmFnaGljaUBhZG9iZS5jb20mdGltZXN0YW1wSW5kZXg9MTc1MDc4MzgyODMxOCZ0b3RhbEVsZW1lbnRzPTE3&limit=50{&start}",
      "templated": true
    }
  },
  "page": {
    "size": 1,
    "totalElements": 1,
    "totalPages": 1,
    "number": 1
  },
  "queryId": "b3JkZXJCeVJ1bGVzPSZwcm9wZXJ0eT11c2VyPT1kcmFnaGljaUBhZG9iZS5jb20mdGltZXN0YW1wSW5kZXg9MTc1MDc4MzgyODMxOCZ0b3RhbEVsZW1lbnRzPTE3"
}
```

| Property | Description |
| --- | --- |
| `events` | An array whose objects represent each of the events specified in the request. Each object contains information about the filter configuration and returned event data. |
| `userEmail` | The email of the user who performed the event. |
| `eventType` | The type of event. The types of events include `Core` and `Enhanced`.|
| `imsOrgId` | The ID of the organization that the event took place under. |
| `permissionResource` | The product or capability that provided the permission perform the action. A resource can be any of the following: <ul><li>`Activation` </li><li>`ActivationAssociation` </li><li>`AnalyticSource` </li><li>`AudienceManagerSource` </li><li>`BizibleSource` </li><li>`CustomerAttributeSource` </li><li>`Dataset` </li><li>`EnterpriseSource` </li><li>`LaunchSource` </li><li>`MarketoSource` </li><li>`ProductProfile` </li><li>`ProfileConfig` </li><li>`Sandbox` </li><li>`Schema` </li><li>`Segment` </li><li>`StreamingSource` </li></ul> |
| `permissionType` | The permission type involved with the action. |
| `assetType` | The type of Experience Platform resource that the action was performed on. |
| `assetId` | A unique identifier for the Experience Platform resource that the action was performed on. |
| `assetName` | The name of the Experience Platform resource that the action was performed on. |
| `action` | The type of action that was recorded for the event. An action can be any of the following: <ul><li>`Add` </li><li>`Create` </li><li>`Dataset activate` </li><li>`Dataset remove` </li><li>`Delete` </li><li>`Disable for profile` </li><li>`Enable` </li><li>`Enable for profile` </li><li>`Profile activate` </li><li>`Profile remove` </li><li>`remove` </li><li>`reset` </li><li>`segment activate` </li><li>`segment remove` </li><li>`update` </li></ul> |
| `status` | The status of the action. A status can be any of the following: </li><li>`Allow` </li><li>`Deny` </li><li>`Failure` </li><li>`Success` </li></ul> |

{style="table-layout:auto"}

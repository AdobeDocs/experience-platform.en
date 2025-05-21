---
keywords: Experience Platform;home;popular topics;effective policies;access control api
solution: Experience Platform
title: Effective Policies API Endpoint
description: Learn how to view effective access policies using the Access Control API for Adobe Experience Platform.
role: Developer
exl-id: 555d73db-115d-4f4c-8bd2-b91477799591
---
# Effective policies endpoint

>[!NOTE]
>
>If a user token is being passed, then the user of the token must have an "org admin" role for the requested org.

To view effective access control policies for the current user, make a POST request to the `/acl/effective-policies` endpoint in the [!DNL Access Control] API. The permissions and resource types you want to retrieve must be provided in the request payload in the form of an array. This is demonstrated in the example API call below.

**API format**

```http
POST /acl/effective-policies
```

**Request**

The following requests retrieves information about the "[!UICONTROL Manage Datasets]" permission and access to the "[!UICONTROL schemas]" resource type for the current user.

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/access-control/acl/effective-policies \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '[
    "/permissions/manage-datasets",
    "/resource-types/schemas"
  ]'
```

>[!NOTE]
>
>For a complete list of permissions and resource types that can be provided in the payload array, see the appendix section on [accepted permissions and resource types](#accepted-permissions-and-resource-types).

**Response**

A successful response returns information about the permissions and resource types provided in the request. The response includes the active permissions the current user has for the resource types specified in the request. If any permissions included in the request payload are active for the current user, the API returns returns the permission with an astrisk (`*`) to indicate the permission is active. Any permissions provided in the request that are not active for the user are omitted from the response payload.

```json
{
    "policies": {
        "/resource-types/schemas": [
            "read",
            "write",
            "delete"
        ],
        "/permissions/manage-datasets": [
            "*"
        ]
    }
}
```

## Next steps

This document covered how to make calls to the [!DNL Access Control] API to return information on active permissions and related access policies for resource types. For more information about access control for [!DNL Experience Platform], see the [access control overview](../home.md).

## Appendix

This section provides supplemental information for using the [!DNL Access Control] API.

### Accepted permissions and resource types

The following is a list of permissions and resource types you can include in the payload of a POST request to the `/acl/active-permissions` endpoint.

**Permissions**

```plaintext
permissions/activate-destinations
permissions/evaluate-segments
permissions/execute-decisioning-activities
permissions/export-audience-for-segment
permissions/manage-datasets
permissions/manage-decisioning-activities
permissions/manage-decisioning-options
permissions/manage-destinations
permissions/manage-dsw
permissions/manage-dule-labels
permissions/manage-dule-policies
permissions/manage-identity-namespaces
permissions/manage-privacy-workflows
permissions/manage-profile-configs
permissions/manage-profiles
permissions/manage-queries
permissions/manage-schemas
permissions/manage-segments
permissions/manage-sources
permissions/reset-sandboxes
permissions/view-datasets
permissions/view-destinations
permissions/view-dule-labels
permissions/view-dule-policies
permissions/view-identity-namespaces
permissions/view-monitoring-dashboard
permissions/view-privacy-workflows
permissions/view-profile-configs
permissions/view-profiles
permissions/view-sandboxes
permissions/view-schemas
permissions/view-segments
permissions/view-sources
```

**Resource types**

```plaintext
resource-types/activation-associations
resource-types/activations
resource-types/activities
resource-types/analytics-source
resource-types/audience-manager-source
resource-types/bizible-source
resource-types/connection
resource-types/customer-attributes-source
resource-types/data-science-workspace
resource-types/dataset-preview
resource-types/datasets
resource-types/dule-label
resource-types/dule-policy
resource-types/enterprise-source
resource-types/identity-descriptor
resource-types/identity-namespaces
resource-types/launch-source
resource-types/marketing-action
resource-types/marketo-source
resource-types/monitoring
resource-types/offers
resource-types/placements
resource-types/privacy-consent
resource-types/privacy-content-delivery
resource-types/privacy-job
resource-types/profile-configs
resource-types/profile-datasets
resource-types/profiles
resource-types/query
resource-types/relationship-descriptor
resource-types/sandboxes
resource-types/schemas
resource-types/segment-jobs
resource-types/segments
resource-types/streaming-source
```

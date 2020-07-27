---
keywords: Experience Platform;home;popular topics;effective policies;access control api
solution: Experience Platform
title: View effective policies
topic: developer guide
description: Access control in Adobe Experience Platform allows you to manage roles and permissions for various Platform capabilities by using the Adobe Admin Console. This document serves as a guide for how to view effective policies using the access control API for Adobe Experience Platform.
---

# View effective policies

To view effective policies for the current user, make a POST request to the `/acl/effective-policies` endpoint in the [!DNL Access Control] API. The permissions and resource types you want to retrieve must be provided in the request payload in the form of an array. This is demonstrated in the example API call below.

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
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
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

This document covered how to make calls to the [!DNL Access Control] API to return information on active permissions and related policies for resource types. For more information about access control for [!DNL Experience Platform], see the [access control overview](../home.md).

## Appendix

This section provides supplemental information for using the [!DNL Access Control] API.

### Accepted permissions and resource types

The following is a list of permissions and resource types you can include in the payload of a POST request to the `/acl/active-permissions` endpoint.

**Permissions**

```plaintext
"permissions/activate-destinations"
"permissions/export-audience-for-segments"
"permissions/manage-datasets"
"permissions/manage-destinations"
"permissions/manage-identity-namespaces"
"permissions/manage-profiles"
"permissions/manage-sandboxes"
"permissions/manage-schemas"
"permissions/reset-sandboxes"
"permissions/view-datasets"
"permissions/view-destinations"
"permissions/view-identity-namespaces"
"permissions/view-monitoring-dashboard"
"permissions/view-profiles"
"permissions/view-sandboxes"
"permissions/view-schemas"
```

**Resource types**

```plaintext
"resource-types/classes"
"resource-types/connections"
"resource-types/data-types"
"resource-types/dataset-data"
"resource-types/datasets"
"resource-types/destinations"
"resource-types/dule-labels"
"resource-types/identity-descriptors"
"resource-types/identity-namespaces"
"resource-types/mixins"
"resource-types/monitoring"
"resource-types/profile-configs
"resource-types/profile-datasets"
"resource-types/profiles"
"resource-types/relationship-descriptors"
"resource-types/reset-sandboxes"
"resource-types/sandboxes"
"resource-types/schemas"
"resource-types/segment-jobs"
"resource-types/segments"
```
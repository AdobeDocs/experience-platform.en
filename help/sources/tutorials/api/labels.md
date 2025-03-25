---
title: Apply access labels to manage user access to sources dataflows using the API
description: Learn how to use use the Flow Service API to apply access labels and manage user access to your sources dataflows.
hide: true
hidefromtoc: true
exl-id: 572d6838-3e4c-4fd5-89fa-32cad6280325
---
# Apply access labels to manage user access to sources dataflows using the API

You can use the functionalities provided by [attribute-based access control](../../../access-control/abac/overview.md) in Real-Time CDP to apply labels to your sources dataflows. With this feature, you can ensure that only a subset of users in your organization get access to specific sources dataflows.

When you add an access label to a particular dataflow, only users who have access to a role that is assigned that label are able to view and edit that dataflow. If a sources dataflow is not marked with any labels, it is visible to all users belonging to your organization. For example, if you apply the C12 label to a dataflow, users assigned to a role that does not have the C12 label, will not be able to view and edit the dataflow with the C12 label.

Read this guide for information on how to apply access labels to your sources dataflows using the [[!DNL Flow Service] API](https://developer.adobe.com/experience-platform-apis/references/flow-service/).

## Get started

Before working with access control labels, ensure that you first familiarize yourself with the capabilities of attribute-based access control. For more information, read the following documentation:

* [Attribute-based access control overview](../../../access-control/abac/overview.md)
* [Attribute-based access control end-to-end guide](../../../access-control/abac/end-to-end-guide.md)
* [Attribute-based access control API guide](../../../access-control/abac/api/overview.md)
* [Data usage labels glossary](../../../data-governance/labels/reference.md)

## Apply access labels to sources dataflows

>[!NOTE]
>
>* You cannot apply labels to a flow run. However, flow runs inherit any labels that you apply to the parent dataflow.
>
>* If you do not have view access to a dataflow, then you will also be unable to view it's corresponding flow runs.

To add a label to a dataflow, make a PATCH request to the `/flows` endpoint and provide the ID of dataflow that you want to update.

**API format**

```http
PATCH /flows/{FLOW_ID}
```

| Parameter | Description |
| --- | --- |
| `{FLOW_ID}` | The ID of the dataflow that you want to update. |

**Request**

>[!TIP]
>
>To make a PATCH request, provide the version/etag of the dataflow that you want to update as an `if-match` header parameter.

The following request adds the C12 label to the dataflow with ID: `84224def-1e2a-4d95-9ea2-132d697ed2aa`.

```shell
curl -X PATCH \
  'https://platform.adobe.io/data/foundation/flowservice/flows/84224def-1e2a-4d95-9ea2-132d697ed2aa' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'Content-Type: application/json' \
  -H 'if-match: "c5002e0e-0000-0200-0000-67a3c3b70000"'
  -d '[
    {
        "op": "add",
        "path": "/labels",
        "value": ["core/C12"]
    }
]'
```

| Property | Description |
| --- | --- |
| `op` | The operation call used to define the action needed to update the dataflow. Operations include: `add`, `replace`, and `remove`. |
| `path` | The part of the dataflow to be updated. |
| `value` | The new value that you want to update your property with. |



**Response**

A successful response returns your flow ID and an updated etag. You can verify the update by making a GET request to the [!DNL Flow Service] API, while providing your flow ID.

```json
{
    "id": "84224def-1e2a-4d95-9ea2-132d697ed2aa",
    "etag": "\"50014cc8-0000-0200-0000-6036eb720000\""
}
```

Once you have successfully configured access labels to your dataflow, any user that does not have access to that label will no longer be able to retrieve the dataflow. For example, if a user who is not provisioned with the C12 label makes a GET request to retrieve dataflow with ID: `84224def-1e2a-4d95-9ea2-132d697ed2aa`, they will receive the following response:

```json

{
    "type": "https://ns.adobe.com/aep/errors/FLOW-1439-404",
    "title": "Resource not found",
    "status": 404,
    "report": {
        "detailed-message": "The requested flows resource 84224def-1e2a-4d95-9ea2-132d697ed2aa is not found. Verify the resource ID before trying again.",
        "id": "84224def-1e2a-4d95-9ea2-132d697ed2aa",
        "request-id": "{REQUEST_ID}",
        "type": "flows"
    },
    "errorMessage": "The requested flows resource 84224def-1e2a-4d95-9ea2-132d697ed2aa is not found. Verify the resource ID before trying again.",
    "errorDetails": "The requested flows resource 84224def-1e2a-4d95-9ea2-132d697ed2aa is not found. Verify the resource ID before trying again."
}
```

Similarly, users without access to the C12 label will be unable to make any PATCH or DELETE requests against the updated dataflow and will receive the following response:

```json
{
    "type": "https://ns.adobe.com/aep/errors/FLOW-2120-403",
    "title": "Forbidden",
    "status": 403,
    "report": {
        "detailed-message": "You do not have sufficient permissions to perform the operation. Please contact your administrator to resolve permissions and try again.",
        "request-id": "{REQUEST_ID}"
    },
    "errorMessage": "You do not have sufficient permissions to perform the operation. Please contact your administrator to resolve permissions and try again.",
    "errorDetails": "You do not have sufficient permissions to perform the operation. Please contact your administrator to resolve permissions and try again."
}
```

## Next steps

You now know how to apply access labels to your sources dataflows. You can now ensure that only a specific group of users in your organization can access certain sources dataflows. Read the following documentation for additional information:

* [Apply access labels to sources dataflows in the UI](../ui/labels.md)
* [Access control overview](../../../access-control/home.md)

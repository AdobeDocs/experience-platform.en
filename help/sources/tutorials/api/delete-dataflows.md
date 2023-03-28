---
keywords: Experience Platform;home;popular topics;flow service;API;api;delete;delete dataflows
solution: Experience Platform
title: Delete a Dataflow Using the Flow Service API
type: Tutorial
description: Learn how to delete batch and streaming dataflows using the Flow Service API.
exl-id: ea9040b1-3a40-493d-86f0-27deef09df07
---
# Delete a dataflow using the Flow Service API

You can delete batch and streaming dataflows that contain errors or have become obsolete using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

This tutorial covers the steps for deleting dataflows made with both batch and streaming sources using [!DNL Flow Service].

## Getting started

This tutorial requires you to have a valid flow ID. If you do not have a valid flow ID, select your connector of choice from the [sources overview](../../home.md) and follow the steps outlined before attempting this tutorial.

This tutorial also requires you to have a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../landing/api-guide.md).

## Delete a dataflow

With an existing flow ID, you can delete a dataflow by performing a DELETE request to the [!DNL Flow Service] API.

**API format**

```http
DELETE /flows/{FLOW_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{FLOW_ID}` | The unique `id` value for the dataflow you want to delete. |

**Request**

```shell
curl -X DELETE \
    'https://platform.adobe.io/data/foundation/flowservice/flows/20c115bc-46e3-40f3-bfe9-fb25abe4ba76' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 204 (No Content) and a blank body. You can confirm the deletion by attempting a lookup (GET) request to the dataflow. The API will return an HTTP 404 (Not Found) error, indicating that the dataflow has been deleted.

## Next steps

By following this tutorial, you have successfully used the [!DNL Flow Service] API to to delete an existing dataflow.

For steps on how to perform these operations using the user interface, please refer to the tutorial on [deleting dataflows in the UI](../../tutorials/ui/delete.md)

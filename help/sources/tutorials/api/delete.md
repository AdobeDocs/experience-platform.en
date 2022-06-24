---
keywords: Experience Platform;home;popular topics;flow service;delete accounts;delete;api
solution: Experience Platform
title: Delete an Account Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to delete an account using the Flow Service API.
exl-id: 3d07ab7d-c012-472e-8db4-b19e3936dcba
---
# Delete an account using the Flow Service API

You can delete sources accounts that contain errors or have become obsolete using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

See the following tutorial for steps on how to delete an account using the API.

## Getting started

This tutorial requires you to have a valid connection ID. If you do not have a valid connection ID, select your connector of choice from the [sources overview](../../home.md) and follow the steps outlined before attempting this tutorial.

This tutorial also requires you to have a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../landing/api-guide.md).

## Delete account

>[!TIP]
>
>Before deleting the source account, you must first delete any existing dataflows associated with the source account. To delete existing dataflows, refer to the tutorial on [deleting sources dataflows](./delete-dataflows.md).

To delete an account, make a DELETE request to the [!DNL Flow Service] API while providing the base connection ID that corresponds with the account that you want to delete.

**API format**

```http
DELETE /connections/{BASE_CONNECTION_ID}
```

| Parameter | Description |
| --- | --- |
| `{BASE_CONNECTION_ID}` | The base connection ID of the source account you want to delete. |

**Request**

```shell
curl -X DELETE \
  'https://platform.adobe.io/data/foundation/flowservice/connections/dd3631cd-d0ea-4fea-b631-cdd0ea6fea21' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 204 (No Content) and a blank body.

You can confirm the deletion by attempting a lookup (GET) request to the connection.

## Next steps

By following this tutorial, you have successfully used the [!DNL Flow Service] API to delete existing accounts.

For steps on how to perform these operations using the user interface, please refer to the tutorial on [deleting accounts in the UI](../../tutorials/ui/delete-accounts.md).

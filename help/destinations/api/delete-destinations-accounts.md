---
keywords: Experience Platform;home;popular topics;flow service;delete destination accounts;delete;api
solution: Experience Platform
title: Delete a destination account Using the Flow Service API
type: Tutorial
description: Learn how to delete a destination account using the Flow Service API.
---
# Delete a destination account using the Flow Service API

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

Before activating data, you need to connect to the destination by first setting up a destination account. This tutorial covers the steps to delete destination accounts that are not needed anymore by using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

>[!NOTE]
>
>Deleting destination accounts is currently supported in the Flow Service API only. Destination accounts cannot be deleted using the Experience Platform UI.

## Getting started {#get-started}

This tutorial requires you to have a valid connection ID. The connection ID represents the account connection to the destination. If you do not have a valid connection ID, select your destination of choice from the [destinations catalog](../catalog/overview.md) and follow the steps outlined to [connect to the destination](../ui/connect-destination.md) before attempting this tutorial.

This tutorial also requires you to have a working understanding of the following components of Adobe Experience Platform:

* [Destinations](../home.md): [!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.
* [Sandboxes](../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully delete a destination account using the [!DNL Flow Service] API.

### Reading sample API calls {#reading-sample-api-calls}

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers {#gather-values-for-required-headers}

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

* `Content-Type: application/json`

## Find the connection ID of the destination account that you want to delete {#find-connection-id}

>[!NOTE]
>This tutorial uses an [Airship destination](../catalog/mobile-engagement/airship-attributes.md) as an example, but the steps outlined apply to any of the [available source connectors](../../home.md).

The first step in deleting a destination account is to find out the connection ID that corresponds to the destination account that you want to delete.

In the Experience Platform UI, browse to **[!UICONTROL Destinations]** > **[!UICONTROL Accounts]** and select the account that you want to delete by selecting the number in the **[!UICONTROL Destinations]** column.

![Select destination account to delete](/help/destinations/assets/api/delete-destination-account/select-destination-account.png)

Next, you can retrieve the connection ID of the destination account from the URL in your browser.

![Retrieve connection ID from URL](/help/destinations/assets/api/delete-destination-account/find-connection-id.png)

>[!IMPORTANT]
>
>You will not be able to delete the destination account if any dataflows exist to the destination account.
>To delete existing dataflows, refer to the pages below:
>* [Use the Experience Platform UI](../ui/delete-destinations.md) to delete existing dataflows;
>* [Use the Flow Service API](delete-destinations-dataflows.md) to delete existing dataflows.

<!--

## Look up connection ID {#look-up-connection-id}

The first step in updating your connection information is to retrieve connection details using your connection ID.

**API format**

```http
GET /connections/{CONNECTION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{CONNECTION_ID}` | The unique `id` value for the connection you want to retrieve. |

**Request**

The following request retrieves information regarding your connection ID.

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/connections/c8622ec7-7d94-44a5-a35a-ffcc6bdcc384' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the current details of your connection including its credentials, unique identifier (`id`), and version.

```json
{
    "items": [
        {
            "id": "c8622ec7-7d94-44a5-a35a-ffcc6bdcc384",
            "createdAt": 1640103419202,
            "updatedAt": 1640104751063,
            "createdBy": "{CREATED_BY}",
            "updatedBy": "{UPDATED_BY}",
            "createdClient": "{CREATED_CLIENT}",
            "updatedClient": "{UPDATED_CLIENT}",
            "sandboxId": "{SANDBOX_ID}",
            "sandboxName": "{SANDBOX_NAME}",
            "imsOrgId": "{IMS_ORG}",
            "name": "Airship Attributes",
            "description": "test account connection to Airship Attributes destination",
            "connectionSpec": {
                "id": "34cd3131-b208-474b-b779-b487b5a2bd01",
                "version": "1.0"
            },
            "state": "enabled",
            "auth": {
                "specName": "Bearer Token",
                "params": {
                    "authorizedDate": "2021-12-21",
                    "token": "xxxx"
                }
            },
            "version": "\"8c01091c-0000-0200-0000-61c2032f0000\"",
            "etag": "\"8c01091c-0000-0200-0000-61c2032f0000\""
        }
    ]
}
```

-->

## Delete connection

Once you have an existing connection ID, perform a DELETE request to the [!DNL Flow Service] API.

Make sure that there are no existing dataflows to the destination with the connection ID you are attempting to delete, otherwise you will not be able to delete the destination account.

**API format**

```http
DELETE /connections/{CONNECTION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{CONNECTION_ID}` | The unique `id` value for the connection you want to delete. |

**Request**

```shell
curl -X DELETE \
    'https://platform.adobe.io/data/foundation/flowservice/connections/c8622ec7-7d94-44a5-a35a-ffcc6bdcc384' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 204 (No Content) and a blank body.

You can confirm the deletion by attempting a lookup (GET) request to the connection.

## Next steps

By following this tutorial, you have successfully used the [!DNL Flow Service] API to delete existing destination accounts.

For steps on how to perform these operations using the user interface, please refer to the tutorial on [deleting accounts in the UI](../../tutorials/ui/delete-accounts.md)

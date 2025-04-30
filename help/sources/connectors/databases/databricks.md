---
title: Azure Databricks
description: Learn about the prerequisite steps needed in order to connect Azure Databricks to Experience Platform.
last-substantial-update: 2023-04-29
exl-id: 2f082898-aa0e-47a1-a4bf-077c21afdfee
---
# [!DNL Azure Databricks]

[!DNL Azure Databricks] is a cloud-based platform designed for data analytics, machine learning, and AI. You can use [!DNL Databricks] to integrate with [!DNL Azure] and provide a holistic environment for building, deploying, and managing data solutions at scale.

You can use the [!DNL Databricks] source to connect your account and ingest your [!DNL Databricks] data to Adobe Experience Platform.

## Prerequisites

Complete the prerequisite steps to successfully connect your [!DNL Databricks] account to Experience Platform.

### Retrieve your container credentials

Retrieve your Experience Platform [!DNL Azure Blob Storage] credentials to enable your [!DNL Databricks] account to access it later.

To retrieve your credentials, make a GET request to the `/credentials` endpoint of the [!DNL Connectors] API.

**API format**

```http
GET /data/foundation/connectors/landingzone/credentials?type=dlz_databricks_source
```

**Request**

The following request retrieves the credentials for your Experience Platform [!DNL Azure Blob Storage].

+++View request example

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/connectors/landingzone/credentials?type=dlz_databricks_source' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
```

+++

**Response**

A successful response provides your credentials (`containerName`, `SASToken`, `storageAccountName`) for later use in [!DNL Apache Spark] configuration for [!DNL Databricks].

+++View response example

```json
{
    "containerName": "dlz-databricks-container",
    "SASToken": "sv=2020-10-02&si=dlz-b1f4060b-6bbd-4043-9bd9-a5f5be72de30&sr=c&sp=racwdlm&sig=zVQfmuElZJzOKkUk8z5lChrJ3YQUE2h6EShDZOsVeMc%3D",
    "storageAccountName": "sndbxdtlndga8m7ajbvgc64k",
    "SASUri": "https://sndbxdtlndga8m7ajbvgc64k.blob.core.windows.net/dlz-databricks-container?sv=2020-10-02&si=dlz-b1f4060b-6bbd-4043-9bd9-a5f5be72de30&sr=c&sp=racwdlm&sig=zVQfmuElZJzOKkUk8z5lChrJ3YQUE2h6EShDZOsVeMc%3D",
    "expiryDate": "2025-07-05"
}
```

| Property | Description |
| --- | --- |
| `containerName` | The name of your [!DNL Azure Blob Storage] container. You will use this value later when completing your [!DNL Apache Spark] configuration for [!DNL Databricks]. |
| `SASToken` | The shared access signature token for your [!DNL Azure Blob Storage]. This string contains all of the information necessary to authorize a request. |
| `storageAccountName` | The name of your storage account. |
| `SASUri` | The shared access signature URI for your [!DNL Azure Blob Storage]. This string is a combination of the URI to the [!DNL Azure Blob Storage] for which you are being authenticated to and its corresponding SAS token. |
| `expiryDate` | The date when your SAS token will expire. You must refresh your token before the expiry date in order to continue using it in your application for uploading data to the [!DNL Azure Blob Storage]. If you do not manually refresh your token before the stated expiry date, then it will automatically refresh and provide a new token when the GET credentials call is performed. |

+++

### Refresh your credentials

>[!NOTE]
>
>Your existing credentials will be revoked once you refresh your credentials. Therefore, you must update you [!DNL Spark] configurations accordingly whenever you refresh your storage credentials. Otherwise, your dataflow will fail.

To refresh your credentials, make a POST request and include `action=refresh` as a query parameter.

**API format**

```http
GET /data/foundation/connectors/landingzone/credentials?type=dlz_databricks_source&action=refresh
```

**Request**

The following request refreshes the credentials for your [!DNL Azure Blob Storage].

+++View request example

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/connectors/landingzone/credentials?type=dlz_databricks_source&action=refresh' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
```

+++

**Response**

A successful response returns your new credentials.

+++View response example

```json
{
    "containerName": "dlz-databricks-container",
    "SASToken": "sv=2020-10-02&si=dlz-6e17e5d6-de18-4efc-88c7-45f37d242617&sr=c&sp=racwdlm&sig=wvA4K3fcEmqAA%2FPvcMhB%2FA8y8RLwVJ7zhdWbxvT1uFM%3D",
    "storageAccountName": "sndbxdtlndga8m7ajbvgc64k",
    "SASUri": "https://sndbxdtlndga8m7ajbvgc64k.blob.core.windows.net/dlz-databricks-container?sv=2020-10-02&si=dlz-6e17e5d6-de18-4efc-88c7-45f37d242617&sr=c&sp=racwdlm&sig=wvA4K3fcEmqAA%2FPvcMhB%2FA8y8RLwVJ7zhdWbxvT1uFM%3D",
    "expiryDate": "2025-07-20"
}
```

+++

### Configure access to your [!DNL Azure Blob Storage]

>[!IMPORTANT]
>
>* If your cluster has been terminated, the service will automatically restart it during a flow run. However, you must ensure that your cluster is active when creating a connection or a dataflow. Additionally, your cluster must be active if you are performing actions like data preview or exploration as these actions cannot prompt the automatic restart of a terminated cluster.
>
>* Your [!DNL Azure] container includes a folder named `adobe-managed-staging`. To ensure the seamless ingestion of data, **do not** modify this folder.


Next, you must ensure that your [!DNL Databricks] cluster has access to the Experience Platform [!DNL Azure Blob Storage] account. In doing so, you can use [!DNL Azure Blob Storage] as an interim location for writing [!DNL delta lake] table data.

To provide access, you must configure an SAS token on the [!DNL Databricks] cluster as part of your [!DNL Apache Spark] configuration.

In your [!DNL Databricks] interface, select **[!DNL Advanced options]** and then input the following in the [!DNL Spark config] input box.

```shell
fs.azure.sas.{CONTAINER_NAME}.{STORAGE-ACCOUNT}.blob.core.windows.net {SAS-TOKEN}
```

| Property | Description |
| --- | --- |
| Container name | The name of your container. You can obtain this value by retrieving your [!DNL Azure Blob Storage] credentials. |
| Storage account | The name of your storage account. You can obtain this value by retrieving your [!DNL Azure Blob Storage] credentials. |
| SAS token | The shared access signature token for your [!DNL Azure Blob Storage]. You can obtain this value by retrieving your [!DNL Azure Blob Storage] credentials. |

![The Databricks UI on Azure.](../../images/tutorials/create/databricks/databricks-ui.png)

## Connect [!DNL Databricks] to Experience Platform using APIs

Now that you have completed the prerequisite steps, you can now proceed to the guide on [connecting your [!DNL Databricks] account to Experience Platform using the API](../../tutorials/api/create/databases/databricks.md).

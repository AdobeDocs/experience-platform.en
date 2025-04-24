---
title: Azure Databricks
description: Learn about the prerequisite steps needed in order to connect Azure Databricks to Experience Platform.
---
# [!DNL Azure Databricks]

[!DNL Azure Databricks] is a cloud-based platform designed for data analytics, machine learning, and AI. You can use [!DNL Databricks] to integrate with [!DNL Azure] and provide a holistic environment for building, deploying, and managing data solutions at scale.

You can use the [!DNL Databricks] source to connect your account and ingest your [!DNL Databricks] data to Adobe Experience Platform.

## Prerequisites

Before you can connect your [!DNL Databricks] account to Experience Platform, you must first complete a set of prerequisite steps to ensure that you can successfully connect your [!DNL Databricks] account to Experience Platform.

### Retrieve your container credentials

First, you must use the [!DNL Data Landing Zone] to retrieve your [!DNL Azure Blob Storage] credentials. You will use these credentials in a later step to allow your [!DNL Databricks] account to access your [!DNL Azure Blob Storage].

To retrieve your credentials, make a GET request to the `/credentials` endpoint of the [!DNL Connectors] API.

**API format**

```http
GET /data/foundation/connectors/landingzone/credentials?type=dlz_databricks_source
```

**Request**

The following request retrieves the credentials for your [!DNL Data Landing Zone].

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

A successful response returns your credentials. Values for `containerName`, `SASToken`, and `storageAccountName` will be used in a later step when completing your [!DNL Apache Spark] configuration for [!DNL Databricks].

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
| `containerName` | The name of your [!DNL Data Landing Zone] container. You will use this value later when completing your [!DNL Apache Spark] configuration for [!DNL Databricks]. |
| `SASToken` | The shared access signature token for your [!DNL Data Landing Zone]. This string contains all of the information necessary to authorize a request. |
| `storageAccountName` | The name of your storage account. |
| `SASUri` | The shared access signature URI for your [!DNL Data Landing Zone]. This string is a combination of the URI to the [!DNL Data Landing Zone] for which you are being authenticated to and its corresponding SAS token. |
| `expiryDate` | The date when your SAS token will expire. You must refresh your token before the expiry date in order to continue using it in your application for uploading data to the [!DNL Data Landing Zone]. If you do not manually refresh your token before the stated expiry date, then it will automatically refresh and provide a new token when the GET credentials call is performed. |

+++

### Refresh your credentials

To refresh your credentials, make a POST request and include `action=refresh` as a query parameter.

**API format**

```http
GET /data/foundation/connectors/landingzone/credentials?type=dlz_databricks_source&action=refresh
```

**Request**

The following request refreshes the credentials for your [!DNL Data Landing Zone].

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

Next, you must ensure that your [!DNL Databricks] cluster has access to the Experience Platform [!DNL Azure Blob Storage] account. In doing so, you can use [!DNL Azure Blob Storage] as an interim location for writing [!DNL delta lake] table data.

To provide access, you must configure an SAS token on the [!DNL Databricks] cluster as part of your [!DNL Apache Spark] configuration.

In your [!DNL Databricks] interface, select **[!DNL Advanced options]** and then input the following in the [!DNL Spark config] input box.

```shell
fs.azure.sas.{CONTAINER_NAME}.{STORAGE-ACCOUNT}.blob.core.windows.net {SAS-TOKEN}
```

| Property | Description |
| --- | --- |
| Container name | The name of your container. You can obtain this value by retrieving your [!DNL Data Landing Zone] credentials. |
| Storage account | The name of your storage account. You can obtain this value by retrieving your [!DNL Data Landing Zone] credentials. |
| SAS token | The shared access signature token for your [!DNL Data Landing Zone]. You can obtain this value by retrieving your [!DNL Data Landing Zone] credentials. |

![The Databricks UI on Azure.](../../images/tutorials/create/databricks/databricks-ui.png)

## Connect [!DNL Databricks] to Experience Platform using APIs

Now that you have completed the prerequisite steps, you can now proceed to the guide on [connecting your [!DNL Databricks] account to Experience Platform using the API](../../tutorials/api/create/databases/databricks.md).
---
title: 
description:
---
# [!DNL Azure Databricks]

[!DNL Azure Databricks] is a cloud-based platform designed for data analytics, machine learning, and AI. You can use [!DNL Databricks] to integrate with [!DNL Azure] and provide a holistic environment for building, deploying, and managing data solutions at scale.

## Prerequisites

Before you can connect your [!DNL Azure Databricks] account to Experience Platform, you must first complete a set of prerequisite set up to ensure a successful connection.

### Retrieve credentials for DLZ/Blob

First, you must use the [!DNL Data Landing Zone] to retrieve your [!DNL Azure Blob Storage] credentials. You will use these credentials in a later step to allow your [!DNL Databricks] account to access your [!DNL Azure Blob Storage].

To retrieve your credentials, make a GET request to the `/credentials` endpoint of the [!DNL Connectors] API.

**API format**

```http
GET /data/foundation/connectors/landingzone/credentials?type=dlz_databricks_source
```

**Request**

The following request retrieves the credentials for your [!DNL Data Landing Zone].

+++Select to view example

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

+++Select to view example

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


### Configure access to your [!DNL Azure Blob Storage]

Next, you must ensure that your [!DNL Databricks] cluster has access to the Experience Platform [!DNL Azure Blob Storage] account. In doing so, you can use [!DNL Azure Blob Storage] as an interim location for writing [!DNL delta lake] table data.

To provide access, you must configure an SAS token on the [!DNL Databricks] cluster as part of your [!DNL Apache Spark] configuration.

In your [!DNL Databricks] interface, select **[!DNL Advanced options]** and then input the following in the [!DNL Spark config] input box.

```shell
fs.azure.sas.{CONTAINER_NAME}.{STORAGE-ACCOUNT}.blob.core.windows.net {SAS-TOKEN}
```

| Property | Description |
| --- | --- |
| Container name | 
| Storage account |
| SAS token |
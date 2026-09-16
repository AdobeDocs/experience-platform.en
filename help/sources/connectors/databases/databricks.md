---
title: Databricks
description: Learn about the prerequisite steps needed in order to connect Databricks to Experience Platform.
badgeUltimate: label="Ultimate" type="Positive"
last-substantial-update: 2026-03-14T00:00:00.000Z
exl-id: 2f082898-aa0e-47a1-a4bf-077c21afdfee
TQID: https://experienceleague.adobe.com/VptaHDuBe-Nrreb-kb73ajDcAzEPmV-eERjCpCsyRI0
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: eb30f47f-d87a-400f-8f78-63ce7979ff56
    internal-label: Machine learning
---
# [!DNL Databricks]

>[!AVAILABILITY]
>
>The [!DNL Databricks] source is available in the sources catalog to users who have purchased Real-Time CDP Ultimate.

[!DNL Databricks] is a cloud-based platform designed for data analytics, machine learning, and AI. You can use [!DNL Databricks] to integrate and provide a holistic environment for building, deploying, and managing data solutions at scale.

Use the [!DNL Databricks] source to connect your account and ingest your [!DNL Databricks] data to Adobe Experience Platform.

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
POST /data/foundation/connectors/landingzone/credentials?type=dlz_databricks_source&action=refresh
```

**Request**

The following request refreshes the credentials for your [!DNL Azure Blob Storage].

+++View request example

```shell
curl -X POST \
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

If unprovided, the copy activity in the flow run fails and returns the following error:

```shell
Unable to access container '{CONTAINER_NAME}' in account '{STORAGE_ACCOUNT}.blob.core.windows.net' using anonymous credentials. No credentials found in the configuration. Public access is not permitted on this storage account.
```

### Unity Catalog governance and cluster access mode

The Databricks source connector performs read and write (I/O) operations on your Databricks cluster during ingestion. These operations require Unity Catalog object permissions and, depending on your cluster's access mode, additional cluster-level permissions. Configure both before connecting.

**Grant Unity Catalog permissions**

Grant the following Unity Catalog permissions on the source objects to the identity used by the connection (a service principal):

| Privilege | Object |
| --- | --- |
| `USE CATALOG` | The catalog |
| `USE SCHEMA` | The schema |
| `SELECT` | The source table |

**Configure your cluster's access mode**

Select the access mode used by your Databricks cluster and complete the corresponding configuration.

>[!TIP]
>
>**Dedicated (Single-user) access mode is recommended**. Assign the cluster's single user to the connector's service principal. The connector's I/O operations complete using your Unity Catalog grants alone, so no additional cluster-level permissions are required, and all access remains governed by Unity Catalog.

**Standard (Shared) access mode**

Standard (Shared) access mode enforces Table Access Control. In addition to the Unity Catalog grants above, the connector's I/O operations require the ANY FILE privilege. Grant it to the connector's service principal:

```sql
GRANT SELECT ON ANY FILE TO `{SERVICE_PRINCIPAL}`;
GRANT MODIFY ON ANY FILE TO `{SERVICE_PRINCIPAL}`;
```

>[!IMPORTANT]
>
>`ANY FILE` is a legacy privilege for direct file access and is not governed by Unity Catalog — it has a broader scope than Unity Catalog object permissions, and does not itself grant or bypass access to Unity Catalog objects (Unity Catalog tables still require their own UC grants). Review it with your security team; to avoid granting it, use Dedicated access mode instead.

If the permissions required for your cluster's access mode are not in place, ingestion fails during execution with the following error:

```json
[INSUFFICIENT_PERMISSIONS] ... on any file. SQLSTATE: 42501.
```

## Connect [!DNL Databricks] to Experience Platform 

Now that you have completed the prerequisite steps, you can now proceed and connect your [!DNL Databricks] account to Experience Platform:

* [Connect through the API](../../tutorials/api/create/databases/databricks.md)
* [Connect through the sources workspace in the UI](../../tutorials/ui/create/databases/databricks.md)

---
keywords: Experience Platform;home;popular topics;
solution: Experience Platform
title: Connect Data Landing Zone to Adobe Experience Platform using the Flow Service API
type: Tutorial
description: Learn how to connect Adobe Experience Platform to Data Landing Zone using the Flow Service API.
exl-id: bdb60ed3-7c63-4a69-975a-c6f1508f319e
---
# Connect [!DNL Data Landing Zone] to Adobe Experience Platform using the Flow Service API

[!DNL Data Landing Zone] is a secure, cloud-based file storage facility to bring files into Adobe Experience Platform. Data is automatically deleted from the [!DNL Data Landing Zone] after seven days.

This tutorial walks you through the steps on how to create a [!DNL Data Landing Zone] source connection using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/). This tutorial also provides instructions on how to retrieve your [!DNL Data Landing Zone], as well as view and refresh your credentials.

## Getting started

This guide requires a working understanding of the following components of Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully create a [!DNL Data Landing Zone] source connection using the [!DNL Flow Service] API.

This tutorial also requires you to read the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md) to learn how to authenticate to Platform APIs and interpret the example calls provided in the documentation.

## Retrieve a usable landing zone

The first step in using APIs to access [!DNL Data Landing Zone] is to make a GET request to the `/landingzone` endpoint of the [!DNL Connectors] API while providing `type=user_drop_zone` as part of your request header.

**API format**

```http
GET /connectors/landingzone?type=user_drop_zone
```

| Headers | Description |
| --- | --- |
| `user_drop_zone` |  The `user_drop_zone` type allows the API to distinguish a landing zone container from the other types of containers that are available to you. |

**Request**

The following request retrieves an existing landing zone.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/connectors/landingzone?type=user_drop_zone' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' 
```

**Response**

The following response returns information on a landing zone, including its corresponding `containerName` and `containerTTL`.

```json
{
    "containerName": "dlz-user-container",
    "containerTTL": "7"
}
```

| Property | Description |
| --- | --- |
| `containerName` | The name of the landing zone you retrieved. |
| `containerTTL` | The expiration time (in days) applied to your data within the landing zone. Any within a given landing zone is deleted after seven days. |

## Retrieve [!DNL Data Landing Zone] credentials

To retrieve credentials for a [!DNL Data Landing Zone], make a GET request to the `/credentials` endpoint of the [!DNL Connectors] API.

**API format**

```http
GET /data/foundation/connectors/landingzone/credentials?type=user_drop_zone
```

**Request**

The following request example retrieves credentials for an existing landing zone.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/connectors/landingzone/credentials?type=user_drop_zone' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
```

**Response**

The following response returns the credential information for your landing zone, including your current `SASToken` and `SASUri`, as well as the `storageAccountName` that corresponds to your landing zone container.

```json
{
    "containerName": "dlz-user-container",
    "SASToken": "sv=2020-04-08&si=dlz-ed86a61d-201f-4b50-b10f-a1bf173066fd&sr=c&sp=racwdlm&sig=4yTba8voU3L0wlcLAv9mZLdZ7NlMahbfYYPTMkQ6ZGU%3D",
    "storageAccountName": "dlblobstore99hh25i3dflek",
    "SASUri": "https://dlblobstore99hh25i3dflek.blob.core.windows.net/dlz-user-container?sv=2020-04-08&si=dlz-ed86a61d-201f-4b50-b10f-a1bf173066fd&sr=c&sp=racwdlm&sig=4yTba8voU3L0wlcLAv9mZLdZ7NlMahbfYYPTMkQ6ZGU%3D"
}
```

| Property | Description |
| --- | --- |
| `containerName` | The name of your landing zone. |
| `SASToken` | The shared access signature token for your landing zone. This string contains all of the information necessary to authorize a request. |
| `SASUri` | The shared access signature URI for your landing zone. This string is a combination of the URI to the landing zone for which you are being authenticated to and its corresponding SAS token, |


## Update [!DNL Data Landing Zone] credentials

You can update your `SASToken` by making a POST request to the `/credentials` endpoint of the [!DNL Connectors] API.

**API format**

```http
POST /data/foundation/connectors/landingzone/credentials?type=user_drop_zone&action=refresh
```

| Headers | Description |
| --- | --- |
| `user_drop_zone` |  The `user_drop_zone` type allows the API to distinguish a landing zone container from the other types of containers that are available to you. |
| `refresh` | The `refresh` action allows you to reset your landing zone credentials and automatically generate a new `SASToken`. |

**Request**

The following request updates your landing zone credentials.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/connectors/landingzone/credentials?type=user_drop_zone&action=refresh' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
```

**Response**

The following response returns updated values for your `SASToken` and `SASUri`.

```json
{
    "containerName": "dlz-user-container",
    "SASToken": "sv=2020-04-08&si=dlz-9c4d03b8-a6ff-41be-9dcf-20123e717e99&sr=c&sp=racwdlm&sig=JbRMoDmFHQU4OWOpgrKdbZ1d%2BkvslO35%2FXTqBO%2FgbRA%3D",
    "storageAccountName": "dlblobstore99hh25i3dflek",
    "SASUri": "https://dlblobstore99hh25i3dflek.blob.core.windows.net/dlz-user-container?sv=2020-04-08&si=dlz-9c4d03b8-a6ff-41be-9dcf-20123e717e99&sr=c&sp=racwdlm&sig=JbRMoDmFHQU4OWOpgrKdbZ1d%2BkvslO35%2FXTqBO%2FgbRA%3D"
}
```

## Explore landing zone file structure and contents

You can explore the file structure and contents of your landing zone by making a GET request to the `connectionSpecs` endpoint of the [!DNL Flow Service] API.

**API format**

```http
GET /connectionSpecs/{CONNECTION_SPEC_ID}/explore?objectType=root
```

| Parameter | Description |
| --- | --- |
| `{CONNECTION_SPEC_ID}` | The connection specification ID that corresponds to [!DNL Data Landing Zone]. This fixed ID is: `26f526f2-58f4-4712-961d-e41bf1ccc0e8`. |

**Request**

```shell
curl -X GET \
    'http://platform.adobe.io/data/foundation/flowservice/connectionSpecs/26f526f2-58f4-4712-961d-e41bf1ccc0e8/explore?objectType=root' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns an array of files and folders found within the queried directory. Take note of the `path` property of the file you wish to upload, as you are required to provide it in the next step to inspect its structure.

```json
[
    {
        "type": "file",
        "name": "account.csv",
        "path": "dlz-user-container/account.csv",
        "canPreview": true,
        "canFetchSchema": true
    },
    {
        "type": "file",
        "name": "data8.csv",
        "path": "dlz-user-container/data8.csv",
        "canPreview": true,
        "canFetchSchema": true
    },
    {
        "type": "folder",
        "name": "userdata1",
        "path": "dlz-user-container/userdata1/",
        "canPreview": false,
        "canFetchSchema": false
    }
]
```

## Preview landing zone file structure and contents

To inspect the structure of a file in your landing zone, perform a GET request while providing the file's path and type as a query parameter.

**API format**

```http
GET /connectionSpecs/{CONNECTION_SPEC_ID}/explore?objectType=file&object={OBJECT}&fileType={FILE_TYPE}&preview={PREVIEW}
```

| Parameter | Description | Example |
| --- | --- | --- |
| `{CONNECTION_SPEC_ID}` | The connection specification ID that corresponds to [!DNL Data Landing Zone]. This fixed ID is: `26f526f2-58f4-4712-961d-e41bf1ccc0e8`. |
| `{OBJECT_TYPE}` | The type of the object you want to access. | `file` |
| `{OBJECT}` | The path and name of the object you want to access. | `dlz-user-container/data8.csv` |
| `{FILE_TYPE}` | The type of the file. | <ul><li>`delimited`</li><li>`json`</li><li>`parquet`</li></ul> |
| `{PREVIEW}` | A boolean value that defines if file preview is supported. | </ul><li>`true`</li><li>`false`</li></ul> |

**Request**

```shell
curl -X GET \
    'http://platform.adobe.io/data/foundation/flowservice/connectionSpecs/26f526f2-58f4-4712-961d-e41bf1ccc0e8/explore?objectType=file&object=dlz-user-container/data8.csv&fileType=delimited&preview=true' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the structure of the queried file including file names and data types.

```json
{
    "format": "flat",
    "schema": {
        "columns": [
            {
                "name": "Id",
                "type": "string",
                "xdm": {
                    "type": "string"
                }
            },
            {
                "name": "FirstName",
                "type": "string",
                "xdm": {
                    "type": "string"
                }
            },
            {
                "name": "LastName",
                "type": "string",
                "xdm": {
                    "type": "string"
                }
            },
            {
                "name": "Email",
                "type": "string",
                "xdm": {
                    "type": "string"
                }
            },
            {
                "name": "Phone",
                "type": "string",
                "xdm": {
                    "type": "string"
                }
            }
        ]
    },
    "data": [
        {
            "Email": "rsmith@abc.com",
            "FirstName": "Richard",
            "Phone": "111111111",
            "Id": "12345",
            "LastName": "Smith"
        },
        {
            "Email": "morgan@bac.com",
            "FirstName": "Morgan",
            "Phone": "22222222222",
            "Id": "67890",
            "LastName": "Hart"
        }
    ]
}
```

### Use `determineProperties` to auto-detect file property information of a [!DNL Data Landing Zone]

You can use the `determineProperties` parameter to auto-detect property information of the file contents of your [!DNL Data Landing Zone] when making a GET call to explore the contents and structure of your source.

#### `determineProperties` uses cases

The following table outlines different scenarios you can encounter when using the `determineProperties` query parameter or manually providing information on your file.

| `determineProperties` | `queryParams` | Response |
| --- | --- | --- |
| True | N/A | If `determineProperties` is provided as a query parameter, then the file properties detection occurs and the response returns a new `properties` key that includes information on file type, compression type, and column delimiter. |
| N/A | True | If the values for file type, compression type, and column delimiter are manually provided as part of `queryParams`, then they are used to generate the schema and the same properties are returned as part of the response. |
| True | True | If both options are done simultaneously, then an error is returned. |
| N/A | N/A | If neither of the two options are provided, then an error is returned because there is no way to get properties for the response. |

**API format**

```http
GET /connectionSpecs/{CONNECTION_SPEC_ID}/explore?objectType=file&object={OBJECT}&fileType={FILE_TYPE}&preview={PREVIEW}&determineProperties=true
```

| Parameter | Description | Example |
| --- | --- | --- |
| `determineProperties` | This query parameter allows the [!DNL Flow Service] API to detect information regarding the properties of your file, including information on file type, compression type, and column delimiter. | `true` |

**Request**

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/connectionSpecs/26f526f2-58f4-4712-961d-e41bf1ccc0e8/explore?objectType=file&object=dlz-user-container/garageWeek/file1&preview=true&determineProperties=true' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the structure of the queried file including file names and data types, as well as a `properties` key, containing information on `fileType`, `compressionType`, and `columnDelimiter`.

+++Click me

```json
{
    "properties": {
        "fileType": "delimited",
        "compressionType": "tarGzip",
        "columnDelimiter": "~"
    },
    "format": "flat",
    "schema": {
        "columns": [
            {
                "name": "id",
                "type": "string",
                "xdm": {
                    "type": "string"
                }
            },
            {
                "name": "firstName",
                "type": "string",
                "xdm": {
                    "type": "string"
                }
            },
            {
                "name": "lastName",
                "type": "string",
                "xdm": {
                    "type": "string"
                }
            },
            {
                "name": "email",
                "type": "string",
                "xdm": {
                    "type": "string"
                }
            },
            {
                "name": "birthday",
                "type": "string",
                "xdm": {
                    "type": "string"
                }
            }
        ]
    },
    "data": [
        {
            "birthday": "1313-0505-19731973",
            "firstName": "Yvonne",
            "lastName": "Thilda",
            "id": "100",
            "email": "Yvonne.Thilda@yopmail.com"
        },
        {
            "birthday": "1515-1212-19731973",
            "firstName": "Mary",
            "lastName": "Pillsbury",
            "id": "101",
            "email": "Mary.Pillsbury@yopmail.com"
        },
        {
            "birthday": "0505-1010-19751975",
            "firstName": "Corene",
            "lastName": "Joeann",
            "id": "102",
            "email": "Corene.Joeann@yopmail.com"
        },
        {
            "birthday": "2727-0303-19901990",
            "firstName": "Dari",
            "lastName": "Greenwald",
            "id": "103",
            "email": "Dari.Greenwald@yopmail.com"
        },
        {
            "birthday": "1717-0404-19651965",
            "firstName": "Lucy",
            "lastName": "Magdalen",
            "id": "199",
            "email": "Lucy.Magdalen@yopmail.com"
        }
    ]
}
```

+++

| Property | Description |
| --- | --- |
| `properties.fileType` | The corresponding file type of the queried file. The supported file types are: `delimited`, `json`, and `parquet`. |
| `properties.compressionType` | The corresponding compression type used for the queried file. The supported compression types are: <ul><li>`bzip2`</li><li>`gzip`</li><li>`zipDeflate`</li><li>`tarGzip`</li><li>`tar`</li></ul> |
| `properties.columnDelimiter` | The corresponding column delimiter used for the queried file. Any single character value is a permissible column delimiter. The default value is a comma `(,)`. |


## Create a source connection

A source connection creates and manages the connection to the external source from where data is ingested. A source connection consists of information like data source, data format, and the source connection ID needed to create a dataflow. A source connection instance is specific to a tenant and IMS Organization.

To create a source connection, make a POST request to the `/sourceConnections` endpoint of the [!DNL Flow Service] API.


**API format**

```http
POST /sourceConnections
```

**Request**

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Data Landing Zone source connection",
        "data": {
            "format": "delimited"
        },
        "params": {
            "path": "dlz-user-container/data8.csv"
        },
        "connectionSpec": {
            "id": "26f526f2-58f4-4712-961d-e41bf1ccc0e8",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your [!DNL Data Landing Zone] source connection. |
| `data.format` | The format of the data you want to bring to Platform. |
| `params.path` | The path to the file that you want to bring to Platform. |
| `connectionSpec.id` | The connection specification ID that corresponds to [!DNL Data Landing Zone]. This fixed ID is: `26f526f2-58f4-4712-961d-e41bf1ccc0e8`. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created source connection. This ID is required in the next tutorial to create a dataflow.

```json
{
    "id": "f5b46949-8c8d-4613-80cc-52c9c039e8b9",
    "etag": "\"1400d460-0000-0200-0000-613be3520000\""
}
```

## Next steps

By following this tutorial, you have retrieved your [!DNL Data Landing Zone] credentials, explored its file structure to find the file you wish to bring to Platform, and created a source connection to begin bringing your data to Platform. You can now proceed to the next tutorial, where you will learn how to [create a dataflow to bring cloud storage data to Platform using the [!DNL Flow Service] API](../../collect/cloud-storage.md).

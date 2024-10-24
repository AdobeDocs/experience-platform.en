---
title: Sandbox Tooling Transfer API Endpoint
description: The /transfer endpoint in the Sandbox Tooling API allows you to partner with other organizations to share packages.
---
# Transfer endpoint

Sandbox tooling allows you to select different artifacts and export them into a package. A package can consist of a single object or multiple objects. Any objects that are included in a package must be from the same sandbox. 

The `/transfer` endpoint in the sandbox tooling API allows you to fetch and create new package sharing requests.

## New transfer request {#transfer-request}

<!-- EXPLANATION TO BE ADDED -->

a POST request to the `/transfer` endpoint

**API format**

```http
POST /transfer
```

**Request**

```shell
curl --location POST \
  https://platform.adobe.io/data/foundation/exim/transfer/ \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -d '{
      "packageId": "99089521828a4d4f999674496f3d84f1",
      "targets": [
          {
              "imsOrgId": "{TARGET_IMS_ORG}"
          }
      ]
  }'
```

<!-- UPDATE -->

| Property | Description | Type | Required |
| --- | --- | --- | --- |
| `packageId` | ?? | String | ?? |
| `targets` | ?? | Array | ?? |

**Response**

```json
[
    {
        "id": "2c0e72aac5fd41ba8c53d52fe97ab908",
        "version": 0,
        "createdDate": 1726480559313,
        "modifiedDate": 1726480559313,
        "createdBy": "A8A119A465B1553B0A49401B@3ec9197a65a86f34494221.e",
        "modifiedBy": "A8A119A465B1553B0A49401B@3ec9197a65a86f34494221.e",
        "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
        "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
        "packageId": "99089521828a4d4f999674496f3d84f1",
        "status": "PENDING",
        "initiatedBy": "acme@3ec9197a65a86f34494221.e",
        "transferDetails": {
            "messages": [
                "Fetched Package",
                "Fetched Manifest"
            ],
            "additionalMetadata": null
        },
        "requestType": "PRIVATE"
    }
]
```

## Fetch a transfer request by ID {#fetch-transfer-by-id}

<!-- EXPLANATION TO BE ADDED -->

a GET request to the `/transfer/{TRANSFER_ID}` endpoint

**API format**

```http
GET /transfer/{TRANSFER_ID}
```

| Parameter | Description |
| --- | --- |
| {TRANSFER_ID} | The ID of the transfer you want to fetch. |

**Request**

The following request fetches a transfer with the ID of {TRANSFER_ID}.

```shell
curl --location GET \
  https://platform.adobe.io/data/foundation/exim/transfer/0c843180a64c445ca1beece339abc04b \
  -H 'x-api-key: {API__KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}'
```

**Response**

```json
{
    "id": "0c843180a64c445ca1beece339abc04b",
    "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
    "sourceOrgName": "{SOURCE_ORG}",
    "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
    "targetOrgName": "{TARGET_ORG}",
    "packageId": "93137e7f8f984754a0ed9e1e6cabd036",
    "packageName": "{PACKAGE_NAME}",
    "status": "COMPLETED",
    "initiatedBy": "A8A119A465B1553B0A49401B@3ec9197a65a86f34494221.e",
    "createdDate": 1724442856000,
    "transferDetails": {
        "messages": [
            "Fetched Package",
            "Fetched Manifest",
            "Tenant Identified",
            "Fetched Sandbox Id",
            "Fetched Blob Files",
            "Message Published to Kafka",
            "Completed Transfer"
        ],
        "additionalMetadata": null
    },
    "requestType": "PRIVATE"
}
```

## Fetch transfers list {#transfers-list}

<!-- EXPLANATION TO BE ADDED -->

a GET request to the `/transfer/list?property=status=={STATUS}&start={START}&limit={LIMIT}&orderBy=-createdDate` endpoint

**API format**

```http
GET `/transfer/list?property=status=={STATUS}&start={START}&limit={LIMIT}&orderBy=-createdDate`
```

| Parameter | Accepted/Default Values |
| --- | --- |
| `status` | Acceptable values for status are: `COMPLETED`, `PENDING`, `IN_PROGRESS`, `FAILED`. |
| `start` | The default value of start is `0`. |
| `limit` | The default value of limit is `20`. |
| `orderBy` | The ordering only accepts the `createdDate` field. |

**Request**

```shell
curl --location GET \
  https://platform.adobe.io/data/foundation/exim/transfer/list?property=status==COMPLETED&start=0&limit=2&orderBy=-createdDate \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}'
```

**Response**

```json
{
    "totalElements": 43,
    "currentPage": 0,
    "totalPages": 22,
    "hasPreviousPage": false,
    "hasNextPage": true,
    "data": [
        {
            "id": "cd4605f6ae2a4e18824a5d6525c2b11c",
            "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
            "sourceOrgName": "{SOURCE_ORG}",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "{TARGET_ORG}",
            "packageId": "99089521828a4d4f999674496f3d84f1",
            "packageName": "{PACKAGE_NAME}",
            "status": "COMPLETED",
            "initiatedBy": "A8A119A465B1553B0A49401B@3ec9197a65a86f34494221.e",
            "completedTime": 1726129077000,
            "createdDate": 1726129062000,
            "transferDetails": {
                "messages": [
                    "Fetched Package",
                    "Fetched Manifest",
                    "Tenant Identified",
                    "Fetched Sandbox Id",
                    "Fetched Blob Files",
                    "Message Published to Kafka",
                    "Completed Transfer",
                    "Finished with status: COMPLETED"
                ],
                "additionalMetadata": null
            },
            "requestType": "PRIVATE"
        },
        {
            "id": "5aca120a8c094f1ca1e53d988fb29721",
            "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
            "sourceOrgName": "{SOURCE_ORG}",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "{TARGET_ORG}",
            "packageId": "99089521828a4d4f999674496f3d84f1",
            "packageName": "{PACKAGE_NAME}",
            "status": "COMPLETED",
            "initiatedBy": "2C661A74665DC40B0A494112@98ff67fa661fdf6549420b.e",
            "completedTime": 1726066046000,
            "createdDate": 1726065936000,
            "transferDetails": {
                "messages": [
                    "Fetched Package",
                    "Fetched Manifest",
                    "Tenant Identified",
                    "Fetched Sandbox Id",
                    "Fetched Blob Files",
                    "Message Published to Kafka",
                    "Completed Transfer",
                    "Finished with status: COMPLETED"
                ],
                "additionalMetadata": null
            },
            "requestType": "PRIVATE"
        }
    ],
    "nextPage": null,
    "pageSize": null
}
```

## Update package visibility from private to public {#update-visibility}

<!-- EXPLANATION TO BE ADDED -->

a GET request to the `/transfer/list?property=status%3D%3DCOMPLETED%2CFAILED&requestType=PUBLIC` endpoint

**Request**

```shell
curl --location --request GET \
  http://platform-stage.adobe.io/data/foundation/transfer/list?property=status%3D%3DCOMPLETED%2CFAILED&requestType=PUBLIC \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-type: application/json' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -d '{
      "id":"673264e41f8b49229d61467a1a94a907",
      "action":"UPDATE",
      "packageVisibility":"PUBLIC"
  }'
```

<!-- UPDATE -->

| Property | Description | Type | Required |
| --- | --- | --- | --- |
| `id` | ?? | String | ?? |
| `action` | ?? | String | ?? |
| `packageVisbility` | ?? | String | ?? |

**Response**

```json
{
    "id": "673264e41f8b49229d61467a1a94a907",
    "version": 7,
    "createdDate": 1729624618000,
    "modifiedDate": 1729658596340,
    "createdBy": "05762A4260527C970A49402D@658557135fa10b860a494019",
    "modifiedBy": "FF0D1F43637B49710A494110@658557135fa10b860a494019",
    "name": "acme",
    "imsOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
    "packageType": "PARTIAL",
    "expiry": 1737434596325,
    "status": "PUBLISH_FAILED",
    "packageVisibility": "PUBLIC",
    "artifactsList": [
        {
            "id": "0ec45a79-5b07-4551-8c9f-de914a99cfca",
            "type": "PROFILE_SEGMENT",
            "found": false,
            "count": 0,
            "title": "Acme Profile Segment"
        }
    ],
    "schemaMapping": {},
    "sourceSandbox": {
        "name": "acme-sandbox",
        "imsOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
        "empty": false
    }
}
```

## Request to create pulled public package {#create-pulled-package}

<!-- EXPLANATION TO BE ADDED -->

a POST request to the `/transfer/pullRequest` endpoint

**API format**

```http
POST \transfer\pullRequest
```

**Request**

```shell
curl --location POST \
  https://platform-stage.adobe.io/data/foundation/exim/transfer/pullRequest \
-H 'x-api-key: {API_KEY}' \
-H 'x-gw-ims-org-id: {ORG_ID}' \
-H 'x-sandbox-name: {SANDBOX_NAME}' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer {ACCESS_TOKEN}' \
-H 'Content-Type: application/json' \
-d '{
    "imsOrgId": "2E63197465A811E70A494213@AdobeOrg",
    "packageId": "673264e41f8b49229d61467a1a94a907"
}'
```

<!-- UPDATE -->

| Property | Description | Type | Required |
| --- | --- | --- | --- |
| `imsOrgId` | ?? | String | ?? |
| `packageId` | ?? | String | ?? |

**Response**

```json
{
    "id": "e044f3a2306c490a9283404792d3cb3a",
    "version": 0,
    "createdDate": 1729658890425,
    "modifiedDate": 1729658890425,
    "createdBy": "FF0D1F43637B49710A494110@658557135fa10b860a494019",
    "modifiedBy": "FF0D1F43637B49710A494110@658557135fa10b860a494019",
    "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
    "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
    "packageId": "673264e41f8b49229d61467a1a94a907",
    "status": "PENDING",
    "initiatedBy": "FF0D1F43637B49710A494110@658557135fa10b860a494019",
    "pipelineMessageId": "aebcb05f-aa65-4a4e-9f56-e20bed0803d9",
    "requestType": "PUBLIC"
}
```

## List of pulled public packages

<!-- EXPLANATION TO BE ADDED -->

a GET request to the `/transfer/list?property=status%3D%3DCOMPLETED%2CFAILED&requestType=PUBLIC&orderby=-createdDate` endpoint

**API format**

```http
GET /transfer/list?property=status%3D%3DCOMPLETED%2CFAILED&requestType=PUBLIC&orderby=-createdDate
```

**Request**

```shell
curl --location --request GET \
  https://platform.adobe.io/data/foundation/exim/transfer/list?property=status%3D%3DCOMPLETED%2CFAILED&requestType=PUBLIC&orderby=-createdDate \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/json' \
  -H 'Authorization: {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -d '{
      "imsOrgId": "2E63197465A811E70A494213@AdobeOrg",
      "packageId": "74b38d53288d4186b2977fafa622a7f4"
  }'
```

<!-- UPDATE -->

| Property | Description | Type | Required |
| --- | --- | --- | --- |
| `imsOrgId` | ?? | String | ?? |
| `packageId` | ?? | String | ?? |

**Response**

```json
{
    "totalElements": 14,
    "currentPage": 0,
    "totalPages": 1,
    "hasPreviousPage": false,
    "hasNextPage": false,
    "data": [
        {
            "id": "535aff3dcf254315b33dd96cba6b4893",
            "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
            "sourceOrgName": "2E63197465A811E70A494213@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "54cf26eb1f5141529a1cc3a0378c555f",
            "packageName": "Public package demo",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729359318000,
            "createdDate": 1729359316000,
            "requestType": "PUBLIC"
        },
        {
            "id": "02c500ecc5424650a0d314376a0ec6a2",
            "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
            "sourceOrgName": "2E63197465A811E70A494213@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "54cf26eb1f5141529a1cc3a0378c555f",
            "packageName": "Public package demo",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729359284000,
            "createdDate": 1729359283000,
            "requestType": "PUBLIC"
        },
        {
            "id": "d6fe62af80934dea9d6813e7e9a72211",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "74422bfdf3a34301b37df40ef492d8d7",
            "packageName": "Test Private Flow Final",
            "status": "COMPLETED",
            "initiatedBy": "11B41FB463226F620A49411D@658557135fa10b860a494019",
            "completedTime": 1729284462000,
            "createdDate": 1729275962000,
            "requestType": "PUBLIC"
        },
        {
            "id": "e6e1e8671b0641029513bc5ff9a788ca",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "ed74331873fb457f83f98863b1197f8d",
            "packageName": "Fest",
            "status": "FAILED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284104000,
            "createdDate": 1729253854000,
            "requestType": "PUBLIC"
        },
        {
            "id": "b7d9fb93e3fe4e47bd895417c387e98f",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "67baaec4af3648f3a02c715fed8097d1",
            "packageName": "PublicPackageSharing",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284835000,
            "createdDate": 1729253556000,
            "requestType": "PUBLIC"
        },
        {
            "id": "6b475653d65f49b8a9585bab47110229",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "67baaec4af3648f3a02c715fed8097d1",
            "packageName": "PublicPackageSharing",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284439000,
            "createdDate": 1729253522000,
            "requestType": "PUBLIC"
        },
        {
            "id": "c73fef7fdc81468a8f25f50251b3e6c5",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "67baaec4af3648f3a02c715fed8097d1",
            "packageName": "PublicPackageSharing",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284388000,
            "createdDate": 1729253443000,
            "requestType": "PUBLIC"
        },
        {
            "id": "49f36a796bcd4fc7bd8ea8f49f9942ea",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "f19d43a93414463587d21e5f907de9a6",
            "packageName": "Public Package Audit Test",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284667000,
            "createdDate": 1729253421000,
            "requestType": "PUBLIC"
        },
        {
            "id": "475dfe85c2e94a8cbefca9c7e52ac95c",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "f19d43a93414463587d21e5f907de9a6",
            "packageName": "Public Package Audit Test",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284957000,
            "createdDate": 1729253143000,
            "requestType": "PUBLIC"
        },
        {
            "id": "1a780eaa9e1348cf85adb6d40141503f",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "f19d43a93414463587d21e5f907de9a6",
            "packageName": "Public Package Audit Test",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284562000,
            "createdDate": 1729252975000,
            "requestType": "PUBLIC"
        },
        {
            "id": "21dd1186fb3445c69e273f8e52e653e1",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "df2ee73e5ef44351bd8d0ae62e2b1251",
            "packageName": "Private Package Test 1",
            "status": "COMPLETED",
            "initiatedBy": "34091FB3636DF4020A494114@658557135fa10b860a494019",
            "completedTime": 1729284262000,
            "createdDate": 1729229755000,
            "requestType": "PUBLIC"
        },
        {
            "id": "e1f2d91426514292a72a1275e60ead6b",
            "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
            "sourceOrgName": "2E63197465A811E70A494213@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "d30b9a93ab5e40baa298ea936b740090",
            "packageName": "Demo Package 1016",
            "status": "COMPLETED",
            "initiatedBy": "11B41FB463226F620A49411D@658557135fa10b860a494019",
            "completedTime": 1729284784000,
            "createdDate": 1729208888000,
            "requestType": "PUBLIC"
        },
        {
            "id": "bd9b80d4ab514b86b8c5b35927064693",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "cf1dd7583bc946c09f602839eb95db8b",
            "packageName": "Public Package test 1",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284934000,
            "createdDate": 1729153097000,
            "requestType": "PUBLIC"
        },
        {
            "id": "93f32aff292d4f658f0b908f335e2b23",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "cf1dd7583bc946c09f602839eb95db8b",
            "packageName": "Public Package test 1",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284912000,
            "createdDate": 1729153043000,
            "requestType": "PUBLIC"
        }
    ],
    "nextPage": null,
    "pageSize": null
}
```

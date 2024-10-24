---
title: Sandbox Tooling Handshake API Endpoint
description: The /handshake endpoint in the Sandbox Tooling API allows you to partner with other organizations to share packages.
---
# Handshake endpoint

Sandbox tooling allows you to select different artifacts and export them into a package. A package can consist of a single object or multiple objects. Any objects that are included in a package must be from the same sandbox. 

The `/handshake` endpoint in the sandbox tooling API allows you to partner with other organizations to share packages.

## Sending a request {#send-request}

<!-- EXPLANATION TO BE ADDED -->

a POST request to the `/handshake/bulkCreate` endpoint

**API format**

```http
POST /handshake/bulkCreate
```

**Request**

```shell
curl --location POST \
  https://platform.adobe.io/data/foundation/exim/handshake/bulkCreate \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/json' \
  -H 'Authorization: {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -d '{
      "targetIMSOrgIds":["acme@AdobeOrg"],
      "sourceIMSDetails":{
        "id":"acme@AdobeOrg",
        "name":"acme_org"
      } 
  }' 
```
<!-- UPDATE -->

| Property | Description | Type | Required |
| --- | --- | --- | --- |
| `targetIMSOrgIds` | ?? | Array | ?? |
| `sourceIMSDetails` | ?? | Object | ?? |


**Response**

```json
{
    "successfulRequests": {
        "acme@AdobeOrg": {
            "id": "e3f9ae5121cc4f1d849f1535994592c4",
            "version": 0,
            "createdDate": 1724938816798,
            "modifiedDate": 1724938816798,
            "createdBy": "29571A74665DA05A0A494112@98ff67fa661fdf6549420b.e",
            "modifiedBy": "29571A74665DA05A0A494112@98ff67fa661fdf6549420b.e",
            "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceRegion": "va6",
            "sourceIMSOrgName": "{SOURCE_NAME}",
            "status": "APPROVAL_PENDING",
            "createdByName": "{CREATED_BY}",
            "modifiedByName": "{MODIFIED_BY}",
            "modifiedByIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
            "statusHistory": "[{\"actionTakenBy\":\"acme@98ff67fa661fdf6549420b.e\",\"actionTakenByName\":\"29571A74665DA05A0A494112@98ff67fa661fdf6549420b.e\",\"actionTakenByImsOrgID\":\"2E63197465A811E70A494213@AdobeOrg\",\"action\":\"INITIATED\",\"actionTimeStamp\":1724938816885}]",
            "linkingId": "f7647408-965c-4a33-86aa-640760088c53"
        }
    },
    "failedRequests": {}
}
```

## Approving received requests {#approve-requests}

<!-- EXPLANATION TO BE ADDED -->

a POST request to the `/handshake/action` endpoint


**API format**

```http
POST /handshale/action
```

**Requests**

```shell
curl --location POST  \
  https://platform.adobe.io/data/foundation/exim/handshake/action \
  -H 'x-api-key: platform_exim' \
  -H 'x-gw-ims-org-id: <imsOrgId>' \
  -H 'x-sandbox-name: <sandbox_name>' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'Content-Type: application/json' \
  -d '{
      "linkingID":"96e325cd387348f2baa27aafb0d291db",
      "status":"APPROVED",
      "reason":"Done",
      "targetIMSOrgDetails":{
          "id":"ABC@AdobeOrg",
          "name":"test2_org",
          "region":"va7"
      }
  }'
```

<!-- UPDATE -->

| Property | Description | Type | Required |
| --- | --- | --- | --- |
| `linkingID` | ?? | String | ?? |
| `status` | ?? | String | ?? |
| `reason` | ?? | String | ?? |
| `targetIMSOrgDetails` | ?? | Object | ?? |

**Response**

```json

{
    "id": "6c2ee3780fee4fbd9344e84ed2cb3fdf",
    "version": 1,
    "createdDate": 1726737474000,
    "modifiedDate": 1726737541731,
    "createdBy": "FF0D1F43637B49710A494110@658557135fa10b860a494019",
    "modifiedBy": "AAD819AE65B155520A494137@3ec9197a65a86f34494221.e",
    "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
    "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
    "sourceRegion": "va7",
    "targetRegion": "va7",
    "sourceOrgName": "{SOURCE_ORG}",
    "targetOrgName": "{TARGET_ORG}",
    "status": "APPROVED",
    "createdByName": "{CREATED_BY}",
    "modifiedByIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
    "statusHistory": "[{\"actionTakenBy\":\"FF0D1F43637B49710A494110@658557135fa10b860a494019\",\"actionTakenByName\":\"{NAME}\",\"actionTakenByImsOrgID\":\"acme@AdobeOrg\",\"action\":\"INITIATED\",\"actionTimeStamp\":1726737474450,\"reason\":null},{\"actionTakenBy\":null,\"actionTakenByName\":null,\"actionTakenByImsOrgID\":\"745F37C35E4B776E0A49421B@AdobeOrg\",\"action\":\"APPROVED\",\"actionTimeStamp\":1726737541818,\"reason\":\"Done\"}]",
    "linkingId": "fbbd61b7-e4f9-410d-856d-187dff4bbcb5"
}
```

## List outgoing/incoming requests {#outgoing-and-incoming-requests}

<!-- EXPLANATION TO BE ADDED -->

a GET request to the `handshake/list?property=status%3D%3DAPPROVED&requestType=INCOMING` endpoint

**Request**

```shell
curl --location --request GET \
  https://platform.adobe.io/data/foundation/exim/handshake/list?property=status%3D%3DAPPROVED&requestType=INCOMING \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id:{ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
```

**Response**

```json
{
    "totalElements": 1,
    "currentPage": 0,
    "totalPages": 1,
    "hasPreviousPage": false,
    "hasNextPage": false,
    "data": [
        {
            "id": "b1348219e81e43b1b32b75dd51edc68f",
            "version": 1,
            "createdDate": 1724929446000,
            "modifiedDate": 1724929617000,
            "modifiedBy": "29571A74665DA05A0A494112@98ff67fa661fdf6549420b.e",
            "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
            "targetIMSOrgId": "C0FA10B6661FDE6F0A494023@AdobeOrg",
            "sourceRegion": "va7",
            "targetRegion": "va6",
             "sourceOrgName": "{SOURCE_ORG}",
            "targetOrgName": "{TARGET_ORG}",
            "status": "APPROVED",
            "createdByName": "{CREATED_BY}",
            "modifiedByName": "{MODIFIED_BY}",
            "modifiedByIMSOrgId": "C0FA10B6661FDE6F0A494023@AdobeOrg",
            "statusHistory": "[{\"actionTakenBy\":\"AAD819AE65B155520A494137@3ec9197a65a86f34494221.e\",\"actionTakenByName\":\"{NAME}\",\"actionTakenByImsOrgID\":\"C0FA10B6661FDE6F0A494023@AdobeOrg\",\"action\":\"INITIATED\",\"actionTimeStamp\":1724929442467,\"reason\":null},{\"actionTakenBy\":null,\"actionTakenByName\":\"{NAME}\",\"actionTakenByImsOrgID\":\"C0FA10B6661FDE6F0A494023@AdobeOrg\",\"action\":\"APPROVED\",\"actionTimeStamp\":1724929617531,\"reason\":\"Done\"}]",
            "linkingId": "f45707bc-9c87-46f8-853b-f2d177c028b6"
        }
    ],
    "nextPage": null,
    "pageSize": null
}
```


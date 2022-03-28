---
description: This page lists and describes all the API operations that you can perform using the `/authoring/sample-profiles` API endpoint, to generate sample profiles to use in file-based destination testing.
title: Generate sample profiles with the testing API
---
# Generate sample profiles with the testing API {#sample-profile-api-operations}

>[!IMPORTANT]
>
>**API endpoint**: `https://platform.adobe.io/data/core/activation/authoring/sample-profiles`

## Getting started with sample profile generation API operations {#get-started}

Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Generate sample profiles based on the source schema to use when testing your destination {#generate-sample-profiles-source-schema}

You can generate sample profiles based on the source schema by making a GET request to the `authoring/sample-profiles/` endpoint and providing the ID of a destination instance that you created based on the destination configuration that you want to test. 

To get the ID of a destination instance, you must first create a connection in the Experience Platform UI to your destination before attempting to test your destination. Read the [activate destination tutorial](/help/destinations/ui/activation-overview.md) and see the tip below for how to get the destinations instance ID to use for this API.

>[!TIP]
>
>* Get the destination instance ID that you should use here from the URL when browsing a connection with your destination.
>![UI image how to get destination instance ID](./assets/get-destination-instance-id.png)

### API format

```http
GET 'https://platform.adobe.io/data/core/activation/authoring/v1/sample-profiles?destinationInstanceId=d3ab41ee-fe25-476a-9fba-4baff6c0acb5''
```

| Query parameter | Description |
| -------- | ----------- |
| `destinationInstanceId` | The ID of the destination instance based on which you are generating sample profiles. |
| `count` | *Optional*. The number of sample profiles that you are generating. The parameter can take values between `1 - 1000`. If this property is not defined, then Adobe will generate one sample profile. |

{style="table-layout:auto"}


### Request

The following request generates sample profiles, configured by the `destinationInstanceId` query parameter.

```shell
curl --location --request GET 'https://platform-stage.adobe.io/data/core/activation/authoring/v1/sample-profiles?destinationInstanceId=d3ab41ee-fe25-476a-9fba-4baff6c0acb5' 
--header 'Content-Type: application/json' 
--header 'Accept: application/json' 
--header 'x-api-key: {API_KEY}' 
--header 'Authorization: Bearer {TOKEN}' 
--header 'x-gw-ims-org-id: {IMS_ORG_ID}' 
--header 'x-sandbox-name: name'
--header 'x-sandbox-id: sandbox-id'
```

### Response

A successful response returns HTTP status 200 with the specified number of sample profiles, with segment membership, identities, and profile attributes that correspond to the source XDM schema.

>[!TIP]
>
> The response returns only segment membership, identities, and profile attributes that are used in the destination instance. Even if your source schema has other fields, these are ignored.

```json

[
    {
        "segmentMembership": {
            "ups": {
                "fea8d394-5a8c-4cea-bebc-df020ce37f5c": {
                    "lastQualificationTime": "2022-01-13T11:33:28.211895Z",
                    "status": "realized"
                },
                "5fa55d3a-18e1-4f65-95ed-ac8fdb03b45b": {
                    "lastQualificationTime": "2022-01-13T11:33:28.211893Z",
                    "status": "realized"
                }
            }
        },
        "personalEmail": {
            "address": "john.smith@abc.com"
        },
        "identityMap": {
            "crmid": [
                {
                    "id": "crmid-P1A7l"
                }
            ]
        },
        "person": {
            "name": {
                "firstName": "string",
                "lastName": "string"
            }
        }
    }
]

```

| Property | Description |
| -------- | ----------- |
| `segmentMembership` | A map object which describes the individual’s segment memberships. For more information on `segmentMembership`, read [Segment Membership Details](../../xdm/field-groups/profile/segmentation.md). |
| `lastQualificationTime` | A timestamp of the last time this profile qualified for the segment. |
| `status` | Indicates whether the segment membership has been realized as part of the current request. The following values are accepted: <ul><li>`existing`: The profile was already part of the segment prior to the request, and continues to maintain its membership.</li><li>`realized`: The profile is entering the segment as part of the current request.</li><li>`exited`: The profile is exiting the segment as part of the current request.</li></ul> |
| `identityMap` | A map-type field that describes the various identity values for an individual, along with their associated namespaces. For more information on `identityMap`, read [Basis of schema composition](../../xdm/schema/composition.md#identityMap). |

{style="table-layout:auto"}

## API error handling {#api-error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps

After reading this document, you now know how to generate sample profiles to be used when [testing your file-based destination](file-based-destination-testing-api.md).

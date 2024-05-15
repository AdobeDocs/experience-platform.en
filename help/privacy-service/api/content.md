---
title: Consent API Endpoint
description: Learn how to retrieve your access data using the Privacy Service API.
role: Developer
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
---
# Content endpoint

<!-- Q) Should this be called 'access information' or 'customer content'? -->

To improve security when retrieving 'access information' (the information that a privacy subject can rightfully request to access), the download URL previously provided in the response to a GET request to `/jobs/{JOB_ID}` response has been updated to point to a new endpoint on an Adobe service. Previously, a download link was provided that contained all the information gathered by the products in a zip file. Now, your customer 'access information' requires authentication to access as it is provided from an internal Adobe service endpoint.

<!-- 
Alternate intro:
To improve security, the download URL that provides access to customer content has been updated to point to a new Adobe endpoint. As Adobe stores your customer data, providing that customer data through an Adobe endpoint improves security as authorization is required to access the endpoint. Customer data is now returned in JSON format by making a GET request to `/jobs/:JOB_ID/content`. 
-->

Before using this guide, please refer to the [getting started guide](./getting-started.md) for information on the required authentication headers presented in the example API call below.

<!-- Add in info about a singular job 

## Retrieve privacy job information

To retrieve information about a specific job, make a GET request to the /jobs endpoint and include the job's `jobId` in the path.
To retrieve information about a specific job, such as its current processing status, include that job's `jobId` in the path of a GET request to the `/jobs` endpoint.

**API format**

```http
GET /jobs/{JOB_ID}
```

**Request**

The following request retrieves the details of the job whose jobId is provided in the request path.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/privacy/jobs/32d429b1-f7f4-11ee-a365-574bcf5a525d \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}'
```

**Response**

A successful response returns the details of the specified job.

```json
{
    "jobId":"dbe3a6a6-f8e6-11ee-a365-8d1d6df81cc5",
    "requestId":"17129380910360540RX-753",
    "userKey":"1234",
    "action":"access",
    "status":"processing",
    "submittedBy":"tboyer@adobe.com",
    "createdDate":"04/12/2024 04:08 PM GMT",
    "lastModifiedDate":"04/12/2024 04:08 PM GMT",
    "userIds":[{
        "namespace":"ECID",
        "value":"1234",
        "type":"standard",
        "namespaceId":4,
        "isDeletedClientSide":false
        }],
    "productResponses":[{
        "product":"Identity",
        "retryCount":0,
        "processedDate":"04/12/2024 04:08 PM GMT",
        "productStatusResponse":{"status":"submitted"
        }}],
    "downloadUrl":"https://platform-stage.adobe.io/data/core/privacy/jobs/dbe3a6a6-f8e6-11ee-a365-8d1d6df81cc5/content",
    "regulation":"gdpr"
}
```
Splice in the info below to `productStatusResponse`:
                "status": "complete",
                "message": "submitted",
                "responseMsgCode": "PRVCY-6054-200",
                "responseMsgDetail": "PARTIALLY COMPLETED- Data not found for some requests, check results for more info.",
                "results": {
                  "processed": ["1123A4D5690B32A"],
                  "ignored": ["dsmith@acme.com"]

| Property | Description |
| --- | --- |
| `productStatusResponse` | Each object within the `productResponses` array contains information about the current status of the job with respect to a specific [!DNL Experience Cloud] application.|
| `productStatusResponse.status` | The job's current status category. See the table below for a list of [available status categories](#status-categories) and their corresponding meanings. |
| `productStatusResponse.message` | The job's specific status, corresponding to the status category. |
| `productStatusResponse.responseMsgCode` | A standard code for product response messages received by [!DNL Privacy Service]. The details of the message are provided under `responseMsgDetail`. |
| `productStatusResponse.responseMsgDetail` | A more detailed explanation of the job's status. Messages for similar statuses may vary between products.|
| `productStatusResponse.results` | For certain statuses, some products may return a `results` object that provides additional information not covered by `responseMsgDetail`. |
| `downloadURL` | If the status of the job is `complete`, this attribute provides a ... This endpoint is available to call for 60 days after the job completes. |

{style="table-layout:auto"}


| Property | Description |
| --- | --- |
| `xxx` | ... |
| `xxx` | ... |
| `xxx` | ... |
| `xxx` | ... |

{style="table-layout:auto"}


-->

## Retrieve customer content

To process a requests for your customer's 'access information', make a GET request to the `/jobs/{JOB_ID}/consent` endpoint. Customer data is returned in JSON format.

>[!TIP]
>
>You need a specific job ID make this request. If you need to retrieve the specific job ID, first make a GET request  to the `/jobs` endpoint and use additional query parameters to filter the results. Detailed information including the allowed query parameters can be found in the [privacy jobs endpoint guide](./privacy-jobs.md).

**API format**

```http
GET /jobs/{JOB_ID}/content
```

**Request**

The following request returns 'access information' for the job ID provided in the request.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/privacy/jobs/32d429b1-f7f4-11ee-a365-574bcf5a525d/content \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \ 
  -H 'Accept: application/json`
```





<!-- 
Why do we need this new /content endpoint?

 

Amazon, our new AEP customer, absolutely rejects the way we currently give customers their "access" data. It doesn't have good security, but even worse from their perspective is that they do not like that they have to download that data from their competitor, Microsoft Azure.

 

How does "access" data work now?

 

The way "access" jobs have been handled in the past is that we create a zipfile containing all the info gathered by the products. Then, in the GET /jobs/:JOB_ID response, we include a download link that points at an Azure blobstore file.

 

Here's an example query and response for a zipfile "access" job:

curl  --location --silent --show-error      \
      --request GET https://platform-stage.adobe.io/data/core/privacy/jobs/32d429b1-f7f4-11ee-a365-574bcf5a525d \
      --header "X-Api-Key: acp_privacy_gdpr"              \
      --header "X-Gw-Ims-Org-Id: 5D1328435BF324E90A49402A@AdobeOrg"     \
      --header "Authorization: Bearer $ACCESS_TOKEN" \
      --header "Accept: application/json, text/plain, */*"

Response (download URL is highlighted):

{
   "jobId":"32d429b1-f7f4-11ee-a365-574bcf5a525d",
   "requestId":"17128338691900206RX-591",
   "userKey":"testUserKey",
   "action":"access",
   "status":"complete",
   "submittedBy":"gdpradm@adobe.com",
   "createdDate"":""04/11/2024 11":11 AM GMT",""lastModifiedDate"":""04/11/2024 07":08 PM GMT",""userIds"":[{""namespace"":""email"",""value"":""test@adobe.com"",""type"":""standard"",""namespaceId"":6,""isDeletedClientSide"":false}],""productResponses"":[{""product"":""Profile"",""retryCount"":0,""processedDate"":""04/11/2024 07":08 PM GMT",""productStatusResponse"":{""status"":""complete"",""results"":"[
      {
         "\\""hygiene-beta\":[{\"BVrqzwVryrXrLfmnaG3v3KJg\":[{\"mergePolicyPrivacy\":\"NotFound\"}]}]},{\"prod\":[{\"BVrqzwVryrXrLfmnaG3v3KJg\":[{\"mergePolicyPrivacy\":\"NotFound\"}]}]},{\"privacy-sandbox\":[{\"BVrqzwVryrXrLfmnaG3v3KJg\":[{\"mergePolicyPrivacy\":\"NotFound\"}]}]},{\"test\":[{\"BVrqzwVryrXrLfmnaG3v3KJg\":[{\"mergePolicyPrivacy\":\"NotFound\"}]}]}]",
         "responseMsgCode":"PRVCY-6052-200",
         "responseMsgDetail":"Unknown user IDs are not applicable for this product."
      }
   }
],
"downloadUrl":"https://va7gdprdevblob.blob.core.windows.net/va7gdprdevblobpublic/usa/32d5c8dc73e8d32f90155839680236b7/32d429b1-f7f4-11ee-a365-574bcf5a525d/32d429b1-f7f4-11ee-a365-574bcf5a525d.zip",
"regulation":"gdpr"
}

 

This is bad security. It would be hard to guess that URL, but anybody who gets it can use it to download the data without any authorization at all.

 

Enabling a new way to get "access" data

 

We don't want to change to behavior for existing customers (yet), so we only use the new method for orgs that are flagged for this treatment. (That's why I mentioned in the first paragraph that you'd need two orgs in stage and two orgs in prod if you want to test this. You'd need a flagged org and a non-flagged org.) Currently, only two orgs are flagged to use the new download mechanism -- one in stage, and one in prod:

Stage: 0FCC747E56F59C747F000101@AdobeOrg "Duane DTM Test 4"
Prod:  D1B24FFF5C79185C0A495ECF@AdobeOrg "GDPR 2.0 Test Org QA"
So, if you have access to those orgs, and one other org in each environment, you'd be able to do your own test/demo calls. Otherwise, we can flag some orgs you do have access to.

 

What is the new way to get "access" data?

 

For a flagged org, we provide a different download URL. Instead of pointing to Azure blobstore, it points to a new endpoint on our own service, GET /jobs/:JOB_ID/content. We store the data for the customer, and provide it to them via that endpoint. ...

 

The new /content endpoint is more secure because it requires the usual "X-Api-Key: ..." and "Authorization: Bearer ..." headers.

 

Here's what GET /jobs/:JOB_ID results look like for an org that is flagged as "AWS". The call is the same:

curl  --location --silent --show-error      \

      --request GET https://platform-stage.adobe.io/data/core/privacy/jobs/dbe3a6a6-f8e6-11ee-a365-8d1d6df81cc5 \

      --header "X-Api-Key: acp_privacy_gdpr"              \

      --header "X-Gw-Ims-Org-Id: 0FCC747E56F59C747F000101@AdobeOrg"     \

      --header "Authorization: Bearer $ACCESS_TOKEN" \

      --header "Accept: application/json, text/plain, */*"

But the response provides a /content "downloadUrl":

{"jobId":"dbe3a6a6-f8e6-11ee-a365-8d1d6df81cc5","requestId":"17129380910360540RX-753","userKey":"1234","action":"access","status":"processing","submittedBy":"tboyer@adobe.com",createdDate":"04/12/2024 04:08 PM GMT","lastModifiedDate":"04/12/2024 04:08 PM GMT","userIds":[{"namespace":"ECID","value":"1234","type":"standard","namespaceId":4,"isDeletedClientSide":false}],"productResponses":[{"product":"Identity","retryCount":0,"processedDate":"04/12/2024 04:08 PM GMT","productStatusResponse":{"status":"submitted"}}],"downloadUrl":"https://platform-stage.adobe.io/data/core/privacy/jobs/dbe3a6a6-f8e6-11ee-a365-8d1d6df81cc5/content","regulation":"gdpr"}

 

 

Here's how you'd use that new kind of download URL:

curl --location  \

      'https://platform-stage.adobe.io/data/core/privacy/jobs/dbe3a6a6-f8e6-11ee-a365-8d1d6df81cc5/content'  \

      --header 'Content-Type: application/octet-stream'  \

      --header 'x-api-key: acp_privacy_gdpr'  \

      --header 'x-gw-ims-org-id: 0FCC747E56F59C747F000101@AdobeOrg'  \

      --header 'Authorization: Bearer '$ACCESS_TOKEN  \

      > dbe3a6a6-f8e6-11ee-a365-8d1d6df81cc5

 

Caveats

As of now, the new /content download URLs are only available for flagged orgs in STAGE. We have not yet promoted it to PROD.
The current implementation is buggy. We are working on fixing these issues in our current sprint:
The decision on whether to use the new /content download URL vs. the old zipfile download URL is currently being made based on the "X-Gw-Ims-Org-Id" (i.e., the gateway header). It should, instead, be based on the organization that created the job. This shouldn't matter to our customers, or you, because you can only see jobs that don't belong to your org if you're using a service token instead of a user token.
Normally, the "downloadUrl" is not present in the response JSON unless the job has status "complete". It appears that it is always being shown for flagged orgs, even before it's complete.
We seem to be providing a "downloadUrl" for all jobs of a flagged org -- even for "delete" jobs (which should never have a download URL).
 -->

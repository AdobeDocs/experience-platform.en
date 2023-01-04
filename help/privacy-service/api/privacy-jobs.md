---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Privacy Jobs API Endpoint
topic-legacy: developer guide
description: Learn how to manage privacy jobs for Experience Cloud applications using the Privacy Service API.
exl-id: 74a45f29-ae08-496c-aa54-b71779eaeeae
---
# Privacy jobs endpoint

This document covers how to work with privacy jobs using API calls. Specifically, it covers the use of the `/job` endpoint in the [!DNL Privacy Service] API. Before reading this guide, refer to the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls.

>[!NOTE]
>
>If you are trying to manage consent or opt-out requests from customers, refer to the [consent endpoint guide](./consent.md).

## List all jobs {#list}

You can view a list of all available privacy jobs within your organization by making a GET request to the `/jobs` endpoint.

**API format**

This request format uses a `regulation` query parameter on the `/jobs` endpoint, therefore it begins with a question mark (`?`) as shown below. The response is paginated, allowing you to use other query parameters (`page` and `size`) to filter the response. You can separate multiple parameters using ampersands (`&`).

```http
GET /jobs?regulation={REGULATION}
GET /jobs?regulation={REGULATION}&page={PAGE}
GET /jobs?regulation={REGULATION}&size={SIZE}
GET /jobs?regulation={REGULATION}&page={PAGE}&size={SIZE}
```

| Parameter | Description |
| --- | --- |
| `{REGULATION}` | The regulation type to query for. Accepted values include: <ul><li>`apa_aus`</li><li>`ccpa`</li><li>`cpra_usa`</li><li>`gdpr`</li><li>`hipaa_usa`</li><li>`lgpd_bra`</li><li>`nzpa_nzl`</li><li>`pdpa_tha`</li><li>`vcdpa_usa`</li></ul><br>See the overview on [supported regulations](../regulations/overview.md) for more information on the privacy regulations that the above values represent. |
| `{PAGE}` | The page of data to be displayed, using 0-based numbering. The default is `0`. |
| `{SIZE}` | The number of results to display on each page. The default is `1` and the maximum is `100`. Exceeding the maximum causes the API to return a 400-code error. |

{style="table-layout:auto"}

**Request**

The following request retrieves a paginated list of all jobs within an IMS Organization, starting from the third page with a page size of 50.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/privacy/jobs?regulation=gdpr&page=2&size=50 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}'
```

**Response**

A successful response returns a list of jobs, with each job containing details such as its `jobId`. In this example, the response would contain a list of 50 jobs, starting on the third page of results. 

### Accessing subsequent pages

To fetch the next set of results in a paginated response, you must make another API call to the same endpoint while increasing the `page` query parameter by 1.

## Create a privacy job {#create-job}

Before creating a new job request, you must first collect identifying information about the data subjects whose data you want to access, delete, or opt out of sale. Once you have the required data, it must be provided in the payload of a POST request to the `/jobs` endpoint.

>[!NOTE]
>
>Compatible Adobe Experience Cloud applications use different values for identifying data subjects. See the guide on [Privacy Service and Experience Cloud applications](../experience-cloud-apps.md) for more information on required identifiers for your application(s). For more general guidance on determining which IDs to send to [!DNL Privacy Service], see the document on [identity data in privacy requests](../identity-data.md).

The [!DNL Privacy Service] API supports two kinds of job requests for personal data:

* [Access and/or delete](#access-delete): Access (read) or delete personal data.
* [Opt out of sale](#opt-out): Mark personal data as not to be sold.

>[!IMPORTANT]
>
>While access and delete requests can be combined as a single API call, opt-out requests must be made separately.

### Create an access/delete job {#access-delete}

This section demonstrates how to make an access/delete job request using the API.

**API format**

```http
POST /jobs
```

**Request**

The following request creates a new job request, configured by the attributes supplied in the payload as described below.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/privacy/jobs \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -d '{
    "companyContexts": [
      {
        "namespace": "imsOrgID",
        "value": "{ORG_ID}"
      }
    ],
    "users": [
      {
        "key": "DavidSmith",
        "action": ["access"],
        "userIDs": [
          {
            "namespace": "email",
            "value": "dsmith@acme.com",
            "type": "standard"
          },
          {
            "namespace": "ECID",
            "type": "standard",
            "value":  "443636576799758681021090721276",
            "isDeletedClientSide": false
          }
        ]
      },
      {
        "key": "user12345",
        "action": ["access","delete"],
        "userIDs": [
          {
            "namespace": "email",
            "value": "ajones@acme.com",
            "type": "standard"
          },
          {
            "namespace": "loyaltyAccount",
            "value": "12AD45FE30R29",
            "type": "integrationCode"
          }
        ]
      }
    ],
    "include": ["Analytics", "AudienceManager","profileService"],
    "expandIds": false,
    "priority": "normal",
    "analyticsDeleteMethod": "anonymize",
    "mergePolicyId": 124,
    "regulation": "ccpa"
}'
```

| Property | Description |
| --- | --- |
| `companyContexts` **(Required)** | An array containing authentication information for your organization. Each listed identifier includes the following attributes: <ul><li>`namespace`: The namespace of an identifier.</li><li>`value`: The value of the identifier.</li></ul>It is **required** that one of the identifiers uses `imsOrgId` as its `namespace`, with its `value` containing the unique ID for your IMS Organization. <br/><br/>Additional identifiers can be product-specific company qualifiers (for example, `Campaign`), which identify an integration with an Adobe application belonging to your organization. Potential values include account names, client codes, tenant IDs, or other application identifiers. |
| `users` **(Required)** | An array containing a collection of at least one user whose information you would like to access or delete. A maximum of 1000 user IDs can be provided in a single request. Each user object contains the following information: <ul><li>`key`: An identifier for a user that is used to qualify the separate job IDs in the response data. It is best practice to choose a unique, easily identifiable string for this value so it can easily be referenced or looked up later.</li><li>`action`: An array that lists desired actions to take on the user's data. Depending on the actions you want to take, this array must include `access`, `delete`, or both.</li><li>`userIDs`: A collection of identities for the user. The number of identities a single user can have is limited to nine. Each identity consists of a `namespace`, a `value`, and a namespace qualifier (`type`). See the [appendix](appendix.md) for more details on these required properties.</li></ul> For a more detailed explanation of `users` and `userIDs`, see the [troubleshooting guide](../troubleshooting-guide.md#user-ids). |
| `include` **(Required)** | An array of Adobe products to include in your processing. If this value is missing or otherwise empty, the request will be rejected. Only include products that your organization has an integration with. See the section on [accepted product values](appendix.md) in the appendix for more information. |
| `expandIDs` | An optional property that, when set to `true`, represents an optimization for processing the IDs in the applications (currently only supported by [!DNL Analytics]). If omitted, this value defaults to `false`. |
| `priority` | An optional property used by Adobe Analytics that sets the priority for processing requests. Accepted values are `normal` and `low`. If `priority` is omitted, the default behavior is `normal`. |
| `analyticsDeleteMethod` | An optional property that specifies how Adobe Analytics should handle the personal data. Two possible values are accepted for this attribute: <ul><li>`anonymize`: All data referenced by the given collection of user IDs is made anonymous. If `analyticsDeleteMethod` is omitted, this is the default behavior.</li><li>`purge`: All data is removed completely.</li></ul> |
| `mergePolicyId` | When making privacy requests for Real-Time Customer Profile (`profileService`), you can optionally provide the ID of the specific [merge policy](../../profile/merge-policies/overview.md) that you want to use for ID stitching. By specifying a merge policy, privacy requests can include segment information when returning data on a customer. Only one merge policy can be specified per request. If no merge policy is provided, segmentation information is not included in the response. |
| `regulation` **(Required)** | The regulation for the privacy job. The following values are accepted: <ul><li>`apa_aus`</li><li>`ccpa`</li><li>`cpra_usa`</li><li>`gdpr`</li><li>`hipaa_usa`</li><li>`lgpd_bra`</li><li>`nzpa_nzl`</li><li>`pdpa_tha`</li><li>`vcdpa_usa`</li></ul><br>See the overview on [supported regulations](../regulations/overview.md) for more information on the privacy regulations that the above values represent. |

{style="table-layout:auto"}

**Response**

A successful response returns the details of the newly created jobs.

```json
{
    "jobs": [
        {
            "jobId": "6fc09b53-c24f-4a6c-9ca2-c6076b0842b6",
            "customer": {
                "user": {
                    "key": "DavidSmith",
                    "action": [
                        "access"
                    ]
                }
            }
        },
        {
            "jobId": "6fc09b53-c24f-4a6c-9ca2-c6076be029f3",
            "customer": {
                "user": {
                    "key": "user12345",
                    "action": [
                        "access"
                    ]
                }
            }
        },
        {
            "jobId": "6fc09b53-c24f-4a6c-9ca2-c6076bd023j1",
            "customer": {
                "user": {
                    "key": "user12345",
                    "action": [
                        "delete"
                    ]
                }
            }
        }
    ],
    "requestStatus": 1,
    "totalRecords": 3
}
```

| Property | Description |
| --- | --- |
| `jobId` | A read-only, unique system-generated ID for a job. This value is used in the next step of looking up a specific job. |

{style="table-layout:auto"}

Once you have successfully submitted the job request, you can proceed to the next step of [checking the job's status](#check-status).

## Check the status of a job {#check-status}

You can retrieve information about a specific job, such as its current processing status, by including that job's `jobId` in the path of a GET request to the `/jobs` endpoint.

>[!IMPORTANT]
>
>Data for previously created jobs is only available for retrieval within 30 days of the job's completion date.

**API format**

```http
GET /jobs/{JOB_ID}
```

| Parameter | Description |
| --- | --- |
| `{JOB_ID}` | The ID of the job you want to look up. This ID is returned under `jobId` in successful API responses for [creating a job](#create-job) and [listing all jobs](#list). |

{style="table-layout:auto"}

**Request**

The following request retrieves the details of the job whose `jobId` is provided in the request path.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/privacy/jobs/6fc09b53-c24f-4a6c-9ca2-c6076b0842b6 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}'
```

**Response**

A successful response returns the details of the specified job.

```json
{
    "jobId": "6fc09b53-c24f-4a6c-9ca2-c6076b0842b6",
    "requestId": "15700479082313109RX-899",
    "userKey": "David Smith",
    "action": "access",
    "status": "complete",
    "submittedBy": "{ACCOUNT_ID}",
    "createdDate": "10/02/2019 08:25 PM GMT",
    "lastModifiedDate": "10/02/2019 08:25 PM GMT",
    "userIds": [
        {
            "namespace": "email",
            "value": "dsmith@acme.com",
            "type": "standard",
            "namespaceId": 6,
            "isDeletedClientSide": false
        },
        {
            "namespace": "ECID",
            "value": "1123A4D5690B32A",
            "type": "standard",
            "namespaceId": 4,
            "isDeletedClientSide": false
        }
    ],
    "productResponses": [
        {
            "product": "Analytics",
            "retryCount": 0,
            "processedDate": "10/02/2019 08:25 PM GMT",
            "productStatusResponse": {
                "status": "complete",
                "message": "Success",
                "responseMsgCode": "PRVCY-6000-200",
                "responseMsgDetail": "Finished successfully."
            }
        },
        {
            "product": "Profile",
            "retryCount": 0,
            "processedDate": "10/02/2019 08:25 PM GMT",
            "productStatusResponse": {
                "status": "complete",
                "message": "Success",
                "responseMsgCode": "PRVCY-6000-200",
                "responseMsgDetail": "Success dataSetIds = [5dbb87aad37beb18a96feb61], Failed dataSetIds = []"
            }
        },
        {
            "product": "AudienceManager",
            "retryCount": 0,
            "processedDate": "10/02/2019 08:25 PM GMT",
            "productStatusResponse": {
                "status": "complete",
                "message": "Success",
                "responseMsgCode": "PRVCY-6054-200",
                "responseMsgDetail": "PARTIALLY COMPLETED- Data not found for some requests, check results for more info.",
                "results": {
                  "processed": ["1123A4D5690B32A"],
                  "ignored": ["dsmith@acme.com"]
                }
            }
        }
    ],
    "downloadURL": "http://...",
    "regulation": "ccpa"
}
```

| Property | Description |
| --- | --- |
| `productStatusResponse` | Each object within the `productResponses` array contains information about the current status of the job with respect to a specific [!DNL Experience Cloud] application.|
| `productStatusResponse.status` | The job's current status category. See the table below for a list of [available status categories](#status-categories) and their corresponding meanings. |
| `productStatusResponse.message` | The job's specific status, corresponding to the status category. |
| `productStatusResponse.responseMsgCode` | A standard code for product response messages received by [!DNL Privacy Service]. The details of the message are provided under `responseMsgDetail`. |
| `productStatusResponse.responseMsgDetail` | A more detailed explanation of the job's status. Messages for similar statuses may vary between products.|
| `productStatusResponse.results` | For certain statuses, some products may return a `results` object that provides additional information not covered by `responseMsgDetail`. |
| `downloadURL` | If the status of the job is `complete`, this attribute provides a URL to download the job results as a ZIP file. This file is available to download for 60 days after the job completes. |

{style="table-layout:auto"}

### Job status categories {#status-categories}

The following table lists the different possible job status categories and their corresponding meaning:

| Status category | Meaning |
| -------------- | -------- |
| `complete` | Job is complete and (if required) files are uploaded from every application. |
| `processing` | Applications have acknowledged the job and are currently processing. |
| `submitted` | Job is submitted to every applicable application. |
| `error` | Something failed in the processing of the job - more specific information may be obtained by retrieving individual job details. |

{style="table-layout:auto"}

>[!NOTE]
>
>A submitted job might remain in a `processing` state if it has a dependent child job that is still processing.

## Next steps

You now know how to create and monitor privacy jobs using the [!DNL Privacy Service] API. For information on how to perform the same tasks using the user interface, see the [Privacy Service UI overview](../ui/overview.md).

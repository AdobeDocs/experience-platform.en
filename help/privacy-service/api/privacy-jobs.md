---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Jobs
topic: developer guide
---

# Privacy jobs

The following sections walk through calls you can make using the root endpoint (`/`) in the Privacy Service API. Each call includes the general API format, a sample request showing required headers, and a sample response.

## Create a privacy job

Before creating a new job request, you must first collect identifying information about the data subjects whose data you want to access, delete, or opt out of sale. Once you have the required data, it must be provided in the payload of a POST request to the root endpoint.

>[!NOTE] Compatible Adobe Experience Cloud applications use different values for identifying data subjects. See the guide on [Privacy Service and Experience Cloud applications](../experience-cloud-apps.md) for more information on required identifiers for your application(s).

The Privacy Service API supports two kinds of job requests for personal data:

* [Access and/or delete](#create-an-access/delete-job): Access (read) or delete personal data.
* [Opt out of sale](#create-an-opt-out-of-sale-job): Mark personal data as not to be sold.

>[!IMPORTANT] While access and delete requests can be combined as a single API call, opt-out requests must be made separately.

### Create an access/delete job

This section demonstrates how to make an access/delete job request using the API.

**API format**

```http
POST /
```

**Request**

The following request creates a new job request, configured by the attributes supplied in the payload as described below.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/privacy/jobs \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -d '{
    "companyContexts": [
      {
        "namespace": "imsOrgID",
        "value": "{IMS_ORG}"
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
    "include": ["Analytics", "AudienceManager"],
    "expandIds": false,
    "priority": "normal",
    "analyticsDeleteMethod": "anonymize",
    "regulation": "ccpa"
}'
```

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

Once you have successfully submitted the job request, you can proceed to the next step of [checking the job's status](#check-the-status-of-a-job).

### Create an opt-out-of-sale job

This section demonstrates how to make an opt-out-of-sale job request using the API.

**API format**

```http
POST /
```

**Request**

The following request creates a new job request, configured by the attributes supplied in the payload as described below.

```shell
curl -X POST \
  https://platform.adobe.io/data/privacy/gdpr/ \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -d '{
    "companyContexts": [
      {
        "namespace": "imsOrgID",
        "value": "{IMS_ORG}"
      }
    ],
    "users": [
      {
        "key": "DavidSmith",
        "action": ["opt-out-of-sale"],
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
        "action": ["opt-out-of-sale"],
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
    "include": ["Analytics", "AudienceManager"],
    "expandIds": false,
    "priority": "normal",
    "analyticsDeleteMethod": "anonymize",
    "regulation": "ccpa"
}'
```

**Response**

A successful response returns the details of the newly created jobs.

```json
{
    "jobs": [
        {
            "jobId": "6fc09b53-c24f-4a6c-9ca2-c6076bd9vjs0",
            "customer": {
                "user": {
                    "key": "DavidSmith",
                    "action": [
                        "opt-out-of-sale"
                    ]
                }
            }
        },
        {
            "jobId": "6fc09b53-c24f-4a6c-9ca2-c6076bes0ewj2",
            "customer": {
                "user": {
                    "key": "user12345",
                    "action": [
                        "opt-out-of-sale"
                    ]
                }
            }
        }
    ],
    "requestStatus": 1,
    "totalRecords": 2
}
```

| Property | Description |
| --- | --- |
| `jobId` | A read-only, unique system-generated ID for a job. This value is used to look up a specific job in the next step. |

Once you have successfully submitted the job request, you can proceed to the next step of checking the job's status.

## Check the status of a job

Using one of the `jobId` values returned in the previous step, you can retrieve information about that job, such as its current processing status.

>[!IMPORTANT] Data for previously created jobs is only available for retrieval within 30 days of the job's completion date.

**API format**

```http
GET /{JOB_ID}
```

| Parameter | Description |
| --- | --- |
| `{JOB_ID}` | The ID of the job you want to look up, returned under `jobId` in the response of the [previous step](#create-a-job-request). |

**Request**

The following request retrieves the details of the job whose `jobId` is provided in the request path.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/privacy/jobs/6fc09b53-c24f-4a6c-9ca2-c6076b0842b6 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
```

**Response**

A successful response returns the details of the specified job.

```json
{
    "jobId": "527ef92d-6cd9-45cc-9bf1-477cfa1e2ca2",
    "requestId": "15700479082313109RX-899",
    "userKey": "David Smith",
    "action": "access",
    "status": "error",
    "submittedBy": "02b38adf-6573-401e-b4cc-6b08dbc0e61c@techacct.adobe.com",
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
                "status": "submitted",
                "message": "processing"
            }
        },
        {
            "product": "AudienceManager",
            "retryCount": 0,
            "processedDate": "10/02/2019 08:25 PM GMT",
            "productStatusResponse": {
                "status": "submitted",
                "message": "processing"
            }
        }
    ],
    "downloadURL": "http://...",
    "regulation": "ccpa"
}
```

| Property | Description |
| --- | --- |
| `productStatusResponse` | The current status of the job. Details about each possible status are provided in the table below. |
| `downloadURL` | If the status of the job is `complete`, this attribute provides a URL to download the job results as a ZIP file. This file is available to download for 60 days after the job completes. |

### Job status responses

The following table lists the different possible job statuses and their corresponding meaning:

| Status Code | Status Message | Meaning |
| ----------- | -------------- | -------- |
| 1 | Complete | Job is complete and (if required) files are uploaded from every application. |
| 2 | Processing | Applications have acknowledged the job and are currently processing. |
| 3 | Submitted | Job is submitted to every applicable application. |
| 4 | Error | Something failed in the processing of the job - more specific information may be obtained by retrieving individual job details. |

>[!NOTE] A submitted job might remain in a processing state if it has a dependent child job that is still processing.

## List all jobs

You can view a list of all available job requests within your organization by making a GET request to the root (`/`) endpoint.

**API format**

This request format uses a `regulation` query parameter on the root (`/`) endpoint, therefore it begins with a question mark (`?`) as shown below. The response is paginated, allowing you to use other query parameters (`page` and `size`) to filter the response. You can separate multiple parameters using ampersands (`&`).

```http
GET ?regulation={REGULATION}
GET ?regulation={REGULATION}&page={PAGE}
GET ?regulation={REGULATION}&size={SIZE}
GET ?regulation={REGULATION}&page={PAGE}&size={SIZE}
```

| Parameter | Description |
| --- | --- |
| `{REGULATION}` | The regulation type to query for. Accepted values are `gdpr` and `ccpa`. |
| `{PAGE}` | The page of data to be displayed, using 0-based numbering. The default is `0`. |
| `{SIZE}` | The number of results to display on each page. The default is `1` and the maximum is `100`. Exceeding the maximum causes the API to return a 400-code error. |

**Request**

The following request retrieves a paginated list of all jobs within an IMS Organization, starting from the third page with a page size of 50.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/privacy/jobs?regulation=gdpr&page=2&size=50 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
```

**Response**

A successful response returns a list of jobs, with each job containing details such as its `jobId`. In this example, the response would contain a list of 50 jobs, starting on the third page of results. 

### Accessing subsequent pages

To fetch the next set of results in a paginated response, you must make another API call to the same endpoint while increasing the `page` query parameter by 1.

## Next steps

You now know how to create and monitor privacy jobs using the Privacy Service API. For information on how to perform the same tasks using the user interface, see the [Privacy Service UI overview](../ui/overview.md).

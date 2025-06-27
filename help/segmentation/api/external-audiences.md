---
title: External Audiences API Endpoint
description: Learn how to use the external audiences API to
---

# External audiences endpoint

intro blurb

## Getting started

>[!IMPORTANT]
>
>The endpoints in this guide are prefixed with `/core/ais`, as opposed to `/core/ups`.

## Create submit request {#create-submit}

You can create a submit request by making a POST request to the `/external-audience/submit` endpoint. A submit request is used to create the external audience, and contains details of the location of the external audience through the source specification.

**API format**

```http
POST /external-audience/submit
```

**Request**

+++ A sample request to create a submit request.

+++

**Response**

A successful response returns HTTP status 200 with details of your submit request.

+++ A sample response when creating a submit request.

+++

## Retrieve audience task status {#retrieve-status}

You can retrieve the status of your external audience submission by making a GET request to the `/external-audiences/task` endpoint and providing the ID of the task you received from the submit request response.

**API format**

```http
GET /external-audiences/task/{TASK_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{TASK_ID}` | The `id` value of the task you want to retrieve. |
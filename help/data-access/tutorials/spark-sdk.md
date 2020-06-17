---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Secure Spark Data Access SDK
topic: tutorial
---

# Secure Spark Data Access SDK

The Secure Spark Data Access SDK is a software development kit that enables reading and writing of datasets from Adobe Experience Platform.

## Getting started

You are required to have completed the [authentication](../../tutorials/authentication.md) tutorial in order to have access to the values to make calls to the Secure Spark Data Access SDK:

- `{ACCESS_TOKEN}`
- `{API_KEY}`
- `{IMS_ORG}`

All resources in Experience Platform are isolated to specific virtual sandboxes. Using the Python SDK requires the name and the ID of the sandbox the operation will take place in:

- `{SANDBOX_NAME}`
- `{SANDBOX_ID}`

For more information on sandboxes in Platform, see the [sandbox overview documentation](../../sandboxes/home.md). 

## Environment setup

The Spark SDK expects you to provide credentials in environment variables or Data Source options.

| Variable | Value |
| -------- | ----- | 
| `SERVICE_TOKEN` | Your service authorization token. |
| `SERVICE_API_KEY` | Your service API key. This generally is the same as your IMS Client ID. |
| `ORG_ID` | Your `{IMS_ORG}` ID value. |
| `USER_TOKEN` | Your `{ACCESS_TOKEN}` value. |

Other configuration parameters include:

| Variable | Value |
| -------- | ----- |
| `ENVIRONMENT_NAME` | The environment you are trying to connect to. It can be one of "dev", "stage", or "prod". |
| `SANDBOX_NAME` | The name of the sandbox you are connecting to. |

Alternatively, aside from `ENVIRONMENT_NAME`, you can set any of the above environment variables within `QSOption`, as seen in the example below:

```python
    val df = spark.read
      .format("com.adobe.platform.query")
      .option(QSOption.userToken, userToken) // same as env var USER_TOKEN
      .option(QSOption.imsOrg, "69A7534C5808063C0A494234@AdobeOrg") // same as env var ORG_ID
      .option(QSOption.apiKey, "acp_foundation_queryService") // same as env var SERVICE_API_KEY
      .option("mode", "interactive")
      .option("query", "SELECT * FROM csv10000row_xcm_001 LIMIT 10")
      .load()
```

## Installation

???

## Reading a dataset

The Spark SDK supports two modes of reading: interactive and batch.

Interactive mode creates a Java Database Connectivity (JDBC) connection to Query Service and gets results through a regular JDBC `ResultSet` that is automatically translated to a `DataFrame`. This mode works similarly to the built-in Spark method `spark.read.jdbc()`. This mode is meant only for small datasets and only requires a user token for authentication.

Batch mode uses Query Service's COPY command to generate Parquet result sets in a shared location. These Parquet files can then be further processed. This mode requires both a user token and a service token with the `acp.foundation.catalog.credentials` scope.

An example of 
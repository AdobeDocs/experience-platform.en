---
keywords: Experience Platform;home;popular topics;data access;spark sdk;data access api
solution: Experience Platform
title: Secure Spark Data Access SDK
topic: tutorial
type: Tutorial
description: The Secure Spark Data Access SDK is a software development kit that enables reading and writing of datasets from Adobe Experience Platform.
---

# Secure [!DNL Spark Data Access] SDK

The Secure [!DNL Spark] [!DNL Data Access] SDK is a software development kit that enables reading and writing of datasets from Adobe Experience Platform.

## Getting started

You are required to have completed the [authentication](../../tutorials/authentication.md) tutorial in order to have access to the values to make calls to the Secure [!DNL Spark] [!DNL Data Access] SDK:

- `{ACCESS_TOKEN}`
- `{API_KEY}`
- `{IMS_ORG}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. Using the [!DNL Spark] SDK requires the name and the ID of the sandbox the operation will take place in:

- `{SANDBOX_NAME}`
- `{SANDBOX_ID}`

For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

## Environment setup

The [!DNL Spark] SDK expects you to provide credentials in environment variables or Data Source options.

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

```scala
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

Using the [!DNL Spark] SDK requires performance optimizations that need to be added to the `SparkSession`. You can apply them by using one of the following methods:

Apply it directly to the current SparkSession:

```scala
import com.adobe.platform.query.QSOptimizations
QSOptimizations.apply(spark)
```

Set the following conf before, or on SparkSession creation:

```scala
spark.sql.extensions = com.adobe.platform.query.QSSparkSessionExtensions
```

## Reading a dataset

The [!DNL Spark] SDK supports two modes of reading: interactive and batch.

Interactive mode creates a Java Database Connectivity (JDBC) connection to [!DNL Query Service] and gets results through a regular JDBC `ResultSet` that is automatically translated to a `DataFrame`. This mode works similarly to the built-in [!DNL Spark] method `spark.read.jdbc()`. This mode is meant only for small datasets and only requires a user token for authentication.

Batch mode uses [!DNL Query Service]'s COPY command to generate Parquet result sets in a shared location. These Parquet files can then be further processed. This mode requires both a user token and a service token with the `acp.foundation.catalog.credentials` scope.

An example of reading a dataset in interactive mode can be seen below:

```scala
val df = spark.read
      .format("com.adobe.platform.query")
      .option("user-token", {USER_TOKEN})
      .option("ims-org", {IMS_ORG})
      .option("api-key", {SERVICE_API_KEY})
      .option("mode", "interactive")
      .option("dataset-id", {DATASET_ID})
      .option("sandbox-name", {SANDBOX_NAME})
      .load()
df.show()
```

Similarly, an example of reading a dataset in batch mode can be seen below:

```scala
val df = spark.read
      .format("com.adobe.platform.query")
      .option("user-token", {USER_TOKEN})
      .option("service-token", {SERVICE_TOKEN})
      .option("ims-org", {IMS_ORG})
      .option("api-key", {SERVICE_API_KEY})
      .option("mode", "batch")
      .option("dataset-id", {DATASET_ID})
      .option("sandbox-name", {SANDBOX_NAME})
      .load()
df.show()
```

### SELECT columns from the dataset

```scala
df = df.select("column-a", "column-b").show()
```

### DISTINCT clause

The DISTINCT clause allows you to fetch all the distinct values at a row/column level, removing all duplicate values from the response.

An example of using the `distinct()` function can be seen below:

```scala
df = df.select("column-a", "column-b").distinct().show()
```

### WHERE clause

The [!DNL Spark] SDK allows for two methods for filtering: Using an SQL expression or by filtering through conditions.

An example of using these filtering functions can be seen below:

#### SQL expression

```scala
df.where("age > 15")
```

#### Filtering conditions

```scala
df.where("age" > 15 || "name" = "Steve")
```

### ORDER BY clause

The ORDER BY clause allows received results to be sorted by a specified column in a specific order (ascending or descending). In the [!DNL Spark] SDK, this is done by using the `sort()` function.

An example of using the `sort()` function can be seen below:

```scala
df = df.sort($"column1", $"column2".desc)
```

### LIMIT clause

The LIMIT clause allows users to limit the number of records received from the dataset.

An example of using the `limit()` function can be seen below:

```scala
df = df.limit(100)
```

## Writing to a dataset

The [!DNL Spark] SDK supports writing datasets. Users will first need to retrieve a previous dataset to write to a new dataset.

```scala
val df = spark.read
      .format("com.adobe.platform.query")
      .option("user-token", userToken)
      .option("ims-org", "{IMS_ORG}")
      .option("api-key", "{API_KEY}")
      .option("mode", "interactive")
      .option("dataset-id", "{DATASET_ID}")
      .load()

    df.write
      .format("com.adobe.platform.query")
      .option("user-token", {USER_TOKEN})
      .option("service-token", {SERVICE_TOKEN})
      .option("ims-org", "{IMS_ORG_ID})
      .option("api-key", "{API_KEY}")
      .option("create-dataset", "{DATASET_ID}")
      .save()
```
---
keywords: Experience Platform;home;popular topics;data access;spark sdk;data access api;spark recipe;read spark;write spark
solution: Experience Platform
title: Accessing Data Using Spark in Data Science Workspace
type: Tutorial
description: The following document contains examples on how to access data using Spark for use in Data Science Workspace.
exl-id: 9bffb52d-1c16-4899-b455-ce570d76d3b4
---
# Accessing data using Spark in Data Science Workspace

The following document contains examples on how to access data using Spark for use in Data Science Workspace. For information on accessing data using JupyterLab notebooks, visit the [JupyterLab notebooks data access](../jupyterlab/access-notebook-data.md) documentation.

## Getting Started

Using [!DNL Spark] requires performance optimizations that need to be added to the `SparkSession`. Additionally, you can also setup `configProperties` for later to read and write to datasets.

```scala
import com.adobe.platform.ml.config.ConfigProperties
import com.adobe.platform.query.QSOption
import org.apache.spark.sql.{DataFrame, SparkSession}

Class Helper {

 /**
   *
   * @param configProperties - Configuration Properties map
   * @param sparkSession     - SparkSession
   * @return                 - DataFrame which is loaded for training
   */

   def load_dataset(configProperties: ConfigProperties, sparkSession: SparkSession, taskId: String): DataFrame = {
            // Read the configs
            val userToken: String = sparkSession.sparkContext.getConf.get("ML_FRAMEWORK_IMS_TOKEN", "").toString
            val orgId: String = sparkSession.sparkContext.getConf.get("ML_FRAMEWORK_IMS_ORG_ID", "").toString
            val apiKey: String = sparkSession.sparkContext.getConf.get("ML_FRAMEWORK_IMS_CLIENT_ID", "").toString
            val sandboxName: String = sparkSession.sparkContext.getConf.get("sandboxName", "").toString

   }
}
```

## Reading a dataset

While using Spark you have access to two modes of reading: interactive and batch.

Interactive mode creates a Java Database Connectivity (JDBC) connection to [!DNL Query Service] and gets results through a regular JDBC `ResultSet` that is automatically translated to a `DataFrame`. This mode works similarly to the built-in [!DNL Spark] method `spark.read.jdbc()`. This mode is meant only for small datasets. If your dataset exceeds 5 million rows, it is suggested you swap to batch mode.

Batch mode uses [!DNL Query Service]'s COPY command to generate Parquet result sets in a shared location. These Parquet files can then be further processed.

An example of reading a dataset in interactive mode can be seen below:

```scala
  // Read the configs
    val userToken: String = sparkSession.sparkContext.getConf.get("ML_FRAMEWORK_IMS_TOKEN", "").toString
    val orgId: String = sparkSession.sparkContext.getConf.get("ML_FRAMEWORK_IMS_ORG_ID", "").toString
    val apiKey: String = sparkSession.sparkContext.getConf.get("ML_FRAMEWORK_IMS_CLIENT_ID", "").toString
    val sandboxName: String = sparkSession.sparkContext.getConf.get("sandboxName", "").toString

 val dataSetId: String = configProperties.get(taskId).getOrElse("")

    // Load the dataset
    var df = sparkSession.read.format(PLATFORM_SDK_PQS_PACKAGE)
      .option(QSOption.userToken, userToken)
      .option(QSOption.imsOrg, orgId)
      .option(QSOption.apiKey, apiKey)
      .option(QSOption.mode, "interactive")
      .option(QSOption.datasetId, dataSetId)
      .option(QSOption.sandboxName, sandboxName)
      .load()
    df.show()
    df
  }
```

Similarly, an example of reading a dataset in batch mode can be seen below:

```scala
val df = sparkSession.read.format(PLATFORM_SDK_PQS_PACKAGE)
      .option(QSOption.userToken, userToken)
      .option(QSOption.imsOrg, orgId)
      .option(QSOption.apiKey, apiKey)
      .option(QSOption.mode, "batch")
      .option(QSOption.datasetId, dataSetId)
      .option(QSOption.sandboxName, sandboxName)
      .load()
    df.show()
    df
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

The LIMIT clause allows you to limit the number of records received from the dataset.

An example of using the `limit()` function can be seen below:

```scala
df = df.limit(100)
```

## Writing to a dataset

Using your `configProperties` mapping, you can write to a dataset in Experience Platform using `QSOption`. 

```scala

val userToken: String = sparkSession.sparkContext.getConf.get("ML_FRAMEWORK_IMS_TOKEN", "").toString
val orgId: String = sparkSession.sparkContext.getConf.get("ML_FRAMEWORK_IMS_ORG_ID", "").toString
val apiKey: String = sparkSession.sparkContext.getConf.get("ML_FRAMEWORK_IMS_CLIENT_ID", "").toString
val sandboxName: String = sparkSession.sparkContext.getConf.get("sandboxName", "").toString 

    df.write.format(PLATFORM_SDK_PQS_PACKAGE)
      .option(QSOption.userToken, userToken)
      .option(QSOption.imsOrg, orgId)
      .option(QSOption.apiKey, apiKey)
      .option(QSOption.datasetId, scoringResultsDataSetId)
      .option(QSOption.sandboxName, sandboxName)
      .save()
```


## Next steps

Adobe Experience Platform Data Science Workspace provides a Scala (Spark) recipe sample that uses the above code samples to read and write data. If you want to learn more about how to use Spark for accessing your data, please review the [Data Science Workspace Scala GitHub Repository](https://github.com/adobe/experience-platform-dsw-reference/tree/master/recipes/scala).

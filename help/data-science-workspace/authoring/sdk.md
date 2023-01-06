---
keywords: Experience Platform;developer guide;SDK;Model authoring;Data Science Workspace;popular topics;testing
solution: Experience Platform
title: Model Authoring SDK
description: The Model Authoring SDK enables you to develop custom machine learning Recipes and Feature Pipelines which can be used in Adobe Experience Platform Data Science Workspace, providing implementable templates in PySpark and Spark (Scala).
exl-id: c7577f93-a64f-49b7-a76d-71f21d619052
---
# Model Authoring SDK

The Model Authoring SDK enables you to develop custom machine learning Recipes and Feature Pipelines which can be used in [!DNL Adobe Experience Platform] Data Science Workspace, providing implementable templates in [!DNL PySpark] and [!DNL Spark (Scala)].

This document provides information regarding the various classes found within the Model Authoring SDK.

## DataLoader {#dataloader}

The DataLoader class encapsulates anything related to the retrieving, filtering, and returning of raw input data. Examples of input data include those for training, scoring, or feature engineering. Data loaders extend the abstract class `DataLoader` and must override the abstract method `load`.

**PySpark**

The following table describes the abstract methods of a PySpark Data Loader class:

<table>
    <thead>
        <tr>
            <th>Method and description</th>
            <th>Parameters</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p><code>load(self, configProperties, spark)</code></p>
                <p>Load and return Platform data as a Pandas DataFrame</p>
            </td>
            <td>
                <ul>
                    <li><code>self</code>: Self reference</li>
                    <li><code>configProperties</code>: Configuration properties map</li>
                    <li><code>spark</code>: Spark session</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

**Spark**

The following table describes the abstract methods of a [!DNL Spark] Data Loader class:

<table>
    <thead>
        <tr>
            <th>Method and description</th>
            <th>Parameters</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p><code>load(configProperties, sparkSession)</code></p>
                <p>Load and return Platform data as a DataFrame</p>
            </td>
            <td>
                <ul>
                    <li><code>configProperties</code>: Configuration properties map</li>
                    <li><code>sparkSession</code>: Spark session</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### Load data from a [!DNL Platform] dataset {#load-data-from-a-platform-dataset}

The following example retrieves [!DNL Platform] data by ID and returns a DataFrame, where the dataset ID (`datasetId`) is a defined property in the configuration file.

**PySpark**

```python
# PySpark

from sdk.data_loader import DataLoader

class MyDataLoader(DataLoader):
    """
    Implementation of DataLoader which loads a DataFrame and prepares data
    """

    def load_dataset(config_properties, spark, task_id):

        PLATFORM_SDK_PQS_PACKAGE = "com.adobe.platform.query"
        PLATFORM_SDK_PQS_INTERACTIVE = "interactive"

        # prepare variables
        service_token = str(spark.sparkContext.getConf().get("ML_FRAMEWORK_IMS_ML_TOKEN"))
        user_token = str(spark.sparkContext.getConf().get("ML_FRAMEWORK_IMS_TOKEN"))
        org_id = str(spark.sparkContext.getConf().get("ML_FRAMEWORK_IMS_ORG_ID"))
        api_key = str(spark.sparkContext.getConf().get("ML_FRAMEWORK_IMS_CLIENT_ID"))

        dataset_id = str(config_properties.get(task_id))

        # validate variables
        for arg in ['service_token', 'user_token', 'org_id', 'dataset_id', 'api_key']:
            if eval(arg) == 'None':
                raise ValueError("%s is empty" % arg)

        # load dataset through Spark session

        query_options = get_query_options(spark.sparkContext)

        pd = spark.read.format(PLATFORM_SDK_PQS_PACKAGE) \
            .option(query_options.userToken(), user_token) \
            .option(query_options.serviceToken(), service_token) \
            .option(query_options.imsOrg(), org_id) \
            .option(query_options.apiKey(), api_key) \
            .option(query_options.mode(), PLATFORM_SDK_PQS_INTERACTIVE) \
            .option(query_options.datasetId(), dataset_id) \
            .load()
        pd.show()

        # return as DataFrame
        return pd
```

**Spark (Scala)**

```scala
// Spark

package com.adobe.platform.ml

import java.time.LocalDateTime

import com.adobe.platform.ml.config.ConfigProperties
import com.adobe.platform.query.QSOption
import org.apache.spark.ml.feature.StringIndexer
import org.apache.spark.sql.expressions.Window
import org.apache.spark.sql.functions._
import org.apache.spark.sql.types.{StructType, TimestampType}
import org.apache.spark.sql.{DataFrame, SparkSession}
import org.apache.spark.sql.Column

/**
 * Implementation of DataLoader which loads a DataFrame and prepares data
 */
class MyDataLoader extends DataLoader {

    final val PLATFORM_SDK_PQS_PACKAGE: String = "com.adobe.platform.query"
    final val PLATFORM_SDK_PQS_INTERACTIVE: String = "interactive"
    final val PLATFORM_SDK_PQS_BATCH: String = "batch"

    /**
    *
    * @param configProperties - Configuration Properties map
    * @param sparkSession     - SparkSession
    * @return                 - DataFrame which is loaded for training
    */


  def load_dataset(configProperties: ConfigProperties, sparkSession: SparkSession, taskId: String): DataFrame = {

    require(configProperties != null)
    require(sparkSession != null)

    // Read the configs
    val serviceToken: String = sparkSession.sparkContext.getConf.get("ML_FRAMEWORK_IMS_ML_TOKEN", "").toString
    val userToken: String = sparkSession.sparkContext.getConf.get("ML_FRAMEWORK_IMS_TOKEN", "").toString
    val orgId: String = sparkSession.sparkContext.getConf.get("ML_FRAMEWORK_IMS_ORG_ID", "").toString
    val apiKey: String = sparkSession.sparkContext.getConf.get("ML_FRAMEWORK_IMS_CLIENT_ID", "").toString

    val dataSetId: String = configProperties.get(taskId).getOrElse("")

    // Load the dataset
    var df = sparkSession.read.format(PLATFORM_SDK_PQS_PACKAGE)
      .option(QSOption.userToken, userToken)
      .option(QSOption.serviceToken, serviceToken)
      .option(QSOption.imsOrg, orgId)
      .option(QSOption.apiKey, apiKey)
      .option(QSOption.mode, PLATFORM_SDK_PQS_INTERACTIVE)
      .option(QSOption.datasetId, dataSetId)
      .load()
    df.show()
    df
    }
}
```

## DataSaver {#datasaver}

The DataSaver class encapsulates anything related to storing output data including those from scoring or feature engineering. Data savers extend the abstract class `DataSaver` and must override the abstract method `save`.

**PySpark**

The following table describes the abstract methods of a [!DNL PySpark] Data Saver class:

<table>
    <thead>
        <tr>
            <th>Method and description</th>
            <th>Parameters</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p><code>save(self, configProperties, dataframe)</code></p>
                <p>Receive output data as a DataFrame and stores it in a Platform dataset</p>
            </td>
            <td>
                <ul>
                    <li><code>self</code>: Self reference</li>
                    <li><code>configProperties</code>: Configuration properties map</li>
                    <li><code>dataframe</code>: Data to be stored in the form of a DataFrame</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

**Spark (Scala)**

The following table describes the abstract methods of a [!DNL Spark] Data Saver class:

<table>
    <thead>
        <tr>
            <th>Method and description</th>
            <th>Parameters</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p><code>save(configProperties, dataFrame)</code></p>
                <p>Receive output data as a DataFrame and stores it in a Platform dataset</p>
            </td>
            <td>
                <ul>
                    <li><code>configProperties</code>: Configuration properties map</li>
                    <li><code>dataFrame</code>: Data to be stored in the form of a DataFrame</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### Save data to a [!DNL Platform] dataset {#save-data-to-a-platform-dataset}

In order to store data onto a [!DNL Platform] dataset, the properties must be either provided or defined in the configuration file:

- A valid [!DNL Platform] dataset ID to which data will be stored
- The tenant ID belonging to your organization

The following examples store data (`prediction`) onto a [!DNL Platform] dataset, where the dataset ID (`datasetId`) and tenant ID (`tenantId`) are defined properties within the configuration file.


**PySpark**

```python
# PySpark

from sdk.data_saver import DataSaver
from pyspark.sql.types import StringType, TimestampType
from pyspark.sql.functions import col, lit, struct
from .helper import *


class MyDataSaver(DataSaver):
    """
    Implementation of DataSaver which stores a DataFrame to a Platform dataset
    """

    def save(self, config_properties, prediction):

        # Spark context
        sparkContext = prediction._sc

        # preliminary checks
        if config_properties is None:
            raise ValueError("config_properties parameter is null")
        if prediction is None:
            raise ValueError("prediction parameter is null")
        if sparkContext is None:
            raise ValueError("sparkContext parameter is null")
        
        PLATFORM_SDK_PQS_PACKAGE = "com.adobe.platform.query"

        # prepare variables
        scored_dataset_id = str(config_properties.get("scoringResultsDataSetId"))
        tenant_id = str(config_properties.get("tenant_id"))
        timestamp = "2019-01-01 00:00:00"

        service_token = str(sparkContext.getConf().get("ML_FRAMEWORK_IMS_ML_TOKEN"))
        user_token = str(sparkContext.getConf().get("ML_FRAMEWORK_IMS_TOKEN"))
        org_id = str(sparkContext.getConf().get("ML_FRAMEWORK_IMS_ORG_ID"))
        api_key = str(sparkContext.getConf().get("ML_FRAMEWORK_IMS_CLIENT_ID"))

        # validate variables
       for arg in ['service_token', 'user_token', 'org_id', 'scored_dataset_id', 'api_key', 'tenant_id']:
            if eval(arg) == 'None':
                raise ValueError("%s is empty" % arg)
        
        scored_df = prediction.withColumn("date", col("date").cast(StringType()))
        scored_df = scored_df.withColumn(tenant_id, struct(col("date"), col("store"), col("prediction")))
        scored_df = scored_df.withColumn("timestamp", lit(timestamp).cast(TimestampType()))
        scored_df = scored_df.withColumn("_id", lit("empty"))
        scored_df = scored_df.withColumn("eventType", lit("empty")

        # store data into dataset

        query_options = get_query_options(sparkContext)

        scored_df.select(tenant_id, "_id", "eventType", "timestamp").write.format(PLATFORM_SDK_PQS_PACKAGE) \
            .option(query_options.userToken(), user_token) \
            .option(query_options.serviceToken(), service_token) \
            .option(query_options.imsOrg(), org_id) \
            .option(query_options.apiKey(), api_key) \
            .option(query_options.datasetId(), scored_dataset_id) \
            .save()
```

**Spark (Scala)**

```scala
// Spark

package com.adobe.platform.ml

import com.adobe.platform.ml.config.ConfigProperties
import com.adobe.platform.ml.impl.Constants
import com.adobe.platform.ml.sdk.DataSaver
import com.adobe.platform.query.QSOption
import org.apache.spark.sql.DataFrame
import org.apache.spark.sql.functions._
import org.apache.spark.sql.types.TimestampType

/**
 * Implementation of DataSaver which stores a DataFrame to a Platform dataset
 */

class ScoringDataSaver extends DataSaver {

  final val PLATFORM_SDK_PQS_PACKAGE: String = "com.adobe.platform.query"
  final val PLATFORM_SDK_PQS_BATCH: String = "batch"

  /**
    * Method that saves the scoring data into a dataframe
    * @param configProperties  - Configuration Properties map
    * @param dataFrame         - Dataframe with the scoring results
    */
    
  override def save(configProperties: ConfigProperties, dataFrame: DataFrame): Unit =  {

    require(configProperties != null)
    require(dataFrame != null)

    val predictionColumn = configProperties.get(Constants.PREDICTION_COL).getOrElse(Constants.DEFAULT_PREDICTION)
    val sparkSession = dataFrame.sparkSession

    val serviceToken: String = sparkSession.sparkContext.getConf.get("ML_FRAMEWORK_IMS_ML_TOKEN", "").toString
    val userToken: String = sparkSession.sparkContext.getConf.get("ML_FRAMEWORK_IMS_TOKEN", "").toString
    val orgId: String = sparkSession.sparkContext.getConf.get("ML_FRAMEWORK_IMS_ORG_ID", "").toString
    val apiKey: String = sparkSession.sparkContext.getConf.get("ML_FRAMEWORK_IMS_CLIENT_ID", "").toString
    val tenantId:String = configProperties.get("tenantId").getOrElse("")
    val timestamp:String = "2019-01-01 00:00:00"

    val scoringResultsDataSetId: String = configProperties.get("scoringResultsDataSetId").getOrElse("")
    import sparkSession.implicits._

    var df = dataFrame.withColumn("date", $"date".cast("String"))

    var scored_df  = df.withColumn(tenantId, struct(df("date"), df("store"), df(predictionColumn)))
    scored_df = scored_df.withColumn("timestamp", lit(timestamp).cast(TimestampType))
    scored_df = scored_df.withColumn("_id", lit("empty"))
    scored_df = scored_df.withColumn("eventType", lit("empty"))

    scored_df.select(tenantId, "_id", "eventType", "timestamp").write.format(PLATFORM_SDK_PQS_PACKAGE)
      .option(QSOption.userToken, userToken)
      .option(QSOption.serviceToken, serviceToken)
      .option(QSOption.imsOrg, orgId)
      .option(QSOption.apiKey, apiKey)
      .option(QSOption.datasetId, scoringResultsDataSetId)
      .save()
    }
}
```

## DatasetTransformer {#datasettransformer}

The DatasetTransformer class modifies and transforms the structure of a dataset. The [!DNL Sensei Machine Learning Runtime] does not require this component to be defined, and is implemented based on your requirements. 

In regards to a feature pipeline, dataset transformers can be used cooporatively with a feature pipeline factory to prepare data for feature engineering.

**PySpark**

The following table describes the class methods of a PySpark dataset transformer class:

<table>
    <thead>
        <tr>
            <th>Method and description</th>
            <th>Parameters</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p><i>abstract</i><br/><code>transform(self, configProperties, dataset)</code></p>
                <p>Takes a dataset as input and output a new derived dataset</p>
            </td>
            <td>
                <ul>
                    <li><code>self</code>: Self reference</li>
                    <li><code>configProperties</code>: Configuration properties map</li>
                    <li><code>dataset</code>: The input dataset for transformation</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

**Spark (Scala)**

The following table describes the abstract methods of a [!DNL Spark] dataset transformer class:

<table>
    <thead>
        <tr>
            <th>Method and description</th>
            <th>Parameters</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p><code>transform(configProperties, dataset)</code></p>
                <p>Takes a dataset as input and output a new derived dataset</p>
            </td>
            <td>
                <ul>
                    <li><code>configProperties</code>: Configuration properties map</li>
                    <li><code>dataset</code>: The input dataset for transformation</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## FeaturePipelineFactory {#featurepipelinefactory}

The FeaturePipelineFactory class contains feature extraction algorithms and defines the stages of a Feature Pipeline from start to finish.

**PySpark**

The following table describes the class methods of a PySpark FeaturePipelineFactory:

<table>
    <thead>
        <tr>
            <th>Method and description</th>
            <th>Parameters</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p><i>abstract</i><br/><code>create_pipeline(self, configProperties)</code></p>
                <p>Create and return a Spark Pipeline that contains a series of Spark Transformers</p>
            </td>
            <td>
                <ul>
                    <li><code>self</code>: Self reference</li>
                    <li><code>configProperties</code>: Configuration properties map</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><i>abstract</i><br/><code>get_param_map(self, configProperties, sparkSession)</code></p>
                <p>Retrieve and return param map from configuration properties</p>
            </td>
            <td>
                <ul>
                    <li><code>self</code>: Self reference</li>
                    <li><code>configProperties</code>: Configuration properties</li>
                    <li><code>sparkSession</code>: Spark session</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

**Spark (Scala)**

The following table describes the class methods of a [!DNL Spark] FeaturePipelineFactory:

<table>
    <thead>
        <tr>
            <th>Method and description</th>
            <th>Parameters</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p><i>abstract</i><br/><code>createPipeline(configProperties)</code></p>
                <p>Create and return a Pipeline that contains a series of Transformers</p>
            </td>
            <td>
                <ul>
                    <li><code>configProperties</code>: Configuration properties map</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><i>abstract</i><br/><code>getParamMap(configProperties, sparkSession)</code></p>
                <p>Retrieve and return param map from configuration properties</p>
            </td>
            <td>
                <ul>
                    <li><code>configProperties</code>: Configuration properties</li>
                    <li><code>sparkSession</code>: Spark session</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## PipelineFactory {#pipelinefactory}

The PipelineFactory class encapsulates methods and definitions for model training and scoring, where training logic and algorithms are defined in the form of a [!DNL Spark] Pipeline.

**PySpark**

The following table describes the class methods of a PySpark PipelineFactory:

<table>
    <thead>
        <tr>
            <th>Method and description</th>
            <th>Parameters</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p><i>abstract</i><br/><code>apply(self, configProperties)</code></p>
                <p>Create and Return a Spark Pipeline which contains the logic and algorithm for model training and scoring</p>
            </td>
            <td>
                <ul>
                    <li><code>self</code>: Self reference</li>
                    <li><code>configProperties</code>: Configuration properties</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><i>abstract</i><br/><code>train(self, configProperties, dataframe)</code></p>
                <p>Return a custom Pipeline which contains the logic and algorithm to train a model. This method is not required if a Spark Pipeline is used</p>
            </td>
            <td>
                <ul>
                    <li><code>self</code>: Self reference</li>
                    <li><code>configProperties</code>: Configuration properties</li>
                    <li><code>dataframe</code>: Feature dataset for training input</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><i>abstract</i><br/><code>score(self, configProperties, dataframe, model)</code></p>
                <p>Score using the trained model and return the results</p>
            </td>
            <td>
                <ul>
                    <li><code>self</code>: Self reference</li>
                    <li><code>configProperties</code>: Configuration properties</li>
                    <li><code>dataframe</code>: Input dataset for scoring</li>
                    <li><code>model</code>: A trained model used for scoring</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><i>abstract</i><br/><code>get_param_map(self, configProperties, sparkSession)</code></p>
                <p>Retrieve and return param map from configuration properties</p>
            </td>
            <td>
                <ul>
                    <li><code>self</code>: Self reference</li>
                    <li><code>configProperties</code>: Configuration properties</li>
                    <li><code>sparkSession</code>: Spark session</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

**Spark (Scala)**

The following table describes the class methods of a [!DNL Spark] PipelineFactory:

<table>
    <thead>
        <tr>
            <th>Method and description</th>
            <th>Parameters</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p><i>abstract</i><br/><code>apply(configProperties)</code></p>
                <p>Create and Return a Pipeline which contains the logic and algorithm for model training and scoring</p>
            </td>
            <td>
                <ul>
                    <li><code>configProperties</code>: Configuration properties</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><i>abstract</i><br/><code>getParamMap(configProperties, sparkSession)</code></p>
                <p>Retrieve and return param map from configuration properties</p>
            </td>
            <td>
                <ul>
                    <li><code>configProperties</code>: Configuration properties</li>
                    <li><code>sparkSession</code>: Spark session</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## MLEvaluator {#mlevaluator}

The MLEvaluator class provides methods for defining evaluation metrics and determining training and testing datasets.

**PySpark**

The following table describes the class methods of a PySpark MLEvaluator:

<table>
    <thead>
        <tr>
            <th>Method and description</th>
            <th>Parameters</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p><i>abstract</i><br/><code>split(self, configProperties, dataframe)</code></p>
                <p>Splits the input dataset into training and testing subsets</p>
            </td>
            <td>
                <ul>
                    <li><code>self</code>: Self reference</li>
                    <li><code>configProperties</code>: Configuration properties</li>
                    <li><code>dataframe</code>: Input dataset to be split</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><i>abstract</i><br/><code>evaluate(self, dataframe, model, configProperties)</code></p>
                <p>Evaluates a trained model and return the evaluation results</p>
            </td>
            <td>
                <ul>
                    <li><code>self</code>: Self reference</li>
                    <li><code>dataframe</code>: A DataFrame consisting of training and testing data</li>
                    <li><code>model</code>: A trained model</li>
                    <li><code>configProperties</code>: Configuration properties</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

**Spark (Scala)**

The following table describes the class methods of a [!DNL Spark] MLEvaluator:

<table>
    <thead>
        <tr>
            <th>Method and description</th>
            <th>Parameters</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p><i>abstract</i><br/><code>split(configProperties, data)</code></p>
                <p>Splits the input dataset into training and testing subsets</p>
            </td>
            <td>
                <ul>
                    <li><code>configProperties</code>: Configuration properties</li>
                    <li><code>data</code>: Input dataset to be split</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><i>abstract</i><br/><code>evaluate(configProperties, model, data)</code></p>
                <p>Evaluates a trained model and return the evaluation results</p>
            </td>
            <td>
                <ul>
                    <li><code>configProperties</code>: Configuration properties</li>
                    <li><code>model</code>: A trained model</li>
                    <li><code>data</code>: A DataFrame consisting of training and testing data</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

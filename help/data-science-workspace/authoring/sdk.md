---
keywords: Experience Platform;developer guide;SDK;Model authoring;Data Science Workspace;popular topics
solution: Experience Platform
title: SDK developer guide
topic: Overview
---

# SDK developer guide

The Model Authoring SDK enables you to develop custom machine learning Recipes and Feature Pipelines which can be used in Adobe Experience Platform Data Science Workspace, providing implementable templates in PySpark and Spark.

This document provides information regarding the various classes found within the Model Authoring SDK:

-   [DataLoader](#dataloader)
    -   [Load data from a Platform dataset](#load-data-from-a-platform-dataset)
-   [DataSaver](#datasaver)
    -   [Save data to a Platform dataset](#save-data-to-a-platform-dataset)
-   [DatasetTransformer](#datasettransformer)
-   [FeaturePipelineFactory](#featurepipelinefactory)
-   [PipelineFactory](#pipelinefactory)
-   [MLEvaluator](#mlevaluator)

## DataLoader

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
                <p><code class=" language-undefined">load(self, configProperties, spark)</code></p>
                <p>Load and return Platform data as a Pandas DataFrame</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">self</code>: Self reference</li>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties map</li>
                    <li><code class=" language-undefined">spark</code>: Spark session</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

**Spark**

The following table describes the abstract methods of a Spark Data Loader class:

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
                <p><code class=" language-undefined">load(configProperties, sparkSession)</code></p>
                <p>Load and return Platform data as a DataFrame</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties map</li>
                    <li><code class=" language-undefined">sparkSession</code>: Spark session</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### Load data from a Platform dataset

The following example retrieves Platform data by ID and returns a DataFrame, where the dataset ID (`datasetId`) is a defined property in the configuration file.

**PySpark**

```python
# PySpark

from sdk.data_loader import DataLoader

class MyDataLoader(DataLoader):
    """
    Implementation of DataLoader which loads a DataFrame and prepares data
    """

    def load(self, configProperties, spark):
        """
        Load and return dataset

        :param configProperties:    Configuration properties
        :param spark:               Spark session
        :return:                    DataFrame
        """

        # preliminary checks
        if configProperties is None :
            raise ValueError("configProperties parameter is null")
        if spark is None:
            raise ValueError("spark parameter is null")

        # prepare variables
        dataset_id = str(
            configProperties.get("datasetId"))
        service_token = str(
            spark.sparkContext.getConf().get("ML_FRAMEWORK_IMS_ML_TOKEN"))
        user_token = str(
            spark.sparkContext.getConf().get("ML_FRAMEWORK_IMS_TOKEN"))
        org_id = str(
            spark.sparkContext.getConf().get("ML_FRAMEWORK_IMS_ORG_ID"))
        api_key = str(
            spark.sparkContext.getConf().get("ML_FRAMEWORK_IMS_CLIENT_ID"))

        # validate variables
        for arg in ['dataset_id', 'service_token', 'user_token', 'org_id', 'api_key']:
            if eval(arg) == 'None':
                raise ValueError("%s is empty" % arg)

        # load dataset through Spark session
        pd = spark.read.format("com.adobe.platform.dataset") \
            .option('serviceToken', service_token) \
            .option('userToken', user_token) \
            .option('orgId', org_id) \
            .option('serviceApiKey', api_key) \
            .load(dataset_id)

        # return as DataFrame
        return pd
```

**Spark**

```scala
// Spark

import com.adobe.platform.ml.config.ConfigProperties
import com.adobe.platform.ml.sdk.DataLoader
import org.apache.spark.sql.{DataFrame, SparkSession}

/**
 * Implementation of DataLoader which loads a DataFrame and prepares data
 */
class MyDataLoader extends DataLoader {

    /**
     * @param configProperties  - Configuration properties
     * @param sparkSession      - Spark session
     * @return                  - DataFrame
     */
    override def load(configProperties: ConfigProperties, sparkSession: SparkSession): DataFrame = {

        // preliminary checks
        require(configProperties != null)
        require(sparkSession != null)

        // prepare variables
        val dataSetId: String = configProperties
            .get("datasetId").getOrElse("")
        val serviceToken: String = sparkSession.sparkContext.getConf
            .get("ML_FRAMEWORK_IMS_ML_TOKEN", "").toString
        val userToken: String = sparkSession.sparkContext.getConf
            .get("ML_FRAMEWORK_IMS_TOKEN", "").toString
        val orgId: String = sparkSession.sparkContext.getConf
            .get("ML_FRAMEWORK_IMS_ORG_ID", "").toString
        val apiKey: String = sparkSession.sparkContext.getConf
            .get("ML_FRAMEWORK_IMS_CLIENT_ID", "").toString

        // validate variables
        List(dataSetId, serviceToken, userToken, orgId, apiKey).foreach(
            value => required(value != "")
        )

        // load dataset through Spark session
        var df = sparkSession.read.format("com.adobe.platform.dataset")
            .option(DataSetOptions.orgId, orgId)
            .option(DataSetOptions.serviceToken, serviceToken)
            .option(DataSetOptions.userToken, userToken)
            .option(DataSetOptions.serviceApiKey, apiKey)
            .load(dataSetId)
        
        // return as DataFrame
        df
    }
}
```

## DataSaver

The DataSaver class encapsulates anything related to storing output data including those from scoring or feature engineering. Data savers extend the abstract class `DataSaver` and must override the abstract method `save`.

**PySpark**

The following table describes the abstract methods of a PySpark Data Saver class:

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
                <p><code class=" language-undefined">save(self, configProperties, dataframe)</code></p>
                <p>Receive output data as a DataFrame and stores it in a Platform dataset</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">self</code>: Self reference</li>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties map</li>
                    <li><code class=" language-undefined">dataframe</code>: Data to be stored in the form of a DataFrame</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

**Spark**

The following table describes the abstract methods of a Spark Data Saver class:

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
                <p><code class=" language-undefined">save(configProperties, dataFrame)</code></p>
                <p>Receive output data as a DataFrame and stores it in a Platform dataset</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties map</li>
                    <li><code class=" language-undefined">dataFrame</code>: Data to be stored in the form of a DataFrame</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### Save data to a Platform dataset

In order to store data onto a Platform dataset, the properties must be either provided or defined in the configuration file:

- A valid Platform dataset ID to which data will be stored
- The tenant ID belonging to your organization

The following examples store data (`prediction`) onto a Platform dataset, where the dataset ID (`datasetId`) and tenant ID (`tenantId`) are defined properties within the configuration file.


**PySpark**

```python
# PySpark

from sdk.data_saver import DataSaver
from pyspark.sql.types import StringType, TimestampType


class MyDataSaver(DataSaver):
    """
    Implementation of DataSaver which stores a DataFrame to a Platform dataset
    """

    def save(self, configProperties, prediction):
        """
        Store DataFrame to a Platform dataset

        :param configProperties:    Configuration properties
        :param prediction:          DataFrame to be stored to a Platform dataset
        """

        # Spark context
        sparkContext = prediction._sc

        # preliminary checks
        if configProperties is None:
            raise ValueError("configProperties parameter is null")
        if prediction is None:
            raise ValueError("prediction parameter is null")
        if sparkContext is None:
            raise ValueError("sparkContext parameter is null")

        # prepare variables
        timestamp = "2019-01-01 00:00:00"
        output_dataset_id = str(
            configProperties.get("datasetId"))
        tenant_id = str(
            configProperties.get("tenantId"))
        service_token = str(
            sparkContext.getConf().get("ML_FRAMEWORK_IMS_ML_TOKEN"))
        user_token = str(
            sparkContext.getConf().get("ML_FRAMEWORK_IMS_TOKEN"))
        org_id = str(
            sparkContext.getConf().get("ML_FRAMEWORK_IMS_ORG_ID"))
        api_key = str(
            sparkContext.getConf().get("ML_FRAMEWORK_IMS_CLIENT_ID"))

        # validate variables
        for arg in ['output_dataset_id', 'tenant_id', 'service_token', 'user_token', 'org_id', 'api_key']:
            if eval(arg) == 'None':
                raise ValueError("%s is empty" % arg)

        # store data into dataset
        prediction.write.format("com.adobe.platform.dataset") \
            .option('orgId', org_id) \
            .option('serviceToken', service_token) \
            .option('userToken', user_token) \
            .option('serviceApiKey', api_key) \
            .save(output_dataset_id)
```




**Spark**

```scala
// Spark

import com.adobe.platform.dataset.DataSetOptions
import com.adobe.platform.ml.config.ConfigProperties
import com.adobe.platform.ml.impl.Constants
import com.adobe.platform.ml.sdk.DataSaver
import org.apache.spark.sql.DataFrame
import org.apache.spark.sql.functions._
import org.apache.spark.sql.types.TimestampType

/**
 * Implementation of DataSaver which stores a DataFrame to a Platform dataset
 */
class ScoringDataSaver extends DataSaver {

    /**
     * @param configProperties  - Configuration properties
     * @param dataFrame         - DataFrame to be stored to a Platform dataset
     */
    override def save(configProperties: ConfigProperties, dataFrame: DataFrame): Unit =  {

        // Spark session
        val sparkSession = dataFrame.sparkSession
        import sparkSession.implicits._

        // preliminary checks
        require(configProperties != null)
        require(dataFrame != null)

        // prepare variables
        val predictionColumn = configProperties.get(Constants.PREDICTION_COL)
            .getOrElse(Constants.DEFAULT_PREDICTION)
        val timestamp:String = "2019-01-01 00:00:00"
        val output_dataset_id: String = configProperties
            .get("datasetId").getOrElse("")
        val tenant_id:String = configProperties
            .get("tenantId").getOrElse("")
        val serviceToken: String = sparkSession.sparkContext.getConf
            .get("ML_FRAMEWORK_IMS_ML_TOKEN", "").toString
        val userToken: String = sparkSession.sparkContext.getConf
            .get("ML_FRAMEWORK_IMS_TOKEN", "").toString
        val orgId: String = sparkSession.sparkContext.getConf
            .get("ML_FRAMEWORK_IMS_ORG_ID", "").toString
        val apiKey: String = sparkSession.sparkContext.getConf
            .get("ML_FRAMEWORK_IMS_CLIENT_ID", "").toString

        // validate variables
        List(output_dataset_id, tenant_id, serviceToken, userToken, orgId, apiKey).foreach(
            value => require(value != "")
        )

        // store data into dataset
        dataFrame.write.format("com.adobe.platform.dataset")
            .option(DataSetOptions.orgId, orgId)
            .option(DataSetOptions.serviceToken, serviceToken)
            .option(DataSetOptions.userToken, userToken)
            .option(DataSetOptions.serviceApiKey, apiKey)
            .save(output_dataset_id)
    }
}
```

## DatasetTransformer

The DatasetTransformer class modifies and transforms the structure of a dataset. The Sensei Machine Learning Runtime does not require this component to be defined, and is implemented based on your requirements. 

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
                <p><i>abstract</i><br/><code class=" language-undefined">transform(self, configProperties, dataset)</code></p>
                <p>Takes a dataset as input and output a new derived dataset</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">self</code>: Self reference</li>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties map</li>
                    <li><code class=" language-undefined">dataset</code>: The input dataset for transformation</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

**Spark**

The following table describes the abstract methods of a Spark dataset transformer class:

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
                <p><code class=" language-undefined">transform(configProperties, dataset)</code></p>
                <p>Takes a dataset as input and output a new derived dataset</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties map</li>
                    <li><code class=" language-undefined">dataset</code>: The input dataset for transformation</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## FeaturePipelineFactory

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
                <p><i>abstract</i><br/><code class=" language-undefined">create_pipeline(self, configProperties)</code></p>
                <p>Create and return a Spark Pipeline that contains a series of Spark Transformers</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">self</code>: Self reference</li>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties map</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><i>abstract</i><br/><code class=" language-undefined">get_param_map(self, configProperties, sparkSession)</code></p>
                <p>Retrieve and return param map from configuration properties</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">self</code>: Self reference</li>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties</li>
                    <li><code class=" language-undefined">sparkSession</code>: Spark session</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

**Spark**

The following table describes the class methods of a Spark FeaturePipelineFactory:

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
                <p><i>abstract</i><br/><code class=" language-undefined">createPipeline(configProperties)</code></p>
                <p>Create and return a Pipeline that contains a series of Transformers</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties map</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><i>abstract</i><br/><code class=" language-undefined">getParamMap(configProperties, sparkSession)</code></p>
                <p>Retrieve and return param map from configuration properties</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties</li>
                    <li><code class=" language-undefined">sparkSession</code>: Spark session</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## PipelineFactory

The PipelineFactory class encapsulates methods and definitions for model training and scoring, where training logic and algorithms are defined in the form of a Spark Pipeline.

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
                <p><i>abstract</i><br/><code class=" language-undefined">apply(self, configProperties)</code></p>
                <p>Create and Return a Spark Pipeline which contains the logic and algorithm for model training and scoring</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">self</code>: Self reference</li>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><i>abstract</i><br/><code class=" language-undefined">train(self, configProperties, dataframe)</code></p>
                <p>Return a custom Pipeline which contains the logic and algorithm to train a model. This method is not required if a Spark Pipeline is used</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">self</code>: Self reference</li>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties</li>
                    <li><code class=" language-undefined">dataframe</code>: Feature dataset for training input</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><i>abstract</i><br/><code class=" language-undefined">score(self, configProperties, dataframe, model)</code></p>
                <p>Score using the trained model and return the results</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">self</code>: Self reference</li>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties</li>
                    <li><code class=" language-undefined">dataframe</code>: Input dataset for scoring</li>
                    <li><code class=" language-undefined">model</code>: A trained model used for scoring</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><i>abstract</i><br/><code class=" language-undefined">get_param_map(self, configProperties, sparkSession)</code></p>
                <p>Retrieve and return param map from configuration properties</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">self</code>: Self reference</li>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties</li>
                    <li><code class=" language-undefined">sparkSession</code>: Spark session</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

**Spark**

The following table describes the class methods of a Spark PipelineFactory:

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
                <p><i>abstract</i><br/><code class=" language-undefined">apply(configProperties)</code></p>
                <p>Create and Return a Pipeline which contains the logic and algorithm for model training and scoring</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><i>abstract</i><br/><code class=" language-undefined">getParamMap(configProperties, sparkSession)</code></p>
                <p>Retrieve and return param map from configuration properties</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties</li>
                    <li><code class=" language-undefined">sparkSession</code>: Spark session</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## MLEvaluator

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
                <p><i>abstract</i><br/><code class=" language-undefined">split(self, configProperties, dataframe)</code></p>
                <p>Splits the input dataset into training and testing subsets</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">self</code>: Self reference</li>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties</li>
                    <li><code class=" language-undefined">dataframe</code>: Input dataset to be split</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><i>abstract</i><br/><code class=" language-undefined">evaluate(self, dataframe, model, configProperties)</code></p>
                <p>Evaluates a trained model and return the evaluation results</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">self</code>: Self reference</li>
                    <li><code class=" language-undefined">dataframe</code>: A DataFrame consisting of training and testing data</li>
                    <li><code class=" language-undefined">model</code>: A trained model</li>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

**Spark**

The following table describes the class methods of a Spark MLEvaluator:

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
                <p><i>abstract</i><br/><code class=" language-undefined">split(configProperties, data)</code></p>
                <p>Splits the input dataset into training and testing subsets</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties</li>
                    <li><code class=" language-undefined">data</code>: Input dataset to be split</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><i>abstract</i><br/><code class=" language-undefined">evaluate(configProperties, model, data)</code></p>
                <p>Evaluates a trained model and return the evaluation results</p>
            </td>
            <td>
                <ul>
                    <li><code class=" language-undefined">configProperties</code>: Configuration properties</li>
                    <li><code class=" language-undefined">model</code>: A trained model</li>
                    <li><code class=" language-undefined">data</code>: A DataFrame consisting of training and testing data</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
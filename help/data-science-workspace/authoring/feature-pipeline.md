---
keywords: Experience Platform;Tutorial;Feature Pipeline;Data Science Workspace;popular topics
solution: Experience Platform
title: Create a Feature Pipeline
topic: Tutorial
---

# Create a Feature Pipeline

Adobe Experience Platform allows you to build and create custom Feature Pipelines to perform feature engineering at scale through the Sensei Machine Learning Framework Runtime (hereinafter referred to as "Runtime").

This document describes the various classes found in a Feature Pipeline, and provides a step-by-step tutorial for creating a custom Feature Pipeline using the [Model Authoring SDK](./sdk.md) in PySpark and Spark.

## Feature Pipeline Classes

The following table describes the main Abstract Classes that you must extend in order to build a Feature Pipeline:

| Abstract Class | Description |
| -------------- | ----------- |
| DataLoader | A DataLoader class provides implementation for the retrieval of input data. |
| DatasetTransformer | A DatasetTransformer class provides implementations to transform the input dataset. You can choose not to provide a DatasetTransformer class and implement your feature engineering logic within the FeaturePipelineFactory class instead. |
| FeaturePipelineFactory | A FeaturePipelineFactory class builds a Spark Pipeline consisting of a series of Spark Transformers to perform feature engineering. You can choose not to provide a FeaturePipelineFactory class and implement your feature engineering logic within the DatasetTransformer class instead. |
| DataSaver | A DataSaver class provides the logic for the storage of a feature dataset. |

When a Feature Pipeline job is initiated, the Runtime will first execute the DataLoader to load an input data as a DataFrame and then modifies the DataFrame by executing either the DatasetTransformer, or FeaturePipelineFactory, or both. Lastly, the resulting feature dataset is stored through the DataSaver.

The following flowchart shows the Runtime's order of execution:

![](../images/authoring/feature-pipeline/FeaturePipeline_Runtime_flow.png)


## Implement your Feature Pipeline classes {#implement-your-feature-pipeline-classes}

The following sections provide details and examples on implementing the required classes for a Feature Pipeline.

### Define variables in the configuration JSON file {#define-variables-in-the-configuration-json-file}

The configuration JSON file consists of key-value pairs and is intended for you to specify any variables to be later defined during runtime. These key-value pairs can define properties such as input dataset location, output dataset ID, tenant ID, column headers, and so on.

The following example demonstrates key-value pairs found within a configuration file. Expand the example to see details:


**configuration JSON example**

```json
[
    {
        "name": "fp",
        "parameters": [
            {
                "key": "datasetId",
                "value": "000"
            },
            {
                "key": "featureDatasetId",
                "value": "111"
            },
            {
                "key": "tenantId",
                "value": "_tenantid"
            }
        ]
    }
]
```



You can access the configuration JSON through any class method that defines `configProperties` as a parameter. For example:

**PySpark**

```python
input_dataset_id = str(configProperties.get("datasetId"))
```

**Spark**

```scala
val input_dataset_id: String = configProperties.get("datasetId")
```


### Prepare the input data with DataLoader {#prepare-the-input-data-with-dataloader}

The DataLoader is responsible for the retrieval and filtering of input data. Your implementation of DataLoader must extend the abstract class `DataLoader` and override the abstract method `load`.

The following example retrieves a Platform dataset by ID and returns it as a DataFrame, where the dataset ID (`datasetId`) is a defined property in the configuration file. Expand each example to see details:


**PySpark example**

```python
# PySpark

from sdk.data_loader import DataLoader

class MyDataLoader(DataLoader):
    def load(self, configProperties, spark):

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
        df = spark.read.format("com.adobe.platform.dataset") \
            .option('serviceToken', service_token) \
            .option('userToken', user_token) \
            .option('orgId', org_id) \
            .option('serviceApiKey', api_key) \
            .load(dataset_id)

        # return as DataFrame
        return df
```




**Spark example**

```scala
// Spark

import com.adobe.platform.ml.config.ConfigProperties
import com.adobe.platform.ml.sdk.DataLoader
import org.apache.spark.sql.{DataFrame, SparkSession}

class MyDataLoader extends DataLoader {
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



### Transform a dataset with DatasetTransformer {#transform-a-dataset-with-datasettransformer}

A DatasetTransformer provides the logic for transforming an input DataFrame and returns a new derived DataFrame. This class can be implemented to either work cooporatively with a FeaturePipelineFactory, work as the sole feature engineering component, or you can choose to not implement this class. 

The following example extends the DatasetTransformer class. Expand each example to see details:


**PySpark example**

```python
# PySpark

from sdk.dataset_transformer import DatasetTransformer

class MyDatasetTransformer(DatasetTransformer):

    def transform(self, configProperties, dataset):
        transformed = dataset

        '''
        Transformations
        '''

        # return new DataFrame
        return transformed

```




**Spark example**

```scala
// Spark

import com.adobe.platform.ml.config.ConfigProperties
import com.adobe.platform.ml.sdk.DatasetTransformer

class MyDatasetTransformer extends DatasetTransformer {

    override def transform(configProperties: ConfigProperties, dataset: Dataset[_]): Dataset[_] = {
        val transformed = dataset

        /*
        transformations
        */
        
        // return new DataFrame
        transformed
    }
}

```



### Engineer data features with FeaturePipelineFactory {#engineer-data-features-with-featurepipelinefactory}

A FeaturePipelineFactory allows you to implement your feature engineering logic by defining and chaining together a series of Spark Transformers through a Spark Pipeline. This class can be implemented to either work cooperatively with a DatasetTransformer, work as the sole feature engineering component, or you can choose to not implement this class.

The following example extends the FeaturePipelieFactory class and implements a series of Spark transformers as multiple stages in a Spark Pipeline. Expand each example to see details:


**PySpark example**

```python
# PySpark

from pyspark.ml import Pipeline
from pyspark.ml.feature import HashingTF, Tokenizer
from sdk.feature_pipeline_factory import FeaturePipelineFactory

class MyFeaturePipelineFactory(FeaturePipelineFactory):

    def create_pipeline(self, configProperties):

        # Spark Transformers
        tokenizer = Tokenizer(inputCol="lower_text", outputCol="words")
        hashingTF = HashingTF(inputCol=tokenizer.getOutputCol(), outputCol="features")

        # Chain together Spark Transformers as Spark Pipeline Stages
        pipeline = Pipeline(stages=[tokenizer, hashingTF])

        # return a Spark Pipeline
        return pipeline

    def get_param_map(self, configProperties, sparkSession):
        pass

```




**Spark example**

```scala
// Spark

import com.adobe.platform.ml.config.ConfigProperties
import com.adobe.platform.ml.sdk.FeaturePipelineFactory
import org.apache.spark.ml.feature.{HashingTF, Tokenizer}
import org.apache.spark.ml.Pipeline
import org.apache.spark.ml.param.ParamMap
import org.apache.spark.sql.SparkSession

class MyFeaturePipelineFactory(uid:String) extends FeaturePipelineFactory(uid) {
    def this() = this("MyFeaturePipeline")

    override def createPipeline(configProperties: ConfigProperties): Pipeline = {
        
        // Spark Transformers
        val tokenizer = new Tokenizer()
            .setInputCol("lower_text")
            .setOutputCol("words")
        val hashingTF = new HashingTF()
            .setInputCol(tokenizer.getOutputCol())
            .setOutputCol("features")

        // Chain together Spark Transformers as Spark Pipeline Stages
        val pipeline = new Pipeline()
            .setStages(Array(tokenizer, hashingTF))
        
        // return a Spark Pipeline
        pipeline
    }

    override def getParamMap(configProperties: ConfigProperties, sparkSession: SparkSession): ParamMap = {
        val map = new ParamMap()
        map
    }
}

```



### Store your feature dataset with DataSaver {#store-your-feature-dataset-with-datasaver}

The DataSaver is responsible for storing your resulting feature datasets into a storage locaiton. Your implementation of DataSaver must extend the abstract class `DataSaver` and override the abstract method `save`.

The following example extends the DataSaver class which stores data to a Platform dataset by ID, where the dataset ID (`featureDatasetId`) and tenant ID (`tenantId`) are defined properties in the configuration file. Expand each example to see details:


**PySpark example**

```python
# PySpark

from sdk.data_saver import DataSaver
from pyspark.sql.types import StringType, TimestampType
from pyspark.sql.functions import col, lit, struct


class MyDataSaver(DataSaver):
    def save(self, configProperties, data_feature):

        # Spark context
        sparkContext = data_features._sc

        # preliminary checks
        if configProperties is None:
            raise ValueError("configProperties parameter is null")
        if data_features is None:
            raise ValueError("data_features parameter is null")
        if sparkContext is None:
            raise ValueError("sparkContext parameter is null")

        # prepare variables
        timestamp = "2019-01-01 00:00:00"
        output_dataset_id = str(
            configProperties.get("featureDatasetId"))
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

        # create and prepare DataFrame with valid columns
        output_df = data_features.withColumn("date", col("date").cast(StringType()))
        output_df = output_df.withColumn(tenant_id, struct(col("date"), col("store"), col("features")))
        output_df = output_df.withColumn("timestamp", lit(timestamp).cast(TimestampType()))
        output_df = output_df.withColumn("_id", lit("empty"))
        output_df = output_df.withColumn("eventType", lit("empty"))

        # store data into dataset
        output_df.select(tenant_id, "_id", "eventType", "timestamp") \
            .write.format("com.adobe.platform.dataset") \
            .option('orgId', org_id) \
            .option('serviceToken', service_token) \
            .option('userToken', user_token) \
            .option('serviceApiKey', api_key) \
            .save(output_dataset_id)
```




**Spark example**

```scala
// Spark

import com.adobe.platform.dataset.DataSetOptions
import com.adobe.platform.ml.config.ConfigProperties
import com.adobe.platform.ml.impl.Constants
import com.adobe.platform.ml.sdk.DataSaver
import org.apache.spark.sql.DataFrame
import org.apache.spark.sql.functions._
import org.apache.spark.sql.types.TimestampType

class MyDataSaver extends DataSaver {
    override def save(configProperties: ConfigProperties, dataFrame: DataFrame): Unit =  {

        // Spark session
        val sparkSession = dataFrame.sparkSession

        // preliminary checks
        require(configProperties != null)
        require(dataFrame != null)

        // prepare variables
        val timestamp:String = "2019-01-01 00:00:00"
        val output_dataset_id: String = configProperties
            .get("featureDatasetId").getOrElse("")
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

        // create and prepare DataFrame with valid columns
        import sparkSession.implicits._

        var output_df  = dataFrame.withColumn("date", $"date".cast("String"))
        output_df = output_df.withColumn("timestamp", lit(timestamp).cast(TimestampType))
        output_df = output_df.withColumn("_id", lit("empty"))
        output_df = output_df.withColumn("eventType", lit("empty"))

        // store data into dataset
        output_df.select(tenant_id, "_id", "eventType", "timestamp").write.format("com.adobe.platform.dataset")
            .option(DataSetOptions.orgId, orgId)
            .option(DataSetOptions.serviceToken, serviceToken)
            .option(DataSetOptions.userToken, userToken)
            .option(DataSetOptions.serviceApiKey, apiKey)
            .save(output_dataset_id)
    }
}
```

### Specify your implemented class names in the application file {#specify-your-implemented-class-names-in-the-application-file}

Now that your Feature Pipeline classes are defined and implemented, you must specify the names of your classes in the application file.

The following examples specifies implemented class names. Expand the example to see details:


**PySpark example**

```yaml
# application.yaml

# Name of the implementation of DataLoader abstract class
feature.dataLoader: MyDataLoader

# Name of the implementation of DatasetTransformer abstract class
feature.dataset.transformer: MyDatasetTransformer

# Name of the implementation of FeaturePipelineFactory abstract class
feature.pipeline.class: MyFeaturePipelineFactory

# Name of the implementation of DataSaver abstract class
feature.dataSaver: MyDataSaver
```




**Spark example**

```properties
# application.properties

# Name of the implementation of DataLoader abstract class
feature.pipeline.class=MyDataLoader

# Name of the implementation of DatasetTransformer abstract class
feature.dataset.transformer=MyDatasetTransformer

# Name of the implementation of FeaturePipelineFactory abstract class
feature.dataLoader=MyFeaturePipelineFactory

# Name of the implementation of DataSaver abstract class
feature.dataSaver=MyDataSaver
```



## Build the binary artifact {#build-the-binary-artifact}

Now that your Feature Pipeline classes implemented, you can build and compile it into a binary artifact which can then be used to create a Feature Pipeline through API calls.

**PySpark**

To build a PySpark Feature Pipeline, run the `setup.py` Python script located in the root directory of the Model Authoring SDK.

>[!NOTE] Building a PySpark Feature Pipeline requires you to have Python 3 installed on your machine. 

```shell
python3 setup.py bdist_egg
```

Successfully building your Feature Pipeline will generate a `.egg` artifact in the `/dist` directory, this artifact is used to create a Feature Pipeline.

**Spark**

To build a Spark Feature Pipeline, run the following console command in the root directory of the Model Authoring SDK:

>[!NOTE] Building a Spark Feature Pipeline requires you to have Scala and sbt installed on your machine.

```shell
mvn clean install
```

Successfully building your Feature Pipeline will generate a `.jar` artifact in the `/dist` directory, this artifact is used to create a Feature Pipeline.

## Create a Feature Pipeline Engine using the API {#create-a-feature-pipeline-engine-using-the-api}

Now that you have authored your Feature Pipeline and built the binary artifact, you can [create a Feature Pipeline Engine using the Sensei Machine Learning API](../api/engines.md#create-a-feature-pipeline-engine-using-binary-artifacts). Successfully creating a Feature Pipeline Engine will provide you with an Engine ID as part of the response body, make sure to save this value before continuing to the next steps.

## Next steps {#next-steps}

[//]: # (Next steps section should refer to tutorials on how to score data using the Feature Pipeline Engine. Update this document once those tutorials are available)

By reading this document, you have authored a Feature Pipeline using the Model Authoring SDK, built a binary artifact, and used the artifact to create a Feature Pipeline Engine through an API call. You are now ready to [create a Feature Pipeline Model](../api/mlinstances.md#create-an-mlinstance) using your newly created Engine and start transforming datasets and extracting data features at scale.
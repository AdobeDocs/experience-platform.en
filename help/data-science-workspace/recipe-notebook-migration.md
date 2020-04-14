---
keywords: Experience Platform;Data Science Workspace;popular topics
solution: Experience Platform
title: Recipe and notebook migration guides
topic: Tutorial
---

# Recipe and notebook migration guides

>[!NOTE]
>Notebooks and recipes using Python/R remain unaffected. The migration only applies to existing PySpark/Spark recipes and notebooks.

The following guides outlines the steps and information required for migrating existing Recipes and Notebooks. 

 - [Recipe migration guides](#recipe-migration-guides)
 - [Notebook migration guides](#notebook-migration-guides)

# Recipe migration guides {#recipe}

Recent changes to Data Science Workspace require that existing Spark and PySpark recipes be updated. Use the following guides to assist in transitioning your recipes.

- [Spark migration guide](#spark-migration-guide)
  - [Modify how you read and write datasets]()
  - [Download the sample recipe]()
  - [Check dependencies]()
  - [Prepare docker scripts]()
  - [create the recipe with docker]()
- [PySpark migration guide](#pyspark-migration-guide)
  - [Modify how you read and write datasets]()
  - [Download the sample recipe]()
  - [Check dependencies]()
  - [Prepare docker scripts]()
  - [create the recipe with docker]()

Additionally, the following video is designed to assist in understanding the changes needed in order to update your existing recipes.

>[!VIDEO](https://video.tv.adobe.com/v/33048?learn=on&quality=12)

## Spark migration guide

Spark recipes are now using the Docker workflow. Additionally, updates have been made to the Platform SDK for reading and writing datasets. Use the following guide to re-create your existing recipes with a Docker workflow.

### Read and write datasets

Before you build the Docker image, review the following examples for reading and writing datasets in the Platform SDK. If you are converting existing recipes, your Platform SDK needs to be updated.

**Read a dataset**

The following table outlines the changes that are needed for reading a dataset in the `helper.py` file.
<!-- link through -->

```scala
import com.adobe.platform.query.QSOption

var df = sparkSession.read.format("com.adobe.platform.query")
  .option(QSOption.userToken", {userToken})
  .option(QSOption.serviceToken, {serviceToken})
  .option(QSOption.imsOrg, {orgId})
  .option(QSOption.apiKey, {apiKey})
  .option(QSOption.mode, "batch")
  .option(QSOption.datasetId, {dataSetId})
  .load()
```

**Write to a dataset**

The following table outlines the changes that are needed for reading a dataset in the `data_saver.py` file.

```scala
import com.adobe.platform.query.QSOption

df.write.format("com.adobe.platform.query")
  .option(QSOption.userToken", {userToken})
  .option(QSOption.serviceToken, {serviceToken})
  .option(QSOption.imsOrg, {orgId})
  .option(QSOption.apiKey, {apiKey})
  .option(QSOption.mode, "batch")
  .option(QSOption.datasetId, {dataSetId})
  .save()
```

### Package docker based source files

Start by navigating to the directory where your recipe is located. 

For this example the new Scala Retail Sales recipe is used and can be found by the Data Science Workspace public github repository.

**download the sample recipe**

The sample recipe contains files that need to be copied over to your existing recipe. To clone the public github that contains all the sample recipes, enter the following in terminal.

```BASH
git clone https://github.com/adobe/experience-platform-dsw-reference.git
```

The Scala recipe is located in the following directory `experience-platform-dsw-reference/recipes/scala/retail`.

**Change dependencies**

If you are using an existing recipe, changes are required in the pom.xml file for dependencies. Change the model-authoring-sdk dependency version to 1.0.0. Next, update the Spark version in the pom file to 2.4.3 and the Scala version to 2.11.12.

```json
<groupId>com.adobe.platform.ml</groupId>
<artifactId>authoring-sdk_2.11</artifactId>
<version>1.0.0</version>
<classifier>jar-with-dependencies</classifier>
```

**Prepare your Docker scripts**

Spark recipes no longer use Binary Artifacts and instead require building a Docker image. If you have not done so download and install [Docker](https://www.docker.com/products/docker-desktop).

In the provided Scala sample recipe, you can find the scripts `login.sh` and `build.sh` located in then retail folder. Copy and paste these files into your existing recipe. The next step is to follow the [package source files into a recipe](./package-source-files-recipe.md) tutorial. This tutorial outlines building a docker image for a Scala (Spark) recipe. Once complete you are provided with the Docker image in Azure Container Registry along with the corresponding image URL.

### Create a recipe

In order to create a recipe you need to have completed the [package source files](./package-source-files-recipe.md) tutorial and have your docker image URL ready. You can create a recipe with the UI or API.

To build your recipe using the UI, follow the [import a packaged recipe (UI)](./import-packaged-recipe-ui.md) tutorial for Scala.

To build your recipe using the API, follow the [import a packaged recipe (API)](./import-packaged-recipe-api.md) tutorial for Scala.

## PySpark migration guide

For PySpark recipes, the recipe should be a docker image instead of a .egg binary. Additionally, changes have been made to the  Platform SDK for reading and writing datasets.

### Read and write datasets

In order for existing recipes to Before you build the Docker image, review the following examples for reading and writing datasets in the  Platform SDK. If you are converting existing recipes, the Platform SDK needs to be updated.

**Read a dataset**

```python
qs_option = spark_context._jvm.com.adobe.platform.query.QSOption

pd = sparkSession.read.format("com.adobe.platform.query") \
  .option(qs_option.userToken, {userToken}) \
  .option(qs_option.serviceToken, {serviceToken}) \
  .option(qs_option.imsOrg, {orgId}) \
  .option(qs_option.apiKey, {apiKey}) \
  .option(qs_option.mode, "batch") \
  .option(qs_option.datasetId, {dataSetId}) \
  .load()
```

**Write to a dataset**

```python
qs_option = spark_context._jvm.com.adobe.platform.query.QSOption

scored_df.write.format("com.adobe.platform.query") \
  .option(qs_option.userToken, {userToken}) \
  .option(qs_option.serviceToken, {serviceToken}) \
  .option(qs_option.imsOrg, {orgId}) \
  .option(qs_option.apiKey, {apiKey}) \
  .option(qs_option.mode, "batch") \
  .option(qs_option.datasetId, {dataSetId}) \
  .save()
```

### Package docker based source files

The [package source files into a recipe](./package-source-files-recipe.md) document outlines building a docker image for a PySpark (Spark 2.4) recipe. Once complete you are provided with the Docker image in Azure Container Registry along with the corresponding image URL.

### Create a recipe

In order to create a recipe you need to have completed the [package source files](./package-source-files-recipe.md) tutorial and have your docker image URL ready. You can create a recipe with the UI or API.

To build your recipe using the UI, follow the [import a packaged recipe (UI)](./import-packaged-recipe-ui.md) tutorial for PySpark.

To build your recipe using the API, follow the [import a packaged recipe (API)](./import-packaged-recipe-api.md) tutorial for PySpark.

# Notebook migration guides {#notebook}

Recent changes to JupyterLab notebooks require that you change your existing PySpark and Spark 2.3 notebooks to 2.4. With this change, JupyterLab Launcher has been updated with new starter notebooks. Please use the following guides to learn more about the changes to notebooks.

- [PySpark 2.3 to 2.4 migration guide](#pyspark-23-to-24-notebook-migration-guide)
- [Spark 2.3 to Spark 2.4 (Scala) migration guide](#spark-23-to-spark-24-scala-notebook-migration-guide)

## PySpark 2.3 to 2.4 notebook migration guide 

With the introduction of PySpark 2.4 to JupyterLab Notebooks, new Python notebooks with PySpark 2.4 are now using the Python 3 kernel instead of the PySpark 3 kernel. This means existing code running on PySpark 2.3 is not supported in PySpark 2.4.

>[!IMPORTANT] PySpark 2.3 is deprecated and set to be removed in a subsequent release. All existing examples are set to be replaced with PySpark 2.4 examples.

To convert your existing PySpark 3 (Spark 2.3) notebooks to Spark 2.4, follow the examples outlined below:

## Kernel

PySpark 3 (Spark 2.4) notebooks use the Python 3 Kernel instead of the deprecated PySpark kernel used in PySpark 3 (Spark 2.3 - deprecated) notebooks.

To confirm or change the kernel in the JupyterLab UI, select the kernel button located in the top right navigation bar of your notebook. If you are using a one of the predefined launcher notebooks, the kernel is pre-selected. The example below uses the PySpark 3 (Spark 2.4) *Aggregation* notebook starter. 

![check kernel](../images/migration/pyspark-migration/check-kernel.png)

Selecting the drop down menu opens up a list of available kernels.

![select kernel](../images/jupyterlab/pyspark-migration/kernel-click.png)

![kernel dropdown](../images/jupyterlab/pyspark-migration/select-kernel.png)

For PySpark 3 (Spark 2.4) notebooks, select the Python 3 kernel and confirm by clicking the **Select** button.

![confirm kernel](../images/jupyterlab/pyspark-migration/confirm-kernel.png)

## Initializing sparkSession

All Spark 2.4 notebooks require that you initialize the session with the new boilerplate code.

<table>
  <th>Notebook</th>
  <th>PySpark 3 (Spark 2.3 - deprecated)</th>
  <th>PySpark 3 (Spark 2.4)</th>
  <tr>
  <th>Kernel</th>
  <td align="center">PySpark 3</td>
  <td align="center">Python 3</td>
  </tr>
  <tr>
  <th>Code</th>
  <td>
  <pre class="JSON language-JSON hljs">
  spark
</pre>
  </td>
  <td>
  <pre class="JSON language-JSON hljs">
from pyspark.sql import SparkSession
spark = SparkSession.builder.getOrCreate()
</pre>
  </td>
  </tr>
</table>

The following images highlight the differences in configuration for PySpark 2.3 and PySpark 2.4. This example uses the *Aggregation* starter notebooks provided in JupyterLab Launcher.

**Configuration example for 2.3 (deprecated)**

![config 1](../images/jupyterlab/pyspark-migration/2.3-config.png)
![config 2](../images/jupyterlab/pyspark-migration/2.3-config-import.png)

**Configuration example for 2.4**

![config 3](../images/jupyterlab/pyspark-migration/2.4-config.png)

## Using %dataset magic {#magic}

With the introduction of Spark 2.4, `%dataset` custom magic is supplied for use in new PySpark 3 (Spark 2.4) notebooks (Python 3 kernel).

**Usage**

`%dataset {action} --datasetId {id} --dataFrame {df}`

**Description**

A custom Data Science Workspace magic command for reading or writing a dataset from a Python notebook (Python 3 kernel).

- **{action}**: The type of action to perform on the dataset. Two actions are available "read" or "write".
- **--datasetId {id}**: Used to supply the id of the dataset to read or write. This is a required argument.
- **--dataFrame {df}**: The pandas dataframe. This is a required argument.
  - When the action is "read", {df} is the variable where results of the dataset read operation are available.
  - When the action is "write", this dataframe {df} is written to the dataset.
- **--mode (optional)**: Allowed parameters are "batch", and "interactive". By default the mode is set to "interactive". It is recommended to use "batch" mode when reading large amounts of data.

**Examples**

- **Read example**: `%dataset read --datasetId 5e68141134492718af974841 --dataFrame pd0`
- **Write example**: `%dataset write --datasetId 5e68141134492718af974842 --dataFrame pd0`

## Load into a dataframe in LocalContext

With the introduction of Spark 2.4, [`%dataset`](#magic) custom magic is supplied. The following table highlights the key differences for loading dataframe in PySpark (Spark 2.3) and PySpark (Spark 2.4) notebooks:

<table>
  <th>Notebook</th>
  <th>PySpark 3 (Spark 2.3 - deprecated)</th>
  <th>PySpark 3 (Spark 2.4)</th>
  <tr>
  <th>Kernel</th>
  <td align="center">PySpark 3</td>
  <td align="center">Python 3</td>
  </tr>
  <tr>
  <th>Code</th>
  <td>
  <pre class="JSON language-JSON hljs">
dataset_options = sc._jvm.com.adobe.platform.dataset.DataSetOptions

pd0 = spark.read.format("com.adobe.platform.dataset")
  .option(dataset_options.orgId(), "310C6D375BA5248F0A494212@AdobeOrg")
  .load("5e68141134492718af974844")
</pre>
  </td>
  <td>
  <pre class="JSON language-JSON hljs">
%dataset read --datasetId 5e68141134492718af974844 --dataFrame pd0
</pre>
  </td>
  </tr>
</table>

| Element | Description |
| ------- | ----------- |
pd0 | Name of pandas dataframe object to use or create. |
[%dataset](#magic) | Custom magic for data access in Python3 kernel. |

The following images highlight the key differences in loading data for PySpark 2.3 and PySpark 2.4. This example uses the *Aggregation* starter notebooks provided in JupyterLab Launcher.

**Loading data in PySpark 2.3 (Luma dataset) - deprecated**

![Load 1](../images/jupyterlab/pyspark-migration/2.3-load.png)

**Loading data in PySpark 2.4 (Luma dataset)**

With PySpark 3 (Spark 2.4) `sc = spark.sparkContext` is defined in loading.

![Load 1](../images/jupyterlab/pyspark-migration/2.4-load.png)

**Loading Experience Could Platform data in PySpark 2.3 - deprecated**

![Load 2](../images/jupyterlab/pyspark-migration/2.3-load-alt.png)

**Loading Experience Could Platform data in PySpark 2.4**

With PySpark 3 (Spark 2.4) the `org_id` and `dataset_id` no longer need to be defined. Additionally, `df = spark.read.format` has been replaced with a custom magic [`%dataset`](#magic) to make reading and writing datasets easier.

![Load 2](../images/jupyterlab/pyspark-migration/2.4-load-alt.png)

| Element | description |
| ------- | ----------- |
[%dataset](#magic) | Custom magic for data access in Python3 kernel. |

>[!TIP] --mode can be set to `interactive` or `batch`. The default for --mode is `interactive`. It is recommended to use `batch` mode when reading large amounts of data.

## Creating a local dataframe

With PySpark 3 (Spark 2.4) `%%` sparkmagic is no longer supported. The following operations can no longer be utilized:

- `%%help`
- `%%info`
- `%%cleanup`
- `%%delete`
- `%%configure`
- `%%local`

The following table outlines the changes needed to convert `%%sql` sparkmagic queries:

<table>
  <th>Notebook</th>
  <th>PySpark 3 (Spark 2.3 - deprecated)</th>
  <th>PySpark 3 (Spark 2.4)</th>
  <tr>
  <th>Kernel</th>
  <td align="center">PySpark 3</td>
  <td align="center">Python 3</td>
  </tr>
  <tr>
  <th>Code</th>
      <td>
         <pre class="JSON language-JSON hljs">%%sql -o df
select * from sparkdf
</pre>
         <pre class="JSON language-JSON hljs"> %%sql -o df -n limit
select * from sparkdf
</pre>
         <pre class="JSON language-JSON hljs">%%sql -o df -q
select * from sparkdf
</pre>
         <pre class="JSON language-JSON hljs"> %%sql -o df -r fraction
select * from sparkdf
</pre>
      </td>
      <td>
         <pre class="JSON language-JSON hljs">
df = spark.sql('''
  SELECT *
  FROM sparkdf
''')
</pre>
         <pre class="JSON language-JSON hljs">
df = spark.sql('''
  SELECT *
  FROM sparkdf
  LIMIT limit
''')
</pre>
         <pre class="JSON language-JSON hljs">
df = spark.sql('''
  SELECT *
  FROM sparkdf
  LIMIT limit
''')
</pre>
         <pre class="JSON language-JSON hljs">
sample_df = df.sample(fraction)
</pre>
      </td>
   </tr>
</table>

>[!TIP] You can also specify an optional seed sample such as a boolean withReplacement, double fraction, or a long seed.

The following images highlight the key differences for creating a local dataframe in PySpark 2.3 and PySpark 2.4. This example uses the *Aggregation* starter notebooks provided in JupyterLab Launcher.

**Create local dataframe PySpark 2.3 - deprecated**

![dataframe 1](../images/jupyterlab/pyspark-migration/2.3-dataframe.png)

**Create local dataframe PySpark 2.4**

With PySpark 3 (Spark 2.4) `%%sql` Sparkmagic is not longer supported and has been replaced with the following:

![dataframe 2](../images/jupyterlab/pyspark-migration/2.4-dataframe.png)

## Write to a dataset

With the introduction of Spark 2.4, [`%dataset`](#magic) custom magic is supplied which makes writing datasets cleaner. To write to a dataset, use the following Spark 2.4 example:

<table>
  <th>Notebook</th>
  <th>PySpark 3 (Spark 2.3 - deprecated)</th>
  <th>PySpark 3 (Spark 2.4)</th>
  <tr>
  <th>Kernel</th>
  <td align="center">PySpark 3</td>
  <td align="center">Python 3</td>
  </tr>
  <tr>
  <th>Code</th>
  <td>
  <pre class="JSON language-JSON hljs">
userToken = spark.sparkContext.getConf().get("spark.yarn.appMasterEnv.USER_TOKEN")
serviceToken = spark.sparkContext.getConf().get("spark.yarn.appMasterEnv.SERVICE_TOKEN")
serviceApiKey = spark.sparkContext.getConf().get("spark.yarn.appMasterEnv.SERVICE_API_KEY")

dataset_options = sc._jvm.com.adobe.platform.dataset.DataSetOptions

pd0.write.format("com.adobe.platform.dataset")
  .option(dataset_options.orgId(), "310C6D375BA5248F0A494212@AdobeOrg")
  .option(dataset_options.userToken(), userToken)
  .option(dataset_options.serviceToken(), serviceToken)
  .option(dataset_options.serviceApiKey(), serviceApiKey)
  .save("5e68141134492718af974844")
  </pre>
  </td>
  <td>
  <pre class="JSON language-JSON hljs">
%dataset write --datasetId 5e68141134492718af974844 --dataFrame pd0

pd0.describe()
pd0.show(10, False)
</pre>
  </td>
  </tr>
</table>

| Element | description |
| ------- | ----------- |
pd0 | Name of pandas dataframe object to use or create. |
[%dataset](#magic) | Custom magic for data access in Python3 kernel. |

>[!TIP] --mode can be set to `interactive` or `batch`. The default for --mode is `interactive`. It is recommended to use `batch` mode when reading large amounts of data.

The following images highlight the key differences for writing data back to Platform in PySpark 2.3 and PySpark 2.4. This example uses the *Aggregation* starter notebooks provided in JupyterLab Launcher.

**Writing data back to Platform PySpark 2.3 - deprecated**

![dataframe 1](../images/jupyterlab/pyspark-migration/2.3-write.png)
![dataframe 1](../images/jupyterlab/pyspark-migration/2.3-write-2.png)
![dataframe 1](../images/jupyterlab/pyspark-migration/2.3-write-3.png)

**Writing data back to Platform PySpark 2.4**

With PySpark 3 (Spark 2.4) the `%dataset` custom magic removes the need to define values such as `userToken`, `serviceToken`, `serviceApiKey`, and `.option`. Additionally, `orgId` no longer needs to be defined.

![dataframe 2](../images/jupyterlab/pyspark-migration/2.4-write.png)
![dataframe 2](../images/jupyterlab/pyspark-migration/2.4-write-2.png)

## Spark 2.3 to Spark 2.4 (Scala) notebook migration guide 

With the introduction of Spark 2.4 to JupyterLab Notebooks, existing Spark (Spark 2.3) notebooks are now using the Scala kernel instead of the Spark kernel. This means existing code running on Spark (Spark 2.3) is not supported in Scala (Spark 2.4). Additionally, all new Spark notebooks should use Scala (Spark 2.4) in the JupyterLab launcher.

>[!IMPORTANT] Spark (Spark 2.3) is deprecated and set to be removed in a subsequent release. All existing examples are set to be replaced with Scala (Spark 2.4) examples.

To convert your existing Spark (Spark 2.3) notebooks to Scala (Spark 2.4), follow the examples outlined below:

## Kernel

Scala (Spark 2.4) notebooks use the Scala Kernel instead of the deprecated Spark kernel used in Spark (Spark 2.3 - deprecated) notebooks.

To confirm or change the kernel in the JupyterLab UI, select the kernel button located in the top right navigation bar of your notebook. The *Select Kernel* popover appears. If you are using one of the predefined launcher notebooks, the kernel is pre-selected. The example below uses the Scala *Clustering* notebook in JupyterLab Launcher.

![check kernel](../images/jupyterlab/spark-scala/scala-kernel.png)

Selecting the drop down menu opens up a list of available kernels.

![kernel dropdown](../images/jupyterlab/spark-scala/select-dropdown.png)

![select kernel](../images/jupyterlab/spark-scala/dropdown.png)

For Scala (Spark 2.4) notebooks, select the Scala kernel and confirm by clicking the **Select** button.

![confirm kernel](../images/jupyterlab/spark-scala/select.png)

## Initializing SparkSession

All Scala (Spark 2.4) notebooks require that you initialize the session with the following boilerplate code:

<table>
  <th>Notebook</th>
  <th>Spark (Spark 2.3 - deprecated)</th>
  <th>Scala (Spark 2.4)</th>
  <tr>
  <th>Kernel</th>
  <td align="center">Spark</td>
  <td align="center">Scala</td>
  </tr>
  <tr>
  <th>code</th>
  <td align="center">
  no code required
  </td>
  <td>
  <pre class="JSON language-JSON hljs">
import org.apache.spark.sql.{ SparkSession }
val spark = SparkSession
  .builder()
  .master("local")
  .getOrCreate()
</pre>
  </td>
  </tr>
</table>

The Scala (Spark 2.4) image below highlights the key difference in initializing sparkSession with the Spark 2.3 Spark kernel and Spark 2.4 Scala kernel. This example uses the *Clustering* starter notebooks provided in JupyterLab Launcher.

**Spark (Spark 2.3 - deprecated)**

Spark (Spark 2.3 - deprecated) uses the Spark kernel, and therefore, you were not required to define Spark.

**Scala (Spark 2.4)**

Using Spark 2.4 with the Scala kernel requires that you define `val spark` and import `SparkSesson` in order to read or write:

![importing and defining spark](../images/jupyterlab/spark-scala/start-session.png)

## Query data

With Scala (Spark 2.4) `%%` sparkmagic is no longer supported. The following operations can no longer be utilized:

- `%%help`
- `%%info`
- `%%cleanup`
- `%%delete`
- `%%configure`
- `%%local`

The following table outlines the changes needed to convert `%%sql` sparkmagic queries:

<table>
  <th>Notebook</th>
  <th>Spark (Spark 2.3 - deprecated)</th>
  <th>Scala (Spark 2.4)</th>
  <tr>
  <th>Kernel</th>
  <td align="center">Spark</td>
  <td align="center">Scala</td>
  </tr>
  <tr>
  <th>code</th>
    <td>
       <pre class="JSON language-JSON hljs">
%%sql -o df
select * from sparkdf
</pre>
         <pre class="JSON language-JSON hljs">
%%sql -o df -n limit
select * from sparkdf
</pre>
         <pre class="JSON language-JSON hljs">
%%sql -o df -q
select * from sparkdf
</pre>
         <pre class="JSON language-JSON hljs">
%%sql -o df -r fraction
select * from sparkdf
</pre>
      </td>
      <td>
         <pre class="JSON language-JSON hljs">
val df = spark.sql('''
  SELECT *
  FROM sparkdf
''')
</pre>
         <pre class="JSON language-JSON hljs">
val df = spark.sql('''
  SELECT *
  FROM sparkdf
  LIMIT limit
''')
</pre>
         <pre class="JSON language-JSON hljs">
val df = spark.sql('''
  SELECT *
  FROM sparkdf
  LIMIT limit
''')
</pre>
         <pre class="JSON language-JSON hljs">
val sample_df = df.sample(fraction) </pre>
      </td>
   </tr>
</table>

The Scala (Spark 2.4) image below highlights the key differences in making queries with the Spark 2.3 Spark kernel and Spark 2.4 Scala kernel. This example uses the *Clustering* starter notebooks provided in JupyterLab Launcher.

**Spark (Spark 2.3 - deprecated)**

The Spark (Spark 2.3 - deprecated) notebook uses the Spark kernel. The Spark kernel supports and uses `%%sql` sparkmagic.

![](../images/jupyterlab/spark-scala/sql-2.3.png)

**Scala (Spark 2.4)**

The Scala kernel no longer supports `%%sql` sparkmagic. Existing sparkmagic code needs to be converted.

![importing and defining spark](../images/jupyterlab/spark-scala/sql-2.4.png)

## Read a dataset

In Spark 2.3 you needed define variables for `option` values used to read data or use the raw values in the code cell. In Scala, you can use `sys.env("PYDASDK_IMS_USER_TOKEN")` to declare and return a value, this eliminates the need to define variables such as `var userToken`. In the Scala (Spark 2.4) example below, `sys.env` is used to define and return all the required values needed for reading a dataset.

<table>
  <th>Notebook</th>
  <th>Spark (Spark 2.3 - deprecated)</th>
  <th>Scala (Spark 2.4)</th>
  <tr>
  <th>Kernel</th>
  <td align="center">Spark</td>
  <td align="center">Scala</td>
  </tr>
  <tr>
  <th>code</th>
  <td>
  <pre class="JSON language-JSON hljs">

import com.adobe.platform.dataset.DataSetOptions

var df1 = spark.read.format("com.adobe.platform.dataset")
  .option(DataSetOptions.orgId, "310C6D375BA5248F0A494212@AdobeOrg")
  .option(DataSetOptions.batchId, "dbe154d3-197a-4e6c-80f8-9b7025eea2b9")
  .load("5e68141134492718af974844")
</pre>
  </td>
  <td>
  <pre class="JSON language-JSON hljs">

import org.apache.spark.sql.{Dataset, SparkSession}
val spark = SparkSession.builder().master("local").getOrCreate()

val df1 = spark.read.format("com.adobe.platform.query")
  .option("user-token", sys.env("PYDASDK_IMS_USER_TOKEN"))
  .option("ims-org", sys.env("IMS_ORG_ID"))
  .option("api-key", sys.env("PYDASDK_IMS_CLIENT_ID"))
  .option("service-token", sys.env("PYDASDK_IMS_SERVICE_TOKEN"))
  .option("mode", "batch")
  .option("dataset-id", "5e68141134492718af974844")
  .load()
</pre>
  </td>
  </tr>
</table>

| element | description |
| ------- | ----------- |
| df1 | A variable that represents the Pandas dataframe used to read and write data. |
| user-token | Your user token that is automatically fetched using `sys.env("PYDASDK_IMS_USER_TOKEN")`.  |
| service-token | Your service token that is automatically fetched using `sys.env("PYDASDK_IMS_SERVICE_TOKEN")`. |
| ims-org | Your ims-org id that is automatically fetched using `sys.env("IMS_ORG_ID")`. |
| api-key | Your api key that is automatically fetched using `sys.env("PYDASDK_IMS_CLIENT_ID")`. |

The images below highlight the key differences in loading data with the Spark 2.3 and Spark 2.4. This example uses the *Clustering* starter notebooks provided in JupyterLab Launcher.

**Spark (Spark 2.3 - deprecated)**

The Spark (Spark 2.3 - deprecated) notebook uses the Spark kernel. The following two cells shows an example of loading the dataset with a specified dataset id in the date range of (2019-3-21, 2019-3-29).

![loading spark 2.3](../images/jupyterlab/spark-scala/load-2.3.png)

**Scala (Spark 2.4)**

The Scala (Spark 2.4) notebook uses the Scala kernel which requires more values upon setup as highlighted in the first code cell. Additionally, `var mdata` requires more `option` values to be filled. In this notebook, the previously mentioned code for [initializing SparkSession](#initializing-sparksession) is included within the `var mdata` code cell.

![loading spark 2.4](../images/jupyterlab/spark-scala/load-2.4.png)

>[!TIP] In Scala, you can use `sys.env()` to declare and return a value from within `option`. This eliminates the need to define variables if you know they are only going to be used a single time. The following example takes `val userToken` in the above example and declares it in-line within `option`:
> ```scala
> .option("user-token", sys.env("PYDASDK_IMS_USER_TOKEN"))
> ```

## Write to a dataset

 Similar to [reading a dataset](#read-a-dataset), writing to a dataset requires additional `option` values outlined in the table below. In Scala, you can use `sys.env("PYDASDK_IMS_USER_TOKEN")` to declare and return a value, this eliminates the need to define variables such as `var userToken`. In the Scala example below, `sys.env` is used to define and return all the required values needed for writing to a dataset.

<table>
  <th>Notebook</th>
  <th>Spark (Spark 2.3 - deprecated)</th>
  <th>Scala (Spark 2.4)</th>
  <tr>
  <th>Kernel</th>
  <td align="center">Spark</td>
  <td align="center">Scala</td>
  </tr>
  <tr>
  <th>code</th>
  <td>
  <pre class="JSON language-JSON hljs">

import com.adobe.platform.dataset.DataSetOptions

var userToken = spark.sparkContext.getConf.getOption("spark.yarn.appMasterEnv.USER_TOKEN").get
var serviceToken = spark.sparkContext.getConf.getOption("spark.yarn.appMasterEnv.SERVICE_TOKEN").get
var serviceApiKey = spark.sparkContext.getConf.getOption("spark.yarn.appMasterEnv.SERVICE_API_KEY").get

df1.write.format("com.adobe.platform.dataset")
  .option(DataSetOptions.orgId, "310C6D375BA5248F0A494212@AdobeOrg")
  .option(DataSetOptions.userToken, userToken)
  .option(DataSetOptions.serviceToken, serviceToken)
  .option(DataSetOptions.serviceApiKey, serviceApiKey)
  .save("5e68141134492718af974844")
  </pre>
  </td>
  <td>
  <pre class="JSON language-JSON hljs">

import org.apache.spark.sql.{Dataset, SparkSession}
val spark = SparkSession.builder().master("local").getOrCreate()

df1.write.format("com.adobe.platform.query")
  .option("user-token", sys.env("PYDASDK_IMS_USER_TOKEN"))
  .option("service-token", sys.env("PYDASDK_IMS_SERVICE_TOKEN"))
  .option("ims-org", sys.env("IMS_ORG_ID"))
  .option("api-key", sys.env("PYDASDK_IMS_CLIENT_ID"))
  .option("mode", "batch")
  .option("dataset-id", "5e68141134492718af974844")
  .save()
</pre>
  </td>
  </tr>
</table>

| element | description |
| ------- | ----------- |
| df1 | A variable that represents the Pandas dataframe used to read and write data. |
| user-token | Your user token that is automatically fetched using `sys.env("PYDASDK_IMS_USER_TOKEN")`.  |
| service-token | Your service token that is automatically fetched using `sys.env("PYDASDK_IMS_SERVICE_TOKEN")`. |
| ims-org | Your ims-org id that is automatically fetched using `sys.env("IMS_ORG_ID")`. |
| api-key | Your api key that is automatically fetched using `sys.env("PYDASDK_IMS_CLIENT_ID")`. |
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

## Recipe migration guides

Recent changes to Data Science Workspace require that existing Spark and PySpark recipes be updated. Use the following guides to assist in transitioning your recipes.]

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

<!-- messaging to org admins vs details  -->
<!--  -->
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

## Notebook migration guides
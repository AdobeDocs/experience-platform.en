---
keywords: Experience Platform;developer guide;Data Science Workspace;popular topics;Real time machine learning;node reference;
solution: Experience Platform
title: Training a model for Real-time Machine Learning
topic: Training a ML model
---

# Training a model with the IRIS dataset for Real-time Machine Learning 

>[!IMPORTANT]
>Real-time Machine Learning is not available to all users yet. This feature is in alpha and still being tested. This document is subject to change.

This document provides a tutorial for uploading an ONNX model to the Real-time Machine Learning model store using the IRIS dataset. The following tutorials are simplified and do not reflect the complexity of a Real-time Machine Learning service. To view an advanced example, visit the [Real-time Machine Learning authoring notebook user guide](./rtml-authoring-notebook.md).

Using one of the following options, you are going to write python code to read, preprocess, and analyze data. Next, you need to train your own ML model, serialize it into ONNX format, and finally upload it to Real-time Machine Learning model store. Additionally, by the end of the tutorial, you are given a model ID that identifies the trained model for use in the [scoring tutorial](./scoring-ml-model.md).

* [Training a model using a Python notebook](#training-model-python-notebook)
* [Training a model using your own ONNX model](#train-using-own-onnx-model)
* [Training a model using the recipe-builder template](#train-using-recipe-builder)
* [Training a model using the Data Science Workplace recipe workflow](#recipe-workflow-train-model)


## Train a model using a Python notebook {#training-model-python-notebook}

In the Adobe Experience Platform UI, select **[!UICONTROL Notebooks]** from within *Data Science*. Next, select **[!UICONTROL JupyterLab]** and allow some time for the environment to load.

![open JupyterLab](../images/rtml/open-jupyterlab.png)

Start by selecting the **blank Python 3 notebook** from within the JupyterLab launcher.

![blank python](../images/rtml/python-blank.png)

### Access data {#access-data}

Next, select the dataset you wish to use. To access a dataset in your JupyterLab notebook, select the **Data** tab in the left-navigation of JupyterLab. The *Datasets* and *Schemas* directories appear. Select **[!UICONTROL Datasets]** and right-click, then select the **[!UICONTROL Explore Data in Notebook]** option from the dropdown menu on the dataset you wish to use. An executable code entry appears in your notebook.

![dataset access](../images/rtml/access-dataset.png)

### Prepare your model

Use the following template to analyze, pre-process, train, and evaluate your ML model. For a complete example, use the screenshots provided below this template: 

```python
from sklearn import svm, metrics
from sklearn.model_selection import train_test_split


data = df[input_columns]
target = df[target_column]
# Create a classifier: a support vector classifier
classifier = svm.SVC(gamma=0.001)

# Split data into train and test subsets
X_train, X_test, y_train, y_test = train_test_split(
    data, target, test_size=0.5, shuffle=False)

# We train the classifier
classifier.fit(X_train, y_train)

# Now do predictions
predicted = classifier.predict(X_test)


print("Classification report for classifier %s:\n%s\n"
      % (classifier, metrics.classification_report(y_test, predicted)))
disp = metrics.plot_confusion_matrix(classifier, X_test, y_test)
disp.figure_.suptitle("Confusion Matrix")
print("Confusion matrix:\n%s" % disp.confusion_matrix)
```

>[!NOTE]
>The example below uses the scikit-learn library instead of loading the data from an ingested Adobe Experience Platform dataset.

![install scikit](../images/rtml/install-scikit.png)
![training example](../images/rtml/train-example.png)

**Output**

![output for scikit](../images/rtml/train-example-response.png)

### Upload your model

Once you have completed the previous step, you need to serialize your model into an ONNX format and upload it to the Real-time Machine Learning store. This returns the `model_id` used in the [next tutorial](#next-steps).

Use the following template to convert to ONNX and upload your dataset:

```python
from rtml_nodelibs.nodes.standard.ml.artifact_utils
import ModelUpload
from rtml_nodelibs.core.nodefactory
import NodeFactory as nf
from skl2onnx.common.data_types
import FloatTensorType
from skl2onnx
import convert_sklearn

########## Save sklearn model in ONNX format at model_path ##########
inputs = [('features', FloatTensorType([None, X_train.shape[1]]))]
model_onnx = convert_sklearn(classifier, 'ScikitLearnModel', inputs)

model_path = "model.onnx"
os.environ["ONNX_MODEL_PATH"] = model_path

with open(model_path, "wb") as f:
  f.write(model_onnx.SerializeToString())

  ########## Upload the model from model_path to RTML model store ##########
  model = ModelUpload(params = {
    'model_path': model_path
  })

msg_model = model.process(None, 1)

model_id = msg_model.model['model_id']

print("Model ID : ", model_id)
```

**Response**

![model id](../images/rtml/model-id.png)

Once you have received your `model_id`, copy it and proceed to the [next steps](#next-steps).


## Training a model using your own ONNX model {#train-using-own-onnx-model}

In the Adobe Experience Platform UI, select **[!UICONTROL Notebooks]** from within *Data Science*. Next, select **[!UICONTROL JupyterLab]** and allow some time for the environment to load.

![open JupyterLab](../images/rtml/open-jupyterlab.png)

Using the upload button located in JupyterLab notebooks, upload your ONNX model to the Data Science Workspace notebooks environment.

![upload icon](../images/rtml/upload.png)

Next, create a new blank notebook by selecting the blank notebook icon under Python 3 in the JupyterLab launcher.

![blank python](../images/rtml/python-blank.png)

Within the blank notebook, copy and paste the following:

>[!NOTE]
> Make sure to provide the `model_path` of the ONNX model you uploaded.

```python
from rtml_nodelibs.nodes.standard.ml.artifact_utils import ModelUpload
from rtml_nodelibs.core.nodefactory import NodeFactory as nf
 
model_path = <path/to/onnx_model>
########## Upload the model from model_path to RTML model store ##########
model = ModelUpload(params={'model_path': model_path})
 
msg_model = model.process(None, 1)
 
model_id = msg_model.model['model_id']
 
print("Model ID : ", model_id)
```

After running the cell above, a `model_id` is returned. Copy the model ID to be used in the [next tutorial](#next-steps).

## Train a model using a pre-built recipe template {#train-using-recipe-builder}

In the Adobe Experience Platform UI, select **[!UICONTROL Notebooks]** from within *Data Science*. Next, select **[!UICONTROL JupyterLab]** and allow some time for the environment to load.

![open JupyterLab](../images/rtml/open-jupyterlab.png)

Next, follow the [create a recipe using Jupyter notebooks](../jupyterlab/create-a-recipe.md) tutorial. Once complete, you need to modify the pipeline.py file for real time inferencing to work. 

>[!NOTE]
>The template provided by Data Science Workspace needs to be modified to fit your dataset.

Make sure you save your model in the ONNX format and set the environment variable to `ONNX_MODEL_PATH`. The example below shows how to modify the pipeline file using the recipe-builder template.

```python
def train(configProperties, data):

  print("Train Start")

########## Extract fields from configProperties ##########
learning_rate = float(configProperties['learning_rate'])
n_estimators = int(configProperties['n_estimators'])
max_depth = int(configProperties['max_depth'])

########## Fit model ##########
X_train = data.drop('weeklySalesAhead', axis = 1).values
y_train = data['weeklySalesAhead'].values

seed = 1234
model = GradientBoostingRegressor(learning_rate = learning_rate,
  n_estimators = n_estimators,
  max_depth = max_depth,
  random_state = seed)

model.fit(X_train, y_train)

########## Save sklearn model in ONNX format at model_path ##########
inputs = [('features', FloatTensorType([None, X_train.shape[1]]))]
model_onnx = convert_sklearn(model, 'ScikitLearnModel', inputs)

model_path = "retail_sales_model.onnx"
os.environ["ONNX_MODEL_PATH"] = model_path

with open(model_path, "wb") as f:
  f.write(model_onnx.SerializeToString())

print("Train Complete")

return model
```

After modifying the pipeline.py file, run **[!UICONTROL Training]** and **[!UICONTROL Scoring]**. Once complete, select the **[!UICONTROL Create Recipe]** button.

![training and scoring buttons](../images/rtml/train-score.png)

A naming dialog appears. Enter the name of your recipe and select **[!UICONTROL OK]**. A new dialog appears alerting you that the recipe creation has begun. Allow some time for the recipe to be created.

![Recipe dialog](../images/rtml/recipe-dialog.png)

![Recipe dialog](../images/rtml/recipe-dialog-confrim.png)

Once a recipe is created, it can be viewed by selecting **[!UICONTROL View Recipes]** in the dialog provided or by navigating to **[!UICONTROL Models]** then selecting **[!UICONTROL Recipes]** in the top-left navigation. A list of recipes sorted by creation date appear. Confirm your new recipe is at the top.

![your recipe](../images/rtml/view-recipe.png) 

Select your recipe. The recipe overview page appears. In the top-right navigation select **[!UICONTROL Create Model]**.

![Recipe overview](../images/rtml/create-model.png)

Next, select an appropriate dataset. Then click **[!UICONTROL Next]** in the top-right navigation.

![select dataset](../images/rtml/select-dataset.png)

The configuration page opens. Provide a name for the model and review the default model configurations. Default configurations are applied during recipe creation. Review and modify the configuration values by double-clicking the values. To provide a new set of configurations, click **[!UICONTROL Upload New Config]** and drag a JSON file containing model configurations into the browser window. Select **[!UICONTROL Finish]** to create the model.

![Configure model](../images/rtml/configure-model.png)

Once your model is created, you have to wait for your training run to complete. Once a successful training run is complete, you can select the training run to view it's details. 

Select a training run. Once selected, a properties dialog appears to the right. Within this dialog select **[!UICONTROL View Activity Logs]**.

![view training runs](../images/rtml/view-training.png)

The *View Activity Logs* dialog popover appears. Select the URL for the *stderr* logs to download the logs and see the details of the run.

![view logs](../images/rtml/view-logs.png)

Logs are particularly useful for failed runs to see what went wrong. But, in this case you are looking for the `model-id` corresponding to the ONNX model you made. Copy the model id. 

>[!NOTE]
>You do not have to run a scoring job. Real-time Machine Learning edge scoring is covered in the [next step](#next-steps).

![Find model ID](../images/rtml/find-model-id-logs.png)

## Training a model using the Data Science Workplace recipe workflow {#recipe-workflow-train-model}

This is the best method to use if you are familiar with Docker, git and packaging Python code. Using the Data Science Workspace workflow gives you the most amount of flexibility and freedom in creating your recipes. You can pull a base docker image and build your own docker environment, debug your recipe with more ease, clone pre-built recipes to play around with any Data Science Workspace service, schedule the recipe runs, and much more.

### Create a schema

The first step requires that you have a data schema for your dataset. A schema can be created via the Adobe Experience Platform UI or Platform APIs.

>[!NOTE]
>If you already have the data you wish to use ingested into Adobe Experience Platform, skip to [create a Python recipe](#create-a-python-recipe).

* [Create a schema using the schema editor UI tutorial](../../xdm/tutorials/create-schema-ui.md)
* [Create a schema using the schema editor API tutorial](../../xdm/tutorials/create-schema-api.md)

### Ingest your data

Next, you need to ingest data using the schema that you just created. This can be done by using the API or Platform UI.

>[!NOTE]
>If you already have the data you wish to use ingested into Adobe Experience Platform, skip to [create a Python recipe](#create-a-python-recipe).

* [Ingest data into Adobe Experience Platform UI tutorial](../../ingestion/tutorials/ingest-batch-data.md)
* [Ingest data into Adobe Experience Platform API tutorial](../../ingestion/batch-ingestion/api-overview.md)

### Create a Python recipe {#create-a-python-recipe}

Recipe creation starts with packaging source files to build an archive file. Source files define the machine learning logic and algorithms used to solve a specific problem at hand. Use the following tutorial to build a Python Docker image.

* [Package source files into a recipe](../models-recipes/package-source-files-recipe.md)

To complete the next step you need to have a Docker image in an Azure Container Registry along with the corresponding image URL. Select one of the tutorial links below to finish creating a Python recipe:

* [Import a packaged Recipe in the UI](../models-recipes/import-packaged-recipe-ui.md)
* [Import a packaged Recipe using the API](../models-recipes/import-packaged-recipe-api.md)

### Create a training run 

In Adobe Experience Platform Data Science Workspace, a machine learning Model is created by incorporating an existing Recipe that is appropriate for the Model's intent. The Model is then trained and evaluated to optimize its operating efficiency and efficacy by fine-tuning its associated Hyperparameters.

* [Train and evaluate a model in the UI](../models-recipes/train-evaluate-model-ui.md)
* [Train and evaluate a model in the API](../models-recipes/train-evaluate-model-api.md)

>[!IMPORTANT]
>In the pipeline.py file for your recipe, save the model in ONNX format within `model_path` and set the environment variable to `ONNX_MODEL_PATH`. The runtime looks for this specific environment variable.

```python
def train(configProperties, data):
 
    print("Train Start")
 
    ########## Extract fields from configProperties ##########

    learning_rate = float(configProperties['learning_rate'])
    n_estimators = int(configProperties['n_estimators'])
    max_depth = int(configProperties['max_depth'])
 
 
    
    ########## Fit model ##########
    
    X_train = data.drop('weeklySalesAhead', axis=1).values
    y_train = data['weeklySalesAhead'].values
 
    seed = 1234
    model = GradientBoostingRegressor(learning_rate=learning_rate,
                                      n_estimators=n_estimators,
                                      max_depth=max_depth,
                                      random_state=seed)
 
    model.fit(X_train, y_train)
     
    ########## Save sklearn model in ONNX format at model_path ##########
    inputs = [('features', FloatTensorType([None, X_train.shape[1]]))]
    model_onnx = convert_sklearn(model, 'ScikitLearnModel', inputs)
 
    model_path = "retail_sales_model.onnx"
    os.environ["ONNX_MODEL_PATH"] = model_path
 
    with open(model_path, "wb") as f:
        f.write(model_onnx.SerializeToString())
 
    print("Train Complete")
 
    return model
```

Once your model is created, you have to wait for your training run to complete. Once a successful training run is complete, you can select the training run to view its details. Select a training run. Once selected a properties dialog appears to the right, select **[!UICONTROL View Activity Logs]**.

![view training runs](../images/rtml/view-training.png)

The *View Activity Logs* dialog popover appears. Select the URL for the *stderr* logs to download the logs and see the details of the run.

![view logs](../images/rtml/view-logs.png)

Logs are particularly useful for failed runs to see what went wrong. But, in this case you are looking for the `model-id` corresponding to the ONNX model you made. Copy the model id.

![Find model ID](../images/rtml/find-model-id-logs.png)

You do not have to run a scoring job in the recipe. Real-time Machine Learning edge scoring is covered in the [next tutorial](#next-steps).

## Next steps {#next-steps}

By following one of the tutorials above, you have successfully trained and uploaded an ONNX model to the Real-time Machine Learning model store, and have a `model_id` that identifies your model. Continue to the next tutorial to learn how you can [score your Real-time Machine Learning model](./scoring-ml-model.md).
---
keywords: Experience Platform;developer guide;Data Science Workspace;popular topics;Real time machine learning;node reference;
solution: Experience Platform
title: Training a model for Real-time Machine Learning
topic: Training a ML model
---

# Training a model for Real-time Machine Learning

This document provides a tutorial for uploading an ONNX model to the Real-time Machine Learning model store. 

Using one of the following options, you are going to be writing python code to read, preprocess, and analyze data. Next, you are going to train your own ML model, serialize it into ONNX format, and finally upload it to Real-time Machine Learning model store. Additionally, by the end of the tutorial, you are given a model ID that identifies the trained model for use in subsequent tutorials.

* [Training a model using a Python notebook](#training-model-python-notebook)
* [Training a model using the recipe-builder template]()
* [Training a model using the Data Science Workplace recipe workflow]()
* [Training a model using your own ONNX model]()

## Train a model using a Python notebook {#training-model-python-notebook}

In the Adobe Experience Platform UI, select **[!UICONTROL Notebooks]** from within *Data Science*. Next, select **[!UICONTROL JupyterLab]** and allow some time for the environment to load.

![open JupyterLab](../images/rtml/open-jupyterlab.png)

Start by selecting the **blank Python 3 notebook** from within the JupyterLab launcher.

![blank python](../images/rtml/python-blank.png)

### Access data {#access-data}

To access your dataset in your JupyterLab notebook, select the **Data** tab in the left-navigation of JupyterLab. The *Datasets* and *Schemas* directories appear. Select **[!UICONTROL Datasets]** and right-click and select the **[!UICONTROL Explore Data in Notebook]** option from the dropdown menu on the ingested dataset you wish to use. An executable code entry appears in your notebook.

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
from rtml_nodelibs.nodes.standard.ml.artifact_utils import ModelUpload
from rtml_nodelibs.core.nodefactory import NodeFactory as nf
from skl2onnx.common.data_types import FloatTensorType
from skl2onnx import convert_sklearn

#------ Save sklearn model in ONNX format at model_path ------
inputs = [('features', FloatTensorType([None, X_train.shape[1]]))]
model_onnx = convert_sklearn(classifier, 'ScikitLearnModel', inputs)

model_path = "model.onnx"
os.environ["ONNX_MODEL_PATH"] = model_path

with open(model_path, "wb") as f:
	f.write(model_onnx.SerializeToString())

#------- Upload the model from model_path to RTML model store -------
model = ModelUpload(params={'model_path': model_path})

msg_model = model.process(None, 1)

model_id = msg_model.model['model_id']

print("Model ID : ", model_id)
```

**Response**

![model id](../images/rtml/model-id.png)

## Next steps {#next-steps}
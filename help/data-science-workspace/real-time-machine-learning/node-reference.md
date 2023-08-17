---
keywords: Experience Platform;developer guide;Data Science Workspace;popular topics;Real-time Machine Learning;node reference;
solution: Experience Platform
title: Real-time Machine Learning Node Reference
description: A node is the fundamental unit of which graphs are formed. Each node performs a specific task and they can be chained together using links to form a graph that represents an ML pipeline. The task performed by a node represents an operation on input data such as a transformation of data or schema, or a machine learning inference. The node outputs the transformed or inferred value to the next node(s).
exl-id: 67fe26b5-ce03-4a9a-ad45-783b2acf8d92
---
# Real-time Machine Learning node reference (Alpha)

>[!IMPORTANT]
>
>Real-time Machine Learning is not available to all users yet. This feature is in alpha and still being tested. This document is subject to change.

A node is the fundamental unit of which graphs are formed. Each node performs a specific task and they can be chained together using links to form a graph that represents an ML pipeline. The task performed by a node represents an operation on input data such as a transformation of data or schema, or a machine learning inference. The node outputs the transformed or inferred value to the next node(s).

The following guide outlines the supported node libraries for Real-time Machine Learning.

## Discovering nodes for use in your ML pipeline

Copy the following code into a [!DNL Python] notebook to view all the nodes that are available for use.

```python
from pprint import pprint
 
from rtml_nodelibs.core.nodefactory import NodeFactory as nf
```

```python
# Discover Nodes
pprint(nf.discover_nodes())
```

**Example response**

```json
{'FieldOps': 'rtml_nodelibs.nodes.standard.preprocessing.fieldops.FieldOps',
 'FieldTrans': 'rtml_nodelibs.nodes.standard.preprocessing.fieldtrans.FieldTrans',
 'ModelUpload': 'rtml_nodelibs.nodes.standard.ml.artifact_utils.ModelUpload',
 'ONNXNode': 'rtml_nodelibs.nodes.standard.ml.onnx.ONNXNode',
 'Pandas': 'rtml_nodelibs.nodes.standard.preprocessing.pandasnode.Pandas',
 'Processor': 'rtml_nodelibs.nodes.standard.preprocessing.processor.Processor',
 'Receiver': 'rtml_nodelibs.nodes.standard.preprocessing.receiver.Receiver',
 'ScikitLearn': 'rtml_nodelibs.nodes.standard.ml.scikitlearn.ScikitLearn',
 'Simulator': 'rtml_nodelibs.nodes.standard.preprocessing.simulator.Simulator',
 'Split': 'rtml_nodelibs.nodes.standard.preprocessing.splitter.Split'}
```

## Standard nodes

Standard nodes build upon open source data science libraries such as Pandas and ScikitLearn.

### ModelUpload

The ModelUpload node is an internal Adobe node that takes a model_path and uploads the model from the local model path to the Real-time Machine Learning blob store.

```python
model = ModelUpload(params={'model_path': model_path})
  
msg_model = model.process(None, 1)
  
model_id = msg_model.model['model_id']
```

### ONNXNode

ONNXNode is an internal Adobe node that takes a model ID to pull the pre-trained ONNX model and uses it to score on incoming data. 

>[!TIP]
>
>Specify the columns in the same order that you would like the data to be sent to the ONNX model to score.

```python
node_model_score = ONNXNode(params={"features": ['browser', 'device', 'login_page', 'product_page', 'search_page'], "model_id": model_id})
```

### Pandas {#pandas}

The following Pandas node lets you import any `pd.DataFrame` method or any general pandas top level function. To learn more about Pandas methods, visit the [Pandas methods documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html). For more information on top level functions, visit the [Pandas API reference guide for general functions](https://pandas.pydata.org/pandas-docs/stable/reference/general_functions.html).

The node below uses `"import": "map"` to import the method name as a string in the parameters, followed by inputting the parameters as a map function. The example below does this by using `{"arg": {"Desktop": 1, "Mobile": 0}, "na_action": 0}`. After you have the map in place, you have the option to set `inplace` as `True` or `False`. Set `inplace` as `True` or `False` based on whether you want to apply transformation inplace or not. By default `"inplace": False` creates a new column. Support to provide a new column name is set to be added in a subsequent release. The last line `cols` can be a single column name or a list of columns. Specify the columns on which you want to apply the transformation. In this example `device` is specified.

```python
#  df["device"] = df["device"].map({"Desktop":1, "Mobile":0}, na_action=0)
 
node_device_apply = Pandas(params={"import": "map",
    "kwargs": {"arg": {"Desktop": 1, "Mobile": 0}, "na_action": 0},
    "inplace": True,
    "cols": "device"})
 
 
# df["browser"] = df["browser"].map({"chrome": 1, "firefox": 0}, "na_action": 0})
 
node_browser_apply = Pandas(params={"import": "map",
    "kwargs": {"arg": {"chrome": 1, "firefox": 0}, "na_action": 0},
    "inplace": True,
    "cols": "browser"})
```

### ScikitLearn

The ScikitLearn node lets you import any ScikitLearn ML model or scaler. Use the table below for more information on any of the values used in the example:

```python
model_train = ScikitLearn(params={
    "features":['browser', 'device', 'login_page', 'product_page', 'search_page'],
    "label": "payment_confirm",
    "mode": "train",
    "model_path": "resources/model.onnx",
    "params": {
        "model": "sklearn.linear_model.LogisticRegression",
        "model_params": {"solver": 'lbfgs'}
    }})
msg6 = model_train.process(msg5)
```

|Value|Description|
| --- | --- |
| features | Input features to the model (list of strings). <br> For example: `browser`, `device`, `login_page`, `product_page`, `search_page` |
| label | Target column name (string). |
| mode | Train/test (string). |
| model_path | Path to the save model locally in onnx format. |
| params.model |  Absolute import path to the model (string) eg: `sklearn.linear_model.LogisticRegression`. |
| params.model_params |  Model hyperparameters, see the [sklearn API (map/dict)](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html) documentation for more information. |
| node_instance.process(data_message_from_previous_node) | The method `process()` takes DataMsg from the previous node and applies transformation. This depends on the current node being used. |

### Split

Use the following node to split your dataframe into train and test by passing `train_size` or `test_size`. This returns a dataframe with a multi-index. You can access train and test dataframes using the following example, `msg5.data.xs("train")`.

```python
splitter = Split(params={"train_size": 0.7})
msg5 = splitter.process(msg4)
```

## Next steps

The next step is to create nodes for use in scoring a Real-time Machine Learning model. For more information, visit the [Real-time Machine Learning notebook user guide](./rtml-authoring-notebook.md).

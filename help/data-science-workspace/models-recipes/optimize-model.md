---
keywords: Experience Platform;optimize;model;Data Science Workspace;popular topics;model insights
solution: Experience Platform
title: Optimize a Model Using the Model Insights Framework
type: Tutorial
description: The Model Insights Framework provides the data scientist with tools in Data Science Workspace to make quick and informed choices for optimal machine learning models based on experiments.
exl-id: f989a3f1-6322-47c6-b7d6-6a828766053f
---
# Optimize a model using the Model Insights framework

The Model Insights Framework provides the data scientist with tools in [!DNL Data Science Workspace] to make quick and informed choices for optimal machine learning models based on experiments. The framework will improve the speed and effectiveness of the machine learning workflow as well as improving ease of use for data scientists. This is done by providing a default template for each machine learning algorithm type to assist with model tuning. The end result allows data scientists and citizen data scientists to make better model optimization decisions for their end customers.

## What are metrics?

After implementing and training a model, the next step a data scientist would do is to find how well the model will perform. Various metrics are used to find how effective a model will do compared with others. Some examples of metrics used include:
- Classification accuracy
- Area under curve
- Confusion matrix
- Classification report

## Configuring recipe code

Currently, the Model Insights Framework supports the following runtimes:
- [Scala](#scala)
- [Python/Tensorflow](#pythontensorflow)
- [R](#r)

Sample code for recipes can be found in the [experience-platform-dsw-reference](https://github.com/adobe/experience-platform-dsw-reference) repository under `recipes`. Specific files from this repository will be referenced throughout this tutorial.

### Scala {#scala}

There are two ways to bring in metrics to the recipes. One is to use the default evaluation metrics provided by the SDK and the other is to write custom evaluation metrics. 

#### Default evaluation metrics for Scala

Default evaluations are calculated as part of the classification algorithms. Here are some default values for evaluators that are currently implemented:

|Evaluator Class | `evaluation.class`|
|--- | ---|
|DefaultBinaryClassificationEvaluator | `com.adobe.platform.ml.impl.DefaultBinaryClassificationEvaluator`|
|DefaultMultiClassificationEvaluator | `com.adobe.platform.ml.impl.DefaultMultiClassificationEvaluator`|
|RecommendationsEvaluator | `com.adobe.platform.ml.impl.RecommendationsEvaluator`|

The evaluator can be defined in the recipe in the [application.properties](https://github.com/adobe/experience-platform-dsw-reference/blob/master/recipes/scala/src/main/resources/application.properties) file in the `recipe` folder. Sample code enabling the `DefaultBinaryClassificationEvaluator` is shown below:

```scala
evaluation.class=com.adobe.platform.ml.impl.DefaultBinaryClassificationEvaluator
evaluation.labelColumn=label
evaluation.predictionColumn=prediction
training.evaluate=true
```

After an evaluator class is enabled, a number of metrics will be calculated during training by default. Default metrics can be declared explicitly by adding the following line to your `application.properties`.

```scala
evaluation.metrics.com=com.adobe.platform.ml.impl.Constants.DEFAULT
```

>[!NOTE]
>
>If the metric is not defined, the default metrics will be active.

A specific metric can be enabled by changing the value for `evaluation.metrics.com`. In the following example, the F-Score metric is enabled.

```scala
evaluation.metrics=com.adobe.platform.ml.impl.Constants.FSCORE
```

The following table state the default metrics for each class. A user can also use the values in the `evaluation.metric` column to enable a specific metric.

| `evaluator.class` | Default Metrics | `evaluation.metric` |
| --- | --- | --- |
| `DefaultBinaryClassificationEvaluator` | -Precision <br>-Recall <br>-Confusion Matrix <br>-F-Score <br>-Accuracy <br>-Receiver Operating Characteristics <br>-Area Under the Receiver Operating Characteristics| -`PRECISION` <br>-`RECALL` <br>-`CONFUSION_MATRIX` <br>-`FSCORE` <br>-`ACCURACY` <br>-`ROC` <br>-`AUROC` |
| `DefaultMultiClassificationEvaluator` | -Precision <br>-Recall <br>-Confusion Matrix <br>-F-Score <br>-Accuracy <br>-Receiver Operating Characteristics <br>-Area Under the Receiver Operating Characteristics| -`PRECISION` <br>-`RECALL` <br>-`CONFUSION_MATRIX` <br>-`FSCORE` <br>-`ACCURACY` <br>-`ROC` <br>-`AUROC` |
| `RecommendationsEvaluator` | -Mean Average Precision (MAP) <br>-Normalized Discounted Cumulative Gain <br>-Mean Reciprocal Rank <br>-Metric K| -`MEAN_AVERAGE_PRECISION` <br>-`NDCG` <br>-`MRR` <br>-`METRIC_K` |
 

#### Custom evaluation metrics for Scala

The custom evaluator can be provided by extending the interface of `MLEvaluator.scala` in your `Evaluator.scala` file. In the example [Evaluator.scala](https://github.com/adobe/experience-platform-dsw-reference/blob/master/recipes/scala/src/main/scala/com/adobe/platform/ml/Evaluator.scala) file, we define custom `split()` and `evaluate()` functions. Our `split()` function splits our data randomly with a ratio of 8:2 and our `evaluate()` function defines and returns 3 metrics: MAPE, MAE, and RMSE.

>[!IMPORTANT]
>
>For the `MLMetric` class, do not use `"measures"` for `valueType` when creating a new `MLMetric` else the metric will not populate in the custom evaluation metrics table.  
>  
> Do this: `metrics.add(new MLMetric("MAPE", mape, "double"))`  
> Not this: `metrics.add(new MLMetric("MAPE", mape, "measures"))`


Once defined in the recipe, the next step is to enable it in the recipes. This is done in the [application.properties](https://github.com/adobe/experience-platform-dsw-reference/blob/master/recipes/scala/src/main/resources/application.properties) file in the project's `resources` folder. Here the `evaluation.class` is set to the `Evaluator` class defined in `Evaluator.scala`

```scala
evaluation.class=com.adobe.platform.ml.Evaluator
```

In the [!DNL Data Science Workspace], the user would be able to see the insights in the "Evaluation Metrics" tab in the experiment page.

### [!DNL Python/Tensorflow] {#pythontensorflow}

As of now, there are no default evaluation metrics for [!DNL Python] or [!DNL Tensorflow]. Thus, to get the evaluation metrics for [!DNL Python] or [!DNL Tensorflow], you will need to create a custom evaluation metric. This can be done by implementing the `Evaluator` class.

#### Custom evaluation metrics for [!DNL Python]

For custom evaluation metrics, there are two main methods that need to be implemented for the evaluator: `split()` and `evaluate()`. 

For [!DNL Python], these methods would be defined in [evaluator.py](https://github.com/adobe/experience-platform-dsw-reference/blob/master/recipes/python/retail/retail/evaluator.py) for the `Evaluator` class. Follow the [evaluator.py](https://github.com/adobe/experience-platform-dsw-reference/blob/master/recipes/python/retail/retail/evaluator.py) link for an example of the `Evaluator`.

Creating evaluation metrics in [!DNL Python] requires the user to implement the `evaluate()` and `split()` methods. 

The `evaluate()` method returns the metric object which contains an array of metric objects with properties of `name`, `value`, and `valueType`. 

The purpose of the `split()` method is to input data and to output a training and a testing dataset. In our example, the `split()` method inputs data using the `DataSetReader` SDK and then cleans up the data by removing unrelated columns. From there, additional features are created from existing raw features in the data. 

The `split()` method should return a training and testing dataframe which is then used by the `pipeline()` methods to train and test the ML model.

#### Custom evaluation metrics for Tensorflow

For [!DNL Tensorflow], similar to [!DNL Python], the methods `evaluate()` and `split()` in the `Evaluator` class will need to be implemented. For `evaluate()`, the metrics should be returned while `split()` returns the train and test data sets. 

```PYTHON
from ml.runtime.python.Interfaces.AbstractEvaluator import AbstractEvaluator

class Evaluator(AbstractEvaluator):
    def __init__(self):
       print ("initiate")

    def evaluate(self, data=[], model={}, config={}):

        return metrics

    def split(self, config={}):

       return 'train', 'test'
```

### R {#r}

As of now, there are no default evaluation metrics for R. Thus, to get the evaluation metrics for R, you will need to define the `applicationEvaluator` class as part of the recipe.

#### Custom evaluation metrics for R

The main purpose of the `applicationEvaluator` is to return a JSON object containing key-value pairs of metrics.

This [applicationEvaluator.R](https://github.com/adobe/experience-platform-dsw-reference/blob/master/recipes/R/Retail%20-%20GradientBoosting/R/applicationEvaluator.R) can be used as an example. In this example, the `applicationEvaluator` is split into three familiar sections:
- Load data
- Data preparation/feature engineering
- Retrieve saved model and evaluate

Data is first loaded to a dataset from a source as defined in [retail.config.json](https://github.com/adobe/experience-platform-dsw-reference/blob/master/recipes/R/Retail%20-%20GradientBoosting/retail.config.json). From there, the data is cleaned and engineered to fit the machine learning model. Lastly, the model is used to make a prediction using our dataset and from the predicted values and actual values, metrics are calculated. In this case, MAPE, MAE, and RMSE are defined and returned in the `metrics` object.

## Using pre-built metrics and visualization charts

The [!DNL Sensei Model Insights Framework] will support one default template for each type of machine learning algorithm. The table below shows common high-level machine learning algorithm classes and corresponding evaluation metrics and visualizations. 

| ML Algorithm Type | Evaluation Metrics | Visualizations |
| --- | --- | --- |
| Regression | - RMSE<br>- MAPE<br>- MASE<br>- MAE| Predicted vs actual values overlay curve |
| Binary classification | - Confusion matrix<br>- Precision-recall<br>- Accuracy<br>- F-score (specifically F1 ,F2)<br>- AUC<br>- ROC | ROC curve and confusion matrix |
| Multi-class classification | -Confusion matrix <br>- For each class: <br>- precision-recall accuracy <br>- F-score (specifically F1, F2) | ROC curve and confusion matrix |
| Clustering (w/ ground truth) | - NMI (normalized mutual information score), AMI (adjusted mutual information score)<br>- RI (Rand index), ARI (adjusted Rand index)<br>- homogeneity score, completeness score, and V-measure<br>- FMI (Fowlkes-Mallows index)<br>- Purity<br>- Jaccard index | Clusters plot showing clusters and centroids with relative cluster sizes reflective of data points falling within cluster |
| Clustering (w/o ground truth) | - Inertia<br>- Silhouette coefficient<br>- CHI (Calinski-Harabaz index)<br>- DBI (Davies–Bouldin index)<br>- Dunn index| Clusters plot showing clusters and centroids with relative cluster sizes reflective of data points falling within cluster |
| Recommendation | -Mean Average Precision (MAP) <br>-Normalized Discounted Cumulative Gain <br>-Mean Reciprocal Rank <br>-Metric K | TBD |
| TensorFlow use cases | TensorFlow Model Analysis (TFMA)| Deepcompare neural network model comparison/visualization |
| Other/error capture mechanism | Custom metric logic (and corresponding evaluation charts) defined by model author. Graceful error handling in case of template mismatch | Table with key-value pairs for evaluation metrics |

---
keywords: Experience Platform;retail sales recipe;Data Science Workspace;popular topics;recipes;pre build recipe
solution: Experience Platform
title: Retail Sales Recipe
description: The Retail Sales recipe enables you to predict sales forecast for all stores seeded for a certain time period. With an accurate prediction model, the retailer would be able to find the relationship between demand and pricing policies and make optimized pricing decisions to maximize sales and revenue.
exl-id: ff01fcd1-fca6-4957-8470-a974fd1520aa
---
# Retail sales recipe

The Retail Sales recipe enables you to predict sales forecast for all stores seeded for a certain time period. With an accurate prediction model, the retailer would be able to find the relationship between demand and pricing policies and make optimized pricing decisions to maximize sales and revenue.

The following document will answer questions such as:
* Who is this recipe built for?
* What does this recipe do?
* How do I get started?

## Who is this recipe built for?

A retailer faces many challenges to stay competitive in the current market. Your brand seeks to boost annual sales for your retail brand but there are many decisions to make to minimize your operating costs. Too much supply increases inventory costs while too little supply increases risk of losing customers to other brands. Do you need to order more supply for the coming months? How do you decide on optimal pricing for your products to maintain weekly sales goals?

## What does this recipe do?

The Retail Sales Forecasting recipe uses machine learning to predict sale trends. The recipe does this by leveraging the wealth of historical retail data and customized gradient boosting regressor machine learning algorithm to predict sales one week in advance. The model utilizes past purchase history and defaults to pre-determined configuration parameters determined by our Data Scientists to enhance predictive accuracy.

## How do I get started?

You can get started by following this [tutorial](../jupyterlab/create-a-model.md).

This tutorial will go over creating the Retail Sales recipe in a Jupyter Notebook and using the notebook to recipe workflow to create the recipe in Adobe Experience Platform.

## Data schema

This recipe uses [XDM schemas](../../xdm/schema/field-dictionary.md) to model the data. The schema used for this recipe is shown below:

| Field Name | Type |
| --- | --- |
| date | String | 
| store | Integer |
| storeType | String |
| weeklySales | Number |
| storeSize | Integer |
| temperature | Number |
| regionalFuelPrice | Number |
| markdown | Number |
| cpi | Number |
| unemployment | Number |
| isHoliday | Boolean |


## Algorithm

First, the training dataset in the *DSWRetailSales* schema is loaded. From here, the model is trained using a [gradient boosting regressor algorithm](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingRegressor.html). Gradient boosting uses the idea that weak learners (one that is at least slightly better than random chance) can form a succession of learners focused on improving the previous learner's weaknesses. Together, they can be used to create a powerful predictive model.

The process involves three elements: a loss function, a weak learner, and an additive model. 

The loss function refers to a measure of how good a prediction model does in terms of being able to predict the expected outcome - least squares regression is used in this recipe. 

In gradient boosting, a decision tree is used as the weak learner. Typically, trees with a constrained number of layers, nodes, and splits are used to ensure the learner remain weak. 

Lastly, an additive model is used. After calculating the loss with the loss function, the tree that reduces the loss is chosen and weighted to improve modeling of the more difficult observations. The output of the weighted tree is then added to the existing sequence of trees to improve the final output of the model - quantity of future sales .

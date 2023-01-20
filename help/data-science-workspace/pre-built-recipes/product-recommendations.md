---
keywords: Experience Platform;product recommendation recipe;Data Science Workspace;popular topics;recipes;pre build recipe
solution: Experience Platform
title: Product Recommendation Recipe
description: The Product Recommendations recipe enables you to provide personalized product recommendations that are tailored to your customer's needs and interests. With an accurate prediction model, a customer's purchase history can provide you with insight on what products they may be interested in.
exl-id: 508d55af-c33b-4f1d-b1b6-f00ed5d12bf9
---
# Product recommendation recipe

The Product Recommendations recipe enables you to provide personalized product recommendations that are tailored to your customer's needs and interests. With an accurate prediction model, a customer's purchase history can provide you with insight on what products they may be interested in.

## Who is this recipe built for?

In modern day, a retailer can offer a multitude of products, giving their customers a lot of choices which can also hinder their customers search. Due to time and effort constraints, customers may not find the product they desire, resulting in purchases with a high level of cognitive dissonance or no purchase at all.

## What does this recipe do?

The Product Recommendations recipe uses machine learning to analyze a customer's interactions with products in the past, and generate a personalized list of product recommendations quickly and effortlessly. This optimizes the product discovery process and eliminates long, unproductive, irrelevant searches for your customers. As a result, the Product Recommendations recipe can improve a customer's overall purchasing experience, leading to higher engagement and stronger brand loyalty.

## How do I get started?

You can get started by following the Adobe Experience Platform Lab tutorial (see Lab link below). This tutorial will show you how to create the Product Recommendations recipe in a Jupyter Notebook by following the [notebook to recipe](../jupyterlab/create-a-model.md) workflow, and implementing the recipe in [!DNL Experience Platform] [!DNL Data Science Workspace].

* [Lab: Predict the Future with Data Science Workspace](https://expleague.azureedge.net/labs/L777/index.html)
* [Lab resources](https://github.com/adobe/experience-platform-dsw-reference/tree/master/Summit/2019/resources)

## Data schema

This recipe uses custom [XDM schemas](../../xdm/schema/field-dictionary.md) to model the input and output data:

### Input data schema

| Field Name | Type |
| --- | --- |
| itemId | String |
| interactionType | String |
| timestamp | String |
| userId | String |

### Output data schema

| Field Name | Type |
| --- | --- |
| recommendations | String |
| userId | Integer |

## Algorithm

The Product Recommendations recipe utilizes collaborative filtering to generate a personalized list of product recommendations for your customers. Collaborative filtering, unlike a content based approach, does not require information about a specific product but rather utilizes a customer's historical preferences on a set of products. This powerful recommendation technique uses two simple assumptions:
* There are customers with similar interests, and they can be grouped by comparing their purchasing and browsing behaviors.
* A customer is more likely to be interested in a recommendation based off of similar customers in terms of their purchasing and browsing behavior.

This process is broken down into two main steps. First, define a subset of similar customers. Then, within that set, identify similar features among those customers in order to return a recommendation for the target customer.

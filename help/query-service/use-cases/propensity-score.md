---
title: Calculate Propensity Score With Query Service And Machine Learning
description: Learn how to use Query Service to enable machine learning on Experience Platform data to generate a predictive model. This document demonstrates how to use Platform data to predict a customers' propensity to purchase on each visit.
exl-id: fc9dbc5c-874a-41a9-9b60-c926f3fd6e76
---
# Calculate propensity score with Query Service and machine learning

Query Service has access to billions of analytics records stored on AEP.
This guide explains how to use Query Service to provide Platform data to train a machine learning model in a computational notebook. This model can be used to predict a customers' propensity to purchase on each visit .



## Getting started

As part of this process requires you to train a machine learning model, this document assumes a working knowledge of one or more machine learning environments. 

This example uses [!DNL Jupyter Notebook] as a development environment. Although there are many options available, [!DNL Jupyter Notebook] is recommended because it is an open-source web application that has low computational requirements. It can be [downloaded from the official site](https://jupyter.org/). 

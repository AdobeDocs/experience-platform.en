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

In the Adobe Experience Platform UI, select *Notebooks* from within *Data Science*. Next, select JupyterLab and allows some time for the environment to load.

Start by selecting the blank Python 3 notebook from within the JupyterLab launcher.
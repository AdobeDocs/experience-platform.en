---
keywords: Experience Platform;developer guide;endpoint;Data Science Workspace;popular topics;data science workspace;data science
solution: Experience Platform
title: Sensei Machine Learning API Guide
description: The Sensei Machine Learning API allows developers to perform CRUD operations on various Data Science Workspace resources. Follow this guide to learn how to perform key operations using the API.
exl-id: d51d0eb2-b1e9-4cc1-889a-9487395703b0
---
# [!DNL Sensei Machine Learning] API guide

The [!DNL Sensei Machine Learning] API provides a mechanism for data scientists to organize and manage machine learning services, from algorithm onboarding through experimentation and to service deployment.

This developer guide provides steps to help you start using the [Sensei Machine Learning API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/sensei-ml-api.yaml), and demonstrates API calls for performing CRUD operations on various Data Science Workspace resources.

## Getting started

You are required to have completed the [authentication](https://www.adobe.com/go/platform-api-authentication-en) tutorial in order to have access to the following request headers to make calls to [!DNL Adobe Experience Platform] APIs:

* Authorization: Bearer `{ACCESS_TOKEN}`
* x-api-key: `{API_KEY}`
* x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

* x-sandbox-name: `{SANDBOX_NAME}`

For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

* Content-Type: application/json

## Next steps

Once you have gathered the required authentication credentials, you can proceed to the subsequent sections of this developer guide for sample API calls to the following endpoint groups:

* [Engines](./engines.md)
* [Experiments](./experiments.md)
* [Insights](./insights.md)
* [MLInstances (Recipes)](./mlinstances.md)
* [MLServices](./mlservices.md)
* [Models](./models.md)
* [Appendix](./appendix.md)

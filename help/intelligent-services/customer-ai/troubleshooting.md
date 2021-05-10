---
keywords: Experience Platform;getting started;customer ai;popular topics;customer ai input;customer ai output;customer ai troubleshooting;customer ai errors
solution: Experience Platform, Intelligent Services, Real-time Customer Data Platform
title: Customer AI error troubleshooting
topic-legacy: Getting started
description: Find answers to common errors in Customer AI.
type: Documentation
---

# Customer AI error troubleshooting

In the event that you receive one of the following errors, follow the recommended steps to troubleshoot.

## Model quality is poor

If you receive the error "Model quality is poor". It is recommend that you create a new instance with a modified configuration.

**Recommended fix**

"Model quality is poor" means that the model accuracy is not within an acceptable range. Customer AI was unable to build a reliable model and AUC (Area under the ROC curve) < 0.7 after training. To fix the error, it is recommended that you change one of the configuration parameters and rerun the training.

Start by checking the accuracy of your data. 

- Check whether your dataset has the latest dates. Customer AI always assumes that the data is up-to-date when the model is triggered.
- Check for missing data within the past 3-9 months. Customer AI requires a minimum amount of data within your defined prediction window. Make sure your dataset meets the [Customer AI historical data requirements](./input-output.md#data-requirements).
- Check for missing data in commerce, application, web, and search, within your schema field properties.

If your data is correct, change your prediction window.

- Try changing your prediction window to 7 days and see if the error continues to occur. If the error no longer occurs, this indicates that you may not have enough data for your defined prediction window.

You can also change the eligibility population condition to restrict the model to certain profiles (for example, `_experience.analytics.customDimensions.eVars.eVar142` exists in last 56 Days). This restricts the population and size of the data used in the training window.
---
keywords: Experience Platform;home;popular topics;Policy enforcement;Automatic enforcement;API-based enforcement;data governance
solution: Experience Platform
title: Policy enforcement overview
topic: guide
description: Once data usage labels have been applied to Adobe Experience Platform datasets, and data usage policies have been defined for marketing actions against those labels, Data Governance capabilities allow you to enforce those policies and prevent data operations that constitute policy violations. There are two methods of policy enforcement provided by Data Governance features on Platform, API-based enforcement and automatic enforcement.
---

# Policy enforcement overview

Once data usage labels have been applied to [!DNL Platform] datasets, and data usage policies have been defined for marketing actions against those labels, [!DNL Data Governance] capabilities allow you to enforce those policies and prevent data operations that constitute policy violations.

There are two methods of policy enforcement provided by [!DNL Data Governance] features on [!DNL Platform]: API-based enforcement and automatic enforcement.

## API-based enforcement

The [!DNL Policy Service] API provides endpoints that allow you to test marketing actions against datasets or arbitrary combinations of data usage labels in order to check if any policy violations occur. Based on the API response, you can then set up protocols within your experience application to appropriately enforce data usage policy compliance.

See the tutorial on [API-based enforcement](./api-enforcement.md) for steps on how to evaluate policies using the API.

## Automatic enforcement

Experience Platform leverages data lineage, data classification, and policy management capabilities to automatically evaluate and surface policy violations. See the overview on [automatic policy enforcement](./auto-enforcement.md) for more information.
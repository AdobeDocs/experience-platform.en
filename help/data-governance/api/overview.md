---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Policy Service API Guide
description: The Policy Service API allows developers to manage data usage labels and policies in Experience Platform. Follow this guide to learn how to perform key operations using the API.
role: Developer
exl-id: 23c05670-7107-4b96-bc24-0a51b5d267b2
---
# [!DNL Policy Service] API guide

Adobe Experience Platform Data Governance allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use. It plays a key role within [!DNL Experience Platform] at various levels, including cataloging, data lineage, data usage labeling, data usage policies, and controlling usage of data for marketing actions.

The [!DNL Policy Service] API provides several endpoints that allow you to programmatically manage data usage labels and policies, as well as evaluate marketing actions for policy violations. These endpoints are outlined below. Please visit the individual endpoint guides for details and refer to the [getting started guide](./getting-started.md) for important information on required headers, reading sample API calls, and more.

To view all available endpoints and CRUD operations, visit the [[!DNL Policy Service] API swagger](https://www.adobe.io/experience-platform-apis/references/policy-service/).

## Labels

Apply data usage labels to schemas to categorize datasets and fields according to usage policies that apply to that data. Labels can be applied at any time, providing flexibility in how you choose to govern data. Best practices encourage labeling data as soon as it is ingested into [!DNL Experience Platform], or as soon as data becomes available for use in [!DNL Platform]. You can created, view, edit, and delete labels using the `/labels` endpoint. To learn how to use this endpoint, visit the [labels endpoint guide](./labels.md).

## Marketing actions

Marketing actions (also called marketing use cases), in the context of the Data Governance framework, are actions that an [!DNL Experience Platform] data consumer can take, for which your organization wants to restrict data usage. For detailed information on working with marketing actions, see the [marketing actions endpoint guide](./marketing-actions.md).

## Policies

Data governance policies are rules that describe the kinds of marketing actions that you are allowed to, or restricted from, performing on data within [!DNL Experience Platform].

>[!NOTE]
>
>Data governance policies are not to be confused with access control policies, which determine the specific data attributes that can be accessed by certain Platform users in your organization. See the guide on [attribute-based access control](../../access-control/abac/overview.md) for more information.

A data governance policy is defined by the following:

1. A specific marketing action
1. The data usage label(s) that action is restricted from being performed against

To learn how to manage policies in the API, see the [policies endpoint guide](./policies.md)

## Evaluation

Once data usage labels have been applied to Platform schemas, and data usage policies have been defined for marketing actions against those labels, Data Governance capabilities allow you to enforce those policies and prevent data operations that constitute policy violations.

The [!DNL Policy Service] API provides endpoints that allow you to test marketing actions against datasets or arbitrary combinations of data usage labels in order to check if any policy violations occur. Based on the API response, you can then set up protocols within your experience application to appropriately enforce data usage policy compliance. See the [evaluation endpoints guide](./evaluation.md) for more information.

## Next steps

To begin making calls using the [!DNL Policy Service] API, read the [getting started guide](./getting-started.md) then select one of the endpoint guides to learn how to use specific endpoints. To work with labels and policies using the [!DNL Experience Platform] UI, please refer to the [labels user guide](../labels/user-guide.md) and [policies user guide](../policies/user-guide.md), respectively.

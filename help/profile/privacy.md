---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Privacy request processing in Real-time Customer Profile
topic: overview
---

# Privacy request processing in [!DNL Real-time Customer Profile]

Adobe Experience Platform [!DNL Privacy Service] processes customer requests to access, opt out of sale, or delete their personal data as delineated by privacy regulations such as the General Data Protection Regulation (GDPR) and [!DNL California Consumer Privacy Act] (CCPA).

This document covers essential concepts related to processing privacy requests for [!DNL Real-time Customer Profile].

## Getting started

It is recommended that you have a working understanding of the following [!DNL Experience Platform] services before reading this guide:

* [[!DNL Privacy Service]](home.md): Manages customer requests for accessing, opting out of sale, or deleting their personal data across Adobe Experience Cloud applications.
* [[!DNL Identity Service]](../identity-service/home.md): Solves the fundamental challenge posed by the fragmentation of customer experience data by bridging identities across devices and systems.
* [[!DNL Real-time Customer Profile]](../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

## Understanding identity namespaces {#namespaces}

Adobe Experience Platform [!DNL Identity Service] bridges customer identity data across systems and devices. [!DNL Identity Service] uses **identity namespaces** to provide context to identity values by relating them to their system of origin. A namespace can represent a generic concept such as an email address ("Email") or associate the identity with a specific application, such as an Adobe Advertising Cloud ID ("AdCloud") or Adobe Target ID ("TNTID").

Identity Service maintains a store of globally defined (standard) and user-defined (custom) identity namespaces. Standard namespaces are available for all organizations (for example, "Email" and "ECID"), while your organization can also create custom namespaces to suit its particular needs.

For more information about identity namespaces in [!DNL Experience Platform], see the [identity namespace overview](../identity-service/namespaces.md).

## Submitting requests {#submit}

The sections below outline how to make privacy requests for [!DNL Real-time Customer Profile] using the [!DNL Privacy Service] API or UI. Before reading these sections, it is strongly recommended that you review the [Privacy Service API](../privacy-service/api/getting-started.md) or [Privacy Service UI](../privacy-service/ui/overview.md) documentation for complete steps on how to submit a privacy job, including how to properly format submitted user identity data in request payloads.

>[!IMPORTANT]
>
>Privacy Service is only able to process [!DNL Profile] data using a merge policy that does not perform identity stitching. If you are using the UI to confirm whether your privacy requests are being processed, ensure that you are using a policy with "[!DNL None]" as its [!UICONTROL ID stitching] type. In other words, you cannot use a merge policy where [!UICONTROL ID stitching] is set to "[!UICONTROL Private graph]".
>
>![](./images/privacy/no-id-stitch.png)

### Using the API

When creating job requests in the API, any `userIDs` that are provided must use a specific `namespace` and `type` depending on the data store they apply to. IDs for the [!DNL Profile] store must use either "standard" or "custom" for their `type` value, and a valid [identity namespace](#namespaces) recognized by [!DNL Identity Service] for their `namespace` value.

>[!NOTE]
>
>You may need to provide more than one ID for each customer, depending on the identity graph and how profile fragments are stored in Platform. See the next section [profile fragments](#fragments) for more information.

In addition, the `include` array of the request payload must include the product values for the different data stores the request is being made to. When making requests to the [!DNL Data Lake], the array must include the value "ProfileService".

The following request creates a new privacy job for [!DNL Real-time Customer Profile], using the standard `Email` identity namespace. It also includes the product value for [!DNL Profile] (`ProfileService`) in the `include` array:

```shell
curl -X POST \
  https://platform.adobe.io/data/core/privacy/jobs \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "companyContexts": [
      {
        "namespace": "imsOrgID",
        "value": "{IMS_ORG}"
      }
    ],
    "users": [
      {
        "key": "user12345",
        "action": ["access","delete"],
        "userIDs": [
          {
            "namespace": "Email",
            "value": "ajones@acme.com",
            "type": "standard"
          },
          {
            "namespace": "email_label",
            "value": "ajones@acme.com",
            "type": "unregistered"
          }
        ]
      }
    ],
    "include": ["ProfileService"],
    "expandIds": false,
    "priority": "normal",
    "analyticsDeleteMethod": "anonymize",
    "regulation": "ccpa"
}'
```

### Using the UI

When creating job requests in the UI, be sure to select **[!UICONTROL AEP Data Lake]** and/or **[!UICONTROL Profile]** under **[!UICONTROL Products]** in order to process jobs for data stored in the [!DNL Data Lake] or [!DNL Real-time Customer Profile], respectively.

<img src="images/privacy/product-value.png" width=450><br>

## Profile fragments in privacy requests {#fragments}

In the [!DNL Profile] data store, the personal data for an individual customer will often be comprised of multiple profile fragments, which are associated with the person through the identity graph. When making privacy requests to the [!DNL Profile] store, it is important to note that requests are only processed on the profile-fragment level, rather than the entire profile.

For example, consider a situation where you are storing customer attribute data in three separate datasets, which use different identifiers to associate that data with individual customers:

| Dataset name | Primary identity field | Stored attributes |
| --- | --- | --- |
| Dataset 1 | `customer_id` | `address` |
| Dataset 2 | `email_id` | `firstName`, `lastName` |
| Dataset 3 | `email_id` | `mlScore` |

One of the datasets uses `customer_id` as its primary identifier, whereas the other two use `email_id`. If you were to send a privacy request (access or delete) using only `email_id` as the user ID value, only the `firstName`, `lastName`, and `mlScore` attributes would be processed, where `address` would not be affected.

To ensure that your privacy requests process all relevant customer attributes, you must provide the primary identity values for all applicable datasets where those attributes may be stored (up to a maximum of nine IDs per customer).

>[!NOTE]
>
>If you are using different [sandboxes](../sandboxes/home.md) to store your [!DNL Profile] data, you must make a separate privacy request for each sandbox, indicating the appropriate sandbox name in the `x-sandbox-name` header.

## Delete request processing

When [!DNL Experience Platform] receives a delete request from [!DNL Privacy Service], [!DNL Platform] sends confirmation to [!DNL Privacy Service] that the request has been received and affected data has been marked for deletion. The records are then removed from the [!DNL Data Lake] or [!DNL Profile] store within seven days. During that seven-day window, the data is soft-deleted and is therefore not accessible by any [!DNL Platform] service.

>[!IMPORTANT]
>
>While a successful delete request removes the collected attribute data for a customer (or set of customers), the request does not remove the associations established in the identity graph.
>
>For example, a delete request that uses a customer's `email_id` and `customer_id` removes all attribute data stored under those IDs. However, any data which is thereafter ingested under the same `customer_id` will still be associated with the appropriate `email_id`, as the association still exists.

In future releases, [!DNL Platform] will send confirmation to [!DNL Privacy Service] after data has been physically deleted.

## Next steps

By reading this document, you have been introduced to the important concepts involved with processing privacy requests in [!DNL Experience Platform]. It is recommended that you continue reading the documentation provided throughout this guide in order to deepen your understanding of how to manage identity data and create privacy jobs.

For information on processing privacy requests for [!DNL Platform] resources not used by [!DNL Profile], see the document on [privacy request processing in the Data Lake](../catalog/privacy.md).
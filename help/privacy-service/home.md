---
keywords: Experience Platform;home;popular topics;GDPR;gdpr;ccpa:CCPA;pdpa;PDPA;pdpa_that;PDPA_THA;lgpd;LGPD;lgpd_bra;LGPD_BRA;
solution: Experience Platform
title: Privacy Service Overview
description: Discover how Privacy Service can facilitate automated compliance with legal privacy regulations in your Experience Cloud data operations.
exl-id: 585f7619-5072-413b-9a62-be0ea0cd4d1b
---
# Privacy Service overview

To deliver better customer experiences, you must collect and store your customers' personal data. When using this data, it is important to understand and respect your customers' privacy. New legal and organizational regulations are giving users the right to access or delete their personal data from your data stores upon request.

Adobe Experience Platform Privacy Service was developed in response to a fundamental shift in how businesses are required to manage the personal data of their customers. The central purpose of Privacy Service is to automate compliance with data privacy regulations which, when violated, can result in major fines and disrupt data operations for your business.

Privacy Service provides a RESTful API and user interface to help you manage customer data requests. You can use Privacy Service to submit requests to access and delete personal customer data from Adobe Experience Cloud applications, facilitating automated compliance with legal and organizational privacy regulations.

>[!IMPORTANT]
>
>Privacy Service is only meant for data subject and consumer rights requests. Any other usage of Privacy Service for data cleanup or maintenance is not supported or allowed. Adobe has a legal obligation to fulfill them in a timely manner. As such, load-testing on Privacy Service is not allowed as it is a production only environment and creates an unnecessary backlog of valid privacy requests.
>
>A hard daily upload limit is now in place to help prevent abuse of the service. Users found to abuse the system will have their access to the service disabled. A subsequent meeting will then be held with them to address their actions and discuss the acceptable use for Privacy Service.

## Getting started with Privacy Service {#getting-started}

To make optimal use of Privacy Service, several key decisions must be made in terms of your organization's privacy requirements, the kinds of identity data you collect from your customers, and the best way to interface your CRM system with the service.

These decisions can be summarized through the following questions:

1. **What information am I gathering from my customers?** 
    * To make the best use of Privacy Service, you must have a detailed understanding of the types of data you collect from your customers, and which of it is subject to privacy regulations. See the section on [determining privacy requirements](#requirements) for more information.
1. **Have I correctly labeled my data?**
    * Data must be properly labeled for the service to determine which fields to access or delete during privacy jobs. See the section on [labeling data](#label) for more information.
1. **Do I know which IDs to send to Privacy Service?** 
    * When sending privacy requests, individual customer IDs specific to particular Adobe applications must be provided. See the sections on [providing identity data](#identity)  and [making privacy requests](#requests) for more information.
1. **How am I tracking my privacy jobs?** 
    * Once you have made privacy requests, there are several options for tracking their status and results. See the section on [monitoring privacy jobs](#monitor) for more information.

The sections below provide general guidance on these important prerequisite steps, and also provide links to further Privacy Service documentation for more details.

### Determine your organization's privacy requirements {#requirements}

Depending on the nature of your business and the jurisdictions it operates under, your data operations may be subject to legal privacy regulations. These regulations often give your customers the right to request access to the data you collect from them, and the right to request the deletion of that stored data. These customer requests for their personal data are referred to as "privacy requests" throughout the documentation.

For details on the different legal privacy regulations that Privacy Service manages requests for, including key terms and answers to frequently asked questions, refer to the [privacy regulations documentation](./regulations/overview.md).

If your data operations fall under the purview of any of the supported regulations, review their documentation for important information such as the specific privacy rights they afford your customers, and compliance windows for honoring privacy requests. This information should be considered when determining how to integrate Privacy Service into your CRM system, and how customers should interact with your website in order to make privacy requests.

In addition to legal regulations, any organizational or industry standards applicable to your organization should also be considered when making these decisions.

### Label data for privacy requests {#label}

Depending on the [!DNL Experience Cloud] applications that you are using, you must label the specific data fields that should be accessed or deleted in response to privacy requests. The process for labeling data varies between applications. To learn how to label data for each supported Adobe application, see the document on [Experience Cloud applications](./experience-cloud-apps.md).

### Determine the types of identity data to send to Privacy Service {#identity}

In order for Privacy Service to process a privacy request from a customer, at least one unique identity value for that customer must be provided in the request itself. A unique identity value is any piece of information that can be used to identify an individual person and their stored personal data within your [!DNL Experience Cloud] data stores. Privacy Service uses this identity information to locate and process the customer's personal data according to the nature of the request (access, delete, or opt-out).

Depending on the [!DNL Experience Cloud] applications your CRM system uses, the type and number of identity values you must provide for each customer will vary. Some applications use their own internal customer ID values (such as Adobe Target IDs), while other solutions rely on global identifiers from Adobe [!DNL Experience Cloud Identity Service] (ECID) which track customer activity across all [!DNL Experience Cloud] applications. In addition, generic personal information like an email address or phone number can also serve as valid identity data.

Read the document on [identity data for privacy requests](./identity-data.md) for more detailed information on the types of identity information that are accepted for Privacy Service. The document also provides guidance on how to apply Adobe technologies to effectively retrieve the appropriate identity information from your customers as they interact with your website, and send that data to Privacy Service in API requests.

### Start making privacy requests {#requests}

Once you have determined your business' privacy needs, and decided which identity values to send to Privacy Service, you can start making privacy requests. Use Privacy Service to send privacy requests through either the API or the UI.

>[!IMPORTANT]
>
>The sections below provide links to documentation that cover how to make generic privacy requests in the API or UI. However, depending on the [!DNL Experience Cloud] applications you are using, the fields you must send in the request payload may be different from the examples shown in these guides. 
>
>As you follow along with the API or UI guides, refer to the document on [Privacy Service and Experience Cloud applications](./experience-cloud-apps.md) for further documentation on how to format privacy requests for your particular [!DNL Experience Cloud] applications.
>
>It is also important to note that privacy requests are processed asynchronously across Experience Cloud applications. Once a request is received by Privacy Service, each application can take anywhere from minutes to weeks to complete the request. The amount of time it takes to complete each request is specific to the application you are working with, and the amount of data that needs to be processed.

#### Using the API {#api}

To programmatically approach privacy regulation compliance for your [!DNL Experience Cloud] applications, you can use RESTful API calls to [[!DNL Privacy Service API]](https://developer.adobe.com/experience-platform-apis/references/privacy-service/) endpoints to create and manage privacy jobs. For detailed steps on how to use the API, see the [Privacy Service API guide](api/overview.md).

#### Using the UI {#ui}

>[!NOTE]
>
>The Privacy Service UI currently only supports access and delete requests. All opt-out requests must be made through the API instead.

You can create and monitor privacy jobs using a graphical interface with the Privacy Service UI. The UI includes a **[!UICONTROL Status Report]** widget that provides a visual representation of the status of all active requests, and you can create requests with the built-in **[!UICONTROL Request Builder]** or by uploading JSON files. For more information on using the UI, see the [Privacy Service user guide](ui/overview.md).

### Monitor privacy jobs {#monitor}

Once you have made privacy jobs, you have several options for monitoring their status and results:

| Monitoring method | Description |
| --- | --- |
| Privacy Service UI | You can view a visual representation of the status of all active requests with the Privacy Service UI monitoring dashboard. See the [Privacy Service user guide](ui/overview.md) for more information. |
| Privacy Service API | You can programmatically monitor the status of Privacy jobs by using the lookup endpoints provided by the Privacy Service API. See the [Privacy Service API guide](./api/overview.md) for detailed steps on how to use the API. |
| [!DNL Privacy Events] | [!DNL Privacy Events] use Adobe I/O Events that are sent to a configured webhook to facilitate efficient job request automation. They reduce or eliminate the need to poll the Privacy Service API to check if a job is complete or if a certain milestone within a workflow has been reached. See the tutorial on [subscribing to Privacy Events](./privacy-events.md) for more information. |

## Next steps

This document provided a high-level overview of Privacy Service and the major steps required to start using the service's capabilities. Refer to the documentation linked to throughout the overview for more in-depth information about the various aspects of working with Privacy Service.

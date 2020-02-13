---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Adobe Experience Platform Privacy Service
topic: overview
---

# Privacy Service overview

In order to deliver better customer experiences, you need to collect and store your customers' personal data. When using this data, it is important to understand and respect your customers' privacy. New legal and organizational regulations are giving users the right to access or delete their personal data from your data stores upon request.

Adobe Experience Platform Privacy Service provides a RESTful API and user interface to help you manage these data requests from your customers. With Privacy Service, you can submit requests to access and delete private or personal customer data from Adobe Experience Cloud applications, facilitating automated compliance with legal and organizational privacy regulations.

## Why Privacy Service?

Privacy Service was developed in response to a fundamental shift in how businesses are required to manage the personal data of their customers. The central purpose of Privacy Service is to automate compliance with data privacy regulations which, when violated, can result in major fines and disrupt data operations for your business.

### Privacy Service and GDPR

The [General Data Protection Regulation](https://eugdpr.org/) (GDPR) introduced several new data privacy rights for members of the European Union, including the **Right to Access** and the **Right to be Forgotten**. This means that any EU citizen whose personal data has been collected by your business can request to access or delete their data at any time. Failure to comply to these requests within 30 days can result in multi-million dollar fines for your organization.

Privacy Service supports access and delete requests for GDPR, and tracks them separately from requests under the CCPA regulation. See the [GDPR FAQ](gdpr/faq.md) and [terminology](gdpr/terminology.md) documents for more information.

### Privacy Service and CCPA

The [California Consumer Privacy Act](https://www.caprivacy.org/about) (CCPA) enhances privacy rights and consumer protection for residents of California, United States. The CCPA provides new data privacy rights to California residents, including the right to access and delete their personal data, to know whether their personal data is sold or disclosed (and to whom), and the right to opt out of having their data sold to third parties.

Privacy Service supports access and delete requests for the CCPA regulation, and tracks them separately from GDPR requests. Privacy Service also supports sending opt-out-of-sale requests for Experience Cloud applications that support them. See the [CCPA FAQ](ccpa/faq.md) for more information.

## How to use Privacy Service to manage privacy job requests

Privacy Service provides a RESTful API and user interface that allow you to manage your customers' requests for accessing/deleting their private data or opting out of sale (also known as **privacy jobs**). The service also provides a central audit and logging mechanism that allows you to view the status and results of privacy jobs involving Experience Cloud applications.

>[!NOTE] Opt-out requests are currently only supported by the Privacy Service API.

### Using the API

The [Privacy Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/privacy-service.yaml) allows you to create and manage privacy jobs using RESTful API calls, allowing you to programmatically approach privacy regulation compliance for your Experience Cloud applications. For detailed steps on how to use the API, see the [Privacy Service API developer guide](api/getting-started.md).

### Using the UI

The Privacy Service UI allows you to create and monitor privacy jobs using a graphical interface. The UI includes a **Status Report** widget that provides a visual representation of the status of all active requests, and allows you to create new requests by using the built-in **Request Builder** or by uploading JSON files. For more information on using the UI, see the [Privacy Service user guide](ui/overview.md).
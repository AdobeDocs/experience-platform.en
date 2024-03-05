---
title: Braze Currents Source Overview
description: Learn how to stream data from Braze Currents to Experience Platform.
badge: Beta
---
# [!DNL Braze Currents]

>[!NOTE]
>
>The [!DNL Braze Currents] source is in beta. Please read the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from Streaming applications. Support for streaming providers includes [!DNL Braze Currents].

[!DNL Braze] powers customer-centric interactions between consumers and brands in real-time. [!DNL Braze Currents] is a real-time data stream of engagement events from the Braze platform that is the most robust yet granular export out of the [!DNL Braze] platform. 

## Prerequisites

In order to complete the steps in this guide, you will need:

* A login to [Adobe Experience Platform](https://platform.adobe.com) and permission to create a new streaming source connection.
* A login to your [[!DNL Braze] dashboard](https://dashboard.braze.com/sign_in), an unused [Currents Connector license](https://www.braze.com/docs/user_guide/data_and_analytics/braze_currents), and permissions to create a connector. For more information, read the [requirements to set up [!DNL Currents]](https://www.braze.com/docs/user_guide/data_and_analytics/braze_currents/setting_up_currents/#requirements).

### Gather required credentials

To successfully submit your [!DNL Braze Currents] data to Experience Platform, you need to enter the following Experience Platform credentials in the [!DNL Braze] UI dashboard.

| Field | Description |
| --- | --- |
| Client ID | The client ID associated with your Experience Platform source. |
| Client Secret | The client secret associated with your Experience Platform source. |
| Tenant ID | The tenant ID associated with your Experience Platform source. |
| Sandbox Name | The sandbox associated with your Experience Platform source. |
| Dataflow ID | The dataflow ID associated with your Experience Platform source. |
| Streaming Endpoint | The streaming endpoint associated with your Experience Platform source. **Note**: [!DNL Braze] automatically converts this to the batch streaming endpoint. |

For information on how to retrieve these values, read the guide on [getting started with Platform APIs](../../../landing/api-authentication.md). For information on using the [!DNL Braze] dashboard, read the [!DNL Braze] guide on how to [Navigate to Currents](https://www.braze.com/docs/user_guide/data_and_analytics/braze_currents/setting_up_currents/#step-2-navigate-to-currents).

## Next steps

By reading this document, you have completed the prerequisite setup needed in order to stream data from your [!DNL Braze Currents] account to Experience Platform. You can now proceed to the guide on [connecting [!DNL Braze Currents] to Experience Platform using the user interface](../../tutorials/ui/create/marketing-automation/braze.md).
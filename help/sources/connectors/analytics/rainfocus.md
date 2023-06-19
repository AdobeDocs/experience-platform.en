---
title: RainFocus source overview
description: Learn how to bring event management and analytics data from your RainFocus account to Experience Platform
badge: Beta
hide: true
hidefromtoc: true
---
# [!DNL RainFocus]

>[!NOTE]
>
>The [!DNL RainFocus] source is in beta. Please read the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

[!DNL RainFocus] is a platform that you can use to promote your events and build your audiences. You can use [!DNL RainFocus] to create beautiful promotional pages, track campaign performances, and optimize registration conversions.

Use the [!DNL RainFocus] source in Adobe Experience Platform and Real-Time Customer Data Platform to automatically enrich your customer data profiles with attendee experience events in real time. Once enabled, experience events are automatically streamed into Real-Time CDP, allowing for powerful audience segmentation, data analysis, and activation of the attendee journey with downstream destinations and applications such as Customer Journey Analytics and Adobe Journey Optimizer.

>[!IMPORTANT]
>
>This documentation page was created by the [!DNL RainFocus] team. For any inquiries or update requests, please contact them directly at clientcare<span>@rainfocus.com or visit the [[!DNL RainFocus] Help Center](https://help.rainfocus.com/hc/en-us)

## Prerequisites

You must complete the following prerequisites before you can activate the [!DNL RainFocus] integration on Experience Platform:

[Create an Adobe Service Account (JWT) in the Adobe Developer Portal](https://developer.adobe.com/developer-console/docs/guides/authentication/ServiceAccountIntegration/)

>[!IMPORTANT]
>
>Adobe has recently announced the deprecation of JWT tokens in favor of OAuth. To accommodate this change, the [!DNL RainFocus] source will be migrating to OAuth in the near future. 

### Gather required credentials

In order to connect [!DNL RainFocus] to Experience Platform, you must provide values for the following connection properties in [!DNL RainFocus]:

| Credential | Description | Example |
| --- | --- | --- |
| Client ID | The client ID can be obtained from the Adobe Service Account in the Adobe Developer Portal. | `b9c32a63e7d41a0f87d3e8b52a16e7a2` |
| Client Secret | The client secret can be btained from the Adobe Service Account in the Adobe Developer Portal. | `k1b-p-umplcjtg_arnw-R-Bx44bybu` |
| Technical Account ID | The technical account ID can be btained from the Adobe Service Account in the Adobe Developer Portal. | `B3F9D2E8A64C573D21ABFE97@techacct.adobe.com` |
| Organization ID | The organization ID can be obtained from the Adobe Service Account in the Adobe Developer Portal | `D9A6F3BCE82FD147C50E3A19@techacct.adobe.com` |

### Create an XDM schema and define the identity field {#create-an-xdm-schema-and-define-the-identity-field}

In order to store the Experience Events from [!DNL RainFocus] in Experience Platform, you must create an Experience Data Model (XDM) schema to describe a dataset which can store the possible fields and data types that will be sent from [!DNL RainFocus]. 

[!DNL RainFocus] recommends the following fields, which covers all possible data sent by default. 

The following field groups are also recommended (denoted by prefix):

* Attendee
* Exhibitor
* Lead
* Session
* SessionTime

**The schema should contain the following fields:**

| Field | Type | Example | Description |
| --- | --- | --- | --- |
| `attendee.registered` | String | Yes | A flag that determines if the attendee is considered to be registered. |
| `attendee.attendeeId` | String | 1619119968857001fvLB | The attendee ID in [!DNL RainFocus]. |
| `attendee.externalId` | String | 1666809456617001wyPj| The external ID specified by an organization. |
| `attendee.clientId` | String | 8EFC1F57631CAFE70A495ECB@8f3f1f5c631caf3e495fd8.e | The attendee SSO client ID. |
| `attendee.email` | String | user<span>@company.com | The email address of the attendee. |
| `transmissionId` | String | 1680309557133001YHhz | A unique identifier used for data push. |
| `eventType` | String | SessionScheduled | The name of the Attendee Experience Event. |
| `timestamp` | DateTime | 2023-04-01T00:41:57.000Z | The timestamp of the data push. |
| `event.name` | String | Adobe Summit 2023 | The name of the event in which a transmission took place.  |
| `exhibitor.exhibitorId`| String | 1680309557133001YHhz | The [!DNL RainFocus] identifier of the exhibitor. |
| `exhibitor.externalId` | String | 1666809514105001lSJN | The identifier for the exhibitor in the client system. |
| `exhibitor.name` | String | IBM | The name of the exhibitor. |
| `lead.leadId`| String | 1666809456617001wyPj |The [!DNL RainFocus] identifier for the lead. |
| `lead.note`  | String  | | |
| `session.sessionId` | String | 1666809373585001t4aV | The [!DNL RainFocus] identifier for the session. |
| `session.externalId` | String | 1666809456617001wyPj | The identifier for the session in the client system. |
| `session.code` | String | GS3 | The code for the session. |
| `session.title` | String | Inspiration Keynote | The title of the session. |
| `session.length` | Integer | 90 | The length of the session. |
| `sessiontime.sessiontimeId` | String | 1673033149739001OJLZ | The [!DNL RainFocus] identifier for the session time. |
| `sessiontime.startTime`| String | 2023-03-22 10:00:00 |  The start time of the session. |
| `sessiontime.endTime`  | String | 2023-03-22 10:00:00 | The end time of the session. |
| `sessiontime.room`| String | B32 | The room used for the session. |

{style="table-layout:auto"}

To create your schema for [!DNL RainFocus] data, read the following documentation for steps on how to create a schema using APIs or the UI.

* [Create the schema using the UI](../../../xdm/tutorials/create-schema-ui.md)
* [Create the schema using the API](../../../xdm/tutorials/create-schema-api.md)

>[!IMPORTANT]
>
>* The schema must extend the **XDM ExperienceEvent class.** 
>* You must ensure that the schema includes a **primary identity**, and is **enabled for Profile**. For more information, read the guide on [defining identity fields in the UI](https://experienceleague.adobe.com/docs/experience-platform/xdm/ui/fields/identity.html)
>* You may substitute the example identity (Email) for another appropriate identifier such as a sha256 email or ECID.

### Create an Integration Profile in RainFocus {#create-an-integration-profile-in-rainfocus}

Once your service account and your XDM schema are ready, you can now activate the [!DNL Integration Profile] through the [!DNL RainFocus] platform. The [!DNL Integration Profile] is responsible for streaming data to Experience Platform.

Log into the [[!DNL RainFocus] platform](https://app.rainfocus.com). In the primary navigation, select **[!DNL Libraries]** and then select **[!DNL Integration Profiles]** 

![The RainFocus UI with Libraries and Integration Profiles selected.](/help/sources/images/tutorials/create/rainfocus/rainfocus_integration-profile.png)

To create a new profile, select the **(`+`)** icon. Next, select **Adobe Real-Time Customer Data Platform** and then select **OK**.

![The create integration profile window in the RainFocus UI.](/help/sources/images/tutorials/create/rainfocus/rainfocus_integration-profile-select.png)

Next, provide the credentials that you retrieved in the Adobe Developer Portal Project:

* **Client ID**
* **Client Secret**
* **Technical Account ID**
* **Organization ID**
 
Once the credentials have been provided, select **[!DNL Save]**.You should now see the new [!DNL Integration Profile] listed in the [!DNL RainFocus] dashboard.

Select the [!DNL Integration Profile] that you just created to see a list of predefined **push types** already configured. These are the [Experience Events](https://experienceleague.adobe.com/docs/experience-platform/xdm/classes/experienceevent.html) that will be sent to Experience Platform when they occur. 

![A list of predefined push types in the RainFocus dashboard.](/help/sources/images/tutorials/create/rainfocus/rainfocus_integration-profile-setup.png)

To retrieve a copy of the sample JSON payload, select **[!DNL Sample JSON Payload]**. Next, highlight and copy the sample JSON payload and **save it in a new file with a .json extension**. This will be used later in Experience Platform for [mapping configurations](../../tutorials/ui/create/analytics/rainfocus.md#mapping).

![A sample JSON payload in the RainFocus dashboard.](/help/sources/images/tutorials/create/rainfocus/rainfocus_integration-profile-json.png)

>[!TIP]
>
>**Setup is not yet complete**: Once your dataflow is created, you will need to return to the [!DNL RainFocus] dashboard to complete your [!DNL Integration Profile] by providing your **streaming endpoint URL** and **dataflow ID**.

## Next steps

By reading this document, you have completed prerequisite setup needed in order to stream data from your [!DNL RainFocus] account to Experience Platform. You can now proceed to the guide on [connecting [!DNL RainFocus] to Experience Platform using the user interface](../../tutorials/ui/create/analytics/rainfocus.md).
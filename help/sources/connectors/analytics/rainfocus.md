---
title: RainFocus source overview
description: Learn how to bring event management and analytics data from your RainFocus account to Experience Platform
badge: Beta
---
# [!DNL RainFocus]

RainFocus is a platform that you can use to promote your events and build your audiences. You can use RainFocus to create beautiful promotional pages, track campaign performances, and optimize registration conversions.

Use the RainFocus source in Adobe Experience Platform and Real-Time Customer Data Platform to automatically enrich your customer data profiles with attendee experience events in real-time. Once enabled, experience events are automatically streamed into Real-Time CDP, allowing for powerful audience segmentation, data analysis, and activation of the attendee journey with downstream destinations and applications such as Customer Journey Analytics and Adobe Journey Optimizer.

>[!IMPORTANT]
>
>This documentation page was created by the RainFocus team. For any inquiries or update requests, please contact them directly at clientcare@rainfocus.com or visit the [RainFocus Help Center](https://help.rainfocus.com/hc/en-us)

## Prerequisites

In order to activate this integration, the following steps need to be taken, each step is described in further detail below:

* [Create an Adobe Service Account (JWT) in the Adobe Developer Portal](https://developer.adobe.com/developer-console/docs/guides/authentication/ServiceAccountIntegration/)

>[!IMPORTANT]
>
>Adobe has recently announced the deprecation of JWT tokens in favor of OAuth, the RainFocus Source Connector will be migrating to OAuth in the near future to accommodate this. 

### Gather required credentials

In order to connect RainFocus to Platform, you must provide values for the following connection properties in RainFocus:

| Credential | Description | Example |
| --- | --- | --- |
| Client ID | Obtained from the Adobe Service Account in the Adobe Developer Portal | `b9c32a63e7d41a0f87d3e8b52a16e7a2` |
| Client Secret | Obtained from the Adobe Service Account in the Adobe Developer Portal | `k1b-p-umplcjtg_arnw-R-Bx44bybu` |
| Technical Account ID | Obtained from the Adobe Service Account in the Adobe Developer Portal | `B3F9D2E8A64C573D21ABFE97@techacct.adobe.com` |
| Organization ID | Obtained from the Adobe Service Account in the Adobe Developer Portal | `D9A6F3BCE82FD147C50E3A19@techacct.adobe.com` |

## Create XDM Schema and set the Identity

In order to store the Experience Events from RainFocus in Experience Platform, you must create an XDM Schema to describe a dataset which can store the possible fields and data types that will be sent from RainFocus. 

RainFocus recommends the following fields, which covers all possible data sent by default. 

The following Field Groups are also recommended (denoted by prefix):
* Attendee
* Exhibitor
* Lead
* Session
* SessionTime

**The schema should contain the following fields:**

| Field | Type | Example | Description |
| --- | --- | --- | --- |
| `attendee.registered` | String | Yes | Flag determining if the attendee is considered to be registered. |
| `attendee.attendeeId` | String | 1619119968857001fvLB | The attendee ID in RainFocus. |
| `attendee.externalId` | String | 1666809456617001wyPj| The external ID specified by organization. |
| `attendee.clientId` | String | 8EFC1F57631CAFE70A495ECB@8f3f1f5c631caf3e495fd8.e | The attendee SSO client ID. |
| `attendee.email` | String | user<span>@company.com | The email address of the attendee. |
| `transmissionId` | String | 1680309557133001YHhz | A unique identifier used for data push. |
| `eventType` | String | SessionScheduled | The name of the Attendee Experience Event (see Push Type Dictionary). |
| `timestamp` | DateTime | 2023-04-01T00:41:57.000Z | The timestamp of the data push. |
| `event.name` | String | Adobe Summit 2023 | The name of the event in which a transmission took place.  |
| `exhibitor.exhibitorId`| String | 1680309557133001YHhz | The RainFocus identifier of the exhibitor. |
| `exhibitor.externalId` | String | 1666809514105001lSJN | The identifier for the exhibitor in the client system. |
| `exhibitor.name` | String | IBM | The name of the exhibitor. |
| `lead.leadId`| String | 1666809456617001wyPj |The RainFocus identifier for the lead. |
| `lead.note`  | String  | | |
| `session.sessionId` | String | 1666809373585001t4aV | The RainFocus identifier for the session. |
| `session.externalId` | String | 1666809456617001wyPj | The identifier for the session in the client system. |
| `session.code` | String | GS3 | The code for the session. |
| `session.title` | String | Inspiration Keynote | The title of the session. |
| `session.length` | Integer | 90 | The length of the session. |
| `sessiontime.sessiontimeId` | String | 1673033149739001OJLZ | The RainFocus identifier for the session time. |
| `sessiontime.startTime`| String | 2023-03-22 10:00:00 |  The start time of the session. |
| `sessiontime.endTime`  | String | 2023-03-22 10:00:00 | The end time of the session. |
| `sessiontime.room`| String | B32 | The room used for the session. |

{style="table-layout:auto"}

To create your schema for RainFocus data, read the following documentation for steps on how to create a schema using APIs or the UI.

* [Create the schema using the UI](https://experienceleague.adobe.com/docs/experience-platform/xdm/tutorials/create-schema-ui.html)
* [Create the schema using the API](https://experienceleague.adobe.com/docs/experience-platform/xdm/tutorials/create-schema-api.html)

>[!IMPORTANT]
>
>* The schema must extend the **XDM ExperienceEvent class.** 
> * You must ensure that the Schema includes a **primary identity**, and is **enabled for Profile**
>   * [Define Identity Fields in the UI](https://experienceleague.adobe.com/docs/experience-platform/xdm/ui/fields/identity.html)
>* You may substitute the example identity (Email) for another appropriate identifier such as a sha256 email or ECID.


## Enable the Integration Profile in RainFocus

Now that the Service Account and XDM Schema are ready, switch to RainFocus to activate the Integration Profile, which will be responsible for streaming data to Experience Platform. 

* Log into the [**RainFocus** platform](https://app.rainfocus.com). In the primary navigation, select **Libraries** and **Integration Profiles** 
![Screenshot showing the RainFocus platform and the location of the Integration Profile in the main menu](/help/sources/images/tutorials/create/rainfocus/rainfocus_integration-profile.png)

* Select the **(`+`)** icon, in the bottom right corner, to create a new profile.

* Next, select Adobe Experience Platform CDP and then select OK.
![Screenshot showing the RainFocus platform and the location of the Experience Platform CDP Integration Profile](/help/sources/images/tutorials/create/rainfocus/rainfocus_integration-profile-select.png)

* Provide the credentials that were previously created in the Adobe Developer Portal Project:

   1. **Client ID**
   2. **Client Secret**
   3. **Technical Account ID**
   4. **Organization ID**
 
   Then, select Save. You should now see the new Integration Profile listed.

* Select the new Integration Profile and open it again.

* You will now see a list of predefined **push types** already configured. These are the [Experience Events](https://experienceleague.adobe.com/docs/experience-platform/xdm/classes/experienceevent.html) that will be sent to Experience Platform when they occur.   
![Screenshot showing the RainFocus platform and the Experience Events that are configured automatically](/help/sources/images/tutorials/create/rainfocus/rainfocus_integration-profile-setup.png)

* Select the **Sample JSON Payload** tab

* Highlight and copy the Sample JSON Payload and **save it in a new file with a .json extension**. This will be used later in Experience Platform for mapping configurations.
![Screenshot showing the RainFocus platform and the JSON preview that is generated](/help/sources/images/tutorials/create/rainfocus/rainfocus_integration-profile-json.png)

>[!TIP]
>
> **Setup is not yet complete** - _we will need to return to complete the integrations profile, keep this tab open and proceed to the next step to install and configure the Source Connector in Experience Platform and to obtain the_ **_Streaming Endpoint_** _and_ **_Dataflow ID._**
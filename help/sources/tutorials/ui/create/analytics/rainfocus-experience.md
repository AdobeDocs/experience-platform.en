---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Documentation self-service template for the UI
description: Learn how to create a YOURSOURCE source connection using the Adobe Experience Platform UI.
hide: true
hidefromtoc: true
---
# Create a RainFocus source connection in the UI

This tutorial provides steps for creating a RainFocus source connector using the Platform user interface.

## Overview

The RainFocus platform has everything you need to promote your event and build an audience. Create beautiful promotional pages, track campaign performance, and optimize registration conversions.

Use the RainFocus Source Connector for Adobe Experience Platform (AEP) Real-time Customer Data Profile (RT-CDP) to automatically enrich your Customer Data Profiles with attendee experience events in real-time. Once enabled, experience events are automatically streamed into RT-CDP in real-time, allowing for powerful audience segmentation, analysis and activation of the attendee journey with downstream destinations and applications such as Customer Journey Analytics and Adobe Journey Optimizer. 

>[!IMPORTANT]
>
>This documentation page was created by the RainFocus team. For any inquiries or update requests, please contact them directly at clientcare@rainfocus.com or visit the [RainFocus Help Center](https://help.rainfocus.com/hc/en-us)

## Prerequisites

In order to activate this integration, the following steps need to be taken, each step is described in further detail below:

* [Create an Adobe Service Account (JWT) in the Adobe Developer Portal](https://developer.adobe.com/developer-console/docs/guides/authentication/ServiceAccountIntegration/)

>[!IMPORTANT]
>
>Adobe have recently announced the deprecation of JWT tokens in favor of OAuth, the RainFocus Source Connector will be migrating to OAuth in the near future to accommodate this. 

### Gather required credentials

In order to connect RainFocus to Platform, you must provide values for the following connection properties in RainFocus:

| Credential | Description | Example |
| --- | --- | --- |
| Client ID | Obtained from the Adobe Service Account in the Adobe Developer Portal | `b9c32a63e7d41a0f87d3e8b52a16e7a2` |
| Client Secret | Obtained from the Adobe Service Account in the Adobe Developer Portal | `k1b-p-umplcjtg_arnw-R-Bx44bybu` |
| Technical Account ID | Obtained from the Adobe Service Account in the Adobe Developer Portal | `B3F9D2E8A64C573D21ABFE97@techacct.adobe.com` |
| Organization ID | Obtained from the Adobe Service Account in the Adobe Developer Portal | `D9A6F3BCE82FD147C50E3A19@techacct.adobe.com` |

## Create XDM Schema and set the Identity

In order to store the Experience Events from RainFocus in AEP, you must create an XDM Schema to describe a Dataset which can store  the possible fields and data types that will be sent from RainFocus. 

RainFocus recommends the following fields, which covers all possible data sent by default. 

The following Field Groups are also recommended (denoted by prefix):
* Attendee
* Exhibitor
* Lead
* Session
* SessionTime

**The schema should contain the following fields:**

|                           |          |                                                   |                                                              |
| ------------------------- | -------- | :-----------------------------------------------: | :----------------------------------------------------------: |
| **Field**                 | **Type** |                    **Example**                    |                        **Description**                       |
| attendee.registered       | String   |                        Yes                        |     Flag determining if attendee is considered registered    |
| attendee.attendeeId       | String   |                1619119968857001fvLB               |                   Attendee ID in RainFocus                   |
| attendee.externalId       | String   |                1666809456617001wyPj               |             External ID specified by Organization            |
| attendee.clientId         | String   | 8EFC1F57631CAFE70A495ECB@8f3f1f5c631caf3e495fd8.e |                    Attendee SSO Client ID                    |
| attendee.email            | String   |                  user@company.com                 |                    Attendee email address                    |
| transmissionId            | String   |                1680309557133001YHhz               |                Unique identifier for data push               |
| eventType                 | String   |                  SessionScheduled                 | Name of Attendee Experience Event (see Push Type Dictionary) |
| timestamp                 | DateTime |              2023-04-01T00:41:57.000Z             |                    Timestamp of data push                    |
| event.name                | String   |                 Adobe Summit 2023                 |     Name of the event in which a transmission took place.    |
| exhibitor.exhibitorId     | String   |                1680309557133001YHhz               |             RainFocus Identifier of the exhibitor            |
| exhibitor.externalId      | String   |                1666809514105001lSJN               |           Identifier for exhibitor in client system          |
| exhibitor.name            | String   |                        IBM                        |                     Name of the exhibitor                    |
| lead.leadId               | String   |                1666809456617001wyPj               |               RainFocus Identifier of the lead               |
| lead.note                 | String   |                                                   |                                                              |
| session.sessionId         | String   |                1666809373585001t4aV               |             RainFocus Identifier for the session             |
| session.externalId        | String   |                1666809456617001wyPj               |            Identifier for session in client system           |
| session.code              | String   |                        GS3                        |                        Code of session                       |
| session.title             | String   |                Inspiration Keynote                |                       Title of session                       |
| session.length            | Int      |                         90                        |                       Length of session                      |
| sessiontime.sessiontimeId | String   |                1673033149739001OJLZ               |           RainFocus Identifier for the session time          |
| sessiontime.startTime     | String   |                2023-03-22 10:00:00                |                      Session start time                      |
| sessiontime.endTime       | String   |                2023-03-22 10:00:00                |                       Session end time                       |
| sessiontime.room          | String   |                        B32                        |                       Room for session                       |

To use the sample Schema from RainFocus, you may take one of the the following steps:

* [Create the Schema using the UI](https://experienceleague.adobe.com/docs/experience-platform/xdm/tutorials/create-schema-ui.html?lang=en)
* [Create the Schema using the API](https://experienceleague.adobe.com/docs/experience-platform/xdm/tutorials/create-schema-api.html?lang=en)

>[!IMPORTANT]
>
>* The schema must extend the **XDM ExperienceEvent class.** 
> * You must ensure that the Schema includes a **primary identity**, and is **enabled for Profile**
>   * [Define Identity Fields in the UI](https://experienceleague.adobe.com/docs/experience-platform/xdm/ui/fields/identity.html?lang=en)
>* You may substitute the example identity (Email) for another appropriate identifier such as a sha256 email or ECID.

## Enable the Integration Profile in RainFocus

Now that the Service Account and XDM Schema are ready, switch to RainFocus to activate the Integration Profile, which will be responsible for streaming data to AEP. 

1. Log into the **RainFocus** platform

2. In the primary navigation, select **Libraries** and **Integration Profiles** 
![Screenshot showing the RainFocus platform and the location of the Integration Profile in the main menu](/help/sources/images/tutorials/create/rainfocus/rainfocus_integration-profile.png)

3. Select the **+** icon, in the bottom right corner, to create a new profile.

4. Choose the **Adobe Experience Platform CDP** and click **OK**  
![Screenshot showing the RainFocus platform and the location of the AEP CDP Integtaion Profile](/help/sources/images/tutorials/create/rainfocus/rainfocus_integration-profile-select.png)

5. Copy the following credential, previously created in the Adobe Developer Portal Project

   1. **Client ID**
   2. **Client Secret**
   3. **Technical Account ID**
   4. **Organization ID**

6. Click **Save.** You should now see the new Integration Profile listed.

7. Select the new Integration Profile and open it again.

8. You will now see a list of predefined **push types** already configured. These are the [Experience Events](https://experienceleague.adobe.com/docs/experience-platform/xdm/classes/experienceevent.html?lang=en) that will be sent to AEP when they occur.   
![Screenshot showing the RainFocus platform and the Experience Events that are configured automatically](/help/sources/images/tutorials/create/rainfocus/rainfocus_integration-profile-setup.png)

9. Select the **Sample JSON Payload** tab

10. Highlight and copy the Sample JSON Payload and **save it in a new file with a .json extension**. We will use this in AEP to configure our mappings. 
![Screenshot showing the RainFocus platform and the JSON preview that is generated](/help/sources/images/tutorials/create/rainfocus/rainfocus_integration-profile-json.png)

> **Setup is not yet complete** - _we will need to return to complete the integrations profile, keep this tab open and proceed to the next step to install and configure the Source Connector in AEP and to obtain the_ **_Streaming Endpoint_** _and_ **_Dataflow ID._**

## Install and configure the RainFocus Source Connector

1. Login into **Adobe Experience Platform**
 
2. Locate **Sources** in the main navigation
![Screenshot showing AEP and the location of Sources](/help/sources/images/tutorials/create/rainfocus/rainfocus_aep-sources.png)

3. Select to the **Catalog** tab and search for **RainFocus** then click **Setup
![Screenshot showing how to search for the RainFocus Source Connector](/help/sources/images/tutorials/create/rainfocus/rainfocus_sources-rf.png)

4. You will be prompted to provide a **Sample JSON Payload** to configure mappings, upload the Sample JSON Payload downloaded and saved in the previous step.
![Screenshot showing the JSON upload step of the RainFocus Source Connector](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-json-upload.png)

5. Once uploaded, you should see a visual representation of the payload, as shown below:
![Screenshot showing the JSON preview of the uploaded sample](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-json-preview.png)

6. Click **Next**
7. **Under Dataset details, select New Dataset.**
8. Provide a suitable name for your new Dataset e.g **RainFocus Time Series Data**
9. Choose the Schema created previously in “Create XDM schema and Identity”, e.g **RainFocus Time Series**
10. Enable the Dataset for Profile
![Screenshot showing how to configure the dataflow](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-dataflow-setup.png)

11. (optional) Under dataflow details, provide a suitable name and description for the dataflow 
12. (optional) Choose any alerts you may wish to subscribe to. 
13. Click **Next**
14. Now we need to configure our mappings, most will be configured automatically however you will need to add an additional field for the **\_id** field.
15. Click **New field type**
![Screenshot showing where to add a new field](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-mappings.png)

16. Select **Add new field**
17. **Select transmissionId from the sample JSON schema and click Select 
![Screenshot showing the transmissionId that needs to be selected](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-mapping-select.png)

18. Click **Map target field**
![Screenshot showing how to select the id from the schema](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-mapping-map-target.png)

19. Select **\_id** from the RainFocus Time Series Schema
![Screenshot showing how to select the id from the schema](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-mapping-select-target.png)

20. Correct any additional missing fields using the steps outlined above. All indicators should be green before proceeding with the next step.
![Screenshot showing the confirmation dialog present on the mapping view of the source connector](/help/sources/images/tutorials/create/rainfocus/rainfocus_aep-confirmation.png)

21. Click **Next** in the top right 

22. Click **Finish** on the summary screen
![Screenshot showing the confirmation dialog present on the mapping view of the source connector](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-compelete.png)

23. You will see a summary of the DataFlows you have in place, select the Dataflow associated with the RainFocus connector that was just created. **Select the dataflow name**
![Screenshot showing the confirmation dialog present on the mapping view of the source connector](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-dataflow.png)

24. Scroll down and on the right hand side, you should see the **Dataflow ID** and **Streaming Endpoint**. You will need to copy these details over to the RainFocus Integration Profile. 

### Activate the Integration Profile

1. Log into the **RainFocus** platform
2. In the primary navigation, select **Libraries** and **Integration Profiles**
3. Open the Integration Profile created previously. 
4. Paste the **Dataflow ID** and **Streaming Endpoint** copied from the Dataflow in AEP and click **Save**

## Next steps

By following this tutorial, you have established a connection to your RainFocus account. 

## Additional resources

* [RainFocus Help Center](https://help.rainfocus.com/hc/en-us)
* [Create an Adobe Service Account (JWT) in the Adobe Developer Portal](https://developer.adobe.com/developer-console/docs/guides/authentication/ServiceAccountIntegration/)
* [Create a Schema in the UI](https://experienceleague.adobe.com/docs/experience-platform/xdm/tutorials/create-schema-ui.html?lang=en)
* [Create a Schema in the API](https://experienceleague.adobe.com/docs/experience-platform/xdm/tutorials/create-schema-api.html?lang=en)
* [Define Identity Fields in the UI](https://experienceleague.adobe.com/docs/experience-platform/xdm/ui/fields/identity.html?lang=en)
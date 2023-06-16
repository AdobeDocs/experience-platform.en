---
title: Documentation self-service template for the UI
description: Learn how to create a RainFocus source connection using the Adobe Experience Platform UI.
hide: true
hidefromtoc: true
---
# Create a RainFocus source connection in the UI

This tutorial provides steps for creating a RainFocus source connector using the Platform user interface.

## Overview

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

|                           |          |                                                   |                                                              |
| ------------------------- | -------- | :-----------------------------------------------: | :----------------------------------------------------------: |
| **Field**                 | **Type** |                    **Example**                    |                        **Description**                       |
| `attendee.registered`       | String   |                        Yes                        |     Flag determining if attendee is considered registered    |
| `attendee.attendeeId`       | String   |                1619119968857001fvLB               |                   Attendee ID in RainFocus                   |
| `attendee.externalId`       | String   |                1666809456617001wyPj               |             External ID specified by Organization            |
| `attendee.clientId`         | String   | 8EFC1F57631CAFE70A495ECB@8f3f1f5c631caf3e495fd8.e |                    Attendee SSO Client ID                    |
| `attendee.email`            | String   |                  user@company.com                 |                    Attendee email address                    |
| `transmissionId`            | String   |                1680309557133001YHhz               |                Unique identifier for data push               |
| `eventType`                 | String   |                  SessionScheduled                 | Name of Attendee Experience Event (see Push Type Dictionary) |
| `timestamp`                 | DateTime |              2023-04-01T00:41:57.000Z             |                    Timestamp of data push                    |
| `event.name`                | String   |                 Adobe Summit 2023                 |     Name of the event in which a transmission took place.    |
| `exhibitor.exhibitorId`     | String   |                1680309557133001YHhz               |             RainFocus Identifier of the exhibitor            |
| `exhibitor.externalId`      | String   |                1666809514105001lSJN               |           Identifier for exhibitor in client system          |
| `exhibitor.name`            | String   |                        IBM                        |                     Name of the exhibitor                    |
| `lead.leadId`               | String   |                1666809456617001wyPj               |               RainFocus Identifier of the lead               |
| `lead.note`                 | String   |                                                   |                                                              |
| `session.sessionId`         | String   |                1666809373585001t4aV               |             RainFocus Identifier for the session             |
| `session.externalId`        | String   |                1666809456617001wyPj               |            Identifier for session in client system           |
| `session.code`              | String   |                        GS3                        |                        Code of session                       |
| `session.title`             | String   |                Inspiration Keynote                |                       Title of session                       |
| `session.length`            | Int      |                         90                        |                       Length of session                      |
| `sessiontime.sessiontimeId` | String   |                1673033149739001OJLZ               |           RainFocus Identifier for the session time          |
| `sessiontime.startTime`     | String   |                2023-03-22 10:00:00                |                      Session start time                      |
| `sessiontime.endTime`       | String   |                2023-03-22 10:00:00                |                       Session end time                       |
| `sessiontime.room`          | String   |                        B32                        |                       Room for session                       |

{style="table-layout:auto"}

To create your schema for RainFocus data, read the following documentation for steps on how to create a schema using APIs or the UI.

* [Create the schema using the UI](https://experienceleague.adobe.com/docs/experience-platform/xdm/tutorials/create-schema-ui.html?lang=en)
* [Create the schema using the API](https://experienceleague.adobe.com/docs/experience-platform/xdm/tutorials/create-schema-api.html?lang=en)

>[!IMPORTANT]
>
>* The schema must extend the **XDM ExperienceEvent class.** 
> * You must ensure that the Schema includes a **primary identity**, and is **enabled for Profile**
>   * [Define Identity Fields in the UI](https://experienceleague.adobe.com/docs/experience-platform/xdm/ui/fields/identity.html?lang=en)
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

* You will now see a list of predefined **push types** already configured. These are the [Experience Events](https://experienceleague.adobe.com/docs/experience-platform/xdm/classes/experienceevent.html?lang=en) that will be sent to Experience Platform when they occur.   
![Screenshot showing the RainFocus platform and the Experience Events that are configured automatically](/help/sources/images/tutorials/create/rainfocus/rainfocus_integration-profile-setup.png)

* Select the **Sample JSON Payload** tab

* Highlight and copy the Sample JSON Payload and **save it in a new file with a .json extension**. This will be used later in Experience Platform for mapping configurations.
![Screenshot showing the RainFocus platform and the JSON preview that is generated](/help/sources/images/tutorials/create/rainfocus/rainfocus_integration-profile-json.png)

>[!TIP]
>
> **Setup is not yet complete** - _we will need to return to complete the integrations profile, keep this tab open and proceed to the next step to install and configure the Source Connector in Experience Platform and to obtain the_ **_Streaming Endpoint_** _and_ **_Dataflow ID._**

## Connect your RainFocus account in Experience Platform

In the Platform UI, select Sources from the left navigation bar to access the Sources workspace. The Catalog screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the Analytics category, select RainFocus, and then select Setup.

![Screenshot showing the JSON upload step of the RainFocus Source Connector](/help/sources/images/tutorials/create/rainfocus/rainfocus_sources-rf.png)

## Select data

The Select data step appears, providing an interface for you to select the data that you bring to Platform.

* The left part of the interface is a browser that allows you to view the available data streams within your account;
* The right part of the interface lets you preview up to 100 rows of data from a JSON file.

Select Upload files to upload a JSON file from your local system. Alternatively, you can drag and drop the JSON file you want to upload into the Drag and drop files panel.

Upload the Sample JSON Payload downloaded from **RainFocus**.

![Screenshot showing the JSON upload step of the RainFocus Source Connector](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-json-upload.png)

Once your file uploads, the preview interface updates to display a preview of the schema you uploaded. The preview interface allows you to inspect the contents and structure of a file. You can also use the Search field utility to access specific items from within your schema.

When finished, select **Next**.

![Screenshot showing the JSON preview of the uploaded sample](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-json-preview.png)

## Dataflow detail

The **Dataflow detail** step appears, providing you with options to use an existing dataset or establish a new dataset for your dataflow, as well as an opportunity to provide a name and description for your dataflow. During this step, you can also configure settings for Profile ingestion, error diagnostics, partial ingestion, and alerts.

When finished, select **Next**.

![Screenshot showing how to configure the dataflow](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-dataflow-setup.png)

## Mapping

The Mapping step appears, providing you with an interface to map the source fields from your source schema to their appropriate target XDM fields in the target schema.

Platform provides intelligent recommendations for auto-mapped fields based on the target schema or dataset that you selected. You can manually adjust mapping rules to suit your use cases. Based on your needs, you can choose to map fields directly, or use data prep functions to transform source data to derive computed or calculated values. For comprehensive steps on using the mapper interface and calculated fields, see the [Data Prep UI guide](https://experienceleague.adobe.com/docs/experience-platform/data-prep/ui/mapping.html?lang=en).

Once your source data is successfully mapped, select **Next**.

![Screenshot showing how to configure the dataflow](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-mappings.png)

## Review

The **Review** step appears, allowing you to review your new dataflow before it is created. Details are grouped within the following categories:

* **Connection**: Shows the source type, the relevant path of the chosen source file, and the amount of columns within that source file.
* **Assign dataset & map fields**: Shows which dataset the source data is being ingested into, including the schema that the dataset adheres to.

Once you have reviewed your dataflow, select **Finish** and allow some time for the dataflow to be created.

![Screenshot showing the confirmation dialog present on the mapping view of the source connector](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-compelete.png)

## Get your streaming endpoint URL

With your streaming dataflow created, you can now retrieve your streaming endpoint URL. This endpoint will be used to subscribe to your webhook, allowing your streaming source to communicate with Experience Platform.

To retrieve your streaming endpoint, go to the Dataflow activity page of the dataflow that you just created and copy the endpoint from the bottom of the Properties panel.

![Screenshot showing the API and Dataset values](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-dataflow-api.png)

## Activate the Integration Profile in RainFocus

* Log into the [**RainFocus** platform](https://app.rainfocus.com). In the primary navigation, select **Libraries** and **Integration Profiles** 
* Open the Integration Profile created previously. 
* Paste the **Dataflow ID** and **Streaming Endpoint** copied from the Dataflow in Experience Platform and select **Save**

## Next steps

By following this tutorial, you have established a connection to your RainFocus account. 

## Additional resources

* [RainFocus Help Center](https://help.rainfocus.com/hc/en-us)
* [Create an Adobe Service Account (JWT) in the Adobe Developer Portal](https://developer.adobe.com/developer-console/docs/guides/authentication/ServiceAccountIntegration/)
* [Create a Schema in the UI](https://experienceleague.adobe.com/docs/experience-platform/xdm/tutorials/create-schema-ui.html?lang=en)
* [Create a Schema in the API](https://experienceleague.adobe.com/docs/experience-platform/xdm/tutorials/create-schema-api.html?lang=en)
* [Define Identity Fields in the UI](https://experienceleague.adobe.com/docs/experience-platform/xdm/ui/fields/identity.html?lang=en)
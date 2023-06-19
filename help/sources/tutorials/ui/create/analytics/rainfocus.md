---
title: Connect Your RainFocus Account To Experience Platform Using the UI
description: Learn how to connect your RainFocus account to Experience Platform using the UI.
badge: Beta
hide: true
hidefromtoc: true
---
# Connect your [!DNL RainFocus] account to Experience Platform using the UI

>[!NOTE]
>
>The [!DNL RainFocus] source is in beta. See the [sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

This tutorial provides steps on how to connect your [!DNL RainFocus] account and stream event management and analytics data to Adobe Experience Platform.

>[!IMPORTANT]
>
>This documentation page was created by the [!DNL RainFocus] team. For any inquiries or update requests, please contact them directly at clientcare<span>@rainfocus.com or visit the [[!DNL RainFocus] Help Center](https://help.rainfocus.com/hc/en-us)

## Getting started

This tutorial requires a working understanding of the following components of Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

### Prerequisites

Before you can connect your [!DNL RainFocus] account to Experience Platform, you must first complete the following prerequisite tasks:

* [Gather required credentials](../../../../connectors/analytics/rainfocus.md#gather-required-credentials)
* [Create an XDM schema and define the identity field](../../../../connectors/analytics/rainfocus.md#create-an-xdm-schema-and-define-the-identity-field)
* [Create an Integration Profile in RainFocus](../../../../connectors/analytics/rainfocus.md#create-an-integration-profile-in-rainfocus)

Once you have completed the prerequisite setup, you can then proceed to the steps outlined below.

## Connect your RainFocus account to Experience Platform

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the sources workspace. The *[!UICONTROL Catalog]* screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *[!UICONTROL Analytics]* category, select **[!UICONTROL RainFocus Experience]**, and then select **[!UICONTROL Add data]**.

![The sources catalog on Experience Platform UI with the RainFocus source selected.](/help/sources/images/tutorials/create/rainfocus/rainfocus_sources-rf.png)

## Select data

The Select data step appears, providing an interface for you to select the data that you bring to Experience Platform.

* The left part of the interface is a browser that allows you to view the available data streams within your account;
* The right part of the interface lets you preview up to 100 rows of data from a JSON file.

Select **[!UICONTROL Upload files]** to upload a JSON file from your local system. Alternatively, you can drag and drop the JSON file you want to upload into the Drag and drop files panel.

Upload the Sample JSON Payload downloaded from **RainFocus**.

![The select data step in the sources workflow.](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-json-upload.png)

Once your file uploads, the preview interface updates to display a preview of the schema you uploaded. The preview interface allows you to inspect the contents and structure of a file. You can also use the Search field utility to access specific items from within your schema.

When finished, select **[!UICONTROL Next]**.

![The data preview step of the sources workflow.](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-json-preview.png)

## Dataflow detail

The **Dataflow detail** step appears, providing you with options to use an existing dataset or establish a new dataset for your dataflow, as well as an opportunity to provide a name and description for your dataflow. During this step, you can also configure settings for Profile ingestion, error diagnostics, partial ingestion, and alerts.

When finished, select **[!UICONTROL Next]**.

![The dataflow detail step of the sources workflow.](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-dataflow-setup.png)

## Mapping {#mapping}

The Mapping step appears, providing you with an interface to map the source fields from your source schema to their appropriate target XDM fields in the target schema.

Experience Platform provides intelligent recommendations for auto-mapped fields based on the target schema or dataset that you selected. You can manually adjust mapping rules to suit your use cases. Based on your needs, you can choose to map fields directly, or use data prep functions to transform source data to derive computed or calculated values. For comprehensive steps on using the mapper interface and calculated fields, see the [Data Prep UI guide](../../../../../data-prep/ui/mapping.md).

Once your source data is successfully mapped, select **[!UICONTROL Next]**.

![The mapping step of the sources workflow.](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-mappings.png)

## Review

The **Review** step appears, allowing you to review your new dataflow before it is created. Details are grouped within the following categories:

* **Connection**: Shows the source type, the relevant path of the chosen source file, and the amount of columns within that source file.
* **Assign dataset & map fields**: Shows which dataset the source data is being ingested into, including the schema that the dataset adheres to.

Once you have reviewed your dataflow, select **Finish** and allow some time for the dataflow to be created.

![The review step of the sources workflow.](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-compelete.png)

## Get your streaming endpoint URL {#get-your-streaming-endpoint-url}

With your streaming dataflow created, you can now retrieve your streaming endpoint URL. This endpoint will be used to subscribe to your webhook, allowing your streaming source to communicate with Experience Platform.

To retrieve your streaming endpoint, go to the *[!UICONTROL Dataflow activity]* page of the dataflow that you just created and copy the endpoint from the bottom of the *[!UICONTROL Properties]* panel.

![The dataflow activity page in the sources workspace, with the streaming endpoint URL highlighted.](/help/sources/images/tutorials/create/rainfocus/rainfocus_source-dataflow-api.png)

## Activate your Integration Profile in RainFocus

Once your dataflow is complete and you have retrieved your streaming endpoint URL, you can now activate the [!DNL Integration Profile] in [!DNL RainFocus].

* Log into the [[!DNL RainFocus] platform](https://app.rainfocus.com). In the primary navigation, select **[!DNL Libraries]** and **[!DNL Integration Profiles]** 
* Open the [!DNL Integration Profile] that you created earlier as part of the [prerequisites](../../../../connectors/analytics/rainfocus.md#create-an-integration-profile-in-rainfocus). 
* Paste the **Dataflow ID** and **Streaming Endpoint** copied from the Dataflow in Experience Platform and select **Save**

## Next steps

By following this tutorial, you have established a connection for your [!DNL RainFocus] source, allowing you to stream your event management and analytics data to Experience Platform.

## Additional resources

The following documents provide additional guidance on nuances surrounding the [!DNL RainFocus] source.

* [RainFocus Help Center](https://help.rainfocus.com/hc/en-us)
* [Create an Adobe Service Account (JWT) in the Adobe Developer Portal](https://developer.adobe.com/developer-console/docs/guides/authentication/ServiceAccountIntegration/)
* [Create a Schema in the UI](../../../xdm/tutorials/create-schema-ui.md)
* [Create a Schema in the API](../../../xdm/tutorials/create-schema-api.md)
* [Define Identity Fields in the UI](https://experienceleague.adobe.com/docs/experience-platform/xdm/ui/fields/identity.html)
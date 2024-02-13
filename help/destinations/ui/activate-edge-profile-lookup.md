---
title: Activate audiences for edge profile lookup use cases
description: Learn how to use the Custom Personalization destination together with the Edge Network Server API for audience activation in edge profile lookup use cases.
type: Tutorial
---

# Activate audiences for edge profile lookup use cases

## Overview {#overview}

Adobe Experience Platform uses the [Real-Time Customer Profile](../../profile/home.md) as the single source of truth for all profile data. 

With Real-Time Customer Profile, you can see a holistic view of each individual customer by combining data from multiple channels, including online, offline, CRM, and third party sources.

Experience Platform stores all profile data in a central hub which can deliver profile information for use cases that rely on the completeness and comprehensiveness of your profile data.

However, for use cases which depend on quick, real-time data retrieval, [!DNL Platform] uses edge profiles. These are lightweight profiles distributed throughout the [Edge Network](../../collection/home.md#edge). Since the Edge Network is a fast and globally distributed network of servers, you can use edge profiles for your real-time personalization use cases, where timing is critical.

This page describes the steps that you must follow when you want to implement a personalization use case which needs quick profile data lookup to deliver personalization through downstream applications, in real-time.

## Prerequisites {#prerequisites}

While you will configure the use case described in this page, you will use the following Platform components:

* [Datastreams](../../datastreams/overview.md): You will configure a datastream which receives incoming event data and responds with edge profile data.
* [Merge Policies](../../segmentation/ui/segment-builder.md#merge-policies): You will create an [!UICONTROL Active-On-Edge] merge policy to ensure that the edge profiles use the correct profile data.
* [Custom Personalization connection](../catalog/personalization/custom-personalization.md): You will configure a new custom personalization connection to activate your audiences.
* [Edge Network Server API](../../server-api/overview.md): You will use [interactive data collection](../../server-api/interactive-data-collection.md) to send event data to the Edge Network.




>[!IMPORTANT]
> 
> * To activate data and enable the [mapping step](#mapping) of the workflow, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions).
> * To activate data without going through the [mapping step](#mapping) of the workflow, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Segment without Mapping]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions).
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}
> 
> Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

## Step 1: Create and configure a datastream {#create-datastream}

Follow the steps in the [datastream configuration](../../datastreams/configure.md#create-a-datastream) documentation to create a new datastream with the following **[!UICONTROL Service]** settings:

* **[!UICONTROL Service]**: [!UICONTROL Adobe Experience Platform]
* **[!UICONTROL Personalization Destinations]**: Enabled
* **[!UICONTROL Edge Segmentation]**: Enabled, if you also require edge segmentation.

    >[!NOTE]
    >
    >If you enable **[!UICONTROL Edge Segmentation]**, the maximum number of requests per second (RPS) is lower. See the [guardrails documentation]() for details.

![](../assets/ui/activate-edge-profile-lookup/datastream-config.png)


## Step 2: Create an [!DNL Active-On-Edge] merge policy {#create-merge-policy}

The [!DNL Active-On-Edge] merge policy ensures that audiences are constantly evaluated [on the edge](../../segmentation/ui/edge-segmentation.md) and are available for real-time personalization use cases.

>[!IMPORTANT]
>
>Currently, edge destinations only support the activation of audiences that use the [Active-on-Edge Merge Policy](../../segmentation/ui/segment-builder.md#merge-policies) set as default. If you map audiences which use a different merge policy to edge destinations, those audiences will not be evaluated.

Follow the instructions on [creating a merge policy](../../profile/merge-policies/ui-guide.md#create-a-merge-policy), and make sure to enable the **[!UICONTROL Active-On-Edge Merge Policy]** toggle.

## Step 3: Create a new audience in Platform {#create-audience}

After you have created the [!DNL Active-On-Edge] merge policy, you must create a new audience in Platform.

Follow the [audience builder](../../segmentation/ui/segment-builder.md) guide to create your new audience, and make sure to [assign it](../../segmentation/ui/segment-builder.md#merge-policies) the [!DNL Active-On-Edge] merge policy that you created in [step 2](#create-merge-policy).

## Step 4: Create a destination connection {#connect-destination}

You can now configure a new connection to a [custom personalization destination](../catalog/personalization/custom-personalization.md).

Follow the [destination connection creation tutorial](../ui/connect-destination.md) for detailed instructions on how to create a new destination connection.

When configuring the new destination, select the datastream which you created in [step 1](#create-datastream) in the **[!UICONTROL Datastream ID]** field.

![](../assets/ui/activate-edge-profile-lookup/destination-config.png)

## Step 5: Activate your audiences to the destination {#select-destination}

Select the custom personalization destination that you configured at the previous step.

1. Go to **[!UICONTROL Connections > Destinations]**, and select the **[!UICONTROL Catalog]** tab.
    
    ![Destination Catalog tab highlighted in the Experience Platform UI.](../assets/ui/activate-edge-personalization-destinations/catalog-tab.png)

1. Select **[!UICONTROL Activate audiences]** on the card corresponding to the personalization destination where you want to activate your audiences, as shown in the image below.

    ![Activate audience control highlighted on a destination card in the catalog.](../assets/ui/activate-edge-personalization-destinations/activate-audiences-button.png)

1. Select the destination connection that you want to use to activate your audiences, then select **[!UICONTROL Next]**.

    ![Select destination step in the activation workflow.](../assets/ui/activate-edge-personalization-destinations/select-destination.png)

1. Move to the next section to [select your audiences](#select-audiences).

## Step 6: Select your audiences {#select-audiences}

Use the check boxes to the left of the audience names to select the audiences that you want to activate to the destination, then select **[!UICONTROL Next]**.

To select the audiences that you want to activate to the destination, use the check boxes to the left of the audience names, then select **[!UICONTROL Next]**.

You can select from multiple types of audiences, depending on their origin:

* **[!UICONTROL Segmentation Service]**: Audiences generated within Experience Platform by the Segmentation Service. See the [segmentation documentation](../../segmentation/ui/overview.md) for more details.
* **[!UICONTROL Custom upload]**: Audiences generated outside of Experience Platform, and uploaded into Platform as CSV files. To learn more about external audiences, see the documentation on [importing an audience](../../segmentation/ui/overview.md#import-audience).
* Other types of audiences, originating from other Adobe solutions, such as [!DNL Audience Manager].

![Select audiences step of the activation workflow with several audiences highlighted.](../assets/ui/activate-edge-personalization-destinations/select-audiences.png)

## Step 7: Map attributes {#mapping}

>[!IMPORTANT]
>
>Profile attributes may contain sensitive data. To protect this data, the **[!UICONTROL Custom Personalization]** destination requires you to use the [Edge Network Server API](../../server-api/overview.md) when configuring the destination for attribute-based personalization. All the Server API calls must be made in an [authenticated context](../../server-api/authentication.md).
>
><br>If you are already using Web SDK or Mobile SDK for your integration, you can retrieve attributes via the Server API by adding a server-side integration.
>
><br>If you do not follow the requirements above, personalization will be based on audience membership only.

Select the attributes which you want to be made available for the edge profiles.


### Select source attributes {#select-source-attributes}

To add source attributes, select the **[!UICONTROL Add new field]** control on the **[!UICONTROL Source field]** column and search or navigate to your desired XDM attribute field, as shown below.

![Screen recording showing how to select a target attribute in the mapping step.](../assets/ui/activate-edge-personalization-destinations/mapping-step-select-attribute.gif)

### Select target attributes {#select-target-attributes}

To add target attributes, select the **[!UICONTROL Add new field]** control on the **[!UICONTROL Target field]** column and type in the custom attribute name that you want to map the source attribute to.

![Screen recording showing how to select an XDM attribute in the mapping step](../assets/ui/activate-edge-personalization-destinations/mapping-step-select-target-attribute.gif)


## Step 8: Review and finish the activation {#review}

On the **[!UICONTROL Review]** page, you can see a summary of your selection. Select **[!UICONTROL Cancel]** to break up the flow, **[!UICONTROL Back]** to modify your settings, or **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination.

![Selection summary in the review step.](../assets/ui/activate-edge-personalization-destinations/review.png)

### Consent policy evaluation {#consent-policy-evaluation}

If your organization purchased **Adobe Healthcare Shield** or **Adobe Privacy & Security Shield**, select **[!UICONTROL View applicable consent policies]** to see which consent policies are applied and how many profiles are included in the activation as a result of them. Read about [consent policy evaluation](/help/data-governance/enforcement/auto-enforcement.md#consent-policy-evaluation) for more information.

### Data usage policy checks {#data-usage-policy-checks}

In the **[!UICONTROL Review]** step, Experience Platform also checks for any data usage policy violations. Shown below is an example where a policy is violated. You cannot complete the audience activation workflow until you have resolved the violation. For information on how to resolve policy violations, read about [data usage policy violations](/help/data-governance/enforcement/auto-enforcement.md#data-usage-violation) in the data governance documentation section.
 
![An example of a data policy violation.](../assets/common/data-policy-violation.png)

### Filter audiences {#filter-audiences}

In this step you can use the available filters on the page to display only the audiences whose schedule or mapping has been updated as part of this workflow. You can also toggle which table columns you want to see. 

![Screen recording showing the available audience filters in the review step.](../assets/ui/activate-edge-personalization-destinations/filter-audiences-review-step.gif)

If you are satisfied with your selection and no policy violations have been detected, select **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination. 

## Step 9: Send data to the datastream {#send-data}

The datastream which you configured in [step 1](#create-datastream) is now ready to accept incoming event data and respond with edge profile information.

To send data to the data stream, you must use the [Edge Network Server API](../../server-api/overview.md).

Configure your server-side integration to use the [interactive data collection endpoint](../../server-api/interactive-data-collection.md) to send single event data.

You can send data to the datastream through authenticated or unauthenticated requests. Use the following endpoints depending on your type of request:

>[!BEGINTABS]

>[!TAB Authenticated requests]

Use the endpoint below to send authenticated requests via Adobe I/O.

`https://server.adobedc.net/ee/v2/interact?dataStreamId={DATASTREAM_ID}`

>[!TAB Unauthenticated requests]

Use the endpoint below to send unauthenticated requests.

`https://edge.adobedc.net/ee/v2/interact?dataStreamId={DATASTREAM_ID}`

>[!ENDTABS]

If your use case requires access to an edge profile, you can send an empty event (`POST` call) with the primary identity to one of the endpoints above, depending on your authentication context, with a payload similar to the one below.

```json
{
    "event":{
        "xdm":{
            "identityMap":{
                "Email":[
                    {
                        "id":"johndoe@email.com",
                        "primary": true
                    }
                ]
            }
        }
    }
}
```



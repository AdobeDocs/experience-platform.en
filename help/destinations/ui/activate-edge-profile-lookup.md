---
title: Configure edge profile lookup for real-time personalization, using Custom Personalization With Attributes and Server API
description: Learn how to use the Custom Personalization With Attributes destination together with the Edge Network Server API for audience activation in edge profile lookup use cases.
type: Tutorial
---

# Configure edge profile lookup for real-time personalization, using Custom Personalization With Attributes and Server API

## Overview {#overview}

Adobe Experience Platform uses the [Real-Time Customer Profile](../../profile/home.md) as the single source of truth for all profile data. 

Experience Platform stores all profile data in a central hub which can deliver profile information for use cases that rely on the completeness and comprehensiveness of your profile data.

However, for use cases which depend on quick, real-time data retrieval, [!DNL Platform] uses [edge profiles](../../profile/edge-profiles.md). These are lightweight profiles distributed throughout the [Edge Network](../../collection/home.md#edge). Since the Edge Network is a fast and globally distributed network of servers, you can quickly retrieve profile information from edge profiles, for real-time personalization use cases, where timing is critical.

One such use case could involve real-time personalization of a user's experience on your website, by quickly retrieving profile information from the edge profile and then passing the information over to a third-party personalization engine of your choice, in order to send the user an [!DNL SMS] based on their current activity on your website.

This page describes the steps that you must follow to configure an edge profile lookup use case, which requires quick retrieval of profile data to deliver personalization experiences and/or inform decisioning rules through downstream applications, in real-time.

## Terminology and prerequisites {#prerequisites}

When configuring the use case described in this page, you will use the following Platform components:

* [Datastreams](../../datastreams/overview.md): You will configure a datastream which receives incoming event data and responds with edge profile data.
* [Merge Policies](../../segmentation/ui/segment-builder.md#merge-policies): You will create an [!UICONTROL Active-On-Edge] merge policy to ensure that the edge profiles use the correct profile data.
* [Custom Personalization connection](../catalog/personalization/custom-personalization.md): You will configure a new custom personalization connection which will send the profile attributes to the edge network.
* [Edge Network Server API](../../server-api/overview.md): You will use the Server API [interactive data collection](../../server-api/interactive-data-collection.md) functionality to quickly retrieve profile attributes from the edge profiles.

## Step 1: Create and configure a datastream {#create-datastream}

Follow the steps in the [datastream configuration](../../datastreams/configure.md#create-a-datastream) documentation to create a new datastream with the following **[!UICONTROL Service]** settings:

* **[!UICONTROL Service]**: [!UICONTROL Adobe Experience Platform]
* **[!UICONTROL Personalization Destinations]**: Enabled
* **[!UICONTROL Edge Segmentation]**: If you require edge segmentation, enable this option. If you are only interested in looking up profile attributes on the edge, but do not want to perform any segmentation based on the edge profiles, then leave this option disabled.

    >[!IMPORTANT]
    >
    >**[!UICONTROL Edge Segmentation]** directly affects the edge profile access API request limits. See the [guardrails documentation](../guardrails.md#edge-destinations-activation) for detailed information.

    ![Platform UI image showing the datastream configuration screen.](../assets/ui/activate-edge-profile-lookup/datastream-config.png)


## Step 2: Configure your audiences for edge evaluation {#audience-edge-evaluation}

Looking up profile attributes on the edge requires your audiences to be configured for edge evaluation.

Make sure the audiences that you plan to activate have the [Active-on-Edge Merge Policy](../../segmentation/ui/segment-builder.md#merge-policies) set as default. The [!DNL Active-On-Edge] merge policy ensures that audiences are constantly evaluated [on the edge](../../segmentation/ui/edge-segmentation.md) and are available for real-time personalization use cases.

Follow the instructions on [creating a merge policy](../../profile/merge-policies/ui-guide.md#create-a-merge-policy), and make sure to enable the **[!UICONTROL Active-On-Edge Merge Policy]** toggle.

>[!IMPORTANT]
>
>If your audiences use a different merge policy, you will not be able to retrieve profile attributes from the edge and you will be unable to perform edge profile lookup.


## Step 3: Send profile attribute data to the Edge Network{#configure-custom-personalization-connection}

Before you can perform profile lookup and retrieve attributes from the edge profiles, you must configure Experience Platform to update the edge profiles with the attribute information that you neeed in your personalization scenario.

You will use the the [Custom Personalization With Attributes](../catalog/personalization/custom-personalization.md) connection to send profile attributes to the Edge Network.

### Configure a Custom Personalization With Attributes connection {#configure-destination}

Follow the [destination connection creation tutorial](../ui/connect-destination.md) for detailed instructions on how to create a new destination connection.

When configuring the new destination, select the datastream which you created in [step 1](#create-datastream) in the **[!UICONTROL Datastream ID]** field.

![Experience Platform UI image showing the Custom Personalization With Attributes configuration screen.](../assets/ui/activate-edge-profile-lookup/destination-config.png)

### Activate your audiences to the Custom Personalization With Attributes connection {#activate-audiences}

After you have created a **[!UICONTROL Custom Personalization With Attributes]** connection, you are now ready to send profile data to the Edge Network.

>[!IMPORTANT]
> 
> * To activate data and enable the [mapping step](#mapping) of the workflow, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions).
> 
> Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

1. Go to **[!UICONTROL Connections > Destinations]**, and select the **[!UICONTROL Catalog]** tab.
    
    ![Destination Catalog tab highlighted in the Experience Platform UI.](../assets/ui/activate-edge-personalization-destinations/catalog-tab.png)

1. Find the **[!UICONTROL Custom Personalization With Attributes]**  destination card, then select **[!UICONTROL Activate audiences]**, as shown in the image below.

    ![Activate audience control highlighted on a destination card in the catalog.](../assets/ui/activate-edge-personalization-destinations/activate-audiences-button.png)

1. Select the destination connection that you previously configured, then select **[!UICONTROL Next]**.

    ![Select destination step in the activation workflow.](../assets/ui/activate-edge-personalization-destinations/select-destination.png)

1. Move to the next section to [select your audiences](#select-audiences).

### Select your audiences {#select-audiences}

Use the check boxes to the left of the audience names to select the audiences that you want to activate to the destination, then select **[!UICONTROL Next]**.

You can select from multiple types of audiences, depending on their origin:

* **[!UICONTROL Segmentation Service]**: Audiences generated within Experience Platform by the Segmentation Service. See the [segmentation documentation](../../segmentation/ui/overview.md) for more details.
* **[!UICONTROL Custom upload]**: Audiences generated outside of Experience Platform, and uploaded into Platform as CSV files. To learn more about external audiences, see the documentation on [importing an audience](../../segmentation/ui/overview.md#import-audience).
* Other types of audiences, originating from other Adobe solutions, such as [!DNL Audience Manager].

![Select audiences step of the activation workflow with several audiences highlighted.](../assets/ui/activate-edge-personalization-destinations/select-audiences.png)

### Map profile attributes {#mapping}

Select the profile attributes that you want to be made available for the edge profiles.

**Select source attributes**

To add source attributes, select the **[!UICONTROL Add new field]** control on the **[!UICONTROL Source field]** column and search or navigate to your desired XDM attribute field, as shown below.

![Screen recording showing how to select a target attribute in the mapping step.](../assets/ui/activate-edge-personalization-destinations/mapping-step-select-attribute.gif)

**Select target attributes**

To add target attributes, select the **[!UICONTROL Add new field]** control on the **[!UICONTROL Target field]** column and type in the custom attribute name that you want to map the source attribute to.

![Screen recording showing how to select an XDM attribute in the mapping step](../assets/ui/activate-edge-personalization-destinations/mapping-step-select-target-attribute.gif)

When you are finished mapping profile attributes, select **[!UICONTROL Next]**.

On the **[!UICONTROL Review]** page, you can see a summary of your selection. Select **[!UICONTROL Cancel]** to break up the flow, **[!UICONTROL Back]** to modify your settings, or **[!UICONTROL Finish]** to confirm your selection and start sending profile data to the Edge Network.

![Selection summary in the review step.](../assets/ui/activate-edge-personalization-destinations/review.png)

**Consent policy evaluation**

If your organization purchased **Adobe Healthcare Shield** or **Adobe Privacy & Security Shield**, select **[!UICONTROL View applicable consent policies]** to see which consent policies are applied and how many profiles are included in the activation as a result of them. Read about [consent policy evaluation](/help/data-governance/enforcement/auto-enforcement.md#consent-policy-evaluation) for more information.

**Data usage policy checks**

In the **[!UICONTROL Review]** step, Experience Platform also checks for any data usage policy violations. Shown below is an example where a policy is violated. You cannot complete the audience activation workflow until you have resolved the violation. For information on how to resolve policy violations, read about [data usage policy violations](/help/data-governance/enforcement/auto-enforcement.md#data-usage-violation) in the data governance documentation section.
 
![An example of a data policy violation.](../assets/common/data-policy-violation.png)

**Filter audiences**

In this step you can use the available filters on the page to display only the audiences whose schedule or mapping has been updated as part of this workflow. You can also toggle which table columns you want to see. 

![Screen recording showing the available audience filters in the review step.](../assets/ui/activate-edge-personalization-destinations/filter-audiences-review-step.gif)

If you are satisfied with your selection and no policy violations have been detected, select **[!UICONTROL Finish]** to confirm your selection.

## Step 4: Configure Edge Profile Lookup {#configure-edge-profile-lookup}

By now you should have finished [configuring your datastream](#create-datastream), you have [created a new Custom Personalization With Attributes destination connection](#configure-destination), and you have used this connection to [send the profile attributes](#activate-audiences) that will power your personalization to the Edge Network.

The next step is to configure your personalization solution to retrieve profile attributes from the edge profiles.

>[!IMPORTANT]
>
>Profile attributes may contain sensitive data. To protect this data, you must retrieve the profile attributes through the [Edge Network Server API](../../server-api/overview.md). Furthermore, you must retrieve the profile attributes via the Server API [interactive data collection endpoint](../../server-api/interactive-data-collection.md), in order for the API calls to be authenticated.
><br>If you do not follow the requirements above, personalization will be based on audience membership only, and profile attributes will not be available to you.

The datastream which you configured in [step 1](#create-datastream) is now ready to accept incoming event data and respond with edge profile information.

Configure your integration to retrieve edge profile information as shown in the examples below.

### Request {#request}

To retrieve edge profile data, send an empty `POST` call to the `/interact` endpoint, with the primary identity included in the event, as shown below.

```shell
curl -X POST "https://server.adobedc.net/ee/v2/interact?dataStreamId={DATASTREAM_ID}" 
-H "Authorization: Bearer {TOKEN}" 
-H "x-gw-ims-org-id: {ORG_ID}" 
-H "x-api-key: {API_KEY}" 
-H "Content-Type: application/json" 
-d '{
    "event":
    {
        "xdm": {
            "identityMap": {
                "Email": [
                    {  
                        "id":"test123@adobetest.com",
                        "primary":true
                    }
                ]
            }
        }
    }
    
}'
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `dataStreamId` | `String` | Yes. | The datastream ID of the datastream that you [created in step 1](#create-datastream). |

### Response {#response}

A successful response returns HTTP status `200 OK`, with a `Handle` object that includes information similar to the examples in the tabs below, depending on whether the profile is found on the edge or not.

>[!BEGINTABS]

>[!TAB Profile exists on the edge]

If the profile exists on the edge, depending on the profile attributes and audiences activated to the edge, you can expect a response with attributes and audience memberships similar to the one below.


```json
{
    "requestId": "3c600138-d785-42ca-a025-bb725f4b5da9",
    "handle": [
        {
            "payload": [
                {
                    "type": "profileLookup",
                    "destinationId": "9218b727-ec59-4a46-b8b9-05503f138c5d",
                    "alias": "rk-demo-custom-personalization-XXXX",
                    "attributes": {
                        "zip": {
                            "value": "19000"
                        },
                        "firstName": {
                            "value": "Test"
                        },
                        "lastName": {
                            "value": "User123"
                        },
                        "gender": {
                            "value": "male"
                        },
                        "city": {
                            "value": "Philadelphia"
                        },
                        "state": {
                            "value": "PA"
                        },
                        "email": {
                            "value": "test123@adobetest.com"
                        }
                    },
                    "segments": [
                        {
                            "id": "85018bd8-7ad1-4e17-ae30-8389c04bd3c0",
                            "namespace": "ups"
                        },
                        {
                            "id": "d09a8159-8b30-4178-b2f2-7a8c5e3168d9",
                            "namespace": "ups"
                        }
                    ]
                }
            ],
            "type": "activation:pull",
            "eventIndex": 0
        },
        {
            "payload": [
                {
                    "scope": "Target",
                    "hint": "35",
                    "ttlSeconds": 1800
                },
                {
                    "scope": "AAM",
                    "hint": "9",
                    "ttlSeconds": 1800
                },
                {
                    "scope": "EdgeNetwork",
                    "hint": "or2",
                    "ttlSeconds": 1800
                }
            ],
            "type": "locationHint:result"
        },
        {
            "payload": [
                {
                    "key": "kndctr_D1E035DD5CEDB5090A495FCD_AdobeOrg_cluster",
                    "value": "or2",
                    "maxAge": 1800
                }
            ],
            "type": "state:store"
        }
    ]
}
```

>[!TAB Profile does not exist on the edge]

If the profile does not exist on the edge, you can expect a response similar to the one below.

```json
{
    "requestId": "531b541a-4541-419e-ac99-fd7e452f0c0f",
    "handle": [
        {
            "payload": [],
            "type": "activation:pull",
            "eventIndex": 0
        },
        {
            "payload": [
                {
                    "scope": "Target",
                    "hint": "35",
                    "ttlSeconds": 1800
                },
                {
                    "scope": "AAM",
                    "hint": "9",
                    "ttlSeconds": 1800
                },
                {
                    "scope": "EdgeNetwork",
                    "hint": "or2",
                    "ttlSeconds": 1800
                }
            ],
            "type": "locationHint:result"
        },
        {
            "payload": [
                {
                    "key": "kndctr_D1E035DD5CEDB5090A495FCD_AdobeOrg_cluster",
                    "value": "or2",
                    "maxAge": 1800
                }
            ],
            "type": "state:store"
        }
    ]
}
```

>[!ENDTABS]

If you have configured the integration correctly, you now have access to the edge profile data and you can use the attributes and audience membership of your edge profiles to trigger real-time personalization in your downstream personalization engine.
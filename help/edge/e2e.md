---
title: Adobe Experience Platform Edge Network End-to-End Overview
description: A high-level overview of how to send event data to Adobe Experience Cloud solutions using the Adobe Experience Platform Edge Network.
---
# Adobe Experience Platform Edge Network end-to-end overview

Adobe Experience Platform Edge Network provides a single gateway to transfer your data to other Adobe products or third-party destinations. In order to use the Edge Network to send event data from your application, it is important to understand the core components that have to be configured in order for that data to be delivered to the destinations you require.

This guide provides a high-level tutorial of how to send an event through the Edge Network using tags. Specifically, the tutorial walks through the steps of installing and configuring the Adobe Experience Platform Web SDK extension within the Data Collection UI.

>[!NOTE]
>
>You can also opt to install and configure the SDK manually if you don't want to use a tag extension, but the surrounding steps must still be completed as outlined below.

## Prerequisites

This tutorial uses the Data Collection UI to create a schema, configure a datastream, and install the Web SDK. In order to perform these actions in the UI, you must be granted access to at least one web property along with the following property rights:

* Develop
* Manage Extensions



## Create an XDM schema

[Experience Data Model (XDM)](../xdm/home.md) is an open-source specification that provides common structures and definitions for data in the form of schemas. In other words, XDM is a way of structuring and formatting your data in a way that is actionable by the Edge Network and other Adobe Experience Cloud applications.

The first step in setting up your Edge Network operations is to create an XDM schema to represent your data. At a later step in this tutorial, you will map the data you want to send to the structure of this schema.

>[!NOTE]
>
>XDM schemas are very customizable. Rather than being overly prescriptive, the steps outlined below focus specifically on the schema requirements for the Web SDK. Outside of these parameters, you are free to define the remaining structure your data however you wish.

* Add the "AEP Web SDK mixin" to the schema, plus any other custom fields that you want to add depending on what you want to collect
* You will map your data to this schema at a later step

## Create a datastream

* A datastream tells the Edge Network where you want your data to be sent
* Differentiate event forwarding and the Web SDK
  * When setting up the datastream, you select the Adobe products you want to send data to, but you *also* can choose to enable event forwarding from here
* You fill in certain fields for each products, here are the details on that...(links)

## Configure the Web SDK

* This section uses the Data Collection UI to configure the Web SDK extension, but you can also configure it using raw code, see (link) for more info
* Fill details about organization, plus the datastream you created earlier. That way the web SDK knows which configuration to use to send your data to the right places
* Note that depending on where they want to send their data, they'll need to use tags or event forwarding:
  * If sending to Adobe products, use tags (it's free)
  * If sending to third parties, use event forwarding (paid service)

### Create an XDM data element

* Go over to Data Elements in the UI and create a new data element
* Select the Web SDK extension
* Select the XDM Object data element type
* Selects your Platform sandbox, and from that you can see all the schemas you've created in that sandbox
* You can select the sandbox you created earlier, and then you can start mapping your data to the schema

### Create a rule

* A rule is a construct that triggers when a certain event is detected, and performs an action if the required conditions (if any) are met.
* This is what ultimately sends event data to ExC solutions
* Create a send event action
  * In the **XDM data** field, select the XDM data element you created earlier, and that's what will be sent to the Edge

## Configure event forwarding (optional)

* Set up everything we just talked about up until this point
* Enable event forwarding in the datastream
* Create an event forwarding property to configure the destination for the event using a rule (E.F. uses a lot of the same functionality philosophy as tags)
* Get your event sent to the edge
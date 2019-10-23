---
title: Sources overview
seo-title: Sources in Adobe Experience Platform
description: This document provides an overview of Sources in Real-Time Customer Data Platform
seo-description: This document provides an overview of Sources in Real-Time Customer Data Platform
---

# Sources overview

In this day and age where the world is augmented by digital technologies, information is constantly being generated and stored as digital data. By leveraging the power of machine learning and advancements in the field of data science, useful insights can be derived through data analysis to help understand why things are the way they are. As an organization, data science can be applied to help better understand their customers given that the required data is available and uniform in representation. With the growing demand for data, the natural bottleneck in capitalising digital information is obtaining it at-scale, especially when it is scattered across innumerable different databases and represented in countless ways. The Real-Time Customer Data Platform lifts the restrictions involved in data collection by centralizing data all into one unified space, where data is provided through multiple locations known as **Sources**.

Sources are locations at which a connection with Real-time CDP can be established to bring in known or unknown customer data. Depending on your needs, you have the ability to establish connections across many source. Real-time CDP provides a user interface from which you can create, view, and manage your source connections.

## Sources catalog

The **Sources Catalog** provides a list of available data sources that are ready to establish a connection with, including various Adobe Solutions, advertising agencies, customer relation management (CRM) systems, email marketing agencies, and more.

>   **gif/png here showing the sources catalog**

## Data mapper

Data comes in all shapes and sizes, and the same piece of information can be represented differently across different sources. Due to the inconsistency in data representation, incoming data from a connected source must be configured to map to an Experience Data Model (XDM) schema. Real-time CDP provides an interactive mapper UI that allows you to choose the right data attributes, and easily map them to an XDM Schema.

>   **gif/png showing sources mapper UI**

For more information on XDM schemas, refer to the [basics of schema composition](https://www.adobe.io/apis/experienceplatform/home/xdm/xdmservices.html#!api-specification/markdown/narrative/technical_overview/schema_registry/schema_composition/schema_composition.md). For support on creating a custom XDM schema, see the [Schema Editor tutorial](https://www.adobe.io/apis/experienceplatform/home/xdm/xdmservices.html#!api-specification/markdown/narrative/tutorials/schema_editor_tutorial/schema_editor_tutorial.md).

## Data flows

The Sources **Flow manager** allows you to view a list of established source connections, view details of a specific connection, or an overview of various connection metrics. It is especially useful in monitoring the status of your connections, allowing you to see which connections are healthy, inactive, or has errors that needs to be resolved.

>   **gif/png showing the flow manager**

## Accounts manager

Establishing connections with sources requires permission and authorization, this is often validated through tokens or other means to ensure data privacy and integrity. The **Accounts manager** provides a browser for you to keep track of your authorized sources, and is especially useful to knowing which accounts are expiring before they actually do so.

>   **gif/png showing accounts manager**
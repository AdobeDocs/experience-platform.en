---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Adobe Experience Platform Glossary
description: A glossary of important terminology in Experience Platform.
exl-id: 00eae5f5-7dfa-45ac-aff9-9e1769a3a53a
---
# Adobe Experience Platform Destination SDK glossary 

Refer to this glossary for definitions of terms used in Destination SDK. For other Adobe Experience Platform terms, refer to the [Experience Platform glossary](/help/landing/glossary.md).

## A

**Audience metadata configuration**: An audience metadata configuration refers to the structured setup and parameters defined within Adobe Experience Platform that enable the programmatic creation, updating, and deletion of audience segments in a specified destination. This configuration utilizes audience metadata templates to align with the specifications of the marketing API of the destination platform. 

## D

**Destination configuration endpoint**: A destination configuration endpoint in Adobe Experience Platform, specifically the `/authoring/destinations` API endpoint, is used to create, retrieve, update, and delete configurations for destinations. These configurations define how data from Adobe Experience Platform is delivered to various external systems or destinations, such as marketing platforms, cloud storage services, or other data processing endpoints.

**Destination Instance**: A specific setup of a destination configuration in Adobe Experience Platform, created and managed through the Experience Platform UI. It includes all necessary parameters and credentials for connecting and sending data to the destination.

## P

**Pebble template**: A Pebble template is used to transform data exported from Adobe Experience Platform into the format required by the destination platform. It employs the Pebble templating language, which allows for dynamic data transformation through functions like `filter`, `for`, `if`, and `set`. Adobe Experience Platform includes additional custom functions like `addedSegments` and `removedSegments`. These templates help format data elements, such as timestamps and audience memberships, to meet the destination's specifications. Learn more [here](/help/destinations/destination-sdk/functionality/destination-server/message-format.md) and [here](/help/destinations/destination-sdk/functionality/destination-server/templating-specs.md). 

**Private Destination**: Custom integrations created by individual Adobe Experience Platform customers. These are tailored to meet specific business needs and are only accessible within the customer's organization, offering flexibility in data export configurations. Private destinations are available to Real-Time CDP Ultimate customers only.

**Public Destination**: A publicly available integration in the Adobe Experience Platform catalog. These destinations are standardized, branded, and simplify customer setup by providing pre-configured parameters. They are accessible to all customers using Adobe Experience Platform.

## T

**Template Specs and Templating Strategies**: Template specs are configurations used to format HTTP requests sent from Adobe Experience Platform to a destination. They transform profile attribute fields from the XDM schema into a format supported by the destination platform. Using a templating language similar to Jinja, these specs allow for dynamic data transformations based on specific rules and input data. [Learn more](/help/destinations/destination-sdk/functionality/destination-server/templating-specs.md). 

**Testing API**: The Testing API allows you to validate your destination configurations before submitting a publishing request. It provides tools to generate sample profiles and test the data flow, ensuring that the configuration matches the destination's requirements. The API supports both streaming and batch destinations, offering a way to simulate data and troubleshoot potential issues in the setup process.

**Transformation Template**: Customizes data format from XDM schema to the destination's expected format. [Learn more](/help/destinations/destination-sdk/functionality/destination-server/message-format.md).

## Y

## Z

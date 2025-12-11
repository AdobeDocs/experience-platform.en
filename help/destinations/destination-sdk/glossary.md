---
solution: Experience Platform
title: Adobe Experience Platform Destination SDK glossary
description: Understand important terminology when authoring a destination using Experience Platform Destination SDK.
exl-id: d65f390a-a980-49b8-9570-840f03534553
---
# Adobe Experience Platform Destination SDK glossary 

Refer to this glossary for definitions of terms used in Destination SDK. For other Adobe Experience Platform terms, refer to the [Experience Platform glossary](/help/landing/glossary.md).

## A

**Aggregation policy**: When configuring how data should be exported to your real-time streaming destination, you can define how profile data is aggregated before being sent to your destination platform. This helps optimize data delivery by grouping data records based on specific criteria, reducing the frequency of API calls, and improving overall efficiency. Different policies can be configured to meet various destination requirements, ensuring that data is packaged and delivered in the most effective manner. [Read more](/help/destinations/destination-sdk/functionality/destination-configuration/aggregation-policy.md). 

**Audience metadata configuration**: An audience metadata configuration refers to the structured setup and parameters defined within Adobe Experience Platform that enable the programmatic creation, updating, and deletion of audience segments in a specified destination. This configuration utilizes audience metadata templates to align with the specifications of the marketing API of the destination platform. Read more about the [audience metadata configuration](/help/destinations/destination-sdk/functionality/audience-metadata-management.md) and [available macros](/help/destinations/destination-sdk/functionality/audience-metadata-management.md#macros).

## D

**Destination configuration endpoint**: A destination configuration endpoint in Adobe Experience Platform, specifically the `/authoring/destinations` API endpoint, is used to create, retrieve, update, and delete configurations for destinations. These configurations define how data from Adobe Experience Platform is delivered to various external systems or destinations, such as marketing platforms, cloud storage services, or other data processing endpoints. Read more about [available configuration options](/help/destinations/destination-sdk/functionality/configuration-options.md#destination-configuration) and view the [reference documentation](/help/destinations/destination-sdk/authoring-api/destination-configuration/create-destination-configuration.md). 

**Destination instance**: A specific setup of a destination configuration in Adobe Experience Platform, created and managed through the Experience Platform UI. It includes all necessary parameters and credentials for connecting and sending data to the destination. After establishing the connection to your destination, you can get the destination instance ID when [browsing a connection with your destination](/help/destinations/ui/destination-details-page.md).

![UI image how to get destination instance ID](/help/destinations/destination-sdk/assets/testing-api/get-destination-instance-id.png)

## P

**[!DNL Pebble] template**: A [!DNL Pebble] template is used to transform data exported from Adobe Experience Platform into the format required by the destination platform. It employs the [!DNL Pebble] templating language, which allows for dynamic data transformation through functions like `filter`, `for`, `if`, and `set`. Adobe Experience Platform includes additional custom functions like `addedSegments` and `removedSegments`. These templates help format data elements, such as timestamps and audience memberships, to meet the destination's specifications. Learn more [here](/help/destinations/destination-sdk/functionality/destination-server/message-format.md) and [here](/help/destinations/destination-sdk/functionality/destination-server/templating-specs.md). 

**Private destination**: Custom integrations created by individual Adobe Experience Platform customers. These are tailored to meet specific business needs and are only accessible within the customer's organization, offering flexibility in data export configurations. Private destinations are available to Real-Time CDP Ultimate customers only. [Read more](/help/destinations/destination-sdk/overview.md#productized-custom-integrations).

**Public destination**: A publicly available integration in the Adobe Experience Platform catalog. These destinations are standardized, branded, and simplify customer setup by providing pre-configured parameters. They are accessible to all customers using Adobe Experience Platform. [Read more](/help/destinations/destination-sdk/overview.md#productized-custom-integrations).

## S

**Self-service documentation template**: The self-service documentation template provides a structured format that you can use to document your destination. It includes sections for an overview, use cases, prerequisites, supported identities, audiences, export types, and frequency, as well as steps for connecting to the destination, activating audiences, and mapping attributes. Use this template to ensure comprehensive and consistent documentation, allowing customers to quickly get started using your destination and understand the provided use cases. Read more about [how to document your destination](/help/destinations/destination-sdk/docs-framework/documentation-instructions.md), [download the latest self-service documentation template](/help/destinations/destination-sdk/assets/docs-framework/yourdestination-template.zip), and [view how it renders](/help/destinations/destination-sdk/docs-framework/self-service-template.md). 

## T

**Template specs and templating strategies**: Template specs are configurations used to format HTTP requests sent from Adobe Experience Platform to a destination. They transform profile attribute fields from the XDM schema into a format supported by the destination platform. Using a templating language similar to [!DNL Jinja], these specs allow for dynamic data transformations based on specific rules and input data. [Learn more](/help/destinations/destination-sdk/functionality/destination-server/templating-specs.md). 

**Testing API**: The Testing API allows you to validate your destination configurations before submitting a publishing request. It provides tools to generate sample profiles and test the data flow, ensuring that the configuration matches the destination's requirements. The API supports both streaming and file-based (batch) destinations, offering a way to simulate data and troubleshoot potential issues in the setup process. Read more about the testing API for [streaming](/help/destinations/destination-sdk/testing-api/streaming-destinations/streaming-destination-testing-overview.md) and [file-based destinations](/help/destinations/destination-sdk/testing-api/batch-destinations/file-based-destination-testing-overview.md).

**Transformation template**: A transformation template customizes data format from the Adobe XDM schema to the destination's expected format. [Learn more](/help/destinations/destination-sdk/functionality/destination-server/message-format.md).

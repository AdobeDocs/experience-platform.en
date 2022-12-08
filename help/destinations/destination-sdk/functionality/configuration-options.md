---
description: The destinations service in Adobe Experience Platform uses configuration endpoints for several components that build up the destinations functionality. Combined, these components allow Experience Platform to connect to destination partners, send custom messages, and activate profile data across the digital ecosystem.
title: Configuration options in Destination SDK
---

# Configuration options in Destination SDK

The destinations service in Adobe Experience Platform uses configuration endpoints for several components that build up the destinations functionality.

Combined, these components allow Experience Platform to connect to destination platforms, send custom messages, export custom files, and activate profile data across the digital ecosystem.

![Diagram showing the Destination SDK components, configuration endpoints, and the operations supported by them.](assets/destination-sdk-components-diagram.png)


Adobe Experience Platform Destination SDK consists of the following configurations:

* **Server configuration**: The destination server configuration ties together information about your server specs and the templating used by Adobe to deliver payloads to your destination. For file-based destinations, this configuration also includes the supported file formatting and compression formats for your destination.
    * [Server specs](destination-server/server-specs.md): A configuration template that contains information about the storage location or HTTP endpoint where data is sent to.
    * [Template specs](destination-server/templating-specs.md): In this template, you can define how to transform profile attribute fields between XDM schema and the format that your platform supports. Use this information in conjuction with the [message format](destination-server/message-format.md) documentation.
    * [Message format](destination-server/message-format.md): This section addresses in-depth information about supported templating languages, message formats, and the information required by Adobe to set up the integration with your platform. Use this information in conjuction with the [template specs](destination-server/templating-specs.md) documentation.
    * [File specs](destination-server/file-formatting.md): A configuration template that includes the file formatting and compression options for your batch destination.


* **Destination configuration**: Contains basic information about your destination. This configuration includes the identity types that your destination can support, the desired format of exported files (for file-based destinations), and various UI attributes for your destination card in the Adobe Experience Platform user interface. See the following documentation for details about each of the destination configuration components:
    * [Customer authentication configuration](destination-configuration/customer-authentication.md): Use this section to generate the [Configure new destination](../../ui/connect-destination.md) page in the Experience Platform user interface, where users connect Experience Platform to the accounts they have with your destination.
    * [OAuth2 authentication](destination-configuration/oauth2-authentication.md): This page describes the various [!DNL OAuth2] authentication flows supported by Destination SDK, and provides instructions to set up [!DNL OAuth2] authentication for your destination.
    * [Customer data fields](destination-configuration/customer-data-fields.md): This section defines the fields that users must fill in when connecting to your destination in the Experience Platform UI.
    * [UI attributes](destination-configuration/ui-attributes.md): This section defines the UI elements that Adobe should use for your destination in the Adobe Experience Platform user interface, such as the documentation URL, custom UI icon, and more.
    * [Schema configuration](destination-configuration/schema-configuration.md):  This section allows you to define schemas that users can map profile attributes and identities to.
    * [Identities and attributes](destination-configuration/identities-attributes.md): This section defines the identities your destination accepts. This configuration also populates the target identities and attributes in the [mapping step](../../ui/activate-segment-streaming-destinations.md#mapping) of the Experience Platform user interface, where users map identities and attributes from their XDM schemas to the schema in your destination.
    * [Destination delivery](destination-configuration/destination-delivery.md): This section indicates where exactly the exported data goes and what authentication rule is used in the location where the data will land.
    * [Audience metadata configuration](destination-configuration/audience-metadata-configuration.md): This section defines how segment metadata like segment names or IDs should be shared between Experience Platform and your destination.
    * [Aggregation policy](destination-configuration/aggregation-policy.md): This section defines how the exported profiles are combined in the data exports. 
    * [Batch configuration](destination-configuration/batch-configuration.md): This section refers to the file naming and export scheduling settings that will be displayed for your destination in the Adobe Experience Platform user interface. 
    * [Historical profile qualifications](destination-configuration/historical-profile-qualifications.md): This section determines if historical profile qualifications should be exported to your destination.
* **[Audience metadata configuration](audience-metadata-mangement.md)**: This configuration endpoint allows you to configure how audiences/segments are programmatically created, updated, or deleted in your destination. For file-based destinations, it allows you to set up a notification whenever files are successfully delivered to your destination.



## Related links {#related-links}

The pages below provide more detail about the functionality and configuration options available in Destination SDK, and the corresponding API operations that you can perform.

|Functionality description (streaming destinations) | Functionality description (batch destinations) | API reference |
|--- |--- |--- |
|[Destination configuration options](./destination-configuration.md) | [File-based destination configuration options](/help/destinations/destination-sdk/file-based-destination-configuration.md) |  [Destinations API endpoint operations](./destination-configuration-api.md) |
|[Server and template specs](./server-and-template-configuration.md) | [Server and file configuration specs](/help/destinations/destination-sdk/server-and-file-configuration.md) | [Destination servers API endpoint operations](./destination-server-api.md) |
|[Authentication configuration](./authentication-configuration.md) | Same as for streaming destinations. | You can configure the authentication information for your destination via the `customerAuthenticationConfigurations` parameters of the `/destinations` endpoint. More information for [streaming](/help/destinations/destination-sdk/destination-configuration.md#customer-authentication-configurations) and [batch](/help/destinations/destination-sdk/file-based-destination-configuration.md#customer-authentication-configurations) destinations. |
|[Audience metadata management](./audience-metadata-management.md) | Same as for streaming. See [file-based example](/help/destinations/destination-sdk/audience-metadata-management.md#example-file-based) to understand how audience metadata can be used in a batch destination context. |  [Audience metadata endpoint API operations](./audience-metadata-api.md) | 
|[OAuth 2 configuration](./oauth2-authentication.md) | Same as for streaming destinations | Configure using the `customerAuthenticationConfigurations` parameter in the [/destinations API endpoint](./destination-configuration-api.md). |
|[Message format](./message-format.md) | - | - | 
|[Testing tools for streaming destinations](./test-destination.md) | [Testing tools for file-based destinations](/help/destinations/destination-sdk/file-based-destination-testing-overview.md) |  [Destination testing API operations](./destination-testing-api.md) |
|[Destination publishing](./configure-destination-instructions.md#publish-destination) | Same as for streaming destinations |  [Destination publishing API operations](./destination-publish-api.md) |

{style="table-layout:auto"}

## Next steps {#next-steps}

By reading this article, you now have a general overview of the functionality provided by Destination SDK and which pages to read for more information about specific configurations. Next, you can read the guides which include all the steps to [configure a streaming](/help/destinations/destination-sdk/configure-destination-instructions.md) or a [file-based destination](/help/destinations/destination-sdk/configure-file-based-destination-instructions.md) by using Destination SDK.

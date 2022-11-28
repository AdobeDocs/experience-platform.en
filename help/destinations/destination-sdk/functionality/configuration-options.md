---
description: The destinations service in Adobe Experience Platform uses configuration endpoints for several components that build up the destinations functionality. Combined, these components allow Experience Platform to connect to destination partners, send custom messages, and activate profile data across the digital ecosystem.
title: Configuration options in Destination SDK
---

# Configuration options in Destination SDK

The destinations service in Adobe Experience Platform uses configuration endpoints for several components that build up the destinations functionality. Combined, these components allow Experience Platform to connect to destination platforms, send custom messages, export custom files, and activate profile data across the digital ecosystem. The configurations used in Adobe Experience Platform Destination SDK are:

* **Destination configuration**: Contains basic information about your destination. This configuration includes the identity types that your destination can support, the desired format of exported files (for file-based destinations), and various UI attributes for your destination card in the Adobe Experience Platform user interface.
* **Server, file, and template specs**: Ties together information about your server specs and the templating used by Adobe to deliver payloads to your destination. For file-based destinations, this configuration also includes the supported file formatting and compression formats for your destination.
  * **Server specs**: A configuration template that contains information about the storage location or HTTP endpoint where data is sent to."
  * **File specs**: A configuration template that includes the file formatting and compression options for your batch destination.
  * **Template specs**: In this template, you can define how to transform profile attribute fields between XDM schema and the format that your platform supports. For in-depth information about supported templating languages, message formats, and the information required by Adobe to set up the integration with your platform, read [Message format](./message-format.md).
* **Authentication configuration**: These settings define how Adobe Experience Platform users connect to your destination.
* **Audience metadata configuration**: This configuration endpoint allows you to configure how audiences/segments are programmatically created, updated, or deleted in your destination. For batch destinations, it allows you to set up a notification whenever files are successfully delivered to your destination.

![Diagram showing the Destination SDK configuration endpoints and how these are used together.](assets/self-service-configuration.png)

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

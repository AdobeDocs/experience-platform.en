# [!DNL Algolia User Profiles]

[!DNL Adobe Experience Platform] Real-Time CDP integrates multiple user management platforms to collect disparate user profiles to build holistic profiles for personalization and experience testing. Experience Platform provides integrations to pull user profiles from a variety of sources systems. It also provides a SDK to build custom integrations. Use the [!DNL Algolia] source to integrate with [!DNL Algolia's] Advanced Personalization APIs and retrieve user profiles for ingestion into Experience Platform. This document will guide you through the set-up of the [!DNL Algolia User Profiles] Source connector.

## Architecture
The architecture is simple, the Experience Platform Source Integration SDK provides all necessary features to authentication with the source system, to paginate data from the source system, and to provide both a full and partial data pull. The [!DNL Algolia User Profiles] Source Connector uses these features to complete the integration.

![Architecture of the Algolia & AEP Integration](../../images/tutorials/create/algolia/user-profiles/algolia-aep-user-profiles-arch.png)

## Prerequisites
* [Create an account with Algolia](https://dashboard.algolia.com/users/sign_up) or log into you existing [!DNL Algolia] account.
* [Prepare your Index](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/in-depth/prepare-data-in-depth/)
* [Set up your facets](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/)
* [Send user events](https://www.algolia.com/doc/guides/sending-events/getting-started/)
* [Personalize your Index](https://www.algolia.com/doc/guides/personalization/advanced-personalization/configure/setup/indices/)


## Set-Up & Dataflow Creation
After the prerequisites are met, please go to the set-up documentation to complete the process to configure the source connector.
- [!DNL Algolia User Profiles Source Connector](../../tutorials/ui/create/data-partners/algolia-user-profiles.md)

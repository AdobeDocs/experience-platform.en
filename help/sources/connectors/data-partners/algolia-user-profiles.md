# [!DNL Algolia User Profiles]

## Introduction
[!DNL Adobe Experience Platform (AEP) RealTime Customer Data Platform (CDP)] integrates multiple user management platforms to collect disparate user profiles to build holistic profiles for personalization and experience testing. The platform provides out of the box integrations to pull user profiles from source systems. It also provides a SDK to build custom integrations. [!DNL Algolia] has created a Source Connector that integrates with Algolia’s Advanced Personalization APIs to retrieve user profiles into AEP.  This document will guide you through the set-up of the [!DNL Algolia User Profiles] source connector.

## Architecture
The architecture is simple, the AEP Source Integration SDK provides all necessary features to authentication with the source system, to paginate data from the source system, and to provide both a full and partial data pull. The [!DNL Algolia] User Profile Source Connector uses these features to complete the integration.

![Architecture of the Algolia & AEP Integration](../../images/tutorials/create/algolia/user-profiles/algolia-aep-user-profiles-arch.png)

## Prerequisites
* [Create an account with Algolia](https://dashboard.algolia.com/users/sign_up) or log into existing [!DNL Algolia] account.
* Proper permission to set up [!DNL Adobe Experience Platform] source connector.

## Set-Up & Dataflow Creation
After the prerequisites are met, please go to the set-up documentation to complete the process to configure the source connector.
- [!DNL Algolia User Profiles Source Connector](https://drive.google.com/file/d/1Gzwli2zrBW24ugpwGUXtIYV4-SKzDYdj/view?usp=drive_link)

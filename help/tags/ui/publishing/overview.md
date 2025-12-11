---
title: Publishing Overview
description: Learn about the process of publishing changes to your tag-management code libraries in Adobe Experience Platform.
exl-id: 32eaad87-d7dc-4812-b546-a136511512fe
---
# Publishing overview

Adobe Experience Platform allows you to encapsulate changes to your tag-management code within individual libraries. As multiple libraries can now be developed in parallel by different teams, these libraries must follow a deliberate, permissioned process for merging changes together before being pushed to your production environment.

At a basic level, each library undergoes the following publishing process:

1. Create a new library (or edit an existing library) in a development environment.
1. Test the functionality of the library in a staging environment where required.
1. Deploy the library to your production environment.

Consider a situation where you create a new "checkout" event, create a revenue data element related to that event, and make a change to the Adobe Analytics extension configuration to support the new event and data element. You can include all of these changes in a new library, and use the publishing process to test, approve, and publish them as a single unit.

For a high-level overview of the library publishing workflow, including details on how libraries inherit resources from upstream builds depending on their publishing state, see the [publishing flow guide](./publishing-flow.md).

In addition to the publishing flow, there are several components and relationships that are important to understand in order to effectively develop and publish your libraries. The following table outlines each of these key concepts, and provides links to documentation to help you learn more about each:

| Component | Description |
| --- | --- |
| Libraries | A library is a set of instructions for how extensions, data elements, and rules should interact with one another and with your website. When a library is compiled to be deployed to an environment, that library becomes a build.<br><br>See the overview on [libraries](./libraries.md) for more information on how to create, manage, and activate libraries in the UI. |
| Builds | A build is a compiled library. When deployed in an environment, a build provides the actual set of files containing the code that is delivered to each user's browser when they view your site.<br><br>See the overview on [builds](./builds.md) for more information on the contents and format of builds. |
| Environments | A tag environment is a set of deployment instructions that tells Experience Platform what format you'd like your build in and where you'd like that build delivered.<br><br>See the overview on [environments](./environments.md) for more information on the different types of environments, how to install and configure existing environments, and how to create new environments. |
| Hosts | A host represents the connection details for an environment to deliver a build to your website. You can choose to let Adobe manage the hosting of your build, or you can provide information for your own host servers instead.<br><br>See the overview on [hosts](./hosts/hosts-overview.md) for more information about each hosting option. |
| Client-side code  | The client-side code is the set of scripts that you place in the source code for your site or application that tells each client device where to retrieve the build. The code is attached to an environment and can change when you alter your environment configuration.<br><br>See the section on [embed codes](./environments.md#embed-code) in the environments overview to learn more. |

## Next steps

This document provided an overview of the various components involved with publishing tag libraries in Adobe Experience Platform. Refer to the documentation linked to throughout this guide to learn more about the publishing process in detail.

---
title: Publishing Overview
description: Learn about the process of publishing changes to your tag-management code libraries in Adobe Experience Platform.
exl-id: 32eaad87-d7dc-4812-b546-a136511512fe
TQID: https://experienceleague.adobe.com/wVtU5W3rKpDY4aWKzzLHqCccO55cBkvLiFghxObwqEw
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
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

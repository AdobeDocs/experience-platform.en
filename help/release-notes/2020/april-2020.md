---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes April 8, 2020
doc-type: release notes
last-update: March 4, 2020
author: ens71067
---

# Adobe Experience Platform release notes 

## Release date: April 8, 2020

## Privacy Service

New legal and organizational regulations are giving users the right to access or delete their personal data from your data stores upon request. Adobe Experience Platform Privacy Service provides a RESTful API and user interface to help you manage these data requests from your customers. With Privacy Service, you can submit requests to access and delete private or personal customer data from Adobe Experience Cloud applications, facilitating automated compliance with legal and organizational privacy regulations.

**New features**

| Feature | Description |
| --- | --- |
| PDPA support | Privacy requests can now be created and tracked under the Personal Data Protection Act (PDPA) in Thailand. When making privacy requests in the API, the `regulation` array accepts the value "pdpa_tha". |
| Namespace types in the UI | You can now specify different namespace types in the Request Builder in the Privacy Service UI. See the [user guide](../../privacy-service/ui/user-guide.md) for more information. |
| Old endpoint deprecation | The old API endpoint (`data/privacy/gdpr`) has been deprecated. |

Known issues

* None

For more information about Privacy Service, please start by reading the [Privacy Service overview](../../privacy-service/home.md).

<!-- ## Access control

Experience Platform leverages [Adobe Admin Console](https://adminconsole.adobe.com) product profiles to link users with permissions and sandboxes. Permissions control access to a variety of Platform capabilities, including data modeling, profile management, and sandbox administration.

### Key features

|Feature | Description|
|--- | ---|
|Permissions | In the Admin Console, the _Permissions_ tab within a Platform product profile allows you customize which Platform capabilities are available for the users attached to that profile. Available permission categories include: Data Modeling, Data Management, Profile Management, Identities, Data Monitoring, Sandbox Administration, Destinations, Sources.|
|Access to sandboxes | The _Permissions_ tab within a Platform product profile can grant users access to specific sandboxes. See the section on [sandboxes](#sandboxes) below for more information.|

For more information, please see the [access control overview](../../access-control/home.md).

## Sandboxes

Experience Platform is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater for the development, testing, and deployment of these applications while ensuring operational compliance. In order to address this need, Experience Platform provides sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

### Key features

|Feature | Description|
|--- | ---|
|Production sandbox | Experience Platform provides a single production sandbox, which cannot be deleted or reset.|
|Non-production sandboxes | Multiple non-production sandboxes can be created for a single Platform instance, allowing you to test features, run experiments, and make custom configurations without impacting your production sandbox.|
|Sandbox switcher | In the Experience Platform user interface, the sandbox switcher in the top-left corner of the screen allows you to switch between available sandboxes through a dropdown menu.|
|`x-sandbox-name` header | All calls to Experience Platform APIs must now include the new `x-sandbox-name` header, whose value references the `name` attribute of the sandbox the operation will take place in.|

For more information, please see the [sandboxes overview](../../sandboxes/home.md). -->
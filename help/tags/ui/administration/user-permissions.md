---
title: User Permissions for Tags
description: Learn about how to grant permissions for tags in Adobe Experience Platform.
---
# User permissions for tags

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

Within the [!DNL Experience Cloud], no rights or permissions are assigned to individual users. They are assigned to a Product Profile (see "Experience Cloud Permissions" above). Individual users are then assigned to one or more Product Profiles.

Within a Product Profile, permissions for tags are divided across four dimensions.

1. Platforms
1. Properties
1. Property Rights
1. Company Rights

## Platforms

Each property has a platform. There are currently two platforms that you can use for tags: *Web* and *Mobile*. You can use this permission type to restrict or grant access to a particular type of property. This can be useful when the team that manages your mobile apps is different from the one that manages your web sites.

## Properties

This is a list of all Properties that exist within your company. You can use this permission type to restrict or grant access to specific existing properties (by name).

## Property rights

Any properties you create in the Data Collection UI become available in the Admin Console for you to assign permissions. If a given Product Profile does not have access to Property A1, users who belong to that profile cannot see or modify any settings within Property A1.

Assuming that a user belongs to a profile with access to Property A1, what they can do within Property A1 is determined by the rights they have been granted from this permission group. Users with permissions to Property A1, but no assigned rights, have read-only access.

The permissions available within this group are:

* **Develop:** This allows you to create rules and data elements. You can also create libraries and build them in existing development environments. You can submit a library for approval when ready. Most day-to-day tasks in the Data Collection UI require this right.
* **Approve:** This allows you to take a submitted library and build to the staging environment. You can also approve a library for publishing once testing has been completed.
* **Publish:** This allows you to publish approved libraries to the production environment.
* **Manage Extensions:** This grants the abilities to install new extensions to a property, to modify the extension configuration for an already installed extension, and to delete an extension. See the extensions overview documentation for [more information on extensions](../managing-resources/extensions/overview.md). This role typically belongs to IT or Marketing, depending on your organization.
* **Manage Environments:** This allows you to create and modify environments. See the [environments documentation](../publishing/environments.md) for more information. This role typically belongs to the IT group.

## Company rights

Company rights apply to permissions that span multiple properties.  There are currently three:

* **Manage Properties:** This allows you to create new properties in the Data Collection UI and to modify the metadata and settings at the property level. You can also delete properties. Read the [properties documentation](companies-and-properties.md) for more information. Administrators usually perform this role.
* Grants the ability to create new properties and to modify the metadata and settings at the property level. You can also delete properties.  Read more about properties [here](companies-and-properties.md). Administrators usually perform this role.
* **Develop Extensions:** Grants the ability to create and modify extension packages that are owned by the company including private releases and requests for public release.
* **Manage App Configurations:** This is only available to customers who have licensed Adobe Journey Optimizer, or some other solution that gives them access to mobile in-app and push messaging.  This allows you to manage the apps that Experience Cloud knows about along with the necessary push credentials needed to communicate with the Firebase Cloud Messaging service and the Apple Push Notification Service.

## Total user permissions

An individual user's total permissions are determined by their total membership in different Product Profiles. If a user belongs to multiple Product Profiles, the permissions from each profile are added together rather than multiplied.

For example: Product Profile A grants Henry the Develop right for Property 1. Product Profile B grants Henry the Publish right for Property 2. Henry can Develop in Property 1 and Publish in Property 2, but he cannot publish in Property 1 or Develop in Property 2 because he has not been granted explicit rights to do so.

## Rights scenarios 

Different companies have different needs when creating new Product Profiles. These needs vary based on company size, org structure, number of sites, number of people involved in managing tags, and so on.

Below are a few common scenarios and a recommended starting point as you think about creating Product Profiles and adding users to them.

### One-person show

If you run a small company that has one person in charge of everything, grant this user permission to all properties and assign them all rights listed above.

### Separation of duties

Many people are involved in tagging. You have one set of people (maybe an external consultant) that creates rules and data elements, but you don't want them to have access to the production environment. You want to make sure that nobody deploys to Production except the IT team.

1. Create an account for your consultants and grant them only the develop right.
1. The consultant builds and tests within the confines you set.
1. If the consultant wants a new extension, or is ready to go live, a representative from your organization (with the appropriate rights), performs those actions.

### Enterprise

An enterprise company might have multiple sites divided geographically, with different teams responsible for each geo. Within those teams, different individuals develop and publish.

This is similar to "Separation of duties" above, but organized by geographic areas.

* North America
  * Develop group
  * Publish group
* Europe
  * Develop group
  * Publish group
* ...
  * Develop group
  * Publish group

## Examples

A few examples of the types of roles you might have in your organization, and which permissions you should assign them, could help to clarify this concept.

Here are a few descriptions of different roles that could apply in your organization and a matrix to show what permissions they need to do their job.

* The Manager: Wants to see what's going on, but shouldn't be able to make any changes.
* The Marketer: Can install extensions and setup new tags for existing properties, but cannot publish to the staging or production environments.
* The Mobile App Developer: Is responsible for implementing Adobe and 3rd-party solutions inside a native mobile app.
* The IT Team: Doesn't actually modify any tags, but they have full control over the staging and production environments and what is in them.
* Jack of All Trades: Does everything.

|Role|Properties|Company Rights|Property Rights|
|--- |--- |--- |--- |
|The Manager|Auto-include|||
|The Marketer|Auto-include|Manage Properties|Develop<br>Manage Extensions|
|The Mobile App Developer|Auto-include|Manage Properties<br>Manage App Configurations|Develop<br>Manage Extensions|
|The IT Team|Auto-include|Approve<br>Publish<br>Manage Environments|
|The Jack of All Trades|Auto-include|Manage Properties|Develop<br>Approve<br>Publish<br>Manage Extensions<br>Manage Environments|
|The Extension Developer|Auto-include|Manage Properties<br>Develop Extensions|Develop|

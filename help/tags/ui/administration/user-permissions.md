---
title: User Permissions
description: Learn about how to grant permissions for tags in Adobe Experience Platform.
---
# User permissions

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

In order to use tags in Adobe Experience Platform, you must be granted access to at least one Adobe Experience Cloud product through Adobe Admin Console. In addition, you must also be granted permissions for tags at the product-profile level in order to perform certain actions when logged into the Data Collection UI.

This guide covers how to grant these permissions to users using the Admin Console.

## Gain admin rights for a tags product profile

In order to manage user permissions for tags, you must be at least a product profile administrator for tags in Adobe Admin Console. System administrators and tags product administrators are also able to manage permissions for a tags product profile.

See the Admin Console document on [administrative roles](https://helpx.adobe.com/enterprise/admin-guide.html/enterprise/using/admin-roles.ug.html) for more information on the different admin levels and how to manage these roles within your organization.

## Select a product profile to manage permissions for

Once you have admin rights, sign into Admin Console and select **[!UICONTROL Products]** from the top navigation. From the list of displayed products, select **[!UICONTROL Adobe Experience Platform Launch]**.

![Select product](../../images/ui/administration/user-permissions/select-product.png)

A list of product profiles displays. A product profile links a a group of permissions to a group of users that you assign. From here, you can create a new profile to configure, or you can select an existing product profile from the list to edit (assuming you have admin rights for that profile).

![Product profiles](../../images/ui/administration/user-permissions/product-profiles.png)

### Create a product profile

>[!NOTE]
>
>If you selected an existing profile to edit, skip ahead to the [next section](#permissions).

To create a new product profile, select **[!UICONTROL New Profile]**.

![New profile](../../images/ui/administration/user-permissions/new-profile-button.png)

A dialog appears that allows you to provide a name and optional description for the profile. You can also toggle whether users should receive emails when they are added or removed from this profile. When finished, select **[!UICONTROL Save]**.

![Profile details](../../images/ui/administration/user-permissions/profile-details.png)

## Configure permissions for the product profile {#permissions}

The details page for the product profile appears. Using the provided tabs, you can manage the users that are assigned to the profile, and configure the specific properties and rights that the profile will grant those users.

Steps on how to add users are provided [later in this guide](#users). For now, select **[!UICONTROL Permissions]**.

![Profile landing](../../images/ui/administration/user-permissions/profile-landing.png)

The next screen shows an overview of the number of platforms, properties, and rights that are currently assigned to the profile. Select **[!UICONTROL Edit]** next to one of the rows to start configuring the profile's permissions.

![Permissions](../../images/ui/administration/user-permissions/edit-permissions.png)

The [!UICONTROL Edit Permissions] screen appears, which allows you to add and remove permissions from the product profile. From the **[!UICONTROL Platforms]** section, you can see that all platforms have been added to the profile by default. 

![Platforms](../../images/ui/administration/user-permissions/platforms.png)

### Assign properties

To assign properties to this profile, select **[!UICONTROL Properties]** in the left navigation.

![Properties](../../images/ui/administration/user-permissions/properties.png)

By default, a new product profile is automatically given access to all properties that are available for your organization. This includes properties that are available currently, and any properties made in the future.

If you want to limit the available properties, select the **[!UICONTROL Auto-include]** toggle. This allows you to manually add and remove properties for the property depending on your needs.

![Auto-include off](../../images/ui/administration/user-permissions/auto-include-off.png)

If auto-include is disabled, all currently available properties are listed on the left. You can add properties to the profile by selecting the plus (**+**) icon next to the property in question in the left column. To remove a property, select the **X** icon next to the property in question in the right column.

![Add and remove permission](../../images/ui/administration/user-permissions/add-remove-permission.png)

>[!IMPORTANT]
>
>Disabling the auto-include feature means that any properties created in the future must be manually added to the product profile in order for it to gain access to them.

### Assign rights

By default, all rights are disabled for a product profile and must be manually added to be enabled. A lack of rights means read-only access. If you belong to a product profile that auto-includes properties but has no rights, then you have read-only access to all properties.

A user can belong to multiple product profiles in Admin Console, but the rights from those profiles are not combined into a master permission set. That user still has only the rights explicitly granted by each group.

>[!NOTE]
>
>For example, if Group 1 gives access to Property A with the Develop right, and Group 2 gives access to Property B with the Publish right, Develop and Publish rights are not combined for Property A and Property B. You can only develop on Property A and publish on Property B.
 
Select **[!UICONTROL Property Rights]** in the left navigation. As with properties, you can select the plus **(+)** icon next to a property right to add it to the profile. If you want to add all property rights to the profile, you can also select **[!UICONTROL Add all]**.

![Property rights](../../images/ui/administration/user-permissions/property-rights.png)

>[!NOTE]
>
>For more information on what permissions are associated with each right, see the section on [rights scenarios](#rights-scenarios).

Next, select **[!UICONTROL Company Rights]** in the left navigation. Add or remove the rights your require, and once you are finished select **[!UICONTROL Save]**.

![Company rights](../../images/ui/administration/user-permissions/company-rights.png)

## Assign users to the profile {#users}

To assign users to the product profile, select the [!UICONTROL Users] tab, then select [!UICONTROL Add User].

![Users](../../images/ui/administration/user-permissions/users.png)

In the dialog that appears, enter the name, user group, or email address of the users you wish to add to the profile. If a user is part of your organization, their information will display in an auto-complete dropdown, which you can select to fill in the details. If they are not part of your organization, you can manually enter their information instead.

When finished, select **[!UICONTROL Save]** to add the specified users to the product profile.

![Assign users](../../images/ui/administration/user-permissions/assign-users.png)

Once a user has been added, they receive an email informing them that they now have rights for the Data Collection UI.

## Permissions for tags

Within the [!DNL Experience Cloud], no rights or permissions are assigned to individual users. They are assigned to a Product Profile (see "Experience Cloud Permissions" above). Individual users are then assigned to one or more Product Profiles.

Within a Product Profile, permissions for tags are divided across four dimensions.

1. Platforms
1. Properties
1. Property Rights
1. Company Rights

### Platforms

Each property has a platform. There are currently two platforms that you can use for tags: *Web* and *Mobile*. You can use this permission type to restrict or grant access to a particular type of property. This can be useful when the team that manages your mobile apps is different from the one that manages your web sites.

### Properties

This is a list of all Properties that exist within your company. You can use this permission type to restrict or grant access to specific existing properties (by name).

### Property rights

Any properties you create in the Data Collection UI become available in the Admin Console for you to assign permissions. If a given Product Profile does not have access to Property A1, users who belong to that profile cannot see or modify any settings within Property A1.

Assuming that a user belongs to a profile with access to Property A1, what they can do within Property A1 is determined by the rights they have been granted from this permission group. Users with permissions to Property A1, but no assigned rights, have read-only access.

The permissions available within this group are:

* **Develop:** This allows you to create rules and data elements. You can also create libraries and build them in existing development environments. You can submit a library for approval when ready. Most day-to-day tasks in the Data Collection UI require this right.
* **Approve:** This allows you to take a submitted library and build to the staging environment. You can also approve a library for publishing once testing has been completed.
* **Publish:** This allows you to publish approved libraries to the production environment.
* **Manage Extensions:** This grants the abilities to install new extensions to a property, to modify the extension configuration for an already installed extension, and to delete an extension. See the extensions overview documentation for [more information on extensions](../managing-resources/extensions/overview.md). This role typically belongs to IT or Marketing, depending on your organization.
* **Manage Environments:** This allows you to create and modify environments. See the [environments documentation](../publishing/environments.md) for more information. This role typically belongs to the IT group.

### Company rights

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

## Common issues

### Error loading account

When you log in to the Data COllection UI, you receive a message saying "Error Loading Account".

![](../../images/profile-error.png)

Resolution: Your user does not belong to any tag product profiles. See the steps above to create a profile and assign rights to it, and to assign a user to a profile.

### Grayed-out Property button

Once you've logged in, you can't add any properties.

Resolution: Your user account does not belong to a product configuration that has the Manage Properties right. Go back to Step 5 above.

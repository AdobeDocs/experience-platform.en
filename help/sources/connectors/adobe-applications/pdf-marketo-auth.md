---
keywords: Experience Platform;home;popular topics;Marketo Engage;marketo engage;marketo
solution: Experience Platform
title: Authenticate your Marketo source connector
topic: overview
description: This document provides information on how to generate your Marketo authentication credentials.
---

# Authenticate your Marketo source connector

Before you can create a Marketo Engage (hereinafter referred to as "Marketo") source connector, you must first set up a custom service through the Marketo interface, as well as retrieve values for your Munchkin ID, client ID, and client secret.

The documentation below provides steps on how to acquire authentication credentials in order to create a Marketo source connector.

## Set up a new role

The first step in acquiring your authentication credentials is to set up a new role through the [Marketo](https://app-sjint.marketo.com/#MM0A1) interface.

Log in to Marketo and select **Admin** from the top navigation bar.

![Admin for a new role](./images/marketo/home.png)

You can access several features of your Marketo instance from the admin page. To set up a new role, select **Users & Roles** from the *Security* panel.

![admin-new-role](./images/marketo/admin-new-user.png)

The **Users & Roles** page contains information about users, roles, and login histories. To create a new role, select **Roles** from the top header and then select **New Role**.

![new-role](./images/marketo/new-role.png)

The *Create New Role* dialog box appears. Provide a descriptive name and description and then select the permissions you would like to grant for this role. Permissions are restricted to specific workspaces and users are only able to perform actions in workspaces that they have permissions in.

Once you have selected the permissions you would like to grant, select **Create**.

![create-new-role](./images/marketo/create-new-role.png)

You can manage restricted permissions on the API when creating roles with Marketo. Instead of selecting "Access API", you can provide a role with the minimum level of access by selecting the following permissions:

* Read-Only Activity
* Read-Only Assets
* Read-Only Campaign
* Read-Only Company
* Read-Only Custom Object
* Read-Only Custom Object Type
* Read-Only Named Account
* Read-Only Named Account List
* Read-Only Opportunity
* Read-Only Person
* Read-Only Sales Person

## Set up a new user

Similar to roles, you can set up a new user from the **Users & Roles** page. The *Users* page provides a list of active users currently provisioned in Marketo. Select **Invite New User** to provision a new user.

![invite-new-user](./images/marketo/invite-new-user.png)

A popover dialog menu appears. Provide the appropriate information for your email, first name, last name, and reason. During this step, you can also establish an expiry date for the access of the new user account you are inviting. When finished, select **Next**.

>[!IMPORTANT]
>
>When setting up a new user, you must assign access to a user that is dedicated strictly to the custom service you are creating.

![user-info](./images/marketo/new-user-info.png)

Select the appropriate fields in the *Permissions* step and then select the **API Only** checkbox to provide an API role to the new user. Select **Next** to proceed.

![permissions](./images/marketo/permissions.png)

To complete the process, select **Send**.

![message](./images/marketo/message.png)

## Set up a custom service

Once you have established a new user, you can set up a custom service to retrieve your new credentials. From the admin page, select **LaunchPoint**.

![admin-launchpoint](./images/marketo/admin-launchpoint.png)

The *Installed services* page contains a list of existing services, to create a new custom service, select **New** and then select **New Service**.

![new-service](./images/marketo/new-service.png)

Provide your new service with a descriptive display name and then select **Custom** from the *Service* dropdown menu. Provide an appropriate description and then select the user you want to provision from the **API Only User** dropdown menu. Once you have filled in the necessary details, select **Create** to create your new custom service.

![create](./images/marketo/create.png)

## Get your client ID and client secret

With a new custom service created, you can now retrieve values for your client ID and client secret. From the *Installed Services* menu, locate the custom service you want to access and then select **View Details**.

![view-details](./images/marketo/view-details.png)

A dialog box appears, containing your client ID and client secret.

![credentials](./images/marketo/credentials.png)

## Get your Munchkin ID

The final step you must complete in order to authenticate your Marketo source connector is to retrieve your Munchkin ID. From the admin page, select **Munchkin** under the *Integration* panel.

![admin-munchkin](./images/marketo/admin-munchkin.png)

The *Munchkin* page appears, with your unique Munchkin ID listed at the top of the panel.

![munchkin-Id](./images/marketo/munchkin-id.png)

Combined with your client ID and client secret, you can use your Munchkin ID to configure a new account and [create a new Marketo source connection](../../tutorials/ui/create/adobe-applications/marketo.md) on Experience Platform.
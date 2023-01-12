---
keywords: Experience Platform;home;popular topics;Marketo Engage;marketo engage;marketo
solution: Experience Platform
title: Authenticate your Marketo source connector
description: This document provides information on how to generate your Marketo authentication credentials.
exl-id: 594dc8b6-cd6e-49ec-9084-b88b1fe8167a
---
# Authenticate your [!DNL Marketo Engage] source connector

Before you can create a [!DNL Marketo Engage] (hereinafter referred to as "[!DNL Marketo]") source connector, you must first set up a custom service through the [!DNL Marketo] interface, as well as retrieve values for your Munchkin ID, client ID, and client secret.

The documentation below provides steps on how to acquire authentication credentials in order to create a [!DNL Marketo] source connector.

## Set up a new role

The first step in acquiring your authentication credentials is to set up a new role through the [[!DNL Marketo]](https://app-sjint.marketo.com/#MM0A1) interface.

Log in to [!DNL Marketo] and select **[!DNL Admin]** from the top navigation bar.

![Admin for a new role](../images/marketo/home.png)

The *[!DNL Users & Role]s* page contains information about users, roles, and login histories. To create a new role, select **[!DNL Roles]** from the top header and then select **[!DNL New Role]**.

![new-role](../images/marketo/new-role.png)

The **[!DNL Create New Role]** dialog box appears. Provide a name and a description and then select the permissions you would like to grant for this role. Permissions are restricted to specific workspaces and users are only able to perform actions in workspaces that they have permissions in.

Once you have selected the permissions you would like to grant, select **[!DNL Create]**.

![create-new-role](../images/marketo/create-new-role.png)

You can manage restricted permissions on the API when creating roles with [!DNL Marketo]. Instead of selecting "Access API", you can provide a role with the minimum level of access by selecting the following permissions:

* [!DNL Read-Only Activity]
* [!DNL Read-Only Assets]
* [!DNL Read-Only Campaign]
* [!DNL Read-Only Company]
* [!DNL Read-Only Custom Object]
* [!DNL Read-Only Custom Object Type]
* [!DNL Read-Only Named Account]
* [!DNL Read-Only Named Account List]
* [!DNL Read-Only Opportunity]
* [!DNL Read-Only Person]
* [!DNL Read-Only Sales Person]

## Set up a new user

Similar to roles, you can set up a new user from the **[!DNL Users & Roles]** page. The **[!DNL Users]** page provides a list of active users currently provisioned in Marketo. Select **[!DNL Invite New User]** to provision a new user.

![invite-new-user](../images/marketo/invite-new-user.png)

A popover dialog menu appears. Provide the appropriate information for your email, first name, last name, and reason. During this step, you can also establish an expiry date for the access of the new user account you are inviting. When finished, select **[!DNL Next]**.

>[!IMPORTANT]
>
>When setting up a new user, you must assign access to a user that is dedicated strictly to the custom service you are creating.

![user-info](../images/marketo/new-user-info.png)

Select the appropriate fields in the **[!DNL Permissions]** step and then select the **[!DNL API Only]** checkbox to provide an API role to the new user. Select **[!DNL Next]** to proceed.

![permissions](../images/marketo/permissions.png)

To complete the process, select **[!DNL Send]**.

![message](../images/marketo/message.png)

## Set up a custom service

Once you have established a new user, you can set up a custom service to retrieve your new credentials. From the admin page, select **[!DNL LaunchPoint]**.

![admin-launchpoint](../images/marketo/admin-launchpoint.png)

The **[!DNL Installed services]** page contains a list of existing services, to create a new custom service, select **[!DNL New]** and then select **[!DNL New Service]**.

![new-service](../images/marketo/new-service.png)

Provide your new service with a descriptive display name and then select **[!DNL Custom]** from the **[!DNL Service]** dropdown menu. Provide an appropriate description and then select the user you want to provision from the **[!DNL API Only User]** dropdown menu. Once you have filled in the necessary details, select **[!DNL Create]** to create your new custom service.

![create](../images/marketo/create.png)

## Get your client ID and client secret

With a new custom service created, you can now retrieve values for your client ID and client secret. From the **[!DNL Installed Services]** menu, locate the custom service you want to access and then select **[!DNL View Details]**.

![view-details](../images/marketo/view-details.png)

A dialog box appears, containing your client ID and client secret.

![credentials](../images/marketo/credentials.png)

## Get your Munchkin ID

The final step you must complete in order to authenticate your [!DNL Marketo] source connector is to retrieve your Munchkin ID. From the admin page, select **[!DNL Munchkin]** under the **[!DNL Integration]** panel.

![admin-munchkin](../images/marketo/admin-munchkin.png)

The *[!DNL Munchkin]* page appears, with your unique Munchkin ID listed at the top of the panel.

![munchkin-Id](../images/marketo/munchkin-id.png)

Combined with your client ID and client secret, you can use your Munchkin ID to configure a new account and [create a new [!DNL Marketo] source connection](../../../tutorials/ui/create/adobe-applications/marketo.md) on Experience Platform.

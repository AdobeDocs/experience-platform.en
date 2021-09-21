---
keywords: Experience Platform;home;popular topics;query service;Query service;query;query editor;Query Editor;Query editor;
solution: Experience Platform
title: Query Service UI Guide
topic-legacy: guide
description: Adobe Experience Platform Query Service provides a user interface that can be used to write and execute queries, view previously executed queries, and access queries saved by users within your IMS Organization.
exl-id: ea25fa32-809c-429c-b855-fcee5ee31b3e
---
# Credentials guide

Adobe Experience Platform Query Service allows you to connect with external clients. You can connect to these external clients by using either expiring credentials or non-expiring credentials.

## Expiring credentials

You can use expiring credentials to quickly set up a connection to an external client.

![](../images/ui/credentials/expiring-credentials.png)

The **[!UICONTROL Expiring credentials]** section provides the following information:

- **[!UICONTROL Host]**: The name of the host that you will be connecting to. For connecting to Query Service, this will include the name of the IMS Organization you are currently using.
- **[!UICONTROL Port]**: The port number of the host that you will be connecting to.
- **[!UICONTROL Database]**: The name of the database that you will be connecting to.
- **[!UICONTROL Username]**: The username that you will use to connect to Query Service.
- **[!UICONTROL Password]**: The password that you will use to connect to Query Service.
- **[!UICONTROL PSQL command]**: A command that automatically has inserted all the relevant information for you to connect to Query Service using PSQL on the command line.
- **[!UICONTROL Expires]**: The expiry date for the expiring credentials. The credentials expire 24 hours after they are generated.

## Non-expiring credentials 

You can use non-expiring credentials to set up a more permanent connection to an external client.

### Prerequisites

Before you can create non-expiring credentials, you must:

1. Log into [Adobe Admin Console](https://adminconsole.adobe.com/) and select the relevant Org from the top navigation bar.
2. [Select a product profile.](../../access-control/ui/browse)
3. [Configure both the **Sandboxes** and **Manage Query Service Integration** permissions for your Org.](../../access-control/ui/permissions)
4. [Add a new user to grant the newly created permissions to.](../../access-control/ui/users)
5. [Add the user as an admin.](#Add-new-user-as-an-admin)
6. [Add the user as a developer.](#Add-new-user-as-a-developer)

If you have already completed these prerequisite steps you may continue to the [Generate Credentials](#Generate-Credentials) section.

#### Add new user as an admin

To add the newly created user as an admin. select the [!UICONTROL **Admins**] tab, followed by [!UICONTROL **Add Admins**].
 
![Admin tab Add Admin button highlighted](../images/ui/credentials/admins-tab-add-admin.png)

A dialog appears that allows you to add an admin. Input the new admin's details into the text fields and select [!UICONTROL **Save**].

#### Add new user as a developer

Select the **Developers** tab, followed by the **Add Developer**.

![Developers tab Add Developer button highlighted](../images/ui/credentials/developers-tab-add-developer.png)

A dialog appears that allows you to add a developer. Input the new developer's details into the text fields and select **Save**.

To learn more about how to assign permissions, please read the documentation on [Access Control](../../access-control/home.md).

All the required permissions are now configured in the Adobe Developer console for the user to use the expiring credentials feature.

### Generate Credentials

To create a set of non-expiring credentials, in the Platform left navigation select [!UICONTROL Queries] in the left navigation followed by [!UICONTROL Credentials]. Next, select **[!UICONTROL Generate credentials]**.

![](../images/ui/credentials/generate-credentials.png)

A dialog appears that allows you to generate credentials. To create non-expiring credentials, you must provide the following details:

- **[!UICONTROL Name]**: The name of the credentials you are generating.
- **[!UICONTROL Description]**: (Optional) A description for the credentials you are generating.
- **[!UICONTROL Assigned to]**: The user to which the credentials will be assigned. This value should be the email address of the user who is creating the credentials.
- **[!UICONTROL Password]** (Optional) An optional password for your credentials. If the password is not set, Adobe will automatically generate a password for you. 

Once you have provided all the required details, select **[!UICONTROL Generate credentials]** to generate your credentials.

![](../images/ui/credentials/create-account.png)

>[!IMPORTANT]
>
>Once the **[!UICONTROL Generate credentials]** button is selected, a configuration JSON file is downloaded to your local machine. Since Adobe does **not** record the generated credentials, you must securely store the downloaded file and keep a record of the credential.
>
>Additionally, if the credentials are not used for 90 days, the credentials will be expunged.

The configuration JSON file contains information such as technical account name, technical account ID, and credential. It is provided in the following format.

```json
{"technicalAccountName":"9F0A21EE-B8F3-4165-9871-846D3C8BC49E@TECHACCT.ADOBE.COM","credential":"3d184fa9e0b94f33a7781905c05203ee","technicalAccountId":"4F2611B8613AA3670A495E55"}
```

After you have saved your generated credentials, select **[!UICONTROL Close]**. You can now see a list of all your non-expiring credentials.

![](../images/ui/credentials/list-credentials.png)

You can either edit or delete your non-expiring credentials. To edit a non-expiring credential, select the pencil icon (![](../images/ui/credentials/edit-icon.png)). To delete a non-expiring credential, select the delete icon (![](../images/ui/credentials/delete-icon.png)).

When editing a non-expiring credential, a modal appears. You can provide the following details to update:

- **[!UICONTROL Name]**: The name of the credentials you are generating.
- **[!UICONTROL Description]**: (Optional) A description for the credentials you are generating.
- **[!UICONTROL Assigned to]**: The user to which the credentials will be assigned. This value should be the email address of the user who is creating the credentials.

![](../images/ui/credentials/update-credentials.png)

Once you have provided all the required details, select **[!UICONTROL Update account]** to complete the update to your credentials.

## Using credentials to connect to external clients

You can use either the expiring or non-expiring credentials to connect with external clients, such as Aqua Data Studio, Looker, or Power BI. 

The table below outlines the parameters that are typically required to connect to external clients.

>[!NOTE]
>
>When connecting to a host using non-expiring credentials, it is still necessary to use all the parameters listed in the [!UICONTROL EXPIRING CREDENTIALS] section except for the password.

| Parameter | Description |
|---|---|
| Server/Host  | The name of the server/host that you are connecting to. This value takes the form of `server.adobe.io` and can be found under **[!UICONTROL Host]**.  |
| Port  | The port for the server/host you are connecting to. This value can be found under **[!UICONTROL Port]**. An example value for the port would be `80`.  |
| Database  | The database that you are connecting to. This value can be found under **[!UICONTROL Database]**. An example value for the database would be `prod:all`. |
| Username  | The username for the user who is connecting to the external client. This takes the form of an alphanumeric string before `@AdobeOrg`. This value is found under **[!UICONTROL Username]**.  |
| Password  | The password for the user who is connecting to the external client. <ul><li>If you're using expiring credentials, this can be found under **[!UICONTROL Password]** within the expiring credentials section.</li><li>If you're using non-expiring credentials, this value is comprised of the arguments from the technicalAccountID and the credential taken from the configuration JSON file. The password value takes the form: `{technicalAccountId}:{credential}`.</li></ul>  |

The image indicates the location of each parameter found in the UI except for the password of the non-expiring credentials.

![](../images/ui/credentials/expiring-credentials.png)

## Next steps

Now that you understand how both expiring and non-expiring credentials work, you can use these credentials to connect to external clients. For more information detailed information about external clients, please read the [connect clients to Query Service guide](../clients/overview.md).

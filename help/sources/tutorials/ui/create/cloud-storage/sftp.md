---
title: Create an SFTP  Source Connection in the UI
description: Learn how to create an SFTP source connection using the Adobe Experience Platform UI.
exl-id: 1a00ed27-3c95-4e57-9f94-45ff256bf75c
---
# Create an [!DNL SFTP] source connection in the UI

This tutorial provides steps for creating an [!DNL SFTP] source connection using the Adobe Experience Platform UI.

## Getting started

This tutorial requires a working understanding of the following components of Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

>[!IMPORTANT]
>
>It is recommended to avoid newlines or carriage returns when ingesting JSON objects with an [!DNL SFTP] source connection. To work around the limitation, use a single JSON object per line and use multi-lines for ensuing files.

If you already have a valid [!DNL SFTP] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/batch/cloud-storage.md).

### Gather required credentials

In order to connect to [!DNL SFTP], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `host` | The name or IP address associated with your [!DNL SFTP] server. |
| `port` | The [!DNL SFTP] server port you're connecting to. If unprovided, the value defaults to `22`. |
| `username` | The username with access to your [!DNL SFTP] server. |
| `password` | The password for your [!DNL SFTP] server. |
| `privateKeyContent` | The Base64 encoded SSH private key content. The type of OpenSSH key must be classified as either RSA or DSA. |
| `passPhrase` | The pass phrase or password to decrypt the private key if the key file or the key content is protected by a pass phrase. If PrivateKeyContent is password protected, this parameter needs to be used with the PrivateKeyContent's passphrase as value. |
| `maxConcurrentConnections` | This parameter allows you to specify a maximum limit for the number of concurrent connections Platform will create when connecting to your SFTP server. You must set this value to be less than the limit set by SFTP. **Note**: When this setting is enabled for an existing SFTP account, it will only affect future dataflows and not existing dataflows. |
| Folder path | The path to the folder that you want to provide access to. [!DNL SFTP] source, you can provide the folder path to specify user access to sub folder of your choice. |

Once you have gathered your required credentials, you can follow the steps below to create a new [!DNL SFTP] account to connect to Platform.

## Connect to your [!DNL SFTP] server

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the [!UICONTROL Cloud storage] category, select **[!UICONTROL SFTP]** and then select **[!UICONTROL Add data]**.

![The Experience Platform sources catalog with the SFTP source selected.](../../../../images/tutorials/create/sftp/catalog.png)

The **[!UICONTROL Connect to SFTP]** page appears. On this page, you can either use new credentials or existing credentials.

### Existing account

To connect an existing account, select the FTP or SFTP account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![A list of existing SFTP accounts on the Experience Platform UI.](../../../../images/tutorials/create/sftp/existing.png)

### New account

>[!IMPORTANT]
>
>SFTP supports an RSA or DSA type OpenSSH key. Ensure that your key file content starts with `"-----BEGIN [RSA/DSA] PRIVATE KEY-----"` and ends with `"-----END [RSA/DSA] PRIVATE KEY-----"`. If the private key file is a PPK-format file, use the PuTTY tool to convert from PPK to OpenSSH format.

If you are creating a new account, select **[!UICONTROL New account]**, and then provide a name and an optional description for your new [!DNL SFTP] account.

![The new account screen for SFTP](../../../../images/tutorials/create/sftp/new.png)

The [!DNL SFTP] source supports both basic authentication and authentication via SSH public key.

>[!BEGINTABS]

>[!TAB Basic authentication]

To use basic authentication, select **[!UICONTROL Password]** and then provide the host and port values to connect to, alongside your username and password. During this step, you can also designate the path to the sub folder that you want to provide access to. When finished, select **[!UICONTROL Connect to source]**.

![The new account screen for the SFTP source using basic authentication](../../../../images/tutorials/create/sftp/password.png)

>[!TAB SSH public key authentication]

To use SSH public key-based credentials, select **[!UICONTROL SSH public key]**  and then provide your host and port values, as well as your private key content and passphrase combination. During this step, you can also designate the path to the sub folder that you want to provide access to. When finished, select **[!UICONTROL Connect to source]**.

![The new account screen for the SFTP source using SSH public key.](../../../../images/tutorials/create/sftp/ssh.png)

>[!ENDTABS]

## Next steps

By following this tutorial, you have established a connection to your SFTP account. You can now continue on to the next tutorial and [configure a dataflow to bring data from your cloud storage into Platform](../../dataflow/batch/cloud-storage.md).

---
title: SFTP Hosts
description: Learn how to configure tags in Adobe Experience Platform to deliver library builds to a secured, self-hosted SFTP server.
---
# SFTP hosts

>[!NOTE]
>
>Adobe Experience Platform Launch is being rebranded as a suite of data collection technologies in Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../launch-term-updates.md) for a consolidated reference of the terminology changes.

If you do not want to have Adobe manage your hosted libraries, your other option is to have Adobe Experience Platform deliver builds to a secured SFTP server that you host.

Platform connects to your SFTP site using an encrypted key. There are a few steps to set this up correctly:

1. You must have a public/private key pair installed on your SFTP server. You can generate these keys on your server or generate them somewhere else and install them on your server. See the GitHub documentation regarding [how to generate SSH keys](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key) for more information.
1. The private key is used to encrypt the public GPG key. You will need to provide your private key during the SFTP host creation process. See the [Encrypt values](https://developer.adobelaunch.com/api/guides/encrypting_values/) section in the Reactor API documentation for instructions on encrypting public GPG keys. Use the Production Environment's GPG key unless you know you need a specific one. Finally, you can encrypt your private key from any machine, so you do not need to install GPG on your server to complete this step.
1. You might need to approve the IP addresses used with your company firewall to allow Platform to reach your SFTP server and connect to it. Those IP Addresses are:
   * `184.72.239.68`
   * `23.20.85.113`
   * `54.226.193.184`

>[!NOTE]
>
>The structure of tag builds has changed over time. They use symbolic links (symlinks) internally to maintain backward compatibility so that previous embed codes will continue to work with the latest build structure. Your SFTP server must support the usage of symlinks in order to serve as a valid destination for tag builds.

For more detailed information, refer to the following Medium article on [how to set up SFTP servers to deliver a build](https://medium.com/launch-by-adobe/configuring-an-sftp-server-for-use-with-adobe-launch-bc626027e5a6).

## Create an SFTP host

1. Open the [!UICONTROL Hosts] tab.
1. Create the new Host.
1. Name your host.
1. Select **[!UICONTROL SFTP]** as the host type.
1. Enter the host, path, port, username, and encrypted private key.

   The port must be one of the following:

   * 21
   * 22
   * 80
   * 200-299
   * 443
   * 2000-2999
   * 4343
   * 8080
   * 8888
   
   >[!NOTE]
   >
   >As a security best practice, Adobe limits the number of ports that can be used for outgoing traffic. The selected ports are commonly allowed through corporate firewalls, plus they include some ranges for flexibility.

1. Select **[!UICONTROL Save]**.

When you select **[!UICONTROL Save]**, the connection and ability to deliver the files to your SFTP server is tested. Platform creates a folder, writes a file within that folder, checks to make sure the file is there, then cleans up after itself. If the user account on your SFTP server (the one attached to the secure certificate you provided to Platform) does not have the necessary permissions to perform this action, then the Host goes into a "Failed" status.

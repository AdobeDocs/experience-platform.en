---
keywords: Experience Platform;home;popular topics;Query service;query service;Looker;looker;connect to query service;
solution: Experience Platform
title: Connect Looker to Query Service
topic-legacy: connect
description: This document walks through the steps for connecting Looker with Adobe Experience Platform Query Service.
exl-id: 806e9077-533a-4546-b5ca-8124751957f5
---
# Connect [!DNL Looker] to Query Service

This document covers the steps for connecting [!DNL Looker] with Adobe Experience Platform [!DNL Query Service].

>[!NOTE]
>
> This guide assumes you already have access to [!DNL Looker] and are familiar with how to navigate its interface. More information about [!DNL Looker] can be found in the [official [!DNL Looker] documentation](https://docs.looker.com/).

After logging into [!DNL Looker], select **[!DNL Admin]**, followed by **[!DNL Connections]**.

![The Looker dashboard with Connections highlighted from the Admin dropdown menu.](../images/clients/looker/click-admin-connections.png)

On this page, select **[!DNL New Connection]**.

![The Connections workspace with New Connection highlighted.](../images/clients/looker/click-new-connection.png)
   
From here, you can fill out the details for the connection settings.

![The Connections settings page for a New Connection.](../images/clients/looker/new-connection.png)

- **[!DNL Name]:** The name of your connection.
- **[!DNL Dialect]:** The dialect used for the SQL database. [!DNL Query Service] uses **[!DNL PostgreSQL]**.
- **[!DNL Host and Port]:** The host endpoint and its port for [!DNL Query Service]. 
- **[!DNL Database]:** The database that will be used. 
- **[!DNL Username and Password]:** The login credentials that will be used. The username will be in the form of `ORG_ID@AdobeOrg`.
- **SSL**: Enable SSL to ensure a secure connection across the network. 

>[!IMPORTANT]
>
>See the [[!DNL Query Service] SSL documentation](./ssl-modes.md) to learn about SSL support for third-party connections to Adobe Experience Platform Query Service, and how to connect using `verify-full` SSL mode.

For more information on finding your host and port, database name, and login credentials, please read the [credentials guide](../ui/credentials.md). To find your credentials, log in to [!DNL Platform], then select **[!UICONTROL Queries]**, followed by **[!UICONTROL Credentials]**.

After inputting your connection details, select **[!DNL Test These Settings]** to ensure your credentials work properly. If they do, a message indicating that you can connect will appear below. If your connection is indeed successful, select **[!DNL Add Connection]** to create your connection.

![The Connections settings page for a New Connection with Test these settings highlighted.](../images/clients/looker/click-test-connection.png)

## Next steps

Now that you've connected with [!DNL Query Service], you can use [!DNL Looker] to write queries. For more information on how to write and run queries, please read the [running queries guide](../best-practices/writing-queries.md).

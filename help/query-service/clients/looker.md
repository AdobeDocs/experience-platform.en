---
keywords: Experience Platform;home;popular topics;Query service;query service;Looker;looker;connect to query service;
solution: Experience Platform
title: Connect Looker to Query Service
topic: connect
description: This document walks through the steps for connecting Looker with Adobe Experience Platform Query Service.
---

# Connect [!DNL Looker] to Query Service

To connect [!DNL Looker] with [!DNL Query Service] on Adobe Experience Platform, please follow the steps below:

After logging into [!DNL Looker], click on **[!UICONTROL Admin]**, followed by **[!UICONTROL Connections]**.

![](../images/clients/looker/click-admin-connections.png)

On this page, click on **New Connection**.

![](../images/clients/looker/click-new-connection.png)
   
From here, you can fill out the details for the Connection Settings.

![](../images/clients/looker/new-connection.png)

- **Name:** The name of your connection.
- **Dialect:** The dialect used for the SQL database. [!DNL Query Service] uses **[!DNL PostgreSQL]**.
- **Host and Port:** The host endpoint and its port for [!DNL Query Service]. 
- **Database:** The database that will be used. 
- **Username and Password:** The login credentials that will be used. The username will be in the form of `ORG_ID@AdobeOrg`. 

>[!NOTE]
>
>For more information on finding your host and port, database name, and login credentials, visit the [credentials page on Platform](https://platform.adobe.com/query/configuration). To find your credentials, log in to [!DNL Platform], click **[!UICONTROL Queries]**, then click **[!UICONTROL Credentials]**.

After inputting your connection details, click on **[!UICONTROL Test These Settings]** to ensure your credentials work properly. If they do, a message telling you can connect will appear below. If your connection is indeed successful, click on **[!UICONTROL Add Connection]** to create your connection.

![](../images/clients/looker/click-test-connection.png)

## Next steps

Now that you've connected with [!DNL Query Service], you can use [!DNL Looker] to write queries. For more information on how to write and run queries, please read the [running queries guide](../creating-queries/creating-queries.md).
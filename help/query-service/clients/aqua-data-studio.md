---
keywords: Experience Platform;home;popular topics;query service;Query service;Aqua Data Studio;Aqua data studio;connect to query service;
solution: Experience Platform
title: Connect with Aqua Data Studio
topic: connect
description: This document walks through the steps for connecting Aqua Data Studio with Adobe Experience Platform Query Service.
---

# [!DNL Aqua Data Studio]

This document walks through the steps for connecting [!DNL Aqua Data Studio] with Adobe Experience Platform [!DNL Query Service].

>[!NOTE]
>
> This guide assumes you already have access to Aqua Data Studio. More information about Aqua Data Studio can be found in the [official Aqua Data Studio documentation](https://www.aquaclusters.com/app/home/project/public/aquadatastudio/wikibook/Documentation21.1/page/0/Aqua-Data-Studio-21-1).

## Connect Aqua Data Studio with Platform

After installing [!DNL Aqua Data Studio], you must first register the server. From the main menu, select **[!UICONTROL Server]**, followed by **[!UICONTROL Register Server]**.

![](../images/clients/aqua-data-studio/register-server.png)

The **[!UICONTROL Register Server]** dialog appears. Under the **[!UICONTROL General]** tab, select **[!UICONTROL PostgreSQL]** from the list on the left-hand side. In the dialog that appears, provide the following details for the server settings.

- **[!UICONTROL Name]**: The name of your connection.
- **[!UICONTROL Login Name and Password]**: The login credentials that will be used. The username takes the form of `ORG_ID@AdobeOrg`.
- **[!UICONTROL Host and Port]**: The host endpoint and its port for [!DNL Query Service]. You must use port 80 to connect with [!DNL Query Service].
- **[!UICONTROL Database]:** The database that will be used.

>[!NOTE]
>
>For more information on finding your login credentials, host, port, and database name, visit the [credentials page on Platform](https://platform.adobe.com/query/configuration). To find your credentials, log in to [!DNL Platform], select **[!UICONTROL Queries]**, followed by **[!UICONTROL Credentials]**.

![](../images/clients/aqua-data-studio/register-server-general-tab.png)

Select the **[!UICONTROL Driver]** tab. Under **[!UICONTROL Parameters]**, set the value as `?sslmode=require`

![](../images/clients/aqua-data-studio/register-server-driver-tab.png)

After inputting your connection details, select **[!UICONTROL Test Connection]** to ensure your credentials work properly. If your connection is successful, select **[!UICONTROL Save]** to register your server. The connection appears on the **Dashboard** upon successful registration, confirming that you can now connect to the server and view its schema objects.

## Next steps

Now that you have connected to [!DNL Query Service], you can use the **[!UICONTROL Query Analyzer]** within [!DNL Aqua Data Studio] to execute and edit SQL statements. For more information on how to write and run queries, please read the [running queries guide](../best-practices/writing-queries.md).
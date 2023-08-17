---
keywords: Experience Platform;home;popular topics;Query service;query service;postico;Postico;connect to query service;
solution: Experience Platform
title: Connect Postico to Query Service
description: This document contains the link for installing the backup client Postico for Adobe Experience Platform Query Service.
exl-id: a19abfc8-b431-4e57-b44d-c6130041af4a
---
# Connect [!DNL Postico] to Query Service (Mac)

This document covers the steps for connecting [!DNL Postico] with Adobe Experience Platform [!DNL Query Service].

>[!NOTE]
>
> This guide assumes you already have access to [!DNL Postico] and are familiar with how to navigate its interface. More information about [!DNL Postico] can be found in the [official [!DNL Postico] documentation](https://eggerapps.at/postico/docs).
> 
> Additionally, [!DNL Postico] is **only** available on macOS devices.

To connect [!DNL Postico] to Query Service, open [!DNL Postico] and select **[!DNL New Favorite]**. The dialog for connection settings appears. From here, you can enter parameter values to connect with Adobe Experience Platform. Enter the connection settings listed below. Instructions on how to [connect to a PostgreSQL server with Postico](https://eggerapps.at/postico/docs/v1.5.21/favorite-window.html) are also available from the official Postico website.

| Connection parameter  | Description |
|---|---|
| **[!DNL Host]:** | The host name of the PostgreSQL server. |
| **[!DNL Port]:** | The port for [!DNL Query Service]. You must use port **80** or **5432** to connect with [!DNL Query Service].|
| **[!DNL User]** | Create a name for your specific connection. Leave the field blank to use your Mac login name. |
| **[!DNL Password]** | This alphanumeric string is your Experience Platform **[!UICONTROL Password]** credential. If you want to use non-expiring credentials, this value is the concatenated arguments from the `technicalAccountID` and the `credential` downloaded in the configuration JSON file. The password value takes the form: {technicalAccountId}:{credential}. The configuration JSON file for non-expiring credentials is a one-time download during their initialization that Adobe does not keep a copy of. |
| **[!DNL Database]** | Use your Experience Platform **[!UICONTROL Database]** credential value: `prod:all`.|

For more information on finding your database name, host, port, and login credentials, please read the [credentials guide](../ui/credentials.md). To find your credentials, log in to [!DNL Platform], then select **[!UICONTROL Queries]**, followed by **[!UICONTROL Credentials]**.

After inserting your credentials, select **[!DNL Connect]** to connect with Query Service.

After connecting to Platform, you'll be able to see a list of all the relations previously made with Query Service.

## Create SQL statements

To create a new SQL query, select **[!DNL SQL Query]** from the sidebar. Alternatively, use the keyboard shortcut (⇧⌘T) to navigate to the query view and enter the query you want to execute. When finished, select **[!DNL Execute Statement]** to run the query. A table appears with the results of your completed query run.

See the official Postico documentation for more information on [using the query view](https://eggerapps.at/postico/docs/v1.3.1/sql-query-view.html). 

## Next steps

Now that you've connected with [!DNL Query Service], you can use [!DNL Postico] to write queries. For more information on how to write and run queries, please read the [running queries guide](../best-practices/writing-queries.md).

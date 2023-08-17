---
keywords: Experience Platform;home;popular topics;tableau;Tableau;query service;Query service;connect to query service;
solution: Experience Platform
title: Connect Tableau to Query Service
description: This document walks through the steps for connecting Tableau with Adobe Experience Platform Query Service.
exl-id: f380aacd-5091-41bc-97ca-593e0b1670fd
---
# Connect [!DNL Tableau] to Query Service

This document provides information for connecting [!DNL Tableau] with Adobe Experience Platform [!DNL Query Service].

>[!NOTE]
>
> This guide assumes you already have access to [!DNL Tableau] and are familiar with how to navigate its interface. More information about [!DNL Tableau] can be found in the [official [!DNL Tableau] documentation](https://help.tableau.com/current/pro/desktop/en-us/default.htm).

Instructions on how to [connect to a PostgreSQL server with Tableau](https://help.tableau.com/current/pro/desktop/en-us/examples_postgresql.htm) are available from the official Tableau website. Once the dialog for connection settings appears, enter your Platform credentials into the parameter fields to connect with Adobe Experience Platform. A list of the required connection parameters are listed below. 

| Connection parameter  | Description |
|---|---|
| **[!DNL Server]** | The address of your SFTP storage location. Use the value of your Experience Platform **[!UICONTROL Host]** credential. |
| **[!DNL Port]:** | The port for [!DNL Query Service]. You must use port **80** or **5432** to connect with [!DNL Query Service].|
| **[!DNL Database]** | The database(s) you wish to access. Use the value of your Experience Platform **[!UICONTROL Database]** credential: `prod:all`.|
| **[!DNL Authentication]:** | Your chosen method of proving user identity. You are recommended to select [!DNL Username and Password] from the available options of the drop down menu. |
| **[!DNL Username]** | This is your Platform organization ID. Use the value of your Experience Platform **[!UICONTROL Username]** credential. The ID will be in the format of `ORG_ID@AdobeOrg`. |
| **[!DNL Password]** | This alphanumeric string is your Experience Platform **[!UICONTROL Password]** credential. If you want to use non-expiring credentials, this value is the concatenated arguments from the `technicalAccountID` and the `credential` downloaded in the configuration JSON file. The password value takes the form: {technicalAccountId}:{credential}. The configuration JSON file for non-expiring credentials is a one-time download during their initialization that Adobe does not keep a copy of. |

For more information on finding your username, password, and login credentials, please read the [credentials guide](../ui/credentials.md). To find your credentials, log in to [!DNL Platform], then select **[!UICONTROL Queries]**, followed by **[!UICONTROL Credentials]**.

Ensure that you have checked the **[!UICONTROL Require SSL]** box before trying to connect. See the [SSL modes documentation](./ssl-modes.md) to learn about SSL support for third-party connections to Adobe Experience Platform Query Service.
    
>[!IMPORTANT]
>
>Nested data structures in third-party BI tools can be flattened to improve their usability and reduce the required workload to retrieve, analyze, transform and report data. See the documentation on the[`FLATTEN` feature](../essential-concepts/flatten-nested-data.md) for instructions on how to activate this setting when connecting to a database. 

After filling in all your credentials, confirm your settings to continue. You have now connected with Adobe Experience Platform.

## Next steps

Now that you've connected with [!DNL Query Service], you can use [!DNL Tableau] to write queries. For more information on how to write and run queries, please read the guide on [running queries](../best-practices/writing-queries.md).

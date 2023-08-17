---
keywords: Experience Platform;home;popular topics;query service;Query service;Db Visualizer;DbVisualizer;db visulaizer;connect to query service;
solution: Experience Platform
title: Connect DbVisualizer to Query Service
description: This document walks through the steps for connecting DbVisualizer with Adobe Experience Platform Query Service.
exl-id: badb0d89-1713-438c-8a9c-d1404051ff5f
---
# Connect [!DNL DbVisualizer] to [!DNL Query Service] {#connect-dbvisualizer}

This document covers the steps for connecting the [!DNL DbVisualizer] database tool with Adobe Experience Platform [!DNL Query Service].

## Getting started

This guide requires that you already have access to the [!DNL DbVisualizer] desktop app and are familiar with how to navigate its interface. To download the [!DNL DbVisualizer] desktop app or for more information, see the [official [!DNL DbVisualizer] documentation](https://www.dbvis.com/download/).

To acquire the necessary credentials for connecting [!DNL  DbVisualizer] to Experience Platform, you must have access to the Queries workspace in the Platform UI. Please contact your organization administrator if you do not currently have access to the Queries workspace. 

## Create a database connection {#connect-database}

Once you have installed the desktop app on your local machine, follow the official BDVisualizer instructions to [create a new database connection](https://confluence.dbvis.com/display/UG130/Create+a+New+Database+Connection).

Once you have selected **[!DNL PostgreSQL]** from the [!DNL Connections] list, an [!DNL Object View] tab for the new [!DNL PostgreSQL] connection appears.

### Set driver properties for your connection {#properties}

From the [!DNL PostgreSQL] object view tab, select the **[!DNL Properties]** tab, followed by the **[!DNL Driver Properties]** from the navigation sidebar. More information on [driver properties](https://confluence.dbvis.com/display/UG130/Configuring+Connection+Properties#ConfiguringConnectionProperties-DriverProperties) can be found in the official documentation.

Next, enter the driver properties described in the table below.

>[!IMPORTANT]
>
>To connect DBVisualizer with Adobe Experience Platform, you must enable the use of SSL. See the [SSL modes documentation](./ssl-modes.md) to learn about SSL support for third-party connections to Adobe Experience Platform Query Service, and how to connect using `verify-full` SSL mode.

| Property | Description|
| ------ | ------ |
| `PGHOST` | The host name for the [!DNL PostgreSQL] server. This value is your Experience Platform **[!UICONTROL Host] credential**. |
| `ssl` | Define the SSL value `1` to enable the use of SSL. |
| `sslmode` | This controls the level of SSL protection. You are recommended to use the `require` SSL mode when connecting third-party clients to Adobe Experience Platform. The `require` mode ensures that encryption is required on all communications and that the network is trusted to connect to the correct server. Server SSL certificate validation is not required. |
| `user` | The username connected to the database is your organization ID. It is an alphanumeric string ending in `@Adobe.Org`. This value is your Experience Platform **[!UICONTROL Username] credential**. |

Use the search bar to find each property then select the corresponding cell for the parameter's value. The cell will highlight in blue. Enter your Platform credential in the value field and select **[!DNL Apply]** to add the driver property.

>[!NOTE]
>
>To add a second `user` profile, select `user` from the parameter column then select the blue + (plus) icon to add credentials for each user. Select **[!DNL Apply]** to add the driver property.

The [!DNL Edited] column shows a checkmark to denote that the parameter value has been updated.

### Input Query Service credentials {#query-service-credentials}

To find the credentials necessary to connect BBVisualizer with Query Service, log in to the Platform UI and select **[!UICONTROL Queries]** from the left navigation, followed by **[!UICONTROL Credentials]**. For more information on finding your **host**, **port**, **database**, **username**, and **password** credentials, please read the [credentials guide](../ui/credentials.md). 

![The Credentials page of the Experience Platform Queries workspace with Credentials and the Expiring Credentials highlighted.](../images/clients/dbvisualizer/query-service-credentials-page.png)

>[!IMPORTANT]
>
>[!DNL Query Service] also offers non-expiring credentials to allow for a one-time setup with third-party clients. See the documentation for [full instructions on how to generate and use non-expiring credentials](../ui/credentials.md#non-expiring-credentials). It is necessary to complete this process if you wish to connect BDVisualizer as a one-time setup. The `credential` and `technicalAccountId` values acquired comprise the value for the DBVisualizer `password` parameter.

## Authentication {#authentication}

To require a user ID and password-based authentication each time a connection is established, navigate to the [!DNL Properties] tab and select **[!DNL Authentication]** from the navigation sidebar under [!DNL PostgreSQL].

In the Connection Authentication panel, check both the **[!DNL Require Userid]** and **[!DNL Require Password]** checkboxes then select **[!DNL Apply]**. More information on [setting authentication options](https://confluence.dbvis.com/display/UG140/Setting+Common+Authentication+Options) can be fond in the official documentation.

## Connect to Platform

You can make a connection using expiring or non-expiring credentials. To make a connection, select the **[!DNL Connection]** tab from the [!DNL PostgreSQL] object view tab and enter your Experience Platform credentials for the following settings. Complementary instructions to [set up a manual connection](https://confluence.dbvis.com/display/UG100/Setting+Up+a+Connection+Manually) are available on the official DBVisualizer website. 

>[!NOTE]
>
>All credentials required by BDVisualizer in the table below are the same for expiring and non-expiring credentials unless stated in the parameter description.

| Connection parameter  | Description |
|---|---|
|**[!UICONTROL Name]**| Create a name for your connection. You are recommended to provide a human-friendly name to recognize the connection. |
|**[!UICONTROL Database Server]**| This is your Experience Platform **[!UICONTROL Host]** credential. |
|**[!UICONTROL Database Port]**| The port for [!DNL Query Service]. You must use port **80** or **5432** to connect with [!DNL Query Service].|
|**[!UICONTROL Database]**| Use your Experience Platform **[!UICONTROL Database]** credential value: `prod:all`.|
|**[!UICONTROL Database Userid]**| This is your Platform organization Id. Use your Experience Platform **[!UICONTROL Username]** credential value. The ID will be in the format of `ORG_ID@AdobeOrg`.| 
|**[!UICONTROL Database Password]**| This alphanumeric string is your Experience Platform **[!UICONTROL Password]** credential. If you want to use non-expiring credentials, this value is the concatenated arguments from the `technicalAccountID` and the `credential` downloaded in the configuration JSON file. The password value takes the form: {technicalAccountId}:{credential}. The configuration JSON file for non-expiring credentials is a one-time download during their initialization that Adobe does not keep a copy of. |

After you have input all relevant credentials, select **[!DNL Connect]**. 

The [!DNL Connect] dialog appears on the first occasion of the session. Enter your Userid and Password and select **[!DNL Connect]**. A message appears in the log to confirm a successful connection.

## Next steps

Now that you have connected [!DNL DbVisualizer] with [!DNL Query Service], you can use [!DNL DbVisualizer] to write queries. For more information on how to write and run queries, please read the [guide on query execution](../best-practices/writing-queries.md).

---
keywords: Experience Platform;home;popular topics;Query service;query service;postico;Postico;connect to query service;
solution: Experience Platform
title: Connect with Postico
topic: connect
description: This document contains the link for installing the backup client Postico for Adobe Experience Platform Query Service.
---

# [!DNL Postico]

This document walks through the steps for connecting [!DNL Postico] with Adobe Experience Platform [!DNL Query Service].

## Installing Postico

macOS users can install [!DNL Postico] from [https://eggerapps.at/postico/](https://eggerapps.at/postico/).

## Connect Postico to Query Service

To connect Postico to Query Service, open Postico and select New Favorite.

![](../images/clients/postico/open-postico.png)

You can now enter values to connect with Adobe Experience Platform. For more information on finding your database name, host, port, and login credentials, visit the [credentials page on Platform](https://platform.adobe.com/query/configuration). To find your credentials, log in to [!DNL Platform], select **[!UICONTROL Queries]**, followed by **[!UICONTROL Credentials]**.

After inserting your credentials, select Connect to connect with Query Service.

![](../images/clients/postico/authentication-details.png)

After connecting to Platform, you'll be able to see a list of all the relations previously made with Query Service.

![](../images/clients/postico/show-queries.png)

## Create SQL statements

To create a new SQL query, select the "SQL Query" icon, and double click on the option. 

![](../images/clients/postico/create-query.png)

A box appears. Type in the query you want to execute. Once you finished writing your query, select Execute Statement to run the query.

![](../images/clients/postico/run-statement.png)

The results of your run query are shown.

![](../images/clients/postico/query-results.png)

## Next steps

Now that you've connected with [!DNL Query Service], you can use [!DNL Postico] to write queries. For more information on how to write and run queries, please read the [running queries guide](../best-practices/writing-queries.md).
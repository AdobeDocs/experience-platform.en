---
keywords: Experience Platform;home;popular topics;PSQL;psqlconnect to query service;Query service;query service;
solution: Experience Platform
title: Connect with PSQL
topic: connect
description: PSQL is a command-line interface that comes when you install PostgreSQL on your machine. You can install it by following these instructions. 
---

# PSQL

PSQL is a command-line interface that comes installed when you install [!DNL PostgreSQL] on your machine. This document covers the steps for connecting PSQL with Adobe Experience Platform [!DNL Query Service].

>[!NOTE]
>
> This guide assumes you already have access to [!DNL PSQL] and are familiar with how to use it. More information about [!DNL PSQL] can be found in the [official [!DNL PSQL] documentation](https://www.postgresql.org/docs/current/app-psql.html.

## Connect PSQL and [!DNL Query Service]

After installing PSQL on your computer, you are ready to connect PSQL with Query Service. Return to the [!DNL Platform] UI, then select **[!UICONTROL Queries]**, followed by **[!UICONTROL Credentials]**.

![Image](../images/clients/psql/connect-bi.png)

Select the icon to copy the section labeled **[!UICONTROL PSQL Command]**, then paste the command string into a terminal or command-line window before pressing enter.

>[!IMPORTANT]
>
>If you are on a PC, use a text editor to remove the line breaks in the command string, then copy the string. Additionally, if you are using version 12.0 or greater, you will need to add `PGGSSENCMODE=disable` to your connection string.

You should see a result like this:

```shell
psql (10.5, server 0.1.0)
SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
Type "help" for help.
all=>
```

If you don't see at least version 10.5, then you need to download that version or newer.

## Next steps

Now that you've connected with [!DNL Query Service], you can use PSQL to write queries. For more information on how to write and run queries, please read the guide on [running queries](../best-practices/writing-queries.md).
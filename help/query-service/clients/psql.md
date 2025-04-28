---
keywords: Experience Platform;home;popular topics;PSQL;psqlconnect to query service;Query service;query service;
solution: Experience Platform
title: Connect PSQL to Query Service
description: Learn how to connect the PSQL client to Adobe Experience Platform Query Service, including supported PostgreSQL versions and setup instructions.
exl-id: ceb07128-409e-42be-8143-0cf681d435de
---
# Connect PSQL to Query Service

PSQL is a command-line interface installed alongside PostgreSQL on your machine. This document covers the steps for connecting PSQL with Adobe Experience Platform Query Service.

>[!IMPORTANT]
>
>Query Service supports connecting with PSQL version 14.x. Other versions, including 10.x through 13.x, are not officially supported. Ensure that you have installed a compatible client version. For reference, see PostgreSQL End-of-Life Dates.

Before you begin, ensure you have access to PSQL and basic familiarity with using the client. More information about PSQL can be found in the [official PSQL documentation](https://www.postgresql.org/docs/current/app-psql.html).

>[!IMPORTANT]
>
>When downloading PostgreSQL, ensure you select version 14.x. By default, the PostgreSQL website offers the latest version, which may not be compatible with Query Service.

Once PSQL is installed, you can connect it to Query Service. Return to the Experience Platform UI, then select **[!UICONTROL Queries]**, followed by **[!UICONTROL Credentials]**.

Under the **[!UICONTROL PSQL Command]** section, select the **[!UICONTROL Copy to clipboard]** icon (![Copy Icon](/help/images/icons/copy.png)) to copy the command string.

![The Queries dashboard Credentials tab with the copy icon highlighted.](../images/clients/psql/connect-bi.png)

Paste the command string into your terminal and press **Enter** on your keyboard.

>[!IMPORTANT]
>
>If you are on a PC, use a text editor to remove the line breaks in the command string, then copy the string. If you are using version 12.0 or greater, you will need to add `PGGSSENCMODE=disable` to your connection string. This setting disables GSSAPI encryption, which is unnecessary for connections to Query Service and may cause connection errors.<br>Additionally, if you are using non-expiring credentials, ensure you replace the password field with the non-expiring credential password. To learn more about non-expiring credentials, please read the [credentials guide](../ui/credentials.md).

You should see a result like this:

```shell
psql (14.4, server 0.1.0)
SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
Type "help" for help.
all=>
```

If you do not see version 14.x, download and install a supported 14.x version of PSQL from the [official PostgreSQL downloads page](https://www.postgresql.org/download/). 

>[!NOTE]
>
>Follow the installation instructions for your operating system, then verify your installed PSQL version by running `psql --version` in your terminal.

## Next steps

Now that you've connected with Query Service, you can use PSQL to write queries. See the guide on [running queries](../best-practices/writing-queries.md) for more information.

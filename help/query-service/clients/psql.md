---
keywords: Experience Platform;home;popular topics;PSQL;psqlconnect to query service;Query service;query service;
solution: Experience Platform
title: Connect with PSQL
topic: connect
description: PSQL is a command-line interface that comes when you install PostgreSQL on your machine. You can install it by following these instructions. 
---

# PSQL

PSQL is a command-line interface that comes when you install [!DNL PostgreSQL] on your machine. This document walks through the steps for connecting PSQL with Adobe Experience Platform [!DNL Query Service].

## Installing PostgreSQL 

PostgreSQL can be installed on both macOS and Windows devices. 

More information about using PSQL can be found in the [official PostgreSQL documentation](https://www.postgresql.org/docs/current/app-psql.html).

### macOS installation

To install PostgreSQL on a macOS, open a terminal window and issue these following three commands:

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

```shell
brew install postgres
```

```shell
which psql
```

After issuing these commands, you should see the following:

```shell
/usr/local/bin/psql
```

## Windows installation

To install PostgreSQL on Windows, download and install [!DNL PostgreSQL] from the [PostgreSQL website](https://www.postgresql.org/download/windows/).

After installing it, update your path variable to include the following:

```console
C:\Program Files\PostgreSQL\9.5\bin
C:\Program Files\PostgreSQL\9.5\lib
```

>[!NOTE]
>
>The version in your path variable should be updated with the version of PostgreSQL you downloaded.
 
After saving your updates, you can verify your installation was successful by opening a command prompt and checking the version. To check the version, use the following command:

```shell
psql -V
```

You should see something like this returned, with the version that you are using displayed:

```shell
psql (PostgreSQL) 9.5.14
```

## Connect PSQL and [!DNL Query Service]

After installing PostgreSQL on your computer, you are ready to connect PSQL with Query Service. Return to the [!DNL Platform] UI, select **[!UICONTROL Queries]**, followed by **[!UICONTROL Credentials]**.

![Image](../images/clients/psql/connect-bi.png)

Select the icon to copy the section labelled **[!UICONTROL PSQL Command]**.
Paste the command string into a terminal or command window and press Enter.

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

Now that you've connected with [!DNL Query Service], you can use PSQL to write queries. For more information on how to write and run queries, please read the [running queries guide](../best-practices/writing-queries.md).
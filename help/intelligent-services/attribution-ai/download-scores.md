---
keywords: Experience Platform;attribution ai;access scores;popular topics
solution: Experience Platform
title: Accessing scores in Attribution AI
topic: Accessing scores
---

# Accessing scores in Attribution AI

>[!IMPORTANT] Please contact attributionai-support@adobe.com for more details on raw score downloads for bulk exporting of data.

Accessing scores for Attribution AI is done through Snowflake. Currently, you need to email Adobe support at attributionai-support@adobe.com in order to set up and receive the credentials to your reader account for Snowflake. 

Once Adobe support has processed your request, you are provided a URL for the reader account to Snowflake and the corresponding credentials below:

- Snowflake URL
- Username
- Password

>[!NOTE] The reader account is for querying the data using sql clients, worksheet, and BI solutions which supports JDBC connector.

Once you have your credentials and URL, you can query the model tables, either in their raw format., aggregated by touchpoint date, or conversion date.

## Finding your schema in Snowflake

Using the provided credentials, log in to Snowflake. Click the **Worksheets** tab in the top-left main navigation, then navigate to your database directory in the left panel.

![Worksheets & navigating](./images/download-scores/edited_snowflake_1.png)

 Next, click **Select Schema** in the top-right corner of the screen. In the popover that appears, confirm you have the right database selected. Next, click the *Schema* dropdown and select one of your listed schemas. You are able to directly query from the score tables listed under the selected schema.

![find a schema](./images/download-scores/edited_snowflake_2.png)

## Downloading raw scores

Please contact attributionai-support@adobe.com for more details on raw score downloads.

## Connecting PowerBI to Snowflake (optional)

Your Snowflake credentials can be used to set up a connection between PowerBI Desktop and Snowflake databases. 

First, under the *Server* box, type in your Snowflake URL. Next, under *Warehouse*, type in "XSMALL". Then, type in your username and password.

![example of POWERBI](./images/download-scores/powerbi-snowflake.png)

After the connection is established, select your Snowflake database, then select the appropriate schema. You are now able to load all the tables.

Once you have selected your schema, tables appear containing your attribution scores.

| Table | Description |
| ----- | ----------- |
APP_{APP_ID} | Raw attribution score. |
APP_{APP_ID}_BY_CONV_DATE | Raw attribution score aggregated at the conversion date level. |
APP_{APP_ID}_BY_TP_DATE | Raw attribution score aggregated at the touchpoint date level. |

## Next Steps

This document outlined the steps required for querying data and accessing scores for Attribution AI. You can now continue to browse the other [Intelligent Services](../home.md) and guides that are offered.
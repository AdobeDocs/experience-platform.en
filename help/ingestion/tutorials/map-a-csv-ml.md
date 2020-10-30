---
keywords: Experience Platform;home;popular topics;map csv;map csv file;map csv file to xdm;map csv to xdm;ui guide;
solution: Experience Platform
title: Map a CSV file to an XDM schema
topic: tutorial
type: Tutorial
description: This tutorial covers how to map a CSV file to an XDM schema using the Adobe Experience Platform user interface.
---

# Map a CSV file to an XDM schema with Machine Learning insights

In order to ingest CSV data into [!DNL Adobe Experience Platform], the data must be mapped to an [!DNL Experience Data Model] (XDM) schema. This tutorial covers how to map a CSV file to an XDM schema using the [!DNL Platform] user interface.

In addition, the appendix to this tutorial provides further information regarding the use of [mapping functions](#mapping-functions).

## Getting started

This tutorial requires a working understanding of the following components of [!DNL Platform]:

- [[!DNL Experience Data Model (XDM System)]](../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes customer experience data.
- [[!DNL Batch ingestion]](../batch-ingestion/overview.md): The method by which [!DNL Platform] ingests data from user-supplied datafiles.

## Destination

Log in to [[!DNL Adobe Experience Platform]](https://platform.adobe.com) and then select **[!UICONTROL Workflows]** from the left navigation bar to access the **[!UICONTROL Workflows]** workspace.

From the **[!UICONTROL Workflows]** screen, select **[!UICONTROL Map CSV to XDM schema]** under the **[!UICONTROL Data ingestion]** section and then select **[!UICONTROL Launch]**.

![](../images/tutorials/map-a-csv-file/workflows.png)

The **[!UICONTROL Map CSV to XDM schema]** workflow appears, starting on the **[!UICONTROL Destination]** step. Select **[!UICONTROL Create a new schema using ML recommendations]**.

You can choose what type of source data you want to map: Profile or ExperienceEvent. More information about these XDM types can be found [](). After choosing the XDM schema type, you can name your target schema.

## Add data

The **[!UICONTROL Add data]** step appears. Drag-and-drop your CSV file into the space provided, or select **[!UICONTROL Choose files]** to manually input your CSV file.

![](../images/tutorials/map-a-csv-file/add-data.png)

The **[!UICONTROL Sample data]** section appears once the file is uploaded, showing the first ten rows of data. Once you have confirmed that the data has uploaded as expected, select **[!UICONTROL Next]**.

## Mapping

The **[!UICONTROL Mapping]** step appears.

---
title: View More
description: Learn about the different viewing options for you SQL analysed data. From your custom dashboard you can view the tabulated results of your analysis or download the processed data in CSV format.
exl-id: f57d85cf-dbd2-415c-bf01-8faa49871377
---
# View more {#view-more}

After creating a [custom insight](./overview.md) using [query pro mode](./overview.md#query-pro-mode), you can view the chart data in multiple formats. You can view either a tabulated form of the results, or export the data in CSV format or via email.

## Tabulated results {#tabulated-results}

For every chart authored using the query pro mode through SQL, you can view the tabulated results of your analysis within the Experience Platform UI. 

From your custom dashboard, select the ellipses (`...`) on any widget to access the [!UICONTROL View more] and [!UICONTROL View SQL] options.

![A custom dashboard with an insight's ellipses dropdown menu and the View more and View SQL options highlighted.](../images/sql-insights-query-pro-mode/ellipses-dropdown.png)

## Export {#export}

From the **[!UICONTROL View more]** dialog, export the table data by either downloading a CSV file directly or sending it to your email for secure download later. 

>[!IMPORTANT]
>
>To access the export options, your admin must grant you the **[!UICONTROL Export Dashboard Data]** permission. If the [!UICONTROL Export] button is grayed out, contact your administrator. See the [Access control overview](../../access-control/home.md) for more information on dashboard permissions.

>[!NOTE]
>
>Visualization-only exports do not require the [!UICONTROL Export Dashboard Data] permission. For example, exporting processed data from your [custom dashboard insights in PDF format](./export-pdf.md), or from [Platform UI dashboard insights](../download.md).

### Download CSV {#download-csv}

In the [!UICONTROL View more] dialog, select **[!UICONTROL Export]**, then choose **[!UICONTROL Download CSV]** to download the chart data in CSV format.

>[!NOTE]
>
>The CSV download is limited to the first 500 records.

![A dialog displaying a preview of your insight and the tabularized results of your SQL that generated the insight.](../images/sql-insights-query-pro-mode/view-more-download-csv.png)

### Send as email {#send-as-email}

To export more than 500 records, select **[!UICONTROL Export]** and choose **[!UICONTROL Send as email]** from the [!UICONTROL Export file] dialog. This option securely sends a download link to your Adobe-associated email address. The recipient's name and registered Adobe email address appear in the [!UICONTROL Recipients] section of the dialog.

![The View more chart data with the Export and Send as email options highlighted.](../images/sql-insights-query-pro-mode/send-as-email.png)

After you select [!UICONTROL Send as email], Adobe generates a report and sends an email to your registered Adobe address. The email includes a secure download link that requires authentication through Experience Platform.

>[!NOTE]
>
>You must download the report within 24 hours of link generation; after that, the file expires.

![The Experience Platform UI with the File generation successful dialog displayed containing the Download report option.](../images/sql-insights-query-pro-mode/download-report.png)

To protect your data, Adobe securely hosts exported files rather than sending them as attachments. Access requires authentication through the Platform UI, and Adobe verifies that the file is downloaded only by the intended recipient.

This method allows you to export **up to 10,000 records** and ensures secure access to sensitive data.

## Sort by column {#sort-column}

When viewing tabulated results, you can use the sort functionality to sort by column in ascending or descending order. From your custom dashboard, select the ellipses (`...`) on any table to access the [!UICONTROL View more] option.

![A custom dashboard with a tables's ellipses dropdown menu and the View more option highlighted.](../images/sql-insights-query-pro-mode/advanced-ellipses-dropdown.png)

You can sort columns by selecting the drop down menu beside the column name and then selecting **[!UICONTROL Sort Ascending]** or **[!UICONTROL Sort Descending]**.

>[!NOTE]
>
>The [!UICONTROL Sort Ascending] and [!UICONTROL Sort Descending] options will only appear for columns that have been configured with [sorting functionality](./overview.md#advanced-attributes).

![A table column dropdown showing the Sort Ascending and Sort Descending options highlighted.](../images/sql-insights-query-pro-mode/advanced-sort-dropdown.png)

## Resize a column {#resize-column}

You can resize columns in tabulated results to improve data readability. From your custom dashboard, select the ellipses (`...`) for your table to access the [!UICONTROL View more] option. Use the drop down menu beside the column name to resize it, then select **[!UICONTROL Resize column]**.

![A table column dropdown showing the Resize column option highlighted.](../images/sql-insights-query-pro-mode/advanced-resize-dropdown.png)

Select the slider and drag to the left or right to adjust the column size as required.

![A table showing the column resize bar highlighted.](../images/sql-insights-query-pro-mode/advanced-resize-column.png)

## Table pagination {#table-pagination}

Pagination is automatically applied to your tables in the [!UICONTROL View more] feature, eliminating the need for you to manually modify your SQL queries. This feature ensures that your data is presented in a more manageable format, which facilitates the process of navigating through large datasets.

You can see up to 500 records per page. To navigate through the records, use the **[!UICONTROL >]** located at the bottom of the page.

![Tabulated results with results and pagination highlighted.](../images/sql-insights-query-pro-mode/advanced-table-pagination.png)

## Next steps

After reading this document, you now know how to view tabulated results from your custom chart's SQL analysis and how to export that data securely. See the view SQL document to learn how to [view the SQL behind your custom insights](./view-sql.md). 

You can also learn how to generate charts from existing data models in the Adobe Experience Platform UI with the [guided design mode guide](../standard-dashboards.md).

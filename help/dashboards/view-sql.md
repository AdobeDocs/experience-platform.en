---
title: View Insight SQL
description: View the SQL behind your Profile, Audience, Destination, and customized insights and execute the query on demand through the Query Editor.
exl-id: fd728926-c113-4593-92b1-916a02d09d41
TQID: https://experienceleague.adobe.com/lrEfJldc3SVIVMhFLZDxgfWz0z4SMfvQPTyamm9mqYo
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
subfeature_v2:
  - id: f6ac78a3-5b59-40f5-a37d-45df5303d3a3
    internal-label: Dashboards
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# View insight SQL

Use the [!UICONTROL View SQL] feature to view the SQL behind your Profile, Audience, Destination, and customized insights and execute the query on demand through the Query Editor. Take inspiration from the SQL of over 40 existing insights to create new queries that derive unique insights from Experience Platform data based on your business needs.

## Navigate to the dashboard overview {#navigate-to-overview}

To open your chosen dashboard, select either **[!UICONTROL Profiles]**, **[!UICONTROL Audiences]**, or **[!UICONTROL Destinations]** from the left navigation. Next select **[!UICONTROL Overview]** from the tab options if the workspace does not automatically appear.

Alternatively, select **[!UICONTROL Dashboards]** from the left navigation followed by the name of your custom dashboard. The overview of your user-defined dashboard appears. 

![The Experience Platform UI with [!UICONTROL Profiles], [!UICONTROL Audiences], [!UICONTROL Destinations], and [!UICONTROL Dashboards] highlighted.](./images/view-sql/dashboard-navigation.png)

## View SQL toggle {#toggle}

A toggle is available from the overview of the Profile, Audience, Destination, and user-defined dashboards to enable or disable the feature. 

>[!NOTE]
>
>If you enable the [!UICONTROL View SQL] toggle, you cannot change global and widget level filters until you disable the feature.

![The [!UICONTROL View SQL] toggle highlighted.](./images/view-sql/view-sql-toggle.png)

Enable the toggle to display [!UICONTROL View SQL] text on each individual insight. 

![An insight with [!UICONTROL View SQL] highlighted.](./images/view-sql/insight-view-sql.png)

Select **[!UICONTROL View SQL]** to open a dialog that contains the widget's SQL.

## SQL dialog {#sql-dialog}

A dialog appears that contains the title of the insight and the SQL that generates it.

>[!TIP]
>
>You can copy the entire SQL statement to your clipboard by selecting the copy icon (![The copy icon.](/help/images/icons/copy.png)) in the top right of the dialog.

![An insight dialog with the SQL statement highlighted highlighted.](./images/view-sql/sql-dialog.png)

Select **[!UICONTROL Run SQL]** to open the Query Editor with the query is pre-populated. 

![An insight dialog with [!UICONTROL Run SQL] highlighted.](./images/view-sql/run-sql.png)

## Edit existing SQL {#edit-sql}

The Query Editor appears. You can now edit the statement and query your platform data in a fashion that better suits your reporting needs. Save your new query template with an appropriate name.

![The Query Editor with your chosen insight SQL prepopulated.](./images/view-sql/edit-sql.png)

## Next steps

After reading this document, you now understand how to access the SQL for any insight within either the standard dashboards or a user-defined dashboard. If you have not already done so, you are recommended to read the [Real-Time Customer Data Platform Insights Data Model document](./data-models/cdp-insights-data-model-b2c.md). That document contains insights on customizing SQL templates for Real-Time CDP reports tailored to your marketing and KPI needs.

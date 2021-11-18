---
solution: Experience Platform
title: Power BI Report Templates for Platform Dashboards
type: Documentation
description: Use the Power BI report templates feature to explore Experience Platform data using Power BI.
---

# Power BI Report Templates for Platform Dashboards

The Power BI report template feature allows you to create COMPELLING reports populated with data from your Adobe Experience Platform Profile, Segment, and Destination insights. These reports can be shared across your entire organization without the recipients needing credentials for your Platform IMS ORG.

Experience Platform provides the Power BI application integration through a streamlined installation process. The automated installation process installs all the standard widgets for displaying key metrics and connects to the data model so that you can easily customize and extend the report. Power BI report templates are comprised of the a variety of elements. They include visual representations of the report data, report pages, the data model definition (including schema and relationships), and all query definitions.

This document provides instructions on how to connect Adobe Experience Platform with the Power BI application and use report templates to share Platform data with external users.

## Getting started

{prerequisits, links to other requirements}

To install the Power BI application integration users must first have acquire the following Platform permissions:

- Query Service Manage
- Manage sandboxes permission

To learn how to assign these permissions, please read the [Access Control](../../access-control/home.md) documentation.

You must also have a Power BI account. To create an account navigate to the [Power BI homepage](https://powerbi.microsoft.com/en-us/). Users for this Power BI account must also have the **Create workspace** setting enabled within the Power BI settings within Tenant settings of the Power BI admin portal. If your account is provided by your Tenant or employer, contact your respective admin to get this setting enabled. 

![Power BI Admin portal create workspace settings.](../images/power-bi/create-workspace-settings.png)

## Install the Power BI application integration

Within the Platform UI, select **[!UICONTROL Dashboards]** in the left navigation. The Dashboards workspace appears. The [!UICONTROL Browse] tab displays a list of currently available dashboard views. To learn more about available dashboards see the [inventory documentation](../inventory.md). 

Next, select the **[!UICONTROL Integrations]** tab. The Power BI application integration page appears. Then, select **[!UICONTROL Install]** to begin the installation.

>[!NOTE]
>
> If you do not have both Query Service Manage and Manage Sandboxes permissions then [!UICONTROL Install] will be grayed out.

![Power BI details screen with Install button highlighted.](../images/power-bi/power-bi-details-screen.png)

### Credentials

The first step is to generate credentials. There are two options available, [!UICONTROL  Create  new credentials] or [!UICONTROL  Use existing credentials]. Select the appropriate toggle.

#### Create New credentials

There are three required fields when generating new credentials, [!UICONTROL Name], [!UICONTROL Assigned to], and [!UICONTROL Password]. The [!UICONTROL Assigned to] field relates to the email address associated with...XXXXX

<!-- Question what does the 'Assigned to' field relate to specifically? Email linked to the IMS Org perhaps?-->

To learn more about generating non-expiring Query Service credentials, please refer to the [Query Service non-expiring credentials guide](../../query-service/ui/credentials.md#non-expiring-credentials).

>[!NOTE]
>
>When creating non-expiring credentials you must have the following three permissions and two roles. The power BI installation workflow will allow you to progress with the installation but will return an error unless you have the required permissions and roles. The necessary permissions are Query Service Manage, Manage Sandboxes, and Query Service Integration permission. The required roles are Adobe Experience Platform admin and developer roles. To learn how to assign these permissions, please read the [Access Control](../../access-control/home.md) documentation.

After generating non-expiring credentials for the first time, a JSON file is downloaded that can be shared with other users who can then use these credentials top complete the process.

#### Use Existing credentials

A JSON credential file can be uploaded. This can also be taken from the Query Service non-expiring credentials.  

Select **[!UICONTROL Upload credential file]**. A file browser dialog appears. Select the appropriate JSON file to upload.

![Power BI credentials screen with Upload credential file button highlighted.](../images/power-bi/upload-credential-file.png)

## Review consent

After selecting either **[!UICONTROL Generate Credentials]** or **[!UICONTROL Upload credential file]** Platform automatically validates the credentials. Assuming you have the correct credentials, a confirmation popover appears.

Next you must provide consent to Microsoft for the permissions requested by Power BI. A window appears requesting permissions. 

These permissions allow Power BI to use your data according to their terms of service and privacy statement. Select **[!UICONTROL Accept]**.

![Permissions request for Power BI application.](../images/power-bi/power-bi-permissions.png)

>[!NOTE]
>
>If you exit the installation process at any point before providing consent, the Power BI application integration will not be installed to the Dashboards inventory.

After providing consent, the dashboard is installed in the Power BI environment. As part of the installation process, the Power BI report template is automatically installed in the Power BI environment which then uses the non-expiring credentials to log into Adobe Experience Platform. Power BI then executes all the SQL queries in sequence to access the data that is held within Experience Platform and populates the report template.

Once a Power BI report template is installed, the Power BI link is added to the list of available Dashboards under the [!UICONTROL Browse] tab. Select **[!UICONTROL Power BI]** from the list to navigate to the PowerBI environment.

>[!NOTE]
>
>PowerBi admins need to make sure that the users have the appropriate permissions to view these dashboards in this environment. 

## Power BI workspace

After logging into [the Power BI workspace](https://dxt.powerbi.com), report templates are available for each of the services for which you have permission. The report templates include Profiles, Segments, and Destinations.

>[!NOTE]
>
>You must have edit permissions to allow that dashboard to be installed in the Power BI environment.

The same standard metrics from Profiles, Segments, and Destinations are available within the Power BI template reports. These reports can then be customized further  

![Power BI Profile template report.](../images/power-bi/power-bi-profile-report-template.png)

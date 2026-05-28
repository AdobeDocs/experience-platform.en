---
title: Properties
description: Learn how your extensions, environments, and libraries are organized and grouped for your organization in Adobe Experience Platform.
exl-id: e5b4a853-c23e-498c-9e20-e773ea1de88b
TQID: https://experienceleague.adobe.com/B9AzoGNIjWkivmmBiN800fYXL99LDlRsjG2mA-VsNpo
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: adf04a6a-050f-44bc-a52c-db79ccb22ebf
    internal-label: Administration
  - id: b069d60e-95f3-44d6-95a8-ddc862a4bc38
    internal-label: Reports
  - id: b3f03848-ae12-48b2-8aab-cad18567eb32
    internal-label: Metrics
  - id: c93393a4-e558-47e1-992e-c91ed4d480ce
    internal-label: Implementation
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: fd307ce7-56f5-4ee3-af68-a7833ff6e85e
    internal-label: API
  - id: fdbb8fc9-ffa3-4b86-88fe-aa4c5a3e1bc6
    internal-label: Administration
subfeature_v2:
  - id: a9eb38d5-9d89-492f-af4e-b968a07f2d91
    internal-label: Permissions
  - id: b572b7ff-a413-4173-b2b4-d7d3874f1b9b
    internal-label: Best practices
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data elements
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Properties

## Web properties

A web property is a collection of rules, data elements, configured extensions, environments, and libraries.  Each web property has its own set of embed codes and can be deployed on any number of distinct websites (different domains).

## Mobile properties

A mobile property type can contain multiple applications. For example, in a mobile property you can manage the same set of rules and extensions across multiple iOS and Android applications.

## Best practices for planning properties {#best-practices-for-planning-properties}

Each tag implementation in Adobe Experience Platform can be very different. They have a wide variety of data-collection needs, variable usage, extensions, third-party tags, other systems and technologies, people, teams, geographic regions, and so on. You should structure your properties in a way that matches your organization's workflow, and processes.

Considering the following when planning properties:

* Code structure
* Data
* Variables
* Extensions, tags, and systems
* People

### Code structure

Sites are based on HTML, mobile applications on code.  If the underlying HTML templates or codebases are the same for multiple sites and applications, you may want to consider using a single tag property to manage multiple sites or apps.

### Data

For all of your websites or applications, is the data you are going to collect very similar, somewhat similar, or unique?

If the data you need to collect is similar, it might make sense to group those sites or applications into one property to avoid duplicating rules or copying rules from one property to another.

If your data collection needs are unique for each site or application, it might make sense to separate them into their own properties. This method lets you control the data collection more specifically, without using large amounts of conditional logic in custom scripts.

### Variables

Similar to data, are the variables you are going to set in your [!DNL Analytics] and other extensions very similar, somewhat similar, or unique?

For example, if eVar27 is used for the same source value across all of your websites or applications, it might make sense to group those sites or applications together so you can set those common variables in just one property.

### Extensions, tags, and systems

Are the extensions, tags, and systems you are going to deploy very similar, somewhat similar, or unique?

If the extensions, tags, and systems you are going to deploy are very similar across your sites or applications, you might want to include them in the same property.

If you are deploying [!DNL Adobe Analytics] on only one site or application, and your other extensions and tags are also unique, you might want to create separate properties so that you have more control.

For example, If you are deploying [!DNL Adobe Analytics], [!DNL Target], and the same 3rd-party extensions across all of your sites or applications, that is a reason to group together.

### People

For the individuals, teams, and organizations that are working in Adobe Experience Platform, will they need access to all of your websites and applications, some of them, or just one?

The User Management features allow you to assign different roles to different people for all of your properties, or on a per-property basis. If someone has sufficient rights, that person can perform administrative actions across all the properties in that Experience Platform organization. All the other roles can be assigned on a per-property basis. You can even hide a property from certain users (non-admins) by not giving them any role in that property.

## Properties page

A property is a collection of rules, data elements, configured extensions, environments, and libraries. For web, there is only one publish embed code per property. For mobile, there is one configuration app ID per property.

A property can be any grouping of one or more domains and subdomains. You can manage and track these assets similarly. For example, suppose that you have multiple websites based on one template, and you want to track the same assets on all of them. You can apply one property to multiple domains.

The left side of the screen shows the companies in your organization. This is particularly useful if you manage multiple accounts. Select a company to see the properties and audit logs for that company.

Each property is shown in the Properties list.

The Properties list shows the following information:

* Property name
* Platform
* Status

Select a property to see an overview of that property. The overview shows any activity performed on the property. It also lists the metrics and extensions for the property.

## Create or configure a property

This section provides guidance on how to create or configure a tag property in Adobe Experience Platform.

>[!NOTE]
>
>Only a user with sufficient rights can create a property. See [User Management](user-permissions.md).

Before beginning, review the [Best practices for planning properties](companies-and-properties.md#best-practices-for-planning-properties) for properties.

Navigate to your company page, then select **[!UICONTROL Add Property]**, or select an existing property from the list and select **[!UICONTROL Configure]**.

![](../../images/property-settings.png)

### For Web

Follow the instructions to create a web property.

1. Fill in the fields:

   **Name:** The name of your property.

   **Domains:** The base URL of any sites you plan to deploy this property to

1. (Advanced) **[!UICONTROL Run rule components in sequence]** Select this checkbox to make conditions and actions wait for the previous one to complete before they run
1. (Advanced) **[!UICONTROL Return an empty string for missing data elements:]** If you reference a data element that does not exist within a library, that would normally return `undefined`. Enable this checkbox if you want that scenario to return an empty string instead.
1. (Advanced) **[!UICONTROL Configure for extension development:]** Enable this checkbox if you plan to install development extensions that are being actively developed by your company
1. Select **[!UICONTROL Save]**.

### For Mobile

Follow the instructions to create a mobile property.

1. Fill in the fields: 

   * **Name:** The name of your property. 
   * **Privacy:** By default the privacy setting is set to Opted In, meaning that you would like for the SDK to collect and send data to solutions. If you select Opted Out, the SDK by default will NOT send data to solutions. If you choose Unknown as the setting, the SDK will require that the application first prompt the user to allow for data collection and sharing.

     >[!NOTE]
     >
     >These settings can be further controlled via API in the mobile application. 

   * **Use HTTPS:** Choose if all data communication should be sent over HTTP or HTTPS.

1. Select **[!UICONTROL Save]**.

After your property is created, Experience Platform automatically adds a default host, a set of environments (Development, Staging, and Production), and the default extensions.

## Delete a property

Follow the steps below to delete a tag property.

>[!NOTE]
>
>Property removal cannot be reversed. The requestor must be an admin-level user. This request cannot be undone.

1. In the Properties list, select the property you want to delete.

   You can select multiple properties to delete.

1. Select **[!UICONTROL Delete]**, then confirm the removal of the property.

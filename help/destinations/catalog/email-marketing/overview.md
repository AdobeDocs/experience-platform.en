---
keywords: email;Email;e-mail;email destinations
title: Email marketing destinations overview
type: Tutorial
description: Email Service Providers (ESPs) allow you to manage your email marketing activities, such as for sending promotional email campaigns. Learn which ESPs are supported as Experience Platform destinations.
exl-id: e07f8c5a-0424-4de5-810f-3d5711ef4606
---
# Email marketing destinations overview {#email-marketing-destinations}

## Overview {#overview}

Email Service Providers (ESPs) enable you to manage your email marketing activities, such as sending promotional email campaigns. Adobe Experience Platform integrates with ESPs by allowing you to activate segments to email marketing destinations.

## Supported email marketing destinations {#supported-destinations}

Adobe Experience Platform supports the following email marketing destinations:

* [Adobe Campaign](adobe-campaign.md)
* [Adobe Campaign Managed Cloud Services](adobe-campaign-managed-services.md)
* [(API) Oracle Eloqua](oracle-eloqua-api.md)
* [(API) [!DNL Salesforce Marketing Cloud]](salesforce-marketing-cloud-exact-target.md)  
* [(Files) Oracle Eloqua](oracle-eloqua.md)
* [(Files) [!DNL Salesforce Marketing Cloud]](salesforce-marketing-cloud.md)
* [[!DNL Salesforce Marketing Cloud Account Engagement]](salesforce-marketing-cloud-account-engagement.md)
* [Oracle Responsys](oracle-responsys.md)
* [SendGrid](sendgrid.md)

## Connect to a new email marketing destination {#connect-destination}

To send segments to email marketing destinations for your campaigns, Platform must first connect to the destination. See the [destination creation tutorial](../../ui/connect-destination.md) for detailed information on setting up a new destination.

## Best practices when activating audiences to email marketing destinations {#best-practices}

### Identity selection {#identity}

Adobe recommends that you select a unique identifier from your [union schema](../../../profile/home.md#profile-fragments-and-union-schemas). This is the field that your user identities are keyed off of. Most commonly, this field is the email address, but it can also be a loyalty program ID or a phone number. Refer to the table below for the most common unique identifiers and their XDM field in the schema.

|Unique Identifier | XDM field in Unified Schema|
|----------------- | ---------------------------|
| Email Address | `personalEmail.address` |
| Phone | `mobilePhone.number` |
| Loyalty program ID | `Customer-defined XDM field` |

{style="table-layout:auto"}

### Other destination attributes {#other-destination-attributes}

In the Schema field selector, choose which other fields you want to export to the email destination. Some recommended options are:

|Schema | XDM field |
|------ | ---------|
| First Name | `person.name.firstName`|
| Last Name | `person.name.lastName`|
| Phone | `mobilePhone.number` |
| Address City| `homeAddress.city` |
| Address State | `homeAddress.stateProvince` |
| Address Postal Code | `homeAddress.postalCode` |
| Birthday | `person.birthDayAndMonth`|
| Segment membership | `segmentMembership.status`|

{style="table-layout:auto"}

## Activate segments to email marketing destinations {#activate}

Some email marketing destinations in the catalog export profiles in a streaming manner, through an API integration with the destination. 

Other destinations export files to a cloud storage location. After the export completes, you need to import data from the cloud storage location into your email marketing destination. 

Follow the links in the [supported email marketing destinations](#supported-destinations) section to learn how to activate segments to each email marketing destination.

## Additional resources {#additional-resources}

* [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md)
* [Create email marketing destinations and activate data using the Flow Service API](../../api/connect-activate-batch-destinations.md)

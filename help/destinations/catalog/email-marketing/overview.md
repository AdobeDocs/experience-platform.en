---
keywords: email;Email;e-mail;email destinations
title: Email marketing destinations overview
type: Tutorial
description: Email Service Providers (ESPs) allow you to manage your email marketing activities, such as for sending promotional email campaigns.
exl-id: e07f8c5a-0424-4de5-810f-3d5711ef4606
---
# Email marketing destinations overview {#email-marketing-destinations}

## Overview {#overview}

Email Service Providers (ESPs) enable you to manage your email marketing activities, such as sending promotional email campaigns. Adobe Experience Platform integrates with ESPs by allowing you to activate segments to email marketing destinations.

Platform exports your segments as `.csv` files and delivers them to your preferred location. Schedule your data import in your email marketing platform from the storage location enabled in [!DNL Platform]. The process to import data varies for each partner. Read the individual destinations articles for more information.

## Supported email marketing destinations {#supported-destinations}

Adobe Experience Platform supports the following email marketing destinations:

* [Adobe Campaign](adobe-campaign.md)
* [Oracle Eloqua](oracle-eloqua.md)
* [Oracle Responsys](oracle-responsys.md)
* [Salesforce Marketing Cloud](salesforce-marketing-cloud.md)
* [Sendgrid](sendgrid.md)

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

### Other destination attributes

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

## Import data from your storage location into the destination {#import-data-into-destination}

Read the individual email marketing destination articles to learn how to import data from your storage location into destinations: 

* [Adobe Campaign](adobe-campaign.md)
* [Oracle Eloqua](oracle-eloqua.md)
* [Oracle Responsys](oracle-responsys.md)
* [Salesforce Marketing Cloud](salesforce-marketing-cloud.md)

## Activate segments to email marketing destinations {#activate}

For instructions on how to activate segments to email marketing destinations, refer to [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md).

## Additional resources

* [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md)
* [Create email marketing destinations and activate data using the Flow Service API](../../api/connect-activate-batch-destinations.md)

---
title: Adobe Campaign Classic
seo-title: Adobe Campaign Classic
description: Adobe Campaign lets you coordinate the creation of conversational marketing campaigns. Adobe Campaign has innovative features to model, streamline, and automate marketing and customer communication processes.
seo-description: Adobe Campaign lets you coordinate the creation of conversational marketing campaigns. Adobe Campaign has innovative features to model, streamline, and automate marketing and customer communication processes.
---

# Adobe Campaign Classic

Adobe Campaign lets you coordinate the creation of conversational marketing campaigns. Adobe Campaign has innovative features to model, streamline, and automate marketing and customer communication processes. See [About Adobe Campaign Classic](https://docs.adobe.com/content/help/en/campaign-classic/using/getting-started/starting-with-adobe-campaign/about-adobe-campaign-classic.html) for more information.

## Set up destination

Because Adobe Campaign Classic is an email marketing destination, you must follow the connect flow described in [Email marketing destinations](/help/rtcdp/destinations/email-marketing-destinations.md). For account details, see the sections below.

## Destination attributes

When [activating segments](/help/rtcdp/destinations/activate-destinations.md) to the Adobe Campaign destination, we recommend that you select the following destination attributes:

* Email Address: personalEmail
* First Name: firstName
* Last Name: lastName
* Phone: mobilePhone
* Address City: homeAddress.city
* Address State or Province: homeAddress.stateProvince
* Address Postal Code: homeAddress.postalCode
* Address Country: homeAddress.country
* Profile ID TBD: (e.g. Membership ID): Eloqua Contact ID

## Set up data import into Adobe Campaign Classic

After connecting Real-time CDP to your Amazon S3 or SFTP storage, you must set up the data import from your storage location into Adobe Campaign. To learn how to accomplish this, see [Importing data](https://docs.adobe.com/content/help/en/campaign-classic/using/automating-with-workflows/general-operation/importing-data.html) in the Adobe Campaign Classic Help documentation.
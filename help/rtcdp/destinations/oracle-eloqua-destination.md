---
title: Oracle Eloqua destination
seo-title: Oracle Eloqua destination
description: Oracle Eloqua is a software as a service (SaaS) platform for marketing automation offered by Oracle that aims to help B2B marketers and organizations manage marketing campaigns and sales lead generation.
seo-description: Oracle Eloqua is a software as a service (SaaS) platform for marketing automation offered by Oracle that aims to help B2B marketers and organizations manage marketing campaigns and sales lead generation.
---

# Oracle Eloqua

## Overview

[Eloqua](https://www.oracle.com/marketingcloud/products/marketing-automation/) is a software as a service (SaaS) platform for marketing automation offered by Oracle that aims to help B2B marketers and organizations manage marketing campaigns and sales lead generation. 

## Connect to destination

To connect to the Oracle Eloqua destination, follow the steps indicated in the [Connect destination](/help/rtcdp/destinations/email-marketing-destinations.md#connect-destination) article. You must grant Adobe access to your SFTP storage location.

## Destination attributes

When [activating segments](/help/rtcdp/destinations/activate-destinations.md) to the Oracle Eloqua destination, we recommend that you select the following destination attributes:

* Email Address: personalEmail
* First Name: firstName
* Last Name: lastName
* Phone: mobilePhone
* Address City: homeAddress.city
* Address State or Province: homeAddress.stateProvince
* Address Postal Code: homeAddress.postalCode
* Address Country: homeAddress.country
* Profile ID TBD: (e.g. Membership ID): Eloqua Contact ID

## Set up data import into Oracle Eloqua

After connecting Real-time CDP to your Amazon S3 or SFTP storage, you must set up the data import from your storage location into Oracle Eloqua. To learn how to accomplish this, see [Importing contacts or accounts](https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAA/Help/DataImportExport/Tasks/ImportingContactsOrAccounts.htm) in the Oracle Eloqua Help Center.
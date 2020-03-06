---
title: Amazon S3 destination
seo-title: Amazon S3 destination
description: Create a live outbound connection to your Amazon Web Services (AWS) S3 storage to periodically export tab-delimited or CSV data files from Adobe Experience Platform into your own S3 buckets.
seo-description: Create a live outbound connection to your Amazon Web Services (AWS) S3 storage to periodically export tab-delimited or CSV data files from Adobe Experience Platform into your own S3 buckets.
---

# Amazon S3 destination

## Overview

Create a live outbound connection to your Amazon Web Services (AWS) S3 storage to periodically export tab-delimited or CSV data files from Adobe Experience Platform into your own S3 buckets.

To export data, complete the following steps:

## Connect destination {#connect-destination}

See Cloud storage destinations workflow for instructions on how to connect to your cloud storage destinations. 

For Amazon S3 destinations, enter the following information in the create destination workflow:



## Destination attributes {#destination-attributes}

When [activating segments](/help/rtcdp/destinations/activate-destinations.md) to the Salesforce Marketing Cloud destination, we recommend that you select a unique identifier from your [union schema](https://www.adobe.io/apis/experienceplatform/home/profile-identity-segmentation/profile-identity-segmentation-services.html#!api-specification/markdown/narrative/technical_overview/unified_profile_architectural_overview/unified_profile_architectural_overview.md). Select the unique identifier and any other XDM fields that you want to export to the destination. For more information, see [Select which schema fields to use as destination attributes in your exported files](/help/rtcdp/destinations/email-marketing-destinations.md#destination-attributes) in Email Marketing Destinations.

## Set up data import into Salesforce Marketing Cloud {#import-data-into-salesforce}

After connecting Real-time CDP to your Amazon S3 or SFTP storage, you must set up the data import from your storage location into Salesforce Marketing Cloud. To learn how to accomplish this, see [Importing Subscribers into Marketing Cloud from a File](https://help.salesforce.com/articleView?id=mc_es_import_subscribers_from_file.htm&type=5) in the Salesforce Help Center.
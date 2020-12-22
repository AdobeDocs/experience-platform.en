---
keywords: SFTP;sftp
title: SFTP destination
seo-title: SFTP destination
description: Create a live outbound connection to your SFTP Server to periodically export delimited data files from Experience Platform.
seo-description: Create a live outbound connection to your SFTP Server to periodically export delimited data files from Experience Platform.
---

# SFTP destination

## Overview

Create a live outbound connection to your SFTP Server to periodically export delimited data files from Experience Platform.

## Export Type {#export-type}

**Profile-based** - you are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen from the select attributes screen of the [destination activation workflow](../../ui/activate-destinations.md#select-attributes).

![SFTP profile-based export type](../../assets/catalog/cloud-storage/sftp/catalog.png)

## Connect destination {#connect-destination}

See [Cloud storage destinations workflow ](./workflow.md)for instructions on how to connect to your cloud storage destinations, including SFTP.

For SFTP destinations, enter the following information in the create destination workflow, in the **Authentication** step:

* **Host**: The address of your SFTP storage location
* **Username**: The username to log into your SFTP storage location
* **Password**: The password to log into your SFTP storage location

## Exported data {#exported-data}

For SFTP destinations, Platform creates a tab-delimited `.txt` or `.csv` file in the storage location that you provided. For more information about the files, see [Email Marketing destinations and Cloud storage destinations](../../ui/activate-destinations.md#esp-and-cloud-storage) in the segment activation tutorial.
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

To export data, complete the following steps:

## Connect destination {#connect-destination}

See [Cloud storage destinations workflow ](/help/rtcdp/destinations/cloud-storage-destinations-workflow.md)for instructions on how to connect to your cloud storage destinations, including SFTP.

For SFTP destinations, enter the following information in the create destination workflow, in the **Authentication** step:

* **Host**: the address of your SFTP storage location
* **Username**: the username to log into your SFTP storage location
* **Password**: the password to log into your SFTP storage location

## Exported data {#exported-data}

For SFTP destinations, Adobe Real-time CDP creates a tab-delimited `.txt` or `.csv` file in the storage location that you provided. For more information about the files, see [Email Marketing destinations and Cloud storage destinations](/help/rtcdp/destinations/activate-destinations.md#esp-and-cloud-storage) in the segment activation tutorial.
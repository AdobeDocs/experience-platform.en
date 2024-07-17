---
solution: Experience Platform
title: Known limitations and troubleshoot issues with playbooks
description: Learn more about the known issues and common issues with playbooks and how to troubleshoot them
role: User, Developer, Admin
exl-id: 2604ce26-bcf9-46e1-bc10-30252a113159
---

# Troubleshooting {#troubleshooting}

View troubleshooting suggestions for common errors when working with Use Case Playbooks

## Adobe Journey Optimizer Surfaces not configured {#surfaces-not-configured}

When creating an instance of a playbook, you might see the message below displayed.

![Troubleshooting](/help/use-case-playbooks/assets/playbooks/troubleshooting/troubleshooting-ajo.png)

This is because Journey Optimizer playbooks create messages for e-mail, push and SMS channels. Read the [get started](/help/use-case-playbooks/playbooks/get-started.md#configure-sandbox-and-channel-surfaces-in-journey-optimizer) guide to configure the different surfaces.

## Status *failed* when creating a new instance {#status-failed}

If you see a failed message when you try to create an instance, this might be because your administrator has not granted you the required user permissions. A playbook contains a lot of different assets and your user needs permissions to create those assets in order to be able to create the instance of the playbook successfully. See the [permissions](/help/use-case-playbooks/playbooks/get-started.md#grant-your-team-the-required-access-permissions) section of this guide on how to set up permissions.

## Import failure {#import-failure}

Customers operate within different testing environments and occasionally, while importing an instance from their environment to the Adobe sandbox, it may fail. To view the status of these imports, select Sandbox from the left navigation and then select Jobs. Here you can view all the details of the imported files. Select a file with a failed status and then select View job details. A modal appears. Select View JSON file and scroll down and copy the error message that appears under "messages". It is quite possible for multiple error messages to appear, so ensure to copy all of them. Send these over to you Adobe team while trying to log a bug ticket. This expedites the resolution process and gives your team more context about what's happening.

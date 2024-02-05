---
solution: Experience Platform
title: Known limitations and troubleshoot issues with playbooks
description: Learn more about the known issues and common issues with playbooks and how to troubleshoot them
role: User, Developer, Admin
exl-id: 2604ce26-bcf9-46e1-bc10-30252a113159
---

# Troubleshooting and known limitations {#troubleshooting-known-limitations}

Learn how to troubleshoot errors when working with Use Case Playbooks and understand the known limitations of the general availability release.

## Troubleshooting {#troubleshooting}

View troubleshooting suggestions for common errors when working with Use Case Playbooks

### Adobe Journey Optimizer Surfaces not configured

When creating an instance of a playbook, you might see the message below displayed.

![Troubleshooting](/help/use-case-playbooks/assets/playbooks/troubleshooting/troubleshooting-ajo.png)

This is because Journey Optimizer playbooks create messages for e-mail, push and SMS channels. Read the [get started](/help/use-case-playbooks/playbooks/get-started.md#configure-sandbox-and-channel-surfaces-in-journey-optimizer) guide to configure the different surfaces.

### Status *failed* when creating a new instance

If you see a failed message when you try to create an instance, this might be because your administrator has not granted you the required user permissions. A playbook contains a lot of different assets and your user needs permissions to create those assets in order to be able to create the instance of the playbook successfully. See the [permissions](/help/use-case-playbooks/playbooks/get-started.md#grant-your-team-the-required-access-permissions) section of this guide on how to set up permissions.

## Known limitations

A couple of known limitations show up when you create an instance of a playbook and generate assets. 

* For generated schemas, if a schema gets generated in one instance of a playbook, and you edit it, then another schema *will not* get generated if you enable another instance of the playbook. Instead, continue to use the schema you edited within the instance as well.

* When using the [data awareness functionality](/help/use-case-playbooks/playbooks/data-awareness.md) to promote the schema from the inspirational sandbox to the development sandbox, you might see some errors similar to below:

![Errors displayed in the schema mapping workflow.](/help/use-case-playbooks/assets/playbooks/troubleshooting/schema-errors.png){width="1000" zoomable="yes"}

This is because some of the fields generated from your schema are not present in the schema in the development sandbox that you're copying to. Look up what those fields are. Then, go back to the development sandbox where you can:

* Either create a new field group that includes those fields or
* Include in your schema a standard, pre-defined field group that includes the missing fields.

After you include those fields in the schema in the development sandbox, go back to the workflow to copy the schema fields from the inspirational sandbox to the development sandbox. The errors are now gone.

For more information, watch the video below to create schema field groups.

>[!VIDEO](https://video.tv.adobe.com/v/27013/?learn=on)

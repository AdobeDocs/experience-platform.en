---
solution: Experience Platform
title: Troubleshoot issues with playbooks
description: Learn common issues with playbooks and how to troubleshoot them
exl-id: 2604ce26-bcf9-46e1-bc10-30252a113159
---

# Known limitations {#known-limitations}

A couple of known limitations show up when you create an instance of a playbook and generate assets. 

* For generated schemas, if a schema gets generated in one instance of a playbook, and you edit it, then another schema *will not* get generated if you enable another instance of the playbook. Instead, continue to use the schema you edited within the instance as well.

* When using the [data awareness functionality](/help/use-case-playbooks/playbooks/data-awareness.md) to promote the schema from the inspirational sandbox to the development sandbox, you might see some errors similar to below:

![schema-errors](/help/use-case-playbooks/assets/playbooks/troubleshooting/schema-errors.png)

This is because some of the fields generated from your schema are not present in the schema in the development sandbox that you're copying to. Look up what those fields are. Then, go back to the development sandbox where you can:

* Either create a new field group that includes those fields or
* Include in your schema a standard, pre-defined field group that includes the missing fields.

After you include those fields in the schema in the development sandbox, go back to the workflow to copy the schema fields from the inspirational sandbox to the development sandbox. The errors are now gone.

If you don't already have it enabled, read the documentation to [create schema field groups](https://experienceleague.adobe.com/docs/platform-learn/tutorials/schemas/create-schema-field-groups.html).

## Troubleshooting {#troubleshooting}

### Adobe Journey Optimizer Surfaces not configured

When creating an instance of a playbook, you might see the message below displayed.

![Troubleshooting](/help/use-case-playbooks/assets/playbooks/troubleshooting/troubleshooting-ajo.png)

This is because Journey Optimizer playbooks create messages for e-mail, push and SMS channels. Read the [get-started](/help/use-case-playbooks/playbooks/get-started.md#configure-sandbox-and-channel-surfaces-in-journey-optimizer) guide to configure the different surfaces.

### Status *failed* when creating a new instance

If you see a failed message when you try to create an instance, this might be because your administrator has not granted you the required user permissions. A playbook contains a lot of different assets and your user needs permissions to create those assets in order to be able to create the instance of the playbook successfully. See the [permissions](/help/use-case-playbooks/playbooks/get-started.md#grant-your-team-the-required-access-permissions) section of this guide on how to set up permissions.

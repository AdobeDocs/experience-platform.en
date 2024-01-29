---
solution: Experience Platform
title: Troubleshoot issues with playbooks
description: Learn common issues with playbooks and how to troubleshoot them
exl-id: 2604ce26-bcf9-46e1-bc10-30252a113159
---

# Troubleshooting and known limitations

A couple of known limitations show up when you create a new instance of a playbook and generate new assets. 

* For generated schemas, if a schema gets generated in one instance of a playbook, and you edit it, then another schema *will not* get generated if you enable another instance of the playbook. Instead, continue to use the schema you edited within the new instance as well.

Another known limitation shows up when trying to import a schema from an inspirational sandbox to a target sandbox. 

* Once you create an instance and generate some assets along with a schema, you want to promote the schema from the inspirational sandbox to the development sandbox through the new data awareness functionality. You might see some errors because some of the fields generated from your schema are not present in the schema in the development sandbox that you're copying to. So, you need to look up what those fields are. Now go back to the development sandbox and here, you can either create a new field-group that includes those fields or you could also look up a standard, pre-defined field group that already has those fields. 

* Finally add it to your schema in the developement sandboxe. Now when you go to the mapper, you'll notice that the errors don't appear.

If you don't already have it enabled, read the documentation to [create schema field groups](https://experienceleague.adobe.com/docs/platform-learn/tutorials/schemas/create-schema-field-groups.html).

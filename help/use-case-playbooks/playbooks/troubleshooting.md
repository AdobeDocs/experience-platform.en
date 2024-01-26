---
solution: Experience Platform
title: Troubleshoot issues with playbooks
description: Learn common issues with playbooks and how to troubleshoot them
exl-id: 2604ce26-bcf9-46e1-bc10-30252a113159
---

# Troubleshooting and known limitations

<!-- >[!AVAILABILITY]
>
>This functionality is currently in Beta and is not available to all users. The documentation and the functionality are subject to change.

For the beta release of [!UICONTROL Use Case Playbooks], note the troubleshooting tips and known limitations. -->

## Known limitations {#known-limitations}

One known limitation shows up when you create a new instance of a playbook and new assets get generated. For generated schemas however, if a schema gets generated in one instance of a playbook, and you edit it, then another schema *will not* get generated if you enable another instance of the playbook. Instead, you will continue to use the schema you edited within the new instance as well.

Another known limitation shows up when trying to import a schema from an inspirational sandbox to a target sandbox. If a particular schema has object type fields, then it can only be mapped to another schema that has oject type fields. You need to have Adobe standard field and field groups enabled. If you don't already have it enabled, read the documentation to [create schema field groups](https://experienceleague.adobe.com/docs/platform-learn/tutorials/schemas/create-schema-field-groups.html).

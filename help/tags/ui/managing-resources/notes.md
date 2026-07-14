---
title: Notes
description: Learn how to add textual annotations to certain tag resources in Adobe Experience Platform.
exl-id: 14d6b6a1-3bd0-4181-8181-e6b35c197a44
TQID: https://experienceleague.adobe.com/I9AmjlJBcOIB8rwX4W76oC9rZyex53uQYGufaXYmOP0
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: f002a92a-b99f-47a4-90c8-65e0e415bc7a
    internal-label: Pass
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Notes

Notes are textual annotations that you can add to certain tag resources in Adobe Experience Platform. Notes can be attached to the following resources:

* Extensions
* Data elements
* Rules
* Rule components
* Libraries
* Properties

Notes can contain up to 512 Unicode characters.  

Notes are comments that have no impact on the behavior of the resources they are attached to. They are not included in built libraries.  You might use notes to:

* Provide background information on a resource
* Function as a to-do list for future enhancements
* Pass along resource usage advice to other users
* Give instructions to other team members
* Record historical context
* Remind yourself what a resource does, why it is built the way it is, or where it gets used

## Create a note

Noteable resources display a narrow rail on the right-hand side of the screen.  The rail includes an icon for notes.  This icon displays the current number of notes attached to the resource.

Select **[!UICONTROL Notes]** to expand the right rail and display the notes, with the most recent notes at the top.  To add a new note, enter your note text in the box at the top and select **[!UICONTROL Add Note]**.

## Other

* Notes on tag resources match the behavior of notes in DTM, in that they are immutable and cannot be edited or deleted.
* When viewing older revisions of a resource, only the notes that were created prior to that revision's `created_at` date are displayed.
* When you delete a resource, all notes attached to the resource are also deleted.

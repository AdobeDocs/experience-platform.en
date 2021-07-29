---
title: Notes
description: Learn how to add textual annotations to certain tag resources in Adobe Experience Platform.
---
# Notes

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

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

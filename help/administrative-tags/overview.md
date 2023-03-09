---
keywords: Experience Platform;home;popular topics;administrative tags;tags;
title: Administrative Tags Overview
description: This document provides information on administrative tags in Adobe Experience Platform
---
# Tags overview

Tags are a capability of Adobe Experience Platform that enables administrators to manage metadata taxonomies in order to classify business objects for easier discovery and categorization. Tags are metadata that can be thought of as keywords that can be attached to a segment, dataset, journey, or other objects to enable searches to find that object and related objects. Tags are classified into two types: categorized and uncategorized.

In order to provide more context and define the purpose of a tag, categories organize tags into useful sets. An administrator defines which categorized tags are available for users to add to objects. New tags that don't contain categories can also be created in-line in workflows where tags are applied. These tags will show up in the uncategorized section of the tag inventory. Tags can be applied by admins and users alike, regardless of who created them. All types of tags are available for selection when assigning to an object, searching, or filtering.

## Tags terminology

Tagging involves the following components:

| Terminology | Definition |
| --- | --- |
| Archived | A state for a tag that keeps current associations with objects but restricts the tag from being applied to further objects.  Archived tags are hidden from the tag picker. |
| Object | An Experience Cloud item that can have a tag applied.  Examples: Segment, Journey, Dataset. |
| Tag | Tags are metadata and may be thought of as keywords that can be attached to a segment, dataset, journey, or other objects to enable searches to find that object and related objects. |
| Tag Category | Tag Categories group tags into meaningful sets to provide greater context or describe the purpose of the tag.  Administrators manage tag categories and tags within categories. | 
| Uncategorized Tag | A new tag that is created in-line where tags are applied. These tags can be created and applied by any user, but they are not bound to a category.  Administrators may move these tags to a category to align with other similar tags. |

## Tags inventory

Tag category and tag management using the tags inventory is available within the Experience Platform and Journey Optimizer navigation. Changes to tags in the inventory are reflected in all objects that support tags. All users are able to access and browse the tags inventory, but tag management is limited to system and product admins.

The tags inventory has three levels of hierarchy, allowing users to manage tag categories, tags within a category, and individual tags. When managing an individual tag, users can view and navigate to any object where that tag is currently applied.

### Tags categories

Categories group tags into meaningful sets to provide greater context or describe the purpose of the tag. On any tag with a category, the category name followed by a colon precedes the tag name.

The following actions are possible when using tag categories:

* [Create tag category](./ui/tags-categories.md#create-tag-category)
* [Edit tag category](./ui/tags-categories.md#edit-tag-category-edit-tag-category)
* [Delete tag category](./ui/tags-categories.md#delete-tag-category-delete-tag-category)

### Managing Tags within a category

>[!NOTE]
>
>In order to manage tags for Experience Cloud, you must be a system administrator or a product administrator for Adobe Experience Platform for your organization, which has a subscription to Experience Cloud.

Within a category (or the default "Uncategorized" group), you can create and manage tags. The following actions are possible when managing tags:

* [Create a tag](./ui/managing-tags.md#create-a-tag-create-tag)
* [Edit a tag](./ui/managing-tags.md#edit-a-tag-edit-tag)
* [Move a tag between categories](./ui/managing-tags.md#move-a-tag-between-categories-move-tag)
* [Archive a tag](./ui/managing-tags.md#archive-a-tag-archive-tag)
* [Restore an archived tag](./ui/managing-tags.md#restore-an-archived-tag-restore-archived-tag)
* [Delete a tag](./ui/managing-tags.md#delete-a-tag-delete-tag)
* [View tagged objects](./ui/managing-tags.md#viewing-tagged-objects-view-tagged)

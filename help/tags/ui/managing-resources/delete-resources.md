---
title: Delete Resources
description: Learn how to delete tag resources in Adobe Experience Platform.
exl-id: c8e26720-1976-48ec-8490-3d4ce587831e
TQID: https://experienceleague.adobe.com/1T9DW9nd4xkPFETnQV9Ir-foFsR7uenbZr8qhNhCv-Q
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: e2b4267c-3fe4-4c51-b9f5-7aefcfa5996c
    internal-label: Hosts
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data elements
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Delete resources

Deleting a resource is a permanent removal of that resource from Adobe Experience Platform. If you want to remove a resource from a specific tag library, but still want that resource to be available for use in other libraries, see the guide on [removing resources from a library](remove-resources-from-library.md).

You can delete data elements, rules, extensions, hosts, environments, and properties. Once deleted, these resources are not recoverable.

Resources that are added to libraries (data elements, rules, and extensions) have special considerations when you delete them.

## Prepare a resource for deletion

Resources exist in different states and they depend on one another. Before you delete a resource, you must make sure it is in a state where it can be deleted.

Preparing a resource for deletion consists of two basic steps:

1. Resolve dependencies.
1. Remove from libraries.

### Resolve dependencies

Rules, data elements, and extensions are interdependent, so most of the time when you delete one, there is a cascading effect and you have other things you need to clean up.

#### Rules

Rules depend on other resources (extensions and data elements), but they do not have any resources that depend on them. Deleting a rule means you can no longer use it in a library or even view it, but you won't have any dependencies to clean up afterwards.

#### Data elements

Data elements depend on extensions, but unlike rules, data elements can have rules and extensions which depend on them. If you delete a data element, any rules or extensions which depend on this data element will be affected.

Once deleted, the data element no longer returns the correct value at run-time. It either returns an empty string or the name of the deleted data element wrapped in %% (example: `%data-element-name%`). This behavior is configurable within Property Settings.

You can resolve these dependencies before or after you delete the data element.

#### Extensions

All other resources (rules, rule components, and data elements) are provided by extensions.

Rule components and data elements depend on extensions for their behavior, but also just to be displayed in the Data Collection user interface. If you delete the extension before you resolve dependencies, you'll no longer be able to view these orphaned resources. These orphaned resources appear in list views, but you'll receive an error when you try to open the detail view.

For this reason, you should be very careful when deleting extensions and you should resolve dependencies before you delete them.

### Remove from libraries

Before you can delete a resource, you must remove it from any libraries that contain it. This process is different depending on the state of the library.

#### Development

1. Open the library.
1. Remove the resource.
1. Save the library.
1. Delete the resource.

#### Submitted or approved

1. Reject the library (moves it back to Development).
1. Follow the above steps to remove a resource from a development library.

#### Production

1. Disable the resource.
1. Publish the disabled resource through to Production.
1. Delete the resource.

## Delete a resource

From the appropriate list view, select the resource you want to delete, then select **[!UICONTROL Delete]**.

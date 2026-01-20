---
title: Backwards Compatibility Standard
description: Learn about the backward compatibility standard in Adobe Experience Platform that ensures updated versions of tag extensions are compatible with previous versions.
exl-id: 325390f1-88c7-4b9e-a484-5442ca649bdf
---
# Backwards compatibility standard

Updates to a tag extension in Adobe Experience Platform must be backward compatible with previous versions of the extension. This means that:

* Any modifications to the primary components of the extensions must be compatible with previous versions.  This includes extension configuration, event types, condition types, action types, data element types, and shared modules.
* Components that a user has created with the older extension version must be able to pass validation against the schemas provided by the newer version.
* An Adobe Experience Platform user should be able to install an updated version of your extension and have everything they've done continue to function exactly as is until they make deliberate changes.

## Allowed changes

The following types of changes to your extension are allowed:

1. You may add new components (event types, condition types, etc).
1. You may add new optional fields to your extension configuration settings.
1. You may change required fields to optional fields.

## Forbidden changes

The following types of changes to your extension are not allowed:

1. You may not rename a component.
1. You may not remove a component.
1. You may not remove a field from a component.
1. You may not change optional fields to required fields.
1. You may not add new required fields.
1. You may not change the API of existing shared modules.

If you make any of these changes, anyone who has installed your extension in their property will immediately begin to have problems such as:

* Rules no longer render properly because one of the rule components is looking for a component that doesn't exist
* All builds fail because the Library includes an upstream resource that no longer exists on the Extension
* All builds fail because the Library includes a resource with settings that fail validation against the new schema

Particularly in this second case, users can be left without a remedy and no way to fix their property so they can publish again.

## Removing functionalities

There may be scenarios when you have a valid business reason and you think you really do need to make a forbidden change (listed above).  You still can't do it, but here's what you can do instead:

1. I want to remove a component => Make a new component and deprecate the old one
1. I want to remove a field from a component => Make a new component with that field removed and deprecate the old one
1. I want to change an optional field to be required => Make a new component requiring the desired field and deprecate the old one
1. I want to change the API of a shared module => Make a new shared module and deprecate the old one

You may be picking up on a common thread.  That's good.  When deprecating an old component, you'll want to notify users of your extension that it has been deprecated and that they need to switch to a new one.  A few suggestions on communicating with users:

* Update the display name of the old component to include "(Deprecated)".
* Update the view for the old component to have big red warning text that this component has been deprecated and that the user should switch to the new component.
* Update your module code to log deprecation notices in the console.  Keep in mind that these will show to end-users, so keep it clean and somewhat generic.
* Send nice friendly email messages from your CRM system.

In cases where the old functionality is not just undesired, but actually doesn't exist in your solution anymore, there is one additional step you can take - but should only do after you've provided notice to your users and given them time to update.

* Update the contents of your module so that it doesn't do anything.  This will remove the functionality from the user's deployed library in the next build, but won't break any of their rules or builds.

### Restoring removed functionalities

If you've already removed functionality and are hearing from users that things are breaking as a result, you must release a new version of your extension that restores the components you removed.  

Restoring them in a deprecated state as described above is fine, but they need to exist.

As an example, let's say you have a v1.0 that has Component XYZ that people are using.  Then, you release a v1.1 that no longer has Component XYZ.  You hear from your users that your extension broke their properties and you need to fix it.  You must release a v1.2 that brings back Component XYZ (perhaps in a deprecated state--that's up to you) and have your users upgrade to v1.2 in order to make things work again.

---
title: Remove Resources from a Library
description: Learn how to remove resources from a tag library.
exl-id: ad1dd093-962c-4f6d-85eb-c5ed1b644927
---
# Remove resources from a library

When you no longer want a resource to have an effect inside a build, you must remove it from the library that contains that resource and create a new build.

>[!IMPORTANT]
>
>Resources in libraries are interdependent. Removing a resource from a build may change the behavior of other resources in the build.

The removal process works a little differently depending on which state the library is in.

## Development libraries

Resources in Development libraries can be directly manipulated.

1. Open the library.
1. Remove the resource.
1. Save the library.
1. Build the library.

## Submitted and Approved libraries

Resources that are in Submitted or Approved libraries cannot be directly manipulated. You'll have to move the library back to Development state.

1. Reject the library (moves library back to Development).
1. Follow the steps in "Development libraries," above, to remove resources from Development libraries.

## Production libraries

Removing resources from a Production library is the most complex case. You cannot manipulate the library resources in this state, and you also cannot move these libraries back to Development state.

Instead, you must disable the resource. This disabling is a change that you then add to a Development library just like any other change. Once this change is put into Production, the resource is moved from your Production library.

1. Disable the resource.
   1. Select the resource from the list view.
   1. Select **[!UICONTROL Disable]**.
1. Create a new Development library.
1. Add the `latest` version of the disabled resource.
1. Save and Build.
1. Follow your normal process for promoting libraries to Production.
1. Publish to Production to remove the resource.

---
title: Extension Upgrades
description: Learn how extension upgrades are packaged and represented in the extension catalog.
exl-id: 4a7e0c5c-4bd1-4fb8-8509-f88a0aa42ac4
---
# Extension upgrades

Extension developers continually add new features to their extensions, and frequently fix bugs. These updates are packaged into new versions of an extension and made available in the extensions catalog as upgrades.

## Extension Catalog

When an extension developer has provided a new version of the extension, that new version becomes available in the extension catalog. The catalog only shows the most recent version of an extension. You cannot install any extension version other than `latest`.

When you install an extension to your property, the currently available version is installed and your property remains with that specific version from that point forward, even if newer versions are added to the catalog.

## Upgrade Notifications

When you have installed an extension to your property, and a newer version is available in the catalog, you will see an [!UICONTROL Upgrade] button on the extension card when you view the Installed Extensions page.

You'll also see a notice when editing resources that are provided by that extension.

## Upgrades are Permanent

If you want to upgrade to a newer version available in the catalog, you must install that upgrade yourself. An upgrade is a "change" that must be added to a library, tested, and published before it impacts your deployed tags.

Upgrading should not be taken lightly. You should not upgrade unless you are prepared to test the new extension and are ready to deploy it. Once the upgrade has been added to your property, it must be included in all libraries. Any library that does not include the upgraded extension will fail at build time.

There is currently no capability to downgrade your extension to a previous version. Once you've upgraded (whether you publish or not), the new extension version is on your property to stay.

## Upgrade Process

Installing an upgrade is pretty much the same as installing the extension for the first time.

1. Select **[!UICONTROL Upgrade]** to go to the [!UICONTROL Extension Configuration] screen.
1. Make any configuration changes you'd like to make.
1. Select **[!UICONTROL Save]**.

The upgrade is not actually performed until you hit **[!UICONTROL Save]**. At any time previous to that, you can select [!UICONTROL Cancel] and stay with the currently installed version. Selecting **[!UICONTROL Save]** is the point of no return.

Extension Upgrades are not permitted if you have a library in the `Approved` or `Submitted` state.  This is because the next build must contain the new extension version.  For a library that is `Approved` or `Submitted`, the next build is the production build.  That build would fail since it doesn't contain the latest version, so the workflow is to publish or reject libraries in the `Approved` or `Submitted` state _before_ upgrading the extension.

## Publishing an Upgrade

After the upgraded extension is installed on your property, you must include it in all Libraries from that point forward. A build failure message displays for any libraries that do not include it.

Beyond that, adding the upgraded extension to your library is the same as [adding any other change](../../publishing/libraries.md) to a library.

From the [!UICONTROL Edit Library] screen, you can use the "[!UICONTROL Add All Changed Resources]" button or you can use the "[!UICONTROL Add a Resource]" button and select the upgraded extension on its own.

>[!TIP]
>
>It is possible for extension developers to add new configuration items to their extension views in order to enable new functionality.  If you see build failures after upgrading to a new extension version - and you have isolated to build failures to that extension -  then the first thing to do is go to the extension's Configure page and be sure to Save (even if you didn't change anything).  Then add the new change to your library and try to build again.

After you have added the extension upgrade to your library, you can follow the steps outlined in [publishing flow](../../publishing/publishing-flow.md) to publish your library through to Production.

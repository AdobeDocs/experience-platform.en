---
title: Release an Extension
description: Learn how to privately or publicly release a tag extension in Adobe Experience Platform.
exl-id: a5eb6902-4b0f-4717-a431-a290c50fb5a6
---
# Release an extension

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

Once testing and documenting are complete, the extension is ready for release. There are currently two types of releases that you can perform:

- **Private release**: The completed extension is available to all properties within your company, but is not available to any other companies in Adobe Experience Platform.
- **Public release**: The completed extension is available in the public marketplace for all Adobe Experience Platform users.

>[!NOTE]
>
>Once you have released your extension, you can no longer make changes to it and you cannot un-release it.  Once released, bug fixes and feature additions are accomplished by `POST`ing a new version of your extension package and following the above testing and release steps on that new version.

You must release your extension as a private extension before you can release it publicly.

## Private release

The easiest way to release your extension with private availability is to use the [tag extension releaser](https://www.npmjs.com/package/@adobe/reactor-releaser). More instructions are found within its documentation.

If you'd like to release your extension with private availability using the API directly, see the example call for [privately releasing an extension package](../../api/endpoints/extension-packages.md/#private-release) in the API docs for more detail.

## Public release

Once you have completed the private release, you can ask Adobe to release it publicly.  This will make your extension available in the public catalog. Any data collection user can install your extension to any property.

Please complete the [public release request form](https://www.feedbackprogram.adobe.com/c/r/DCExtensionReleaseRequest) to begin the release process.

---
title: Release an Extension
description: Learn how to privately or publicly release a tag extension in Adobe Experience Platform.
exl-id: a5eb6902-4b0f-4717-a431-a290c50fb5a6
---
# Release an extension

Once testing and documenting are complete, the extension is ready for release. There are currently two types of releases that you can perform:

- **Private release**: The completed extension is available to all properties within your company, but is not available to any other companies in Adobe Experience Platform.
- **Public release**: The completed extension is available in the public marketplace for all Adobe Experience Platform users.

>[!NOTE]
>
>Once you have released your extension, you can no longer make changes to it and you cannot un-release it.  Once released, bug fixes and feature additions are accomplished by `POST`ing a new version of your extension package and following the above testing and release steps on that new version.

You must first release your extension as a private extension before it can be released publicly.

## Private release

The easiest way to release your extension with private availability is to use the [tag extension releaser](https://www.npmjs.com/package/@adobe/reactor-releaser).

```bash
npx @adobe/reactor-releaser
```

`npx` allows you to download and run an npm package without actually installing it on your machine. This is the simplest way to run the releaser.

>[!NOTE]
> By default, the releaser expects Adobe I/O credentials for a server-to-server Oauth flow. The legacy `jwt-auth` credentials
> can be used by running `npx @adobe/reactor-releaser@v3.1.3` until deprecation on January 1, 2025. The parameters required
> to run the `jwt-auth` version can be found [here](https://github.com/adobe/reactor-releaser/tree/9ea66aa2c683fe7da0cca50ff5c9b9372f183bb5).

The releaser requires you to input only a few pieces of information. The `clientId` and `clientSecret` can be retrieved from the Adobe I/O console. Navigate to the [Integrations page](https://console.adobe.io/integrations) in the I/O console. Select the correct Org from the dropdown, find the right integration, and select **[!UICONTROL View]**.

- What is your `clientId`? Copy and paste this from the I/O Console.
- What is your `clientSecret`? Copy and paste this from the I/O Console.

The releaser will read the `name` and `platform` fields from your extension manifest and query the API for a matching extension package in Development availability.
The releaser will then ask you to confirm that it found the correct extension package that you would like to release to private availability.

If you'd like to release your extension with private availability using the API directly, see the example call for [privately releasing an extension package](/help/tags/api/endpoints/extension-packages.md#private-release) in the API docs for more detail.

## Public release

Once you have completed the private release, you can ask Adobe to release it publicly.  This will make your extension available in the public catalog. Any data collection user can install your extension to any property.

Please complete the [public release request form](https://www.feedbackprogram.adobe.com/c/r/DCExtensionReleaseRequest) to begin the release process.

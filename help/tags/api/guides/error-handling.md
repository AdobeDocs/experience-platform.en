---
title: Error Handling
description: Learn how error are handled in the Reactor API.
---
# Error handling

When a problem occurs while making a call to the Reactor API, an error may be returned in one of the following ways:

* **Immediate errors**: When performing a request that results in an immediate error, an error response is returned by the API, with the HTTP status reflecting the general type of error that occurred.
* **Delayed errors**: When performing an API request that results in a delayed error (such as an asynchronous activity), an error may be returned by the API in the `meta.status_details` of a related resource.

## Error format

Error responses aim to conform to the [JSON:API errors specification](http://jsonapi.org/format/#errors), and generally adhere to the following structure:

```json
{
  "errors": [
    {
      "id": "8a5526da-ab12-4be9-b084-2efe537f388c",
      "status": "404",
      "code": "not-found",
      "title": "Record Not Found",
      "meta": {
        "request_id": "jfb0dQ2e0XVTkQ6AOfEJFfTDjguw9x3d"
      },
      "source": {
        "pointer": "/data"
      }
    }
  ]
}
```

| Property | Description |
| --- | --- |
| `id` | A unique identifier for this particular occurrence of the problem. |
| `status` | The HTTP status code applicable to this problem, expressed as a string value. |
| `code` | An application-specific error code, expressed as a string value. |
| `title` | A short, human-readable summary of the problem that **should not change** from occurrence to occurrence, except for purposes of localization. |
| `detail` | A human-readable explanation specific to this occurrence of the problem. Like `title`, this field’s value can be localized. |
| `source` | An object containing references to the source of the error, optionally including any of the following members:<ul><li>`pointer`: a [JSON Pointer (RFC6901)](https://datatracker.ietf.org/doc/html/rfc6901) string that references the associated entity in the request document (such as `/data` for a primary data object, or `/data/attributes/title` for a specific attribute).</li></ul> |
| `meta` | An object containing non-standard metadata about the error. |

{style="table-layout:auto"}

## Error reference

The following table lists the different errors that the API can return.

| Error title | Description |
| --- | --- |
| `authentication-failure` | Your IMS access token is invalid. You can get a new access token by signing in again. Or for technical accounts, generating a new JWT and swapping for an IMS access token. |
| `connection-refused` | A connection to the server could not be established. |
| `decrypt-bad-passphrase` | The data could not be decrypted with the provided passphrase. |
| `decrypt-failed` | The data could not be decrypted with the provided private key. Ensure the key works locally and that whitespace has been trimmed. |
| `decrypt-no-data` | The data cannot be decrypted without a private key. Please provide an encrypted private key. |
| `delegate-descriptor-unresolved` | The extension did not provide the expected definition of this delegate descriptor. The extension may need to be updated. |
| `deleted-resources` | The resources that you are trying to add to your Library have been deleted. |
| `environment-in-use` | An Environment can only be assigned to one Library at a time. Option 1 is to choose a different environment. Option 2 is to free up this Environment by moving the Library to another Environment or deleting the Library. |
| `environment-required` | Your Library must have an Environment assigned before you can create a Build. |
| `extension-not-found` | The extension that defines a data element or rule component is not included in the library. Ensure that all the required extensions have been added to your library. |
| `extension-package-path-error` | A path defined in extension.json was incorrectly constructed. |
| `extension-package-transform-definition-error` | You have defined an invalid transform for an object property. Each object property can have one transform defined and it must be a file transform or a function transform. |
| `extension-package-zip-error` | An error occurred while unzipping the ExtensionPackage or zipping the files for distribution. |
| `host-in-use` | A Host may not be deleted if one or more Environments are using it. |
| `host-required` | The Environment assigned to this Library does not have a valid Host. Check which Environment is assigned to your Library. Then assign a valid Host to that Environment. |
| `host-type-error` | Only SFTP Hosts need to have credentials verified before they can be used, so the pretest is only available for that Host type. |
| `illegal-custom-code-transform` | You are not allowed to use the customCode transform. Please specify a function or file transform. |
| `ims-not-authorized` | An unknown error occurred authorizing your account. Please try again later. |
| `ims-session-error` | There is an issue with the signed-in session. Please log out and log in again. |
| `internal-error` | An internal error occurred. Please wait a few minutes and try again. If the issue persists, please contact Client Care. |
| `invalid-data_element` | An invalid data element cannot be added to a library. |
| `invalid-embed_code` | Either this is not a valid embed code or you're trying to link it to a development or staging environment. Dynamic Tag Management (DTM) embed codes can only be linked to production environments. |
| `invalid-extension` | An invalid extension cannot be added to a library. |
| `invalid-extension_package_id` | You can only modify some of the object properties of an Extension Package. You tried to modify one of the ones that is not allowed. |
| `invalid-new-owner-org-id` | The Org ID you tried to assign is not a valid Org ID. |
| `invalid-org` | Your active Org doesn't have access to the API. Check that you're using the correct Org. |
| `invalid-rule` | An invalid rule cannot be added to a library. |
| `invalid-settings-syntax` | A syntax error was encountered while parsing the settings JSON. |
| `library-file-not-found` | A required file defined in extension.json could not be found inside the zip package. |
| `minification-error` | The code could not be compiled due to invalid code or ES6 code. |
| `multiple-revisions` | Only one revision of each resource can be included in a library. |
| `no-available-orgs` | This user account does not belong to a product profile that has access to tags. Use the Admin Console to add this user to a product profile with tags rights. |
| `not-authorized` | This user account does not have the necessary permissions to perform this action. |
| `not-found` | The record could not be found. Verify the id of the object that you're trying to retrieve. |
| `not-unique` | The name you are trying to use is already in use. For this resource, the 'name' property must be unique. |
| `public-release-not-authorized` | The public release of extensions is coordinated by `launch-ext-dev@adobe.com`. See the document on [releasing extensions](../../extension-dev/submit/release.md) for more information. |
| `read-only` | This resource is read-only and cannot be modified. |
| `session-timeout` | The user session has expired. Please log out and log in again. |
| `sftp-authentication-failed` | Authentication failed for the SFTP connection. |
| `sftp-connection-timeout` | The SFTP connection has timed out. |
| `sftp-exception` | An exception was encountered when using SFTP to connect to the server. |
| `sftp-status-exception` | An SFTP exception was encountered while trying to communicate with the server. |
| `socket-error` | A socket error was encountered while trying to communicate with the server. |
| `ssh-disconnect` | The SSH session was disconnected. |
| `timeout-error` | The connection with the server timed out. |
| `unknown-error` | An unexpected error occurred. You can try again later or give Customer Care a call and explain what you were doing when it happened. |
| `unsupported-custom-code-language` | A custom code language was supplied that is not supported. |
| `upgraded-extension-required` | Once you've installed an extension upgrade, you must include it in all Libraries until the upgrade gets to Production. The only exception is if the extension has not been published yet. |
| `upstream-build-required` | A successful Build for the upstream Library is required before you can build this one. |

{style="table-layout:auto"}

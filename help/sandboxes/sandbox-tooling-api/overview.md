---
title: Sandbox Tooling API Guide
description: Sandbox Tooling in Adobe Experience Platform  allows you to export and import a snapshot of sandbox configurations between sandboxes. 
---

# [!DNL Sandbox] tooling API guide

The [!DNL Sandbox] tooling API provides several endpoints that allow you to export and import snapshots between sandboxes available to you within your organization. All interactions occur via HTTP endpoints. The source sandbox is checked for artifacts before exporting a snapshot. Azure Blob stores the JSON for those items. When an import request is made, an Azure Blob snapshot is obtained and utilized as a template to produce almost similar artifacts for the destination sandbox.

These endpoints are outlined below. Please visit the individual endpoint guides for details and refer to the [getting started guide](./getting-started.md) for important information on required headers, reading sample API calls, and more.

## Packages

The Sandbox Tooling package is a collection of Artifact definitions.  Fields are:

Package ID (globally unique)
Package name
Package description
IMS Org (required)
User ID (creator)
List Artifact

See the [packages endpoint guide](./packages.md) for more information on working with packages in the API.

## Tools

/tools/artifacts/dependencies    POST    Traverses and returns the dependency tree for all Artifacts related to the root Artifact provided in the POST body.
/tools/artifacts/{artifactType}    GET    Lists all Artifacts (by artifactType) in this IMS Org + Sandbox
/tools/artifact/    POST    Return the JSON for the requested Artifact
/tools/abs/file/    POST    Return the contents of the requested file.  This file is located in Azure Blob Store, is always JSON-formatted, and is most likely the Artifact JSON (but might be the manifest)
/tools/abs/files/{snapshotId}    GET    Return a list of all files by Snapshot ID.

See the [tools endpoint guide](./tools.md) for more information on working with packages in the API.

## Next steps

To begin making calls using the sandbox tooling API, read the [getting started guide](./getting-started.md) then select one of the endpoint guides to learn how to use specific endpoints.

---
title: Sandbox Tooling API Guide
description: Sandbox Tooling in Adobe Experience Platform allows you to export and import a snapshot of sandbox configurations between sandboxes.
exl-id: 4bcc095b-5db1-4824-8b7c-c2ea5a393b98
---
# [!DNL Sandbox] tooling API guide

The [!DNL Sandbox] tooling API provides several endpoints that allow you to export and import snapshots between sandboxes available to you within your organization. All interactions occur via HTTP endpoints. The source sandbox is checked for artifacts, which are the objects contained within a package, before exporting a snapshot. When an import request is made, an [!DNL Azure Blob] snapshot is obtained and utilized as a template to produce almost similar artifacts for the destination sandbox. See the [sandbox tooling](../ui/sandbox-tooling.md#objects-supported-for-sandbox-tooling) documentation for a list of supported objects and limitations.

These endpoints are outlined below. Please visit the individual endpoint guides for details and refer to the [getting started guide](./getting-started.md) for important information on required headers, reading sample API calls, and more.

## Packages {#packages}

The sandbox tooling packages endpoint allows you to manage packages. The sandbox tooling package is a collection of artifact definitions including package ID, name, description, org ID, and creator ID. See the [packages endpoint guide](./packages.md) for more information on working with packages in the API.

## Tools {#tools}

The sandbox tooling tools endpoint allows you to to independently fetch the job JSON data. See the [tools endpoint guide](./tools.md) for more information on retrieving job JSON data in the API.

## Next steps {#next-steps}

To begin making calls using the sandbox tooling API, read the [getting started guide](./getting-started.md) then select one of the endpoint guides to learn how to use specific endpoints.

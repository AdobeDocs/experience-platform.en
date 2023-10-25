---
title: Sandbox Tooling API Guide
description: Sandbox Tooling in Adobe Experience Platform allows you to export and import a snapshot of sandbox configurations between sandboxes. 
---
# [!DNL Sandbox] tooling API guide

The [!DNL Sandbox] tooling API provides several endpoints that allow you to export and import snapshots between sandboxes available to you within your organization. All interactions occur via HTTP endpoints. The source sandbox is checked for artifacts before exporting a snapshot. When an import request is made, an [!DNL Azure Blob] snapshot is obtained and utilized as a template to produce almost similar artifacts for the destination sandbox.

These endpoints are outlined below. Please visit the individual endpoint guides for details and refer to the [getting started guide](./getting-started.md) for important information on required headers, reading sample API calls, and more.

## Jobs {#jobs}

The sandbox tooling jobs endpoint allows you to view a list of import jobs. See the [packages endpoint guide](./jobs.md) for more information on retrieving import jobs in the API.

## Packages {#packages}

The sandbox tooling packages endpoint allows you to manage packages. The sandbox tooling package is a collection of artifact definitions including package ID, name, description, org ID, and creator ID. See the [packages endpoint guide](./packages.md) for more information on working with packages in the API.

## Tools {#tools}

The sandbox tooling tools endpoint allows you to list and retrieve artifacts and snapshots that are stored in [!DNL Azure Blob]. See the [tools endpoint guide](./tools.md) for more information on retrieving snapshots in the API.

## Next steps {#next-steps}

To begin making calls using the sandbox tooling API, read the [getting started guide](./getting-started.md) then select one of the endpoint guides to learn how to use specific endpoints.

---
title: Sandbox Tooling Tools API Endpoint
description: The /tools endpoint in the Sandbox Tooling API allows you to list and retrieve artifacts and snapshots in Adobe Experience Platform.
---
# Tools endpoint


## Job details

<base service URL>/tools/job/{jobId}

## The UI needs to display all dependent Artifacts related one or more root Artifacts

 /tools/artifacts/dependencies

Traverses and returns the dependency tree for all Artifacts related to the root Artifact provided in the POST body.

## The UI needs to list all Artifacts of a specific type

/tools/artifacts/{artifactType}

Returns all Artifacts (by artifactType) in this IMS Org + Sandbox using the natural order provided by the backend API. Alternatively, the UI may query the backend API directly (or via GQL) as Exim does not (yet) support paging.

## The UI needs the JSON of a specific Artifact

/tools/artifact/

Return the JSON for the requested Artifact

## The UI needs the contents of a specific file within a Snapshot

/tools/abs/file/

Return the contents of the requested file.  This file is located in Azure Blob Store, is always JSON-formatted, and is most likely the Artifact JSON (but might be the manifest)

## The UI needs a listing of all files in a Snapshot

/tools/abs/files/{snapshotId} 

Return a list of all files by Snapshot ID.

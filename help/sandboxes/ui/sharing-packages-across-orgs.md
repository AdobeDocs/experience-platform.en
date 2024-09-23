---
title: Sharing Packages Across Organization Using Sandbox Tooling
description: Learn how to use Sandbox Tooling in Adobe Experience Platform to share packages across different organizations.
badge: Beta
---
# Share packages across different organizations using Sandbox Tooling

>[!NOTE]
>
>Sharing packages across organization is currently in beta and only available to select beta customers.

This document covers how to use sandbox tooling in Adobe Experience Platform to share packages across different organizations.

Improve configuration accuracy across sandboxes and seamlessly export and import sandbox configurations between sandboxes across different organizations with the sandbox tooling feature. There are two types of packages that can be shared:

**Private package**

Private packages can only be shared to different organizations that have approved the sharing request from the source organization via an opt-in allow list.

**Public package**

Public packages are available to import without any additional approval. These pacakages can be published in a partner website, blogs, or Platform. Packages can be copied and pasted from these channels into the target organization using the package payload.

## Share a private Package




To allow sharing the packages to partner orgs.

Sandbox Tooling Sharing across orgs

Major UI functionalities
- Orgs partnership management
    - Start the partnership request from Source org by providing the orgId of Target orgs
    - Track the status of partnership requests on Source  org
    - Show the incoming partnership requests on Target orgs - allow them to Accept or Decline
    - Manage existing partnership - e.g. Cancel partnership
- Sharing Packages to the partner orgs
    - Provide a sharing action on package inventory and details page
    - Allowing users to pick multiple partner orgs from a picker
    - Package sharing is async, so the sharing status should be shown in a table

Package Sharing

- On the “Packages” tab we will have inline action “Share”, which opens a popup.
- The "Share" button is shown only when following conditions are met
    - User has permissions
    - Private and Published package
    - The package belongs to current sandbox
- We show few details about package, and a multi-select dropdown of partner orgs (Approved one only) with auto suggest feature.
- User can select multiple orgs and then click the confirm button on dialog
- We redirect the user on “Sharing status” tab,
- Here we show the inventory of all shared packages, with a live sharing status (polling will be applied here)
- On click on any row, will open the right rail, which show the details about package + sharing orgs etc, along with error details (if any)

Tech spec:

- Fetch approved orgs
    - Args: none
    - Returns: the list of all approved orgs, would be used in multi select dropdown
- Start package sharing
    - Args: packageId: string,  orgIds[]: list
    - Returns: as this is async behavior so no use of returned value, any upfront error can be returned
- Fetch Package Sharing status
    - Args: a list of package sharing request with status.
        - This can be a long list as many packages can be shared across many orgs, so pagination, sorting, searching, filtering etc need to be supported at API level.
    - Returns: the list of package sharing packageSharingJobId, packageId, packageName, targetOrgs, status, other metadata line createdBy, modifiedTime etc.
- Fetch details of a single package sharing
    - Args: packageSharingJobId
    - Returns: all details of that package sharing along with error details etc. (to be shown in right rail)

Phase3

Package availability - public or private

- On the “Packages” tab we will have 2 radio button to select “Private” or “Public” packages
- On selecting any mode we will show the respective inventory
- User would have the inline action to change the privacy of package any time means user can change from “Public -> Private” OR “Private to Public” anytime.
- All existing packages are by default “Private”
- For Private packages only we will the Share inline action - which starts the Package sharing feature
- Public packages are not allowed for package sharing. There would be another inline action called Copy package payload, using which we can copy the package JSON.
- Which can be shared and further used by any other org to create the package with this copied JSON payload.

Tech spec:

- package inventory based on availability -> public or private filter
    - Args: additional  public or private filter
    - Returns: same package listing with additional availability property
- Package details
    - Args: same as today
    - Returns: same package detail with additional availability property
- changeAvailablity
    - Args: packageId + availability
    - Returns: status code
- Copy package payload for public packages
    - Args: packageId
    - Returns: JSON payload of package
- Create package with JSON Payload
    - Args: JSON Payload
    - Returns: same as existing createPackage
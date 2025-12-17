---
title: Self-Hosting Libraries
description: Learn how to implement self-hosting for your tag library builds in Adobe Experience Platform.
exl-id: 8c3bf202-de7a-46e0-801f-0cede24865fd
---
# Self-hosting libraries

Tags in Adobe Experience Platform allows for the production of a set of files called a [build](../builds.md). This set of files control the behavior of your application at run-time. 

Builds need to be hosted somewhere so client devices can retrieve them at run-time as needed.

Experience Platform can either manage the hosting of these files for you or you can do it yourself.

## Managed by Adobe {#managed-by-adobe}

Adobe is not in the business of web-hosting. If you choose to have Adobe manage the hosting, your builds are delivered to a third-party content delivery network (CDN) that we have a contract with.

Currently, the primary CDN provider is Akamai. Files hosted on Akamai have a domain of `assets.adobedtm.com`.

### Why use managed hosting?

The primary reason to use managed hosting is convenience. It is easier to create the required host, and you don't have to worry about maintenance.

## Self-hosting

If you don't want Adobe to manage your hosted files, you must host them yourself. To host your files, you need to get the completed builds from Experience Platform and be responsible for getting the files through your company's release cycle onto company-managed servers.

### Why use self-hosting?

There are a number of reasons to choose to host your own build files.

* Some browsers block the assets.adobedtm.com domain based on the privacy settings the end-user has configured
* Self-hosting reduces the required number of DNS lookups
* You have specific headers you need to set for security
* Your cache-control requirements differ from the Adobe default settings
* You want more control over the location of edge nodes
* Your organization has security and legal requirements that prevent you from using the Adobe-managed option

### How to self-host

There are two methods you can use to acquire completed builds so that you can self-host.

* Download
* Direct Delivery

#### Download

The builds can be delivered as a packaged .zip file (encryption optional). You can then unzip the package and insert the contents into your release cycle to place them on your own servers.

Use a [Managed by Adobe](self-hosting-libraries.md) host and select the [Archive](../environments.md) option on your environment. The environment provides a download link. Whenever a build is created, you can retrieve it from the environment's download link.

#### Direct Delivery

The builds can also be delivered directly to an SFTP server that you created. You take responsibility to get these filed into your release cycle and push them live.

To perform a direct delivery, you should create an [SFTP host](sftp-host.md) and assign that host to your environment. Whenever you build a library in that environment, the files are delivered to your SFTP server.

---
title: Self-Hosting Libraries
description: Learn how to implement self-hosting for your tag library builds in Adobe Experience Platform.
exl-id: 8c3bf202-de7a-46e0-801f-0cede24865fd
TQID: https://experienceleague.adobe.com/xR1njfCzy8eQRSXyA3mOuNzgyowIky2mox3RPBb9O5I
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: e2b4267c-3fe4-4c51-b9f5-7aefcfa5996c
    internal-label: Hosts
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
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

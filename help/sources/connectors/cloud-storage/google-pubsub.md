---
title: Google PubSub Source Overview
description: Learn how to connect Google PubSub to Adobe Experience Platform using APIs or the user interface.
badgeUltimate: label="Ultimate" type="Positive"
exl-id: 7c78173d-2639-47cb-8935-77fb7841a121
---
# [!DNL Google PubSub] source

>[!IMPORTANT]
>
>The [!DNL Google PubSub] source is available in the sources catalog to users who have purchased Real-Time Customer Data Platform Ultimate.

Adobe Experience Platform provides native connectivity for cloud providers like [!DNL AWS], [!DNL Google Cloud Platform], and [!DNL Azure], allowing you to bring data from these systems into Platform for use in downstream services and destinations.

Cloud storage sources can bring your data into Platform without the need to download, format, or upload. Ingested data can be formatted as XDM JSON, XDM Parquet, or delimited. Every step of the process is integrated into the sources workflow. Platform allows you to bring in data from [!DNL Google PubSub] in real time.

## Connect [!DNL Google PubSub] to Platform

The documentation below provides information on how to connect [!DNL Google PubSub] to Platform using APIs or the user interface:

### Using APIs

* [Create a Google PubSub source connection using the Flow Service API](../../tutorials/api/create/cloud-storage/google-pubsub.md)
* [Collect streaming data using the Flow Service API](../../tutorials/api/collect/streaming.md)

### Using the UI

* [Create a Google PubSub source connection in the UI](../../tutorials/ui/create/cloud-storage/google-pubsub.md)
* [Configure a dataflow for a cloud storage connection in the UI](../../tutorials/ui/dataflow/streaming/cloud-storage-streaming.md)

## Generate your [!DNL Google PubSub] OAuth 2.0 credentials {#credentials}

### Decide on the type on the type of OAuth 2.0 mechanism that you will use

### Create a service account

A **service account** is a type of account typically used by an application or compute workload, rather than a person. A service account is identified by its email address, which is unique to the account.

On one hand, service accounts are **principals** - you can grant service accounts access to [!DNL Google Cloud] resources. For example, you could grant a service account the Compute Admin role `(roles/compute.admin)` on a given project. This then allows  the service account to be able to manage Compute Engine resources in that particular project.

On the other hand, service accounts are also resources - you can give other principals permission to access the service account. For example, you could grant a user the Service Account User role `(roles/iam.serviceAccountUser)` on a service account to let the user attach that service account to resources. Alternatively, you can grant a user the Service Account Admin role `(roles/iam.serviceAccountAdmin)` to let the user complete tasks such as view, edit, disable, and delete the service account.

* Go to IAM & Admin -> Service Accounts
* Select on [!DNL Create Service Account]
* Create Service Account
* Grant Project Level Permission
* Grant user access to your Service Account

### Generate keys for your Service Account

### Grant Permissions at Topic and Subscription Level
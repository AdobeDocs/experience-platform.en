---

title: Azure Blob Source Connector Overview
description: Learn how to connect your Azure Blob account to Experience Platform
exl-id: 62adc74f-3570-42c7-9ae6-3ddbc09eccc7
---
# [!DNL Azure Blob Storage] source

[!DNL Azure Blob Storage] is a cloud-based object storage service provided by [!DNL Microsoft Azure]. It's designed to store large amounts of unstructured data, such as text, images, videos, backups, and logs. You can use [!DNL Azure Blob Storage] to store and manage large amounts of unstructured data such as documents, images, videos, and audio files. It's ideal for backing up and archiving data, supporting disaster recovery, and handling big data workloads for analytics.

Use the [!DNL Azure Blob Storage] source to connect your account and ingest data from [!DNL Azure Blob Storage] to Adobe Experience Platform.

## Prerequisites {#prerequisites}

Read the following sections to complete the prerequisite setup before you connect your [!DNL Azure Blob Storage] account to Experience Platform.

### IP address allowlist 

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform. Read the guide on [allowlisting IP addresses to connect to Experience Platform](../../ip-address-allow-list.md) for more information.

>[!IMPORTANT]
>
>The [!DNL Azure Blob] source does not support same-region connectivity to Experience Platform. If your [!DNL Azure] instance is using the same network region as Experience Platform, then a connection to Experience Platform sources cannot be established. Currently, only cross-region connectivity is supported.

### Naming constraints for files and directories

The following is a list of constraints you must account for when naming your cloud storage file or directory.

- Directory and file component names cannot exceed 255 characters.
- Directory and file names cannot end with a forward slash (`/`). If provided, it will be automatically removed.
- The following reserved URL characters must be properly escaped: `! ' ( ) ; @ & = + $ , % # [ ]`
- The following characters are not allowed: `" \ / : | < > * ?`.
- Illegal URL path characters not allowed. Code points like `\uE000`, while valid in NTFS filenames, are not valid Unicode characters. In addition, some ASCII or Unicode characters, like control characters (0x00 to 0x1F, \u0081, etc.), are also not allowed. For rules governing Unicode strings in HTTP/1.1 see [RFC 2616, Section 2.2: Basic Rules](https://www.ietf.org/rfc/rfc2616.txt) and [RFC 3987](https://www.ietf.org/rfc/rfc3987.txt).
- The following file names are not allowed: LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, PRN, AUX, NUL, CON, CLOCK$, dot character (.), and two dot characters (..).

### Authenticate [!DNL Azure Blob Storage] to Experience Platform {#authentication}

You can connect your [!DNL Azure Blob Storage] account to Experience Platform using the following authentication types:

- **Account key authentication**: Uses the storage account's access key to authenticate and connect to your [!DNL Azure Blob Storage] account.
- **Shared access signature (SAS)**: Uses a SAS URI to provide delegated, time-limited access to resources in your [!DNL Azure Blob Storage] account.
- **Service principal based authentication**: Uses an Azure Active Directory (AAD) service principal (client ID and secret) to securely authenticate to your Azure Blob Storage account.

>[!BEGINTABS]

>[!TAB Account key authentication]

Provide values for the following credentials to connect your [!DNL Azure Blob Storage] account to Experience Platform using account key authentication.

| Credential | Description |
| --- | --- |
| `connectionString` | The [!DNL Azure Blob Storage] connection string for your storage account. This string contains the information required to authenticate and connect to your [!DNL Azure Blob Storage] instance. Example format: `DefaultEndpointsProtocol=https;AccountName={ACCOUNT_NAME};AccountKey={ACCOUNT_KEY};EndpointSuffix=core.windows.net` |
| `container` | The name of the [!DNL Azure Blob Storage] container where your data files are stored. A container organizes a set of blobs, similar to a directory in a file system. |
| `folderPath` | The path within the specified container where your files are located. This is an optional subdirectory path (virtual folder) inside the container. If left blank, the root of the container is used. |
| `connectionSpec.id` | The connection spec ID returns a source's connector properties, including authentication specs related to creating the base and source connections. The connection spec ID for [!DNL Azure Blob Storage] is `4c10e202-c428-4796-9208-5f1f5732b1cf`. **Note**: This credential is only required when connecting through the [!DNL Flow Service] API. |

To learn more about how to use account key authentication with [!DNL Azure Blob Storage], read the official [Microsoft Azure authentication guide](https://learn.microsoft.com/en-us/azure/data-factory/connector-azure-blob-storage?tabs=data-factory#account-key-authentication).

>[!TAB Shared access signature]

Provide values for the following credentials to connect your [!DNL Azure Blob Storage] account to Experience Platform using shared access signature.

| Credential | Description |
| --- | --- |
| `SasURI` | The shared access signature URI that you can use as an alternative authentication type to connect your account. The SAS URI pattern is: `https://{ACCOUNT_NAME}.blob.core.windows.net/?sv={STORAGE_VERSION}&st={START_TIME}&se={EXPIRE_TIME}&sr={RESOURCE}&sp={PERMISSIONS}>&sip=<{IP_RANGE}>&spr={PROTOCOL}&sig={SIGNATURE}`. For more information, see this [!DNL Azure] document on [shared access signature URIs](https://docs.microsoft.com/en-us/azure/data-factory/connector-azure-blob-storage#shared-access-signature-authentication). |
| `container` | The name of the [!DNL Azure Blob Storage] container where your data files are stored. A container organizes a set of blobs, similar to a directory in a file system. |
| `folderPath` | The path within the specified container where your files are located. This is an optional subdirectory path (virtual folder) inside the container. If left blank, the root of the container is used. |
| `connectionSpec.id` | The connection spec ID returns a source's connector properties, including authentication specs related to creating the base and source connections. The connection spec ID for [!DNL Azure Blob Storage] is `4c10e202-c428-4796-9208-5f1f5732b1cf`. **Note**: This credential is only required when connecting through the [!DNL Flow Service] API. |

To learn more about how to use shared access signature with [!DNL Azure Blob Storage], read the official [Microsoft Azure authentication guide](https://docs.microsoft.com/en-us/azure/data-factory/connector-azure-blob-storage#shared-access-signature-authentication).

>[!TAB Service principal based authentication]

Provide values for the following credentials to connect your [!DNL Azure Blob Storage] account to Experience Platform using service principal based authentication.

| Credential | Description |
| --- | --- |
| `serviceEndpoint` | The endpoint URL of your [!DNL Azure Blob Storage] account. Typically in the format: `https://{ACCOUNT_NAME}.blob.core.windows.net`. |
| `accountKind` | The type of your [!DNL Azure Blob Storage] account. Common values include `Storage` (general purpose V1), `StorageV2` (general purpose V2), `BlobStorage`, and `BlockBlobStorage`. |
| `servicePrincipalId` | The client/application ID of the Azure Active Directory (AAD) service principal used for authentication. |
| `servicePrincipalKey` | The client secret or password associated with the Azure service principal. |
| `tenant` | The Azure Active Directory (AAD) tenant ID where the service principal is registered. |
| `container` | The name of the Azure Blob Storage container where your data files are stored. |
| `folderPath` | The path within the specified container where your files are located. This is an optional subdirectory path (virtual folder) inside the container. If left blank, the root of the container is used. |
| `connectionSpec.id` | The connection spec ID returns a source's connector properties, including authentication specs related to creating the base and source connections. The connection spec ID for Azure Blob Storage is `4c10e202-c428-4796-9208-5f1f5732b1cf`. **Note**: This credential is only required when connecting through the [!DNL Flow Service] API. |

To learn more about how to use service principal based authentication with [!DNL Azure Blob Storage], read the official [Microsoft Azure authentication guide](https://learn.microsoft.com/en-us/azure/data-factory/connector-azure-blob-storage?tabs=data-factory#service-principal-authentication).

>[!ENDTABS]

## Connect [!DNL Azure Blob Storage] to [!DNL Experience Platform]

The documentation below provides information on how to connect Azure Blob to Adobe Experience Platform using APIs or the user interface:

### Using APIs

- [Connect [!DNL Azure Blob Storage] to Experience Platform](../../tutorials/api/create/cloud-storage/blob.md)
- [Explore the data structure and contents of a cloud storage source using the Flow Service API](../../tutorials/api/explore/cloud-storage.md)
- [Create a dataflow for a cloud storage source using the Flow Service API](../../tutorials/api/collect/cloud-storage.md)

### Using the UI

- [CConnect [!DNL Azure Blob Storage] to Experience Platform](../../tutorials/ui/create/cloud-storage/blob.md)
- [Create a dataflow for a cloud storage connection in the UI](../../tutorials/ui/dataflow/batch/cloud-storage.md)

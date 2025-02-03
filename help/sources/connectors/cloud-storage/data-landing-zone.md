---
title: Data Landing Zone Source
description: Learn how to connect Data Landing Zone to Adobe Experience Platform
exl-id: bdc10095-7de4-4183-bfad-a7b5c89197e3
---
# [!DNL Data Landing Zone]

>[!IMPORTANT]
>
>This page is specific to the [!DNL Data Landing Zone] *source* connector in Experience Platform. For information on connecting to the [!DNL Data Landing Zone] *destination* connector, refer to the [[!DNL Data Landing Zone] destination documentation page](/help/destinations/catalog/cloud-storage/data-landing-zone.md).

[!DNL Data Landing Zone] is an [!DNL Azure Blob] storage interface provisioned by Adobe Experience Platform, granting you to access a secure, cloud-based file storage facility to bring files into Platform. You have access to one [!DNL Data Landing Zone] container per sandbox, and the total data volume across all containers is limited to the total data provided with your Platform Products and Services license. All customers of Experience Platform are provisioned with one [!DNL Data Landing Zone] container per sandbox. You can read and write file(s) to your container through [!DNL Azure Storage Explorer] or your command-line interface.

[!DNL Data Landing Zone] supports SAS-based authentication and its data is protected with standard [!DNL Azure Blob] storage security mechanisms at rest and in transit. SAS-based authentication allows you to securely access your [!DNL Data Landing Zone] container through a public internet connection. There are no network changes required for you to access your [!DNL Data Landing Zone] container, which means you do not need to configure any allow lists or cross-region setups for your network. Experience Platform enforces a strict seven-day expiration time on all files and folders uploaded to a [!DNL Data Landing Zone] container. All files and folders are deleted after seven days.

>[!NOTE]
>
>If you want to access [!DNL Data Landing Zone] from [!DNL Azure Data Factory], then you must create a linked service for [!DNL Data Landing Zone] using the [SAS credentials](../../tutorials/ui/create/cloud-storage/data-landing-zone.md#retrieve-your-data-landing-zone-credentials) provided by Experience Platform. Once you have created your linked service, you can then explore your [!DNL Data Landing Zone] by selecting the container path instead of the default root path.

## Naming constraints for files and directories

The following is a list of constraints that you must account for when naming your cloud storage files or directories.

- Directory and file component names cannot exceed 255 characters.
- Directory and file names cannot end with a forward slash (`/`). If provided, it will be automatically removed.
- The following reserved URL characters must be properly escaped: `! ' ( ) ; @ & = + $ , % # [ ]`
- The following characters are not allowed: `" \ / : | < > * ?`.
- Illegal URL path characters not allowed. Code points like `\uE000`, while valid in NTFS filenames, are not valid Unicode characters. In addition, some ASCII or Unicode characters, like control characters (such as `0x00` to `0x1F`, `\u0081`, and so on), are also not allowed. For rules governing Unicode strings in HTTP/1.1 see [RFC 2616, Section 2.2: Basic Rules](https://www.ietf.org/rfc/rfc2616.txt) and [RFC 3987](https://www.ietf.org/rfc/rfc3987.txt).
- The following file names are not allowed: LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, PRN, AUX, NUL, CON, CLOCK$, dot character (.), and two dot characters (..).

## Manage the contents of your Data Landing Zone{#manage-the-contents-of-your-data-landing-zone}

You can use [[!DNL Azure Storage Explorer]](https://azure.microsoft.com/en-us/features/storage-explorer/) to manage the contents of your [!DNL Data Landing Zone] container. 

In the [!DNL Azure Storage Explorer] UI, select the connection icon in the left-navigation. The **Select Resource** window appears, providing you with options to connect to. Select **[!DNL Blob container]** to connect to [!DNL Data Landing Zone].

![select-resource](../../images/tutorials/create/dlz/select-resource.png)

Next, select **Shared access signature URL (SAS)** as your connection method, and then select **Next**.

![select-connection-method](../../images/tutorials/create/dlz/select-connection-method.png)

After selecting your connection method, you must next provide a **display name** and the **[!DNL Blob] container SAS URL** that corresponds with your [!DNL Data Landing Zone] container.

>[!TIP]
>
>You can retrieve your [!DNL Data Landing Zone] credentials from the sources catalog in the Platform UI.

Provide your [!DNL Data Landing Zone] SAS URL and then select **Next**

![enter-connection-info](../../images/tutorials/create/dlz/enter-connection-info.png)

The **Summary** window appears, providing you with an overview of your settings, including information on your [!DNL Blob] endpoint and permissions. When ready, select **Connect**.

![summary](../../images/tutorials/create/dlz/summary.png)

A successful connection updates your [!DNL Azure Storage Explorer] UI with your [!DNL Data Landing Zone] container.

![dlz-user-container](../../images/tutorials/create/dlz/dlz-user-container.png)

With your [!DNL Data Landing Zone] container connected to [!DNL Azure Storage Explorer], you can now start uploading files to your [!DNL Data Landing Zone] container. To upload, select **Upload** and then select **Upload Files**.

![upload](../../images/tutorials/create/dlz/upload.png)

Once you have selected the file you want to upload, you must then identify the [!DNL Blob] type that you want to upload it as and your desired destination directory. When finished, select **Upload**.

| [!DNL Blob] types | Description |
| --- | --- |
| Block [!DNL Blob] | Block [!DNL Blobs] are optimized for uploading large amounts of data in an efficient manner. Block [!DNL Blobs] are the default option for [!DNL Data Landing Zone]. |
| Append [!DNL Blob] | Append [!DNL Blobs] are optimized for appending data to the end of the file. |

![upload-files](../../images/tutorials/create/dlz/upload-files.png)

## Upload files to your [!DNL Data Landing Zone] using the command line interface

You can also use the command line interface of your device and access upload files to your [!DNL Data Landing Zone].

### Upload a file using Bash

The following example uses Bash and cURL to upload a file to a [!DNL Data Landing Zone] with the [!DNL Azure Blob Storage] REST API:

```shell
# Set Azure Blob-related settings
DATE_NOW=$(date -Ru | sed 's/\+0000/GMT/')
AZ_VERSION="2018-03-28"
AZ_BLOB_URL="<URL TO BLOB ACCOUNT>"
AZ_BLOB_CONTAINER="<BLOB CONTAINER NAME>"
AZ_BLOB_TARGET="${AZ_BLOB_URL}/${AZ_BLOB_CONTAINER}"
AZ_SAS_TOKEN="<SAS TOKEN, STARTING WITH ? AND ENDING WITH %3D>"

# Path to the file we wish to upload
FILE_PATH="</PATH/TO/FILE>"
FILE_NAME=$(basename "$FILE_PATH")

# Execute HTTP PUT to upload file (remove '-v' flag to suppress verbose output)
curl -v -X PUT \
   -H "Content-Type: application/octet-stream" \
   -H "x-ms-date: ${DATE_NOW}" \
   -H "x-ms-version: ${AZ_VERSION}" \
   -H "x-ms-blob-type: BlockBlob" \
   --data-binary "@${FILE_PATH}" "${AZ_BLOB_TARGET}/${FILE_NAME}${AZ_SAS_TOKEN}"
```

### Upload a file using Python

The following example uses [!DNL Microsoft's] Python v12 SDK to upload a file to a [!DNL Data Landing Zone]:

>[!TIP]
>
>While the example below uses the full SAS URI to connect to an [!DNL Azure Blob] container, you can use other methods and operations to authenticate. See this [[!DNL Microsoft] document on Python v12 SDK](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-python) for more information.

```py
import os
from azure.storage.blob import ContainerClient

try:
    # Set Azure Blob-related settings
    sasUri = "<SAS URI>"
    srcFilePath = "<FULL PATH TO FILE>" 
    srcFileName = os.path.basename(srcFilePath)

    # Connect to container using SAS URI
    containerClient = ContainerClient.from_container_url(sasUri)

    # Upload file to Data Landing Zone with overwrite enabled
    with open(srcFilePath, "rb") as fileToUpload:
        containerClient.upload_blob(srcFileName, fileToUpload, overwrite=True)

except Exception as ex:
    print("Exception: " + ex.strerror)
```

### Upload a file using [!DNL AzCopy]

The following example uses [!DNL Microsoft's] [!DNL AzCopy] utility to upload a file to a [!DNL Data Landing Zone]:

>[!TIP]
>
>While the example below is using the `copy` command, you can use other commands and options to upload a file to your [!DNL Data Landing Zone], using [!DNL AzCopy]. See this [[!DNL Microsoft AzCopy] document](https://docs.microsoft.com/en-us/azure/storage/common/storage-ref-azcopy?toc=/azure/storage/blobs/toc.json) for more information.

```bat
set sasUri=<FULL SAS URI, PROPERLY ESCAPED>
set srcFilePath=<PATH TO LOCAL FILE(S); WORKS WITH WILDCARD PATTERNS>

azcopy copy "%srcFilePath%" "%sasUri%" --overwrite=true --recursive=true
```

## Set up your [!DNL Data Landing Zone] source for Experience Platform on Amazon Web Services {#aws}

>[!AVAILABILITY]
>
>This section applies to implementations of Experience Platform running on Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](https://experienceleague.adobe.com/en/docs/experience-platform/landing/multi-cloud).

Follow the steps below to learn how you can set up your [!DNL Data Landing Zone] account for Experience Platform on Amazon Web Services (AWS).

### Set up AWS CLI and Performing Operations

- Read the guide on [installing or updating to the latest version of the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).

### Configure AWS CLI with temporary credentials

Use the AWS `configure` command to set up your CLI with access keys and a session token.

```shell
aws configure
```

When prompted, enter the following values:

- AWS access key ID: `{YOUR_ACCESS_KEY_ID}`
- AWS secret access key: `{YOUR_SECRET_ACCESS_KEY}`
- Default region name: `{YOUR_REGION}` (for example, `us-west-2`)
- Default output format: `json`

Next, set the session token:

```shell
aws configure set aws_session_token your-session-token
```

### Work with files on [!DNL Amazon S3]

>[!BEGINTABS]

>[!TAB Upload a file to Amazon S3]

Template:

```shell
aws s3 cp local-file-path s3://bucketName/dlzFolder/remote-file-Name
```

Example:

```shell
aws s3 cp example.txt s3://bucketName/dlzFolder/example.txt
```


>[!TAB Download a file from Amazon S3]

Template:

```shell
aws s3 cp s3://bucketName/dlzFolder/remote-file local-file-path
```

Example:

```shell
aws s3 cp s3://bucketName/dlzFolder/example.txt example.txt
```

>[!ENDTABS]

### Use your [!DNL Data Landing Zone] credentials to log in to the AWS Console

#### Extract your credentials

First, you must obtain the following:

- `awsAccessKeyId`
- `awsSecretAccessKey`
- `awsSessionToken`

#### Generate a sign-in token

Next, use the extracted credentials to create a session and generate a sign-in token using the AWS Federation endpoint:

```py
import json
import requests
 
# Example DLZ response with credentials
response_json = '''{
    "credentials": {
        "awsAccessKeyId": "your-access-key",
        "awsSecretAccessKey": "your-secret-key",
        "awsSessionToken": "your-session-token"
    }
}'''
 
# Parse credentials
response_data = json.loads(response_json)
aws_access_key_id = response_data['credentials']['awsAccessKeyId']
aws_secret_access_key = response_data['credentials']['awsSecretAccessKey']
aws_session_token = response_data['credentials']['awsSessionToken']
 
# Create session dictionary
session = {
    'sessionId': aws_access_key_id,
    'sessionKey': aws_secret_access_key,
    'sessionToken': aws_session_token
}
 
# Generate the sign-in token
signin_token_url = "https://signin.aws.amazon.com/federation"
signin_token_payload = {
    "Action": "getSigninToken",
    "Session": json.dumps(session)
}
signin_token_response = requests.post(signin_token_url, data=signin_token_payload)
signin_token = signin_token_response.json()['SigninToken']
```

#### Construct the AWS Console sign-in URL

Once you have sign-in token, you can then build the URL that logs you in the the AWS Console and points directly to the desired [!DNL Amazon S3] bucket.

```py
from urllib.parse import quote
 
# Define the S3 bucket and folder path you want to access
bucket_name = "your-bucket-name"
bucket_path = "your-bucket-folder"
 
# Construct the destination URL
destination_url = f"https://s3.console.aws.amazon.com/s3/buckets/{bucket_name}?prefix={bucket_path}/&tab=objects"
 
# Create the final sign-in URL
signin_url = f"https://signin.aws.amazon.com/federation?Action=login&Issuer=YourAppName&Destination={quote(destination_url)}&SigninToken={signin_token}"
 
print(f"Sign-in URL: {signin_url}")
```

#### Access the AWS Console

Finally, navigate to the generated URL to directly log in to the AWS Console with your [!DNL Data Landing Zone] credentials, which provides access to a specific folder within an [!DNL Amazon S3] bucket. The sign-in URL will take you directly to that folder, ensuring that you only see and manage permitted data.

## Connect [!DNL Data Landing Zone] to Experience Platform

>[!IMPORTANT]
>
>- To connect to the source, you need the **[!UICONTROL View Sources]** and **[!UICONTROL Manage Sources]** access control permissions. Read the [access control overview](../../../access-control/home.md) or contact your product administrator to obtain the required permissions.
>
>- Private links are currently not supported when connecting to Experience Platform using the [!DNL Data Landing Zone]. The only supported methods for access are the methods listed [here](#manage-the-contents-of-your-data-landing-zone).

The documentation below provides information on how to bring data from your [!DNL Data Landing Zone] container to Adobe Experience Platform using APIs or the user interface.

### Using APIs

- [Create a [!DNL Data Landing Zone] source connection using the Flow Service API](../../tutorials/api/create/cloud-storage/data-landing-zone.md)
- [Create a dataflow for a cloud storage source using the Flow Service API](../../tutorials/api/collect/cloud-storage.md)

### Using the UI

- [Connect [!DNL Data Landing Zone] to Platform using the UI](../../tutorials/ui/create/cloud-storage/data-landing-zone.md)
- [Create a dataflow for a cloud storage connection in the UI](../../tutorials/ui/dataflow/batch/cloud-storage.md)


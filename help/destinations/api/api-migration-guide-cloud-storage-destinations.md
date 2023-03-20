---
solution: Experience Platform
title: API migration guide for cloud storage destinations
description: Learn what changes in the workflow to activate cloud storage destinations as part of the migration to the new cloud storage destination cards with additional functionality.
type: Tutorial
---
# API migration guide for cloud storage destinations

>[!IMPORTANT]
>
>* The functionality described on this page is available to customers who have purchased the Real-Time CDP Prime and Ultimate package. Please contact your Adobe representative for more information. 

## Migration context {#migration-context}

Starting November 2022, you can use the new file export capabilities to access enhanced customization functionality when exporting files out of Experience Platform: 

* Additional [file naming options](/help/destinations/ui/activate-batch-profile-destinations.md#file-names).
* Ability to set custom file headers in your exported files via the [new mapping step](/help/destinations/ui/activate-batch-profile-destinations.md#mapping).
* [Ability to customize the formatting of exported CSV data files](/help/destinations/ui/batch-destinations-file-formatting-options.md).

This functionality is supported by the beta cloud storage cards listed below: 

* [[!DNL (Beta) Amazon S3]](../../destinations/catalog/cloud-storage/amazon-s3.md#changelog)
* [[!DNL (Beta) Azure Blob]](../../destinations/catalog/cloud-storage/azure-blob.md#changelog) 
* [[!DNL (Beta) SFTP]](../../destinations/catalog/cloud-storage/sftp.md#changelog)

<!--

Commenting out the three net new cloud storage destinations

* [[!DNL (Beta) Azure Data Lake Storage Gen2]](../../destinations/catalog/cloud-storage/adls-gen2.md)
* [[!DNL (Beta) Data Landing Zone]](../../destinations/catalog/cloud-storage/data-landing-zone.md)
* [[!DNL (Beta) Google Cloud Storage]](../../destinations/catalog/cloud-storage/google-cloud-storage.md)

-->

![Image of the two Amazon S3 destination cards in a side-by-side view.](../assets/catalog/cloud-storage/amazon-s3/two-amazons3-destination-cards.png)

While these destinations with enhanced functionality were offered initially as a beta, Adobe is now moving all Real-Time CDP customers to the new cloud storage destinations. For customers who were already using Amazon S3, Azure Blob, or SFTP, this means that existing dataflows will be migrated to the new cards. Read on for more information about the specific changes as part of the migration.

## Who this page applies to {#who-this-applies-to}

If you are already using the [Flow Service API](https://developer.adobe.com/experience-platform-apis/references/destinations/) to export profiles to the Amazon S3, Azure Blob, or SFTP cloud storage destinations, then this API migration guide applies to you. 

If you have scripts running in your Amazon S3, Azure Blob, or SFTP cloud storage locations on top of the exported files from Experience Platform, be aware that some parameters are changing with regards to the connection and flow specs of the new cards, as well as with regard to the mapping step.

For example, if you were using a script to filter destination dataflows to the Amazon S3 destination, based on the connection spec of the Amazon S3 destination, be aware that the connection spec will change so you will need to update your filters. 

## Relevant documentation links {#relevant-documentation-links}

This section includes the relevant API tutorial and reference documentation for the enhanced functionality to export data to cloud storage destinations.

<!--

TBD if we keep this link but will likely remove it

[Legacy API tutorial to export data to cloud storage destinations](/help/destinations/api/connect-activate-batch-destinations.md) (outdated, do not use anymore)

--> 
* [API tutorial to export segments to cloud storage destinations](/help/destinations/api/activate-segments-file-based-destinations.md)
* [Destinations API reference documentation](https://developer.adobe.com/experience-platform-apis/references/destinations/) 

## Summary of backwards-incompatible changes

With the migration to the new destinations, all your existing dataflows to Amazon S3, Azure Bloc, and SFTP destinations will now be assigned new target connections and base connections. The profile mapping step also changes. Backwards-incompatible changes are summarized in the sections below for each destination. View also the [destinations glossary](https://developer.adobe.com/experience-platform-apis/references/destinations/#tag/Glossary) for more information on the terms in the diagram below.

![Migration guide overview image](/help/destinations/assets/api/api-migration-guide/migration-guide-diagram.png)

### Backwards-incompatible changes to the Amazon S3 destination

The backwards-incompatible changes for the API users are an updated `connection spec` and `flow spec` as shown in the table below:

|Amazon S3 | Legacy | New |
|---------|----------|---------|
| Flow Spec | 71471eba-b620-49e4-90fd-23f1fa0174d8 | 269ba276-16fc-47db-92b0-c1049a3c131f |
| Connection spec | 4890fc95-5a1f-4983-94bb-e060c08e3f81 | 4fce964d-3f37-408f-9778-e597338a21ee |

View the complete legacy and new base connection and target connection examples for [!DNL Amazon S3] in the tabs below. The parameters required to create base connections for Amazon S3 destinations do not change. 

Similarly, there are no backwards-incompatible changes in the parameters required to create target connections.

>[!BEGINTABS]

>[!TAB Legacy base connection and target connection]

+++View legacy [!DNL base connection] for [!DNL Amazon S3]

```json
{
  ...
  "name": "amazon-s3",
  "connectionSpec": {
    "id": "4890fc95-5a1f-4983-94bb-e060c08e3f81",
    "version": "1.0"
  },
  "state": "enabled",
  "auth": {
    "specName": "Access Key",
    "params": {
      "authorizedDate": "2022-10-26",
      "s3SecretKey": "<your-secret-key>",
      "s3AccessKey": "<your-access-key>"
    }
  },
  "encryption": {
    "specName": "File Encryption",
    "params": {
      "encryptionAlgo": "PGP/GPG",
      "publicKey": "<publicKey>"
    }
  },
  "version": "\"640418e2-0000-0200-0000-6359b9ef0000\"",
  "etag": "\"640418e2-0000-0200-0000-6359b9ef0000\""
}
```

+++

+++View legacy [!DNL target connection] for [!DNL Amazon S3]

```json
{
  ...
  "name": "test 121",
  "baseConnectionId": "ee86d122-10d3-434b-81c7-7252e4d747a7",
  "state": "enabled",
  "data": {
    "format": "CSV",
    "schema": null,
    "properties": null
  },
  "connectionSpec": {
    "id": "4890fc95-5a1f-4983-94bb-e060c08e3f81",
    "version": "1.0"
  },
  "params": {
    "mode": "S3",
    "path": "testpath",
    "bucketName": "test"
  },
  "version": "\"1609cd86-0000-0200-0000-63892cbb0000\"",
  "etag": "\"1609cd86-0000-0200-0000-63892cbb0000\"",
  "inheritedAttributes": {
    "baseConnection": {
      "id": "ee86d122-10d3-434b-81c7-7252e4d747a7",
      "connectionSpec": {
        "id": "4890fc95-5a1f-4983-94bb-e060c08e3f81",
        "version": "1.0"
      }
    }
  }
}
```

+++

>[!TAB New base connection and target connection]

+++View new [!DNL base connection] for [!DNL Amazon S3]

```json
{
  ...
  "name": "Amazon S3",
  "connectionSpec": {
    "id": "4fce964d-3f37-408f-9778-e597338a21ee",
    "version": "1.0"
  },
  "state": "enabled",
  "auth": {
    "specName": "Access Key",
    "params": {
      "s3SecretKey": "<your-secret-key>",
      "s3AccessKey": "<your-access-key>",
      "authorizedDate": "2022-10-26"
    }
  },
  "encryption": {
    "specName": "File Encryption",
    "params": {
      "encryptionAlgo": "PGP/GPG",
      "publicKey": "<publicKey>"
    }
  },
  "version": "\"3708da21-0000-0200-0000-638940b10000\"",
  "etag": "\"3708da21-0000-0200-0000-638940b10000\""
}
```

+++

+++View new [!DNL target connection] for [!DNL Amazon S3]

```json
{
  ...
  "name": "test 121",
  "baseConnectionId": "d114c86f-fd47-4bb6-846c-cb1d15a00fe9",
  "state": "enabled",
  "data": {
    "format": "CSV",
    "schema": null,
    "properties": null
  },
  "connectionSpec": {
    "id": "4fce964d-3f37-408f-9778-e597338a21ee",
    "version": "1.0"
  },
  "params": {
    "csvOptions": {
      "nullValue": "null",
      "emptyValue": "",
      "escape": "\\",
      "quote": "",
      "delimiter": ","
    },
    "compression": "NONE",
    "fileType": "CSV",
    "mode": "Server-to-server",
    "path": "testpath",
    "bucketName": "test"
  },
  "version": "\"1b0985c6-0000-0200-0000-638940b10000\"",
  "etag": "\"1b0985c6-0000-0200-0000-638940b10000\"",
  "inheritedAttributes": {
    "baseConnection": {
      "id": "d114c86f-fd47-4bb6-846c-cb1d15a00fe9",
      "connectionSpec": {
        "id": "4fce964d-3f37-408f-9778-e597338a21ee",
        "version": "1.0"
      }
    }
  }
}
```

+++

>[!ENDTABS]

### Backwards-incompatible changes to Azure Blob destination

The backwards-incompatible changes for the API users are an updated `connection spec` and `flow spec` as shown in the table below:

|Azure Blob | Legacy | New |
|---------|----------|---------|
| Flow Spec | 71471eba-b620-49e4-90fd-23f1fa0174d8 | 95bd8965-fc8a-4119-b9c3-944c2c2df6d2 |
| Connection spec | e258278b-a4cf-43ac-b158-4fa0ca0d948b | 6d6b59bf-fb58-4107-9064-4d246c0e5bb2 |

View the complete legacy and new base connection and target connection examples for [!DNL Azure Blob] in the tabs below. The parameters required to create base connections for Azure Blob destinations do not change. 

Similarly, there are no backwards-incompatible changes in the parameters required to create target connections.

>[!BEGINTABS]

>[!TAB Legacy base connection and target connection]

+++View legacy [!DNL base connection] for [!DNL Azure Blob]

```json
{
  ...
  "name": "azure-blob",
  "connectionSpec": {
    "id": "e258278b-a4cf-43ac-b158-4fa0ca0d948b",
    "version": "1.0"
  },
  "state": "enabled",
  "auth": {
    "specName": "ConnectionString",
    "params": {
      "authorizedDate": "2022-06-02",
      "connectionString": "<your-connection-string>"
    }
  },
  "encryption": {
    "specName": "File Encryption",
    "params": {
      "encryptionAlgo": "PGP/GPG",
      "publicKey": <publicKey>
    }
  }, 
  "version": "\"d000d23c-0000-0200-0000-6299051c0000\"",
  "etag": "\"d000d23c-0000-0200-0000-6299051c0000\""
}
```

+++

+++View legacy [!DNL target connection] for [!DNL Azure Blob]

```json
{
  ...
  "name": "v1",
  "description": "v2",
  "baseConnectionId": "d10fcecf-9963-4062-820c-0f878be98805",
  "state": "enabled",
  "data": {
    "format": "CSV",
    "schema": null,
    "properties": null
  },
  "connectionSpec": {
    "id": "e258278b-a4cf-43ac-b158-4fa0ca0d948b",
    "version": "1.0"
  },
  "params": {
    "mode": "AZURE_BLOB",
    "container": "usdasda",
    "path": "v3"
  },
  "version": "\"cb0468ba-0000-0200-0000-631ab0790000\"",
  "etag": "\"cb0468ba-0000-0200-0000-631ab0790000\"",
  "inheritedAttributes": {
    "baseConnection": {
      "id": "d10fcecf-9963-4062-820c-0f878be98805",
      "connectionSpec": {
        "id": "e258278b-a4cf-43ac-b158-4fa0ca0d948b",
        "version": "1.0"
      }
    }
  }
}
```

+++

>[!TAB New base connection and target connection]

+++View new [!DNL base connection] for [!DNL Azure Blob]

```json
{
  ...
  "name": "Azure Blob Storage",
  "connectionSpec": {
    "id": "6d6b59bf-fb58-4107-9064-4d246c0e5bb2",
    "version": "1.0"
  },
  "state": "enabled",
  "auth": {
    "specName": "ConnectionString",
    "params": {
      "connectionString": "<your-connection-string>",
      "authorizedDate": "2022-06-02"
    }
  },
  "encryption": {
    "specName": "File Encryption",
    "params": {
      "encryptionAlgo": "PGP/GPG",
      "publicKey": <publicKey>
    }
  },
  "version": "\"4008a892-0000-0200-0000-6389890d0000\"",
  "etag": "\"4008a892-0000-0200-0000-6389890d0000\""
}
```

+++

+++View new [!DNL target connection] for [!DNL Azure Blob]

```json
{
  ...
  "name": "v1",
  "description": "v2",
  "baseConnectionId": "1329d183-a3ee-4454-ab3f-e2388082bf29",
  "state": "enabled",
  "data": {
    "format": "CSV",
    "schema": null,
    "properties": null
  },
  "connectionSpec": {
    "id": "6d6b59bf-fb58-4107-9064-4d246c0e5bb2",
    "version": "1.0"
  },
  "params": {
    "csvOptions": {
      "nullValue": "null",
      "emptyValue": "",
      "escape": "\\",
      "quote": "",
      "delimiter": ","
    },
    "compression": "NONE",
    "fileType": "CSV",
    "mode": "Server-to-server",
    "container": "usdasda",
    "path": "v3"
  },
  "version": "\"5509fe3f-0000-0200-0000-638a28880000\"",
  "etag": "\"5509fe3f-0000-0200-0000-638a28880000\"",
  "inheritedAttributes": {
    "baseConnection": {
      "id": "1329d183-a3ee-4454-ab3f-e2388082bf29",
      "connectionSpec": {
        "id": "6d6b59bf-fb58-4107-9064-4d246c0e5bb2",
        "version": "1.0"
      }
    }
  }
}
```

+++

>[!ENDTABS]

### Backwards-incompatible changes to SFTP destination

The backwards-incompatible changes for the API users are an updated `connection spec` and `flow spec` as shown in the table below:

|SFTP | Legacy | New |
|---------|----------|---------|
| Flow Spec | 71471eba-b620-49e4-90fd-23f1fa0174d8 | 354d6aad-4754-46e4-a576-1b384561c440 |
| Connection spec | 64ef4b8b-a6e0-41b5-9677-3805d1ee5dd0 | 36965a81-b1c6-401b-99f8-22508f1e6a26 |

In addition to the updated flow and connection spec above, there are changes to the parameters required when creating SFTP base connections.

* Previously, the base connection for SFTP destinations required a `host` parameter. This parameter has now been renamed to `domain`.
* For the authentication with SSH key option, the authentication parameters in the base connection required a `port` option. This parameter is now deprecated and not required anymore. 

View the complete legacy and new base connection and target connection examples for SFTP in the tabs below, with the lines that change highlighted. The parameters required to create target connections for SFTP destinations do not change. 

>[!BEGINTABS]

>[!TAB Legacy base connection and target connection]

+++View legacy [!DNL base connection] for SFTP - password authentication

```json {line-numbers="true" start-line="1" highlight="15"}
{
  ...
  "name": "sftp",
  "connectionSpec": {
    "id": "64ef4b8b-a6e0-41b5-9677-3805d1ee5dd0",
    "version": "1.0"
  },
  "state": "enabled",
  "auth": {
    "specName": "Basic Authentication for sftp",
    "params": {
      "authorizedDate": "2022-06-02",
      "password": "<your-password>",
      "userName": "DPID12345",
      "host": "ftp-out.demdex.com"
    }
  },
  "encryption": {
    "specName": "File Encryption",
    "params": {
      "encryptionAlgo": "PGP/GPG",
      "publicKey": "<publicKey>"
    }
  },
  "version": "\"d000013c-0000-0200-0000-629903bd0000\"",
  "etag": "\"d000013c-0000-0200-0000-629903bd0000\""
}
```

+++

+++View legacy [!DNL base connection] for SFTP - SSH key authentication

```json {line-numbers="true" start-line="1" highlight="15"}
{
  ...
  "name": "sftp",
  "connectionSpec": {
    "id": "64ef4b8b-a6e0-41b5-9677-3805d1ee5dd0",
    "version": "1.0"
  },
  "state": "enabled",
  "auth": {
    "specName": "Basic Authentication for sftp",
    "params": {
      "authorizedDate": "2022-06-02",
      "sshKey": "<your-ssh-key>",
      "userName": "DPID12345",
      "port": 22
      "domain": "ftp-out.demdex.com"
    }
  },
  "encryption": {
    "specName": "File Encryption",
    "params": {
      "encryptionAlgo": "PGP/GPG",
      "publicKey": <publicKey>
    }
  },
  "version": "\"d000013c-0000-0200-0000-629903bd0000\"",
  "etag": "\"d000013c-0000-0200-0000-629903bd0000\""
}
```

+++

+++View legacy [!DNL target connection] for SFTP

```json
{
  ...
  "name": "test sftp 6/2",
  "description": "",
  "baseConnectionId": "e6f3a300-0bf7-4755-b7f8-308dc2a99133",
  "state": "enabled",
  "data": {
    "format": "CSV",
    "schema": null,
    "properties": null
  },
  "connectionSpec": {
    "id": "64ef4b8b-a6e0-41b5-9677-3805d1ee5dd0",
    "version": "1.0"
  },
  "params": {
    "mode": "FTP",
    "remotePath": "test"
  },
  "version": "\"8503ab91-0000-0200-0000-629903ce0000\"",
  "etag": "\"8503ab91-0000-0200-0000-629903ce0000\"",
  "inheritedAttributes": {
    "baseConnection": {
      "id": "e6f3a300-0bf7-4755-b7f8-308dc2a99133",
      "connectionSpec": {
        "id": "64ef4b8b-a6e0-41b5-9677-3805d1ee5dd0",
        "version": "1.0"
      }
    }
  }
}
```

+++

>[!TAB New base connection and target connection]

+++View new [!DNL base connection] for SFTP - password authentication

```json
{
  ...
  "name": "SFTP",
  "connectionSpec": {
    "id": "36965a81-b1c6-401b-99f8-22508f1e6a26",
    "version": "1.0"
  },
  "state": "enabled",
  "auth": {
    "specName": "SFTP with Password",
    "params": {
      "domain": "ftp-out.demdex.com",
      "username": "DPID12345",
      "password": "<your-password>",
      "authorizedDate": "2022-06-02"
    }
  },
  "encryption": {
    "specName": "File Encryption",
    "params": {
      "encryptionAlgo": "PGP/GPG",
      "publicKey": <publicKey>
    }
  },
  "version": "\"420826cc-0000-0200-0000-638999a60000\"",
  "etag": "\"420826cc-0000-0200-0000-638999a60000\""
}
```

+++

+++View new [!DNL base connection] for SFTP - SSH key authentication

```json {line-numbers="true" start-line="1" highlight="12"}
{
  ...
  "name": "SFTP",
  "connectionSpec": {
    "id": "36965a81-b1c6-401b-99f8-22508f1e6a26",
    "version": "1.0"
  },
  "state": "enabled",
  "auth": {
    "specName": "SFTP with Password",
    "params": {
      "domain": "ftp-out.demdex.com",
      "username": "DPID12345",
      "sshKey": "<your-ssh-key>",
      "authorizedDate": "2022-06-02"
    }
  },
  "encryption": {
    "specName": "File Encryption",
    "params": {
      "encryptionAlgo": "PGP/GPG",
      "publicKey": <publicKey>
    }
  },
  "version": "\"420826cc-0000-0200-0000-638999a60000\"",
  "etag": "\"420826cc-0000-0200-0000-638999a60000\""
}
```

+++

+++View new [!DNL target connection] for SFTP

```json
{
  ...
  "name": "test sftp 6/2",
  "description": "",
  "baseConnectionId": "af63fbe1-45ff-4722-a9de-fbbe789dc7b0",
  "state": "enabled",
  "data": {
    "format": "CSV",
    "schema": null,
    "properties": null
  },
  "connectionSpec": {
    "id": "36965a81-b1c6-401b-99f8-22508f1e6a26",
    "version": "1.0"
  },
  "params": {
    "csvOptions": {
      "nullValue": "null",
      "emptyValue": "",
      "escape": "\\",
      "quote": "",
      "delimiter": ","
    },
    "compression": "NONE",
    "fileType": "CSV",
    "mode": "FTP",
    "remotePath": "test"
  },
  "version": "\"5509b5cf-0000-0200-0000-638a2ab60000\"",
  "etag": "\"5509b5cf-0000-0200-0000-638a2ab60000\"",
  "inheritedAttributes": {
    "baseConnection": {
      "id": "af63fbe1-45ff-4722-a9de-fbbe789dc7b0",
      "connectionSpec": {
        "id": "36965a81-b1c6-401b-99f8-22508f1e6a26",
        "version": "1.0"
      }
    }
  }
}
```

+++

>[!ENDTABS]

### Backwards-incompatible changes common to Amazon S3, Azure Blob, and SFTP destinations

The profile selector step in all three destinations is replaced by a mapping step which allows you to rename the column headers in your exported files, if desired. See the side-by-side image below with the old attribute selector step on the left and the new mapping step on the right.

![Migration guide overview image](/help/destinations/assets/api/api-migration-guide/old-and-new-mapping-step.png)

Notice how the `profileSelectors` object in the legacy examples is replaced by the new `profileMapping` object. 

Find complete information about setting up the `profileMapping` object in the [API tutorial to export data to cloud storage destinations](/help/destinations/api/activate-segments-file-based-destinations.md#attribute-and-identity-mapping).

>[!BEGINTABS]

>[!TAB Old transformation parameters]

+++View an example of old transformation parameters

```json

{
  "profileSelectors": {
    "selectors": [
      {
        "type": "JSON_PATH",
        "value": {
          "path": "CORE",
          "operator": "EXISTS",
          "mapping": {
            "sourceType": "text/x.schema-path",
            "source": "CORE",
            "destination": "CORE",
            "identity": false,
            "primaryIdentity": false,
            "functionVersion": 0,
            "sourceAttribute": "CORE",
            "destinationXdmPath": "CORE"
          },
          "identity": {
            "namespace": "CORE"
          }
        }
      },
      ...
      {
        "type": "JSON_PATH",
        "value": {
          "path": "segmentMembership.status",
          "operator": "EXISTS",
          "mapping": {
            "sourceType": "text/x.schema-path",
            "source": "segmentMembership.status",
            "destination": "segmentMembership.status",
            "identity": false,
            "primaryIdentity": false,
            "functionVersion": 0,
            "sourceAttribute": "segmentMembership.status",
            "destinationXdmPath": "segmentMembership.status"
          }
        }
      }
    ],
    "mandatoryFields": [
      "CORE",
      "person.name.lastName",
      "personalEmail.address"
    ],
    "primaryFields": [
      {
        "identityNamespace": "CORE",
        "fieldType": "IDENTITY"
      }
    ]
  },
  "segmentSelectors": {
    "selectors": [
      {
        "type": "PLATFORM_SEGMENT",
        "value": {
          "id": "d74c68c9-a1f9-44bc-9685-95f0f5ece705",
          "name": "0414 BugBasheditrename",
          "description": "",
          "filenameTemplate": "%DESTINATION_NAME%_%SEGMENT_ID%_%DATETIME(YYYYMMdd_HHmmss)%",
          "exportMode": "DAILY_FULL_EXPORT",
          "schedule": {
            "frequency": "DAILY",
            "triggerType": "SCHEDULED",
            "startDate": "2022-06-02",
            "endDate": "2022-06-30",
            "startTime": "19:00"
          },
          "createTime": "1654195179",
          "updateTime": "1669962057"
        }
      },
      ...
    ]
  }
}

```

+++

>[!TAB New transformation parameters]

+++View an example of transformation parameters after the migration

Notice in the configuration example below how `profileSelectors` fields have been replaced by a `profileMapping` object.

```json

{
  "mandatoryFields": [
    "CORE",
    "person.name.lastName",
    "personalEmail.address"
  ],
  "primaryFields": [
    {
      "identityNamespace": "CORE",
      "fieldType": "IDENTITY"
    }
  ],
  "segmentSelectors": {
    "selectors": [
      {
        "type": "PLATFORM_SEGMENT",
        "value": {
          "id": "d74c68c9-a1f9-44bc-9685-95f0f5ece705",
          "name": "0414 BugBasheditrename",
          "description": "",
          "filenameTemplate": "%DESTINATION_NAME%_%SEGMENT_ID%_%DATETIME(YYYYMMdd_HHmmss)%",
          "exportMode": "DAILY_FULL_EXPORT",
          "schedule": {
            "frequency": "DAILY",
            "triggerType": "SCHEDULED",
            "startDate": "2022-06-02",
            "endDate": "2022-06-30",
            "startTime": "19:00"
          },
          "createTime": "1654195179",
          "updateTime": "1669962057"
        }
      },
      ...
    ]
  },
  "identityMapping": {
    "mappings": []
  },
  "profileMapping": {
    "mappingId": "40dfd952fe09498ba65145c7a5de3e07",
    "mappingVersion": 0
  },
  "attributeMapping": {}
}

```

+++

>[!ENDTABS]

## Migration steps

TODO: Briefly list out migration steps including timelines (if documenting these publicly is desired) 

## Action items

In preparation for the migration of the Amazon S3, Azure Blob, and SFTP cloud storage destinations to the new cards, please prepare to update your scripts and automated API calls. Your Adobe account team will reach out with further information about when your dataflows will be migrated. 

@bol and @hossain - as per our sync last week, should be add best practices and tips about optimizing your script to look for a flag so that you don't miss any data?

## Next steps {#next-steps}

By reading this page, you now know if you need to take any action in preparation for the migration of the cloud storage destinations. You also know which documentation pages to reference as you set up API-based workflows to export files out of Experience Platform to your preferred cloud storage destinations. Next, you can view the API tutorial to export data to cloud storage destinations.
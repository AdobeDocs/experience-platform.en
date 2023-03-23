---
title: Sources Error Messages
description: Learn about the error messages that you may encounter when using Flow Service for sources.
hide: true
hidefromtoc: true
---
# Sources error messages

This document provides a catalog of error messages, descriptions, and suggested resolutions for sources.

## GENERIC EXCEPTIONS (1000-1099)

| Error code | Title | Detailed message |
| --- | --- | --- |
| `1000-400`| Bad request | The request is invalid. Please check the request and try again. |
| `1001-401` | Unauthorized | The user is unauthorized. Please contact your administrator to gain access to the resource. |
| `1002-403` | Forbidden | The requested operation is forbidden. Please check the requested operation and try again. |
| `1003-404` | Resource not found | The requested resource is not found. Please check the provided request and try again. |
| `1004-415` | Unsupported Media Type | The provided payload format is unsupported. Please check your provided request and try again. |
| `1005-500`| Internal Error| An internal error has occurred. Please try again and contact customer support if the problem persists. |
| `1006-408` | Request Timeout | An error occurred while processing the request. The request has been timed out. Please try again and contact customer support if the problem persists. |
| `1007-400` | Invalid header parameter | An invalid header parameter: {headerName} has been received. Please check the header parameters and try again. |
| `1008-401` | |Invalid authorization token | The authorization token does not have access to this organization or the organization does not exist. Please ensure that the organization exists or contact your administrator to gain access. |
| `1009-403` | IMS org id is missing or empty | The organization ID request header is either missing or empty. Please update the header value and try again. |
| `1010-500` | Invalid detailed-message | The parameter in the detailed-message has not been properly provided. Please check the parameter in the detailed-message and try again. |
| `1011-503` | Service Unavailable | The service is temporarily unavailable. Please try again and contact customer support if the problem persists. |
| `1012-504` | Gateway Timeout | A gateway timeout has occurred. Please try again and contact customer support if the problem persists.
| `1013-412` | Precondition Failed | The condition defined by the If-Unmodified-Since or If-None-Match headers is not fulfilled. Please check and try again. |
| `1014-400` | Bad Request Illegal Argument| The request could not be processed. {detailedMessage} |

## CONNECTOR FRAMEWORK EXCEPTIONS (1100-1199)

| Error code | Title | Detailed message |
| --- | --- | --- |
| `1100-400` | Bad Request | The request could not be processed. {detailedMessage} |
| `1101-500` | Internal Error | An internal error has occurred. Please try again and contact customer support if the problem persists. |
| `1102-404` | Resource not found The requested resource is not found. {detailedMessage} |
| `1103-503` | Service Unavailable | The service is temporarily unavailable. Please try again and contact customer support if the problem persists. |
| `1104-504` | Gateway Timeout | A gateway timeout has occurred. Please try again and contact customer support if the problem persists.
| `1105-401` | Unauthorized | The user is unauthorized. {detailedMessage} |
| `1106-403` | Forbidden | The requested operation is forbidden. {detailedMessage} |
| `1107-412` | Precondition Failed | The condition defined by the If-Unmodified-Since or If-None-Match headers is not fulfilled. {detailedMessage} |

## Encryption Exceptions (1200-1299)

| Error code | Title | Detailed message |
| --- | --- | --- |
| `1200-500` | Internal Error | An internal error has occurred. Please try again and contact customer support if the problem persists.
| `1201-400` | Bad Request | The flowId cannot be null or empty. Please provide a valid flowId in request and try again.
| `1202-400` | Bad Request | The publicKeyId is missing in the flow's transformations={transformations}. Please provide publicKeyId in the request and try again. |
| `1203-400` | Bad Request | The encryption key does not exist against the keyID={keyID} in the flow's transformations={transformations}. Please check your provided keyID and try again. |
| `1204-400` | Bad Request | The provided encryption algorithm is invalid. Please provide a valid encryption algorithm and try again. |
| `1205-400` | Bad Request | The passphrase is missing in the params section in the provided request. Please provide passPhrase in params and try again. |

# Connector-REST EXCEPTIONS (1300-1599)
1300-400:
  title: Bad Request
  detailed-message: The patch connection request is not supported for {connectorType} connector. Please check the provided request and try again.
1301-400:
  title: Bad Request
  detailed-message: The provided authSpecType param : {authSpecType} is not supported. Please provide a valid auth spec type and try again.
1302-400:
  title: Bad Request
  detailed-message: The provided authentication type = {authType} is not supported for connector={connectorType}. Please provide a valid auth type for the given connector.
1303-400:
  title: Bad Request
  detailed-message: The URL could not be encoded with the given auth params because URL encoding is not supported for {value}. Please check your auth params and try again.
1304-400:
  title: Bad Request
  detailed-message: The mandatory field {field} is not provided. Please provide the {field} and try again.
1305-400:
  title: Bad Request
  detailed-message: The provided connector type = {connectorType} is not supported for this operation.
1306-400:
  title: Bad Request
  detailed-message: The target connection cannot be null while validating the target connection spec ID. Please check the provided request and try again.
1307-400:
  title: Bad Request
  detailed-message: The target connection spec ID is not valid={targetConnectionSpecId}. The allowed value is: c604ff05-7f1a-43c0-8e18-33bf874cb11c
1308-400:
  title: Bad Request
  detailed-message: The request could not be processed. Error message: {msftErrorMessage}
1309-400:
  title: Bad Request
  detailed-message: The encryption transformation provided is invalid because {requiredParam} is missing in the params. Please provide {requiredParam} and try again.
1310-400:
  title: Bad Request
  detailed-message: The provided publicKeyId in the params is expired. Please provide a valid publicKeyId and try again.
1311-400:
  title: Bad Request
  detailed-message: The publicKeyId provided in params is invalid. Please provide a valid publicKeyId and try again.
1312-400:
  title: Bad Request
  detailed-message: The provided param value {paramValue} is not a valid input for property={requestParam}. Please provide a valid param value and try again.
1313-400:
  title: Bad Request
  detailed-message: The path attribute {attribute} does not exist. Please make sure the attribute exists and try again.
1314-400:
  title: Bad Request
  detailed-message: A complex path has been provided but is not allowed. Please make sure complex path is not provided and try again.
1315-400:
  title: Bad Request
  detailed-message: The provided path {path} should point to an array of records. Please make sure the provided path points to the array of records and try again.
1316-400:
  title: Bad Request
  detailed-message: The provided pagination params should not be empty. Please provide valid pagination params and try again.
1317-400:
  title: Bad Request
  detailed-message: The provided schedule params are empty but should not be empty. Please provide valid schedule params and try again.
1318-400:
  title: Bad Request
  detailed-message: {combinedMessage}. Please check the provided request and try again.
1319-400:
  title: Bad Request
  detailed-message: The {param} should be part of parent collection. Please provide {param} in parent collection and try again.
1320-400:
  title: Bad Request
  detailed-message: The {idType} cannot be null or empty. Please provide valid {idType} and try again.
1321-400:
  title: Bad Request
  detailed-message: The length of {idType} should be one, supplied size is {size}. Please provide valid size and try again.
1322-400:
  title: Bad Request
  detailed-message: The source connection cannot be null for building the schema ref. Please provide valid source connection and try again.
1323-400:
  title: Bad Request
  detailed-message: The {entity} cannot be null or empty in the source connection: {sourceConnection}. Please provide valid {entity} and try again.
1324-400:
  title: Bad Request
  detailed-message: The target connection cannot be null when extracting the dataset ID. Please provide valid target connection and try again.
1325-400:
  title: Bad Request
  detailed-message: The dataSetId param cannot be null or empty in target connection: {TargetConnection}. Please provide valid dataSetId param and try again.
1326-400:
  title: Bad Request
  detailed-message: The source connection cannot be null when fetching the source format. Please provide valid source connection and try again.
1327-400:
  title: Bad Request
  detailed-message: The format of source data supplied={sourceFormat} in SourceConnection is not supported. The allowed values are: {values}. Please provide allowed values and try again.
1328-400:
  title: Bad Request
  detailed-message: The mapping transformation cannot be null when extracting {param}. Please provide valid mapping transformation and try again.
1329-400:
  title: Bad Request
  detailed-message: The param: {param} cannot be null or empty in the provided request. Please provide valid {param} and try again.
1330-400:
  title: Bad Request
  detailed-message: No columns were found for table {tableName}. Please provide a valid table name and try again.
1331-400:
  title: Bad Request
  detailed-message: Column Delimiter cannot be more than one character in SourceConnection: {sourceConnection}. Please provide valid column delimiter and try again.
1332-400:
  title: Bad Request
  detailed-message: The source connection request with the connectionSpecId: {connectionSpecId} cannot have a baseConnectionId. Please remove the baseConnectionId and try again.
1333-400:
  title: Bad Request
  detailed-message: The flowRunAction={flowRunAction} is not supported for source with spec id={specId}. Please provide valid flow run action and try again.
1334-400:
  title: Bad Request
  detailed-message: The query param : {param} cannot be empty. Please provide valid {param} and try again.
1335-400:
  title: Bad Request
  detailed-message: An error occurred while serializing the filter params for explore. Please check your filter param request and try again.
1336-400:
  title: Bad Request
  detailed-message: Explore connection is not supported for connection spec ID: {connectionSpecId}. Please provide supported connection spec id and try again.
1337-400:
  title: Bad Request
  detailed-message: The {QueryParam} cannot be empty for objectType={objectType}. Please provide valid {QueryParam} and try again.
1338-400:
  title: Bad Request
  detailed-message: The {connectionType} connection ID can't be null in flowRequest. Please provide valid {connectionType} connection ID in flowRequest.
1339-400:
  title: Bad Request
  detailed-message: The format of the organization={imsOrg} provided in the request is invalid. Please provide valid ims-org-id and try again.
1340-400:
  title: Bad Request
  detailed-message: An error occurred while parsing {time}. Please check the time format provided in the request and try again.
1341-400:
  title: Bad Request
  detailed-message: The provided ODI Json is empty. Please provide valid ODI Json and try again.
1342-400:
  title: Bad Request
  detailed-message: The 'dls:folder' segment in 'odi.json' is missing definitions. Please provide appropriate definitions in 'odi.json' and try again.
1343-400:
  title: Bad Request
  detailed-message: The 'dls:entityReferences' and 'dls:partitionSpec' segments in 'odi.json' are both missing definitions. Please provide the appropriate definitions in 'odi.json' and try again.
1344-400:
  title: Bad Request
  detailed-message: The definition for 'dls:partitionSpec' in 'odi.json' is invalid because more than one partitionSpecs were found. Please provide appropriate definitions in 'odi.json' and try again.
1345-400:
  title: Bad Request
  detailed-message: Definitions are missing in 1 or more segments in paths: 'dls:partitionSpec/dls:fileFormat', 'dls:partitionSpec/dls:partitionTemplate','dls:partitionSpec/dls:fileFormat/@type', 'dls:partitionSpec/dls:fileFormat/dls:csvDelimiters' in 'odi.json'. Please provide appropriate definitions in 'odi.json' and try again.
1346-400:
  title: Bad Request
  detailed-message: The '@type' definition provided in 'dls:fileFormat' in 'odi.json' is invalid. Please provide appropriate definitions in 'odi.json' and try again.
1347-400:
  title: Bad Request
  detailed-message: The dls:csvDelimiters' definition in 'odi.json' is unsupported. The supported csvDelimiters are: [',']. Please provide appropriate definitions in 'odi.json' and try again.
1348-400:
  title: Bad Request
  detailed-message: An error occurred when deserializing 'dls:entityReferences'. Please check if the data is in valid format and try again.
1349-400:
  title: Bad Request
  detailed-message: The provided filter params are invalid. Please provide valid filter params and try again.
1350-400:
  title: Bad Request
  detailed-message: No operator was provided for filter at source. Please provide valid filter request with appropriate operator and try again.
1351-400:
  title: Bad Request
  detailed-message: The provided operator {operator} is not supported for filter at source for this connector. Please provide valid operator and try again.
1352-400:
  title: Bad Request
  detailed-message: The provided operator {operator} cannot be mapped to any supported native operator for {ql}. Please provide valid operator and try again.
1353-400:
  title: Bad Request
  detailed-message: The filter at source is not yet supported for {connectorType} connector. Please check the supported connectors in the documentation: https://experienceleague.adobe.com/docs/experience-platform/sources/api-tutorials/filter.html.
1354-400:
  title: Bad Request
  detailed-message: The query language {ql} is not yet supported for filter at source. Please provide valid query language and try again.
1355-400:
  title: Bad Request
  detailed-message: The provided filter type is invalid. The supported filter type is: PQL. Please provide a valid filter type and try again.
1356-400:
  title: Bad Request
  detailed-message: The provided filter format is invalid. The supported filter format is : pql/json. Please provide valid filter format and try again.
1357-400:
  title: Bad Request
  detailed-message: The provided filter is invalid. The value must be provided with detailed filters. Please provide valid filter and try again.
1358-400:
  title: Bad Request
  detailed-message: The provided param 'objectType' is invalid. Please provide a valid objectType and try again.
1359-400:
  title: Bad Request
  detailed-message: The param {param} is missing in the request. Please provide a valid {param} and try again.
1360-400:
  title: Bad Request
  detailed-message: The start time cannot be set in the past. Please provide a valid start time and try again.
1361-400:
  title: Bad Request
  detailed-message: Interval is not allowed with one time ingestion. Please remove interval or change frequency and then try again.
1362-400:
  title: Bad Request
  detailed-message: Interval cannot be less than {minInterval}. Please provide a valid interval value and try again.
1363-400:
  title: Bad Request
  detailed-message: Interval {interval} is not allowed with frequency: {frequency}. Please provide a valid interval value and try again.
1364-400:
  title: Bad Request
  detailed-message: The backfill flag is not allowed when frequency is set to one. Please remove the backfill flag when frequency is set to once and try again.
1365-400:
  title: Bad Request
  detailed-message: The path {path} provided in ops is invalid. Please provide valid path {path} and try again.
1366-400:
  title: Bad Request
  detailed-message: The start time has passed and the update operation is no longer allowed.
1367-400:
  title: Bad Request
  detailed-message: The delta column is required in copy transformation when creating a CRM connector. Please provide delta column and try again.
1368-400:
  title: Bad Request
  detailed-message: Mode is not allowed in flow request. Please check your request and try again.
1369-400:
  title: Bad Request
  detailed-message: The delta column in copy transform is not allowed when frequency is set to once. Please remove the delta column and try again.
1370-400:
  title: Bad Request
  detailed-message: The source columns could not be fetched for ingestion because the mapping transformation is missing. Please add the mapping transformation and try again.
1371-400:
  title: Bad Request
  detailed-message: The file properties detection is not supported for {connectorType} connector. Please provide the file properties manually.
1372-400:
  title: Bad Request
  detailed-message: The current operation is not allowed. Explore via connection spec is not allowed for connection spec ID={connectionSpecId}.
1373-400:
  title: Bad Request
  detailed-message: The flowSpecType is missing in the request. Please provide a valid flowSpecType and try again.
1374-400:
  title: Bad Request
  detailed-message: The query parameters provided are invalid. You cannot have the determineProperties flag and user-defined properties in the same request. Please correct your request and try again.
1375-400:
  title: Bad Request
  detailed-message: The file properties detection failed. Please enter properties manually.
1376-400:
  title: Bad Request
  detailed-message: The file properties detection is not supported for connection spec id={connectionSpecId}. Please provide the file properties manually.
1377-400:
  title: Bad Request
  detailed-message: The provided value param is null and cannot be compared with operator {operator}. Please provide valid value param and try again.
1378-400:
  title: Bad Request
  detailed-message: An error occurred while validating the input column {column} for filter at source. The column name should be a valid column in the table. Please provide a valid column name and try again.
1379-400:
  title: Bad Request
  detailed-message: An error occurred while validating the input {value} for filter at source. The column DataType at source is {columnDataType} and value DataType [String] does not match. Please provide valid {value} and try again.
1380-400:
  title: Bad Request
  detailed-message: Failed to create flow run. Error message: {message}
1381-400:
  title: Bad Request
  detailed-message: WindowEndTime={endTime} cannot be before Window StartTime={startTime}. Please provide a valid end time and try again.
1382-400:
  title: Bad Request
  detailed-message: The delta column should match the value present in the flow's Copy transformations. Please provide valid delta column and try again.
1383-400:
  title: Bad Request
  detailed-message: The delta column is missing in the params received for creating a flow run. Please provide delta column in params and try again.
1384-400:
  title: Bad Request
  detailed-message: The params={params} provided for creating flow run are invalid or empty. Please provide valid params and try again.
1385-400:
  title: Bad Request
  detailed-message: The provided connectorType={connectorType} is not supported for creating flow runs. Please provide a valid connectorType and try again.
1386-400:
  title: Bad Request
  detailed-message: The flowId={flowId} with scheduleParams frequency={frequency} is not supported for creating flow runs. Please provide valid frequency and try again.
1387-400:
  title: Bad Request
  detailed-message: The flowRunId={flowRunId} is in an invalid state={state} for re-triggering. Please try again after some time and contact customer support if the problem persists
1388-400:
  title: Bad Request
  detailed-message: The flow={flow} is in state={state} and cannot be re-triggered. The flow must be in enabled state for re-triggering.
1389-400:
  title: Bad Request
  detailed-message: An error occurred while parsing the provided base64-encoded string. Please provide a valid encoded filter string and try again.
1390-400:
  title: Bad Request
  detailed-message: The 'not' operator cannot have have more than one comparison. Please provide a valid number of comparisons and try again.
1391-400:
  title: Bad Request
  detailed-message: Failed to parse SchemaMetaData in sourceConnection for Id={sourceConnectionId}. Please check the schemaMetaData in your request and try again.
1392-400:
  title: Bad Request
  detailed-message: Failed to parse Transformations in flow request for flowId={flowId}. Please check the transformations in your request and try again.
1393-400:
  title: Bad Request
  detailed-message: The provided parameter {parameter} is null or empty. Please provide a valid {parameter} and try again.
1394-400:
  title: Bad Request
  detailed-message: The minimum value for a parameter {parameter} is one. Please provide a valid {parameter} and try again.
1395-400:
  title: Bad Request
  detailed-message: The source connection found in the flow is either null or empty. Please provide a valid source connection in the flow and try again.
1396-400:
  title: Bad Request
  detailed-message: A matching format could not be found. Please provide a matching format and try again.
1397-400:
  title: Bad Request
  detailed-message: The provided frequency : {frequency} is invalid. Please provide a valid frequency and try again.
1398-400:
  title: Bad Request
  detailed-message: The provided operation : {action} is unsupported. Please check the operation provided and try again.
1399-400:
  title: Bad Request
  detailed-message: A valid requestFileType could not be found. Please provide a valid requestFileType and try again.
1400-400:
  title: Bad Request
  detailed-message: The provided param 'templateType' is invalid. Please provide a valid template type and try again.
1401-400:
  title: Bad Request
  detailed-message: The provided flow run action={flowRunAction} is not supported. Please provide a valid flow run action and try again.
1402-500:
  title: Internal Error
  detailed-message: An internal error has occurred. Please try again and contact customer support if the problem persists.
1403-400:
  title: Bad Request
  detailed-message: The start time has passed and you can no longer change the frequency to once.
1404-400:
  title: Bad Request
  detailed-message: The start time has passed and you can no longer update backfill.

# FlowService Exceptions (1600-1699)
1600-400:
  title: Bad Request
  detailed-message: The request could not be processed. {detailedMessage}
1601-500:
  title: Internal Error
  detailed-message: An internal error has occurred. Please try again and contact customer support if the problem persists.
1602-404:
  title: Resource not found
  detailed-message: The requested resource is not found. {detailedMessage}
1603-503:
  title: Service Unavailable
  detailed-message: The service is temporarily unavailable. Please try again. Contact customer support if the problem persists.
1604-504:
  title: Gateway Timeout
  detailed-message: A gateway timeout has occurred. Please try again. Contact customer support if the problem persists.
1605-401:
  title: Unauthorized
  detailed-message: The user is unauthorized. {detailedMessage}
1606-403:
  title: Forbidden
  detailed-message: The requested operation is forbidden. {detailedMessage}
1607-412:
  title: Precondition Failed
  detailed-message: The condition defined by the If-Unmodified-Since or If-None-Match headers is not fulfilled. {detailedMessage}

# Landing-Zone Exceptions (1700-1799)
1700-500:
  title: Internal Error
  detailed-message: An internal error has occurred. Please try again and contact customer support if the problem persists.
1701-400:
  title: Bad Request
  detailed-message: The provided landing zone is inactive. Please activate the landing zone and try again.
1702-400:
  title: Bad Request
  detailed-message: The SAS Type={sasType} provided for the landing zone is not allowed. Please provide a valid SAS and try again.
1703-400:
  title: Bad Request
  detailed-message: The refresh of Credentials is not allowed.
1704-400:
  title: Bad Request
  detailed-message: The keys returned for storageAccountName={accountName} in subscriptionId={subscriptionId} and resourceGroupName={resourceGroupName} are malformed. Please check your request and try again. Please contact support if problem persists.
1705-400:
  title: Bad Request
  detailed-message: The provided data landing zone action is unsupported. Please provide a valid action and try again.
1706-400:
  title: Bad Request
  detailed-message: The allowed activations config is not configured correctly for landing zone={landingZoneType}. Please try again and contact customer support if the problem persists.
1707-400:
  title: Bad Request
  detailed-message: The service failed to startup because the landing zone config cannot be null or empty. Please make sure landing zone config is not null and try again.
1708-400:
  title: Bad Request
  detailed-message: The container config cannot be null in landingZoneType={landingZoneType}. Please make sure the container config is not null and try again.
1709-400:
  title: Bad Request
  detailed-message: The SAS details cannot be null for {tokenConfig} in landingZoneType={landingZoneType}. Please provide a valid SAS in the config and try again.
1710-400:
  title: Bad Request
  detailed-message: The provided landing zone of type: {landingZoneUseCase} is not supported. Please provide a valid landing zone type and try again.
1711-400:
  title: Bad Request
  detailed-message: The SAS details were not found for the provided data landing zone of type: {landingZoneUseCase}. Please check if SAS details are provided for the provided landing zone type.
1712-400:
  title: Bad Request
  detailed-message: The provided landing zone action : {actionType} is not allowed. Please provide a valid data landing zone action and try again.
1713-400:
  title: Bad Request
  detailed-message: The {OperationType} is not allowed for the provided {tokenType}. Please check your request and try again.
1714-400:
  title: Bad Request
  detailed-message: The clientId={clientId} is not allowed to perform this operation. Please check your request with permissions and try again.
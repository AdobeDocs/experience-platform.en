---
title: Cloud Connector Extension Overview
description: Learn about the Cloud Connector event forwarding extension in Adobe Experience Platform.
exl-id: f3713652-ac32-4171-8dda-127c8c235849
---
# Cloud Connector extension overview

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../term-updates.md) for a consolidated reference of the terminology changes.

The Cloud Connector event forwarding extension allows you to create custom HTTP requests to send data to a destination or retrieve data from a destination. The Cloud Connector extension is like having Postman on Adobe Experience Platform Edge Network and can be used to send data to an endpoint that does not have a dedicated extension yet. 

Use this reference for information about the options available when using this extension to build a rule. 

## Cloud Connector extension action type

This section describes the Send Data action type available in the Adobe Experience Platform Cloud Connector extension. 
 
### Request type 

To select the type of request required by the endpoint, select the appropriate type under the [!UICONTROL Request Type] dropdown. 

|Method|Description|
|---|---|
|[GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)|Requests a representation of the specified resource. Requests using GET should only retrieve data. |
|[POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)|Submits an entity to the specified resource, often causing a change in state or side effects on the server. |
|[PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)|Replaces all current representations of the target resource with the request payload. |
|[PATCH](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH)|Applies partial modifications to a resource. |
|[DELETE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE)|Deletes the specified resource. |

### Endpoint URL

In the text field next to the Request type dropdown menu, enter the URL for the endpoint to which you are sending data.  

### Query params, headers, and body configuration

Use each of these tabs (Query Params, Headers, and Body Data Elements) to control what data is sent to a given endpoint. 

#### Query Params

Define a key and value for each key-value pair you want to send as a query string parameter. To manually enter a data element, use the curly brace data element tokenization for event forwarding. To reference the value of a data element named “siteSection” as a key or value, enter `{{siteSection}}`. Or, select the previously-created data element by selecting it in the dropdown menu. 

To add more query parameters, select **[!UICONTROL Add Another]**.

#### Headers

Define a key and value for each key-value pair you want to send as a header. To manually enter a data element, use the curly brace data element tokenization for event forwarding. To reference the value of a data element named “pageName” as a key or value, enter `{{pageName}}`. Or, select the previously created data element by selecting it in the dropdown menu.  

To add more headers, select **[!UICONTROL Add Another]**. 

The following table lists the predefined headers. You are not limited to these headers and can add your own custom headers if required, but they are made available for your convenience. 

>[!NOTE]
>
>For more detailed information on these headers, visit [https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

|Header|Description|
|---|---|
|[A-IM](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept)| |
|[Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) | |
|[Accept-Charset](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Charset) | |
|[Accept-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) | |
|[Accept-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) | |
|[Accept-Datetime](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) |Transmitted by a user agent to indicate it wants to access a past state of an original resource. To that end, the `Accept-Datetime` header is conveyed in an HTTP request issued against a TimeGate for an original resource, and its value indicates the datetime of the desired past state of the original resource.|
|Access-Control-Request-Headers|Used by browsers when issuing a [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/preflight_request), to let the server know which [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) the client might send when the actual request is made.  |
|Access-Control-Request-Method|Used by browsers when issuing a [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/preflight_request), to let the server know which [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) will be used when the actual request is made. This header is necessary because the preflight request is always an [OPTION](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS) and doesn't use the same method as the actual request.  |
|Authorization|Contains the credentials to authenticate a user-agent with a server.|
|[Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)|Directives for caching mechanisms in both requests and responses.|
|[Connection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection)|Controls whether the network connection stays open after the current transaction finishes.|
|[Content-Length](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length)|The size of the resource, in decimal number of bytes. |
|[Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)|Indicates the media type of the resource. | 
|Cookie|Contains stored [HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) previously sent by the server with the [`Set-Cookie`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) header.|
|Date|General HTTP header contains the date and time at which the message was originated. |
|[DNT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT)|Expresses the user's tracking preference. |
|Expect|Indicates expectations that need to be fulfilled by the server in order to properly handle the request. |
|Forwarded|Contains information from the [reverse proxy servers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling) that is altered or lost when a proxy is involved in the path of the request. |
|From|Contains an Internet email address for a human user who controls the requesting user agent. |
|Host |Specifies the host and port number of the server to which the request is being sent. |
|If-Match| |
|If-Modified-Since| |
|[If-None-Match](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) | |
|[If-Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Range)| |
|[If-Unmodified-Since](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since)| |
|[Max-Forwards](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since)| |
|[Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin)| |
|[Pragma](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Pragma)|Implementation-specific header that may have various effects anywhere along the request-response chain. Used for backwards compatibility with HTTP/1.0 caches where the Cache-Control header is not yet present.| |
|[Proxy-Authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authorization) |
|[Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range)|Indicates the part of a document that the server should return.| |
|[Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)|The address of the previous web page from which a link to the currently requested page was followed. | |
|TE|Specifies the transfer encodings the user agent is willing to accept. (You could informally call it `Accept-Transfer-Encoding`, which would be more intuitive). |
|Upgrade|The relevant RFC document for the [`Upgrade` header field is RFC 7230, section 6.7](https://tools.ietf.org/html/rfc7230#section-6.7). The standard establishes rules for upgrading or changing to a different protocol on the current client, server, transport protocol connection. For example, this header standard allows a client to change from HTTP 1.1 to HTTP 2.0, assuming the server decides to acknowledge and implement the `Upgrade` header field. Neither party is required to accept the terms specified in the `Upgrade` header field. It can be used in both client and server headers. If the `Upgrade` header field is specified, then the sender MUST also send the `Connection` header field with the `upgrade` option specified.| |
|[User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent)|Contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent. |
|[Via](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Via) | Added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers. |
|[Warning](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Warning)|General warning information about possible problems. |
|X-CSRF-Token| |
|X-Requested-With| |

#### Body as JSON

Define a key and value for each key-value pair you want to send in the body of the request. To manually enter a data element, use the curly brace data element tokenization for event forwarding. To reference the value of a data element named “appSection” as a key or value, enter `{{appSection}}`. Or, select the previously-created data element by selecting it in the dropdown menu.  

To add additional key-value pairs, select **[!UICONTROL Add Another]**. 

#### Body as Raw 

Define a key and value for each key-value pair you want to send in the body of the request. To manually enter a data element, use the curly brace data element tokenization for event forwarding. To reference the value of a data element named “appSection” as a key or value, enter `{{appSection}}`. Or, select the previously created data element by selecting it in the dropdown menu. You can add one or more data elements.

### Advanced 

Actions within rules in event forwarding execute sequentially. There could be situations where you want to retrieve data from an external source that is not present on the incoming event from the client and then take this response and either transform or send this data to a final destination in a subsequent action within a single rule. The “Save the request response” in the advanced section enables this.  

To save the response body from an endpoint check the **[!UICONTROL Save the request response]** box and define a response key in the text field.  

If you defined the response key as `productDetails`, reference this data in a data element and then reference this data element in a subsequent action within the same rule. To create a data element that references `productDetail`, create a data element of type `path` and enter the following path: 

```Json
arc.ruleStash.[EXTENSION-NAME-HERE].responses.[RESPONSE-KEY-HERE] 

arc.ruleStash.adobe-cloud-connector.reponses.productDetails 
```

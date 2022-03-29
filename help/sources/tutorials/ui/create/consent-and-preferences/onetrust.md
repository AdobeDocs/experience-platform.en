---
keywords: Experience Platform;home;popular topics;onetrust;OneTrust
solution: Experience Platform
title: Create a OneTrust Source Connection in the UI
topic-legacy: overview
type: Tutorial
description: Learn how to create a OneTrust source connection using the Adobe Experience Platform UI.
---
# Create a [!DNL OneTrust] source connection in the UI

This tutorial provides steps for creating a [!DNL OneTrust] source connector using the Platform user interface.

## Overview

*This describes how to create a live outbound connection to Adobe Experience Platform, to ingest both historic and scheduled consent data into Experience Platform through UI experience.
To read further about OneTrust, please visit https://www.onetrust.com/company/about-us/*

>[!IMPORTANT]
>
>This documentation page was created by the [!DNL OneTrust] team. For any inquiries or update requests, please contact them directly at *https://my.onetrust.com/s/contactsupport?language=en_US*.

## Prerequisites

* *Needing to be aware of API key/client credentials generation through OneTrust website. See the [[!DNL OneTrust] OAuth 2 guide](https://developer.onetrust.com/docs/api-docs-v3/b3A6MjI4OTUyOTc-generate-access-token) for detailed instructions on finding your access token.*

>[!IMPORTANT]
>
>The access token does not refresh automatically when expires because system-to-system refresh tokens are not supported by OneTrust. Therefore it is necessary to make sure that the access tokens are updated in the connection before it expires. The maximum life of an access token that can be configured is 1 Year.

### Gather required credentials

In order to connect [!DNL OneTrust] to Platform, you must provide values for either one of the following connection properties:

| Credential | Description | Example |
| --- | --- | --- |
| *API KEY* | *Need to generate API Key in OneTrust Platform to be able to connect to our platform.(Go to Settings>Access Management> Client Credentials> API Keys)* | *ZGFkZDMyMjFhMmEyNDQ2ZGFhNTdkZjNkZjFmM2IyOWE6QjlUSERVUTNjOFVsRmpEZTJ6Vk9oRnF3Sk8xNlNtcm4=* |
| *CLIENT CREDENTIALS* | *Need to generate Client Credentials in OneTrust Platform to be able to connect to our platform.(Go to Settings>Access Management> Client Credentials> Client Credentials* | *eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQXBpIEtleSBVc2VyIiwidXNlcl9uYW1lIjoiMGI2ZDRlMjI3ZDAxNGM5YzkwZjdkOWE1NGZjOTVjOTVAYXBpLm9uZXRydXN0LmNvbSIsImxhbmd1YWdlSWQiOjEsInNlc3Npb25JZCI6ImRlOGEzZDUxLTFiMTYtNGM5ZS1hODNhLWZkZDUwOWI4YmNiZSIsInRlbmFudEd1aWQiOiIwYjZkNGUyMi03ZDAxLTRjOWMtOTBmNy1kOWE1NGZjOTVjOTUiLCJjbGllbnRfaWQiOiIzMWJiMjBmOGUzYjU0N2YwYjc1MzY2NWVjODMxNmFkYyIsIm9yZ0dyb3VwSWQiOiJjZjQzMTljMi03MmQ1LTRlMjgtOGIwNy1kY2FhMmI3YTBkYzUiLCJvcmdHcm91cEd1aWQiOiJjZjQzMTljMi03MmQ1LTRlMjgtOGIwNy1kY2FhMmI3YTBkYzUiLCJvdC1zY29wZXMiOiJBU1NFU1NNRU5ULEFTU0VTU01FTlRfUkVBRCxDT05TRU5ULENPTlNFTlRfUkVBRCxDT05UUk9MLENPT0tJRSxDT09LSUVfUkVBRCIsInNjb3BlIjpbInJlYWQiXSwidGVuYW50SWQiOjM2LCJndWlkIjoiMGRmY2RiMjItZGNlNS00NWI5LWJlYTctNmNmZTQwMGFkZDJkIiwiZXhwIjoxNjM5MjU5Nzg4LCJqdGkiOiIwNzE1OGVkYi1mZjdkLTRkZjktYjQxYS0xZTRhMjgzZmE3N2EiLCJlbWFpbCI6IjBiNmQ0ZTIyN2QwMTRjOWM5MGY3ZDlhNTRmYzk1Yzk1QGFwaS5vbmV0cnVzdC5jb20ifQ.Hrzgo-vEE073wxkXtJDLKGRjAr2iT4G3EsyISr7x1brLLUuAojWWEGO1ue4RWfntUjEDYC9UAxpMbuP2Xv5ymqUartufj6YwamAqKdGd9gijaoGTXSNvE6ALSCqGOz8owpjh10Qu7nmBnSfzvmkSAD0dJKofJGvGd6IUC21eAU9rcX16R7hbGdmvSWtX7pzjwrZ72CcnLtwCSg7-XJhNB24dY_-iaftBu_vsw3Lr6nddMOGMfXtUl8bPN_ptmXcF4bA-7y2Vw7xEKYVKreKuQsiMAJ2a2aKiRVmHE1RFbyp2R-Z2soqkUL_DQxKZMeU9ehX8NDcmZ_JmtzemgeaoPQ* |


For more information on these credentials, see the [!DNL OneTrust] authentication documentation. *[[!DNL OneTrust] OAuth 2 guide](https://developer.onetrust.com/docs/api-docs-v3/b3A6MjI4OTUyOTc-generate-access-token)*.

## Connect your [!DNL OneTrust] account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *Consent & Preferences* category, select [!DNL OneTrust], and then select **[!UICONTROL Add data]**.

![catalog](../../../../images/tutorials/create/sdk/catalog.png)

The **[!UICONTROL Connect YOURSOURCE account]** page appears. On this page, you can either use new credentials or existing credentials.

### Existing account

To use an existing account, select the [!DNL OneTrust] account you want to create a new dataflow with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/sdk/existing.png)

### New account

If you are creating a new account, select **[!UICONTROL New account]**, and then provide a name, an optional description, and your credentials. When finished, select **[!UICONTROL Connect to source]** and then allow some time for the new connection to establish.

![new](../../../../images/tutorials/create/sdk/new.png)

## Next steps

*Workflows for the remaining steps of creating a dataflow are modularized. If there are any specific call outs you want to make regarding your source, please see the additional resources section below.*

By following this tutorial, you have established a connection to your *YOURSOURCE* account. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](../../dataflow/crm.md).

## Additional information

>[!TIP]
>
>In the Mapping screen after selecting the target schema, we have a limitation of not being able to map any dynamic key-pair values as Object from OneTrust to the Experince platform.
>Here, we must specify those keys in the target schema to be able to map data during ingestion.

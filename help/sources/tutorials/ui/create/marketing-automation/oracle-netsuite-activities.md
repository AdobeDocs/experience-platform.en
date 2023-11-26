---
title: Create a [!DNL Oracle NetSuite Activities] source connection in the UI
description: Learn how to create a SAP Commerce source connection using the Adobe Experience Platform UI.
badge: Beta
---
# Create a [!DNL Oracle NetSuite Activities] source connection in the UI

>[!NOTE]
>
>The [!DNL Oracle NetSuite Activities] source is in beta. See the [sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

The following tutorial walks you through the steps to create a [!DNL Oracle NetSuite Activities] source connection to bring [!DNL Oracle NetSuite] events data using the Adobe Experience Platform user interface.

## Getting started {#getting-started}

This tutorial requires a working understanding of the following components of Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL Oracle NetSuite] account, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/marketing-automation.md).

### Gather required credentials

In order to connect [!DNL Oracle NetSuite Activities] to Platform, you must provide values for the following connection properties:

| Credential | Description | Example |
| --- | --- | --- |
| Client ID | The Client ID value when you create the integration record in [!DNL Oracle NetSuite]. The process to create an interation record can be found [here](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157771733782.html#procedure_157838925981). | `7fce.....b42f`<br>The value is a 64 characters string. |
| Client secret | The Client Secret value when you create the integration record. The process to create an interation record can be found [here](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157771733782.html#procedure_157838925981). | `5c98.....1b46`<br>The value is a 64 characters string. |
| authorizationTestUrl | | https://<ACCOUNT_ID>.app.netsuite.com/app/login/oauth2/authorize.nl?response_type=code&redirect_uri=https%3A%2F%2Fapi.github.com&scope=rest_webservices&state=ykv2XLx1BpT5Q0F3MRPHb94j&client_id=<CLIENT_ID> |
| Access token | The Access token value is generated at the end of [Step Two](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158081952044.html#Step-Two-POST-Request-to-the-Token-Endpoint) of the [OAuth 2.0 Authorization Code Grant Flow](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158074210415.html#OAuth-2.0-Authorization-Code-Grant-Flow) tutorial. Access tokens expire are valid only for 60 minutes. | `eyJr......f4V0`<br> the value is a 1024 characters string formatted as a JSON Web Token (JWT). |
| Refresh token | The Refresh token value value is generated at the end of [Step Two](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158081952044.html#Step-Two-POST-Request-to-the-Token-Endpoint) of the [OAuth 2.0 Authorization Code Grant Flow](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158074210415.html#OAuth-2.0-Authorization-Code-Grant-Flow) tutorial. Refresh tokens have a longer validity and are valid for 7 days. Refresh tokens are used by the [!DNL Oracle NetSuite Activities] source to internally generate new Access tokens. | `eyJr......dmxM`<br> the value is a 1024 characters string formatted as a JSON Web Token (JWT). |
| accessTokenUrl | The [!DNL NetSuite] Access Token URL. This takes the form shown alongside. | https://<ACCOUNT_ID>.suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token |

>[!IMPORTANT]
>
> After a Refresh token expires you must create a New Account in Platform with updated tokens.

## Connect your [!DNL Oracle NetSuite] account {#connect-account}

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *Marketing Automation* category, select **[!DNL Oracle NetSuite Activities]**, and then select **[!UICONTROL Add data]**.

![Platform UI screenshot for catalog with Oracle NetSuite Activities card](../../../../images/tutorials/create/marketing-automation/oracle-netsuite-activities/catalog-card.png)

The **[!UICONTROL Connect Oracle NetSuite Activities account]** page appears. On this page, you can either use new credentials or existing credentials.

>[!IMPORTANT]
>
> As explained in the [Gather required credentials](../../../../connectors/marketing-automation/oracle-netsuite-activities.md#gather-credentials) section the **Refresh token** expires after 7 days. If you encounter the error message `The request could not be processed. Error from flow provider: The request could not be processed. Rest call failed with client error, status code 401 Unauthorized, please check your activity settings.`, proceed to create a [New Account](#new-account) in Platform with updated tokens.

### Existing account {#existing-account}

To use an existing account, select the [!DNL Oracle NetSuite Activities] account you want to create a new dataflow with, then select **[!UICONTROL Next]** to proceed.

![Platform UI screenshot to connect Oracle NetSuite Activities account with an existing account](../../../../images/tutorials/create/marketing-automation/oracle-netsuite-activities/existing.png)

### New account {#new-account}

If you are creating a new account, select **[!UICONTROL New account]**, and then provide a name, an optional description, and your credentials. When finished, select **[!UICONTROL Connect to source]** and then allow some time for the new connection to establish.

![Platform UI screenshot to connect Oracle NetSuite Activities account with a new account](../../../../images/tutorials/create/marketing-automation/oracle-netsuite-activities/new.png)

## Next steps {#next-steps}

By following this tutorial, you have established a connection to your [!DNL Oracle NetSuite Activities] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](../../dataflow/marketing-automation.md).

## Additional resources {#additional-resources}

The sections below provide additional resources that you can refer to when using the [!DNL Oracle NetSuite Activities] source.

### Mapping {#mapping}

Platform provides intelligent recommendations for auto-mapped fields based on the target schema or dataset that you selected. You can manually adjust mapping rules to suit your use cases. Based on your needs, you can choose to map fields directly, or use data prep functions to transform source data to derive computed or calculated values. For comprehensive steps on using the mapper interface and calculated fields, see the [Data Prep UI guide](../../../../../data-prep/ui/mapping.md).

>[!NOTE]
>
> The fields displayed are dependent on the subscriptions [!DNL Oracle NetSuite] account has access to. For example, if you do not have access to billing you will not see the billing related fields.  

### Scheduling {#scheduling}

When scheduling your [!DNL Oracle NetSuite Activities] dataflow for ingestion, you must select the following frequency and interval configuration:

| Frequency | Interval |
| --- | --- |
| `Once` | 1 |

While retrieving data the [!DNL Oracle NetSuite] responds with the last modified / created date as a date format instead of a timestamp. Hence, the scheduling is limited to 1 day.

Once your have provided the values for your schedule, select **[!UICONTROL Next]**.

![The scheduling step of the sources workflow.](../../../../images/tutorials/create/marketing-automation/oracle-netsuite-activities/scheduling.png)
---
title: Mailchimp Interest Categories
description: Mailchimp (also known as Intuit Mailchimp) is a popular marketing automation platform and email marketing service used by businesses to manage and talk to contacts (clients, customers, or other interested parties) using mailing lists and email marketing campaigns. Use this connector to sort your contacts based on their interests and preferences.
last-substantial-update: 2023-05-24
exl-id: bdce8295-7305-4d54-81c1-7fa3e580ce70
---
# [!DNL Mailchimp Interest Categories] connection

[[!DNL Mailchimp]](https://mailchimp.com) is a popular marketing automation platform and email marketing service used by businesses to manage and talk to contacts *(clients, customers, or other interested parties)* using mailing lists and email marketing campaigns. Use this connector to sort your contacts based on their interests and preferences.

[!DNL Mailchimp Interest Categories] uses [audiences](https://mailchimp.com/help/getting-started-audience/), [groups](https://mailchimp.com/help/getting-started-with-groups/), and interest categories *(also known as group names or group titles)*. Each [!DNL Mailchimp] group is a list of interest categories. Contacts are associated with an interest category when they subscribe to one or more interest categories through a signup form on your website. Within an audience, you can also organize the contacts into groups and associate them with interest categories, and these can then be used to create segments. You can use these audiences to broadcast targeted campaign emails to the subscribed contacts.

<!--
Compared to [!DNL Mailchimp Tags] which you would use for internal classification, [!DNL Mailchimp Interest Categories] is meant to manage subscriptions to topics of interest that your contacts might be interested in. *Note, Experience Platform also has a connection for [!DNL Mailchimp Tags], you can check it out on the [[!DNL Mailchimp Tags]](/help/destinations/catalog/email-marketing/mailchimp-tags.md) page.*
-->

This [!DNL Adobe Experience Platform] [destination](/help/destinations/home.md) uses the [[!DNL Mailchimp batch subscribe or unsubscribe API]](https://mailchimp.com/developer/marketing/api/lists/batch-subscribe-or-unsubscribe/) API to create [interest categories](https://mailchimp.com/developer/marketing/api/interest-categories/) and then add contacts from each of the selected Platform audiences into a corresponding interest category. You can **add new contacts** or **update the information of existing [!DNL Mailchimp] contacts**, then **add or remove them from their desired groups** within an existing [!DNL Mailchimp] audience after activating them within a new segment. [!DNL Mailchimp Interest Groups] uses the selected audience names from Platform as interest categories within [!DNL Mailchimp].

## Use cases {#use-cases}

To help you better understand how and when you should use the [!DNL Mailchimp Interest Categories] destination, here is a sample use case that Adobe Experience Platform customers can solve by using this destination.

### Send emails to contacts for marketing campaigns {#use-case-send-emails}

The sales department of a sport goods website wants to broadcast an email-based marketing campaign to a list of contacts who have self-identified themselves as being interested in soccer. The lists of contacts are segregated as batches in the data export received from the development team of the website and therefore need to be tracked. The team identifies an existing [!DNL Mailchimp] audience and starts building the Experience Platform audiences into which the contacts from each list are added. After sending these audiences to [!DNL Mailchimp Interest Categories], if any contacts do not exist in the selected [!DNL Mailchimp] audience they get added to a group with the audience name that the contact belongs to. If any contacts already exist in the [!DNL Mailchimp] audience or group, then their information is updated. Once the data is sent over to [!DNL Mailchimp Interest Categories], the Sales team can select and send the marketing campaign email to the soccer interest group within the [!DNL Mailchimp] audience.

## Prerequisites {#prerequisites}

Refer to the sections below for any prerequisites that you need to set up in Experience Platform and [!DNL Mailchimp] and for information that you must gather before working with the [!DNL Mailchimp Interest Categories] destination.

### Prerequisites in Experience Platform {#prerequisites-in-experience-platform}

Before activating data to the [!DNL Mailchimp Interest Categories] destination, you must have a [schema](/help/xdm/schema/composition.md), a [dataset](https://experienceleague.adobe.com/docs/platform-learn/tutorials/data-ingestion/create-datasets-and-ingest-data.html?lang=en), and [segments](https://experienceleague.adobe.com/docs/platform-learn/tutorials/segments/create-segments.html?lang=en) created in [!DNL Experience Platform].

### Prerequisites for the [!DNL Mailchimp Interest Categories] destination {#prerequisites-destination}

Note the following prerequisites in order to export data from Platform to your [!DNL Mailchimp] account:

#### You must have a [!DNL Mailchimp] account {#prerequisites-account}

Before you can create a [!DNL Mailchimp Interest Categories] destination, you must first ensure that you have a [!DNL Mailchimp] account. If you do not have one already, visit the [[!DNL Mailchimp] signup page](https://login.mailchimp.com/signup/) to register and create your account.

#### Gather [!DNL Mailchimp] API key {#gather-credentials}

You need your [!DNL Mailchimp] **API key** to authenticate the [!DNL Mailchimp Interest Categories] destination against your [!DNL Mailchimp] account. The **API key** serves as the **Password** when you [authenticate the destination](#authenticate).

If you do not have your **API key**, Sign in to your account and refer to the [[!DNL Mailchimp] Generate your API key](https://mailchimp.com/developer/marketing/guides/quick-start/#generate-your-api-key) documentation to create one. 

An example of an API key is `0123456789abcdef0123456789abcde-us14`. 

>[!IMPORTANT]
>
>If you generate the **API key**, write it down as you will not be able to access it after generation.

#### Identify [!DNL Mailchimp] data center {#identify-data-center}

Next, you must identify your [!DNL Mailchimp] data center. To do this, log in to your [!DNL Mailchimp] account and navigate to the **API keys section** of your account. 

The value is the first part of the URL you see in your browser. If the URL is *https://`us14`.mailchimp.com/account/api/*, then the data center is `us14`. 

It's also appended to your API key in the form *key-dc*; if your API key is `0123456789abcdef0123456789abcde-us14`, then the data center is `us14`. 

Write down the data center value *(`us14` in this example)*, you need this value when you [fill in destination details](#destination-details).

If you require further guidance, refer to the [[!DNL Mailchimp] Fundamentals documentation](https://mailchimp.com/developer/marketing/docs/fundamentals/#api-structure).

### Guardrails {#guardrails}

Each of your [!DNL Mailchimp] audiences can contain up to 60 group names (or interest categories) in a single group or across several groups within the same audience. Refer to [!DNL Mailchimp] [groups](https://mailchimp.com/help/getting-started-with-groups/) for any clarifications required. When you reach this limit, you get a `400 BAD_REQUEST Cannot have more than 60 interests per list (Across all categories)` message as an error response from the [!DNL Mailchimp] API.

Additionally, refer to the [!DNL Mailchimp] [rate limits](https://mailchimp.com/developer/marketing/docs/fundamentals/#api-limits) for detailed information about the limits imposed by the [!DNL Mailchimp] API.

## Supported identities {#supported-identities}

[!DNL Mailchimp] supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

| Target Identity | Description | Considerations |
|---|---|---|
| Email | Contact email Address | Mandatory |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | <ul><li>You are exporting all members of a segment, together with the desired schema fields *(for example: email address, phone number, last name)*, according to your field mapping.</li><li> For each selected audience in Platform, the corresponding [!DNL Mailchimp Interest Categories] segment status gets updated with its audience status from Platform.</li></ul>|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. When a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
>
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

Within **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]**, search for [!DNL Mailchimp Interest Categories]. Alternatively, you can locate it under the **[!UICONTROL Email marketing]** category.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields below and select **[!UICONTROL Connect to destination]**.

| Field | Description |
| --- | --- |
| **[!UICONTROL Username]** | Your [!DNL Mailchimp Interest Categories] username. |
| **[!UICONTROL Password]** | Your [!DNL Mailchimp] **API key**, which you had noted down in the [Gather [!DNL Mailchimp] credentials](#gather-credentials) section.<br> Your API key takes the form of `{KEY}-{DC}`, where the `{KEY}` portion refers to the value noted down in the [[!DNL Mailchimp] API key](#gather-credentials) section and the `{DC}` portion refers to the [[!DNL Mailchimp] data center](#identify-data-center). <br>You can provide either the `{KEY}` portion or the entire form.<br> For example, if your API key is <br>*`0123456789abcdef0123456789abcde-us14`*,<br> you could provide either *`0123456789abcdef0123456789abcde`* or *`0123456789abcdef0123456789abcde-us14`* as the value. |

{style="table-layout:auto"}

![Platform UI screenshot showing how to authenticate.](../../assets/catalog/email-marketing/mailchimp-interest-categories/authenticate-destination.png)

If the details provided are valid, the UI displays a **[!UICONTROL Connected]** status with a green check mark. You can then proceed to the next step.

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Platform UI screenshot showing the destination details.](../../assets/catalog/email-marketing/mailchimp-interest-categories/destination-details.png)

| Field | Description |
| --- | --- |
| **[!UICONTROL Name]** | A name by which you will recognize this destination in the future. |
| **[!UICONTROL Description]** | A description that will help you identify this destination in the future. |
| **[!UICONTROL Data center]** | Your [!DNL Mailchimp] account `data center`. Refer to the [Identify [!DNL Mailchimp] data center](#identify-data-center) section for any guidance. |
| **[!UICONTROL Audience Name (Please select Data center first)]** | After you select your **[!UICONTROL Data center]**, this dropdown is automatically populated with the audience names from your [!DNL Mailchimp] account. Select the audience that you want to update with data from Platform. |
| **[!UICONTROL Interest Category (Please select Data center and Audience Name first)]** | After you select your **[!UICONTROL Audience Name]**, this dropdown is automatically populated with the interest group category names from your [!DNL Mailchimp] account. Select the category name that you want to update with data from Platform. |

{style="table-layout:auto"}

>[!TIP]
>
> If the API key you provided in the **[!UICONTROL Password]** field or the **[!UICONTROL Data center]** value are incorrect, the UI displays a [!DNL Mailchimp] API error response: *`No options are available. Please verify the values selected for the following dependent fields: dataCenter`* as shown below. In this case, you are not be able to select a value from the **[!UICONTROL Audience Name (Please select Data center first)]** field. To fix this error, provide the correct values.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate profiles and audiences to streaming audience export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

### Mapping considerations and example {#mapping-considerations-example}

To correctly send your audience data from Adobe Experience Platform to the [!DNL Mailchimp Interest Categories] destination, you must go through the field mapping step. Mapping consists of creating a link between your Experience Data Model (XDM) schema fields in your Platform account and their corresponding equivalents from the target destination.

To correctly map your XDM fields to the [!DNL Mailchimp Interest Categories] destination fields, follow the steps below:

1. In the **[!UICONTROL Mapping]** step, select **[!UICONTROL Add new mapping]**. You can now see a new mapping row on the screen.
1. In the **[!UICONTROL Select source field]** window, choose the **[!UICONTROL Select attributes]** category and select the XDM attribute or choose the **[!UICONTROL Select identity namespace]** and select an identity.
1. In the **[!UICONTROL Select target field]** window, choose the **[!UICONTROL Select identity namespace]** and select an identity or choose **[!UICONTROL Select attributes]** category and select from the list of attributes populated from the [!DNL Mailchimp] API. *Any custom attributes that you have added to the selected [!DNL Mailchimp] Audience will also be available for selection as target fields.*

    The mappings available between your XDM profile schema and [!DNL Mailchimp Interest Categories] are as below:
    | Source Field | Target Field | Notes |
    | --- | --- | --- |
    |`IdentityMap: Email`|`Identity: email`| Mandatory: Yes |
    |`xdm: person.name.firstName`|`Attribute: FNAME`| |
    |`xdm: person.name.lastName`|`Attribute: LNAME`| |
    |`xdm: person.birthDayAndMonth`|`Attribute: BIRTHDAY`| |

    Additionally, `ADDRESS` is a special target field known as a `merge field` within your [!DNL Mailchimp] audience. The [[!DNL Mailchimp] documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/) defines the required keys as `addr1`, `city`, `state`, and `zip`, and the optional keys `addr2` and `country`. The values for these fields must be strings. If any of the `ADDRESS` field mappings are present, the destination passes the `ADDRESS` object to the [!DNL Mailchimp] API for update. Any `ADDRESS` fields that are not mapped has its value default to `NULL` except for country which defaults to `US`. 
    
    The mappings available for the `ADDRESS` field are as below:

    | Source Field | Target Field |
    | --- | --- |
    | `xdm: workAddress.street1` | `Attribute: ADDRESS.addr1` |
    | `xdm: workAddress.street2` | `Attribute: ADDRESS.addr2` |
    | `xdm: workAddress.city` | `Attribute: ADDRESS.city` |
    | `xdm: workAddress.state` | `Attribute: ADDRESS.state` |
    | `xdm: workAddress.postalCode` | `Attribute: ADDRESS.zip` |
    | `xdm: workAddress.country` | `Attribute: ADDRESS.country` |

    For example, you want to update the value for `country` with the contact's existing address field `addr1`, `city`, `state`, and `zip` values as `132, My Street, Kingston`, `New York`, `New York` and `12401`. To update the `country` you must pass the existing values with changes *(if any)* and the new value for country. So the values in your dataset should be `132, My Street, Kingston`, `New York`, `New York`, `12401`, and `US`. To reiterate, if you only pass `country` and do not provide values for `addr1`, `city`, `state`, and `zip` they will be overwritten by `NULL`.

    An example with the completed mappings is shown below:
    ![Platform UI screenshot example showing field mappings.](../../assets/catalog/email-marketing/mailchimp-interest-categories/mappings.png)

When you have finished providing the mappings for your destination connection, select **[!UICONTROL Next]**.

## Validate data export {#exported-data}

To validate that you have correctly set up the destination, follow the steps below:

* Log in to your [[!DNL Mailchimp]](https://login.mailchimp.com/) account. Then, navigate to the **[!DNL Audience]** page. Next, expand the **[!DNL Manage Contacts]** menu and select **[!DNL Groups]**.

![Mailchimp UI screenshot showing the Audience group page.](../../assets/catalog/email-marketing/mailchimp-interest-categories/audience-groups.png)

* Select the Group and check if the selected audiences are created as categories with the audience name from Platform, which may be followed by an automatically generated suffix.
  * This destination uses the selected segments' names to create the interest category by using the [[!DNL Mailchimp] Add interest category API](https://mailchimp.com/developer/marketing/api/interest-categories/add-interest-category/). If you create a new destination and activate the same audiences again, [!DNL Mailchimp] adds a suffix to distinguish between the existing and the new segments.
* Contacts whose emails did not exist in the group are added to the newly created category.
* For contacts that already exist within the group, the attribute field data is updated, and the contact added to the newly created category.

![Mailchimp UI screenshot showing the Audience group categories.](../../assets/catalog/email-marketing/mailchimp-interest-categories/audience-groups-category.png)

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](/help/data-governance/home.md).

## Errors and troubleshooting {#errors-and-troubleshooting}

### Error encountered if [!DNL Mailchimp] API key or data center values are incorrect {#incorrect-credentials-error}

If the API key you provided in the **[!UICONTROL Password]** field or the **[!UICONTROL Data center]** value are incorrect, the UI displays a [!DNL Mailchimp] API error response: *`No options are available. Please verify the values selected for the following dependent fields: dataCenter`* as shown below. In this case, you are not able to select a value from the **[!UICONTROL Audience Name (Please select Data center first)]** field.

![Platform UI screenshot showing error if your Mailchimp API key or data center values are incorrect.](../../assets/catalog/email-marketing/mailchimp-interest-categories/error.png)

To fix this error and proceed to the next step, you must provide the correct values. Refer to the [Identify [!DNL Mailchimp] data center](#identify-data-center) and 
[Gather [!DNL Mailchimp] API key](#gather-credentials) sections if you need guidance.

### Error encountered if [!DNL Mailchimp] group name limit is exceeded {#group-name-limits-error}

When creating the destination, you might receive the following error messages: *`Cannot have more than 60 interests per list (Across all categories)`* or *`400 BAD_REQUEST`*. This happens when you exceed the 60 group names (or interest categories) in a single group or across several groups within the same audience limit, as described in the [guardrails](#guardrails) section. To fix this error, make sure you are not exceeding the group name limit in [!DNL Mailchimp].

### [!DNL Mailchimp] Status and Error codes

Refer to the [[!DNL Mailchimp] errors page](https://mailchimp.com/developer/marketing/docs/errors/) for a comprehensive list of status and error codes with explanations.

## Additional resources {#additional-resources}

Additional useful information from the [!DNL Mailchimp] documentation is below:
* [Getting started with [!DNL Mailchimp]](https://mailchimp.com/help/getting-started-with-mailchimp/)
* [Getting started with Audiences](https://mailchimp.com/help/getting-started-audience/)
* [Create an Audience](https://mailchimp.com/help/create-audience/)
* [Getting started with Groups](https://mailchimp.com/help/getting-started-with-groups/)
* [Create a new Audience Group](https://mailchimp.com/help/create-new-audience-group/)
* [Interest Categories](https://mailchimp.com/developer/marketing/api/interest-categories/)
* [Marketing API](https://mailchimp.com/developer/marketing/api/)

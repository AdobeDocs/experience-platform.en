---
keywords: event forwarding extension;braze;braze event forwarding extension
title: Braze Event Forwarding Extension
description: This Adobe Experience Platform event forwarding extension sends Adobe Experience Edge Network events to Braze.
---

# [!DNL Braze Track Events API] event forwarding extension

[[!DNL Braze]](https://www.braze.com) is a customer engagement platform that powers customer-centric interactions between consumers and brands in real time. Using [!DNL Braze], you can do the following:

- Deliver data (such as marketing messages) to targeted users based on their language preference, location preference, and more, to increase conversion rates and support key business goals.
- Send customers personalized messages across multiple channels, including email, push notifications, and in-app messages, at just the right time and in their preferred languages.
- Target specific users for marketing and promotional campaigns to increase the number of repeat customers.
- Study user behavior and patterns to target specific audiences with customized messages, which could help increase revenue.

The [!DNL Braze Track Events API] [event forwarding](../../../ui/event-forwarding/overview.md) extension allows you to leverage data captured in the Adobe Experience Platform Edge Network and send it to [!DNL Braze] in the form of server-side events using the [[!DNL Braze User Identify]](https://www.braze.com/docs/api/endpoints/user_data/post_user_identify) and [[!DNL Braze User Track]](https://www.braze.com/docs/api/endpoints/user_data/post_user_track) APIs.

This document covers the use cases of the extension, how to install it in your event forwarding libraries, and how to employ its capabilities in an event forwarding [rule](../../../ui/managing-resources/rules.md).

## Use cases

This extension should be used if you want to use data from the Edge Network in [!DNL Braze] to take advantage of its customer analytics and targeting capabilities.

For example, consider a retail organization that has a multichannel presence (website and mobile) and is capturing transactional or conversational input as event data from their website and mobile platforms. Using various [tag](../../../home.md) rules, this data is sent to the Edge Network in real time. From here, the [!DNL Braze] event forwarding extension automatically sends relevant events to [!DNL Braze] from the server side.

Once the data has been sent, the organization's analytics teams can then leverage [!DNL Braze's] capabilities to process the datasets and derive business insights to generate graphs, dashboards, or other visualizations to inform business stakeholders. Refer to the [[!DNL Braze] customers](https://www.braze.com/customers) page for more details of the various use cases of the platform.

## [!DNL Braze] prerequisites and guardrails {#prerequisites}

You must have a [!DNL Braze] account in order to use its technologies. If you do not have an account, navigate to the [Get Started page](https://www.braze.com/get-started/) on [!DNL Braze] to connect to [!DNL Braze Sales] and start the account creation process.

### API guardrails

The extension uses two of [!DNL Braze]'s APIs and their limits are outlined below:

| API  | Rate Limits |
| --- | --- |
| [!DNL User Track] | 50,000 requests per minute. <br>Refer to the [[!DNL User Track] API documentation](https://www.braze.com/docs/api/endpoints/user_data/post_user_track#rate-limit) for details.       |
| [!DNL User Identify] | 20,000 requests per minute. <br>Refer to the [[!DNL User Identify] API documentation](https://www.braze.com/docs/api/endpoints/user_data/post_user_identify#rate-limit) for details. |

>[!NOTE]
>
> Refer to the guide on [[!DNL Braze] API limits](https://www.braze.com/docs/api/api_limits/) for further details on the limits they impose.

### Billable data points

Sending additional custom attributes to [!DNL Braze] may increase your [!DNL Braze] data point consumption. Consult with your [!DNL Braze] account manager before sending additional custom attributes. Refer to the [!DNL Braze] documentation on [billable data points](https://www.braze.com/docs/user_guide/onboarding_with_braze/data_points/#billable-data-points) for more information.

### Gather required configuration details {#configuration-details}

In order to connect the Edge Network to [!DNL Braze], the following inputs are required:

| Key Type | Description | Example |
| --- | --- | --- |
| [!DNL Braze] Instance | The REST endpoint associated with the [!DNL Braze] account. Refer to the [!DNL Braze] documentation on [instances](https://www.braze.com/docs/user_guide/administrative/access_braze/braze_instances) for guidance. | `https://rest.iad-03.braze.com` |
| API Key | The [!DNL Braze] API Key associated with the [!DNL Braze] account. <br/>Refer to the [!DNL Braze] documentation on the [REST API key](https://www.braze.com/docs/api/basics/#rest-api-key) for guidance. | `YOUR-BRAZE-REST-API-KEY`       |

### Create a secret

Create a new [event forwarding secret](../../../ui/event-forwarding/secrets.md) and set the value to your [[!DNL Braze] API Key](#configuration-details). This will be used to authenticate the connection to your account while keeping the value secure.

## Install and configure the [!DNL Braze] extension {#install}

To install the extension, [create an event forwarding property](../../../ui/event-forwarding/overview.md#properties) or choose an existing property to edit instead.

Select **[!UICONTROL Extensions]** in the left navigation. In the **[!UICONTROL Catalog]** tab, select **[!UICONTROL Install]** on the card for the [!DNL Braze] extension.

![Install the [!DNL Braze] extension.](../../../images/extensions/server/braze/install-extension.png)

On the next screen, input the following [configuration values](#configuration-details) that you previously gathered from [!DNL Braze]:

- **[!UICONTROL Braze Rest Endpoint URL]**: You can enter the value of your [!DNL Braze] rest endpoint URL as plain text in the provided input.
- **[!UICONTROL API Key]**: Select the [secret data element](#create-a-secret) that you created earlier, which contains your [!DNL Braze] API key.

Select **[!UICONTROL Save]** when finished.

![The [!DNL Braze] extension configuration page.](../../../images/extensions/server/braze/configure-extension.png)

## Create a [!DNL Send Event] rule {#tracking-rule}

After installing the extension, create a new event forwarding [rule](../../../ui/managing-resources/rules.md) and configure its conditions as desired. When configuring the actions for the rule, select the **[!UICONTROL Braze]** extension, then select **[!UICONTROL Send Event]** for the action type.

![Add an event forwarding rule action configuration.](../../../images/extensions/server/braze/braze-event-action.png)

**[!UICONTROL User Identification]**

| Input | Description |
| --- | --- |
| [!UICONTROL External User ID] | Long, random and well distributed UUID or GUID. If you choose a different method in which to name your user IDs, they must also be long, random and well distributed. Learn more about [suggested user ID naming convention](https://www.braze.com/docs/developer_guide/platform_integration_guides/web/analytics/setting_user_ids#suggested-user-id-naming-convention). |
| [!UICONTROL Braze User ID] | Braze user identifier. |
| [!UICONTROL User Alias] | An alias serves as an alternative unique user identifier. Use aliases to identify users along different dimensions than your core user ID. <br><br> The user alias object consists of two parts: an alias_name for the identifier itself, and an alias_label indicating the type of alias. Users can have multiple aliases with different labels, but only one alias_name per alias_label. |

{style="table-layout:auto"}

>[!NOTE]
>
> For tying the event to an user you need to fill in either the [!UICONTROL External User ID] field, or the [!UICONTROL Braze User Identifier] field or the [!UICONTROL User Alias] section.

**[!UICONTROL Event Data]**

| Input | Description | Required |
| --- | --- | --- |
| [!UICONTROL Event Name ​] | Name of the event. | Yes |
| [!UICONTROL Event Time ] | Date-time as string in ISO 8601 or in `yyyy-MM-dd'T'HH:mm:ss:SSSZ` format. | Yes |
| [!UICONTROL App Identifier] | The App Identifier or <strong>app_id</strong> is a parameter associating activity with a specific app in your app group. It designates which app within the app group you are interacting with. Learn more about the [API identifier types](https://www.braze.com/docs/api/identifier_types/). | |
| [!UICONTROL Event Properties ​] | A JSON object containing custom properties of the event. |  |

{style="table-layout:auto"}

>[!NOTE]
>
> The **[!UICONTROL Braze Send Event]** action requires only an **[!UICONTROL Event Name]** and **[!UICONTROL Event Time]** to be specified, but you should be including as much information as possible in the custom properties field. For details on the [!DNL Braze] event object, refer to the [official documentation](https://www.braze.com/docs/api/objects_filters/event_object/).

**[!UICONTROL User Attributes]**

User attributes can be a JSON object containing any fields that will create or update an attribute of that name with the given value on the specified user profile. The following properties are supported:

| User Attribute | Description |
| --- | --- |
| [!UICONTROL First Name] | |
| [!UICONTROL Last Name] | |
| [!UICONTROL Phone] | |
| [!UICONTROL Email] | |
| [!UICONTROL Gender] | One of the following strings: "M", "F", "O" (other), "N" (not applicable), "P" (prefer not to say). |
| [!UICONTROL City] | |
| [!UICONTROL Country] | Country as a string in [ISO-3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. |
| [!UICONTROL Language] | Language as a string in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. |
| [!UICONTROL Date of Birth] | String in format "YYYY-MM-DD" (e.g., 1980-12-21). |
| [!UICONTROL Time Zone] | Time zone name from [IANA Time Zone Database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (e.g., ’America/New_York’ or ’Eastern Time (US & Canada)’). |
| [!UICONTROL Facebook] | Hash containing any of id (string), likes (array of strings), num_friends (integer). |
| [!UICONTROL Twitter] | Hash containing any of id (integer), screen_name (string, Twitter handle), followers_count (integer), friends_count (integer), statuses_count(integer). |

{style="table-layout:auto"}

## Create a [!DNL Send Purchase Event] rule {#purchase-rule}

After installing the extension, create a new event forwarding [rule](../../../ui/managing-resources/rules.md) and configure its conditions as desired. When configuring the actions for the rule, select the **[!UICONTROL Braze]** extension, then select **[!UICONTROL Send Purchase Event]** for the action type.

![Add a Braze Purchase action type event forwarding rule action configuration.](../../../images/extensions/server/braze/braze-purchase-event-action.png)

**[!UICONTROL User Identification]**

| Input | Description |
| --- | --- |
| [!UICONTROL External User ID] | Long, random and well distributed UUID or GUID. If you choose a different method in which to name your user IDs, they must also be long, random and well distributed. Learn more about [suggested user ID naming convention](https://www.braze.com/docs/developer_guide/platform_integration_guides/web/analytics/setting_user_ids#suggested-user-id-naming-convention). |
| [!UICONTROL Braze User ID] | Braze user identifier. |
| [!UICONTROL User Alias] | An alias serves as an alternative unique user identifier. Use aliases to identify users along different dimensions than your core user ID. <br><br> The user alias object consists of two parts: an alias_name for the identifier itself, and an alias_label indicating the type of alias. Users can have multiple aliases with different labels, but only one alias_name per alias_label. |

{style="table-layout:auto"}

>[!NOTE]
>
> For tying the event to an user you need to fill in either the [!UICONTROL External User ID] field, or the [!UICONTROL Braze User Identifier] field or the [!UICONTROL User Alias] section.

**[!UICONTROL Purchase Data]**

| Input | Description | Required |
| --- | --- | --- |
| [!UICONTROL Product ID ​] | Identifier for the purchase. (e.g., Product Name or Product Category) | Yes |
| [!UICONTROL Purchase Time ] | Date-time as string in ISO 8601 or in `yyyy-MM-dd'T'HH:mm:ss:SSSZ` format. | Yes |
| [!UICONTROL Currency ​] | Currency as a string in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) Alphabetic Currency Code format. | Yes |
| [!UICONTROL Price ​] | Price. | Yes |
| [!UICONTROL Quantity ​] | If not provided, the default value will be 1. The maximum value must be lower than 100. | |
| [!UICONTROL App Identifier] | The App Identifier or <strong>app_id</strong> is a parameter associating activity with a specific app in your app group. It designates which app within the app group you are interacting with. Learn more about the [API identifier types](https://www.braze.com/docs/api/identifier_types/). | |
| [!UICONTROL Purchase Properties ​] | A JSON object containing custom properties of the purchase. |  |

{style="table-layout:auto"}

>[!NOTE]
>
> The **[!UICONTROL Braze Send Event]** action requires only an **[!UICONTROL Event Name]** and **[!UICONTROL Event Time]** to be specified, but you should be including as much information as possible in the custom properties field. For details on the [!DNL Braze] event object, refer to the [official documentation](https://www.braze.com/docs/api/objects_filters/event_object/).

**[!UICONTROL User Attributes]**

User attributes can be a JSON object containing any fields that will create or update an attribute of that name with the given value on the specified user profile. The following properties are supported:

| User Attribute | Description |
| --- | --- |
| [!UICONTROL First Name] | |
| [!UICONTROL Last Name] | |
| [!UICONTROL Phone] | |
| [!UICONTROL Email] | |
| [!UICONTROL Gender] | One of the following strings: "M", "F", "O" (other), "N" (not applicable), "P" (prefer not to say). |
| [!UICONTROL City] | |
| [!UICONTROL Country] | Country as a string in [ISO-3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. |
| [!UICONTROL Language] | Language as a string in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. |
| [!UICONTROL Date of Birth] | String in format "YYYY-MM-DD" (e.g., 1980-12-21). |
| [!UICONTROL Time Zone] | Time zone name from [IANA Time Zone Database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (e.g., ’America/New_York’ or ’Eastern Time (US & Canada)’). |
| [!UICONTROL Facebook] | Hash containing any of id (string), likes (array of strings), num_friends (integer). |
| [!UICONTROL Twitter] | Hash containing any of id (integer), screen_name (string, Twitter handle), followers_count (integer), friends_count (integer), statuses_count(integer). |

{style="table-layout:auto"}

## Validate data within [!DNL Braze] {#validate}

If the event collection and [!DNL Adobe Experience Platform] integration were successful, you will see events within the [!DNL Braze] console when [viewing user profiles](https://www.braze.com/docs/user_guide/engagement_tools/segments/user_profiles/). Specifically, the new event data sent to [!DNL Braze] is reflected in the [!DNL Purchases] section of a particular user's [overview tab](https://www.braze.com/docs/user_guide/engagement_tools/segments/user_profiles/#overview-tab).

## Next steps

This guide covered how to send conversion events to [!DNL Braze] using event forwarding. For more details on downstream applications for event data sent to [!DNL Braze], refer to the [official documentation](https://www.braze.com/docs).

For more information on event forwarding capabilities in Experience Platform, refer to the [event forwarding overview](../../../ui/event-forwarding/overview.md).

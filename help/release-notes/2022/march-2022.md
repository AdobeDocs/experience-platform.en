---
title: Adobe Experience Platform Release Notes
description: The latest release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: March 30, 2022**

New features in Adobe Experience Platform:

- [Audit logs](#audit-logs)
- [Related accounts in Real-Time CDP B2B Edition](#related-accounts)

Updates to existing features in Adobe Experience Platform:

- [Alerts](#alerts)
- [[!DNL Dashboards]](#dashboards)
- [Experience Data Model (XDM)](#xdm)
- [[!DNL Query Service]](#query-service)
- [Sources](#sources)

## Audit Logs {#audit-logs}

Experience Platform allows you to audit user activity for various services and capabilities. The audit logs provide information about who did what and when.

**New features**

| Feature | Description |
| --- | --- |
| Audit logs for Dataset, Schema, Class, Field group, Data type, Sandbox, Destination, Segment, Merge policy, Computed attribute, Product profile and Account (Adobe) | These are the resources which are recorded by audit logs. If the feature is enabled, the audit logs will be automatically collected as activity occurs. You do not need to manually enable log collection. |
| Export audit logs | The audit logs can be downloaded as a `CSV` or `JSON` file. The generated files are saved directly to your machine.  |

{style="table-layout:auto"}

For more information on audit logs in Platform, refer to the [audit logs overview](../../landing/governance-privacy-security/audit-logs/overview.md).

## Related accounts in Real-Time CDP B2B Edition {#related-accounts}

>[!NOTE]
>
>The Related accounts feature is available for customers of the Real-Time CDP B2B Edition only.

B2B enterprises often have their customer information stored in multiple systems, each including only partial or even conflicting data for the same real-world business entity. This creates a massive challenge of arriving at an accurate view of their customers, therefore reducing the efficiency and effectiveness of their B2B marketing and sales efforts. With the release of related accounts, [!DNL Real-time CDP B2B] now shows you a list of accounts that are similar to the account you are browsing. You can include the related accounts in your segment definitions to broaden your reach or apply wider criteria in your segments. 

Read more about the feature in the following documentation pages:

- Related accounts in Real-Time CDP B2B Edition overview <add link after merging the documentation PR>
- Related accounts tab in the Account profile UI guide <add link after merging the documentation PR>
- How to use related accounts in segment definitions <add link after merging the documentation PR>

To learn more about Real-time CDP B2B Edition, see the [overview](../../rtcdp/overview.md).

## Alerts {#alerts}

Experience Platform allows you to subscribe to event-based alerts for various Platform activities. You can subscribe to different alert rules through the [!UICONTROL Alerts] tab in the Platform user interface, and can choose to receive alert messages within the UI itself or through email notifications.

**Updated features**

| Feature | Description |
| --- | --- |
| New alert rules | Two new alert rules are now available for sources related to data ingestion. See the overview on [alert rules](../../observability/alerts/rules.md) for the updated list of alert types. |

{style="table-layout:auto"}

For more information on alerts in Platform, refer to the [alerts overview](../../observability/alerts/overview.md).

## Dashboards {#dashboards}

Adobe Experience Platform provides multiple [!DNL dashboards] through which you can view important information about your organization’s data, as captured during daily snapshots.

### Profile Dashboards

The Profiles dashboard displays a snapshot of the attribute (record) data that your organization has within the Profile Store in Experience Platform. 

**Updated features**

| Feature | Description |
| --- | --- |
|   Unsegmented Profiles widget |  The widget provides the total number of all profiles not attached to any segment. The number generated is accurate as of the last snapshot and represents the opportunity for profile activation across your organization. See the [profiles standard widgets documentation](../../dashboards/guides/profiles.md#standard-widgets) for more information.   |
|   Unsegmented Profiles Trend widget |  This widget provides a line graph illustration for the number of profiles that are not attached to any segment over a given period of time. The trend can be visualized over 30 days, 90 days, and 12 month periods. See the [profiles standard widgets documentation](../../dashboards/guides/profiles.md#standard-widgets) for more information.   |
| Unsegmented Profiles by Identity widget |  This widget categorizes the total number of unsegmented profiles by their unique identifier. The data is visualized in a bar chart. See the [profiles standard widgets documentation](../../dashboards/guides/profiles.md#standard-widgets) for more information.   |
| Single identity profiles widget |  This widget provides a count of your organization's profiles that only have one type of ID type that creates their identity, either an email or ECID. See the [profiles standard widgets documentation](../../dashboards/guides/profiles.md#standard-widgets) for more information.  |

For more information on Profiles dashboards, refer to the [Profiles dashboards overview](../../dashboards/guides/profiles.md).

### Destinations Dashboards

The Destinations dashboard displays a snapshot of the destinations that your organization has enabled within Experience Platform. 

**Updated features**

| Feature | Description |
| --- | --- |
|   Destinations count widget  |  The widget provides the total number of available endpoints where an audience can be activated and delivered within the system. This number includes both active and inactive destinations. See the [destinations standard widget documentation](../../dashboards/guides/destinations.md#standard-widgets) for more information.  |

For more information on Destinations dashboards in Platform, refer to the [Destinations dashboards overview](../../dashboards/guides/destinations.md).

## Experience Data Model (XDM) {#xdm}

Experience Data Model (XDM) is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

| Feature | Description |
| --- | --- |
| Add or remove individual standard fields for a schema | The Schema Editor UI now allows you to add portions of standard field groups to your schemas, providing more flexibility for the fields you choose to include without needing to build custom resources from scratch.<br><br>You can now also define ad-hoc custom fields directly within the schema structure and assign them to a new or existing custom field group without needing to create or edit the field group beforehand.<br><br>See the guide on [creating and editing schemas in the UI](../../xdm/ui/resources/schemas.md) for more information on these new workflows. |

{style="table-layout:auto"}

For more information on XDM in Platform, see the [XDM System overview](../../xdm/home.md).

## Query Service {#query-service}

[!DNL Query Service] allows you to use standard SQL to query data in Adobe Experience Platform [!DNL Data Lake]. You can join any datasets from the [!DNL Data Lake] and capture the query results as a new dataset for use in reporting, Data Science Workspace, or for ingestion into Real-time Customer Profile.

**Updated features**

| Feature | Description |
| --- | --- |
|  `table_exists`   |  The new feature command is used to confirm whether or not a table currently exists in the system. The command returns a boolean value: `true` if the table **does** exist, and `false` if the table does **not** exist. See the [SQL syntax documentation](../../query-service/sql/syntax.md) for more information.   |

For more information on available features, refer to the [Query Service overview](../../query-service/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughout.

**Updated features**

| Feature | Description |
| --- | --- |
| New sources now available for B2B usage | You can now use all the available sources on Platform for B2B use cases. See the [sources catalog](../../sources/home.md) for a complete list of available sources. |
| General availability of new [!DNL Oracle Eloqua] source | You can now use the [!DNL Oracle Eloqua] source to seamlessly ingest data from your [!DNL Oracle Eloqua] instance (account, campaign, contacts) to Platform. See the documentation on [creating an [!DNL Oracle Eloqua] source connection](../../sources/connectors/oracle-eloqua.md) for more information. |
| API enhancements for [!DNL Data Landing Zone] | The [!DNL Data Landing Zone] source now supports auto-detection of file properties when using the [!DNL Flow Service] API. See the documentation on [creating a [!DNL Data Landing Zone] source connection](../../sources/tutorials/api/create/cloud-storage/data-landing-zone.md) for more information. |

{style="table-layout:auto"}

To learn more about sources, see the [sources overview](../../sources/home.md).

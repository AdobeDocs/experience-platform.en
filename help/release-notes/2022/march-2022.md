---
title: Adobe Experience Platform Release Notes
description: The latest release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: March 30, 2022**

New features in Adobe Experience Platform:

- [Audit logs](#audit-logs)

Updates to existing features in Adobe Experience Platform:

- [Alerts](#alerts)
- [Experience Data Model (XDM)](#xdm)
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

## Alerts {#alerts}

Experience Platform allows you to subscribe to event-based alerts for various Platform activities. You can subscribe to different alert rules through the [!UICONTROL Alerts] tab in the Platform user interface, and can choose to receive alert messages within the UI itself or through email notifications.

**Updated features**

| Feature | Description |
| --- | --- |
| New alert rules | Two new alert rules are now available for sources related to data ingestion. See the overview on [alert rules](../../observability/alerts/rules.md) for the updated list of alert types. |

{style="table-layout:auto"}

For more information on alerts in Platform, refer to the [alerts overview](../../observability/alerts/overview.md).

## Experience Data Model (XDM) {#xdm}

Experience Data Model (XDM) is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**Updated features**

| Feature | Description |
| --- | --- |
| Add or remove individual standard fields for a schema | The Schema Editor UI now allows you to add portions of standard field groups to your schemas, providing more flexibility for the fields you choose to include without needing to build custom resources from scratch.<br><br>You can now also define ad-hoc custom fields directly within the schema structure and assign them to a new or existing custom field group without needing to create or edit the field group beforehand.<br><br>See the guide on [creating and editing schemas in the UI](../../xdm/ui/resources/schemas.md) for more information on these new workflows. |

{style="table-layout:auto"}

For more information on XDM in Platform, see the [XDM System overview](../../xdm/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Updated features**

| Feature | Description |
| --- | --- |
| New sources now available for B2B usage | You can now use all the available sources on Platform for B2B use cases. See the [sources catalog](../../sources/home.md) for a complete list of available sources. |
| General availability of new [!DNL Oracle Eloqua] source | You can now use the [!DNL Oracle Eloqua] source to seamlessly ingest data from your [!DNL Oracle Eloqua] instance (account, campaign, contacts) to Platform. See the documentation on [creating an [!DNL Oracle Eloqua] source connection](../../sources/connectors/oracle-eloqua.md) for more information. |
| API enhancements for [!DNL Data Landing Zone] | The [!DNL Data Landing Zone] source now supports auto-detection of file properties when using the [!DNL Flow Service] API. See the documentation on [creating a [!DNL Data Landing Zone] source connection](../../sources/tutorials/api/create/cloud-storage/data-landing-zone.md) for more information. |

{style="table-layout:auto"}

To learn more about sources, see the [sources overview](../../sources/home.md).

---
title: Adobe Experience Platform Release Notes January 2024
description: The January 2024 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: January 30, 2024**

Updates to existing features in Experience Platform:

- [Dashboards](#dashboards)
- [Data Prep](#data-prep)
- [Destinations](#destinations)
- [Real-Time Customer Data Platform](#rtcdp)
- [Real-Time Customer Profile](#profile)
- [Sources](#sources)

## Data Prep {#data-prep}

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**New or updated features**

| Feature | Description |
| --- | --- |
| New mapper functions | <ul><li>`object_to_map`: Use the `object_to_map` function to create map data types. This function supports several different syntaxes. For more information, read the guide on [functions for hierarchies - objects](../../data-prep/functions.md#objects). </li><li>`to_map`: Use the `to_map` function to create a map with given field name and value pairs using objects. For more information, read the guide on [functions for hierarchies - maps](../../data-prep/functions.md#objects). </li><li>`array_to_map`: Use the `array_to_map` function to create a map with given field name and value pairs using object arrays. For more information, read the guide on [functions for hierarchies - maps](../../data-prep/functions.md#objects).  |

{style="table-layout:auto"}

For more information on Data Prep, read the [Data Prep overview](../../data-prep/home.md).

## Dashboards {#dashboards}

Adobe Experience Platform provides multiple dashboards through which you can view important insights about your organization's data, as captured during daily snapshots.

**New or updated features** 

| Feature | Description |
| --- | --- |
| View SQL | You can now view the SQL behind your Profiles, Audiences, Destinations, and customized insights and then execute the query on demand through the Query Editor. Take inspiration from the SQL of over 40 existing insights to create new queries that derive unique insights from Platform data based on your business needs. For more information, read guide on [viewing insight SQL](../../dashboards/view-sql.md). |

{style="table-layout:auto"}

For more information on dashboards, including how to grant access permissions and create custom widgets, begin by reading the [dashboards overview](../../dashboards/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New destinations** {#new-destinations}

| Destination | Description |
| ----------- | ----------- |
| [Pubmatic connection](../../destinations/catalog/advertising/pubmatic.md) | Use this destination to send audience data to the [!DNL PubMatic Connect] platform. |

{style="table-layout:auto"}

For more general information on destinations, refer to the [destinations overview](../../destinations/home.md).

## Real-Time Customer Data Platform {#rtcdp}

Built on Experience Platform, Real-Time Customer Data Platform ([!DNL Real-Time CDP]) helps companies bring together known and unknown data to activate customer profiles with intelligent decisioning throughout the customer journey. [!DNL Real-Time CDP] combines multiple enterprise data sources to create customer profiles in real time. Segments built from these profiles can then be sent to downstream destinations in order to provide one-to-one personalized customer experiences across all channels and devices.

**New or updated features**

| Feature | Description |
| --- | --- |
| Updates to the [Real-Time CDP home page](https://experience.adobe.com) | <ul><li>**Profiles widget**: You can now use the Profiles widget to navigate to the Profiles overview page and view Profile metrics for your organization.</li><li>**Profile metrics card**: The Profile metrics card in the home page dashboard now displays the total count of profiles in your organization, depending on your respective merge policy.</li><li>**Schemas widget**: You can now use the schemas widget to navigate to the schema creation workflow in the UI.</li></ul> |

To learn moore about Real-Time CDP, read the [Real-Time CDP overview](../../rtcdp/overview.md).

## Real-Time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-Time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. Profile allows you to consolidate customer data into a unified view offering an actionable, timestamped account of every customer interaction.

**Updated features**

| Feature | Description |
| --- | --- |
| Improvements to localizing the profile viewer's out-of-the-box dashboard cards | The out-of-the-box default profile cards will now have dynamically localized names. Custom profile cards can continue to have custom names that can be edited. |

{style="table-layout:auto"}

To learn more about Real-Time Customer Profile, read the [Profile overview](../../profile/home.md)

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated features**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [!DNL Oracle NetSuite] sources | Use the [!DNL Oracle NetSuite] integrations in the sources catalog to bring data from your [[!DNL Oracle NetSuite Activities]](../../sources/tutorials/ui/create/marketing-automation/oracle-netsuite-activities.md) and [[!DNL Oracle NetSuite Entities]](../../sources/tutorials/ui/create/marketing-automation/oracle-netsuite-entities.md) accounts to Experience Platform. |
| [!BADGE Beta]{type=Informative} [!DNL Braze Currents] source | Use the [[!DNL Braze Currents]](../../sources/tutorials/ui/create/marketing-automation/braze.md) integration in the sources catalog to bring data from your [!DNL Braze] account to Experience Platform. |
| Support for key-pair authentication for [!DNL Snowflake] batch source | You can now use key-pair authentication when creating a new [!DNL Snowflake] account for batch data. For more information, read the guide on [creating a [!DNL Snowflake] account using the API](../../sources/tutorials/api/create/databases/snowflake.md) or the guide on [creating a [!DNL Snowflake] account using the UI](../../sources/tutorials/ui/create/databases/snowflake.md). |

{style="table-layout:auto"}

To learn more about sources, read the [sources overview](../../sources/home.md).
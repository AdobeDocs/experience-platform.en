# Adobe Analytics field mapping to XDM ExperienceEvents

Data from selected Adobe Analytics report suites is transformed into XDM ExperienceEvents and ingested into Adobe Experience Platform as datasets for you.

Data from selected Adobe Analytics report suites is transformed into XDM ExperienceEvents and ingested into Adobe Experience Platform as midvalues datasets. Midvalues reflect analytics data as collected after being transformed by processing rules and VISTA rules without the commerce or visitor profile processing. Midvalues datasets make it possible for Adobe Defined Functions (ADFs) within Query Service to customize the sessionization and attribution applied to reporting. These datasets are pre-filtered to exclude the standard bot traffic and rows flagged as excluded from reporting in Analytics. Midvalues datasets are also streamed to Adobe Experience Platform to support near-real-time use cases within Real-time Customer Profile.

See the [Analytics field mapping](../../acp_connectors_overview/analytics_mapping_fields.md) documentation for more information on mapping to XDM ExperienceEvents.

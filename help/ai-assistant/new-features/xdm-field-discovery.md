---
title: XDM Field Discovery With AI Assistant
description: Read this document to learn how you can use AI Assistant for Experience Data Model (XDM) field discovery.
badge: Alpha
hide: true
hidefromtoc: true
exl-id: 041034c6-da45-437f-ad46-f9c2ded9f82c
---
# XDM field discovery with AI Assistant

>[!AVAILABILITY]
>
>This feature is in Alpha and may not be available to your organization. To participate in the Alpha program and access this feature, contact your Adobe Account Team.

You can use AI Assistant to search for and discover Experience Data Model (XDM) fields that you can then use to create targeted audiences within Experience Platform.

Read the following table for supported query and prompt patterns for XDM field discovery in AI Assistant.

>[!TIP]
>
>While query and prompt patterns may be the same across different use cases, the exact formulation of a question will vary depending on the XDM fields and schemas used for a given sandbox.

| Query type | Query/Prompt pattern | Examples |
| --- | --- | --- |
| XDM field discovery by data domain or area | Show me the XDM fields used to represent {DATA_DOMAIN/AREA}. | <ul><li>Show me the XDM fields used to represent consent data.</li><li>Show me the XDM fields used to represent information about email subscriptions.</li></ul> |
| XDM field discovery by general field name | <ul><li>Show me the XDM fields related to {DATA_DOMAIN/AREA}.</li><li>Which XDM fields contains {GENERAL_FIELD_NAME}.</li></ul> | <ul><li>Show me the XDM fields related to orders.</li><li>Show me the XDM fields related to interaction details.</li><li>Which XDM field contains visitor IDs?</li><li>Which XDM field contains product categories?</li></ul> |
| XDM field discovery by data model lineage | <ul><li>Show me all the fields of the {FIELD_GROUP/CLASS_NAME} that contain {GENERAL_FIELD_NAME}.</li><li>What is the {FIELD_GROUP/CLASS_NAME} of the XDM field {GENERAL_FIELD_NAME}?</li></ul> | <ul><li>Show me all the fields of the field group that contain product data.</li><li>Show me all the fields of the field group that contains analytics data.</li><li>What is the class of the XDM field first name?</li><li>What is the class of the XDM field email subscriptions?</li></ul> |
| Prompt to get enhanced descriptions along with field names | {FIELD_DISCOVERY_QUERY}. Also include enhanced descriptions. | <ul><li>Show me the XDM fields used to represent consent data. Also include the enhanced description for the field.</li><li>Show me the XDM fields related to interaction details. Also include the enhanced description for the field.</li></ul> |

{style="table-layout:auto"}

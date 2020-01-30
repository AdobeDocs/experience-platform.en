---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Query Service developer guide
topic: query templates
---

# Query Service developer guide

This developer guide provides steps for performing various operations in the Adobe Experience Platform Query Service API.

## Getting started

This guide requires a working understanding of the various Adobe Experience Platform services involved with using Query Service.

- [Query Service](./overview.md): Provides the ability to query datasets and capture the resulting queries as new datasets in Experience Platform.
- [Experience Data Model (XDM) System](../../schema_registry/xdm_system/xdm_system_in_experience_platform.md): The standardized framework by which Experience Platform organizes customer experience data.
- [Sandboxes](../../sandboxes/sandboxes-overview.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully use Query Service using the API.

### Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in this documentation for sample API calls, see the section on [how to read example API calls](../../platform_faq_and_troubleshooting/platform_faq_and_troubleshooting.md) in the Experience Platform troubleshooting guide.

### Gather values for required headers

In order to make calls to Experience Platform APIs, you must first complete the [authentication tutorial](../../../tutorials/authenticate_to_acp_tutorial/authenticate_to_acp_tutorial.md). Completing the authentication tutorial provides the values for each of the required headers in all Platform API calls, as shown below:

- Authorization: `Bearer {ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox in which the operation will take place:

- x-sandbox-name: `{SANDBOX_NAME}`
  
>**Note:** For more information on working with sandboxes in Experience Platform, see the [sandboxes overview documentation](../../sandboxes/sandboxes-overview.md).

## Sample API calls

Now that you understand what headers to use, you are ready to begin making calls to the Query Service API. The following documents walk through the various API calls you can make using the Query Service API. Each example call includes the general API format, a sample request showing required headers, and a sample response.

- [Queries](queries.md)
- [Connection parameters](connection-parameters.md)
- [Scheduled queries](scheduled-queries.md)
- [Runs for scheduled queries](runs-scheduled-queries.md)
- [Query templates](query-templates.md)

## Next steps

Now that you have learned how to make calls using the Query Service API, you can create your own non-interactive queries. For more information on how to create queries, please read the [SQL reference guide](../sql/overview.md).
---
title: Algolia Users Segments connection
description: Send audience segments from Adobe Experience Platform to Algolia to personalize search results and recommendations based on user attributes and behaviors.
exl-id: a3e73f75-a3c4-4e2a-950c-f8b22cac63c2
---

# Algolia Users Segments connection {#algolia-destination}

## Overview {#overview}

The [Algolia](https://www.algolia.com/) Users Segments destination allows you to export Adobe Experience Platform audiences to Algolia, where they can be used to personalize search results and recommendations based on user attributes and behaviors.

By connecting your Adobe Experience Platform audiences to Algolia, you can:
* Deliver personalized search experiences based on user segments and behaviors
* Customize recommendations to match user interests and preferences
* Apply business rules to search results based on audience membership
* Enhance relevance of search results by incorporating user segment data

![Diagram showing data flow from Adobe Experience Platform to Algolia's personalization systems](../assets/catalog/personalization/algolia/dataflow-diagram.png)

This destination is both a [profile export destination](/help/destinations/destination-types.md#profile-export) and an [enterprise destination](/help/destinations/destination-types.md#enterprise-destinations), enabling you to export audience data from Adobe Experience Platform to Algolia.

## Use cases {#use-cases}

**Enhanced search relevance**

A retail company wants to improve search results based on customer segments. By exporting audience data from Adobe Experience Platform to Algolia, they can customize search results to display items that match each customer segment's preferences, leading to higher conversion rates.

**Personalized product recommendations**

An e-commerce site wants to personalize product recommendations based on user browsing behavior and purchase history. Using Adobe Experience Platform segments exported to Algolia, they can tailor recommendations to match different user segments' preferences, resulting in increased engagement and sales.

**Segment-specific search experiences**

A media company wants to create different search experiences for subscribers versus non-subscribers. By sending audience data from Adobe Experience Platform to Algolia, they can apply different ranking strategies and content visibility rules based on subscription status, creating a more relevant experience for each user segment.

**Business rules based on user attributes**

A B2B technology company wants to prioritize industry-specific solutions in search results based on the customer's industry segment. By exporting industry segment data from Adobe Experience Platform to Algolia, they can apply business rules that ensure the most relevant industry solutions appear first in search results.

## Prerequisites {#prerequisites}

To use this destination, you need the following items:

* An active Algolia account with the Personalization feature enabled
* An Algolia Application ID and Admin API Key with write permissions
* An Algolia index where user profiles will be stored

>[!IMPORTANT]
>
>Before creating an Algolia destination connection, ensure you have the appropriate permissions in your Algolia account to manage user profiles and segments.

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

| Audience origin | Supported | Description |
|---|---|---|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Adobe Experience Platform [Segmentation Service](../../../segmentation/home.md) |
| Custom uploads | ✓ | Audiences [imported](../../../segmentation/ui/overview.md#import-audience) into Adobe Experience Platform from CSV files |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
|---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, surname), as chosen in the select profile attributes screen of the [destination activation workflow](/help/destinations/ui/activate-batch-profile-destinations.md#select-attributes). |
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations). |

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](/help/destinations/ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

* **[!UICONTROL Algolia Application ID]**: Your Algolia Application ID, found in your Algolia dashboard.
* **[!UICONTROL Algolia Admin API Key]**: Your Algolia Admin API Key with write permissions for managing user profiles.

![Authentication screen for Algolia destination](../assets/catalog/personalization/algolia/authentication.png)

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

* **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
* **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
* **[!UICONTROL User Profile Index]**: The name of the Algolia index where user profiles will be stored.
* **[!UICONTROL User ID XDM Field]**: The XDM field that contains the user ID to be used as the primary identifier in Algolia.
* **[!UICONTROL Region]**: (Optional) The Algolia region where your application is hosted. Defaults to the global region if not specified.

![Destination details screen for Algolia](../assets/catalog/personalization/algolia/destination-details.png)

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

See [Activate audience data to streaming profile export destinations](/help/destinations/ui/activate-streaming-profile-destinations.md) for instructions on activating audience segments to this destination.

### Mapping considerations and example {#mapping-considerations-example}

To correctly send your audience data from Adobe Experience Platform to the Algolia destination, you need to go through the field mapping step. Mapping consists of creating a link between your Experience Data Model (XDM) schema fields in your Platform account and their corresponding equivalents from the target destination.

To correctly map your XDM fields to the Algolia destination fields, follow these steps:

1. In the **[!UICONTROL Mapping]** step, click **[!UICONTROL Add new mapping]**. You'll see a new mapping row on the screen.
1. In the **[!UICONTROL Select source field]** window, choose the **[!UICONTROL Select attributes]** category and select the XDM attribute, or choose the **[!UICONTROL Select identity namespace]** to select from a list of available identities.
1. In the **[!UICONTROL Select target field]** window, you can map your XDM fields to specific Algolia user profile fields:
   * **[!UICONTROL Select attributes]**: Choose this option to map an XDM attribute to a custom Algolia user profile attribute.
   * **[!UICONTROL Select identity namespace]**: Choose this option to map an identity namespace from your XDM schema to an Algolia user identifier field.

>[!IMPORTANT]
>
> The following mappings are mandatory for proper functionality with Algolia:
>
> * A user identity field mapped to `userToken` in Algolia
> * A mapping for each segment to be exported

Below is an example of correct field mapping between your XDM profile and Algolia:

![Example mapping screen for Algolia destination](../assets/catalog/personalization/algolia/mapping.png)

## Exported data / Validate data export {#exported-data}

Audience data will be exported to Algolia as user profiles that include segment membership information and any additionally mapped attributes.

### Example of exported user profile data

```json
{
  "objectID": "user-123",
  "userToken": "user-123",
  "email": "john.doe@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "segments": [
    "premium_customers", 
    "electronics_enthusiasts"
  ],
  "segment_premium_customers": true,
  "segment_electronics_enthusiasts": true,
  "lastModified": "2023-05-18T15:25:58Z"
}
```

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

* [Algolia Personalization Documentation](https://www.algolia.com/doc/guides/personalization/what-is-personalization/)
* [Algolia User Profile API Documentation](https://www.algolia.com/doc/rest-api/personalization/)

## Using the exported audiences in Algolia {#using-audiences}

Once your audience data is exported to Algolia, you can use it to personalize search and recommendation experiences:

### Personalizing search results

You can use the exported segments to customize search results by adding segment information to your search queries. For example:

```javascript
const searchClient = algoliasearch(
  'YOUR_APP_ID',
  'YOUR_SEARCH_API_KEY'
);

const userToken = getUserToken(); // Get the user token from your authentication system

// Initialize the Personalization feature
const personalization = searchClient.initPersonalization({
  userToken: userToken
});

// Initialize the search index
const index = searchClient.initIndex('your_index');

// Perform a search with personalization
index.search('query', {
  enablePersonalization: true,
  userToken: userToken
}).then(({ hits }) => {
  console.log(hits);
});
```

### Applying custom ranking based on segments

You can apply custom ranking strategies based on segment membership:

```javascript
// Configure ranking in the Algolia dashboard or via API
index.setSettings({
  ranking: [
    'filters',
    'typo',
    'geo',
    'words',
    'proximity',
    'attribute',
    'exact',
    'custom'
  ],
  // Custom ranking based on user segments
  customRanking: [
    'desc(segment_premium_customers)',
    'desc(segment_electronics_enthusiasts)'
  ]
});
```

### Filtering results based on segments

You can use segment membership to filter search results:

```javascript
// Get user segments from Algolia
const getUserSegments = async (userToken) => {
  const personalization = searchClient.initPersonalization({
    userToken: userToken
  });
  
  const { segments } = await personalization.getUserProfile();
  return segments;
};

// Apply filters based on user segments
const performSearch = async (query) => {
  const userToken = getUserToken();
  const segments = await getUserSegments(userToken);
  
  let filterString = '';
  
  if (segments.includes('premium_customers')) {
    filterString += 'premium:true';
  }
  
  index.search(query, {
    filters: filterString,
    userToken: userToken
  }).then(({ hits }) => {
    console.log(hits);
  });
};
```
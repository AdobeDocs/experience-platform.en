---
title: Algolia Tags Extension Overview
description: Learn about the Algolia Tags extension in Adobe Experience Platform.
exl-id: 8409bf8b-fae2-44cc-8466-9942f7d92613
---
# [!DNL Algolia] Tags extension overview

The [!DNL Algolia] Tags extension empowers marketers to easily set up rules that send user interaction data to [!DNL Algolia], helping you deliver more personalized AI Search and Discovery experiences.

This extension is powered by a key feature:

* **[!DNL Algolia] Insights**: Automatically captures and sends user interaction events to [!DNL Algolia], which enables powerful analytics, personalized experiences, and improved search relevance.

## Prerequisites {#prerequisites}

You must have a valid [!DNL Algolia] account in order to use this extension. Go to the [[!DNL Algolia] sign up page](https://dashboard.algolia.com/users/sign_up) to create an account if you do not have one already.

### Gather required configuration details {#configuration-details}

To connect [!DNL Algolia] with Adobe Experience Platform, you'll need the following information:

| Credential | Description | Example |
| --- | --- | --- |
| Application ID | Your Application Id can be found in the [API Keys](https://www.algolia.com/account/api-keys/all) section of your [!DNL Algolia] Dashboard. | 0ABCDEFG12 |
| Search API Key | Your Search API Key can be found in the [API Keys](https://www.algolia.com/account/api-keys/all) section of your [!DNL Algolia] Dashboard. | 1234a12345678901b1234567890c1ab1 |

## Install and configure the [!DNL Algolia] Insights extension {#install-configure}

To install the [!DNL Algolia] Insights extension, navigate to the [!UICONTROL Data Collection UI] and select  **[!UICONTROL Tags]** from the left navigation. From here, select a property to add the extension to, or create a new property instead.

Once you have selected or created the desired property, select **[!UICONTROL Extensions]** in the left navigation, then select the **[!UICONTROL Catalog]** tab. Search for the [!DNL Algolia] Insights card, then select **[!UICONTROL Install]**.

![](../../../images/extensions/client/algolia/install.png)

In the configuration view that appears, you must provide the following details:

| Property | Description |
| --- | --- |
| [!UICONTROL Application ID ] | Enter the [!UICONTROL Application Id] you previously gathered in the [configuration details](#configuration-details) section. |
| [!UICONTROL Search API Key ] | Enter the [!UICONTROL Search API Key] you previously gathered in the [configuration details](#configuration-details) section. |
| [!UICONTROL Index Name ] | The [!UICONTROL Index Name] contains the Products or Content.  This Index will be used as a default. |
| [!UICONTROL User Token Data Element ]  | The Data Element that will return the User Token. |
| [!UICONTROL Authenticated User Token Data Element ]  | Set the Data Element that will return the Authenticated User Token. |
| [!UICONTROL Currency Code ] | Enter the currency code in ISO-4217 format, such as USD or EUR. This field supports data elements. |

![](../../../images/extensions/client/algolia/configure.png)

## [!DNL Algolia] Insights extension action types {#action-types}

[!DNL Algolia] supports a set of predefined standard events, each with specific contexts and properties. The actions available in the [!DNL Algolia] extension align with these event types, making it easy to categorize and configure the events you send to [!DNL Algolia] based on their type.

### Load Insights {#load-insights}

>[!NOTE]
>
>In most cases, it's recommended to load [!DNL Algolia] Insights on every page of your site.

Add the **[!UICONTROL Load Insights]** action to your tag rule wherever it makes the most sense for loading [!DNL Algolia] Insights based on your rule's context. This action loads the `search-insights.js` library onto the page. 

Create a new tag rule or open an existing one. Define the conditions according to your requirements, then select **[!UICONTROL Algolia]** as the [!UICONTROL Extension] and select **[!UICONTROL Load Insights]** as the [!UICONTROL Action Type].

| Property | Description |
| --- | --- |
| [!UICONTROL Insight Library Version] | The [!DNL Algolia] Insights version. The default is `2.17.3`. |
| [!UICONTROL User Opt Out Data Element] | The Data Element that captures the user's tracking preference. |
| [!UICONTROL Use User Token Cookie] | Check this box to allow [!DNL Algolia] to generate a User Token cookie. By default, this option is set to `true`. |

![](../../../images/extensions/client/algolia/load-insights.png)

### Clicked {#clicked}

Add the **[!UICONTROL Click]** action to your tag rule to send clicked events to [!DNL Algolia]. Create a new tag rule or open an existing one. Define the conditions according to your requirements, then select **[!UICONTROL Algolia]** as the [!UICONTROL Extension] and select **[!UICONTROL Clicked]** as the [!UICONTROL Action Type].

| Property | Description |
| --- | --- |
| [!UICONTROL Event Name ] | The Event Name that can be used to further refine this click event. |
| [!UICONTROL Event Details Data Element ] | The Data Element returns event details in JSON format, including: <ul><li>`indexName`</li><li>`objectIDs`</li><li>`queryID` (optional)</li><li>`positions` (optional)</li><li>`price` (optional)</li><li>`quantity` (optional)</li><li>`discount` (optional)</li><li>`objectData` (optional)</li><li>`currency` (optional)</li></ul> |


>[!NOTE]
>
>If both `queryID` and `positions` are included, the event is classed as **Clicked object IDs after Search**. Otherwise, it's classed as a **Clicked object IDs** event.
><br>
>If the Data Element does not provide an `indexName`, the **Default Index Name** will be used when the event is sent.

![](../../../images/extensions/client/algolia/clicked.png)

For more information on the event categories, see the [Clicked object IDs after search](https://www.algolia.com/doc/api-reference/api-methods/clicked-object-ids-after-search/)
and [Clicked object IDs](https://www.algolia.com/doc/api-reference/api-methods/clicked-object-ids/) guides.

### Converted {#converted}

Add the **[!UICONTROL Converted]** action to your tag rule to send converted events to [!DNL Algolia]. Create a new tag rule or open an existing one. Define the conditions according to your requirements, then select **[!UICONTROL Algolia]** as the [!UICONTROL Extension] and select **[!UICONTROL Converted]** as the [!UICONTROL Action Type].                

| Property | Description |
| --- | --- |
| [!UICONTROL Event Name] | The Event Name that will be used to further refine this **convert** event. | 
| [!UICONTROL Event Details Data Element]| The Data Element returns event details, including: <ul><li>`indexName`</li><li>`objectIDs`</li><li>`queryID` (optional)</li><li>`recordID` (optional)</li></ul> |

>[!NOTE]
>
>If the Data Element contains `queryId`, the event is classed as **Converted after Search**. Otherwise, it will be classed as a **Converted** event. 
><br>
>If the Data Element does not provide an `indexName`, the **Default Index Name** will be used when the event is sent. 

![](../../../images/extensions/client/algolia/converted.png)

For more information on the event categories, see the [Converted object IDs after search](https://www.algolia.com/doc/api-reference/api-methods/converted-object-ids-after-search/) and [Converted object IDs](https://www.algolia.com/doc/api-reference/api-methods/converted-object-ids/) guides.

### Added to Cart {#added-to-cart}

Add the **[!UICONTROL Added to Cart]** action to your tag rule to send added to cart events to [!DNL Algolia]. Create a new tag rule or open an existing one. Define the conditions according to your requirements, then select **[!UICONTROL Algolia]** as the [!UICONTROL Extension] and select **[!UICONTROL Added to cart]** as the [!UICONTROL Action Type].

| Property | Description |
| --- | --- |
| [!UICONTROL Event Name ] | The Event Name that will be used to further refine this **add to cart** event. | 
| [!UICONTROL Event Details Data Element ] | The Data Element returns event details in JSON format, including: <ul><li>`indexName`</li><li>`objectIDs`</li><li>`objectData`</li><li>`price`</li><li>`quantity`</li><li>`discount` (optional)</li><li>`queryID` (optional)</li><li>`currency` (optional)</li></ul>. |

>[!NOTE]
>
>If the Data Element contains `queryId`, the event will be classed as **Added to cart object IDs after Search**. Otherwise, it will be classed as a **Added to cart object IDs** event. 
><br>
>If the Data Element does not provide an `indexName`, the **Default Index Name** will be used when the event is sent. 
><br>
>If the default Data Elements do not meet your requirements, a custom one Data Element can be created to return the desired event details.

![](../../../images/extensions/client/algolia/added-to-cart.png) 

For more information on the event categories, see the [Added to cart object IDs after search](https://www.algolia.com/doc/api-reference/api-methods/added-to-cart-object-ids-after-search/) and [Added to cart object IDs](https://www.algolia.com/doc/api-reference/api-methods/added-to-cart-object-ids/) guides.

### Purchased {#purchased}

Add the **[!UICONTROL Purchased]** action to your tag rule to send purchased events to [!DNL Algolia]. Create a new tag rule or open an existing one. Define the conditions according to your requirements, then select **[!UICONTROL Algolia]** as the [!UICONTROL Extension] and select **[!UICONTROL Purchased]** as the [!UICONTROL Action Type].

| Property | Description |
| --- | --- |
| [!UICONTROL Event Name ] | The Event Name that will be used to further refine this **purchase** event. | 
| [!UICONTROL Event Details Data Element ] | The Data Element returns event details in JSON format, including: <ul><li>`indexName`</li><li>`objectIDs`</li><li>`objectData`</li><li>`price`</li><li>`quantity`</li><li>`discount` (optional)</li><li>`queryID` (optional)</li><li>`currency` (optional)</li></ul>. |

>[!NOTE]
>
>The Purchased action retrieves event data from browser storage based on the purchased item IDs. If any of the purchased items contain a `queryID` in their stored data, the event will be classed as **Purchased object IDs after Search**. Otherwise, it will be classed as a **Purchased object IDs** event. 
><br>
>This approach allows the purchase event to automatically include all relevant context (query ID, index name, price, quantity, discount) from the user's earlier interactions with the items.

![](../../../images/extensions/client/algolia/purchased.png) 

For more information on the event categories, see the [Purchased object IDs after search](https://www.algolia.com/doc/api-reference/api-methods/purchased-object-ids-after-search/)
and [Purchased object IDs](https://www.algolia.com/doc/api-reference/api-methods/purchased-object-ids/) guides.

### Viewed {#viewed}

Add the **[!UICONTROL Viewed]** action to your tag rule to send purchased events to [!DNL Algolia]. Create a new tag rule or open an existing one. Define the conditions according to your requirements, then select **[!UICONTROL Algolia]** as the [!UICONTROL Extension] and select **[!UICONTROL Viewed]** as the [!UICONTROL Action Type].

| Property | Description |
| --- | --- |
| [!UICONTROL Event Name ] | The Event Name that will be used to further refine this **view** event. | 
| [!UICONTROL Event Details Data Element ] | The Data Element returns event details in JSON format, including: <ul><li>`indexName`</li><li>`objectIDs`</li></ul> |

>[!NOTE]
>
>If the Data Element does not provide an `indexName`, the **Default Index Name** will be used when sending the event.

![](../../../images/extensions/client/algolia/viewed.png) 

For more information on the view event, see the [Viewed object IDs](https://www.algolia.com/doc/api-reference/api-methods/viewed-object-ids/) guide.

## [!DNL Algolia] Insights extension data elements {#data-elements}

[!DNL Algolia] supports a set of predefined data elements, each with specific contexts and properties. The following sections describes the data elements available in the [!DNL Algolia] Insights extension.

### DataSet {#dataset}

The DataSet Data Element retrieves data associated with HTML elements, which is then used in [!DNL Algolia] actions. This data element automatically stores the retrieved event data in browser storage for later use (such as in conversion or purchase events).

**General Configuration:**

| Property | Description |
| --- | --- |
| [!UICONTROL Hit Element Div/Class Name] | The HTML Element Name and/or CSS Class Name containing the dataset attributes including `data-insights-object-id` and optionally `data-insights-query-id` and `data-insights-position` on the HTML Element. |
| [!UICONTROL Index Name Element Div/Class Name ] | The HTML Element Name and/or CSS Class Name that has the dataset attributes (`data-indexname`) on the HTML Element. |

**Commerce Configuration (Optional):**

| Property | Description |
| --- | --- |
| [!UICONTROL Price Data Element ] | Data Element that returns the price for the item. If provided, this will be included in the stored event data for commerce events. |
| [!UICONTROL Quantity Data Element ] | Data Element that returns the quantity for the item. Defaults to 1 if not provided. |
| [!UICONTROL Discount Data Element ] | Data Element that returns the discount decimal value for the item. |
| [!UICONTROL Currency Code ] | The currency code in ISO-4217 format. If no currency code is specified, the default currency from the extension configuration will be used. |

**Overrides (Optional):**

These fields allow you to override the default behavior of retrieving data from HTML dataset attributes.

| Property | Description |
| --- | --- |
| [!UICONTROL Record ID Data Element ] | Override default approach to use page URL as the record ID. The record ID is used to store and look up data to send to [!DNL Algolia] for this product/page. |
| [!UICONTROL Query ID Data Element ] | The Query ID is retrieved from the dataset on the HTML element. To override this behavior, use this property to provide a data element that returns the Query ID as a string. |
| [!UICONTROL Object IDs Data Element ] | The Object IDs are retrieved from the dataset on the HTML element. To override this behavior, use this property to provide a data element that returns the Object IDs as an array. |
| [!UICONTROL Positions Data Element ] | The Positions are retrieved from the dataset on the HTML element. To override this behavior, use this property to provide a data element that will return the Positions as an array. |
| [!UICONTROL Index Name Data Element ] | The Index Name is retrieved from the dataset on the HTML element. To override this behavior, use this property to provide a data element that will return the Index Name as a string. |

![](../../../images/extensions/client/algolia/dataset.png)

This Data Element returns:

```javascript
{
  timestamp,
  queryID,
  indexName,
  objectIDs,
  positions,
  objectData,  // Optional: commerce data if price is provided
  currency,    // Optional: if provided
  recordID
}
```

An example of HTML that contains dataset:

```html
<div data-indexname="acme_master_default_products" class="instant-search-comp__hits">
  <div class="hit-card"
    data-insights-object-id="${hit.objectID}"
    data-insights-position="${hit.__position}"
    data-insights-query-id="${hit.__queryID}">
    <h4 class="hit-name">...</h4>   
  </div>
</div>
```

### Query String {#query-string}

The Query String Data Element extracts data from the URL query string to be used in [!DNL Algolia] actions.

| Property | Description |
| --- | --- |
| [!UICONTROL Object ID Param Name ] | The query param name that contains the Object ID. |
| [!UICONTROL Index Name Param Name ] | The query param name that contains the Index Name. |
| [!UICONTROL Query ID Param Name ] | The query param name that contains the Query ID. |
| [!UICONTROL Position Param Name ] | The query param name that contains the Position. |

![](../../../images/extensions/client/algolia/query-string.png) 

This Data Element returns:

```javascript
{
  timestamp,
  queryID,
  indexName,
  objectIDs,
  positions
}
```

An example of HTML that contains query parameters:

```html
<a href="product.html?objectID=${hit.objectID}&queryID=${hit.__queryID}&indexName=${indexName}&position=${hit.position}">Read More</a>
```

### Storage {#storage}

The Storage Data Element retrieves data from the browser session storage for use in [!DNL Algolia] actions. This data element can also be used to augment the stored data with additional commerce information.

This Data Element retrieves event details that were previously stored in session storage (typically by the DataSet data element during click events). The data is automatically removed during conversion events unless the removal is explicitly disabled.

**Overrides (Optional):**

| Property | Description |
| --- | --- |
| [!UICONTROL Record ID Data Element] | The Record ID is used as a key to look up the event data that is stored in browser storage. The page URL is the default Record ID. To override this behavior, use this property to provide a data element that returns the Record ID as a string. |
| [!UICONTROL Price Data Element ] | Data Element that returns the price for the item. If provided, this will update the stored event data with price information. |
| [!UICONTROL Quantity Data Element ] | Data Element that returns the quantity for the item. If provided, this will update the stored event data with quantity information. |
| [!UICONTROL Discount Data Element ] | Data Element that returns the discount decimal value for the item. If provided, this will update the stored event data with discount information. |
| [!UICONTROL Currency Code ] | Enter the currency code in ISO-4217 format. If provided, this will update the stored event data with currency information. |

![](../../../images/extensions/client/algolia/storage.png) 

This Data Element returns what is stored in the Session Storage, including any augmented commerce data:

```javascript
{
  timestamp,
  queryID,
  indexName,
  objectIDs,
  positions,      // If available from original event
  objectData,     // Optional: commerce data if price is provided
  currency,       // Optional: if provided
  recordID
}
```

## Clicked or Converted after Search {#clicked-converted-after-search}

The *Clicked after Search* or *Converted after Search* events require a `queryID`, and `positions` is also required for *Clicked after Search*. These properties are available when the `insights` flag is enabled in InstantSearch and/or Autocomplete query parameters. Refer to the following resources to learn how to configure Insights for your site:

* [Setting up Insights on Autocomplete](https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-js/autocomplete/#param-insights)
* [Setting up Insights on InstantSearch.js](https://www.algolia.com/doc/guides/building-search-ui/events/js/#set-the-insights-option-to-true)
* [Get started with click and conversion events](https://www.algolia.com/doc/guides/sending-events/implementing/how-to/sending-events-backend/)
* [Sending [!DNL Algolia] Insights events](https://www.algolia.com/doc/ui-libraries/autocomplete/guides/sending-algolia-insights-events/)
* [[!DNL Algolia] Launch Extension GitHub Repository](https://github.com/algolia/algolia-launch-extension)
* [InstantSearch.js Documentation](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/)
* [[!DNL Algolia] Insights API Documentation](https://www.algolia.com/doc/rest-api/insights/)
* [Algolia Launch Extension Code Repo](https://github.com/algolia/algolia-launch-extension)

## Next steps {#next-steps}

This guide covered how to send data to [!DNL Algolia] using the [!DNL Algolia Insights] tag extension. If you are planning on also sending server-side events to [!DNL Algolia], you can now proceed to install and configure the [[!DNL Conversions API] event forwarding extension](../../server/algolia/overview.md).

For more information on tags in Experience Platform, refer to the [tags overview](../../../home.md).

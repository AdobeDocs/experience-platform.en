---
title: Use weather data from DNL The Weather Channel
description: Use weather data from DNL The Weather Channel to enhance the data you collect through datastreams.
exl-id: 548dfca7-2548-46ac-9c7e-8190d64dd0a4
---
# Use weather data from [!DNL The Weather Channel]

Adobe has partnered with [!DNL [The Weather Company]](https://www.ibm.com/weather) to bring the additional context of United States weather to the data collected via datastreams. You can use this data for analytics, targeting and segment creation in Experience Platform.

There are 3 types of data that are available from [!DNL The Weather Channel]:

* **[!UICONTROL Current Weather]**: The current weather conditions of the user, based on their location. This include current temperature, percipitation, cloud coverage, and more.
* **[!UICONTROL Forecasted Weather]**: The forecast includes the 1,2,3,5,7 and 10 day forecast for the user location.
* **[!UICONTROL Triggers]**: Triggers are specific combinations that map to different semantic weather conditions. There are three different types of weather triggers:
  
    * **[!UICONTROL Weather Triggers]**: Semantically meaningful conditions, such as cold or rainy weather. These can differ in their definitions between various climates.
    * **[!UICONTROL Product Triggers]**: Conditions that would lead to the purchase of different types of products. For example: cold weather forecasts could mean that purchases of rain coats are more likely. 
    * **[!UICONTROL Severe Weather Triggers]**: Severe weather warnings, like winter storm or hurricane warnings. 

## Prerequisites {#prerequisites}

Before you use weather data, make sure you meet the following prerequisites:

* You must license the weather data that you will use, from [!DNL The Weather Channel]. They will then enable it on your account. 
* Weather data is available only through datastreams. To use weather data, you must use [!DNL Web SDK], [!DNL Mobile Edge Extension] or the [Server API](../../../server-api/overview.md) to leverage this data.
* Your datastream must have [[!UICONTROL Geo Location]](../configure.md#advanced-options) enabled.
* Add the [weather field group](#schema-configuration) to the schema you are using.

## Provisioning {#provisioning}

Once you have licensed the data from [!DNL The Weather Channel], they will enable your account to access the data. Next, you must reach out to Adobe Customer Care to have the data enabled on your datastream. Once enabled, the data will automatically be appended.

You can validate that it is being added by running an edge trace with the debugger or by using Assurance to trace a hit through the [!DNL Edge Network].

### Schema configuration {#schema-configuration}

You must add the weather field groups to your Experience Platform schema corresponding to the event dataset you are using in your datastream. There are five field groups available:

* [!UICONTROL Forecasted Weather]
* [!UICONTROL Current Weather]
* [!UICONTROL Product Triggers]
* [!UICONTROL Relative Triggers]
* [!UICONTROL Severe Weather Triggers]

## Access the weather data {#access-weather-data}

Once your data is licensed and available, you can access it in a variety of ways throughout the Adobe services.

### Adobe Analytics {#analytics}

In [!DNL Adobe Analytics], the weather data is available to map via processing rules, along with the rest of your [!DNL XDM] schema.

You can find the list of fields that you can map in the [weather reference](weather-reference.md) page. As with all [!DNL XDM] schemas, the keys are prefixed with `a.x`. For example, a field named `weather.current.temperature.farenheit` would show up in [!DNL Analytics] as `a.x.weather.current.temperature.farenheit`.

![Processing Rule Interface](../../assets/datastreams/data-enrichment/weather/processing-rules.png)

### Adobe Customer Journey Analytics {#cja}

In [!DNL Adobe Customer Journey Analytics], the weather data is available in the dataset that is specified in the datastream. As long as the weather attributes are [added to your schema](#prerequisites-prerequisites), they will be available to [add to a data view](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-dataviews/create-dataview.html) in [!DNL Customer Journey Analytics]. 

### Real-Time Customer Data Platform {#rtcdp}

Weather data is available in the [Real-Time Customer Data Platform](../../../rtcdp/overview.md), for use in segments. Weather data is attached to events.

![Segemnt Builder Showing Weather Events](../../assets/datastreams/data-enrichment/weather/schema-builder.png)

Since weather conditions change often, Adobe recommends that you set time constraints on the segments, as shown in the example above. Having a cold day in the last day or two is much more impactful than having a cold day 6 months ago.

See the [weather reference](weather-reference.md) for the available fields.

### Adobe Target {#target}

In [!DNL Adobe Target], you can use weather data to drive personalization in real-time. Weather data is passed to [!DNL Target] as [!UICONTROL mBox] parameters and you can access it via a custom [!UICONTROL mBox] parameter. 

![Target Audience Builder](../../assets/datastreams/data-enrichment/weather/target-audience-builder.png)

The parameter is the [!DNL XDM] path to a specific field. See the [weather reference](weather-reference.md) for the available fields and their corresponding paths.

## Next steps {#next-steps}

After reading this document, you now have a better understanding of how you can use weather data across various Adobe solutions. To learn more about the weather data field mapping, see the [field mapping reference](weather-reference.md).

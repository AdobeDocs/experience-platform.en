---
title: Derived Attributes
description: Derived attributes provide a convenient means to generate attributes of your choice that can be refreshed at any regular cadence and optionally published into your Real-Time Customer Profile data. This document provides an overview of how to use Query Service to create derived attributes for use with your Profile data.
exl-id: 5d52b268-e2a3-411c-8242-3aa32e759937
---
# Derived attributes

The derived attributes feature provides a convenient means to generate attributes of your choice from other information available in the data lake. These attributes can be refreshed at any regular cadence and optionally published into your Real-Time Customer Profile data. Derived attributes address the need to build complex attributes such as decile, percentile, and quartile over simpler ones such as max, count, and mean. These attributes can be calculated specifically for an individual user or for a business entity. This enables you to derive attributes that can be directly accredited to an identifier, such as email addresses, device IDs, and phone numbers, and also derive attributes that are indirectly associated with that user or business profile.

Derived attributes are needed for a variety of use cases when data is being analyzed on the data lake. This data can then be marked for use in Real-Time Customer Profile and used in downstream use cases such as creating highly focussed audiences. Some potential use cases for this feature might include:

* Identifying the lowest 10% of subscribers based on viewership by channel. This would allow marketers to target a particular audience and sell a new subscriber package.
* Identifying an audience who are in the top 10% of flyers based on their total miles traveled and have "Flyer" status. This audience could be used to selectively target the sale of a new credit card offer.
* Determine the churn rate based on subscription.
* Identifying the top 1% of household income in a province or state, and providing a measure of the number of individuals moving out of that collective group over the last "n" months.

## Complex derived attributes

To create a ranking based on one or more metrics (such as revenue, viewership duration, and so on) on a particular dimension (category), complex derived attributes are required. Deciles, quartiles, and percentiles allow flexibility and precision when ranking data with derived attributes. 

A decile is a method of splitting up a set of ranked data into 10 equal parts. When the data is divided into deciles, a decile rank is assigned to each row in the data set. This allows the data to be sorted into descending or ascending order. 

A decile rank arranges the data in order from lowest to highest and is done on a scale of 1 to 10 where each successive number corresponds to an increase of 10 percentage points.

Decile buckets represent the number of ranked groups and are used to assign a ranking to a dimension (category) in the dataset. The bucket can be a number or an expression that evaluates to a positive integer value for each partition. The buckets must not have a null value.

Quartiles are used to divide the distribution by four and percentiles by 100.

## Analytical derived attributes

Query Service provides built-in functions such as sessionization and last touch, amongst others, that you can apply to any time series data to generate business related derivate attributes. You have the option to base these analytical derived attributes on one or more identity and optionally publish the data to Real-Time Customer Profile if required.

Some potential use cases for this type of derived attribute might include:

* Tracking products scanned during a user session that are were out of stock.
* Tracking popular metrics such as size, color, or product category of the products being browsed or purchased.
* Tracking the platform source that led to a product browse or purchase.
* Tracking the most recently browsed item by an identity.
* Tracking metrics such as average number of items in a cart, cart abandonment, or average purchase frequency.

## Other derived attributes

You are also able to calculate business metrics as a derived attribute and use them in conjunction with simple attributes such as zip code or an aggregated metric such as total count. For example, a total count based on a city or province, or total count based on a business category and a city/province.

## Next steps and use cases

By reading this document, you have a better understanding of how Query Service derived attributes facilitate complex use cases for maximizing the utility of your data. Next, you should read the [decile-based derived attribute use case](../../use-cases/deciles-use-case.md) to see how this feature is applied in a real-world scenario.

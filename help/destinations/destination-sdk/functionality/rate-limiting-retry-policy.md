---
description: Learn how Experience Platform handles different types of errors returned by streaming destinations and how it retries to send data to the destination platform.
title: Rate limiting and retry policy for streaming destinations built with Destination SDK
exl-id: aad10039-9957-4e9e-a0b7-7bf65eb3eaa9
---
# Rate limiting and retry policy for streaming destinations built with Destination SDK

Partner-built destinations can return various errors and have different rate limiting policies. This page explains how Experience Platform handles different types of errors returned by streaming destinations.

When configuring a destination using Destination SDK, you can select between two aggregation types - [best effort aggregation](../functionality/destination-configuration/aggregation-policy.md#best-effort-aggregation) and [configurable aggregation](../functionality/destination-configuration/aggregation-policy.md#configurable-aggregation). Depending on the aggregation type that you select, read below how Experience Platform handles errors and rate limitations.

## Best effort aggregation {#best-effort-aggregation}

Experience Platform retries calls that return the following HTTP response codes: **403, 408, 409, 429, 500, 502, 503, 504**. Two retries are performed at the following intervals:

* First retry attempt: after 15 seconds
* Second retry attempt: after 30 seconds

Experience Platform does *not* retry calls that return other HTTP response codes, such as 400 (Bad Request). If the call still fails after both retry attempts, Experience Platform drops the activation and does not reattempt it. 

You can request a different retry policy for specific dataflows by contacting Customer Support.

## Configurable aggregation {#configurable-aggregation}

In the case of destination platforms set up with configurable aggregation, Experience Platform distinguishes between the error type returned by your platform:

* Errors where Experience Platform retries to send the data to your platform:
    * HTTP response codes 420 and 429
    * HTTP response codes greater than 500
* Errors where Experience Platform *does not* retry to send the data to your platform: all the other ones returned by your platform

### Retry approach described {#retry-approach}

The Experience Platform approach for configurable aggregation is described below. This example assumes that Experience Platform sends data to a destination platform that starts returning 429 error codes if it receives more than 50k requests per minute:

* Minute 1: Experience Platform aggregates 40k batches with profiles to send to your destination platform. Experience Platform makes 40k HTTP requests and all are successful.
* Minute 2: Experience Platform aggregates 70k batches with profiles to send to your destination platform. Experience Platform makes 70k HTTP requests and 50k are successful. The other 20k receive a rate limiting error from your endpoint and will be reattempted in 30 minutes.
* Minute 3: Experience Platform aggregates 30k batches with profiles to send to your destination platform. Experience Platform makes 30k HTTP requests and all are successful.
* ...
* ...
* Minute 32: Experience Platform reattempts to send the 20k batches that have failed at minute 2. All calls are successful.

## Next steps {#next-steps}

You now know how Experience Platform handles errors and rate limiting from destination platforms, depending on the aggregation policy you selected when you configured your streaming destination. Next, you can review the following documentation:

* [Test your destination configuration](../testing-api/streaming-destinations/streaming-destination-testing-overview.md)
* [Submit for review a destination authored in Destination SDK](../guides/submit-destination.md)

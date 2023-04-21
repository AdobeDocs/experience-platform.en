---
description: Learn how to use the file-based destination testing API to validate the configuration of your file-based destinations built through the Destination SDK.
title: File-based destination testing API
exl-id: 2733fd00-af08-4763-a30e-a53ee56c0a19
---

# File-based destination testing API

## Overview {#overview}

The file-based destination testing API is a set of endpoints that you can use to validate the configuration of your file-based destinations built through the Destination SDK.

We recommend using these tools to validate your configuration before [submitting](../../guides/submit-destination.md) your destination for review to Adobe.

For the best testing results, we recommend using this API based on the flow diagram below.

![Diagram showing the recommended destination testing flow](../../assets/testing-api/batch-destinations/file-based-testing-flow.png)

See the sections below for a brief overview of what each endpoint can do.

## Generate sample profiles {#generate-sample-profiles}

Use the `/sample-profiles` API endpoint to generate sample profiles based on your existing source schema.

Sample profiles can help you understand the JSON structure of a profile. Additionally, they give you a default that you can customize with your own profile data, for further destination testing.

See the [dedicated documentation](file-based-sample-profile-generation-api.md) to learn how to generate sample profiles.

## Test destination configuration {#test-destination-configuration}

Use the `/testing/destinationInstance` API endpoint to test if your file-based destination is configured correctly and to verify the integrity of data flows to your configured destination.

You can make requests to the testing endpoint with or without adding [sample profiles](file-based-sample-profile-generation-api.md) to the call. If you don't send any profiles on the request, the API generates a sample profile automatically and adds it to the request.

See the [dedicated documentation](file-based-destination-testing-api.md) to learn how to test your destination configuration with sample profiles.

## View detailed activation results {#view-detailed-activation-results}

Use the `/testing/destinationInstance` API endpoint to you view the complete details of your file-based destination testing results.

This API endpoint returns the same result as you would obtain when using the [Flow Service API](../../../api/update-destination-dataflows.md) to monitor dataflows.

See the [dedicated documentation](file-based-destination-results-api.md) to learn how to view detailed activation results.

## Render customer data fields {#render-customer-data-fields}

Use the `/authoring/testing/template/render` API endpoint to visualize how the templatized [customer data fields](../../functionality/destination-configuration/customer-data-fields.md) defined in your destination configuration would look like.

The API endpoint generates random values for your customer data fields, and returns them in the response. This helps you validate the semantic structure of customer data fields such as bucket names or folder paths.

See the [dedicated documentation](file-based-render-template-api.md) to learn how to generate and visualize values for your customer data fields.

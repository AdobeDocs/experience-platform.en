---
keywords: Experience Platform;home;popular topics;didomi;Didomi
solution: Experience Platform
title: Create a Didomi Source Connection in the UI
type: Tutorial
description: Learn how to create a Didomi source connection using the Adobe Experience Platform UI.
---

# Create a Didomi source connection in the UI

## Overview

The Didomi Source Connector enables you to stream real-time user consent and preference data from the Didomi Consent & Preference Management Platform into Adobe Experience Platform (AEP).
Adobe Experience Platform supports ingesting data from a wide range of external systems including cloud storage, databases, and applications like Didomi through a system of source connectors. These connectors let you authenticate external systems, manage data flow into Adobe, and ensure consistent and structured ingestion of customer data.
This connector allows you to centralize and act on consent data in Adobe Experience Platform, keeping your customer profiles and downstream workflows compliant and up to date.

> [!IMPORTANT]
>
> This documentation page was created by the _Didomi_ team. For any inquiries or update requests, please contact them directly at _support@didomi.io_.
> For step-by-step instructions on generating the connection, refer to the [Didomi Adobe source connector documentation](https://developers.didomi.io/integrations/third-party-apps/preference-management-platform-integrations/Adobe-source-connector).

![overview](https://developers.didomi.io/~gitbook/image?url=https%3A%2F%2F1703900661-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-LDh8ZWDZrXs8sc4QKEQ%252Fuploads%252FLS7H2LY4bfNV8wyUdOBy%252Fflux.jpeg%3Falt%3Dmedia%26token%3D21d4a286-2442-45d3-89eb-c1e75240efe9&width=768&dpr=2&quality=100&sign=5a2f5642&sv=2)

## Prerequisites

Before connecting the Didomi Source Connector to Adobe Experience Platform, you must complete the following setup steps:

### 1. Create a Schema and Dataset in Adobe

Adobe Experience Platform uses **schemas** and **datasets** to define and store structured data.

- **Schemas** define the structure of the data you’ll be sending from Didomi (e.g., user IDs, consent purposes).
- **Datasets** are used to store the incoming data based on the schema you define.

You will create both of these using the Adobe Experience Platform UI in the next section of this guide.

> ⚠️ **Note:** If you already have a schema and dataset that you plan to use, you can skip these steps.

### 2. Gather Adobe API Credentials

To securely connect Didomi with Adobe Experience Platform, you will need to authenticate using Adobe API credentials. These values are required to set up the webhook and configure data ingestion.

For full instructions on how to retrieve these values, refer to the official [Adobe guide](https://experienceleague.adobe.com/en/docs/experience-platform/landing/platform-apis/api-authentication).

---

## Create a Schema

1. Navigate to the **Schemas** tab in the Adobe Console.
2. Choose the option to manually create fields.
3. Select the type of **Profile Schema** you are registering.
4. Provide a name for the schema and complete the creation.
5. After creation, update the schema by adding any required fields.
6. Ensure that at least one field is tagged as an **identity** so Adobe can recognize the primary value.
7. Enable **Profile** for the schema — this is essential for storing data.

![create-schema](https://developers.didomi.io/~gitbook/image?url=https%3A%2F%2F1703900661-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-LDh8ZWDZrXs8sc4QKEQ%252Fuploads%252F8SEXrzUBWS9Yi2erOnyS%252Fcreate-schema.png%3Falt%3Dmedia%26token%3Dc68300bd-57f5-41d3-8c21-6d2e7411d85a&width=768&dpr=2&quality=100&sign=230dc19&sv=2)

---

## Create a Dataset

1. Navigate to the **Datasets** section in Adobe Experience Platform.
2. Select the option to create a dataset using the previously created schema.
3. Once the dataset is created, you can proceed with configuring the source connector.

## ![create-dataset](https://developers.didomi.io/~gitbook/image?url=https%3A%2F%2F1703900661-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-LDh8ZWDZrXs8sc4QKEQ%252Fuploads%252FJjqNo0KphPYZifqz3R7c%252Fcreate-dataset.png%3Falt%3Dmedia%26token%3D8b9ecfef-9f4b-44a4-8928-0bb8395830ef&width=768&dpr=4&quality=100&sign=a8f70814&sv=2)

## Configure the HTTP Webhook on the Didomi Console

Webhooks allow you to subscribe to events triggered on the Didomi platform when users interact with their consent preferences. When a relevant event occurs — for example, when a user gives or withdraws consent — Didomi sends a real-time HTTP POST request containing a JSON payload to your configured webhook endpoint.

To ensure compatibility with Adobe Experience Platform, your webhook must meet the following requirements:

![didomi-console](https://developers.didomi.io/~gitbook/image?url=https%3A%2F%2F1703900661-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-LDh8ZWDZrXs8sc4QKEQ%252Fuploads%252F7c9KbgaReyv9QHaPRbch%252Fdidomi-marketplace.png%3Falt%3Dmedia%26token%3D49bad6a8-c94f-4729-8fd6-8fd1ba81138d&width=768&dpr=2&quality=100&sign=975418d2&sv=2)

1. Navigate to the **Didomi Marketplace**.
2. Select the option to **Configure Webhook**.
3. Add the webhook configuration.

| **Field**                 | **Description**                                                   | **Required** | **Value**                                                                           |
| ------------------------- | ----------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------- |
| **Client Secret**         | Secret key associated with your Adobe API credentials.            | ✅           | `YOUR_ADOBE_CLIENT_SECRET`                                                          |
| **API Key**               | Public API key used to authenticate requests to Adobe services.   | ✅           | `YOUR_ADOBE_API_KEY`                                                                |
| **Grant Type**            | Must always be set to `client_credentials`.                       | ✅           | `client_credentials`                                                                |
| **Scope**                 | The authorization scopes.                                         | ✅           | `openid,AdobeID,read_organizations,additional_info.projectedProductContext,session` |
| **Authentication Header** | Additional headers required for the Adobe token request.          | ✅           | `{"Content-type": "application/x-www-form-urlencoded"}`                             |
| **Token URL**             | Adobe token endpoint.                                             | ✅           | `https://ims-na1.adobelogin.com/ims/token/v3`                                       |
| **Endpoint URL**          | The final Adobe connector URL (provided at the end of the setup). | ✅           | `https://dcs.adobedc.net/collection/your-adobe-endpoint-id`                         |

4. Configure the webhook options.

| **Field**           | **Description**                                                                                                                                                                                                                                                                                                                                                                                      | **Required** | **Value**                                                                                                     |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| **Request Headers** | Custom headers for the webhook. Make sure to include the `x-adobe-flow-id` (provided later).                                                                                                                                                                                                                                                                                                         | ✅           | `{"Content-Type": "application/json", "Cache-Control": "no-cache", "x-adobe-flow-id": "your-flow-id"}`        |
| **Flatten**         | Must be checked. Ensures that the webhook data is sent as a flat object.                                                                                                                                                                                                                                                                                                                             | ✅           | Enabled                                                                                                       |
| **Event Types**     | Select the specific group of Didomi events (`event.*` or `user.*`) that should trigger the webhook. Use `event.*` to track consent or preference changes, and use `user.*` to track user profile updates. This selection is required to ensure that only compatible events are sent to Adobe. Adobe supports only one schema per dataflow, so selecting both event types can cause ingestion errors. | ✅           | `Event.created`, `Event.updated`, and `Event.deleted` — or `User.created`, `User.updated`, and `User.deleted` |

5. Based on your selected event group, download the appropriate **sample payload file** directly from the Didomi Console. This file represents the structure of the data and will be used during the schema and mapping steps in Adobe.

| **Event Group** | **Sample File to Download**           | **Filtering Option**             |
| --------------- | ------------------------------------- | -------------------------------- |
| `event.*`       | Download a sample for `event.created` | Filter only for `event.*` events |
| `user.*`        | Download a sample for `user.created`  | Filter only for `user.*` events  |

---

## Connect to Didomi Source Connector

In the Experience Platform UI:

1. Select **Sources** from the left navigation to access the catalog of sources available in Experience Platform.
2. Find the **Didomi** source card and click on **Add data**.

![didomi-source-connector](https://developers.didomi.io/~gitbook/image?url=https%3A%2F%2F1703900661-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-LDh8ZWDZrXs8sc4QKEQ%252Fuploads%252FqJgYCi7huXzeykibrnSp%252Fsource-connector-list.png%3Falt%3Dmedia%26token%3D44de0d43-7d46-4e83-b097-24e350e03a66&width=768&dpr=4&quality=100&sign=e138bfc9&sv=2)

---

## Add the Source Data Schema

In the Experience Platform UI, add the schema for the source data using the file downloaded in the previous step.

![didomi-data-schema](https://developers.didomi.io/~gitbook/image?url=https%3A%2F%2F1703900661-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-LDh8ZWDZrXs8sc4QKEQ%252Fuploads%252FycjpRCoYpvtgbDNIE3qL%252Fadd-data-schema.png%3Falt%3Dmedia%26token%3Dc15585df-c666-4c51-87a7-e95352bde569&width=768&dpr=4&quality=100&sign=8441e566&sv=2)

---

## Configure the Dataflow Details

In the Experience Platform UI:

1. Select the **dataset** created in the previous step.
2. Make sure the **Profile dataset** option is enabled.

![dataflow-details](https://developers.didomi.io/~gitbook/image?url=https%3A%2F%2F1703900661-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-LDh8ZWDZrXs8sc4QKEQ%252Fuploads%252FotFBNmryGvnYz7inkcQH%252Fdataflow-details.png%3Falt%3Dmedia%26token%3Dc7a4d502-eaec-49e4-8958-2631315f68e1&width=768&dpr=4&quality=100&sign=1163a42c&sv=2)

---

## Configure the Mapping

In the Adobe Experience Platform UI:

1. Configure the mapping between the source data from Didomi and the target dataset in Experience Platform.
2. The mapping is used specifically to transfer **purpose data** from Didomi into the Adobe Experience Platform dataset. These purposes represent the user's consent choices (e.g., for analytics, personalization, advertising, etc.) and are the only accepted mapping fields in this integration.
3. Use the sample webhook payload downloaded from the Didomi webhook settings to map each Didomi purpose to the appropriate fields in your Adobe dataset.

![mapping](https://developers.didomi.io/~gitbook/image?url=https%3A%2F%2F1703900661-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-LDh8ZWDZrXs8sc4QKEQ%252Fuploads%252FuEWNYPHSdj4Lx6AGLAU9%252Fmapping-details.png%3Falt%3Dmedia%26token%3Dc5077c90-055f-4506-837d-1f1e19aafe2c&width=768&dpr=4&quality=100&sign=8d42d18f&sv=2)

---

## Finish the Configuration on Adobe

In the Experience Platform UI:

1. After completing the configuration, review the configuration parameters that were missing from the initial webhook setup.
2. Once these values are available, return to Didomi and update the webhook configuration.

---

## Update the Webhook Configuration

After finishing the configuration on Adobe:

1. Update the webhook configuration with the following values:
   - **Endpoint URL:** The streaming endpoint provided by Adobe.
   - **Adobe Flow ID:** The flow ID shown during the final step of the Adobe setup.

Once this is complete, Didomi will begin sending PMP/CMP events through the integration, and the data will be stored in your Adobe dataset.

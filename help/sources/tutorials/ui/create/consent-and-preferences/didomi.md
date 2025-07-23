---
title: Create a Didomi Source Connection in the UI
description: Learn how to create a Didomi source connection using the Adobe Experience Platform UI.
---

# Create a Didomi source connection in the UI

Read this guide to learn how to connect your [!DNL Didomi] account to Adobe Experience Platform using the sources workspace in the UI.

>[!IMPORTANT]
>
>* This documentation page was created by the _Didomi_ team. For any inquiries or update requests, please contact them directly at _support@didomi.io_.
>* For step-by-step instructions on generating the connection, refer to the [Didomi Adobe source connector documentation](https://developers.didomi.io/integrations/third-party-apps/preference-management-platform-integrations/Adobe-source-connector).


## Connect to Didomi Source Connector

In the Experience Platform UI:

1. Select **Sources** from the left navigation to access the catalog of sources available in Experience Platform.
2. Find the **Didomi** source card and click on **Add data**.

![source-connector-list](../../../../images/tutorials/create/didomi/source-connector-list.png)

---

## Add the Source Data Schema

In the Experience Platform UI, add the schema for the source data using the file downloaded in the previous step.

![add-data-schema](../../../../images/tutorials/create/didomi/add-data-schema.png)

---

## Configure the Dataflow Details

In the Experience Platform UI:

1. Select the **dataset** created in the previous step.
2. Make sure the **Profile dataset** option is enabled.

![dataflow-details](../../../../images/tutorials/create/didomi/dataflow-details.png)

---

## Configure the Mapping

In the Adobe Experience Platform UI:

1. Configure the mapping between the source data from Didomi and the target dataset in Experience Platform.
2. The mapping is used specifically to transfer **purpose data** from Didomi into the Adobe Experience Platform dataset. These purposes represent the user's consent choices (e.g., for analytics, personalization, advertising, etc.) and are the only accepted mapping fields in this integration.
3. Use the sample webhook payload downloaded from the Didomi webhook settings to map each Didomi purpose to the appropriate fields in your Adobe dataset.

![mapping-details](../../../../images/tutorials/create/didomi/mapping-details.png)

---

## Finish the Configuration on Adobe

In the Experience Platform UI:

1. After completing the configuration, review the configuration parameters that were missing from the initial webhook setup.
2. Once these values are available, return to Didomi and update the webhook configuration.

![configuration-done](../../../../images/tutorials/create/didomi/configuration-done.png)

---

## Update the Webhook Configuration

After finishing the configuration on Adobe:

1. Update the webhook configuration with the following values:
   - **Endpoint URL:** The streaming endpoint provided by Adobe.
   - **Adobe Flow ID:** The flow ID shown during the final step of the Adobe setup.

Once this is complete, Didomi will begin sending PMP/CMP events through the integration, and the data will be stored in your Adobe dataset.

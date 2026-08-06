---
title: Using Flexible Batch Schedules
description: Learn how to use Flexible Batch Schedules to 
---

# Control your batch audience evaluation using Flexible Batch Schedules

Batch segmentation is an evaluation method that lets you move profile data all at once to create a corresponding audience. Previously, these batch audiences relied on a single, fixed segmentation job that ran once a day.

With Flexible Batch Schedules, you control when your audiences are evaluated, giving you more flexibility to prioritize your evaluation timings so you can better scale to larger audience volumes.

## Create a schedule

To use Flexible Batch Schedules, you'll first need to create a schedule for the audiences. You can create a schedule using either the Experience Platform UI or API.

>[!BEGINTABS]

>[!TAB UI]

To create a schedule using the Experience Platform UI, you'll first need to access the **[!UICONTROL Evaluation]** section within the Segmentation Service workspace.

Select **[!UICONTROL Audiences]** within the [!UICONTROL Customer] section, followed by **[!UICONTROL Evaluation]**.

IMAGE

The **Evaluation** page appears, which displays all the currently available schedules in your organization. Select **Create schedule** to begin creating the schedule.

IMAGE

The **Create schedule** popover appears. On this popover, you can fill in details of your schedule, including the name, cadence, and time of day you want the schedule to run. After inputting all the required details, select **Create** to continue.

IMAGE

>[!TAB API]

To create a schedule using the Experience Platform API, you'll need to make a POST request to the `/schedules` endpoint.

**API format**

```http
POST /schedules
```

**Request**

+++ A sample request to create a schedule.

```shell
curl -X POST https://platform.adobe.io/data/core/ups/config/schedules \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '
{
    "name": "Weekly VIP refresh",
    "type": "batch_segmentation",
    "schedule": "0 0 10 * * ?",
    "properties": {
        "segments": [
            "sample-audience-1",
            "sample-audience-2"
        ]
    },
    "state": "active"
}'
```

When you create a schedule, you'll need to provide a name, type, schedule, the audiences that belong to it, as well as its state. For more detailed information about creating a schedule using the API, read the [schedules endpoint guide](/help/segmentation/api/schedules.md#create).

+++

**Response**

+++ A sample response when creating a schedule.

```json
{
  "id": "cd585edf-962d-420d-94ad-3be03e619ac2",
  "name": "Weekly VIP Refresh",
  "type": "batch_segmentation",
  "schedule": "0 0 10 * * ?",
  "frequency": "weekly",
  "state": "active",
  "properties": {
    "segments": ["sample-audience-1", "sample-audience-2"]
  }
}
```

A successful response returns HTTP status 200 with information about your newly created schedule. The `frequency` field is automatically populated and is based off of the provided `schedule`. 

+++

>[!ENDTABS]

## Assigning audiences to a schedule

After you create a schedule, you can assign additional audiences to the previously schedule. You can assign audiences using either the Experience Platform UI or API.

>[!BEGINTABS]

>[!TAB UI]

To assign an audience a schedule using the Experience Platform UI, select the schedule you created within the **Evaluation** page.

IMAGE



>[!TAB API]

>[!ENDTABS]
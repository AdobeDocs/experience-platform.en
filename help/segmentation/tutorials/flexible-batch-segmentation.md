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

To assign audiences to a schedules using the Experience Platform UI, select the ICON next to the schedule, followed by **[!UICONTROL Schedule audiences]**.

IMAGE

The **[!UICONTROL Schedule audiences]** popover is displayed. Select the audiences you want to add to the schedule, followed by **[!UICONTROL Schedule]** to confirm your scheduling changes.

IMAGE

>[!TAB API]

To assign audiences to a schedule using the Experience Platform API, you'll need to make a POST request to the `/schedules/add-audiences` endpoint.

**API format**

```http
POST /schedules/add-audiences
```

**Request**

+++ A sample request to add audiences to a schedule.

```shell
curl -X POST https://platform.adobe.io/data/core/ups/config/schedules/add-audiences \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "id": "cd585edf-962d-420d-94ad-3be03e619ac2",
        "segments": [
            "sample-audience-3", 
            "sample-audience-4"
        ]
      }'
```

When you add audiences to a schedule, you need to provide the schedule ID as well as the IDs of the audiences you want to add to the schedule. For more detailed information about adding audiences to a schedule, read the [schedules endpoint guide](/help/segmentation/api/schedules.md#add-audiences).

+++

**Response**

+++ A successful response when adding audiences to a schedule.

```json
{
    "added": ["sample-audience-3", "sample-audience-4"],
    "existing": [],
    "invalid": [],
    "segmentCount": { 
        "previous": 2, 
        "current": 4, 
        "diff": 2 
    }
}
```

A successful response returns HTTP status 200 with information about the added audiences to the schedule.

+++

>[!ENDTABS]

Alternatively, you can assign a schedule to an audience during audience creation. Within Audience Builder, after saving your audience, go to the **Schedule** section in the audience properties section and select the ICON.

The **Audience schedules** popover appears. On this popover, you can assign which schedules the audience should belong to.

IMAGE

## Checking which schedules an audience belongs to

You can see which schedules an audience belongs to either using the Experience Platform UI or API.

>[!BEGINTABS]

>[!TAB UI]

>[!NOTE]
>
>You can only view the schedules for audiences created using **Audience Builder**.

To view the schedules an audience belongs to using the Experience Platform UI, go to [Audience Portal](/help/segmentation/ui/audience-portal.md) and select the audience, followed by **Edit audience**.

IMAGE

Within Audience Builder, select the ICON within the **Schedule** section of the **Audience properties** section to display the **Audience schedules** popover. This popover shows which schedules the audience belongs to, and lets you add or remove which schedules the audience belongs to.

IMAGE

>[!TAB API]

To view the schedules an audience belongs to using the Experience Platform API, make a POST request to the `/schedules/audience-map` endpoint.

**API format**

```http
POST /schedules/audience-map
```

**Request**

+++ A sample request to see which schedules the listed audiences belong to.

```shell
curl -X POST https://platform.adobe.io/data/core/ups/config/schedules/audience-map \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "segments": [
            "sample-audience-1", 
            "sample-audience-2"
        ]
      }'
```

To use this endpoint, you need to provide the IDs of the audiences that you want to view the schedules for. For more detailed information about viewing the schedules an audience belongs to, read the [schedules endpoint guide](/help/segmentation/api/schedules.md#get-audience-map).

+++

**Response**

+++ A successful response when retrieving schedules for the audiences.

```json
{
  "audienceMap": {
    "sample-audience-1": ["cd585edf-962d-420d-94ad-3be03e619ac2"],
    "sample-audience-2": []
  },
  "schedules": {
    "cd585edf-962d-420d-94ad-3be03e619ac2": {
      "name": "Weekly VIP Refresh",
      "schedule": "0 0 10 * * ?",
      "frequency": "weekly"
    }
  }
}
```

A successful response returns HTTP status 200 with detailed information about the schedules the requested audiences belong to.

+++

>[!ENDTABS]

## Removing audiences from a schedule

If you want to remove audiences from an already created schedule, you can use either the Experience Platform UI or API.

>[!BEGINTABS]

>[!TAB UI]

To remove audiences from a schedule using the Experience Platform UI, select the ICON next to the schedule, followed by **[!UICONTROL Schedule audiences]**.

IMAGE

The **[!UICONTROL Schedule audiences]** popover is displayed. Select the audiences you want to remove from the schedule, followed by **[!UICONTROL Schedule]** to confirm your scheduling changes.

IMAGE

>[!TAB API]

To remove audiences from a schedule, you'll need to make a POST request to the `/schedules/remove-audiences` endpoint.

**API format**

```http
POST /schedules/remove-audiences
```

**Request**

+++ A sample request to remove audiences from a schedule

```shell
curl -X POST https://platform.adobe.io/data/core/ups/config/schedules/remove-audiences/
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '
 {
    "id": "cd585edf-962d-420d-94ad-3be03e619ac2",
    "segments": [
        "sample-audience-1"
    ]
 }
 '
```

When you remove audiences from a schedule, you need to provide the schedule ID as well as the IDs of the audiences you want to remove from the schedule. For more detailed information about removing audiences to a schedule, read the [schedules endpoint guide](/help/segmentation/api/schedules.md#remove-audiences).

+++

**Response**

+++ A successful response when removing audiences from a schedule.

```json
{
    "removed": ["sample-audience-1"],
    "existing": [],
    "invalid": [],
    "segmentCount": {
        "previous"
    }
}
```

+++

>[!ENDTABS]

## Manually run a schedule

Instead of waiting for the schedule to run, you can manually trigger an existing schedule to run using either the Experience Platform UI or API.

>[!BEGINTABS]

>[!TAB UI]

To manually run a schedule in the Experience Platform UI, select the ICON next to the schedule you want to evaluate in the **Evaluation** page, followed by **Run schedule**.

IMAGE

A confirmation popup appears. Select **Start** to immediately begin the schedule run.

IMAGE

>[!TAB API]

To manually run a schedule in the Experience Platform API, you'll need to make a POST request to the `/schedules/trigger` endpoint.

**API format**

```http
POST /schedules/trigger
```

**Request**

+++ A sample request to trigger a schedule's evaluation.

```shell
curl -X POST https://platform.adobe.io/data/core/ups/config/schedules/trigger \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{ 
    "id": "cd585edf-962d-420d-94ad-3be03e619ac2" 
    }'
```

When you trigger a schedule evaluation, you need to provide the ID of the schedule you want to evaluate. You can **only** evaluate one schedule at a time. For more detailed information about triggering a schedule evaluation, read the [schedules endpoint guide](/help/segmentation/api/schedules.md#trigger).

+++

**Response**

A successful response returns HTTP status 200 with no content.

>[!ENDTABS]

## Enable or disable a schedule

You can enable or disable a schedule using either the Experience Platform UI or API.

>[!BEGINTABS]

>[!TAB UI]

To enable or disable a schedule using the Experience Platform UI, select the ICON next to the schedule. If you want to enable a currently disabled schedule, select **Enable**. If you want to disable a currently enabled schedule, select **Disable**.

IMAGE

>[!TAB API]

To enable or disable a schedule using the Experience Platform API, you'll need to make a PATCH request to the `/schedules` endpoint, providing the ID of the schedule you want to update.

**API format**

```http
PATCH /schedules/{SCHEDULE_ID}
```

**Request**

+++ A sample request to update a schedule

```shell
curl -X PATCH https://platform.adobe.io/data/core/ups/config/schedules/cd585edf-962d-420d-94ad-3be03e619ac2 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '[
        { 
            "op": "replace", 
            "path": "/state", 
            "value": "inactive" 
        }
      ]'
```

When you update your schedule, you need to provide the operation, path, and value for the schedule. If you want to enable a disabled schedule, you'll need to set `value` to `active`. If you want to disable an enabled schedule, you'll need to set `value` to `inactive`. For more detailed information about updating a schedule, read the [schedules endpoint guide](/help/segmentation/api/schedules.md#update).

+++

**Response**

A successful response returns HTTP status 204 with no content.

>[!ENDTABS]


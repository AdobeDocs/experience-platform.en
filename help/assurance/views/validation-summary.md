# Validation Editor view

The Validation Editor lets you quickly and easily manage JavaScript functions to validate events in an Adobe Experience Platform Assurance session. Each function receives the events in an Assurance session. You can write functions to validate your client configuration, event conditions, tests and use cases.

## Get started with the Validation Editor

To use this view, complete the following steps:

1. [Set up Assurance](../set-up.md).
2. In the **Home** view, select **Validation Editor**.

![Validation-Editor-Screen-Shot](https://user-images.githubusercontent.com/6597105/198680074-f548a646-6f2f-4a65-82fd-0f1687d869bf.png)

## Write a validation function

This feature allows you to create, edit, or delete validation functions for your Adobe Experience Platform Assurance sessions.

1. Select **Create a New Validation**.
2. Enter a **name** to identify the validation, then provide a **category** and a **description**.
3. Edit the code in the editor to validate the events for your Assurance session.

Once the function tests are complete, select **Publish** to save your validation.

### Event definition

| Key | Type | Description |
| :--- | :--- | :--- |
| `uuid` | String | Universally unique identifier for the event. |
| `timestamp` | Number | Timestamp from the client when the event was sent to Assurance. |
| `eventNumber` | Number | Used to order when the event was sent. This key is useful when events have the same timestamp. |
| `vendor` | String | Vendor identification string in the reverse domain name format (for example, com.adobe.assurance). |
| `type` | String | Used to denote the type of event. |
| `payload` | Object | Defines the data for the event and contains unique and common properties. Some common properties include `ACPExtensionEventSource` and `ACPExtensionEventType`. |
| `annotations` | Array | An array of annotation objects. |

### Annotation definition

| Key | Type | Description |
| :--- | :--- | :--- |
| `uuid` | String | Universally unique identifier for the annotation. |
| `type` | String | Used to denote the type of annotation and is usually the name of the plugin (for example, analytics). |
| `payload` | Object | Defines the data that should supplement the event. For Adobe Analytics, this is where the post-processed hit data is contained. |

### Validation results

The validation function is expected to return an object that contains the following:

| Key | Type | Description |
| :--- | :--- | :--- |
| `message` | String | The validation message to display in the summary results. |
| `events` | Array | An array of event uuids to be reported as matched or not matched. |
| `links` | Array | An array of `ValidationResultLink` objects to reference documentation and other resources `{( type: 'doc'|'product', url: String )}`  |
| `result` | String | This is the validation result and is expected to be one of the enumerated strings: "matched", "not matched", "unknown" |

## View the validation results

The results of the function are displayed in the results section below the code editor. If the validation result is `unknown` or `not matched` and the `events` array has one or more `uuids`, the events will be highlighted in the timeline with the following colors:

* Green - matched
* Orange - unknown
* Red - not matched

![Timeling-Validation-Highlights-Screen-Shot](https://user-images.githubusercontent.com/6597105/198681412-93d10a5a-3212-4e85-850a-aeaf5caf0521.png)

## Troubleshooting

You can add `console.log()` in your function to print items to the developer console. Alternatively, you can use the message property of the result object to debug messages to the results panel.

If an error occurs in the JavaScript code editor, an error status is displayed along with the reason.

To learn more about validations, please visit the [Adobe Experience Platform Assurance Validations](https://github.com/adobe/griffon-validation-plugins) GitHub. There you will find examples of validations owned by Adobe. See the [wiki](https://github.com/adobe/griffon-validation-plugins/wiki) for more detailed descriptions of validations.

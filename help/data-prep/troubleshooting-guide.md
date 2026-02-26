---
keywords: Experience Platform;home;popular topics;
title: Data Prep Troubleshooting Guide
description: This document provides answers to frequently asked questions about Adobe Experience Platform Data Prep.
exl-id: 810cfb2f-f80a-4aa7-ab3c-beb5de78708e
---
# [!DNL Data Prep] troubleshooting guide

This document provides answers to frequently asked questions about Adobe Experience Platform [!DNL Data Prep], as well as a troubleshooting guide for common errors. For questions and troubleshooting information regarding Experience Platform APIs in general, see the [Adobe Experience Platform API troubleshooting guide](../landing/troubleshooting.md).

## FAQ

The following is a list of frequently asked questions about [!DNL Data Prep] and their answers.

### How are transformation errors resolved?

[!DNL Data Prep] localizes all transformation errors to the column in which they occurred. As a result, that column is nullified and the rest of the row will continue to be processed. These transformation issues are logged as **Warnings**. It is recommended that you review the warnings periodically and adjust the transformation logic to account for the transformation issues. This will increase the quality of the data ingested into Experience Platform. 

If the columns marked as **Required** are nullified due to transformation issues, then the row will not be ingested. When partial data ingestion is enabled, you can set the threshold of such rejections before the entire flow fails.. If the nullified attribute did not impact any schema level validations, the row will continue to be ingested. 

Any rows that are invalid even without any transformation errors, will also be rejected. For example, a data ingestion flow may have a pass through mapping (no transformation logic) to a required field and there is no incoming value for that attribute. This row will be rejected.

### How can I escape special characters in a field?

You can escape special characters in a field by using `${...}`. However, JSON files that contain fields with a period (`.`) are not supported by this mechanism. When interacting with hierarchies, if a child attribute has a period (`.`), you must use a backslash (`\`) to escape special characters. For example, `address` is an object that contains the attribute `street.name`, this can then be referred to as `address.street\.name` instead of `address.street.name`.

### What is the maximum length of calculated fields?

Calculated fields have a maximum length of 4096 characters.

### My ingestion failed due to validation on an attribute, but I have that attribute correctly in my file. What exactly is wrong?

Ensure that the data type for each field matches the type defined in the schema. Additionally, constraints such as "Required", "enum", and "format" must be adhered to.

The data being ingested must conform to the Experience Data Model (XDM) schema defined in Experience Platform. If the attribute does not match the expected type or format specified in the schema, the ingestion will fail.

If the Data Prep functions are being used, then ensure that transformation results in the right attributes. You can review the attributes during the setup process of the sources workflow. During the mapping step, select **[!UICONTROL New field type]** and then select **[!UICONTROL Add calculated field]**. Next, use the calculated field interface to preview each function.

### How can I remove bad data values from streaming or batch ingestion records?

You can use the Data Prep mapping interface to perform column-level filtering by only mapping columns that have required data. You can also use calculated fields to transform the data using the support functions.

Row-level filtering is currently available only for the [Adobe Analytics source connector](../sources/tutorials/ui/create/adobe-applications/analytics.md#row-level-filtering).

After ingestion, you can use data distiller to clean, shape, and manipulate the data using SQL. However, this process will require the deletion of the batch with the bad records, and re-ingesting a new batch created from the result of the SQL.

>[!IMPORTANT]
>
>* Data lake: You can only remove records that have already been ingested by deleting and re-ingesting the batch that the record is in.
>
>* Real-Time Customer Profile: You can overwrite attribute-based records by ingesting new records, but experience event records cannot be removed.
>
>* Identity Service: You cannot remove records outright in Identity Service. You will have to delete the entire profile and the re-upload the profile with the correct records using the Profile delete API.

### What are the best practice for using calculated fields in GIF data?

You can use the Data Prep mapping functions during the mapping step of source data to XDM schema to create a new calculated field.

### When you bring in Adobe Analytics data as a source, is the schema created automatically enabled for profile?

Analytics data is not automatically configured for Profile. After configuring the source connector, you must go into the dataset and the schema and enable them for Profile ingestion.

When you create an Analytics source dataflow in a production sandbox, two dataflows are created:

* A dataflow that does a 13-month backfill of historical report suite data into data lake. This dataflow ends when the backfill is complete.
* A dataflow that sends live data to data lake and to Profile. This dataflow runs continuously.

### How can I lowercase one value inside a map object using Data Prep functions?

You can retrieve the value using the `map_get_values` function and then make it lowercase using the lower function:

```shell
lower(map_get_values(mapObject, 'keyName'))
```

You may use the same function to lowercase a map object. However, you cannot loop through an entire map and make every item lowercase.

### Can I use Data Prep functions in a nested fashion?

Yes, you can use one Data Prep function within another function to solve for complex data preparation capabilities during data ingestion.

For example, if you want to define a field as null based on a specific condition then you can use the "iif" function to check for that field. If the function returns `true` then you may use "nullify()", and if it returns `false`, then you may use the respective field.

If marketing_type was the field then you can use ".equals" to check the value in the marketing_type field and this can be nested within an "iif" function. If it returns `true`, then you may use the "nullify()" function as shown below:

```shell
iif(marketing_type.equals("phyMail"), nullify(), marketing_type)
```

The following outlines examples of how you can nest Data Prep functions using iif, equals, and nullify:

| Function | Description | Parameters | Syntax | Expression | Sample output |
| --- | --- | --- | --- | --- | --- |
| iif | Evaluates a given boolean expression and returns the specified value based on the result. | <ul><li>EXPRESSION: **Required** The boolean expression that is being evaluated.</li><li>TRUE_VALUE: **Required** The value that is returned if the expression evaluates to true.</li><li>FALSE_VALUE: **Required** The value that is returned if the expression evaluates to false.</li></ul> | iif(EXPRESSION, TRUE_VALUE, FALSE_VALUE) | iif("s".equalsIgnoreCase("S"), "True", "False") | "True" |
| equals | Compares two strings to confirm if they are equal. This function is case sensitive. | <ul><li>STRING1: **Required** The first string you want to compare.</li><li>STRING2: **Required** The second string you want to compare. | STRING1.​equals(​STRING2) | "string1".​equals​("STRING1") | false |
| nullify | Sets the value of the attribute to null. This should be used when you do not want to copy the field to the target schema. | | nullify() | nullify() | null |

{style="table-layout:auto"}

The following is an example of how the functions can be nested, assuming that the field being evaluated is "marketing_type".

```shell
iif(marketing_type.equals("phyMail"), nullify(), marketing_type)
```

Next, given that you have the following three fields:

* marketing_type: (email, phyMail, push, sms, phone)
* total_consents: number range from 4000 to 5500
* date: from feb to march of 2024

You can use and nest the three functions listed above to manipulate the three fields:

* iif(marketing_type.equals("email"), nullify(), iif(marketing_type.equals("push"), "push-notification", marketing_type))
* iif(marketing_type.equals("phyMail"), nullify(), iif(marketing_type.equals("sms"), "text-message", marketing_type))
* iif(total_consents > 5000, iif(marketing_type.equals("phone"), nullify(), marketing_type), "insufficient-consents")
* iif(date.equals("3/21/24"), iif(marketing_type.equals("push"), nullify(), marketing_type), "not-March")
* iif(total_consents < 4500, iif(marketing_type.equals("sms"), "low-consent-sms", marketing_type), "high-consents")
* iif(marketing_type.equals("email"), iif(total_consents > 5000, nullify(), "email-low-consents"), marketing_type)
* iif(marketing_type.equals("push"), iif(total_consents < 4500, "low-consent-push", nullify()), marketing_type)
* iif(total_consents >= 5500, iif(marketing_type.equals("phyMail"), nullify(), "high-consents"), marketing_type)
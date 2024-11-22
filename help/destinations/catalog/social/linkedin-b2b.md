---
title: (Companies) LinkedIn connection
description: Use this destination to activate your account audiences for Account-Based Marketing (ABM) use cases. Activate profiles for your LinkedIn campaigns for audience targeting, personalization, and suppression, based on hashed emails.
badgeB2B: label="B2B Edition" type="Informative" url=" https://experienceleague.adobe.com/docs/experience-platform/rtcdp/intro/rtcdp-intro/overview.html?lang=en#rtcdp-editions newtab=true"
badgeB2P: label="B2P Edition" type="Positive" url=" https://experienceleague.adobe.com/docs/experience-platform/rtcdp/intro/rtcdp-intro/overview.html?lang=en#rtcdp-editions newtab=true"
---
# (Companies) LinkedIn Match Audiences connection {#companies-linkedin}

>[!AVAILABILITY]
>
>The functionality to activate account audiences to the (Companies) LinkedIn destination is available for companies purchasing the [Business-to-Business](/help/rtcdp/overview.md#rtcdp-b2b) and [Business-to-Person](/help/rtcdp/overview.md#rtcdp-b2p) editions of Real-Time Customer Data Platform.

Use this destination to activate your [account audiences](/help/segmentation/ui/account-audiences.md) for Account-Based Marketing (ABM) use cases. Advertise to relevant personas and roles in your target accounts via the **[!UICONTROL (Companies) LinkedIn]** business-to-business destination. 

>[!TIP]
>
>For individual-level (or business-to-consumer) use cases, Adobe recommends that you use the [LinkedIn Matched Audience](/help/destinations/catalog/social/linkedin.md) destination. 

![LinkedIn account destination displayed in the Experience Platform UI.](/help/destinations/assets/catalog/social/linkedin-b2b/linkedin-b2b-destination.png)

## Supported audiences {#supported-audiences}

This section describes which type of audiences you can export to this destination.

| Audience origin | Supported | Description | 
---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| Custom uploads | X | Audiences [imported](../../../segmentation/ui/overview.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-and-frequency} 

Refer to the table below for information about the destination export type and frequency.

| Item         | Type      | Notes                       |
|--------------|-----------|---------------------------|
| Export Type  | Audience export | All audience members will be exported with key identifiers like name, phone number, and more. |
| Frequency    | Streaming  | "Always-on" API-based connections. Updates are sent downstream immediately after profile changes. |

{style="table-layout:auto"}

## Prerequisites {#prerequisites}

Make sure you meet the prerequisites below in order to export account audiences to LinkedIn:

### LinkedIn account prerequisites {#LinkedIn-account-prerequisites}

Before you can use the [!UICONTROL (Companies) LinkedIn Matched Audience] destination, make sure your [!DNL LinkedIn Campaign Manager] account has the [!DNL Creative Manager] permission level or higher.

To learn how to edit your [!DNL LinkedIn Campaign Manager] user permissions, see [Add, Edit, and Remove User Permissions on Advertising Accounts](https://www.linkedin.com/help/lms/answer/5753) in the LinkedIn documentation.

### ID matching requirements {#id-matching-requirements}

[!DNL LinkedIn Matched Audiences] requires that no personally identifiable information (PII) is sent in clear. Therefore, the audiences activated to the destination can be keyed off *hashed* identifiers, such as email addresses or mobile device IDs.

Depending on the type of IDs that you ingest into Adobe Experience Platform, you must adhere to their corresponding requirements.

### Email hashing requirements {#email-hashing-requirements}

You can hash email addresses before ingesting them into Adobe Experience Platform, or use email addresses in clear in Experience Platform, and have [!DNL Platform] hash them on activation.

To learn about ingesting email addresses in Experience Platform, see the [batch ingestion overview](/help/ingestion/batch-ingestion/overview.md) and the [streaming ingestion overview](/help/ingestion/streaming-ingestion/overview.md).

If you select to hash the email addresses yourself, make sure to comply with the following requirements:

* Trim all leading and trailing spaces from the email string. For example: `johndoe@example.com`, not `<space>johndoe@example.com<space>`;
* When hashing the email strings, make sure to hash the lowercase string;
  * Example: `example@email.com`, not `EXAMPLE@EMAIL.COM`;
* Ensure that the hashed string is all lowercase
  * Example: `55e79200c1635b37ad31a378c39feb12f120f116625093a19bc32fff15041149`, not `55E79200C1635B37AD31A378C39FEB12F120F116625093A19bC32FFF15041149`;
* Do not salt the string.

>[!NOTE]
>
>Data from unhashed namespaces is automatically hashed by [!DNL Platform] upon activation.
> Attribute source data is not automatically hashed.
> 
>In the [Identity Mapping](../../ui/activate-segment-streaming-destinations.md#mapping) step, when your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.
> 
> The **[!UICONTROL Apply transformation]** option is only displayed when you select attributes as source fields. It is not displayed when you choose namespaces.

![Identity mapping transformation](../../assets/ui/activate-destinations/identity-mapping-transformation.png)

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

1. Find the [!DNL (Companies) LinkedIn Matched Audiences] destination in the destination catalog and select **[!UICONTROL Set Up]**.
2. Select **[!UICONTROL Connect to destination]**. 
  ![Authenticate to LinkedIn](/help/destinations/assets/catalog/social/linkedin-b2b/authenticate-linkedin-destination.png)
3. Enter your LinkedIn credentials and select **Log In**. 

After completing the sign-in process with LinkedIn, you can proceed to the next step.

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

* **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
* **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
* **[!UICONTROL Account ID]**: Your [!DNL LinkedIn Campaign Manager Account ID]. You can find this ID in your [!DNL LinkedIn Campaign Manager] account.

You are now ready to activate account audiences to LinkedIn.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate account audiences](/help/destinations/ui/activate-account-audiences.md) for instructions on activating account audiences to this destination.

## Required mapping pairs in the mapping step when activating account audiences to the **[!UICONTROL (Companies) LinkedIn Matched Audiences]** destination {#required-mappings}

When activating account audiences to the **[!UICONTROL (Companies) LinkedIn Matched Audiences]** destination, note that the following two mapping pairs are mandatory to successfully export data:

![LinkedIn mapping required fields.](/help/destinations/assets/ui/activate-account-audiences/linkedin-mapping-required-fields.png)

|Source field | Target field |
|---------|----------|
| `accountName` | `companyName` |
| `accountKey.sourceKey`  | `primaryId` (select this field in the **[!UICONTROL Select Identity namespace]** view, when selecting the **[!UICONTROL Target Field]**). <br> ![Select identity namespace highlighted in the workflow to activate account audiences to destinations.](/help/destinations/assets/ui/activate-account-audiences/identity-namespace-highlighted.png "Select identity namespace highlighted in the workflow to activate account audiences to destinations."){width="100" zoomable="yes"} |

{style="table-layout:auto"}

## Exported data {#exported-data}

A successful activation means that a [!DNL LinkedIn] custom audience is created programmatically in [[!DNL LinkedIn Campaign Manager]](https://www.linkedin.com/campaignmanager/login). Audience membership is adjusted as users are qualified or disqualified for the activated audiences.
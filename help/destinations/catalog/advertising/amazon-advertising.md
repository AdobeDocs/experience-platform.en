# Amazon Ads connection

## Overview

Amazon Ads offers a range of options to help you achieve your advertising goals to registered sellers, vendors, book vendors, Kindle Direct Publishing (KDP) authors, app developers, and/or agencies.

The Amazon Ads integration with Adobe Experience Platform provides turn-key integration to Amazon Ads products, including the Amazon DSP (ADSP). Using the Amazon Ads destination in Adobe Experience Platform, users are able to define advertiser audiences for targeting and activation on the Amazon DSP.


## Use cases

To help you better understand how and when you should use the Amazon Advertising destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

**For Activation and Targeting Use-cases:**
This integration with Amazon DSP allows Amazon Ads advertisers to pass advertiser CDP segments from Adobe Experience Platform to Amazon’s DSP to create advertiser audiences for advertising targeting. Audiences may be selected within the Amazon DSP for positive targeting, as well as negative targeting (suppression). Additionally, using signals generated through Amazon Marketing Cloud, advertisers can optimize their advertiser audiences which will synchronize audience changes with Amazon DSP.


## Prerequisites

*In order to use the Amazon Advertising connection with Adobe Experience Platform, users must first have access to an Amazon DSP Advertiser Account.  To provision these instances, please visit the following page on the Amazon Advertising website:*

* *[Get started with Amazon DSP](https://advertising.amazon.com/solutions/products/amazon-dsp?ref_=a20m_us_hnav_p_dsp_adtech)*

## Supported identities

Amazon Advertising connection supports the activation of identities described in the table below. Learn more about [identities](https://experienceleague.adobe.com/docs/experience-platform/identity/namespaces.html?lang=en). For more details on Amazon Advertising’s supported identities, visit this [page](https://advertising.amazon.com/dsp/help/ss/en/audiences#GA6BC9BW52YFXBNE).

|Target Identity	|Description	|Considerations	|
|---	|---	|---	|
|phone_sha256	|Phone numbers hashed with the SHA256 algorithm	|Both plain text and SHA256 hashed phone numbers are supported by Adobe Experience Platform. When your source field contains unhashed attributes, check the **Apply transformation** option, to have Platform automatically hash the data on activation.	|
|email_lc_sha256	|Email addresses hashed with the SHA256 algorithm	|Both plain text and SHA256 hashed email addresses are supported by Adobe Experience Platform. When your source field contains unhashed attributes, check the **Apply transformation** option, to have Platform automatically hash the data on activation.	|

## Export type and frequency


Refer to the table below for information about the destination export type and frequency.

|Item	|Type	|Notes	|
|---	|---	|---	|
|Export type	|**Segment export**	|You are exporting all members of a segment (audience) with the identifiers (name, phone number, or others) used in the *YourDestination* destination.	|
|Export frequency	|**Streaming**	|Streaming destinations are “always on” API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](https://experienceleague.adobe.com/docs/experience-platform/destinations/destination-types.html?lang=en#streaming-destinations).	|

## Connect to the destination

IMPORTANT
To connect to the destination, you need the **Manage Destinations** [access control permission](https://experienceleague.adobe.com/docs/experience-platform/access-control/home.html?lang=en#permissions). Read the [access control overview](https://experienceleague.adobe.com/docs/experience-platform/access-control/ui/overview.html?lang=en) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/connect-destination.html?lang=en). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination

To connect to the Amazon Advertising destination, you will first click to establish a connection via OAuth2. After clicking 
 **Connect to destination,** you will be taken to the Amazon Advertising connection interface where you will first select the advertiser accounts you wish to connect to.  Upon connection, you will be redirected back to Adobe Experience Platform with a new connection, provided with the ID of the Advertiser Account you selected. Select the appropriate Advertiser Account on the destination configuration screen to proceed.


### Fill in destination details

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

* **Name**: A name by which you will recognize this destination in the future.
* **Description**: A description that will help you identify this destination in the future.
* **Amazon Ads Advertiser Id**: Select the ID for the target Amazon Advertising account used for the destination. 

Note: once selecting this Amazon Ads Advertiser Id, you will need to create a new destination to change this. If you re-authenticate the OAuth credentials and select a new Advertiser Id, your changes will not apply.

![Configure new destination](../../assets/catalog/advertising/amazon_ads_image_1.png)
### Enable alerts

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, read the guide on [subscribing to destinations alerts using the UI](https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/alerts.html?lang=en).

When you are finished providing details for your destination connection, select **Next**.

## Activate segments to this destination

IMPORTANT
To activate data, you need the **Manage Destinations**, **Activate Destinations**, **View Profiles**, and **View Segments** [access control permissions](https://experienceleague.adobe.com/docs/experience-platform/access-control/home.html?lang=en#permissions). Read the [access control overview](https://experienceleague.adobe.com/docs/experience-platform/access-control/ui/overview.html?lang=en) or contact your product administrator to obtain the required permissions.

Read [Activate profiles and segments to streaming segment export destinations](https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/activate/activate-segment-streaming-destinations.html?lang=en) for instructions on activating audience segments to this destination.

### Map attributes and identities

The Amazon Advertising connection supports hashed email address and hashed phone numbers for identity matching purposes.  The screenshot below provides an example matching that is compatible with the Amazon Ads connection:

![Adobe to Amazon Ads mapping](../../assets/catalog/advertising/amazon_ads_image_2.png)

When mapping email, select the Lower case, SHA256 source field. (Email_LC_SHA256)  
When mapping phone, select the SHA256 source field (Phone_SHA256)

It is strongly recommended that you map as many fields as you have available. If only one attribute is available, you may map only the available fields.  The Amazon Ads destination will utilize all mapped fields for mapping purposes, yielding higher match rates if more fields are provided. Additionally, Hashed Address fields are supported, however you must provide the correctly formatted address strings in a SHA target custom attributes. For more information about the accepted identifiers, visit the [Amazon Ads hashed audience help page](https://advertising.amazon.com/dsp/help/ss/en/audiences#GA6BC9BW52YFXBNE).

## Exported data / Validate data export

Once  your audience has been uploaded, you may validate your audience has been created and uploaded correctly using the following steps:

**For Amazon DSP:** 

Navigate to your Advertiser ID → Audiences → Advertiser Audiences. If your audience was created successfully and meets the minimum number of audience members, you will see a Status of `Active`.  Additional details about your audience size and reach can be found in the Forecasted Reach panel on the right side of the DSP user interface. 

![Amazon DSP audience creation validation](../../assets/catalog/advertising/amazon_ads_image_3.png)


## Data usage and governance

All Adobe Experience Platform destinations are compliant with data usage policies when handling your data. For detailed information on how Adobe Experience Platform enforces data governance, read the [Data Governance overview](https://experienceleague.adobe.com/docs/experience-platform/data-governance/home.html?lang=en).

## Additional resources

For additional help documentation, visit the following Amazon Advertising help resources:


* *[Amazon DSP Help Center](https://advertising.amazon.com/dsp/help/ss/en/audiences#/)*


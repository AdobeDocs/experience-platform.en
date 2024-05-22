---
keywords: Experience Platform;home;popular topics;destinations;connectors;destination connectors;destinations sdk;sdk;SDK
title: Merkury Enterprise Identity Resolution Documentation self-service template for the UI
description: Learn how to create a Merkury Enterprise Identity Resolution destionation connection using the Adobe Experience Platform UI.
hide: true
hidefromtoc: true
---
# Merkury Enterprise Connections Destination

Clients of Adobe Experience Platform use the Merkury Enterprise
Connections Destination to securely deliver media audiences to Merkury.
Merkury provides marketers easy matching and delivery of person-based
audiences to Merkury's 80+ premium addressable TV/CTV, publisher, and
ad-tech connections. Merkury expands on Adobe's native destination
endpoints to provide marketers more options to reach their customers and
prospects with cookie-less addressable media. Merkury is powered by a
comprehensive US adult consumer identity graph of 268+ million people.
The Merkury identity graph provides an average of 15% improvement in
match rate when activating media audiences using Merkury.

![A diagram of a customer data platform Description automatically
generated](./merkury-connections/media/image1.png){width="6.5in"
height="3.946527777777778in"}

Follow these steps to create an Merkury Connections destination
connection and dataflow using the Adobe Experience Platform user
interface.![A screenshot of a computer Description automatically
generated](./merkury-connections/media/image2.png){width="6.5in"
height="1.7229166666666667in"}

## Use Cases

Clients of Adobe Experience Platform use the Merkury Enterprise
Connections Destination to securely deliver media audiences to Merkury.
Merkury provides marketers easy matching and delivery of person-based
audiences to Merkury's 80+ premium addressable TV/CTV, publisher, and
ad-tech connections. Merkury expands on Adobe's native destination
endpoints to provide marketers more options to reach their customers and
prospects with cookie-less addressable media. Merkury is powered by a
comprehensive US adult consumer identity graph of 268+ million people.
The Merkury identity graph provides an average of 15% improvement in
match rate when activating media audiences using Merkury.

## Prerequisites

[!IMPORTANT]

-   To connect to the destination, you need the **View
    Destinations** and **Manage Destinations**, **Activate
    Destinations**, **View Profiles**, and **View Segments** [[access
    control
    permissions]{.underline}](https://experienceleague.adobe.com/en/docs/experience-platform/access-control/home#permissions).
    Read the [[access control
    overview]{.underline}](https://experienceleague.adobe.com/en/docs/experience-platform/access-control/ui/overview) or
    contact your product administrator to obtain the required
    permissions.

-   To export *identities*, you need the **View Identity
    Graph** [[access control
    permission]{.underline}](https://experienceleague.adobe.com/en/docs/experience-platform/access-control/home#permissions).\
    ![Select identity namespace highlighted in the workflow to activate
    audiences to
    destinations.](./merkury-connections/media/image3.png){width="1.0416666666666667in"
    height="0.5763888888888888in"}

## Supported audiences

This section describes which type of audiences you can export to this
destination.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Audience     **Supported**   **Description
  origin**                       
  -------------- --------------- --------------------------------------------------------------------------------------------------------------------------------------------------
  Segmentation   ✓               Audiences generated through the Experience Platform [[Segmentation
  Service                        Service]{.underline}](https://experienceleague.adobe.com/en/docs/experience-platform/segmentation/home).

  Custom uploads x               Audiences [[imported]{.underline}](https://experienceleague.adobe.com/en/docs/experience-platform/segmentation/ui/overview#import-audience) into
                                 Experience Platform from CSV files.
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Export type and frequency

Refer to the table below for information about the destination export
type and frequency.

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Item**    **Type**            **Notes**
  ----------- ------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Export type **Profile-based**   You are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen in the select
                                  profile attributes screen of the [[destination activation
                                  workflow]{.underline}](https://experienceleague.adobe.com/en/docs/experience-platform/destinations/ui/activate/activate-batch-profile-destinations#select-attributes).

  Export      **Batch**           Batch destinations export files to downstream platforms in increments of three, six, eight, twelve, or twenty-four hours. Read more about [[batch file-based
  frequency                       destinations]{.underline}](https://experienceleague.adobe.com/en/docs/experience-platform/destinations/destination-types#file-based).
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Connect to the destination

[!IMPORTANT]

To connect to the destination, you need the **View
Destinations** and **Manage and Activate Dataset Destinations** [[access
control
permissions]{.underline}](https://experienceleague.adobe.com/en/docs/experience-platform/access-control/home#permissions).
Read the [[access control
overview]{.underline}](https://experienceleague.adobe.com/en/docs/experience-platform/access-control/ui/overview) or
contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in
the [[destination configuration
tutorial]{.underline}](https://experienceleague.adobe.com/en/docs/experience-platform/destinations/ui/connect-destination).
In the destination configuration workflow, fill in the fields listed in
the two sections below.

### Authenticate to destination

To authenticate to the destination, fill in the required fields and
select **Connect to destination**.

To access your bucket on Experience Platform, you need to provide valid
values for the following credentials:

  ------------------------------------------------------------------------------
  **Credential**   **Description**
  ---------------- -------------------------------------------------------------
  Access key       The access key ID for your bucket. You can retrieve this
                   value from the Merkury team.

  Secret key       The secret key ID for your bucket. You can retrieve this
                   value from the Merkury team.

  Bucket name      This is your bucket where files will be shared. You can
                   retrieve this value from the Merkury team.
  ------------------------------------------------------------------------------

### New Account

To define a new Merkury Managed S3 location:

![A screenshot of a computer Description automatically
generated](./merkury-connections/media/image4.png){width="6.5in"
height="3.509027777777778in"}

### Existing Account

Accounts already defined using the Merkury Enterprise Connections
destination appear in a list pop-up. When selected, you can see details
on the account in the right rail. View the example from the UI, when you
navigate to **Destinations** \> **Accounts**;

![A screenshot of a computer Description automatically
generated](./merkury-connections/media/image5.png){width="7.260470253718285in"
height="1.5785312773403324in"}

### **Fill in destination details

To configure details for the destination, fill in the required and
optional fields below. An asterisk next to a field in the UI indicates
that the field is required.

![A screenshot of a computer Description automatically
generated](./merkury-connections/media/image6.png){width="6.5in"
height="3.877083333333333in"}

-   **Name (Required)** - The name the destination will be saved under

-   **Description** - Short explanation of the destination's purpose

-   **Bucket Name (Required)** - Name of the Amazon S3 bucket set up on
    S3

-   **Folder Path (Required)** - If subdirectories in a bucket are used
    a path must be defined, or '/' to reference the root path.

-   **File Type** - Select the format Experience Platform should use for
    the exported files. Currently, the only file type Acxiom processing
    will be expecting is CSV

![A white background with black text Description automatically
generated](./merkury-connections/media/image7.png){width="6.5in"
height="1.336111111111111in"}

![A screenshot of a computer Description automatically
generated](./merkury-connections/media/image8.png){width="4.875in"
height="7.791666666666667in"}

## **Enable alerts

You can enable alerts to receive notifications on the status of the
dataflow to your destination. Select an alert from the list to subscribe
to receive notifications on the status of your dataflow. For more
information on alerts, see the guide on [subscribing to destinations
alerts using the
UI](https://experienceleague.adobe.com/en/docs/experience-platform/destinations/ui/alerts).

When you are finished providing details for your destination connection,
select **Next**.

## Activate audiences to this destination

![A screenshot of a computer screen Description automatically
generated](./merkury-connections/media/image9.png){width="7.04362532808399in"
height="2.709839238845144in"}

Read [Activate audience data to batch profile export
destinations](https://experienceleague.adobe.com/en/docs/experience-platform/destinations/ui/activate/activate-batch-profile-destinations) for
instructions on activating audiences to this destination.

## Mapping suggestions

The correct processing of files on the Merkury side requires name and
address elements. While not all elements are required, providing as much
as possible will aid in successful matching.

Mapping suggestions are provided in the table below listing attributes
on your destination side that are used by Merkury processing that
customers can map profile attributes to. Treat these elements as
suggestions as not all elements are required, and the source values will
depend on the needs of the account.

![A screenshot of a computer Description automatically
generated](./merkury-connections/media/image10.png){width="6.875977690288714in"
height="3.510715223097113in"}

## Validate data export

To verify if data has been exported successfully, check your Amazon S3
Storage bucket, and make sure that the exported files contain the
expected profile populations.

## Next steps

By following this tutorial, you have successfully created a dataflow to
export profile data from Experience Platform to your Merkury managed S3
location. Next, you need to contact your Merkury representative with the
name of the account, file names, and the bucket path so that processing
can set up.

## Data usage and governance

All Adobe Experience Platform destinations are compliant with data usage
policies when handling your data. For detailed information on how Adobe
Experience Platform enforces data governance, read the [Data Governance
overview](https://experienceleague.adobe.com/en/docs/experience-platform/data-governance/home).

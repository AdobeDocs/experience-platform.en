---
title: Marketo Engage Destination Connector
description: Marketo Engage is the only end-to-end customer experience management (CXM) solution for marketing, advertising, analytics, and commerce. It lets you automate and manage activities from CRM lead management and customer engagement to account-based marketing and revenue attribution.
---

# (Beta) Marketo Engage Destination Connector {#beta-marketo-engage-destination-connector}

>[!IMPORTANT]
>
>The Marketo Engage Destination Connector in Adobe Experience Platform is currently in Beta. The documentation and functionality are subject to change.

## Overview {#overview}

Marketo Engage is the only end-to-end customer experience management (CXM) solution for marketing, advertising, analytics, and commerce. It lets you automate and manage activities from CRM lead management and customer engagement to account-based marketing and revenue attribution.

The segment connector enables marketers to push segments created in Adobe Experience Platform to Marketo where they will appear as static lists.

## Supported Identities {#supported-identities}

<table> 
 <colgroup> 
  <col> 
  <col> 
 </colgroup> 
 <tbody> 
  <tr> 
   <th>Target Identity</th> 
   <th>Description</th> 
  </tr> 
  <tr> 
   <td>Email Address</td> 
   <td>A namespace that represents an email address. This type of namespace is often associated to a single person and therefore can be used to identify that person across different channels.</td> 
  </tr> 
  <tr> 
   <td>ECID Cookie Identifier</td> 
   <td>A namespace that represents ECID. This namespace can also be referred to by the following aliases: "Adobe Marketing Cloud ID", "Adobe Experience Cloud ID", "Adobe Experience Platform ID".</td> 
  </tr> 
 </tbody> 
</table>

## Export Type {#export-type}

Segment Export - you are exporting all members of a segment (audience) with the identifiers (name, phone number, or others) used in the YOURDESTINATION destination.

## Set Up {#set-up}

Instructions on how to set up the destination [can be found here](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/smart-lists-and-static-lists/static-lists/push-an-adobe-experience-cloud-segment-to-a-marketo-static-list.html?lang=en).

## Data Usage and Governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](https://experienceleague.adobe.com/docs/experience-platform/data-governance/home.html).

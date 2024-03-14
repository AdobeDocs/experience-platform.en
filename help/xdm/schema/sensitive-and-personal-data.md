---
title: Sensitive and Personal Information in XDM
description: Learn about key considerations regarding sensitive personal information (SPI) and personally identifiable information (PII) in Experience Data Model (XDM).
exl-id: 92a8b6ad-3c45-4772-8178-60f857ab13e2
---
# Sensitive and personal information in XDM

Experience Data Model (XDM) provides standard data structures for use in Adobe Experience Platform, allowing you to collect data on customer experiences. This data can include sensitive personal information (SPI) and personally identifiable information (PII) such as a customer's email address, name, account ID, and other data fields.

Organizational rules and legal privacy regulations like the General Data Protection Regulation (GDPR) enforce restrictions on how SPI and PII can be collected, stored, used, and shared. As such, it is important to consider which fields represent sensitive or personal information in your data model and ensure that your operations fall within organizational and legal guidelines.

This document covers key considerations regarding sensitive and personal data in XDM.

## Determining which fields contain sensitive or personal data

What constitutes SPI and PII is very context-specific, and it is therefore up to you to understand your data model, business operations, and applicable regulations in order to determine which schema fields represent sensitive or personal data.

For example, the legal jurisdiction of your customers has a direct effect on what information is considered sensitive. The GDPR provides robust definitions for SPI and PII, but customers outside of the European Economic Area (EEA) may be subject to different definitions and restrictions.

## Handling sensitive and personal data

Similar to the definitions for sensitive and personal data themselves, the restrictions for handling this data are also context-specific.

Customer consent is often a critical factor in terms of what data can be collected and processed, and for what purposes. Depending on the legal jurisdiction that your customers are under, explicit consent may be required in order for their sensitive and personal data to be collected. Even in cases where explicit consent is not required, data handling restrictions are still applicable depending on what the privacy notice says to the customer.

Please consult your legal team to determine how sensitive and personal data should be handled for your business use cases.

## Restricting the use of sensitive and personal data

XDM provides a variety of standard field groups and data types to describe relevant, commonly used data structures to power customer experiences. If a recommended standard resource contains restricted fields that you do not want to include in your schemas, however, you do not have to use that resource.

Platform allows you to define your own custom field groups and data types, giving you full control over how your data is structured if any available standard resources do not meet your needs. Refer to the following documentation for more information on how to define these custom resources:

* [Create a custom field group](../ui/resources/field-groups.md#create)
* [Create a custom data type](../ui/resources/data-types.md#create)

<!-- (To include once features are available)
* Marking fields as sensitive
* Remove fields from standard field groups pre-ingestion
* Deprecate fields post-ingestion
-->

>[!IMPORTANT]
>
>SPI and PII should only be saved into the [XDM Individual Profile](../classes/individual-profile.md) and [XDM ExperienceEvent](../classes/experienceevent.md) classes. As best practice for data deletion and privacy and governance purposes, do not save SPI and PII in any other custom or standard XDM classes.

## Next steps

This document covered key considerations regarding sensitive and personal data in XDM. For more information on how to model your schemas to best meet your business use cases, refer to the guide on [best practices for data modeling](./best-practices.md).

For more information data governance and privacy capabilities in Experience Platform, see the overview on [governance, privacy, and security](../../landing/governance-privacy-security/overview.md).

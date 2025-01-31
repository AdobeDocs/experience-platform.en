---
title: Healthcare Data Model V2
description: Learn about some common healthcare use cases and the best classes, related field groups, and datatypes to use.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
exl-id: a796b58b-b36f-4277-870b-0d3939af8061
---
# [!UICONTROL Healthcare] Data Model V2

## Field groups and classes {#field-groups}

The following table outlines the recommended classes and schema field groups for several common healthcare use cases.

| Use case | Field groups and compatible classes |
| --- | --- |
| **Create/update patient**: When a patient arrives at the hospital front desk, a patient record is established, including demographic details like an identifier (optional), the patient name, their date of birth, their gender, and their address. This serves as a vital component of Healthcare IT. | <ul><li>**[XDM Individual Profiles](../../classes/individual-profile.md)**:<ul><li>[Patient](./field-groups/patient.md)</li></ul></li></ul> |
| **Vaccination**: Facilitating the vaccination process, managing patient immunization records, and integrating EMRs with Vaccine Management Systems. | <ul><li>**[XDM ExperienceEvent](../../classes/experienceevent.md)**:<ul><li>[Immunization](./field-groups/immunization.md)</li></ul></li><li>**[XDM Individual Profile](../../classes/individual-profile.md)**:<ul><li>[Medication Dispense](./field-groups/medication-dispense.md)</li><li>[Medication Request](./field-groups/medication-request.md)</li><li>[Patient](./field-groups/patient.md)</li></ul></li><li>**[Location](./classes/location.md)**:<ul><li>[Location](./field-groups/location.md)</li></ul><li>**[Medication](../../classes/medication.md)**:<ul><li>[Medication](./field-groups/medication.md)</li><li>[Medication Dispense](./field-groups/medication-dispense.md)</li><li>[Medication Request](./field-groups/medication-request.md)</li></ul></li><li>**[Provider](../../classes/provider.md)**:<ul><li>[Medication Dispense](./field-groups/medication-dispense.md)</li><li>[Medication Request](./field-groups/medication-request.md)</li></ul></li></ul> |
| **Post-care adherence**: Motivating patients and caregivers to complete their treatment plans and reduce remittance rates. | <ul><li>**[XDM Individual Profile](../../classes/individual-profile.md)**:<ul><li>[Care Plan](./field-groups/care-plan.md)</li><li>[Goal](./field-groups/goal.md)</li><li>[Patient](./field-groups/patient.md)</li></ul></li><li>**[Location](./classes/location.md)**:<ul><li>[Location](./field-groups/location.md)</li></ul><li>**[Provider](../../classes/provider.md)**:<ul><li>[Goal](./field-groups/goal.md)</li></ul></li></ul> |
| **Consumer experience for insurance**: Improve digital acquisition and experiences among consumers shopping for insurance. Examples include: <li> Understanding consumer behaviour to send promotional emails or targeted third-party ads to people accessing pages containing general information (such as plans, plan names/tiers, Medicaid, or wellness programs)</li><li> Sending vaccine-related information on heart heatlh to create brand awarness or requests to schedule vaccines to people searching for heart health and vaccine information. </li> | <ul><li>**[XDM Individual Profile](../../classes/individual-profile.md)**:<ul><li>[Account](./field-groups/account.md)</li><li>[Medication Dispense](./field-groups/medication-dispense.md)</li><li>[Medication Request](./field-groups/medication-request.md)</li><li>[Patient](./field-groups/patient.md)</li></ul></li><li>**[Location](./classes/location.md)**:<ul><li>[Location](./field-groups/location.md)</li></ul><li>**[Medication](../../classes/medication.md)**:<ul><li>[Medication](./field-groups/medication.md)</li><li>[Medication Dispense](./field-groups/medication-dispense.md)</li><li>[Medication Request](./field-groups/medication-request.md)</li></ul></li><li>**[Provider](../../classes/provider.md)**:<ul><li>[Account](./field-groups/account.md)</li><li>[Medication Dispense](./field-groups/medication-dispense.md)</li><li>[Medication Request](./field-groups/medication-request.md)</li></ul><li>**[Plan](../../classes/plan.md)**:<ul><li>[Goal](./field-groups/coverage.md)</li></ul></li></ul> |
| **Enhanced provider experience**: Using provider data from the EMR system to suggest alternative providers based on appointment availability, location, and specialty. <br> <br>Improving provider searches to show results with desired availability, verifying that the provider selected is part of the payor network, and providing cost estimates. | <ul><li>**[XDM Individual Profiles](../../classes/individual-profile.md)**:<ul><li>[Appointment](./field-groups/appointment.md)</li><li>[Organization](./field-groups/organization.md)</li><li>[Patient](./field-groups/patient.md)</li><li>[Practitioner](./field-groups/practioner.md)</li><li>[Schedule](./field-groups/schedule.md)</li></ul></li><li>**[Location](./classes/location.md)**:<ul><li>[Location](./field-groups/location.md)</li></ul><li>**[Provider](../../classes/provider.md)**:<ul><li>[Appointment](./field-groups/appointment.md)</li><li>[Organization](./field-groups/organization.md)</li><li>[Practitioner](./field-groups/practioner.md)</li><li>[Schedule](./field-groups/schedule.md)</li></ul></li></ul> |

{style="table-layout:fixed"}

## Data types {#data-types}

The following table outlines the data types created as per the [!DNL HL7 FHIR Release 5] specifications.

| Name | Description | 
| --- | --- |
| [[!UICONTROL Address]](./data-types/address.md) | Describes an address expressed using postal conventions (as opposed to GPS or other location definition formats). |
| [[!UICONTROL Annotation]](./data-types/annotation.md) | A text node with attribution to the author. |
| [[!UICONTROL Availability]](./data-types/availability.md) | Availability data for an item. |
| [[!UICONTROL Codeable Concept]](./data-types/codeable-concept.md) | A reference from one resource to another. |
| [[!UICONTROL Codeable Reference]](./data-types/codeable-reference.md) | A reference to a resource or a concept. |
| [[!UICONTROL Coding]](./data-types/coding.md) | A reference to a code defined by a terminology system. |
| [[!UICONTROL Contact Point]](./data-types/contact-point.md) | Contact details for a person. |
| [[!UICONTROL Dosage]](./data-types/dosage.md) | How the medication is/was taken or should be taken. |
| [[!UICONTROL Duration]](./data-types/duration.md) | A length of time. |
| [[!UICONTROL Extended Contact Details]](./data-types/extended-contact-detail.md) | An extended contact's information. |
| [[!UICONTROL Human Name]](./data-types/human-name.md) | Information about the name of a human or other living entity. |
| [[!UICONTROL Identifier]](./data-types/identifier.md) | An identifier intended for computation. |
| [[!UICONTROL Money]](./data-types/money.md) | An amount of economic utility in some recognized currency. |
| [[!UICONTROL Period]](./data-types/period.md) | A time period defined by a start and end date/time. |
| [[!UICONTROL Person]](./data-types/person.md) | Information on a generic person record. |
| [[!UICONTROL Quantity]](./data-types/quantity.md) | A measured or measurable amount. |
| [[!UICONTROL Range]](./data-types/range.md) | A set of values bound by low and high values. |
| [[!UICONTROL Ratio]](./data-types/ratio.md) | A ratio of two [[!UICONTROL Quantity]](./data-types/quantity.md) values through a numerator and a denominator. |
| [[!UICONTROL Reference]](./data-types/reference.md) | A reference from one resource to another. |
| [[!UICONTROL Repeat]](./data-types/repeat.md) | A set of rules that describe when an event is scheduled. |
| [[!UICONTROL Simple Quantity]](./data-types/simple-quantity.md) | A measured or measurable amount. |
| [[!UICONTROL Timing]](./data-types/timing.md) | Information on an event that may occur multiple times. |
| [[!UICONTROL Virtual Service Detail]](./data-types/virtual-service-detail.md) | Virtual service contact details. |


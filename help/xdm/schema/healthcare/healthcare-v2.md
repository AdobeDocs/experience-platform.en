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

<table>
  <thead>
    <tr>
      <th>Use cases</th>
      <th>Field groups</th>
      <th>Compatible classes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Create/update patient</strong>: When a patient arrives at the hospital front desk, a patient record is established, including demographic details like an identifier (optional), the patient name, their date of birth, their gender, and their address. This serves as a vital component of Healthcare IT.</td>
      <td><a href="./field-groups/patient.md">Patient</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
      </td>
    </tr>
    <tr>
      <td rowspan="6"><strong>Vaccination</strong>: Facilitating the vaccination process, managing patient immunization records, and integrating EMRs with Vaccine Management Systems.</td>
      <td><a href="./field-groups/immunization.md">Immunization</a></td>
      <td>
        <li><a href="../../classes/experienceevent.md">XDM Experience Event</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="./field-groups/patient.md">Patient</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="./field-groups/location.md">Location</a></td>
      <td>
        <li><a href="./classes/location.md">Location</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="./field-groups/medication.md">Medication</a></td>
      <td>
        <li><a href="../../classes/medication.md">Medication</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="./field-groups/medication-dispense.md">Medication Dispense</a></td>
      <td>
        <li><a href="../../classes/medication.md">Medication</a></li>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
        <li><a href="../../classes/provider.md">Provider</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="./field-groups/medication-request.md">Medication Request</a></td>
      <td>
        <li><a href="../../classes/medication.md">Medication</a></li>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
        <li><a href="../../classes/provider.md">Provider</a></li>
      </td>
    </tr>
    <tr>
      <td rowspan="4"><strong>Post-care adherence</strong>: Motivating patients and caregivers to complete their treatment plans and reduce remittance rates.</td>
      <td><a href="./field-groups/patient.md">Patient</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="./field-groups/location.md'">Location</a></td>
      <td>
        <li><a href="./classes/location.md">Location</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="./field-groups/care-plan.md">Care Plan</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="./field-groups/goal.md">Goal</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
        <li><a href="../../classes/provider.md">Provider</a></li>
      </td>
    </tr>
    <tr>
      <td rowspan="7"><strong>Consumer experience for insurance</strong>: Improve digital acquisition and experiences among consumers shopping for insurance. Examples include: 
        <li> Understanding consumer behaviour to send promotional emails or targeted third-party ads to people accessing pages containing general information (such as plans, plan names/tiers, Medicaid, or wellness programs)
        </li> 
        <li> Sending vaccine-related information on heart heatlh to create brand awarness or requests to schedule vaccines to people searching for heart health and vaccine information.
        </li>
      </td>
      <td><a href="./field-groups/patient.md">Patient</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="./field-groups/coverage.md">Coverage</a></td>
      <td>
        <li><a href="../../classes/plan.md">Plan</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="./field-groups/account.md">Account</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
        <li><a href="../../classes/provider.md">Provider</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="./field-groups/location.md">Location</a></td>
      <td>
        <li><a href="./classes/location.md">Location</a></li>
      </td>
    </tr>
      <tr>
      <td><a href="./field-groups/medication.md">Medication</a></td>
      <td>
        <li><a href="../../classes/medication.md">Medication</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="./field-groups/medication-dispense.md">Medication Dispense</a></td>
      <td>
        <li><a href="../../classes/medication.md">Medication</a></li>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
        <li><a href="../../classes/provider.md">Provider</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="./field-groups/medication-request.md">Medication Request</a></td>
      <td>
        <li><a href="../../classes/medication.md">Medication</a></li>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
        <li><a href="../../classes/provider.md">Provider</a></li>
      </td>
    </tr>
    <tr>
      <td rowspan="5"><strong>Enhanced provider experience</strong>: Using provider data from the EMR system to suggest alternative providers based on appointment availability, location, and specialty. <br> <br>Improving provider searches to show results with desired availability, verifying that the provider selected is part of the payor network, and providing cost estimates.
      </td>
      <td><a href="./field-groups/patient.md">Patient</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="./field-groups/location.md">Location</a></td>
      <td>
        <li><a href="./classes/location.md">Location</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="./field-groups/organization.md">Organization</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
        <li><a href="../../classes/provider.md">Provider</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="./field-groups/practioner.md">Practitioner</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
        <li><a href="../../classes/provider.md">Provider</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="./field-groups/schedule.md">Schedule</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
        <li><a href="../../classes/provider.md">Provider</a></li>
      </td>
    </tr>
  </tbody>
</table>

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

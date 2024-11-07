---
title: Healthcare V2 Use Cases
description: Learn about some common healthcare use cases and the best classes and schema field groups to use.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
---
# [!UICONTROL Healthcare] V2 use cases

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
      <td><a href="../../field-groups/profile/healthcare-patient.md">Patient</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
      </td>
    </tr>
    <tr>
      <td rowspan="6"><strong>Vaccination</strong>: Facilitating the vaccination process, managing patient immunization records, and integrating EMRs with Vaccine Management Systems.</td>
      <td><a href="../../field-groups/event/healthcare-immunization.md">Immunization</a></td>
      <td>
        <li><a href="../../classes/experienceevent.md">XDM Experience Event</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="../../field-groups/profile/healthcare-patient.md">Patient</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="../../field-groups/location/healthcare-location.md">Location</a></td>
      <td>
        <li><a href="../../classes/location.md">Location</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="../../field-groups/medication/healthcare-medicationV2.md">Medication</a></td>
      <td>
        <li><a href="../../classes/medication.md">Medication</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="../../field-groups/medication/healthcare-medication-dispense.md">Medication Dispense</a></td>
      <td>
        <li><a href="../../classes/medication.md">Medication</a></li>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
        <li><a href="../../classes/provider.md">Provider</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="../../field-groups/medication/healthcare-medication-request.md">Medication Request</a></td>
      <td>
        <li><a href="../../classes/medication.md">Medication</a></li>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
        <li><a href="../../classes/provider.md">Provider</a></li>
      </td>
    </tr>
    <tr>
      <td rowspan="4"><strong>Post-care adherence</strong>: Motivating patients and caregivers to complete their treatment plans and reduce remittance rates.</td>
      <td><a href="../../field-groups/profile/healthcare-patient.md">Patient</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="../../field-groups/location/healthcare-location.md">Location</a></td>
      <td>
        <li><a href="../../classes/location.md">Location</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="../../field-groups/profile/healthcare-care-plan.md">Care Plan</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="../../field-groups/profile/healthcare-goal.md">Goal</a></td>
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
      <td><a href="../../field-groups/profile/healthcare-patient.md">Patient</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="../../field-groups/plan/healthcare-coverage.md">Coverage</a></td>
      <td>
        <li><a href="../../classes/plan.md">Plan</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="../../field-groups/profile/healthcare-account.md">Account</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
        <li><a href="../../classes/provider.md">Provider</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="../../field-groups/location/healthcare-location.md">Location</a></td>
      <td>
        <li><a href="../../classes/location.md">Location</a></li>
      </td>
    </tr>
      <tr>
      <td><a href="../../field-groups/medication/healthcare-medicationV2.md">Medication</a></td>
      <td>
        <li><a href="../../classes/medication.md">Medication</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="../../field-groups/medication/healthcare-medication-dispense.md">Medication Dispense</a></td>
      <td>
        <li><a href="../../classes/medication.md">Medication</a></li>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
        <li><a href="../../classes/provider.md">Provider</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="../../field-groups/medication/healthcare-medication-request.md">Medication Request</a></td>
      <td>
        <li><a href="../../classes/medication.md">Medication</a></li>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
        <li><a href="../../classes/provider.md">Provider</a></li>
      </td>
    </tr>
    <tr>
      <td rowspan="5"><strong>Enhanced provider experience</strong>: Using provider data from the EMR system to suggest alternative providers based on appointment availability, location, and specialty. <br> <br>Improving provider searches to show results with desired availability, verifying that the provider selected is part of the payor network, and providing cost estimates.
      </td>
      <td><a href="../../field-groups/profile/healthcare-patient.md">Patient</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="../../field-groups/location/healthcare-location.md">Location</a></td>
      <td>
        <li><a href="../../classes/location.md">Location</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="../../field-groups/profile/healthcare-organization.md">Organization</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
        <li><a href="../../classes/provider.md">Provider</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="../../field-groups/profile/healthcare-practioner.md">Practitioner</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
        <li><a href="../../classes/provider.md">Provider</a></li>
      </td>
    </tr>
    <tr>
      <td><a href="../../field-groups/profile/healthcare-schedule.md">Schedule</a></td>
      <td>
        <li><a href="../../classes/individual-profile.md">XDM Individual Profile</a></li>
        <li><a href="../../classes/provider.md">Provider</a></li>
      </td>
    </tr>
  </tbody>
</table>

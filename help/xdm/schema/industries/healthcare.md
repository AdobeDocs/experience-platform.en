---
title: Healthcare Industry Data Model ERD
description: View an entity relationship diagram (ERD) that describes a standardized data model for the healthcare industry. This data model is compatible with Experience Data Model (XDM) for use in Adobe Experience Platform.
exl-id: ebcf97ec-f5a4-46e5-b1ad-c80d55aa2c6e
---
# [!UICONTROL Healthcare] industry data model ERD

The following entity relationship diagram (ERD) represents a standardized data model for the healthcare industry. The ERD is intentionally presented in a de-normalized fashion and with consideration for how data is stored in Adobe Experience Platform.

>[!NOTE]
>
>The ERD as described is a recommendation for how you should model your data for this industry use case. To make use of this data model in Platform, you must construct the recommended schemas and their relationships yourself. See the guides on managing [schemas](../../ui/resources/schemas.md) and [relationships](../../tutorials/relationship-ui.md) in the UI for more information.

Use the following legend to interpret this ERD:

* Each entity shown in is based on an underlying [Experience Data Model (XDM) class](../composition.md#class).
* For a given entity, each row marked in **bold** represents a field group or a data type, with the relevant fields it provides listed below in unbolded text.
* The most important fields for a given entity are highlighted in red.
* All the properties that could be used to identify individual customers are marked as "identity", with one of these properties marked as a "primary identity".
* Entity relationships are marked as non-dependent, since cookie-based events often cannot determine the person or individual who did the transaction.

![Image showing the entity relationship diagram for the healthcare industry data model](../../images/industries/healthcare.png)

>[!NOTE]
>
>Each entity includes an "_ID" field, which represents the unique string identifier (`_id`) attribute for the record or event in question. This field is used to track the uniqueness of the individual record or event, prevent duplication of data, and look up that data in downstream services. In some cases, `_id` can be a [Universally Unique Identifier (UUID)](https://tools.ietf.org/html/rfc4122) or [Globally Unique Identifier (GUID)](https://docs.microsoft.com/en-us/dotnet/api/system.guid?view=net-5.0).<br><br>It is important to distinguish that **this field does not represent an identity related to an individual person**, but rather the record of data itself. Identity data relating to a person, event, or business entity should be relegated to [identity fields](../composition.md#identity) provided by compatible field groups instead.

## [!UICONTROL Healthcare] use cases

The following table outlines the recommended classes and schema field groups for several common healthcare use cases.

| Use case | Recommended classes and field groups |
| --- | --- |
| Improve digital acquisition and experience among consumers shopping for insurance. Examples include: <ul><li>When people access a page containing general information (such as plans, plan names/tiers, medicaid, wellness programs, and so on), understand their behavior and what they are looking for in order to send promotional emails or target them on third-party platforms with ads.</li><li>When people search for heart health and vaccine information, send them vaccine-related info on heart health to create brand awareness or ask them to schedule vaccines.</li></ul> | <ul><li>**[[!UICONTROL XDM Individual Profile]](../../classes/individual-profile.md)**:<ul><li>[[!UICONTROL Healthcare Member Details]](../../field-groups/profile/healthcare-member-details.md)</li><li>Relationship field(s) established between `planID` attributes and schemas that use the [!UICONTROL Plan] class.</li></ul></li><li>**[[!UICONTROL Payer]](../../classes/payer.md)**</li><li>**[[!UICONTROL Plan]](../../classes/plan.md)**:<ul><li>[[!UICONTROL Healthcare Plan Details]](../../field-groups/plan/healthcare-plan-details.md)</li></ul></li><li>**[[!UICONTROL XDM ExperienceEvent]](../../classes/experienceevent.md)**:<ul><li>[[!UICONTROL Application Details]](../../field-groups/event/application-details.md)</li><li>[[!UICONTROL Sitetool Details]](../../field-groups/event/sitetool-details.md)</li><li>[[!UICONTROL  Campaign Marketing Details]](../../field-groups/event/campaign-marketing-details.md)</li></ul></li></ul> |
| Increase digital acquisition of patients through targeted ads based on past online behavior and health data. | <ul><li>**[[!UICONTROL XDM Individual Profile]](../../classes/individual-profile.md)**:<ul><li>[[!UICONTROL Healthcare Member Details]](../../field-groups/profile/healthcare-member-details.md)</li></ul></li><li>**[[!UICONTROL Provider]](../../classes/provider.md)**:<ul><li>[[!UICONTROL Healthcare Provider]](../../field-groups/provider/healthcare-provider.md)</li></ul></li><li>**[[!UICONTROL XDM ExperienceEvent]](../../classes/experienceevent.md)**:<ul><li>[[!UICONTROL Web Details]](../../field-groups/event/web-details.md)</li><li>[[!UICONTROL Advertising Details]](../../field-groups/event/advertising-details.md)</li></ul></li></ul> |
| Improve enrollment and account creation in health plans by tracking marketing of insurance through different channels, in order to understand how a customer found out about an insurance company. | <ul><li>**[[!UICONTROL XDM Individual Profile]](../../classes/individual-profile.md)**:<ul><li>[[!UICONTROL Healthcare Member Details]](../../field-groups/profile/healthcare-member-details.md)</li></ul></li><li>**[[!UICONTROL Payer]](../../classes/payer.md)**</li><li>**[[!UICONTROL Plan]](../../classes/plan.md)**:<ul><li>[[!UICONTROL Healthcare Plan Details]](../../field-groups/plan/healthcare-plan-details.md)</li></ul></li><li>**[[!UICONTROL XDM ExperienceEvent]](../../classes/experienceevent.md)**:<ul><li>[[!UICONTROL Web Details]](../../field-groups/event/web-details.md)</li><li>[[!UICONTROL Advertising Details]](../../field-groups/event/advertising-details.md)</li></ul></li></ul> |
| Avoid lapses in medical insurance coverage. | <ul><li>**[[!UICONTROL XDM Individual Profile]](../../classes/individual-profile.md)**:<ul><li>[[!UICONTROL Healthcare Member Details]](../../field-groups/profile/healthcare-member-details.md)</li></ul></li><li>**[[!UICONTROL Plan]](../../classes/plan.md)**:<ul><li>[[!UICONTROL Healthcare Plan Details]](../../field-groups/plan/healthcare-plan-details.md)</li></ul></li></ul> |
| Promote drug information to providers using direct-to-customer (DTC) ads. | <ul><li>**[[!UICONTROL XDM Individual Profile]](../../classes/individual-profile.md)**:<ul><li>[[!UICONTROL Healthcare Member Details]](../../field-groups/profile/healthcare-member-details.md)</li></ul></li><li>**[[!UICONTROL Medication]](../../classes/medication.md)**:<ul><li>[[!UICONTROL Healthcare medication]](../../field-groups/medication/healthcare-medication.md)</li></ul></li><li>**[[!UICONTROL XDM ExperienceEvent]](../../classes/experienceevent.md)**:<ul><li>[[!UICONTROL Web Details]](../../field-groups/event/web-details.md)</li><li>[[!UICONTROL Advertising Details]](../../field-groups/event/advertising-details.md)</li></ul></li></ul> |

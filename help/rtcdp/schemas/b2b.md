---
title: Schemas in Real-Time Customer Data Platform B2B Edition
description: An overview of the role of Experience Data Model (XDM) schemas in Adobe Real-Time Customer Data Platform B2B Edition.
feature: Get Started, Data Management, Schemas
badgeB2B: label="B2B Edition" type="Informative" url="https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2b-edition-prime-and-ultimate-packages.html newtab=true"
exl-id: 3b18d377-108f-443f-86ae-dc7537cf9013
---
# Schemas in Real-Time Customer Data Platform B2B Edition

Adobe Real-Time Customer Data Platform B2B Edition provides several standard [Experience Data Model (XDM) classes](../../xdm/schema/composition.md#class) that capture details about essential B2B data entities, such as accounts, opportunities, campaigns, and more. In addition, Real-Time CDP B2B Edition allows you to define many-to-one relationships between these schemas so they can participate in advanced segmentation use cases.

>[!IMPORTANT]
>
>B2B schemas are available to use in Experience Platform applications (for example, in [Customer Journey Analytics B2B Edition](https://experienceleague.adobe.com/en/docs/analytics-platform/using/cja-overview/cja-b2b/cja-b2b-edition)). <br/>However, you must have access to Real-Time CDP B2B Edition in order for (profiles in) B2B schemas to participate in [Real-Time Customer Profile](../../profile/home.md).

The following standard classes are provided in Real-Time CDP B2B Edition:

* [XDM Business Account](../../xdm/classes/b2b/business-account.md)
* [XDM Business Account Person Relation](../../xdm/classes/b2b/business-account-person-relation.md)
* [XDM Business Campaign](../../xdm/classes/b2b/business-campaign.md)
* [XDM Business Campaign Members](../../xdm/classes/b2b/business-campaign-members.md)
* [XDM Business Opportunity](../../xdm/classes/b2b/business-opportunity.md)
* [XDM Business Opportunity Person Relation](../../xdm/classes/b2b/business-opportunity-person-relation.md)
* [XDM Business Marketing List](../../xdm/classes/b2b/business-marketing-list.md)
* [XDM Business Marketing List Members](../../xdm/classes/b2b/business-marketing-list-members.md)

To understand how schemas fit into your B2B workflow, please see the [end-to-end tutorial](../b2b-tutorial.md).

For steps on how to create a many-to-one relationship between two schemas, refer to the tutorial on [defining B2B schema relationships](../../xdm/tutorials/relationship-b2b.md).

If you are using a B2B source connection, you can use a tool to automatically generate the required schemas and the relationships between them. See the guide on [B2B namespaces](../../sources/connectors/adobe-applications/marketo/marketo-namespaces.md) in the sources documentation for more information.

---
product: experience-platform
audience: user
user-guide-title: Experience Data Model (XDM) System Help
breadcrumb-title: Experience Data Model (XDM) Guide
user-guide-description: Use Experience Data Model (XDM) classes and schema field groups to standardize experience data.
feature: Schemas
---

# Experience Data Model (XDM) System {#xdm}

* [XDM System overview](home.md)
* Schemas {#schema}
  * [Basics of schema composition](schema/composition.md)
  * [Best practices for data modeling](schema/best-practices.md)
  * [XDM field type constraints](schema/field-constraints.md)
  * [XDM field dictionary](schema/field-dictionary.md)
* Classes {#classes}
  * [XDM Individual Profile](./classes/individual-profile.md)
  * [XDM ExperienceEvent](./classes/experienceevent.md)
  * [Segment definition](./classes/segment-definition.md)
* Schema field groups {#field-groups}
  * Profile field groups {#profile}
    * [IdentityMap](./field-groups/profile/identitymap.md)
    * [Demographic Details](./field-groups/profile/person-details.md)
    * [Personal Contact Details](./field-groups/profile/personal-details.md)
    * [Segment Membership Details](./field-groups/profile/segmentation.md)
    * [Work Contact Details](./field-groups/profile/work-details.md)
  * Event field groups {#event}
    * [End User ID Details](./field-groups/event/enduserids.md)
    * [Environment Details](./field-groups/event/environment-details.md)
  * [Mixin name updates](./field-groups/name-updates.md)
* Data types {#data-types}
    * [Application](./data-types/application.md)
    * [Beacon](./data-types/beacon.md)
    * [Browser details](./data-types/browser-details.md)
    * [Commerce](./data-types/commerce.md)
    * [Consents & Preferences](./data-types/consents.md)
    * [Device](./data-types/device.md)
    * [Email address](./data-types/email-address.md)
    * [Environment](./data-types/environment.md)
    * [Geo](./data-types/geo.md)
    * [Geo Circle](./data-types/geo-circle.md)
    * [Geo Coordinates](./data-types/geo-coordinates.md)
    * [Geo interaction details](./data-types/geo-interaction-details.md)
    * [Geo Shape](./data-types/geo-shape.md)
    * [Identity](./data-types/identity.md)
    * [Measure](./data-types/measure.md)
    * [Order](./data-types/order.md)
    * [Payment Item](./data-types/payment-item.md)
    * [Person](./data-types/person.md)
    * [Person name](./data-types/person-name.md)
    * [Phone number](./data-types/phone-number.md)
    * [Place context](./data-types/place-context.md)
    * [POI details](./data-types/poi-details.md)
    * [POI interaction](./data-types/poi-interaction.md)
    * [Postal address](./data-types/postal-address.md)
    * [Search](./data-types/search.md)
    * [Subscription](./data-types/subscription.md)
    * [Web interaction](./data-types/web-interactions.md)
    * [Web page details](./data-types/webpage-details.md)
* [!UICONTROL Schemas] UI {#ui}
  * [Overview](./ui/overview.md)
  * [Explore XDM resources](./ui/explore.md)
  * Create and edit resources {#resources}
    * [Schemas](./ui/resources/schemas.md)
    * [Classes](./ui/resources/classes.md)
    * [Field groups](./ui/resources/field-groups.md)
    * [Data types](./ui/resources/data-types.md)
  * Define fields {#fields}
    * [Overview](./ui/fields/overview.md)
    * [Required fields](./ui/fields/required.md)
    * [Object fields](./ui/fields/object.md)
    * [Array fields](./ui/fields/array.md)
    * [Enum fields](./ui/fields/enum.md)
    * [Identity fields](./ui/fields/identity.md)
    * [Relationship fields](./ui/fields/relationship.md)
  * [Generate sample XDM data](./ui/sample.md)
  * [Export XDM schemas](./ui/export.md)
* Schema Registry API {#api}
  * [Overview](api/overview.md)
  * [Getting started](api/getting-started.md)
  * [Schemas](api/schemas.md)
  * [Behaviors](api/behaviors.md)
  * [Classes](api/classes.md)
  * [Mixins](api/mixins.md)
  * [Data types](api/data-types.md)
  * [Descriptors](api/descriptors.md)
  * [Unions](api/unions.md)
  * [Export/Import](api/export-import.md)
  * [Sample data](api/sample-data.md)
  * [Audit log](api/audit-log.md)
  * [Ad-hoc schemas](api/ad-hoc.md)
  * [Appendix](api/appendix.md)
* Tutorials {#tutorials}
  * [Create a schema (UI)](tutorials/create-schema-ui.md)
  * [Create a schema (API)](tutorials/create-schema-api.md)
  * [Define a relationship between two schemas (UI)](tutorials/relationship-ui.md)
  * [Define a relationship between two schemas (API)](tutorials/relationship-api.md)
  * [Create an ad-hoc schema (API)](tutorials/ad-hoc.md)
* [Troubleshooting guide](troubleshooting-guide.md)
* [API reference](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/schema-registry.yaml)
* [Platform release notes](https://www.adobe.com/go/platform-release-notes-en)
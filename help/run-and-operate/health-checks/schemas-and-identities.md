---
title: Schemas and Identities Health Checks
description: Learn about the schemas and identities health checks in Adobe Experience Platform that detect schema and identity configuration issues.
solution: Experience Platform
type: Documentation
role: Admin, User
---
# Schemas and identities health checks

The schemas and identities health checks scan your schemas and identity namespaces for missing best practices and misconfigurations that lead to incomplete identity resolution, inflated profile counts, and inaccurate activation.

| Check | Object type |
| --- | --- |
| [Identity field validation](#identity-field-validation) | Schema |
| [Identity graph linking rules](#identity-graph-linking-rules) | Identity |
| [People and non-people identity configuration](#people-non-people-identity) | Schema, identity |
| [Custom identity namespace description](#namespace-missing-description) | Identity |
| [Deprecated identity namespace](#deprecated-namespace) | Identity |
| [Non-person identity on relationship field](#non-person-identity-relationship-field) | Schema |
| [Multi-entity relationship count](#multi-entity-relationship-count) | Schema |
| [Missing audit field group](#missing-audit-field-group) | Schema |

## Identity field validation {#identity-field-validation}

Scans to ensure identity fields have minimum and maximum length constraints and regex pattern rules for data integrity.

| Detail | Description |
| --- | --- |
| **Issue** | Fields marked as identities are missing minimum/maximum length or pattern validation. |
| **Impact** | Without validation, garbage values can enter [!DNL Identity Service]. Values such as "0", "Guest", or mismatched casing (for example, "xyz123" versus "XYZ123") compromise the integrity of the profile that is assembled during segmentation and activation. |
| **Remediation** | Set minimum/maximum length and pattern constraints on custom fields marked as identities. Use regular expressions to enforce rules such as digits only, uppercase or lowercase, or specific character combinations. |

When you select the **[!UICONTROL Identity Field Validation]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Scans to ensure identity fields have min/max lengths and regex pattern rules for data integrity. Lists affected schemas and fields.
* **[!UICONTROL Impact]**: If identity fields in schemas do not have min/max lengths and pattern validations set, it can lead to inconsistent data, which can compromise integrity and quality of data.
* **[!UICONTROL General areas of impact]**: Low-quality identifiers in [!DNL Identity Service]; unreliable stitching.
* **[!UICONTROL Experience League Documentation]**: A link to best practices for data modeling.
* **[!UICONTROL Affected Schemas]**: A list of affected schemas, each with an expander to view more details and a link to open the schema.

![Identity Field Validation detail panel showing description, impact, and affected schemas](../assets/health-checks/identity-field-validation-detail.png)

For more information, see the [data integrity tips](/help/xdm/schema/best-practices.md#data-integrity-tips) in the schema best practices documentation.

## Identity graph linking rules {#identity-graph-linking-rules}

Verifies that identity graph linking rules are configured for a sandbox to prevent collapsed profiles.

| Detail | Description |
| --- | --- |
| **Issue** | Identity graph linking rules are not configured for this sandbox. |
| **Impact** | Without linking rules, multiple disparate profiles can merge into a single profile (graph collapse). Certain data from shared devices or non-unique identities can trigger unwanted merges, which leads to inaccurate personalization. |
| **Remediation** | Navigate to the **[!UICONTROL Identities]** menu, select **[!UICONTROL Settings]**, and select at least one unique-per-graph identity. This enables identity graph linking rules and prevents profile collapse. |

When you select the **[!UICONTROL Identity Graph Linking Rules]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Verifies that proper linking rules are configured to prevent collapsed profiles. It shows current rule status and unique-per-graph identities.
* **[!UICONTROL Impact]**: If identity graph linking rules are not set, certain data could try to merge multiple disparate profiles into a single profile. To prevent unwanted merges, configurations provided through identity graph linking rules should be used.
* **[!UICONTROL General areas of impact]**: Collapsed or merged profiles.
* **[!UICONTROL Experience League Documentation]**: A link to the Identity Graph Linking Rules overview for more information.
* **[!UICONTROL Configure linking rules]**: When the check fails, a button appears so you can configure linking rules directly from the panel.

![Identity Graph Linking Rules detail panel showing description, impact, and Configure linking rules button](../assets/health-checks/identity-graph-linking-detail.png)

For more information, see the [identity graph linking rules overview](/help/identity-service/identity-graph-linking-rules/overview.md) and the [implementation guide](/help/identity-service/identity-graph-linking-rules/implementation-guide.md).

## People and non-people identity configuration {#people-non-people-identity}

Validates the correct use of people and non-people identity types across schema classes.

| Detail | Description |
| --- | --- |
| **Issue** | Non-people identifiers are used on Individual Profile or Experience Event class schemas, or people identifiers are used on lookup schemas. |
| **Impact** | Non-people identifiers on profile schemas do not participate in the identity graph, which leads to incomplete identity resolution. People identifiers on lookup schemas inflate the profile count and make the data ineligible for lookup use cases. Both cases risk future product enhancements breaking your implementation. |
| **Remediation** | Review flagged schemas and correct the identity type assignments. Remove non-people identifiers from Individual Profile schemas when possible. For schemas already in use by datasets, refer to the [schema evolution rules](/help/xdm/schema/composition.md#evolution). |

When you select the **[!UICONTROL People & Non-People Identity Config]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Validates proper use of identity types across schema classes. Lists misconfigured schemas and highlights wrong assignments.
* **[!UICONTROL Impact]**: If a non-people entity is given a person identity, this will inflate the profile count and make this data ineligible as a lookup. If a person entity is given a non-people identity, the data is not available for streaming or edge segmentation.
* **[!UICONTROL General areas of impact]**: Incomplete identity graphs; inflated profile counts; lookup misuse.
* **[!UICONTROL Affected Schemas]**: A list of schemas with issues. Expand a schema row to see the path, identity name, and schema type for each misconfiguration. Use the link icon to open the schema.

![People & Non-People Identity Config detail panel showing description, impact, and affected schemas with expandable rows](../assets/health-checks/people-non-people-identity-detail.png)

For more information, see the [identity type documentation](/help/identity-service/features/namespaces.md#identity-type) and the [schema best practices](/help/xdm/schema/best-practices.md).

## Custom identity namespace description {#namespace-missing-description}

Scans to ensure that custom identity namespace metadata and descriptions are complete.

| Detail | Description |
| --- | --- |
| **Issue** | Custom identity namespaces are missing their description field. |
| **Impact** | Missing descriptions can lead to confusion during usage and debugging. |
| **Remediation** | Document each custom namespace by filling in the description field. Include validation criteria (minimum/maximum length, pattern) and lifecycle information that identifies which external source system creates these identities. |

When you select the **[!UICONTROL Custom Identity Namespace Description]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Scans to ensure namespace metadata and descriptions are complete. Displays namespaces and owners with empty description fields.
* **[!UICONTROL Impact]**: Setting a description on a custom identity namespace enhances clarity by providing context of the purpose of each namespace. This helps team members and stakeholders quickly understand the function of each namespace without confusion.
* **[!UICONTROL General areas of impact]**: Debug or usage confusion; unclear validation intent.
* **[!UICONTROL Experience League Documentation]**: A link to Create Custom Namespaces for further information.
* **[!UICONTROL Affected namespaces]**: A list of custom identity namespaces that are missing descriptions. Use the link icon next to each namespace to view or edit it.

![Custom Identity Namespace Description detail panel showing description, impact, and affected namespaces list](../assets/health-checks/custom-namespace-description-detail.png)

For more information, see the documentation on [creating custom namespaces](/help/identity-service/features/namespaces.md#create-namespaces).

## Deprecated identity namespace {#deprecated-namespace}

Detects obsolete or unused identity namespaces that should be marked for cleanup.

| Detail | Description |
| --- | --- |
| **Issue** | Obsolete identity namespaces are not marked as deprecated. |
| **Impact** | Unused or obsolete namespaces create confusion about what is actively in use and increase the risk of mislabeling identity fields. |
| **Remediation** | Rename unused namespaces to include a "Do not use" prefix (for example, "Do not use - [original name]"). Adobe Experience Platform does not currently support namespace deletion, so renaming is the recommended approach. |

When you select the **[!UICONTROL Deprecated Identity Namespace]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Detects obsolete or unused identity namespaces for cleanup. Lists unused namespaces with last usage timestamp or schema reference.
* **[!UICONTROL Impact]**: Identity namespaces not used in any schema should be marked for removal by adding a "DEPRECATED" or "DO NOT USE" tag to their names. Deletion of identity namespaces is not currently supported.
* **[!UICONTROL General areas of impact]**: Confusion and mislabeling risk.
* **[!UICONTROL Experience League Documentation]**: A link to Obsolete Identity Namespaces for further documentation.
* **[!UICONTROL Affected namespaces]**: A list of obsolete or unused identity namespaces. Use the link icon next to each namespace to view or manage it.

![Deprecated Identity Namespace detail panel showing description, impact, and affected namespaces list](../assets/health-checks/deprecated-namespace-detail.png)

For more information, see the [Experience Cloud knowledge base article on obsolete namespaces](https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-18155){target="_blank"}.

## Non-person identity on relationship field {#non-person-identity-relationship-field}

Flags schema fields that carry both an identity descriptor and a relationship descriptor at the same time.

| Detail | Description |
| --- | --- |
| **Issue** | A schema field has both an identity descriptor and a relationship descriptor applied, and these descriptors are mutually exclusive. |
| **Impact** | Including both descriptors on the same field is a data modeling error. Results may include incorrect segmentation and audience activations. |
| **Remediation** | Review the flagged field and remove either the identity descriptor or the relationship descriptor, depending on how the field should function. |

When you select the **[!UICONTROL Non-Person Identity on Relationship Field]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Explains that putting a relationship descriptor on a schema field establishes a direct, dynamic join between two separate schemas. It tells the [!DNL Real-Time Customer Profile] store and [!UICONTROL Segment Builder] that a field in the primary or source schema acts as a foreign key pointing to a lookup or dimension record in the target schema. This check inspects for schema fields that carry both an identity descriptor and a relationship descriptor for the same field.
* **[!UICONTROL Impact]**: These descriptors are mutually exclusive, and including both on the same field is a data modeling error. The results may include incorrect segmentation and audience activations.
* **[!UICONTROL General areas of impact]**: Audience quality.
* **[!UICONTROL Experience League Documentation]**: A link to XDM schema composition for identity.
* **[!UICONTROL Affected schemas]**: A list of schemas with fields that have conflicting descriptors, when applicable. When no issues are detected, the panel shows a **[!UICONTROL Check Passed]** confirmation instead.

![Non-Person Identity on Relationship Field detail panel showing description, impact, and Check Passed confirmation](../assets/health-checks/non-person-identity-relationship-field-detail.png)

For more information, see the [schema composition documentation](/help/xdm/schema/composition.md).

## Multi-entity relationship count {#multi-entity-relationship-count}

Monitors the number of multi-entity relationships defined in a sandbox as they approach the platform limit.

| Detail | Description |
| --- | --- |
| **Issue** | The number of multi-entity relationships defined in the sandbox is approaching the limit of 5. |
| **Impact** | High cardinality and excessive schema joins increase computational complexity across the [!DNL Real-Time Customer Profile] store. Exceeding the limit may degrade Segmentation Service performance and increase audience evaluation latency. |
| **Remediation** | Review existing multi-entity relationships and remove any that are no longer needed before creating new ones. |

When you select the **[!UICONTROL Multi-Entity Relationship Count]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Explains that multi-entity relationships link primary entities, such as [!DNL Real-Time Customer Profiles] or [!DNL ExperienceEvents], to secondary dimension entities, such as product catalogs, store locations, or business accounts. This check inspects whether the limit of 5 multi-entity relationships defined in the sandbox is exceeded.
* **[!UICONTROL Impact]**: High cardinality and excessive schema joins increase computational complexity across the [!DNL Real-Time Customer Profile] store. Exceeding the limit may degrade Segmentation Service performance and increase audience evaluation latency.
* **[!UICONTROL General areas of impact]**: Batch segmentation.
* **[!UICONTROL Experience League Documentation]**: A link to best practices for data modeling.

![Multi-Entity Relationship Count detail panel showing description, impact, general areas of impact, and Check Passed confirmation](../assets/health-checks/multi-entity-relationship-count-detail.png)

For more information, see the [data modeling best practices](/help/xdm/schema/best-practices.md) and the [multi-entity segmentation tutorial](/help/segmentation/tutorials/multi-entity-segmentation.md).

## Missing audit field group {#missing-audit-field-group}

Verifies that XDM Individual Profile schemas include the External Source System Audit Details field group.

| Detail | Description |
| --- | --- |
| **Issue** | One or more XDM Individual Profile schemas are missing the External Source System Audit Details field group. |
| **Impact** | Without audit fields, you have no record-level visibility into when data was ingested, making it difficult to troubleshoot stale or duplicate records. |
| **Remediation** | Add the External Source System Audit Details field group to schemas that are missing it. |

When you select the **[!UICONTROL Missing Audit Field Group]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Verifies that XDM Individual Profile schemas include the External Source System Audit Details field group, which is required for tracking record provenance and update timestamps.
* **[!UICONTROL Impact]**: Without audit fields, there is no record-level visibility into when data was ingested into [!DNL Experience Platform], which makes it difficult to troubleshoot stale or duplicate records.
* **[!UICONTROL General areas of impact]**: Inability to audit external data changes.
* **[!UICONTROL Experience League Documentation]**: A link to the External Source System Audit Details field group.
* **[!UICONTROL Recommendation]**: Where missing, add the External Source System Audit Details field group.
* **[!UICONTROL Affected schemas]**: A list of schemas that are missing the field group. Use the link icon next to each schema to open it.

![Missing Audit Field Group detail panel showing description, impact, recommendation, and affected schemas](../assets/health-checks/missing-audit-field-group-detail.png)

For more information, see the [External Source System Audit Details field group documentation](/help/xdm/field-groups/shared/external-source-system-audit-details.md).

## Next steps {#next-steps}

* Return to the [health checks overview](/help/run-and-operate/health-checks/overview.md) to explore other check categories.
* Learn about [schema best practices](/help/xdm/schema/best-practices.md) for designing reliable data models.
* Understand [identity graph linking rules](/help/identity-service/identity-graph-linking-rules/overview.md) to prevent profile collapse.
* Review [identity namespace documentation](/help/identity-service/features/namespaces.md) for namespace management best practices.

---
title: Adobe Analytics ExperienceEvent Full Extension Schema Field Group
description: This document provides an overview of the Adobe Analytics ExperienceEvent Full Extension schema field group.
---
# [!UICONTROL Adobe Analytics ExperienceEvent Full Extension] schema field group

[!UICONTROL Adobe Analytics ExperienceEvent Full Extension] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md), which captures common metrics that are collected by Adobe Analytics.

This document describes the structure and use case of the Analytics extension field group.

>[!NOTE]
>
>Due to the size and number of repeated elements in this field group, many of the fields shown in this guide have been collapsed to save on space. To explore the full structure of this field group, you can [look it up in the Platform UI ](../../ui/explore.md) or view the complete schema in the [public XDM repository](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/analytics/experienceevent-all.schema.json).

## Field group structure

The field group provides a single `_experience` object to a schema, which itself contains a single `analytics` object.

![Top-level fields for the Analytics field group](../../images/field-groups/analytics-full-extension/full-schema.png)

| Property | Data type | Description |
| --- | --- | --- |
| `customDimensions` | Object | Captures custom dimensions that are tracked by Analytics. See the [subsection below](#custom-dimensions) for more information on the contents of this object. |
| `endUser` | Object | Captures the web interaction details for the end user that triggered the event. See the [subsection below](#end-user) for more information on the contents of this object. |
| `environment` | Object | Captures information about the browser and operating system that triggered the event. See the [subsection below](#environment) for more information on the contents of this object. |
| `event1to100`<br><br>`event101to200`<br><br>`event201to300`<br><br>`event301to400`<br><br>`event401to500`<br><br>`event501to100`<br><br>`event601to700`<br><br>`event701to800`<br><br>`event801to900`<br><br>`event901to1000` | Object | The field group provides object fields to capture up to 1000 custom events. See the [subsection below](#events) for more information on these fields. |
| `session` | Object | Captures information about the session that triggered the event. See the [subsection below](#session) for more information on the contents of this object. |

{style="table-layout:auto"}

## `customDimensions` {#custom-dimensions}

`customDimensions` captures custom [dimensions](https://experienceleague.adobe.com/docs/analytics/components/dimensions/overview.html) that are tracked by Analytics.

![customDimensions field](../../images/field-groups/analytics-full-extension/customDimensions.png)

| Property | Data type | Description |
| --- | --- | --- |
| `eVars` | Object | An object that captures up to 250 conversion variables ([eVars](https://experienceleague.adobe.com/docs/analytics/components/dimensions/evar.html)). The properties of this object are keyed `eVar1` to `eVar250` and only accept strings for their data type. |
| `hierarchies` | Object | An object that captures up to five custom hierarchy variables ([hiers](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/hier.html)). The properties of this object are keyed `hier1` to `hier5`, which are themselves objects with the following sub-properties:<ul><li>`delimiter`: The original delimiter used to generated the list provided under `values`.</li><li>`values`: A delimited list of hierarchy level names, represented as a string.</li></ul> |
| `listProps` | Object | An object that captures up to 75 [list props](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/prop.html#list-props). The properties of this object are keyed `prop1` to `prop75`, which are themselves objects with the following sub-properties:<ul><li>`delimiter`: The original delimiter used to generated the list provided under `values`.</li><li>`values`: A delimited list of values for the prop, represented as a string.</li></ul> |
| `lists` | Object | An object that captures up to three [lists](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/list.html). The properties of this object are keyed `list1` to `list3`. Each of these properties contains a single `list` array of [[!UICONTROL Key Value Pair]](../../data-types/key-value-pair.md) data types. |
| `props` | Object | An object that captures up to 75 [props](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/prop.html). The properties of this object are keyed `prop1` to `prop75` and only accept strings for their data type. |
| `postalCode` | String | A client-supplied zip code or postal code. |
| `stateProvince` | String | A client-supplied state or province location. |

{style="table-layout:auto"}

## `endUser` {#end-user}

![endUser field](../../images/field-groups/analytics-full-extension/endUser.png)

## `environment` {#environment}

![environment field](../../images/field-groups/analytics-full-extension/environment.png)

## Custom event fields {#events}



## `session` {#session}

![session field](../../images/field-groups/analytics-full-extension/session.png)

## Next steps

For more details on the field group, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/analytics/experienceevent-all.schema.json).

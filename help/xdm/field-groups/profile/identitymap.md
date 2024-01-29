---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;individual profile;fields;schemas;Schemas;identityMap;identity map;Identity map;Schema design;map;Map;union schema;union
title: IdentityMap Schema Field Group
description: Learn about the XDM Individual Profile class.
exl-id: c9928e85-ef1e-4739-ba1d-80505a9e60c3
---
# [!UICONTROL IdentityMap] schema field group

>[!NOTE]
>
>The names of several schema field groups have changed. See the document on [field group name updates](../name-updates.md) for more information.

[!UICONTROL IdentityMap] is a standard schema field group for the [[!DNL XDM Individual Profile] class](../../classes/individual-profile.md). The field group provides a single map field, which contains a set of user identities keyed by namespace.

![A diagram of the [!UICONTROL IdentityMap] schema field group](../../images/field-groups/identitymap.png)

See the section on identity maps in the [basics of schema composition](../../schema/composition.md#identityMap) for more information on their use case, including their benefits and drawbacks.

**example**

```JSON
{
    "identityMap":{
        "ECID":[
            {
                "id":"83238819066235616291057085344313877718",
                "authenticatedState":"ambiguous",
                "primary":true
            }
        ]
    }
}
```

For more details on the field group, refer to the [full schema](https://github.com/adobe/xdm/blob/master/components/fieldgroups/shared/identitymap.schema.json) in the public XDM repository.

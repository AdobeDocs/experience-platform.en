---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;Webpage details;datatype;data-type;data type;webpage
solution: Experience Platform
title: Web Information Data Type
description: Learn about the web information Experience Data Model (XDM) data type.
exl-id: bfb00835-5908-4baf-af2a-6d845710e340
---
# [!UICONTROL Web information] data type

[!UICONTROL Web information] is a standard Experience Data Model (XDM) data type that describes information recorded via an Experience Event that is specific to the World Wide Web channel, including the web page, referrer, and/or link related to the on-page interaction.

![](../images/data-types/web-information.png)

| Property | Data type | Description |
| --- | --- | --- |
| `webInteraction` | [[!UICONTROL Web interaction]](./web-interaction.md) | Describes the details about the web link or URL that corresponds to the interaction. |
| `webPageDetails` | [[!UICONTROL Web page details]](./webpage-details.md) | Describes the details about the web page where the web interaction occurred. |
| `webReferrer` | [!UICONTROL Object] | Describes the referrer of a web interaction, which is the URL a visitor came from immediately before the current web interaction was recorded. Contains the following subproperties: <ul><li>`URL`: The referrer URL.</li><li>`type`: The referrer type.</li></ul> |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/webinfo.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/webinfo.schema.json)

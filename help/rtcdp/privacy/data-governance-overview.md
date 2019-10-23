---
title: Data Governance overview
seo-title: Data Governance in Real-time Customer Data Platform
description: Data Governance allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use. 
seo-description: Data Governance allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use. 
---

# Data Governance in Real-time CDP

Real-time Customer Data Platform (Real-time CDP) brings data from multiple enterprise systems together, allowing marketers to better identify, understand, and engage their customers. This data may be subject to usage restrictions defined by your organization or by legal regulations. Therefore, it is important to ensure that Real-time CDP is compliant with usage policies when handling your data.

Adobe Experience Platform Data Governance allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use. It plays a key role within Real-time CDP, allowing you to define usage policies, categorize your data based on those policies, and check for policy violations when performing certain marketing actions.

Real-time CDP is built on top of Adobe Experience Platform, and therefore the majority of Data Governance capabilities are covered in the Experience Platform documentation. This document is intended to compliment the [Data Governance overview](https://www.adobe.io/apis/experienceplatform/home/dule/duleservices.html#!api-specification/markdown/narrative/technical_overview/data_governance/dule_overview.md) for Experience Platform, and outlines the key differences between Governance in Real-time CDP and Experience Platform.

## Sources versus connections

**Sources** are locations at which a connection with Real-time CDP  can be established to bring in known or unknown customer data. See the [sources overview] for more information. Sources in Real-time CDP can be compared to **connections** in Experience Platform, which serve a similar purpose.

Data Governance in Experience Platform allows you to apply data usage labels for connections. However, **labels cannot be added to sources in Real-time CDP**. Instead, labels can only be added to datasets and/or specific fields within those datasets.

For more information on working with data usage labels, see the [data usage labels user guide](https://www.adobe.io/apis/experienceplatform/home/dule/duleservices.html#!api-specification/markdown/narrative/tutorials/dule/dule_working_with_labels.md) for Adobe Experience Platform.

## Managing marketing actions on destinations

You can define a marketing use case for a destination, which ensures that any segments sent to that destination are compatible with Data Governance rules. Use cases are defined during the _Setup_ phase for the _Edit Destination_ workflow.

See the [destination documentation] for more information.

## Next steps

Now that you have been introduced to the key differences between Data Governance on Real-time CDP and Experience Platform, please continue to the [documentation for Data Governance on Adobe Experience Platform](https://www.adobe.io/apis/experienceplatform/home/dule/duleservices.html). The documentation provides overviews of essential Data Governance concepts, as well as step-by-step workflows for managing data usage labels and policies.
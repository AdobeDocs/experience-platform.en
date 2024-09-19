---
title: Create dynamic datastream configurations
description: Learn how to create dynamic datastream configurations, to route your data to various Experience Cloud services, based on rules.
---

# Create dynamic datastream configurations

>[!AVAILABILITY]
>
>* The option to define dynamic datastream configurations is currently in Beta and available to a limited number of customers. To receive access to this functionality, contact your Adobe representative. The documentation and the functionality are subject to change.

By default, the Experience Platform Edge Network sends all the events that reach a datastream to all the Experience Cloud [services](configure.md#add-services) that you have enabled for your datastreams. This might not always be the ideal workflow for you, depending on your use cases.

This is where dynamic datastream configurations come into play. A dynamic datastream configuration is a set of rules that you define for each service enabled for your datastream, which dictate what Experience Cloud solution should receive which type of data.

## Prerequisites {#prerequisites}

To create a dynamic configuration for your datastream, there are two conditions you must meet:

* You must have created *at least* one datastream to work with. See the documentation on how to [create a datastream](configure.md) for detailed information.
* You must have *at least* one Experience Cloud service added to your datastream. See the documentation on how to [add a service](configure.md#add-services) to a datastream for detailed information.

After you have created a datastream and added an Experience Cloud service to it, you can then [create a dynamic configuration](#create-dynamic-configuration).



## Use cases {#use-cases}

## Create a dynamic datastream configuration {#create-dynamic-configuration}

After you have [created a datastream](configure.md) and [added a service](configure.md#add-services) to it, follow the steps below to add a dynamic configuration to the service.

1. Go to the **[!UICONTROL Data Collection]** > **[!UICONTROL Datastreams]** page and select the datastream that you created.
    
    ![Image of the datastreams user interface showing the list of datastreams.](assets/configure-dynamic-datastream/select-datastream.png)

1. Select the **[!UICONTROL Edit]** option on the service for which you want to define a dynamic configuration.
    
    ![Image of the datastreams user interface showing the services added to a datastream.](assets/configure-dynamic-datastream/select-service.png)

1. In the **[!UICONTROL Configure]** page, select **[!UICONTROL Save and Edit Dynamic Configuration]**.

    ![Image of the datastreams user interface showing the datastream configuration page.](assets/configure-dynamic-datastream/save-and-edit.png)

1. Select **[!UICONTROL Add New Rule]**.
    
    ![Image of the datastreams user interface showing the dynamic configuration no rule added message.](assets/configure-dynamic-datastream/add-rule.png)

1. From the **[!UICONTROL Resources]** panel, drag and drop the items that you want to build your rule with to the right side of the window. You can combine multiple resources to build complex rules.

    Use each resource's options, such as **[!UICONTROL equals]**, **[!UICONTROL does not equal]**, **[!UICONTROL exists]**, and more, to fine tune your rules.

    ![Image of the datastreams user interface showing the dynamic configuration rule.](assets/configure-dynamic-datastream/drag-resources.png)

1. In the **[!UICONTROL Configuration]** section, toggle the service name on or off, depending on whether you want the data to be sent to this service, based on the rules that you define. If you turn the toggle off, the rule is disabled and all data will be sent to the upstream service.

    ![Image of the datastreams user interface showing the dynamic configuration rule.](assets/configure-dynamic-datastream/enable-service.png)

1. When you are done configuring your rules, select **[!UICONTROL Save]**.

## Rule priority considerations {#considerations}

You can define multiple rules for each dynamic datastream configuration. However, if your data matches the conditions of multiple rules, only the first matching rule in the list is taken into consideration, and all the other matching rules are ignored.

To achieve the desired data routing behavior, pay attention to the order in which you arrange the rules.

To configure the rule order, you can drag and drop the rule windows in the order you want.


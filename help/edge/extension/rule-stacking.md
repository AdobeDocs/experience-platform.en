---
title: Rule Stacking in the Adobe Experience Platform Web SDK Extension
description: Learn about how to build up XDM objects using variable data elements and update variable actions in the Adobe Experience Platform Web SDK tag extension.
---

# Rule stacking (beta)

>[!NOTE]
>
>The data element and action used in rule stacking is a beta feature while the development team gathers feedback. Future versions may contain breaking changes.

Rule stacking is the process of adding multiple rules that respond to the same event. Then different conditions can be applied to each rule to only apply actions based on a certain page on the site, a user's location, a device type, or previous actions. The actions of the rules are used to build up the data needed. Rule priority is used to apply the rules in a particular order, with the final rule running an action with the finalized data.

Specifically, with the Web SDK, you can build up the XDM needed using a variable data element, and update variable actions. Before these components were available, the XDM Object data element was primarily used to create XDM objects; however, this data element is limited when used in a send event in that the same logic to build the XDM is applied for every page. The variable data element allows you to build up the XDM differently based on any condition in a rule. This is much like how the Adobe Analytics extension works with set variable actions where you can build up the AppMeasurement tracker object and then send the beacon. In fact the variable data element and update variable action is designed to help the migration process for those using the Adobe Analytics extension.

In order to use rule stacking with the Web SDK follow these steps:

1. Create a variable data element with an associated XDM schema. See the documentation on the [variable](data-element-types.md#variable) data element.
1. Create a set of rules that all trigger from the same event such as library loaded.
1. Create conditions on each rule so that the rule actions only apply to some pages or some users.
1. Create update variable actions in your rules to build up the XDM data ([see update variable action.]{./action-types.md#update-variable}) Only update the parts of the XDM that are available depending on the rule conditions.
1. Finally, add a rule that is applied last using the rule priority in the rule definition. This last rule should have a send event action. The send event action should reference the same variable data element as in the update variables actions. This will send all the XDM data built up in the rules that were previously run.

## Multiple events

When handling multiple events on a single page, care should be taken to not include data from a previous event. This could happen when sending an event based on a user interaction such as adding a product to the cart. As another example when using the Web SDK on a single page application, when the user navigates to a new view you may want to send a new event. Following are two ways to avoid data bleeding from one event to another: clearing parts of the variable data elements, and using multiple variable data elements.

First you can clear parts of a variable data element. When editing a update variable actions, click on one of the properties in the tree on the left. On the right, you will notice a checkbox for whether or not to clear that property before setting any values. You can use this to clear the entire variable or parts of the variable after sending an event. You could add an update variable action after a send event to clear certain parts of the variable.

The other way to isolate event data is to create multiple variable data elements. When you run update variable actions you can choose which data element to update. For example, you could have one variable for the page load, and one variable for an add to cart event. There may be some data that you want to have in both events, but you do not want to duplicate the update variable actions.

One way to accomplish this is to create three variable data elements:

* one for the base data
* one for the page view data
* one for the add to cart event

First, in your rules, update the base data variable. Then, using an update variable action, you can copy all the data from the base data variable into the page view data variable. Do this by choosing the page view data variable as the variable to update; then, click on the "xdm" property on the tree on the left. Then set that property to the base variable data element by clicking on the data element button in the editor on the right. Then you can update the page view variable with data that is specific to that event. If you do the same for the add to cart variable, it will also have the base data.


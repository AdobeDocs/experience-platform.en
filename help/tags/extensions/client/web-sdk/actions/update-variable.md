## Update variable {#update-variable}

Use this action to modify an XDM object as a result of an event. This action is intended to build up an object that can later be referenced from a **[!UICONTROL Send event]** action, to record the event XDM object.

In order to use this action type you must have defined a [variable](data-element-types.md#variable) data element. Once you choose a variable data element to modify, an editor appears, similar to the editor for the [XDM object](data-element-types.md#xdm-object) data element.

![](assets/update-variable.png)

The XDM schema that is used for the editor is the schema that is selected on the [!UICONTROL variable] data element. You can set one or more properties of the object by clicking on one of the properties in the tree on the left, and then modifying the value on the right.For example, in the screenshot below, the producedBy property is getting set to the data element "Produced by data element."

![](assets/update-variable-set-property.png)

There are some differences between the editor in the update variable action versus the editor in the XDM object data element. First, the update variable action has a root level item labeled "xdm." If you click on this item, you can specify a data element to use to set the entire object. Second, the update variable action has checkboxes to clear the data from the xdm object. Click on one of the properties on the left, and then check the checkbox on the right to clear the value. This will clear out the current value before setting any values on the variable.
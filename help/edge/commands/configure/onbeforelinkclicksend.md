### `onBeforeLinkClickSend` {#onBeforeLinkClickSend}

| Type | Required | Default Value |
| -------- | ------------ | ----------------- |
| Function | No           | () => undefined   |

{style="table-layout:auto"}

Configure a callback that is called for every link click tracking event just before it is sent. The callback sends an object with the `xdm`, `clickedElement`, and `data` fields.

When filtering the link tracking by using the DOM elements structure, you can use the `clickElement` command. `clickedElement` is the DOM element node that was clicked and has encapsulated the parent nodes tree.

To change what data gets sent, modify the `xdm` and/or `data` objects. Inside the callback, the `xdm` object already has the data passed in the event command, and the automatically collected information.

* Any value other than `false` will allow the event to process and the callback to be sent.
* If the callback returns the `false` value, event processing is stopped, without an error, and the event is not sent. This mechanism allows for certain events to be filtered out by examining the event data and returning `false` if the event should not be sent.
* If the callback throws an exception, processing for the event is stopped and the event is not sent.
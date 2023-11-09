### `prehidingStyle` {#prehidingStyle}

| Type | Required | Default Value |
| -------- | ------------ | ----------------- |
| String   | No           | None              |

{style="table-layout:auto"}

Used to create a CSS style definition that hides content areas of your web page while personalized content is loaded from the server. If this option is not provided, the SDK does not attempt to hide any content areas while personalized content is loaded, potentially resulting in "flicker".

For example, if an element on your web page has an ID of `container`, whose default content you want to hide while personalized content is loaded from the server, use the following prehiding style:

```javascript
  prehidingStyle: "#container { opacity: 0 !important }"
```
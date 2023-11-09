## Sending non-XDM data

Data that does not match an XDM schema should be sent using the `data` option of the `sendEvent` command. This feature is supported in versions 2.5.0 and higher of the Web SDK.

This is useful if you need to update an Adobe Target profile or send Target Recommendations attributes. [Read more about these Target features.](../personalization/adobe-target/target-overview.md#single-profile-update)

In the future, you will be able to send your full data layer under the `data` option and map it to XDM server-side.

**How to send Profile and Recommendations attributes to Adobe Target:**

```javascript
alloy("sendEvent", {
  data: {
    __adobe: {
      target: {
        "profile.gender": "female",
        "profile.age": 30,
        "entity.id": "123",
        "entity.genre": "Drama"
      }
    }
  }
});
```
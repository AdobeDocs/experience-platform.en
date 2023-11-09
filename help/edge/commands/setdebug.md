## Toggling debugging with the Debug command

Toggle debugging with a separate `debug` command as follows:

```javascript
alloy("setDebug", {
  "enabled": true
});
```

If you prefer not to change code on your webpage or don't want logging messages to be produced for all users of your website, this is particularly useful because you can run the `debug` command within your browser's JavaScript console at any time.
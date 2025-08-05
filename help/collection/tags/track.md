## `track`

**Code**

```javascript
_satellite.track(identifier: string [, detail: *] )
```

**Example**

```javascript
_satellite.track('contact_submit', { name: 'John Doe' });
```

`track` fires all rules using the Direct Call event type that has been configured with the given identifier from the Core tag extension. The above example triggers all rules using a Direct Call event type where the configured identifier is `contact_submit`. An optional object containing related information is also passed. The detail object can be accessed by entering `%event.detail%` within a text field in a condition or action or `event.detail` inside the code editor in a Custom Code condition or action.
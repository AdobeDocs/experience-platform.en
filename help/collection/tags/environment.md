## `environment`

This object contains information about the environment that the current tag runtime library is deployed on.

**Code**

```javascript
_satellite.environment
```

The object contains the following properties:

```javascript
{
  id: "ENbe322acb4fc64dfdb603254ffe98b5d3",
  stage: "development"
}
```

| Property | Description |
| --- | --- |
| `id` | The id of the environment. |
| `stage` | The environment for which this library was built. The possible values are `development`, `staging`, and `production`. |
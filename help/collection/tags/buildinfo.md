## `buildInfo`

**Code**

```javascript
_satellite.buildInfo
```

This object contains information about the build of the current tag runtime library. The object contains the following properties:

### `turbineVersion`

This provides the [Turbine](https://www.npmjs.com/package/@adobe/reactor-turbine) version used inside the current library.

### `turbineBuildDate`

The ISO 8601 date when the version of [Turbine](https://www.npmjs.com/package/@adobe/reactor-turbine) used inside the container was built.

### `buildDate`

The ISO 8601 date when the current library was built.

This example demonstrates the object values:

```javascript
{
  turbineVersion: "14.0.0",
  turbineBuildDate: "2016-07-01T18:10:34Z",
  buildDate: "2016-03-30T16:27:10Z"
}
```
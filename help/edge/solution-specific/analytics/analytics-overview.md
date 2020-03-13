# Sending Data to Adobe Analtyics

The Adobe Experience Platform Web SDK can send data to Adobe Analytics. This works by translating `xdm` into a format the Adobe Analytics can use.

## Setup

Adobe Analytics will automatically pickup the data you are sending if you have a report suite mapped in the Customer Config UI. Here you can map one or more reportings to a given config. Once a report suite is mapped the data will automatically begin flowing.

## Automatically Mapped Data

The Adobe Experience Platform Edge Network will automatically map many XDM variables automatically. The complete list of automatically mapped variables is listed [here](../automatically-mapped-vars.md).

## Manually Mapped Data

All data collected by the edge network can be accessed via processing rules. The data is flattened using dot notation and available as contextData.

If I had a schema that looked like this.

```javascript
{
  key:value,
  object:{
    key1:value1,
    key2:value2
  },
  array:[
    v1,
    v2,
    v3
  ],
  arrayofobjects:[
    {
      obj1key:objval1
    },
    {
      obj2key:objval2
    }
  ]
}
```

Then these would be the context data key available to me.

```javascript
a.xdm.key //value
a.xdm.object.key1 //value1
a.xdm.object.key2 //value2
a.xdm.array[0] //v1
a.xdm.array[1] //v2
a.xdm.array[3] //v3
a.xdm.arrayofobjects[1].obj1key //objval1
a.xdm.arrayofobjects[2].obj2key //objval2
```

Here is an example of a processing rule that would use this data.

TODO: Screenshot of processing rule.

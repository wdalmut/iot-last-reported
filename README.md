# IOT Last Reported

Get last reported timestamp using metadata for AWS IOT Thing Shadow

```js
const time = require('iot-last-reported');

// from iot.getThingShadow().payload ...
metadata = {
  data: {
    timestamp: 132895761
  },
  something: {
    else: {
      timestamp: 1238767546
    }
  }
};

let timestamp = time(metdata);
```

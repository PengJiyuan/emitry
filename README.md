# emitry
simple event emitter.

## Why emitry?

* **Small** - The source code is less than 100 lines. After minified and gzipped, only 450B.
* **Simple** - Only 4 api, but it can solve most of the scenes.
* **Cross platform** - It can work on nodejs, browser...

## Install

```bash
npm i emitry
```

or

```html
<script src="/path/emitry.umd.min.js"></script>
```

```javascript
var emitry = new Emitry();
```

## Usage

```javascript
import Emitry from 'emitry';
const emitry = new Emitry();
```

## Api

#### on(name, (value1, value2, ...) => {})

Subscribe to an event.

```javascript
emitry.on('oh', (value1, value2) => {
  console.log(value1, value2);
});
```

#### once(name, value1, value2, ...)

Subscribe to an event. Only trigger once, after triggered will remove from events list.

```javascript
emitry.once('oh', (value1, value2) => {
  console.log(value1, value2);
});
```

#### emit(name, value1, value2, ...)

Emit an event.

```javascript
emitry.emit('oh', 'my god', 'my dear');  // 'mygod' 'my dear
```

#### off([names])

Remove specify events by a list of names.

```javascript
emitry.off(['a', 'b']);
```

#### off()

Remove all events.

```javascript
emitry.off();
```

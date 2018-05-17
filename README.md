# emitry
simple event emitter.

## Why emitry?

* **Small** - The source code is less than 100 lines. After minified and gzipped, only 390B.
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

#### emit(name, value1, value2, ...)

Emit an event.

```javascript
emitry.emit('oh', 'my god', 'my dear');
```

#### on(name, (value1, value2, ...) => {})

Subscribe to an event.

```javascript
emitry.on('oh', (value1, value2) => {
  console.log(value1, value2); // 'mygod' 'my dear
});
```

#### once(name, value1, value2, ...)

Subscribe to an event. Only trigger once, after triggered will remove from events list.

```javascript
emitry.once('oh', (value1, value2) => {
  console.log(value1, value2); // 'mygod' 'my dear
});
```

#### off([names])

Remove specify events by a list of names.

```javascript
emitry.on('a', 'haha', 'ddddd');
emitry.on('b', 'fdsf', 'fasfdsa');

emitry.off(['a', 'b']);
```

#### off()

Remove all events.

```javascript
emitry.off();
```

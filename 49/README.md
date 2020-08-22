## Experiment 49: The resize Event

#### New to Me
- The `resize` event fires when the document view (window) has been resized.
- In some earlier browsers, it was possible to register `resize` events on any HTML element.
- It is still possible to set `onresize` attributes or use `addEventListener()` to set a handler on an element.
- However, `resize` events are only fired on the `window` object (ie, returned by `document.defaultView`).
- Only handlers registered on the `window` object will receive `resize` events.
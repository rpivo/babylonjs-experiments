## Experiment 45: The DOMContentLoaded Event

#### New to Me
- The `DOMContentLoaded` event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
- This means that the document may not be completely painted yet, but the browser has everything that it needs because it's fully loaded and parsed the data.
- The original target for this event is the `Document` that has loaded.
- You can listen for this event on the `Window` interface to handle it in the capture or bubbling phases.
- A different event, `load`, should be used only to detect a fully-loaded page.
- It is a common mistake to use `load` where `DOMContentLoaded` would be more appropriate.
## Experiment 70: Using rollup-plugin-gzip's minSize Field

#### New to Me
- We can skip compressing empty or nearly empty files by setting the `minSize` field for rollup-plugin-gzip.
- Total file size: **36,315 bytes**
- By skipping compressing an empty file, our output size is about 0.01% smaller.
- We can probably start trying to locally run this in the browser.
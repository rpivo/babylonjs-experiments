## Experiment 66: Organizing Dependencies and Devdependencies for Rollup

#### New to Me
- In the previous experiment, I ran a Rollup build, and the package.json file had some modules in the dependencies section that should not have been there.
- I want to see if repositioning these modules as devDependencies will have any affect on the bundle size.
- To do this, I moved `@rollup/plugin-typescript`, `rollup`, and `typescript` from being dependencies to being devDependencies.
- Comparing the index.js of the before and after bundles, each file was 168 bytes, so no change there.
- Comparing the vendor bundle, each file was 1,093,575 bytes.
- Moving dependencies to devDependencies does not seem to have an affect here.
- It seems that Rollup is probably already treeshaking things that are not needed.
- Maybe we can look elsewhere to see if we can reduce the vendor bundle in other ways.
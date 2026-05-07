# Fallow Foo/Bar Namespace Reproduction

This is a minimal reproduction for a Fallow false positive.

Install and run:

```sh
yarn install --mode=skip-build
sfw yarn fallow dead-code --format compact
```

The repro uses `fallow@2.66.2`.

Actual output includes:

```text
unused-export:api/bar.ts:1:bar
```

Expected behavior: `bar` should be treated as used because `consumer.ts` reads
it through `API.foo.bar`.

The relevant export chain is:

```text
api/bar.ts
api/index.ts
consumer.ts
```

Flattening all files into the root package makes the finding disappear, so this
keeps the smallest package boundary that still reproduces the issue.

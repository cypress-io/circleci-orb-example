# circleci-orb-example [![renovate-app badge][renovate-badge]][renovate-app] [![CircleCI](https://circleci.com/gh/cypress-io/circleci-orb-example/tree/master.svg?style=svg)](https://circleci.com/gh/cypress-io/circleci-orb-example/tree/master)
> Cypress CircleCI Orb example

This repository shows how to use [cypress-io/circleci-orb](https://github.com/cypress-io/circleci-orb) to run Cypress on CircleCI with minimum configuration. See file [circle.yml](circle.yml).

The config is minimal since it uses commands from the Cypress orb, but you can see how it expands into the compiled using

```
npm run effective:config
```

## Examples

- simple Cypress run
- installing and building an app in the subfolder, but without running tests

For more Cypress orb examples, check out GitHub repos tagged [cypress-orb-example](https://github.com/topics/cypress-orb-example)

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/

## Orval Test Project

This is a test repository to determine how [Orval](https://orval.dev/reference/configuration/overview) works with next.js.

Current implementation has defaulted to using `orval.config.js` as the configuration file. Generated files such as the `types.ts` or the respective dtos can be found within `generated/` directory.

### Project Set-up and Installation

First clone the repository to your local machine. At the root directory, do a package install:

```
yarn install
```

This will install the necessary packages, notably orval for use.

### Running orval to create generated code

```
yarn run orval
```

An `orval` command has been created within `package.json` to run `orval` with the configuration file in mind. Run the above command see the `generated/` directory get populated.

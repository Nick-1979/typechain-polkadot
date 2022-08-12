
![created by sc](https://user-images.githubusercontent.com/24861482/182869484-fb90e4a9-6289-48a5-82ea-e8c9bc0097ad.png)



## Overview :page_facing_up:

Typechain was created by [Supercolony](supercolony.net) to improve developers’ experience working with ink! smartcontracts.


Nowadays, when technologies are growing faster and faster, we should think about optimizations of different routine processes and making older stuff better. One of these optimizations is to make code typesafe that will be flexible in different situations.

When a smart contract is being written, front-end developer receives file representation of it in the format called Application Binary Interface (ABI). One ABI per each contract, new ABI for every update of a contract.

Information about how to interact with a contract (methods names, arguments & returns types etc.) is included in this ABI file. It is not quite human-readable, so extraction of that information becomes a challenge. We need to have correct type definitions for each contract in TypeScript.

Interaction with blockchain is done with polkadot.js library, which only has abstract definitions for the contract in use, thus users' code cannot be typesafe. And Typechain-Polkadot can change it.


### Usage of Typechain-compiler

```bash
    npx typechain-compiler --config config.json
```

Also you can set some additional arguments like `--noCompile`, `--noTypechain`, `--release`

Config interface will be something like this:
```typescript
export interface Config {
    projectFiles: string[]; // Path to all project files, everystring in glob format
    skipLinting : boolean; // Skip linting of project files
    artifactsPath : string; // Path to artifacts folder, where artifacts will be stored it will save both .contract and .json (contract ABI)
    typechainGeneratedPath : string; // Path to typechain generated folder
}
```

### Project Details

Typesafe contracts' descriptions can be generated automatically by a script, taking a list of ABIs as an input, giving usable TS type definitions and even runtime code as its output.

Given, that a front-end developer needs to do this with every contracts update, such tool would save a lot of time and prevent mistakes of misusing smart contracts. It is installed as a package with built-in CLI.

When contracts descriptions come both with ABI and source code (`*.contract` files), our tool will provide means for deployment as well.


## Roadmap 🚗

Typechain participates in the Web3 Grants, you can find the roadmap there:
- [Grant I](https://github.com/Supercolony-net/Open-Grants-Program/blob/feature/typechain/applications/typechain-polkadot.md)
- Grant II - Comming soon....

-----------
#### Made with ❤️ by [Supercolony](https://supercolony.net)

---
id: working-on-nodecg-core
title: Working on NodeCG Core
sidebar_label: Working on NodeCG Core
---

NodeCG is an open-source project written by a core group of maintainers and a community of contributors. If you'd like to contribute to NodeCG itself, here's how to get started:

1. Install [Node.js (18)](http://nodejs.org/).
2. Clone NodeCG:

    ```bash
    git clone https://github.com/nodecg/nodecg.git
    ```

3. Open NodeCG in your editor of choice. Most of the devteam uses [VS Code](https://code.visualstudio.com/).
4. Install NodeCG's dependencies:

    ```bash
    npm install
    ```

5. Run NodeCG's development script, which automatically recompiles the client and server code whenever the source files on disk change. It also automatically restarts the server. It does **not** automatically refresh open browser pages.

    ```bash
    npm run dev
    ```

6. Make your changes.
7. If applicable, add tests for your changes by editing the appropriate file(s) in the [`test`](https://github.com/nodecg/nodecg/tree/master/test) directory.
8. Run the test suite:

    ```bash
    # Be sure that you have re-built NodeCG before running the tests!
    # If you're not sure, run `npm run build` before `npm test`.
    npm test
    ```

9. Once tests pass, push your changes and open a [pull request](https://github.com/nodecg/nodecg/pulls)!

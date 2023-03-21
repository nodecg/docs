---
id: editing-the-database
title: Manually editing the database
sidebar_label: Manually editing the database
---

As of v2.0.0, NodeCG is backed by a local sqlite3 database. This was done for internal reasons that make NodeCG's code better and easier to maintain, but it does mean that simple inspection, editing, and deletion of `*.rep` files (persisted Replicant values) is no longer possible.

Instead, deployment managers may use a tool such as [DB Browser](https://sqlitebrowser.org/) to open, inspect, and edit their NodeCG instance's database, including Replicant values. This should only be done when NodeCG isn't running.

To get started, simply use [DB Browser](https://sqlitebrowser.org/) to open `nodecg/db/nodecg.sqlite3`. Make your changes and save the file, and that's it!

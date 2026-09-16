---
title: SSR
description: Node SSR worker for Inertia page shells.
---

1. Use or copy `src/inertia/ssr/server.js` from this package
2. `smith inertia:start-ssr` (or `node bootstrap/ssr.js`)
3. `inertia.ssr_enabled = True`, `inertia.ssr_url = "http://127.0.0.1:13714"`

If the worker is down, the adapter falls back to the client-only shell
(`ssr_body` / `ssr_head` empty).

Smoke: with the worker up, first HTML contains both page JSON and SSR markup.

## Starter kits

SPA starter kits consume this adapter plus an official `@inertiajs/*` client.
See [docs.almasix.com/starter-kits](https://docs.almasix.com/starter-kits/).

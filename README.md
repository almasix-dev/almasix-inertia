# almasix-inertia

Server-side [Inertia.js](https://inertiajs.com) adapter for
[Almasix](https://github.com/almasix-dev/almasix). Use the **official**
`@inertiajs/vue3`, `@inertiajs/react`, or `@inertiajs/svelte` clients — this
package does not fork them. SSR uses Inertia’s Node SSR protocol.

```bash
pip install 'almasix[inertia]'
# or
pip install almasix-inertia
```

```python
from inertia import Inertia, lazy, defer

def dashboard():
    return Inertia.render("Dashboard", {
        "user": user,
        "stats": lazy(lambda: expensive()),
        "notes": defer(lambda: load_notes()),
    })
```

Root Prism template ships `@inertia` / `@inertiaHead`. Prop helpers: `lazy`,
`optional`, `defer`, `once`, `merge`. Page `url` honors `APP_BASE_PATH`.
A Node SSR stub lives at `src/inertia/ssr/server.js`.

SPA kits register `InertiaServiceProvider` explicitly; the package also
advertises it via the `almasix.providers` entry-point group.

Framework docs: [Inertia](https://almasix-dev.github.io/almasix/inertia/).

## Develop

```bash
pip install -e ".[dev]"
ruff check src tests && ruff format --check src tests
pytest -q
```

## Release

Tag `vX.Y.Z` matching `project.version` and publish a GitHub Release. The
publish workflow uses PyPI Trusted Publishing (OIDC).

## License

[MIT](LICENSE)

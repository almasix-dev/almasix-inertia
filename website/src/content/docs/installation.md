---
title: Installation
description: Install almasix-inertia and register the service provider.
---

```bash title="terminal"
pip install 'almasix[inertia]'
# or
pip install almasix-inertia
```

SPA starter kits already register `inertia.provider.InertiaServiceProvider`.
Otherwise list the provider in `config/app.py`, or rely on the
`almasix.providers` entry-point group when the package is installed.

Published on [PyPI](https://pypi.org/project/almasix-inertia/) from
[`almasix-dev/inertia`](https://github.com/almasix-dev/inertia).

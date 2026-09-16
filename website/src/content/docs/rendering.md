---
title: Rendering
description: Inertia.render, visit types, and the root Prism template.
---

```python title="examples/inertia.py"
from inertia import Inertia, lazy, defer

def dashboard():
    return Inertia.render("Dashboard", {
        "user": user,
        "stats": lazy(lambda: expensive_stats()),
        "notes": defer(lambda: load_notes()),
    })
```

| Visit type | Response |
| --- | --- |
| First (no `X-Inertia`) | Root Prism template with `@inertia` / `@inertiaHead` |
| Inertia (`X-Inertia: true`) | JSON page object |
| Version mismatch | `409` + `X-Inertia-Location` |
| External redirect | `Inertia.location(url)` → `409` + `X-Inertia-Location` |

The page `url` is built with `url()` so **`APP_BASE_PATH` is honored**.

## Partial reloads

Headers:

- `X-Inertia-Partial-Component`
- `X-Inertia-Partial-Data` (comma list)
- `X-Inertia-Partial-Except`

## Root template

```html title="resources/views/examples/inertia.prism.html"
<!DOCTYPE html>
<html>
<head>
  @inertiaHead
  @vite(['resources/js/app.jsx'])
</head>
<body>
  @inertia
</body>
</html>
```

## Asset versioning

```python title="examples/inertia.py"
Inertia.set_version("v42")
# or config inertia.version
```

Middleware `HandleInertiaRequests` (alias `inertia`) compares
`X-Inertia-Version` and forces a full reload on mismatch.

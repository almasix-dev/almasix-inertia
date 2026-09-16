---
title: Prop helpers
description: lazy, optional, defer, once, and merge helpers.
---

| Helper | Behavior |
| --- | --- |
| `Inertia.lazy` / `lazy()` | Omitted unless requested in a partial |
| `Inertia.optional` / `optional()` | Same as lazy |
| `Inertia.defer` / `defer()` | Listed in `deferredProps` for client follow-up |
| `Inertia.once` / `once()` | Evaluated once per response object |
| `Inertia.merge` / `merge()` | Listed in `mergeProps` for client merge |

```python title="examples/inertia.py"
from inertia import Inertia, lazy, defer, once, merge

return Inertia.render("Dashboard", {
    "stats": lazy(lambda: expensive()),
    "notes": defer(lambda: load_notes()),
})
```

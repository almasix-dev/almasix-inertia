---
title: Shared props
description: Share data across every Inertia response.
---

```python title="examples/inertia.py"
from inertia import Inertia

Inertia.share("app_name", config("app.name"))
Inertia.share(lambda: {"auth": {"user": current_user()}})
```

Session flash `errors` is merged into props when present.

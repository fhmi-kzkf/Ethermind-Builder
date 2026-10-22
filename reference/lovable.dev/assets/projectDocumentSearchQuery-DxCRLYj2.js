import {
    WP as s,
    rM as u
} from "./app-shared-6CLVfi8w.js";
import {
    c
} from "./vendor-tanstack-CIJxxCBL.js";
try {
    (function() {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new t.Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "752b17ed-51e7-4d7d-889e-2e9a9ad68025", t._sentryDebugIdIdentifier = "sentry-dbid-752b17ed-51e7-4d7d-889e-2e9a9ad68025")
    })()
} catch {}
var i = new TextEncoder;

function g(t) {
    const e = (t ? ? "").trim().toLowerCase();
    if (i.encode(e).length <= 512) return e;
    let r = 0,
        n = "";
    for (const o of e) {
        const d = i.encode(o).length;
        if (r + d > 512) break;
        r += d, n += o
    }
    return n.trim()
}

function f(t) {
    return [...s.documents(t), "search"]
}

function l(t, e) {
    return c({
        queryKey: [...f(t), e],
        queryFn: ({
            signal: r
        }) => u().get(`/projects/${t}/documents/search`, {
            signal: r,
            params: {
                query: e.query,
                kind: e.kind,
                sort_by: e.sortBy,
                sort_order: e.sortOrder,
                offset: String(e.offset),
                ...e.pageSize === void 0 ? {} : {
                    page_size: String(e.pageSize)
                }
            }
        }),
        retry: !1,
        staleTime: 0
    })
}
export {
    f as n, l as r, g as t
};
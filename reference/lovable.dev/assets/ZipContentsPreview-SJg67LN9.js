import {
    o as d
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    CR as f
} from "./app-shared-6CLVfi8w.js";
import {
    i as p,
    r as b
} from "./vendor-react-Fx2PtaaM.js";
import {
    c as x,
    l as _,
    o as h,
    s as g
} from "./i18n-fn/createForm-Bi-Sf3oW.js";
import {
    nl as u
} from "./app-lazy-shared-BNTl480s.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ba5105a3-1504-4a0b-9d89-5e401d87cbf6", e._sentryDebugIdIdentifier = "sentry-dbid-ba5105a3-1504-4a0b-9d89-5e401d87cbf6")
    })()
} catch {}
var c = d(p(), 1);

function k(e) {
    const [t, r] = (0, c.useState)(null);
    return (0, c.useEffect)(() => {
        if (!e) {
            r(null);
            return
        }
        let n = !0,
            s, l;
        const i = o => {
            n && (n = !1, clearTimeout(l), s ? .terminate(), r({
                request: e,
                result: o
            }))
        };
        try {
            s = new Worker(new URL("/assets/inspectZip.worker-BNYD_cgT.js", "" +
                import.meta.url), {
                type: "module"
            }), s.onmessage = o => i(o.data), s.onerror = () => i({
                status: "unavailable"
            }), s.onmessageerror = () => i({
                status: "unavailable"
            }), "file" in e && (l = setTimeout(() => i({
                status: "unavailable"
            }), 1e4)), s.postMessage(e)
        } catch {
            i({
                status: "unavailable"
            })
        }
        return () => {
            n = !1, clearTimeout(l), s ? .terminate()
        }
    }, [e]), e ? t ? .request === e ? t.result : {
        status: "pending"
    } : {
        status: "idle"
    }
}
var a = b(),
    m = 100;

function N({
    inspection: e,
    expanded: t = !1
}) {
    return (0, a.jsxs)("section", {
        className: "fs-mask space-y-2 text-sm",
        "aria-label": h(),
        children: [(0, a.jsx)("output", {
            className: "block font-medium tabular-nums",
            children: x({
                count: e.entries.length,
                size: u(e.declaredBytes)
            })
        }), (0, a.jsx)("ul", {
            className: f("rounded-2 overflow-auto border", t ? "max-h-[60dvh]" : "max-h-48"),
            "aria-label": g(),
            children: e.entries.slice(0, m).map((r, n) => (0, a.jsxs)("li", {
                className: "flex items-start justify-between gap-3 border-b p-2 last:border-b-0",
                children: [(0, a.jsx)("p", {
                    className: "min-w-0 font-mono text-xs break-all",
                    children: r.path
                }), (0, a.jsx)("span", {
                    className: "text-secondary-pulse shrink-0 text-xs tabular-nums",
                    children: u(r.bytes)
                })]
            }, `${r.path}-${n}`))
        }), e.entries.length > m && (0, a.jsx)("p", {
            className: "text-secondary-pulse text-xs",
            children: _({
                count: e.entries.length
            })
        })]
    })
}
export {
    k as n, N as t
};
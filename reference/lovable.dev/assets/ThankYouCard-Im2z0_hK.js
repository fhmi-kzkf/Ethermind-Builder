import {
    o as s
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    AN as n,
    JM as l
} from "./app-shared-6CLVfi8w.js";
import {
    i as o,
    r as d
} from "./vendor-react-Fx2PtaaM.js";
import {
    gg as m
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    Pt as c
} from "./settings-shared-leaves-B-HU8sMN.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "59063ab5-148b-48b1-baaa-e96b640a6655", e._sentryDebugIdIdentifier = "sentry-dbid-59063ab5-148b-48b1-baaa-e96b640a6655")
    })()
} catch {}
var u = s(o(), 1),
    t = d(),
    f = 4e3;

function g({
    message: e,
    onClose: r,
    autoCloseMs: a = f
}) {
    return (0, u.useEffect)(() => {
        if (a === null) return;
        const i = setTimeout(r, a);
        return () => clearTimeout(i)
    }, [a, r]), (0, t.jsxs)(n, {
        level: "secondary",
        elevation: "xl",
        className: "rounded-3 relative w-[min(28rem,calc(100vw-2rem))] p-6",
        children: [(0, t.jsxs)("output", {
            className: "flex flex-col items-center gap-3 py-4",
            children: [(0, t.jsx)(c, {
                "aria-hidden": !0,
                className: "text-primary-pulse size-8"
            }), (0, t.jsx)("p", {
                className: "text-primary-pulse text-center text-lg font-semibold",
                children: e
            })]
        }), (0, t.jsx)(l, {
            variant: "inverse",
            size: "md",
            className: "mt-3 w-full",
            onClick: r,
            children: m()
        })]
    })
}
export {
    g as t
};
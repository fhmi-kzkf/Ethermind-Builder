import {
    o as c
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    Tu as l
} from "./app-shared-6CLVfi8w.js";
import {
    i as m,
    r as x
} from "./vendor-react-Fx2PtaaM.js";
import {
    ov as u
} from "./app-lazy-shared-BNTl480s.js";
import {
    S as y,
    x as p
} from "./ui-shared-leaves-BBQog2OW.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "aa8323eb-d833-4f63-94ed-ca0a85398aa1", e._sentryDebugIdIdentifier = "sentry-dbid-aa8323eb-d833-4f63-94ed-ca0a85398aa1")
    })()
} catch {}
var g = c(m(), 1),
    i = x();

function h({
    step: e,
    actions: r,
    progress: o,
    header: a,
    children: d,
    slotBottom: t,
    ...s
}) {
    const [n, f] = (0, g.useState)({ ...e,
        direction: "none"
    });
    return (n.key !== e.key || n.index !== e.index) && f({ ...e,
        direction: e.index === n.index ? "none" : e.index > n.index ? "forward" : "backward"
    }), (0, i.jsx)(p, { ...s,
        padding: "none",
        children: (0, i.jsxs)("div", {
            className: "flex min-w-0 grow flex-col gap-2 p-4",
            children: [(0, i.jsx)(l, {
                transition: {
                    key: e.key,
                    direction: n.direction
                },
                children: (0, i.jsxs)("div", {
                    className: "flex min-w-0 flex-col gap-2",
                    children: [a && (0, i.jsx)(y, { ...a
                    }), d]
                })
            }), (0, i.jsx)("div", {
                className: "mt-auto empty:hidden",
                children: t
            }), (0, i.jsx)(u, {
                step: e,
                actions: r,
                progress: o
            })]
        })
    })
}
export {
    h as t
};
import {
    CR as l,
    Id as m,
    to as c
} from "./app-shared-6CLVfi8w.js";
import {
    r as b
} from "./vendor-react-Fx2PtaaM.js";
import {
    $u as u,
    ed as h
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    N as f
} from "./dashboard-shared-BN9MnewY.js";
import {
    Mv as p,
    Ov as x,
    Tv as g,
    bv as v,
    mv as C,
    pv as I,
    xv as _
} from "./app-lazy-shared-BNTl480s.js";
import {
    f as y
} from "./dashboard-icons-Dw3nX-fy.js";
import {
    i as M,
    r as a
} from "./inputActionMenu-CYU-xdmw.js";
import {
    t as j
} from "./ComposerPillReveal-BdbkP8Al.js";
try {
    (function() {
        var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new o.Error().stack;
        r && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[r] = "1d33c7c2-1194-49ec-966e-e2090efb450a", o._sentryDebugIdIdentifier = "sentry-dbid-1d33c7c2-1194-49ec-966e-e2090efb450a")
    })()
} catch {}
var e = b();

function P({
    projectId: o,
    labelClassName: r
}) {
    const {
        selectedModel: t,
        availableModels: n,
        selectModel: i
    } = M(o), d = m() && n.length > 0 && !!t && t !== "auto";
    return (0, e.jsx)(j, {
        show: d,
        children: (0, e.jsxs)(C, {
            items: n,
            value: t,
            onValueChange: s => s && i(s),
            itemToStringLabel: a,
            autoHighlight: !0,
            highlightItemOnHover: !0,
            children: [(0, e.jsx)(I, {
                variant: "outline",
                size: "sm",
                rounded: !0,
                icon: y,
                "aria-label": c(`Change model (${a(t)})`),
                "data-testid": "chat-input-model-override-pill",
                className: l("min-w-0 shrink", f),
                children: (0, e.jsx)("span", {
                    className: l("truncate", r),
                    children: a(t)
                })
            }), (0, e.jsxs)(v, {
                align: "start",
                className: "max-h-96 w-64",
                children: [(0, e.jsx)(p, {
                    placeholder: h()
                }), (0, e.jsx)(_, {
                    children: u()
                }), (0, e.jsx)(x, {
                    children: s => (0, e.jsx)(g, {
                        value: s,
                        children: a(s)
                    }, s)
                })]
            })]
        })
    })
}
export {
    P as t
};
import {
    o as h
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    JM as f,
    Om as y,
    cF as g,
    mv as b,
    pv as j
} from "./app-shared-6CLVfi8w.js";
import {
    i as P,
    r as N
} from "./vendor-react-Fx2PtaaM.js";
import {
    _ as k,
    a as E,
    c as I,
    d as C,
    f as D,
    g as S,
    h as w,
    i as T,
    m as $,
    n as z,
    o as A,
    p as O,
    r as L,
    s as M,
    t as q,
    u as B,
    y as F
} from "./i18n-fn/consentPreferences-CWpEKcV-.js";
import {
    sv as R
} from "./app-lazy-shared-BNTl480s.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "4ac423f4-81d4-4a3a-9c82-5d3088c937e1", e._sentryDebugIdIdentifier = "sentry-dbid-4ac423f4-81d4-4a3a-9c82-5d3088c937e1")
    })()
} catch {}
var a = h(P(), 1),
    s = N(),
    G = {
        essential: {
            title: T,
            description: L
        },
        marketing: {
            title: A,
            description: E
        },
        personalization: {
            title: I,
            description: M
        },
        analytics: {
            title: z,
            description: q
        }
    };

function W({
    initialPreferences: e,
    onSave: r,
    hideSaveButton: i,
    onDraftChange: d
}) {
    const [c, o] = (0, a.useState)(e), [m, x] = (0, a.useState)(e), [p, _] = (0, a.useState)({}), u = (0, a.useId)();
    m !== e && (x(e), o(e)), (0, a.useEffect)(() => {
        d ? .(c)
    }, [c, d]);

    function v(n, l) {
        n !== "essential" && o(t => ({ ...t,
            [n]: l
        }))
    }
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("p", {
            className: "text-tertiary-pulse pb-6 text-sm leading-6",
            children: y(w(), {
                policyLink: n => (0, s.jsx)(g, {
                    href: "/cookie-policy",
                    className: "underline",
                    children: n
                })
            })
        }), (0, s.jsx)("div", {
            className: "space-y-6 pb-4",
            children: b.map(n => {
                const l = G[n.id];
                return (0, s.jsxs)("section", {
                    className: "space-y-0.5",
                    children: [(0, s.jsxs)("div", {
                        className: "flex items-center justify-between gap-4",
                        children: [(0, s.jsx)("h3", {
                            id: `${u}${n.id}`,
                            className: "text-base leading-6 font-medium",
                            children: l.title()
                        }), (0, s.jsx)(R, {
                            "aria-labelledby": `${u}${n.id}`,
                            checked: c[n.id],
                            disabled: n.required,
                            onCheckedChange: t => v(n.id, t)
                        })]
                    }), (0, s.jsx)("p", {
                        className: "text-tertiary-pulse text-sm leading-6",
                        children: l.description()
                    }), (0, s.jsx)(f, {
                        variant: "link",
                        size: "xs",
                        className: "px-0 leading-6",
                        "aria-expanded": !!p[n.id],
                        onClick: () => _(t => ({ ...t,
                            [n.id]: !t[n.id]
                        })),
                        children: F()
                    }), p[n.id] && (0, s.jsx)(J, {
                        items: j(n.id)
                    })]
                }, n.id)
            })
        }), !i && (0, s.jsx)(f, {
            variant: "inverse",
            rounded: !0,
            className: "w-full",
            onClick: () => r(c),
            size: "lg",
            children: k()
        })]
    })
}

function J({
    items: e
}) {
    return e.length === 0 ? (0, s.jsx)("div", {
        className: "text-tertiary-pulse rounded-4 bg-primary-pulse px-4 py-3 text-sm font-medium",
        children: S()
    }) : (0, s.jsx)("div", {
        className: "space-y-2",
        children: e.map(r => (0, s.jsx)(Y, {
            item: r
        }, `${r.type}-${r.provider}-${r.name}`))
    })
}

function Y({
    item: e
}) {
    const r = [{
        id: "name",
        label: C(),
        value: e.name
    }, {
        id: "provider",
        label: D(),
        value: e.provider
    }, {
        id: "type",
        label: $(),
        value: e.type
    }, {
        id: "expiration",
        label: B(),
        value: e.expiration
    }, {
        id: "purpose",
        label: O(),
        value: e.purpose
    }].filter(i => !!i.value);
    return (0, s.jsx)("div", {
        className: "rounded-4 bg-primary-pulse px-4 py-3",
        children: (0, s.jsx)("div", {
            className: "space-y-3",
            children: r.map(i => (0, s.jsxs)("div", {
                className: "grid grid-cols-[4.75rem_minmax(0,1fr)] gap-3",
                children: [(0, s.jsx)("div", {
                    className: "text-primary-pulse text-xs font-medium",
                    children: i.label
                }), (0, s.jsx)("div", {
                    className: "text-tertiary-pulse text-xs leading-5",
                    children: i.value
                })]
            }, i.id))
        })
    })
}
export {
    W as t
};
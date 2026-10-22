import {
    o as g
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    Am as b,
    CI as p,
    CR as x,
    DN as _,
    EN as y,
    Nm as w,
    PD as f,
    aB as N,
    hC as j,
    wN as D
} from "./app-shared-6CLVfi8w.js";
import {
    i as k,
    r as I
} from "./vendor-react-Fx2PtaaM.js";
import {
    Ac as T,
    kc as S,
    nr as L
} from "./dashboard-shared-BN9MnewY.js";
import {
    ba as v
} from "./app-lazy-shared-BNTl480s.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "76260ba1-e422-4a4d-90dc-68f8dce493ad", e._sentryDebugIdIdentifier = "sentry-dbid-76260ba1-e422-4a4d-90dc-68f8dce493ad")
    })()
} catch {}
var m = g(k(), 1),
    a = I();

function W({
    project: e,
    notFocusable: t,
    compact: s = !1
}) {
    const [d, i] = L(e ? w(e) : void 0);
    if (!e) return (0, a.jsx)("div", {
        className: "text-tertiary-pulse flex h-full items-center justify-center",
        children: (0, a.jsx)(v, {
            className: "size-8 opacity-20"
        })
    });
    const n = N(),
        r = e.display_name || e.name || "Untitled project",
        o = p({
            name: "project",
            params: {
                projectId: e.id
            }
        });
    return (0, a.jsxs)("div", {
        className: x("flex h-full flex-col", s ? "min-h-0 gap-2" : "gap-3 overflow-y-auto p-3"),
        children: [(0, a.jsx)(S, {
            ref: i,
            render: (0, a.jsx)(j, {
                href: o,
                "aria-label": `Open ${r} in a new tab`,
                tabIndex: t ? -1 : void 0,
                newTab: !0
            }),
            interactive: !0,
            aspectRatio: "video",
            radius: s ? "sm" : void 0,
            className: x("w-full", s ? "min-h-0 shrink" : "shrink-0"),
            children: (0, a.jsx)(P, {
                src: d,
                alt: `Preview of ${r}`
            })
        }), (0, a.jsxs)("div", {
            className: x("flex shrink-0 flex-col text-sm", s ? "gap-2" : "gap-2.5"),
            children: [(0, a.jsxs)(y, {
                children: [(0, a.jsx)(_, {
                    render: (0, a.jsx)("h3", {
                        className: "truncate leading-tight font-medium",
                        children: r
                    })
                }), (0, a.jsx)(D, {
                    className: "fs-mask max-w-xs break-words",
                    children: r
                })]
            }), (0, a.jsxs)("div", {
                className: "text-tertiary-pulse grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs",
                children: [(0, a.jsx)(u, {
                    label: "Owner",
                    value: e.user_display_name
                }), (0, a.jsx)(u, {
                    label: "Status",
                    value: E(e)
                }), (0, a.jsx)(u, {
                    label: "Created",
                    value: e.created_at ? f(e.created_at, {
                        locale: n
                    }) : void 0
                }), (0, a.jsx)(u, {
                    label: "Last edited",
                    value: U(e, n)
                }), !s && (0, a.jsx)(u, {
                    label: "Last opened",
                    value: e.last_viewed_at ? f(e.last_viewed_at, {
                        locale: n
                    }) : void 0
                })]
            }), !s && e.description && (0, a.jsx)("p", {
                className: "text-tertiary-pulse text-xs leading-snug",
                children: e.description
            })]
        })]
    })
}

function P({
    src: e,
    alt: t
}) {
    const [s, d] = (0, m.useState)(void 0), i = s ? .startsWith("blob:") && s !== e ? void 0 : s, [n, r] = (0, m.useState)(() => new Set);
    (0, m.useEffect)(() => {
        (e === void 0 || n.has(e)) && d(void 0)
    }, [e, n]);
    const o = e !== void 0 && n.has(e),
        l = e && e !== i && !o ? e : void 0;
    return (0, a.jsxs)(a.Fragment, {
        children: [(o || !i || !e) && (0, a.jsx)(T, {
            children: (0, a.jsx)(v, {
                className: "text-quaternary-pulse size-6 opacity-50"
            })
        }), !o && i && e && (0, a.jsx)(b, {
            src: i,
            "data-fs-exclude": i ? .startsWith("blob:") || void 0,
            alt: t,
            fill: !0,
            sizes: "300px",
            className: "rounded-[inherit]",
            style: {
                objectFit: "cover",
                objectPosition: "top"
            }
        }), l && (0, a.jsx)(b, {
            src: l,
            "data-fs-exclude": l ? .startsWith("blob:") || void 0,
            alt: "",
            fill: !0,
            sizes: "300px",
            "aria-hidden": !0,
            className: "pointer-events-none absolute inset-0 opacity-0",
            onLoad: () => d(l),
            onError: () => {
                r(c => {
                    if (c.has(l)) return c;
                    const h = new Set(c);
                    return h.add(l), h
                }), d(void 0)
            }
        }, l)]
    })
}

function u({
    label: e,
    value: t
}) {
    return t ? (0, a.jsxs)("div", {
        className: "flex flex-col",
        children: [(0, a.jsx)("span", {
            className: "text-tertiary-pulse/70",
            children: e
        }), (0, a.jsx)("span", {
            className: "text-primary-pulse/80 truncate",
            children: t
        })]
    }) : null
}

function C(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}

function E(e) {
    return "is_published" in e && e.is_published ? "Published" : "visibility" in e && e.visibility ? C(e.visibility) : "Draft"
}

function U(e, t) {
    if ("last_edited_at" in e && e.last_edited_at) return f(e.last_edited_at, {
        locale: t
    });
    if (e.updated_at) return f(e.updated_at, {
        locale: t
    })
}
export {
    W as t
};
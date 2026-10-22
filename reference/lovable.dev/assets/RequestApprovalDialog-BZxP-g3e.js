import {
    o as v
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    JM as h,
    Kz as g,
    Om as q
} from "./app-shared-6CLVfi8w.js";
import {
    i as x,
    r as y
} from "./vendor-react-Fx2PtaaM.js";
import {
    b_ as c
} from "./app-lazy-shared-BNTl480s.js";
import {
    f as D
} from "./settings-shared-leaves-B-HU8sMN.js";
import {
    H as A,
    di as j,
    fi as N
} from "./route-shared-leaves-Cd6hFGLK.js";
import {
    g as w
} from "./ui-shared-leaves-BBQog2OW.js";
import {
    A as C,
    D as S,
    Et as R,
    F as k,
    M as T,
    N as E,
    O as K,
    P as L,
    j as O,
    k as U,
    l as z,
    z as I
} from "./i18n-fn/publish--publish-CZ1qJQT9.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "6a9ee6e3-1c10-4c0b-93e6-72f0c134b644", e._sentryDebugIdIdentifier = "sentry-dbid-6a9ee6e3-1c10-4c0b-93e6-72f0c134b644")
    })()
} catch {}
var M = v(x(), 1),
    o = y(),
    P = 2048,
    G = 3;

function H({
    approvers: e,
    approversTruncated: r,
    approverGroupCount: u
}) {
    const s = e.length,
        t = u > 0;
    if (s === 0) return t ? T() : O();
    const n = r ? `${s}+` : String(s);
    return t ? C({
        count: s,
        countLabel: n
    }) : U({
        count: s,
        countLabel: n
    })
}
var V = ({
        open: e,
        approvers: r,
        approversTruncated: u,
        approverGroupCount: s,
        initialNote: t,
        busy: n,
        error: p,
        onSend: a,
        onOpenChange: f
    }) => {
        const [_, b] = (0, M.useState)(t), d = r.slice(0, G), m = r.length - d.length;
        return (0, o.jsx)(c, {
            preventOutsideClose: n,
            open: e,
            onOpenChange: i => {
                !i && n || f(i)
            },
            children: (0, o.jsxs)(c.Content, {
                size: "sm",
                title: k(),
                closeLabel: R(),
                children: [(0, o.jsx)(c.Description, {
                    children: L()
                }), (0, o.jsx)(w, {
                    value: _,
                    onChange: i => b(i.target.value),
                    rows: 6,
                    maxLength: P,
                    placeholder: K(),
                    "aria-label": S(),
                    className: "fs-mask min-h-36",
                    disabled: n
                }), p && (0, o.jsx)("p", {
                    role: "alert",
                    className: "text-destructive-pulse text-sm wrap-anywhere",
                    children: p
                }), (0, o.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [d.length > 0 && (0, o.jsx)("span", {
                        "aria-hidden": "true",
                        "data-fs-exclude": !0,
                        className: "fs-mask flex shrink-0",
                        children: (0, o.jsxs)(N, {
                            children: [d.map(i => (0, o.jsx)(D, {
                                size: "sm",
                                user: {
                                    id: i.id,
                                    username: i.username,
                                    attributes: {
                                        display_name: i.displayName
                                    }
                                },
                                photoUrl: i.photoUrl
                            }, i.id)), m > 0 && (0, o.jsx)(j, {
                                size: "sm",
                                fallback: u ? "+" : `+${m}`
                            })]
                        })
                    }), (0, o.jsx)("p", {
                        className: "text-tertiary-pulse text-sm",
                        children: q(H({
                            approvers: r,
                            approversTruncated: u,
                            approverGroupCount: s
                        }), {
                            recipients: i => (0, o.jsx)("span", {
                                className: "text-primary-pulse font-medium",
                                children: i
                            })
                        })
                    })]
                }), (0, o.jsxs)(c.Actions, {
                    children: [(0, o.jsx)(h, {
                        variant: "outline",
                        disabled: n,
                        onClick: () => f(!1),
                        children: z()
                    }), (0, o.jsx)(h, {
                        variant: "accent",
                        loading: n,
                        loadingText: I(),
                        onClick: () => a(_.trim()),
                        children: E()
                    })]
                })]
            })
        })
    },
    l = g((e, r) => {
        const u = s => r().open && s === r().requestKey;
        return {
            request: null,
            requestKey: 0,
            open: !1,
            busy: !1,
            error: null,
            show: s => {
                const t = r().requestKey + 1;
                return e({
                    request: s,
                    requestKey: t,
                    open: !0,
                    busy: !1,
                    error: null
                }), t
            },
            send: s => {
                const {
                    request: t,
                    open: n
                } = r();
                !t || !n || (e({
                    busy: !0,
                    error: null
                }), t.onSend(s))
            },
            fail: (s, t) => u(t) ? (e({
                busy: !1,
                error: s
            }), !0) : !1,
            close: s => {
                const {
                    request: t
                } = r();
                !t || !u(s) || (e({
                    open: !1,
                    busy: !1,
                    error: null
                }), t.onClosed())
            },
            dismiss: () => {
                const {
                    request: s,
                    open: t,
                    busy: n
                } = r();
                !s || !t || (e({
                    open: !1,
                    busy: !1,
                    error: null
                }), n || s.onDismiss(), s.onClosed())
            }
        }
    }),
    Z = e => l.getState().show(e),
    ee = e => l.getState().close(e),
    se = (e, r) => l.getState().fail(e, r);

function re() {
    const e = l(a => a.request),
        r = l(a => a.requestKey),
        u = l(a => a.open),
        s = l(a => a.busy),
        t = l(a => a.error),
        n = l(a => a.send),
        p = l(a => a.dismiss);
    return A(p), (0, o.jsx)(V, {
        open: u,
        approvers: e ? .approvers ? ? [],
        approversTruncated: e ? .approversTruncated ? ? !1,
        approverGroupCount: e ? .approverGroupCount ? ? 0,
        initialNote: e ? .initialNote ? ? "",
        busy: s,
        error: t,
        onSend: n,
        onOpenChange: a => !a && p()
    }, r)
}
export {
    se as a, ee as i, V as n, Z as o, re as r, P as t
};
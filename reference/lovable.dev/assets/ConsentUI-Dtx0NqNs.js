import {
    o as C
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    CR as D,
    DO as S,
    FO as y,
    JM as l,
    K_ as o,
    Y_ as I,
    av as P,
    cF as j,
    cv as h,
    hv as A,
    iv as O,
    jF as E,
    jN as R,
    nv as F,
    rv as L,
    tv as V,
    zO as T
} from "./app-shared-6CLVfi8w.js";
import {
    i as z,
    r as M
} from "./vendor-react-Fx2PtaaM.js";
import {
    a as b,
    c as Y,
    i as q,
    l as J,
    n as K,
    o as U,
    r as G,
    s as H,
    t as Q
} from "./i18n-fn/consentBanner-51CXe0NS.js";
import {
    _ as W,
    l as X,
    v as Z
} from "./i18n-fn/consentPreferences-CWpEKcV-.js";
import {
    bb as $
} from "./app-lazy-shared-BNTl480s.js";
import {
    t as ee
} from "./ConsentPreferencesForm-BVRtd7Jy.js";
try {
    (function() {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new t.Error().stack;
        r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "6551e818-b224-4c97-8d9c-14d884d98003", t._sentryDebugIdIdentifier = "sentry-dbid-6551e818-b224-4c97-8d9c-14d884d98003")
    })()
} catch {}
var d = C(z(), 1),
    e = M(),
    ne = {
        marketing: "md:right-4",
        app: "md:right-6 md:bottom-6"
    },
    te = {
        accept_all: Q,
        ok: H
    };

function se({
    bucket: t,
    onAcceptAll: r,
    onDoNotSell: m,
    onRejectAll: c,
    onManagePreferences: s,
    displayEnvironment: f = "marketing"
}) {
    const a = A(t),
        u = a.showRejectAllButton || a.showDoNotSellButton,
        i = te[a.acceptLabelId]();
    return (0, e.jsxs)(R, {
        elevation: "md",
        render: (0, e.jsx)("section", {
            "aria-label": K()
        }),
        className: D("rounded-8 fixed z-[9500] flex flex-col gap-4 p-6 md:w-72", "inset-x-4 bottom-[calc(env(safe-area-inset-bottom,0px)+1rem)] md:left-auto", ne[f]),
        children: [(0, e.jsx)("div", {
            className: "text-sm max-md:text-center max-md:text-pretty",
            children: (0, e.jsxs)("span", {
                children: [U(), " ", (0, e.jsx)(j, {
                    href: "/privacy",
                    className: "text-sm underline",
                    children: Y()
                }), a.allowAllPreDecision && (0, e.jsxs)(e.Fragment, {
                    children: [" ", "·", " ", (0, e.jsx)(j, {
                        href: "/cookie-policy",
                        className: "text-sm underline",
                        children: G()
                    })]
                })]
            })
        }), (0, e.jsx)("div", {
            className: "flex flex-col gap-2.5",
            children: u ? (0, e.jsxs)(e.Fragment, {
                children: [(0, e.jsx)(l, {
                    className: "w-full",
                    "data-testid": "consent-accept-all-button",
                    onClick: r,
                    children: i
                }), (0, e.jsxs)("div", {
                    className: "flex gap-2.5 max-md:flex-row md:flex-col",
                    children: [(0, e.jsx)(l, {
                        variant: "ghost",
                        "data-testid": "consent-manage-preferences-button",
                        onClick: s,
                        className: "w-full",
                        children: b()
                    }), a.showRejectAllButton && (0, e.jsx)(l, {
                        variant: "ghost",
                        "data-testid": "consent-reject-all-button",
                        onClick: c,
                        className: "w-full",
                        children: J()
                    }), a.showDoNotSellButton && (0, e.jsx)(l, {
                        variant: "ghost",
                        "data-testid": "consent-do-not-sell-button",
                        onClick: m,
                        className: "w-full",
                        children: q()
                    })]
                })]
            }) : (0, e.jsxs)("div", {
                className: "flex gap-2.5 max-md:flex-row md:flex-col",
                children: [(0, e.jsx)(l, {
                    variant: "ghost",
                    "data-testid": "consent-manage-preferences-button",
                    onClick: s,
                    className: "max-md:flex-1 md:w-full",
                    children: b()
                }), (0, e.jsx)(l, {
                    className: "max-md:flex-1 md:order-first md:w-full",
                    "data-testid": "consent-accept-all-button",
                    onClick: r,
                    children: i
                })]
            })
        })]
    })
}

function ae({
    onOpenChange: t,
    onSave: r,
    open: m,
    initialPreferences: c
}) {
    const [s, f] = (0, d.useState)(c), a = (0, d.useCallback)(u => {
        f(u)
    }, []);
    return (0, e.jsx)(T, {
        open: m,
        onOpenChange: t,
        children: (0, e.jsxs)(y, {
            closeButton: {
                hidden: !0
            },
            className: "rounded-6 max-h-[min(90dvh,46rem)] grid-rows-[auto_minmax(0,1fr)_auto] gap-0 space-y-6 pr-1",
            children: [(0, e.jsx)(S, {
                title: Z(),
                description: X(),
                descriptionSrOnly: !0
            }), (0, e.jsx)($, {
                children: (0, e.jsx)("div", {
                    className: "pr-4",
                    children: (0, e.jsx)(ee, {
                        initialPreferences: c,
                        onSave: r,
                        hideSaveButton: !0,
                        onDraftChange: a
                    })
                })
            }), (0, e.jsx)("div", {
                className: "pt-2 pr-4",
                children: (0, e.jsx)(l, {
                    variant: "inverse",
                    rounded: !0,
                    className: "w-full",
                    onClick: () => r(s),
                    size: "lg",
                    children: W()
                })
            })]
        })
    })
}

function fe({
    displayEnvironment: t,
    suppressBannerOnRoute: r
}) {
    const m = E(),
        c = r ? .(m) ? ? !1,
        s = o(n => n.bucket),
        f = o(n => n.isIOSApp),
        a = o(n => n.isDialogOpen),
        u = o(I),
        i = o(V),
        N = o(n => n.acceptAll),
        k = o(n => n.doNotSell),
        w = o(n => n.rejectAll),
        v = o(n => n.setDialogOpen),
        B = o(n => n.persistDecision),
        x = t ? ? "marketing",
        _ = (0, d.useRef)(!1),
        g = (0, d.useRef)(!1);
    (0, d.useEffect)(() => {
        c || !i || !s || _.current || (_.current = !0, h(L, {
            bucket: s,
            displayEnvironment: x,
            bannerVersion: "v2"
        }))
    }, [c, s, x, i]), (0, d.useEffect)(() => {
        a && (g.current = !1)
    }, [a]);
    const p = n => {
        h(F, {
            action: n,
            bucket: s ? ? "unknown",
            displayEnvironment: x,
            bannerVersion: "v2"
        })
    };
    return (0, e.jsxs)(e.Fragment, {
        children: [!c && i && s && (0, e.jsx)(se, {
            bucket: s,
            onAcceptAll: () => {
                p("accept_all"), N()
            },
            onDoNotSell: () => {
                p("do_not_sell"), k()
            },
            onRejectAll: () => {
                p("reject_all"), w()
            },
            onManagePreferences: () => {
                p("manage_preferences"), h(P, {
                    source: "banner",
                    bucket: s
                }), v(!0)
            },
            displayEnvironment: t
        }), !f && (0, e.jsx)(ae, {
            open: a,
            onOpenChange: n => {
                !n && !g.current && h(O, {
                    saved: !1,
                    bucket: s ? ? "unknown"
                }), v(n)
            },
            initialPreferences: u,
            onSave: n => {
                g.current = !0, B(n, "preferences_save")
            }
        })]
    })
}
export {
    fe as ConsentUI
};
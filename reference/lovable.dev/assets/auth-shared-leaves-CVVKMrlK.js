import {
    o as I
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    CR as P,
    DF as _,
    JT as j,
    KT as O,
    NF as x,
    Nx as N,
    QI as k,
    eR as A,
    lw as C
} from "./app-shared-6CLVfi8w.js";
import {
    i as q,
    r as E
} from "./vendor-react-Fx2PtaaM.js";
import {
    An as S,
    Br as F,
    En as l,
    In as R,
    Ln as T,
    Mn as w,
    Nn as M,
    Pn as U,
    Pr as W,
    Rn as L,
    Sn as $,
    Ur as z,
    kn as D,
    yn as B,
    zn as H
} from "./route-shared-leaves-Cd6hFGLK.js";
try {
    (function() {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new t.Error().stack;
        r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "7988f516-d866-4c35-ac20-3403016c327c", t._sentryDebugIdIdentifier = "sentry-dbid-7988f516-d866-4c35-ac20-3403016c327c")
    })()
} catch {}
var J = E(),
    Y = ({
        size: t,
        isInteractive: r = !1,
        className: s,
        radiusClassName: o = "rounded-2",
        workspace: a,
        ...c
    }) => {
        const d = z(a ? .id),
            g = a ? .name,
            f = a ? .image_url ? ? void 0;
        return (0, J.jsx)(F, {
            size: t,
            name: g,
            isInteractive: r,
            photoSrc: f,
            userColor: d,
            className: P(o, s),
            ...c
        })
    },
    u = I(q(), 1);

function K() {
    const t = x(),
        r = _(),
        s = N(),
        o = A(),
        a = W(e => e.project ? .id),
        c = (0, u.useCallback)(e => e !== void 0 ? e ? ? void 0 : a, [a]),
        d = (0, u.useCallback)(e => {
            if (!o) return;
            R(e.source);
            const n = r || "/dashboard",
                i = n.includes("/settings"),
                h = C(),
                b = U(h);
            !i && !b && j(n);
            const v = c(e ? .projectId),
                p = S({
                    pathname: n,
                    currentSearch: h,
                    queryParams: e ? .queryParams,
                    projectId: v
                }),
                m = e ? .replace === !0,
                y = m ? "replace" : "push";
            k(() => {
                l.getState().setDialogOpen(!0), l.getState().setForceCentered(e.centered === !0), e.creationContext && l.getState().setCreationContext(e.creationContext), s.emit(B, {
                    source: e.source
                }), L(), !D(p, y) && (m ? t.replace(p) : t.push(p))
            })
        }, [s, o, r, c, t]),
        g = (0, u.useCallback)(e => {
            const n = c(e ? .projectId),
                i = C();
            return S({
                pathname: r || "/dashboard",
                currentSearch: i,
                queryParams: e ? .queryParams,
                projectId: n
            })
        }, [r, c]),
        f = (0, u.useCallback)(() => {
            w(), l.getState().reset(), $.getState().setConnectionId(null);
            const e = T(C()).toString(),
                n = r || "/dashboard";
            n.includes("/settings") || O();
            const i = e ? `${n}?${e}` : n;
            D(i, "replace") || t.replace(i)
        }, [r, t]);
    return (0, u.useMemo)(() => ({
        navigateToConnectors: d,
        getConnectorsHref: g,
        closeConnectorsDialog: f
    }), [d, g, f])
}

function Z(t = "dashboard_sidebar") {
    const r = l(a => a.isDialogOpen),
        {
            navigateToConnectors: s,
            closeConnectorsDialog: o
        } = K();
    return {
        toggleConnectors: (0, u.useCallback)(() => {
            if (!M()) {
                if (l.getState().isDialogOpen) {
                    if (H.getState().isDirty) return;
                    o();
                    return
                }
                s({
                    source: t
                })
            }
        }, [o, s, t]),
        isActive: r
    }
}
export {
    Z as n, Y as r, K as t
};
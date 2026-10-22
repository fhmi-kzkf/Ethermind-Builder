import {
    o as K
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    $j as V,
    Cz as A,
    Yj as q,
    Zj as z,
    jT as J,
    kT as T,
    lz as C,
    oR as N,
    rF as k,
    rR as O,
    tF as U,
    tM as Q,
    yv as M
} from "./app-shared-6CLVfi8w.js";
import {
    u as H,
    w as j
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    i as Y
} from "./vendor-react-Fx2PtaaM.js";
import {
    bd as Z,
    ia as $,
    oa as G
} from "./app-lazy-shared-BNTl480s.js";
try {
    (function() {
        var i = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new i.Error().stack;
        t && (i._sentryDebugIds = i._sentryDebugIds || {}, i._sentryDebugIds[t] = "200c3f48-60fb-42f0-b7ac-051fb3c636e7", i._sentryDebugIdIdentifier = "sentry-dbid-200c3f48-60fb-42f0-b7ac-051fb3c636e7")
    })()
} catch {}
var d = K(Y(), 1);

function I(i) {
    const t = A();
    return !!i && i === t
}
var y = new WeakMap;

function L(i, t = !0) {
    const r = A(),
        e = I(i);
    t = t && e;
    const s = T({
            projectId: i
        }),
        n = O(),
        o = N(),
        c = !!i && r === i,
        a = n === "authenticated" && o === !0,
        b = t && c && (n === "authenticating" || !s.isResolved),
        l = c && a && (s.isError || s.isResolved && (!s.permissions.includes(C.ViewProject) || !s.permissions.includes(C.ViewProjectDocuments))),
        m = t && c && !b && !a,
        f = t && c && a && s.isResolved && !l;
    return {
        eligible: f,
        isLoading: b,
        isAccessDenied: l,
        isUnavailable: m,
        canWrite: f && s.permissions.includes(C.EditProject)
    }
}

function W(i, t, r = !0) {
    const e = L(t.projectId, r),
        s = j(),
        n = q(i, t, {
            enabled: e.eligible
        }),
        o = Q(),
        c = U(i, t),
        a = (0, d.useMemo)(() => {
            let p, F;
            return () => {
                const u = e.eligible ? o ? .getSnapshot(c) : void 0;
                return u ? .status === "subscribed" && u.data && ((!y.has(u.data) || p !== void 0 && p.status !== "subscribed" && y.get(u.data) !== u) && y.set(u.data, u), F = y.get(u.data)), p = u, u && !k(u.status, u.error) ? F : void 0
            }
        }, [o, c, e.eligible]),
        b = (0, d.useCallback)(p => !e.eligible || !o ? () => {} : o.subscribeToKey(c, () => {
            a(), p()
        }), [o, c, e.eligible, a]),
        l = (0, d.useSyncExternalStore)(b, a, () => {}),
        m = z(),
        f = V(),
        g = k(n.status, n.error),
        v = e.isAccessDenied || e.eligible && n.error ? .code === "permission_denied",
        h = e.eligible && !g ? n.data : void 0,
        P = h !== void 0 && (m || n.status !== "subscribed"),
        E = e.isUnavailable || v || e.eligible && (g || f || n.error !== void 0),
        R = e.eligible && !g && !f && n.status === "connecting",
        {
            projectId: _
        } = t,
        D = e.eligible,
        x = (0, d.useCallback)(async () => {
            !E && !P || (D && Q() ? .reconnect(), await J(s, _))
        }, [D, E, P, _, s]);
    return {
        data: h,
        snapshot: l,
        status: n.status,
        error: n.error,
        isStale: P,
        isAccessDenied: v,
        isError: E,
        isLoading: e.isLoading || h === void 0 && R,
        isFetching: R,
        canRequest: e.eligible,
        canRead: e.eligible && !v && !g,
        recover: x
    }
}
var w = new WeakMap;

function S(i, t = !0) {
    const r = Z() && t,
        e = L(i),
        s = T({
            projectId: i
        }),
        n = A(),
        o = !!i && i === n,
        c = o && e.eligible;
    return {
        eligible: c,
        isActive: r,
        canWrite: c && e.canWrite,
        isPending: o && e.isLoading,
        error: o && s.isError ? "access-denied" : null
    }
}

function oe(i) {
    const {
        eligible: t,
        canWrite: r,
        isPending: e,
        error: s
    } = S(i);
    return (0, d.useMemo)(() => ({
        canRead: t,
        canWrite: r,
        isPending: e,
        isError: s !== null,
        error: s
    }), [r, t, s, e])
}

function X(i, t, r = !0) {
    const e = i.eligible && r,
        s = M(async () => {
            !e || !i.isActive || await t.refetch()
        }),
        n = i.error ? ? (e && t.isError ? G(t.error) : null),
        o = e ? t.data : void 0,
        c = i.isPending || e && t.isPending,
        a = e && t.isFetching;
    return (0, d.useMemo)(() => ({
        data: o,
        isPending: c,
        isFetching: a,
        isError: n !== null,
        isStale: a || n !== null,
        error: n,
        recover: s
    }), [o, n, a, c, s])
}

function B(i, t, r) {
    const e = i.error ? ? (i.eligible && t.isAccessDenied ? "access-denied" : i.eligible && t.isError ? "request-failed" : null),
        s = M(async () => {
            i.eligible && i.isActive && await t.recover()
        });
    return {
        data: i.eligible ? r : void 0,
        isPending: i.isPending || t.isLoading,
        isFetching: t.isFetching,
        isError: e !== null,
        isStale: t.isStale,
        error: e,
        recover: s
    }
}

function ee(i, t = !0) {
    const r = S(i, t),
        e = W("project_collection_list", {
            projectId: i
        }, r.eligible && r.isActive);
    return { ...B(r, e, (0, d.useMemo)(() => e.data ? .collections ? .map(s => ({ ...s,
            preview_paths: s.preview_paths ? ? []
        })) ? ? (e.data ? [] : void 0), [e.data])),
        documents: r.eligible ? e.data ? .documents ? ? [] : [],
        snapshot: r.eligible ? e.snapshot : void 0,
        status: e.status
    }
}

function ae(i, t, r = !0) {
    const e = S(i, r),
        s = W("project_collection_view", {
            projectId: i,
            collectionId: t
        }, e.eligible && e.isActive && !!t),
        n = (0, d.useMemo)(() => {
            if (s.data) return s.data.collection ? { ...s.data.collection,
                members: s.data.members ? .map(({
                    path: a
                }) => a) ? ? []
            } : null
        }, [s.data]),
        o = (0, d.useMemo)(() => e.eligible ? s.data ? .members ? .flatMap(({
            path: a,
            document: b
        }) => b ? [{ ...b,
            id: a
        }] : []) ? ? [] : [], [e.eligible, s.data]),
        c = (0, d.useMemo)(() => e.eligible ? s.data ? .members ? .filter(({
            document: a
        }) => !a).map(({
            path: a
        }) => a) ? ? [] : [], [e.eligible, s.data]);
    return { ...B(e, s, n),
        documents: o,
        unresolvedPaths: c
    }
}

function ce(i, t, r = !0) {
    const e = S(i, r),
        s = t.length > 0,
        n = ee(i, r && s),
        o = j(),
        c = $(i, t),
        a = H({ ...c,
            enabled: e.isActive && e.eligible && s && n.data !== void 0
        }),
        b = JSON.stringify(c.queryKey);
    (0, d.useEffect)(() => {
        if (!e.isActive || !e.eligible || !s || !n.snapshot) return;
        const f = {
                queryKey: JSON.parse(b),
                exact: !0
            },
            g = o.getQueryCache().find(f);
        if (!g) return;
        const v = w.get(g);
        if (v === n.snapshot) return;
        const h = v !== void 0 && g.state.fetchStatus === "fetching";
        w.set(g, n.snapshot), o.invalidateQueries(f, {
            cancelRefetch: !1
        }).then(() => {
            h && w.get(g) === n.snapshot && o.refetchQueries({ ...f,
                type: "active"
            }, {
                cancelRefetch: !1
            })
        })
    }, [o, b, e.isActive, e.eligible, s, n.snapshot, n.status]);
    const l = X(e, a, s),
        m = M(async () => {
            !e.eligible || !e.isActive || !s || (n.isError || n.data === void 0 ? await n.recover() : await l.recover())
        });
    return { ...l,
        data: n.data === void 0 ? void 0 : l.data,
        recover: m,
        isPending: !n.isError && (l.isPending || n.isPending),
        isStale: l.isStale || n.isStale,
        isError: l.isError || n.isError,
        error: l.error ? ? n.error
    }
}
export {
    L as a, ee as i, oe as n, W as o, ae as r, I as s, ce as t
};
import {
    o as U
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    AR as A,
    Cz as Z,
    GP as J,
    HM as M,
    LR as Q,
    NR as O,
    ZL as W,
    iR as X,
    jT as Y,
    kT as $,
    lz as g,
    yv as P
} from "./app-shared-6CLVfi8w.js";
import {
    u as j,
    w as I
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    i as ee
} from "./vendor-react-Fx2PtaaM.js";
import {
    ca as se,
    la as k,
    ra as b,
    sa as V,
    ua as te
} from "./app-lazy-shared-BNTl480s.js";
import {
    x
} from "./i18n-fn/files--filesCollections-Be1YgheF.js";
try {
    (function() {
        var s = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            d = new s.Error().stack;
        d && (s._sentryDebugIds = s._sentryDebugIds || {}, s._sentryDebugIds[d] = "547e0f96-fb66-4dd8-a776-8ff7a9dc6505", s._sentryDebugIdIdentifier = "sentry-dbid-547e0f96-fb66-4dd8-a776-8ff7a9dc6505")
    })()
} catch {}
var S = U(ee(), 1),
    B = [g.ViewProject, g.ViewProjectArtifacts, g.ViewProjectDocuments];

function ue(s, d, T = !0, q) {
    const z = Z(),
        u = X(),
        G = (0, S.use)(W),
        m = I(),
        p = $({
            projectId: s ? ? "",
            enabled: !!s
        }),
        D = !!(u && s && s === z),
        y = T && D && p.isResolved && !p.isError && B.every(i => p.permissions.includes(i)),
        h = d === void 0 || te(d),
        K = [...b.presentations(s ? ? ""), u, y],
        C = [...K, d ? ? null],
        E = (0, S.useRef)(!1);
    (0, S.useLayoutEffect)(() => (E.current = !0, () => {
        E.current = !1
    }), []);
    const _ = P((i = u, o = s, n = !1) => {
            const a = G ? .getState().state,
                c = m.getQueryState(J.get(void 0, o ? ? ""));
            return !!(E.current && y && u === i && s === o && a ? .status === "authenticated" && a.user.uid === i && c ? .status === "success" && B.every(l => c.data ? .includes(l)) && (!n || c.data ? .includes(g.EditProject)))
        }),
        R = P((i = u, o = s) => {
            const n = m.getQueryState(C);
            return _(i, o) && n ? .status === "success" && n.data ? .status === "ready"
        }),
        r = j({
            queryKey: C,
            queryFn: async ({
                signal: i
            }) => {
                try {
                    return await k({
                        projectId: s,
                        artifactIds: d,
                        signal: i
                    })
                } catch (o) {
                    throw O(o) && _(u, s) && Y(m, s), o
                }
            },
            enabled: y && h,
            retry: !1,
            staleTime: q ? .staleTime ? ? 0,
            gcTime: q ? .gcTime,
            placeholderData: (i, o) => {
                const n = o ? .queryKey.at(-1);
                if (q ? .keepPreviousMentions && y && h && d && i ? .status === "ready" && o ? .queryKey.length === C.length && K.every((a, c) => a === o.queryKey[c]) && Array.isArray(n) && n.length > 0 && n.every(a => d.includes(a))) return i
            }
        }),
        v = y && h && r.isSuccess && r.data.status === "ready",
        w = y && (r.isError || r.data ? .status === "error"),
        F = r.error instanceof V || r.error instanceof A && (Q(r.error) && r.error.status !== 408 || ["sso_reauth_required", "mfa_enrollment_required", "access_denied"].includes(r.error.type)),
        H = P(() => {
            !_(u, s, !0) || !w || F || r.isFetching || r.refetch()
        });
    return {
        projectId: s,
        actorId: u,
        eligible: y,
        available: v,
        isScopeCurrent: _,
        resolveCurrent: P(async (i, o = !1) => {
            const n = se(r.data ? .collections ? ? [], i);
            if (!n || !R() || !_(u, s, o) || o && !n.can_reference) return;
            const a = n.artifact_id,
                c = u,
                l = s,
                L = () => {
                    _(c, l) && m.setQueriesData({
                        queryKey: [...b.presentations(l), c],
                        predicate: e => e.state.status === "success"
                    }, e => e && { ...e,
                        collections: e.collections.filter(t => t.artifact_id !== a),
                        resolutions: e.resolutions.map(t => t.resource_id === a || t.resource_id === n.collection_id ? {
                            resource_id: t.resource_id,
                            resource_type: t.resource_type,
                            status: "unavailable"
                        } : t)
                    })
                },
                N = e => {
                    _(c, l) && m.setQueriesData({
                        queryKey: [...b.presentations(l), c],
                        predicate: t => t.state.status === "success"
                    }, t => t && { ...t,
                        collections: t.collections.map(f => f.artifact_id === e.artifact_id ? e : f)
                    })
                };
            try {
                const e = await m.fetchQuery({
                    queryKey: [...b.presentations(l), c, "open", a],
                    queryFn: ({
                        signal: f
                    }) => k({
                        projectId: l,
                        artifactIds: [a],
                        signal: f
                    }),
                    retry: !1,
                    staleTime: 0,
                    gcTime: 0
                });
                if (!R(c, l) || !_(c, l, o)) return;
                if (e.resolutions.some(f => f.resource_id === a && f.status === "error")) {
                    M.error(x());
                    return
                }
                const t = e.collections.find(f => f.artifact_id === a);
                if (!t || t.collection_id !== n.collection_id) {
                    L();
                    return
                }
                return N(t), o && !t.can_reference ? void 0 : t
            } catch (e) {
                e instanceof V || e instanceof A && (e.status !== void 0 ? Q(e) && e.status !== 408 : e.type === "sso_reauth_required" || e.type === "mfa_enrollment_required" || e.type === "access_denied") ? L() : (!(e instanceof A) || e.type !== "aborted") && M.error(x());
                return
            }
        }),
        collections: v ? r.data.collections : [],
        canReference: v && p.permissions.includes(g.EditProject),
        hasError: w,
        ...w && !F && p.permissions.includes(g.EditProject) ? {
            retry: H
        } : {},
        isLoading: T && h && D && (!p.isResolved || y && (r.isPending || r.isPlaceholderData || !v && r.isFetching))
    }
}
export {
    ue as t
};
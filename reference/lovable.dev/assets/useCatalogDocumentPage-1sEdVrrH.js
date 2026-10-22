import {
    o as Re
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    $L as Te,
    AR as Le,
    Cz as ze,
    FI as Ne,
    Gs as De,
    JM as Oe,
    gL as Ae,
    jT as We,
    lz as me,
    mT as Ke,
    qd as qe,
    tM as Fe
} from "./app-shared-6CLVfi8w.js";
import {
    t as oe,
    u as Ce,
    v as _e,
    w as Me
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    i as Ie,
    r as Be
} from "./vendor-react-Fx2PtaaM.js";
import {
    Qr as Ve
} from "./i18n-fn/_misc-D8ok4lJW.js";
import {
    Cn as Je,
    In as Ue
} from "./dashboard-shared-BN9MnewY.js";
import {
    z as $e
} from "./settings-shared-leaves-B-HU8sMN.js";
import {
    f as Ye
} from "./i18n-fn/files--filesView-BsBUOYUF.js";
import {
    n as Xe,
    t as Ge
} from "./useMissionWorkspaceFileHiding-jWt1A4fw.js";
import {
    a as He,
    o as ve
} from "./useProjectCollections-COcyY8F-.js";
import {
    n as pe,
    r as Ze,
    t as et
} from "./projectDocumentSearchQuery-DxCRLYj2.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6077baef-0316-4acd-b9d7-c310aed30bbf", e._sentryDebugIdIdentifier = "sentry-dbid-6077baef-0316-4acd-b9d7-c310aed30bbf")
    })()
} catch {}
var c = Re(Ie(), 1),
    ke = (0, c.createContext)(null),
    St = ke.Provider,
    Dt = () => (0, c.use)(ke);

function Ft(e, t) {
    return e ? .onContextAdd ? t.type === "project" ? !!e.canAddContextResources : t.type === "workspaceFile" ? !!(e.canAddContextResources && e.canAddWorkspaceFileContext) : !0 : !1
}

function Ct(e, t) {
    return e.filter(s => (s.type !== "project" || !t.projectIds.has(s.id)) && (s.type !== "workspaceFile" || !t.workspaceFileIds.has(s.id)))
}
var Pe = 10,
    be = 10,
    we = [];

function ue(e, t) {
    const s = (0, c.useRef)(void 0);
    return (0, c.useEffect)(() => {
        t !== void 0 ? s.current = {
            scope: e,
            data: t
        } : s.current ? .scope !== e && (s.current = void 0)
    }, [e, t]), t ? ? (s.current ? .scope === e ? s.current.data : void 0)
}

function Mt({
    connectorsEnabled: e,
    includeWorkspaceFiles: t,
    menuEnabled: s,
    searchTerm: n,
    excludedProjectIds: y = we,
    excludedWorkspaceFileIds: m = we,
    canReferenceProject: _
}) {
    const L = Ge(),
        d = Te(),
        v = Ne(),
        N = ze(),
        C = Me(),
        F = qe([me.ViewWorkspaceProjects, me.ViewWorkspaceSharedWithMeProjects]),
        k = JSON.stringify([v, d ? .uid, F]),
        K = JSON.stringify([k, t]),
        p = n,
        i = De(p, 300, k),
        E = s && !!v && !!d,
        h = (r, T) => Ke({
            workspaceId: v,
            query: r ? .slice(0, 400) || void 0,
            sortBy: "last_viewed_at",
            sortOrder: "desc",
            viewedByMe: T
        }, d ? .uid),
        x = r => Ue({
            workspaceId: v,
            query: r
        }, d ? .uid),
        P = oe({ ...h(i),
            placeholderData: void 0,
            enabled: E && F
        }),
        a = oe({ ...x(i),
            placeholderData: void 0,
            enabled: E && t,
            refetchOnWindowFocus: !1
        }),
        w = oe({ ...h(void 0, !0),
            placeholderData: void 0,
            enabled: E && !N && F
        }),
        {
            data: M
        } = oe({ ...h(),
            placeholderData: void 0,
            enabled: !1
        }),
        {
            data: f
        } = oe({ ...x(""),
            placeholderData: void 0,
            enabled: !1
        }),
        g = ue(k, F ? P.data : void 0),
        X = ue(K, a.data),
        O = new Set(y),
        re = new Set(m),
        G = r => ({
            type: "project",
            id: r.id,
            name: r.name ? ? r.id,
            displayName: r.display_name ? ? void 0,
            project: r
        }),
        q = r => !O.has(r.id) && !r.exclude_from_being_read && !r.shared_context_admin_isolated,
        de = !d || !F ? [] : (w.data ? .pages.flatMap(r => r.projects) ? ? []).filter(r => q(r) && _ ? .(r.id) !== !1).map(G),
        z = r => {
            const T = r,
                S = C.getQueryData(h(T).queryKey),
                U = C.getQueryData(x(T).queryKey),
                le = T.slice(0, 400).trim().toLocaleLowerCase().split(/\s+/).filter(Boolean),
                $ = T.trim().toLocaleLowerCase(),
                se = S ? S.pages : [...g ? .pages ? ? [], ...M ? .pages ? ? [], ...w.data ? .pages ? ? []],
                ge = U ? U.pages : [...X ? .pages ? ? [], ...f ? .pages ? ? []],
                u = new Set,
                Y = new Set;
            return {
                projects: !d || !F ? [] : se.flatMap(o => o.projects).filter(o => {
                    if (u.has(o.id)) return !1;
                    u.add(o.id);
                    const je = `${o.display_name??""} ${o.name??""} ${o.id}`.toLocaleLowerCase();
                    return q(o) && _ ? .(o.id) !== !1 && (!!S || le.every(Qe => je.includes(Qe)))
                }).slice(0, be).map(G),
                workspaceFiles: !d || !t ? [] : ge.flatMap(o => o.files ? ? []).filter(o => Y.has(o.id) ? !1 : (Y.add(o.id), o.workspace_id === v && !re.has(o.id) && (!L || !Xe(o)))).map(o => ({
                    type: "workspaceFile",
                    id: o.id,
                    title: Je(o),
                    filename: o.filename,
                    mimeType: o.mime_type,
                    file: o
                })).filter(o => !!U || !$ || o.title.toLocaleLowerCase().includes($) || o.filename.toLocaleLowerCase().includes($))
            }
        },
        {
            projects: j,
            workspaceFiles: b
        } = z(n),
        l = p !== i,
        ne = l || P.isPending || P.isFetching,
        I = l || a.isPending || a.isFetching,
        H = E && F && !l && !P.isFetching && !P.isError,
        Q = E && t && !l && !a.isFetching && !a.isError,
        fe = () => {
            if (Q && a.hasNextPage) return a.fetchNextPage()
        },
        B = (P.data ? .pages.flatMap(r => r.projects) ? ? []).filter(q).length,
        {
            hasNextPage: ae,
            fetchNextPage: A
        } = P,
        {
            hasNextPage: V,
            fetchNextPage: Z
        } = a;
    (0, c.useEffect)(() => {
        H && ae && B < Pe && A()
    }, [H, ae, A, B]), (0, c.useEffect)(() => {
        Q && V && b.length < Pe && Z()
    }, [Q, V, Z, b.length]);
    const R = Ce({ ...$e({
                workspaceId: v ? ? ""
            }),
            enabled: e && !!v && !!d,
            staleTime: 3e5,
            retry: !1
        }),
        ie = (0, c.useMemo)(() => (R.data ? ? []).filter(r => r.is_enabled_for_workspace !== !1).map(r => ({
            type: "connector",
            ...r
        })), [R.data]),
        ee = h(p).queryKey,
        te = x(p).queryKey,
        J = ue(k, F && C.getQueryData(ee) ? _e(ee) : void 0),
        ce = ue(K, t && C.getQueryData(te) ? _e(te) : void 0);
    return {
        connectors: ie,
        getSearchResults: z,
        projectResultsVersion: (0, c.useMemo)(() => ({
            scope: k,
            key: J
        }), [k, J]),
        fileResultsVersion: (0, c.useMemo)(() => ({
            scope: K,
            key: ce
        }), [K, ce]),
        debouncedFileSearch: i,
        fetchMoreFiles: a.fetchNextPage,
        hasMoreFiles: !l && a.hasNextPage,
        isConnectorCatalogFetching: R.isFetching,
        isConnectorsError: R.isError,
        isProjectDebouncePending: l,
        isProjectsError: !l && P.isError,
        isProjectsLoading: E && F && ne,
        isProjectsPlaceholderData: !1,
        isRecentlyViewedLoading: w.isLoading,
        isWorkspaceFilesError: !l && a.isError,
        isWorkspaceFilesFetching: a.isFetching,
        isWorkspaceFilesLoading: E && t && I,
        isWorkspaceFilesNextPageError: a.isFetchNextPageError,
        isWorkspaceFilesPlaceholderData: !1,
        loadMoreFiles: fe,
        projectSearchQuery: i,
        projects: j,
        recentlyViewedProjects: de.slice(0, be),
        refetchConnectors: R.refetch,
        refetchProjects: P.refetch,
        refetchWorkspaceFiles: a.refetch,
        workspaceFiles: b
    }
}
var tt = {
        project: !0,
        workspaceFile: !0,
        chat: !0
    },
    kt = e => Ae(tt, e.type),
    D = {
        files: "file:",
        projects: "project:",
        assets: "asset:",
        connectors: "connector:",
        drafts: "draft:",
        chats: "chat:"
    };

function Et(e) {
    return e.startsWith(D.files) ? {
        tab: "files",
        searchTerm: e.slice(D.files.length)
    } : e.startsWith(D.projects) ? {
        tab: "projects",
        searchTerm: e.slice(D.projects.length)
    } : e.startsWith(D.assets) ? {
        tab: "assets",
        searchTerm: e.slice(D.assets.length)
    } : e.startsWith(D.connectors) ? {
        tab: "connectors",
        searchTerm: e.slice(D.connectors.length)
    } : e.startsWith(D.drafts) ? {
        tab: "drafts",
        searchTerm: e.slice(D.drafts.length)
    } : e.startsWith(D.chats) ? {
        tab: "chats",
        searchTerm: e.slice(D.chats.length)
    } : {
        tab: "all",
        searchTerm: e
    }
}
var Se = Be();

function xt({
    message: e,
    retry: t
}) {
    const [s, n] = (0, c.useState)(!1);
    return (0, Se.jsxs)("div", {
        className: "p-2 text-sm",
        children: [e, t && (0, Se.jsx)(Oe, {
            variant: "ghost",
            size: "sm",
            loading: s,
            disabled: s,
            onClick: async () => {
                n(!0);
                try {
                    await t()
                } catch {} finally {
                    n(!1)
                }
            },
            children: Ve()
        })]
    })
}
var he = 3e4;

function Ee(e, t) {
    return e.documents ? .some(s => s.id === t) ? { ...e,
        documents: e.documents.filter(s => s.id !== t)
    } : e
}

function st(e) {
    return (e.query ? ? "") === "" && (e.kind ? ? "all") === "all" && (e.offset ? ? 0) === 0 && (e.sortBy ? ? "updated") === "updated" && (e.sortOrder ? ? "desc") === "desc"
}

function ot(e, t, s) {
    return !st(s) || e.documents ? .some(n => n.id === t.id) ? e : { ...e,
        documents: [t, ...e.documents ? ? []]
    }
}

function rt(e) {
    const t = new Date().toISOString(),
        s = e.uploaded_at ? ? e.created_at ? ? t;
    return {
        id: e.id,
        filename: e.filename,
        url: e.url,
        size: e.size,
        uploaded_at: s,
        created_at: e.created_at ? ? s,
        catalog_updated_at: e.catalog_updated_at ? ? s
    }
}

function nt(e) {
    return t => t.name === "project_document_page" && t.params.projectId === e
}

function xe(e, t, s) {
    for (const {
            params: n
        } of e.getAllSnapshots().filter(nt(t))) e.beginOptimistic("project_document_page", n, {
        transform: y => s(y, n),
        ttlMs: he
    })
}
var W = new Map,
    ye = (e, t) => `${e}\0${t}`;

function jt(e, t) {
    const s = Fe();
    if (!s) return;
    const n = rt(t);
    xe(s, e, (m, _) => ot(m, n, _));
    const y = {
        projectId: e,
        path: t.id
    };
    if (s.peekSnapshot("project_document_reference", y)) {
        const m = ye(e, t.id);
        W.get(m) ? .handle.rollback();
        const _ = {
            handle: s.beginOptimistic("project_document_reference", y, {
                transform: L => L.document ? L : {
                    document: n
                },
                ttlMs: he
            }),
            row: n
        };
        W.set(m, _), setTimeout(() => {
            W.get(m) === _ && W.delete(m)
        }, he)
    }
}

function Qt(e, t, s) {
    return W.get(ye(e, t)) ? .row === s
}

function at(e, t) {
    const s = ye(e, t);
    W.get(s) ? .handle.rollback(), W.delete(s);
    const n = Fe();
    n && xe(n, e, y => Ee(y, t))
}

function it(e, t, s) {
    e.setQueriesData({
        queryKey: pe(t)
    }, n => n && Ee(n, s)), at(t, s)
}
var ct = [];

function lt(e) {
    return e instanceof Le && (e.status === 401 || e.status === 403 || e.status === 404)
}

function ut(e, t) {
    return e.startsWith(t) || t.startsWith(e)
}

function dt(e, t) {
    const s = e.documents ? ? [],
        n = t.documents ? ? [];
    return e.has_more === t.has_more && e.total_count === t.total_count && e.category_counts ? .all === t.category_counts ? .all && e.category_counts ? .images === t.category_counts ? .images && e.category_counts ? .videos === t.category_counts ? .videos && e.category_counts ? .documents === t.category_counts ? .documents && (e.page_size ? ? 100) === (t.page_size ? ? 100) && e.offset === t.offset && (e.next_offset ? ? null) === (t.next_offset ? ? null) && s.length === n.length && s.every((y, m) => y.id === n[m] ? .id && y.catalog_updated_at === n[m] ? .catalog_updated_at)
}

function Rt(e, t = {}, s = !0, n) {
    const [y, m] = (0, c.useState)(!1), _ = y ? void 0 : n, L = _ === void 0 ? {} : {
        pageSize: _
    }, d = et(t.search), v = t.fileFilter ? ? "all", N = t.fileSort ? .field ? ? "updated", C = t.fileSort ? .direction ? ? "desc", F = De(d, 300, e), [k, K] = (0, c.useState)(d), p = d.length === 0 || F === d ? d : k;
    p !== k && K(p);
    const i = p.length > 0,
        E = d !== p,
        h = JSON.stringify([e, p, v, N, C, _]),
        [x, P] = (0, c.useState)({
            key: h,
            offset: 0,
            pageSize: 100
        }),
        a = x.key === h ? x.offset : 0;
    x.key !== h && P({
        key: h,
        offset: 0,
        pageSize: 100
    });
    const w = He(e, s),
        M = Me(),
        f = ve("project_document_page", {
            projectId: e,
            query: "",
            kind: v,
            sortBy: N,
            sortOrder: C,
            offset: i ? 0 : a,
            ...L
        }, s),
        g = Ce({ ...Ze(e, {
                query: p,
                kind: v,
                sortBy: N,
                sortOrder: C,
                offset: a,
                ...L
            }),
            enabled: w.eligible && i && !f.isAccessDenied,
            placeholderData: (u, Y) => {
                if (!u || !Y || Y.state.error) return;
                const o = Y.queryKey.at(-1);
                return o.kind === v && o.sortBy === N && o.sortOrder === C && o.offset === a && o.pageSize === _ && ut(o.query, p) ? u : void 0
            }
        }),
        X = ve("project_document_page", {
            projectId: e,
            query: p,
            kind: v,
            sortBy: N,
            sortOrder: C,
            offset: a,
            ...L
        }, s && i && !f.isAccessDenied);
    _ !== void 0 && (f.error ? .code === "invalid_subscription" || X.error ? .code === "invalid_subscription" || i && g.data !== void 0 && g.data.page_size === void 0) && m(!0);
    const O = X.data,
        re = (0, c.useRef)(g.data);
    re.current = g.data;
    const G = (0, c.useRef)(void 0),
        q = g.isFetching;
    (0, c.useEffect)(() => {
        const u = re.current;
        !i || O === void 0 || u === void 0 || q || G.current !== O && (G.current = O, !dt(O, u) && M.invalidateQueries({
            queryKey: pe(e)
        }))
    }, [O, e, M, q, i]);
    const de = i && w.eligible && g.isError && lt(g.error),
        z = f.isAccessDenied || X.isAccessDenied || de,
        j = i ? w.eligible && !z : f.canRead,
        b = i ? j ? g.data : void 0 : f.data,
        l = i ? w.isUnavailable || z || w.eligible && g.isError : f.isError,
        ne = i ? j && g.isFetching : f.isFetching,
        I = JSON.stringify([e, p]),
        H = j && !l ? b ? .category_counts : void 0,
        [Q, fe] = (0, c.useState)({
            scope: I
        }),
        B = i && g.isPlaceholderData ? void 0 : H;
    (Q.scope !== I || (!j || l ? Q.counts !== void 0 : B && B !== Q.counts)) && fe({
        scope: I,
        counts: B
    });
    const ae = j && !l ? H ? ? (Q.scope === I ? Q.counts : void 0) : void 0,
        A = E || i && j && g.isPlaceholderData,
        V = w.isLoading || b === void 0 && (ne || A);
    (0, c.useEffect)(() => {
        z && M.setQueriesData({
            queryKey: pe(e),
            predicate: u => u.state.status !== "error"
        }, u => u && { ...u,
            documents: [],
            category_counts: void 0,
            total_count: 0,
            has_more: !1,
            next_offset: null
        })
    }, [z, e, M]);
    const Z = w.eligible,
        R = f.recover,
        ie = f.isError,
        ee = f.isAccessDenied,
        te = g.refetch,
        J = (0, c.useCallback)(async () => {
            if (!i || ee) return R();
            ie && await R(), l && (await We(M, e), Z && await te())
        }, [Z, l, ee, ie, R, e, M, te, i]),
        ce = (0, c.useCallback)(u => it(M, e, u), [e, M]),
        r = b ? .has_more ? ? !1,
        T = b ? .total_count,
        S = b === void 0 ? x.pageSize : b.page_size ? ? 100,
        U = b ? .next_offset ? ? a + S,
        le = (0, c.useCallback)(async () => P({
            key: h,
            offset: Math.max(0, a - S),
            pageSize: S
        }), [h, a, S]),
        $ = (0, c.useCallback)(async () => {
            r && P({
                key: h,
                offset: U,
                pageSize: S
            })
        }, [r, h, U, S]),
        se = i ? !1 : f.isStale,
        ge = (0, c.useMemo)(() => ({
            offset: a,
            pageSize: S,
            totalCount: T,
            hasMore: r,
            previous: le,
            loadMore: $,
            retry: J,
            isLoading: V || A,
            isStale: se,
            error: l ? Ye() : null
        }), [r, l, V, se, A, $, a, S, T, le, J]);
    return {
        data: b,
        categoryCounts: ae,
        documents: b ? .documents ? ? ct,
        snapshot: i ? void 0 : f.snapshot,
        isStale: se,
        isAccessDenied: z,
        isError: l,
        isLoading: V,
        isFetching: ne,
        isTransitioning: A,
        canRequest: w.eligible,
        canRead: j,
        recover: J,
        dropDocument: ce,
        pagination: ge
    }
}
export {
    xt as a, Mt as c, Ct as d, Dt as f, jt as i, St as l, Qt as n, kt as o, it as r, Et as s, Rt as t, Ft as u
};
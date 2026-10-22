import {
    Eb as l,
    Tb as c,
    bb as a,
    kb as t
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new r.Error().stack;
        s && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[s] = "9e911c5c-00a1-4b3e-8a17-badb94fbed3b", r._sentryDebugIdIdentifier = "sentry-dbid-9e911c5c-00a1-4b3e-8a17-badb94fbed3b")
    })()
} catch {}
var o = document.documentElement.lang || "en",
    p = {
        __proto__: null,
        "pt-BR": () => t(() =>
            import ("../i18n-data/projectFilters.pt-BR-DfNfLG-Q.js"), []),
        de: () => t(() =>
            import ("../i18n-data/projectFilters.de-CzO28Irp.js"), []),
        fr: () => t(() =>
            import ("../i18n-data/projectFilters.fr-rHtJw-F2.js"), []),
        es: () => t(() =>
            import ("../i18n-data/projectFilters.es-meOS2htT.js"), []),
        it: () => t(() =>
            import ("../i18n-data/projectFilters.it-DmAyGTww.js"), []),
        hi: () => t(() =>
            import ("../i18n-data/projectFilters.hi-nZtXMvXD.js"), []),
        id: () => t(() =>
            import ("../i18n-data/projectFilters.id-TDxyRj1p.js"), []),
        th: () => t(() =>
            import ("../i18n-data/projectFilters.th-z-lLLX2y.js"), []),
        ko: () => t(() =>
            import ("../i18n-data/projectFilters.ko-Bvan01CD.js"), []),
        ja: () => t(() =>
            import ("../i18n-data/projectFilters.ja-BkMC41Uh.js"), [])
    },
    i = o === "en" ? void 0 : c().projectFilters;
o !== "en" && i === void 0 && (p[o] === null ? i = null : (p[o] ? .() ? ? Promise.resolve()).then(r => {
    i = r ? .default ? ? null, l()
}, () => {
    i = null, l()
}));
var _ = () => i,
    F = () => o,
    d = {
        projectFilters_activeFilterChip: [
            ["name"], ": ", ["value"]
        ],
        projectFilters_addFilter: "Add filter",
        projectFilters_clearAllFilters: "Clear filters",
        projectFilters_filterMenuLabel: "Filter projects",
        projectFilters_filterSearchPlaceholder: "Filter projects...",
        projectFilters_filterTrigger: "Filter",
        projectFilters_folderLabel: "Folder",
        projectFilters_gridView: "Grid",
        projectFilters_listView: "List",
        projectFilters_orderAscendingAlphabetical: "A–Z",
        projectFilters_orderDescendingAlphabetical: "Z–A",
        projectFilters_orderGroupLabel: "Order",
        projectFilters_orderLeastPopular: "Least popular",
        projectFilters_orderLeastRelevant: "Least relevant",
        projectFilters_orderMostPopular: "Most popular",
        projectFilters_orderMostRelevant: "Most relevant",
        projectFilters_orderNewestFirst: "Newest first",
        projectFilters_orderOldestFirst: "Oldest first",
        projectFilters_ownerEmpty: "No owners found.",
        projectFilters_ownerLabel: "Owner",
        projectFilters_ownerLoading: "Loading...",
        projectFilters_ownerLoadingMore: "Loading owners",
        projectFilters_ownerSearchPlaceholder: "Search owners...",
        projectFilters_ownerYou: [
            ["name"], " (You)"
        ],
        projectFilters_popularityGroupLabel: "Popularity",
        projectFilters_publishStatusAllPublished: "All published",
        projectFilters_publishStatusAny: "Any status",
        projectFilters_publishStatusExternally: "Externally published",
        projectFilters_publishStatusInternally: "Internally published",
        projectFilters_publishStatusLabel: "Publish status",
        projectFilters_publishStatusUnpublished: "Not published",
        projectFilters_recentProjectsLabel: "Recent projects",
        projectFilters_removeFilter: ["Remove filter: ", ["filter"]],
        projectFilters_searchEmpty: "No matching filters",
        projectFilters_searchPlaceholder: "Search projects...",
        projectFilters_sortByGroupLabel: "Sort by",
        projectFilters_sortCreated: "Created",
        projectFilters_sortLastEdited: "Last edited",
        projectFilters_sortLastViewed: "Last viewed",
        projectFilters_sortMostVisitors24h: "Most visits 24h",
        projectFilters_sortMostVisitors30d: "Most visits 30d",
        projectFilters_sortMostVisitors7d: "Most visits 7d",
        projectFilters_sortName: "Name",
        projectFilters_sortRelevance: "Relevance",
        projectFilters_starredLabel: "Starred",
        projectFilters_timeWindowBadge24h: "24h",
        projectFilters_timeWindowBadge30d: "30d",
        projectFilters_timeWindowBadge7d: "7d",
        projectFilters_timeWindowLast24Hours: "Last 24 hours",
        projectFilters_timeWindowLast30Days: "Last 30 days",
        projectFilters_timeWindowLast7Days: "Last 7 days",
        projectFilters_viewGroupLabel: "View",
        projectFilters_visibilityAny: "Any visibility",
        projectFilters_visibilityLabel: "Visibility",
        projectFilters_visibilityRestricted: "Restricted",
        projectFilters_visibilityWorkspace: "Workspace",
        projectFilters_visitorsSubmenu: "Visits",
        projectsList_columnOwner: "Owner",
        projectsList_unknownUser: "Unknown user"
    },
    e = r => (s = {}) => a(_() ? .[r], s, F()) ? ? a(d[r], s, "en") ? ? "",
    n = e("projectFilters_activeFilterChip"),
    u = e("projectFilters_addFilter"),
    v = e("projectFilters_clearAllFilters"),
    b = e("projectFilters_filterMenuLabel"),
    L = e("projectFilters_filterSearchPlaceholder"),
    h = e("projectFilters_filterTrigger"),
    w = e("projectFilters_folderLabel"),
    y = e("projectFilters_gridView"),
    m = e("projectFilters_listView"),
    g = e("projectFilters_orderAscendingAlphabetical"),
    f = e("projectFilters_orderDescendingAlphabetical"),
    A = e("projectFilters_orderGroupLabel"),
    E = e("projectFilters_orderLeastPopular"),
    P = e("projectFilters_orderLeastRelevant"),
    S = e("projectFilters_orderMostPopular"),
    V = e("projectFilters_orderMostRelevant"),
    R = e("projectFilters_orderNewestFirst"),
    M = e("projectFilters_orderOldestFirst"),
    D = e("projectFilters_ownerEmpty"),
    W = e("projectFilters_ownerLabel"),
    I = e("projectFilters_ownerLoading"),
    O = e("projectFilters_ownerLoadingMore"),
    T = e("projectFilters_ownerSearchPlaceholder"),
    B = e("projectFilters_ownerYou"),
    G = e("projectFilters_popularityGroupLabel"),
    N = e("projectFilters_publishStatusAllPublished"),
    k = e("projectFilters_publishStatusAny"),
    C = e("projectFilters_publishStatusExternally"),
    U = e("projectFilters_publishStatusInternally"),
    x = e("projectFilters_publishStatusLabel"),
    Y = e("projectFilters_publishStatusUnpublished"),
    H = e("projectFilters_recentProjectsLabel"),
    Z = e("projectFilters_removeFilter"),
    q = e("projectFilters_searchEmpty"),
    z = e("projectFilters_searchPlaceholder"),
    J = e("projectFilters_sortByGroupLabel"),
    K = e("projectFilters_sortCreated"),
    Q = e("projectFilters_sortLastEdited"),
    X = e("projectFilters_sortLastViewed"),
    $ = e("projectFilters_sortMostVisitors24h"),
    ee = e("projectFilters_sortMostVisitors30d"),
    re = e("projectFilters_sortMostVisitors7d"),
    te = e("projectFilters_sortName"),
    se = e("projectFilters_sortRelevance"),
    ie = e("projectFilters_starredLabel"),
    oe = e("projectFilters_timeWindowBadge24h"),
    le = e("projectFilters_timeWindowBadge30d"),
    ae = e("projectFilters_timeWindowBadge7d"),
    pe = e("projectFilters_timeWindowLast24Hours"),
    ce = e("projectFilters_timeWindowLast30Days"),
    _e = e("projectFilters_timeWindowLast7Days"),
    Fe = e("projectFilters_viewGroupLabel"),
    de = e("projectFilters_visibilityAny"),
    je = e("projectFilters_visibilityLabel"),
    ne = e("projectFilters_visibilityRestricted"),
    ue = e("projectFilters_visibilityWorkspace"),
    ve = e("projectFilters_visitorsSubmenu"),
    be = e("projectsList_columnOwner"),
    Le = e("projectsList_unknownUser");
export {
    de as $, x as A, $ as B, T as C, k as D, N as E, z as F, ie as G, re as H, J as I, ae as J, oe as K, K as L, H as M, Z as N, C as O, q as P, Fe as Q, Q as R, O as S, G as T, te as U, ee as V, se as W, ce as X, pe as Y, _e as Z, R as _, L as a, Le as at, W as b, y as c, f as d, je as et, A as f, V as g, S as h, b as i, be as it, Y as j, U as k, m as l, P as m, u as n, ue as nt, h as o, E as p, le as q, v as r, ve as rt, w as s, n as t, ne as tt, g as u, M as v, B as w, I as x, D as y, X as z
};
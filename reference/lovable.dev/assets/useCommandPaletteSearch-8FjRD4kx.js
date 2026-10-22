import {
    o as fe
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    Gd as w,
    Gs as _e,
    Kd as G,
    Mw as W,
    Us as z,
    Zo as B,
    lz as T,
    oR as me,
    xs as V
} from "./app-shared-6CLVfi8w.js";
import {
    u as X,
    y as Y
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    i as ge
} from "./vendor-react-Fx2PtaaM.js";
import {
    Du as Ee
} from "./i18n-fn/_misc-D8ok4lJW.js";
import {
    At as Te
} from "./settings-shared-leaves-B-HU8sMN.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "ef9551c1-b891-4641-b40d-cb2b17a27740", e._sentryDebugIdIdentifier = "sentry-dbid-ef9551c1-b891-4641-b40d-cb2b17a27740")
    })()
} catch {}
var l = fe(ge(), 1),
    x = /[^\p{L}\p{N}]+/u,
    Me = 3,
    ye = 12,
    Se = 8,
    Re = 3,
    pe = 4,
    Ne = 2,
    Ae = .75;

function O(e) {
    const r = e.split(x).filter(Boolean),
        t = new Set,
        s = [];
    for (const n of r) {
        if (Array.from(n).length < Me) continue;
        const a = Array.from(n).slice(0, ye).join("").toLowerCase();
        if (!t.has(a) && (t.add(a), s.push(a), s.length >= Se)) break
    }
    return s
}

function U(e) {
    const r = e.toLowerCase(),
        t = new Set;
    for (let s = Re; s <= pe; s++)
        for (let n = 0; n <= r.length - s; n++) t.add(r.slice(n, n + s));
    return t
}

function Pe(e) {
    const r = e.split(x),
        t = new Set;
    for (const s of r)
        for (const n of U(s)) t.add(n);
    return t
}

function v(e, r) {
    const t = O(e);
    if (t.length === 0) return !0;
    const s = r.map(n => n != null ? Pe(n) : null);
    return t.every(n => {
        const a = U(n),
            f = Math.min(a.size, Math.max(Ne, Math.ceil(a.size * Ae)));
        return s.some(M => {
            if (M == null) return !1;
            let g = 0;
            for (const d of a) M.has(d) && g++;
            return g >= f
        })
    })
}
var Le = 3,
    De = 7,
    ve = 24;

function I(e) {
    return e.toLowerCase().match(/[\p{L}\p{N}]+/gu) ? ? []
}

function K(e) {
    return I(e).some(r => Array.from(r).length >= 2)
}

function Ie(e, r) {
    if (Math.abs(e.length - r.length) > 1) return !1;
    let t = 0;
    for (; t < e.length && t < r.length && e[t] === r[t];) t++;
    const s = (a, f) => e.slice(a).join("") === r.slice(f).join("");
    if (e.length !== r.length) return e.length > r.length ? s(t + 1, t) : s(t, t + 1);
    const n = e[t] === r[t + 1] && e[t + 1] === r[t] && s(t + 2, t + 2);
    return s(t + 1, t + 1) || n
}

function Ce({
    text: e,
    characters: r
}, t) {
    if (t === e) return !0;
    const s = r.length;
    return s >= Le && t.includes(e) ? !0 : s >= De && s <= ve && Ie(r, Array.from(t))
}

function Fe(e, r) {
    if (!K(e)) return [];
    const t = I(e).map(s => ({
        text: s,
        characters: Array.from(s)
    }));
    return r.filter(s => {
        const n = I(s.display_name || s.name || "");
        return t.every(a => n.some(f => Ce(a, f)))
    })
}
var be = /^c_[a-z0-9]{8}$/,
    He = /^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$/;

function je(e, r) {
    const t = e.trim().toLowerCase();
    return be.test(t) || He.test(t) || O(t).length === 0 ? [r.title, r.chat_id, r.thread_id].some(s => (s ? ? "").toLowerCase().includes(t)) : v(e, [r.title])
}
var q = 200;
var h = {
    MAX_RESULTS: 20,
    RECENT_DISPLAY: 3,
    FOLDER_LIMIT: 10,
    CHAT_LIMIT: 10
};

function Ve({
    workspaceId: e,
    isOpen: r,
    includeChats: t = !1,
    recentProjectsLimit: s = h.RECENT_DISPLAY
}) {
    const {
        removedProjectIds: n
    } = Te(e), [a, f] = (0, l.useState)(""), M = me(), g = t && M === !0, d = a.slice(0, 400), _ = _e(d, 300, e), i = a.trim().length > 0, u = _.trim().length > 0, Z = d !== _, {
        data: R,
        isLoading: $,
        isFetching: C,
        isPlaceholderData: J,
        hasNextPage: k,
        isFetchNextPageError: ee,
        fetchNextPage: F
    } = w({ ...W({
            workspaceId: e,
            viewedByMe: !0,
            sortBy: "last_viewed_at",
            sortOrder: "desc",
            pageSize: 20
        }),
        permission: T.ViewWorkspace,
        enabled: !!e && r,
        staleTime: 3e5
    }), m = (0, l.useMemo)(() => (R ? .pages.flatMap(o => o.projects) ? ? []).filter(o => !n.includes(o.id)).slice(0, s), [R ? .pages, s, n]), p = r && !!e && !i && (n.length > 0 || m.length === 0) && m.length < s && k && !J && !ee && (R ? .pages.length ? ? 0) < 6;
    (0, l.useEffect)(() => {
        p && !C && F()
    }, [p, C, F]);
    const te = !i && ($ || p && m.length === 0),
        {
            data: N,
            isFetching: re,
            isError: se
        } = w({ ...W({
                workspaceId: e,
                query: _ || void 0,
                titleSearch: !0,
                sortBy: "last_viewed_at",
                sortOrder: "desc",
                pageSize: h.MAX_RESULTS
            }),
            permission: [T.ViewWorkspaceProjects, T.ViewWorkspaceSharedWithMeProjects],
            enabled: !!e && r && u
        }),
        A = N ? .pages[0] ? .title_search === !0,
        ne = A && i && !K(d),
        y = (0, l.useMemo)(() => N ? .pages.flatMap(o => o.projects) ? ? [], [N ? .pages]),
        {
            data: b
        } = G({
            queryKey: V.recent(e ? ? "", h.FOLDER_LIMIT),
            queryFn: () => z(e, {
                limit: h.FOLDER_LIMIT
            }),
            permission: T.ViewWorkspaceFolders,
            enabled: !!e && r,
            staleTime: 3e5
        }),
        P = (0, l.useMemo)(() => [...b ? .folders ? ? []].sort((o, c) => c.updated_at - o.updated_at).slice(0, h.RECENT_DISPLAY), [b ? .folders]),
        {
            data: L,
            isFetching: ae,
            isError: oe
        } = G({
            queryKey: V.search(e ? ? "", _, h.FOLDER_LIMIT),
            queryFn: () => z(e, {
                query: _,
                limit: h.FOLDER_LIMIT
            }),
            permission: T.ViewWorkspaceFolders,
            enabled: !!e && r && u,
            placeholderData: Y
        }),
        {
            data: H
        } = X({ ...B({
                workspaceId: e,
                sort: "latest",
                limit: 8
            }),
            enabled: g && !!e && r,
            staleTime: 3e5
        }),
        ie = (0, l.useMemo)(() => (H ? .chats ? ? []).slice(0, h.RECENT_DISPLAY), [H ? .chats]),
        ce = _.slice(0, q),
        {
            data: j,
            isFetching: le,
            isError: ue
        } = X({ ...B({
                workspaceId: e,
                sort: "latest",
                limit: h.CHAT_LIMIT,
                query: ce
            }),
            enabled: g && !!e && r && u,
            placeholderData: Y
        }),
        D = (0, l.useMemo)(() => j ? .chats ? ? [], [j ? .chats]),
        S = Z || re,
        E = i && (S || ae || le),
        he = (0, l.useMemo)(() => {
            if (!i) return m;
            let o = y;
            return o.length === 0 && S && (o = m), A ? Fe(d, o) : !S && u ? y : o.filter(c => v(d, [c.display_name, c.name, c.user_display_name]))
        }, [i, u, S, y, m, d, A]),
        Q = (o, c) => c.updated_at - o.updated_at;
    return {
        projects: he,
        folders: (0, l.useMemo)(() => {
            if (!i) return [];
            const o = de => v(a, [de.name]);
            if (!E && u) return [...L ? .folders ? ? []].sort(Q);
            const c = L ? .folders ? ? [];
            return c.length > 0 ? c.filter(o).sort(Q) : P.filter(o)
        }, [i, L ? .folders, E, u, a, P]),
        chats: (0, l.useMemo)(() => !t || !i ? [] : !E && u ? D : D.filter(o => je(a.slice(0, q), o)), [t, i, E, u, D, a]),
        recentFolders: P,
        recentChats: ie,
        isSearching: E,
        isRecentProjectsLoading: te,
        isSearchError: se || oe || ue,
        hasServerResults: y.length > 0,
        projectSearchHint: ne ? Ee({
            count: 2
        }) : void 0,
        searchQuery: a,
        setSearchQuery: f,
        hasSearchQuery: i
    }
}
export {
    Ve as t
};
import {
    o as F
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    Bo as R,
    CI as w,
    Eo as L,
    FI as T,
    Fo as M,
    HM as I,
    Ho as x,
    Io as p,
    Ko as D,
    LI as E,
    NF as N,
    NI as _,
    Xo as A,
    Zo as v,
    cL as H,
    gM as Q,
    jo as K,
    kF as q,
    tL as O
} from "./app-shared-6CLVfi8w.js";
import {
    t as U,
    u as y,
    w as P
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    i as j
} from "./vendor-react-Fx2PtaaM.js";
import {
    Py as z,
    vy as B
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    jt as G
} from "./settings-shared-leaves-B-HU8sMN.js";
import {
    n as X
} from "./workspaceChatOverviewSelection-DuzZbueU.js";
import {
    c as Z,
    d as $,
    f as J,
    l as Y,
    p as V,
    s as ee,
    t as te,
    u as ae
} from "./workspaceChatDeletion-CCfgMb3G.js";
import {
    t as re
} from "./useWorkspaceChatMutations-97DexFK_.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new e.Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9a25cb62-e8bb-4a6d-9c7f-f6a53629306c", e._sentryDebugIdIdentifier = "sentry-dbid-9a25cb62-e8bb-4a6d-9c7f-f6a53629306c")
    })()
} catch {}
var f = F(j(), 1);

function se(e, a, t) {
    const s = (0, f.useSyncExternalStore)((0, f.useCallback)(o => e.subscribe(a, o), [e, a]), () => e.read(a), () => null);
    return (0, f.useEffect)(() => {
        a && t !== null && e.write(a, t)
    }, [e, a, t]), t ? ? s
}

function oe(e) {
    const {
        removedIds: a,
        remove: t,
        restore: s
    } = G("lovable:removed-recent-chats", e);
    return {
        removedChatIds: a,
        removeChat: t,
        restoreChat: s
    }
}

function ne(e) {
    const a = t => e + t;
    return {
        key: a,
        read(t) {
            if (!t) return null;
            const s = O(a(t));
            return s === null ? null : s === "true"
        },
        write(t, s) {
            H(a(t), String(s))
        },
        subscribe(t, s) {
            if (!t) return () => {};
            const o = a(t),
                c = n => {
                    (n.key === o || n.key === null) && s()
                };
            return window.addEventListener("storage", c), () => window.removeEventListener("storage", c)
        }
    }
}
var ce = ne("lovable:sidebar-has-chats:"),
    k = new Set;

function S(e, a, t) {
    return e.filter(s => !a.has(s.chat_id) && !t.has(s.chat_id))
}

function ie({
    limit: e,
    fetchLimit: a = e,
    pinStarred: t = !1,
    enabled: s = !0,
    includeResources: o = !1,
    excludeChatIds: c = k,
    hiddenChatIds: n = k
}) {
    const {
        workspace: m,
        isLoading: l
    } = _(), i = m ? .id, d = y({ ...v({
            workspaceId: i,
            sort: "latest",
            limit: a,
            includeResources: o
        }),
        placeholderData: R(i),
        enabled: s && !!i
    }), h = y({ ...v({
            workspaceId: i,
            filter: "starred",
            sort: "starred",
            limit: Math.floor(a / 2),
            includeResources: o
        }),
        enabled: s && !!i && t && e >= 2
    }), g = d.data ? .chats ? ? [], C = S(g, c, n), b = g.some(W => n.has(W.chat_id));
    return {
        chats: t ? X(C, S(h.data ? .chats ? ? [], c, n), e) : C.slice(0, e),
        hasMore: C.length > e || !!d.data ? .has_more || b,
        error: d.error ? ? (t ? h.error : null),
        isLoading: s && (l || !!i && d.isPending || t && h.isLoading)
    }
}

function de() {
    const {
        removedChatIds: e
    } = oe(T());
    return (0, f.useMemo)(() => new Set(e), [e])
}

function We({
    limit: e,
    pinStarred: a = !1,
    starredChatIds: t = k,
    hideStarredChats: s = !1
}) {
    const o = de();
    return ie({
        limit: e,
        fetchLimit: L(32, t.size + o.size),
        pinStarred: a,
        includeResources: !0,
        excludeChatIds: s ? t : k,
        hiddenChatIds: o
    })
}

function we({
    enabled: e = !0,
    pendingValue: a = !1
} = {}) {
    const {
        workspace: t
    } = _(), s = t ? .id, o = y({ ...x(s),
        enabled: e && !!s
    }), c = o.data ? M(o.data) : null, n = se(ce, s, c);
    return a && !s || a && (o.isPending || o.isFetching) || o.isError ? !0 : n ? ? !1
}

function Ie({
    filter: e,
    sort: a,
    query: t
}) {
    const {
        workspace: s,
        isLoading: o
    } = _(), c = s ? .id, n = U({ ...A({
            workspaceId: c,
            filter: e,
            sort: a,
            query: t
        }),
        placeholderData: (i, d) => d && K(d.queryKey) === c && i ? .pages.some(h => h.chats.length > 0) ? i : void 0
    }), [m, l] = (0, f.useState)({
        filter: e,
        query: t
    });
    return !n.isPlaceholderData && (m.filter !== e || m.query !== t) && l({
        filter: e,
        query: t
    }), {
        chats: (0, f.useMemo)(() => {
            const i = new Set;
            return (n.data ? .pages ? ? []).flatMap(d => d.chats.filter(h => i.has(h.chat_id) ? !1 : (i.add(h.chat_id), !0)))
        }, [n.data ? .pages]),
        error: n.data ? null : n.error,
        fetchNextPage: n.fetchNextPage,
        hasNextPage: n.hasNextPage && !n.isPlaceholderData,
        isFetchNextPageError: n.isFetchNextPageError,
        isFetchedAfterMount: n.isFetchedAfterMount,
        isFetchingNextPage: n.isFetchingNextPage,
        isLoading: o || !!c && n.isPending,
        isPlaceholderData: n.isPlaceholderData,
        shownFilter: m.filter,
        shownQuery: m.query,
        workspaceId: c
    }
}

function he(e) {
    const a = P();
    return async t => e ? ee(a, e, t) : t.commit()
}

function ve() {
    const e = E(r => r.detail.workspace ? .id),
        a = he(e),
        t = q(),
        s = N(),
        o = P(),
        {
            deleteWorkspaceChatAsync: c,
            isSettingWorkspaceChatTitle: n,
            markWorkspaceChatReadAsync: m,
            markWorkspaceChatUnreadAsync: l,
            setWorkspaceChatIconAsync: i,
            setWorkspaceChatStarredAsync: d,
            setWorkspaceChatTitleAsync: h
        } = re();
    return {
        isRenamingChat: n,
        markRead: r => {
            e && a({
                chatId: r.chat_id,
                transform: ae(r.chat_id),
                commit: () => m({
                    workspaceId: e,
                    chatId: r.chat_id
                })
            }).then(() => p(o, e, r.chat_id)).catch(() => {})
        },
        markUnread: r => {
            e && a({
                chatId: r.chat_id,
                transform: V(r.chat_id),
                commit: () => l({
                    workspaceId: e,
                    chatId: r.chat_id
                })
            }).then(() => p(o, e, r.chat_id)).catch(() => {})
        },
        removeChat: async r => {
            if (!e) return !1;
            try {
                return await a({
                    chatId: r.chat_id,
                    transform: Y(r.chat_id),
                    commit: () => c({
                        workspaceId: e,
                        chatId: r.chat_id
                    })
                }), o.removeQueries({
                    queryKey: D.detail(e, r.chat_id),
                    exact: !0,
                    type: "inactive"
                }), te(e, r.chat_id), I.success(B()), t() === w({
                    name: "workspaceChat",
                    params: {
                        chatId: r.chat_id
                    }
                }) && s.replace(w({
                    name: "workspaceChats"
                })), !0
            } catch (u) {
                return Q(u), !1
            }
        },
        renameChat: async (r, u) => {
            e && (await a({
                chatId: r.chat_id,
                transform: J(r.chat_id, u),
                commit: () => h({
                    workspaceId: e,
                    chatId: r.chat_id,
                    title: u
                })
            }), p(o, e, r.chat_id), I.success(z()))
        },
        setChatIcon: async (r, u) => {
            e && a({
                chatId: r.chat_id,
                transform: Z(r.chat_id, u),
                commit: () => i({
                    workspaceId: e,
                    chatId: r.chat_id,
                    icon: u
                })
            }).then(() => p(o, e, r.chat_id)).catch(() => {})
        },
        toggleStar: r => {
            if (!e) return;
            const u = !r.starred_at;
            a({
                chatId: r.chat_id,
                transform: $(r, u),
                resortStarredCaches: !0,
                commit: () => d({
                    workspaceId: e,
                    chatId: r.chat_id,
                    starred: u
                })
            }).then(() => p(o, e, r.chat_id)).catch(() => {})
        }
    }
}
export {
    Ie as a, oe as c, ve as i, se as l, We as n, we as o, ie as r, ne as s, de as t
};
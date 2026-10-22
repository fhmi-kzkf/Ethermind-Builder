import {
    o as N
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    AR as K,
    Ao as w,
    Io as H,
    Ko as m,
    Kz as U,
    Oo as j,
    Ro as z,
    as as F,
    ko as M
} from "./app-shared-6CLVfi8w.js";
import {
    w as G
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    i as J
} from "./vendor-react-Fx2PtaaM.js";
import {
    t as V
} from "./vendor-es-toolkit-CQNapaF9.js";
import {
    t as y
} from "./workspaceChatOverviewSelection-DuzZbueU.js";
try {
    (function() {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new t.Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "e7a5d9c5-c4a7-4521-9b9d-32996ff28272", t._sentryDebugIdIdentifier = "sentry-dbid-e7a5d9c5-c4a7-4521-9b9d-32996ff28272")
    })()
} catch {}
var X = N(J(), 1);

function it(t, e, a = new Date().toISOString()) {
    return (s, n) => {
        const o = n ? .filter === "starred";
        if (o && !e) return W(t.chat_id)(s);
        let r = !1,
            i = !1;
        const c = s.chats.map(f => {
            if (f.chat_id !== t.chat_id) return f;
            i = !0;
            const d = e ? b(f, a) : Y(f);
            return r || = d !== f, d
        });
        if (e && !i && (o || n ? .insertStarred)) {
            const f = [b(t, a), ...c];
            return { ...s,
                chats: n ? .limit ? f.slice(0, n.limit) : f
            }
        }
        return r ? { ...s,
            chats: c
        } : s
    }
}

function ct(t) {
    return e => {
        let a = !1;
        const s = e.chats.map(n => {
            if (n.chat_id !== t || n.unread) return n;
            a = !0;
            const {
                last_viewed_at: o,
                ...r
            } = n;
            return { ...r,
                unread: !0
            }
        });
        return a ? { ...e,
            chats: s
        } : e
    }
}

function ft(t, e = new Date().toISOString()) {
    return (a, s) => {
        if (s ? .filter === "unread") return W(t)(a);
        let n = !1;
        const o = a.chats.map(r => r.chat_id !== t || !r.unread ? r : (n = !0, { ...r,
            unread: !1,
            last_viewed_at: e
        }));
        return n ? { ...a,
            chats: o
        } : a
    }
}

function W(t) {
    return e => {
        const a = e.chats.filter(s => s.chat_id !== t);
        return a.length === e.chats.length ? e : { ...e,
            chats: a
        }
    }
}

function dt(t, e) {
    return a => {
        let s = !1;
        const n = a.chats.map(o => o.chat_id !== t || o.title === e ? o : (s = !0, { ...o,
            title: e
        }));
        return s ? { ...a,
            chats: n
        } : a
    }
}

function ut(t, e) {
    return a => {
        let s = !1;
        const n = a.chats.map(o => {
            if (o.chat_id !== t || (o.icon ? ? "") === e) return o;
            if (s = !0, !e) {
                const {
                    icon: r,
                    ...i
                } = o;
                return i
            }
            return { ...o,
                icon: e
            }
        });
        return s ? { ...a,
            chats: n
        } : a
    }
}

function L(t, e) {
    return !t.starred_at != !e.starred_at ? t.starred_at ? -1 : 1 : T(t.starred_at, e.starred_at) || T(t.updated_at, e.updated_at) || O(t.chat_id, e.chat_id)
}

function T(t, e) {
    return O(y(t), y(e))
}

function I(t) {
    const e = t.flatMap(s => s.chats).sort(L);
    let a = 0;
    return t.map(s => {
        const n = e.slice(a, a + s.chats.length);
        return a += s.chats.length, { ...s,
            chats: n
        }
    })
}

function O(t, e) {
    return t === e ? 0 : t < e ? 1 : -1
}

function b(t, e) {
    return t.starred_at ? t : { ...t,
        starred_at: e
    }
}

function Y(t) {
    if (!t.starred_at) return t;
    const {
        starred_at: e,
        ...a
    } = t;
    return a
}

function P(t, e, a, {
    resortStarredCaches: s = !1
} = {}) {
    const n = t.getQueriesData({
            queryKey: m.lists(e)
        }),
        o = t.getQueriesData({
            queryKey: m.overviewLists(e)
        }),
        r = c => s && w(c) === "starred",
        i = c => ({
            filter: j(c)
        });
    return n.forEach(([c, f]) => {
        if (!f) return;
        const d = a({
            chats: f.chats
        }, { ...i(c),
            limit: M(c),
            insertStarred: r(c) && z(c)
        }).chats;
        t.setQueryData(c, { ...f,
            chats: r(c) ? d.toSorted(L) : d
        })
    }), o.forEach(([c, f]) => {
        if (!f) return;
        const {
            pages: d,
            touched: h
        } = R(f.pages, a, i(c));
        t.setQueryData(c, { ...f,
            pages: h && r(c) ? I(d) : d
        })
    }), {
        previousLists: n,
        previousOverviewLists: o
    }
}

function x(t, e, a) {
    const s = new Map(e.map(i => [i.chat_id, i])),
        n = new Map(a.map(i => [i.chat_id, i])),
        o = new Set([...n.keys(), ...s.keys()]);
    let r = t;
    for (const i of o) {
        const c = s.get(i),
            f = n.get(i);
        if (c === f) continue;
        const d = r.findIndex(h => h.chat_id === i);
        if (V(r[d], f) && (r = r.filter(h => h.chat_id !== i), c)) {
            const h = d < 0 ? e.findIndex(C => C.chat_id === i) : d;
            r.splice(h, 0, c)
        }
    }
    return r
}
async function lt(t, e, {
    chatId: a,
    commit: s,
    transform: n,
    resortStarredCaches: o = !1
}) {
    const r = m.detail(e, a);
    await Promise.all([t.cancelQueries({
        queryKey: m.lists(e)
    }), t.cancelQueries({
        queryKey: m.overviewLists(e)
    }), t.cancelQueries({
        queryKey: r
    })]);
    const i = t.getQueryData(r),
        {
            previousLists: c,
            previousOverviewLists: f
        } = P(t, e, n, {
            resortStarredCaches: o
        });
    if (i) {
        const u = n({
            chats: [i]
        }).chats[0];
        u && t.setQueryData(r, u)
    }
    const d = t.getQueryData(r),
        h = c.map(([u, l]) => ({
            queryKey: u,
            previous: l,
            optimistic: t.getQueryData(u)
        })),
        C = f.map(([u, l]) => ({
            queryKey: u,
            previous: l,
            optimistic: t.getQueryData(u)
        }));
    try {
        const u = await s();
        return F(t, e), u
    } catch (u) {
        throw h.forEach(({
            queryKey: l,
            previous: _,
            optimistic: g
        }) => {
            !_ || !g || t.setQueryData(l, p => {
                if (!p) return p;
                const D = x(p.chats, _.chats, g.chats),
                    k = o && w(l) === "starred" ? D.toSorted(L) : D;
                return { ...p,
                    chats: k.slice(0, M(l))
                }
            })
        }), C.forEach(({
            queryKey: l,
            previous: _,
            optimistic: g
        }) => {
            !_ || !g || t.setQueryData(l, p => {
                if (!p) return p;
                const {
                    pages: D
                } = R(p.pages, ({
                    chats: k
                }) => ({
                    chats: x(k, _.pages.flatMap(S => S.chats), g.pages.flatMap(S => S.chats))
                }), {});
                return { ...p,
                    pages: o && w(l) === "starred" ? I(D) : D
                }
            })
        }), i && t.getQueryData(r) === d && t.setQueryData(r, i), H(t, e, a), u
    }
}

function R(t, e, a) {
    const s = t.flatMap(r => r.chats),
        n = e({
            chats: s
        }, a).chats;
    if (n === s) return {
        pages: t,
        touched: !1
    };
    let o = 0;
    return {
        pages: t.map((r, i) => {
            const c = i === t.length - 1 ? void 0 : o + r.chats.length,
                f = n.slice(o, c);
            return o += r.chats.length, { ...r,
                chats: f
            }
        }),
        touched: !0
    }
}
var Z = "lovable:workspace-chat-deleted",
    E = U()(t => ({
        deletedChatIds: new Set,
        markDeleted: e => t(a => a.deletedChatIds.has(e) ? a : {
            deletedChatIds: new Set(a.deletedChatIds).add(e)
        })
    }));

function ht(t) {
    return E(e => e.deletedChatIds.has(t))
}

function $(t) {
    return E.getState().deletedChatIds.has(t)
}

function pt(t) {
    return t instanceof K && t.status === 404 && t.type === "chat_not_found"
}

function A(t, e, a) {
    P(t, e, W(a)), F(t, e)
}

function q(t, e, a) {
    $(a) || (E.getState().markDeleted(a), A(t, e, a), t.removeQueries({
        queryKey: m.detail(e, a),
        exact: !0,
        type: "inactive"
    }))
}

function mt(t, e, a) {
    return A(t, e, a), t.invalidateQueries({
        queryKey: m.detail(e, a),
        exact: !0
    })
}
var Q = new Set,
    v = null;

function B() {
    if (v) return v;
    try {
        v = new BroadcastChannel(Z)
    } catch {
        return null
    }
    return v.onmessage = t => {
        const e = tt(t.data);
        e && Q.forEach(a => a(e))
    }, v
}

function tt(t) {
    if (typeof t != "object" || t === null) return null;
    const {
        type: e,
        workspaceId: a,
        chatId: s
    } = t;
    return e !== "workspace_chat_deleted" || typeof a != "string" || typeof s != "string" ? null : {
        type: e,
        workspaceId: a,
        chatId: s
    }
}

function _t(t, e) {
    const a = {
        type: "workspace_chat_deleted",
        workspaceId: t,
        chatId: e
    };
    try {
        B() ? .postMessage(a)
    } catch {}
}

function gt() {
    const t = G();
    (0, X.useEffect)(() => {
        const e = ({
            workspaceId: a,
            chatId: s
        }) => q(t, a, s);
        return B(), Q.add(e), () => {
            Q.delete(e)
        }
    }, [t])
}
export {
    ht as a, ut as c, it as d, dt as f, mt as i, W as l, pt as n, gt as o, ct as p, $ as r, lt as s, _t as t, ft as u
};
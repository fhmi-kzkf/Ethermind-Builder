import {
    o as m
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    Gj as c,
    Kj as g,
    iM as l
} from "./app-shared-6CLVfi8w.js";
import {
    r as _
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    i as b
} from "./vendor-react-Fx2PtaaM.js";
try {
    (function() {
        var s = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new s.Error().stack;
        n && (s._sentryDebugIds = s._sentryDebugIds || {}, s._sentryDebugIds[n] = "6511606b-bdb3-4df6-9efa-3547f1fa2376", s._sentryDebugIdIdentifier = "sentry-dbid-6511606b-bdb3-4df6-9efa-3547f1fa2376")
    })()
} catch {}
var y = m(b(), 1);

function h() {
    const s = g(),
        n = c(e => e.userData ? .seen_campaigns),
        i = c(e => e.userDataLoaded),
        d = n !== void 0,
        {
            mutateAsync: u
        } = _({
            mutationFn: async ({
                userId: e,
                key: a
            }) => {
                await l().PUT("/user/{user_id}", {
                    params: {
                        path: {
                            user_id: e
                        }
                    },
                    body: {
                        seen_campaigns: [a]
                    }
                })
            },
            retry: 2,
            onMutate: ({
                userId: e,
                key: a
            }) => {
                const {
                    userData: t,
                    setUserData: o
                } = s.getState();
                if (!t || t.id !== e) return;
                const r = t.seen_campaigns ? ? [];
                return o({ ...t,
                    seen_campaigns: [...new Set([...r, a])]
                }), {
                    alreadySeen: r.includes(a)
                }
            },
            onError: (e, {
                userId: a,
                key: t
            }, o) => {
                const {
                    userData: r,
                    setUserData: f
                } = s.getState();
                r ? .id === a && !o ? .alreadySeen && f({ ...r,
                    seen_campaigns: r.seen_campaigns ? .filter(p => p !== t)
                })
            }
        });
    return {
        loaded: i,
        supported: d,
        hasSeen: e => !i || !d || !!n ? .includes(e),
        markSeen: (0, y.useCallback)(e => {
            const a = s.getState().userData;
            return !a ? .seen_campaigns || a.seen_campaigns.includes(e) ? Promise.resolve() : u({
                userId: a.id,
                key: e
            })
        }, [s, u])
    }
}
export {
    h as t
};
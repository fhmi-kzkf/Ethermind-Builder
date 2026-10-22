import {
    t as v
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    i as h
} from "./vendor-react-Fx2PtaaM.js";
try {
    (function() {
        var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new n.Error().stack;
        e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "69d874bb-86c9-485c-880a-b485ff648123", n._sentryDebugIdIdentifier = "sentry-dbid-69d874bb-86c9-485c-880a-b485ff648123")
    })()
} catch {}
var j = v((n => {
        var e = h();

        function _(r, u) {
            return r === u && (r !== 0 || 1 / r === 1 / u) || r !== r && u !== u
        }
        var b = typeof Object.is == "function" ? Object.is : _,
            m = e.useState,
            y = e.useEffect,
            E = e.useLayoutEffect,
            S = e.useDebugValue;

        function g(r, u) {
            var a = u(),
                o = m({
                    inst: {
                        value: a,
                        getSnapshot: u
                    }
                }),
                t = o[0].inst,
                c = o[1];
            return E(function() {
                t.value = a, t.getSnapshot = u, d(t) && c({
                    inst: t
                })
            }, [r, a, u]), y(function() {
                return d(t) && c({
                    inst: t
                }), r(function() {
                    d(t) && c({
                        inst: t
                    })
                })
            }, [r]), S(a), a
        }

        function d(r) {
            var u = r.getSnapshot;
            r = r.value;
            try {
                var a = u();
                return !b(r, a)
            } catch {
                return !0
            }
        }

        function f(r, u) {
            return u()
        }
        var s = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f : g;
        n.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : s
    })),
    M = v(((n, e) => {
        e.exports = j()
    })),
    x = v((n => {
        var e = h(),
            _ = M();

        function b(f, s) {
            return f === s && (f !== 0 || 1 / f === 1 / s) || f !== f && s !== s
        }
        var m = typeof Object.is == "function" ? Object.is : b,
            y = _.useSyncExternalStore,
            E = e.useRef,
            S = e.useEffect,
            g = e.useMemo,
            d = e.useDebugValue;
        n.useSyncExternalStoreWithSelector = function(f, s, r, u, a) {
            var o = E(null);
            if (o.current === null) {
                var t = {
                    hasValue: !1,
                    value: null
                };
                o.current = t
            } else t = o.current;
            o = g(function() {
                function D(i) {
                    if (!V) {
                        if (V = !0, p = i, i = u(i), a !== void 0 && t.hasValue) {
                            var l = t.value;
                            if (a(l, i)) return w = l
                        }
                        return w = i
                    }
                    if (l = w, m(p, i)) return l;
                    var R = u(i);
                    return a !== void 0 && a(l, R) ? (p = i, l) : (p = i, w = R)
                }
                var V = !1,
                    p, w, I = r === void 0 ? null : r;
                return [function() {
                    return D(s())
                }, I === null ? void 0 : function() {
                    return D(I())
                }]
            }, [s, r, u, a]);
            var c = y(f, o[0], o[1]);
            return S(function() {
                t.hasValue = !0, t.value = c
            }, [c]), d(c), c
        }
    })),
    $ = v(((n, e) => {
        e.exports = x()
    })),
    O = v((n => {
        var e = h(),
            _ = e.useSyncExternalStore,
            b = e.useRef,
            m = e.useEffect,
            y = e.useMemo,
            E = e.useDebugValue
    })),
    k = v(((n, e) => {
        e.exports = O()
    }));
export {
    $ as n, M as r, k as t
};
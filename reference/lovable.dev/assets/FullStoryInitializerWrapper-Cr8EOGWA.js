import {
    o as S
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    $L as b,
    K_ as _,
    Pj as F,
    X_ as v,
    Z_ as R,
    cC as m,
    ev as w,
    oS as E,
    sC as h,
    sR as T,
    wj as A
} from "./app-shared-6CLVfi8w.js";
import {
    i as j,
    r as D
} from "./vendor-react-Fx2PtaaM.js";
import {
    kb as C
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    Wn as O
} from "./flag-catalog-BJaXoOeP.js";
try {
    (function() {
        var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new r.Error().stack;
        s && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[s] = "43821f54-610d-4231-9ffc-12f104c15cd3", r._sentryDebugIdIdentifier = "sentry-dbid-43821f54-610d-4231-9ffc-12f104c15cd3")
    })()
} catch {}
var a = S(j(), 1),
    P = "o-B47Y-eu1";

function x({
    isEnabled: r,
    isConsentReady: s,
    isAllowed: o,
    canIdentify: i,
    userId: n,
    userEmail: u,
    userDisplayName: f,
    featureFlags: y
}) {
    const [l, g] = (0, a.useState)(null), d = (0, a.useRef)(null);
    (0, a.useEffect)(() => {
        if (!r || !s || !o) {
            g(t => (t ? .FullStory("shutdown"), null)), m(null);
            return
        }
        let e = !1;
        const c = E(() => {
            e || (async () => {
                const t = await C(() =>
                    import ("./index.esm-CipYqo0D.js"), []);
                e || (t.isInitialized() ? t.FullStory("restart") : t.init({
                    orgId: P,
                    devMode: !1
                }), m(t), g(t))
            })()
        });
        return () => {
            e = !0, c(), g(t => (t ? .FullStory("shutdown"), null)), m(null)
        }
    }, [o, s, r]);
    const p = (0, a.useRef)(null);
    return (0, a.useEffect)(() => {
        l && (n && i ? (l.FullStory("setIdentity", {
            uid: n,
            properties: {
                email: u ? ? void 0,
                displayName: f ? ? void 0
            }
        }), p.current = n) : p.current !== null && (l.FullStory("setIdentity", {
            anonymous: !0
        }), p.current = null))
    }, [i, l, n, u, f]), (0, a.useEffect)(() => {
        if (!l) {
            d.current = null;
            return
        }
        let e = d.current;
        if (e ? e.userId !== n && (e.canAdoptIdentity ? (e.userId = n, e.canAdoptIdentity = !1) : (e = {
                userId: n,
                canAdoptIdentity: !1,
                flagsTagged: !1
            }, d.current = e)) : (e = {
                userId: n,
                canAdoptIdentity: n === void 0,
                flagsTagged: !1
            }, d.current = e), !e.flagsTagged && y) {
            const c = Object.entries(y).filter(([, t]) => t !== !1).map(([t, I]) => I === !0 ? t : `${t}:${String(I)}`).sort();
            c.length > 0 && (e.flagsTagged = !0, h({
                name: "feature_flags",
                properties: {
                    enabled_flags: c
                }
            }))
        }
    }, [l, n, y]), null
}
var L = D();

function M() {
    const r = A(O).enabled,
        s = _(w),
        o = _(R("fullstory")),
        i = _(v("fullstory")),
        n = b(),
        u = T(),
        f = F();
    return (0, L.jsx)(x, {
        isEnabled: r,
        isConsentReady: s,
        isAllowed: o,
        canIdentify: i,
        userId: n ? .uid,
        userEmail: u ? ? void 0,
        userDisplayName: n ? .displayName ? ? void 0,
        featureFlags: f
    })
}
export {
    M as FullStoryInitializerWrapper
};
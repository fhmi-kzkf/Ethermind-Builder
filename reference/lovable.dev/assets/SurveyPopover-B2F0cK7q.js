import {
    o as M
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    AN as N,
    DF as C,
    JM as D,
    NM as j,
    eR as q,
    tR as Y,
    uA as V
} from "./app-shared-6CLVfi8w.js";
import {
    r as _,
    u as F,
    w as L
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    i as K,
    r as O
} from "./vendor-react-Fx2PtaaM.js";
import {
    a as R,
    i as W,
    o as B
} from "./i18n-fn/surveyPopover-D6oCsVit.js";
import {
    t as Q
} from "./ThankYouCard-Im2z0_hK.js";
import {
    d as w,
    i as G,
    l as H,
    r as U
} from "./surveyQueries-C7hPzRVG.js";
import {
    r as P,
    t as z
} from "./SurveyQuestionnaire-Dpezs1i1.js";
try {
    (function() {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new t.Error().stack;
        s && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[s] = "e5cfc99b-21e4-4b47-8539-310fc35a761f", t._sentryDebugIdIdentifier = "sentry-dbid-e5cfc99b-21e4-4b47-8539-310fc35a761f")
    })()
} catch {}
var i = M(K(), 1);

function J(t, s, o) {
    if (!s) return !0;
    if (o === "exact") return t === s;
    if (o === "regex") try {
        return new RegExp(s).test(t)
    } catch {
        return !1
    }
    return t.includes(s)
}
var r = O();

function X({
    title: t,
    onExpand: s,
    onDismiss: o
}) {
    return (0, r.jsxs)(N, {
        level: "secondary",
        elevation: "xl",
        className: "rounded-3 relative w-[min(28rem,calc(100vw-2rem))]",
        children: [(0, r.jsxs)("button", {
            type: "button",
            onClick: s,
            className: "rounded-3 focus-visible:ring-focus-pulse block w-full p-4 pr-14 text-left focus-visible:ring-2 focus-visible:outline-none",
            children: [(0, r.jsx)("p", {
                className: "text-primary-pulse text-sm font-semibold tracking-normal",
                children: t ? .trim() || R()
            }), (0, r.jsx)("p", {
                className: "text-tertiary-pulse mt-0.5 text-sm",
                children: W()
            })]
        }), (0, r.jsx)(D, {
            variant: "ghost",
            size: "default",
            square: !0,
            icon: V,
            onClick: o,
            "aria-label": B(),
            className: "absolute top-1/2 right-3 -translate-y-1/2"
        })]
    })
}
var g = "lovable:survey:last-shown",
    Z = 864e5;

function $(t, s) {
    return s === null ? !0 : t - s >= Z
}

function ee() {
    if (typeof window > "u") return null;
    const t = window.localStorage.getItem(g);
    if (t === null) return null;
    const s = Number.parseInt(t, 10);
    return Number.isNaN(s) ? null : s
}

function te(t) {
    typeof window > "u" || window.localStorage.setItem(g, String(t))
}
var se = "Thanks for your feedback!",
    de = () => {
        const t = q(),
            s = Y(),
            o = L(),
            x = C(),
            [a, c] = (0, i.useState)(null),
            d = j(),
            [f, m] = (0, i.useState)(null),
            {
                data: k
            } = F({
                queryKey: w.active(),
                queryFn: G,
                enabled: t && s === !0,
                staleTime: 3e5,
                refetchOnWindowFocus: !1
            }),
            e = k ? .find(n => ((n.questions ? .length ? ? 0) > 0 || !!n.booking_link) && J(x, n.target_path, n.target_path_match_type)),
            y = a !== null,
            [I, v] = (0, i.useState)(null),
            p = (0, i.useRef)(null),
            u = (0, i.useCallback)(() => {
                o.invalidateQueries({
                    queryKey: w.active()
                })
            }, [o]),
            {
                mutate: b
            } = _({
                mutationFn: n => H(n),
                onError: u
            });
        (0, i.useEffect)(() => {
            if (!e || y || p.current === e.id || !$(Date.now(), ee())) return;
            const n = () => {
                    p.current = e.id, v(e.id), te(Date.now()), b(e.id)
                },
                S = (e.display_delay_seconds ? ? 0) * 1e3;
            if (S <= 0) {
                n();
                return
            }
            const A = setTimeout(n, S);
            return () => clearTimeout(A)
        }, [e, y, b]);
        const T = e !== void 0 && I === e.id,
            h = _({
                mutationFn: n => U(n),
                onSuccess: u
            }),
            l = (0, i.useCallback)(() => {
                e && h.mutate(e.id)
            }, [e, h]),
            E = (0, i.useCallback)(() => c(null), []);
        return a !== null ? (0, r.jsx)(Q, {
            message: a,
            onClose: E
        }) : !e || !T ? null : (e.questions ? .length ? ? 0) === 0 && e.booking_link ? (0, r.jsx)(P, {
            survey: e,
            onDismiss: l
        }) : d && f !== e.id ? (0, r.jsx)(X, {
            title: e.title,
            onExpand: () => m(e.id),
            onDismiss: l
        }) : (f !== e.id && m(e.id), (0, r.jsx)(z, {
            survey: e,
            questions: e.questions ? ? [],
            focusHeadingOnMount: d,
            onDismiss: l,
            onSubmitted: () => {
                c(e.thank_you_message ? .trim() || se), v(null), u()
            },
            onGone: u
        }))
    };
export {
    de as SurveyPopover
};
import {
    o as w
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    $L as g,
    K_ as u,
    X_ as b,
    Z_ as E,
    ev as S,
    oC as p,
    oS as T,
    pB as h,
    sR as C,
    uB as R
} from "./app-shared-6CLVfi8w.js";
import {
    i as A
} from "./vendor-react-Fx2PtaaM.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bd6c69ee-4c88-4b1f-a37f-40b3c216a616", e._sentryDebugIdIdentifier = "sentry-dbid-bd6c69ee-4c88-4b1f-a37f-40b3c216a616")
    })()
} catch {}
var c = w(A(), 1);
async function P(e) {
    const t = new TextEncoder().encode(e),
        i = await crypto.subtle.digest("SHA-256", t);
    return Array.from(new Uint8Array(i)).map(n => n.toString(16).padStart(2, "0")).join("")
}
var f = "impact-utt-script",
    y = typeof process < "u" && {}.NEXT_PUBLIC_IMPACT_UTT_SRC || typeof
import.meta < "u" && "https://utt.impactcdn.com/A7032529-0864-4472-a67e-73d6298e898b1.js" || "";

function I() {
    const e = document.getElementById(f);
    e && e.remove()
}

function v(e) {
    if (document.getElementById(f)) return;
    const t = document.createElement("script");
    t.id = f, t.src = y, t.async = !0, t.onload = e, document.head.appendChild(t)
}

function K() {
    const e = u(S),
        t = u(E("impact")),
        i = u(b("impact")),
        n = g(),
        s = C(),
        o = (0, c.useRef)(null),
        [l, d] = (0, c.useState)(!1);
    return (0, c.useEffect)(() => {
        if (p) return;
        if (!e || !t) {
            I(), d(!1);
            return
        }
        if (!y) return;
        let r = !1;
        const a = T(() => {
            r || v(() => {
                r || d(!0)
            })
        });
        return () => {
            r = !0, a(), I(), window.ire = void 0, d(!1), o.current = null
        }
    }, [t, e]), (0, c.useEffect)(() => {
        if (p || !e || !t || !l || !window.ire) return;
        const r = R(h.VISITOR_ID) ? ? "",
            a = `${i}:${n?.uid??""}:${s??""}`;
        if (o.current === a) return;
        o.current = a;
        let m = !1;
        return n ? .uid && s && i ? P(s).then(_ => {
            m || window.ire ? .("identify", {
                customerId: n.uid,
                customerEmail: _,
                customProfileId: r
            })
        }) : window.ire ? .("identify", {
            customerId: "",
            customerEmail: "",
            customProfileId: r
        }), () => {
            m = !0, o.current = null
        }
    }, [n ? .uid, i, t, e, l, s]), null
}
export {
    K as ImpactInitializer
};
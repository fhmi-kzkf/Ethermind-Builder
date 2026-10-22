import {
    o as T
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    yv as C
} from "./app-shared-6CLVfi8w.js";
import {
    i as k
} from "./vendor-react-Fx2PtaaM.js";
import {
    c as E,
    r as M
} from "./vendor-motion-Hvlv7m0n.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "49920d33-b3c8-4993-9cd1-4ad8dd7621df", e._sentryDebugIdIdentifier = "sentry-dbid-49920d33-b3c8-4993-9cd1-4ad8dd7621df")
    })()
} catch {}
var _ = T(k(), 1),
    V = (e, t) => {
        let n = 0;
        for (; n < e.length && n < t.length && e[n] === t[n];) n += 1;
        return e.slice(0, n)
    },
    q = (e, t) => e === t || (e.prefix ? ? "") === (t.prefix ? ? "") && e.words.length === t.words.length && e.words.every((n, d) => n === t.words[d]);

function L({
    words: e,
    typingSpeed: t = 30,
    deletingSpeed: n = 30,
    pauseBetweenWords: d = 1500,
    instantDelete: h = !1,
    typePrefix: m = !1,
    onWordCompleted: y,
    onDeletingChange: p,
    onChange: g
}) {
    let f;
    if (typeof e == "function") f = e;
    else {
        const o = {
            words: e
        };
        f = () => o
    }
    let s = f();
    if (s.words.length === 0) return () => {};
    let c = s.prefix ? ? "",
        u = 0,
        r = m ? "" : c,
        i = !1,
        a;
    const l = o => {
            a = setTimeout(D, o)
        },
        v = o => {
            i !== o && p ? .(o), i = o
        };

    function D() {
        const o = s.words[u];
        if (o === void 0) return;
        if (!i) {
            const I = c + o;
            if (r === I) {
                v(!0), l(n);
                return
            }
            r = I.slice(0, r.length + 1), g ? .(r), l(r === I ? d : t);
            return
        }
        const x = f(),
            w = x.words.length > 0 && !q(x, s) ? x : null,
            b = w ? V(c, w.prefix ? ? "") : c;
        if (r.length > b.length && (r = h ? b : r.slice(0, -1), g ? .(r), r.length > b.length)) {
            l(n);
            return
        }
        w ? (s = w, c = s.prefix ? ? "", u = 0) : u = (u + 1) % s.words.length, v(!1), y ? .(), l(t)
    }
    return l(t), () => {
        a && clearTimeout(a)
    }
}

function A({
    ref: e,
    words: t,
    typingSpeed: n = 30,
    deletingSpeed: d = 30,
    pauseBetweenWords: h = 1500,
    prefix: m = "",
    onWordCompleted: y,
    onChange: p
}) {
    const g = M(e, {
            once: !1
        }),
        f = E(),
        [s, c] = (0, _.useState)(""),
        [u, r] = (0, _.useState)(!1),
        i = C(l => {
            c(l), p ? .(m + l)
        }),
        a = C(() => {
            y ? .()
        });
    return (0, _.useEffect)(() => {
        if (!(!t || t.length === 0 || !g)) {
            if (f) {
                i(t[0] ? ? "");
                return
            }
            return i(""), r(!1), L({
                words: t,
                typingSpeed: n,
                deletingSpeed: d,
                pauseBetweenWords: h,
                onWordCompleted: a,
                onDeletingChange: r,
                onChange: i
            })
        }
    }, [g, f, t, n, d, h, i, a]), {
        text: m + s,
        isDeleting: u
    }
}
export {
    A as n, L as t
};
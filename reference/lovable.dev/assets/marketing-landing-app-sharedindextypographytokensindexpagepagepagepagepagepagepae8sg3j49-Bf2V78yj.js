import {
    o as w
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    CR as c
} from "./app-shared-6CLVfi8w.js";
import {
    i as x,
    r as j
} from "./vendor-react-Fx2PtaaM.js";
import {
    T as g,
    _ as p,
    o as I,
    r as h
} from "./vendor-motion-Hvlv7m0n.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new e.Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "db295a5f-9668-49be-8f2c-5a9c8ca7e6a6", e._sentryDebugIdIdentifier = "sentry-dbid-db295a5f-9668-49be-8f2c-5a9c8ca7e6a6")
    })()
} catch {}
var N = w(x(), 1),
    r = j();

function S({
    children: e,
    className: a,
    animate: n = !0,
    staggerChildren: i = .25,
    yOffset: s = 20,
    threshold: y = .2,
    duration: d = 1,
    staggerOrigin: u = "first",
    startDelay: f = 0,
    targetSelector: l = ":scope > *",
    as: b = "div",
    role: v
}) {
    const _ = b === "ul" ? p.ul : p.div,
        [o, m] = I(),
        t = h(o, {
            once: !0,
            amount: y
        });
    return (0, N.useEffect)(() => {
        t && n && m(l, s !== null ? {
            opacity: [0, 1],
            y: [s, 0]
        } : {
            opacity: [0, 1]
        }, {
            duration: d,
            delay: g(i, {
                from: u,
                startDelay: f
            })
        })
    }, [t, o, n, m, s, d, i, u, f, l]), (0, r.jsx)(_, { ...n && {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: t ? 1 : 0
            },
            transition: {
                duration: 0
            }
        },
        ref: o,
        className: a,
        role: v,
        children: e
    })
}
var T = ({
        children: e,
        id: a,
        className: n,
        hasPadding: i = !1
    }) => (0, r.jsx)("div", {
        id: a,
        className: c("bg-marketing-background z-10 w-full py-24", i && "py-20 md:py-32", n),
        children: (0, r.jsx)("div", {
            className: "container space-y-40",
            children: e
        })
    }),
    q = ({
        children: e,
        id: a,
        className: n,
        hasPadding: i = !1
    }) => (0, r.jsx)("div", {
        id: a,
        className: c("w-full", i && "py-20 md:py-32", n),
        children: (0, r.jsx)("div", {
            className: "container",
            children: e
        })
    }),
    A = ({
        children: e,
        className: a
    }) => (0, r.jsx)("div", {
        className: c("space-y-20 md:space-y-32", a),
        children: e
    });
export {
    S as i, q as n, A as r, T as t
};
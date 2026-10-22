import {
    r
} from "./vendor-react-Fx2PtaaM.js";
import {
    S as a,
    _ as o,
    c as s
} from "./vendor-motion-Hvlv7m0n.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            i = new e.Error().stack;
        i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "cd68459f-dde6-4cd6-b577-ca26d56dbde8", e._sentryDebugIdIdentifier = "sentry-dbid-cd68459f-dde6-4cd6-b577-ca26d56dbde8")
    })()
} catch {}
var n = r(),
    t = {
        opacity: 0,
        width: 0,
        marginInlineStart: -4
    },
    c = {
        opacity: 1,
        width: "auto",
        marginInlineStart: 0
    };

function u({
    show: e,
    children: i
}) {
    const d = s() ? ? !1;
    return (0, n.jsx)(a, {
        initial: !1,
        children: e && (0, n.jsx)(o.div, {
            className: "flex min-w-0 shrink items-center",
            initial: t,
            animate: c,
            exit: t,
            transition: {
                duration: d ? 0 : .15,
                bounce: 0
            },
            children: i
        })
    })
}
export {
    u as t
};
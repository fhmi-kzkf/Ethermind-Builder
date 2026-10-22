import {
    CR as c,
    JM as u,
    NM as b,
    uA as h
} from "./app-shared-6CLVfi8w.js";
import {
    r as p
} from "./vendor-react-Fx2PtaaM.js";
import {
    $i as x,
    Yi as m,
    b_ as a
} from "./app-lazy-shared-BNTl480s.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "067b3279-affe-46f2-bd82-ce8200102b10", e._sentryDebugIdIdentifier = "sentry-dbid-067b3279-affe-46f2-bd82-ce8200102b10")
    })()
} catch {}
var s = p();

function w({
    open: e,
    onClose: t,
    onOpenChangeComplete: o,
    saving: i = !1,
    initialFocus: l = !1,
    children: n
}) {
    const r = b(),
        d = x({
            panCompensated: !0
        });
    return (0, s.jsx)(a, {
        open: e,
        onOpenChange: f => {
            f || t()
        },
        onOpenChangeComplete: o,
        skin: r ? "drawer" : "dialog",
        preventOutsideClose: !0,
        children: (0, s.jsx)(a.Content, {
            title: "Sketch",
            hideTitle: !0,
            hideCloseButton: !0,
            size: "3xl",
            initialFocus: l,
            overlayClassName: "bg-[var(--bg-scrim)]",
            className: {
                dialog: "flex h-[960px] w-[960px] flex-col overflow-hidden p-0",
                drawer: "flex min-h-0 flex-1 flex-col overflow-hidden"
            },
            drawer: {
                surface: {
                    className: "flex flex-col p-0",
                    style: m(d)
                }
            },
            children: (0, s.jsxs)("div", {
                className: c("bg-secondary-pulse text-secondary-pulse relative flex min-h-0 flex-1 flex-col", r && "pb-[max(0.75rem,var(--safe-area-inset-bottom,0px))]"),
                children: [(0, s.jsx)("div", {
                    className: "pointer-events-auto absolute top-3 left-3 z-20",
                    children: (0, s.jsx)(u, {
                        variant: "ghost",
                        rounded: !0,
                        icon: h,
                        "aria-label": "Close sketch",
                        hints: {
                            idle: "Close and keep draft",
                            disabled: "Wait for your sketch to attach"
                        },
                        disabled: i,
                        onClick: t
                    })
                }), (0, s.jsx)(a.Description, {
                    className: "sr-only",
                    children: "Draw, add text or shapes, then attach your sketch to the message."
                }), n]
            })
        })
    })
}
export {
    w as t
};
import {
    Kz as o
} from "./app-shared-6CLVfi8w.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "414256a0-1f6b-47e7-b6db-ca9eaa3ea56c", e._sentryDebugIdIdentifier = "sentry-dbid-414256a0-1f6b-47e7-b6db-ca9eaa3ea56c")
    })()
} catch {}
var s = o(e => ({
    isOpen: !1,
    openTrigger: void 0,
    lastCloseReason: null,
    returnFocusTarget: null,
    pendingQuery: "",
    open: n => {
        const t = typeof document > "u" ? null : document.activeElement;
        e(r => ({
            isOpen: !0,
            openTrigger: n,
            lastCloseReason: null,
            pendingQuery: "",
            returnFocusTarget: r.isOpen ? r.returnFocusTarget : t && t instanceof HTMLElement ? t : null
        }))
    },
    close: (n = "dismissed") => e({
        isOpen: !1,
        lastCloseReason: n,
        pendingQuery: ""
    }),
    appendPendingQuery: n => e(t => ({
        pendingQuery: t.pendingQuery + n
    })),
    erasePendingQueryChar: () => e(n => ({
        pendingQuery: n.pendingQuery.slice(0, -1)
    }))
}));

function i(e) {
    return (e.metaKey || e.ctrlKey) && !e.shiftKey && e.key.toLowerCase() === "k"
}

function l(e, n) {
    if (e.repeat) return !1;
    if (i(e)) {
        e.preventDefault(), e.stopPropagation();
        const {
            isOpen: t,
            open: r,
            close: a
        } = s.getState();
        return t ? a("shortcut_toggle") : r({
            triggerElement: "shortcut_pressed",
            triggerLocation: n
        }), !0
    }
    return !1
}
export {
    s as n, l as t
};
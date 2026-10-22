try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3e0401f3-ebd6-4ec0-965a-5fd959f5254d", e._sentryDebugIdIdentifier = "sentry-dbid-3e0401f3-ebd6-4ec0-965a-5fd959f5254d")
    })()
} catch {}
var t = [.25, .46, .45, .94];

function i(e) {
    return {
        hidden: {},
        visible: {
            transition: {
                delayChildren: e ? 0 : .12,
                staggerChildren: e ? 0 : .05
            }
        }
    }
}

function d(e) {
    return {
        hidden: {
            opacity: 0,
            y: e ? 0 : 12
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: e ? 0 : .4,
                ease: t
            }
        }
    }
}
export {
    i as n, d as r, t
};
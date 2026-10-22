import {
    ay as t,
    iy as s,
    ny as o,
    oy as d,
    ry as f,
    sy as i
} from "./app-shared-6CLVfi8w.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "feec25d5-6012-4507-976f-94ac5171fb99", e._sentryDebugIdIdentifier = "sentry-dbid-feec25d5-6012-4507-976f-94ac5171fb99")
    })()
} catch {}
export {
    o as flushMetrics, d as frontendMetricDefinitions, i as frontendMetricsCatalog, f as recordCounter, s as recordHistogram, t as startTimer
};
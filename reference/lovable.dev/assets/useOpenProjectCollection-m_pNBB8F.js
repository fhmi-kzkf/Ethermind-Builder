import {
    Cz as l,
    yv as r
} from "./app-shared-6CLVfi8w.js";
import {
    Gd as c,
    Sd as d,
    jd as u
} from "./app-lazy-shared-BNTl480s.js";
import {
    n as f
} from "./useProjectCollections-COcyY8F-.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new e.Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "c228d758-a5be-4ac3-a9b0-77099490f7d3", e._sentryDebugIdIdentifier = "sentry-dbid-c228d758-a5be-4ac3-a9b0-77099490f7d3")
    })()
} catch {}

function w() {
    const e = l(),
        s = d(),
        n = u(),
        o = f(e ? ? ""),
        i = c();
    return r(a => {
        if (!e || a.project_id !== e || !o.canRead || !s || !n) return;
        s.getState().requestCollectionEntry(a.collection_id, "chat_message");
        const t = n.getState();
        t.isFullscreenChat && i(!1), t.setIsFullscreenChat(!1), t.setIsPreviewOnly(!1), t.switchToViewRaw("files")
    })
}
export {
    w as t
};
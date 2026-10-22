import {
    Kz as n,
    wy as o,
    zO as l
} from "./app-shared-6CLVfi8w.js";
import {
    r
} from "./vendor-react-Fx2PtaaM.js";
import {
    H as u
} from "./route-shared-leaves-Cd6hFGLK.js";
import {
    it as d,
    nt as b,
    rt as g,
    tt as c
} from "./i18n-fn/publish--publish-CZ1qJQT9.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b4613bee-f463-4ea4-8233-1b812c14ed4d", e._sentryDebugIdIdentifier = "sentry-dbid-b4613bee-f463-4ea4-8233-1b812c14ed4d")
    })()
} catch {}
var a = r(),
    f = ({
        onUpgrade: e,
        onPublishAnyway: t
    }) => (0, a.jsx)(o, {
        title: g(),
        description: c(),
        actions: [{
            label: b(),
            variant: "outline",
            closeOnClick: !1,
            onClick: t
        }, {
            label: d(),
            variant: "accent",
            closeOnClick: !1,
            onClick: e
        }]
    }),
    i = n((e, t) => ({
        request: null,
        open: s => e({
            request: s
        }),
        close: () => e({
            request: null
        }),
        dismiss: () => {
            const {
                request: s
            } = t();
            s && (e({
                request: null
            }), s.onDismissed())
        }
    })),
    y = e => i.getState().open(e),
    D = () => i.getState().close();

function R() {
    const e = i(s => s.request),
        t = i(s => s.dismiss);
    return u(t), (0, a.jsx)(l, {
        open: e !== null,
        onOpenChange: s => !s && t(),
        children: e && (0, a.jsx)(f, { ...e
        })
    })
}
export {
    y as i, R as n, D as r, f as t
};
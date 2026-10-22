import {
    Kz as o,
    Ov as a,
    Zg as i,
    gE as l
} from "./app-shared-6CLVfi8w.js";
import {
    r as p
} from "./vendor-react-Fx2PtaaM.js";
import {
    _ as u,
    g as d,
    v as g
} from "./i18n-fn/publish-CsFxIUbG.js";
import {
    Bs as c
} from "./i18n-fn/publish--publish-CZ1qJQT9.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1289e4ba-a48e-47b8-9ee9-95702af2e910", e._sentryDebugIdIdentifier = "sentry-dbid-1289e4ba-a48e-47b8-9ee9-95702af2e910")
    })()
} catch {}
var r = p(),
    m = ({
        onDiscard: e,
        onCancel: t
    }) => (0, r.jsx)(i, {
        title: g(),
        description: c(),
        intent: "destructive",
        actions: {
            cancel: {
                label: u(),
                onClick: t
            },
            confirm: {
                label: d(),
                onClick: e
            }
        }
    }),
    n = o(e => ({
        prompt: null,
        setPrompt: t => e({
            prompt: t
        })
    }));

function C() {
    return n(e => e.setPrompt)
}

function P() {
    return n.getState().prompt !== null
}

function f() {
    n.getState().setPrompt(null)
}

function y() {
    const e = n(t => t.prompt);
    return (0, r.jsx)(a, {
        open: e !== null,
        onOpenChange: t => {
            if (t) return;
            const s = n.getState().prompt;
            s && (n.getState().setPrompt(null), s.onCancel ? .())
        },
        children: e && (0, r.jsx)(m, {
            onDiscard: () => {
                n.getState().setPrompt(null), e.onDiscard()
            },
            onCancel: () => {
                n.getState().setPrompt(null), e.onCancel ? .()
            }
        })
    })
}
l(f);
export {
    C as i, f as n, P as r, y as t
};
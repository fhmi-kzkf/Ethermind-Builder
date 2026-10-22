import {
    o as s
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    Gj as d,
    Nx as c,
    _S as r,
    iM as u,
    oS as b,
    yv as m
} from "./app-shared-6CLVfi8w.js";
import {
    i as f
} from "./vendor-react-Fx2PtaaM.js";
import {
    v as g,
    x as y
} from "./vendor-protobuf-BvDTVJFg.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c0352c3a-d0fc-4d99-825d-0e9ab7253ac4", e._sentryDebugIdIdentifier = "sentry-dbid-c0352c3a-d0fc-4d99-825d-0e9ab7253ac4")
    })()
} catch {}
var p = s(f(), 1),
    h = [{
        id: "powerkits-empire-family",
        probes: [{
            id: "floating-panel",
            kind: "dom",
            selector: "#ql-floating"
        }, {
            id: "pagehook-global",
            kind: "main-world-global",
            property: "__qlLastMessage"
        }, {
            id: "bypass-active-attr",
            kind: "dom",
            selector: "html[data-ql-bypass]"
        }, {
            id: "bypass-active-storage",
            kind: "local-storage",
            key: "__ql_bypass_active"
        }, {
            id: "brand:bundlee-lovable-pro",
            kind: "dom-text",
            selector: "#ql-floating .ql-title, #ql-floating .ql-brand",
            includes: "Bundlee"
        }, {
            id: "brand:empire-lovable-vip",
            kind: "dom-text",
            selector: "#ql-floating .ql-title, #ql-floating .ql-brand",
            includes: "Empire"
        }, {
            id: "brand:loveable-infinity",
            kind: "dom-text",
            selector: "#ql-floating .ql-title, #ql-floating .ql-brand",
            includes: "Infinity"
        }, {
            id: "brand:bundlee-premium-launcher",
            kind: "dom",
            selector: ".bundlee-floating-launcher, .bundlee-floating-dot, .bundlee-toast"
        }]
    }];
async function v(e) {
    switch (e.kind) {
        case "dom":
            return document.querySelector(e.selector) !== null;
        case "dom-text":
            {
                const t = e.includes.toLowerCase();
                return Array.from(document.querySelectorAll(e.selector)).some(n => (n.textContent ? ? "").toLowerCase().includes(t))
            }
        case "local-storage":
            return window.localStorage.getItem(e.key) !== null;
        case "main-world-global":
            return e.property in window;
        case "web-accessible-resource":
            return (await fetch(`chrome-extension://${e.extensionId}/${e.path}`)).ok
    }
}
async function x(e = h) {
    const t = [];
    for (const n of e) {
        const o = [];
        for (const a of n.probes) await v(a).catch(() => !1) && o.push(a.id);
        o.length > 0 && t.push({
            signatureId: n.id,
            matchedProbes: o
        })
    }
    return t
}
var Z = g("Cj1sb3ZhYmxlL2V2ZW50cy9zZWN1cml0eS92MS9tYWxpY2lvdXNfZXh0ZW5zaW9uX2RldGVjdGVkLnByb3RvEhpsb3ZhYmxlLmV2ZW50cy5zZWN1cml0eS52MSJ4ChxNYWxpY2lvdXNFeHRlbnNpb25EZXRlY3RlZFYxEhQKDHNpZ25hdHVyZV9pZBgBIAEoCRIWCg5tYXRjaGVkX3Byb2JlcxgCIAMoCRIQCghwYWdlX3VybBgDIAEoCToYgrUYCHNlY3VyaXR5krUYCGZyb250ZW5kQp8CCh5jb20ubG92YWJsZS5ldmVudHMuc2VjdXJpdHkudjFCH01hbGljaW91c0V4dGVuc2lvbkRldGVjdGVkUHJvdG9QAVpRZ2l0aHViLmNvbS9sb3ZhYmxlbGFicy9sb3ZhYmxlL2dvL3Byb3RvL2dlbi9sb3ZhYmxlL2V2ZW50cy9zZWN1cml0eS92MTtzZWN1cml0eXYxogIDTEVTqgIaTG92YWJsZS5FdmVudHMuU2VjdXJpdHkuVjHKAhpMb3ZhYmxlXEV2ZW50c1xTZWN1cml0eVxWMeICJkxvdmFibGVcRXZlbnRzXFNlY3VyaXR5XFYxXEdQQk1ldGFkYXRh6gIdTG92YWJsZTo6RXZlbnRzOjpTZWN1cml0eTo6VjFiBnByb3RvMw", [r]),
    w = y(Z, 0),
    _ = [0, 5e3, 25e3];
async function k(e) {
    try {
        const t = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(e));
        return Array.from(new Uint8Array(t)).map(n => n.toString(16).padStart(2, "0")).join("").slice(0, 16)
    } catch {
        return null
    }
}

function E() {
    const e = c(),
        t = d(o => !!o.userData),
        n = m(async o => {
            const a = await x();
            for (const i of a)
                if (!o.has(i.signatureId) && (o.add(i.signatureId), e.emit(w, {
                        signatureId: i.signatureId,
                        matchedProbes: i.matchedProbes,
                        pageUrl: window.location.origin + window.location.pathname
                    }), t)) {
                    const l = await k(i.signatureId);
                    l && u().POST("/client-diagnostics", {
                        body: {
                            code: l
                        }
                    }).catch(() => {})
                }
        });
    return (0, p.useEffect)(() => {
        const o = new Set,
            a = [],
            i = b(() => {
                for (const l of _) a.push(setTimeout(() => {
                    n(o)
                }, l))
            });
        return () => {
            i();
            for (const l of a) clearTimeout(l)
        }
    }, [n]), null
}
export {
    E as MaliciousExtensionReporter
};
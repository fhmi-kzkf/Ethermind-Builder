try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1e34eae8-8e85-401f-8715-81a34b37f01b", e._sentryDebugIdIdentifier = "sentry-dbid-1e34eae8-8e85-401f-8715-81a34b37f01b")
    })()
} catch {}
var l = "lovable:document-preview-size",
    i = "lovable:request-preview-size",
    a = "lovable:document-preview-pointerdown",
    u = "lovable:document-preview-open-link";

function s(e) {
    if (!e || typeof e != "object") return null;
    const {
        type: n,
        href: t
    } = e;
    if (n !== "lovable:document-preview-open-link" || typeof t != "string") return null;
    try {
        const r = new URL(t);
        return r.protocol === "http:" || r.protocol === "https:" ? r.href : null
    } catch {
        return null
    }
}

function c(e) {
    let n = e;
    for (let t = 0; t < 4; t += 1) try {
        const r = decodeURIComponent(n);
        if (r === n) break;
        n = r
    } catch {
        break
    }
    return n.replaceAll(/__lovable_token=[^&#]*/gi, "")
}

function o(e) {
    if (!e) return null;
    try {
        return decodeURIComponent(new URL(e).pathname.split("/").pop() ? ? "") || null
    } catch {
        return null
    }
}

function p(e) {
    const n = o(e);
    return n ? /\.(md|markdown)$/i.test(n) ? "allow-scripts allow-popups allow-popups-to-escape-sandbox" : "allow-scripts allow-same-origin" : "allow-scripts"
}

function d(e) {
    const n = o(e);
    if (!n || !/\.(md|markdown|html?)$/i.test(n)) return e;
    const t = new URL(e);
    return t.searchParams.set("lovableOpenLinksInNewTab", "1"), t.toString()
}

function f(e) {
    const n = o(e);
    if (!n || !/\.html?$/i.test(n)) return null;
    const t = new URL(e);
    return t.pathname.startsWith("/document-preview/") ? (t.pathname = t.pathname.replace("/document-preview/", "/document-thumbnail/"), t.toString()) : null
}
export {
    o as a, p as c, l as i, d as l, a as n, c as o, i as r, s, u as t, f as u
};
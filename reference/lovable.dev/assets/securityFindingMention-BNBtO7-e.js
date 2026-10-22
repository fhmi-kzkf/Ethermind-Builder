try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2ea57bc7-0fa9-4f41-ae96-f7cc8db03a95", e._sentryDebugIdIdentifier = "sentry-dbid-2ea57bc7-0fa9-4f41-ae96-f7cc8db03a95")
    })()
} catch {}
var u = e => Array.isArray(e) && e.length > 1;

function y(e, n) {
    const {
        id: a,
        ids: i,
        memberNounPlural: s,
        name: t,
        source: d,
        level: c,
        description: o
    } = e, r = u(i), f = r ? `${t} (${i.length} affected ${s??"findings"})` : t, l = r ? `Internal IDs: ${i.join(", ")}` : `Internal ID: ${a}`;
    return `Security Finding: [${f}${n?`
Project: ${n}`:""}
${l}
Scanner: ${d}
Level: ${c}
Description: ${o}]
`
}
export {
    y as n, u as t
};
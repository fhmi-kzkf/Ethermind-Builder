import {
    Eb as r,
    Tb as i,
    bb as _,
    kb as o
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new n.Error().stack;
        t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "06604739-a00f-4c5a-9729-7a787a74a889", n._sentryDebugIdIdentifier = "sentry-dbid-06604739-a00f-4c5a-9729-7a787a74a889")
    })()
} catch {}
var a = document.documentElement.lang || "en",
    d = {
        __proto__: null,
        "pt-BR": () => o(() =>
            import ("../i18n-data/connected-computer--connectedComputer.pt-BR-DJhUGG6T.js"), []),
        de: () => o(() =>
            import ("../i18n-data/connected-computer--connectedComputer.de-BQCQx3hj.js"), []),
        fr: () => o(() =>
            import ("../i18n-data/connected-computer--connectedComputer.fr-DuKs3ihN.js"), []),
        es: () => o(() =>
            import ("../i18n-data/connected-computer--connectedComputer.es-lBQmlluZ.js"), []),
        it: () => o(() =>
            import ("../i18n-data/connected-computer--connectedComputer.it-9MZ9UtRs.js"), []),
        hi: () => o(() =>
            import ("../i18n-data/connected-computer--connectedComputer.hi-B_p39CxE.js"), []),
        id: () => o(() =>
            import ("../i18n-data/connected-computer--connectedComputer.id-DHfEe66n.js"), []),
        th: () => o(() =>
            import ("../i18n-data/connected-computer--connectedComputer.th-DZ09T7fd.js"), []),
        ko: () => o(() =>
            import ("../i18n-data/connected-computer--connectedComputer.ko-BXe6P-pr.js"), []),
        ja: () => o(() =>
            import ("../i18n-data/connected-computer--connectedComputer.ja-DZgffcm1.js"), [])
    },
    c = a === "en" ? void 0 : i()["connected-computer--connectedComputer"];
a !== "en" && c === void 0 && (d[a] === null ? c = null : (d[a] ? .() ? ? Promise.resolve()).then(n => {
    c = n ? .default ? ? null, r()
}, () => {
    c = null, r()
}));
var p = () => c,
    u = () => a,
    m = {
        connectedComputer_available: "Available",
        connectedComputer_computers: "Computers",
        connectedComputer_connecting: "Connecting",
        connectedComputer_disconnect: ["Disconnect ", ["name"]],
        connectedComputer_loading: "Loading computers…",
        connectedComputer_noComputers: "Connect from the Mac app",
        connectedComputer_off: "Off",
        connectedComputer_offline: "Offline",
        connectedComputer_permissionRequired: "Permission required",
        connectedComputer_privateChats: "Available in your private chats",
        connectedComputer_selectionFailed: "Could not update computer access. Try again.",
        connectedComputer_thisMac: "This Mac",
        connectedComputer_unavailable: "Computers are unavailable"
    },
    e = n => (t = {}) => _(p() ? .[n], t, u()) ? ? _(m[n], t, "en") ? ? "",
    l = e("connectedComputer_available"),
    C = e("connectedComputer_computers"),
    f = e("connectedComputer_connecting"),
    v = e("connectedComputer_disconnect"),
    b = e("connectedComputer_loading"),
    E = e("connectedComputer_noComputers"),
    g = e("connectedComputer_off"),
    D = e("connectedComputer_offline"),
    I = e("connectedComputer_permissionRequired"),
    h = e("connectedComputer_privateChats"),
    T = e("connectedComputer_selectionFailed"),
    R = e("connectedComputer_thisMac"),
    y = e("connectedComputer_unavailable");
export {
    b as a, D as c, T as d, R as f, v as i, I as l, C as n, E as o, y as p, f as r, g as s, l as t, h as u
};
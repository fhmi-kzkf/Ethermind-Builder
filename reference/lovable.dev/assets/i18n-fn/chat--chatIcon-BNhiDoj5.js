import {
    Eb as n,
    Tb as s,
    bb as r,
    kb as h
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var c = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new c.Error().stack;
        e && (c._sentryDebugIds = c._sentryDebugIds || {}, c._sentryDebugIds[e] = "538cb8d5-b477-40a0-88e8-89add764915e", c._sentryDebugIdIdentifier = "sentry-dbid-538cb8d5-b477-40a0-88e8-89add764915e")
    })()
} catch {}
var t = document.documentElement.lang || "en",
    l = {
        __proto__: null,
        "pt-BR": null,
        de: null,
        fr: null,
        es: null,
        it: null,
        hi: null,
        id: null,
        th: null,
        ko: () => h(() =>
            import ("../i18n-data/chat--chatIcon.ko-DsEt4Y_e.js"), []),
        ja: null
    },
    o = t === "en" ? void 0 : s()["chat--chatIcon"];
t !== "en" && o === void 0 && (l[t] === null ? o = null : (l[t] ? .() ? ? Promise.resolve()).then(c => {
    o = c ? .default ? ? null, n()
}, () => {
    o = null, n()
}));
var _ = () => o,
    d = () => t,
    i = {
        chatIcon_categoryActivity: "Activity",
        chatIcon_categoryAnimalsNature: "Animals & Nature",
        chatIcon_categoryFlags: "Flags",
        chatIcon_categoryFoodDrink: "Food & Drink",
        chatIcon_categoryObjects: "Objects",
        chatIcon_categoryPeople: "Smileys & People",
        chatIcon_categorySymbols: "Symbols",
        chatIcon_categoryTravelPlaces: "Travel & Places",
        chatIcon_change: "Change icon",
        chatIcon_clearSearch: "Clear search",
        chatIcon_loadFailed: "Couldn't load emoji",
        chatIcon_noResults: "No results",
        chatIcon_remove: "Remove",
        chatIcon_retry: "Retry",
        chatIcon_searchEmoji: "Search emoji",
        chatIcon_updateFailed: "Couldn't update chat icon"
    },
    a = c => (e = {}) => r(_() ? .[c], e, d()) ? ? r(i[c], e, "en") ? ? "",
    y = a("chatIcon_categoryActivity"),
    g = a("chatIcon_categoryAnimalsNature"),
    u = a("chatIcon_categoryFlags"),
    v = a("chatIcon_categoryFoodDrink"),
    m = a("chatIcon_categoryObjects"),
    b = a("chatIcon_categoryPeople"),
    f = a("chatIcon_categorySymbols"),
    p = a("chatIcon_categoryTravelPlaces"),
    F = a("chatIcon_change"),
    D = a("chatIcon_clearSearch"),
    P = a("chatIcon_loadFailed"),
    j = a("chatIcon_noResults"),
    A = a("chatIcon_remove"),
    S = a("chatIcon_retry"),
    E = a("chatIcon_searchEmoji"),
    T = a("chatIcon_updateFailed");
export {
    m as a, p as c, P as d, j as f, T as g, E as h, v as i, F as l, S as m, g as n, b as o, A as p, u as r, f as s, y as t, D as u
};
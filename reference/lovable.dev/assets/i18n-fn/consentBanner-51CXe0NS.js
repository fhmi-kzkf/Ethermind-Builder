import {
    Eb as t,
    Tb as l,
    bb as c,
    kb as n
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            o = new e.Error().stack;
        o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "aa7f3673-647b-4dbc-bc0c-84d669287fa0", e._sentryDebugIdIdentifier = "sentry-dbid-aa7f3673-647b-4dbc-bc0c-84d669287fa0")
    })()
} catch {}
var _ = document.documentElement.lang || "en",
    s = {
        __proto__: null,
        "pt-BR": () => n(() =>
            import ("../i18n-data/consentBanner.pt-BR-BlY4O1_c.js"), []),
        de: () => n(() =>
            import ("../i18n-data/consentBanner.de-CqDQjysu.js"), []),
        fr: () => n(() =>
            import ("../i18n-data/consentBanner.fr-2F7A_gG7.js"), []),
        es: () => n(() =>
            import ("../i18n-data/consentBanner.es-wj9KOtJc.js"), []),
        it: () => n(() =>
            import ("../i18n-data/consentBanner.it-BN2LIX3U.js"), []),
        hi: () => n(() =>
            import ("../i18n-data/consentBanner.hi-BLOiLGWS.js"), []),
        id: () => n(() =>
            import ("../i18n-data/consentBanner.id-Cmf0DcGU.js"), []),
        th: () => n(() =>
            import ("../i18n-data/consentBanner.th-CVczUXTc.js"), []),
        ko: () => n(() =>
            import ("../i18n-data/consentBanner.ko-CjncJirI.js"), []),
        ja: () => n(() =>
            import ("../i18n-data/consentBanner.ja-CkUKfQIC.js"), [])
    },
    r = _ === "en" ? void 0 : l().consentBanner;
_ !== "en" && r === void 0 && (s[_] === null ? r = null : (s[_] ? .() ? ? Promise.resolve()).then(e => {
    r = e ? .default ? ? null, t()
}, () => {
    r = null, t()
}));
var i = () => r,
    d = () => _,
    B = {
        consentBanner_acceptAll: "Accept all",
        consentBanner_ariaLabel: "Cookie banner",
        consentBanner_cookiePolicyLink: "Cookie Policy",
        consentBanner_doNotSell: "Do not sell my data",
        consentBanner_managePreferences: "Manage preferences",
        consentBanner_message: "We use cookies to enhance your development experience and keep your data secure.",
        consentBanner_ok: "OK",
        consentBanner_privacyPolicyLink: "Privacy Policy",
        consentBanner_rejectAll: "Reject all"
    },
    a = e => (o = {}) => c(i() ? .[e], o, d()) ? ? c(B[e], o, "en") ? ? "",
    f = a("consentBanner_acceptAll"),
    m = a("consentBanner_ariaLabel"),
    v = a("consentBanner_cookiePolicyLink"),
    y = a("consentBanner_doNotSell"),
    b = a("consentBanner_managePreferences"),
    P = a("consentBanner_message"),
    E = a("consentBanner_ok"),
    L = a("consentBanner_privacyPolicyLink"),
    u = a("consentBanner_rejectAll");
export {
    b as a, L as c, y as i, u as l, m as n, P as o, v as r, E as s, f as t
};
import {
    Eb as t,
    Tb as p,
    bb as l,
    kb as _
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new e.Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "e16598ac-8e36-4976-8890-80f8a4c80022", e._sentryDebugIdIdentifier = "sentry-dbid-e16598ac-8e36-4976-8890-80f8a4c80022")
    })()
} catch {}
var n = document.documentElement.lang || "en",
    u = {
        __proto__: null,
        "pt-BR": () => _(() =>
            import ("../i18n-data/publish.pt-BR-5WicaTkA.js"), []),
        de: () => _(() =>
            import ("../i18n-data/publish.de-rqb8iuIG.js"), []),
        fr: () => _(() =>
            import ("../i18n-data/publish.fr-CwT_wwig.js"), []),
        es: () => _(() =>
            import ("../i18n-data/publish.es-DSTR67I0.js"), []),
        it: () => _(() =>
            import ("../i18n-data/publish.it-8MmF3TP4.js"), []),
        hi: () => _(() =>
            import ("../i18n-data/publish.hi-CNXAc3up.js"), []),
        id: () => _(() =>
            import ("../i18n-data/publish.id-CqNoD-nx.js"), []),
        th: () => _(() =>
            import ("../i18n-data/publish.th-B_Ahzjnt.js"), []),
        ko: () => _(() =>
            import ("../i18n-data/publish.ko-C7GiJCU1.js"), []),
        ja: () => _(() =>
            import ("../i18n-data/publish.ja-7PCWia6o.js"), [])
    },
    a = n === "en" ? void 0 : p().publish;
n !== "en" && a === void 0 && (u[n] === null ? a = null : (u[n] ? .() ? ? Promise.resolve()).then(e => {
    a = e ? .default ? ? null, t()
}, () => {
    a = null, t()
}));
var r = () => a,
    o = () => n,
    d = {
        publish_button_publishing: "Publishing",
        publish_button_updating: "Updating",
        publish_copyUrl: "Copy URL",
        publish_failed_fix_initiating: "Fixing…",
        publish_failed_tryToFix: "Try to fix",
        publish_gate_reviewFindings: "Review",
        publish_gate_runSecurityScan: "Run security scan",
        publish_googleMaps_fixIt: "Fix it",
        publish_googleMaps_sendingHint: "Lovable is sending your message…",
        publish_live_seoEdit: "Edit",
        publish_live_seoHint: "Ask Lovable to edit your title, description & icon",
        publish_payments_setupRequired: "Setup required, no live payments",
        publish_payments_verificationRequired: "Verification required, no live payments",
        publish_searchAndSocial: "Social & search",
        publish_unsaved_discard: "Discard changes",
        publish_unsaved_keepEditing: "Keep editing",
        publish_unsaved_title: "Unsaved changes",
        publish_url_settingUp: "Setting up your domain…",
        publish_payments_verificationInReview: "Verification in review, no live payments"
    },
    i = e => (s = {}) => l(r() ? .[e], s, o()) ? ? l(d[e], s, "en") ? ? "",
    h = i("publish_button_publishing"),
    v = i("publish_button_updating"),
    g = i("publish_copyUrl"),
    c = i("publish_failed_fix_initiating"),
    f = i("publish_failed_tryToFix"),
    y = i("publish_gate_reviewFindings"),
    m = i("publish_gate_runSecurityScan"),
    E = i("publish_googleMaps_fixIt"),
    R = i("publish_googleMaps_sendingHint"),
    I = i("publish_live_seoEdit"),
    D = i("publish_live_seoHint"),
    T = i("publish_payments_setupRequired"),
    L = i("publish_payments_verificationRequired"),
    A = i("publish_searchAndSocial"),
    w = i("publish_unsaved_discard"),
    x = i("publish_unsaved_keepEditing"),
    P = i("publish_unsaved_title"),
    S = i("publish_url_settingUp"),
    V = i("publish_payments_verificationInReview");
export {
    x as _, f as a, E as c, D as d, T as f, w as g, A as h, c as i, R as l, L as m, v as n, y as o, V as p, g as r, m as s, h as t, I as u, P as v, S as y
};
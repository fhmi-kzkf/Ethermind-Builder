import {
    Eb as t,
    Tb as c,
    bb as _,
    kb as a
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            i = new e.Error().stack;
        i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "3f5e463a-f373-4f62-acb1-2e57e2c0b7f1", e._sentryDebugIdIdentifier = "sentry-dbid-3f5e463a-f373-4f62-acb1-2e57e2c0b7f1")
    })()
} catch {}
var o = document.documentElement.lang || "en",
    s = {
        __proto__: null,
        "pt-BR": () => a(() =>
            import ("../i18n-data/share.pt-BR-DLO54RQT.js"), []),
        de: () => a(() =>
            import ("../i18n-data/share.de-BoQo0JGM.js"), []),
        fr: () => a(() =>
            import ("../i18n-data/share.fr-CWKIK29Q.js"), []),
        es: () => a(() =>
            import ("../i18n-data/share.es-DGCbLKDR.js"), []),
        it: () => a(() =>
            import ("../i18n-data/share.it-CKenlr9n.js"), []),
        hi: () => a(() =>
            import ("../i18n-data/share.hi-DhQ0KBbT.js"), []),
        id: () => a(() =>
            import ("../i18n-data/share.id-D184no5u.js"), []),
        th: () => a(() =>
            import ("../i18n-data/share.th-D3kdXfX5.js"), []),
        ko: () => a(() =>
            import ("../i18n-data/share.ko-BbQ61d_o.js"), []),
        ja: () => a(() =>
            import ("../i18n-data/share.ja-DftmKWDr.js"), [])
    },
    r = o === "en" ? void 0 : c().share;
o !== "en" && r === void 0 && (s[o] === null ? r = null : (s[o] ? .() ? ? Promise.resolve()).then(e => {
    r = e ? .default ? ? null, t()
}, () => {
    r = null, t()
}));
var d = () => r,
    l = () => o,
    p = {
        share_cancel: "Cancel",
        share_copied: "Copied!",
        share_copyLink: "Copy link",
        share_copyPreviewLink: "Copy preview link",
        share_externalConfirm_andMore: {
            d: [
                ["countPlural", "count", "plural"],
                ["countNumber", "count", "number"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": ["and ", ["countNumber"], " more..."],
                "countPlural=other": ["and ", ["countNumber"], " more..."]
            },
            f: "share_externalConfirm_andMore"
        },
        share_invitationAccepted: "Invitation accepted!",
        share_invitationAcceptedDescription: ["You now have access to “", ["name"], "”."],
        share_invitationDeclined: "Invitation declined",
        share_invitationDeclinedDescription: ["You’ve declined the invitation to “", ["name"], "”."],
        share_linkCopiedToClipboard: "Link copied to clipboard",
        share_unknownUser: "Unknown user"
    },
    n = e => (i = {}) => _(d() ? .[e], i, l()) ? ? _(p[e], i, "en") ? ? "",
    v = n("share_cancel"),
    u = n("share_copied"),
    f = n("share_copyLink"),
    m = n("share_copyPreviewLink"),
    D = n("share_externalConfirm_andMore"),
    b = n("share_invitationAccepted"),
    E = n("share_invitationAcceptedDescription"),
    y = n("share_invitationDeclined"),
    L = n("share_invitationDeclinedDescription"),
    P = n("share_linkCopiedToClipboard"),
    k = n("share_unknownUser");
export {
    D as a, y as c, k as d, m as i, L as l, u as n, b as o, f as r, E as s, v as t, P as u
};
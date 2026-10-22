import {
    Eb as i,
    Tb as p,
    bb as n,
    kb as a
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new t.Error().stack;
        s && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[s] = "4cf7bf06-4ad1-4b39-9a61-de2f6336a07b", t._sentryDebugIdIdentifier = "sentry-dbid-4cf7bf06-4ad1-4b39-9a61-de2f6336a07b")
    })()
} catch {}
var r = document.documentElement.lang || "en",
    o = {
        __proto__: null,
        "pt-BR": () => a(() =>
            import ("../i18n-data/chat--pastedText.pt-BR-NSLITIaZ.js"), []),
        de: () => a(() =>
            import ("../i18n-data/chat--pastedText.de-npyK9H78.js"), []),
        fr: () => a(() =>
            import ("../i18n-data/chat--pastedText.fr-ufmraLer.js"), []),
        es: () => a(() =>
            import ("../i18n-data/chat--pastedText.es-Cnt1yIxm.js"), []),
        it: () => a(() =>
            import ("../i18n-data/chat--pastedText.it-Blbs7xMT.js"), []),
        hi: () => a(() =>
            import ("../i18n-data/chat--pastedText.hi-DChU-4an.js"), []),
        id: () => a(() =>
            import ("../i18n-data/chat--pastedText.id-Bf1IPogM.js"), []),
        th: () => a(() =>
            import ("../i18n-data/chat--pastedText.th-DQIoIwa9.js"), []),
        ko: () => a(() =>
            import ("../i18n-data/chat--pastedText.ko-CzicboZ8.js"), []),
        ja: () => a(() =>
            import ("../i18n-data/chat--pastedText.ja--ODgNhBr.js"), [])
    },
    d = r === "en" ? void 0 : p()["chat--pastedText"];
r !== "en" && d === void 0 && (o[r] === null ? d = null : (o[r] ? .() ? ? Promise.resolve()).then(t => {
    d = t ? .default ? ? null, i()
}, () => {
    d = null, i()
}));
var _ = () => d,
    T = () => r,
    l = {
        pastedText_attachedToast: "Paste attached",
        pastedText_cancelEdit: "Cancel",
        pastedText_charCount: {
            d: [
                ["countPlural", "count", "plural"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": [
                    ["formatted"], " char"
                ],
                "countPlural=other": [
                    ["formatted"], " chars"
                ]
            },
            f: "pastedText_charCount"
        },
        pastedText_combinedStats: {
            d: [
                ["countPlural", "count", "plural"],
                ["countNumber", "count", "number"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": [
                    ["countNumber"], " pasted item · ", ["chars"], " characters total"
                ],
                "countPlural=other": [
                    ["countNumber"], " pasted items · ", ["chars"], " characters total"
                ]
            },
            f: "pastedText_combinedStats"
        },
        pastedText_contentLabel: "Content",
        pastedText_contextWarning: "That's a lot of pasted text — consider trimming it so Lovable can read everything at once.",
        pastedText_copied: "Copied",
        pastedText_copyText: "Copy text",
        pastedText_dialogSubtitle: "Sent with your message as an attachment",
        pastedText_dialogSubtitleDraft: "Sends with your message as an attachment",
        pastedText_discardCancel: "Keep editing",
        pastedText_discardConfirm: "Discard",
        pastedText_discardDescription: "Your edits to this paste will be lost.",
        pastedText_discardTitle: "Discard changes",
        pastedText_edit: "Edit",
        pastedText_editDialogTitle: "Edit pasted text",
        pastedText_failedCardLabel: ["Couldn't load pasted text: ", ["title"]],
        pastedText_fileLimit: "File limit reached",
        pastedText_fileLimitDescription: ["Please limit your message to ", ["count"], " files."],
        pastedText_goToLine: ["Go to line ", ["line"]],
        pastedText_insertAsText: "Insert as text",
        pastedText_insertAsTextTooLong: "Too long to fit in the message",
        pastedText_kindCode: "Code",
        pastedText_kindCsv: "CSV",
        pastedText_kindHtml: "HTML",
        pastedText_kindJson: "JSON",
        pastedText_kindLog: "Logs",
        pastedText_kindSql: "SQL",
        pastedText_kindSvg: "SVG",
        pastedText_kindText: "Text",
        pastedText_lineCount: {
            d: [
                ["countPlural", "count", "plural"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": [
                    ["formatted"], " line"
                ],
                "countPlural=other": [
                    ["formatted"], " lines"
                ]
            },
            f: "pastedText_lineCount"
        },
        pastedText_loadFailed: "Couldn't load the pasted text",
        pastedText_openCardLabel: ["Open pasted text: ", ["title"]],
        pastedText_openDocument: "Open document",
        pastedText_pasteInline: "Paste inline",
        pastedText_previewLoading: "Loading pasted text",
        pastedText_reference: "Reference",
        pastedText_referenceBlockedSecret: "Remove the secret before referencing this pasted text",
        pastedText_referenceFailed: "Couldn’t reference the pasted text. Try again.",
        pastedText_referenced: "Referenced",
        pastedText_remove: "Remove",
        pastedText_removeAttachment: "Remove attachment",
        pastedText_removeCardLabel: ["Remove ", ["title"]],
        pastedText_removeSecretBeforeSave: "Remove the secret from this pasted text before saving.",
        pastedText_removedToast: "Attachment removed",
        pastedText_retryLoad: "Try again",
        pastedText_retrySave: "Retry save",
        pastedText_reviewSecretField: "Review title",
        pastedText_saveChanges: "Save changes",
        pastedText_saveFailedCardLabel: ["Changes weren’t saved: ", ["title"]],
        pastedText_saveFailedDescription: "The saved version is unchanged. Retry saving or remove this attachment.",
        pastedText_saveFailedTitle: "Changes weren’t saved",
        pastedText_savingChanges: "Saving changes…",
        pastedText_secretDetected: "Secret detected",
        pastedText_statsSummary: [
            ["chars"], " characters · ", ["words"], " words · ", ["lines"], " lines"
        ],
        pastedText_titleLabel: "Title",
        pastedText_titlePlaceholder: "Name this paste",
        pastedText_undo: "Undo",
        pastedText_uploadFailedInlinedToast: "Couldn't upload your paste, so it was added as text",
        pastedText_uploading: "Uploading",
        hoverMode_openInChat: "Open in chat"
    },
    e = t => (s = {}) => n(_() ? .[t], s, T()) ? ? n(l[t], s, "en") ? ? "",
    c = e("pastedText_attachedToast"),
    v = e("pastedText_cancelEdit"),
    m = e("pastedText_charCount"),
    u = e("pastedText_combinedStats"),
    f = e("pastedText_contentLabel"),
    g = e("pastedText_contextWarning"),
    h = e("pastedText_copied"),
    b = e("pastedText_copyText"),
    L = e("pastedText_dialogSubtitle"),
    C = e("pastedText_dialogSubtitleDraft"),
    S = e("pastedText_discardCancel"),
    D = e("pastedText_discardConfirm"),
    y = e("pastedText_discardDescription"),
    P = e("pastedText_discardTitle"),
    k = e("pastedText_edit"),
    E = e("pastedText_editDialogTitle"),
    I = e("pastedText_failedCardLabel"),
    F = e("pastedText_fileLimit"),
    R = e("pastedText_fileLimitDescription"),
    w = e("pastedText_goToLine"),
    A = e("pastedText_insertAsText"),
    O = e("pastedText_insertAsTextTooLong"),
    V = e("pastedText_kindCode"),
    B = e("pastedText_kindCsv"),
    N = e("pastedText_kindHtml"),
    H = e("pastedText_kindJson"),
    J = e("pastedText_kindLog"),
    M = e("pastedText_kindSql"),
    q = e("pastedText_kindSvg"),
    W = e("pastedText_kindText"),
    G = e("pastedText_lineCount"),
    U = e("pastedText_loadFailed"),
    j = e("pastedText_openCardLabel"),
    K = e("pastedText_openDocument"),
    Q = e("pastedText_pasteInline"),
    Y = e("pastedText_previewLoading"),
    z = e("pastedText_reference"),
    X = e("pastedText_referenceBlockedSecret"),
    Z = e("pastedText_referenceFailed"),
    $ = e("pastedText_referenced"),
    ee = e("pastedText_remove"),
    te = e("pastedText_removeAttachment"),
    ae = e("pastedText_removeCardLabel"),
    se = e("pastedText_removeSecretBeforeSave"),
    de = e("pastedText_removedToast"),
    re = e("pastedText_retryLoad"),
    ie = e("pastedText_retrySave"),
    ne = e("pastedText_reviewSecretField"),
    oe = e("pastedText_saveChanges"),
    pe = e("pastedText_saveFailedCardLabel"),
    _e = e("pastedText_saveFailedDescription"),
    Te = e("pastedText_saveFailedTitle"),
    le = e("pastedText_savingChanges"),
    xe = e("pastedText_secretDetected"),
    ce = e("pastedText_statsSummary"),
    ve = e("pastedText_titleLabel"),
    me = e("pastedText_titlePlaceholder"),
    ue = e("pastedText_undo"),
    fe = e("pastedText_uploadFailedInlinedToast"),
    ge = e("pastedText_uploading"),
    he = e("hoverMode_openInChat");
export {
    Te as $, q as A, Z as B, O as C, H as D, N as E, K as F, se as G, ee as H, Q as I, ie as J, de as K, Y as L, G as M, U as N, J as O, j as P, _e as Q, z as R, A as S, B as T, te as U, $ as V, ae as W, oe as X, ne as Y, pe as Z, E as _, u as a, ue as at, R as b, h as c, C as d, le as et, S as f, k as g, P as h, m as i, me as it, W as j, M as k, b as l, y as m, c as n, ce as nt, f as o, fe as ot, D as p, re as q, v as r, ve as rt, g as s, ge as st, he as t, xe as tt, L as u, I as v, V as w, w as x, F as y, X as z
};
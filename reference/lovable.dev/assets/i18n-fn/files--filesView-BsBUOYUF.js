import {
    Eb as t,
    Tb as _,
    bb as d,
    kb as a
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var i = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            o = new i.Error().stack;
        o && (i._sentryDebugIds = i._sentryDebugIds || {}, i._sentryDebugIds[o] = "ae576c5b-156e-4fe8-995f-eb6c6a05a25b", i._sentryDebugIdIdentifier = "sentry-dbid-ae576c5b-156e-4fe8-995f-eb6c6a05a25b")
    })()
} catch {}
var l = document.documentElement.lang || "en",
    r = {
        __proto__: null,
        "pt-BR": () => a(() =>
            import ("../i18n-data/files--filesView.pt-BR-Cblnlpbd.js"), []),
        de: () => a(() =>
            import ("../i18n-data/files--filesView.de-LCKKLq57.js"), []),
        fr: () => a(() =>
            import ("../i18n-data/files--filesView.fr-DaL6vrUO.js"), []),
        es: () => a(() =>
            import ("../i18n-data/files--filesView.es-BmTKuMVn.js"), []),
        it: () => a(() =>
            import ("../i18n-data/files--filesView.it--6h-9jJs.js"), []),
        hi: () => a(() =>
            import ("../i18n-data/files--filesView.hi-pjf-Ta3B.js"), []),
        id: () => a(() =>
            import ("../i18n-data/files--filesView.id-DeMTROdG.js"), []),
        th: () => a(() =>
            import ("../i18n-data/files--filesView.th-CW1cjhfM.js"), []),
        ko: () => a(() =>
            import ("../i18n-data/files--filesView.ko-C3FseJep.js"), []),
        ja: () => a(() =>
            import ("../i18n-data/files--filesView.ja-DYSCH4Ed.js"), [])
    },
    s = l === "en" ? void 0 : _()["files--filesView"];
l !== "en" && s === void 0 && (r[l] === null ? s = null : (r[l] ? .() ? ? Promise.resolve()).then(i => {
    s = i ? .default ? ? null, t()
}, () => {
    s = null, t()
}));
var n = () => s,
    f = () => l,
    w = {
        filesView_documentDeleted: "This file was deleted",
        filesView_embedLoadFailed: "Couldn't load this file",
        filesView_embedNotFound: "Not found in this project's files",
        filesView_firstPage: "You're on the first page",
        filesView_lastPage: "No more files",
        filesView_loadFailed: "Could not load files. Try again.",
        filesView_newFileCancel: "Cancel",
        filesView_newFileErrorCharset: "Use letters, numbers, spaces, dots, dashes, and underscores",
        filesView_newFileErrorEmpty: "Enter a file name",
        filesView_newFileErrorReservedEdit: "Names ending in .edit or .edit-<number> are reserved for edited copies",
        filesView_newFileErrorReservedNotes: "This name is reserved for the project notes",
        filesView_newFileErrorTooLong: "That file name is too long",
        filesView_newFileErrorTrailingDotSpace: "File names can't end with a dot or space",
        filesView_noFilesLoaded: "No files loaded yet.",
        filesView_previewFailed: "Failed to load file preview.",
        editorNotes_loadFailed: "Couldn't load notes",
        editorNotes_placeholder: "Write notes for this project...",
        editorNotes_saveFailed: "Couldn't save changes",
        editorNotes_saved: "Saved",
        editorNotes_saving: "Saving...",
        editorNotes_tryAgain: "Try again"
    },
    e = i => (o = {}) => d(n() ? .[i], o, f()) ? ? d(w[i], o, "en") ? ? "",
    V = e("filesView_documentDeleted"),
    m = e("filesView_embedLoadFailed"),
    c = e("filesView_embedNotFound"),
    p = e("filesView_firstPage"),
    u = e("filesView_lastPage"),
    E = e("filesView_loadFailed"),
    F = e("filesView_newFileCancel"),
    g = e("filesView_noFilesLoaded"),
    b = e("filesView_previewFailed"),
    N = e("editorNotes_loadFailed"),
    h = e("editorNotes_placeholder"),
    D = e("editorNotes_saveFailed"),
    T = e("editorNotes_saved"),
    L = e("editorNotes_saving"),
    y = e("editorNotes_tryAgain");
export {
    L as a, m as c, u as d, E as f, b as h, T as i, c as l, g as m, h as n, y as o, F as p, D as r, V as s, N as t, p as u
};
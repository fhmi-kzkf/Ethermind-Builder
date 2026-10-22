import {
    Eb as _,
    Tb as f,
    bb as a,
    kb as i
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var s = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            l = new s.Error().stack;
        l && (s._sentryDebugIds = s._sentryDebugIds || {}, s._sentryDebugIds[l] = "b0667ce3-b549-42df-9c7b-0249d734a555", s._sentryDebugIdIdentifier = "sentry-dbid-b0667ce3-b549-42df-9c7b-0249d734a555")
    })()
} catch {}
var o = document.documentElement.lang || "en",
    t = {
        __proto__: null,
        "pt-BR": () => i(() =>
            import ("../i18n-data/filesBrowse.pt-BR-7FyG5ZEu.js"), []),
        de: () => i(() =>
            import ("../i18n-data/filesBrowse.de-CLU5zDRl.js"), []),
        fr: () => i(() =>
            import ("../i18n-data/filesBrowse.fr-BEh7OXBr.js"), []),
        es: () => i(() =>
            import ("../i18n-data/filesBrowse.es-05HcSAhJ.js"), []),
        it: () => i(() =>
            import ("../i18n-data/filesBrowse.it-BcUzQ3FX.js"), []),
        hi: () => i(() =>
            import ("../i18n-data/filesBrowse.hi-Csj2HA9Z.js"), []),
        id: () => i(() =>
            import ("../i18n-data/filesBrowse.id-BNHxqQBH.js"), []),
        th: () => i(() =>
            import ("../i18n-data/filesBrowse.th-DA_WLizW.js"), []),
        ko: () => i(() =>
            import ("../i18n-data/filesBrowse.ko-D5mwB9Qt.js"), []),
        ja: () => i(() =>
            import ("../i18n-data/filesBrowse.ja-Cs47t5Ic.js"), [])
    },
    r = o === "en" ? void 0 : f().filesBrowse;
o !== "en" && r === void 0 && (t[o] === null ? r = null : (t[o] ? .() ? ? Promise.resolve()).then(s => {
    r = s ? .default ? ? null, _()
}, () => {
    r = null, _()
}));
var n = () => r,
    w = () => o,
    d = {
        filesBrowse_ascending: "Ascending",
        filesBrowse_collectionFileCount: {
            d: [
                ["countPlural", "count", "plural"],
                ["countNumber", "count", "number"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": [
                    ["countNumber"], " file"
                ],
                "countPlural=other": [
                    ["countNumber"], " files"
                ]
            },
            f: "filesBrowse_collectionFileCount"
        },
        filesBrowse_collections: "Collections",
        filesBrowse_created: "Created",
        filesBrowse_descending: "Descending",
        filesBrowse_fileTypeFile: "File",
        filesBrowse_firstFile: "First file",
        filesBrowse_gridView: "Grid view",
        filesBrowse_images: "Images",
        filesBrowse_kind: "Kind",
        filesBrowse_lastFile: "Last file",
        filesBrowse_listView: "List view",
        filesBrowse_name: "Name",
        filesBrowse_newestFirst: "Newest first",
        filesBrowse_oldestFirst: "Oldest first",
        filesBrowse_searchCollections: "Search collections",
        filesBrowse_searchFiles: "Search files",
        filesBrowse_updated: "Updated",
        filesBrowse_videos: "Videos",
        filesBrowse_viewMode: "File layout",
        filesWorkspace_nextFile: "Next file",
        filesWorkspace_previousFile: "Previous file"
    },
    e = s => (l = {}) => a(n() ? .[s], l, w()) ? ? a(d[s], l, "en") ? ? "",
    B = e("filesBrowse_ascending"),
    u = e("filesBrowse_collectionFileCount"),
    v = e("filesBrowse_collections"),
    p = e("filesBrowse_created"),
    m = e("filesBrowse_descending"),
    F = e("filesBrowse_fileTypeFile"),
    g = e("filesBrowse_firstFile"),
    b = e("filesBrowse_gridView"),
    E = e("filesBrowse_images"),
    D = e("filesBrowse_kind"),
    I = e("filesBrowse_lastFile"),
    P = e("filesBrowse_listView"),
    V = e("filesBrowse_name"),
    h = e("filesBrowse_newestFirst"),
    y = e("filesBrowse_oldestFirst"),
    T = e("filesBrowse_searchCollections"),
    L = e("filesBrowse_searchFiles"),
    k = e("filesBrowse_updated"),
    A = e("filesBrowse_videos"),
    O = e("filesBrowse_viewMode"),
    R = e("filesWorkspace_nextFile"),
    C = e("filesWorkspace_previousFile");
export {
    C as S, L as _, m as a, O as b, b as c, I as d, P as f, T as g, y as h, p as i, E as l, h as m, u as n, F as o, V as p, v as r, g as s, B as t, D as u, k as v, R as x, A as y
};
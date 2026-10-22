try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new e.Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "26b93096-afd8-42b2-bd9a-ae8b43720dc1", e._sentryDebugIdIdentifier = "sentry-dbid-26b93096-afd8-42b2-bd9a-ae8b43720dc1")
    })()
} catch {}
var t = {
    createForm_templatesDialog_loadError: "Tidak dapat memuat proyek",
    createForm_templatesDialog_noSearchResults: "Tidak ada hasil yang cocok.",
    createForm_templatesDialog_retry: "Coba lagi",
    createForm_templatesDialog_searchDesignSystems: "Cari sistem desain",
    createForm_templatesDialog_searchTemplates: "Cari templat",
    createForm_zipInspection_contents: "Isi arsip",
    createForm_zipInspection_files: "Berkas di ZIP ini",
    createForm_zipInspection_summary: ["Berkas: ", ["count"], " · Ukuran hasil ekstrak menurut arsip: ", ["size"]],
    createForm_zipInspection_truncated: ["Menampilkan 100 berkas pertama dari ", ["count"], " berkas."]
};
export {
    t as
    default
};
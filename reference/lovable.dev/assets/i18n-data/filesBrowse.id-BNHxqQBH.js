try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new e.Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "f4e7bd4c-a57c-4e14-98c6-1f0286ab470f", e._sentryDebugIdIdentifier = "sentry-dbid-f4e7bd4c-a57c-4e14-98c6-1f0286ab470f")
    })()
} catch {}
var i = {
    filesBrowse_ascending: "Menaik",
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
                ["countNumber"], " file"
            ]
        },
        f: "filesBrowse_collectionFileCount"
    },
    filesBrowse_collections: "Koleksi",
    filesBrowse_created: "Dibuat",
    filesBrowse_descending: "Menurun",
    filesBrowse_fileTypeFile: "Berkas",
    filesBrowse_gridView: "Tampilan kisi",
    filesBrowse_images: "Gambar",
    filesBrowse_kind: "Jenis",
    filesBrowse_listView: "Tampilan daftar",
    filesBrowse_name: "Nama",
    filesBrowse_newestFirst: "Terbaru dahulu",
    filesBrowse_oldestFirst: "Terlama dahulu",
    filesBrowse_searchCollections: "Cari koleksi",
    filesBrowse_searchFiles: "Cari file",
    filesBrowse_updated: "Diperbarui",
    filesBrowse_videos: "Video",
    filesBrowse_viewMode: "Tata letak file"
};
export {
    i as
    default
};
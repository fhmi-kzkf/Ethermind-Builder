try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new e.Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "be7b3d1d-798a-4d5b-8de3-4a8d4f36ae63", e._sentryDebugIdIdentifier = "sentry-dbid-be7b3d1d-798a-4d5b-8de3-4a8d4f36ae63")
    })()
} catch {}
var n = {
    previewInteractionToolbar_clear: "Hapus",
    previewInteractionToolbar_describeChangeFor: ["Jelaskan perubahan untuk ", ["context"]],
    previewInteractionToolbar_describeChangePlaceholder: "Jelaskan perubahannya...",
    previewInteractionToolbar_dock: "Tambatkan",
    previewInteractionToolbar_minimize: "Perkecil",
    previewInteractionToolbar_redo: "Ulangi",
    previewInteractionToolbar_saveOrDiscardBeforeLeaving: "Simpan atau buang perubahan sebelum keluar dari mode visual",
    previewInteractionToolbar_selectionCount: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " pilihan"
            ],
            "countPlural=other": [
                ["countNumber"], " pilihan"
            ]
        },
        f: "previewInteractionToolbar_selectionCount"
    },
    previewInteractionToolbar_send: "Kirim",
    previewInteractionToolbar_showAriaLabel: "Tampilkan bilah alat pratinjau",
    previewInteractionToolbar_undo: "Urungkan"
};
export {
    n as
    default
};
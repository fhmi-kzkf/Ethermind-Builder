try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new e.Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5e83ff0f-8cd9-45c2-91f4-5f505388e7dc", e._sentryDebugIdIdentifier = "sentry-dbid-5e83ff0f-8cd9-45c2-91f4-5f505388e7dc")
    })()
} catch {}
var r = {
    editorNav_changesReadyToPublish: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " perubahan siap dipublikasikan"
            ],
            "countPlural=other": [
                ["countNumber"], " perubahan siap dipublikasikan"
            ]
        },
        f: "editorNav_changesReadyToPublish"
    },
    editorNav_createDraftHint: "Buat draf baru",
    editorNav_draftAcceptNeedsUpdate: "Perbarui draf agar selaras dengan proyek sebelum menerimanya",
    editorNav_draftAcceptReviewUpdated: "Tinjau draf yang diperbarui sebelum menerimanya.",
    editorNav_draftAcceptWaitForUpdate: "Tunggu hingga pembaruan draf selesai",
    editorNav_draftAgentAwaitingInput: "Lovable memerlukan masukan Anda",
    editorNav_draftDeleted: [
        ["name"], " dihapus"
    ],
    editorNav_draftFilterAll: "Semua draf",
    editorNav_draftFilterMine: "Draf saya",
    editorNav_draftFilterTabsLabel: "Filter draf",
    editorNav_renameDraftFailed: "Gagal mengganti nama draft",
    editorNav_syncDraftBeforePublishing: "Perbarui draf ini dengan perubahan terbaru",
    editorNav_unpublishedProject: "Proyek belum dipublikasikan",
    editorNav_updatesAvailable: "Pembaruan tersedia"
};
export {
    r as
    default
};
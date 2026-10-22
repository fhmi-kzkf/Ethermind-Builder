try {
    (function() {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new a.Error().stack;
        e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "1f2884f2-24f2-4310-a42d-99ca72ea7fee", a._sentryDebugIdIdentifier = "sentry-dbid-1f2884f2-24f2-4310-a42d-99ca72ea7fee")
    })()
} catch {}
var r = {
    editorNav_acceptDraft: "Terima draf",
    editorNav_acceptDraftHint: "Tambahkan suntingan draf ini ke proyek Anda",
    editorNav_acceptDraftShort: "Terima",
    editorNav_backToPreview: "Kembali ke pratinjau",
    editorNav_cancelRename: "Batalkan penggantian nama",
    editorNav_changesReadyToPublishNoCount: "Perubahan siap dipublikasikan",
    editorNav_checkingPermissions: "Memeriksa izin",
    editorNav_createDraft: "Draf baru",
    editorNav_createNewDraft: "Draf baru",
    editorNav_creatingDraft: "Membuat draf",
    editorNav_creditsLeft: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["amount"], " kredit tersisa"
            ],
            "countPlural=other": [
                ["amount"], " kredit tersisa"
            ]
        },
        f: "editorNav_creditsLeft"
    },
    editorNav_dailyCreditsLeft: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["amount"], " kredit harian tersisa"
            ],
            "countPlural=other": [
                ["amount"], " kredit harian tersisa"
            ]
        },
        f: "editorNav_dailyCreditsLeft"
    },
    editorNav_deleteDraft: "Hapus draf",
    editorNav_deleteDraftHint: "Hapus draf ini beserta suntingannya",
    editorNav_draftAccepted: "Diterima",
    editorNav_draftActionAccept: "Terima",
    editorNav_draftActionDelete: "Hapus",
    editorNav_draftActionRename: "Ubah nama",
    editorNav_draftActionUpdate: "Perbarui",
    editorNav_draftFilterNoResults: "Draf tidak ditemukan",
    editorNav_draftName: "Nama draf",
    editorNav_draftOperationInProgress: "Operasi draf sedang berlangsung",
    editorNav_draftRenameCancel: "Batal",
    editorNav_draftRenameDisabledHint: "Masukkan nama baru untuk mengganti nama",
    editorNav_drafts: "Draf",
    editorNav_exitFullscreen: "Keluar dari layar penuh",
    editorNav_lovableOnLovableProjectAria: "Proyek Lovable on Lovable",
    editorNav_mainMenu_contactSupport: "Hubungi dukungan",
    editorNav_mainMenu_copiedToClipboard: "Disalin ke clipboard",
    editorNav_mainMenu_designSystem: "Sistem desain",
    editorNav_mainPreview: "Pratinjau",
    editorNav_moreDraftActions: "Tindakan draf lainnya",
    editorNav_needEditorAccess: "Anda memerlukan akses editor untuk mengubah draft",
    editorNav_openProjectInNewTab: "Buka proyek di tab baru",
    editorNav_previewOnlyCantModifyDrafts: "Pengguna dengan akses pratinjau saja tidak dapat mengubah draft",
    editorNav_projectAccepting: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": "Menerima draf",
            "countPlural=other": "Menerima draf"
        },
        f: "editorNav_projectAccepting"
    },
    editorNav_projectBusy: "Lovable sedang bekerja",
    editorNav_projectProfile_publishFirstTooltip: "Publikasikan proyek sebelum membuat profil Lovable",
    editorNav_projectProfile_publishToProfile: "Publikasikan ke profil",
    editorNav_publishedUpToDate: "Semua sudah dipublikasikan",
    editorNav_renameDraftHint: "Beri nama baru untuk draf ini",
    editorNav_saveDraftName: "Simpan nama draft",
    editorNav_showChatPanel: "Tampilkan panel obrolan",
    editorNav_subview_ai: "AI",
    editorNav_switchDraft: "Ganti draft",
    editorNav_syncWithBaseHint: "Terapkan suntingan terbaru proyek ke draf ini",
    editorNav_updateDraftHint: "Ada perubahan baru",
    editorNav_updateDraftShort: "Perbarui",
    draftContextPill_tooltip: ["Perubahan akan dilakukan pada “", ["name"], "”"],
    editorNav_enterFullscreenChat: "Masuk ke obrolan layar penuh",
    editorNav_hideChatPanel: "Sembunyikan panel obrolan"
};
export {
    r as
    default
};
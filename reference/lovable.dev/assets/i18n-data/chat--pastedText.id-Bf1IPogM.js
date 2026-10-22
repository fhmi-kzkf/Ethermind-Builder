try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new e.Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e82601ca-6c96-4fd2-8f30-6179a14f6382", e._sentryDebugIdIdentifier = "sentry-dbid-e82601ca-6c96-4fd2-8f30-6179a14f6382")
    })()
} catch {}
var t = {
    pastedText_attachedToast: "Tempelan dilampirkan",
    pastedText_cancelEdit: "Batal",
    pastedText_charCount: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["formatted"], " karakter"
            ],
            "countPlural=other": [
                ["formatted"], " karakter"
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
                ["countNumber"], " item tempelan · total ", ["chars"], " karakter"
            ],
            "countPlural=other": [
                ["countNumber"], " item tempelan · total ", ["chars"], " karakter"
            ]
        },
        f: "pastedText_combinedStats"
    },
    pastedText_contentLabel: "Konten",
    pastedText_contextWarning: "Teks yang Anda tempel ini banyak sekali — pertimbangkan untuk memangkasnya agar Lovable dapat membaca semuanya sekaligus.",
    pastedText_copied: "Tersalin",
    pastedText_copyText: "Salin teks",
    pastedText_dialogSubtitle: "Dikirim sebagai lampiran bersama pesan Anda",
    pastedText_dialogSubtitleDraft: "Akan dikirim sebagai lampiran bersama pesan Anda",
    pastedText_discardCancel: "Lanjutkan mengedit",
    pastedText_discardConfirm: "Buang",
    pastedText_discardDescription: "Perubahan Anda pada tempelan ini akan hilang.",
    pastedText_discardTitle: "Buang perubahan",
    pastedText_edit: "Edit",
    pastedText_editDialogTitle: "Edit teks tempelan",
    pastedText_failedCardLabel: ["Teks yang ditempel tidak dapat dimuat: ", ["title"]],
    pastedText_fileLimit: "Batas file tercapai",
    pastedText_fileLimitDescription: ["Harap batasi pesan hingga ", ["count"], " file."],
    pastedText_goToLine: ["Buka baris ", ["line"]],
    pastedText_insertAsText: "Sisipkan sebagai teks",
    pastedText_insertAsTextTooLong: "Terlalu panjang untuk dimuat dalam pesan",
    pastedText_kindCode: "Kode",
    pastedText_kindCsv: "CSV",
    pastedText_kindHtml: "HTML",
    pastedText_kindJson: "JSON",
    pastedText_kindLog: "Log",
    pastedText_kindSql: "SQL",
    pastedText_kindSvg: "SVG",
    pastedText_kindText: "Teks",
    pastedText_lineCount: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["formatted"], " baris"
            ],
            "countPlural=other": [
                ["formatted"], " baris"
            ]
        },
        f: "pastedText_lineCount"
    },
    pastedText_loadFailed: "Tidak dapat memuat teks tempelan",
    pastedText_openCardLabel: ["Buka teks tempelan: ", ["title"]],
    pastedText_pasteInline: "Tempel langsung",
    pastedText_reference: "Kutip",
    pastedText_referenceBlockedSecret: "Hapus rahasia sebelum merujuk teks yang ditempel ini",
    pastedText_referenceFailed: "Teks yang ditempel tidak dapat dirujuk. Coba lagi.",
    pastedText_referenced: "Dikutip",
    pastedText_remove: "Hapus",
    pastedText_removeAttachment: "Hapus lampiran",
    pastedText_removeCardLabel: ["Hapus ", ["title"]],
    pastedText_removeSecretBeforeSave: "Hapus rahasia dari teks yang ditempel ini sebelum menyimpan.",
    pastedText_removedToast: "Lampiran dihapus",
    pastedText_retrySave: "Coba simpan lagi",
    pastedText_reviewSecretField: "Tinjau judul",
    pastedText_saveChanges: "Simpan perubahan",
    pastedText_saveFailedCardLabel: ["Perubahan tidak dapat disimpan: ", ["title"]],
    pastedText_saveFailedDescription: "Versi tersimpan tidak berubah. Coba simpan lagi atau hapus lampiran ini.",
    pastedText_saveFailedTitle: "Perubahan tidak disimpan",
    pastedText_savingChanges: "Menyimpan perubahan…",
    pastedText_secretDetected: "Rahasia terdeteksi",
    pastedText_statsSummary: [
        ["chars"], " karakter · ", ["words"], " kata · ", ["lines"], " baris"
    ],
    pastedText_titleLabel: "Judul",
    pastedText_titlePlaceholder: "Beri nama teks ini",
    pastedText_undo: "Urungkan",
    pastedText_uploadFailedInlinedToast: "Gagal mengunggah teks yang Anda tempel, jadi ditambahkan sebagai teks",
    pastedText_uploading: "Mengunggah",
    hoverMode_openInChat: "Buka di obrolan"
};
export {
    t as
    default
};
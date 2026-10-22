try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new e.Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "20234277-1f90-4bb5-9ba3-800aec5a447c", e._sentryDebugIdIdentifier = "sentry-dbid-20234277-1f90-4bb5-9ba3-800aec5a447c")
    })()
} catch {}
var i = {
    editor_addComment: "Tambahkan komentar",
    editor_chatActions: "Tindakan obrolan",
    editor_desktopView: "Tampilan desktop",
    editor_dragToResize: "Seret untuk mengubah ukuran",
    editor_dragToResizeClickToCollapse: "Seret untuk mengubah ukuran · Klik untuk menciutkan",
    editor_dragToResizeClickToExpand: "Seret untuk mengubah ukuran · Klik untuk memperluas",
    editor_drawAnnotation: "Buat coretan anotasi",
    editor_editTextInline: "Ubah teks langsung di halaman",
    editor_firstPreviewTips_stepLabel: ["Kiat ", ["step"], " dari ", ["total"]],
    editor_firstPreviewTips_whileYouWait: "Sambil Anda menunggu",
    editor_homepage: "Halaman utama",
    editor_publish: "Publikasikan",
    editor_refresh: "Muat ulang",
    editor_selectElements: "Pilih elemen",
    editor_share: "Bagikan",
    editor_voiceModeStop: "Hentikan mode suara",
    clipboard_copyFileContent: "Salin isi berkas",
    clipboard_copyUnavailable: "Tidak dapat menyalin"
};
export {
    i as
    default
};
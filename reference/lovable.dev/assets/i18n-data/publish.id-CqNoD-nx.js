try {
    (function() {
        var i = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new i.Error().stack;
        e && (i._sentryDebugIds = i._sentryDebugIds || {}, i._sentryDebugIds[e] = "23271d8f-2015-401b-8d30-b09a50af0800", i._sentryDebugIdIdentifier = "sentry-dbid-23271d8f-2015-401b-8d30-b09a50af0800")
    })()
} catch {}
var a = {
    publish_button_publishing: "Memublikasikan",
    publish_button_updating: "Memperbarui",
    publish_copyUrl: "Salin URL",
    publish_failed_fix_initiating: "Memperbaiki…",
    publish_failed_tryToFix: "Coba perbaiki",
    publish_gate_reviewFindings: "Tinjau",
    publish_gate_runSecurityScan: "Jalankan pemindaian keamanan",
    publish_googleMaps_fixIt: "Perbaiki",
    publish_googleMaps_sendingHint: "Lovable sedang mengirim pesan Anda…",
    publish_live_seoEdit: "Edit",
    publish_live_seoHint: "Minta Lovable mengubah judul, deskripsi & ikon Anda",
    publish_payments_setupRequired: "Perlu penyiapan, belum ada pembayaran aktif",
    publish_payments_verificationRequired: "Verifikasi diperlukan, pembayaran langsung belum aktif",
    publish_searchAndSocial: "Sosial & pencarian",
    publish_unsaved_discard: "Buang perubahan",
    publish_unsaved_keepEditing: "Lanjut mengedit",
    publish_unsaved_title: "Perubahan belum disimpan",
    publish_url_settingUp: "Menyiapkan domain Anda…",
    publish_payments_verificationInReview: "Verifikasi sedang ditinjau, pembayaran live belum tersedia"
};
export {
    a as
    default
};
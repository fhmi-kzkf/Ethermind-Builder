try {
    (function() {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new a.Error().stack;
        e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "4fe42b36-01c1-4691-9180-a904c1856b67", a._sentryDebugIdIdentifier = "sentry-dbid-4fe42b36-01c1-4691-9180-a904c1856b67")
    })()
} catch {}
var t = {
    workspaceChat_addContext: "Tambah konteks",
    workspaceChat_allChats: "Semua obrolan",
    workspaceChat_alreadyShowingPreviewTooltip: "Sudah ditampilkan di pratinjau langsung",
    workspaceChat_contextSearchPlaceholder: "Cari konteks...",
    workspaceChat_createdProjectCardLabel: "Aplikasi web dibuat",
    workspaceChat_download: "Unduh",
    workspaceChat_filterScheduled: "Terjadwal",
    workspaceChat_openInNewTab: "Buka di tab baru",
    workspaceChat_projectCardLabel: "Aplikasi web",
    workspaceChat_referenceInChatUnavailable: "Proyek ini tidak lagi tersedia",
    workspaceChat_resourceCategory_audio: "Audio",
    workspaceChat_seeAll: "Lihat semua",
    workspaceChat_seeAllChats: "Lihat semua chat",
    workspaceChat_sendMessage: "Kirim pesan",
    workspaceChat_share: "Bagikan",
    workspaceChat_suggestionsProjectPrompt: ["Ayo lanjut kerjakan ", ["mention"], ". Mulailah dengan ringkasan singkat tentang fungsinya saat ini, lalu sarankan tiga peningkatan berdampak paling besar yang bisa saya lakukan berikutnya. Setelah saya memilih salah satu, lakukan perubahan tersebut pada aplikasinya."],
    workspaceChat_untitledProject: "Proyek tanpa judul",
    workspaceChat_yourFiles: "File Anda",
    workspaceChat_sendFailed: "Gagal mengirim pesan"
};
export {
    t as
    default
};
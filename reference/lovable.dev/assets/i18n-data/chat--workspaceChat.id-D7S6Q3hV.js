try {
    (function() {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new a.Error().stack;
        e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "85989d7f-cf69-4ff6-96a6-105ba0e1d133", a._sentryDebugIdIdentifier = "sentry-dbid-85989d7f-cf69-4ff6-96a6-105ba0e1d133")
    })()
} catch {}
var t = {
    workspaceChat_allowanceExhaustedNudgeDescription: "Jatah obrolan harian gratis Anda sudah habis untuk hari ini. Jatah ini disetel ulang pada tengah malam UTC.",
    workspaceChat_allowanceExhaustedNudgeTitle: "Obrolan kini dapat menggunakan kredit Anda",
    workspaceChat_artifactReferencePrompt: ["Mengenai artefak ", ["artifact"], " dalam proyek ", ["projectId"], ":"],
    workspaceChat_artifactReferencePromptWithoutProject: ["Mengenai artefak ", ["artifact"], ":"],
    workspaceChat_attachedToMessage: "Dilampirkan ke pesan",
    workspaceChat_chatMessageLabel: "Pesan chat",
    workspaceChat_chats: "Obrolan",
    workspaceChat_collectionReferencePrompt: ["Mengenai koleksi ", ["mention"], " di proyek ", ["projectId"], ":"],
    workspaceChat_context: "Konteks",
    workspaceChat_couldNotLoadScheduledTasks: "Tidak dapat memuat otomatisasi",
    workspaceChat_createProjectError: "Gagal membuat proyek",
    workspaceChat_createdProject: "Proyek berhasil dibuat",
    workspaceChat_creatingProject: "Sedang membuat proyek…",
    workspaceChat_deleteDialogStopAndDelete: "Hentikan Lovable dan hapus chat",
    workspaceChat_deleteDialogStopWork: ["Hentikan juga pekerjaan di ", ["projects"]],
    workspaceChat_deleteDialogWorkingDescription: ["Menghapus chat akan menghentikan pekerjaan Lovable di chat itu sendiri. Pekerjaan yang telah dimulai di ", ["projects"], " akan tetap berjalan di sana kecuali Anda juga menghentikannya."],
    workspaceChat_deletedNotice_copyDraft: "Salin draf",
    workspaceChat_deletedNotice_copyFailed: "Tidak dapat menyalin draf",
    workspaceChat_deletedNotice_description: "Chat dihapus di tab atau perangkat lain, sehingga tidak ada lagi yang dapat dikirim di sini.",
    workspaceChat_deletedNotice_draftCopied: "Draf disalin",
    workspaceChat_deletedNotice_draftDescription: "Obrolan ini telah dihapus di tab atau perangkat lain, sehingga draf Anda tidak dapat dikirim di sini. Salin untuk digunakan dalam obrolan baru.",
    workspaceChat_deletedNotice_title: "Chat ini telah dihapus",
    workspaceChat_deletedNotice_unavailableDescription: "Obrolan ini telah dihapus atau akses Anda telah dicabut, sehingga Anda tidak dapat mengirim apa pun lagi di sini.",
    workspaceChat_deletedNotice_unavailableDraftDescription: "Obrolan ini telah dihapus atau akses Anda telah dicabut, sehingga draf Anda tidak dapat dikirim ke sini. Salin draf tersebut untuk digunakan dalam obrolan baru.",
    workspaceChat_deletedNotice_unavailableTitle: "Obrolan ini tidak lagi tersedia",
    workspaceChat_downloadArtifact: ["Unduh ", ["name"]],
    workspaceChat_emptyContextDescription: "Tambahkan file, proyek, atau obrolan sebelumnya sebagai referensi dalam obrolan ini.",
    workspaceChat_failedToMarkRead: "Gagal menandai obrolan sudah dibaca",
    workspaceChat_failedToMarkUnread: "Gagal menandai chat sebagai belum dibaca",
    workspaceChat_firstChatEmptyTitle: "Mulai obrolan pertama Anda",
    workspaceChat_goToDashboard: "Buka dasbor",
    workspaceChat_hiddenOutputsBadge: ["+", ["count"]],
    workspaceChat_hiddenOutputsLabel: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " item lainnya"
            ],
            "countPlural=other": [
                ["countNumber"], " item lainnya"
            ]
        },
        f: "workspaceChat_hiddenOutputsLabel"
    },
    workspaceChat_hideDrafts: "Sembunyikan draf",
    workspaceChat_hideFromContext: "Hapus dari konteks",
    workspaceChat_hideFromRecents: "Sembunyikan dari terbaru",
    workspaceChat_hideSidebar: "Sembunyikan menu konteks",
    workspaceChat_inAnotherWorkspace: "Chat ini berada di ruang kerja lain",
    workspaceChat_linkCopied: "Tautan obrolan disalin",
    workspaceChat_markRead: "Tandai sudah dibaca",
    workspaceChat_markUnread: "Tandai belum dibaca",
    workspaceChat_newChatPrompt: "Ada yang bisa saya bantu?",
    workspaceChat_noScheduledChats: "Tidak ada obrolan terjadwal",
    workspaceChat_noUnreadChats: "Tidak ada chat yang belum dibaca",
    workspaceChat_openActionsFor: ["Buka tindakan untuk ", ["title"]],
    workspaceChat_otherWorkspaceDescription: "Mungkin berada di ruang kerja lain.",
    workspaceChat_otherWorkspaceTitle: "Mencari obrolan lain?",
    workspaceChat_outputApps: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " aplikasi"
            ],
            "countPlural=other": [
                ["countNumber"], " aplikasi"
            ]
        },
        f: "workspaceChat_outputApps"
    },
    workspaceChat_outputDocuments: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " dokumen"
            ],
            "countPlural=other": [
                ["countNumber"], " dokumen"
            ]
        },
        f: "workspaceChat_outputDocuments"
    },
    workspaceChat_outputFiles: {
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
        f: "workspaceChat_outputFiles"
    },
    workspaceChat_previewOf: ["Pratinjau ", ["label"]],
    workspaceChat_projectLandingAwaitingDescription: "Berikan jawaban di proyek ini agar Lovable dapat melanjutkan.",
    workspaceChat_projectLandingAwaitingTitle: "Lovable membutuhkan masukan Anda untuk proyek ini",
    workspaceChat_projectLandingEditCount: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " pengeditan"
            ],
            "countPlural=other": [
                ["countNumber"], " pengeditan"
            ]
        },
        f: "workspaceChat_projectLandingEditCount"
    },
    workspaceChat_projectLandingEdited: ["Diedit ", ["date"]],
    workspaceChat_projectLandingOpenProject: "Buka proyek",
    workspaceChat_projectLandingPlaceholder: "Apa yang perlu kita ubah?",
    workspaceChat_projectLandingRecentChanges: "Perubahan terbaru",
    workspaceChat_projectLandingSuggestionNext: "Sarankan apa yang sebaiknya dibuat selanjutnya",
    workspaceChat_projectLandingSuggestionOverview: "Apa isi proyek ini?",
    workspaceChat_projectLandingSuggestionReview: "Tinjau aplikasi saya untuk mencari masalah",
    workspaceChat_projectLandingSuggestionWhatChanging: "Apa yang sedang diubah Lovable saat ini?",
    workspaceChat_projectLandingWorkingBadge: "Lovable sedang bekerja",
    workspaceChat_projectLandingWorkingDescription: "Pengerjaan dimulai di obrolan lain atau di editor. Anda tetap dapat menanyakannya di sini.",
    workspaceChat_projectLandingWorkingTitle: "Lovable sedang mengerjakan proyek ini",
    workspaceChat_projects: "Proyek",
    workspaceChat_referenceInChat: "Jadikan referensi di obrolan",
    workspaceChat_referenceInChatLoading: "Menunggu nama proyek dimuat",
    workspaceChat_referenceLimitReached: ["Anda dapat merujuk hingga ", ["max"], " file dalam satu pesan"],
    workspaceChat_removeAttachedProject: ["Hapus ", ["name"]],
    workspaceChat_replyToSelection: "Balas",
    workspaceChat_resizeArtifact: "Ubah ukuran panel artefak",
    workspaceChat_resizeArtifactOrCollapseChat: "Ubah ukuran panel artefak atau ciutkan obrolan",
    workspaceChat_resizeArtifactOrExpandChat: "Ubah ukuran panel artefak atau perluas obrolan",
    workspaceChat_resourceCategory_archive: "Arsip",
    workspaceChat_resourceCategory_code: "Kode",
    workspaceChat_resourceCategory_diagram: "Diagram",
    workspaceChat_resourceCategory_document: "Dokumen",
    workspaceChat_resourceCategory_file: "Berkas",
    workspaceChat_resourceCategory_font: "Font",
    workspaceChat_resourceCategory_image: "Gambar",
    workspaceChat_resourceCategory_model: "Model 3D",
    workspaceChat_resourceCategory_spreadsheet: "Lembar kerja",
    workspaceChat_resourceCategory_video: "Video",
    workspaceChat_scheduleTaskError: "Tidak dapat menjadwalkan tugas",
    workspaceChat_scheduleTaskUncertain: "Tidak dapat mengonfirmasi apakah tugas telah dijadwalkan — periksa otomatisasi Anda",
    workspaceChat_scheduledDaily: ["Setiap hari pukul ", ["time"]],
    workspaceChat_scheduledEmptyHint: "Obrolan dengan pengecekan otomatis terjadwal yang akan datang akan muncul di sini.",
    workspaceChat_scheduledEveryHour: "Setiap jam",
    workspaceChat_scheduledEveryMinute: "Setiap menit",
    workspaceChat_scheduledEveryNHours: ["Setiap ", ["hours"], " jam"],
    workspaceChat_scheduledEveryNHoursAtMinute: ["Setiap ", ["hours"], " jam pada menit ke-", ["minute"]],
    workspaceChat_scheduledEveryNMinutes: ["Setiap ", ["minutes"], " menit"],
    workspaceChat_scheduledHourly: ["Setiap jam pada menit ke-", ["minute"]],
    workspaceChat_scheduledHourlyAtMinutes: ["Setiap jam pada menit ", ["minutes"]],
    workspaceChat_scheduledMonthly: ["Setiap bulan pada tanggal ", ["day"], " pukul ", ["time"]],
    workspaceChat_scheduledOverviewEmptyTitle: "Tidak ada otomatisasi",
    workspaceChat_scheduledPartialNote: "Beberapa otomatisasi mungkin tidak ditampilkan",
    workspaceChat_scheduledPaused: "Dijeda",
    workspaceChat_scheduledPausedFailing: "Dijeda — gagal",
    workspaceChat_scheduledPausedOutOfCredits: "Dijeda — kredit habis",
    workspaceChat_scheduledPausedSlackUninstalled: "Dijeda — aplikasi Slack dihapus",
    workspaceChat_scheduledSourceIMessage: "Messages",
    workspaceChat_scheduledSourceLinear: "Linear",
    workspaceChat_scheduledSourceOther: "Otomatisasi",
    workspaceChat_scheduledSourceSlack: "Slack",
    workspaceChat_scheduledSourceTelegram: "Telegram",
    workspaceChat_scheduledSourceWhatsApp: "WhatsApp",
    workspaceChat_scheduledTaskDelete: "Hapus tugas",
    workspaceChat_scheduledTaskDeleteDialogDescription: "Apakah Anda yakin ingin menghapus tugas ini? Tugas ini tidak akan dijalankan lagi.",
    workspaceChat_scheduledTaskDeleteDialogTitle: "Hapus tugas",
    workspaceChat_scheduledTaskDeleteError: "Gagal menghapus tugas",
    workspaceChat_scheduledTaskDeleted: "Tugas berhasil dihapus",
    workspaceChat_scheduledTaskEdit: "Ubah tugas",
    workspaceChat_scheduledTaskEditAlreadyFired: "Tugas ini sudah berjalan dan tidak dapat lagi diedit.",
    workspaceChat_scheduledTaskEditAt: "Pukul",
    workspaceChat_scheduledTaskEditCancel: "Batal",
    workspaceChat_scheduledTaskEditCron: "Ekspresi Cron",
    workspaceChat_scheduledTaskEditCronInvalid: "Masukkan ekspresi cron 5 bidang yang valid.",
    workspaceChat_scheduledTaskEditDayOfMonth: "Tanggal",
    workspaceChat_scheduledTaskEditDays: "Hari",
    workspaceChat_scheduledTaskEditName: "Nama",
    workspaceChat_scheduledTaskEditNameTooLong: "Nama ini terlalu panjang. Persingkat untuk menyimpan.",
    workspaceChat_scheduledTaskEditPickDate: "Pilih tanggal",
    workspaceChat_scheduledTaskEditPrompt: "Instruksi",
    workspaceChat_scheduledTaskEditPromptRequired: "Masukkan instruksi.",
    workspaceChat_scheduledTaskEditPromptTooLong: "Instruksi ini terlalu panjang. Persingkat agar bisa disimpan.",
    workspaceChat_scheduledTaskEditRepeat: "Pengulangan",
    workspaceChat_scheduledTaskEditRepeatCustom: "Kustom (cron)",
    workspaceChat_scheduledTaskEditRepeatDaily: "Setiap hari",
    workspaceChat_scheduledTaskEditRepeatHourly: "Setiap jam",
    workspaceChat_scheduledTaskEditRepeatMonthly: "Setiap bulan",
    workspaceChat_scheduledTaskEditRepeatWeekdays: "Hari kerja",
    workspaceChat_scheduledTaskEditRepeatWeekly: "Pada hari tertentu",
    workspaceChat_scheduledTaskEditRunsAt: "Dijalankan pukul",
    workspaceChat_scheduledTaskEditRunsAtIncomplete: "Lengkapi tanggal dan waktu.",
    workspaceChat_scheduledTaskEditRunsAtInvalid: "Pilih waktu antara 1 menit dan 90 hari dari sekarang.",
    workspaceChat_scheduledTaskEditSave: "Simpan",
    workspaceChat_scheduledTaskEditTimeInvalid: "Isi kolom waktu jadwal.",
    workspaceChat_scheduledTaskEditTimezone: "Zona waktu",
    workspaceChat_scheduledTaskEditTimezoneEmpty: "Zona waktu tidak ditemukan.",
    workspaceChat_scheduledTaskEditTimezoneNote: ["Waktu menggunakan zona waktu jadwal (", ["timezone"], ")"],
    workspaceChat_scheduledTaskEditTimezoneSearch: "Cari zona waktu…",
    workspaceChat_scheduledTaskEditTooSoon: "Tugas ini akan segera berjalan dan tidak dapat dijadwalkan ulang.",
    workspaceChat_scheduledTaskOneOff: "Sekali jalan",
    workspaceChat_scheduledTaskPause: "Jeda tugas",
    workspaceChat_scheduledTaskPauseError: "Tidak dapat menjeda tugas",
    workspaceChat_scheduledTaskPaused: "Tugas dijeda",
    workspaceChat_scheduledTaskRecurring: "Berulang",
    workspaceChat_scheduledTaskReference: "Rujuk tugas ini",
    workspaceChat_scheduledTaskReferencePrompt: ['Mengenai otomatisasi "', ["message"], '" (', ["id"], "):"],
    workspaceChat_scheduledTaskRename: "Ganti nama tugas",
    workspaceChat_scheduledTaskResume: "Lanjutkan tugas",
    workspaceChat_scheduledTaskResumeError: "Tidak dapat melanjutkan tugas",
    workspaceChat_scheduledTaskResumed: "Tugas dilanjutkan",
    workspaceChat_scheduledTaskRun: "Jalankan tugas",
    workspaceChat_scheduledTaskRunError: "Gagal menjalankan tugas",
    workspaceChat_scheduledTaskRunNow: "Jalankan sekarang",
    workspaceChat_scheduledTaskRunStarted: "Tugas mulai dijalankan",
    workspaceChat_scheduledTaskRunning: "Menjalankan tugas",
    workspaceChat_scheduledTaskUpdateError: "Tidak dapat memperbarui tugas",
    workspaceChat_scheduledTaskUpdated: "Tugas diperbarui",
    workspaceChat_scheduledTaskViewPrompt: "Lihat prompt",
    workspaceChat_scheduledTasksBadge: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " otomatisasi"
            ],
            "countPlural=other": [
                ["countNumber"], " otomatisasi"
            ]
        },
        f: "workspaceChat_scheduledTasksBadge"
    },
    workspaceChat_scheduledTasksEmpty: "Minta Lovable untuk menjadwalkan tugas dan tugas tersebut akan muncul di sini.",
    workspaceChat_scheduledToday: ["Hari ini ", ["time"]],
    workspaceChat_scheduledTomorrow: ["Besok ", ["time"]],
    workspaceChat_scheduledWeekdays: ["Hari kerja pukul ", ["time"]],
    workspaceChat_scheduledWeekly: ["Setiap minggu pada hari ", ["day"], " pukul ", ["time"]],
    workspaceChat_schedulingTask: "Menjadwalkan tugas…",
    workspaceChat_securityDigestDescription: "Tinjauan otomatis ruang kerja terhadap aktivitas kunci API, eksposur MCP, dan perubahan keamanan terbaru.",
    workspaceChat_securityDigestTitle: "Ringkasan keamanan ruang kerja",
    workspaceChat_selectWorkspace: "Pilih ruang kerja untuk chat",
    workspaceChat_sendingWorkToProject: "Sedang mengirim pekerjaan ke proyek…",
    workspaceChat_sentWorkToProject: "Telah mengirim pekerjaan ke",
    workspaceChat_sentWorkToProjectFallback: "Telah mengirim pekerjaan ke proyek",
    workspaceChat_showSidebar: "Tampilkan menu konteks",
    workspaceChat_sourceFileRangeReferencePrompt: ["Terkait baris ", ["range"], " pada file ", ["path"], " di proyek ", ["projectId"], ":"],
    workspaceChat_sourceFileReferencePrompt: ["Terkait file ", ["path"], " di proyek ", ["projectId"], ":"],
    workspaceChat_spawnBuilderError: "Gagal mengirim pekerjaan ke proyek",
    workspaceChat_switchToWorkspace: ["Beralih ke ", ["workspaceName"]],
    workspaceChat_unableToLoad: "Tidak dapat memuat chat",
    workspaceChat_unableToLoadHint: "Muat ulang halaman atau coba lagi sebentar lagi.",
    workspaceChat_unreadEmptyHint: "Kamu sudah membaca semuanya.",
    workspaceChat_viewDrafts: "Lihat draf"
};
export {
    t as
    default
};
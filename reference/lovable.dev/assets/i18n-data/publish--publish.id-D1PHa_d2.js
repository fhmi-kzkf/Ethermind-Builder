try {
    (function() {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            i = new a.Error().stack;
        i && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[i] = "4c80a9ae-db0d-4d4f-bae3-0ffaa0f852dc", a._sentryDebugIdIdentifier = "sentry-dbid-4c80a9ae-db0d-4d4f-bae3-0ffaa0f852dc")
    })()
} catch {}
var e = {
    publish_addCustomDomain: "Tambahkan domain khusus",
    publish_approval_adminFallback: "Seorang admin",
    publish_approval_approved: "Permintaan disetujui",
    publish_approval_approvedInfo: "Permintaan Anda disetujui. Penerbitan dimulai secara otomatis; Anda juga dapat menerbitkan sekarang.",
    publish_approval_blocked: "Penerbitan diblokir oleh kebijakan ruang kerja",
    publish_approval_blockedInfo: "Kebijakan ruang kerja Anda memblokir penerbitan proyek ini. Hubungi admin ruang kerja.",
    publish_approval_cancel: "Batalkan permintaan",
    publish_approval_cancelFailed: "Permintaan tidak dapat dibatalkan. Coba lagi.",
    publish_approval_cancelShort: "Batalkan",
    publish_approval_cancelled: "Permintaan dibatalkan",
    publish_approval_cancelling: "Membatalkan…",
    publish_approval_changesSinceRequest: ["Perubahan sejak permintaan ", ["time"]],
    publish_approval_closed: "Permintaan ditutup · proyek berubah",
    publish_approval_closedInfo: "Proyek berubah setelah Anda mengirim permintaan, sehingga permintaan ditutup tanpa keputusan. Minta persetujuan lagi untuk menerbitkan.",
    publish_approval_denied: "Permintaan publikasi ditolak",
    publish_approval_deniedBy: [
        ["name"], " menolak permintaan Anda: “", ["reason"], "”"
    ],
    publish_approval_deniedByNoReason: [
        ["name"], " menolak permintaan Anda."
    ],
    publish_approval_expired: "Permintaan publikasi kedaluwarsa",
    publish_approval_expiredInfo: "Tidak ada admin yang meninjau permintaan Anda sebelum kedaluwarsa. Minta persetujuan lagi untuk menerbitkan.",
    publish_approval_moreInfo: "Tentang persetujuan ini",
    publish_approval_pending: "Permintaan tertunda",
    publish_approval_pendingHeadMovedInfo: "Permintaan ini mencakup versi yang Anda minta untuk diterbitkan. Untuk menerbitkan perubahan terbaru Anda, perbarui permintaan.",
    publish_approval_pendingInfo: "Anda akan diberi tahu segera setelah admin meninjau permintaan Anda.",
    publish_approval_publishingShortly: "Segera diterbitkan…",
    publish_approval_request: "Minta persetujuan",
    publish_approval_requestAgain: "Minta lagi",
    publish_approval_requestDialog_noteAriaLabel: "Catatan untuk penyetuju",
    publish_approval_requestDialog_notePlaceholder: "Tulis catatan Anda",
    publish_approval_requestDialog_recipientsAdmins: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["<recipients>", ["countLabel"], " admin ruang kerja</recipients> akan menerima permintaan Anda"],
            "countPlural=other": ["<recipients>", ["countLabel"], " admin ruang kerja</recipients> akan menerima permintaan Anda"]
        },
        f: "publish_approval_requestDialog_recipientsAdmins"
    },
    publish_approval_requestDialog_recipientsApprovers: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["<recipients>", ["countLabel"], " penyetuju</recipients> akan menerima permintaan Anda"],
            "countPlural=other": ["<recipients>", ["countLabel"], " penyetuju</recipients> akan menerima permintaan Anda"]
        },
        f: "publish_approval_requestDialog_recipientsApprovers"
    },
    publish_approval_requestDialog_recipientsUnknown: "Admin ruang kerja Anda akan menerima permintaan Anda",
    publish_approval_requestDialog_recipientsUnknownApprovers: "Penyetuju Anda akan menerima permintaan Anda",
    publish_approval_requestDialog_send: "Kirim permintaan",
    publish_approval_requestDialog_subtitle: "Catatan singkat membantu admin Anda memberikan persetujuan lebih cepat.",
    publish_approval_requestDialog_title: "Minta persetujuan",
    publish_approval_requestFailed: "Persetujuan tidak dapat diminta.",
    publish_approval_requestSent_description: "Admin telah diberi tahu.",
    publish_approval_requestSent_title: "Permintaan terkirim",
    publish_approval_requesting: "Mengirim permintaan…",
    publish_approval_required: "Penerbitan memerlukan persetujuan",
    publish_approval_requiredInfo_connector: "Kebijakan ruang kerja Anda mewajibkan admin menyetujui penerbitan yang menggunakan konektor.",
    publish_approval_requiredInfo_external: "Kebijakan ruang kerja Anda mewajibkan admin menyetujui penerbitan oleh kolaborator eksternal.",
    publish_approval_requiredInfo_generic: "Kebijakan ruang kerja Anda mewajibkan admin menyetujui penerbitan ini.",
    publish_approval_requiredInfo_pii: "Kebijakan ruang kerja Anda mewajibkan admin menyetujui penerbitan yang masih memiliki temuan PII yang belum diselesaikan.",
    publish_approval_requiredInfo_public: "Kebijakan ruang kerja Anda mewajibkan admin menyetujui publikasi yang membuat aplikasi menjadi publik.",
    publish_approval_unavailable: "Permintaan publikasi gagal",
    publish_approval_unavailableInfo: "Persetujuan untuk sementara tidak tersedia. Coba lagi dalam beberapa menit.",
    publish_approval_update: "Perbarui permintaan",
    publish_approval_updating: "Memperbarui permintaan…",
    publish_approval_viewRequest: "Lihat",
    publish_approval_waitingAriaLabel: "Publikasikan, menunggu persetujuan",
    publish_approval_waitingTooltip: "Menunggu persetujuan untuk menerbitkan",
    publish_audience_everyoneInOrganization: "Semua orang di organisasi ini",
    publish_audience_everyoneInWorkspace: "Semua orang di ruang kerja ini",
    publish_badgeReinstate_description: 'Memublikasikan akan menampilkan kembali lencana "Edit with Lovable" di situs ini karena paket Anda saat ini tidak mencakup opsi untuk menyembunyikannya.',
    publish_badgeReinstate_publishAnyway: "Tetap publikasikan",
    publish_badgeReinstate_title: "Lencana Lovable Anda akan muncul kembali",
    publish_badgeReinstate_upgrade: "Tingkatkan paket agar tetap tersembunyi",
    publish_button_checking: "Memeriksa…",
    publish_button_publish: "Publikasikan",
    publish_button_publishChanges: "Publikasikan perubahan",
    publish_button_unpublishedChangesAriaLabel: "Publikasikan, ada perubahan yang belum dipublikasikan",
    publish_button_upToDate: "Sudah terbaru",
    publish_button_update: "Perbarui",
    publish_byoc_successDescription: "Aplikasi Anda berjalan di cloud Anda sendiri.",
    publish_byoc_successTitleOrgCloud: "Diterbitkan ke cloud organisasi Anda",
    publish_byoc_urlGeneratedAfterPublish: "URL dibuat setelah penerbitan",
    publish_checksGate_description_publishing: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " pemeriksaan wajib gagal pada perubahan terbaru Anda. Kami sarankan untuk memperbaikinya sebelum menerbitkan."
            ],
            "countPlural=other": [
                ["countNumber"], " pemeriksaan wajib gagal pada perubahan terbaru Anda. Kami sarankan untuk memperbaikinya sebelum menerbitkan."
            ]
        },
        f: "publish_checksGate_description_publishing"
    },
    publish_checksGate_description_saving: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " pemeriksaan wajib gagal pada perubahan terbaru Anda. Kami sarankan untuk memperbaikinya sebelum menyimpan."
            ],
            "countPlural=other": [
                ["countNumber"], " pemeriksaan wajib gagal pada perubahan terbaru Anda. Kami sarankan untuk memperbaikinya sebelum menyimpan."
            ]
        },
        f: "publish_checksGate_description_saving"
    },
    publish_checksGate_description_updating: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " pemeriksaan wajib gagal pada perubahan terbaru Anda. Kami sarankan untuk memperbaikinya sebelum memperbarui."
            ],
            "countPlural=other": [
                ["countNumber"], " pemeriksaan wajib gagal pada perubahan terbaru Anda. Kami sarankan untuk memperbaikinya sebelum memperbarui."
            ]
        },
        f: "publish_checksGate_description_updating"
    },
    publish_checksGate_description_uploading: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " pemeriksaan wajib gagal pada perubahan terbaru Anda. Kami sarankan untuk memperbaikinya sebelum mengunggah."
            ],
            "countPlural=other": [
                ["countNumber"], " pemeriksaan wajib gagal pada perubahan terbaru Anda. Kami sarankan untuk memperbaikinya sebelum mengunggah."
            ]
        },
        f: "publish_checksGate_description_uploading"
    },
    publish_checksGate_fix: "Perbaiki dengan Lovable",
    publish_checksGate_title: "Beberapa pemeriksaan gagal",
    publish_checksRunningGate_description_publishing: "Pemeriksaan untuk versi proyek ini belum selesai, jadi salah satunya masih mungkin gagal. Kami menyarankan agar Anda menunggu hasilnya sebelum memublikasikan.",
    publish_checksRunningGate_description_saving: "Pemeriksaan untuk versi proyek ini belum selesai, jadi salah satunya masih mungkin gagal. Kami menyarankan agar Anda menunggu hasilnya sebelum menyimpan.",
    publish_checksRunningGate_description_updating: "Pemeriksaan untuk versi proyek ini belum selesai, jadi salah satunya masih mungkin gagal. Kami menyarankan agar Anda menunggu hasilnya sebelum memperbarui.",
    publish_checksRunningGate_description_uploading: "Pemeriksaan untuk versi proyek ini belum selesai, jadi salah satunya masih mungkin gagal. Kami menyarankan agar Anda menunggu hasilnya sebelum mengunggah.",
    publish_checksRunningGate_title: "Pemeriksaan masih berjalan",
    publish_checksRunningGate_wait: "Tunggu pemeriksaan selesai",
    publish_close: "Tutup",
    publish_connector_appUrl: "URL Aplikasi",
    publish_connector_appUrlAfterNextPublish: "Tersedia setelah publikasi berikutnya.",
    publish_connector_appUrlAfterPublish: "URL aplikasi Anda akan tersedia setelah dipublikasikan.",
    publish_connector_appUrlPending: "URL aplikasi Anda akan segera muncul di sini.",
    publish_connector_fallbackName: "konektor Anda",
    publish_connector_onlyPermittedUsers: "Hanya pengguna yang diizinkan yang dapat melihat",
    publish_connector_publishTo: ["Publikasikan ke ", ["connectorName"]],
    publish_connector_queryDataAs: "Jalankan kueri sebagai",
    publish_connector_queryIdentityFixed: ["Pelihat aplikasi. Koneksi ini masuk menggunakan akun Anda sendiri, sehingga setiap kueri dijalankan sebagai orang yang sedang melihat aplikasi, dengan izin ", ["connectorName"], " miliknya sendiri."],
    publish_connector_queryIdentityServicePrincipalDescription: ["Akses bersama — semua orang menjalankan kueri melalui koneksi ", ["connectorName"], " milik aplikasi."],
    publish_connector_queryIdentityServicePrincipalTitle: "Service principal",
    publish_connector_queryIdentityViewerDescription: ["Izin ", ["connectorName"], " milik masing-masing orang. Pelihat menyetujui permintaan izin ", ["connectorName"], " satu kali, dan aplikasi hanya dapat membaca apa yang dapat diakses setiap pelihat."],
    publish_connector_queryIdentityViewerTitle: "Pelihat aplikasi",
    publish_connector_successDescription: ["Aplikasi Anda berjalan di ruang kerja ", ["connectorName"], " Anda."],
    publish_connector_successTitle: ["Dipublikasikan ke ", ["connectorName"]],
    publish_connector_urlGeneratedAfterPublish: ["URL dibuat oleh ", ["connectorName"], " setelah dipublikasikan"],
    publish_copied: "Tersalin",
    publish_editIconAndDetails: "Edit ikon dan detail",
    publish_failed_buildErrorList: "Proses kompilasi gagal dengan kesalahan berikut:",
    publish_failed_buildErrorMessage: "Kami tidak dapat memublikasikan situs Anda karena ada kesalahan pada proses kompilasi.",
    publish_failed_close: "Tutup",
    publish_failed_errorLabel: "Pesan kesalahan:",
    publish_failed_externalActionGuidance: "Perbarui koneksi atau kunci rahasia yang diperlukan di pengaturan proyek, lalu coba lagi.",
    publish_failed_fix_disabledReason: "Tunggu pesan chat saat ini selesai terkirim",
    publish_failed_fix_initiated: "Upaya perbaikan berhasil dimulai",
    publish_failed_fix_openingEditor: "Membuka editor untuk mengirim perbaikan",
    publish_failed_genericErrorMessage: "Terjadi kesalahan dan kami tidak dapat memublikasikan situs Anda.",
    publish_failed_retrying: "Mencoba lagi…",
    publish_failed_title: "Ups! 😢",
    publish_failed_tryAgain: "Coba lagi",
    publish_failed_tryToFix_assisted: "Minta bantuan asisten",
    publish_footer_back: "Kembali",
    publish_footer_continue: "Lanjutkan",
    publish_footer_done: "Selesai",
    publish_gate_askLovable: "Tanya Lovable",
    publish_gate_askingLovable: "Bertanya ke Lovable…",
    publish_gate_caption_buildFailed_publishing: "Perubahan terbaru Anda gagal dikompilasi, sehingga publikasi juga akan gagal dengan cara yang sama. Perbaiki kesalahan kompilasi sebelum memublikasikan.",
    publish_gate_caption_buildFailed_updating: "Perubahan terbaru Anda gagal dikompilasi, sehingga pembaruan juga akan gagal dengan cara yang sama. Perbaiki kesalahan kompilasi sebelum memperbarui.",
    publish_gate_caption_buildFailed_uploading: "Perubahan terbaru Anda gagal dikompilasi, sehingga pengunggahan juga akan gagal dengan cara yang sama. Perbaiki kesalahan kompilasi sebelum mengunggah.",
    publish_gate_caption_checksFailed_publishing: "Beberapa pemeriksaan wajib gagal pada perubahan terbaru Anda. Perbaiki sebelum menerbitkan, atau tetap terbitkan.",
    publish_gate_caption_checksFailed_updating: "Beberapa pemeriksaan wajib gagal pada perubahan terbaru Anda. Perbaiki sebelum memperbarui, atau tetap perbarui.",
    publish_gate_caption_checksFailed_uploading: "Beberapa pemeriksaan wajib gagal pada perubahan terbaru Anda. Perbaiki sebelum mengunggah, atau tetap unggah.",
    publish_gate_caption_checksRunning_publishing: "Pemeriksaan terhadap perubahan terbaru pada proyek Anda belum selesai. Tunggu hingga pemeriksaan selesai sebelum memublikasikan, atau tetap publikasikan.",
    publish_gate_caption_checksRunning_updating: "Pemeriksaan terhadap perubahan terbaru pada proyek Anda belum selesai. Tunggu hingga pemeriksaan selesai sebelum memperbarui, atau tetap perbarui.",
    publish_gate_caption_checksRunning_uploading: "Pemeriksaan terhadap perubahan terbaru pada proyek Anda belum selesai. Tunggu hingga pemeriksaan selesai sebelum mengunggah, atau tetap unggah.",
    publish_gate_caption_critical_publishing: "Ruang kerja Anda mewajibkan masalah keamanan kritis ditangani sebelum aplikasi dipublikasikan.",
    publish_gate_caption_critical_updating: "Ruang kerja Anda mengharuskan masalah keamanan kritis diatasi sebelum aplikasi dipublikasikan.",
    publish_gate_caption_critical_uploading: "Ruang kerja Anda mewajibkan masalah keamanan kritis ditangani sebelum aplikasi diunggah.",
    publish_gate_caption_mcpAuth_publishing: "MCP aplikasi Anda mengizinkan akses tanpa proses masuk, yang hanya berfungsi untuk aplikasi publik. Minta agen menambahkan proses masuk ke MCP sebelum aplikasi dipublikasikan. Ini adalah persyaratan publikasi, terpisah dari temuan pemindaian keamanan.",
    publish_gate_caption_mcpAuth_updating: "MCP aplikasi Anda mengizinkan akses tanpa proses masuk, yang hanya berfungsi untuk aplikasi publik. Minta agen menambahkan proses masuk ke MCP sebelum aplikasi diperbarui. Ini adalah persyaratan publikasi, terpisah dari temuan pemindaian keamanan.",
    publish_gate_caption_mcpAuth_uploading: "MCP aplikasi Anda mengizinkan akses tanpa proses masuk, yang hanya berfungsi untuk aplikasi publik. Minta agen menambahkan proses masuk ke MCP sebelum aplikasi diunggah. Ini adalah persyaratan publikasi, terpisah dari temuan pemindaian keamanan.",
    publish_gate_caption_pii_publishing: "Ruang kerja Anda mewajibkan temuan data sensitif diselesaikan sebelum aplikasi dipublikasikan.",
    publish_gate_caption_pii_updating: "Ruang kerja Anda mewajibkan temuan data sensitif diselesaikan sebelum aplikasi diperbarui.",
    publish_gate_caption_pii_uploading: "Ruang kerja Anda mewajibkan temuan data sensitif diselesaikan sebelum aplikasi diunggah.",
    publish_gate_caption_scanInProgress_publishing: "Pemindaian keamanan harus selesai sebelum aplikasi dipublikasikan.",
    publish_gate_caption_scanInProgress_updating: "Pemindaian keamanan harus selesai sebelum aplikasi diperbarui.",
    publish_gate_caption_scanInProgress_uploading: "Pemindaian keamanan harus selesai sebelum aplikasi diunggah.",
    publish_gate_caption_scanRequired_publishing: "Pemindaian keamanan harus dijalankan sebelum aplikasi dipublikasikan.",
    publish_gate_caption_scanRequired_updating: "Pemindaian keamanan harus dijalankan sebelum aplikasi diperbarui.",
    publish_gate_caption_scanRequired_uploading: "Pemindaian keamanan harus dijalankan sebelum aplikasi diunggah.",
    publish_gate_prompt_mcpAuth: "Tambahkan autentikasi masuk ke server MCP aplikasi saya agar dapat dipublikasikan dengan akses terbatas.",
    publish_gate_scanning: "Memindai",
    publish_gate_viewSecurity: "Keamanan",
    publish_googleMaps_body: "Google Maps otomatis berfungsi di URL lovable.app Anda. Untuk menggunakannya di domain sendiri, hubungkan kunci API Google Maps Anda.",
    publish_googleMaps_summary: "Google Maps tidak dapat dimuat",
    publish_header_notPublished: "Belum dipublikasikan",
    publish_header_published: "Dipublikasikan",
    publish_header_unpublish: "Batalkan publikasi",
    publish_hero_body: "Ini memungkinkan pengunjung melihat apa yang telah Anda bangun. Mereka tidak akan pernah melihat perubahan yang Anda lakukan sampai Anda memublikasikannya.",
    publish_hero_dismiss: "Tutup",
    publish_hero_title: "Siap menayangkan situs Anda?",
    publish_invite_domainNotAllowed: "Hanya email dari domain terverifikasi yang dapat diundang",
    publish_invite_domainNotAllowedError: "Beberapa undangan tidak dapat dikirim: ruang kerja ini hanya mengizinkan undangan eksternal ke email dari domain terverifikasi.",
    publish_live_discordCopied: "Disalin ke papan klip! Tempel di saluran Discord Anda.",
    publish_live_isLive: "Situs web Anda sudah tayang",
    publish_live_shareText: "Lihat apa yang baru saja saya buat dengan Lovable!",
    publish_live_siteUnhealthyBody: ["Perubahan Anda telah diterapkan, tetapi saat kami memeriksanya, situs Anda memberikan respons kesalahan (HTTP ", ["status"], "). Buka aplikasi Anda untuk melihat detailnya."],
    publish_live_siteUnhealthyTitle: "Berhasil dipublikasikan, tetapi situs Anda tidak merespons",
    publish_live_subtitle: "Bagikan untuk mendapatkan pengunjung pertama Anda.",
    publish_live_subtitleRestricted: "Hanya dapat dilihat oleh orang yang memiliki akses.",
    publish_live_subtitleWorkspace: "Hanya dapat dilihat oleh orang-orang di ruang kerja Anda.",
    publish_live_viewApp: "Lihat aplikasi",
    publish_live_visitSite: "Kunjungi situs",
    publish_managedApps_connectFailedDescription: "Periksa koneksi dan coba lagi.",
    publish_managedApps_connectFailedTitle: "Tidak dapat terhubung ke Microsoft",
    publish_managedApps_getHelp: "Dapatkan bantuan di obrolan",
    publish_managedApps_liveOn: "Aplikasi Anda aktif di",
    publish_managedApps_publishing: ["Memublikasikan ke ", ["target"], "…"],
    publish_managedApps_shortName: "Copilot Managed Runtime",
    publish_managedApps_status_connected: "Terhubung",
    publish_managedApps_status_connectedEnvironment: ["Koneksi · ", ["environmentId"]],
    publish_managedApps_status_connecting: "Menghubungkan…",
    publish_managedApps_status_failed: "Koneksi gagal",
    publish_managedApps_status_notConnected: "Tidak terhubung",
    publish_managedApps_status_publishesAs: ["Diterbitkan sebagai ", ["displayName"]],
    publish_managedApps_status_publishesAsEnvironment: ["Diterbitkan sebagai ", ["displayName"], " · ", ["environmentId"]],
    publish_managedApps_status_publishesAsSettingUp: ["Diterbitkan sebagai ", ["displayName"], " · sedang menyelesaikan penyiapan"],
    publish_managedApps_targetName: "Microsoft Copilot Managed Runtime",
    publish_managedApps_urlAfterPublish: ["URL dibuat oleh ", ["target"], " setelah publikasi"],
    publish_members_addPeopleGroupsAndWorkspacesHeading: "Tambahkan orang, grup, dan ruang kerja",
    publish_members_addPeopleGroupsWorkspacesAndOrgsHeading: "Tambahkan orang, grup, ruang kerja, dan organisasi",
    publish_members_addPeopleHeading: "Tambahkan orang",
    publish_members_externalUser: "Pengguna eksternal",
    publish_members_groupEmpty: "Grup ini kosong",
    publish_members_groupMemberCount: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Grup · ", ["countNumber"], " orang"],
            "countPlural=other": ["Grup · ", ["countNumber"], " orang"]
        },
        f: "publish_members_groupMemberCount"
    },
    publish_members_loadingMembers: "Memuat anggota…",
    publish_members_organizationMember: "Anggota organisasi",
    publish_members_projectAccess: "Akses proyek",
    publish_members_remove: "Hapus",
    publish_members_searchPlaceholder: "Nama atau grup",
    publish_members_searchPlaceholderPeople: "Nama",
    publish_members_searchPlaceholderPeopleWithEmail: "Email atau nama",
    publish_members_searchPlaceholderWithEmail: "Email, nama, atau grup",
    publish_members_selfSubtitle: "Anda",
    publish_members_sentLinkViaEmail: "Tautan dikirim via email",
    publish_members_sharedWithGroupTooltip: "Proyek dibagikan kepada grup ini. Ubah pengaturan berbagi untuk menyesuaikan.",
    publish_members_sharedWithPersonTooltip: "Proyek dibagikan kepada orang ini. Ubah pengaturan berbagi untuk menyesuaikan.",
    publish_progress_publishingBody: "Anda dapat menutup dialog ini dan melanjutkan obrolan. Publikasi akan berlanjut di latar belakang.",
    publish_progress_publishingTitle: "Mempublikasikan proyek…",
    publish_progress_updatingBody: "Anda dapat menutup dialog ini dan melanjutkan obrolan. Pembaruan akan berlanjut di latar belakang.",
    publish_progress_updatingTitle: "Memperbarui proyek…",
    publish_referral_footer: ["<invite>Undang teman</invite> dan dapatkan ", ["count"], " kredit untuk setiap rujukan berbayar."],
    publish_referral_footerUpTo: ["<invite>Undang teman</invite> dan dapatkan hingga ", ["count"], " kredit per referal."],
    publish_saveChanges_finishUrlEdit: "Simpan atau batalkan perubahan URL terlebih dahulu",
    publish_saveChanges_save: "Simpan perubahan",
    publish_saveChanges_saved: "Perubahan disimpan",
    publish_saveChanges_saving: "Menyimpan",
    publish_securityGate_critical_address: "Atasi masalah",
    publish_securityGate_critical_description_publishing: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Kami menemukan ", ["countNumber"], " masalah kritis yang membahayakan keamanan aplikasi Anda. Sebaiknya atasi masalah tersebut sebelum memublikasikan."],
            "countPlural=other": ["Kami menemukan ", ["countNumber"], " masalah kritis yang membahayakan keamanan aplikasi Anda. Sebaiknya atasi masalah tersebut sebelum memublikasikan."]
        },
        f: "publish_securityGate_critical_description_publishing"
    },
    publish_securityGate_critical_description_saving: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Kami menemukan ", ["countNumber"], " masalah kritis yang membahayakan keamanan aplikasi Anda. Sebaiknya atasi dulu sebelum menyimpan perubahan Anda."],
            "countPlural=other": ["Kami menemukan ", ["countNumber"], " masalah kritis yang membahayakan keamanan aplikasi Anda. Sebaiknya atasi dulu sebelum menyimpan perubahan Anda."]
        },
        f: "publish_securityGate_critical_description_saving"
    },
    publish_securityGate_critical_description_updating: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Kami menemukan ", ["countNumber"], " masalah kritis yang membahayakan keamanan aplikasi Anda. Sebaiknya atasi dulu sebelum memperbarui."],
            "countPlural=other": ["Kami menemukan ", ["countNumber"], " masalah kritis yang membahayakan keamanan aplikasi Anda. Sebaiknya atasi dulu sebelum memperbarui."]
        },
        f: "publish_securityGate_critical_description_updating"
    },
    publish_securityGate_critical_description_uploading: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Kami menemukan ", ["countNumber"], " masalah kritis yang membahayakan keamanan aplikasi Anda. Sebaiknya atasi dulu sebelum mengunggah."],
            "countPlural=other": ["Kami menemukan ", ["countNumber"], " masalah kritis yang membahayakan keamanan aplikasi Anda. Sebaiknya atasi dulu sebelum mengunggah."]
        },
        f: "publish_securityGate_critical_description_uploading"
    },
    publish_securityGate_critical_title: "Masalah keamanan kritis ditemukan",
    publish_securityGate_inProgress_description_publishing: "Pemindaian keamanan untuk versi ini masih berjalan. Memublikasikan sekarang dapat membahayakan keamanan aplikasi Anda — sebaiknya tunggu hasilnya.",
    publish_securityGate_inProgress_description_saving: "Pemindaian keamanan untuk versi ini masih berjalan. Menyimpan perubahan sekarang dapat membahayakan keamanan aplikasi Anda — sebaiknya tunggu hasilnya.",
    publish_securityGate_inProgress_description_updating: "Pemindaian keamanan untuk versi ini masih berjalan. Memperbarui sekarang dapat membahayakan keamanan aplikasi Anda — sebaiknya tunggu hasilnya.",
    publish_securityGate_inProgress_description_uploading: "Pemindaian keamanan untuk versi ini masih berjalan. Mengunggah sekarang dapat membahayakan keamanan aplikasi Anda — sebaiknya tunggu hasilnya.",
    publish_securityGate_inProgress_title: "Pemindaian keamanan sedang berjalan",
    publish_securityGate_inProgress_wait: "Tunggu pemindaian",
    publish_securityGate_override_publish: "Tetap publikasikan",
    publish_securityGate_override_save: "Tetap simpan",
    publish_securityGate_override_update: "Tetap perbarui",
    publish_securityGate_override_upload: "Tetap unggah",
    publish_securityGate_required_description_publishing: "Versi ini belum dipindai, sehingga dapat membahayakan keamanan aplikasi Anda. Kami menyarankan Anda menjalankan pemindaian keamanan singkat sebelum melakukan publikasi.",
    publish_securityGate_required_description_saving: "Versi ini belum dipindai, sehingga dapat membahayakan keamanan aplikasi Anda. Kami menyarankan Anda menjalankan pemindaian keamanan singkat sebelum menyimpan perubahan Anda.",
    publish_securityGate_required_description_updating: "Versi ini belum dipindai, sehingga dapat membahayakan keamanan aplikasi Anda. Kami menyarankan Anda menjalankan pemindaian keamanan singkat sebelum melakukan pembaruan.",
    publish_securityGate_required_description_uploading: "Versi ini belum dipindai, sehingga dapat membahayakan keamanan aplikasi Anda. Kami menyarankan Anda menjalankan pemindaian keamanan singkat sebelum mengunggah.",
    publish_securityGate_required_runScan: "Jalankan pemindaian",
    publish_securityGate_required_title: "Pemindaian keamanan disarankan",
    publish_security_allScansPassed: "Pemindaian keamanan dasar & mendalam tidak menemukan masalah",
    publish_security_basicScan: "Pemindaian keamanan dasar",
    publish_security_basicScanFoundIssues: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Pemindaian keamanan dasar menemukan ", ["countNumber"], " masalah"],
            "countPlural=other": ["Pemindaian keamanan dasar menemukan ", ["countNumber"], " masalah"]
        },
        f: "publish_security_basicScanFoundIssues"
    },
    publish_security_basicScanInfo: "Mencakup dependensi, konektor, dan kesalahan konfigurasi basis data.",
    publish_security_basicScanNoIssues: "Tidak ada masalah yang ditemukan dalam pemindaian dasar.",
    publish_security_basicScanPassed: "Pemindaian keamanan dasar tidak menemukan masalah",
    publish_security_basicScanProgress: "Progres pemindaian keamanan dasar",
    publish_security_deepScan: "Pemindaian keamanan mendalam",
    publish_security_deepScanDescription: "Pemeriksaan opsional yang lebih mendalam untuk konektor dan analisis basis kode dengan AI.",
    publish_security_deepScanFoundIssues: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Pemindaian keamanan mendalam menemukan ", ["countNumber"], " masalah"],
            "countPlural=other": ["Pemindaian keamanan mendalam menemukan ", ["countNumber"], " masalah"]
        },
        f: "publish_security_deepScanFoundIssues"
    },
    publish_security_deepScanHint: "Analisis basis kode dengan AI · ~4 mnt",
    publish_security_deepScanNoIssues: "Tidak ada masalah yang ditemukan dalam pemeriksaan mendalam.",
    publish_security_deepScanPassed: "Pemindaian keamanan mendalam tidak menemukan masalah",
    publish_security_deepScanProgress: "Progres pemindaian keamanan mendalam",
    publish_security_estimateAlmostDone: "hampir selesai",
    publish_security_estimateMinutes: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["~", ["countNumber"], " mnt"],
            "countPlural=other": ["~", ["countNumber"], " mnt"]
        },
        f: "publish_security_estimateMinutes"
    },
    publish_security_estimateUnder1: "<1 mnt",
    publish_security_estimateWrappingUp: "tahap akhir",
    publish_security_infoAriaLabel: "Selengkapnya tentang pemindaian keamanan",
    publish_security_moreIssues: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["+ ", ["countNumber"], " lainnya"],
            "countPlural=other": ["+ ", ["countNumber"], " lainnya"]
        },
        f: "publish_security_moreIssues"
    },
    publish_security_noIssuesFound: "Tidak ditemukan masalah",
    publish_security_readyToScan: "Siap memindai masalah umum.",
    publish_security_reviewBeforePublishing: "Tinjau masalah sebelum menerbitkan.",
    publish_security_runScanShort: "Jalankan",
    publish_security_scanStartFailed: "Gagal memulai pemindaian keamanan.",
    publish_security_scanning: "Memindai…",
    publish_security_unexpectedError: "Terjadi kesalahan yang tidak terduga.",
    publish_setup_areaCloudDatabase: "basis data cloud",
    publish_setup_areaConnections: "koneksi",
    publish_setup_areaGoogleMaps: "Google Maps Platform",
    publish_setup_areaPayments: "pembayaran",
    publish_setup_areaSeo: "SEO",
    publish_setup_connectionsAction: "Lihat konektor",
    publish_setup_connectionsDescription: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": "Aplikasi ini dapat mengakses data dari 1 layanan terhubung.",
            "countPlural=other": ["Aplikasi ini dapat mengakses data dari ", ["countNumber"], " layanan terhubung."]
        },
        f: "publish_setup_connectionsDescription"
    },
    publish_setup_connectionsTitle: "Tinjau layanan yang terhubung",
    publish_setup_paymentsAction: "Siapkan pembayaran",
    publish_setup_paymentsTitle: "Penyiapan pembayaran belum selesai",
    publish_setup_ready: "Semuanya siap untuk dipublikasikan.",
    publish_setup_resourceExhaustionAction: "Atasi",
    publish_setup_resourceExhaustionDescription: "Aplikasi Anda mungkin merespons dengan lambat. Anda tetap dapat memublikasikan.",
    publish_setup_resourceExhaustionSendingHint: "Mengirim...",
    publish_setup_resourceExhaustionTitle: "Aplikasi Anda sedang mengalami beban tinggi",
    publish_setup_seoInProgressAction: "Lihat SEO",
    publish_setup_seoInProgressDescription: "Buka tinjauan SEO untuk melihat hasilnya saat tersedia.",
    publish_setup_seoInProgressTitle: "Tinjauan SEO sedang berlangsung",
    publish_setup_seoIssuesDescription: "Tinjau rekomendasi untuk meningkatkan tampilan situs Anda di hasil pencarian.",
    publish_setup_seoIssuesTitle: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": "1 masalah SEO ditemukan",
            "countPlural=other": [
                ["countNumber"], " masalah SEO ditemukan"
            ]
        },
        f: "publish_setup_seoIssuesTitle"
    },
    publish_setup_seoOutdatedDescription: "Proyek Anda berubah setelah tinjauan SEO terakhir.",
    publish_setup_seoOutdatedTitle: "Tinjauan SEO perlu diperbarui",
    publish_setup_seoReviewAction: "Tinjau SEO",
    publish_setup_seoReviewDescription: "Periksa seberapa mudah orang menemukan proyek Anda melalui pencarian dan AI.",
    publish_setup_seoReviewTitle: "Jalankan tinjauan SEO pertama Anda",
    publish_setup_summary: ["Periksa pengaturan ", ["areas"]],
    publish_setup_title: "Tinjau pengaturan proyek",
    publish_share: "Bagikan",
    publish_share_failed: "Gagal membagikan",
    publish_share_linkTitle: "Tautan berbagi",
    publish_share_onPlatform: ["Bagikan di ", ["platform"]],
    publish_socialAndSearchAppearance: "Tampilan sosial & pencarian",
    publish_status_almostReady: "Hampir siap untuk dipublikasikan",
    publish_status_buildFailed: "Kesalahan kompilasi perlu diperbaiki",
    publish_status_changesSincePublished: ["Perubahan sejak dipublikasikan ", ["time"]],
    publish_status_checksFailed: "Beberapa pemeriksaan gagal",
    publish_status_checksRunning: "Pemeriksaan masih berjalan",
    publish_status_failed: "Publikasi gagal",
    publish_status_fixSecurity: "Perbaiki masalah keamanan sebelum publikasi",
    publish_status_mcpAuthRequired: "Autentikasi MCP diperlukan",
    publish_status_moreInfo: "Info selengkapnya",
    publish_status_piiReviewRequired: "Temuan data sensitif perlu ditinjau",
    publish_status_scanInProgress: "Pemindaian keamanan sedang berjalan",
    publish_status_scanRequired: "Pemindaian keamanan diperlukan",
    publish_status_unpublishedChanges: "Ada perubahan yang belum dipublikasikan",
    publish_status_upToDate: "Situs web Anda sudah mutakhir",
    publish_store_advice_checkTestFlight: "Periksa TestFlight sebelum mengunggah lagi — biner aplikasi ini mungkin sudah terunggah.",
    publish_store_advice_fixChecks: "Perbaiki pemeriksaan yang gagal, lalu unggah kembali.",
    publish_store_advice_fixThis: "Perbaiki ini, lalu unggah kembali.",
    publish_store_advice_resolveGate: "Selesaikan pemeriksaan keamanan di atas, lalu unggah kembali.",
    publish_store_advice_retry: "Unggah lagi untuk mencoba kembali.",
    publish_store_checkAppName_add: ["Tambahkan nama ke ", ["path"]],
    publish_store_checkAppName_label: "Nama aplikasi",
    publish_store_checkAppRecord_addBundleFirst: "Tambahkan ID bundle terlebih dahulu agar pemeriksaan ini dapat dijalankan",
    publish_store_checkAppRecord_checking: "Memeriksa App Store Connect…",
    publish_store_checkAppRecord_credentialsInvalid: "App Store Connect menolak kunci yang tersimpan — hubungkan kembali jika unggahan gagal.",
    publish_store_checkAppRecord_label: "Entri aplikasi di App Store Connect",
    publish_store_checkAppRecord_matchedAtBuild: "Cocok saat aplikasi dikompilasi — ID bundle tidak dapat dibaca di sini",
    publish_store_checkAppRecord_multipleConnections: "Beberapa koneksi App Store Connect tertaut ke proyek ini — putuskan koneksi yang tidak Anda gunakan.",
    publish_store_checkAppRecord_noMatch: ["Tidak ada aplikasi di App Store Connect yang cocok dengan ", ["bundleId"]],
    publish_store_checkAppRecord_ownerOnly: "Hanya pemilik koneksi yang dapat memeriksa entri aplikasi.",
    publish_store_checkAppRecord_statusUnreachable: "Lovable tidak dapat mengakses status App Store Connect untuk proyek ini.",
    publish_store_checkAppRecord_unreachable: "Tidak dapat menjangkau App Store Connect — unggahan akan tetap dijalankan.",
    publish_store_checkBundleId_add: ["Tambahkan ios.bundleIdentifier ke ", ["path"]],
    publish_store_checkBundleId_label: "ID bundle",
    publish_store_checkBundleId_unreadable: ["Ditetapkan di konfigurasi Expo Anda — ", ["path"], " tidak dapat dibaca di sini"],
    publish_store_checkConnection_label: "Akun App Store Connect terhubung",
    publish_store_checkConnection_reconnect: "Hubungkan kembali Akun Apple Anda untuk membuat kunci API baru.",
    publish_store_checkSecurity_detail: "Selesaikan temuan keamanan sebelum mengunggah.",
    publish_store_checkSecurity_label: "Tinjauan keamanan",
    publish_store_checkTestFlight: "Periksa TestFlight",
    publish_store_checkVersion_add: ["Tambahkan versi ke ", ["path"]],
    publish_store_checkVersion_detail: [
        ["version"], " — nomor build ditetapkan secara otomatis"
    ],
    publish_store_checkVersion_label: "Versi rilis",
    publish_store_checkingButton: "Memeriksa…",
    publish_store_connectError_enterCredentials: "Masukkan kredensial App Store Connect Anda terlebih dahulu.",
    publish_store_connectError_generic: "Gagal menghubungkan App Store Connect. Coba lagi.",
    publish_store_connectError_linkIncomplete: ["Telah terhubung, tetapi penautan tidak dapat diselesaikan — koneksi (", ["id"], ") mungkin perlu dihapus di pengaturan ruang kerja."],
    publish_store_connectError_notAvailable: "App Store Connect belum tersedia untuk proyek ini. Coba lagi dalam beberapa menit.",
    publish_store_connectError_openProject: "Buka proyek sebelum menghubungkan App Store Connect.",
    publish_store_connectError_signIn: "Masuk sebelum menghubungkan App Store Connect.",
    publish_store_connectViaChatSent: "Permintaan telah dikirim ke agen di obrolan. Setujui permintaan koneksi di sana untuk menyelesaikannya.",
    publish_store_connectWithApiKey: "Hubungkan dengan kunci API App Store Connect",
    publish_store_createAppButton: "Buat aplikasi di App Store Connect",
    publish_store_existingConnection_added: ["Ditambahkan ", ["date"]],
    publish_store_existingConnection_busy: "Langkah koneksi lain sedang berlangsung",
    publish_store_existingConnection_caption: "Ruang kerja Anda sudah memiliki koneksi App Store Connect. Tautkan koneksi tersebut ke proyek ini daripada harus masuk kembali dengan Apple.",
    publish_store_existingConnection_linking: "Menautkan…",
    publish_store_existingConnection_title: "Gunakan koneksi yang ada",
    publish_store_existingConnection_use: "Gunakan koneksi ini",
    publish_store_failure_didntFinish: ["Unggahan terakhir tidak selesai (", ["status"], ")."],
    publish_store_guidedSetupDescription: "Masuk dan pilih tim Anda — kami akan membuat kunci API App Store Connect dan menghubungkannya ke proyek ini. Kata sandi Anda dikirim ke Apple melalui sesi aman di peramban Anda dan tidak pernah dikirim ke Lovable.",
    publish_store_guidedSetupDone: "Terhubung. Anda dapat mengunggah paket aplikasi ke TestFlight dari sini.",
    publish_store_heading_blocked: "Pemeriksaan menemukan masalah",
    publish_store_heading_checking: "Memeriksa App Store Connect…",
    publish_store_heading_failed: "Unggahan terakhir gagal",
    publish_store_heading_notConnected: "Hubungkan App Store Connect",
    publish_store_heading_ready: "Siap untuk mengunggah",
    publish_store_heading_submittedUnverified: "Unggahan terkirim, belum dikonfirmasi",
    publish_store_heading_upToDate: "Sudah mutakhir di TestFlight",
    publish_store_heading_uploading: "Mengunggah paket aplikasi",
    publish_store_lastUpload_build: ["Kompilasi ", ["number"]],
    publish_store_lastUpload_latestBuild: "Kompilasi terbaru",
    publish_store_lastUpload_openInAsc: "Buka di App Store Connect",
    publish_store_lastUpload_uploadedAt: ["Diunggah pada ", ["date"]],
    publish_store_lastUpload_uploadedToTestFlight: "Diunggah ke TestFlight",
    publish_store_link_configNotFound: [
        ["path"], " tidak ditemukan — tambahkan sebelum menautkan aplikasi App Store."
    ],
    publish_store_link_linkButton: "Tautkan",
    publish_store_link_linking: "Menautkan…",
    publish_store_link_noApps: "Belum ada aplikasi di akun App Store Connect ini. Buat aplikasi dengan ID bundel yang sesuai, lalu unggah.",
    publish_store_link_pointAtExisting: "Atau arahkan proyek ini ke aplikasi yang sudah Anda miliki:",
    publish_store_link_selectAriaLabel: "Aplikasi App Store Connect yang ada",
    publish_store_link_selectFirst: "Pilih aplikasi untuk ditautkan terlebih dahulu",
    publish_store_link_selectPlaceholder: "Pilih aplikasi",
    publish_store_noAccess_caption: "Minta pemilik koneksi untuk mengunggah.",
    publish_store_noAccess_heading: "Hanya pemilik koneksi yang dapat mengunggah",
    publish_store_noAccess_notice: "Koneksi App Store Connect proyek ini dimiliki oleh anggota ruang kerja lain, dan hanya anggota tersebut yang dapat mengunggah darinya. Minta anggota tersebut menjalankan unggahan, atau membagikan koneksi dengan Anda di pengaturan ruang kerja.",
    publish_store_noChanges: "Tidak ada perubahan",
    publish_store_tryAgain: "Coba lagi",
    publish_store_unreachable_caption: "Muat ulang editor dan coba lagi sebentar lagi.",
    publish_store_unreachable_heading: "App Store Connect tidak dapat diperiksa saat ini",
    publish_store_uploadAgain: "Unggah lagi",
    publish_store_uploadButton: "Unggah ke App Store",
    publish_store_uploadError: "Tidak dapat memulai unggahan. Coba lagi.",
    publish_store_uploadingButton: "Mengunggah…",
    publish_store_uploadingProgressLabel: "Mengunggah build ke App Store Connect",
    publish_summary_checkingDeepSecurity: "Menjalankan pemindaian keamanan mendalam",
    publish_summary_checkingSecurity: "Menjalankan pemindaian keamanan cepat",
    publish_summary_checksFailed: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["count"], " pemeriksaan gagal"
            ],
            "countPlural=other": [
                ["count"], " pemeriksaan gagal"
            ]
        },
        f: "publish_summary_checksFailed"
    },
    publish_summary_checksNotRun: "Pemeriksaan tidak selesai",
    publish_summary_checksPassed: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["count"], " pemeriksaan berhasil"
            ],
            "countPlural=other": [
                ["count"], " pemeriksaan berhasil"
            ]
        },
        f: "publish_summary_checksPassed"
    },
    publish_summary_checksRunning: "Menjalankan pemeriksaan",
    publish_summary_checksSkipped: "Pemeriksaan dilewati",
    publish_summary_noSecurityIssues: "Tidak ada masalah keamanan",
    publish_summary_publishedActions: "Tindakan situs yang dipublikasikan",
    publish_summary_securityIssues: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " masalah keamanan kritis ditemukan"
            ],
            "countPlural=other": [
                ["countNumber"], " masalah keamanan kritis ditemukan"
            ]
        },
        f: "publish_summary_securityIssues"
    },
    publish_summary_securityToReview: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " temuan keamanan"
            ],
            "countPlural=other": [
                ["countNumber"], " temuan keamanan"
            ]
        },
        f: "publish_summary_securityToReview"
    },
    publish_summary_websiteUrl: "URL situs web",
    publish_target_byocCloud: "Cloud organisasi Anda",
    publish_target_change: "Ubah",
    publish_target_connection: ["Koneksi · ", ["connectionName"]],
    publish_target_connectionUnavailable: "Koneksi tidak tersedia",
    publish_target_connector: "Konektor",
    publish_target_current: "Saat ini",
    publish_target_lovable: "Lovable",
    publish_target_managedHosting: "Hosting terkelola",
    publish_target_publishTo: "Publikasikan ke",
    publish_target_publishToLovable: "Publikasikan ke Lovable",
    publish_target_recommended: "Direkomendasikan",
    publish_target_runsOn: "Berjalan di",
    publish_target_title: "Di mana aplikasi Anda harus berjalan?",
    publish_tooltip_blocked_critical_publishing: "Ruang kerja Anda mewajibkan masalah keamanan kritis diatasi sebelum publikasi",
    publish_tooltip_blocked_critical_updating: "Ruang kerja Anda mengharuskan masalah keamanan kritis diatasi sebelum aplikasi dipublikasikan",
    publish_tooltip_blocked_pii_publishing: "Ruang kerja Anda mewajibkan temuan data sensitif diselesaikan sebelum publikasi",
    publish_tooltip_blocked_pii_updating: "Ruang kerja Anda mengharuskan temuan data sensitif diselesaikan sebelum diperbarui",
    publish_tooltip_blocked_scanInProgress_publishing: "Ruang kerja Anda mewajibkan pemindaian keamanan diselesaikan sebelum publikasi",
    publish_tooltip_blocked_scanInProgress_updating: "Ruang kerja Anda mengharuskan pemindaian keamanan diselesaikan sebelum diperbarui",
    publish_tooltip_blocked_scanRequired_publishing: "Ruang kerja Anda mewajibkan pemindaian keamanan dijalankan sebelum publikasi",
    publish_tooltip_blocked_scanRequired_updating: "Ruang kerja Anda mengharuskan pemindaian keamanan dijalankan sebelum diperbarui",
    publish_tooltip_publishChanges: "Publikasikan perubahan Anda",
    publish_tooltip_publishProject: "Publikasikan proyek Anda",
    publish_unsaved_description: "Anda memiliki pengaturan publikasi yang belum disimpan. Apakah Anda ingin membuangnya?",
    publish_update_explainer_body: "Perubahan tersebut tidak akan terlihat oleh pengguna sampai Anda memublikasikan pembaruan.",
    publish_update_explainer_title: "Anda telah membuat perubahan pada proyek Anda",
    publish_updated_subtitle: "Bagikan yang baru.",
    publish_updated_subtitleRestricted: "Hanya dapat dilihat oleh orang yang memiliki akses.",
    publish_updated_subtitleWorkspace: "Hanya dapat dilihat oleh orang di ruang kerja Anda.",
    publish_updated_title: "Situs web Anda telah diperbarui",
    publish_urlCopied: "URL disalin",
    publish_url_addDomain: "Tambah domain",
    publish_url_cancelEditing: "Batalkan pengeditan",
    publish_url_domainVerifying: [
        ["domain"], " masih dalam proses penyiapan"
    ],
    publish_url_editSubdomain: "Edit subdomain",
    publish_url_generateFailed: "Tidak dapat membuat URL.",
    publish_url_labelEmpty: "Tidak boleh kosong",
    publish_url_manageDomains: ["Kelola ", ["count"], " domain"],
    publish_url_retry: "Coba lagi",
    publish_url_saveFailed: "Tidak dapat memperbarui URL. Silakan coba lagi.",
    publish_url_saveUrl: "Simpan URL",
    publish_url_updateAppIconHint: "Minta Lovable memperbarui ikon aplikasi",
    publish_url_useFreeDomain: "Gunakan domain gratis Anda",
    publish_viewDocs: "Lihat dokumentasi",
    publish_viewEditSearchSocial: "Edit detail sosial dan pencarian",
    publish_visibility_custom: "Kustom",
    publish_visibility_customAudience: "Dapat dilihat oleh audiens khusus",
    publish_visibility_customDescription: "Semua orang yang memiliki akses ke proyek ini, ditambah siapa pun yang Anda tambahkan",
    publish_visibility_customDescriptionNamedOnly: "Orang yang Anda undang ke proyek ini, serta siapa pun yang Anda tambahkan",
    publish_visibility_justYourOrganization: "Hanya dapat dilihat oleh organisasi",
    publish_visibility_justYourWorkspace: "Hanya dapat dilihat anggota ruang kerja",
    publish_visibility_liveToEveryone: "Dapat dilihat oleh siapa saja yang memiliki tautan",
    publish_visibility_namedOnlyLegacyDescription: "Saat ini semua orang di ruang kerja ini dapat membuka situs web yang dipublikasikan. Pada paket Anda, hanya orang yang Anda tambahkan yang dapat membuka situs web privat. Anggota ruang kerja tetap memiliki akses ke proyek.",
    publish_visibility_namedOnlyLegacyTitle: "Anggota ruang kerja akan kehilangan akses ke situs web",
    publish_visibility_namedOnlyTitle: "Hanya undangan",
    publish_visibility_overrideBusinessPlanRequired: "Penerbitan khusus ruang kerja memerlukan paket Business.",
    publish_visibility_overridePublicTitle: "Aplikasi ini akan bersifat publik",
    publish_visibility_public: "Publik",
    publish_visibility_publicDescription: "Siapa pun yang memiliki tautan",
    publish_visibility_publicRestrictedByWorkspace: "Ruang kerja Anda membatasi siapa yang dapat menerbitkan secara eksternal. Hubungi admin ruang kerja.",
    publish_visibility_publicRestrictedToMembers: "Akses situs web dibatasi hanya untuk anggota ruang kerja di pengaturan ruang kerja.",
    publish_visibility_publicRestrictedToOrg: "Akses situs web dibatasi hanya untuk organisasi Anda di pengaturan ruang kerja.",
    publish_visibility_publishingDisabled: "Penerbitan dinonaktifkan untuk ruang kerja ini.",
    publish_visibility_roleDenied: "Anda tidak memiliki izin untuk menerbitkan ke ruang kerja. Hubungi admin ruang kerja.",
    publish_visibility_sharedWithExternals: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Dibagikan dengan ", ["countNumber"], " orang eksternal"],
            "countPlural=other": ["Dibagikan dengan ", ["countNumber"], " orang eksternal"]
        },
        f: "publish_visibility_sharedWithExternals"
    },
    publish_visibility_sharedWithGroups: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Dibagikan dengan ", ["count"], " grup"],
            "countPlural=other": ["Dibagikan dengan ", ["count"], " grup"]
        },
        f: "publish_visibility_sharedWithGroups"
    },
    publish_visibility_sharedWithPeople: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Dibagikan dengan ", ["count"], " orang"],
            "countPlural=other": ["Dibagikan dengan ", ["count"], " orang"]
        },
        f: "publish_visibility_sharedWithPeople"
    },
    publish_visibility_specificPeopleAudience: "Terlihat oleh orang yang diundang",
    publish_visibility_viewAndEdit: "Lihat dan edit",
    publish_visibility_whoCanView: "Siapa yang dapat melihat situs Anda?",
    publish_visibility_workspace: "Ruang kerja",
    publish_visibility_workspaceDescription: "Semua orang di ruang kerja",
    publish_visits: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["formattedVisits"], " kunjungan"
            ],
            "countPlural=other": [
                ["formattedVisits"], " kunjungan"
            ]
        },
        f: "publish_visits"
    },
    publish_visits_hint: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["formattedVisits"], " kunjungan dalam 7 hari terakhir"
            ],
            "countPlural=other": [
                ["formattedVisits"], " kunjungan dalam 7 hari terakhir"
            ]
        },
        f: "publish_visits_hint"
    }
};
export {
    e as
    default
};
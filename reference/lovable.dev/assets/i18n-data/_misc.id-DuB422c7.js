try {
    (function() {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new a.Error().stack;
        e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "e6cae66d-2379-4454-b2a9-7f9e0097918f", a._sentryDebugIdIdentifier = "sentry-dbid-e6cae66d-2379-4454-b2a9-7f9e0097918f")
    })()
} catch {}
var n = {
    a11y_searchJson: "Cari JSON",
    activityView_runningFor: ["Berjalan selama ", ["duration"]],
    activityView_thinking: "Berpikir",
    activityView_thoughtFor: ["Berpikir selama ", ["duration"]],
    activityView_workedFor: ["Bekerja selama ", ["duration"]],
    adsReporting_goalsUnavailable: "Sasaran konversi tidak tersedia.",
    agentPermissions_approval_alwaysAllow: "Selalu izinkan",
    agentPermissions_approval_askEachTime: "Tanyakan setiap kali",
    agentPermissions_approval_neverAllow: "Jangan pernah izinkan",
    agentPermissions_error_title: "Tidak dapat memuat izin",
    agentPermissions_page_title: "Izin agen",
    agentPermissions_row_approvalLabel: ["Persetujuan untuk ", ["name"]],
    agentPermissions_row_approvalPreference: "Preferensi persetujuan",
    aiModels_description: "Model AI yang dapat Anda gunakan melalui Lovable AI Gateway.",
    aiModels_empty: "Tidak ada model AI yang tersedia untuk ruang kerja ini.",
    aiModels_loadError: "Tidak dapat memuat model AI.",
    aiModels_loading: "Memuat model AI",
    aiModels_retry: "Coba lagi",
    analyticsReview_error: "Terjadi kesalahan saat meninjau proyek ini.",
    approvalCard_targetDraft: "Draf",
    billingChatAllowance_percent: [
        ["percent"], "%"
    ],
    breadcrumb_label: "Breadcrumb",
    canvasViewContext_clearSelectedShapes: "Batalkan pilihan bentuk",
    canvasViewContext_openShapeOnCanvas: ["Buka ", ["label"], " di kanvas"],
    canvasViewContext_selectedShapesCount: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " Bentuk"
            ],
            "countPlural=other": [
                ["countNumber"], " Bentuk"
            ]
        },
        f: "canvasViewContext_selectedShapesCount"
    },
    chatCommand_newProject: "Proyek baru",
    chatInputTextArea_limitReached: "Teks yang Anda tempel terlalu panjang.",
    chatInputTextArea_limitReachedDescription: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Kami telah memendekkannya menjadi ", ["countNumber"], " karakter. Periksa apakah ada bagian penting yang terhapus."],
            "countPlural=other": ["Kami telah memendekkannya menjadi ", ["countNumber"], " karakter. Periksa apakah ada bagian penting yang terhapus."]
        },
        f: "chatInputTextArea_limitReachedDescription"
    },
    chatInputTiptap_longPasteBlockedSecretDescription: "Hapus kunci API dari teks, lalu tempelkan kembali.",
    chat_scrollToBottom: "Gulir ke bawah",
    clipboard_copyFailed: "Gagal menyalin ke papan klip",
    clipboard_copyRecordValue: "Salin nilai rekaman",
    cloud_usage_costOptimizationDescription: "Lovable dapat membantu Anda mengurangi penggunaan Run Anda",
    cloud_usage_costOptimizationLabel: "Optimalkan penggunaan Anda",
    cloud_usage_costOptimizationSending: "Mengirim...",
    common_showLess: "Tampilkan lebih sedikit",
    connectorDetail_addConnection: "Tambahkan koneksi",
    connectorDetail_enabled: "Aktif",
    connectorDetail_noCreateConnectionPermission: "Anda tidak memiliki izin untuk membuat koneksi",
    connectorFooter_docsLabel: "Dokumentasi",
    connectorsPage_catalogue_navLabel: "Kategori konektor",
    connectorsPage_detail_backToConnectors: "Kembali ke konektor",
    connectorsSeamlessCta_homepagePrompt: ["Buat proyek baru dengan ", ["name"], " yang aktif."],
    connectorsSeamlessCta_projectPrompt: ["Aktifkan ", ["name"], " untuk proyek ini."],
    connectorsSeamlessCta_try: ["Coba ", ["name"]],
    connectorsSeamlessCta_use: ["Gunakan ", ["name"]],
    contactSupportSuccess_attachmentsNotDelivered: "Pesan Anda terkirim, tetapi lampiran gagal dikirim. Kami akan memintanya saat menangani permintaan dukungan Anda.",
    contactSupportSuccess_description: ["Kami akan menghubungi Anda di ", ["email"], ", biasanya dalam satu hari."],
    contactSupportSuccess_done: "Selesai",
    contactSupportSuccess_title: "Pesan terkirim!",
    contractSummary_billingFrequency: "Frekuensi penagihan",
    createFormSettingsMenu_autoModel: "auto",
    createFormSettingsMenu_model: "Model",
    currentViewContext_removeFromContext: ["Hapus ", ["name"], " dari konteks"],
    designAssetCard_figmaDesign: "Desain Figma",
    designSystemAttach_remove: "Hapus",
    designSystemAttach_retry: "Coba lagi",
    desktopApp_dialogCta: "Unduh aplikasi desktop",
    desktopApp_dialogTagline: `Cepat.
Ringan.
MCP lokal.`,
    desktopApp_dialogTitle: "Unduh aplikasi desktop Lovable",
    desktopApp_downloadFor: ["Unduh untuk ", ["platform"]],
    deviceInstall_buildProgressAriaLabel: "Progres pembuatan",
    deviceInstall_installOnIphoneTitle: "Instal di iPhone Anda",
    deviceInstall_installOnPhoneTitle: "Instal di ponsel Anda",
    earnFreeCredits_getFreeCredits: "Dapatkan kredit gratis",
    editMessageCard_busyToastDescription: "Harap tunggu hingga operasi saat ini selesai.",
    enableDraftsDialog_feature1: "Kerjakan beberapa versi proyek Anda secara berdampingan",
    enableDraftsDialog_feature2: "Setiap draf menyimpan perubahannya secara terpisah, sehingga Anda dapat bereksperimen dengan bebas",
    enableDraftsDialog_feature3: "Terima hanya perubahan yang ingin Anda simpan",
    enableDraftsDialog_readMore: "Baca selengkapnya",
    enableDraftsDialog_readMoreSrSuffix: "tentang draf di dokumentasi",
    enableDraftsDialog_title: "Memperkenalkan draf",
    enableDraftsDialog_tryItNow: "Coba sekarang",
    eventsMap_cards_next: "Berikutnya",
    eventsMap_cards_page: ["Halaman ", ["page"]],
    eventsMap_cards_previous: "Sebelumnya",
    expandableMessage_showLess: "Tampilkan lebih sedikit",
    fileViewer_delimitedColumns: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["formattedCount"], " kolom"
            ],
            "countPlural=other": [
                ["formattedCount"], " kolom"
            ]
        },
        f: "fileViewer_delimitedColumns"
    },
    fileViewer_delimitedEmpty: "Berkas ini kosong.",
    fileViewer_delimitedRowNumber: "Nomor baris",
    fileViewer_delimitedRows: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["formattedCount"], " baris"
            ],
            "countPlural=other": [
                ["formattedCount"], " baris"
            ]
        },
        f: "fileViewer_delimitedRows"
    },
    fileViewer_delimitedSummary: [
        ["rows"], " · ", ["columns"]
    ],
    fileViewer_delimitedTableLabel: ["Tabel ", ["name"]],
    fileViewer_delimitedTruncatedSummary: [
        ["summary"], " · Menampilkan maksimal ", ["rowLimit"], " baris dan ", ["columnLimit"], " kolom. Unduh untuk melihat berkas lengkap."
    ],
    filesCollections_detailTitle: "Koleksi",
    filesImageEdit_draw: "Gambar",
    filesView_downloadFile: "Unduh file",
    filesWorkspace_chat: "Obrolan",
    gitSyncConnection_currentlyUsedIn: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Saat ini digunakan di <strong>", ["countNumber"], " proyek</strong>"],
            "countPlural=other": ["Saat ini digunakan di <strong>", ["countNumber"], " proyek</strong>"]
        },
        f: "gitSyncConnection_currentlyUsedIn"
    },
    googleAdsGoalCategory_addToCart: "Tindakan menambahkan ke keranjang",
    googleAdsGoalCategory_beginCheckout: "Checkout dimulai",
    googleAdsGoalCategory_contact: "Kontak",
    googleAdsGoalCategory_purchase: "Pembelian",
    guidesPage_post_scrollLeft: "Geser ke kiri",
    guidesPage_post_scrollRight: "Geser ke kanan",
    healthCheckBrief_skip: "Lewati",
    healthCheckBrief_tryToFix: "Coba perbaiki",
    imageCropper_apply: "Terapkan",
    imageCropper_cancel: "Batal",
    imageCropper_defaultTitle: "Edit gambar",
    imageCropper_loadErrorDescription: "Gambar tidak dapat dimuat. Silakan coba pilih file lain.",
    imageCropper_loadErrorTitle: "Gagal memuat gambar",
    imageCropper_moveImage: "Pindahkan gambar",
    imageCropper_zoom: "Zoom",
    interjections_sendFailed: "Tidak dapat mengirim",
    interjections_sendFailedRetry: "Coba lagi",
    inviteEmailInput_alreadyAdded: "Sudah ditambahkan",
    inviteEmailInput_groupMembers: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Grup · ", ["countNumber"], " orang"],
            "countPlural=other": ["Grup · ", ["countNumber"], " orang"]
        },
        f: "inviteEmailInput_groupMembers"
    },
    inviteEmailInput_invited: "Diundang",
    inviteEmailInput_loadingMembers: "Memuat anggota...",
    marketing_logosCloud_label: "Dipercaya oleh tim di perusahaan terkemuka",
    maxCommandBuilder_description: "Lovable akan bekerja sampai tujuan Anda benar-benar tercapai.",
    maxCommand_description: "Minta agar permintaan ini dijalankan sampai tujuan Anda tercapai.",
    maxCommand_label: "Goal",
    maxCommand_pillLabel: "Goal",
    maxCommand_pillTooltip: "Meminta sesi Goal untuk pesan ini.",
    mentionPill_loadingProject: "Memuat proyek…",
    mentionPill_messageIn: ["Pesan di ", ["name"]],
    mentionPill_openMessageIn: ["Buka pesan di ", ["name"]],
    mfaSetup_continueInBrowser: "Penyiapan autentikasi dua faktor telah dibuka di browser Anda. Selesaikan prosesnya di sana, lalu kembali ke aplikasi desktop.",
    mobileNavigation_openProjectView: "Buka tampilan proyek",
    motionTutorialPage_appHeadline: "Unduh aplikasinya dan mulai membangun hari ini secara gratis",
    motionTutorialPage_appSubheadline: "Ide Anda tidak menunggu sampai Anda duduk di meja kerja. Unduh aplikasinya dan wujudkan ide Anda di mana saja.",
    motionTutorialPage_freeHeadline: "Ubah ide Anda menjadi aplikasi yang berfungsi hari ini",
    motionTutorialPage_freeSubheadline: "Anda punya bakatnya. Sekarang Anda punya kekuatannya. Berhenti bertanya-tanya seberapa jauh Anda bisa melangkah, dan mulailah mewujudkannya dengan Lovable.",
    motionTutorialPage_hero_getStarted: "Mulai gratis",
    motionTutorialPage_hero_trustLabel: "Dipercaya oleh jutaan pengguna",
    newCreditsProgress_creditsExpireOn: [
        ["credits"], " kredit kedaluwarsa pada ", ["date"]
    ],
    newCreditsProgress_dailyResetOnUsedFirst: ["Kredit harian direset pada ", ["date"], " dan digunakan lebih dulu"],
    newCreditsProgress_dailyResetUsedFirst: "Kredit harian direset pada tengah malam UTC dan digunakan lebih dulu",
    onlyChatsLibrary_back: "Kembali ke Pustaka",
    onlyChatsLibrary_title: "Pustaka",
    pagination_label: "Paginasi",
    pastedText_kindMarkdown: "Markdown",
    planCommandBuilder_description: "Lovable membuat rencana untuk Anda tinjau sebelum membangun.",
    planCommand_label: "Rencana",
    planCommand_pillLabel: "Plan",
    planCommand_pillTooltip: "Merencanakan pesan ini sebelum membangun.",
    planModeToggle_mode: "Mode",
    plusMenu_noDesignSystemsFound: "Tidak ditemukan sistem desain",
    projectDetails_descriptionLabel: "Deskripsi",
    projectDetails_ownerLabel: "Pemilik",
    projectDetails_unknown: "Tidak diketahui",
    projectMonitoringDialog_activationErrorDescription: ["Terjadi masalah saat mengaktifkan pemantauan untuk ", ["projectName"], ". Silakan coba lagi."],
    projectMonitoringDialog_activationErrorTitle: "Tidak bisa mengaktifkan pemantauan",
    projectMonitoringDialog_defaultProjectName: "proyek ini",
    projectMoveToFolder_createNewFolder: "Buat folder baru",
    projectMoveToFolder_noFolder: "Tanpa folder",
    projectMoveToFolder_noFoldersFound: "Folder tidak ditemukan",
    projectMoveToFolder_saveChanges: "Simpan perubahan",
    projectMoveToFolder_searchAriaLabel: "Cari folder",
    projectMoveToFolder_searchPlaceholder: "Cari folder...",
    projectMoveToFolder_title: "Pindahkan ke folder",
    projectRestore_openAction: "Buka proyek",
    projectRestore_successDescription: "Proyek Anda kembali berada di ruang kerja Anda.",
    projectRestore_successTitle: "Proyek dipulihkan",
    projectsTabs_sharedWithMe: "Dibagikan kepada saya",
    routePreview_accessDeniedTitle: "Tidak dapat memverifikasi akses Anda",
    routePreview_help: "Lihat tampilan halaman ini saat dibagikan dan di hasil pencarian.",
    selectedElement_lineLocation: ["Baris ", ["line"], " di ", ["file"]],
    settingsSidebar_item_actionCenter: "Pusat tindakan",
    settingsSidebar_item_cloudServices: "Layanan",
    shared_fileDropOverlay_body: "Letakkan file di sini untuk menyertakannya dalam pesan Anda berikutnya",
    shared_fileDropOverlay_heading: "Tambahkan file ke pesan Anda",
    shared_fileDropOverlay_tooManyFilesBody: ["Lepaskan maksimal ", ["max"], " berkas per pesan"],
    shared_fileDropOverlay_tooManyFilesHeading: "Terlalu banyak file",
    shared_loadingQrCode: "Memuat kode QR",
    shared_search: "Cari",
    shopifyMenu_claimStore: "Klaim toko",
    solutionsPage_hero_cta: "Mulai sekarang",
    solutionsPage_hero_subtitle: "Lovable memungkinkan Anda mengubah ide menjadi aplikasi atau situs web yang nyata dan berfungsi tanpa menulis kode.",
    solutionsPage_hero_title: "Solusi tanpa kode untuk membangun aplikasi, situs web, dan produk",
    tablePagination_itemsPerPage: "Item per halaman",
    tablePagination_nextPage: "Halaman berikutnya",
    tablePagination_ofPages: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["dari ", ["countNumber"], " halaman"],
            "countPlural=other": ["dari ", ["countNumber"], " halaman"]
        },
        f: "tablePagination_ofPages"
    },
    tablePagination_page: ["Halaman ", ["page"]],
    tablePagination_pageSelectLabel: "Halaman",
    tablePagination_previousPage: "Halaman sebelumnya",
    tablePagination_visibleRange: {
        d: [
            ["totalPlural", "total", "plural"],
            ["totalNumber", "total", "number"],
            ["startNumber", "start", "number"],
            ["endNumber", "end", "number"]
        ],
        s: ["totalPlural"],
        m: {
            "totalPlural=one": [
                ["startNumber"], " - ", ["endNumber"], " dari ", ["totalNumber"], " item"
            ],
            "totalPlural=other": [
                ["startNumber"], " - ", ["endNumber"], " dari ", ["totalNumber"], " item"
            ]
        },
        f: "tablePagination_visibleRange"
    },
    ticker_pause: "Jeda animasi",
    ticker_play: "Putar animasi",
    tipCard_tip: "Tips",
    videosPage_index_subtitle: "Jelajahi pustaka video kami yang berisi tutorial, demonstrasi produk, kisah sukses pengguna, dan banyak lagi. Pelajari cara membangun aplikasi luar biasa dengan Lovable.",
    videosPage_index_title: "Video Lovable",
    videosPage_tag_subtitle: ["Jelajahi video ", ["tag"], " kami, termasuk tutorial, demonstrasi produk, kisah sukses pengguna, dan banyak lagi."],
    videosPage_tag_title: ["Video ", ["tag"]],
    workspaceChatVoice_busy: "Percakapan suara sedang berlangsung. Akhiri dulu sebelum memulai yang baru.",
    workspaceChatVoice_end: "Akhiri percakapan suara",
    workspaceChatVoice_endDictationFirst: "Akhiri dikte untuk memulai percakapan suara.",
    workspaceChatVoice_micDenied: "Akses mikrofon diperlukan untuk percakapan suara. Aktifkan di pengaturan perangkat Anda.",
    workspaceChatVoice_mute: "Bisukan mikrofon",
    workspaceChatVoice_start: "Mulai percakapan suara",
    adsChangesetTerm_about: ["Tentang ", ["term"]],
    adsChangesetTerm_cpaDescription: "Biaya rata-rata untuk satu konversi.",
    adsChangesetTerm_cpaTitle: "Biaya per tindakan",
    adsChangesetTerm_cpcDescription: "Yang Anda bayar untuk satu klik iklan.",
    adsChangesetTerm_cpcTitle: "Biaya per klik",
    adsChangesetTerm_roasDescription: "Nilai konversi dibandingkan dengan belanja iklan.",
    adsChangesetTerm_roasTitle: "Imbal hasil belanja iklan",
    datePicker_dateRange: "Rentang tanggal",
    chatNudge_tryChatMode_description: "Bertanya dan bereksplorasi tanpa mengubah kode Anda. Gratis selama masih dalam kuota obrolan harian Anda.",
    chatNudge_tryChatMode_title: "Mode Chat telah hadir",
    chatNudge_tryChatMode_tryIt: "Coba sekarang",
    editorNav_settingsMovedCoachmark_description: "Konektor, penggunaan pribadi, proyek, dan dasbor kini ada di bilah sisi. Buka menu di sini untuk menemukannya. Akses cepat ke penggunaan pribadi dan kredit paket ada di pengalih ruang kerja.",
    editorNav_settingsMovedCoachmark_descriptionEnterprise: "Konektor, proyek, dan dasbor kini ada di bilah sisi. Buka menu di sini untuk menemukannya.",
    editorNav_settingsMovedCoachmark_dismiss: "Tutup tips perpindahan menu proyek",
    editorNav_settingsMovedCoachmark_gotIt: "Mengerti",
    editorNav_settingsMovedCoachmark_title: "Menu proyek Anda telah dipindahkan",
    sharePreview_coachmarkDescription: "Dapatkan komentar tentang pratinjau hasil buatan Anda sebelum dirilis. Tidak perlu akun Lovable untuk berkomentar.",
    sharePreview_coachmarkDismiss: "Tutup kiat berbagi pratinjau",
    sharePreview_coachmarkTitle: "Dapatkan masukan dari siapa saja",
    sharePreview_coachmarkTryIt: "Coba",
    createWorkspaceDialog_createdToast: "Ruang kerja berhasil dibuat",
    createWorkspaceDialog_creating: "Membuat ruang kerja...",
    createWorkspaceDialog_nameLabel: "Nama ruang kerja",
    createWorkspaceDialog_namePlaceholder: "Masukkan nama ruang kerja",
    createWorkspaceDialog_paymentsUnavailable: "Kunjungi lovable.dev untuk membuat ruang kerja dengan paket berbayar.",
    createWorkspaceDialog_planDescription: "Pilih paket untuk ruang kerja baru Anda.",
    createWorkspaceDialog_planTitle: "Pilih Paket",
    dashboard_continueToPlan: "Lanjut ke pemilihan paket",
    dashboard_createWorkspace: "Buat ruang kerja",
    dashboard_goBack: "Kembali",
    canvasViewContext_openCanvas: "Buka kanvas",
    editorNav_canvasFitAll: "Paskan semua",
    editorNav_canvasZoomIn: "Perbesar",
    editorNav_canvasZoomOut: "Perkecil",
    inlineCanvas_reloadPage: "Muat ulang halaman",
    inlineCanvas_reloadRequired: "Kanvas ini memerlukan versi yang lebih baru. Muat ulang halaman untuk melanjutkan.",
    inlineCanvas_unavailable: "Kanvas gagal dimuat.",
    agentExecutionError_description: "Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi.",
    agentExecutionError_retry: "Coba lagi",
    agentExecutionError_title: "Terjadi kesalahan internal",
    analytics_ask_questionLeadIn: ["Saya punya pertanyaan tentang ", ["data"], ":"],
    attachedFile_failedToLoad: ["Gagal memuat ", ["fileName"]],
    branchDiff_loading: "Memuat perubahan cabang",
    branchDiff_noChanges: "Tidak ada perubahan antara cabang ini dan basisnya",
    branchDiff_truncated: "Perbandingan dipangkas — menampilkan sebagian daftar berkas yang berubah",
    chatConnectorSuggestionRow_connect: "Hubungkan",
    chatConnectorSuggestionRow_connected: "Terhubung",
    chatConnectorSuggestionRow_connectedDraft: [
        ["connectors"], " terhubung."
    ],
    chatConnectorSuggestionRow_connecting: "Menghubungkan…",
    chatConnectorSuggestionRow_turnedOff: "Dinonaktifkan di ruang kerja ini. Minta admin untuk mengaktifkannya.",
    chatDomainSuggestion_title: "Dapatkan domain Anda sendiri",
    chatInput_fileTooLargeDescription: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["File terlalu besar. Ukuran maksimal ", ["limit"], "."],
            "countPlural=other": ["File terlalu besar. Ukuran maksimal ", ["limit"], "."]
        },
        f: "chatInput_fileTooLargeDescription"
    },
    chatInput_fileTooLargeTitle: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": "File terlalu besar",
            "countPlural=other": "File terlalu besar"
        },
        f: "chatInput_fileTooLargeTitle"
    },
    chatInput_imageEmptyManyDescription: "Gambar berikut tidak memiliki konten. Simpan semuanya ke perangkat Anda lalu tambahkan lagi.",
    chatInput_imageEmptyNamedDescription: [
        ["name"], " tidak memiliki konten. Simpan ke perangkat Anda lalu tambahkan lagi."
    ],
    chatInput_imageEmptyTitle: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": "Gambar kosong",
            "countPlural=other": "Gambar kosong"
        },
        f: "chatInput_imageEmptyTitle"
    },
    chatInput_imageEmptyUnnamed: "Gambar ini",
    chatPanel_connectionDegraded_description: "Mengalami masalah saat menghubungkan ke Lovable. Kami akan terus mencoba lagi.",
    chatPanel_connectionDegraded_descriptionTerminal: "Muat ulang halaman untuk menghubungkan kembali.",
    chatPanel_connectionDegraded_title: "Tidak dapat memuat proyek ini",
    chatSeoSuggestion_title: "Agar ditemukan di Google",
    chatStatus_working: "Lovable sedang bekerja…",
    commentFeedback_commentThread: "Utas komentar",
    commentFeedback_details: "Detail",
    commentFeedback_hideDetails: "Sembunyikan detail",
    commentFeedback_pageComments: "Komentar halaman",
    currentViewContext_annotation: "Anotasi",
    designAssetCard_figmaFileCount: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Figma · ", ["countNumber"], " berkas"],
            "countPlural=other": ["Figma · ", ["countNumber"], " berkas"]
        },
        f: "designAssetCard_figmaFileCount"
    },
    designAssetCard_fileCount: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " berkas"
            ],
            "countPlural=other": [
                ["countNumber"], " berkas"
            ]
        },
        f: "designAssetCard_fileCount"
    },
    designAssetCard_removeAsset: ["Hapus ", ["name"]],
    designAssetCard_removeDesign: "Hapus desain",
    designAssetCard_unavailable: "Desain tidak lagi tersedia",
    designAssetFilesDialog_backToFiles: "Kembali ke berkas",
    designAssetFilesDialog_description: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " berkas dalam ekspor ini"
            ],
            "countPlural=other": [
                ["countNumber"], " berkas dalam ekspor ini"
            ]
        },
        f: "designAssetFilesDialog_description"
    },
    designAssetsSubMenu_deleteAsset: ["Hapus ", ["name"]],
    designAssetsSubMenu_deleteConfirm: ['Hapus "', ["name"], '" dari desain Figma? Ini tidak akan menghapusnya dari Figma.'],
    designAssetsSubMenu_deleteError: "Gagal menghapus desain Figma",
    designAssetsSubMenu_deleteSuccess: "Desain Figma dihapus",
    designAssetsSubMenu_figmaDesigns: "Desain Figma",
    designAssetsSubMenu_fileCount: {
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
        f: "designAssetsSubMenu_fileCount"
    },
    docReviewChips_openTooltip: "Tampilkan di dokumen",
    editMessageCard_busyHint: "Tidak dapat mengembalikan saat operasi sedang berlangsung (misalnya, permintaan chat)",
    editMessageCard_busyToastTitle: "Tidak dapat mengembalikan saat ada operasi yang sedang berjalan",
    editMessageCard_cancel: "Batal",
    editMessageCard_description: "Pesan Anda akan diperbarui, dan percakapan dilanjutkan dari sini. Perubahan setelah titik ini tetap ada di obrolan dan dapat diterapkan kembali kapan saja.",
    editMessageCard_reverting: "Mengembalikan...",
    editMessageCard_submit: "Kembalikan dan kirim ulang",
    editMessageCard_title: "Kembalikan dan kirim ulang pesan?",
    editorNav_viewName_mobileApp: "Aplikasi seluler",
    editorNav_viewName_tabletApp: "Aplikasi tablet",
    fixErrorBadge_errorHeading: ["Kesalahan ", ["number"]],
    fixErrorBadge_fixBuildErrorsPlural: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": "Perbaiki kesalahan build",
            "countPlural=other": "Perbaiki kesalahan build"
        },
        f: "fixErrorBadge_fixBuildErrorsPlural"
    },
    fixErrorBadge_fixErrorsPlural: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": "Perbaiki kesalahan",
            "countPlural=other": "Perbaiki kesalahan"
        },
        f: "fixErrorBadge_fixErrorsPlural"
    },
    fixErrorBadge_showLess: "Tampilkan lebih sedikit",
    fixErrorBadge_showMore: "Tampilkan lebih banyak",
    fixableError_fixBuildFree: "Perbaiki build (gratis)",
    fixableError_fixDisabledNotLatest: "Permintaan perbaikan hanya dapat dikirim dari pesan terbaru. Galat kompilasi ini masih berlaku, jadi Lovable akan melihatnya pada putaran kerja berikutnya di proyek ini dan mencoba memperbaikinya.",
    fixableError_fixDisabledSending: "Lovable sedang mengirim pesan. Jika galat kompilasi ini masih berlaku, Lovable akan melihatnya dalam putaran kerja tersebut dan mencoba memperbaikinya.",
    fixableError_fixDisabledSuperseded: "Kompilasi yang lebih baru telah menggantikan kompilasi ini. Galat ini tidak akan diperbaiki secara otomatis — periksa kompilasi terbaru untuk mengetahui status proyek saat ini.",
    fixableError_fixErrorDisabledSending: "Lovable sedang mengirim pesan saat ini. Anda dapat mengirim perbaikan setelah selesai.",
    healthCheckBriefPill_label: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " masalah"
            ],
            "countPlural=other": [
                ["countNumber"], " masalah"
            ]
        },
        f: "healthCheckBriefPill_label"
    },
    healthCheckBriefPill_tooltip: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": "Anda dapat bertanya tentang masalah ini",
            "countPlural=other": "Anda dapat bertanya tentang masalah ini"
        },
        f: "healthCheckBriefPill_tooltip"
    },
    imageEditChip_background: "Hapus latar belakang",
    imageEditChip_comment: "Komentar yang disematkan",
    imageEditChip_edit: "Sunting area yang ditandai",
    imageEditChip_erase: "Hapus area yang ditandai",
    maxSlashCommandAgentRunning_body: "Tujuan tidak dapat ditetapkan saat agen sedang bekerja — pesan ini akan dikirim sebagai pesan biasa.",
    planModeToggle_feelingStuck: "Merasa buntu?",
    planModeToggle_gotIt: "Mengerti",
    planModeToggle_stuckPopoverDescription: "Gunakan mode perencanaan untuk membuat rencana sebelum mulai membangun.",
    planModeToggle_toggleWith: "Ganti mode dengan <kbd>alt P</kbd>",
    planUpdateChip_label: "Rencana diperbarui",
    planUpdateChip_tooltip: "Pesan ini menyertakan perubahan rencana yang Anda simpan",
    projectChangesSection_collapse: ["Ciutkan ", ["label"]],
    projectChangesSection_expand: ["Perluas ", ["label"]],
    pushOptIn_reaskCard_title: "Dapatkan notifikasi saat aplikasi Anda selesai dibangun",
    pushOptIn_reaskCard_titleDenied: "Notifikasi untuk Lovable nonaktif",
    pushOptIn_reaskCard_turnOn: "Aktifkan",
    pushOptIn_tipsCard_allow: "Izinkan",
    pushOptIn_tipsCard_description: "Tips singkat tentang fitur yang mungkin Anda lewatkan",
    pushOptIn_tipsCard_title: "Manfaatkan Lovable lebih maksimal",
    seoFixBadge_fixAll: "Coba perbaiki semua masalah SEO",
    seoFixBadge_fixIssue: "Coba perbaiki masalah SEO",
    seoFixBadge_fixIssueNamed: ["Coba perbaiki masalah SEO: ", ["name"]],
    seoFixBadge_showLess: "Tampilkan lebih sedikit",
    seoFixBadge_showMore: "Tampilkan lebih banyak",
    seoReview_opportunityWorkOnThis: "Kerjakan ini",
    stopChatButton_stopGenerating: "Hentikan pembuatan",
    subAgentRow_startingUpTooltip: "Sedang memulai — detail akan segera tersedia",
    supabaseReauthDialog_button_reauthenticate: "Autentikasi ulang dengan Supabase",
    supabaseReauthDialog_description: "Agar integrasi Supabase lebih andal, Lovable kini dapat membaca log proyek Anda. Silakan autentikasi ulang dengan Supabase untuk melanjutkan.",
    supabaseReauthDialog_title: "Ada pembaruan untuk Anda!",
    tipCard_line: ["Tips: <title>", ["title"], ".</title> ", ["description"]],
    tipCard_lineEndsInTitle: ["Tips: <title>", ["title"], "</title> ", ["description"]],
    tipCard_pause: "Jeda tips",
    tipCard_resume: "Lanjutkan tips",
    tools_plan_alreadyOpen: "Rencana ini sudah terbuka.",
    tools_plan_approvedStatus: "Rencana disetujui",
    tools_plan_openProjectToReview: "Buka proyek untuk meninjau rencana ini.",
    tools_plan_previewUnavailableOpen: "Pratinjau rencana tidak tersedia. Buka rencana untuk meninjaunya.",
    tools_plan_skippedStatus: "Rencana dilewati",
    usage_breakdown_costOptimizationDescription: "Lovable dapat membantu Anda mengurangi penggunaan Run di seluruh ruang kerja Anda",
    usage_breakdown_costOptimizationPrompt: "Analisis biaya operasional di semua proyek dalam ruang kerja ini dan bantu saya mengurangi penggunaan kredit Run yang tidak perlu.",
    visualEdits_creditBalanceLoadFailed: "Tidak dapat memuat saldo kredit edit visual",
    builderChrome_queue_failedToQueue: "Gagal mengantrekan pesan",
    builderChrome_unknownError: "Kesalahan tidak diketahui",
    dismissApiKey_description: "Kami mendeteksi kunci API dalam pesan Anda. Demi keamanan, minta Lovable untuk mengelola rahasia Anda alih-alih menyertakannya secara langsung.",
    dismissApiKey_gotIt: "Mengerti",
    dismissApiKey_learnMore: "Pelajari selengkapnya",
    dismissApiKey_sendAnyway: "Tetap kirim",
    dismissApiKey_title: "Yakin ingin mengirim pesan ini?",
    fix_error_send_failed: "Permintaan perbaikan tidak dapat dikirim. Silakan coba lagi.",
    interjections_sendNowFailed: "Pesan tidak dapat dikirim sekarang. Pesan tetap berada dalam antrean.",
    clipboard_copyNameserver: "Salin server nama",
    clipboard_copyRecordName: "Salin nama rekaman",
    cloud_usage_costOptimizationError: "Tidak dapat memulai pengoptimalan biaya. Silakan coba lagi.",
    cloud_usage_costOptimizationPrompt: "Analisis biaya operasional proyek ini dan bantu saya mengurangi penggunaan kredit yang tidak perlu.",
    engineEmailDomainDetail_attention_conflict: "Domain ini sudah dikelola oleh akun lain. Silakan gunakan domain yang berbeda.",
    engineEmailDomainDetail_attention_retrying: "Pemeriksaan penyiapan menemukan masalah. Kami terus mencoba lagi secara otomatis.",
    storageBucket_goToSelectionActions: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Lompat ke tindakan untuk ", ["countNumber"], " item yang dipilih"],
            "countPlural=other": ["Lompat ke tindakan untuk ", ["countNumber"], " item yang dipilih"]
        },
        f: "storageBucket_goToSelectionActions"
    },
    storageBucket_itemsSelected: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " item dipilih"
            ],
            "countPlural=other": [
                ["countNumber"], " item dipilih"
            ]
        },
        f: "storageBucket_itemsSelected"
    },
    storageBucket_selectedCount: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " dipilih"
            ],
            "countPlural=other": [
                ["countNumber"], " dipilih"
            ]
        },
        f: "storageBucket_selectedCount"
    },
    storageBucket_uploadFilesAriaLabel: "Unggah berkas",
    tablePagination_firstPage: "Halaman pertama",
    tablePagination_lastPage: "Halaman terakhir",
    tableRecordsView_error_description: "Terjadi kesalahan. Silakan coba lagi.",
    tableRecordsView_error_title: "Gagal memuat data tabel",
    tableRecordsView_error_tryAgain: "Coba lagi",
    editor_fileTree_open: "Buka",
    editor_fileTree_referenceInChat: "Sebutkan di chat",
    shared_projectSearchHint: ["Ketik minimal ", ["count"], " karakter untuk mencari proyek"],
    agentPermissions_primaryDisabledHint: "Ubah izin utama dari “Jangan pernah izinkan” agar dapat mengelola izin individual.",
    cloudRegionSetting_lockedDescription_admin: "Mengikuti wilayah penyimpanan data bawaan ruang kerja Anda. <settingsLink>Ubah di Privasi & keamanan</settingsLink>.",
    cloudRegionSetting_lockedDescription_member: "Admin ruang kerja Anda menetapkan wilayah ini untuk proyek baru. Minta admin untuk mengubahnya.",
    cloudRegionSetting_lockedDescription_orgManaged: "Organisasi Anda mengelola wilayah ini. Minta admin organisasi untuk mengubahnya.",
    cloudRegionSetting_lockedHint_admin: "Mengikuti wilayah penyimpanan data bawaan ruang kerja Anda. Ubah di Privasi & keamanan.",
    cloudRegionSetting_title: "Tempat data proyek disimpan",
    cloudRegionSetting_unlockedAdminHint: "Untuk mewajibkan satu wilayah bagi semua orang, tetapkan di <settingsLink>Privasi & keamanan</settingsLink>.",
    cloudRegionSetting_unlockedDescription: "Pilih wilayah bawaan tempat data proyek baru disimpan.",
    connectorFooter_createdByLabel: "Dibuat oleh",
    connectorFooter_customUrlLabel: "URL kustom",
    connectorFooter_detailsTitle: "Detail",
    connectorFooter_parentRegistryLabel: "Registri induk",
    connectorFooter_termsLabel: "Ketentuan",
    connectorsSeamlessCta_byocHint: "Backend proyek ini berjalan di cloud organisasi Anda, sehingga proyek Supabase eksternal tidak dapat dihubungkan.",
    connectorsSeamlessCta_checkingHint: "Memeriksa koneksi Supabase proyek ini…",
    connectorsSeamlessCta_connectedHint: "Proyek ini sudah terhubung ke proyek Supabase.",
    connectorsSeamlessCta_disabledHint: "Konektor ini dinonaktifkan untuk workspace ini.",
    connectorsSeamlessCta_lovableCloudHint: "Proyek ini berjalan di Lovable Cloud, jadi proyek Supabase eksternal tidak dapat dihubungkan.",
    connectorsSeamlessCta_restrictedHint: "Hanya editor proyek yang dapat menghubungkan Supabase ke proyek ini.",
    connectorsSeamlessCta_unknownHint: "Tidak dapat memeriksa koneksi Supabase proyek ini. Muat ulang untuk mencoba lagi.",
    supabaseConnectDialog_loadingOrganizations: "Memuat organisasi Supabase",
    supabaseConnectDialog_organizationsError: "Tidak dapat memuat organisasi Supabase Anda.",
    supabaseConnectDialog_tryAgain: "Coba lagi",
    userDefinedConnectorForm_agentKnowledgeGuidance: "Opsional. Ajari Lovable cara menggunakan API ini saat membangun aplikasi. Sertakan jalur endpoint relatif, contoh permintaan dan respons, serta detail khusus API. Jangan pernah menyertakan kredensial atau header autentikasi. <knowledgeGuideLink>Pelajari cara menulis file pengetahuan konektor</knowledgeGuideLink>.",
    chatNudge_aiPromptChatFirst_action: "Mulai dengan Obrolan",
    chatNudge_aiPromptChatFirst_description: "Sempurnakan dengan Lovable sebelum membangun, tanpa menghabiskan kredit.",
    chatNudge_aiPromptChatFirst_title: "Instruksi terperinci? Mulai dengan obrolan gratis",
    signInForFilesModal_cancel: "Batal",
    signInForFilesModal_description: "Mendukung hingga 10 file dengan tipe apa pun",
    signInForFilesModal_signIn: "Masuk",
    signInForFilesModal_title: "Masuk untuk mengunggah file",
    createFolderDialog_accessSharingFailed: "Folder berhasil dibuat, tetapi beberapa orang atau grup tidak dapat ditambahkan. Anda dapat menambahkannya dari pengaturan akses folder.",
    createFolderDialog_addPeopleOrGroups: "Tambahkan orang atau grup",
    editFolderDialog_accessInfoLabel: "Cara kerja visibilitas folder",
    editFolderDialog_accessInfoTooltip: "Semua proyek dan subfolder mewarisi visibilitas dari folder induk",
    folderAccess_adminDescription: "Akses penuh ke folder dan proyek",
    folderAccess_ownerDescription: "Kontrol kepemilikan penuh",
    folderAccess_ownerDisabledForViewer: "Pemilik dinonaktifkan karena pengguna ini memiliki akses lihat.",
    folderAccess_readDescription: "Lihat proyek di folder ini",
    folderAccess_writeDescription: "Edit proyek di folder ini",
    folderCollaboratorsDialog_accessInfoLabel: "Cara kerja akses folder",
    folderCollaboratorsDialog_accessInfoTooltip: "Tingkat akses folder memberikan akses yang sama ke proyek di dalamnya. Admin folder dapat menambahkan proyek dan orang ke folder.",
    folderCollaboratorsDialog_manageAccess: "Kelola akses",
    folderCollaboratorsDialog_memberCount: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " anggota"
            ],
            "countPlural=other": [
                ["countNumber"], " anggota"
            ]
        },
        f: "folderCollaboratorsDialog_memberCount"
    },
    gettingStarted_pickTemplate_explainer_dismiss: "Tutup",
    onboardMeHint_creditsNote: "Menggunakan kredit kamu, seperti prompt biasa.",
    onboardMeHint_cta: "Buat aplikasi contoh",
    onboardMeHint_dismiss: "Tutup petunjuk pengenalan",
    onboardMeHint_prompt: "Saya benar-benar baru di Lovable. Buatkan satu aplikasi contoh sederhana pilihanmu, dan sambil mengerjakannya, jelaskan apa yang sedang kamu lakukan serta bagaimana saya bisa mengeditnya, memublikasikannya, dan menjadikannya milik saya sendiri.",
    onboardMeHint_subtitle: "Lovable membuat aplikasi contoh sederhana dan menunjukkan cara mengeditnya, mempublikasikannya, dan menjadikannya milikmu.",
    onboardMeHint_title: "Belum tahu harus mulai dari mana?",
    workspaceProjects_noProjectsFound: "Tidak ada proyek yang ditemukan",
    createForm_templatesDialog_partialLoadError: "Beberapa proyek tidak dapat dimuat",
    createForm_unpublishedLibrary_contactAdmin: "Hubungi admin ruang kerja untuk membuat rilis awal.",
    createForm_unpublishedLibrary_createReleasePrompt: "<link>Buat rilis awal</link> agar tersedia.",
    designSystem_fileEditor_ariaLabel: "Isi file",
    loadingPanel_defaultDescription: "Mohon tunggu sementara kami menyiapkan semuanya untuk Anda",
    loadingPanel_defaultTitle: "Memuat...",
    docReviewComment_editLabel: "Sunting komentar",
    docReviewComment_notInDocument: "Teks yang diberi komentar ini sudah tidak ada lagi di dokumen.",
    docReviewComment_placeholder: "Tulis komentar...",
    docReviewComment_remove: "Hapus komentar",
    docReviewComment_save: "Simpan komentar",
    docSelectionPromptBox_commentTrigger: "Komentari",
    threadContextPill_mainDraftWorking: ["Sedang mengerjakan draf ", ["name"], "…"],
    threadContextPill_tooltip: "Beralih draf",
    threadContextPill_unreadChanges: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " draf memiliki perubahan baru"
            ],
            "countPlural=other": [
                ["countNumber"], " draf memiliki perubahan baru"
            ]
        },
        f: "threadContextPill_unreadChanges"
    },
    editor_chatPanelLabel: "Obrolan",
    editor_previewPanelLabel: "Pratinjau",
    expoFullscreenMotionDialog_cancel: "Batal",
    expoFullscreenMotionDialog_confirm: "OK",
    expoFullscreenMotionDialog_description: "Layar penuh akan menyembunyikan semua kontrol — goyangkan ponsel Anda untuk keluar. Perangkat Anda akan meminta izin akses sensor gerakan agar goyangan dapat dideteksi.",
    expoFullscreenMotionDialog_title: "Masuk ke mode layar penuh?",
    mobileChatTopBar_previewUnavailable: "Pratinjau aplikasi Anda belum tersedia.",
    mobileToolsMoved_action: "Mengerti, tunjukkan tempatnya",
    mobileToolsMoved_buttonLabel: "Alat lainnya",
    mobileToolsMoved_description: "Bagikan, Terbitkan, Kode, Riwayat, dan lainnya kini ada di bawah nama proyek di bagian atas layar.",
    mobileToolsMoved_error: "Tidak dapat membuka menu proyek. Coba lagi.",
    mobileToolsMoved_title: "Alat sudah dipindahkan",
    projectDetails_close: "Tutup",
    projectDetails_createdLabel: "Dibuat",
    projectDetails_folderLabel: "Folder",
    projectDetails_modifiedLabel: "Diubah",
    projectDetails_nameLabel: "Nama",
    projectDetails_noDescription: "Belum ada deskripsi yang dihasilkan",
    projectDetails_title: "Detail proyek",
    settings_git_download: "Unduh",
    settings_git_downloadCodebaseDescription: "Dapatkan salinan sekali unduh dari kode sumber proyek ini sebagai berkas ZIP — tanpa perlu repositori.",
    settings_git_downloadCodebaseLabel: "Unduh basis kode",
    filesMarkdown_externalImage: ["Gambar dari ", ["host"]],
    filesMarkdown_imageUnavailable: "Gambar tidak tersedia",
    filesMarkdown_opensInNewTab: "(dibuka di tab baru)",
    filesMarkdown_showExternalImages: "Tampilkan gambar",
    filesMarkdown_truncated: "Dokumen ini panjang, jadi hanya bagian awalnya yang ditampilkan. Unduh untuk membaca selengkapnya.",
    buildChatShowcase_dismiss: "Tutup inspirasi",
    buildChatShowcase_title: "Jelajahi apa yang bisa Anda buat dengan Lovable",
    homeInspiration_loadingPreview: "Memuat pratinjau langsung…",
    homeInspiration_previewLabel: ["Pratinjau ", ["name"]],
    homeInspiration_previewUnavailable: "Tangkapan layar tidak tersedia",
    homeInspiration_viewFullWebsite: "Lihat situs web lengkap",
    appStore_projectCard_untitled: "Proyek",
    appStore_projectCard_viewProject: ["Lihat ", ["project"]],
    brandPage_hero_contact: "Kontak: Untuk pertanyaan media atau pers, silakan hubungi kami di <emailLink>press@lovable.dev</emailLink>.",
    brandPage_hero_downloadLogos: "Lovable Brand Hub",
    brandPage_hero_downloadPhotos: "Unduh foto pers",
    brandPage_hero_getInTouch: "Hubungi kami!",
    brandPage_hero_title: "Sumber Daya Pers dan Media Lovable",
    lovableStats_millionSuffix: "jt",
    lovableStats_stat1: "proyek yang dibuat dengan Lovable",
    lovableStats_stat2: "proyek baru yang dibuat per minggu dengan Lovable",
    lovableStats_stat3: "kunjungan per bulan ke proyek yang dibuat dengan Lovable",
    lovableStats_subtitle: "Jutaan kreator sudah mengubah ide menjadi kenyataan",
    lovableStats_title: "Lovable <gradient>dalam angka</gradient>",
    metaAppsPage_announcement_badge: "Baru",
    metaAppsPage_announcement_label: "SEO lebih baik – Aplikasi yang dibuat agar mudah ditemukan",
    metaAppsPage_costBox_subtitle: "Bandingkan biaya untuk membuat sebuah aplikasi.",
    metaAppsPage_hero_subtitle: "Mewujudkan ide Anda tidak pernah semudah ini",
    metaAppsPage_hero_title: "Buat aplikasi Anda sendiri dengan biaya yang jauh lebih murah",
    metaBrPage_hero_subtitle: "Masukkan kode REVSP-BR-084 saat pembayaran untuk mendapatkan diskon 50% untuk paket Pro 100 kredit.",
    metaBrPage_hero_title: "Ide besar Anda berikutnya bisa dimulai dengan biaya lebih murah dari yang Anda kira. Diskon 50%* untuk bulan pertama.",
    metaBrPage_terms: "Hanya tersedia untuk pelanggan Pro baru di Brasil. Diskon 50% berlaku untuk siklus penagihan pertama dari langganan paket Pro bulanan 100 kredit yang baru. Penawaran ini tidak berlaku jika digabungkan dengan diskon atau promosi lainnya. Harga standar berlaku mulai siklus penagihan kedua dan seterusnya. Penawaran berlaku hingga 30/6/2026 atau selama kuota promosi masih tersedia. Lovable berhak mengubah atau menarik penawaran ini kapan saja sesuai dengan hukum yang berlaku.",
    metaUsPage_hero_subtitle: "Masukkan kode RVUS-062610 saat pembayaran untuk mendapatkan diskon 50% untuk paket Pro 100 kredit",
    metaUsPage_hero_title: "Ide besar Anda berikutnya dimulai dengan biaya lebih rendah dari yang Anda kira. Diskon 50%* untuk bulan pertama.",
    metaUsPage_terms: "*Hanya tersedia untuk pelanggan Pro baru di AS. Diskon 50% berlaku untuk siklus penagihan pertama dari paket langganan Pro 100 kredit bulanan baru. Penawaran ini tidak berlaku jika digabungkan dengan diskon atau promosi lainnya. Harga standar berlaku mulai siklus penagihan kedua dan seterusnya. Penawaran berlaku hingga 30/6/2026 atau selama kuota promosi masih tersedia. Lovable berhak mengubah atau menarik penawaran ini kapan saja sesuai dengan hukum yang berlaku.",
    pagination_nextPage: "Halaman berikutnya",
    pagination_previousPage: "Halaman sebelumnya",
    projectPreviewDialog_iframeTitle: "Pratinjau proyek",
    projectPreviewDialog_titleWithAuthor: [
        ["project"], " <author>oleh ", ["author"], "</author>"
    ],
    projectPreviewDialog_untitled: "Proyek tanpa judul",
    projectPreviewDialog_viewProject: "Lihat proyek",
    reviewCard_ratingLabel: ["Dinilai ", ["rating"], " dari 5 bintang"],
    securityIssuesPage_description: "Kami menggunakan HackerOne untuk mengelola pelaporan kerentanan. Silakan laporkan masalah keamanan apa pun melalui <hackeroneLink>program HackerOne</hackeroneLink> kami, atau kirim email ke <emailLink>vulnerability-disclosure@lovable.dev</emailLink> untuk menerima petunjuk cara mengirimkan laporan Anda.",
    securityIssuesPage_routing: "Program ini ditujukan untuk kerentanan keamanan pada produk dan infrastruktur milik Lovable sendiri. Untuk melaporkan penyalahgunaan, konten berbahaya, atau aplikasi yang dibuat dengan Lovable yang melanggar kebijakan kami, kunjungi <abuseLink>lovable.dev/abuse</abuseLink>. Untuk bantuan akun, penagihan, atau produk, kunjungi <supportLink>lovable.dev/support</supportLink>.",
    securityIssuesPage_title: "Melaporkan masalah keamanan",
    visionPage_cta: "Bergabunglah dengan kami",
    visionPage_paragraph1: "Selama tiga dekade, perangkat lunak telah menjadi alat paling penting untuk mewujudkan ambisi dunia. Namun, kurang dari 1% orang di dunia memiliki keterampilan yang diperlukan untuk membuat perangkat lunak.",
    visionPage_paragraph2: "Jika kami berhasil, semua orang akan memiliki kemampuan yang sama seperti yang dimiliki seluruh tim pengembangan produk di perusahaan teknologi terkemuka saat ini. Kami percaya hal ini akan membuka era inovasi yang baru.",
    visionPage_paragraph3: "Kami mengurangi hambatan untuk menciptakan sesuatu dan berkomitmen pada tujuan ini: membebaskan kreativitas manusia dalam skala yang belum pernah terjadi sebelumnya.",
    visionPage_subtitle: "Membuka potensi kreativitas manusia — dengan memungkinkan siapa saja menciptakan perangkat lunak",
    visionPage_title: "Visi Kami",
    mobileApp_aiTerms_accept: "Terima & lanjutkan",
    mobileApp_aiTerms_body: "Untuk membangun dan memperbarui proyek Anda, Lovable mengirimkan prompt Anda secara aman ke penyedia AI pihak ketiga.",
    mobileApp_aiTerms_learnMore: "Pelajari selengkapnya di <privacyLink>Kebijakan Privasi</privacyLink> kami.",
    mobileApp_aiTerms_title: "Terima syarat dan ketentuan",
    editorNav_subview_appStore: "App Store",
    editorNav_subview_googlePlay: "Google Play",
    editorNav_subview_lovableAuth: "Pengguna",
    editorNav_subview_measure: "Ukur",
    editorNav_hideHistory: "Sembunyikan riwayat",
    editorNav_historyUnavailableInPreview: "Tidak tersedia dalam mode pratinjau",
    editorNav_loadingLivePreview: "Memuat Pratinjau Langsung...",
    editorNav_showHistory: "Tampilkan riwayat",
    adsCampaign_collectionEmptyDescription: "Minta Lovable untuk menemukan atau membuat file untuk kampanye ini.",
    adsCampaign_collectionEmptyTitle: "Belum ada file terhubung",
    adsCampaign_collectionOpenHint: "Klik untuk membuka",
    adsMetricInfo_about: ["Tentang ", ["metric"]],
    adsMetricInfo_clicksExplanation: "Klik yang membawa seseorang dari iklan ke situs web atau halaman arahan Anda.",
    adsMetricInfo_conversionsExplanation: "Tindakan bernilai setelah klik iklan, seperti pendaftaran, formulir prospek, atau pembelian, sesuai dengan yang disetel untuk dihitung di kampanye Anda.",
    adsMetricInfo_impressionsExplanation: "Setiap kali iklan Anda muncul di layar dihitung sebagai satu impresi, bahkan jika orang yang sama melihatnya beberapa kali.",
    adsMetricInfo_spendExplanation: "Biaya yang ditagihkan platform iklan untuk menayangkan iklan Anda selama periode yang dipilih.",
    adsReporting_campaignCount: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " kampanye"
            ],
            "countPlural=other": [
                ["countNumber"], " kampanye"
            ]
        },
        f: "adsReporting_campaignCount"
    },
    adsReporting_partialConversionsNote: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Konversi tidak tersedia untuk ", ["count"], " kampanye. Total hanya mencakup kampanye dengan konversi yang tersedia."],
            "countPlural=other": ["Konversi tidak tersedia untuk ", ["count"], " kampanye. Total hanya mencakup kampanye dengan konversi yang tersedia."]
        },
        f: "adsReporting_partialConversionsNote"
    },
    adsReporting_partialMetricLabel: [
        ["metric"], " (parsial)"
    ],
    collectionIntegrations_conversionsBreakdown: [
        ["count"], " konversi, tampilkan rincian"
    ],
    payments_environmentLabel: "Lingkungan pembayaran",
    planActions_save: "Simpan",
    planVersionNav_nextVersion: "Lihat versi rencana berikutnya",
    planVersionNav_previousVersion: "Lihat versi rencana sebelumnya",
    editorNav_presence_now: "Sekarang",
    editorNav_presence_viewMoreViewers: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Lihat ", ["countNumber"], " penonton lainnya"],
            "countPlural=other": ["Lihat ", ["countNumber"], " penonton lainnya"]
        },
        f: "editorNav_presence_viewMoreViewers"
    },
    editorNav_presence_you: [
        ["name"], " (Anda)"
    ],
    editor_currentPageSwitchPages: [
        ["routeLabel"], " — halaman saat ini, ganti halaman"
    ],
    editor_openInNewTab: "Buka di tab baru",
    editor_toolbarOptions: "Opsi bilah alat",
    pageMenu_routePreviewInstruction: "<highlight>Arahkan kursor ke [icon]</highlight> pada sebuah halaman untuk melihat tampilannya di media sosial & hasil pencarian.",
    previewInteractionToolbar_hide: "Sembunyikan",
    previewInteractionToolbar_shortcuts: "Pintasan keyboard",
    previewInteractionToolbar_theme: "Tema",
    previewInteractionToolbar_themeAuto: "Otomatis",
    previewInteractionToolbar_themeDark: "Gelap",
    previewInteractionToolbar_themeLight: "Terang",
    previewInteractionToolbar_unreadCommentsAriaLabel: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " komentar belum dibaca"
            ],
            "countPlural=other": [
                ["countNumber"], " komentar belum dibaca"
            ]
        },
        f: "previewInteractionToolbar_unreadCommentsAriaLabel"
    },
    privacySensitiveData_markAllNotPiiConfirm: "Tandai semua sebagai bukan PII",
    privacySensitiveData_markAllNotPiiDescription: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["Semua ", ["countNumber"], " temuan yang masih terbuka di proyek ini akan ditandai sebagai bukan PII, termasuk temuan basis data yang tidak dapat diperbaiki di sini. Temuan tersebut tidak lagi dihitung dalam pemeriksaan publikasi. Anda dapat membuka kembali temuan mana pun dari barisnya setelah itu."],
            "countPlural=other": ["Semua ", ["countNumber"], " temuan yang masih terbuka di proyek ini akan ditandai sebagai bukan PII, termasuk temuan basis data yang tidak dapat diperbaiki di sini. Temuan tersebut tidak lagi dihitung dalam pemeriksaan publikasi. Anda dapat membuka kembali temuan mana pun dari barisnya setelah itu."]
        },
        f: "privacySensitiveData_markAllNotPiiDescription"
    },
    privacySensitiveData_markAllNotPiiTitle: "Tandai semua temuan sebagai bukan PII",
    privacySensitiveData_markedNotPiiToast: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " temuan ditandai sebagai bukan PII"
            ],
            "countPlural=other": [
                ["countNumber"], " temuan ditandai sebagai bukan PII"
            ]
        },
        f: "privacySensitiveData_markedNotPiiToast"
    },
    settings_approvals_requestLoadFailed: "Tidak dapat memuat permintaan ini. Coba lagi nanti.",
    pentestDomainPage_cta: "Pelajari keamanan Lovable",
    pentestDomainPage_description: "Domain ini digunakan oleh produk pentest agentik Lovable. Lalu lintas dan aktivitas akun yang terkait dengannya tidak berbahaya serta merupakan bagian dari pentest diotorisasi yang dimulai dari proyek Lovable.",
    pentestDomainPage_eyebrow: "Keamanan Lovable",
    pentestDomainPage_title: [
        ["domain"], " dioperasikan oleh Lovable"
    ],
    pentestDomainPage_whatYouMaySee_agents: ["Selama pentest, agen keamanan terisolasi dapat membuat atau menggunakan akun <account>", ["account"], "</account> untuk menguji autentikasi, izin, dan paparan data publik pada aplikasi yang diuji."],
    pentestDomainPage_whatYouMaySee_scope: "Aktivitas ini terbatas pada pentest yang dimulai melalui Lovable. Melihat domain ini di log aplikasi atau daftar pengguna Anda tidak berarti ada penyerang tak dikenal yang mengakses aplikasi Anda.",
    pentestDomainPage_whatYouMaySee_title: "Yang mungkin Anda lihat",
    security_scanCompletion_failedTitle: "Kami tidak dapat menyelesaikan pemindaian keamanan",
    security_scanCompletion_incompleteDescription: "Jalankan lagi untuk menyelesaikan pemeriksaan.",
    security_scanCompletion_runAgain: "Jalankan lagi",
    security_scanCompletion_unavailableDescription: "Tidak ada hasil pemindaian yang dapat ditampilkan.",
    security_scanCompletion_unavailableTitle: "Hasil pemindaian keamanan tidak tersedia",
    billingChatAllowance_infoDescription: "Jatah obrolan harian gratis Anda mencakup kredit yang digunakan untuk mengobrol. Jatah yang tidak terpakai tidak diakumulasikan.",
    billingChatAllowance_infoDescriptionAvailable: "Jatah obrolan harian gratis Anda mencakup kredit yang digunakan untuk mengobrol. Setelah habis, obrolan akan menggunakan kredit pembuatan Anda. Jatah yang tidak terpakai tidak diakumulasikan.",
    billingChatAllowance_infoLabel: "Info jatah obrolan harian gratis",
    billingChatAllowance_infoTitle: "Disetel ulang pada tengah malam UTC",
    billingChatAllowance_noteExhausted: "Habis untuk hari ini. Obrolan kini menggunakan kredit pembuatan Anda.",
    billingChatAllowance_noteExhaustedUnknown: "Habis untuk hari ini.",
    billingChatAllowance_noteOutOfCredits: "Habis untuk hari ini dan tidak ada kredit pembuatan tersisa.",
    domainsSettings_section_customDomains_description: "Hubungkan atau beli domain untuk proyek ini",
    freeMonthlyCreditsBanner_chooserDescription: ["Kredit akan direset pada ", ["date"], ". Tambah kredit atau upgrade untuk terus membangun."],
    freeMonthlyCreditsBanner_getMoreCredits: "Dapatkan lebih banyak kredit",
    hostingBillingCorrection_description: "Kesalahan dari pihak kami menyebabkan sebagian penggunaan hosting Cloud Anda tidak tertagih. Kami sudah memperbaikinya, jadi Anda mungkin melihat biaya hosting yang lebih tinggi ke depannya.",
    hostingBillingCorrection_noBackbilling: "Anda tidak akan dikenakan biaya untuk penggunaan sebelumnya yang belum tertagih.",
    pricingPlans_monthlyCreditsTooltipDynamic: [
        ["limit"], " kredit per bulan + ", ["daily"], " kredit harian yang diatur ulang setiap hari"
    ],
    pricingPlans_monthlyCreditsTooltipMonthlyOnly: [
        ["limit"], " kredit per bulan"
    ],
    pricingPlans_pro_monthlyCredits: [
        ["limit"], " kredit bulanan"
    ],
    transferOwnership_toastSuccessDescription: ["Kepemilikan dialihkan ke ", ["name"]],
    transferOwnership_toastSuccessTitle: "Kepemilikan dialihkan",
    workspaceInsights_chartTimeRange: "Rentang waktu grafik",
    workspaceInsights_contributorsLabel: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": "Orang",
            "countPlural=other": "Orang"
        },
        f: "workspaceInsights_contributorsLabel"
    },
    workspaceInsights_moreConnectors: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["+", ["countNumber"], " <srOnly>konektor</srOnly> lagi"],
            "countPlural=other": ["+", ["countNumber"], " <srOnly>konektor</srOnly> lagi"]
        },
        f: "workspaceInsights_moreConnectors"
    },
    workspaceRestore_notRestorableToast: "Ruang kerja ini tidak dapat dipulihkan lagi.",
    workspaceRestore_pendingDescription: "Ruang kerja akan segera muncul kembali di daftar ruang kerja Anda.",
    workspaceRestore_pendingTitle: "Pemulihan ruang kerja dimulai",
    workspaceRestore_successDescription: "Ruang kerja Anda telah kembali, beserta proyek dan anggotanya.",
    workspaceRestore_successTitle: "Ruang kerja dipulihkan",
    tipCard_count: [
        ["current"], " dari ", ["total"]
    ],
    tipCard_enlarge: "Perbesar",
    tipCard_next: "Tips berikutnya",
    tipCard_previous: "Tips sebelumnya",
    tipCard_shrink: "Perkecil",
    connectors_moreConnectionCount: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " koneksi lain tanpa akses"
            ],
            "countPlural=other": [
                ["countNumber"], " koneksi lain tanpa akses"
            ]
        },
        f: "connectors_moreConnectionCount"
    },
    connectors_quickConnectPrivate: "Koneksi baru Anda akan bersifat privat. Anda dapat membagikannya nanti di pengaturan koneksi.",
    connectors_quickConnectPrivateMcp: "Koneksi baru Anda akan bersifat privat.",
    connectors_quickConnectWorkspace: "Koneksi baru Anda akan tersedia untuk semua anggota ruang kerja.",
    roadmapProposal_planReadyTitle: "Rencana siap ditinjau",
    roadmapProposal_taskCount: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " tugas"
            ],
            "countPlural=other": [
                ["countNumber"], " tugas"
            ]
        },
        f: "roadmapProposal_taskCount"
    },
    seoReview_findingsReadyNotificationBody: "Tinjau temuan dan pilih apa yang ingin diperbaiki.",
    seoReview_findingsReadyNotificationTitle: "Tinjauan SEO siap",
    auth_workspaceInvite_invalidLink: "Tautan undangan tidak valid",
    auth_workspaceInvite_joined: ["Anda telah bergabung dengan ", ["workspace"], "!"],
    auth_workspaceInvite_joining: "Bergabung dengan ruang kerja..."
};
export {
    n as
    default
};
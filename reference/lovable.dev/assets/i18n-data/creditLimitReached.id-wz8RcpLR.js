try {
    (function() {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new a.Error().stack;
        e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "55341ecd-08c1-4ac9-99af-cc9fa04f7347", a._sentryDebugIdIdentifier = "sentry-dbid-55341ecd-08c1-4ac9-99af-cc9fa04f7347")
    })()
} catch {}
var i = {
    creditLimitReached_applicability_aiFeatures: "Fitur AI",
    creditLimitReached_applicability_buildMode: "Mode Build",
    creditLimitReached_applicability_cloud: "Lovable Cloud",
    creditLimitReached_applicability_planMode: "Mode Plan",
    creditLimitReached_applicability_visualEdits: "Edit visual",
    creditLimitReached_blocked_aiFeatures_canManage: "Fitur AI diblokir untuk proyek yang terkena batas ini. Naikkan atau nonaktifkan batas untuk melanjutkan.",
    creditLimitReached_blocked_aiFeatures_noPermission: "Fitur AI diblokir untuk proyek yang terkena batas ini. Minta pemilik ruang kerja atau admin untuk menaikkan atau menonaktifkan batas.",
    creditLimitReached_blocked_buildTime_canManage: "Proses pembuatan diblokir. Naikkan atau nonaktifkan batas untuk melanjutkan.",
    creditLimitReached_blocked_buildTime_noPermission: "Proses pembuatan diblokir. Minta pemilik ruang kerja atau admin untuk menaikkan atau menonaktifkan batas.",
    creditLimitReached_blocked_cloud_canManage: "Penggunaan Lovable Cloud diblokir untuk proyek yang terkena batas ini. Naikkan atau nonaktifkan batas untuk melanjutkan.",
    creditLimitReached_blocked_cloud_noPermission: "Penggunaan Lovable Cloud diblokir untuk proyek yang terkena batas ini. Minta pemilik ruang kerja atau admin untuk menaikkan atau menonaktifkan batas.",
    creditLimitReached_blocked_genericAccessToken_canManage: "Penggunaan melalui token akses ini diblokir. Naikkan atau nonaktifkan batas untuk melanjutkan.",
    creditLimitReached_blocked_genericAccessToken_noPermission: "Penggunaan melalui token akses ini diblokir. Minta pemilik ruang kerja atau admin untuk menaikkan atau menonaktifkan batas.",
    creditLimitReached_blocked_genericProject_canManage: "Pembuatan, penggunaan Run, Lovable Cloud, fitur AI, dan permintaan konektor bermeter diblokir untuk proyek ini. Naikkan atau nonaktifkan batasnya untuk melanjutkan.",
    creditLimitReached_blocked_genericProject_noPermission: "Pembuatan, penggunaan Run, Lovable Cloud, fitur AI, dan permintaan konektor bermeter diblokir untuk proyek ini. Minta pemilik atau admin ruang kerja untuk menaikkan atau menonaktifkan batasnya.",
    creditLimitReached_blocked_genericUser_canManage: "Proses pembuatan diblokir untuk Anda di ruang kerja ini. Naikkan atau nonaktifkan batas untuk melanjutkan.",
    creditLimitReached_blocked_genericUser_noPermission: "Proses pembuatan diblokir untuk Anda di ruang kerja ini. Minta pemilik ruang kerja atau admin untuk menaikkan atau menonaktifkan batas.",
    creditLimitReached_blocked_genericWorkspace_canManage: "Pembuatan, penggunaan Run, Lovable Cloud, fitur AI, dan permintaan konektor bermeter diblokir untuk ruang kerja ini. Naikkan atau nonaktifkan batasnya untuk melanjutkan.",
    creditLimitReached_blocked_genericWorkspace_noPermission: "Pembuatan, penggunaan Run, Lovable Cloud, fitur AI, dan permintaan konektor bermeter diblokir untuk ruang kerja ini. Minta pemilik atau admin ruang kerja untuk menaikkan atau menonaktifkan batasnya.",
    creditLimitReached_blocked_generic_canManage: "Penggunaan kredit diblokir. Naikkan atau nonaktifkan batas untuk melanjutkan.",
    creditLimitReached_blocked_generic_noPermission: "Penggunaan kredit diblokir. Minta pemilik ruang kerja atau admin untuk menaikkan atau menonaktifkan batas.",
    creditLimitReached_blocked_runTimeWithConnectors_canManage: "Penggunaan Run diblokir, termasuk fitur Lovable Cloud dan AI serta permintaan konektor bermeter untuk proyek yang sesuai. Naikkan atau nonaktifkan batasnya untuk melanjutkan.",
    creditLimitReached_blocked_runTimeWithConnectors_noPermission: "Penggunaan Run diblokir, termasuk fitur Lovable Cloud dan AI serta permintaan konektor bermeter untuk proyek yang sesuai. Minta pemilik atau admin ruang kerja untuk menaikkan atau menonaktifkan batasnya.",
    creditLimitReached_blocked_runTime_canManage: "Penggunaan Run diblokir, termasuk Lovable Cloud dan fitur AI untuk proyek yang terkena batas ini. Naikkan atau nonaktifkan batas untuk melanjutkan.",
    creditLimitReached_blocked_runTime_noPermission: "Penggunaan Run diblokir, termasuk Lovable Cloud dan fitur AI untuk proyek yang terkena batas ini. Minta pemilik ruang kerja atau admin untuk menaikkan atau menonaktifkan batas.",
    creditLimitReached_blocked_subject_canManage: ["Penggunaan ", ["subject"], " diblokir. Naikkan atau nonaktifkan batas untuk melanjutkan."],
    creditLimitReached_blocked_subject_noPermission: ["Penggunaan ", ["subject"], " diblokir. Minta pemilik ruang kerja atau admin untuk menaikkan atau menonaktifkan batas."],
    creditLimitReached_noPermission: "Minta pemilik atau admin ruang kerja untuk menaikkan atau menonaktifkan batas tersebut.",
    creditLimitReached_requestIncrease_alreadyPendingDescription: "Permintaan untuk menaikkan batas ini sudah menunggu peninjauan admin. Anda dapat melanjutkan setelah batas dinaikkan.",
    creditLimitReached_requestIncrease_alreadyPendingTitle: "Permintaan sudah diajukan",
    creditLimitReached_requestIncrease_amountLabel: "Batas baru (kredit)",
    creditLimitReached_requestIncrease_amountPlaceholder: "Masukkan batas baru dalam kredit",
    creditLimitReached_requestIncrease_back: "Kembali",
    creditLimitReached_requestIncrease_button: "Minta kenaikan",
    creditLimitReached_requestIncrease_currentLimit: ["Batas saat ini: ", ["amount"], " kredit"],
    creditLimitReached_requestIncrease_description: "Kirim permintaan kepada admin ruang kerja Anda untuk menaikkan batas ini.",
    creditLimitReached_requestIncrease_invalidAmount: ["Masukkan batas di atas ", ["amount"], " kredit"],
    creditLimitReached_requestIncrease_reasonLabel: "Alasan (opsional)",
    creditLimitReached_requestIncrease_reasonPlaceholder: "Beri tahu admin mengapa Anda membutuhkan batas yang lebih tinggi",
    creditLimitReached_requestIncrease_sentDescription: "Permintaan Anda telah dikirim untuk peninjauan admin. Anda dapat melanjutkan setelah batas dinaikkan.",
    creditLimitReached_requestIncrease_sentTitle: "Permintaan terkirim",
    creditLimitReached_requestIncrease_submit: "Kirim permintaan",
    creditLimitReached_requestIncrease_title: "Minta kenaikan batas",
    creditLimitReached_scopeDescription_manager_apiKey: "Token akses ini telah mencapai batas kreditnya.",
    creditLimitReached_scopeDescription_manager_project: "Proyek ini telah mencapai batas kreditnya.",
    creditLimitReached_scopeDescription_manager_user: "Anda telah mencapai batas kredit pribadi di ruang kerja ini. Anda dapat memperbarui batas kredit anggota melalui pengaturan.",
    creditLimitReached_scopeDescription_manager_workspace: "Ruang kerja ini telah mencapai batas kreditnya.",
    creditLimitReached_scopeDescription_member_apiKey: "Token akses ini telah mencapai batas kreditnya.",
    creditLimitReached_scopeDescription_member_project: "Proyek ini telah mencapai batas kreditnya.",
    creditLimitReached_scopeDescription_member_user: "Batas kredit pribadi Anda di ruang kerja ini telah tercapai.",
    creditLimitReached_scopeDescription_member_workspace: "Ruang kerja ini telah mencapai batas kreditnya.",
    creditLimitReached_scope_accessToken: "Token akses",
    creditLimitReached_scope_personal: "Perorangan",
    creditLimitReached_title: "Batas kredit tercapai",
    creditLimitReached_title_withApplicability: ["Batas kredit ", ["applicability"], " tercapai"]
};
export {
    i as
    default
};
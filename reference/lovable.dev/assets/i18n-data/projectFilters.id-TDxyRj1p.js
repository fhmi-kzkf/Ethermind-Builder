try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "caf70f58-6975-4e9a-a2bb-4e49970e70ff", e._sentryDebugIdIdentifier = "sentry-dbid-caf70f58-6975-4e9a-a2bb-4e49970e70ff")
    })()
} catch {}
var t = {
    projectFilters_activeFilterChip: [
        ["name"], ": ", ["value"]
    ],
    projectFilters_addFilter: "Tambah filter",
    projectFilters_clearAllFilters: "Hapus filter",
    projectFilters_filterMenuLabel: "Filter proyek",
    projectFilters_filterSearchPlaceholder: "Filter proyek...",
    projectFilters_filterTrigger: "Filter",
    projectFilters_folderLabel: "Folder",
    projectFilters_gridView: "Kisi",
    projectFilters_listView: "Daftar",
    projectFilters_orderAscendingAlphabetical: "A–Z",
    projectFilters_orderDescendingAlphabetical: "Z–A",
    projectFilters_orderGroupLabel: "Urutan",
    projectFilters_orderLeastPopular: "Paling tidak populer",
    projectFilters_orderLeastRelevant: "Paling tidak relevan",
    projectFilters_orderMostPopular: "Paling populer",
    projectFilters_orderMostRelevant: "Paling relevan",
    projectFilters_orderNewestFirst: "Terbaru lebih dulu",
    projectFilters_orderOldestFirst: "Terlama lebih dulu",
    projectFilters_ownerEmpty: "Pemilik tidak ditemukan.",
    projectFilters_ownerLabel: "Pemilik",
    projectFilters_ownerLoading: "Memuat...",
    projectFilters_ownerLoadingMore: "Memuat pemilik",
    projectFilters_ownerSearchPlaceholder: "Cari pemilik...",
    projectFilters_ownerYou: [
        ["name"], " (Anda)"
    ],
    projectFilters_popularityGroupLabel: "Popularitas",
    projectFilters_publishStatusAllPublished: "Semua yang dipublikasikan",
    projectFilters_publishStatusAny: "Semua status",
    projectFilters_publishStatusExternally: "Dipublikasikan secara eksternal",
    projectFilters_publishStatusInternally: "Diterbitkan secara internal",
    projectFilters_publishStatusLabel: "Status penerbitan",
    projectFilters_publishStatusUnpublished: "Belum diterbitkan",
    projectFilters_recentProjectsLabel: "Proyek yang baru dilihat",
    projectFilters_removeFilter: ["Hapus filter: ", ["filter"]],
    projectFilters_searchEmpty: "Tidak ada filter yang cocok",
    projectFilters_searchPlaceholder: "Cari proyek...",
    projectFilters_sortByGroupLabel: "Urutkan berdasarkan",
    projectFilters_sortCreated: "Dibuat",
    projectFilters_sortLastEdited: "Terakhir diedit",
    projectFilters_sortLastViewed: "Terakhir dilihat",
    projectFilters_sortMostVisitors24h: "Kunjungan terbanyak 24j",
    projectFilters_sortMostVisitors30d: "Kunjungan terbanyak 30h",
    projectFilters_sortMostVisitors7d: "Kunjungan terbanyak 7h",
    projectFilters_sortName: "Nama",
    projectFilters_sortRelevance: "Relevansi",
    projectFilters_starredLabel: "Berbintang",
    projectFilters_timeWindowBadge24h: "24j",
    projectFilters_timeWindowBadge30d: "30h",
    projectFilters_timeWindowBadge7d: "7h",
    projectFilters_timeWindowLast24Hours: "24 jam terakhir",
    projectFilters_timeWindowLast30Days: "30 hari terakhir",
    projectFilters_timeWindowLast7Days: "7 hari terakhir",
    projectFilters_viewGroupLabel: "Tampilan",
    projectFilters_visibilityAny: "Semua visibilitas",
    projectFilters_visibilityLabel: "Visibilitas",
    projectFilters_visibilityRestricted: "Terbatas",
    projectFilters_visibilityWorkspace: "Ruang kerja",
    projectFilters_visitorsSubmenu: "Kunjungan",
    projectsList_columnOwner: "Pemilik",
    projectsList_unknownUser: "Pengguna tidak dikenal"
};
export {
    t as
    default
};
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            i = new e.Error().stack;
        i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "f165f111-5883-4414-a3ba-903b56195eb5", e._sentryDebugIdIdentifier = "sentry-dbid-f165f111-5883-4414-a3ba-903b56195eb5")
    })()
} catch {}
var l = {
    filesCollections_accessUnavailable: "Koleksi tidak tersedia.",
    filesCollections_addFilesAction: "Tambahkan file",
    filesCollections_addFilesTitle: "Tambahkan file ke koleksi",
    filesCollections_addToCollection: "Tambahkan ke koleksi",
    filesCollections_cancel: "Batal",
    filesCollections_collectionDetails: "Detail koleksi",
    filesCollections_createAction: "Buat koleksi",
    filesCollections_createTitle: "Buat koleksi",
    filesCollections_deleteAction: "Hapus koleksi",
    filesCollections_deleteDescription: "Menghapus koleksi ini tidak akan menghapus berkas di dalamnya dari Berkas.",
    filesCollections_deleteDraftDescription: "Menghapus koleksi ini tidak menghapus berkasnya dari Berkas. Koleksi ini dibagikan, jadi menghapusnya akan menghapus koleksi ini di seluruh proyek ini.",
    filesCollections_deleteInvalid: "Koleksi ini tidak dapat dihapus. Tutup dialog ini dan coba lagi.",
    filesCollections_deleteTitle: "Hapus koleksi?",
    filesCollections_detailUnavailable: "Koleksi ini tidak tersedia. Koleksi mungkin telah dihapus atau aksesnya mungkin telah berubah.",
    filesCollections_doneSelecting: "Selesai memilih",
    filesCollections_editRequired: "Anda memerlukan akses untuk mengedit koleksi.",
    filesCollections_filesHeading: "File",
    filesCollections_loadFailed: "Tidak dapat memuat koleksi ini.",
    filesCollections_manageTitle: "Kelola koleksi",
    filesCollections_memberIneligible: "File ini tidak didukung dalam koleksi.",
    filesCollections_memberLimit: "Satu koleksi dapat menampung hingga 500 file. Kurangi jumlah file yang dipilih atau hapus beberapa file dari koleksi.",
    filesCollections_membershipCollectionLimit: "Satu perubahan dapat memperbarui hingga 100 koleksi. Ubah lebih sedikit koleksi.",
    filesCollections_membershipFailed: "Tidak tersimpan",
    filesCollections_membershipSelectionInvalid: "Beberapa file yang dipilih tidak didukung dalam koleksi.",
    filesCollections_membershipTargetUnavailable: "Koleksi tidak tersedia",
    filesCollections_membershipsLoadFailed: "Tidak dapat memuat keanggotaan koleksi.",
    filesCollections_nameInvalid: "Masukkan nama yang berisi karakter yang terlihat. Coba nama yang lebih pendek jika terlalu panjang.",
    filesCollections_nameLabel: "Nama koleksi",
    filesCollections_nameTaken: "Koleksi dengan nama ini sudah ada. Pilih nama lain.",
    filesCollections_noFilesToAdd: "Tidak ada file yang cocok untuk ditambahkan di antara file yang telah dimuat. Kosongkan pencarian atau muat lebih banyak file jika tersedia.",
    filesCollections_noMatchingCollections: "Tidak ada koleksi yang cocok.",
    filesCollections_noMembershipChanges: "Tidak ada perubahan untuk disimpan.",
    filesCollections_referenceFailed: "Tidak dapat menambahkan koleksi ke obrolan.",
    filesCollections_removeFilesAction: "Hapus dari koleksi",
    filesCollections_removeFilesDescription: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": "Tindakan ini hanya mengeluarkan berkas dari koleksi ini. Berkas tersebut tidak akan dihapus.",
            "countPlural=other": "Tindakan ini hanya mengeluarkan berkas-berkas ini dari koleksi ini. Berkas-berkas tersebut tidak akan dihapus."
        },
        f: "filesCollections_removeFilesDescription"
    },
    filesCollections_removeFilesDraftDescription: {
        d: [
            ["countPlural", "count", "plural"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": "Berkas itu sendiri tidak akan dihapus. Perubahan ini berlaku di seluruh proyek ini.",
            "countPlural=other": "Berkas-berkas itu sendiri tidak akan dihapus. Perubahan ini berlaku di seluruh proyek ini."
        },
        f: "filesCollections_removeFilesDraftDescription"
    },
    filesCollections_removeFilesInvalid: "File-file ini tidak dapat dihapus dari koleksi. Tutup dialog ini dan periksa pilihan Anda.",
    filesCollections_removeFilesTitle: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": "Keluarkan berkas dari koleksi?",
            "countPlural=other": ["Keluarkan ", ["countNumber"], " berkas dari koleksi?"]
        },
        f: "filesCollections_removeFilesTitle"
    },
    filesCollections_removeSelected: "Hapus dari koleksi",
    filesCollections_renameDescription: "Masukkan nama yang berbeda.",
    filesCollections_renameTitle: "Ganti nama koleksi",
    filesCollections_retryFailedMemberships: "Coba lagi perubahan yang gagal",
    filesCollections_saveAction: "Simpan nama",
    filesCollections_selectFiles: "Pilih file yang belum ada dalam koleksi ini.",
    filesCollections_selectMembersHint: "Pilih setidaknya satu file.",
    filesCollections_selectMembershipFiles: "Pilih setidaknya satu file untuk mengelola koleksi.",
    filesCollections_selectShown: "Pilih file yang ditampilkan",
    filesCollections_selectedCount: [
        ["count"], " dipilih"
    ]
};
export {
    l as
    default
};
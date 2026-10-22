try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new e.Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b3bd297b-e848-4c67-97ca-2d483db056e1", e._sentryDebugIdIdentifier = "sentry-dbid-b3bd297b-e848-4c67-97ca-2d483db056e1")
    })()
} catch {}
var i = {
    filesView_documentDeleted: "File ini telah dihapus",
    filesView_embedLoadFailed: "Tidak dapat memuat file ini",
    filesView_embedNotFound: "Tidak ditemukan dalam file proyek ini",
    filesView_firstPage: "Anda berada di halaman pertama",
    filesView_lastPage: "Tidak ada berkas lagi",
    filesView_loadFailed: "Tidak dapat memuat file. Coba lagi.",
    filesView_newFileCancel: "Batal",
    filesView_newFileErrorCharset: "Gunakan huruf, angka, spasi, titik, tanda hubung, dan garis bawah",
    filesView_newFileErrorEmpty: "Masukkan nama file",
    filesView_newFileErrorReservedEdit: "Nama yang diakhiri dengan .edit atau .edit-<number> dicadangkan untuk salinan yang diedit",
    filesView_newFileErrorReservedNotes: "Nama ini dicadangkan untuk catatan proyek",
    filesView_newFileErrorTooLong: "Nama file tersebut terlalu panjang",
    filesView_newFileErrorTrailingDotSpace: "Nama file tidak boleh diakhiri dengan titik atau spasi",
    filesView_noFilesLoaded: "Belum ada file yang dimuat.",
    filesView_previewFailed: "Gagal memuat pratinjau berkas.",
    editorNotes_loadFailed: "Gagal memuat catatan",
    editorNotes_placeholder: "Tulis catatan untuk proyek ini...",
    editorNotes_saveFailed: "Gagal menyimpan perubahan",
    editorNotes_saved: "Tersimpan",
    editorNotes_saving: "Menyimpan...",
    editorNotes_tryAgain: "Coba lagi"
};
export {
    i as
    default
};
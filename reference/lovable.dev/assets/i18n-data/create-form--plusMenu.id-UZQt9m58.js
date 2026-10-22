try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new e.Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "549b0ec1-3f2f-456c-8b3e-aa68b90804f1", e._sentryDebugIdIdentifier = "sentry-dbid-549b0ec1-3f2f-456c-8b3e-aa68b90804f1")
    })()
} catch {}
var n = {
    plusMenu_addSupabaseOrganization: "Tambahkan organisasi Supabase",
    plusMenu_askAdminToReconnectSupabase: "Minta admin ruang kerja Anda untuk menghubungkan ulang ke Supabase",
    plusMenu_attach: "Lampirkan",
    plusMenu_autoEnabledInChat: "Aktif otomatis di obrolan",
    plusMenu_checkProjectInSupabase: "Periksa status proyek di Supabase",
    plusMenu_clickToReconnectSupabase: "Klik untuk menghubungkan ulang ke Supabase",
    plusMenu_codebase: "Basis kode",
    plusMenu_createLibraryProject: "Buat proyek pustaka",
    plusMenu_createProject: "Buat proyek",
    plusMenu_databases: "Basis data",
    plusMenu_design: "Desain",
    plusMenu_designSystems: "Sistem desain",
    plusMenu_editDesignSystem: "Edit sistem desain",
    plusMenu_figmaDesigns: "Desain Figma",
    plusMenu_lookingForMore: "Mencari yang lain?",
    plusMenu_lovableCloud: "Lovable Cloud",
    plusMenu_manageConnectors: "Kelola konektor",
    plusMenu_noProjects: "Tidak ada proyek",
    plusMenu_notWorkspaceAdmin: "Anda bukan admin ruang kerja ini",
    plusMenu_selectDesignSystem: "Pilih sistem desain",
    plusMenu_supabase: "Supabase",
    plusMenu_useADesignSystem: "Gunakan sistem desain",
    plusMenu_useATemplate: "Gunakan templat",
    plusMenu_zippedFolder: "Folder ZIP"
};
export {
    n as
    default
};
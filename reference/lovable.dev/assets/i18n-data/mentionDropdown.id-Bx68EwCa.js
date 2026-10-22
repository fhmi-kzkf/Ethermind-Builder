try {
    (function() {
        var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new n.Error().stack;
        e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "bf5f4b2b-a1ca-49a9-832d-90db421c8125", n._sentryDebugIdIdentifier = "sentry-dbid-bf5f4b2b-a1ca-49a9-832d-90db421c8125")
    })()
} catch {}
var o = {
    mentionDropdown_assets: "Aset",
    mentionDropdown_back: "Kembali",
    mentionDropdown_code: "Kode",
    mentionDropdown_draftTooltip: ["Buka draf ", ["label"]],
    mentionDropdown_fileCount: {
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
        f: "mentionDropdown_fileCount"
    },
    mentionDropdown_files: "Berkas",
    mentionDropdown_loading: "Memuat...",
    mentionDropdown_noMatches: "Tidak ada hasil yang cocok",
    mentionDropdown_projects: "Proyek",
    mentionDropdown_searchAssets: "Cari desain...",
    mentionDropdown_searchConnectors: "Cari konektor...",
    mentionDropdown_searchDrafts: "Cari draf...",
    mentionPill_loadingChat: "Memuat percakapan…",
    skillCommand_builtByLovable: "Dibuat oleh Lovable",
    skillCommand_searchPlaceholder: "Cari keterampilan...",
    skillCommand_skills: "Keterampilan",
    skillCommand_workspaceSkills: "Keterampilan ruang kerja"
};
export {
    o as
    default
};
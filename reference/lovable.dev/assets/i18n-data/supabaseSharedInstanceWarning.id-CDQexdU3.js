try {
    (function() {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new a.Error().stack;
        e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "b9fcac50-0c3b-49cf-aeb0-7aa58910e42c", a._sentryDebugIdIdentifier = "sentry-dbid-b9fcac50-0c3b-49cf-aeb0-7aa58910e42c")
    })()
} catch {}
var n = {
    supabaseSharedInstanceWarning_consequence: "Proyek yang berbagi instans Supabase akan saling menimpa rahasia dan dapat merusak integrasi satu sama lain.",
    supabaseSharedInstanceWarning_infotipLabel: "Instans Supabase sudah terhubung ke proyek Lovable lain",
    supabaseSharedInstanceWarning_names: ["Sudah terhubung ke ", ["projects"], "."],
    supabaseSharedInstanceWarning_namesAndBoth: ["Sudah terhubung ke ", ["projects"], " serta proyek lain di ruang kerja ini dan ruang kerja lain."],
    supabaseSharedInstanceWarning_namesAndMoreInWorkspace: ["Sudah terhubung ke ", ["projects"], " dan proyek lain di ruang kerja ini."],
    supabaseSharedInstanceWarning_namesAndOtherWorkspaces: ["Sudah terhubung ke ", ["projects"], " dan proyek di ruang kerja lain."],
    supabaseSharedInstanceWarning_noNamesBoth: "Sudah terhubung ke proyek di ruang kerja ini dan ruang kerja lain.",
    supabaseSharedInstanceWarning_noNamesMoreInWorkspace: "Sudah terhubung ke proyek lain di ruang kerja ini.",
    supabaseSharedInstanceWarning_noNamesOtherWorkspaces: "Sudah terhubung ke proyek di ruang kerja lain."
};
export {
    n as
    default
};
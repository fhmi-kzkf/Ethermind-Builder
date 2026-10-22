try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "57d8eeb5-4bf3-481b-8a47-abbe9735447e", e._sentryDebugIdIdentifier = "sentry-dbid-57d8eeb5-4bf3-481b-8a47-abbe9735447e")
    })()
} catch {}
var t = {
    connectedComputer_disconnect: ["Putuskan koneksi ", ["name"]],
    connectedComputer_noComputers: "Hubungkan dari aplikasi Mac",
    connectedComputer_off: "Nonaktif",
    connectedComputer_privateChats: "Tersedia di chat pribadi Anda",
    connectedComputer_selectionFailed: "Tidak dapat memperbarui akses komputer. Coba lagi.",
    connectedComputer_thisMac: "Mac ini"
};
export {
    t as
    default
};
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "06889842-e4f1-4c24-ae35-a8561a332bfc", e._sentryDebugIdIdentifier = "sentry-dbid-06889842-e4f1-4c24-ae35-a8561a332bfc")
    })()
} catch {}
var a = {
    consentBanner_acceptAll: "Terima semua",
    consentBanner_ariaLabel: "Pemberitahuan kuki",
    consentBanner_cookiePolicyLink: "Kebijakan Kuki",
    consentBanner_doNotSell: "Jangan jual informasi pribadi saya",
    consentBanner_managePreferences: "Kelola preferensi",
    consentBanner_message: "Kami menggunakan kuki untuk meningkatkan pengalaman Anda dalam proses pengembangan dan menjaga keamanan data Anda.",
    consentBanner_ok: "OK",
    consentBanner_privacyPolicyLink: "Kebijakan Privasi",
    consentBanner_rejectAll: "Tolak semua"
};
export {
    a as
    default
};
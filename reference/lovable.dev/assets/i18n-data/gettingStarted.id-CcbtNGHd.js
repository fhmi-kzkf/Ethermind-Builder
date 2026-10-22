try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3dfafc2c-0111-412a-b912-50d9cc54fd39", e._sentryDebugIdIdentifier = "sentry-dbid-3dfafc2c-0111-412a-b912-50d9cc54fd39")
    })()
} catch {}
var a = {
    gettingStarted_pickTemplate_explainer_body: "Template adalah proyek lengkap yang dibuat dengan Lovable. Mulai dengan template yang dekat dengan idemu, lalu ubah apa pun lewat prompt.",
    gettingStarted_pickTemplate_explainer_title: "Apa itu template?",
    gettingStarted_role_consultant: "Konsultan",
    gettingStarted_role_designer: "Desainer",
    gettingStarted_role_engineer: "Engineer",
    gettingStarted_role_founder: "Founder",
    gettingStarted_role_marketingSales: "Pemasaran / Penjualan",
    gettingStarted_role_operations: "Operasional",
    gettingStarted_role_other: "Lainnya",
    gettingStarted_role_product: "Produk",
    gettingStarted_stepIndicator_label: "Indikator langkah",
    gettingStarted_stepIndicator_stepLabel: ["Langkah ", ["current"], " dari ", ["total"]]
};
export {
    a as
    default
};
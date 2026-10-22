try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fadd264b-aa25-4d29-a7ec-4d3ce16ea452", e._sentryDebugIdIdentifier = "sentry-dbid-fadd264b-aa25-4d29-a7ec-4d3ce16ea452")
    })()
} catch {}
var a = {
    share_cancel: "Batal",
    share_copied: "Tersalin!",
    share_copyLink: "Salin tautan",
    share_copyPreviewLink: "Salin tautan pratinjau",
    share_externalConfirm_andMore: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": ["dan ", ["countNumber"], " lainnya..."],
            "countPlural=other": ["dan ", ["countNumber"], " lainnya..."]
        },
        f: "share_externalConfirm_andMore"
    },
    share_invitationAccepted: "Undangan diterima!",
    share_invitationAcceptedDescription: ["Anda kini memiliki akses ke “", ["name"], "”."],
    share_invitationDeclined: "Undangan ditolak",
    share_invitationDeclinedDescription: ["Anda telah menolak undangan ke “", ["name"], "”."],
    share_linkCopiedToClipboard: "Tautan disalin ke papan klip",
    share_unknownUser: "Pengguna tidak dikenal"
};
export {
    a as
    default
};
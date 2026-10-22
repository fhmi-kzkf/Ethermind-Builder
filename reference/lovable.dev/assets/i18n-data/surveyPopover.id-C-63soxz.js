try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new e.Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f9bb7ec4-d8ff-4839-8f96-9a7d5e37ddca", e._sentryDebugIdIdentifier = "sentry-dbid-f9bb7ec4-d8ff-4839-8f96-9a7d5e37ddca")
    })()
} catch {}
var n = {
    surveyPopover_answerPlaceholder: "Jawaban Anda...",
    surveyPopover_answerToContinueHint: "Jawab pertanyaan untuk melanjutkan",
    surveyPopover_bookNow: "Pesan sekarang",
    surveyPopover_collapsedSubtitle: "Ketuk untuk berbagi pendapat Anda",
    surveyPopover_collapsedTitle: "Ceritakan pengalaman Anda",
    surveyPopover_dismiss: "Tutup",
    surveyPopover_next: "Berikutnya",
    surveyPopover_openLink: "Buka tautan",
    surveyPopover_optionOther: "Lainnya",
    surveyPopover_otherAnswerLabel: "Jawaban lainnya",
    surveyPopover_skip: "Lewati",
    surveyPopover_submit: "Kirim",
    surveyPopover_submitError: "Terjadi kesalahan saat mengirim jawaban Anda. Silakan coba lagi.",
    surveyPopover_submittingHint: "Mengirim jawaban Anda"
};
export {
    n as
    default
};
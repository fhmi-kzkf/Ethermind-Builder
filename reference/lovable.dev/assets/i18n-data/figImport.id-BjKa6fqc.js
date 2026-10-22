try {
    (function() {
        var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new n.Error().stack;
        e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "2068977f-fa4f-4c62-8fcf-4700dec9e8d9", n._sentryDebugIdIdentifier = "sentry-dbid-2068977f-fa4f-4c62-8fcf-4700dec9e8d9")
    })()
} catch {}
var a = {
    figImport_companionUploadFailedDescription: "File Figma berhasil dilampirkan, tetapi agent mungkin tidak menerima data desain yang diekstrak.",
    figImport_companionUploadFailedTitle: "Detail desain gagal diunggah",
    figImport_designTokenCount: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " token desain"
            ],
            "countPlural=other": [
                ["countNumber"], " token desain"
            ]
        },
        f: "figImport_designTokenCount"
    },
    figImport_downloadFailedDescription: "Coba lagi sebentar lagi.",
    figImport_downloadFailedTitle: "Tidak dapat menyiapkan JSON desain",
    figImport_downloadJson: "Unduh JSON",
    figImport_imageCount: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " gambar"
            ],
            "countPlural=other": [
                ["countNumber"], " gambar"
            ]
        },
        f: "figImport_imageCount"
    },
    figImport_nodeCount: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " node"
            ],
            "countPlural=other": [
                ["countNumber"], " node"
            ]
        },
        f: "figImport_nodeCount"
    },
    figImport_pageCount: {
        d: [
            ["countPlural", "count", "plural"],
            ["countNumber", "count", "number"]
        ],
        s: ["countPlural"],
        m: {
            "countPlural=one": [
                ["countNumber"], " halaman"
            ],
            "countPlural=other": [
                ["countNumber"], " halaman"
            ]
        },
        f: "figImport_pageCount"
    },
    figImport_parseFailedDescription: "File berhasil dilampirkan, tetapi detail desainnya tidak dapat diekstrak.",
    figImport_parseFailedTitle: "Tidak dapat membaca file Figma"
};
export {
    a as
    default
};
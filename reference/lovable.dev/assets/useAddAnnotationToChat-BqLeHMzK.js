import {
    o as L
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    Cz as B,
    HM as d,
    Nx as M,
    Zb as X,
    _S as W
} from "./app-shared-6CLVfi8w.js";
import {
    i as j
} from "./vendor-react-Fx2PtaaM.js";
import {
    v as k,
    x as O
} from "./vendor-protobuf-BvDTVJFg.js";
import {
    As as D,
    Ds as N,
    Os as U,
    gr as Y,
    ks as J,
    or as V,
    xr as w
} from "./dashboard-shared-BN9MnewY.js";
import {
    a as P,
    i as H,
    n as x,
    o as Q,
    r as K,
    t as $
} from "./imageInputCompressionJobs-D_5nD86d.js";
import {
    a as q
} from "./imageUpload-DdkqqYC6.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "edf2ba9a-eb7a-4f40-ae85-6357307369e9", e._sentryDebugIdIdentifier = "sentry-dbid-edf2ba9a-eb7a-4f40-ae85-6357307369e9")
    })()
} catch {}
var u = L(j(), 1),
    y = {
        "image/jpeg": "jpg",
        "image/png": "png",
        "image/webp": "webp"
    },
    ee = e => e in y ? e : "image/png",
    te = (e, t) => {
        const o = e.replace(/\.[^.]+$/, ""),
            r = ee(t.type);
        return new File([t], `${o}-annotated.${y[r]}`, {
            type: r
        })
    },
    oe = k("Ci5sb3ZhYmxlL2V2ZW50cy9jaGF0L3YxL2ltYWdlX2Fubm90YXRpb25zLnByb3RvEhZsb3ZhYmxlLmV2ZW50cy5jaGF0LnYxIqABChlJbWFnZUFubm90YXRpb25BdHRhY2hlZFYxEhcKCnByb2plY3RfaWQYASABKAlIAIgBARIPCgdzdXJmYWNlGAIgASgJEhcKD3JlcGxhY2VkX3NvdXJjZRgDIAEoCBIRCgltaW1lX3R5cGUYBCABKAk6HoK1GA5wcm9kdWN0LWdyb3d0aJK1GAhmcm9udGVuZEINCgtfcHJvamVjdF9pZEL5AQoaY29tLmxvdmFibGUuZXZlbnRzLmNoYXQudjFCFUltYWdlQW5ub3RhdGlvbnNQcm90b1ABWklnaXRodWIuY29tL2xvdmFibGVsYWJzL2xvdmFibGUvZ28vcHJvdG8vZ2VuL2xvdmFibGUvZXZlbnRzL2NoYXQvdjE7Y2hhdHYxogIDTEVDqgIWTG92YWJsZS5FdmVudHMuQ2hhdC5WMcoCFkxvdmFibGVcRXZlbnRzXENoYXRcVjHiAiJMb3ZhYmxlXEV2ZW50c1xDaGF0XFYxXEdQQk1ldGFkYXRh6gIZTG92YWJsZTo6RXZlbnRzOjpDaGF0OjpWMWIGcHJvdG8z", [W]),
    se = O(oe, 0),
    ie = Math.round(U / N),
    re = e => {
        const t = e.filter(o => !w(o));
        return P(t) + 1 > 10 ? {
            blocked: !0,
            description: Q(t)
        } : {
            blocked: !1,
            description: ""
        }
    },
    ne = e => {
        d.error("File limit reached", {
            description: e || "Please limit your message to 10 files."
        })
    },
    ae = e => {
        const t = V(s => s.setImages),
            o = q(),
            r = (0, u.useRef)(o);
        r.current = o;
        const c = (0, u.useRef)(!0),
            f = e ? .presentation;
        return (0, u.useEffect)(() => (c.current = !0, () => {
            c.current = !1
        }), []), (0, u.useCallback)((s, n, g) => {
            const h = X(),
                v = [];
            let I = [],
                _ = !1,
                A = !1,
                C = !1,
                S = "";
            return t(i => {
                if (i.some(a => a.compressing)) return A = !0, i;
                const m = n ? i.findIndex(a => a.id === n) : -1;
                if (n && m === -1) return i;
                if (!n) {
                    const a = re(i);
                    if (a.blocked) return C = !0, S = a.description, i
                }
                const F = n ? i.filter(a => a.id !== n) : i,
                    Z = H(F),
                    p = D({
                        files: [s],
                        existingImageSize: Z,
                        maxFileSize: r.current
                    });
                if (I = p.rejectedFiles, p.attachableFiles.length === 0) return i;
                const R = p.targetSize;
                let b = !1;
                const E = URL.createObjectURL(s);
                R !== null && p.filesToCompress.includes(s) && (b = !0, v.push({
                    id: h,
                    file: s,
                    targetSize: R
                }));
                const l = m >= 0 ? i[m] : void 0,
                    z = !b && l ? .compressionOriginalSize !== void 0 && s.size < l.compressionOriginalSize ? l.compressionOriginalSize : void 0,
                    T = {
                        url: E,
                        originalBlobUrl: E,
                        name: s.name,
                        sketchDocument: g,
                        mimeType: s.type,
                        size: s.size,
                        presentation: f,
                        uploading: !1,
                        uploaded: !1,
                        compressing: b,
                        compressionOriginalSize: b ? s.size : z,
                        compressionCompressedSize: z !== void 0 ? s.size : void 0,
                        id: h
                    };
                return _ = !0, n ? l ? (Y(l.url), l.originalBlobUrl && l.originalBlobUrl !== l.url && Y(l.originalBlobUrl), x(i.map((a, G) => G === m ? T : a))) : i : x([...i, T])
            }), A ? d.info("Images are still compressing", {
                description: "Wait for compression to finish before adding another image."
            }) : C ? ne(S) : ce(I, r.current), v.length > 0 && K({
                jobs: v,
                maxFileSize: r.current,
                setImages: t,
                onFailure: ({
                    failedCount: i,
                    totalCapFailedCount: m
                }) => {
                    if (c.current) {
                        if (m > 0) {
                            d.error("Images too large", {
                                description: $
                            });
                            return
                        }
                        i > 0 && d.error("Image could not be compressed", {
                            description: "Remove it or use a smaller image."
                        })
                    }
                }
            }), _ ? {
                imageId: h
            } : !1
        }, [f, t])
    },
    le = e => {
        const t = ae(e),
            o = M(),
            r = B();
        return (0, u.useCallback)((c, f, s) => {
            const n = te(c, f),
                g = t(n, s);
            return g !== !1 && e ? .presentation === void 0 && o.emit(se, {
                projectId: r ? ? void 0,
                surface: s ? "project_composer" : "project_file_viewer",
                replacedSource: s !== void 0,
                mimeType: n.type
            }), g
        }, [t, o, e ? .presentation, r])
    },
    he = (e, t, o) => {
        const r = le(o);
        return (0, u.useCallback)(c => r(e, c, t), [r, e, t])
    },
    ce = (e, t) => {
        e.some(o => o.reason === "empty-file") && d.error("Image is empty", {
            description: "The image has no content. Save it to your device and try again."
        }), e.filter(o => o.reason === "file-too-large").length > 0 && d.error("Image too large", {
            description: `Max size is ${J(t)}.`
        }), e.filter(o => o.reason === "images-too-large").length > 0 && d.error("Images too large", {
            description: `Combined image size is over ${ie} MB. Remove some images or use smaller files.`
        })
    };
export {
    ae as a, he as i, ne as n, se as o, le as r, te as s, re as t
};
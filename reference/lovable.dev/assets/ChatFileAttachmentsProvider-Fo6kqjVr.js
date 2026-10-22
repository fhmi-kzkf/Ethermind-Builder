const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/figCompanions-DgZqAV7g.js", "assets/dashboard-shared-BN9MnewY.js", "assets/rolldown-runtime-CSz5w8F5.js", "assets/app-shared-6CLVfi8w.js", "assets/vendor-tanstack-CIJxxCBL.js", "assets/vendor-react-Fx2PtaaM.js", "assets/vendor-sync-store-hJwz-_Wy.js", "assets/i18n-fn/_eager-BPNnp47q.js", "assets/vendor-util-bDkZRKmn.js", "assets/vendor-base-ui-field-BdT_EZJM.js", "assets/vendor-floating-ui-98f9kiPk.js", "assets/vendor-base-ui-eager-BVTTpYm_.js", "assets/flag-catalog-BJaXoOeP.js", "assets/vendor-es-toolkit-CQNapaF9.js", "assets/vendor-overlay-WeHoSqo7.js", "assets/vendor-schema-CyHzn7jr.js", "assets/vendor-firebase-core-bjLY_DoP.js", "assets/vendor-firebase-Dp4V3doB.js", "assets/vendor-tslib-CeDFfI6J.js", "assets/vendor-protobuf-BvDTVJFg.js", "assets/vendor-datefns-CALvQ3Vn.js", "assets/vendor-motion-Hvlv7m0n.js", "assets/app-shared-Wsr5ECzj.css", "assets/login-shared-leaves-DRum0qYb.js", "assets/ui-password-input-DxOwVSEA.js", "assets/ui-alert-C_SwFFEV.js", "assets/ui-password-input-BcX6uEiW.css", "assets/vendor-base-ui-lazy-B023JbQA.js", "assets/vendor-base-ui-chrome-CdtDcIlx.js", "assets/settings-shared-leaves-B-HU8sMN.js", "assets/route-shared-leaves-Cd6hFGLK.js", "assets/ui-shared-leaves-BBQog2OW.js", "assets/vendor-hook-form-CL-xHDfs.js", "assets/dashboard-shared-D-f1d4US.css", "assets/figParseClient-DP73SSAF.js", "assets/parseFig-CY-1UfO6.js", "assets/figKnowledge-BhTCTuz0.js"]))) => i.map(i => d[i]);
import {
    o as Ne
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    $L as je,
    Bt as Le,
    CR as R,
    FI as Ze,
    HL as Re,
    HM as I,
    Ht as Ge,
    Nx as Oe,
    RS as Ie,
    Wt as Pe,
    Zb as Ue,
    _S as Ye,
    bu as te,
    gL as Xe
} from "./app-shared-6CLVfi8w.js";
import {
    i as Ve,
    r as We
} from "./vendor-react-Fx2PtaaM.js";
import {
    Qn as Ke,
    Xn as Je,
    Yn as He,
    Zn as Qe,
    kb as $e
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    d as qe,
    n as et,
    t as tt,
    u as rt
} from "./i18n-fn/figImport-7zkAE4Ir.js";
import {
    Cu as nt,
    Kt as st,
    Su as it,
    Tu as at,
    wu as ot
} from "./i18n-fn/_misc-D8ok4lJW.js";
import {
    v as lt,
    x as De
} from "./vendor-protobuf-BvDTVJFg.js";
import {
    C as ct,
    S as Q,
    _,
    c as ie
} from "./vendor-motion-Hvlv7m0n.js";
import {
    As as dt,
    Ds as ut,
    Ei as J,
    Er as ft,
    Os as mt,
    gr as _e,
    ki as pt,
    ks as gt,
    ri as ht,
    xs as yt
} from "./dashboard-shared-BN9MnewY.js";
import {
    hg as bt
} from "./app-lazy-shared-BNTl480s.js";
import {
    h as vt
} from "./ui-alert-C_SwFFEV.js";
import {
    a as H,
    i as Se,
    o as xt,
    r as Ft,
    t as At
} from "./imageInputCompressionJobs-D_5nD86d.js";
import {
    a as wt,
    r as Ce
} from "./imageUpload-DdkqqYC6.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "99d96158-9d2b-4b46-93ca-5295d67f6296", e._sentryDebugIdIdentifier = "sentry-dbid-99d96158-9d2b-4b46-93ca-5295d67f6296")
    })()
} catch {}
var l = Ne(Ve(), 1),
    o = We();

function It({
    active: e = !0,
    className: t
}) {
    const r = ie();
    return (0, o.jsx)(_.div, {
        "aria-hidden": !0,
        className: R("bg-[var(--bg-scrim)] backdrop-blur-sm", t),
        initial: {
            opacity: 0
        },
        animate: {
            opacity: e ? 1 : 0
        },
        exit: {
            opacity: 0
        },
        transition: r ? {
            duration: 0
        } : {
            type: "spring",
            stiffness: 170,
            damping: 26,
            mass: 1
        }
    })
}

function _t({
    className: e
}) {
    const t = ie();
    return (0, o.jsx)(_.div, {
        "aria-hidden": !0,
        className: R("border-translucent-pulse pointer-events-none absolute rounded-[var(--file-drop-border-radius,1rem)] border-1 border-dashed", e),
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: t ? {
            duration: 0
        } : {
            type: "spring",
            stiffness: 170,
            damping: 26,
            mass: 1
        }
    })
}

function Ct({
    isDragReject: e = !1
}) {
    const t = ie(),
        r = {
            opacity: 0,
            y: t ? 0 : 6,
            filter: t ? "blur(0px)" : "blur(4px)"
        },
        a = {
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
        },
        s = (f, g = !0) => ({
            initial: g ? t ? a : r : {
                opacity: t ? 1 : 0,
                y: t ? 0 : 6
            },
            animate: g ? { ...a,
                transitionEnd: {
                    filter: "none"
                }
            } : {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                transition: t ? {
                    duration: 0
                } : {
                    duration: .2,
                    delay: 0,
                    ease: "easeOut"
                }
            },
            transition: t ? {
                duration: 0
            } : {
                duration: .2,
                delay: f * .04,
                ease: "easeOut"
            }
        }),
        n = f => ({
            initial: {
                filter: t ? "blur(0px)" : "blur(4px)"
            },
            animate: {
                filter: "blur(0px)",
                transitionEnd: {
                    filter: "none"
                }
            },
            transition: t ? {
                duration: 0
            } : {
                duration: .2,
                delay: f * .04,
                ease: "easeOut"
            }
        });
    return (0, o.jsx)(Q, {
        mode: "wait",
        propagate: !0,
        children: (0, o.jsxs)(_.div, {
            className: "flex min-w-0 flex-col items-center gap-3 text-center",
            children: [(0, o.jsxs)("div", {
                className: "isolate flex h-10 shrink-0 items-center -space-x-1",
                children: [e ? null : (0, o.jsx)(_.div, {
                    className: "rounded-full backdrop-blur-xs",
                    ...s(0, !1),
                    children: (0, o.jsx)(te, {
                        size: "sm",
                        shape: "circle",
                        bordered: !1,
                        className: "bg-secondary-pulse text-secondary-pulse shadow-surface-sm bg-none p-1.5",
                        children: (0, o.jsx)(_.div, { ...n(0),
                            children: (0, o.jsx)(Ge, {
                                className: "size-full"
                            })
                        })
                    })
                }), (0, o.jsx)(_.div, {
                    className: "z-10 rounded-full backdrop-blur-xs",
                    ...s(e ? 0 : 1, !1),
                    children: (0, o.jsx)(te, {
                        size: "md",
                        shape: "circle",
                        bordered: !1,
                        className: "bg-secondary-pulse text-secondary-pulse shadow-surface-sm bg-none p-2",
                        children: (0, o.jsx)(_.div, { ...n(e ? 0 : 1),
                            children: e ? (0, o.jsx)(vt, {
                                className: "text-attention-pulse size-full"
                            }) : (0, o.jsx)(Pe, {
                                className: "size-full"
                            })
                        })
                    })
                }), e ? null : (0, o.jsx)(_.div, {
                    className: "rounded-full backdrop-blur-xs",
                    ...s(2, !1),
                    children: (0, o.jsx)(te, {
                        size: "sm",
                        shape: "circle",
                        bordered: !1,
                        className: "bg-secondary-pulse text-secondary-pulse shadow-surface-sm bg-none p-1.5",
                        children: (0, o.jsx)(_.div, { ...n(2),
                            children: (0, o.jsx)(Le, {
                                className: "size-full"
                            })
                        })
                    })
                })]
            }), (0, o.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [(0, o.jsx)(_.h2, { ...s(e ? 1 : 3),
                    className: "text-primary-pulse text-base font-medium",
                    children: e ? at() : nt()
                }), (0, o.jsx)(_.p, { ...s(e ? 2 : 4),
                    className: "text-secondary-pulse text-sm",
                    children: e ? ot({
                        max: 10
                    }) : it()
                })]
            })]
        }, e ? "rejected" : "accepted")
    })
}
var ae = (0, l.createContext)(null);
ae.displayName = "ChatFileAttachmentsContext";

function rr() {
    const {
        attachments: e,
        addAttachment: t,
        replaceAttachment: r,
        removeAttachment: a,
        clearAttachments: s,
        openAttachmentDialog: n,
        hasPendingAttachments: f
    } = $();
    return {
        attachments: e,
        addAttachment: t,
        replaceAttachment: r,
        removeAttachment: a,
        clearAttachments: s,
        openAttachmentDialog: n,
        hasPendingAttachments: f
    }
}

function $() {
    const e = (0, l.useContext)(ae);
    if (!e) throw new Error("useChatFileAttachments must be used within ChatFileAttachmentsProvider");
    return e
}
var Et = 1500,
    Dt = 300;

function ze(e, t) {
    const r = (0, l.useRef)(t);
    r.current = t, (0, l.useEffect)(() => {
        if (!e) return;
        let a = Date.now();
        const s = () => {
                a = Date.now()
            },
            n = () => r.current();
        window.addEventListener("dragenter", s, !0), window.addEventListener("dragover", s, !0), window.addEventListener("drop", n, !0), window.addEventListener("dragend", n, !0);
        const f = window.setInterval(() => {
            Date.now() - a > Et && n()
        }, Dt);
        return () => {
            window.removeEventListener("dragenter", s, !0), window.removeEventListener("dragover", s, !0), window.removeEventListener("drop", n, !0), window.removeEventListener("dragend", n, !0), window.clearInterval(f)
        }
    }, [e])
}

function nr({
    children: e,
    className: t,
    asChild: r,
    disabled: a = !1,
    hideOverlay: s
}) {
    const {
        attachments: n,
        addAttachment: f,
        registerScopedDragDropArea: g
    } = $(), [b, p] = (0, l.useState)(!1), d = (0, l.useRef)(0), [D, G] = (0, l.useState)(0), O = D + H(n) > 10, k = h => {
        G(h.items ? .length ? Array.from(h.items).filter(Y => Y.kind === "file").length : h.files.length)
    };
    (0, l.useEffect)(() => g(), [g]), ze(b, () => {
        d.current = 0, p(!1)
    });
    const N = h => {
            h.dataTransfer.types.includes("Files") && (h.preventDefault(), !a && (k(h.dataTransfer), d.current += 1, p(!0)))
        },
        j = h => {
            h.dataTransfer.types.includes("Files") && (h.preventDefault(), a || k(h.dataTransfer))
        },
        P = h => {
            h.dataTransfer.types.includes("Files") && (h.preventDefault(), d.current -= 1, d.current <= 0 && (d.current = 0, p(!1)))
        },
        U = h => {
            h.dataTransfer.types.includes("Files") && (h.preventDefault(), d.current = 0, p(!1), !a && f(Array.from(h.dataTransfer.files)))
        };
    return r ? (0, l.isValidElement)(e) ? (0, l.cloneElement)(e, {
        className: R(e.props.className, t),
        "data-dragging": b ? "" : void 0,
        onDragEnter: N,
        onDragLeave: P,
        onDragOver: j,
        onDrop: U,
        children: (0, o.jsxs)(o.Fragment, {
            children: [e.props.children, (0, o.jsx)(Q, {
                children: b && !s ? (0, o.jsx)(se, {
                    isDragReject: O
                }) : null
            })]
        })
    }) : null : (0, o.jsxs)("div", {
        className: t,
        "data-dragging": b ? "" : void 0,
        onDragEnter: N,
        onDragLeave: P,
        onDragOver: j,
        onDrop: U,
        children: [e, (0, o.jsx)(Q, {
            children: b && !s ? (0, o.jsx)(se, {
                isDragReject: O
            }) : null
        })]
    })
}

function se({
    fixed: e = !1,
    isDragReject: t = !1
}) {
    const r = ct();
    return (0, o.jsxs)("div", {
        "aria-hidden": !r || void 0,
        className: R("pointer-events-none z-30 flex items-center justify-center p-2", e ? "fixed inset-0" : "absolute inset-0"),
        children: [(0, o.jsx)(It, {
            className: "absolute inset-0"
        }), (0, o.jsxs)("div", {
            className: "relative flex h-full w-full items-center justify-center px-4 py-10",
            children: [(0, o.jsx)(_t, {
                className: "inset-0"
            }), (0, o.jsx)("div", {
                className: "relative min-w-0",
                children: (0, o.jsx)(Ct, {
                    isDragReject: t
                })
            })]
        })]
    })
}

function sr({
    className: e,
    multiple: t = !0,
    ...r
}) {
    const {
        addAttachment: a,
        inputRef: s
    } = $();
    return (0, o.jsx)("input", { ...r,
        ref: s,
        type: "file",
        multiple: t,
        className: R("hidden", e),
        onChange: n => {
            const f = Array.from(n.currentTarget.files ? ? []);
            a(f), n.currentTarget.value = ""
        }
    })
}

function St(e, t) {
    const r = e.indexOf(",");
    if (r === -1) return null;
    const a = e.slice(0, r).match(/^data:([^;]+);base64$/);
    if (!a) return null;
    try {
        const s = atob(e.slice(r + 1)),
            n = new Uint8Array(s.length);
        for (let f = 0; f < s.length; f++) n[f] = s.charCodeAt(f);
        return new File([n], t, {
            type: a[1]
        })
    } catch {
        return null
    }
}
async function Ee() {
    try {
        const e = await Re();
        if (!e ? .isWebViewBridgeAvailable) return [];
        if (!e.isNativeMethodAvailable ? .("getClipboardImage")) return [];
        const t = await e.getClipboardImage();
        if (!t ? .dataUrl) return [];
        const r = St(t.dataUrl, `pasted-image-${Date.now()}.png`);
        return r ? [r] : []
    } catch (e) {
        return console.error("[Bridge] Failed to read clipboard image:", e), []
    }
}

function ir({
    children: e,
    disabled: t = !1,
    captureUnfocusedFiles: r = !1,
    maxTextPasteLength: a,
    onClipboardPaste: s
}) {
    const {
        addAttachment: n
    } = $();
    (0, l.useEffect)(() => {
        if (!r || t) return;
        let g = !0;
        const b = p => {
            if (p.defaultPrevented || p.target !== document.body && p.target !== document.documentElement || !p.clipboardData) return;
            const d = Ce(p.clipboardData);
            if (d.length > 0) {
                p.preventDefault(), n(d);
                return
            }
            p.clipboardData.getData("text/plain") || Ee().then(D => {
                g && D.length > 0 && n(D)
            })
        };
        return document.addEventListener("paste", b), () => {
            g = !1, document.removeEventListener("paste", b)
        }
    }, [n, r, t]);
    const f = g => {
        s ? .(g);
        const b = Ce(g.clipboardData);
        if (b.length > 0) {
            g.preventDefault(), n(b);
            return
        }
        const p = g.clipboardData.getData("text/plain");
        if (a !== void 0 && Array.from(p).length > a) {
            if (g.preventDefault(), g.stopPropagation(), ft(p)) {
                I.warning(Ke(), {
                    description: st()
                });
                return
            }
            const d = `pasted-${new Date().toISOString().replace(/[:.]/g,"-")}.txt`;
            n([new File([p], d, {
                type: "text/plain"
            })]) ? I.info(Qe(), {
                description: d
            }) : I.warning(He(), {
                description: Je()
            });
            return
        }
        Ee().then(d => {
            d.length > 0 && n(d)
        })
    };
    return (0, o.jsx)("div", {
        onPasteCapture: t ? void 0 : f,
        children: e
    })
}
var zt = {
    invalid_format: !0,
    truncated_file: !0,
    decompression_cap_exceeded: !0,
    decompression_failed: !0,
    zip_invalid: !0,
    decode_failed: !0
};

function Be(e) {
    if (!(e instanceof Error) || e.name !== "FigParseError") return "unknown";
    const t = e.code;
    return typeof t == "string" && Xe(zt, t) ? t : "fig_parse_other"
}

function Bt(e) {
    return {
        outcome: e.outcome,
        fileSizeBytes: BigInt(e.fileSizeBytes),
        parseDurationMs: BigInt(e.parseDurationMs),
        companionCount: BigInt(e.artifacts.files.length),
        hasThumbnail: e.artifacts.hasThumbnail,
        knowledgeSizeBytes: BigInt(e.artifacts.knowledgeSizeBytes),
        knowledgeTruncated: e.artifacts.knowledgeTruncated
    }
}

function re(e) {
    let t;
    return e.stage === "size_check" ? t = "file_too_large" : e.stage === "count_check" ? t = "file_limit_reached" : t = Be(e.error), {
        stage: e.stage,
        errorCode: t,
        fileSizeBytes: BigInt(e.fileSizeBytes),
        maxFileSizeBytes: BigInt(e.maxFileSizeBytes),
        parseDurationMs: BigInt(e.parseDurationMs)
    }
}

function Mt(e, t) {
    globalThis.o11y ? .captureException(e, {
        type: "fig_import_parse_failed",
        location: t,
        context: {
            errorCode: Be(e)
        }
    })
}
var Me = lt("Cidsb3ZhYmxlL2V2ZW50cy9jaGF0L3YxL2ZpZ19pbXBvcnQucHJvdG8SFmxvdmFibGUuZXZlbnRzLmNoYXQudjEi3wEKEUZpZ0ltcG9ydFBhcnNlZFYxEg8KB291dGNvbWUYASABKAkSFwoPZmlsZV9zaXplX2J5dGVzGAIgASgDEhkKEXBhcnNlX2R1cmF0aW9uX21zGAMgASgDEhcKD2NvbXBhbmlvbl9jb3VudBgEIAEoAxIVCg1oYXNfdGh1bWJuYWlsGAUgASgIEhwKFGtub3dsZWRnZV9zaXplX2J5dGVzGAYgASgDEhsKE2tub3dsZWRnZV90cnVuY2F0ZWQYByABKAg6GoK1GApldmVyeXdoZXJlkrUYCGZyb250ZW5kIqMBChFGaWdJbXBvcnRGYWlsZWRWMRINCgVzdGFnZRgBIAEoCRISCgplcnJvcl9jb2RlGAIgASgJEhcKD2ZpbGVfc2l6ZV9ieXRlcxgDIAEoAxIbChNtYXhfZmlsZV9zaXplX2J5dGVzGAQgASgDEhkKEXBhcnNlX2R1cmF0aW9uX21zGAUgASgDOhqCtRgKZXZlcnl3aGVyZZK1GAhmcm9udGVuZELyAQoaY29tLmxvdmFibGUuZXZlbnRzLmNoYXQudjFCDkZpZ0ltcG9ydFByb3RvUAFaSWdpdGh1Yi5jb20vbG92YWJsZWxhYnMvbG92YWJsZS9nby9wcm90by9nZW4vbG92YWJsZS9ldmVudHMvY2hhdC92MTtjaGF0djGiAgNMRUOqAhZMb3ZhYmxlLkV2ZW50cy5DaGF0LlYxygIWTG92YWJsZVxFdmVudHNcQ2hhdFxWMeICIkxvdmFibGVcRXZlbnRzXENoYXRcVjFcR1BCTWV0YWRhdGHqAhlMb3ZhYmxlOjpFdmVudHM6OkNoYXQ6OlYxYgZwcm90bzM", [Ye]),
    Tt = De(Me, 0),
    ne = De(Me, 1),
    kt = Math.round(mt / ut);

function oe(e) {
    return {
        id: e.id,
        url: e.url,
        name: e.name,
        sketchDocument: e.sketchDocument,
        uploading: e.status === "uploading",
        uploaded: e.status === "uploaded",
        compressing: e.status === "compressing",
        compressionError: e.error,
        compressionOriginalSize: e.compressionOriginalSize,
        compressionCompressedSize: e.compressionCompressedSize,
        size: e.size,
        originalBlobUrl: e.originalBlobUrl,
        mimeType: e.mimeType,
        existingFileId: e.upload ? .fileId,
        existingDirName: e.upload ? .dirName,
        ephemeralFileId: e.upload ? .ephemeralFileId
    }
}

function Nt(e, t) {
    const r = new Map(e.map(a => [a.id, a]));
    return t(e.map(oe)).map(a => Lt(a, r.get(a.id)))
}

function jt(e, t) {
    const r = e.filter(s => s.reason === "empty-file");
    r.length > 0 && I.error(r.length > 1 ? "Images are empty" : "Image is empty", {
        description: r.length > 1 ? "These images have no content. Save them to your device and add them again." : `${r[0]?.file.name||"The image"} has no content. Save it to your device and add it again.`
    });
    const a = e.filter(s => s.reason === "file-too-large");
    if (a.length > 0) {
        const s = gt(t);
        I.error(a.length > 1 ? "Files too large" : "File too large", {
            description: a.length > 1 ? `Some files are too large. Max size is ${s}.` : `File is too large. Max size is ${s}.`
        })
    }
    e.filter(s => s.reason === "images-too-large").length > 0 && I.error("Images too large", {
        description: `Combined image size is over ${kt} MB. Try splitting into smaller batches.`
    })
}

function Lt(e, t) {
    return {
        id: e.id,
        name: e.name,
        sketchDocument: e.sketchDocument,
        url: e.url,
        mimeType: e.mimeType,
        size: e.size,
        originalBlobUrl: e.originalBlobUrl,
        status: Zt(e, t),
        error: e.compressionError,
        compressionOriginalSize: e.compressionOriginalSize,
        compressionCompressedSize: e.compressionCompressedSize,
        upload: t ? .upload
    }
}

function Zt(e, t) {
    return e.compressing ? "compressing" : e.compressionError ? "error" : t ? .status === "compressing" ? "ready" : t ? .status ? ? "ready"
}

function Z(e) {
    _e(e.url), e.originalBlobUrl && e.originalBlobUrl !== e.url && _e(e.originalBlobUrl)
}
async function Rt({
    attachment: e,
    uploadAttachmentFile: t,
    onUploaded: r,
    onFailed: a
}) {
    try {
        const s = e.originalBlobUrl ? ? e.url,
            n = await fetch(s);
        if (!n.ok) throw new Error(`Failed to read attachment: ${n.status}`);
        const f = await n.blob();
        r(await t({
            attachment: e,
            file: new File([f], e.name, {
                type: e.mimeType ? ? f.type
            })
        }))
    } catch {
        a()
    }
}

function ar({
    children: e,
    focusComposer: t,
    isAuthenticated: r,
    onAuthRequired: a,
    uploadStrategy: s
}) {
    const n = je(),
        f = Oe(),
        g = r ? ? !!n,
        b = (0, l.useRef)(null),
        [p, d] = (0, l.useState)([]),
        [D, G] = (0, l.useState)(0),
        [O, k] = (0, l.useState)(0),
        [N, j] = (0, l.useState)(!1),
        [P, U] = (0, l.useState)(0),
        h = (0, l.useRef)(p),
        Y = (0, l.useRef)(0),
        C = wt(),
        le = Ze(),
        Te = (0, l.useRef)(0),
        X = (0, l.useRef)(new Set),
        S = (0, l.useRef)(!0),
        {
            upload: ce,
            generateDownloadUrl: de
        } = ht(),
        A = (0, l.useCallback)(i => {
            d(m => {
                const c = typeof i == "function" ? i(m) : i;
                return h.current = c, c
            })
        }, []);
    (0, l.useEffect)(() => (S.current = !0, () => {
        S.current = !1;
        for (const i of h.current) Z(i)
    }), []);
    const ue = D > 0 || p.some(i => i.status === "ready" || i.status === "compressing" || i.status === "uploading"),
        z = (0, l.useCallback)((i, m, c, u) => {
            if (!g) return a ? .(), !1;
            if (i.length === 0) return !1;
            const x = h.current;
            if (x.some(y => y.status === "compressing")) return I.info("Files are still processing", {
                description: "Wait for processing to finish before adding more files."
            }), !1;
            const v = u ? x.findIndex(y => y.id === u) : -1;
            if (u && v === -1) return !1;
            const B = v === -1 ? x : x.filter((y, E) => E !== v),
                V = Se(B.map(oe)),
                w = dt({
                    files: i,
                    existingImageSize: V,
                    maxFileSize: C
                });
            for (const y of w.rejectedFiles) y.reason !== "file-too-large" || !J(y.file.name) || f.emit(ne, re({
                stage: "size_check",
                fileSizeBytes: y.file.size ? ? 0,
                maxFileSizeBytes: C,
                parseDurationMs: 0
            }));
            if (jt(w.rejectedFiles, C), w.attachableFiles.length === 0) return !1;
            const F = c ? 0 : H(w.attachableFiles);
            if (H(B) + F > 10) {
                if (!c)
                    for (const y of w.attachableFiles) J(y.name) && f.emit(ne, re({
                        stage: "count_check",
                        fileSizeBytes: y.size ? ? 0,
                        maxFileSizeBytes: C,
                        parseDurationMs: 0
                    }));
                return I.error("File limit reached", {
                    description: xt([...B, ...w.attachableFiles])
                }), !1
            }
            const ee = new Set(w.filesToCompress),
                W = [],
                L = new Map,
                M = w.attachableFiles.map(y => {
                    const E = ee.has(y),
                        K = Ue(),
                        Ae = URL.createObjectURL(y);
                    E && w.targetSize !== null && W.push({
                        id: K,
                        file: y,
                        targetSize: w.targetSize
                    });
                    const we = {
                        id: K,
                        name: y.name,
                        sketchDocument: m ? .sketchDocument,
                        url: Ae,
                        originalBlobUrl: Ae,
                        mimeType: bt(y.name, y.type),
                        size: y.size,
                        status: E ? "compressing" : "ready",
                        compressionOriginalSize: E ? y.size : void 0,
                        ...c ? {
                            companionOf: c
                        } : {}
                    };
                    return L.set(y, we), we
                }),
                T = v === -1 ? void 0 : x[v];
            T && Z(T);
            const Fe = y => {
                const E = T ? y.findIndex(K => K.id === T.id) : -1;
                return E === -1 ? [...y, ...M] : [...y.slice(0, E), ...M, ...y.slice(E + 1)]
            };
            return h.current = Fe(x), A(Fe), Gt({
                compressionGenerationRef: Te,
                compressionJobs: W,
                isMountedRef: S,
                maxSize: C,
                setAttachments: A
            }), m ? .focusComposer !== !1 && !Ie() && t ? .(), L
        }, [g, f, t, C, a, A]),
        q = (0, l.useCallback)((i, m) => {
            if (!i.some(v => J(v.name))) return z(i, m) !== !1;
            const c = pt(i, h.current),
                u = z(c, m);
            if (!u) return !1;
            const x = c.filter(v => J(v.name) && (v.size ? ? 0) <= C);
            for (const v of x) {
                const B = u.get(v);
                if (!B) continue;
                const V = B.id;
                G(F => F + 1);
                const w = performance.now();
                $e(async () => {
                    const {
                        buildFigCompanionArtifacts: F
                    } = await
                    import ("./figCompanions-DgZqAV7g.js");
                    return {
                        buildFigCompanionArtifacts: F
                    }
                }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36])).then(({
                    buildFigCompanionArtifacts: F
                }) => F(v)).then(F => {
                    const ee = Math.round(performance.now() - w),
                        W = h.current.some(T => T.id === V);
                    let L = !1;
                    S.current && W && (L = z(F.files, {
                        focusComposer: !1
                    }, V) !== !1);
                    let M = "abandoned";
                    F.knowledgeEmpty ? M = "empty_companions" : L && (M = "attached"), f.emit(Tt, Bt({
                        outcome: M,
                        fileSizeBytes: v.size,
                        parseDurationMs: ee,
                        artifacts: F
                    }))
                }).catch(F => {
                    f.emit(ne, re({
                        stage: "parse",
                        error: F,
                        fileSizeBytes: v.size,
                        maxFileSizeBytes: C,
                        parseDurationMs: Math.round(performance.now() - w)
                    })), Mt(F, "ChatFileAttachmentsProvider"), S.current && I.error(qe(), {
                        description: rt()
                    })
                }).finally(() => {
                    S.current && G(F => Math.max(0, F - 1))
                })
            }
            return !0
        }, [z, f, C]),
        fe = (0, l.useCallback)((i, m, c) => {
            const u = z([m], c, void 0, i);
            return u === !1 ? !1 : u.get(m) ? ? !1
        }, [z]),
        me = (0, l.useCallback)(i => {
            const m = h.current;
            if (!m.some(u => u.id === i)) return;
            const c = new Set([i]);
            for (const u of m) u.companionOf === i && c.add(u.id);
            for (const u of m) c.has(u.id) && Z(u);
            A(u => Pt(u.filter(x => !c.has(x.id))))
        }, [A]),
        pe = (0, l.useCallback)(i => {
            if (i.length === 0) return;
            const m = new Set(i);
            A(c => c.filter(u => !m.has(u.id)))
        }, [A]),
        ge = (0, l.useCallback)(i => {
            for (const m of i) Z(m)
        }, []),
        he = (0, l.useCallback)(() => {
            A(i => {
                for (const m of i) Z(m);
                return []
            })
        }, [A]),
        ye = (0, l.useCallback)(i => {
            A(m => {
                const c = new Set(m.map(u => u.id));
                return [...i.filter(u => !c.has(u.id)), ...m]
            })
        }, [A]),
        be = (0, l.useCallback)(() => {
            Ie() && document.activeElement instanceof HTMLElement && document.activeElement.blur(), b.current ? .click()
        }, []),
        ve = (0, l.useCallback)(() => (k(i => i + 1), () => {
            k(i => Math.max(0, i - 1))
        }), []),
        xe = (0, l.useCallback)(async ({
            attachment: i,
            file: m
        }) => {
            if (!n) throw new Error("Missing authenticated user");
            await ce({
                fileName: i.id,
                file: m,
                continueOnError: !1,
                options: {
                    compression: "disabled",
                    workspaceId: le ? ? void 0
                }
            });
            const {
                url: c
            } = await de({
                dir_name: n.uid,
                file_name: i.id
            });
            return yt({
                dir_name: n.uid,
                file_name: i.id
            }, c), {
                url: c,
                fileId: i.id,
                dirName: n.uid
            }
        }, [n, de, ce, le]);
    (0, l.useEffect)(() => {
        const i = s ? ? xe,
            m = p.filter(c => c.status === "ready" && !X.current.has(c.id));
        if (m.length !== 0) {
            for (const c of m) X.current.add(c.id);
            A(c => c.map(u => m.some(x => x.id === u.id) ? { ...u,
                status: "uploading"
            } : u));
            for (const c of m) Rt({
                attachment: c,
                uploadAttachmentFile: i,
                onUploaded: u => {
                    X.current.delete(c.id), S.current && A(x => x.map(v => v.id === c.id ? { ...v,
                        url: u.url,
                        status: "uploaded",
                        upload: {
                            fileId: u.fileId,
                            dirName: u.dirName,
                            ephemeralFileId: u.ephemeralFileId
                        }
                    } : v))
                },
                onFailed: () => {
                    X.current.delete(c.id), S.current && (c.companionOf && I.error(et(), {
                        description: tt()
                    }), A(u => u.map(x => x.id === c.id ? { ...x,
                        status: "error",
                        error: "File upload failed. Remove it and try again."
                    } : x)))
                }
            })
        }
    }, [p, xe, A, s]), Ot({
        addAttachment: q,
        globalDragCounterRef: Y,
        hasScopedDragDropArea: O > 0,
        setIsGlobalDragging: j,
        setGlobalDraggedFileCount: U
    }), ze(N, () => {
        Y.current = 0, j(!1)
    });
    const ke = (0, l.useMemo)(() => ({
        attachments: p,
        addAttachment: q,
        replaceAttachment: fe,
        removeAttachment: me,
        clearAttachments: he,
        detachAttachments: pe,
        discardDetachedAttachments: ge,
        restoreAttachments: ye,
        openAttachmentDialog: be,
        hasPendingAttachments: ue,
        inputRef: b,
        registerScopedDragDropArea: ve
    }), [p, q, fe, me, he, pe, ge, ye, be, ue, ve]);
    return (0, o.jsxs)(ae.Provider, {
        value: ke,
        children: [e, (0, o.jsx)(Q, {
            children: N ? (0, o.jsx)(se, {
                fixed: !0,
                isDragReject: P + H(p) > 10
            }) : null
        })]
    })
}

function Gt({
    compressionGenerationRef: e,
    compressionJobs: t,
    isMountedRef: r,
    maxSize: a,
    setAttachments: s
}) {
    if (t.length === 0) return;
    const n = e.current + 1;
    e.current = n;
    const f = () => e.current !== n;
    Ft({
        jobs: t,
        maxFileSize: a,
        isStale: f,
        setImages: g => {
            s(b => Nt(b, g))
        },
        onFailure: ({
            failedCount: g,
            totalCapFailedCount: b
        }) => {
            if (!(!r.current || f())) {
                if (b > 0) {
                    I.error("Images too large", {
                        description: At
                    });
                    return
                }
                g > 0 && I.error(g > 1 ? "Some files could not be processed" : "File could not be processed", {
                    description: "Remove failed files or use smaller files."
                })
            }
        }
    })
}

function Ot({
    addAttachment: e,
    globalDragCounterRef: t,
    hasScopedDragDropArea: r,
    setIsGlobalDragging: a,
    setGlobalDraggedFileCount: s
}) {
    (0, l.useEffect)(() => {
        const n = d => {
                s(d.items ? .length ? Array.from(d.items).filter(D => D.kind === "file").length : d.files.length)
            },
            f = d => {
                d.dataTransfer ? .types.includes("Files") && (d.preventDefault(), !r && (n(d.dataTransfer), t.current += 1, a(!0)))
            },
            g = d => {
                d.dataTransfer ? .types.includes("Files") && (d.preventDefault(), r || n(d.dataTransfer))
            },
            b = d => {
                d.dataTransfer ? .types.includes("Files") && (d.preventDefault(), !r && (t.current -= 1, t.current <= 0 && (t.current = 0, a(!1))))
            },
            p = d => {
                d.dataTransfer ? .types.includes("Files") && (d.preventDefault(), t.current = 0, a(!1), r || e(Array.from(d.dataTransfer.files)))
            };
        return window.addEventListener("dragenter", f), window.addEventListener("dragover", g), window.addEventListener("dragleave", b), window.addEventListener("drop", p), () => {
            window.removeEventListener("dragenter", f), window.removeEventListener("dragover", g), window.removeEventListener("dragleave", b), window.removeEventListener("drop", p)
        }
    }, [e, t, r, a, s])
}

function Pt(e) {
    return !e.some(t => t.error === "Combined image size is still too large. Remove one or more images.") || Se(e.map(oe)) > 15728640 ? e : e.map(t => t.error === "Combined image size is still too large. Remove one or more images." ? { ...t,
        error: void 0,
        status: "ready"
    } : t)
}
export {
    re as a, Ee as c, ze as d, rr as f, It as g, Ct as h, Mt as i, sr as l, _t as m, ne as n, Bt as o, $ as p, Tt as r, ir as s, ar as t, nr as u
};
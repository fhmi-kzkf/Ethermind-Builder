const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/SketchDialog-BFN1p0zs.js", "assets/rolldown-runtime-CSz5w8F5.js", "assets/app-shared-6CLVfi8w.js", "assets/vendor-tanstack-CIJxxCBL.js", "assets/vendor-react-Fx2PtaaM.js", "assets/vendor-sync-store-hJwz-_Wy.js", "assets/i18n-fn/_eager-BPNnp47q.js", "assets/vendor-util-bDkZRKmn.js", "assets/vendor-base-ui-field-BdT_EZJM.js", "assets/vendor-floating-ui-98f9kiPk.js", "assets/vendor-base-ui-eager-BVTTpYm_.js", "assets/flag-catalog-BJaXoOeP.js", "assets/vendor-es-toolkit-CQNapaF9.js", "assets/vendor-overlay-WeHoSqo7.js", "assets/vendor-schema-CyHzn7jr.js", "assets/vendor-firebase-core-bjLY_DoP.js", "assets/vendor-firebase-Dp4V3doB.js", "assets/vendor-tslib-CeDFfI6J.js", "assets/vendor-protobuf-BvDTVJFg.js", "assets/vendor-datefns-CALvQ3Vn.js", "assets/vendor-motion-Hvlv7m0n.js", "assets/app-shared-Wsr5ECzj.css", "assets/login-shared-leaves-DRum0qYb.js", "assets/ui-password-input-DxOwVSEA.js", "assets/ui-alert-C_SwFFEV.js", "assets/ui-password-input-BcX6uEiW.css", "assets/app-lazy-shared-BNTl480s.js", "assets/i18n-fn/editorNav-DaeWPYZk.js", "assets/i18n-fn/editor-BeFBoXwU.js", "assets/i18n-fn/previewInteractionToolbar-wl1c6sXA.js", "assets/i18n-fn/publish-CsFxIUbG.js", "assets/i18n-fn/settings-CLaQyFS8.js", "assets/i18n-fn/share-EPrD2XDc.js", "assets/i18n-fn/_misc-D8ok4lJW.js", "assets/vendor-base-ui-chrome-CdtDcIlx.js", "assets/vendor-base-ui-lazy-B023JbQA.js", "assets/dashboard-shared-BN9MnewY.js", "assets/settings-shared-leaves-B-HU8sMN.js", "assets/route-shared-leaves-Cd6hFGLK.js", "assets/ui-shared-leaves-BBQog2OW.js", "assets/vendor-hook-form-CL-xHDfs.js", "assets/dashboard-shared-D-f1d4US.css", "assets/ui-split-button-Dk7z_kOa.js", "assets/dashboard-icons-Dw3nX-fy.js", "assets/ui-icon-sidebar-8d86DMoM.js", "assets/vendor-radix-lazy-B6li8hrs.js", "assets/i18n-fn/drafts--editorNav-Zpmu1ynC.js", "assets/marketing-landing-app-shared~index~typography~tokens~index~page~page~page~page~page~page~pa~e8sg3j49-Bf2V78yj.js", "assets/app-lazy-shared-9jY1ET_5.css", "assets/UndoIcon-DRjwI6Ec.js", "assets/CircleIcon-CC83ChWs.js", "assets/CursorIcon-DasL2w9N.js", "assets/RedoIcon-C5kvR7HA.js", "assets/SlashIcon-iLqbKG-f.js", "assets/StopIcon-wx2A2GL6.js", "assets/styles-DhY9kBk_.js", "assets/vendor-editor-BxXM5pDU.js", "assets/vendor-document-editor-BTPRLev7.js", "assets/styles-DLLWR-6h.css", "assets/sharedStyles-DYA4UG-5.js", "assets/SketchDialogFrame-Dh1qR0W-.js", "assets/createLucideIcon-Kpt0u7gu.js"]))) => i.map(i => d[i]);
import {
    o as j
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    DF as I,
    FI as E,
    Nx as F,
    fp as R,
    mR as _,
    wj as A,
    xF as v,
    zk as T
} from "./app-shared-6CLVfi8w.js";
import {
    i as N,
    r as $
} from "./vendor-react-Fx2PtaaM.js";
import {
    kb as P
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    Wr as z
} from "./flag-catalog-BJaXoOeP.js";
import {
    as as S,
    sr as V
} from "./dashboard-shared-BN9MnewY.js";
import {
    a as W
} from "./useAddAnnotationToChat-BqLeHMzK.js";
import {
    f as q
} from "./ChatFileAttachmentsProvider-Fo6kqjVr.js";
import {
    t as L
} from "./SketchDialogFrame-Dh1qR0W-.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new e.Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "8bb3a31c-147a-44d7-8e98-6542e6eaa908", e._sentryDebugIdIdentifier = "sentry-dbid-8bb3a31c-147a-44d7-8e98-6542e6eaa908")
    })()
} catch {}
var r = j(N(), 1),
    i = $();

function y({
    open: e,
    onOpenChange: s,
    errorProps: n
}) {
    return (0, i.jsx)(L, {
        open: e,
        onClose: () => s(!1),
        initialFocus: !0,
        children: n ? (0, i.jsx)(R, { ...n
        }) : (0, i.jsx)("div", {
            className: "flex min-h-0 flex-1 flex-col gap-4 px-16 py-4",
            "aria-busy": "true",
            children: (0, i.jsxs)("div", {
                className: "flex min-h-0 flex-1 flex-col items-center gap-4",
                "aria-hidden": "true",
                children: [(0, i.jsx)(_, {
                    className: "h-9 w-40 rounded-full"
                }), (0, i.jsx)(_, {
                    className: "rounded-3 w-full flex-1"
                }), (0, i.jsx)(_, {
                    className: "h-7 w-48 rounded-full"
                })]
            })
        })
    })
}
var D = T(async () => (await P(async () => {
    const {
        SketchDialog: e
    } = await
    import ("./SketchDialog-BFN1p0zs.js");
    return {
        SketchDialog: e
    }
}, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]))).SketchDialog, {
    ssr: !1,
    loading: e => (0, i.jsx)(y, { ...e
    }),
    error: {
        reportAs: "chat.composer-sketch",
        fallback: e => (0, i.jsx)(y, { ...e,
            errorProps: e
        })
    }
});

function C(e, s, n) {
    const t = A(z).enabled,
        u = (0, r.useRef)(t);
    u.current = t;
    const l = F(),
        d = E(),
        f = I(),
        w = v("thread"),
        o = `${d??""}:${f}:${w??""}:${n??""}`,
        k = (0, r.useRef)(o);
    k.current = o;
    const b = (0, r.useRef)(!0);
    (0, r.useEffect)(() => (b.current = !0, () => {
        b.current = !1
    }), []);
    const [h, m] = (0, r.useState)(null), x = (0, r.useRef)(new Map);
    (0, r.useEffect)(() => {
        m(a => a ? .scope === o ? a : null)
    }, [o]);
    const c = h ? .scope === o && (!h.attachment || s(h.attachment.id)) ? h : null,
        p = `${o}:${c?.attachment?.id??"new"}`;
    return {
        enabled: t,
        openSketch: (0, r.useCallback)(() => {
            t && (m({
                open: !0,
                scope: o
            }), l.emit(S, {
                action: "sketch_opened",
                fileType: "image/png"
            }))
        }, [t, l, o]),
        editSketch: (0, r.useCallback)(a => a.sketchDocument ? (m({
            open: !0,
            scope: o,
            attachment: a
        }), l.emit(S, {
            action: "sketch_edit_opened",
            fileType: "image/png"
        }), !0) : !1, [l, o]),
        dialog: c && (t || c.attachment) ? (0, i.jsx)(D, {
            open: c.open,
            onOpenChange: a => m(g => g ? { ...g,
                open: a
            } : null),
            initialDocument: x.current.get(p) ? ? c.attachment ? .sketchDocument,
            onDraftChange: a => {
                c.scope === k.current && x.current.set(p, a)
            },
            onAttach: (a, g) => !b.current || !u.current && !c.attachment || c.scope !== k.current || !e(a, g, c.attachment ? .id) ? !1 : (l.emit(S, {
                action: c.attachment ? "sketch_edited" : "sketch_attached",
                fileType: "image/png",
                imageSize: BigInt(a.size)
            }), x.current.delete(p), m(null), !0)
        }, p) : null,
        preloadSketch: D.preload
    }
}

function X() {
    const {
        store: e
    } = V(), s = W();
    return C((0, r.useCallback)((n, t, u) => s(n, u, t) !== !1, [s]), n => e.getState().images.some(t => t.id === n))
}

function Y(e) {
    const {
        attachments: s,
        addAttachment: n,
        replaceAttachment: t
    } = q();
    return C((0, r.useCallback)((u, l, d) => {
        const f = {
            sketchDocument: l,
            focusComposer: !0
        };
        return d ? t(d, u, f) !== !1 : n([u], f)
    }, [n, t]), u => s.some(l => l.id === u), e)
}
export {
    Y as n, X as t
};
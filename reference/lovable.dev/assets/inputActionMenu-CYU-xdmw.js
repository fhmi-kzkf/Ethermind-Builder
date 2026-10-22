const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/figCompanions-DgZqAV7g.js", "assets/dashboard-shared-BN9MnewY.js", "assets/rolldown-runtime-CSz5w8F5.js", "assets/app-shared-6CLVfi8w.js", "assets/vendor-tanstack-CIJxxCBL.js", "assets/vendor-react-Fx2PtaaM.js", "assets/vendor-sync-store-hJwz-_Wy.js", "assets/i18n-fn/_eager-BPNnp47q.js", "assets/vendor-util-bDkZRKmn.js", "assets/vendor-base-ui-field-BdT_EZJM.js", "assets/vendor-floating-ui-98f9kiPk.js", "assets/vendor-base-ui-eager-BVTTpYm_.js", "assets/flag-catalog-BJaXoOeP.js", "assets/vendor-es-toolkit-CQNapaF9.js", "assets/vendor-overlay-WeHoSqo7.js", "assets/vendor-schema-CyHzn7jr.js", "assets/vendor-firebase-core-bjLY_DoP.js", "assets/vendor-firebase-Dp4V3doB.js", "assets/vendor-tslib-CeDFfI6J.js", "assets/vendor-protobuf-BvDTVJFg.js", "assets/vendor-datefns-CALvQ3Vn.js", "assets/vendor-motion-Hvlv7m0n.js", "assets/app-shared-Wsr5ECzj.css", "assets/login-shared-leaves-DRum0qYb.js", "assets/ui-password-input-DxOwVSEA.js", "assets/ui-alert-C_SwFFEV.js", "assets/ui-password-input-BcX6uEiW.css", "assets/vendor-base-ui-lazy-B023JbQA.js", "assets/vendor-base-ui-chrome-CdtDcIlx.js", "assets/settings-shared-leaves-B-HU8sMN.js", "assets/route-shared-leaves-Cd6hFGLK.js", "assets/ui-shared-leaves-BBQog2OW.js", "assets/vendor-hook-form-CL-xHDfs.js", "assets/dashboard-shared-D-f1d4US.css", "assets/figParseClient-DP73SSAF.js", "assets/parseFig-CY-1UfO6.js", "assets/figKnowledge-BhTCTuz0.js"]))) => i.map(i => d[i]);
import {
    o as J
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    $L as se,
    Ad as oe,
    CR as ie,
    HM as I,
    Md as ae,
    Nx as Q,
    RS as ce,
    Ud as le,
    Zb as de,
    kd as ue
} from "./app-shared-6CLVfi8w.js";
import {
    i as me,
    n as pe,
    r as fe
} from "./vendor-react-Fx2PtaaM.js";
import {
    Qu as ge,
    kb as he
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    d as ve,
    u as _e
} from "./i18n-fn/figImport-7zkAE4Ir.js";
import {
    Jt as be,
    Qt as Ee,
    Xt as ye,
    Yt as we,
    Zt as Se,
    qt as Ie
} from "./i18n-fn/_misc-D8ok4lJW.js";
import {
    S as Ce
} from "./vendor-motion-Hvlv7m0n.js";
import {
    As as Fe,
    Ds as ke,
    Ei as j,
    Na as De,
    Os as Me,
    f as Le,
    ki as ze,
    ks as Te,
    ls as Re,
    or as X,
    sr as xe,
    xr as H
} from "./dashboard-shared-BN9MnewY.js";
import {
    hg as Ae
} from "./app-lazy-shared-BNTl480s.js";
import {
    a as Z,
    i as Be,
    o as Pe,
    r as je,
    t as Oe
} from "./imageInputCompressionJobs-D_5nD86d.js";
import {
    a as Ue,
    r as Ne
} from "./imageUpload-DdkqqYC6.js";
import {
    a as V,
    c as Ve,
    d as qe,
    g as Ge,
    h as $e,
    i as Xe,
    m as Ze,
    n as q,
    o as Ye,
    r as He
} from "./ChatFileAttachmentsProvider-Fo6kqjVr.js";
import {
    t as Je
} from "./es-CqERPaIX.js";
try {
    (function() {
        var s = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            c = new s.Error().stack;
        c && (s._sentryDebugIds = s._sentryDebugIds || {}, s._sentryDebugIds[c] = "684b8b50-7325-4114-85d7-59e4525b6527", s._sentryDebugIdIdentifier = "sentry-dbid-684b8b50-7325-4114-85d7-59e4525b6527")
    })()
} catch {}
var n = J(me(), 1),
    Qe = J(pe(), 1),
    M = fe(),
    Ke = ({
        getRootProps: s,
        portalTargetRef: c,
        isDragReject: f
    }) => {
        const [a, E] = (0, n.useState)(!1), [D, L] = (0, n.useState)(!1), [z, g] = (0, n.useState)(!1), S = (0, n.useRef)(0), [x, O] = (0, n.useState)();
        qe(a, () => {
            S.current = 0, E(!1)
        }), (0, n.useEffect)(() => {
            L(!0)
        }, []);
        const e = D ? c ? .current ? ? document.body : null,
            y = e !== null && e !== document.body;
        return (0, n.useEffect)(() => {
            if (!e || !y) return;
            const i = h => {
                    h.dataTransfer ? .types.includes("Files") && h.preventDefault()
                },
                u = e.ownerDocument;
            return u.addEventListener("dragover", i, !0), u.addEventListener("drop", i, !0), () => {
                u.removeEventListener("dragover", i, !0), u.removeEventListener("drop", i, !0)
            }
        }, [e, y]), (0, n.useLayoutEffect)(() => {
            if (!e || !y || !z) return;
            const i = () => {
                const u = e.getBoundingClientRect(),
                    h = window.visualViewport,
                    C = h ? .offsetTop ? ? 0,
                    d = C + (h ? .height ? ? window.innerHeight),
                    v = Math.max(u.top, C);
                O({
                    top: v - u.top,
                    height: Math.max(0, Math.min(u.bottom, d) - v)
                })
            };
            return i(), window.addEventListener("resize", i), window.addEventListener("scroll", i, !0), window.visualViewport ? .addEventListener("resize", i), window.visualViewport ? .addEventListener("scroll", i), () => {
                window.removeEventListener("resize", i), window.removeEventListener("scroll", i, !0), window.visualViewport ? .removeEventListener("resize", i), window.visualViewport ? .removeEventListener("scroll", i)
            }
        }, [e, y, z]), (0, n.useEffect)(() => {
            if (!e) return;
            const i = d => {
                    d.preventDefault(), d.stopPropagation()
                },
                u = d => {
                    d.preventDefault(), d.stopPropagation(), S.current--, S.current <= 0 && (S.current = 0, E(!1))
                },
                h = d => {
                    d.preventDefault(), d.stopPropagation(), S.current++, d.dataTransfer ? .types.includes("Files") && !Le(e.ownerDocument) && (g(!0), E(!0))
                },
                C = d => {
                    d.preventDefault(), d.stopPropagation(), S.current = 0, E(!1)
                };
            return e.addEventListener("dragenter", h), e.addEventListener("dragleave", u), e.addEventListener("dragover", i), e.addEventListener("drop", C), () => {
                e.removeEventListener("dragenter", h), e.removeEventListener("dragleave", u), e.removeEventListener("dragover", i), e.removeEventListener("drop", C)
            }
        }, [e]), (0, n.useEffect)(() => {
            if (!e || !a) return;
            const i = e.style.overflow;
            return e.style.overflow = "hidden", () => {
                e.style.overflow = i
            }
        }, [a, e]), e ? (0, Qe.createPortal)((0, M.jsx)("div", { ...s(),
            "aria-hidden": a ? void 0 : !0,
            style: y && x ? { ...x,
                bottom: "auto",
                maxHeight: "100dvh"
            } : void 0,
            className: ie("inset-0 z-30 flex items-center justify-center", y ? "absolute pl-3" : "fixed", a ? "pointer-events-auto" : "pointer-events-none"),
            children: (0, M.jsxs)(Ce, {
                onExitComplete: () => g(!1),
                children: [a ? (0, M.jsx)(Ge, {
                    className: "pointer-events-none absolute inset-0"
                }, "scrim") : null, a ? (0, M.jsx)(Ze, {
                    className: "inset-2"
                }, "border") : null, a ? (0, M.jsx)("div", {
                    className: "relative min-w-0 px-4 py-10",
                    children: (0, M.jsx)($e, {
                        isDragReject: f
                    })
                }, "content") : null]
            })
        }), e) : null
    },
    We = Math.round(Me / ke);

function et(s, c) {
    return s.composedPath().includes(c)
}
var ht = ({
        portalTargetRef: s,
        pasteTargetRef: c,
        onDropAccepted: f,
        onAuthRequired: a,
        enablePasteListener: E = !0,
        registerAsFileHandler: D = !0
    }) => {
        const {
            focusChatInput: L,
            registerAddFiles: z
        } = De(), g = Q(), S = se(), x = (0, n.useRef)(a);
        x.current = a;
        const O = (0, n.useRef)(f);
        O.current = f;
        const e = X(o => o.setImages),
            y = X(o => o.images),
            i = X(o => o.setImagesAddedViaDropdown),
            {
                store: u
            } = xe(),
            h = (0, n.useRef)(y);
        h.current = y;
        const C = (0, n.useRef)(S);
        C.current = S;
        const d = Ue(),
            v = (0, n.useRef)(d);
        v.current = d;
        const G = (0, n.useRef)(0),
            T = (0, n.useRef)(!0);
        (0, n.useEffect)(() => (T.current = !0, () => {
            T.current = !1
        }), []);
        const U = (0, n.useCallback)((o, p) => {
                if (!C.current) return x.current ? .(), !1;
                const _ = h.current;
                if (_.some(r => r.compressing)) return I.info("Images are still compressing", {
                    description: "Wait for compression to finish before adding more files."
                }), !1;
                const m = Be(_),
                    t = Fe({
                        files: o,
                        existingImageSize: m,
                        maxFileSize: v.current
                    });
                for (const r of t.rejectedFiles) r.reason !== "file-too-large" || !j(r.file.name) || g.emit(q, V({
                    stage: "size_check",
                    fileSizeBytes: r.file.size ? ? 0,
                    maxFileSizeBytes: v.current,
                    parseDurationMs: 0
                }));
                if (tt(t.rejectedFiles, v.current), t.attachableFiles.length === 0) return !1;
                const w = _.filter(r => !H(r)),
                    l = p ? 0 : Z(t.attachableFiles);
                if (Z(w) + l > 10) {
                    if (!p)
                        for (const r of t.attachableFiles) j(r.name) && g.emit(q, V({
                            stage: "count_check",
                            fileSizeBytes: r.size ? ? 0,
                            maxFileSizeBytes: v.current,
                            parseDurationMs: 0
                        }));
                    return I.error("File limit reached", {
                        description: Pe([...w, ...t.attachableFiles])
                    }), !1
                }
                const b = new Set(t.filesToCompress),
                    A = [],
                    B = new Map,
                    P = t.attachableFiles.map(r => {
                        const R = b.has(r),
                            k = de(),
                            N = URL.createObjectURL(r);
                        return R && t.targetSize !== null && A.push({
                            id: k,
                            file: r,
                            targetSize: t.targetSize
                        }), B.set(r, k), {
                            url: N,
                            originalBlobUrl: N,
                            mimeType: Ae(r.name, r.type),
                            name: r.name,
                            size: r.size,
                            uploading: !1,
                            uploaded: !1,
                            compressing: R,
                            compressionOriginalSize: R ? r.size : void 0,
                            id: k,
                            ...p ? {
                                companionOf: p
                            } : {}
                        }
                    });
                if (e(r => [...r, ...P]), A.length > 0) {
                    const r = G.current + 1;
                    G.current = r;
                    const R = () => G.current !== r;
                    je({
                        jobs: A,
                        maxFileSize: v.current,
                        isStale: R,
                        setImages: k => {
                            e(k)
                        },
                        onFailure: ({
                            failedCount: k,
                            totalCapFailedCount: N
                        }) => {
                            if (!(!T.current || R())) {
                                if (N > 0) {
                                    I.error("Images too large", {
                                        description: Oe
                                    });
                                    return
                                }
                                k > 0 && I.error(k > 1 ? "Some images could not be compressed" : "Image could not be compressed", {
                                    description: "Remove failed images or use smaller files."
                                })
                            }
                        }
                    })
                }
                return B
            }, [g, e]),
            F = (0, n.useCallback)(o => {
                if (!o.some(m => j(m.name))) return U(o) !== !1;
                const p = ze(o, u.getState().images),
                    _ = U(p);
                if (!_) return !1;
                for (const m of p) {
                    if (!j(m.name)) continue;
                    const t = _.get(m);
                    if (!t) continue;
                    e(l => l.map(b => b.id === t ? { ...b,
                        parsingCompanions: !0
                    } : b));
                    const w = performance.now();
                    he(async () => {
                        const {
                            buildFigCompanionArtifacts: l
                        } = await
                        import ("./figCompanions-DgZqAV7g.js");
                        return {
                            buildFigCompanionArtifacts: l
                        }
                    }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36])).then(({
                        buildFigCompanionArtifacts: l
                    }) => l(m)).then(l => {
                        const b = Math.round(performance.now() - w),
                            A = u.getState().images.some(r => r.id === t);
                        let B = !1;
                        T.current && A && (B = U(l.files, t) !== !1);
                        let P = "abandoned";
                        l.knowledgeEmpty ? P = "empty_companions" : B && (P = "attached"), g.emit(He, Ye({
                            outcome: P,
                            fileSizeBytes: m.size,
                            parseDurationMs: b,
                            artifacts: l
                        }))
                    }).catch(l => {
                        g.emit(q, V({
                            stage: "parse",
                            error: l,
                            fileSizeBytes: m.size,
                            maxFileSizeBytes: v.current,
                            parseDurationMs: Math.round(performance.now() - w)
                        })), Xe(l, "useImageInput"), T.current && I.error(ve(), {
                            description: _e()
                        })
                    }).finally(() => {
                        T.current && e(l => l.map(b => b.id === t ? { ...b,
                            parsingCompanions: !1
                        } : b))
                    })
                }
                return !0
            }, [U, u, g, e]),
            K = (0, n.useCallback)(o => {
                F(o) && (ce() || L(), O.current ? .())
            }, [F, L]),
            W = (0, n.useCallback)(o => {
                let p = !1;
                const _ = "files",
                    m = "File";
                for (const t of o)
                    if (t.errors.length > 0) {
                        let w = t.errors[0].message,
                            l = t.errors[0].code;
                        if (t.errors[0].code === "too-many-files") {
                            if (j(t.file.name) && g.emit(q, V({
                                    stage: "count_check",
                                    fileSizeBytes: t.file.size ? ? 0,
                                    maxFileSizeBytes: v.current,
                                    parseDurationMs: 0
                                })), p) continue;
                            l = `${m} limit reached`, w = `Please limit your message to 10 ${_}.`, p = !0
                        }
                        I.error(l, {
                            description: w
                        })
                    }
            }, [g]),
            ee = Z(y.filter(o => !H(o))),
            {
                getInputProps: te,
                getRootProps: re,
                isDragReject: ne,
                inputRef: Y
            } = Je({
                onDrop: K,
                noClick: !0,
                noKeyboard: !0,
                maxFiles: 10 - ee,
                accept: void 0,
                onDropRejected: W
            }),
            $ = (0, n.useCallback)(() => {
                const o = Y.current;
                o && (o.value = "", o.click())
            }, [Y]);
        return (0, n.useEffect)(() => {
            if (!E) return;
            const o = p => {
                const _ = c ? .current;
                if (_ && !et(p, _)) return;
                const m = Ne(p.clipboardData);
                if (m.length > 0) {
                    const t = document.activeElement,
                        w = !!t && (t.isContentEditable || t.tagName === "TEXTAREA" || t.tagName === "INPUT");
                    F(m) && !w && L();
                    return
                }
                Ve().then(t => {
                    t.length > 0 && F(t)
                })
            };
            return window.addEventListener("paste", o), () => window.removeEventListener("paste", o)
        }, [F, L, E, c]), (0, n.useEffect)(() => {
            if (D) return z(F), () => z(null)
        }, [z, F, D]), {
            dropzoneElement: (0, M.jsx)(Ke, {
                getRootProps: re,
                portalTargetRef: s,
                isDragReject: ne
            }),
            openFileUpload: $,
            openFileUploadFromDropdown: (0, n.useCallback)(() => {
                i(!0), $()
            }, [$, i]),
            getInputProps: te,
            addImages: F
        }
    },
    tt = (s, c) => {
        rt(s);
        const f = s.filter(a => a.reason === "file-too-large");
        if (f.length > 0) {
            const a = Te(c);
            I.error(be({
                count: f.length
            }), {
                description: Ie({
                    count: f.length,
                    limit: a
                })
            })
        }
        s.filter(a => a.reason === "images-too-large").length > 0 && I.error("Images too large", {
            description: `Combined image size is over ${We} MB. Try splitting into smaller batches.`
        })
    },
    rt = s => {
        const c = s.filter(f => f.reason === "empty-file");
        c.length !== 0 && I.error(Se({
            count: c.length
        }), {
            description: c.length > 1 ? we() : ye({
                name: c[0] ? .file.name || Ee()
            })
        })
    },
    vt = s => s && s !== "auto" ? le(s) : ge();

function _t(s) {
    const c = Q(),
        {
            selectedModel: f,
            setSelectedModel: a
        } = oe();
    return {
        selectedModel: f,
        availableModels: ae(),
        selectModel: (0, n.useCallback)(E => {
            c.emit(Re, {
                model: E,
                projectId: s
            });
            const D = E;
            a(D), ue(D)
        }, [c, s, a])
    }
}
var bt = {
        chatInputActionMenu: "chat_input_action_menu",
        launchpadCreateFormPlusMenu: "launchpad_create_form_plus_menu"
    },
    Et = {
        opened: "opened",
        projectSettingsClicked: "project_settings_clicked",
        historyClicked: "history_clicked",
        knowledgeClicked: "knowledge_clicked",
        designSystemClicked: "design_system_clicked",
        githubClicked: "github_clicked",
        gitlabClicked: "gitlab_clicked",
        screenshotClicked: "screenshot_clicked",
        addReferenceClicked: "add_reference_clicked",
        addSkillClicked: "add_skill_clicked",
        attachClicked: "attach_clicked",
        contactSupportClicked: "contact_support_clicked",
        helpClicked: "help_clicked",
        connectorsSubmenuOpened: "connectors_submenu_opened",
        manageIntegrationsClicked: "manage_integrations_clicked",
        mcpServerClicked: "mcp_server_clicked",
        appConnectorClicked: "app_connector_clicked",
        connectionClicked: "connection_clicked",
        appUserConnectorClientClicked: "app_user_connector_client_clicked"
    };
export {
    ht as a, _t as i, bt as n, vt as r, Et as t
};
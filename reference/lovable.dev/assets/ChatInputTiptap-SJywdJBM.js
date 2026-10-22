import {
    o as on
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    BS as cn,
    CR as Z,
    HM as W,
    NM as ln,
    Nx as un,
    UF as dn,
    WL as pn,
    ds as fn,
    gs as Rt,
    ls as mn,
    wj as gn,
    zM as hn
} from "./app-shared-6CLVfi8w.js";
import {
    i as yn,
    r as Mn
} from "./vendor-react-Fx2PtaaM.js";
import {
    $n as Sn,
    Qn as vn,
    Xn as Tn,
    Yn as xn,
    Zn as Cn
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    Gt as bn,
    Wt as En,
    tt as An
} from "./i18n-fn/_misc-D8ok4lJW.js";
import {
    Bt as Nn,
    Dt as Lt,
    Ft as kt,
    It as _n,
    Lt as wn,
    Nt as Rn,
    Ot as Ln,
    Pt as kn,
    Rt as Pn,
    Ut as In,
    Vt as Fe,
    kt as Dn,
    zt as On
} from "./create-form-shared-Ch3tkVo8.js";
import {
    Nt as Hn
} from "./flag-catalog-BJaXoOeP.js";
import {
    ot as Fn
} from "./i18n-fn/chat--pastedText-D6ghLlfh.js";
import {
    Gt as jn,
    Ir as $n,
    Jt as Vn,
    Kr as Wn,
    Na as $t,
    Sr as Bn,
    bo as Kn,
    ca as te,
    en as zn,
    oa as Un,
    or as ee,
    rn as Jn,
    sr as Vt,
    xo as qn
} from "./dashboard-shared-BN9MnewY.js";
import {
    Os as Gn,
    To as Xn,
    Xt as Yn,
    ax as ne,
    jd as Qn
} from "./app-lazy-shared-BNTl480s.js";
import {
    h as Zn
} from "./ui-alert-C_SwFFEV.js";
import {
    t as er
} from "./useIsLovableAIEnabledForWorkspace-CPU1VsRZ.js";
import {
    A as tr,
    At as je,
    F as re,
    O as nr,
    Ot as Be,
    _ as rr,
    c as se,
    ft as Ke,
    g as sr,
    m as ar,
    o as ir,
    s as ae,
    u as or
} from "./vendor-editor-BxXM5pDU.js";
import {
    a as cr,
    c as lr,
    d as ur,
    l as Pt,
    o as It,
    t as dr
} from "./useMentionSuggestion-Iaf9z1kk.js";
import {
    t as pr
} from "./collectionMentionContext-DrIr08zO.js";
import {
    t as Dt
} from "./useCollectionArtifacts-CEAllIOG.js";
import {
    r as fr
} from "./imageUpload-DdkqqYC6.js";
import {
    t as mr
} from "./useOpenWorkspaceSkillPreview-Dq_wUueK.js";
import {
    n as gr,
    t as hr
} from "./connectorPillNavigationSources-DIHOXwip.js";
import {
    n as Wt
} from "./usePastedTextArtifacts-VQNCUXwC.js";
import {
    S as yr,
    T as Mr,
    _ as Sr,
    a as vr,
    b as We,
    c as Tr,
    d as xr,
    f as Cr,
    g as br,
    h as Er,
    l as Ar,
    o as Nr,
    s as _r,
    t as wr,
    u as Rr,
    v as Lr,
    w as kr,
    x as Pr,
    y as Ir
} from "./WorkspaceFileMention-arqbxXbT.js";
import {
    t as Dr
} from "./useCommandPaletteStore-DpEA0WJS.js";
import {
    n as Or,
    t as Hr
} from "./securityFindingMention-BNBtO7-e.js";
import {
    i as $e,
    n as Fr,
    o as jr,
    r as $r,
    t as Vr
} from "./sentMessageHistory-B7ar9KNt.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "710e9d9e-deb1-409e-8574-73360d527c3c", e._sentryDebugIdIdentifier = "sentry-dbid-710e9d9e-deb1-409e-8574-73360d527c3c")
    })()
} catch {}
var a = on(yn(), 1),
    h = Mn(),
    Wr = ({
        node: e,
        deleteNode: r
    }) => {
        const i = e.attrs.title,
            c = e.attrs.id ? `Task: ${i}` : `Proposed task: ${i}`;
        return (0, h.jsx)(ae, {
            as: "span",
            className: "inline",
            dir: "ltr",
            contentEditable: !1,
            children: (0, h.jsx)(ne, {
                label: i,
                tooltip: c,
                variant: "roadmap",
                onRemove: r,
                truncate: !0
            })
        })
    },
    Br = re.create({
        name: "roadmapTaskMention",
        group: "inline",
        inline: !0,
        selectable: !1,
        atom: !0,
        addOptions() {
            return {
                HTMLAttributes: {}
            }
        },
        addAttributes() {
            return {
                id: {
                    default: null,
                    parseHTML: e => e.getAttribute("data-id"),
                    renderHTML: e => e.id ? {
                        "data-id": e.id
                    } : {}
                },
                title: {
                    default: null,
                    parseHTML: e => e.getAttribute("data-title"),
                    renderHTML: e => e.title ? {
                        "data-title": e.title
                    } : {}
                },
                status: {
                    default: null,
                    parseHTML: e => e.getAttribute("data-status"),
                    renderHTML: e => e.status ? {
                        "data-status": e.status
                    } : {}
                }
            }
        },
        parseHTML() {
            return [{
                tag: `span[data-type="${this.name}"]`
            }]
        },
        renderHTML({
            HTMLAttributes: e
        }) {
            return ["span", Ke({
                "data-type": this.name
            }, this.options.HTMLAttributes, e)]
        },
        renderText({
            node: e
        }) {
            const r = mn(String(e.attrs.title ? ? ""));
            return e.attrs.id ? `@roadmap:${e.attrs.id}:"${r}"` : `@proposed-task:"${r}"`
        },
        addNodeView() {
            return se(e => (0, h.jsx)(Wr, { ...e
            }), {
                as: "span",
                className: "roadmap-task-mention-wrapper"
            })
        }
    }),
    Kr = ({
        node: e,
        deleteNode: r
    }) => {
        const i = e.attrs.name,
            c = Yn().has(i);
        return (0, h.jsx)(ae, {
            as: "span",
            className: "inline",
            dir: "ltr",
            contentEditable: !1,
            children: (0, h.jsx)(ne, {
                label: i,
                tooltip: c ? `Replaces the existing "${i}" secret in this project when you send.` : "Saved as a secret. The value is hidden and stays out of your message.",
                variant: c ? "security-finding" : "secret",
                icon: c ? Zn : void 0,
                onRemove: r
            })
        })
    },
    zr = (e, r) => {
        const i = new RegExp(String.raw `@secret:${r.replace(/[^\w]/g,String.raw`\$&`)}\b`, "g"),
            c = [];
        return e.descendants((u, p) => {
            if (!(!u.isText || !u.text))
                for (const l of u.text.matchAll(i)) c.push({
                    from: p + l.index,
                    to: p + l.index + l[0].length
                })
        }), c
    },
    Ur = re.create({
        name: Vn,
        group: "inline",
        inline: !0,
        selectable: !1,
        atom: !0,
        addAttributes() {
            return {
                id: {
                    default: null,
                    parseHTML: e => e.getAttribute("data-id"),
                    renderHTML: e => e.id ? {
                        "data-id": e.id
                    } : {}
                },
                name: {
                    default: null,
                    parseHTML: e => e.getAttribute("data-name"),
                    renderHTML: e => e.name ? {
                        "data-name": e.name
                    } : {}
                }
            }
        },
        parseHTML() {
            return [{
                tag: `span[data-type="${this.name}"]`
            }]
        },
        renderHTML({
            HTMLAttributes: e
        }) {
            return ["span", Ke({
                "data-type": this.name
            }, e)]
        },
        renderText({
            node: e
        }) {
            return e.attrs.name ? `@secret:${e.attrs.name}` : ""
        },
        addNodeView() {
            return se(e => (0, h.jsx)(Kr, { ...e
            }), {
                as: "span",
                className: "secret-mention-wrapper"
            })
        },
        addCommands() {
            return {
                insertSecretMention: (e, r) => ({
                    commands: i
                }) => i.insertContent([{
                    type: this.name,
                    attrs: {
                        id: e,
                        name: r
                    }
                }, {
                    type: "text",
                    text: " "
                }]),
                removeSecretMentions: e => ({
                    state: r,
                    tr: i,
                    dispatch: c
                }) => {
                    const u = [];
                    if (r.doc.descendants((p, l) => {
                            p.type.name === this.name && p.attrs.name === e && u.push({
                                from: l,
                                to: l + p.nodeSize
                            })
                        }), u.push(...zr(r.doc, e)), u.length === 0) return !1;
                    if (!c) return !0;
                    zn(e), u.sort((p, l) => l.from - p.from);
                    for (const p of u) {
                        const l = r.doc.textBetween(p.to, Math.min(p.to + 1, r.doc.content.size));
                        i.delete(i.mapping.map(p.from), i.mapping.map(l === " " ? p.to + 1 : p.to))
                    }
                    return !0
                }
            }
        }
    }),
    Jr = ({
        node: e,
        deleteNode: r
    }) => {
        const i = e.attrs.name,
            c = e.attrs.level,
            u = e.attrs.ids,
            p = e.attrs.memberNounPlural ? ? "findings",
            l = u && u.length > 1 ? `Security finding family (${u.length} ${p}, ${c})` : `Security finding (${c})`;
        return (0, h.jsx)(ae, {
            as: "span",
            className: "inline",
            dir: "ltr",
            contentEditable: !1,
            children: (0, h.jsx)(ne, {
                label: i,
                tooltip: l,
                variant: "security-finding",
                onRemove: r,
                truncate: !0
            })
        })
    },
    qr = e => {
        if (!e) return null;
        try {
            const r = JSON.parse(e);
            return Array.isArray(r) && r.every(i => typeof i == "string") ? r : null
        } catch {
            return null
        }
    },
    Gr = re.create({
        name: "securityFindingMention",
        group: "inline",
        inline: !0,
        selectable: !1,
        atom: !0,
        addOptions() {
            return {
                HTMLAttributes: {}
            }
        },
        addAttributes() {
            return {
                id: {
                    default: null,
                    parseHTML: e => e.getAttribute("data-id"),
                    renderHTML: e => e.id ? {
                        "data-id": e.id
                    } : {}
                },
                ids: {
                    default: null,
                    parseHTML: e => qr(e.getAttribute("data-ids")),
                    renderHTML: e => Hr(e.ids) ? {
                        "data-ids": JSON.stringify(e.ids)
                    } : {}
                },
                memberNounPlural: {
                    default: null,
                    parseHTML: e => e.getAttribute("data-member-noun-plural"),
                    renderHTML: e => e.memberNounPlural ? {
                        "data-member-noun-plural": e.memberNounPlural
                    } : {}
                },
                name: {
                    default: null,
                    parseHTML: e => e.getAttribute("data-name"),
                    renderHTML: e => e.name ? {
                        "data-name": e.name
                    } : {}
                },
                source: {
                    default: null,
                    parseHTML: e => e.getAttribute("data-source"),
                    renderHTML: e => e.source ? {
                        "data-source": e.source
                    } : {}
                },
                level: {
                    default: null,
                    parseHTML: e => e.getAttribute("data-level"),
                    renderHTML: e => e.level ? {
                        "data-level": e.level
                    } : {}
                },
                description: {
                    default: null,
                    parseHTML: e => e.getAttribute("data-description"),
                    renderHTML: e => e.description ? {
                        "data-description": e.description
                    } : {}
                }
            }
        },
        parseHTML() {
            return [{
                tag: `span[data-type="${this.name}"]`
            }]
        },
        renderHTML({
            HTMLAttributes: e
        }) {
            return ["span", Ke({
                "data-type": this.name
            }, this.options.HTMLAttributes, e)]
        },
        renderText({
            node: e
        }) {
            return Or(e.attrs)
        },
        addNodeView() {
            return se(e => (0, h.jsx)(Jr, { ...e
            }), {
                as: "span",
                className: "security-finding-mention-wrapper"
            })
        },
        addCommands() {
            return {
                insertSecurityFindingMention: e => ({
                    commands: r
                }) => r.insertContent([{
                    type: this.name,
                    attrs: e
                }, {
                    type: "text",
                    text: " "
                }])
            }
        }
    }),
    Xr = (e, r) => {
        if (e.pastedText ? .source === void 0 || e.pastedText.upload ? .status !== "failed" || e.pastedText.lastGood !== void 0) return !1;
        const i = r.find(c => c.id === e.id) ? .pastedText ? .upload;
        return i !== void 0 && i.status !== "failed"
    },
    Yr = () => {
        const {
            store: e
        } = Vt(), {
            insertText: r
        } = $t(), {
            removePastedArtifact: i
        } = Wt(), c = (0, a.useRef)({
            insertText: r,
            removePastedArtifact: i
        });
        c.current = {
            insertText: r,
            removePastedArtifact: i
        }, (0, a.useEffect)(() => {
            const u = (l, m) => {
                    const g = e.getState().images.find(v => v.id === l),
                        x = g ? .pastedText ? .upload;
                    return x ? .status === "failed" && x.candidateId === m ? g : void 0
                },
                p = (l, m) => {
                    const g = u(l, m) ? .pastedText,
                        x = e.getState().message,
                        v = g ? .content === void 0 ? void 0 : `${x.trim()?`

`:""}${g.content}`;
                    if (g === void 0 || v === void 0 || te(x) + te(v) > 5e4 || !Bn(g.title, v).safe) return;
                    const {
                        insertText: _,
                        removePastedArtifact: C
                    } = c.current;
                    _(v, {
                        position: "end",
                        focus: !1
                    }).then(ie => {
                        !ie || u(l, m) === void 0 || (C(l, {
                            silent: !0
                        }), W.info(Fn(), {
                            description: (0, h.jsx)("span", {
                                className: "fs-mask",
                                children: g.title
                            })
                        }))
                    })
                };
            return e.subscribe((l, m) => {
                for (const g of l.images) {
                    if (!Xr(g, m.images)) continue;
                    const {
                        candidateId: x
                    } = g.pastedText.upload;
                    queueMicrotask(() => p(g.id, x))
                }
            })
        }, [e])
    },
    Qr = re.create({
        name: "analyticsDataMention",
        group: "inline",
        inline: !0,
        selectable: !1,
        atom: !0,
        addAttributes() {
            return {
                title: {
                    default: "",
                    parseHTML: e => e.getAttribute("data-title")
                },
                tooltip: {
                    default: "",
                    parseHTML: e => e.getAttribute("data-tooltip")
                },
                snapshot: {
                    default: {},
                    parseHTML: e => {
                        try {
                            return JSON.parse(e.getAttribute("data-snapshot") ? ? "{}")
                        } catch {
                            return {}
                        }
                    }
                }
            }
        },
        parseHTML() {
            return [{
                tag: 'span[data-type="analyticsDataMention"]'
            }, {
                tag: 'span[data-type="audienceDataMention"]'
            }]
        },
        renderHTML({
            node: e
        }) {
            return ["span", {
                "data-type": this.name,
                "data-title": e.attrs.title,
                "data-tooltip": e.attrs.tooltip,
                "data-snapshot": JSON.stringify(e.attrs.snapshot)
            }]
        },
        renderText({
            node: e
        }) {
            return Wn(e.attrs)
        },
        addNodeView() {
            return se(({
                node: e,
                deleteNode: r
            }) => (0, h.jsx)(ae, {
                as: "span",
                className: "fs-mask inline",
                contentEditable: !1,
                children: (0, h.jsx)(ne, {
                    label: e.attrs.title,
                    tooltip: e.attrs.tooltip || e.attrs.title,
                    variant: "file",
                    onRemove: r,
                    truncate: !0
                })
            }), {
                as: "span"
            })
        },
        addCommands() {
            return {
                insertAnalyticsDataMention: e => ({
                    commands: r,
                    state: i
                }) => {
                    const c = i.schema.nodes[this.name].create(e);
                    let u = !1;
                    if (i.doc.descendants(m => (m.eq(c) && (u = !0), !u)), u) return !0;
                    const [p = "", l = ""] = An({
                        data: "{data}"
                    }).split("{data}");
                    return r.insertContent([...p ? [{
                        type: "text",
                        text: p
                    }] : [], {
                        type: this.name,
                        attrs: e
                    }, {
                        type: "text",
                        text: `${l} `
                    }])
                }
            }
        }
    }),
    Bt = () => {
        if (typeof document > "u") return !0;
        const e = document.activeElement;
        return e === null || e === document.body
    },
    Zr = e => {
        if (e.isDestroyed || !Bt()) return;
        const {
            state: r,
            view: i
        } = e;
        i.dispatch(r.tr.setSelection(Be.atEnd(r.doc)).scrollIntoView()), i.focus()
    },
    Ve = e => e ? .active && typeof e.range ? .from == "number" ? e.range.from : void 0,
    es = e => {
        const {
            view: r
        } = e;
        r.domObserver ? .flush();
        const i = Pt.getState(r.state),
            c = It.getState(r.state),
            u = We.getState(r.state),
            p = Ve(i) ? ? Ve(c) ? ? Ve(u),
            l = r.state.tr;
        if (p !== void 0) {
            const m = je.atStart(l.doc).from,
                g = je.atEnd(l.doc).to;
            l.setSelection(je.create(l.doc, Math.min(Math.max(p, m), g)))
        }
        l.setMeta(Pt, {
            exit: !0
        }), l.setMeta(It, {
            exit: !0
        }), l.setMeta(We, {
            exit: !0
        });
        try {
            r.dispatch(l)
        } catch (m) {
            if (!(m instanceof DOMException) || m.name !== "IndexSizeError") throw m;
            globalThis.o11y ? .captureException(m, {
                level: "error",
                location: "dismissChatSuggestions",
                type: "chat_suggestion_dismiss_index_size_error"
            })
        }
    },
    ts = (e, r) => {
        if (!e.schema.nodes.skillCommand) return [{
            type: "text",
            text: r
        }];
        const i = [];
        let c = 0;
        for (const u of fn(r)) u.type === "skill" && (u.startIndex > c && i.push({
            type: "text",
            text: r.slice(c, u.startIndex)
        }), i.push({
            type: "skillCommand",
            attrs: {
                name: u.skillName
            }
        }), c = u.endIndex);
        return c < r.length && i.push({
            type: "text",
            text: r.slice(c)
        }), i
    },
    Ot = (e, r, i) => {
        const c = ts(e, r),
            u = i ? .focus !== !1;
        if (i ? .position === "end") {
            if (u) return e.chain().focus("end").insertContent(c).run();
            const p = Be.atEnd(e.state.doc).to;
            return e.chain().insertContentAt(p, c).run()
        }
        return e.state.selection.empty || e.commands.setTextSelection(e.state.selection.to), u ? e.chain().focus().insertContent(c).run() : e.chain().insertContent(c).run()
    },
    Ht = {
        project: !0
    },
    Ft = 3e4,
    jt = e => e ? .type ? .name === "fileMention" || e ? .type ? .name === "documentMention" || e ? .type ? .name === "collectionMention" || e ? .type ? .name === "projectMention" || e ? .type ? .name === "workspaceFileMention" || e ? .type ? .name === "draftMention" || e ? .type ? .name === "securityFindingMention" || e ? .type ? .name === "roadmapTaskMention" || e ? .type ? .name === "analyticsDataMention" || e ? .type ? .name === "assetMention" || e ? .type ? .name === "connectorMention" || e ? .type ? .name === "skillCommand" || e ? .type ? .name === "maxCommand" || e ? .type ? .name === "planCommand" || e ? .type ? .name === "secretMention",
    ns = e => {
        const {
            selection: r
        } = e.state;
        return r.empty && r.$from.index(0) === 0 && e.endOfTextblock("up")
    },
    rs = e => {
        const {
            selection: r,
            doc: i
        } = e.state;
        return r.empty && r.$from.index(0) === i.childCount - 1 && e.endOfTextblock("down")
    },
    ss = ({
        minHeight: e = 40,
        id: r = "chatinput",
        className: i,
        contentClassName: c,
        placeholderClassName: u,
        placeholderEnterAnimation: p = !0,
        shouldAutoFocus: l,
        focusRequestKey: m = null,
        onFocusRequestHandled: g,
        registerImperativeFocus: x,
        placeholder: v,
        animatePlaceholder: _,
        disabled: C,
        ref: ie,
        projectId: y,
        enableConnectorAutoMatch: Kt = !1,
        enableTypedSuggestions: ze = !0,
        enableSkillSuggestions: zt = !0,
        triggerLocation: Ue = "project_chat_input",
        inlineChip: Je,
        onBackspaceAtStart: qe,
        onArrowUpOnEmpty: Ge,
        onCmdEnterOnEmpty: Xe,
        isOmniRecipient: oe = !1,
        onPlainTextPaste: Ye
    }) => {
        const {
            composerMenu: Ut,
            registerFocusHandler: ce,
            registerIsFocusedHandler: le,
            registerInsertFileMention: ue,
            registerInsertDocumentMention: de,
            registerInsertCollectionMention: pe,
            registerReplaceDocumentMention: fe,
            registerReplaceDocumentMentions: me,
            registerInsertAssetMention: ge,
            registerRemoveAssetMention: he,
            registerRemoveSecretMention: ye,
            registerInsertText: Me,
            registerInsertPlanCommand: Se,
            registerInsertSecurityFindingMention: ve,
            registerInsertAnalyticsDataMention: Te,
            addFilesRef: Jt,
            insertText: Qe
        } = $t(), P = ln(), qt = cn(), Ze = Ln(), et = (0, a.useRef)(Ze);
        et.current = Ze;
        const Gt = gn(Hn).enabled,
            {
                attachPastedText: Xt
            } = Wt(),
            tt = (0, a.useRef)(null);
        tt.current = Gt ? Xt : null, Yr();
        const nt = (0, a.useRef)(Qe);
        nt.current = Qe;
        const B = (0, a.useRef)(Ye);
        B.current = Ye;
        const rt = (0, a.useRef)(Ge);
        rt.current = Ge;
        const st = (0, a.useRef)(Xe);
        st.current = Xe;
        const {
            store: E
        } = Vt(), K = ee(t => t.externalContentVersion), I = ee(t => t.syncMessageFromEditor), at = ee(t => t.registerEditorJSONProvider), z = (0, a.useRef)(null), [Yt, Qt] = (0, a.useState)(!1), U = Gn(), j = Qn(), xe = (0, a.useCallback)(t => {
            z.current && z.current.textContent !== t && (z.current.textContent = t)
        }, []), T = (0, a.useRef)(null), Ce = (0, a.useRef)(null), [it, J] = (0, a.useState)(() => {
            const {
                message: t,
                editorContentJSON: n
            } = E.getState();
            return !t && Nn(n)
        }), be = (0, a.useRef)(null), ot = (0, a.useRef)(qe);
        ot.current = qe;
        const D = Je != null,
            Ee = (0, a.useRef)(null),
            q = !!U && !!j && !P,
            ct = !!j && !P,
            {
                canOpenWorkspaceSkillPreview: lt,
                openWorkspaceSkillPreview: ut
            } = mr(),
            Ae = (0, a.useRef)({
                canOpen: lt,
                open: ut
            });
        Ae.current = {
            canOpen: lt,
            open: ut
        };
        const Ne = (0, a.useRef)(y);
        Ne.current = y;
        const {
            isEnabled: dt
        } = er();
        (0, a.useEffect)(() => {
            wn.getState().setContext(y ? ? null, dt)
        }, [y, dt]);
        const L = (0, a.useRef)(null),
            $ = (0, a.useCallback)(t => {
                const n = T.current;
                n && (n.chain().setContent(Rt(t).matches.length > 0 ? Fe(t) : t, {
                    emitUpdate: !1,
                    parseOptions: {
                        preserveWhitespace: "full"
                    }
                }).focus("end").run(), I(n.getText().trim()), J(n.isEmpty))
            }, [I]),
            Zt = (0, a.useCallback)(t => {
                const n = Ne.current,
                    o = T.current;
                if (!n || !o) return !1;
                const d = L.current;
                if (d) {
                    if (!ns(t)) return !1;
                    const M = $r(d);
                    return M !== d && (L.current = M, $($e(M))), !0
                }
                if (!o.isEmpty) return !1;
                const f = jr(Vr(n));
                return f === null ? !1 : (L.current = f, $($e(f)), !0)
            }, [$]),
            en = (0, a.useCallback)(t => {
                const n = L.current;
                if (n === null || T.current === null || !rs(t)) return !1;
                const o = Fr(n);
                return L.current = o, $(o === null ? "" : $e(o)), !0
            }, [$]),
            pt = (0, a.useCallback)((t, n) => {
                if (!q || !U || !j) return;
                const {
                    openFile: o,
                    openFileAtLine: d
                } = U.getState();
                n ? d(t, n) : o(t), j.getState().switchToViewRaw("codeEditor")
            }, [q, U, j]),
            ft = Xn(),
            mt = (0, a.useCallback)(t => ft(t, "document-id", "chat_message"), [ft]),
            gt = (0, a.useCallback)(t => {
                Ae.current.canOpen && Ae.current.open(t)
            }, []),
            G = un(),
            O = (0, a.useRef)(Ue);
        O.current = Ue;
        const ht = gr(hr.projectChatInput),
            yt = (0, a.useCallback)((t, n) => {
                G.emit(Kn, {
                    referenceType: "connector",
                    connectorId: t,
                    projectId: y ? ? void 0,
                    triggerLocation: O.current
                })
            }, [G, y]),
            _e = (0, a.useCallback)((t, n, o) => {
                G.emit(qn, {
                    referenceType: "connector",
                    connectorId: t,
                    projectId: y ? ? void 0,
                    triggerLocation: O.current,
                    removalMethod: o
                })
            }, [G, y]),
            [tn, nn] = (0, a.useState)(!1),
            A = Dt(y, void 0, tn, {
                staleTime: Ft,
                gcTime: Ft
            }),
            we = ee(t => Rt(t.message).artifactIds.join(",")),
            Re = (0, a.useMemo)(() => we ? we.split(",") : [], [we]),
            w = Dt(y, Re),
            Le = w.isScopeCurrent,
            rn = (0, a.useMemo)(() => ({
                artifactIds: Re,
                access: w
            }), [Re, w]),
            sn = (0, a.useMemo)(() => A.canReference && !C ? A.collections.filter(t => t.can_reference).map(t => ({
                type: "collection",
                id: t.artifact_id,
                name: t.name
            })) : [], [A.canReference, A.collections, C]),
            X = (0, a.useRef)(() => !1);
        X.current = () => !C && w.isScopeCurrent(w.actorId, y, !0);
        const Mt = Tr({
                isOmniRecipient: oe,
                isBuilderComposer: !0,
                enabled: ze,
                skillsEnabled: zt
            }),
            {
                notifySlashInsertionStarted: St,
                notifySlashTyped: ke
            } = Mt,
            {
                suggestionOptions: vt,
                skillSuggestionOptions: Tt,
                validateFilePath: xt,
                isSuggestionActive: Ct,
                notifyAtTyped: Pe,
                connectorAutoMatchEnabled: bt
            } = dr({
                control: Ut,
                editorRef: T,
                enableConnectorAutoMatch: Kt,
                enableTypedSuggestions: ze,
                skills: Mt,
                workspaceFileMentions: !0,
                getComposerText: () => E.getState().message,
                onOpen: () => nn(!0),
                collections: sn,
                selectCollection: (t, n, o) => {
                    const d = A.actorId;
                    return Nr(n, o, async () => {
                        if (!d || !y) return "aborted";
                        const f = await A.resolveCurrent(t.id, !0);
                        return f ? {
                            actorId: d,
                            projectId: y,
                            artifactId: f.artifact_id,
                            label: f.name
                        } : A.isScopeCurrent(d, y, !0) ? void 0 : "aborted"
                    }, (f, M) => X.current() && Le(f, M, !0))
                }
            }),
            {
                suggestionOptions: Et,
                isSuggestionActive: At,
                notifyColonTyped: Ie
            } = Ar(),
            Nt = (0, a.useRef)(!1);
        Nt.current = A.available || w.available;
        const an = (0, a.useMemo)(() => [tr, sr, ar, nr, rr, Lr, vr.configure({
                enabled: () => X.current(),
                hydrationReady: () => Nt.current
            }), lr.configure({
                onNavigateToFile: q ? pt : void 0
            }), yr.configure({
                onNavigateToDocument: ct ? mt : void 0
            }), Cr.configure({
                onNavigateToProject: void 0
            }), Gr, Br, Qr, Ur, Mr, wr, Pr, kr.configure({
                onNavigateToConnector: ht,
                onAutoMatch: yt,
                onRemove: _e,
                enableAutoMatch: bt
            }), cr.configure({
                onNavigateToSkill: gt
            }), Sr, Er, br.configure({
                suggestion: vt
            }), xr.configure({
                suggestion: Tt
            }), Ir.configure({
                getEmoji: Rr,
                suggestion: Et
            })], [q, ct, bt, Et, ht, yt, _e, pt, mt, gt, vt, Tt]),
            s = or({
                extensions: an,
                immediatelyRender: !1,
                content: E.getState().editorContentJSON ? ? Fe(E.getState().message),
                editable: !C,
                editorProps: {
                    attributes: {
                        style: `min-height: ${e}px;`,
                        class: Z(jn, "outline-hidden", "prose prose-sm", "overflow-wrap-anywhere break-words whitespace-pre-wrap", c),
                        role: "textbox",
                        "aria-label": Lt(_, v),
                        "aria-multiline": "true"
                    },
                    handleTextInput: (t, n, o, d) => (d === "@" ? Pe() : d === "/" ? ke(t.state, n) : d === ":" && Ie(), !1),
                    handleKeyDown: (t, n) => {
                        if (Dr(n, "chat_input")) return !0;
                        if (n.key === " " && !n.isComposing && T.current && kn(T.current)) return n.preventDefault(), !0;
                        if (n.key === "Backspace") {
                            const {
                                selection: o,
                                doc: d
                            } = t.state;
                            if (o.empty) {
                                const f = o.from;
                                if (f === 1 && !n.isComposing && T.current ? .isEmpty && ot.current ? .()) return n.preventDefault(), !0;
                                const M = d.resolve(f).nodeBefore;
                                let N = null,
                                    b = null;
                                if (M && jt(M)) b = M, N = f - M.nodeSize;
                                else if (M ? .isText && M.text ? .endsWith(" ") && f > 1) {
                                    const S = d.resolve(f - 1).nodeBefore;
                                    S && jt(S) && (b = S, N = f - 1 - S.nodeSize)
                                }
                                if (N !== null && N >= 0 && b) {
                                    if (b.type.name === "connectorMention") {
                                        const S = b.attrs.id,
                                            H = b.attrs.name;
                                        typeof S == "string" && (ur(S), _e(S, H ? ? "", "backspace"))
                                    }
                                    return n.preventDefault(), t.dispatch(t.state.tr.deleteRange(N, f)), !0
                                }
                            }
                        }
                        if (n.key === "ArrowUp" && !n.shiftKey && !n.metaKey && !n.ctrlKey && !n.altKey && !n.isComposing && T.current ? .isEmpty && rt.current ? .() || (n.key === "ArrowUp" || n.key === "ArrowDown") && !n.metaKey && !n.ctrlKey && !n.altKey && !n.shiftKey && !n.isComposing && !Ct() && !At() && (n.key === "ArrowUp" ? Zt(t) : en(t))) return n.preventDefault(), !0;
                        if (Pn(n, qt)) {
                            if (Ct() || At()) return !1;
                            if ((n.metaKey || n.ctrlKey) && T.current ? .isEmpty && st.current ? .()) return n.preventDefault(), !0;
                            n.preventDefault();
                            const o = t.dom.closest("form");
                            return o && o.requestSubmit(), !0
                        }
                        return !1
                    },
                    handlePaste: (t, n) => {
                        const o = n.clipboardData,
                            d = o ? .getData("text/plain"),
                            f = Dn({
                                clipboardData: o ? ? null,
                                text: d ? ? "",
                                projectId: Ne.current ? ? null,
                                ruleSet: et.current
                            }),
                            M = Array.from(o ? .items ? ? []).some(R => R.kind === "file"),
                            N = fr(o)[0],
                            b = N ? {
                                name: N.name,
                                size: N.size,
                                mimeType: N.type
                            } : void 0;
                        if (!d) return b && f.recordAttachment(b), M;
                        const S = T.current;
                        if (!S) return !1;
                        const H = Un,
                            Oe = tt.current,
                            Y = {
                                redaction: null
                            },
                            F = $n(d, {
                                artifactsEnabled: Oe !== null,
                                overLimit: Array.from(d).length > H,
                                scanSecrets: R => (Y.redaction ? ? = _n(R), {
                                    hasUnsecuredSecret: Y.redaction.hasUnsecuredSecret,
                                    hasExtractableMatches: Y.redaction.matches.length > 0
                                })
                            }),
                            k = Y.redaction;
                        if (F.action === "blockSecret") return n.preventDefault(), W.warning(vn(), {
                            description: Sn()
                        }), !0;
                        if (F.action === "attachArtifact" && Oe !== null && k !== null) {
                            const {
                                redactedText: R,
                                matches: V
                            } = k, He = async wt => te(E.getState().message) + te(wt) > 5e4 ? !1 : await nt.current ? .(wt, {
                                position: "cursor",
                                focus: !0
                            }) ? ? !1;
                            if (Oe(R, {
                                    source: "tiptap",
                                    overMessageLimit: F.overMessageLimit,
                                    ...F.canRestoreInline && {
                                        restoreInline: He
                                    }
                                })) return n.preventDefault(), f.recordText(k, b), B.current ? .(d), kt(S, V), !0;
                            if (F.refusalFallback === "block") return n.preventDefault(), !0
                        }
                        if (F.action === "attachLegacyFile" && k !== null) {
                            n.preventDefault();
                            const R = Jt.current,
                                V = `pasted-${new Date().toISOString().replace(/[:.]/g,"-")}.txt`,
                                He = new File([k.redactedText], V, {
                                    type: "text/plain"
                                });
                            return R && R([He]) ? (f.recordAttachment({
                                name: V
                            }), B.current ? .(d), kt(S, k.matches), W.info(Cn(), {
                                description: V
                            })) : W.warning(xn(), {
                                description: Tn()
                            }), !0
                        }
                        if (f.recordText(k, b), B.current ? .(d), Rn(S, d, xt, H, Ht) > 0) return T.current ? .commands.scrollIntoView(), !0;
                        const Q = In(S, d, xt, H, Ht);
                        return Q.wasLengthLimited && W.warning(En(), {
                            description: bn({
                                count: H
                            })
                        }), Q.handled && T.current ? .commands.scrollIntoView(), !Q.handled && M ? (S.chain().focus().insertContent({
                            type: "text",
                            text: d
                        }).run(), !0) : Q.handled
                    }
                },
                onUpdate: ({
                    editor: t,
                    transaction: n
                }) => {
                    n.docChanged && (L.current = null), I(t.getText().trim()), J(t.isEmpty)
                },
                onCreate: ({
                    editor: t
                }) => {
                    T.current = t, J(t.isEmpty), E.getState().editorContentJSON === null && I(t.getText().trim()), y != null && (O.current === "project_chat_input" || O.current === "mobile_chat_input" || O.current === "hover_composer") && (performance.mark("chat:input:interactive"), dn("editor:chat:nav-to-interactive", "chat:input:interactive"))
                },
                onDestroy: () => {
                    T.current = null
                }
            }, []);
        (0, a.useImperativeHandle)(ie, () => ({
            editor: s
        }), [s]), (0, a.useEffect)(() => {
            s ? .view.dom.setAttribute("aria-label", Lt(_, v))
        }, [s, _, v]);
        const _t = !it || C;
        (0, a.useLayoutEffect)(() => {
            if (_) return _t ? void 0 : _(xe);
            xe(v ? ? "")
        }, [_, v, xe, _t]), (0, a.useEffect)(() => {
            s && (A.available || w.available) && s.view.dispatch(s.state.tr.setMeta("refreshCollectionMentions", !0))
        }, [s, A.available, w.available]), (0, a.useEffect)(() => (s && (ce(() => {
            s.commands.focus()
        }), le(() => s.isFocused), ue((t, n, o) => {
            s.chain().focus().insertFileMention(t, n, o).run()
        }), de((t, n) => {
            const o = s.chain();
            n ? .focus !== !1 && o.focus(), o.insertDocumentMention(t).run()
        }), pe(t => _r(s, t, (n, o) => X.current() && Le(n, o, !0))), fe(t => {
            s.chain().focus().replaceDocumentMention(t).run()
        }), me(t => {
            s.chain().focus().replaceDocumentMentions(t).run()
        }), ge((t, n) => {
            s.chain().focus().insertAssetMention(t, n).run()
        }), he(t => {
            s.commands.removeAssetMention(t)
        }), ye(t => {
            s.commands.removeSecretMentions(t)
        }), Me((t, n) => {
            const o = n ? .position === "end" ? Be.atEnd(s.state.doc).to : s.state.selection.from;
            return t.endsWith("@") ? Pe() : t === "/" ? ke(s.state, o) : t.endsWith("/") ? St() : t === ":" && Ie(), Ot(s, t, n)
        }), Se(() => {
            if (oe) {
                Ot(s, ` ${Jn} `, {
                    position: "end"
                });
                return
            }
            s.chain().focus("end").insertPlanCommand().run()
        }), ve(t => {
            s.chain().focus().insertSecurityFindingMention(t).run()
        }), Te(t => {
            s.chain().focus("end").insertAnalyticsDataMention(t).run()
        })), () => {
            ce(null), le(null), ue(null), de(null), pe(null), fe(null), me(null), ge(null), he(null), ye(null), Me(null), Se(null), ve(null), Te(null)
        }), [s, ce, le, ue, de, pe, Le, fe, me, ge, he, ye, Me, Se, oe, ve, Te, Pe, Ie, St, ke]), (0, a.useEffect)(() => {
            s && s.setEditable(!C, !1)
        }, [s, C]), (0, a.useEffect)(() => {
            if (!s) return;
            const t = () => {
                es(s)
            };
            return document.addEventListener("dismiss-chat-suggestions", t), () => {
                document.removeEventListener("dismiss-chat-suggestions", t)
            }
        }, [s]), (0, a.useEffect)(() => {
            if (!s || !P) return;
            const t = n => {
                if (!We.getState(s.state) ? .active) return;
                const o = n.target;
                o && Ce.current ? .contains(o) || o instanceof Element && o.closest('.tippy-box[data-theme~="suggestion"]') || document.dispatchEvent(new CustomEvent("dismiss-chat-suggestions"))
            };
            return document.addEventListener("pointerdown", t, {
                passive: !0
            }), () => {
                document.removeEventListener("pointerdown", t)
            }
        }, [s, P]);
        const De = (0, a.useRef)(K);
        return (0, a.useEffect)(() => {
            if (!s || De.current === K) return;
            De.current = K, L.current = null;
            const {
                message: t,
                editorContentJSON: n
            } = E.getState();
            s.commands.setContent(n ? ? Fe(t), {
                emitUpdate: !1
            }), n === null && I(s.getText().trim()), J(s.isEmpty)
        }, [K, s, E, I]), (0, a.useEffect)(() => {
            if (s) return at(() => s.isDestroyed || De.current !== E.getState().externalContentVersion ? null : s.getJSON())
        }, [s, at, E]), (0, a.useEffect)(() => {
            if (!s || !l || P || typeof window > "u" || pn()) return;
            const t = () => {
                window.innerWidth < hn.md || !Bt() || requestAnimationFrame(() => Zr(s))
            };
            t();
            const n = () => {
                document.visibilityState === "visible" && t()
            };
            return document.addEventListener("visibilitychange", n), () => document.removeEventListener("visibilitychange", n)
        }, [s, l, P]), (0, a.useEffect)(() => {
            if (m == null) {
                be.current = null;
                return
            }
            if (!s || be.current === m) return;
            const t = requestAnimationFrame(() => {
                s.isDestroyed || (s.commands.focus("end"), be.current = m, g ? .())
            });
            return () => cancelAnimationFrame(t)
        }, [s, m, g]), (0, a.useEffect)(() => {
            if (!(!s || !x)) return x(() => s.commands.focus("end"))
        }, [s, x]), (0, a.useLayoutEffect)(() => {
            const t = Ce.current,
                n = Ee.current;
            if (!t) return;
            if (!D || !n) {
                t.style.removeProperty("--composer-chip-indent");
                return
            }
            const o = 4,
                d = () => {
                    t.style.setProperty("--composer-chip-indent", `${n.offsetWidth+o}px`)
                };
            d();
            const f = new ResizeObserver(d);
            return f.observe(n), () => {
                f.disconnect(), t.style.removeProperty("--composer-chip-indent")
            }
        }, [D]), (0, a.useEffect)(() => {
            if (!s || !D) return;
            const t = s.view.dom,
                n = () => {
                    const o = Ee.current;
                    o && (o.style.transform = `translateY(${-t.scrollTop}px)`)
                };
            return n(), t.addEventListener("scroll", n, {
                passive: !0
            }), () => t.removeEventListener("scroll", n)
        }, [s, D]), (0, h.jsxs)("div", {
            ref: Ce,
            id: r,
            "data-testid": "chat-composer-editor",
            className: Z("relative grid w-full flex-1", D && "overflow-clip [overflow-clip-margin:var(--mention-pill-bleed)]", "[&_.ProseMirror>p:first-child]:indent-[var(--composer-chip-indent,0px)]", "[&_.ProseMirror>p:first-child]:transition-[text-indent] [&_.ProseMirror>p:first-child]:duration-150 [&_.ProseMirror>p:first-child]:ease-out", "[&:has(.mention-pill-dismissing)_.ProseMirror>p:first-child]:indent-0", "[&:has(.mention-pill-dismissing)_[data-slot=composer-placeholder]]:indent-0", "[&_[data-node-view-wrapper]]:indent-0", {
                "cursor-not-allowed opacity-50": C
            }, i),
            children: [(0, h.jsx)("span", {
                ref: z,
                "aria-hidden": "true",
                "data-slot": "composer-placeholder",
                onAnimationEnd: t => {
                    t.target === t.currentTarget && Qt(!0)
                },
                className: Z(On, "col-start-1 row-start-1", "indent-[var(--composer-chip-indent,0px)]", "[transition:opacity_150ms_ease-out,text-indent_150ms_ease-out]", p && !Yt && "animate-in fade-in-0", it && !C && v ? "opacity-100" : "opacity-0 [transition:opacity_0s,text-indent_150ms_ease-out]", c, u),
                children: v
            }), D && (0, h.jsx)("div", {
                ref: Ee,
                className: Z("mention-pill-line absolute top-[var(--prosemirror-p-pad-y,0.5rem)] left-[var(--prosemirror-p-pad-x,0.5rem)] z-10 whitespace-nowrap", "text-[16px] leading-6 md:text-base", c),
                children: Je
            }), (0, h.jsx)(pr, {
                value: rn,
                children: (0, h.jsx)(ir, {
                    editor: s,
                    className: "col-start-1 row-start-1 w-full min-w-0 select-text"
                })
            })]
        })
    };
ss.displayName = "ChatInputTiptap";
export {
    ss as ChatInputTiptap
};
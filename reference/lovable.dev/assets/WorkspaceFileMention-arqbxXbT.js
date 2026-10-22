import {
    o as Yn
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    Bb as vn,
    CI as Qn,
    NM as Gn,
    Rb as Jn,
    Vb as Zn,
    Wt as hn,
    cs as er,
    ds as tr,
    gs as Ht,
    iR as nr,
    jN as rr,
    ls as ze,
    lz as ar,
    ms as vt,
    mz as ir,
    wj as ht,
    zb as or
} from "./app-shared-6CLVfi8w.js";
import {
    i as sr,
    r as lr
} from "./vendor-react-Fx2PtaaM.js";
import {
    Ts as cr,
    kb as ur,
    ps as dr,
    wn as fr
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    s as pr
} from "./i18n-fn/mentionDropdown-j0RefJjS.js";
import {
    Dc as mr,
    Ec as vr,
    Lr as hr,
    Oc as gr,
    Ss as yr,
    _s as br,
    bs as wr,
    gs as xr,
    hs as Tr,
    kc as Mr,
    ms as Ar,
    pa as _r,
    vs as Sr,
    xs as Cr
} from "./i18n-fn/_misc-D8ok4lJW.js";
import {
    Dt as Or,
    Er as kr,
    Jr as Er
} from "./flag-catalog-BJaXoOeP.js";
import {
    Yr as Lr,
    ln as jr,
    on as Rr,
    qr as Dr,
    rn as Ir,
    so as Nr,
    tn as Pr
} from "./dashboard-shared-BN9MnewY.js";
import {
    Bf as Hr,
    Eo as $r,
    Fo as Br,
    Mo as Vr,
    No as Wr,
    Rf as Fr,
    Xd as zr,
    ax as _e,
    cg as Ur,
    es as Kr,
    jx as qr,
    ko as Xr,
    zn as Yr
} from "./app-lazy-shared-BNTl480s.js";
import {
    Pr as Qr,
    it as Gr,
    lt as Jr
} from "./route-shared-leaves-Cd6hFGLK.js";
import {
    l as Zr,
    t as ea
} from "./ui-icon-sidebar-8d86DMoM.js";
import {
    t as ta
} from "./MapIcon-BFpZTrnK.js";
import {
    Ct as na,
    Dt as Ue,
    Et as kt,
    F as Se,
    M as gn,
    N as yn,
    St as $t,
    a as ra,
    at as aa,
    c as Ce,
    ft as Ie,
    i as Bt,
    l as bn,
    s as ye
} from "./vendor-editor-BxXM5pDU.js";
import {
    d as wn,
    l as ia,
    o as xn,
    s as Tn,
    u as oa
} from "./useMentionSuggestion-Iaf9z1kk.js";
import {
    c as sa,
    d as la,
    f as Vt,
    h as ca,
    l as ua,
    m as At,
    p as da,
    u as fa
} from "./composer-menu-items-BgOPYzJ1.js";
import {
    t as pa
} from "./CollectionMentionPill-I-E4f-TF.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "dbab976c-1456-46dd-bca6-3efb73f47c7d", e._sentryDebugIdIdentifier = "sentry-dbid-dbab976c-1456-46dd-bca6-3efb73f47c7d")
    })()
} catch {}
var A = lr(),
    ma = ({
        node: e
    }) => {
        const t = e.attrs.name || e.attrs.id;
        return (0, A.jsx)(ye, {
            as: "span",
            className: "fs-mask inline",
            dir: "ltr",
            contentEditable: !1,
            children: (0, A.jsx)(_e, {
                label: t,
                tooltip: hr(),
                variant: "asset",
                truncate: !0
            })
        })
    },
    Vo = new Ue("assetMention"),
    va = (e, t) => {
        const n = new RegExp(String.raw `@asset:${t.replace(/[^\w-]/g,String.raw`\$&`)}:"${er}"`, "g"),
            r = [];
        return e.descendants((a, i) => {
            if (!(!a.isText || !a.text))
                for (const o of a.text.matchAll(n)) r.push({
                    from: i + o.index,
                    to: i + o.index + o[0].length
                })
        }), r
    },
    Wo = Se.create({
        name: "assetMention",
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
            return ["span", Ie({
                "data-type": this.name
            }, this.options.HTMLAttributes, e)]
        },
        renderText({
            node: e
        }) {
            const t = e.attrs.name || e.attrs.id;
            return `@asset:${e.attrs.id}:"${ze(t)}"`
        },
        addNodeView() {
            return Ce(e => (0, A.jsx)(ma, { ...e
            }), {
                as: "span",
                className: "asset-mention-wrapper"
            })
        },
        addCommands() {
            return {
                insertAssetMention: (e, t) => ({
                    commands: n
                }) => n.insertContent([{
                    type: this.name,
                    attrs: {
                        id: e,
                        name: t
                    }
                }, {
                    type: "text",
                    text: " "
                }]),
                removeAssetMention: e => ({
                    state: t,
                    tr: n,
                    dispatch: r
                }) => {
                    const a = [];
                    if (t.doc.descendants((i, o) => {
                            i.type.name === this.name && i.attrs.id === e && a.push({
                                from: o,
                                to: o + i.nodeSize
                            })
                        }), a.push(...va(t.doc, e)), a.length === 0) return !1;
                    if (!r) return !0;
                    a.sort((i, o) => o.from - i.from);
                    for (const i of a) {
                        const o = t.doc.textBetween(i.to, Math.min(i.to + 1, t.doc.content.size));
                        n.delete(n.mapping.map(i.from), n.mapping.map(o === " " ? i.to + 1 : i.to))
                    }
                    return !0
                }
            }
        }
    }),
    ha = ({
        node: e,
        deleteNode: t,
        onNavigateToConnector: n,
        onRemove: r
    }) => {
        const a = e.attrs.id,
            i = e.attrs.name || a,
            o = !!n,
            c = u => {
                u ? .preventDefault(), u ? .stopPropagation(), n ? .(a)
            },
            d = () => {
                wn(a), r ? .(a, i, "click"), t()
            };
        return (0, A.jsx)(ye, {
            as: "span",
            className: "inline",
            dir: "ltr",
            contentEditable: !1,
            children: (0, A.jsx)(_e, {
                label: i,
                tooltip: o ? `Open ${i} connector` : `Connector: ${i}`,
                variant: "asset",
                icon: (0, A.jsx)(Jr, {
                    size: "2xs",
                    logoId: a,
                    displayName: i,
                    transparent: !0,
                    className: "rounded-full"
                }),
                iconKind: "image",
                onClick: o ? c : void 0,
                onRemove: d
            })
        })
    },
    Fo = new Ue("connectorMention"),
    ga = "connectorMention",
    zo = Se.create({
        name: ga,
        group: "inline",
        inline: !0,
        selectable: !1,
        atom: !0,
        addOptions() {
            return {
                HTMLAttributes: {},
                onNavigateToConnector: void 0,
                onAutoMatch: void 0,
                onRemove: void 0,
                enableAutoMatch: !1
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
            return ["span", Ie({
                "data-type": this.name
            }, this.options.HTMLAttributes, e)]
        },
        renderText({
            node: e
        }) {
            const t = e.attrs.name || e.attrs.id;
            return `@connector:${e.attrs.id}:"${ze(t)}"`
        },
        addNodeView() {
            const e = this.options.onNavigateToConnector,
                t = this.options.onRemove;
            return Ce(n => (0, A.jsx)(ha, { ...n,
                onNavigateToConnector: e,
                onRemove: t
            }), {
                as: "span",
                className: "connector-mention-wrapper"
            })
        },
        addCommands() {
            return {
                insertConnectorMention: (e, t) => ({
                    commands: n
                }) => n.insertContent([{
                    type: this.name,
                    attrs: {
                        id: e,
                        name: t
                    }
                }, {
                    type: "text",
                    text: " "
                }])
            }
        },
        addKeyboardShortcuts() {
            const e = this.options.onRemove;
            return {
                Backspace: ({
                    editor: t
                }) => {
                    const {
                        selection: n,
                        doc: r
                    } = t.state;
                    if (!n.empty) return !1;
                    const a = r.resolve(n.from).nodeBefore;
                    if (a ? .type.name !== this.name) return !1;
                    const i = a.attrs.id,
                        o = a.attrs.name;
                    return typeof i != "string" || (wn(i), e ? .(i, o ? ? "", "backspace")), !1
                }
            }
        },
        addInputRules() {
            return this.options.enableAutoMatch ? [new yn({
                find: e => {
                    const t = oa(e);
                    return t ? {
                        index: t.index,
                        text: t.text,
                        data: {
                            connector: t.connector
                        }
                    } : null
                },
                handler: ({
                    range: e,
                    match: t,
                    chain: n
                }) => {
                    const r = t.data ? .connector;
                    r && (n().insertContentAt(e, [{
                        type: this.name,
                        attrs: {
                            id: r.id,
                            name: r.name
                        }
                    }, {
                        type: "text",
                        text: " "
                    }]).run(), this.options.onAutoMatch ? .(r.id, r.name))
                }
            })] : []
        }
    }),
    ya = ({
        node: e,
        deleteNode: t,
        onNavigateToDocument: n
    }) => {
        const r = e.attrs.id,
            a = Kr(r),
            i = !!n,
            o = c => {
                c ? .preventDefault(), c ? .stopPropagation(), n ? .(r)
            };
        return (0, A.jsx)(ye, {
            as: "span",
            className: "inline",
            dir: "ltr",
            contentEditable: !1,
            children: (0, A.jsx)(_e, {
                label: a,
                tooltip: i ? `Open ${r}` : r,
                variant: "file",
                icon: hn,
                onClick: i ? o : void 0,
                onRemove: t
            })
        })
    },
    Uo = Se.create({
        name: "documentMention",
        group: "inline",
        inline: !0,
        selectable: !1,
        atom: !0,
        addOptions() {
            return {
                HTMLAttributes: {},
                onNavigateToDocument: void 0
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
            return ["span", Ie({
                "data-type": this.name
            }, this.options.HTMLAttributes, e)]
        },
        renderText({
            node: e
        }) {
            return `@document:"${ze(String(e.attrs.id??""))}"`
        },
        addNodeView() {
            const e = this.options.onNavigateToDocument;
            return Ce(t => (0, A.jsx)(ya, { ...t,
                onNavigateToDocument: e
            }), {
                as: "span",
                className: "document-mention-wrapper"
            })
        },
        addCommands() {
            const e = t => [{
                type: this.name,
                attrs: {
                    id: t
                }
            }, {
                type: "text",
                text: " "
            }];
            return {
                insertDocumentMention: t => ({
                    commands: n
                }) => n.insertContent(e(t)),
                replaceDocumentMention: t => ({
                    commands: n
                }) => n.replaceDocumentMentions([t]),
                replaceDocumentMentions: t => ({
                    state: n,
                    chain: r
                }) => {
                    const a = [];
                    n.doc.descendants((o, c) => {
                        if (o.type.name !== this.name) return;
                        const d = n.doc.nodeAt(c + o.nodeSize),
                            u = c + o.nodeSize + (d ? .isText && d.text ? .startsWith(" ") ? 1 : 0);
                        a.push({
                            from: c,
                            to: u
                        })
                    });
                    let i = r();
                    for (const o of [...a].reverse()) i = i.deleteRange(o);
                    for (const o of t) i = i.insertContent(e(o));
                    return i.run()
                }
            }
        }
    }),
    ba = ({
        node: e,
        deleteNode: t
    }) => {
        const n = e.attrs.projectId,
            r = e.attrs.threadId,
            a = (e.attrs.label ? ? "") || dr(),
            i = o => {
                o ? .preventDefault(), o ? .stopPropagation(), window.open(Qn({
                    name: "project",
                    params: {
                        projectId: n
                    },
                    search: {
                        thread: r
                    }
                }), "_blank", "noopener,noreferrer")
            };
        return (0, A.jsx)(ye, {
            as: "span",
            className: "inline",
            dir: "ltr",
            contentEditable: !1,
            children: (0, A.jsx)(_e, {
                label: a,
                tooltip: pr({
                    label: a
                }),
                variant: "draft",
                truncate: !0,
                onClick: i,
                onRemove: t
            })
        })
    },
    Ko = new Ue("draftMention"),
    gt = e => ({
        default: null,
        parseHTML: t => t.getAttribute(`data-${e}`),
        renderHTML: t => {
            const n = t[e];
            return n ? {
                [`data-${e}`]: n
            } : {}
        }
    }),
    qo = Se.create({
        name: "draftMention",
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
                projectId: gt("projectId"),
                threadId: gt("threadId"),
                label: { ...gt("label"),
                    renderHTML: e => ({
                        "data-label": e.label ? ? ""
                    })
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
            return ["span", Ie({
                "data-type": this.name
            }, this.options.HTMLAttributes, e)]
        },
        renderText({
            node: e
        }) {
            const t = e.attrs.label ? ? "";
            return `@draft:${e.attrs.projectId}:${e.attrs.threadId}:"${ze(t)}"`
        },
        addNodeView() {
            return Ce(ba, {
                as: "span",
                className: "draft-mention-wrapper"
            })
        },
        addCommands() {
            return {
                insertDraftMention: e => ({
                    commands: t
                }) => t.insertContent([{
                    type: this.name,
                    attrs: e
                }, {
                    type: "text",
                    text: " "
                }])
            }
        }
    }),
    _ = Yn(sr(), 1),
    Xe = new Ue("emojiSuggestion"),
    wa = /(?:^|[\s\ufffc]):([a-zA-Z0-9_+-]+):$/,
    Xo = gn.create({
        name: "emojiShortcode",
        addOptions() {
            return {
                getEmoji: () => {},
                suggestion: {
                    char: ":",
                    pluginKey: Xe
                }
            }
        },
        addInputRules() {
            return [new yn({
                find: wa,
                handler: ({
                    range: e,
                    match: t,
                    chain: n
                }) => {
                    const r = this.options.getEmoji(t[1]);
                    if (!r) return null;
                    const a = e.to - (t[1].length + 1);
                    n().insertContentAt({
                        from: a,
                        to: e.to
                    }, r).run()
                }
            })]
        },
        addProseMirrorPlugins() {
            return [ra({
                editor: this.editor,
                ...this.options.suggestion
            })]
        }
    }),
    Wt = new Ue("linkHighlight"),
    xa = /(^|[\s\ufffc(*_~])((?:https?:\/\/|www\.)[^\s\ufffc<]+)/gi,
    Ta = "?!.,:*_~",
    Ma = e => {
        let t = 0;
        for (const r of e) r === "(" ? t += 1 : r === ")" && (t -= 1);
        let n = e.length;
        for (;;) {
            for (; n > 0 && Ta.includes(e[n - 1]);) n -= 1;
            if (n > 0 && e[n - 1] === ")" && t < 0) {
                n -= 1, t += 1;
                continue
            }
            return e.slice(0, n)
        }
    },
    Aa = e => {
        try {
            return new URL(/^www\./i.test(e) ? `http://${e}` : e).hostname.includes(".")
        } catch {
            return !1
        }
    },
    _a = e => {
        const t = [];
        for (const n of e.matchAll(xa)) {
            const r = Ma(n[2]);
            if (!Aa(r)) continue;
            const a = n.index + n[1].length;
            t.push({
                from: a,
                to: a + r.length
            })
        }
        return t
    },
    Sa = e => {
        const t = [];
        return e.descendants((n, r) => {
            if (!n.isTextblock) return !0;
            let a = "";
            n.forEach(i => {
                a += i.isText ? i.text ? ? "" : "￼".repeat(i.nodeSize)
            });
            for (const i of _a(a)) t.push({
                from: r + 1 + i.from,
                to: r + 1 + i.to
            });
            return !1
        }), t
    },
    Yo = gn.create({
        name: "linkHighlight",
        addProseMirrorPlugins() {
            const {
                editor: e
            } = this, t = new WeakMap, n = () => {
                const i = new bn(Zr, {
                    editor: e,
                    props: {
                        size: "small"
                    },
                    as: "span",
                    className: "chat-input-link-icon"
                });
                return t.set(i.element, i), i.element
            }, r = i => t.get(i) ? .destroy(), a = i => na.create(i, Sa(i).flatMap(({
                from: o,
                to: c
            }) => [$t.widget(o, n, {
                side: -1,
                destroy: r
            }), $t.inline(o, c, {
                class: "chat-input-link",
                spellcheck: "false"
            })]));
            return [new kt({
                key: Wt,
                state: {
                    init: (i, o) => a(o.doc),
                    apply: (i, o) => i.docChanged ? a(i.doc) : o
                },
                props: {
                    decorations: i => Wt.getState(i)
                }
            })]
        }
    });

function Ca({
    deleteNode: e
}) {
    return (0, A.jsx)(ye, {
        as: "span",
        className: "inline",
        dir: "ltr",
        contentEditable: !1,
        "data-max-command": "",
        children: (0, A.jsx)(_e, {
            label: br(),
            tooltip: Sr(),
            variant: "active",
            icon: ea,
            onRemove: e
        })
    })
}

function Mn({
    name: e,
    token: t,
    pill: n,
    wrapperClassName: r
}) {
    return Se.create({
        name: e,
        group: "inline",
        inline: !0,
        selectable: !1,
        atom: !0,
        parseHTML() {
            return [{
                tag: `span[data-type="${this.name}"]`
            }]
        },
        renderHTML({
            HTMLAttributes: a
        }) {
            return ["span", Ie({
                "data-type": this.name
            }, a)]
        },
        renderText() {
            return t
        },
        addProseMirrorPlugins() {
            const a = this.type;
            return [new kt({
                appendTransaction(i, o, c) {
                    if (!i.some(s => s.docChanged)) return null;
                    let d = c.tr,
                        u = 0;
                    return c.doc.descendants((s, m, h, p) => {
                        if (s.type !== a || !h) return !0;
                        const b = h.maybeChild(p - 1);
                        b && !(b.isText && /\s$/.test(b.text ? ? "")) && (d = d.insertText(" ", m + u), u += 1);
                        const g = h.maybeChild(p + 1);
                        return g ? .isText && g.text && jr.test(g.text) && (d = d.insertText(" ", m + s.nodeSize + u), u += 1), !0
                    }), d.docChanged ? d : null
                }
            })]
        },
        addNodeView() {
            return Ce(n, {
                as: "span",
                className: r
            })
        }
    })
}
var Qo = Mn({
        name: "maxCommand",
        token: Rr,
        pill: Ca,
        wrapperClassName: "max-command-wrapper"
    }).extend({
        addCommands() {
            return {
                insertMaxCommand: () => ({
                    commands: e
                }) => e.insertContent([{
                    type: this.name
                }, {
                    type: "text",
                    text: " "
                }])
            }
        }
    }),
    Go = Tn("mentionSuggestion").extend({
        addOptions() {
            return {
                suggestion: {
                    char: "@",
                    pluginKey: ia,
                    command: ({
                        editor: e,
                        range: t,
                        props: n
                    }) => {
                        if (n.type === "file") e.chain().focus().deleteRange(t).insertFileMention(n.path).run();
                        else if (n.type === "project") {
                            const r = n.displayName || n.name || n.id;
                            e.chain().focus().deleteRange(t).insertProjectMention(n.id, r).run()
                        }
                    }
                }
            }
        }
    });

function Oa({
    deleteNode: e
}) {
    return (0, A.jsx)(ye, {
        as: "span",
        className: "inline",
        dir: "ltr",
        contentEditable: !1,
        "data-plan-command": "",
        children: (0, A.jsx)(_e, {
            label: gr(),
            tooltip: Mr(),
            variant: "active",
            icon: ta,
            onRemove: e
        })
    })
}
var Jo = Mn({
    name: "planCommand",
    token: Ir,
    pill: Oa,
    wrapperClassName: "plan-command-wrapper"
}).extend({
    addCommands() {
        return {
            insertPlanCommand: () => ({
                commands: e
            }) => e.insertContent([{
                type: this.name
            }, {
                type: "text",
                text: " "
            }])
        }
    }
});

function ka({
    editor: e,
    node: t,
    getPos: n
}) {
    if (e.isDestroyed) return null;
    const r = n();
    if (r === void 0) return null;
    const a = e.state.doc.nodeAt(r);
    return a ? .type === t.type && a.attrs.id === t.attrs.id ? {
        pos: r,
        node: a
    } : null
}

function An(e, t) {
    queueMicrotask(() => {
        const n = ka(e);
        n !== null && e.editor.view.dispatch(t(n, e.editor.state.tr).setMeta("addToHistory", !1))
    })
}

function Ea(e, t) {
    An(e, ({
        pos: n,
        node: r
    }, a) => a.setNodeMarkup(n, void 0, { ...r.attrs,
        ...t
    }))
}

function La(e, t) {
    An(e, ({
        pos: n,
        node: r
    }, a) => a.replaceWith(n, n + r.nodeSize, e.editor.schema.text(t)))
}
var ja = ({
        node: e,
        editor: t,
        getPos: n,
        deleteNode: r,
        onNavigateToProject: a
    }) => {
        const i = e.attrs.id,
            o = e.attrs.name,
            c = e.attrs.messageHref,
            d = c !== null && Jn(c),
            u = o === null,
            {
                project: s,
                isPending: m
            } = Nr(i, {
                enabled: u,
                retry: !1
            }),
            h = u && s ? ir(s) ? ? i : null,
            p = u && !m && s === void 0;
        (0, _.useEffect)(() => {
            if (u) {
                if (h) Ea({
                    editor: t,
                    node: e,
                    getPos: n
                }, {
                    name: h
                });
                else if (p) {
                    const k = vn({
                        resource: "project",
                        id: i,
                        messageHref: c
                    });
                    La({
                        editor: t,
                        node: e,
                        getPos: n
                    }, k)
                }
            }
        }, [u, h, p, t, e, n, i, c]);
        const b = o || h,
            g = b || (u && m ? wr() : i),
            T = d && b ? Cr({
                name: b
            }) : g,
            O = k => {
                k ? .preventDefault(), k ? .stopPropagation(), c ? window.open(c, "_blank", "noopener,noreferrer") : a ? a(i) : window.open(`/projects/${i}`, "_blank")
            };
        return (0, A.jsx)(ye, {
            as: "span",
            className: "inline",
            dir: "ltr",
            contentEditable: !1,
            children: (0, A.jsx)(_e, {
                label: T,
                tooltip: d ? yr({
                    name: g
                }) : `Open ${g} project`,
                copyText: c ? ? void 0,
                variant: "project",
                icon: (0, A.jsx)(Hr, {
                    projectId: i,
                    ...Fr
                }),
                iconKind: "tile",
                truncate: !0,
                onClick: O,
                onRemove: r
            })
        })
    },
    Zo = new Ue("projectMention"),
    es = Se.create({
        name: "projectMention",
        group: "inline",
        inline: !0,
        selectable: !1,
        atom: !0,
        addOptions() {
            return {
                HTMLAttributes: {},
                onNavigateToProject: void 0
            }
        },
        addAttributes() {
            return {
                id: {
                    default: null,
                    parseHTML: e => {
                        const t = e.getAttribute("data-id");
                        return or(t) ? t : null
                    },
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
                },
                messageHref: {
                    default: null,
                    parseHTML: e => Zn(e.getAttribute("data-message-href"), "project", e.getAttribute("data-id")),
                    renderHTML: e => e.messageHref ? {
                        "data-message-href": e.messageHref
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
            return ["span", Ie({
                "data-type": this.name
            }, this.options.HTMLAttributes, e)]
        },
        renderText({
            node: e
        }) {
            const {
                id: t,
                name: n,
                messageHref: r
            } = e.attrs;
            return r || n === null ? vn({
                resource: "project",
                id: t,
                messageHref: r
            }) : `@project:${t}:"${ze(n||t)}"`
        },
        addNodeView() {
            const e = this.options.onNavigateToProject;
            return Ce(t => (0, A.jsx)(ja, { ...t,
                onNavigateToProject: e
            }), {
                as: "span",
                className: "project-mention-wrapper"
            })
        },
        addCommands() {
            return {
                insertProjectMention: (e, t) => ({
                    commands: n
                }) => n.insertContent([{
                    type: this.name,
                    attrs: {
                        id: e,
                        name: t
                    }
                }, {
                    type: "text",
                    text: " "
                }])
            }
        }
    }),
    ts = Tn("skillCommandSuggestion").extend({
        addOptions() {
            return {
                suggestion: {
                    char: "/",
                    pluginKey: xn,
                    command: ({
                        editor: e,
                        range: t,
                        props: n
                    }) => {
                        e.chain().focus().deleteRange(t).insertSkillCommand(n.name, n.description).run()
                    }
                }
            }
        }
    });
var he = "bottom",
    Ae = "right",
    ve = "left",
    Ra = "auto",
    Ze = ["top", he, Ae, ve],
    ut = "start";
var Da = "clippingParents",
    Ia = "viewport",
    Ft = "popper",
    Na = "reference",
    zt = Ze.reduce(function(e, t) {
        return e.concat([t + "-" + ut, t + "-end"])
    }, []),
    _n = [].concat(Ze, [Ra]).reduce(function(e, t) {
        return e.concat([t, t + "-" + ut, t + "-end"])
    }, []),
    Pa = "beforeRead",
    Ha = "read",
    $a = "afterRead",
    Ba = "beforeMain",
    Va = "main",
    Wa = "afterMain",
    Fa = "beforeWrite",
    za = "write",
    Ua = "afterWrite",
    Ka = [Pa, Ha, $a, Ba, Va, Wa, Fa, za, Ua];

function de(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}

function J(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}

function De(e) {
    return e instanceof J(e).Element || e instanceof Element
}

function ae(e) {
    return e instanceof J(e).HTMLElement || e instanceof HTMLElement
}

function Et(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof J(e).ShadowRoot || e instanceof ShadowRoot
}

function qa(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
        var r = t.styles[n] || {},
            a = t.attributes[n] || {},
            i = t.elements[n];
        !ae(i) || !de(i) || (Object.assign(i.style, r), Object.keys(a).forEach(function(o) {
            var c = a[o];
            c === !1 ? i.removeAttribute(o) : i.setAttribute(o, c === !0 ? "" : c)
        }))
    })
}

function Xa(e) {
    var t = e.state,
        n = {
            popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function() {
            Object.keys(t.elements).forEach(function(r) {
                var a = t.elements[r],
                    i = t.attributes[r] || {},
                    o = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]).reduce(function(c, d) {
                        return c[d] = "", c
                    }, {});
                !ae(a) || !de(a) || (Object.assign(a.style, o), Object.keys(i).forEach(function(c) {
                    a.removeAttribute(c)
                }))
            })
        }
}
var Sn = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: qa,
    effect: Xa,
    requires: ["computeStyles"]
};

function ue(e) {
    return e.split("-")[0]
}
var Re = Math.max,
    st = Math.min,
    Ve = Math.round;

function _t() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}

function Cn() {
    return !/^((?!chrome|android).)*safari/i.test(_t())
}

function We(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    var r = e.getBoundingClientRect(),
        a = 1,
        i = 1;
    t && ae(e) && (a = e.offsetWidth > 0 && Ve(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ve(r.height) / e.offsetHeight || 1);
    var o = (De(e) ? J(e) : window).visualViewport,
        c = !Cn() && n,
        d = (r.left + (c && o ? o.offsetLeft : 0)) / a,
        u = (r.top + (c && o ? o.offsetTop : 0)) / i,
        s = r.width / a,
        m = r.height / i;
    return {
        width: s,
        height: m,
        top: u,
        right: d + s,
        bottom: u + m,
        left: d,
        x: d,
        y: u
    }
}

function Lt(e) {
    var t = We(e),
        n = e.offsetWidth,
        r = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: r
    }
}

function On(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && Et(n)) {
        var r = t;
        do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host
        } while (r)
    }
    return !1
}

function ge(e) {
    return J(e).getComputedStyle(e)
}

function Ya(e) {
    return ["table", "td", "th"].indexOf(de(e)) >= 0
}

function Oe(e) {
    return ((De(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function dt(e) {
    return de(e) === "html" ? e : e.assignedSlot || e.parentNode || (Et(e) ? e.host : null) || Oe(e)
}

function Ut(e) {
    return !ae(e) || ge(e).position === "fixed" ? null : e.offsetParent
}

function Qa(e) {
    var t = /firefox/i.test(_t());
    if (/Trident/i.test(_t()) && ae(e) && ge(e).position === "fixed") return null;
    var n = dt(e);
    for (Et(n) && (n = n.host); ae(n) && ["html", "body"].indexOf(de(n)) < 0;) {
        var r = ge(n);
        if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
        n = n.parentNode
    }
    return null
}

function et(e) {
    for (var t = J(e), n = Ut(e); n && Ya(n) && ge(n).position === "static";) n = Ut(n);
    return n && (de(n) === "html" || de(n) === "body" && ge(n).position === "static") ? t : n || Qa(e) || t
}

function jt(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function Ye(e, t, n) {
    return Re(e, st(t, n))
}

function Ga(e, t, n) {
    var r = Ye(e, t, n);
    return r > n ? n : r
}

function kn() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}

function En(e) {
    return Object.assign({}, kn(), e)
}

function Ln(e, t) {
    return t.reduce(function(n, r) {
        return n[r] = e, n
    }, {})
}
var Ja = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
        placement: n.placement
    })) : t, En(typeof t != "number" ? t : Ln(t, Ze))
};

function Za(e) {
    var t, n = e.state,
        r = e.name,
        a = e.options,
        i = n.elements.arrow,
        o = n.modifiersData.popperOffsets,
        c = ue(n.placement),
        d = jt(c),
        u = ["left", "right"].indexOf(c) >= 0 ? "height" : "width";
    if (!(!i || !o)) {
        var s = Ja(a.padding, n),
            m = Lt(i),
            h = d === "y" ? "top" : ve,
            p = d === "y" ? he : Ae,
            b = n.rects.reference[u] + n.rects.reference[d] - o[d] - n.rects.popper[u],
            g = o[d] - n.rects.reference[d],
            T = et(i),
            O = T ? d === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0,
            k = b / 2 - g / 2,
            l = s[h],
            M = O - m[u] - s[p],
            v = O / 2 - m[u] / 2 + k,
            S = Ye(l, v, M),
            I = d;
        n.modifiersData[r] = (t = {}, t[I] = S, t.centerOffset = S - v, t)
    }
}

function ei(e) {
    var t = e.state,
        n = e.options.element,
        r = n === void 0 ? "[data-popper-arrow]" : n;
    r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || On(t.elements.popper, r) && (t.elements.arrow = r))
}
var ti = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: Za,
    effect: ei,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};

function Fe(e) {
    return e.split("-")[1]
}
var ni = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};

function ri(e, t) {
    var n = e.x,
        r = e.y,
        a = t.devicePixelRatio || 1;
    return {
        x: Ve(n * a) / a || 0,
        y: Ve(r * a) / a || 0
    }
}

function Kt(e) {
    var t, n = e.popper,
        r = e.popperRect,
        a = e.placement,
        i = e.variation,
        o = e.offsets,
        c = e.position,
        d = e.gpuAcceleration,
        u = e.adaptive,
        s = e.roundOffsets,
        m = e.isFixed,
        h = o.x,
        p = h === void 0 ? 0 : h,
        b = o.y,
        g = b === void 0 ? 0 : b,
        T = typeof s == "function" ? s({
            x: p,
            y: g
        }) : {
            x: p,
            y: g
        };
    p = T.x, g = T.y;
    var O = o.hasOwnProperty("x"),
        k = o.hasOwnProperty("y"),
        l = ve,
        M = "top",
        v = window;
    if (u) {
        var S = et(n),
            I = "clientHeight",
            $ = "clientWidth";
        if (S === J(n) && (S = Oe(n), ge(S).position !== "static" && c === "absolute" && (I = "scrollHeight", $ = "scrollWidth")), S = S, a === "top" || (a === "left" || a === "right") && i === "end") {
            M = he;
            var P = m && S === v && v.visualViewport ? v.visualViewport.height : S[I];
            g -= P - r.height, g *= d ? 1 : -1
        }
        if (a === "left" || (a === "top" || a === "bottom") && i === "end") {
            l = Ae;
            var R = m && S === v && v.visualViewport ? v.visualViewport.width : S[$];
            p -= R - r.width, p *= d ? 1 : -1
        }
    }
    var E = Object.assign({
            position: c
        }, u && ni),
        B = s === !0 ? ri({
            x: p,
            y: g
        }, J(n)) : {
            x: p,
            y: g
        };
    if (p = B.x, g = B.y, d) {
        var D;
        return Object.assign({}, E, (D = {}, D[M] = k ? "0" : "", D[l] = O ? "0" : "", D.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + g + "px)" : "translate3d(" + p + "px, " + g + "px, 0)", D))
    }
    return Object.assign({}, E, (t = {}, t[M] = k ? g + "px" : "", t[l] = O ? p + "px" : "", t.transform = "", t))
}

function ai(e) {
    var t = e.state,
        n = e.options,
        r = n.gpuAcceleration,
        a = r === void 0 ? !0 : r,
        i = n.adaptive,
        o = i === void 0 ? !0 : i,
        c = n.roundOffsets,
        d = c === void 0 ? !0 : c,
        u = {
            placement: ue(t.placement),
            variation: Fe(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: a,
            isFixed: t.options.strategy === "fixed"
        };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Kt(Object.assign({}, u, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: o,
        roundOffsets: d
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Kt(Object.assign({}, u, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: d
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
var ii = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: ai,
        data: {}
    },
    at = {
        passive: !0
    };

function oi(e) {
    var t = e.state,
        n = e.instance,
        r = e.options,
        a = r.scroll,
        i = a === void 0 ? !0 : a,
        o = r.resize,
        c = o === void 0 ? !0 : o,
        d = J(t.elements.popper),
        u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return i && u.forEach(function(s) {
            s.addEventListener("scroll", n.update, at)
        }), c && d.addEventListener("resize", n.update, at),
        function() {
            i && u.forEach(function(s) {
                s.removeEventListener("scroll", n.update, at)
            }), c && d.removeEventListener("resize", n.update, at)
        }
}
var si = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: oi,
        data: {}
    },
    li = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

function ot(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
        return li[t]
    })
}
var ci = {
    start: "end",
    end: "start"
};

function qt(e) {
    return e.replace(/start|end/g, function(t) {
        return ci[t]
    })
}

function Rt(e) {
    var t = J(e);
    return {
        scrollLeft: t.pageXOffset,
        scrollTop: t.pageYOffset
    }
}

function Dt(e) {
    return We(Oe(e)).left + Rt(e).scrollLeft
}

function ui(e, t) {
    var n = J(e),
        r = Oe(e),
        a = n.visualViewport,
        i = r.clientWidth,
        o = r.clientHeight,
        c = 0,
        d = 0;
    if (a) {
        i = a.width, o = a.height;
        var u = Cn();
        (u || !u && t === "fixed") && (c = a.offsetLeft, d = a.offsetTop)
    }
    return {
        width: i,
        height: o,
        x: c + Dt(e),
        y: d
    }
}

function di(e) {
    var t, n = Oe(e),
        r = Rt(e),
        a = (t = e.ownerDocument) == null ? void 0 : t.body,
        i = Re(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
        o = Re(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
        c = -r.scrollLeft + Dt(e),
        d = -r.scrollTop;
    return ge(a || n).direction === "rtl" && (c += Re(n.clientWidth, a ? a.clientWidth : 0) - i), {
        width: i,
        height: o,
        x: c,
        y: d
    }
}

function It(e) {
    var t = ge(e),
        n = t.overflow,
        r = t.overflowX,
        a = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + a + r)
}

function jn(e) {
    return ["html", "body", "#document"].indexOf(de(e)) >= 0 ? e.ownerDocument.body : ae(e) && It(e) ? e : jn(dt(e))
}

function Qe(e, t) {
    var n;
    t === void 0 && (t = []);
    var r = jn(e),
        a = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
        i = J(r),
        o = a ? [i].concat(i.visualViewport || [], It(r) ? r : []) : r,
        c = t.concat(o);
    return a ? c : c.concat(Qe(dt(o)))
}

function St(e) {
    return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height
    })
}

function fi(e, t) {
    var n = We(e, !1, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
}

function Xt(e, t, n) {
    return t === "viewport" ? St(ui(e, n)) : De(t) ? fi(t, n) : St(di(Oe(e)))
}

function pi(e) {
    var t = Qe(dt(e)),
        n = ["absolute", "fixed"].indexOf(ge(e).position) >= 0 && ae(e) ? et(e) : e;
    return De(n) ? t.filter(function(r) {
        return De(r) && On(r, n) && de(r) !== "body"
    }) : []
}

function mi(e, t, n, r) {
    var a = t === "clippingParents" ? pi(e) : [].concat(t),
        i = [].concat(a, [n]),
        o = i[0],
        c = i.reduce(function(d, u) {
            var s = Xt(e, u, r);
            return d.top = Re(s.top, d.top), d.right = st(s.right, d.right), d.bottom = st(s.bottom, d.bottom), d.left = Re(s.left, d.left), d
        }, Xt(e, o, r));
    return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c
}

function Rn(e) {
    var t = e.reference,
        n = e.element,
        r = e.placement,
        a = r ? ue(r) : null,
        i = r ? Fe(r) : null,
        o = t.x + t.width / 2 - n.width / 2,
        c = t.y + t.height / 2 - n.height / 2,
        d;
    switch (a) {
        case "top":
            d = {
                x: o,
                y: t.y - n.height
            };
            break;
        case he:
            d = {
                x: o,
                y: t.y + t.height
            };
            break;
        case Ae:
            d = {
                x: t.x + t.width,
                y: c
            };
            break;
        case ve:
            d = {
                x: t.x - n.width,
                y: c
            };
            break;
        default:
            d = {
                x: t.x,
                y: t.y
            }
    }
    var u = a ? jt(a) : null;
    if (u != null) {
        var s = u === "y" ? "height" : "width";
        switch (i) {
            case ut:
                d[u] = d[u] - (t[s] / 2 - n[s] / 2);
                break;
            case "end":
                d[u] = d[u] + (t[s] / 2 - n[s] / 2)
        }
    }
    return d
}

function Je(e, t) {
    t === void 0 && (t = {});
    var n = t,
        r = n.placement,
        a = r === void 0 ? e.placement : r,
        i = n.strategy,
        o = i === void 0 ? e.strategy : i,
        c = n.boundary,
        d = c === void 0 ? Da : c,
        u = n.rootBoundary,
        s = u === void 0 ? Ia : u,
        m = n.elementContext,
        h = m === void 0 ? Ft : m,
        p = n.altBoundary,
        b = p === void 0 ? !1 : p,
        g = n.padding,
        T = g === void 0 ? 0 : g,
        O = En(typeof T != "number" ? T : Ln(T, Ze)),
        k = h === "popper" ? Na : Ft,
        l = e.rects.popper,
        M = e.elements[b ? k : h],
        v = mi(De(M) ? M : M.contextElement || Oe(e.elements.popper), d, s, o),
        S = We(e.elements.reference),
        I = Rn({
            reference: S,
            element: l,
            strategy: "absolute",
            placement: a
        }),
        $ = St(Object.assign({}, l, I)),
        P = h === "popper" ? $ : S,
        R = {
            top: v.top - P.top + O.top,
            bottom: P.bottom - v.bottom + O.bottom,
            left: v.left - P.left + O.left,
            right: P.right - v.right + O.right
        },
        E = e.modifiersData.offset;
    if (h === "popper" && E) {
        var B = E[a];
        Object.keys(R).forEach(function(D) {
            var U = ["right", "bottom"].indexOf(D) >= 0 ? 1 : -1,
                q = ["top", "bottom"].indexOf(D) >= 0 ? "y" : "x";
            R[D] += B[q] * U
        })
    }
    return R
}

function vi(e, t) {
    t === void 0 && (t = {});
    var n = t,
        r = n.placement,
        a = n.boundary,
        i = n.rootBoundary,
        o = n.padding,
        c = n.flipVariations,
        d = n.allowedAutoPlacements,
        u = d === void 0 ? _n : d,
        s = Fe(r),
        m = s ? c ? zt : zt.filter(function(b) {
            return Fe(b) === s
        }) : Ze,
        h = m.filter(function(b) {
            return u.indexOf(b) >= 0
        });
    h.length === 0 && (h = m);
    var p = h.reduce(function(b, g) {
        return b[g] = Je(e, {
            placement: g,
            boundary: a,
            rootBoundary: i,
            padding: o
        })[ue(g)], b
    }, {});
    return Object.keys(p).sort(function(b, g) {
        return p[b] - p[g]
    })
}

function hi(e) {
    if (ue(e) === "auto") return [];
    var t = ot(e);
    return [qt(e), t, qt(t)]
}

function gi(e) {
    var t = e.state,
        n = e.options,
        r = e.name;
    if (!t.modifiersData[r]._skip) {
        for (var a = n.mainAxis, i = a === void 0 ? !0 : a, o = n.altAxis, c = o === void 0 ? !0 : o, d = n.fallbackPlacements, u = n.padding, s = n.boundary, m = n.rootBoundary, h = n.altBoundary, p = n.flipVariations, b = p === void 0 ? !0 : p, g = n.allowedAutoPlacements, T = t.options.placement, O = ue(T) === T, k = d || (O || !b ? [ot(T)] : hi(T)), l = [T].concat(k).reduce(function(Q, K) {
                return Q.concat(ue(K) === "auto" ? vi(t, {
                    placement: K,
                    boundary: s,
                    rootBoundary: m,
                    padding: u,
                    flipVariations: b,
                    allowedAutoPlacements: g
                }) : K)
            }, []), M = t.rects.reference, v = t.rects.popper, S = new Map, I = !0, $ = l[0], P = 0; P < l.length; P++) {
            var R = l[P],
                E = ue(R),
                B = Fe(R) === ut,
                D = ["top", he].indexOf(E) >= 0,
                U = D ? "width" : "height",
                q = Je(t, {
                    placement: R,
                    boundary: s,
                    rootBoundary: m,
                    altBoundary: h,
                    padding: u
                }),
                H = D ? B ? Ae : ve : B ? he : "top";
            M[U] > v[U] && (H = ot(H));
            var N = ot(H),
                X = [];
            if (i && X.push(q[E] <= 0), c && X.push(q[H] <= 0, q[N] <= 0), X.every(function(Q) {
                    return Q
                })) {
                $ = R, I = !1;
                break
            }
            S.set(R, X)
        }
        if (I)
            for (var Z = b ? 3 : 1, ee = function(K) {
                    var ie = l.find(function(te) {
                        var ne = S.get(te);
                        if (ne) return ne.slice(0, K).every(function(fe) {
                            return fe
                        })
                    });
                    if (ie) return $ = ie, "break"
                }, Y = Z; Y > 0 && ee(Y) !== "break"; Y--);
        t.placement !== $ && (t.modifiersData[r]._skip = !0, t.placement = $, t.reset = !0)
    }
}
var yi = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: gi,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};

function Yt(e, t, n) {
    return n === void 0 && (n = {
        x: 0,
        y: 0
    }), {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x
    }
}

function Qt(e) {
    return ["top", Ae, he, ve].some(function(t) {
        return e[t] >= 0
    })
}

function bi(e) {
    var t = e.state,
        n = e.name,
        r = t.rects.reference,
        a = t.rects.popper,
        i = t.modifiersData.preventOverflow,
        o = Je(t, {
            elementContext: "reference"
        }),
        c = Je(t, {
            altBoundary: !0
        }),
        d = Yt(o, r),
        u = Yt(c, a, i),
        s = Qt(d),
        m = Qt(u);
    t.modifiersData[n] = {
        referenceClippingOffsets: d,
        popperEscapeOffsets: u,
        isReferenceHidden: s,
        hasPopperEscaped: m
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": s,
        "data-popper-escaped": m
    })
}
var wi = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: bi
};

function xi(e, t, n) {
    var r = ue(e),
        a = ["left", "top"].indexOf(r) >= 0 ? -1 : 1,
        i = typeof n == "function" ? n(Object.assign({}, t, {
            placement: e
        })) : n,
        o = i[0],
        c = i[1];
    return o = o || 0, c = (c || 0) * a, ["left", "right"].indexOf(r) >= 0 ? {
        x: c,
        y: o
    } : {
        x: o,
        y: c
    }
}

function Ti(e) {
    var t = e.state,
        n = e.options,
        r = e.name,
        a = n.offset,
        i = a === void 0 ? [0, 0] : a,
        o = _n.reduce(function(s, m) {
            return s[m] = xi(m, t.rects, i), s
        }, {}),
        c = o[t.placement],
        d = c.x,
        u = c.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = o
}
var Mi = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Ti
};

function Ai(e) {
    var t = e.state,
        n = e.name;
    t.modifiersData[n] = Rn({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
var _i = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: Ai,
    data: {}
};

function Si(e) {
    return e === "x" ? "y" : "x"
}

function Ci(e) {
    var t = e.state,
        n = e.options,
        r = e.name,
        a = n.mainAxis,
        i = a === void 0 ? !0 : a,
        o = n.altAxis,
        c = o === void 0 ? !1 : o,
        d = n.boundary,
        u = n.rootBoundary,
        s = n.altBoundary,
        m = n.padding,
        h = n.tether,
        p = h === void 0 ? !0 : h,
        b = n.tetherOffset,
        g = b === void 0 ? 0 : b,
        T = Je(t, {
            boundary: d,
            rootBoundary: u,
            padding: m,
            altBoundary: s
        }),
        O = ue(t.placement),
        k = Fe(t.placement),
        l = !k,
        M = jt(O),
        v = Si(M),
        S = t.modifiersData.popperOffsets,
        I = t.rects.reference,
        $ = t.rects.popper,
        P = typeof g == "function" ? g(Object.assign({}, t.rects, {
            placement: t.placement
        })) : g,
        R = typeof P == "number" ? {
            mainAxis: P,
            altAxis: P
        } : Object.assign({
            mainAxis: 0,
            altAxis: 0
        }, P),
        E = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        B = {
            x: 0,
            y: 0
        };
    if (S) {
        if (i) {
            var D, U = M === "y" ? "top" : ve,
                q = M === "y" ? he : Ae,
                H = M === "y" ? "height" : "width",
                N = S[M],
                X = N + T[U],
                Z = N - T[q],
                ee = p ? -$[H] / 2 : 0,
                Y = k === "start" ? I[H] : $[H],
                Q = k === "start" ? -$[H] : -I[H],
                K = t.elements.arrow,
                ie = p && K ? Lt(K) : {
                    width: 0,
                    height: 0
                },
                te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : kn(),
                ne = te[U],
                fe = te[q],
                le = Ye(0, I[H], ie[H]),
                oe = l ? I[H] / 2 - ee - le - ne - R.mainAxis : Y - le - ne - R.mainAxis,
                Ne = l ? -I[H] / 2 + ee + le + fe + R.mainAxis : Q + le + fe + R.mainAxis,
                pe = t.elements.arrow && et(t.elements.arrow),
                be = pe ? M === "y" ? pe.clientTop || 0 : pe.clientLeft || 0 : 0,
                we = (D = E ? .[M]) != null ? D : 0,
                xe = N + oe - we - be,
                Te = N + Ne - we,
                ke = Ye(p ? st(X, xe) : X, N, p ? Re(Z, Te) : Z);
            S[M] = ke, B[M] = ke - N
        }
        if (c) {
            var Ee, Me = M === "x" ? "top" : ve,
                Ke = M === "x" ? he : Ae,
                w = S[v],
                L = v === "y" ? "height" : "width",
                F = w + T[Me],
                V = w - T[Ke],
                W = ["top", ve].indexOf(O) !== -1,
                me = (Ee = E ? .[v]) != null ? Ee : 0,
                re = W ? F : w - I[L] - $[L] - me + R.altAxis,
                z = W ? w + I[L] + $[L] - me - R.altAxis : V,
                Pe = p && W ? Ga(re, w, z) : Ye(p ? re : F, w, p ? z : V);
            S[v] = Pe, B[v] = Pe - w
        }
        t.modifiersData[r] = B
    }
}
var Oi = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: Ci,
    requiresIfExists: ["offset"]
};

function ki(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}

function Ei(e) {
    return e === J(e) || !ae(e) ? Rt(e) : ki(e)
}

function Li(e) {
    var t = e.getBoundingClientRect(),
        n = Ve(t.width) / e.offsetWidth || 1,
        r = Ve(t.height) / e.offsetHeight || 1;
    return n !== 1 || r !== 1
}

function ji(e, t, n) {
    n === void 0 && (n = !1);
    var r = ae(t),
        a = ae(t) && Li(t),
        i = Oe(t),
        o = We(e, a, n),
        c = {
            scrollLeft: 0,
            scrollTop: 0
        },
        d = {
            x: 0,
            y: 0
        };
    return (r || !r && !n) && ((de(t) !== "body" || It(i)) && (c = Ei(t)), ae(t) ? (d = We(t, !0), d.x += t.clientLeft, d.y += t.clientTop) : i && (d.x = Dt(i))), {
        x: o.left + c.scrollLeft - d.x,
        y: o.top + c.scrollTop - d.y,
        width: o.width,
        height: o.height
    }
}

function Ri(e) {
    var t = new Map,
        n = new Set,
        r = [];
    e.forEach(function(i) {
        t.set(i.name, i)
    });

    function a(i) {
        n.add(i.name), [].concat(i.requires || [], i.requiresIfExists || []).forEach(function(o) {
            if (!n.has(o)) {
                var c = t.get(o);
                c && a(c)
            }
        }), r.push(i)
    }
    return e.forEach(function(i) {
        n.has(i.name) || a(i)
    }), r
}

function Di(e) {
    var t = Ri(e);
    return Ka.reduce(function(n, r) {
        return n.concat(t.filter(function(a) {
            return a.phase === r
        }))
    }, [])
}

function Ii(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(n) {
            Promise.resolve().then(function() {
                t = void 0, n(e())
            })
        })), t
    }
}

function Ni(e) {
    var t = e.reduce(function(n, r) {
        var a = n[r.name];
        return n[r.name] = a ? Object.assign({}, a, r, {
            options: Object.assign({}, a.options, r.options),
            data: Object.assign({}, a.data, r.data)
        }) : r, n
    }, {});
    return Object.keys(t).map(function(n) {
        return t[n]
    })
}
var Gt = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};

function Jt() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(r) {
        return !(r && typeof r.getBoundingClientRect == "function")
    })
}

function Pi(e) {
    e === void 0 && (e = {});
    var t = e,
        n = t.defaultModifiers,
        r = n === void 0 ? [] : n,
        a = t.defaultOptions,
        i = a === void 0 ? Gt : a;
    return function(c, d, u) {
        u === void 0 && (u = i);
        var s = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Gt, i),
                modifiersData: {},
                elements: {
                    reference: c,
                    popper: d
                },
                attributes: {},
                styles: {}
            },
            m = [],
            h = !1,
            p = {
                state: s,
                setOptions: function(O) {
                    var k = typeof O == "function" ? O(s.options) : O;
                    g(), s.options = Object.assign({}, i, s.options, k), s.scrollParents = {
                        reference: De(c) ? Qe(c) : c.contextElement ? Qe(c.contextElement) : [],
                        popper: Qe(d)
                    };
                    var l = Di(Ni([].concat(r, s.options.modifiers)));
                    return s.orderedModifiers = l.filter(function(M) {
                        return M.enabled
                    }), b(), p.update()
                },
                forceUpdate: function() {
                    if (!h) {
                        var O = s.elements,
                            k = O.reference,
                            l = O.popper;
                        if (Jt(k, l)) {
                            s.rects = {
                                reference: ji(k, et(l), s.options.strategy === "fixed"),
                                popper: Lt(l)
                            }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(R) {
                                return s.modifiersData[R.name] = Object.assign({}, R.data)
                            });
                            for (var M = 0; M < s.orderedModifiers.length; M++) {
                                if (s.reset === !0) {
                                    s.reset = !1, M = -1;
                                    continue
                                }
                                var v = s.orderedModifiers[M],
                                    S = v.fn,
                                    I = v.options,
                                    $ = I === void 0 ? {} : I,
                                    P = v.name;
                                typeof S == "function" && (s = S({
                                    state: s,
                                    options: $,
                                    name: P,
                                    instance: p
                                }) || s)
                            }
                        }
                    }
                },
                update: Ii(function() {
                    return new Promise(function(T) {
                        p.forceUpdate(), T(s)
                    })
                }),
                destroy: function() {
                    g(), h = !0
                }
            };
        if (!Jt(c, d)) return p;
        p.setOptions(u).then(function(T) {
            !h && u.onFirstUpdate && u.onFirstUpdate(T)
        });

        function b() {
            s.orderedModifiers.forEach(function(T) {
                var O = T.name,
                    k = T.options,
                    l = k === void 0 ? {} : k,
                    M = T.effect;
                if (typeof M == "function") {
                    var v = M({
                        state: s,
                        name: O,
                        instance: p,
                        options: l
                    });
                    m.push(v || function() {})
                }
            })
        }

        function g() {
            m.forEach(function(T) {
                return T()
            }), m = []
        }
        return p
    }
}
var Hi = [si, _i, ii, Sn, Mi, yi, Oi, ti, wi],
    $i = Pi({
        defaultModifiers: Hi
    }),
    Bi = "tippy-box",
    Dn = "tippy-content",
    Vi = "tippy-backdrop",
    In = "tippy-arrow",
    Nn = "tippy-svg-arrow",
    je = {
        passive: !0,
        capture: !0
    },
    Pn = function() {
        return document.body
    };

function yt(e, t, n) {
    if (Array.isArray(e)) {
        var r = e[t];
        return r ? ? (Array.isArray(n) ? n[t] : n)
    }
    return e
}

function Nt(e, t) {
    var n = {}.toString.call(e);
    return n.indexOf("[object") === 0 && n.indexOf(t + "]") > -1
}

function Hn(e, t) {
    return typeof e == "function" ? e.apply(void 0, t) : e
}

function Zt(e, t) {
    if (t === 0) return e;
    var n;
    return function(r) {
        clearTimeout(n), n = setTimeout(function() {
            e(r)
        }, t)
    }
}

function Wi(e) {
    return e.split(/\s+/).filter(Boolean)
}

function Be(e) {
    return [].concat(e)
}

function en(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function Fi(e) {
    return e.filter(function(t, n) {
        return e.indexOf(t) === n
    })
}

function zi(e) {
    return e.split("-")[0]
}

function lt(e) {
    return [].slice.call(e)
}

function tn(e) {
    return Object.keys(e).reduce(function(t, n) {
        return e[n] !== void 0 && (t[n] = e[n]), t
    }, {})
}

function Ge() {
    return document.createElement("div")
}

function ft(e) {
    return ["Element", "Fragment"].some(function(t) {
        return Nt(e, t)
    })
}

function Ui(e) {
    return Nt(e, "NodeList")
}

function Ki(e) {
    return Nt(e, "MouseEvent")
}

function qi(e) {
    return !!(e && e._tippy && e._tippy.reference === e)
}

function Xi(e) {
    return ft(e) ? [e] : Ui(e) ? lt(e) : Array.isArray(e) ? e : lt(document.querySelectorAll(e))
}

function bt(e, t) {
    e.forEach(function(n) {
        n && (n.style.transitionDuration = t + "ms")
    })
}

function nn(e, t) {
    e.forEach(function(n) {
        n && n.setAttribute("data-state", t)
    })
}

function Yi(e) {
    var t, n = Be(e)[0];
    return n != null && (t = n.ownerDocument) != null && t.body ? n.ownerDocument : document
}

function Qi(e, t) {
    var n = t.clientX,
        r = t.clientY;
    return e.every(function(a) {
        var i = a.popperRect,
            o = a.popperState,
            c = a.props.interactiveBorder,
            d = zi(o.placement),
            u = o.modifiersData.offset;
        if (!u) return !0;
        var s = d === "bottom" ? u.top.y : 0,
            m = d === "top" ? u.bottom.y : 0,
            h = d === "right" ? u.left.x : 0,
            p = d === "left" ? u.right.x : 0,
            b = i.top - r + s > c,
            g = r - i.bottom - m > c,
            T = i.left - n + h > c,
            O = n - i.right - p > c;
        return b || g || T || O
    })
}

function wt(e, t, n) {
    var r = t + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function(a) {
        e[r](a, n)
    })
}

function rn(e, t) {
    for (var n = t; n;) {
        var r;
        if (e.contains(n)) return !0;
        n = n.getRootNode == null || (r = n.getRootNode()) == null ? void 0 : r.host
    }
    return !1
}
var ce = {
        isTouch: !1
    },
    an = 0;

function Gi() {
    ce.isTouch || (ce.isTouch = !0, window.performance && document.addEventListener("mousemove", $n))
}

function $n() {
    var e = performance.now();
    e - an < 20 && (ce.isTouch = !1, document.removeEventListener("mousemove", $n)), an = e
}

function Ji() {
    var e = document.activeElement;
    if (qi(e)) {
        var t = e._tippy;
        e.blur && !t.state.isVisible && e.blur()
    }
}

function Zi() {
    document.addEventListener("touchstart", Gi, je), window.addEventListener("blur", Ji)
}
var eo = typeof window < "u" && typeof document < "u" ? !!window.msCrypto : !1,
    se = Object.assign({
        appendTo: Pn,
        aria: {
            content: "auto",
            expanded: "auto"
        },
        delay: 0,
        duration: [300, 250],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: "",
        offset: [0, 10],
        onAfterUpdate: function() {},
        onBeforeUpdate: function() {},
        onCreate: function() {},
        onDestroy: function() {},
        onHidden: function() {},
        onHide: function() {},
        onMount: function() {},
        onShow: function() {},
        onShown: function() {},
        onTrigger: function() {},
        onUntrigger: function() {},
        onClickOutside: function() {},
        placement: "top",
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: "mouseenter focus",
        triggerTarget: null
    }, {
        animateFill: !1,
        followCursor: !1,
        inlinePositioning: !1,
        sticky: !1
    }, {
        allowHTML: !1,
        animation: "fade",
        arrow: !0,
        content: "",
        inertia: !1,
        maxWidth: 350,
        role: "tooltip",
        theme: "",
        zIndex: 9999
    }),
    to = Object.keys(se),
    no = function(t) {
        Object.keys(t).forEach(function(n) {
            se[n] = t[n]
        })
    };

function Bn(e) {
    var t = (e.plugins || []).reduce(function(n, r) {
        var a = r.name,
            i = r.defaultValue;
        if (a) {
            var o;
            n[a] = e[a] !== void 0 ? e[a] : (o = se[a]) != null ? o : i
        }
        return n
    }, {});
    return Object.assign({}, e, t)
}

function ro(e, t) {
    return (t ? Object.keys(Bn(Object.assign({}, se, {
        plugins: t
    }))) : to).reduce(function(n, r) {
        var a = (e.getAttribute("data-tippy-" + r) || "").trim();
        if (!a) return n;
        if (r === "content") n[r] = a;
        else try {
            n[r] = JSON.parse(a)
        } catch {
            n[r] = a
        }
        return n
    }, {})
}

function on(e, t) {
    var n = Object.assign({}, t, {
        content: Hn(t.content, [e])
    }, t.ignoreAttributes ? {} : ro(e, t.plugins));
    return n.aria = Object.assign({}, se.aria, n.aria), n.aria = {
        expanded: n.aria.expanded === "auto" ? t.interactive : n.aria.expanded,
        content: n.aria.content === "auto" ? t.interactive ? null : "describedby" : n.aria.content
    }, n
}
var ao = function() {
    return "innerHTML"
};

function Ct(e, t) {
    e[ao()] = t
}

function sn(e) {
    var t = Ge();
    return e === !0 ? t.className = In : (t.className = Nn, ft(e) ? t.appendChild(e) : Ct(t, e)), t
}

function ln(e, t) {
    ft(t.content) ? (Ct(e, ""), e.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? Ct(e, t.content) : e.textContent = t.content)
}

function Ot(e) {
    var t = e.firstElementChild,
        n = lt(t.children);
    return {
        box: t,
        content: n.find(function(r) {
            return r.classList.contains(Dn)
        }),
        arrow: n.find(function(r) {
            return r.classList.contains(In) || r.classList.contains(Nn)
        }),
        backdrop: n.find(function(r) {
            return r.classList.contains(Vi)
        })
    }
}

function Vn(e) {
    var t = Ge(),
        n = Ge();
    n.className = Bi, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
    var r = Ge();
    r.className = Dn, r.setAttribute("data-state", "hidden"), ln(r, e.props), t.appendChild(n), n.appendChild(r), a(e.props, e.props);

    function a(i, o) {
        var c = Ot(t),
            d = c.box,
            u = c.content,
            s = c.arrow;
        o.theme ? d.setAttribute("data-theme", o.theme) : d.removeAttribute("data-theme"), typeof o.animation == "string" ? d.setAttribute("data-animation", o.animation) : d.removeAttribute("data-animation"), o.inertia ? d.setAttribute("data-inertia", "") : d.removeAttribute("data-inertia"), d.style.maxWidth = typeof o.maxWidth == "number" ? o.maxWidth + "px" : o.maxWidth, o.role ? d.setAttribute("role", o.role) : d.removeAttribute("role"), (i.content !== o.content || i.allowHTML !== o.allowHTML) && ln(u, e.props), o.arrow ? s ? i.arrow !== o.arrow && (d.removeChild(s), d.appendChild(sn(o.arrow))) : d.appendChild(sn(o.arrow)) : s && d.removeChild(s)
    }
    return {
        popper: t,
        onUpdate: a
    }
}
Vn.$$tippy = !0;
var io = 1,
    it = [],
    xt = [];

function oo(e, t) {
    var n = on(e, Object.assign({}, se, Bn(tn(t)))),
        r, a, i, o = !1,
        c = !1,
        d = !1,
        u = !1,
        s, m, h, p = [],
        b = Zt(we, n.interactiveDebounce),
        g, T = io++,
        O = null,
        k = Fi(n.plugins),
        l = {
            id: T,
            reference: e,
            popper: Ge(),
            popperInstance: O,
            props: n,
            state: {
                isEnabled: !0,
                isVisible: !1,
                isDestroyed: !1,
                isMounted: !1,
                isShown: !1
            },
            plugins: k,
            clearDelayTimeouts: me,
            setProps: re,
            setContent: z,
            show: Pe,
            hide: Un,
            hideWithInteractivity: Kn,
            enable: V,
            disable: W,
            unmount: qn,
            destroy: Xn
        };
    if (!n.render) return l;
    var M = n.render(l),
        v = M.popper,
        S = M.onUpdate;
    v.setAttribute("data-tippy-root", ""), v.id = "tippy-" + l.id, l.popper = v, e._tippy = l, v._tippy = l;
    var I = k.map(function(f) {
            return f.fn(l)
        }),
        $ = e.hasAttribute("aria-expanded");
    return Ne(), Z(), H(), N("onCreate", [l]), n.showOnCreate && L(), v.addEventListener("mouseenter", function() {
        l.props.interactive && l.state.isVisible && l.clearDelayTimeouts()
    }), v.addEventListener("mouseleave", function() {
        l.props.interactive && l.props.trigger.indexOf("mouseenter") >= 0 && D().addEventListener("mousemove", b)
    }), l;

    function P() {
        var f = l.props.touch;
        return Array.isArray(f) ? f : [f, 0]
    }

    function R() {
        return P()[0] === "hold"
    }

    function E() {
        var f;
        return !!((f = l.props.render) != null && f.$$tippy)
    }

    function B() {
        return g || e
    }

    function D() {
        var f = B().parentNode;
        return f ? Yi(f) : document
    }

    function U() {
        return Ot(v)
    }

    function q(f) {
        return l.state.isMounted && !l.state.isVisible || ce.isTouch || s && s.type === "focus" ? 0 : yt(l.props.delay, f ? 0 : 1, se.delay)
    }

    function H(f) {
        f === void 0 && (f = !1), v.style.pointerEvents = l.props.interactive && !f ? "" : "none", v.style.zIndex = "" + l.props.zIndex
    }

    function N(f, y, x) {
        if (x === void 0 && (x = !0), I.forEach(function(j) {
                j[f] && j[f].apply(j, y)
            }), x) {
            var C;
            (C = l.props)[f].apply(C, y)
        }
    }

    function X() {
        var f = l.props.aria;
        if (f.content) {
            var y = "aria-" + f.content,
                x = v.id;
            Be(l.props.triggerTarget || e).forEach(function(C) {
                var j = C.getAttribute(y);
                if (l.state.isVisible) C.setAttribute(y, j ? j + " " + x : x);
                else {
                    var G = j && j.replace(x, "").trim();
                    G ? C.setAttribute(y, G) : C.removeAttribute(y)
                }
            })
        }
    }

    function Z() {
        $ || !l.props.aria.expanded || Be(l.props.triggerTarget || e).forEach(function(f) {
            l.props.interactive ? f.setAttribute("aria-expanded", l.state.isVisible && f === B() ? "true" : "false") : f.removeAttribute("aria-expanded")
        })
    }

    function ee() {
        D().removeEventListener("mousemove", b), it = it.filter(function(f) {
            return f !== b
        })
    }

    function Y(f) {
        if (!(ce.isTouch && (d || f.type === "mousedown"))) {
            var y = f.composedPath && f.composedPath()[0] || f.target;
            if (!(l.props.interactive && rn(v, y))) {
                if (Be(l.props.triggerTarget || e).some(function(x) {
                        return rn(x, y)
                    })) {
                    if (ce.isTouch || l.state.isVisible && l.props.trigger.indexOf("click") >= 0) return
                } else N("onClickOutside", [l, f]);
                l.props.hideOnClick === !0 && (l.clearDelayTimeouts(), l.hide(), c = !0, setTimeout(function() {
                    c = !1
                }), l.state.isMounted || te())
            }
        }
    }

    function Q() {
        d = !0
    }

    function K() {
        d = !1
    }

    function ie() {
        var f = D();
        f.addEventListener("mousedown", Y, !0), f.addEventListener("touchend", Y, je), f.addEventListener("touchstart", K, je), f.addEventListener("touchmove", Q, je)
    }

    function te() {
        var f = D();
        f.removeEventListener("mousedown", Y, !0), f.removeEventListener("touchend", Y, je), f.removeEventListener("touchstart", K, je), f.removeEventListener("touchmove", Q, je)
    }

    function ne(f, y) {
        le(f, function() {
            !l.state.isVisible && v.parentNode && v.parentNode.contains(v) && y()
        })
    }

    function fe(f, y) {
        le(f, y)
    }

    function le(f, y) {
        var x = U().box;

        function C(j) {
            j.target === x && (wt(x, "remove", C), y())
        }
        if (f === 0) return y();
        wt(x, "remove", m), wt(x, "add", C), m = C
    }

    function oe(f, y, x) {
        x === void 0 && (x = !1), Be(l.props.triggerTarget || e).forEach(function(C) {
            C.addEventListener(f, y, x), p.push({
                node: C,
                eventType: f,
                handler: y,
                options: x
            })
        })
    }

    function Ne() {
        R() && (oe("touchstart", be, {
            passive: !0
        }), oe("touchend", xe, {
            passive: !0
        })), Wi(l.props.trigger).forEach(function(f) {
            if (f !== "manual") switch (oe(f, be), f) {
                case "mouseenter":
                    oe("mouseleave", xe);
                    break;
                case "focus":
                    oe(eo ? "focusout" : "blur", Te);
                    break;
                case "focusin":
                    oe("focusout", Te)
            }
        })
    }

    function pe() {
        p.forEach(function(f) {
            var y = f.node,
                x = f.eventType,
                C = f.handler,
                j = f.options;
            y.removeEventListener(x, C, j)
        }), p = []
    }

    function be(f) {
        var y, x = !1;
        if (!(!l.state.isEnabled || ke(f) || c)) {
            var C = ((y = s) == null ? void 0 : y.type) === "focus";
            s = f, g = f.currentTarget, Z(), !l.state.isVisible && Ki(f) && it.forEach(function(j) {
                return j(f)
            }), f.type === "click" && (l.props.trigger.indexOf("mouseenter") < 0 || o) && l.props.hideOnClick !== !1 && l.state.isVisible ? x = !0 : L(f), f.type === "click" && (o = !x), x && !C && F(f)
        }
    }

    function we(f) {
        var y = f.target,
            x = B().contains(y) || v.contains(y);
        f.type === "mousemove" && x || Qi(w().concat(v).map(function(C) {
            var j, G = (j = C._tippy.popperInstance) == null ? void 0 : j.state;
            return G ? {
                popperRect: C.getBoundingClientRect(),
                popperState: G,
                props: n
            } : null
        }).filter(Boolean), f) && (ee(), F(f))
    }

    function xe(f) {
        if (!(ke(f) || l.props.trigger.indexOf("click") >= 0 && o)) {
            if (l.props.interactive) {
                l.hideWithInteractivity(f);
                return
            }
            F(f)
        }
    }

    function Te(f) {
        l.props.trigger.indexOf("focusin") < 0 && f.target !== B() || l.props.interactive && f.relatedTarget && v.contains(f.relatedTarget) || F(f)
    }

    function ke(f) {
        return ce.isTouch ? R() !== f.type.indexOf("touch") >= 0 : !1
    }

    function Ee() {
        Me();
        var f = l.props,
            y = f.popperOptions,
            x = f.placement,
            C = f.offset,
            j = f.getReferenceClientRect,
            G = f.moveTransition,
            Le = E() ? Ot(v).arrow : null,
            pt = j ? {
                getBoundingClientRect: j,
                contextElement: j.contextElement || B()
            } : e,
            qe = [{
                name: "offset",
                options: {
                    offset: C
                }
            }, {
                name: "preventOverflow",
                options: {
                    padding: {
                        top: 2,
                        bottom: 2,
                        left: 5,
                        right: 5
                    }
                }
            }, {
                name: "flip",
                options: {
                    padding: 5
                }
            }, {
                name: "computeStyles",
                options: {
                    adaptive: !G
                }
            }, {
                name: "$$tippy",
                enabled: !0,
                phase: "beforeWrite",
                requires: ["computeStyles"],
                fn: function(nt) {
                    var He = nt.state;
                    if (E()) {
                        var $e = U().box;
                        ["placement", "reference-hidden", "escaped"].forEach(function(rt) {
                            rt === "placement" ? $e.setAttribute("data-placement", He.placement) : He.attributes.popper["data-popper-" + rt] ? $e.setAttribute("data-" + rt, "") : $e.removeAttribute("data-" + rt)
                        }), He.attributes.popper = {}
                    }
                }
            }];
        E() && Le && qe.push({
            name: "arrow",
            options: {
                element: Le,
                padding: 3
            }
        }), qe.push.apply(qe, y ? .modifiers || []), l.popperInstance = $i(pt, v, Object.assign({}, y, {
            placement: x,
            onFirstUpdate: h,
            modifiers: qe
        }))
    }

    function Me() {
        l.popperInstance && (l.popperInstance.destroy(), l.popperInstance = null)
    }

    function Ke() {
        var f = l.props.appendTo,
            y, x = B();
        l.props.interactive && f === Pn || f === "parent" ? y = x.parentNode : y = Hn(f, [x]), y.contains(v) || y.appendChild(v), l.state.isMounted = !0, Ee()
    }

    function w() {
        return lt(v.querySelectorAll("[data-tippy-root]"))
    }

    function L(f) {
        l.clearDelayTimeouts(), f && N("onTrigger", [l, f]), ie();
        var y = q(!0),
            x = P(),
            C = x[0],
            j = x[1];
        ce.isTouch && C === "hold" && j && (y = j), y ? r = setTimeout(function() {
            l.show()
        }, y) : l.show()
    }

    function F(f) {
        if (l.clearDelayTimeouts(), N("onUntrigger", [l, f]), !l.state.isVisible) {
            te();
            return
        }
        if (!(l.props.trigger.indexOf("mouseenter") >= 0 && l.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(f.type) >= 0 && o)) {
            var y = q(!1);
            y ? a = setTimeout(function() {
                l.state.isVisible && l.hide()
            }, y) : i = requestAnimationFrame(function() {
                l.hide()
            })
        }
    }

    function V() {
        l.state.isEnabled = !0
    }

    function W() {
        l.hide(), l.state.isEnabled = !1
    }

    function me() {
        clearTimeout(r), clearTimeout(a), cancelAnimationFrame(i)
    }

    function re(f) {
        if (!l.state.isDestroyed) {
            N("onBeforeUpdate", [l, f]), pe();
            var y = l.props,
                x = on(e, Object.assign({}, y, tn(f), {
                    ignoreAttributes: !0
                }));
            l.props = x, Ne(), y.interactiveDebounce !== x.interactiveDebounce && (ee(), b = Zt(we, x.interactiveDebounce)), y.triggerTarget && !x.triggerTarget ? Be(y.triggerTarget).forEach(function(C) {
                C.removeAttribute("aria-expanded")
            }) : x.triggerTarget && e.removeAttribute("aria-expanded"), Z(), H(), S && S(y, x), l.popperInstance && (Ee(), w().forEach(function(C) {
                requestAnimationFrame(C._tippy.popperInstance.forceUpdate)
            })), N("onAfterUpdate", [l, f])
        }
    }

    function z(f) {
        l.setProps({
            content: f
        })
    }

    function Pe() {
        var f = l.state.isVisible,
            y = l.state.isDestroyed,
            x = !l.state.isEnabled,
            C = ce.isTouch && !l.props.touch,
            j = yt(l.props.duration, 0, se.duration);
        if (!(f || y || x || C) && !B().hasAttribute("disabled") && (N("onShow", [l], !1), l.props.onShow(l) !== !1)) {
            if (l.state.isVisible = !0, E() && (v.style.visibility = "visible"), H(), ie(), l.state.isMounted || (v.style.transition = "none"), E()) {
                var G = U(),
                    Le = G.box,
                    pt = G.content;
                bt([Le, pt], 0)
            }
            h = function() {
                var mt;
                if (!(!l.state.isVisible || u)) {
                    if (u = !0, v.offsetHeight, v.style.transition = l.props.moveTransition, E() && l.props.animation) {
                        var nt = U(),
                            He = nt.box,
                            $e = nt.content;
                        bt([He, $e], j), nn([He, $e], "visible")
                    }
                    X(), Z(), en(xt, l), (mt = l.popperInstance) == null || mt.forceUpdate(), N("onMount", [l]), l.props.animation && E() && fe(j, function() {
                        l.state.isShown = !0, N("onShown", [l])
                    })
                }
            }, Ke()
        }
    }

    function Un() {
        var f = !l.state.isVisible,
            y = l.state.isDestroyed,
            x = !l.state.isEnabled,
            C = yt(l.props.duration, 1, se.duration);
        if (!(f || y || x) && (N("onHide", [l], !1), l.props.onHide(l) !== !1)) {
            if (l.state.isVisible = !1, l.state.isShown = !1, u = !1, o = !1, E() && (v.style.visibility = "hidden"), ee(), te(), H(!0), E()) {
                var j = U(),
                    G = j.box,
                    Le = j.content;
                l.props.animation && (bt([G, Le], C), nn([G, Le], "hidden"))
            }
            X(), Z(), l.props.animation ? E() && ne(C, l.unmount) : l.unmount()
        }
    }

    function Kn(f) {
        D().addEventListener("mousemove", b), en(it, b), b(f)
    }

    function qn() {
        l.state.isVisible && l.hide(), l.state.isMounted && (Me(), w().forEach(function(f) {
            f._tippy.unmount()
        }), v.parentNode && v.parentNode.removeChild(v), xt = xt.filter(function(f) {
            return f !== l
        }), l.state.isMounted = !1, N("onHidden", [l]))
    }

    function Xn() {
        l.state.isDestroyed || (l.clearDelayTimeouts(), l.unmount(), pe(), delete e._tippy, l.state.isDestroyed = !0, N("onDestroy", [l]))
    }
}

function tt(e, t) {
    t === void 0 && (t = {});
    var n = se.plugins.concat(t.plugins || []);
    Zi();
    var r = Object.assign({}, t, {
            plugins: n
        }),
        a = Xi(e).reduce(function(i, o) {
            var c = o && oo(o, r);
            return c && i.push(c), i
        }, []);
    return ft(e) ? a[0] : a
}
tt.defaultProps = se;
tt.setDefaultProps = no;
tt.currentInput = ce;
var ns = Object.assign({}, Sn, {
    effect: function(t) {
        var n = t.state,
            r = {
                popper: {
                    position: n.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
        Object.assign(n.elements.popper.style, r.popper), n.styles = r, n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow)
    }
});
tt.setDefaultProps({
    render: Vn
});

function so(e) {
    let t = [],
        n = null;
    const r = new Map,
        a = new Set,
        i = () => {
            for (const u of a) u()
        },
        o = u => {
            const s = r.get(u),
                m = s ? .closest(e);
            if (!s || !m) return;
            const h = s.getBoundingClientRect(),
                p = m.getBoundingClientRect();
            h.top < p.top ? m.scrollTop -= p.top - h.top : h.bottom > p.bottom && (m.scrollTop += h.bottom - p.bottom)
        },
        c = u => !t.includes(u) || n === u ? !1 : (n = u, i(), !0);
    return {
        getHighlighted: () => n,
        move: u => {
            if (t.length === 0) return null;
            const s = n === null ? -1 : t.indexOf(n);
            let m = (s + u + t.length) % t.length;
            s === -1 && (m = u === 1 ? 0 : t.length - 1);
            const h = t[m];
            return c(h), o(h), h
        },
        reconcile: u => {
            if (t = u, n === null || !t.includes(n)) {
                const s = t[0] ? ? null;
                n !== s && (n = s, i())
            }
        },
        registerElement: (u, s) => {
            s ? r.set(u, s) : r.delete(u)
        },
        setHighlighted: u => {
            c(u) && o(u)
        },
        subscribe: u => (a.add(u), () => a.delete(u))
    }
}
var Wn = (0, _.forwardRef)(({
    items: e,
    query: t,
    editorElement: n,
    command: r
}, a) => {
    const i = (0, _.useMemo)(() => so("[data-emoji-suggestion-list]"), []),
        o = (0, _.useMemo)(() => e.map(s => s.name), [e]);
    (0, _.useLayoutEffect)(() => i.reconcile(o), [i, o]);
    const c = (0, _.useSyncExternalStore)(i.subscribe, i.getHighlighted, i.getHighlighted),
        d = (0, _.useId)(),
        u = c ? cn(d, c) : void 0;
    return (0, _.useEffect)(() => {
        if (!n) return;
        const s = n.getAttribute("aria-controls");
        return n.setAttribute("aria-controls", d), () => {
            s === null ? n.removeAttribute("aria-controls") : n.setAttribute("aria-controls", s)
        }
    }, [n, d]), (0, _.useEffect)(() => {
        if (n) return u ? n.setAttribute("aria-activedescendant", u) : n.removeAttribute("aria-activedescendant"), () => n.removeAttribute("aria-activedescendant")
    }, [u, n]), (0, _.useImperativeHandle)(a, () => ({
        onKeyDown: ({
            event: s
        }) => {
            if (s.key === "ArrowUp") return i.move(-1), !0;
            if (s.key === "ArrowDown") return i.move(1), !0;
            if (s.key === "Enter" || s.key === "Tab") {
                const m = i.getHighlighted(),
                    h = e.find(p => p.name === m) ? ? e[0];
                return h ? (r(h), !0) : !1
            }
            return !1
        }
    })), e.length === 0 ? null : (0, A.jsx)(rr, {
        className: "text-primary-pulse rounded-3 w-72 max-w-[calc(100vw-1rem)] p-1",
        children: (0, A.jsx)("div", {
            role: "listbox",
            id: d,
            "aria-label": _r(),
            "data-emoji-suggestion-list": !0,
            className: "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
            children: e.map(s => (0, A.jsx)(lo, {
                item: s,
                query: t,
                itemId: cn(d, s.name),
                highlighted: c === s.name,
                command: r,
                navigation: i
            }, s.name))
        })
    })
});
Wn.displayName = "EmojiSuggestionDropdown";

function lo({
    item: e,
    query: t,
    itemId: n,
    highlighted: r,
    command: a,
    navigation: i
}) {
    const o = (0, _.useCallback)(c => i.registerElement(e.name, c), [e.name, i]);
    return (0, A.jsxs)(qr, {
        ref: o,
        render: (0, A.jsx)("button", {
            type: "button"
        }),
        role: "option",
        id: n,
        tabIndex: -1,
        "aria-selected": r,
        highlighted: r,
        onClick: () => a(e),
        onFocus: () => i.setHighlighted(e.name),
        onPointerMove: () => i.setHighlighted(e.name),
        onPointerDown: c => c.preventDefault(),
        children: [(0, A.jsx)("span", {
            "aria-hidden": "true",
            className: "flex size-6 shrink-0 items-center justify-center text-lg leading-none",
            children: e.emoji
        }), (0, A.jsx)("span", {
            className: "text-secondary-pulse min-w-0 flex-1 truncate text-sm",
            children: (0, A.jsx)(co, {
                name: e.name,
                query: t
            })
        })]
    })
}

function co({
    name: e,
    query: t
}) {
    const n = t ? e.indexOf(t.toLowerCase()) : -1;
    if (n === -1) return (0, A.jsx)(A.Fragment, {
        children: `:${e}:`
    });
    const r = n + t.length;
    return (0, A.jsxs)(A.Fragment, {
        children: [`:${e.slice(0,n)}`, (0, A.jsx)("span", {
            className: "text-primary-pulse font-medium",
            children: e.slice(n, r)
        }), `${e.slice(r)}:`]
    })
}

function cn(e, t) {
    return `${e}-${encodeURIComponent(t)}`
}
var uo = `
joy heart heart_eyes rofl blush pray two_hearts sob kissing_heart +1 sweat_smile clap grin
hearts fire broken_heart sparkling_heart blue_heart cry thinking laughing roll_eyes muscle wink
relaxed ok_hand hugs purple_heart pensive sunglasses innocent rose facepalm tada bangbang
revolving_hearts v sparkles shrug scream relieved cherry_blossom raised_hands yum heartpulse
green_heart smirk yellow_heart slightly_smiling_face heartbeat star_struck smile grinning
black_heart smiley 100 see_no_evil point_down notes unamused hand_over_mouth
heavy_heart_exclamation exclamation stuck_out_tongue_winking_eye kiss eyes sleepy expressionless
boom raising_hand disappointed weary rage zany_face fist_oncoming sunny disappointed_relieved
drooling_face point_right woman_dancing flushed hand kissing_closed_eyes
stuck_out_tongue_closed_eyes sleeping star2 grimacing upside_down_face four_leaf_clover tulip
heart_eyes_cat sweat star white_check_mark rainbow smiling_imp metal sweat_drops
heavy_check_mark persevere runner bouquet frowning_face confetti_ball cupid angry point_up
confused hibiscus birthday sunflower neutral_face middle_finger gift_heart speak_no_evil joy_cat
speaking_head dizzy skull crown musical_note crossed_fingers stuck_out_tongue red_circle triumph
blossom tired_face soccer call_me_hand coffee trophy orange_heart gift zap sun_with_face balloon
x fist_raised wave astonished herb shushing_face point_left open_mouth ok_person beers leaves
dog tipping_hand_person cold_sweat raised_eyebrow no_mouth handshake walking moneybag strawberry
anger love_you_gesture slightly_frowning_face rotating_light dash cursing_face airplane ribbon
beer nerd_face kissing_smiling_eyes heart_decoration seedling confounded baby arrow_forward
arrow_right question gem money_with_wings arrow_down fearful new_moon_with_face butterfly mask
man_dancing warning no_good worried dizzy_face -1 palms_up_together cowboy_hat_face
sneezing_face pushpin large_blue_circle nail_care monocle_face feet cherries kissing
money_mouth_face rocket ocean exploding_head pig phone droplet hushed massage point_up_2
microphone bow peach snowflake palm_tree bomb frog love_letter round_pushpin wilted_flower
nauseated_face tongue bulb hankey interrobang open_hands camera_flash ghost zipper_mouth_face
vomiting_face musical_score writing_hand triangular_flag_on_post apple tangerine angel ring mega
clinking_glasses arrow_heading_down iphone umbrella crescent_moon
`.trim().split(/\s+/),
    ct = null,
    Fn = null,
    Tt = null;

function un() {
    return Tt ? ? = ur(async () => {
        const {
            gemoji: e,
            nameToEmoji: t
        } = await
        import ("./gemoji-BYsLEzyp.js");
        return {
            gemoji: e,
            nameToEmoji: t
        }
    }, []).then(({
        gemoji: e,
        nameToEmoji: t
    }) => {
        const n = new Map(uo.map((r, a) => [r, a]));
        ct = e.map(({
            emoji: r,
            names: a,
            tags: i,
            description: o
        }) => ({
            emoji: r,
            names: a,
            keywords: [...new Set([...a, ...i, o].flatMap(fo))],
            popularity: n.get(a[0])
        })), Fn = new Map(Object.entries(t))
    }).catch(e => {
        throw Tt = null, e
    }), Tt
}

function fo(e) {
    return e.toLowerCase().split(/[^a-z0-9+-]+/).filter(Boolean)
}

function po() {
    return ct !== null
}

function rs(e) {
    return Fn ? .get(e.toLowerCase())
}

function dn(e, t) {
    return ct ? vo(ct, e, t) : []
}
var mo = Number.MAX_SAFE_INTEGER;

function vo(e, t, n) {
    const r = t.toLowerCase(),
        a = r.split("_").filter(Boolean);
    if (a.length === 0) return [];
    const i = [];
    return e.forEach((o, c) => {
        const d = ho(o, r, a);
        d && i.push({ ...d,
            popularity: o.popularity ? ? mo,
            index: c
        })
    }), i.sort((o, c) => o.score - c.score || o.popularity - c.popularity || o.index - c.index).slice(0, n).map(({
        item: o
    }) => o)
}

function ho(e, t, n) {
    let r = null;
    for (const a of e.names) {
        const i = a === t ? 0 : a.startsWith(t) ? 1 : a.includes(t) ? 2 : null;
        i !== null && (!r || i < r.score || i === r.score && a.length < r.name.length) && (r = {
            name: a,
            score: i
        })
    }
    return !r && n.every(a => e.keywords.some(i => i.startsWith(a))) && (r = {
        name: e.names[0],
        score: 3
    }), r && {
        item: {
            name: r.name,
            emoji: e.emoji
        },
        score: r.score
    }
}
var go = 2,
    fn = 25,
    yo = /^[a-zA-Z0-9_+-]+$/;

function as() {
    const e = (0, _.useRef)(!1),
        t = Gn(),
        n = (0, _.useCallback)(() => {
            un().catch(() => {})
        }, []);
    return {
        suggestionOptions: (0, _.useMemo)(() => ({
            char: ":",
            pluginKey: Xe,
            allowSpaces: !1,
            startOfLine: !1,
            decorationClass: "emoji-suggestion",
            items: ({
                query: r
            }) => r.length < go || !yo.test(r) ? [] : po() ? dn(r, fn) : un().then(() => dn(r, fn)).catch(() => []),
            render: () => {
                let r = null,
                    a = null,
                    i = null,
                    o = null,
                    c = null;
                const d = u => {
                    const s = u.items.length > 0;
                    if (e.current = s, !!a ? .[0]) {
                        if (!u.clientRect || !s) {
                            a[0].hide();
                            return
                        }
                        a[0].setProps({
                            getReferenceClientRect: u.clientRect
                        }), a[0].show()
                    }
                };
                return {
                    onStart: u => {
                        const s = Xe.getState(u.editor.state);
                        if (!(!s ? .active || s.query !== u.query || c !== null)) {
                            if (c = u.editor.view, r = new bn(Wn, {
                                    props: {
                                        items: u.items,
                                        query: u.query,
                                        editorElement: u.editor.view.dom,
                                        command: m => u.command(m)
                                    },
                                    editor: u.editor
                                }), !u.clientRect) {
                                e.current = !1;
                                return
                            }
                            a = tt("body", {
                                getReferenceClientRect: u.clientRect,
                                appendTo: () => document.body,
                                content: r.element,
                                showOnCreate: !1,
                                interactive: !0,
                                trigger: "manual",
                                zIndex: 0,
                                placement: "top-start",
                                offset: [0, 8],
                                ...t ? {
                                    popperOptions: {
                                        modifiers: [{
                                            name: "flip",
                                            enabled: !1
                                        }, {
                                            name: "preventOverflow",
                                            options: {
                                                mainAxis: !0,
                                                altAxis: !1,
                                                padding: 8
                                            }
                                        }]
                                    }
                                } : {},
                                theme: "suggestion",
                                onClickOutside: () => document.dispatchEvent(new CustomEvent("dismiss-chat-suggestions"))
                            }), d(u), i = u.editor.view.dom, o = () => Bt(u.editor.view, Xe), i.addEventListener("scroll", o)
                        }
                    },
                    onUpdate: u => {
                        c && (r ? .updateProps({
                            items: u.items,
                            query: u.query,
                            command: s => u.command(s)
                        }), d(u))
                    },
                    onKeyDown: u => u.event.isComposing || u.event.keyCode === 229 ? !1 : u.event.key === "Escape" ? !e.current || !c ? !1 : (Bt(c, Xe), !0) : e.current ? r ? .ref ? .onKeyDown(u) ? ? !1 : !1,
                    onExit: () => {
                        const u = r,
                            s = a ? .[0];
                        e.current = !1, c = null, r = null, a = null, i && o && i.removeEventListener("scroll", o), s ? .hide(), requestAnimationFrame(() => {
                            s ? .destroy(), u ? .destroy()
                        })
                    }
                }
            },
            command: ({
                editor: r,
                range: a,
                props: i
            }) => {
                r.chain().focus().deleteRange(a).insertContent(i.emoji).run()
            }
        }), [t]),
        isSuggestionActive: (0, _.useCallback)(() => e.current, []),
        notifyColonTyped: n
    }
}
var bo = 12,
    Mt = e => e.trim().toLowerCase().replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim(),
    wo = (e, t) => t === 1 || !zn(e, t),
    xo = (e, t) => e.doc.textBetween(1, t, `
`, `
`),
    zn = (e, t) => {
        let n = !1;
        return e.doc.nodesBetween(0, t, (r, a) => {
            if (n) return !1;
            if (r.isText) {
                const i = r.text ? .slice(0, Math.max(0, t - a)) ? ? "";
                return n = /\S/.test(i), !n
            }
            return r.isInline && r.isAtom ? (n = !0, !1) : !0
        }), n
    },
    To = (e, t) => {
        if (t <= 1) return !1;
        const n = xo(e, t);
        return zn(e, t) && /\s$/.test(n)
    },
    pn = (e, t) => wo(e, t) || To(e, t);

function Mo(e) {
    const t = [];
    let n = 0;
    for (const r of e) {
        if (At(r) || da(r)) {
            t.push(r);
            continue
        }
        n < bo && (t.push(r), n += 1)
    }
    return t
}

function is({
    enabled: e = !0,
    skillsEnabled: t = !0,
    isOmniRecipient: n = !1,
    isBuilderComposer: r = !1
} = {}) {
    const a = nr(),
        i = (0, _.useRef)(e);
    i.current = e;
    const o = (0, _.useRef)(t);
    o.current = t;
    const [c, d] = (0, _.useState)(!1), {
        workspaceId: u,
        projectId: s,
        canViewWorkspaceSkills: m,
        personalSkillsEnabled: h,
        hasProjectSkillsSource: p,
        projectStoreLoading: b,
        workspaceSkills: g,
        projectSkills: T,
        personalSkills: O
    } = Yr({
        enabled: t && c,
        staleTime: 3e4
    }), k = Gr({
        permission: ar.ManageWorkspaceSkills
    }).allowed, l = Qr(w => w.project ? .tech_stack), M = ht(kr).enabled, v = ht(Er, {
        apply: !1
    }).value.variant === "treatment", S = t && (m && !!u || p || h), I = (0, _.useRef)(S);
    I.current = S;
    const $ = Dr(),
        P = Lr(),
        R = e && (n || r && P),
        E = n ? R && $ : R,
        B = ht(Or).enabled,
        D = e && B && r && !n,
        {
            data: U = [],
            isLoading: q
        } = g,
        {
            data: H = [],
            isLoading: N
        } = T,
        {
            data: X = [],
            isLoading: Z
        } = O,
        ee = t && (b || q || N || Z),
        Y = [m ? g : void 0, p ? T : void 0, h ? O : void 0].find(w => t && w ? .isError),
        Q = (0, _.useMemo)(() => E ? [{
            type: "max-command",
            name: ua,
            label: xr(),
            description: n ? Tr() : Ar(),
            author: "Lovable"
        }] : [], [E, n]),
        K = (0, _.useMemo)(() => D ? [{
            type: "plan-command",
            name: fa,
            label: mr(),
            description: vr(),
            author: "Lovable"
        }] : [], [D]),
        ie = (0, _.useRef)(E);
    ie.current = E;
    const te = (0, _.useRef)(D);
    te.current = D;
    const ne = (0, _.useMemo)(() => {
            if (!t || !m && !p && !h) return [...Q, ...K];
            const w = h ? X : [],
                L = m ? Vt(U, w) : [],
                F = p ? Vt(H, w) : [],
                V = Vr(Xr, {
                    tanstackMigrationAvailable: zr(l),
                    databaseOptimizationAvailable: M,
                    codeReviewAvailable: v
                }),
                W = Wr(V, k),
                me = Br(W, [...L, ...w]),
                re = (z, Pe) => ({
                    type: "skill",
                    name: z.name,
                    description: z.description,
                    metadata: z.metadata,
                    source: Pe,
                    markdown: z.markdown
                });
            return [...Q, ...K, ...w.map(z => ({ ...re(z, "personal"),
                detailSource: a ? {
                    type: "personal",
                    userId: a
                } : void 0
            })), ...L.map(z => ({ ...re(z),
                detailSource: u && a ? {
                    type: "workspace",
                    workspaceId: u,
                    userId: a
                } : void 0
            })), ...F.map(z => ({ ...re(z, "project"),
                detailSource: s && a ? {
                    type: "project",
                    projectId: s,
                    userId: a
                } : void 0
            })), ...me.map(z => re(z))]
        }, [k, m, p, Q, K, X, h, H, s, l, M, v, U, t, a, u]),
        fe = (0, _.useRef)(ne);
    fe.current = ne;
    const le = (0, _.useMemo)(() => ne.map((w, L) => ({
            item: w,
            index: L,
            slugSearch: Mt(w.name),
            displaySearch: Mt($r(w.name))
        })), [ne]),
        oe = (0, _.useRef)(le);
    oe.current = le;
    const Ne = (0, _.useRef)(ee);
    Ne.current = ee;
    const pe = (0, _.useRef)(!1),
        be = (0, _.useRef)(!1),
        we = (0, _.useCallback)(w => {
            const L = Mt(w),
                F = L ? oe.current.map(({
                    item: V,
                    index: W,
                    slugSearch: me,
                    displaySearch: re
                }) => me.startsWith(L) ? {
                    item: V,
                    index: W,
                    score: 0
                } : re.startsWith(L) ? {
                    item: V,
                    index: W,
                    score: 1
                } : me.includes(L) ? {
                    item: V,
                    index: W,
                    score: 2
                } : re.includes(L) ? {
                    item: V,
                    index: W,
                    score: 3
                } : null).filter(V => V !== null).sort((V, W) => V.score - W.score || V.index - W.index).map(({
                    item: V
                }) => V) : fe.current;
            return Mo(la(F))
        }, []),
        xe = (0, _.useRef)(we);
    xe.current = we;
    const Te = (0, _.useCallback)((w, L, F, V = !0) => {
            if (At(w) || ca(w)) {
                const W = L.chain().focus();
                V ? W.deleteRange(F) : W.setTextSelection(1), At(w) ? W.insertMaxCommand().run() : W.insertPlanCommand().run()
            } else o.current && L.chain().focus().deleteRange(F).insertSkillCommand(w.name, w.description).run()
        }, []),
        ke = (0, _.useMemo)(() => ({
            char: "/",
            pluginKey: xn,
            allowSpaces: !0,
            startOfLine: !1,
            decorationClass: "skill-command-suggestion",
            shouldShow: ({
                transaction: w
            }) => !i.current || !I.current && !ie.current && !te.current ? !1 : be.current && w.docChanged ? (be.current = !1, !0) : pe.current,
            allow: ({
                state: w,
                range: L
            }) => {
                if (!i.current || !I.current && !ie.current && !te.current) return !1;
                const F = w.doc.textBetween(L.from + 1, L.to, "");
                return /^\s|[\t\r\n/]/.test(F) ? !1 : pn(w, L.from)
            },
            items: ({
                query: w
            }) => xe.current(w),
            command: ({
                editor: w,
                range: L,
                props: F
            }) => Te(F, w, L)
        }), [Te]),
        Ee = (w, L, F, V = !0) => xe.current(w),
        Me = (0, _.useCallback)(() => {
            e && (d(!0), be.current = !0)
        }, [e]),
        Ke = (0, _.useCallback)((w, L) => {
            pn(w, L) && Me()
        }, [Me]);
    return {
        suggestionOptions: ke,
        getMenuItems: Ee,
        selectItem: Te,
        hasRequestedSkills: c,
        isLoading: ee,
        error: Y ? {
            message: fr(),
            retry: () => Y.refetch()
        } : void 0,
        hasSkills: S || E || D,
        onOpen: () => {
            d(!0), sa()
        },
        setActive: w => {
            pe.current = w
        },
        isMaxCommandEnabled: R,
        notifySlashInsertionStarted: Me,
        notifySlashTyped: Ke
    }
}

function os(e, t, n) {
    if (e.isDestroyed || !e.isEditable || !e.schema.nodes.collectionMention || !n(t.actorId, t.projectId)) return "aborted";
    const r = e.chain();
    return t.focus !== !1 && r.focus(), r.insertCollectionMention(t.artifactId, t.label).run() ? "inserted" : "failed"
}
async function ss(e, t, n, r) {
    if (e.isDestroyed || !e.isEditable || !e.schema.nodes.collectionMention) return "aborted";
    e.commands.focus();
    const {
        doc: a,
        selection: i
    } = e.state, o = await n();
    if (o === "aborted") return "aborted";
    if (!o) return "failed";
    if (e.isDestroyed || !e.isEditable || !e.state.doc.eq(a) || !e.state.selection.eq(i) || !r(o.actorId, o.projectId)) return "aborted";
    const c = e.chain().deleteRange(t);
    return (Pr(e.state.doc, t.from) ? c.insertContentAt(t.from, " ") : c).insertCollectionMention(o.artifactId, o.label).run() ? "inserted" : "failed"
}
var ls = Se.create({
        name: "collectionMention",
        group: "inline",
        inline: !0,
        atom: !0,
        selectable: !1,
        addOptions: () => ({
            enabled: () => !1,
            hydrationReady: () => !0
        }),
        addAttributes: () => ({
            artifactId: {
                default: ""
            },
            label: {
                default: ""
            }
        }),
        renderHTML: () => ["span", {
            "data-type": "collectionMention"
        }],
        renderText: ({
            node: e
        }) => vt(String(e.attrs.artifactId), String(e.attrs.label)) ? ? "",
        addNodeView() {
            return Ce(({
                node: e,
                deleteNode: t
            }) => (0, A.jsx)(ye, {
                as: "span",
                contentEditable: !1,
                children: (0, A.jsx)(pa, {
                    artifactId: String(e.attrs.artifactId),
                    fallback: (0, A.jsx)("span", {
                        className: "fs-mask",
                        children: vt(String(e.attrs.artifactId), String(e.attrs.label)) ? ? String(e.attrs.label)
                    }),
                    pendingLabel: String(e.attrs.label) || void 0,
                    onRemove: t
                })
            }), {
                as: "span"
            })
        },
        addCommands() {
            return {
                insertCollectionMention: (e, t) => ({
                    commands: n
                }) => {
                    if (!this.options.enabled() || !vt(e, t)) return !1;
                    const r = Ht(this.editor.getText());
                    return r.tooMany || r.matches.length >= 100 ? !1 : n.insertContent([{
                        type: this.name,
                        attrs: {
                            artifactId: e,
                            label: t
                        }
                    }, {
                        type: "text",
                        text: " "
                    }])
                }
            }
        },
        addProseMirrorPlugins() {
            return [new kt({
                appendTransaction: (e, t, n) => {
                    if (!this.options.enabled() || !this.options.hydrationReady() || !e.some(s => s.docChanged || s.getMeta("refreshCollectionMentions")) || !n.doc.textContent.includes("@collection:")) return null;
                    let r = "";
                    const a = [],
                        i = aa(n.schema),
                        o = {
                            from: 0,
                            to: n.doc.content.size
                        };
                    n.doc.nodesBetween(o.from, o.to, (s, m, h, p) => {
                        s.isBlock && m > 0 && (r += `

`, a.push(void 0, void 0));
                        const b = i[s.type.name];
                        if (b && h) {
                            const g = b({
                                node: s,
                                pos: m,
                                parent: h,
                                index: p,
                                range: o
                            });
                            return r += g, a.push(...Array.from({
                                length: g.length
                            }, () => {})), !1
                        }
                        if (s.isText && s.text) {
                            r += s.text;
                            for (let g = 0; g < s.text.length; g++) a.push(m + g)
                        }
                    });
                    const c = Ht(r);
                    if (c.tooMany) return null;
                    const d = [];
                    for (const s of c.matches) {
                        const m = a[s.startIndex];
                        m === void 0 || a.slice(s.startIndex, s.endIndex).some((h, p) => h !== m + p) || d.push({
                            from: m,
                            to: m + s.fullMatch.length,
                            artifactId: s.artifactId,
                            label: s.label
                        })
                    }
                    if (d.length === 0) return null;
                    const u = n.tr;
                    for (const s of d.reverse()) u.replaceWith(s.from, s.to, n.schema.nodes.collectionMention.create({
                        artifactId: s.artifactId,
                        label: s.label
                    }));
                    return u
                }
            })]
        }
    }),
    Ao = ({
        node: e,
        deleteNode: t
    }) => {
        const n = e.attrs.id,
            r = e.attrs.title || n,
            a = e.attrs.mimeType,
            i = a ? Ur(a).icon : hn,
            o = e.attrs.version == null ? r : `${r} · ${cr({version:String(e.attrs.version)})}`;
        return (0, A.jsx)(ye, {
            as: "span",
            className: "inline",
            dir: "ltr",
            contentEditable: !1,
            children: (0, A.jsx)(_e, {
                label: o,
                tooltip: `File: ${o}`,
                variant: "file",
                icon: i,
                truncate: !0,
                onRemove: t
            })
        })
    };

function mn(e) {
    return e.replace(/\s+/g, " ").trim()
}

function Pt(e, t) {
    const n = mn(e.title) || mn(e.filename) || e.id;
    if (t !== void 0 && (!Number.isSafeInteger(t) || t < 1)) throw new Error("Invalid workspace file version");
    const r = t === void 0 ? "" : `:${t}`;
    return `@workspace-file:${e.id}${r}:"${ze(n)}"`
}

function cs(e, t, n) {
    const r = Pt(t, n);
    return tr(e).some(a => a.type === "workspaceFile" && a.fileId === t.id && a.version === n) ? null : r
}

function us(e, t) {
    const n = Pt(t),
        r = e.trim();
    return r ? `${n}

${r}` : n
}
var ds = Se.create({
    name: "workspaceFileMention",
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
            version: {
                default: null,
                parseHTML: e => {
                    const t = Number(e.getAttribute("data-version"));
                    return Number.isSafeInteger(t) && t > 0 ? t : null
                },
                renderHTML: e => e.version == null ? {} : {
                    "data-version": e.version
                }
            },
            mimeType: {
                default: null,
                parseHTML: e => e.getAttribute("data-mime-type"),
                renderHTML: e => e.mimeType ? {
                    "data-mime-type": e.mimeType
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
        return ["span", Ie({
            "data-type": this.name
        }, this.options.HTMLAttributes, e)]
    },
    renderText({
        node: e
    }) {
        const t = e.attrs.title || e.attrs.id;
        return Pt({
            id: e.attrs.id,
            title: t,
            filename: ""
        }, e.attrs.version ? ? void 0)
    },
    addNodeView() {
        return Ce(Ao, {
            as: "span",
            className: "workspace-file-mention-wrapper"
        })
    },
    addCommands() {
        return {
            insertWorkspaceFileMention: (e, t, n, r) => ({
                commands: a
            }) => a.insertContent([{
                type: this.name,
                attrs: {
                    id: e,
                    title: t,
                    mimeType: n ? ? null,
                    version: r ? ? null
                }
            }, {
                type: "text",
                text: " "
            }])
        }
    }
});
export {
    ga as C, Uo as S, Wo as T, Qo as _, ls as a, Xe as b, is as c, ts as d, es as f, Go as g, Jo as h, Pt as i, as as l, La as m, us as n, ss as o, Ea as p, cs as r, os as s, ds as t, rs as u, Yo as v, zo as w, qo as x, Xo as y
};
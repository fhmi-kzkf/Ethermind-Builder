import {
    o as Vt
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    $L as Sn,
    Cz as En,
    ET as xn,
    Et as Tn,
    HM as kt,
    NM as Ln,
    Nx as Fn,
    RS as $t,
    ds as In,
    iM as kn,
    lz as An,
    us as zt,
    wj as Pn
} from "./app-shared-6CLVfi8w.js";
import {
    u as On
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    i as Dn,
    n as _n,
    r as Nn
} from "./vendor-react-Fx2PtaaM.js";
import {
    L as jn,
    _g as Bn,
    hg as Wn,
    wn as Hn
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    _ as Vn,
    d as $n,
    f as zn,
    n as Un,
    x as Kn
} from "./i18n-fn/mentionDropdown-j0RefJjS.js";
import {
    r as Xn
} from "./i18n-fn/workspaceChat-DYQsYUsg.js";
import {
    Tr as Qn
} from "./flag-catalog-BJaXoOeP.js";
import {
    Qs as Gn,
    So as U,
    Zs as Jn,
    ic as Zn,
    nn as G,
    rc as Yn,
    tc as Ee
} from "./dashboard-shared-BN9MnewY.js";
import {
    Ds as At,
    Eo as qn,
    Io as er,
    Md as tr,
    Ms as Pt,
    ax as Ut
} from "./app-lazy-shared-BNTl480s.js";
import {
    Nt as nr
} from "./settings-shared-leaves-B-HU8sMN.js";
import {
    z as Ot
} from "./i18n-fn/files--filesCollections-Be1YgheF.js";
import {
    C as rr,
    Dt as Qe,
    Et as sr,
    F as Kt,
    M as or,
    a as ir,
    c as Xt,
    ft as Qt,
    i as Dt,
    l as ar,
    s as Gt
} from "./vendor-editor-BxXM5pDU.js";
import {
    i as cr,
    n as lr,
    r as ur,
    t as dr
} from "./documentPreviewSrc-BZPdluV3.js";
import {
    s as fr
} from "./useProjectCollections-COcyY8F-.js";
import {
    a as mr,
    i as hr,
    n as pr,
    o as gr,
    r as _t,
    s as vr,
    t as wr
} from "./composer-menu-items-BgOPYzJ1.js";
import {
    a as yr,
    c as br,
    f as Mr,
    s as ue,
    t as Cr
} from "./useCatalogDocumentPage-1sEdVrrH.js";
import {
    t as Rr
} from "./pageScriptNonce-bVt-gLoT.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0e545174-ced7-41ae-943e-731fe17671b2", e._sentryDebugIdIdentifier = "sentry-dbid-0e545174-ced7-41ae-943e-731fe17671b2")
    })()
} catch {}
var c = Vt(Dn(), 1),
    F = Nn(),
    Sr = Vt(_n(), 1),
    Er = /\.edit(?:-(\d+))?(\.[A-Za-z0-9]+)?$/;

function Jt(e) {
    const n = Er.exec(e);
    return !n || !n[1] && !n[2] ? null : {
        index: n.index,
        extension: n[2] ? ? ""
    }
}

function xr(e) {
    return (e.split("/").pop() ? ? e).startsWith(".")
}

function Tr(e) {
    return Jt(e) !== null
}

function Lr(e) {
    let n = e;
    for (;;) {
        const r = Jt(n);
        if (!r) return n;
        n = n.slice(0, r.index) + r.extension
    }
}
var Fr = new Set(["replicate", "toast", "x", "waveapps", "polarsh", "linear", "lovable_account", "cloud", "ai", "canva", "parallel", "ramp", "loops"]),
    Zt = new Set,
    xe = [],
    Yt = Je([]);

function Ge(e) {
    return Fr.has(e) || Zt.has(e)
}

function Je(e) {
    const n = new Map;
    let r = 0;
    for (const s of e) {
        if (!s.name || Ge(s.id)) continue;
        const i = s.name.toLowerCase();
        n.set(i, s), r = Math.max(r, i.length)
    }
    return {
        byName: n,
        maxNameLength: r
    }
}

function bs(e) {
    Zt.add(e)
}

function Nt(e) {
    xe = [...e.filter(n => !Ge(n.id))].sort((n, r) => r.name.length - n.name.length), Yt = Je(xe)
}

function Ms(e, n = xe) {
    if (!/\s$/.test(e)) return null;
    const r = e.slice(0, -1),
        {
            byName: s,
            maxNameLength: i
        } = n === xe ? Yt : Je(n),
        l = Math.max(0, r.length - i);
    for (let a = l; a < r.length; a++) {
        if (!(a === 0 || /\s/.test(r[a - 1]))) continue;
        const o = r.slice(a).toLowerCase(),
            p = s.get(o);
        if (p && !Ge(p.id)) return {
            index: a,
            text: e.slice(a),
            connector: p
        }
    }
    return null
}
var Ir = ({
        node: e,
        deleteNode: n,
        onNavigateToFile: r
    }) => {
        const s = e.attrs.id,
            i = e.attrs.line,
            l = e.attrs.endLine,
            a = s.split("/").pop() || s,
            o = !!r,
            p = Tn(a),
            v = zt(i, l),
            w = T => {
                T ? .preventDefault(), T ? .stopPropagation(), r ? .(s, i ? ? void 0)
            };
        return (0, F.jsx)(Gt, {
            as: "span",
            className: "inline",
            dir: "ltr",
            contentEditable: !1,
            children: (0, F.jsx)(Ut, {
                label: `${a}${v}`,
                tooltip: o ? `Open ${s}${v}` : `${s}${v}`,
                variant: "file",
                icon: p,
                onClick: o ? w : void 0,
                onRemove: n
            })
        })
    },
    kr = new Qe("fileMention"),
    Cs = Kt.create({
        name: "fileMention",
        group: "inline",
        inline: !0,
        selectable: !1,
        atom: !0,
        addOptions() {
            return {
                HTMLAttributes: {},
                onNavigateToFile: void 0
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
                line: {
                    default: null,
                    parseHTML: e => {
                        const n = e.getAttribute("data-line");
                        return n ? Number(n) : null
                    },
                    renderHTML: e => e.line ? {
                        "data-line": e.line
                    } : {}
                },
                endLine: {
                    default: null,
                    parseHTML: e => {
                        const n = e.getAttribute("data-end-line");
                        return n ? Number(n) : null
                    },
                    renderHTML: e => e.endLine ? {
                        "data-end-line": e.endLine
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
            return ["span", Qt({
                "data-type": this.name
            }, this.options.HTMLAttributes, e)]
        },
        renderText({
            node: e
        }) {
            return `@file:${e.attrs.id}${zt(e.attrs.line,e.attrs.endLine)}`
        },
        addNodeView() {
            const e = this.options.onNavigateToFile;
            return Xt(n => (0, F.jsx)(Ir, { ...n,
                onNavigateToFile: e
            }), {
                as: "span",
                className: "file-mention-wrapper"
            })
        },
        addCommands() {
            return {
                insertFileMention: (e, n, r) => ({
                    commands: s
                }) => s.insertContent([{
                    type: this.name,
                    attrs: {
                        id: e,
                        line: n ? ? null,
                        endLine: r ? ? null
                    }
                }, {
                    type: "text",
                    text: " "
                }])
            }
        }
    });

function Rs(e) {
    return or.create({
        name: e,
        addOptions() {
            return {
                suggestion: {}
            }
        },
        addProseMirrorPlugins() {
            return [ir({
                editor: this.editor,
                ...this.options.suggestion
            })]
        }
    })
}

function Ar({
    node: e,
    deleteNode: n,
    onNavigateToSkill: r
}) {
    const s = String(e.attrs.name ? ? ""),
        i = typeof e.attrs.description == "string" ? e.attrs.description.trim() : "",
        l = !!r && !er(s),
        a = qn(s),
        o = i || (l ? `Open ${a} skill` : `Skill: ${a}`);
    return (0, F.jsx)(Gt, {
        as: "span",
        className: "inline",
        dir: "ltr",
        contentEditable: !1,
        "data-skill-name": s,
        children: (0, F.jsx)(Ut, {
            label: a,
            tooltip: o,
            variant: "active",
            icon: nr,
            truncate: !0,
            onClick: l ? () => r(s) : void 0,
            onRemove: n
        })
    })
}
var Pr = new Qe("skillCommand"),
    Or = /^[a-zA-Z0-9_:-]/,
    Ss = Kt.create({
        name: "skillCommand",
        group: "inline",
        inline: !0,
        selectable: !1,
        atom: !0,
        addOptions() {
            return {
                onNavigateToSkill: void 0
            }
        },
        addAttributes() {
            return {
                name: {
                    default: null,
                    parseHTML: e => e.getAttribute("data-name"),
                    renderHTML: e => e.name ? {
                        "data-name": e.name
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
            return ["span", Qt({
                "data-type": this.name
            }, e)]
        },
        renderText({
            node: e
        }) {
            return `/skill:${e.attrs.name}`
        },
        addProseMirrorPlugins() {
            const e = this.type;
            return [new sr({
                appendTransaction(n, r, s) {
                    if (!n.some(a => a.docChanged)) return null;
                    let i = s.tr,
                        l = 0;
                    return s.doc.descendants((a, o, p, v) => {
                        if (a.type !== e || !p) return !0;
                        const w = p.maybeChild(v + 1);
                        return w ? .isText && w.text && Or.test(w.text.charAt(0)) && (i = i.insertText(" ", o + a.nodeSize + l), l += 1), !0
                    }), i.docChanged ? i : null
                }
            })]
        },
        addNodeView() {
            return Xt(e => (0, F.jsx)(Ar, { ...e,
                onNavigateToSkill: this.options.onNavigateToSkill
            }), {
                as: "span",
                className: "skill-command-wrapper"
            })
        },
        addCommands() {
            return {
                insertSkillCommand: (e, n) => ({
                    commands: r
                }) => r.insertContent([{
                    type: this.name,
                    attrs: {
                        description: n,
                        name: e
                    }
                }, {
                    type: "text",
                    text: " "
                }])
            }
        }
    });

function qt(e) {
    const n = e.visualViewport,
        r = typeof CSS < "u" && CSS.supports ? .("-webkit-backdrop-filter", "none"),
        s = n ? .offsetLeft ? ? 0,
        i = n ? .offsetTop ? ? 0,
        l = r ? 0 : s,
        a = r ? 0 : i;
    return {
        left: l,
        top: a,
        right: l + (n ? .width ? ? e.innerWidth),
        bottom: a + (n ? .height ? ? e.innerHeight),
        fixedOffsetLeft: r ? s : 0,
        fixedOffsetTop: r ? i : 0
    }
}

function en(e, n) {
    const r = e.ownerDocument.defaultView;
    if (!r) return () => {};
    let s = e.getBoundingClientRect(),
        i;
    const l = () => {
        i = r.requestAnimationFrame(l);
        const a = e.getBoundingClientRect();
        (a.x !== s.x || a.y !== s.y || a.width !== s.width || a.height !== s.height) && (s = a, n())
    };
    return i = r.requestAnimationFrame(l), () => r.cancelAnimationFrame(i)
}

function Dr({
    editor: e,
    range: n
}) {
    const r = (0, c.useRef)(null);
    return (0, c.useLayoutEffect)(() => {
        const s = r.current;
        if (!s || e.isDestroyed) return;
        const i = e.view.dom,
            l = i.ownerDocument.defaultView;
        if (!l) return;
        const a = l.visualViewport,
            o = () => {
                if (s.style.visibility = "hidden", e.isDestroyed || n.to > e.state.doc.content.size) return;
                const w = e.state.doc.resolve(n.to);
                if (!w.parent.isTextblock || w.parentOffset !== w.parent.content.size) return;
                const T = e.view.nodeDOM(w.before());
                if (!(T instanceof HTMLElement)) return;
                const h = getComputedStyle(T),
                    M = getComputedStyle(i),
                    m = i.getBoundingClientRect(),
                    A = T.getBoundingClientRect(),
                    S = e.view.coordsAtPos(n.to, -1),
                    g = qt(l),
                    E = Math.min(A.right - parseFloat(h.paddingRight) - parseFloat(h.borderRightWidth), m.right - parseFloat(M.paddingRight) - parseFloat(M.borderRightWidth), g.right),
                    P = S.right + 4;
                Object.assign(s.style, {
                    left: `${P+g.fixedOffsetLeft}px`,
                    top: `${S.top+g.fixedOffsetTop}px`,
                    fontFamily: h.fontFamily,
                    fontSize: h.fontSize,
                    fontWeight: h.fontWeight,
                    letterSpacing: h.letterSpacing,
                    lineHeight: `${S.bottom-S.top}px`
                }), P >= Math.max(m.left, g.left) && P + s.getBoundingClientRect().width <= E && S.top >= Math.max(m.top, g.top) && S.bottom <= Math.min(m.bottom, g.bottom) && (s.style.visibility = "visible")
            };
        o();
        const p = en(i, o),
            v = new ResizeObserver(o);
        return v.observe(i), v.observe(s), i.ownerDocument.fonts ? .addEventListener("loadingdone", o), l.addEventListener("resize", o), l.addEventListener("scroll", o, {
            capture: !0,
            passive: !0
        }), a ? .addEventListener("resize", o), a ? .addEventListener("scroll", o), () => {
            p(), v.disconnect(), i.ownerDocument.fonts ? .removeEventListener("loadingdone", o), l.removeEventListener("resize", o), l.removeEventListener("scroll", o, !0), a ? .removeEventListener("resize", o), a ? .removeEventListener("scroll", o)
        }
    }, [e, n.from, n.to]), e.isDestroyed ? null : (0, Sr.createPortal)((0, F.jsx)("span", {
        ref: r,
        "aria-hidden": !0,
        "data-composer-filter-hint": !0,
        className: "text-tertiary-pulse pointer-events-none fixed z-50 whitespace-nowrap",
        style: {
            visibility: "hidden"
        },
        children: Vn()
    }), e.view.dom.ownerDocument.body)
}

function _r({
    open: e,
    options: n,
    editor: r,
    range: s,
    anchor: i,
    onSelect: l,
    typed: a,
    kind: o,
    panelRef: p,
    onProseTyped: v
}) {
    const {
        searchValue: w,
        path: T
    } = Zn();
    (0, c.useEffect)(() => {
        e && (n.onSearch(w, T, o), n.control ? .surface ? .current.onSearch ? .(w, o ? [o, ...T] : T))
    }, [e, n, w, T, o]);
    const h = (0, c.useRef)(null);
    (e || !h.current) && (h.current = n.getPage(w, T, l, r, s, o));
    const M = h.current,
        m = e && !!o && /\S\s/.test(w) && M.searchResults.length === 0 && !M.isLoading && !M.pagination ? .isLoading && !M.error;
    (0, c.useEffect)(() => {
        m && v()
    }, [m, v]);
    const A = i.getBoundingClientRect(),
        S = qt(r.view.dom.ownerDocument.defaultView ? ? window),
        g = A.top - S.top,
        E = S.bottom - A.bottom,
        P = o ? g >= Math.min(320, E) ? "top" : "bottom" : n.control ? .surface ? .current.side ? ? "top";
    return (0, F.jsxs)(F.Fragment, {
        children: [e && o && !w && (0, F.jsx)(Dr, {
            editor: r,
            range: s
        }), (0, F.jsx)(Gn, {
            ref: p,
            anchor: i,
            side: P,
            align: "start",
            sideOffset: 8,
            collisionAvoidance: o ? {
                side: "none",
                align: "shift",
                fallbackAxisSide: "none"
            } : void 0,
            autoFocusSearch: a && !o ? !$t() : void 0,
            finalFocus: !1,
            className: "fs-mask",
            popupClassName: o ? void 0 : "data-[side=bottom]:origin-top-left data-[side=top]:origin-bottom-left",
            maxHeight: o ? Math.max(0, (P === "top" ? g : E) - 16) : n.control ? .surface ? .current.maxHeight,
            scrollLabelsOnHover: n.control ? .surface ? .current.scrollLabelsOnHover,
            items: M.items,
            searchResults: M.searchResults,
            searchResultsVersion: M.searchResultsVersion,
            placeholder: Bn(),
            emptyText: zn(),
            isLoading: M.isLoading,
            loadingText: $n(),
            backLabel: Un(),
            clearSearchLabel: Wn(),
            detailsLabel: jn(),
            pagination: M.pagination,
            status: M.error ? (0, F.jsx)(yr, { ...M.error
            }) : M.status
        })]
    })
}

function Nr(e) {
    return (0, F.jsx)("div", {
        onKeyDown: n => n.stopPropagation(),
        children: (0, F.jsx)(Jn, {
            open: e.open,
            handle: e.kind ? void 0 : e.options.control ? .handle,
            triggerId: e.kind ? void 0 : e.options.control ? .surface ? .current.anchor.current ? .id,
            onOpenChangeComplete: n => {
                n || e.onClosed()
            },
            externalInput: e.externalInput,
            initialPath: e.initialPath,
            onItemInteracted: e.typed ? void 0 : n => e.options.control ? .surface ? .current.onItemInteracted ? .(n),
            onNavigate: e.options.control ? .surface ? .current.onNavigate,
            onOpenChange: (n, r) => {
                n || e.onClose(r)
            },
            children: (0, F.jsx)(_r, { ...e
            })
        })
    })
}

function jr(e, n) {
    const r = n.mapping.mapResult(e.from, 1),
        s = n.mapping.mapResult(e.to, -1);
    return r.deletedAcross || s.deletedAcross || r.pos >= s.pos ? null : {
        from: r.pos,
        to: s.pos
    }
}
var jt = new WeakMap;

function Bt(e, n, r, s, i, l = !0, a) {
    const o = e.editor,
        p = r().control ? .surface ? .current,
        v = p ? .anchor.current,
        w = a ? o.view.dom.getBoundingClientRect() : v ? .getBoundingClientRect() ? ? e.clientRect ? .();
    if (!w || o.isDestroyed) return null;
    const T = Symbol();
    jt.set(o, T);
    let h = l && !a ? {
            from: e.range.from,
            to: e.range.from + 1
        } : e.range,
        M = e.query ? ? "";
    const m = {
            current: null
        },
        A = !a && v || {
            contextElement: o.view.dom,
            getBoundingClientRect: () => {
                if (!h || o.isDestroyed || g || h.from > o.state.doc.content.size) return w;
                const f = o.view.coordsAtPos(h.from),
                    C = a ? o.view.dom.getBoundingClientRect() : f;
                return new DOMRect(f.left, C.top, f.right - f.left, C.bottom - C.top)
            }
        };
    let S = o.state.selection.getBookmark(),
        g = !1,
        E = null;
    const P = {
            current: null
        },
        q = f => {
            !h || g || o.isDestroyed || o.commands.insertContentAt({
                from: h.from + 1,
                to: h.to
            }, f)
        },
        ee = () => a ? {
            element: o.view.dom,
            query: M,
            label: a === "skills" ? Kn() : Xn(),
            actionsRef: m,
            onQueryChange: q
        } : void 0,
        B = () => {
            h && !g && E ? .updateProps({
                options: r(),
                range: h,
                externalInput: ee()
            })
        };
    let J = 0;
    const I = () => {
            J || (J = requestAnimationFrame(() => {
                J = 0, B()
            }))
        },
        me = () => {
            const f = E;
            E = null, queueMicrotask(() => f ? .destroy())
        },
        O = (f = !0, C = !0) => {
            g || (g = !0, o.off("transaction", he), o.off("destroy", pe), window.removeEventListener("scroll", te, !0), window.removeEventListener("resize", I), window.visualViewport ? .removeEventListener("resize", I), window.visualViewport ? .removeEventListener("scroll", I), cancelAnimationFrame(J), re ? .disconnect(), ne ? .(), r().onActiveChange(!1, l), p ? .onOpenChange ? .(!1, l), r().onSearch("", []), i(), C && !o.isDestroyed && s(o), f && !o.isDestroyed && (a || o.view.dispatch(o.state.tr.setSelection(S.resolve(o.state.doc))), o.view.focus()), o.isDestroyed ? me() : E ? .updateProps({
                open: !1
            }))
        },
        he = ({
            transaction: f,
            appendedTransactions: C
        }) => {
            if (!(!h || g)) {
                if (a) {
                    B();
                    return
                }
                for (const j of [f, ...C]) S = S.map(j.mapping), h = l ? h && jr(h, j) : S.resolve(j.doc);
                h ? B() : O()
            }
        },
        pe = () => O(!1),
        ge = new Map;
    for (let f = o.view.dom; f; f = f.parentElement) ge.set(f, {
        left: f.scrollLeft,
        top: f.scrollTop
    });
    const te = f => {
            const C = f.target === document ? document.scrollingElement ? ? document.documentElement : f.target;
            if (!(C instanceof Element)) return;
            const j = ge.get(C);
            j && (C.scrollLeft !== j.left || C.scrollTop !== j.top) && (a || $t() ? I() : O(!1))
        },
        ne = a ? en(o.view.dom, I) : void 0,
        re = new ResizeObserver(f => {
            f.some(C => C.contentRect.width === 0) ? O() : I()
        });
    return re.observe(o.view.dom), o.on("transaction", he), o.on("destroy", pe), window.addEventListener("scroll", te, {
        capture: !0,
        passive: !0
    }), window.addEventListener("resize", I), window.visualViewport ? .addEventListener("resize", I), window.visualViewport ? .addEventListener("scroll", I), r().onActiveChange(!0, l), r().onOpen(), p ? .onOpenChange ? .(!0, l), E = new ar(Nr, {
        editor: o,
        props: {
            open: !0,
            onClosed: () => {
                jt.get(o) === T && p ? .onOpenChangeComplete ? .(!1), me()
            },
            editor: o,
            range: h,
            initialPath: n,
            anchor: A,
            options: r(),
            typed: l,
            kind: a,
            externalInput: ee(),
            panelRef: P,
            onClose: f => {
                const C = P.current ? .contains(document.activeElement),
                    j = f ? .reason === "escape-key" || f ? .reason === "trigger-press" || l && !f && C,
                    Z = !g && !l && !f;
                O(j), Z && queueMicrotask(() => v ? .focus({
                    preventScroll: !0
                }))
            },
            onSelect: f => {
                if (o.isDestroyed || !h || g) return;
                const C = h;
                O(), o.view.dispatch(rr(o.state.tr)), r().select(f, o, C, l)
            },
            onProseTyped: () => O(!1)
        }
    }), {
        kind: a,
        close: O,
        refresh: B,
        update: f => {
            a && (h = f.range, M = f.query), B()
        },
        onKeyDown: f => !g && (m.current ? .onKeyDown(f) ? ? !1)
    }
}

function Br(e) {
    const n = (0, c.useRef)(e);
    n.current = e;
    const r = (0, c.useRef)(null);
    (0, c.useEffect)(() => r.current ? .refresh());
    const s = e.control;
    return (0, c.useEffect)(() => {
        if (s) return s.refresh = () => r.current ? .refresh(), s.close = () => {
            s.pendingOpen = !1, r.current ? .close()
        }, s.open = () => {
            const i = n.current.editorRef ? .current;
            if (!i || i.isDestroyed || !i.isEditable) return s.pendingOpen = !0, !1;
            if (s.pendingOpen = !1, r.current) {
                const l = !!r.current.kind;
                if (r.current.close(!l), !l) return !0
            }
            return r.current = Bt({
                editor: i,
                range: i.state.selection
            }, [], () => n.current, () => {}, () => {
                r.current = null
            }, !1), r.current ? .refresh(), r.current !== null
        }, () => {
            r.current ? .close(!1), s.pendingOpen = !1, s.open = () => (s.pendingOpen = !0, !1), s.close = () => {
                s.pendingOpen = !1
            }, s.refresh = () => {}
        }
    }, [s]), (0, c.useEffect)(() => {
        s ? .pendingOpen && s.open()
    }), (0, c.useEffect)(() => () => r.current ? .close(!1), []), (0, c.useMemo)(() => (i, l) => () => {
        let a = null;
        return {
            onStart: o => {
                a ? .close(!1, !1), r.current ? .close(!1), a = Bt(o, typeof i == "string" ? [] : i, () => n.current, l, () => {
                    r.current === a && (r.current = null)
                }, !0, typeof i == "string" ? i : void 0), r.current = a, a ? .refresh()
            },
            onBeforeUpdate: o => {
                a ? .kind && a.update(o)
            },
            onUpdate: o => a ? .update(o),
            onKeyDown: ({
                event: o
            }) => a ? .onKeyDown(o) ? ? !1,
            onExit: () => {
                const o = a;
                o ? .kind ? o.close(!1, !1) : queueMicrotask(() => o ? .close(!0, !1))
            }
        }
    }, [])
}
var fe = (e, n) => e.path.length - n.path.length,
    Wr = (e, n, r) => {
        if (!n.isInCodeEditor) return [...e].sort(fe).slice(0, r);
        const {
            currentFile: s,
            openTabs: i
        } = n, l = new Set(i), a = [];
        if (s) {
            const p = e.find(v => v.path === s);
            p && a.push(p)
        }
        for (const p of i)
            if (p !== s) {
                const v = e.find(w => w.path === p);
                v && a.push(v)
            }
        const o = e.filter(p => !l.has(p.path)).sort(fe);
        return [...a, ...o].slice(0, r)
    },
    Hr = (e, n, r) => {
        const s = n.toLowerCase(),
            i = [],
            l = [],
            a = [];
        for (const o of e) {
            const p = o.name.toLowerCase();
            if (i.length >= r) break;
            p.startsWith(s) ? i.push(o) : p.includes(s) ? l.push(o) : o.lowerPath.includes(s) && a.push(o)
        }
        return [...i.sort(fe), ...l.sort(fe), ...a.sort(fe)].slice(0, r)
    },
    de = (e, n, r, s) => n ? Hr(e, n, s) : Wr(e, r, s),
    Vr = ["html", "svg"],
    $r = new RegExp(`\\.(${Vr.join("|")})$`, "i");

function zr(e) {
    if (!e || e.startsWith("/") || e.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(e)) return null;
    let n = e;
    try {
        n = decodeURI(e)
    } catch {
        n = e
    }
    const r = n.replace(/[?#].*$/, "").replace(/^(?:\.\/)+/, "");
    return $r.test(r) ? r : null
}

function Es(e, n) {
    let r = 2166136261;
    const s = `${e}\0${n}`;
    for (let i = 0; i < s.length; i += 1) r ^= s.charCodeAt(i), r = Math.imul(r, 16777619);
    return `${(r>>>0).toString(36)}-${s.length.toString(36)}`
}
var Ur = e => `(function () {
  // Root scrollbars would consume layout (classic mode) and can outlive an
  // exact-fit resize; the frame is content-sized, so the root never scrolls.
  document.documentElement.style.setProperty("overflow", "hidden", "important");
  var last = 0;
  var resizeObserver;
  var report = function () {
    var body = document.body;
    var height = 0;
    var width = 0;
    if (body) {
      // Lazy: the reporter is parsed ahead of the body, which arrives later.
      resizeObserver.observe(body);
      var base = body.getBoundingClientRect();
      for (var i = 0; i < body.children.length; i++) {
        var el = body.children[i];
        resizeObserver.observe(el);
        var box = el.getBoundingClientRect();
        height = Math.max(height, box.height, box.bottom - base.top);
        width = Math.max(width, box.width, box.right - base.left);
        var cs = getComputedStyle(el);
        if (cs.overflowY === "visible") height = Math.max(height, (box.top - base.top) + el.scrollHeight);
        if (cs.overflowX === "visible") width = Math.max(width, (box.left - base.left) + el.scrollWidth);
      }
    }
    var doc = document.documentElement;
    // Client, not inner: any surviving classic scrollbar consumes layout, so
    // the visible box is what overflow proofs and the viewport echo describe.
    var viewportHeight = doc.clientHeight;
    var viewportWidth = doc.clientWidth;
    // scrollHeight strictly above the viewport is genuine overflow (body
    // margins, trailing padding) that child rects cannot see — never an echo.
    if (doc.scrollHeight > viewportHeight) height = Math.max(height, doc.scrollHeight);
    if (doc.scrollWidth > viewportWidth) width = Math.max(width, doc.scrollWidth);
    if (height === 0) height = doc.scrollHeight;
    height = Math.ceil(height);
    width = Math.ceil(width);
    var key = height + "x" + width + "x" + viewportHeight + "x" + viewportWidth;
    if (key === last || height <= 0) return;
    last = key;
    parent.postMessage({
      type: ${JSON.stringify(cr)},
      epoch: ${JSON.stringify(e)},
      height: height,
      width: width,
      viewportHeight: viewportHeight,
      viewportWidth: viewportWidth
    }, "*");
  };
  var schedule = function () { requestAnimationFrame(report); };
  // Body children too: a style-only growth inside a fixed-height body resizes
  // no observed box and mutates no childList — the child itself must signal.
  resizeObserver = new ResizeObserver(schedule);
  resizeObserver.observe(document.documentElement);
  if (document.body) resizeObserver.observe(document.body);
  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("load", schedule, true);
  window.addEventListener("message", function (event) {
    if (!event.data || event.data.type !== ${JSON.stringify(ur)}) return;
    last = 0;
    schedule();
  });
  document.addEventListener("pointerdown", function () {
    parent.postMessage({ type: ${JSON.stringify(lr)} }, "*");
  }, true);
  // No allow-popups on the figure frame, so an absolute http(s) link would navigate the figure in place.
  // A base-less srcdoc resolves hrefs against the app page, so the raw attribute decides. Twin: worker html renderer.
  document.addEventListener("click", function (event) {
    if (event.defaultPrevented) return;
    var anchor = event.target && event.target.closest ? event.target.closest("a[href]") : null;
    if (!anchor) return;
    var href = anchor.getAttribute("href");
    if (!/^https?:\\/\\//i.test(href)) return;
    var url;
    try {
      url = new URL(href);
    } catch (e) {
      return;
    }
    event.preventDefault();
    parent.postMessage({ type: ${JSON.stringify(dr)}, href: url.href }, "*");
  });
  schedule();
})();`;

function Kr(e) {
    return `<script nonce="${Rr()}">${Ur(e)}<\/script>`
}

function xs(e, n, r) {
    const s = Kr(r);
    return /\.svg$/i.test(e) ? `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0}svg{display:block;width:100%;height:auto}</style>${s}</head><body>${n}</body></html>` : `<!doctype html>${s}${n}`
}

function Xr(e) {
    let n = 0;
    for (const r of e)
        if (r === "(" && (n += 1), r === ")" && (n -= 1, n < 0)) return !1;
    return n === 0
}

function Qr(e, n, r) {
    const s = new Set(e.map(l => l.path)),
        i = e.filter(l => zr(encodeURI(l.path)) === l.path && Xr(l.path) && !xr(l.path) && !(Tr(l.path) && s.has(Lr(l.path))));
    return de(i, ue(n).searchTerm, {
        currentFile: null,
        openTabs: [],
        isInCodeEditor: !1
    }, r)
}

function Gr(e, n) {
    const r = e.doc.resolve(n);
    for (let s = r.depth; s > 0; s -= 1)
        if (r.node(s).type.name === "codeBlock") return !0;
    return r.marks().some(s => s.type.name === "code")
}

function Jr(e, n) {
    const r = e.doc.resolve(n);
    for (let s = r.depth; s > 0; s -= 1) {
        const i = r.node(s).type.name;
        if (i === "listItem" || i === "taskItem" || i === "tableCell" || i === "tableHeader") return !1
    }
    return !0
}

function Zr(e) {
    const n = e.name.replace(/\.[^.]+$/, "").replace(/[`[\]\\]/g, "");
    return {
        type: "image",
        attrs: {
            src: encodeURI(e.path),
            alt: n
        }
    }
}
var Wt = 10,
    Ke = 10,
    Yr = 5,
    qr = [],
    es = [],
    Xe = (e, n) => {
        const r = n.trim().toLowerCase();
        return r ? e.filter(s => s.label.toLowerCase().includes(r) || s.projectName.toLowerCase().includes(r)) : [...e]
    },
    Ht = e => e ? 6 : 9,
    ts = new Qe("documentEmbedSuggestion"),
    Ts = e => {
        const n = (0, c.useRef)(e);
        n.current = e;
        const r = En(),
            s = fr(r),
            i = Ln(),
            [l, a] = (0, c.useState)(!1),
            [o, p] = (0, c.useState)({
                active: !1,
                category: "",
                query: ""
            }),
            v = t => o.active && (o.category === t || o.category === "context" || !o.category && !!o.query),
            w = Sn(),
            T = Pn(Qn).enabled,
            h = e ? .enableConnectorAutoMatch ? ? !1,
            M = e ? .documentsOnly,
            m = !!M,
            A = !!e ? .workspaceFileMentions && !m,
            S = (0, c.useRef)(A);
        S.current = A;
        const g = Mr(),
            E = (0, c.useRef)(M);
        E.current = M;
        const P = e ? .drafts ? ? qr,
            q = (0, c.useRef)(P);
        q.current = P;
        const ee = e ? .chats ? ? es,
            B = (0, c.useRef)(ee);
        B.current = ee;
        const J = (0, c.useRef)(e ? .onMenuOpen);
        J.current = e ? .onMenuOpen;
        const I = (0, c.useCallback)(() => E.current ? ts : kr, []),
            me = (0, c.useCallback)(() => E.current ? "files" : void 0, []),
            {
                data: O,
                isLoading: he,
                isError: pe,
                refetch: ge
            } = On({
                queryKey: ["design-assets"],
                queryFn: () => kn().GET("/user/assets"),
                enabled: T && v("assets") && !!w && !m,
                staleTime: 1 / 0
            }),
            te = (e ? .workspaceFileMentions ? ? !1) && !m,
            [ne, re] = (0, c.useState)(""),
            f = In(e ? .getComposerText ? .() ? ? ""),
            C = [...e ? .includeContextInTypedMenu ? [] : g ? .excludedProjectIds ? ? [], ...r ? [r] : [], ...e ? .includeContextInTypedMenu ? [] : f.flatMap(t => t.type === "project" ? [t.projectId] : [])],
            j = [...g ? .excludedWorkspaceFileIds ? ? [], ...f.flatMap(t => t.type === "workspaceFile" ? [t.fileId] : [])],
            {
                connectors: Z,
                getSearchResults: Ze,
                projectResultsVersion: Te,
                fileResultsVersion: Le,
                loadMoreFiles: tn,
                debouncedFileSearch: ve,
                fetchMoreFiles: nn,
                hasMoreFiles: rn,
                isConnectorCatalogFetching: Ye,
                isConnectorsError: sn,
                isProjectDebouncePending: on,
                isProjectsError: an,
                isProjectsLoading: Fe,
                isProjectsPlaceholderData: cn,
                isRecentlyViewedLoading: ln,
                isWorkspaceFilesError: qe,
                isWorkspaceFilesFetching: et,
                isWorkspaceFilesLoading: tt,
                isWorkspaceFilesNextPageError: un,
                isWorkspaceFilesPlaceholderData: dn,
                projectSearchQuery: nt,
                recentlyViewedProjects: rt,
                refetchConnectors: fn,
                refetchProjects: mn,
                refetchWorkspaceFiles: hn
            } = br({
                connectorsEnabled: !m && (h || v("connectors")),
                includeWorkspaceFiles: te,
                menuEnabled: o.active && !m,
                searchTerm: ne,
                excludedProjectIds: C,
                excludedWorkspaceFileIds: j,
                canReferenceProject: te ? g ? .canReferenceProject : void 0
            }),
            st = Pt(t => t.filesAsArray),
            [pn, gn] = (0, c.useState)(""),
            se = Cr(r ? ? "", {
                search: pn
            }, s && (v("files") || m) && !!r),
            Ie = s && !!r && (se.isLoading || se.isTransitioning),
            ot = se.documents,
            ke = Pt(t => t.isSourceCodeLoading) ? ? !1,
            it = At(t => t.currentFile) ? ? null,
            at = At(t => t.openTabs) ? ? [],
            ct = tr(t => t.activeView),
            we = !!r,
            Ae = (r ? ke || Fe : Fe || ln) || tt || Ie || A && Ye,
            lt = (0, c.useRef)(!1),
            Pe = (0, c.useRef)(!1),
            Oe = (0, c.useRef)(!1),
            ut = (0, c.useRef)(0),
            dt = (0, c.useRef)(Ae);
        dt.current = Ae;
        const ft = (0, c.useRef)(i);
        ft.current = i;
        const vn = Ie,
            {
                isResolved: wn
            } = xn(An.ViewProjectDocuments),
            mt = vn || !wn,
            ht = (0, c.useRef)(mt);
        ht.current = mt;
        const pt = (0, c.useCallback)(() => E.current ? ht.current : dt.current, []),
            yn = (0, c.useMemo)(() => ({
                projects: Te,
                files: Le
            }), [Te, Le]),
            gt = (0, c.useRef)(it);
        gt.current = it;
        const vt = (0, c.useRef)(at);
        vt.current = at;
        const wt = (0, c.useRef)(ct);
        wt.current = ct;
        const oe = (0, c.useMemo)(() => m ? [] : (st ? ? []).map(t => ({
                type: "file",
                path: t.name,
                name: t.name.split("/").pop() || t.name,
                lowerPath: t.name.toLowerCase()
            })), [st, m]),
            De = we && (ke || oe.length > 0),
            _e = (0, c.useRef)(we);
        _e.current = we;
        const yt = (0, c.useRef)(De);
        yt.current = De;
        const ye = (0, c.useMemo)(() => (ot ? ? []).map(t => ({
                type: "document",
                path: t.id,
                name: t.filename.split("/").pop() || t.filename,
                lowerPath: t.id.toLowerCase()
            })), [ot]),
            be = (0, c.useMemo)(() => [...oe, ...ye], [oe, ye]),
            bt = (0, c.useMemo)(() => O ? .assets ? O.assets.map(t => ({
                type: "asset",
                id: t.id,
                name: t.name,
                fileCount: t.files.length,
                files: t.files
            })) : [], [O]);
        (0, c.useEffect)(() => {
            if (!m) {
                if (!h) {
                    Nt([]);
                    return
                }
                Nt(Z.map(t => ({
                    id: t.id,
                    name: t.display_name
                })))
            }
        }, [Z, h, m]);
        const bn = (0, c.useRef)(be);
        bn.current = be;
        const Ne = (0, c.useRef)(oe);
        Ne.current = oe;
        const Me = (0, c.useRef)(ye);
        Me.current = ye;
        const Mt = (0, c.useRef)(Ze);
        Mt.current = Ze;
        const je = (0, c.useRef)(rt);
        je.current = rt;
        const ie = (0, c.useRef)(bt);
        ie.current = bt;
        const Ct = (0, c.useRef)(Z);
        Ct.current = Z;
        const K = (0, c.useRef)(g);
        K.current = e ? .workspaceFileMentions && !m && g ? g : null;
        const Rt = (0, c.useRef)(re);
        Rt.current = re;
        const Be = (0, c.useCallback)((t, u) => {
                const {
                    searchTerm: d
                } = ue(t), R = d.trim().length > 0, H = !_e.current, {
                    projects: b,
                    workspaceFiles: _
                } = Mt.current(d), X = Ht(i), L = {
                    currentFile: gt.current,
                    openTabs: vt.current,
                    isInCodeEditor: wt.current === "codeEditor"
                };
                let N = [];
                u !== "files" && (H && !R ? N = je.current.length > 0 ? je.current : b : N = b), N = N.filter(y => K.current ? .canReferenceProject ? .(y.id) !== !1);
                const V = y => hr(Ct.current, y);
                if (u === "assets") {
                    const y = i ? 6 : 9,
                        z = d.toLowerCase();
                    return (z ? ie.current.filter(Ue => Ue.name.toLowerCase().includes(z)) : ie.current).slice(0, y)
                }
                if (u === "connectors") return V(d);
                if (u === "projects") {
                    const y = N.slice(0, Wt);
                    return S.current ? [...y, ...Xe(q.current, d).slice(0, Ke)] : y
                }
                if (u === "drafts") return Xe(q.current, d).slice(0, Ke);
                if (u === "chats") return S.current ? _t(B.current, d) : [];
                const $e = d.toLowerCase(),
                    k = (n.current ? .collections ? ? []).map(y => ({
                        item: y,
                        at: y.name.toLowerCase().indexOf($e)
                    })).filter(({
                        at: y
                    }) => y >= 0).sort((y, z) => y.at - z.at).slice(0, Yr).map(({
                        item: y
                    }) => y);
                if (u === "files") {
                    const y = de(Ne.current, d, L, X),
                        z = de(Me.current, d, L, X);
                    return [...y, ...z, ...k]
                }
                const Q = N.slice(0, Wt),
                    ae = de(Ne.current, d, L, X),
                    ze = de(Me.current, d, L, X),
                    ce = 3,
                    le = d.toLowerCase(),
                    Re = (le ? ie.current.filter(y => y.name.toLowerCase().includes(le)) : ie.current).slice(0, ce),
                    $ = V(d),
                    Y = Xe(q.current, d).slice(0, Ke);
                return S.current ? [..._, ...Q, ...Y, ..._t(B.current, d), ...$, ...yt.current ? ae : []] : [...ae, ...ze, ..._, ...Q, ...Y, ...Re, ...$, ...k]
            }, [i]),
            St = (0, c.useRef)(Be);
        St.current = Be;
        const Mn = (0, c.useCallback)(t => be.some(u => u.path === t), [be]),
            W = Fn(),
            Cn = t => K.current ? .canReferenceProject ? .(t.id) !== !1 && !t.project ? .exclude_from_being_read && !t.project ? .shared_context_admin_isolated,
            We = (t, u, d) => {
                if (!(K.current ? .contextResourcesLoading && (t.type === "project" || t.type === "workspaceFile"))) {
                    if (E.current) {
                        if (t.type !== "document") return;
                        G(u, d).insertContent(Zr(t)).run();
                        return
                    }
                    if (t.type === "collection") {
                        const R = n.current ? .selectCollection;
                        if (!R) return;
                        const H = n.current ? .collections ? .find(b => b.id === t.id);
                        if (!H) {
                            u.chain().focus().deleteRange(d).run(), kt.error(Ot());
                            return
                        }
                        R(H, u, d).then(b => {
                            b === "inserted" ? W.emit(U, {
                                referenceType: "collection"
                            }) : b === "failed" && kt.error(Ot())
                        })
                    } else if (t.type === "file") G(u, d).insertFileMention(t.path).run(), W.emit(U, {
                        referenceType: "file",
                        filePath: t.path
                    });
                    else if (t.type === "document") G(u, d).insertDocumentMention(t.path).run(), W.emit(U, {
                        referenceType: "document",
                        filePath: t.path
                    });
                    else if (t.type === "project") {
                        if (!Cn(t)) return;
                        const R = t.displayName || t.name || t.id;
                        G(u, d).insertProjectMention(t.id, R).run(), W.emit(U, {
                            referenceType: "project",
                            projectId: t.id,
                            projectName: R
                        })
                    } else t.type === "asset" ? (G(u, d).insertAssetMention(t.id, t.name).run(), W.emit(U, {
                        referenceType: "asset",
                        assetId: t.id,
                        assetName: t.name
                    })) : t.type === "connector" ? (G(u, d).insertConnectorMention(t.id, t.display_name).run(), W.emit(U, {
                        referenceType: "connector",
                        connectorId: t.id
                    })) : t.type === "workspaceFile" ? (G(u, d).insertWorkspaceFileMention(t.id, t.title, t.mimeType).run(), W.emit(U, {
                        referenceType: "workspace_file"
                    })) : t.type === "draft" ? (G(u, d).insertDraftMention({
                        projectId: t.projectId,
                        threadId: t.id,
                        label: t.label
                    }).run(), W.emit(U, {
                        referenceType: "draft",
                        projectId: t.projectId,
                        projectName: t.projectName
                    })) : t.type === "chat" && (u.chain().focus().deleteRange(d).insertChatMention(t.id, t.title).run(), W.emit(U, {
                        referenceType: "chat"
                    }))
                }
            },
            Et = (0, c.useRef)(We);
        Et.current = We;
        const He = (0, c.useCallback)(t => {
                if (E.current) return Qr(Me.current, t, Ht(ft.current));
                const u = ue(t);
                return St.current(t, !_e.current && u.tab === "files" ? "projects" : u.tab)
            }, []),
            D = e ? .skills,
            Ce = Br({
                control: m ? void 0 : e ? .control,
                editorRef: e ? .editorRef,
                onOpen: () => {
                    n.current ? .onOpen ? .(), a(!0), J.current ? .()
                },
                onActiveChange: (t, u) => {
                    p(d => d.active === t ? d : { ...d,
                        active: t
                    }), lt.current = t, Pe.current = t && u, D ? .setActive(t && u)
                },
                onSearch: (t, u, d) => {
                    const R = u.at(-1) ? ? d ? ? "";
                    !m && d !== "context" && (R === "skills" || (!R || R === "context") && t) && D ? .onOpen(), p(_ => _.category === R && _.query === t ? _ : { ..._,
                        category: R,
                        query: t
                    });
                    const H = m ? t : ue(t).searchTerm,
                        b = _ => m || R === _ || R === "context" || !R && !!t;
                    b("files") && gn(H), (b("projects") || b("workspaceFiles") || b("connectors")) && Rt.current(H)
                },
                getPage: (t, u, d, R, H, b) => {
                    const _ = Pe.current,
                        X = !_ || !!e ? .includeContextInTypedMenu,
                        L = u.at(-1) ? ? b ? ? "";
                    let N = He(t);
                    X && K.current ? .canAddContextResources === !1 && (N = N.filter(x => x.type !== "project" && x.type !== "workspaceFile" && x.type !== "connector")), L === "assets" && (N = [...N.filter(x => x.type !== "asset"), ...Be(t, "assets")]);
                    const V = mr(N, {
                            workspaceSearch: A,
                            showCodeTab: De,
                            showFilesTab: we && !A,
                            showProjectsTab: !X || K.current ? .canAddContextResources !== !1,
                            showWorkspaceFilesTab: te && (!X || !!K.current ? .canAddWorkspaceFileContext),
                            showDraftsTab: P.length > 0,
                            showChatsTab: ee.length > 0,
                            lockedPage: me(),
                            isItemDisabled: x => !!K.current ? .contextResourcesLoading && (x.type === "project" || x.type === "workspaceFile")
                        }, d),
                        $e = !m && b !== "context" && D ? .hasSkills ? vr(D.getMenuItems(t, R, H, _), d) : [],
                        k = m ? void 0 : e ? .control ? .surface ? .current;
                    if (k ? .contextItems) {
                        const x = Ee(k.contextItems(d), t);
                        for (const Se of x)
                            if (Se.type === "submenu" && Se.value === "figma-designs") {
                                const Lt = V.findIndex(It => It.type === "submenu" && It.value === "assets"),
                                    Ft = { ...Se,
                                        value: "assets"
                                    };
                                Lt !== -1 ? V.splice(Lt, 1, Ft) : V.push(Ft)
                            } else V.push(Se)
                    }
                    const Q = k ? .contribution ? .current,
                        ae = Q ? .management ? ? k ? .management ? ? [],
                        ze = k ? .rootLayout === "dashboard" && t ? ae.flatMap(x => x.type === "submenu" && x.value === "context" ? [x] : Ee([x], t)) : Ee(ae, t),
                        ce = m ? V : wr(V, $e, Ee([...k ? .actions ? ? [], ...Q ? .items ? ? []], t), ze, k ? .rootLayout, { ...k ? .rootOptions,
                            expandContext : k ? .rootLayout === "workspace" && !b
                        }),
                        le = b ? pr(ce, b, k ? .rootOptions) : i && k ? .rootLayout !== "workspace" ? gr(ce) : ce,
                        Re = b !== "skills" && A && (L === "workspaceFiles" || (u.length === 0 || u.length === 1 && u[0] === "context") && !!t),
                        $ = ue(t).searchTerm,
                        Y = {
                            projects: {
                                loading: Fe || on || cn || nt !== $,
                                error: nt === $ && an,
                                retry: mn
                            },
                            workspaceFiles: {
                                loading: tt || dn || ne !== ve || ne !== $,
                                error: ve === $ && qe,
                                retry: un ? nn : hn
                            },
                            connectors: {
                                loading: Ye && Z.length === 0,
                                error: sn,
                                retry: fn
                            },
                            assets: {
                                loading: he,
                                error: pe,
                                retry: ge
                            },
                            files: {
                                loading: m ? pt() : Ie,
                                error: s && se.isError,
                                retry: s ? se.recover : void 0
                            },
                            code: {
                                loading: ke,
                                error: !1,
                                retry: void 0
                            }
                        },
                        y = m ? [Y.files] : L in Y ? [Y[L]] : L === "context" || !L && t ? Object.values(Y) : [],
                        z = y.find(x => x.error),
                        Ue = L === "skills" ? D ? .error : z ? {
                            message: Hn(),
                            retry: z.retry
                        } : b ? void 0 : Q ? .error ? ? (u.length === 0 && t ? D ? .error : void 0);
                    return {
                        items: le,
                        searchResults: Yn(le, u),
                        searchResultsVersion: L === "projects" ? Te : L === "workspaceFiles" ? Le : (L === "context" || !L) && t.trim() ? yn : void 0,
                        error: Ue,
                        status: b ? void 0 : Q ? .status,
                        isLoading: m ? pt() : L === "skills" ? !!(D && (!D.hasRequestedSkills || D.isLoading)) : !!(!b && Q ? .isLoading) || y.some(x => x.loading) || Re && et || !m && !b && u.length === 0 && !!D ? .isLoading,
                        pagination: Re ? {
                            hasMore: !!rn && !qe && $ === ve,
                            isLoading: et || $ !== ve,
                            onLoadMore: tn
                        } : void 0
                    }
                },
                select: (t, u, d, R) => {
                    t.type === "skill" || t.type === "max-command" || t.type === "plan-command" ? D ? .selectItem(t, u, d, R) : We(t, u, d)
                }
            }),
            xt = (0, c.useMemo)(() => Ce(m ? [] : "context", t => Dt(t.view, I())), [Ce, I, m]),
            Tt = (0, c.useMemo)(() => Ce("skills", t => Dt(t.view, Pr)), [Ce]),
            Rn = (0, c.useMemo)(() => ({
                char: "@",
                allowSpaces: !m,
                startOfLine: !1,
                pluginKey: I(),
                shouldShow: ({
                    transaction: t
                }) => n.current ? .enableTypedSuggestions === !1 ? !1 : Oe.current && t.docChanged ? (Oe.current = !1, !E.current || Date.now() - ut.current < 1500) : Pe.current,
                allow: ({
                    state: t,
                    range: u
                }) => n.current ? .enableTypedSuggestions !== !1 && !/^\s/.test(t.doc.textBetween(u.from + 1, u.to, "")) && (!E.current || !Gr(t, u.from) && Jr(t, u.from)),
                items: ({
                    query: t
                }) => He(t),
                command: ({
                    editor: t,
                    range: u,
                    props: d
                }) => Et.current(d, t, u),
                render: xt
            }), [I, xt, He, m]),
            Ve = D ? .suggestionOptions;
        return {
            suggestionOptions: Rn,
            skillSuggestionOptions: (0, c.useMemo)(() => Ve ? { ...Ve,
                render: Tt
            } : void 0, [Ve, Tt]),
            validateFilePath: Mn,
            isSuggestionActive: (0, c.useCallback)(() => lt.current, []),
            hasTypedAt: l,
            isLoading: Ae,
            notifyAtTyped: (0, c.useCallback)(() => {
                n.current ? .enableTypedSuggestions !== !1 && (Oe.current = !0, ut.current = Date.now())
            }, []),
            connectorAutoMatchEnabled: h
        }
    };
export {
    Ss as a, Cs as c, bs as d, zr as i, kr as l, xs as n, Pr as o, Es as r, Rs as s, Ts as t, Ms as u
};
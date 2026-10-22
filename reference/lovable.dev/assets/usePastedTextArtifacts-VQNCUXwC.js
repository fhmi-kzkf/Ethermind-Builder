import {
    o as R
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    HM as p,
    Nx as j
} from "./app-shared-6CLVfi8w.js";
import {
    i as K
} from "./vendor-react-Fx2PtaaM.js";
import {
    Qn as W
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    C as q,
    I as H,
    K as Q,
    at as X,
    b as A,
    n as Y,
    y as F
} from "./i18n-fn/chat--pastedText-D6ghLlfh.js";
import {
    Fr as J,
    Lr as Z,
    Nr as D,
    Or as _,
    Pr as $,
    Sr as U,
    gr as h,
    hr as tt,
    jr as w,
    lr as et,
    mr as g,
    pr as at,
    sr as nt,
    ur as E,
    xr as z
} from "./dashboard-shared-BN9MnewY.js";
try {
    (function() {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            d = new a.Error().stack;
        d && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[d] = "b1180915-5e5d-47b5-92bf-2059635ae8f0", a._sentryDebugIdIdentifier = "sentry-dbid-b1180915-5e5d-47b5-92bf-2059635ae8f0")
    })()
} catch {}
var st = R(K(), 1),
    M = a => {
        const {
            upload: d,
            lastGood: T,
            ...f
        } = a;
        return f
    },
    rt = a => {
        const d = a.pastedText;
        return d === void 0 || !a.uploaded ? d ? .lastGood : {
            url: a.url,
            name: a.name,
            size: a.size,
            mimeType: a.mimeType,
            existingFileId: a.existingFileId,
            existingDirName: a.existingDirName,
            ephemeralFileId: a.ephemeralFileId,
            pastedText: M(d)
        }
    },
    dt = a => {
        const d = a.pastedText,
            T = a.url.startsWith("blob:") && d.content !== void 0 ? _(d.content, d.kind) : {
                url: a.url,
                size: a.size
            },
            f = d.upload !== void 0 && d.upload.status === "uploading" ? { ...d.upload,
                status: "ready",
                candidateId: crypto.randomUUID()
            } : d.upload;
        return { ...a,
            url: T.url,
            size: T.size,
            uploading: !1,
            pastedText: { ...d,
                upload: f
            }
        }
    },
    v = a => {
        const d = a.some(f => f.field === "title"),
            T = a.some(f => f.field === "source");
        return d && T ? "both" : d ? "title" : "source"
    },
    ot = (a, d) => {
        const T = (n, e) => {
                const r = a.getState();
                if (r.images.filter(i => i.companionOf === void 0 && !z(i)).length >= 10) return p.error(F(), {
                    description: A({
                        count: 10
                    })
                }), null;
                const s = $(n, r.images.map(i => i.pastedText ? .title).filter(i => i !== void 0));
                if (!U(s.title, n).safe) return p.error(W()), null;
                const t = D(s.title, s.kind, r.images.map(i => i.name)),
                    {
                        url: l,
                        size: c
                    } = _(n, s.kind),
                    o = {
                        id: crypto.randomUUID(),
                        url: l,
                        name: t,
                        uploading: !1,
                        uploaded: !1,
                        presentation: "pasted_text",
                        pastedText: { ...s,
                            source: e,
                            upload: {
                                candidateId: crypto.randomUUID(),
                                attemptNumber: 1,
                                status: "ready"
                            }
                        },
                        size: c,
                        mimeType: w[s.kind]
                    };
                return r.setImages(i => [...i, o]), o
            },
            f = (n, e) => {
                const r = a.getState(),
                    s = r.images.find(m => m.id === n),
                    t = s ? .pastedText;
                if (s === void 0 || t === void 0) return {
                    status: "missing"
                };
                const l = U(e.title, e.content);
                if (!l.safe) {
                    const m = r.blockedPastedTextDrafts[n] ? .draftId ? ? crypto.randomUUID();
                    return r.setBlockedPastedTextDraft({
                        draftId: m,
                        artifactId: n,
                        title: e.title,
                        content: e.content,
                        findings: l.findings
                    }), d.emit(g, {
                        flowId: n,
                        candidateId: m,
                        state: "blocked",
                        source: t.source ? ? "",
                        attemptNumber: 0 n,
                        blockedField: v(l.findings),
                        renamed: e.title !== t.title,
                        contentChanged: e.content !== t.content
                    }), {
                        status: "blocked",
                        draftId: m
                    }
                }
                const c = r.blockedPastedTextDrafts[n];
                r.clearBlockedPastedTextDraft(n);
                const o = e.content !== t.content,
                    i = e.title !== t.title,
                    k = t.upload !== void 0,
                    x = o ? Z(e.content) : t.kind,
                    b = J(e.content),
                    C = () => {
                        c !== void 0 && d.emit(g, {
                            flowId: n,
                            candidateId: c.draftId,
                            state: "blocked_resolved",
                            source: t.source ? ? "",
                            attemptNumber: 0 n,
                            blockedField: v(c.findings),
                            renamed: e.title !== t.title,
                            contentChanged: e.content !== t.content
                        })
                    };
                if (!o && !i && c !== void 0) return C(), {
                    status: "saved"
                };
                if (!o && !k && s.uploaded) return d.emit(E, {
                    kind: x,
                    charCount: BigInt(b.charCount),
                    renamed: i,
                    contentChanged: !1
                }), r.setImages(m => m.map(u => {
                    if (u.id !== n || u.pastedText === void 0) return u;
                    const y = m.filter(I => I.id !== n).map(I => I.name);
                    return { ...u,
                        name: D(e.title.trim(), x, y),
                        pastedText: { ...u.pastedText,
                            title: e.title.trim(),
                            ...b
                        }
                    }
                })), C(), {
                    status: "saved"
                };
                const P = o ? _(e.content, x) : null;
                P !== null && s.url !== t.lastGood ? .url && h(s.url);
                const O = t.lastGood ? ? rt(s),
                    N = e.title.trim(),
                    B = crypto.randomUUID();
                return d.emit(E, {
                    kind: x,
                    charCount: BigInt(b.charCount),
                    renamed: i,
                    contentChanged: o
                }), r.setImages(m => m.map(u => {
                    if (u.id !== n || u.pastedText === void 0) return u;
                    const y = m.filter(I => I.id !== n).map(I => I.name);
                    return { ...u,
                        url: P ? .url ? ? u.url,
                        name: D(N, x, y),
                        size: P ? .size ? ? u.size,
                        mimeType: w[x],
                        uploading: !1,
                        uploaded: !1,
                        existingFileId: void 0,
                        existingDirName: void 0,
                        ephemeralFileId: void 0,
                        pastedText: { ...M(u.pastedText),
                            title: N,
                            kind: x,
                            content: e.content,
                            ...b,
                            edited: u.pastedText.edited === !0 || o,
                            upload: {
                                candidateId: B,
                                attemptNumber: 1,
                                status: "ready",
                                renamed: i,
                                contentChanged: o
                            },
                            lastGood: O
                        }
                    }
                })), C(), d.emit(g, {
                    flowId: n,
                    candidateId: B,
                    state: "replacement_attempted",
                    source: t.source ? ? "",
                    attemptNumber: 1 n,
                    renamed: i,
                    contentChanged: o
                }), {
                    status: "saved"
                }
            },
            G = n => {
                let e;
                return a.getState().setImages(r => r.map(s => {
                    const t = s.id === n ? s.pastedText ? .upload : void 0;
                    return t ? .status !== "failed" ? s : (e = {
                        candidateId: t.candidateId,
                        attemptNumber: t.attemptNumber + 1,
                        source: s.pastedText ? .source ? ? "",
                        renamed: t.renamed ? ? !1,
                        contentChanged: t.contentChanged ? ? !1
                    }, { ...s,
                        uploading: !1,
                        uploaded: !1,
                        pastedText: { ...s.pastedText,
                            upload: { ...t,
                                attemptNumber: t.attemptNumber + 1,
                                status: "ready",
                                failureStage: void 0
                            }
                        }
                    })
                })), e === void 0 ? !1 : (d.emit(g, {
                    flowId: n,
                    candidateId: e.candidateId,
                    state: "retry_attempted",
                    source: e.source,
                    attemptNumber: BigInt(e.attemptNumber),
                    renamed: e.renamed,
                    contentChanged: e.contentChanged
                }), !0)
            },
            L = n => {
                const e = a.getState(),
                    r = e.blockedPastedTextDrafts[n];
                if (r === void 0) return;
                const s = e.images.find(t => t.id === n);
                e.clearBlockedPastedTextDraft(n), d.emit(g, {
                    flowId: n,
                    candidateId: r.draftId,
                    state: "blocked_abandoned",
                    source: s ? .pastedText ? .source ? ? "",
                    attemptNumber: 0 n,
                    blockedField: v(r.findings),
                    renamed: s ? .pastedText ? .title !== r.title,
                    contentChanged: s ? .pastedText ? .content !== r.content
                })
            },
            V = (n, e) => {
                const r = a.getState();
                if (r.images.some(t => t.id === n.id)) return !0;
                if (r.images.filter(t => t.companionOf === void 0 && !z(t)).length >= 10) return p.error(F(), {
                    description: A({
                        count: 10
                    })
                }), !1;
                const s = dt(n);
                return r.setImages(t => {
                    const l = [...t];
                    return l.splice(Math.min(e, l.length), 0, s), l
                }), !0
            },
            S = (n, e) => {
                const r = a.getState(),
                    s = r.images.findIndex(c => c.id === n);
                if (s === -1) return;
                const t = r.images[s];
                if (t.pastedText !== void 0 && e ? .silent !== !0) {
                    const c = r.blockedPastedTextDrafts[n],
                        o = t.pastedText.upload;
                    d.emit(at, {
                        kind: t.pastedText.kind,
                        charCount: BigInt(t.pastedText.charCount),
                        lineCount: BigInt(t.pastedText.lineCount)
                    }), d.emit(g, {
                        flowId: n,
                        candidateId: c ? .draftId ? ? o ? .candidateId ? ? n,
                        state: "removed",
                        source: t.pastedText.source ? ? "",
                        attemptNumber: BigInt(o ? .attemptNumber ? ? 0),
                        blockedField: c === void 0 ? "" : v(c.findings),
                        renamed: o ? .renamed ? ? !1,
                        contentChanged: o ? .contentChanged ? ? !1
                    })
                }
                h(t.url), t.originalBlobUrl !== t.url && h(t.originalBlobUrl), t.pastedText ? .lastGood ? .url !== t.url && h(t.pastedText ? .lastGood ? .url), r.clearBlockedPastedTextDraft(n), r.setImages(c => c.filter(o => o.id !== n));
                const l = !t.url.startsWith("blob:") || t.pastedText ? .content !== void 0;
                if (t.pastedText !== void 0 && e ? .silent !== !0 && l) {
                    const c = p.info(Q(), {
                        description: t.pastedText.title,
                        action: {
                            label: X(),
                            onClick: o => {
                                o.preventDefault(), V(t, s) && p.dismiss(c)
                            }
                        }
                    })
                }
            };
        return {
            createPastedArtifact: T,
            attachPastedText: (n, e) => {
                const r = T(n, e.source),
                    s = r ? .pastedText;
                if (r === null || s === void 0) return !1;
                d.emit(et, {
                    kind: s.kind,
                    charCount: BigInt(s.charCount),
                    lineCount: BigInt(s.lineCount),
                    source: e.source,
                    overMessageLimit: e.overMessageLimit
                });
                const t = e.restoreInline,
                    l = p.info(Y(), { ...t !== void 0 && {
                            action: {
                                label: H(),
                                onClick: c => {
                                    c.preventDefault(), (async () => {
                                        const o = a.getState().images.find(k => k.id === r.id);
                                        if (o === void 0) {
                                            p.dismiss(l);
                                            return
                                        }
                                        const i = o.pastedText ? .content ? ? n;
                                        if (!await t(i)) {
                                            p.warning(q());
                                            return
                                        }
                                        S(r.id, {
                                            silent: !0
                                        }), d.emit(tt, {
                                            kind: o.pastedText ? .kind ? ? s.kind,
                                            charCount: BigInt(i.length)
                                        }), p.dismiss(l)
                                    })()
                                }
                            }
                        }
                    });
                return !0
            },
            updatePastedArtifact: f,
            retryPastedArtifact: G,
            discardBlockedPastedArtifactDraft: L,
            removePastedArtifact: S
        }
    },
    Tt = () => {
        const {
            store: a
        } = nt(), d = j();
        return (0, st.useMemo)(() => ot(a, d), [a, d])
    };
export {
    Tt as n, ot as t
};
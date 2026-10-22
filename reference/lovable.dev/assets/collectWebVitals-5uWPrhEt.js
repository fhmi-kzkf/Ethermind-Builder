try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fd7248b2-f39c-48b8-8621-f9b58f358e70", e._sentryDebugIdIdentifier = "sentry-dbid-fd7248b2-f39c-48b8-8621-f9b58f358e70")
    })()
} catch {}
var qe = -1,
    Se = () => qe,
    be = e => {
        addEventListener("pageshow", t => {
            t.persisted && (qe = t.timeStamp, e(t))
        }, !0)
    },
    x = (e, t, n, r) => {
        let i, a;
        return o => {
            t.value >= 0 && (o || r) && (a = t.value - (i ? ? 0), (a || i === void 0) && (i = t.value, t.delta = a, t.rating = ((c, s) => c > s[1] ? "poor" : c > s[0] ? "needs-improvement" : "good")(t.value, n), e(t)))
        }
    },
    it = e => {
        requestAnimationFrame(() => requestAnimationFrame(e))
    },
    Ee = () => {
        const e = performance.getEntriesByType("navigation")[0];
        if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
    },
    ee = () => Ee() ? .activationStart ? ? 0,
    P = -1,
    Ve = new Set,
    Me = () => document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0,
    ge = e => {
        if (document.visibilityState === "hidden") {
            if (e.type === "visibilitychange")
                for (const t of Ve) t();
            isFinite(P) || (P = e.type === "visibilitychange" ? e.timeStamp : 0, removeEventListener("prerenderingchange", ge, !0))
        }
    },
    rt = (e = !1) => {
        if (e && (P = 1 / 0), P < 0) {
            const t = ee();
            P = (document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find(n => n.name === "hidden" && n.startTime >= t) ? .startTime) ? ? Me(), addEventListener("visibilitychange", ge, !0), addEventListener("prerenderingchange", ge, !0), be(() => {
                setTimeout(() => {
                    P = Me()
                })
            })
        }
        return {
            get firstHiddenTime() {
                return P
            },
            onHidden(t) {
                Ve.add(t)
            }
        }
    },
    O = (e, t = -1, n, r = 0, i, a, o) => {
        const c = Ee(),
            s = c ? .navigationId || 0;
        let d = "navigate";
        return n ? d = n : Se() >= 0 ? d = "back-forward-cache" : c && (document.prerendering || ee() > 0 ? d = "prerender" : document.wasDiscarded ? d = "restore" : c.type && (d = c.type.replace(/_/g, "-"))), {
            name: e,
            value: t,
            rating: "good",
            delta: 0,
            entries: [],
            id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
            navigationType: d,
            navigationId: r || s,
            navigationInteractionId: i,
            navigationURL: a || c ? .name,
            navigationStartTime: o || 0
        }
    },
    Pe = new WeakMap;

function at(e, t) {
    let n = Pe.get(t);
    return n || (n = new WeakMap, Pe.set(t, n)), n.get(e) || n.set(e, new t), n.get(e)
}
var ve = (e, t, n = {}) => {
        try {
            const r = e.filter(i => PerformanceObserver.supportedEntryTypes.includes(i));
            if (r.length > 0) {
                const i = new PerformanceObserver(a => {
                    queueMicrotask(() => {
                        const o = a.getEntries();
                        r.length > 1 && o.sort((c, s) => c.startTime + c.duration - (s.startTime + s.duration)), t(o)
                    })
                });
                for (const a of r) i.observe({
                    type: a,
                    buffered: !0,
                    ...n
                });
                return i
            }
        } catch {}
    },
    Xe = e => globalThis.PerformanceObserver ? .supportedEntryTypes.includes("soft-navigation") && typeof globalThis.PerformanceSoftNavigation ? .prototype ? .getLargestInteractionContentfulPaint == "function" && e && e.reportSoftNavs,
    ot = (e, t) => {
        if (e.set(t.navigationId, t), e.size > 2) {
            const n = e.keys().next().value;
            n !== void 0 && e.delete(n)
        }
    },
    st = class {
        l
    },
    Ke = e => {
        document.prerendering ? addEventListener("prerenderingchange", e, !0) : e()
    },
    se = [1800, 3e3],
    ct = (e, t = {}) => {
        const n = Xe(t);
        Ke(() => {
            const r = at(t, st),
                i = rt();
            let a, o = O("FCP");
            const c = ve(["paint"], s => {
                for (const d of s) d.name === "first-contentful-paint" && (c.disconnect(), d.startTime < i.firstHiddenTime && (o.value = Math.max(d.startTime - ee(), 0), o.entries.push(d), o.navigationId = d.navigationId || o.navigationId, a(!0)))
            });
            c && (a = x(e, o, se, t.reportAllChanges), be(s => {
                o = O("FCP", -1, "back-forward-cache", o.navigationId, o.navigationInteractionId, o.navigationURL, Se()), a = x(e, o, se, t.reportAllChanges), it(() => {
                    o.value = performance.now() - s.timeStamp, a(!0)
                })
            })), n && ve(["soft-navigation"], s => {
                s.forEach(d => {
                    r.l && d.navigationId && ot(r.l, d);
                    const m = Math.max((d.presentationTime || d.paintTime || 0) - d.startTime, 0);
                    o = O("FCP", m, "soft-navigation", d.navigationId, d.interactionId, d.name, d.startTime), a = x(e, o, se, t.reportAllChanges), a(!0)
                })
            }, t)
        })
    },
    ce = [800, 1800],
    fe = e => {
        document.prerendering ? Ke(() => fe(e)) : document.readyState !== "complete" ? addEventListener("load", () => fe(e), !0) : setTimeout(e)
    },
    dt = (e, t = {}) => {
        const n = Xe(t);
        let r = O("TTFB"),
            i = x(e, r, ce, t.reportAllChanges);
        fe(() => {
            const a = Ee();
            if (a) {
                const o = a.responseStart;
                r.value = Math.max(o - ee(), 0), r.entries = [a], i(!0), be(() => {
                    r = O("TTFB", 0, "back-forward-cache", r.navigationId, r.navigationInteractionId, r.navigationURL, Se()), i = x(e, r, ce, t.reportAllChanges), i(!0)
                }), n && ve(["soft-navigation"], c => {
                    c.forEach(s => {
                        s.navigationId && (r = O("TTFB", 0, "soft-navigation", s.navigationId, s.interactionId, s.name, s.startTime), r.entries = [s], i = x(e, r, ce, t.reportAllChanges), i(!0))
                    })
                }, t)
            }
        })
    },
    $e = class {
        t;
        o = 0;
        i = [];
        l(e) {
            if (e.hadRecentInput) return;
            const t = this.i[0],
                n = this.i.at(-1);
            this.o && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this.o += e.value, this.i.push(e)) : (this.o = e.value, this.i = [e]), this.t ? .(e)
        }
    },
    te = () => {
        const e = performance.getEntriesByType("navigation")[0];
        if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
    },
    pe = e => {
        if (document.readyState === "loading") return "loading";
        const t = te();
        if (t) {
            if (e < t.domInteractive) return "loading";
            if (t.domContentLoadedEventStart === 0 || e < t.domContentLoadedEventStart) return "dom-interactive";
            if (t.domComplete === 0 || e < t.domComplete) return "dom-content-loaded"
        }
        return "complete"
    },
    lt = e => {
        const t = e.nodeName;
        return e.nodeType === 1 ? t.toLowerCase() : t.toUpperCase().replace(/^#/, "")
    },
    De = e => {
        let t = "";
        try {
            for (; e ? .nodeType !== 9;) {
                const n = e,
                    r = n.id ? "#" + n.id : [lt(n), ...Array.from(n.classList ? ? []).sort()].join(".");
                if (t.length + r.length > 99) return t || r;
                if (t = t ? r + ">" + t : r, n.id) break;
                e = n.parentNode
            }
        } catch {}
        return t
    },
    _e = new WeakMap;

function N(e, t) {
    let n = _e.get(t);
    return n || (n = new WeakMap, _e.set(t, n)), n.get(e) || n.set(e, new t), n.get(e)
}
var Ye = -1,
    V = () => Ye,
    X = e => {
        addEventListener("pageshow", t => {
            t.persisted && (Ye = t.timeStamp, e(t))
        }, !0)
    },
    w = (e, t, n, r) => {
        let i, a;
        return o => {
            t.value >= 0 && (o || r) && (a = t.value - (i ? ? 0), (a || i === void 0) && (i = t.value, t.delta = a, t.rating = ((c, s) => c > s[1] ? "poor" : c > s[0] ? "needs-improvement" : "good")(t.value, n), e(t)))
        }
    },
    Ce = e => {
        requestAnimationFrame(() => requestAnimationFrame(e))
    },
    ne = () => te() ? .activationStart ? ? 0,
    $ = -1,
    Ge = new Set,
    Ne = () => document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0,
    me = e => {
        if (document.visibilityState === "hidden") {
            if (e.type === "visibilitychange")
                for (const t of Ge) t();
            isFinite($) || ($ = e.type === "visibilitychange" ? e.timeStamp : 0, removeEventListener("prerenderingchange", me, !0))
        }
    },
    j = (e = !1) => {
        if (e && ($ = 1 / 0), $ < 0) {
            const t = ne();
            $ = (document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find(n => n.name === "hidden" && n.startTime >= t) ? .startTime) ? ? Ne(), addEventListener("visibilitychange", me, !0), addEventListener("prerenderingchange", me, !0), X(() => {
                setTimeout(() => {
                    $ = Ne()
                })
            })
        }
        return {
            get firstHiddenTime() {
                return $
            },
            onHidden(t) {
                Ge.add(t)
            }
        }
    },
    k = (e, t = -1, n, r = 0, i, a, o) => {
        const c = te(),
            s = c ? .navigationId || 0;
        let d = "navigate";
        return n ? d = n : V() >= 0 ? d = "back-forward-cache" : c && (document.prerendering || ne() > 0 ? d = "prerender" : document.wasDiscarded ? d = "restore" : c.type && (d = c.type.replace(/_/g, "-"))), {
            name: e,
            value: t,
            rating: "good",
            delta: 0,
            entries: [],
            id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
            navigationType: d,
            navigationId: r || s,
            navigationInteractionId: i,
            navigationURL: a || c ? .name,
            navigationStartTime: o || 0
        }
    },
    R = (e, t, n = {}) => {
        try {
            const r = e.filter(i => PerformanceObserver.supportedEntryTypes.includes(i));
            if (r.length > 0) {
                const i = new PerformanceObserver(a => {
                    queueMicrotask(() => {
                        const o = a.getEntries();
                        r.length > 1 && o.sort((c, s) => c.startTime + c.duration - (s.startTime + s.duration)), t(o)
                    })
                });
                for (const a of r) i.observe({
                    type: a,
                    buffered: !0,
                    ...n
                });
                return i
            }
        } catch {}
    },
    q = e => globalThis.PerformanceObserver ? .supportedEntryTypes.includes("soft-navigation") && typeof globalThis.PerformanceSoftNavigation ? .prototype ? .getLargestInteractionContentfulPaint == "function" && e && e.reportSoftNavs,
    Je = (e, t) => {
        if (e.set(t.navigationId, t), e.size > 2) {
            const n = e.keys().next().value;
            n !== void 0 && e.delete(n)
        }
    },
    Qe = e => {
        let t = !1;
        return () => {
            t || (e(), t = !0)
        }
    },
    ut = class {
        u
    },
    we = e => {
        document.prerendering ? addEventListener("prerenderingchange", e, !0) : e()
    },
    de = [1800, 3e3],
    gt = (e, t = {}) => {
        const n = q(t);
        we(() => {
            const r = N(t, ut),
                i = j();
            let a, o = k("FCP");
            const c = R(["paint"], s => {
                for (const d of s) d.name === "first-contentful-paint" && (c.disconnect(), d.startTime < i.firstHiddenTime && (o.value = Math.max(d.startTime - ne(), 0), o.entries.push(d), o.navigationId = d.navigationId || o.navigationId, a(!0)))
            });
            c && (a = w(e, o, de, t.reportAllChanges), X(s => {
                o = k("FCP", -1, "back-forward-cache", o.navigationId, o.navigationInteractionId, o.navigationURL, V()), a = w(e, o, de, t.reportAllChanges), Ce(() => {
                    o.value = performance.now() - s.timeStamp, a(!0)
                })
            })), n && R(["soft-navigation"], s => {
                s.forEach(d => {
                    r.u && d.navigationId && Je(r.u, d);
                    const m = Math.max((d.presentationTime || d.paintTime || 0) - d.startTime, 0);
                    o = k("FCP", m, "soft-navigation", d.navigationId, d.interactionId, d.name, d.startTime), a = w(e, o, de, t.reportAllChanges), a(!0)
                })
            }, t)
        })
    },
    Re = [.1, .25],
    Fe = e => e.find(t => t.node ? .nodeType === 1) || e[0],
    vt = (e, t = {}) => {
        const n = N(t = Object.assign({}, t), $e),
            r = new WeakMap;
        n.t = i => {
            if (i ? .sources ? .length) {
                const a = Fe(i.sources),
                    o = a ? .node;
                if (o) {
                    const c = t.generateTarget ? .(o) ? ? De(o);
                    r.set(a, c)
                }
            }
        }, ((i, a = {}) => {
            const o = j();
            gt(Qe(() => {
                let c, s = k("CLS", 0);
                const d = N(a, $e),
                    m = (g, u, p, T, I) => {
                        s = k("CLS", 0, g, u, p, T, I), d.o = 0, c = w(i, s, Re, a.reportAllChanges)
                    },
                    b = (g = !1) => {
                        d.o > s.value && (s.value = d.o, s.entries = d.i), c(g)
                    },
                    E = g => {
                        b(!0), m("soft-navigation", g.navigationId, g.interactionId, g.name, g.startTime)
                    },
                    l = g => {
                        for (const u of g) u.entryType !== "soft-navigation" ? d.l(u) : E(u);
                        b()
                    },
                    f = ["layout-shift"];
                q(a) && f.push("soft-navigation");
                const v = R(f, l);
                v && (c = w(i, s, Re, a.reportAllChanges), o.onHidden(() => {
                    l(v.takeRecords()), c(!0)
                }), X(() => {
                    m("back-forward-cache", s.navigationId, s.navigationInteractionId, s.navigationURL, V()), Ce(c)
                }), setTimeout(c))
            }))
        })(i => {
            e((a => {
                let o = {};
                if (a.entries.length) {
                    const c = a.entries.reduce((s, d) => s.value > d.value ? s : d);
                    if (c ? .sources ? .length) {
                        const s = Fe(c.sources);
                        s && (o = {
                            largestShiftTarget: r.get(s),
                            largestShiftTime: c.startTime,
                            largestShiftValue: c.value,
                            largestShiftSource: s,
                            largestShiftEntry: c,
                            loadState: pe(c.startTime)
                        })
                    }
                }
                return Object.assign(a, {
                    attribution: o
                })
            })(i))
        }, t)
    },
    Ze = 0,
    le = 1 / 0,
    G = 0,
    ft = e => {
        for (const t of e) t.interactionId && (le = Math.min(le, t.interactionId), G = Math.max(G, t.interactionId), Ze = G ? (G - le) / 7 + 1 : 0)
    },
    he, xe = () => he ? Ze : performance.interactionCount ? ? 0,
    pt = () => {
        "interactionCount" in performance || he || (he = R(["event"], ft, {
            durationThreshold: 0
        }))
    },
    Oe = 0,
    Ue = class {
        h = [];
        v = new Map;
        p;
        m;
        M() {
            Oe = xe(), this.h.length = 0, this.v.clear()
        }
        T(e) {
            const t = xe() - Oe,
                n = Math.min(this.h.length - 1, Math.floor(t / 50));
            return !t || n !== -1 || e !== "soft-navigation" && e !== "back-forward-cache" ? this.h[n] : {
                D: 8,
                id: -1,
                entries: []
            }
        }
        l(e) {
            if (this.p ? .(e), !e.interactionId && e.entryType !== "first-input") return;
            const t = this.h.at(-1);
            let n = this.v.get(e.interactionId);
            if (n || this.h.length < 10 || e.duration > t.D) {
                if (n ? e.duration > n.D ? (n.entries = [e], n.D = e.duration) : e.duration === n.D && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
                        id: e.interactionId,
                        entries: [e],
                        D: e.duration
                    }, this.v.set(n.id, n), this.h.push(n)), this.h.sort((r, i) => i.D - r.D), this.h.length > 10) {
                    const r = this.h.splice(10);
                    for (const i of r) this.v.delete(i.id)
                }
                this.m ? .(n)
            }
        }
    },
    Te = e => {
        const t = "requestIdleCallback" in globalThis ? 1e3 : 0,
            n = globalThis.requestIdleCallback || setTimeout,
            r = globalThis.cancelIdleCallback || clearTimeout;
        if (document.visibilityState === "hidden") e();
        else {
            const i = Qe(e);
            let a = -1;
            const o = () => {
                r(a), i()
            };
            addEventListener("visibilitychange", o, {
                once: !0,
                capture: !0
            }), a = n(() => {
                removeEventListener("visibilitychange", o, {
                    capture: !0
                }), i()
            }, {
                timeout: t
            })
        }
    },
    ze = [200, 500],
    mt = (e, t = {}) => {
        const n = N(t = Object.assign({}, t), Ue);
        let r = [],
            i = [],
            a = 0;
        const o = new WeakMap,
            c = new WeakMap;
        let s = !1;
        const d = () => {
                s || (Te(m), s = !0)
            },
            m = () => {
                const l = new Set(n.h.map(g => o.get(g.entries[0]))),
                    f = i.length - 10;
                i = i.filter((g, u) => u >= f || l.has(g));
                const v = new Set;
                for (const g of i) {
                    const u = b(g.startTime, g.processingEnd);
                    for (const p of u) v.add(p)
                }
                r = r.filter(g => g.startTime > a || v.has(g)), s = !1
            };
        n.p = l => {
            const f = l.startTime + l.duration;
            let v;
            a = Math.max(a, l.processingEnd);
            for (let g = i.length - 1; g >= 0; g--) {
                const u = i[g];
                if (Math.abs(f - u.renderTime) <= 8) {
                    v = u, v.startTime = Math.min(l.startTime, v.startTime), v.processingStart = Math.min(l.processingStart, v.processingStart), v.processingEnd = Math.max(l.processingEnd, v.processingEnd), t.includeProcessedEventEntries && v.entries.push(l);
                    break
                }
            }
            v || (v = {
                startTime: l.startTime,
                processingStart: l.processingStart,
                processingEnd: l.processingEnd,
                renderTime: f,
                entries: t.includeProcessedEventEntries ? [l] : []
            }, i.push(v)), (l.interactionId || l.entryType === "first-input") && o.set(l, v), d()
        }, n.m = l => {
            if (!c.get(l)) {
                const f = l.entries.find(v => v.target) ? .target;
                if (f) {
                    const v = t.generateTarget ? .(f) ? ? De(f);
                    c.set(l, v)
                } else {
                    const v = l.entries.find(g => g.targetSelector) ? .targetSelector;
                    v && c.set(l, v)
                }
            }
        };
        const b = (l, f) => {
                const v = [];
                for (const g of r)
                    if (!(g.startTime + g.duration < l)) {
                        if (g.startTime > f) break;
                        v.push(g)
                    }
                return v
            },
            E = l => {
                if (l.entries.length === 0) {
                    const h = l.navigationStartTime || 0,
                        S = {
                            processedEventEntries: [],
                            longAnimationFrameEntries: [],
                            inputDelay: 0,
                            processingDuration: 0,
                            presentationDelay: l.value,
                            loadState: pe(h)
                        };
                    return Object.assign(l, {
                        attribution: S
                    })
                }
                const f = l.entries[0],
                    v = o.get(f),
                    g = v.processingStart,
                    u = Math.max(f.startTime + f.duration, g),
                    p = Math.min(v.processingEnd, u),
                    T = v.entries.sort((h, S) => h.processingStart - S.processingStart),
                    I = b(f.startTime, p),
                    C = n.v.get(f.interactionId),
                    D = {
                        interactionTarget: c.get(C),
                        interactionType: f.name.startsWith("key") ? "keyboard" : "pointer",
                        interactionTime: f.startTime,
                        nextPaintTime: u,
                        processedEventEntries: T,
                        longAnimationFrameEntries: I,
                        inputDelay: g - f.startTime,
                        processingDuration: p - g,
                        presentationDelay: u - p,
                        loadState: pe(f.startTime),
                        longestScript: void 0,
                        totalScriptDuration: void 0,
                        totalStyleAndLayoutDuration: void 0,
                        totalPaintDuration: void 0,
                        totalUnattributedDuration: void 0
                    };
                return (h => {
                    const S = h.interactionTime,
                        y = h.nextPaintTime;
                    if (!h.longAnimationFrameEntries ? .length || !S || !y) return;
                    const M = h.inputDelay,
                        A = h.processingDuration;
                    let z, B, ie = 0,
                        H = 0,
                        re = 0,
                        ae = 0;
                    for (const K of h.longAnimationFrameEntries) {
                        H = H + K.startTime + K.duration - K.styleAndLayoutStart;
                        for (const L of K.scripts) {
                            const ke = L.startTime + L.duration;
                            if (ke < S) continue;
                            const Y = ke - Math.max(S, L.startTime),
                                Ae = L.duration ? Y / L.duration * L.forcedStyleAndLayoutDuration : 0;
                            ie += Y - Ae, H += Ae, Y > ae && (B = L.startTime < S + M ? "input-delay" : L.startTime >= S + M + A ? "presentation-delay" : "processing-duration", z = L, ae = Y)
                        }
                    }
                    const oe = h.longAnimationFrameEntries.at(-1),
                        Le = oe ? oe.startTime + oe.duration : 0;
                    Le >= S + M + A && (re = y - Le), z && B && (h.longestScript = {
                        entry: z,
                        subpart: B,
                        intersectingDuration: ae
                    }), h.totalScriptDuration = ie, h.totalStyleAndLayoutDuration = H, h.totalPaintDuration = re, h.totalUnattributedDuration = y - S - ie - H - re
                })(D), Object.assign(l, {
                    attribution: D
                })
            };
        R(["long-animation-frame"], l => {
            r = r.concat(l), d()
        }, t), ((l, f = {}) => {
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const v = j();
            we(() => {
                pt();
                let g, u = k("INP");
                const p = N(f, Ue),
                    T = (y, M, A, z, B) => {
                        p.M(), u = k("INP", -1, y, M, A, z, B), g = w(l, u, ze, f.reportAllChanges)
                    },
                    I = () => {
                        const y = p.T(u.navigationType);
                        y && y.D !== u.value && (u.value = y.D, u.entries = y.entries, g())
                    },
                    C = y => {
                        I(), g(!0), T("soft-navigation", y.navigationId, y.interactionId, y.name, y.startTime)
                    },
                    D = (y, M = !1) => {
                        Te(() => {
                            for (const A of y) A.entryType !== "soft-navigation" ? p.l(A) : C(A);
                            I(), M && g(!0)
                        })
                    },
                    h = ["event", "first-input"];
                q(f) && h.push("soft-navigation");
                const S = R(h, D, { ...f,
                    durationThreshold: f.durationThreshold ? ? 40
                });
                g = w(l, u, ze, f.reportAllChanges), S && (v.onHidden(() => {
                    D(S.takeRecords(), !0)
                }), X(() => {
                    T("back-forward-cache", u.navigationId, u.navigationInteractionId, u.navigationURL, V())
                }))
            })
        })(l => {
            e(E(l))
        }, t)
    },
    Be = class {
        p;
        u;
        l(e) {
            this.p ? .(e)
        }
    },
    ue = [2500, 4e3],
    ht = (e, t = {}) => {
        const n = N(t = Object.assign({}, t), Be),
            r = new WeakMap;
        q(t) && (n.u = new Map), n.p = i => {
            const a = i.element;
            if (a) {
                const o = t.generateTarget ? .(a) ? ? De(a);
                r.set(i, o)
            } else i.id && r.set(i, `#${i.id}`)
        }, ((i, a = {}) => {
            let o = !1;
            const c = q(a);
            we(() => {
                let s, d = j(),
                    m = k("LCP");
                const b = N(a, Be),
                    E = (u, p, T, I, C) => {
                        m = k("LCP", -1, u, p, T, I, C), s = w(i, m, ue, a.reportAllChanges), o = !1, u === "soft-navigation" && (d = j(!0))
                    },
                    l = u => {
                        b.u && u.navigationId && Je(b.u, u), o || s(!0), E("soft-navigation", u.navigationId, u.interactionId, u.name, u.startTime);
                        const p = u.getLargestInteractionContentfulPaint ? .();
                        p && f([p])
                    },
                    f = u => {
                        a.reportAllChanges || c || (u = u.slice(-1));
                        for (const p of u) {
                            if (!p) continue;
                            if (p.entryType === "soft-navigation") {
                                l(p);
                                continue
                            }
                            let T = 0,
                                I = [],
                                C = p.startTime;
                            if (p.entryType === "largest-contentful-paint") T = Math.max(p.startTime - ne(), 0), b.l(p), I = [p];
                            else if (p.entryType === "interaction-contentful-paint") {
                                const D = p;
                                if (!m.navigationId || "interactionId" in D && D.interactionId != m.navigationInteractionId) continue;
                                C = D.largestContentfulPaint ? .renderTime || 0, T = Math.max(C - p.startTime, 0), D.largestContentfulPaint && (b.l(D.largestContentfulPaint), I = [D.largestContentfulPaint])
                            }
                            C < d.firstHiddenTime && (m.value = T, m.entries = I, s())
                        }
                    },
                    v = ["largest-contentful-paint"];
                c && v.push("interaction-contentful-paint", "soft-navigation");
                const g = R(v, f);
                if (g) {
                    s = w(i, m, ue, a.reportAllChanges);
                    const u = ["keydown", "click", "visibilitychange"],
                        p = T => {
                            if (T.isTrusted && !o) {
                                const I = m.id;
                                Te(() => {
                                    if (!o) {
                                        if (!c) {
                                            g.disconnect();
                                            for (const C of u) removeEventListener(C, p, {
                                                capture: !0
                                            })
                                        }
                                        I === m.id && (o = !0, s(!0))
                                    }
                                })
                            }
                        };
                    for (const T of u) addEventListener(T, p, {
                        capture: !0
                    });
                    X(T => {
                        E("back-forward-cache", m.navigationId, m.navigationInteractionId, m.navigationURL, V()), s = w(i, m, ue, a.reportAllChanges), Ce(() => {
                            m.value = performance.now() - T.timeStamp, o = !0, s(!0)
                        })
                    })
                }
            })
        })(i => {
            e((a => {
                let o = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: a.value
                };
                if (a.entries.length) {
                    const c = a.entries.at(-1),
                        s = c.url && performance.getEntriesByType("resource").find(E => E.name === c.url);
                    let d;
                    o.target = r.get(c), o.lcpEntry = c, c.url && (o.url = c.url), s && (o.lcpResourceEntry = s);
                    let m = 0,
                        b = 0;
                    if (a.navigationType !== "soft-navigation" ? (d = te(), m = d ? .activationStart ? ? 0, b = d ? .responseStart ? ? 0) : (m = a.navigationStartTime || 0, d = n.u ? .get(a.navigationId)), d) {
                        const E = Math.max(0, b - m),
                            l = Math.max(E, s ? (s.requestStart || s.startTime) - m : 0),
                            f = Math.min(a.value, Math.max(l, s ? s.responseEnd - m : 0));
                        o = { ...o,
                            timeToFirstByte: E,
                            resourceLoadDelay: l - E,
                            resourceLoadDuration: f - l,
                            elementRenderDelay: a.value - f,
                            navigationEntry: d
                        }
                    }
                }
                return Object.assign(a, {
                    attribution: o
                })
            })(i))
        }, t)
    },
    Tt = e => {
        const t = e.nodeName;
        return e.nodeType === 1 ? t.toLowerCase() : t.toUpperCase().replace(/^#/, "")
    },
    yt = e => {
        let t = "";
        try {
            for (; e ? .nodeType !== 9;) {
                const n = e,
                    r = n.id ? "#" + n.id : [Tt(n), ...Array.from(n.classList ? ? []).sort()].join(".");
                if (t.length + r.length > 99) return t || r;
                if (t = t ? r + ">" + t : r, n.id) break;
                e = n.parentNode
            }
        } catch {}
        return t
    },
    It = "(unattributed)",
    He = 120,
    St = 5;

function ye(e) {
    return e.replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi, "").replace(/[:«][rR][0-9a-z]*[:»]/g, "").replace(/_[rR]_[0-9a-z]+(?:H[0-9a-z]+)?_/g, "_r_").replace(/\bbase-ui-[rR]_[0-9a-z]+/g, "base-ui-r").replace(/\bcss-[0-9a-z]+/gi, "css").replace(/:nth-[a-z-]+\([^)]*\)/gi, "").replace(/\b[0-9a-f]{8,}\b/gi, "").replace(/\d+/g, "").replace(/[-_]{2,}/g, "-").replace(/[-_]+(?=[.#|>]|$)/g, "").replace(/\s+/g, " ").trim()
}

function et(e) {
    return e.split(">").map(t => ye(t)).filter(t => t.length > 0).slice(-3).join(">")
}

function bt(e) {
    let t = e;
    for (let n = 0; t && n < St; n++) {
        const r = t.getAttribute("data-testid");
        if (r) return r;
        t = t.parentElement
    }
    return null
}

function J(e) {
    return e.length > He ? e.slice(0, He) : e
}

function Et(e, t) {
    const n = bt(e);
    if (n) {
        const s = ye(n);
        if (s) return J(`testid:${s}`)
    }
    const r = e.getAttribute("id");
    if (r) {
        const s = ye(r);
        if (s) return J(`#${s}`)
    }
    const i = e.getAttribute("role"),
        a = e.tagName.toLowerCase(),
        o = i ? `${a}[role=${i}]` : a,
        c = t ? et(t) : "";
    return J(c ? `${o}|${c}` : o)
}

function Z({
    element: e,
    selector: t
}) {
    if (e instanceof Element) return Et(e, t);
    if (t) {
        const n = et(t);
        if (n) return J(n)
    }
    return It
}
var tt = e => {
    const t = e instanceof Element ? e : e ? .parentElement ? ? null;
    return Z({
        element: t,
        selector: yt(t)
    })
};

function Dt(e) {
    return e && (e.startsWith("testid:") || e.includes("|")) ? e : Z({
        selector: e
    })
}
var We = ["pointerdown", "pointerup", "click", "keydown", "keyup"],
    Ct = new Set(["pointerdown", "keydown"]);
var wt = 32,
    Lt = 10,
    U = [],
    _ = new Map,
    F, W, Ie, Q;

function kt(e, t) {
    if (!t && e === Ie) return Q;
    const n = tt ? .(e);
    return Ie = e, Q = !n || n === "(unattributed)" ? void 0 : n, Q
}

function je(e) {
    if (!(e.target instanceof Element)) return;
    const t = kt(e.target, Ct.has(e.type));
    t && (U.length >= wt && U.shift(), U.push({
        timeStamp: e.timeStamp,
        key: t
    }))
}

function nt(e) {
    for (const t of e) {
        if (!t.interactionId) continue;
        const n = _.get(t.interactionId);
        if (n && n.duration >= t.duration) continue;
        const r = U.find(i => i.timeStamp === t.startTime) ? .key ? ? n ? .key;
        r && (_.set(t.interactionId, {
            startTime: t.startTime,
            duration: t.duration,
            key: r
        }), _.size > Lt && At())
    }
}

function At() {
    let e, t = 1 / 0;
    for (const [n, r] of _) r.duration < t && (t = r.duration, e = n);
    e !== void 0 && _.delete(e)
}

function Mt() {
    if (W) return W;
    const e = {
        capture: !0,
        passive: !0
    };
    for (const n of We) window.addEventListener(n, je, e);
    try {
        F = new PerformanceObserver(n => nt(n.getEntries())), F.observe({
            type: "event",
            durationThreshold: 40
        })
    } catch {
        F = void 0
    }
    const t = () => {
        if (W === t) {
            for (const n of We) window.removeEventListener(n, je, e);
            F ? .disconnect(), F = void 0, U.length = 0, _.clear(), Ie = void 0, Q = void 0, W = void 0
        }
    };
    return W = t, t
}

function Pt(e) {
    if (e === void 0) return;
    const t = F ? .takeRecords();
    t ? .length && nt(t);
    for (const n of _.values())
        if (n.startTime === e) return n.key;
    return U.find(n => n.timeStamp === e) ? .key
}
var $t = {
    durationThreshold: 40,
    reportAllChanges: !1,
    includeProcessedEventEntries: !1,
    generateTarget: tt
};

function _t(e, t) {
    const n = Mt();
    return dt(r => e(r)), ct(r => e(r)), vt(r => {
        if (r.value === 0) {
            e(r);
            return
        }
        const {
            attribution: i
        } = r;
        e(r, {
            interactionTarget: Z({
                element: i.largestShiftSource ? .node,
                selector: i.largestShiftTarget
            }),
            loadState: i.loadState,
            largestShiftValue: i.largestShiftValue,
            largestShiftTime: i.largestShiftTime
        })
    }, t ? .clsReportAllChanges ? {
        reportAllChanges: !0
    } : void 0), mt(r => {
        const {
            attribution: i
        } = r, a = Dt(i.interactionTarget), o = a === "(unattributed)" ? Pt(i.interactionTime) : void 0, {
            longestScript: c
        } = i;
        e(r, {
            interactionTarget: o ? ? a,
            attributionSource: o ? "recovered" : "live",
            interactionType: i.interactionType,
            loadState: i.loadState,
            inputDelay: i.inputDelay,
            processingDuration: i.processingDuration,
            presentationDelay: i.presentationDelay,
            totalScriptDuration: i.totalScriptDuration,
            longestScriptDuration: c ? .intersectingDuration,
            longestScriptSubpart: c ? .subpart,
            longestScriptSource: c ? .entry.sourceURL,
            longestScriptFunction: c ? .entry.sourceFunctionName,
            longestScriptInvoker: c ? .entry.invoker,
            longestScriptInvokerType: c ? .entry.invokerType
        }, i.interactionTime)
    }, $t), ht(r => {
        const {
            attribution: i
        } = r;
        e(r, {
            interactionTarget: Z({
                selector: i.target
            }),
            timeToFirstByte: i.timeToFirstByte,
            resourceLoadDelay: i.resourceLoadDelay,
            resourceLoadDuration: i.resourceLoadDuration,
            elementRenderDelay: i.elementRenderDelay
        })
    }), n
}
export {
    _t as collectWebVitals
};
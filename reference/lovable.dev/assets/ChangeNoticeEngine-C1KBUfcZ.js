import {
    o as A
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    $L as Y,
    Nx as y,
    OP as v,
    _S as G,
    cL as W,
    oM as N,
    rL as S,
    tL as V,
    vB as I,
    xg as R
} from "./app-shared-6CLVfi8w.js";
import {
    i as k
} from "./vendor-react-Fx2PtaaM.js";
import {
    Qt as x
} from "./create-form-shared-Ch3tkVo8.js";
import {
    _ as E,
    n as f,
    p as l,
    v as w,
    x as d
} from "./vendor-protobuf-BvDTVJFg.js";
import {
    ni as C,
    ti as p
} from "./dashboard-shared-BN9MnewY.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "937641f1-c884-4335-bb4b-ee9a1e730809", e._sentryDebugIdIdentifier = "sentry-dbid-937641f1-c884-4335-bb4b-ee9a1e730809")
    })()
} catch {}
var g = A(k(), 1),
    F = w("Ci5sb3ZhYmxlL2V2ZW50cy9wbGF0Zm9ybS92MS9jaGFuZ2Vfbm90aWNlLnByb3RvEhpsb3ZhYmxlLmV2ZW50cy5wbGF0Zm9ybS52MSKLAQoZQ2hhbmdlTm90aWNlSW50ZXJhY3Rpb25WMRIRCgljaGFuZ2VfaWQYASABKAkSEwoLaW50ZXJhY3Rpb24YAiABKAkSFwoPcmVtaW5kZXJfbnVtYmVyGAMgASgNEhEKCXBsYWNlbWVudBgEIAEoCToagrUYCmV2ZXJ5d2hlcmWStRgIZnJvbnRlbmRCkQIKHmNvbS5sb3ZhYmxlLmV2ZW50cy5wbGF0Zm9ybS52MUIRQ2hhbmdlTm90aWNlUHJvdG9QAVpRZ2l0aHViLmNvbS9sb3ZhYmxlbGFicy9sb3ZhYmxlL2dvL3Byb3RvL2dlbi9sb3ZhYmxlL2V2ZW50cy9wbGF0Zm9ybS92MTtwbGF0Zm9ybXYxogIDTEVQqgIaTG92YWJsZS5FdmVudHMuUGxhdGZvcm0uVjHKAhpMb3ZhYmxlXEV2ZW50c1xQbGF0Zm9ybVxWMeICJkxvdmFibGVcRXZlbnRzXFBsYXRmb3JtXFYxXEdQQk1ldGFkYXRh6gIdTG92YWJsZTo6RXZlbnRzOjpQbGF0Zm9ybTo6VjFiBnByb3RvMw", [G]),
    T = d(F, 0),
    b = w("Citsb3ZhYmxlL2NoYW5nZW5vdGljZS92MS9jaGFuZ2Vfbm90aWNlLnByb3RvEhdsb3ZhYmxlLmNoYW5nZW5vdGljZS52MSIrChZHZXRDaGFuZ2VOb3RpY2VSZXF1ZXN0EhEKCWNoYW5nZV9pZBgBIAEoCSLnAQoWQ2hhbmdlTm90aWNlRGVmaW5pdGlvbhIKCgJpZBgBIAEoCRIwCgxlZmZlY3RpdmVfYXQYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi4KCmV4cGlyZXNfYXQYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEiAKGGFja25vd2xlZGdtZW50c19yZXF1aXJlZBgEIAEoDRIYChBjb29sZG93bl9zZWNvbmRzGAUgASgNEg4KBmFjdGl2ZRgHIAEoCEoECAYQB1INY2xlYW51cF9wYXRocyJ9ChRDaGFuZ2VOb3RpY2VQcm9ncmVzcxIXCg9hY2tub3dsZWRnbWVudHMYASABKA0SOAoUbGFzdF9hY2tub3dsZWRnZWRfYXQYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEhIKCmdlbmVyYXRpb24YAyABKA0i5wEKFENoYW5nZU5vdGljZVNuYXBzaG90EkMKCmRlZmluaXRpb24YASABKAsyLy5sb3ZhYmxlLmNoYW5nZW5vdGljZS52MS5DaGFuZ2VOb3RpY2VEZWZpbml0aW9uEj8KCHByb2dyZXNzGAIgASgLMi0ubG92YWJsZS5jaGFuZ2Vub3RpY2UudjEuQ2hhbmdlTm90aWNlUHJvZ3Jlc3MSGAoQZWxpZ2libGVfYWNjb3VudBgDIAEoCBIvCgtzZXJ2ZXJfdGltZRgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAiWgoXR2V0Q2hhbmdlTm90aWNlUmVzcG9uc2USPwoIc25hcHNob3QYASABKAsyLS5sb3ZhYmxlLmNoYW5nZW5vdGljZS52MS5DaGFuZ2VOb3RpY2VTbmFwc2hvdCJyCh5BY2tub3dsZWRnZUNoYW5nZU5vdGljZVJlcXVlc3QSEQoJY2hhbmdlX2lkGAEgASgJEiAKGGV4cGVjdGVkX2Fja25vd2xlZGdtZW50cxgCIAEoDRIbChNleHBlY3RlZF9nZW5lcmF0aW9uGAMgASgNIngKH0Fja25vd2xlZGdlQ2hhbmdlTm90aWNlUmVzcG9uc2USPwoIc25hcHNob3QYASABKAsyLS5sb3ZhYmxlLmNoYW5nZW5vdGljZS52MS5DaGFuZ2VOb3RpY2VTbmFwc2hvdBIUCgxhY2tub3dsZWRnZWQYAiABKAgiLQoYUmVzZXRDaGFuZ2VOb3RpY2VSZXF1ZXN0EhEKCWNoYW5nZV9pZBgBIAEoCSJcChlSZXNldENoYW5nZU5vdGljZVJlc3BvbnNlEj8KCHNuYXBzaG90GAEgASgLMi0ubG92YWJsZS5jaGFuZ2Vub3RpY2UudjEuQ2hhbmdlTm90aWNlU25hcHNob3QylgMKE0NoYW5nZU5vdGljZVNlcnZpY2USegoRUmVzZXRDaGFuZ2VOb3RpY2USMS5sb3ZhYmxlLmNoYW5nZW5vdGljZS52MS5SZXNldENoYW5nZU5vdGljZVJlcXVlc3QaMi5sb3ZhYmxlLmNoYW5nZW5vdGljZS52MS5SZXNldENoYW5nZU5vdGljZVJlc3BvbnNlEnQKD0dldENoYW5nZU5vdGljZRIvLmxvdmFibGUuY2hhbmdlbm90aWNlLnYxLkdldENoYW5nZU5vdGljZVJlcXVlc3QaMC5sb3ZhYmxlLmNoYW5nZW5vdGljZS52MS5HZXRDaGFuZ2VOb3RpY2VSZXNwb25zZRKMAQoXQWNrbm93bGVkZ2VDaGFuZ2VOb3RpY2USNy5sb3ZhYmxlLmNoYW5nZW5vdGljZS52MS5BY2tub3dsZWRnZUNoYW5nZU5vdGljZVJlcXVlc3QaOC5sb3ZhYmxlLmNoYW5nZW5vdGljZS52MS5BY2tub3dsZWRnZUNoYW5nZU5vdGljZVJlc3BvbnNlQoICChtjb20ubG92YWJsZS5jaGFuZ2Vub3RpY2UudjFCEUNoYW5nZU5vdGljZVByb3RvUAFaUmdpdGh1Yi5jb20vbG92YWJsZWxhYnMvbG92YWJsZS9nby9wcm90by9nZW4vbG92YWJsZS9jaGFuZ2Vub3RpY2UvdjE7Y2hhbmdlbm90aWNldjGiAgNMQ1iqAhdMb3ZhYmxlLkNoYW5nZW5vdGljZS5WMcoCF0xvdmFibGVcQ2hhbmdlbm90aWNlXFYx4gIjTG92YWJsZVxDaGFuZ2Vub3RpY2VcVjFcR1BCTWV0YWRhdGHqAhlMb3ZhYmxlOjpDaGFuZ2Vub3RpY2U6OlYxYgZwcm90bzM", [E]),
    M = d(b, 4),
    j = d(b, 6),
    X = d(b, 8);

function m(e) {
    const t = e ? .definition;
    if (!e ? .serverTime || !t || t.active && (!t.effectiveAt || !t.expiresAt) || !e.progress) throw new Error("Incomplete change notice response");
    return {
        definition: {
            id: t.id,
            active: t.active,
            effectiveAt: t.effectiveAt ? l(t.effectiveAt).getTime() : 0,
            expiresAt: t.expiresAt ? l(t.expiresAt).getTime() : 0,
            acknowledgmentsRequired: t.acknowledgmentsRequired,
            cooldownMs: t.cooldownSeconds * 1e3
        },
        eligibleAccount: e.eligibleAccount,
        serverTime: l(e.serverTime).getTime(),
        progress: {
            acknowledgments: e.progress.acknowledgments,
            generation: e.progress.generation,
            lastAcknowledgedAt: e.progress.lastAcknowledgedAt ? l(e.progress.lastAcknowledgedAt).getTime() : null
        }
    }
}
var u = "/lovable.changenotice.v1.ChangeNoticeService";

function L(e) {
    const t = s => {
            const r = v().currentUser,
                i = () => {
                    if (s.throwIfAborted(), !r || r.uid !== e || v().currentUser !== r) throw new DOMException("Change notice session ended", "AbortError")
                };
            return i(), new N({
                assertSession: i,
                async getToken(o) {
                    i();
                    const a = await r.getIdToken(o);
                    return i(), a
                }
            })
        },
        n = s => ({
            headers: {
                "Connect-Protocol-Version": "1"
            },
            skipMutationRecording: !0,
            signal: s
        });
    return {
        async reset(s, r) {
            const i = await t(r).post(`${u}/ResetChangeNotice`, {
                changeId: s
            }, n(r));
            return m(f(X, i).snapshot)
        },
        async get(s, r) {
            const i = await t(r).post(`${u}/GetChangeNotice`, {
                changeId: s
            }, n(r));
            return m(f(M, i).snapshot)
        },
        async acknowledge(s, r, i, o) {
            const a = await t(i).post(`${u}/AcknowledgeChangeNotice`, {
                changeId: s,
                expectedAcknowledgments: r,
                expectedGeneration: o
            }, n(i));
            return m(f(j, a).snapshot)
        }
    }
}
var U = class {
    options;
    generations = new Map;
    entries = new Map;
    loading = new Map;
    lastLoadAttempt = new Map;
    saving = new Map;
    lifetime = new AbortController;
    visits = new Map;
    activeOwner;
    requested = new Set;
    pending = new Map;
    listeners = new Set;
    targets = new Map;
    revision = 0;
    timer;
    handoff;
    running = !1;
    now;
    active = null;
    constructor(e) {
        this.options = e, this.now = e.now ? ? Date.now
    }
    get isPreview() {
        return this.options.isPreview === !0
    }
    subscribe = e => (this.listeners.add(e), () => {
        this.listeners.delete(e)
    });
    getRevision = () => this.revision;
    key(e) {
        return `change-notice:${this.options.userId}:${e}`
    }
    pendingKey(e, t) {
        return `${this.key(e)}:pending:${t.generation}:${t.expected}`
    }
    resetGeneration(e) {
        const t = `${this.key(e)}:reset:`;
        return this.options.storage.keys().reduce((n, s) => {
            const r = s.startsWith(t) ? Number(s.slice(t.length)) : 0;
            return Number.isSafeInteger(r) ? Math.max(n, r) : n
        }, this.generations.get(e) ? ? 0)
    }
    synchronizeReset(e) {
        const t = this.resetGeneration(e),
            n = `${this.key(e)}:pending:`;
        for (const r of this.options.storage.keys()) r.startsWith(n) && Number(r.slice(n.length).split(":")[0]) < t && this.options.storage.removeItem(r);
        const s = this.entries.get(e);
        !s || s.snapshot.progress.generation >= t || (this.clearPending(e), this.entries.delete(e), this.lastLoadAttempt.delete(e), this.loading.delete(e), this.saving.delete(e), this.visits.delete(e), this.handoff ? .changeId === e && this.handoff.controller.abort(), this.active ? .changeId === e && (this.active = null), this.notify())
    }
    async reset(e) {
        const t = this.lifetime.signal,
            n = await this.options.api.reset(e, t);
        t.aborted || !this.running || this.receive(e, n)
    }
    notify() {
        this.revision++, this.listeners.forEach(e => e()), this.schedule()
    }
    start() {
        this.lifetime.signal.aborted && (this.lifetime = new AbortController), this.running = !0, this.schedule()
    }
    stop() {
        this.running = !1, this.lifetime.abort(), this.loading.clear(), this.lastLoadAttempt.clear(), this.saving.clear(), clearTimeout(this.timer), this.handoff ? .controller.abort(), this.active = null
    }
    schedule() {
        if (clearTimeout(this.timer), !this.running) return;
        let e = 3e4;
        for (const [t, n] of this.entries) {
            const s = this.serverNow(t),
                r = C(n.snapshot, s);
            r !== void 0 && (e = Math.min(e, r - s))
        }
        this.timer = setTimeout(() => {
            for (const t of this.pending.keys()) this.flush(t);
            for (const t of this.requested) this.entries.has(t) || this.loadIfStale(t);
            this.retireActive(), this.notify()
        }, Math.max(1, e))
    }
    expired(e) {
        const t = this.entries.get(e) ? .snapshot;
        return !!t && t.definition.active && this.serverNow(e) >= t.definition.expiresAt
    }
    retireActive() {
        this.active && (this.expired(this.active.changeId) || this.active.placement !== "target" && this.phase(this.active.changeId) === "retired") && (this.handoff ? .guide === this.active && this.handoff.controller.abort(), this.active = null)
    }
    staticVisit(e, t) {
        let n = this.visits.get(e);
        n || (n = new Map, this.visits.set(e, n));
        let s = n.get(t);
        return s || (s = {
            startedAt: this.now(),
            shown: !1,
            dismissed: !1
        }, n.set(t, s)), s
    }
    releaseOwner(e) {
        this.activeOwner === e && (this.activeOwner = void 0, this.active && this.active.placement !== "target" && (this.active = null, this.notify()))
    }
    serverNow(e) {
        const t = this.entries.get(e);
        return t ? t.snapshot.serverTime + Math.max(0, this.now() - t.receivedAt) : this.now()
    }
    snapshot(e) {
        const t = this.entries.get(e);
        if (!t) return;
        const n = this.pending.get(e);
        return !n || t.snapshot.progress.acknowledgments > n.expected ? t.snapshot : { ...t.snapshot,
            progress: {
                generation: n.generation,
                acknowledgments: n.expected + 1,
                lastAcknowledgedAt: n.acknowledgedAt
            }
        }
    }
    phase(e) {
        const t = this.snapshot(e);
        if (!t) return "before";
        const n = p(t, this.serverNow(e));
        return n === "notice" && this.pending.has(e) ? "cooldown" : n
    }
    readPending(e) {
        const t = this.pending.get(e),
            n = this.entries.get(e) ? .snapshot;
        if (!n) return;
        for (let r = 0; r < n.definition.acknowledgmentsRequired; r++) {
            const i = {
                    generation: n.progress.generation,
                    expected: r,
                    acknowledgedAt: 0
                },
                o = this.pendingKey(e, i);
            if (r < n.progress.acknowledgments || this.expired(e)) {
                this.options.storage.removeItem(o);
                continue
            }
            try {
                const a = JSON.parse(this.options.storage.getItem(o) ? ? "null");
                a && typeof a == "object" && "acknowledgedAt" in a && typeof a.acknowledgedAt == "number" && Number.isFinite(a.acknowledgedAt) && this.pending.set(e, { ...i,
                    acknowledgedAt: a.acknowledgedAt
                })
            } catch {}
        }
        const s = this.pending.get(e);
        (s ? .generation !== t ? .generation || s ? .expected !== t ? .expected || s ? .acknowledgedAt !== t ? .acknowledgedAt) && (this.retireActive(), this.notify())
    }
    receive(e, t) {
        if (t.progress.generation < this.resetGeneration(e)) return;
        this.generations.set(e, t.progress.generation), t.progress.generation > 0 && this.options.storage.setItem(`${this.key(e)}:reset:${t.progress.generation}`, "1"), this.synchronizeReset(e);
        const n = this.entries.get(e) ? .snapshot;
        if (n && n.progress.acknowledgments > t.progress.acknowledgments) return;
        if (n && n.serverTime > t.serverTime) {
            if (n.progress.acknowledgments === t.progress.acknowledgments) return;
            t = { ...t,
                serverTime: this.serverNow(e)
            }
        }
        this.entries.set(e, {
            snapshot: t,
            receivedAt: this.now()
        });
        const s = this.pending.get(e);
        s && (t.progress.acknowledgments > s.expected || t.definition.active && t.serverTime >= t.definition.expiresAt) && this.clearPending(e), this.readPending(e), this.retireActive(), this.notify()
    }
    loadIfStale(e) {
        this.requested.add(e), this.synchronizeReset(e), this.readPending(e);
        const t = this.loading.get(e);
        if (t) return t;
        if (this.expired(e)) return Promise.resolve();
        const n = this.entries.get(e),
            s = this.lastLoadAttempt.get(e);
        return n && this.now() - n.receivedAt < 3e4 || s !== void 0 && this.now() - s < 3e4 ? Promise.resolve() : this.load(e)
    }
    load(e) {
        this.requested.add(e), this.synchronizeReset(e);
        const t = this.loading.get(e);
        if (t) return t;
        this.readPending(e), this.lastLoadAttempt.set(e, this.now());
        const n = this.lifetime.signal,
            s = this.options.api.get(e, n).then(r => {
                n.aborted || !this.running || (this.receive(e, r), this.flush(e))
            }).catch(() => {}).finally(() => {
                this.loading.get(e) === s && this.loading.delete(e)
            });
        return this.loading.set(e, s), s
    }
    refresh = () => {
        for (const e of this.requested) this.loadIfStale(e)
    };
    refreshAfterAuthentication = () => {
        for (const e of this.requested) this.entries.has(e) || this.load(e)
    };
    refreshFromStorage = e => {
        for (const t of this.requested)(e === null || e.startsWith(`${this.key(t)}:`)) && this.loadIfStale(t)
    };
    open(e, t = "source", n) {
        return this.synchronizeReset(e), this.phase(e) !== "notice" || this.handoff ? !1 : this.active ? .changeId === e && this.active.placement === t ? this.activeOwner === n ? .owner : t === "inline" && this.active ? !1 : (this.activeOwner = n ? .owner, this.active = {
            changeId: e,
            placement: t,
            reminderNumber: (this.snapshot(e) ? .progress.acknowledgments ? ? 0) + 1
        }, n ? .shown || this.options.emit("shown", this.active), this.notify(), !0)
    }
    close(e, t) {
        this.active ? .changeId !== e || this.active.placement !== t || (this.handoff ? .controller.abort(), this.activeOwner = void 0, this.active = null, this.notify())
    }
    cancelHandoff() {
        this.handoff ? .controller.abort()
    }
    isTargetPending(e) {
        return this.handoff ? .targetId === e && this.handoff.revealing && !this.handoff.controller.signal.aborted
    }
    revealGuidedTarget(e, t) {
        this.synchronizeReset(e);
        const n = this.handoff;
        if (n ? .changeId !== e || !n.reveal || n.controller.signal.aborted) return !1;
        const s = n.reveal;
        return n.reveal = void 0, n.revealing = !0, s(t), this.notify(), !0
    }
    registerTarget(e, t) {
        t ? this.targets.set(e, t) : (this.targets.delete(e), this.active ? .changeId === e && this.active.placement === "target" && (this.handoff ? .controller.abort(), this.active = null, this.notify()))
    }
    waitForTarget(e, t) {
        return new Promise((n, s) => {
            const r = () => {
                if (t.aborted) {
                    s(new Error("Change notice handoff canceled"));
                    return
                }
                const o = e();
                if (o && x(o)) {
                    n();
                    return
                }
                i = setTimeout(r, 16)
            };
            let i;
            t.addEventListener("abort", () => {
                clearTimeout(i), s(new Error("Change notice handoff canceled"))
            }, {
                once: !0
            }), r()
        })
    }
    async
    continue (e, t) {
        if (this.handoff) return;
        const n = this.active;
        if (!n || n.changeId !== e || n.placement === "target") return;
        const s = new AbortController,
            r = {
                changeId: e,
                targetId: t.targetId,
                revealing: !1,
                controller: s
            };
        this.handoff = r;
        let i = setTimeout(() => s.abort(), 15e3);
        try {
            const o = new Promise((a, c) => {
                s.signal.addEventListener("abort", () => c(new Error("Change notice handoff canceled")), {
                    once: !0
                })
            });
            if (await Promise.race([Promise.resolve().then(() => t.run(s.signal)), o]), t.targetId) {
                r.revealing = !0, this.notify();
                const a = t.targetId;
                if (await this.waitForTarget(() => this.targets.get(a), s.signal), t.guidedTarget && !s.signal.aborted && !this.expired(e)) {
                    clearTimeout(i);
                    const c = new Promise(Z => {
                        r.reveal = Z
                    });
                    r.revealing = !1, r.guide = { ...n,
                        placement: "target"
                    }, this.activeOwner = void 0, this.active = r.guide, this.options.emit("shown", this.active), t.acknowledgeOnTargetShown && this.acknowledge(e, this.active), this.notify();
                    const h = await Promise.race([c, o]);
                    i = setTimeout(() => s.abort(), 15e3), await this.waitForTarget(h, s.signal)
                }
            }
            if (this.synchronizeReset(e), s.signal.aborted || !this.running) throw new Error("Change notice handoff canceled");
            if (this.expired(e)) {
                this.active = null, this.notify();
                return
            }(!r.guide || !t.acknowledgeOnTargetShown) && this.acknowledge(e, n), (t.targetId || t.revealsDestination) && this.options.emit("destination_followed", n), this.activeOwner = void 0, this.active = t.targetId ? { ...n,
                placement: "target"
            } : null, this.active && !r.guide && this.options.emit("shown", this.active), this.notify()
        } finally {
            clearTimeout(i), r.guide && this.active === r.guide && (this.active = null), this.handoff === r && (this.handoff = void 0, this.notify())
        }
    }
    acknowledge(e, t) {
        this.synchronizeReset(e);
        const n = this.snapshot(e);
        if (!n || this.pending.has(e) || p(n, this.serverNow(e)) !== "notice") return;
        const s = {
            generation: n.progress.generation,
            expected: n.progress.acknowledgments,
            acknowledgedAt: this.serverNow(e)
        };
        this.pending.set(e, s), this.options.storage.setItem(this.pendingKey(e, s), JSON.stringify(s)), this.options.emit("acknowledged", t), this.flush(e)
    }
    clearPending(e) {
        const t = this.pending.get(e);
        this.pending.delete(e), t && this.options.storage.removeItem(this.pendingKey(e, t))
    }
    async flush(e) {
        this.synchronizeReset(e);
        const t = this.pending.get(e);
        if (!this.running || !t || this.saving.has(e)) return;
        const n = this.lifetime.signal;
        this.saving.set(e, t);
        try {
            const s = await this.options.api.acknowledge(e, t.expected, n, t.generation);
            if (n.aborted || !this.running) return;
            this.receive(e, s)
        } catch {} finally {
            this.saving.get(e) === t && this.saving.delete(e)
        }
    }
};

function B(e) {
    const t = Date.now(),
        n = new Map(e.map(i => [i.id, {
            definition: { ...i,
                active: !0,
                effectiveAt: t,
                expiresAt: t + 12096e5
            },
            eligibleAccount: !0,
            serverTime: t,
            progress: {
                acknowledgments: 0,
                generation: 0,
                lastAcknowledgedAt: null
            }
        }])),
        s = new Map;

    function r(i, o) {
        o.throwIfAborted();
        const a = n.get(i);
        if (!a) throw new Error("Unknown preview change notice");
        return { ...a,
            definition: { ...a.definition
            },
            progress: { ...a.progress
            },
            serverTime: Date.now()
        }
    }
    return {
        storage: {
            keys: () => [...s.keys()],
            getItem: i => s.get(i) ? ? null,
            setItem: (i, o) => s.set(i, o),
            removeItem: i => s.delete(i)
        },
        api: {
            async get(i, o) {
                return r(i, o)
            },
            async acknowledge(i, o, a, c) {
                const h = r(i, a);
                return p(h, h.serverTime) === "notice" && h.progress.acknowledgments === o && h.progress.generation === c && (h.progress.acknowledgments++, h.progress.lastAcknowledgedAt = h.serverTime, n.set(i, h)), r(i, a)
            },
            async reset(i, o) {
                const a = r(i, o);
                return a.progress = {
                    acknowledgments: 0,
                    generation: a.progress.generation + 1,
                    lastAcknowledgedAt: null
                }, n.set(i, a), r(i, o)
            }
        }
    }
}
var J = {
    getItem: V,
    setItem: W,
    removeItem: S,
    keys: () => {
        try {
            return Object.keys(localStorage)
        } catch {
            return []
        }
    }
};

function z({
    previewNotices: e
}) {
    const t = (0, g.use)(R),
        n = Y() ? .uid,
        s = y(),
        r = I() === "preview",
        i = (0, g.useMemo)(() => {
            if (!n) return null;
            const o = r && e ? .length ? B(e) : void 0;
            return new U({
                userId: n,
                isPreview: !!o,
                api: o ? .api ? ? L(n),
                storage: o ? .storage ? ? J,
                emit: (a, c) => {
                    o || s.emit(T, {
                        changeId: c.changeId,
                        interaction: a,
                        placement: c.placement,
                        reminderNumber: c.reminderNumber
                    })
                }
            })
        }, [n, s, r, e]);
    return (0, g.useEffect)(() => (t(i), () => t(null)), [i, t]), (0, g.useEffect)(() => {
        if (!i) return;
        i.start();
        let o = !1;
        const a = v().onAuthStateChanged(h => {
                o || h ? .uid !== n || (o = !0, i.refreshAfterAuthentication())
            }),
            c = h => {
                h.storageArea === localStorage && i.refreshFromStorage(h.key)
            };
        return window.addEventListener("focus", i.refresh), window.addEventListener("online", i.refresh), window.addEventListener("storage", c), () => {
            i.stop(), a(), window.removeEventListener("focus", i.refresh), window.removeEventListener("online", i.refresh), window.removeEventListener("storage", c)
        }
    }, [i, n]), null
}
export {
    z as ChangeNoticeEngine
};
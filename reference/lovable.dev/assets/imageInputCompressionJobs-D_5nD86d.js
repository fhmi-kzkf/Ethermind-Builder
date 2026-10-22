import {
    Xh as z
} from "./app-shared-6CLVfi8w.js";
import {
    Ei as b,
    Si as E,
    gr as S,
    js as F,
    xr as h
} from "./dashboard-shared-BN9MnewY.js";
try {
    (function() {
        var i = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            o = new i.Error().stack;
        o && (i._sentryDebugIds = i._sentryDebugIds || {}, i._sentryDebugIds[o] = "912e13d2-62f0-41e5-b089-19aaa1e2e17a", i._sentryDebugIdIdentifier = "sentry-dbid-912e13d2-62f0-41e5-b089-19aaa1e2e17a")
    })()
} catch {}
var v = 1 + E;

function U(i) {
    let o = 0;
    for (const a of i) a.companionOf || (o += b(a.name) ? v : 1);
    return o
}

function O(i) {
    const o = "Please limit your message to 10 files.";
    return i.some(a => !a.companionOf && b(a.name)) ? `${o} A Figma file counts as ${v} files because its extracted design data is attached with it.` : o
}
var R = "Combined image size is still too large. Remove one or more images.",
    I = i => i.filter(o => F(o) && !h(o) && !o.compressing && (!o.compressionError || o.compressionError === "Combined image size is still too large. Remove one or more images.")).reduce((o, a) => o + (a.size ? ? 0), 0),
    T = ({
        images: i,
        jobsById: o,
        failedIds: a,
        compressedById: f,
        maxFileSize: u
    }) => {
        let c = 0,
            p = 0;
        const m = new Set,
            n = [],
            l = new Set;
        let t = i.map(e => {
            const s = o.get(e.id);
            if (!s || !e.compressing) return e;
            if (a.has(e.id)) return c += 1, { ...e,
                compressing: !1,
                compressionError: "Could not compress image. Remove it or use a smaller file."
            };
            const r = f.get(e.id);
            return r ? (l.add(e.id), r.objectUrl ? (m.add(e.id), n.push(e.url), e.originalBlobUrl && e.originalBlobUrl !== e.url && n.push(e.originalBlobUrl), { ...e,
                url: r.objectUrl,
                originalBlobUrl: r.objectUrl,
                name: r.file.name || e.name,
                mimeType: r.file.type || e.mimeType,
                size: r.file.size,
                compressing: !1,
                compressionError: void 0,
                compressionOriginalSize: s.file.size,
                compressionCompressedSize: r.file.size
            }) : { ...e,
                size: s.file.size,
                compressing: !1,
                compressionError: void 0,
                compressionOriginalSize: void 0,
                compressionCompressedSize: void 0
            }) : e
        });
        const d = new Set(t.filter(e => l.has(e.id) && (e.size ? ? 0) > u).map(e => e.id));
        if (d.size > 0 && (c += d.size, t = t.map(e => d.has(e.id) ? { ...e,
                compressing: !1,
                compressionError: "Compressed image is still too large. Remove it or use a smaller file."
            } : e)), I(t) > 15728640) {
            const e = new Set(t.filter(s => l.has(s.id) && !a.has(s.id) && !d.has(s.id)).map(s => s.id));
            p += e.size, t = t.map(s => e.has(s.id) ? { ...s,
                compressing: !1,
                compressionError: R
            } : s)
        }
        return {
            images: t,
            failedCount: c,
            totalCapFailedCount: p,
            objectUrlsToRevoke: n,
            usedCompressedIds: m
        }
    },
    j = async ({
        jobs: i,
        maxFileSize: o,
        setImages: a,
        isStale: f,
        onFailure: u,
        compressImage: c = z,
        createObjectUrl: p = n => URL.createObjectURL(n),
        revokeUrl: m = S
    }) => {
        const n = await Promise.allSettled(i.map(async s => ({
                job: s,
                compressedFile: await c(s.file, {
                    maxFileSize: s.targetSize
                })
            }))),
            l = new Map,
            t = new Set;
        for (const [s, r] of n.entries()) {
            if (r.status === "rejected") {
                const C = i[s];
                C && t.add(C.id);
                continue
            }
            const g = r.value.compressedFile !== r.value.job.file && r.value.compressedFile.size < r.value.job.file.size;
            l.set(r.value.job.id, {
                file: r.value.compressedFile,
                objectUrl: g ? p(r.value.compressedFile) : void 0
            })
        }
        const d = new Map(i.map(s => [s.id, s]));
        let e = {
            images: [],
            failedCount: 0,
            totalCapFailedCount: 0,
            objectUrlsToRevoke: [],
            usedCompressedIds: new Set
        };
        a(s => (e = T({
            images: s,
            jobsById: d,
            failedIds: t,
            compressedById: l,
            maxFileSize: o
        }), e.images));
        for (const s of e.objectUrlsToRevoke) m(s);
        for (const [s, {
                objectUrl: r
            }] of l) r && !e.usedCompressedIds.has(s) && m(r);
        !f ? .() && (e.failedCount > 0 || e.totalCapFailedCount > 0) && u ? .({
            failedCount: e.failedCount,
            totalCapFailedCount: e.totalCapFailedCount
        })
    },
    A = i => !i.some(o => o.compressionError === "Combined image size is still too large. Remove one or more images.") || I(i) > 15728640 ? i : i.map(o => o.compressionError === "Combined image size is still too large. Remove one or more images." ? { ...o,
        compressionError: void 0
    } : o);
export {
    U as a, I as i, A as n, O as o, j as r, R as t
};
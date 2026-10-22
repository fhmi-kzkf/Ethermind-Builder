try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "22d2f19c-8754-4a84-a420-61c6b568625d", e._sentryDebugIdIdentifier = "sentry-dbid-22d2f19c-8754-4a84-a420-61c6b568625d")
    })()
} catch {}

function ye(e, n) {
    return e !== null && typeof e == "object" && "$typeName" in e && typeof e.$typeName == "string" ? n === void 0 ? !0 : n.typeName === e.$typeName : !1
}
var i;
(function(e) {
    e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64"
})(i || (i = {}));

function yt() {
    let e = 0,
        n = 0;
    for (let r = 0; r < 28; r += 7) {
        let a = this.buf[this.pos++];
        if (e |= (a & 127) << r, (a & 128) == 0) return this.assertBounds(), [e, n]
    }
    let t = this.buf[this.pos++];
    if (e |= (t & 15) << 28, n = (t & 112) >> 4, (t & 128) == 0) return this.assertBounds(), [e, n];
    for (let r = 3; r <= 31; r += 7) {
        let a = this.buf[this.pos++];
        if (n |= (a & 127) << r, (a & 128) == 0) return this.assertBounds(), [e, n]
    }
    throw new Error("invalid varint")
}

function se(e, n, t) {
    for (let s = 0; s < 28; s = s + 7) {
        const o = e >>> s,
            u = !(!(o >>> 7) && n == 0),
            c = (u ? o | 128 : o) & 255;
        if (t.push(c), !u) return
    }
    const r = e >>> 28 & 15 | (n & 7) << 4,
        a = n >> 3 != 0;
    if (t.push((a ? r | 128 : r) & 255), !!a) {
        for (let s = 3; s < 31; s = s + 7) {
            const o = n >>> s,
                u = !!(o >>> 7),
                c = (u ? o | 128 : o) & 255;
            if (t.push(c), !u) return
        }
        t.push(n >>> 31 & 1)
    }
}
var J = 4294967296;

function Me(e) {
    const n = e[0] === "-";
    n && (e = e.slice(1));
    const t = 1e6;
    let r = 0,
        a = 0;

    function s(o, u) {
        const c = Number(e.slice(o, u));
        a *= t, r = r * t + c, r >= J && (a = a + (r / J | 0), r = r % J)
    }
    return s(-24, -18), s(-18, -12), s(-12, -6), s(-6), n ? Un(r, a) : he(r, a)
}

function ht(e, n) {
    let t = he(e, n);
    const r = t.hi & 2147483648;
    r && (t = Un(t.lo, t.hi));
    const a = Rn(t.lo, t.hi);
    return r ? "-" + a : a
}

function Rn(e, n) {
    if ({
            lo: e,
            hi: n
        } = It(e, n), n <= 2097151) return String(J * n + e);
    const t = e & 16777215,
        r = (e >>> 24 | n << 8) & 16777215,
        a = n >> 16 & 65535;
    let s = t + r * 6777216 + a * 6710656,
        o = r + a * 8147497,
        u = a * 2;
    const c = 1e7;
    return s >= c && (o += Math.floor(s / c), s %= c), o >= c && (u += Math.floor(o / c), o %= c), u.toString() + Ke(o) + Ke(s)
}

function It(e, n) {
    return {
        lo: e >>> 0,
        hi: n >>> 0
    }
}

function he(e, n) {
    return {
        lo: e | 0,
        hi: n | 0
    }
}

function Un(e, n) {
    return n = ~n, e ? e = ~e + 1 : n += 1, he(e, n)
}
var Ke = e => {
    const n = String(e);
    return "0000000".slice(n.length) + n
};

function fe(e, n) {
    if (e >= 0) {
        for (; e > 127;) n.push(e & 127 | 128), e = e >>> 7;
        n.push(e)
    } else {
        for (let t = 0; t < 9; t++) n.push(e & 127 | 128), e = e >> 7;
        n.push(1)
    }
}

function Tt() {
    let e = this.buf[this.pos++],
        n = e & 127;
    if ((e & 128) == 0) return this.assertBounds(), n;
    if (e = this.buf[this.pos++], n |= (e & 127) << 7, (e & 128) == 0) return this.assertBounds(), n;
    if (e = this.buf[this.pos++], n |= (e & 127) << 14, (e & 128) == 0) return this.assertBounds(), n;
    if (e = this.buf[this.pos++], n |= (e & 127) << 21, (e & 128) == 0) return this.assertBounds(), n;
    e = this.buf[this.pos++], n |= (e & 15) << 28;
    for (let t = 5;
        (e & 128) !== 0 && t < 10; t++) e = this.buf[this.pos++];
    if ((e & 128) != 0) throw new Error("invalid varint");
    return this.assertBounds(), n >>> 0
}
var f = _t();

function _t() {
    const e = new DataView(new ArrayBuffer(8));
    if (typeof BigInt == "function" && typeof e.getBigInt64 == "function" && typeof e.getBigUint64 == "function" && typeof e.setBigInt64 == "function" && typeof e.setBigUint64 == "function" && (globalThis.Deno || typeof process != "object" || {}.BUF_BIGINT_DISABLE !== "1")) {
        const n = BigInt("-9223372036854775808"),
            t = BigInt("9223372036854775807"),
            r = BigInt("0"),
            a = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: !0,
            parse(s) {
                const o = typeof s == "bigint" ? s : BigInt(s);
                if (o > t || o < n) throw new Error(`invalid int64: ${s}`);
                return o
            },
            uParse(s) {
                const o = typeof s == "bigint" ? s : BigInt(s);
                if (o > a || o < r) throw new Error(`invalid uint64: ${s}`);
                return o
            },
            enc(s) {
                return e.setBigInt64(0, this.parse(s), !0), {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                }
            },
            uEnc(s) {
                return e.setBigInt64(0, this.uParse(s), !0), {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                }
            },
            dec(s, o) {
                return e.setInt32(0, s, !0), e.setInt32(4, o, !0), e.getBigInt64(0, !0)
            },
            uDec(s, o) {
                return e.setInt32(0, s, !0), e.setInt32(4, o, !0), e.getBigUint64(0, !0)
            }
        }
    }
    return {
        zero: "0",
        supported: !1,
        parse(n) {
            return typeof n != "string" && (n = n.toString()), Ce(n), n
        },
        uParse(n) {
            return typeof n != "string" && (n = n.toString()), Xe(n), n
        },
        enc(n) {
            return typeof n != "string" && (n = n.toString()), Ce(n), Me(n)
        },
        uEnc(n) {
            return typeof n != "string" && (n = n.toString()), Xe(n), Me(n)
        },
        dec(n, t) {
            return ht(n, t)
        },
        uDec(n, t) {
            return Rn(n, t)
        }
    }
}

function Ce(e) {
    if (!/^-?[0-9]+$/.test(e)) throw new Error("invalid int64: " + e)
}

function Xe(e) {
    if (!/^[0-9]+$/.test(e)) throw new Error("invalid uint64: " + e)
}

function F(e, n, t) {
    if (n === t) return !0;
    if (e == i.BYTES) {
        if (!(n instanceof Uint8Array) || !(t instanceof Uint8Array) || n.length !== t.length) return !1;
        for (let r = 0; r < n.length; r++)
            if (n[r] !== t[r]) return !1;
        return !0
    }
    switch (e) {
        case i.UINT64:
        case i.FIXED64:
        case i.INT64:
        case i.SFIXED64:
        case i.SINT64:
            return n == t
    }
    return !1
}

function S(e, n) {
    switch (e) {
        case i.STRING:
            return "";
        case i.BOOL:
            return !1;
        case i.DOUBLE:
        case i.FLOAT:
            return 0;
        case i.INT64:
        case i.UINT64:
        case i.SFIXED64:
        case i.FIXED64:
        case i.SINT64:
            return n ? "0" : f.zero;
        case i.BYTES:
            return new Uint8Array(0);
        default:
            return 0
    }
}

function wt(e, n) {
    switch (e) {
        case i.BOOL:
            return n === !1;
        case i.STRING:
            return n === "";
        case i.BYTES:
            return n instanceof Uint8Array && !n.byteLength;
        default:
            return n == 0
    }
}
var $n = 2,
    _ = Symbol.for("reflect unsafe local");

function Fn(e, n) {
    const t = e[n.localName].case;
    return t === void 0 ? t : n.fields.find(r => r.localName === t)
}

function vt(e, n) {
    const t = n.localName;
    if (n.oneof) return e[n.oneof.localName].case === t;
    if (n.presence != $n) return e[t] !== void 0 && Object.prototype.hasOwnProperty.call(e, t);
    switch (n.fieldKind) {
        case "list":
            return e[t].length > 0;
        case "map":
            return Object.keys(e[t]).length > 0;
        case "scalar":
            return !wt(n.scalar, e[t]);
        case "enum":
            return e[t] !== n.enum.values[0].number
    }
    throw new Error("message field with implicit presence")
}

function Y(e, n) {
    return Object.prototype.hasOwnProperty.call(e, n) && e[n] !== void 0
}

function Vn(e, n) {
    if (n.oneof) {
        const t = e[n.oneof.localName];
        return t.case === n.localName ? t.value : void 0
    }
    return e[n.localName]
}

function Yn(e, n, t) {
    n.oneof ? e[n.oneof.localName] = {
        case: n.localName,
        value: t
    } : e[n.localName] = t
}

function Ot(e, n) {
    const t = n.localName;
    if (n.oneof) {
        const r = n.oneof.localName;
        e[r].case === t && (e[r] = {
            case: void 0
        })
    } else if (n.presence != $n) delete e[t];
    else switch (n.fieldKind) {
        case "map":
            e[t] = {};
            break;
        case "list":
            e[t] = [];
            break;
        case "enum":
            e[t] = n.enum.values[0].number;
            break;
        case "scalar":
            e[t] = S(n.scalar, n.longAsString)
    }
}

function v(e) {
    return e !== null && typeof e == "object" && !Array.isArray(e)
}

function Ie(e, n) {
    var t, r, a, s;
    if (v(e) && _ in e && "add" in e && "field" in e && typeof e.field == "function") {
        if (n !== void 0) {
            const o = n,
                u = e.field();
            return o.listKind == u.listKind && o.scalar === u.scalar && ((t = o.message) === null || t === void 0 ? void 0 : t.typeName) === ((r = u.message) === null || r === void 0 ? void 0 : r.typeName) && ((a = o.enum) === null || a === void 0 ? void 0 : a.typeName) === ((s = u.enum) === null || s === void 0 ? void 0 : s.typeName)
        }
        return !0
    }
    return !1
}

function Te(e, n) {
    var t, r, a, s;
    if (v(e) && _ in e && "has" in e && "field" in e && typeof e.field == "function") {
        if (n !== void 0) {
            const o = n,
                u = e.field();
            return o.mapKey === u.mapKey && o.mapKind == u.mapKind && o.scalar === u.scalar && ((t = o.message) === null || t === void 0 ? void 0 : t.typeName) === ((r = u.message) === null || r === void 0 ? void 0 : r.typeName) && ((a = o.enum) === null || a === void 0 ? void 0 : a.typeName) === ((s = u.enum) === null || s === void 0 ? void 0 : s.typeName)
        }
        return !0
    }
    return !1
}

function _e(e, n) {
    return v(e) && _ in e && "desc" in e && v(e.desc) && e.desc.kind === "message" && (n === void 0 || e.desc.typeName == n.typeName)
}

function St(e) {
    return Pn(e.$typeName)
}

function x(e) {
    const n = e.fields[0];
    return Pn(e.typeName) && n !== void 0 && n.fieldKind == "scalar" && n.name == "value" && n.number == 1
}

function Pn(e) {
    return e.startsWith("google.protobuf.") && ["DoubleValue", "FloatValue", "Int64Value", "UInt64Value", "Int32Value", "UInt32Value", "BoolValue", "StringValue", "BytesValue"].includes(e.substring(16))
}
var kt = 999,
    At = 998,
    W = 2;

function h(e, n) {
    if (ye(n, e)) return n;
    const t = $t(e);
    return n !== void 0 && Lt(e, t, n), t
}

function Lt(e, n, t) {
    for (const r of e.members) {
        let a = t[r.localName];
        if (a == null) continue;
        let s;
        if (r.kind == "oneof") {
            const o = Fn(t, r);
            if (!o) continue;
            s = o, a = Vn(t, o)
        } else s = r;
        switch (s.fieldKind) {
            case "message":
                a = we(s, a);
                break;
            case "scalar":
                a = Bn(s, a);
                break;
            case "list":
                a = Rt(s, a);
                break;
            case "map":
                a = Dt(s, a)
        }
        Yn(n, s, a)
    }
    return n
}

function Bn(e, n) {
    return e.scalar == i.BYTES ? ve(n) : n
}

function Dt(e, n) {
    if (v(n)) {
        if (e.scalar == i.BYTES) return Je(n, ve);
        if (e.mapKind == "message") return Je(n, t => we(e, t))
    }
    return n
}

function Rt(e, n) {
    if (Array.isArray(n)) {
        if (e.scalar == i.BYTES) return n.map(ve);
        if (e.listKind == "message") return n.map(t => we(e, t))
    }
    return n
}

function we(e, n) {
    if (e.fieldKind == "message" && !e.oneof && x(e.message)) return Bn(e.message.fields[0], n);
    if (v(n)) {
        if (e.message.typeName == "google.protobuf.Struct" && e.parent.typeName !== "google.protobuf.Value") return n;
        if (!ye(n, e.message)) return h(e.message, n)
    }
    return n
}

function ve(e) {
    return Array.isArray(e) ? new Uint8Array(e) : e
}

function Je(e, n) {
    const t = {};
    for (const r of Object.entries(e)) t[r[0]] = n(r[1]);
    return t
}
var Ut = Symbol(),
    We = new WeakMap;

function $t(e) {
    let n;
    if (Ft(e)) {
        const t = We.get(e);
        let r, a;
        if (t)({
            prototype: r,
            members: a
        } = t);
        else {
            r = {}, a = new Set;
            for (const s of e.members) s.kind != "oneof" && (s.fieldKind != "scalar" && s.fieldKind != "enum" || s.presence != W && (a.add(s), r[s.localName] = oe(s)));
            We.set(e, {
                prototype: r,
                members: a
            })
        }
        n = Object.create(r), n.$typeName = e.typeName;
        for (const s of e.members) a.has(s) || s.kind == "field" && (s.fieldKind == "message" || (s.fieldKind == "scalar" || s.fieldKind == "enum") && s.presence != W) || (n[s.localName] = oe(s))
    } else {
        n = {
            $typeName: e.typeName
        };
        for (const t of e.members)(t.kind == "oneof" || t.presence == W) && (n[t.localName] = oe(t))
    }
    return n
}

function Ft(e) {
    switch (e.file.edition) {
        case kt:
            return !1;
        case At:
            return !0;
        default:
            return e.fields.some(n => n.presence != W && n.fieldKind != "message" && !n.oneof)
    }
}

function oe(e) {
    if (e.kind == "oneof") return {
        case: void 0
    };
    if (e.fieldKind == "list") return [];
    if (e.fieldKind == "map") return {};
    if (e.fieldKind == "message") return Ut;
    const n = e.getDefaultValue();
    return n !== void 0 ? e.fieldKind == "scalar" && e.longAsString ? n.toString() : n : e.fieldKind == "scalar" ? S(e.scalar, e.longAsString) : e.enum.values[0].number
}
var Vt = ["FieldValueInvalidError", "FieldListRangeError", "ForeignFieldError"],
    g = class extends Error {
        constructor(e, n, t = "FieldValueInvalidError") {
            super(n), this.name = t, this.field = () => e
        }
    };

function Yt(e) {
    return e instanceof Error && Vt.includes(e.name) && "field" in e && typeof e.field == "function"
}
var ie = Symbol.for("@bufbuild/protobuf/text-encoding");

function Oe() {
    if (globalThis[ie] == null) {
        const e = new globalThis.TextEncoder,
            n = new globalThis.TextDecoder;
        globalThis[ie] = {
            encodeUtf8(t) {
                return e.encode(t)
            },
            decodeUtf8(t) {
                return n.decode(t)
            },
            checkUtf8(t) {
                try {
                    return !0
                } catch {
                    return !1
                }
            }
        }
    }
    return globalThis[ie]
}
var d;
(function(e) {
    e[e.Varint = 0] = "Varint", e[e.Bit64 = 1] = "Bit64", e[e.LengthDelimited = 2] = "LengthDelimited", e[e.StartGroup = 3] = "StartGroup", e[e.EndGroup = 4] = "EndGroup", e[e.Bit32 = 5] = "Bit32"
})(d || (d = {}));
var Gn = class {
        constructor(e = Oe().encodeUtf8) {
            this.encodeUtf8 = e, this.stack = [], this.chunks = [], this.buf = []
        }
        finish() {
            this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
            let e = 0;
            for (let r = 0; r < this.chunks.length; r++) e += this.chunks[r].length;
            let n = new Uint8Array(e),
                t = 0;
            for (let r = 0; r < this.chunks.length; r++) n.set(this.chunks[r], t), t += this.chunks[r].length;
            return this.chunks = [], n
        }
        fork() {
            return this.stack.push({
                chunks: this.chunks,
                buf: this.buf
            }), this.chunks = [], this.buf = [], this
        }
        join() {
            let e = this.finish(),
                n = this.stack.pop();
            if (!n) throw new Error("invalid state, fork stack empty");
            return this.chunks = n.chunks, this.buf = n.buf, this.uint32(e.byteLength), this.raw(e)
        }
        tag(e, n) {
            return this.uint32((e << 3 | n) >>> 0)
        }
        raw(e) {
            return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this
        }
        uint32(e) {
            for (Ze(e); e > 127;) this.buf.push(e & 127 | 128), e = e >>> 7;
            return this.buf.push(e), this
        }
        int32(e) {
            return ue(e), fe(e, this.buf), this
        }
        bool(e) {
            return this.buf.push(e ? 1 : 0), this
        }
        bytes(e) {
            return this.uint32(e.byteLength), this.raw(e)
        }
        string(e) {
            let n = this.encodeUtf8(e);
            return this.uint32(n.byteLength), this.raw(n)
        }
        float(e) {
            Pt(e);
            let n = new Uint8Array(4);
            return new DataView(n.buffer).setFloat32(0, e, !0), this.raw(n)
        }
        double(e) {
            let n = new Uint8Array(8);
            return new DataView(n.buffer).setFloat64(0, e, !0), this.raw(n)
        }
        fixed32(e) {
            Ze(e);
            let n = new Uint8Array(4);
            return new DataView(n.buffer).setUint32(0, e, !0), this.raw(n)
        }
        sfixed32(e) {
            ue(e);
            let n = new Uint8Array(4);
            return new DataView(n.buffer).setInt32(0, e, !0), this.raw(n)
        }
        sint32(e) {
            return ue(e), e = (e << 1 ^ e >> 31) >>> 0, fe(e, this.buf), this
        }
        sfixed64(e) {
            let n = new Uint8Array(8),
                t = new DataView(n.buffer),
                r = f.enc(e);
            return t.setInt32(0, r.lo, !0), t.setInt32(4, r.hi, !0), this.raw(n)
        }
        fixed64(e) {
            let n = new Uint8Array(8),
                t = new DataView(n.buffer),
                r = f.uEnc(e);
            return t.setInt32(0, r.lo, !0), t.setInt32(4, r.hi, !0), this.raw(n)
        }
        int64(e) {
            let n = f.enc(e);
            return se(n.lo, n.hi, this.buf), this
        }
        sint64(e) {
            const n = f.enc(e),
                t = n.hi >> 31,
                r = n.lo << 1 ^ t,
                a = (n.hi << 1 | n.lo >>> 31) ^ t;
            return se(r, a, this.buf), this
        }
        uint64(e) {
            const n = f.uEnc(e);
            return se(n.lo, n.hi, this.buf), this
        }
    },
    Se = class {
        constructor(e, n = Oe().decodeUtf8) {
            this.decodeUtf8 = n, this.varint64 = yt, this.uint32 = Tt, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)
        }
        tag() {
            let e = this.uint32(),
                n = e >>> 3,
                t = e & 7;
            if (n <= 0 || t < 0 || t > 5) throw new Error("illegal tag: field no " + n + " wire type " + t);
            return [n, t]
        }
        skip(e, n) {
            let t = this.pos;
            switch (e) {
                case d.Varint:
                    for (; this.buf[this.pos++] & 128;);
                    break;
                case d.Bit64:
                    this.pos += 4;
                case d.Bit32:
                    this.pos += 4;
                    break;
                case d.LengthDelimited:
                    let r = this.uint32();
                    this.pos += r;
                    break;
                case d.StartGroup:
                    for (;;) {
                        const [a, s] = this.tag();
                        if (s === d.EndGroup) {
                            if (n !== void 0 && a !== n) throw new Error("invalid end group tag");
                            break
                        }
                        this.skip(s, a)
                    }
                    break;
                default:
                    throw new Error("cant skip wire type " + e)
            }
            return this.assertBounds(), this.buf.subarray(t, this.pos)
        }
        assertBounds() {
            if (this.pos > this.len) throw new RangeError("premature EOF")
        }
        int32() {
            return this.uint32() | 0
        }
        sint32() {
            let e = this.uint32();
            return e >>> 1 ^ -(e & 1)
        }
        int64() {
            return f.dec(...this.varint64())
        }
        uint64() {
            return f.uDec(...this.varint64())
        }
        sint64() {
            let [e, n] = this.varint64(), t = -(e & 1);
            return e = (e >>> 1 | (n & 1) << 31) ^ t, n = n >>> 1 ^ t, f.dec(e, n)
        }
        bool() {
            let [e, n] = this.varint64();
            return e !== 0 || n !== 0
        }
        fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, !0)
        }
        sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, !0)
        }
        fixed64() {
            return f.uDec(this.sfixed32(), this.sfixed32())
        }
        sfixed64() {
            return f.dec(this.sfixed32(), this.sfixed32())
        }
        float() {
            return this.view.getFloat32((this.pos += 4) - 4, !0)
        }
        double() {
            return this.view.getFloat64((this.pos += 8) - 8, !0)
        }
        bytes() {
            let e = this.uint32(),
                n = this.pos;
            return this.pos += e, this.assertBounds(), this.buf.subarray(n, n + e)
        }
        string() {
            return this.decodeUtf8(this.bytes())
        }
    };

function ue(e) {
    if (typeof e == "string") e = Number(e);
    else if (typeof e != "number") throw new Error("invalid int32: " + typeof e);
    if (!Number.isInteger(e) || e > 2147483647 || e < -2147483648) throw new Error("invalid int32: " + e)
}

function Ze(e) {
    if (typeof e == "string") e = Number(e);
    else if (typeof e != "number") throw new Error("invalid uint32: " + typeof e);
    if (!Number.isInteger(e) || e > 4294967295 || e < 0) throw new Error("invalid uint32: " + e)
}

function Pt(e) {
    if (typeof e == "string") {
        const n = e;
        if (e = Number(e), Number.isNaN(e) && n !== "NaN") throw new Error("invalid float32: " + n)
    } else if (typeof e != "number") throw new Error("invalid float32: " + typeof e);
    if (Number.isFinite(e) && (e > 34028234663852886e22 || e < -34028234663852886e22)) throw new Error("invalid float32: " + e)
}

function O(e, n) {
    const t = e.fieldKind == "list" ? Ie(n, e) : e.fieldKind == "map" ? Te(n, e) : ke(e, n);
    if (t === !0) return;
    let r;
    switch (e.fieldKind) {
        case "list":
            r = `expected ${Kn(e)}, got ${p(n)}`;
            break;
        case "map":
            r = `expected ${Cn(e)}, got ${p(n)}`;
            break;
        default:
            r = j(e, n, t)
    }
    return new g(e, r)
}

function je(e, n, t) {
    const r = ke(e, t);
    if (r !== !0) return new g(e, `list item #${n+1}: ${j(e,t,r)}`)
}

function Bt(e, n, t) {
    const r = xn(n, e.mapKey);
    if (r !== !0) return new g(e, `invalid map key: ${j({scalar:e.mapKey},n,r)}`);
    const a = ke(e, t);
    if (a !== !0) return new g(e, `map entry ${p(n)}: ${j(e,t,a)}`)
}

function ke(e, n) {
    return e.scalar !== void 0 ? xn(n, e.scalar) : e.enum !== void 0 ? e.enum.open ? Number.isInteger(n) : e.enum.values.some(t => t.number === n) : _e(n, e.message)
}

function xn(e, n) {
    switch (n) {
        case i.DOUBLE:
            return typeof e == "number";
        case i.FLOAT:
            return typeof e != "number" ? !1 : Number.isNaN(e) || !Number.isFinite(e) ? !0 : e > 34028234663852886e22 || e < -34028234663852886e22 ? `${e.toFixed()} out of range` : !0;
        case i.INT32:
        case i.SFIXED32:
        case i.SINT32:
            return typeof e != "number" || !Number.isInteger(e) ? !1 : e > 2147483647 || e < -2147483648 ? `${e.toFixed()} out of range` : !0;
        case i.FIXED32:
        case i.UINT32:
            return typeof e != "number" || !Number.isInteger(e) ? !1 : e > 4294967295 || e < 0 ? `${e.toFixed()} out of range` : !0;
        case i.BOOL:
            return typeof e == "boolean";
        case i.STRING:
            return typeof e != "string" ? !1 : Oe().checkUtf8(e) || "invalid UTF8";
        case i.BYTES:
            return e instanceof Uint8Array;
        case i.INT64:
        case i.SFIXED64:
        case i.SINT64:
            if (typeof e == "bigint" || typeof e == "number" || typeof e == "string" && e.length > 0) try {
                return f.parse(e), !0
            } catch {
                return `${e} out of range`
            }
            return !1;
        case i.FIXED64:
        case i.UINT64:
            if (typeof e == "bigint" || typeof e == "number" || typeof e == "string" && e.length > 0) try {
                return f.uParse(e), !0
            } catch {
                return `${e} out of range`
            }
            return !1
    }
}

function j(e, n, t) {
    return t = typeof t == "string" ? `: ${t}` : `, got ${p(n)}`, e.scalar !== void 0 ? `expected ${Gt(e.scalar)}` + t : e.enum !== void 0 ? `expected ${e.enum.toString()}` + t : `expected ${Mn(e.message)}` + t
}

function p(e) {
    switch (typeof e) {
        case "object":
            return e === null ? "null" : e instanceof Uint8Array ? `Uint8Array(${e.length})` : Array.isArray(e) ? `Array(${e.length})` : Ie(e) ? Kn(e.field()) : Te(e) ? Cn(e.field()) : _e(e) ? Mn(e.desc) : ye(e) ? `message ${e.$typeName}` : "object";
        case "string":
            return e.length > 30 ? "string" : `"${e.split('"').join('\\"')}"`;
        case "boolean":
            return String(e);
        case "number":
            return String(e);
        case "bigint":
            return String(e) + "n";
        default:
            return typeof e
    }
}

function Mn(e) {
    return `ReflectMessage (${e.typeName})`
}

function Kn(e) {
    switch (e.listKind) {
        case "message":
            return `ReflectList (${e.message.toString()})`;
        case "enum":
            return `ReflectList (${e.enum.toString()})`;
        case "scalar":
            return `ReflectList (${i[e.scalar]})`
    }
}

function Cn(e) {
    switch (e.mapKind) {
        case "message":
            return `ReflectMap (${i[e.mapKey]}, ${e.message.toString()})`;
        case "enum":
            return `ReflectMap (${i[e.mapKey]}, ${e.enum.toString()})`;
        case "scalar":
            return `ReflectMap (${i[e.mapKey]}, ${i[e.scalar]})`
    }
}

function Gt(e) {
    switch (e) {
        case i.STRING:
            return "string";
        case i.BOOL:
            return "boolean";
        case i.INT64:
        case i.SINT64:
        case i.SFIXED64:
            return "bigint (int64)";
        case i.UINT64:
        case i.FIXED64:
            return "bigint (uint64)";
        case i.BYTES:
            return "Uint8Array";
        case i.DOUBLE:
            return "number (float64)";
        case i.FLOAT:
            return "number (float32)";
        case i.FIXED32:
        case i.UINT32:
            return "number (uint32)";
        case i.INT32:
        case i.SFIXED32:
        case i.SINT32:
            return "number (int32)"
    }
}

function N(e, n, t = !0) {
    return new Xn(e, n, t)
}
var He = new WeakMap,
    Xn = class {
        get sortedFields() {
            const e = He.get(this.desc);
            if (e) return e;
            const n = this.desc.fields.concat().sort((t, r) => t.number - r.number);
            return He.set(this.desc, n), n
        }
        constructor(e, n, t = !0) {
            this.lists = new Map, this.maps = new Map, this.check = t, this.desc = e, this.message = this[_] = n ? ? h(e), this.fields = e.fields, this.oneofs = e.oneofs, this.members = e.members
        }
        findNumber(e) {
            return this._fieldsByNumber || (this._fieldsByNumber = new Map(this.desc.fields.map(n => [n.number, n]))), this._fieldsByNumber.get(e)
        }
        oneofCase(e) {
            return $(this.message, e), Fn(this.message, e)
        }
        isSet(e) {
            return $(this.message, e), vt(this.message, e)
        }
        clear(e) {
            $(this.message, e), Ot(this.message, e)
        }
        get(e) {
            $(this.message, e);
            const n = Vn(this.message, e);
            switch (e.fieldKind) {
                case "list":
                    let t = this.lists.get(e);
                    return (!t || t[_] !== n) && this.lists.set(e, t = new xt(e, n, this.check)), t;
                case "map":
                    let r = this.maps.get(e);
                    return (!r || r[_] !== n) && this.maps.set(e, r = new Mt(e, n, this.check)), r;
                case "message":
                    return Le(e, n, this.check);
                case "scalar":
                    return n === void 0 ? S(e.scalar, !1) : De(e, n);
                case "enum":
                    return n ? ? e.enum.values[0].number
            }
        }
        set(e, n) {
            if ($(this.message, e), this.check) {
                const r = O(e, n);
                if (r) throw r
            }
            let t;
            e.fieldKind == "message" ? t = Ae(e, n) : Te(n) || Ie(n) ? t = n[_] : t = Re(e, n), Yn(this.message, e, t)
        }
        getUnknown() {
            return this.message.$unknown
        }
        setUnknown(e) {
            this.message.$unknown = e
        }
    };

function $(e, n) {
    if (n.parent.typeName !== e.$typeName) throw new g(n, `cannot use ${n.toString()} with message ${e.$typeName}`, "ForeignFieldError")
}
var xt = class {
        field() {
            return this._field
        }
        get size() {
            return this._arr.length
        }
        constructor(e, n, t) {
            this._field = e, this._arr = this[_] = n, this.check = t
        }
        get(e) {
            const n = this._arr[e];
            return n === void 0 ? void 0 : ce(this._field, n, this.check)
        }
        set(e, n) {
            if (e < 0 || e >= this._arr.length) throw new g(this._field, `list item #${e+1}: out of range`);
            if (this.check) {
                const t = je(this._field, e, n);
                if (t) throw t
            }
            this._arr[e] = ze(this._field, n)
        }
        add(e) {
            if (this.check) {
                const n = je(this._field, this._arr.length, e);
                if (n) throw n
            }
            this._arr.push(ze(this._field, e))
        }
        clear() {
            this._arr.splice(0, this._arr.length)
        }[Symbol.iterator]() {
            return this.values()
        }
        keys() {
            return this._arr.keys()
        }* values() {
            for (const e of this._arr) yield ce(this._field, e, this.check)
        }* entries() {
            for (let e = 0; e < this._arr.length; e++) yield [e, ce(this._field, this._arr[e], this.check)]
        }
    },
    Mt = class {
        constructor(e, n, t = !0) {
            this.obj = this[_] = n ? ? {}, this.check = t, this._field = e
        }
        field() {
            return this._field
        }
        set(e, n) {
            if (this.check) {
                const t = Bt(this._field, e, n);
                if (t) throw t
            }
            return this.obj[C(e)] = Kt(this._field, n), this
        }
        delete(e) {
            const n = C(e),
                t = Object.prototype.hasOwnProperty.call(this.obj, n);
            return t && delete this.obj[n], t
        }
        clear() {
            for (const e of Object.keys(this.obj)) delete this.obj[e]
        }
        get(e) {
            let n = this.obj[C(e)];
            return n !== void 0 && (n = le(this._field, n, this.check)), n
        }
        has(e) {
            return Object.prototype.hasOwnProperty.call(this.obj, C(e))
        }* keys() {
            for (const e of Object.keys(this.obj)) yield Qe(e, this._field.mapKey)
        }* entries() {
            for (const e of Object.entries(this.obj)) yield [Qe(e[0], this._field.mapKey), le(this._field, e[1], this.check)]
        }[Symbol.iterator]() {
            return this.entries()
        }
        get size() {
            return Object.keys(this.obj).length
        }* values() {
            for (const e of Object.values(this.obj)) yield le(this._field, e, this.check)
        }
        forEach(e, n) {
            for (const t of this.entries()) e.call(n, t[1], t[0], this)
        }
    };

function Ae(e, n) {
    return _e(n) ? St(n.message) && !e.oneof && e.fieldKind == "message" ? n.message.value : n.desc.typeName == "google.protobuf.Struct" && e.parent.typeName != "google.protobuf.Value" ? Wn(n.message) : n.message : n
}

function Le(e, n, t) {
    return n !== void 0 && (x(e.message) && !e.oneof && e.fieldKind == "message" ? n = {
        $typeName: e.message.typeName,
        value: De(e.message.fields[0], n)
    } : e.message.typeName == "google.protobuf.Struct" && e.parent.typeName != "google.protobuf.Value" && v(n) && (n = Jn(n))), new Xn(e.message, n, t)
}

function ze(e, n) {
    return e.listKind == "message" ? Ae(e, n) : Re(e, n)
}

function ce(e, n, t) {
    return e.listKind == "message" ? Le(e, n, t) : De(e, n)
}

function Kt(e, n) {
    return e.mapKind == "message" ? Ae(e, n) : Re(e, n)
}

function le(e, n, t) {
    return e.mapKind == "message" ? Le(e, n, t) : n
}

function C(e) {
    return typeof e == "string" || typeof e == "number" ? e : String(e)
}

function Qe(e, n) {
    switch (n) {
        case i.STRING:
            return e;
        case i.INT32:
        case i.FIXED32:
        case i.UINT32:
        case i.SFIXED32:
        case i.SINT32:
            {
                const t = Number.parseInt(e);
                if (Number.isFinite(t)) return t;
                break
            }
        case i.BOOL:
            switch (e) {
                case "true":
                    return !0;
                case "false":
                    return !1
            }
            break;
        case i.UINT64:
        case i.FIXED64:
            try {
                return f.uParse(e)
            } catch {}
            break;
        default:
            try {
                return f.parse(e)
            } catch {}
    }
    return e
}

function De(e, n) {
    switch (e.scalar) {
        case i.INT64:
        case i.SFIXED64:
        case i.SINT64:
            "longAsString" in e && e.longAsString && typeof n == "string" && (n = f.parse(n));
            break;
        case i.FIXED64:
        case i.UINT64:
            "longAsString" in e && e.longAsString && typeof n == "string" && (n = f.uParse(n))
    }
    return n
}

function Re(e, n) {
    switch (e.scalar) {
        case i.INT64:
        case i.SFIXED64:
        case i.SINT64:
            "longAsString" in e && e.longAsString ? n = String(n) : (typeof n == "string" || typeof n == "number") && (n = f.parse(n));
            break;
        case i.FIXED64:
        case i.UINT64:
            "longAsString" in e && e.longAsString ? n = String(n) : (typeof n == "string" || typeof n == "number") && (n = f.uParse(n))
    }
    return n
}

function Jn(e) {
    const n = {
        $typeName: "google.protobuf.Struct",
        fields: {}
    };
    if (v(e))
        for (const [t, r] of Object.entries(e)) n.fields[t] = jn(r);
    return n
}

function Wn(e) {
    const n = {};
    for (const [t, r] of Object.entries(e.fields)) n[t] = Zn(r);
    return n
}

function Zn(e) {
    switch (e.kind.case) {
        case "structValue":
            return Wn(e.kind.value);
        case "listValue":
            return e.kind.value.values.map(Zn);
        case "nullValue":
        case void 0:
            return null;
        default:
            return e.kind.value
    }
}

function jn(e) {
    const n = {
        $typeName: "google.protobuf.Value",
        kind: {
            case: void 0
        }
    };
    switch (typeof e) {
        case "number":
            n.kind = {
                case: "numberValue",
                value: e
            };
            break;
        case "string":
            n.kind = {
                case: "stringValue",
                value: e
            };
            break;
        case "boolean":
            n.kind = {
                case: "boolValue",
                value: e
            };
            break;
        case "object":
            if (e === null) n.kind = {
                case: "nullValue",
                value: 0
            };
            else if (Array.isArray(e)) {
                const t = {
                    $typeName: "google.protobuf.ListValue",
                    values: []
                };
                if (Array.isArray(e))
                    for (const r of e) t.values.push(jn(r));
                n.kind = {
                    case: "listValue",
                    value: t
                }
            } else n.kind = {
                case: "structValue",
                value: Jn(e)
            }
    }
    return n
}

function Hn(e) {
    const n = Xt();
    let t = e.length * 3 / 4;
    e[e.length - 2] == "=" ? t -= 2 : e[e.length - 1] == "=" && (t -= 1);
    let r = new Uint8Array(t),
        a = 0,
        s = 0,
        o, u = 0;
    for (let c = 0; c < e.length; c++) {
        if (o = n[e.charCodeAt(c)], o === void 0) switch (e[c]) {
            case "=":
                s = 0;
            case `
`:
            case "\r":
            case "	":
            case " ":
                continue;
            default:
                throw Error("invalid base64 string")
        }
        switch (s) {
            case 0:
                u = o, s = 1;
                break;
            case 1:
                r[a++] = u << 2 | (o & 48) >> 4, u = o, s = 2;
                break;
            case 2:
                r[a++] = (u & 15) << 4 | (o & 60) >> 2, u = o, s = 3;
                break;
            case 3:
                r[a++] = (u & 3) << 6 | o, s = 0
        }
    }
    if (s == 1) throw Error("invalid base64 string");
    return r.subarray(0, a)
}

function Ct(e, n = "std") {
    const t = zn(n),
        r = n == "std";
    let a = "",
        s = 0,
        o, u = 0;
    for (let c = 0; c < e.length; c++) switch (o = e[c], s) {
        case 0:
            a += t[o >> 2], u = (o & 3) << 4, s = 1;
            break;
        case 1:
            a += t[u | o >> 4], u = (o & 15) << 2, s = 2;
            break;
        case 2:
            a += t[u | o >> 6], a += t[o & 63], s = 0
    }
    return s && (a += t[u], r && (a += "=", s == 1 && (a += "="))), a
}
var X, qe, A;

function zn(e) {
    return X || (X = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), qe = X.slice(0, -2).concat("-", "_")), e == "url" ? qe : X
}

function Xt() {
    if (!A) {
        A = [];
        const e = zn("std");
        for (let n = 0; n < e.length; n++) A[e[n].charCodeAt(0)] = n;
        A[45] = e.indexOf("+"), A[95] = e.indexOf("/")
    }
    return A
}

function P(e) {
    let n = !1;
    const t = [];
    for (let r = 0; r < e.length; r++) {
        let a = e.charAt(r);
        switch (a) {
            case "_":
                n = !0;
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                t.push(a), n = !1;
                break;
            default:
                n && (n = !1, a = a.toUpperCase()), t.push(a)
        }
    }
    return t.join("")
}
var Jt = new Set(["constructor", "toString", "toJSON", "valueOf"]);

function B(e) {
    return Jt.has(e) ? e + "$" : e
}

function Ue(e) {
    for (const n of e.field) Y(n, "jsonName") || (n.jsonName = P(n.name));
    e.nestedType.forEach(Ue)
}

function Wt(e, n) {
    const t = e.values.find(r => r.name === n);
    if (!t) throw new Error(`cannot parse ${e} default value: ${n}`);
    return t.number
}

function Zt(e, n) {
    switch (e) {
        case i.STRING:
            return n;
        case i.BYTES:
            {
                const t = jt(n);
                if (t === !1) throw new Error(`cannot parse ${i[e]} default value: ${n}`);
                return t
            }
        case i.INT64:
        case i.SFIXED64:
        case i.SINT64:
            return f.parse(n);
        case i.UINT64:
        case i.FIXED64:
            return f.uParse(n);
        case i.DOUBLE:
        case i.FLOAT:
            switch (n) {
                case "inf":
                    return Number.POSITIVE_INFINITY;
                case "-inf":
                    return Number.NEGATIVE_INFINITY;
                case "nan":
                    return NaN;
                default:
                    return parseFloat(n)
            }
        case i.BOOL:
            return n === "true";
        case i.INT32:
        case i.UINT32:
        case i.SINT32:
        case i.FIXED32:
        case i.SFIXED32:
            return parseInt(n, 10)
    }
}

function jt(e) {
    const n = [],
        t = {
            tail: e,
            c: "",
            next() {
                return this.tail.length == 0 ? !1 : (this.c = this.tail[0], this.tail = this.tail.substring(1), !0)
            },
            take(r) {
                if (this.tail.length >= r) {
                    const a = this.tail.substring(0, r);
                    return this.tail = this.tail.substring(r), a
                }
                return !1
            }
        };
    for (; t.next();) switch (t.c) {
        case "\\":
            if (t.next()) switch (t.c) {
                case "\\":
                    n.push(t.c.charCodeAt(0));
                    break;
                case "b":
                    n.push(8);
                    break;
                case "f":
                    n.push(12);
                    break;
                case "n":
                    n.push(10);
                    break;
                case "r":
                    n.push(13);
                    break;
                case "t":
                    n.push(9);
                    break;
                case "v":
                    n.push(11);
                    break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                    {
                        const r = t.c,
                            a = t.take(2);
                        if (a === !1) return !1;
                        const s = parseInt(r + a, 8);
                        if (Number.isNaN(s)) return !1;n.push(s);
                        break
                    }
                case "x":
                    {
                        const r = t.c,
                            a = t.take(2);
                        if (a === !1) return !1;
                        const s = parseInt(r + a, 16);
                        if (Number.isNaN(s)) return !1;n.push(s);
                        break
                    }
                case "u":
                    {
                        const r = t.c,
                            a = t.take(4);
                        if (a === !1) return !1;
                        const s = parseInt(r + a, 16);
                        if (Number.isNaN(s)) return !1;
                        const o = new Uint8Array(4);new DataView(o.buffer).setInt32(0, s, !0),
                        n.push(o[0], o[1], o[2], o[3]);
                        break
                    }
                case "U":
                    {
                        const r = t.c,
                            a = t.take(8);
                        if (a === !1) return !1;
                        const s = f.uEnc(r + a),
                            o = new Uint8Array(8),
                            u = new DataView(o.buffer);u.setInt32(0, s.lo, !0),
                        u.setInt32(4, s.hi, !0),
                        n.push(o[0], o[1], o[2], o[3], o[4], o[5], o[6], o[7]);
                        break
                    }
            }
            break;
        default:
            n.push(t.c.charCodeAt(0))
    }
    return new Uint8Array(n)
}

function* be(e) {
    switch (e.kind) {
        case "file":
            for (const n of e.messages) yield n, yield* be(n);
            yield* e.enums, yield* e.services, yield* e.extensions;
            break;
        case "message":
            for (const n of e.nestedMessages) yield n, yield* be(n);
            yield* e.nestedEnums, yield* e.nestedExtensions
    }
}

function Qn(...e) {
    const n = Ht();
    if (!e.length) return n;
    if ("$typeName" in e[0] && e[0].$typeName == "google.protobuf.FileDescriptorSet") {
        for (const t of e[0].file) rn(t, n);
        return n
    }
    if ("$typeName" in e[0]) {
        let s = function(o) {
            const u = [];
            for (const c of o.dependency) {
                if (n.getFile(c) != null || a.has(c)) continue;
                const l = r(c);
                if (!l) throw new Error(`Unable to resolve ${c}, imported by ${o.name}`);
                "kind" in l ? n.addFile(l, !1, !0) : (a.add(l.name), u.push(l))
            }
            return u.concat(...u.map(s))
        };
        const t = e[0],
            r = e[1],
            a = new Set;
        for (const o of [t, ...s(t)].reverse()) rn(o, n)
    } else
        for (const t of e)
            for (const r of t.files) n.addFile(r);
    return n
}

function Ht() {
    const e = new Map,
        n = new Map,
        t = new Map;
    return {
        kind: "registry",
        types: e,
        extendees: n,
        [Symbol.iterator]() {
            return e.values()
        },
        get files() {
            return t.values()
        },
        addFile(r, a, s) {
            if (t.set(r.proto.name, r), !a)
                for (const o of be(r)) this.add(o);
            if (s)
                for (const o of r.dependencies) this.addFile(o, a, s)
        },
        add(r) {
            if (r.kind == "extension") {
                let a = n.get(r.extendee.typeName);
                a || n.set(r.extendee.typeName, a = new Map), a.set(r.number, r)
            }
            e.set(r.typeName, r)
        },
        get(r) {
            return e.get(r)
        },
        getFile(r) {
            return t.get(r)
        },
        getMessage(r) {
            const a = e.get(r);
            return a ? .kind == "message" ? a : void 0
        },
        getEnum(r) {
            const a = e.get(r);
            return a ? .kind == "enum" ? a : void 0
        },
        getExtension(r) {
            const a = e.get(r);
            return a ? .kind == "extension" ? a : void 0
        },
        getExtensionFor(r, a) {
            var s;
            return (s = n.get(r.typeName)) === null || s === void 0 ? void 0 : s.get(a)
        },
        getService(r) {
            const a = e.get(r);
            return a ? .kind == "service" ? a : void 0
        }
    }
}
var zt = 998,
    Qt = 999,
    qt = 9,
    G = 10,
    V = 11,
    er = 12,
    en = 14,
    $e = 3,
    nr = 2,
    nn = 1,
    tr = 0,
    me = 1,
    tn = 2,
    rr = 3,
    ar = 1,
    sr = 2,
    or = 1,
    qn = {
        998: {
            fieldPresence: 1,
            enumType: 2,
            repeatedFieldEncoding: 2,
            utf8Validation: 3,
            messageEncoding: 1,
            jsonFormat: 2,
            enforceNamingStyle: 2,
            defaultSymbolVisibility: 1
        },
        999: {
            fieldPresence: 2,
            enumType: 1,
            repeatedFieldEncoding: 1,
            utf8Validation: 2,
            messageEncoding: 1,
            jsonFormat: 1,
            enforceNamingStyle: 2,
            defaultSymbolVisibility: 1
        },
        1e3: {
            fieldPresence: 1,
            enumType: 1,
            repeatedFieldEncoding: 1,
            utf8Validation: 2,
            messageEncoding: 1,
            jsonFormat: 1,
            enforceNamingStyle: 2,
            defaultSymbolVisibility: 1
        },
        1001: {
            fieldPresence: 1,
            enumType: 1,
            repeatedFieldEncoding: 1,
            utf8Validation: 2,
            messageEncoding: 1,
            jsonFormat: 1,
            enforceNamingStyle: 1,
            defaultSymbolVisibility: 2
        }
    };

function rn(e, n) {
    var t, r;
    const a = {
            kind: "file",
            proto: e,
            deprecated: (r = (t = e.options) === null || t === void 0 ? void 0 : t.deprecated) !== null && r !== void 0 ? r : !1,
            edition: lr(e),
            name: e.name.replace(/\.proto$/, ""),
            dependencies: mr(e, n),
            enums: [],
            messages: [],
            extensions: [],
            services: [],
            toString() {
                return `file ${e.name}`
            }
        },
        s = new Map,
        o = {
            get(u) {
                return s.get(u)
            },
            add(u) {
                var c;
                y(((c = u.proto.options) === null || c === void 0 ? void 0 : c.mapEntry) === !0), s.set(u.typeName, u)
            }
        };
    for (const u of e.enumType) et(u, a, void 0, n);
    for (const u of e.messageType) nt(u, a, void 0, n, o);
    for (const u of e.service) ir(u, a, n);
    de(a, n);
    for (const u of s.values()) pe(u, n, o);
    for (const u of a.messages) pe(u, n, o), de(u, n);
    n.addFile(a, !0)
}

function de(e, n) {
    switch (e.kind) {
        case "file":
            for (const t of e.proto.extension) {
                const r = ge(t, e, n);
                e.extensions.push(r), n.add(r)
            }
            break;
        case "message":
            for (const t of e.proto.extension) {
                const r = ge(t, e, n);
                e.nestedExtensions.push(r), n.add(r)
            }
            for (const t of e.nestedMessages) de(t, n)
    }
}

function pe(e, n, t) {
    const r = e.proto.oneofDecl.map(s => cr(s, e)),
        a = new Set;
    for (const s of e.proto.field) {
        const o = dr(s, r),
            u = ge(s, e, n, o, t);
        e.fields.push(u), e.field[u.localName] = u, o === void 0 ? e.members.push(u) : (o.fields.push(u), a.has(o) || (a.add(o), e.members.push(o)))
    }
    for (const s of r.filter(o => a.has(o))) e.oneofs.push(s);
    for (const s of e.nestedMessages) pe(s, n, t)
}

function et(e, n, t, r) {
    var a, s, o, u, c;
    const l = fr(e.name, e.value),
        m = {
            kind: "enum",
            proto: e,
            deprecated: (s = (a = e.options) === null || a === void 0 ? void 0 : a.deprecated) !== null && s !== void 0 ? s : !1,
            file: n,
            parent: t,
            open: !0,
            name: e.name,
            typeName: q(e, t, n),
            value: {},
            values: [],
            sharedPrefix: l,
            toString() {
                return `enum ${this.typeName}`
            }
        };
    m.open = Er(m), r.add(m);
    for (const b of e.value) {
        const I = b.name;
        m.values.push(m.value[b.number] = {
            kind: "enum_value",
            proto: b,
            deprecated: (u = (o = b.options) === null || o === void 0 ? void 0 : o.deprecated) !== null && u !== void 0 ? u : !1,
            parent: m,
            name: I,
            localName: B(l == null ? I : I.substring(l.length)),
            number: b.number,
            toString() {
                return `enum value ${m.typeName}.${I}`
            }
        })
    }((c = t ? .nestedEnums) !== null && c !== void 0 ? c : n.enums).push(m)
}

function nt(e, n, t, r, a) {
    var s, o, u, c;
    const l = {
        kind: "message",
        proto: e,
        deprecated: (o = (s = e.options) === null || s === void 0 ? void 0 : s.deprecated) !== null && o !== void 0 ? o : !1,
        file: n,
        parent: t,
        name: e.name,
        typeName: q(e, t, n),
        fields: [],
        field: {},
        oneofs: [],
        members: [],
        nestedEnums: [],
        nestedMessages: [],
        nestedExtensions: [],
        toString() {
            return `message ${this.typeName}`
        }
    };
    ((u = e.options) === null || u === void 0 ? void 0 : u.mapEntry) === !0 ? a.add(l) : (((c = t ? .nestedMessages) !== null && c !== void 0 ? c : n.messages).push(l), r.add(l));
    for (const m of e.enumType) et(m, n, l, r);
    for (const m of e.nestedType) nt(m, n, l, r, a)
}

function ir(e, n, t) {
    var r, a;
    const s = {
        kind: "service",
        proto: e,
        deprecated: (a = (r = e.options) === null || r === void 0 ? void 0 : r.deprecated) !== null && a !== void 0 ? a : !1,
        file: n,
        name: e.name,
        typeName: q(e, void 0, n),
        methods: [],
        method: {},
        toString() {
            return `service ${this.typeName}`
        }
    };
    n.services.push(s), t.add(s);
    for (const o of e.method) {
        const u = ur(o, s, t);
        s.methods.push(u), s.method[u.localName] = u
    }
}

function ur(e, n, t) {
    var r, a, s, o;
    let u;
    e.clientStreaming && e.serverStreaming ? u = "bidi_streaming" : e.clientStreaming ? u = "client_streaming" : e.serverStreaming ? u = "server_streaming" : u = "unary";
    const c = t.getMessage(T(e.inputType)),
        l = t.getMessage(T(e.outputType));
    y(c, `invalid MethodDescriptorProto: input_type ${e.inputType} not found`), y(l, `invalid MethodDescriptorProto: output_type ${e.inputType} not found`);
    const m = e.name;
    return {
        kind: "rpc",
        proto: e,
        deprecated: (a = (r = e.options) === null || r === void 0 ? void 0 : r.deprecated) !== null && a !== void 0 ? a : !1,
        parent: n,
        name: m,
        localName: B(m.length ? B(m[0].toLowerCase() + m.substring(1)) : m),
        methodKind: u,
        input: c,
        output: l,
        idempotency: (o = (s = e.options) === null || s === void 0 ? void 0 : s.idempotencyLevel) !== null && o !== void 0 ? o : tr,
        toString() {
            return `rpc ${n.typeName}.${m}`
        }
    }
}

function cr(e, n) {
    return {
        kind: "oneof",
        proto: e,
        deprecated: !1,
        parent: n,
        fields: [],
        name: e.name,
        localName: B(P(e.name)),
        toString() {
            return `oneof ${n.typeName}.${this.name}`
        }
    }
}

function ge(e, n, t, r, a) {
    var s, o, u;
    const c = a === void 0,
        l = {
            kind: "field",
            proto: e,
            deprecated: (o = (s = e.options) === null || s === void 0 ? void 0 : s.deprecated) !== null && o !== void 0 ? o : !1,
            name: e.name,
            number: e.number,
            scalar: void 0,
            message: void 0,
            enum: void 0,
            presence: pr(e, r, c, n),
            listKind: void 0,
            mapKind: void 0,
            mapKey: void 0,
            delimitedEncoding: void 0,
            packed: void 0,
            longAsString: !1,
            getDefaultValue: void 0
        };
    if (c) {
        const E = n.kind == "file" ? n : n.file,
            K = n.kind == "file" ? void 0 : n,
            w = q(e, K, E);
        l.kind = "extension", l.file = E, l.parent = K, l.oneof = void 0, l.typeName = w, l.jsonName = `[${w}]`, l.toString = () => `extension ${w}`;
        const xe = t.getMessage(T(e.extendee));
        y(xe, `invalid FieldDescriptorProto: extendee ${e.extendee} not found`), l.extendee = xe
    } else {
        const E = n;
        y(E.kind == "message"), l.parent = E, l.oneof = r, l.localName = r ? P(e.name) : B(P(e.name)), l.jsonName = e.jsonName, l.toString = () => `field ${E.typeName}.${e.name}`
    }
    const m = e.label,
        b = e.type,
        I = (u = e.options) === null || u === void 0 ? void 0 : u.jstype;
    if (m === $e) {
        const E = b == V ? a ? .get(T(e.typeName)) : void 0;
        if (E) {
            l.fieldKind = "map";
            const {
                key: K,
                value: w
            } = Nr(E);
            return l.mapKey = K.scalar, l.mapKind = w.fieldKind, l.message = w.message, l.delimitedEncoding = !1, l.enum = w.enum, l.scalar = w.scalar, l
        }
        switch (l.fieldKind = "list", b) {
            case V:
            case G:
                l.listKind = "message", l.message = t.getMessage(T(e.typeName)), y(l.message), l.delimitedEncoding = an(e, n);
                break;
            case en:
                l.listKind = "enum", l.enum = t.getEnum(T(e.typeName)), y(l.enum);
                break;
            default:
                l.listKind = "scalar", l.scalar = b, l.longAsString = I == nn
        }
        return l.packed = gr(e, n), l
    }
    switch (b) {
        case V:
        case G:
            l.fieldKind = "message", l.message = t.getMessage(T(e.typeName)), y(l.message, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), l.delimitedEncoding = an(e, n), l.getDefaultValue = () => {};
            break;
        case en:
            {
                const E = t.getEnum(T(e.typeName));y(E !== void 0, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`),
                l.fieldKind = "enum",
                l.enum = t.getEnum(T(e.typeName)),
                l.getDefaultValue = () => Y(e, "defaultValue") ? Wt(E, e.defaultValue) : void 0;
                break
            }
        default:
            l.fieldKind = "scalar", l.scalar = b, l.longAsString = I == nn, l.getDefaultValue = () => Y(e, "defaultValue") ? Zt(b, e.defaultValue) : void 0
    }
    return l
}

function lr(e) {
    switch (e.syntax) {
        case "":
        case "proto2":
            return zt;
        case "proto3":
            return Qt;
        case "editions":
            if (e.edition in qn) return e.edition;
            throw new Error(`${e.name}: unsupported edition`);
        default:
            throw new Error(`${e.name}: unsupported syntax "${e.syntax}"`)
    }
}

function mr(e, n) {
    return e.dependency.map(t => {
        const r = n.getFile(t);
        if (!r) throw new Error(`Cannot find ${t}, imported by ${e.name}`);
        return r
    })
}

function fr(e, n) {
    const t = br(e) + "_";
    for (const r of n) {
        if (!r.name.toLowerCase().startsWith(t)) return;
        const a = r.name.substring(t.length);
        if (a.length == 0 || /^\d/.test(a)) return
    }
    return t
}

function br(e) {
    return (e.substring(0, 1) + e.substring(1).replace(/[A-Z]/g, n => "_" + n)).toLowerCase()
}

function q(e, n, t) {
    let r;
    return n ? r = `${n.typeName}.${e.name}` : t.proto.package.length > 0 ? r = `${t.proto.package}.${e.name}` : r = `${e.name}`, r
}

function T(e) {
    return e.startsWith(".") ? e.substring(1) : e
}

function dr(e, n) {
    if (!Y(e, "oneofIndex") || e.proto3Optional) return;
    const t = n[e.oneofIndex];
    return y(t, `invalid FieldDescriptorProto: oneof #${e.oneofIndex} for field #${e.number} not found`), t
}

function pr(e, n, t, r) {
    if (e.label == nr) return rr;
    if (e.label == $e) return tn;
    if (n || e.proto3Optional || t) return me;
    const a = L("fieldPresence", {
        proto: e,
        parent: r
    });
    return a == tn && (e.type == V || e.type == G) ? me : a
}

function gr(e, n) {
    if (e.label != $e) return !1;
    switch (e.type) {
        case qt:
        case er:
        case G:
        case V:
            return !1
    }
    const t = e.options;
    return t && Y(t, "packed") ? t.packed : ar == L("repeatedFieldEncoding", {
        proto: e,
        parent: n
    })
}

function Nr(e) {
    const n = e.fields.find(r => r.number === 1),
        t = e.fields.find(r => r.number === 2);
    return y(n && n.fieldKind == "scalar" && n.scalar != i.BYTES && n.scalar != i.FLOAT && n.scalar != i.DOUBLE && t && t.fieldKind != "list" && t.fieldKind != "map"), {
        key: n,
        value: t
    }
}

function Er(e) {
    var n;
    return or == L("enumType", {
        proto: e.proto,
        parent: (n = e.parent) !== null && n !== void 0 ? n : e.file
    })
}

function an(e, n) {
    return e.type == G ? !0 : sr == L("messageEncoding", {
        proto: e,
        parent: n
    })
}

function L(e, n) {
    var t, r;
    const a = (t = n.proto.options) === null || t === void 0 ? void 0 : t.features;
    if (a) {
        const s = a[e];
        if (s != 0) return s
    }
    if ("kind" in n) {
        if (n.kind == "message") return L(e, (r = n.parent) !== null && r !== void 0 ? r : n.file);
        const s = qn[n.edition];
        if (!s) throw new Error(`feature default for edition ${n.edition} not found`);
        return s[e]
    }
    return L(e, n.parent)
}

function y(e, n) {
    if (!e) throw new Error(n)
}

function yr(e) {
    const n = hr(e);
    return n.messageType.forEach(Ue), Qn(n, () => {}).getFile(n.name)
}

function hr(e) {
    return Object.assign(Object.create({
        syntax: "",
        edition: 0
    }), Object.assign(Object.assign({
        $typeName: "google.protobuf.FileDescriptorProto",
        dependency: [],
        publicDependency: [],
        weakDependency: [],
        optionDependency: [],
        service: [],
        extension: []
    }, e), {
        messageType: e.messageType.map(tt),
        enumType: e.enumType.map(rt)
    }))
}

function tt(e) {
    var n, t, r, a, s, o, u, c;
    return Object.assign(Object.create({
        visibility: 0
    }), {
        $typeName: "google.protobuf.DescriptorProto",
        name: e.name,
        field: (t = (n = e.field) === null || n === void 0 ? void 0 : n.map(Ir)) !== null && t !== void 0 ? t : [],
        extension: [],
        nestedType: (a = (r = e.nestedType) === null || r === void 0 ? void 0 : r.map(tt)) !== null && a !== void 0 ? a : [],
        enumType: (o = (s = e.enumType) === null || s === void 0 ? void 0 : s.map(rt)) !== null && o !== void 0 ? o : [],
        extensionRange: (c = (u = e.extensionRange) === null || u === void 0 ? void 0 : u.map(l => Object.assign({
            $typeName: "google.protobuf.DescriptorProto.ExtensionRange"
        }, l))) !== null && c !== void 0 ? c : [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: []
    })
}

function Ir(e) {
    return Object.assign(Object.create({
        label: 1,
        typeName: "",
        extendee: "",
        defaultValue: "",
        oneofIndex: 0,
        jsonName: "",
        proto3Optional: !1
    }), Object.assign(Object.assign({
        $typeName: "google.protobuf.FieldDescriptorProto"
    }, e), {
        options: e.options ? Tr(e.options) : void 0
    }))
}

function Tr(e) {
    var n, t, r;
    return Object.assign(Object.create({
        ctype: 0,
        packed: !1,
        jstype: 0,
        lazy: !1,
        unverifiedLazy: !1,
        deprecated: !1,
        weak: !1,
        debugRedact: !1,
        retention: 0
    }), Object.assign(Object.assign({
        $typeName: "google.protobuf.FieldOptions"
    }, e), {
        targets: (n = e.targets) !== null && n !== void 0 ? n : [],
        editionDefaults: (r = (t = e.editionDefaults) === null || t === void 0 ? void 0 : t.map(a => Object.assign({
            $typeName: "google.protobuf.FieldOptions.EditionDefault"
        }, a))) !== null && r !== void 0 ? r : [],
        uninterpretedOption: []
    }))
}

function rt(e) {
    return Object.assign(Object.create({
        visibility: 0
    }), {
        $typeName: "google.protobuf.EnumDescriptorProto",
        name: e.name,
        reservedName: [],
        reservedRange: [],
        value: e.value.map(n => Object.assign({
            $typeName: "google.protobuf.EnumValueDescriptorProto"
        }, n))
    })
}

function U(e, n, ...t) {
    return t.reduce((r, a) => r.nestedMessages[a], e.messages[n])
}
var _r = yr({
        name: "google/protobuf/descriptor.proto",
        package: "google.protobuf",
        messageType: [{
            name: "FileDescriptorSet",
            field: [{
                name: "file",
                number: 1,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.FileDescriptorProto"
            }],
            extensionRange: [{
                start: 536e6,
                end: 536000001
            }]
        }, {
            name: "FileDescriptorProto",
            field: [{
                name: "name",
                number: 1,
                type: 9,
                label: 1
            }, {
                name: "package",
                number: 2,
                type: 9,
                label: 1
            }, {
                name: "dependency",
                number: 3,
                type: 9,
                label: 3
            }, {
                name: "public_dependency",
                number: 10,
                type: 5,
                label: 3
            }, {
                name: "weak_dependency",
                number: 11,
                type: 5,
                label: 3
            }, {
                name: "option_dependency",
                number: 15,
                type: 9,
                label: 3
            }, {
                name: "message_type",
                number: 4,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.DescriptorProto"
            }, {
                name: "enum_type",
                number: 5,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.EnumDescriptorProto"
            }, {
                name: "service",
                number: 6,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.ServiceDescriptorProto"
            }, {
                name: "extension",
                number: 7,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.FieldDescriptorProto"
            }, {
                name: "options",
                number: 8,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.FileOptions"
            }, {
                name: "source_code_info",
                number: 9,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.SourceCodeInfo"
            }, {
                name: "syntax",
                number: 12,
                type: 9,
                label: 1
            }, {
                name: "edition",
                number: 14,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.Edition"
            }]
        }, {
            name: "DescriptorProto",
            field: [{
                name: "name",
                number: 1,
                type: 9,
                label: 1
            }, {
                name: "field",
                number: 2,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.FieldDescriptorProto"
            }, {
                name: "extension",
                number: 6,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.FieldDescriptorProto"
            }, {
                name: "nested_type",
                number: 3,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.DescriptorProto"
            }, {
                name: "enum_type",
                number: 4,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.EnumDescriptorProto"
            }, {
                name: "extension_range",
                number: 5,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.DescriptorProto.ExtensionRange"
            }, {
                name: "oneof_decl",
                number: 8,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.OneofDescriptorProto"
            }, {
                name: "options",
                number: 7,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.MessageOptions"
            }, {
                name: "reserved_range",
                number: 9,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.DescriptorProto.ReservedRange"
            }, {
                name: "reserved_name",
                number: 10,
                type: 9,
                label: 3
            }, {
                name: "visibility",
                number: 11,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.SymbolVisibility"
            }],
            nestedType: [{
                name: "ExtensionRange",
                field: [{
                    name: "start",
                    number: 1,
                    type: 5,
                    label: 1
                }, {
                    name: "end",
                    number: 2,
                    type: 5,
                    label: 1
                }, {
                    name: "options",
                    number: 3,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.ExtensionRangeOptions"
                }]
            }, {
                name: "ReservedRange",
                field: [{
                    name: "start",
                    number: 1,
                    type: 5,
                    label: 1
                }, {
                    name: "end",
                    number: 2,
                    type: 5,
                    label: 1
                }]
            }]
        }, {
            name: "ExtensionRangeOptions",
            field: [{
                name: "uninterpreted_option",
                number: 999,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.UninterpretedOption"
            }, {
                name: "declaration",
                number: 2,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.ExtensionRangeOptions.Declaration",
                options: {
                    retention: 2
                }
            }, {
                name: "features",
                number: 50,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.FeatureSet"
            }, {
                name: "verification",
                number: 3,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.ExtensionRangeOptions.VerificationState",
                defaultValue: "UNVERIFIED",
                options: {
                    retention: 2
                }
            }],
            nestedType: [{
                name: "Declaration",
                field: [{
                    name: "number",
                    number: 1,
                    type: 5,
                    label: 1
                }, {
                    name: "full_name",
                    number: 2,
                    type: 9,
                    label: 1
                }, {
                    name: "type",
                    number: 3,
                    type: 9,
                    label: 1
                }, {
                    name: "reserved",
                    number: 5,
                    type: 8,
                    label: 1
                }, {
                    name: "repeated",
                    number: 6,
                    type: 8,
                    label: 1
                }]
            }],
            enumType: [{
                name: "VerificationState",
                value: [{
                    name: "DECLARATION",
                    number: 0
                }, {
                    name: "UNVERIFIED",
                    number: 1
                }]
            }],
            extensionRange: [{
                start: 1e3,
                end: 536870912
            }]
        }, {
            name: "FieldDescriptorProto",
            field: [{
                name: "name",
                number: 1,
                type: 9,
                label: 1
            }, {
                name: "number",
                number: 3,
                type: 5,
                label: 1
            }, {
                name: "label",
                number: 4,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.FieldDescriptorProto.Label"
            }, {
                name: "type",
                number: 5,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.FieldDescriptorProto.Type"
            }, {
                name: "type_name",
                number: 6,
                type: 9,
                label: 1
            }, {
                name: "extendee",
                number: 2,
                type: 9,
                label: 1
            }, {
                name: "default_value",
                number: 7,
                type: 9,
                label: 1
            }, {
                name: "oneof_index",
                number: 9,
                type: 5,
                label: 1
            }, {
                name: "json_name",
                number: 10,
                type: 9,
                label: 1
            }, {
                name: "options",
                number: 8,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.FieldOptions"
            }, {
                name: "proto3_optional",
                number: 17,
                type: 8,
                label: 1
            }],
            enumType: [{
                name: "Type",
                value: [{
                    name: "TYPE_DOUBLE",
                    number: 1
                }, {
                    name: "TYPE_FLOAT",
                    number: 2
                }, {
                    name: "TYPE_INT64",
                    number: 3
                }, {
                    name: "TYPE_UINT64",
                    number: 4
                }, {
                    name: "TYPE_INT32",
                    number: 5
                }, {
                    name: "TYPE_FIXED64",
                    number: 6
                }, {
                    name: "TYPE_FIXED32",
                    number: 7
                }, {
                    name: "TYPE_BOOL",
                    number: 8
                }, {
                    name: "TYPE_STRING",
                    number: 9
                }, {
                    name: "TYPE_GROUP",
                    number: 10
                }, {
                    name: "TYPE_MESSAGE",
                    number: 11
                }, {
                    name: "TYPE_BYTES",
                    number: 12
                }, {
                    name: "TYPE_UINT32",
                    number: 13
                }, {
                    name: "TYPE_ENUM",
                    number: 14
                }, {
                    name: "TYPE_SFIXED32",
                    number: 15
                }, {
                    name: "TYPE_SFIXED64",
                    number: 16
                }, {
                    name: "TYPE_SINT32",
                    number: 17
                }, {
                    name: "TYPE_SINT64",
                    number: 18
                }]
            }, {
                name: "Label",
                value: [{
                    name: "LABEL_OPTIONAL",
                    number: 1
                }, {
                    name: "LABEL_REPEATED",
                    number: 3
                }, {
                    name: "LABEL_REQUIRED",
                    number: 2
                }]
            }]
        }, {
            name: "OneofDescriptorProto",
            field: [{
                name: "name",
                number: 1,
                type: 9,
                label: 1
            }, {
                name: "options",
                number: 2,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.OneofOptions"
            }]
        }, {
            name: "EnumDescriptorProto",
            field: [{
                name: "name",
                number: 1,
                type: 9,
                label: 1
            }, {
                name: "value",
                number: 2,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.EnumValueDescriptorProto"
            }, {
                name: "options",
                number: 3,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.EnumOptions"
            }, {
                name: "reserved_range",
                number: 4,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.EnumDescriptorProto.EnumReservedRange"
            }, {
                name: "reserved_name",
                number: 5,
                type: 9,
                label: 3
            }, {
                name: "visibility",
                number: 6,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.SymbolVisibility"
            }],
            nestedType: [{
                name: "EnumReservedRange",
                field: [{
                    name: "start",
                    number: 1,
                    type: 5,
                    label: 1
                }, {
                    name: "end",
                    number: 2,
                    type: 5,
                    label: 1
                }]
            }]
        }, {
            name: "EnumValueDescriptorProto",
            field: [{
                name: "name",
                number: 1,
                type: 9,
                label: 1
            }, {
                name: "number",
                number: 2,
                type: 5,
                label: 1
            }, {
                name: "options",
                number: 3,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.EnumValueOptions"
            }]
        }, {
            name: "ServiceDescriptorProto",
            field: [{
                name: "name",
                number: 1,
                type: 9,
                label: 1
            }, {
                name: "method",
                number: 2,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.MethodDescriptorProto"
            }, {
                name: "options",
                number: 3,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.ServiceOptions"
            }]
        }, {
            name: "MethodDescriptorProto",
            field: [{
                name: "name",
                number: 1,
                type: 9,
                label: 1
            }, {
                name: "input_type",
                number: 2,
                type: 9,
                label: 1
            }, {
                name: "output_type",
                number: 3,
                type: 9,
                label: 1
            }, {
                name: "options",
                number: 4,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.MethodOptions"
            }, {
                name: "client_streaming",
                number: 5,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "server_streaming",
                number: 6,
                type: 8,
                label: 1,
                defaultValue: "false"
            }]
        }, {
            name: "FileOptions",
            field: [{
                name: "java_package",
                number: 1,
                type: 9,
                label: 1
            }, {
                name: "java_outer_classname",
                number: 8,
                type: 9,
                label: 1
            }, {
                name: "java_multiple_files",
                number: 10,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "java_generate_equals_and_hash",
                number: 20,
                type: 8,
                label: 1,
                options: {
                    deprecated: !0
                }
            }, {
                name: "java_string_check_utf8",
                number: 27,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "optimize_for",
                number: 9,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.FileOptions.OptimizeMode",
                defaultValue: "SPEED"
            }, {
                name: "go_package",
                number: 11,
                type: 9,
                label: 1
            }, {
                name: "cc_generic_services",
                number: 16,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "java_generic_services",
                number: 17,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "py_generic_services",
                number: 18,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "deprecated",
                number: 23,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "cc_enable_arenas",
                number: 31,
                type: 8,
                label: 1,
                defaultValue: "true"
            }, {
                name: "objc_class_prefix",
                number: 36,
                type: 9,
                label: 1
            }, {
                name: "csharp_namespace",
                number: 37,
                type: 9,
                label: 1
            }, {
                name: "swift_prefix",
                number: 39,
                type: 9,
                label: 1
            }, {
                name: "php_class_prefix",
                number: 40,
                type: 9,
                label: 1
            }, {
                name: "php_namespace",
                number: 41,
                type: 9,
                label: 1
            }, {
                name: "php_metadata_namespace",
                number: 44,
                type: 9,
                label: 1
            }, {
                name: "ruby_package",
                number: 45,
                type: 9,
                label: 1
            }, {
                name: "features",
                number: 50,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.FeatureSet"
            }, {
                name: "uninterpreted_option",
                number: 999,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.UninterpretedOption"
            }],
            enumType: [{
                name: "OptimizeMode",
                value: [{
                    name: "SPEED",
                    number: 1
                }, {
                    name: "CODE_SIZE",
                    number: 2
                }, {
                    name: "LITE_RUNTIME",
                    number: 3
                }]
            }],
            extensionRange: [{
                start: 1e3,
                end: 536870912
            }]
        }, {
            name: "MessageOptions",
            field: [{
                name: "message_set_wire_format",
                number: 1,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "no_standard_descriptor_accessor",
                number: 2,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "deprecated",
                number: 3,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "map_entry",
                number: 7,
                type: 8,
                label: 1
            }, {
                name: "deprecated_legacy_json_field_conflicts",
                number: 11,
                type: 8,
                label: 1,
                options: {
                    deprecated: !0
                }
            }, {
                name: "features",
                number: 12,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.FeatureSet"
            }, {
                name: "uninterpreted_option",
                number: 999,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.UninterpretedOption"
            }],
            extensionRange: [{
                start: 1e3,
                end: 536870912
            }]
        }, {
            name: "FieldOptions",
            field: [{
                name: "ctype",
                number: 1,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.FieldOptions.CType",
                defaultValue: "STRING"
            }, {
                name: "packed",
                number: 2,
                type: 8,
                label: 1
            }, {
                name: "jstype",
                number: 6,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.FieldOptions.JSType",
                defaultValue: "JS_NORMAL"
            }, {
                name: "lazy",
                number: 5,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "unverified_lazy",
                number: 15,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "deprecated",
                number: 3,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "weak",
                number: 10,
                type: 8,
                label: 1,
                defaultValue: "false",
                options: {
                    deprecated: !0
                }
            }, {
                name: "debug_redact",
                number: 16,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "retention",
                number: 17,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.FieldOptions.OptionRetention"
            }, {
                name: "targets",
                number: 19,
                type: 14,
                label: 3,
                typeName: ".google.protobuf.FieldOptions.OptionTargetType"
            }, {
                name: "edition_defaults",
                number: 20,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.FieldOptions.EditionDefault"
            }, {
                name: "features",
                number: 21,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.FeatureSet"
            }, {
                name: "feature_support",
                number: 22,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.FieldOptions.FeatureSupport"
            }, {
                name: "uninterpreted_option",
                number: 999,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.UninterpretedOption"
            }],
            nestedType: [{
                name: "EditionDefault",
                field: [{
                    name: "edition",
                    number: 3,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.Edition"
                }, {
                    name: "value",
                    number: 2,
                    type: 9,
                    label: 1
                }]
            }, {
                name: "FeatureSupport",
                field: [{
                    name: "edition_introduced",
                    number: 1,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.Edition"
                }, {
                    name: "edition_deprecated",
                    number: 2,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.Edition"
                }, {
                    name: "deprecation_warning",
                    number: 3,
                    type: 9,
                    label: 1
                }, {
                    name: "edition_removed",
                    number: 4,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.Edition"
                }]
            }],
            enumType: [{
                name: "CType",
                value: [{
                    name: "STRING",
                    number: 0
                }, {
                    name: "CORD",
                    number: 1
                }, {
                    name: "STRING_PIECE",
                    number: 2
                }]
            }, {
                name: "JSType",
                value: [{
                    name: "JS_NORMAL",
                    number: 0
                }, {
                    name: "JS_STRING",
                    number: 1
                }, {
                    name: "JS_NUMBER",
                    number: 2
                }]
            }, {
                name: "OptionRetention",
                value: [{
                    name: "RETENTION_UNKNOWN",
                    number: 0
                }, {
                    name: "RETENTION_RUNTIME",
                    number: 1
                }, {
                    name: "RETENTION_SOURCE",
                    number: 2
                }]
            }, {
                name: "OptionTargetType",
                value: [{
                    name: "TARGET_TYPE_UNKNOWN",
                    number: 0
                }, {
                    name: "TARGET_TYPE_FILE",
                    number: 1
                }, {
                    name: "TARGET_TYPE_EXTENSION_RANGE",
                    number: 2
                }, {
                    name: "TARGET_TYPE_MESSAGE",
                    number: 3
                }, {
                    name: "TARGET_TYPE_FIELD",
                    number: 4
                }, {
                    name: "TARGET_TYPE_ONEOF",
                    number: 5
                }, {
                    name: "TARGET_TYPE_ENUM",
                    number: 6
                }, {
                    name: "TARGET_TYPE_ENUM_ENTRY",
                    number: 7
                }, {
                    name: "TARGET_TYPE_SERVICE",
                    number: 8
                }, {
                    name: "TARGET_TYPE_METHOD",
                    number: 9
                }]
            }],
            extensionRange: [{
                start: 1e3,
                end: 536870912
            }]
        }, {
            name: "OneofOptions",
            field: [{
                name: "features",
                number: 1,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.FeatureSet"
            }, {
                name: "uninterpreted_option",
                number: 999,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.UninterpretedOption"
            }],
            extensionRange: [{
                start: 1e3,
                end: 536870912
            }]
        }, {
            name: "EnumOptions",
            field: [{
                name: "allow_alias",
                number: 2,
                type: 8,
                label: 1
            }, {
                name: "deprecated",
                number: 3,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "deprecated_legacy_json_field_conflicts",
                number: 6,
                type: 8,
                label: 1,
                options: {
                    deprecated: !0
                }
            }, {
                name: "features",
                number: 7,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.FeatureSet"
            }, {
                name: "uninterpreted_option",
                number: 999,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.UninterpretedOption"
            }],
            extensionRange: [{
                start: 1e3,
                end: 536870912
            }]
        }, {
            name: "EnumValueOptions",
            field: [{
                name: "deprecated",
                number: 1,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "features",
                number: 2,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.FeatureSet"
            }, {
                name: "debug_redact",
                number: 3,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "feature_support",
                number: 4,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.FieldOptions.FeatureSupport"
            }, {
                name: "uninterpreted_option",
                number: 999,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.UninterpretedOption"
            }],
            extensionRange: [{
                start: 1e3,
                end: 536870912
            }]
        }, {
            name: "ServiceOptions",
            field: [{
                name: "features",
                number: 34,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.FeatureSet"
            }, {
                name: "deprecated",
                number: 33,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "uninterpreted_option",
                number: 999,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.UninterpretedOption"
            }],
            extensionRange: [{
                start: 1e3,
                end: 536870912
            }]
        }, {
            name: "MethodOptions",
            field: [{
                name: "deprecated",
                number: 33,
                type: 8,
                label: 1,
                defaultValue: "false"
            }, {
                name: "idempotency_level",
                number: 34,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.MethodOptions.IdempotencyLevel",
                defaultValue: "IDEMPOTENCY_UNKNOWN"
            }, {
                name: "features",
                number: 35,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.FeatureSet"
            }, {
                name: "uninterpreted_option",
                number: 999,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.UninterpretedOption"
            }],
            enumType: [{
                name: "IdempotencyLevel",
                value: [{
                    name: "IDEMPOTENCY_UNKNOWN",
                    number: 0
                }, {
                    name: "NO_SIDE_EFFECTS",
                    number: 1
                }, {
                    name: "IDEMPOTENT",
                    number: 2
                }]
            }],
            extensionRange: [{
                start: 1e3,
                end: 536870912
            }]
        }, {
            name: "UninterpretedOption",
            field: [{
                name: "name",
                number: 2,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.UninterpretedOption.NamePart"
            }, {
                name: "identifier_value",
                number: 3,
                type: 9,
                label: 1
            }, {
                name: "positive_int_value",
                number: 4,
                type: 4,
                label: 1
            }, {
                name: "negative_int_value",
                number: 5,
                type: 3,
                label: 1
            }, {
                name: "double_value",
                number: 6,
                type: 1,
                label: 1
            }, {
                name: "string_value",
                number: 7,
                type: 12,
                label: 1
            }, {
                name: "aggregate_value",
                number: 8,
                type: 9,
                label: 1
            }],
            nestedType: [{
                name: "NamePart",
                field: [{
                    name: "name_part",
                    number: 1,
                    type: 9,
                    label: 2
                }, {
                    name: "is_extension",
                    number: 2,
                    type: 8,
                    label: 2
                }]
            }]
        }, {
            name: "FeatureSet",
            field: [{
                name: "field_presence",
                number: 1,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.FeatureSet.FieldPresence",
                options: {
                    retention: 1,
                    targets: [4, 1],
                    editionDefaults: [{
                        value: "EXPLICIT",
                        edition: 900
                    }, {
                        value: "IMPLICIT",
                        edition: 999
                    }, {
                        value: "EXPLICIT",
                        edition: 1e3
                    }]
                }
            }, {
                name: "enum_type",
                number: 2,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.FeatureSet.EnumType",
                options: {
                    retention: 1,
                    targets: [6, 1],
                    editionDefaults: [{
                        value: "CLOSED",
                        edition: 900
                    }, {
                        value: "OPEN",
                        edition: 999
                    }]
                }
            }, {
                name: "repeated_field_encoding",
                number: 3,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.FeatureSet.RepeatedFieldEncoding",
                options: {
                    retention: 1,
                    targets: [4, 1],
                    editionDefaults: [{
                        value: "EXPANDED",
                        edition: 900
                    }, {
                        value: "PACKED",
                        edition: 999
                    }]
                }
            }, {
                name: "utf8_validation",
                number: 4,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.FeatureSet.Utf8Validation",
                options: {
                    retention: 1,
                    targets: [4, 1],
                    editionDefaults: [{
                        value: "NONE",
                        edition: 900
                    }, {
                        value: "VERIFY",
                        edition: 999
                    }]
                }
            }, {
                name: "message_encoding",
                number: 5,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.FeatureSet.MessageEncoding",
                options: {
                    retention: 1,
                    targets: [4, 1],
                    editionDefaults: [{
                        value: "LENGTH_PREFIXED",
                        edition: 900
                    }]
                }
            }, {
                name: "json_format",
                number: 6,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.FeatureSet.JsonFormat",
                options: {
                    retention: 1,
                    targets: [3, 6, 1],
                    editionDefaults: [{
                        value: "LEGACY_BEST_EFFORT",
                        edition: 900
                    }, {
                        value: "ALLOW",
                        edition: 999
                    }]
                }
            }, {
                name: "enforce_naming_style",
                number: 7,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.FeatureSet.EnforceNamingStyle",
                options: {
                    retention: 2,
                    targets: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    editionDefaults: [{
                        value: "STYLE_LEGACY",
                        edition: 900
                    }, {
                        value: "STYLE2024",
                        edition: 1001
                    }]
                }
            }, {
                name: "default_symbol_visibility",
                number: 8,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility",
                options: {
                    retention: 2,
                    targets: [1],
                    editionDefaults: [{
                        value: "EXPORT_ALL",
                        edition: 900
                    }, {
                        value: "EXPORT_TOP_LEVEL",
                        edition: 1001
                    }]
                }
            }],
            nestedType: [{
                name: "VisibilityFeature",
                enumType: [{
                    name: "DefaultSymbolVisibility",
                    value: [{
                        name: "DEFAULT_SYMBOL_VISIBILITY_UNKNOWN",
                        number: 0
                    }, {
                        name: "EXPORT_ALL",
                        number: 1
                    }, {
                        name: "EXPORT_TOP_LEVEL",
                        number: 2
                    }, {
                        name: "LOCAL_ALL",
                        number: 3
                    }, {
                        name: "STRICT",
                        number: 4
                    }]
                }]
            }],
            enumType: [{
                name: "FieldPresence",
                value: [{
                    name: "FIELD_PRESENCE_UNKNOWN",
                    number: 0
                }, {
                    name: "EXPLICIT",
                    number: 1
                }, {
                    name: "IMPLICIT",
                    number: 2
                }, {
                    name: "LEGACY_REQUIRED",
                    number: 3
                }]
            }, {
                name: "EnumType",
                value: [{
                    name: "ENUM_TYPE_UNKNOWN",
                    number: 0
                }, {
                    name: "OPEN",
                    number: 1
                }, {
                    name: "CLOSED",
                    number: 2
                }]
            }, {
                name: "RepeatedFieldEncoding",
                value: [{
                    name: "REPEATED_FIELD_ENCODING_UNKNOWN",
                    number: 0
                }, {
                    name: "PACKED",
                    number: 1
                }, {
                    name: "EXPANDED",
                    number: 2
                }]
            }, {
                name: "Utf8Validation",
                value: [{
                    name: "UTF8_VALIDATION_UNKNOWN",
                    number: 0
                }, {
                    name: "VERIFY",
                    number: 2
                }, {
                    name: "NONE",
                    number: 3
                }]
            }, {
                name: "MessageEncoding",
                value: [{
                    name: "MESSAGE_ENCODING_UNKNOWN",
                    number: 0
                }, {
                    name: "LENGTH_PREFIXED",
                    number: 1
                }, {
                    name: "DELIMITED",
                    number: 2
                }]
            }, {
                name: "JsonFormat",
                value: [{
                    name: "JSON_FORMAT_UNKNOWN",
                    number: 0
                }, {
                    name: "ALLOW",
                    number: 1
                }, {
                    name: "LEGACY_BEST_EFFORT",
                    number: 2
                }]
            }, {
                name: "EnforceNamingStyle",
                value: [{
                    name: "ENFORCE_NAMING_STYLE_UNKNOWN",
                    number: 0
                }, {
                    name: "STYLE2024",
                    number: 1
                }, {
                    name: "STYLE_LEGACY",
                    number: 2
                }]
            }],
            extensionRange: [{
                start: 1e3,
                end: 9995
            }, {
                start: 9995,
                end: 1e4
            }, {
                start: 1e4,
                end: 10001
            }]
        }, {
            name: "FeatureSetDefaults",
            field: [{
                name: "defaults",
                number: 1,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault"
            }, {
                name: "minimum_edition",
                number: 4,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.Edition"
            }, {
                name: "maximum_edition",
                number: 5,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.Edition"
            }],
            nestedType: [{
                name: "FeatureSetEditionDefault",
                field: [{
                    name: "edition",
                    number: 3,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.Edition"
                }, {
                    name: "overridable_features",
                    number: 4,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet"
                }, {
                    name: "fixed_features",
                    number: 5,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet"
                }]
            }]
        }, {
            name: "SourceCodeInfo",
            field: [{
                name: "location",
                number: 1,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.SourceCodeInfo.Location"
            }],
            nestedType: [{
                name: "Location",
                field: [{
                    name: "path",
                    number: 1,
                    type: 5,
                    label: 3,
                    options: {
                        packed: !0
                    }
                }, {
                    name: "span",
                    number: 2,
                    type: 5,
                    label: 3,
                    options: {
                        packed: !0
                    }
                }, {
                    name: "leading_comments",
                    number: 3,
                    type: 9,
                    label: 1
                }, {
                    name: "trailing_comments",
                    number: 4,
                    type: 9,
                    label: 1
                }, {
                    name: "leading_detached_comments",
                    number: 6,
                    type: 9,
                    label: 3
                }]
            }],
            extensionRange: [{
                start: 536e6,
                end: 536000001
            }]
        }, {
            name: "GeneratedCodeInfo",
            field: [{
                name: "annotation",
                number: 1,
                type: 11,
                label: 3,
                typeName: ".google.protobuf.GeneratedCodeInfo.Annotation"
            }],
            nestedType: [{
                name: "Annotation",
                field: [{
                    name: "path",
                    number: 1,
                    type: 5,
                    label: 3,
                    options: {
                        packed: !0
                    }
                }, {
                    name: "source_file",
                    number: 2,
                    type: 9,
                    label: 1
                }, {
                    name: "begin",
                    number: 3,
                    type: 5,
                    label: 1
                }, {
                    name: "end",
                    number: 4,
                    type: 5,
                    label: 1
                }, {
                    name: "semantic",
                    number: 5,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.GeneratedCodeInfo.Annotation.Semantic"
                }],
                enumType: [{
                    name: "Semantic",
                    value: [{
                        name: "NONE",
                        number: 0
                    }, {
                        name: "SET",
                        number: 1
                    }, {
                        name: "ALIAS",
                        number: 2
                    }]
                }]
            }]
        }],
        enumType: [{
            name: "Edition",
            value: [{
                name: "EDITION_UNKNOWN",
                number: 0
            }, {
                name: "EDITION_LEGACY",
                number: 900
            }, {
                name: "EDITION_PROTO2",
                number: 998
            }, {
                name: "EDITION_PROTO3",
                number: 999
            }, {
                name: "EDITION_2023",
                number: 1e3
            }, {
                name: "EDITION_2024",
                number: 1001
            }, {
                name: "EDITION_1_TEST_ONLY",
                number: 1
            }, {
                name: "EDITION_2_TEST_ONLY",
                number: 2
            }, {
                name: "EDITION_99997_TEST_ONLY",
                number: 99997
            }, {
                name: "EDITION_99998_TEST_ONLY",
                number: 99998
            }, {
                name: "EDITION_99999_TEST_ONLY",
                number: 99999
            }, {
                name: "EDITION_MAX",
                number: 2147483647
            }]
        }, {
            name: "SymbolVisibility",
            value: [{
                name: "VISIBILITY_UNSET",
                number: 0
            }, {
                name: "VISIBILITY_LOCAL",
                number: 1
            }, {
                name: "VISIBILITY_EXPORT",
                number: 2
            }]
        }]
    }),
    wr = U(_r, 1),
    sn;
(function(e) {
    e[e.DECLARATION = 0] = "DECLARATION", e[e.UNVERIFIED = 1] = "UNVERIFIED"
})(sn || (sn = {}));
var on;
(function(e) {
    e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.GROUP = 10] = "GROUP", e[e.MESSAGE = 11] = "MESSAGE", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.ENUM = 14] = "ENUM", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64"
})(on || (on = {}));
var un;
(function(e) {
    e[e.OPTIONAL = 1] = "OPTIONAL", e[e.REPEATED = 3] = "REPEATED", e[e.REQUIRED = 2] = "REQUIRED"
})(un || (un = {}));
var cn;
(function(e) {
    e[e.SPEED = 1] = "SPEED", e[e.CODE_SIZE = 2] = "CODE_SIZE", e[e.LITE_RUNTIME = 3] = "LITE_RUNTIME"
})(cn || (cn = {}));
var ln;
(function(e) {
    e[e.STRING = 0] = "STRING", e[e.CORD = 1] = "CORD", e[e.STRING_PIECE = 2] = "STRING_PIECE"
})(ln || (ln = {}));
var mn;
(function(e) {
    e[e.JS_NORMAL = 0] = "JS_NORMAL", e[e.JS_STRING = 1] = "JS_STRING", e[e.JS_NUMBER = 2] = "JS_NUMBER"
})(mn || (mn = {}));
var fn;
(function(e) {
    e[e.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e[e.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e[e.RETENTION_SOURCE = 2] = "RETENTION_SOURCE"
})(fn || (fn = {}));
var bn;
(function(e) {
    e[e.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e[e.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e[e.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e[e.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e[e.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e[e.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e[e.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e[e.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e[e.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e[e.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD"
})(bn || (bn = {}));
var dn;
(function(e) {
    e[e.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e[e.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e[e.IDEMPOTENT = 2] = "IDEMPOTENT"
})(dn || (dn = {}));
var pn;
(function(e) {
    e[e.DEFAULT_SYMBOL_VISIBILITY_UNKNOWN = 0] = "DEFAULT_SYMBOL_VISIBILITY_UNKNOWN", e[e.EXPORT_ALL = 1] = "EXPORT_ALL", e[e.EXPORT_TOP_LEVEL = 2] = "EXPORT_TOP_LEVEL", e[e.LOCAL_ALL = 3] = "LOCAL_ALL", e[e.STRICT = 4] = "STRICT"
})(pn || (pn = {}));
var gn;
(function(e) {
    e[e.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e[e.EXPLICIT = 1] = "EXPLICIT", e[e.IMPLICIT = 2] = "IMPLICIT", e[e.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED"
})(gn || (gn = {}));
var Nn;
(function(e) {
    e[e.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e[e.OPEN = 1] = "OPEN", e[e.CLOSED = 2] = "CLOSED"
})(Nn || (Nn = {}));
var En;
(function(e) {
    e[e.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e[e.PACKED = 1] = "PACKED", e[e.EXPANDED = 2] = "EXPANDED"
})(En || (En = {}));
var yn;
(function(e) {
    e[e.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e[e.VERIFY = 2] = "VERIFY", e[e.NONE = 3] = "NONE"
})(yn || (yn = {}));
var hn;
(function(e) {
    e[e.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e[e.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e[e.DELIMITED = 2] = "DELIMITED"
})(hn || (hn = {}));
var In;
(function(e) {
    e[e.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e[e.ALLOW = 1] = "ALLOW", e[e.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT"
})(In || (In = {}));
var Tn;
(function(e) {
    e[e.ENFORCE_NAMING_STYLE_UNKNOWN = 0] = "ENFORCE_NAMING_STYLE_UNKNOWN", e[e.STYLE2024 = 1] = "STYLE2024", e[e.STYLE_LEGACY = 2] = "STYLE_LEGACY"
})(Tn || (Tn = {}));
var _n;
(function(e) {
    e[e.NONE = 0] = "NONE", e[e.SET = 1] = "SET", e[e.ALIAS = 2] = "ALIAS"
})(_n || (_n = {}));
var wn;
(function(e) {
    e[e.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e[e.EDITION_LEGACY = 900] = "EDITION_LEGACY", e[e.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e[e.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e[e.EDITION_2023 = 1e3] = "EDITION_2023", e[e.EDITION_2024 = 1001] = "EDITION_2024", e[e.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e[e.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e[e.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e[e.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e[e.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e[e.EDITION_MAX = 2147483647] = "EDITION_MAX"
})(wn || (wn = {}));
var vn;
(function(e) {
    e[e.VISIBILITY_UNSET = 0] = "VISIBILITY_UNSET", e[e.VISIBILITY_LOCAL = 1] = "VISIBILITY_LOCAL", e[e.VISIBILITY_EXPORT = 2] = "VISIBILITY_EXPORT"
})(vn || (vn = {}));
var On = {
    readUnknownFields: !0
};

function vr(e) {
    return e ? Object.assign(Object.assign({}, On), e) : On
}

function at(e, n, t) {
    const r = N(e, void 0, !1);
    return st(r, new Se(n), vr(t), !1, n.byteLength), r.message
}

function st(e, n, t, r, a) {
    var s;
    const o = r ? n.len : n.pos + a;
    let u, c;
    const l = (s = e.getUnknown()) !== null && s !== void 0 ? s : [];
    for (; n.pos < o && ([u, c] = n.tag(), !(r && c == d.EndGroup));) {
        const m = e.findNumber(u);
        if (!m) {
            const b = n.skip(c, u);
            t.readUnknownFields && l.push({
                no: u,
                wireType: c,
                data: b
            });
            continue
        }
        ot(e, n, m, c, t)
    }
    if (r && (c != d.EndGroup || u !== a)) throw new Error("invalid end group tag");
    l.length > 0 && e.setUnknown(l)
}

function ot(e, n, t, r, a) {
    var s;
    switch (t.fieldKind) {
        case "scalar":
            e.set(t, D(n, t.scalar));
            break;
        case "enum":
            const o = D(n, i.INT32);
            if (t.enum.open) e.set(t, o);
            else if (t.enum.values.some(u => u.number === o)) e.set(t, o);
            else if (a.readUnknownFields) {
                const u = [];
                fe(o, u);
                const c = (s = e.getUnknown()) !== null && s !== void 0 ? s : [];
                c.push({
                    no: t.number,
                    wireType: r,
                    data: new Uint8Array(u)
                }), e.setUnknown(c)
            }
            break;
        case "message":
            e.set(t, Fe(n, a, t, e.get(t)));
            break;
        case "list":
            Sr(n, r, e.get(t), a);
            break;
        case "map":
            Or(n, e.get(t), a)
    }
}

function Or(e, n, t) {
    const r = n.field();
    let a, s;
    const o = e.uint32(),
        u = e.pos + o;
    for (; e.pos < u;) {
        const [c] = e.tag();
        switch (c) {
            case 1:
                a = D(e, r.mapKey);
                break;
            case 2:
                switch (r.mapKind) {
                    case "scalar":
                        s = D(e, r.scalar);
                        break;
                    case "enum":
                        s = e.int32();
                        break;
                    case "message":
                        s = Fe(e, t, r)
                }
        }
    }
    if (a === void 0 && (a = S(r.mapKey, !1)), s === void 0) switch (r.mapKind) {
        case "scalar":
            s = S(r.scalar, !1);
            break;
        case "enum":
            s = r.enum.values[0].number;
            break;
        case "message":
            s = N(r.message, void 0, !1)
    }
    n.set(a, s)
}

function Sr(e, n, t, r) {
    var a;
    const s = t.field();
    if (s.listKind === "message") {
        t.add(Fe(e, r, s));
        return
    }
    const o = (a = s.scalar) !== null && a !== void 0 ? a : i.INT32;
    if (!(n == d.LengthDelimited && o != i.STRING && o != i.BYTES)) {
        t.add(D(e, o));
        return
    }
    const u = e.uint32() + e.pos;
    for (; e.pos < u;) t.add(D(e, o))
}

function Fe(e, n, t, r) {
    const a = t.delimitedEncoding,
        s = r ? ? N(t.message, void 0, !1);
    return st(s, e, n, a, a ? t.number : e.uint32()), s
}

function D(e, n) {
    switch (n) {
        case i.STRING:
            return e.string();
        case i.BOOL:
            return e.bool();
        case i.DOUBLE:
            return e.double();
        case i.FLOAT:
            return e.float();
        case i.INT32:
            return e.int32();
        case i.INT64:
            return e.int64();
        case i.UINT64:
            return e.uint64();
        case i.FIXED64:
            return e.fixed64();
        case i.BYTES:
            return e.bytes();
        case i.FIXED32:
            return e.fixed32();
        case i.SFIXED32:
            return e.sfixed32();
        case i.SFIXED64:
            return e.sfixed64();
        case i.SINT64:
            return e.sint64();
        case i.UINT32:
            return e.uint32();
        case i.SINT32:
            return e.sint32()
    }
}

function ee(e, n) {
    var t;
    const r = at(wr, Hn(e));
    return r.messageType.forEach(Ue), r.dependency = (t = n ? .map(a => a.proto.name)) !== null && t !== void 0 ? t : [], Qn(r, a => n ? .find(s => s.proto.name === a)).getFile(r.name)
}
var kr = ee("Ch9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvEg9nb29nbGUucHJvdG9idWYiKwoJVGltZXN0YW1wEg8KB3NlY29uZHMYASABKAMSDQoFbmFub3MYAiABKAVChQEKE2NvbS5nb29nbGUucHJvdG9idWZCDlRpbWVzdGFtcFByb3RvUAFaMmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3RpbWVzdGFtcHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),
    Ar = U(kr, 0);

function Ta(e) {
    return Lr(e.getTime())
}

function _a(e) {
    return new Date(Dr(e))
}

function Lr(e) {
    const n = Math.floor(e / 1e3);
    return h(Ar, {
        seconds: f.parse(n),
        nanos: (e - n * 1e3) * 1e6
    })
}

function Dr(e) {
    return Number(e.seconds) * 1e3 + Math.round(e.nanos / 1e6)
}
var wa = ee("Ch5nb29nbGUvcHJvdG9idWYvZHVyYXRpb24ucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIqCghEdXJhdGlvbhIPCgdzZWNvbmRzGAEgASgDEg0KBW5hbm9zGAIgASgFQoMBChNjb20uZ29vZ2xlLnByb3RvYnVmQg1EdXJhdGlvblByb3RvUAFaMWdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL2R1cmF0aW9ucGL4AQGiAgNHUEKqAh5Hb29nbGUuUHJvdG9idWYuV2VsbEtub3duVHlwZXNiBnByb3RvMw"),
    Rr = ee("Chlnb29nbGUvcHJvdG9idWYvYW55LnByb3RvEg9nb29nbGUucHJvdG9idWYiJgoDQW55EhAKCHR5cGVfdXJsGAEgASgJEg0KBXZhbHVlGAIgASgMQnYKE2NvbS5nb29nbGUucHJvdG9idWZCCEFueVByb3RvUAFaLGdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL2FueXBiogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),
    Ur = U(Rr, 0),
    $r = 3,
    Sn = {
        writeUnknownFields: !0
    };

function Fr(e) {
    return e ? Object.assign(Object.assign({}, Sn), e) : Sn
}

function Vr(e, n, t) {
    return H(new Gn, Fr(t), N(e, n)).finish()
}

function H(e, n, t) {
    var r;
    for (const a of t.sortedFields) {
        if (!t.isSet(a)) {
            if (a.presence == $r) throw new Error(`cannot encode ${a} to binary: required field not set`);
            continue
        }
        it(e, n, t, a)
    }
    if (n.writeUnknownFields)
        for (const {
                no: a,
                wireType: s,
                data: o
            } of (r = t.getUnknown()) !== null && r !== void 0 ? r : []) e.tag(a, s).raw(o);
    return e
}

function it(e, n, t, r) {
    var a;
    switch (r.fieldKind) {
        case "scalar":
        case "enum":
            z(e, t.desc.typeName, r.name, (a = r.scalar) !== null && a !== void 0 ? a : i.INT32, r.number, t.get(r));
            break;
        case "list":
            Yr(e, n, r, t.get(r));
            break;
        case "message":
            ut(e, n, r, t.get(r));
            break;
        case "map":
            for (const [s, o] of t.get(r)) Pr(e, n, r, s, o)
    }
}

function z(e, n, t, r, a, s) {
    ct(e.tag(a, Br(r)), n, t, r, s)
}

function ut(e, n, t, r) {
    t.delimitedEncoding ? H(e.tag(t.number, d.StartGroup), n, r).tag(t.number, d.EndGroup) : H(e.tag(t.number, d.LengthDelimited).fork(), n, r).join()
}

function Yr(e, n, t, r) {
    var a;
    if (t.listKind == "message") {
        for (const o of r) ut(e, n, t, o);
        return
    }
    const s = (a = t.scalar) !== null && a !== void 0 ? a : i.INT32;
    if (t.packed) {
        if (!r.size) return;
        e.tag(t.number, d.LengthDelimited).fork();
        for (const o of r) ct(e, t.parent.typeName, t.name, s, o);
        e.join();
        return
    }
    for (const o of r) z(e, t.parent.typeName, t.name, s, t.number, o)
}

function Pr(e, n, t, r, a) {
    var s;
    switch (e.tag(t.number, d.LengthDelimited).fork(), z(e, t.parent.typeName, t.name, t.mapKey, 1, r), t.mapKind) {
        case "scalar":
        case "enum":
            z(e, t.parent.typeName, t.name, (s = t.scalar) !== null && s !== void 0 ? s : i.INT32, 2, a);
            break;
        case "message":
            H(e.tag(2, d.LengthDelimited).fork(), n, a).join()
    }
    e.join()
}

function ct(e, n, t, r, a) {
    try {
        switch (r) {
            case i.STRING:
                e.string(a);
                break;
            case i.BOOL:
                e.bool(a);
                break;
            case i.DOUBLE:
                e.double(a);
                break;
            case i.FLOAT:
                e.float(a);
                break;
            case i.INT32:
                e.int32(a);
                break;
            case i.INT64:
                e.int64(a);
                break;
            case i.UINT64:
                e.uint64(a);
                break;
            case i.FIXED64:
                e.fixed64(a);
                break;
            case i.BYTES:
                e.bytes(a);
                break;
            case i.FIXED32:
                e.fixed32(a);
                break;
            case i.SFIXED32:
                e.sfixed32(a);
                break;
            case i.SFIXED64:
                e.sfixed64(a);
                break;
            case i.SINT64:
                e.sint64(a);
                break;
            case i.UINT32:
                e.uint32(a);
                break;
            case i.SINT32:
                e.sint32(a)
        }
    } catch (s) {
        throw s instanceof Error ? new Error(`cannot encode field ${n}.${t} to binary: ${s.message}`) : s
    }
}

function Br(e) {
    switch (e) {
        case i.BYTES:
        case i.STRING:
            return d.LengthDelimited;
        case i.DOUBLE:
        case i.FIXED64:
        case i.SFIXED64:
            return d.Bit64;
        case i.FIXED32:
        case i.SFIXED32:
        case i.FLOAT:
            return d.Bit32;
        default:
            return d.Varint
    }
}

function Gr(e, n, t) {
    let r = !1;
    return t || (t = h(Ur), r = !0), t.value = Vr(e, n), t.typeUrl = Mr(n.$typeName), r ? t : void 0
}

function xr(e, n) {
    return e.typeUrl === "" ? !1 : (typeof n == "string" ? n : n.typeName) === lt(e.typeUrl)
}

function Ne(e, n) {
    if (e.typeUrl === "") return;
    const t = n.kind == "message" ? n : n.getMessage(lt(e.typeUrl));
    if (!(!t || !xr(e, t))) return at(t, e.value)
}

function Mr(e) {
    return `type.googleapis.com/${e}`
}

function lt(e) {
    const n = e.lastIndexOf("/"),
        t = n >= 0 ? e.substring(n + 1) : e;
    if (!t.length) throw new Error(`invalid type url: ${e}`);
    return t
}

function va(e, n, ...t) {
    if (t.length == 0) return e.extensions[n];
    const r = t.pop();
    return t.reduce((a, s) => a.nestedMessages[s], e.messages[n]).nestedExtensions[r]
}
var Ve = ee("Chxnb29nbGUvcHJvdG9idWYvc3RydWN0LnByb3RvEg9nb29nbGUucHJvdG9idWYihAEKBlN0cnVjdBIzCgZmaWVsZHMYASADKAsyIy5nb29nbGUucHJvdG9idWYuU3RydWN0LkZpZWxkc0VudHJ5GkUKC0ZpZWxkc0VudHJ5EgsKA2tleRgBIAEoCRIlCgV2YWx1ZRgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZToCOAEi6gEKBVZhbHVlEjAKCm51bGxfdmFsdWUYASABKA4yGi5nb29nbGUucHJvdG9idWYuTnVsbFZhbHVlSAASFgoMbnVtYmVyX3ZhbHVlGAIgASgBSAASFgoMc3RyaW5nX3ZhbHVlGAMgASgJSAASFAoKYm9vbF92YWx1ZRgEIAEoCEgAEi8KDHN0cnVjdF92YWx1ZRgFIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3RIABIwCgpsaXN0X3ZhbHVlGAYgASgLMhouZ29vZ2xlLnByb3RvYnVmLkxpc3RWYWx1ZUgAQgYKBGtpbmQiMwoJTGlzdFZhbHVlEiYKBnZhbHVlcxgBIAMoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZSobCglOdWxsVmFsdWUSDgoKTlVMTF9WQUxVRRAAQn8KE2NvbS5nb29nbGUucHJvdG9idWZCC1N0cnVjdFByb3RvUAFaL2dvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3N0cnVjdHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),
    Kr = U(Ve, 0),
    mt = U(Ve, 1),
    Cr = U(Ve, 2),
    Ee;
(function(e) {
    e[e.NULL_VALUE = 0] = "NULL_VALUE"
})(Ee || (Ee = {}));

function Q(e, n) {
    ft(n, e);
    const t = Wr(e.$unknown, n),
        [r, a, s] = k(n);
    for (const o of t) ot(r, new Se(o.data), a, o.wireType, {
        readUnknownFields: !0
    });
    return s()
}

function Xr(e, n, t) {
    var r;
    ft(n, e);
    const a = ((r = e.$unknown) !== null && r !== void 0 ? r : []).filter(l => l.no !== n.number),
        [s, o] = k(n, t),
        u = new Gn;
    it(u, {
        writeUnknownFields: !0
    }, s, o);
    const c = new Se(u.finish());
    for (; c.pos < c.len;) {
        const [l, m] = c.tag(), b = c.skip(m, l);
        a.push({
            no: l,
            wireType: m,
            data: b
        })
    }
    e.$unknown = a
}

function Jr(e, n) {
    var t;
    return n.extendee.typeName === e.$typeName && !!(!((t = e.$unknown) === null || t === void 0) && t.find(r => r.no === n.number))
}

function Oa(e, n) {
    const t = e.proto.options;
    return t ? Jr(t, n) : !1
}

function Sa(e, n) {
    const t = e.proto.options;
    if (!t) {
        const [, , r] = k(n);
        return r()
    }
    return Q(t, n)
}

function Wr(e, n) {
    if (e === void 0) return [];
    if (n.fieldKind === "enum" || n.fieldKind === "scalar") {
        for (let t = e.length - 1; t >= 0; --t)
            if (e[t].no == n.number) return [e[t]];
        return []
    }
    return e.filter(t => t.no === n.number)
}

function k(e, n) {
    const t = e.typeName,
        r = Object.assign(Object.assign({}, e), {
            kind: "field",
            parent: e.extendee,
            localName: t
        }),
        a = Object.assign(Object.assign({}, e.extendee), {
            fields: [r],
            members: [r],
            oneofs: []
        }),
        s = h(a, n !== void 0 ? {
            [t]: n
        } : void 0);
    return [N(a, s), r, () => {
        const o = s[t];
        if (o === void 0) {
            const u = e.message;
            return x(u) ? S(u.fields[0].scalar, u.fields[0].longAsString) : h(u)
        }
        return o
    }]
}

function ft(e, n) {
    if (e.extendee.typeName != n.$typeName) throw new Error(`extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`)
}

function Zr(e, n, t, r) {
    return n.$typeName != e.typeName || t.$typeName != e.typeName ? !1 : n === t ? !0 : Z(N(e, n), N(e, t), r)
}

function Z(e, n, t) {
    if (e.desc.typeName === "google.protobuf.Any" && t ? .unpackAny == !0) return jr(e.message, n.message, t);
    for (const r of e.fields)
        if (!bt(r, e, n, t)) return !1;
    return !(t ? .unknown == !0 && !Hr(e, n, t.registry) || t ? .extensions == !0 && !zr(e, n, t))
}

function bt(e, n, t, r) {
    if (!n.isSet(e) && !t.isSet(e)) return !0;
    if (!n.isSet(e) || !t.isSet(e)) return !1;
    switch (e.fieldKind) {
        case "scalar":
            return F(e.scalar, n.get(e), t.get(e));
        case "enum":
            return n.get(e) === t.get(e);
        case "message":
            return Z(n.get(e), t.get(e), r);
        case "map":
            {
                const a = n.get(e),
                    s = t.get(e),
                    o = [];
                for (const u of a.keys()) {
                    if (!s.has(u)) return !1;
                    o.push(u)
                }
                for (const u of s.keys())
                    if (!a.has(u)) return !1;
                for (const u of o) {
                    const c = a.get(u),
                        l = s.get(u);
                    if (c !== l) switch (e.mapKind) {
                        case "enum":
                            return !1;
                        case "message":
                            if (!Z(c, l, r)) return !1;
                            break;
                        case "scalar":
                            if (!F(e.scalar, c, l)) return !1
                    }
                }
                break
            }
        case "list":
            {
                const a = n.get(e),
                    s = t.get(e);
                if (a.size != s.size) return !1;
                for (let o = 0; o < a.size; o++) {
                    const u = a.get(o),
                        c = s.get(o);
                    if (u !== c) switch (e.listKind) {
                        case "enum":
                            return !1;
                        case "message":
                            if (!Z(u, c, r)) return !1;
                            break;
                        case "scalar":
                            if (!F(e.scalar, u, c)) return !1
                    }
                }
                break
            }
    }
    return !0
}

function jr(e, n, t) {
    if (e.typeUrl !== n.typeUrl) return !1;
    const r = Ne(e, t.registry),
        a = Ne(n, t.registry);
    if (r && a) {
        const s = t.registry.getMessage(r.$typeName);
        if (s) return Zr(s, r, a, t)
    }
    return F(i.BYTES, e.value, n.value)
}

function Hr(e, n, t) {
    function r(o, u) {
        var c;
        const l = (c = o.getUnknown()) !== null && c !== void 0 ? c : [];
        return u ? l.filter(m => !u.getExtensionFor(o.desc, m.no)) : l
    }
    const a = r(e, t),
        s = r(n, t);
    if (a.length != s.length) return !1;
    for (let o = 0; o < a.length; o++) {
        const u = a[o],
            c = s[o];
        if (u.no != c.no || u.wireType != c.wireType || !F(i.BYTES, u.data, c.data)) return !1
    }
    return !0
}

function zr(e, n, t) {
    function r(o, u) {
        var c;
        return ((c = o.getUnknown()) !== null && c !== void 0 ? c : []).map(l => u.getExtensionFor(o.desc, l.no)).filter(l => l != null).filter((l, m, b) => b.indexOf(l) === m)
    }
    const a = r(e, t.registry),
        s = r(n, t.registry);
    if (a.length != s.length || a.some(o => !s.includes(o))) return !1;
    for (const o of a) {
        const [u, c] = k(o, Q(e.message, o)), [l] = k(o, Q(n.message, o));
        if (!bt(c, u, l, t)) return !1
    }
    return !0
}
var Qr = 3,
    qr = 2,
    kn = {
        alwaysEmitImplicit: !1,
        enumAsInteger: !1,
        useProtoFieldName: !1
    };

function ea(e) {
    return e ? Object.assign(Object.assign({}, kn), e) : kn
}

function na(e, n, t) {
    return M(N(e, n), ea(t))
}

function ka(e, n, t) {
    var r;
    const a = na(e, n, t);
    return JSON.stringify(a, null, (r = t ? .prettySpaces) !== null && r !== void 0 ? r : 0)
}

function M(e, n) {
    var t;
    const r = sa(e, n);
    if (r !== void 0) return r;
    const a = {};
    for (const s of e.sortedFields) {
        if (!e.isSet(s)) {
            if (s.presence == Qr) throw new Error(`cannot encode ${s} to JSON: required field not set`);
            if (!n.alwaysEmitImplicit || s.presence !== qr) continue
        }
        const o = An(s, e.get(s), n);
        o !== void 0 && (a[aa(s, n)] = o)
    }
    if (n.registry) {
        const s = new Set;
        for (const {
                no: o
            } of (t = e.getUnknown()) !== null && t !== void 0 ? t : [])
            if (!s.has(o)) {
                s.add(o);
                const u = n.registry.getExtensionFor(e.desc, o);
                if (!u) continue;
                const c = Q(e.message, u),
                    [l, m] = k(u, c),
                    b = An(m, l.get(m), n);
                b !== void 0 && (a[u.jsonName] = b)
            }
    }
    return a
}

function An(e, n, t) {
    switch (e.fieldKind) {
        case "scalar":
            return ne(e, n);
        case "message":
            return M(n, t);
        case "enum":
            return Ye(e.enum, n, t.enumAsInteger);
        case "list":
            return ra(n, t);
        case "map":
            return ta(n, t)
    }
}

function ta(e, n) {
    const t = e.field(),
        r = {};
    switch (t.mapKind) {
        case "scalar":
            for (const [a, s] of e) r[a] = ne(t, s);
            break;
        case "message":
            for (const [a, s] of e) r[a] = M(s, n);
            break;
        case "enum":
            for (const [a, s] of e) r[a] = Ye(t.enum, s, n.enumAsInteger)
    }
    return n.alwaysEmitImplicit || e.size > 0 ? r : void 0
}

function ra(e, n) {
    const t = e.field(),
        r = [];
    switch (t.listKind) {
        case "scalar":
            for (const a of e) r.push(ne(t, a));
            break;
        case "enum":
            for (const a of e) r.push(Ye(t.enum, a, n.enumAsInteger));
            break;
        case "message":
            for (const a of e) r.push(M(a, n))
    }
    return n.alwaysEmitImplicit || r.length > 0 ? r : void 0
}

function Ye(e, n, t) {
    var r;
    if (typeof n != "number") throw new Error(`cannot encode ${e} to JSON: expected number, got ${p(n)}`);
    if (e.typeName == "google.protobuf.NullValue") return null;
    if (t) return n;
    const a = e.value[n];
    return (r = a ? .name) !== null && r !== void 0 ? r : n
}

function ne(e, n) {
    var t, r, a, s, o, u;
    switch (e.scalar) {
        case i.INT32:
        case i.SFIXED32:
        case i.SINT32:
        case i.FIXED32:
        case i.UINT32:
            if (typeof n != "number") throw new Error(`cannot encode ${e} to JSON: ${(t=O(e,n))===null||t===void 0?void 0:t.message}`);
            return n;
        case i.FLOAT:
        case i.DOUBLE:
            if (typeof n != "number") throw new Error(`cannot encode ${e} to JSON: ${(r=O(e,n))===null||r===void 0?void 0:r.message}`);
            return Number.isNaN(n) ? "NaN" : n === Number.POSITIVE_INFINITY ? "Infinity" : n === Number.NEGATIVE_INFINITY ? "-Infinity" : n;
        case i.STRING:
            if (typeof n != "string") throw new Error(`cannot encode ${e} to JSON: ${(a=O(e,n))===null||a===void 0?void 0:a.message}`);
            return n;
        case i.BOOL:
            if (typeof n != "boolean") throw new Error(`cannot encode ${e} to JSON: ${(s=O(e,n))===null||s===void 0?void 0:s.message}`);
            return n;
        case i.UINT64:
        case i.FIXED64:
        case i.INT64:
        case i.SFIXED64:
        case i.SINT64:
            if (typeof n != "bigint" && typeof n != "string") throw new Error(`cannot encode ${e} to JSON: ${(o=O(e,n))===null||o===void 0?void 0:o.message}`);
            return n.toString();
        case i.BYTES:
            if (n instanceof Uint8Array) return Ct(n);
            throw new Error(`cannot encode ${e} to JSON: ${(u=O(e,n))===null||u===void 0?void 0:u.message}`)
    }
}

function aa(e, n) {
    return n.useProtoFieldName ? e.name : e.jsonName
}

function sa(e, n) {
    if (e.desc.typeName.startsWith("google.protobuf.")) switch (e.desc.typeName) {
        case "google.protobuf.Any":
            return oa(e.message, n);
        case "google.protobuf.Timestamp":
            return ca(e.message);
        case "google.protobuf.Duration":
            return ia(e.message);
        case "google.protobuf.FieldMask":
            return ua(e.message);
        case "google.protobuf.Struct":
            return dt(e.message);
        case "google.protobuf.Value":
            return Pe(e.message);
        case "google.protobuf.ListValue":
            return pt(e.message);
        default:
            if (x(e.desc)) {
                const t = e.desc.fields[0];
                return ne(t, e.get(t))
            }
            return
    }
}

function oa(e, n) {
    if (e.typeUrl === "") return {};
    const {
        registry: t
    } = n;
    let r, a;
    if (t && (r = Ne(e, t), r && (a = t.getMessage(r.$typeName))), !a || !r) throw new Error(`cannot encode message ${e.$typeName} to JSON: "${e.typeUrl}" is not in the type registry`);
    let s = M(N(a, r), n);
    return (a.typeName.startsWith("google.protobuf.") || s === null || Array.isArray(s) || typeof s != "object") && (s = {
        value: s
    }), s["@type"] = e.typeUrl, s
}

function ia(e) {
    const n = Number(e.seconds),
        t = e.nanos;
    if (n > 315576e6 || n < -315576e6) throw new Error(`cannot encode message ${e.$typeName} to JSON: value out of range`);
    if (n > 0 && t < 0 || n < 0 && t > 0) throw new Error(`cannot encode message ${e.$typeName} to JSON: nanos sign must match seconds sign`);
    let r = e.seconds.toString();
    if (t !== 0) {
        let a = Math.abs(t).toString();
        a = "0".repeat(9 - a.length) + a, a.substring(3) === "000000" ? a = a.substring(0, 3) : a.substring(6) === "000" && (a = a.substring(0, 6)), r += "." + a, t < 0 && n == 0 && (r = "-" + r)
    }
    return r + "s"
}

function ua(e) {
    return e.paths.map(n => {
        if (n.match(/_[0-9]?_/g) || n.match(/[A-Z]/g)) throw new Error(`cannot encode message ${e.$typeName} to JSON: lowerCamelCase of path name "` + n + '" is irreversible');
        return P(n)
    }).join(",")
}

function dt(e) {
    const n = {};
    for (const [t, r] of Object.entries(e.fields)) n[t] = Pe(r);
    return n
}

function Pe(e) {
    switch (e.kind.case) {
        case "nullValue":
            return null;
        case "numberValue":
            if (!Number.isFinite(e.kind.value)) throw new Error(`${e.$typeName} cannot be NaN or Infinity`);
            return e.kind.value;
        case "boolValue":
            return e.kind.value;
        case "stringValue":
            return e.kind.value;
        case "structValue":
            return dt(e.kind.value);
        case "listValue":
            return pt(e.kind.value);
        default:
            throw new Error(`${e.$typeName} must have a value`)
    }
}

function pt(e) {
    return e.values.map(Pe)
}

function ca(e) {
    const n = Number(e.seconds) * 1e3;
    if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw new Error(`cannot encode message ${e.$typeName} to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`);
    if (e.nanos < 0) throw new Error(`cannot encode message ${e.$typeName} to JSON: nanos must not be negative`);
    if (e.nanos > 999999999) throw new Error(`cannot encode message ${e.$typeName} to JSON: nanos must not be greater than 99999999`);
    let t = "Z";
    if (e.nanos > 0) {
        const r = (e.nanos + 1e9).toString().substring(1);
        r.substring(3) === "000000" ? t = "." + r.substring(0, 3) + "Z" : r.substring(6) === "000" ? t = "." + r.substring(0, 6) + "Z" : t = "." + r + "Z"
    }
    return new Date(n).toISOString().replace(".000Z", t)
}
var Ln = {
    ignoreUnknownFields: !1
};

function la(e) {
    return e ? Object.assign(Object.assign({}, Ln), e) : Ln
}

function Aa(e, n, t) {
    const r = N(e);
    try {
        R(r, n, la(t))
    } catch (a) {
        throw Yt(a) ? new Error(`cannot decode ${a.field()} from JSON: ${a.message}`, {
            cause: a
        }) : a
    }
    return r.message
}

function R(e, n, t) {
    var r;
    if (Na(e, n, t)) return;
    if (n == null || Array.isArray(n) || typeof n != "object") throw new Error(`cannot decode ${e.desc} from JSON: ${p(n)}`);
    const a = new Map,
        s = new Map;
    for (const o of e.desc.fields) s.set(o.name, o).set(o.jsonName, o);
    for (const [o, u] of Object.entries(n)) {
        const c = s.get(o);
        if (c) {
            if (c.oneof) {
                if (u === null && c.fieldKind == "scalar") continue;
                const l = a.get(c.oneof);
                if (l !== void 0) throw new g(c.oneof, `oneof set multiple times by ${l.name} and ${c.name}`);
                a.set(c.oneof, c)
            }
            Dn(e, c, u, t)
        } else {
            let l;
            if (o.startsWith("[") && o.endsWith("]") && (l = (r = t.registry) === null || r === void 0 ? void 0 : r.getExtension(o.substring(1, o.length - 1))) && l.extendee.typeName === e.desc.typeName) {
                const [m, b, I] = k(l);
                Dn(m, b, u, t), Xr(e.message, l, I())
            }
            if (!l && !t.ignoreUnknownFields) throw new Error(`cannot decode ${e.desc} from JSON: key "${o}" is unknown`)
        }
    }
}

function Dn(e, n, t, r) {
    switch (n.fieldKind) {
        case "scalar":
            pa(e, n, t);
            break;
        case "enum":
            da(e, n, t, r);
            break;
        case "message":
            ba(e, n, t, r);
            break;
        case "list":
            fa(e.get(n), t, r);
            break;
        case "map":
            ma(e.get(n), t, r)
    }
}

function ma(e, n, t) {
    if (n === null) return;
    const r = e.field();
    if (typeof n != "object" || Array.isArray(n)) throw new g(r, "expected object, got " + p(n));
    for (const [a, s] of Object.entries(n)) {
        if (s === null) throw new g(r, "map value must not be null");
        let o;
        switch (r.mapKind) {
            case "message":
                const c = N(r.message);
                R(c, s, t), o = c;
                break;
            case "enum":
                if (o = Be(r.enum, s, t.ignoreUnknownFields, !0), o === te) return;
                break;
            case "scalar":
                o = ae(r, s, !0)
        }
        const u = ga(r.mapKey, a);
        e.set(u, o)
    }
}

function fa(e, n, t) {
    if (n === null) return;
    const r = e.field();
    if (!Array.isArray(n)) throw new g(r, "expected Array, got " + p(n));
    for (const a of n) {
        if (a === null) throw new g(r, "list item must not be null");
        switch (r.listKind) {
            case "message":
                const s = N(r.message);
                R(s, a, t), e.add(s);
                break;
            case "enum":
                const o = Be(r.enum, a, t.ignoreUnknownFields, !0);
                o !== te && e.add(o);
                break;
            case "scalar":
                e.add(ae(r, a, !0))
        }
    }
}

function ba(e, n, t, r) {
    if (t === null && n.message.typeName != "google.protobuf.Value") {
        e.clear(n);
        return
    }
    const a = e.isSet(n) ? e.get(n) : N(n.message);
    R(a, t, r), e.set(n, a)
}

function da(e, n, t, r) {
    const a = Be(n.enum, t, r.ignoreUnknownFields, !1);
    a === re ? e.clear(n) : a !== te && e.set(n, a)
}

function pa(e, n, t) {
    const r = ae(n, t, !1);
    r === re ? e.clear(n) : e.set(n, r)
}
var te = Symbol();

function Be(e, n, t, r) {
    if (n === null) return e.typeName == "google.protobuf.NullValue" ? 0 : r ? e.values[0].number : re;
    switch (typeof n) {
        case "number":
            if (Number.isInteger(n)) return n;
            break;
        case "string":
            const a = e.values.find(s => s.name === n);
            if (a !== void 0) return a.number;
            if (t) return te
    }
    throw new Error(`cannot decode ${e} from JSON: ${p(n)}`)
}
var re = Symbol();

function ae(e, n, t) {
    if (n === null) return t ? S(e.scalar, !1) : re;
    switch (e.scalar) {
        case i.DOUBLE:
        case i.FLOAT:
            if (n === "NaN") return NaN;
            if (n === "Infinity") return Number.POSITIVE_INFINITY;
            if (n === "-Infinity") return Number.NEGATIVE_INFINITY;
            if (typeof n == "number") {
                if (Number.isNaN(n)) throw new g(e, "unexpected NaN number");
                if (!Number.isFinite(n)) throw new g(e, "unexpected infinite number");
                break
            }
            if (typeof n == "string") {
                if (n === "" || n.trim().length !== n.length) break;
                const r = Number(n);
                if (!Number.isFinite(r)) break;
                return r
            }
            break;
        case i.INT32:
        case i.FIXED32:
        case i.SFIXED32:
        case i.SINT32:
        case i.UINT32:
            return gt(n);
        case i.BYTES:
            if (typeof n == "string") {
                if (n === "") return new Uint8Array(0);
                try {
                    return Hn(n)
                } catch (r) {
                    const a = r instanceof Error ? r.message : String(r);
                    throw new g(e, a)
                }
            }
    }
    return n
}

function ga(e, n) {
    switch (e) {
        case i.BOOL:
            switch (n) {
                case "true":
                    return !0;
                case "false":
                    return !1
            }
            return n;
        case i.INT32:
        case i.FIXED32:
        case i.UINT32:
        case i.SFIXED32:
        case i.SINT32:
            return gt(n);
        default:
            return n
    }
}

function gt(e) {
    if (typeof e == "string") {
        if (e === "" || e.trim().length !== e.length) return e;
        const n = Number(e);
        return Number.isNaN(n) ? e : n
    }
    return e
}

function Na(e, n, t) {
    if (!e.desc.typeName.startsWith("google.protobuf.")) return !1;
    switch (e.desc.typeName) {
        case "google.protobuf.Any":
            return Ea(e.message, n, t), !0;
        case "google.protobuf.Timestamp":
            return ya(e.message, n), !0;
        case "google.protobuf.Duration":
            return ha(e.message, n), !0;
        case "google.protobuf.FieldMask":
            return Ia(e.message, n), !0;
        case "google.protobuf.Struct":
            return Nt(e.message, n), !0;
        case "google.protobuf.Value":
            return Ge(e.message, n), !0;
        case "google.protobuf.ListValue":
            return Et(e.message, n), !0;
        default:
            if (x(e.desc)) {
                const r = e.desc.fields[0];
                return n === null ? e.clear(r) : e.set(r, ae(r, n, !0)), !0
            }
            return !1
    }
}

function Ea(e, n, t) {
    var r;
    if (n === null || Array.isArray(n) || typeof n != "object") throw new Error(`cannot decode message ${e.$typeName} from JSON: expected object but got ${p(n)}`);
    if (Object.keys(n).length == 0) return;
    const a = n["@type"];
    if (typeof a != "string" || a == "") throw new Error(`cannot decode message ${e.$typeName} from JSON: "@type" is empty`);
    const s = a.includes("/") ? a.substring(a.lastIndexOf("/") + 1) : a;
    if (!s.length) throw new Error(`cannot decode message ${e.$typeName} from JSON: "@type" is invalid`);
    const o = (r = t.registry) === null || r === void 0 ? void 0 : r.getMessage(s);
    if (!o) throw new Error(`cannot decode message ${e.$typeName} from JSON: ${a} is not in the type registry`);
    const u = N(o);
    if (s.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(n, "value")) {
        const c = n.value;
        R(u, c, t)
    } else {
        const c = Object.assign({}, n);
        delete c["@type"], R(u, c, t)
    }
    Gr(u.desc, u.message, e)
}

function ya(e, n) {
    if (typeof n != "string") throw new Error(`cannot decode message ${e.$typeName} from JSON: ${p(n)}`);
    const t = n.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:\.([0-9]{1,9}))?(?:Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (!t) throw new Error(`cannot decode message ${e.$typeName} from JSON: invalid RFC 3339 string`);
    const r = Date.parse(t[1] + "-" + t[2] + "-" + t[3] + "T" + t[4] + ":" + t[5] + ":" + t[6] + (t[8] ? t[8] : "Z"));
    if (Number.isNaN(r)) throw new Error(`cannot decode message ${e.$typeName} from JSON: invalid RFC 3339 string`);
    if (r < Date.parse("0001-01-01T00:00:00Z") || r > Date.parse("9999-12-31T23:59:59Z")) throw new Error(`cannot decode message ${e.$typeName} from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`);
    e.seconds = f.parse(r / 1e3), e.nanos = 0, t[7] && (e.nanos = parseInt("1" + t[7] + "0".repeat(9 - t[7].length)) - 1e9)
}

function ha(e, n) {
    if (typeof n != "string") throw new Error(`cannot decode message ${e.$typeName} from JSON: ${p(n)}`);
    const t = n.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
    if (t === null) throw new Error(`cannot decode message ${e.$typeName} from JSON: ${p(n)}`);
    const r = Number(t[1]);
    if (r > 315576e6 || r < -315576e6) throw new Error(`cannot decode message ${e.$typeName} from JSON: ${p(n)}`);
    if (e.seconds = f.parse(r), typeof t[2] != "string") return;
    const a = t[2] + "0".repeat(9 - t[2].length);
    e.nanos = parseInt(a), (r < 0 || Object.is(r, -0)) && (e.nanos = -e.nanos)
}

function Ia(e, n) {
    if (typeof n != "string") throw new Error(`cannot decode message ${e.$typeName} from JSON: ${p(n)}`);
    if (n === "") return;

    function t(r) {
        if (r.includes("_")) throw new Error(`cannot decode message ${e.$typeName} from JSON: path names must be lowerCamelCase`);
        const a = r.replace(/[A-Z]/g, s => "_" + s.toLowerCase());
        return a[0] === "_" ? a.substring(1) : a
    }
    e.paths = n.split(",").map(t)
}

function Nt(e, n) {
    if (typeof n != "object" || n == null || Array.isArray(n)) throw new Error(`cannot decode message ${e.$typeName} from JSON ${p(n)}`);
    for (const [t, r] of Object.entries(n)) {
        const a = h(mt);
        Ge(a, r), e.fields[t] = a
    }
}

function Ge(e, n) {
    switch (typeof n) {
        case "number":
            e.kind = {
                case: "numberValue",
                value: n
            };
            break;
        case "string":
            e.kind = {
                case: "stringValue",
                value: n
            };
            break;
        case "boolean":
            e.kind = {
                case: "boolValue",
                value: n
            };
            break;
        case "object":
            if (n === null) e.kind = {
                case: "nullValue",
                value: Ee.NULL_VALUE
            };
            else if (Array.isArray(n)) {
                const t = h(Cr);
                Et(t, n), e.kind = {
                    case: "listValue",
                    value: t
                }
            } else {
                const t = h(Kr);
                Nt(t, n), e.kind = {
                    case: "structValue",
                    value: t
                }
            }
            break;
        default:
            throw new Error(`cannot decode message ${e.$typeName} from JSON ${p(n)}`)
    }
    return e
}

function Et(e, n) {
    if (!Array.isArray(n)) throw new Error(`cannot decode message ${e.$typeName} from JSON ${p(n)}`);
    for (const t of n) {
        const r = h(mt);
        Ge(r, t), e.values.push(r)
    }
}

function La(e, n, ...t) {
    if (t.length > 0) throw new Error;
    return e.services[n]
}
export {
    i as C, h as S, kr as _, Zr as a, _r as b, mt as c, Vr as d, wa as f, Ar as g, Dr as h, ka as i, Ve as l, Ta as m, Aa as n, Sa as o, _a as p, na as r, Oa as s, La as t, va as u, ee as v, U as x, at as y
};
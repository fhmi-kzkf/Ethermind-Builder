import {
    o as Wr
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    i as ja,
    n as Ha,
    r as Ja
} from "./vendor-react-Fx2PtaaM.js";
import {
    n as Ka,
    r as Ua
} from "./vendor-sync-store-hJwz-_Wy.js";
try {
    (function() {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new t.Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "c23904e9-a7bc-4325-b0f5-ccdafabe19e1", t._sentryDebugIdIdentifier = "sentry-dbid-c23904e9-a7bc-4325-b0f5-ccdafabe19e1")
    })()
} catch {}

function J(t) {
    this.content = t
}
J.prototype = {
    constructor: J,
    find: function(t) {
        for (var e = 0; e < this.content.length; e += 2)
            if (this.content[e] === t) return e;
        return -1
    },
    get: function(t) {
        var e = this.find(t);
        return e == -1 ? void 0 : this.content[e + 1]
    },
    update: function(t, e, n) {
        var r = n && n != t ? this.remove(n) : this,
            i = r.find(t),
            s = r.content.slice();
        return i == -1 ? s.push(n || t, e) : (s[i + 1] = e, n && (s[i] = n)), new J(s)
    },
    remove: function(t) {
        var e = this.find(t);
        if (e == -1) return this;
        var n = this.content.slice();
        return n.splice(e, 2), new J(n)
    },
    addToStart: function(t, e) {
        return new J([t, e].concat(this.remove(t).content))
    },
    addToEnd: function(t, e) {
        var n = this.remove(t).content.slice();
        return n.push(t, e), new J(n)
    },
    addBefore: function(t, e, n) {
        var r = this.remove(e),
            i = r.content.slice(),
            s = r.find(t);
        return i.splice(s == -1 ? i.length : s, 0, e, n), new J(i)
    },
    forEach: function(t) {
        for (var e = 0; e < this.content.length; e += 2) t(this.content[e], this.content[e + 1])
    },
    prepend: function(t) {
        return t = J.from(t), t.size ? new J(t.content.concat(this.subtract(t).content)) : this
    },
    append: function(t) {
        return t = J.from(t), t.size ? new J(this.subtract(t).content.concat(t.content)) : this
    },
    subtract: function(t) {
        var e = this;
        t = J.from(t);
        for (var n = 0; n < t.content.length; n += 2) e = e.remove(t.content[n]);
        return e
    },
    toObject: function() {
        var t = {};
        return this.forEach(function(e, n) {
            t[e] = n
        }), t
    },
    get size() {
        return this.content.length >> 1
    }
};
J.from = function(t) {
    if (t instanceof J) return t;
    var e = [];
    if (t)
        for (var n in t) e.push(n, t[n]);
    return new J(e)
};

function Ys(t, e, n) {
    for (let r = 0;; r++) {
        if (r == t.childCount || r == e.childCount) return t.childCount == e.childCount ? null : n;
        let i = t.child(r),
            s = e.child(r);
        if (i == s) {
            n += i.nodeSize;
            continue
        }
        if (!i.sameMarkup(s)) return n;
        if (i.isText && i.text != s.text) {
            for (let o = 0; i.text[o] == s.text[o]; o++) n++;
            return n
        }
        if (i.content.size || s.content.size) {
            let o = Ys(i.content, s.content, n + 1);
            if (o != null) return o
        }
        n += i.nodeSize
    }
}

function Xs(t, e, n, r) {
    for (let i = t.childCount, s = e.childCount;;) {
        if (i == 0 || s == 0) return i == s ? null : {
            a: n,
            b: r
        };
        let o = t.child(--i),
            l = e.child(--s),
            a = o.nodeSize;
        if (o == l) {
            n -= a, r -= a;
            continue
        }
        if (!o.sameMarkup(l)) return {
            a: n,
            b: r
        };
        if (o.isText && o.text != l.text) {
            let c = 0,
                u = Math.min(o.text.length, l.text.length);
            for (; c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1];) c++, n--, r--;
            return {
                a: n,
                b: r
            }
        }
        if (o.content.size || l.content.size) {
            let c = Xs(o.content, l.content, n - 1, r - 1);
            if (c) return c
        }
        n -= a, r -= a
    }
}
var v = class ee {
    constructor(e, n) {
        if (this.content = e, this.size = n || 0, n == null)
            for (let r = 0; r < e.length; r++) this.size += e[r].nodeSize
    }
    nodesBetween(e, n, r, i = 0, s) {
        for (let o = 0, l = 0; l < n; o++) {
            let a = this.content[o],
                c = l + a.nodeSize;
            if (c > e && r(a, i + l, s || null, o) !== !1 && a.content.size) {
                let u = l + 1;
                a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, n - u), r, i + u)
            }
            l = c
        }
    }
    descendants(e) {
        this.nodesBetween(0, this.size, e)
    }
    textBetween(e, n, r, i) {
        let s = "",
            o = !0;
        return this.nodesBetween(e, n, (l, a) => {
            let c = l.isText ? l.text.slice(Math.max(e, a) - a, n - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
            l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (o ? o = !1 : s += r), s += c
        }, 0), s
    }
    append(e) {
        if (!e.size) return this;
        if (!this.size) return e;
        let n = this.lastChild,
            r = e.firstChild,
            i = this.content.slice(),
            s = 0;
        for (n.isText && n.sameMarkup(r) && (i[i.length - 1] = n.withText(n.text + r.text), s = 1); s < e.content.length; s++) i.push(e.content[s]);
        return new ee(i, this.size + e.size)
    }
    cut(e, n = this.size) {
        if (e == 0 && n == this.size) return this;
        let r = [],
            i = 0;
        if (n > e)
            for (let s = 0, o = 0; o < n; s++) {
                let l = this.content[s],
                    a = o + l.nodeSize;
                a > e && ((o < e || a > n) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, n - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, n - o - 1))), r.push(l), i += l.nodeSize), o = a
            }
        return new ee(r, i)
    }
    cutByIndex(e, n) {
        return e == n ? ee.empty : e == 0 && n == this.content.length ? this : new ee(this.content.slice(e, n))
    }
    replaceChild(e, n) {
        let r = this.content[e];
        if (r == n) return this;
        let i = this.content.slice(),
            s = this.size + n.nodeSize - r.nodeSize;
        return i[e] = n, new ee(i, s)
    }
    addToStart(e) {
        return new ee([e].concat(this.content), this.size + e.nodeSize)
    }
    addToEnd(e) {
        return new ee(this.content.concat(e), this.size + e.nodeSize)
    }
    eq(e) {
        if (this.content.length != e.content.length) return !1;
        for (let n = 0; n < this.content.length; n++)
            if (!this.content[n].eq(e.content[n])) return !1;
        return !0
    }
    get firstChild() {
        return this.content.length ? this.content[0] : null
    }
    get lastChild() {
        return this.content.length ? this.content[this.content.length - 1] : null
    }
    get childCount() {
        return this.content.length
    }
    child(e) {
        let n = this.content[e];
        if (!n) throw new RangeError("Index " + e + " out of range for " + this);
        return n
    }
    maybeChild(e) {
        return this.content[e] || null
    }
    forEach(e) {
        for (let n = 0, r = 0; n < this.content.length; n++) {
            let i = this.content[n];
            e(i, r, n), r += i.nodeSize
        }
    }
    findDiffStart(e, n = 0) {
        return Ys(this, e, n)
    }
    findDiffEnd(e, n = this.size, r = e.size) {
        return Xs(this, e, n, r)
    }
    findIndex(e) {
        if (e == 0) return sn(0, e);
        if (e == this.size) return sn(this.content.length, e);
        if (e > this.size || e < 0) throw new RangeError(`Position ${e} outside of fragment (${this})`);
        for (let n = 0, r = 0;; n++) {
            let i = this.child(n),
                s = r + i.nodeSize;
            if (s >= e) return s == e ? sn(n + 1, s) : sn(n, r);
            r = s
        }
    }
    toString() {
        return "<" + this.toStringInner() + ">"
    }
    toStringInner() {
        return this.content.join(", ")
    }
    toJSON() {
        return this.content.length ? this.content.map(e => e.toJSON()) : null
    }
    static fromJSON(e, n) {
        if (!n) return ee.empty;
        if (!Array.isArray(n)) throw new RangeError("Invalid input for Fragment.fromJSON");
        return new ee(n.map(e.nodeFromJSON))
    }
    static fromArray(e) {
        if (!e.length) return ee.empty;
        let n, r = 0;
        for (let i = 0; i < e.length; i++) {
            let s = e[i];
            r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (n || (n = e.slice(0, i)), n[n.length - 1] = s.withText(n[n.length - 1].text + s.text)) : n && n.push(s)
        }
        return new ee(n || e, r)
    }
    static from(e) {
        if (!e) return ee.empty;
        if (e instanceof ee) return e;
        if (Array.isArray(e)) return this.fromArray(e);
        if (e.attrs) return new ee([e], e.nodeSize);
        throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""))
    }
};
v.empty = new v([], 0);
var Yn = {
    index: 0,
    offset: 0
};

function sn(t, e) {
    return Yn.index = t, Yn.offset = e, Yn
}

function Sn(t, e) {
    if (t === e) return !0;
    if (!(t && typeof t == "object") || !(e && typeof e == "object")) return !1;
    let n = Array.isArray(t);
    if (Array.isArray(e) != n) return !1;
    if (n) {
        if (t.length != e.length) return !1;
        for (let r = 0; r < t.length; r++)
            if (!Sn(t[r], e[r])) return !1
    } else {
        for (let r in t)
            if (!(r in e) || !Sn(t[r], e[r])) return !1;
        for (let r in e)
            if (!(r in t)) return !1
    }
    return !0
}
var B = class mr {
    constructor(e, n) {
        this.type = e, this.attrs = n
    }
    addToSet(e) {
        let n, r = !1;
        for (let i = 0; i < e.length; i++) {
            let s = e[i];
            if (this.eq(s)) return e;
            if (this.type.excludes(s.type)) n || (n = e.slice(0, i));
            else {
                if (s.type.excludes(this.type)) return e;
                !r && s.type.rank > this.type.rank && (n || (n = e.slice(0, i)), n.push(this), r = !0), n && n.push(s)
            }
        }
        return n || (n = e.slice()), r || n.push(this), n
    }
    removeFromSet(e) {
        for (let n = 0; n < e.length; n++)
            if (this.eq(e[n])) return e.slice(0, n).concat(e.slice(n + 1));
        return e
    }
    isInSet(e) {
        for (let n = 0; n < e.length; n++)
            if (this.eq(e[n])) return !0;
        return !1
    }
    eq(e) {
        return this == e || this.type == e.type && Sn(this.attrs, e.attrs)
    }
    toJSON() {
        let e = {
            type: this.type.name
        };
        for (let n in this.attrs) {
            e.attrs = this.attrs;
            break
        }
        return e
    }
    static fromJSON(e, n) {
        if (!n) throw new RangeError("Invalid input for Mark.fromJSON");
        let r = e.marks[n.type];
        if (!r) throw new RangeError(`There is no mark type ${n.type} in this schema`);
        let i = r.create(n.attrs);
        return r.checkAttrs(i.attrs), i
    }
    static sameSet(e, n) {
        if (e == n) return !0;
        if (e.length != n.length) return !1;
        for (let r = 0; r < e.length; r++)
            if (!e[r].eq(n[r])) return !1;
        return !0
    }
    static setFrom(e) {
        if (!e || Array.isArray(e) && e.length == 0) return mr.none;
        if (e instanceof mr) return [e];
        let n = e.slice();
        return n.sort((r, i) => r.type.rank - i.type.rank), n
    }
};
B.none = [];
var xn = class extends Error {},
    k = class rt {
        constructor(e, n, r) {
            this.content = e, this.openStart = n, this.openEnd = r
        }
        get size() {
            return this.content.size - this.openStart - this.openEnd
        }
        insertAt(e, n) {
            let r = Qs(this.content, e + this.openStart, n);
            return r && new rt(r, this.openStart, this.openEnd)
        }
        removeBetween(e, n) {
            return new rt(Zs(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd)
        }
        eq(e) {
            return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd
        }
        toString() {
            return this.content + "(" + this.openStart + "," + this.openEnd + ")"
        }
        toJSON() {
            if (!this.content.size) return null;
            let e = {
                content: this.content.toJSON()
            };
            return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e
        }
        static fromJSON(e, n) {
            if (!n) return rt.empty;
            let r = n.openStart || 0,
                i = n.openEnd || 0;
            if (typeof r != "number" || typeof i != "number") throw new RangeError("Invalid input for Slice.fromJSON");
            return new rt(v.fromJSON(e, n.content), r, i)
        }
        static maxOpen(e, n = !0) {
            let r = 0,
                i = 0;
            for (let s = e.firstChild; s && !s.isLeaf && (n || !s.type.spec.isolating); s = s.firstChild) r++;
            for (let s = e.lastChild; s && !s.isLeaf && (n || !s.type.spec.isolating); s = s.lastChild) i++;
            return new rt(e, r, i)
        }
    };
k.empty = new k(v.empty, 0, 0);

function Zs(t, e, n) {
    let {
        index: r,
        offset: i
    } = t.findIndex(e), s = t.maybeChild(r), {
        index: o,
        offset: l
    } = t.findIndex(n);
    if (i == e || s.isText) {
        if (l != n && !t.child(o).isText) throw new RangeError("Removing non-flat range");
        return t.cut(0, e).append(t.cut(n))
    }
    if (r != o) throw new RangeError("Removing non-flat range");
    return t.replaceChild(r, s.copy(Zs(s.content, e - i - 1, n - i - 1)))
}

function Qs(t, e, n, r) {
    let {
        index: i,
        offset: s
    } = t.findIndex(e), o = t.maybeChild(i);
    if (s == e || o.isText) return r && !r.canReplace(i, i, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
    let l = Qs(o.content, e - s - 1, n, o);
    return l && t.replaceChild(i, o.copy(l))
}

function Ga(t, e, n) {
    if (n.openStart > t.depth) throw new xn("Inserted content deeper than insertion position");
    if (t.depth - n.openStart != e.depth - n.openEnd) throw new xn("Inconsistent open depths");
    return eo(t, e, n, 0)
}

function eo(t, e, n, r) {
    let i = t.index(r),
        s = t.node(r);
    if (i == e.index(r) && r < t.depth - n.openStart) {
        let o = eo(t, e, n, r + 1);
        return s.copy(s.content.replaceChild(i, o))
    } else if (n.content.size)
        if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
            let o = t.parent,
                l = o.content;
            return Ke(o, l.cut(0, t.parentOffset).append(n.content).append(l.cut(e.parentOffset)))
        } else {
            let {
                start: o,
                end: l
            } = Ya(n, t);
            return Ke(s, no(t, o, l, e, r))
        }
    else return Ke(s, kn(t, e, r))
}

function to(t, e) {
    if (!e.type.compatibleContent(t.type)) throw new xn("Cannot join " + e.type.name + " onto " + t.type.name)
}

function gr(t, e, n) {
    let r = t.node(n);
    return to(r, e.node(n)), r
}

function Je(t, e) {
    let n = e.length - 1;
    n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t)
}

function Bt(t, e, n, r) {
    let i = (e || t).node(n),
        s = 0,
        o = e ? e.index(n) : i.childCount;
    t && (s = t.index(n), t.depth > n ? s++ : t.textOffset && (Je(t.nodeAfter, r), s++));
    for (let l = s; l < o; l++) Je(i.child(l), r);
    e && e.depth == n && e.textOffset && Je(e.nodeBefore, r)
}

function Ke(t, e) {
    return t.type.checkContent(e), t.copy(e)
}

function no(t, e, n, r, i) {
    let s = t.depth > i && gr(t, e, i + 1),
        o = r.depth > i && gr(n, r, i + 1),
        l = [];
    return Bt(null, t, i, l), s && o && e.index(i) == n.index(i) ? (to(s, o), Je(Ke(s, no(t, e, n, r, i + 1)), l)) : (s && Je(Ke(s, kn(t, e, i + 1)), l), Bt(e, n, i, l), o && Je(Ke(o, kn(n, r, i + 1)), l)), Bt(r, null, i, l), new v(l)
}

function kn(t, e, n) {
    let r = [];
    return Bt(null, t, n, r), t.depth > n && Je(Ke(gr(t, e, n + 1), kn(t, e, n + 1)), r), Bt(e, null, n, r), new v(r)
}

function Ya(t, e) {
    let n = e.depth - t.openStart,
        r = e.node(n).copy(t.content);
    for (let i = n - 1; i >= 0; i--) r = e.node(i).copy(v.from(r));
    return {
        start: r.resolveNoCache(t.openStart + n),
        end: r.resolveNoCache(r.content.size - t.openEnd - n)
    }
}
var xi = class yr {
        constructor(e, n, r) {
            this.pos = e, this.path = n, this.parentOffset = r, this.depth = n.length / 3 - 1
        }
        resolveDepth(e) {
            return e == null ? this.depth : e < 0 ? this.depth + e : e
        }
        get parent() {
            return this.node(this.depth)
        }
        get doc() {
            return this.node(0)
        }
        node(e) {
            return this.path[this.resolveDepth(e) * 3]
        }
        index(e) {
            return this.path[this.resolveDepth(e) * 3 + 1]
        }
        indexAfter(e) {
            return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1)
        }
        start(e) {
            return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1
        }
        end(e) {
            return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size
        }
        before(e) {
            if (e = this.resolveDepth(e), !e) throw new RangeError("There is no position before the top-level node");
            return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1]
        }
        after(e) {
            if (e = this.resolveDepth(e), !e) throw new RangeError("There is no position after the top-level node");
            return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize
        }
        get textOffset() {
            return this.pos - this.path[this.path.length - 1]
        }
        get nodeAfter() {
            let e = this.parent,
                n = this.index(this.depth);
            if (n == e.childCount) return null;
            let r = this.pos - this.path[this.path.length - 1],
                i = e.child(n);
            return r ? e.child(n).cut(r) : i
        }
        get nodeBefore() {
            let e = this.index(this.depth),
                n = this.pos - this.path[this.path.length - 1];
            return n ? this.parent.child(e).cut(0, n) : e == 0 ? null : this.parent.child(e - 1)
        }
        posAtIndex(e, n) {
            n = this.resolveDepth(n);
            let r = this.path[n * 3],
                i = n == 0 ? 0 : this.path[n * 3 - 1] + 1;
            for (let s = 0; s < e; s++) i += r.child(s).nodeSize;
            return i
        }
        marks() {
            let e = this.parent,
                n = this.index();
            if (e.content.size == 0) return B.none;
            if (this.textOffset) return e.child(n).marks;
            let r = e.maybeChild(n - 1),
                i = e.maybeChild(n);
            if (!r) {
                let l = r;
                r = i, i = l
            }
            let s = r.marks;
            for (var o = 0; o < s.length; o++) s[o].type.spec.inclusive === !1 && (!i || !s[o].isInSet(i.marks)) && (s = s[o--].removeFromSet(s));
            return s
        }
        marksAcross(e) {
            let n = this.parent.maybeChild(this.index());
            if (!n || !n.isInline) return null;
            let r = n.marks,
                i = e.parent.maybeChild(e.index());
            for (var s = 0; s < r.length; s++) r[s].type.spec.inclusive === !1 && (!i || !r[s].isInSet(i.marks)) && (r = r[s--].removeFromSet(r));
            return r
        }
        sharedDepth(e) {
            for (let n = this.depth; n > 0; n--)
                if (this.start(n) <= e && this.end(n) >= e) return n;
            return 0
        }
        blockRange(e = this, n) {
            if (e.pos < this.pos) return e.blockRange(this);
            for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
                if (e.pos <= this.end(r) && (!n || n(this.node(r)))) return new wn(this, e, r);
            return null
        }
        sameParent(e) {
            return this.pos - this.parentOffset == e.pos - e.parentOffset
        }
        max(e) {
            return e.pos > this.pos ? e : this
        }
        min(e) {
            return e.pos < this.pos ? e : this
        }
        toString() {
            let e = "";
            for (let n = 1; n <= this.depth; n++) e += (e ? "/" : "") + this.node(n).type.name + "_" + this.index(n - 1);
            return e + ":" + this.parentOffset
        }
        static resolve(e, n) {
            if (!(n >= 0 && n <= e.content.size)) throw new RangeError("Position " + n + " out of range");
            let r = [],
                i = 0,
                s = n;
            for (let o = e;;) {
                let {
                    index: l,
                    offset: a
                } = o.content.findIndex(s), c = s - a;
                if (r.push(o, l, i + a), !c || (o = o.child(l), o.isText)) break;
                s = c - 1, i += a + 1
            }
            return new yr(n, r, s)
        }
        static resolveCached(e, n) {
            let r = ki.get(e);
            if (r)
                for (let s = 0; s < r.elts.length; s++) {
                    let o = r.elts[s];
                    if (o.pos == n) return o
                } else ki.set(e, r = new Xa);
            let i = r.elts[r.i] = yr.resolve(e, n);
            return r.i = (r.i + 1) % Za, i
        }
    },
    Xa = class {
        constructor() {
            this.elts = [], this.i = 0
        }
    },
    Za = 12,
    ki = new WeakMap,
    wn = class {
        constructor(t, e, n) {
            this.$from = t, this.$to = e, this.depth = n
        }
        get start() {
            return this.$from.before(this.depth + 1)
        }
        get end() {
            return this.$to.after(this.depth + 1)
        }
        get parent() {
            return this.$from.node(this.depth)
        }
        get startIndex() {
            return this.$from.index(this.depth)
        }
        get endIndex() {
            return this.$to.indexAfter(this.depth)
        }
    },
    Qa = Object.create(null),
    ye = class br {
        constructor(e, n, r, i = B.none) {
            this.type = e, this.attrs = n, this.marks = i, this.content = r || v.empty
        }
        get children() {
            return this.content.content
        }
        get nodeSize() {
            return this.isLeaf ? 1 : 2 + this.content.size
        }
        get childCount() {
            return this.content.childCount
        }
        child(e) {
            return this.content.child(e)
        }
        maybeChild(e) {
            return this.content.maybeChild(e)
        }
        forEach(e) {
            this.content.forEach(e)
        }
        nodesBetween(e, n, r, i = 0) {
            this.content.nodesBetween(e, n, r, i, this)
        }
        descendants(e) {
            this.nodesBetween(0, this.content.size, e)
        }
        get textContent() {
            return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "")
        }
        textBetween(e, n, r, i) {
            return this.content.textBetween(e, n, r, i)
        }
        get firstChild() {
            return this.content.firstChild
        }
        get lastChild() {
            return this.content.lastChild
        }
        eq(e) {
            return this == e || this.sameMarkup(e) && this.content.eq(e.content)
        }
        sameMarkup(e) {
            return this.hasMarkup(e.type, e.attrs, e.marks)
        }
        hasMarkup(e, n, r) {
            return this.type == e && Sn(this.attrs, n || e.defaultAttrs || Qa) && B.sameSet(this.marks, r || B.none)
        }
        copy(e = null) {
            return e == this.content ? this : new br(this.type, this.attrs, e, this.marks)
        }
        mark(e) {
            return e == this.marks ? this : new br(this.type, this.attrs, this.content, e)
        }
        cut(e, n = this.content.size) {
            return e == 0 && n == this.content.size ? this : this.copy(this.content.cut(e, n))
        }
        slice(e, n = this.content.size, r = !1) {
            if (e == n) return k.empty;
            let i = this.resolve(e),
                s = this.resolve(n),
                o = r ? 0 : i.sharedDepth(n),
                l = i.start(o),
                a = i.node(o).content.cut(i.pos - l, s.pos - l);
            return new k(a, i.depth - o, s.depth - o)
        }
        replace(e, n, r) {
            return Ga(this.resolve(e), this.resolve(n), r)
        }
        nodeAt(e) {
            for (let n = this;;) {
                let {
                    index: r,
                    offset: i
                } = n.content.findIndex(e);
                if (n = n.maybeChild(r), !n) return null;
                if (i == e || n.isText) return n;
                e -= i + 1
            }
        }
        childAfter(e) {
            let {
                index: n,
                offset: r
            } = this.content.findIndex(e);
            return {
                node: this.content.maybeChild(n),
                index: n,
                offset: r
            }
        }
        childBefore(e) {
            if (e == 0) return {
                node: null,
                index: 0,
                offset: 0
            };
            let {
                index: n,
                offset: r
            } = this.content.findIndex(e);
            if (r < e) return {
                node: this.content.child(n),
                index: n,
                offset: r
            };
            let i = this.content.child(n - 1);
            return {
                node: i,
                index: n - 1,
                offset: r - i.nodeSize
            }
        }
        resolve(e) {
            return xi.resolveCached(this, e)
        }
        resolveNoCache(e) {
            return xi.resolve(this, e)
        }
        rangeHasMark(e, n, r) {
            let i = !1;
            return n > e && this.nodesBetween(e, n, s => (r.isInSet(s.marks) && (i = !0), !i)), i
        }
        get isBlock() {
            return this.type.isBlock
        }
        get isTextblock() {
            return this.type.isTextblock
        }
        get inlineContent() {
            return this.type.inlineContent
        }
        get isInline() {
            return this.type.isInline
        }
        get isText() {
            return this.type.isText
        }
        get isLeaf() {
            return this.type.isLeaf
        }
        get isAtom() {
            return this.type.isAtom
        }
        toString() {
            if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
            let e = this.type.name;
            return this.content.size && (e += "(" + this.content.toStringInner() + ")"), ro(this.marks, e)
        }
        contentMatchAt(e) {
            let n = this.type.contentMatch.matchFragment(this.content, 0, e);
            if (!n) throw new Error("Called contentMatchAt on a node with invalid content");
            return n
        }
        canReplace(e, n, r = v.empty, i = 0, s = r.childCount) {
            let o = this.contentMatchAt(e).matchFragment(r, i, s),
                l = o && o.matchFragment(this.content, n);
            if (!l || !l.validEnd) return !1;
            for (let a = i; a < s; a++)
                if (!this.type.allowsMarks(r.child(a).marks)) return !1;
            return !0
        }
        canReplaceWith(e, n, r, i) {
            if (i && !this.type.allowsMarks(i)) return !1;
            let s = this.contentMatchAt(e).matchType(r),
                o = s && s.matchFragment(this.content, n);
            return o ? o.validEnd : !1
        }
        canAppend(e) {
            return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type)
        }
        check() {
            this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
            let e = B.none;
            for (let n = 0; n < this.marks.length; n++) {
                let r = this.marks[n];
                r.type.checkAttrs(r.attrs), e = r.addToSet(e)
            }
            if (!B.sameSet(e, this.marks)) throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map(n=>n.type.name)}`);
            this.content.forEach(n => n.check())
        }
        toJSON() {
            let e = {
                type: this.type.name
            };
            for (let n in this.attrs) {
                e.attrs = this.attrs;
                break
            }
            return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map(n => n.toJSON())), e
        }
        static fromJSON(e, n) {
            if (!n) throw new RangeError("Invalid input for Node.fromJSON");
            let r;
            if (n.marks) {
                if (!Array.isArray(n.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
                r = n.marks.map(e.markFromJSON)
            }
            if (n.type == "text") {
                if (typeof n.text != "string") throw new RangeError("Invalid text node in JSON");
                return e.text(n.text, r)
            }
            let i = v.fromJSON(e, n.content),
                s = e.nodeType(n.type).create(n.attrs, i, r);
            return s.type.checkAttrs(s.attrs), s
        }
    };
ye.prototype.text = void 0;
var ec = class vr extends ye {
    constructor(e, n, r, i) {
        if (super(e, n, null, i), !r) throw new RangeError("Empty text nodes are not allowed");
        this.text = r
    }
    toString() {
        return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : ro(this.marks, JSON.stringify(this.text))
    }
    get textContent() {
        return this.text
    }
    textBetween(e, n) {
        return this.text.slice(e, n)
    }
    get nodeSize() {
        return this.text.length
    }
    mark(e) {
        return e == this.marks ? this : new vr(this.type, this.attrs, this.text, e)
    }
    withText(e) {
        return e == this.text ? this : new vr(this.type, this.attrs, e, this.marks)
    }
    cut(e = 0, n = this.text.length) {
        return e == 0 && n == this.text.length ? this : this.withText(this.text.slice(e, n))
    }
    eq(e) {
        return this.sameMarkup(e) && this.text == e.text
    }
    toJSON() {
        let e = super.toJSON();
        return e.text = this.text, e
    }
};

function ro(t, e) {
    for (let n = t.length - 1; n >= 0; n--) e = t[n].type.name + "(" + e + ")";
    return e
}
var _t = class io {
    constructor(e) {
        this.validEnd = e, this.next = [], this.wrapCache = []
    }
    static parse(e, n) {
        let r = new tc(e, n);
        if (r.next == null) return io.empty;
        let i = so(r);
        r.next && r.err("Unexpected trailing text");
        let s = ac(lc(i));
        return cc(s, r), s
    }
    matchType(e) {
        for (let n = 0; n < this.next.length; n++)
            if (this.next[n].type == e) return this.next[n].next;
        return null
    }
    matchFragment(e, n = 0, r = e.childCount) {
        let i = this;
        for (let s = n; i && s < r; s++) i = i.matchType(e.child(s).type);
        return i
    }
    get inlineContent() {
        return this.next.length != 0 && this.next[0].type.isInline
    }
    get defaultType() {
        for (let e = 0; e < this.next.length; e++) {
            let {
                type: n
            } = this.next[e];
            if (!(n.isText || n.hasRequiredAttrs())) return n
        }
        return null
    }
    compatible(e) {
        for (let n = 0; n < this.next.length; n++)
            for (let r = 0; r < e.next.length; r++)
                if (this.next[n].type == e.next[r].type) return !0;
        return !1
    }
    fillBefore(e, n = !1, r = 0) {
        let i = [this];

        function s(o, l) {
            let a = o.matchFragment(e, r);
            if (a && (!n || a.validEnd)) return v.from(l.map(c => c.createAndFill()));
            for (let c = 0; c < o.next.length; c++) {
                let {
                    type: u,
                    next: d
                } = o.next[c];
                if (!(u.isText || u.hasRequiredAttrs()) && i.indexOf(d) == -1) {
                    i.push(d);
                    let f = s(d, l.concat(u));
                    if (f) return f
                }
            }
            return null
        }
        return s(this, [])
    }
    findWrapping(e) {
        for (let r = 0; r < this.wrapCache.length; r += 2)
            if (this.wrapCache[r] == e) return this.wrapCache[r + 1];
        let n = this.computeWrapping(e);
        return this.wrapCache.push(e, n), n
    }
    computeWrapping(e) {
        let n = Object.create(null),
            r = [{
                match: this,
                type: null,
                via: null
            }];
        for (; r.length;) {
            let i = r.shift(),
                s = i.match;
            if (s.matchType(e)) {
                let o = [];
                for (let l = i; l.type; l = l.via) o.push(l.type);
                return o.reverse()
            }
            for (let o = 0; o < s.next.length; o++) {
                let {
                    type: l,
                    next: a
                } = s.next[o];
                !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in n) && (!i.type || a.validEnd) && (r.push({
                    match: l.contentMatch,
                    type: l,
                    via: i
                }), n[l.name] = !0)
            }
        }
        return null
    }
    get edgeCount() {
        return this.next.length
    }
    edge(e) {
        if (e >= this.next.length) throw new RangeError(`There's no ${e}th edge in this content match`);
        return this.next[e]
    }
    toString() {
        let e = [];

        function n(r) {
            e.push(r);
            for (let i = 0; i < r.next.length; i++) e.indexOf(r.next[i].next) == -1 && n(r.next[i].next)
        }
        return n(this), e.map((r, i) => {
            let s = i + (r.validEnd ? "*" : " ") + " ";
            for (let o = 0; o < r.next.length; o++) s += (o ? ", " : "") + r.next[o].type.name + "->" + e.indexOf(r.next[o].next);
            return s
        }).join(`
`)
    }
};
_t.empty = new _t(!0);
var tc = class {
    constructor(t, e) {
        this.string = t, this.nodeTypes = e, this.inline = null, this.pos = 0, this.tokens = t.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift()
    }
    get next() {
        return this.tokens[this.pos]
    }
    eat(t) {
        return this.next == t && (this.pos++ || !0)
    }
    err(t) {
        throw new SyntaxError(t + " (in content expression '" + this.string + "')")
    }
};

function so(t) {
    let e = [];
    do e.push(nc(t)); while (t.eat("|"));
    return e.length == 1 ? e[0] : {
        type: "choice",
        exprs: e
    }
}

function nc(t) {
    let e = [];
    do e.push(rc(t)); while (t.next && t.next != ")" && t.next != "|");
    return e.length == 1 ? e[0] : {
        type: "seq",
        exprs: e
    }
}

function rc(t) {
    let e = oc(t);
    for (;;)
        if (t.eat("+")) e = {
            type: "plus",
            expr: e
        };
        else if (t.eat("*")) e = {
        type: "star",
        expr: e
    };
    else if (t.eat("?")) e = {
        type: "opt",
        expr: e
    };
    else if (t.eat("{")) e = ic(t, e);
    else break;
    return e
}

function wi(t) {
    /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
    let e = Number(t.next);
    return t.pos++, e
}

function ic(t, e) {
    let n = wi(t),
        r = n;
    return t.eat(",") && (t.next != "}" ? r = wi(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), {
        type: "range",
        min: n,
        max: r,
        expr: e
    }
}

function sc(t, e) {
    let n = t.nodeTypes,
        r = n[e];
    if (r) return [r];
    let i = [];
    for (let s in n) {
        let o = n[s];
        o.isInGroup(e) && i.push(o)
    }
    return i.length == 0 && t.err("No node type or group '" + e + "' found"), i
}

function oc(t) {
    if (t.eat("(")) {
        let e = so(t);
        return t.eat(")") || t.err("Missing closing paren"), e
    } else if (/\W/.test(t.next)) t.err("Unexpected token '" + t.next + "'");
    else {
        let e = sc(t, t.next).map(n => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), {
            type: "name",
            value: n
        }));
        return t.pos++, e.length == 1 ? e[0] : {
            type: "choice",
            exprs: e
        }
    }
}

function lc(t) {
    let e = [
        []
    ];
    return i(s(t, 0), n()), e;

    function n() {
        return e.push([]) - 1
    }

    function r(o, l, a) {
        let c = {
            term: a,
            to: l
        };
        return e[o].push(c), c
    }

    function i(o, l) {
        o.forEach(a => a.to = l)
    }

    function s(o, l) {
        if (o.type == "choice") return o.exprs.reduce((a, c) => a.concat(s(c, l)), []);
        if (o.type == "seq")
            for (let a = 0;; a++) {
                let c = s(o.exprs[a], l);
                if (a == o.exprs.length - 1) return c;
                i(c, l = n())
            } else if (o.type == "star") {
                let a = n();
                return r(l, a), i(s(o.expr, a), a), [r(a)]
            } else if (o.type == "plus") {
            let a = n();
            return i(s(o.expr, l), a), i(s(o.expr, a), a), [r(a)]
        } else {
            if (o.type == "opt") return [r(l)].concat(s(o.expr, l));
            if (o.type == "range") {
                let a = l;
                for (let c = 0; c < o.min; c++) {
                    let u = n();
                    i(s(o.expr, a), u), a = u
                }
                if (o.max == -1) i(s(o.expr, a), a);
                else
                    for (let c = o.min; c < o.max; c++) {
                        let u = n();
                        r(a, u), i(s(o.expr, a), u), a = u
                    }
                return [r(a)]
            } else {
                if (o.type == "name") return [r(l, void 0, o.value)];
                throw new Error("Unknown expr type")
            }
        }
    }
}

function oo(t, e) {
    return e - t
}

function Mi(t, e) {
    let n = [];
    return r(e), n.sort(oo);

    function r(i) {
        let s = t[i];
        if (s.length == 1 && !s[0].term) return r(s[0].to);
        n.push(i);
        for (let o = 0; o < s.length; o++) {
            let {
                term: l,
                to: a
            } = s[o];
            !l && n.indexOf(a) == -1 && r(a)
        }
    }
}

function ac(t) {
    let e = Object.create(null);
    return n(Mi(t, 0));

    function n(r) {
        let i = [];
        r.forEach(o => {
            t[o].forEach(({
                term: l,
                to: a
            }) => {
                if (!l) return;
                let c;
                for (let u = 0; u < i.length; u++) i[u][0] == l && (c = i[u][1]);
                Mi(t, a).forEach(u => {
                    c || i.push([l, c = []]), c.indexOf(u) == -1 && c.push(u)
                })
            })
        });
        let s = e[r.join(",")] = new _t(r.indexOf(t.length - 1) > -1);
        for (let o = 0; o < i.length; o++) {
            let l = i[o][1].sort(oo);
            s.next.push({
                type: i[o][0],
                next: e[l.join(",")] || n(l)
            })
        }
        return s
    }
}

function cc(t, e) {
    for (let n = 0, r = [t]; n < r.length; n++) {
        let i = r[n],
            s = !i.validEnd,
            o = [];
        for (let l = 0; l < i.next.length; l++) {
            let {
                type: a,
                next: c
            } = i.next[l];
            o.push(a.name), s && !(a.isText || a.hasRequiredAttrs()) && (s = !1), r.indexOf(c) == -1 && r.push(c)
        }
        s && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)")
    }
}

function lo(t) {
    let e = Object.create(null);
    for (let n in t) {
        let r = t[n];
        if (!r.hasDefault) return null;
        e[n] = r.default
    }
    return e
}

function ao(t, e) {
    let n = Object.create(null);
    for (let r in t) {
        let i = e && e[r];
        if (i === void 0) {
            let s = t[r];
            if (s.hasDefault) i = s.default;
            else throw new RangeError("No value supplied for attribute " + r)
        }
        n[r] = i
    }
    return n
}

function co(t, e, n, r) {
    for (let i in e)
        if (!(i in t)) throw new RangeError(`Unsupported attribute ${i} for ${n} of type ${i}`);
    for (let i in t) {
        let s = t[i];
        s.validate && s.validate(e[i])
    }
}

function uo(t, e) {
    let n = Object.create(null);
    if (e)
        for (let r in e) n[r] = new dc(t, r, e[r]);
    return n
}
var Ci = class fo {
    constructor(e, n, r) {
        this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = uo(e, r.attrs), this.defaultAttrs = lo(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text"
    }
    get isInline() {
        return !this.isBlock
    }
    get isTextblock() {
        return this.isBlock && this.inlineContent
    }
    get isLeaf() {
        return this.contentMatch == _t.empty
    }
    get isAtom() {
        return this.isLeaf || !!this.spec.atom
    }
    isInGroup(e) {
        return this.groups.indexOf(e) > -1
    }
    get whitespace() {
        return this.spec.whitespace || (this.spec.code ? "pre" : "normal")
    }
    hasRequiredAttrs() {
        for (let e in this.attrs)
            if (this.attrs[e].isRequired) return !0;
        return !1
    }
    compatibleContent(e) {
        return this == e || this.contentMatch.compatible(e.contentMatch)
    }
    computeAttrs(e) {
        return !e && this.defaultAttrs ? this.defaultAttrs : ao(this.attrs, e)
    }
    create(e = null, n, r) {
        if (this.isText) throw new Error("NodeType.create can't construct text nodes");
        return new ye(this, this.computeAttrs(e), v.from(n), B.setFrom(r))
    }
    createChecked(e = null, n, r) {
        return n = v.from(n), this.checkContent(n), new ye(this, this.computeAttrs(e), n, B.setFrom(r))
    }
    createAndFill(e = null, n, r) {
        if (e = this.computeAttrs(e), n = v.from(n), n.size) {
            let o = this.contentMatch.fillBefore(n);
            if (!o) return null;
            n = o.append(n)
        }
        let i = this.contentMatch.matchFragment(n),
            s = i && i.fillBefore(v.empty, !0);
        return s ? new ye(this, e, n.append(s), B.setFrom(r)) : null
    }
    validContent(e) {
        let n = this.contentMatch.matchFragment(e);
        if (!n || !n.validEnd) return !1;
        for (let r = 0; r < e.childCount; r++)
            if (!this.allowsMarks(e.child(r).marks)) return !1;
        return !0
    }
    checkContent(e) {
        if (!this.validContent(e)) throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0,50)}`)
    }
    checkAttrs(e) {
        co(this.attrs, e, "node", this.name)
    }
    allowsMarkType(e) {
        return this.markSet == null || this.markSet.indexOf(e) > -1
    }
    allowsMarks(e) {
        if (this.markSet == null) return !0;
        for (let n = 0; n < e.length; n++)
            if (!this.allowsMarkType(e[n].type)) return !1;
        return !0
    }
    allowedMarks(e) {
        if (this.markSet == null) return e;
        let n;
        for (let r = 0; r < e.length; r++) this.allowsMarkType(e[r].type) ? n && n.push(e[r]) : n || (n = e.slice(0, r));
        return n ? n.length ? n : B.none : e
    }
    static compile(e, n) {
        let r = Object.create(null);
        e.forEach((s, o) => r[s] = new fo(s, n, o));
        let i = n.spec.topNode || "doc";
        if (!r[i]) throw new RangeError("Schema is missing its top node type ('" + i + "')");
        if (!r.text) throw new RangeError("Every schema needs a 'text' type");
        for (let s in r.text.attrs) throw new RangeError("The text node type should not have attributes");
        return r
    }
};

function uc(t, e, n) {
    let r = n.split("|");
    return i => {
        let s = i === null ? "null" : typeof i;
        if (r.indexOf(s) < 0) throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${s}`)
    }
}
var dc = class {
        constructor(t, e, n) {
            this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default"), this.default = n.default, this.validate = typeof n.validate == "string" ? uc(t, e, n.validate) : n.validate
        }
        get isRequired() {
            return !this.hasDefault
        }
    },
    ho = class po {
        constructor(e, n, r, i) {
            this.name = e, this.rank = n, this.schema = r, this.spec = i, this.attrs = uo(e, i.attrs), this.excluded = null;
            let s = lo(this.attrs);
            this.instance = s ? new B(this, s) : null
        }
        create(e = null) {
            return !e && this.instance ? this.instance : new B(this, ao(this.attrs, e))
        }
        static compile(e, n) {
            let r = Object.create(null),
                i = 0;
            return e.forEach((s, o) => r[s] = new po(s, i++, n, o)), r
        }
        removeFromSet(e) {
            for (var n = 0; n < e.length; n++) e[n].type == this && (e = e.slice(0, n).concat(e.slice(n + 1)), n--);
            return e
        }
        isInSet(e) {
            for (let n = 0; n < e.length; n++)
                if (e[n].type == this) return e[n]
        }
        checkAttrs(e) {
            co(this.attrs, e, "mark", this.name)
        }
        excludes(e) {
            return this.excluded.indexOf(e) > -1
        }
    },
    mo = class {
        constructor(t) {
            this.linebreakReplacement = null, this.cached = Object.create(null);
            let e = this.spec = {};
            for (let r in t) e[r] = t[r];
            e.nodes = J.from(t.nodes), e.marks = J.from(t.marks || {}), this.nodes = Ci.compile(this.spec.nodes, this), this.marks = ho.compile(this.spec.marks, this);
            let n = Object.create(null);
            for (let r in this.nodes) {
                if (r in this.marks) throw new RangeError(r + " can not be both a node and a mark");
                let i = this.nodes[r],
                    s = i.spec.content || "",
                    o = i.spec.marks;
                if (i.contentMatch = n[s] || (n[s] = _t.parse(s, this.nodes)), i.inlineContent = i.contentMatch.inlineContent, i.spec.linebreakReplacement) {
                    if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
                    if (!i.isInline || !i.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
                    this.linebreakReplacement = i
                }
                i.markSet = o == "_" ? null : o ? Ei(this, o.split(" ")) : o == "" || !i.inlineContent ? [] : null
            }
            for (let r in this.marks) {
                let i = this.marks[r],
                    s = i.spec.excludes;
                i.excluded = s == null ? [i] : s == "" ? [] : Ei(this, s.split(" "))
            }
            this.nodeFromJSON = r => ye.fromJSON(this, r), this.markFromJSON = r => B.fromJSON(this, r), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = Object.create(null)
        }
        node(t, e = null, n, r) {
            if (typeof t == "string") t = this.nodeType(t);
            else if (t instanceof Ci) {
                if (t.schema != this) throw new RangeError("Node type from different schema used (" + t.name + ")")
            } else throw new RangeError("Invalid node type: " + t);
            return t.createChecked(e, n, r)
        }
        text(t, e) {
            let n = this.nodes.text;
            return new ec(n, n.defaultAttrs, t, B.setFrom(e))
        }
        mark(t, e) {
            return typeof t == "string" && (t = this.marks[t]), t.create(e)
        }
        nodeType(t) {
            let e = this.nodes[t];
            if (!e) throw new RangeError("Unknown node type: " + t);
            return e
        }
    };

function Ei(t, e) {
    let n = [];
    for (let r = 0; r < e.length; r++) {
        let i = e[r],
            s = t.marks[i],
            o = s;
        if (s) n.push(s);
        else
            for (let l in t.marks) {
                let a = t.marks[l];
                (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && n.push(o = a)
            }
        if (!o) throw new SyntaxError("Unknown mark type: '" + e[r] + "'")
    }
    return n
}

function fc(t) {
    return t.tag != null
}

function hc(t) {
    return t.style != null
}
var ct = class Sr {
        constructor(e, n) {
            this.schema = e, this.rules = n, this.tags = [], this.styles = [];
            let r = this.matchedStyles = [];
            n.forEach(i => {
                if (fc(i)) this.tags.push(i);
                else if (hc(i)) {
                    let s = /[^=]*/.exec(i.style)[0];
                    r.indexOf(s) < 0 && r.push(s), this.styles.push(i)
                }
            }), this.normalizeLists = !this.tags.some(i => {
                if (!/^(ul|ol)\b/.test(i.tag) || !i.node) return !1;
                let s = e.nodes[i.node];
                return s.contentMatch.matchType(s)
            })
        }
        parse(e, n = {}) {
            let r = new Ni(this, n, !1);
            return r.addAll(e, B.none, n.from, n.to), r.finish()
        }
        parseSlice(e, n = {}) {
            let r = new Ni(this, n, !0);
            return r.addAll(e, B.none, n.from, n.to), k.maxOpen(r.finish())
        }
        matchTag(e, n, r) {
            for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
                let s = this.tags[i];
                if (gc(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || n.matchesContext(s.context))) {
                    if (s.getAttrs) {
                        let o = s.getAttrs(e);
                        if (o === !1) continue;
                        s.attrs = o || void 0
                    }
                    return s
                }
            }
        }
        matchStyle(e, n, r, i) {
            for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
                let o = this.styles[s],
                    l = o.style;
                if (!(l.indexOf(e) != 0 || o.context && !r.matchesContext(o.context) || l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != n))) {
                    if (o.getAttrs) {
                        let a = o.getAttrs(n);
                        if (a === !1) continue;
                        o.attrs = a || void 0
                    }
                    return o
                }
            }
        }
        static schemaRules(e) {
            let n = [];

            function r(i) {
                let s = i.priority == null ? 50 : i.priority,
                    o = 0;
                for (; o < n.length; o++) {
                    let l = n[o];
                    if ((l.priority == null ? 50 : l.priority) < s) break
                }
                n.splice(o, 0, i)
            }
            for (let i in e.marks) {
                let s = e.marks[i].spec.parseDOM;
                s && s.forEach(o => {
                    r(o = Oi(o)), o.mark || o.ignore || o.clearMark || (o.mark = i)
                })
            }
            for (let i in e.nodes) {
                let s = e.nodes[i].spec.parseDOM;
                s && s.forEach(o => {
                    r(o = Oi(o)), o.node || o.ignore || o.mark || (o.node = i)
                })
            }
            return n
        }
        static fromSchema(e) {
            return e.cached.domParser || (e.cached.domParser = new Sr(e, Sr.schemaRules(e)))
        }
    },
    go = {
        address: !0,
        article: !0,
        aside: !0,
        blockquote: !0,
        canvas: !0,
        dd: !0,
        div: !0,
        dl: !0,
        fieldset: !0,
        figcaption: !0,
        figure: !0,
        footer: !0,
        form: !0,
        h1: !0,
        h2: !0,
        h3: !0,
        h4: !0,
        h5: !0,
        h6: !0,
        header: !0,
        hgroup: !0,
        hr: !0,
        li: !0,
        noscript: !0,
        ol: !0,
        output: !0,
        p: !0,
        pre: !0,
        section: !0,
        table: !0,
        tfoot: !0,
        ul: !0
    },
    pc = {
        head: !0,
        noscript: !0,
        object: !0,
        script: !0,
        style: !0,
        title: !0
    },
    yo = {
        ol: !0,
        ul: !0
    },
    Mn = 1,
    bo = 2,
    hn = 4;

function Ti(t, e, n) {
    return e != null ? (e ? Mn : 0) | (e === "full" ? bo : 0) : t && t.whitespace == "pre" ? 3 : n & -5
}
var on = class {
        constructor(t, e, n, r, i, s) {
            this.type = t, this.attrs = e, this.marks = n, this.solid = r, this.options = s, this.content = [], this.activeMarks = B.none, this.match = i || (s & hn ? null : t.contentMatch)
        }
        findWrapping(t) {
            if (!this.match) {
                if (!this.type) return [];
                let e = this.type.contentMatch.fillBefore(v.from(t));
                if (e) this.match = this.type.contentMatch.matchFragment(e);
                else {
                    let n = this.type.contentMatch,
                        r;
                    return (r = n.findWrapping(t.type)) ? (this.match = n, r) : null
                }
            }
            return this.match.findWrapping(t.type)
        }
        finish(t) {
            if (!(this.options & Mn)) {
                let n = this.content[this.content.length - 1],
                    r;
                if (n && n.isText && (r = /[ \t\r\n\u000c]+$/.exec(n.text))) {
                    let i = n;
                    n.text.length == r[0].length ? this.content.pop() : this.content[this.content.length - 1] = i.withText(i.text.slice(0, i.text.length - r[0].length))
                }
            }
            let e = v.from(this.content);
            return !t && this.match && (e = e.append(this.match.fillBefore(v.empty, !0))), this.type ? this.type.create(this.attrs, e, this.marks) : e
        }
        inlineContext(t) {
            return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : t.parentNode && !go.hasOwnProperty(t.parentNode.nodeName.toLowerCase())
        }
    },
    Ni = class {
        constructor(t, e, n) {
            this.parser = t, this.options = e, this.isOpen = n, this.open = 0, this.localPreserveWS = !1;
            let r = e.topNode,
                i, s = Ti(null, e.preserveWhitespace, 0) | (n ? hn : 0);
            r ? i = new on(r.type, r.attrs, B.none, !0, e.topMatch || r.type.contentMatch, s) : n ? i = new on(null, null, B.none, !0, null, s) : i = new on(t.schema.topNodeType, null, B.none, !0, null, s), this.nodes = [i], this.find = e.findPositions, this.needsBlock = !1
        }
        get top() {
            return this.nodes[this.open]
        }
        addDOM(t, e) {
            t.nodeType == 3 ? this.addTextNode(t, e) : t.nodeType == 1 && this.addElement(t, e)
        }
        addTextNode(t, e) {
            let n = t.nodeValue,
                r = this.top,
                i = r.options & bo ? "full" : this.localPreserveWS || (r.options & Mn) > 0,
                {
                    schema: s
                } = this.parser;
            if (i === "full" || r.inlineContext(t) || /[^ \t\r\n\u000c]/.test(n)) {
                if (i)
                    if (i === "full") n = n.replace(/\r\n?/g, `
`);
                    else if (s.linebreakReplacement && /[\r\n]/.test(n) && this.top.findWrapping(s.linebreakReplacement.create())) {
                    let o = n.split(/\r?\n|\r/);
                    for (let l = 0; l < o.length; l++) l && this.insertNode(s.linebreakReplacement.create(), e, !0), o[l] && this.insertNode(s.text(o[l]), e, !/\S/.test(o[l]));
                    n = ""
                } else n = n.replace(/\r?\n|\r/g, " ");
                else if (n = n.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1) {
                    let o = r.content[r.content.length - 1],
                        l = t.previousSibling;
                    (!o || l && l.nodeName == "BR" || o.isText && /[ \t\r\n\u000c]$/.test(o.text)) && (n = n.slice(1))
                }
                n && this.insertNode(s.text(n), e, !/\S/.test(n)), this.findInText(t)
            } else this.findInside(t)
        }
        addElement(t, e, n) {
            let r = this.localPreserveWS,
                i = this.top;
            (t.tagName == "PRE" || /pre/.test(t.style && t.style.whiteSpace)) && (this.localPreserveWS = !0);
            let s = t.nodeName.toLowerCase(),
                o;
            yo.hasOwnProperty(s) && this.parser.normalizeLists && mc(t);
            let l = this.options.ruleFromNode && this.options.ruleFromNode(t) || (o = this.parser.matchTag(t, this, n));
            e: if (l ? l.ignore : pc.hasOwnProperty(s)) this.findInside(t), this.ignoreFallback(t, e);
                else
            if (!l || l.skip || l.closeParent) {
                l && l.closeParent ? this.open = Math.max(0, this.open - 1) : l && l.skip.nodeType && (t = l.skip);
                let a, c = this.needsBlock;
                if (go.hasOwnProperty(s)) i.content.length && i.content[0].isInline && this.open && (this.open--, i = this.top), a = !0, i.type || (this.needsBlock = !0);
                else if (!t.firstChild) {
                    this.leafFallback(t, e);
                    break e
                }
                let u = l && l.skip ? e : this.readStyles(t, e);
                u && this.addAll(t, u), a && this.sync(i), this.needsBlock = c
            } else {
                let a = this.readStyles(t, e);
                a && this.addElementByRule(t, l, a, l.consuming === !1 ? o : void 0)
            }
            this.localPreserveWS = r
        }
        leafFallback(t, e) {
            t.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(t.ownerDocument.createTextNode(`
`), e)
        }
        ignoreFallback(t, e) {
            t.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), e, !0)
        }
        readStyles(t, e) {
            let n = t.style;
            if (n && n.length)
                for (let r = 0; r < this.parser.matchedStyles.length; r++) {
                    let i = this.parser.matchedStyles[r],
                        s = n.getPropertyValue(i);
                    if (s)
                        for (let o = void 0;;) {
                            let l = this.parser.matchStyle(i, s, this, o);
                            if (!l) break;
                            if (l.ignore) return null;
                            if (l.clearMark ? e = e.filter(a => !l.clearMark(a)) : e = e.concat(this.parser.schema.marks[l.mark].create(l.attrs)), l.consuming === !1) o = l;
                            else break
                        }
                }
            return e
        }
        addElementByRule(t, e, n, r) {
            let i, s;
            if (e.node)
                if (s = this.parser.schema.nodes[e.node], s.isLeaf) this.insertNode(s.create(e.attrs), n, t.nodeName == "BR") || this.leafFallback(t, n);
                else {
                    let l = this.enter(s, e.attrs || null, n, e.preserveWhitespace);
                    l && (i = !0, n = l)
                }
            else {
                let l = this.parser.schema.marks[e.mark];
                n = n.concat(l.create(e.attrs))
            }
            let o = this.top;
            if (s && s.isLeaf) this.findInside(t);
            else if (r) this.addElement(t, n, r);
            else if (e.getContent) this.findInside(t), e.getContent(t, this.parser.schema).forEach(l => this.insertNode(l, n, !1));
            else {
                let l = t;
                typeof e.contentElement == "string" ? l = t.querySelector(e.contentElement) : typeof e.contentElement == "function" ? l = e.contentElement(t) : e.contentElement && (l = e.contentElement), this.findAround(t, l, !0), this.addAll(l, n), this.findAround(t, l, !1)
            }
            i && this.sync(o) && this.open--
        }
        addAll(t, e, n, r) {
            let i = n || 0;
            for (let s = n ? t.childNodes[n] : t.firstChild, o = r == null ? null : t.childNodes[r]; s != o; s = s.nextSibling, ++i) this.findAtPoint(t, i), this.addDOM(s, e);
            this.findAtPoint(t, i)
        }
        findPlace(t, e, n) {
            let r, i;
            for (let s = this.open, o = 0; s >= 0; s--) {
                let l = this.nodes[s],
                    a = l.findWrapping(t);
                if (a && (!r || r.length > a.length + o) && (r = a, i = l, !a.length)) break;
                if (l.solid) {
                    if (n) break;
                    o += 2
                }
            }
            if (!r) return null;
            this.sync(i);
            for (let s = 0; s < r.length; s++) e = this.enterInner(r[s], null, e, !1);
            return e
        }
        insertNode(t, e, n) {
            if (t.isInline && this.needsBlock && !this.top.type) {
                let i = this.textblockFromContext();
                i && (e = this.enterInner(i, null, e))
            }
            let r = this.findPlace(t, e, n);
            if (r) {
                this.closeExtra();
                let i = this.top;
                i.match && (i.match = i.match.matchType(t.type));
                let s = B.none;
                for (let o of r.concat(t.marks))(i.type ? i.type.allowsMarkType(o.type) : Di(o.type, t.type)) && (s = o.addToSet(s));
                return i.content.push(t.mark(s)), !0
            }
            return !1
        }
        enter(t, e, n, r) {
            let i = this.findPlace(t.create(e), n, !1);
            return i && (i = this.enterInner(t, e, n, !0, r)), i
        }
        enterInner(t, e, n, r = !1, i) {
            this.closeExtra();
            let s = this.top;
            s.match = s.match && s.match.matchType(t);
            let o = Ti(t, i, s.options);
            s.options & hn && s.content.length == 0 && (o |= hn);
            let l = B.none;
            return n = n.filter(a => (s.type ? s.type.allowsMarkType(a.type) : Di(a.type, t)) ? (l = a.addToSet(l), !1) : !0), this.nodes.push(new on(t, e, l, r, null, o)), this.open++, n
        }
        closeExtra(t = !1) {
            let e = this.nodes.length - 1;
            if (e > this.open) {
                for (; e > this.open; e--) this.nodes[e - 1].content.push(this.nodes[e].finish(t));
                this.nodes.length = this.open + 1
            }
        }
        finish() {
            return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen))
        }
        sync(t) {
            for (let e = this.open; e >= 0; e--) {
                if (this.nodes[e] == t) return this.open = e, !0;
                this.localPreserveWS && (this.nodes[e].options |= Mn)
            }
            return !1
        }
        get currentPos() {
            this.closeExtra();
            let t = 0;
            for (let e = this.open; e >= 0; e--) {
                let n = this.nodes[e].content;
                for (let r = n.length - 1; r >= 0; r--) t += n[r].nodeSize;
                e && t++
            }
            return t
        }
        findAtPoint(t, e) {
            if (this.find)
                for (let n = 0; n < this.find.length; n++) this.find[n].node == t && this.find[n].offset == e && (this.find[n].pos = this.currentPos)
        }
        findInside(t) {
            if (this.find)
                for (let e = 0; e < this.find.length; e++) this.find[e].pos == null && t.nodeType == 1 && t.contains(this.find[e].node) && (this.find[e].pos = this.currentPos)
        }
        findAround(t, e, n) {
            if (t != e && this.find)
                for (let r = 0; r < this.find.length; r++) this.find[r].pos == null && t.nodeType == 1 && t.contains(this.find[r].node) && e.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) && (this.find[r].pos = this.currentPos)
        }
        findInText(t) {
            if (this.find)
                for (let e = 0; e < this.find.length; e++) this.find[e].node == t && (this.find[e].pos = this.currentPos - (t.nodeValue.length - this.find[e].offset))
        }
        matchesContext(t) {
            if (t.indexOf("|") > -1) return t.split(/\s*\|\s*/).some(this.matchesContext, this);
            let e = t.split("/"),
                n = this.options.context,
                r = !this.isOpen && (!n || n.parent.type == this.nodes[0].type),
                i = -(n ? n.depth + 1 : 0) + (r ? 0 : 1),
                s = (o, l) => {
                    for (; o >= 0; o--) {
                        let a = e[o];
                        if (a == "") {
                            if (o == e.length - 1 || o == 0) continue;
                            for (; l >= i; l--)
                                if (s(o - 1, l)) return !0;
                            return !1
                        } else {
                            let c = l > 0 || l == 0 && r ? this.nodes[l].type : n && l >= i ? n.node(l - i).type : null;
                            if (!c || c.name != a && !c.isInGroup(a)) return !1;
                            l--
                        }
                    }
                    return !0
                };
            return s(e.length - 1, this.open)
        }
        textblockFromContext() {
            let t = this.options.context;
            if (t)
                for (let e = t.depth; e >= 0; e--) {
                    let n = t.node(e).contentMatchAt(t.indexAfter(e)).defaultType;
                    if (n && n.isTextblock && n.defaultAttrs) return n
                }
            for (let e in this.parser.schema.nodes) {
                let n = this.parser.schema.nodes[e];
                if (n.isTextblock && n.defaultAttrs) return n
            }
        }
    };

function mc(t) {
    for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
        let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
        r && yo.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null)
    }
}

function gc(t, e) {
    return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e)
}

function Oi(t) {
    let e = {};
    for (let n in t) e[n] = t[n];
    return e
}

function Di(t, e) {
    let n = e.schema.nodes;
    for (let r in n) {
        let i = n[r];
        if (!i.allowsMarkType(t)) continue;
        let s = [],
            o = l => {
                s.push(l);
                for (let a = 0; a < l.edgeCount; a++) {
                    let {
                        type: c,
                        next: u
                    } = l.edge(a);
                    if (c == e || s.indexOf(u) < 0 && o(u)) return !0
                }
            };
        if (o(i.contentMatch)) return !0
    }
}
var Xt = class vo {
    constructor(e, n) {
        this.nodes = e, this.marks = n
    }
    serializeFragment(e, n = {}, r) {
        r || (r = Xn(n).createDocumentFragment());
        let i = r,
            s = [];
        return e.forEach(o => {
            if (s.length || o.marks.length) {
                let l = 0,
                    a = 0;
                for (; l < s.length && a < o.marks.length;) {
                    let c = o.marks[a];
                    if (!this.marks[c.type.name]) {
                        a++;
                        continue
                    }
                    if (!c.eq(s[l][0]) || c.type.spec.spanning === !1) break;
                    l++, a++
                }
                for (; l < s.length;) i = s.pop()[1];
                for (; a < o.marks.length;) {
                    let c = o.marks[a++],
                        u = this.serializeMark(c, o.isInline, n);
                    u && (s.push([c, i]), i.appendChild(u.dom), i = u.contentDOM || u.dom)
                }
            }
            i.appendChild(this.serializeNodeInner(o, n))
        }), r
    }
    serializeNodeInner(e, n) {
        let {
            dom: r,
            contentDOM: i
        } = pn(Xn(n), this.nodes[e.type.name](e), null, e.attrs);
        if (i) {
            if (e.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
            this.serializeFragment(e.content, n, i)
        }
        return r
    }
    serializeNode(e, n = {}) {
        let r = this.serializeNodeInner(e, n);
        for (let i = e.marks.length - 1; i >= 0; i--) {
            let s = this.serializeMark(e.marks[i], e.isInline, n);
            s && ((s.contentDOM || s.dom).appendChild(r), r = s.dom)
        }
        return r
    }
    serializeMark(e, n, r = {}) {
        let i = this.marks[e.type.name];
        return i && pn(Xn(r), i(e, n), null, e.attrs)
    }
    static renderSpec(e, n, r = null, i) {
        return pn(e, n, r, i)
    }
    static fromSchema(e) {
        return e.cached.domSerializer || (e.cached.domSerializer = new vo(this.nodesFromSchema(e), this.marksFromSchema(e)))
    }
    static nodesFromSchema(e) {
        let n = Ai(e.nodes);
        return n.text || (n.text = r => r.text), n
    }
    static marksFromSchema(e) {
        return Ai(e.marks)
    }
};

function Ai(t) {
    let e = {};
    for (let n in t) {
        let r = t[n].spec.toDOM;
        r && (e[n] = r)
    }
    return e
}

function Xn(t) {
    return t.document || window.document
}
var Ri = new WeakMap;

function yc(t) {
    let e = Ri.get(t);
    return e === void 0 && Ri.set(t, e = bc(t)), e
}

function bc(t) {
    let e = null;

    function n(r) {
        if (r && typeof r == "object")
            if (Array.isArray(r))
                if (typeof r[0] == "string") e || (e = []), e.push(r);
                else
                    for (let i = 0; i < r.length; i++) n(r[i]);
        else
            for (let i in r) n(r[i])
    }
    return n(t), e
}

function pn(t, e, n, r) {
    if (typeof e == "string") return {
        dom: t.createTextNode(e)
    };
    if (e.nodeType != null) return {
        dom: e
    };
    if (e.dom && e.dom.nodeType != null) return e;
    let i = e[0],
        s;
    if (typeof i != "string") throw new RangeError("Invalid array passed to renderSpec");
    if (r && (s = yc(r)) && s.indexOf(e) > -1) throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
    let o = i.indexOf(" ");
    o > 0 && (n = i.slice(0, o), i = i.slice(o + 1));
    let l, a = n ? t.createElementNS(n, i) : t.createElement(i),
        c = e[1],
        u = 1;
    if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
        u = 2;
        for (let d in c)
            if (c[d] != null) {
                let f = d.indexOf(" ");
                f > 0 ? a.setAttributeNS(d.slice(0, f), d.slice(f + 1), c[d]) : d == "style" && a.style ? a.style.cssText = c[d] : a.setAttribute(d, c[d])
            }
    }
    for (let d = u; d < e.length; d++) {
        let f = e[d];
        if (f === 0) {
            if (d < e.length - 1 || d > u) throw new RangeError("Content hole must be the only child of its parent node");
            return {
                dom: a,
                contentDOM: a
            }
        } else {
            let {
                dom: h,
                contentDOM: p
            } = pn(t, f, n, r);
            if (a.appendChild(h), p) {
                if (l) throw new RangeError("Multiple content holes");
                l = p
            }
        }
    }
    return {
        dom: a,
        contentDOM: l
    }
}
var So = 65535,
    xo = Math.pow(2, 16);

function vc(t, e) {
    return t + e * xo
}

function Ii(t) {
    return t & So
}

function Sc(t) {
    return (t - (t & So)) / xo
}
var xc = 1,
    kc = 2,
    ko = 4,
    wo = 8,
    xr = class {
        constructor(t, e, n) {
            this.pos = t, this.delInfo = e, this.recover = n
        }
        get deleted() {
            return (this.delInfo & wo) > 0
        }
        get deletedBefore() {
            return (this.delInfo & 5) > 0
        }
        get deletedAfter() {
            return (this.delInfo & 6) > 0
        }
        get deletedAcross() {
            return (this.delInfo & ko) > 0
        }
    },
    Ye = class it {
        constructor(e, n = !1) {
            if (this.ranges = e, this.inverted = n, !e.length && it.empty) return it.empty
        }
        recover(e) {
            let n = 0,
                r = Ii(e);
            if (!this.inverted)
                for (let i = 0; i < r; i++) n += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
            return this.ranges[r * 3] + n + Sc(e)
        }
        mapResult(e, n = 1) {
            return this._map(e, n, !1)
        }
        map(e, n = 1) {
            return this._map(e, n, !0)
        }
        _map(e, n, r) {
            let i = 0,
                s = this.inverted ? 2 : 1,
                o = this.inverted ? 1 : 2;
            for (let l = 0; l < this.ranges.length; l += 3) {
                let a = this.ranges[l] - (this.inverted ? i : 0);
                if (a > e) break;
                let c = this.ranges[l + s],
                    u = this.ranges[l + o],
                    d = a + c;
                if (e <= d) {
                    let f = c ? e == a ? -1 : e == d ? 1 : n : n,
                        h = a + i + (f < 0 ? 0 : u);
                    if (r) return h;
                    let p = e == (n < 0 ? a : d) ? null : vc(l / 3, e - a),
                        m = e == a ? kc : e == d ? xc : ko;
                    return (n < 0 ? e != a : e != d) && (m |= wo), new xr(h, m, p)
                }
                i += u - c
            }
            return r ? e + i : new xr(e + i, 0, null)
        }
        touches(e, n) {
            let r = 0,
                i = Ii(n),
                s = this.inverted ? 2 : 1,
                o = this.inverted ? 1 : 2;
            for (let l = 0; l < this.ranges.length; l += 3) {
                let a = this.ranges[l] - (this.inverted ? r : 0);
                if (a > e) break;
                let c = this.ranges[l + s];
                if (e <= a + c && l == i * 3) return !0;
                r += this.ranges[l + o] - c
            }
            return !1
        }
        forEach(e) {
            let n = this.inverted ? 2 : 1,
                r = this.inverted ? 1 : 2;
            for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
                let o = this.ranges[i],
                    l = o - (this.inverted ? s : 0),
                    a = o + (this.inverted ? 0 : s),
                    c = this.ranges[i + n],
                    u = this.ranges[i + r];
                e(l, l + c, a, a + u), s += u - c
            }
        }
        invert() {
            return new it(this.ranges, !this.inverted)
        }
        toString() {
            return (this.inverted ? "-" : "") + JSON.stringify(this.ranges)
        }
        static offset(e) {
            return e == 0 ? it.empty : new it(e < 0 ? [0, -e, 0] : [0, 0, e])
        }
    };
Ye.empty = new Ye([]);
var Mo = class kr {
        constructor(e, n, r = 0, i = e ? e.length : 0) {
            this.mirror = n, this.from = r, this.to = i, this._maps = e || [], this.ownData = !(e || n)
        }
        get maps() {
            return this._maps
        }
        slice(e = 0, n = this.maps.length) {
            return new kr(this._maps, this.mirror, e, n)
        }
        appendMap(e, n) {
            this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), n != null && this.setMirror(this._maps.length - 1, n)
        }
        appendMapping(e) {
            for (let n = 0, r = this._maps.length; n < e._maps.length; n++) {
                let i = e.getMirror(n);
                this.appendMap(e._maps[n], i != null && i < n ? r + i : void 0)
            }
        }
        getMirror(e) {
            if (this.mirror) {
                for (let n = 0; n < this.mirror.length; n++)
                    if (this.mirror[n] == e) return this.mirror[n + (n % 2 ? -1 : 1)]
            }
        }
        setMirror(e, n) {
            this.mirror || (this.mirror = []), this.mirror.push(e, n)
        }
        appendMappingInverted(e) {
            for (let n = e.maps.length - 1, r = this._maps.length + e._maps.length; n >= 0; n--) {
                let i = e.getMirror(n);
                this.appendMap(e._maps[n].invert(), i != null && i > n ? r - i - 1 : void 0)
            }
        }
        invert() {
            let e = new kr;
            return e.appendMappingInverted(this), e
        }
        map(e, n = 1) {
            if (this.mirror) return this._map(e, n, !0);
            for (let r = this.from; r < this.to; r++) e = this._maps[r].map(e, n);
            return e
        }
        mapResult(e, n = 1) {
            return this._map(e, n, !1)
        }
        _map(e, n, r) {
            let i = 0;
            for (let s = this.from; s < this.to; s++) {
                let o = this._maps[s].mapResult(e, n);
                if (o.recover != null) {
                    let l = this.getMirror(s);
                    if (l != null && l > s && l < this.to) {
                        s = l, e = this._maps[l].recover(o.recover);
                        continue
                    }
                }
                i |= o.delInfo, e = o.pos
            }
            return r ? e : new xr(e, i, null)
        }
    },
    Zn = Object.create(null),
    Z = class {
        getMap() {
            return Ye.empty
        }
        merge(t) {
            return null
        }
        static fromJSON(t, e) {
            if (!e || !e.stepType) throw new RangeError("Invalid input for Step.fromJSON");
            let n = Zn[e.stepType];
            if (!n) throw new RangeError(`No step type ${e.stepType} defined`);
            return n.fromJSON(t, e)
        }
        static jsonID(t, e) {
            if (t in Zn) throw new RangeError("Duplicate use of step JSON ID " + t);
            return Zn[t] = e, e.prototype.jsonID = t, e
        }
    },
    te = class wt {
        constructor(e, n) {
            this.doc = e, this.failed = n
        }
        static ok(e) {
            return new wt(e, null)
        }
        static fail(e) {
            return new wt(null, e)
        }
        static fromReplace(e, n, r, i) {
            try {
                return wt.ok(e.replace(n, r, i))
            } catch (s) {
                if (s instanceof xn) return wt.fail(s.message);
                throw s
            }
        }
    };

function jr(t, e, n) {
    let r = [];
    for (let i = 0; i < t.childCount; i++) {
        let s = t.child(i);
        s.content.size && (s = s.copy(jr(s.content, e, s))), s.isInline && (s = e(s, n, i)), r.push(s)
    }
    return v.fromArray(r)
}
var Hr = class Mt extends Z {
    constructor(e, n, r) {
        super(), this.from = e, this.to = n, this.mark = r
    }
    apply(e) {
        let n = e.slice(this.from, this.to),
            r = e.resolve(this.from),
            i = r.node(r.sharedDepth(this.to)),
            s = new k(jr(n.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), n.openStart, n.openEnd);
        return te.fromReplace(e, this.from, this.to, s)
    }
    invert() {
        return new yt(this.from, this.to, this.mark)
    }
    map(e) {
        let n = e.mapResult(this.from, 1),
            r = e.mapResult(this.to, -1);
        return n.deleted && r.deleted || n.pos >= r.pos ? null : new Mt(n.pos, r.pos, this.mark)
    }
    merge(e) {
        return e instanceof Mt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Mt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null
    }
    toJSON() {
        return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        }
    }
    static fromJSON(e, n) {
        if (typeof n.from != "number" || typeof n.to != "number") throw new RangeError("Invalid input for AddMarkStep.fromJSON");
        return new Mt(n.from, n.to, e.markFromJSON(n.mark))
    }
};
Z.jsonID("addMark", Hr);
var yt = class Ct extends Z {
    constructor(e, n, r) {
        super(), this.from = e, this.to = n, this.mark = r
    }
    apply(e) {
        let n = e.slice(this.from, this.to),
            r = new k(jr(n.content, i => i.mark(this.mark.removeFromSet(i.marks)), e), n.openStart, n.openEnd);
        return te.fromReplace(e, this.from, this.to, r)
    }
    invert() {
        return new Hr(this.from, this.to, this.mark)
    }
    map(e) {
        let n = e.mapResult(this.from, 1),
            r = e.mapResult(this.to, -1);
        return n.deleted && r.deleted || n.pos >= r.pos ? null : new Ct(n.pos, r.pos, this.mark)
    }
    merge(e) {
        return e instanceof Ct && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Ct(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null
    }
    toJSON() {
        return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        }
    }
    static fromJSON(e, n) {
        if (typeof n.from != "number" || typeof n.to != "number") throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
        return new Ct(n.from, n.to, e.markFromJSON(n.mark))
    }
};
Z.jsonID("removeMark", yt);
var Jr = class Et extends Z {
    constructor(e, n) {
        super(), this.pos = e, this.mark = n
    }
    apply(e) {
        let n = e.nodeAt(this.pos);
        if (!n) return te.fail("No node at mark step's position");
        let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
        return te.fromReplace(e, this.pos, this.pos + 1, new k(v.from(r), 0, n.isLeaf ? 0 : 1))
    }
    invert(e) {
        let n = e.nodeAt(this.pos);
        if (n) {
            let r = this.mark.addToSet(n.marks);
            if (r.length == n.marks.length) {
                for (let i = 0; i < n.marks.length; i++)
                    if (!n.marks[i].isInSet(r)) return new Et(this.pos, n.marks[i]);
                return new Et(this.pos, this.mark)
            }
        }
        return new Cn(this.pos, this.mark)
    }
    map(e) {
        let n = e.mapResult(this.pos, 1);
        return n.deletedAfter ? null : new Et(n.pos, this.mark)
    }
    toJSON() {
        return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        }
    }
    static fromJSON(e, n) {
        if (typeof n.pos != "number") throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
        return new Et(n.pos, e.markFromJSON(n.mark))
    }
};
Z.jsonID("addNodeMark", Jr);
var Cn = class wr extends Z {
    constructor(e, n) {
        super(), this.pos = e, this.mark = n
    }
    apply(e) {
        let n = e.nodeAt(this.pos);
        if (!n) return te.fail("No node at mark step's position");
        let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
        return te.fromReplace(e, this.pos, this.pos + 1, new k(v.from(r), 0, n.isLeaf ? 0 : 1))
    }
    invert(e) {
        let n = e.nodeAt(this.pos);
        return !n || !this.mark.isInSet(n.marks) ? this : new Jr(this.pos, this.mark)
    }
    map(e) {
        let n = e.mapResult(this.pos, 1);
        return n.deletedAfter ? null : new wr(n.pos, this.mark)
    }
    toJSON() {
        return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        }
    }
    static fromJSON(e, n) {
        if (typeof n.pos != "number") throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
        return new wr(n.pos, e.markFromJSON(n.mark))
    }
};
Z.jsonID("removeNodeMark", Cn);
var me = class qe extends Z {
    constructor(e, n, r, i = !1) {
        super(), this.from = e, this.to = n, this.slice = r, this.structure = i
    }
    apply(e) {
        return this.structure && Mr(e, this.from, this.to) ? te.fail("Structure replace would overwrite content") : te.fromReplace(e, this.from, this.to, this.slice)
    }
    getMap() {
        return new Ye([this.from, this.to - this.from, this.slice.size])
    }
    invert(e) {
        return new qe(this.from, this.from + this.slice.size, e.slice(this.from, this.to))
    }
    map(e) {
        let n = e.mapResult(this.from, 1),
            r = e.mapResult(this.to, -1);
        return n.deletedAcross && r.deletedAcross ? null : new qe(n.pos, Math.max(n.pos, r.pos), this.slice, this.structure)
    }
    merge(e) {
        if (!(e instanceof qe) || e.structure || this.structure) return null;
        if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
            let n = this.slice.size + e.slice.size == 0 ? k.empty : new k(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
            return new qe(this.from, this.to + (e.to - e.from), n, this.structure)
        } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
            let n = this.slice.size + e.slice.size == 0 ? k.empty : new k(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
            return new qe(e.from, this.to, n, this.structure)
        } else return null
    }
    toJSON() {
        let e = {
            stepType: "replace",
            from: this.from,
            to: this.to
        };
        return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e
    }
    static fromJSON(e, n) {
        if (typeof n.from != "number" || typeof n.to != "number") throw new RangeError("Invalid input for ReplaceStep.fromJSON");
        return new qe(n.from, n.to, k.fromJSON(e, n.slice), !!n.structure)
    }
};
Z.jsonID("replace", me);
var le = class mn extends Z {
    constructor(e, n, r, i, s, o, l = !1) {
        super(), this.from = e, this.to = n, this.gapFrom = r, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l
    }
    apply(e) {
        if (this.structure && (Mr(e, this.from, this.gapFrom) || Mr(e, this.gapTo, this.to))) return te.fail("Structure gap-replace would overwrite content");
        let n = e.slice(this.gapFrom, this.gapTo);
        if (n.openStart || n.openEnd) return te.fail("Gap is not a flat range");
        let r = this.slice.insertAt(this.insert, n.content);
        return r ? te.fromReplace(e, this.from, this.to, r) : te.fail("Content does not fit in gap")
    }
    getMap() {
        return new Ye([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert])
    }
    invert(e) {
        let n = this.gapTo - this.gapFrom;
        return new mn(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure)
    }
    map(e) {
        let n = e.mapResult(this.from, 1),
            r = e.mapResult(this.to, -1),
            i = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1),
            s = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
        return n.deletedAcross && r.deletedAcross || i < n.pos || s > r.pos ? null : new mn(n.pos, r.pos, i, s, this.slice, this.insert, this.structure)
    }
    toJSON() {
        let e = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert
        };
        return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e
    }
    static fromJSON(e, n) {
        if (typeof n.from != "number" || typeof n.to != "number" || typeof n.gapFrom != "number" || typeof n.gapTo != "number" || typeof n.insert != "number") throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
        return new mn(n.from, n.to, n.gapFrom, n.gapTo, k.fromJSON(e, n.slice), n.insert, !!n.structure)
    }
};
Z.jsonID("replaceAround", le);

function Mr(t, e, n) {
    let r = t.resolve(e),
        i = n - e,
        s = r.depth;
    for (; i > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount;) s--, i--;
    if (i > 0) {
        let o = r.node(s).maybeChild(r.indexAfter(s));
        for (; i > 0;) {
            if (!o || o.isLeaf) return !0;
            o = o.firstChild, i--
        }
    }
    return !1
}

function wc(t, e, n, r) {
    let i = [],
        s = [],
        o, l;
    t.doc.nodesBetween(e, n, (a, c, u) => {
        if (!a.isInline) return;
        let d = a.marks;
        if (!r.isInSet(d) && u.type.allowsMarkType(r.type)) {
            let f = Math.max(c, e),
                h = Math.min(c + a.nodeSize, n),
                p = r.addToSet(d);
            for (let m = 0; m < d.length; m++) d[m].isInSet(p) || (o && o.to == f && o.mark.eq(d[m]) ? o.to = h : i.push(o = new yt(f, h, d[m])));
            l && l.to == f ? l.to = h : s.push(l = new Hr(f, h, r))
        }
    }), i.forEach(a => t.step(a)), s.forEach(a => t.step(a))
}

function Mc(t, e, n, r) {
    let i = [],
        s = 0;
    t.doc.nodesBetween(e, n, (o, l) => {
        if (!o.isInline) return;
        s++;
        let a = null;
        if (r instanceof ho) {
            let c = o.marks,
                u;
            for (; u = r.isInSet(c);)(a || (a = [])).push(u), c = u.removeFromSet(c)
        } else r ? r.isInSet(o.marks) && (a = [r]) : a = o.marks;
        if (a && a.length) {
            let c = Math.min(l + o.nodeSize, n);
            for (let u = 0; u < a.length; u++) {
                let d = a[u],
                    f;
                for (let h = 0; h < i.length; h++) {
                    let p = i[h];
                    p.step == s - 1 && d.eq(i[h].style) && (f = p)
                }
                f ? (f.to = c, f.step = s) : i.push({
                    style: d,
                    from: Math.max(l, e),
                    to: c,
                    step: s
                })
            }
        }
    }), i.forEach(o => t.step(new yt(o.from, o.to, o.style)))
}

function Kr(t, e, n, r = n.contentMatch, i = !0) {
    let s = t.doc.nodeAt(e),
        o = [],
        l = e + 1;
    for (let a = 0; a < s.childCount; a++) {
        let c = s.child(a),
            u = l + c.nodeSize,
            d = r.matchType(c.type);
        if (!d) o.push(new me(l, u, k.empty));
        else {
            r = d;
            for (let f = 0; f < c.marks.length; f++) n.allowsMarkType(c.marks[f].type) || t.step(new yt(l, u, c.marks[f]));
            if (i && c.isText && n.whitespace != "pre") {
                let f, h = /\r?\n|\r/g,
                    p;
                for (; f = h.exec(c.text);) p || (p = new k(v.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0)), o.push(new me(l + f.index, l + f.index + f[0].length, p))
            }
        }
        l = u
    }
    if (!r.validEnd) {
        let a = r.fillBefore(v.empty, !0);
        t.replace(l, l, new k(a, 0, 0))
    }
    for (let a = o.length - 1; a >= 0; a--) t.step(o[a])
}

function Cc(t, e, n) {
    return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n))
}

function bt(t) {
    let e = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
    for (let n = t.depth, r = 0, i = 0;; --n) {
        let s = t.$from.node(n),
            o = t.$from.index(n) + r,
            l = t.$to.indexAfter(n) - i;
        if (n < t.depth && s.canReplace(o, l, e)) return n;
        if (n == 0 || s.type.spec.isolating || !Cc(s, o, l)) break;
        o && (r = 1), l < s.childCount && (i = 1)
    }
    return null
}

function Ec(t, e, n) {
    let {
        $from: r,
        $to: i,
        depth: s
    } = e, o = r.before(s + 1), l = i.after(s + 1), a = o, c = l, u = v.empty, d = 0;
    for (let p = s, m = !1; p > n; p--) m || r.index(p) > 0 ? (m = !0, u = v.from(r.node(p).copy(u)), d++) : a--;
    let f = v.empty,
        h = 0;
    for (let p = s, m = !1; p > n; p--) m || i.after(p + 1) < i.end(p) ? (m = !0, f = v.from(i.node(p).copy(f)), h++) : c++;
    t.step(new le(a, c, o, l, new k(u.append(f), d, h), u.size - d, !0))
}

function Ur(t, e, n = null, r = t) {
    let i = Tc(t, e),
        s = i && Nc(r, e);
    return s ? i.map(Pi).concat({
        type: e,
        attrs: n
    }).concat(s.map(Pi)) : null
}

function Pi(t) {
    return {
        type: t,
        attrs: null
    }
}

function Tc(t, e) {
    let {
        parent: n,
        startIndex: r,
        endIndex: i
    } = t, s = n.contentMatchAt(r).findWrapping(e);
    if (!s) return null;
    let o = s.length ? s[0] : e;
    return n.canReplaceWith(r, i, o) ? s : null
}

function Nc(t, e) {
    let {
        parent: n,
        startIndex: r,
        endIndex: i
    } = t, s = n.child(r), o = e.contentMatch.findWrapping(s.type);
    if (!o) return null;
    let l = (o.length ? o[o.length - 1] : e).contentMatch;
    for (let a = r; l && a < i; a++) l = l.matchType(n.child(a).type);
    return !l || !l.validEnd ? null : o
}

function Oc(t, e, n) {
    let r = v.empty;
    for (let o = n.length - 1; o >= 0; o--) {
        if (r.size) {
            let l = n[o].type.contentMatch.matchFragment(r);
            if (!l || !l.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper")
        }
        r = v.from(n[o].type.create(n[o].attrs, r))
    }
    let i = e.start,
        s = e.end;
    t.step(new le(i, s, i, s, new k(r, 0, 0), n.length, !0))
}

function Dc(t, e, n, r, i) {
    if (!r.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
    let s = t.steps.length;
    t.doc.nodesBetween(e, n, (o, l) => {
        let a = typeof i == "function" ? i(o) : i;
        if (o.isTextblock && !o.hasMarkup(r, a) && Ac(t.doc, t.mapping.slice(s).map(l), r)) {
            let c = null;
            if (r.schema.linebreakReplacement) {
                let h = r.whitespace == "pre",
                    p = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
                h && !p ? c = !1 : !h && p && (c = !0)
            }
            c === !1 && Eo(t, o, l, s), Kr(t, t.mapping.slice(s).map(l, 1), r, void 0, c === null);
            let u = t.mapping.slice(s),
                d = u.map(l, 1),
                f = u.map(l + o.nodeSize, 1);
            return t.step(new le(d, f, d + 1, f - 1, new k(v.from(r.create(a, null, o.marks)), 0, 0), 1, !0)), c === !0 && Co(t, o, l, s), !1
        }
    })
}

function Co(t, e, n, r) {
    e.forEach((i, s) => {
        if (i.isText) {
            let o, l = /\r?\n|\r/g;
            for (; o = l.exec(i.text);) {
                let a = t.mapping.slice(r).map(n + 1 + s + o.index);
                t.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create())
            }
        }
    })
}

function Eo(t, e, n, r) {
    e.forEach((i, s) => {
        if (i.type == i.type.schema.linebreakReplacement) {
            let o = t.mapping.slice(r).map(n + 1 + s);
            t.replaceWith(o, o + 1, e.type.schema.text(`
`))
        }
    })
}

function Ac(t, e, n) {
    let r = t.resolve(e),
        i = r.index();
    return r.parent.canReplaceWith(i, i + 1, n)
}

function Rc(t, e, n, r, i) {
    let s = t.doc.nodeAt(e);
    if (!s) throw new RangeError("No node at given position");
    n || (n = s.type);
    let o = n.create(r, null, i || s.marks);
    if (s.isLeaf) return t.replaceWith(e, e + s.nodeSize, o);
    if (!n.validContent(s.content)) throw new RangeError("Invalid content for node type " + n.name);
    t.step(new le(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new k(v.from(o), 0, 0), 1, !0))
}

function Ce(t, e, n = 1, r) {
    let i = t.resolve(e),
        s = i.depth - n,
        o = r && r[r.length - 1] || i.parent;
    if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount))) return !1;
    for (let c = i.depth - 1, u = n - 2; c > s; c--, u--) {
        let d = i.node(c),
            f = i.index(c);
        if (d.type.spec.isolating) return !1;
        let h = d.content.cutByIndex(f, d.childCount),
            p = r && r[u + 1];
        p && (h = h.replaceChild(0, p.type.create(p.attrs)));
        let m = r && r[u] || d;
        if (!d.canReplace(f + 1, d.childCount) || !m.type.validContent(h)) return !1
    }
    let l = i.indexAfter(s),
        a = r && r[0];
    return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type)
}

function Ic(t, e, n = 1, r) {
    let i = t.doc.resolve(e),
        s = v.empty,
        o = v.empty;
    for (let l = i.depth, a = i.depth - n, c = n - 1; l > a; l--, c--) {
        s = v.from(i.node(l).copy(s));
        let u = r && r[c];
        o = v.from(u ? u.type.create(u.attrs, o) : i.node(l).copy(o))
    }
    t.step(new me(e, e, new k(s.append(o), n, n), !0))
}

function Ve(t, e) {
    let n = t.resolve(e),
        r = n.index();
    return To(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1)
}

function Pc(t, e) {
    e.content.size || t.type.compatibleContent(e.type);
    let n = t.contentMatchAt(t.childCount),
        {
            linebreakReplacement: r
        } = t.type.schema;
    for (let i = 0; i < e.childCount; i++) {
        let s = e.child(i),
            o = s.type == r ? t.type.schema.nodes.text : s.type;
        if (n = n.matchType(o), !n || !t.type.allowsMarks(s.marks)) return !1
    }
    return n.validEnd
}

function To(t, e) {
    return !!(t && e && !t.isLeaf && Pc(t, e))
}

function zn(t, e, n = -1) {
    let r = t.resolve(e);
    for (let i = r.depth;; i--) {
        let s, o, l = r.index(i);
        if (i == r.depth ? (s = r.nodeBefore, o = r.nodeAfter) : n > 0 ? (s = r.node(i + 1), l++, o = r.node(i).maybeChild(l)) : (s = r.node(i).maybeChild(l - 1), o = r.node(i + 1)), s && !s.isTextblock && To(s, o) && r.node(i).canReplace(l, l + 1)) return e;
        if (i == 0) break;
        e = n < 0 ? r.before(i) : r.after(i)
    }
}

function zc(t, e, n) {
    let r = null,
        {
            linebreakReplacement: i
        } = t.doc.type.schema,
        s = t.doc.resolve(e - n),
        o = s.node().type;
    if (i && o.inlineContent) {
        let u = o.whitespace == "pre",
            d = !!o.contentMatch.matchType(i);
        u && !d ? r = !1 : !u && d && (r = !0)
    }
    let l = t.steps.length;
    if (r === !1) {
        let u = t.doc.resolve(e + n);
        Eo(t, u.node(), u.before(), l)
    }
    o.inlineContent && Kr(t, e + n - 1, o, s.node().contentMatchAt(s.index()), r == null);
    let a = t.mapping.slice(l),
        c = a.map(e - n);
    if (t.step(new me(c, a.map(e + n, -1), k.empty, !0)), r === !0) {
        let u = t.doc.resolve(c);
        Co(t, u.node(), u.before(), t.steps.length)
    }
    return t
}

function Bc(t, e, n) {
    let r = t.resolve(e);
    if (r.parent.canReplaceWith(r.index(), r.index(), n)) return e;
    if (r.parentOffset == 0)
        for (let i = r.depth - 1; i >= 0; i--) {
            let s = r.index(i);
            if (r.node(i).canReplaceWith(s, s, n)) return r.before(i + 1);
            if (s > 0) return null
        }
    if (r.parentOffset == r.parent.content.size)
        for (let i = r.depth - 1; i >= 0; i--) {
            let s = r.indexAfter(i);
            if (r.node(i).canReplaceWith(s, s, n)) return r.after(i + 1);
            if (s < r.node(i).childCount) return null
        }
    return null
}

function No(t, e, n) {
    let r = t.resolve(e);
    if (!n.content.size) return e;
    let i = n.content;
    for (let s = 0; s < n.openStart; s++) i = i.firstChild.content;
    for (let s = 1; s <= (n.openStart == 0 && n.size ? 2 : 1); s++)
        for (let o = r.depth; o >= 0; o--) {
            let l = o == r.depth ? 0 : r.pos <= (r.start(o + 1) + r.end(o + 1)) / 2 ? -1 : 1,
                a = r.index(o) + (l > 0 ? 1 : 0),
                c = r.node(o),
                u = !1;
            if (s == 1) u = c.canReplace(a, a, i);
            else {
                let d = c.contentMatchAt(a).findWrapping(i.firstChild.type);
                u = d && c.canReplaceWith(a, a, d[0])
            }
            if (u) return l == 0 ? r.pos : l < 0 ? r.before(o + 1) : r.after(o + 1)
        }
    return null
}

function Bn(t, e, n = e, r = k.empty) {
    if (e == n && !r.size) return null;
    let i = t.resolve(e),
        s = t.resolve(n);
    return Oo(i, s, r) ? new me(e, n, r) : new $c(i, s, r).fit()
}

function Oo(t, e, n) {
    return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content)
}
var $c = class {
    constructor(t, e, n) {
        this.$from = t, this.$to = e, this.unplaced = n, this.frontier = [], this.placed = v.empty;
        for (let r = 0; r <= t.depth; r++) {
            let i = t.node(r);
            this.frontier.push({
                type: i.type,
                match: i.contentMatchAt(t.indexAfter(r))
            })
        }
        for (let r = t.depth; r > 0; r--) this.placed = v.from(t.node(r).copy(this.placed))
    }
    get depth() {
        return this.frontier.length - 1
    }
    fit() {
        for (; this.unplaced.size;) {
            let a = this.findFittable();
            a ? this.placeNodes(a) : this.openMore() || this.dropNode()
        }
        let t = this.mustMoveInline(),
            e = this.placed.size - this.depth - this.$from.depth,
            n = this.$from,
            r = this.close(t < 0 ? this.$to : n.doc.resolve(t));
        if (!r) return null;
        let i = this.placed,
            s = n.depth,
            o = r.depth;
        for (; s && o && i.childCount == 1;) i = i.firstChild.content, s--, o--;
        let l = new k(i, s, o);
        return t > -1 ? new le(n.pos, t, this.$to.pos, this.$to.end(), l, e) : l.size || n.pos != this.$to.pos ? new me(n.pos, r.pos, l) : null
    }
    findFittable() {
        let t = this.unplaced.openStart;
        for (let e = this.unplaced.content, n = 0, r = this.unplaced.openEnd; n < t; n++) {
            let i = e.firstChild;
            if (e.childCount > 1 && (r = 0), i.type.spec.isolating && r <= n) {
                t = n;
                break
            }
            e = i.content
        }
        for (let e = 1; e <= 2; e++)
            for (let n = e == 1 ? t : this.unplaced.openStart; n >= 0; n--) {
                let r, i = null;
                n ? (i = Qn(this.unplaced.content, n - 1).firstChild, r = i.content) : r = this.unplaced.content;
                let s = r.firstChild;
                for (let o = this.depth; o >= 0; o--) {
                    let {
                        type: l,
                        match: a
                    } = this.frontier[o], c, u = null;
                    if (e == 1 && (s ? a.matchType(s.type) || (u = a.fillBefore(v.from(s), !1)) : i && l.compatibleContent(i.type))) return {
                        sliceDepth: n,
                        frontierDepth: o,
                        parent: i,
                        inject: u
                    };
                    if (e == 2 && s && (c = a.findWrapping(s.type))) return {
                        sliceDepth: n,
                        frontierDepth: o,
                        parent: i,
                        wrap: c
                    };
                    if (i && a.matchType(i.type)) break
                }
            }
    }
    openMore() {
        let {
            content: t,
            openStart: e,
            openEnd: n
        } = this.unplaced, r = Qn(t, e);
        return !r.childCount || r.firstChild.isLeaf ? !1 : (this.unplaced = new k(t, e + 1, Math.max(n, r.size + e >= t.size - n ? e + 1 : 0)), !0)
    }
    dropNode() {
        let {
            content: t,
            openStart: e,
            openEnd: n
        } = this.unplaced, r = Qn(t, e);
        if (r.childCount <= 1 && e > 0) {
            let i = t.size - e <= e + r.size;
            this.unplaced = new k(Tt(t, e - 1, 1), e - 1, i ? e - 1 : n)
        } else this.unplaced = new k(Tt(t, e, 1), e, n)
    }
    placeNodes({
        sliceDepth: t,
        frontierDepth: e,
        parent: n,
        inject: r,
        wrap: i
    }) {
        for (; this.depth > e;) this.closeFrontierNode();
        if (i)
            for (let p = 0; p < i.length; p++) this.openFrontierNode(i[p]);
        let s = this.unplaced,
            o = n ? n.content : s.content,
            l = s.openStart - t,
            a = 0,
            c = [],
            {
                match: u,
                type: d
            } = this.frontier[e];
        if (r) {
            for (let p = 0; p < r.childCount; p++) c.push(r.child(p));
            u = u.matchFragment(r)
        }
        let f = o.size + t - (s.content.size - s.openEnd);
        for (; a < o.childCount;) {
            let p = o.child(a),
                m = u.matchType(p.type);
            if (!m) break;
            a++, (a > 1 || l == 0 || p.content.size) && (u = m, c.push(Do(p.mark(d.allowedMarks(p.marks)), a == 1 ? l : 0, a == o.childCount ? f : -1)))
        }
        let h = a == o.childCount;
        h || (f = -1), this.placed = Nt(this.placed, e, v.from(c)), this.frontier[e].match = u, h && f < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
        for (let p = 0, m = o; p < f; p++) {
            let g = m.lastChild;
            this.frontier.push({
                type: g.type,
                match: g.contentMatchAt(g.childCount)
            }), m = g.content
        }
        this.unplaced = h ? t == 0 ? k.empty : new k(Tt(s.content, t - 1, 1), t - 1, f < 0 ? s.openEnd : t - 1) : new k(Tt(s.content, t, a), s.openStart, s.openEnd)
    }
    mustMoveInline() {
        if (!this.$to.parent.isTextblock) return -1;
        let t = this.frontier[this.depth],
            e;
        if (!t.type.isTextblock || !er(this.$to, this.$to.depth, t.type, t.match, !1) || this.$to.depth == this.depth && (e = this.findCloseLevel(this.$to)) && e.depth == this.depth) return -1;
        let {
            depth: n
        } = this.$to, r = this.$to.after(n);
        for (; n > 1 && r == this.$to.end(--n);) ++r;
        return r
    }
    findCloseLevel(t) {
        e: for (let e = Math.min(this.depth, t.depth); e >= 0; e--) {
            let {
                match: n,
                type: r
            } = this.frontier[e], i = e < t.depth && t.end(e + 1) == t.pos + (t.depth - (e + 1)), s = er(t, e, r, n, i);
            if (s) {
                for (let o = e - 1; o >= 0; o--) {
                    let {
                        match: l,
                        type: a
                    } = this.frontier[o], c = er(t, o, a, l, !0);
                    if (!c || c.childCount) continue e
                }
                return {
                    depth: e,
                    fit: s,
                    move: i ? t.doc.resolve(t.after(e + 1)) : t
                }
            }
        }
    }
    close(t) {
        let e = this.findCloseLevel(t);
        if (!e) return null;
        for (; this.depth > e.depth;) this.closeFrontierNode();
        e.fit.childCount && (this.placed = Nt(this.placed, e.depth, e.fit)), t = e.move;
        for (let n = e.depth + 1; n <= t.depth; n++) {
            let r = t.node(n),
                i = r.type.contentMatch.fillBefore(r.content, !0, t.index(n));
            this.openFrontierNode(r.type, r.attrs, i)
        }
        return t
    }
    openFrontierNode(t, e = null, n) {
        let r = this.frontier[this.depth];
        r.match = r.match.matchType(t), this.placed = Nt(this.placed, this.depth, v.from(t.create(e, n))), this.frontier.push({
            type: t,
            match: t.contentMatch
        })
    }
    closeFrontierNode() {
        let t = this.frontier.pop().match.fillBefore(v.empty, !0);
        t.childCount && (this.placed = Nt(this.placed, this.frontier.length, t))
    }
};

function Tt(t, e, n) {
    return e == 0 ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(Tt(t.firstChild.content, e - 1, n)))
}

function Nt(t, e, n) {
    return e == 0 ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(Nt(t.lastChild.content, e - 1, n)))
}

function Qn(t, e) {
    for (let n = 0; n < e; n++) t = t.firstChild.content;
    return t
}

function Do(t, e, n) {
    if (e <= 0) return t;
    let r = t.content;
    return e > 1 && (r = r.replaceChild(0, Do(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(v.empty, !0)))), t.copy(r)
}

function er(t, e, n, r, i) {
    let s = t.node(e),
        o = i ? t.indexAfter(e) : t.index(e);
    if (o == s.childCount && !n.compatibleContent(s.type)) return null;
    let l = r.fillBefore(s.content, !0, o);
    return l && !Vc(n, s.content, o) ? l : null
}

function Vc(t, e, n) {
    for (let r = n; r < e.childCount; r++)
        if (!t.allowsMarks(e.child(r).marks)) return !0;
    return !1
}

function Fc(t) {
    return t.spec.defining || t.spec.definingForContent
}

function Lc(t, e, n, r) {
    if (!r.size) return t.deleteRange(e, n);
    let i = t.doc.resolve(e),
        s = t.doc.resolve(n);
    if (Oo(i, s, r)) return t.step(new me(e, n, r));
    let o = Ro(i, s);
    o[o.length - 1] == 0 && o.pop();
    let l = -(i.depth + 1);
    o.unshift(l);
    for (let f = i.depth, h = i.pos - 1; f > 0; f--, h--) {
        let p = i.node(f).type.spec;
        if (p.defining || p.definingAsContext || p.isolating) break;
        o.indexOf(f) > -1 ? l = f : i.before(f) == h && o.splice(1, 0, -f)
    }
    let a = o.indexOf(l),
        c = [],
        u = r.openStart;
    for (let f = r.content, h = 0;; h++) {
        let p = f.firstChild;
        if (c.push(p), h == r.openStart) break;
        f = p.content
    }
    for (let f = u - 1; f >= 0; f--) {
        let h = c[f],
            p = Fc(h.type);
        if (p && !h.sameMarkup(i.node(Math.abs(l) - 1))) u = f;
        else if (p || !h.type.isTextblock) break
    }
    for (let f = r.openStart; f >= 0; f--) {
        let h = (f + u + 1) % (r.openStart + 1),
            p = c[h];
        if (p)
            for (let m = 0; m < o.length; m++) {
                let g = o[(m + a) % o.length],
                    y = !0;
                g < 0 && (y = !1, g = -g);
                let b = i.node(g - 1),
                    w = i.index(g - 1);
                if (b.canReplaceWith(w, w, p.type, p.marks)) return t.replace(i.before(g), y ? s.after(g) : n, new k(Ao(r.content, 0, r.openStart, h), h, r.openEnd))
            }
    }
    let d = t.steps.length;
    for (let f = o.length - 1; f >= 0 && (t.replace(e, n, r), !(t.steps.length > d)); f--) {
        let h = o[f];
        h < 0 || (e = i.before(h), n = s.after(h))
    }
}

function Ao(t, e, n, r, i) {
    if (e < n) {
        let s = t.firstChild;
        t = t.replaceChild(0, s.copy(Ao(s.content, e + 1, n, r, s)))
    }
    if (e > r) {
        let s = i.contentMatchAt(0),
            o = s.fillBefore(t).append(t);
        t = o.append(s.matchFragment(o).fillBefore(v.empty, !0))
    }
    return t
}

function qc(t, e, n, r) {
    if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
        let i = Bc(t.doc, e, r.type);
        i != null && (e = n = i)
    }
    t.replaceRange(e, n, new k(v.from(r), 0, 0))
}

function _c(t, e, n) {
    let r = t.doc.resolve(e),
        i = t.doc.resolve(n),
        s = Ro(r, i);
    for (let o = 0; o < s.length; o++) {
        let l = s[o],
            a = o == s.length - 1;
        if (a && l == 0 || r.node(l).type.contentMatch.validEnd) return t.delete(r.start(l), i.end(l));
        if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1)))) return t.delete(r.before(l), i.after(l))
    }
    for (let o = 1; o <= r.depth && o <= i.depth; o++)
        if (e - r.start(o) == r.depth - o && n > r.end(o) && i.end(o) - n != i.depth - o && r.start(o - 1) == i.start(o - 1) && r.node(o - 1).canReplace(r.index(o - 1), i.index(o - 1))) return t.delete(r.before(o), n);
    t.delete(e, n)
}

function Ro(t, e) {
    let n = [],
        r = Math.min(t.depth, e.depth);
    for (let i = r; i >= 0; i--) {
        let s = t.start(i);
        if (s < t.pos - (t.depth - i) || e.end(i) > e.pos + (e.depth - i) || t.node(i).type.spec.isolating || e.node(i).type.spec.isolating) break;
        (s == e.start(i) || i == t.depth && i == e.depth && t.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && n.push(i)
    }
    return n
}
var Io = class gn extends Z {
    constructor(e, n, r) {
        super(), this.pos = e, this.attr = n, this.value = r
    }
    apply(e) {
        let n = e.nodeAt(this.pos);
        if (!n) return te.fail("No node at attribute step's position");
        let r = Object.create(null);
        for (let s in n.attrs) r[s] = n.attrs[s];
        r[this.attr] = this.value;
        let i = n.type.create(r, null, n.marks);
        return te.fromReplace(e, this.pos, this.pos + 1, new k(v.from(i), 0, n.isLeaf ? 0 : 1))
    }
    getMap() {
        return Ye.empty
    }
    invert(e) {
        return new gn(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr])
    }
    map(e) {
        let n = e.mapResult(this.pos, 1);
        return n.deletedAfter ? null : new gn(n.pos, this.attr, this.value)
    }
    toJSON() {
        return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value
        }
    }
    static fromJSON(e, n) {
        if (typeof n.pos != "number" || typeof n.attr != "string") throw new RangeError("Invalid input for AttrStep.fromJSON");
        return new gn(n.pos, n.attr, n.value)
    }
};
Z.jsonID("attr", Io);
var Po = class Cr extends Z {
    constructor(e, n) {
        super(), this.attr = e, this.value = n
    }
    apply(e) {
        let n = Object.create(null);
        for (let i in e.attrs) n[i] = e.attrs[i];
        n[this.attr] = this.value;
        let r = e.type.create(n, e.content, e.marks);
        return te.ok(r)
    }
    getMap() {
        return Ye.empty
    }
    invert(e) {
        return new Cr(this.attr, e.attrs[this.attr])
    }
    map(e) {
        return this
    }
    toJSON() {
        return {
            stepType: "docAttr",
            attr: this.attr,
            value: this.value
        }
    }
    static fromJSON(e, n) {
        if (typeof n.attr != "string") throw new RangeError("Invalid input for DocAttrStep.fromJSON");
        return new Cr(n.attr, n.value)
    }
};
Z.jsonID("docAttr", Po);
var ft = class extends Error {};
ft = function t(e) {
    let n = Error.call(this, e);
    return n.__proto__ = t.prototype, n
};
ft.prototype = Object.create(Error.prototype);
ft.prototype.constructor = ft;
ft.prototype.name = "TransformError";
var zo = class {
        constructor(t) {
            this.doc = t, this.steps = [], this.docs = [], this.mapping = new Mo
        }
        get before() {
            return this.docs.length ? this.docs[0] : this.doc
        }
        step(t) {
            let e = this.maybeStep(t);
            if (e.failed) throw new ft(e.failed);
            return this
        }
        maybeStep(t) {
            let e = t.apply(this.doc);
            return e.failed || this.addStep(t, e.doc), e
        }
        get docChanged() {
            return this.steps.length > 0
        }
        addStep(t, e) {
            this.docs.push(this.doc), this.steps.push(t), this.mapping.appendMap(t.getMap()), this.doc = e
        }
        replace(t, e = t, n = k.empty) {
            let r = Bn(this.doc, t, e, n);
            return r && this.step(r), this
        }
        replaceWith(t, e, n) {
            return this.replace(t, e, new k(v.from(n), 0, 0))
        }
        delete(t, e) {
            return this.replace(t, e, k.empty)
        }
        insert(t, e) {
            return this.replaceWith(t, t, e)
        }
        replaceRange(t, e, n) {
            return Lc(this, t, e, n), this
        }
        replaceRangeWith(t, e, n) {
            return qc(this, t, e, n), this
        }
        deleteRange(t, e) {
            return _c(this, t, e), this
        }
        lift(t, e) {
            return Ec(this, t, e), this
        }
        join(t, e = 1) {
            return zc(this, t, e), this
        }
        wrap(t, e) {
            return Oc(this, t, e), this
        }
        setBlockType(t, e = t, n, r = null) {
            return Dc(this, t, e, n, r), this
        }
        setNodeMarkup(t, e, n = null, r) {
            return Rc(this, t, e, n, r), this
        }
        setNodeAttribute(t, e, n) {
            return this.step(new Io(t, e, n)), this
        }
        setDocAttribute(t, e) {
            return this.step(new Po(t, e)), this
        }
        addNodeMark(t, e) {
            return this.step(new Jr(t, e)), this
        }
        removeNodeMark(t, e) {
            let n = this.doc.nodeAt(t);
            if (!n) throw new RangeError("No node at position " + t);
            if (e instanceof B) e.isInSet(n.marks) && this.step(new Cn(t, e));
            else {
                let r = n.marks,
                    i, s = [];
                for (; i = e.isInSet(r);) s.push(new Cn(t, i)), r = i.removeFromSet(r);
                for (let o = s.length - 1; o >= 0; o--) this.step(s[o])
            }
            return this
        }
        split(t, e = 1, n) {
            return Ic(this, t, e, n), this
        }
        addMark(t, e, n) {
            return wc(this, t, e, n), this
        }
        removeMark(t, e, n) {
            return Mc(this, t, e, n), this
        }
        clearIncompatible(t, e, n) {
            return Kr(this, t, e, n), this
        }
    },
    tr = Object.create(null),
    D = class {
        constructor(t, e, n) {
            this.$anchor = t, this.$head = e, this.ranges = n || [new Wc(t.min(e), t.max(e))]
        }
        get anchor() {
            return this.$anchor.pos
        }
        get head() {
            return this.$head.pos
        }
        get from() {
            return this.$from.pos
        }
        get to() {
            return this.$to.pos
        }
        get $from() {
            return this.ranges[0].$from
        }
        get $to() {
            return this.ranges[0].$to
        }
        get empty() {
            let t = this.ranges;
            for (let e = 0; e < t.length; e++)
                if (t[e].$from.pos != t[e].$to.pos) return !1;
            return !0
        }
        content() {
            return this.$from.doc.slice(this.from, this.to, !0)
        }
        replace(t, e = k.empty) {
            let n = e.content.lastChild,
                r = null;
            for (let o = 0; o < e.openEnd; o++) r = n, n = n.lastChild;
            let i = t.steps.length,
                s = this.ranges;
            for (let o = 0; o < s.length; o++) {
                let {
                    $from: l,
                    $to: a
                } = s[o], c = t.mapping.slice(i);
                t.replaceRange(c.map(l.pos), c.map(a.pos), o ? k.empty : e), o == 0 && $i(t, i, (n ? n.isInline : r && r.isTextblock) ? -1 : 1)
            }
        }
        replaceWith(t, e) {
            let n = t.steps.length,
                r = this.ranges;
            for (let i = 0; i < r.length; i++) {
                let {
                    $from: s,
                    $to: o
                } = r[i], l = t.mapping.slice(n), a = l.map(s.pos), c = l.map(o.pos);
                i ? t.deleteRange(a, c) : (t.replaceRangeWith(a, c, e), $i(t, n, e.isInline ? -1 : 1))
            }
        }
        static findFrom(t, e, n = !1) {
            let r = t.parent.inlineContent ? new A(t) : st(t.node(0), t.parent, t.pos, t.index(), e, n);
            if (r) return r;
            for (let i = t.depth - 1; i >= 0; i--) {
                let s = e < 0 ? st(t.node(0), t.node(i), t.before(i + 1), t.index(i), e, n) : st(t.node(0), t.node(i), t.after(i + 1), t.index(i) + 1, e, n);
                if (s) return s
            }
            return null
        }
        static near(t, e = 1) {
            return this.findFrom(t, e) || this.findFrom(t, -e) || new be(t.node(0))
        }
        static atStart(t) {
            return st(t, t, 0, 0, 1) || new be(t)
        }
        static atEnd(t) {
            return st(t, t, t.content.size, t.childCount, -1) || new be(t)
        }
        static fromJSON(t, e) {
            if (!e || !e.type) throw new RangeError("Invalid input for Selection.fromJSON");
            let n = tr[e.type];
            if (!n) throw new RangeError(`No selection type ${e.type} defined`);
            return n.fromJSON(t, e)
        }
        static jsonID(t, e) {
            if (t in tr) throw new RangeError("Duplicate use of selection JSON ID " + t);
            return tr[t] = e, e.prototype.jsonID = t, e
        }
        getBookmark() {
            return A.between(this.$anchor, this.$head).getBookmark()
        }
    };
D.prototype.visible = !0;
var Wc = class {
        constructor(t, e) {
            this.$from = t, this.$to = e
        }
    },
    zi = !1;

function Bi(t) {
    !zi && !t.parent.inlineContent && (zi = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"))
}
var A = class Ot extends D {
    constructor(e, n = e) {
        Bi(e), Bi(n), super(e, n)
    }
    get $cursor() {
        return this.$anchor.pos == this.$head.pos ? this.$head : null
    }
    map(e, n) {
        let r = e.resolve(n.map(this.head));
        if (!r.parent.inlineContent) return D.near(r);
        let i = e.resolve(n.map(this.anchor));
        return new Ot(i.parent.inlineContent ? i : r, r)
    }
    replace(e, n = k.empty) {
        if (super.replace(e, n), n == k.empty) {
            let r = this.$from.marksAcross(this.$to);
            r && e.ensureMarks(r)
        }
    }
    eq(e) {
        return e instanceof Ot && e.anchor == this.anchor && e.head == this.head
    }
    getBookmark() {
        return new Bo(this.anchor, this.head)
    }
    toJSON() {
        return {
            type: "text",
            anchor: this.anchor,
            head: this.head
        }
    }
    static fromJSON(e, n) {
        if (typeof n.anchor != "number" || typeof n.head != "number") throw new RangeError("Invalid input for TextSelection.fromJSON");
        return new Ot(e.resolve(n.anchor), e.resolve(n.head))
    }
    static create(e, n, r = n) {
        let i = e.resolve(n);
        return new this(i, r == n ? i : e.resolve(r))
    }
    static between(e, n, r) {
        let i = e.pos - n.pos;
        if ((!r || i) && (r = i >= 0 ? 1 : -1), !n.parent.inlineContent) {
            let s = D.findFrom(n, r, !0) || D.findFrom(n, -r, !0);
            if (s) n = s.$head;
            else return D.near(n, r)
        }
        return e.parent.inlineContent || (i == 0 ? e = n : (e = (D.findFrom(e, -r, !0) || D.findFrom(e, r, !0)).$anchor, e.pos < n.pos != i < 0 && (e = n))), new Ot(e, n)
    }
};
D.jsonID("text", A);
var Bo = class $o {
        constructor(e, n) {
            this.anchor = e, this.head = n
        }
        map(e) {
            return new $o(e.map(this.anchor), e.map(this.head))
        }
        resolve(e) {
            return A.between(e.resolve(this.anchor), e.resolve(this.head))
        }
    },
    E = class Dt extends D {
        constructor(e) {
            let n = e.nodeAfter,
                r = e.node(0).resolve(e.pos + n.nodeSize);
            super(e, r), this.node = n
        }
        map(e, n) {
            let {
                deleted: r,
                pos: i
            } = n.mapResult(this.anchor), s = e.resolve(i);
            return r ? D.near(s) : new Dt(s)
        }
        content() {
            return new k(v.from(this.node), 0, 0)
        }
        eq(e) {
            return e instanceof Dt && e.anchor == this.anchor
        }
        toJSON() {
            return {
                type: "node",
                anchor: this.anchor
            }
        }
        getBookmark() {
            return new jc(this.anchor)
        }
        static fromJSON(e, n) {
            if (typeof n.anchor != "number") throw new RangeError("Invalid input for NodeSelection.fromJSON");
            return new Dt(e.resolve(n.anchor))
        }
        static create(e, n) {
            return new Dt(e.resolve(n))
        }
        static isSelectable(e) {
            return !e.isText && e.type.spec.selectable !== !1
        }
    };
E.prototype.visible = !1;
D.jsonID("node", E);
var jc = class Vo {
        constructor(e) {
            this.anchor = e
        }
        map(e) {
            let {
                deleted: n,
                pos: r
            } = e.mapResult(this.anchor);
            return n ? new Bo(r, r) : new Vo(r)
        }
        resolve(e) {
            let n = e.resolve(this.anchor),
                r = n.nodeAfter;
            return r && E.isSelectable(r) ? new E(n) : D.near(n)
        }
    },
    be = class yn extends D {
        constructor(e) {
            super(e.resolve(0), e.resolve(e.content.size))
        }
        replace(e, n = k.empty) {
            if (n == k.empty) {
                e.delete(0, e.doc.content.size);
                let r = D.atStart(e.doc);
                r.eq(e.selection) || e.setSelection(r)
            } else super.replace(e, n)
        }
        toJSON() {
            return {
                type: "all"
            }
        }
        static fromJSON(e) {
            return new yn(e)
        }
        map(e) {
            return new yn(e)
        }
        eq(e) {
            return e instanceof yn
        }
        getBookmark() {
            return Hc
        }
    };
D.jsonID("all", be);
var Hc = {
    map() {
        return this
    },
    resolve(t) {
        return new be(t)
    }
};

function st(t, e, n, r, i, s = !1) {
    if (e.inlineContent) return A.create(t, n);
    for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < e.childCount : o >= 0; o += i) {
        let l = e.child(o);
        if (l.isAtom) {
            if (!s && E.isSelectable(l)) return E.create(t, n - (i < 0 ? l.nodeSize : 0))
        } else {
            let a = st(t, l, n + i, i < 0 ? l.childCount : 0, i, s);
            if (a) return a
        }
        n += l.nodeSize * i
    }
    return null
}

function $i(t, e, n) {
    let r = t.steps.length - 1;
    if (r < e) return;
    let i = t.steps[r];
    if (!(i instanceof me || i instanceof le)) return;
    let s = t.mapping.maps[r],
        o;
    s.forEach((l, a, c, u) => {
        o == null && (o = u)
    }), t.setSelection(D.near(t.doc.resolve(o), n))
}
var Vi = 1,
    Fi = 2,
    Li = 4,
    Jc = class extends zo {
        constructor(t) {
            super(t.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = Object.create(null), this.time = Date.now(), this.curSelection = t.selection, this.storedMarks = t.storedMarks
        }
        get selection() {
            return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection
        }
        setSelection(t) {
            if (t.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
            return this.curSelection = t, this.curSelectionFor = this.steps.length, this.updated = (this.updated | Vi) & -3, this.storedMarks = null, this
        }
        get selectionSet() {
            return (this.updated & Vi) > 0
        }
        setStoredMarks(t) {
            return this.storedMarks = t, this.updated |= Fi, this
        }
        ensureMarks(t) {
            return B.sameSet(this.storedMarks || this.selection.$from.marks(), t) || this.setStoredMarks(t), this
        }
        addStoredMark(t) {
            return this.ensureMarks(t.addToSet(this.storedMarks || this.selection.$head.marks()))
        }
        removeStoredMark(t) {
            return this.ensureMarks(t.removeFromSet(this.storedMarks || this.selection.$head.marks()))
        }
        get storedMarksSet() {
            return (this.updated & Fi) > 0
        }
        addStep(t, e) {
            super.addStep(t, e), this.updated = this.updated & -3, this.storedMarks = null
        }
        setTime(t) {
            return this.time = t, this
        }
        replaceSelection(t) {
            return this.selection.replace(this, t), this
        }
        replaceSelectionWith(t, e = !0) {
            let n = this.selection;
            return e && (t = t.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || B.none))), n.replaceWith(this, t), this
        }
        deleteSelection() {
            return this.selection.replace(this), this
        }
        insertText(t, e, n) {
            let r = this.doc.type.schema;
            if (e == null) return t ? this.replaceSelectionWith(r.text(t), !0) : this.deleteSelection(); {
                if (n == null && (n = e), !t) return this.deleteRange(e, n);
                let i = this.storedMarks;
                if (!i) {
                    let s = this.doc.resolve(e);
                    i = n == e ? s.marks() : s.marksAcross(this.doc.resolve(n))
                }
                return this.replaceRangeWith(e, n, r.text(t, i)), !this.selection.empty && this.selection.to == e + t.length && this.setSelection(D.near(this.selection.$to)), this
            }
        }
        setMeta(t, e) {
            return this.meta[typeof t == "string" ? t : t.key] = e, this
        }
        getMeta(t) {
            return this.meta[typeof t == "string" ? t : t.key]
        }
        get isGeneric() {
            for (let t in this.meta) return !1;
            return !0
        }
        scrollIntoView() {
            return this.updated |= Li, this
        }
        get scrolledIntoView() {
            return (this.updated & Li) > 0
        }
    };

function qi(t, e) {
    return !e || !t ? t : t.bind(e)
}
var At = class {
        constructor(t, e, n) {
            this.name = t, this.init = qi(e.init, n), this.apply = qi(e.apply, n)
        }
    },
    Kc = [new At("doc", {
        init(t) {
            return t.doc || t.schema.topNodeType.createAndFill()
        },
        apply(t) {
            return t.doc
        }
    }), new At("selection", {
        init(t, e) {
            return t.selection || D.atStart(e.doc)
        },
        apply(t) {
            return t.selection
        }
    }), new At("storedMarks", {
        init(t) {
            return t.storedMarks || null
        },
        apply(t, e, n, r) {
            return r.selection.$cursor ? t.storedMarks : null
        }
    }), new At("scrollToSelection", {
        init() {
            return 0
        },
        apply(t, e) {
            return t.scrolledIntoView ? e + 1 : e
        }
    })],
    nr = class {
        constructor(t, e) {
            this.schema = t, this.plugins = [], this.pluginsByKey = Object.create(null), this.fields = Kc.slice(), e && e.forEach(n => {
                if (this.pluginsByKey[n.key]) throw new RangeError("Adding different instances of a keyed plugin (" + n.key + ")");
                this.plugins.push(n), this.pluginsByKey[n.key] = n, n.spec.state && this.fields.push(new At(n.key, n.spec.state, n))
            })
        }
    },
    Uc = class Rt {
        constructor(e) {
            this.config = e
        }
        get schema() {
            return this.config.schema
        }
        get plugins() {
            return this.config.plugins
        }
        apply(e) {
            return this.applyTransaction(e).state
        }
        filterTransaction(e, n = -1) {
            for (let r = 0; r < this.config.plugins.length; r++)
                if (r != n) {
                    let i = this.config.plugins[r];
                    if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this)) return !1
                }
            return !0
        }
        applyTransaction(e) {
            if (!this.filterTransaction(e)) return {
                state: this,
                transactions: []
            };
            let n = [e],
                r = this.applyInner(e),
                i = null;
            for (;;) {
                let s = !1;
                for (let o = 0; o < this.config.plugins.length; o++) {
                    let l = this.config.plugins[o];
                    if (l.spec.appendTransaction) {
                        let a = i ? i[o].n : 0,
                            c = i ? i[o].state : this,
                            u = a < n.length && l.spec.appendTransaction.call(l, a ? n.slice(a) : n, c, r);
                        if (u && r.filterTransaction(u, o)) {
                            if (u.setMeta("appendedTransaction", e), !i) {
                                i = [];
                                for (let d = 0; d < this.config.plugins.length; d++) i.push(d < o ? {
                                    state: r,
                                    n: n.length
                                } : {
                                    state: this,
                                    n: 0
                                })
                            }
                            n.push(u), r = r.applyInner(u), s = !0
                        }
                        i && (i[o] = {
                            state: r,
                            n: n.length
                        })
                    }
                }
                if (!s) return {
                    state: r,
                    transactions: n
                }
            }
        }
        applyInner(e) {
            if (!e.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
            let n = new Rt(this.config),
                r = this.config.fields;
            for (let i = 0; i < r.length; i++) {
                let s = r[i];
                n[s.name] = s.apply(e, this[s.name], this, n)
            }
            return n
        }
        get tr() {
            return new Jc(this)
        }
        static create(e) {
            let n = new nr(e.doc ? e.doc.type.schema : e.schema, e.plugins),
                r = new Rt(n);
            for (let i = 0; i < n.fields.length; i++) r[n.fields[i].name] = n.fields[i].init(e, r);
            return r
        }
        reconfigure(e) {
            let n = new nr(this.schema, e.plugins),
                r = n.fields,
                i = new Rt(n);
            for (let s = 0; s < r.length; s++) {
                let o = r[s].name;
                i[o] = this.hasOwnProperty(o) ? this[o] : r[s].init(e, i)
            }
            return i
        }
        toJSON(e) {
            let n = {
                doc: this.doc.toJSON(),
                selection: this.selection.toJSON()
            };
            if (this.storedMarks && (n.storedMarks = this.storedMarks.map(r => r.toJSON())), e && typeof e == "object")
                for (let r in e) {
                    if (r == "doc" || r == "selection") throw new RangeError("The JSON fields `doc` and `selection` are reserved");
                    let i = e[r],
                        s = i.spec.state;
                    s && s.toJSON && (n[r] = s.toJSON.call(i, this[i.key]))
                }
            return n
        }
        static fromJSON(e, n, r) {
            if (!n) throw new RangeError("Invalid input for EditorState.fromJSON");
            if (!e.schema) throw new RangeError("Required config field 'schema' missing");
            let i = new nr(e.schema, e.plugins),
                s = new Rt(i);
            return i.fields.forEach(o => {
                if (o.name == "doc") s.doc = ye.fromJSON(e.schema, n.doc);
                else if (o.name == "selection") s.selection = D.fromJSON(s.doc, n.selection);
                else if (o.name == "storedMarks") n.storedMarks && (s.storedMarks = n.storedMarks.map(e.schema.markFromJSON));
                else {
                    if (r)
                        for (let l in r) {
                            let a = r[l],
                                c = a.spec.state;
                            if (a.key == o.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(n, l)) {
                                s[o.name] = c.fromJSON.call(a, e, n[l], s);
                                return
                            }
                        }
                    s[o.name] = o.init(e, s)
                }
            }), s
        }
    };

function Fo(t, e, n) {
    for (let r in t) {
        let i = t[r];
        i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = Fo(i, e, {})), n[r] = i
    }
    return n
}
var F = class {
        constructor(t) {
            this.spec = t, this.props = {}, t.props && Fo(t.props, this, this.props), this.key = t.key ? t.key.key : Lo("plugin")
        }
        getState(t) {
            return t[this.key]
        }
    },
    rr = Object.create(null);

function Lo(t) {
    return t in rr ? t + "$" + ++rr[t] : (rr[t] = 0, t + "$")
}
var Q = class {
        constructor(t = "key") {
            this.key = Lo(t)
        }
        get(t) {
            return t.config.pluginsByKey[this.key]
        }
        getState(t) {
            return t[this.key]
        }
    },
    Gr = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);

function qo(t, e) {
    let {
        $cursor: n
    } = t.selection;
    return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n
}
var _o = (t, e, n) => {
        let r = qo(t, n);
        if (!r) return !1;
        let i = Yr(r);
        if (!i) {
            let o = r.blockRange(),
                l = o && bt(o);
            return l == null ? !1 : (e && e(t.tr.lift(o, l).scrollIntoView()), !0)
        }
        let s = i.nodeBefore;
        if (Zo(t, i, e, -1)) return !0;
        if (r.parent.content.size == 0 && (ht(s, "end") || E.isSelectable(s)))
            for (let o = r.depth;; o--) {
                let l = Bn(t.doc, r.before(o), r.after(o), k.empty);
                if (l && l.slice.size < l.to - l.from) {
                    if (e) {
                        let a = t.tr.step(l);
                        a.setSelection(ht(s, "end") ? D.findFrom(a.doc.resolve(a.mapping.map(i.pos, -1)), -1) : E.create(a.doc, i.pos - s.nodeSize)), e(a.scrollIntoView())
                    }
                    return !0
                }
                if (o == 1 || r.node(o - 1).childCount > 1) break
            }
        return s.isAtom && i.depth == r.depth - 1 ? (e && e(t.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()), !0) : !1
    },
    Gc = (t, e, n) => {
        let r = qo(t, n);
        if (!r) return !1;
        let i = Yr(r);
        return i ? Wo(t, i, e) : !1
    },
    Yc = (t, e, n) => {
        let r = Ho(t, n);
        if (!r) return !1;
        let i = Xr(r);
        return i ? Wo(t, i, e) : !1
    };

function Wo(t, e, n) {
    let r = e.nodeBefore,
        i = e.pos - 1;
    for (; !r.isTextblock; i--) {
        if (r.type.spec.isolating) return !1;
        let a = r.lastChild;
        if (!a) return !1;
        r = a
    }
    let s = e.nodeAfter,
        o = e.pos + 1;
    for (; !s.isTextblock; o++) {
        if (s.type.spec.isolating) return !1;
        let a = s.firstChild;
        if (!a) return !1;
        s = a
    }
    let l = Bn(t.doc, i, o, k.empty);
    if (!l || l.from != i || l instanceof me && l.slice.size >= o - i) return !1;
    if (n) {
        let a = t.tr.step(l);
        a.setSelection(A.create(a.doc, i)), n(a.scrollIntoView())
    }
    return !0
}

function ht(t, e, n = !1) {
    for (let r = t; r; r = e == "start" ? r.firstChild : r.lastChild) {
        if (r.isTextblock) return !0;
        if (n && r.childCount != 1) return !1
    }
    return !1
}
var jo = (t, e, n) => {
    let {
        $head: r,
        empty: i
    } = t.selection, s = r;
    if (!i) return !1;
    if (r.parent.isTextblock) {
        if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0) return !1;
        s = Yr(r)
    }
    let o = s && s.nodeBefore;
    return !o || !E.isSelectable(o) ? !1 : (e && e(t.tr.setSelection(E.create(t.doc, s.pos - o.nodeSize)).scrollIntoView()), !0)
};

function Yr(t) {
    if (!t.parent.type.spec.isolating)
        for (let e = t.depth - 1; e >= 0; e--) {
            if (t.index(e) > 0) return t.doc.resolve(t.before(e + 1));
            if (t.node(e).type.spec.isolating) break
        }
    return null
}

function Ho(t, e) {
    let {
        $cursor: n
    } = t.selection;
    return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n
}
var Jo = (t, e, n) => {
        let r = Ho(t, n);
        if (!r) return !1;
        let i = Xr(r);
        if (!i) return !1;
        let s = i.nodeAfter;
        if (Zo(t, i, e, 1)) return !0;
        if (r.parent.content.size == 0 && (ht(s, "start") || E.isSelectable(s))) {
            let o = Bn(t.doc, r.before(), r.after(), k.empty);
            if (o && o.slice.size < o.to - o.from) {
                if (e) {
                    let l = t.tr.step(o);
                    l.setSelection(ht(s, "start") ? D.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : E.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView())
                }
                return !0
            }
        }
        return s.isAtom && i.depth == r.depth - 1 ? (e && e(t.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()), !0) : !1
    },
    Ko = (t, e, n) => {
        let {
            $head: r,
            empty: i
        } = t.selection, s = r;
        if (!i) return !1;
        if (r.parent.isTextblock) {
            if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size) return !1;
            s = Xr(r)
        }
        let o = s && s.nodeAfter;
        return !o || !E.isSelectable(o) ? !1 : (e && e(t.tr.setSelection(E.create(t.doc, s.pos)).scrollIntoView()), !0)
    };

function Xr(t) {
    if (!t.parent.type.spec.isolating)
        for (let e = t.depth - 1; e >= 0; e--) {
            let n = t.node(e);
            if (t.index(e) + 1 < n.childCount) return t.doc.resolve(t.after(e + 1));
            if (n.type.spec.isolating) break
        }
    return null
}
var Xc = (t, e) => {
        let n = t.selection,
            r = n instanceof E,
            i;
        if (r) {
            if (n.node.isTextblock || !Ve(t.doc, n.from)) return !1;
            i = n.from
        } else if (i = zn(t.doc, n.from, -1), i == null) return !1;
        if (e) {
            let s = t.tr.join(i);
            r && s.setSelection(E.create(s.doc, i - t.doc.resolve(i).nodeBefore.nodeSize)), e(s.scrollIntoView())
        }
        return !0
    },
    Zc = (t, e) => {
        let n = t.selection,
            r;
        if (n instanceof E) {
            if (n.node.isTextblock || !Ve(t.doc, n.to)) return !1;
            r = n.to
        } else if (r = zn(t.doc, n.to, 1), r == null) return !1;
        return e && e(t.tr.join(r).scrollIntoView()), !0
    },
    Qc = (t, e) => {
        let {
            $from: n,
            $to: r
        } = t.selection, i = n.blockRange(r), s = i && bt(i);
        return s == null ? !1 : (e && e(t.tr.lift(i, s).scrollIntoView()), !0)
    },
    Uo = (t, e) => {
        let {
            $head: n,
            $anchor: r
        } = t.selection;
        return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0)
    };

function Zr(t) {
    for (let e = 0; e < t.edgeCount; e++) {
        let {
            type: n
        } = t.edge(e);
        if (n.isTextblock && !n.hasRequiredAttrs()) return n
    }
    return null
}
var Go = (t, e) => {
        let {
            $head: n,
            $anchor: r
        } = t.selection;
        if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
        let i = n.node(-1),
            s = n.indexAfter(-1),
            o = Zr(i.contentMatchAt(s));
        if (!o || !i.canReplaceWith(s, s, o)) return !1;
        if (e) {
            let l = n.after(),
                a = t.tr.replaceWith(l, l, o.createAndFill());
            a.setSelection(D.near(a.doc.resolve(l), 1)), e(a.scrollIntoView())
        }
        return !0
    },
    Yo = (t, e) => {
        let n = t.selection,
            {
                $from: r,
                $to: i
            } = n;
        if (n instanceof be || r.parent.inlineContent || i.parent.inlineContent) return !1;
        let s = Zr(i.parent.contentMatchAt(i.indexAfter()));
        if (!s || !s.isTextblock) return !1;
        if (e) {
            let o = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos,
                l = t.tr.insert(o, s.createAndFill());
            l.setSelection(A.create(l.doc, o + 1)), e(l.scrollIntoView())
        }
        return !0
    },
    Xo = (t, e) => {
        let {
            $cursor: n
        } = t.selection;
        if (!n || n.parent.content.size) return !1;
        if (n.depth > 1 && n.after() != n.end(-1)) {
            let s = n.before();
            if (Ce(t.doc, s)) return e && e(t.tr.split(s).scrollIntoView()), !0
        }
        let r = n.blockRange(),
            i = r && bt(r);
        return i == null ? !1 : (e && e(t.tr.lift(r, i).scrollIntoView()), !0)
    };

function eu(t) {
    return (e, n) => {
        let {
            $from: r,
            $to: i
        } = e.selection;
        if (e.selection instanceof E && e.selection.node.isBlock) return !r.parentOffset || !Ce(e.doc, r.pos) ? !1 : (n && n(e.tr.split(r.pos).scrollIntoView()), !0);
        if (!r.depth) return !1;
        let s = [],
            o, l, a = !1,
            c = !1;
        for (let h = r.depth;; h--)
            if (r.node(h).isBlock) {
                a = r.end(h) == r.pos + (r.depth - h), c = r.start(h) == r.pos - (r.depth - h), l = Zr(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1)));
                let p = t && t(i.parent, a, r);
                s.unshift(p || (a && l ? {
                    type: l
                } : null)), o = h;
                break
            } else {
                if (h == 1) return !1;
                s.unshift(null)
            }
        let u = e.tr;
        (e.selection instanceof A || e.selection instanceof be) && u.deleteSelection();
        let d = u.mapping.map(r.pos),
            f = Ce(u.doc, d, s.length, s);
        if (f || (s[0] = l ? {
                type: l
            } : null, f = Ce(u.doc, d, s.length, s)), !f) return !1;
        if (u.split(d, s.length, s), !a && c && r.node(o).type != l) {
            let h = u.mapping.map(r.before(o)),
                p = u.doc.resolve(h);
            l && r.node(o - 1).canReplaceWith(p.index(), p.index() + 1, l) && u.setNodeMarkup(u.mapping.map(r.before(o)), l)
        }
        return n && n(u.scrollIntoView()), !0
    }
}
var tu = eu(),
    nu = (t, e) => {
        let {
            $from: n,
            to: r
        } = t.selection, i, s = n.sharedDepth(r);
        return s == 0 ? !1 : (i = n.before(s), e && e(t.tr.setSelection(E.create(t.doc, i))), !0)
    },
    ru = (t, e) => (e && e(t.tr.setSelection(new be(t.doc))), !0);

function iu(t, e, n) {
    let r = e.nodeBefore,
        i = e.nodeAfter,
        s = e.index();
    return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(s - 1, s) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(i.isTextblock || Ve(t.doc, e.pos)) ? !1 : (n && n(t.tr.join(e.pos).scrollIntoView()), !0)
}

function Zo(t, e, n, r) {
    let i = e.nodeBefore,
        s = e.nodeAfter,
        o, l, a = i.type.spec.isolating || s.type.spec.isolating;
    if (!a && iu(t, e, n)) return !0;
    let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
    if (c && (o = (l = i.contentMatchAt(i.childCount)).findWrapping(s.type)) && l.matchType(o[0] || s.type).validEnd) {
        if (n) {
            let h = e.pos + s.nodeSize,
                p = v.empty;
            for (let y = o.length - 1; y >= 0; y--) p = v.from(o[y].create(null, p));
            p = v.from(i.copy(p));
            let m = t.tr.step(new le(e.pos - 1, h, e.pos, h, new k(p, 1, 0), o.length, !0)),
                g = m.doc.resolve(h + 2 * o.length);
            g.nodeAfter && g.nodeAfter.type == i.type && Ve(m.doc, g.pos) && m.join(g.pos), n(m.scrollIntoView())
        }
        return !0
    }
    let u = s.type.spec.isolating || r > 0 && a ? null : D.findFrom(e, 1),
        d = u && u.$from.blockRange(u.$to),
        f = d && bt(d);
    if (f != null && f >= e.depth) return n && n(t.tr.lift(d, f).scrollIntoView()), !0;
    if (c && ht(s, "start", !0) && ht(i, "end")) {
        let h = i,
            p = [];
        for (; p.push(h), !h.isTextblock;) h = h.lastChild;
        let m = s,
            g = 1;
        for (; !m.isTextblock; m = m.firstChild) g++;
        if (h.canReplace(h.childCount, h.childCount, m.content)) {
            if (n) {
                let y = v.empty;
                for (let b = p.length - 1; b >= 0; b--) y = v.from(p[b].copy(y));
                n(t.tr.step(new le(e.pos - p.length, e.pos + s.nodeSize, e.pos + g, e.pos + s.nodeSize - g, new k(y, p.length, 0), 0, !0)).scrollIntoView())
            }
            return !0
        }
    }
    return !1
}

function Qo(t) {
    return function(e, n) {
        let r = e.selection,
            i = t < 0 ? r.$from : r.$to,
            s = i.depth;
        for (; i.node(s).isInline;) {
            if (!s) return !1;
            s--
        }
        return i.node(s).isTextblock ? (n && n(e.tr.setSelection(A.create(e.doc, t < 0 ? i.start(s) : i.end(s)))), !0) : !1
    }
}
var el = Qo(-1),
    tl = Qo(1);

function su(t, e = null) {
    return function(n, r) {
        let {
            $from: i,
            $to: s
        } = n.selection, o = i.blockRange(s), l = o && Ur(o, t, e);
        return l ? (r && r(n.tr.wrap(o, l).scrollIntoView()), !0) : !1
    }
}

function _i(t, e = null) {
    return function(n, r) {
        let i = !1;
        for (let s = 0; s < n.selection.ranges.length && !i; s++) {
            let {
                $from: {
                    pos: o
                },
                $to: {
                    pos: l
                }
            } = n.selection.ranges[s];
            n.doc.nodesBetween(o, l, (a, c) => {
                if (i) return !1;
                if (!(!a.isTextblock || a.hasMarkup(t, e)))
                    if (a.type == t) i = !0;
                    else {
                        let u = n.doc.resolve(c),
                            d = u.index();
                        i = u.parent.canReplaceWith(d, d + 1, t)
                    }
            })
        }
        if (!i) return !1;
        if (r) {
            let s = n.tr;
            for (let o = 0; o < n.selection.ranges.length; o++) {
                let {
                    $from: {
                        pos: l
                    },
                    $to: {
                        pos: a
                    }
                } = n.selection.ranges[o];
                s.setBlockType(l, a, t, e)
            }
            r(s.scrollIntoView())
        }
        return !0
    }
}

function Qr(...t) {
    return function(e, n, r) {
        for (let i = 0; i < t.length; i++)
            if (t[i](e, n, r)) return !0;
        return !1
    }
}
var ir = Qr(Gr, _o, jo),
    Wi = Qr(Gr, Jo, Ko),
    we = {
        Enter: Qr(Uo, Yo, Xo, tu),
        "Mod-Enter": Go,
        Backspace: ir,
        "Mod-Backspace": ir,
        "Shift-Backspace": ir,
        Delete: Wi,
        "Mod-Delete": Wi,
        "Mod-a": ru
    },
    nl = {
        "Ctrl-h": we.Backspace,
        "Alt-Backspace": we["Mod-Backspace"],
        "Ctrl-d": we.Delete,
        "Ctrl-Alt-Backspace": we["Mod-Delete"],
        "Alt-Delete": we["Mod-Delete"],
        "Alt-d": we["Mod-Delete"],
        "Ctrl-a": el,
        "Ctrl-e": tl
    };
for (let t in we) nl[t] = we[t];
var Ym = (typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin") ? nl : we;

function ou(t, e = null) {
    return function(n, r) {
        let {
            $from: i,
            $to: s
        } = n.selection, o = i.blockRange(s);
        if (!o) return !1;
        let l = r ? n.tr : null;
        return lu(l, o, t, e) ? (r && r(l.scrollIntoView()), !0) : !1
    }
}

function lu(t, e, n, r = null) {
    let i = !1,
        s = e,
        o = e.$from.doc;
    if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
        if (e.$from.index(e.depth - 1) == 0) return !1;
        let a = o.resolve(e.start - 2);
        s = new wn(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new wn(e.$from, o.resolve(e.$to.end(e.depth)), e.depth)), i = !0
    }
    let l = Ur(s, n, r, e);
    return l ? (t && au(t, e, l, i, n), !0) : !1
}

function au(t, e, n, r, i) {
    let s = v.empty;
    for (let u = n.length - 1; u >= 0; u--) s = v.from(n[u].type.create(n[u].attrs, s));
    t.step(new le(e.start - (r ? 2 : 0), e.end, e.start, e.end, new k(s, 0, 0), n.length, !0));
    let o = 0;
    for (let u = 0; u < n.length; u++) n[u].type == i && (o = u + 1);
    let l = n.length - o,
        a = e.start + n.length - (r ? 2 : 0),
        c = e.parent;
    for (let u = e.startIndex, d = e.endIndex, f = !0; u < d; u++, f = !1) !f && Ce(t.doc, a, l) && (t.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
    return t
}

function cu(t) {
    return function(e, n) {
        let {
            $from: r,
            $to: i
        } = e.selection, s = r.blockRange(i, o => o.childCount > 0 && o.firstChild.type == t);
        return s ? n ? r.node(s.depth - 1).type == t ? uu(e, n, t, s) : du(e, n, s) : !0 : !1
    }
}

function uu(t, e, n, r) {
    let i = t.tr,
        s = r.end,
        o = r.$to.end(r.depth);
    s < o && (i.step(new le(s - 1, o, s, o, new k(v.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new wn(i.doc.resolve(r.$from.pos), i.doc.resolve(o), r.depth));
    const l = bt(r);
    if (l == null) return !1;
    i.lift(r, l);
    let a = i.doc.resolve(i.mapping.map(s, -1) - 1);
    return Ve(i.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && i.join(a.pos), e(i.scrollIntoView()), !0
}

function du(t, e, n) {
    let r = t.tr,
        i = n.parent;
    for (let h = n.end, p = n.endIndex - 1, m = n.startIndex; p > m; p--) h -= i.child(p).nodeSize, r.delete(h - 1, h + 1);
    let s = r.doc.resolve(n.start),
        o = s.nodeAfter;
    if (r.mapping.map(n.end) != n.start + s.nodeAfter.nodeSize) return !1;
    let l = n.startIndex == 0,
        a = n.endIndex == i.childCount,
        c = s.node(-1),
        u = s.index(-1);
    if (!c.canReplace(u + (l ? 0 : 1), u + 1, o.content.append(a ? v.empty : v.from(i)))) return !1;
    let d = s.pos,
        f = d + o.nodeSize;
    return r.step(new le(d - (l ? 1 : 0), f + (a ? 1 : 0), d + 1, f - 1, new k((l ? v.empty : v.from(i.copy(v.empty))).append(a ? v.empty : v.from(i.copy(v.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0
}

function fu(t) {
    return function(e, n) {
        let {
            $from: r,
            $to: i
        } = e.selection, s = r.blockRange(i, c => c.childCount > 0 && c.firstChild.type == t);
        if (!s) return !1;
        let o = s.startIndex;
        if (o == 0) return !1;
        let l = s.parent,
            a = l.child(o - 1);
        if (a.type != t) return !1;
        if (n) {
            let c = a.lastChild && a.lastChild.type == l.type,
                u = v.from(c ? t.create() : null),
                d = new k(v.from(t.create(null, v.from(l.type.create(null, u)))), c ? 3 : 1, 0),
                f = s.start,
                h = s.end;
            n(e.tr.step(new le(f - (c ? 3 : 1), h, f, h, d, 1, !0)).scrollIntoView())
        }
        return !0
    }
}
var K = function(t) {
        for (var e = 0;; e++)
            if (t = t.previousSibling, !t) return e
    },
    pt = function(t) {
        let e = t.assignedSlot || t.parentNode;
        return e && e.nodeType == 11 ? e.host : e
    },
    Er = null,
    ke = function(t, e, n) {
        let r = Er || (Er = document.createRange());
        return r.setEnd(t, n ? ? t.nodeValue.length), r.setStart(t, e || 0), r
    },
    hu = function() {
        Er = null
    },
    Xe = function(t, e, n, r) {
        return n && (ji(t, e, n, r, -1) || ji(t, e, n, r, 1))
    },
    pu = /^(img|br|input|textarea|hr)$/i;

function ji(t, e, n, r, i) {
    for (var s;;) {
        if (t == n && e == r) return !0;
        if (e == (i < 0 ? 0 : de(t))) {
            let o = t.parentNode;
            if (!o || o.nodeType != 1 || Zt(t) || pu.test(t.nodeName) || t.contentEditable == "false") return !1;
            e = K(t) + (i < 0 ? 0 : 1), t = o
        } else if (t.nodeType == 1) {
            let o = t.childNodes[e + (i < 0 ? -1 : 0)];
            if (o.nodeType == 1 && o.contentEditable == "false")
                if (!((s = o.pmViewDesc) === null || s === void 0) && s.ignoreForSelection) e += i;
                else return !1;
            else t = o, e = i < 0 ? de(t) : 0
        } else return !1
    }
}

function de(t) {
    return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length
}

function mu(t, e) {
    for (;;) {
        if (t.nodeType == 3 && e) return t;
        if (t.nodeType == 1 && e > 0) {
            if (t.contentEditable == "false") return null;
            t = t.childNodes[e - 1], e = de(t)
        } else if (t.parentNode && !Zt(t)) e = K(t), t = t.parentNode;
        else return null
    }
}

function gu(t, e) {
    for (;;) {
        if (t.nodeType == 3 && e < t.nodeValue.length) return t;
        if (t.nodeType == 1 && e < t.childNodes.length) {
            if (t.contentEditable == "false") return null;
            t = t.childNodes[e], e = 0
        } else if (t.parentNode && !Zt(t)) e = K(t) + 1, t = t.parentNode;
        else return null
    }
}

function yu(t, e, n) {
    for (let r = e == 0, i = e == de(t); r || i;) {
        if (t == n) return !0;
        let s = K(t);
        if (t = t.parentNode, !t) return !1;
        r = r && s == 0, i = i && s == de(t)
    }
}

function Zt(t) {
    let e;
    for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode);
    return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t)
}
var $n = function(t) {
    return t.focusNode && Xe(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset)
};

function _e(t, e) {
    let n = document.createEvent("Event");
    return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n
}

function bu(t) {
    let e = t.activeElement;
    for (; e && e.shadowRoot;) e = e.shadowRoot.activeElement;
    return e
}

function vu(t, e, n) {
    if (t.caretPositionFromPoint) try {
        let r = t.caretPositionFromPoint(e, n);
        if (r) return {
            node: r.offsetNode,
            offset: Math.min(de(r.offsetNode), r.offset)
        }
    } catch {}
    if (t.caretRangeFromPoint) {
        let r = t.caretRangeFromPoint(e, n);
        if (r) return {
            node: r.startContainer,
            offset: Math.min(de(r.startContainer), r.startOffset)
        }
    }
}
var ve = typeof navigator < "u" ? navigator : null,
    Hi = typeof document < "u" ? document : null,
    Fe = ve && ve.userAgent || "",
    Tr = /Edge\/(\d+)/.exec(Fe),
    rl = /MSIE \d/.exec(Fe),
    Nr = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Fe),
    oe = !!(rl || Nr || Tr),
    ze = rl ? document.documentMode : Nr ? +Nr[1] : Tr ? +Tr[1] : 0,
    he = !oe && /gecko\/(\d+)/i.test(Fe);
he && +(/Firefox\/(\d+)/.exec(Fe) || [0, 0])[1];
var Or = !oe && /Chrome\/(\d+)/.exec(Fe),
    q = !!Or,
    il = Or ? +Or[1] : 0,
    X = !oe && !!ve && /Apple Computer/.test(ve.vendor),
    mt = X && (/Mobile\/\w+/.test(Fe) || !!ve && ve.maxTouchPoints > 2),
    ue = mt || (ve ? /Mac/.test(ve.platform) : !1),
    sl = ve ? /Win/.test(ve.platform) : !1,
    Me = /Android \d/.test(Fe),
    Qt = !!Hi && "webkitFontSmoothing" in Hi.documentElement.style,
    Su = Qt ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;

function xu(t) {
    let e = t.defaultView && t.defaultView.visualViewport;
    return e ? {
        left: 0,
        right: e.width,
        top: 0,
        bottom: e.height
    } : {
        left: 0,
        right: t.documentElement.clientWidth,
        top: 0,
        bottom: t.documentElement.clientHeight
    }
}

function xe(t, e) {
    return typeof t == "number" ? t : t[e]
}

function ku(t) {
    let e = t.getBoundingClientRect(),
        n = e.width / t.offsetWidth || 1,
        r = e.height / t.offsetHeight || 1;
    return {
        left: e.left,
        right: e.left + t.clientWidth * n,
        top: e.top,
        bottom: e.top + t.clientHeight * r
    }
}

function Ji(t, e, n) {
    let r = t.someProp("scrollThreshold") || 0,
        i = t.someProp("scrollMargin") || 5,
        s = t.dom.ownerDocument;
    for (let o = n || t.dom; o;) {
        if (o.nodeType != 1) {
            o = pt(o);
            continue
        }
        let l = o,
            a = l == s.body,
            c = a ? xu(s) : ku(l),
            u = 0,
            d = 0;
        if (e.top < c.top + xe(r, "top") ? d = -(c.top - e.top + xe(i, "top")) : e.bottom > c.bottom - xe(r, "bottom") && (d = e.bottom - e.top > c.bottom - c.top ? e.top + xe(i, "top") - c.top : e.bottom - c.bottom + xe(i, "bottom")), e.left < c.left + xe(r, "left") ? u = -(c.left - e.left + xe(i, "left")) : e.right > c.right - xe(r, "right") && (u = e.right - c.right + xe(i, "right")), u || d)
            if (a) s.defaultView.scrollBy(u, d);
            else {
                let h = l.scrollLeft,
                    p = l.scrollTop;
                d && (l.scrollTop += d), u && (l.scrollLeft += u);
                let m = l.scrollLeft - h,
                    g = l.scrollTop - p;
                e = {
                    left: e.left - m,
                    top: e.top - g,
                    right: e.right - m,
                    bottom: e.bottom - g
                }
            }
        let f = a ? "fixed" : getComputedStyle(o).position;
        if (/^(fixed|sticky)$/.test(f)) break;
        o = f == "absolute" ? o.offsetParent : pt(o)
    }
}

function wu(t) {
    let e = t.dom.getBoundingClientRect(),
        n = Math.max(0, e.top),
        r, i;
    for (let s = (e.left + e.right) / 2, o = n + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
        let l = t.root.elementFromPoint(s, o);
        if (!l || l == t.dom || !t.dom.contains(l)) continue;
        let a = l.getBoundingClientRect();
        if (a.top >= n - 20) {
            r = l, i = a.top;
            break
        }
    }
    return {
        refDOM: r,
        refTop: i,
        stack: ol(t.dom)
    }
}

function ol(t) {
    let e = [],
        n = t.ownerDocument;
    for (let r = t; r && (e.push({
            dom: r,
            top: r.scrollTop,
            left: r.scrollLeft
        }), t != n); r = pt(r));
    return e
}

function Mu({
    refDOM: t,
    refTop: e,
    stack: n
}) {
    let r = t ? t.getBoundingClientRect().top : 0;
    ll(n, r == 0 ? 0 : r - e)
}

function ll(t, e) {
    for (let n = 0; n < t.length; n++) {
        let {
            dom: r,
            top: i,
            left: s
        } = t[n];
        r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != s && (r.scrollLeft = s)
    }
}
var tt = null;

function Cu(t) {
    if (t.setActive) return t.setActive();
    if (tt) return t.focus(tt);
    let e = ol(t);
    t.focus(tt == null ? {
        get preventScroll() {
            return tt = {
                preventScroll: !0
            }, !0
        }
    } : void 0), tt || (tt = !1, ll(e, 0))
}

function al(t, e) {
    let n, r = 2e8,
        i, s = 0,
        o = e.top,
        l = e.top,
        a, c;
    for (let u = t.firstChild, d = 0; u; u = u.nextSibling, d++) {
        let f;
        if (u.nodeType == 1) f = u.getClientRects();
        else if (u.nodeType == 3) f = ke(u).getClientRects();
        else continue;
        for (let h = 0; h < f.length; h++) {
            let p = f[h];
            if (p.top <= o && p.bottom >= l) {
                o = Math.max(p.bottom, o), l = Math.min(p.top, l);
                let m = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
                if (m < r) {
                    n = u, r = m, i = m && n.nodeType == 3 ? {
                        left: p.right < e.left ? p.right : p.left,
                        top: e.top
                    } : e, u.nodeType == 1 && m && (s = d + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
                    continue
                }
            } else p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = u, c = {
                left: Math.max(p.left, Math.min(p.right, e.left)),
                top: p.top
            });
            !n && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (s = d + 1)
        }
    }
    return !n && a && (n = a, i = c, r = 0), n && n.nodeType == 3 ? Eu(n, i) : !n || r && n.nodeType == 1 ? {
        node: t,
        offset: s
    } : al(n, i)
}

function Eu(t, e) {
    let n = t.nodeValue.length,
        r = document.createRange(),
        i;
    for (let s = 0; s < n; s++) {
        r.setEnd(t, s + 1), r.setStart(t, s);
        let o = Oe(r, 1);
        if (o.top != o.bottom && ei(e, o)) {
            i = {
                node: t,
                offset: s + (e.left >= (o.left + o.right) / 2 ? 1 : 0)
            };
            break
        }
    }
    return r.detach(), i || {
        node: t,
        offset: 0
    }
}

function ei(t, e) {
    return t.left >= e.left - 1 && t.left <= e.right + 1 && t.top >= e.top - 1 && t.top <= e.bottom + 1
}

function Tu(t, e) {
    let n = t.parentNode;
    return n && /^li$/i.test(n.nodeName) && e.left < t.getBoundingClientRect().left ? n : t
}

function Nu(t, e, n) {
    let {
        node: r,
        offset: i
    } = al(e, n), s = -1;
    if (r.nodeType == 1 && !r.firstChild) {
        let o = r.getBoundingClientRect();
        s = o.left != o.right && n.left > (o.left + o.right) / 2 ? 1 : -1
    }
    return t.docView.posFromDOM(r, i, s)
}

function Ou(t, e, n, r) {
    let i = -1;
    for (let s = e, o = !1; s != t.dom;) {
        let l = t.docView.nearestDesc(s, !0),
            a;
        if (!l) return null;
        if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM) && ((a = l.dom.getBoundingClientRect()).width || a.height) && (l.node.isBlock && l.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(l.dom.nodeName) && (!o && a.left > r.left || a.top > r.top ? i = l.posBefore : (!o && a.right < r.left || a.bottom < r.top) && (i = l.posAfter), o = !0), !l.contentDOM && i < 0 && !l.node.isText)) return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
        s = l.dom.parentNode
    }
    return i > -1 ? i : t.docView.posFromDOM(e, n, -1)
}

function cl(t, e, n) {
    let r = t.childNodes.length;
    if (r && n.top < n.bottom)
        for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - n.top) / (n.bottom - n.top)) - 2)), s = i;;) {
            let o = t.childNodes[s];
            if (o.nodeType == 1) {
                let l = o.getClientRects();
                for (let a = 0; a < l.length; a++) {
                    let c = l[a];
                    if (ei(e, c)) return cl(o, e, c)
                }
            }
            if ((s = (s + 1) % r) == i) break
        }
    return t
}

function Du(t, e) {
    let n = t.dom.ownerDocument,
        r, i = 0,
        s = vu(n, e.left, e.top);
    s && ({
        node: r,
        offset: i
    } = s);
    let o = (t.root.elementFromPoint ? t.root : n).elementFromPoint(e.left, e.top),
        l;
    if (!o || !t.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
        let c = t.dom.getBoundingClientRect();
        if (!ei(e, c) || (o = cl(t.dom, e, c), !o)) return null
    }
    if (X)
        for (let c = o; r && c; c = pt(c)) c.draggable && (r = void 0);
    if (o = Tu(o, e), r) {
        if (he && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
            let u = r.childNodes[i],
                d;
            u.nodeName == "IMG" && (d = u.getBoundingClientRect()).right <= e.left && d.bottom > e.top && i++
        }
        let c;
        Qt && i && r.nodeType == 1 && (c = r.childNodes[i - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && i--, r == t.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = t.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = Ou(t, r, i, e))
    }
    l == null && (l = Nu(t, o, e));
    let a = t.docView.nearestDesc(o, !0);
    return {
        pos: l,
        inside: a ? a.posAtStart - a.border : -1
    }
}

function Ki(t) {
    return t.top < t.bottom || t.left < t.right
}

function Oe(t, e) {
    let n = t.getClientRects();
    if (n.length) {
        let r = n[e < 0 ? 0 : n.length - 1];
        if (Ki(r)) return r
    }
    return Array.prototype.find.call(n, Ki) || t.getBoundingClientRect()
}
var Au = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;

function ul(t, e, n) {
    let {
        node: r,
        offset: i,
        atom: s
    } = t.docView.domFromPos(e, n < 0 ? -1 : 1), o = Qt || he;
    if (r.nodeType == 3)
        if (o && (Au.test(r.nodeValue) || (n < 0 ? !i : i == r.nodeValue.length))) {
            let l = Oe(ke(r, i, i), n);
            if (he && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
                let a = Oe(ke(r, i - 1, i - 1), -1);
                if (a.top == l.top) {
                    let c = Oe(ke(r, i, i + 1), -1);
                    if (c.top != l.top) return St(c, c.left < a.left)
                }
            }
            return l
        } else {
            let l = i,
                a = i,
                c = n < 0 ? 1 : -1;
            return n < 0 && !i ? (a++, c = -1) : n >= 0 && i == r.nodeValue.length ? (l--, c = 1) : n < 0 ? l-- : a++, St(Oe(ke(r, l, a), c), c < 0)
        }
    if (!t.state.doc.resolve(e - (s || 0)).parent.inlineContent) {
        if (s == null && i && (n < 0 || i == de(r))) {
            let l = r.childNodes[i - 1];
            if (l.nodeType == 1) return sr(l.getBoundingClientRect(), !1)
        }
        if (s == null && i < de(r)) {
            let l = r.childNodes[i];
            if (l.nodeType == 1) return sr(l.getBoundingClientRect(), !0)
        }
        return sr(r.getBoundingClientRect(), n >= 0)
    }
    if (s == null && i && (n < 0 || i == de(r))) {
        let l = r.childNodes[i - 1],
            a = l.nodeType == 3 ? ke(l, de(l) - (o ? 0 : 1)) : l.nodeType == 1 && (l.nodeName != "BR" || !l.nextSibling) ? l : null;
        if (a) return St(Oe(a, 1), !1)
    }
    if (s == null && i < de(r)) {
        let l = r.childNodes[i];
        for (; l.pmViewDesc && l.pmViewDesc.ignoreForCoords;) l = l.nextSibling;
        let a = l ? l.nodeType == 3 ? ke(l, 0, o ? 0 : 1) : l.nodeType == 1 ? l : null : null;
        if (a) return St(Oe(a, -1), !0)
    }
    return St(Oe(r.nodeType == 3 ? ke(r) : r, -n), n >= 0)
}

function St(t, e) {
    if (t.width == 0) return t;
    let n = e ? t.left : t.right;
    return {
        top: t.top,
        bottom: t.bottom,
        left: n,
        right: n
    }
}

function sr(t, e) {
    if (t.height == 0) return t;
    let n = e ? t.top : t.bottom;
    return {
        top: n,
        bottom: n,
        left: t.left,
        right: t.right
    }
}

function dl(t, e, n) {
    let r = t.state,
        i = t.root.activeElement;
    r != e && t.updateState(e), i != t.dom && t.focus();
    try {
        return n()
    } finally {
        r != e && t.updateState(r), i != t.dom && i && i.focus()
    }
}

function Ru(t, e, n) {
    let r = e.selection,
        i = n == "up" ? r.$from : r.$to;
    return dl(t, e, () => {
        let {
            node: s
        } = t.docView.domFromPos(i.pos, n == "up" ? -1 : 1);
        for (;;) {
            let l = t.docView.nearestDesc(s, !0);
            if (!l) break;
            if (l.node.isBlock) {
                s = l.contentDOM || l.dom;
                break
            }
            s = l.dom.parentNode
        }
        let o = ul(t, i.pos, 1);
        for (let l = s.firstChild; l; l = l.nextSibling) {
            let a;
            if (l.nodeType == 1) a = l.getClientRects();
            else if (l.nodeType == 3) a = ke(l, 0, l.nodeValue.length).getClientRects();
            else continue;
            for (let c = 0; c < a.length; c++) {
                let u = a[c];
                if (u.bottom > u.top + 1 && (n == "up" ? o.top - u.top > (u.bottom - o.top) * 2 : u.bottom - o.bottom > (o.bottom - u.top) * 2)) return !1
            }
        }
        return !0
    })
}
var Iu = /[\u0590-\u08ac]/;

function Pu(t, e, n) {
    let {
        $head: r
    } = e.selection;
    if (!r.parent.isTextblock) return !1;
    let i = r.parentOffset,
        s = !i,
        o = i == r.parent.content.size,
        l = t.domSelection();
    return l ? !Iu.test(r.parent.textContent) || !l.modify ? n == "left" || n == "backward" ? s : o : dl(t, e, () => {
        let {
            focusNode: a,
            focusOffset: c,
            anchorNode: u,
            anchorOffset: d
        } = t.domSelectionRange(), f = l.caretBidiLevel;
        l.modify("move", n, "character");
        let h = r.depth ? t.docView.domAfterPos(r.before()) : t.dom,
            {
                focusNode: p,
                focusOffset: m
            } = t.domSelectionRange(),
            g = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == m;
        try {
            l.collapse(u, d), a && (a != u || c != d) && l.extend && l.extend(a, c)
        } catch {}
        return f != null && (l.caretBidiLevel = f), g
    }) : r.pos == r.start() || r.pos == r.end()
}
var Ui = null,
    Gi = null,
    Yi = !1;

function zu(t, e, n) {
    return Ui == e && Gi == n ? Yi : (Ui = e, Gi = n, Yi = n == "up" || n == "down" ? Ru(t, e, n) : Pu(t, e, n))
}
var pe = 0,
    Xi = 1,
    We = 2,
    Se = 3,
    en = class {
        constructor(t, e, n, r) {
            this.parent = t, this.children = e, this.dom = n, this.contentDOM = r, this.dirty = pe, n.pmViewDesc = this
        }
        matchesWidget(t) {
            return !1
        }
        matchesMark(t) {
            return !1
        }
        matchesNode(t, e, n) {
            return !1
        }
        matchesHack(t) {
            return !1
        }
        parseRule() {
            return null
        }
        stopEvent(t) {
            return !1
        }
        get size() {
            let t = 0;
            for (let e = 0; e < this.children.length; e++) t += this.children[e].size;
            return t
        }
        get border() {
            return 0
        }
        destroy() {
            this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
            for (let t = 0; t < this.children.length; t++) this.children[t].destroy()
        }
        posBeforeChild(t) {
            for (let e = 0, n = this.posAtStart;; e++) {
                let r = this.children[e];
                if (r == t) return n;
                n += r.size
            }
        }
        get posBefore() {
            return this.parent.posBeforeChild(this)
        }
        get posAtStart() {
            return this.parent ? this.parent.posBeforeChild(this) + this.border : 0
        }
        get posAfter() {
            return this.posBefore + this.size
        }
        get posAtEnd() {
            return this.posAtStart + this.size - 2 * this.border
        }
        localPosFromDOM(t, e, n) {
            if (this.contentDOM && this.contentDOM.contains(t.nodeType == 1 ? t : t.parentNode))
                if (n < 0) {
                    let i, s;
                    if (t == this.contentDOM) i = t.childNodes[e - 1];
                    else {
                        for (; t.parentNode != this.contentDOM;) t = t.parentNode;
                        i = t.previousSibling
                    }
                    for (; i && !((s = i.pmViewDesc) && s.parent == this);) i = i.previousSibling;
                    return i ? this.posBeforeChild(s) + s.size : this.posAtStart
                } else {
                    let i, s;
                    if (t == this.contentDOM) i = t.childNodes[e];
                    else {
                        for (; t.parentNode != this.contentDOM;) t = t.parentNode;
                        i = t.nextSibling
                    }
                    for (; i && !((s = i.pmViewDesc) && s.parent == this);) i = i.nextSibling;
                    return i ? this.posBeforeChild(s) : this.posAtEnd
                }
            let r;
            if (t == this.dom && this.contentDOM) r = e > K(this.contentDOM);
            else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) r = t.compareDocumentPosition(this.contentDOM) & 2;
            else if (this.dom.firstChild) {
                if (e == 0)
                    for (let i = t;; i = i.parentNode) {
                        if (i == this.dom) {
                            r = !1;
                            break
                        }
                        if (i.previousSibling) break
                    }
                if (r == null && e == t.childNodes.length)
                    for (let i = t;; i = i.parentNode) {
                        if (i == this.dom) {
                            r = !0;
                            break
                        }
                        if (i.nextSibling) break
                    }
            }
            return r ? ? n > 0 ? this.posAtEnd : this.posAtStart
        }
        nearestDesc(t, e = !1) {
            for (let n = !0, r = t; r; r = r.parentNode) {
                let i = this.getDesc(r),
                    s;
                if (i && (!e || i.node))
                    if (n && (s = i.nodeDOM) && !(s.nodeType == 1 ? s.contains(t.nodeType == 1 ? t : t.parentNode) : s == t)) n = !1;
                    else return i
            }
        }
        getDesc(t) {
            let e = t.pmViewDesc;
            for (let n = e; n; n = n.parent)
                if (n == this) return e
        }
        posFromDOM(t, e, n) {
            for (let r = t; r; r = r.parentNode) {
                let i = this.getDesc(r);
                if (i) return i.localPosFromDOM(t, e, n)
            }
            return -1
        }
        descAt(t) {
            for (let e = 0, n = 0; e < this.children.length; e++) {
                let r = this.children[e],
                    i = n + r.size;
                if (n == t && i != n) {
                    for (; !r.border && r.children.length;)
                        for (let s = 0; s < r.children.length; s++) {
                            let o = r.children[s];
                            if (o.size) {
                                r = o;
                                break
                            }
                        }
                    return r
                }
                if (t < i) return r.descAt(t - n - r.border);
                n = i
            }
        }
        domFromPos(t, e) {
            if (!this.contentDOM) return {
                node: this.dom,
                offset: 0,
                atom: t + 1
            };
            let n = 0,
                r = 0;
            for (let i = 0; n < this.children.length; n++) {
                let s = this.children[n],
                    o = i + s.size;
                if (o > t || s instanceof gl) {
                    r = t - i;
                    break
                }
                i = o
            }
            if (r) return this.children[n].domFromPos(r - this.children[n].border, e);
            for (let i; n && !(i = this.children[n - 1]).size && i instanceof fl && i.side >= 0; n--);
            if (e <= 0) {
                let i, s = !0;
                for (; i = n ? this.children[n - 1] : null, !(!i || i.dom.parentNode == this.contentDOM); n--, s = !1);
                return i && e && s && !i.border && !i.domAtom ? i.domFromPos(i.size, e) : {
                    node: this.contentDOM,
                    offset: i ? K(i.dom) + 1 : 0
                }
            } else {
                let i, s = !0;
                for (; i = n < this.children.length ? this.children[n] : null, !(!i || i.dom.parentNode == this.contentDOM); n++, s = !1);
                return i && s && !i.border && !i.domAtom ? i.domFromPos(0, e) : {
                    node: this.contentDOM,
                    offset: i ? K(i.dom) : this.contentDOM.childNodes.length
                }
            }
        }
        parseRange(t, e, n = 0) {
            if (this.children.length == 0) return {
                node: this.contentDOM,
                from: t,
                to: e,
                fromOffset: 0,
                toOffset: this.contentDOM.childNodes.length
            };
            let r = -1,
                i = -1;
            for (let s = n, o = 0;; o++) {
                let l = this.children[o],
                    a = s + l.size;
                if (r == -1 && t <= a) {
                    let c = s + l.border;
                    if (t >= c && e <= a - l.border && l.node && l.contentDOM && this.contentDOM.contains(l.contentDOM)) return l.parseRange(t, e, c);
                    t = s;
                    for (let u = o; u > 0; u--) {
                        let d = this.children[u - 1];
                        if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(1)) {
                            r = K(d.dom) + 1;
                            break
                        }
                        t -= d.size
                    }
                    r == -1 && (r = 0)
                }
                if (r > -1 && (a > e || o == this.children.length - 1)) {
                    e = a;
                    for (let c = o + 1; c < this.children.length; c++) {
                        let u = this.children[c];
                        if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(-1)) {
                            i = K(u.dom);
                            break
                        }
                        e += u.size
                    }
                    i == -1 && (i = this.contentDOM.childNodes.length);
                    break
                }
                s = a
            }
            return {
                node: this.contentDOM,
                from: t,
                to: e,
                fromOffset: r,
                toOffset: i
            }
        }
        emptyChildAt(t) {
            if (this.border || !this.contentDOM || !this.children.length) return !1;
            let e = this.children[t < 0 ? 0 : this.children.length - 1];
            return e.size == 0 || e.emptyChildAt(t)
        }
        domAfterPos(t) {
            let {
                node: e,
                offset: n
            } = this.domFromPos(t, 0);
            if (e.nodeType != 1 || n == e.childNodes.length) throw new RangeError("No node after pos " + t);
            return e.childNodes[n]
        }
        setSelection(t, e, n, r = !1) {
            let i = Math.min(t, e),
                s = Math.max(t, e);
            for (let f = 0, h = 0; f < this.children.length; f++) {
                let p = this.children[f],
                    m = h + p.size;
                if (i > h && s < m) return p.setSelection(t - h - p.border, e - h - p.border, n, r);
                h = m
            }
            let o = this.domFromPos(t, t ? -1 : 1),
                l = e == t ? o : this.domFromPos(e, e ? -1 : 1),
                a = n.root.getSelection(),
                c = n.domSelectionRange(),
                u = !1;
            if ((he || X) && t == e) {
                let {
                    node: f,
                    offset: h
                } = o;
                if (f.nodeType == 3) {
                    if (u = !!(h && f.nodeValue[h - 1] == `
`), u && h == f.nodeValue.length)
                        for (let p = f, m; p; p = p.parentNode) {
                            if (m = p.nextSibling) {
                                m.nodeName == "BR" && (o = l = {
                                    node: m.parentNode,
                                    offset: K(m) + 1
                                });
                                break
                            }
                            let g = p.pmViewDesc;
                            if (g && g.node && g.node.isBlock) break
                        }
                } else {
                    let p = f.childNodes[h - 1];
                    u = p && (p.nodeName == "BR" || p.contentEditable == "false")
                }
            }
            if (he && c.focusNode && c.focusNode != l.node && c.focusNode.nodeType == 1) {
                let f = c.focusNode.childNodes[c.focusOffset];
                f && f.contentEditable == "false" && (r = !0)
            }
            if (!(r || u && X) && Xe(o.node, o.offset, c.anchorNode, c.anchorOffset) && Xe(l.node, l.offset, c.focusNode, c.focusOffset)) return;
            o.offset = Math.min(o.offset, o.node.nodeType == 3 ? o.node.nodeValue.length : o.node.childNodes.length), l.offset = Math.min(l.offset, l.node.nodeType == 3 ? l.node.nodeValue.length : l.node.childNodes.length);
            let d = !1;
            if ((a.extend || t == e) && !(u && he)) {
                a.collapse(o.node, o.offset);
                try {
                    t != e && a.extend(l.node, l.offset), d = !0
                } catch {}
            }
            if (!d) {
                if (t > e) {
                    let h = o;
                    o = l, l = h
                }
                let f = document.createRange();
                f.setEnd(l.node, l.offset), f.setStart(o.node, o.offset), a.removeAllRanges(), a.addRange(f)
            }
        }
        ignoreMutation(t) {
            return !this.contentDOM && t.type != "selection"
        }
        get contentLost() {
            return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM)
        }
        markDirty(t, e) {
            for (let n = 0, r = 0; r < this.children.length; r++) {
                let i = this.children[r],
                    s = n + i.size;
                if (n == s ? t <= s && e >= n : t < s && e > n) {
                    let o = n + i.border,
                        l = s - i.border;
                    if (t >= o && e <= l) {
                        this.dirty = t == n || e == s ? We : Xi, t == o && e == l && (i.contentLost || i.dom.parentNode != this.contentDOM) ? i.dirty = Se : i.markDirty(t - o, e - o);
                        return
                    } else i.dirty = i.dom == i.contentDOM && i.dom.parentNode == this.contentDOM && !i.children.length ? We : Se
                }
                n = s
            }
            this.dirty = We
        }
        markParentsDirty() {
            let t = 1;
            for (let e = this.parent; e; e = e.parent, t++) {
                let n = t == 1 ? We : Xi;
                e.dirty < n && (e.dirty = n)
            }
        }
        get domAtom() {
            return !1
        }
        get ignoreForCoords() {
            return !1
        }
        get ignoreForSelection() {
            return !1
        }
        isText(t) {
            return !1
        }
    },
    fl = class extends en {
        constructor(t, e, n, r) {
            let i, s = e.type.toDOM;
            if (typeof s == "function" && (s = s(n, () => {
                    if (!i) return r;
                    if (i.parent) return i.parent.posBeforeChild(i)
                })), !e.type.spec.raw) {
                if (s.nodeType != 1) {
                    let o = document.createElement("span");
                    o.appendChild(s), s = o
                }
                s.contentEditable = "false", s.classList.add("ProseMirror-widget")
            }
            super(t, [], s, null), this.widget = e, this.widget = e, i = this
        }
        matchesWidget(t) {
            return this.dirty == pe && t.type.eq(this.widget.type)
        }
        parseRule() {
            return {
                ignore: !0
            }
        }
        stopEvent(t) {
            let e = this.widget.spec.stopEvent;
            return e ? e(t) : !1
        }
        ignoreMutation(t) {
            return t.type != "selection" || this.widget.spec.ignoreSelection
        }
        destroy() {
            this.widget.type.destroy(this.dom), super.destroy()
        }
        get domAtom() {
            return !0
        }
        get ignoreForSelection() {
            return !!this.widget.type.spec.relaxedSide
        }
        get side() {
            return this.widget.type.side
        }
    },
    Bu = class extends en {
        constructor(t, e, n, r) {
            super(t, [], e, null), this.textDOM = n, this.text = r
        }
        get size() {
            return this.text.length
        }
        localPosFromDOM(t, e) {
            return t != this.textDOM ? this.posAtStart + (e ? this.size : 0) : this.posAtStart + e
        }
        domFromPos(t) {
            return {
                node: this.textDOM,
                offset: t
            }
        }
        ignoreMutation(t) {
            return t.type === "characterData" && t.target.nodeValue == t.oldValue
        }
    },
    En = class Dr extends en {
        constructor(e, n, r, i, s) {
            super(e, [], r, i), this.mark = n, this.spec = s
        }
        static create(e, n, r, i) {
            let s = i.nodeViews[n.type.name],
                o = s && s(n, i, r);
            return (!o || !o.dom) && (o = Xt.renderSpec(document, n.type.spec.toDOM(n, r), null, n.attrs)), new Dr(e, n, o.dom, o.contentDOM || o.dom, o)
        }
        parseRule() {
            return this.dirty & Se || this.mark.type.spec.reparseInView ? null : {
                mark: this.mark.type.name,
                attrs: this.mark.attrs,
                contentElement: this.contentDOM
            }
        }
        matchesMark(e) {
            return this.dirty != Se && this.mark.eq(e)
        }
        markDirty(e, n) {
            if (super.markDirty(e, n), this.dirty != pe) {
                let r = this.parent;
                for (; !r.node;) r = r.parent;
                r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = pe
            }
        }
        slice(e, n, r) {
            let i = Dr.create(this.parent, this.mark, !0, r),
                s = this.children,
                o = this.size;
            n < o && (s = Rr(s, n, o, r)), e > 0 && (s = Rr(s, 0, e, r));
            for (let l = 0; l < s.length; l++) s[l].parent = i;
            return i.children = s, i
        }
        ignoreMutation(e) {
            return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e)
        }
        destroy() {
            this.spec.destroy && this.spec.destroy(), super.destroy()
        }
    },
    ut = class hl extends en {
        constructor(e, n, r, i, s, o, l, a, c) {
            super(e, [], s, o), this.node = n, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l
        }
        static create(e, n, r, i, s, o) {
            let l = s.nodeViews[n.type.name],
                a, c = l && l(n, s, () => {
                    if (!a) return o;
                    if (a.parent) return a.parent.posBeforeChild(a)
                }, r, i),
                u = c && c.dom,
                d = c && c.contentDOM;
            if (n.isText) {
                if (!u) u = document.createTextNode(n.text);
                else if (u.nodeType != 3) throw new RangeError("Text must be rendered as a DOM text node")
            } else u || ({
                dom: u,
                contentDOM: d
            } = Xt.renderSpec(document, n.type.spec.toDOM(n), null, n.attrs));
            !d && !n.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), n.type.spec.draggable && (u.draggable = !0));
            let f = u;
            return u = vl(u, r, n), c ? a = new $u(e, n, r, i, u, d || null, f, c, s, o + 1) : n.isText ? new pl(e, n, r, i, u, f, s) : new hl(e, n, r, i, u, d || null, f, s, o + 1)
        }
        parseRule() {
            if (this.node.type.spec.reparseInView) return null;
            let e = {
                node: this.node.type.name,
                attrs: this.node.attrs
            };
            if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM) e.getContent = () => this.node.content;
            else if (!this.contentLost) e.contentElement = this.contentDOM;
            else {
                for (let n = this.children.length - 1; n >= 0; n--) {
                    let r = this.children[n];
                    if (this.dom.contains(r.dom.parentNode)) {
                        e.contentElement = r.dom.parentNode;
                        break
                    }
                }
                e.contentElement || (e.getContent = () => v.empty)
            }
            return e
        }
        matchesNode(e, n, r) {
            return this.dirty == pe && e.eq(this.node) && Tn(n, this.outerDeco) && r.eq(this.innerDeco)
        }
        get size() {
            return this.node.nodeSize
        }
        get border() {
            return this.node.isLeaf ? 0 : 1
        }
        updateChildren(e, n) {
            let r = this.node.inlineContent,
                i = n,
                s = e.composing ? this.localCompositionInfo(e, n) : null,
                o = s && s.pos > -1 ? s : null,
                l = s && s.pos < 0,
                a = new Fu(this, o && o.node, e);
            _u(this.node, this.innerDeco, (c, u, d) => {
                c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !d && a.syncToMarks(u == this.node.childCount ? B.none : this.node.child(u).marks, r, e), a.placeWidget(c, e, i)
            }, (c, u, d, f) => {
                a.syncToMarks(c.marks, r, e);
                let h;
                a.findNodeMatch(c, u, d, f) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (h = a.findIndexWithChild(s.node)) > -1 && a.updateNodeAt(c, u, d, h, e) || a.updateNextNode(c, u, d, e, f, i) || a.addNode(c, u, d, e, i), i += c.nodeSize
            }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == We) && (o && this.protectLocalComposition(e, o), yl(this.contentDOM, this.children, e), mt && Wu(this.dom))
        }
        localCompositionInfo(e, n) {
            let {
                from: r,
                to: i
            } = e.state.selection;
            if (!(e.state.selection instanceof A) || r < n || i > n + this.node.content.size) return null;
            let s = e.input.compositionNode;
            if (!s || !this.dom.contains(s.parentNode)) return null;
            if (this.node.inlineContent) {
                let o = s.nodeValue,
                    l = ju(this.node.content, o, r - n, i - n);
                return l < 0 ? null : {
                    node: s,
                    pos: l,
                    text: o
                }
            } else return {
                node: s,
                pos: -1,
                text: ""
            }
        }
        protectLocalComposition(e, {
            node: n,
            pos: r,
            text: i
        }) {
            if (this.getDesc(n)) return;
            let s = n;
            for (; s.parentNode != this.contentDOM; s = s.parentNode) {
                for (; s.previousSibling;) s.parentNode.removeChild(s.previousSibling);
                for (; s.nextSibling;) s.parentNode.removeChild(s.nextSibling);
                s.pmViewDesc && (s.pmViewDesc = void 0)
            }
            let o = new Bu(this, s, n, i);
            e.input.compositionNodes.push(o), this.children = Rr(this.children, r, r + i.length, e, o)
        }
        update(e, n, r, i) {
            return this.dirty == Se || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, n, r, i), !0)
        }
        updateInner(e, n, r, i) {
            this.updateOuterDeco(n), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = pe
        }
        updateOuterDeco(e) {
            if (Tn(e, this.outerDeco)) return;
            let n = this.nodeDOM.nodeType != 1,
                r = this.dom;
            this.dom = bl(this.dom, this.nodeDOM, Ar(this.outerDeco, this.node, n), Ar(e, this.node, n)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e
        }
        selectNode() {
            this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.nodeDOM.draggable = !0))
        }
        deselectNode() {
            this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.nodeDOM.removeAttribute("draggable"))
        }
        get domAtom() {
            return this.node.isAtom
        }
    };

function Zi(t, e, n, r, i) {
    vl(r, e, t);
    let s = new ut(void 0, t, e, n, r, r, r, i, 0);
    return s.contentDOM && s.updateChildren(i, 0), s
}
var pl = class ml extends ut {
        constructor(e, n, r, i, s, o, l) {
            super(e, n, r, i, s, null, o, l, 0)
        }
        parseRule() {
            let e = this.nodeDOM.parentNode;
            for (; e && e != this.dom && !e.pmIsDeco;) e = e.parentNode;
            return {
                skip: e || !0
            }
        }
        update(e, n, r, i) {
            return this.dirty == Se || this.dirty != pe && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(n), (this.dirty != pe || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = pe, !0)
        }
        inParent() {
            let e = this.parent.contentDOM;
            for (let n = this.nodeDOM; n; n = n.parentNode)
                if (n == e) return !0;
            return !1
        }
        domFromPos(e) {
            return {
                node: this.nodeDOM,
                offset: e
            }
        }
        localPosFromDOM(e, n, r) {
            return e == this.nodeDOM ? this.posAtStart + Math.min(n, this.node.text.length) : super.localPosFromDOM(e, n, r)
        }
        ignoreMutation(e) {
            return e.type != "characterData" && e.type != "selection"
        }
        slice(e, n, r) {
            let i = this.node.cut(e, n),
                s = document.createTextNode(i.text);
            return new ml(this.parent, i, this.outerDeco, this.innerDeco, s, s, r)
        }
        markDirty(e, n) {
            super.markDirty(e, n), this.dom != this.nodeDOM && (e == 0 || n == this.nodeDOM.nodeValue.length) && (this.dirty = Se)
        }
        get domAtom() {
            return !1
        }
        isText(e) {
            return this.node.text == e
        }
    },
    gl = class extends en {
        parseRule() {
            return {
                ignore: !0
            }
        }
        matchesHack(t) {
            return this.dirty == pe && this.dom.nodeName == t
        }
        get domAtom() {
            return !0
        }
        get ignoreForCoords() {
            return this.dom.nodeName == "IMG"
        }
    },
    $u = class extends ut {
        constructor(t, e, n, r, i, s, o, l, a, c) {
            super(t, e, n, r, i, s, o, a, c), this.spec = l
        }
        update(t, e, n, r) {
            if (this.dirty == Se) return !1;
            if (this.spec.update && (this.node.type == t.type || this.spec.multiType)) {
                let i = this.spec.update(t, e, n);
                return i && this.updateInner(t, e, n, r), i
            } else return !this.contentDOM && !t.isLeaf ? !1 : super.update(t, e, n, r)
        }
        selectNode() {
            this.spec.selectNode ? this.spec.selectNode() : super.selectNode()
        }
        deselectNode() {
            this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode()
        }
        setSelection(t, e, n, r) {
            this.spec.setSelection ? this.spec.setSelection(t, e, n.root) : super.setSelection(t, e, n, r)
        }
        destroy() {
            this.spec.destroy && this.spec.destroy(), super.destroy()
        }
        stopEvent(t) {
            return this.spec.stopEvent ? this.spec.stopEvent(t) : !1
        }
        ignoreMutation(t) {
            return this.spec.ignoreMutation ? this.spec.ignoreMutation(t) : super.ignoreMutation(t)
        }
    };

function yl(t, e, n) {
    let r = t.firstChild,
        i = !1;
    for (let s = 0; s < e.length; s++) {
        let o = e[s],
            l = o.dom;
        if (l.parentNode == t) {
            for (; l != r;) r = Qi(r), i = !0;
            r = r.nextSibling
        } else i = !0, t.insertBefore(l, r);
        if (o instanceof En) {
            let a = r ? r.previousSibling : t.lastChild;
            yl(o.contentDOM, o.children, n), r = a ? a.nextSibling : t.firstChild
        }
    }
    for (; r;) r = Qi(r), i = !0;
    i && n.trackWrites == t && (n.trackWrites = null)
}
var $t = function(t) {
    t && (this.nodeName = t)
};
$t.prototype = Object.create(null);
var je = [new $t];

function Ar(t, e, n) {
    if (t.length == 0) return je;
    let r = n ? je[0] : new $t,
        i = [r];
    for (let s = 0; s < t.length; s++) {
        let o = t[s].type.attrs;
        if (o) {
            o.nodeName && i.push(r = new $t(o.nodeName));
            for (let l in o) {
                let a = o[l];
                a != null && (n && i.length == 1 && i.push(r = new $t(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a))
            }
        }
    }
    return i
}

function bl(t, e, n, r) {
    if (n == je && r == je) return e;
    let i = e;
    for (let s = 0; s < r.length; s++) {
        let o = r[s],
            l = n[s];
        if (s) {
            let a;
            l && l.nodeName == o.nodeName && i != t && (a = i.parentNode) && a.nodeName.toLowerCase() == o.nodeName || (a = document.createElement(o.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = je[0]), i = a
        }
        Vu(i, l || je[0], o)
    }
    return i
}

function Vu(t, e, n) {
    for (let r in e) r != "class" && r != "style" && r != "nodeName" && !(r in n) && t.removeAttribute(r);
    for (let r in n) r != "class" && r != "style" && r != "nodeName" && n[r] != e[r] && (r != "contenteditable" || t.getAttribute(r) != n[r]) && t.setAttribute(r, n[r]);
    if (e.class != n.class) {
        let r = e.class ? e.class.split(" ").filter(Boolean) : [],
            i = n.class ? n.class.split(" ").filter(Boolean) : [];
        for (let s = 0; s < r.length; s++) i.indexOf(r[s]) == -1 && t.classList.remove(r[s]);
        for (let s = 0; s < i.length; s++) r.indexOf(i[s]) == -1 && t.classList.add(i[s]);
        t.classList.length == 0 && t.removeAttribute("class")
    }
    if (e.style != n.style) {
        if (e.style) {
            let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,
                i;
            for (; i = r.exec(e.style);) t.style.removeProperty(i[1])
        }
        n.style && (t.style.cssText += n.style)
    }
}

function vl(t, e, n) {
    return bl(t, t, je, Ar(e, n, t.nodeType != 1))
}

function Tn(t, e) {
    if (t.length != e.length) return !1;
    for (let n = 0; n < t.length; n++)
        if (!t[n].type.eq(e[n].type)) return !1;
    return !0
}

function Qi(t) {
    let e = t.nextSibling;
    return t.parentNode.removeChild(t), e
}
var Fu = class {
    constructor(t, e, n) {
        this.lock = e, this.view = n, this.index = 0, this.stack = [], this.changed = !1, this.top = t, this.preMatch = Lu(t.node.content, t)
    }
    destroyBetween(t, e) {
        if (t != e) {
            for (let n = t; n < e; n++) this.top.children[n].destroy();
            this.top.children.splice(t, e - t), this.changed = !0
        }
    }
    destroyRest() {
        this.destroyBetween(this.index, this.top.children.length)
    }
    syncToMarks(t, e, n) {
        let r = 0,
            i = this.stack.length >> 1,
            s = Math.min(i, t.length);
        for (; r < s && (r == i - 1 ? this.top : this.stack[r + 1 << 1]).matchesMark(t[r]) && t[r].type.spec.spanning !== !1;) r++;
        for (; r < i;) this.destroyRest(), this.top.dirty = pe, this.index = this.stack.pop(), this.top = this.stack.pop(), i--;
        for (; i < t.length;) {
            this.stack.push(this.top, this.index + 1);
            let o = -1;
            for (let l = this.index; l < Math.min(this.index + 3, this.top.children.length); l++) {
                let a = this.top.children[l];
                if (a.matchesMark(t[i]) && !this.isLocked(a.dom)) {
                    o = l;
                    break
                }
            }
            if (o > -1) o > this.index && (this.changed = !0, this.destroyBetween(this.index, o)), this.top = this.top.children[this.index];
            else {
                let l = En.create(this.top, t[i], e, n);
                this.top.children.splice(this.index, 0, l), this.top = l, this.changed = !0
            }
            this.index = 0, i++
        }
    }
    findNodeMatch(t, e, n, r) {
        let i = -1,
            s;
        if (r >= this.preMatch.index && (s = this.preMatch.matches[r - this.preMatch.index]).parent == this.top && s.matchesNode(t, e, n)) i = this.top.children.indexOf(s, this.index);
        else
            for (let o = this.index, l = Math.min(this.top.children.length, o + 5); o < l; o++) {
                let a = this.top.children[o];
                if (a.matchesNode(t, e, n) && !this.preMatch.matched.has(a)) {
                    i = o;
                    break
                }
            }
        return i < 0 ? !1 : (this.destroyBetween(this.index, i), this.index++, !0)
    }
    updateNodeAt(t, e, n, r, i) {
        let s = this.top.children[r];
        return s.dirty == Se && s.dom == s.contentDOM && (s.dirty = We), s.update(t, e, n, i) ? (this.destroyBetween(this.index, r), this.index++, !0) : !1
    }
    findIndexWithChild(t) {
        for (;;) {
            let e = t.parentNode;
            if (!e) return -1;
            if (e == this.top.contentDOM) {
                let n = t.pmViewDesc;
                if (n) {
                    for (let r = this.index; r < this.top.children.length; r++)
                        if (this.top.children[r] == n) return r
                }
                return -1
            }
            t = e
        }
    }
    updateNextNode(t, e, n, r, i, s) {
        for (let o = this.index; o < this.top.children.length; o++) {
            let l = this.top.children[o];
            if (l instanceof ut) {
                let a = this.preMatch.matched.get(l);
                if (a != null && a != i) return !1;
                let c = l.dom,
                    u, d = this.isLocked(c) && !(t.isText && l.node && l.node.isText && l.nodeDOM.nodeValue == t.text && l.dirty != Se && Tn(e, l.outerDeco));
                if (!d && l.update(t, e, n, r)) return this.destroyBetween(this.index, o), l.dom != c && (this.changed = !0), this.index++, !0;
                if (!d && (u = this.recreateWrapper(l, t, e, n, r, s))) return this.destroyBetween(this.index, o), this.top.children[this.index] = u, u.contentDOM && (u.dirty = We, u.updateChildren(r, s + 1), u.dirty = pe), this.changed = !0, this.index++, !0;
                break
            }
        }
        return !1
    }
    recreateWrapper(t, e, n, r, i, s) {
        if (t.dirty || e.isAtom || !t.children.length || !t.node.content.eq(e.content) || !Tn(n, t.outerDeco) || !r.eq(t.innerDeco)) return null;
        let o = ut.create(this.top, e, n, r, i, s);
        if (o.contentDOM) {
            o.children = t.children, t.children = [];
            for (let l of o.children) l.parent = o
        }
        return t.destroy(), o
    }
    addNode(t, e, n, r, i) {
        let s = ut.create(this.top, t, e, n, r, i);
        s.contentDOM && s.updateChildren(r, i + 1), this.top.children.splice(this.index++, 0, s), this.changed = !0
    }
    placeWidget(t, e, n) {
        let r = this.index < this.top.children.length ? this.top.children[this.index] : null;
        if (r && r.matchesWidget(t) && (t == r.widget || !r.widget.type.toDOM.parentNode)) this.index++;
        else {
            let i = new fl(this.top, t, e, n);
            this.top.children.splice(this.index++, 0, i), this.changed = !0
        }
    }
    addTextblockHacks() {
        let t = this.top.children[this.index - 1],
            e = this.top;
        for (; t instanceof En;) e = t, t = e.children[e.children.length - 1];
        (!t || !(t instanceof pl) || /\n$/.test(t.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(t.node.text)) && ((X || q) && t && t.dom.contentEditable == "false" && this.addHackNode("IMG", e), this.addHackNode("BR", this.top))
    }
    addHackNode(t, e) {
        if (e == this.top && this.index < e.children.length && e.children[this.index].matchesHack(t)) this.index++;
        else {
            let n = document.createElement(t);
            t == "IMG" && (n.className = "ProseMirror-separator", n.alt = ""), t == "BR" && (n.className = "ProseMirror-trailingBreak");
            let r = new gl(this.top, [], n, null);
            e != this.top ? e.children.push(r) : e.children.splice(this.index++, 0, r), this.changed = !0
        }
    }
    isLocked(t) {
        return this.lock && (t == this.lock || t.nodeType == 1 && t.contains(this.lock.parentNode))
    }
};

function Lu(t, e) {
    let n = e,
        r = n.children.length,
        i = t.childCount,
        s = new Map,
        o = [];
    e: for (; i > 0;) {
        let l;
        for (;;)
            if (r) {
                let c = n.children[r - 1];
                if (c instanceof En) n = c, r = c.children.length;
                else {
                    l = c, r--;
                    break
                }
            } else {
                if (n == e) break e;
                r = n.parent.children.indexOf(n), n = n.parent
            }
        let a = l.node;
        if (a) {
            if (a != t.child(i - 1)) break;
            --i, s.set(l, i), o.push(l)
        }
    }
    return {
        index: i,
        matched: s,
        matches: o.reverse()
    }
}

function qu(t, e) {
    return t.type.side - e.type.side
}

function _u(t, e, n, r) {
    let i = e.locals(t),
        s = 0;
    if (i.length == 0) {
        for (let c = 0; c < t.childCount; c++) {
            let u = t.child(c);
            r(u, i, e.forChild(s, u), c), s += u.nodeSize
        }
        return
    }
    let o = 0,
        l = [],
        a = null;
    for (let c = 0;;) {
        let u, d;
        for (; o < i.length && i[o].to == s;) {
            let g = i[o++];
            g.widget && (u ? (d || (d = [u])).push(g) : u = g)
        }
        if (u)
            if (d) {
                d.sort(qu);
                for (let g = 0; g < d.length; g++) n(d[g], c, !!a)
            } else n(u, c, !!a);
        let f, h;
        if (a) h = -1, f = a, a = null;
        else if (c < t.childCount) h = c, f = t.child(c++);
        else break;
        for (let g = 0; g < l.length; g++) l[g].to <= s && l.splice(g--, 1);
        for (; o < i.length && i[o].from <= s && i[o].to > s;) l.push(i[o++]);
        let p = s + f.nodeSize;
        if (f.isText) {
            let g = p;
            o < i.length && i[o].from < g && (g = i[o].from);
            for (let y = 0; y < l.length; y++) l[y].to < g && (g = l[y].to);
            g < p && (a = f.cut(g - s), f = f.cut(0, g - s), p = g, h = -1)
        } else
            for (; o < i.length && i[o].to < p;) o++;
        let m = f.isInline && !f.isLeaf ? l.filter(g => !g.inline) : l.slice();
        r(f, m, e.forChild(s, f), h), s = p
    }
}

function Wu(t) {
    if (t.nodeName == "UL" || t.nodeName == "OL") {
        let e = t.style.cssText;
        t.style.cssText = e + "; list-style: square !important", window.getComputedStyle(t).listStyle, t.style.cssText = e
    }
}

function ju(t, e, n, r) {
    for (let i = 0, s = 0; i < t.childCount && s <= r;) {
        let o = t.child(i++),
            l = s;
        if (s += o.nodeSize, !o.isText) continue;
        let a = o.text;
        for (; i < t.childCount;) {
            let c = t.child(i++);
            if (s += c.nodeSize, !c.isText) break;
            a += c.text
        }
        if (s >= n) {
            if (s >= r && a.slice(r - e.length - l, r - l) == e) return r - e.length;
            let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
            if (c >= 0 && c + e.length + l >= n) return l + c;
            if (n == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e) return r
        }
    }
    return -1
}

function Rr(t, e, n, r, i) {
    let s = [];
    for (let o = 0, l = 0; o < t.length; o++) {
        let a = t[o],
            c = l,
            u = l += a.size;
        c >= n || u <= e ? s.push(a) : (c < e && s.push(a.slice(0, e - c, r)), i && (s.push(i), i = void 0), u > n && s.push(a.slice(n - c, a.size, r)))
    }
    return s
}

function ti(t, e = null) {
    let n = t.domSelectionRange(),
        r = t.state.doc;
    if (!n.focusNode) return null;
    let i = t.docView.nearestDesc(n.focusNode),
        s = i && i.size == 0,
        o = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
    if (o < 0) return null;
    let l = r.resolve(o),
        a, c;
    if ($n(n)) {
        for (a = o; i && !i.node;) i = i.parent;
        let d = i.node;
        if (i && d.isAtom && E.isSelectable(d) && i.parent && !(d.isInline && yu(n.focusNode, n.focusOffset, i.dom))) {
            let f = i.posBefore;
            c = new E(o == f ? l : r.resolve(f))
        }
    } else {
        if (n instanceof t.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
            let d = o,
                f = o;
            for (let h = 0; h < n.rangeCount; h++) {
                let p = n.getRangeAt(h);
                d = Math.min(d, t.docView.posFromDOM(p.startContainer, p.startOffset, 1)), f = Math.max(f, t.docView.posFromDOM(p.endContainer, p.endOffset, -1))
            }
            if (d < 0) return null;
            [a, o] = f == t.state.selection.anchor ? [f, d] : [d, f], l = r.resolve(o)
        } else a = t.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
        if (a < 0) return null
    }
    let u = r.resolve(a);
    if (!c) {
        let d = e == "pointer" || t.state.selection.head < l.pos && !s ? 1 : -1;
        c = ni(t, u, l, d)
    }
    return c
}

function Sl(t) {
    return t.editable ? t.hasFocus() : kl(t) && document.activeElement && document.activeElement.contains(t.dom)
}

function Ee(t, e = !1) {
    let n = t.state.selection;
    if (xl(t, n), !!Sl(t)) {
        if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && q) {
            let r = t.domSelectionRange(),
                i = t.domObserver.currentSelection;
            if (r.anchorNode && i.anchorNode && Xe(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
                t.input.mouseDown.delayedSelectionSync = !0, t.domObserver.setCurSelection();
                return
            }
        }
        if (t.domObserver.disconnectSelection(), t.cursorWrapper) Ju(t);
        else {
            let {
                anchor: r,
                head: i
            } = n, s, o;
            es && !(n instanceof A) && (n.$from.parent.inlineContent || (s = ts(t, n.from)), !n.empty && !n.$from.parent.inlineContent && (o = ts(t, n.to))), t.docView.setSelection(r, i, t, e), es && (s && ns(s), o && ns(o)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Hu(t))
        }
        t.domObserver.setCurSelection(), t.domObserver.connectSelection()
    }
}
var es = X || q && il < 63;

function ts(t, e) {
    let {
        node: n,
        offset: r
    } = t.docView.domFromPos(e, 0), i = r < n.childNodes.length ? n.childNodes[r] : null, s = r ? n.childNodes[r - 1] : null;
    if (X && i && i.contentEditable == "false") return or(i);
    if ((!i || i.contentEditable == "false") && (!s || s.contentEditable == "false")) {
        if (i) return or(i);
        if (s) return or(s)
    }
}

function or(t) {
    return t.contentEditable = "true", X && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t
}

function ns(t) {
    t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null)
}

function Hu(t) {
    let e = t.dom.ownerDocument;
    e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
    let n = t.domSelectionRange(),
        r = n.anchorNode,
        i = n.anchorOffset;
    e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
        (n.anchorNode != r || n.anchorOffset != i) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
            (!Sl(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection")
        }, 20))
    })
}

function Ju(t) {
    let e = t.domSelection();
    if (!e) return;
    let n = t.cursorWrapper.dom,
        r = n.nodeName == "IMG";
    r ? e.collapse(n.parentNode, K(n) + 1) : e.collapse(n, 0), !r && !t.state.selection.visible && oe && ze <= 11 && (n.disabled = !0, n.disabled = !1)
}

function xl(t, e) {
    if (e instanceof E) {
        let n = t.docView.descAt(e.from);
        n != t.lastSelectedViewDesc && (rs(t), n && n.selectNode(), t.lastSelectedViewDesc = n)
    } else rs(t)
}

function rs(t) {
    t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0)
}

function ni(t, e, n, r) {
    return t.someProp("createSelectionBetween", i => i(t, e, n)) || A.between(e, n, r)
}

function is(t) {
    return t.editable && !t.hasFocus() ? !1 : kl(t)
}

function kl(t) {
    let e = t.domSelectionRange();
    if (!e.anchorNode) return !1;
    try {
        return t.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode))
    } catch {
        return !1
    }
}

function Ku(t) {
    let e = t.docView.domFromPos(t.state.selection.anchor, 0),
        n = t.domSelectionRange();
    return Xe(e.node, e.offset, n.anchorNode, n.anchorOffset)
}

function Ir(t, e) {
    let {
        $anchor: n,
        $head: r
    } = t.selection, i = e > 0 ? n.max(r) : n.min(r), s = i.parent.inlineContent ? i.depth ? t.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
    return s && D.findFrom(s, e)
}

function Re(t, e) {
    return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0
}

function ss(t, e, n) {
    let r = t.state.selection;
    if (r instanceof A)
        if (n.indexOf("s") > -1) {
            let {
                $head: i
            } = r, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
            if (!s || s.isText || !s.isLeaf) return !1;
            let o = t.state.doc.resolve(i.pos + s.nodeSize * (e < 0 ? -1 : 1));
            return Re(t, new A(r.$anchor, o))
        } else if (r.empty) {
        if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
            let i = Ir(t.state, e);
            return i && i instanceof E ? Re(t, i) : !1
        } else if (!(ue && n.indexOf("m") > -1)) {
            let i = r.$head,
                s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter,
                o;
            if (!s || s.isText) return !1;
            let l = e < 0 ? i.pos - s.nodeSize : i.pos;
            return s.isAtom || (o = t.docView.descAt(l)) && !o.contentDOM ? E.isSelectable(s) ? Re(t, new E(e < 0 ? t.state.doc.resolve(i.pos - s.nodeSize) : i)) : Qt ? Re(t, new A(t.state.doc.resolve(e < 0 ? l : l + s.nodeSize))) : !1 : !1
        }
    } else return !1;
    else {
        if (r instanceof E && r.node.isInline) return Re(t, new A(e > 0 ? r.$to : r.$from)); {
            let i = Ir(t.state, e);
            return i ? Re(t, i) : !1
        }
    }
}

function Nn(t) {
    return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length
}

function Vt(t, e) {
    let n = t.pmViewDesc;
    return n && n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR")
}

function nt(t, e) {
    return e < 0 ? Uu(t) : Gu(t)
}

function Uu(t) {
    let e = t.domSelectionRange(),
        n = e.focusNode,
        r = e.focusOffset;
    if (!n) return;
    let i, s, o = !1;
    for (he && n.nodeType == 1 && r < Nn(n) && Vt(n.childNodes[r], -1) && (o = !0);;)
        if (r > 0) {
            if (n.nodeType != 1) break; {
                let l = n.childNodes[r - 1];
                if (Vt(l, -1)) i = n, s = --r;
                else if (l.nodeType == 3) n = l, r = n.nodeValue.length;
                else break
            }
        } else {
            if (wl(n)) break; {
                let l = n.previousSibling;
                for (; l && Vt(l, -1);) i = n.parentNode, s = K(l), l = l.previousSibling;
                if (l) n = l, r = Nn(n);
                else {
                    if (n = n.parentNode, n == t.dom) break;
                    r = 0
                }
            }
        }
    o ? Pr(t, n, r) : i && Pr(t, i, s)
}

function Gu(t) {
    let e = t.domSelectionRange(),
        n = e.focusNode,
        r = e.focusOffset;
    if (!n) return;
    let i = Nn(n),
        s, o;
    for (;;)
        if (r < i) {
            if (n.nodeType != 1) break;
            let l = n.childNodes[r];
            if (Vt(l, 1)) s = n, o = ++r;
            else break
        } else {
            if (wl(n)) break; {
                let l = n.nextSibling;
                for (; l && Vt(l, 1);) s = l.parentNode, o = K(l) + 1, l = l.nextSibling;
                if (l) n = l, r = 0, i = Nn(n);
                else {
                    if (n = n.parentNode, n == t.dom) break;
                    r = i = 0
                }
            }
        }
    s && Pr(t, s, o)
}

function wl(t) {
    let e = t.pmViewDesc;
    return e && e.node && e.node.isBlock
}

function Yu(t, e) {
    for (; t && e == t.childNodes.length && !Zt(t);) e = K(t) + 1, t = t.parentNode;
    for (; t && e < t.childNodes.length;) {
        let n = t.childNodes[e];
        if (n.nodeType == 3) return n;
        if (n.nodeType == 1 && n.contentEditable == "false") break;
        t = n, e = 0
    }
}

function Xu(t, e) {
    for (; t && !e && !Zt(t);) e = K(t), t = t.parentNode;
    for (; t && e;) {
        let n = t.childNodes[e - 1];
        if (n.nodeType == 3) return n;
        if (n.nodeType == 1 && n.contentEditable == "false") break;
        t = n, e = t.childNodes.length
    }
}

function Pr(t, e, n) {
    if (e.nodeType != 3) {
        let s, o;
        (o = Yu(e, n)) ? (e = o, n = 0) : (s = Xu(e, n)) && (e = s, n = s.nodeValue.length)
    }
    let r = t.domSelection();
    if (!r) return;
    if ($n(r)) {
        let s = document.createRange();
        s.setEnd(e, n), s.setStart(e, n), r.removeAllRanges(), r.addRange(s)
    } else r.extend && r.extend(e, n);
    t.domObserver.setCurSelection();
    let {
        state: i
    } = t;
    setTimeout(() => {
        t.state == i && Ee(t)
    }, 50)
}

function ls(t, e) {
    let n = t.state.doc.resolve(e);
    if (!(q || sl) && n.parent.inlineContent) {
        let r = t.coordsAtPos(e);
        if (e > n.start()) {
            let i = t.coordsAtPos(e - 1),
                s = (i.top + i.bottom) / 2;
            if (s > r.top && s < r.bottom && Math.abs(i.left - r.left) > 1) return i.left < r.left ? "ltr" : "rtl"
        }
        if (e < n.end()) {
            let i = t.coordsAtPos(e + 1),
                s = (i.top + i.bottom) / 2;
            if (s > r.top && s < r.bottom && Math.abs(i.left - r.left) > 1) return i.left > r.left ? "ltr" : "rtl"
        }
    }
    return getComputedStyle(t.dom).direction == "rtl" ? "rtl" : "ltr"
}

function as(t, e, n) {
    let r = t.state.selection;
    if (r instanceof A && !r.empty || n.indexOf("s") > -1 || ue && n.indexOf("m") > -1) return !1;
    let {
        $from: i,
        $to: s
    } = r;
    if (!i.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
        let o = Ir(t.state, e);
        if (o && o instanceof E) return Re(t, o)
    }
    if (!i.parent.inlineContent) {
        let o = e < 0 ? i : s,
            l = r instanceof be ? D.near(o, e) : D.findFrom(o, e);
        return l ? Re(t, l) : !1
    }
    return !1
}

function cs(t, e) {
    if (!(t.state.selection instanceof A)) return !0;
    let {
        $head: n,
        $anchor: r,
        empty: i
    } = t.state.selection;
    if (!n.sameParent(r)) return !0;
    if (!i) return !1;
    if (t.endOfTextblock(e > 0 ? "forward" : "backward")) return !0;
    let s = !n.textOffset && (e < 0 ? n.nodeBefore : n.nodeAfter);
    if (s && !s.isText) {
        let o = t.state.tr;
        return e < 0 ? o.delete(n.pos - s.nodeSize, n.pos) : o.delete(n.pos, n.pos + s.nodeSize), t.dispatch(o), !0
    }
    return !1
}

function us(t, e, n) {
    t.domObserver.stop(), e.contentEditable = n, t.domObserver.start()
}

function Zu(t) {
    if (!X || t.state.selection.$head.parentOffset > 0) return !1;
    let {
        focusNode: e,
        focusOffset: n
    } = t.domSelectionRange();
    if (e && e.nodeType == 1 && n == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
        let r = e.firstChild;
        us(t, r, "true"), setTimeout(() => us(t, r, "false"), 20)
    }
    return !1
}

function Qu(t) {
    let e = "";
    return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e
}

function ed(t, e) {
    let n = e.keyCode,
        r = Qu(e);
    if (n == 8 || ue && n == 72 && r == "c") return cs(t, -1) || nt(t, -1);
    if (n == 46 && !e.shiftKey || ue && n == 68 && r == "c") return cs(t, 1) || nt(t, 1);
    if (n == 13 || n == 27) return !0;
    if (n == 37 || ue && n == 66 && r == "c") {
        let i = n == 37 ? ls(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
        return ss(t, i, r) || nt(t, i)
    } else if (n == 39 || ue && n == 70 && r == "c") {
        let i = n == 39 ? ls(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
        return ss(t, i, r) || nt(t, i)
    } else {
        if (n == 38 || ue && n == 80 && r == "c") return as(t, -1, r) || nt(t, -1);
        if (n == 40 || ue && n == 78 && r == "c") return Zu(t) || as(t, 1, r) || nt(t, 1);
        if (r == (ue ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90)) return !0
    }
    return !1
}

function ri(t, e) {
    t.someProp("transformCopied", f => {
        e = f(e, t)
    });
    let n = [],
        {
            content: r,
            openStart: i,
            openEnd: s
        } = e;
    for (; i > 1 && s > 1 && r.childCount == 1 && r.firstChild.childCount == 1;) {
        i--, s--;
        let f = r.firstChild;
        n.push(f.type.name, f.attrs != f.type.defaultAttrs ? f.attrs : null), r = f.content
    }
    let o = t.someProp("clipboardSerializer") || Xt.fromSchema(t.state.schema),
        l = Ol(),
        a = l.createElement("div");
    a.appendChild(o.serializeFragment(r, {
        document: l
    }));
    let c = a.firstChild,
        u, d = 0;
    for (; c && c.nodeType == 1 && (u = Nl[c.nodeName.toLowerCase()]);) {
        for (let f = u.length - 1; f >= 0; f--) {
            let h = l.createElement(u[f]);
            for (; a.firstChild;) h.appendChild(a.firstChild);
            a.appendChild(h), d++
        }
        c = a.firstChild
    }
    return c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${s}${d?` -${d}`:""} ${JSON.stringify(n)}`), {
        dom: a,
        text: t.someProp("clipboardTextSerializer", f => f(e, t)) || e.content.textBetween(0, e.content.size, `

`),
        slice: e
    }
}

function Ml(t, e, n, r, i) {
    let s = i.parent.type.spec.code,
        o, l;
    if (!n && !e) return null;
    let a = !!e && (r || s || !n);
    if (a) {
        if (t.someProp("transformPastedText", f => {
                e = f(e, s || r, t)
            }), s) return l = new k(v.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), t.someProp("transformPasted", f => {
            l = f(l, t, !0)
        }), l;
        let d = t.someProp("clipboardTextParser", f => f(e, i, r, t));
        if (d) l = d;
        else {
            let f = i.marks(),
                {
                    schema: h
                } = t.state,
                p = Xt.fromSchema(h);
            o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach(m => {
                let g = o.appendChild(document.createElement("p"));
                m && g.appendChild(p.serializeNode(h.text(m, f)))
            })
        }
    } else t.someProp("transformPastedHTML", d => {
        n = d(n, t)
    }), o = id(n), Qt && sd(o);
    let c = o && o.querySelector("[data-pm-slice]"),
        u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
    if (u && u[3])
        for (let d = +u[3]; d > 0; d--) {
            let f = o.firstChild;
            for (; f && f.nodeType != 1;) f = f.nextSibling;
            if (!f) break;
            o = f
        }
    if (l || (l = (t.someProp("clipboardParser") || t.someProp("domParser") || ct.fromSchema(t.state.schema)).parseSlice(o, {
            preserveWhitespace: !!(a || u),
            context: i,
            ruleFromNode(d) {
                return d.nodeName == "BR" && !d.nextSibling && d.parentNode && !td.test(d.parentNode.nodeName) ? {
                    ignore: !0
                } : null
            }
        })), u) l = od(ds(l, +u[1], +u[2]), u[4]);
    else if (l = k.maxOpen(nd(l.content, i), !0), l.openStart || l.openEnd) {
        let d = 0,
            f = 0;
        for (let h = l.content.firstChild; d < l.openStart && !h.type.spec.isolating; d++, h = h.firstChild);
        for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild);
        l = ds(l, d, f)
    }
    return t.someProp("transformPasted", d => {
        l = d(l, t, a)
    }), l
}
var td = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;

function nd(t, e) {
    if (t.childCount < 2) return t;
    for (let n = e.depth; n >= 0; n--) {
        let r = e.node(n).contentMatchAt(e.index(n)),
            i, s = [];
        if (t.forEach(o => {
                if (!s) return;
                let l = r.findWrapping(o.type),
                    a;
                if (!l) return s = null;
                if (a = s.length && i.length && El(l, i, o, s[s.length - 1], 0)) s[s.length - 1] = a;
                else {
                    s.length && (s[s.length - 1] = Tl(s[s.length - 1], i.length));
                    let c = Cl(o, l);
                    s.push(c), r = r.matchType(c.type), i = l
                }
            }), s) return v.from(s)
    }
    return t
}

function Cl(t, e, n = 0) {
    for (let r = e.length - 1; r >= n; r--) t = e[r].create(null, v.from(t));
    return t
}

function El(t, e, n, r, i) {
    if (i < t.length && i < e.length && t[i] == e[i]) {
        let s = El(t, e, n, r.lastChild, i + 1);
        if (s) return r.copy(r.content.replaceChild(r.childCount - 1, s));
        if (r.contentMatchAt(r.childCount).matchType(i == t.length - 1 ? n.type : t[i + 1])) return r.copy(r.content.append(v.from(Cl(n, t, i + 1))))
    }
}

function Tl(t, e) {
    if (e == 0) return t;
    let n = t.content.replaceChild(t.childCount - 1, Tl(t.lastChild, e - 1)),
        r = t.contentMatchAt(t.childCount).fillBefore(v.empty, !0);
    return t.copy(n.append(r))
}

function zr(t, e, n, r, i, s) {
    let o = e < 0 ? t.firstChild : t.lastChild,
        l = o.content;
    return t.childCount > 1 && (s = 0), i < r - 1 && (l = zr(l, e, n, r, i + 1, s)), i >= n && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, s <= i).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(v.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, o.copy(l))
}

function ds(t, e, n) {
    return e < t.openStart && (t = new k(zr(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new k(zr(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t
}
var Nl = {
        thead: ["table"],
        tbody: ["table"],
        tfoot: ["table"],
        caption: ["table"],
        colgroup: ["table"],
        col: ["table", "colgroup"],
        tr: ["table", "tbody"],
        td: ["table", "tbody", "tr"],
        th: ["table", "tbody", "tr"]
    },
    fs = null;

function Ol() {
    return fs || (fs = document.implementation.createHTMLDocument("title"))
}
var xt = null;

function rd(t) {
    let e = window.trustedTypes;
    if (!e) return t;
    xt || (xt = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", {
        createHTML: n => n
    }));
    try {
        return xt.createHTML(t)
    } catch {
        return xt = e.createPolicy("ProseMirrorClipboard", {
            createHTML: r => r
        }), xt.createHTML(t)
    }
}

function id(t) {
    let e = /^(\s*<meta [^>]*>)*/.exec(t);
    e && (t = t.slice(e[0].length));
    let n = Ol().createElement("div"),
        r = /<([a-z][^>\s]+)/i.exec(t),
        i;
    if ((i = r && Nl[r[1].toLowerCase()]) && (t = i.map(s => "<" + s + ">").join("") + t + i.map(s => "</" + s + ">").reverse().join("")), n.innerHTML = rd(t), i)
        for (let s = 0; s < i.length; s++) n = n.querySelector(i[s]) || n;
    return n
}

function sd(t) {
    let e = t.querySelectorAll(q ? "span:not([class]):not([style])" : "span.Apple-converted-space");
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), r)
    }
}

function od(t, e) {
    if (!t.size) return t;
    let n = t.content.firstChild.type.schema,
        r;
    try {
        r = JSON.parse(e)
    } catch {
        return t
    }
    let {
        content: i,
        openStart: s,
        openEnd: o
    } = t;
    for (let l = r.length - 2; l >= 0; l -= 2) {
        let a = n.nodes[r[l]];
        if (!a || a.hasRequiredAttrs()) break;
        i = v.from(a.create(r[l + 1], i)), s++, o++
    }
    return new k(i, s, o)
}
var ne = {},
    re = {},
    ld = {
        touchstart: !0,
        touchmove: !0
    },
    ad = class {
        constructor() {
            this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = {
                time: 0,
                x: 0,
                y: 0,
                type: "",
                button: 0
            }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = Object.create(null), this.hideSelectionGuard = null
        }
    };

function cd(t) {
    for (let e in ne) {
        let n = ne[e];
        t.dom.addEventListener(e, t.input.eventHandlers[e] = r => {
            dd(t, r) && !ii(t, r) && (t.editable || !(r.type in re)) && n(t, r)
        }, ld[e] ? {
            passive: !0
        } : void 0)
    }
    X && t.dom.addEventListener("input", () => null), Br(t)
}

function Pe(t, e) {
    t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now()
}

function ud(t) {
    t.domObserver.stop();
    for (let e in t.input.eventHandlers) t.dom.removeEventListener(e, t.input.eventHandlers[e]);
    clearTimeout(t.input.composingTimeout), clearTimeout(t.input.lastIOSEnterFallbackTimeout)
}

function Br(t) {
    t.someProp("handleDOMEvents", e => {
        for (let n in e) t.input.eventHandlers[n] || t.dom.addEventListener(n, t.input.eventHandlers[n] = r => ii(t, r))
    })
}

function ii(t, e) {
    return t.someProp("handleDOMEvents", n => {
        let r = n[e.type];
        return r ? r(t, e) || e.defaultPrevented : !1
    })
}

function dd(t, e) {
    if (!e.bubbles) return !0;
    if (e.defaultPrevented) return !1;
    for (let n = e.target; n != t.dom; n = n.parentNode)
        if (!n || n.nodeType == 11 || n.pmViewDesc && n.pmViewDesc.stopEvent(e)) return !1;
    return !0
}

function fd(t, e) {
    !ii(t, e) && ne[e.type] && (t.editable || !(e.type in re)) && ne[e.type](t, e)
}
re.keydown = (t, e) => {
    let n = e;
    if (t.input.shiftKey = n.keyCode == 16 || n.shiftKey, !Al(t, n) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), !(Me && q && n.keyCode == 13)))
        if (n.keyCode != 229 && t.domObserver.forceFlush(), mt && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
            let r = Date.now();
            t.input.lastIOSEnter = r, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
                t.input.lastIOSEnter == r && (t.someProp("handleKeyDown", i => i(t, _e(13, "Enter"))), t.input.lastIOSEnter = 0)
            }, 200)
        } else t.someProp("handleKeyDown", r => r(t, n)) || ed(t, n) ? n.preventDefault() : Pe(t, "key")
};
re.keyup = (t, e) => {
    e.keyCode == 16 && (t.input.shiftKey = !1)
};
re.keypress = (t, e) => {
    let n = e;
    if (Al(t, n) || !n.charCode || n.ctrlKey && !n.altKey || ue && n.metaKey) return;
    if (t.someProp("handleKeyPress", i => i(t, n))) {
        n.preventDefault();
        return
    }
    let r = t.state.selection;
    if (!(r instanceof A) || !r.$from.sameParent(r.$to)) {
        let i = String.fromCharCode(n.charCode),
            s = () => t.state.tr.insertText(i).scrollIntoView();
        !/[\r\n]/.test(i) && !t.someProp("handleTextInput", o => o(t, r.$from.pos, r.$to.pos, i, s)) && t.dispatch(s()), n.preventDefault()
    }
};

function Vn(t) {
    return {
        left: t.clientX,
        top: t.clientY
    }
}

function hd(t, e) {
    let n = e.x - t.clientX,
        r = e.y - t.clientY;
    return n * n + r * r < 100
}

function si(t, e, n, r, i) {
    if (r == -1) return !1;
    let s = t.state.doc.resolve(r);
    for (let o = s.depth + 1; o > 0; o--)
        if (t.someProp(e, l => o > s.depth ? l(t, n, s.nodeAfter, s.before(o), i, !0) : l(t, n, s.node(o), s.before(o), i, !1))) return !0;
    return !1
}

function dt(t, e, n) {
    if (t.focused || t.focus(), t.state.selection.eq(e)) return;
    let r = t.state.tr.setSelection(e);
    n == "pointer" && r.setMeta("pointer", !0), t.dispatch(r)
}

function pd(t, e) {
    if (e == -1) return !1;
    let n = t.state.doc.resolve(e),
        r = n.nodeAfter;
    return r && r.isAtom && E.isSelectable(r) ? (dt(t, new E(n), "pointer"), !0) : !1
}

function md(t, e) {
    if (e == -1) return !1;
    let n = t.state.selection,
        r, i;
    n instanceof E && (r = n.node);
    let s = t.state.doc.resolve(e);
    for (let o = s.depth + 1; o > 0; o--) {
        let l = o > s.depth ? s.nodeAfter : s.node(o);
        if (E.isSelectable(l)) {
            r && n.$from.depth > 0 && o >= n.$from.depth && s.before(n.$from.depth + 1) == n.$from.pos ? i = s.before(n.$from.depth) : i = s.before(o);
            break
        }
    }
    return i != null ? (dt(t, E.create(t.state.doc, i), "pointer"), !0) : !1
}

function gd(t, e, n, r, i) {
    return si(t, "handleClickOn", e, n, r) || t.someProp("handleClick", s => s(t, e, r)) || (i ? md(t, n) : pd(t, n))
}

function yd(t, e, n, r) {
    return si(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", i => i(t, e, r))
}

function bd(t, e, n, r) {
    return si(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", i => i(t, e, r)) || vd(t, n, r)
}

function vd(t, e, n) {
    if (n.button != 0) return !1;
    let r = t.state.doc;
    if (e == -1) return r.inlineContent ? (dt(t, A.create(r, 0, r.content.size), "pointer"), !0) : !1;
    let i = r.resolve(e);
    for (let s = i.depth + 1; s > 0; s--) {
        let o = s > i.depth ? i.nodeAfter : i.node(s),
            l = i.before(s);
        if (o.inlineContent) dt(t, A.create(r, l + 1, l + 1 + o.content.size), "pointer");
        else if (E.isSelectable(o)) dt(t, E.create(r, l), "pointer");
        else continue;
        return !0
    }
}

function oi(t) {
    return On(t)
}
var Dl = ue ? "metaKey" : "ctrlKey";
ne.mousedown = (t, e) => {
    let n = e;
    t.input.shiftKey = n.shiftKey;
    let r = oi(t),
        i = Date.now(),
        s = "singleClick";
    i - t.input.lastClick.time < 500 && hd(n, t.input.lastClick) && !n[Dl] && t.input.lastClick.button == n.button && (t.input.lastClick.type == "singleClick" ? s = "doubleClick" : t.input.lastClick.type == "doubleClick" && (s = "tripleClick")), t.input.lastClick = {
        time: i,
        x: n.clientX,
        y: n.clientY,
        type: s,
        button: n.button
    };
    let o = t.posAtCoords(Vn(n));
    o && (s == "singleClick" ? (t.input.mouseDown && t.input.mouseDown.done(), t.input.mouseDown = new Sd(t, o, n, !!r)) : (s == "doubleClick" ? yd : bd)(t, o.pos, o.inside, n) ? n.preventDefault() : Pe(t, "pointer"))
};
var Sd = class {
    constructor(t, e, n, r) {
        this.view = t, this.pos = e, this.event = n, this.flushed = r, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = t.state.doc, this.selectNode = !!n[Dl], this.allowDefault = n.shiftKey;
        let i, s;
        if (e.inside > -1) i = t.state.doc.nodeAt(e.inside), s = e.inside;
        else {
            let c = t.state.doc.resolve(e.pos);
            i = c.parent, s = c.depth ? c.before() : 0
        }
        const o = r ? null : n.target,
            l = o ? t.docView.nearestDesc(o, !0) : null;
        this.target = l && l.nodeDOM.nodeType == 1 ? l.nodeDOM : null;
        let {
            selection: a
        } = t.state;
        (n.button == 0 && i.type.spec.draggable && i.type.spec.selectable !== !1 || a instanceof E && a.from <= s && a.to > s) && (this.mightDrag = {
            node: i,
            pos: s,
            addAttr: !!(this.target && !this.target.draggable),
            setUneditable: !!(this.target && he && !this.target.hasAttribute("contentEditable"))
        }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
            this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false")
        }, 20), this.view.domObserver.start()), t.root.addEventListener("mouseup", this.up = this.up.bind(this)), t.root.addEventListener("mousemove", this.move = this.move.bind(this)), Pe(t, "pointer")
    }
    done() {
        this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Ee(this.view)), this.view.input.mouseDown = null
    }
    up(t) {
        if (this.done(), !this.view.dom.contains(t.target)) return;
        let e = this.pos;
        this.view.state.doc != this.startDoc && (e = this.view.posAtCoords(Vn(t))), this.updateAllowDefault(t), this.allowDefault || !e ? Pe(this.view, "pointer") : gd(this.view, e.pos, e.inside, t, this.selectNode) ? t.preventDefault() : t.button == 0 && (this.flushed || X && this.mightDrag && !this.mightDrag.node.isAtom || q && !this.view.state.selection.visible && Math.min(Math.abs(e.pos - this.view.state.selection.from), Math.abs(e.pos - this.view.state.selection.to)) <= 2) ? (dt(this.view, D.near(this.view.state.doc.resolve(e.pos)), "pointer"), t.preventDefault()) : Pe(this.view, "pointer")
    }
    move(t) {
        this.updateAllowDefault(t), Pe(this.view, "pointer"), t.buttons == 0 && this.done()
    }
    updateAllowDefault(t) {
        !this.allowDefault && (Math.abs(this.event.x - t.clientX) > 4 || Math.abs(this.event.y - t.clientY) > 4) && (this.allowDefault = !0)
    }
};
ne.touchstart = t => {
    t.input.lastTouch = Date.now(), oi(t), Pe(t, "pointer")
};
ne.touchmove = t => {
    t.input.lastTouch = Date.now(), Pe(t, "pointer")
};
ne.contextmenu = t => oi(t);

function Al(t, e) {
    return t.composing ? !0 : X && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1
}
var xd = Me ? 5e3 : -1;
re.compositionstart = re.compositionupdate = t => {
    if (!t.composing) {
        t.domObserver.flush();
        let {
            state: e
        } = t, n = e.selection.$to;
        if (e.selection instanceof A && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some(r => r.type.spec.inclusive === !1) || q && sl && kd(t))) t.markCursor = t.state.storedMarks || n.marks(), On(t, !0), t.markCursor = null;
        else if (On(t, !e.selection.empty), he && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
            let r = t.domSelectionRange();
            for (let i = r.focusNode, s = r.focusOffset; i && i.nodeType == 1 && s != 0;) {
                let o = s < 0 ? i.lastChild : i.childNodes[s - 1];
                if (!o) break;
                if (o.nodeType == 3) {
                    let l = t.domSelection();
                    l && l.collapse(o, o.nodeValue.length);
                    break
                } else i = o, s = -1
            }
        }
        t.input.composing = !0
    }
    Rl(t, xd)
};

function kd(t) {
    let {
        focusNode: e,
        focusOffset: n
    } = t.domSelectionRange();
    if (!e || e.nodeType != 1 || n >= e.childNodes.length) return !1;
    let r = e.childNodes[n];
    return r.nodeType == 1 && r.contentEditable == "false"
}
re.compositionend = (t, e) => {
    t.composing && (t.input.composing = !1, t.input.compositionEndedAt = e.timeStamp, t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionNode = null, t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, Rl(t, 20))
};

function Rl(t, e) {
    clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => On(t), e))
}

function Il(t) {
    for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = Md()); t.input.compositionNodes.length > 0;) t.input.compositionNodes.pop().markParentsDirty()
}

function wd(t) {
    let e = t.domSelectionRange();
    if (!e.focusNode) return null;
    let n = mu(e.focusNode, e.focusOffset),
        r = gu(e.focusNode, e.focusOffset);
    if (n && r && n != r) {
        let i = r.pmViewDesc,
            s = t.domObserver.lastChangedTextNode;
        if (n == s || r == s) return s;
        if (!i || !i.isText(r.nodeValue)) return r;
        if (t.input.compositionNode == r) {
            let o = n.pmViewDesc;
            if (!(!o || !o.isText(n.nodeValue))) return r
        }
    }
    return n || r
}

function Md() {
    let t = document.createEvent("Event");
    return t.initEvent("event", !0, !0), t.timeStamp
}

function On(t, e = !1) {
    if (!(Me && t.domObserver.flushingSoon >= 0)) {
        if (t.domObserver.forceFlush(), Il(t), e || t.docView && t.docView.dirty) {
            let n = ti(t),
                r = t.state.selection;
            return n && !n.eq(r) ? t.dispatch(t.state.tr.setSelection(n)) : (t.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? t.dispatch(t.state.tr.deleteSelection()) : t.updateState(t.state), !0
        }
        return !1
    }
}

function Cd(t, e) {
    if (!t.dom.parentNode) return;
    let n = t.dom.parentNode.appendChild(document.createElement("div"));
    n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
    let r = getSelection(),
        i = document.createRange();
    i.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
        n.parentNode && n.parentNode.removeChild(n), t.focus()
    }, 50)
}
var Wt = oe && ze < 15 || mt && Su < 604;
ne.copy = re.cut = (t, e) => {
    let n = e,
        r = t.state.selection,
        i = n.type == "cut";
    if (r.empty) return;
    let s = Wt ? null : n.clipboardData,
        {
            dom: o,
            text: l
        } = ri(t, r.content());
    s ? (n.preventDefault(), s.clearData(), s.setData("text/html", o.innerHTML), s.setData("text/plain", l)) : Cd(t, o), i && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"))
};

function Ed(t) {
    return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null
}

function Td(t, e) {
    if (!t.dom.parentNode) return;
    let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code,
        r = t.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
    n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
    let i = t.input.shiftKey && t.input.lastKeyCode != 45;
    setTimeout(() => {
        t.focus(), r.parentNode && r.parentNode.removeChild(r), n ? jt(t, r.value, null, i, e) : jt(t, r.textContent, r.innerHTML, i, e)
    }, 50)
}

function jt(t, e, n, r, i) {
    let s = Ml(t, e, n, r, t.state.selection.$from);
    if (t.someProp("handlePaste", a => a(t, i, s || k.empty))) return !0;
    if (!s) return !1;
    let o = Ed(s),
        l = o ? t.state.tr.replaceSelectionWith(o, r) : t.state.tr.replaceSelection(s);
    return t.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0
}

function Pl(t) {
    let e = t.getData("text/plain") || t.getData("Text");
    if (e) return e;
    let n = t.getData("text/uri-list");
    return n ? n.replace(/\r?\n/g, " ") : ""
}
re.paste = (t, e) => {
    let n = e;
    if (t.composing && !Me) return;
    let r = Wt ? null : n.clipboardData,
        i = t.input.shiftKey && t.input.lastKeyCode != 45;
    r && jt(t, Pl(r), r.getData("text/html"), i, n) ? n.preventDefault() : Td(t, n)
};
var zl = class {
        constructor(t, e, n) {
            this.slice = t, this.move = e, this.node = n
        }
    },
    Nd = ue ? "altKey" : "ctrlKey";

function Bl(t, e) {
    let n = t.someProp("dragCopies", r => !r(e));
    return n ? ? !e[Nd]
}
ne.dragstart = (t, e) => {
    let n = e,
        r = t.input.mouseDown;
    if (r && r.done(), !n.dataTransfer) return;
    let i = t.state.selection,
        s = i.empty ? null : t.posAtCoords(Vn(n)),
        o;
    if (!(s && s.pos >= i.from && s.pos <= (i instanceof E ? i.to - 1 : i.to))) {
        if (r && r.mightDrag) o = E.create(t.state.doc, r.mightDrag.pos);
        else if (n.target && n.target.nodeType == 1) {
            let u = t.docView.nearestDesc(n.target, !0);
            u && u.node.type.spec.draggable && u != t.docView && (o = E.create(t.state.doc, u.posBefore))
        }
    }
    let {
        dom: l,
        text: a,
        slice: c
    } = ri(t, (o || t.state.selection).content());
    (!n.dataTransfer.files.length || !q || il > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(Wt ? "Text" : "text/html", l.innerHTML), n.dataTransfer.effectAllowed = "copyMove", Wt || n.dataTransfer.setData("text/plain", a), t.dragging = new zl(c, Bl(t, n), o)
};
ne.dragend = t => {
    let e = t.dragging;
    window.setTimeout(() => {
        t.dragging == e && (t.dragging = null)
    }, 50)
};
re.dragover = re.dragenter = (t, e) => e.preventDefault();
re.drop = (t, e) => {
    try {
        Od(t, e, t.dragging)
    } finally {
        t.dragging = null
    }
};

function Od(t, e, n) {
    if (!e.dataTransfer) return;
    let r = t.posAtCoords(Vn(e));
    if (!r) return;
    let i = t.state.doc.resolve(r.pos),
        s = n && n.slice;
    s ? t.someProp("transformPasted", h => {
        s = h(s, t, !1)
    }) : s = Ml(t, Pl(e.dataTransfer), Wt ? null : e.dataTransfer.getData("text/html"), !1, i);
    let o = !!(n && Bl(t, e));
    if (t.someProp("handleDrop", h => h(t, e, s || k.empty, o))) {
        e.preventDefault();
        return
    }
    if (!s) return;
    e.preventDefault();
    let l = s ? No(t.state.doc, i.pos, s) : i.pos;
    l == null && (l = i.pos);
    let a = t.state.tr;
    if (o) {
        let {
            node: h
        } = n;
        h ? h.replace(a) : a.deleteSelection()
    }
    let c = a.mapping.map(l),
        u = s.openStart == 0 && s.openEnd == 0 && s.content.childCount == 1,
        d = a.doc;
    if (u ? a.replaceRangeWith(c, c, s.content.firstChild) : a.replaceRange(c, c, s), a.doc.eq(d)) return;
    let f = a.doc.resolve(c);
    if (u && E.isSelectable(s.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(s.content.firstChild)) a.setSelection(new E(f));
    else {
        let h = a.mapping.map(l);
        a.mapping.maps[a.mapping.maps.length - 1].forEach((p, m, g, y) => h = y), a.setSelection(ni(t, f, a.doc.resolve(h)))
    }
    t.focus(), t.dispatch(a.setMeta("uiEvent", "drop"))
}
ne.focus = t => {
    t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
        t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && Ee(t)
    }, 20))
};
ne.blur = (t, e) => {
    let n = e;
    t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1)
};
ne.beforeinput = (t, e) => {
    if (q && Me && e.inputType == "deleteContentBackward") {
        t.domObserver.flushSoon();
        let {
            domChangeCount: n
        } = t.input;
        setTimeout(() => {
            if (t.input.domChangeCount != n || (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", i => i(t, _e(8, "Backspace"))))) return;
            let {
                $cursor: r
            } = t.state.selection;
            r && r.pos > 0 && t.dispatch(t.state.tr.delete(r.pos - 1, r.pos).scrollIntoView())
        }, 50)
    }
};
for (let t in re) ne[t] = re[t];

function Ht(t, e) {
    if (t == e) return !0;
    for (let n in t)
        if (t[n] !== e[n]) return !1;
    for (let n in e)
        if (!(n in t)) return !1;
    return !0
}
var hs = class $l {
        constructor(e, n) {
            this.toDOM = e, this.spec = n || Ue, this.side = this.spec.side || 0
        }
        map(e, n, r, i) {
            let {
                pos: s,
                deleted: o
            } = e.mapResult(n.from + i, this.side < 0 ? -1 : 1);
            return o ? null : new ge(s - r, s - r, this)
        }
        valid() {
            return !0
        }
        eq(e) {
            return this == e || e instanceof $l && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Ht(this.spec, e.spec))
        }
        destroy(e) {
            this.spec.destroy && this.spec.destroy(e)
        }
    },
    Ft = class $r {
        constructor(e, n) {
            this.attrs = e, this.spec = n || Ue
        }
        map(e, n, r, i) {
            let s = e.map(n.from + i, this.spec.inclusiveStart ? -1 : 1) - r,
                o = e.map(n.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
            return s >= o ? null : new ge(s, o, this)
        }
        valid(e, n) {
            return n.from < n.to
        }
        eq(e) {
            return this == e || e instanceof $r && Ht(this.attrs, e.attrs) && Ht(this.spec, e.spec)
        }
        static is(e) {
            return e.type instanceof $r
        }
        destroy() {}
    },
    Dd = class Vl {
        constructor(e, n) {
            this.attrs = e, this.spec = n || Ue
        }
        map(e, n, r, i) {
            let s = e.mapResult(n.from + i, 1);
            if (s.deleted) return null;
            let o = e.mapResult(n.to + i, -1);
            return o.deleted || o.pos <= s.pos ? null : new ge(s.pos - r, o.pos - r, this)
        }
        valid(e, n) {
            let {
                index: r,
                offset: i
            } = e.content.findIndex(n.from), s;
            return i == n.from && !(s = e.child(r)).isText && i + s.nodeSize == n.to
        }
        eq(e) {
            return this == e || e instanceof Vl && Ht(this.attrs, e.attrs) && Ht(this.spec, e.spec)
        }
        destroy() {}
    },
    ge = class It {
        constructor(e, n, r) {
            this.from = e, this.to = n, this.type = r
        }
        copy(e, n) {
            return new It(e, n, this.type)
        }
        eq(e, n = 0) {
            return this.type.eq(e.type) && this.from + n == e.from && this.to + n == e.to
        }
        map(e, n, r) {
            return this.type.map(e, this, n, r)
        }
        static widget(e, n, r) {
            return new It(e, e, new hs(n, r))
        }
        static inline(e, n, r, i) {
            return new It(e, n, new Ft(r, i))
        }
        static node(e, n, r, i) {
            return new It(e, n, new Dd(r, i))
        }
        get spec() {
            return this.type.spec
        }
        get inline() {
            return this.type instanceof Ft
        }
        get widget() {
            return this.type instanceof hs
        }
    },
    ot = [],
    Ue = {},
    L = class De {
        constructor(e, n) {
            this.local = e.length ? e : ot, this.children = n.length ? n : ot
        }
        static create(e, n) {
            return n.length ? Dn(n, e, 0, Ue) : Y
        }
        find(e, n, r) {
            let i = [];
            return this.findInner(e ? ? 0, n ? ? 1e9, i, 0, r), i
        }
        findInner(e, n, r, i, s) {
            for (let o = 0; o < this.local.length; o++) {
                let l = this.local[o];
                l.from <= n && l.to >= e && (!s || s(l.spec)) && r.push(l.copy(l.from + i, l.to + i))
            }
            for (let o = 0; o < this.children.length; o += 3)
                if (this.children[o] < n && this.children[o + 1] > e) {
                    let l = this.children[o] + 1;
                    this.children[o + 2].findInner(e - l, n - l, r, i + l, s)
                }
        }
        map(e, n, r) {
            return this == Y || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, r || Ue)
        }
        mapInner(e, n, r, i, s) {
            let o;
            for (let l = 0; l < this.local.length; l++) {
                let a = this.local[l].map(e, r, i);
                a && a.type.valid(n, a) ? (o || (o = [])).push(a) : s.onRemove && s.onRemove(this.local[l].spec)
            }
            return this.children.length ? Ad(this.children, o || [], e, n, r, i, s) : o ? new De(o.sort(Ge), ot) : Y
        }
        add(e, n) {
            return n.length ? this == Y ? De.create(e, n) : this.addInner(e, n, 0) : this
        }
        addInner(e, n, r) {
            let i, s = 0;
            e.forEach((l, a) => {
                let c = a + r,
                    u;
                if (u = ql(n, l, c)) {
                    for (i || (i = this.children.slice()); s < i.length && i[s] < a;) s += 3;
                    i[s] == a ? i[s + 2] = i[s + 2].addInner(l, u, c + 1) : i.splice(s, 0, a, a + l.nodeSize, Dn(u, l, c + 1, Ue)), s += 3
                }
            });
            let o = Ll(s ? _l(n) : n, -r);
            for (let l = 0; l < o.length; l++) o[l].type.valid(e, o[l]) || o.splice(l--, 1);
            return new De(o.length ? this.local.concat(o).sort(Ge) : this.local, i || this.children)
        }
        remove(e) {
            return e.length == 0 || this == Y ? this : this.removeInner(e, 0)
        }
        removeInner(e, n) {
            let r = this.children,
                i = this.local;
            for (let s = 0; s < r.length; s += 3) {
                let o, l = r[s] + n,
                    a = r[s + 1] + n;
                for (let u = 0, d; u < e.length; u++)(d = e[u]) && d.from > l && d.to < a && (e[u] = null, (o || (o = [])).push(d));
                if (!o) continue;
                r == this.children && (r = this.children.slice());
                let c = r[s + 2].removeInner(o, l + 1);
                c != Y ? r[s + 2] = c : (r.splice(s, 3), s -= 3)
            }
            if (i.length) {
                for (let s = 0, o; s < e.length; s++)
                    if (o = e[s])
                        for (let l = 0; l < i.length; l++) i[l].eq(o, n) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1))
            }
            return r == this.children && i == this.local ? this : i.length || r.length ? new De(i, r) : Y
        }
        forChild(e, n) {
            if (this == Y) return this;
            if (n.isLeaf) return De.empty;
            let r, i;
            for (let l = 0; l < this.children.length; l += 3)
                if (this.children[l] >= e) {
                    this.children[l] == e && (r = this.children[l + 2]);
                    break
                }
            let s = e + 1,
                o = s + n.content.size;
            for (let l = 0; l < this.local.length; l++) {
                let a = this.local[l];
                if (a.from < o && a.to > s && a.type instanceof Ft) {
                    let c = Math.max(s, a.from) - s,
                        u = Math.min(o, a.to) - s;
                    c < u && (i || (i = [])).push(a.copy(c, u))
                }
            }
            if (i) {
                let l = new De(i.sort(Ge), ot);
                return r ? new Fl([l, r]) : l
            }
            return r || Y
        }
        eq(e) {
            if (this == e) return !0;
            if (!(e instanceof De) || this.local.length != e.local.length || this.children.length != e.children.length) return !1;
            for (let n = 0; n < this.local.length; n++)
                if (!this.local[n].eq(e.local[n])) return !1;
            for (let n = 0; n < this.children.length; n += 3)
                if (this.children[n] != e.children[n] || this.children[n + 1] != e.children[n + 1] || !this.children[n + 2].eq(e.children[n + 2])) return !1;
            return !0
        }
        locals(e) {
            return li(this.localsInner(e))
        }
        localsInner(e) {
            if (this == Y) return ot;
            if (e.inlineContent || !this.local.some(Ft.is)) return this.local;
            let n = [];
            for (let r = 0; r < this.local.length; r++) this.local[r].type instanceof Ft || n.push(this.local[r]);
            return n
        }
        forEachSet(e) {
            e(this)
        }
    };
L.empty = new L([], []);
L.removeOverlap = li;
var Y = L.empty,
    Fl = class lt {
        constructor(e) {
            this.members = e
        }
        map(e, n) {
            const r = this.members.map(i => i.map(e, n, Ue));
            return lt.from(r)
        }
        forChild(e, n) {
            if (n.isLeaf) return L.empty;
            let r = [];
            for (let i = 0; i < this.members.length; i++) {
                let s = this.members[i].forChild(e, n);
                s != Y && (s instanceof lt ? r = r.concat(s.members) : r.push(s))
            }
            return lt.from(r)
        }
        eq(e) {
            if (!(e instanceof lt) || e.members.length != this.members.length) return !1;
            for (let n = 0; n < this.members.length; n++)
                if (!this.members[n].eq(e.members[n])) return !1;
            return !0
        }
        locals(e) {
            let n, r = !0;
            for (let i = 0; i < this.members.length; i++) {
                let s = this.members[i].localsInner(e);
                if (s.length)
                    if (!n) n = s;
                    else {
                        r && (n = n.slice(), r = !1);
                        for (let o = 0; o < s.length; o++) n.push(s[o])
                    }
            }
            return n ? li(r ? n : n.sort(Ge)) : ot
        }
        static from(e) {
            switch (e.length) {
                case 0:
                    return Y;
                case 1:
                    return e[0];
                default:
                    return new lt(e.every(n => n instanceof L) ? e : e.reduce((n, r) => n.concat(r instanceof L ? r : r.members), []))
            }
        }
        forEachSet(e) {
            for (let n = 0; n < this.members.length; n++) this.members[n].forEachSet(e)
        }
    };

function Ad(t, e, n, r, i, s, o) {
    let l = t.slice();
    for (let c = 0, u = s; c < n.maps.length; c++) {
        let d = 0;
        n.maps[c].forEach((f, h, p, m) => {
            let g = m - p - (h - f);
            for (let y = 0; y < l.length; y += 3) {
                let b = l[y + 1];
                if (b < 0 || f > b + u - d) continue;
                let w = l[y] + u - d;
                h >= w ? l[y + 1] = f <= w ? -2 : -1 : f >= u && g && (l[y] += g, l[y + 1] += g)
            }
            d += g
        }), u = n.maps[c].map(u, -1)
    }
    let a = !1;
    for (let c = 0; c < l.length; c += 3)
        if (l[c + 1] < 0) {
            if (l[c + 1] == -2) {
                a = !0, l[c + 1] = -1;
                continue
            }
            let u = n.map(t[c] + s),
                d = u - i;
            if (d < 0 || d >= r.content.size) {
                a = !0;
                continue
            }
            let f = n.map(t[c + 1] + s, -1) - i,
                {
                    index: h,
                    offset: p
                } = r.content.findIndex(d),
                m = r.maybeChild(h);
            if (m && p == d && p + m.nodeSize == f) {
                let g = l[c + 2].mapInner(n, m, u + 1, t[c] + s + 1, o);
                g != Y ? (l[c] = d, l[c + 1] = f, l[c + 2] = g) : (l[c + 1] = -2, a = !0)
            } else a = !0
        }
    if (a) {
        let c = Dn(Rd(l, t, e, n, i, s, o), r, 0, o);
        e = c.local;
        for (let u = 0; u < l.length; u += 3) l[u + 1] < 0 && (l.splice(u, 3), u -= 3);
        for (let u = 0, d = 0; u < c.children.length; u += 3) {
            let f = c.children[u];
            for (; d < l.length && l[d] < f;) d += 3;
            l.splice(d, 0, c.children[u], c.children[u + 1], c.children[u + 2])
        }
    }
    return new L(e.sort(Ge), l)
}

function Ll(t, e) {
    if (!e || !t.length) return t;
    let n = [];
    for (let r = 0; r < t.length; r++) {
        let i = t[r];
        n.push(new ge(i.from + e, i.to + e, i.type))
    }
    return n
}

function Rd(t, e, n, r, i, s, o) {
    function l(a, c) {
        for (let u = 0; u < a.local.length; u++) {
            let d = a.local[u].map(r, i, c);
            d ? n.push(d) : o.onRemove && o.onRemove(a.local[u].spec)
        }
        for (let u = 0; u < a.children.length; u += 3) l(a.children[u + 2], a.children[u] + c + 1)
    }
    for (let a = 0; a < t.length; a += 3) t[a + 1] == -1 && l(t[a + 2], e[a] + s + 1);
    return n
}

function ql(t, e, n) {
    if (e.isLeaf) return null;
    let r = n + e.nodeSize,
        i = null;
    for (let s = 0, o; s < t.length; s++)(o = t[s]) && o.from > n && o.to < r && ((i || (i = [])).push(o), t[s] = null);
    return i
}

function _l(t) {
    let e = [];
    for (let n = 0; n < t.length; n++) t[n] != null && e.push(t[n]);
    return e
}

function Dn(t, e, n, r) {
    let i = [],
        s = !1;
    e.forEach((l, a) => {
        let c = ql(t, l, a + n);
        if (c) {
            s = !0;
            let u = Dn(c, l, n + a + 1, r);
            u != Y && i.push(a, a + l.nodeSize, u)
        }
    });
    let o = Ll(s ? _l(t) : t, -n).sort(Ge);
    for (let l = 0; l < o.length; l++) o[l].type.valid(e, o[l]) || (r.onRemove && r.onRemove(o[l].spec), o.splice(l--, 1));
    return o.length || i.length ? new L(o, i) : Y
}

function Ge(t, e) {
    return t.from - e.from || t.to - e.to
}

function li(t) {
    let e = t;
    for (let n = 0; n < e.length - 1; n++) {
        let r = e[n];
        if (r.from != r.to)
            for (let i = n + 1; i < e.length; i++) {
                let s = e[i];
                if (s.from == r.from) {
                    s.to != r.to && (e == t && (e = t.slice()), e[i] = s.copy(s.from, r.to), ps(e, i + 1, s.copy(r.to, s.to)));
                    continue
                } else {
                    s.from < r.to && (e == t && (e = t.slice()), e[n] = r.copy(r.from, s.from), ps(e, i, r.copy(s.from, r.to)));
                    break
                }
            }
    }
    return e
}

function ps(t, e, n) {
    for (; e < t.length && Ge(n, t[e]) > 0;) e++;
    t.splice(e, 0, n)
}

function lr(t) {
    let e = [];
    return t.someProp("decorations", n => {
        let r = n(t.state);
        r && r != Y && e.push(r)
    }), t.cursorWrapper && e.push(L.create(t.state.doc, [t.cursorWrapper.deco])), Fl.from(e)
}
var Id = {
        childList: !0,
        characterData: !0,
        characterDataOldValue: !0,
        attributes: !0,
        attributeOldValue: !0,
        subtree: !0
    },
    Pd = oe && ze <= 11,
    zd = class {
        constructor() {
            this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
        }
        set(t) {
            this.anchorNode = t.anchorNode, this.anchorOffset = t.anchorOffset, this.focusNode = t.focusNode, this.focusOffset = t.focusOffset
        }
        clear() {
            this.anchorNode = this.focusNode = null
        }
        eq(t) {
            return t.anchorNode == this.anchorNode && t.anchorOffset == this.anchorOffset && t.focusNode == this.focusNode && t.focusOffset == this.focusOffset
        }
    },
    Bd = class {
        constructor(t, e) {
            this.view = t, this.handleDOMChange = e, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new zd, this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver(n => {
                for (let r = 0; r < n.length; r++) this.queue.push(n[r]);
                oe && ze <= 11 && n.some(r => r.type == "childList" && r.removedNodes.length || r.type == "characterData" && r.oldValue.length > r.target.nodeValue.length) ? this.flushSoon() : this.flush()
            }), Pd && (this.onCharData = n => {
                this.queue.push({
                    target: n.target,
                    type: "characterData",
                    oldValue: n.prevValue
                }), this.flushSoon()
            }), this.onSelectionChange = this.onSelectionChange.bind(this)
        }
        flushSoon() {
            this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
                this.flushingSoon = -1, this.flush()
            }, 20))
        }
        forceFlush() {
            this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush())
        }
        start() {
            this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Id)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection()
        }
        stop() {
            if (this.observer) {
                let t = this.observer.takeRecords();
                if (t.length) {
                    for (let e = 0; e < t.length; e++) this.queue.push(t[e]);
                    window.setTimeout(() => this.flush(), 20)
                }
                this.observer.disconnect()
            }
            this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection()
        }
        connectSelection() {
            this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange)
        }
        disconnectSelection() {
            this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange)
        }
        suppressSelectionUpdates() {
            this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50)
        }
        onSelectionChange() {
            if (is(this.view)) {
                if (this.suppressingSelectionUpdates) return Ee(this.view);
                if (oe && ze <= 11 && !this.view.state.selection.empty) {
                    let t = this.view.domSelectionRange();
                    if (t.focusNode && Xe(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset)) return this.flushSoon()
                }
                this.flush()
            }
        }
        setCurSelection() {
            this.currentSelection.set(this.view.domSelectionRange())
        }
        ignoreSelectionChange(t) {
            if (!t.focusNode) return !0;
            let e = new Set,
                n;
            for (let i = t.focusNode; i; i = pt(i)) e.add(i);
            for (let i = t.anchorNode; i; i = pt(i))
                if (e.has(i)) {
                    n = i;
                    break
                }
            let r = n && this.view.docView.nearestDesc(n);
            if (r && r.ignoreMutation({
                    type: "selection",
                    target: n.nodeType == 3 ? n.parentNode : n
                })) return this.setCurSelection(), !0
        }
        pendingRecords() {
            if (this.observer)
                for (let t of this.observer.takeRecords()) this.queue.push(t);
            return this.queue
        }
        flush() {
            let {
                view: t
            } = this;
            if (!t.docView || this.flushingSoon > -1) return;
            let e = this.pendingRecords();
            e.length && (this.queue = []);
            let n = t.domSelectionRange(),
                r = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && is(t) && !this.ignoreSelectionChange(n),
                i = -1,
                s = -1,
                o = !1,
                l = [];
            if (t.editable)
                for (let c = 0; c < e.length; c++) {
                    let u = this.registerMutation(e[c], l);
                    u && (i = i < 0 ? u.from : Math.min(u.from, i), s = s < 0 ? u.to : Math.max(u.to, s), u.typeOver && (o = !0))
                }
            if (he && l.length) {
                let c = l.filter(u => u.nodeName == "BR");
                if (c.length == 2) {
                    let [u, d] = c;
                    u.parentNode && u.parentNode.parentNode == d.parentNode ? d.remove() : u.remove()
                } else {
                    let {
                        focusNode: u
                    } = this.currentSelection;
                    for (let d of c) {
                        let f = d.parentNode;
                        f && f.nodeName == "LI" && (!u || Fd(t, u) != f) && d.remove()
                    }
                }
            } else if ((q || X) && l.some(c => c.nodeName == "BR") && (t.input.lastKeyCode == 8 || t.input.lastKeyCode == 46)) {
                for (let c of l)
                    if (c.nodeName == "BR" && c.parentNode) {
                        let u = c.nextSibling;
                        u && u.nodeType == 1 && u.contentEditable == "false" && c.parentNode.removeChild(c)
                    }
            }
            let a = null;
            i < 0 && r && t.input.lastFocus > Date.now() - 200 && Math.max(t.input.lastTouch, t.input.lastClick.time) < Date.now() - 300 && $n(n) && (a = ti(t)) && a.eq(D.near(t.state.doc.resolve(0), 1)) ? (t.input.lastFocus = 0, Ee(t), this.currentSelection.set(n), t.scrollToSelection()) : (i > -1 || r) && (i > -1 && (t.docView.markDirty(i, s), $d(t)), this.handleDOMChange(i, s, o, l), t.docView && t.docView.dirty ? t.updateState(t.state) : this.currentSelection.eq(n) || Ee(t), this.currentSelection.set(n))
        }
        registerMutation(t, e) {
            if (e.indexOf(t.target) > -1) return null;
            let n = this.view.docView.nearestDesc(t.target);
            if (t.type == "attributes" && (n == this.view.docView || t.attributeName == "contenteditable" || t.attributeName == "style" && !t.oldValue && !t.target.getAttribute("style")) || !n || n.ignoreMutation(t)) return null;
            if (t.type == "childList") {
                for (let a = 0; a < t.addedNodes.length; a++) {
                    let c = t.addedNodes[a];
                    e.push(c), c.nodeType == 3 && (this.lastChangedTextNode = c)
                }
                if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(t.target)) return {
                    from: n.posBefore,
                    to: n.posAfter
                };
                let r = t.previousSibling,
                    i = t.nextSibling;
                if (oe && ze <= 11 && t.addedNodes.length)
                    for (let a = 0; a < t.addedNodes.length; a++) {
                        let {
                            previousSibling: c,
                            nextSibling: u
                        } = t.addedNodes[a];
                        (!c || Array.prototype.indexOf.call(t.addedNodes, c) < 0) && (r = c), (!u || Array.prototype.indexOf.call(t.addedNodes, u) < 0) && (i = u)
                    }
                let s = r && r.parentNode == t.target ? K(r) + 1 : 0,
                    o = n.localPosFromDOM(t.target, s, -1),
                    l = i && i.parentNode == t.target ? K(i) : t.target.childNodes.length;
                return {
                    from: o,
                    to: n.localPosFromDOM(t.target, l, 1)
                }
            } else return t.type == "attributes" ? {
                from: n.posAtStart - n.border,
                to: n.posAtEnd + n.border
            } : (this.lastChangedTextNode = t.target, {
                from: n.posAtStart,
                to: n.posAtEnd,
                typeOver: t.target.nodeValue == t.oldValue
            })
        }
    },
    ms = new WeakMap,
    gs = !1;

function $d(t) {
    if (!ms.has(t) && (ms.set(t, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(t.dom).whiteSpace) !== -1)) {
        if (t.requiresGeckoHackNode = he, gs) return;
        console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), gs = !0
    }
}

function ys(t, e) {
    let n = e.startContainer,
        r = e.startOffset,
        i = e.endContainer,
        s = e.endOffset,
        o = t.domAtPos(t.state.selection.anchor);
    return Xe(o.node, o.offset, i, s) && ([n, r, i, s] = [i, s, n, r]), {
        anchorNode: n,
        anchorOffset: r,
        focusNode: i,
        focusOffset: s
    }
}

function Vd(t, e) {
    if (e.getComposedRanges) {
        let i = e.getComposedRanges(t.root)[0];
        if (i) return ys(t, i)
    }
    let n;

    function r(i) {
        i.preventDefault(), i.stopImmediatePropagation(), n = i.getTargetRanges()[0]
    }
    return t.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), t.dom.removeEventListener("beforeinput", r, !0), n ? ys(t, n) : null
}

function Fd(t, e) {
    for (let n = e.parentNode; n && n != t.dom; n = n.parentNode) {
        let r = t.docView.nearestDesc(n, !0);
        if (r && r.node.isBlock) return n
    }
    return null
}

function Ld(t, e, n) {
    let {
        node: r,
        fromOffset: i,
        toOffset: s,
        from: o,
        to: l
    } = t.docView.parseRange(e, n), a = t.domSelectionRange(), c, u = a.anchorNode;
    if (u && t.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (c = [{
            node: u,
            offset: a.anchorOffset
        }], $n(a) || c.push({
            node: a.focusNode,
            offset: a.focusOffset
        })), q && t.input.lastKeyCode === 8)
        for (let g = s; g > i; g--) {
            let y = r.childNodes[g - 1],
                b = y.pmViewDesc;
            if (y.nodeName == "BR" && !b) {
                s = g;
                break
            }
            if (!b || b.size) break
        }
    let d = t.state.doc,
        f = t.someProp("domParser") || ct.fromSchema(t.state.schema),
        h = d.resolve(o),
        p = null,
        m = f.parse(r, {
            topNode: h.parent,
            topMatch: h.parent.contentMatchAt(h.index()),
            topOpen: !0,
            from: i,
            to: s,
            preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : !0,
            findPositions: c,
            ruleFromNode: qd,
            context: h
        });
    if (c && c[0].pos != null) {
        let g = c[0].pos,
            y = c[1] && c[1].pos;
        y == null && (y = g), p = {
            anchor: g + o,
            head: y + o
        }
    }
    return {
        doc: m,
        sel: p,
        from: o,
        to: l
    }
}

function qd(t) {
    let e = t.pmViewDesc;
    if (e) return e.parseRule();
    if (t.nodeName == "BR" && t.parentNode) {
        if (X && /^(ul|ol)$/i.test(t.parentNode.nodeName)) {
            let n = document.createElement("div");
            return n.appendChild(document.createElement("li")), {
                skip: n
            }
        } else if (t.parentNode.lastChild == t || X && /^(tr|table)$/i.test(t.parentNode.nodeName)) return {
            ignore: !0
        }
    } else if (t.nodeName == "IMG" && t.getAttribute("mark-placeholder")) return {
        ignore: !0
    };
    return null
}
var _d = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;

function Wd(t, e, n, r, i) {
    let s = t.input.compositionPendingChanges || (t.composing ? t.input.compositionID : 0);
    if (t.input.compositionPendingChanges = 0, e < 0) {
        let S = t.input.lastSelectionTime > Date.now() - 50 ? t.input.lastSelectionOrigin : null,
            M = ti(t, S);
        if (M && !t.state.selection.eq(M)) {
            if (q && Me && t.input.lastKeyCode === 13 && Date.now() - 100 < t.input.lastKeyCodeTime && t.someProp("handleKeyDown", V => V(t, _e(13, "Enter")))) return;
            let O = t.state.tr.setSelection(M);
            S == "pointer" ? O.setMeta("pointer", !0) : S == "key" && O.scrollIntoView(), s && O.setMeta("composition", s), t.dispatch(O)
        }
        return
    }
    let o = t.state.doc.resolve(e),
        l = o.sharedDepth(n);
    e = o.before(l + 1), n = t.state.doc.resolve(n).after(l + 1);
    let a = t.state.selection,
        c = Ld(t, e, n),
        u = t.state.doc,
        d = u.slice(c.from, c.to),
        f, h;
    t.input.lastKeyCode === 8 && Date.now() - 100 < t.input.lastKeyCodeTime ? (f = t.state.selection.to, h = "end") : (f = t.state.selection.from, h = "start"), t.input.lastKeyCode = null;
    let p = Jd(d.content, c.doc.content, c.from, f, h);
    if (p && t.input.domChangeCount++, (mt && t.input.lastIOSEnter > Date.now() - 225 || Me) && i.some(S => S.nodeType == 1 && !_d.test(S.nodeName)) && (!p || p.endA >= p.endB) && t.someProp("handleKeyDown", S => S(t, _e(13, "Enter")))) {
        t.input.lastIOSEnter = 0;
        return
    }
    if (!p)
        if (r && a instanceof A && !a.empty && a.$head.sameParent(a.$anchor) && !t.composing && !(c.sel && c.sel.anchor != c.sel.head)) p = {
            start: a.from,
            endA: a.to,
            endB: a.to
        };
        else {
            if (c.sel) {
                let S = bs(t, t.state.doc, c.sel);
                if (S && !S.eq(t.state.selection)) {
                    let M = t.state.tr.setSelection(S);
                    s && M.setMeta("composition", s), t.dispatch(M)
                }
            }
            return
        }
    t.state.selection.from < t.state.selection.to && p.start == p.endB && t.state.selection instanceof A && (p.start > t.state.selection.from && p.start <= t.state.selection.from + 2 && t.state.selection.from >= c.from ? p.start = t.state.selection.from : p.endA < t.state.selection.to && p.endA >= t.state.selection.to - 2 && t.state.selection.to <= c.to && (p.endB += t.state.selection.to - p.endA, p.endA = t.state.selection.to)), oe && ze <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > c.from && c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == "  " && (p.start--, p.endA--, p.endB--);
    let m = c.doc.resolveNoCache(p.start - c.from),
        g = c.doc.resolveNoCache(p.endB - c.from),
        y = u.resolve(p.start),
        b = m.sameParent(g) && m.parent.inlineContent && y.end() >= p.endA;
    if ((mt && t.input.lastIOSEnter > Date.now() - 225 && (!b || i.some(S => S.nodeName == "DIV" || S.nodeName == "P")) || !b && m.pos < c.doc.content.size && (!m.sameParent(g) || !m.parent.inlineContent) && m.pos < g.pos && !/\S/.test(c.doc.textBetween(m.pos, g.pos, "", ""))) && t.someProp("handleKeyDown", S => S(t, _e(13, "Enter")))) {
        t.input.lastIOSEnter = 0;
        return
    }
    if (t.state.selection.anchor > p.start && Hd(u, p.start, p.endA, m, g) && t.someProp("handleKeyDown", S => S(t, _e(8, "Backspace")))) {
        Me && q && t.domObserver.suppressSelectionUpdates();
        return
    }
    q && p.endB == p.start && (t.input.lastChromeDelete = Date.now()), Me && !b && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == p.endA && (p.endB -= 2, g = c.doc.resolveNoCache(p.endB - c.from), setTimeout(() => {
        t.someProp("handleKeyDown", function(S) {
            return S(t, _e(13, "Enter"))
        })
    }, 20));
    let w = p.start,
        x = p.endA,
        T = S => {
            let M = S || t.state.tr.replace(w, x, c.doc.slice(p.start - c.from, p.endB - c.from));
            if (c.sel) {
                let O = bs(t, M.doc, c.sel);
                O && !(q && t.composing && O.empty && (p.start != p.endB || t.input.lastChromeDelete < Date.now() - 100) && (O.head == w || O.head == M.mapping.map(x) - 1) || oe && O.empty && O.head == w) && M.setSelection(O)
            }
            return s && M.setMeta("composition", s), M.scrollIntoView()
        },
        N;
    if (b)
        if (m.pos == g.pos) {
            oe && ze <= 11 && m.parentOffset == 0 && (t.domObserver.suppressSelectionUpdates(), setTimeout(() => Ee(t), 20));
            let S = T(t.state.tr.delete(w, x)),
                M = u.resolve(p.start).marksAcross(u.resolve(p.endA));
            M && S.ensureMarks(M), t.dispatch(S)
        } else if (p.endA == p.endB && (N = jd(m.parent.content.cut(m.parentOffset, g.parentOffset), y.parent.content.cut(y.parentOffset, p.endA - y.start())))) {
        let S = T(t.state.tr);
        N.type == "add" ? S.addMark(w, x, N.mark) : S.removeMark(w, x, N.mark), t.dispatch(S)
    } else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
        let S = m.parent.textBetween(m.parentOffset, g.parentOffset),
            M = () => T(t.state.tr.insertText(S, w, x));
        t.someProp("handleTextInput", O => O(t, w, x, S, M)) || t.dispatch(M())
    } else t.dispatch(T());
    else t.dispatch(T())
}

function bs(t, e, n) {
    return Math.min(n.anchor, n.head) < 0 || Math.max(n.anchor, n.head) > e.content.size ? null : ni(t, e.resolve(n.anchor), e.resolve(n.head))
}

function jd(t, e) {
    let n = t.firstChild.marks,
        r = e.firstChild.marks,
        i = n,
        s = r,
        o, l, a;
    for (let u = 0; u < r.length; u++) i = r[u].removeFromSet(i);
    for (let u = 0; u < n.length; u++) s = n[u].removeFromSet(s);
    if (i.length == 1 && s.length == 0) l = i[0], o = "add", a = u => u.mark(l.addToSet(u.marks));
    else if (i.length == 0 && s.length == 1) l = s[0], o = "remove", a = u => u.mark(l.removeFromSet(u.marks));
    else return null;
    let c = [];
    for (let u = 0; u < e.childCount; u++) c.push(a(e.child(u)));
    if (v.from(c).eq(t)) return {
        mark: l,
        type: o
    }
}

function Hd(t, e, n, r, i) {
    if (n - e <= i.pos - r.pos || ar(r, !0, !1) < i.pos) return !1;
    let s = t.resolve(e);
    if (!r.parent.isTextblock) {
        let l = s.nodeAfter;
        return l != null && n == e + l.nodeSize
    }
    if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock) return !1;
    let o = t.resolve(ar(s, !0, !0));
    return !o.parent.isTextblock || o.pos > n || ar(o, !0, !1) < n ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content)
}

function ar(t, e, n) {
    let r = t.depth,
        i = e ? t.end() : t.pos;
    for (; r > 0 && (e || t.indexAfter(r) == t.node(r).childCount);) r--, i++, e = !1;
    if (n) {
        let s = t.node(r).maybeChild(t.indexAfter(r));
        for (; s && !s.isLeaf;) s = s.firstChild, i++
    }
    return i
}

function Jd(t, e, n, r, i) {
    let s = t.findDiffStart(e, n);
    if (s == null) return null;
    let {
        a: o,
        b: l
    } = t.findDiffEnd(e, n + t.size, n + e.size);
    if (i == "end") {
        let a = Math.max(0, s - Math.min(o, l));
        r -= o + a - s
    }
    if (o < s && t.size < e.size) {
        let a = r <= s && r >= o ? s - r : 0;
        s -= a, s && s < e.size && vs(e.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), l = s + (l - o), o = s
    } else if (l < s) {
        let a = r <= s && r >= l ? s - r : 0;
        s -= a, s && s < t.size && vs(t.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), o = s + (o - l), l = s
    }
    return {
        start: s,
        endA: o,
        endB: l
    }
}

function vs(t) {
    if (t.length != 2) return !1;
    let e = t.charCodeAt(0),
        n = t.charCodeAt(1);
    return e >= 56320 && e <= 57343 && n >= 55296 && n <= 56319
}
var Wl = class {
    constructor(t, e) {
        this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new ad, this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = e, this.state = e.state, this.directPlugins = e.plugins || [], this.directPlugins.forEach(Ms), this.dispatch = this.dispatch.bind(this), this.dom = t && t.mount || document.createElement("div"), t && (t.appendChild ? t.appendChild(this.dom) : typeof t == "function" ? t(this.dom) : t.mount && (this.mounted = !0)), this.editable = ks(this), xs(this), this.nodeViews = ws(this), this.docView = Zi(this.state.doc, Ss(this), lr(this), this.dom, this), this.domObserver = new Bd(this, (n, r, i, s) => Wd(this, n, r, i, s)), this.domObserver.start(), cd(this), this.updatePluginViews()
    }
    get composing() {
        return this.input.composing
    }
    get props() {
        if (this._props.state != this.state) {
            let t = this._props;
            this._props = {};
            for (let e in t) this._props[e] = t[e];
            this._props.state = this.state
        }
        return this._props
    }
    update(t) {
        t.handleDOMEvents != this._props.handleDOMEvents && Br(this);
        let e = this._props;
        this._props = t, t.plugins && (t.plugins.forEach(Ms), this.directPlugins = t.plugins), this.updateStateInner(t.state, e)
    }
    setProps(t) {
        let e = {};
        for (let n in this._props) e[n] = this._props[n];
        e.state = this.state;
        for (let n in t) e[n] = t[n];
        this.update(e)
    }
    updateState(t) {
        this.updateStateInner(t, this._props)
    }
    updateStateInner(t, e) {
        var n;
        let r = this.state,
            i = !1,
            s = !1;
        t.storedMarks && this.composing && (Il(this), s = !0), this.state = t;
        let o = r.plugins != t.plugins || this._props.plugins != e.plugins;
        if (o || this._props.plugins != e.plugins || this._props.nodeViews != e.nodeViews) {
            let f = ws(this);
            Ud(f, this.nodeViews) && (this.nodeViews = f, i = !0)
        }(o || e.handleDOMEvents != this._props.handleDOMEvents) && Br(this), this.editable = ks(this), xs(this);
        let l = lr(this),
            a = Ss(this),
            c = r.plugins != t.plugins && !r.doc.eq(t.doc) ? "reset" : t.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve",
            u = i || !this.docView.matchesNode(t.doc, a, l);
        (u || !t.selection.eq(r.selection)) && (s = !0);
        let d = c == "preserve" && s && this.dom.style.overflowAnchor == null && wu(this);
        if (s) {
            this.domObserver.stop();
            let f = u && (oe || q) && !this.composing && !r.selection.empty && !t.selection.empty && Kd(r.selection, t.selection);
            if (u) {
                let h = q ? this.trackWrites = this.domSelectionRange().focusNode : null;
                this.composing && (this.input.compositionNode = wd(this)), (i || !this.docView.update(t.doc, a, l, this)) && (this.docView.updateOuterDeco(a), this.docView.destroy(), this.docView = Zi(t.doc, a, l, this.dom, this)), h && !this.trackWrites && (f = !0)
            }
            f || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Ku(this)) ? Ee(this, f) : (xl(this, t.selection), this.domObserver.setCurSelection()), this.domObserver.start()
        }
        this.updatePluginViews(r), !((n = this.dragging) === null || n === void 0) && n.node && !r.doc.eq(t.doc) && this.updateDraggedNode(this.dragging, r), c == "reset" ? this.dom.scrollTop = 0 : c == "to selection" ? this.scrollToSelection() : d && Mu(d)
    }
    scrollToSelection() {
        let t = this.domSelectionRange().focusNode;
        if (!(!t || !this.dom.contains(t.nodeType == 1 ? t : t.parentNode))) {
            if (!this.someProp("handleScrollToSelection", e => e(this)))
                if (this.state.selection instanceof E) {
                    let e = this.docView.domAfterPos(this.state.selection.from);
                    e.nodeType == 1 && Ji(this, e.getBoundingClientRect(), t)
                } else Ji(this, this.coordsAtPos(this.state.selection.head, 1), t)
        }
    }
    destroyPluginViews() {
        let t;
        for (; t = this.pluginViews.pop();) t.destroy && t.destroy()
    }
    updatePluginViews(t) {
        if (!t || t.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
            this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
            for (let e = 0; e < this.directPlugins.length; e++) {
                let n = this.directPlugins[e];
                n.spec.view && this.pluginViews.push(n.spec.view(this))
            }
            for (let e = 0; e < this.state.plugins.length; e++) {
                let n = this.state.plugins[e];
                n.spec.view && this.pluginViews.push(n.spec.view(this))
            }
        } else
            for (let e = 0; e < this.pluginViews.length; e++) {
                let n = this.pluginViews[e];
                n.update && n.update(this, t)
            }
    }
    updateDraggedNode(t, e) {
        let n = t.node,
            r = -1;
        if (this.state.doc.nodeAt(n.from) == n.node) r = n.from;
        else {
            let i = n.from + (this.state.doc.content.size - e.doc.content.size);
            (i > 0 && this.state.doc.nodeAt(i)) == n.node && (r = i)
        }
        this.dragging = new zl(t.slice, t.move, r < 0 ? void 0 : E.create(this.state.doc, r))
    }
    someProp(t, e) {
        let n = this._props && this._props[t],
            r;
        if (n != null && (r = e ? e(n) : n)) return r;
        for (let s = 0; s < this.directPlugins.length; s++) {
            let o = this.directPlugins[s].props[t];
            if (o != null && (r = e ? e(o) : o)) return r
        }
        let i = this.state.plugins;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let o = i[s].props[t];
                if (o != null && (r = e ? e(o) : o)) return r
            }
    }
    hasFocus() {
        if (oe) {
            let t = this.root.activeElement;
            if (t == this.dom) return !0;
            if (!t || !this.dom.contains(t)) return !1;
            for (; t && this.dom != t && this.dom.contains(t);) {
                if (t.contentEditable == "false") return !1;
                t = t.parentElement
            }
            return !0
        }
        return this.root.activeElement == this.dom
    }
    focus() {
        this.domObserver.stop(), this.editable && Cu(this.dom), Ee(this), this.domObserver.start()
    }
    get root() {
        let t = this._root;
        if (t == null) {
            for (let e = this.dom.parentNode; e; e = e.parentNode)
                if (e.nodeType == 9 || e.nodeType == 11 && e.host) return e.getSelection || (Object.getPrototypeOf(e).getSelection = () => e.ownerDocument.getSelection()), this._root = e
        }
        return t || document
    }
    updateRoot() {
        this._root = null
    }
    posAtCoords(t) {
        return Du(this, t)
    }
    coordsAtPos(t, e = 1) {
        return ul(this, t, e)
    }
    domAtPos(t, e = 0) {
        return this.docView.domFromPos(t, e)
    }
    nodeDOM(t) {
        let e = this.docView.descAt(t);
        return e ? e.nodeDOM : null
    }
    posAtDOM(t, e, n = -1) {
        let r = this.docView.posFromDOM(t, e, n);
        if (r == null) throw new RangeError("DOM position not inside the editor");
        return r
    }
    endOfTextblock(t, e) {
        return zu(this, e || this.state, t)
    }
    pasteHTML(t, e) {
        return jt(this, "", t, !1, e || new ClipboardEvent("paste"))
    }
    pasteText(t, e) {
        return jt(this, t, null, !0, e || new ClipboardEvent("paste"))
    }
    serializeForClipboard(t) {
        return ri(this, t)
    }
    destroy() {
        this.docView && (ud(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], lr(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, hu())
    }
    get isDestroyed() {
        return this.docView == null
    }
    dispatchEvent(t) {
        return fd(this, t)
    }
    domSelectionRange() {
        let t = this.domSelection();
        return t ? X && this.root.nodeType === 11 && bu(this.dom.ownerDocument) == this.dom && Vd(this, t) || t : {
            focusNode: null,
            focusOffset: 0,
            anchorNode: null,
            anchorOffset: 0
        }
    }
    domSelection() {
        return this.root.getSelection()
    }
};
Wl.prototype.dispatch = function(t) {
    let e = this._props.dispatchTransaction;
    e ? e.call(this, t) : this.updateState(this.state.apply(t))
};

function Ss(t) {
    let e = Object.create(null);
    return e.class = "ProseMirror", e.contenteditable = String(t.editable), t.someProp("attributes", n => {
        if (typeof n == "function" && (n = n(t.state)), n)
            for (let r in n) r == "class" ? e.class += " " + n[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + n[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(n[r]))
    }), e.translate || (e.translate = "no"), [ge.node(0, t.state.doc.content.size, e)]
}

function xs(t) {
    if (t.markCursor) {
        let e = document.createElement("img");
        e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), t.cursorWrapper = {
            dom: e,
            deco: ge.widget(t.state.selection.from, e, {
                raw: !0,
                marks: t.markCursor
            })
        }
    } else t.cursorWrapper = null
}

function ks(t) {
    return !t.someProp("editable", e => e(t.state) === !1)
}

function Kd(t, e) {
    let n = Math.min(t.$anchor.sharedDepth(t.head), e.$anchor.sharedDepth(e.head));
    return t.$anchor.start(n) != e.$anchor.start(n)
}

function ws(t) {
    let e = Object.create(null);

    function n(r) {
        for (let i in r) Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i])
    }
    return t.someProp("nodeViews", n), t.someProp("markViews", n), e
}

function Ud(t, e) {
    let n = 0,
        r = 0;
    for (let i in t) {
        if (t[i] != e[i]) return !0;
        n++
    }
    for (let i in e) r++;
    return n != r
}

function Ms(t) {
    if (t.spec.state || t.spec.filterTransaction || t.spec.appendTransaction) throw new RangeError("Plugins passed directly to the view must not have a state component")
}
var $e = {
        8: "Backspace",
        9: "Tab",
        10: "Enter",
        12: "NumLock",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        44: "PrintScreen",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Meta",
        92: "Meta",
        106: "*",
        107: "+",
        108: ",",
        109: "-",
        110: ".",
        111: "/",
        144: "NumLock",
        145: "ScrollLock",
        160: "Shift",
        161: "Shift",
        162: "Control",
        163: "Control",
        164: "Alt",
        165: "Alt",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
    },
    An = {
        48: ")",
        49: "!",
        50: "@",
        51: "#",
        52: "$",
        53: "%",
        54: "^",
        55: "&",
        56: "*",
        57: "(",
        59: ":",
        61: "+",
        173: "_",
        186: ":",
        187: "+",
        188: "<",
        189: "_",
        190: ">",
        191: "?",
        192: "~",
        219: "{",
        220: "|",
        221: "}",
        222: '"'
    },
    Gd = typeof navigator < "u" && /Mac/.test(navigator.platform),
    Yd = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var U = 0; U < 10; U++) $e[48 + U] = $e[96 + U] = String(U);
for (var U = 1; U <= 24; U++) $e[U + 111] = "F" + U;
for (var U = 65; U <= 90; U++) $e[U] = String.fromCharCode(U + 32), An[U] = String.fromCharCode(U);
for (var cr in $e) An.hasOwnProperty(cr) || (An[cr] = $e[cr]);

function Xd(t) {
    var e = !(Gd && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || Yd && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified") && t.key || (t.shiftKey ? An : $e)[t.keyCode] || t.key || "Unidentified";
    return e == "Esc" && (e = "Escape"), e == "Del" && (e = "Delete"), e == "Left" && (e = "ArrowLeft"), e == "Up" && (e = "ArrowUp"), e == "Right" && (e = "ArrowRight"), e == "Down" && (e = "ArrowDown"), e
}
var Zd = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform),
    Qd = typeof navigator < "u" && /Win/.test(navigator.platform);

function ef(t) {
    let e = t.split(/-(?!$)/),
        n = e[e.length - 1];
    n == "Space" && (n = " ");
    let r, i, s, o;
    for (let l = 0; l < e.length - 1; l++) {
        let a = e[l];
        if (/^(cmd|meta|m)$/i.test(a)) o = !0;
        else if (/^a(lt)?$/i.test(a)) r = !0;
        else if (/^(c|ctrl|control)$/i.test(a)) i = !0;
        else if (/^s(hift)?$/i.test(a)) s = !0;
        else if (/^mod$/i.test(a)) Zd ? o = !0 : i = !0;
        else throw new Error("Unrecognized modifier name: " + a)
    }
    return r && (n = "Alt-" + n), i && (n = "Ctrl-" + n), o && (n = "Meta-" + n), s && (n = "Shift-" + n), n
}

function tf(t) {
    let e = Object.create(null);
    for (let n in t) e[ef(n)] = t[n];
    return e
}

function ur(t, e, n = !0) {
    return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t
}

function nf(t) {
    return new F({
        props: {
            handleKeyDown: jl(t)
        }
    })
}

function jl(t) {
    let e = tf(t);
    return function(n, r) {
        let i = Xd(r),
            s, o = e[ur(i, r)];
        if (o && o(n.state, n.dispatch, n)) return !0;
        if (i.length == 1 && i != " ") {
            if (r.shiftKey) {
                let l = e[ur(i, r, !1)];
                if (l && l(n.state, n.dispatch, n)) return !0
            }
            if ((r.altKey || r.metaKey || r.ctrlKey) && !(Qd && r.ctrlKey && r.altKey) && (s = $e[r.keyCode]) && s != i) {
                let l = e[ur(s, r)];
                if (l && l(n.state, n.dispatch, n)) return !0
            }
        }
        return !1
    }
}
var rf = Object.defineProperty,
    ai = (t, e) => {
        for (var n in e) rf(t, n, {
            get: e[n],
            enumerable: !0
        })
    };

function Fn(t) {
    const {
        state: e,
        transaction: n
    } = t;
    let {
        selection: r
    } = n, {
        doc: i
    } = n, {
        storedMarks: s
    } = n;
    return { ...e,
        apply: e.apply.bind(e),
        applyTransaction: e.applyTransaction.bind(e),
        plugins: e.plugins,
        schema: e.schema,
        reconfigure: e.reconfigure.bind(e),
        toJSON: e.toJSON.bind(e),
        get storedMarks() {
            return s
        },
        get selection() {
            return r
        },
        get doc() {
            return i
        },
        get tr() {
            return r = n.selection, i = n.doc, s = n.storedMarks, n
        }
    }
}
var Ln = class {
        constructor(t) {
            this.editor = t.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = t.state
        }
        get hasCustomState() {
            return !!this.customState
        }
        get state() {
            return this.customState || this.editor.state
        }
        get commands() {
            const {
                rawCommands: t,
                editor: e,
                state: n
            } = this, {
                view: r
            } = e, {
                tr: i
            } = n, s = this.buildProps(i);
            return Object.fromEntries(Object.entries(t).map(([o, l]) => [o, (...c) => {
                const u = l(...c)(s);
                return !i.getMeta("preventDispatch") && !this.hasCustomState && r.dispatch(i), u
            }]))
        }
        get chain() {
            return () => this.createChain()
        }
        get can() {
            return () => this.createCan()
        }
        createChain(t, e = !0) {
            const {
                rawCommands: n,
                editor: r,
                state: i
            } = this, {
                view: s
            } = r, o = [], l = !!t, a = t || i.tr, c = () => (!l && e && !a.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(a), o.every(d => d === !0)), u = { ...Object.fromEntries(Object.entries(n).map(([d, f]) => [d, (...p) => {
                    const m = this.buildProps(a, e),
                        g = f(...p)(m);
                    return o.push(g), u
                }])),
                run: c
            };
            return u
        }
        createCan(t) {
            const {
                rawCommands: e,
                state: n
            } = this, r = !1, i = t || n.tr, s = this.buildProps(i, r);
            return { ...Object.fromEntries(Object.entries(e).map(([o, l]) => [o, (...a) => l(...a)({ ...s,
                    dispatch: void 0
                })])),
                chain: () => this.createChain(i, r)
            }
        }
        buildProps(t, e = !0) {
            const {
                rawCommands: n,
                editor: r,
                state: i
            } = this, {
                view: s
            } = r, o = {
                tr: t,
                editor: r,
                view: s,
                state: Fn({
                    state: i,
                    transaction: t
                }),
                dispatch: e ? () => {} : void 0,
                chain: () => this.createChain(t, e),
                can: () => this.createCan(t),
                get commands() {
                    return Object.fromEntries(Object.entries(n).map(([l, a]) => [l, (...c) => a(...c)(o)]))
                }
            };
            return o
        }
    },
    Hl = {};
ai(Hl, {
    blur: () => sf,
    clearContent: () => of ,
    clearNodes: () => lf,
    command: () => af,
    createParagraphNear: () => cf,
    cut: () => uf,
    deleteCurrentNode: () => df,
    deleteNode: () => ff,
    deleteRange: () => hf,
    deleteSelection: () => pf,
    enter: () => mf,
    exitCode: () => gf,
    extendMarkRange: () => yf,
    first: () => bf,
    focus: () => Sf,
    forEach: () => xf,
    insertContent: () => kf,
    insertContentAt: () => Cf,
    joinBackward: () => Nf,
    joinDown: () => Tf,
    joinForward: () => Of,
    joinItemBackward: () => Df,
    joinItemForward: () => Af,
    joinTextblockBackward: () => Rf,
    joinTextblockForward: () => If,
    joinUp: () => Ef,
    keyboardShortcut: () => zf,
    lift: () => Bf,
    liftEmptyBlock: () => $f,
    liftListItem: () => Vf,
    newlineInCode: () => Ff,
    resetAttributes: () => Lf,
    scrollIntoView: () => qf,
    selectAll: () => _f,
    selectNodeBackward: () => Wf,
    selectNodeForward: () => jf,
    selectParentNode: () => Hf,
    selectTextblockEnd: () => Jf,
    selectTextblockStart: () => Kf,
    setContent: () => Uf,
    setMark: () => dh,
    setMeta: () => fh,
    setNode: () => hh,
    setNodeSelection: () => ph,
    setTextDirection: () => mh,
    setTextSelection: () => gh,
    sinkListItem: () => yh,
    splitBlock: () => bh,
    splitListItem: () => vh,
    toggleList: () => Sh,
    toggleMark: () => xh,
    toggleNode: () => kh,
    toggleWrap: () => wh,
    undoInputRule: () => Mh,
    unsetAllMarks: () => Ch,
    unsetMark: () => Eh,
    unsetTextDirection: () => Th,
    updateAttributes: () => Nh,
    wrapIn: () => Oh,
    wrapInList: () => Dh
});
var sf = () => ({
        editor: t,
        view: e
    }) => (requestAnimationFrame(() => {
        var n;
        t.isDestroyed || (e.dom.blur(), (n = window ? .getSelection()) == null || n.removeAllRanges())
    }), !0),
    of = (t = !0) => ({
        commands: e
    }) => e.setContent("", {
        emitUpdate: t
    }),
    lf = () => ({
        state: t,
        tr: e,
        dispatch: n
    }) => {
        const {
            selection: r
        } = e, {
            ranges: i
        } = r;
        return n && i.forEach(({
            $from: s,
            $to: o
        }) => {
            t.doc.nodesBetween(s.pos, o.pos, (l, a) => {
                if (l.type.isText) return;
                const {
                    doc: c,
                    mapping: u
                } = e, d = c.resolve(u.map(a)), f = c.resolve(u.map(a + l.nodeSize)), h = d.blockRange(f);
                if (!h) return;
                const p = bt(h);
                if (l.type.isTextblock) {
                    const {
                        defaultType: m
                    } = d.parent.contentMatchAt(d.index());
                    e.setNodeMarkup(h.start, m)
                }(p || p === 0) && e.lift(h, p)
            })
        }), !0
    },
    af = t => e => t(e),
    cf = () => ({
        state: t,
        dispatch: e
    }) => Yo(t, e),
    uf = (t, e) => ({
        editor: n,
        tr: r
    }) => {
        const {
            state: i
        } = n, s = i.doc.slice(t.from, t.to);
        r.deleteRange(t.from, t.to);
        const o = r.mapping.map(e);
        return r.insert(o, s.content), r.setSelection(new A(r.doc.resolve(Math.max(o - 1, 0)))), !0
    },
    df = () => ({
        tr: t,
        dispatch: e
    }) => {
        const {
            selection: n
        } = t, r = n.$anchor.node();
        if (r.content.size > 0) return !1;
        const i = t.selection.$anchor;
        for (let s = i.depth; s > 0; s -= 1)
            if (i.node(s).type === r.type) {
                if (e) {
                    const o = i.before(s),
                        l = i.after(s);
                    t.delete(o, l).scrollIntoView()
                }
                return !0
            }
        return !1
    };

function W(t, e) {
    if (typeof t == "string") {
        if (!e.nodes[t]) throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
        return e.nodes[t]
    }
    return t
}
var ff = t => ({
        tr: e,
        state: n,
        dispatch: r
    }) => {
        const i = W(t, n.schema),
            s = e.selection.$anchor;
        for (let o = s.depth; o > 0; o -= 1)
            if (s.node(o).type === i) {
                if (r) {
                    const l = s.before(o),
                        a = s.after(o);
                    e.delete(l, a).scrollIntoView()
                }
                return !0
            }
        return !1
    },
    hf = t => ({
        tr: e,
        dispatch: n
    }) => {
        const {
            from: r,
            to: i
        } = t;
        return n && e.delete(r, i), !0
    },
    pf = () => ({
        state: t,
        dispatch: e
    }) => Gr(t, e),
    mf = () => ({
        commands: t
    }) => t.keyboardShortcut("Enter"),
    gf = () => ({
        state: t,
        dispatch: e
    }) => Go(t, e);

function ci(t) {
    return Object.prototype.toString.call(t) === "[object RegExp]"
}

function Rn(t, e, n = {
    strict: !0
}) {
    const r = Object.keys(e);
    return r.length ? r.every(i => n.strict ? e[i] === t[i] : ci(e[i]) ? e[i].test(t[i]) : e[i] === t[i]) : !0
}

function Jl(t, e, n = {}) {
    return t.find(r => r.type === e && Rn(Object.fromEntries(Object.keys(n).map(i => [i, r.attrs[i]])), n))
}

function Cs(t, e, n = {}) {
    return !!Jl(t, e, n)
}

function ui(t, e, n) {
    var r;
    if (!t || !e) return;
    let i = t.parent.childAfter(t.parentOffset);
    if ((!i.node || !i.node.marks.some(c => c.type === e)) && (i = t.parent.childBefore(t.parentOffset)), !i.node || !i.node.marks.some(c => c.type === e) || (n = n || ((r = i.node.marks[0]) == null ? void 0 : r.attrs), !Jl([...i.node.marks], e, n))) return;
    let s = i.index,
        o = t.start() + i.offset,
        l = s + 1,
        a = o + i.node.nodeSize;
    for (; s > 0 && Cs([...t.parent.child(s - 1).marks], e, n);) s -= 1, o -= t.parent.child(s).nodeSize;
    for (; l < t.parent.childCount && Cs([...t.parent.child(l).marks], e, n);) a += t.parent.child(l).nodeSize, l += 1;
    return {
        from: o,
        to: a
    }
}

function Te(t, e) {
    if (typeof t == "string") {
        if (!e.marks[t]) throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
        return e.marks[t]
    }
    return t
}
var yf = (t, e = {}) => ({
        tr: n,
        state: r,
        dispatch: i
    }) => {
        const s = Te(t, r.schema),
            {
                doc: o,
                selection: l
            } = n,
            {
                $from: a,
                from: c,
                to: u
            } = l;
        if (i) {
            const d = ui(a, s, e);
            if (d && d.from <= c && d.to >= u) {
                const f = A.create(o, d.from, d.to);
                n.setSelection(f)
            }
        }
        return !0
    },
    bf = t => e => {
        const n = typeof t == "function" ? t(e) : t;
        for (let r = 0; r < n.length; r += 1)
            if (n[r](e)) return !0;
        return !1
    };

function Kl(t) {
    return t instanceof A
}

function He(t = 0, e = 0, n = 0) {
    return Math.min(Math.max(t, e), n)
}

function Ul(t, e = null) {
    if (!e) return null;
    const n = D.atStart(t),
        r = D.atEnd(t);
    if (e === "start" || e === !0) return n;
    if (e === "end") return r;
    const i = n.from,
        s = r.to;
    return e === "all" ? A.create(t, He(0, i, s), He(t.content.size, i, s)) : A.create(t, He(e, i, s), He(e, i, s))
}

function Vr() {
    return navigator.platform === "Android" || /android/i.test(navigator.userAgent)
}

function Jt() {
    return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
}

function vf() {
    return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1
}
var Sf = (t = null, e = {}) => ({
        editor: n,
        view: r,
        tr: i,
        dispatch: s
    }) => {
        e = {
            scrollIntoView: !0,
            ...e
        };
        const o = () => {
            (Jt() || Vr()) && r.dom.focus(), vf() && !Jt() && !Vr() && r.dom.focus({
                preventScroll: !0
            }), requestAnimationFrame(() => {
                n.isDestroyed || (r.focus(), e ? .scrollIntoView && n.commands.scrollIntoView())
            })
        };
        try {
            if (r.hasFocus() && t === null || t === !1) return !0
        } catch {
            return !1
        }
        if (s && t === null && !Kl(n.state.selection)) return o(), !0;
        const l = Ul(i.doc, t) || n.state.selection,
            a = n.state.selection.eq(l);
        return s && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0
    },
    xf = (t, e) => n => t.every((r, i) => e(r, { ...n,
        index: i
    })),
    kf = (t, e) => ({
        tr: n,
        commands: r
    }) => r.insertContentAt({
        from: n.selection.from,
        to: n.selection.to
    }, t, e),
    Gl = t => {
        const e = t.childNodes;
        for (let n = e.length - 1; n >= 0; n -= 1) {
            const r = e[n];
            r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t.removeChild(r) : r.nodeType === 1 && Gl(r)
        }
        return t
    };

function Pt(t) {
    if (typeof window > "u") throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
    const e = `<body>${t}</body>`,
        n = new window.DOMParser().parseFromString(e, "text/html").body;
    return Gl(n)
}

function Kt(t, e, n) {
    if (t instanceof ye || t instanceof v) return t;
    n = {
        slice: !0,
        parseOptions: {},
        ...n
    };
    const r = typeof t == "object" && t !== null,
        i = typeof t == "string";
    if (r) try {
        if (Array.isArray(t) && t.length > 0) return v.fromArray(t.map(o => e.nodeFromJSON(o)));
        const s = e.nodeFromJSON(t);
        return n.errorOnInvalidContent && s.check(), s
    } catch (s) {
        if (n.errorOnInvalidContent) throw new Error("[tiptap error]: Invalid JSON content", {
            cause: s
        });
        return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", s), Kt("", e, n)
    }
    if (i) {
        if (n.errorOnInvalidContent) {
            let o = !1,
                l = "";
            const a = new mo({
                topNode: e.spec.topNode,
                marks: e.spec.marks,
                nodes: e.spec.nodes.append({
                    __tiptap__private__unknown__catch__all__node: {
                        content: "inline*",
                        group: "block",
                        parseDOM: [{
                            tag: "*",
                            getAttrs: c => (o = !0, l = typeof c == "string" ? c : c.outerHTML, null)
                        }]
                    }
                })
            });
            if (n.slice ? ct.fromSchema(a).parseSlice(Pt(t), n.parseOptions) : ct.fromSchema(a).parse(Pt(t), n.parseOptions), n.errorOnInvalidContent && o) throw new Error("[tiptap error]: Invalid HTML content", {
                cause: new Error(`Invalid element found: ${l}`)
            })
        }
        const s = ct.fromSchema(e);
        return n.slice ? s.parseSlice(Pt(t), n.parseOptions).content : s.parse(Pt(t), n.parseOptions)
    }
    return Kt("", e, n)
}

function wf(t, e, n) {
    const r = t.steps.length - 1;
    if (r < e) return;
    const i = t.steps[r];
    if (!(i instanceof me || i instanceof le)) return;
    const s = t.mapping.maps[r];
    let o = 0;
    s.forEach((l, a, c, u) => {
        o === 0 && (o = u)
    }), t.setSelection(D.near(t.doc.resolve(o), n))
}
var Mf = t => !("type" in t),
    Cf = (t, e, n) => ({
        tr: r,
        dispatch: i,
        editor: s
    }) => {
        var o;
        if (i) {
            n = {
                parseOptions: s.options.parseOptions,
                updateSelection: !0,
                applyInputRules: !1,
                applyPasteRules: !1,
                ...n
            };
            let l;
            const a = m => {
                    s.emit("contentError", {
                        editor: s,
                        error: m,
                        disableCollaboration: () => {
                            "collaboration" in s.storage && typeof s.storage.collaboration == "object" && s.storage.collaboration && (s.storage.collaboration.isDisabled = !0)
                        }
                    })
                },
                c = {
                    preserveWhitespace: "full",
                    ...n.parseOptions
                };
            if (!n.errorOnInvalidContent && !s.options.enableContentCheck && s.options.emitContentError) try {
                Kt(e, s.schema, {
                    parseOptions: c,
                    errorOnInvalidContent: !0
                })
            } catch (m) {
                a(m)
            }
            try {
                l = Kt(e, s.schema, {
                    parseOptions: c,
                    errorOnInvalidContent: (o = n.errorOnInvalidContent) != null ? o : s.options.enableContentCheck
                })
            } catch (m) {
                return a(m), !1
            }
            let {
                from: u,
                to: d
            } = typeof t == "number" ? {
                from: t,
                to: t
            } : {
                from: t.from,
                to: t.to
            }, f = !0, h = !0;
            if ((Mf(l) ? l : [l]).forEach(m => {
                    m.check(), f = f ? m.isText && m.marks.length === 0 : !1, h = h ? m.isBlock : !1
                }), u === d && h) {
                const {
                    parent: m
                } = r.doc.resolve(u);
                m.isTextblock && !m.type.spec.code && !m.childCount && (u -= 1, d += 1)
            }
            let p;
            if (f) {
                if (Array.isArray(e)) p = e.map(m => m.text || "").join("");
                else if (e instanceof v) {
                    let m = "";
                    e.forEach(g => {
                        g.text && (m += g.text)
                    }), p = m
                } else typeof e == "object" && e && e.text ? p = e.text : p = e;
                r.insertText(p, u, d)
            } else {
                p = l;
                const m = r.doc.resolve(u),
                    g = m.node(),
                    y = m.parentOffset === 0,
                    b = g.isText || g.isTextblock,
                    w = g.content.size > 0;
                y && b && w && (u = Math.max(0, u - 1)), r.replaceWith(u, d, p)
            }
            n.updateSelection && wf(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", {
                from: u,
                text: p
            }), n.applyPasteRules && r.setMeta("applyPasteRules", {
                from: u,
                text: p
            })
        }
        return !0
    },
    Ef = () => ({
        state: t,
        dispatch: e
    }) => Xc(t, e),
    Tf = () => ({
        state: t,
        dispatch: e
    }) => Zc(t, e),
    Nf = () => ({
        state: t,
        dispatch: e
    }) => _o(t, e),
    Of = () => ({
        state: t,
        dispatch: e
    }) => Jo(t, e),
    Df = () => ({
        state: t,
        dispatch: e,
        tr: n
    }) => {
        try {
            const r = zn(t.doc, t.selection.$from.pos, -1);
            return r == null ? !1 : (n.join(r, 2), e && e(n), !0)
        } catch {
            return !1
        }
    },
    Af = () => ({
        state: t,
        dispatch: e,
        tr: n
    }) => {
        try {
            const r = zn(t.doc, t.selection.$from.pos, 1);
            return r == null ? !1 : (n.join(r, 2), e && e(n), !0)
        } catch {
            return !1
        }
    },
    Rf = () => ({
        state: t,
        dispatch: e
    }) => Gc(t, e),
    If = () => ({
        state: t,
        dispatch: e
    }) => Yc(t, e);

function Yl() {
    return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1
}

function Pf(t) {
    const e = t.split(/-(?!$)/);
    let n = e[e.length - 1];
    n === "Space" && (n = " ");
    let r, i, s, o;
    for (let l = 0; l < e.length - 1; l += 1) {
        const a = e[l];
        if (/^(cmd|meta|m)$/i.test(a)) o = !0;
        else if (/^a(lt)?$/i.test(a)) r = !0;
        else if (/^(c|ctrl|control)$/i.test(a)) i = !0;
        else if (/^s(hift)?$/i.test(a)) s = !0;
        else if (/^mod$/i.test(a)) Jt() || Yl() ? o = !0 : i = !0;
        else throw new Error(`Unrecognized modifier name: ${a}`)
    }
    return r && (n = `Alt-${n}`), i && (n = `Ctrl-${n}`), o && (n = `Meta-${n}`), s && (n = `Shift-${n}`), n
}
var zf = t => ({
    editor: e,
    view: n,
    tr: r,
    dispatch: i
}) => {
    const s = Pf(t).split(/-(?!$)/),
        o = s.find(a => !["Alt", "Ctrl", "Meta", "Shift"].includes(a)),
        l = new KeyboardEvent("keydown", {
            key: o === "Space" ? " " : o,
            altKey: s.includes("Alt"),
            ctrlKey: s.includes("Ctrl"),
            metaKey: s.includes("Meta"),
            shiftKey: s.includes("Shift"),
            bubbles: !0,
            cancelable: !0
        });
    return e.captureTransaction(() => {
        n.someProp("handleKeyDown", a => a(n, l))
    }) ? .steps.forEach(a => {
        const c = a.map(r.mapping);
        c && i && r.maybeStep(c)
    }), !0
};

function Ut(t, e, n = {}) {
    const {
        from: r,
        to: i,
        empty: s
    } = t.selection, o = e ? W(e, t.schema) : null, l = [];
    t.doc.nodesBetween(r, i, (u, d) => {
        if (u.isText) return;
        const f = Math.max(r, d),
            h = Math.min(i, d + u.nodeSize);
        l.push({
            node: u,
            from: f,
            to: h
        })
    });
    const a = i - r,
        c = l.filter(u => o ? o.name === u.node.type.name : !0).filter(u => Rn(u.node.attrs, n, {
            strict: !1
        }));
    return s ? !!c.length : c.reduce((u, d) => u + d.to - d.from, 0) >= a
}
var Bf = (t, e = {}) => ({
        state: n,
        dispatch: r
    }) => Ut(n, W(t, n.schema), e) ? Qc(n, r) : !1,
    $f = () => ({
        state: t,
        dispatch: e
    }) => Xo(t, e),
    Vf = t => ({
        state: e,
        dispatch: n
    }) => {
        const r = W(t, e.schema);
        return cu(r)(e, n)
    },
    Ff = () => ({
        state: t,
        dispatch: e
    }) => Uo(t, e);

function qn(t, e) {
    return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null
}

function Es(t, e) {
    const n = typeof e == "string" ? [e] : e;
    return Object.keys(t).reduce((r, i) => (n.includes(i) || (r[i] = t[i]), r), {})
}
var Lf = (t, e) => ({
        tr: n,
        state: r,
        dispatch: i
    }) => {
        let s = null,
            o = null;
        const l = qn(typeof t == "string" ? t : t.name, r.schema);
        if (!l) return !1;
        l === "node" && (s = W(t, r.schema)), l === "mark" && (o = Te(t, r.schema));
        let a = !1;
        return n.selection.ranges.forEach(c => {
            r.doc.nodesBetween(c.$from.pos, c.$to.pos, (u, d) => {
                s && s === u.type && (a = !0, i && n.setNodeMarkup(d, void 0, Es(u.attrs, e))), o && u.marks.length && u.marks.forEach(f => {
                    o === f.type && (a = !0, i && n.addMark(d, d + u.nodeSize, o.create(Es(f.attrs, e))))
                })
            })
        }), a
    },
    qf = () => ({
        tr: t,
        dispatch: e
    }) => (e && t.scrollIntoView(), !0),
    _f = () => ({
        tr: t,
        dispatch: e
    }) => {
        if (e) {
            const n = new be(t.doc);
            t.setSelection(n)
        }
        return !0
    },
    Wf = () => ({
        state: t,
        dispatch: e
    }) => jo(t, e),
    jf = () => ({
        state: t,
        dispatch: e
    }) => Ko(t, e),
    Hf = () => ({
        state: t,
        dispatch: e
    }) => nu(t, e),
    Jf = () => ({
        state: t,
        dispatch: e
    }) => tl(t, e),
    Kf = () => ({
        state: t,
        dispatch: e
    }) => el(t, e);

function Fr(t, e, n = {}, r = {}) {
    return Kt(t, e, {
        slice: !1,
        parseOptions: n,
        errorOnInvalidContent: r.errorOnInvalidContent
    })
}
var Uf = (t, {
    errorOnInvalidContent: e,
    emitUpdate: n = !0,
    parseOptions: r = {}
} = {}) => ({
    editor: i,
    tr: s,
    dispatch: o,
    commands: l
}) => {
    const {
        doc: a
    } = s;
    if (r.preserveWhitespace !== "full") {
        const c = Fr(t, i.schema, r, {
            errorOnInvalidContent: e ? ? i.options.enableContentCheck
        });
        return o && s.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !n), !0
    }
    return o && s.setMeta("preventUpdate", !n), l.insertContentAt({
        from: 0,
        to: a.content.size
    }, t, {
        parseOptions: r,
        errorOnInvalidContent: e ? ? i.options.enableContentCheck
    })
};

function Xl(t, e) {
    const n = Te(e, t.schema),
        {
            from: r,
            to: i,
            empty: s
        } = t.selection,
        o = [];
    s ? (t.storedMarks && o.push(...t.storedMarks), o.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, i, a => {
        o.push(...a.marks)
    });
    const l = o.find(a => a.type.name === n.name);
    return l ? { ...l.attrs
    } : {}
}

function Gf(t, e) {
    const n = new zo(t);
    return e.forEach(r => {
        r.steps.forEach(i => {
            n.step(i)
        })
    }), n
}

function Yf(t) {
    for (let e = 0; e < t.edgeCount; e += 1) {
        const {
            type: n
        } = t.edge(e);
        if (n.isTextblock && !n.hasRequiredAttrs()) return n
    }
    return null
}

function Xm(t, e, n) {
    const r = [];
    return t.nodesBetween(e.from, e.to, (i, s) => {
        n(i) && r.push({
            node: i,
            pos: s
        })
    }), r
}

function Xf(t, e) {
    for (let n = t.depth; n > 0; n -= 1) {
        const r = t.node(n);
        if (e(r)) return {
            pos: n > 0 ? t.before(n) : 0,
            start: t.start(n),
            depth: n,
            node: r
        }
    }
}

function _n(t) {
    return e => Xf(e.$from, t)
}

function C(t, e, n) {
    return t.config[e] === void 0 && t.parent ? C(t.parent, e, n) : typeof t.config[e] == "function" ? t.config[e].bind({ ...n,
        parent: t.parent ? C(t.parent, e, n) : null
    }) : t.config[e]
}

function di(t) {
    return t.map(e => {
        const n = C(e, "addExtensions", {
            name: e.name,
            options: e.options,
            storage: e.storage
        });
        return n ? [e, ...di(n())] : e
    }).flat(10)
}

function Wn(t, e) {
    const n = Xt.fromSchema(e).serializeFragment(t),
        r = document.implementation.createHTMLDocument().createElement("div");
    return r.appendChild(n), r.innerHTML
}

function Zl(t) {
    return typeof t == "function"
}

function P(t, e = void 0, ...n) {
    return Zl(t) ? e ? t.bind(e)(...n) : t(...n) : t
}

function Zf(t = {}) {
    return Object.keys(t).length === 0 && t.constructor === Object
}

function gt(t) {
    return {
        baseExtensions: t.filter(e => e.type === "extension"),
        nodeExtensions: t.filter(e => e.type === "node"),
        markExtensions: t.filter(e => e.type === "mark")
    }
}

function Ql(t) {
    const e = [],
        {
            nodeExtensions: n,
            markExtensions: r
        } = gt(t),
        i = [...n, ...r],
        s = {
            default: null,
            validate: void 0,
            rendered: !0,
            renderHTML: null,
            parseHTML: null,
            keepOnSplit: !0,
            isRequired: !1
        };
    return t.forEach(o => {
        const l = C(o, "addGlobalAttributes", {
            name: o.name,
            options: o.options,
            storage: o.storage,
            extensions: i
        });
        l && l().forEach(a => {
            a.types.forEach(c => {
                Object.entries(a.attributes).forEach(([u, d]) => {
                    e.push({
                        type: c,
                        name: u,
                        attribute: { ...s,
                            ...d
                        }
                    })
                })
            })
        })
    }), i.forEach(o => {
        const l = C(o, "addAttributes", {
            name: o.name,
            options: o.options,
            storage: o.storage
        });
        if (!l) return;
        const a = l();
        Object.entries(a).forEach(([c, u]) => {
            const d = { ...s,
                ...u
            };
            typeof d ? .default == "function" && (d.default = d.default()), d ? .isRequired && d ? .default === void 0 && delete d.default, e.push({
                type: o.name,
                name: c,
                attribute: d
            })
        })
    }), e
}

function jn(...t) {
    return t.filter(e => !!e).reduce((e, n) => {
        const r = { ...e
        };
        return Object.entries(n).forEach(([i, s]) => {
            if (!r[i]) {
                r[i] = s;
                return
            }
            if (i === "class") {
                const o = s ? String(s).split(" ") : [],
                    l = r[i] ? r[i].split(" ") : [],
                    a = o.filter(c => !l.includes(c));
                r[i] = [...l, ...a].join(" ")
            } else if (i === "style") {
                const o = s ? s.split(";").map(c => c.trim()).filter(Boolean) : [],
                    l = r[i] ? r[i].split(";").map(c => c.trim()).filter(Boolean) : [],
                    a = new Map;
                l.forEach(c => {
                    const [u, d] = c.split(":").map(f => f.trim());
                    a.set(u, d)
                }), o.forEach(c => {
                    const [u, d] = c.split(":").map(f => f.trim());
                    a.set(u, d)
                }), r[i] = Array.from(a.entries()).map(([c, u]) => `${c}: ${u}`).join("; ")
            } else r[i] = s
        }), r
    }, {})
}

function Gt(t, e) {
    return e.filter(n => n.type === t.type.name).filter(n => n.attribute.rendered).map(n => n.attribute.renderHTML ? n.attribute.renderHTML(t.attrs) || {} : {
        [n.name]: t.attrs[n.name]
    }).reduce((n, r) => jn(n, r), {})
}

function Qf(t) {
    return typeof t != "string" ? t : t.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(t) : t === "true" ? !0 : t === "false" ? !1 : t
}

function Ts(t, e) {
    return "style" in t ? t : { ...t,
        getAttrs: n => {
            const r = t.getAttrs ? t.getAttrs(n) : t.attrs;
            if (r === !1) return !1;
            const i = e.reduce((s, o) => {
                const l = o.attribute.parseHTML ? o.attribute.parseHTML(n) : Qf(n.getAttribute(o.name));
                return l == null ? s : { ...s,
                    [o.name]: l
                }
            }, {});
            return { ...r,
                ...i
            }
        }
    }
}

function Ns(t) {
    return Object.fromEntries(Object.entries(t).filter(([e, n]) => e === "attrs" && Zf(n) ? !1 : n != null))
}

function Os(t) {
    var e, n;
    const r = {};
    return !((e = t ? .attribute) != null && e.isRequired) && "default" in (t ? .attribute || {}) && (r.default = t.attribute.default), ((n = t ? .attribute) == null ? void 0 : n.validate) !== void 0 && (r.validate = t.attribute.validate), [t.name, r]
}

function ea(t, e) {
    var n;
    const r = Ql(t),
        {
            nodeExtensions: i,
            markExtensions: s
        } = gt(t),
        o = (n = i.find(c => C(c, "topNode"))) == null ? void 0 : n.name,
        l = Object.fromEntries(i.map(c => {
            const u = r.filter(g => g.type === c.name),
                d = {
                    name: c.name,
                    options: c.options,
                    storage: c.storage,
                    editor: e
                },
                f = Ns({ ...t.reduce((g, y) => {
                        const b = C(y, "extendNodeSchema", d);
                        return { ...g,
                            ...b ? b(c) : {}
                        }
                    }, {}),
                    content: P(C(c, "content", d)),
                    marks: P(C(c, "marks", d)),
                    group: P(C(c, "group", d)),
                    inline: P(C(c, "inline", d)),
                    atom: P(C(c, "atom", d)),
                    selectable: P(C(c, "selectable", d)),
                    draggable: P(C(c, "draggable", d)),
                    code: P(C(c, "code", d)),
                    whitespace: P(C(c, "whitespace", d)),
                    linebreakReplacement: P(C(c, "linebreakReplacement", d)),
                    defining: P(C(c, "defining", d)),
                    isolating: P(C(c, "isolating", d)),
                    attrs: Object.fromEntries(u.map(Os))
                }),
                h = P(C(c, "parseHTML", d));
            h && (f.parseDOM = h.map(g => Ts(g, u)));
            const p = C(c, "renderHTML", d);
            p && (f.toDOM = g => p({
                node: g,
                HTMLAttributes: Gt(g, u)
            }));
            const m = C(c, "renderText", d);
            return m && (f.toText = m), [c.name, f]
        })),
        a = Object.fromEntries(s.map(c => {
            const u = r.filter(m => m.type === c.name),
                d = {
                    name: c.name,
                    options: c.options,
                    storage: c.storage,
                    editor: e
                },
                f = Ns({ ...t.reduce((m, g) => {
                        const y = C(g, "extendMarkSchema", d);
                        return { ...m,
                            ...y ? y(c) : {}
                        }
                    }, {}),
                    inclusive: P(C(c, "inclusive", d)),
                    excludes: P(C(c, "excludes", d)),
                    group: P(C(c, "group", d)),
                    spanning: P(C(c, "spanning", d)),
                    code: P(C(c, "code", d)),
                    attrs: Object.fromEntries(u.map(Os))
                }),
                h = P(C(c, "parseHTML", d));
            h && (f.parseDOM = h.map(m => Ts(m, u)));
            const p = C(c, "renderHTML", d);
            return p && (f.toDOM = m => p({
                mark: m,
                HTMLAttributes: Gt(m, u)
            })), [c.name, f]
        }));
    return new mo({
        topNode: o,
        nodes: l,
        marks: a
    })
}

function eh(t) {
    const e = t.filter((n, r) => t.indexOf(n) !== r);
    return Array.from(new Set(e))
}

function In(t) {
    return t.sort((n, r) => {
        const i = C(n, "priority") || 100,
            s = C(r, "priority") || 100;
        return i > s ? -1 : i < s ? 1 : 0
    })
}

function fi(t) {
    const e = In(di(t)),
        n = eh(e.map(r => r.name));
    return n.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${n.map(r=>`'${r}'`).join(", ")}]. This can lead to issues.`), e
}

function hi(t, e) {
    return ea(fi(t), e)
}

function Zm(t, e) {
    const n = hi(e);
    return Wn(ye.fromJSON(n, t).content, n)
}

function Qm(t, e) {
    const n = hi(e),
        r = Pt(t);
    return ct.fromSchema(n).parse(r).toJSON()
}

function ta(t, e, n) {
    const {
        from: r,
        to: i
    } = e, {
        blockSeparator: s = `

`,
        textSerializers: o = {}
    } = n || {};
    let l = "";
    return t.nodesBetween(r, i, (a, c, u, d) => {
        var f;
        a.isBlock && c > r && (l += s);
        const h = o ? .[a.type.name];
        if (h) return u && (l += h({
            node: a,
            pos: c,
            parent: u,
            index: d,
            range: e
        })), !1;
        a.isText && (l += (f = a ? .text) == null ? void 0 : f.slice(Math.max(r, c) - c, i - c))
    }), l
}

function na(t, e) {
    return ta(t, {
        from: 0,
        to: t.content.size
    }, e)
}

function pi(t) {
    return Object.fromEntries(Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText]))
}

function eg(t, e, n) {
    const {
        blockSeparator: r = `

`,
        textSerializers: i = {}
    } = n || {}, s = hi(e);
    return na(ye.fromJSON(s, t), {
        blockSeparator: r,
        textSerializers: { ...pi(s),
            ...i
        }
    })
}

function th(t, e) {
    const n = W(e, t.schema),
        {
            from: r,
            to: i
        } = t.selection,
        s = [];
    t.doc.nodesBetween(r, i, l => {
        s.push(l)
    });
    const o = s.reverse().find(l => l.type.name === n.name);
    return o ? { ...o.attrs
    } : {}
}

function nh(t, e) {
    const n = qn(typeof e == "string" ? e : e.name, t.schema);
    return n === "node" ? th(t, e) : n === "mark" ? Xl(t, e) : {}
}

function rh(t, e = JSON.stringify) {
    const n = {};
    return t.filter(r => {
        const i = e(r);
        return Object.prototype.hasOwnProperty.call(n, i) ? !1 : n[i] = !0
    })
}

function ih(t) {
    const e = rh(t);
    return e.length === 1 ? e : e.filter((n, r) => !e.filter((i, s) => s !== r).some(i => n.oldRange.from >= i.oldRange.from && n.oldRange.to <= i.oldRange.to && n.newRange.from >= i.newRange.from && n.newRange.to <= i.newRange.to))
}

function ra(t) {
    const {
        mapping: e,
        steps: n
    } = t, r = [];
    return e.maps.forEach((i, s) => {
        const o = [];
        if (i.ranges.length) i.forEach((l, a) => {
            o.push({
                from: l,
                to: a
            })
        });
        else {
            const {
                from: l,
                to: a
            } = n[s];
            if (l === void 0 || a === void 0) return;
            o.push({
                from: l,
                to: a
            })
        }
        o.forEach(({
            from: l,
            to: a
        }) => {
            const c = e.slice(s).map(l, -1),
                u = e.slice(s).map(a),
                d = e.invert().map(c, -1),
                f = e.invert().map(u);
            r.push({
                oldRange: {
                    from: d,
                    to: f
                },
                newRange: {
                    from: c,
                    to: u
                }
            })
        })
    }), ih(r)
}

function ia(t, e, n) {
    const r = [];
    return t === e ? n.resolve(t).marks().forEach(i => {
        const s = ui(n.resolve(t), i.type);
        s && r.push({
            mark: i,
            ...s
        })
    }) : n.nodesBetween(t, e, (i, s) => {
        !i || i ? .nodeSize === void 0 || r.push(...i.marks.map(o => ({
            from: s,
            to: s + i.nodeSize,
            mark: o
        })))
    }), r
}
var tg = (t, e, n, r = 20) => {
    const i = t.doc.resolve(n);
    let s = r,
        o = null;
    for (; s > 0 && o === null;) {
        const l = i.node(s);
        l ? .type.name === e ? o = l : s -= 1
    }
    return [o, s]
};

function ln(t, e) {
    return e.nodes[t] || e.marks[t] || null
}

function bn(t, e, n) {
    return Object.fromEntries(Object.entries(n).filter(([r]) => {
        const i = t.find(s => s.type === e && s.name === r);
        return i ? i.attribute.keepOnSplit : !1
    }))
}
var sh = (t, e = 500) => {
    let n = "";
    const r = t.parentOffset;
    return t.parent.nodesBetween(Math.max(0, r - e), r, (i, s, o, l) => {
        var a, c;
        const u = ((c = (a = i.type.spec).toText) == null ? void 0 : c.call(a, {
            node: i,
            pos: s,
            parent: o,
            index: l
        })) || i.textContent || "%leaf%";
        n += i.isAtom && !i.isText ? u : u.slice(0, Math.max(0, r - s))
    }), n
};

function Lr(t, e, n = {}) {
    const {
        empty: r,
        ranges: i
    } = t.selection, s = e ? Te(e, t.schema) : null;
    if (r) return !!(t.storedMarks || t.selection.$from.marks()).filter(u => s ? s.name === u.type.name : !0).find(u => Rn(u.attrs, n, {
        strict: !1
    }));
    let o = 0;
    const l = [];
    if (i.forEach(({
            $from: u,
            $to: d
        }) => {
            const f = u.pos,
                h = d.pos;
            t.doc.nodesBetween(f, h, (p, m) => {
                if (!p.isText && !p.marks.length) return;
                const g = Math.max(f, m),
                    y = Math.min(h, m + p.nodeSize),
                    b = y - g;
                o += b, l.push(...p.marks.map(w => ({
                    mark: w,
                    from: g,
                    to: y
                })))
            })
        }), o === 0) return !1;
    const a = l.filter(u => s ? s.name === u.mark.type.name : !0).filter(u => Rn(u.mark.attrs, n, {
            strict: !1
        })).reduce((u, d) => u + d.to - d.from, 0),
        c = l.filter(u => s ? u.mark.type !== s && u.mark.type.excludes(s) : !0).reduce((u, d) => u + d.to - d.from, 0);
    return (a > 0 ? a + c : a) >= o
}

function oh(t, e, n = {}) {
    if (!e) return Ut(t, null, n) || Lr(t, null, n);
    const r = qn(e, t.schema);
    return r === "node" ? Ut(t, e, n) : r === "mark" ? Lr(t, e, n) : !1
}
var ng = (t, e) => {
        const {
            $from: n,
            $to: r,
            $anchor: i
        } = t.selection;
        if (e) {
            const s = _n(l => l.type.name === e)(t.selection);
            if (!s) return !1;
            const o = t.doc.resolve(s.pos + 1);
            return i.pos + 1 === o.end()
        }
        return !(r.parentOffset < r.parent.nodeSize - 2 || n.pos !== r.pos)
    },
    rg = t => {
        const {
            $from: e,
            $to: n
        } = t.selection;
        return !(e.parentOffset > 0 || e.pos !== n.pos)
    };

function Ds(t, e) {
    return Array.isArray(e) ? e.some(n => (typeof n == "string" ? n : n.name) === t.name) : e
}

function As(t, e) {
    const {
        nodeExtensions: n
    } = gt(e), r = n.find(s => s.name === t);
    if (!r) return !1;
    const i = P(C(r, "group", {
        name: r.name,
        options: r.options,
        storage: r.storage
    }));
    return typeof i != "string" ? !1 : i.split(" ").includes("list")
}

function tn(t, {
    checkChildren: e = !0,
    ignoreWhitespace: n = !1
} = {}) {
    var r;
    if (n) {
        if (t.type.name === "hardBreak") return !0;
        if (t.isText) return /^\s*$/m.test((r = t.text) != null ? r : "")
    }
    if (t.isText) return !t.text;
    if (t.isAtom || t.isLeaf) return !1;
    if (t.content.childCount === 0) return !0;
    if (e) {
        let i = !0;
        return t.content.forEach(s => {
            i !== !1 && (tn(s, {
                ignoreWhitespace: n,
                checkChildren: e
            }) || (i = !1))
        }), i
    }
    return !1
}

function lh(t) {
    return t instanceof E
}
var sa = class oa {
    constructor(e) {
        this.position = e
    }
    static fromJSON(e) {
        return new oa(e.position)
    }
    toJSON() {
        return {
            position: this.position
        }
    }
};

function ah(t, e) {
    const n = e.mapping.mapResult(t.position);
    return {
        position: new sa(n.pos),
        mapResult: n
    }
}

function ch(t) {
    return new sa(t)
}

function uh(t, e, n) {
    var r;
    const {
        selection: i
    } = e;
    let s = null;
    if (Kl(i) && (s = i.$cursor), s) {
        const l = (r = t.storedMarks) != null ? r : s.marks();
        return s.parent.type.allowsMarkType(n) && (!!n.isInSet(l) || !l.some(a => a.type.excludes(n)))
    }
    const {
        ranges: o
    } = i;
    return o.some(({
        $from: l,
        $to: a
    }) => {
        let c = l.depth === 0 ? t.doc.inlineContent && t.doc.type.allowsMarkType(n) : !1;
        return t.doc.nodesBetween(l.pos, a.pos, (u, d, f) => {
            if (c) return !1;
            if (u.isInline) {
                const h = !f || f.type.allowsMarkType(n),
                    p = !!n.isInSet(u.marks) || !u.marks.some(m => m.type.excludes(n));
                c = h && p
            }
            return !c
        }), c
    })
}
var dh = (t, e = {}) => ({
        tr: n,
        state: r,
        dispatch: i
    }) => {
        const {
            selection: s
        } = n, {
            empty: o,
            ranges: l
        } = s, a = Te(t, r.schema);
        if (i)
            if (o) {
                const c = Xl(r, a);
                n.addStoredMark(a.create({ ...c,
                    ...e
                }))
            } else l.forEach(c => {
                const u = c.$from.pos,
                    d = c.$to.pos;
                r.doc.nodesBetween(u, d, (f, h) => {
                    const p = Math.max(h, u),
                        m = Math.min(h + f.nodeSize, d);
                    f.marks.find(g => g.type === a) ? f.marks.forEach(g => {
                        a === g.type && n.addMark(p, m, a.create({ ...g.attrs,
                            ...e
                        }))
                    }) : n.addMark(p, m, a.create(e))
                })
            });
        return uh(r, n, a)
    },
    fh = (t, e) => ({
        tr: n
    }) => (n.setMeta(t, e), !0),
    hh = (t, e = {}) => ({
        state: n,
        dispatch: r,
        chain: i
    }) => {
        const s = W(t, n.schema);
        let o;
        return n.selection.$anchor.sameParent(n.selection.$head) && (o = n.selection.$anchor.parent.attrs), s.isTextblock ? i().command(({
            commands: l
        }) => _i(s, { ...o,
            ...e
        })(n) ? !0 : l.clearNodes()).command(({
            state: l
        }) => _i(s, { ...o,
            ...e
        })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1)
    },
    ph = t => ({
        tr: e,
        dispatch: n
    }) => {
        if (n) {
            const {
                doc: r
            } = e, i = He(t, 0, r.content.size), s = E.create(r, i);
            e.setSelection(s)
        }
        return !0
    },
    mh = (t, e) => ({
        tr: n,
        state: r,
        dispatch: i
    }) => {
        const {
            selection: s
        } = r;
        let o, l;
        return typeof e == "number" ? (o = e, l = e) : e && "from" in e && "to" in e ? (o = e.from, l = e.to) : (o = s.from, l = s.to), i && n.doc.nodesBetween(o, l, (a, c) => {
            a.isText || n.setNodeMarkup(c, void 0, { ...a.attrs,
                dir: t
            })
        }), !0
    },
    gh = t => ({
        tr: e,
        dispatch: n
    }) => {
        if (n) {
            const {
                doc: r
            } = e, {
                from: i,
                to: s
            } = typeof t == "number" ? {
                from: t,
                to: t
            } : t, o = A.atStart(r).from, l = A.atEnd(r).to, a = He(i, o, l), c = He(s, o, l), u = A.create(r, a, c);
            e.setSelection(u)
        }
        return !0
    },
    yh = t => ({
        state: e,
        dispatch: n
    }) => {
        const r = W(t, e.schema);
        return fu(r)(e, n)
    };

function Rs(t, e) {
    const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
    if (n) {
        const r = n.filter(i => e ? .includes(i.type.name));
        t.tr.ensureMarks(r)
    }
}
var bh = ({
        keepMarks: t = !0
    } = {}) => ({
        tr: e,
        state: n,
        dispatch: r,
        editor: i
    }) => {
        const {
            selection: s,
            doc: o
        } = e, {
            $from: l,
            $to: a
        } = s, c = i.extensionManager.attributes, u = bn(c, l.node().type.name, l.node().attrs);
        if (s instanceof E && s.node.isBlock) return !l.parentOffset || !Ce(o, l.pos) ? !1 : (r && (t && Rs(n, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
        if (!l.parent.isBlock) return !1;
        const d = a.parentOffset === a.parent.content.size,
            f = l.depth === 0 ? void 0 : Yf(l.node(-1).contentMatchAt(l.indexAfter(-1)));
        let h = d && f ? [{
                type: f,
                attrs: u
            }] : void 0,
            p = Ce(e.doc, e.mapping.map(l.pos), 1, h);
        if (!h && !p && Ce(e.doc, e.mapping.map(l.pos), 1, f ? [{
                type: f
            }] : void 0) && (p = !0, h = f ? [{
                type: f,
                attrs: u
            }] : void 0), r) {
            if (p && (s instanceof A && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), f && !d && !l.parentOffset && l.parent.type !== f)) {
                const m = e.mapping.map(l.before()),
                    g = e.doc.resolve(m);
                l.node(-1).canReplaceWith(g.index(), g.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f)
            }
            t && Rs(n, i.extensionManager.splittableMarks), e.scrollIntoView()
        }
        return p
    },
    vh = (t, e = {}) => ({
        tr: n,
        state: r,
        dispatch: i,
        editor: s
    }) => {
        var o;
        const l = W(t, r.schema),
            {
                $from: a,
                $to: c
            } = r.selection,
            u = r.selection.node;
        if (u && u.isBlock || a.depth < 2 || !a.sameParent(c)) return !1;
        const d = a.node(-1);
        if (d.type !== l) return !1;
        const f = s.extensionManager.attributes;
        if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
            if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1) return !1;
            if (i) {
                let y = v.empty;
                const b = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
                for (let M = a.depth - b; M >= a.depth - 3; M -= 1) y = v.from(a.node(M).copy(y));
                const w = a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3,
                    x = { ...bn(f, a.node().type.name, a.node().attrs),
                        ...e
                    },
                    T = ((o = l.contentMatch.defaultType) == null ? void 0 : o.createAndFill(x)) || void 0;
                y = y.append(v.from(l.createAndFill(null, T) || void 0));
                const N = a.before(a.depth - (b - 1));
                n.replace(N, a.after(-w), new k(y, 4 - b, 0));
                let S = -1;
                n.doc.nodesBetween(N, n.doc.content.size, (M, O) => {
                    if (S > -1) return !1;
                    M.isTextblock && M.content.size === 0 && (S = O + 1)
                }), S > -1 && n.setSelection(A.near(n.doc.resolve(S))), n.scrollIntoView()
            }
            return !0
        }
        const h = c.pos === a.end() ? d.contentMatchAt(0).defaultType : null,
            p = { ...bn(f, d.type.name, d.attrs),
                ...e
            },
            m = { ...bn(f, a.node().type.name, a.node().attrs),
                ...e
            };
        n.delete(a.pos, c.pos);
        const g = h ? [{
            type: l,
            attrs: p
        }, {
            type: h,
            attrs: m
        }] : [{
            type: l,
            attrs: p
        }];
        if (!Ce(n.doc, a.pos, 2)) return !1;
        if (i) {
            const {
                selection: y,
                storedMarks: b
            } = r, {
                splittableMarks: w
            } = s.extensionManager, x = b || y.$to.parentOffset && y.$from.marks();
            if (n.split(a.pos, 2, g).scrollIntoView(), !x || !i) return !0;
            const T = x.filter(N => w.includes(N.type.name));
            n.ensureMarks(T)
        }
        return !0
    },
    dr = (t, e) => {
        const n = _n(s => s.type === e)(t.selection);
        if (!n) return !0;
        const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
        if (r === void 0) return !0;
        const i = t.doc.nodeAt(r);
        return n.node.type === i ? .type && Ve(t.doc, n.pos) && t.join(n.pos), !0
    },
    fr = (t, e) => {
        const n = _n(s => s.type === e)(t.selection);
        if (!n) return !0;
        const r = t.doc.resolve(n.start).after(n.depth);
        if (r === void 0) return !0;
        const i = t.doc.nodeAt(r);
        return n.node.type === i ? .type && Ve(t.doc, r) && t.join(r), !0
    },
    Sh = (t, e, n, r = {}) => ({
        editor: i,
        tr: s,
        state: o,
        dispatch: l,
        chain: a,
        commands: c,
        can: u
    }) => {
        const {
            extensions: d,
            splittableMarks: f
        } = i.extensionManager, h = W(t, o.schema), p = W(e, o.schema), {
            selection: m,
            storedMarks: g
        } = o, {
            $from: y,
            $to: b
        } = m, w = y.blockRange(b), x = g || m.$to.parentOffset && m.$from.marks();
        if (!w) return !1;
        const T = _n(N => As(N.type.name, d))(m);
        if (w.depth >= 1 && T && w.depth - T.depth <= 1) {
            if (T.node.type === h) return c.liftListItem(p);
            if (As(T.node.type.name, d) && h.validContent(T.node.content) && l) return a().command(() => (s.setNodeMarkup(T.pos, h), !0)).command(() => dr(s, h)).command(() => fr(s, h)).run()
        }
        return !n || !x || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => dr(s, h)).command(() => fr(s, h)).run() : a().command(() => {
            const N = u().wrapInList(h, r),
                S = x.filter(M => f.includes(M.type.name));
            return s.ensureMarks(S), N ? !0 : c.clearNodes()
        }).wrapInList(h, r).command(() => dr(s, h)).command(() => fr(s, h)).run()
    },
    xh = (t, e = {}, n = {}) => ({
        state: r,
        commands: i
    }) => {
        const {
            extendEmptyMarkRange: s = !1
        } = n, o = Te(t, r.schema);
        return Lr(r, o, e) ? i.unsetMark(o, {
            extendEmptyMarkRange: s
        }) : i.setMark(o, e)
    },
    kh = (t, e, n = {}) => ({
        state: r,
        commands: i
    }) => {
        const s = W(t, r.schema),
            o = W(e, r.schema),
            l = Ut(r, s, n);
        let a;
        return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? i.setNode(o, a) : i.setNode(s, { ...a,
            ...n
        })
    },
    wh = (t, e = {}) => ({
        state: n,
        commands: r
    }) => {
        const i = W(t, n.schema);
        return Ut(n, i, e) ? r.lift(i) : r.wrapIn(i, e)
    },
    Mh = () => ({
        state: t,
        dispatch: e
    }) => {
        const n = t.plugins;
        for (let r = 0; r < n.length; r += 1) {
            const i = n[r];
            let s;
            if (i.spec.isInputRules && (s = i.getState(t))) {
                if (e) {
                    const o = t.tr,
                        l = s.transform;
                    for (let a = l.steps.length - 1; a >= 0; a -= 1) o.step(l.steps[a].invert(l.docs[a]));
                    if (s.text) {
                        const a = o.doc.resolve(s.from).marks();
                        o.replaceWith(s.from, s.to, t.schema.text(s.text, a))
                    } else o.delete(s.from, s.to)
                }
                return !0
            }
        }
        return !1
    },
    Ch = () => ({
        tr: t,
        dispatch: e
    }) => {
        const {
            selection: n
        } = t, {
            empty: r,
            ranges: i
        } = n;
        return r || e && i.forEach(s => {
            t.removeMark(s.$from.pos, s.$to.pos)
        }), !0
    },
    Eh = (t, e = {}) => ({
        tr: n,
        state: r,
        dispatch: i
    }) => {
        var s;
        const {
            extendEmptyMarkRange: o = !1
        } = e, {
            selection: l
        } = n, a = Te(t, r.schema), {
            $from: c,
            empty: u,
            ranges: d
        } = l;
        if (!i) return !0;
        if (u && o) {
            let {
                from: f,
                to: h
            } = l;
            const p = ui(c, a, (s = c.marks().find(m => m.type === a)) == null ? void 0 : s.attrs);
            p && (f = p.from, h = p.to), n.removeMark(f, h, a)
        } else d.forEach(f => {
            n.removeMark(f.$from.pos, f.$to.pos, a)
        });
        return n.removeStoredMark(a), !0
    },
    Th = t => ({
        tr: e,
        state: n,
        dispatch: r
    }) => {
        const {
            selection: i
        } = n;
        let s, o;
        return typeof t == "number" ? (s = t, o = t) : t && "from" in t && "to" in t ? (s = t.from, o = t.to) : (s = i.from, o = i.to), r && e.doc.nodesBetween(s, o, (l, a) => {
            if (l.isText) return;
            const c = { ...l.attrs
            };
            delete c.dir, e.setNodeMarkup(a, void 0, c)
        }), !0
    },
    Nh = (t, e = {}) => ({
        tr: n,
        state: r,
        dispatch: i
    }) => {
        let s = null,
            o = null;
        const l = qn(typeof t == "string" ? t : t.name, r.schema);
        if (!l) return !1;
        l === "node" && (s = W(t, r.schema)), l === "mark" && (o = Te(t, r.schema));
        let a = !1;
        return n.selection.ranges.forEach(c => {
            const u = c.$from.pos,
                d = c.$to.pos;
            let f, h, p, m;
            n.selection.empty ? r.doc.nodesBetween(u, d, (g, y) => {
                s && s === g.type && (a = !0, p = Math.max(y, u), m = Math.min(y + g.nodeSize, d), f = y, h = g)
            }) : r.doc.nodesBetween(u, d, (g, y) => {
                y < u && s && s === g.type && (a = !0, p = Math.max(y, u), m = Math.min(y + g.nodeSize, d), f = y, h = g), y >= u && y <= d && (s && s === g.type && (a = !0, i && n.setNodeMarkup(y, void 0, { ...g.attrs,
                    ...e
                })), o && g.marks.length && g.marks.forEach(b => {
                    if (o === b.type && (a = !0, i)) {
                        const w = Math.max(y, u),
                            x = Math.min(y + g.nodeSize, d);
                        n.addMark(w, x, o.create({ ...b.attrs,
                            ...e
                        }))
                    }
                }))
            }), h && (f !== void 0 && i && n.setNodeMarkup(f, void 0, { ...h.attrs,
                ...e
            }), o && h.marks.length && h.marks.forEach(g => {
                o === g.type && i && n.addMark(p, m, o.create({ ...g.attrs,
                    ...e
                }))
            }))
        }), a
    },
    Oh = (t, e = {}) => ({
        state: n,
        dispatch: r
    }) => {
        const i = W(t, n.schema);
        return su(i, e)(n, r)
    },
    Dh = (t, e = {}) => ({
        state: n,
        dispatch: r
    }) => {
        const i = W(t, n.schema);
        return ou(i, e)(n, r)
    },
    Ah = class {
        constructor() {
            this.callbacks = {}
        }
        on(t, e) {
            return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(e), this
        }
        emit(t, ...e) {
            const n = this.callbacks[t];
            return n && n.forEach(r => r.apply(this, e)), this
        }
        off(t, e) {
            const n = this.callbacks[t];
            return n && (e ? this.callbacks[t] = n.filter(r => r !== e) : delete this.callbacks[t]), this
        }
        once(t, e) {
            const n = (...r) => {
                this.off(t, n), e.apply(this, r)
            };
            return this.on(t, n)
        }
        removeAllListeners() {
            this.callbacks = {}
        }
    },
    Hn = class {
        constructor(t) {
            var e;
            this.find = t.find, this.handler = t.handler, this.undoable = (e = t.undoable) != null ? e : !0
        }
    },
    Rh = (t, e) => {
        if (ci(e)) return e.exec(t);
        const n = e(t);
        if (!n) return null;
        const r = [n.text];
        return r.index = n.index, r.input = t, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(n.replaceWith)), r
    };

function an(t) {
    var e;
    const {
        editor: n,
        from: r,
        to: i,
        text: s,
        rules: o,
        plugin: l
    } = t, {
        view: a
    } = n;
    if (a.composing) return !1;
    const c = a.state.doc.resolve(r);
    if (c.parent.type.spec.code || (e = c.nodeBefore || c.nodeAfter) != null && e.marks.find(f => f.type.spec.code)) return !1;
    let u = !1;
    const d = sh(c) + s;
    return o.forEach(f => {
        if (u) return;
        const h = Rh(d, f.find);
        if (!h) return;
        const p = a.state.tr,
            m = Fn({
                state: a.state,
                transaction: p
            }),
            g = {
                from: r - (h[0].length - s.length),
                to: i
            },
            {
                commands: y,
                chain: b,
                can: w
            } = new Ln({
                editor: n,
                state: m
            });
        f.handler({
            state: m,
            range: g,
            match: h,
            commands: y,
            chain: b,
            can: w
        }) === null || !p.steps.length || (f.undoable && p.setMeta(l, {
            transform: p,
            from: r,
            to: i,
            text: s
        }), a.dispatch(p), u = !0)
    }), u
}

function Ih(t) {
    const {
        editor: e,
        rules: n
    } = t, r = new F({
        state: {
            init() {
                return null
            },
            apply(i, s, o) {
                const l = i.getMeta(r);
                if (l) return l;
                const a = i.getMeta("applyInputRules");
                return a && setTimeout(() => {
                    let {
                        text: c
                    } = a;
                    typeof c == "string" ? c = c : c = Wn(v.from(c), o.schema);
                    const {
                        from: u
                    } = a, d = u + c.length;
                    an({
                        editor: e,
                        from: u,
                        to: d,
                        text: c,
                        rules: n,
                        plugin: r
                    })
                }), i.selectionSet || i.docChanged ? null : s
            }
        },
        props: {
            handleTextInput(i, s, o, l) {
                return an({
                    editor: e,
                    from: s,
                    to: o,
                    text: l,
                    rules: n,
                    plugin: r
                })
            },
            handleDOMEvents: {
                compositionend: i => (setTimeout(() => {
                    const {
                        $cursor: s
                    } = i.state.selection;
                    s && an({
                        editor: e,
                        from: s.pos,
                        to: s.pos,
                        text: "",
                        rules: n,
                        plugin: r
                    })
                }), !1)
            },
            handleKeyDown(i, s) {
                if (s.key !== "Enter") return !1;
                const {
                    $cursor: o
                } = i.state.selection;
                return o ? an({
                    editor: e,
                    from: o.pos,
                    to: o.pos,
                    text: `
`,
                    rules: n,
                    plugin: r
                }) : !1
            }
        },
        isInputRules: !0
    });
    return r
}

function Ph(t) {
    return Object.prototype.toString.call(t).slice(8, -1)
}

function cn(t) {
    return Ph(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype
}

function la(t, e) {
    const n = { ...t
    };
    return cn(t) && cn(e) && Object.keys(e).forEach(r => {
        cn(e[r]) && cn(t[r]) ? n[r] = la(t[r], e[r]) : n[r] = e[r]
    }), n
}
var mi = class {
        constructor(t = {}) {
            this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = {
                name: this.name
            }, this.config = { ...this.config,
                ...t
            }, this.name = this.config.name
        }
        get options() {
            return { ...P(C(this, "addOptions", {
                    name: this.name
                })) || {}
            }
        }
        get storage() {
            return { ...P(C(this, "addStorage", {
                    name: this.name,
                    options: this.options
                })) || {}
            }
        }
        configure(t = {}) {
            const e = this.extend({ ...this.config,
                addOptions: () => la(this.options, t)
            });
            return e.name = this.name, e.parent = this.parent, e
        }
        extend(t = {}) {
            const e = new this.constructor({ ...this.config,
                ...t
            });
            return e.parent = this, this.child = e, e.name = "name" in t ? t.name : e.parent.name, e
        }
    },
    zh = class aa extends mi {
        constructor() {
            super(...arguments), this.type = "mark"
        }
        static create(e = {}) {
            const n = typeof e == "function" ? e() : e;
            return new aa(n)
        }
        static handleExit({
            editor: e,
            mark: n
        }) {
            const {
                tr: r
            } = e.state, i = e.state.selection.$from;
            if (i.pos === i.end()) {
                const s = i.marks();
                if (!s.find(l => l ? .type.name === n.name)) return !1;
                const o = s.find(l => l ? .type.name === n.name);
                return o && r.removeStoredMark(o), r.insertText(" ", i.pos), e.view.dispatch(r), !0
            }
            return !1
        }
        configure(e) {
            return super.configure(e)
        }
        extend(e) {
            const n = typeof e == "function" ? e() : e;
            return super.extend(n)
        }
    };

function Bh(t) {
    return typeof t == "number"
}
var $h = class {
        constructor(t) {
            this.find = t.find, this.handler = t.handler
        }
    },
    Vh = (t, e, n) => {
        if (ci(e)) return [...t.matchAll(e)];
        const r = e(t, n);
        return r ? r.map(i => {
            const s = [i.text];
            return s.index = i.index, s.input = t, s.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), s.push(i.replaceWith)), s
        }) : []
    };

function Fh(t) {
    const {
        editor: e,
        state: n,
        from: r,
        to: i,
        rule: s,
        pasteEvent: o,
        dropEvent: l
    } = t, {
        commands: a,
        chain: c,
        can: u
    } = new Ln({
        editor: e,
        state: n
    }), d = [];
    return n.doc.nodesBetween(r, i, (f, h) => {
        var p, m, g, y, b;
        if ((m = (p = f.type) == null ? void 0 : p.spec) != null && m.code || !(f.isText || f.isTextblock || f.isInline)) return;
        const w = (b = (y = (g = f.content) == null ? void 0 : g.size) != null ? y : f.nodeSize) != null ? b : 0,
            x = Math.max(r, h),
            T = Math.min(i, h + w);
        x >= T || Vh(f.isText ? f.text || "" : f.textBetween(x - h, T - h, void 0, "￼"), s.find, o).forEach(N => {
            if (N.index === void 0) return;
            const S = x + N.index + 1,
                M = S + N[0].length,
                O = {
                    from: n.tr.mapping.map(S),
                    to: n.tr.mapping.map(M)
                },
                V = s.handler({
                    state: n,
                    range: O,
                    match: N,
                    commands: a,
                    chain: c,
                    can: u,
                    pasteEvent: o,
                    dropEvent: l
                });
            d.push(V)
        })
    }), d.every(f => f !== null)
}
var un = null,
    Lh = t => {
        var e;
        const n = new ClipboardEvent("paste", {
            clipboardData: new DataTransfer
        });
        return (e = n.clipboardData) == null || e.setData("text/html", t), n
    };

function qh(t) {
    const {
        editor: e,
        rules: n
    } = t;
    let r = null,
        i = !1,
        s = !1,
        o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null,
        l;
    try {
        l = typeof DragEvent < "u" ? new DragEvent("drop") : null
    } catch {
        l = null
    }
    const a = ({
        state: c,
        from: u,
        to: d,
        rule: f,
        pasteEvt: h
    }) => {
        const p = c.tr,
            m = Fn({
                state: c,
                transaction: p
            });
        if (!(!Fh({
                editor: e,
                state: m,
                from: Math.max(u - 1, 0),
                to: d.b - 1,
                rule: f,
                pasteEvent: h,
                dropEvent: l
            }) || !p.steps.length)) {
            try {
                l = typeof DragEvent < "u" ? new DragEvent("drop") : null
            } catch {
                l = null
            }
            return o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, p
        }
    };
    return n.map(c => new F({
        view(u) {
            const d = h => {
                    var p;
                    r = (p = u.dom.parentElement) != null && p.contains(h.target) ? u.dom.parentElement : null, r && (un = e)
                },
                f = () => {
                    un && (un = null)
                };
            return window.addEventListener("dragstart", d), window.addEventListener("dragend", f), {
                destroy() {
                    window.removeEventListener("dragstart", d), window.removeEventListener("dragend", f)
                }
            }
        },
        props: {
            handleDOMEvents: {
                drop: (u, d) => {
                    if (s = r === u.dom.parentElement, l = d, !s) {
                        const f = un;
                        f ? .isEditable && setTimeout(() => {
                            const h = f.state.selection;
                            h && f.commands.deleteRange({
                                from: h.from,
                                to: h.to
                            })
                        }, 10)
                    }
                    return !1
                },
                paste: (u, d) => {
                    var f;
                    const h = (f = d.clipboardData) == null ? void 0 : f.getData("text/html");
                    return o = d, i = !!h ? .includes("data-pm-slice"), !1
                }
            }
        },
        appendTransaction: (u, d, f) => {
            const h = u[0],
                p = h.getMeta("uiEvent") === "paste" && !i,
                m = h.getMeta("uiEvent") === "drop" && !s,
                g = h.getMeta("applyPasteRules"),
                y = !!g;
            if (!p && !m && !y) return;
            if (y) {
                let {
                    text: x
                } = g;
                typeof x == "string" ? x = x : x = Wn(v.from(x), f.schema);
                const {
                    from: T
                } = g, N = T + x.length, S = Lh(x);
                return a({
                    rule: c,
                    state: f,
                    from: T,
                    to: {
                        b: N
                    },
                    pasteEvt: S
                })
            }
            const b = d.doc.content.findDiffStart(f.doc.content),
                w = d.doc.content.findDiffEnd(f.doc.content);
            if (!(!Bh(b) || !w || b === w.b)) return a({
                rule: c,
                state: f,
                from: b,
                to: w,
                pasteEvt: o
            })
        }
    }))
}
var Jn = class {
    constructor(t, e) {
        this.splittableMarks = [], this.editor = e, this.baseExtensions = t, this.extensions = fi(t), this.schema = ea(this.extensions, e), this.setupExtensions()
    }
    get commands() {
        return this.extensions.reduce((t, e) => {
            const n = C(e, "addCommands", {
                name: e.name,
                options: e.options,
                storage: this.editor.extensionStorage[e.name],
                editor: this.editor,
                type: ln(e.name, this.schema)
            });
            return n ? { ...t,
                ...n()
            } : t
        }, {})
    }
    get plugins() {
        const {
            editor: t
        } = this;
        return In([...this.extensions].reverse()).flatMap(e => {
            const n = {
                    name: e.name,
                    options: e.options,
                    storage: this.editor.extensionStorage[e.name],
                    editor: t,
                    type: ln(e.name, this.schema)
                },
                r = [],
                i = C(e, "addKeyboardShortcuts", n);
            let s = {};
            if (e.type === "mark" && C(e, "exitable", n) && (s.ArrowRight = () => zh.handleExit({
                    editor: t,
                    mark: e
                })), i) {
                const u = Object.fromEntries(Object.entries(i()).map(([d, f]) => [d, () => f({
                    editor: t
                })]));
                s = { ...s,
                    ...u
                }
            }
            const o = nf(s);
            r.push(o);
            const l = C(e, "addInputRules", n);
            if (Ds(e, t.options.enableInputRules) && l) {
                const u = l();
                if (u && u.length) {
                    const d = Ih({
                            editor: t,
                            rules: u
                        }),
                        f = Array.isArray(d) ? d : [d];
                    r.push(...f)
                }
            }
            const a = C(e, "addPasteRules", n);
            if (Ds(e, t.options.enablePasteRules) && a) {
                const u = a();
                if (u && u.length) {
                    const d = qh({
                        editor: t,
                        rules: u
                    });
                    r.push(...d)
                }
            }
            const c = C(e, "addProseMirrorPlugins", n);
            if (c) {
                const u = c();
                r.push(...u)
            }
            return r
        })
    }
    get attributes() {
        return Ql(this.extensions)
    }
    get nodeViews() {
        const {
            editor: t
        } = this, {
            nodeExtensions: e
        } = gt(this.extensions);
        return Object.fromEntries(e.filter(n => !!C(n, "addNodeView")).map(n => {
            const r = this.attributes.filter(l => l.type === n.name),
                i = C(n, "addNodeView", {
                    name: n.name,
                    options: n.options,
                    storage: this.editor.extensionStorage[n.name],
                    editor: t,
                    type: W(n.name, this.schema)
                });
            if (!i) return [];
            const s = i();
            if (!s) return [];
            const o = (l, a, c, u, d) => {
                const f = Gt(l, r);
                return s({
                    node: l,
                    view: a,
                    getPos: c,
                    decorations: u,
                    innerDecorations: d,
                    editor: t,
                    extension: n,
                    HTMLAttributes: f
                })
            };
            return [n.name, o]
        }))
    }
    dispatchTransaction(t) {
        const {
            editor: e
        } = this;
        return In([...this.extensions].reverse()).reduceRight((n, r) => {
            const i = {
                    name: r.name,
                    options: r.options,
                    storage: this.editor.extensionStorage[r.name],
                    editor: e,
                    type: ln(r.name, this.schema)
                },
                s = C(r, "dispatchTransaction", i);
            return s ? o => {
                s.call(i, {
                    transaction: o,
                    next: n
                })
            } : n
        }, t)
    }
    get markViews() {
        const {
            editor: t
        } = this, {
            markExtensions: e
        } = gt(this.extensions);
        return Object.fromEntries(e.filter(n => !!C(n, "addMarkView")).map(n => {
            const r = this.attributes.filter(o => o.type === n.name),
                i = C(n, "addMarkView", {
                    name: n.name,
                    options: n.options,
                    storage: this.editor.extensionStorage[n.name],
                    editor: t,
                    type: Te(n.name, this.schema)
                });
            if (!i) return [];
            const s = (o, l, a) => {
                const c = Gt(o, r);
                return i()({
                    mark: o,
                    view: l,
                    inline: a,
                    editor: t,
                    extension: n,
                    HTMLAttributes: c,
                    updateAttributes: u => {
                        ip(o, t, u)
                    }
                })
            };
            return [n.name, s]
        }))
    }
    setupExtensions() {
        const t = this.extensions;
        this.editor.extensionStorage = Object.fromEntries(t.map(e => [e.name, e.storage])), t.forEach(e => {
            var n;
            const r = {
                name: e.name,
                options: e.options,
                storage: this.editor.extensionStorage[e.name],
                editor: this.editor,
                type: ln(e.name, this.schema)
            };
            e.type === "mark" && ((n = P(C(e, "keepOnSplit", r))) == null || n) && this.splittableMarks.push(e.name);
            const i = C(e, "onBeforeCreate", r),
                s = C(e, "onCreate", r),
                o = C(e, "onUpdate", r),
                l = C(e, "onSelectionUpdate", r),
                a = C(e, "onTransaction", r),
                c = C(e, "onFocus", r),
                u = C(e, "onBlur", r),
                d = C(e, "onDestroy", r);
            i && this.editor.on("beforeCreate", i), s && this.editor.on("create", s), o && this.editor.on("update", o), l && this.editor.on("selectionUpdate", l), a && this.editor.on("transaction", a), c && this.editor.on("focus", c), u && this.editor.on("blur", u), d && this.editor.on("destroy", d)
        })
    }
};
Jn.resolve = fi;
Jn.sort = In;
Jn.flatten = di;
var _h = {};
ai(_h, {
    ClipboardTextSerializer: () => ua,
    Commands: () => da,
    Delete: () => fa,
    Drop: () => ha,
    Editable: () => pa,
    FocusEvents: () => ga,
    Keymap: () => ya,
    Paste: () => ba,
    Tabindex: () => va,
    TextDirection: () => Sa,
    focusEventsPluginKey: () => ma
});
var j = class ca extends mi {
        constructor() {
            super(...arguments), this.type = "extension"
        }
        static create(e = {}) {
            const n = typeof e == "function" ? e() : e;
            return new ca(n)
        }
        configure(e) {
            return super.configure(e)
        }
        extend(e) {
            const n = typeof e == "function" ? e() : e;
            return super.extend(n)
        }
    },
    ua = j.create({
        name: "clipboardTextSerializer",
        addOptions() {
            return {
                blockSeparator: void 0
            }
        },
        addProseMirrorPlugins() {
            return [new F({
                key: new Q("clipboardTextSerializer"),
                props: {
                    clipboardTextSerializer: () => {
                        const {
                            editor: t
                        } = this, {
                            state: e,
                            schema: n
                        } = t, {
                            doc: r,
                            selection: i
                        } = e, {
                            ranges: s
                        } = i, o = Math.min(...s.map(c => c.$from.pos)), l = Math.max(...s.map(c => c.$to.pos)), a = pi(n);
                        return ta(r, {
                            from: o,
                            to: l
                        }, { ...this.options.blockSeparator !== void 0 ? {
                                blockSeparator: this.options.blockSeparator
                            } : {},
                            textSerializers: a
                        })
                    }
                }
            })]
        }
    }),
    da = j.create({
        name: "commands",
        addCommands() {
            return { ...Hl
            }
        }
    }),
    fa = j.create({
        name: "delete",
        onUpdate({
            transaction: t,
            appendedTransactions: e
        }) {
            var n, r, i;
            const s = () => {
                var o, l, a, c;
                if ((c = (a = (l = (o = this.editor.options.coreExtensionOptions) == null ? void 0 : o.delete) == null ? void 0 : l.filterTransaction) == null ? void 0 : a.call(l, t)) != null ? c : t.getMeta("y-sync$")) return;
                const u = Gf(t.before, [t, ...e]);
                ra(u).forEach(f => {
                    u.mapping.mapResult(f.oldRange.from).deletedAfter && u.mapping.mapResult(f.oldRange.to).deletedBefore && u.before.nodesBetween(f.oldRange.from, f.oldRange.to, (h, p) => {
                        const m = p + h.nodeSize - 2,
                            g = f.oldRange.from <= p && m <= f.oldRange.to;
                        this.editor.emit("delete", {
                            type: "node",
                            node: h,
                            from: p,
                            to: m,
                            newFrom: u.mapping.map(p),
                            newTo: u.mapping.map(m),
                            deletedRange: f.oldRange,
                            newRange: f.newRange,
                            partial: !g,
                            editor: this.editor,
                            transaction: t,
                            combinedTransform: u
                        })
                    })
                });
                const d = u.mapping;
                u.steps.forEach((f, h) => {
                    var p, m;
                    if (f instanceof yt) {
                        const g = d.slice(h).map(f.from, -1),
                            y = d.slice(h).map(f.to),
                            b = d.invert().map(g, -1),
                            w = d.invert().map(y),
                            x = (p = u.doc.nodeAt(g - 1)) == null ? void 0 : p.marks.some(N => N.eq(f.mark)),
                            T = (m = u.doc.nodeAt(y)) == null ? void 0 : m.marks.some(N => N.eq(f.mark));
                        this.editor.emit("delete", {
                            type: "mark",
                            mark: f.mark,
                            from: f.from,
                            to: f.to,
                            deletedRange: {
                                from: b,
                                to: w
                            },
                            newRange: {
                                from: g,
                                to: y
                            },
                            partial: !!(T || x),
                            editor: this.editor,
                            transaction: t,
                            combinedTransform: u
                        })
                    }
                })
            };
            (i = (r = (n = this.editor.options.coreExtensionOptions) == null ? void 0 : n.delete) == null ? void 0 : r.async) == null || i ? setTimeout(s, 0) : s()
        }
    }),
    ha = j.create({
        name: "drop",
        addProseMirrorPlugins() {
            return [new F({
                key: new Q("tiptapDrop"),
                props: {
                    handleDrop: (t, e, n, r) => {
                        this.editor.emit("drop", {
                            editor: this.editor,
                            event: e,
                            slice: n,
                            moved: r
                        })
                    }
                }
            })]
        }
    }),
    pa = j.create({
        name: "editable",
        addProseMirrorPlugins() {
            return [new F({
                key: new Q("editable"),
                props: {
                    editable: () => this.editor.options.editable
                }
            })]
        }
    }),
    ma = new Q("focusEvents"),
    ga = j.create({
        name: "focusEvents",
        addProseMirrorPlugins() {
            const {
                editor: t
            } = this;
            return [new F({
                key: ma,
                props: {
                    handleDOMEvents: {
                        focus: (e, n) => {
                            t.isFocused = !0;
                            const r = t.state.tr.setMeta("focus", {
                                event: n
                            }).setMeta("addToHistory", !1);
                            return e.dispatch(r), !1
                        },
                        blur: (e, n) => {
                            t.isFocused = !1;
                            const r = t.state.tr.setMeta("blur", {
                                event: n
                            }).setMeta("addToHistory", !1);
                            return e.dispatch(r), !1
                        }
                    }
                }
            })]
        }
    }),
    ya = j.create({
        name: "keymap",
        addKeyboardShortcuts() {
            const t = () => this.editor.commands.first(({
                    commands: o
                }) => [() => o.undoInputRule(), () => o.command(({
                    tr: l
                }) => {
                    const {
                        selection: a,
                        doc: c
                    } = l, {
                        empty: u,
                        $anchor: d
                    } = a, {
                        pos: f,
                        parent: h
                    } = d, p = d.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : d, m = p.parent.type.spec.isolating, g = d.pos - d.parentOffset, y = m && p.parent.childCount === 1 ? g === d.pos : D.atStart(c).from === f;
                    return !u || !h.type.isTextblock || h.textContent.length || !y || y && d.parent.type.name === "paragraph" ? !1 : o.clearNodes()
                }), () => o.deleteSelection(), () => o.joinBackward(), () => o.selectNodeBackward()]),
                e = () => this.editor.commands.first(({
                    commands: o
                }) => [() => o.deleteSelection(), () => o.deleteCurrentNode(), () => o.joinForward(), () => o.selectNodeForward()]),
                r = {
                    Enter: () => this.editor.commands.first(({
                        commands: o
                    }) => [() => o.newlineInCode(), () => o.createParagraphNear(), () => o.liftEmptyBlock(), () => o.splitBlock()]),
                    "Mod-Enter": () => this.editor.commands.exitCode(),
                    Backspace: t,
                    "Mod-Backspace": t,
                    "Shift-Backspace": t,
                    Delete: e,
                    "Mod-Delete": e,
                    "Mod-a": () => this.editor.commands.selectAll()
                },
                i = { ...r
                },
                s = { ...r,
                    "Ctrl-h": t,
                    "Alt-Backspace": t,
                    "Ctrl-d": e,
                    "Ctrl-Alt-Backspace": e,
                    "Alt-Delete": e,
                    "Alt-d": e,
                    "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
                    "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
                };
            return Jt() || Yl() ? s : i
        },
        addProseMirrorPlugins() {
            return [new F({
                key: new Q("clearDocument"),
                appendTransaction: (t, e, n) => {
                    if (t.some(h => h.getMeta("composition"))) return;
                    const r = t.some(h => h.docChanged) && !e.doc.eq(n.doc),
                        i = t.some(h => h.getMeta("preventClearDocument"));
                    if (!r || i) return;
                    const {
                        empty: s,
                        from: o,
                        to: l
                    } = e.selection, a = D.atStart(e.doc).from, c = D.atEnd(e.doc).to;
                    if (s || !(o === a && l === c) || !tn(n.doc)) return;
                    const u = n.tr,
                        d = Fn({
                            state: n,
                            transaction: u
                        }),
                        {
                            commands: f
                        } = new Ln({
                            editor: this.editor,
                            state: d
                        });
                    if (f.clearNodes(), !!u.steps.length) return u
                }
            })]
        }
    }),
    ba = j.create({
        name: "paste",
        addProseMirrorPlugins() {
            return [new F({
                key: new Q("tiptapPaste"),
                props: {
                    handlePaste: (t, e, n) => {
                        this.editor.emit("paste", {
                            editor: this.editor,
                            event: e,
                            slice: n
                        })
                    }
                }
            })]
        }
    }),
    va = j.create({
        name: "tabindex",
        addProseMirrorPlugins() {
            return [new F({
                key: new Q("tabindex"),
                props: {
                    attributes: () => this.editor.isEditable ? {
                        tabindex: "0"
                    } : {}
                }
            })]
        }
    }),
    Sa = j.create({
        name: "textDirection",
        addOptions() {
            return {
                direction: void 0
            }
        },
        addGlobalAttributes() {
            if (!this.options.direction) return [];
            const {
                nodeExtensions: t
            } = gt(this.extensions);
            return [{
                types: t.filter(e => e.name !== "text").map(e => e.name),
                attributes: {
                    dir: {
                        default: this.options.direction,
                        parseHTML: e => {
                            const n = e.getAttribute("dir");
                            return n && (n === "ltr" || n === "rtl" || n === "auto") ? n : this.options.direction
                        },
                        renderHTML: e => e.dir ? {
                            dir: e.dir
                        } : {}
                    }
                }
            }]
        },
        addProseMirrorPlugins() {
            return [new F({
                key: new Q("textDirection"),
                props: {
                    attributes: () => {
                        const t = this.options.direction;
                        return t ? {
                            dir: t
                        } : {}
                    }
                }
            })]
        }
    }),
    Wh = class zt {
        constructor(e, n, r = !1, i = null) {
            this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = n, this.currentNode = i
        }
        get name() {
            return this.node.type.name
        }
        get node() {
            return this.currentNode || this.resolvedPos.node()
        }
        get element() {
            return this.editor.view.domAtPos(this.pos).node
        }
        get depth() {
            var e;
            return (e = this.actualDepth) != null ? e : this.resolvedPos.depth
        }
        get pos() {
            return this.resolvedPos.pos
        }
        get content() {
            return this.node.content
        }
        set content(e) {
            let n = this.from,
                r = this.to;
            if (this.isBlock) {
                if (this.content.size === 0) {
                    console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
                    return
                }
                n = this.from + 1, r = this.to - 1
            }
            this.editor.commands.insertContentAt({
                from: n,
                to: r
            }, e)
        }
        get attributes() {
            return this.node.attrs
        }
        get textContent() {
            return this.node.textContent
        }
        get size() {
            return this.node.nodeSize
        }
        get from() {
            return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth)
        }
        get range() {
            return {
                from: this.from,
                to: this.to
            }
        }
        get to() {
            return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1)
        }
        get parent() {
            if (this.depth === 0) return null;
            const e = this.resolvedPos.start(this.resolvedPos.depth - 1),
                n = this.resolvedPos.doc.resolve(e);
            return new zt(n, this.editor)
        }
        get before() {
            let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
            return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new zt(e, this.editor)
        }
        get after() {
            let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
            return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new zt(e, this.editor)
        }
        get children() {
            const e = [];
            return this.node.content.forEach((n, r) => {
                const i = n.isBlock && !n.isTextblock,
                    s = n.isAtom && !n.isText,
                    o = n.isInline,
                    l = this.pos + r + (s ? 0 : 1);
                if (l < 0 || l > this.resolvedPos.doc.nodeSize - 2) return;
                const a = this.resolvedPos.doc.resolve(l);
                if (!i && !o && a.depth <= this.depth) return;
                const c = new zt(a, this.editor, i, i || o ? n : null);
                i && (c.actualDepth = this.depth + 1), e.push(c)
            }), e
        }
        get firstChild() {
            return this.children[0] || null
        }
        get lastChild() {
            const e = this.children;
            return e[e.length - 1] || null
        }
        closest(e, n = {}) {
            let r = null,
                i = this.parent;
            for (; i && !r;) {
                if (i.node.type.name === e)
                    if (Object.keys(n).length > 0) {
                        const s = i.node.attrs,
                            o = Object.keys(n);
                        for (let l = 0; l < o.length; l += 1) {
                            const a = o[l];
                            if (s[a] !== n[a]) break
                        }
                    } else r = i;
                i = i.parent
            }
            return r
        }
        querySelector(e, n = {}) {
            return this.querySelectorAll(e, n, !0)[0] || null
        }
        querySelectorAll(e, n = {}, r = !1) {
            let i = [];
            if (!this.children || this.children.length === 0) return i;
            const s = Object.keys(n);
            return this.children.forEach(o => {
                r && i.length > 0 || (o.node.type.name === e && s.every(l => n[l] === o.node.attrs[l]) && i.push(o), !(r && i.length > 0) && (i = i.concat(o.querySelectorAll(e, n, r))))
            }), i
        }
        setAttribute(e) {
            const {
                tr: n
            } = this.editor.state;
            n.setNodeMarkup(this.from, void 0, { ...this.node.attrs,
                ...e
            }), this.editor.view.dispatch(n)
        }
    },
    jh = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}`;

function Hh(t, e, n) {
    const r = document.querySelector(`style[data-tiptap-style${n?`-${n}`:""}]`);
    if (r !== null) return r;
    const i = document.createElement("style");
    return e && i.setAttribute("nonce", e), i.setAttribute(`data-tiptap-style${n?`-${n}`:""}`, ""), i.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(i), i
}
var Jh = class extends Ah {
    constructor(t = {}) {
        super(), this.css = null, this.className = "tiptap", this.editorView = null, this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.instanceId = Math.random().toString(36).slice(2, 9), this.options = {
            element: typeof document < "u" ? document.createElement("div") : null,
            content: "",
            injectCSS: !0,
            injectNonce: void 0,
            extensions: [],
            autofocus: !1,
            editable: !0,
            textDirection: void 0,
            editorProps: {},
            parseOptions: {},
            coreExtensionOptions: {},
            enableInputRules: !0,
            enablePasteRules: !0,
            enableCoreExtensions: !0,
            enableContentCheck: !1,
            emitContentError: !1,
            onBeforeCreate: () => null,
            onCreate: () => null,
            onMount: () => null,
            onUnmount: () => null,
            onUpdate: () => null,
            onSelectionUpdate: () => null,
            onTransaction: () => null,
            onFocus: () => null,
            onBlur: () => null,
            onDestroy: () => null,
            onContentError: ({
                error: r
            }) => {
                throw r
            },
            onPaste: () => null,
            onDrop: () => null,
            onDelete: () => null,
            enableExtensionDispatchTransaction: !0
        }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.utils = {
            getUpdatedPosition: ah,
            createMappablePosition: ch
        }, this.setOptions(t), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", {
            editor: this
        }), this.on("mount", this.options.onMount), this.on("unmount", this.options.onUnmount), this.on("contentError", this.options.onContentError), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({
            event: r,
            slice: i,
            moved: s
        }) => this.options.onDrop(r, i, s)), this.on("paste", ({
            event: r,
            slice: i
        }) => this.options.onPaste(r, i)), this.on("delete", this.options.onDelete);
        const e = this.createDoc(),
            n = Ul(e, this.options.autofocus);
        this.editorState = Uc.create({
            doc: e,
            schema: this.schema,
            selection: n || void 0
        }), this.options.element && this.mount(this.options.element)
    }
    mount(t) {
        if (typeof document > "u") throw new Error("[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.");
        this.createView(t), this.emit("mount", {
            editor: this
        }), this.css && !document.head.contains(this.css) && document.head.appendChild(this.css), window.setTimeout(() => {
            this.isDestroyed || (this.options.autofocus !== !1 && this.options.autofocus !== null && this.commands.focus(this.options.autofocus), this.emit("create", {
                editor: this
            }), this.isInitialized = !0)
        }, 0)
    }
    unmount() {
        if (this.editorView) {
            const t = this.editorView.dom;
            t ? .editor && delete t.editor, this.editorView.destroy()
        }
        if (this.editorView = null, this.isInitialized = !1, this.css && !document.querySelectorAll(`.${this.className}`).length) try {
            typeof this.css.remove == "function" ? this.css.remove() : this.css.parentNode && this.css.parentNode.removeChild(this.css)
        } catch (t) {
            console.warn("Failed to remove CSS element:", t)
        }
        this.css = null, this.emit("unmount", {
            editor: this
        })
    }
    get storage() {
        return this.extensionStorage
    }
    get commands() {
        return this.commandManager.commands
    }
    chain() {
        return this.commandManager.chain()
    }
    can() {
        return this.commandManager.can()
    }
    injectCSS() {
        this.options.injectCSS && typeof document < "u" && (this.css = Hh(jh, this.options.injectNonce))
    }
    setOptions(t = {}) {
        this.options = { ...this.options,
            ...t
        }, !(!this.editorView || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state))
    }
    setEditable(t, e = !0) {
        this.setOptions({
            editable: t
        }), e && this.emit("update", {
            editor: this,
            transaction: this.state.tr,
            appendedTransactions: []
        })
    }
    get isEditable() {
        return this.options.editable && this.view && this.view.editable
    }
    get view() {
        return this.editorView ? this.editorView : new Proxy({
            state: this.editorState,
            updateState: t => {
                this.editorState = t
            },
            dispatch: t => {
                this.dispatchTransaction(t)
            },
            composing: !1,
            dragging: null,
            editable: !0,
            isDestroyed: !1
        }, {
            get: (t, e) => {
                if (this.editorView) return this.editorView[e];
                if (e === "state") return this.editorState;
                if (e in t) return Reflect.get(t, e);
                throw new Error(`[tiptap error]: The editor view is not available. Cannot access view['${e}']. The editor may not be mounted yet.`)
            }
        })
    }
    get state() {
        return this.editorView && (this.editorState = this.view.state), this.editorState
    }
    registerPlugin(t, e) {
        const n = Zl(e) ? e(t, [...this.state.plugins]) : [...this.state.plugins, t],
            r = this.state.reconfigure({
                plugins: n
            });
        return this.view.updateState(r), r
    }
    unregisterPlugin(t) {
        if (this.isDestroyed) return;
        const e = this.state.plugins;
        let n = e;
        if ([].concat(t).forEach(i => {
                const s = typeof i == "string" ? `${i}$` : i.key;
                n = n.filter(o => !o.key.startsWith(s))
            }), e.length === n.length) return;
        const r = this.state.reconfigure({
            plugins: n
        });
        return this.view.updateState(r), r
    }
    createExtensionManager() {
        var t, e;
        const n = [...this.options.enableCoreExtensions ? [pa, ua.configure({
            blockSeparator: (e = (t = this.options.coreExtensionOptions) == null ? void 0 : t.clipboardTextSerializer) == null ? void 0 : e.blockSeparator
        }), da, ga, ya, va, ha, ba, fa, Sa.configure({
            direction: this.options.textDirection
        })].filter(r => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[r.name] !== !1 : !0) : [], ...this.options.extensions].filter(r => ["extension", "node", "mark"].includes(r ? .type));
        this.extensionManager = new Jn(n, this)
    }
    createCommandManager() {
        this.commandManager = new Ln({
            editor: this
        })
    }
    createSchema() {
        this.schema = this.extensionManager.schema
    }
    createDoc() {
        let t;
        try {
            t = Fr(this.options.content, this.schema, this.options.parseOptions, {
                errorOnInvalidContent: this.options.enableContentCheck
            })
        } catch (e) {
            if (!(e instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(e.message)) throw e;
            this.emit("contentError", {
                editor: this,
                error: e,
                disableCollaboration: () => {
                    "collaboration" in this.storage && typeof this.storage.collaboration == "object" && this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter(n => n.name !== "collaboration"), this.createExtensionManager()
                }
            }), t = Fr(this.options.content, this.schema, this.options.parseOptions, {
                errorOnInvalidContent: !1
            })
        }
        return t
    }
    createView(t) {
        const {
            editorProps: e,
            enableExtensionDispatchTransaction: n
        } = this.options, r = e.dispatchTransaction || this.dispatchTransaction.bind(this), i = n ? this.extensionManager.dispatchTransaction(r) : r;
        this.editorView = new Wl(t, { ...e,
            attributes: {
                role: "textbox",
                ...e ? .attributes
            },
            dispatchTransaction: i,
            state: this.editorState,
            markViews: this.extensionManager.markViews,
            nodeViews: this.extensionManager.nodeViews
        });
        const s = this.state.reconfigure({
            plugins: this.extensionManager.plugins
        });
        this.view.updateState(s), this.prependClass(), this.injectCSS();
        const o = this.view.dom;
        o.editor = this
    }
    createNodeViews() {
        this.view.isDestroyed || this.view.setProps({
            markViews: this.extensionManager.markViews,
            nodeViews: this.extensionManager.nodeViews
        })
    }
    prependClass() {
        this.view.dom.className = `${this.className} ${this.view.dom.className}`
    }
    captureTransaction(t) {
        this.isCapturingTransaction = !0, t(), this.isCapturingTransaction = !1;
        const e = this.capturedTransaction;
        return this.capturedTransaction = null, e
    }
    dispatchTransaction(t) {
        if (this.view.isDestroyed) return;
        if (this.isCapturingTransaction) {
            if (!this.capturedTransaction) {
                this.capturedTransaction = t;
                return
            }
            t.steps.forEach(c => {
                var u;
                return (u = this.capturedTransaction) == null ? void 0 : u.step(c)
            });
            return
        }
        const {
            state: e,
            transactions: n
        } = this.state.applyTransaction(t), r = !this.state.selection.eq(e.selection), i = n.includes(t), s = this.state;
        if (this.emit("beforeTransaction", {
                editor: this,
                transaction: t,
                nextState: e
            }), !i) return;
        this.view.updateState(e), this.emit("transaction", {
            editor: this,
            transaction: t,
            appendedTransactions: n.slice(1)
        }), r && this.emit("selectionUpdate", {
            editor: this,
            transaction: t
        });
        const o = n.findLast(c => c.getMeta("focus") || c.getMeta("blur")),
            l = o ? .getMeta("focus"),
            a = o ? .getMeta("blur");
        l && this.emit("focus", {
            editor: this,
            event: l.event,
            transaction: o
        }), a && this.emit("blur", {
            editor: this,
            event: a.event,
            transaction: o
        }), !(t.getMeta("preventUpdate") || !n.some(c => c.docChanged) || s.doc.eq(e.doc)) && this.emit("update", {
            editor: this,
            transaction: t,
            appendedTransactions: n.slice(1)
        })
    }
    getAttributes(t) {
        return nh(this.state, t)
    }
    isActive(t, e) {
        const n = typeof t == "string" ? t : null,
            r = typeof t == "string" ? e : t;
        return oh(this.state, n, r)
    }
    getJSON() {
        return this.state.doc.toJSON()
    }
    getHTML() {
        return Wn(this.state.doc.content, this.schema)
    }
    getText(t) {
        const {
            blockSeparator: e = `

`,
            textSerializers: n = {}
        } = t || {};
        return na(this.state.doc, {
            blockSeparator: e,
            textSerializers: { ...pi(this.schema),
                ...n
            }
        })
    }
    get isEmpty() {
        return tn(this.state.doc)
    }
    destroy() {
        this.emit("destroy"), this.unmount(), this.removeAllListeners()
    }
    get isDestroyed() {
        var t, e;
        return (e = (t = this.editorView) == null ? void 0 : t.isDestroyed) != null ? e : !0
    }
    $node(t, e) {
        var n;
        return ((n = this.$doc) == null ? void 0 : n.querySelector(t, e)) || null
    }
    $nodes(t, e) {
        var n;
        return ((n = this.$doc) == null ? void 0 : n.querySelectorAll(t, e)) || null
    }
    $pos(t) {
        return new Wh(this.state.doc.resolve(t), this)
    }
    get $doc() {
        return this.$pos(0)
    }
};

function ig(t) {
    return new Hn({
        find: t.find,
        handler: ({
            state: e,
            range: n,
            match: r
        }) => {
            const i = P(t.getAttributes, void 0, r);
            if (i === !1 || i === null) return null;
            const {
                tr: s
            } = e, o = r[r.length - 1], l = r[0];
            if (o) {
                const a = l.search(/\S/),
                    c = n.from + l.indexOf(o),
                    u = c + o.length;
                if (ia(n.from, n.to, e.doc).filter(f => f.mark.type.excluded.find(h => h === t.type && h !== f.mark.type)).filter(f => f.to > c).length) return null;
                u < n.to && s.delete(u, n.to), c > n.from && s.delete(n.from + a, c);
                const d = n.from + a + o.length;
                s.addMark(n.from + a, d, t.type.create(i || {})), s.removeStoredMark(t.type)
            }
        },
        undoable: t.undoable
    })
}

function sg(t) {
    return new Hn({
        find: t.find,
        handler: ({
            state: e,
            range: n,
            match: r
        }) => {
            const i = P(t.getAttributes, void 0, r) || {},
                {
                    tr: s
                } = e,
                o = n.from;
            let l = n.to;
            const a = t.type.create(i);
            if (r[1]) {
                let c = o + r[0].lastIndexOf(r[1]);
                c > l ? c = l : l = c + r[1].length;
                const u = r[0][r[0].length - 1];
                s.insertText(u, o + r[0].length - 1), s.replaceWith(c, l, a)
            } else if (r[0]) {
                const c = t.type.isInline ? o : o - 1;
                s.insert(c, t.type.create(i)).delete(s.mapping.map(o), s.mapping.map(l))
            }
            s.scrollIntoView()
        },
        undoable: t.undoable
    })
}

function og(t) {
    return new Hn({
        find: t.find,
        handler: ({
            state: e,
            range: n,
            match: r
        }) => {
            const i = e.doc.resolve(n.from),
                s = P(t.getAttributes, void 0, r) || {};
            if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), t.type)) return null;
            e.tr.delete(n.from, n.to).setBlockType(n.from, n.from, t.type, s)
        },
        undoable: t.undoable
    })
}

function Kh(t) {
    return new Hn({
        find: t.find,
        handler: ({
            state: e,
            range: n,
            match: r,
            chain: i
        }) => {
            const s = P(t.getAttributes, void 0, r) || {},
                o = e.tr.delete(n.from, n.to),
                l = o.doc.resolve(n.from).blockRange(),
                a = l && Ur(l, t.type, s);
            if (!a) return null;
            if (o.wrap(l, a), t.keepMarks && t.editor) {
                const {
                    selection: u,
                    storedMarks: d
                } = e, {
                    splittableMarks: f
                } = t.editor.extensionManager, h = d || u.$to.parentOffset && u.$from.marks();
                if (h) {
                    const p = h.filter(m => f.includes(m.type.name));
                    o.ensureMarks(p)
                }
            }
            if (t.keepAttributes) {
                const u = t.type.name === "bulletList" || t.type.name === "orderedList" ? "listItem" : "taskList";
                i().updateAttributes(u, s).run()
            }
            const c = o.doc.resolve(n.from - 1).nodeBefore;
            c && c.type === t.type && Ve(o.doc, n.from - 1) && (!t.joinPredicate || t.joinPredicate(r, c)) && o.join(n.from - 1)
        },
        undoable: t.undoable
    })
}
var Uh = t => "touches" in t,
    lg = class {
        constructor(t) {
            this.directions = ["bottom-left", "bottom-right", "top-left", "top-right"], this.minSize = {
                height: 8,
                width: 8
            }, this.preserveAspectRatio = !1, this.classNames = {
                container: "",
                wrapper: "",
                handle: "",
                resizing: ""
            }, this.initialWidth = 0, this.initialHeight = 0, this.aspectRatio = 1, this.isResizing = !1, this.activeHandle = null, this.startX = 0, this.startY = 0, this.startWidth = 0, this.startHeight = 0, this.isShiftKeyPressed = !1, this.lastEditableState = void 0, this.handleMap = new Map, this.handleMouseMove = l => {
                if (!this.isResizing || !this.activeHandle) return;
                const a = l.clientX - this.startX,
                    c = l.clientY - this.startY;
                this.handleResize(a, c)
            }, this.handleTouchMove = l => {
                if (!this.isResizing || !this.activeHandle) return;
                const a = l.touches[0];
                if (!a) return;
                const c = a.clientX - this.startX,
                    u = a.clientY - this.startY;
                this.handleResize(c, u)
            }, this.handleMouseUp = () => {
                if (!this.isResizing) return;
                const l = this.element.offsetWidth,
                    a = this.element.offsetHeight;
                this.onCommit(l, a), this.isResizing = !1, this.activeHandle = null, this.container.dataset.resizeState = "false", this.classNames.resizing && this.container.classList.remove(this.classNames.resizing), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp)
            }, this.handleKeyDown = l => {
                l.key === "Shift" && (this.isShiftKeyPressed = !0)
            }, this.handleKeyUp = l => {
                l.key === "Shift" && (this.isShiftKeyPressed = !1)
            };
            var e, n, r, i, s, o;
            this.node = t.node, this.editor = t.editor, this.element = t.element, this.contentElement = t.contentElement, this.getPos = t.getPos, this.onResize = t.onResize, this.onCommit = t.onCommit, this.onUpdate = t.onUpdate, (e = t.options) != null && e.min && (this.minSize = { ...this.minSize,
                ...t.options.min
            }), (n = t.options) != null && n.max && (this.maxSize = t.options.max), (r = t ? .options) != null && r.directions && (this.directions = t.options.directions), (i = t.options) != null && i.preserveAspectRatio && (this.preserveAspectRatio = t.options.preserveAspectRatio), (s = t.options) != null && s.className && (this.classNames = {
                container: t.options.className.container || "",
                wrapper: t.options.className.wrapper || "",
                handle: t.options.className.handle || "",
                resizing: t.options.className.resizing || ""
            }), (o = t.options) != null && o.createCustomHandle && (this.createCustomHandle = t.options.createCustomHandle), this.wrapper = this.createWrapper(), this.container = this.createContainer(), this.applyInitialSize(), this.attachHandles(), this.editor.on("update", this.handleEditorUpdate.bind(this))
        }
        get dom() {
            return this.container
        }
        get contentDOM() {
            var t;
            return (t = this.contentElement) != null ? t : null
        }
        handleEditorUpdate() {
            const t = this.editor.isEditable;
            t !== this.lastEditableState && (this.lastEditableState = t, t ? t && this.handleMap.size === 0 && this.attachHandles() : this.removeHandles())
        }
        update(t, e, n) {
            return t.type !== this.node.type ? !1 : (this.node = t, this.onUpdate ? this.onUpdate(t, e, n) : !0)
        }
        destroy() {
            this.isResizing && (this.container.dataset.resizeState = "false", this.classNames.resizing && this.container.classList.remove(this.classNames.resizing), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp), this.isResizing = !1, this.activeHandle = null), this.editor.off("update", this.handleEditorUpdate.bind(this)), this.container.remove()
        }
        createContainer() {
            const t = document.createElement("div");
            return t.dataset.resizeContainer = "", t.dataset.node = this.node.type.name, t.style.display = "flex", this.classNames.container && (t.className = this.classNames.container), t.appendChild(this.wrapper), t
        }
        createWrapper() {
            const t = document.createElement("div");
            return t.style.position = "relative", t.style.display = "block", t.dataset.resizeWrapper = "", this.classNames.wrapper && (t.className = this.classNames.wrapper), t.appendChild(this.element), t
        }
        createHandle(t) {
            const e = document.createElement("div");
            return e.dataset.resizeHandle = t, e.style.position = "absolute", this.classNames.handle && (e.className = this.classNames.handle), e
        }
        positionHandle(t, e) {
            const n = e.includes("top"),
                r = e.includes("bottom"),
                i = e.includes("left"),
                s = e.includes("right");
            n && (t.style.top = "0"), r && (t.style.bottom = "0"), i && (t.style.left = "0"), s && (t.style.right = "0"), (e === "top" || e === "bottom") && (t.style.left = "0", t.style.right = "0"), (e === "left" || e === "right") && (t.style.top = "0", t.style.bottom = "0")
        }
        attachHandles() {
            this.directions.forEach(t => {
                let e;
                this.createCustomHandle ? e = this.createCustomHandle(t) : e = this.createHandle(t), e instanceof HTMLElement || (console.warn(`[ResizableNodeView] createCustomHandle("${t}") did not return an HTMLElement. Falling back to default handle.`), e = this.createHandle(t)), this.createCustomHandle || this.positionHandle(e, t), e.addEventListener("mousedown", n => this.handleResizeStart(n, t)), e.addEventListener("touchstart", n => this.handleResizeStart(n, t)), this.handleMap.set(t, e), this.wrapper.appendChild(e)
            })
        }
        removeHandles() {
            this.handleMap.forEach(t => t.remove()), this.handleMap.clear()
        }
        applyInitialSize() {
            const t = this.node.attrs.width,
                e = this.node.attrs.height;
            t ? (this.element.style.width = `${t}px`, this.initialWidth = t) : this.initialWidth = this.element.offsetWidth, e ? (this.element.style.height = `${e}px`, this.initialHeight = e) : this.initialHeight = this.element.offsetHeight, this.initialWidth > 0 && this.initialHeight > 0 && (this.aspectRatio = this.initialWidth / this.initialHeight)
        }
        handleResizeStart(t, e) {
            t.preventDefault(), t.stopPropagation(), this.isResizing = !0, this.activeHandle = e, Uh(t) ? (this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY) : (this.startX = t.clientX, this.startY = t.clientY), this.startWidth = this.element.offsetWidth, this.startHeight = this.element.offsetHeight, this.startWidth > 0 && this.startHeight > 0 && (this.aspectRatio = this.startWidth / this.startHeight), this.getPos(), this.container.dataset.resizeState = "true", this.classNames.resizing && this.container.classList.add(this.classNames.resizing), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp)
        }
        handleResize(t, e) {
            if (!this.activeHandle) return;
            const n = this.preserveAspectRatio || this.isShiftKeyPressed,
                {
                    width: r,
                    height: i
                } = this.calculateNewDimensions(this.activeHandle, t, e),
                s = this.applyConstraints(r, i, n);
            this.element.style.width = `${s.width}px`, this.element.style.height = `${s.height}px`, this.onResize && this.onResize(s.width, s.height)
        }
        calculateNewDimensions(t, e, n) {
            let r = this.startWidth,
                i = this.startHeight;
            const s = t.includes("right"),
                o = t.includes("left"),
                l = t.includes("bottom"),
                a = t.includes("top");
            return s ? r = this.startWidth + e : o && (r = this.startWidth - e), l ? i = this.startHeight + n : a && (i = this.startHeight - n), (t === "right" || t === "left") && (r = this.startWidth + (s ? e : -e)), (t === "top" || t === "bottom") && (i = this.startHeight + (l ? n : -n)), this.preserveAspectRatio || this.isShiftKeyPressed ? this.applyAspectRatio(r, i, t) : {
                width: r,
                height: i
            }
        }
        applyConstraints(t, e, n) {
            var r, i, s, o;
            if (!n) {
                let c = Math.max(this.minSize.width, t),
                    u = Math.max(this.minSize.height, e);
                return (r = this.maxSize) != null && r.width && (c = Math.min(this.maxSize.width, c)), (i = this.maxSize) != null && i.height && (u = Math.min(this.maxSize.height, u)), {
                    width: c,
                    height: u
                }
            }
            let l = t,
                a = e;
            return l < this.minSize.width && (l = this.minSize.width, a = l / this.aspectRatio), a < this.minSize.height && (a = this.minSize.height, l = a * this.aspectRatio), (s = this.maxSize) != null && s.width && l > this.maxSize.width && (l = this.maxSize.width, a = l / this.aspectRatio), (o = this.maxSize) != null && o.height && a > this.maxSize.height && (a = this.maxSize.height, l = a * this.aspectRatio), {
                width: l,
                height: a
            }
        }
        applyAspectRatio(t, e, n) {
            const r = n === "left" || n === "right",
                i = n === "top" || n === "bottom";
            return r ? {
                width: t,
                height: t / this.aspectRatio
            } : i ? {
                width: e * this.aspectRatio,
                height: e
            } : {
                width: t,
                height: t / this.aspectRatio
            }
        }
    };

function ag(t, e) {
    const {
        selection: n
    } = t, {
        $from: r
    } = n;
    if (n instanceof E) {
        const s = r.index();
        return r.parent.canReplaceWith(s, s + 1, e)
    }
    let i = r.depth;
    for (; i >= 0;) {
        const s = r.index(i);
        if (r.node(i).contentMatchAt(s).matchType(e)) return !0;
        i -= 1
    }
    return !1
}

function Gh(t) {
    return t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
}
var Yh = {};
ai(Yh, {
    createAtomBlockMarkdownSpec: () => Xh,
    createBlockMarkdownSpec: () => Zh,
    createInlineMarkdownSpec: () => tp,
    parseAttributes: () => gi,
    parseIndentedBlocks: () => np,
    renderNestedMarkdownContent: () => rp,
    serializeAttributes: () => yi
});

function gi(t) {
    if (!t ? .trim()) return {};
    const e = {},
        n = [],
        r = t.replace(/["']([^"']*)["']/g, l => (n.push(l), `__QUOTED_${n.length-1}__`)),
        i = r.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
    i && (e.class = i.map(l => l.trim().slice(1)).join(" "));
    const s = r.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);
    s && (e.id = s[1]), Array.from(r.matchAll(/([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g)).forEach(([, l, a]) => {
        var c;
        const u = parseInt(((c = a.match(/__QUOTED_(\d+)__/)) == null ? void 0 : c[1]) || "0", 10),
            d = n[u];
        d && (e[l] = d.slice(1, -1))
    });
    const o = r.replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g, "").replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g, "").replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "").trim();
    return o && o.split(/\s+/).filter(Boolean).forEach(l => {
        l.match(/^[a-zA-Z][\w-]*$/) && (e[l] = !0)
    }), e
}

function yi(t) {
    if (!t || Object.keys(t).length === 0) return "";
    const e = [];
    return t.class && String(t.class).split(/\s+/).filter(Boolean).forEach(n => e.push(`.${n}`)), t.id && e.push(`#${t.id}`), Object.entries(t).forEach(([n, r]) => {
        n === "class" || n === "id" || (r === !0 ? e.push(n) : r !== !1 && r != null && e.push(`${n}="${String(r)}"`))
    }), e.join(" ")
}

function Xh(t) {
    const {
        nodeName: e,
        name: n,
        parseAttributes: r = gi,
        serializeAttributes: i = yi,
        defaultAttributes: s = {},
        requiredAttributes: o = [],
        allowedAttributes: l
    } = t, a = n || e, c = u => {
        if (!l) return u;
        const d = {};
        return l.forEach(f => {
            f in u && (d[f] = u[f])
        }), d
    };
    return {
        parseMarkdown: (u, d) => {
            const f = { ...s,
                ...u.attributes
            };
            return d.createNode(e, f, [])
        },
        markdownTokenizer: {
            name: e,
            level: "block",
            start(u) {
                var d;
                const f = new RegExp(`^:::${a}(?:\\s|$)`, "m"),
                    h = (d = u.match(f)) == null ? void 0 : d.index;
                return h !== void 0 ? h : -1
            },
            tokenize(u, d, f) {
                const h = new RegExp(`^:::${a}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`),
                    p = u.match(h);
                if (!p) return;
                const m = p[1] || "",
                    g = r(m);
                if (!o.find(y => !(y in g))) return {
                    type: e,
                    raw: p[0],
                    attributes: g
                }
            }
        },
        renderMarkdown: u => {
            const d = c(u.attrs || {}),
                f = i(d),
                h = f ? ` {${f}}` : "";
            return `:::${a}${h} :::`
        }
    }
}

function Zh(t) {
    const {
        nodeName: e,
        name: n,
        getContent: r,
        parseAttributes: i = gi,
        serializeAttributes: s = yi,
        defaultAttributes: o = {},
        content: l = "block",
        allowedAttributes: a
    } = t, c = n || e, u = d => {
        if (!a) return d;
        const f = {};
        return a.forEach(h => {
            h in d && (f[h] = d[h])
        }), f
    };
    return {
        parseMarkdown: (d, f) => {
            let h;
            if (r) {
                const m = r(d);
                h = typeof m == "string" ? [{
                    type: "text",
                    text: m
                }] : m
            } else l === "block" ? h = f.parseChildren(d.tokens || []) : h = f.parseInline(d.tokens || []);
            const p = { ...o,
                ...d.attributes
            };
            return f.createNode(e, p, h)
        },
        markdownTokenizer: {
            name: e,
            level: "block",
            start(d) {
                var f;
                const h = new RegExp(`^:::${c}`, "m"),
                    p = (f = d.match(h)) == null ? void 0 : f.index;
                return p !== void 0 ? p : -1
            },
            tokenize(d, f, h) {
                var p;
                const m = new RegExp(`^:::${c}(?:\\s+\\{([^}]*)\\})?\\s*\\n`),
                    g = d.match(m);
                if (!g) return;
                const [y, b = ""] = g, w = i(b);
                let x = 1;
                const T = y.length;
                let N = "";
                const S = /^:::([\w-]*)(\s.*)?/gm,
                    M = d.slice(T);
                for (S.lastIndex = 0;;) {
                    const O = S.exec(M);
                    if (O === null) break;
                    const V = O.index,
                        I = O[1];
                    if (!((p = O[2]) != null && p.endsWith(":::"))) {
                        if (I) x += 1;
                        else if (x -= 1, x === 0) {
                            const G = M.slice(0, V);
                            N = G.trim();
                            const ie = d.slice(0, T + V + O[0].length);
                            let H = [];
                            if (N)
                                if (l === "block")
                                    for (H = h.blockTokens(G), H.forEach($ => {
                                            $.text && (!$.tokens || $.tokens.length === 0) && ($.tokens = h.inlineTokens($.text))
                                        }); H.length > 0;) {
                                        const $ = H[H.length - 1];
                                        if ($.type === "paragraph" && (!$.text || $.text.trim() === "")) H.pop();
                                        else break
                                    } else H = h.inlineTokens(N);
                            return {
                                type: e,
                                raw: ie,
                                attributes: w,
                                content: N,
                                tokens: H
                            }
                        }
                    }
                }
            }
        },
        renderMarkdown: (d, f) => {
            const h = u(d.attrs || {}),
                p = s(h),
                m = p ? ` {${p}}` : "",
                g = f.renderChildren(d.content || [], `

`);
            return `:::${c}${m}

${g}

:::`
        }
    }
}

function Qh(t) {
    if (!t.trim()) return {};
    const e = {},
        n = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
    let r = n.exec(t);
    for (; r !== null;) {
        const [, i, s, o] = r;
        e[i] = s || o, r = n.exec(t)
    }
    return e
}

function ep(t) {
    return Object.entries(t).filter(([, e]) => e != null).map(([e, n]) => `${e}="${n}"`).join(" ")
}

function tp(t) {
    const {
        nodeName: e,
        name: n,
        getContent: r,
        parseAttributes: i = Qh,
        serializeAttributes: s = ep,
        defaultAttributes: o = {},
        selfClosing: l = !1,
        allowedAttributes: a
    } = t, c = n || e, u = f => {
        if (!a) return f;
        const h = {};
        return a.forEach(p => {
            const m = typeof p == "string" ? p : p.name,
                g = typeof p == "string" ? void 0 : p.skipIfDefault;
            if (m in f) {
                const y = f[m];
                if (g !== void 0 && y === g) return;
                h[m] = y
            }
        }), h
    }, d = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return {
        parseMarkdown: (f, h) => {
            const p = { ...o,
                ...f.attributes
            };
            if (l) return h.createNode(e, p);
            const m = r ? r(f) : f.content || "";
            return m ? h.createNode(e, p, [h.createTextNode(m)]) : h.createNode(e, p, [])
        },
        markdownTokenizer: {
            name: e,
            level: "inline",
            start(f) {
                const h = l ? new RegExp(`\\[${d}\\s*[^\\]]*\\]`) : new RegExp(`\\[${d}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${d}\\]`),
                    p = f.match(h),
                    m = p ? .index;
                return m !== void 0 ? m : -1
            },
            tokenize(f, h, p) {
                const m = l ? new RegExp(`^\\[${d}\\s*([^\\]]*)\\]`) : new RegExp(`^\\[${d}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${d}\\]`),
                    g = f.match(m);
                if (!g) return;
                let y = "",
                    b = "";
                if (l) {
                    const [, x] = g;
                    b = x
                } else {
                    const [, x, T] = g;
                    b = x, y = T || ""
                }
                const w = i(b.trim());
                return {
                    type: e,
                    raw: g[0],
                    content: y.trim(),
                    attributes: w
                }
            }
        },
        renderMarkdown: f => {
            let h = "";
            r ? h = r(f) : f.content && f.content.length > 0 && (h = f.content.filter(y => y.type === "text").map(y => y.text).join(""));
            const p = u(f.attrs || {}),
                m = s(p),
                g = m ? ` ${m}` : "";
            return l ? `[${c}${g}]` : `[${c}${g}]${h}[/${c}]`
        }
    }
}

function np(t, e, n) {
    var r, i, s, o;
    const l = t.split(`
`),
        a = [];
    let c = "",
        u = 0;
    const d = e.baseIndentSize || 2;
    for (; u < l.length;) {
        const f = l[u],
            h = f.match(e.itemPattern);
        if (!h) {
            if (a.length > 0) break;
            if (f.trim() === "") {
                u += 1, c = `${c}${f}
`;
                continue
            } else return
        }
        const p = e.extractItemData(h),
            {
                indentLevel: m,
                mainContent: g
            } = p;
        c = `${c}${f}
`;
        const y = [g];
        for (u += 1; u < l.length;) {
            const T = l[u];
            if (T.trim() === "") {
                const N = l.slice(u + 1).findIndex(S => S.trim() !== "");
                if (N === -1) break;
                if ((((i = (r = l[u + 1 + N].match(/^(\s*)/)) == null ? void 0 : r[1]) == null ? void 0 : i.length) || 0) > m) {
                    y.push(T), c = `${c}${T}
`, u += 1;
                    continue
                } else break
            }
            if ((((o = (s = T.match(/^(\s*)/)) == null ? void 0 : s[1]) == null ? void 0 : o.length) || 0) > m) y.push(T), c = `${c}${T}
`, u += 1;
            else break
        }
        let b;
        const w = y.slice(1);
        if (w.length > 0) {
            const T = w.map(N => N.slice(m + d)).join(`
`);
            T.trim() && (e.customNestedParser ? b = e.customNestedParser(T) : b = n.blockTokens(T))
        }
        const x = e.createToken(p, b);
        a.push(x)
    }
    if (a.length !== 0) return {
        items: a,
        raw: c
    }
}

function rp(t, e, n, r) {
    if (!t || !Array.isArray(t.content)) return "";
    const i = typeof n == "function" ? n(r) : n,
        [s, ...o] = t.content,
        l = [`${i}${e.renderChildren([s])}`];
    return o && o.length > 0 && o.forEach(a => {
        const c = e.renderChildren([a]);
        if (c) {
            const u = c.split(`
`).map(d => d ? e.indent(d) : "").join(`
`);
            l.push(u)
        }
    }), l.join(`
`)
}

function ip(t, e, n = {}) {
    const {
        state: r
    } = e, {
        doc: i,
        tr: s
    } = r, o = t;
    i.descendants((l, a) => {
        const c = s.mapping.map(a),
            u = s.mapping.map(a) + l.nodeSize;
        let d = null;
        if (l.marks.forEach(h => {
                if (h !== o) return !1;
                d = h
            }), !d) return;
        let f = !1;
        if (Object.keys(n).forEach(h => {
                n[h] !== d.attrs[h] && (f = !0)
            }), f) {
            const h = t.type.create({ ...t.attrs,
                ...n
            });
            s.removeMark(c, u, t.type), s.addMark(c, u, h)
        }
    }), s.docChanged && e.view.dispatch(s)
}
var nn = class xa extends mi {
        constructor() {
            super(...arguments), this.type = "node"
        }
        static create(e = {}) {
            const n = typeof e == "function" ? e() : e;
            return new xa(n)
        }
        configure(e) {
            return super.configure(e)
        }
        extend(e) {
            const n = typeof e == "function" ? e() : e;
            return super.extend(n)
        }
    },
    sp = class {
        constructor(t, e, n) {
            this.isDragging = !1, this.component = t, this.editor = e.editor, this.options = {
                stopEvent: null,
                ignoreMutation: null,
                ...n
            }, this.extension = e.extension, this.node = e.node, this.decorations = e.decorations, this.innerDecorations = e.innerDecorations, this.view = e.view, this.HTMLAttributes = e.HTMLAttributes, this.getPos = e.getPos, this.mount()
        }
        mount() {}
        get dom() {
            return this.editor.view.dom
        }
        get contentDOM() {
            return null
        }
        onDragStart(t) {
            var e, n, r, i, s, o, l;
            const {
                view: a
            } = this.editor, c = t.target, u = c.nodeType === 3 ? (e = c.parentElement) == null ? void 0 : e.closest("[data-drag-handle]") : c.closest("[data-drag-handle]");
            if (!this.dom || (n = this.contentDOM) != null && n.contains(c) || !u) return;
            let d = 0,
                f = 0;
            if (this.dom !== u) {
                const b = this.dom.getBoundingClientRect(),
                    w = u.getBoundingClientRect(),
                    x = (i = t.offsetX) != null ? i : (r = t.nativeEvent) == null ? void 0 : r.offsetX,
                    T = (o = t.offsetY) != null ? o : (s = t.nativeEvent) == null ? void 0 : s.offsetY;
                d = w.x - b.x + x, f = w.y - b.y + T
            }
            const h = this.dom.cloneNode(!0);
            try {
                const b = this.dom.getBoundingClientRect();
                h.style.width = `${Math.round(b.width)}px`, h.style.height = `${Math.round(b.height)}px`, h.style.boxSizing = "border-box", h.style.pointerEvents = "none"
            } catch {}
            let p = null;
            try {
                p = document.createElement("div"), p.style.position = "absolute", p.style.top = "-9999px", p.style.left = "-9999px", p.style.pointerEvents = "none", p.appendChild(h), document.body.appendChild(p), (l = t.dataTransfer) == null || l.setDragImage(h, d, f)
            } finally {
                p && setTimeout(() => {
                    try {
                        p ? .remove()
                    } catch {}
                }, 0)
            }
            const m = this.getPos();
            if (typeof m != "number") return;
            const g = E.create(a.state.doc, m),
                y = a.state.tr.setSelection(g);
            a.dispatch(y)
        }
        stopEvent(t) {
            var e;
            if (!this.dom) return !1;
            if (typeof this.options.stopEvent == "function") return this.options.stopEvent({
                event: t
            });
            const n = t.target;
            if (!(this.dom.contains(n) && !((e = this.contentDOM) != null && e.contains(n)))) return !1;
            const r = t.type.startsWith("drag"),
                i = t.type === "drop";
            if ((["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(n.tagName) || n.isContentEditable) && !i && !r) return !0;
            const {
                isEditable: s
            } = this.editor, {
                isDragging: o
            } = this, l = !!this.node.type.spec.draggable, a = E.isSelectable(this.node), c = t.type === "copy", u = t.type === "paste", d = t.type === "cut", f = t.type === "mousedown";
            if (!l && a && r && t.target === this.dom && t.preventDefault(), l && r && !o && t.target === this.dom) return t.preventDefault(), !1;
            if (l && s && !o && f) {
                const h = n.closest("[data-drag-handle]");
                h && (this.dom === h || this.dom.contains(h)) && (this.isDragging = !0, document.addEventListener("dragend", () => {
                    this.isDragging = !1
                }, {
                    once: !0
                }), document.addEventListener("drop", () => {
                    this.isDragging = !1
                }, {
                    once: !0
                }), document.addEventListener("mouseup", () => {
                    this.isDragging = !1
                }, {
                    once: !0
                }))
            }
            return !(o || i || c || u || d || f && a)
        }
        ignoreMutation(t) {
            return !this.dom || !this.contentDOM ? !0 : typeof this.options.ignoreMutation == "function" ? this.options.ignoreMutation({
                mutation: t
            }) : this.node.isLeaf || this.node.isAtom ? !0 : t.type === "selection" || this.dom.contains(t.target) && t.type === "childList" && (Jt() || Vr()) && this.editor.isFocused && [...Array.from(t.addedNodes), ...Array.from(t.removedNodes)].every(e => e.isContentEditable) ? !1 : this.contentDOM === t.target && t.type === "attributes" ? !0 : !this.contentDOM.contains(t.target)
        }
        updateAttributes(t) {
            this.editor.commands.command(({
                tr: e
            }) => {
                const n = this.getPos();
                return typeof n != "number" ? !1 : (e.setNodeMarkup(n, void 0, { ...this.node.attrs,
                    ...t
                }), !0)
            })
        }
        deleteNode() {
            const t = this.getPos();
            if (typeof t != "number") return;
            const e = t + this.node.nodeSize;
            this.editor.commands.deleteRange({
                from: t,
                to: e
            })
        }
    };

function cg(t) {
    return new $h({
        find: t.find,
        handler: ({
            state: e,
            range: n,
            match: r,
            pasteEvent: i
        }) => {
            const s = P(t.getAttributes, void 0, r, i);
            if (s === !1 || s === null) return null;
            const {
                tr: o
            } = e, l = r[r.length - 1], a = r[0];
            let c = n.to;
            if (l) {
                const u = a.search(/\S/),
                    d = n.from + a.indexOf(l),
                    f = d + l.length;
                if (ia(n.from, n.to, e.doc).filter(h => h.mark.type.excluded.find(p => p === t.type && p !== h.mark.type)).filter(h => h.to > d).length) return null;
                f < n.to && o.delete(f, n.to), d > n.from && o.delete(n.from + u, d), c = n.from + u + l.length, o.addMark(n.from + u, c, t.type.create(s || {})), o.removeStoredMark(t.type)
            }
        }
    })
}
var op = nn.create({
        name: "doc",
        topNode: !0,
        content: "block+",
        renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `

`) : ""
    }),
    ug = op,
    lp = nn.create({
        name: "hardBreak",
        markdownTokenName: "br",
        addOptions() {
            return {
                keepMarks: !0,
                HTMLAttributes: {}
            }
        },
        inline: !0,
        group: "inline",
        selectable: !1,
        linebreakReplacement: !0,
        parseHTML() {
            return [{
                tag: "br"
            }]
        },
        renderHTML({
            HTMLAttributes: t
        }) {
            return ["br", jn(this.options.HTMLAttributes, t)]
        },
        renderText() {
            return `
`
        },
        renderMarkdown: () => `  
`,
        parseMarkdown: () => ({
            type: "hardBreak"
        }),
        addCommands() {
            return {
                setHardBreak: () => ({
                    commands: t,
                    chain: e,
                    state: n,
                    editor: r
                }) => t.first([() => t.exitCode(), () => t.command(() => {
                    const {
                        selection: i,
                        storedMarks: s
                    } = n;
                    if (i.$from.parent.type.spec.isolating) return !1;
                    const {
                        keepMarks: o
                    } = this.options, {
                        splittableMarks: l
                    } = r.extensionManager, a = s || i.$to.parentOffset && i.$from.marks();
                    return e().insertContent({
                        type: this.name
                    }).command(({
                        tr: c,
                        dispatch: u
                    }) => {
                        if (u && a && o) {
                            const d = a.filter(f => l.includes(f.type.name));
                            c.ensureMarks(d)
                        }
                        return !0
                    }).run()
                })])
            }
        },
        addKeyboardShortcuts() {
            return {
                "Mod-Enter": () => this.editor.commands.setHardBreak(),
                "Shift-Enter": () => this.editor.commands.setHardBreak()
            }
        }
    }),
    dg = lp;

function ap(t = {}) {
    return new F({
        view(e) {
            return new cp(e, t)
        }
    })
}
var cp = class {
        constructor(t, e) {
            var n;
            this.editorView = t, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (n = e.width) !== null && n !== void 0 ? n : 1, this.color = e.color === !1 ? void 0 : e.color || "black", this.class = e.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map(r => {
                let i = s => {
                    this[r](s)
                };
                return t.dom.addEventListener(r, i), {
                    name: r,
                    handler: i
                }
            })
        }
        destroy() {
            this.handlers.forEach(({
                name: t,
                handler: e
            }) => this.editorView.dom.removeEventListener(t, e))
        }
        update(t, e) {
            this.cursorPos != null && e.doc != t.state.doc && (this.cursorPos > t.state.doc.content.size ? this.setCursor(null) : this.updateOverlay())
        }
        setCursor(t) {
            t != this.cursorPos && (this.cursorPos = t, t == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay())
        }
        updateOverlay() {
            let t = this.editorView.state.doc.resolve(this.cursorPos),
                e = !t.parent.inlineContent,
                n, r = this.editorView.dom,
                i = r.getBoundingClientRect(),
                s = i.width / r.offsetWidth,
                o = i.height / r.offsetHeight;
            if (e) {
                let u = t.nodeBefore,
                    d = t.nodeAfter;
                if (u || d) {
                    let f = this.editorView.nodeDOM(this.cursorPos - (u ? u.nodeSize : 0));
                    if (f) {
                        let h = f.getBoundingClientRect(),
                            p = u ? h.bottom : h.top;
                        u && d && (p = (p + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
                        let m = this.width / 2 * o;
                        n = {
                            left: h.left,
                            right: h.right,
                            top: p - m,
                            bottom: p + m
                        }
                    }
                }
            }
            if (!n) {
                let u = this.editorView.coordsAtPos(this.cursorPos),
                    d = this.width / 2 * s;
                n = {
                    left: u.left - d,
                    right: u.left + d,
                    top: u.top,
                    bottom: u.bottom
                }
            }
            let l = this.editorView.dom.offsetParent;
            this.element || (this.element = l.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", e), this.element.classList.toggle("prosemirror-dropcursor-inline", !e);
            let a, c;
            if (!l || l == document.body && getComputedStyle(l).position == "static") a = -pageXOffset, c = -pageYOffset;
            else {
                let u = l.getBoundingClientRect(),
                    d = u.width / l.offsetWidth,
                    f = u.height / l.offsetHeight;
                a = u.left - l.scrollLeft * d, c = u.top - l.scrollTop * f
            }
            this.element.style.left = (n.left - a) / s + "px", this.element.style.top = (n.top - c) / o + "px", this.element.style.width = (n.right - n.left) / s + "px", this.element.style.height = (n.bottom - n.top) / o + "px"
        }
        scheduleRemoval(t) {
            clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), t)
        }
        dragover(t) {
            if (!this.editorView.editable) return;
            let e = this.editorView.posAtCoords({
                    left: t.clientX,
                    top: t.clientY
                }),
                n = e && e.inside >= 0 && this.editorView.state.doc.nodeAt(e.inside),
                r = n && n.type.spec.disableDropCursor,
                i = typeof r == "function" ? r(this.editorView, e, t) : r;
            if (e && !i) {
                let s = e.pos;
                if (this.editorView.dragging && this.editorView.dragging.slice) {
                    let o = No(this.editorView.state.doc, s, this.editorView.dragging.slice);
                    o != null && (s = o)
                }
                this.setCursor(s), this.scheduleRemoval(5e3)
            }
        }
        dragend() {
            this.scheduleRemoval(20)
        }
        drop() {
            this.scheduleRemoval(20)
        }
        dragleave(t) {
            this.editorView.dom.contains(t.relatedTarget) || this.setCursor(null)
        }
    },
    ae = class Ae extends D {
        constructor(e) {
            super(e, e)
        }
        map(e, n) {
            let r = e.resolve(n.map(this.head));
            return Ae.valid(r) ? new Ae(r) : D.near(r)
        }
        content() {
            return k.empty
        }
        eq(e) {
            return e instanceof Ae && e.head == this.head
        }
        toJSON() {
            return {
                type: "gapcursor",
                pos: this.head
            }
        }
        static fromJSON(e, n) {
            if (typeof n.pos != "number") throw new RangeError("Invalid input for GapCursor.fromJSON");
            return new Ae(e.resolve(n.pos))
        }
        getBookmark() {
            return new up(this.anchor)
        }
        static valid(e) {
            let n = e.parent;
            if (n.isTextblock || !dp(e) || !fp(e)) return !1;
            let r = n.type.spec.allowGapCursor;
            if (r != null) return r;
            let i = n.contentMatchAt(e.index()).defaultType;
            return i && i.isTextblock
        }
        static findGapCursorFrom(e, n, r = !1) {
            e: for (;;) {
                if (!r && Ae.valid(e)) return e;
                let i = e.pos,
                    s = null;
                for (let o = e.depth;; o--) {
                    let l = e.node(o);
                    if (n > 0 ? e.indexAfter(o) < l.childCount : e.index(o) > 0) {
                        s = l.child(n > 0 ? e.indexAfter(o) : e.index(o) - 1);
                        break
                    } else if (o == 0) return null;
                    i += n;
                    let a = e.doc.resolve(i);
                    if (Ae.valid(a)) return a
                }
                for (;;) {
                    let o = n > 0 ? s.firstChild : s.lastChild;
                    if (!o) {
                        if (s.isAtom && !s.isText && !E.isSelectable(s)) {
                            e = e.doc.resolve(i + s.nodeSize * n), r = !1;
                            continue e
                        }
                        break
                    }
                    s = o, i += n;
                    let l = e.doc.resolve(i);
                    if (Ae.valid(l)) return l
                }
                return null
            }
        }
    };
ae.prototype.visible = !1;
ae.findFrom = ae.findGapCursorFrom;
D.jsonID("gapcursor", ae);
var up = class ka {
    constructor(e) {
        this.pos = e
    }
    map(e) {
        return new ka(e.map(this.pos))
    }
    resolve(e) {
        let n = e.resolve(this.pos);
        return ae.valid(n) ? new ae(n) : D.near(n)
    }
};

function wa(t) {
    return t.isAtom || t.spec.isolating || t.spec.createGapCursor
}

function dp(t) {
    for (let e = t.depth; e >= 0; e--) {
        let n = t.index(e),
            r = t.node(e);
        if (n == 0) {
            if (r.type.spec.isolating) return !0;
            continue
        }
        for (let i = r.child(n - 1);; i = i.lastChild) {
            if (i.childCount == 0 && !i.inlineContent || wa(i.type)) return !0;
            if (i.inlineContent) return !1
        }
    }
    return !0
}

function fp(t) {
    for (let e = t.depth; e >= 0; e--) {
        let n = t.indexAfter(e),
            r = t.node(e);
        if (n == r.childCount) {
            if (r.type.spec.isolating) return !0;
            continue
        }
        for (let i = r.child(n);; i = i.firstChild) {
            if (i.childCount == 0 && !i.inlineContent || wa(i.type)) return !0;
            if (i.inlineContent) return !1
        }
    }
    return !0
}

function hp() {
    return new F({
        props: {
            decorations: yp,
            createSelectionBetween(t, e, n) {
                return e.pos == n.pos && ae.valid(n) ? new ae(n) : null
            },
            handleClick: mp,
            handleKeyDown: pp,
            handleDOMEvents: {
                beforeinput: gp
            }
        }
    })
}
var pp = jl({
    ArrowLeft: dn("horiz", -1),
    ArrowRight: dn("horiz", 1),
    ArrowUp: dn("vert", -1),
    ArrowDown: dn("vert", 1)
});

function dn(t, e) {
    const n = t == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
    return function(r, i, s) {
        let o = r.selection,
            l = e > 0 ? o.$to : o.$from,
            a = o.empty;
        if (o instanceof A) {
            if (!s.endOfTextblock(n) || l.depth == 0) return !1;
            a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before())
        }
        let c = ae.findGapCursorFrom(l, e, a);
        return c ? (i && i(r.tr.setSelection(new ae(c))), !0) : !1
    }
}

function mp(t, e, n) {
    if (!t || !t.editable) return !1;
    let r = t.state.doc.resolve(e);
    if (!ae.valid(r)) return !1;
    let i = t.posAtCoords({
        left: n.clientX,
        top: n.clientY
    });
    return i && i.inside > -1 && E.isSelectable(t.state.doc.nodeAt(i.inside)) ? !1 : (t.dispatch(t.state.tr.setSelection(new ae(r))), !0)
}

function gp(t, e) {
    if (e.inputType != "insertCompositionText" || !(t.state.selection instanceof ae)) return !1;
    let {
        $from: n
    } = t.state.selection, r = n.parent.contentMatchAt(n.index()).findWrapping(t.state.schema.nodes.text);
    if (!r) return !1;
    let i = v.empty;
    for (let o = r.length - 1; o >= 0; o--) i = v.from(r[o].createAndFill(null, i));
    let s = t.state.tr.replace(n.pos, n.pos, new k(i, 0, 0));
    return s.setSelection(A.near(s.doc.resolve(n.pos + 1))), t.dispatch(s), !1
}

function yp(t) {
    if (!(t.selection instanceof ae)) return null;
    let e = document.createElement("div");
    return e.className = "ProseMirror-gapcursor", L.create(t.doc, [ge.widget(t.selection.head, e, {
        key: "gapcursor"
    })])
}
var Pn = 200,
    _ = function() {};
_.prototype.append = function(e) {
    return e.length ? (e = _.from(e), !this.length && e || e.length < Pn && this.leafAppend(e) || this.length < Pn && e.leafPrepend(this) || this.appendInner(e)) : this
};
_.prototype.prepend = function(e) {
    return e.length ? _.from(e).append(this) : this
};
_.prototype.appendInner = function(e) {
    return new bp(this, e)
};
_.prototype.slice = function(e, n) {
    return e === void 0 && (e = 0), n === void 0 && (n = this.length), e >= n ? _.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, n))
};
_.prototype.get = function(e) {
    if (!(e < 0 || e >= this.length)) return this.getInner(e)
};
_.prototype.forEach = function(e, n, r) {
    n === void 0 && (n = 0), r === void 0 && (r = this.length), n <= r ? this.forEachInner(e, n, r, 0) : this.forEachInvertedInner(e, n, r, 0)
};
_.prototype.map = function(e, n, r) {
    n === void 0 && (n = 0), r === void 0 && (r = this.length);
    var i = [];
    return this.forEach(function(s, o) {
        return i.push(e(s, o))
    }, n, r), i
};
_.from = function(e) {
    return e instanceof _ ? e : e && e.length ? new Ma(e) : _.empty
};
var Ma = (function(t) {
    function e(r) {
        t.call(this), this.values = r
    }
    t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
    var n = {
        length: {
            configurable: !0
        },
        depth: {
            configurable: !0
        }
    };
    return e.prototype.flatten = function() {
        return this.values
    }, e.prototype.sliceInner = function(i, s) {
        return i == 0 && s == this.length ? this : new e(this.values.slice(i, s))
    }, e.prototype.getInner = function(i) {
        return this.values[i]
    }, e.prototype.forEachInner = function(i, s, o, l) {
        for (var a = s; a < o; a++)
            if (i(this.values[a], l + a) === !1) return !1
    }, e.prototype.forEachInvertedInner = function(i, s, o, l) {
        for (var a = s - 1; a >= o; a--)
            if (i(this.values[a], l + a) === !1) return !1
    }, e.prototype.leafAppend = function(i) {
        if (this.length + i.length <= Pn) return new e(this.values.concat(i.flatten()))
    }, e.prototype.leafPrepend = function(i) {
        if (this.length + i.length <= Pn) return new e(i.flatten().concat(this.values))
    }, n.length.get = function() {
        return this.values.length
    }, n.depth.get = function() {
        return 0
    }, Object.defineProperties(e.prototype, n), e
})(_);
_.empty = new Ma([]);
var bp = (function(t) {
        function e(n, r) {
            t.call(this), this.left = n, this.right = r, this.length = n.length + r.length, this.depth = Math.max(n.depth, r.depth) + 1
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
            return this.left.flatten().concat(this.right.flatten())
        }, e.prototype.getInner = function(r) {
            return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length)
        }, e.prototype.forEachInner = function(r, i, s, o) {
            var l = this.left.length;
            if (i < l && this.left.forEachInner(r, i, Math.min(s, l), o) === !1 || s > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, s) - l, o + l) === !1) return !1
        }, e.prototype.forEachInvertedInner = function(r, i, s, o) {
            var l = this.left.length;
            if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(s, l) - l, o + l) === !1 || s < l && this.left.forEachInvertedInner(r, Math.min(i, l), s, o) === !1) return !1
        }, e.prototype.sliceInner = function(r, i) {
            if (r == 0 && i == this.length) return this;
            var s = this.left.length;
            return i <= s ? this.left.slice(r, i) : r >= s ? this.right.slice(r - s, i - s) : this.left.slice(r, s).append(this.right.slice(0, i - s))
        }, e.prototype.leafAppend = function(r) {
            var i = this.right.leafAppend(r);
            if (i) return new e(this.left, i)
        }, e.prototype.leafPrepend = function(r) {
            var i = this.left.leafPrepend(r);
            if (i) return new e(i, this.right)
        }, e.prototype.appendInner = function(r) {
            return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r)
        }, e
    })(_),
    vp = 500,
    Yt = class at {
        constructor(e, n) {
            this.items = e, this.eventCount = n
        }
        popEvent(e, n) {
            if (this.eventCount == 0) return null;
            let r = this.items.length;
            for (;; r--)
                if (this.items.get(r - 1).selection) {
                    --r;
                    break
                }
            let i, s;
            n && (i = this.remapping(r, this.items.length), s = i.maps.length);
            let o = e.tr,
                l, a, c = [],
                u = [];
            return this.items.forEach((d, f) => {
                if (!d.step) {
                    i || (i = this.remapping(r, f + 1), s = i.maps.length), s--, u.push(d);
                    return
                }
                if (i) {
                    u.push(new Ne(d.map));
                    let h = d.step.map(i.slice(s)),
                        p;
                    h && o.maybeStep(h).doc && (p = o.mapping.maps[o.mapping.maps.length - 1], c.push(new Ne(p, void 0, void 0, c.length + u.length))), s--, p && i.appendMap(p, s)
                } else o.maybeStep(d.step);
                if (d.selection) return l = i ? d.selection.map(i.slice(s)) : d.selection, a = new at(this.items.slice(0, r).append(u.reverse().concat(c)), this.eventCount - 1), !1
            }, this.items.length, 0), {
                remaining: a,
                transform: o,
                selection: l
            }
        }
        addTransform(e, n, r, i) {
            let s = [],
                o = this.eventCount,
                l = this.items,
                a = !i && l.length ? l.get(l.length - 1) : null;
            for (let u = 0; u < e.steps.length; u++) {
                let d = e.steps[u].invert(e.docs[u]),
                    f = new Ne(e.mapping.maps[u], d, n),
                    h;
                (h = a && a.merge(f)) && (f = h, u ? s.pop() : l = l.slice(0, l.length - 1)), s.push(f), n && (o++, n = void 0), i || (a = f)
            }
            let c = o - r.depth;
            return c > xp && (l = Sp(l, c), o -= c), new at(l.append(s), o)
        }
        remapping(e, n) {
            let r = new Mo;
            return this.items.forEach((i, s) => {
                let o = i.mirrorOffset != null && s - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
                r.appendMap(i.map, o)
            }, e, n), r
        }
        addMaps(e) {
            return this.eventCount == 0 ? this : new at(this.items.append(e.map(n => new Ne(n))), this.eventCount)
        }
        rebased(e, n) {
            if (!this.eventCount) return this;
            let r = [],
                i = Math.max(0, this.items.length - n),
                s = e.mapping,
                o = e.steps.length,
                l = this.eventCount;
            this.items.forEach(f => {
                f.selection && l--
            }, i);
            let a = n;
            this.items.forEach(f => {
                let h = s.getMirror(--a);
                if (h == null) return;
                o = Math.min(o, h);
                let p = s.maps[h];
                if (f.step) {
                    let m = e.steps[h].invert(e.docs[h]),
                        g = f.selection && f.selection.map(s.slice(a + 1, h));
                    g && l++, r.push(new Ne(p, m, g))
                } else r.push(new Ne(p))
            }, i);
            let c = [];
            for (let f = n; f < o; f++) c.push(new Ne(s.maps[f]));
            let u = this.items.slice(0, i).append(c).append(r),
                d = new at(u, l);
            return d.emptyItemCount() > vp && (d = d.compress(this.items.length - r.length)), d
        }
        emptyItemCount() {
            let e = 0;
            return this.items.forEach(n => {
                n.step || e++
            }), e
        }
        compress(e = this.items.length) {
            let n = this.remapping(0, e),
                r = n.maps.length,
                i = [],
                s = 0;
            return this.items.forEach((o, l) => {
                if (l >= e) i.push(o), o.selection && s++;
                else if (o.step) {
                    let a = o.step.map(n.slice(r)),
                        c = a && a.getMap();
                    if (r--, c && n.appendMap(c, r), a) {
                        let u = o.selection && o.selection.map(n.slice(r));
                        u && s++;
                        let d = new Ne(c.invert(), a, u),
                            f, h = i.length - 1;
                        (f = i.length && i[h].merge(d)) ? i[h] = f: i.push(d)
                    }
                } else o.map && r--
            }, this.items.length, 0), new at(_.from(i.reverse()), s)
        }
    };
Yt.empty = new Yt(_.empty, 0);

function Sp(t, e) {
    let n;
    return t.forEach((r, i) => {
        if (r.selection && e-- == 0) return n = i, !1
    }), t.slice(n)
}
var Ne = class Ca {
        constructor(e, n, r, i) {
            this.map = e, this.step = n, this.selection = r, this.mirrorOffset = i
        }
        merge(e) {
            if (this.step && e.step && !e.selection) {
                let n = e.step.merge(this.step);
                if (n) return new Ca(n.getMap().invert(), n, this.selection)
            }
        }
    },
    Ie = class {
        constructor(t, e, n, r, i) {
            this.done = t, this.undone = e, this.prevRanges = n, this.prevTime = r, this.prevComposition = i
        }
    },
    xp = 20;

function kp(t, e, n, r) {
    let i = n.getMeta(Be),
        s;
    if (i) return i.historyState;
    n.getMeta(Ea) && (t = new Ie(t.done, t.undone, null, 0, -1));
    let o = n.getMeta("appendedTransaction");
    if (n.steps.length == 0) return t;
    if (o && o.getMeta(Be)) return o.getMeta(Be).redo ? new Ie(t.done.addTransform(n, void 0, r, vn(e)), t.undone, Is(n.mapping.maps), t.prevTime, t.prevComposition) : new Ie(t.done, t.undone.addTransform(n, void 0, r, vn(e)), null, t.prevTime, t.prevComposition);
    if (n.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
        let l = n.getMeta("composition"),
            a = t.prevTime == 0 || !o && t.prevComposition != l && (t.prevTime < (n.time || 0) - r.newGroupDelay || !wp(n, t.prevRanges)),
            c = o ? hr(t.prevRanges, n.mapping) : Is(n.mapping.maps);
        return new Ie(t.done.addTransform(n, a ? e.selection.getBookmark() : void 0, r, vn(e)), Yt.empty, c, n.time, l ? ? t.prevComposition)
    } else return (s = n.getMeta("rebased")) ? new Ie(t.done.rebased(n, s), t.undone.rebased(n, s), hr(t.prevRanges, n.mapping), t.prevTime, t.prevComposition) : new Ie(t.done.addMaps(n.mapping.maps), t.undone.addMaps(n.mapping.maps), hr(t.prevRanges, n.mapping), t.prevTime, t.prevComposition)
}

function wp(t, e) {
    if (!e) return !1;
    if (!t.docChanged) return !0;
    let n = !1;
    return t.mapping.maps[0].forEach((r, i) => {
        for (let s = 0; s < e.length; s += 2) r <= e[s + 1] && i >= e[s] && (n = !0)
    }), n
}

function Is(t) {
    let e = [];
    for (let n = t.length - 1; n >= 0 && e.length == 0; n--) t[n].forEach((r, i, s, o) => e.push(s, o));
    return e
}

function hr(t, e) {
    if (!t) return null;
    let n = [];
    for (let r = 0; r < t.length; r += 2) {
        let i = e.map(t[r], 1),
            s = e.map(t[r + 1], -1);
        i <= s && n.push(i, s)
    }
    return n
}

function Mp(t, e, n) {
    let r = vn(e),
        i = Be.get(e).spec.config,
        s = (n ? t.undone : t.done).popEvent(e, r);
    if (!s) return null;
    let o = s.selection.resolve(s.transform.doc),
        l = (n ? t.done : t.undone).addTransform(s.transform, e.selection.getBookmark(), i, r),
        a = new Ie(n ? l : s.remaining, n ? s.remaining : l, null, 0, -1);
    return s.transform.setSelection(o).setMeta(Be, {
        redo: n,
        historyState: a
    })
}
var pr = !1,
    Ps = null;

function vn(t) {
    let e = t.plugins;
    if (Ps != e) {
        pr = !1, Ps = e;
        for (let n = 0; n < e.length; n++)
            if (e[n].spec.historyPreserveItems) {
                pr = !0;
                break
            }
    }
    return pr
}

function fg(t) {
    return t.setMeta(Ea, !0)
}
var Be = new Q("history"),
    Ea = new Q("closeHistory");

function Cp(t = {}) {
    return t = {
        depth: t.depth || 100,
        newGroupDelay: t.newGroupDelay || 500
    }, new F({
        key: Be,
        state: {
            init() {
                return new Ie(Yt.empty, Yt.empty, null, 0, -1)
            },
            apply(e, n, r) {
                return kp(n, r, e, t)
            }
        },
        config: t,
        props: {
            handleDOMEvents: {
                beforeinput(e, n) {
                    let r = n.inputType,
                        i = r == "historyUndo" ? Ta : r == "historyRedo" ? Na : null;
                    return !i || !e.editable ? !1 : (n.preventDefault(), i(e.state, e.dispatch))
                }
            }
        }
    })
}

function Kn(t, e) {
    return (n, r) => {
        let i = Be.getState(n);
        if (!i || (t ? i.undone : i.done).eventCount == 0) return !1;
        if (r) {
            let s = Mp(i, n, t);
            s && r(e ? s.scrollIntoView() : s)
        }
        return !0
    }
}
var Ta = Kn(!1, !0),
    Na = Kn(!0, !0),
    hg = Kn(!1, !1),
    pg = Kn(!0, !1);

function mg(t) {
    return t.getMeta(Be) != null
}
var gg = j.create({
        name: "characterCount",
        addOptions() {
            return {
                limit: null,
                autoTrim: !0,
                mode: "textSize",
                textCounter: t => t.length,
                wordCounter: t => t.split(" ").filter(e => e !== "").length
            }
        },
        addStorage() {
            return {
                characters: () => 0,
                words: () => 0
            }
        },
        onBeforeCreate() {
            this.storage.characters = t => {
                const e = t ? .node || this.editor.state.doc;
                if ((t ? .mode || this.options.mode) === "textSize") {
                    const n = e.textBetween(0, e.content.size, void 0, " ");
                    return this.options.textCounter(n)
                }
                return e.nodeSize
            }, this.storage.words = t => {
                const e = t ? .node || this.editor.state.doc,
                    n = e.textBetween(0, e.content.size, " ", " ");
                return this.options.wordCounter(n)
            }
        },
        addProseMirrorPlugins() {
            let t = !1;
            return [new F({
                key: new Q("characterCount"),
                appendTransaction: (e, n, r) => {
                    if (t) return;
                    const i = this.options.limit,
                        s = this.options.autoTrim;
                    if (i == null || i === 0 || s === !1) {
                        t = !0;
                        return
                    }
                    const o = this.storage.characters({
                        node: r.doc
                    });
                    if (o > i) {
                        const l = o - i,
                            a = 0,
                            c = l;
                        console.warn(`[CharacterCount] Initial content exceeded limit of ${i} characters. Content was automatically trimmed.`);
                        const u = r.tr.deleteRange(a, c);
                        return t = !0, u
                    }
                    t = !0
                },
                filterTransaction: (e, n) => {
                    const r = this.options.limit;
                    if (!e.docChanged || r === 0 || r === null || r === void 0) return !0;
                    const i = this.storage.characters({
                            node: n.doc
                        }),
                        s = this.storage.characters({
                            node: e.doc
                        });
                    if (s <= r || i > r && s > r && s <= i) return !0;
                    if (i > r && s > r && s > i || !e.getMeta("paste")) return !1;
                    const o = e.selection.$head.pos,
                        l = o - (s - r),
                        a = o;
                    return e.deleteRange(l, a), !(this.storage.characters({
                        node: e.doc
                    }) > r)
                }
            })]
        }
    }),
    yg = j.create({
        name: "dropCursor",
        addOptions() {
            return {
                color: "currentColor",
                width: 1,
                class: void 0
            }
        },
        addProseMirrorPlugins() {
            return [ap(this.options)]
        }
    }),
    bg = j.create({
        name: "focus",
        addOptions() {
            return {
                className: "has-focus",
                mode: "all"
            }
        },
        addProseMirrorPlugins() {
            return [new F({
                key: new Q("focus"),
                props: {
                    decorations: ({
                        doc: t,
                        selection: e
                    }) => {
                        const {
                            isEditable: n,
                            isFocused: r
                        } = this.editor, {
                            anchor: i
                        } = e, s = [];
                        if (!n || !r) return L.create(t, []);
                        let o = 0;
                        this.options.mode === "deepest" && t.descendants((a, c) => {
                            if (!a.isText) {
                                if (!(i >= c && i <= c + a.nodeSize - 1)) return !1;
                                o += 1
                            }
                        });
                        let l = 0;
                        return t.descendants((a, c) => {
                            if (a.isText || !(i >= c && i <= c + a.nodeSize - 1)) return !1;
                            if (l += 1, this.options.mode === "deepest" && o - l > 0 || this.options.mode === "shallowest" && l > 1) return this.options.mode === "deepest";
                            s.push(ge.node(c, c + a.nodeSize, {
                                class: this.options.className
                            }))
                        }), L.create(t, s)
                    }
                }
            })]
        }
    }),
    vg = j.create({
        name: "gapCursor",
        addProseMirrorPlugins() {
            return [hp()]
        },
        extendNodeSchema(t) {
            var e;
            const n = {
                name: t.name,
                options: t.options,
                storage: t.storage
            };
            return {
                allowGapCursor: (e = P(C(t, "allowGapCursor", n))) !== null && e !== void 0 ? e : null
            }
        }
    }),
    Oa = "placeholder",
    zs = new Q("tiptap__placeholder");

function Da(t) {
    const {
        editor: e,
        placeholder: n,
        dataAttribute: r,
        pos: i,
        node: s,
        isEmptyDoc: o,
        hasAnchor: l,
        classes: {
            emptyNode: a,
            emptyEditor: c
        }
    } = t, u = [a];
    return o && u.push(c), ge.node(i, i + s.nodeSize, {
        class: u.join(" "),
        [r]: typeof n == "function" ? n({
            editor: e,
            node: s,
            pos: i,
            hasAnchor: l
        }) : n
    })
}

function Aa(t, e) {
    return typeof t == "function" ? t(e) : t
}

function Ra({
    editor: t,
    options: e,
    dataAttribute: n,
    doc: r,
    selection: i,
    from: s,
    to: o
}) {
    const {
        anchor: l
    } = i, a = [], c = t.isEmpty;
    return r.nodesBetween(s, o, (u, d) => {
        const f = l >= d && l <= d + u.nodeSize,
            h = !u.isLeaf && tn(u);
        return u.type.isTextblock && (f || !e.showOnlyCurrent) && h && a.push(Da({
            editor: t,
            isEmptyDoc: c,
            dataAttribute: n,
            hasAnchor: f,
            placeholder: e.placeholder,
            classes: {
                emptyEditor: e.emptyEditorClass,
                emptyNode: Aa(e.emptyNodeClass, {
                    editor: t,
                    node: u,
                    pos: d,
                    hasAnchor: f
                })
            },
            node: u,
            pos: d
        })), e.includeChildren
    }), a
}

function Ia({
    editor: t,
    options: e,
    dataAttribute: n,
    doc: r,
    selection: i
}) {
    if (!(t.isEditable || !e.showOnlyWhenEditable)) return null;
    const {
        anchor: s
    } = i, o = [], l = t.isEmpty;
    if (e.showOnlyCurrent && !e.includeChildren) {
        const a = r.resolve(s),
            c = a.depth > 0 ? a.node(1) : a.nodeAfter,
            u = a.depth > 0 ? a.before(1) : s;
        if (c && c.type.isTextblock && tn(c)) {
            const d = s >= u && s <= u + c.nodeSize;
            o.push(Da({
                editor: t,
                isEmptyDoc: l,
                dataAttribute: n,
                hasAnchor: d,
                placeholder: e.placeholder,
                classes: {
                    emptyEditor: e.emptyEditorClass,
                    emptyNode: Aa(e.emptyNodeClass, {
                        editor: t,
                        node: c,
                        pos: u,
                        hasAnchor: d
                    })
                },
                node: c,
                pos: u
            }))
        }
    } else o.push(...Ra({
        editor: t,
        options: e,
        dataAttribute: n,
        doc: r,
        selection: i,
        from: 0,
        to: r.content.size
    }));
    return L.create(r, o)
}

function Lt(t, e) {
    const n = t.resolve(e);
    if (n.depth === 0) {
        var r;
        const s = (r = n.nodeAfter) !== null && r !== void 0 ? r : n.nodeBefore;
        if (!s) return {
            from: e,
            to: e
        };
        const o = n.nodeAfter ? e : e - s.nodeSize;
        return {
            from: o,
            to: o + s.nodeSize
        }
    }
    const i = n.before(1);
    return {
        from: i,
        to: i + n.node(1).nodeSize
    }
}

function qt(t, e) {
    return {
        from: Math.max(0, e.from - 1),
        to: Math.min(t.content.size, e.to - 1)
    }
}

function Ep(t, e, n) {
    const r = [];
    return t.forEach((i, s) => {
        const o = s,
            l = o + i.nodeSize,
            a = o + 1,
            c = l + 1;
        a < n && c > e && r.push({
            from: o,
            to: l
        })
    }), r
}

function Tp(t) {
    if (t.length === 0) return [];
    const e = [...t].sort((r, i) => r.from - i.from),
        n = [{ ...e[0]
        }];
    for (let r = 1; r < e.length; r += 1) {
        const i = n[n.length - 1],
            s = e[r];
        s.from <= i.to ? i.to = Math.max(i.to, s.to) : n.push({ ...s
        })
    }
    return n
}

function Np(t, e) {
    const n = Ep(t, e.from, e.to);
    return n.push(qt(t, Lt(t, e.from))), e.to > e.from ? n.push(qt(t, Lt(t, Math.min(e.to, t.content.size + 1) - 1))) : e.from < t.content.size + 1 && n.push(qt(t, Lt(t, Math.min(e.from + 1, t.content.size)))), n
}

function Op(t, e, n) {
    const r = [];
    if (t.docChanged) {
        const i = ra(t);
        for (const s of i) r.push(...Np(n.doc, s.newRange))
    }
    return t.selectionSet && (r.push(qt(n.doc, Lt(n.doc, t.mapping.map(e.selection.anchor)))), r.push(qt(n.doc, Lt(n.doc, n.selection.anchor)))), Tp(r)
}

function Dp(t, e, n) {
    const r = Math.max(0, Math.min(t, n.content.size));
    return {
        from: r,
        to: Math.max(r, Math.min(e, n.content.size))
    }
}

function Ap({
    decorations: t,
    ranges: e,
    editor: n,
    options: r,
    dataAttribute: i,
    doc: s,
    selection: o
}) {
    let l = t;
    for (const a of e) {
        const {
            from: c,
            to: u
        } = Dp(a.from, a.to, s), d = l.find(c, u).filter(h => h.from >= c && h.to <= u);
        d.length && (l = l.remove(d));
        const f = Ra({
            editor: n,
            options: r,
            dataAttribute: i,
            doc: s,
            selection: o,
            from: c,
            to: u
        });
        f.length && (l = l.add(s, f))
    }
    return l
}

function Rp({
    editor: t,
    options: e,
    dataAttribute: n
}) {
    return {
        init(r, i) {
            const s = Ia({
                editor: t,
                options: e,
                dataAttribute: n,
                doc: i.doc,
                selection: i.selection
            });
            return s ? ? L.empty
        },
        apply(r, i, s, o) {
            return !r.docChanged && !r.selectionSet ? i : Ap({
                decorations: i.map(r.mapping, r.doc),
                ranges: Op(r, s, o),
                editor: t,
                options: e,
                dataAttribute: n,
                doc: o.doc,
                selection: o.selection
            })
        }
    }
}

function Ip(t) {
    return t.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").replace(/^[0-9-]+/, "").replace(/^-+/, "").toLowerCase()
}

function Pp({
    editor: t,
    options: e
}) {
    const n = e.dataAttribute ? `data-${Ip(e.dataAttribute)}` : `data-${Oa}`,
        r = e.showOnlyCurrent && !e.includeChildren;
    return new F({
        key: zs,
        ...r ? {} : {
            state: Rp({
                editor: t,
                options: e,
                dataAttribute: n
            })
        },
        props: {
            decorations: r ? ({
                doc: i,
                selection: s
            }) => Ia({
                editor: t,
                options: e,
                dataAttribute: n,
                doc: i,
                selection: s
            }) : i => {
                var s;
                return e.showOnlyWhenEditable && !t.isEditable ? L.empty : (s = zs.getState(i)) !== null && s !== void 0 ? s : L.empty
            }
        }
    })
}
var Sg = j.create({
    name: "placeholder",
    addOptions() {
        return {
            emptyEditorClass: "is-editor-empty",
            emptyNodeClass: "is-empty",
            dataAttribute: Oa,
            placeholder: "Write something …",
            showOnlyWhenEditable: !0,
            showOnlyCurrent: !0,
            includeChildren: !1
        }
    },
    addProseMirrorPlugins() {
        return [Pp({
            editor: this.editor,
            options: this.options
        })]
    }
});

function qr(t, e) {
    return !t.selection.empty && !lh(t.selection) && e.isEditable
}

function zp(t, e) {
    return qr(t, e) && !e.isFocused && !e.view.dragging
}

function Bp() {
    var t;
    (t = window.getSelection()) === null || t === void 0 || t.removeAllRanges()
}

function $p(t) {
    t.focus()
}
var xg = j.create({
    name: "selection",
    addOptions() {
        return {
            className: "selection"
        }
    },
    addProseMirrorPlugins() {
        const {
            editor: t,
            options: e
        } = this;
        return [new F({
            key: new Q("selection"),
            props: {
                decorations(n) {
                    return zp(n, t) ? L.create(n.doc, [ge.inline(n.selection.from, n.selection.to, {
                        class: e.className
                    })]) : null
                },
                handleDOMEvents: {
                    blur(n) {
                        return qr(n.state, t) && Bp(), !1
                    },
                    focus(n) {
                        return qr(n.state, t) && requestAnimationFrame(() => {
                            !t.isDestroyed && n.hasFocus() && $p(n)
                        }), !1
                    }
                }
            }
        })]
    }
});

function Bs({
    types: t,
    node: e
}) {
    return e && Array.isArray(t) && t.includes(e.type) || e ? .type === t
}
var kg = j.create({
        name: "trailingNode",
        addOptions() {
            return {
                node: void 0,
                notAfter: []
            }
        },
        addProseMirrorPlugins() {
            var t;
            const e = new Q(this.name),
                n = this.options.node || ((t = this.editor.schema.topNodeType.contentMatch.defaultType) === null || t === void 0 ? void 0 : t.name) || "paragraph",
                r = Object.entries(this.editor.schema.nodes).map(([, i]) => i).filter(i => (this.options.notAfter || []).concat(n).includes(i.name));
            return [new F({
                key: e,
                appendTransaction: (i, s, o) => {
                    const {
                        doc: l,
                        tr: a,
                        schema: c
                    } = o, u = e.getState(o), d = l.content.size, f = c.nodes[n];
                    if (!i.some(h => h.getMeta("skipTrailingNode")) && u) return a.insert(d, f.create())
                },
                state: {
                    init: (i, s) => {
                        const o = s.tr.doc.lastChild;
                        return !Bs({
                            node: o,
                            types: r
                        })
                    },
                    apply: (i, s) => {
                        if (!i.docChanged || i.getMeta("__uniqueIDTransaction")) return s;
                        const o = i.doc.lastChild;
                        return !Bs({
                            node: o,
                            types: r
                        })
                    }
                }
            })]
        }
    }),
    Vp = j.create({
        name: "undoRedo",
        addOptions() {
            return {
                depth: 100,
                newGroupDelay: 500
            }
        },
        addCommands() {
            return {
                undo: () => ({
                    state: t,
                    dispatch: e
                }) => Ta(t, e),
                redo: () => ({
                    state: t,
                    dispatch: e
                }) => Na(t, e)
            }
        },
        addProseMirrorPlugins() {
            return [Cp(this.options)]
        },
        addKeyboardShortcuts() {
            return {
                "Mod-z": () => this.editor.commands.undo(),
                "Shift-Mod-z": () => this.editor.commands.redo(),
                "Mod-y": () => this.editor.commands.redo(),
                "Mod-я": () => this.editor.commands.undo(),
                "Shift-Mod-я": () => this.editor.commands.redo()
            }
        }
    }),
    wg = Vp,
    $s = "&nbsp;",
    Fp = " ",
    Lp = nn.create({
        name: "paragraph",
        priority: 1e3,
        addOptions() {
            return {
                HTMLAttributes: {}
            }
        },
        group: "block",
        content: "inline*",
        parseHTML() {
            return [{
                tag: "p"
            }]
        },
        renderHTML({
            HTMLAttributes: t
        }) {
            return ["p", jn(this.options.HTMLAttributes, t), 0]
        },
        parseMarkdown: (t, e) => {
            const n = t.tokens || [];
            if (n.length === 1 && n[0].type === "image") return e.parseChildren([n[0]]);
            const r = e.parseInline(n);
            return r.length === 1 && r[0].type === "text" && (r[0].text === $s || r[0].text === Fp) ? e.createNode("paragraph", void 0, []) : e.createNode("paragraph", void 0, r)
        },
        renderMarkdown: (t, e) => {
            if (!t) return "";
            const n = Array.isArray(t.content) ? t.content : [];
            return n.length === 0 ? $s : e.renderChildren(n)
        },
        addCommands() {
            return {
                setParagraph: () => ({
                    commands: t
                }) => t.setNode(this.name)
            }
        },
        addKeyboardShortcuts() {
            return {
                "Mod-Alt-0": () => this.editor.commands.setParagraph()
            }
        }
    }),
    Mg = Lp,
    qp = nn.create({
        name: "text",
        group: "inline",
        parseMarkdown: t => ({
            type: "text",
            text: t.text || ""
        }),
        renderMarkdown: t => t.text || ""
    }),
    Cg = qp,
    z = Wr(ja(), 1),
    fe = Ja(),
    Pa = Ua(),
    za = Wr(Ha(), 1),
    _p = Object.getOwnPropertyNames,
    Wp = Object.getOwnPropertySymbols,
    jp = Object.prototype.hasOwnProperty;

function Vs(t, e) {
    return function(r, i, s) {
        return t(r, i, s) && e(r, i, s)
    }
}

function fn(t) {
    return function(n, r, i) {
        if (!n || !r || typeof n != "object" || typeof r != "object") return t(n, r, i);
        var s = i.cache,
            o = s.get(n),
            l = s.get(r);
        if (o && l) return o === r && l === n;
        s.set(n, r), s.set(r, n);
        var a = t(n, r, i);
        return s.delete(n), s.delete(r), a
    }
}

function Hp(t) {
    return t ? .[Symbol.toStringTag]
}

function Fs(t) {
    return _p(t).concat(Wp(t))
}
var Jp = Object.hasOwn || (function(t, e) {
    return jp.call(t, e)
});

function Ze(t, e) {
    return t === e || !t && !e && t !== t && e !== e
}
var Kp = "__v",
    Up = "__o",
    Gp = "_owner",
    Ls = Object.getOwnPropertyDescriptor,
    qs = Object.keys;

function Yp(t, e, n) {
    var r = t.length;
    if (e.length !== r) return !1;
    for (; r-- > 0;)
        if (!n.equals(t[r], e[r], r, r, t, e, n)) return !1;
    return !0
}

function Xp(t, e) {
    return Ze(t.getTime(), e.getTime())
}

function Zp(t, e) {
    return t.name === e.name && t.message === e.message && t.cause === e.cause && t.stack === e.stack
}

function Qp(t, e) {
    return t === e
}

function _s(t, e, n) {
    var r = t.size;
    if (r !== e.size) return !1;
    if (!r) return !0;
    for (var i = new Array(r), s = t.entries(), o, l, a = 0;
        (o = s.next()) && !o.done;) {
        for (var c = e.entries(), u = !1, d = 0;
            (l = c.next()) && !l.done;) {
            if (i[d]) {
                d++;
                continue
            }
            var f = o.value,
                h = l.value;
            if (n.equals(f[0], h[0], a, d, t, e, n) && n.equals(f[1], h[1], f[0], h[0], t, e, n)) {
                u = i[d] = !0;
                break
            }
            d++
        }
        if (!u) return !1;
        a++
    }
    return !0
}
var em = Ze;

function tm(t, e, n) {
    var r = qs(t),
        i = r.length;
    if (qs(e).length !== i) return !1;
    for (; i-- > 0;)
        if (!Ba(t, e, n, r[i])) return !1;
    return !0
}

function kt(t, e, n) {
    var r = Fs(t),
        i = r.length;
    if (Fs(e).length !== i) return !1;
    for (var s, o, l; i-- > 0;)
        if (s = r[i], !Ba(t, e, n, s) || (o = Ls(t, s), l = Ls(e, s), (o || l) && (!o || !l || o.configurable !== l.configurable || o.enumerable !== l.enumerable || o.writable !== l.writable))) return !1;
    return !0
}

function nm(t, e) {
    return Ze(t.valueOf(), e.valueOf())
}

function rm(t, e) {
    return t.source === e.source && t.flags === e.flags
}

function Ws(t, e, n) {
    var r = t.size;
    if (r !== e.size) return !1;
    if (!r) return !0;
    for (var i = new Array(r), s = t.values(), o, l;
        (o = s.next()) && !o.done;) {
        for (var a = e.values(), c = !1, u = 0;
            (l = a.next()) && !l.done;) {
            if (!i[u] && n.equals(o.value, l.value, o.value, l.value, t, e, n)) {
                c = i[u] = !0;
                break
            }
            u++
        }
        if (!c) return !1
    }
    return !0
}

function im(t, e) {
    var n = t.length;
    if (e.length !== n) return !1;
    for (; n-- > 0;)
        if (t[n] !== e[n]) return !1;
    return !0
}

function sm(t, e) {
    return t.hostname === e.hostname && t.pathname === e.pathname && t.protocol === e.protocol && t.port === e.port && t.hash === e.hash && t.username === e.username && t.password === e.password
}

function Ba(t, e, n, r) {
    return (r === Gp || r === Up || r === Kp) && (t.$$typeof || e.$$typeof) ? !0 : Jp(e, r) && n.equals(t[r], e[r], r, r, t, e, n)
}
var om = "[object Arguments]",
    lm = "[object Boolean]",
    am = "[object Date]",
    cm = "[object Error]",
    um = "[object Map]",
    dm = "[object Number]",
    fm = "[object Object]",
    hm = "[object RegExp]",
    pm = "[object Set]",
    mm = "[object String]",
    gm = "[object URL]",
    ym = Array.isArray,
    js = typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView : null,
    Hs = Object.assign,
    bm = Object.prototype.toString.call.bind(Object.prototype.toString);

function vm(t) {
    var e = t.areArraysEqual,
        n = t.areDatesEqual,
        r = t.areErrorsEqual,
        i = t.areFunctionsEqual,
        s = t.areMapsEqual,
        o = t.areNumbersEqual,
        l = t.areObjectsEqual,
        a = t.arePrimitiveWrappersEqual,
        c = t.areRegExpsEqual,
        u = t.areSetsEqual,
        d = t.areTypedArraysEqual,
        f = t.areUrlsEqual,
        h = t.unknownTagComparators;
    return function(m, g, y) {
        if (m === g) return !0;
        if (m == null || g == null) return !1;
        var b = typeof m;
        if (b !== typeof g) return !1;
        if (b !== "object") return b === "number" ? o(m, g, y) : b === "function" ? i(m, g, y) : !1;
        var w = m.constructor;
        if (w !== g.constructor) return !1;
        if (w === Object) return l(m, g, y);
        if (ym(m)) return e(m, g, y);
        if (js != null && js(m)) return d(m, g, y);
        if (w === Date) return n(m, g, y);
        if (w === RegExp) return c(m, g, y);
        if (w === Map) return s(m, g, y);
        if (w === Set) return u(m, g, y);
        var x = bm(m);
        if (x === am) return n(m, g, y);
        if (x === hm) return c(m, g, y);
        if (x === um) return s(m, g, y);
        if (x === pm) return u(m, g, y);
        if (x === fm) return typeof m.then != "function" && typeof g.then != "function" && l(m, g, y);
        if (x === gm) return f(m, g, y);
        if (x === cm) return r(m, g, y);
        if (x === om) return l(m, g, y);
        if (x === lm || x === dm || x === mm) return a(m, g, y);
        if (h) {
            var T = h[x];
            if (!T) {
                var N = Hp(m);
                N && (T = h[N])
            }
            if (T) return T(m, g, y)
        }
        return !1
    }
}

function Sm(t) {
    var e = t.circular,
        n = t.createCustomConfig,
        r = t.strict,
        i = {
            areArraysEqual: r ? kt : Yp,
            areDatesEqual: Xp,
            areErrorsEqual: Zp,
            areFunctionsEqual: Qp,
            areMapsEqual: r ? Vs(_s, kt) : _s,
            areNumbersEqual: em,
            areObjectsEqual: r ? kt : tm,
            arePrimitiveWrappersEqual: nm,
            areRegExpsEqual: rm,
            areSetsEqual: r ? Vs(Ws, kt) : Ws,
            areTypedArraysEqual: r ? kt : im,
            areUrlsEqual: sm,
            unknownTagComparators: void 0
        };
    if (n && (i = Hs({}, i, n(i))), e) {
        var s = fn(i.areArraysEqual),
            o = fn(i.areMapsEqual),
            l = fn(i.areObjectsEqual),
            a = fn(i.areSetsEqual);
        i = Hs({}, i, {
            areArraysEqual: s,
            areMapsEqual: o,
            areObjectsEqual: l,
            areSetsEqual: a
        })
    }
    return i
}

function xm(t) {
    return function(e, n, r, i, s, o, l) {
        return t(e, n, l)
    }
}

function km(t) {
    var e = t.circular,
        n = t.comparator,
        r = t.createState,
        i = t.equals,
        s = t.strict;
    if (r) return function(a, c) {
        var u = r(),
            d = u.cache,
            f = d === void 0 ? e ? new WeakMap : void 0 : d,
            h = u.meta;
        return n(a, c, {
            cache: f,
            equals: i,
            meta: h,
            strict: s
        })
    };
    if (e) return function(a, c) {
        return n(a, c, {
            cache: new WeakMap,
            equals: i,
            meta: void 0,
            strict: s
        })
    };
    var o = {
        cache: void 0,
        equals: i,
        meta: void 0,
        strict: s
    };
    return function(a, c) {
        return n(a, c, o)
    }
}
var wm = Le(),
    Eg = Le({
        strict: !0
    }),
    Tg = Le({
        circular: !0
    }),
    Ng = Le({
        circular: !0,
        strict: !0
    }),
    Og = Le({
        createInternalComparator: function() {
            return Ze
        }
    }),
    Dg = Le({
        strict: !0,
        createInternalComparator: function() {
            return Ze
        }
    }),
    Ag = Le({
        circular: !0,
        createInternalComparator: function() {
            return Ze
        }
    }),
    Rg = Le({
        circular: !0,
        createInternalComparator: function() {
            return Ze
        },
        strict: !0
    });

function Le(t) {
    t === void 0 && (t = {});
    var e = t.circular,
        n = e === void 0 ? !1 : e,
        r = t.createInternalComparator,
        i = t.createState,
        s = t.strict,
        o = s === void 0 ? !1 : s,
        l = vm(Sm(t));
    return km({
        circular: n,
        comparator: l,
        createState: i,
        equals: r ? r(l) : xm(l),
        strict: o
    })
}
var Mm = Wr(Ka(), 1),
    Cm = (...t) => e => {
        t.forEach(n => {
            typeof n == "function" ? n(e) : n && (n.current = e)
        })
    },
    Em = ({
        contentComponent: t
    }) => {
        const e = (0, Pa.useSyncExternalStore)(t.subscribe, t.getSnapshot, t.getServerSnapshot);
        return (0, fe.jsx)(fe.Fragment, {
            children: Object.values(e)
        })
    };

function Tm() {
    const t = new Set;
    let e = {};
    return {
        subscribe(n) {
            return t.add(n), () => {
                t.delete(n)
            }
        },
        getSnapshot() {
            return e
        },
        getServerSnapshot() {
            return e
        },
        setRenderer(n, r) {
            e = { ...e,
                [n]: za.createPortal(r.reactElement, r.element, n)
            }, t.forEach(i => i())
        },
        removeRenderer(n) {
            const r = { ...e
            };
            delete r[n], e = r, t.forEach(i => i())
        }
    }
}
var Nm = class extends z.Component {
        constructor(t) {
            var e;
            super(t), this.editorContentRef = z.createRef(), this.initialized = !1, this.state = {
                hasContentComponentInitialized: !!((e = t.editor) != null && e.contentComponent)
            }
        }
        componentDidMount() {
            this.init()
        }
        componentDidUpdate() {
            this.init()
        }
        init() {
            var t;
            const e = this.props.editor;
            if (e && !e.isDestroyed && ((t = e.view.dom) != null && t.parentNode)) {
                if (e.contentComponent) return;
                const n = this.editorContentRef.current;
                n.append(...e.view.dom.parentNode.childNodes), e.setOptions({
                    element: n
                }), e.contentComponent = Tm(), this.state.hasContentComponentInitialized || (this.unsubscribeToContentComponent = e.contentComponent.subscribe(() => {
                    this.setState(r => r.hasContentComponentInitialized ? r : {
                        hasContentComponentInitialized: !0
                    }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent()
                })), e.createNodeViews(), this.initialized = !0
            }
        }
        componentWillUnmount() {
            var t;
            const e = this.props.editor;
            if (e) {
                this.initialized = !1, e.isDestroyed || e.view.setProps({
                    nodeViews: {}
                }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent(), e.contentComponent = null;
                try {
                    if (!((t = e.view.dom) != null && t.parentNode)) return;
                    const n = document.createElement("div");
                    n.append(...e.view.dom.parentNode.childNodes), e.setOptions({
                        element: n
                    })
                } catch {}
            }
        }
        render() {
            const {
                editor: t,
                innerRef: e,
                ...n
            } = this.props;
            return (0, fe.jsxs)(fe.Fragment, {
                children: [(0, fe.jsx)("div", {
                    ref: Cm(e, this.editorContentRef),
                    ...n
                }), t ? .contentComponent && (0, fe.jsx)(Em, {
                    contentComponent: t.contentComponent
                })]
            })
        }
    },
    Om = (0, z.forwardRef)((t, e) => {
        const n = z.useMemo(() => Math.floor(Math.random() * 4294967295).toString(), [t.editor]);
        return z.createElement(Nm, {
            key: n,
            innerRef: e,
            ...t
        })
    }),
    Dm = z.memo(Om),
    Am = typeof window < "u" ? z.useLayoutEffect : z.useEffect,
    Rm = class {
        constructor(t) {
            this.transactionNumber = 0, this.lastTransactionNumber = 0, this.subscribers = new Set, this.editor = t, this.lastSnapshot = {
                editor: t,
                transactionNumber: 0
            }, this.getSnapshot = this.getSnapshot.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.watch = this.watch.bind(this), this.subscribe = this.subscribe.bind(this)
        }
        getSnapshot() {
            return this.transactionNumber === this.lastTransactionNumber ? this.lastSnapshot : (this.lastTransactionNumber = this.transactionNumber, this.lastSnapshot = {
                editor: this.editor,
                transactionNumber: this.transactionNumber
            }, this.lastSnapshot)
        }
        getServerSnapshot() {
            return {
                editor: null,
                transactionNumber: 0
            }
        }
        subscribe(t) {
            return this.subscribers.add(t), () => {
                this.subscribers.delete(t)
            }
        }
        watch(t) {
            if (this.editor = t, this.editor) {
                const e = () => {
                        this.transactionNumber += 1, this.subscribers.forEach(r => r())
                    },
                    n = this.editor;
                return n.on("transaction", e), () => {
                    n.off("transaction", e)
                }
            }
        }
    };

function Im(t) {
    var e;
    const [n] = (0, z.useState)(() => new Rm(t.editor)), r = (0, Mm.useSyncExternalStoreWithSelector)(n.subscribe, n.getSnapshot, n.getServerSnapshot, t.selector, (e = t.equalityFn) != null ? e : wm);
    return Am(() => n.watch(t.editor), [t.editor, n]), (0, z.useDebugValue)(r), r
}
var Js = !1,
    _r = typeof window > "u",
    Pm = _r || !!(typeof window < "u" && window.next),
    zm = class $a {
        constructor(e) {
            this.editor = null, this.subscriptions = new Set, this.isComponentMounted = !1, this.previousDeps = null, this.instanceId = "", this.options = e, this.subscriptions = new Set, this.setEditor(this.getInitialEditor()), this.scheduleDestroy(), this.getEditor = this.getEditor.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.subscribe = this.subscribe.bind(this), this.refreshEditorInstance = this.refreshEditorInstance.bind(this), this.scheduleDestroy = this.scheduleDestroy.bind(this), this.onRender = this.onRender.bind(this), this.createEditor = this.createEditor.bind(this)
        }
        setEditor(e) {
            this.editor = e, this.instanceId = Math.random().toString(36).slice(2, 9), this.subscriptions.forEach(n => n())
        }
        getInitialEditor() {
            if (this.options.current.immediatelyRender === void 0) {
                if (_r || Pm) {
                    if (Js) throw new Error("Tiptap Error: SSR has been detected, please set `immediatelyRender` explicitly to `false` to avoid hydration mismatches.");
                    return null
                }
                return this.createEditor()
            }
            if (this.options.current.immediatelyRender && _r && Js) throw new Error("Tiptap Error: SSR has been detected, and `immediatelyRender` has been set to `true` this is an unsupported configuration that may result in errors, explicitly set `immediatelyRender` to `false` to avoid hydration mismatches.");
            return this.options.current.immediatelyRender ? this.createEditor() : null
        }
        createEditor() {
            const e = { ...this.options.current,
                onBeforeCreate: (...n) => {
                    var r, i;
                    return (i = (r = this.options.current).onBeforeCreate) == null ? void 0 : i.call(r, ...n)
                },
                onBlur: (...n) => {
                    var r, i;
                    return (i = (r = this.options.current).onBlur) == null ? void 0 : i.call(r, ...n)
                },
                onCreate: (...n) => {
                    var r, i;
                    return (i = (r = this.options.current).onCreate) == null ? void 0 : i.call(r, ...n)
                },
                onDestroy: (...n) => {
                    var r, i;
                    return (i = (r = this.options.current).onDestroy) == null ? void 0 : i.call(r, ...n)
                },
                onFocus: (...n) => {
                    var r, i;
                    return (i = (r = this.options.current).onFocus) == null ? void 0 : i.call(r, ...n)
                },
                onSelectionUpdate: (...n) => {
                    var r, i;
                    return (i = (r = this.options.current).onSelectionUpdate) == null ? void 0 : i.call(r, ...n)
                },
                onTransaction: (...n) => {
                    var r, i;
                    return (i = (r = this.options.current).onTransaction) == null ? void 0 : i.call(r, ...n)
                },
                onUpdate: (...n) => {
                    var r, i;
                    return (i = (r = this.options.current).onUpdate) == null ? void 0 : i.call(r, ...n)
                },
                onContentError: (...n) => {
                    var r, i;
                    return (i = (r = this.options.current).onContentError) == null ? void 0 : i.call(r, ...n)
                },
                onDrop: (...n) => {
                    var r, i;
                    return (i = (r = this.options.current).onDrop) == null ? void 0 : i.call(r, ...n)
                },
                onPaste: (...n) => {
                    var r, i;
                    return (i = (r = this.options.current).onPaste) == null ? void 0 : i.call(r, ...n)
                },
                onDelete: (...n) => {
                    var r, i;
                    return (i = (r = this.options.current).onDelete) == null ? void 0 : i.call(r, ...n)
                }
            };
            return new Jh(e)
        }
        getEditor() {
            return this.editor
        }
        getServerSnapshot() {
            return null
        }
        subscribe(e) {
            return this.subscriptions.add(e), () => {
                this.subscriptions.delete(e)
            }
        }
        static compareOptions(e, n) {
            return Object.keys(e).every(r => ["onCreate", "onBeforeCreate", "onDestroy", "onUpdate", "onTransaction", "onFocus", "onBlur", "onSelectionUpdate", "onContentError", "onDrop", "onPaste"].includes(r) ? !0 : r === "extensions" && e.extensions && n.extensions ? e.extensions.length !== n.extensions.length ? !1 : e.extensions.every((i, s) => {
                var o;
                return i === ((o = n.extensions) == null ? void 0 : o[s])
            }) : e[r] === n[r])
        }
        onRender(e) {
            return () => (this.isComponentMounted = !0, clearTimeout(this.scheduledDestructionTimeout), this.editor && !this.editor.isDestroyed && e.length === 0 ? $a.compareOptions(this.options.current, this.editor.options) || this.editor.setOptions({ ...this.options.current,
                editable: this.editor.isEditable
            }) : this.refreshEditorInstance(e), () => {
                this.isComponentMounted = !1, this.scheduleDestroy()
            })
        }
        refreshEditorInstance(e) {
            if (this.editor && !this.editor.isDestroyed) {
                if (this.previousDeps === null) {
                    this.previousDeps = e;
                    return
                }
                if (this.previousDeps.length === e.length && this.previousDeps.every((n, r) => n === e[r])) return
            }
            this.editor && !this.editor.isDestroyed && this.editor.destroy(), this.setEditor(this.createEditor()), this.previousDeps = e
        }
        scheduleDestroy() {
            const e = this.instanceId,
                n = this.editor;
            this.scheduledDestructionTimeout = setTimeout(() => {
                if (this.isComponentMounted && this.instanceId === e) {
                    n && n.setOptions(this.options.current);
                    return
                }
                n && !n.isDestroyed && (n.destroy(), this.instanceId === e && this.setEditor(null))
            }, 1)
        }
    };

function Ig(t = {}, e = []) {
    const n = (0, z.useRef)(t);
    n.current = t;
    const [r] = (0, z.useState)(() => new zm(n)), i = (0, Pa.useSyncExternalStore)(r.subscribe, r.getEditor, r.getServerSnapshot);
    return (0, z.useDebugValue)(i), (0, z.useEffect)(r.onRender(e)), Im({
        editor: i,
        selector: ({
            transactionNumber: s
        }) => t.shouldRerenderOnTransaction === !1 || t.shouldRerenderOnTransaction === void 0 ? null : t.immediatelyRender && s === 0 ? 0 : s + 1
    }), i
}
var Va = (0, z.createContext)({
        editor: null
    }),
    Pg = Va.Consumer,
    Fa = (0, z.createContext)({
        onDragStart: () => {},
        nodeViewContentChildren: void 0,
        nodeViewContentRef: () => {}
    }),
    Bm = () => (0, z.useContext)(Fa),
    zg = z.forwardRef((t, e) => {
        const {
            onDragStart: n
        } = Bm(), r = t.as || "div";
        return (0, fe.jsx)(r, { ...t,
            ref: e,
            "data-node-view-wrapper": "",
            onDragStart: n,
            style: {
                whiteSpace: "normal",
                ...t.style
            }
        })
    });

function Ks(t) {
    return !!(typeof t == "function" && t.prototype && t.prototype.isReactComponent)
}

function Us(t) {
    return !!(typeof t == "object" && t.$$typeof && (t.$$typeof.toString() === "Symbol(react.forward_ref)" || t.$$typeof.description === "react.forward_ref"))
}

function $m(t) {
    return !!(typeof t == "object" && t.$$typeof && (t.$$typeof.toString() === "Symbol(react.memo)" || t.$$typeof.description === "react.memo"))
}

function Vm(t) {
    if (Ks(t) || Us(t)) return !0;
    if ($m(t)) {
        const e = t.type;
        if (e) return Ks(e) || Us(e)
    }
    return !1
}

function Fm() {
    try {
        if (z.version) return parseInt(z.version.split(".")[0], 10) >= 19
    } catch {}
    return !1
}
var Lm = class {
        constructor(t, {
            editor: e,
            props: n = {},
            as: r = "div",
            className: i = ""
        }) {
            this.ref = null, this.destroyed = !1, this.id = Math.floor(Math.random() * 4294967295).toString(), this.component = t, this.editor = e, this.props = n, this.element = document.createElement(r), this.element.classList.add("react-renderer"), i && this.element.classList.add(...i.split(" ")), this.editor.isInitialized ? (0, za.flushSync)(() => {
                this.render()
            }) : queueMicrotask(() => {
                this.destroyed || this.render()
            })
        }
        render() {
            var t;
            if (this.destroyed) return;
            const e = this.component,
                n = this.props,
                r = this.editor,
                i = Fm(),
                s = Vm(e),
                o = { ...n
                };
            o.ref && !(i || s) && delete o.ref, !o.ref && (i || s) && (o.ref = l => {
                this.ref = l
            }), this.reactElement = (0, fe.jsx)(e, { ...o
            }), (t = r ? .contentComponent) == null || t.setRenderer(this.id, this)
        }
        updateProps(t = {}) {
            this.destroyed || (this.props = { ...this.props,
                ...t
            }, this.render())
        }
        destroy() {
            var t;
            this.destroyed = !0;
            const e = this.editor;
            (t = e ? .contentComponent) == null || t.removeRenderer(this.id);
            try {
                this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element)
            } catch {}
        }
        updateAttributes(t) {
            Object.keys(t).forEach(e => {
                this.element.setAttribute(e, t[e])
            })
        }
    },
    Bg = z.createContext({
        markViewContentRef: () => {}
    }),
    qm = class extends sp {
        constructor(t, e, n) {
            if (super(t, e, n), this.selectionRafId = null, this.cachedExtensionWithSyncedStorage = null, !this.node.isLeaf) {
                this.options.contentDOMElementTag ? this.contentDOMElement = document.createElement(this.options.contentDOMElementTag) : this.contentDOMElement = document.createElement(this.node.isInline ? "span" : "div"), this.contentDOMElement.dataset.nodeViewContentReact = "", this.contentDOMElement.dataset.nodeViewWrapper = "", this.contentDOMElement.style.whiteSpace = "inherit";
                const r = this.dom.querySelector("[data-node-view-content]");
                if (!r) return;
                r.appendChild(this.contentDOMElement)
            }
        }
        get extensionWithSyncedStorage() {
            if (!this.cachedExtensionWithSyncedStorage) {
                const t = this.editor,
                    e = this.extension;
                this.cachedExtensionWithSyncedStorage = new Proxy(e, {
                    get(n, r, i) {
                        var s;
                        return r === "storage" ? (s = t.storage[e.name]) != null ? s : {} : Reflect.get(n, r, i)
                    }
                })
            }
            return this.cachedExtensionWithSyncedStorage
        }
        mount() {
            const t = {
                editor: this.editor,
                node: this.node,
                decorations: this.decorations,
                innerDecorations: this.innerDecorations,
                view: this.view,
                selected: !1,
                extension: this.extensionWithSyncedStorage,
                HTMLAttributes: this.HTMLAttributes,
                getPos: () => this.getPos(),
                updateAttributes: (a = {}) => this.updateAttributes(a),
                deleteNode: () => this.deleteNode(),
                ref: (0, z.createRef)()
            };
            if (!this.component.displayName) {
                const a = c => c.charAt(0).toUpperCase() + c.substring(1);
                this.component.displayName = a(this.extension.name)
            }
            const r = {
                    onDragStart: this.onDragStart.bind(this),
                    nodeViewContentRef: a => {
                        a && this.contentDOMElement && a.firstChild !== this.contentDOMElement && (a.hasAttribute("data-node-view-wrapper") && a.removeAttribute("data-node-view-wrapper"), a.appendChild(this.contentDOMElement))
                    }
                },
                i = this.component,
                s = (0, z.memo)(a => (0, fe.jsx)(Fa.Provider, {
                    value: r,
                    children: (0, z.createElement)(i, a)
                }));
            s.displayName = "ReactNodeView";
            let o = this.node.isInline ? "span" : "div";
            this.options.as && (o = this.options.as);
            const {
                className: l = ""
            } = this.options;
            this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this), this.renderer = new Lm(s, {
                editor: this.editor,
                props: t,
                as: o,
                className: `node-${this.node.type.name} ${l}`.trim()
            }), this.editor.on("selectionUpdate", this.handleSelectionUpdate), this.updateElementAttributes()
        }
        get dom() {
            var t;
            if (this.renderer.element.firstElementChild && !((t = this.renderer.element.firstElementChild) != null && t.hasAttribute("data-node-view-wrapper"))) throw Error("Please use the NodeViewWrapper component for your node view.");
            return this.renderer.element
        }
        get contentDOM() {
            return this.node.isLeaf ? null : this.contentDOMElement
        }
        handleSelectionUpdate() {
            this.selectionRafId && (cancelAnimationFrame(this.selectionRafId), this.selectionRafId = null), this.selectionRafId = requestAnimationFrame(() => {
                this.selectionRafId = null;
                const {
                    from: t,
                    to: e
                } = this.editor.state.selection, n = this.getPos();
                if (typeof n == "number")
                    if (t <= n && e >= n + this.node.nodeSize) {
                        if (this.renderer.props.selected) return;
                        this.selectNode()
                    } else {
                        if (!this.renderer.props.selected) return;
                        this.deselectNode()
                    }
            })
        }
        update(t, e, n) {
            const r = i => {
                this.renderer.updateProps(i), typeof this.options.attrs == "function" && this.updateElementAttributes()
            };
            if (t.type !== this.node.type) return !1;
            if (typeof this.options.update == "function") {
                const i = this.node,
                    s = this.decorations,
                    o = this.innerDecorations;
                return this.node = t, this.decorations = e, this.innerDecorations = n, this.options.update({
                    oldNode: i,
                    oldDecorations: s,
                    newNode: t,
                    newDecorations: e,
                    oldInnerDecorations: o,
                    innerDecorations: n,
                    updateProps: () => r({
                        node: t,
                        decorations: e,
                        innerDecorations: n,
                        extension: this.extensionWithSyncedStorage
                    })
                })
            }
            return t === this.node && this.decorations === e && this.innerDecorations === n || (this.node = t, this.decorations = e, this.innerDecorations = n, r({
                node: t,
                decorations: e,
                innerDecorations: n,
                extension: this.extensionWithSyncedStorage
            })), !0
        }
        selectNode() {
            this.renderer.updateProps({
                selected: !0
            }), this.renderer.element.classList.add("ProseMirror-selectednode")
        }
        deselectNode() {
            this.renderer.updateProps({
                selected: !1
            }), this.renderer.element.classList.remove("ProseMirror-selectednode")
        }
        destroy() {
            this.renderer.destroy(), this.editor.off("selectionUpdate", this.handleSelectionUpdate), this.contentDOMElement = null, this.selectionRafId && (cancelAnimationFrame(this.selectionRafId), this.selectionRafId = null)
        }
        updateElementAttributes() {
            if (this.options.attrs) {
                let t = {};
                if (typeof this.options.attrs == "function") {
                    const e = this.editor.extensionManager.attributes,
                        n = Gt(this.node, e);
                    t = this.options.attrs({
                        node: this.node,
                        HTMLAttributes: n
                    })
                } else t = this.options.attrs;
                this.renderer.updateAttributes(t)
            }
        }
    };

function $g(t, e) {
    return n => n.editor.contentComponent ? new qm(t, n, e) : {}
}
var bi = (0, z.createContext)({
    get editor() {
        throw new Error("useTiptap must be used within a <Tiptap> provider")
    }
});
bi.displayName = "TiptapContext";
var _m = () => (0, z.useContext)(bi);

function La({
    editor: t,
    instance: e,
    children: n
}) {
    const r = t ? ? e;
    if (!r) throw new Error("Tiptap: An editor instance is required. Pass a non-null `editor` prop.");
    const i = (0, z.useMemo)(() => ({
            editor: r
        }), [r]),
        s = (0, z.useMemo)(() => ({
            editor: r
        }), [r]);
    return (0, fe.jsx)(Va.Provider, {
        value: s,
        children: (0, fe.jsx)(bi.Provider, {
            value: i,
            children: n
        })
    })
}
La.displayName = "Tiptap";

function qa({ ...t
}) {
    const {
        editor: e
    } = _m();
    return (0, fe.jsx)(Dm, {
        editor: e,
        ...t
    })
}
qa.displayName = "Tiptap.Content";
var Vg = Object.assign(La, {
    Content: qa
});

function Wm(t) {
    var e;
    const {
        char: n,
        allowSpaces: r,
        allowToIncludeChar: i,
        allowedPrefixes: s,
        startOfLine: o,
        $position: l
    } = t, a = r && !i, c = Gh(n), u = new RegExp(`\\s${c}$`), d = o ? "^" : "", f = i ? "" : c, h = a ? new RegExp(`${d}${c}.*?(?=\\s${f}|$)`, "gm") : new RegExp(`${d}(?:^)?${c}[^\\s${f}]*`, "gm"), p = ((e = l.nodeBefore) == null ? void 0 : e.isText) && l.nodeBefore.text;
    if (!p) return null;
    const m = l.pos - p.length,
        g = Array.from(p.matchAll(h)).pop();
    if (!g || g.input === void 0 || g.index === void 0) return null;
    const y = g.input.slice(Math.max(0, g.index - 1), g.index),
        b = new RegExp(`^[${s?.join("")}\0]?$`).test(y);
    if (s !== null && !b) return null;
    const w = m + g.index;
    let x = w + g[0].length;
    return a && u.test(p.slice(x - 1, x + 1)) && (g[0] += " ", x += 1), w < l.pos && x >= l.pos ? {
        range: {
            from: w,
            to: x
        },
        query: g[0].slice(n.length),
        text: g[0]
    } : null
}
var _a = new Q("suggestion");

function jm({
    pluginKey: t = _a,
    editor: e,
    char: n = "@",
    allowSpaces: r = !1,
    allowToIncludeChar: i = !1,
    allowedPrefixes: s = [" "],
    startOfLine: o = !1,
    decorationTag: l = "span",
    decorationClass: a = "suggestion",
    decorationContent: c = "",
    decorationEmptyClass: u = "is-empty",
    command: d = () => null,
    items: f = () => [],
    render: h = () => ({}),
    allow: p = () => !0,
    findSuggestionMatch: m = Wm,
    shouldShow: g
}) {
    let y;
    const b = h ? .(),
        w = () => {
            const S = e.state.selection.$anchor.pos,
                {
                    top: M,
                    right: O,
                    bottom: V,
                    left: I
                } = e.view.coordsAtPos(S);
            try {
                return new DOMRect(I, M, O - I, V - M)
            } catch {
                return null
            }
        },
        x = (S, M) => M ? () => {
            const O = t.getState(e.state),
                V = O ? .decorationId,
                I = S.dom.querySelector(`[data-decoration-id="${V}"]`);
            return I ? .getBoundingClientRect() || null
        } : w;

    function T(S, M) {
        var O;
        try {
            const I = t.getState(S.state),
                G = I ? .decorationId ? S.dom.querySelector(`[data-decoration-id="${I.decorationId}"]`) : null,
                ie = {
                    editor: e,
                    range: I ? .range || {
                        from: 0,
                        to: 0
                    },
                    query: I ? .query || null,
                    text: I ? .text || null,
                    items: [],
                    command: H => d({
                        editor: e,
                        range: I ? .range || {
                            from: 0,
                            to: 0
                        },
                        props: H
                    }),
                    decorationNode: G,
                    clientRect: x(S, G)
                };
            (O = b ? .onExit) == null || O.call(b, ie)
        } catch {}
        const V = S.state.tr.setMeta(M, {
            exit: !0
        });
        S.dispatch(V)
    }
    const N = new F({
        key: t,
        view() {
            return {
                update: async (S, M) => {
                    var O, V, I, G, ie, H, $;
                    const R = (O = this.key) == null ? void 0 : O.getState(M),
                        ce = (V = this.key) == null ? void 0 : V.getState(S.state),
                        se = R.active && ce.active && R.range.from !== ce.range.from,
                        Qe = !R.active && ce.active,
                        vi = R.active && !ce.active,
                        Un = !Qe && !vi && R.query !== ce.query,
                        vt = Qe || se && Un,
                        rn = Un || se,
                        Gn = vi || se && Un;
                    if (!vt && !rn && !Gn) return;
                    const et = Gn && !vt ? R : ce,
                        Si = S.dom.querySelector(`[data-decoration-id="${et.decorationId}"]`);
                    y = {
                        editor: e,
                        range: et.range,
                        query: et.query,
                        text: et.text,
                        items: [],
                        command: Wa => d({
                            editor: e,
                            range: et.range,
                            props: Wa
                        }),
                        decorationNode: Si,
                        clientRect: x(S, Si)
                    }, vt && ((I = b ? .onBeforeStart) == null || I.call(b, y)), rn && ((G = b ? .onBeforeUpdate) == null || G.call(b, y)), (rn || vt) && (y.items = await f({
                        editor: e,
                        query: et.query
                    })), Gn && ((ie = b ? .onExit) == null || ie.call(b, y)), rn && ((H = b ? .onUpdate) == null || H.call(b, y)), vt && (($ = b ? .onStart) == null || $.call(b, y))
                },
                destroy: () => {
                    var S;
                    y && ((S = b ? .onExit) == null || S.call(b, y))
                }
            }
        },
        state: {
            init() {
                return {
                    active: !1,
                    range: {
                        from: 0,
                        to: 0
                    },
                    query: null,
                    text: null,
                    composing: !1
                }
            },
            apply(S, M, O, V) {
                const {
                    isEditable: I
                } = e, {
                    composing: G
                } = e.view, {
                    selection: ie
                } = S, {
                    empty: H,
                    from: $
                } = ie, R = { ...M
                }, ce = S.getMeta(t);
                if (ce && ce.exit) return R.active = !1, R.decorationId = null, R.range = {
                    from: 0,
                    to: 0
                }, R.query = null, R.text = null, R;
                if (R.composing = G, I && (H || e.view.composing)) {
                    ($ < M.range.from || $ > M.range.to) && !G && !M.composing && (R.active = !1);
                    const se = m({
                            char: n,
                            allowSpaces: r,
                            allowToIncludeChar: i,
                            allowedPrefixes: s,
                            startOfLine: o,
                            $position: ie.$from
                        }),
                        Qe = `id_${Math.floor(Math.random()*4294967295)}`;
                    se && p({
                        editor: e,
                        state: V,
                        range: se.range,
                        isActive: M.active
                    }) && (!g || g({
                        editor: e,
                        range: se.range,
                        query: se.query,
                        text: se.text,
                        transaction: S
                    })) ? (R.active = !0, R.decorationId = M.decorationId ? M.decorationId : Qe, R.range = se.range, R.query = se.query, R.text = se.text) : R.active = !1
                } else R.active = !1;
                return R.active || (R.decorationId = null, R.range = {
                    from: 0,
                    to: 0
                }, R.query = null, R.text = null), R
            }
        },
        props: {
            handleKeyDown(S, M) {
                var O, V, I, G;
                const {
                    active: ie,
                    range: H
                } = N.getState(S.state);
                if (!ie) return !1;
                if (M.key === "Escape" || M.key === "Esc") {
                    const $ = N.getState(S.state),
                        R = (O = y ? .decorationNode) != null ? O : null,
                        ce = R ? ? ($ ? .decorationId ? S.dom.querySelector(`[data-decoration-id="${$.decorationId}"]`) : null);
                    if ((V = b ? .onKeyDown) != null && V.call(b, {
                            view: S,
                            event: M,
                            range: $.range
                        })) return !0;
                    const se = {
                        editor: e,
                        range: $.range,
                        query: $.query,
                        text: $.text,
                        items: [],
                        command: Qe => d({
                            editor: e,
                            range: $.range,
                            props: Qe
                        }),
                        decorationNode: ce,
                        clientRect: ce ? () => ce.getBoundingClientRect() || null : null
                    };
                    return (I = b ? .onExit) == null || I.call(b, se), T(S, t), !0
                }
                return ((G = b ? .onKeyDown) == null ? void 0 : G.call(b, {
                    view: S,
                    event: M,
                    range: H
                })) || !1
            },
            decorations(S) {
                const {
                    active: M,
                    range: O,
                    decorationId: V,
                    query: I
                } = N.getState(S);
                if (!M) return null;
                const G = !I ? .length,
                    ie = [a];
                return G && ie.push(u), L.create(S.doc, [ge.inline(O.from, O.to, {
                    nodeName: l,
                    class: ie.join(" "),
                    "data-decoration-id": V,
                    "data-decoration-content": c
                })])
            }
        }
    });
    return N
}

function Fg(t, e = _a) {
    const n = t.state.tr.setMeta(e, {
        exit: !0
    });
    t.dispatch(n)
}
var Lg = jm,
    Gs = (t, e) => {
        if (t === "slot") return 0;
        if (t instanceof Function) return t(e);
        const {
            children: n,
            ...r
        } = e ? ? {};
        if (t === "svg") throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
        return [t, r, n]
    },
    Hm = /^\s*>\s$/,
    Jm = nn.create({
        name: "blockquote",
        addOptions() {
            return {
                HTMLAttributes: {}
            }
        },
        content: "block+",
        group: "block",
        defining: !0,
        parseHTML() {
            return [{
                tag: "blockquote"
            }]
        },
        renderHTML({
            HTMLAttributes: t
        }) {
            return Gs("blockquote", { ...jn(this.options.HTMLAttributes, t),
                children: Gs("slot", {})
            })
        },
        parseMarkdown: (t, e) => e.createNode("blockquote", void 0, e.parseChildren(t.tokens || [])),
        renderMarkdown: (t, e) => {
            if (!t.content) return "";
            const n = ">",
                r = [];
            return t.content.forEach(i => {
                const s = e.renderChildren([i]).split(`
`).map(o => o.trim() === "" ? n : `${n} ${o}`);
                r.push(s.join(`
`))
            }), r.join(`
${n}
`)
        },
        addCommands() {
            return {
                setBlockquote: () => ({
                    commands: t
                }) => t.wrapIn(this.name),
                toggleBlockquote: () => ({
                    commands: t
                }) => t.toggleWrap(this.name),
                unsetBlockquote: () => ({
                    commands: t
                }) => t.lift(this.name)
            }
        },
        addKeyboardShortcuts() {
            return {
                "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
            }
        },
        addInputRules() {
            return [Kh({
                find: Hm,
                type: this.type
            })]
        }
    }),
    qg = Jm;
export {
    tg as $, ug as A, A as At, Hl as B, fg as C, L as Ct, lp as D, Q as Dt, hp as E, F as Et, nn as F, ye as Ft, Zm as G, Xm as H, lg as I, k as It, nh as J, Qm as K, P as L, j as M, Mo as Mt, Hn as N, zo as Nt, dg as O, D as Ot, zh as P, v as Pt, ia as Q, ag as R, Vp as S, ge as St, ae as T, E as Tt, Xf as U, _h as V, di as W, C as X, ra as Y, ui as Z, wg as _, Kh as _t, Lg as a, pi as at, Sg as b, Xd as bt, $g as c, Ut as ct, Im as d, cg as dt, W as et, wm as f, jn as ft, Mg as g, og as gt, Lp as h, rp as ht, Fg as i, ta as it, Jh as j, Hr as jt, op as k, Wc as kt, Lm as l, lh as lt, Cg as m, np as mt, qg as n, hi as nt, Dm as o, ng as ot, qp as p, sg as pt, eg as q, Gs as r, na as rt, zg as s, rg as st, Jm as t, Gt as tt, Ig as u, ig as ut, yg as v, jl as vt, mg as w, Uc as wt, kg as x, An as xt, vg as y, $e as yt, Gf as z
};
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b0779b53-ba68-4864-831c-b85805e0105b", e._sentryDebugIdIdentifier = "sentry-dbid-b0779b53-ba68-4864-831c-b85805e0105b")
    })()
} catch {}
var Ee = 365.2425,
    Ce = Math.pow(10, 8) * 24 * 60 * 60 * 1e3,
    lr = -Ce,
    te = 6048e5,
    Fe = 864e5,
    C = 6e4,
    $ = 36e5,
    qe = 1e3,
    Re = 525600,
    J = 43200,
    ge = 1440,
    Le = 3600,
    be = Le * 24,
    fr = be * 7,
    Qe = be * Ee,
    Xe = Qe / 12,
    hr = Xe * 3,
    le = Symbol.for("constructDateFrom");

function f(e, n) {
    return typeof e == "function" ? e(n) : e && typeof e == "object" && le in e ? e[le](n) : e instanceof Date ? new e.constructor(n) : new Date(n)
}

function l(e, n) {
    return f(n || e, e)
}

function ne(e, n, t) {
    const r = l(e, t ? .in);
    return isNaN(n) ? f(t ? .in || e, NaN) : (n && r.setDate(r.getDate() + n), r)
}

function pe(e, n, t) {
    const r = l(e, t ? .in);
    if (isNaN(n)) return f(t ? .in || e, NaN);
    if (!n) return r;
    const a = r.getDate(),
        s = f(t ? .in || e, r.getTime());
    return s.setMonth(r.getMonth() + n + 1, 0), a >= s.getDate() ? s : (r.setFullYear(s.getFullYear(), s.getMonth(), a), r)
}

function Ae(e, n, t) {
    return f(t ? .in || e, +l(e) + n)
}

function $e(e, n, t) {
    return Ae(e, n * $, t)
}
var Be = {};

function I() {
    return Be
}

function P(e, n) {
    const t = I(),
        r = n ? .weekStartsOn ? ? n ? .locale ? .options ? .weekStartsOn ? ? t.weekStartsOn ? ? t.locale ? .options ? .weekStartsOn ? ? 0,
        a = l(e, n ? .in),
        s = a.getDay(),
        i = (s < r ? 7 : 0) + s - r;
    return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a
}

function q(e, n) {
    return P(e, { ...n,
        weekStartsOn: 1
    })
}

function xe(e, n) {
    const t = l(e, n ? .in),
        r = t.getFullYear(),
        a = f(t, 0);
    a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
    const s = q(a),
        i = f(t, 0);
    i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
    const o = q(i);
    return t.getTime() >= s.getTime() ? r + 1 : t.getTime() >= o.getTime() ? r : r - 1
}

function W(e) {
    const n = l(e),
        t = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
    return t.setUTCFullYear(n.getFullYear()), +e - +t
}

function k(e, ...n) {
    const t = f.bind(null, e || n.find(r => typeof r == "object"));
    return n.map(t)
}

function j(e, n) {
    const t = l(e, n ? .in);
    return t.setHours(0, 0, 0, 0), t
}

function re(e, n, t) {
    const [r, a] = k(t ? .in, e, n), s = j(r), i = j(a), o = +s - W(s), u = +i - W(i);
    return Math.round((o - u) / Fe)
}

function Ge(e, n) {
    const t = xe(e, n),
        r = f(n ? .in || e, 0);
    return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), q(r)
}

function De(e, n, t) {
    const r = l(e, t ? .in);
    return r.setTime(r.getTime() + n * C), r
}

function mr(e, n, t) {
    return pe(e, n * 12, t)
}

function wr(e, n) {
    let t, r = n ? .in;
    return e.forEach(a => {
        !r && typeof a == "object" && (r = f.bind(null, a));
        const s = l(a, r);
        (!t || t < s || isNaN(+s)) && (t = s)
    }), f(r, t || NaN)
}

function yr(e, n) {
    let t, r = n ? .in;
    return e.forEach(a => {
        !r && typeof a == "object" && (r = f.bind(null, a));
        const s = l(a, r);
        (!t || t > s || isNaN(+s)) && (t = s)
    }), f(r, t || NaN)
}

function A(e, n) {
    const t = +l(e) - +l(n);
    return t < 0 ? -1 : t > 0 ? 1 : t
}

function B(e) {
    return f(e, Date.now())
}

function ve(e, n, t) {
    const [r, a] = k(t ? .in, e, n);
    return +j(r) == +j(a)
}

function je(e) {
    return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]"
}

function Ue(e) {
    return !(!je(e) && typeof e != "number" || isNaN(+l(e)))
}

function ze(e, n, t) {
    const [r, a] = k(t ? .in, e, n), s = r.getFullYear() - a.getFullYear(), i = r.getMonth() - a.getMonth();
    return s * 12 + i
}

function gr(e, n, t) {
    const [r, a] = k(t ? .in, e, n), s = P(r, t), i = P(a, t), o = +s - W(s), u = +i - W(i);
    return Math.round((o - u) / te)
}

function br(e, n, t) {
    const [r, a] = k(t ? .in, e, n), s = fe(r, a), i = Math.abs(re(r, a));
    r.setDate(r.getDate() - s * i);
    const o = s * (i - +(fe(r, a) === -s));
    return o === 0 ? 0 : o
}

function fe(e, n) {
    const t = e.getFullYear() - n.getFullYear() || e.getMonth() - n.getMonth() || e.getDate() - n.getDate() || e.getHours() - n.getHours() || e.getMinutes() - n.getMinutes() || e.getSeconds() - n.getSeconds() || e.getMilliseconds() - n.getMilliseconds();
    return t < 0 ? -1 : t > 0 ? 1 : t
}

function z(e) {
    return n => {
        const t = (e ? Math[e] : Math.trunc)(n);
        return t === 0 ? 0 : t
    }
}

function pr(e, n, t) {
    const [r, a] = k(t ? .in, e, n), s = (+r - +a) / $;
    return z(t ? .roundingMethod)(s)
}

function Me(e, n) {
    return +l(e) - +l(n)
}

function xr(e, n, t) {
    const r = Me(e, n) / C;
    return z(t ? .roundingMethod)(r)
}

function Ve(e, n) {
    const t = l(e, n ? .in);
    return t.setHours(23, 59, 59, 999), t
}

function Ze(e, n) {
    const t = l(e, n ? .in),
        r = t.getMonth();
    return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t
}

function Se(e, n) {
    const t = l(e, n ? .in);
    return +Ve(t, n) == +Ze(t, n)
}

function Je(e, n, t) {
    const [r, a, s] = k(t ? .in, e, e, n), i = A(a, s), o = Math.abs(ze(a, s));
    if (o < 1) return 0;
    a.getMonth() === 1 && a.getDate() > 27 && a.setDate(30), a.setMonth(a.getMonth() - i * o);
    let u = A(a, s) === -i;
    Se(r) && o === 1 && A(r, s) === 1 && (u = !1);
    const c = i * (o - +u);
    return c === 0 ? 0 : c
}

function Ke(e, n, t) {
    const r = Me(e, n) / 1e3;
    return z(t ? .roundingMethod)(r)
}

function ae(e, n) {
    const [t, r] = k(e, n.start, n.end);
    return {
        start: t,
        end: r
    }
}

function Dr(e, n) {
    const {
        start: t,
        end: r
    } = ae(n ? .in, e);
    let a = +t > +r;
    const s = a ? +t : +r,
        i = a ? r : t;
    i.setHours(0, 0, 0, 0);
    let o = n ? .step ? ? 1;
    if (!o) return [];
    o < 0 && (o = -o, a = !a);
    const u = [];
    for (; + i <= s;) u.push(f(t, i)), i.setDate(i.getDate() + o), i.setHours(0, 0, 0, 0);
    return a ? u.reverse() : u
}

function vr(e, n) {
    const {
        start: t,
        end: r
    } = ae(n ? .in, e);
    let a = +t > +r;
    const s = a ? +t : +r,
        i = a ? r : t;
    i.setMinutes(0, 0, 0);
    let o = n ? .step ? ? 1;
    if (!o) return [];
    o < 0 && (o = -o, a = !a);
    const u = [];
    for (; + i <= s;) u.push(f(t, i)), i.setHours(i.getHours() + o);
    return a ? u.reverse() : u
}

function Mr(e, n) {
    const {
        start: t,
        end: r
    } = ae(n ? .in, e);
    t.setSeconds(0, 0);
    let a = +t > +r;
    const s = a ? +t : +r;
    let i = a ? r : t,
        o = n ? .step ? ? 1;
    if (!o) return [];
    o < 0 && (o = -o, a = !a);
    const u = [];
    for (; + i <= s;) u.push(f(t, i)), i = De(i, o);
    return a ? u.reverse() : u
}

function Tr(e, n) {
    const t = l(e, n ? .in);
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
}

function et(e, n) {
    const t = l(e, n ? .in);
    return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t
}
var tt = {
        lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds"
        },
        xSeconds: {
            one: "1 second",
            other: "{{count}} seconds"
        },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes"
        },
        xMinutes: {
            one: "1 minute",
            other: "{{count}} minutes"
        },
        aboutXHours: {
            one: "about 1 hour",
            other: "about {{count}} hours"
        },
        xHours: {
            one: "1 hour",
            other: "{{count}} hours"
        },
        xDays: {
            one: "1 day",
            other: "{{count}} days"
        },
        aboutXWeeks: {
            one: "about 1 week",
            other: "about {{count}} weeks"
        },
        xWeeks: {
            one: "1 week",
            other: "{{count}} weeks"
        },
        aboutXMonths: {
            one: "about 1 month",
            other: "about {{count}} months"
        },
        xMonths: {
            one: "1 month",
            other: "{{count}} months"
        },
        aboutXYears: {
            one: "about 1 year",
            other: "about {{count}} years"
        },
        xYears: {
            one: "1 year",
            other: "{{count}} years"
        },
        overXYears: {
            one: "over 1 year",
            other: "over {{count}} years"
        },
        almostXYears: {
            one: "almost 1 year",
            other: "almost {{count}} years"
        }
    },
    nt = (e, n, t) => {
        let r;
        const a = tt[e];
        return typeof a == "string" ? r = a : n === 1 ? r = a.one : r = a.other.replace("{{count}}", n.toString()), t ? .addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r
    };

function Z(e) {
    return (n = {}) => {
        const t = n.width ? String(n.width) : e.defaultWidth;
        return e.formats[t] || e.formats[e.defaultWidth]
    }
}
var rt = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy"
    },
    at = {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
    },
    st = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
    },
    it = {
        date: Z({
            formats: rt,
            defaultWidth: "full"
        }),
        time: Z({
            formats: at,
            defaultWidth: "full"
        }),
        dateTime: Z({
            formats: st,
            defaultWidth: "full"
        })
    },
    ot = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P"
    },
    ut = (e, n, t, r) => ot[e];

function L(e) {
    return (n, t) => {
        const r = t ? .context ? String(t.context) : "standalone";
        let a;
        if (r === "formatting" && e.formattingValues) {
            const i = e.defaultFormattingWidth || e.defaultWidth,
                o = t ? .width ? String(t.width) : i;
            a = e.formattingValues[o] || e.formattingValues[i]
        } else {
            const i = e.defaultWidth,
                o = t ? .width ? String(t.width) : e.defaultWidth;
            a = e.values[o] || e.values[i]
        }
        const s = e.argumentCallback ? e.argumentCallback(n) : n;
        return a[s]
    }
}
var ct = {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"]
    },
    dt = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    },
    lt = {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    ft = {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    ht = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        }
    },
    mt = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        }
    },
    wt = (e, n) => {
        const t = Number(e),
            r = t % 100;
        if (r > 20 || r < 10) switch (r % 10) {
            case 1:
                return t + "st";
            case 2:
                return t + "nd";
            case 3:
                return t + "rd"
        }
        return t + "th"
    },
    yt = {
        ordinalNumber: wt,
        era: L({
            values: ct,
            defaultWidth: "wide"
        }),
        quarter: L({
            values: dt,
            defaultWidth: "wide",
            argumentCallback: e => e - 1
        }),
        month: L({
            values: lt,
            defaultWidth: "wide"
        }),
        day: L({
            values: ft,
            defaultWidth: "wide"
        }),
        dayPeriod: L({
            values: ht,
            defaultWidth: "wide",
            formattingValues: mt,
            defaultFormattingWidth: "wide"
        })
    };

function Q(e) {
    return (n, t = {}) => {
        const r = t.width,
            a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth],
            s = n.match(a);
        if (!s) return null;
        const i = s[0],
            o = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth],
            u = Array.isArray(o) ? bt(o, w => w.test(i)) : gt(o, w => w.test(i));
        let c;
        c = e.valueCallback ? e.valueCallback(u) : u, c = t.valueCallback ? t.valueCallback(c) : c;
        const d = n.slice(i.length);
        return {
            value: c,
            rest: d
        }
    }
}

function gt(e, n) {
    for (const t in e)
        if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t])) return t
}

function bt(e, n) {
    for (let t = 0; t < e.length; t++)
        if (n(e[t])) return t
}

function pt(e) {
    return (n, t = {}) => {
        const r = n.match(e.matchPattern);
        if (!r) return null;
        const a = r[0],
            s = n.match(e.parsePattern);
        if (!s) return null;
        let i = e.valueCallback ? e.valueCallback(s[0]) : s[0];
        i = t.valueCallback ? t.valueCallback(i) : i;
        const o = n.slice(a.length);
        return {
            value: i,
            rest: o
        }
    }
}
var xt = /^(\d+)(th|st|nd|rd)?/i,
    Dt = /\d+/i,
    vt = {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i
    },
    Mt = {
        any: [/^b/i, /^(a|c)/i]
    },
    Tt = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i
    },
    kt = {
        any: [/1/i, /2/i, /3/i, /4/i]
    },
    Ot = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    },
    Pt = {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
    },
    Yt = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    },
    _t = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    },
    Nt = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    },
    Wt = {
        any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i
        }
    },
    It = {
        ordinalNumber: pt({
            matchPattern: xt,
            parsePattern: Dt,
            valueCallback: e => parseInt(e, 10)
        }),
        era: Q({
            matchPatterns: vt,
            defaultMatchWidth: "wide",
            parsePatterns: Mt,
            defaultParseWidth: "any"
        }),
        quarter: Q({
            matchPatterns: Tt,
            defaultMatchWidth: "wide",
            parsePatterns: kt,
            defaultParseWidth: "any",
            valueCallback: e => e + 1
        }),
        month: Q({
            matchPatterns: Ot,
            defaultMatchWidth: "wide",
            parsePatterns: Pt,
            defaultParseWidth: "any"
        }),
        day: Q({
            matchPatterns: Yt,
            defaultMatchWidth: "wide",
            parsePatterns: _t,
            defaultParseWidth: "any"
        }),
        dayPeriod: Q({
            matchPatterns: Nt,
            defaultMatchWidth: "any",
            parsePatterns: Wt,
            defaultParseWidth: "any"
        })
    },
    R = {
        code: "en-US",
        formatDistance: nt,
        formatLong: it,
        formatRelative: ut,
        localize: yt,
        match: It,
        options: {
            weekStartsOn: 0,
            firstWeekContainsDate: 1
        }
    };

function Ht(e, n) {
    const t = l(e, n ? .in);
    return re(t, et(t)) + 1
}

function Te(e, n) {
    const t = l(e, n ? .in),
        r = +q(t) - +Ge(t);
    return Math.round(r / te) + 1
}

function se(e, n) {
    const t = l(e, n ? .in),
        r = t.getFullYear(),
        a = I(),
        s = n ? .firstWeekContainsDate ? ? n ? .locale ? .options ? .firstWeekContainsDate ? ? a.firstWeekContainsDate ? ? a.locale ? .options ? .firstWeekContainsDate ? ? 1,
        i = f(n ? .in || e, 0);
    i.setFullYear(r + 1, 0, s), i.setHours(0, 0, 0, 0);
    const o = P(i, n),
        u = f(n ? .in || e, 0);
    u.setFullYear(r, 0, s), u.setHours(0, 0, 0, 0);
    const c = P(u, n);
    return +t >= +o ? r + 1 : +t >= +c ? r : r - 1
}

function Et(e, n) {
    const t = I(),
        r = n ? .firstWeekContainsDate ? ? n ? .locale ? .options ? .firstWeekContainsDate ? ? t.firstWeekContainsDate ? ? t.locale ? .options ? .firstWeekContainsDate ? ? 1,
        a = se(e, n),
        s = f(n ? .in || e, 0);
    return s.setFullYear(a, 0, r), s.setHours(0, 0, 0, 0), P(s, n)
}

function ke(e, n) {
    const t = l(e, n ? .in),
        r = +P(t, n) - +Et(t, n);
    return Math.round(r / te) + 1
}

function y(e, n) {
    return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(n, "0")
}
var H = {
        y(e, n) {
            const t = e.getFullYear(),
                r = t > 0 ? t : 1 - t;
            return y(n === "yy" ? r % 100 : r, n.length)
        },
        M(e, n) {
            const t = e.getMonth();
            return n === "M" ? String(t + 1) : y(t + 1, 2)
        },
        d(e, n) {
            return y(e.getDate(), n.length)
        },
        a(e, n) {
            const t = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (n) {
                case "a":
                case "aa":
                    return t.toUpperCase();
                case "aaa":
                    return t;
                case "aaaaa":
                    return t[0];
                default:
                    return t === "am" ? "a.m." : "p.m."
            }
        },
        h(e, n) {
            return y(e.getHours() % 12 || 12, n.length)
        },
        H(e, n) {
            return y(e.getHours(), n.length)
        },
        m(e, n) {
            return y(e.getMinutes(), n.length)
        },
        s(e, n) {
            return y(e.getSeconds(), n.length)
        },
        S(e, n) {
            const t = n.length,
                r = e.getMilliseconds(),
                a = Math.trunc(r * Math.pow(10, t - 3));
            return y(a, n.length)
        }
    },
    F = {
        am: "am",
        pm: "pm",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    he = {
        G: function(e, n, t) {
            const r = e.getFullYear() > 0 ? 1 : 0;
            switch (n) {
                case "G":
                case "GG":
                case "GGG":
                    return t.era(r, {
                        width: "abbreviated"
                    });
                case "GGGGG":
                    return t.era(r, {
                        width: "narrow"
                    });
                default:
                    return t.era(r, {
                        width: "wide"
                    })
            }
        },
        y: function(e, n, t) {
            if (n === "yo") {
                const r = e.getFullYear(),
                    a = r > 0 ? r : 1 - r;
                return t.ordinalNumber(a, {
                    unit: "year"
                })
            }
            return H.y(e, n)
        },
        Y: function(e, n, t, r) {
            const a = se(e, r),
                s = a > 0 ? a : 1 - a;
            if (n === "YY") {
                const i = s % 100;
                return y(i, 2)
            }
            return n === "Yo" ? t.ordinalNumber(s, {
                unit: "year"
            }) : y(s, n.length)
        },
        R: function(e, n) {
            const t = xe(e);
            return y(t, n.length)
        },
        u: function(e, n) {
            const t = e.getFullYear();
            return y(t, n.length)
        },
        Q: function(e, n, t) {
            const r = Math.ceil((e.getMonth() + 1) / 3);
            switch (n) {
                case "Q":
                    return String(r);
                case "QQ":
                    return y(r, 2);
                case "Qo":
                    return t.ordinalNumber(r, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return t.quarter(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return t.quarter(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return t.quarter(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        q: function(e, n, t) {
            const r = Math.ceil((e.getMonth() + 1) / 3);
            switch (n) {
                case "q":
                    return String(r);
                case "qq":
                    return y(r, 2);
                case "qo":
                    return t.ordinalNumber(r, {
                        unit: "quarter"
                    });
                case "qqq":
                    return t.quarter(r, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "qqqqq":
                    return t.quarter(r, {
                        width: "narrow",
                        context: "standalone"
                    });
                default:
                    return t.quarter(r, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        M: function(e, n, t) {
            const r = e.getMonth();
            switch (n) {
                case "M":
                case "MM":
                    return H.M(e, n);
                case "Mo":
                    return t.ordinalNumber(r + 1, {
                        unit: "month"
                    });
                case "MMM":
                    return t.month(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "MMMMM":
                    return t.month(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return t.month(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        L: function(e, n, t) {
            const r = e.getMonth();
            switch (n) {
                case "L":
                    return String(r + 1);
                case "LL":
                    return y(r + 1, 2);
                case "Lo":
                    return t.ordinalNumber(r + 1, {
                        unit: "month"
                    });
                case "LLL":
                    return t.month(r, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "LLLLL":
                    return t.month(r, {
                        width: "narrow",
                        context: "standalone"
                    });
                default:
                    return t.month(r, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        w: function(e, n, t, r) {
            const a = ke(e, r);
            return n === "wo" ? t.ordinalNumber(a, {
                unit: "week"
            }) : y(a, n.length)
        },
        I: function(e, n, t) {
            const r = Te(e);
            return n === "Io" ? t.ordinalNumber(r, {
                unit: "week"
            }) : y(r, n.length)
        },
        d: function(e, n, t) {
            return n === "do" ? t.ordinalNumber(e.getDate(), {
                unit: "date"
            }) : H.d(e, n)
        },
        D: function(e, n, t) {
            const r = Ht(e);
            return n === "Do" ? t.ordinalNumber(r, {
                unit: "dayOfYear"
            }) : y(r, n.length)
        },
        E: function(e, n, t) {
            const r = e.getDay();
            switch (n) {
                case "E":
                case "EE":
                case "EEE":
                    return t.day(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "EEEEE":
                    return t.day(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return t.day(r, {
                        width: "short",
                        context: "formatting"
                    });
                default:
                    return t.day(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        e: function(e, n, t, r) {
            const a = e.getDay(),
                s = (a - r.weekStartsOn + 8) % 7 || 7;
            switch (n) {
                case "e":
                    return String(s);
                case "ee":
                    return y(s, 2);
                case "eo":
                    return t.ordinalNumber(s, {
                        unit: "day"
                    });
                case "eee":
                    return t.day(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "eeeee":
                    return t.day(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return t.day(a, {
                        width: "short",
                        context: "formatting"
                    });
                default:
                    return t.day(a, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        c: function(e, n, t, r) {
            const a = e.getDay(),
                s = (a - r.weekStartsOn + 8) % 7 || 7;
            switch (n) {
                case "c":
                    return String(s);
                case "cc":
                    return y(s, n.length);
                case "co":
                    return t.ordinalNumber(s, {
                        unit: "day"
                    });
                case "ccc":
                    return t.day(a, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "ccccc":
                    return t.day(a, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return t.day(a, {
                        width: "short",
                        context: "standalone"
                    });
                default:
                    return t.day(a, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        i: function(e, n, t) {
            const r = e.getDay(),
                a = r === 0 ? 7 : r;
            switch (n) {
                case "i":
                    return String(a);
                case "ii":
                    return y(a, n.length);
                case "io":
                    return t.ordinalNumber(a, {
                        unit: "day"
                    });
                case "iii":
                    return t.day(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "iiiii":
                    return t.day(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "iiiiii":
                    return t.day(r, {
                        width: "short",
                        context: "formatting"
                    });
                default:
                    return t.day(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        a: function(e, n, t) {
            const r = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (n) {
                case "a":
                case "aa":
                    return t.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "aaa":
                    return t.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "aaaaa":
                    return t.dayPeriod(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return t.dayPeriod(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        b: function(e, n, t) {
            const r = e.getHours();
            let a;
            switch (r === 12 ? a = F.noon : r === 0 ? a = F.midnight : a = r / 12 >= 1 ? "pm" : "am", n) {
                case "b":
                case "bb":
                    return t.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "bbb":
                    return t.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "bbbbb":
                    return t.dayPeriod(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return t.dayPeriod(a, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        B: function(e, n, t) {
            const r = e.getHours();
            let a;
            switch (r >= 17 ? a = F.evening : r >= 12 ? a = F.afternoon : r >= 4 ? a = F.morning : a = F.night, n) {
                case "B":
                case "BB":
                case "BBB":
                    return t.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "BBBBB":
                    return t.dayPeriod(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return t.dayPeriod(a, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        h: function(e, n, t) {
            if (n === "ho") {
                let r = e.getHours() % 12;
                return r === 0 && (r = 12), t.ordinalNumber(r, {
                    unit: "hour"
                })
            }
            return H.h(e, n)
        },
        H: function(e, n, t) {
            return n === "Ho" ? t.ordinalNumber(e.getHours(), {
                unit: "hour"
            }) : H.H(e, n)
        },
        K: function(e, n, t) {
            const r = e.getHours() % 12;
            return n === "Ko" ? t.ordinalNumber(r, {
                unit: "hour"
            }) : y(r, n.length)
        },
        k: function(e, n, t) {
            let r = e.getHours();
            return r === 0 && (r = 24), n === "ko" ? t.ordinalNumber(r, {
                unit: "hour"
            }) : y(r, n.length)
        },
        m: function(e, n, t) {
            return n === "mo" ? t.ordinalNumber(e.getMinutes(), {
                unit: "minute"
            }) : H.m(e, n)
        },
        s: function(e, n, t) {
            return n === "so" ? t.ordinalNumber(e.getSeconds(), {
                unit: "second"
            }) : H.s(e, n)
        },
        S: function(e, n) {
            return H.S(e, n)
        },
        X: function(e, n, t) {
            const r = e.getTimezoneOffset();
            if (r === 0) return "Z";
            switch (n) {
                case "X":
                    return we(r);
                case "XXXX":
                case "XX":
                    return E(r);
                default:
                    return E(r, ":")
            }
        },
        x: function(e, n, t) {
            const r = e.getTimezoneOffset();
            switch (n) {
                case "x":
                    return we(r);
                case "xxxx":
                case "xx":
                    return E(r);
                default:
                    return E(r, ":")
            }
        },
        O: function(e, n, t) {
            const r = e.getTimezoneOffset();
            switch (n) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + me(r, ":");
                default:
                    return "GMT" + E(r, ":")
            }
        },
        z: function(e, n, t) {
            const r = e.getTimezoneOffset();
            switch (n) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + me(r, ":");
                default:
                    return "GMT" + E(r, ":")
            }
        },
        t: function(e, n, t) {
            const r = Math.trunc(+e / 1e3);
            return y(r, n.length)
        },
        T: function(e, n, t) {
            return y(+e, n.length)
        }
    };

function me(e, n = "") {
    const t = e > 0 ? "-" : "+",
        r = Math.abs(e),
        a = Math.trunc(r / 60),
        s = r % 60;
    return s === 0 ? t + String(a) : t + String(a) + n + y(s, 2)
}

function we(e, n) {
    return e % 60 === 0 ? (e > 0 ? "-" : "+") + y(Math.abs(e) / 60, 2) : E(e, n)
}

function E(e, n = "") {
    const t = e > 0 ? "-" : "+",
        r = Math.abs(e),
        a = y(Math.trunc(r / 60), 2),
        s = y(r % 60, 2);
    return t + a + n + s
}
var ye = (e, n) => {
        switch (e) {
            case "P":
                return n.date({
                    width: "short"
                });
            case "PP":
                return n.date({
                    width: "medium"
                });
            case "PPP":
                return n.date({
                    width: "long"
                });
            default:
                return n.date({
                    width: "full"
                })
        }
    },
    Oe = (e, n) => {
        switch (e) {
            case "p":
                return n.time({
                    width: "short"
                });
            case "pp":
                return n.time({
                    width: "medium"
                });
            case "ppp":
                return n.time({
                    width: "long"
                });
            default:
                return n.time({
                    width: "full"
                })
        }
    },
    Ct = (e, n) => {
        const t = e.match(/(P+)(p+)?/) || [],
            r = t[1],
            a = t[2];
        if (!a) return ye(e, n);
        let s;
        switch (r) {
            case "P":
                s = n.dateTime({
                    width: "short"
                });
                break;
            case "PP":
                s = n.dateTime({
                    width: "medium"
                });
                break;
            case "PPP":
                s = n.dateTime({
                    width: "long"
                });
                break;
            default:
                s = n.dateTime({
                    width: "full"
                })
        }
        return s.replace("{{date}}", ye(r, n)).replace("{{time}}", Oe(a, n))
    },
    K = {
        p: Oe,
        P: Ct
    },
    Ft = /^D+$/,
    qt = /^Y+$/,
    Rt = ["D", "DD", "YY", "YYYY"];

function Pe(e) {
    return Ft.test(e)
}

function Ye(e) {
    return qt.test(e)
}

function ee(e, n, t) {
    const r = Lt(e, n, t);
    if (console.warn(r), Rt.includes(e)) throw new RangeError(r)
}

function Lt(e, n, t) {
    const r = e[0] === "Y" ? "years" : "days of the month";
    return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
}
var Qt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    Xt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    At = /^'([^]*?)'?$/,
    $t = /''/g,
    Bt = /[a-zA-Z]/;

function Gt(e, n, t) {
    const r = I(),
        a = t ? .locale ? ? r.locale ? ? R,
        s = t ? .firstWeekContainsDate ? ? t ? .locale ? .options ? .firstWeekContainsDate ? ? r.firstWeekContainsDate ? ? r.locale ? .options ? .firstWeekContainsDate ? ? 1,
        i = t ? .weekStartsOn ? ? t ? .locale ? .options ? .weekStartsOn ? ? r.weekStartsOn ? ? r.locale ? .options ? .weekStartsOn ? ? 0,
        o = l(e, t ? .in);
    if (!Ue(o)) throw new RangeError("Invalid time value");
    let u = n.match(Xt).map(d => {
        const w = d[0];
        if (w === "p" || w === "P") {
            const g = K[w];
            return g(d, a.formatLong)
        }
        return d
    }).join("").match(Qt).map(d => {
        if (d === "''") return {
            isToken: !1,
            value: "'"
        };
        const w = d[0];
        if (w === "'") return {
            isToken: !1,
            value: jt(d)
        };
        if (he[w]) return {
            isToken: !0,
            value: d
        };
        if (w.match(Bt)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + w + "`");
        return {
            isToken: !1,
            value: d
        }
    });
    a.localize.preprocessor && (u = a.localize.preprocessor(o, u));
    const c = {
        firstWeekContainsDate: s,
        weekStartsOn: i,
        locale: a
    };
    return u.map(d => {
        if (!d.isToken) return d.value;
        const w = d.value;
        (!t ? .useAdditionalWeekYearTokens && Ye(w) || !t ? .useAdditionalDayOfYearTokens && Pe(w)) && ee(w, n, String(e));
        const g = he[w[0]];
        return g(o, w, a.localize, c)
    }).join("")
}

function jt(e) {
    const n = e.match(At);
    return n ? n[1].replace($t, "'") : e
}

function Ut(e, n, t) {
    const r = I(),
        a = t ? .locale ? ? r.locale ? ? R,
        s = 2520,
        i = A(e, n);
    if (isNaN(i)) throw new RangeError("Invalid time value");
    const o = Object.assign({}, t, {
            addSuffix: t ? .addSuffix,
            comparison: i
        }),
        [u, c] = k(t ? .in, ...i > 0 ? [n, e] : [e, n]),
        d = Ke(c, u),
        w = (W(c) - W(u)) / 1e3,
        g = Math.round((d - w) / 60);
    let O;
    if (g < 2) return t ? .includeSeconds ? d < 5 ? a.formatDistance("lessThanXSeconds", 5, o) : d < 10 ? a.formatDistance("lessThanXSeconds", 10, o) : d < 20 ? a.formatDistance("lessThanXSeconds", 20, o) : d < 40 ? a.formatDistance("halfAMinute", 0, o) : d < 60 ? a.formatDistance("lessThanXMinutes", 1, o) : a.formatDistance("xMinutes", 1, o) : g === 0 ? a.formatDistance("lessThanXMinutes", 1, o) : a.formatDistance("xMinutes", g, o);
    if (g < 45) return a.formatDistance("xMinutes", g, o);
    if (g < 90) return a.formatDistance("aboutXHours", 1, o);
    if (g < 1440) {
        const b = Math.round(g / 60);
        return a.formatDistance("aboutXHours", b, o)
    } else {
        if (g < s) return a.formatDistance("xDays", 1, o);
        if (g < 43200) {
            const b = Math.round(g / ge);
            return a.formatDistance("xDays", b, o)
        } else if (g < 43200 * 2) return O = Math.round(g / J), a.formatDistance("aboutXMonths", O, o)
    }
    if (O = Je(c, u), O < 12) {
        const b = Math.round(g / J);
        return a.formatDistance("xMonths", b, o)
    } else {
        const b = O % 12,
            T = Math.trunc(O / 12);
        return b < 3 ? a.formatDistance("aboutXYears", T, o) : b < 9 ? a.formatDistance("overXYears", T, o) : a.formatDistance("almostXYears", T + 1, o)
    }
}

function zt(e, n, t) {
    const r = I(),
        a = t ? .locale ? ? r.locale ? ? R,
        s = A(e, n);
    if (isNaN(s)) throw new RangeError("Invalid time value");
    const i = Object.assign({}, t, {
            addSuffix: t ? .addSuffix,
            comparison: s
        }),
        [o, u] = k(t ? .in, ...s > 0 ? [n, e] : [e, n]),
        c = z(t ? .roundingMethod ? ? "round"),
        d = u.getTime() - o.getTime(),
        w = d / C,
        g = (d - (W(u) - W(o))) / C,
        O = t ? .unit;
    let b;
    if (O ? b = O : w < 1 ? b = "second" : w < 60 ? b = "minute" : w < 1440 ? b = "hour" : g < 43200 ? b = "day" : g < 525600 ? b = "month" : b = "year", b === "second") {
        const T = c(d / 1e3);
        return a.formatDistance("xSeconds", T, i)
    } else if (b === "minute") {
        const T = c(w);
        return a.formatDistance("xMinutes", T, i)
    } else if (b === "hour") {
        const T = c(w / 60);
        return a.formatDistance("xHours", T, i)
    } else if (b === "day") {
        const T = c(g / ge);
        return a.formatDistance("xDays", T, i)
    } else if (b === "month") {
        const T = c(g / J);
        return T === 12 && O !== "month" ? a.formatDistance("xYears", 1, i) : a.formatDistance("xMonths", T, i)
    } else {
        const T = c(g / Re);
        return a.formatDistance("xYears", T, i)
    }
}

function kr(e, n) {
    return Ut(e, B(e), n)
}

function Or(e, n) {
    return zt(e, B(e), n)
}
var Vt = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];

function Pr(e, n) {
    const t = I(),
        r = n ? .locale ? ? t.locale ? ? R,
        a = n ? .format ? ? Vt,
        s = n ? .zero ? ? !1,
        i = n ? .delimiter ? ? " ";
    return r.formatDistance ? a.reduce((o, u) => {
        const c = `x${u.replace(/(^.)/,w=>w.toUpperCase())}`,
            d = e[u];
        return d !== void 0 && (s || e[u]) ? o.concat(r.formatDistance(c, d)) : o
    }, []).join(i) : ""
}

function Yr(e, n, t) {
    const [r, a] = k(t ? .in, e, n), s = I(), i = t ? .locale ? ? s.locale ? ? R, o = t ? .weekStartsOn ? ? t ? .locale ? .options ? .weekStartsOn ? ? s.weekStartsOn ? ? s.locale ? .options ? .weekStartsOn ? ? 0, u = re(r, a);
    if (isNaN(u)) throw new RangeError("Invalid time value");
    let c;
    u < -6 ? c = "other" : u < -1 ? c = "lastWeek" : u < 0 ? c = "yesterday" : u < 1 ? c = "today" : u < 2 ? c = "tomorrow" : u < 7 ? c = "nextWeek" : c = "other";
    const d = i.formatRelative(c, r, a, {
        locale: i,
        weekStartsOn: o
    });
    return Gt(r, d, {
        locale: i,
        weekStartsOn: o
    })
}

function _r(e, n) {
    return l(e * 1e3, n ? .in)
}

function Zt() {
    return Object.assign({}, I())
}

function St(e, n) {
    const t = l(e, n ? .in).getDay();
    return t === 0 ? 7 : t
}

function Jt(e, n) {
    const t = Kt(n) ? new n(0) : f(n, 0);
    return t.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), t.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), t
}

function Kt(e) {
    return typeof e == "function" && e.prototype ? .constructor === e
}
var en = 10,
    _e = class {
        subPriority = 0;
        validate(e, n) {
            return !0
        }
    },
    tn = class extends _e {
        constructor(e, n, t, r, a) {
            super(), this.value = e, this.validateValue = n, this.setValue = t, this.priority = r, a && (this.subPriority = a)
        }
        validate(e, n) {
            return this.validateValue(e, this.value, n)
        }
        set(e, n, t) {
            return this.setValue(e, n, this.value, t)
        }
    },
    nn = class extends _e {
        priority = en;
        subPriority = -1;
        constructor(e, n) {
            super(), this.context = e || (t => f(n, t))
        }
        set(e, n) {
            return n.timestampIsSet ? e : f(e, Jt(e, this.context))
        }
    },
    m = class {
        run(e, n, t, r) {
            const a = this.parse(e, n, t, r);
            return a ? {
                setter: new tn(a.value, this.validate, this.set, this.priority, this.subPriority),
                rest: a.rest
            } : null
        }
        validate(e, n, t) {
            return !0
        }
    },
    rn = class extends m {
        priority = 140;
        parse(e, n, t) {
            switch (n) {
                case "G":
                case "GG":
                case "GGG":
                    return t.era(e, {
                        width: "abbreviated"
                    }) || t.era(e, {
                        width: "narrow"
                    });
                case "GGGGG":
                    return t.era(e, {
                        width: "narrow"
                    });
                default:
                    return t.era(e, {
                        width: "wide"
                    }) || t.era(e, {
                        width: "abbreviated"
                    }) || t.era(e, {
                        width: "narrow"
                    })
            }
        }
        set(e, n, t) {
            return n.era = t, e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e
        }
        incompatibleTokens = ["R", "u", "t", "T"]
    },
    v = {
        month: /^(1[0-2]|0?\d)/,
        date: /^(3[0-1]|[0-2]?\d)/,
        dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
        week: /^(5[0-3]|[0-4]?\d)/,
        hour23h: /^(2[0-3]|[0-1]?\d)/,
        hour24h: /^(2[0-4]|[0-1]?\d)/,
        hour11h: /^(1[0-1]|0?\d)/,
        hour12h: /^(1[0-2]|0?\d)/,
        minute: /^[0-5]?\d/,
        second: /^[0-5]?\d/,
        singleDigit: /^\d/,
        twoDigits: /^\d{1,2}/,
        threeDigits: /^\d{1,3}/,
        fourDigits: /^\d{1,4}/,
        anyDigitsSigned: /^-?\d+/,
        singleDigitSigned: /^-?\d/,
        twoDigitsSigned: /^-?\d{1,2}/,
        threeDigitsSigned: /^-?\d{1,3}/,
        fourDigitsSigned: /^-?\d{1,4}/
    },
    _ = {
        basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
        basic: /^([+-])(\d{2})(\d{2})|Z/,
        basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        extended: /^([+-])(\d{2}):(\d{2})|Z/,
        extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
    };

function M(e, n) {
    return e && {
        value: n(e.value),
        rest: e.rest
    }
}

function p(e, n) {
    const t = n.match(e);
    return t ? {
        value: parseInt(t[0], 10),
        rest: n.slice(t[0].length)
    } : null
}

function N(e, n) {
    const t = n.match(e);
    if (!t) return null;
    if (t[0] === "Z") return {
        value: 0,
        rest: n.slice(1)
    };
    const r = t[1] === "+" ? 1 : -1,
        a = t[2] ? parseInt(t[2], 10) : 0,
        s = t[3] ? parseInt(t[3], 10) : 0,
        i = t[5] ? parseInt(t[5], 10) : 0;
    return {
        value: r * (a * $ + s * C + i * qe),
        rest: n.slice(t[0].length)
    }
}

function Ne(e) {
    return p(v.anyDigitsSigned, e)
}

function D(e, n) {
    switch (e) {
        case 1:
            return p(v.singleDigit, n);
        case 2:
            return p(v.twoDigits, n);
        case 3:
            return p(v.threeDigits, n);
        case 4:
            return p(v.fourDigits, n);
        default:
            return p(new RegExp("^\\d{1," + e + "}"), n)
    }
}

function U(e, n) {
    switch (e) {
        case 1:
            return p(v.singleDigitSigned, n);
        case 2:
            return p(v.twoDigitsSigned, n);
        case 3:
            return p(v.threeDigitsSigned, n);
        case 4:
            return p(v.fourDigitsSigned, n);
        default:
            return p(new RegExp("^-?\\d{1," + e + "}"), n)
    }
}

function ie(e) {
    switch (e) {
        case "morning":
            return 4;
        case "evening":
            return 17;
        case "pm":
        case "noon":
        case "afternoon":
            return 12;
        default:
            return 0
    }
}

function We(e, n) {
    const t = n > 0,
        r = t ? n : 1 - n;
    let a;
    if (r <= 50) a = e || 100;
    else {
        const s = r + 50,
            i = Math.trunc(s / 100) * 100,
            o = e >= s % 100;
        a = e + i - (o ? 100 : 0)
    }
    return t ? a : 1 - a
}

function Ie(e) {
    return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0
}
var an = class extends m {
        priority = 130;
        incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
        parse(e, n, t) {
            const r = a => ({
                year: a,
                isTwoDigitYear: n === "yy"
            });
            switch (n) {
                case "y":
                    return M(D(4, e), r);
                case "yo":
                    return M(t.ordinalNumber(e, {
                        unit: "year"
                    }), r);
                default:
                    return M(D(n.length, e), r)
            }
        }
        validate(e, n) {
            return n.isTwoDigitYear || n.year > 0
        }
        set(e, n, t) {
            const r = e.getFullYear();
            if (t.isTwoDigitYear) {
                const s = We(t.year, r);
                return e.setFullYear(s, 0, 1), e.setHours(0, 0, 0, 0), e
            }
            const a = !("era" in n) || n.era === 1 ? t.year : 1 - t.year;
            return e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e
        }
    },
    sn = class extends m {
        priority = 130;
        parse(e, n, t) {
            const r = a => ({
                year: a,
                isTwoDigitYear: n === "YY"
            });
            switch (n) {
                case "Y":
                    return M(D(4, e), r);
                case "Yo":
                    return M(t.ordinalNumber(e, {
                        unit: "year"
                    }), r);
                default:
                    return M(D(n.length, e), r)
            }
        }
        validate(e, n) {
            return n.isTwoDigitYear || n.year > 0
        }
        set(e, n, t, r) {
            const a = se(e, r);
            if (t.isTwoDigitYear) {
                const i = We(t.year, a);
                return e.setFullYear(i, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), P(e, r)
            }
            const s = !("era" in n) || n.era === 1 ? t.year : 1 - t.year;
            return e.setFullYear(s, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), P(e, r)
        }
        incompatibleTokens = ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]
    },
    on = class extends m {
        priority = 130;
        parse(e, n) {
            return U(n === "R" ? 4 : n.length, e)
        }
        set(e, n, t) {
            const r = f(e, 0);
            return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), q(r)
        }
        incompatibleTokens = ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
    },
    un = class extends m {
        priority = 130;
        parse(e, n) {
            return U(n === "u" ? 4 : n.length, e)
        }
        set(e, n, t) {
            return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e
        }
        incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]
    },
    cn = class extends m {
        priority = 120;
        parse(e, n, t) {
            switch (n) {
                case "Q":
                case "QQ":
                    return D(n.length, e);
                case "Qo":
                    return t.ordinalNumber(e, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return t.quarter(e, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || t.quarter(e, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return t.quarter(e, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return t.quarter(e, {
                        width: "wide",
                        context: "formatting"
                    }) || t.quarter(e, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || t.quarter(e, {
                        width: "narrow",
                        context: "formatting"
                    })
            }
        }
        validate(e, n) {
            return n >= 1 && n <= 4
        }
        set(e, n, t) {
            return e.setMonth((t - 1) * 3, 1), e.setHours(0, 0, 0, 0), e
        }
        incompatibleTokens = ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]
    },
    dn = class extends m {
        priority = 120;
        parse(e, n, t) {
            switch (n) {
                case "q":
                case "qq":
                    return D(n.length, e);
                case "qo":
                    return t.ordinalNumber(e, {
                        unit: "quarter"
                    });
                case "qqq":
                    return t.quarter(e, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || t.quarter(e, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "qqqqq":
                    return t.quarter(e, {
                        width: "narrow",
                        context: "standalone"
                    });
                default:
                    return t.quarter(e, {
                        width: "wide",
                        context: "standalone"
                    }) || t.quarter(e, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || t.quarter(e, {
                        width: "narrow",
                        context: "standalone"
                    })
            }
        }
        validate(e, n) {
            return n >= 1 && n <= 4
        }
        set(e, n, t) {
            return e.setMonth((t - 1) * 3, 1), e.setHours(0, 0, 0, 0), e
        }
        incompatibleTokens = ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]
    },
    ln = class extends m {
        incompatibleTokens = ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"];
        priority = 110;
        parse(e, n, t) {
            const r = a => a - 1;
            switch (n) {
                case "M":
                    return M(p(v.month, e), r);
                case "MM":
                    return M(D(2, e), r);
                case "Mo":
                    return M(t.ordinalNumber(e, {
                        unit: "month"
                    }), r);
                case "MMM":
                    return t.month(e, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || t.month(e, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "MMMMM":
                    return t.month(e, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return t.month(e, {
                        width: "wide",
                        context: "formatting"
                    }) || t.month(e, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || t.month(e, {
                        width: "narrow",
                        context: "formatting"
                    })
            }
        }
        validate(e, n) {
            return n >= 0 && n <= 11
        }
        set(e, n, t) {
            return e.setMonth(t, 1), e.setHours(0, 0, 0, 0), e
        }
    },
    fn = class extends m {
        priority = 110;
        parse(e, n, t) {
            const r = a => a - 1;
            switch (n) {
                case "L":
                    return M(p(v.month, e), r);
                case "LL":
                    return M(D(2, e), r);
                case "Lo":
                    return M(t.ordinalNumber(e, {
                        unit: "month"
                    }), r);
                case "LLL":
                    return t.month(e, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || t.month(e, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "LLLLL":
                    return t.month(e, {
                        width: "narrow",
                        context: "standalone"
                    });
                default:
                    return t.month(e, {
                        width: "wide",
                        context: "standalone"
                    }) || t.month(e, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || t.month(e, {
                        width: "narrow",
                        context: "standalone"
                    })
            }
        }
        validate(e, n) {
            return n >= 0 && n <= 11
        }
        set(e, n, t) {
            return e.setMonth(t, 1), e.setHours(0, 0, 0, 0), e
        }
        incompatibleTokens = ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]
    };

function hn(e, n, t) {
    const r = l(e, t ? .in),
        a = ke(r, t) - n;
    return r.setDate(r.getDate() - a * 7), l(r, t ? .in)
}
var mn = class extends m {
    priority = 100;
    parse(e, n, t) {
        switch (n) {
            case "w":
                return p(v.week, e);
            case "wo":
                return t.ordinalNumber(e, {
                    unit: "week"
                });
            default:
                return D(n.length, e)
        }
    }
    validate(e, n) {
        return n >= 1 && n <= 53
    }
    set(e, n, t, r) {
        return P(hn(e, t, r), r)
    }
    incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]
};

function wn(e, n, t) {
    const r = l(e, t ? .in),
        a = Te(r, t) - n;
    return r.setDate(r.getDate() - a * 7), r
}
var yn = class extends m {
        priority = 100;
        parse(e, n, t) {
            switch (n) {
                case "I":
                    return p(v.week, e);
                case "Io":
                    return t.ordinalNumber(e, {
                        unit: "week"
                    });
                default:
                    return D(n.length, e)
            }
        }
        validate(e, n) {
            return n >= 1 && n <= 53
        }
        set(e, n, t) {
            return q(wn(e, t))
        }
        incompatibleTokens = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
    },
    gn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    bn = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    pn = class extends m {
        priority = 90;
        subPriority = 1;
        parse(e, n, t) {
            switch (n) {
                case "d":
                    return p(v.date, e);
                case "do":
                    return t.ordinalNumber(e, {
                        unit: "date"
                    });
                default:
                    return D(n.length, e)
            }
        }
        validate(e, n) {
            const t = e.getFullYear(),
                r = Ie(t),
                a = e.getMonth();
            return r ? n >= 1 && n <= bn[a] : n >= 1 && n <= gn[a]
        }
        set(e, n, t) {
            return e.setDate(t), e.setHours(0, 0, 0, 0), e
        }
        incompatibleTokens = ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]
    },
    xn = class extends m {
        priority = 90;
        subpriority = 1;
        parse(e, n, t) {
            switch (n) {
                case "D":
                case "DD":
                    return p(v.dayOfYear, e);
                case "Do":
                    return t.ordinalNumber(e, {
                        unit: "date"
                    });
                default:
                    return D(n.length, e)
            }
        }
        validate(e, n) {
            const t = e.getFullYear();
            return Ie(t) ? n >= 1 && n <= 366 : n >= 1 && n <= 365
        }
        set(e, n, t) {
            return e.setMonth(0, t), e.setHours(0, 0, 0, 0), e
        }
        incompatibleTokens = ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]
    };

function oe(e, n, t) {
    const r = I(),
        a = t ? .weekStartsOn ? ? t ? .locale ? .options ? .weekStartsOn ? ? r.weekStartsOn ? ? r.locale ? .options ? .weekStartsOn ? ? 0,
        s = l(e, t ? .in),
        i = s.getDay(),
        o = (n % 7 + 7) % 7,
        u = 7 - a,
        c = n < 0 || n > 6 ? n - (i + u) % 7 : (o + u) % 7 - (i + u) % 7;
    return ne(s, c, t)
}
var Dn = class extends m {
        priority = 90;
        parse(e, n, t) {
            switch (n) {
                case "E":
                case "EE":
                case "EEE":
                    return t.day(e, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "short",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEE":
                    return t.day(e, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return t.day(e, {
                        width: "short",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return t.day(e, {
                        width: "wide",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "short",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "narrow",
                        context: "formatting"
                    })
            }
        }
        validate(e, n) {
            return n >= 0 && n <= 6
        }
        set(e, n, t, r) {
            return e = oe(e, t, r), e.setHours(0, 0, 0, 0), e
        }
        incompatibleTokens = ["D", "i", "e", "c", "t", "T"]
    },
    vn = class extends m {
        priority = 90;
        parse(e, n, t, r) {
            const a = s => {
                const i = Math.floor((s - 1) / 7) * 7;
                return (s + r.weekStartsOn + 6) % 7 + i
            };
            switch (n) {
                case "e":
                case "ee":
                    return M(D(n.length, e), a);
                case "eo":
                    return M(t.ordinalNumber(e, {
                        unit: "day"
                    }), a);
                case "eee":
                    return t.day(e, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "short",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeee":
                    return t.day(e, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return t.day(e, {
                        width: "short",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return t.day(e, {
                        width: "wide",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "short",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "narrow",
                        context: "formatting"
                    })
            }
        }
        validate(e, n) {
            return n >= 0 && n <= 6
        }
        set(e, n, t, r) {
            return e = oe(e, t, r), e.setHours(0, 0, 0, 0), e
        }
        incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]
    },
    Mn = class extends m {
        priority = 90;
        parse(e, n, t, r) {
            const a = s => {
                const i = Math.floor((s - 1) / 7) * 7;
                return (s + r.weekStartsOn + 6) % 7 + i
            };
            switch (n) {
                case "c":
                case "cc":
                    return M(D(n.length, e), a);
                case "co":
                    return M(t.ordinalNumber(e, {
                        unit: "day"
                    }), a);
                case "ccc":
                    return t.day(e, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || t.day(e, {
                        width: "short",
                        context: "standalone"
                    }) || t.day(e, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "ccccc":
                    return t.day(e, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return t.day(e, {
                        width: "short",
                        context: "standalone"
                    }) || t.day(e, {
                        width: "narrow",
                        context: "standalone"
                    });
                default:
                    return t.day(e, {
                        width: "wide",
                        context: "standalone"
                    }) || t.day(e, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || t.day(e, {
                        width: "short",
                        context: "standalone"
                    }) || t.day(e, {
                        width: "narrow",
                        context: "standalone"
                    })
            }
        }
        validate(e, n) {
            return n >= 0 && n <= 6
        }
        set(e, n, t, r) {
            return e = oe(e, t, r), e.setHours(0, 0, 0, 0), e
        }
        incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]
    };

function Tn(e, n, t) {
    const r = l(e, t ? .in),
        a = n - St(r, t);
    return ne(r, a, t)
}
var kn = class extends m {
        priority = 90;
        parse(e, n, t) {
            const r = a => a === 0 ? 7 : a;
            switch (n) {
                case "i":
                case "ii":
                    return D(n.length, e);
                case "io":
                    return t.ordinalNumber(e, {
                        unit: "day"
                    });
                case "iii":
                    return M(t.day(e, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "short",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "narrow",
                        context: "formatting"
                    }), r);
                case "iiiii":
                    return M(t.day(e, {
                        width: "narrow",
                        context: "formatting"
                    }), r);
                case "iiiiii":
                    return M(t.day(e, {
                        width: "short",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "narrow",
                        context: "formatting"
                    }), r);
                default:
                    return M(t.day(e, {
                        width: "wide",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "short",
                        context: "formatting"
                    }) || t.day(e, {
                        width: "narrow",
                        context: "formatting"
                    }), r)
            }
        }
        validate(e, n) {
            return n >= 1 && n <= 7
        }
        set(e, n, t) {
            return e = Tn(e, t), e.setHours(0, 0, 0, 0), e
        }
        incompatibleTokens = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]
    },
    On = class extends m {
        priority = 80;
        parse(e, n, t) {
            switch (n) {
                case "a":
                case "aa":
                case "aaa":
                    return t.dayPeriod(e, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || t.dayPeriod(e, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "aaaaa":
                    return t.dayPeriod(e, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return t.dayPeriod(e, {
                        width: "wide",
                        context: "formatting"
                    }) || t.dayPeriod(e, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || t.dayPeriod(e, {
                        width: "narrow",
                        context: "formatting"
                    })
            }
        }
        set(e, n, t) {
            return e.setHours(ie(t), 0, 0, 0), e
        }
        incompatibleTokens = ["b", "B", "H", "k", "t", "T"]
    },
    Pn = class extends m {
        priority = 80;
        parse(e, n, t) {
            switch (n) {
                case "b":
                case "bb":
                case "bbb":
                    return t.dayPeriod(e, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || t.dayPeriod(e, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "bbbbb":
                    return t.dayPeriod(e, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return t.dayPeriod(e, {
                        width: "wide",
                        context: "formatting"
                    }) || t.dayPeriod(e, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || t.dayPeriod(e, {
                        width: "narrow",
                        context: "formatting"
                    })
            }
        }
        set(e, n, t) {
            return e.setHours(ie(t), 0, 0, 0), e
        }
        incompatibleTokens = ["a", "B", "H", "k", "t", "T"]
    },
    Yn = class extends m {
        priority = 80;
        parse(e, n, t) {
            switch (n) {
                case "B":
                case "BB":
                case "BBB":
                    return t.dayPeriod(e, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || t.dayPeriod(e, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "BBBBB":
                    return t.dayPeriod(e, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return t.dayPeriod(e, {
                        width: "wide",
                        context: "formatting"
                    }) || t.dayPeriod(e, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || t.dayPeriod(e, {
                        width: "narrow",
                        context: "formatting"
                    })
            }
        }
        set(e, n, t) {
            return e.setHours(ie(t), 0, 0, 0), e
        }
        incompatibleTokens = ["a", "b", "t", "T"]
    },
    _n = class extends m {
        priority = 70;
        parse(e, n, t) {
            switch (n) {
                case "h":
                    return p(v.hour12h, e);
                case "ho":
                    return t.ordinalNumber(e, {
                        unit: "hour"
                    });
                default:
                    return D(n.length, e)
            }
        }
        validate(e, n) {
            return n >= 1 && n <= 12
        }
        set(e, n, t) {
            const r = e.getHours() >= 12;
            return r && t < 12 ? e.setHours(t + 12, 0, 0, 0) : !r && t === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(t, 0, 0, 0), e
        }
        incompatibleTokens = ["H", "K", "k", "t", "T"]
    },
    Nn = class extends m {
        priority = 70;
        parse(e, n, t) {
            switch (n) {
                case "H":
                    return p(v.hour23h, e);
                case "Ho":
                    return t.ordinalNumber(e, {
                        unit: "hour"
                    });
                default:
                    return D(n.length, e)
            }
        }
        validate(e, n) {
            return n >= 0 && n <= 23
        }
        set(e, n, t) {
            return e.setHours(t, 0, 0, 0), e
        }
        incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"]
    },
    Wn = class extends m {
        priority = 70;
        parse(e, n, t) {
            switch (n) {
                case "K":
                    return p(v.hour11h, e);
                case "Ko":
                    return t.ordinalNumber(e, {
                        unit: "hour"
                    });
                default:
                    return D(n.length, e)
            }
        }
        validate(e, n) {
            return n >= 0 && n <= 11
        }
        set(e, n, t) {
            return e.getHours() >= 12 && t < 12 ? e.setHours(t + 12, 0, 0, 0) : e.setHours(t, 0, 0, 0), e
        }
        incompatibleTokens = ["h", "H", "k", "t", "T"]
    },
    In = class extends m {
        priority = 70;
        parse(e, n, t) {
            switch (n) {
                case "k":
                    return p(v.hour24h, e);
                case "ko":
                    return t.ordinalNumber(e, {
                        unit: "hour"
                    });
                default:
                    return D(n.length, e)
            }
        }
        validate(e, n) {
            return n >= 1 && n <= 24
        }
        set(e, n, t) {
            const r = t <= 24 ? t % 24 : t;
            return e.setHours(r, 0, 0, 0), e
        }
        incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"]
    },
    Hn = class extends m {
        priority = 60;
        parse(e, n, t) {
            switch (n) {
                case "m":
                    return p(v.minute, e);
                case "mo":
                    return t.ordinalNumber(e, {
                        unit: "minute"
                    });
                default:
                    return D(n.length, e)
            }
        }
        validate(e, n) {
            return n >= 0 && n <= 59
        }
        set(e, n, t) {
            return e.setMinutes(t, 0, 0), e
        }
        incompatibleTokens = ["t", "T"]
    },
    En = class extends m {
        priority = 50;
        parse(e, n, t) {
            switch (n) {
                case "s":
                    return p(v.second, e);
                case "so":
                    return t.ordinalNumber(e, {
                        unit: "second"
                    });
                default:
                    return D(n.length, e)
            }
        }
        validate(e, n) {
            return n >= 0 && n <= 59
        }
        set(e, n, t) {
            return e.setSeconds(t, 0), e
        }
        incompatibleTokens = ["t", "T"]
    },
    Cn = class extends m {
        priority = 30;
        parse(e, n) {
            const t = r => Math.trunc(r * Math.pow(10, -n.length + 3));
            return M(D(n.length, e), t)
        }
        set(e, n, t) {
            return e.setMilliseconds(t), e
        }
        incompatibleTokens = ["t", "T"]
    },
    Fn = class extends m {
        priority = 10;
        parse(e, n) {
            switch (n) {
                case "X":
                    return N(_.basicOptionalMinutes, e);
                case "XX":
                    return N(_.basic, e);
                case "XXXX":
                    return N(_.basicOptionalSeconds, e);
                case "XXXXX":
                    return N(_.extendedOptionalSeconds, e);
                default:
                    return N(_.extended, e)
            }
        }
        set(e, n, t) {
            return n.timestampIsSet ? e : f(e, e.getTime() - W(e) - t)
        }
        incompatibleTokens = ["t", "T", "x"]
    },
    qn = class extends m {
        priority = 10;
        parse(e, n) {
            switch (n) {
                case "x":
                    return N(_.basicOptionalMinutes, e);
                case "xx":
                    return N(_.basic, e);
                case "xxxx":
                    return N(_.basicOptionalSeconds, e);
                case "xxxxx":
                    return N(_.extendedOptionalSeconds, e);
                default:
                    return N(_.extended, e)
            }
        }
        set(e, n, t) {
            return n.timestampIsSet ? e : f(e, e.getTime() - W(e) - t)
        }
        incompatibleTokens = ["t", "T", "X"]
    },
    Rn = class extends m {
        priority = 40;
        parse(e) {
            return Ne(e)
        }
        set(e, n, t) {
            return [f(e, t * 1e3), {
                timestampIsSet: !0
            }]
        }
        incompatibleTokens = "*"
    },
    Ln = class extends m {
        priority = 20;
        parse(e) {
            return Ne(e)
        }
        set(e, n, t) {
            return [f(e, t), {
                timestampIsSet: !0
            }]
        }
        incompatibleTokens = "*"
    },
    Qn = {
        G: new rn,
        y: new an,
        Y: new sn,
        R: new on,
        u: new un,
        Q: new cn,
        q: new dn,
        M: new ln,
        L: new fn,
        w: new mn,
        I: new yn,
        d: new pn,
        D: new xn,
        E: new Dn,
        e: new vn,
        c: new Mn,
        i: new kn,
        a: new On,
        b: new Pn,
        B: new Yn,
        h: new _n,
        H: new Nn,
        K: new Wn,
        k: new In,
        m: new Hn,
        s: new En,
        S: new Cn,
        X: new Fn,
        x: new qn,
        t: new Rn,
        T: new Ln
    },
    Xn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    An = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    $n = /^'([^]*?)'?$/,
    Bn = /''/g,
    Gn = /\S/,
    jn = /[a-zA-Z]/;

function Nr(e, n, t, r) {
    const a = () => f(r ? .in || t, NaN),
        s = Zt(),
        i = r ? .locale ? ? s.locale ? ? R,
        o = r ? .firstWeekContainsDate ? ? r ? .locale ? .options ? .firstWeekContainsDate ? ? s.firstWeekContainsDate ? ? s.locale ? .options ? .firstWeekContainsDate ? ? 1,
        u = r ? .weekStartsOn ? ? r ? .locale ? .options ? .weekStartsOn ? ? s.weekStartsOn ? ? s.locale ? .options ? .weekStartsOn ? ? 0;
    if (!n) return e ? a() : l(t, r ? .in);
    const c = {
            firstWeekContainsDate: o,
            weekStartsOn: u,
            locale: i
        },
        d = [new nn(r ? .in, t)],
        w = n.match(An).map(h => {
            const x = h[0];
            if (x in K) {
                const Y = K[x];
                return Y(h, i.formatLong)
            }
            return h
        }).join("").match(Xn),
        g = [];
    for (let h of w) {
        !r ? .useAdditionalWeekYearTokens && Ye(h) && ee(h, n, e), !r ? .useAdditionalDayOfYearTokens && Pe(h) && ee(h, n, e);
        const x = h[0],
            Y = Qn[x];
        if (Y) {
            const {
                incompatibleTokens: ue
            } = Y;
            if (Array.isArray(ue)) {
                const ce = g.find(de => ue.includes(de.token) || de.token === x);
                if (ce) throw new RangeError(`The format string mustn't contain \`${ce.fullToken}\` and \`${h}\` at the same time`)
            } else if (Y.incompatibleTokens === "*" && g.length > 0) throw new RangeError(`The format string mustn't contain \`${h}\` and any other token at the same time`);
            g.push({
                token: x,
                fullToken: h
            });
            const V = Y.run(e, h, i.match, c);
            if (!V) return a();
            d.push(V.setter), e = V.rest
        } else {
            if (x.match(jn)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + x + "`");
            if (h === "''" ? h = "'" : x === "'" && (h = Un(h)), e.indexOf(h) === 0) e = e.slice(h.length);
            else return a()
        }
    }
    if (e.length > 0 && Gn.test(e)) return a();
    const O = d.map(h => h.priority).sort((h, x) => x - h).filter((h, x, Y) => Y.indexOf(h) === x).map(h => d.filter(x => x.priority === h).sort((x, Y) => Y.subPriority - x.subPriority)).map(h => h[0]);
    let b = l(t, r ? .in);
    if (isNaN(+b)) return a();
    const T = {};
    for (const h of O) {
        if (!h.validate(b, c)) return a();
        const x = h.set(b, T, c);
        Array.isArray(x) ? (b = x[0], Object.assign(T, x[1])) : b = x
    }
    return b
}

function Un(e) {
    return e.match($n)[1].replace(Bn, "'")
}

function Wr(e, n) {
    const t = l(e, n ? .in);
    return t.setMinutes(0, 0, 0), t
}

function Ir(e, n, t) {
    const [r, a] = k(t ? .in, e, n);
    return +P(r, t) == +P(a, t)
}

function Hr(e, n) {
    const t = l(e, n ? .in);
    return t.setSeconds(0, 0), t
}

function zn(e, n, t) {
    const [r, a] = k(t ? .in, e, n);
    return r.getFullYear() === a.getFullYear()
}

function Er(e, n) {
    return zn(f(n ? .in || e, e), B(n ? .in || e))
}

function Cr(e, n) {
    return ve(f(n ? .in || e, e), B(n ? .in || e))
}

function Vn(e, n, t) {
    return ne(e, -n, t)
}

function Fr(e, n) {
    return ve(f(n ? .in || e, e), Vn(B(n ? .in || e), 1))
}

function qr(e, n) {
    const t = () => f(n ? .in, NaN),
        r = n ? .additionalDigits ? ? 2,
        a = Kn(e);
    let s;
    if (a.date) {
        const c = er(a.date, r);
        s = tr(c.restDateString, c.year)
    }
    if (!s || isNaN(+s)) return t();
    const i = +s;
    let o = 0,
        u;
    if (a.time && (o = nr(a.time), isNaN(o))) return t();
    if (a.timezone) {
        if (u = rr(a.timezone), isNaN(u)) return t()
    } else {
        const c = new Date(i + o),
            d = l(0, n ? .in);
        return d.setFullYear(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()), d.setHours(c.getUTCHours(), c.getUTCMinutes(), c.getUTCSeconds(), c.getUTCMilliseconds()), d
    }
    return l(i + o + u, n ? .in)
}
var G = {
        dateTimeDelimiter: /[T ]/,
        timeZoneDelimiter: /[Z ]/i,
        timezone: /([Z+-].*)$/
    },
    Zn = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
    Sn = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
    Jn = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function Kn(e) {
    const n = {},
        t = e.split(G.dateTimeDelimiter);
    let r;
    if (t.length > 2) return n;
    if (/:/.test(t[0]) ? r = t[0] : (n.date = t[0], r = t[1], G.timeZoneDelimiter.test(n.date) && (n.date = e.split(G.timeZoneDelimiter)[0], r = e.substr(n.date.length, e.length))), r) {
        const a = G.timezone.exec(r);
        a ? (n.time = r.replace(a[1], ""), n.timezone = a[1]) : n.time = r
    }
    return n
}

function er(e, n) {
    const t = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + n) + "})|(\\d{2}|[+-]\\d{" + (2 + n) + "})$)"),
        r = e.match(t);
    if (!r) return {
        year: NaN,
        restDateString: ""
    };
    const a = r[1] ? parseInt(r[1]) : null,
        s = r[2] ? parseInt(r[2]) : null;
    return {
        year: s === null ? a : s * 100,
        restDateString: e.slice((r[1] || r[2]).length)
    }
}

function tr(e, n) {
    if (n === null) return new Date(NaN);
    const t = e.match(Zn);
    if (!t) return new Date(NaN);
    const r = !!t[4],
        a = X(t[1]),
        s = X(t[2]) - 1,
        i = X(t[3]),
        o = X(t[4]),
        u = X(t[5]) - 1;
    if (r) return ur(n, o, u) ? ar(n, o, u) : new Date(NaN); {
        const c = new Date(0);
        return !ir(n, s, i) || !or(n, a) ? new Date(NaN) : (c.setUTCFullYear(n, s, Math.max(a, i)), c)
    }
}

function X(e) {
    return e ? parseInt(e) : 1
}

function nr(e) {
    const n = e.match(Sn);
    if (!n) return NaN;
    const t = S(n[1]),
        r = S(n[2]),
        a = S(n[3]);
    return cr(t, r, a) ? t * $ + r * C + a * 1e3 : NaN
}

function S(e) {
    return e && parseFloat(e.replace(",", ".")) || 0
}

function rr(e) {
    if (e === "Z") return 0;
    const n = e.match(Jn);
    if (!n) return 0;
    const t = n[1] === "+" ? -1 : 1,
        r = parseInt(n[2]),
        a = n[3] && parseInt(n[3]) || 0;
    return dr(r, a) ? t * (r * $ + a * C) : NaN
}

function ar(e, n, t) {
    const r = new Date(0);
    r.setUTCFullYear(e, 0, 4);
    const a = r.getUTCDay() || 7,
        s = (n - 1) * 7 + t + 1 - a;
    return r.setUTCDate(r.getUTCDate() + s), r
}
var sr = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function He(e) {
    return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0
}

function ir(e, n, t) {
    return n >= 0 && n <= 11 && t >= 1 && t <= (sr[n] || (He(e) ? 29 : 28))
}

function or(e, n) {
    return n >= 1 && n <= (He(e) ? 366 : 365)
}

function ur(e, n, t) {
    return n >= 1 && n <= 53 && t >= 0 && t <= 6
}

function cr(e, n, t) {
    return e === 24 ? n === 0 && t === 0 : t >= 0 && t < 60 && n >= 0 && n < 60 && e >= 0 && e < 25
}

function dr(e, n) {
    return n >= 0 && n <= 59
}

function Rr(e, n, t) {
    return pe(e, -n, t)
}

function Lr(e, n, t) {
    return $e(e, -n, t)
}

function Qr(e, n, t) {
    return De(e, -n, t)
}
export {
    Ke as A, mr as B, Q as C, Mr as D, Tr as E, br as F, j as H, gr as I, ze as L, Ve as M, xr as N, vr as O, pr as P, yr as R, pt as S, Z as T, pe as U, re as V, ne as W, Pr as _, Fr as a, zt as b, Er as c, Ir as d, Wr as f, Yr as g, _r as h, qr as i, Ze as j, Dr as k, zn as l, Zt as m, Lr as n, Vn as o, Nr as p, Rr as r, Cr as s, Qr as t, Hr as u, Or as v, L as w, Gt as x, kr as y, wr as z
};
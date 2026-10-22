import {
    o as ro
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    i as Ts,
    n as _s,
    r as Ms
} from "./vendor-react-Fx2PtaaM.js";
import {
    i as Is,
    r as ao,
    t as pe
} from "./vendor-tslib-CeDFfI6J.js";
import {
    a as Ns,
    c as As,
    i as Ds,
    l as Os,
    n as js,
    o as Ls,
    r as ks,
    s as Fs,
    t as $s
} from "./vendor-floating-ui-98f9kiPk.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "57613bb3-5f32-4590-8f2e-bf8c0b58699a", e._sentryDebugIdIdentifier = "sentry-dbid-57613bb3-5f32-4590-8f2e-bf8c0b58699a")
    })()
} catch {}
var a = ro(Ts()),
    ct = "right-scroll-bar-position",
    lt = "width-before-scroll-bar",
    Gs = "with-scroll-bars-hidden",
    Bs = "--removed-body-scroll-bar-size";

function $t(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function Ks(e, t) {
    var n = (0, a.useState)(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(o) {
                    var r = n.value;
                    r !== o && (n.value = o, n.callback(o, r))
                }
            }
        }
    })[0];
    return n.callback = t, n.facade
}
var Us = typeof window < "u" ? a.useLayoutEffect : a.useEffect,
    Gn = new WeakMap;

function Vs(e, t) {
    var n = Ks(t || null, function(o) {
        return e.forEach(function(r) {
            return $t(r, o)
        })
    });
    return Us(function() {
        var o = Gn.get(n);
        if (o) {
            var r = new Set(o),
                s = new Set(e),
                c = n.current;
            r.forEach(function(i) {
                s.has(i) || $t(i, null)
            }), s.forEach(function(i) {
                r.has(i) || $t(i, c)
            })
        }
        Gn.set(n, e)
    }, [e]), n
}

function Ws(e) {
    return e
}

function Hs(e, t) {
    t === void 0 && (t = Ws);
    var n = [],
        o = !1;
    return {
        read: function() {
            if (o) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(r) {
            var s = t(r, o);
            return n.push(s),
                function() {
                    n = n.filter(function(c) {
                        return c !== s
                    })
                }
        },
        assignSyncMedium: function(r) {
            for (o = !0; n.length;) {
                var s = n;
                n = [], s.forEach(r)
            }
            n = {
                push: function(c) {
                    return r(c)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(r) {
            o = !0;
            var s = [];
            if (n.length) {
                var c = n;
                n = [], c.forEach(r), s = n
            }
            var i = function() {
                    var d = s;
                    s = [], d.forEach(r)
                },
                u = function() {
                    return Promise.resolve().then(i)
                };
            u(), n = {
                push: function(d) {
                    s.push(d), u()
                },
                filter: function(d) {
                    return s = s.filter(d), n
                }
            }
        }
    }
}

function Ys(e) {
    e === void 0 && (e = {});
    var t = Hs(null);
    return t.options = pe({
        async: !0,
        ssr: !1
    }, e), t
}
var so = function(e) {
    var t = e.sideCar,
        n = ao(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var o = t.read();
    if (!o) throw new Error("Sidecar medium not found");
    return a.createElement(o, pe({}, n))
};
so.isSideCarExport = !0;

function zs(e, t) {
    return e.useMedium(t), so
}
var io = Ys(),
    Gt = function() {},
    ht = a.forwardRef(function(e, t) {
        var n = a.useRef(null),
            o = a.useState({
                onScrollCapture: Gt,
                onWheelCapture: Gt,
                onTouchMoveCapture: Gt
            }),
            r = o[0],
            s = o[1],
            c = e.forwardProps,
            i = e.children,
            u = e.className,
            d = e.removeScrollBar,
            p = e.enabled,
            f = e.shards,
            h = e.sideCar,
            x = e.noRelative,
            C = e.noIsolation,
            v = e.inert,
            m = e.allowPinchZoom,
            w = e.as,
            g = w === void 0 ? "div" : w,
            y = e.gapMode,
            E = ao(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            T = h,
            N = Vs([n, t]),
            b = pe(pe({}, E), r);
        return a.createElement(a.Fragment, null, p && a.createElement(T, {
            sideCar: io,
            removeScrollBar: d,
            shards: f,
            noRelative: x,
            noIsolation: C,
            inert: v,
            setCallbacks: s,
            allowPinchZoom: !!m,
            lockRef: n,
            gapMode: y
        }), c ? a.cloneElement(a.Children.only(i), pe(pe({}, b), {
            ref: N
        })) : a.createElement(g, pe({}, b, {
            className: u,
            ref: N
        }), i))
    });
ht.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
ht.classNames = {
    fullWidth: lt,
    zeroRight: ct
};
var Bn, Xs = function() {
    if (Bn) return Bn;
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function qs() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = Xs();
    return t && e.setAttribute("nonce", t), e
}

function Zs(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function Qs(e) {
    (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
}
var Js = function() {
        var e = 0,
            t = null;
        return {
            add: function(n) {
                e == 0 && (t = qs()) && (Zs(t, n), Qs(t)), e++
            },
            remove: function() {
                e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
        }
    },
    ei = function() {
        var e = Js();
        return function(t, n) {
            a.useEffect(function() {
                return e.add(t),
                    function() {
                        e.remove()
                    }
            }, [t && n])
        }
    },
    co = function() {
        var e = ei(),
            t = function(n) {
                var o = n.styles,
                    r = n.dynamic;
                return e(o, r), null
            };
        return t
    },
    ti = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    Bt = function(e) {
        return parseInt(e || "", 10) || 0
    },
    ni = function(e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
            o = t[e === "padding" ? "paddingTop" : "marginTop"],
            r = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [Bt(n), Bt(o), Bt(r)]
    },
    oi = function(e) {
        if (e === void 0 && (e = "margin"), typeof window > "u") return ti;
        var t = ni(e),
            n = document.documentElement.clientWidth,
            o = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, o - n + t[2] - t[0])
        }
    },
    ri = co(),
    Fe = "data-scroll-locked",
    ai = function(e, t, n, o) {
        var r = e.left,
            s = e.top,
            c = e.right,
            i = e.gap;
        return n === void 0 && (n = "margin"), `
  .`.concat(Gs, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(i, "px ").concat(o, `;
  }
  body[`).concat(Fe, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(o, ";"), n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(o, `;
    `), n === "padding" && "padding-right: ".concat(i, "px ").concat(o, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(ct, ` {
    right: `).concat(i, "px ").concat(o, `;
  }
  
  .`).concat(lt, ` {
    margin-right: `).concat(i, "px ").concat(o, `;
  }
  
  .`).concat(ct, " .").concat(ct, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(lt, " .").concat(lt, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Fe, `] {
    `).concat(Bs, ": ").concat(i, `px;
  }
`)
    },
    Kn = function() {
        var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
        return isFinite(e) ? e : 0
    },
    si = function() {
        a.useEffect(function() {
            return document.body.setAttribute(Fe, (Kn() + 1).toString()),
                function() {
                    var e = Kn() - 1;
                    e <= 0 ? document.body.removeAttribute(Fe) : document.body.setAttribute(Fe, e.toString())
                }
        }, [])
    },
    ii = function(e) {
        var t = e.noRelative,
            n = e.noImportant,
            o = e.gapMode,
            r = o === void 0 ? "margin" : o;
        si();
        var s = a.useMemo(function() {
            return oi(r)
        }, [r]);
        return a.createElement(ri, {
            styles: ai(s, !t, r, n ? "" : "!important")
        })
    },
    zt = !1;
if (typeof window < "u") try {
    var tt = Object.defineProperty({}, "passive", {
        get: function() {
            return zt = !0, !0
        }
    });
    window.addEventListener("test", tt, tt), window.removeEventListener("test", tt, tt)
} catch {
    zt = !1
}
var Te = zt ? {
        passive: !1
    } : !1,
    ci = function(e) {
        return e.tagName === "TEXTAREA"
    },
    lo = function(e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !ci(e) && n[t] === "visible")
    },
    li = function(e) {
        return lo(e, "overflowY")
    },
    ui = function(e) {
        return lo(e, "overflowX")
    },
    Un = function(e, t) {
        var n = t.ownerDocument,
            o = t;
        do {
            if (typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host), uo(e, o)) {
                var r = fo(e, o);
                if (r[1] > r[2]) return !0
            }
            o = o.parentNode
        } while (o && o !== n.body);
        return !1
    },
    di = function(e) {
        return [e.scrollTop, e.scrollHeight, e.clientHeight]
    },
    fi = function(e) {
        return [e.scrollLeft, e.scrollWidth, e.clientWidth]
    },
    uo = function(e, t) {
        return e === "v" ? li(t) : ui(t)
    },
    fo = function(e, t) {
        return e === "v" ? di(t) : fi(t)
    },
    pi = function(e, t) {
        return e === "h" && t === "rtl" ? -1 : 1
    },
    vi = function(e, t, n, o, r) {
        var s = pi(e, window.getComputedStyle(t).direction),
            c = s * o,
            i = n.target,
            u = t.contains(i),
            d = !1,
            p = c > 0,
            f = 0,
            h = 0;
        do {
            if (!i) break;
            var x = fo(e, i),
                C = x[0],
                v = x[1] - x[2] - s * C;
            (C || v) && uo(e, i) && (f += v, h += C);
            var m = i.parentNode;
            i = m && m.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? m.host : m
        } while (!u && i !== document.body || u && (t.contains(i) || t === i));
        return (p && (r && Math.abs(f) < 1 || !r && c > f) || !p && (r && Math.abs(h) < 1 || !r && -c > h)) && (d = !0), d
    },
    nt = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    Vn = function(e) {
        return [e.deltaX, e.deltaY]
    },
    Wn = function(e) {
        return e && "current" in e ? e.current : e
    },
    mi = function(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    },
    hi = function(e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    },
    gi = 0,
    _e = [];

function xi(e) {
    var t = a.useRef([]),
        n = a.useRef([0, 0]),
        o = a.useRef(),
        r = a.useState(gi++)[0],
        s = a.useState(co)[0],
        c = a.useRef(e);
    a.useEffect(function() {
        c.current = e
    }, [e]), a.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(r));
            var v = Is([e.lockRef.current], (e.shards || []).map(Wn), !0).filter(Boolean);
            return v.forEach(function(m) {
                    return m.classList.add("allow-interactivity-".concat(r))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(r)), v.forEach(function(m) {
                        return m.classList.remove("allow-interactivity-".concat(r))
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var i = a.useCallback(function(v, m) {
            if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey) return !c.current.allowPinchZoom;
            var w = nt(v),
                g = n.current,
                y = "deltaX" in v ? v.deltaX : g[0] - w[0],
                E = "deltaY" in v ? v.deltaY : g[1] - w[1],
                T, N = v.target,
                b = Math.abs(y) > Math.abs(E) ? "h" : "v";
            if ("touches" in v && b === "h" && N.type === "range") return !1;
            var I = Un(b, N);
            if (!I) return !0;
            if (I ? T = b : (T = b === "v" ? "h" : "v", I = Un(b, N)), !I) return !1;
            if (!o.current && "changedTouches" in v && (y || E) && (o.current = T), !T) return !0;
            var O = o.current || T;
            return vi(O, m, v, O === "h" ? y : E, !0)
        }, []),
        u = a.useCallback(function(v) {
            var m = v;
            if (!(!_e.length || _e[_e.length - 1] !== s)) {
                var w = "deltaY" in m ? Vn(m) : nt(m),
                    g = t.current.filter(function(E) {
                        return E.name === m.type && (E.target === m.target || m.target === E.shadowParent) && mi(E.delta, w)
                    })[0];
                if (g && g.should) {
                    m.cancelable && m.preventDefault();
                    return
                }
                if (!g) {
                    var y = (c.current.shards || []).map(Wn).filter(Boolean).filter(function(E) {
                        return E.contains(m.target)
                    });
                    (y.length > 0 ? i(m, y[0]) : !c.current.noIsolation) && m.cancelable && m.preventDefault()
                }
            }
        }, []),
        d = a.useCallback(function(v, m, w, g) {
            var y = {
                name: v,
                delta: m,
                target: w,
                should: g,
                shadowParent: wi(w)
            };
            t.current.push(y), setTimeout(function() {
                t.current = t.current.filter(function(E) {
                    return E !== y
                })
            }, 1)
        }, []),
        p = a.useCallback(function(v) {
            n.current = nt(v), o.current = void 0
        }, []),
        f = a.useCallback(function(v) {
            d(v.type, Vn(v), v.target, i(v, e.lockRef.current))
        }, []),
        h = a.useCallback(function(v) {
            d(v.type, nt(v), v.target, i(v, e.lockRef.current))
        }, []);
    a.useEffect(function() {
        return _e.push(s), e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: h
            }), document.addEventListener("wheel", u, Te), document.addEventListener("touchmove", u, Te), document.addEventListener("touchstart", p, Te),
            function() {
                _e = _e.filter(function(v) {
                    return v !== s
                }), document.removeEventListener("wheel", u, Te), document.removeEventListener("touchmove", u, Te), document.removeEventListener("touchstart", p, Te)
            }
    }, []);
    var x = e.removeScrollBar,
        C = e.inert;
    return a.createElement(a.Fragment, null, C ? a.createElement(s, {
        styles: hi(r)
    }) : null, x ? a.createElement(ii, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}

function wi(e) {
    for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
    return t
}
var Ci = zs(io, xi),
    Ke = a.forwardRef(function(e, t) {
        return a.createElement(ht, pe({}, e, {
            ref: t,
            sideCar: Ci
        }))
    });
Ke.classNames = ht.classNames;

function Hn(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function gt(...e) {
    return t => {
        let n = !1;
        const o = e.map(r => {
            const s = Hn(r, t);
            return !n && typeof s == "function" && (n = !0), s
        });
        if (n) return () => {
            for (let r = 0; r < o.length; r++) {
                const s = o[r];
                typeof s == "function" ? s() : Hn(e[r], null)
            }
        }
    }
}

function A(...e) {
    return a.useCallback(gt(...e), e)
}
var Ue = ro(_s(), 1),
    l = Ms();

function ve(e) {
    const t = yi(e),
        n = a.forwardRef((o, r) => {
            const {
                children: s,
                ...c
            } = o, i = a.Children.toArray(s), u = i.find(Ei);
            if (u) {
                const d = u.props.children,
                    p = i.map(f => f === u ? a.Children.count(d) > 1 ? a.Children.only(null) : a.isValidElement(d) ? d.props.children : null : f);
                return (0, l.jsx)(t, { ...c,
                    ref: r,
                    children: a.isValidElement(d) ? a.cloneElement(d, void 0, p) : null
                })
            }
            return (0, l.jsx)(t, { ...c,
                ref: r,
                children: s
            })
        });
    return n.displayName = `${e}.Slot`, n
}
var rf = ve("Slot");

function yi(e) {
    const t = a.forwardRef((n, o) => {
        const {
            children: r,
            ...s
        } = n;
        if (a.isValidElement(r)) {
            const c = Pi(r),
                i = bi(s, r.props);
            return r.type !== a.Fragment && (i.ref = o ? gt(o, c) : c), a.cloneElement(r, i)
        }
        return a.Children.count(r) > 1 ? a.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var po = Symbol("radix.slottable");

function Si(e) {
    const t = ({
        children: n
    }) => (0, l.jsx)(l.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`, t.__radixId = po, t
}

function Ei(e) {
    return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === po
}

function bi(e, t) {
    const n = { ...t
    };
    for (const o in t) {
        const r = e[o],
            s = t[o];
        /^on[A-Z]/.test(o) ? r && s ? n[o] = (...c) => {
            const i = s(...c);
            return r(...c), i
        } : r && (n[o] = r) : o === "style" ? n[o] = { ...r,
            ...s
        } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function Pi(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var R = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
    const n = ve(`Primitive.${t}`),
        o = a.forwardRef((r, s) => {
            const {
                asChild: c,
                ...i
            } = r, u = c ? n : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(u, { ...i,
                ref: s
            })
        });
    return o.displayName = `Primitive.${t}`, { ...e,
        [t]: o
    }
}, {});

function fn(e, t) {
    e && Ue.flushSync(() => e.dispatchEvent(t))
}
var vo = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    Ri = "VisuallyHidden",
    xt = a.forwardRef((e, t) => (0, l.jsx)(R.span, { ...e,
        ref: t,
        style: { ...vo,
            ...e.style
        }
    }));
xt.displayName = Ri;
var Ti = xt;

function _i(e, t) {
    const n = a.createContext(t),
        o = s => {
            const {
                children: c,
                ...i
            } = s, u = a.useMemo(() => i, Object.values(i));
            return (0, l.jsx)(n.Provider, {
                value: u,
                children: c
            })
        };
    o.displayName = e + "Provider";

    function r(s) {
        const c = a.useContext(n);
        if (c) return c;
        if (t !== void 0) return t;
        throw new Error(`\`${s}\` must be used within \`${e}\``)
    }
    return [o, r]
}

function re(e, t = []) {
    let n = [];

    function o(s, c) {
        const i = a.createContext(c),
            u = n.length;
        n = [...n, c];
        const d = f => {
            const {
                scope: h,
                children: x,
                ...C
            } = f, v = h ? .[e] ? .[u] || i, m = a.useMemo(() => C, Object.values(C));
            return (0, l.jsx)(v.Provider, {
                value: m,
                children: x
            })
        };
        d.displayName = s + "Provider";

        function p(f, h) {
            const x = h ? .[e] ? .[u] || i,
                C = a.useContext(x);
            if (C) return C;
            if (c !== void 0) return c;
            throw new Error(`\`${f}\` must be used within \`${s}\``)
        }
        return [d, p]
    }
    const r = () => {
        const s = n.map(c => a.createContext(c));
        return function(i) {
            const u = i ? .[e] || s;
            return a.useMemo(() => ({
                [`__scope${e}`]: { ...i,
                    [e]: u
                }
            }), [i, u])
        }
    };
    return r.scopeName = e, [o, Mi(r, ...t)]
}

function Mi(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const o = e.map(r => ({
            useScope: r(),
            scopeName: r.scopeName
        }));
        return function(s) {
            const c = o.reduce((i, {
                useScope: u,
                scopeName: d
            }) => {
                const p = u(s)[`__scope${d}`];
                return { ...i,
                    ...p
                }
            }, {});
            return a.useMemo(() => ({
                [`__scope${t.scopeName}`]: c
            }), [c])
        }
    };
    return n.scopeName = t.scopeName, n
}

function Ve(e) {
    const t = e + "CollectionProvider",
        [n, o] = re(t),
        [r, s] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        c = v => {
            const {
                scope: m,
                children: w
            } = v, g = a.useRef(null), y = a.useRef(new Map).current;
            return (0, l.jsx)(r, {
                scope: m,
                itemMap: y,
                collectionRef: g,
                children: w
            })
        };
    c.displayName = t;
    const i = e + "CollectionSlot",
        u = ve(i),
        d = a.forwardRef((v, m) => {
            const {
                scope: w,
                children: g
            } = v, y = s(i, w), E = A(m, y.collectionRef);
            return (0, l.jsx)(u, {
                ref: E,
                children: g
            })
        });
    d.displayName = i;
    const p = e + "CollectionItemSlot",
        f = "data-radix-collection-item",
        h = ve(p),
        x = a.forwardRef((v, m) => {
            const {
                scope: w,
                children: g,
                ...y
            } = v, E = a.useRef(null), T = A(m, E), N = s(p, w);
            return a.useEffect(() => (N.itemMap.set(E, {
                ref: E,
                ...y
            }), () => {
                N.itemMap.delete(E)
            })), (0, l.jsx)(h, {
                [f]: "",
                ref: T,
                children: g
            })
        });
    x.displayName = p;

    function C(v) {
        const m = s(e + "CollectionConsumer", v);
        return a.useCallback(() => {
            const w = m.collectionRef.current;
            if (!w) return [];
            const g = Array.from(w.querySelectorAll(`[${f}]`));
            return Array.from(m.itemMap.values()).sort((y, E) => g.indexOf(y.ref.current) - g.indexOf(E.ref.current))
        }, [m.collectionRef, m.itemMap])
    }
    return [{
        Provider: c,
        Slot: d,
        ItemSlot: x
    }, C, o]
}
var af = !!(typeof window < "u" && window.document && window.document.createElement);

function S(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(r) {
        if (e ? .(r), n === !1 || !r.defaultPrevented) return t ? .(r)
    }
}
var Y = globalThis ? .document ? a.useLayoutEffect : () => {},
    Ii = a[" useInsertionEffect ".trim().toString()] || Y;

function oe({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: o
}) {
    const [r, s, c] = Ni({
        defaultProp: t,
        onChange: n
    }), i = e !== void 0, u = i ? e : r; {
        const d = a.useRef(e !== void 0);
        a.useEffect(() => {
            const p = d.current;
            p !== i && console.warn(`${o} is changing from ${p?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), d.current = i
        }, [i, o])
    }
    return [u, a.useCallback(d => {
        if (i) {
            const p = Ai(d) ? d(e) : d;
            p !== e && c.current ? .(p)
        } else s(d)
    }, [i, e, s, c])]
}

function Ni({
    defaultProp: e,
    onChange: t
}) {
    const [n, o] = a.useState(e), r = a.useRef(n), s = a.useRef(t);
    return Ii(() => {
        s.current = t
    }, [t]), a.useEffect(() => {
        r.current !== n && (s.current ? .(n), r.current = n)
    }, [n, r]), [n, o, s]
}

function Ai(e) {
    return typeof e == "function"
}

function Di(e, t) {
    return a.useReducer((n, o) => t[n][o] ? ? n, e)
}
var ie = e => {
    const {
        present: t,
        children: n
    } = e, o = Oi(t), r = typeof n == "function" ? n({
        present: o.isPresent
    }) : a.Children.only(n), s = A(o.ref, ji(r));
    return typeof n == "function" || o.isPresent ? a.cloneElement(r, {
        ref: s
    }) : null
};
ie.displayName = "Presence";

function Oi(e) {
    const [t, n] = a.useState(), o = a.useRef(null), r = a.useRef(e), s = a.useRef("none"), [c, i] = Di(e ? "mounted" : "unmounted", {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return a.useEffect(() => {
        const u = ot(o.current);
        s.current = c === "mounted" ? u : "none"
    }, [c]), Y(() => {
        const u = o.current,
            d = r.current;
        if (d !== e) {
            const p = s.current,
                f = ot(u);
            e ? i("MOUNT") : f === "none" || u ? .display === "none" ? i("UNMOUNT") : i(d && p !== f ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e
        }
    }, [e, i]), Y(() => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ? ? window,
                p = h => {
                    const x = ot(o.current).includes(CSS.escape(h.animationName));
                    if (h.target === t && x && (i("ANIMATION_END"), !r.current)) {
                        const C = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = C)
                        })
                    }
                },
                f = h => {
                    h.target === t && (s.current = ot(o.current))
                };
            return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
                d.clearTimeout(u), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p)
            }
        } else i("ANIMATION_END")
    }, [t, i]), {
        isPresent: ["mounted", "unmountSuspended"].includes(c),
        ref: a.useCallback(u => {
            o.current = u ? getComputedStyle(u) : null, n(u)
        }, [])
    }
}

function ot(e) {
    return e ? .animationName || "none"
}

function ji(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Li = a[" useId ".trim().toString()] || (() => {}),
    ki = 0;

function se(e) {
    const [t, n] = a.useState(Li());
    return Y(() => {
        e || n(o => o ? ? String(ki++))
    }, [e]), e || (t ? `radix-${t}` : "")
}
var Fi = a.createContext(void 0);

function Ae(e) {
    const t = a.useContext(Fi);
    return e || t || "ltr"
}

function q(e) {
    const t = a.useRef(e);
    return a.useEffect(() => {
        t.current = e
    }), a.useMemo(() => (...n) => t.current ? .(...n), [])
}

function $i(e, t = globalThis ? .document) {
    const n = q(e);
    a.useEffect(() => {
        const o = r => {
            r.key === "Escape" && n(r)
        };
        return t.addEventListener("keydown", o, {
            capture: !0
        }), () => t.removeEventListener("keydown", o, {
            capture: !0
        })
    }, [n, t])
}
var Gi = "DismissableLayer",
    Xt = "dismissableLayer.update",
    Bi = "dismissableLayer.pointerDownOutside",
    Ki = "dismissableLayer.focusOutside",
    Yn, mo = a.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    be = a.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: r,
            onFocusOutside: s,
            onInteractOutside: c,
            onDismiss: i,
            ...u
        } = e, d = a.useContext(mo), [p, f] = a.useState(null), h = p ? .ownerDocument ? ? globalThis ? .document, [, x] = a.useState({}), C = A(t, b => f(b)), v = Array.from(d.layers), [m] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = v.indexOf(m), g = p ? v.indexOf(p) : -1, y = d.layersWithOutsidePointerEventsDisabled.size > 0, E = g >= w, T = Vi(b => {
            const I = b.target,
                O = [...d.branches].some(D => D.contains(I));
            !E || O || (r ? .(b), c ? .(b), b.defaultPrevented || i ? .())
        }, h), N = Wi(b => {
            const I = b.target;
            [...d.branches].some(O => O.contains(I)) || (s ? .(b), c ? .(b), b.defaultPrevented || i ? .())
        }, h);
        return $i(b => {
            g === d.layers.size - 1 && (o ? .(b), !b.defaultPrevented && i && (b.preventDefault(), i()))
        }, h), a.useEffect(() => {
            if (p) return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Yn = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), zn(), () => {
                n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Yn)
            }
        }, [p, h, n, d]), a.useEffect(() => () => {
            p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), zn())
        }, [p, d]), a.useEffect(() => {
            const b = () => x({});
            return document.addEventListener(Xt, b), () => document.removeEventListener(Xt, b)
        }, []), (0, l.jsx)(R.div, { ...u,
            ref: C,
            style: {
                pointerEvents: y ? E ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: S(e.onFocusCapture, N.onFocusCapture),
            onBlurCapture: S(e.onBlurCapture, N.onBlurCapture),
            onPointerDownCapture: S(e.onPointerDownCapture, T.onPointerDownCapture)
        })
    });
be.displayName = Gi;
var Ui = "DismissableLayerBranch",
    ho = a.forwardRef((e, t) => {
        const n = a.useContext(mo),
            o = a.useRef(null),
            r = A(t, o);
        return a.useEffect(() => {
            const s = o.current;
            if (s) return n.branches.add(s), () => {
                n.branches.delete(s)
            }
        }, [n.branches]), (0, l.jsx)(R.div, { ...e,
            ref: r
        })
    });
ho.displayName = Ui;

function Vi(e, t = globalThis ? .document) {
    const n = q(e),
        o = a.useRef(!1),
        r = a.useRef(() => {});
    return a.useEffect(() => {
        const s = i => {
                if (i.target && !o.current) {
                    let u = function() {
                        go(Bi, n, d, {
                            discrete: !0
                        })
                    };
                    const d = {
                        originalEvent: i
                    };
                    i.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = u, t.addEventListener("click", r.current, {
                        once: !0
                    })) : u()
                } else t.removeEventListener("click", r.current);
                o.current = !1
            },
            c = window.setTimeout(() => {
                t.addEventListener("pointerdown", s)
            }, 0);
        return () => {
            window.clearTimeout(c), t.removeEventListener("pointerdown", s), t.removeEventListener("click", r.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => o.current = !0
    }
}

function Wi(e, t = globalThis ? .document) {
    const n = q(e),
        o = a.useRef(!1);
    return a.useEffect(() => {
        const r = s => {
            s.target && !o.current && go(Ki, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r)
    }, [t, n]), {
        onFocusCapture: () => o.current = !0,
        onBlurCapture: () => o.current = !1
    }
}

function zn() {
    const e = new CustomEvent(Xt);
    document.dispatchEvent(e)
}

function go(e, t, n, {
    discrete: o
}) {
    const r = n.originalEvent.target,
        s = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && r.addEventListener(e, t, {
        once: !0
    }), o ? fn(r, s) : r.dispatchEvent(s)
}
var Hi = be,
    Yi = ho,
    Kt = "focusScope.autoFocusOnMount",
    Ut = "focusScope.autoFocusOnUnmount",
    Xn = {
        bubbles: !1,
        cancelable: !0
    },
    zi = "FocusScope",
    We = a.forwardRef((e, t) => {
        const {
            loop: n = !1,
            trapped: o = !1,
            onMountAutoFocus: r,
            onUnmountAutoFocus: s,
            ...c
        } = e, [i, u] = a.useState(null), d = q(r), p = q(s), f = a.useRef(null), h = A(t, v => u(v)), x = a.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        a.useEffect(() => {
            if (o) {
                let v = function(y) {
                        if (x.paused || !i) return;
                        const E = y.target;
                        i.contains(E) ? f.current = E : fe(f.current, {
                            select: !0
                        })
                    },
                    m = function(y) {
                        if (x.paused || !i) return;
                        const E = y.relatedTarget;
                        E !== null && (i.contains(E) || fe(f.current, {
                            select: !0
                        }))
                    },
                    w = function(y) {
                        if (document.activeElement === document.body)
                            for (const E of y) E.removedNodes.length > 0 && fe(i)
                    };
                document.addEventListener("focusin", v), document.addEventListener("focusout", m);
                const g = new MutationObserver(w);
                return i && g.observe(i, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", v), document.removeEventListener("focusout", m), g.disconnect()
                }
            }
        }, [o, i, x.paused]), a.useEffect(() => {
            if (i) {
                Zn.add(x);
                const v = document.activeElement;
                if (!i.contains(v)) {
                    const m = new CustomEvent(Kt, Xn);
                    i.addEventListener(Kt, d), i.dispatchEvent(m), m.defaultPrevented || (Xi(ec(xo(i)), {
                        select: !0
                    }), document.activeElement === v && fe(i))
                }
                return () => {
                    i.removeEventListener(Kt, d), setTimeout(() => {
                        const m = new CustomEvent(Ut, Xn);
                        i.addEventListener(Ut, p), i.dispatchEvent(m), m.defaultPrevented || fe(v ? ? document.body, {
                            select: !0
                        }), i.removeEventListener(Ut, p), Zn.remove(x)
                    }, 0)
                }
            }
        }, [i, d, p, x]);
        const C = a.useCallback(v => {
            if (!n && !o || x.paused) return;
            const m = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey,
                w = document.activeElement;
            if (m && w) {
                const g = v.currentTarget,
                    [y, E] = qi(g);
                y && E ? !v.shiftKey && w === E ? (v.preventDefault(), n && fe(y, {
                    select: !0
                })) : v.shiftKey && w === y && (v.preventDefault(), n && fe(E, {
                    select: !0
                })) : w === g && v.preventDefault()
            }
        }, [n, o, x.paused]);
        return (0, l.jsx)(R.div, {
            tabIndex: -1,
            ...c,
            ref: h,
            onKeyDown: C
        })
    });
We.displayName = zi;

function Xi(e, {
    select: t = !1
} = {}) {
    const n = document.activeElement;
    for (const o of e)
        if (fe(o, {
                select: t
            }), document.activeElement !== n) return
}

function qi(e) {
    const t = xo(e);
    return [qn(t, e), qn(t.reverse(), e)]
}

function xo(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: o => {
                const r = o.tagName === "INPUT" && o.type === "hidden";
                return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function qn(e, t) {
    for (const n of e)
        if (!Zi(n, {
                upTo: t
            })) return n
}

function Zi(e, {
    upTo: t
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function Qi(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function fe(e, {
    select: t = !1
} = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== n && Qi(e) && t && e.select()
    }
}
var Zn = Ji();

function Ji() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && n ? .pause(), e = Qn(e, t), e.unshift(t)
        },
        remove(t) {
            e = Qn(e, t), e[0] ? .resume()
        }
    }
}

function Qn(e, t) {
    const n = [...e],
        o = n.indexOf(t);
    return o !== -1 && n.splice(o, 1), n
}

function ec(e) {
    return e.filter(t => t.tagName !== "A")
}
var tc = "Portal",
    Pe = a.forwardRef((e, t) => {
        const {
            container: n,
            ...o
        } = e, [r, s] = a.useState(!1);
        Y(() => s(!0), []);
        const c = n || r && globalThis ? .document ? .body;
        return c ? Ue.createPortal((0, l.jsx)(R.div, { ...o,
            ref: t
        }), c) : null
    });
Pe.displayName = tc;
var Vt = 0;

function wt() {
    a.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ? ? Jn()), document.body.insertAdjacentElement("beforeend", e[1] ? ? Jn()), Vt++, () => {
            Vt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), Vt--
        }
    }, [])
}

function Jn() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
}
var nc = function(e) {
        return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
    },
    Me = new WeakMap,
    rt = new WeakMap,
    at = {},
    Wt = 0,
    wo = function(e) {
        return e && (e.host || wo(e.parentNode))
    },
    oc = function(e, t) {
        return t.map(function(n) {
            if (e.contains(n)) return n;
            var o = wo(n);
            return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
        }).filter(function(n) {
            return !!n
        })
    },
    rc = function(e, t, n, o) {
        var r = oc(t, Array.isArray(e) ? e : [e]);
        at[n] || (at[n] = new WeakMap);
        var s = at[n],
            c = [],
            i = new Set,
            u = new Set(r),
            d = function(f) {
                !f || i.has(f) || (i.add(f), d(f.parentNode))
            };
        r.forEach(d);
        var p = function(f) {
            !f || u.has(f) || Array.prototype.forEach.call(f.children, function(h) {
                if (i.has(h)) p(h);
                else try {
                    var x = h.getAttribute(o),
                        C = x !== null && x !== "false",
                        v = (Me.get(h) || 0) + 1,
                        m = (s.get(h) || 0) + 1;
                    Me.set(h, v), s.set(h, m), c.push(h), v === 1 && C && rt.set(h, !0), m === 1 && h.setAttribute(n, "true"), C || h.setAttribute(o, "true")
                } catch (w) {
                    console.error("aria-hidden: cannot operate on ", h, w)
                }
            })
        };
        return p(t), i.clear(), Wt++,
            function() {
                c.forEach(function(f) {
                    var h = Me.get(f) - 1,
                        x = s.get(f) - 1;
                    Me.set(f, h), s.set(f, x), h || (rt.has(f) || f.removeAttribute(o), rt.delete(f)), x || f.removeAttribute(n)
                }), Wt--, Wt || (Me = new WeakMap, Me = new WeakMap, rt = new WeakMap, at = {})
            }
    },
    Ct = function(e, t, n) {
        n === void 0 && (n = "data-aria-hidden");
        var o = Array.from(Array.isArray(e) ? e : [e]),
            r = t || nc(e);
        return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))), rc(o, r, n, "aria-hidden")) : function() {
            return null
        }
    },
    yt = "Dialog",
    [Co, sf] = re(yt),
    [ac, ue] = Co(yt),
    yo = e => {
        const {
            __scopeDialog: t,
            children: n,
            open: o,
            defaultOpen: r,
            onOpenChange: s,
            modal: c = !0
        } = e, i = a.useRef(null), u = a.useRef(null), [d, p] = oe({
            prop: o,
            defaultProp: r ? ? !1,
            onChange: s,
            caller: yt
        });
        return (0, l.jsx)(ac, {
            scope: t,
            triggerRef: i,
            contentRef: u,
            contentId: se(),
            titleId: se(),
            descriptionId: se(),
            open: d,
            onOpenChange: p,
            onOpenToggle: a.useCallback(() => p(f => !f), [p]),
            modal: c,
            children: n
        })
    };
yo.displayName = yt;
var So = "DialogTrigger",
    sc = a.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...o
        } = e, r = ue(So, n), s = A(t, r.triggerRef);
        return (0, l.jsx)(R.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": r.open,
            "aria-controls": r.contentId,
            "data-state": mn(r.open),
            ...o,
            ref: s,
            onClick: S(e.onClick, r.onOpenToggle)
        })
    });
sc.displayName = So;
var pn = "DialogPortal",
    [ic, Eo] = Co(pn, {
        forceMount: void 0
    }),
    bo = e => {
        const {
            __scopeDialog: t,
            forceMount: n,
            children: o,
            container: r
        } = e, s = ue(pn, t);
        return (0, l.jsx)(ic, {
            scope: t,
            forceMount: n,
            children: a.Children.map(o, c => (0, l.jsx)(ie, {
                present: n || s.open,
                children: (0, l.jsx)(Pe, {
                    asChild: !0,
                    container: r,
                    children: c
                })
            }))
        })
    };
bo.displayName = pn;
var ut = "DialogOverlay",
    Po = a.forwardRef((e, t) => {
        const n = Eo(ut, e.__scopeDialog),
            {
                forceMount: o = n.forceMount,
                ...r
            } = e,
            s = ue(ut, e.__scopeDialog);
        return s.modal ? (0, l.jsx)(ie, {
            present: o || s.open,
            children: (0, l.jsx)(lc, { ...r,
                ref: t
            })
        }) : null
    });
Po.displayName = ut;
var cc = ve("DialogOverlay.RemoveScroll"),
    lc = a.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...o
        } = e, r = ue(ut, n);
        return (0, l.jsx)(Ke, {
            as: cc,
            allowPinchZoom: !0,
            shards: [r.contentRef],
            children: (0, l.jsx)(R.div, {
                "data-state": mn(r.open),
                ...o,
                ref: t,
                style: {
                    pointerEvents: "auto",
                    ...o.style
                }
            })
        })
    }),
    ye = "DialogContent",
    Ro = a.forwardRef((e, t) => {
        const n = Eo(ye, e.__scopeDialog),
            {
                forceMount: o = n.forceMount,
                ...r
            } = e,
            s = ue(ye, e.__scopeDialog);
        return (0, l.jsx)(ie, {
            present: o || s.open,
            children: s.modal ? (0, l.jsx)(uc, { ...r,
                ref: t
            }) : (0, l.jsx)(dc, { ...r,
                ref: t
            })
        })
    });
Ro.displayName = ye;
var uc = a.forwardRef((e, t) => {
        const n = ue(ye, e.__scopeDialog),
            o = a.useRef(null),
            r = A(t, n.contentRef, o);
        return a.useEffect(() => {
            const s = o.current;
            if (s) return Ct(s)
        }, []), (0, l.jsx)(To, { ...e,
            ref: r,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: S(e.onCloseAutoFocus, s => {
                s.preventDefault(), n.triggerRef.current ? .focus()
            }),
            onPointerDownOutside: S(e.onPointerDownOutside, s => {
                const c = s.detail.originalEvent,
                    i = c.button === 0 && c.ctrlKey === !0;
                (c.button === 2 || i) && s.preventDefault()
            }),
            onFocusOutside: S(e.onFocusOutside, s => s.preventDefault())
        })
    }),
    dc = a.forwardRef((e, t) => {
        const n = ue(ye, e.__scopeDialog),
            o = a.useRef(!1),
            r = a.useRef(!1);
        return (0, l.jsx)(To, { ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: s => {
                e.onCloseAutoFocus ? .(s), s.defaultPrevented || (o.current || n.triggerRef.current ? .focus(), s.preventDefault()), o.current = !1, r.current = !1
            },
            onInteractOutside: s => {
                e.onInteractOutside ? .(s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (r.current = !0));
                const c = s.target;
                n.triggerRef.current ? .contains(c) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && r.current && s.preventDefault()
            }
        })
    }),
    To = a.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            trapFocus: o,
            onOpenAutoFocus: r,
            onCloseAutoFocus: s,
            ...c
        } = e, i = ue(ye, n), u = a.useRef(null), d = A(t, u);
        return wt(), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(We, {
                asChild: !0,
                loop: !0,
                trapped: o,
                onMountAutoFocus: r,
                onUnmountAutoFocus: s,
                children: (0, l.jsx)(be, {
                    role: "dialog",
                    id: i.contentId,
                    "aria-describedby": i.descriptionId,
                    "aria-labelledby": i.titleId,
                    "data-state": mn(i.open),
                    ...c,
                    ref: d,
                    onDismiss: () => i.onOpenChange(!1)
                })
            }), (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(vc, {
                    titleId: i.titleId
                }), (0, l.jsx)(hc, {
                    contentRef: u,
                    descriptionId: i.descriptionId
                })]
            })]
        })
    }),
    vn = "DialogTitle",
    _o = a.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...o
        } = e, r = ue(vn, n);
        return (0, l.jsx)(R.h2, {
            id: r.titleId,
            ...o,
            ref: t
        })
    });
_o.displayName = vn;
var Mo = "DialogDescription",
    fc = a.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...o
        } = e, r = ue(Mo, n);
        return (0, l.jsx)(R.p, {
            id: r.descriptionId,
            ...o,
            ref: t
        })
    });
fc.displayName = Mo;
var Io = "DialogClose",
    pc = a.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...o
        } = e, r = ue(Io, n);
        return (0, l.jsx)(R.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: S(e.onClick, () => r.onOpenChange(!1))
        })
    });
pc.displayName = Io;

function mn(e) {
    return e ? "open" : "closed"
}
var No = "DialogTitleWarning",
    [cf, Ao] = _i(No, {
        contentName: ye,
        titleName: vn,
        docsSlug: "dialog"
    }),
    vc = ({
        titleId: e
    }) => {
        const t = Ao(No),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
        return a.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
        }, [n, e]), null
    },
    mc = "DialogDescriptionWarning",
    hc = ({
        contentRef: e,
        descriptionId: t
    }) => {
        const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ao(mc).contentName}}.`;
        return a.useEffect(() => {
            const o = e.current ? .getAttribute("aria-describedby");
            t && o && (document.getElementById(t) || console.warn(n))
        }, [n, e, t]), null
    },
    lf = yo,
    uf = bo,
    df = Po,
    ff = Ro,
    pf = _o;

function Do(e) {
    const t = a.useRef({
        value: e,
        previous: e
    });
    return a.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
}

function Oo(e) {
    const [t, n] = a.useState(void 0);
    return Y(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const o = new ResizeObserver(r => {
                if (!Array.isArray(r) || !r.length) return;
                const s = r[0];
                let c, i;
                if ("borderBoxSize" in s) {
                    const u = s.borderBoxSize,
                        d = Array.isArray(u) ? u[0] : u;
                    c = d.inlineSize, i = d.blockSize
                } else c = e.offsetWidth, i = e.offsetHeight;
                n({
                    width: c,
                    height: i
                })
            });
            return o.observe(e, {
                box: "border-box"
            }), () => o.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var gc = "Arrow",
    jo = a.forwardRef((e, t) => {
        const {
            children: n,
            width: o = 10,
            height: r = 5,
            ...s
        } = e;
        return (0, l.jsx)(R.svg, { ...s,
            ref: t,
            width: o,
            height: r,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, l.jsx)("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
jo.displayName = gc;
var xc = jo,
    hn = "Popper",
    [Lo, me] = re(hn),
    [wc, ko] = Lo(hn),
    Fo = e => {
        const {
            __scopePopper: t,
            children: n
        } = e, [o, r] = a.useState(null);
        return (0, l.jsx)(wc, {
            scope: t,
            anchor: o,
            onAnchorChange: r,
            children: n
        })
    };
Fo.displayName = hn;
var $o = "PopperAnchor",
    Go = a.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: o,
            ...r
        } = e, s = ko($o, n), c = a.useRef(null), i = A(t, c), u = a.useRef(null);
        return a.useEffect(() => {
            const d = u.current;
            u.current = o ? .current || c.current, d !== u.current && s.onAnchorChange(u.current)
        }), o ? null : (0, l.jsx)(R.div, { ...r,
            ref: i
        })
    });
Go.displayName = $o;
var gn = "PopperContent",
    [Cc, yc] = Lo(gn),
    Bo = a.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            side: o = "bottom",
            sideOffset: r = 0,
            align: s = "center",
            alignOffset: c = 0,
            arrowPadding: i = 0,
            avoidCollisions: u = !0,
            collisionBoundary: d = [],
            collisionPadding: p = 0,
            sticky: f = "partial",
            hideWhenDetached: h = !1,
            updatePositionStrategy: x = "optimized",
            onPlaced: C,
            ...v
        } = e, m = ko(gn, n), [w, g] = a.useState(null), y = A(t, M => g(M)), [E, T] = a.useState(null), N = Oo(E), b = N ? .width ? ? 0, I = N ? .height ? ? 0, O = o + (s !== "center" ? "-" + s : ""), D = typeof p == "number" ? p : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...p
        }, G = Array.isArray(d) ? d : [d], j = G.length > 0, K = {
            padding: D,
            boundary: G.filter(Ec),
            altBoundary: j
        }, {
            refs: _,
            floatingStyles: B,
            placement: L,
            isPositioned: $,
            middlewareData: k
        } = As({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...M) => Os(...M, {
                animationFrame: x === "always"
            }),
            elements: {
                reference: m.anchor
            },
            middleware: [Ns({
                mainAxis: r + I,
                alignmentAxis: c
            }), u && Ls({
                mainAxis: !0,
                crossAxis: !1,
                limiter: f === "partial" ? Ds() : void 0,
                ...K
            }), u && js({ ...K
            }), Fs({ ...K,
                apply: ({
                    elements: M,
                    rects: V,
                    availableWidth: U,
                    availableHeight: F
                }) => {
                    const {
                        width: X,
                        height: ee
                    } = V.reference, de = M.floating.style;
                    de.setProperty("--radix-popper-available-width", `${U}px`), de.setProperty("--radix-popper-available-height", `${F}px`), de.setProperty("--radix-popper-anchor-width", `${X}px`), de.setProperty("--radix-popper-anchor-height", `${ee}px`)
                }
            }), E && $s({
                element: E,
                padding: i
            }), bc({
                arrowWidth: b,
                arrowHeight: I
            }), h && ks({
                strategy: "referenceHidden",
                ...K
            })]
        }), [P, te] = Vo(L), W = q(C);
        Y(() => {
            $ && W ? .()
        }, [$, W]);
        const J = k.arrow ? .x,
            ne = k.arrow ? .y,
            z = k.arrow ? .centerOffset !== 0,
            [ae, H] = a.useState();
        return Y(() => {
            w && H(window.getComputedStyle(w).zIndex)
        }, [w]), (0, l.jsx)("div", {
            ref: _.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...B,
                transform: $ ? B.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: ae,
                "--radix-popper-transform-origin": [k.transformOrigin ? .x, k.transformOrigin ? .y].join(" "),
                ...k.hide ? .referenceHidden && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: (0, l.jsx)(Cc, {
                scope: n,
                placedSide: P,
                onArrowChange: T,
                arrowX: J,
                arrowY: ne,
                shouldHideArrow: z,
                children: (0, l.jsx)(R.div, {
                    "data-side": P,
                    "data-align": te,
                    ...v,
                    ref: y,
                    style: { ...v.style,
                        animation: $ ? void 0 : "none"
                    }
                })
            })
        })
    });
Bo.displayName = gn;
var Ko = "PopperArrow",
    Sc = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Uo = a.forwardRef(function(t, n) {
        const {
            __scopePopper: o,
            ...r
        } = t, s = yc(Ko, o), c = Sc[s.placedSide];
        return (0, l.jsx)("span", {
            ref: s.onArrowChange,
            style: {
                position: "absolute",
                left: s.arrowX,
                top: s.arrowY,
                [c]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[s.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[s.placedSide],
                visibility: s.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, l.jsx)(xc, { ...r,
                ref: n,
                style: { ...r.style,
                    display: "block"
                }
            })
        })
    });
Uo.displayName = Ko;

function Ec(e) {
    return e !== null
}
var bc = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        const {
            placement: n,
            rects: o,
            middlewareData: r
        } = t, s = r.arrow ? .centerOffset !== 0, c = s ? 0 : e.arrowWidth, i = s ? 0 : e.arrowHeight, [u, d] = Vo(n), p = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d], f = (r.arrow ? .x ? ? 0) + c / 2, h = (r.arrow ? .y ? ? 0) + i / 2;
        let x = "",
            C = "";
        return u === "bottom" ? (x = s ? p : `${f}px`, C = `${-i}px`) : u === "top" ? (x = s ? p : `${f}px`, C = `${o.floating.height+i}px`) : u === "right" ? (x = `${-i}px`, C = s ? p : `${h}px`) : u === "left" && (x = `${o.floating.width+i}px`, C = s ? p : `${h}px`), {
            data: {
                x,
                y: C
            }
        }
    }
});

function Vo(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var He = Fo,
    Ye = Go,
    St = Bo,
    Et = Uo,
    Ht = "rovingFocusGroup.onEntryFocus",
    Pc = {
        bubbles: !1,
        cancelable: !0
    },
    ze = "RovingFocusGroup",
    [qt, Wo, Rc] = Ve(ze),
    [Tc, De] = re(ze, [Rc]),
    [_c, Mc] = Tc(ze),
    Ho = a.forwardRef((e, t) => (0, l.jsx)(qt.Provider, {
        scope: e.__scopeRovingFocusGroup,
        children: (0, l.jsx)(qt.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, l.jsx)(Ic, { ...e,
                ref: t
            })
        })
    }));
Ho.displayName = ze;
var Ic = a.forwardRef((e, t) => {
        const {
            __scopeRovingFocusGroup: n,
            orientation: o,
            loop: r = !1,
            dir: s,
            currentTabStopId: c,
            defaultCurrentTabStopId: i,
            onCurrentTabStopIdChange: u,
            onEntryFocus: d,
            preventScrollOnEntryFocus: p = !1,
            ...f
        } = e, h = a.useRef(null), x = A(t, h), C = Ae(s), [v, m] = oe({
            prop: c,
            defaultProp: i ? ? null,
            onChange: u,
            caller: ze
        }), [w, g] = a.useState(!1), y = q(d), E = Wo(n), T = a.useRef(!1), [N, b] = a.useState(0);
        return a.useEffect(() => {
            const I = h.current;
            if (I) return I.addEventListener(Ht, y), () => I.removeEventListener(Ht, y)
        }, [y]), (0, l.jsx)(_c, {
            scope: n,
            orientation: o,
            dir: C,
            loop: r,
            currentTabStopId: v,
            onItemFocus: a.useCallback(I => m(I), [m]),
            onItemShiftTab: a.useCallback(() => g(!0), []),
            onFocusableItemAdd: a.useCallback(() => b(I => I + 1), []),
            onFocusableItemRemove: a.useCallback(() => b(I => I - 1), []),
            children: (0, l.jsx)(R.div, {
                tabIndex: w || N === 0 ? -1 : 0,
                "data-orientation": o,
                ...f,
                ref: x,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: S(e.onMouseDown, () => {
                    T.current = !0
                }),
                onFocus: S(e.onFocus, I => {
                    const O = !T.current;
                    if (I.target === I.currentTarget && O && !w) {
                        const D = new CustomEvent(Ht, Pc);
                        if (I.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                            const G = E().filter(j => j.focusable);
                            Xo([G.find(j => j.active), G.find(j => j.id === v), ...G].filter(Boolean).map(j => j.ref.current), p)
                        }
                    }
                    T.current = !1
                }),
                onBlur: S(e.onBlur, () => g(!1))
            })
        })
    }),
    Yo = "RovingFocusGroupItem",
    zo = a.forwardRef((e, t) => {
        const {
            __scopeRovingFocusGroup: n,
            focusable: o = !0,
            active: r = !1,
            tabStopId: s,
            children: c,
            ...i
        } = e, u = se(), d = s || u, p = Mc(Yo, n), f = p.currentTabStopId === d, h = Wo(n), {
            onFocusableItemAdd: x,
            onFocusableItemRemove: C,
            currentTabStopId: v
        } = p;
        return a.useEffect(() => {
            if (o) return x(), () => C()
        }, [o, x, C]), (0, l.jsx)(qt.ItemSlot, {
            scope: n,
            id: d,
            focusable: o,
            active: r,
            children: (0, l.jsx)(R.span, {
                tabIndex: f ? 0 : -1,
                "data-orientation": p.orientation,
                ...i,
                ref: t,
                onMouseDown: S(e.onMouseDown, m => {
                    o ? p.onItemFocus(d) : m.preventDefault()
                }),
                onFocus: S(e.onFocus, () => p.onItemFocus(d)),
                onKeyDown: S(e.onKeyDown, m => {
                    if (m.key === "Tab" && m.shiftKey) {
                        p.onItemShiftTab();
                        return
                    }
                    if (m.target !== m.currentTarget) return;
                    const w = Dc(m, p.orientation, p.dir);
                    if (w !== void 0) {
                        if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return;
                        m.preventDefault();
                        let g = h().filter(y => y.focusable).map(y => y.ref.current);
                        if (w === "last") g.reverse();
                        else if (w === "prev" || w === "next") {
                            w === "prev" && g.reverse();
                            const y = g.indexOf(m.currentTarget);
                            g = p.loop ? Oc(g, y + 1) : g.slice(y + 1)
                        }
                        setTimeout(() => Xo(g))
                    }
                }),
                children: typeof c == "function" ? c({
                    isCurrentTabStop: f,
                    hasTabStop: v != null
                }) : c
            })
        })
    });
zo.displayName = Yo;
var Nc = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};

function Ac(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}

function Dc(e, t, n) {
    const o = Ac(e.key, n);
    if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o))) return Nc[o]
}

function Xo(e, t = !1) {
    const n = document.activeElement;
    for (const o of e)
        if (o === n || (o.focus({
                preventScroll: t
            }), document.activeElement !== n)) return
}

function Oc(e, t) {
    return e.map((n, o) => e[(t + o) % e.length])
}
var xn = Ho,
    bt = zo,
    Zt = ["Enter", " "],
    jc = ["ArrowDown", "PageUp", "Home"],
    qo = ["ArrowUp", "PageDown", "End"],
    Lc = [...jc, ...qo],
    kc = {
        ltr: [...Zt, "ArrowRight"],
        rtl: [...Zt, "ArrowLeft"]
    },
    Fc = {
        ltr: ["ArrowLeft"],
        rtl: ["ArrowRight"]
    },
    Xe = "Menu",
    [$e, $c, Gc] = Ve(Xe),
    [Re, Pt] = re(Xe, [Gc, me, De]),
    qe = me(),
    Zo = De(),
    [Qo, he] = Re(Xe),
    [Bc, Ze] = Re(Xe),
    Jo = e => {
        const {
            __scopeMenu: t,
            open: n = !1,
            children: o,
            dir: r,
            onOpenChange: s,
            modal: c = !0
        } = e, i = qe(t), [u, d] = a.useState(null), p = a.useRef(!1), f = q(s), h = Ae(r);
        return a.useEffect(() => {
            const x = () => {
                    p.current = !0, document.addEventListener("pointerdown", C, {
                        capture: !0,
                        once: !0
                    }), document.addEventListener("pointermove", C, {
                        capture: !0,
                        once: !0
                    })
                },
                C = () => p.current = !1;
            return document.addEventListener("keydown", x, {
                capture: !0
            }), () => {
                document.removeEventListener("keydown", x, {
                    capture: !0
                }), document.removeEventListener("pointerdown", C, {
                    capture: !0
                }), document.removeEventListener("pointermove", C, {
                    capture: !0
                })
            }
        }, []), (0, l.jsx)(He, { ...i,
            children: (0, l.jsx)(Qo, {
                scope: t,
                open: n,
                onOpenChange: f,
                content: u,
                onContentChange: d,
                children: (0, l.jsx)(Bc, {
                    scope: t,
                    onClose: a.useCallback(() => f(!1), [f]),
                    isUsingKeyboardRef: p,
                    dir: h,
                    modal: c,
                    children: o
                })
            })
        })
    };
Jo.displayName = Xe;
var Kc = "MenuAnchor",
    wn = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...o
        } = e, r = qe(n);
        return (0, l.jsx)(Ye, { ...r,
            ...o,
            ref: t
        })
    });
wn.displayName = Kc;
var Cn = "MenuPortal",
    [Uc, er] = Re(Cn, {
        forceMount: void 0
    }),
    tr = e => {
        const {
            __scopeMenu: t,
            forceMount: n,
            children: o,
            container: r
        } = e, s = he(Cn, t);
        return (0, l.jsx)(Uc, {
            scope: t,
            forceMount: n,
            children: (0, l.jsx)(ie, {
                present: n || s.open,
                children: (0, l.jsx)(Pe, {
                    asChild: !0,
                    container: r,
                    children: o
                })
            })
        })
    };
tr.displayName = Cn;
var ce = "MenuContent",
    [Vc, yn] = Re(ce),
    nr = a.forwardRef((e, t) => {
        const n = er(ce, e.__scopeMenu),
            {
                forceMount: o = n.forceMount,
                ...r
            } = e,
            s = he(ce, e.__scopeMenu),
            c = Ze(ce, e.__scopeMenu);
        return (0, l.jsx)($e.Provider, {
            scope: e.__scopeMenu,
            children: (0, l.jsx)(ie, {
                present: o || s.open,
                children: (0, l.jsx)($e.Slot, {
                    scope: e.__scopeMenu,
                    children: c.modal ? (0, l.jsx)(Wc, { ...r,
                        ref: t
                    }) : (0, l.jsx)(Hc, { ...r,
                        ref: t
                    })
                })
            })
        })
    }),
    Wc = a.forwardRef((e, t) => {
        const n = he(ce, e.__scopeMenu),
            o = a.useRef(null),
            r = A(t, o);
        return a.useEffect(() => {
            const s = o.current;
            if (s) return Ct(s)
        }, []), (0, l.jsx)(Sn, { ...e,
            ref: r,
            trapFocus: n.open,
            disableOutsidePointerEvents: n.open,
            disableOutsideScroll: !0,
            onFocusOutside: S(e.onFocusOutside, s => s.preventDefault(), {
                checkForDefaultPrevented: !1
            }),
            onDismiss: () => n.onOpenChange(!1)
        })
    }),
    Hc = a.forwardRef((e, t) => {
        const n = he(ce, e.__scopeMenu);
        return (0, l.jsx)(Sn, { ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => n.onOpenChange(!1)
        })
    }),
    Yc = ve("MenuContent.ScrollLock"),
    Sn = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            loop: o = !1,
            trapFocus: r,
            onOpenAutoFocus: s,
            onCloseAutoFocus: c,
            disableOutsidePointerEvents: i,
            onEntryFocus: u,
            onEscapeKeyDown: d,
            onPointerDownOutside: p,
            onFocusOutside: f,
            onInteractOutside: h,
            onDismiss: x,
            disableOutsideScroll: C,
            ...v
        } = e, m = he(ce, n), w = Ze(ce, n), g = qe(n), y = Zo(n), E = $c(n), [T, N] = a.useState(null), b = a.useRef(null), I = A(t, b, m.onContentChange), O = a.useRef(0), D = a.useRef(""), G = a.useRef(0), j = a.useRef(null), K = a.useRef("right"), _ = a.useRef(0), B = C ? Ke : a.Fragment, L = C ? {
            as: Yc,
            allowPinchZoom: !0
        } : void 0, $ = P => {
            const te = D.current + P,
                W = E().filter(H => !H.disabled),
                J = document.activeElement,
                ne = W.find(H => H.ref.current === J) ? .textValue,
                z = al(W.map(H => H.textValue), te, ne),
                ae = W.find(H => H.textValue === z) ? .ref.current;
            (function H(M) {
                D.current = M, window.clearTimeout(O.current), M !== "" && (O.current = window.setTimeout(() => H(""), 1e3))
            })(te), ae && setTimeout(() => ae.focus())
        };
        a.useEffect(() => () => window.clearTimeout(O.current), []), wt();
        const k = a.useCallback(P => K.current === j.current ? .side && il(P, j.current ? .area), []);
        return (0, l.jsx)(Vc, {
            scope: n,
            searchRef: D,
            onItemEnter: a.useCallback(P => {
                k(P) && P.preventDefault()
            }, [k]),
            onItemLeave: a.useCallback(P => {
                k(P) || (b.current ? .focus(), N(null))
            }, [k]),
            onTriggerLeave: a.useCallback(P => {
                k(P) && P.preventDefault()
            }, [k]),
            pointerGraceTimerRef: G,
            onPointerGraceIntentChange: a.useCallback(P => {
                j.current = P
            }, []),
            children: (0, l.jsx)(B, { ...L,
                children: (0, l.jsx)(We, {
                    asChild: !0,
                    trapped: r,
                    onMountAutoFocus: S(s, P => {
                        P.preventDefault(), b.current ? .focus({
                            preventScroll: !0
                        })
                    }),
                    onUnmountAutoFocus: c,
                    children: (0, l.jsx)(be, {
                        asChild: !0,
                        disableOutsidePointerEvents: i,
                        onEscapeKeyDown: d,
                        onPointerDownOutside: p,
                        onFocusOutside: f,
                        onInteractOutside: h,
                        onDismiss: x,
                        children: (0, l.jsx)(xn, {
                            asChild: !0,
                            ...y,
                            dir: w.dir,
                            orientation: "vertical",
                            loop: o,
                            currentTabStopId: T,
                            onCurrentTabStopIdChange: N,
                            onEntryFocus: S(u, P => {
                                w.isUsingKeyboardRef.current || P.preventDefault()
                            }),
                            preventScrollOnEntryFocus: !0,
                            children: (0, l.jsx)(St, {
                                role: "menu",
                                "aria-orientation": "vertical",
                                "data-state": wr(m.open),
                                "data-radix-menu-content": "",
                                dir: w.dir,
                                ...g,
                                ...v,
                                ref: I,
                                style: {
                                    outline: "none",
                                    ...v.style
                                },
                                onKeyDown: S(v.onKeyDown, P => {
                                    const te = P.target.closest("[data-radix-menu-content]") === P.currentTarget,
                                        W = P.ctrlKey || P.altKey || P.metaKey,
                                        J = P.key.length === 1;
                                    te && (P.key === "Tab" && P.preventDefault(), !W && J && $(P.key));
                                    const ne = b.current;
                                    if (P.target !== ne || !Lc.includes(P.key)) return;
                                    P.preventDefault();
                                    const z = E().filter(ae => !ae.disabled).map(ae => ae.ref.current);
                                    qo.includes(P.key) && z.reverse(), ol(z)
                                }),
                                onBlur: S(e.onBlur, P => {
                                    P.currentTarget.contains(P.target) || (window.clearTimeout(O.current), D.current = "")
                                }),
                                onPointerMove: S(e.onPointerMove, Ge(P => {
                                    const te = P.target,
                                        W = _.current !== P.clientX;
                                    if (P.currentTarget.contains(te) && W) {
                                        const J = P.clientX > _.current ? "right" : "left";
                                        K.current = J, _.current = P.clientX
                                    }
                                }))
                            })
                        })
                    })
                })
            })
        })
    });
nr.displayName = ce;
var zc = "MenuGroup",
    En = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...o
        } = e;
        return (0, l.jsx)(R.div, {
            role: "group",
            ...o,
            ref: t
        })
    });
En.displayName = zc;
var Xc = "MenuLabel",
    or = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...o
        } = e;
        return (0, l.jsx)(R.div, { ...o,
            ref: t
        })
    });
or.displayName = Xc;
var dt = "MenuItem",
    eo = "menu.itemSelect",
    Rt = a.forwardRef((e, t) => {
        const {
            disabled: n = !1,
            onSelect: o,
            ...r
        } = e, s = a.useRef(null), c = Ze(dt, e.__scopeMenu), i = yn(dt, e.__scopeMenu), u = A(t, s), d = a.useRef(!1), p = () => {
            const f = s.current;
            if (!n && f) {
                const h = new CustomEvent(eo, {
                    bubbles: !0,
                    cancelable: !0
                });
                f.addEventListener(eo, x => o ? .(x), {
                    once: !0
                }), fn(f, h), h.defaultPrevented ? d.current = !1 : c.onClose()
            }
        };
        return (0, l.jsx)(rr, { ...r,
            ref: u,
            disabled: n,
            onClick: S(e.onClick, p),
            onPointerDown: f => {
                e.onPointerDown ? .(f), d.current = !0
            },
            onPointerUp: S(e.onPointerUp, f => {
                d.current || f.currentTarget ? .click()
            }),
            onKeyDown: S(e.onKeyDown, f => {
                const h = i.searchRef.current !== "";
                n || h && f.key === " " || Zt.includes(f.key) && (f.currentTarget.click(), f.preventDefault())
            })
        })
    });
Rt.displayName = dt;
var rr = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            disabled: o = !1,
            textValue: r,
            ...s
        } = e, c = yn(dt, n), i = Zo(n), u = a.useRef(null), d = A(t, u), [p, f] = a.useState(!1), [h, x] = a.useState("");
        return a.useEffect(() => {
            const C = u.current;
            C && x((C.textContent ? ? "").trim())
        }, [s.children]), (0, l.jsx)($e.ItemSlot, {
            scope: n,
            disabled: o,
            textValue: r ? ? h,
            children: (0, l.jsx)(bt, {
                asChild: !0,
                ...i,
                focusable: !o,
                children: (0, l.jsx)(R.div, {
                    role: "menuitem",
                    "data-highlighted": p ? "" : void 0,
                    "aria-disabled": o || void 0,
                    "data-disabled": o ? "" : void 0,
                    ...s,
                    ref: d,
                    onPointerMove: S(e.onPointerMove, Ge(C => {
                        o ? c.onItemLeave(C) : (c.onItemEnter(C), C.defaultPrevented || C.currentTarget.focus({
                            preventScroll: !0
                        }))
                    })),
                    onPointerLeave: S(e.onPointerLeave, Ge(C => c.onItemLeave(C))),
                    onFocus: S(e.onFocus, () => f(!0)),
                    onBlur: S(e.onBlur, () => f(!1))
                })
            })
        })
    }),
    qc = "MenuCheckboxItem",
    ar = a.forwardRef((e, t) => {
        const {
            checked: n = !1,
            onCheckedChange: o,
            ...r
        } = e;
        return (0, l.jsx)(ur, {
            scope: e.__scopeMenu,
            checked: n,
            children: (0, l.jsx)(Rt, {
                role: "menuitemcheckbox",
                "aria-checked": ft(n) ? "mixed" : n,
                ...r,
                ref: t,
                "data-state": Rn(n),
                onSelect: S(r.onSelect, () => o ? .(ft(n) ? !0 : !n), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    });
ar.displayName = qc;
var sr = "MenuRadioGroup",
    [Zc, Qc] = Re(sr, {
        value: void 0,
        onValueChange: () => {}
    }),
    ir = a.forwardRef((e, t) => {
        const {
            value: n,
            onValueChange: o,
            ...r
        } = e, s = q(o);
        return (0, l.jsx)(Zc, {
            scope: e.__scopeMenu,
            value: n,
            onValueChange: s,
            children: (0, l.jsx)(En, { ...r,
                ref: t
            })
        })
    });
ir.displayName = sr;
var cr = "MenuRadioItem",
    lr = a.forwardRef((e, t) => {
        const {
            value: n,
            ...o
        } = e, r = Qc(cr, e.__scopeMenu), s = n === r.value;
        return (0, l.jsx)(ur, {
            scope: e.__scopeMenu,
            checked: s,
            children: (0, l.jsx)(Rt, {
                role: "menuitemradio",
                "aria-checked": s,
                ...o,
                ref: t,
                "data-state": Rn(s),
                onSelect: S(o.onSelect, () => r.onValueChange ? .(n), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    });
lr.displayName = cr;
var bn = "MenuItemIndicator",
    [ur, Jc] = Re(bn, {
        checked: !1
    }),
    dr = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            forceMount: o,
            ...r
        } = e, s = Jc(bn, n);
        return (0, l.jsx)(ie, {
            present: o || ft(s.checked) || s.checked === !0,
            children: (0, l.jsx)(R.span, { ...r,
                ref: t,
                "data-state": Rn(s.checked)
            })
        })
    });
dr.displayName = bn;
var el = "MenuSeparator",
    fr = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...o
        } = e;
        return (0, l.jsx)(R.div, {
            role: "separator",
            "aria-orientation": "horizontal",
            ...o,
            ref: t
        })
    });
fr.displayName = el;
var tl = "MenuArrow",
    pr = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...o
        } = e, r = qe(n);
        return (0, l.jsx)(Et, { ...r,
            ...o,
            ref: t
        })
    });
pr.displayName = tl;
var Pn = "MenuSub",
    [nl, vr] = Re(Pn),
    mr = e => {
        const {
            __scopeMenu: t,
            children: n,
            open: o = !1,
            onOpenChange: r
        } = e, s = he(Pn, t), c = qe(t), [i, u] = a.useState(null), [d, p] = a.useState(null), f = q(r);
        return a.useEffect(() => (s.open === !1 && f(!1), () => f(!1)), [s.open, f]), (0, l.jsx)(He, { ...c,
            children: (0, l.jsx)(Qo, {
                scope: t,
                open: o,
                onOpenChange: f,
                content: d,
                onContentChange: p,
                children: (0, l.jsx)(nl, {
                    scope: t,
                    contentId: se(),
                    triggerId: se(),
                    trigger: i,
                    onTriggerChange: u,
                    children: n
                })
            })
        })
    };
mr.displayName = Pn;
var Le = "MenuSubTrigger",
    hr = a.forwardRef((e, t) => {
        const n = he(Le, e.__scopeMenu),
            o = Ze(Le, e.__scopeMenu),
            r = vr(Le, e.__scopeMenu),
            s = yn(Le, e.__scopeMenu),
            c = a.useRef(null),
            {
                pointerGraceTimerRef: i,
                onPointerGraceIntentChange: u
            } = s,
            d = {
                __scopeMenu: e.__scopeMenu
            },
            p = a.useCallback(() => {
                c.current && window.clearTimeout(c.current), c.current = null
            }, []);
        return a.useEffect(() => p, [p]), a.useEffect(() => {
            const f = i.current;
            return () => {
                window.clearTimeout(f), u(null)
            }
        }, [i, u]), (0, l.jsx)(wn, {
            asChild: !0,
            ...d,
            children: (0, l.jsx)(rr, {
                id: r.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": n.open,
                "aria-controls": r.contentId,
                "data-state": wr(n.open),
                ...e,
                ref: gt(t, r.onTriggerChange),
                onClick: f => {
                    e.onClick ? .(f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0))
                },
                onPointerMove: S(e.onPointerMove, Ge(f => {
                    s.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !c.current && (s.onPointerGraceIntentChange(null), c.current = window.setTimeout(() => {
                        n.onOpenChange(!0), p()
                    }, 100))
                })),
                onPointerLeave: S(e.onPointerLeave, Ge(f => {
                    p();
                    const h = n.content ? .getBoundingClientRect();
                    if (h) {
                        const x = n.content ? .dataset.side,
                            C = x === "right",
                            v = C ? -5 : 5,
                            m = h[C ? "left" : "right"],
                            w = h[C ? "right" : "left"];
                        s.onPointerGraceIntentChange({
                            area: [{
                                x: f.clientX + v,
                                y: f.clientY
                            }, {
                                x: m,
                                y: h.top
                            }, {
                                x: w,
                                y: h.top
                            }, {
                                x: w,
                                y: h.bottom
                            }, {
                                x: m,
                                y: h.bottom
                            }],
                            side: x
                        }), window.clearTimeout(i.current), i.current = window.setTimeout(() => s.onPointerGraceIntentChange(null), 300)
                    } else {
                        if (s.onTriggerLeave(f), f.defaultPrevented) return;
                        s.onPointerGraceIntentChange(null)
                    }
                })),
                onKeyDown: S(e.onKeyDown, f => {
                    const h = s.searchRef.current !== "";
                    e.disabled || h && f.key === " " || kc[o.dir].includes(f.key) && (n.onOpenChange(!0), n.content ? .focus(), f.preventDefault())
                })
            })
        })
    });
hr.displayName = Le;
var gr = "MenuSubContent",
    xr = a.forwardRef((e, t) => {
        const n = er(ce, e.__scopeMenu),
            {
                forceMount: o = n.forceMount,
                ...r
            } = e,
            s = he(ce, e.__scopeMenu),
            c = Ze(ce, e.__scopeMenu),
            i = vr(gr, e.__scopeMenu),
            u = a.useRef(null),
            d = A(t, u);
        return (0, l.jsx)($e.Provider, {
            scope: e.__scopeMenu,
            children: (0, l.jsx)(ie, {
                present: o || s.open,
                children: (0, l.jsx)($e.Slot, {
                    scope: e.__scopeMenu,
                    children: (0, l.jsx)(Sn, {
                        id: i.contentId,
                        "aria-labelledby": i.triggerId,
                        ...r,
                        ref: d,
                        align: "start",
                        side: c.dir === "rtl" ? "left" : "right",
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        trapFocus: !1,
                        onOpenAutoFocus: p => {
                            c.isUsingKeyboardRef.current && u.current ? .focus(), p.preventDefault()
                        },
                        onCloseAutoFocus: p => p.preventDefault(),
                        onFocusOutside: S(e.onFocusOutside, p => {
                            p.target !== i.trigger && s.onOpenChange(!1)
                        }),
                        onEscapeKeyDown: S(e.onEscapeKeyDown, p => {
                            c.onClose(), p.preventDefault()
                        }),
                        onKeyDown: S(e.onKeyDown, p => {
                            const f = p.currentTarget.contains(p.target),
                                h = Fc[c.dir].includes(p.key);
                            f && h && (s.onOpenChange(!1), i.trigger ? .focus(), p.preventDefault())
                        })
                    })
                })
            })
        })
    });
xr.displayName = gr;

function wr(e) {
    return e ? "open" : "closed"
}

function ft(e) {
    return e === "indeterminate"
}

function Rn(e) {
    return ft(e) ? "indeterminate" : e ? "checked" : "unchecked"
}

function ol(e) {
    const t = document.activeElement;
    for (const n of e)
        if (n === t || (n.focus(), document.activeElement !== t)) return
}

function rl(e, t) {
    return e.map((n, o) => e[(t + o) % e.length])
}

function al(e, t, n) {
    const o = t.length > 1 && Array.from(t).every(i => i === t[0]) ? t[0] : t,
        r = n ? e.indexOf(n) : -1;
    let s = rl(e, Math.max(r, 0));
    o.length === 1 && (s = s.filter(i => i !== n));
    const c = s.find(i => i.toLowerCase().startsWith(o.toLowerCase()));
    return c !== n ? c : void 0
}

function sl(e, t) {
    const {
        x: n,
        y: o
    } = e;
    let r = !1;
    for (let s = 0, c = t.length - 1; s < t.length; c = s++) {
        const i = t[s],
            u = t[c],
            d = i.x,
            p = i.y,
            f = u.x,
            h = u.y;
        p > o != h > o && n < (f - d) * (o - p) / (h - p) + d && (r = !r)
    }
    return r
}

function il(e, t) {
    return t ? sl({
        x: e.clientX,
        y: e.clientY
    }, t) : !1
}

function Ge(e) {
    return t => t.pointerType === "mouse" ? e(t) : void 0
}
var Cr = Jo,
    yr = wn,
    Sr = tr,
    Er = nr,
    br = En,
    Pr = or,
    Rr = Rt,
    Tr = ar,
    _r = ir,
    Mr = lr,
    Ir = dr,
    Nr = fr,
    Ar = pr,
    Dr = mr,
    Or = hr,
    jr = xr,
    Tn = "ContextMenu",
    [cl, vf] = re(Tn, [Pt]),
    Z = Pt(),
    [ll, Lr] = cl(Tn),
    kr = e => {
        const {
            __scopeContextMenu: t,
            children: n,
            onOpenChange: o,
            dir: r,
            modal: s = !0
        } = e, [c, i] = a.useState(!1), u = Z(t), d = q(o), p = a.useCallback(f => {
            i(f), d(f)
        }, [d]);
        return (0, l.jsx)(ll, {
            scope: t,
            open: c,
            onOpenChange: p,
            modal: s,
            children: (0, l.jsx)(Cr, { ...u,
                dir: r,
                open: c,
                onOpenChange: p,
                modal: s,
                children: n
            })
        })
    };
kr.displayName = Tn;
var Fr = "ContextMenuTrigger",
    $r = a.forwardRef((e, t) => {
        const {
            __scopeContextMenu: n,
            disabled: o = !1,
            ...r
        } = e, s = Lr(Fr, n), c = Z(n), i = a.useRef({
            x: 0,
            y: 0
        }), u = a.useRef({
            getBoundingClientRect: () => DOMRect.fromRect({
                width: 0,
                height: 0,
                ...i.current
            })
        }), d = a.useRef(0), p = a.useCallback(() => window.clearTimeout(d.current), []), f = h => {
            i.current = {
                x: h.clientX,
                y: h.clientY
            }, s.onOpenChange(!0)
        };
        return a.useEffect(() => p, [p]), a.useEffect(() => {
            o && p()
        }, [o, p]), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(yr, { ...c,
                virtualRef: u
            }), (0, l.jsx)(R.span, {
                "data-state": s.open ? "open" : "closed",
                "data-disabled": o ? "" : void 0,
                ...r,
                ref: t,
                style: {
                    WebkitTouchCallout: "none",
                    ...e.style
                },
                onContextMenu: o ? e.onContextMenu : S(e.onContextMenu, h => {
                    p(), f(h), h.preventDefault()
                }),
                onPointerDown: o ? e.onPointerDown : S(e.onPointerDown, st(h => {
                    p(), d.current = window.setTimeout(() => f(h), 700)
                })),
                onPointerMove: o ? e.onPointerMove : S(e.onPointerMove, st(p)),
                onPointerCancel: o ? e.onPointerCancel : S(e.onPointerCancel, st(p)),
                onPointerUp: o ? e.onPointerUp : S(e.onPointerUp, st(p))
            })]
        })
    });
$r.displayName = Fr;
var ul = "ContextMenuPortal",
    Gr = e => {
        const {
            __scopeContextMenu: t,
            ...n
        } = e, o = Z(t);
        return (0, l.jsx)(Sr, { ...o,
            ...n
        })
    };
Gr.displayName = ul;
var Br = "ContextMenuContent",
    Kr = a.forwardRef((e, t) => {
        const {
            __scopeContextMenu: n,
            ...o
        } = e, r = Lr(Br, n), s = Z(n), c = a.useRef(!1);
        return (0, l.jsx)(Er, { ...s,
            ...o,
            ref: t,
            side: "right",
            sideOffset: 2,
            align: "start",
            onCloseAutoFocus: i => {
                e.onCloseAutoFocus ? .(i), !i.defaultPrevented && c.current && i.preventDefault(), c.current = !1
            },
            onInteractOutside: i => {
                e.onInteractOutside ? .(i), !i.defaultPrevented && !r.modal && (c.current = !0)
            },
            style: { ...e.style,
                "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
Kr.displayName = Br;
var dl = "ContextMenuGroup",
    fl = a.forwardRef((e, t) => {
        const {
            __scopeContextMenu: n,
            ...o
        } = e, r = Z(n);
        return (0, l.jsx)(br, { ...r,
            ...o,
            ref: t
        })
    });
fl.displayName = dl;
var pl = "ContextMenuLabel",
    vl = a.forwardRef((e, t) => {
        const {
            __scopeContextMenu: n,
            ...o
        } = e, r = Z(n);
        return (0, l.jsx)(Pr, { ...r,
            ...o,
            ref: t
        })
    });
vl.displayName = pl;
var ml = "ContextMenuItem",
    Ur = a.forwardRef((e, t) => {
        const {
            __scopeContextMenu: n,
            ...o
        } = e, r = Z(n);
        return (0, l.jsx)(Rr, { ...r,
            ...o,
            ref: t
        })
    });
Ur.displayName = ml;
var hl = "ContextMenuCheckboxItem",
    Vr = a.forwardRef((e, t) => {
        const {
            __scopeContextMenu: n,
            ...o
        } = e, r = Z(n);
        return (0, l.jsx)(Tr, { ...r,
            ...o,
            ref: t
        })
    });
Vr.displayName = hl;
var gl = "ContextMenuRadioGroup",
    xl = a.forwardRef((e, t) => {
        const {
            __scopeContextMenu: n,
            ...o
        } = e, r = Z(n);
        return (0, l.jsx)(_r, { ...r,
            ...o,
            ref: t
        })
    });
xl.displayName = gl;
var wl = "ContextMenuRadioItem",
    Cl = a.forwardRef((e, t) => {
        const {
            __scopeContextMenu: n,
            ...o
        } = e, r = Z(n);
        return (0, l.jsx)(Mr, { ...r,
            ...o,
            ref: t
        })
    });
Cl.displayName = wl;
var yl = "ContextMenuItemIndicator",
    Sl = a.forwardRef((e, t) => {
        const {
            __scopeContextMenu: n,
            ...o
        } = e, r = Z(n);
        return (0, l.jsx)(Ir, { ...r,
            ...o,
            ref: t
        })
    });
Sl.displayName = yl;
var El = "ContextMenuSeparator",
    bl = a.forwardRef((e, t) => {
        const {
            __scopeContextMenu: n,
            ...o
        } = e, r = Z(n);
        return (0, l.jsx)(Nr, { ...r,
            ...o,
            ref: t
        })
    });
bl.displayName = El;
var Pl = "ContextMenuArrow",
    Rl = a.forwardRef((e, t) => {
        const {
            __scopeContextMenu: n,
            ...o
        } = e, r = Z(n);
        return (0, l.jsx)(Ar, { ...r,
            ...o,
            ref: t
        })
    });
Rl.displayName = Pl;
var Wr = "ContextMenuSub",
    Tl = e => {
        const {
            __scopeContextMenu: t,
            children: n,
            onOpenChange: o,
            open: r,
            defaultOpen: s
        } = e, c = Z(t), [i, u] = oe({
            prop: r,
            defaultProp: s ? ? !1,
            onChange: o,
            caller: Wr
        });
        return (0, l.jsx)(Dr, { ...c,
            open: i,
            onOpenChange: u,
            children: n
        })
    };
Tl.displayName = Wr;
var _l = "ContextMenuSubTrigger",
    Ml = a.forwardRef((e, t) => {
        const {
            __scopeContextMenu: n,
            ...o
        } = e, r = Z(n);
        return (0, l.jsx)(Or, { ...r,
            ...o,
            ref: t
        })
    });
Ml.displayName = _l;
var Il = "ContextMenuSubContent",
    Nl = a.forwardRef((e, t) => {
        const {
            __scopeContextMenu: n,
            ...o
        } = e, r = Z(n);
        return (0, l.jsx)(jr, { ...r,
            ...o,
            ref: t,
            style: { ...e.style,
                "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
Nl.displayName = Il;

function st(e) {
    return t => t.pointerType !== "mouse" ? e(t) : void 0
}
var mf = kr,
    hf = $r,
    gf = Gr,
    xf = Kr,
    wf = Ur,
    Cf = Vr,
    Tt = "DropdownMenu",
    [Al, yf] = re(Tt, [Pt]),
    Q = Pt(),
    [Dl, Hr] = Al(Tt),
    Yr = e => {
        const {
            __scopeDropdownMenu: t,
            children: n,
            dir: o,
            open: r,
            defaultOpen: s,
            onOpenChange: c,
            modal: i = !0
        } = e, u = Q(t), d = a.useRef(null), [p, f] = oe({
            prop: r,
            defaultProp: s ? ? !1,
            onChange: c,
            caller: Tt
        });
        return (0, l.jsx)(Dl, {
            scope: t,
            triggerId: se(),
            triggerRef: d,
            contentId: se(),
            open: p,
            onOpenChange: f,
            onOpenToggle: a.useCallback(() => f(h => !h), [f]),
            modal: i,
            children: (0, l.jsx)(Cr, { ...u,
                open: p,
                onOpenChange: f,
                dir: o,
                modal: i,
                children: n
            })
        })
    };
Yr.displayName = Tt;
var zr = "DropdownMenuTrigger",
    Xr = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            disabled: o = !1,
            ...r
        } = e, s = Hr(zr, n), c = Q(n);
        return (0, l.jsx)(yr, {
            asChild: !0,
            ...c,
            children: (0, l.jsx)(R.button, {
                type: "button",
                id: s.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": s.open,
                "aria-controls": s.open ? s.contentId : void 0,
                "data-state": s.open ? "open" : "closed",
                "data-disabled": o ? "" : void 0,
                disabled: o,
                ...r,
                ref: gt(t, s.triggerRef),
                onPointerDown: S(e.onPointerDown, i => {
                    !o && i.button === 0 && i.ctrlKey === !1 && (s.onOpenToggle(), s.open || i.preventDefault())
                }),
                onKeyDown: S(e.onKeyDown, i => {
                    o || (["Enter", " "].includes(i.key) && s.onOpenToggle(), i.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault())
                })
            })
        })
    });
Xr.displayName = zr;
var Ol = "DropdownMenuPortal",
    qr = e => {
        const {
            __scopeDropdownMenu: t,
            ...n
        } = e, o = Q(t);
        return (0, l.jsx)(Sr, { ...o,
            ...n
        })
    };
qr.displayName = Ol;
var Zr = "DropdownMenuContent",
    Qr = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = Hr(Zr, n), s = Q(n), c = a.useRef(!1);
        return (0, l.jsx)(Er, {
            id: r.contentId,
            "aria-labelledby": r.triggerId,
            ...s,
            ...o,
            ref: t,
            onCloseAutoFocus: S(e.onCloseAutoFocus, i => {
                c.current || r.triggerRef.current ? .focus(), c.current = !1, i.preventDefault()
            }),
            onInteractOutside: S(e.onInteractOutside, i => {
                const u = i.detail.originalEvent,
                    d = u.button === 0 && u.ctrlKey === !0,
                    p = u.button === 2 || d;
                (!r.modal || p) && (c.current = !0)
            }),
            style: { ...e.style,
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
Qr.displayName = Zr;
var jl = "DropdownMenuGroup",
    Ll = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = Q(n);
        return (0, l.jsx)(br, { ...r,
            ...o,
            ref: t
        })
    });
Ll.displayName = jl;
var kl = "DropdownMenuLabel",
    Fl = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = Q(n);
        return (0, l.jsx)(Pr, { ...r,
            ...o,
            ref: t
        })
    });
Fl.displayName = kl;
var $l = "DropdownMenuItem",
    Jr = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = Q(n);
        return (0, l.jsx)(Rr, { ...r,
            ...o,
            ref: t
        })
    });
Jr.displayName = $l;
var Gl = "DropdownMenuCheckboxItem",
    ea = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = Q(n);
        return (0, l.jsx)(Tr, { ...r,
            ...o,
            ref: t
        })
    });
ea.displayName = Gl;
var Bl = "DropdownMenuRadioGroup",
    Kl = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = Q(n);
        return (0, l.jsx)(_r, { ...r,
            ...o,
            ref: t
        })
    });
Kl.displayName = Bl;
var Ul = "DropdownMenuRadioItem",
    Vl = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = Q(n);
        return (0, l.jsx)(Mr, { ...r,
            ...o,
            ref: t
        })
    });
Vl.displayName = Ul;
var Wl = "DropdownMenuItemIndicator",
    ta = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = Q(n);
        return (0, l.jsx)(Ir, { ...r,
            ...o,
            ref: t
        })
    });
ta.displayName = Wl;
var Hl = "DropdownMenuSeparator",
    Yl = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = Q(n);
        return (0, l.jsx)(Nr, { ...r,
            ...o,
            ref: t
        })
    });
Yl.displayName = Hl;
var zl = "DropdownMenuArrow",
    Xl = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = Q(n);
        return (0, l.jsx)(Ar, { ...r,
            ...o,
            ref: t
        })
    });
Xl.displayName = zl;
var ql = e => {
        const {
            __scopeDropdownMenu: t,
            children: n,
            open: o,
            onOpenChange: r,
            defaultOpen: s
        } = e, c = Q(t), [i, u] = oe({
            prop: o,
            defaultProp: s ? ? !1,
            onChange: r,
            caller: "DropdownMenuSub"
        });
        return (0, l.jsx)(Dr, { ...c,
            open: i,
            onOpenChange: u,
            children: n
        })
    },
    Zl = "DropdownMenuSubTrigger",
    na = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = Q(n);
        return (0, l.jsx)(Or, { ...r,
            ...o,
            ref: t
        })
    });
na.displayName = Zl;
var Ql = "DropdownMenuSubContent",
    oa = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = Q(n);
        return (0, l.jsx)(jr, { ...r,
            ...o,
            ref: t,
            style: { ...e.style,
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
oa.displayName = Ql;
var Sf = Yr,
    Ef = Xr,
    bf = qr,
    Pf = Qr,
    Rf = Jr,
    Tf = ea,
    _f = ta,
    Mf = ql,
    If = na,
    Nf = oa;

function pt(e, [t, n]) {
    return Math.min(n, Math.max(t, e))
}
var _t = "Popover",
    [ra, Af] = re(_t, [me]),
    Qe = me(),
    [Jl, ge] = ra(_t),
    aa = e => {
        const {
            __scopePopover: t,
            children: n,
            open: o,
            defaultOpen: r,
            onOpenChange: s,
            modal: c = !1
        } = e, i = Qe(t), u = a.useRef(null), [d, p] = a.useState(!1), [f, h] = oe({
            prop: o,
            defaultProp: r ? ? !1,
            onChange: s,
            caller: _t
        });
        return (0, l.jsx)(He, { ...i,
            children: (0, l.jsx)(Jl, {
                scope: t,
                contentId: se(),
                triggerRef: u,
                open: f,
                onOpenChange: h,
                onOpenToggle: a.useCallback(() => h(x => !x), [h]),
                hasCustomAnchor: d,
                onCustomAnchorAdd: a.useCallback(() => p(!0), []),
                onCustomAnchorRemove: a.useCallback(() => p(!1), []),
                modal: c,
                children: n
            })
        })
    };
aa.displayName = _t;
var sa = "PopoverAnchor",
    eu = a.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...o
        } = e, r = ge(sa, n), s = Qe(n), {
            onCustomAnchorAdd: c,
            onCustomAnchorRemove: i
        } = r;
        return a.useEffect(() => (c(), () => i()), [c, i]), (0, l.jsx)(Ye, { ...s,
            ...o,
            ref: t
        })
    });
eu.displayName = sa;
var ia = "PopoverTrigger",
    ca = a.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...o
        } = e, r = ge(ia, n), s = Qe(n), c = A(t, r.triggerRef), i = (0, l.jsx)(R.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": r.open,
            "aria-controls": r.contentId,
            "data-state": pa(r.open),
            ...o,
            ref: c,
            onClick: S(e.onClick, r.onOpenToggle)
        });
        return r.hasCustomAnchor ? i : (0, l.jsx)(Ye, {
            asChild: !0,
            ...s,
            children: i
        })
    });
ca.displayName = ia;
var _n = "PopoverPortal",
    [tu, nu] = ra(_n, {
        forceMount: void 0
    }),
    la = e => {
        const {
            __scopePopover: t,
            forceMount: n,
            children: o,
            container: r
        } = e, s = ge(_n, t);
        return (0, l.jsx)(tu, {
            scope: t,
            forceMount: n,
            children: (0, l.jsx)(ie, {
                present: n || s.open,
                children: (0, l.jsx)(Pe, {
                    asChild: !0,
                    container: r,
                    children: o
                })
            })
        })
    };
la.displayName = _n;
var Ie = "PopoverContent",
    ua = a.forwardRef((e, t) => {
        const n = nu(Ie, e.__scopePopover),
            {
                forceMount: o = n.forceMount,
                ...r
            } = e,
            s = ge(Ie, e.__scopePopover);
        return (0, l.jsx)(ie, {
            present: o || s.open,
            children: s.modal ? (0, l.jsx)(ru, { ...r,
                ref: t
            }) : (0, l.jsx)(au, { ...r,
                ref: t
            })
        })
    });
ua.displayName = Ie;
var ou = ve("PopoverContent.RemoveScroll"),
    ru = a.forwardRef((e, t) => {
        const n = ge(Ie, e.__scopePopover),
            o = a.useRef(null),
            r = A(t, o),
            s = a.useRef(!1);
        return a.useEffect(() => {
            const c = o.current;
            if (c) return Ct(c)
        }, []), (0, l.jsx)(Ke, {
            as: ou,
            allowPinchZoom: !0,
            children: (0, l.jsx)(da, { ...e,
                ref: r,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: S(e.onCloseAutoFocus, c => {
                    c.preventDefault(), s.current || n.triggerRef.current ? .focus()
                }),
                onPointerDownOutside: S(e.onPointerDownOutside, c => {
                    const i = c.detail.originalEvent,
                        u = i.button === 0 && i.ctrlKey === !0,
                        d = i.button === 2 || u;
                    s.current = d
                }, {
                    checkForDefaultPrevented: !1
                }),
                onFocusOutside: S(e.onFocusOutside, c => c.preventDefault(), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    }),
    au = a.forwardRef((e, t) => {
        const n = ge(Ie, e.__scopePopover),
            o = a.useRef(!1),
            r = a.useRef(!1);
        return (0, l.jsx)(da, { ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: s => {
                e.onCloseAutoFocus ? .(s), s.defaultPrevented || (o.current || n.triggerRef.current ? .focus(), s.preventDefault()), o.current = !1, r.current = !1
            },
            onInteractOutside: s => {
                e.onInteractOutside ? .(s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (r.current = !0));
                const c = s.target;
                n.triggerRef.current ? .contains(c) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && r.current && s.preventDefault()
            }
        })
    }),
    da = a.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            trapFocus: o,
            onOpenAutoFocus: r,
            onCloseAutoFocus: s,
            disableOutsidePointerEvents: c,
            onEscapeKeyDown: i,
            onPointerDownOutside: u,
            onFocusOutside: d,
            onInteractOutside: p,
            ...f
        } = e, h = ge(Ie, n), x = Qe(n);
        return wt(), (0, l.jsx)(We, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: r,
            onUnmountAutoFocus: s,
            children: (0, l.jsx)(be, {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onInteractOutside: p,
                onEscapeKeyDown: i,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onDismiss: () => h.onOpenChange(!1),
                children: (0, l.jsx)(St, {
                    "data-state": pa(h.open),
                    role: "dialog",
                    id: h.contentId,
                    ...x,
                    ...f,
                    ref: t,
                    style: { ...f.style,
                        "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            })
        })
    }),
    fa = "PopoverClose",
    su = a.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...o
        } = e, r = ge(fa, n);
        return (0, l.jsx)(R.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: S(e.onClick, () => r.onOpenChange(!1))
        })
    });
su.displayName = fa;
var iu = "PopoverArrow",
    cu = a.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...o
        } = e, r = Qe(n);
        return (0, l.jsx)(Et, { ...r,
            ...o,
            ref: t
        })
    });
cu.displayName = iu;

function pa(e) {
    return e ? "open" : "closed"
}
var Df = aa,
    Of = ca,
    jf = la,
    Lf = ua,
    lu = [" ", "Enter", "ArrowUp", "ArrowDown"],
    uu = [" ", "Enter"],
    Se = "Select",
    [Mt, It, du] = Ve(Se),
    [Oe, kf] = re(Se, [du, me]),
    Nt = me(),
    [fu, xe] = Oe(Se),
    [pu, vu] = Oe(Se),
    mu = e => {
        const {
            __scopeSelect: t,
            children: n,
            open: o,
            defaultOpen: r,
            onOpenChange: s,
            value: c,
            defaultValue: i,
            onValueChange: u,
            dir: d,
            name: p,
            autoComplete: f,
            disabled: h,
            required: x,
            form: C
        } = e, v = Nt(t), [m, w] = a.useState(null), [g, y] = a.useState(null), [E, T] = a.useState(!1), N = Ae(d), [b, I] = oe({
            prop: o,
            defaultProp: r ? ? !1,
            onChange: s,
            caller: Se
        }), [O, D] = oe({
            prop: c,
            defaultProp: i,
            onChange: u,
            caller: Se
        }), G = a.useRef(null), j = m ? C || !!m.closest("form") : !0, [K, _] = a.useState(new Set), B = Array.from(K).map(L => L.props.value).join(";");
        return (0, l.jsx)(He, { ...v,
            children: (0, l.jsxs)(fu, {
                required: x,
                scope: t,
                trigger: m,
                onTriggerChange: w,
                valueNode: g,
                onValueNodeChange: y,
                valueNodeHasChildren: E,
                onValueNodeHasChildrenChange: T,
                contentId: se(),
                value: O,
                onValueChange: D,
                open: b,
                onOpenChange: I,
                dir: N,
                triggerPointerDownPosRef: G,
                disabled: h,
                children: [(0, l.jsx)(Mt.Provider, {
                    scope: t,
                    children: (0, l.jsx)(pu, {
                        scope: e.__scopeSelect,
                        onNativeOptionAdd: a.useCallback(L => {
                            _($ => new Set($).add(L))
                        }, []),
                        onNativeOptionRemove: a.useCallback(L => {
                            _($ => {
                                const k = new Set($);
                                return k.delete(L), k
                            })
                        }, []),
                        children: n
                    })
                }), j ? (0, l.jsxs)(Ra, {
                    "aria-hidden": !0,
                    required: x,
                    tabIndex: -1,
                    name: p,
                    autoComplete: f,
                    value: O,
                    onChange: L => D(L.target.value),
                    disabled: h,
                    form: C,
                    children: [O === void 0 ? (0, l.jsx)("option", {
                        value: ""
                    }) : null, Array.from(K)]
                }, B) : null]
            })
        })
    };
mu.displayName = Se;
var va = "SelectTrigger",
    ma = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            disabled: o = !1,
            ...r
        } = e, s = Nt(n), c = xe(va, n), i = c.disabled || o, u = A(t, c.onTriggerChange), d = It(n), p = a.useRef("touch"), [f, h, x] = _a(v => {
            const m = d().filter(g => !g.disabled),
                w = Ma(m, v, m.find(g => g.value === c.value));
            w !== void 0 && c.onValueChange(w.value)
        }), C = v => {
            i || (c.onOpenChange(!0), x()), v && (c.triggerPointerDownPosRef.current = {
                x: Math.round(v.pageX),
                y: Math.round(v.pageY)
            })
        };
        return (0, l.jsx)(Ye, {
            asChild: !0,
            ...s,
            children: (0, l.jsx)(R.button, {
                type: "button",
                role: "combobox",
                "aria-controls": c.contentId,
                "aria-expanded": c.open,
                "aria-required": c.required,
                "aria-autocomplete": "none",
                dir: c.dir,
                "data-state": c.open ? "open" : "closed",
                disabled: i,
                "data-disabled": i ? "" : void 0,
                "data-placeholder": Ta(c.value) ? "" : void 0,
                ...r,
                ref: u,
                onClick: S(r.onClick, v => {
                    v.currentTarget.focus(), p.current !== "mouse" && C(v)
                }),
                onPointerDown: S(r.onPointerDown, v => {
                    p.current = v.pointerType;
                    const m = v.target;
                    m.hasPointerCapture(v.pointerId) && m.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (C(v), v.preventDefault())
                }),
                onKeyDown: S(r.onKeyDown, v => {
                    const m = f.current !== "";
                    !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && h(v.key), !(m && v.key === " ") && lu.includes(v.key) && (C(), v.preventDefault())
                })
            })
        })
    });
ma.displayName = va;
var ha = "SelectValue",
    hu = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            className: o,
            style: r,
            children: s,
            placeholder: c = "",
            ...i
        } = e, u = xe(ha, n), {
            onValueNodeHasChildrenChange: d
        } = u, p = s !== void 0, f = A(t, u.onValueNodeChange);
        return Y(() => {
            d(p)
        }, [d, p]), (0, l.jsx)(R.span, { ...i,
            ref: f,
            style: {
                pointerEvents: "none"
            },
            children: Ta(u.value) ? (0, l.jsx)(l.Fragment, {
                children: c
            }) : s
        })
    });
hu.displayName = ha;
var gu = "SelectIcon",
    ga = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            children: o,
            ...r
        } = e;
        return (0, l.jsx)(R.span, {
            "aria-hidden": !0,
            ...r,
            ref: t,
            children: o || "▼"
        })
    });
ga.displayName = gu;
var xu = "SelectPortal",
    wu = e => (0, l.jsx)(Pe, {
        asChild: !0,
        ...e
    });
wu.displayName = xu;
var Ee = "SelectContent",
    Cu = a.forwardRef((e, t) => {
        const n = xe(Ee, e.__scopeSelect),
            [o, r] = a.useState();
        if (Y(() => {
                r(new DocumentFragment)
            }, []), !n.open) {
            const s = o;
            return s ? Ue.createPortal((0, l.jsx)(xa, {
                scope: e.__scopeSelect,
                children: (0, l.jsx)(Mt.Slot, {
                    scope: e.__scopeSelect,
                    children: (0, l.jsx)("div", {
                        children: e.children
                    })
                })
            }), s) : null
        }
        return (0, l.jsx)(wa, { ...e,
            ref: t
        })
    });
Cu.displayName = Ee;
var le = 10,
    [xa, we] = Oe(Ee),
    yu = "SelectContentImpl",
    Su = ve("SelectContent.RemoveScroll"),
    wa = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            position: o = "item-aligned",
            onCloseAutoFocus: r,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            side: i,
            sideOffset: u,
            align: d,
            alignOffset: p,
            arrowPadding: f,
            collisionBoundary: h,
            collisionPadding: x,
            sticky: C,
            hideWhenDetached: v,
            avoidCollisions: m,
            ...w
        } = e, g = xe(Ee, n), [y, E] = a.useState(null), [T, N] = a.useState(null), b = A(t, M => E(M)), [I, O] = a.useState(null), [D, G] = a.useState(null), j = It(n), [K, _] = a.useState(!1), B = a.useRef(!1);
        a.useEffect(() => {
            if (y) return Ct(y)
        }, [y]), wt();
        const L = a.useCallback(M => {
                const [V, ...U] = j().map(ee => ee.ref.current), [F] = U.slice(-1), X = document.activeElement;
                for (const ee of M)
                    if (ee === X || (ee ? .scrollIntoView({
                            block: "nearest"
                        }), ee === V && T && (T.scrollTop = 0), ee === F && T && (T.scrollTop = T.scrollHeight), ee ? .focus(), document.activeElement !== X)) return
            }, [j, T]),
            $ = a.useCallback(() => L([I, y]), [L, I, y]);
        a.useEffect(() => {
            K && $()
        }, [K, $]);
        const {
            onOpenChange: k,
            triggerPointerDownPosRef: P
        } = g;
        a.useEffect(() => {
            if (y) {
                let M = {
                    x: 0,
                    y: 0
                };
                const V = F => {
                        M = {
                            x: Math.abs(Math.round(F.pageX) - (P.current ? .x ? ? 0)),
                            y: Math.abs(Math.round(F.pageY) - (P.current ? .y ? ? 0))
                        }
                    },
                    U = F => {
                        M.x <= 10 && M.y <= 10 ? F.preventDefault() : y.contains(F.target) || k(!1), document.removeEventListener("pointermove", V), P.current = null
                    };
                return P.current !== null && (document.addEventListener("pointermove", V), document.addEventListener("pointerup", U, {
                    capture: !0,
                    once: !0
                })), () => {
                    document.removeEventListener("pointermove", V), document.removeEventListener("pointerup", U, {
                        capture: !0
                    })
                }
            }
        }, [y, k, P]), a.useEffect(() => {
            const M = () => k(!1);
            return window.addEventListener("blur", M), window.addEventListener("resize", M), () => {
                window.removeEventListener("blur", M), window.removeEventListener("resize", M)
            }
        }, [k]);
        const [te, W] = _a(M => {
            const V = j().filter(F => !F.disabled),
                U = Ma(V, M, V.find(F => F.ref.current === document.activeElement));
            U && setTimeout(() => U.ref.current.focus())
        }), J = a.useCallback((M, V, U) => {
            const F = !B.current && !U;
            (g.value !== void 0 && g.value === V || F) && (O(M), F && (B.current = !0))
        }, [g.value]), ne = a.useCallback(() => y ? .focus(), [y]), z = a.useCallback((M, V, U) => {
            const F = !B.current && !U;
            (g.value !== void 0 && g.value === V || F) && G(M)
        }, [g.value]), ae = o === "popper" ? Qt : Ca, H = ae === Qt ? {
            side: i,
            sideOffset: u,
            align: d,
            alignOffset: p,
            arrowPadding: f,
            collisionBoundary: h,
            collisionPadding: x,
            sticky: C,
            hideWhenDetached: v,
            avoidCollisions: m
        } : {};
        return (0, l.jsx)(xa, {
            scope: n,
            content: y,
            viewport: T,
            onViewportChange: N,
            itemRefCallback: J,
            selectedItem: I,
            onItemLeave: ne,
            itemTextRefCallback: z,
            focusSelectedItem: $,
            selectedItemText: D,
            position: o,
            isPositioned: K,
            searchRef: te,
            children: (0, l.jsx)(Ke, {
                as: Su,
                allowPinchZoom: !0,
                children: (0, l.jsx)(We, {
                    asChild: !0,
                    trapped: g.open,
                    onMountAutoFocus: M => {
                        M.preventDefault()
                    },
                    onUnmountAutoFocus: S(r, M => {
                        g.trigger ? .focus({
                            preventScroll: !0
                        }), M.preventDefault()
                    }),
                    children: (0, l.jsx)(be, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: s,
                        onPointerDownOutside: c,
                        onFocusOutside: M => M.preventDefault(),
                        onDismiss: () => g.onOpenChange(!1),
                        children: (0, l.jsx)(ae, {
                            role: "listbox",
                            id: g.contentId,
                            "data-state": g.open ? "open" : "closed",
                            dir: g.dir,
                            onContextMenu: M => M.preventDefault(),
                            ...w,
                            ...H,
                            onPlaced: () => _(!0),
                            ref: b,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                outline: "none",
                                ...w.style
                            },
                            onKeyDown: S(w.onKeyDown, M => {
                                const V = M.ctrlKey || M.altKey || M.metaKey;
                                if (M.key === "Tab" && M.preventDefault(), !V && M.key.length === 1 && W(M.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(M.key)) {
                                    let U = j().filter(F => !F.disabled).map(F => F.ref.current);
                                    if (["ArrowUp", "End"].includes(M.key) && (U = U.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(M.key)) {
                                        const F = M.target,
                                            X = U.indexOf(F);
                                        U = U.slice(X + 1)
                                    }
                                    setTimeout(() => L(U)), M.preventDefault()
                                }
                            })
                        })
                    })
                })
            })
        })
    });
wa.displayName = yu;
var Eu = "SelectItemAlignedPosition",
    Ca = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            onPlaced: o,
            ...r
        } = e, s = xe(Ee, n), c = we(Ee, n), [i, u] = a.useState(null), [d, p] = a.useState(null), f = A(t, b => p(b)), h = It(n), x = a.useRef(!1), C = a.useRef(!0), {
            viewport: v,
            selectedItem: m,
            selectedItemText: w,
            focusSelectedItem: g
        } = c, y = a.useCallback(() => {
            if (s.trigger && s.valueNode && i && d && v && m && w) {
                const b = s.trigger.getBoundingClientRect(),
                    I = d.getBoundingClientRect(),
                    O = s.valueNode.getBoundingClientRect(),
                    D = w.getBoundingClientRect();
                if (s.dir !== "rtl") {
                    const F = D.left - I.left,
                        X = O.left - F,
                        ee = b.left - X,
                        de = b.width + ee,
                        Lt = Math.max(de, I.width),
                        kt = window.innerWidth - le,
                        Ft = pt(X, [le, Math.max(le, kt - Lt)]);
                    i.style.minWidth = de + "px", i.style.left = Ft + "px"
                } else {
                    const F = I.right - D.right,
                        X = window.innerWidth - O.right - F,
                        ee = window.innerWidth - b.right - X,
                        de = b.width + ee,
                        Lt = Math.max(de, I.width),
                        kt = window.innerWidth - le,
                        Ft = pt(X, [le, Math.max(le, kt - Lt)]);
                    i.style.minWidth = de + "px", i.style.right = Ft + "px"
                }
                const G = h(),
                    j = window.innerHeight - le * 2,
                    K = v.scrollHeight,
                    _ = window.getComputedStyle(d),
                    B = parseInt(_.borderTopWidth, 10),
                    L = parseInt(_.paddingTop, 10),
                    $ = parseInt(_.borderBottomWidth, 10),
                    k = parseInt(_.paddingBottom, 10),
                    P = B + L + K + k + $,
                    te = Math.min(m.offsetHeight * 5, P),
                    W = window.getComputedStyle(v),
                    J = parseInt(W.paddingTop, 10),
                    ne = parseInt(W.paddingBottom, 10),
                    z = b.top + b.height / 2 - le,
                    ae = j - z,
                    H = m.offsetHeight / 2,
                    M = m.offsetTop + H,
                    V = B + L + M,
                    U = P - V;
                if (V <= z) {
                    const F = G.length > 0 && m === G[G.length - 1].ref.current;
                    i.style.bottom = "0px";
                    const X = d.clientHeight - v.offsetTop - v.offsetHeight,
                        ee = V + Math.max(ae, H + (F ? ne : 0) + X + $);
                    i.style.height = ee + "px"
                } else {
                    const F = G.length > 0 && m === G[0].ref.current;
                    i.style.top = "0px";
                    const X = Math.max(z, B + v.offsetTop + (F ? J : 0) + H) + U;
                    i.style.height = X + "px", v.scrollTop = V - z + v.offsetTop
                }
                i.style.margin = `${le}px 0`, i.style.minHeight = te + "px", i.style.maxHeight = j + "px", o ? .(), requestAnimationFrame(() => x.current = !0)
            }
        }, [h, s.trigger, s.valueNode, i, d, v, m, w, s.dir, o]);
        Y(() => y(), [y]);
        const [E, T] = a.useState();
        Y(() => {
            d && T(window.getComputedStyle(d).zIndex)
        }, [d]);
        const N = a.useCallback(b => {
            b && C.current === !0 && (y(), g ? .(), C.current = !1)
        }, [y, g]);
        return (0, l.jsx)(Pu, {
            scope: n,
            contentWrapper: i,
            shouldExpandOnScrollRef: x,
            onScrollButtonChange: N,
            children: (0, l.jsx)("div", {
                ref: u,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    zIndex: E
                },
                children: (0, l.jsx)(R.div, { ...r,
                    ref: f,
                    style: {
                        boxSizing: "border-box",
                        maxHeight: "100%",
                        ...r.style
                    }
                })
            })
        })
    });
Ca.displayName = Eu;
var bu = "SelectPopperPosition",
    Qt = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            align: o = "start",
            collisionPadding: r = le,
            ...s
        } = e, c = Nt(n);
        return (0, l.jsx)(St, { ...c,
            ...s,
            ref: t,
            align: o,
            collisionPadding: r,
            style: {
                boxSizing: "border-box",
                ...s.style,
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
Qt.displayName = bu;
var [Pu, Mn] = Oe(Ee, {}), Jt = "SelectViewport", Ru = a.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        nonce: o,
        ...r
    } = e, s = we(Jt, n), c = Mn(Jt, n), i = A(t, s.onViewportChange), u = a.useRef(0);
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o
        }), (0, l.jsx)(Mt.Slot, {
            scope: n,
            children: (0, l.jsx)(R.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...r,
                ref: i,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...r.style
                },
                onScroll: S(r.onScroll, d => {
                    const p = d.currentTarget,
                        {
                            contentWrapper: f,
                            shouldExpandOnScrollRef: h
                        } = c;
                    if (h ? .current && f) {
                        const x = Math.abs(u.current - p.scrollTop);
                        if (x > 0) {
                            const C = window.innerHeight - le * 2,
                                v = parseFloat(f.style.minHeight),
                                m = parseFloat(f.style.height),
                                w = Math.max(v, m);
                            if (w < C) {
                                const g = w + x,
                                    y = Math.min(C, g),
                                    E = g - y;
                                f.style.height = y + "px", f.style.bottom === "0px" && (p.scrollTop = E > 0 ? E : 0, f.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    u.current = p.scrollTop
                })
            })
        })]
    })
});
Ru.displayName = Jt;
var ya = "SelectGroup",
    [Tu, _u] = Oe(ya),
    Mu = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...o
        } = e, r = se();
        return (0, l.jsx)(Tu, {
            scope: n,
            id: r,
            children: (0, l.jsx)(R.div, {
                role: "group",
                "aria-labelledby": r,
                ...o,
                ref: t
            })
        })
    });
Mu.displayName = ya;
var Sa = "SelectLabel",
    Iu = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...o
        } = e, r = _u(Sa, n);
        return (0, l.jsx)(R.div, {
            id: r.id,
            ...o,
            ref: t
        })
    });
Iu.displayName = Sa;
var vt = "SelectItem",
    [Nu, Ea] = Oe(vt),
    Au = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            value: o,
            disabled: r = !1,
            textValue: s,
            ...c
        } = e, i = xe(vt, n), u = we(vt, n), d = i.value === o, [p, f] = a.useState(s ? ? ""), [h, x] = a.useState(!1), C = A(t, g => u.itemRefCallback ? .(g, o, r)), v = se(), m = a.useRef("touch"), w = () => {
            r || (i.onValueChange(o), i.onOpenChange(!1))
        };
        if (o === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
        return (0, l.jsx)(Nu, {
            scope: n,
            value: o,
            disabled: r,
            textId: v,
            isSelected: d,
            onItemTextChange: a.useCallback(g => {
                f(y => y || (g ? .textContent ? ? "").trim())
            }, []),
            children: (0, l.jsx)(Mt.ItemSlot, {
                scope: n,
                value: o,
                disabled: r,
                textValue: p,
                children: (0, l.jsx)(R.div, {
                    role: "option",
                    "aria-labelledby": v,
                    "data-highlighted": h ? "" : void 0,
                    "aria-selected": d && h,
                    "data-state": d ? "checked" : "unchecked",
                    "aria-disabled": r || void 0,
                    "data-disabled": r ? "" : void 0,
                    tabIndex: r ? void 0 : -1,
                    ...c,
                    ref: C,
                    onFocus: S(c.onFocus, () => x(!0)),
                    onBlur: S(c.onBlur, () => x(!1)),
                    onClick: S(c.onClick, () => {
                        m.current !== "mouse" && w()
                    }),
                    onPointerUp: S(c.onPointerUp, () => {
                        m.current === "mouse" && w()
                    }),
                    onPointerDown: S(c.onPointerDown, g => {
                        m.current = g.pointerType
                    }),
                    onPointerMove: S(c.onPointerMove, g => {
                        m.current = g.pointerType, r ? u.onItemLeave ? .() : m.current === "mouse" && g.currentTarget.focus({
                            preventScroll: !0
                        })
                    }),
                    onPointerLeave: S(c.onPointerLeave, g => {
                        g.currentTarget === document.activeElement && u.onItemLeave ? .()
                    }),
                    onKeyDown: S(c.onKeyDown, g => {
                        u.searchRef ? .current !== "" && g.key === " " || (uu.includes(g.key) && w(), g.key === " " && g.preventDefault())
                    })
                })
            })
        })
    });
Au.displayName = vt;
var ke = "SelectItemText",
    Du = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            className: o,
            style: r,
            ...s
        } = e, c = xe(ke, n), i = we(ke, n), u = Ea(ke, n), d = vu(ke, n), [p, f] = a.useState(null), h = A(t, w => f(w), u.onItemTextChange, w => i.itemTextRefCallback ? .(w, u.value, u.disabled)), x = p ? .textContent, C = a.useMemo(() => (0, l.jsx)("option", {
            value: u.value,
            disabled: u.disabled,
            children: x
        }, u.value), [u.disabled, u.value, x]), {
            onNativeOptionAdd: v,
            onNativeOptionRemove: m
        } = d;
        return Y(() => (v(C), () => m(C)), [v, m, C]), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(R.span, {
                id: u.textId,
                ...s,
                ref: h
            }), u.isSelected && c.valueNode && !c.valueNodeHasChildren ? Ue.createPortal(s.children, c.valueNode) : null]
        })
    });
Du.displayName = ke;
var ba = "SelectItemIndicator",
    Ou = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...o
        } = e;
        return Ea(ba, n).isSelected ? (0, l.jsx)(R.span, {
            "aria-hidden": !0,
            ...o,
            ref: t
        }) : null
    });
Ou.displayName = ba;
var en = "SelectScrollUpButton",
    ju = a.forwardRef((e, t) => {
        const n = we(en, e.__scopeSelect),
            o = Mn(en, e.__scopeSelect),
            [r, s] = a.useState(!1),
            c = A(t, o.onScrollButtonChange);
        return Y(() => {
            if (n.viewport && n.isPositioned) {
                let i = function() {
                    const d = u.scrollTop > 0;
                    s(d)
                };
                const u = n.viewport;
                return i(), u.addEventListener("scroll", i), () => u.removeEventListener("scroll", i)
            }
        }, [n.viewport, n.isPositioned]), r ? (0, l.jsx)(Pa, { ...e,
            ref: c,
            onAutoScroll: () => {
                const {
                    viewport: i,
                    selectedItem: u
                } = n;
                i && u && (i.scrollTop = i.scrollTop - u.offsetHeight)
            }
        }) : null
    });
ju.displayName = en;
var tn = "SelectScrollDownButton",
    Lu = a.forwardRef((e, t) => {
        const n = we(tn, e.__scopeSelect),
            o = Mn(tn, e.__scopeSelect),
            [r, s] = a.useState(!1),
            c = A(t, o.onScrollButtonChange);
        return Y(() => {
            if (n.viewport && n.isPositioned) {
                let i = function() {
                    const d = u.scrollHeight - u.clientHeight,
                        p = Math.ceil(u.scrollTop) < d;
                    s(p)
                };
                const u = n.viewport;
                return i(), u.addEventListener("scroll", i), () => u.removeEventListener("scroll", i)
            }
        }, [n.viewport, n.isPositioned]), r ? (0, l.jsx)(Pa, { ...e,
            ref: c,
            onAutoScroll: () => {
                const {
                    viewport: i,
                    selectedItem: u
                } = n;
                i && u && (i.scrollTop = i.scrollTop + u.offsetHeight)
            }
        }) : null
    });
Lu.displayName = tn;
var Pa = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            onAutoScroll: o,
            ...r
        } = e, s = we("SelectScrollButton", n), c = a.useRef(null), i = It(n), u = a.useCallback(() => {
            c.current !== null && (window.clearInterval(c.current), c.current = null)
        }, []);
        return a.useEffect(() => () => u(), [u]), Y(() => {
            i().find(d => d.ref.current === document.activeElement) ? .ref.current ? .scrollIntoView({
                block: "nearest"
            })
        }, [i]), (0, l.jsx)(R.div, {
            "aria-hidden": !0,
            ...r,
            ref: t,
            style: {
                flexShrink: 0,
                ...r.style
            },
            onPointerDown: S(r.onPointerDown, () => {
                c.current === null && (c.current = window.setInterval(o, 50))
            }),
            onPointerMove: S(r.onPointerMove, () => {
                s.onItemLeave ? .(), c.current === null && (c.current = window.setInterval(o, 50))
            }),
            onPointerLeave: S(r.onPointerLeave, () => {
                u()
            })
        })
    }),
    ku = "SelectSeparator",
    Fu = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...o
        } = e;
        return (0, l.jsx)(R.div, {
            "aria-hidden": !0,
            ...o,
            ref: t
        })
    });
Fu.displayName = ku;
var nn = "SelectArrow",
    $u = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...o
        } = e, r = Nt(n), s = xe(nn, n), c = we(nn, n);
        return s.open && c.position === "popper" ? (0, l.jsx)(Et, { ...r,
            ...o,
            ref: t
        }) : null
    });
$u.displayName = nn;
var Gu = "SelectBubbleInput",
    Ra = a.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...n
    }, o) => {
        const r = a.useRef(null),
            s = A(o, r),
            c = Do(t);
        return a.useEffect(() => {
            const i = r.current;
            if (!i) return;
            const u = window.HTMLSelectElement.prototype,
                d = Object.getOwnPropertyDescriptor(u, "value").set;
            if (c !== t && d) {
                const p = new Event("change", {
                    bubbles: !0
                });
                d.call(i, t), i.dispatchEvent(p)
            }
        }, [c, t]), (0, l.jsx)(R.select, { ...n,
            style: { ...vo,
                ...n.style
            },
            ref: s,
            defaultValue: t
        })
    });
Ra.displayName = Gu;

function Ta(e) {
    return e === "" || e === void 0
}

function _a(e) {
    const t = q(e),
        n = a.useRef(""),
        o = a.useRef(0),
        r = a.useCallback(c => {
            const i = n.current + c;
            t(i), (function u(d) {
                n.current = d, window.clearTimeout(o.current), d !== "" && (o.current = window.setTimeout(() => u(""), 1e3))
            })(i)
        }, [t]),
        s = a.useCallback(() => {
            n.current = "", window.clearTimeout(o.current)
        }, []);
    return a.useEffect(() => () => window.clearTimeout(o.current), []), [n, r, s]
}

function Ma(e, t, n) {
    const o = t.length > 1 && Array.from(t).every(i => i === t[0]) ? t[0] : t,
        r = n ? e.indexOf(n) : -1;
    let s = Bu(e, Math.max(r, 0));
    o.length === 1 && (s = s.filter(i => i !== n));
    const c = s.find(i => i.textValue.toLowerCase().startsWith(o.toLowerCase()));
    return c !== n ? c : void 0
}

function Bu(e, t) {
    return e.map((n, o) => e[(t + o) % e.length])
}
var Ff = ma,
    $f = ga,
    Ku = "Separator",
    to = "horizontal",
    Uu = ["horizontal", "vertical"],
    Ia = a.forwardRef((e, t) => {
        const {
            decorative: n,
            orientation: o = to,
            ...r
        } = e, s = Vu(o) ? o : to, c = n ? {
            role: "none"
        } : {
            "aria-orientation": s === "vertical" ? s : void 0,
            role: "separator"
        };
        return (0, l.jsx)(R.div, {
            "data-orientation": s,
            ...c,
            ...r,
            ref: t
        })
    });
Ia.displayName = Ku;

function Vu(e) {
    return Uu.includes(e)
}
var Wu = Ia,
    Na = ["PageUp", "PageDown"],
    Aa = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
    Da = {
        "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
        "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
    },
    je = "Slider",
    [on, Hu, Yu] = Ve(je),
    [Oa, Gf] = re(je, [Yu]),
    [zu, At] = Oa(je),
    ja = a.forwardRef((e, t) => {
        const {
            name: n,
            min: o = 0,
            max: r = 100,
            step: s = 1,
            orientation: c = "horizontal",
            disabled: i = !1,
            minStepsBetweenThumbs: u = 0,
            defaultValue: d = [o],
            value: p,
            onValueChange: f = () => {},
            onValueCommit: h = () => {},
            inverted: x = !1,
            form: C,
            ...v
        } = e, m = a.useRef(new Set), w = a.useRef(0), g = c === "horizontal" ? Xu : qu, [y = [], E] = oe({
            prop: p,
            defaultProp: d,
            onChange: D => {
                [...m.current][w.current] ? .focus(), f(D)
            }
        }), T = a.useRef(y);

        function N(D) {
            O(D, td(y, D))
        }

        function b(D) {
            O(D, w.current)
        }

        function I() {
            const D = T.current[w.current];
            y[w.current] !== D && h(y)
        }

        function O(D, G, {
            commit: j
        } = {
            commit: !1
        }) {
            const K = ad(s),
                _ = sd(Math.round((D - o) / s) * s + o, K),
                B = pt(_, [o, r]);
            E((L = []) => {
                const $ = Ju(L, B, G);
                if (rd($, u * s)) {
                    w.current = $.indexOf(B);
                    const k = String($) !== String(L);
                    return k && j && h($), k ? $ : L
                } else return L
            })
        }
        return (0, l.jsx)(zu, {
            scope: e.__scopeSlider,
            name: n,
            disabled: i,
            min: o,
            max: r,
            valueIndexToChangeRef: w,
            thumbs: m.current,
            values: y,
            orientation: c,
            form: C,
            children: (0, l.jsx)(on.Provider, {
                scope: e.__scopeSlider,
                children: (0, l.jsx)(on.Slot, {
                    scope: e.__scopeSlider,
                    children: (0, l.jsx)(g, {
                        "aria-disabled": i,
                        "data-disabled": i ? "" : void 0,
                        ...v,
                        ref: t,
                        onPointerDown: S(v.onPointerDown, () => {
                            i || (T.current = y)
                        }),
                        min: o,
                        max: r,
                        inverted: x,
                        onSlideStart: i ? void 0 : N,
                        onSlideMove: i ? void 0 : b,
                        onSlideEnd: i ? void 0 : I,
                        onHomeKeyDown: () => !i && O(o, 0, {
                            commit: !0
                        }),
                        onEndKeyDown: () => !i && O(r, y.length - 1, {
                            commit: !0
                        }),
                        onStepKeyDown: ({
                            event: D,
                            direction: G
                        }) => {
                            if (!i) {
                                const j = Na.includes(D.key) || D.shiftKey && Aa.includes(D.key) ? 10 : 1,
                                    K = w.current,
                                    _ = y[K];
                                O(_ + s * j * G, K, {
                                    commit: !0
                                })
                            }
                        }
                    })
                })
            })
        })
    });
ja.displayName = je;
var [La, ka] = Oa(je, {
    startEdge: "left",
    endEdge: "right",
    size: "width",
    direction: 1
}), Xu = a.forwardRef((e, t) => {
    const {
        min: n,
        max: o,
        dir: r,
        inverted: s,
        onSlideStart: c,
        onSlideMove: i,
        onSlideEnd: u,
        onStepKeyDown: d,
        ...p
    } = e, [f, h] = a.useState(null), x = A(t, y => h(y)), C = a.useRef(void 0), v = Ae(r), m = v === "ltr", w = m && !s || !m && s;

    function g(y) {
        const E = C.current || f.getBoundingClientRect(),
            T = In([0, E.width], w ? [n, o] : [o, n]);
        return C.current = E, T(y - E.left)
    }
    return (0, l.jsx)(La, {
        scope: e.__scopeSlider,
        startEdge: w ? "left" : "right",
        endEdge: w ? "right" : "left",
        direction: w ? 1 : -1,
        size: "width",
        children: (0, l.jsx)(Fa, {
            dir: v,
            "data-orientation": "horizontal",
            ...p,
            ref: x,
            style: { ...p.style,
                "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: y => {
                const E = g(y.clientX);
                c ? .(E)
            },
            onSlideMove: y => {
                const E = g(y.clientX);
                i ? .(E)
            },
            onSlideEnd: () => {
                C.current = void 0, u ? .()
            },
            onStepKeyDown: y => {
                const E = Da[w ? "from-left" : "from-right"].includes(y.key);
                d ? .({
                    event: y,
                    direction: E ? -1 : 1
                })
            }
        })
    })
}), qu = a.forwardRef((e, t) => {
    const {
        min: n,
        max: o,
        inverted: r,
        onSlideStart: s,
        onSlideMove: c,
        onSlideEnd: i,
        onStepKeyDown: u,
        ...d
    } = e, p = a.useRef(null), f = A(t, p), h = a.useRef(void 0), x = !r;

    function C(v) {
        const m = h.current || p.current.getBoundingClientRect(),
            w = In([0, m.height], x ? [o, n] : [n, o]);
        return h.current = m, w(v - m.top)
    }
    return (0, l.jsx)(La, {
        scope: e.__scopeSlider,
        startEdge: x ? "bottom" : "top",
        endEdge: x ? "top" : "bottom",
        size: "height",
        direction: x ? 1 : -1,
        children: (0, l.jsx)(Fa, {
            "data-orientation": "vertical",
            ...d,
            ref: f,
            style: { ...d.style,
                "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: v => {
                const m = C(v.clientY);
                s ? .(m)
            },
            onSlideMove: v => {
                const m = C(v.clientY);
                c ? .(m)
            },
            onSlideEnd: () => {
                h.current = void 0, i ? .()
            },
            onStepKeyDown: v => {
                const m = Da[x ? "from-bottom" : "from-top"].includes(v.key);
                u ? .({
                    event: v,
                    direction: m ? -1 : 1
                })
            }
        })
    })
}), Fa = a.forwardRef((e, t) => {
    const {
        __scopeSlider: n,
        onSlideStart: o,
        onSlideMove: r,
        onSlideEnd: s,
        onHomeKeyDown: c,
        onEndKeyDown: i,
        onStepKeyDown: u,
        ...d
    } = e, p = At(je, n);
    return (0, l.jsx)(R.span, { ...d,
        ref: t,
        onKeyDown: S(e.onKeyDown, f => {
            f.key === "Home" ? (c(f), f.preventDefault()) : f.key === "End" ? (i(f), f.preventDefault()) : Na.concat(Aa).includes(f.key) && (u(f), f.preventDefault())
        }),
        onPointerDown: S(e.onPointerDown, f => {
            const h = f.target;
            h.setPointerCapture(f.pointerId), f.preventDefault(), p.thumbs.has(h) ? h.focus() : o(f)
        }),
        onPointerMove: S(e.onPointerMove, f => {
            f.target.hasPointerCapture(f.pointerId) && r(f)
        }),
        onPointerUp: S(e.onPointerUp, f => {
            const h = f.target;
            h.hasPointerCapture(f.pointerId) && (h.releasePointerCapture(f.pointerId), s(f))
        })
    })
}), $a = "SliderTrack", Ga = a.forwardRef((e, t) => {
    const {
        __scopeSlider: n,
        ...o
    } = e, r = At($a, n);
    return (0, l.jsx)(R.span, {
        "data-disabled": r.disabled ? "" : void 0,
        "data-orientation": r.orientation,
        ...o,
        ref: t
    })
});
Ga.displayName = $a;
var rn = "SliderRange",
    Ba = a.forwardRef((e, t) => {
        const {
            __scopeSlider: n,
            ...o
        } = e, r = At(rn, n), s = ka(rn, n), c = a.useRef(null), i = A(t, c), u = r.values.length, d = r.values.map(h => Va(h, r.min, r.max)), p = u > 1 ? Math.min(...d) : 0, f = 100 - Math.max(...d);
        return (0, l.jsx)(R.span, {
            "data-orientation": r.orientation,
            "data-disabled": r.disabled ? "" : void 0,
            ...o,
            ref: i,
            style: { ...e.style,
                [s.startEdge]: p + "%",
                [s.endEdge]: f + "%"
            }
        })
    });
Ba.displayName = rn;
var an = "SliderThumb",
    Ka = a.forwardRef((e, t) => {
        const n = Hu(e.__scopeSlider),
            [o, r] = a.useState(null),
            s = A(t, i => r(i)),
            c = a.useMemo(() => o ? n().findIndex(i => i.ref.current === o) : -1, [n, o]);
        return (0, l.jsx)(Zu, { ...e,
            ref: s,
            index: c
        })
    }),
    Zu = a.forwardRef((e, t) => {
        const {
            __scopeSlider: n,
            index: o,
            name: r,
            ...s
        } = e, c = At(an, n), i = ka(an, n), [u, d] = a.useState(null), p = A(t, g => d(g)), f = u ? c.form || !!u.closest("form") : !0, h = Oo(u), x = c.values[o], C = x === void 0 ? 0 : Va(x, c.min, c.max), v = ed(o, c.values.length), m = h ? .[i.size], w = m ? nd(m, C, i.direction) : 0;
        return a.useEffect(() => {
            if (u) return c.thumbs.add(u), () => {
                c.thumbs.delete(u)
            }
        }, [u, c.thumbs]), (0, l.jsxs)("span", {
            style: {
                transform: "var(--radix-slider-thumb-transform)",
                position: "absolute",
                [i.startEdge]: `calc(${C}% + ${w}px)`
            },
            children: [(0, l.jsx)(on.ItemSlot, {
                scope: e.__scopeSlider,
                children: (0, l.jsx)(R.span, {
                    role: "slider",
                    "aria-label": e["aria-label"] || v,
                    "aria-valuemin": c.min,
                    "aria-valuenow": x,
                    "aria-valuemax": c.max,
                    "aria-orientation": c.orientation,
                    "data-orientation": c.orientation,
                    "data-disabled": c.disabled ? "" : void 0,
                    tabIndex: c.disabled ? void 0 : 0,
                    ...s,
                    ref: p,
                    style: x === void 0 ? {
                        display: "none"
                    } : e.style,
                    onFocus: S(e.onFocus, () => {
                        c.valueIndexToChangeRef.current = o
                    })
                })
            }), f && (0, l.jsx)(Ua, {
                name: r ? ? (c.name ? c.name + (c.values.length > 1 ? "[]" : "") : void 0),
                form: c.form,
                value: x
            }, o)]
        })
    });
Ka.displayName = an;
var Qu = "RadioBubbleInput",
    Ua = a.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...n
    }, o) => {
        const r = a.useRef(null),
            s = A(r, o),
            c = Do(t);
        return a.useEffect(() => {
            const i = r.current;
            if (!i) return;
            const u = window.HTMLInputElement.prototype,
                d = Object.getOwnPropertyDescriptor(u, "value").set;
            if (c !== t && d) {
                const p = new Event("input", {
                    bubbles: !0
                });
                d.call(i, t), i.dispatchEvent(p)
            }
        }, [c, t]), (0, l.jsx)(R.input, {
            style: {
                display: "none"
            },
            ...n,
            ref: s,
            defaultValue: t
        })
    });
Ua.displayName = Qu;

function Ju(e = [], t, n) {
    const o = [...e];
    return o[n] = t, o.sort((r, s) => r - s)
}

function Va(e, t, n) {
    const o = 100 / (n - t) * (e - t);
    return pt(o, [0, 100])
}

function ed(e, t) {
    return t > 2 ? `Value ${e+1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0
}

function td(e, t) {
    if (e.length === 1) return 0;
    const n = e.map(r => Math.abs(r - t)),
        o = Math.min(...n);
    return n.indexOf(o)
}

function nd(e, t, n) {
    const o = e / 2;
    return (o - In([0, 50], [0, o])(t) * n) * n
}

function od(e) {
    return e.slice(0, -1).map((t, n) => e[n + 1] - t)
}

function rd(e, t) {
    if (t > 0) {
        const n = od(e);
        return Math.min(...n) >= t
    }
    return !0
}

function In(e, t) {
    return n => {
        if (e[0] === e[1] || t[0] === t[1]) return t[0];
        const o = (t[1] - t[0]) / (e[1] - e[0]);
        return t[0] + o * (n - e[0])
    }
}

function ad(e) {
    return (String(e).split(".")[1] || "").length
}

function sd(e, t) {
    const n = Math.pow(10, t);
    return Math.round(e * n) / n
}
var Bf = ja,
    Kf = Ga,
    Uf = Ba,
    Vf = Ka,
    Nn = "ToastProvider",
    [An, id, cd] = Ve("Toast"),
    [Wa, Wf] = re("Toast", [cd]),
    [ld, Dt] = Wa(Nn),
    Ha = e => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: o = 5e3,
            swipeDirection: r = "right",
            swipeThreshold: s = 50,
            children: c
        } = e, [i, u] = a.useState(null), [d, p] = a.useState(0), f = a.useRef(!1), h = a.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Nn}\`. Expected non-empty \`string\`.`), (0, l.jsx)(An.Provider, {
            scope: t,
            children: (0, l.jsx)(ld, {
                scope: t,
                label: n,
                duration: o,
                swipeDirection: r,
                swipeThreshold: s,
                toastCount: d,
                viewport: i,
                onViewportChange: u,
                onToastAdd: a.useCallback(() => p(x => x + 1), []),
                onToastRemove: a.useCallback(() => p(x => x - 1), []),
                isFocusedToastEscapeKeyDownRef: f,
                isClosePausedRef: h,
                children: c
            })
        })
    };
Ha.displayName = Nn;
var Ya = "ToastViewport",
    ud = ["F8"],
    sn = "toast.viewportPause",
    cn = "toast.viewportResume",
    dd = a.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            hotkey: o = ud,
            label: r = "Notifications ({hotkey})",
            ...s
        } = e, c = Dt(Ya, n), i = id(n), u = a.useRef(null), d = a.useRef(null), p = a.useRef(null), f = a.useRef(null), h = A(t, f, c.onViewportChange), x = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), C = c.toastCount > 0;
        a.useEffect(() => {
            const m = w => {
                o.length !== 0 && o.every(g => w[g] || w.code === g) && f.current ? .focus()
            };
            return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m)
        }, [o]), a.useEffect(() => {
            const m = u.current,
                w = f.current;
            if (C && m && w) {
                const g = () => {
                        if (!c.isClosePausedRef.current) {
                            const N = new CustomEvent(sn);
                            w.dispatchEvent(N), c.isClosePausedRef.current = !0
                        }
                    },
                    y = () => {
                        if (c.isClosePausedRef.current) {
                            const N = new CustomEvent(cn);
                            w.dispatchEvent(N), c.isClosePausedRef.current = !1
                        }
                    },
                    E = N => {
                        m.contains(N.relatedTarget) || y()
                    },
                    T = () => {
                        m.contains(document.activeElement) || y()
                    };
                return m.addEventListener("focusin", g), m.addEventListener("focusout", E), m.addEventListener("pointermove", g), m.addEventListener("pointerleave", T), window.addEventListener("blur", g), window.addEventListener("focus", y), () => {
                    m.removeEventListener("focusin", g), m.removeEventListener("focusout", E), m.removeEventListener("pointermove", g), m.removeEventListener("pointerleave", T), window.removeEventListener("blur", g), window.removeEventListener("focus", y)
                }
            }
        }, [C, c.isClosePausedRef]);
        const v = a.useCallback(({
            tabbingDirection: m
        }) => {
            const w = i().map(g => {
                const y = g.ref.current,
                    E = [y, ...bd(y)];
                return m === "forwards" ? E : E.reverse()
            });
            return (m === "forwards" ? w.reverse() : w).flat()
        }, [i]);
        return a.useEffect(() => {
            const m = f.current;
            if (m) {
                const w = g => {
                    const y = g.altKey || g.ctrlKey || g.metaKey;
                    if (g.key === "Tab" && !y) {
                        const E = document.activeElement,
                            T = g.shiftKey;
                        if (g.target === m && T) {
                            d.current ? .focus();
                            return
                        }
                        const N = v({
                                tabbingDirection: T ? "backwards" : "forwards"
                            }),
                            b = N.findIndex(I => I === E);
                        Yt(N.slice(b + 1)) ? g.preventDefault() : T ? d.current ? .focus() : p.current ? .focus()
                    }
                };
                return m.addEventListener("keydown", w), () => m.removeEventListener("keydown", w)
            }
        }, [i, v]), (0, l.jsxs)(Yi, {
            ref: u,
            role: "region",
            "aria-label": r.replace("{hotkey}", x),
            tabIndex: -1,
            style: {
                pointerEvents: C ? void 0 : "none"
            },
            children: [C && (0, l.jsx)(ln, {
                ref: d,
                onFocusFromOutsideViewport: () => {
                    Yt(v({
                        tabbingDirection: "forwards"
                    }))
                }
            }), (0, l.jsx)(An.Slot, {
                scope: n,
                children: (0, l.jsx)(R.ol, {
                    tabIndex: -1,
                    ...s,
                    ref: h
                })
            }), C && (0, l.jsx)(ln, {
                ref: p,
                onFocusFromOutsideViewport: () => {
                    Yt(v({
                        tabbingDirection: "backwards"
                    }))
                }
            })]
        })
    });
dd.displayName = Ya;
var za = "ToastFocusProxy",
    ln = a.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            onFocusFromOutsideViewport: o,
            ...r
        } = e, s = Dt(za, n);
        return (0, l.jsx)(xt, {
            tabIndex: 0,
            ...r,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: c => {
                const i = c.relatedTarget;
                s.viewport ? .contains(i) || o()
            }
        })
    });
ln.displayName = za;
var Je = "Toast",
    fd = "toast.swipeStart",
    pd = "toast.swipeMove",
    vd = "toast.swipeCancel",
    md = "toast.swipeEnd",
    Xa = a.forwardRef((e, t) => {
        const {
            forceMount: n,
            open: o,
            defaultOpen: r,
            onOpenChange: s,
            ...c
        } = e, [i, u] = oe({
            prop: o,
            defaultProp: r ? ? !0,
            onChange: s,
            caller: Je
        });
        return (0, l.jsx)(ie, {
            present: n || i,
            children: (0, l.jsx)(xd, {
                open: i,
                ...c,
                ref: t,
                onClose: () => u(!1),
                onPause: q(e.onPause),
                onResume: q(e.onResume),
                onSwipeStart: S(e.onSwipeStart, d => {
                    d.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: S(e.onSwipeMove, d => {
                    const {
                        x: p,
                        y: f
                    } = d.detail.delta;
                    d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${p}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
                }),
                onSwipeCancel: S(e.onSwipeCancel, d => {
                    d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: S(e.onSwipeEnd, d => {
                    const {
                        x: p,
                        y: f
                    } = d.detail.delta;
                    d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${p}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), u(!1)
                })
            })
        })
    });
Xa.displayName = Je;
var [hd, gd] = Wa(Je, {
    onClose() {}
}), xd = a.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: o = "foreground",
        duration: r,
        open: s,
        onClose: c,
        onEscapeKeyDown: i,
        onPause: u,
        onResume: d,
        onSwipeStart: p,
        onSwipeMove: f,
        onSwipeCancel: h,
        onSwipeEnd: x,
        ...C
    } = e, v = Dt(Je, n), [m, w] = a.useState(null), g = A(t, _ => w(_)), y = a.useRef(null), E = a.useRef(null), T = r || v.duration, N = a.useRef(0), b = a.useRef(T), I = a.useRef(0), {
        onToastAdd: O,
        onToastRemove: D
    } = v, G = q(() => {
        m ? .contains(document.activeElement) && v.viewport ? .focus(), c()
    }), j = a.useCallback(_ => {
        !_ || _ === 1 / 0 || (window.clearTimeout(I.current), N.current = new Date().getTime(), I.current = window.setTimeout(G, _))
    }, [G]);
    a.useEffect(() => {
        const _ = v.viewport;
        if (_) {
            const B = () => {
                    j(b.current), d ? .()
                },
                L = () => {
                    const $ = new Date().getTime() - N.current;
                    b.current = b.current - $, window.clearTimeout(I.current), u ? .()
                };
            return _.addEventListener(sn, L), _.addEventListener(cn, B), () => {
                _.removeEventListener(sn, L), _.removeEventListener(cn, B)
            }
        }
    }, [v.viewport, T, u, d, j]), a.useEffect(() => {
        s && !v.isClosePausedRef.current && j(T)
    }, [s, T, v.isClosePausedRef, j]), a.useEffect(() => (O(), () => D()), [O, D]);
    const K = a.useMemo(() => m ? ns(m) : null, [m]);
    return v.viewport ? (0, l.jsxs)(l.Fragment, {
        children: [K && (0, l.jsx)(wd, {
            __scopeToast: n,
            role: "status",
            "aria-live": o === "foreground" ? "assertive" : "polite",
            children: K
        }), (0, l.jsx)(hd, {
            scope: n,
            onClose: G,
            children: Ue.createPortal((0, l.jsx)(An.ItemSlot, {
                scope: n,
                children: (0, l.jsx)(Hi, {
                    asChild: !0,
                    onEscapeKeyDown: S(i, () => {
                        v.isFocusedToastEscapeKeyDownRef.current || G(), v.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: (0, l.jsx)(R.li, {
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": v.swipeDirection,
                        ...C,
                        ref: g,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: S(e.onKeyDown, _ => {
                            _.key === "Escape" && (i ? .(_.nativeEvent), _.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, G()))
                        }),
                        onPointerDown: S(e.onPointerDown, _ => {
                            _.button === 0 && (y.current = {
                                x: _.clientX,
                                y: _.clientY
                            })
                        }),
                        onPointerMove: S(e.onPointerMove, _ => {
                            if (!y.current) return;
                            const B = _.clientX - y.current.x,
                                L = _.clientY - y.current.y,
                                $ = !!E.current,
                                k = ["left", "right"].includes(v.swipeDirection),
                                P = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max,
                                te = k ? P(0, B) : 0,
                                W = k ? 0 : P(0, L),
                                J = _.pointerType === "touch" ? 10 : 2,
                                ne = {
                                    x: te,
                                    y: W
                                },
                                z = {
                                    originalEvent: _,
                                    delta: ne
                                };
                            $ ? (E.current = ne, it(pd, f, z, {
                                discrete: !1
                            })) : no(ne, v.swipeDirection, J) ? (E.current = ne, it(fd, p, z, {
                                discrete: !1
                            }), _.target.setPointerCapture(_.pointerId)) : (Math.abs(B) > J || Math.abs(L) > J) && (y.current = null)
                        }),
                        onPointerUp: S(e.onPointerUp, _ => {
                            const B = E.current,
                                L = _.target;
                            if (L.hasPointerCapture(_.pointerId) && L.releasePointerCapture(_.pointerId), E.current = null, y.current = null, B) {
                                const $ = _.currentTarget,
                                    k = {
                                        originalEvent: _,
                                        delta: B
                                    };
                                no(B, v.swipeDirection, v.swipeThreshold) ? it(md, x, k, {
                                    discrete: !0
                                }) : it(vd, h, k, {
                                    discrete: !0
                                }), $.addEventListener("click", P => P.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), v.viewport)
        })]
    }) : null
}), wd = e => {
    const {
        __scopeToast: t,
        children: n,
        ...o
    } = e, r = Dt(Je, t), [s, c] = a.useState(!1), [i, u] = a.useState(!1);
    return Sd(() => c(!0)), a.useEffect(() => {
        const d = window.setTimeout(() => u(!0), 1e3);
        return () => window.clearTimeout(d)
    }, []), i ? null : (0, l.jsx)(Pe, {
        asChild: !0,
        children: (0, l.jsx)(xt, { ...o,
            children: s && (0, l.jsxs)(l.Fragment, {
                children: [r.label, " ", n]
            })
        })
    })
}, Cd = "ToastTitle", qa = a.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        ...o
    } = e;
    return (0, l.jsx)(R.div, { ...o,
        ref: t
    })
});
qa.displayName = Cd;
var yd = "ToastDescription",
    Za = a.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...o
        } = e;
        return (0, l.jsx)(R.div, { ...o,
            ref: t
        })
    });
Za.displayName = yd;
var Qa = "ToastAction",
    Ja = a.forwardRef((e, t) => {
        const {
            altText: n,
            ...o
        } = e;
        return n.trim() ? (0, l.jsx)(ts, {
            altText: n,
            asChild: !0,
            children: (0, l.jsx)(Dn, { ...o,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${Qa}\`. Expected non-empty \`string\`.`), null)
    });
Ja.displayName = Qa;
var es = "ToastClose",
    Dn = a.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...o
        } = e, r = gd(es, n);
        return (0, l.jsx)(ts, {
            asChild: !0,
            children: (0, l.jsx)(R.button, {
                type: "button",
                ...o,
                ref: t,
                onClick: S(e.onClick, r.onClose)
            })
        })
    });
Dn.displayName = es;
var ts = a.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        altText: o,
        ...r
    } = e;
    return (0, l.jsx)(R.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": o || void 0,
        ...r,
        ref: t
    })
});

function ns(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(n => {
        if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Ed(n)) {
            const o = n.ariaHidden || n.hidden || n.style.display === "none",
                r = n.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (r) {
                    const s = n.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else t.push(...ns(n))
        }
    }), t
}

function it(e, t, n, {
    discrete: o
}) {
    const r = n.originalEvent.currentTarget,
        s = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && r.addEventListener(e, t, {
        once: !0
    }), o ? fn(r, s) : r.dispatchEvent(s)
}
var no = (e, t, n = 0) => {
    const o = Math.abs(e.x),
        r = Math.abs(e.y),
        s = o > r;
    return t === "left" || t === "right" ? s && o > n : !s && r > n
};

function Sd(e = () => {}) {
    const t = q(e);
    Y(() => {
        let n = 0,
            o = 0;
        return n = window.requestAnimationFrame(() => o = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(o)
        }
    }, [t])
}

function Ed(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function bd(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: o => {
                const r = o.tagName === "INPUT" && o.type === "hidden";
                return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function Yt(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var Hf = Ha,
    Yf = Xa,
    zf = qa,
    Xf = Za,
    qf = Ja,
    Zf = Dn,
    os = "Toggle",
    rs = a.forwardRef((e, t) => {
        const {
            pressed: n,
            defaultPressed: o,
            onPressedChange: r,
            ...s
        } = e, [c, i] = oe({
            prop: n,
            onChange: r,
            defaultProp: o ? ? !1,
            caller: os
        });
        return (0, l.jsx)(R.button, {
            type: "button",
            "aria-pressed": c,
            "data-state": c ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...s,
            ref: t,
            onClick: S(e.onClick, () => {
                e.disabled || i(!c)
            })
        })
    });
rs.displayName = os;
var Ce = "ToggleGroup",
    [as, ss] = re(Ce, [De]),
    is = De(),
    On = a.forwardRef((e, t) => {
        const {
            type: n,
            ...o
        } = e;
        if (n === "single") return (0, l.jsx)(Pd, { ...o,
            ref: t
        });
        if (n === "multiple") return (0, l.jsx)(Rd, { ...o,
            ref: t
        });
        throw new Error(`Missing prop \`type\` expected on \`${Ce}\``)
    });
On.displayName = Ce;
var [cs, ls] = as(Ce), Pd = a.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: o,
        onValueChange: r = () => {},
        ...s
    } = e, [c, i] = oe({
        prop: n,
        defaultProp: o ? ? "",
        onChange: r,
        caller: Ce
    });
    return (0, l.jsx)(cs, {
        scope: e.__scopeToggleGroup,
        type: "single",
        value: a.useMemo(() => c ? [c] : [], [c]),
        onItemActivate: i,
        onItemDeactivate: a.useCallback(() => i(""), [i]),
        children: (0, l.jsx)(us, { ...s,
            ref: t
        })
    })
}), Rd = a.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: o,
        onValueChange: r = () => {},
        ...s
    } = e, [c, i] = oe({
        prop: n,
        defaultProp: o ? ? [],
        onChange: r,
        caller: Ce
    }), u = a.useCallback(p => i((f = []) => [...f, p]), [i]), d = a.useCallback(p => i((f = []) => f.filter(h => h !== p)), [i]);
    return (0, l.jsx)(cs, {
        scope: e.__scopeToggleGroup,
        type: "multiple",
        value: c,
        onItemActivate: u,
        onItemDeactivate: d,
        children: (0, l.jsx)(us, { ...s,
            ref: t
        })
    })
});
On.displayName = Ce;
var [Td, _d] = as(Ce), us = a.forwardRef((e, t) => {
    const {
        __scopeToggleGroup: n,
        disabled: o = !1,
        rovingFocus: r = !0,
        orientation: s,
        dir: c,
        loop: i = !0,
        ...u
    } = e, d = is(n), p = Ae(c), f = {
        role: "group",
        dir: p,
        ...u
    };
    return (0, l.jsx)(Td, {
        scope: n,
        rovingFocus: r,
        disabled: o,
        children: r ? (0, l.jsx)(xn, {
            asChild: !0,
            ...d,
            orientation: s,
            dir: p,
            loop: i,
            children: (0, l.jsx)(R.div, { ...f,
                ref: t
            })
        }) : (0, l.jsx)(R.div, { ...f,
            ref: t
        })
    })
}), mt = "ToggleGroupItem", ds = a.forwardRef((e, t) => {
    const n = ls(mt, e.__scopeToggleGroup),
        o = _d(mt, e.__scopeToggleGroup),
        r = is(e.__scopeToggleGroup),
        s = n.value.includes(e.value),
        c = o.disabled || e.disabled,
        i = { ...e,
            pressed: s,
            disabled: c
        },
        u = a.useRef(null);
    return o.rovingFocus ? (0, l.jsx)(bt, {
        asChild: !0,
        ...r,
        focusable: !c,
        active: s,
        ref: u,
        children: (0, l.jsx)(oo, { ...i,
            ref: t
        })
    }) : (0, l.jsx)(oo, { ...i,
        ref: t
    })
});
ds.displayName = mt;
var oo = a.forwardRef((e, t) => {
        const {
            __scopeToggleGroup: n,
            value: o,
            ...r
        } = e, s = ls(mt, n), c = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, i = s.type === "single" ? c : void 0;
        return (0, l.jsx)(rs, { ...i,
            ...r,
            ref: t,
            onPressedChange: u => {
                u ? s.onItemActivate(o) : s.onItemDeactivate(o)
            }
        })
    }),
    Md = On,
    Id = ds,
    jn = "Toolbar",
    [Nd, Qf] = re(jn, [De, ss]),
    Ln = De(),
    fs = ss(),
    [Ad, ps] = Nd(jn),
    vs = a.forwardRef((e, t) => {
        const {
            __scopeToolbar: n,
            orientation: o = "horizontal",
            dir: r,
            loop: s = !0,
            ...c
        } = e, i = Ln(n), u = Ae(r);
        return (0, l.jsx)(Ad, {
            scope: n,
            orientation: o,
            dir: u,
            children: (0, l.jsx)(xn, {
                asChild: !0,
                ...i,
                orientation: o,
                dir: u,
                loop: s,
                children: (0, l.jsx)(R.div, {
                    role: "toolbar",
                    "aria-orientation": o,
                    dir: u,
                    ...c,
                    ref: t
                })
            })
        })
    });
vs.displayName = jn;
var ms = "ToolbarSeparator",
    Dd = a.forwardRef((e, t) => {
        const {
            __scopeToolbar: n,
            ...o
        } = e, r = ps(ms, n);
        return (0, l.jsx)(Wu, {
            orientation: r.orientation === "horizontal" ? "vertical" : "horizontal",
            ...o,
            ref: t
        })
    });
Dd.displayName = ms;
var Od = "ToolbarButton",
    kn = a.forwardRef((e, t) => {
        const {
            __scopeToolbar: n,
            ...o
        } = e, r = Ln(n);
        return (0, l.jsx)(bt, {
            asChild: !0,
            ...r,
            focusable: !e.disabled,
            children: (0, l.jsx)(R.button, {
                type: "button",
                ...o,
                ref: t
            })
        })
    });
kn.displayName = Od;
var jd = "ToolbarLink",
    Ld = a.forwardRef((e, t) => {
        const {
            __scopeToolbar: n,
            ...o
        } = e, r = Ln(n);
        return (0, l.jsx)(bt, {
            asChild: !0,
            ...r,
            focusable: !0,
            children: (0, l.jsx)(R.a, { ...o,
                ref: t,
                onKeyDown: S(e.onKeyDown, s => {
                    s.key === " " && s.currentTarget.click()
                })
            })
        })
    });
Ld.displayName = jd;
var hs = "ToolbarToggleGroup",
    gs = a.forwardRef((e, t) => {
        const {
            __scopeToolbar: n,
            ...o
        } = e, r = ps(hs, n), s = fs(n);
        return (0, l.jsx)(Md, {
            "data-orientation": r.orientation,
            dir: r.dir,
            ...s,
            ...o,
            ref: t,
            rovingFocus: !1
        })
    });
gs.displayName = hs;
var kd = "ToolbarToggleItem",
    xs = a.forwardRef((e, t) => {
        const {
            __scopeToolbar: n,
            ...o
        } = e, r = fs(n), s = {
            __scopeToolbar: e.__scopeToolbar
        };
        return (0, l.jsx)(kn, {
            asChild: !0,
            ...s,
            children: (0, l.jsx)(Id, { ...r,
                ...o,
                ref: t
            })
        })
    });
xs.displayName = kd;
var Jf = vs,
    ep = kn,
    tp = gs,
    np = xs,
    [Ot, op] = re("Tooltip", [me]),
    jt = me(),
    ws = "TooltipProvider",
    Fd = 700,
    un = "tooltip.open",
    [$d, Fn] = Ot(ws),
    Cs = e => {
        const {
            __scopeTooltip: t,
            delayDuration: n = Fd,
            skipDelayDuration: o = 300,
            disableHoverableContent: r = !1,
            children: s
        } = e, c = a.useRef(!0), i = a.useRef(!1), u = a.useRef(0);
        return a.useEffect(() => {
            const d = u.current;
            return () => window.clearTimeout(d)
        }, []), (0, l.jsx)($d, {
            scope: t,
            isOpenDelayedRef: c,
            delayDuration: n,
            onOpen: a.useCallback(() => {
                window.clearTimeout(u.current), c.current = !1
            }, []),
            onClose: a.useCallback(() => {
                window.clearTimeout(u.current), u.current = window.setTimeout(() => c.current = !0, o)
            }, [o]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: a.useCallback(d => {
                i.current = d
            }, []),
            disableHoverableContent: r,
            children: s
        })
    };
Cs.displayName = ws;
var Be = "Tooltip",
    [Gd, et] = Ot(Be),
    ys = e => {
        const {
            __scopeTooltip: t,
            children: n,
            open: o,
            defaultOpen: r,
            onOpenChange: s,
            disableHoverableContent: c,
            delayDuration: i
        } = e, u = Fn(Be, e.__scopeTooltip), d = jt(t), [p, f] = a.useState(null), h = se(), x = a.useRef(0), C = c ? ? u.disableHoverableContent, v = i ? ? u.delayDuration, m = a.useRef(!1), [w, g] = oe({
            prop: o,
            defaultProp: r ? ? !1,
            onChange: b => {
                b ? (u.onOpen(), document.dispatchEvent(new CustomEvent(un))) : u.onClose(), s ? .(b)
            },
            caller: Be
        }), y = a.useMemo(() => w ? m.current ? "delayed-open" : "instant-open" : "closed", [w]), E = a.useCallback(() => {
            window.clearTimeout(x.current), x.current = 0, m.current = !1, g(!0)
        }, [g]), T = a.useCallback(() => {
            window.clearTimeout(x.current), x.current = 0, g(!1)
        }, [g]), N = a.useCallback(() => {
            window.clearTimeout(x.current), x.current = window.setTimeout(() => {
                m.current = !0, g(!0), x.current = 0
            }, v)
        }, [v, g]);
        return a.useEffect(() => () => {
            x.current && (window.clearTimeout(x.current), x.current = 0)
        }, []), (0, l.jsx)(He, { ...d,
            children: (0, l.jsx)(Gd, {
                scope: t,
                contentId: h,
                open: w,
                stateAttribute: y,
                trigger: p,
                onTriggerChange: f,
                onTriggerEnter: a.useCallback(() => {
                    u.isOpenDelayedRef.current ? N() : E()
                }, [u.isOpenDelayedRef, N, E]),
                onTriggerLeave: a.useCallback(() => {
                    C ? T() : (window.clearTimeout(x.current), x.current = 0)
                }, [T, C]),
                onOpen: E,
                onClose: T,
                disableHoverableContent: C,
                children: n
            })
        })
    };
ys.displayName = Be;
var dn = "TooltipTrigger",
    Ss = a.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...o
        } = e, r = et(dn, n), s = Fn(dn, n), c = jt(n), i = a.useRef(null), u = A(t, i, r.onTriggerChange), d = a.useRef(!1), p = a.useRef(!1), f = a.useCallback(() => d.current = !1, []);
        return a.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), (0, l.jsx)(Ye, {
            asChild: !0,
            ...c,
            children: (0, l.jsx)(R.button, {
                "aria-describedby": r.open ? r.contentId : void 0,
                "data-state": r.stateAttribute,
                ...o,
                ref: u,
                onPointerMove: S(e.onPointerMove, h => {
                    h.pointerType !== "touch" && !p.current && !s.isPointerInTransitRef.current && (r.onTriggerEnter(), p.current = !0)
                }),
                onPointerLeave: S(e.onPointerLeave, () => {
                    r.onTriggerLeave(), p.current = !1
                }),
                onPointerDown: S(e.onPointerDown, () => {
                    r.open && r.onClose(), d.current = !0, document.addEventListener("pointerup", f, {
                        once: !0
                    })
                }),
                onFocus: S(e.onFocus, () => {
                    d.current || r.onOpen()
                }),
                onBlur: S(e.onBlur, r.onClose),
                onClick: S(e.onClick, r.onClose)
            })
        })
    });
Ss.displayName = dn;
var $n = "TooltipPortal",
    [Bd, Kd] = Ot($n, {
        forceMount: void 0
    }),
    Ud = e => {
        const {
            __scopeTooltip: t,
            forceMount: n,
            children: o,
            container: r
        } = e, s = et($n, t);
        return (0, l.jsx)(Bd, {
            scope: t,
            forceMount: n,
            children: (0, l.jsx)(ie, {
                present: n || s.open,
                children: (0, l.jsx)(Pe, {
                    asChild: !0,
                    container: r,
                    children: o
                })
            })
        })
    };
Ud.displayName = $n;
var Ne = "TooltipContent",
    Es = a.forwardRef((e, t) => {
        const n = Kd(Ne, e.__scopeTooltip),
            {
                forceMount: o = n.forceMount,
                side: r = "top",
                ...s
            } = e,
            c = et(Ne, e.__scopeTooltip);
        return (0, l.jsx)(ie, {
            present: o || c.open,
            children: c.disableHoverableContent ? (0, l.jsx)(bs, {
                side: r,
                ...s,
                ref: t
            }) : (0, l.jsx)(Vd, {
                side: r,
                ...s,
                ref: t
            })
        })
    }),
    Vd = a.forwardRef((e, t) => {
        const n = et(Ne, e.__scopeTooltip),
            o = Fn(Ne, e.__scopeTooltip),
            r = a.useRef(null),
            s = A(t, r),
            [c, i] = a.useState(null),
            {
                trigger: u,
                onClose: d
            } = n,
            p = r.current,
            {
                onPointerInTransitChange: f
            } = o,
            h = a.useCallback(() => {
                i(null), f(!1)
            }, [f]),
            x = a.useCallback((C, v) => {
                const m = C.currentTarget,
                    w = {
                        x: C.clientX,
                        y: C.clientY
                    },
                    g = Xd(w, zd(w, m.getBoundingClientRect())),
                    y = qd(v.getBoundingClientRect()),
                    E = Qd([...g, ...y]);
                i(E), f(!0)
            }, [f]);
        return a.useEffect(() => () => h(), [h]), a.useEffect(() => {
            if (u && p) {
                const C = m => x(m, p),
                    v = m => x(m, u);
                return u.addEventListener("pointerleave", C), p.addEventListener("pointerleave", v), () => {
                    u.removeEventListener("pointerleave", C), p.removeEventListener("pointerleave", v)
                }
            }
        }, [u, p, x, h]), a.useEffect(() => {
            if (c) {
                const C = v => {
                    const m = v.target,
                        w = {
                            x: v.clientX,
                            y: v.clientY
                        },
                        g = u ? .contains(m) || p ? .contains(m),
                        y = !Zd(w, c);
                    g ? h() : y && (h(), d())
                };
                return document.addEventListener("pointermove", C), () => document.removeEventListener("pointermove", C)
            }
        }, [u, p, c, d, h]), (0, l.jsx)(bs, { ...e,
            ref: s
        })
    }),
    [Wd, Hd] = Ot(Be, {
        isInside: !1
    }),
    Yd = Si("TooltipContent"),
    bs = a.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: o,
            "aria-label": r,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            ...i
        } = e, u = et(Ne, n), d = jt(n), {
            onClose: p
        } = u;
        return a.useEffect(() => (document.addEventListener(un, p), () => document.removeEventListener(un, p)), [p]), a.useEffect(() => {
            if (u.trigger) {
                const f = h => {
                    h.target ? .contains(u.trigger) && p()
                };
                return window.addEventListener("scroll", f, {
                    capture: !0
                }), () => window.removeEventListener("scroll", f, {
                    capture: !0
                })
            }
        }, [u.trigger, p]), (0, l.jsx)(be, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: f => f.preventDefault(),
            onDismiss: p,
            children: (0, l.jsxs)(St, {
                "data-state": u.stateAttribute,
                ...d,
                ...i,
                ref: t,
                style: { ...i.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [(0, l.jsx)(Yd, {
                    children: o
                }), (0, l.jsx)(Wd, {
                    scope: n,
                    isInside: !0,
                    children: (0, l.jsx)(Ti, {
                        id: u.contentId,
                        role: "tooltip",
                        children: r || o
                    })
                })]
            })
        })
    });
Es.displayName = Ne;
var Ps = "TooltipArrow",
    Rs = a.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...o
        } = e, r = jt(n);
        return Hd(Ps, n).isInside ? null : (0, l.jsx)(Et, { ...r,
            ...o,
            ref: t
        })
    });
Rs.displayName = Ps;

function zd(e, t) {
    const n = Math.abs(t.top - e.y),
        o = Math.abs(t.bottom - e.y),
        r = Math.abs(t.right - e.x),
        s = Math.abs(t.left - e.x);
    switch (Math.min(n, o, r, s)) {
        case s:
            return "left";
        case r:
            return "right";
        case n:
            return "top";
        case o:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function Xd(e, t, n = 5) {
    const o = [];
    switch (t) {
        case "top":
            o.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            o.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            o.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            o.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            })
    }
    return o
}

function qd(e) {
    const {
        top: t,
        right: n,
        bottom: o,
        left: r
    } = e;
    return [{
        x: r,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: o
    }, {
        x: r,
        y: o
    }]
}

function Zd(e, t) {
    const {
        x: n,
        y: o
    } = e;
    let r = !1;
    for (let s = 0, c = t.length - 1; s < t.length; c = s++) {
        const i = t[s],
            u = t[c],
            d = i.x,
            p = i.y,
            f = u.x,
            h = u.y;
        p > o != h > o && n < (f - d) * (o - p) / (h - p) + d && (r = !r)
    }
    return r
}

function Qd(e) {
    const t = e.slice();
    return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Jd(t)
}

function Jd(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let o = 0; o < e.length; o++) {
        const r = e[o];
        for (; t.length >= 2;) {
            const s = t[t.length - 1],
                c = t[t.length - 2];
            if ((s.x - c.x) * (r.y - c.y) >= (s.y - c.y) * (r.x - c.x)) t.pop();
            else break
        }
        t.push(r)
    }
    t.pop();
    const n = [];
    for (let o = e.length - 1; o >= 0; o--) {
        const r = e[o];
        for (; n.length >= 2;) {
            const s = n[n.length - 1],
                c = n[n.length - 2];
            if ((s.x - c.x) * (r.y - c.y) >= (s.y - c.y) * (r.x - c.x)) n.pop();
            else break
        }
        n.push(r)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var rp = Cs,
    ap = ys,
    sp = Ss,
    ip = Es,
    cp = Rs;
export {
    rf as $, _f as A, Tl as B, Lf as C, Tf as D, Of as E, If as F, mf as G, Ml as H, Ef as I, pc as J, hf as K, Cf as L, Sf as M, Mf as N, Pf as O, Nf as P, pf as Q, xf as R, Ff as S, Df as T, wf as U, Nl as V, gf as W, uf as X, df as Y, lf as Z, Uf as _, sp as a, Kf as b, tp as c, Zf as d, Ke as et, Xf as f, dd as g, zf as h, ap as i, bf as j, Rf as k, np as l, Yf as m, ip as n, ep as o, Hf as p, ff as q, rp as r, Jf as s, cp as t, qf as u, Bf as v, jf as w, $f as x, Vf as y, Gr as z
};
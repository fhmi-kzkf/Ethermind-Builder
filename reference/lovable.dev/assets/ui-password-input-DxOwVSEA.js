import {
    o as F
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    CR as i,
    JM as k,
    SN as z,
    fP as E,
    hR as S
} from "./app-shared-6CLVfi8w.js";
import {
    i as L,
    r as M
} from "./vendor-react-Fx2PtaaM.js";
import {
    t as C
} from "./vendor-util-bDkZRKmn.js";
import {
    a as V,
    c as A,
    i as G,
    o as R,
    r as T,
    s as B
} from "./vendor-base-ui-field-BdT_EZJM.js";
import {
    _ as $,
    v as D
} from "./ui-alert-C_SwFFEV.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new e.Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "3fdf0fa7-e7fd-4c62-ae86-d120c2433f70", e._sentryDebugIdIdentifier = "sentry-dbid-3fdf0fa7-e7fd-4c62-ae86-d120c2433f70")
    })()
} catch {}
var l = F(L(), 1),
    t = M(),
    Z = e => (0, t.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, t.jsx)("path", {
            d: "M11.9998 4.5C16.0466 4.5 20.2056 6.6746 21.5486 11.1357C21.7176 11.6972 21.7176 12.3028 21.5486 12.8643C20.2056 17.3254 16.0466 19.5 11.9998 19.5C7.95303 19.5 3.79396 17.3254 2.45097 12.8643C2.28197 12.3028 2.28197 11.6972 2.45097 11.1357C3.794 6.67462 7.95305 4.50005 11.9998 4.5ZM11.9998 6C8.44036 6.00005 4.99371 7.89361 3.88749 11.5684C3.80337 11.8478 3.80337 12.1522 3.88749 12.4316C4.99368 16.1064 8.44032 18 11.9998 18C15.5593 18 19.0069 16.1065 20.1131 12.4316C20.1972 12.1522 20.1972 11.8478 20.1131 11.5684C19.0069 7.89343 15.5593 6 11.9998 6ZM14.2498 12C14.2498 10.7574 13.2424 9.75 11.9998 9.75C10.7572 9.75007 9.7498 10.7574 9.7498 12C9.7498 13.2426 10.7572 14.2499 11.9998 14.25C13.2424 14.25 14.2498 13.2426 14.2498 12ZM15.7498 12C15.7498 14.0711 14.0709 15.75 11.9998 15.75C9.92879 15.7499 8.2498 14.071 8.2498 12C8.2498 9.92898 9.92879 8.25007 11.9998 8.25C14.0709 8.25 15.7498 9.92893 15.7498 12Z",
            fill: "currentColor"
        })
    }),
    H = E(Z, "EyeIcon"),
    _ = l.createContext({
        disabled: !1,
        error: !1
    });

function y() {
    return l.useContext(_)
}

function U({
    className: e,
    "data-disabled": s,
    disabled: r = !1,
    error: o = !1,
    ...n
}) {
    const a = r || s === !0 || s === "true",
        d = l.useMemo(() => ({
            disabled: a,
            error: o
        }), [a, o]);
    return (0, t.jsx)(_.Provider, {
        value: d,
        children: (0, t.jsx)("div", { ...n,
            "data-slot": "input-group",
            "data-disabled": a || void 0,
            "aria-disabled": a || void 0,
            role: "group",
            className: i("input-field group/input-group rounded-2 relative flex w-full items-center gap-1.5 px-2.5 py-1.5", "h-8", "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50", o && "input-error", e)
        })
    })
}
var q = C("flex shrink-0 cursor-text select-none items-center justify-center text-sm text-tertiary-pulse max-md:text-base group-data-[disabled=true]/input-group:cursor-not-allowed group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded [&>svg:not([class*='size-'])]:size-4", {
        variants: {
            align: {
                "inline-start": "order-first",
                "inline-end": "order-last"
            }
        },
        defaultVariants: {
            align: "inline-start"
        }
    }),
    O = "a[href], button, input, select, textarea, [data-button], [role='button'], [role='link'], [role='switch'], [role='checkbox'], [role='radio'], [contenteditable='true'], [tabindex]:not([tabindex='-1'])";

function fe({
    className: e,
    align: s = "inline-start",
    onClick: r,
    ...o
}) {
    const n = y();
    return (0, t.jsx)("div", {
        "data-slot": "input-group-addon",
        "data-align": s,
        className: i(q({
            align: s
        }), e),
        onClick: a => {
            n.disabled || (r ? .(a), !(a.defaultPrevented || a.target.closest(O)) && a.currentTarget.parentElement ? .querySelector("[data-slot=input-group-control]") ? .focus())
        },
        ...o
    })
}

function me({
    className: e,
    ...s
}) {
    return (0, t.jsx)("span", {
        className: i("text-tertiary-pulse flex items-center gap-2 text-sm max-md:text-base [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4", e),
        ...s
    })
}

function J({
    "aria-invalid": e,
    className: s,
    disabled: r,
    ...o
}) {
    const n = y();
    return (0, t.jsx)("input", {
        "data-slot": "input-group-control",
        spellCheck: !1,
        className: i("text-primary-pulse placeholder:text-tertiary-pulse min-w-0 flex-1 bg-transparent px-0.5 text-sm outline-hidden disabled:cursor-not-allowed max-md:text-base", s),
        disabled: n.disabled || r,
        "aria-invalid": n.error ? !0 : e,
        ...o
    })
}
var W = C("flex shrink-0 items-center gap-2 text-sm shadow-none", {
        variants: {
            size: {
                xs: "h-6 gap-1 rounded px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
                sm: "h-8 gap-1.5 rounded-1.5 px-2.5 has-[>svg]:px-2.5",
                "icon-xs": "size-6 rounded p-0 has-[>svg]:p-0",
                "icon-sm": "size-8 rounded-1.5 p-0 has-[>svg]:p-0"
            }
        },
        defaultVariants: {
            size: "xs"
        }
    }),
    K = {
        xs: "xs",
        sm: "sm",
        "icon-xs": "xs",
        "icon-sm": "sm"
    };

function Q({
    className: e,
    disabled: s,
    type: r = "button",
    variant: o = "ghost",
    size: n = "xs",
    ...a
}) {
    const d = y();
    return (0, t.jsx)(k, {
        type: r,
        variant: o,
        size: K[n ? ? "xs"] ? ? "xs",
        disabled: d.disabled || s,
        className: i(W({
            size: n
        }), e),
        ...a
    })
}

function ge({
    render: e,
    ...s
}) {
    const r = (0, l.isValidElement)(e) ? e.props.id : void 0;
    return (0, t.jsx)(G, {
        id: r,
        ...s,
        render: e
    })
}

function he(e) {
    return (0, t.jsx)(T, { ...e
    })
}
var X = C("group/field flex w-full", {
    variants: {
        orientation: {
            vertical: "flex-col gap-2",
            horizontal: "flex-row items-center gap-3 has-[[data-slot=field-content]]:items-start"
        }
    },
    defaultVariants: {
        orientation: "vertical"
    }
});

function Y({
    orientation: e,
    className: s,
    ...r
}) {
    return (0, t.jsx)(A, {
        "data-slot": "field",
        "data-orientation": e ? ? "vertical",
        className: i(X({
            orientation: e
        }), s),
        ...r
    })
}

function ee({
    className: e,
    ...s
}) {
    return (0, t.jsx)(B, {
        "data-slot": "field-label",
        className: i("flex w-fit flex-wrap items-center gap-1.5 text-sm leading-none font-medium select-none", "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50", e),
        ...s
    })
}

function te({
    className: e,
    ...s
}) {
    return (0, t.jsx)(V, {
        "data-slot": "field-description",
        className: i("text-tertiary-pulse text-sm leading-normal", e),
        ...s
    })
}

function se({
    className: e,
    ...s
}) {
    return (0, t.jsx)(R, {
        role: "alert",
        "data-slot": "field-error",
        className: i("text-destructive-pulse text-sm", e),
        ...s
    })
}

function ae({
    className: e,
    ...s
}) {
    return (0, t.jsx)("div", {
        "data-slot": "field-content",
        className: i("flex flex-1 flex-col gap-1", e),
        ...s
    })
}

function re({
    label: e,
    children: s,
    description: r,
    error: o,
    invalid: n = !!o,
    orientation: a = "vertical",
    optionalHint: d,
    labelAccessory: g,
    disabled: p,
    className: v,
    style: c
}) {
    const f = (0, l.useId)(),
        u = s.props.id ? ? f,
        h = r ? `${u}-description` : void 0,
        m = o ? `${u}-error` : void 0,
        b = z(s.props["aria-describedby"], h, m),
        x = S({
            render: (0, l.cloneElement)(s, {
                "aria-describedby": b
            }),
            props: {
                id: u,
                "aria-invalid": n || void 0,
                disabled: p
            }
        }),
        I = (0, t.jsxs)(ee, {
            htmlFor: u,
            children: [e, d && (0, t.jsx)("span", {
                className: "text-tertiary-pulse text-xs font-normal",
                children: d
            })]
        }),
        j = g ? (0, t.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [I, g]
        }) : I,
        N = r && (0, t.jsx)(te, {
            id: h,
            children: r
        }),
        P = o && (0, t.jsx)(se, {
            id: m,
            match: !0,
            children: o
        });
    return (0, t.jsx)(Y, {
        invalid: n,
        disabled: p,
        orientation: a,
        className: v,
        style: c,
        children: a === "horizontal" ? (0, t.jsxs)(t.Fragment, {
            children: [x, (0, t.jsxs)(ae, {
                children: [j, N, P]
            })]
        }) : (0, t.jsxs)(t.Fragment, {
            children: [j, x, N, P]
        })
    })
}
var oe = e => (0, t.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, t.jsx)("path", {
            d: "M11.2502 17.5003V15.5003C11.2502 15.4916 11.2509 15.4825 11.2512 15.4739C9.98094 15.3897 8.71749 15.0915 7.55101 14.5745L6.67113 16.3352C6.48589 16.7057 6.03478 16.8564 5.6643 16.6712C5.29395 16.4859 5.14412 16.0347 5.32933 15.6643L6.22777 13.8655C4.50665 12.7642 3.12499 11.1013 2.45141 8.86355C2.33216 8.46698 2.5568 8.04932 2.95336 7.92995C3.34993 7.81071 3.76758 8.03535 3.88695 8.43191C4.9932 12.1066 8.44076 14.0003 12.0002 14.0003C15.5596 14.0002 19.0062 12.1064 20.1125 8.43191C20.2319 8.03531 20.6505 7.81063 21.0471 7.92995C21.4437 8.04932 21.6683 8.46699 21.5491 8.86355C20.8754 11.1017 19.4923 12.7633 17.7707 13.8645L18.6711 15.6643C18.8564 16.0348 18.7057 16.4859 18.3352 16.6712C17.9648 16.856 17.5145 16.7055 17.3293 16.3352L16.4485 14.5745C15.2819 15.0914 14.0186 15.3898 12.7483 15.4739C12.7486 15.4825 12.7502 15.4916 12.7502 15.5003V17.5003C12.75 17.9143 12.4143 18.2502 12.0002 18.2503C11.5862 18.2503 11.2505 17.9143 11.2502 17.5003Z",
            fill: "currentColor"
        })
    }),
    ne = E(oe, "EyeClosedIcon");

function w({
    className: e,
    inputClassName: s,
    toggleClassName: r,
    disabled: o,
    error: n,
    showToggle: a = !0,
    showPasswordLabel: d = "Show password",
    hidePasswordLabel: g = "Hide password",
    passwordManagerIgnore: p = !1,
    ref: v,
    ...c
}) {
    const [f, u] = l.useState(!1), h = f ? g : d;
    l.useEffect(() => {
        a || u(!1)
    }, [a]);
    const m = "text-tertiary-pulse group-hover/password-toggle:text-primary-pulse",
        b = p ? {
            "data-form-type": "other",
            "data-1p-ignore": !0,
            "data-lpignore": "true",
            "data-bwignore": "true",
            "data-protonpass-ignore": !0
        } : {};
    return (0, t.jsxs)(U, {
        error: n,
        disabled: o,
        className: i(a && "pe-1", e),
        children: [(0, t.jsx)(J, {
            ref: v,
            ...c,
            type: a && f ? "text" : "password",
            disabled: o,
            className: s,
            autoComplete: p ? c.autoComplete ? ? "one-time-code" : c.autoComplete,
            ...b
        }), a && (0, t.jsx)(Q, {
            variant: "ghost",
            size: "icon-xs",
            type: "button",
            disabled: o,
            "aria-label": h,
            className: i("group/password-toggle", r),
            onClick: () => u(x => !x),
            children: f ? (0, t.jsx)(H, {
                size: "small",
                className: m
            }) : (0, t.jsx)(ne, {
                size: "small",
                className: m
            })
        })]
    })
}
var xe = $({
    family: "password-input",
    addedAt: "pre-tracking",
    hero: D({
        render: () => (0, t.jsx)(w, {
            "aria-label": "Password",
            defaultValue: "correct-horse-battery"
        }),
        preview: e => (0, t.jsx)("div", {
            className: "w-64",
            children: e
        })
    }),
    whenToUse: "Use for any password or secret value — login and signup passwords, API keys, connector credentials, workspace secrets. It composes `InputGroup` with a show/hide toggle, so the call site supplies only the value wiring. Set `passwordManagerIgnore` on secrets that are not real passwords, so password managers leave the field alone. `className` styles the outer wrapper, `inputClassName` the inner input, and `toggleClassName` the visibility toggle, such as resizing it inside taller fields.",
    whenNotToUse: "Plain text values belong to `input`. One-time verification codes belong to `otp-code-input`. A field with other inline adornments — icons, unit text, extra buttons — belongs to `input-group`.",
    a11y: 'The input renders without a built-in label — every call site must name it, through a `Field` label or `aria-label` on the control. The toggle names itself — "Show password" or "Hide password" by default — and carries no `aria-pressed`, so the name states the action and the state is never announced twice. Pass `showPasswordLabel` and `hidePasswordLabel` with translated strings on localized surfaces. The toggle renders as `type="button"`, so activating it never submits the enclosing form. `error` sets `aria-invalid="true"` on the input alongside the destructive border.',
    examples: [{
        title: "Login password",
        description: '`Field` supplies the label, and `autoComplete="current-password"` lets the browser fill the saved credential.',
        render: () => (0, t.jsx)(re, {
            label: "Password",
            children: (0, t.jsx)(w, {
                autoComplete: "current-password",
                placeholder: "Enter password"
            })
        })
    }, {
        title: "Secret value without password managers",
        description: "`passwordManagerIgnore` marks the field as a non-password secret, and the toggle labels name what is revealed.",
        render: () => (0, t.jsx)(w, {
            "aria-label": "Secret value",
            placeholder: "secret_value",
            passwordManagerIgnore: !0,
            showPasswordLabel: "Show secret",
            hidePasswordLabel: "Hide secret"
        })
    }, {
        title: "Controlled signup password with validation",
        description: 'A controlled value drives the `error` flag, and `autoComplete="new-password"` offers a generated password.',
        render: () => {
            const [e, s] = (0, l.useState)("");
            return (0, t.jsx)(w, {
                "aria-label": "New password",
                value: e,
                onChange: r => s(r.target.value),
                autoComplete: "new-password",
                error: e.length > 0 && e.length < 8
            })
        }
    }],
    antiPatterns: [{
        dont: "Hand-rolled password fields composed from `InputGroup`, an eye icon, and visibility state in the consumer.",
        instead: "`PasswordInput` — it owns the toggle, its accessible names, and the `text`/`password` type switch.",
        why: "Each copy re-implements the reveal behavior, and the copies drift."
    }, {
        dont: '`autoComplete="off"` to keep password managers away from an API-key field.',
        instead: '`passwordManagerIgnore` — it sets the manager ignore attributes and defaults `autoComplete` to `"one-time-code"`.',
        why: 'Browsers ignore `"off"` on password fields, so managers still offer to fill and save.'
    }, {
        dont: "Hardcoded English toggle labels on localized surfaces.",
        instead: "`showPasswordLabel` and `hidePasswordLabel` from the consumer's catalog — `m.*()` in `web/`.",
        why: "Pulse has no i18n, so a literal ships unchanged to every locale."
    }],
    related: ["input", "input-group", "field", "search-input", "input-otp"],
    keywords: ["PasswordInput", "password-input", "PasswordField", "Input.Password", "password field", "show password toggle", "visibility toggle", "reveal password", "secret input", "API key field", "masked input", "type=password"]
});
export {
    H as _, ae as a, se as c, Y as d, Q as f, me as g, J as h, re as i, he as l, fe as m, w as n, ge as o, U as p, ne as r, te as s, xe as t, ee as u
};
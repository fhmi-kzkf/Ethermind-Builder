import {
    $u as S,
    BA as M,
    CR as n,
    JM as p,
    SO as A,
    _O as P,
    fO as T,
    fP as g,
    gO as N,
    lO as I,
    sP as _
} from "./app-shared-6CLVfi8w.js";
import {
    r as B
} from "./vendor-react-Fx2PtaaM.js";
import {
    _ as D
} from "./ui-alert-C_SwFFEV.js";
try {
    (function() {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new a.Error().stack;
        e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "02a254a8-a8ec-475d-81b1-1f0ae18cfa42", a._sentryDebugIdIdentifier = "sentry-dbid-02a254a8-a8ec-475d-81b1-1f0ae18cfa42")
    })()
} catch {}
var t = B();

function H(a) {
    const e = [];
    for (const s of a) s && (s.type === "separator" ? e.length > 0 && e.at(-1) ? .type !== "separator" && e.push(s) : (s.href === void 0 || S(s.href)) && e.push(s));
    return e.at(-1) ? .type === "separator" && e.pop(), e
}

function L({
    actions: a
}) {
    return a.map((e, s) => e.type === "separator" ? (0, t.jsx)(P, {}, e.key ? ? `separator-${s}`) : (0, t.jsxs)(I, {
        label: e.label,
        variant: e.variant,
        disabled: e.disabled,
        hints: e.hints,
        tooltipConfig: e.tooltipConfig,
        shortcut: e.shortcut,
        onClick: e.onClick,
        "data-selected": e.selected ? "" : void 0,
        className: n(e.selected && "bg-[var(--glow-neutral-pressed)]", e.description && "h-auto py-2"),
        render: e.href === void 0 ? void 0 : (0, t.jsx)("a", {
            href: e.href,
            target: e.target,
            rel: e.target === "_blank" ? "noopener noreferrer" : void 0,
            "aria-label": e.label
        }),
        children: [e.slotLeading ? ? (e.icon && (0, t.jsx)(_, {
            icon: e.icon
        })), (0, t.jsxs)("span", {
            className: "flex min-w-0 flex-1 flex-col gap-0.5",
            children: [(0, t.jsx)("span", {
                children: e.label
            }), e.description && (0, t.jsx)("span", {
                className: "text-tertiary-pulse text-xs font-normal",
                children: e.description
            })]
        }), e.slotTrailing]
    }, e.key ? ? e.label))
}
var O = a => (0, t.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...a,
        children: (0, t.jsx)("path", {
            d: "M11.25 20V12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H11.25V4C11.25 3.58579 11.5858 3.25 12 3.25C12.4142 3.25 12.75 3.58579 12.75 4V11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H12.75V20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20Z",
            fill: "currentColor"
        })
    }),
    q = g(O, "PlusIcon"),
    R = {
        default: "light-dark(oklch(0 0 0 / 0.12), oklch(1 0 0 / 0.12))",
        accent: "light-dark(oklch(1 0 0 / 0.12), oklch(1 0 0 / 0.16))",
        destructive: "light-dark(oklch(1 0 0 / 0.12), oklch(1 0 0 / 0.16))",
        inverse: "light-dark(oklch(1 0 0 / 0.1), oklch(0 0 0 / 0.1))"
    };

function V({
    className: a,
    ...e
}) {
    return (0, t.jsx)(M, { ...e,
        className: n("transition-transform duration-150 ease-out motion-reduce:transition-none", "in-[[data-popup-open][aria-expanded=true]]:rotate-180", a)
    })
}

function o({
    variant: a = "default",
    size: e = "default",
    rounded: s,
    disabled: i,
    fullWidth: l,
    trigger: r,
    actions: b,
    slotProps: d,
    className: m,
    ...f
}) {
    const c = r.disabled ? ? i,
        {
            group: v,
            menu: x,
            menuRoot: y,
            ...w
        } = d ? ? {},
        {
            className: C,
            style: k,
            ...j
        } = v ? ? {};
    return (0, t.jsxs)("div", { ...j,
        "data-slot": "split-button",
        "data-rounded": s ? "" : void 0,
        role: "group",
        style: { ...k,
            "--_seam-color": R[a]
        },
        className: n("isolate flex w-fit items-stretch", l && "w-full", C),
        children: [(0, t.jsx)(p, { ...f,
            "data-slot": "split-button-action",
            variant: a,
            size: e,
            rounded: s,
            disabled: i,
            slotProps: d ? w : void 0,
            className: n("min-w-0 focus-visible:z-10", l && "flex-1", m)
        }), (0, t.jsxs)(N, { ...y,
            children: [(0, t.jsx)(A, {
                disabled: c,
                render: (0, t.jsx)(p, { ...r,
                    "data-slot": "split-button-trigger",
                    variant: a,
                    size: e,
                    rounded: s,
                    disabled: c,
                    square: !0,
                    icon: r.icon ? ? V,
                    className: n("flex-none focus-visible:z-10", r.className)
                })
            }), (0, t.jsx)(T, {
                align: "end",
                ...x,
                children: (0, t.jsx)(L, {
                    actions: H(b)
                })
            })]
        })]
    })
}
var E = a => (0, t.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...a,
        children: (0, t.jsx)("path", {
            d: "M12.25 8.5C12.25 6.42893 10.5711 4.75 8.5 4.75C6.42893 4.75 4.75 6.42893 4.75 8.5V19.25H15.5C17.5711 19.25 19.25 17.5711 19.25 15.5C19.25 13.4289 17.5711 11.75 15.5 11.75H13C12.5858 11.75 12.25 11.4142 12.25 11V8.5ZM13.75 10.25H15.5C18.3995 10.25 20.75 12.6005 20.75 15.5C20.75 18.3995 18.3995 20.75 15.5 20.75H4C3.58579 20.75 3.25 20.4142 3.25 20V8.5C3.25 5.6005 5.6005 3.25 8.5 3.25C11.3995 3.25 13.75 5.6005 13.75 8.5V10.25Z",
            fill: "currentColor"
        })
    }),
    u = g(E, "LovableHeartIcon"),
    h = ["default", "accent", "inverse", "destructive"],
    z = [{
        label: "Default"
    }, {
        label: "Hover",
        preview: "hover"
    }, {
        label: "Pressed",
        preview: "pressed"
    }, {
        label: "Icon + icon",
        icon: u
    }, {
        label: "Pill",
        rounded: !0
    }, {
        label: "Pill icon + icon",
        rounded: !0,
        icon: u
    }];

function G() {
    return (0, t.jsx)("div", {
        className: "w-full self-start overflow-x-auto",
        children: (0, t.jsxs)("table", {
            className: "border-separate border-spacing-x-8 border-spacing-y-5",
            children: [(0, t.jsx)("caption", {
                className: "sr-only",
                children: "Split button states by variant"
            }), (0, t.jsx)("thead", {
                children: (0, t.jsxs)("tr", {
                    children: [(0, t.jsx)("th", {
                        scope: "col",
                        children: (0, t.jsx)("span", {
                            className: "sr-only",
                            children: "State"
                        })
                    }), h.map(a => (0, t.jsx)("th", {
                        scope: "col",
                        className: "text-tertiary-pulse text-xs font-normal",
                        children: a
                    }, a))]
                })
            }), (0, t.jsx)("tbody", {
                children: z.map(a => (0, t.jsxs)("tr", {
                    children: [(0, t.jsx)("th", {
                        scope: "row",
                        className: "text-tertiary-pulse pe-2 text-end text-xs font-normal whitespace-nowrap",
                        children: a.label
                    }), h.map(e => (0, t.jsx)("td", {
                        className: "text-center",
                        children: (0, t.jsx)(o, {
                            variant: e,
                            rounded: a.rounded,
                            icon: a.icon,
                            "aria-label": a.icon ? "Like" : void 0,
                            trigger: {
                                "aria-label": "More",
                                "data-preview-state": a.preview
                            },
                            slotProps: {
                                group: {
                                    "aria-label": "Actions"
                                }
                            },
                            actions: [{
                                label: "Save as copy",
                                onClick: () => {}
                            }],
                            children: a.icon ? void 0 : "Label"
                        })
                    }, e))]
                }, a.label))
            })]
        })
    })
}
var $ = D({
    family: "split-button",
    addedAt: "pre-tracking",
    hero: () => (0, t.jsx)(o, {
        variant: "accent",
        trigger: {
            "aria-label": "More save options"
        },
        slotProps: {
            group: {
                "aria-label": "Save actions"
            }
        },
        actions: [{
            label: "Save as copy",
            onClick: () => {}
        }, {
            label: "Save as template",
            onClick: () => {}
        }],
        children: "Save"
    }),
    playground: {
        variants: () => (0, t.jsx)(G, {}),
        defaults: {
            variant: "accent",
            children: "Save",
            trigger: {
                "aria-label": "More save options"
            },
            actions: [{
                label: "Save as copy",
                onClick: () => {}
            }]
        }
    },
    whenToUse: "Use for one primary action with a menu of alternatives: save / save as, allow / always allow, sign in with the last provider / pick another. Each segment stays a real button with its own label and tab stop. The pattern owns both segments and the menu panel.",
    whenNotToUse: "Two equal actions (previous / next, cancel / confirm) belong to two `button`s side by side. Options with a pressed state belong to `toggle-group`. A single action with no alternatives belongs to `button`.",
    a11y: "The action needs visible text or an accessible name for an icon-only action. The trigger requires an accessible name. When the pairing is unclear, name the group through `slotProps.group`. The trigger reports expanded state through the menu. Button handles disabled hints and loading independently for each segment.",
    keyboard: [{
        keys: ["Tab"],
        description: "Moves focus to the next segment."
    }, {
        keys: ["Shift+Tab"],
        description: "Moves focus to the previous segment."
    }, {
        keys: ["Enter", "Space"],
        description: "Activates the focused segment. The trigger opens its menu."
    }, {
        keys: ["ArrowRight", "ArrowLeft"],
        description: "Leaves segment focus unchanged. Menu navigation follows the menu keyboard contract."
    }, {
        keys: ["Escape"],
        description: "Closes the menu and returns focus to its trigger."
    }],
    examples: [{
        title: "Text + trigger",
        description: "Pass primary Button props directly. Pass typed actions without assembling menu rows, a panel, or a trigger.",
        render: () => (0, t.jsx)(o, {
            variant: "accent",
            hints: {
                idle: "Save changes",
                shortcut: "mod S"
            },
            trigger: {
                "aria-label": "More save options"
            },
            actions: [{
                label: "Save as copy",
                onClick: () => {}
            }, {
                label: "Save as template",
                onClick: () => {}
            }],
            children: "Save"
        })
    }, {
        title: "Icon + trigger",
        description: "An icon-only action needs an accessible name. Both segments remain square.",
        render: () => (0, t.jsx)(o, {
            icon: q,
            "aria-label": "Add file",
            trigger: {
                "aria-label": "Add other"
            },
            actions: [{
                label: "Add folder",
                onClick: () => {}
            }, {
                label: "Import",
                onClick: () => {}
            }]
        })
    }, {
        title: "Pill",
        description: "Rounded outer corners preserve the square seam and trigger width.",
        render: () => (0, t.jsx)(o, {
            rounded: !0,
            size: "sm",
            trigger: {
                "aria-label": "More draft actions"
            },
            actions: [{
                label: "Accept draft",
                onClick: () => {}
            }, {
                label: "Sync with base",
                onClick: () => {}
            }],
            children: "Accept draft"
        })
    }, {
        title: "Disabled action, live trigger",
        description: "The trigger overrides disabled state while the primary Button keeps its explanatory hint.",
        render: () => (0, t.jsx)(o, {
            disabled: !0,
            hints: {
                disabled: "Waiting for the tool to finish"
            },
            trigger: {
                "aria-label": "More approval options",
                disabled: !1
            },
            actions: [{
                label: "Allow once",
                onClick: () => {}
            }],
            children: "Always allow"
        })
    }, {
        title: "Loading action, live trigger",
        description: "Loading and tooltip configuration use Button props. Primary loading does not disable the alternatives trigger.",
        render: () => (0, t.jsx)(o, {
            loading: !0,
            loadingText: "Saving",
            hints: {
                loading: "Saving changes"
            },
            tooltipConfig: {
                tooltip: {
                    side: "bottom"
                }
            },
            trigger: {
                "aria-label": "More save options"
            },
            actions: [{
                label: "Save as copy",
                onClick: () => {}
            }],
            children: "Save"
        })
    }, {
        title: "Full width",
        description: "The action stretches and the trigger stays square.",
        render: () => (0, t.jsx)("div", {
            className: "w-64",
            children: (0, t.jsx)(o, {
                variant: "inverse",
                fullWidth: !0,
                trigger: {
                    "aria-label": "Choose another provider"
                },
                actions: [{
                    label: "Continue with Okta",
                    onClick: () => {}
                }],
                children: "Continue with Google"
            })
        })
    }],
    anatomy: [{
        name: "Primary action",
        required: !0,
        description: "Button configured by top-level props."
    }, {
        name: "Alternatives trigger",
        required: !0,
        description: "Icon-only Button that opens the menu."
    }, {
        name: "Menu",
        required: !0,
        description: "Pattern-owned menu panel rendering the typed actions."
    }],
    antiPatterns: [{
        dont: "Text on both segments: a previous / next pager or a cancel / confirm pair.",
        instead: "Two `button`s in a flex row."
    }, {
        dont: "Hand-rolled seams, corner overrides, or negative margins on adjacent buttons.",
        instead: "`SplitButton` owns the corners, seam, and lighting-layer clipping."
    }, {
        dont: "Selection styled onto the segments with consumer state.",
        instead: "`toggle-group` exposes pressed state and roving focus."
    }, {
        dont: "A custom glyph swapped in for the default chevron.",
        instead: "The chevron signals alternatives rather than a second action."
    }],
    propNotes: {
        variant: "Ghost, outline, link, and text lack a surface for the seam. The split supports only rim-bearing solids.",
        actions: "Shares MenuActionList from @lovable.dev/pulse/menu-actions with MoreActionsMenu. Actions support descriptions, icons, selection highlighting, idle/disabled hints, shortcuts, and native links. Falsy entries are omitted. Explicit separator entries group actions. Normalization removes orphan and repeated separators.",
        slotProps: "Primary ref, className, style, and DOM attributes target the action. Put group labels and layout classes in `slotProps.group`."
    },
    related: ["button", "toggle-group", "dropdown-menu"],
    keywords: ["SplitButton", "split-button", "split button", "ButtonGroup", "button group", "joined buttons", "action menu button"],
    status: "stable"
});
export {
    L as a, q as i, u as n, H as o, o as r, $ as t
};
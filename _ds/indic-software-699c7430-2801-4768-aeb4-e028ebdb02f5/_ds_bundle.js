/* @ds-bundle: {"namespace":"IndicSoftware","components":[{"name":"Button","sourcePath":"components/core/Button/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card/Card.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox/Checkbox.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog/Dialog.jsx"},{"name":"Header","sourcePath":"components/navigation/Header/Header.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input/Input.jsx"},{"name":"Motif","sourcePath":"components/brand/Motif/Motif.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag/Tag.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip/Tooltip.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark/Wordmark.jsx"}],"sourceHashes":{"components/core/Button/Button.jsx":"80367c01ff91","components/core/Button/Button.d.ts":"7d468a93957f","components/core/Button/Button.prompt.md":"4f50ce4f9390","components/core/Card/Card.jsx":"a791f1ec1b24","components/core/Card/Card.d.ts":"9a580ed257c4","components/core/Card/Card.prompt.md":"bafada3ea58e","components/forms/Checkbox/Checkbox.jsx":"42ceb308d9c1","components/forms/Checkbox/Checkbox.d.ts":"6a8021a8eaee","components/forms/Checkbox/Checkbox.prompt.md":"6d8a0e1d23b0","components/feedback/Dialog/Dialog.jsx":"99b2fe031e33","components/feedback/Dialog/Dialog.d.ts":"4f06bb3d8767","components/feedback/Dialog/Dialog.prompt.md":"8126d6e327ca","components/navigation/Header/Header.jsx":"beff7b2066ab","components/navigation/Header/Header.d.ts":"a84d134bf524","components/navigation/Header/Header.prompt.md":"776121b553b7","components/core/IconButton/IconButton.jsx":"dccb53473915","components/core/IconButton/IconButton.d.ts":"96390434863e","components/core/IconButton/IconButton.prompt.md":"6300309dd55c","components/forms/Input/Input.jsx":"054fa3948b0d","components/forms/Input/Input.d.ts":"627b7817367d","components/forms/Input/Input.prompt.md":"046a1d3a3f38","components/brand/Motif/Motif.jsx":"e3f3345b2867","components/brand/Motif/Motif.d.ts":"58d459830b63","components/brand/Motif/Motif.prompt.md":"a55aba86ee95","components/forms/Radio/Radio.jsx":"96c30015fbfa","components/forms/Radio/Radio.d.ts":"fe54b622b41a","components/forms/Radio/Radio.prompt.md":"688473886cab","components/forms/Select/Select.jsx":"c1ea7e0ea7c1","components/forms/Select/Select.d.ts":"b057ba4aef24","components/forms/Select/Select.prompt.md":"1a84353e853e","components/forms/Switch/Switch.jsx":"d9416a7e10d3","components/forms/Switch/Switch.d.ts":"c7d5a34bf5d0","components/forms/Switch/Switch.prompt.md":"1f1ad22e3645","components/navigation/Tabs/Tabs.jsx":"89d6e4d26da3","components/navigation/Tabs/Tabs.d.ts":"e55256440505","components/navigation/Tabs/Tabs.prompt.md":"91a4e4ae8409","components/core/Tag/Tag.jsx":"cad7d51ada90","components/core/Tag/Tag.d.ts":"6f58f6c2d7b0","components/core/Tag/Tag.prompt.md":"7626fc839ec1","components/feedback/Tooltip/Tooltip.jsx":"49734585f98e","components/feedback/Tooltip/Tooltip.d.ts":"24a4fbb5111c","components/feedback/Tooltip/Tooltip.prompt.md":"b6bbe2b16b1f","components/brand/Wordmark/Wordmark.jsx":"2264146e0b2c","components/brand/Wordmark/Wordmark.d.ts":"d9e76153cf6b","components/brand/Wordmark/Wordmark.prompt.md":"579f0d3fb075"},"inlinedExternals":[],"builtBy":"cc-design-sync"} */
var IndicSoftware = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p, k) {
        var o = {};
        for (var x in p) if (x !== "children") o[x] = p[x];
        if (k !== void 0) o.key = k;
        return o;
      }
      function jsx(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx;
      module.exports.jsxs = jsxs;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs : jsx)(t, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // ds-bundle/.pkg-entry.mjs
  var pkg_entry_exports = {};
  __export(pkg_entry_exports, {
    Button: () => Button,
    Card: () => Card,
    Checkbox: () => Checkbox,
    Dialog: () => Dialog,
    Header: () => Header,
    IconButton: () => IconButton,
    Input: () => Input,
    Motif: () => Motif,
    Radio: () => Radio,
    Select: () => Select,
    Switch: () => Switch,
    Tabs: () => Tabs,
    Tag: () => Tag,
    Tooltip: () => Tooltip,
    Wordmark: () => Wordmark
  });
  init_define_import_meta_env();

  // components/brand/Motif.jsx
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim());
  var PATTERNS = {
    jaali: { backgroundImage: "var(--motif-jaali), var(--wash-paper)" },
    kolam: { backgroundImage: "var(--motif-kolam), var(--wash-paper)", backgroundSize: "var(--motif-kolam-size), auto" },
    lahar: { backgroundImage: "var(--motif-lahar), var(--wash-paper)", backgroundSize: "var(--motif-lahar-size), auto" },
    aavartan: { backgroundImage: "var(--motif-aavartan), var(--wash-paper)" },
    handloom: { backgroundImage: "var(--motif-handloom), var(--wash-paper)" },
    chhapa: {
      backgroundImage: "var(--motif-chhapa), var(--wash-paper)",
      backgroundSize: "var(--motif-chhapa-size), auto",
      backgroundPosition: "var(--motif-chhapa-position), 0 0"
    }
  };
  var STRUCTURAL = /* @__PURE__ */ new Set(["torana", "veni", "sooryodaya", "mandala"]);
  function Torana() {
    const heights = ["76%", "95%", "76%", "58%"];
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", padding: "0 6%", overflow: "hidden" } }, heights.map((h, i) => /* @__PURE__ */ import_react.default.createElement("div", { key: i, style: {
      flex: 1,
      height: h,
      border: "var(--border-width-motif) solid var(--tint-amber-40)",
      borderBottom: "none",
      borderRadius: "var(--radius-pill) var(--radius-pill) 0 0",
      marginRight: i === heights.length - 1 ? 0 : "-1.5px"
    } })));
  }
  function Veni() {
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" } }, [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ import_react.default.createElement("div", { key: i, style: {
      height: "72%",
      aspectRatio: "1 / 1",
      flex: "none",
      borderRadius: "var(--radius-circle)",
      border: "var(--border-width-motif) solid var(--tint-amber-40)",
      marginRight: i === 4 ? 0 : "-9%"
    } })));
  }
  function Mandala() {
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { height: "82%", aspectRatio: "1 / 1", borderRadius: "var(--radius-circle)", border: "var(--border-width-motif) solid var(--tint-ink-28)", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { height: "69%", aspectRatio: "1 / 1", borderRadius: "var(--radius-circle)", border: "var(--border-width-motif) solid var(--tint-amber-40)", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { height: "56%", aspectRatio: "1 / 1", borderRadius: "var(--radius-circle)", background: "linear-gradient(160deg, rgba(255,143,28,0.22) 0%, rgba(161,99,28,0.14) 100%)" } }))));
  }
  function Sooryodaya() {
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { width: "92%", height: "72%", borderRadius: "var(--radius-pill) var(--radius-pill) 0 0", background: "linear-gradient(180deg, rgba(255,217,163,0.4) 0%, rgba(255,217,163,0.15) 100%)", display: "flex", alignItems: "flex-end", justifyContent: "center" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { width: "70%", height: "72%", borderRadius: "var(--radius-pill) var(--radius-pill) 0 0", background: "linear-gradient(180deg, rgba(255,143,28,0.32) 0%, rgba(255,143,28,0.12) 100%)", display: "flex", alignItems: "flex-end", justifyContent: "center" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { width: "62%", height: "62%", borderRadius: "var(--radius-pill) var(--radius-pill) 0 0", background: "linear-gradient(180deg, rgba(161,99,28,0.4) 0%, rgba(161,99,28,0.18) 100%)" } }))));
  }
  var STRUCTURES = { torana: Torana, veni: Veni, sooryodaya: Sooryodaya, mandala: Mandala };
  function Motif({ name = "jaali", onInk = false, height, children, style, ...rest }) {
    const structural = STRUCTURAL.has(name);
    const Structure = STRUCTURES[name];
    const base = onInk ? { backgroundImage: "var(--grain), var(--motif-ripple-ink), var(--wash-ink)", backgroundBlendMode: "soft-light, normal, normal", backgroundSize: "140px 140px, auto, auto", color: "var(--text-on-ink)" } : structural ? { backgroundImage: "var(--wash-paper)" } : PATTERNS[name] || PATTERNS.jaali;
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { position: "relative", height, overflow: "hidden", ...base, ...style }, ...rest }, structural && !onInk && Structure ? /* @__PURE__ */ import_react.default.createElement(Structure, null) : null, children ? /* @__PURE__ */ import_react.default.createElement("div", { style: { position: "relative" } }, children) : null);
  }

  // components/brand/Wordmark.jsx
  init_define_import_meta_env();
  var import_react2 = __toESM(require_react_shim());
  function Wordmark({
    script = "latin",
    size = 48,
    caption = true,
    tone = "ink",
    animate = false,
    transition = "crossfade",
    style,
    ...rest
  }) {
    const R = import_react2.default;
    const [liveScript, setLiveScript] = R.useState(script);
    const [sweepPhase, setSweepPhase] = R.useState("idle");
    R.useEffect(() => {
      if (!animate) { setLiveScript(script); return; }
      let t;
      const id = setInterval(() => {
        setLiveScript((s) => s === "latin" ? "devanagari" : "latin");
        setSweepPhase("prep");
        t = setTimeout(() => setSweepPhase("go"), 40);
      }, 4000);
      return () => { clearInterval(id); clearTimeout(t); };
    }, [animate, script]);
    const activeScript = animate ? liveScript : script;
    const colors = {
      ink: { mark: "var(--text-primary)", caption: "var(--text-secondary)" },
      paper: { mark: "var(--paper-100)", caption: "var(--text-on-ink-muted)" },
      amber: { mark: "var(--amber-600)", caption: "var(--text-secondary)" },
      sweep: { mark: "var(--text-primary)", caption: "var(--text-secondary)" }
    };
    const c = colors[tone] || colors.ink;
    const ease = "cubic-bezier(0.22, 0.61, 0.36, 1)";
    const anim = (on) => {
      if (transition === "fade-up") return {
        opacity: on ? 1 : 0,
        transform: on ? "translateY(0)" : "translateY(0.12em)",
        transition: "opacity 620ms " + ease + ", transform 620ms " + ease
      };
      if (transition === "wipe") return {
        opacity: on ? 1 : 0,
        clipPath: on ? "inset(-15% -8% -25% -8%)" : "inset(-15% 108% -25% -8%)",
        transition: "opacity 620ms " + ease + ", clip-path 620ms " + ease
      };
      if (transition === "reveal") {
        /* Pure left-to-right mask sweep: the incoming mark is revealed by an
           edge moving L\u2192R while the outgoing mark is erased in the same
           direction. No fade. "prep" snaps the incoming mark to the hidden-left
           position without transition; "go" runs the sweep. */
        const full = "inset(-15% -8% -25% -8%)";
        const hiddenRight = "inset(-15% 108% -25% -8%)";
        const hiddenLeft = "inset(-15% -8% -25% 108%)";
        const t = "clip-path 620ms " + ease;
        if (on) return sweepPhase === "prep" ? { clipPath: hiddenRight, transition: "none" } : { clipPath: full, transition: t };
        if (sweepPhase === "prep") return { clipPath: full, transition: "none" };
        if (sweepPhase === "idle") return { clipPath: hiddenRight, transition: "none" };
        return { clipPath: hiddenLeft, transition: t };
      }
      return { opacity: on ? 1 : 0, transition: "opacity 620ms " + ease };
    };
    const markEl = (dev, extra = {}) => {
      const sweep = tone === "sweep" && !dev && size >= 44;
      return R.createElement("div", { key: dev ? "dev" : "lat", style: {
        fontFamily: dev ? "var(--font-devanagari)" : "var(--font-latin)",
        fontWeight: dev ? "var(--weight-medium)" : "var(--weight-semibold)",
        letterSpacing: dev ? 0 : "var(--tracking-wordmark)",
        /* Optical alignment: pull the Latin "i" left by its side bearing so
           the stem is flush with the caption and any left edge. */
        marginLeft: dev ? 0 : "-0.047em",
        lineHeight: dev ? 1.1 : 0.9,
        fontSize: size,
        color: sweep ? "transparent" : c.mark,
        backgroundImage: sweep ? "var(--wordmark-sweep)" : void 0,
        WebkitBackgroundClip: sweep ? "text" : void 0,
        backgroundClip: sweep ? "text" : void 0,
        ...extra
      } }, dev ? "\u0907\u0902\u0921\u093F\u0915" : "indic");
    };
    const captionEl = (dev, extra = {}) => dev ? R.createElement("div", { key: "devc", style: {
      fontFamily: "var(--font-devanagari)",
      fontSize: Math.max(11, size * 0.28),
      fontWeight: "var(--weight-regular)",
      letterSpacing: "0.06em",
      color: c.caption,
      ...extra
    } }, "\u0938\u0949\u092B\u093C\u094D\u091F\u0935\u0947\u092F\u0930") : R.createElement("div", { key: "latc", style: {
      fontFamily: "var(--font-latin)",
      fontSize: Math.max(9, size * 0.125),
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "0.4em",
      textTransform: "uppercase",
      color: c.caption,
      ...extra
    } }, "Software");
    /* Animated mode keeps BOTH scripts mounted in one grid cell with
       baseline alignment, so the header never shifts when they swap. */
    const stack = (build) => R.createElement("div", { style: { display: "grid", alignItems: "baseline", justifyItems: "start" } },
      build(false, { gridArea: "1 / 1", ...anim(activeScript !== "devanagari") }),
      build(true, { gridArea: "1 / 1", ...anim(activeScript === "devanagari") })
    );
    return R.createElement(
      "div",
      {
        style: { display: "inline-flex", flexDirection: "column", alignItems: "flex-start", gap: size * 0.15, ...style },
        ...rest
      },
      animate ? stack(markEl) : markEl(activeScript === "devanagari"),
      caption ? animate ? stack(captionEl) : captionEl(activeScript === "devanagari") : null
    );
  }

  // components/core/Button.jsx
  init_define_import_meta_env();
  var import_react3 = __toESM(require_react_shim());
  var SIZES = {
    sm: { padding: "9px 18px", fontSize: "14px" },
    md: { padding: "13px 26px", fontSize: "16px" },
    lg: { padding: "16px 32px", fontSize: "17px" }
  };
  var VARIANTS = {
    primary: {
      background: "var(--surface-ink)",
      color: "var(--text-on-ink)",
      border: "1px solid var(--surface-ink)"
    },
    accent: {
      background: "var(--surface-accent)",
      color: "var(--text-on-accent)",
      border: "1px solid var(--surface-accent)",
      fontWeight: "var(--weight-semibold)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid var(--text-primary)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-accent)",
      border: "1px solid transparent"
    }
  };
  function Button({
    children,
    variant = "primary",
    size = "md",
    disabled = false,
    fullWidth = false,
    trailingIcon = null,
    onClick,
    type = "button",
    style,
    ...rest
  }) {
    const [hover, setHover] = import_react3.default.useState(false);
    const v = VARIANTS[variant] || VARIANTS.primary;
    const s = SIZES[size] || SIZES.md;
    const hoverStyle = !disabled && hover ? variant === "accent" ? { background: "var(--amber-600)", borderColor: "var(--amber-600)", color: "var(--paper-100)" } : variant === "primary" ? { background: "var(--ink-700)", borderColor: "var(--ink-700)" } : { background: "var(--sand-050)" } : null;
    return /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        type,
        disabled,
        onClick,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          width: fullWidth ? "100%" : "auto",
          fontFamily: "var(--font-latin)",
          fontWeight: "var(--weight-medium)",
          lineHeight: 1.1,
          borderRadius: "var(--radius-pill)",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.45 : 1,
          transition: `background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out)`,
          ...v,
          ...s,
          ...hoverStyle,
          ...style
        },
        ...rest
      },
      /* @__PURE__ */ import_react3.default.createElement("span", null, children),
      trailingIcon
    );
  }

  // components/core/Card.jsx
  init_define_import_meta_env();
  var import_react4 = __toESM(require_react_shim());
  function Card({
    kicker,
    title,
    children,
    footer,
    ground = "paper",
    interactive = false,
    style,
    ...rest
  }) {
    const [hover, setHover] = import_react4.default.useState(false);
    const grounds = {
      paper: { background: "var(--surface-card)" },
      sunken: { background: "var(--surface-sunken)" },
      sunrise: { backgroundImage: "var(--wash-sunrise)" },
      ink: { backgroundImage: "var(--wash-ink)", color: "var(--text-on-ink)" }
    };
    const onInk = ground === "ink";
    return /* @__PURE__ */ import_react4.default.createElement(
      "div",
      {
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3)",
          padding: "var(--space-6)",
          borderRadius: "var(--radius-md)",
          boxShadow: `inset 0 0 0 1px ${onInk ? "rgba(253,252,249,0.14)" : "var(--border-hairline)"}`,
          transition: "background var(--duration-base) var(--ease-out)",
          ...grounds[ground] || grounds.paper,
          ...interactive && hover ? { background: "var(--paper-200)", cursor: "pointer" } : null,
          ...style
        },
        ...rest
      },
      kicker ? /* @__PURE__ */ import_react4.default.createElement("div", { style: {
        fontSize: "var(--text-micro)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: onInk ? "var(--turmeric-400)" : "var(--text-accent)"
      } }, kicker) : null,
      title ? /* @__PURE__ */ import_react4.default.createElement("div", { style: {
        fontSize: "var(--text-heading-3)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-heading)",
        lineHeight: "var(--leading-heading)",
        color: onInk ? "var(--text-on-ink)" : "var(--text-primary)"
      } }, title) : null,
      children ? /* @__PURE__ */ import_react4.default.createElement("div", { style: {
        fontSize: "var(--text-body-sm)",
        lineHeight: "var(--leading-body)",
        color: onInk ? "var(--text-on-ink-muted)" : "var(--text-secondary)"
      } }, children) : null,
      footer ? /* @__PURE__ */ import_react4.default.createElement("div", { style: {
        marginTop: "var(--space-3)",
        paddingTop: "var(--space-3)",
        borderTop: `1px solid ${onInk ? "rgba(253,252,249,0.14)" : "var(--border-hairline)"}`,
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-micro)",
        color: onInk ? "var(--text-on-ink-muted)" : "var(--text-muted)"
      } }, footer) : null
    );
  }

  // components/core/IconButton.jsx
  init_define_import_meta_env();
  var import_react5 = __toESM(require_react_shim());
  function IconButton({
    children,
    label,
    variant = "outline",
    size = 40,
    disabled = false,
    onClick,
    style,
    ...rest
  }) {
    const [hover, setHover] = import_react5.default.useState(false);
    const variants = {
      outline: { background: "transparent", color: "var(--text-primary)", boxShadow: "inset 0 0 0 1px var(--text-primary)" },
      ghost: { background: "transparent", color: "var(--text-secondary)", boxShadow: "none" },
      solid: { background: "var(--surface-ink)", color: "var(--text-on-ink)", boxShadow: "none" },
      accent: { background: "var(--surface-accent)", color: "var(--text-on-accent)", boxShadow: "none" }
    };
    return /* @__PURE__ */ import_react5.default.createElement(
      "button",
      {
        type: "button",
        "aria-label": label,
        title: label,
        disabled,
        onClick,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: {
          width: size,
          height: size,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "var(--radius-pill)",
          border: "none",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.45 : 1,
          transition: "background var(--duration-fast) var(--ease-out)",
          ...variants[variant] || variants.outline,
          ...hover && !disabled ? { background: variant === "solid" ? "var(--ink-700)" : "var(--sand-050)" } : null,
          ...style
        },
        ...rest
      },
      children
    );
  }

  // components/core/Tag.jsx
  init_define_import_meta_env();
  var import_react6 = __toESM(require_react_shim());
  var TONES = {
    amber: { background: "var(--sand-050)", color: "var(--amber-600)", ring: "rgba(161,99,28,0.28)" },
    marigold: { background: "var(--sand-100)", color: "#7a4a10", ring: "rgba(255,143,28,0.4)" },
    neutral: { background: "var(--paper-200)", color: "var(--text-secondary)", ring: "var(--line-300)" },
    ink: { background: "var(--surface-ink)", color: "var(--text-on-ink)", ring: "var(--surface-ink)" }
  };
  function Tag({ children, tone = "amber", outline = false, style, ...rest }) {
    const t = TONES[tone] || TONES.amber;
    return /* @__PURE__ */ import_react6.default.createElement(
      "span",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "5px 12px",
          borderRadius: "var(--radius-pill)",
          fontFamily: "var(--font-latin)",
          fontSize: "var(--text-micro)",
          fontWeight: "var(--weight-semibold)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          lineHeight: 1.4,
          background: outline ? "transparent" : t.background,
          color: t.color,
          boxShadow: outline ? `inset 0 0 0 1px ${t.ring}` : "none",
          ...style
        },
        ...rest
      },
      children
    );
  }

  // components/feedback/Dialog.jsx
  init_define_import_meta_env();
  var import_react7 = __toESM(require_react_shim());
  function Dialog({ open = false, title, children, actions, onClose, width = 520, style, ...rest }) {
    if (!open) return null;
    return /* @__PURE__ */ import_react7.default.createElement(
      "div",
      {
        role: "presentation",
        onClick: onClose,
        style: {
          position: "fixed",
          inset: 0,
          background: "rgba(22, 19, 15, 0.42)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "var(--space-6)",
          zIndex: 40
        }
      },
      /* @__PURE__ */ import_react7.default.createElement(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-label": typeof title === "string" ? title : void 0,
          onClick: (e) => e.stopPropagation(),
          style: {
            width,
            maxWidth: "100%",
            background: "var(--surface-card)",
            backgroundImage: "var(--grain), var(--wash-paper)",
            backgroundBlendMode: "soft-light, normal",
            backgroundSize: "140px 140px, auto",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-overlay)",
            padding: "var(--space-7)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
            ...style
          },
          ...rest
        },
        title ? /* @__PURE__ */ import_react7.default.createElement("div", { style: {
          fontFamily: "var(--font-latin)",
          fontSize: "var(--text-heading-3)",
          fontWeight: "var(--weight-semibold)",
          letterSpacing: "var(--tracking-heading)",
          color: "var(--text-primary)"
        } }, title) : null,
        /* @__PURE__ */ import_react7.default.createElement("div", { style: { fontSize: "var(--text-body-md)", lineHeight: "var(--leading-body)", color: "var(--text-secondary)" } }, children),
        actions ? /* @__PURE__ */ import_react7.default.createElement("div", { style: { display: "flex", gap: "var(--space-3)", paddingTop: "var(--space-2)" } }, actions) : null
      )
    );
  }

  // components/feedback/Tooltip.jsx
  init_define_import_meta_env();
  var import_react8 = __toESM(require_react_shim());
  function Tooltip({ label, children, placement = "top", style, ...rest }) {
    const [open, setOpen] = import_react8.default.useState(false);
    const offset = placement === "bottom" ? { top: "calc(100% + 8px)" } : { bottom: "calc(100% + 8px)" };
    return /* @__PURE__ */ import_react8.default.createElement(
      "span",
      {
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
        onFocus: () => setOpen(true),
        onBlur: () => setOpen(false),
        style: { position: "relative", display: "inline-flex", ...style },
        ...rest
      },
      children,
      open ? /* @__PURE__ */ import_react8.default.createElement(
        "span",
        {
          role: "tooltip",
          style: {
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            ...offset,
            whiteSpace: "nowrap",
            background: "var(--surface-ink)",
            color: "var(--text-on-ink)",
            fontFamily: "var(--font-latin)",
            fontSize: "var(--text-micro)",
            letterSpacing: "0.02em",
            padding: "7px 11px",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-tooltip)",
            zIndex: 30
          }
        },
        label
      ) : null
    );
  }

  // components/forms/Checkbox.jsx
  init_define_import_meta_env();
  var import_react9 = __toESM(require_react_shim());
  function Checkbox({ label, checked = false, onChange, disabled = false, style, ...rest }) {
    return /* @__PURE__ */ import_react9.default.createElement("label", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      fontFamily: "var(--font-latin)",
      fontSize: "var(--text-body-md)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    } }, /* @__PURE__ */ import_react9.default.createElement(
      "input",
      {
        type: "checkbox",
        checked,
        onChange,
        disabled,
        style: { position: "absolute", opacity: 0, width: 0, height: 0 },
        ...rest
      }
    ), /* @__PURE__ */ import_react9.default.createElement("span", { style: {
      width: 20,
      height: 20,
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-md)",
      background: checked ? "var(--surface-ink)" : "var(--surface-card)",
      boxShadow: `inset 0 0 0 1px ${checked ? "var(--surface-ink)" : "var(--line-300)"}`,
      transition: "background var(--duration-fast) var(--ease-out)"
    } }, checked ? /* @__PURE__ */ import_react9.default.createElement("span", { style: { width: 9, height: 9, borderRadius: 1, background: "var(--turmeric-400)" } }) : null), label);
  }

  // components/forms/Input.jsx
  init_define_import_meta_env();
  var import_react10 = __toESM(require_react_shim());
  function Input({
    label,
    hint,
    error,
    type = "text",
    value,
    onChange,
    placeholder,
    disabled = false,
    multiline = false,
    rows = 4,
    style,
    ...rest
  }) {
    const [focus, setFocus] = import_react10.default.useState(false);
    const Field = multiline ? "textarea" : "input";
    return /* @__PURE__ */ import_react10.default.createElement("label", { style: { display: "flex", flexDirection: "column", gap: "8px", fontFamily: "var(--font-latin)", ...style } }, label ? /* @__PURE__ */ import_react10.default.createElement("span", { style: {
      fontSize: "var(--text-micro)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    } }, label) : null, /* @__PURE__ */ import_react10.default.createElement(
      Field,
      {
        type: multiline ? void 0 : type,
        rows: multiline ? rows : void 0,
        value,
        onChange,
        placeholder,
        disabled,
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        style: {
          font: "inherit",
          fontSize: "var(--text-body-md)",
          color: "var(--text-primary)",
          background: "var(--surface-card)",
          padding: "13px 16px",
          borderRadius: "var(--radius-md)",
          border: "1px solid",
          borderColor: error ? "#c2553a" : focus ? "var(--amber-600)" : "var(--border-hairline)",
          outline: "none",
          resize: multiline ? "vertical" : void 0,
          opacity: disabled ? 0.45 : 1,
          transition: "border-color var(--duration-fast) var(--ease-out)"
        },
        ...rest
      }
    ), error ? /* @__PURE__ */ import_react10.default.createElement("span", { style: { fontSize: "var(--text-caption)", color: "#a8452c" } }, error) : hint ? /* @__PURE__ */ import_react10.default.createElement("span", { style: { fontSize: "var(--text-caption)", color: "var(--text-muted)" } }, hint) : null);
  }

  // components/forms/Radio.jsx
  init_define_import_meta_env();
  var import_react11 = __toESM(require_react_shim());
  function Radio({ label, checked = false, onChange, name, value, disabled = false, style, ...rest }) {
    return /* @__PURE__ */ import_react11.default.createElement("label", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      fontFamily: "var(--font-latin)",
      fontSize: "var(--text-body-md)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    } }, /* @__PURE__ */ import_react11.default.createElement(
      "input",
      {
        type: "radio",
        name,
        value,
        checked,
        onChange,
        disabled,
        style: { position: "absolute", opacity: 0, width: 0, height: 0 },
        ...rest
      }
    ), /* @__PURE__ */ import_react11.default.createElement("span", { style: {
      width: 20,
      height: 20,
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-circle)",
      background: "var(--surface-card)",
      boxShadow: `inset 0 0 0 1px ${checked ? "var(--amber-600)" : "var(--line-300)"}`
    } }, checked ? /* @__PURE__ */ import_react11.default.createElement("span", { style: { width: 10, height: 10, borderRadius: "var(--radius-circle)", background: "var(--marigold-500)" } }) : null), label);
  }

  // components/forms/Select.jsx
  init_define_import_meta_env();
  var import_react12 = __toESM(require_react_shim());
  function Select({ label, hint, value, onChange, options = [], disabled = false, style, ...rest }) {
    const [focus, setFocus] = import_react12.default.useState(false);
    return /* @__PURE__ */ import_react12.default.createElement("label", { style: { display: "flex", flexDirection: "column", gap: "8px", fontFamily: "var(--font-latin)", ...style } }, label ? /* @__PURE__ */ import_react12.default.createElement("span", { style: {
      fontSize: "var(--text-micro)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    } }, label) : null, /* @__PURE__ */ import_react12.default.createElement(
      "select",
      {
        value,
        onChange,
        disabled,
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        style: {
          font: "inherit",
          fontSize: "var(--text-body-md)",
          color: "var(--text-primary)",
          background: "var(--surface-card)",
          padding: "13px 16px",
          borderRadius: "var(--radius-md)",
          border: "1px solid",
          borderColor: focus ? "var(--amber-600)" : "var(--border-hairline)",
          outline: "none",
          opacity: disabled ? 0.45 : 1,
          appearance: "none"
        },
        ...rest
      },
      options.map((o) => {
        const opt = typeof o === "string" ? { value: o, label: o } : o;
        return /* @__PURE__ */ import_react12.default.createElement("option", { key: opt.value, value: opt.value }, opt.label);
      })
    ), hint ? /* @__PURE__ */ import_react12.default.createElement("span", { style: { fontSize: "var(--text-caption)", color: "var(--text-muted)" } }, hint) : null);
  }

  // components/forms/Switch.jsx
  init_define_import_meta_env();
  var import_react13 = __toESM(require_react_shim());
  function Switch({ label, checked = false, onChange, disabled = false, style, ...rest }) {
    return /* @__PURE__ */ import_react13.default.createElement("label", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      fontFamily: "var(--font-latin)",
      fontSize: "var(--text-body-md)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    } }, /* @__PURE__ */ import_react13.default.createElement(
      "input",
      {
        type: "checkbox",
        role: "switch",
        checked,
        onChange,
        disabled,
        style: { position: "absolute", opacity: 0, width: 0, height: 0 },
        ...rest
      }
    ), /* @__PURE__ */ import_react13.default.createElement("span", { style: {
      width: 46,
      height: 26,
      flex: "none",
      padding: 3,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: checked ? "flex-end" : "flex-start",
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--marigold-500)" : "var(--paper-300)",
      boxShadow: `inset 0 0 0 1px ${checked ? "var(--marigold-500)" : "var(--line-300)"}`,
      transition: "background var(--duration-base) var(--ease-out)"
    } }, /* @__PURE__ */ import_react13.default.createElement("span", { style: {
      width: 20,
      height: 20,
      borderRadius: "var(--radius-circle)",
      background: checked ? "var(--ink-900)" : "var(--paper-000)",
      boxShadow: checked ? "none" : "0 1px 2px rgba(22,19,15,0.16)"
    } })), label);
  }

  // components/navigation/Header.jsx
  init_define_import_meta_env();
  var import_react14 = __toESM(require_react_shim());
  function Header({ links = [], action = "Start a project", onAction, script = "latin", animateWordmark = false, wordmarkTransition = "crossfade", homeHref, style, ...rest }) {
    const mark = import_react14.default.createElement(Wordmark, { script, size: 26, caption: false, animate: animateWordmark, transition: wordmarkTransition });
    return /* @__PURE__ */ import_react14.default.createElement(
      "header",
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-6)",
          padding: "22px var(--gutter-page)",
          borderBottom: "1px solid var(--border-hairline)",
          background: "transparent",
          ...style
        },
        ...rest
      },
      homeHref ? import_react14.default.createElement("a", { href: homeHref, style: { display: "inline-flex", color: "inherit", textDecoration: "none", borderBottom: "none" } }, mark) : mark,
      /* @__PURE__ */ import_react14.default.createElement("nav", { style: { display: "flex", alignItems: "center", gap: "var(--space-6)" } }, links.map((raw) => {
        const link = typeof raw === "string" ? { label: raw, href: "#" } : raw;
        return /* @__PURE__ */ import_react14.default.createElement(
          "a",
          {
            key: link.label,
            href: link.href || "#",
            onClick: link.onClick,
            style: {
              fontFamily: "var(--font-latin)",
              fontSize: "var(--text-body-sm)",
              fontWeight: "var(--weight-medium)",
              color: link.active ? "var(--text-accent)" : "var(--text-body)",
              textDecoration: "none",
              borderBottom: link.active ? "1px solid var(--text-accent)" : "1px solid transparent"
            }
          },
          link.label
        );
      }), action ? /* @__PURE__ */ import_react14.default.createElement(Button, { size: "sm", onClick: onAction }, action) : null)
    );
  }

  // components/navigation/Tabs.jsx
  init_define_import_meta_env();
  var import_react15 = __toESM(require_react_shim());
  function Tabs({ items = [], value, onChange, style, ...rest }) {
    const active = value ?? (items[0] && (items[0].value ?? items[0]));
    return /* @__PURE__ */ import_react15.default.createElement(
      "div",
      {
        role: "tablist",
        style: {
          display: "flex",
          gap: "var(--space-6)",
          borderBottom: "1px solid var(--border-hairline)",
          fontFamily: "var(--font-latin)",
          ...style
        },
        ...rest
      },
      items.map((raw) => {
        const item = typeof raw === "string" ? { value: raw, label: raw } : raw;
        const on = item.value === active;
        return /* @__PURE__ */ import_react15.default.createElement(
          "button",
          {
            key: item.value,
            role: "tab",
            "aria-selected": on,
            onClick: () => onChange && onChange(item.value),
            style: {
              appearance: "none",
              background: "none",
              border: "none",
              padding: "0 0 14px",
              marginBottom: "-1px",
              cursor: "pointer",
              font: "inherit",
              fontSize: "var(--text-body-md)",
              fontWeight: on ? "var(--weight-semibold)" : "var(--weight-medium)",
              color: on ? "var(--text-primary)" : "var(--text-muted)",
              borderBottom: `2px solid ${on ? "var(--text-primary)" : "transparent"}`
            }
          },
          item.label
        );
      })
    );
  }
  return __toCommonJS(pkg_entry_exports);
})();
window.IndicSoftware=IndicSoftware.__dsMainNs?Object.assign({},IndicSoftware,IndicSoftware.__dsMainNs,{__dsMainNs:undefined}):IndicSoftware;

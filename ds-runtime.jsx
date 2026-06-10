/*
  ds-runtime.jsx — the AIBOS design-system components this site uses,
  flattened into one browser-runnable file (Babel standalone can't load
  ES modules across files). The canonical per-component sources live in
  ./components/ — edit there, then mirror changes here, or just edit here.
  Exposes: window.AIBOSDesignSystem_087750
*/

/* ===== PixelMark.jsx ===== */
/**
 * PixelMark — the AIBOS signature: a 5×5 grid of cells with a single
 * "awake" cell (the agent). Pure SVG, scales to any size.
 */
function PixelMark({
  size = 28,
  tone = 'ink',          // 'ink' | 'inverse' | 'mono'
  awake = [2, 2],        // [row, col] of the lit cell, 0-indexed
  accent,                // override the awake-cell color
  className,
  style,
  ...rest
}) {
  const n = 5, cell = 16, gap = 3;
  const span = (n - 1) * (cell + gap) + cell; // 92
  const pos = (i) => i * (cell + gap);

  const palette = {
    ink:     { base: 'var(--gray-900)', dot: 'var(--green-500)' },
    inverse: { base: 'var(--gray-100)', dot: 'var(--green-400)' },
    mono:    { base: 'currentColor',    dot: 'currentColor' },
  }[tone] || { base: 'var(--gray-900)', dot: 'var(--green-500)' };

  const dot = accent || palette.dot;
  const cells = [];
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const lit = r === awake[0] && c === awake[1];
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={pos(c)} y={pos(r)} width={cell} height={cell} rx={2}
          fill={lit ? dot : palette.base}
          fillOpacity={lit ? 1 : tone === 'mono' ? 0.22 : 0.92}
        />
      );
    }
  }

  return (
    <svg
      width={size} height={size} viewBox={`0 0 ${span} ${span}`}
      role="img" aria-label="AIBOS" className={className} style={style} {...rest}
    >
      {cells}
    </svg>
  );
}

/* ===== Logo.jsx ===== */
/**
 * Logo — the AIBOS lockup: pixel mark + monospace wordmark.
 * The wordmark is always set in Geist Mono, lowercase tracking off.
 */
function Logo({
  size = 26,             // mark size in px; wordmark scales from it
  tone = 'ink',          // 'ink' | 'inverse'
  wordmark = true,
  className,
  style,
  ...rest
}) {
  const color = tone === 'inverse' ? 'var(--gray-50)' : 'var(--gray-900)';
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: size * 0.42,
        color, ...style,
      }}
      {...rest}
    >
      <PixelMark size={size} tone={tone} />
      {wordmark && (
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 'var(--weight-semibold)',
            fontSize: size * 0.86,
            letterSpacing: '-0.01em',
            lineHeight: 1,
          }}
        >
          AIBOS
        </span>
      )}
    </span>
  );
}

/* ===== Stat.jsx ===== */
/**
 * Stat — a "fact" display. The brand juxtaposes facts and lets the
 * reader conclude; this is the unit for that. Mono value, plain label.
 */
function Stat({
  value,
  label,
  sub,                 // optional small qualifier under the label
  accent = false,      // tint the value green
  size = 'md',         // 'sm' | 'md' | 'lg'
  align = 'left',
  className,
  style,
  ...rest
}) {
  const sizes = {
    sm: { v: 'var(--text-2xl)', l: 'var(--text-xs)' },
    md: { v: 'var(--text-4xl)', l: 'var(--text-sm)' },
    lg: { v: 'var(--text-5xl)', l: 'var(--text-base)' },
  }[size] || { v: 'var(--text-4xl)', l: 'var(--text-sm)' };

  return (
    <div
      className={className}
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', textAlign: align, ...style }}
      {...rest}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 'var(--weight-semibold)',
          fontSize: sizes.v,
          letterSpacing: 'var(--tracking-tight)',
          lineHeight: 1,
          color: accent ? 'var(--text-accent)' : 'var(--text-primary)',
          fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap',
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: sizes.l, color: 'var(--text-secondary)',
          lineHeight: 'var(--leading-snug)',
        }}
      >
        {label}
        {sub && (
          <span style={{ display: 'block', color: 'var(--text-tertiary)', fontSize: 'var(--text-xs)', marginTop: 2 }}>
            {sub}
          </span>
        )}
      </span>
    </div>
  );
}

/* ===== Button.jsx ===== */
/**
 * Button — the primary action primitive.
 * Variants: primary (green), secondary (outline), ghost, danger.
 */
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  loading = false,
  disabled = false,
  full = false,
  type = 'button',
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: { h: 30, px: 12, fs: 'var(--text-sm)', gap: 6, icon: 15 },
    md: { h: 38, px: 16, fs: 'var(--text-base)', gap: 8, icon: 17 },
    lg: { h: 46, px: 22, fs: 'var(--text-md)', gap: 9, icon: 19 },
  }[size] || {};

  const variants = {
    primary: {
      background: 'var(--accent-strong)', color: 'var(--text-on-accent)',
      border: '1px solid var(--accent-strong)',
      '--hover-bg': 'var(--accent-stronger)',
    },
    secondary: {
      background: 'var(--surface-card)', color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      '--hover-bg': 'var(--surface-hover)',
    },
    ghost: {
      background: 'transparent', color: 'var(--text-secondary)',
      border: '1px solid transparent',
      '--hover-bg': 'var(--surface-hover)',
    },
    danger: {
      background: 'var(--danger)', color: '#fff',
      border: '1px solid var(--danger)',
      '--hover-bg': 'var(--danger-strong)',
    },
  }[variant] || {};

  const isOff = disabled || loading;

  return (
    <button
      type={type}
      disabled={isOff}
      data-variant={variant}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: sizes.gap, height: sizes.h, padding: `0 ${sizes.px}px`,
        width: full ? '100%' : undefined,
        fontFamily: 'var(--font-sans)', fontSize: sizes.fs,
        fontWeight: 'var(--weight-medium)', letterSpacing: '-0.005em',
        borderRadius: 'var(--radius-control)', cursor: isOff ? 'not-allowed' : 'pointer',
        opacity: isOff ? 0.55 : 1, whiteSpace: 'nowrap',
        transition: 'var(--transition-control)', boxShadow: variant === 'primary' || variant === 'danger' ? 'var(--shadow-xs)' : 'none',
        ...variants, ...style,
      }}
      onMouseEnter={(e) => { if (!isOff) e.currentTarget.style.background = e.currentTarget.style.getPropertyValue('--hover-bg'); }}
      onMouseLeave={(e) => { if (!isOff) e.currentTarget.style.background = variants.background; }}
      {...rest}
    >
      {loading && <Spinner size={sizes.icon} />}
      {!loading && iconLeft && <span style={{ display: 'inline-flex', width: sizes.icon, height: sizes.icon }}>{iconLeft}</span>}
      {children}
      {!loading && iconRight && <span style={{ display: 'inline-flex', width: sizes.icon, height: sizes.icon }}>{iconRight}</span>}
    </button>
  );
}

function Spinner({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ animation: 'aibos-spin 0.7s linear infinite' }}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2.5" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <style>{`@keyframes aibos-spin{to{transform:rotate(360deg)}}`}</style>
    </svg>
  );
}

/* ===== Card.jsx ===== */
/** Card — a surface. Optional interactive (hover lift) mode. */
function Card({
  as: Tag = 'div',
  padding = 'md',
  interactive = false,
  inset = false,        // sunken style
  children,
  style,
  ...rest
}) {
  const pads = { none: 0, sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-8)' };
  return (
    <Tag
      style={{
        background: inset ? 'var(--surface-sunken)' : 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-card)',
        padding: pads[padding] ?? pads.md,
        boxShadow: inset ? 'none' : 'var(--shadow-sm)',
        transition: 'var(--transition-control)',
        cursor: interactive ? 'pointer' : undefined,
        ...style,
      }}
      onMouseEnter={interactive ? (e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.borderColor = 'var(--border-default)'; } : undefined}
      onMouseLeave={interactive ? (e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ===== Badge.jsx ===== */
/** Badge — compact status label. Optional leading dot. */
function Badge({
  variant = 'neutral',   // neutral | accent | success | warning | danger | info
  dot = false,
  children,
  style,
  ...rest
}) {
  const v = {
    neutral: { bg: 'var(--gray-100)', fg: 'var(--gray-700)', dot: 'var(--gray-400)' },
    accent:  { bg: 'var(--accent-subtle)', fg: 'var(--text-accent)', dot: 'var(--accent)' },
    success: { bg: 'var(--success-subtle)', fg: 'var(--green-700)', dot: 'var(--success)' },
    warning: { bg: 'var(--warning-subtle)', fg: 'var(--amber-600)', dot: 'var(--warning)' },
    danger:  { bg: 'var(--danger-subtle)', fg: 'var(--red-700)', dot: 'var(--danger)' },
    info:    { bg: 'var(--info-subtle)', fg: 'var(--blue-600)', dot: 'var(--info)' },
  }[variant] || {};

  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        height: 22, padding: '0 8px',
        background: v.bg, color: v.fg,
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)',
        fontWeight: 'var(--weight-medium)', letterSpacing: '0.02em',
        borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: v.dot, flex: '0 0 auto' }} />}
      {children}
    </span>
  );
}

window.AIBOSDesignSystem_087750 = { PixelMark, Logo, Stat, Button, Card, Badge };

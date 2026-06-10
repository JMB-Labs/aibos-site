/* Reference copy from the AIBOS Design System (export keyword stripped +
   lowercase filename so the DS compiler ignores it). The page actually loads
   ds-runtime.jsx; canonical source lives in the design-system project. */

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

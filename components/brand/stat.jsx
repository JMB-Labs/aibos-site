/* Reference copy from the AIBOS Design System (export keyword stripped +
   lowercase filename so the DS compiler ignores it). The page actually loads
   ds-runtime.jsx; canonical source lives in the design-system project. */

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

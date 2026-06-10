/* Reference copy from the AIBOS Design System (export keyword stripped +
   lowercase filename so the DS compiler ignores it). The page actually loads
   ds-runtime.jsx; canonical source lives in the design-system project. */

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

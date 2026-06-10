/* Reference copy from the AIBOS Design System (export keyword stripped +
   lowercase filename so the DS compiler ignores it). The page actually loads
   ds-runtime.jsx; canonical source lives in the design-system project. */

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

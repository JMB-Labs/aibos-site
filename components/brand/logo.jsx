/* Reference copy from the AIBOS Design System (export keyword stripped +
   lowercase filename so the DS compiler ignores it). The page actually loads
   ds-runtime.jsx; canonical source lives in the design-system project. */

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

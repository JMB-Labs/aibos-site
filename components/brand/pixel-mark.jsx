/* Reference copy from the AIBOS Design System (export keyword stripped +
   lowercase filename so the DS compiler ignores it). The page actually loads
   ds-runtime.jsx; canonical source lives in the design-system project. */

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

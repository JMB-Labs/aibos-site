/* global React */
// Lucide icon helper. Renders <i data-lucide> and lets a global
// effect swap them to SVGs. Size via the wrapper; stroke set globally.
function Icon({ name, size = 18, color, strokeWidth = 1.75, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = `<i data-lucide="${name}"></i>`;
    window.lucide.createIcons({ attrs: { 'stroke-width': strokeWidth } });
  }, [name, strokeWidth]);
  return (
    <span
      ref={ref}
      className="ic"
      style={{ display: 'inline-flex', width: size, height: size, color, flex: '0 0 auto', ...style }}
    />
  );
}

// Optional: hydrate any icons mounted outside a React effect.
function useLucide() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.75 } });
  });
}

Object.assign(window, { Icon, useLucide });

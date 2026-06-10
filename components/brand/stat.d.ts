// Reference types (de-moduled copy).
import * as React from 'react';

/**
 * A single "fact" — large monospace value over a plain label.
 * @startingPoint section="Brand" subtitle="Mono fact / metric display" viewport="280x140"
 */
interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline value, e.g. "₱2,400/mo" or "47". */
  value: React.ReactNode;
  /** Plain-language label beneath the value. */
  label: React.ReactNode;
  /** Optional small qualifier under the label. */
  sub?: React.ReactNode;
  /** Tint the value green. Default false. */
  accent?: boolean;
  size?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center' | 'right';
}
declare function Stat(props: StatProps): JSX.Element;

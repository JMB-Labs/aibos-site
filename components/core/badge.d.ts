// Reference types (de-moduled copy).
import * as React from 'react';

/** Compact status label, optionally with a leading dot. */
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger' | 'info';
  /** Show a leading status dot. */
  dot?: boolean;
}
declare function Badge(props: BadgeProps): JSX.Element;

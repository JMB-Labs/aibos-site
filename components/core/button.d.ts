// Reference types (de-moduled copy).
import * as React from 'react';

/**
 * The primary action button.
 * @startingPoint section="Core" subtitle="Primary / secondary / ghost / danger" viewport="700x120"
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Icon node rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label. */
  iconRight?: React.ReactNode;
  /** Show a spinner and disable. */
  loading?: boolean;
  /** Stretch to container width. */
  full?: boolean;
}
declare function Button(props: ButtonProps): JSX.Element;

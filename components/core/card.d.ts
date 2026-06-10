// Reference types (de-moduled copy).
import * as React from 'react';

/**
 * A surface container — the default panel.
 * @startingPoint section="Core" subtitle="Surface / panel container" viewport="360x200"
 */
interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Element tag to render. Default 'div'. */
  as?: keyof JSX.IntrinsicElements;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Hover lift + cursor. Default false. */
  interactive?: boolean;
  /** Sunken (no shadow, gray fill). Default false. */
  inset?: boolean;
}
declare function Card(props: CardProps): JSX.Element;

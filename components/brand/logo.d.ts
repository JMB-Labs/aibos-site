// Reference types (de-moduled copy).
import * as React from 'react';

/**
 * The AIBOS logo lockup: pixel mark + monospace wordmark.
 * @startingPoint section="Brand" subtitle="Mark + monospace wordmark" viewport="320x80"
 */
interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Mark size in px; wordmark scales from it. Default 26. */
  size?: number;
  /** 'ink' for light backgrounds, 'inverse' for dark. Default 'ink'. */
  tone?: 'ink' | 'inverse';
  /** Show the AIBOS wordmark. Default true. */
  wordmark?: boolean;
}
declare function Logo(props: LogoProps): JSX.Element;

// Reference types (de-moduled copy).
import * as React from 'react';

/**
 * The AIBOS signature mark: a 5×5 grid with one "awake" cell.
 * @startingPoint section="Brand" subtitle="The 5×5 pixel mark" viewport="200x200"
 */
interface PixelMarkProps extends React.SVGAttributes<SVGSVGElement> {
  /** Rendered px size (square). Default 28. */
  size?: number;
  /** Colorway. Default 'ink' (dark cells on light). */
  tone?: 'ink' | 'inverse' | 'mono';
  /** [row, col] of the lit cell, 0-indexed. Default [2,2] (dead-center). */
  awake?: [number, number];
  /** Override the awake-cell color. */
  accent?: string;
}
declare function PixelMark(props: PixelMarkProps): JSX.Element;

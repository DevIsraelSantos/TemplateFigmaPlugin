/**
 * - sm: extra Small
 * - sm: Small
 * - lg: Large
 * - lg: extra Large
 * - Undefined: Mediun
 */
export type SizeType = "sm" | "md" | "lg";
export interface SizeProps {
  xs?: boolean;
  sm?: boolean;
  lg?: boolean;
  xl?: boolean;
}

import type { Rule } from 'antd/es/form';

export interface FancyItemIdentifier {
  /** form field type */
  type: string;
  /** form field name */
  field: string;
  /** uniq key */
  key: string;
  label: string;
  initialValue: any;
  children?: FancyItemIdentifier[];
  hidden?: boolean;
  rules?: Rule[];
  /** antd input component props */
  antProps?: Record<string, unknown>;
}

export interface FancyInputProps {
  type: string;
  [key: string]: any;
}

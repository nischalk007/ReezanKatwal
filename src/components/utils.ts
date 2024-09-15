export interface FormInputProps {
  name: string;
  label: string;
  readOnly?: boolean;
  type?: string;
  placeholder?: string;
  className?: string;
  defaultValue?: string | null;
  resetThis?: boolean;
  length?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

///Radio Props

import { IconType } from "react-icons";

export interface FormRadioOption {
  value: string;
  label: string;
  icon?: IconType;
  iconStyle?: React.CSSProperties;
}
export interface FormRadioProps {
  name: string;
  options: FormRadioOption[];
  className?: string;
  Icon?: IconType;
  label?: string;
  defaultValue?: string;
  hidden?: string; //work on this
}

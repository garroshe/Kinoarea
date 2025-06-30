import type { Ref } from "react";

export interface InputUIProps {
  placeholder?: string;
  type?: string;
  name?: string;
  ref?: Ref<HTMLInputElement>;
}

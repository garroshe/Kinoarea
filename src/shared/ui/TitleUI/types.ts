import type { PrefixKeysWithDollar } from "../../types";

export interface ITitleUIProps {
  title: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  marginBottom?: number;
  marginTop?: number;
}

export type StyledTitleUIProps = PrefixKeysWithDollar<Omit<ITitleUIProps, "title">>;

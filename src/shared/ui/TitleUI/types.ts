import type { PrefixKeysWithDollarType } from "@/shared/types";

export type TitleUIPropsType = {
  title?: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  marginBottom?: number;
  marginTop?: number;
};

export type StyledTitleUIPropsType = PrefixKeysWithDollarType<Omit<TitleUIPropsType, "title">>;

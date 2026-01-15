import { StyledSelector } from "./styled";

type OptionType = {
  label: string;
  value: string;
};

type SelectorUIType = {
  onChange: (value: string) => void;
  options: OptionType[];
};

export const SelectorUI = ({ onChange, options }: SelectorUIType) => {
  return (
    <StyledSelector onChange={(e) => onChange(e.target.value)}>
      {options.map((item, i) => (
        <option key={i} value={item.value}>
          {item.label}
        </option>
      ))}
    </StyledSelector>
  );
};

import { SelectWrapper, StyledOption, StyledSelect } from "./styles";

export function Platforms({ value, handleChange }) {
  return (
    <SelectWrapper>
      <StyledSelect name="platform" value={value || ""} onChange={handleChange}>
        <StyledOption value="">Platform</StyledOption>
        <StyledOption value="4">PC</StyledOption>
        <StyledOption value="5">macOS</StyledOption>
        <StyledOption value="21">Android</StyledOption>
      </StyledSelect>
    </SelectWrapper>
  );
}

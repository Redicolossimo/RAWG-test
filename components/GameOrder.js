import {
  SelectLabel,
  SelectWrapper,
  StyledOption,
  StyledSelect,
} from "./styles";

export function GameOrder({ value, handleChange }) {
  return (
    <SelectWrapper className="mr-2">
      <SelectLabel>Order By:</SelectLabel>
      <StyledSelect
        name="order"
        value={value || "-released"}
        onChange={handleChange}
      >
        <StyledOption value="-released">-Released</StyledOption>
        <StyledOption value="released">Released</StyledOption>
        <StyledOption value="-rating">-Rating</StyledOption>
        <StyledOption value="rating">Rating</StyledOption>
      </StyledSelect>
    </SelectWrapper>
  );
}

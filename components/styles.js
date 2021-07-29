const { default: styled } = require("styled-components");

export const SelectWrapper = styled.div`
  display: flex;
  align-items: baseline;
  background-color: hsla(0, 0%, 100%, 0.07);
  padding: 10px 16px;
  min-width: 150px;
  border-radius: 8px;
  font-size: 14px;
`;

export const SelectLabel = styled.label`
  flex: 1;
  color: #fff;
`;

export const StyledSelect = styled.select`
  flex: 1;
  background-color: transparent;
  border: none;
  color: #fff;
`;

export const StyledOption = styled.option`
  background-color: #fff;
  color: #000;
`;

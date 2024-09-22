import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background: rgba(4, 202, 30, 0.596);
  box-shadow: 0 0 10px rgba(4, 202, 30, 0.692);
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  &:hover {
    background: #3ec20a;
    box-shadow: 0 0 10px #3ec20a;
  }
`;

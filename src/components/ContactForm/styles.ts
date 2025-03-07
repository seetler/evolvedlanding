import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 50px 0;
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Span = styled.span`
  color: red;
  font-size: 14px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const Message = styled.p<{ success?: boolean; error?: boolean }>`
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  color: ${({ success, error }) => (success ? "green" : error ? "red" : "black")};
  background-color: ${({ success, error }) => (success ? "#d4edda" : error ? "#f8d7da" : "transparent")};
  border: ${({ success, error }) => (success ? "1px solid #c3e6cb" : error ? "1px solid #f5c6cb" : "none")};
`;

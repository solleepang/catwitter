import { styled } from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;

export const Title = styled.h1`
  font-size: 40px;
`;

export const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  background-color: #ead3d3;
  &[type="submit"] {
    background-color: #ce4a7e;
    color: #ead3d3;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Error = styled.span`
  font-weight: 600;
  color: #ce4a7e;
`;

export const Switcher = styled.span`
  margin-top: 20px;
  a {
    color: #ce4a7e;
  }
`;

export const Hr = styled.hr`
  border-color: #ead3d3;
  width: 100%;
  margin-top: 30px;
`;

export const Logo = styled.img`
  height: 55px;
`;

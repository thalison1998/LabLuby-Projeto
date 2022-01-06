import styled from "styled-components";

export const Container = styled.div`
  padding: 11px 10px;
  display: grid;
  gap: 10px;
  background: #ffffff;
  box-shadow: 0px 0.5px 3px rgba(149, 149, 149, 0.25);
  border-radius: 3px;
 
  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 24px;
    margin: 0;
  }
  .email-cpf {
    display: flex;
    gap: 43px;
  }
  .salary {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #e9e9e9;
    padding: 4px 0;
    align-items: center;
    span {
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 24px;
      color: #f54a48;
    }
  }
  .type {
    font-size: 1.2rem;
    font-weight: 600;
    color: #858585;
    text-transform: uppercase;
    line-height: 13, 5px;
  }
  .text {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 18px;
    color: #495057;
  }
`;

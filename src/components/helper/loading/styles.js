import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 30vh;
  display: grid;
  place-items: center center;

  filter:blur(.8px);
  .title-loading {
    font-size: 3.8rem;
    font-weight: 600;
    color:#F54A48;
    margin-bottom:10px;

  }
  rect {
    transition: opacity 500ms ease-in ;
  }
`;

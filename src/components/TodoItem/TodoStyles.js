import styled from "styled-components";

export const TodoItemWrapper = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 10px;
  background: ${(props) => props.bg || "#383ae2"};
  
  .btnWrapper {
    display: flex;
    grid-gap: 5px;
  }
`
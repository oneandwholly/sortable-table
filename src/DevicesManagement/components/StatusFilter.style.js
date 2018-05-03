import styled from "styled-components";

export default styled.div`
  display: flex;

  border: 1px solid #31373a;
  border-radius: 3px;

  height: 75%;

  span {
    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.07143em;
    padding: 0 10px;
    white-space: nowrap;
  }

  .filterOption {
    border-left: 1px solid #31373a;
    display: flex;
    align-items: center;
  }

  .start {
    border: none;
  }

  .selected {
    color: white;
    background-color: #31373a;
  }
`;

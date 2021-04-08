import styled from "styled-components";

export const InfoBox = styled.div`
  width: 20rem;
  height: 10rem;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  background: white;
  margin-left: 1rem;
  h3 {
    color: #acacac;
    font-weight: bold;
    text-transform: capitalize;
  }

  p {
    font-size: 2rem;
    color: red;
    font-weight: 600;
    margin-top: -0.3rem;
  }
  p:last-child {
    color: #535353;
    font-size: 1rem;
    margin-top: -1.2rem;
  }
`;

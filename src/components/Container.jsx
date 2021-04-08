import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 100px 250px 1fr 1fr;
  grid-template-areas:
    "header table"
    "infoboxes table"
    "map table"
    "map table";
`;

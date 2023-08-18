import styled from "styled-components";

export const Table = styled.table`
  align-self: center;
  border-collapse: collapse;
  margin: 1rem;
`;

export const TableHead = styled.thead`
  color: #fff;
  tr > th {
    color: #fff;
    border: 1px solid gray;
    min-width: 16rem;
  }
`;

export const TableCell = styled.td`
  border: 1px solid gray;
  margin: 0;
  padding: 0.25rem 0.5rem;
  width: max-content;
  min-width: 16rem;
`;

import React from "react";
import * as Styled from "./InformationTable.styles";

export default function InformationTable(props) {
  return (
    <Styled.Table>
      <Styled.TableHead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Phone</th>
        </tr>
      </Styled.TableHead>

      <tbody>
        {props.entries.map((item, idx) => (
          <tr key={idx}>
            <Styled.TableCell>{item.userFirstname} </Styled.TableCell>
            <Styled.TableCell>{item.userLastname} </Styled.TableCell>
            <Styled.TableCell>{item.userPhone} </Styled.TableCell>
          </tr>
        ))}
      </tbody>
    </Styled.Table>
  );
}

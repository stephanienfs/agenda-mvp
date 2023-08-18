import React, { useState } from "react";
import styled from "styled-components";
import PhoneBookForm from "./components/PhoneBookForm";
import InformationTable from "./components/InformationTable";

const AgendaSection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default function Agenda() {
  const [entries, setEntries] = useState([]);

  function addItem(newItem) {
    const updatedItems = [...entries, newItem];
    const sortedItems = updatedItems.sort((a, b) =>
      a.userLastname.localeCompare(b.userLastname)
    );

    setEntries(sortedItems);
  }
  return (
    <AgendaSection>
      <PhoneBookForm addEntryToPhoneBook={addItem} />
      <InformationTable entries={entries} />
    </AgendaSection>
  );
}

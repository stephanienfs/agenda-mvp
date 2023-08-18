import React, { useState } from "react";
import * as Styled from "./PhoneBookForm.styles";

export default function PhoneBookForm({ addEntryToPhoneBook }) {
  const [userFirstname, setUserFirstname] = useState("");
  const [userLastname, setUserLastname] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const handleOnSubmit = () => {
    if (!userFirstname && !userLastname && !userPhone) return;
    addEntryToPhoneBook({ userFirstname, userLastname, userPhone });
    setUserFirstname("");
    setUserLastname("");
    setUserPhone("");
  };

  return (
    <Styled.BookForm
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label>First name:</label>
      <br />
      <Styled.Input
        name="userFirstname"
        type="text"
        value={userFirstname}
        onChange={(e) => setUserFirstname(e.target.value)}
      />
      <br />
      <label>Last name:</label>
      <br />
      <Styled.Input
        name="userLastname"
        type="text"
        value={userLastname}
        onChange={(e) => setUserLastname(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <Styled.Input
        name="userPhone"
        type="text"
        value={userPhone}
        onChange={(e) => setUserPhone(e.target.value)}
      />
      <br />
      <Styled.SubmitButton onClick={handleOnSubmit} type="submit">
        Add User
      </Styled.SubmitButton>
    </Styled.BookForm>
  );
}

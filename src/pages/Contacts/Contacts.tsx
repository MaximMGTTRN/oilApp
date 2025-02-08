import React from "react";
import "./Contacts.css";
import { ContactsFormBlock } from "./ContactsFormBlock/ContactsFormBlock";
import { ContactsInfoBlock } from "./ContactsInfoBlock/ContactsInfoBlock";
import PageBody from "../../components/PageBody/PageBody";

const Contacts: React.FC = () => {
  return (
    <PageBody >
      <ContactsInfoBlock />
      <ContactsFormBlock />
    </PageBody>

  );
};

export default Contacts;

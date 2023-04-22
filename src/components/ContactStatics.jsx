import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ContactStatistics = () => {
    const contactState = useSelector(state=>state.contacts.contactsList);
  const maleContacts = contactState.filter((contact) => contact.gender === "male");
  const femaleContacts = contactState.filter(
    (contact) => contact.gender === "female"
  );
  const businessContacts = contactState.filter(
    (contact) => contact.contactType === "business"
  );
  const personalContacts = contactState.filter(
    (contact) => contact.contactType === "personal"
  );

  return (
    <Box sx={{display:"flex",flexDirection:"column" ,gap:"20px",mt:2}}>
      <h2>Contact Statistics</h2>
      <p>Male Contacts: {maleContacts.length}</p>
      <p>Female Contacts: {femaleContacts.length}</p>
      <p>Business Contacts: {businessContacts.length}</p>
      <p>Personal Contacts: {personalContacts.length} </p>
    </Box>
  );
};
export default ContactStatistics
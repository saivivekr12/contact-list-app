import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ContactStatistics = () => {
  const contactState = useSelector((state) => state.contacts.contactsList);

  const maleContacts = contactState.filter(
    (contact) => contact.gender === "male"
  );

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
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", mt: 2 }}>
      <h2>Contact Statistics</h2>
      <Typography sx={{ color: "orange" }} component="p">
        Male Contacts:{" "}
        <Typography component="span" sx={{ fontWeight: "bold" }}>
          {" "}
          {maleContacts.length}
        </Typography>
      </Typography>

      <Typography sx={{ color: "black" }} component="p">
      Female Contacts:{" "}
        <Typography component="span" sx={{ fontWeight: "bold" }}>
          {" "}
          {femaleContacts.length}
        </Typography>
      </Typography>

      <Typography sx={{ color: "green" }} component="p">
      Business Contacts:{" "}
        <Typography component="span" sx={{ fontWeight: "bold" }}>
          {" "}
          {businessContacts.length}
        </Typography>
      </Typography>

      <Typography sx={{ color: "red" }} component="p">
      Personal Contacts:{" "}
        <Typography component="span" sx={{ fontWeight: "bold" }}>
          {" "}
          {personalContacts.length}
        </Typography>
      </Typography>

    </Box>
  );
};

export default ContactStatistics;

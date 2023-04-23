import {
  Box,
  Button,
  Container,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector } from "react-redux";
import {
  addContacts,
  editContact,
  editContactData,
} from "../features/ContactListSlicer";
import { useLocation, useNavigate } from "react-router-dom";

const AddContact = () => {
  const editState = useSelector((state) => state.contacts.editContactList);
  const location = useLocation();
  const navigate = useNavigate();
  const [contact, setContacts] = useState({
    name: "",
    gender: "",
    contactType: "",
  });
  const dispatch = useDispatch();

  const { name, gender, contactType } = contact;


  useEffect(()=>{
     setContacts({
      name:editState.name,
      gender:editState.gender,
      contactType:editState.contactType
     })
  },[location.pathname.includes("edit"),editState])

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContacts((prevContacts) => ({ ...prevContacts, [name]: value }));
  };

  const handleClick = () => {
    if (
      (!name ||
      !gender ||
      !contactType )&&
      !location.pathname.includes("edit")
    ) {
      alert("please fill the form");
    } 
    else {
      if (location.pathname.includes("edit")) {
        const dummyContact = { ...contact };
        for (let contact in dummyContact) {
          if (dummyContact[contact] === "") {
            delete dummyContact[contact];
          }
        }
        dispatch(
          editContact({ id: editState.id, ...editState, ...dummyContact })
        );
      } else {
        dispatch(addContacts({ ...contact, id: crypto.randomUUID() }));
      }
      navigate("/");
      resetContacts();
    }
  };

  const resetContacts = ()=>{
    setContacts({
      name: "",
      gender: "",
      contactType: "",
    })
  }
  
  return (
    <Box sx={{ marginTop: "20px" }}>
      <Box
        sx={{
          background: "#ccc",
          padding: "24px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        {location.pathname.includes("edit") ? "Edit Contact" : "Add Contact"}
      </Box>
      <Container maxWidth="xs">
        <Paper>
          <Box
            display={"flex"}
            flexDirection="column"
            gap="20px"
            padding={"32px"}
          >
            <TextField
              id="outlined-basic"
              label="Enter Name"
              variant="outlined"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                value={gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Contact Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={contactType}
                  label="Contact Type"
                  onChange={handleChange}
                  name="contactType"
                >
                  <MenuItem value={"business"}>Business</MenuItem>
                  <MenuItem value={"personal"}>Personal</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button variant="outlined" onClick={handleClick}>
              Submit
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default AddContact;

import MaterialTable from "@material-table/core";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  deleteContact, editContactData } from "../features/ContactListSlicer";
import ContactStatistics from "./ContactStatics";

function List() {
  const contactState = useSelector(state=>state.contacts.contactsList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <>
    <MaterialTable
      title="Contact Lists"
      columns={[
        { title: "Name", field: "name" },
        { title: "Gender", field: "gender" },
        { title: "Contact Type", field: "contactType" },
      ]}
      data={contactState}
      actions={[
        {
          icon: "edit",
          tooltip: "Edit contact",
          onClick: (event, rowData) => {
            dispatch(editContactData(rowData));
            navigate("/edit")
          }
        },
        {
          icon: "delete",
          tooltip: "Delete contact",
          onClick: (event, rowData) => {
            dispatch(deleteContact(rowData.id))
          }
        },
      ]}
      options={{
        actionsColumnIndex: -1,
      }}
    />
    <ContactStatistics/>
     </>
  );
 
}

export default List;

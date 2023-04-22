import { createSlice } from '@reduxjs/toolkit'

export const contactsListSlice = createSlice({
  name: 'contacts',
  initialState: {
   contactsList:[],
   editContactList:{
    name:"",
    gender:"",
    contactType:""
   }
  },
  reducers: {
    addContacts:(state,action)=>{
      state.contactsList.push(action.payload)
    },
    editContactData:(state,action)=>{
     state.editContactList.name=action.payload.name
     state.editContactList.gender=action.payload.gender
     state.editContactList.contactType=action.payload.contactType
     state.editContactList.id=action.payload.id
    },

    editContact:(state,action)=>{
      state.contactsList= state.contactsList.map((contact)=>{
         console.log(action.payload,"action.payload")
         if(contact.id===action.payload.id){
            return {...action.payload}
         }
         else{
            return contact
         }
      })
    },
    
    deleteContact:(state,action)=>{
     state.contactsList=state.contactsList.filter(contact=>{
      return contact.id!==action.payload
     })
    }
  }
})

// Action creators are generated for each case reducer function
export const {  addContacts,editContactData,editContact,deleteContact} = contactsListSlice.actions

export default  contactsListSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import ContactsListReducer from '../features/ContactListSlicer'

export default configureStore({
  reducer: {
    contacts:ContactsListReducer
  }
})
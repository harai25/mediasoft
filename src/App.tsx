import React, { useState } from 'react'
import './App.css'
import ContactList from './contact_list/ContactList'
import ContactAdd from './contact_add/ContactAdd'
import { Pages, PageContext } from './PagesContext'

function App() {
  const [currentPage, setCurrentPage] = useState(Pages.ContactList)


  const getCurrentComponent = (page: Pages) => {
    if (page === Pages.ContactList) {
      return <ContactList />
    } else if (page === Pages.ContactAdd) {
      return <ContactAdd />
    }
  }

  return (
    <PageContext.Provider value={{currentPage, setCurrentPage}}>

      {getCurrentComponent(currentPage)}

    </PageContext.Provider>
  )
}

export default App

import React, { useState, useContext } from 'react'
import './ContactList.css'
import ContactItem from './ContactItem'
import Search from '../common/Search'
import { Pages, PageContext } from '../PagesContext'


function ContactList() {
  const [searchString, setSearchString] = useState('')

  const {currentPage, setCurrentPage} = useContext(PageContext);

  return (
    <div className="contacts">
      
      <div className='contacts__head'>
        <div className='contacts__logo'>
          <i className="fa fa-phone-square"></i>
        </div>
        <Search className='contacts__search' value={searchString} input={setSearchString} />
      </div>


      <div className='contacts__list'>

        <ContactItem />

      </div>


      <div className='contacts__footer' onClick={() => setCurrentPage(Pages.ContactAdd)}>
        <span>Добавить</span>
      </div>


    </div>
  )
}

export default ContactList

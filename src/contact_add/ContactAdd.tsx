import React, { useContext } from 'react'
import './ContactAdd.css'
import { Pages, PageContext } from '../PagesContext'

function ContactAdd() {
  const {currentPage, setCurrentPage} = useContext(PageContext);

  return (
    <div className='contact-add'>

      <div className='contact-add__head'>
        <div className='contact-add__logo' onClick={() => setCurrentPage(Pages.ContactList)}>
          <i className="fa fa-phone-square"></i>
        </div>
        <div className='contact-add__title'>
          Add contact
        </div>
      </div>


      <div className='contact-add__form'>


      </div>


      <div className='contact-add__footer'>
        <span>Создать</span>
      </div>

    </div>
  )
}

export default ContactAdd

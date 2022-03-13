import { useState, useMemo } from 'react'
import './ContactList.css'
import ContactItem from './ContactItem'
import Search from '../common/Search'
import ContactAdd from '../contact_add/ContactAdd'
import { ContactI } from '../types/Contact'


function ContactList() {
  const [searchString, setSearchString] = useState('')
  const [isOpenEdit, setIsOpenEdit] = useState(false)

  const [contactList, setContactList] = useState<ContactI[]>([])

  const validContactList = useMemo(() => {
    const sortedList = contactList.sort((a, b) => +b.favorite - +a.favorite || a.name.localeCompare(b.name))
    if (searchString) {
      return sortedList.filter(e => e.name.includes(searchString))
    } else {
      return sortedList
    }
  }, [searchString, contactList])

  const createContact = (contact: ContactI) => {
    let sameNameCount = 0
    const originalName = contact.name
    function recursiveCheckNameExist() {
      const isSameNameExist = contactList.find(e => e.name === contact.name)
      if (isSameNameExist) {
        contact.name = `${originalName} (${sameNameCount++})`
        recursiveCheckNameExist()
      }
    }
    recursiveCheckNameExist()
    setContactList([...contactList, contact])
  }

  const removeContact = (contact: ContactI) => {
    setContactList(contactList.filter(e => e !== contact))
  }

  const toggleFavorite = (contact: ContactI) => {
    const newContactList = contactList.slice(0)
    const index = newContactList.findIndex(e => e === contact)
    newContactList[index].favorite = !newContactList[index].favorite
    setContactList(newContactList)
  }

  return (
    isOpenEdit ?
    <ContactAdd 
      setIsOpenEdit={setIsOpenEdit} 
      create={createContact}

    /> :
    
    <div className="contacts">
      <div className='contacts__head'>
        <div className='contacts__logo'>
          <i className="fa fa-phone-square"></i>
        </div>
        <Search className='contacts__search' value={searchString} input={setSearchString} />
      </div>
      <div className='contacts__list'>
        {validContactList.map(
          e => {
            return <ContactItem 
              key={e.name} 
              contact={e} 
              remove={removeContact}
              toggleFavorite={toggleFavorite}
            />
          }
        )}
      </div>
      <div className='contacts__footer' onClick={() => setIsOpenEdit(true)}>
        <span>Add</span>
      </div>
    </div>
  )
}

export default ContactList

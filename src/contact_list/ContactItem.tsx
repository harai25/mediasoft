import './ContactItem.css'
import profileImage from '../assets/profile.png'
import { ContactI } from '../types/Contact'

export interface ContactItemProps {
  contact: ContactI,
  remove: (e: ContactI) => void,
  toggleFavorite: (e: ContactI) => void,
}


function ContactItem({contact, remove, toggleFavorite}: ContactItemProps) {

  const getHeart = () => {
    if (contact.favorite) {
      return <i className='fas fa-heart'></i>
    } else {
      return <i className='far fa-heart'></i>
    }
  }

  return (
    <div className='contact-item'>

      <div className='contact-item__image'>
        <img src={profileImage} alt="profile" width="50px" height="50px"/>
      </div>


      <div className='contact-item__info'>
        <div className='contact-item__name'>
          {contact.uniqName}
        </div>
        <div className='contact-item__phone'>
          {contact.phone}
        </div>
      </div>


      <div className='contact-item__actions'>
        <div className='contact-item__remove' onClick={() => remove(contact)}>
          <i className='fa fa-times'></i>
        </div>

        <div className='contact-item__favorite' onClick={() => toggleFavorite(contact)}>
          {getHeart()}
        </div>
      </div>

    </div>
  )
}

export default ContactItem
